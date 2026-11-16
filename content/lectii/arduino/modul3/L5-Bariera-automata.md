# LECȚIA 5 — Bariera automată
### Servo, ultrasunete și mașina de stări
**Modulul 3 · Afișaj și mișcare**  
**Code Maker Club · Display Maker**

> Azi combini **senzorul de distanță** cu **servo-ul** și construiești o barieră de parcare care se ridică singură.  
> Proiect: **„Bariera automată”** · `Prenume_Nume_A3_L05`

---

## Ce facem azi
La finalul orei ai **două proiecte**: **Bariera automată** (se ridică singură când se apropie o mașină și se închide după 3 secunde, fără `delay`) și o **parcare cu locuri limitate**, care numără mașinile și nu mai lasă pe nimeni să intre când e plină. Barierele, ușile automate și porțile de garaj au aceeași logică: **detectez → deschid → aștept → închid**. Se numește **mașină de stări**.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L4 (servo) și Modulul 2 L5 (distanță) |
| 10–25 | Schema și conexiunile |
| 25–45 | **Proiectul 1** · varianta simplă |
| 45–70 | **Proiectul 1** · stări + timp cu `millis()` |
| 70–110 | **Proiectul 2** · parcare cu locuri limitate |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme |

**Componente azi:** Arduino Uno · Breadboard · Micro Servo · HC-SR04 · LED verde · LED roșu · 2 × Resistor 220 Ω · Pushbutton (ieșire) · al doilea Pushbutton, de urgență (doar la Bonus) · fire

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `enum Stare { INCHISA, DESCHISA, ASTEAPTA };` | Creează un tip propriu, cu trei valori posibile | `Stare stare = INCHISA;` |
| `stare = DESCHISA;` | Schimbă starea în care se află bariera | `if (masina) stare = DESCHISA;` |
| `millis() - momentPlecare >= 3000` | Verifică dacă au trecut 3 secunde, fără `delay` | `else if (millis() - momentPlecare >= 3000) { ... }` |
| `bool masinaLangaBariera()` | Funcție care răspunde da / nu | `bool masina = masinaLangaBariera();` |
| `const int LOCURI = 3;` | Numărul maxim de mașini din parcare | `bool plin = (ocupate >= LOCURI);` |
| `ocupate++` / `ocupate--` | Crește sau scade numărul de mașini | `if (ocupate > 0) ocupate--;` |

---

## Pas cu pas

### 1) Circuit nou
`Prenume_Nume_A3_L05`

**Gata când:**  
- [ ] Proiectul nou are numele `Prenume_Nume_A3_L05`  

### 2) Conexiuni

| Piesă | Se conectează |
|-------|---------------|
| **Servo** | roșu 5V · negru GND · semnal pin **9** |
| **HC-SR04** | VCC 5V · GND · TRIG pin **7** · ECHO pin **6** |
| **LED verde** | pin **4** → 220 Ω → anod · catod → GND |
| **LED roșu** | pin **5** → 220 Ω → anod · catod → GND |

În Tinkercad, pune o **săgeată** (un obiect lung) pe brațul servo, ca să arate ca o barieră.

**Gata când:**  
- [ ] Toate firele sunt conectate exact ca în tabel  
- [ ] Am verificat de două ori GND și 5V înainte să pornesc simularea  

### 3) Minim — varianta simplă

```cpp
#include <Servo.h>

const int TRIG = 7;
const int ECHO = 6;

Servo bariera;

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
  bariera.attach(9);
  bariera.write(0);
}

void loop() {
  float cm = masoara();

  if (cm > 0 && cm < 20) {
    bariera.write(90);
  } else {
    bariera.write(0);
  }
  delay(100);
}
```

- `0°` = barieră **coborâtă**, `90°` = **ridicată**.  
- `cm > 0` filtrează „fără ecou” (0), când nu e nimic în față.  
- Problema: bariera se închide **imediat** ce mașina trece de senzor, deci poate lovi mașina!

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Simularea pornește și montajul face ce scrie în „Minim”  

### 4) Mașina de stări
Vrem ca bariera să rămână ridicată **încă 3 secunde** după ce mașina a plecat. Folosim **stări**:

| Stare | Ce face | Trece în… |
|-------|---------|-----------|
| **INCHISA** | bariera jos, LED roșu | **DESCHISA** când vede mașina |
| **DESCHISA** | bariera sus, LED verde | **ASTEAPTA** când nu mai vede mașina |
| **ASTEAPTA** | bariera sus, numără 3 s | **INCHISA** după 3 s (sau **DESCHISA** dacă apare o mașină) |

### 5) Complet — codul

