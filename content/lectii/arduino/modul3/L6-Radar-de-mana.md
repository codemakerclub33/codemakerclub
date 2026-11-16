# LECȚIA 6 — Radar cu servo
### Scanare cu servo și senzor de distanță
**Modulul 3 · Afișaj și mișcare**  
**Code Maker Club · Display Maker**

> Azi pui un senzor de distanță **pe un servo** și construiești un radar care „scanează” camera.  
> Proiect: **„Radar cu servo”** · `Prenume_Nume_A3_L06`

---

## Ce facem azi
La finalul orei ai **două proiecte**: **Radarul** (un senzor de distanță pe un servo, care scanează 0–180°, dă alerta când găsește ceva aproape și reține unghiul obiectului celui mai apropiat) și un **radar care arată spre țintă**: după scanare se oprește exact în direcția obiectului. Radarele, sonarele și LIDAR-ul mașinilor autonome fac același lucru: **rotesc un senzor** și construiesc o „hartă” a ce e în jur.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L5 · servo + distanță |
| 10–25 | Montaj: senzor + servo |
| 25–50 | **Proiectul 1** · scanarea 0–180° și funcția `scaneaza` |
| 50–75 | **Proiectul 1** · alertă și cel mai apropiat obiect |
| 75–110 | **Proiectul 2** · radarul care arată spre țintă |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme |

**Componente azi:** Arduino Uno · Breadboard · Micro Servo · HC-SR04 · LED roșu · Resistor 220 Ω · Piezo · Pushbutton (doar la Bonus) · fire

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `unghi += 10` | Pas de 10 grade: 0, 10, 20 … 180 | `for (int unghi = 0; unghi <= 180; unghi += 10)` |
| `void scaneaza(int deLa, int panaLa, int pas)` | Funcție cu **parametri**: de la ce unghi, până la ce unghi, cu ce pas | `scaneaza(180, 0, -10);` |
| `float celMaiApropiat = 999;` | Variabilă globală care pornește uriașă, ca orice măsurătoare s-o bată | `if (cm > 0 && cm < celMaiApropiat) { ... }` |
| `Serial.print(unghi); Serial.print(",")` | Afișează „unghi,distanță”, ca în aplicațiile reale de radar | `Serial.println(cm, 0);` |
| `radar.write(unghiApropiat)` | Duce radarul spre un unghi reținut | `radar.write(unghiApropiat);` |
| `cm > 0 && cm < PRAG` | Ignoră „fără ecou” (0) și alertează sub prag | `if (cm > 0 && cm < PRAG) { ... }` |

---

## Pas cu pas

### 1) Circuit nou
`Prenume_Nume_A3_L06`

**Gata când:**  
- [ ] Proiectul nou are numele `Prenume_Nume_A3_L06`  

### 2) Conexiuni

| Piesă | Se conectează |
|-------|---------------|
| **Servo** | roșu 5V · negru GND · semnal pin **9** |
| **HC-SR04** | VCC 5V · GND · TRIG pin **7** · ECHO pin **6** |
| **LED roșu** | pin **4** → 220 Ω → anod · catod → GND |
| **Piezo** | pin **8** și **GND** |

În Tinkercad, **lipește** HC-SR04 pe brațul servo (trage-l peste el), ca să se rotească împreună.

**Gata când:**  
- [ ] Toate firele sunt conectate exact ca în tabel  
- [ ] Am verificat de două ori GND și 5V înainte să pornesc simularea  

### 3) Minim — scanare

```cpp
#include <Servo.h>

const int TRIG = 7;
const int ECHO = 6;

Servo radar;

float masoara() {
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  long timp = pulseIn(ECHO, HIGH, 30000);
  return timp * 0.034 / 2.0;
}

void setup() {
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  radar.attach(9);
  Serial.begin(9600);
}

void loop() {
  for (int unghi = 0; unghi <= 180; unghi += 10) {
    radar.write(unghi);
    delay(300);
    Serial.print(unghi);
    Serial.print(",");
    Serial.println(masoara(), 0);
  }
  for (int unghi = 180; unghi >= 0; unghi -= 10) {
    radar.write(unghi);
    delay(300);
    Serial.print(unghi);
    Serial.print(",");
    Serial.println(masoara(), 0);
  }
}
```

- `unghi += 10` face pași de **10 grade**: 0, 10, 20 … 180.  
- `delay(300)` lasă servo-ul să ajungă înainte de măsurare.  
- Format „unghi,distanță” (cu virgulă): la fel ca în aplicațiile reale de radar.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Simularea pornește și montajul face ce scrie în „Minim”  

### 4) Un singur sens, cu o funcție
Ca să nu duplicăm codul, facem o funcție care scanează între două unghiuri:

