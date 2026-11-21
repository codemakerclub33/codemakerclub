# LECȚIA 7 — Agenda mea
### Dicționare: căutăm după nume
**Modulul 2 · Repetăm, colecționăm, organizăm · 2 ore**  
**Code Maker Club · Python Builder**

> Într-o listă cauți după **număr** (poziția 0, 1, 2…). Într-o agendă de telefon cauți după **nume**. Azi înveți **dicționarele**: colecții în care fiecare lucru are un nume (o **cheie**) și o valoare.  
> Proiect: **„Agenda mea”** · fișier: `Prenume_Nume_P2_L7.py`

---

## Ce facem azi
La finalul orei creezi dicționare, citești, adaugi, modifici și ștergi valori, verifici dacă o cheie există, parcurgi un dicționar cu `for` și folosești `.get()`, `.items()`, `.keys()` și `.values()`. Aplicațiile păstrează date cu etichete: „nume: Ana, scor: 120, nivel: 3”. Asta este un dicționar. Același tip de date stă în spatele profilurilor de utilizator, al inventarului dintr-un joc și al dicționarelor adevărate.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare L6 |
| 10–30 | Creăm și citim dicționare (**Exemplele 1–2**) |
| 30–50 | `get`, `in`, ștergere (**Exemplele 3–4**) |
| 50–75 | Parcurgem dicționare (**Exemplele 5–6**) |
| 75–105 | Agenda cu `input` (**Exemplul 7**) |
| 105–118 | Mini-proiect (**Exemplul 8**) |
| 118–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `d = {"nume": "Ana"}` | Creează un dicționar: cheie → valoare | `agenda = {"Ana": "0721"}` |
| `d["cheie"]` | Citește sau schimbă o valoare | `agenda["Ana"]` |
| `d.get("cheie", "nu exista")` | Citește fără eroare, chiar dacă lipsește | `agenda.get("Dan", "nu exista")` |
| `"cheie" in d`, `del d["cheie"]` | Verifică dacă există; șterge o pereche | `del agenda["Ana"]` |
| `for k, v in d.items():` | Parcurge perechile cheie – valoare | `print(k, v)` |

---

## 1. Recapitulare rapidă din L6

- Liste: `sort`, `split`, `join`, liste în liste.
- `b = a` nu copiază o listă; `a.copy()` o copiază.

**Încearcă tu (3 min)**  
- [ ] Desparte propoziția `"unu doi trei"` într-o listă și afișează cuvântul din mijloc  

---

## 2. Ce este un dicționar?

Un **dicționar** ține perechi **cheie : valoare**. Cheia este „eticheta”, iar valoarea este ce se află în spatele ei. Se scrie între **acolade** `{ }`.

```text
jucator = { "nume": "Ana",  "varsta": 10,  "nivel": 4 }
           cheie  valoare   cheie  val.   cheie val.
```

### Exemplul 1 — Creăm și citim

```python
jucator = {"nume": "Ana", "varsta": 10, "nivel": 4}
print(jucator)
print(jucator["nume"])
print(jucator["varsta"] + 1)
print(len(jucator))
```

**Ieșire:**
```text
{'nume': 'Ana', 'varsta': 10, 'nivel': 4}
Ana
11
3
```

- Citești o valoare cu `dictionar["cheie"]`.
- Cheile sunt de obicei texte.
- `len(dictionar)` numără perechile.
- Dacă ceri o cheie care nu există, Python dă `KeyError`.

### Exemplul 2 — Adăugăm și schimbăm

```python
jucator = {"nume": "Ana", "varsta": 10}
jucator["nivel"] = 4
jucator["varsta"] = 11
print(jucator)
```

**Ieșire:**
```text
{'nume': 'Ana', 'varsta': 11, 'nivel': 4}
```

`dictionar["cheie"] = valoare` face două lucruri: dacă cheia **nu există**, o **adaugă**; dacă **există**, îi **schimbă** valoarea.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 1** (Creăm și citim)  
- [ ] Am scris și am rulat **Exemplul 2** (Adăugăm și schimbăm)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 3. Căutăm în dicționar

### Exemplul 3 — `in` și `get`

```python
jucator = {"nume": "Ana", "varsta": 10}
print("nume" in jucator)
print("hobby" in jucator)
print(jucator.get("nume"))
print(jucator.get("hobby"))
print(jucator.get("hobby", "necunoscut"))
```

**Ieșire:**
```text
True
False
Ana
None
necunoscut
```

- `"cheie" in dictionar` verifică dacă **cheia** există.
- `dictionar.get("cheie")` dă valoarea, sau `None` dacă nu există (**fără eroare**).
- `dictionar.get("cheie", "implicit")` dă o valoare **de rezervă** dacă lipsește cheia.

