# LECȚIA 5 — Lista de cumpărături
### Liste I
**Modulul 2 · Repetăm, colecționăm, organizăm · 2 ore**  
**Code Maker Club · Python Builder**

> Până acum o variabilă ținea o singură valoare. Dar un joc are zeci de jucători, un magazin are sute de produse. Azi înveți **listele**: o cutie care ține mai multe lucruri, în ordine.  
> Proiect: **„Lista de cumpărături”** · fișier: `Prenume_Nume_P2_L5.py`

---

## Ce facem azi
La finalul orei creezi liste, citești și schimbi elemente cu indexul, adaugi cu `append` și `insert`, ștergi cu `remove` și `pop`, verifici cu `in`, parcurgi o listă cu `for` și calculezi suma, minimul și maximul. Aproape orice aplicație lucrează cu **colecții**: lista prietenilor, scorurile unui joc, melodiile dintr-un playlist. Listele sunt unul dintre cele mai importante lucruri din Python.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare L4 |
| 10–30 | Crearea și citirea listelor (**Exemplele 1–2**) |
| 30–55 | Adăugăm și ștergem (**Exemplele 3–4**) |
| 55–75 | Căutăm în listă (**Exemplul 5**) |
| 75–95 | Calcule cu liste de numere (**Exemplul 6**) |
| 95–105 | Listă construită din `input` (**Exemplul 7**) |
| 105–118 | Mini-proiect (**Exemplul 8**) |
| 118–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `fructe = ["mar", "para"]` | Creează o listă | `print(fructe)` |
| `lista[0]`, `lista[-1]` | Primul și ultimul element | `fructe[0]` |
| `.append(x)`, `.insert(i, x)` | Adaugă la final sau pe o poziție | `fructe.append("kiwi")` |
| `.remove(x)`, `.pop()` | Șterge după valoare sau ultimul element | `fructe.remove("mar")` |
| `x in lista`, `len(lista)` | Verifică dacă există; numără elementele | `"mar" in fructe` |

---

## 1. Recapitulare rapidă din L4

- `break` iese din buclă; `continue` sare peste un pas.
- Ai văzut o listă simplă în lecția despre `random`: `["rosu", "verde"]`.

**Încearcă tu (3 min)**  
- [ ] Scrie o listă cu 3 culori și afișează-o pe a doua  

---

## 2. Ce este o listă?

O **listă** este o cutie cu **mai multe** lucruri, **în ordine**, fiecare cu un număr de ordine (**indexul**), care începe de la **0**.

```text
jucatori = [ "Ana", "Mihai", "Sofia" ]
index:         0       1        2
negativ:      -3      -2       -1
```

### Exemplul 1 — Creăm o listă

```python
jucatori = ["Ana", "Mihai", "Sofia"]
print(jucatori)
print(len(jucatori))
print(type(jucatori))
```

**Ieșire:**
```text
['Ana', 'Mihai', 'Sofia']
3
<class 'list'>
```

- O listă se scrie între **paranteze pătrate** `[ ]`, cu elementele separate prin **virgulă**.
- `len(lista)` spune câte elemente are.
- Tipul ei este `list`.
- O listă poate ține orice: texte, numere, chiar amestecate: `["Ana", 10, 1.5, True]`.

### Exemplul 2 — Citim și schimbăm elemente

```python
jucatori = ["Ana", "Mihai", "Sofia"]
print(jucatori[0])
print(jucatori[-1])
jucatori[1] = "Radu"
print(jucatori)
```

**Ieșire:**
```text
Ana
Sofia
['Ana', 'Radu', 'Sofia']
```

- `jucatori[0]` este primul element, `jucatori[-1]` este ultimul.
- `jucatori[1] = "Radu"` **înlocuiește** al doilea element.
- Dacă ceri un index care nu există (de exemplu `jucatori[5]`), Python dă `IndexError: list index out of range`.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 1** (Creăm o listă)  
- [ ] Am scris și am rulat **Exemplul 2** (Citim și schimbăm elemente)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 3. Adăugăm și ștergem

