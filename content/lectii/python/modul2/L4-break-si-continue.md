# LECȚIA 4 — Păzitorul tezaurului
### break și continue
**Modulul 2 · Repetăm, colecționăm, organizăm · 2 ore**  
**Code Maker Club · Python Builder**

> Uneori vrei să **oprești** o buclă înainte de final (ai găsit ce căutai), sau să **sari** peste un pas (nu te interesează). Azi înveți `break` și `continue`.  
> Proiect: **„Păzitorul tezaurului”** · fișier: `Prenume_Nume_P2_L4.py`

---

## Ce facem azi
La finalul orei folosești `break` ca să ieși dintr-o buclă, `continue` ca să sari peste un pas, cauți un lucru într-un șir de numere și verifici dacă un număr este prim. Când cauți o piesă într-o cutie cu 1000 de piese, te oprești când o găsești. La fel, un program nu trebuie să mai verifice restul numerelor după ce a găsit răspunsul. `break` și `continue` fac programele mai rapide și mai ușor de scris.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare L3 |
| 10–30 | `break` (**Exemplele 1–2**) |
| 30–50 | `continue` (**Exemplul 3**) |
| 50–75 | `while True` cu `break` (**Exemplul 4**) |
| 75–95 | Numere prime și încercări limitate (**Exemplele 5–6**) |
| 95–105 | Buclă în buclă (**Exemplul 7**) |
| 105–118 | Mini-proiect (**Exemplul 8**) |
| 118–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `break` | Iese imediat din buclă | `if n == 5: break` |
| `continue` | Sare peste restul pasului și trece la următorul | `if n % 2 == 0: continue` |
| `while True:` + `break` | Buclă care se oprește la comandă | citire până scrii `0` |
| `n % i == 0` | `i` împarte exact `n` (testul pentru număr prim) | `if n % i == 0:` |
| `x in text` | Verifică dacă o literă se află într-un text | `if c in "aeiou":` |

---

## 1. Recapitulare rapidă din L3

- `while condiție:` repetă cât timp condiția e adevărată.
- `while True:` repetă la nesfârșit, până o oprim.
- `for` parcurge un `range`, un text sau o listă.

**Încearcă tu (3 min)**  
- [ ] Scrie un `while` care numără de la 10 la 1  

---

## 2. `break`: ieșim din buclă

### Exemplul 1 — Ne oprim la 5

```python
for n in range(1, 10):
    if n == 5:
        break
    print(n)
print("Am iesit din bucla")
```

**Ieșire:**
```text
1
2
3
4
Am iesit din bucla
```

Când `n` ajunge la 5, `break` oprește **imediat** bucla. Valoarea 5 nu mai este afișată, iar programul continuă cu prima linie de după buclă.

### Exemplul 2 — Căutăm primul multiplu de 7

```python
for n in range(50, 100):
    if n % 7 == 0:
        print("Primul multiplu de 7 dupa 50 este", n)
        break
```

**Ieșire:**
```text
Primul multiplu de 7 dupa 50 este 56
```

Fără `break`, bucla ar continua până la 99 și ar afișa **toți** multiplii. Cu `break`, ne oprim la primul.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 1** (Ne oprim la 5)  
- [ ] Am scris și am rulat **Exemplul 2** (Căutăm primul multiplu de 7)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 3. `continue`: sărim peste un pas

### Exemplul 3 — Sărim peste numerele pare

```python
for n in range(1, 8):
    if n % 2 == 0:
        continue
    print(n)
```

**Ieșire:**
```text
1
3
5
7
```

`continue` spune: „oprește pasul **acesta** și treci la următorul”. Când `n` este par, `print(n)` este sărit.

| Instrucțiune | Ce face |
|--------------|---------|
| `break` | iese **complet** din buclă |
| `continue` | sare la **următorul pas** al buclei |

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 3** (Sărim peste numerele pare)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 4. `while True` cu `break`

### Exemplul 4 — Adunăm până scrii 0

```python
suma = 0
while True:
    numar = int(input("Numar (0 pentru a termina): "))
    if numar == 0:
        break
    suma += numar
print("Suma este", suma)
```

**Ieșire:**
```text
Numar (0 pentru a termina): 5
Numar (0 pentru a termina): 10
Numar (0 pentru a termina): 0
Suma este 15
```

Schema `while True` + `break` este foarte folosită: bucla rulează „la nesfârșit”, iar noi ieșim când avem motiv.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 4** (Adunăm până scrii 0)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 5. Numere prime și încercări limitate

Un număr este **prim** dacă se împarte exact doar la 1 și la el însuși (2, 3, 5, 7, 11, 13…).

### Exemplul 5 — Este prim?

```python
n = int(input("Scrie un numar: "))
prim = True
for d in range(2, n):
    if n % d == 0:
        prim = False
        break
if n < 2:
    prim = False
if prim:
    print(n, "este prim")
else:
    print(n, "nu este prim")
```

**Ieșire:**
```text
Scrie un numar: 17
17 este prim
```

