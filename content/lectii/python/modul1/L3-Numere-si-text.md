# LECȚIA 3 — Fișa mea de tipuri
### Numere și text
**Modulul 1 · Primii pași în Python · 2 ore**  
**Code Maker Club · Python Starter**

> Variabilele pot ține **numere** și **text**, iar Python le tratează diferit. Azi înveți tipurile de date, cum lipești texte, cum le măsori și cum transformi un tip în altul.  
> Proiect: **„Fișa mea de tipuri”** · fișier: `Prenume_Nume_P1_L3.py`

---

## Ce facem azi
La finalul orei cunoști tipurile `int`, `float`, `str` și `bool`, folosești `type()` și `len()`, lipești texte cu `+` și transformi valorile cu `int()`, `float()` și `str()`. Un calculator nu se încurcă între „5 mere” și „5 + 5”. Dar un program trebuie să știe dacă un lucru este **număr** sau **text**: cu numere calculezi, cu texte scrii mesaje. Cele mai multe greșeli ale începătorilor vin din amestecarea lor.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare L2 |
| 10–35 | Tipurile de date și `type` (**Exemplul 1**) |
| 35–60 | Text: lipire și lungime (**Exemplele 2–3**) |
| 60–90 | Conversii între tipuri și eroarea clasică (**Exemplele 4–5**) |
| 90–105 | `bool` și text pe mai multe rânduri (**Exemplele 6–7**) |
| 105–118 | Mini-proiect (**Exemplul 8**) |
| 118–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `type(x)` | Arată tipul valorii | `type(5)` |
| `int()`, `float()`, `str()` | Transformă o valoare într-un alt tip | `int("5")` |
| `+` între texte | Lipește texte | `"Ana" + "Maria"` |
| `len(text)` | Numără câte caractere are un text | `len("Cod")` |
| `True` / `False` | Tipul `bool`: adevărat sau fals | `activ = True` |
| `"""text"""` | Text pe mai multe rânduri | trei ghilimele la început și la sfârșit |

---

## 1. Recapitulare rapidă din L2

- Variabila este o cutie cu nume: `scor = 0`.
- `=` înseamnă „pune în cutie”.
- `scor = scor + 1` crește valoarea.

**Încearcă tu (3 min)**  
- [ ] Creează variabilele `nume` și `varsta` și afișează-le într-o propoziție  

---

## 2. Tipuri de date

Fiecare valoare din Python are un **tip**. Cele patru tipuri de bază:

| Tip | Ce este | Exemple |
|-----|---------|---------|
| `int` | număr **întreg** | `7`, `-3`, `0`, `1000` |
| `float` | număr **cu virgulă** | `3.14`, `-0.5`, `2.0` |
| `str` | **text** (șir de caractere) | `"Ana"`, `'salut'`, `"123"` |
| `bool` | **adevărat / fals** | `True`, `False` |

### Exemplul 1 — Aflăm tipul cu `type()`

```python
print(type(5))
print(type(3.14))
print(type("Salut"))
print(type(True))
```

**Ieșire:**
```text
<class 'int'>
<class 'float'>
<class 'str'>
<class 'bool'>
```

`type(...)` îți spune ce tip are o valoare. Rezultatul arată `class` pentru că tipurile sunt „clase” în Python, dar tu citești doar cuvântul dintre ghilimele: `int`, `float`, `str`, `bool`.


**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 1** (Aflăm tipul cu `type()`)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 3. Lucrăm cu text

### Exemplul 2 — Lipim texte cu `+`

```python
prenume = "Ana"
nume = "Pop"
print(prenume + nume)
print(prenume + " " + nume)
print("Salut, " + prenume + "!")
```

**Ieșire:**
```text
AnaPop
Ana Pop
Salut, Ana!
```

`+` între două texte le **lipește**. Dacă vrei spațiu, trebuie să-l pui singur: `" "`.


### Exemplul 3 — Lungimea unui text

```python
cuvant = "Python"
print(len(cuvant))
print(len("Salut, lume!"))
print(len(""))
```

**Ieșire:**
```text
6
12
0
```

`len(...)` numără **caracterele** (litere, spații, semne). Un text gol `""` are lungimea 0.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 2** (Lipim texte cu `+`)  
- [ ] Am scris și am rulat **Exemplul 3** (Lungimea unui text)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 4. Transformăm tipurile