```cpp
#include <Servo.h>

const int TRIG = 7;
const int ECHO = 6;
const int VERDE = 4;
const int ROSU = 5;

Servo bariera;

enum Stare { INCHISA, DESCHISA, ASTEAPTA };
Stare stare = INCHISA;
unsigned long momentPlecare = 0;

float masoara() {
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  long timp = pulseIn(ECHO, HIGH, 30000);
  return timp * 0.034 / 2.0;
}

bool masinaLangaBariera() {
  float cm = masoara();
  return (cm > 0 && cm < 20);
}

void setup() {
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  pinMode(VERDE, OUTPUT);
  pinMode(ROSU, OUTPUT);
  bariera.attach(9);
  bariera.write(0);
  Serial.begin(9600);
}

void loop() {
  bool masina = masinaLangaBariera();

  if (stare == INCHISA) {
    bariera.write(0);
    digitalWrite(ROSU, HIGH);
    digitalWrite(VERDE, LOW);
    if (masina) {
      stare = DESCHISA;
      Serial.println("Deschid");
    }
  } else if (stare == DESCHISA) {
    bariera.write(90);
    digitalWrite(ROSU, LOW);
    digitalWrite(VERDE, HIGH);
    if (!masina) {
      stare = ASTEAPTA;
      momentPlecare = millis();
      Serial.println("Astept");
    }
  } else {
    if (masina) {
      stare = DESCHISA;
    } else if (millis() - momentPlecare >= 3000) {
      stare = INCHISA;
      Serial.println("Inchid");
    }
  }
  delay(100);
}
```

**Ce e nou**

- `enum Stare { INCHISA, DESCHISA, ASTEAPTA };` creează propriul tău tip cu **trei valori posibile**.  
- Variabila `stare` ține minte **în ce situație** e bariera.  
- În starea `ASTEAPTA`, nu blocăm programul cu `delay(3000)`; verificăm timpul scurs cu `millis()`, deci dacă apare altă mașină, bariera reacționează imediat.

**Gata când:**  
- [ ] Codul complet se compilează fără erori  
- [ ] Simularea face tot ce scrie în „Complet”  

### 6) Test

| Scenariu | Ce faci | Rezultat |
|----------|---------|----------|
| 1 | Obiect la 10 cm | Bariera sus, LED verde |
| 2 | Muți obiectul departe | 3 secunde bariera rămâne sus |
| 3 | Aduci obiectul în timpul așteptării | Revine în „deschisă” |
| 4 | Aștepți 3 s fără obiect | Bariera jos, LED roșu |

**Gata când:**  
- [ ] Am încercat fiecare situație din listă  
- [ ] Am notat ce nu a mers și am corectat  

### 7) Proiectul 2 — Parcare cu locuri limitate
O parcare adevărată știe câte locuri are. Adăugăm un **contor**: fiecare mașină care intră ocupă un loc, iar un **buton de ieșire** (pin 2) eliberează unul. Când parcarea e plină, bariera **nu** se mai deschide, iar LED-ul roșu clipește. Circuitul de la proiectul 1 rămâne, plus butonul pe pin 2 și GND.

```cpp
#include <Servo.h>

const int TRIG = 7;
const int ECHO = 6;
const int VERDE = 4;
const int ROSU = 5;
const int IESIRE = 2;
const int LOCURI = 3;

Servo bariera;

enum Stare { INCHISA, DESCHISA, ASTEAPTA };
Stare stare = INCHISA;

int ocupate = 0;
unsigned long momentPlecare = 0;
bool butonAnterior = false;

float masoara() {
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  long timp = pulseIn(ECHO, HIGH, 30000);
  return timp * 0.034 / 2.0;
}

bool masinaLangaBariera() {
  float cm = masoara();
  return (cm > 0 && cm < 20);
}

void raport() {
  Serial.print("Locuri libere: ");
  Serial.println(LOCURI - ocupate);
}

void setup() {
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  pinMode(VERDE, OUTPUT);
  pinMode(ROSU, OUTPUT);
  pinMode(IESIRE, INPUT_PULLUP);
  bariera.attach(9);
  bariera.write(0);
  Serial.begin(9600);
  raport();
}

void loop() {
  bool masina = masinaLangaBariera();

  bool apasat = (digitalRead(IESIRE) == LOW);
  if (apasat && !butonAnterior && ocupate > 0) {
    ocupate--;
    raport();
  }
  butonAnterior = apasat;

  bool plin = (ocupate >= LOCURI);

  if (stare == INCHISA) {
    bariera.write(0);
    digitalWrite(ROSU, HIGH);
    digitalWrite(VERDE, LOW);
    if (masina && !plin) {
      stare = DESCHISA;
      ocupate++;
      raport();
    } else if (masina && plin) {
      digitalWrite(ROSU, (millis() / 200) % 2);
    }
  } else if (stare == DESCHISA) {
    bariera.write(90);
    digitalWrite(ROSU, LOW);
    digitalWrite(VERDE, HIGH);
    if (!masina) {
      stare = ASTEAPTA;
      momentPlecare = millis();
    }
  } else {
    if (masina) {
      stare = DESCHISA;
    } else if (millis() - momentPlecare >= 3000) {
      stare = INCHISA;
    }
  }
  delay(100);
}
```

