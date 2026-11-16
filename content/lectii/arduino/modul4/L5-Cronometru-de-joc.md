# LECȚIA 5 — Cronometru de joc
### `millis()`, ture, numărătoare inversă și cronometru de șah
**Modulul 4 · Proiecte complete**  
**Code Maker Club · Arduino Creator**

> Azi construiești un **cronometru** cu LCD, pornire, oprire, tur și un mod „numărătoare inversă” pentru jocuri de societate. Totul cu `millis()`.  
> Proiect: **„Cronometru de joc”** · `Prenume_Nume_A4_L05`

---

## Ce facem azi
La finalul orei ai **două proiecte**: un **cronometru de joc** (start/stop, tur, reset și numărătoare inversă de 30 de secunde, cu buzzer) și un **cronometru de șah** pentru doi jucători, cu câte 60 de secunde fiecare. Totul se face cu `millis()`, fără `delay()` lung: placa numără timpul **și** citește butoanele **și** actualizează ecranul în același timp.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L4 · `millis()` |
| 10–25 | Conexiuni și funcția de afișare |
| 25–55 | **Proiectul 1** · start / stop |
| 55–80 | **Proiectul 1** · tur, reset, numărătoare inversă |
| 80–110 | **Proiectul 2** · cronometru de șah |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme |

**Componente azi:** Arduino Uno · Breadboard · LCD 16 x 2 · 2 × Pushbutton · Piezo · LED roșu + Resistor 220 Ω (doar la Bonus) · fire

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `millis() - start` | Cât timp a trecut de la un moment notat | `unsigned long scurs = millis() - start;` |
| `/` și `%` | Împărțire întreagă și restul ei | `minute = totalSecunde / 60;` |
| `unsigned long` | Tip de număr mare, fără minus, potrivit pentru timp | `unsigned long acumulat = 0;` |
| `conditie ? a : b` | Alege între două valori, într-o singură linie | `lcd.print(modInvers ? "INVERS " : "CHRONO ");` |
| `int activ` (0, 1, 2) | O variabilă care ține minte al cui e rândul | `if (activ == 1) timp1 -= dt;` |
| `dt = acum - ultim` | Cât a trecut de la ultima trecere prin `loop()` | `unsigned long dt = acum - ultim;` |

---

## Pas cu pas

### 1) Circuit nou
`Prenume_Nume_A4_L05`

**Gata când:**  
- [ ] Proiectul nou are numele `Prenume_Nume_A4_L05`  

### 2) Conexiuni

| Piesă | Se conectează |
|-------|---------------|
| **LCD** | RS 12, E 11, D4 5, D5 4, D6 3, D7 2 (restul ca în L4) |
| **Buton A (Start/Stop)** | pin **7** și **GND** |
| **Buton B (Tur/Reset)** | pin **8** și **GND** |
| **Piezo** | pin **13** și **GND** |

**Gata când:**  
- [ ] Toate firele sunt conectate exact ca în tabel  
- [ ] Am verificat de două ori GND și 5V înainte să pornesc simularea  

### 3) Ideea
Un cronometru nu „numără”, ci **își amintește** momentul de start și calculează diferența:

```
timp scurs = millis() - momentStart
```

Când îl oprești, salvezi timpul. Când îl repornești, **ajustezi** momentul de start, ca să continue de unde a rămas.

### 4) Funcția de afișare
Transformă milisecunde în `MM:SS.d` (minute, secunde, zecimi):

```cpp
void afiseazaTimp(unsigned long ms) {
  unsigned long totalSecunde = ms / 1000;
  unsigned int minute = totalSecunde / 60;
  unsigned int secunde = totalSecunde % 60;
  unsigned int zecimi = (ms % 1000) / 100;

  if (minute < 10) lcd.print('0');
  lcd.print(minute);
  lcd.print(':');
  if (secunde < 10) lcd.print('0');
  lcd.print(secunde);
  lcd.print('.');
  lcd.print(zecimi);
}
```

- `/` e împărțirea întreagă, `%` e restul.  
- Pentru `75 300 ms`: `totalSecunde = 75`, `minute = 1`, `secunde = 15`, `zecimi = 3` → `01:15.3`.  
- Cifra `0` din față o punem manual dacă numărul e sub 10.

### 5) Minim — start / stop