### Exemplul 4 — `int()`, `float()` și `str()`

```python
print(int("5") + 1)
print(float("2.5") * 2)
print(str(10) + " ani")
print(int(7.9))
```

**Ieșire:**
```text
6
5.0
10 ani
7
```

| Funcție | Ce face |
|---------|---------|
| `int(...)` | transformă în număr întreg (la un `float` **taie** zecimalele, nu rotunjește) |
| `float(...)` | transformă în număr cu virgulă |
| `str(...)` | transformă în text |

### Exemplul 5 — Eroarea clasică

Aceste linii **nu** merg:

```text
varsta = 10
print("Am " + varsta + " ani")
```

Python dă `TypeError`: nu poți lipi un **text** cu un **număr**. Cele două soluții:

```python
varsta = 10
print("Am " + str(varsta) + " ani")
print("Am", varsta, "ani")
```

**Ieșire:**
```text
Am 10 ani
Am 10 ani
```

- Prima soluție: transformi numărul în text cu `str(...)`.
- A doua: folosești virgula în `print`, care le afișează pe amândouă fără probleme.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 4** (`int()`, `float()` și `str()`)  
- [ ] Am scris și am rulat **Exemplul 5** (Eroarea clasică)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 5. Adevărat sau fals, text lung

### Exemplul 6 — `bool`

```python
print(5 > 3)
print(2 == 3)
print(10 != 4)
este_copil = True
print(este_copil)
```

**Ieșire:**
```text
True
False
True
True
```

| Semn | Înseamnă |
|------|----------|
| `>` | mai mare |
| `<` | mai mic |
| `==` | **egal** (două semne `=`!) |
| `!=` | **diferit** |

Rezultatul unei comparații este `True` (adevărat) sau `False` (fals). Le vei folosi mult în lecția despre `if`.

### Exemplul 7 — Text pe mai multe rânduri

```python
poezie = """Rosu e macul,
verde e frunza,
Python e distractiv,
si nu te lasa."""
print(poezie)
```

**Ieșire:**
```text
Rosu e macul,
verde e frunza,
Python e distractiv,
si nu te lasa.
```

Trei ghilimele la început și trei la sfârșit (`"""`) lasă textul să treacă pe mai multe rânduri, exact cum l-ai scris.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 6** (`bool`)  
- [ ] Am scris și am rulat **Exemplul 7** (Text pe mai multe rânduri)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 6. Mini-proiect

### Exemplul 8 — Fișa de tipuri

```python
# Fisa mea de tipuri
nume = "Maria"
varsta = 11
inaltime = 1.45
elev = True

print("Nume:", nume, "-> tip:", type(nume))
print("Varsta:", varsta, "-> tip:", type(varsta))
print("Inaltime:", inaltime, "-> tip:", type(inaltime))
print("Elev:", elev, "-> tip:", type(elev))

print("Numele are", len(nume), "litere")
print("Peste 5 ani voi avea " + str(varsta + 5) + " ani")
print("*" * 20)
```

**Ieșire:**
```text
Nume: Maria -> tip: <class 'str'>
Varsta: 11 -> tip: <class 'int'>
Inaltime: 1.45 -> tip: <class 'float'>
Elev: True -> tip: <class 'bool'>
Numele are 5 litere
Peste 5 ani voi avea 16 ani
********************
```

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 8** (Fișa de tipuri)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## De făcut azi — „Fișa mea de tipuri”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Un program care afișează tipul a 4 valori diferite și lipește două texte |
| **Complet** | Minim + conversii între tipuri, `len()` pe numele tău și un text pe mai multe rânduri |

### Pasul 1 — Minim
- [ ] Un program care afișează tipul a 4 valori diferite și lipește două texte  

### Pasul 2 — Complet
Scrie un program care:
1. creează 4 variabile: un text (numele tău), un întreg (vârsta), un număr cu virgulă (înălțimea) și un `bool`;
2. afișează fiecare valoare împreună cu **tipul** ei;
3. afișează câte litere are numele tău;
4. afișează câți ani vei avea peste 5 ani, folosind `str(...)` sau virgula;
5. afișează un mesaj pe mai multe rânduri, cu `"""`.

**Gata când:**  
- [ ] Programul rulează fără erori  
- [ ] Afișează tipul pentru cele 4 valori  
- [ ] Folosește `len()` și o conversie  
- [ ] Fișierul se numește `Prenume_Nume_P1_L3.py`  

