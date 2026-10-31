# LECȚIA 2 — Fișa de jucător
**Modulul 1 · Primii pași în Python · 2 ore**  
**Code Maker Club · Python Starter**

> Azi înveți cum face un program să **țină minte** lucruri: numere, nume, scoruri. Folosim **variabile**, adică cutii cu etichetă.  
> Proiect: **„Fișa de jucător”** · fișier: `Prenume_Nume_P1_L2.py`

---

## Ce facem azi
La finalul orei știi să creezi o variabilă cu `=`, să o afișezi, să îi schimbi valoarea, să calculezi cu ea și să alegi nume bune pentru variabile. Într-un joc, scorul se schimbă tot timpul. Programul trebuie să îl țină undeva. Locul acela este o **variabilă**. Fără variabile, nu ai jocuri, aplicații sau calculatoare.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare L1 · ce este o variabilă |
| 15–40 | Creăm și afișăm variabile (**Exemplele 1–3**) |
| 40–70 | Calcule cu variabile, `scor = scor + 1` (**Exemplele 4–5**) |
| 70–90 | Schimbăm valori, copii, nume bune (**Exemplele 6–7**) |
| 90–112 | Mini-proiect (**Exemplul 8**) |
| 112–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `nume = "Ana"` | Creează o variabilă, adică o cutie cu nume | `scor = 0` |
| `scor = scor + 1` | Schimbă valoarea, folosind-o și pe cea veche | `puncte += 10` |
| `print(nume, scor)` | Afișează valoarea variabilei, fără ghilimele | `print("Scor:", scor)` |
| nume bune | Litere mici, `_` între cuvinte, fără spații și fără cifră la început | `nr_vieti` |

---

## 1. Recapitulare rapidă din L1

Din lecția trecută știi:
- `print("text")` afișează text, iar `print(2 + 3)` afișează rezultatul calculului;
- `#` începe un comentariu;
- programul merge de sus în jos.

**Încearcă tu (3 min)**  
- [ ] Scrie un program care afișează numele tău și rezultatul lui `8 * 7`  
- [ ] Rulează-l fără să te uiți în lecția trecută  

---

## 2. Ce este o variabilă?

Imaginează-ți o **cutie** cu o **etichetă**. Pe etichetă scrie un nume (de exemplu `scor`), iar în cutie pui o valoare (de exemplu `0`). Oricând întrebi programul „cât e `scor`?”, el se uită în cutie și îți spune.

Pentru a pune ceva în cutie folosim semnul `=`, care în Python înseamnă **„pune în cutie”** (nu „este egal cu” ca la matematică).

### Exemplul 1 — Prima variabilă

```python
nume = "Ana"
print(nume)
```

**Ieșire:**
```text
Ana
```

- `nume` este numele cutiei (variabilei).
- `"Ana"` este valoarea pusă în ea.
- `print(nume)` afișează **ce este în cutie**. Nu are ghilimele, pentru că nu vrem cuvântul „nume”, ci ce e în cutia `nume`.

### Exemplul 2 — Variabilă număr

```python
varsta = 10
print("Am", varsta, "ani")
```

**Ieșire:**
```text
Am 10 ani
```

Numărul se pune **fără** ghilimele. Variabila se folosește în `print` ca orice altă valoare.

### Exemplul 3 — Schimbăm valoarea

```python
scor = 0
print(scor)
scor = 5
print(scor)
scor = 100
print(scor)
```

**Ieșire:**
```text
0
5
100
```

Când pui o valoare nouă în cutie, **cea veche dispare**. De aceea ele se numesc „variabile”: valoarea lor poate **varia** (se poate schimba).

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 1** (Prima variabilă)  
- [ ] Am scris și am rulat **Exemplul 2** (Variabilă număr)  
- [ ] Am scris și am rulat **Exemplul 3** (Schimbăm valoarea)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 3. Calcule cu variabile

### Exemplul 4 — Aria unui dreptunghi

```python
lungime = 5
latime = 3
aria = lungime * latime
perimetrul = 2 * (lungime + latime)
print("Aria este", aria)
print("Perimetrul este", perimetrul)
```

**Ieșire:**
```text
Aria este 15
Perimetrul este 16
```

Python calculează partea din dreapta a lui `=` și pune **rezultatul** în variabila din stânga. Dacă schimbi `lungime` sau `latime` la început, tot restul se recalculează singur.