```cpp
#include <LiquidCrystal.h>

const int BTN_A = 7;
const int BTN_B = 8;

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

bool ruleaza = false;
unsigned long start = 0;
unsigned long acumulat = 0;
bool aAnterior = false;

void afiseazaTimp(unsigned long ms) {
  unsigned long totalSecunde = ms / 1000;
  unsigned int minute = totalSecunde / 60;
  unsigned int secunde = totalSecunde % 60;
  unsigned int zecimi = (ms % 1000) / 100;

  if (minute < 10) lcd.print('0');
  lcd.print(minute);
  lcd.print(':');
  if (secunde < 10) lcd.print('0');
  lcd.print(secunde);
  lcd.print('.');
  lcd.print(zecimi);
}

void setup() {
  pinMode(BTN_A, INPUT_PULLUP);
  pinMode(BTN_B, INPUT_PULLUP);
  lcd.begin(16, 2);
  lcd.print("Cronometru");
}

void loop() {
  bool a = (digitalRead(BTN_A) == LOW);

  if (a && !aAnterior) {
    if (ruleaza) {
      acumulat += millis() - start;
      ruleaza = false;
    } else {
      start = millis();
      ruleaza = true;
    }
  }
  aAnterior = a;

  unsigned long timp = acumulat;
  if (ruleaza) timp += millis() - start;

  lcd.setCursor(0, 1);
  afiseazaTimp(timp);
  delay(50);
}
```

**Cum merge**

- `acumulat` = timpul deja „strâns” în rulările anterioare.  
- La **stop**: adăugăm la `acumulat` cât a rulat.  
- La **start**: notăm `start = millis()`.  
- Timpul afișat = `acumulat` (+ cât rulează acum, dacă e pornit).

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Simularea pornește și montajul face ce scrie în „Minim”  

### 6) Complet — tur, reset, numărătoare inversă

Butonul **B**: dacă rulează → **tur** (salvează timpul pe rândul de sus); dacă e oprit → **reset**. Ținut apăsat peste 1,5 secunde, schimbă **modul** (cronometru ↔ numărătoare inversă de 30 s).

```cpp
#include <LiquidCrystal.h>

const int BTN_A = 7;
const int BTN_B = 8;
const int BUZZER = 13;
const unsigned long DURATA_INVERSA = 30000;

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

bool ruleaza = false;
bool modInvers = false;
bool sunat = false;
unsigned long start = 0;
unsigned long acumulat = 0;
unsigned long tur = 0;
unsigned long bApasatDe = 0;
bool aAnterior = false;
bool bAnterior = false;

void afiseazaTimp(unsigned long ms) {
  unsigned long totalSecunde = ms / 1000;
  unsigned int minute = totalSecunde / 60;
  unsigned int secunde = totalSecunde % 60;
  unsigned int zecimi = (ms % 1000) / 100;

  if (minute < 10) lcd.print('0');
  lcd.print(minute);
  lcd.print(':');
  if (secunde < 10) lcd.print('0');
  lcd.print(secunde);
  lcd.print('.');
  lcd.print(zecimi);
}

unsigned long timpScurs() {
  unsigned long timp = acumulat;
  if (ruleaza) timp += millis() - start;
  return timp;
}

void reset() {
  ruleaza = false;
  acumulat = 0;
  tur = 0;
  sunat = false;
  lcd.clear();
}

void setup() {
  pinMode(BTN_A, INPUT_PULLUP);
  pinMode(BTN_B, INPUT_PULLUP);
  lcd.begin(16, 2);
  reset();
}

void loop() {
  bool a = (digitalRead(BTN_A) == LOW);
  bool b = (digitalRead(BTN_B) == LOW);

  if (a && !aAnterior) {
    if (ruleaza) {
      acumulat += millis() - start;
      ruleaza = false;
    } else {
      start = millis();
      ruleaza = true;
    }
  }

  if (b && !bAnterior) {
    bApasatDe = millis();
  }
  if (!b && bAnterior) {
    if (millis() - bApasatDe >= 1500) {
      modInvers = !modInvers;
      reset();
    } else if (ruleaza) {
      tur = timpScurs();
    } else {
      reset();
    }
  }
  aAnterior = a;
  bAnterior = b;

  unsigned long timp = timpScurs();

  lcd.setCursor(0, 0);
  lcd.print(modInvers ? "INVERS " : "CHRONO ");
  if (tur > 0) {
    lcd.print("T:");
    afiseazaTimp(tur);
  } else {
    lcd.print("         ");
  }

  lcd.setCursor(0, 1);
  if (modInvers) {
    unsigned long ramas = (timp >= DURATA_INVERSA) ? 0 : DURATA_INVERSA - timp;
    afiseazaTimp(ramas);
    lcd.print("        ");

    if (ramas == 0 && ruleaza && !sunat) {
      sunat = true;
      tone(BUZZER, 1500, 1000);
    }
  } else {
    afiseazaTimp(timp);
    lcd.print("        ");
  }
  delay(50);
}
```

