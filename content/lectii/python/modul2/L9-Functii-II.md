# LECȚIA 9 — Calculatorul cu funcții
### Funcții II: programe organizate
**Modulul 2 · Repetăm, colecționăm, organizăm · 2 ore**  
**Code Maker Club · Python Builder**

> Funcțiile devin cu adevărat puternice când primesc **liste**, returnează **mai multe valori**, se apelează **între ele** și îți ajută să-ți organizezi tot programul. Azi construiești un program din piese mici.  
> Proiect: **„Calculatorul cu funcții”** · fișier: `Prenume_Nume_P2_L9.py`

---

## Ce facem azi
La finalul orei dai liste ca parametri, returnezi mai multe valori, apelezi funcții din alte funcții, folosești argumente cu nume și documentezi o funcție, validezi datele introduse și organizezi un program cu o funcție `main()`. Programele mari nu sunt scrise într-un singur bloc lung, ci din **piese mici**, fiecare cu un rol. Așa le poți testa pe rând, le poți reutiliza și le înțelegi mai ușor. Aceasta este arta de a „organiza” codul.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare L8 |
| 10–30 | Liste ca parametri (**Exemplul 1**) |
| 30–50 | Mai multe valori returnate (**Exemplul 2**) |
| 50–70 | Funcții care apelează funcții, argumente cu nume (**Exemplele 3–4**) |
| 70–100 | Documentare și validare (**Exemplele 5–6**) |
| 100–118 | `main()` și mini-proiect (**Exemplele 7–8**) |
| 118–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `def f(lista):` | Funcție care primește o listă | `def suma(l):` |
| `return a, b` | Returnează două valori deodată | `x, y = f(4, 5)` |
| `f(b=2, a=1)` | Argumente cu nume, în orice ordine | `salut(nume="Ana")` |
| `"""text"""` | Descrierea unei funcții (docstring) | pusă chiar sub `def` |
| `def main():` | Funcția principală a programului | `main()` |

---

## 1. Recapitulare rapidă din L8

- `def` definește, `nume()` apelează.
- `return` dă un rezultat înapoi; `print` doar arată.
- Parametrii pot avea valori implicite.

**Încearcă tu (3 min)**  
- [ ] Scrie o funcție `triplu(x)` care returnează `x * 3`  

---

## 2. Liste în funcții

### Exemplul 1 — O funcție primește o listă

```python
def suma_lista(numere):
    total = 0
    for x in numere:
        total += x
    return total

def media(numere):
    return suma_lista(numere) / len(numere)

scoruri = [9, 10, 8, 7]
print(suma_lista(scoruri))
print(media(scoruri))
print(media([5, 5]))
```

**Ieșire:**
```text
34
8.5
5.0
```

O funcție poate primi **o listă întreagă** ca parametru. Observă și că funcția `media` o **apelează** pe `suma_lista`: așa se construiesc funcții din funcții.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 1** (O funcție primește o listă)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 3. Mai multe valori

### Exemplul 2 — `return` cu două valori

```python
def min_max(lista):
    return min(lista), max(lista)

mic, mare = min_max([4, 9, 1, 7])
print("Cel mai mic:", mic)
print("Cel mai mare:", mare)

rezultat = min_max([3, 8])
print(rezultat)
```

**Ieșire:**
```text
Cel mai mic: 1
Cel mai mare: 9
(3, 8)
```

Cu `return a, b` funcția dă **două valori deodată**. Le primești în două variabile: `mic, mare = ...`. Dacă le pui într-o singură variabilă, obții o pereche între paranteze rotunde `(3, 8)`.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 2** (`return` cu două valori)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 4. Funcții între ele, argumente cu nume

### Exemplul 3 — Funcții care apelează funcții

```python
def patrat(x):
    return x * x

def suma_patrate(a, b):
    return patrat(a) + patrat(b)

def ipotenuza(a, b):
    return suma_patrate(a, b) ** 0.5

print(patrat(5))
print(suma_patrate(3, 4))
print(ipotenuza(3, 4))
```

**Ieșire:**
```text
25
25
5.0
```

Teorema lui Pitagora, în trei pași mici: fiecare funcție face un singur lucru bine. `** 0.5` este rădăcina pătrată.

### Exemplul 4 — Argumente cu nume

