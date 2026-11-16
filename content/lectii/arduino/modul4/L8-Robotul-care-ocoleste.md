# LECȚIA 8 — Robotul care ocolește
### Senzor, decizie, motoare și viteză adaptată
**Modulul 4 · Proiecte complete**  
**Code Maker Club · Arduino Creator**

> Azi construiești „creierul” unui **robot** cu două motoare și un senzor de distanță, care merge singur și **ocolește obstacolele**.  
> Proiect: **„Robotul care ocolește”** · `Prenume_Nume_A4_L08`

---

## Ce facem azi
La finalul orei ai **două proiecte**: un **robot care ocolește obstacolele** (două motoare, un senzor de distanță și un servo care „se uită” în stânga și în dreapta și alege partea cu mai mult loc) și un **robot cu viteză adaptată**, care încetinește când se apropie de un obstacol și își numără ocolirile. Robotul autonom pune cap la cap tot ce știi: **simte**, **decide**, **acționează**.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L7 · ce face un robot |
| 10–35 | Circuitul: 2 motoare și senzorul |
| 35–60 | **Proiectul 1** · mersul și întoarcerea |
| 60–80 | **Proiectul 1** · servo care alege direcția |
| 80–110 | **Proiectul 2** · viteză adaptată și contor de ocoliri |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme |

**Componente azi:** Arduino Uno · Breadboard · 2 × DC Motor · 2 × NPN transistor · 2 × Diodă · 2 × Resistor 1 kΩ · HC-SR04 · Micro Servo · Pushbutton · LED · Resistor 220 Ω · LED roșu + Resistor 220 Ω (doar la Bonus) · fire

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `analogWrite(MOTOR_ST, viteza)` | Dă motorului o viteză între 0 și 255 | `analogWrite(MOTOR_ST, 200);` |
| `pulseIn(ECHO, HIGH, 30000)` | Măsoară cât durează ecoul, cu limită de timp | `long timp = pulseIn(ECHO, HIGH, 30000);` |
| `cap.write(unghi)` | Mută servo-ul la un unghi | `cap.write(150);` |
| `float masoaraLa(int unghi)` | Funcție care întoarce servo-ul și măsoară distanța | `float dist = masoaraLa(30);` |
| `map(cm, PRAG, 100, 120, 255)` | Transformă distanța într-o viteză | `return map(c, PRAG, 100, 120, 255);` |
| `ocoliri++` | Crește contorul cu 1, o dată la fiecare ocolire | `ocoliri++;` |

---

## Pas cu pas

### 1) Circuit nou
`Prenume_Nume_A4_L08`

**Gata când:**  
- [ ] Proiectul nou are numele `Prenume_Nume_A4_L08`  

### 2) Cum merge un robot cu 2 roți
Fiecare roată are propriul motor. Fără mers înapoi, **virezi** oprind **o singură roată**:

| Motor stânga | Motor dreapta | Robotul… |
|--------------|---------------|----------|
| pornit | pornit | merge înainte |
| oprit | pornit | virează **la stânga** (se învârte în jurul roții stângi) |
| pornit | oprit | virează **la dreapta** |
| oprit | oprit | stă |

**Gata când:**  
- [ ] Am încercat fiecare situație din listă  
- [ ] Am notat ce nu a mers și am corectat  

### 3) Conexiuni

| Piesă | Se conectează |
|-------|---------------|
| **Motor stânga** | un fir 5V · celălalt la colectorul tranzistorului 1 · emitor GND · bază la pin **5** prin 1 kΩ · dioda în paralel cu motorul (banda spre 5V) |
| **Motor dreapta** | la fel, cu tranzistorul 2, baza la pin **6** prin 1 kΩ |
| **HC-SR04** | VCC 5V · GND · TRIG **7** · ECHO **8** |
| **Servo** | roșu 5V · negru GND · semnal **9** |
| **Buton start** | pin **2** și **GND** |
| **LED stare** | pin **13** → 220 Ω → anod · catod → GND |

În Tinkercad, lipește **senzorul pe servo**, dar dacă ai încurcătură, începe cu senzorul fix și adaugă servo-ul la pasul 6.

**Gata când:**  
- [ ] Toate firele sunt conectate exact ca în tabel  
- [ ] Am verificat de două ori GND și 5V înainte să pornesc simularea  

### 4) Funcții de bază

```cpp
const int MOTOR_ST = 5;
const int MOTOR_DR = 6;

void inainte(int viteza) {
  analogWrite(MOTOR_ST, viteza);
  analogWrite(MOTOR_DR, viteza);
}

void stanga(int viteza) {
  analogWrite(MOTOR_ST, 0);
  analogWrite(MOTOR_DR, viteza);
}

void dreapta(int viteza) {
  analogWrite(MOTOR_ST, viteza);
  analogWrite(MOTOR_DR, 0);
}

void opreste() {
  analogWrite(MOTOR_ST, 0);
  analogWrite(MOTOR_DR, 0);
}
```

Cu aceste funcții, restul programului arată ca niște **comenzi simple**: `inainte(200); delay(1000); stanga(200);`.

