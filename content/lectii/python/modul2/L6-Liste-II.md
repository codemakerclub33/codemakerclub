# LECȚIA 6 — Clasamentul
### Liste II: sortare și liste în liste
**Modulul 2 · Repetăm, colecționăm, organizăm · 2 ore**  
**Code Maker Club · Python Builder**

> Ai învățat să creezi și să modifici liste. Azi mergi mai departe: **sortezi**, **împarți o propoziție în cuvinte**, faci **liste în liste** (tabele) și afli o capcană importantă: cum se **copiază** o listă.  
> Proiect: **„Clasamentul”** · fișier: `Prenume_Nume_P2_L6.py`

---

## Ce facem azi
La finalul orei sortezi liste cu `sort()` și `sorted()`, folosești `split()` și `join()`, lucrezi cu liste de liste și copiezi corect o listă. Clasamentele din jocuri, listele de scoruri și tabelele cu date sunt liste sortate sau liste de liste. Capcana cu copierea listelor îi încurcă și pe programatorii cu experiență, așa că e bine s-o înveți acum.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare L5 |
| 10–35 | Sortare (**Exemplele 1–2**) |
| 35–55 | Lipirea listelor (**Exemplul 3**) |
| 55–75 | `split` și `join` (**Exemplul 4**) |
| 75–95 | Liste de liste și copierea (**Exemplele 5–6**) |
| 95–105 | Funcții utile pe liste (**Exemplul 7**) |
| 105–118 | Mini-proiect (**Exemplul 8**) |
| 118–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `.sort()` | Sortează lista pe loc | `scoruri.sort()` |
| `sorted(lista)` | Dă o listă sortată; originalul rămâne la fel | `sorted(scoruri)` |
| `.split()` | Taie un text în cuvinte | `"a b c".split()` |
| `" ".join(lista)` | Lipește cuvintele într-un singur text | `"-".join(cuvinte)` |
| `lista.copy()` | Face o copie adevărată a listei | `b = a.copy()` |

---

## 1. Recapitulare rapidă din L5

- Liste: `[ ]`, index de la 0, `append`, `insert`, `remove`, `pop`.
- `sum`, `max`, `min`, `len`, `in`.
- Feliile `lista[a:b]`.

**Încearcă tu (3 min)**  
- [ ] Creează o listă cu 4 numere, adaugă încă unul și afișează cel mai mare  

---

## 2. Sortarea

### Exemplul 1 — `sort()` schimbă lista

```python
numere = [5, 2, 9, 1, 7]
numere.sort()
print(numere)
numere.sort(reverse=True)
print(numere)
numere.reverse()
print(numere)
```

**Ieșire:**
```text
[1, 2, 5, 7, 9]
[9, 7, 5, 2, 1]
[1, 2, 5, 7, 9]
```

| Comandă | Ce face |
|---------|---------|
| `lista.sort()` | sortează **crescător**, chiar în lista aceea |
| `lista.sort(reverse=True)` | sortează **descrescător** |
| `lista.reverse()` | doar **inversează** ordinea |

### Exemplul 2 — `sorted()` lasă lista neschimbată

```python
scoruri = [30, 10, 20]
noua = sorted(scoruri)
print(noua)
print(scoruri)
print(sorted(scoruri, reverse=True))
```

**Ieșire:**
```text
[10, 20, 30]
[30, 10, 20]
[30, 20, 10]
```

`sorted(lista)` face o **listă nouă** sortată, iar originalul rămâne cum era. Folosește `sort()` când nu mai ai nevoie de ordinea veche și `sorted()` când vrei să o păstrezi.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 1** (`sort()` schimbă lista)  
- [ ] Am scris și am rulat **Exemplul 2** (`sorted()` lasă lista neschimbată)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 3. Construim și lipim liste

### Exemplul 3 — Lipire și repetare

```python
a = [1, 2, 3]
b = [4, 5]
print(a + b)
print([0] * 5)
print(["ha"] * 3)
```

**Ieșire:**
```text
[1, 2, 3, 4, 5]
[0, 0, 0, 0, 0]
['ha', 'ha', 'ha']
```

