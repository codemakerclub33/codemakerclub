# LECȚIA 10 — Panoul meu
**Modulul 1 · Primele circuite**  
**Code Maker Club · Circuit Starter**

> Azi aduni într-un **panou de control** proiectele din lecțiile 5, 6 și 7: lampa, lampa colorată și soneria. Treci de la unul la altul cu un buton.  
> Proiect: **„Panoul meu”** · `Prenume_Nume_A1_L10`

---

## Ce facem azi
Pui la un loc **proiectele tale din modul**, ca o expoziție: **Lampa mea** (lecția 5), **Lampa mea colorată** (lecția 6) și **Soneria mea** (lecția 7). Fiecare devine un **mod** al panoului, iar un buton te mută de la unul la altul. Un proiect adevărat nu e o singură piesă, ci **mai multe care lucrează împreună**. La final îl prezinți.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recap modul 1 · planul proiectului |
| 15–40 | Circuitul complet (RGB + două butoane + potențiometru + buzzer) |
| 40–75 | Modurile cu `switch`: lampa, lampa colorată, soneria |
| 75–100 | Complet: petrecere + bip |
| 100–120 | Prezentare + quiz final al modulului |

**Componente azi:** Arduino Uno · Breadboard · **RGB LED** · 3 × Resistor 220 Ω · **Potentiometer** · **2 × Pushbutton** · **Piezo** · fire

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `switch (mod) { case 0: … break; }` | Alege un bloc în funcție de valoare | câte un `case` pentru fiecare mod |
| `%` (rest) | Păstrează un număr în interval | `mod = (mod + 1) % 4;` |
| `random(256)` | Număr aleatoriu de la 0 la 255 | culori aleatorii la petrecere |
| Funcții proprii | Păstrează codul ușor de citit | `culoare(r, g, b)`, `bip(ori)` |

---

## Pas cu pas

### 1) Circuit nou
`Prenume_Nume_A1_L10`

**Gata când:**  
- [ ] Proiectul nou are numele `Prenume_Nume_A1_L10`  

### 2) Conexiuni

| Piesă | Pin | Observații |
|-------|-----|------------|
| LED RGB — **Roșu** | **9** | rezistor 220 Ω |
| LED RGB — **Verde** | **10** | rezistor 220 Ω |
| LED RGB — **Albastru** | **6** | rezistor 220 Ω |
| LED RGB — **Comun** | GND | catod comun |
| **Potențiometru** | **A0** | capete la 5V și GND |
| **Buton de mod** | **2** | picior diagonal la GND |
| **Buton de sonerie** | **4** | picior diagonal la GND |
| **Piezo** | **8** | celălalt picior la GND |

**Gata când:**  
- [ ] Toate firele sunt conectate exact ca în tabel  
- [ ] Am verificat de două ori GND și 5V înainte să pornesc simularea  

### 3) Schema modurilor

| Mod | Ce face lampa |
|-----|---------------|
| **0** | **Lampa mea** (lecția 5): lumină albă, luminozitate cu potențiometrul |
| **1** | **Lampa mea colorată** (lecția 6): culoare aleasă cu **un singur** potențiometru (în lecția 6 aveai trei), de la roșu la albastru |
| **2** | **Soneria mea** (lecția 7): al doilea buton sună ding-dong, iar lampa se face verde cât sună |
| **3** (Complet) | Petrecere: culori aleatorii |

Fiecare apăsare pe **butonul de mod** trece la **modul următor**; după ultimul, revii la 0.

### 4) Minim — 3 moduri

```cpp
const int R = 9;
const int G = 10;
const int B = 6;
const int POT = A0;
const int BUTON = 2;
const int BUTON_SONERIE = 4;
const int BUZZER = 8;

int mod = 0;

void culoare(int r, int g, int b) {
  analogWrite(R, r);
  analogWrite(G, g);
  analogWrite(B, b);
}

void dingDong() {
  culoare(0, 255, 0);
  tone(BUZZER, 659);
  delay(400);
  tone(BUZZER, 523);
  delay(600);
  noTone(BUZZER);
  culoare(0, 0, 0);
}

void setup() {
  pinMode(R, OUTPUT);
  pinMode(G, OUTPUT);
  pinMode(B, OUTPUT);
  pinMode(BUTON, INPUT_PULLUP);
  pinMode(BUTON_SONERIE, INPUT_PULLUP);
  pinMode(BUZZER, OUTPUT);
}

void loop() {
  if (digitalRead(BUTON) == LOW) {
    mod = (mod + 1) % 3;
    delay(300);
  }

  int p = analogRead(POT);

  switch (mod) {
    case 0: {
      int luminozitate = map(p, 0, 1023, 0, 255);
      culoare(luminozitate, luminozitate, luminozitate);
      break;
    }
    case 1: {
      int r = map(p, 0, 1023, 255, 0);
      int b = map(p, 0, 1023, 0, 255);
      culoare(r, 0, b);
      break;
    }
    case 2:
      if (digitalRead(BUTON_SONERIE) == LOW) {
        dingDong();
      } else {
        culoare(0, 0, 0);
      }
      break;
  }
}
```

**Ce e nou**

- `mod = (mod + 1) % 3;` — `%` e **restul împărțirii**. Din 0 → 1 → 2 → 0 → … mereu înapoi la 0.  
- `dingDong()` e soneria din lecția 7, pusă într-o **funcție** ca s-o chemi când vrei.  
- `switch (mod) { case 0: ... }` alege **un singur bloc** în funcție de valoare. Mai curat decât mai multe `if`.  
- Fiecare `case` se termină cu `break`.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Cele trei moduri merg: lampa, lampa colorată, soneria  

