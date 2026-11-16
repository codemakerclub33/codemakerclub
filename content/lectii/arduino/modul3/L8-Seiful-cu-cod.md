# LECȚIA 8 — Seiful cu cod
### Tastatură 4×4, texte și încercări
**Modulul 3 · Afișaj și mișcare**  
**Code Maker Club · Display Maker**

> Azi construiești un **seif**: tastezi codul pe o **tastatură 4×4**, iar LCD-ul, servo-ul și LED-urile îți spun dacă s-a deschis.  
> Proiect: **„Seiful cu cod”** · `Prenume_Nume_A3_L08`

---

## Ce facem azi
La finalul orei ai **două proiecte**: **Seiful cu cod** (tastatură, LCD cu stelute, servo care deschide „ușa” și blocare după 3 încercări greșite) și un **seif cu cod schimbabil**: cine știe codul vechi poate alege unul nou. Parolele, PIN-urile și lacătele electronice funcționează așa: **compari ce a tastat cineva cu ce știi tu** și decizi. Azi pui laolaltă tot ce ai învățat: LCD, servo, LED-uri, funcții și stări.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L7 · parole, de ce contează |
| 10–30 | Conexiuni (tastatură + LCD) |
| 30–50 | **Proiectul 1** · citirea tastelor și cod de 4 cifre |
| 50–75 | **Proiectul 1** · LCD, servo și încercări |
| 75–110 | **Proiectul 2** · schimbarea codului |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme |

**Componente azi:** Arduino Uno · Breadboard · **Keypad 4 x 4** · LCD 16 x 2 · Micro Servo · LED verde · LED roșu · 3 × Resistor 220 Ω · Piezo · LED galben + Resistor 220 Ω (doar la Bonus) · fire

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `Keypad tastatura = Keypad(makeKeymap(taste), ...)` | Creează tastatura, cu tastele și pinii ei | `char tasta = tastatura.getKey();` |
| `tastatura.getKey()` | Dă tasta apăsată, sau `0` dacă nu e nicio tastă | `if (tasta) { ... }` |
| `introdus += tasta` | Adaugă o literă la textul `introdus` | `String introdus = "";` |
| `introdus == COD` | Compară două texte | `if (introdus == COD) { ... }` |
| `String cod = "1234";` | Cod care **poate fi schimbat** (fără `const`) | `cod = introdus;` |
| `enum Mod { NORMAL, COD_VECHI, COD_NOU };` | Moduri de lucru ale seifului, ca stările de la barieră | `Mod mod = NORMAL;` |

---

## Pas cu pas

### 1) Circuit nou
`Prenume_Nume_A3_L08`

**Gata când:**  
- [ ] Proiectul nou are numele `Prenume_Nume_A3_L08`  

### 2) Conexiuni
Sunt multe, deci mergi pe rând.

**LCD** (ca în L1):

| Pin LCD | Arduino |
|---------|---------|
| RS · E | **12** · **11** |
| D4 · D5 · D6 · D7 | **5** · **4** · **3** · **2** |
| VSS · RW · V0 · K | GND |
| VDD · A (cu 220 Ω) | 5V |

**Tastatură** (8 pini: 4 rânduri R1–R4 și 4 coloane C1–C4; în Tinkercad sunt etichetați):

| Pin tastatură | Arduino |
|---------------|---------|
| R1 · R2 · R3 · R4 | **6** · **7** · **8** · **9** |
| C1 · C2 · C3 · C4 | **A0** · **A1** · **A2** · **A3** |

**Restul:**

| Piesă | Se conectează |
|-------|---------------|
| **Servo** | roșu 5V · negru GND · semnal pin **10** |
| **LED verde** | pin **A4** → 220 Ω → anod · catod → GND |
| **LED roșu** | pin **A5** → 220 Ω → anod · catod → GND |
| **Piezo** | pin **13** și **GND** |

Pinii analogici A0–A5 pot fi folosiți și ca pini **digitali** obișnuiți.

**Gata când:**  
- [ ] Toate firele sunt conectate exact ca în tabel  
- [ ] Am verificat de două ori GND și 5V înainte să pornesc simularea  

### 3) Tastatura
Tastatura e o grilă. Biblioteca `Keypad` află ce tastă e apăsată verificând rândurile și coloanele:

```cpp
#include <Keypad.h>

const byte RANDURI = 4;
const byte COLOANE = 4;

char taste[RANDURI][COLOANE] = {
  {'1', '2', '3', 'A'},
  {'4', '5', '6', 'B'},
  {'7', '8', '9', 'C'},
  {'*', '0', '#', 'D'}
};

byte pinRanduri[RANDURI] = {6, 7, 8, 9};
byte pinColoane[COLOANE] = {A0, A1, A2, A3};

Keypad tastatura = Keypad(makeKeymap(taste), pinRanduri, pinColoane, RANDURI, COLOANE);

void setup() {
  Serial.begin(9600);
}

void loop() {
  char tasta = tastatura.getKey();
  if (tasta) {
    Serial.println(tasta);
  }
}
```