Ca la text: `+` lipește două liste, iar `*` o repetă. `[0] * 5` este o scurtătură pentru a crea o listă cu 5 zerouri.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 3** (Lipire și repetare)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 4. Text în listă și listă în text

### Exemplul 4 — `split()` și `join()`

```python
propozitie = "Python este super distractiv"
cuvinte = propozitie.split()
print(cuvinte)
print(len(cuvinte))
print(cuvinte[1])

din_nou = " ".join(cuvinte)
print(din_nou)
print("-".join(cuvinte))
print("1,2,3".split(","))
```

**Ieșire:**
```text
['Python', 'este', 'super', 'distractiv']
4
este
Python este super distractiv
Python-este-super-distractiv
['1', '2', '3']
```

| Comandă | Ce face |
|---------|---------|
| `text.split()` | desparte textul în **cuvinte** (după spații) și dă o **listă** |
| `text.split(",")` | desparte după un alt semn (aici, virgula) |
| `"separator".join(lista)` | lipește elementele listei (care trebuie să fie **texte**) cu separatorul între ele |

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 4** (`split()` și `join()`)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 5. Liste în liste, copiere

### Exemplul 5 — Tabel din liste

```python
tabla = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
print(tabla[0])
print(tabla[1][2])
tabla[2][0] = 0
for rand in tabla:
    print(rand)
```

**Ieșire:**
```text
[1, 2, 3]
6
[1, 2, 3]
[4, 5, 6]
[0, 8, 9]
```

O listă poate conține **alte liste**. Cu `tabla[1][2]` iei rândul de la indexul 1 (`[4, 5, 6]`), apoi elementul de la indexul 2 din el (`6`). Așa se face o **tabelă** (rânduri și coloane).

### Exemplul 6 — Capcana copierii

```python
a = [1, 2, 3]
b = a
b.append(99)
print("a:", a)
print("b:", b)

c = [1, 2, 3]
d = c.copy()
d.append(99)
print("c:", c)
print("d:", d)
```

**Ieșire:**
```text
a: [1, 2, 3, 99]
b: [1, 2, 3, 99]
c: [1, 2, 3]
d: [1, 2, 3, 99]
```

- `b = a` **nu face o copie**: `a` și `b` sunt **două nume pentru aceeași listă**. Dacă schimbi una, se schimbă amândouă!
- `d = c.copy()` face o **copie adevărată**, independentă.

Gândește-te la o telecomandă: `b = a` este ca și cum ai da altcuiva **aceeași telecomandă** a televizorului. `copy()` este ca și cum ai cumpăra una nouă.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 5** (Tabel din liste)  
- [ ] Am scris și am rulat **Exemplul 6** (Capcana copierii)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 6. Funcții utile

### Exemplul 7 — Mai multe despre `index`, `count`, `del`

```python
litere = ["a", "b", "c", "b", "d"]
print(litere.index("c"))
print(litere.count("b"))
del litere[0]
print(litere)
litere.clear()
print(litere)
print(len(litere))
```

**Ieșire:**
```text
2
2
['b', 'c', 'b', 'd']
[]
0
```

| Comandă | Ce face |
|---------|---------|
| `lista.index(x)` | poziția primei apariții a lui `x` |
| `lista.count(x)` | de câte ori apare `x` |
| `del lista[i]` | șterge elementul de pe poziția `i` |
| `lista.clear()` | golește lista |

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 7** (Mai multe despre `index`, `count`, `del`)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 7. Mini-proiect

### Exemplul 8 — Clasamentul

```python
jucatori = []
while True:
    linie = input("Nume si scor (gata pentru a termina): ")
    if linie == "gata":
        break
    parti = linie.split()
    nume = parti[0]
    scor = int(parti[1])
    jucatori.append([scor, nume])

jucatori.sort(reverse=True)
print("\n=== CLASAMENT ===")
for loc in range(len(jucatori)):
    scor = jucatori[loc][0]
    nume = jucatori[loc][1]
    print(f"{loc + 1}. {nume} - {scor} puncte")

print("\nPodium:", ", ".join([j[1] for j in jucatori[:3]]))
scoruri = [j[0] for j in jucatori]
print("Media scorurilor:", sum(scoruri) / len(scoruri))
```

