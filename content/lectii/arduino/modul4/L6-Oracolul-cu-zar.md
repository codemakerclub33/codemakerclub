# LECȚIA 6 — Oracolul cu zar
### Tablouri, animație, sunet și statistică
**Modulul 4 · Proiecte complete**  
**Code Maker Club · Arduino Creator**

> Azi construiești un **zar electronic** cu 7 LED-uri și un **oracol** care îți dă „răspunsuri” pe LCD.  
> Proiect: **„Oracolul cu zar”** · `Prenume_Nume_A4_L06`

---

## Ce facem azi
La finalul orei ai **două proiecte**: un **oracol cu zar** (7 LED-uri aranjate ca pe un zar, animație de rostogolire, sunet și un răspuns pe LCD) și o **statistică a zarului**, care numără fiecare față și afișează la fiecare 5 aruncări care a ieșit cel mai des. Înveți **tablouri** (un rând din tabel pentru fiecare față) și vezi că probabilitatea se poate **măsura**.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L5 · `random` |
| 10–30 | Montăm cele 7 LED-uri ca pe un zar |
| 30–55 | **Proiectul 1** · fețele zarului |
| 55–80 | **Proiectul 1** · animație, sunet și oracol |
| 80–110 | **Proiectul 2** · statistica zarului |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme |

**Componente azi:** Arduino Uno · Breadboard · 7 × LED · 7 × Resistor 220 Ω · LCD 16 x 2 · Pushbutton · Piezo · LED galben + Resistor 220 Ω (doar la Bonus) · fire

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `const byte FETE[7][7]` | Un tablou cu rânduri și coloane (câte un rând pentru fiecare față) | `digitalWrite(LEDURI[i], FETE[fata][i]);` |
| `const char* RASPUNSURI[6]` | Un tablou de texte | `lcd.print(RASPUNSURI[zar - 1]);` |
| `random(1, 7)` | Un număr de la 1 la 6 (7 nu intră) | `int zar = random(1, 7);` |
| `for (int i = 0; i < 7; i++)` | Repetă pentru fiecare LED din tablou | `for (...) pinMode(LEDURI[i], OUTPUT);` |
| `numarari[zar]++` | Crește cu 1 contorul feței ieșite | `numarari[zar]++;` |
| `aruncari % 5 == 0` | Adevărat la fiecare a cincea aruncare | `if (aruncari % 5 == 0) arataStatistica();` |

---

## Pas cu pas

### 1) Circuit nou
`Prenume_Nume_A4_L06`

**Gata când:**  
- [ ] Proiectul nou are numele `Prenume_Nume_A4_L06`  

### 2) Dispunerea LED-urilor
Pune cele 7 LED-uri ca pe un zar real:

```
 L0     L1
 L2  L3 L4
 L5     L6
```

Fiecare LED are propriul rezistor de 220 Ω și catodul la GND.

| LED | Poziție | Pin |
|-----|---------|-----|
| L0 | sus-stânga | **6** |
| L1 | sus-dreapta | **7** |
| L2 | mijloc-stânga | **8** |
| L3 | centru | **9** |
| L4 | mijloc-dreapta | **10** |
| L5 | jos-stânga | **A0** |
| L6 | jos-dreapta | **A1** |

| Piesă | Se conectează |
|-------|---------------|
| **Buton** | pin **A2** și **GND** |
| **Piezo** | pin **13** și **GND** |
| **LCD** | RS 12, E 11, D4 5, D5 4, D6 3, D7 2 |

### 3) Tabelul fețelor
Fiecare față = care LED-uri se aprind (`1` = aprins):

| Față | L0 | L1 | L2 | L3 | L4 | L5 | L6 |
|------|----|----|----|----|----|----|----|
| 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 |
| 2 | 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| 3 | 1 | 0 | 0 | 1 | 0 | 0 | 1 |
| 4 | 1 | 1 | 0 | 0 | 0 | 1 | 1 |
| 5 | 1 | 1 | 0 | 1 | 0 | 1 | 1 |
| 6 | 1 | 1 | 1 | 0 | 1 | 1 | 1 |

### 4) Minim — zar simplu