### Exemplul 4 — Ștergem

```python
jucator = {"nume": "Ana", "varsta": 10, "nivel": 4}
del jucator["nivel"]
print(jucator)
varsta = jucator.pop("varsta")
print(varsta)
print(jucator)
```

**Ieșire:**
```text
{'nume': 'Ana', 'varsta': 10}
10
{'nume': 'Ana'}
```

`del` șterge o pereche. `pop("cheie")` o șterge și îți **dă valoarea înapoi**.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 3** (`in` și `get`)  
- [ ] Am scris și am rulat **Exemplul 4** (Ștergem)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 4. Parcurgem un dicționar

### Exemplul 5 — Chei, valori, perechi

```python
preturi = {"mar": 2, "para": 3, "banana": 5}
print(list(preturi.keys()))
print(list(preturi.values()))
print(list(preturi.items()))
```

**Ieșire:**
```text
['mar', 'para', 'banana']
[2, 3, 5]
[('mar', 2), ('para', 3), ('banana', 5)]
```

| Comandă | Ce dă |
|---------|-------|
| `.keys()` | toate **cheile** |
| `.values()` | toate **valorile** |
| `.items()` | toate **perechile** `(cheie, valoare)` |

(Le-am pus în `list(...)` ca să le vezi ca listă.)

### Exemplul 6 — `for` pe dicționar

```python
preturi = {"mar": 2, "para": 3, "banana": 5}

for fruct in preturi:
    print(fruct)

for fruct, pret in preturi.items():
    print(f"{fruct} costa {pret} lei")

print("Total:", sum(preturi.values()), "lei")
```

**Ieșire:**
```text
mar
para
banana
mar costa 2 lei
para costa 3 lei
banana costa 5 lei
Total: 10 lei
```

- `for cheie in dictionar:` parcurge **cheile**.
- `for cheie, valoare in dictionar.items():` parcurge **perechile**; primești amândouă deodată.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 5** (Chei, valori, perechi)  
- [ ] Am scris și am rulat **Exemplul 6** (`for` pe dicționar)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 5. Folosiri practice

### Exemplul 7 — Dicționar construit din `input`

```python
agenda = {}
while True:
    nume = input("Nume (gata pentru a termina): ")
    if nume == "gata":
        break
    telefon = input("Telefon: ")
    agenda[nume] = telefon
print(agenda)
```

**Ieșire:**
```text
Nume (gata pentru a termina): Ana
Telefon: 0722
Nume (gata pentru a termina): Mihai
Telefon: 0733
Nume (gata pentru a termina): gata
{'Ana': '0722', 'Mihai': '0733'}
```

Pornim de la un dicționar **gol** `{}` și îl umplem pe parcurs: `agenda[nume] = telefon`.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 7** (Dicționar construit din `input`)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 6. Mini-proiect

### Exemplul 8 — Agenda mea

```python
agenda = {}
optiune = -1
while optiune != 0:
    print("\n1. Adauga  2. Cauta  3. Arata tot  0. Iesire")
    optiune = int(input("Alege: "))
    if optiune == 1:
        nume = input("Nume: ")
        telefon = input("Telefon: ")
        agenda[nume] = telefon
        print("Salvat!")
    elif optiune == 2:
        nume = input("Pe cine cauti? ")
        if nume in agenda:
            print(f"{nume}: {agenda[nume]}")
        else:
            print("Nu exista in agenda.")
    elif optiune == 3:
        if len(agenda) == 0:
            print("Agenda este goala.")
        for nume, telefon in agenda.items():
            print(f"- {nume}: {telefon}")
print("Pe curand!")
```

**Ieșire:**
```text

1. Adauga  2. Cauta  3. Arata tot  0. Iesire
Alege: 1
Nume: Ana
Telefon: 0722111222
Salvat!

1. Adauga  2. Cauta  3. Arata tot  0. Iesire
Alege: 1
Nume: Mihai
Telefon: 0733444555
Salvat!

1. Adauga  2. Cauta  3. Arata tot  0. Iesire
Alege: 3
- Ana: 0722111222
- Mihai: 0733444555

1. Adauga  2. Cauta  3. Arata tot  0. Iesire
Alege: 2
Pe cine cauti? Ana
Ana: 0722111222

1. Adauga  2. Cauta  3. Arata tot  0. Iesire
Alege: 2
Pe cine cauti? Radu
Nu exista in agenda.

1. Adauga  2. Cauta  3. Arata tot  0. Iesire
Alege: 0
Pe curand!
```

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 8** (Agenda mea)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## De făcut azi — „Agenda mea”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Un dicționar cu datele tale (nume, vârstă, oraș, hobby), afișat |
| **Complet** | Minim + o agendă cu meniu (adaugă, caută, afișează, șterge) |

