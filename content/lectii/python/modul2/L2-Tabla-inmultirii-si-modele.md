# LECȚIA 2 — Atelierul de modele
### Bucle imbricate: tabla înmulțirii și modele
**Modulul 2 · Repetăm, colecționăm, organizăm · 2 ore**  
**Code Maker Club · Python Builder**

> Azi duci bucla `for` la nivelul următor: pui o buclă **în interiorul altei bucle**. Așa desenezi tabla înmulțirii, pătrate, triunghiuri și piramide din caractere.  
> Proiect: **„Atelierul de modele”** · fișier: `Prenume_Nume_P2_L2.py`

---

## Ce facem azi
La finalul orei folosești bucle `for` una în alta (bucle **imbricate**), formatezi numerele în coloane cu `:3` și construiești modele din `*` și cifre. Ecranul unui joc este făcut din rânduri și coloane de puncte (pixeli). Ca să le parcurgi pe toate, ai nevoie de două bucle: una pentru rânduri, una pentru coloane. Aceeași idee stă și în spatele tabelelor, hărților și imaginilor.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare L1 |
| 10–30 | Tabla înmulțirii (**Exemplele 1–2**) |
| 30–60 | Bucle imbricate și tabla completă (**Exemplul 3**) |
| 60–90 | Triunghi, piramidă (**Exemplele 4–5**) |
| 90–105 | Numere pare și medie (**Exemplele 6–7**) |
| 105–118 | Mini-proiect (**Exemplul 8**) |
| 118–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `for i ...:` cu `for j ...:` înăuntru | Bucla din interior rulează complet la fiecare pas al celei de afară | rânduri și coloane |
| `print()` | Trece pe rândul următor, după bucla interioară | `print()` |
| `f"{x:3}"` | Pune numărul într-o coloană lată de 3 caractere | `print(f"{i * j:3}", end="")` |
| `"*" * n` | Repetă un text de `n` ori | `"*" * 5` |
| `" " * n` | Pune `n` spații, ca să centrezi o piramidă | `" " * 3` |

---

## 1. Recapitulare rapidă din L1

- `for i in range(n):` repetă de `n` ori, cu `i = 0 ... n-1`.
- `range(a, b, pas)` merge din `pas` în `pas`.
- `print(x, end=" ")` afișează pe același rând.

**Încearcă tu (3 min)**  
- [ ] Afișează numerele de la 10 la 1 pe același rând  

---

## 2. Tabla înmulțirii

### Exemplul 1 — Tabla lui 7

```python
for i in range(1, 11):
    print(f"7 x {i} = {7 * i}")
```

**Ieșire:**
```text
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
```

### Exemplul 2 — Tabla numărului ales

```python
n = int(input("Care tabla? "))
for i in range(1, 11):
    print(f"{n} x {i} = {n * i}")
```

**Ieșire:**
```text
Care tabla? 6
6 x 1 = 6
6 x 2 = 12
6 x 3 = 18
6 x 4 = 24
6 x 5 = 30
6 x 6 = 36
6 x 7 = 42
6 x 8 = 48
6 x 9 = 54
6 x 10 = 60
```

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 1** (Tabla lui 7)  
- [ ] Am scris și am rulat **Exemplul 2** (Tabla numărului ales)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 3. Bucle imbricate

Ca la un ceas: acul **orelor** (bucla de afară) merge încet, iar acul **minutelor** (bucla din interior) face un tur complet pentru **fiecare** oră.

### Exemplul 3 — Tabla de înmulțire completă

```python
for i in range(1, 6):
    for j in range(1, 6):
        print(f"{i * j:3}", end="")
    print()
```

**Ieșire:**
```text
  1  2  3  4  5
  2  4  6  8 10
  3  6  9 12 15
  4  8 12 16 20
  5 10 15 20 25
```

Cum funcționează:
- Bucla de **afară** (`i`) alege rândul.
- Bucla din **interior** (`j`) parcurge **toate coloanele** acelui rând.
- `{i * j:3}` afișează numărul pe o lățime de **3 caractere**, ca să iasă frumos aliniat.
- `print()` de după bucla interioară (la **același nivel** cu `for j`) trece pe rândul următor, după ce rândul a fost scris.

Dacă bucla de afară face 5 pași și cea din interior tot 5, linia `print(...)` se execută de `5 × 5 = 25` de ori.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 3** (Tabla de înmulțire completă)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 4. Modele din caractere

### Exemplul 4 — Triunghiul

```python
for i in range(1, 6):
    print("*" * i)
```

**Ieșire:**
```text
*
**
***
****
*****
```

