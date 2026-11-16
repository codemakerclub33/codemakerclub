# LECȚIA 4 — Robotul care salută
### Servomotor, unghiuri și mișcare lină
**Modulul 3 · Afișaj și mișcare**  
**Code Maker Club · Display Maker**

> Azi dai **mișcare** proiectelor: un **servomotor** care poate merge exact la unghiul pe care îl alegi.  
> Proiect: **„Robotul care salută”** · `Prenume_Nume_A3_L04`

---

## Ce facem azi
La finalul orei ai **două proiecte**: **Robotul care salută** (un servo care merge la unghiuri fixe, se mișcă lin, ascultă de un potențiometru și face cu mâna la apăsarea unui buton) și un **braț cu gesturi** („da”, „nu” și „salut”), cu viteza reglată din potențiometru. Brațele de roboți, flapsurile avioanelor și direcția mașinilor RC folosesc servomotoare: un servo știe **unde e** și se oprește exact la unghiul cerut.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L3 · alte moduri de afișare |
| 10–30 | Cum funcționează un servo · conexiuni |
| 30–55 | **Proiectul 1** · unghiuri fixe și mișcare lină |
| 55–80 | **Proiectul 1** · potențiometru și salut |
| 80–110 | **Proiectul 2** · brațul cu gesturi |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme |

**Componente azi:** Arduino Uno · Breadboard · **Micro Servo** · Potentiometer · Pushbutton · LED · Resistor 220 Ω (doar la Bonus) · fire

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `#include <Servo.h>` și `Servo brat;` | Aduce biblioteca și creează obiectul care reprezintă servo-ul | `Servo brat;` |
| `brat.attach(9)` | Îi spune servo-ului pe ce pin e semnalul | `brat.attach(9);` |
| `brat.write(unghi)` | Duce servo-ul la un unghi de 0–180° | `brat.write(90);` |
| `void mergeLa(int tinta)` | Funcție care mută brațul grad cu grad, până la țintă | `mergeLa(120);` |
| `while (unghiCurent != tinta)` | Repetă **cât timp** condiția e adevărată | `while (unghiCurent != tinta) { ... }` |
| `gest = (gest + 1) % NR_GESTURI` | Trece la următorul gest, în cerc | `gest = (gest + 1) % 3;` |

---

## Pas cu pas

### 1) Circuit nou
`Prenume_Nume_A3_L04`

**Gata când:**  
- [ ] Proiectul nou are numele `Prenume_Nume_A3_L04`  

### 2) Conexiuni
Servo-ul are 3 fire:

| Fir | Culoare | Se conectează |
|-----|---------|---------------|
| Alimentare | roșu | **5V** |
| Masă | negru / maro | **GND** |
| Semnal | portocaliu / galben | pin **9** |

| Piesă | Se conectează |
|-------|---------------|
| **Potențiometru** | laterale la 5V și GND, mijloc la **A0** |
| **Buton** | pin **2** și **GND** |

**Gata când:**  
- [ ] Toate firele sunt conectate exact ca în tabel  
- [ ] Am verificat de două ori GND și 5V înainte să pornesc simularea  

### 3) Minim — unghiuri fixe

```cpp
#include <Servo.h>

Servo brat;

void setup() {
  brat.attach(9);
}

void loop() {
  brat.write(0);
  delay(1000);
  brat.write(90);
  delay(1000);
  brat.write(180);
  delay(1000);
}
```

- `#include <Servo.h>` aduce biblioteca pentru servo.  
- `Servo brat;` creează un obiect care reprezintă servo-ul.  
- `brat.attach(9)` îi spune pe ce pin e legat semnalul.  
- `brat.write(unghi)` îl duce la **0–180°**.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Simularea pornește și montajul face ce scrie în „Minim”  

### 4) Mișcare fluidă
Dacă schimbi unghiul brusc, servo-ul sare. Dacă îl crești **grad cu grad**, se mișcă lin:

```cpp
#include <Servo.h>

Servo brat;

void setup() {
  brat.attach(9);
}

void loop() {
  for (int unghi = 0; unghi <= 180; unghi++) {
    brat.write(unghi);
    delay(10);
  }
  for (int unghi = 180; unghi >= 0; unghi--) {
    brat.write(unghi);
    delay(10);
  }
}
```