### Exemplul 3 — `append` și `insert`

```python
jucatori = ["Ana", "Mihai"]
jucatori.append("Sofia")
print(jucatori)
jucatori.insert(0, "Elena")
print(jucatori)
```

**Ieșire:**
```text
['Ana', 'Mihai', 'Sofia']
['Elena', 'Ana', 'Mihai', 'Sofia']
```

| Metodă | Ce face |
|--------|---------|
| `lista.append(x)` | adaugă `x` **la sfârșit** |
| `lista.insert(i, x)` | adaugă `x` **pe poziția `i`**, mutând restul |

### Exemplul 4 — `remove` și `pop`

```python
jucatori = ["Elena", "Ana", "Mihai", "Sofia"]
jucatori.remove("Mihai")
print(jucatori)
ultimul = jucatori.pop()
print(ultimul)
print(jucatori)
primul = jucatori.pop(0)
print(primul)
print(jucatori)
```

**Ieșire:**
```text
['Elena', 'Ana', 'Sofia']
Sofia
['Elena', 'Ana']
Elena
['Ana']
```

| Metodă | Ce face |
|--------|---------|
| `lista.remove(x)` | șterge **prima** apariție a valorii `x` |
| `lista.pop()` | șterge **ultimul** element și ți-l **dă înapoi** |
| `lista.pop(i)` | șterge elementul de pe poziția `i` și ți-l dă înapoi |

Dacă încerci `remove` pe o valoare care nu există, Python dă `ValueError`. Verifică întâi cu `in`.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 3** (`append` și `insert`)  
- [ ] Am scris și am rulat **Exemplul 4** (`remove` și `pop`)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 4. Căutăm în listă

### Exemplul 5 — `in` și `not in`

```python
jucatori = ["Ana", "Mihai", "Sofia"]
print("Ana" in jucatori)
print("Radu" in jucatori)
print("Radu" not in jucatori)
if "Sofia" in jucatori:
    print("Sofia joaca in echipa!")
```

**Ieșire:**
```text
True
False
True
Sofia joaca in echipa!
```

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 5** (`in` și `not in`)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 5. Liste de numere

### Exemplul 6 — Calcule cu numere

```python
scoruri = [9, 10, 8, 7, 10]
print("Suma:", sum(scoruri))
print("Cea mai mare:", max(scoruri))
print("Cea mai mica:", min(scoruri))
print("Media:", sum(scoruri) / len(scoruri))
print("De cate ori apare 10:", scoruri.count(10))
```

**Ieșire:**
```text
Suma: 44
Cea mai mare: 10
Cea mai mica: 7
Media: 8.8
De cate ori apare 10: 2
```

| Funcție | Ce face |
|---------|---------|
| `sum(lista)` | suma elementelor |
| `max(lista)` | cel mai mare |
| `min(lista)` | cel mai mic |
| `lista.count(x)` | de câte ori apare `x` |

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 6** (Calcule cu numere)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 6. Lista din `input`

### Exemplul 7 — Colectăm cuvinte

```python
cuvinte = []
while True:
    cuvant = input("Scrie un cuvant (gata pentru a termina): ")
    if cuvant == "gata":
        break
    cuvinte.append(cuvant)

print("Ai scris", len(cuvinte), "cuvinte:")
for c in cuvinte:
    print("-", c)
```

**Ieșire:**
```text
Scrie un cuvant (gata pentru a termina): mere
Scrie un cuvant (gata pentru a termina): pere
Scrie un cuvant (gata pentru a termina): prune
Scrie un cuvant (gata pentru a termina): gata
Ai scris 3 cuvinte:
- mere
- pere
- prune
```

`cuvinte = []` creează o **listă goală**. O umplem pe parcurs cu `append`.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 7** (Colectăm cuvinte)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 7. Mini-proiect

### Exemplul 8 — Lista de cumpărături