```python
def prezinta(nume, varsta, hobby="jocuri"):
    print(f"{nume}, {varsta} ani, hobby: {hobby}")

prezinta("Ana", 10)
prezinta("Radu", 11, "fotbal")
prezinta(varsta=9, nume="Sofia")
prezinta("Dan", hobby="desen", varsta=12)
```

**Ieșire:**
```text
Ana, 10 ani, hobby: jocuri
Radu, 11 ani, hobby: fotbal
Sofia, 9 ani, hobby: jocuri
Dan, 12 ani, hobby: desen
```

Când apelezi o funcție, poți scrie `parametru=valoare`. Atunci **ordinea nu mai contează**, iar codul se citește mai ușor.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 3** (Funcții care apelează funcții)  
- [ ] Am scris și am rulat **Exemplul 4** (Argumente cu nume)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 5. Documentare și validare

### Exemplul 5 — Descrierea unei funcții (docstring)

```python
def aria_cerc(raza):
    """Calculeaza aria unui cerc cu raza data."""
    return 3.14 * raza * raza

print(aria_cerc(2))
print(aria_cerc.__doc__)
```

**Ieșire:**
```text
12.56
Calculeaza aria unui cerc cu raza data.
```

Primul text scris **între ghilimele triple**, imediat sub `def`, se numește **docstring**: descrie ce face funcția. Îl citește oricine folosește funcția (și tu, peste o lună!).

### Exemplul 6 — Citire cu validare

```python
def citeste_numar(mesaj):
    while True:
        text = input(mesaj)
        if text.isdigit():
            return int(text)
        print("Te rog scrie un numar intreg, pozitiv!")

varsta = citeste_numar("Cati ani ai? ")
print("Ai", varsta, "ani")
```

**Ieșire:**
```text
Cati ani ai? abc
Te rog scrie un numar intreg, pozitiv!
Cati ani ai? -5
Te rog scrie un numar intreg, pozitiv!
Cati ani ai? 12
Ai 12 ani
```

Funcția **nu se oprește** până nu primește un număr valid: `return` iese din funcție și din buclă deodată. Acum, de câte ori ai nevoie de un număr, apelezi `citeste_numar(...)` și gata, fără să repeți codul.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 5** (Descrierea unei funcții (docstring))  
- [ ] Am scris și am rulat **Exemplul 6** (Citire cu validare)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 6. Programul organizat

### Exemplul 7 — Funcția `main()`

```python
def titlu(text):
    print("=" * 20)
    print(text)
    print("=" * 20)

def salut(nume):
    return f"Salut, {nume}!"

def main():
    titlu("PROGRAMUL MEU")
    print(salut("Ana"))
    print(salut("Mihai"))
    print("Gata!")

main()
```

**Ieșire:**
```text
====================
PROGRAMUL MEU
====================
Salut, Ana!
Salut, Mihai!
Gata!
```

Programele organizate au **funcții mici** deasupra și o funcție **`main()`** care le folosește, apelată **o singură dată**, la sfârșit. Așa vezi imediat „povestea” programului.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 7** (Funcția `main()`)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 7. Mini-proiect

### Exemplul 8 — Calculatorul cu funcții

```python
def aduna(a, b):
    return a + b

def scade(a, b):
    return a - b

def inmulteste(a, b):
    return a * b

def imparte(a, b):
    if b == 0:
        return None
    return a / b

def afiseaza_meniu():
    print("\n1. Aduna  2. Scade  3. Inmulteste  4. Imparte  0. Iesire")

def citeste_doua_numere():
    a = int(input("Primul numar: "))
    b = int(input("Al doilea numar: "))
    return a, b

def main():
    print("=== CALCULATOR ===")
    optiune = -1
    while optiune != 0:
        afiseaza_meniu()
        optiune = int(input("Alege: "))
        if optiune == 0:
            break
        a, b = citeste_doua_numere()
        if optiune == 1:
            print("Rezultat:", aduna(a, b))
        elif optiune == 2:
            print("Rezultat:", scade(a, b))
        elif optiune == 3:
            print("Rezultat:", inmulteste(a, b))
        elif optiune == 4:
            rezultat = imparte(a, b)
            if rezultat is None:
                print("Nu se poate imparti la 0!")
            else:
                print("Rezultat:", rezultat)
    print("Pa!")

main()
```