| Acțiune | Efect |
|---------|-------|
| A | pornește / oprește |
| B (scurt, cât rulează) | **tur** — notează timpul |
| B (scurt, oprit) | **reset** |
| B (lung, 1,5 s) | schimbă modul |
| Numărătoare inversă | sună la 00:00.0 |

**Gata când:**  
- [ ] Codul complet se compilează fără erori  
- [ ] Simularea face tot ce scrie în „Complet”  

### 7) Proiectul 2 — Cronometru de șah
Doi jucători au **60 de secunde fiecare**. Butonul **A** aparține jucătorului 1, butonul **B** jucătorului 2. Când îți termini mutarea, apeși **butonul tău**, iar ceasul adversarului pornește. Cine rămâne primul fără timp pierde, iar buzzerul sună. Ținând ambele butoane apăsate, jocul se resetează. Circuitul rămâne cel de la proiectul 1.

```cpp
#include <LiquidCrystal.h>

const int BTN_A = 7;
const int BTN_B = 8;
const int BUZZER = 13;
const unsigned long TOTAL = 60000;

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

unsigned long timp1 = TOTAL;
unsigned long timp2 = TOTAL;
int activ = 0;               // 0 = nu a început, 1 = rândul lui 1, 2 = rândul lui 2
unsigned long ultim = 0;
bool aAnterior = false;
bool bAnterior = false;

void afiseazaTimp(unsigned long ms) {
  unsigned long totalSecunde = ms / 1000;
  unsigned int minute = totalSecunde / 60;
  unsigned int secunde = totalSecunde % 60;

  if (minute < 10) lcd.print('0');
  lcd.print(minute);
  lcd.print(':');
  if (secunde < 10) lcd.print('0');
  lcd.print(secunde);
}

void reset() {
  timp1 = TOTAL;
  timp2 = TOTAL;
  activ = 0;
  ultim = millis();
  lcd.clear();
}

void deseneaza() {
  lcd.setCursor(0, 0);
  lcd.print(activ == 1 ? ">" : " ");
  lcd.print("J1 ");
  afiseazaTimp(timp1);
  lcd.print("     ");

  lcd.setCursor(0, 1);
  lcd.print(activ == 2 ? ">" : " ");
  lcd.print("J2 ");
  afiseazaTimp(timp2);
  lcd.print("     ");
}

void sfarsit(int pierde) {
  tone(BUZZER, 1000, 1500);
  lcd.clear();
  lcd.print("Timp expirat!");
  lcd.setCursor(0, 1);
  lcd.print("Pierde J");
  lcd.print(pierde);

  // așteptăm apăsarea ambelor butoane
  while (!(digitalRead(BTN_A) == LOW && digitalRead(BTN_B) == LOW)) {
  }
  delay(300);
  reset();
}

void setup() {
  pinMode(BTN_A, INPUT_PULLUP);
  pinMode(BTN_B, INPUT_PULLUP);
  lcd.begin(16, 2);
  reset();
}

void loop() {
  bool a = (digitalRead(BTN_A) == LOW);
  bool b = (digitalRead(BTN_B) == LOW);

  if (a && b) {
    reset();
    delay(300);
  } else {
    if (a && !aAnterior && activ != 2) activ = 2;   // J1 a terminat mutarea
    if (b && !bAnterior && activ != 1) activ = 1;   // J2 a terminat mutarea
  }
  aAnterior = a;
  bAnterior = b;

  unsigned long acum = millis();
  unsigned long dt = acum - ultim;
  ultim = acum;

  if (activ == 1) timp1 = (dt >= timp1) ? 0 : timp1 - dt;
  if (activ == 2) timp2 = (dt >= timp2) ? 0 : timp2 - dt;

  deseneaza();

  if (timp1 == 0) sfarsit(1);
  if (timp2 == 0) sfarsit(2);
}
```