```python
lista = []
optiune = 0
while optiune != 3:
    print("\n1. Adauga  2. Arata lista  3. Iesire")
    optiune = int(input("Alege: "))
    if optiune == 1:
        produs = input("Ce adaugi? ")
        lista.append(produs)
        print("Adaugat!")
    elif optiune == 2:
        if len(lista) == 0:
            print("Lista este goala.")
        else:
            for i in range(len(lista)):
                print(f"{i + 1}. {lista[i]}")
print("La cumparaturi placute!")
```

**Ieșire:**
```text

1. Adauga  2. Arata lista  3. Iesire
Alege: 1
Ce adaugi? lapte
Adaugat!

1. Adauga  2. Arata lista  3. Iesire
Alege: 1
Ce adaugi? paine
Adaugat!

1. Adauga  2. Arata lista  3. Iesire
Alege: 2
1. lapte
2. paine

1. Adauga  2. Arata lista  3. Iesire
Alege: 3
La cumparaturi placute!
```

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 8** (Lista de cumpărături)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## De făcut azi — „Lista de cumpărături”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | O listă cu 5 elemente, afișată și parcursă cu `for` |
| **Complet** | Minim + un meniu cu adăugare, afișare numerotată și ștergere |

### Pasul 1 — Minim
- [ ] O listă cu 5 elemente, afișată și parcursă cu `for`  

### Pasul 2 — Complet
Scrie un program cu un **meniu care se repetă** (`while`) și cu opțiunile:
1. **Adaugă** un produs;
2. **Arată** lista, numerotată;
3. **Șterge** un produs (după nume, cu verificare dacă există);
4. **Ieșire**.

**Gata când:**
- [ ] Meniul se repetă până la „Ieșire”  
- [ ] Poți adăuga, afișa și șterge produse  
- [ ] Nu se blochează dacă lista e goală sau produsul nu există  
- [ ] Fișierul se numește `Prenume_Nume_P2_L5.py`  

---

## Bonus ★★★ — Provocare: Magazinul mai deștept
*Doar dacă ai terminat Complet.*

- [ ] Adaugă o opțiune care afișează **câte produse** sunt în listă  
- [ ] Citește 6 numere și afișează lista **fără numerele negative**  
- [ ] Inversează o listă fără `[::-1]`, cu o buclă  
- [ ] Verifică dacă un cuvânt e în lista ta de „cuvinte interzise”  

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| `IndexError: list index out of range` | Index prea mare sau listă goală | Ultimul index e `len(lista) - 1` |
| `AttributeError: 'list' object has no attribute 'add'` | `add` nu există la liste | `append` |
| `ValueError: list.remove(x): x not in list` | Valoarea nu e în listă | Verifică întâi cu `if x in lista:` |
| `SyntaxError` la `["a", "b")` | Paranteze nepotrivite | `["a", "b"]` |
| `lista.append("a", "b")` dă eroare | `append` primește un singur lucru | Două apeluri `append` |
| `lista = lista.append("x")` pierde lista | `append` returnează `None` | `lista.append("x")` fără `=` |
| Primul element e greșit | Indexul pornește de la 0 | `lista[0]` e primul |

---

## Recapitulare pe scurt

- O **listă** ține mai multe valori, în ordine, între `[ ]`.
- Indexul începe de la **0**; `lista[-1]` este ultimul.
- `append` adaugă la sfârșit, `insert(i, x)` pe poziția `i`.
- `remove(x)` șterge după valoare; `pop()` / `pop(i)` șterge după poziție și îți dă elementul.
- `x in lista` verifică dacă există.
- `for x in lista:` parcurge elementele.
- `sum`, `max`, `min`, `len`, `count` fac calcule.

---

## Quiz scurt
- Cu ce număr începe indexul într-o listă?  
- Cum adaugi un element la sfârșitul listei?  
- Care e diferența dintre `remove(x)` și `pop(i)`?  
- Cum verifici dacă un element se află în listă?  
- Cum afli ultimul element al unei liste?  

---

