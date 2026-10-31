# LECȚIA 2 — Bicicleta mea
**Modulul 1 · Primele circuite**  
**Code Maker Club · Circuit Starter**

> Azi folosești **două LED-uri**, **variabile** și **bucla `for`** ca să faci un semnalizator care arată direcția.  
> Proiect: **„Bicicleta mea”** · `Prenume_Nume_A1_L02`

---

## Ce facem azi
La finalul orei ai **două LED-uri** care clipesc pe rând (stânga / dreapta) și un program scris cu **nume clare**. Până acum ai comandat **un** pin. Acum comanzi **mai mulți** și înveți să dai **nume** lucrurilor (`const int`) și să **repeți** fără să copiezi (`for`).

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L1 · cum arată semnalizatoarele pe stradă |
| 10–30 | Circuitul cu 2 LED-uri |
| 30–60 | Alternare, apoi `const int` |
| 60–95 | `for` + semnal de virare + avarii |
| 95–120 | Recap, quiz, galerie |

**Componente azi:** Arduino Uno · Breadboard Small · 2 × LED (ex. galben + galben) · 2 × Resistor 220 Ω · fire

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `const int NUME = 8;` | Valoare cu nume, care nu se schimbă | `const int STANGA = 8;` |
| `for (int i = 0; i < 3; i++)` | Repetă de 3 ori | clipește de 3 ori |
| `void clipeste(int pin, int ori)` | Funcție cu parametri | aceeași funcție pentru ambele LED-uri |
| `clipeste(STANGA, 3);` | Cheamă funcția | clipește stânga de 3 ori |

---

## Pas cu pas

### 1) Circuit nou
1. **Create new Circuit**, nume: `Prenume_Nume_A1_L02`  
2. Pe breadboard pui **două LED-uri**, la distanță între ele

**Gata când:**  
- [ ] Proiectul nou are numele `Prenume_Nume_A1_L02`  

### 2) Conexiuni

| LED | Pin Arduino | Rezistor | GND |
|-----|-------------|----------|-----|
| **Stânga** | **8** | 220 Ω între pin și anod (+) | catod (−) la GND |
| **Dreapta** | **9** | 220 Ω între pin și anod (+) | catod (−) la GND |

Fiecare LED are **propriul** rezistor.

**Gata când:**  
- [ ] Toate firele sunt conectate exact ca în tabel  
- [ ] Am verificat de două ori GND și 5V înainte să pornesc simularea  

### 3) Alternare (Minim)

```cpp
const int STANGA = 8;
const int DREAPTA = 9;

void setup() {
  pinMode(STANGA, OUTPUT);
  pinMode(DREAPTA, OUTPUT);
}

void loop() {
  digitalWrite(STANGA, HIGH);
  digitalWrite(DREAPTA, LOW);
  delay(400);

  digitalWrite(STANGA, LOW);
  digitalWrite(DREAPTA, HIGH);
  delay(400);
}
```

**Ce e nou:** `const int STANGA = 8;` = o **valoare cu nume** care **nu se schimbă**. Dacă muți firul pe alt pin, schimbi **un singur rând**.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Simularea pornește și montajul face ce scrie în „Minim”  

### 4) Doar un LED clipește (virare dreapta)
Când virezi la dreapta, clipește **doar** LED-ul din dreapta. Folosim `for` ca să repetăm de 3 ori:

```cpp
const int STANGA = 8;
const int DREAPTA = 9;

void setup() {
  pinMode(STANGA, OUTPUT);
  pinMode(DREAPTA, OUTPUT);
}

void loop() {
  for (int i = 0; i < 3; i++) {
    digitalWrite(DREAPTA, HIGH);
    delay(300);
    digitalWrite(DREAPTA, LOW);
    delay(300);
  }
  delay(2000);
}
```

**Cum citești `for`:** `for (int i = 0; i < 3; i++)` = „începe cu `i` = 0, **cât timp** `i` e mai mic ca 3, repetă; după fiecare rundă crește `i` cu 1”. Rezultat: **3 repetări**.