### Pasul 1 — Minim
- [ ] Un dicționar cu datele tale (nume, vârstă, oraș, hobby), afișat  

### Pasul 2 — Complet
Scrie o agendă cu meniu care se repetă și cu opțiunile:
1. **Adaugă** un contact (nume și telefon);
2. **Caută** un contact după nume;
3. **Arată** toate contactele;
4. **Șterge** un contact (cu verificare dacă există);
5. **Ieșire**.

**Gata când:**
- [ ] Agenda are meniu care se repetă  
- [ ] Poți adăuga, căuta, afișa și șterge  
- [ ] Nu dă eroare dacă numele nu există  
- [ ] Fișierul se numește `Prenume_Nume_P2_L7.py`  

---

## Bonus ★★★ — Provocare: Agenda, versiunea ta
*Doar dacă ai terminat Complet. Lucrezi pe **propria ta** agendă: păstrează-o și îmbunătățește-o.*

- [ ] Opțiune nouă: **schimbă telefonul** unui contact care există deja (cu verificare dacă numele e în agendă)  
- [ ] Opțiune nouă: afișează **câte contacte** are agenda (`len`)  
- [ ] La „Arată tot”, afișează contactele **sortate alfabetic** (`sorted(agenda)`)  
- [ ] Fiecare contact are **telefon și email**: valoarea din agendă devine un dicționar `{"telefon": ..., "email": ...}`

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| `KeyError: 'nivel'` | Cheia nu există | Verifică cu `in` sau folosește `.get()` |
| `SyntaxError` la `("a": 1)` | Dicționarul se scrie cu `{ }` | `{"a": 1}` |
| `AttributeError: 'dict' object has no attribute 'add'` | `add` nu există la dicționare | `d["cheie"] = valoare` |
| `ValueError: too many values to unpack` la `for k, v in d:` | Ai uitat `.items()` | `for k, v in d.items():` |
| Valoarea nu se schimbă | Ai scris `d.cheie = x` | `d["cheie"] = x` |
| `{}` nu pare gol | `{}` este dicționar gol, nu listă | `[]` pentru listă goală |
| Cheile se repetă | Într-un dicționar, o cheie apare **o singură dată** | A doua atribuire o înlocuiește pe prima |

---

## Recapitulare pe scurt

- Un **dicționar** ține perechi `cheie: valoare`, între `{ }`.
- Citești cu `d["cheie"]`; adaugi sau schimbi cu `d["cheie"] = valoare`.
- `.get("cheie", implicit)` nu dă eroare dacă lipsește.
- `"cheie" in d` verifică existența cheii.
- `del d["cheie"]` și `d.pop("cheie")` șterg.
- `.keys()`, `.values()`, `.items()` + `for` parcurg dicționarul.
- Un dicționar este ideal pentru **numărat** și pentru **căutat după nume**.

---

## Quiz scurt
- Ce ține un dicționar și între ce semne se scrie?  
- Cum citești valoarea de la o cheie?  
- Ce avantaj are `.get("cheie", implicit)` față de `d["cheie"]`?  
- Cum verifici dacă o cheie există?  
- Cum parcurgi cheile și valorile cu un `for`?  

---

## Temă
1. Refă **Exemplele 1–8** în Thonny, scrise de mână.  
2. Fă un dicționar cu **scorurile tale** (joc → scor) și afișează media.  
3. Scrie un program care citește o **propoziție** și numără de câte ori apare **fiecare cuvânt**.  
4. **Bonus:** fă un „magazin”: produse și prețuri; cere ce vrea clientul și afișează prețul.  
5. **Dicționar de traduceri.** Fă un dicționar cu 5 cuvinte în română și traducerea lor în engleză. Cere un cuvânt și afișează traducerea (sau „Nu știu acest cuvânt”).
6. Salvează totul ca `Tema_P2_L7_Prenume_Nume.py`.

### Exemple pentru acasă
Aceste exemple folosesc exact ce ai învățat azi. Scrie-le în Thonny, rulează-le și schimbă-le după preferințe.

#### Acasă 1 — Dicționar în loc de `if`-uri

```python
zile = {1: "luni", 2: "marti", 3: "miercuri", 4: "joi", 5: "vineri"}
numar = int(input("Ce zi din saptamana (1-5)? "))
print(zile.get(numar, "Numar invalid"))
```