## Temă
1. Refă **Exemplele 1–8** în Thonny, scrise de mână.  
2. Fă o **listă cu hobby-urile tale** și un program care o afișează numerotat.  
3. Scrie un program care citește **5 numere**, le pune într-o listă și afișează: lista, suma, media, cel mai mare și cel mai mic număr.  
4. **Bonus:** program care citește numele a 4 prieteni și afișează un salut pentru fiecare, cu `for`.  
5. **Scorurile mele.** Citește 5 scoruri într-o listă. Afișează media, scorul cel mai mare, scorul cel mai mic și de câte ori apare scorul 10.
6. Salvează totul ca `Tema_P2_L5_Prenume_Nume.py`.

### Exemple pentru acasă
Aceste exemple folosesc exact ce ai învățat azi. Scrie-le în Thonny, rulează-le și schimbă-le după preferințe.

#### Acasă 1 — Parcurgem lista

```python
jucatori = ["Ana", "Mihai", "Sofia"]

for nume in jucatori:
    print("Salut,", nume)

for i in range(len(jucatori)):
    print(i + 1, ".", jucatori[i])
```

**Ieșire:**
```text
Salut, Ana
Salut, Mihai
Salut, Sofia
1 . Ana
2 . Mihai
3 . Sofia
```

Două moduri de a parcurge:
- `for nume in jucatori:` îți dă **direct elementele**; este cel mai simplu.
- `for i in range(len(jucatori)):` îți dă **indexurile**, util când ai nevoie de poziție.

#### Acasă 2 — Felii (slicing)

```python
zile = ["luni", "marti", "miercuri", "joi", "vineri", "sambata", "duminica"]
print(zile[1:3])
print(zile[:2])
print(zile[5:])
print(zile[::-1])
```

**Ieșire:**
```text
['marti', 'miercuri']
['luni', 'marti']
['sambata', 'duminica']
['duminica', 'sambata', 'vineri', 'joi', 'miercuri', 'marti', 'luni']
```

Feliile merg ca la text: `lista[de_la:pana_la]`, **fără** ultimul. `[::-1]` inversează lista.

### Încă două exerciții

**Ce afișează?** Gândește-te, apoi verifică în Thonny:

```python
l = [3, 1, 4]
l.append(1)
l.insert(1, 5)
print(l)
print(l.pop())
print(len(l))
print(l[1:3])
print(4 in l)
```

**Găsește greșelile.** Programul are 4 greșeli. Rescrie-l corect și explică fiecare corecție:

```text
fructe = ("mar", "para", "prune"]
print(fructe[3])
fructe.add("kiwi")
fructe.remove("banana")
for f in fructe
    print(f)
```

---

## Răspunsuri la bonus

*Uită-te aici doar după ce ai încercat singur. Există mai multe soluții bune; a ta poate arăta diferit.*

### 1. Câte produse sunt în listă

```python
lista = ["lapte", "paine", "oua"]
print("Produse:", len(lista))
```

**Ieșire:**
```text
Produse: 3
```

### 2. Lista fără numerele negative

```python
lista = []
for i in range(6):
    n = int(input("Numar: "))
    if n >= 0:
        lista.append(n)
print(lista)
```

**Ieșire:**
```text
Numar: 3
Numar: -1
Numar: 4
Numar: -5
Numar: 2
Numar: -7
[3, 4, 2]
```

### 3. Lista inversată cu o buclă

```python
lista = [1, 2, 3, 4]
invers = []
for x in lista:
    invers.insert(0, x)
print(invers)
```

**Ieșire:**
```text
[4, 3, 2, 1]
```

### 4. Cuvinte interzise

```python
interzise = ["prost", "urat"]
cuvant = input("Scrie un cuvant: ")
if cuvant in interzise:
    print("Cuvantul este interzis!")
else:
    print("Cuvantul este bun.")
```

**Ieșire:**
```text
Scrie un cuvant: urat
Cuvantul este interzis!
```

---
## Ce urmează — Lecția 6
Mai multe despre liste: **sortare**, liste în liste, copierea listelor și cum transformăm o propoziție într-o listă de cuvinte.