### Exemplul 5 — Creștem un scor

```python
scor = 10
scor = scor + 5
print(scor)
scor = scor + 1
print(scor)
```

**Ieșire:**
```text
15
16
```

`scor = scor + 5` se citește așa: „ia ce e în `scor`, adaugă 5 și pune rezultatul **înapoi** în `scor`”. Este linia cea mai folosită în jocuri.

Există și o scriere mai scurtă:

```python
scor = 10
scor += 5
scor -= 2
print(scor)
```

**Ieșire:**
```text
13
```

`+=` adaugă, `-=` scade. Sunt prescurtări pentru `scor = scor + 5` și `scor = scor - 2`.


**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 4** (Aria unui dreptunghi)  
- [ ] Am scris și am rulat **Exemplul 5** (Creștem un scor)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 4. Schimbăm între ele, nume bune

### Exemplul 6 — Schimbăm conținutul a două cutii

```python
a = 1
b = 2
print("Inainte:", a, b)

ajutor = a
a = b
b = ajutor
print("Dupa:", a, b)
```

**Ieșire:**
```text
Inainte: 1 2
Dupa: 2 1
```

Ca să schimbi conținutul a două pahare (apă și suc), ai nevoie de un al treilea pahar. Aici, cutia `ajutor` ține minte valoarea lui `a` cât timp o schimbăm.

Python are și o scriere scurtă pentru același lucru:

```python
a = 1
b = 2
a, b = b, a
print(a, b)
```

**Ieșire:**
```text
2 1
```

### Cum alegem numele variabilelor

Regulile **obligatorii**:

| Regulă | Corect | Greșit |
|--------|--------|--------|
| Fără spații (folosește `_`) | `numar_vieti` | `numar vieti` |
| Nu începe cu cifră | `jucator1` | `1jucator` |
| Doar litere, cifre și `_` | `scor_final` | `scor-final`, `scor$` |
| Literele mari și mici sunt **diferite** | `scor` și `Scor` sunt două variabile | |

Sfaturile **bune**:
- Alege un nume care spune **ce ține** variabila: `scor`, `viteza`, `nume_jucator`.
- Scrie cu litere mici și `_` între cuvinte: `numar_de_vieti`.
- Evită nume de o literă (`x`, `y`) dacă nu sunt coordonate sau valori matematice.

### Exemplul 7 — Literele mari și mici contează

```python
scor = 5
print(scor)
```

**Ieșire:**
```text
5
```

Dacă ai scrie `print(Scor)` cu S mare, Python ar da o eroare `NameError`, pentru că `Scor` nu există. Variabila se numește `scor`.


**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 6** (Schimbăm conținutul a două cutii)  
- [ ] Am scris și am rulat **Exemplul 7** (Literele mari și mici contează)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 5. Mini-proiect

### Exemplul 8 — Fișa de jucător

```python
# Fisa de jucator
nume = "Alex"
nivel = 1
puncte = 0
vieti = 3

print("=" * 20)
print("Jucator:", nume)
print("Nivel:", nivel)
print("Puncte:", puncte)
print("Vieti:", vieti)

# Alex termina un nivel
puncte = puncte + 50
nivel = nivel + 1
vieti -= 1

print("=" * 20)
print("Dupa nivelul 1:")
print("Nivel:", nivel)
print("Puncte:", puncte)
print("Vieti:", vieti)
print("=" * 20)
```

**Ieșire:**
```text
====================
Jucator: Alex
Nivel: 1
Puncte: 0
Vieti: 3
====================
Dupa nivelul 1:
Nivel: 2
Puncte: 50
Vieti: 2
====================
```

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 8** (Fișa de jucător)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## De făcut azi — „Fișa de jucător”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Un program cu 3 variabile (nume, vârstă, scor) afișate cu `print` |
| **Complet** | Minim + scorul se modifică în program, un calcul cu variabile și numele alese după regulile corecte |

### Pasul 1 — Minim
- [ ] Un program cu 3 variabile (nume, vârstă, scor) afișate cu `print`  

### Pasul 2 — Complet
Scrie un program care:
1. creează variabilele `nume`, `nivel`, `puncte`, `vieti` (cu valorile tale);
2. afișează fișa într-un chenar;
3. modifică `puncte` și `vieti` ca și cum jucătorul ar fi trecut un nivel;
4. afișează fișa din nou.