**Ieșire:**
```text
Ce zi din saptamana (1-5)? 3
miercuri
```

Cheile pot fi și **numere**. Un dicționar este un mod elegant de a „traduce” o valoare în alta, fără lanțuri lungi de `elif`.

#### Acasă 2 — Numărăm literele

```python
text = "banana"
frecventa = {}
for litera in text:
    if litera in frecventa:
        frecventa[litera] += 1
    else:
        frecventa[litera] = 1
print(frecventa)
for litera, cate in frecventa.items():
    print(f"litera '{litera}': {cate}")
```

**Ieșire:**
```text
{'b': 1, 'a': 3, 'n': 2}
litera 'b': 1
litera 'a': 3
litera 'n': 2
```

Un dicționar este perfect pentru a **număra**: cheia este litera, valoarea este câte ori a apărut. Dacă litera e deja cheie, creștem contorul; dacă nu, o adăugăm cu valoarea 1.

### Încă două exerciții

**Ce afișează?** Gândește-te, apoi verifică în Thonny:

```python
d = {"a": 1, "b": 2}
d["c"] = 3
d["a"] = 10
print(d)
print(d.get("z", 0))
print("b" in d, 2 in d)
for k, v in d.items():
    print(k, v)
```

**Găsește greșelile.** Programul are 4 greșeli. Rescrie-l corect și explică fiecare corecție:

```text
jucator = ("nume": "Ana", "varsta": 10)
print(jucator["nivel"])
jucator.add("hobby", "fotbal")
for k, v in jucator:
    print(k, v)
```

---

## Răspunsuri la bonus

*Uită-te aici doar după ce ai încercat singur. Există mai multe soluții bune; a ta poate arăta diferit. Fiecare soluție pornește de la agenda din Exemplul 8; ce scrie utilizatorul apare pe același rând cu întrebarea. La primele două soluții, opțiunea nouă este 4.*

### 1. Schimbă telefonul

```python
agenda = {}
optiune = -1
while optiune != 0:
    print("\n1. Adauga  2. Cauta  3. Arata tot  0. Iesire  4. Schimba telefon")
    optiune = int(input("Alege: "))
    if optiune == 1:
        nume = input("Nume: ")
        telefon = input("Telefon: ")
        agenda[nume] = telefon
        print("Salvat!")
    elif optiune == 2:
        nume = input("Pe cine cauti? ")
        if nume in agenda:
            print(f"{nume}: {agenda[nume]}")
        else:
            print("Nu exista in agenda.")
    elif optiune == 3:
        if len(agenda) == 0:
            print("Agenda este goala.")
        for nume, telefon in agenda.items():
            print(f"- {nume}: {telefon}")
    elif optiune == 4:
        nume = input("Al cui telefon il schimbi? ")
        if nume in agenda:
            agenda[nume] = input("Telefon nou: ")
            print("Schimbat!")
        else:
            print("Nu exista in agenda.")
print("Pe curand!")
```

**Ieșire:**
```text

1. Adauga  2. Cauta  3. Arata tot  0. Iesire  4. Schimba telefon
Alege: 1
Nume: Ana
Telefon: 0722111222
Salvat!

1. Adauga  2. Cauta  3. Arata tot  0. Iesire  4. Schimba telefon
Alege: 4
Al cui telefon il schimbi? Ana
Telefon nou: 0799000111
Schimbat!

1. Adauga  2. Cauta  3. Arata tot  0. Iesire  4. Schimba telefon
Alege: 4
Al cui telefon il schimbi? Radu
Nu exista in agenda.

1. Adauga  2. Cauta  3. Arata tot  0. Iesire  4. Schimba telefon
Alege: 3
- Ana: 0799000111

1. Adauga  2. Cauta  3. Arata tot  0. Iesire  4. Schimba telefon
Alege: 0
Pe curand!
```

Cu `nume in agenda` verificăm întâi că există; apoi `agenda[nume] = ...` înlocuiește valoarea veche.

### 2. Câte contacte

```python
agenda = {}
optiune = -1
while optiune != 0:
    print("\n1. Adauga  2. Cauta  3. Arata tot  0. Iesire  4. Cate contacte")
    optiune = int(input("Alege: "))
    if optiune == 1:
        nume = input("Nume: ")
        telefon = input("Telefon: ")
        agenda[nume] = telefon
        print("Salvat!")
    elif optiune == 2:
        nume = input("Pe cine cauti? ")
        if nume in agenda:
            print(f"{nume}: {agenda[nume]}")
        else:
            print("Nu exista in agenda.")
    elif optiune == 3:
        if len(agenda) == 0:
            print("Agenda este goala.")
        for nume, telefon in agenda.items():
            print(f"- {nume}: {telefon}")
    elif optiune == 4:
        print(f"Ai {len(agenda)} contacte.")
print("Pe curand!")
```