### 5) Minim — ocolește la 20 cm

```cpp
const int MOTOR_ST = 5;
const int MOTOR_DR = 6;
const int TRIG = 7;
const int ECHO = 8;
const int VITEZA = 200;

float masoara() {
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  long timp = pulseIn(ECHO, HIGH, 30000);
  if (timp == 0) return 400;
  return timp * 0.034 / 2.0;
}

void inainte(int viteza) {
  analogWrite(MOTOR_ST, viteza);
  analogWrite(MOTOR_DR, viteza);
}

void dreapta(int viteza) {
  analogWrite(MOTOR_ST, viteza);
  analogWrite(MOTOR_DR, 0);
}

void setup() {
  pinMode(MOTOR_ST, OUTPUT);
  pinMode(MOTOR_DR, OUTPUT);
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
}

void loop() {
  if (masoara() < 20) {
    dreapta(VITEZA);
    delay(400);
  } else {
    inainte(VITEZA);
  }
  delay(50);
}
```

`if (timp == 0) return 400;` — dacă nu vine ecou, considerăm calea **liberă** (400 cm), nu un obstacol. Fără această regulă, robotul ar crede că e un obstacol chiar și pe drum liber (ai văzut asta la parcarea din Modulul 2).

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Simularea pornește și montajul face ce scrie în „Minim”  

### 6) Complet — se uită și alege

```cpp
#include <Servo.h>

const int MOTOR_ST = 5;
const int MOTOR_DR = 6;
const int TRIG = 7;
const int ECHO = 8;
const int PIN_SERVO = 9;
const int BUTON = 2;
const int LED = 13;
const int VITEZA = 200;
const int PRAG = 20;

Servo cap;
bool pornit = false;
bool butonAnterior = false;

float masoara() {
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  long timp = pulseIn(ECHO, HIGH, 30000);
  if (timp == 0) return 400;
  return timp * 0.034 / 2.0;
}

float masoaraLa(int unghi) {
  cap.write(unghi);
  delay(500);
  float cm = masoara();
  return cm;
}

void inainte(int viteza) {
  analogWrite(MOTOR_ST, viteza);
  analogWrite(MOTOR_DR, viteza);
}

void stanga(int viteza) {
  analogWrite(MOTOR_ST, 0);
  analogWrite(MOTOR_DR, viteza);
}

void dreapta(int viteza) {
  analogWrite(MOTOR_ST, viteza);
  analogWrite(MOTOR_DR, 0);
}

void opreste() {
  analogWrite(MOTOR_ST, 0);
  analogWrite(MOTOR_DR, 0);
}

void ocoleste() {
  opreste();

  float distStanga = masoaraLa(150);
  float distDreapta = masoaraLa(30);
  cap.write(90);

  if (distStanga > distDreapta) {
    stanga(VITEZA);
  } else {
    dreapta(VITEZA);
  }
  delay(600);
  opreste();
}

void setup() {
  pinMode(MOTOR_ST, OUTPUT);
  pinMode(MOTOR_DR, OUTPUT);
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  pinMode(LED, OUTPUT);
  pinMode(BUTON, INPUT_PULLUP);
  cap.attach(PIN_SERVO);
  cap.write(90);
  Serial.begin(9600);
}

void loop() {
  bool apasat = (digitalRead(BUTON) == LOW);
  if (apasat && !butonAnterior) {
    pornit = !pornit;
    if (!pornit) opreste();
  }
  butonAnterior = apasat;

  digitalWrite(LED, pornit);

  if (pornit) {
    float cm = masoara();
    Serial.println(cm, 0);

    if (cm < PRAG) {
      ocoleste();
    } else {
      inainte(VITEZA);
    }
  }
  delay(50);
}
```

**Cum gândește robotul**

1. Merge înainte cât timp calea e liberă.  
2. Vede un obstacol sub 20 cm → **se oprește**.  
3. Servo-ul se uită la **stânga** (150°) și la **dreapta** (30°) și măsoară.  
4. Alege partea cu **distanța mai mare** și virează 0,6 secunde.  
5. Servo revine în față și robotul pornește iar.

În funcții ca `ocoleste()`, `delay` e acceptabil: robotul **stă oricum**.

**Gata când:**  
- [ ] Codul complet se compilează fără erori  
- [ ] Simularea face tot ce scrie în „Complet”  

### 7) Teste

| Scenariu | Ce faci | Rezultat |
|----------|---------|----------|
| Cale liberă | nimic în față | ambele motoare merg |
| Obstacol în față | obiect la 10 cm | motoarele se opresc, servo se uită |
| Mai mult loc în stânga | obiect doar în dreapta | virează spre stânga |
| Buton | apasă | pornit / oprit, LED arată starea |

**Gata când:**  
- [ ] Am încercat fiecare situație din listă  
- [ ] Am notat ce nu a mers și am corectat  