- `getKey()` returnează tasta apăsată, sau `0` dacă nu e niciuna.  
- `if (tasta)` e adevărat doar când a fost apăsată o tastă.

### 4) Minim — cod de 4 cifre

```cpp
#include <Keypad.h>

const byte RANDURI = 4;
const byte COLOANE = 4;

char taste[RANDURI][COLOANE] = {
  {'1', '2', '3', 'A'},
  {'4', '5', '6', 'B'},
  {'7', '8', '9', 'C'},
  {'*', '0', '#', 'D'}
};

byte pinRanduri[RANDURI] = {6, 7, 8, 9};
byte pinColoane[COLOANE] = {A0, A1, A2, A3};

Keypad tastatura = Keypad(makeKeymap(taste), pinRanduri, pinColoane, RANDURI, COLOANE);

const String COD = "1234";
const int VERDE = A4;
const int ROSU = A5;

String introdus = "";

void setup() {
  pinMode(VERDE, OUTPUT);
  pinMode(ROSU, OUTPUT);
}

void loop() {
  char tasta = tastatura.getKey();

  if (tasta) {
    introdus += tasta;

    if (introdus.length() == 4) {
      if (introdus == COD) {
        digitalWrite(VERDE, HIGH);
        delay(2000);
        digitalWrite(VERDE, LOW);
      } else {
        digitalWrite(ROSU, HIGH);
        delay(1000);
        digitalWrite(ROSU, LOW);
      }
      introdus = "";
    }
  }
}
```

- Un `String` păstrează ce a tastat utilizatorul; `introdus += tasta` **adaugă** o literă.  
- `introdus.length()` spune câte caractere sunt.  
- Comparăm cu `==`. După 4 cifre golim `introdus` (`= ""`).

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Simularea pornește și montajul face ce scrie în „Minim”  

### 5) Complet — seiful cu LCD, servo și încercări

```cpp
#include <Keypad.h>
#include <LiquidCrystal.h>
#include <Servo.h>

const byte RANDURI = 4;
const byte COLOANE = 4;

char taste[RANDURI][COLOANE] = {
  {'1', '2', '3', 'A'},
  {'4', '5', '6', 'B'},
  {'7', '8', '9', 'C'},
  {'*', '0', '#', 'D'}
};

byte pinRanduri[RANDURI] = {6, 7, 8, 9};
byte pinColoane[COLOANE] = {A0, A1, A2, A3};

Keypad tastatura = Keypad(makeKeymap(taste), pinRanduri, pinColoane, RANDURI, COLOANE);
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);
Servo broasca;

const String COD = "1234";
const int VERDE = A4;
const int ROSU = A5;
const int BUZZER = 13;
const int MAX_INCERCARI = 3;

String introdus = "";
int incercari = 0;

void mesaj(String sus, String jos) {
  lcd.clear();
  lcd.print(sus);
  lcd.setCursor(0, 1);
  lcd.print(jos);
}

void ecranIntrare() {
  lcd.clear();
  lcd.print("Introdu codul:");
  lcd.setCursor(0, 1);
  for (unsigned int i = 0; i < introdus.length(); i++) {
    lcd.print('*');
  }
}

void deschide() {
  mesaj("Cod corect!", "Seif deschis");
  digitalWrite(VERDE, HIGH);
  tone(BUZZER, 1500, 200);
  broasca.write(90);
  delay(3000);
  broasca.write(0);
  digitalWrite(VERDE, LOW);
  incercari = 0;
}

void gresit() {
  incercari++;
  digitalWrite(ROSU, HIGH);
  tone(BUZZER, 300, 600);

  if (incercari >= MAX_INCERCARI) {
    mesaj("BLOCAT!", "Asteapta 10 sec");
    delay(10000);
    incercari = 0;
  } else {
    mesaj("Cod gresit!", "Mai ai: " + String(MAX_INCERCARI - incercari));
    delay(1500);
  }
  digitalWrite(ROSU, LOW);
}

void setup() {
  pinMode(VERDE, OUTPUT);
  pinMode(ROSU, OUTPUT);
  lcd.begin(16, 2);
  broasca.attach(10);
  broasca.write(0);
  ecranIntrare();
}

void loop() {
  char tasta = tastatura.getKey();

  if (tasta) {
    if (tasta == '*') {
      introdus = "";
    } else if (tasta == '#') {
      if (introdus == COD) {
        deschide();
      } else {
        gresit();
      }
      introdus = "";
    } else if (introdus.length() < 8) {
      introdus += tasta;
    }
    ecranIntrare();
  }
}
```