**Ieșire:**
```text
=== CALCULATOR ===

1. Aduna  2. Scade  3. Inmulteste  4. Imparte  0. Iesire
Alege: 1
Primul numar: 10
Al doilea numar: 5
Rezultat: 15

1. Aduna  2. Scade  3. Inmulteste  4. Imparte  0. Iesire
Alege: 4
Primul numar: 8
Al doilea numar: 0
Nu se poate imparti la 0!

1. Aduna  2. Scade  3. Inmulteste  4. Imparte  0. Iesire
Alege: 3
Primul numar: 6
Al doilea numar: 7
Rezultat: 42

1. Aduna  2. Scade  3. Inmulteste  4. Imparte  0. Iesire
Alege: 0
Pa!
```

Programul are **7 funcții mici**, fiecare cu un singur rol, și un `main()` care le leagă. Dacă vrei să adaugi ridicarea la putere, adaugi o funcție și un `elif`.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 8** (Calculatorul cu funcții)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## De făcut azi — „Calculatorul cu funcții”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | O funcție care primește o listă și una care returnează două valori |
| **Complet** | Minim + o funcție de citire cu validare și un calculator organizat în funcții |

### Pasul 1 — Minim
- [ ] O funcție care primește o listă și una care returnează două valori  

### Pasul 2 — Complet
Scrie propriul calculator organizat în funcții:
1. cel puțin **5 operații** (adunare, scădere, înmulțire, împărțire, plus încă una la alegere, de exemplu putere sau rest), fiecare într-o **funcție**;
2. o funcție care **citește** un număr, cu validare;
3. o funcție `main()` cu meniu care se repetă;
4. tratează **împărțirea la 0**.

**Gata când:**
- [ ] Calculatorul are cel puțin 5 operații în funcții  
- [ ] Citirea numerelor se face într-o funcție, cu validare  
- [ ] Există o funcție `main()` apelată o singură dată  
- [ ] Împărțirea la 0 e tratată  
- [ ] Fișierul se numește `Prenume_Nume_P2_L9.py`  

---

## Bonus ★★★ — Provocare: Calculatorul, versiunea ta
*Doar dacă ai terminat Complet. Lucrezi pe **propriul tău** calculator cu funcții: păstrează-l și adaugă, pe rând, fiecare idee. Funcțiile noi se pun înainte de `main()`.*

- [ ] Adaugă **memoria**: după un rezultat, calculatorul întreabă dacă vrei să-l folosești ca prim număr  
- [ ] Adaugă o opțiune nouă, **Media** celor două numere, printr-o funcție `media(a, b)`  
- [ ] Adaugă o opțiune nouă, **CMMDC** (cel mai mare divizor comun), printr-o funcție `cmmdc(a, b)`  
- [ ] Numără **câte operații** ai făcut și afișează numărul înainte de „Pa!”

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| `ValueError: too many values to unpack` | Numărul de variabile nu se potrivește cu valorile returnate | `a, b = f(...)` pentru 2 valori |
| `NameError: name 'main' is not defined` | Ai apelat `main()` înainte de definire | Apelează-l la sfârșitul fișierului |
| `TypeError: media() takes 1 positional argument but 3 were given` | Ai dat 3 numere în loc de o listă | `media([1, 2, 3])` |
| `return min(l) max(l)` dă eroare | Lipsește virgula | `return min(l), max(l)` |
| Funcția nu validează și se oprește la o greșeală | `int(input(...))` pe text | Folosește `isdigit()` ca în exemplu |
| Funcția modifică lista originală | Listele sunt partajate între funcții | Lucrează pe o copie: `lista.copy()` |

---

## Recapitulare pe scurt

- O funcție poate primi o **listă** ca parametru.
- `return a, b` dă două valori; le primești cu `x, y = f(...)`.
- Funcțiile se pot **apela între ele**; fiecare face **un singur lucru**.
- Argumentele pot fi date **cu nume**: `f(varsta=10, nume="Ana")`.
- Un **docstring** descrie ce face funcția.
- O validare repetată într-o funcție se scrie o singură dată și se reutilizează.
- Programul se organizează cu funcții mici și un `main()` apelat la sfârșit.

---

## Quiz scurt
- Poate o funcție să primească o listă ca parametru?  
- Cum întorci două valori dintr-o funcție și cum le primești?  
- Ce este un docstring?  
- De ce e bine ca fiecare funcție să facă un singur lucru?  
- La ce folosește `main()`?  

---

