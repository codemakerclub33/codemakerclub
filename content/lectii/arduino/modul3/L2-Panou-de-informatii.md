# LECȚIA 2 — Panou de informații
### Pagini, buton și actualizare fără clipiri
**Modulul 3 · Afișaj și mișcare**  
**Code Maker Club · Display Maker**

> Azi transformi LCD-ul într-un **panou** care schimbă pagini la apăsarea unui buton: temperatura, lumina și un mesaj.  
> Proiect: **„Panou de informații”** · `Prenume_Nume_A3_L02`

---

## Ce facem azi
La finalul orei ai **două proiecte**: **Panoul de informații** (trei pagini pe LCD: temperatura, lumina și un mesaj, schimbate cu un buton) și un **termometru cu minim și maxim**, care ține minte cea mai rece și cea mai caldă valoare. Aproape orice aparat cu ecran are **pagini** și valori care se actualizează singure, fără clipiri.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L1 · LCD |
| 10–25 | Conexiuni (LCD ca în L1 + senzori) |
| 25–40 | **Proiectul 1** · temperatura pe LCD |
| 40–70 | **Proiectul 1** · 3 pagini cu buton, fără clipiri |
| 70–110 | **Proiectul 2** · minim și maxim |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme |

**Componente azi:** Arduino Uno · Breadboard · LCD 16 x 2 · TMP36 · Photoresistor · Resistor 10 kΩ · Pushbutton · 2 × Resistor 220 Ω · LED roșu (doar la Bonus) · fire

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `lcd.print(grade, 1)` | Afișează un număr cu o zecimală | `lcd.print(temperatura(), 1);` |
| `(pagina + 1) % NR_PAGINI` | `%` dă restul împărțirii: ciclul 0 → 1 → 2 → 0 | `pagina = (pagina + 1) % 3;` |
| `apasat && !butonAnterior` | Front: acționezi doar în clipa apăsării | `if (apasat && !butonAnterior) { ... }` |
| `millis() - ultima >= 500` | Face ceva periodic, fără `delay` | `if (millis() - ultimaActualizare >= 500) { ... }` |
| `void titlu()` | Funcție pentru o parte din desen | `titlu();` |
| `float minim = 100;` | Pornești cu o valoare uriașă, pe care orice măsurătoare o bate | `if (t < minim) minim = t;` |

---

## Pas cu pas

### 1) Circuit nou
`Prenume_Nume_A3_L02`

**Gata când:**  
- [ ] Proiectul nou are numele `Prenume_Nume_A3_L02`  

### 2) Conexiuni
LCD-ul rămâne conectat **exact ca în L1** (RS 12, E 11, D4 5, D5 4, D6 3, D7 2). Adaugi:

| Piesă | Se conectează |
|-------|---------------|
| **TMP36** | 5V · semnal **A1** · GND |
| **Fotorezistor** | 5V → fotorezistor → **A0** → 10 kΩ → GND |
| **Buton** | pin **7** și **GND** (diagonal) |

**Gata când:**  
- [ ] Toate firele sunt conectate exact ca în tabel  
- [ ] Am verificat de două ori GND și 5V înainte să pornesc simularea  

### 3) Minim — temperatura pe LCD

```cpp
#include <LiquidCrystal.h>

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

void setup() {
  lcd.begin(16, 2);
  lcd.print("Temperatura:");
}

void loop() {
  float volti = analogRead(A1) * 5.0 / 1023.0;
  float grade = (volti - 0.5) * 100.0;

  lcd.setCursor(0, 1);
  lcd.print(grade, 1);
  lcd.print(" C    ");
  delay(1000);
}
```

`lcd.print(grade, 1)` afișează cu o zecimală, ca la `Serial.print`.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Simularea pornește și montajul face ce scrie în „Minim”  

### 4) Pagini cu buton
Ținem minte pagina curentă într-o variabilă. Butonul o crește (`0 → 1 → 2 → 0 ...`) cu operatorul **modulo** `%`.