### 8) Proiectul 2 — Viteză adaptată și contor de ocoliri
Un robot care merge mereu cu aceeași viteză lovește obstacolele la fel de tare. Acum robotul **încetinește** când se apropie: la 100 cm sau mai mult merge cu viteza **255**, iar la 20 cm are doar **120**. În plus, **numără ocolirile** și le trimite în Serial Monitor. Circuitul rămâne cel de la proiectul 1; modifici programul **Complet**.

**a) Variabilă și funcție nouă** (înainte de `ocoleste()`):

```cpp
int ocoliri = 0;

int vitezaPentru(float cm) {
  int c = constrain((int)cm, PRAG, 100);
  return map(c, PRAG, 100, 120, 255);
}
```

**b) În `ocoleste()`**, după `opreste();`, adaugi:

```cpp
  ocoliri++;
  Serial.print("Ocoliri: ");
  Serial.println(ocoliri);
```

**c) În `loop()`**, ramura `else` devine:

```cpp
    } else {
      inainte(vitezaPentru(cm));
    }
```

- `constrain` păstrează distanța între 20 și 100 cm, ca `map` să dea mereu o viteză între 120 și 255.  
- Sub 120 motoarele nu pornesc de obicei, de aceea viteza minimă nu e 0.  
- Contorul ocolirilor se vede în **Serial Monitor**.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Robotul încetinește când se apropie și Serial Monitor numără ocolirile  

### 9) Testul vitezei

| Pas | Ce faci | Ce vezi |
|-----|---------|---------|
| 1 | Obstacol la 150 cm | Viteză maximă |
| 2 | Muți obstacolul la 60 cm | Viteză mai mică |
| 3 | Muți obstacolul la 25 cm | Viteză aproape de 120 |
| 4 | Muți obstacolul la 10 cm | Robotul se oprește și ocolește, `Ocoliri: 1` |

**Gata când:**  
- [ ] Am încercat fiecare pas din listă  
- [ ] Am notat ce nu a mers și am corectat  

---

## Greșeli frecvente
1. **Robotul se învârte mereu** — pragul e prea mare sau senzorul „vede” mereu ceva.  
2. **Un motor nu merge** — tranzistorul sau dioda e greșit conectată.  
3. **Nu virează** — ambele motoare primesc același semnal.  
4. **Servo-ul tremură** — alimentare insuficientă; adaugă GND comun.  
5. **Citiri 0** — tratate ca obstacol; folosește `return 400` la lipsa ecoului.
6. **Robotul nu pornește deloc** — viteza minimă e prea mică pentru motoare; ridic-o la 120–150.    
7. **Viteza sare haotic** — lipsește `constrain`, iar `map` primește distanțe în afara intervalului.    
8. **Contorul crește tot timpul** — `ocoliri++` e în `loop()`, nu în `ocoleste()`.    

---

## De făcut azi — „Robotul care ocolește”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Merge, vede obstacol, virează |
| **Complet** | Minim + servo care se uită + alege partea liberă + buton |
| **Proiectul 2** | Viteză adaptată distanței și contor de ocoliri |

### Pasul 1 — Minim
- [ ] 2 motoare cu tranzistoare și diode  
- [ ] Ocolește la 20 cm  

### Pasul 2 — Complet
- [ ] Servo măsoară stânga și dreapta  
- [ ] Alege direcția cu mai mult loc  
- [ ] Buton pornit / oprit  
- [ ] Numele `A4_L08` e corect

### Pasul 3 — Proiectul 2
- [ ] `vitezaPentru()` dă 120–255 după distanță  
- [ ] Robotul încetinește când se apropie  
- [ ] `ocoliri` se afișează în Serial Monitor  

---

## Bonus ★★★ — Robotul gânditor
*Doar dacă ai terminat Proiectul 2.*

Robotul arată când „gândește”. **Piesă nouă:** un LED roșu pe pin **4** (prin 220 Ω).

- [ ] LED-ul roșu se aprinde la începutul funcției `ocoleste()` și se stinge la final  
- [ ] Dacă ambele părți sunt blocate (sub 15 cm), robotul se învârte mai mult, ca la o întoarcere completă  
- [ ] Testezi cu obstacole pe ambele părți  

## Recapitulare pe scurt
1. Robot = **simte → decide → acționează**  
2. Virezi oprind o singură roată  
3. Funcții simple: `inainte`, `stanga`, `dreapta`, `opreste`  
4. `map` și `constrain` leagă viteza de distanță  

## Pe placa reală *(opțional)*
Un robot real are nevoie de **șasiu**, roți, baterii separate pentru motoare și un modul driver (L298N sau L9110) care permite și mersul înapoi. Alimentează motoarele separat de Arduino, cu GND comun.

## Quiz scurt
- Cum virează robotul cu 2 roți?  
- De ce `return 400` când nu vine ecou?  
- Ce face robotul dacă ambele părți au aceeași distanță?
- De ce folosim `constrain` înainte de `map` la viteză?  

## Temă
Desenează pe hârtie un labirint simplu și urmărește cum ar trece robotul prin el, pas cu pas.

---

## Ce urmează — Lecția 9
În **lecția 9** începi **proiectul final**: alegi ce construiești, faci circuitul și programul de bază.