```cpp
void scaneaza(int deLa, int panaLa, int pas) {
  for (int unghi = deLa; unghi != panaLa + pas; unghi += pas) {
    radar.write(unghi);
    delay(300);
    // aici măsori și afișezi
  }
}
```

Apeli: `scaneaza(0, 180, 10);` (dus) și `scaneaza(180, 0, -10);` (întors). Pasul **negativ** inversează sensul.

### 5) Complet — alertă și cel mai apropiat obiect

```cpp
#include <Servo.h>

const int TRIG = 7;
const int ECHO = 6;
const int LED = 4;
const int BUZZER = 8;
const int PRAG = 30;

Servo radar;

float celMaiApropiat = 999;
int unghiApropiat = 0;

float masoara() {
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  long timp = pulseIn(ECHO, HIGH, 30000);
  return timp * 0.034 / 2.0;
}

void scaneaza(int deLa, int panaLa, int pas) {
  for (int unghi = deLa; unghi != panaLa + pas; unghi += pas) {
    radar.write(unghi);
    delay(300);

    float cm = masoara();

    Serial.print(unghi);
    Serial.print(",");
    Serial.println(cm, 0);

    if (cm > 0 && cm < celMaiApropiat) {
      celMaiApropiat = cm;
      unghiApropiat = unghi;
    }

    if (cm > 0 && cm < PRAG) {
      digitalWrite(LED, HIGH);
      tone(BUZZER, 1000, 100);
    } else {
      digitalWrite(LED, LOW);
    }
  }
}

void setup() {
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  pinMode(LED, OUTPUT);
  radar.attach(9);
  Serial.begin(9600);
}

void loop() {
  celMaiApropiat = 999;

  scaneaza(0, 180, 10);

  Serial.print("Cel mai apropiat: ");
  Serial.print(celMaiApropiat, 0);
  Serial.print(" cm la ");
  Serial.print(unghiApropiat);
  Serial.println(" grade");

  scaneaza(180, 0, -10);
}
```

**Idei importante**

- **Variabile globale** `celMaiApropiat` și `unghiApropiat` rețin rezultatul scanării.  
- La început de scanare, `celMaiApropiat = 999` — o valoare uriașă, pe care orice măsurătoare o bate.  
- Condiția `unghi != panaLa + pas` oprește ciclul **după** ultimul unghi, în ambele sensuri.

**Gata când:**  
- [ ] Codul complet se compilează fără erori  
- [ ] Simularea face tot ce scrie în „Complet”  

### 6) Cum citești rezultatul
Dacă în Serial Monitor vezi `70,18`, înseamnă: **la 70°** e ceva la **18 cm**. Pune un obiect în fața radarului și învârte-l pentru a vedea cum se schimbă unghiul.

### 7) Proiectul 2 — Radarul care arată spre țintă
Radarele adevărate nu doar scanează: **urmăresc** ținta. Facem un pas în direcția asta: radarul scanează o dată de la 0° la 180°, reține unghiul obiectului cel mai apropiat, apoi **se întoarce exact spre el** și aprinde LED-ul. Dacă nu găsește nimic mai aproape de 100 cm, scrie „Nu vad nimic”. Circuitul rămâne cel de la proiectul 1.

```cpp
#include <Servo.h>

const int TRIG = 7;
const int ECHO = 6;
const int LED = 4;
const int DIST_MAX = 100;

Servo radar;

float celMaiApropiat = 999;
int unghiApropiat = 90;

float masoara() {
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  long timp = pulseIn(ECHO, HIGH, 30000);
  return timp * 0.034 / 2.0;
}

void scaneaza(int deLa, int panaLa, int pas) {
  for (int unghi = deLa; unghi != panaLa + pas; unghi += pas) {
    radar.write(unghi);
    delay(300);

    float cm = masoara();
    if (cm > 0 && cm < celMaiApropiat) {
      celMaiApropiat = cm;
      unghiApropiat = unghi;
    }
  }
}

void setup() {
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  pinMode(LED, OUTPUT);
  radar.attach(9);
  radar.write(0);
  delay(500);
  Serial.begin(9600);
}

void loop() {
  celMaiApropiat = 999;
  scaneaza(0, 180, 10);

  if (celMaiApropiat < DIST_MAX) {
    radar.write(unghiApropiat);
    digitalWrite(LED, HIGH);
    Serial.print("Tinta la ");
    Serial.print(unghiApropiat);
    Serial.print(" grade, ");
    Serial.print(celMaiApropiat, 0);
    Serial.println(" cm");
    delay(2000);
    digitalWrite(LED, LOW);
  } else {
    Serial.println("Nu vad nimic");
    delay(1000);
  }

  radar.write(0);
  delay(800);
}
```