Presupunem că numărul e prim (`prim = True`). Încercăm să-l împărțim la 2, 3, 4… Dacă găsim un divizor, nu e prim și **ne oprim** cu `break`. Variabila `prim` se numește **steag** (flag): ține minte ce am aflat.

### Exemplul 6 — Ghicești în 3 încercări

```python
secret = 7
for incercare in range(1, 4):
    ghici = int(input(f"Incercarea {incercare}/3: "))
    if ghici == secret:
        print("Bravo, ai ghicit!")
        break
    print("Nu e asta.")
else:
    print("Ai pierdut. Numarul era", secret)
```

**Ieșire:**
```text
Incercarea 1/3: 3
Nu e asta.
Incercarea 2/3: 9
Nu e asta.
Incercarea 3/3: 7
Bravo, ai ghicit!
```

Detaliu nou: un `else` scris la **nivelul lui `for`** se execută doar dacă bucla s-a terminat **fără `break`**. Dacă ghiceai, `break` sărea peste el. Dacă epuizai toate încercările, apărea mesajul „Ai pierdut”.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 5** (Este prim?)  
- [ ] Am scris și am rulat **Exemplul 6** (Ghicești în 3 încercări)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 6. Bucle în bucle

### Exemplul 7 — `break` în buclă imbricată

```python
for i in range(3):
    for j in range(3):
        if j == 2:
            break
        print(i, j)
```

**Ieșire:**
```text
0 0
0 1
1 0
1 1
2 0
2 1
```

`break` iese **doar din bucla în care se află** (cea interioară). Bucla de afară continuă normal.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 7** (`break` în buclă imbricată)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 7. Mini-proiect

### Exemplul 8 — Păzitorul tezaurului

```python
parola = "comoara"
incercari = 3
print("Un paznic iti blocheaza drumul spre tezaur.")
print(f"Ai {incercari} incercari sa ghicesti parola.")

deschis = False
for numar in range(1, incercari + 1):
    raspuns = input(f"Incercarea {numar}: ").lower()
    if raspuns == parola:
        deschis = True
        break
    print("Paznicul rade: 'Gresit!'")

print("-" * 25)
if deschis:
    print("Usa se deschide... Ai gasit tezaurul!")
else:
    print("Paznicul te alunga. Mai incearca maine!")
```

**Ieșire:**
```text
Un paznic iti blocheaza drumul spre tezaur.
Ai 3 incercari sa ghicesti parola.
Incercarea 1: aur
Paznicul rade: 'Gresit!'
Incercarea 2: diamant
Paznicul rade: 'Gresit!'
Incercarea 3: comoara
-------------------------
Usa se deschide... Ai gasit tezaurul!
```

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 8** (Păzitorul tezaurului)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## De făcut azi — „Păzitorul tezaurului”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Un `for` cu `break` și unul cu `continue` |
| **Complet** | Minim + un joc cu parolă secretă, 3 încercări și mesaje diferite la câștig și la pierdere |

### Pasul 1 — Minim
- [ ] Un `for` cu `break` și unul cu `continue`  

### Pasul 2 — Complet
Scrie un program care:
1. alege o **parolă secretă** în cod;
2. oferă jucătorului **3 încercări**, cu `for`;
3. oprește bucla cu `break` dacă a ghicit;
4. afișează un mesaj diferit la câștig și la pierdere.

**Gata când:**
- [ ] Programul folosește `break` pentru a ieși când a ghicit  
- [ ] Are exact 3 încercări  
- [ ] Mesajele pentru câștig și pierdere sunt diferite  
- [ ] Ai testat ambele cazuri  
- [ ] Fișierul se numește `Prenume_Nume_P2_L4.py`  

---

## Bonus ★★★ — Provocare: Vânătorul de numere prime
*Doar dacă ai terminat Complet.*

- [ ] Afișează toate numerele **prime** de la 2 la 50  
- [ ] Cere un număr între 1 și 10 **până când** utilizatorul scrie unul corect  
- [ ] Afișează numerele de la 1 la 20, **sărind** multiplii lui 3  
- [ ] Face un joc de ghicit cu indicii „mai mare” / „mai mic” și număr limitat de încercări  

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| `SyntaxError: 'break' outside loop` | Ai pus `break` în afara unei bucle | Folosește-l doar într-un `for` sau `while` |
| Bucla nu se oprește | `break` e într-un `if` care nu e niciodată adevărat | Verifică condiția |
| `continue` într-un `while` face bucla infinită | Contorul se schimbă **după** `continue`, deci linia lui este sărită | Schimbă contorul **înainte** de `continue` |
| `break` iese din bucla greșită | E într-o buclă imbricată | `break` iese doar din bucla cea mai interioară |
| Număr prim greșit pentru 1 sau 0 | Nu ai tratat cazul `n < 2` | Adaugă verificarea `n < 2` |
| `else` apare mereu | `else` e legat de `if`, nu de `for` | Indentează-l la nivelul lui `for` |

---

## Recapitulare pe scurt