```cpp
const int LEDURI[7] = {6, 7, 8, 9, 10, A0, A1};
const int BUTON = A2;

const byte FETE[7][7] = {
  {0, 0, 0, 0, 0, 0, 0},
  {0, 0, 0, 1, 0, 0, 0},
  {1, 0, 0, 0, 0, 0, 1},
  {1, 0, 0, 1, 0, 0, 1},
  {1, 1, 0, 0, 0, 1, 1},
  {1, 1, 0, 1, 0, 1, 1},
  {1, 1, 1, 0, 1, 1, 1}
};

void arataFata(int fata) {
  for (int i = 0; i < 7; i++) {
    digitalWrite(LEDURI[i], FETE[fata][i]);
  }
}

void setup() {
  for (int i = 0; i < 7; i++) {
    pinMode(LEDURI[i], OUTPUT);
  }
  pinMode(BUTON, INPUT_PULLUP);
  randomSeed(analogRead(A3));
  arataFata(1);
}

void loop() {
  if (digitalRead(BUTON) == LOW) {
    int zar = random(1, 7);
    arataFata(zar);
    delay(300);
  }
}
```

- `FETE[7][7]` — rândul `0` e „toate stinse”; rândurile 1–6 sunt fețele. Astfel `FETE[zar]` merge **direct**, fără `zar - 1`.  
- `random(1, 7)` dă un număr de la 1 la 6 (7 nu e inclus).  
- Aceeași idee ca la 7 segmente, dar cu o grilă de 7 LED-uri.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Simularea pornește și montajul face ce scrie în „Minim”  

### 5) Complet — animație, sunet și oracol

```cpp
#include <LiquidCrystal.h>

const int LEDURI[7] = {6, 7, 8, 9, 10, A0, A1};
const int BUTON = A2;
const int BUZZER = 13;

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

const byte FETE[7][7] = {
  {0, 0, 0, 0, 0, 0, 0},
  {0, 0, 0, 1, 0, 0, 0},
  {1, 0, 0, 0, 0, 0, 1},
  {1, 0, 0, 1, 0, 0, 1},
  {1, 1, 0, 0, 0, 1, 1},
  {1, 1, 0, 1, 0, 1, 1},
  {1, 1, 1, 0, 1, 1, 1}
};

const char* RASPUNSURI[6] = {
  "Nu acum",
  "Poate",
  "Sigur ca da!",
  "Intreaba iar",
  "Cu siguranta",
  "Sansa mare"
};

void arataFata(int fata) {
  for (int i = 0; i < 7; i++) {
    digitalWrite(LEDURI[i], FETE[fata][i]);
  }
}

void ruleaza() {
  int pauza = 40;
  for (int i = 0; i < 12; i++) {
    arataFata(random(1, 7));
    tone(BUZZER, 400 + i * 60, 30);
    delay(pauza);
    pauza += 12;
  }
}

void setup() {
  for (int i = 0; i < 7; i++) {
    pinMode(LEDURI[i], OUTPUT);
  }
  pinMode(BUTON, INPUT_PULLUP);
  randomSeed(analogRead(A3));
  lcd.begin(16, 2);
  lcd.print("Oracolul asculta");
  lcd.setCursor(0, 1);
  lcd.print("Apasa butonul!");
  arataFata(0);
}

void loop() {
  if (digitalRead(BUTON) == LOW) {
    ruleaza();

    int zar = random(1, 7);
    arataFata(zar);
    tone(BUZZER, 1200, 200);

    lcd.clear();
    lcd.print("Zar: ");
    lcd.print(zar);
    lcd.setCursor(0, 1);
    lcd.print(RASPUNSURI[zar - 1]);

    delay(500);
  }
}
```

**Idei noi**

- `ruleaza()` — animația: schimbă fața de 12 ori, tot mai **lent** (`pauza += 12`), cu sunet tot mai ascuțit. Așa pare că zarul „se oprește”.  
- `const char* RASPUNSURI[6]` — un tablou cu **texte**. `RASPUNSURI[zar - 1]` alege răspunsul (index 0–5).  
- Rezultatul final e ales **separat**, ca animația să nu influențeze zarul.

**Gata când:**  
- [ ] Codul complet se compilează fără erori  
- [ ] Simularea face tot ce scrie în „Complet”  

### 6) Fețe corecte? (un test)
La final adaugă în `setup()` un test: pentru fiecare față de la 1 la 6, o arăți 500 ms. Dacă nu seamănă cu un zar, ai o greșeală în tabel sau în fire.

### 7) Proiectul 2 — Statistica zarului
Un zar corect ar trebui să dea fiecare față cam la fel de des. Hai să verificăm! Programul **numără** de câte ori a ieșit fiecare față și, la fiecare **5 aruncări**, arată pe LCD câte aruncări au fost și care față a ieșit cel mai des. Circuitul rămâne cel de la proiectul 1; adaugi doar cod în programul **Complet**.

**a) Variabile și funcție nouă** (le pui înainte de `setup()`):