| Tastă | Ce face |
|-------|---------|
| `0`–`9` | adaugă o cifră (apare `*` pe LCD) |
| `*` | șterge tot ce ai scris |
| `#` | confirmă codul |

**Idei noi**

- `mesaj(sus, jos)` e o funcție ajutătoare: afișează două rânduri.  
- `"Mai ai: " + String(...)` lipește un text cu un număr.  
- Ecranul arată **stelute**, nu cifrele, ca să nu fie văzut codul.  
- După 3 greșeli, seiful se **blochează** 10 secunde.

**Gata când:**  
- [ ] Codul complet se compilează fără erori  
- [ ] Simularea face tot ce scrie în „Complet”  

### 6) Proiectul 2 — Seiful cu cod schimbabil
Un seif în care codul nu se poate schimba nu e prea practic. Adăugăm **tasta A**: apeși `A`, scrii **codul vechi** și `#`; dacă e corect, scrii **codul nou** (4 cifre) și `#`, iar seiful îl ține minte. Codul nu mai e o constantă, ci o variabilă `String cod`, iar seiful are trei **moduri**: `NORMAL`, `COD_VECHI` și `COD_NOU`. Circuitul rămâne cel de la proiectul 1 (servo-ul nu e folosit azi).

```cpp
#include <Keypad.h>
#include <LiquidCrystal.h>

const byte RANDURI = 4;
const byte COLOANE = 4;

char taste[RANDURI][COLOANE] = {
  {'1', '2', '3', 'A'},
  {'4', '5', '6', 'B'},
  {'7', '8', '9', 'C'},
  {'*', '0', '#', 'D'}
};

byte pinRanduri[RANDURI] = {6, 7, 8, 9};
byte pinColoane[COLOANE] = {A0, A1, A2, A3};

Keypad tastatura = Keypad(makeKeymap(taste), pinRanduri, pinColoane, RANDURI, COLOANE);
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

enum Mod { NORMAL, COD_VECHI, COD_NOU };
Mod mod = NORMAL;

String cod = "1234";
String introdus = "";
const int VERDE = A4;
const int ROSU = A5;

void mesaj(String sus, String jos) {
  lcd.clear();
  lcd.print(sus);
  lcd.setCursor(0, 1);
  lcd.print(jos);
}

void ecran() {
  lcd.clear();
  if (mod == NORMAL) {
    lcd.print("Introdu codul:");
  } else if (mod == COD_VECHI) {
    lcd.print("Cod vechi:");
  } else {
    lcd.print("Cod nou:");
  }
  lcd.setCursor(0, 1);
  for (unsigned int i = 0; i < introdus.length(); i++) {
    lcd.print('*');
  }
}

void lumina(int pin) {
  digitalWrite(pin, HIGH);
  delay(1000);
  digitalWrite(pin, LOW);
}

void setup() {
  pinMode(VERDE, OUTPUT);
  pinMode(ROSU, OUTPUT);
  lcd.begin(16, 2);
  ecran();
}

void loop() {
  char tasta = tastatura.getKey();
  if (!tasta) {
    return;
  }

  if (tasta == '*') {
    introdus = "";
  } else if (tasta == 'A' && mod == NORMAL) {
    mod = COD_VECHI;
    introdus = "";
  } else if (tasta == '#') {
    if (mod == NORMAL) {
      if (introdus == cod) {
        mesaj("Cod corect!", "Seif deschis");
        lumina(VERDE);
      } else {
        mesaj("Cod gresit!", "");
        lumina(ROSU);
      }
    } else if (mod == COD_VECHI) {
      if (introdus == cod) {
        mod = COD_NOU;
      } else {
        mesaj("Cod gresit!", "Nu schimb nimic");
        lumina(ROSU);
        mod = NORMAL;
      }
    } else {
      if (introdus.length() == 4) {
        cod = introdus;
        mesaj("Cod schimbat!", "Cod nou salvat");
        lumina(VERDE);
      } else {
        mesaj("Trebuie 4 cifre", "Codul ramane");
        lumina(ROSU);
      }
      mod = NORMAL;
    }
    introdus = "";
  } else if (introdus.length() < 8) {
    introdus += tasta;
  }

  ecran();
}
```

| Tastă | Ce face |
|-------|---------|
| `0`–`9` | adaugă o cifră (apare `*` pe LCD) |
| `*` | șterge ce ai scris |
| `A` | începe schimbarea codului (doar în modul normal) |
| `#` | confirmă: depinde de mod |