Mărește `delay` pentru o mișcare mai lentă, micșorează-l pentru una mai rapidă.

### 5) Servo controlat de potențiometru

```cpp
#include <Servo.h>

Servo brat;

void setup() {
  brat.attach(9);
}

void loop() {
  int citire = analogRead(A0);
  int unghi = map(citire, 0, 1023, 0, 180);
  brat.write(unghi);
  delay(15);
}
```

Rotești potențiometrul și servo-ul urmează. `map` convertește 0–1023 în 0–180.

### 6) Complet — saluta la buton
Apeși butonul și brațul face „cu mâna” de 3 ori, apoi revine:

```cpp
#include <Servo.h>

Servo brat;
const int BUTON = 2;

void salut() {
  for (int i = 0; i < 3; i++) {
    brat.write(60);
    delay(300);
    brat.write(120);
    delay(300);
  }
  brat.write(90);
}

void setup() {
  pinMode(BUTON, INPUT_PULLUP);
  brat.attach(9);
  brat.write(90);
}

void loop() {
  if (digitalRead(BUTON) == LOW) {
    salut();
  } else {
    int unghi = map(analogRead(A0), 0, 1023, 0, 180);
    brat.write(unghi);
  }
  delay(15);
}
```

- Când butonul e apăsat, rulează funcția `salut()`.  
- Altfel, potențiometrul controlează brațul.  
- Poți crea **gesturi** diferite: aplauze, „nu”, „da”.

**Gata când:**  
- [ ] Codul complet se compilează fără erori  
- [ ] Simularea face tot ce scrie în „Complet”  

### 7) Proiectul 2 — Brațul cu gesturi
Un robot adevărat nu face doar un gest. Facem trei: **„da”** (un semn mic), **„nu”** (un semn mai larg) și **„salut”** (cel mai larg). Fiecare apăsare de buton execută un gest și pregătește următorul. Potențiometrul nu mai alege unghiul, ci **viteza** mișcării. Circuitul rămâne cel de la proiectul 1 (servo pe 9, potențiometru pe A0, buton pe 2).

```cpp
#include <Servo.h>

Servo brat;

const int BUTON = 2;
const int POT = A0;
const int NR_GESTURI = 3;

int gest = 0;
int unghiCurent = 90;
bool butonAnterior = false;

int pauza() {
  return map(analogRead(POT), 0, 1023, 5, 40);
}

void mergeLa(int tinta) {
  while (unghiCurent != tinta) {
    if (unghiCurent < tinta) {
      unghiCurent++;
    } else {
      unghiCurent--;
    }
    brat.write(unghiCurent);
    delay(pauza());
  }
}

void balans(int stanga, int dreapta, int ori) {
  for (int i = 0; i < ori; i++) {
    mergeLa(stanga);
    mergeLa(dreapta);
  }
  mergeLa(90);
}

void executa(int g) {
  if (g == 0) {
    balans(75, 105, 2);
  } else if (g == 1) {
    balans(45, 135, 3);
  } else {
    balans(20, 160, 2);
  }
}

void setup() {
  pinMode(BUTON, INPUT_PULLUP);
  brat.attach(9);
  brat.write(90);
}

void loop() {
  bool apasat = (digitalRead(BUTON) == LOW);

  if (apasat && !butonAnterior) {
    executa(gest);
    gest = (gest + 1) % NR_GESTURI;
  }
  butonAnterior = apasat;
  delay(30);
}
```

- `unghiCurent` ține minte **unde e** brațul acum, ca să-l poți muta grad cu grad.  
- `mergeLa(tinta)` crește sau scade unghiul cu 1 până ajunge la țintă. Fără `while` nu s-ar repeta.  
- `balans(stanga, dreapta, ori)` mută brațul dus-întors, apoi îl readuce la 90°. Trei gesturi, aceeași funcție, alte numere.  
- `(gest + 1) % NR_GESTURI` trece de la „da” la „nu”, la „salut” și înapoi la „da”.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Fiecare apăsare face alt gest, în ordinea da → nu → salut  
- [ ] Potențiometrul face gesturile mai rapide sau mai lente  

### 8) Testul gesturilor