- `dt` este timpul scurs între două treceri prin `loop()`; îl scădem **doar** din ceasul jucătorului activ.  
- Condiția `activ != 2` face ca butonul A să conteze doar când e rândul jucătorului 1 (sau jocul nu a început).  
- `(dt >= timp1) ? 0 : timp1 - dt` împiedică numărul fără minus să „se învârtă” sub zero.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Ceasul adversarului pornește când apeși butonul tău  

### 8) Testul cronometrului de șah

| Pas | Ce faci | Ce vezi |
|-----|---------|---------|
| 1 | Apeși A | Săgeata trece la J2, ceasul lui J2 scade |
| 2 | Apeși A din nou, cât e rândul lui J2 | Nimic, butonul nu contează |
| 3 | Apeși B | Săgeata trece la J1 |
| 4 | Lași un ceas să ajungă la zero | „Timp expirat!”, buzzer, cine pierde |
| 5 | Ții ambele butoane apăsate | Jocul se resetează la 60 de secunde |

**Gata când:**  
- [ ] Am încercat fiecare pas din listă  
- [ ] Am notat ce nu a mers și am corectat  

---

## Greșeli frecvente
1. **Timpul „sare”** — folosești `int` în loc de `unsigned long` pentru `millis()`.  
2. **Pornește de la 0 de fiecare dată** — nu adaugi la `acumulat` la stop.  
3. **Ecranul clipește** — `lcd.clear()` la fiecare rundă; clear doar la reset.  
4. **Cifre rămase** — nu ai spații după timp.  
5. **Butonul acționează de mai multe ori** — lipsește detecția frontului.
6. **Ambele ceasuri scad** — scazi `dt` din ambii jucători, nu doar din cel activ.    
7. **Timpul sare la un număr uriaș** — `timp1 - dt` poate ieși sub zero; verifică întâi `dt >= timp1`.    
8. **Jocul nu pornește** — ai uitat `ultim = millis();` în `reset()`, iar prima valoare `dt` e uriașă.    

---

## De făcut azi — „Cronometru de joc”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Start / stop și `MM:SS.d` pe LCD |
| **Complet** | Minim + tur + reset + numărătoare inversă + buzzer |
| **Proiectul 2** | Cronometru de șah: 60 s pentru fiecare jucător, rândul trece cu butonul |

### Pasul 1 — Minim
- [ ] `acumulat` + `start` funcționează  
- [ ] Format cu zero în față  

### Pasul 2 — Complet
- [ ] Tur și reset  
- [ ] Mod invers cu sunet  
- [ ] Numele `A4_L05` e corect

### Pasul 3 — Proiectul 2
- [ ] `activ` ține minte al cui e rândul  
- [ ] Doar ceasul jucătorului activ scade  
- [ ] Cine rămâne la zero pierde, cu buzzer  

---

## Bonus ★★★ — Avertizare roșie
*Doar dacă ai terminat Proiectul 2.*

Jucătorii primesc un semnal înainte să rămână fără timp. **Piesă nouă:** un LED roșu pe pin **9** (prin 220 Ω).

- [ ] LED-ul clipește cât timp jucătorul activ are sub 10 secunde  
- [ ] Folosești `(millis() / 250) % 2` pentru clipit, fără `delay()`  
- [ ] Verifici că LED-ul se stinge când rândul trece la celălalt jucător  

## Recapitulare pe scurt
1. `millis()` = ceasul intern; nu blochează  
2. `timp = acumulat + (millis() − start)` când rulează  
3. `dt` = timpul dintre două treceri prin `loop()`  
4. Un ceas pentru doi jucători = o variabilă `activ` și o scădere  

## Pe placa reală *(opțional)*
Pentru timp foarte precis (secunde pe zi) se folosește un modul **RTC** (ceas de timp real, ex. DS3231). Placa Arduino își pierde puțin precizie în timp.

## Quiz scurt
- De ce `unsigned long` pentru `millis()`?  
- Ce reține variabila `acumulat`?  
- Ce afișează formula pentru 125 000 ms?
- La ce folosește `dt` în cronometrul de șah?  

## Temă
Alege un joc de societate și gândește-te ce fel de cronometru ar avea nevoie (de exemplu șah sau Activity).

---

## Ce urmează — Lecția 6
În **lecția 6** construiești un oracol cu zar electronic, cu animație, sunet și statistică.