## Temă
1. Refă **Exemplele 1–8** în Thonny, scrise de mână.  
2. Scrie funcția `numara_vocale(text)` care returnează câte vocale are un text.  
3. Scrie o funcție `convertor(km)` care returnează distanța în metri, centimetri și milimetri (trei valori).  
4. **Bonus:** transformă programul „Agenda mea” din L7 într-unul cu funcții (`adauga`, `cauta`, `arata`, `main`).  
5. **Statistica scorurilor.** Scrie funcția `statistica(scoruri)` care returnează **media**, **cea mai mare** și **cea mai mică** valoare, și afișează-le.
6. Salvează totul ca `Tema_P2_L9_Prenume_Nume.py`.

### Exemple pentru acasă
Aceste exemple folosesc exact ce ai învățat azi. Scrie-le în Thonny, rulează-le și schimbă-le după preferințe.

#### Acasă 1 — O funcție cu noroc

```python
import random

def arunca_zar():
    return random.randint(1, 6)

def arunca_zaruri(cate):
    return [arunca_zar() for _ in range(cate)]

zaruri = arunca_zaruri(3)
print(len(zaruri))
print(all(1 <= z <= 6 for z in zaruri))
```

**Ieșire:**
```text
3
True
```

Zarurile diferă la fiecare rulare, așa că nu le afișăm. Verificăm doar că sunt 3 și că toate sunt între 1 și 6. Linia `[arunca_zar() for _ in range(cate)]` construiește o listă în care `arunca_zar()` se repetă de `cate` ori (`_` este un nume pentru o variabilă de care nu avem nevoie). Poți să o înlocuiești și cu un `for` obișnuit cu `append`.

#### Acasă 2 — Recursivitate (pentru curioși)

```python
def numaratoare(n):
    if n == 0:
        print("Start!")
    else:
        print(n)
        numaratoare(n - 1)

def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

numaratoare(3)
print(factorial(5))
```

**Ieșire:**
```text
3
2
1
Start!
120
```

O funcție se poate **chema pe ea însăși**; aceasta se numește **recursivitate**. Trebuie un **caz de oprire** (`n == 0` sau `n <= 1`), altfel funcția s-ar chema la nesfârșit. `factorial(5)` este `5 · 4 · 3 · 2 · 1 = 120`. Nu trebuie să stăpânești asta acum; e doar un gust din ce urmează.

### Încă două exerciții

**Ce afișează?** Gândește-te, apoi verifică în Thonny:

```python
def f(lista):
    return lista[0] + lista[-1]

def g(a, b):
    return a * b, a + b

print(f([3, 8, 5]))
x, y = g(4, 5)
print(x, y)
print(f([g(1, 2)[0], 10]))
```

**Găsește greșelile.** Programul are 5 greșeli. Rescrie-l corect și explică fiecare corecție:

```text
def min_max(lista):
    return min(lista) max(lista)

a, b, c = min_max([1, 2, 3])
def media(l)
    return sum(l) / len(l)
print(media(1, 2, 3))
main()
def main():
    print("Salut")
```

---

## Răspunsuri la bonus

*Uită-te aici doar după ce ai încercat singur. Există mai multe soluții bune; a ta poate arăta diferit. Calculatorul din Exemplul 8 e lung, așa că arătăm doar ce se schimbă și unde. Ieșirea e de la programul întreg, cu schimbarea făcută.*

### 1. Memoria

Înlocuiește funcția `main()` cu varianta de mai jos. Fiecare operație pune acum rezultatul în `rezultat`, iar `memorie` îl ține minte.

```python
def main():
    print("=== CALCULATOR ===")
    optiune = -1
    memorie = None
    while optiune != 0:
        afiseaza_meniu()
        optiune = int(input("Alege: "))
        if optiune == 0:
            break
        if memorie is not None and input(f"Folosesti memoria ({memorie}) ca prim numar? (da/nu) ").lower() == "da":
            a = memorie
            b = int(input("Al doilea numar: "))
        else:
            a, b = citeste_doua_numere()
        rezultat = None
        if optiune == 1:
            rezultat = aduna(a, b)
        elif optiune == 2:
            rezultat = scade(a, b)
        elif optiune == 3:
            rezultat = inmulteste(a, b)
        elif optiune == 4:
            rezultat = imparte(a, b)
            if rezultat is None:
                print("Nu se poate imparti la 0!")
        if rezultat is not None:
            print("Rezultat:", rezultat)
            memorie = rezultat
    print("Pa!")

main()
```