- Scanarea doar **reține** cea mai mică distanță și unghiul ei; nu afișează nimic la fiecare pas.  
- `radar.write(unghiApropiat)` întoarce radarul exact spre țintă, iar LED-ul rămâne aprins 2 secunde.  
- La final radarul se întoarce la 0°, ca scanarea următoare să înceapă din același loc.  
- `DIST_MAX` e o constantă: schimbi un singur număr ca să vadă mai aproape sau mai departe.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] După scanare, radarul se oprește în direcția obiectului, iar LED-ul se aprinde  

### 8) Testul radarului

| Scenariu | Ce faci | Rezultat |
|----------|---------|----------|
| 1 | Pui un obiect la ~40 cm, în dreapta | Serial Monitor: „Tinta la … grade”, radarul arată spre el |
| 2 | Muți obiectul în partea opusă | Unghiul se schimbă la următoarea scanare |
| 3 | Pui două obiecte, la 30 cm și la 60 cm | Radarul alege **pe cel de la 30 cm** |
| 4 | Scoți toate obiectele | „Nu vad nimic”, LED-ul rămâne stins |

**Gata când:**  
- [ ] Am încercat fiecare scenariu din listă  
- [ ] Am notat ce nu a mers și am corectat

---

## Greșeli frecvente
1. **Distanțe aiurea** — măsori înainte ca servo-ul să ajungă; mărește `delay`.  
2. **Ciclu infinit** — condiția din `for` nu e atinsă (ex. `unghi != 180` când pasul sare peste).  
3. **Senzorul nu se rotește** — nu e lipit de servo în Tinkercad.  
4. **Zgomot** — alertele se declanșează mereu; mărește pragul sau fă media a 3 măsurători.  
5. **Servo tremură** — lipsește GND comun.
6. **Radarul arată mereu spre aceeași direcție** — `celMaiApropiat` nu e resetat la 999 la începutul fiecărei scanări.  
7. **Radarul arată spre un obiect care nu există** — ai tratat `cm == 0` (fără ecou) ca distanță mică; folosește `cm > 0 &&`.  
8. **Prima măsurătoare e aiurea** — radarul nu a ajuns încă la 0° la pornire; pune un `delay` după `radar.write(0)` în `setup`.  

---

## De făcut azi — „Radar cu servo”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Scanare 0–180° cu distanța afișată |
| **Complet** | Minim + LED/buzzer + cel mai apropiat obiect |
| **Proiectul 2** | Radar care, după scanare, se întoarce spre cel mai apropiat obiect și aprinde LED-ul |

### Pasul 1 — Minim
- [ ] Servo și senzor montate  
- [ ] Format „unghi,distanță”  

### Pasul 2 — Complet
- [ ] Funcția `scaneaza`  
- [ ] Alertă la sub 30 cm  
- [ ] Raport „Cel mai apropiat”  
- [ ] Numele `A3_L06` e corect

### Pasul 3 — Proiectul 2
- [ ] Scanarea reține cel mai apropiat obiect  
- [ ] Radarul se întoarce spre el și aprinde LED-ul  
- [ ] Fără obiecte sub 100 cm scrie „Nu vad nimic”  

---

## Bonus ★★★ — Provocare: Radar cu pauză
*Doar dacă ai terminat Proiectul 2.*

Un radar adevărat poate fi oprit ca să te uiți mai atent. **Piesă nouă:** un buton pe pin 2 și GND.

- [ ] Butonul oprește scanarea pe loc (servo-ul rămâne la unghiul curent), iar a doua apăsare o reia de unde a rămas  
- [ ] În pauză, Serial Monitor scrie în fiecare secundă distanța măsurată la unghiul curent  
- [ ] Pasul scanării e o constantă `PAS` (5 sau 10), schimbată într-un singur loc  

## Recapitulare pe scurt
1. `for` cu `unghi += 10` scanează în trepte  
2. Funcția `scaneaza(deLa, panaLa, pas)` merge în ambele sensuri  
3. `celMaiApropiat = 999` la început, apoi se corectează  
4. `cm > 0 &&` ignoră „fără ecou”  
5. Un unghi reținut poate fi refolosit cu `write`  

## Pe placa reală *(opțional)*
Servo-urile mici vibrează și pot strica măsurătorile; fixează senzorul bine și lasă o pauză după fiecare mișcare.

## Quiz scurt
- De ce așteptăm 300 ms înainte să măsurăm?  
- La ce folosește `celMaiApropiat = 999`?  
- Ce face un pas de `-10`?
- Ce se întâmplă dacă uiți `celMaiApropiat = 999;` la începutul scanării?  

## Temă
Desenează pe hârtie o „hartă” de radar în formă de semicerc și marchează unde ar apărea 3 obiecte.

---

## Ce urmează — Lecția 7
În **lecția 7** treci de la servo la un motor de curent continuu, pornit printr-un tranzistor, și construiești un ventilator.