**Ieșire:**
```text
Nume si scor (gata pentru a termina): Ana 50
Nume si scor (gata pentru a termina): Mihai 80
Nume si scor (gata pentru a termina): Sofia 65
Nume si scor (gata pentru a termina): Radu 90
Nume si scor (gata pentru a termina): gata

=== CLASAMENT ===
1. Radu - 90 puncte
2. Mihai - 80 puncte
3. Sofia - 65 puncte
4. Ana - 50 puncte

Podium: Radu, Mihai, Sofia
Media scorurilor: 71.25
```

Idei noi în acest program:
- `[scor, nume]` este o **listă mică** pusă în lista mare. Când sortăm, Python compară mai întâi **scorul**, deci clasamentul iese după scor.
- Construcția `[j[1] for j in jucatori[:3]]` creează o listă nouă dintr-una existentă, într-o singură linie. Este o **listă comprehension**: o scurtătură pentru un `for` cu `append`. O vei întâlni des; deocamdată, poți scrie același lucru cu o buclă obișnuită.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 8** (Clasamentul)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## De făcut azi — „Clasamentul”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Un program care citește scoruri într-o listă și le afișează sortate |
| **Complet** | Minim + nume și scoruri citite, clasament numerotat, podium și medie |

### Pasul 1 — Minim
- [ ] Un program care citește scoruri într-o listă și le afișează sortate  

### Pasul 2 — Complet
Scrie un program care:
1. citește într-o buclă nume și scoruri (de exemplu `Ana 50`), până scrii `gata`;
2. sortează jucătorii de la cel mai mare scor la cel mai mic;
3. afișează clasamentul numerotat;
4. afișează podiumul (primii 3) și media scorurilor.

**Gata când:**
- [ ] Programul citește jucători într-o buclă  
- [ ] Clasamentul e sortat corect  
- [ ] Afișează podiumul și media  
- [ ] Fișierul se numește `Prenume_Nume_P2_L6.py`  

---

## Bonus ★★★ — Provocare: Clasamentul fără repetări
*Doar dacă ai terminat Complet.*

- [ ] Afișează clasamentul **fără** numere duplicate  
- [ ] Citește o propoziție și afișează cuvintele **sortate alfabetic**  
- [ ] Face o **tablă de șah** 3×3 cu liste în liste și afișeaz-o frumos  
- [ ] Găsește al **doilea cel mai mare** scor din listă  

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| `sortate = lista.sort()` dă `None` | `sort()` schimbă lista și nu returnează nimic | `lista.sort()` sau `sortate = sorted(lista)` |
| Schimbi o listă și se schimbă și alta | `b = a` nu copiază | `b = a.copy()` |
| `TypeError: sequence item 0: expected str instance, int found` | `join` cere liste de **texte** | `" ".join(str(x) for x in l)` sau transformă în text |
| `TypeError: '<' not supported between 'str' and 'int'` | Ai amestecat texte cu numere în sortare | Folosește liste cu același tip |
| `IndexError` la `tabla[3][0]` | Rândul 3 nu există | Verifică `len(tabla)` |
| `"a,b".split[","]` | Ai folosit `[ ]` în loc de `( )` | `"a,b".split(",")` |

---

## Recapitulare pe scurt

- `sort()` sortează lista pe loc; `sorted(lista)` face o listă nouă.
- `reverse=True` sortează descrescător.
- `+` lipește liste, `*` le repetă.
- `text.split()` face din text o listă de cuvinte; `" ".join(lista)` face invers.
- O listă poate conține alte liste: `tabla[rand][coloana]`.
- `b = a` nu copiază lista; pentru o copie folosește `a.copy()`.
- `index`, `count`, `del`, `clear` completează uneltele.

---

## Quiz scurt
- Care e diferența dintre `sort()` și `sorted(lista)`?  
- Cum sortezi descrescător?  
- Ce face `text.split()`?  
- De ce `b = a` nu copiază o listă și ce folosești pentru o copie?  
- Cum citești un element dintr-o listă de liste?  