- `ocupate++` se face **o singură dată**, chiar în clipa trecerii din `INCHISA` în `DESCHISA`; altfel mașina ar fi numărată de mai multe ori.  
- `plin` e adevărat când `ocupate` ajunge la `LOCURI`. Atunci mașina nu mai deschide bariera, iar LED-ul roșu clipește: `(millis() / 200) % 2` alternează 0 și 1 la fiecare 200 ms.  
- Butonul scade `ocupate` doar dacă mai e ceva de scăzut (`ocupate > 0`), tot cu tehnica frontului.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Serial Monitor arată „Locuri libere” după fiecare intrare sau ieșire  

### 8) Testul parcării

| Scenariu | Ce faci | Rezultat |
|----------|---------|----------|
| 1 | Obiect la 10 cm, apoi îl muți departe; aștepți să se închidă bariera și repeți (de 3 ori) | Bariera se deschide de 3 ori; „Locuri libere: 2”, „1”, „0” |
| 2 | Aduci un al patrulea obiect | Bariera rămâne jos, LED-ul roșu clipește |
| 3 | Apeși butonul de ieșire | „Locuri libere: 1” |
| 4 | Aduci din nou obiectul | Bariera se deschide, apoi se închide după 3 secunde |

**Gata când:**  
- [ ] Am încercat fiecare scenariu din listă  
- [ ] Am notat ce nu a mers și am corectat

---

## Greșeli frecvente
1. **Bariera tremură** — senzorul oscilează la limită; mărește pragul sau adaugă medie.  
2. **Nu se închide niciodată** — `cm == 0` e tratat ca „mașină”; folosește `cm > 0 &&`.  
3. **Stare blocată** — lipsește o tranziție în `if` sau `else if`.  
4. **Timp greșit** — compari `millis()` cu variabila greșită.  
5. **Servo nu ajunge la 90°** — pe servo-ul real poate fi nevoie de calibrare.
6. **Contorul crește cât timp mașina stă în fața senzorului** — ai pus `ocupate++` în afara trecerii `INCHISA` → `DESCHISA`.  
7. **Locuri libere negative sau uriașe** — scazi fără verificarea `ocupate > 0`.  
8. **Butonul scade de mai multe ori la o apăsare** — lipsește frontul (`!butonAnterior`).  
9. **LED-ul roșu nu clipește când e plin** — `digitalWrite(ROSU, HIGH)` de la început de stare rămâne ultima comandă; clipirea trebuie pusă **după** el.  

---

## De făcut azi — „Bariera automată”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Sus când e mașină, jos altfel |
| **Complet** | Minim + 3 stări + LED-uri + întârziere cu `millis()` |
| **Proiectul 2** | Parcare cu 3 locuri: contor de mașini, buton de ieșire, bariera nu se deschide când e plin |

### Pasul 1 — Minim
- [ ] Servo și senzor conectate  
- [ ] Bariera reacționează  

### Pasul 2 — Complet
- [ ] `enum Stare` cu 3 valori  
- [ ] 3 secunde de așteptare, fără `delay(3000)`  
- [ ] Numele `A3_L05` e corect

### Pasul 3 — Proiectul 2
- [ ] `ocupate` crește doar la trecerea în `DESCHISA`  
- [ ] Butonul de ieșire scade numărul, dar nu sub 0  
- [ ] La parcare plină bariera rămâne jos și LED-ul roșu clipește  

---

## Bonus ★★★ — Provocare: Butonul de urgență
*Doar dacă ai terminat Proiectul 2.*

Orice parcare are o ieșire de urgență. Adaugă un al doilea buton (pin 3 și GND) care deschide bariera oricând.

- [ ] Butonul de urgență deschide bariera chiar dacă parcarea e plină  
- [ ] Cât timp e ținut apăsat, LED-ul verde clipește și bariera rămâne sus  
- [ ] La eliberare, bariera se închide după 3 secunde, fără să schimbe numărul de locuri libere  

## Recapitulare pe scurt
1. Detectez → deschid → aștept → închid  
2. `enum` + o variabilă de stare = mașină de stări  
3. `millis()` măsoară timpul fără să blocheze  
4. Un contor se modifică **o singură dată**, la schimbarea stării  
5. Testează toate tranzițiile  

## Pe placa reală *(opțional)*
Barierele reale folosesc motoare puternice, senzori de siguranță (buclă de inducție, fotocelulă) și limitatoare. Modelul tău folosește doar un micro servo.

## Quiz scurt
- Ce stare urmează după `DESCHISA` când mașina pleacă?  
- De ce nu folosim `delay(3000)` în `ASTEAPTA`?  
- Ce înseamnă `cm > 0` în cod?
- De ce numărăm mașina la trecerea în `DESCHISA`, nu cât timp stă bariera deschisă?  

## Temă
Desenează diagrama stărilor pentru o **ușă automată de magazin** (stări și tranziții).

---

## Ce urmează — Lecția 6
În **lecția 6** pui senzorul de distanță pe servo și construiești un radar care scanează în jur și găsește obiectul cel mai apropiat.
