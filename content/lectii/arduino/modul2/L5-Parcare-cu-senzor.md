# LECȚIA 5 — Parcare inteligentă
### Ultrasunete, distanță și bipuri
**Modulul 2 · Senzori**  
**Code Maker Club · Sensor Scout**

> Azi măsori **distanța** cu senzorul cu ultrasunete **HC-SR04**, exact ca la mașinile moderne: cu cât te apropii, cu atât bipurile sunt mai dese.  
> Proiect: **„Parcare inteligentă”** · `Prenume_Nume_A2_L05`

---

## Ce facem azi
La finalul orei ai **două proiecte**: **Parcarea inteligentă** (distanța în Serial Monitor, trei LED-uri și bipuri) și un **bip proporțional**, care sună tot mai des pe măsură ce te apropii. Așa funcționează senzorii de parcare de la mașini.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L4 · praguri și buzzer |
| 10–25 | Cum funcționează ultrasunetele |
| 25–50 | Circuitul și măsurarea distanței |
| 50–75 | **Proiectul 1** · funcție pentru distanță + lumini și bipuri |
| 75–110 | **Proiectul 2** · bip proporțional cu distanța |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme |

**Componente azi:** Arduino Uno · Breadboard · **Ultrasonic Distance Sensor (HC-SR04)** · Piezo · 3 × LED · 3 × Resistor 220 Ω · fire

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `pulseIn(ECHO, HIGH, 30000)` | Măsoară cât durează ecoul, cu timeout | `long timp = pulseIn(ECHO, HIGH, 30000);` |
| `float masoara()` | Funcție care dă înapoi distanța în cm | `float cm = masoara();` |
| `map(x, 5, 100, 50, 600)` | Transformă distanța într-o pauză între bipuri | `int pauza = map((int)cm, 5, 100, 50, 600);` |
| `constrain(x, a, b)` | Ține valoarea între două limite | `pauza = constrain(pauza, 50, 600);` |

---

## Pas cu pas

### 1) Circuit nou
`Prenume_Nume_A2_L05`

**Gata când:**  
- [ ] Proiectul nou are numele `Prenume_Nume_A2_L05`  

### 2) Cum funcționează
1. Trimiți un impuls scurt pe **TRIG**.  
2. Senzorul emite un sunet pe care nu-l auzi.  
3. Sunetul se întoarce (**ECHO**).  
4. Măsori **cât timp** a durat și calculezi distanța.

Sunetul parcurge aproximativ **0,034 cm pe microsecundă**, iar drumul e dus-întors, deci: `distanta = timp × 0,034 / 2`.

### 3) Conexiuni

| Piesă | Se conectează |
|-------|---------------|
| **HC-SR04 · VCC** | **5V** |
| **HC-SR04 · GND** | **GND** |
| **HC-SR04 · TRIG** | pin **7** |
| **HC-SR04 · ECHO** | pin **6** |
| **Piezo** | pin **8** și **GND** |
| **LED verde** | pin **10** → 220 Ω → anod · catod → GND |
| **LED galben** | pin **9** → 220 Ω → anod · catod → GND |
| **LED roșu** | pin **12** → 220 Ω → anod · catod → GND |

**Gata când:**  
- [ ] Toate firele sunt conectate exact ca în tabel  
- [ ] Am verificat de două ori GND și 5V înainte să pornesc simularea  

### 4) Minim — distanța

```cpp
const int TRIG = 7;
const int ECHO = 6;

void setup() {
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  Serial.begin(9600);
}

void loop() {
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);

  long timp = pulseIn(ECHO, HIGH);
  float cm = timp * 0.034 / 2.0;

  Serial.print("Distanta: ");
  Serial.print(cm, 1);
  Serial.println(" cm");
  delay(200);
}
```

- `pulseIn(ECHO, HIGH)` măsoară **cât timp** (în microsecunde) pinul ține `HIGH`.  
- În Tinkercad, mută obiectul din fața senzorului ca să vezi distanța schimbându-se.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Simularea pornește și montajul face ce scrie în „Minim”  

### 5) O funcție pentru distanță
Ca să nu repetăm codul, îl punem într-o funcție:

```cpp
const int TRIG = 7;
const int ECHO = 6;

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
  Serial.begin(9600);
}

void loop() {
  Serial.println(masoara(), 1);
  delay(200);
}
```

`30000` e **timpul maxim de așteptare** (30 ms). Fără el, dacă nu vine ecou, placa ar aștepta prea mult.

### 6) Complet — bipuri și lumini

```cpp
const int TRIG = 7;
const int ECHO = 6;
const int BUZZER = 8;
const int VERDE = 10;
const int GALBEN = 9;
const int ROSU = 12;

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
  pinMode(VERDE, OUTPUT);
  pinMode(GALBEN, OUTPUT);
  pinMode(ROSU, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  float cm = masoara();

  digitalWrite(VERDE, LOW);
  digitalWrite(GALBEN, LOW);
  digitalWrite(ROSU, LOW);

  if (cm > 100 || cm == 0) {
    digitalWrite(VERDE, HIGH);
    noTone(BUZZER);
    delay(200);
  } else if (cm > 40) {
    digitalWrite(GALBEN, HIGH);
    tone(BUZZER, 800, 80);
    delay(400);
  } else if (cm > 15) {
    digitalWrite(ROSU, HIGH);
    tone(BUZZER, 1000, 60);
    delay(150);
  } else {
    digitalWrite(ROSU, HIGH);
    tone(BUZZER, 1500);
    delay(100);
  }

  Serial.println(cm, 1);
}
```