---

## Temă
1. Refă **Exemplele 1–8** în Thonny, scrise de mână.  
2. Citește **5 nume** și afișează-le în ordine alfabetică, apoi în ordine inversă.  
3. Fă o **tabelă de înmulțire 4×4** cu liste în liste și afișeaz-o.  
4. **Bonus:** citește o propoziție și afișează-i cuvintele cu **prima literă mare** (`.capitalize()`), lipite înapoi.  
5. **Cuvintele propoziției.** Citește o propoziție și afișează câte cuvinte are, cuvântul **cel mai lung** (folosește `max` cu `key=len`) și propoziția cu cuvintele în **ordine inversă**.
6. Salvează totul ca `Tema_P2_L6_Prenume_Nume.py`.

### Exemple pentru acasă
Aceste exemple folosesc exact ce ai învățat azi. Scrie-le în Thonny, rulează-le și schimbă-le după preferințe.

#### Acasă 1 — Sortăm texte

```python
nume = ["Mihai", "Ana", "Zoe", "Dan"]
nume.sort()
print(nume)
```

**Ieșire:**
```text
['Ana', 'Dan', 'Mihai', 'Zoe']
```

Textele se sortează în **ordine alfabetică**. Atenție: literele **mari** se sortează înaintea celor mici (`"Zoe"` vine înaintea lui `"ana"`). Dacă amesteci, transformă mai întâi totul în litere mici.

#### Acasă 2 — Construim o listă cu `for`

```python
patrate = []
for n in range(1, 6):
    patrate.append(n * n)
print(patrate)

lista_range = list(range(1, 6))
print(lista_range)
```

**Ieșire:**
```text
[1, 4, 9, 16, 25]
[1, 2, 3, 4, 5]
```

Pornim de la o listă goală și o umplem cu `append`. Funcția `list(...)` transformă un `range` într-o listă.

### Încă două exerciții

**Ce afișează?** Gândește-te, apoi verifică în Thonny:

```python
l = [4, 1, 3]
m = l
m.append(0)
print(l)
n = sorted(l)
print(n)
print(l)
print("a-b-c".split("-"))
print(["x", "y"] * 2)
```

**Găsește greșelile.** Programul are 4 greșeli. Rescrie-l corect și explică fiecare corecție:

```text
scoruri = [9, 7, 10]
sortate = scoruri.sort()
print(sortate[0])
a = [1, 2]
b = a
b.append(3)
print(a == [1, 2])
print(" ".join([1, 2, 3]))
print("a,b".split[","])
```

---

## Răspunsuri la bonus

*Uită-te aici doar după ce ai încercat singur. Există mai multe soluții bune; a ta poate arăta diferit.*

### 1. Clasament fără duplicate

```python
scoruri = [50, 80, 50, 90, 80]
unice = []
for s in scoruri:
    if s not in unice:
        unice.append(s)
unice.sort(reverse=True)
print(unice)
```

**Ieșire:**
```text
[90, 80, 50]
```

### 2. Cuvintele sortate alfabetic

```python
propozitie = input("Scrie o propozitie: ")
cuvinte = propozitie.split()
cuvinte.sort()
print(" ".join(cuvinte))
```

**Ieșire:**
```text
Scrie o propozitie: mere pere ananas banane
ananas banane mere pere
```

### 3. Tabla de șah 3×3

```python
tabla = [["X", "O", "X"],
         ["O", "X", "O"],
         ["X", "O", "X"]]
for rand in tabla:
    print(" ".join(rand))
```

**Ieșire:**
```text
X O X
O X O
X O X
```

### 4. Al doilea cel mai mare scor

```python
scoruri = [50, 80, 90, 70]
ordonate = sorted(scoruri)
print(ordonate[-2])
```

**Ieșire:**
```text
80
```

---
## Ce urmează — Lecția 7
Învățăm **dicționarele**: cutii în care nu cauți după număr, ci după **nume**, ca într-o agendă de telefon.