- `String cod = "1234";` nu mai are `const`, deci îl poți înlocui: `cod = introdus;`.  
- `mod` spune ce așteaptă seiful acum: un cod obișnuit, codul vechi sau codul nou. Același `#` face lucruri diferite în fiecare mod.  
- Codul nou e acceptat doar dacă are **exact 4 cifre**.  
- După fiecare confirmare, `mod` se întoarce la `NORMAL`, iar `introdus` se golește.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Cu `A`, codul vechi corect duce la „Cod nou:”, iar codul nou funcționează apoi la deschidere  

### 7) Testul seifului

| Pas | Ce faci | Ce vezi |
|-----|---------|---------|
| 1 | `1234 #` | „Cod corect!”, LED verde |
| 2 | `A`, `1234 #`, `5678 #` | „Cod schimbat!” |
| 3 | `1234 #` | „Cod gresit!”, LED roșu (codul vechi nu mai merge) |
| 4 | `5678 #` | „Cod corect!” |
| 5 | `A`, `0000 #` | „Cod gresit! Nu schimb nimic” |
| 6 | `A`, `5678 #`, `12 #` | „Trebuie 4 cifre”, codul rămâne 5678 |

**Gata când:**  
- [ ] Am încercat fiecare pas din listă  
- [ ] Am notat ce nu a mers și am corectat

---

## Greșeli frecvente
1. **Taste greșite** — rândurile și coloanele sunt inversate la pini.  
2. **Nu citește nimic** — firele tastaturii nu sunt la pinii din `pinRanduri` / `pinColoane`.  
3. **Comparația eșuează** — codul din `COD` are alt format (`"1234"` e text, cu ghilimele).  
4. **LCD blocat** — pinii LCD se suprapun cu cei ai tastaturii.  
5. **Servo tremură** — lipsește GND comun.
6. **Codul nou nu se salvează** — `cod` a rămas `const`; pentru schimbare trebuie să fie variabilă.  
7. **Seiful rămâne în modul „Cod nou” mereu** — după confirmare nu pui `mod = NORMAL`.  
8. **Tasta `A` apare printre stelute** — în modul normal trebuie tratată înainte de `introdus += tasta`.  

---

## De făcut azi — „Seiful cu cod”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Cod de 4 cifre, LED verde / roșu |
| **Complet** | Minim + LCD cu stelute + servo + 3 încercări + `*` și `#` |
| **Proiectul 2** | Seif cu cod schimbabil: tasta A, cod vechi, cod nou de 4 cifre, moduri cu `enum` |

### Pasul 1 — Minim
- [ ] Tastatura citește tastele  
- [ ] Comparare cu codul tău  

### Pasul 2 — Complet
- [ ] LCD cu `*`  
- [ ] Servo deschide ușa  
- [ ] Blocare după 3 greșeli  
- [ ] Numele `A3_L08` e corect

### Pasul 3 — Proiectul 2
- [ ] Trei moduri: `NORMAL`, `COD_VECHI`, `COD_NOU`  
- [ ] Codul vechi corect duce la introducerea codului nou  
- [ ] Codul nou are exact 4 cifre și funcționează după schimbare  

---

## Bonus ★★★ — Provocare: Parolă de 6 cifre și LED de mod
*Doar dacă ai terminat Proiectul 2.*

Fă seiful mai greu de ghicit. **Piesă nouă:** un LED galben pe pin 13 (prin 220 Ω), care arată că seiful e în modul de schimbare a codului. În proiectul 2 buzzerul nu se folosește, deci pin 13 e liber.

- [ ] Lungimea codului e o constantă `NR_CIFRE` (6), folosită peste tot, iar codul nou trebuie să aibă exact `NR_CIFRE` cifre  
- [ ] LED-ul galben e aprins cât timp seiful așteaptă codul vechi sau codul nou  
- [ ] După 3 greșeli la rând, seiful se blochează 10 secunde, cu un numărător pe LCD  

## Recapitulare pe scurt
1. `Keypad` + `getKey()` citesc tastele  
2. `String` ține ce a tastat utilizatorul; `+=` adaugă  
3. Compari cu `==` și golești `introdus` după fiecare încercare  
4. `enum Mod` dă seifului mai multe moduri, ca stările de la barieră  
5. Un `#` poate face lucruri diferite, în funcție de mod  

## Pe placa reală *(opțional)*
Un seif real nu ține codul în text simplu în program și folosește un încuietor puternic. Aici învățăm principiul: **comparăm și decidem**.

## Quiz scurt
- Ce returnează `getKey()` dacă nu apeși nimic?  
- De ce afișăm `*` și nu cifrele?  
- Ce se întâmplă după 3 încercări greșite?
- De ce `cod` nu mai are `const` în proiectul 2?  

## Temă
Gândește-te la 3 locuri unde se folosește un cod PIN și ce ar trebui să se întâmple la 3 greșeli.

---

## Ce urmează — Lecția 9
În **lecția 9** legi un inel de LED-uri NeoPixel și faci efecte de lumină: o rază, un curcubeu și o respirație.