**Gata când:**  
- [ ] Programul rulează fără erori  
- [ ] Are cel puțin 4 variabile cu nume corecte  
- [ ] Valorile se modifică în program  
- [ ] Fișa se afișează de două ori  
- [ ] Fișierul se numește `Prenume_Nume_P1_L2.py`  

---

## Bonus ★★★ — Provocare: Cutiile magice
*Doar dacă ai terminat Complet.*

- [ ] Scrie un program cu variabilele `a` și `b` și afișează suma, diferența și produsul lor  
- [ ] Schimbă valorile a trei variabile în cerc: `a`→`b`→`c`→`a`  
- [ ] Fă o fișă pentru un monstru de joc (nume, viață, atac, apărare) și afișează-o  

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| `NameError: name 'scor' is not defined` | Ai folosit variabila înainte să o creezi (sau ai scris-o altfel) | Creează `scor = 0` mai întâi, verifică literele |
| `SyntaxError: invalid syntax` la `mele puncte = 5` | Spațiu în numele variabilei | `mele_puncte = 5` |
| `SyntaxError` la `2nume = "Ana"` | Numele începe cu cifră | `nume2 = "Ana"` |
| Afișează `nume` în loc de `Ana` | Ai pus ghilimele în jurul variabilei | `print(nume)` fără ghilimele |
| `scor + 1` nu schimbă scorul | Nu ai pus rezultatul înapoi în variabilă | `scor = scor + 1` |
| `=` folosit ca la matematică | `10 = x` nu are sens în Python | Variabila e în **stânga**: `x = 10` |

---

## Recapitulare pe scurt

- O **variabilă** este o cutie cu nume în care păstrezi o valoare.
- `=` înseamnă „pune în cutie”. Variabila este mereu în **stânga**.
- Valoarea se poate schimba oricând. Cea veche dispare.
- `scor = scor + 1` crește scorul cu 1; `+=` și `-=` sunt prescurtări.
- `b = a` copiază valoarea, cutiile rămân separate.
- Nume bune: litere mici, `_` între cuvinte, fără spații, fără cifră la început.
- `scor` și `Scor` sunt variabile **diferite**.

---

## Quiz scurt
- Ce este o variabilă?  
- Ce face `scor = scor + 1`?  
- Dacă `a = 5` și `b = a`, apoi `a = 9`, cât este `b`?  
- Dă un exemplu de nume bun și unul greșit pentru o variabilă.  
- Sunt `scor` și `Scor` aceeași variabilă?  

---

## Temă
1. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).
2. Creează o **fișă pentru animalul tău preferat** (nume, vârstă, greutate, culoare) și afișeaz-o.  
3. Scrie un program care calculează **câți bani strângi** în 4 săptămâni, dacă primești o sumă fixă pe săptămână (variabile + calcul).  
4. Salvează totul ca `Tema_P1_L2_Prenume_Nume.py`.

### Exemple pentru acasă
Două exemple în plus, de rulat și de înțeles singur.

#### Acasă 1 — Copiem valoarea unei variabile

```python
a = 7
b = a
a = 100
print(a, b)
```

**Ieșire:**
```text
100 7
```

`b = a` pune în `b` o **copie** a valorii din `a`. După aceea, cele două cutii sunt independente: dacă schimbi `a`, `b` rămâne cu `7`.

#### Acasă 2 — Mai multe variabile deodată

```python
x = y = 0
a, b, c = 1, 2, 3
print(x, y)
print(a, b, c)
```

**Ieșire:**
```text
0 0
1 2 3
```

- `x = y = 0` pune `0` în ambele cutii.
- `a, b, c = 1, 2, 3` pune câte o valoare în fiecare cutie, în ordine.

### Încă două exerciții

**Ce afișează?** Gândește-te și scrie pe foaie ce afișează programul, apoi rulează-l ca să verifici:

```python
x = 5
y = x * 2
x = 1
print(x, y)
z = x + y
z += 4
print(z)
```

**Găsește greșelile.** Programul are 4 greșeli. Rescrie-l corect și explică fiecare corecție:

```text
2nume = "Ana"
varsta = 10
print(Varsta)
mele puncte = 5
print("Salut" nume)
```

---

## Ce urmează — Lecția 3
Aflăm ce fel de lucruri pot ține variabilele: **numere întregi, numere cu virgulă, text** și cum le transformăm unele în altele.