```cpp
#include <LiquidCrystal.h>

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

const int BUTON = 7;
const int NR_PAGINI = 3;

int pagina = 0;
bool butonAnterior = false;

float temperatura() {
  float volti = analogRead(A1) * 5.0 / 1023.0;
  return (volti - 0.5) * 100.0;
}

void deseneazaPagina() {
  lcd.clear();
  if (pagina == 0) {
    lcd.print("Temperatura:");
    lcd.setCursor(0, 1);
    lcd.print(temperatura(), 1);
    lcd.print(" C");
  } else if (pagina == 1) {
    lcd.print("Lumina:");
    lcd.setCursor(0, 1);
    lcd.print(map(analogRead(A0), 0, 1023, 0, 100));
    lcd.print(" %");
  } else {
    lcd.print("Salut, prieteni!");
    lcd.setCursor(0, 1);
    lcd.print("Arduino e super!");
  }
}

void setup() {
  pinMode(BUTON, INPUT_PULLUP);
  lcd.begin(16, 2);
  deseneazaPagina();
}

void loop() {
  bool apasat = (digitalRead(BUTON) == LOW);

  if (apasat && !butonAnterior) {
    pagina = (pagina + 1) % NR_PAGINI;
    deseneazaPagina();
  }
  butonAnterior = apasat;
  delay(30);
}
```

**Ce e nou**

- `%` (modulo) = **restul împărțirii**. `(2 + 1) % 3 = 0`, deci după ultima pagină revii la prima.  
- Schimbăm pagina doar pe **front** (când butonul tocmai a fost apăsat), ca în L8 din Modulul 2.  
- `deseneazaPagina()` e o funcție, deci desenul e într-un singur loc.

### 5) Complet — valori vii, fără clipiri
Cu codul de mai sus, temperatura se afișează o dată și rămâne neschimbată. Vrem să **o actualizăm**, dar **fără `lcd.clear()` la fiecare rundă** (care face ecranul să clipească). Redesenăm doar rândul 2:

```cpp
#include <LiquidCrystal.h>

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

const int BUTON = 7;
const int NR_PAGINI = 3;

int pagina = 0;
bool butonAnterior = false;
unsigned long ultimaActualizare = 0;

float temperatura() {
  float volti = analogRead(A1) * 5.0 / 1023.0;
  return (volti - 0.5) * 100.0;
}

void titlu() {
  lcd.clear();
  if (pagina == 0) lcd.print("Temperatura:");
  else if (pagina == 1) lcd.print("Lumina:");
  else lcd.print("Salut, prieteni!");
}

void valoare() {
  lcd.setCursor(0, 1);
  if (pagina == 0) {
    lcd.print(temperatura(), 1);
    lcd.print(" C       ");
  } else if (pagina == 1) {
    lcd.print(map(analogRead(A0), 0, 1023, 0, 100));
    lcd.print(" %       ");
  } else {
    lcd.print("Arduino e super!");
  }
}

void setup() {
  pinMode(BUTON, INPUT_PULLUP);
  lcd.begin(16, 2);
  titlu();
  valoare();
}

void loop() {
  bool apasat = (digitalRead(BUTON) == LOW);

  if (apasat && !butonAnterior) {
    pagina = (pagina + 1) % NR_PAGINI;
    titlu();
    valoare();
  }
  butonAnterior = apasat;

  if (millis() - ultimaActualizare >= 500) {
    ultimaActualizare = millis();
    valoare();
  }
  delay(30);
}
```

- `titlu()` se apelează **doar la schimbarea paginii**.  
- `valoare()` se apelează la **fiecare 500 ms**.  
- Spațiile de la sfârșit șterg resturile.

**Gata când:**  
- [ ] Codul complet se compilează fără erori  
- [ ] Simularea face tot ce scrie în „Complet”  

### 6) Proiectul 2 — Minim și maxim
Un termometru bun nu arată doar temperatura de **acum**, ci și cea mai rece și cea mai caldă valoare de când a pornit. Pornim cu `minim = 100` și `maxim = -100`: orice temperatură reală este mai mică decât 100 și mai mare decât −100, deci prima măsurătoare le înlocuiește pe amândouă. Butonul de pe pin 7 le **resetează**. Circuitul rămâne cel de la proiectul 1.

```cpp
#include <LiquidCrystal.h>

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

const int BUTON = 7;

float minim = 100;
float maxim = -100;
unsigned long ultimaActualizare = 0;

float temperatura() {
  float volti = analogRead(A1) * 5.0 / 1023.0;
  return (volti - 0.5) * 100.0;
}

void setup() {
  pinMode(BUTON, INPUT_PULLUP);
  lcd.begin(16, 2);
}

void loop() {
  if (digitalRead(BUTON) == LOW) {
    minim = 100;
    maxim = -100;
  }

  if (millis() - ultimaActualizare >= 500) {
    ultimaActualizare = millis();
    float t = temperatura();

    if (t < minim) minim = t;
    if (t > maxim) maxim = t;

    lcd.setCursor(0, 0);
    lcd.print("Acum: ");
    lcd.print(t, 1);
    lcd.print(" C   ");

    lcd.setCursor(0, 1);
    lcd.print("m");
    lcd.print(minim, 1);
    lcd.print(" M");
    lcd.print(maxim, 1);
    lcd.print("    ");
  }
  delay(30);
}
```

