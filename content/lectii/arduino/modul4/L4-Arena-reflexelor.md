# LECȚIA 4 — Arena reflexelor
### Timp, aleatoriu, reguli și scor
**Modulul 4 · Proiecte complete**  
**Code Maker Club · Arduino Creator**

> Azi construiești un **joc**: un LED se aprinde la un moment imprevizibil, iar tu trebuie să apeși cât mai repede. Arduino îți măsoară reflexele în **milisecunde**.  
> Proiect: **„Arena reflexelor”** · `Prenume_Nume_A4_L04`

---

## Ce facem azi
La finalul orei ai **două proiecte**: **Arena reflexelor** (un LED se aprinde la un moment imprevizibil, iar tu apeși cât mai repede; 5 runde, medie, record și „start greșit”) și o **arenă cu vieți**, în care ai 3 vieți, timpul tău de reacție scade la fiecare rundă reușită și pierzi o viață dacă ești prea lent. Jocurile electronice sunt făcute din aceleași ingrediente: **timp**, **aleatoriu**, **reguli** și **scor**.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L3 · starea unui sistem |
| 10–25 | Conexiuni |
| 25–55 | **Proiectul 1** · runda simplă |
| 55–80 | **Proiectul 1** · reguli, 5 runde, record |
| 80–110 | **Proiectul 2** · arena cu vieți |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme |

**Componente azi:** Arduino Uno · Breadboard · LCD 16 x 2 · LED verde · Resistor 220 Ω · Pushbutton · Piezo · LED roșu + Resistor 220 Ω (doar la Bonus) · fire

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `random(1000, 4000)` | Un număr aleatoriu între 1000 și 3999 (pauza dinainte de LED) | `unsigned long pauza = random(1000, 4000);` |
| `long runda()` cu `return -1;` | O funcție care returnează timpul, sau un semnal special (-1) la start greșit | `if (timp < 0) continue;` |
| `continue;` | Sare la următoarea repetare, fără să numere runda | `if (timp < 0) continue;` |
| `"Runda " + String(valide)` | Lipește un text cu un număr | `mesaj("Scor: " + String(scor), "");` |
| `while (vieti > 0)` | Repetă jocul cât timp mai ai vieți | `while (vieti > 0) { ... }` |
| `max(300, limita - 50)` | Ia cea mai mare dintre două valori, ca limita să nu scadă sub 300 | `limita = max(300, limita - 50);` |

---

## Pas cu pas

### 1) Circuit nou
`Prenume_Nume_A4_L04`

**Gata când:**  
- [ ] Proiectul nou are numele `Prenume_Nume_A4_L04`  

### 2) Conexiuni

| Piesă | Se conectează |
|-------|---------------|
| **LCD** | RS 12, E 11, D4 5, D5 4, D6 3, D7 2; VSS/RW/V0/K la GND; VDD și A (cu 220 Ω) la 5V |
| **LED verde** | pin **7** → 220 Ω → anod · catod → GND |
| **Buton** | pin **8** și **GND** |
| **Piezo** | pin **13** și **GND** |

**Gata când:**  
- [ ] Toate firele sunt conectate exact ca în tabel  
- [ ] Am verificat de două ori GND și 5V înainte să pornesc simularea  

### 3) Reguli
1. Pe ecran: „Pregateste-te...”.  
2. După o pauză **aleatorie** (1–4 secunde), LED-ul se aprinde.  
3. Apeși cât mai repede. Arduino afișează timpul de reacție.  
4. Dacă apeși **înainte** să se aprindă LED-ul: „Start gresit!”.

### 4) Minim — o singură rundă

```cpp
#include <LiquidCrystal.h>

const int LED = 7;
const int BUTON = 8;

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

void setup() {
  pinMode(LED, OUTPUT);
  pinMode(BUTON, INPUT_PULLUP);
  randomSeed(analogRead(A0));
  lcd.begin(16, 2);
}

void loop() {
  lcd.clear();
  lcd.print("Pregateste-te...");
  delay(random(1000, 4000));

  digitalWrite(LED, HIGH);
  unsigned long start = millis();

  while (digitalRead(BUTON) == HIGH) {
  }

  unsigned long timp = millis() - start;
  digitalWrite(LED, LOW);

  lcd.clear();
  lcd.print("Timp reactie:");
  lcd.setCursor(0, 1);
  lcd.print(timp);
  lcd.print(" ms");

  delay(3000);
}
```

- `randomSeed(analogRead(A0))` — pentru ca „aleatoriul” să nu fie la fel la fiecare pornire (A0 e liber, deci „zgomotos”).  
- `random(1000, 4000)` — număr între 1000 și 3999.  
- `while (digitalRead(BUTON) == HIGH) { }` — așteaptă **cât timp** butonul nu e apăsat.  
- `millis() - start` — timpul scurs de când s-a aprins LED-ul.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Simularea pornește și montajul face ce scrie în „Minim”  

### 5) Complet — 5 runde, start greșit, record
Folosim funcții și variabile globale:

```cpp
#include <LiquidCrystal.h>

const int LED = 7;
const int BUTON = 8;
const int BUZZER = 13;
const int RUNDE = 5;

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

long record = 9999;

void mesaj(String sus, String jos) {
  lcd.clear();
  lcd.print(sus);
  lcd.setCursor(0, 1);
  lcd.print(jos);
}

void asteaptaEliberare() {
  while (digitalRead(BUTON) == LOW) {
  }
  delay(50);
}

long runda() {
  mesaj("Pregateste-te...", "");
  unsigned long pauza = random(1000, 4000);
  unsigned long incepe = millis();

  while (millis() - incepe < pauza) {
    if (digitalRead(BUTON) == LOW) {
      tone(BUZZER, 200, 400);
      mesaj("Start gresit!", "Mai incearca");
      delay(1500);
      asteaptaEliberare();
      return -1;
    }
  }

  digitalWrite(LED, HIGH);
  tone(BUZZER, 1000, 80);
  unsigned long start = millis();

  while (digitalRead(BUTON) == HIGH) {
  }

  long timp = millis() - start;
  digitalWrite(LED, LOW);
  return timp;
}

void setup() {
  pinMode(LED, OUTPUT);
  pinMode(BUTON, INPUT_PULLUP);
  randomSeed(analogRead(A0));
  lcd.begin(16, 2);
}

void loop() {
  mesaj("Reflexe de", "campion!");
  delay(1500);
  mesaj("Apasa butonul", "pentru start");
  while (digitalRead(BUTON) == HIGH) {
  }
  asteaptaEliberare();

  long suma = 0;
  int valide = 0;

  while (valide < RUNDE) {
    long timp = runda();
    if (timp < 0) continue;

    valide++;
    suma += timp;

    mesaj("Runda " + String(valide) + "/" + String(RUNDE), String(timp) + " ms");
    delay(1500);
    asteaptaEliberare();
  }

  long medie = suma / RUNDE;

  if (medie < record) {
    record = medie;
    tone(BUZZER, 1500, 500);
    mesaj("NOU RECORD!", String(medie) + " ms");
  } else {
    mesaj("Medie: " + String(medie), "Record: " + String(record));
  }
  delay(5000);
}
```

**Idei noi**

- `long runda()` **returnează** timpul sau `-1` dacă a fost start greșit. `-1` e un semnal special.  
- `continue;` sare la următoarea rundă fără să o numere.  
- `"Runda " + String(valide)` — lipim text cu numere.  
- `record` rămâne în memorie cât timp e placa pornită.

**Gata când:**  
- [ ] Codul complet se compilează fără erori  
- [ ] Simularea face tot ce scrie în „Complet”  

### 6) Cum arată reflexele tale

| Timp mediu | Ce înseamnă |
|------------|-------------|
| sub 200 ms | super-rapid |
| 200–300 ms | foarte bun |
| 300–450 ms | normal |
| peste 450 ms | mai încearcă |

### 7) Proiectul 2 — Arena cu vieți
Acum jocul are **reguli care se strâng**: ai **3 vieți**, iar la început ai **800 ms** să apeși după ce se aprinde LED-ul. După fiecare rundă reușită primești un punct, iar limita scade cu 50 ms (nu sub 300 ms). Pierzi o viață dacă apeși **prea devreme** sau dacă **nu apeși la timp**. Când nu mai ai vieți, jocul se termină și afișează scorul. Circuitul rămâne cel de la proiectul 1.

```cpp
#include <LiquidCrystal.h>

const int LED = 7;
const int BUTON = 8;
const int BUZZER = 13;
const int VIETI_START = 3;

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

int vieti;
int scor;
int limita;

void mesaj(String sus, String jos) {
  lcd.clear();
  lcd.print(sus);
  lcd.setCursor(0, 1);
  lcd.print(jos);
}

void asteaptaEliberare() {
  while (digitalRead(BUTON) == LOW) {
  }
  delay(50);
}

// Returnează timpul de reacție, -1 = start greșit, -2 = prea târziu
long runda() {
  mesaj("Pregateste-te...", "");
  unsigned long pauza = random(1000, 4000);
  unsigned long incepe = millis();

  while (millis() - incepe < pauza) {
    if (digitalRead(BUTON) == LOW) {
      return -1;
    }
  }

  digitalWrite(LED, HIGH);
  unsigned long start = millis();

  while (millis() - start < (unsigned long)limita) {
    if (digitalRead(BUTON) == LOW) {
      digitalWrite(LED, LOW);
      return millis() - start;
    }
  }

  digitalWrite(LED, LOW);
  return -2;
}

void joc() {
  vieti = VIETI_START;
  scor = 0;
  limita = 800;

  while (vieti > 0) {
    long rezultat = runda();

    if (rezultat == -1) {
      tone(BUZZER, 200, 400);
      vieti--;
      mesaj("Start gresit!", "Vieti: " + String(vieti));
    } else if (rezultat == -2) {
      tone(BUZZER, 300, 400);
      vieti--;
      mesaj("Prea tarziu!", "Vieti: " + String(vieti));
    } else {
      scor++;
      limita = max(300, limita - 50);
      tone(BUZZER, 1000, 80);
      mesaj(String(rezultat) + " ms", "Scor: " + String(scor));
    }
    delay(1500);
    asteaptaEliberare();
  }

  tone(BUZZER, 400, 800);
  mesaj("GAME OVER", "Scor: " + String(scor));
  delay(4000);
}

void setup() {
  pinMode(LED, OUTPUT);
  pinMode(BUTON, INPUT_PULLUP);
  randomSeed(analogRead(A0));
  lcd.begin(16, 2);
}

void loop() {
  mesaj("Arena reflexelor", "Apasa pentru start");
  while (digitalRead(BUTON) == HIGH) {
  }
  asteaptaEliberare();
  joc();
}
```