**Ieșire:**
```text
=== CALCULATOR ===

1. Aduna  2. Scade  3. Inmulteste  4. Imparte  0. Iesire
Alege: 1
Primul numar: 10
Al doilea numar: 5
Rezultat: 15

1. Aduna  2. Scade  3. Inmulteste  4. Imparte  0. Iesire
Alege: 3
Folosesti memoria (15) ca prim numar? (da/nu) da
Al doilea numar: 4
Rezultat: 60

1. Aduna  2. Scade  3. Inmulteste  4. Imparte  0. Iesire
Alege: 4
Folosesti memoria (60) ca prim numar? (da/nu) da
Al doilea numar: 0
Nu se poate imparti la 0!

1. Aduna  2. Scade  3. Inmulteste  4. Imparte  0. Iesire
Alege: 0
Pa!
```

După `10 + 5 = 15`, a doua operație folosește memoria ca prim număr: `15 * 4 = 60`. Împărțirea la 0 nu schimbă memoria.

### 2. Opțiunea nouă: Media (5)

Trei schimbări: (a) pune funcția înainte de `main()`; (b) adaugă `  5. Media` la sfârșitul textului din `afiseaza_meniu`; (c) pune ramura nouă în `main()`, după ramura lui `optiune == 4`.

```python
# (a) funcția nouă, înainte de main()
def media(a, b):
    return (a + b) / 2

# (b) în afiseaza_meniu: print("\n1. Aduna  2. Scade  3. Inmulteste  4. Imparte  0. Iesire  5. Media")

# (c) în main(), după ramura lui optiune == 4
        elif optiune == 5:
            print("Media:", media(a, b))
```

**Ieșire:**
```text
=== CALCULATOR ===

1. Aduna  2. Scade  3. Inmulteste  4. Imparte  0. Iesire  5. Media
Alege: 5
Primul numar: 8
Al doilea numar: 5
Media: 6.5

1. Aduna  2. Scade  3. Inmulteste  4. Imparte  0. Iesire  5. Media
Alege: 0
Pa!
```

Media lui 8 și 5 este 13 / 2 = 6.5.

### 3. Opțiunea nouă: CMMDC (5)

Trei schimbări, ca la media: funcția înainte de `main()`, textul din meniu și ramura nouă în `main()`. Dacă ai făcut deja opțiunea Media la numărul 5, dă-i CMMDC numărul 6, în meniu și în `elif`.

```python
# (a) funcția nouă, înainte de main()
def cmmdc(a, b):
    while b != 0:
        rest = a % b
        a = b
        b = rest
    return a

# (b) în afiseaza_meniu: adaugă la sfârșit "  5. CMMDC"

# (c) în main(), după ramura lui optiune == 4
        elif optiune == 5:
            print("CMMDC:", cmmdc(a, b))
```

**Ieșire:**
```text
=== CALCULATOR ===

1. Aduna  2. Scade  3. Inmulteste  4. Imparte  0. Iesire  5. CMMDC
Alege: 5
Primul numar: 12
Al doilea numar: 18
CMMDC: 6

1. Aduna  2. Scade  3. Inmulteste  4. Imparte  0. Iesire  5. CMMDC
Alege: 0
Pa!
```

Algoritmul lui Euclid: `12` și `18` → `18 % 12 = 6`, apoi `12 % 6 = 0`, deci CMMDC este 6.

### 4. Câte operații

Trei schimbări în `main()`: pornește contorul, crește-l după citirea numerelor și afișează-l înainte de „Pa!”.

```python
# (a) la începutul lui main(), după optiune = -1
    operatii = 0

# (b) imediat după a, b = citeste_doua_numere()
        operatii += 1

# (c) înainte de print("Pa!")
    print(f"Ai facut {operatii} operatii.")
```

**Ieșire:**
```text
=== CALCULATOR ===

1. Aduna  2. Scade  3. Inmulteste  4. Imparte  0. Iesire
Alege: 1
Primul numar: 10
Al doilea numar: 5
Rezultat: 15

1. Aduna  2. Scade  3. Inmulteste  4. Imparte  0. Iesire
Alege: 3
Primul numar: 6
Al doilea numar: 7
Rezultat: 42

1. Aduna  2. Scade  3. Inmulteste  4. Imparte  0. Iesire
Alege: 0
Ai facut 2 operatii.
Pa!
```

Contorul crește o dată la fiecare operație începută, adică după ce ai citit cele două numere.

---
## Ce urmează — Lecția 10
**Proiectul modulului**: jocul „Ghicește numărul”, cu funcții, încercări limitate, indicii și scor.