- `if (t < minim) minim = t;` păstrează cea mai mică valoare văzută până acum; `maxim` face la fel invers.  
- Rândul 1 arată temperatura de acum, rândul 2 minimul (`m`) și maximul (`M`).  
- Spațiile de la sfârșit șterg resturile unui număr mai lung.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] `m` și `M` se schimbă doar când temperatura iese din intervalul văzut până acum  

### 7) Testul termometrului

| Pas | Ce faci | Ce vezi |
|-----|---------|---------|
| 1 | Pornești simularea | `m` și `M` sunt egale cu temperatura de acum |
| 2 | Crești temperatura TMP36 | `M` crește, `m` rămâne |
| 3 | O scazi sub valoarea de început | `m` scade, `M` rămâne |
| 4 | Apeși butonul | `m` și `M` se aliniază din nou la temperatura de acum |

**Gata când:**  
- [ ] Am încercat fiecare pas din listă  
- [ ] Am notat ce nu a mers și am corectat

---

## Greșeli frecvente
1. **Ecranul clipește** — `lcd.clear()` în `loop` la fiecare rundă.  
2. **Pagina sare peste mai multe** — numeri tot timpul cât e apăsat, nu doar frontul.  
3. **Rămân cifre vechi** — lipsesc spațiile.  
4. **Temperatura mereu la fel** — `valoare()` nu e apelată periodic.  
5. **Eroare la compilare** — ai omis `;` după `lcd.print(...)` sau acolade.
6. **Minimul rămâne 100** — ai uitat `if (t < minim) minim = t;`.  
7. **Minim și maxim se schimbă la fiecare măsurătoare** — le resetezi în `loop` fără buton.  
8. **Butonul nu resetează nimic** — lipsește `INPUT_PULLUP` pentru pin 7.  

---

## De făcut azi — „Panou de informații”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Temperatura pe LCD |
| **Complet** | 3 pagini cu buton, valori actualizate, fără clipiri |
| **Proiectul 2** | Termometru cu minim și maxim, resetat cu un buton |

### Pasul 1 — Minim
- [ ] Temperatura se actualizează  

### Pasul 2 — Complet
- [ ] 3 pagini cu modulo  
- [ ] Titlu separat de valoare  
- [ ] Numele `A3_L02` e corect

### Pasul 3 — Proiectul 2
- [ ] `minim` și `maxim` ținute în variabile  
- [ ] Rândul 2 arată `m` și `M` cu o zecimală  
- [ ] Butonul resetează valorile  

---

## Bonus ★★★ — Provocare: Panou cu alertă de căldură
*Doar dacă ai terminat Proiectul 2.*

Pune termometrul cu minim și maxim ca **a patra pagină** a panoului. **Piesă nouă:** un LED roșu pe pin 8 (prin 220 Ω) care se aprinde când temperatura trece de 30 °C.

- [ ] Butonul trece prin 4 pagini: temperatură, lumină, mesaj, minim/maxim  
- [ ] LED-ul se aprinde peste 30 °C și se stinge sub 28 °C, ca să nu clipească la limită  
- [ ] Alerta funcționează pe oricare pagină, nu doar pe prima  

## Recapitulare pe scurt
1. Păstrăm **pagina curentă** într-o variabilă  
2. `%` face ciclul `0 → 1 → 2 → 0`  
3. `clear` doar la schimbarea paginii  
4. `millis()` pentru actualizări periodice  
5. `minim` și `maxim` pornesc din valori extreme și se corectează la fiecare măsurătoare  

## Pe placa reală *(opțional)*
Un meniu pe LCD se face la fel, dar de obicei cu 2–3 butoane (sus, jos, OK).

## Quiz scurt
- Ce rezultat are `5 % 3`?  
- De ce nu punem `lcd.clear()` în `loop` la fiecare rundă?  
- Ce înseamnă „front” la un buton?
- De ce pornim `minim` de la 100, nu de la 0?  

## Temă
Desenează pe hârtie 3 pagini ale panoului tău (ce text, ce valoare) pentru un produs real (ex. frigider).

---

## Ce urmează — Lecția 3
În **lecția 3** legi un afișaj cu 7 segmente și construiești o numărătoare inversă de rachetă, cu buton și bip.