| Distanță | Lumina | Sunet |
|----------|--------|-------|
| peste 100 cm | verde | liniște |
| 40–100 cm | galben | bip rar |
| 15–40 cm | roșu | bip des |
| sub 15 cm | roșu | sunet continuu |

`cm == 0` înseamnă că nu s-a primit ecou (nimic în fața senzorului).

**Gata când:**  
- [ ] Codul complet se compilează fără erori  
- [ ] Simularea face tot ce scrie în „Complet”  

### 7) Proiectul 2 — Bip proporțional
La senzorii de parcare adevărați, **pauza dintre bipuri** scade pe măsură ce te apropii. Folosim `map` ca să transformăm **distanța** într-o **pauză**: 5 cm → 50 ms, 100 cm → 600 ms. Circuitul rămâne cel de la proiectul 1 (TRIG pe 7, ECHO pe 6, buzzer pe 8).

```cpp
const int TRIG = 7;
const int ECHO = 6;
const int BUZZER = 8;

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
  Serial.begin(9600);
}

void loop() {
  float cm = masoara();

  if (cm == 0 || cm > 100) {
    noTone(BUZZER);
    delay(100);
  } else {
    int pauza = map((int)cm, 5, 100, 50, 600);
    pauza = constrain(pauza, 50, 600);
    tone(BUZZER, 1000, 40);
    delay(pauza);
  }

  Serial.println(cm, 1);
}
```

| Distanța | Pauza dintre bipuri |
|----------|---------------------|
| 100 cm | 600 ms (rar) |
| 50 cm | ~310 ms |
| 20 cm | ~136 ms |
| 5 cm | 50 ms (foarte des) |

`constrain` ține pauza între 50 și 600 ms, chiar dacă obiectul e mai aproape de 5 cm. Peste 100 cm (sau fără ecou) buzzerul tace.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Pe măsură ce apropii obiectul, bipurile devin mai dese  

### 8) O parcare configurabilă
Un program bun se schimbă ușor. Mută valorile din cod în **constante** la început, ca să adaptezi parcarea (de exemplu pentru o **bicicletă**, cu distanțe mai mici):

```cpp
const int DIST_MAX = 100;   // cm, peste asta: liniște
const int DIST_MIN = 5;     // cm, cel mai aproape
const int PAUZA_MAX = 600;  // ms
const int PAUZA_MIN = 50;   // ms
```

Apoi folosește-le în `map`: `map((int)cm, DIST_MIN, DIST_MAX, PAUZA_MIN, PAUZA_MAX)` și în condiție: `cm > DIST_MAX`.

**Gata când:**  
- [ ] Nicio valoare „magică” nu mai apare direct în `loop()`  
- [ ] Schimbi `DIST_MAX` la 50 și parcarea reacționează de la 50 cm  

---

## Greșeli frecvente
1. **Mereu 0 cm** — TRIG și ECHO sunt inversate sau lipsește alimentarea.  
2. **Valori uriașe** — formula e greșită (ai uitat `/ 2`).  
3. **Placa „îngheață”** — fără timeout la `pulseIn`.  
4. **Buzzer continuu** — ai uitat `noTone`.  
5. **LED-uri multiple** — uită să le stingi la început.  
6. **Bipurile nu devin mai dese** — la `map` ai pus intervalul de ieșire în ordinea greșită.  
7. **Pauza iese negativă sau uriașă** — lipsește `constrain`.

---

## De făcut azi — „Parcare inteligentă”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Distanța în cm în Serial Monitor |
| **Complet** | Minim + buzzer pe trepte + 3 LED-uri |
| **Proiectul 2** | Bip proporțional: pauza dintre bipuri depinde de distanță (`map` + `constrain`) |

### Pasul 1 — Minim
- [ ] TRIG pe 7, ECHO pe 6  
- [ ] Formula `timp × 0,034 / 2`  

### Pasul 2 — Complet
- [ ] Funcția `masoara()`  
- [ ] 4 trepte de distanță  
- [ ] Numele `A2_L05` e corect

### Pasul 3 — Proiectul 2
- [ ] Pauza se calculează cu `map` din distanță  
- [ ] `constrain` o ține între 50 și 600 ms  
- [ ] Peste 100 cm buzzerul tace

---

## Bonus ★★★ — Provocare: Bara de distanță
*Doar dacă ai terminat Proiectul 2.*

Afișează distanța ca o **bară** în Serial Monitor.

- [ ] Fiecare 10 cm înseamnă un `#`: la 30 cm vezi `###`, la 60 cm vezi `######`  
- [ ] Lângă bară scrii valoarea în cm  
- [ ] Testezi la **10, 30, 60, 90 și 150 cm**: valorile diferă de distanța reală cu cel mult **2 cm**

## Recapitulare pe scurt
1. TRIG trimite, ECHO primește  
2. `distanta = timp × 0,034 / 2`  
3. `pulseIn` cu timeout  
4. Trepte de distanță → lumini și sunete  
5. `map` + `constrain` fac din distanță un bip proporțional

## Pe placa reală *(opțional)*
HC-SR04 fizic are 4 pini: VCC, TRIG, ECHO, GND. Măsoară între ~2 cm și ~400 cm. Suprafețele moi (haine) reflectă prost sunetul.

## Quiz scurt
- De ce împărțim la 2?  
- Ce face `pulseIn`?  
- Ce înseamnă un rezultat de 0 cm în codul de azi?  
- Ce face `constrain(pauza, 50, 600)` când obiectul e foarte aproape?

## Temă
Gândește-te la 3 locuri unde un senzor de distanță ar ajuta (ex. cutie de gunoi care se deschide) și desenează unul.

---

## Ce urmează — Lecția 6
În **lecția 6** folosești senzorul PIR și construiești o alarmă care se armează cu un buton.