Aici nu avem nevoie de bucle imbricate: ne ajută faptul că un text se poate **înmulți** (`"*" * 3` este `***`).

### Exemplul 5 — Piramida

```python
inaltime = 5
for i in range(1, inaltime + 1):
    spatii = " " * (inaltime - i)
    stele = "*" * (2 * i - 1)
    print(spatii + stele)
```

**Ieșire:**
```text
    *
   ***
  *****
 *******
*********
```

Pe rândul `i` avem `inaltime - i` spații și `2 * i - 1` stele. Verifică: pe rândul 1 → 4 spații și 1 stea; pe rândul 5 → 0 spații și 9 stele.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 4** (Triunghiul)  
- [ ] Am scris și am rulat **Exemplul 5** (Piramida)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 5. Mai multe modele

### Exemplul 6 — Numerele pare

```python
for n in range(2, 21, 2):
    print(n, end=" ")
print()
```

**Ieșire:**
```text
2 4 6 8 10 12 14 16 18 20
```

### Exemplul 7 — Suma și media a 3 numere

```python
total = 0
for i in range(3):
    numar = int(input(f"Numarul {i + 1}: "))
    total += numar
print("Suma:", total)
print("Media:", total / 3)
```

**Ieșire:**
```text
Numarul 1: 4
Numarul 2: 8
Numarul 3: 6
Suma: 18
Media: 6.0
```

Aici bucla **citește** numerele, nu doar le afișează. Așa nu scrii de 3 ori aceeași linie.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 6** (Numerele pare)  
- [ ] Am scris și am rulat **Exemplul 7** (Suma și media a 3 numere)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 6. Mini-proiect

### Exemplul 8 — Atelierul de modele

```python
n = int(input("Alege un numar (2-9): "))

print(f"\nTabla lui {n}:")
for i in range(1, 11):
    print(f"{n} x {i:2} = {n * i:3}")

print("\nTriunghi:")
for i in range(1, n + 1):
    print("*" * i)

print("\nPiramida de cifre:")
for i in range(1, n + 1):
    print(" " * (n - i) + str(i) * i)
```

**Ieșire:**
```text
Alege un numar (2-9): 5

Tabla lui 5:
5 x  1 =   5
5 x  2 =  10
5 x  3 =  15
5 x  4 =  20
5 x  5 =  25
5 x  6 =  30
5 x  7 =  35
5 x  8 =  40
5 x  9 =  45
5 x 10 =  50

Triunghi:
*
**
***
****
*****

Piramida de cifre:
    1
   22
  333
 4444
55555
```

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 8** (Atelierul de modele)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## De făcut azi — „Atelierul de modele”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Tabla înmulțirii cu un număr ales și un triunghi de `*` |
| **Complet** | Minim + o piramidă, pentru un `n` citit între 2 și 9 |

### Pasul 1 — Minim
- [ ] Tabla înmulțirii cu un număr ales și un triunghi de `*`  

### Pasul 2 — Complet
Scrie un program care:
1. citește un număr `n` între 2 și 9;
2. afișează **tabla înmulțirii** lui `n` de la 1 la 10;
3. afișează un **triunghi** cu `n` rânduri;
4. afișează **o piramidă** (de `*` sau de cifre) cu `n` rânduri.

**Gata când:**
- [ ] Programul afișează tabla lui `n`  
- [ ] Triunghiul și piramida au `n` rânduri  
- [ ] Funcționează pentru cel puțin 3 valori diferite ale lui `n`  
- [ ] Fișierul se numește `Prenume_Nume_P2_L2.py`  

---

## Bonus ★★★ — Provocare: Tabla de șah și rombul
*Doar dacă ai terminat Complet.*

- [ ] Afișează **tabla înmulțirii 1–9** completă, frumos aliniată  
- [ ] Desenează un **romb** din `*`  
- [ ] Afișează o **tablă de șah** de 8×8 cu `#` și `.` alternate  
- [ ] Afișează un triunghi **inversat** (de la 5 stele la 1)  

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| Toate numerele apar pe un singur rând lung | Ai uitat `print()` după bucla interioară | `print()` la nivelul lui `for j` |
| Modelul apare strâmb | `print()` e în interiorul buclei interioare | Mută-l un nivel la stânga |
| Prea multe sau prea puține rânduri | `range` se oprește înainte de al doilea număr | `range(1, n + 1)` pentru `n` rânduri |
| `IndentationError` | Indentarea nu crește cu fiecare buclă | Fiecare buclă interioară are încă 4 spații |
| `TypeError: can't multiply sequence by non-int` | Ai înmulțit text cu text | `"*" * i`, cu `i` număr |
| Coloanele nu sunt aliniate | Numerele au lungimi diferite | Folosește `{x:3}` pentru lățime fixă |