```cpp
int numarari[7];       // numarari[1] ... numarari[6]
int aruncari = 0;

void arataStatistica() {
  int maxim = 1;
  for (int f = 2; f <= 6; f++) {
    if (numarari[f] > numarari[maxim]) maxim = f;
  }

  lcd.clear();
  lcd.print("Aruncari: ");
  lcd.print(aruncari);
  lcd.setCursor(0, 1);
  lcd.print("Mai des: ");
  lcd.print(maxim);
  lcd.print(" (");
  lcd.print(numarari[maxim]);
  lcd.print("x)");
}
```

**b) În `loop()`** înlocuiești `delay(500);` de la sfârșit cu:

```cpp
    aruncari++;
    numarari[zar]++;
    delay(1500);

    if (aruncari % 5 == 0) {
      arataStatistica();
      delay(2500);
    }
```

- `int numarari[7];` are 7 locuri ca să folosim direct `numarari[zar]` (locul 0 rămâne nefolosit).  
- Tabloul global pornește cu zerouri, așa că nu trebuie inițializat.  
- Bucla `for` caută față cu cel mai mare contor.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] După 5 aruncări apare statistica  

### 8) Testul statisticii

| Pas | Ce faci | Ce vezi |
|-----|---------|---------|
| 1 | Arunci zarul de 5 ori | Zarul și răspunsul, apoi statistica |
| 2 | Verifici `Aruncari: 5` | Numărul e corect |
| 3 | Arunci încă 5 ori | `Aruncari: 10` și față care a ieșit cel mai des |
| 4 | Notezi pe hârtie fețele ieșite și le numeri | Se potrivește cu ce arată LCD-ul |

**Gata când:**  
- [ ] Am încercat fiecare pas din listă  
- [ ] Am notat ce nu a mers și am corectat  

---

## Greșeli frecvente
1. **Aceleași numere la fiecare pornire** — lipsește `randomSeed`.  
2. **Zar cu 7** — `random(1, 8)` în loc de `random(1, 7)`.  
3. **Fețe greșite** — LED-urile nu sunt la pinii din `LEDURI[]`.  
4. **Răspunsul nu se potrivește** — indexul `zar - 1` greșit.  
5. **Prea multe fire** — pune rezistoarele **pe rând**, cu bifă.
6. **Statistica arată mereu 0** — ai pus `numarari[zar]++` înainte ca `zar` să fie ales.    
7. **Programul se blochează sau afișează valori ciudate** — `numarari` are doar 6 locuri; folosește `numarari[7]`.    
8. **Statistica apare la fiecare aruncare** — lipsește `% 5 == 0`.    

---

## De făcut azi — „Oracolul cu zar”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Buton → zar cu 7 LED-uri |
| **Complet** | Minim + animație + sunet + LCD cu răspuns |
| **Proiectul 2** | Statistica zarului: contor pentru fiecare față, afișat la 5 aruncări |

### Pasul 1 — Minim
- [ ] 7 LED-uri ca un zar  
- [ ] Toate fețele corecte  

### Pasul 2 — Complet
- [ ] Animația încetinește  
- [ ] LCD cu zarul și răspunsul  
- [ ] Numele `A4_L06` e corect

### Pasul 3 — Proiectul 2
- [ ] `numarari[zar]++` la fiecare aruncare  
- [ ] La 5 aruncări apare statistica  
- [ ] Se vede ce față a ieșit cel mai des  

---

## Bonus ★★★ — Jackpot la două de 6
*Doar dacă ai terminat Proiectul 2.*

Zarul sărbătorește o serie norocoasă. **Piesă nouă:** un LED galben pe pin **A4** (prin 220 Ω).

- [ ] Ții minte aruncarea anterioară într-o variabilă  
- [ ] Dacă ies doi de 6 la rând, LED-ul galben clipește de 3 ori și buzzerul sună  
- [ ] Aruncă zarul până obții jackpotul și notezi câte aruncări ai avut nevoie  

## Recapitulare pe scurt
1. Tablou de **modele** pentru fețe  
2. `random(min, max)` — max e **exclus**  
3. Animație = pauze tot mai mari  
4. Contoare într-un tablou: `numarari[zar]++`  

## Pe placa reală *(opțional)*
Un zar „adevărat” ar putea fi pornit prin **scuturare**, cu un senzor de înclinare, ca în Modulul 2 L8.

## Quiz scurt
- Câte valori diferite poate da `random(1, 7)`?  
- De ce rândul 0 din `FETE` e gol?  
- Cum ai adăuga al 7-lea răspuns?
- De ce `numarari` are 7 locuri, deși zarul are 6 fețe?  

## Temă
Scrie 6 răspunsuri amuzante pentru oracol (fiecare, maxim 16 caractere).

---

## Ce urmează — Lecția 7
În **lecția 7** construiești o stație meteo de exterior, cu temperatură, lumină, grafic și tendință.
