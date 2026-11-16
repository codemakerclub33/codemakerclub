# LECȚIA 1 — Cartea de vizită
### LCD 16×2, text și caractere proprii
**Modulul 3 · Afișaj și mișcare**  
**Code Maker Club · Display Maker**

> Azi Arduino începe să **scrie** pe un ecran LCD 16×2, nu doar în Serial Monitor.  
> Proiect: **„Cartea de vizită”** · `Prenume_Nume_A3_L01`

---

## Ce facem azi
La finalul orei ai **două proiecte**: **Cartea de vizită** (un ecran cu două rânduri de text, un contor în timp real și o inimioară desenată de tine) și un **panou cu mesaje** care se scriu literă cu literă. Ecranele LCD sunt în cuptoare, aparate de cafea și mașini, iar tu înveți să faci Arduino să **vorbească** fără calculator.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap Modulul 2 · de ce un ecran |
| 10–35 | Conexiunile LCD (cele mai multe fire de până acum) |
| 35–55 | **Proiectul 1** · primul text |
| 55–75 | **Proiectul 1** · contor + caracter propriu |
| 75–110 | **Proiectul 2** · mesaje care se scriu literă cu literă |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme |

**Componente azi:** Arduino Uno · Breadboard · **LCD 16 x 2** · Resistor 220 Ω · Potentiometer (opțional, contrast) · **Potentiometer pentru viteză** (doar la Bonus) · fire

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `LiquidCrystal lcd(12, 11, 5, 4, 3, 2);` | Creează ecranul, cu pinii în ordinea RS, E, D4–D7 | `LiquidCrystal lcd(12, 11, 5, 4, 3, 2);` |
| `lcd.begin(16, 2)` | Pornește ecranul: 16 coloane, 2 rânduri | `lcd.begin(16, 2);` |
| `lcd.setCursor(coloană, rând)` | Mută cursorul (numărătoarea începe de la 0) | `lcd.setCursor(0, 1);` |
| `lcd.print(x)` | Scrie un text sau un număr | `lcd.print("Salut!");` |
| `lcd.createChar(0, desen)` | Înregistrează un caracter desenat de tine | `lcd.createChar(0, inima);` |
| `text.charAt(i)` | Dă litera de pe poziția `i` dintr-un text | `mesaje[0].charAt(2)` |

---

## Pas cu pas

### 1) Circuit nou
`Prenume_Nume_A3_L01`

**Gata când:**  
- [ ] Proiectul nou are numele `Prenume_Nume_A3_L01`  

### 2) Conexiuni
LCD-ul are 16 pini. Conectezi **doar** cei din tabel. Pe Tinkercad, cursorul peste pin îi arată numele.

| Pin LCD | Se conectează |
|---------|---------------|
| **VSS** | GND |
| **VDD** | 5V |
| **V0** (contrast) | GND (sau mijlocul unui potențiometru, ca să reglezi contrastul) |
| **RS** | pin **12** |
| **RW** | GND |
| **E** | pin **11** |
| **D4** | pin **5** |
| **D5** | pin **4** |
| **D6** | pin **3** |
| **D7** | pin **2** |
| **A** (lumina de fundal +) | 5V printr-un rezistor de 220 Ω |
| **K** (lumina de fundal −) | GND |

D0–D3 rămân **neconectați**: folosim modul cu **4 fire de date** (D4–D7), ca să economisim pini.

> Sfat: fă conexiunile pe rând și bifează-le. Sunt multe și o greșeală e greu de găsit.

**Gata când:**  
- [ ] Toate firele sunt conectate exact ca în tabel  
- [ ] Am verificat de două ori GND și 5V înainte să pornesc simularea  

### 3) Minim — primul text

```cpp
#include <LiquidCrystal.h>

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

void setup() {
  lcd.begin(16, 2);
  lcd.print("Salut!");
  lcd.setCursor(0, 1);
  lcd.print("Eu sunt Ana");
}

void loop() {
}
```

- `#include <LiquidCrystal.h>` aduce biblioteca pentru LCD.  
- `LiquidCrystal lcd(RS, E, D4, D5, D6, D7)` — ordinea pinilor **contează**.  
- `lcd.begin(16, 2)` = 16 coloane, 2 rânduri.  
- `lcd.setCursor(coloana, rând)` — numărătoarea începe de la **0**: `(0, 1)` e începutul rândului 2.  
- Textul apare o dată, deci `loop()` rămâne gol.