---

## Bonus ★★★ — Provocare: Chenarul meu
*Doar dacă ai terminat Complet.*

- [ ] Afișează un chenar al cărui lățime este egală cu lungimea numelui tău (`"=" * len(nume)`)  
- [ ] Afișează un număr rotunjit la o zecimală, apoi la două  
- [ ] Lipește prenumele și numele într-o singură variabilă și afișează-i lungimea  

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| `TypeError: can only concatenate str (not "int") to str` | Ai lipit un text cu un număr | `"Am " + str(10)` sau virgulă în `print` |
| `10 / 2` afișează `5.0`, nu `5` | Împărțirea dă mereu `float` | Folosește `int(10 / 2)` dacă vrei întreg |
| `print("2" + "3")` afișează `23` | Sunt texte, deci se lipesc | `int("2") + int("3")` |
| `ValueError: invalid literal for int()` | `int("abc")` nu poate transforma litere în număr | Transformă doar texte care sunt numere |
| `1,40` dă rezultat ciudat | Virgula zecimală nu merge | `1.40` cu punct |
| `TypeError: object of type 'int' has no len()` | `len()` merge pe text, nu pe numere | `len(str(123))` |
| `true` sau `false` cu litere mici | `bool` se scrie cu majusculă | `True`, `False` |

---

## Recapitulare pe scurt

- Tipurile de bază: `int` (întreg), `float` (cu virgulă), `str` (text), `bool` (`True` / `False`).
- `type(x)` arată tipul lui `x`.
- Virgula zecimală este **punctul**: `2.5`.
- `+` lipește texte, `*` repetă text, `len()` numără caracterele.
- `int()`, `float()` și `str()` transformă valorile.
- Nu poți lipi un text cu un număr fără conversie.
- `==` compară (două semne `=`), `=` pune în cutie.
- `"""..."""` permite text pe mai multe rânduri.

---

## Quiz scurt
- Care sunt cele patru tipuri de bază din lecție?  
- Ce afișează `type(2.5)`?  
- Care e diferența dintre `=` și `==`?  
- Ce face `"ha" * 3`?  
- De ce nu poți scrie `"Am " + 10` fără conversie?  

---

## Temă
1. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).
2. Scrie un program care afișează **fișa unui animal** cu tipuri: nume (`str`), vârstă (`int`), greutate (`float`), vaccinat (`bool`).  
3. Calculează **media** a trei note (de exemplu 9, 10 și 8) și afișeaz-o rotunjită la o zecimală.  
4. Salvează totul ca `Tema_P1_L3_Prenume_Nume.py`.

### Exemple pentru acasă
Două exemple în plus, de rulat și de înțeles singur.

#### Acasă 1 — Numere întregi și cu virgulă

```python
a = 7
b = 2.5
print(a + b)
print(type(a + b))
print(round(3.14159, 2))
```

**Ieșire:**
```text
9.5
<class 'float'>
3.14
```

- Un `int` plus un `float` dă un `float`.
- Virgula zecimală se scrie cu **punct**: `2.5`, nu `2,5`.
- `round(număr, câte_zecimale)` rotunjește un număr.

> Atenție: `"123"` cu ghilimele este **text**, nu număr, chiar dacă arată ca un număr!

#### Acasă 2 — Repetăm text cu `*`

```python
print("ha" * 3)
print("-" * 15)
print("Python! " * 2)
```

**Ieșire:**
```text
hahaha
---------------
Python! Python! 
```

Un text înmulțit cu un număr se **repetă** de atâtea ori.

### Încă două exerciții

**Ce afișează?** Gândește-te, apoi verifică în Thonny:

```python
print("5" + "5")
print(5 + 5)
print("5" * 3)
print(int("5") * 3)
print(len("Cod"))
print(type(10 / 2))
```

**Găsește greșelile.** Programul are 4 greșeli. Rescrie-l corect și explică fiecare corecție:

```text
nume = "Ana"
varsta = 10
print("Ma numesc " + nume + " si am " + varsta + " ani")
inaltime = 1,40
print(len(varsta))
print(type nume)
```

---

## Ce urmează — Lecția 4
Învățăm `input()`: programul **te întreabă ceva**, tu răspunzi, iar el folosește răspunsul.