**Ieșire:**
```text

1. Adauga  2. Cauta  3. Arata tot  0. Iesire  4. Cate contacte
Alege: 1
Nume: Ana
Telefon: 0722111222
Salvat!

1. Adauga  2. Cauta  3. Arata tot  0. Iesire  4. Cate contacte
Alege: 1
Nume: Mihai
Telefon: 0733444555
Salvat!

1. Adauga  2. Cauta  3. Arata tot  0. Iesire  4. Cate contacte
Alege: 4
Ai 2 contacte.

1. Adauga  2. Cauta  3. Arata tot  0. Iesire  4. Cate contacte
Alege: 0
Pe curand!
```

`len(agenda)` numără perechile cheie – valoare, adică contactele.

### 3. Contactele sortate

```python
agenda = {}
optiune = -1
while optiune != 0:
    print("\n1. Adauga  2. Cauta  3. Arata tot  0. Iesire")
    optiune = int(input("Alege: "))
    if optiune == 1:
        nume = input("Nume: ")
        telefon = input("Telefon: ")
        agenda[nume] = telefon
        print("Salvat!")
    elif optiune == 2:
        nume = input("Pe cine cauti? ")
        if nume in agenda:
            print(f"{nume}: {agenda[nume]}")
        else:
            print("Nu exista in agenda.")
    elif optiune == 3:
        if len(agenda) == 0:
            print("Agenda este goala.")
        for nume in sorted(agenda):
            print(f"- {nume}: {agenda[nume]}")
print("Pe curand!")
```

**Ieșire:**
```text

1. Adauga  2. Cauta  3. Arata tot  0. Iesire
Alege: 1
Nume: Mihai
Telefon: 0733444555
Salvat!

1. Adauga  2. Cauta  3. Arata tot  0. Iesire
Alege: 1
Nume: Ana
Telefon: 0722111222
Salvat!

1. Adauga  2. Cauta  3. Arata tot  0. Iesire
Alege: 1
Nume: Radu
Telefon: 0744555666
Salvat!

1. Adauga  2. Cauta  3. Arata tot  0. Iesire
Alege: 3
- Ana: 0722111222
- Mihai: 0733444555
- Radu: 0744555666

1. Adauga  2. Cauta  3. Arata tot  0. Iesire
Alege: 0
Pe curand!
```

`sorted(agenda)` dă cheile (numele) în ordine alfabetică, iar telefonul îl luăm cu `agenda[nume]`.

### 4. Telefon și email

```python
agenda = {}
optiune = -1
while optiune != 0:
    print("\n1. Adauga  2. Cauta  3. Arata tot  0. Iesire")
    optiune = int(input("Alege: "))
    if optiune == 1:
        nume = input("Nume: ")
        telefon = input("Telefon: ")
        email = input("Email: ")
        agenda[nume] = {"telefon": telefon, "email": email}
        print("Salvat!")
    elif optiune == 2:
        nume = input("Pe cine cauti? ")
        if nume in agenda:
            contact = agenda[nume]
            print(f"{nume}: {contact['telefon']}, {contact['email']}")
        else:
            print("Nu exista in agenda.")
    elif optiune == 3:
        if len(agenda) == 0:
            print("Agenda este goala.")
        for nume, contact in agenda.items():
            print(f"- {nume}: {contact['telefon']}, {contact['email']}")
print("Pe curand!")
```

**Ieșire:**
```text

1. Adauga  2. Cauta  3. Arata tot  0. Iesire
Alege: 1
Nume: Ana
Telefon: 0722111222
Email: ana@mail.ro
Salvat!

1. Adauga  2. Cauta  3. Arata tot  0. Iesire
Alege: 2
Pe cine cauti? Ana
Ana: 0722111222, ana@mail.ro

1. Adauga  2. Cauta  3. Arata tot  0. Iesire
Alege: 3
- Ana: 0722111222, ana@mail.ro

1. Adauga  2. Cauta  3. Arata tot  0. Iesire
Alege: 0
Pe curand!
```

Valoarea fiecărui contact este acum un dicționar mic; citești părțile lui cu `contact['telefon']` și `contact['email']`. În f-string folosim ghilimele simple înăuntru, ca să nu încurcăm ghilimelele duble de afară.

---
## Ce urmează — Lecția 8
Învățăm **funcțiile**: bucăți de program cărora le dai un nume și pe care le folosești de câte ori ai nevoie.