Pune numele tău în loc de „Ana”. Maximum **16 caractere** pe rând.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Simularea pornește și montajul face ce scrie în „Minim”  

### 4) Contor în timp real

```cpp
#include <LiquidCrystal.h>

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

int secunde = 0;

void setup() {
  lcd.begin(16, 2);
  lcd.print("Timp scurs:");
}

void loop() {
  lcd.setCursor(0, 1);
  lcd.print(secunde);
  lcd.print(" secunde   ");
  secunde++;
  delay(1000);
}
```

Spațiile de la sfârșitul lui `" secunde   "` **șterg** resturile unui text mai lung scris înainte. Ecranul nu șterge singur: dacă ai scrie `100 secunde` și apoi `9 secunde`, ar rămâne litere vechi. Aici contorul doar crește, dar obiceiul e bun pentru orice număr care poate scădea.

### 5) Complet — caracter propriu
Fiecare caracter e o grilă de **5×8 puncte**. Poți desena unul tu: o inimioară.

```cpp
#include <LiquidCrystal.h>

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

byte inima[8] = {
  B00000,
  B01010,
  B11111,
  B11111,
  B01110,
  B00100,
  B00000,
  B00000
};

int secunde = 0;

void setup() {
  lcd.begin(16, 2);
  lcd.createChar(0, inima);
  lcd.print("Salut! ");
  lcd.write(byte(0));
}

void loop() {
  lcd.setCursor(0, 1);
  lcd.print(secunde);
  lcd.print(" secunde   ");
  secunde++;
  delay(1000);
}
```

- Fiecare linie `B01010` are 5 biți: `1` = punct aprins, `0` = stins.  
- `createChar(0, inima)` salvează desenul în locul **0** (poți avea până la 8).  
- `lcd.write(byte(0))` îl afișează.

Desenează pe o grilă din caiet și schimbă `inima` într-un **zâmbet**, o **stea** sau un **robot**.

**Gata când:**  
- [ ] Codul complet se compilează fără erori  
- [ ] Simularea face tot ce scrie în „Complet”  

### 6) Comenzi utile

| Comandă | Ce face |
|---------|---------|
| `lcd.clear()` | șterge tot ecranul |
| `lcd.setCursor(c, r)` | mută cursorul |
| `lcd.print(x)` | scrie text sau număr |
| `lcd.noDisplay()` / `lcd.display()` | ascunde / arată textul |
| `lcd.scrollDisplayLeft()` | mută textul spre stânga |

### 7) Proiectul 2 — Mesaje care se scriu singure
Într-un film cu hackeri, textul apare **literă cu literă**. Facem la fel: păstrăm mesajele într-un **tablou de texte**, iar o funcție le scrie cu o mică pauză între litere. Circuitul rămâne cel de la proiectul 1 (RS 12, E 11, D4–D7 pe 5, 4, 3, 2).

```cpp
#include <LiquidCrystal.h>

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

const int NR_MESAJE = 4;
String mesaje[NR_MESAJE] = {
  "Salut, prieteni!",
  "Eu sunt Ana",
  "Arduino e super!",
  "Hai la treaba!"
};

void scrie(String text) {
  lcd.clear();
  for (unsigned int i = 0; i < text.length(); i++) {
    lcd.print(text.charAt(i));
    delay(120);
  }
}

void setup() {
  lcd.begin(16, 2);
}

void loop() {
  for (int i = 0; i < NR_MESAJE; i++) {
    scrie(mesaje[i]);
    lcd.setCursor(0, 1);
    lcd.print("Mesaj ");
    lcd.print(i + 1);
    lcd.print(" din ");
    lcd.print(NR_MESAJE);
    delay(1500);
  }
}
```

- `String mesaje[4]` e un **tablou de texte**: `mesaje[0]` este primul, `mesaje[3]` ultimul.  
- `text.length()` spune câte litere are textul, iar `text.charAt(i)` o ia pe cea de pe poziția `i` (de la 0).  
- `lcd.clear()` șterge mesajul vechi **înainte** să înceapă cel nou.  
- Pe rândul 2 scrii numărul mesajului, ca să vezi mereu unde ești.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Mesajele apar literă cu literă, unul după altul  

### 8) Ce nu știe ecranul
Ecranul LCD are două limite pe care trebuie să le respecți:

- **Maximum 16 caractere** pe rând: ce depășește nu se vede.  
- **Fără diacritice**: `ă`, `î`, `ș`, `ț` nu există în memoria ecranului. Scrie „Imi place”, nu „Îmi place”.

Schimbă primul mesaj cu numele tău și adaugă un al cincilea mesaj (nu uita să schimbi `NR_MESAJE` la 5).

**Gata când:**  
- [ ] Toate mesajele au cel mult 16 caractere, fără diacritice  
- [ ] Ai 5 mesaje, iar rândul 2 arată „Mesaj 5 din 5” la ultimul

---

## Greșeli frecvente
1. **Ecran gol, dar pornit** — contrastul: V0 trebuie la GND (sau potențiometru).  
2. **Pătrate pline pe primul rând** — LCD-ul nu a fost inițializat sau ordinea pinilor din cod e greșită.  
3. **Caractere ciudate** — un fir de date (D4–D7) e la alt pin.  
4. **Text tăiat** — ai trecut de 16 caractere.  
5. **Rămân cifre vechi** — lipsesc spațiile de la sfârșit sau `lcd.clear()`.
6. **Literele apar dintr-odată** — lipsește `delay` din bucla `for` a funcției `scrie`.  
7. **Rămâne text vechi la mesajele scurte** — nu ai șters ecranul cu `lcd.clear()` înainte de mesajul nou.  
8. **Simboluri ciudate în loc de ă, î, ș** — ecranul nu are diacritice; scrie fără.  

---

## De făcut azi — „Cartea de vizită”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Două rânduri de text pe LCD |
| **Complet** | Minim + contor + caracter propriu |
| **Proiectul 2** | Mesaje care se scriu literă cu literă, dintr-un tablou de texte |

### Pasul 1 — Minim
- [ ] LCD conectat conform tabelului  
- [ ] „Salut!” și numele tău  

### Pasul 2 — Complet
- [ ] Contorul merge fără cifre rămase  
- [ ] Un caracter desenat de tine  
- [ ] Numele `A3_L01` e corect

### Pasul 3 — Proiectul 2
- [ ] Un tablou de 4 mesaje (5 după pasul 8)  
- [ ] Fiecare mesaj se scrie literă cu literă, cu `charAt`  
- [ ] Pe rândul 2 apare „Mesaj 1 din 4”  

---

## Bonus ★★★ — Provocare: Text care defilează, cu viteză reglabilă
*Doar dacă ai terminat Proiectul 2.*

Afișează un mesaj **mai lung de 16 caractere** care se mișcă singur de la dreapta la stânga. **Piesă nouă:** un potențiometru (laterale la 5V și GND, mijloc la **A0**) care reglează viteza. Indiciu: scrie mesajul pe primul rând, apoi mută ecranul cu `scrollDisplayLeft()`; memoria ecranului ține 40 de caractere pe rând.

- [ ] Mesajul are cel puțin 30 de caractere și se vede întreg, pe rând, în timp ce defilează  
- [ ] Potențiometrul reglează pauza dintre două mișcări, între 100 și 600 ms (cu `map`)  
- [ ] La final, ecranul se șterge și mesajul pornește din nou de la început  

## Recapitulare pe scurt
1. `LiquidCrystal lcd(12, 11, 5, 4, 3, 2)` — ordine: RS, E, D4–D7  
2. `setCursor(coloană, rând)` începe de la 0  
3. `print` scrie, `clear` șterge  
4. `createChar` + `write` pentru desene proprii  
5. `charAt` + `for` scriu un text literă cu literă  

## Pe placa reală *(opțional)*
Un LCD 16×2 fizic are aceiași 16 pini. Mulți au și un modul **I2C** care reduce firele la 4 (folosește biblioteca `LiquidCrystal_I2C`). Pentru simulator rămânem la varianta cu 6 fire.

## Quiz scurt
- Câte rânduri și coloane are LCD-ul?  
- Ce face `lcd.setCursor(0, 1)`?  
- De ce punem spații la sfârșitul textului?
- Ce literă dă `"Salut".charAt(2)`?  
- De ce nu scriem „Îmi place” pe LCD?  

## Temă
Desenează pe grilă 5×8 trei caractere noi (ex. soare, floare, săgeată) și notează codul `B…` pentru ele.

---

## Ce urmează — Lecția 2
În **lecția 2** transformi LCD-ul într-un panou cu mai multe pagini (temperatura, lumina și un mesaj), schimbate cu un buton.