- `break` iese **complet** din cea mai apropiată buclă.
- `continue` sare la **pasul următor** al buclei.
- `while True` + `break` = buclă care se oprește la comandă.
- Un `else` după un `for` se execută doar dacă bucla s-a terminat fără `break`.
- Un **steag** (de exemplu `prim = True`) ține minte ce am aflat în buclă.
- Un număr e **prim** dacă are doar doi divizori: 1 și el însuși.

---

## Quiz scurt
- Ce face `break`?  
- Ce face `continue`?  
- Când se execută un `else` după un `for`?  
- La ce folosește un steag, de exemplu `prim = True`?  
- Când este un număr prim?  

---

## Temă
1. Refă **Exemplele 1–8** în Thonny, scrise de mână.  
2. Scrie un program care cere scoruri (între 1 și 10) până scrii `0` și apoi afișează **media**. Sări peste scorurile invalide (mai mari de 10) cu `continue`.  
3. Scrie un joc de ghicit un număr secret între 1 și 20, cu **cel mult 5 încercări**.  
4. **Bonus:** afișează primele 10 numere prime.  
5. **Primul număr divizibil cu 13.** Caută cu un `for` și `break` primul număr mai mare decât 100 care se împarte exact la 13.
6. Salvează totul ca `Tema_P2_L4_Prenume_Nume.py`.

### Exemple pentru acasă
Aceste exemple folosesc exact ce ai învățat azi. Scrie-le în Thonny, rulează-le și schimbă-le după preferințe.

#### Acasă 1 — Nu accept un nume gol

```python
while True:
    nume = input("Cum te cheama? ")
    if nume == "":
        print("Trebuie sa scrii ceva!")
        continue
    break
print("Salut,", nume)
```

**Ieșire:**
```text
Cum te cheama? 
Trebuie sa scrii ceva!
Cum te cheama? Ana
Salut, Ana
```

Dacă numele e gol, afișăm un avertisment și `continue` ne duce înapoi la început, ca să întrebăm din nou. Când numele e valid, ajungem la `break`.

#### Acasă 2 — Media scorurilor, cu validare

```python
total = 0
cate = 0
while True:
    scor = int(input("Scor (0 pentru a termina): "))
    if scor == 0:
        break
    if scor > 10:
        print("Scorul nu poate fi peste 10!")
        continue
    total += scor
    cate += 1
if cate > 0:
    print("Media este", total / cate)
else:
    print("Nu ai introdus niciun scor.")
```

**Ieșire:**
```text
Scor (0 pentru a termina): 8
Scor (0 pentru a termina): 11
Scorul nu poate fi peste 10!
Scor (0 pentru a termina): 9
Scor (0 pentru a termina): 0
Media este 8.5
```

Aici folosim ambele: `continue` sare peste scorurile greșite (nu le adună), iar `break` oprește bucla când scrii `0`.

### Încă două exerciții

**Ce afișează?** Gândește-te, apoi verifică în Thonny:

```python
for i in range(1, 8):
    if i == 3:
        continue
    if i == 6:
        break
    print(i)
print("Gata")
```

**Găsește greșelile.** Programul are 4 greșeli. Rescrie-l corect și explică fiecare corecție:

```text
for n in range(10):
    if n == 5
        break
    print(n)
continue
while True
    nume = input("Nume: ")
    if nume != "":
    break
```

---

## Răspunsuri la bonus

*Uită-te aici doar după ce ai încercat singur. Există mai multe soluții bune; a ta poate arăta diferit.*

### 1. Numerele prime de la 2 la 50

```python
for n in range(2, 51):
    prim = True
    for i in range(2, n):
        if n % i == 0:
            prim = False
            break
    if prim:
        print(n, end=" ")
print()
```

**Ieșire:**
```text
2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 
```

### 2. Număr între 1 și 10, până e corect

```python
while True:
    n = int(input("Un numar intre 1 si 10: "))
    if 1 <= n <= 10:
        break
    print("Nu este bun, mai incearca!")
print("Ai scris", n)
```

**Ieșire:**
```text
Un numar intre 1 si 10: 15
Nu este bun, mai incearca!
Un numar intre 1 si 10: 0
Nu este bun, mai incearca!
Un numar intre 1 si 10: 7
Ai scris 7
```

### 3. De la 1 la 20, fără multiplii lui 3

```python
for n in range(1, 21):
    if n % 3 == 0:
        continue
    print(n, end=" ")
print()
```

**Ieșire:**
```text
1 2 4 5 7 8 10 11 13 14 16 17 19 20 
```

### 4. Joc de ghicit cu încercări limitate

```python
secret = 37
ghicit = False
for incercare in range(1, 6):
    ghici = int(input(f"Incercarea {incercare}: "))
    if ghici == secret:
        print("Bravo!")
        ghicit = True
        break
    elif ghici < secret:
        print("Mai mare!")
    else:
        print("Mai mic!")
if not ghicit:
    print("Ai pierdut. Numarul era", secret)
```

**Ieșire:**
```text
Incercarea 1: 50
Mai mic!
Incercarea 2: 25
Mai mare!
Incercarea 3: 37
Bravo!
```

---
## Ce urmează — Lecția 5
Învățăm **listele**: cutii cu mai multe lucruri, în care adaugi, ștergi și cauți.