| Apăsarea | Gestul | Ce vezi |
|----------|--------|---------|
| 1 | „da” | 2 mișcări mici (75°–105°) |
| 2 | „nu” | 3 mișcări largi (45°–135°) |
| 3 | „salut” | 2 mișcări foarte largi (20°–160°) |
| 4 | „da” | ciclul o ia de la capăt |

**Gata când:**  
- [ ] Am încercat fiecare apăsare din listă  
- [ ] Am notat ce nu a mers și am corectat

---

## Greșeli frecvente
1. **Servo-ul tremură** — firul de semnal nu e pe pin 9 sau lipsește GND comun.  
2. **Nu se mișcă** — lipsește `brat.attach(9)`.  
3. **Mișcare sacadată** — unghiul sare prea mult; folosește `for` cu `delay` mic.  
4. **Erori la compilare** — `Servo` se scrie cu **S mare**, `servo` cu mic nu merge.  
5. **Unghi peste 180** — servo-ul standard merge doar 0–180.
6. **Brațul sare, nu se mișcă lin** — în `mergeLa` ai uitat `delay`.  
7. **Programul rămâne blocat în `mergeLa`** — `unghiCurent` nu se schimbă în `while`, deci condiția nu devine niciodată falsă.  
8. **Gestul se repetă cât ții butonul apăsat** — lipsește frontul (`!butonAnterior`).  

---

## De făcut azi — „Robotul care salută”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Servo la 0°, 90°, 180° |
| **Complet** | Minim + mișcare fluidă + potențiometru + salut |
| **Proiectul 2** | Braț cu 3 gesturi alese în cerc, cu viteza reglată din potențiometru |

### Pasul 1 — Minim
- [ ] Servo conectat (roșu 5V, negru GND, semnal pin 9)  
- [ ] Merge la 3 unghiuri  

### Pasul 2 — Complet
- [ ] Mișcare fluidă cu `for`  
- [ ] Control cu potențiometru  
- [ ] Gest de salut la buton  
- [ ] Numele `A3_L04` e corect

### Pasul 3 — Proiectul 2
- [ ] Funcția `mergeLa` cu `while`  
- [ ] Trei gesturi, alese în cerc cu `%`  
- [ ] Potențiometrul reglează viteza, nu unghiul  

---

## Bonus ★★★ — Provocare: Dansul brațului cu lumini
*Doar dacă ai terminat Proiectul 2.*

Combină mai multe mișcări într-un **dans** pe care brațul îl face singur, o dată, la apăsarea butonului. **Piesă nouă:** un LED pe pin 4 (prin 220 Ω), „ochiul” robotului.

- [ ] Unghiurile dansului stau într-un tablou cu cel puțin 6 valori, parcurs cu un `for` și `mergeLa`  
- [ ] Ochiul (LED-ul) clipește scurt de fiecare dată când brațul ajunge la un unghi din tablou  
- [ ] Dansul se termină cu brațul înapoi la 90° și cu ochiul stins  

## Recapitulare pe scurt
1. `#include <Servo.h>` + `Servo nume;` + `attach(pin)`  
2. `write(unghi)` pentru 0–180°  
3. `for` pentru mișcare lină, `while` când nu știi câți pași sunt  
4. `map` leagă potențiometrul de unghi sau de viteză  
5. Câteva funcții mici (`mergeLa`, `balans`) construiesc gesturi  

## Pe placa reală *(opțional)*
Un micro servo mic merge de la portul USB, dar mai multe servo-uri au nevoie de **alimentare separată** (4×AA). Leagă GND-ul bateriei la GND-ul Arduino.

## Quiz scurt
- Ce domeniu de unghiuri are un servo standard?  
- Ce face `attach(9)`?  
- De ce mișcăm servo-ul grad cu grad?
- Ce face `while (unghiCurent != tinta)`?  
- Cum ai adăuga un al patrulea gest?  

## Temă
Gândește-te la 3 gesturi pentru un robot (salut, „da”, „nu”) și notează unghiurile pentru fiecare.

---

## Ce urmează — Lecția 5
În **lecția 5** combini servo-ul cu senzorul de distanță și construiești o barieră care se ridică singură și se închide după câteva secunde.