### 5) Complet — virare stânga, virare dreapta, avarii
Punem fiecare semnal într-o **funcție**:

```cpp
const int STANGA = 8;
const int DREAPTA = 9;

void clipeste(int pin, int ori) {
  for (int i = 0; i < ori; i++) {
    digitalWrite(pin, HIGH);
    delay(300);
    digitalWrite(pin, LOW);
    delay(300);
  }
}

void avarii(int ori) {
  for (int i = 0; i < ori; i++) {
    digitalWrite(STANGA, HIGH);
    digitalWrite(DREAPTA, HIGH);
    delay(300);
    digitalWrite(STANGA, LOW);
    digitalWrite(DREAPTA, LOW);
    delay(300);
  }
}

void setup() {
  pinMode(STANGA, OUTPUT);
  pinMode(DREAPTA, OUTPUT);
}

void loop() {
  clipeste(STANGA, 3);
  delay(1500);
  clipeste(DREAPTA, 3);
  delay(1500);
  avarii(3);
  delay(2000);
}
```

`void clipeste(int pin, int ori)` primește **două informații**: ce pin și de câte ori. Așa folosești aceeași funcție pentru ambele LED-uri.

**Gata când:**  
- [ ] Codul complet se compilează fără erori  
- [ ] Simularea face tot ce scrie în „Complet”  

---

## Greșeli frecvente
1. **Ambele LED-uri clipesc odată** — ai folosit același pin sau ai uitat `LOW` pentru celălalt.  
2. **Un singur LED merge** — celălalt n-are fir pe GND sau e invers.  
3. **`for` nu se oprește** — ai scris `i--` în loc de `i++`.  
4. **Eroare „not declared”** — numele din cod nu e scris la fel peste tot (`STANGA` ≠ `stanga`).  
5. **O singură rezistență pentru două LED-uri** — fiecare LED își are rezistorul lui.

---

## De făcut azi — „Bicicleta mea”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | 2 LED-uri · alternare · `const int` |
| **Complet** | Minim + funcția `clipeste` + virare stânga / dreapta + avarii |

### Pasul 1 — Minim
- [ ] 2 LED-uri cu rezistoare, pe pinii 8 și 9  
- [ ] Alternare: când unul e aprins, celălalt e stins  
- [ ] `const int STANGA` și `DREAPTA`  

### Pasul 2 — Complet
- [ ] Funcția `clipeste(pin, ori)`  
- [ ] Virare stânga (3×), apoi dreapta (3×), apoi avarii  
- [ ] Numele proiectului `A1_L02` e corect

---

## Bonus ★★★ — Provocare: Frâna bicicletei
*Doar dacă ai terminat Complet.*

Bicicleta capătă lumină de frână.

- [ ] Un al treilea LED, pe pin 10, aprins **1 secundă** după fiecare semnal
- [ ] Clipirea mai rapidă: `300` devine `150`

## Recapitulare pe scurt
1. `const int NUME = pin;` = nume pentru un număr care nu se schimbă  
2. `for (int i = 0; i < N; i++)` = repetă de N ori  
3. O funcție cu parametri (`clipeste(pin, ori)`) se folosește de mai multe ori

## Pe placa reală *(opțional)*
Același cod. Pune LED-urile pe breadboard cu rezistoare de 220 Ω; atenție la piciorul lung (+).

## Quiz scurt
- Ce face `const` în fața unui `int`?  
- De câte ori rulează `for (int i = 0; i < 4; i++)`?  
- De ce folosim o funcție `clipeste` în loc să copiem codul?

## Temă
Desenează pe foaie bicicleta cu cele 2 LED-uri și scrie ce fac în fiecare semnal. Salvează circuitul final ca `A1_L02`.

---

## Ce urmează — Lecția 3
În **lecția 3** citești un buton și iei decizii cu `if` și `else`.