### 5) Complet — petrecere și bip
Adaugi un al patrulea mod, petrecerea, și un **bip** la fiecare schimbare de mod.

```cpp
const int R = 9;
const int G = 10;
const int B = 6;
const int POT = A0;
const int BUTON = 2;
const int BUTON_SONERIE = 4;
const int BUZZER = 8;
const int NR_MODURI = 4;

int mod = 0;

void culoare(int r, int g, int b) {
  analogWrite(R, r);
  analogWrite(G, g);
  analogWrite(B, b);
}

void bip(int ori) {
  for (int i = 0; i < ori; i++) {
    tone(BUZZER, 880, 80);
    delay(150);
  }
}

void dingDong() {
  culoare(0, 255, 0);
  tone(BUZZER, 659);
  delay(400);
  tone(BUZZER, 523);
  delay(600);
  noTone(BUZZER);
  culoare(0, 0, 0);
}

void setup() {
  pinMode(R, OUTPUT);
  pinMode(G, OUTPUT);
  pinMode(B, OUTPUT);
  pinMode(BUTON, INPUT_PULLUP);
  pinMode(BUTON_SONERIE, INPUT_PULLUP);
  pinMode(BUZZER, OUTPUT);
  randomSeed(analogRead(A1));
}

void loop() {
  if (digitalRead(BUTON) == LOW) {
    mod = (mod + 1) % NR_MODURI;
    bip(mod + 1);          // 1 bip pentru modul 0, 2 pentru 1, etc.
    delay(200);
  }

  int p = analogRead(POT);

  switch (mod) {
    case 0: {
      int luminozitate = map(p, 0, 1023, 0, 255);
      culoare(luminozitate, luminozitate, luminozitate);
      break;
    }
    case 1: {
      int r = map(p, 0, 1023, 255, 0);
      int b = map(p, 0, 1023, 0, 255);
      culoare(r, 0, b);
      break;
    }
    case 2:
      if (digitalRead(BUTON_SONERIE) == LOW) {
        dingDong();
      } else {
        culoare(0, 0, 0);
      }
      break;
    case 3:
      culoare(random(256), random(256), random(256));
      delay(map(p, 0, 1023, 60, 600));   // viteza petrecerii
      break;
  }
}
```

La modul 3, potențiometrul reglează **cât de repede** se schimbă culorile.

**Gata când:**  
- [ ] Codul complet se compilează fără erori  
- [ ] Simularea face tot ce scrie în „Complet”  

### 6) Prezentare (2 minute)
Spune colegilor:
1. Ce face panoul tău (câte moduri are).  
2. Din ce lecții vine fiecare mod.  
3. Ce lecție din modul a fost cea mai grea și cum ai rezolvat-o.

---

## Greșeli frecvente
1. **Modul sare prea repede** — lipsește `delay` după apăsarea butonului.  
2. **Eroare în `switch`** — un `case` cu variabile noi are nevoie de acolade `{ }`.  
3. **Lampa e mereu aceeași** — ai uitat `break` între cazuri.  
4. **Soneria nu sună** — ești în alt mod; soneria merge doar în modul 2.  
5. **Culoarea la petrecere nu se schimbă** — lipsește `randomSeed` sau `delay` mare.  
6. **Pinul 11 cu `tone`** — am evitat 3 și 11 tocmai din acest motiv; nu muta albastrul pe 11.

---

## De făcut azi — „Panoul meu”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | 3 moduri cu `switch`: lampa, lampa colorată, soneria |
| **Complet** | Minim + mod „petrecere” + bip + prezentare |

### Pasul 1 — Minim
- [ ] Circuit complet (RGB, potențiometru, două butoane, buzzer)  
- [ ] Funcția `culoare`  
- [ ] `switch` cu 3 cazuri: lampa, lampa colorată, soneria  

### Pasul 2 — Complet
- [ ] Al patrulea mod: petrecere  
- [ ] Buzzer cu bip diferit pentru fiecare mod  
- [ ] Prezentare de 2 minute  
- [ ] Numele `A1_L10` e corect

---

## Bonus ★★★ — Provocare: Moduri noi
*Doar dacă ai terminat Complet.*

Panoul tău primește două moduri în plus.

- [ ] Un al cincilea mod: **respirație** (alb care crește și scade)
- [ ] Un al șaselea mod: **semafor** (roșu, galben, verde, pe rând)

## Verificare finală — Modulul 1
1. Ce face `pinMode(8, OUTPUT)`?  
2. Ce înseamnă `INPUT_PULLUP`?  
3. Care pini permit `analogWrite`?  
4. Ce face `map(x, 0, 1023, 0, 255)`?  
5. Ce e un tablou (`array`)?

## Recapitulare pe scurt
1. Un proiect = mai multe piese care lucrează împreună  
2. Poți aduna proiecte mai vechi ca moduri într-un singur program  
3. `switch` alege între moduri  
4. `%` păstrează un număr în interval  
5. Funcțiile (`culoare`, `bip`) fac codul ușor de citit

## Pe placa reală *(opțional)*
Același cod. Poți monta totul pe o foaie de carton ca panou de control adevărat.

## Quiz final al modulului
Alege **un** mod din panoul tău, adică una dintre lecțiile 5, 6 sau 7, și explică-l unui coleg în 1 minut.

## Temă
Desenează panoul tău ideal pentru camera ta: ce proiecte din modul ar intra în el ca moduri și ce piese ar folosi.

---

## Ce urmează — Modulul 2: Senzori
În **Modulul 2 — Senzori** citești lumina, temperatura și distanța.