- `runda()` are **trei rezultate**: timpul, `-1` (prea devreme) sau `-2` (prea târziu). Funcția `joc()` decide ce urmează.  
- `limita = max(300, limita - 50);` strânge regula la fiecare punct, dar nu sub 300 ms.  
- `while (vieti > 0)` ține jocul în mișcare cât timp mai ai vieți.  
- Nu mai folosim `continue;`: o rundă greșită nu e numărată, dar costă o viață.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Ai 3 vieți, iar la 0 vieți apare „GAME OVER” cu scorul  

### 8) Testul arenei

| Pas | Ce faci | Ce vezi |
|-----|---------|---------|
| 1 | Apeși butonul înainte să se aprindă LED-ul | „Start gresit!”, `Vieti: 2` |
| 2 | Aștepți LED-ul și nu apeși | „Prea tarziu!”, `Vieti: 1` |
| 3 | Apeși repede după ce se aprinde | timpul în ms și `Scor: 1`, limita scade |
| 4 | Pierzi ultima viață | „GAME OVER” și scorul, apoi jocul o ia de la capăt |

**Gata când:**  
- [ ] Am încercat fiecare pas din listă  
- [ ] Am notat ce nu a mers și am corectat  

---

## Greșeli frecvente
1. **Timpul e mereu 0** — butonul era deja apăsat; `asteaptaEliberare()` rezolvă.  
2. **Pauza e mereu aceeași** — lipsește `randomSeed`.  
3. **Scorul nu se actualizează** — `record` e declarat în `loop`, nu global.  
4. **Ecranul clipește** — `mesaj()` apelat prea des.  
5. **Rundele nu se termină** — „start greșit” numără ca rundă; folosește `continue`.
6. **Pierzi o viață la fiecare rundă** — `limita` pornește prea mică (ar trebui să fie 800 la început).    
7. **Jocul nu se termină niciodată** — `vieti--` lipsește din una dintre ramurile greșite.    
8. **Limita ajunge la 0** — ai uitat `max(300, ...)`.    

---

## De făcut azi — „Arena reflexelor”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | O rundă cu timp afișat |
| **Complet** | Minim + start greșit + 5 runde + medie + record |
| **Proiectul 2** | Arena cu 3 vieți: limită de timp care scade și GAME OVER |

### Pasul 1 — Minim
- [ ] LED + buton + LCD  
- [ ] Timpul de reacție se afișează  

### Pasul 2 — Complet
- [ ] „Start greșit” funcționează  
- [ ] Medie din 5 runde  
- [ ] Record păstrat între partide  
- [ ] Numele `A4_L04` e corect

### Pasul 3 — Proiectul 2
- [ ] `runda()` cu trei rezultate (timp, -1, -2)  
- [ ] Limita scade cu 50 ms la fiecare punct, nu sub 300  
- [ ] La 0 vieți apare „GAME OVER” cu scorul  

---

## Bonus ★★★ — Lumina roșie: nu apăsa!
*Doar dacă ai terminat Proiectul 2.*

Arena devine mai înșelătoare. **Piesă nouă:** un LED roșu pe pin **6** (prin 220 Ω), pe care **nu** trebuie să apeși.

- [ ] La una din patru runde (alese cu `random`) se aprinde LED-ul roșu în loc de cel verde  
- [ ] Dacă apeși când e roșu pierzi o viață; dacă aștepți limita fără să apeși primești un punct  
- [ ] Testezi 8 runde și notezi de câte ori a apărut roșul  

## Recapitulare pe scurt
1. `random` + `randomSeed` pentru imprevizibil  
2. `millis()` măsoară timpul de reacție și limita  
3. O funcție poate returna semnale speciale (-1, -2)  
4. Reguli + scor + vieți = joc  

## Pe placa reală *(opțional)*
Butonul fizic poate avea „zgomot” (trepidații); `delay(50)` după apăsare ajută. Jocurile reale folosesc și o limită de timp.

## Quiz scurt
- De ce folosim `randomSeed(analogRead(A0))`?  
- Ce face `continue`?  
- Cum afli dacă cineva a apăsat prea devreme?
- Ce trei rezultate poate returna `runda()` în proiectul 2?  

## Temă
Joacă-te cu 3 prieteni și notează media fiecăruia. Cine e cel mai rapid?

---

## Ce urmează — Lecția 5
În **lecția 5** construiești un cronometru precis, cu ture și numărătoare inversă, și un cronometru de șah pentru doi jucători.