---

## Recapitulare pe scurt

- **Bucle imbricate**: o buclă în interiorul altei bucle. Cea din interior se repetă complet pentru fiecare pas al celei de afară.
- Rânduri = bucla de afară, coloane = bucla din interior.
- `print()` după bucla interioară trece la rândul următor.
- `{x:3}` afișează `x` pe 3 caractere.
- `"*" * i` repetă un text, deci construiește rânduri dintr-un singur `print`.
- Piramidă: `" " * (n - i) + "*" * (2 * i - 1)`.

---

## Quiz scurt
- Ce este o buclă imbricată?  
- La un tabel, ce reprezintă bucla de afară și ce bucla din interior?  
- De ce punem un `print()` gol după bucla interioară?  
- Ce face `{x:3}` într-un f-string?  
- Ce afișează `"*" * 4`?  

---

## Temă
1. Refă **Exemplele 1–8** în Thonny, scrise de mână.  
2. Afișează **tablele de înmulțire de la 2 la 5**, fiecare cu titlu.  
3. Desenează o **casă** din caractere: triunghiul acoperișului și dreptunghiul pereților, cu bucle.  
4. **Bonus:** afișează un model „scară” cu numere: rândul `i` conține numerele de la `1` la `i`.  
5. **Dreptunghiul tău.** Citește **numărul de rânduri** și **numărul de coloane** și desenează un dreptunghi plin din `#`.
6. Salvează totul ca `Tema_P2_L2_Prenume_Nume.py`.

### Exemple pentru acasă
Aceste exemple folosesc exact ce ai învățat azi. Scrie-le în Thonny, rulează-le și schimbă-le după preferințe.

#### Acasă 1 — Dreptunghiul de `#`

```python
for rand in range(3):
    for col in range(8):
        print("#", end="")
    print()
```

**Ieșire:**
```text
########
########
########
```

#### Acasă 2 — Cifre repetate

```python
for i in range(1, 6):
    print(str(i) * i)
```

**Ieșire:**
```text
1
22
333
4444
55555
```

`str(i)` transformă numărul în text, iar `* i` îl repetă de `i` ori.

### Încă două exerciții

**Ce afișează?** Gândește-te, apoi verifică în Thonny:

```python
for i in range(1, 4):
    for j in range(1, 3):
        print(i, j)
for i in range(3):
    print("-" * (i + 1))
```

**Găsește greșelile.** Programul are 4 greșeli. Rescrie-l corect și explică fiecare corecție:

```text
for i in range(1, 6)
    for j in range(1, 6):
    print(i * j, end=" ")
print()
for i in range(1, 5):
    print("*" * i
print("Piramida:" * "-")
```

---

## Răspunsuri la bonus

*Uită-te aici doar după ce ai încercat singur. Există mai multe soluții bune; a ta poate arăta diferit.*

### 1. Tabla înmulțirii 1–9

```python
for i in range(1, 10):
    for j in range(1, 10):
        print(f"{i * j:3}", end="")
    print()
```

**Ieșire:**
```text
  1  2  3  4  5  6  7  8  9
  2  4  6  8 10 12 14 16 18
  3  6  9 12 15 18 21 24 27
  4  8 12 16 20 24 28 32 36
  5 10 15 20 25 30 35 40 45
  6 12 18 24 30 36 42 48 54
  7 14 21 28 35 42 49 56 63
  8 16 24 32 40 48 56 64 72
  9 18 27 36 45 54 63 72 81
```

### 2. Rombul

```python
n = 4
for i in range(1, n + 1):
    print(" " * (n - i) + "*" * (2 * i - 1))
for i in range(n - 1, 0, -1):
    print(" " * (n - i) + "*" * (2 * i - 1))
```

**Ieșire:**
```text
   *
  ***
 *****
*******
 *****
  ***
   *
```

### 3. Tabla de șah 8×8

```python
for rand in range(8):
    for col in range(8):
        if (rand + col) % 2 == 0:
            print("#", end="")
        else:
            print(".", end="")
    print()
```

**Ieșire:**
```text
#.#.#.#.
.#.#.#.#
#.#.#.#.
.#.#.#.#
#.#.#.#.
.#.#.#.#
#.#.#.#.
.#.#.#.#
```

### 4. Triunghiul inversat

```python
for i in range(5, 0, -1):
    print("*" * i)
```

**Ieșire:**
```text
*****
****
***
**
*
```

---
## Ce urmează — Lecția 3
Învățăm bucla `while`: repetăm **cât timp** o condiție este adevărată, chiar dacă nu știm de câte ori.
