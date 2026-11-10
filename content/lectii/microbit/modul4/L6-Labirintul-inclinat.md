# LECȚIA 6 — Labirintul înclinat
### Hărți din text și o bilă care se rostogolește
**Modulul 2 · Python pe micro:bit · 2 ore**  
**Code Maker Club · micro:bit Python Pro**

> Placa devine un **labirint**: înclini placa, iar o bilă luminoasă se rostogolește printre pereți până la ieșire. Hărțile sunt scrise ca **text**, iar tu înveți cum un program citește o hartă.  
> Proiect: **„Labirintul înclinat”** · `Prenume_Nume_MP2_L06`

---

## Ce facem azi
La finalul orei ții o **hartă** ca listă de texte, citești **înclinarea** plăcii și muți o bilă fără să treacă prin **pereți**. Jocurile și aplicațiile păstrează hărțile ca date. Dacă harta e doar text, o schimbi ușor, fără să rescrii programul. Azi vezi cum **datele** și **codul** lucrează împreună.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap: `for` în `for` din L3 și accelerometrul din L1 |
| 10–35 | Harta ca text; înclinarea plăcii |
| 35–75 | Bila și pereții (**Minim**) |
| 75–105 | Niveluri și reluare (**Complet**) |
| 105–120 | Recapitulare, quiz, temă |

Exercițiile B–E și Provocarea sunt pentru cine termină mai repede, sau pentru acasă.

**Ce ai nevoie:** [python.microbit.org](https://python.microbit.org) · placa micro:bit · cablu USB de date

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `harta = ["S....", "####."]` | O hartă: o listă de texte, câte unul pe rând | un text are `5` caractere |
| `harta[y][x]` | Caracterul din rândul `y`, coloana `x` (**întâi rândul!**) | `harta[0][0]` este `"S"` |
| `return 1, 0` | O funcție întoarce **două valori** deodată | `dx, dy = inclinare()` |
| `0 <= nx <= 4` | Verifică dacă `nx` e între `0` și `4` | `if 0 <= nx <= 4:` |
| `!=` | „Diferit de” | `harta[ny][nx] != "#"` |

**Ajutor în editor:** în panoul **Reference** caută `Lists (arrays)` și `Gestures`.

---

## Pas cu pas

### 1) Harta ca text
Ecranul are `5` rânduri a câte `5` puncte, deci harta are **5 texte** a câte **5 caractere**:

| Caracter | Înseamnă |
|----------|----------|
| `#` | perete |
| `.` | loc liber |
| `S` | start (mereu în colțul din stânga-sus) |
| `E` | ieșire |

```text
S . . . .
# # # # .
. . . . .
. # # # #
E . . . .
```
Citim un caracter cu `harta[y][x]`: **întâi rândul** (`y`), **apoi coloana** (`x`).

### Exemplul 1 — O hartă în Python
```python
from microbit import *

harta = [
    "S....",
    "####.",
    ".....",
    ".####",
    "E....",
]

display.scroll(harta[0][0])
display.scroll(harta[4][0])
display.scroll(harta[1][0])
```
**Ce vezi pe placă:** `S`, `E`, `#`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 1** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 2 — Desenăm harta
Parcurgem toate rândurile și coloanele, ca în L3:
```python
from microbit import *

harta = [
    "S....",
    "####.",
    ".....",
    ".####",
    "E....",
]

def deseneaza(h):
    for y in range(5):
        for x in range(5):
            c = h[y][x]
            if c == "#":
                display.set_pixel(x, y, 4)
            elif c == "E":
                display.set_pixel(x, y, 7)
            else:
                display.set_pixel(x, y, 0)

deseneaza(harta)
sleep(3000)
```
**Ce vezi pe placă:** pereții (slab luminoși) și ieșirea (mai puternică).

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 2** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### 2) Înclinarea plăcii
Placa are un accelerometru: `accelerometer.get_x()` e **pozitiv** când o înclini spre **dreapta** și negativ spre stânga, iar `get_y()` e pozitiv când o înclini **spre tine**. Din înclinare vrem o **direcție**: `dx` (stânga sau dreapta) și `dy` (sus sau jos). O funcție poate **întoarce două valori** deodată.

### Exemplul 3 — Funcția `inclinare`
```python
from microbit import *

PRAG = 300

def inclinare():
    ax = accelerometer.get_x()
    ay = accelerometer.get_y()
    if ax > PRAG:
        return 1, 0
    if ax < -PRAG:
        return -1, 0
    if ay > PRAG:
        return 0, 1
    if ay < -PRAG:
        return 0, -1
    return 0, 0

for i in range(30):
    dx, dy = inclinare()
    display.scroll(str(dx) + str(dy), delay=60)
    sleep(100)
```
- `dx, dy = inclinare()` **despachetează** cele două valori.  
- `1` la `dy` înseamnă „în jos pe ecran”, iar `-1` „în sus”.  
- Placa dreaptă dă `0` și `0`. Înclin-o mai mult de `PRAG`, ca să se schimbe.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 3** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### 3) Pereții
Înainte să mutăm bila, **verificăm locul nou**: dacă e perete sau iese din ecran, nu ne mișcăm. Mai întâi `0 <= nx <= 4` (altfel harta nu are locul acela), apoi `harta[ny][nx] != "#"`.

### Exemplul 4 — Verificăm locul nou
```python
from microbit import *

harta = [
    "S....",
    "####.",
    ".....",
    ".####",
    "E....",
]

x = 0
y = 0

nx = x
ny = y + 1
if 0 <= nx <= 4 and 0 <= ny <= 4 and harta[ny][nx] != "#":
    y = ny
    display.show(Image.YES)
else:
    display.show(Image.NO)
sleep(1500)
```
Sub `S` e un `#`, deci apare `NO`. Schimbă `ny = y + 1` în `ny = y` și `nx = x + 1`: locul din dreapta e liber, deci apare `YES`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 4** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 5 — Labirintul (Minim)
```python
from microbit import *

PRAG = 300

harta = [
    "S....",
    "####.",
    ".....",
    ".####",
    "E....",
]

def inclinare():
    ax = accelerometer.get_x()
    ay = accelerometer.get_y()
    if ax > PRAG:
        return 1, 0
    if ax < -PRAG:
        return -1, 0
    if ay > PRAG:
        return 0, 1
    if ay < -PRAG:
        return 0, -1
    return 0, 0

def deseneaza(h, bx, by, vizibil):
    for y in range(5):
        for x in range(5):
            c = h[y][x]
            if c == "#":
                display.set_pixel(x, y, 4)
            elif c == "E":
                display.set_pixel(x, y, 7)
            else:
                display.set_pixel(x, y, 0)
    if vizibil:
        display.set_pixel(bx, by, 9)

x = 0
y = 0
tura = 0

while True:
    dx, dy = inclinare()
    nx = x + dx
    ny = y + dy
    if 0 <= nx <= 4 and 0 <= ny <= 4 and harta[ny][nx] != "#":
        x = nx
        y = ny

    if harta[y][x] == "E":
        display.show(Image.YES)
        sleep(1500)
        x = 0
        y = 0

    tura += 1
    deseneaza(harta, x, y, tura % 2 == 0)
    sleep(150)
```
- Bila **clipește** (`tura % 2 == 0`), ca să o deosebești de ieșire.  
- Se mută doar dacă locul nou e **în ecran** și **nu e perete**.  
- Când ajunge pe `E`, apare bifa și bila revine la start.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 5** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 6 — Labirintul (Complet)
O **listă de hărți**, trecerea la nivelul următor și **A** care reia nivelul. Toate hărțile au `S` în colțul din stânga-sus, deci bila pornește mereu din `x = 0`, `y = 0`:
```python
from microbit import *

PRAG = 300

NIVELE = [
    [
        "S....",
        "####.",
        ".....",
        ".####",
        "E....",
    ],
    [
        "S#..E",
        ".#.#.",
        "...#.",
        "##.#.",
        ".....",
    ],
    [
        "S.#..",
        "#.#.#",
        "....#",
        ".##..",
        "..##E",
    ],
]

def inclinare():
    ax = accelerometer.get_x()
    ay = accelerometer.get_y()
    if ax > PRAG:
        return 1, 0
    if ax < -PRAG:
        return -1, 0
    if ay > PRAG:
        return 0, 1
    if ay < -PRAG:
        return 0, -1
    return 0, 0

def deseneaza(h, bx, by, vizibil):
    for y in range(5):
        for x in range(5):
            c = h[y][x]
            if c == "#":
                display.set_pixel(x, y, 4)
            elif c == "E":
                display.set_pixel(x, y, 7)
            else:
                display.set_pixel(x, y, 0)
    if vizibil:
        display.set_pixel(bx, by, 9)

nivel = 0
harta = NIVELE[nivel]
x = 0
y = 0
tura = 0

while True:
    if button_a.was_pressed():
        x = 0
        y = 0

    dx, dy = inclinare()
    nx = x + dx
    ny = y + dy
    if 0 <= nx <= 4 and 0 <= ny <= 4 and harta[ny][nx] != "#":
        x = nx
        y = ny

    if harta[y][x] == "E":
        display.show(Image.YES)
        sleep(1200)
        nivel += 1
        if nivel >= len(NIVELE):
            display.show(Image.HEART)
            sleep(1200)
            nivel = 0
        harta = NIVELE[nivel]
        x = 0
        y = 0

    tura += 1
    deseneaza(harta, x, y, tura % 2 == 0)
    sleep(150)
```
- `NIVELE` e o listă de hărți, iar `NIVELE[nivel]` alege harta curentă.  
- **A** pune bila înapoi la start (dacă te blochezi).  
- După ultimul nivel apare inima și jocul reîncepe de la primul.  
- Ca să adaugi un nivel, pui încă o hartă în listă. Codul nu se schimbă.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 6** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## Greșeli frecvente
1. **„Bila trece prin pereți”** — nu ai verificat `harta[ny][nx] != "#"` înainte de mutare.  
2. **„IndexError”** — `nx` sau `ny` ies din `0 … 4`. Verifică întâi `0 <= nx <= 4`, apoi harta (ordinea contează).  
3. **„Harta e răsturnată”** — ai scris `harta[x][y]`; trebuie `harta[y][x]` (rând, apoi coloană).  
4. **„Bila fuge prea repede”** — mărește `sleep(150)` sau pragul.  
5. **„Nu se mișcă”** — placa e prea dreaptă; înclin-o mai mult sau scade `PRAG`.  
6. **„Nu pot ieși din nivel”** — harta nu are drum spre `E`. Verifică harta pe hârtie.  
7. **„ValueError la despachetare”** — o ramură a funcției întoarce o singură valoare; toate trebuie să întoarcă două (`return 0, 0`).

---

## De făcut azi — „Labirintul înclinat”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | 1 nivel · bila se mișcă · pereții o opresc · bifă la ieșire (Exemplul 5) |
| **Complet** | Minim + 3 niveluri + **A** pune bila la start (Exemplul 6) |

### Exercițiul A — „Labirintul” (obligatoriu)
Scrie programul din Exemplul 5 (Minim). Schimbă **harta** (cu `#`, `.`, `S`, `E`). Atenție: trebuie să existe un **drum** de la `S` la `E`! Pentru **Complet**, folosește Exemplul 6.

### Exercițiul B — Citește harta
Pentru harta din Exemplul 1 (`"S...."`, `"####."`, `"....."`, `".####"`, `"E...."`): ce dă `harta[2][4]`? Dar `harta[3][0]`? Dar `harta[4][0]`?

### Exercițiul C — Un nivel nou
Desenează pe hârtie un labirint `5 × 5` și scrie-l ca listă de `5` texte. Adaugă-l în `NIVELE`. Poate un coleg să găsească un drum de la `S` la `E`?

### Exercițiul D — Găsește greșelile
Programul are **6 greșeli**. Rescrie-l corect.
```text
harta = ["S....", "####.", ".....", ".####", "E...."]
x = 0
y = 0

while True:
    if accelerometer.get_x > 300:
        x = x + 1
    if harta[x][y] == "#":
        x = x - 1
    display.set_pixel(x, y, 9)
```

### Exercițiul E — Explică
1. De ce scriem `harta[y][x]` și nu `harta[x][y]`?  
2. Ce face `dx, dy = inclinare()`?  
3. De ce verificăm `0 <= nx <= 4` **înainte** de `harta[ny][nx]`?

**Gata când:**
- [ ] Bila se mișcă pe înclinare  
- [ ] Pereții o opresc  
- [ ] Ieșirea e recunoscută  
- [ ] Ai testat cu un coleg  
- [ ] Ai răspunsurile la B–E  

**→ Minim când:** un coleg rezolvă labirintul fără ajutor.

---

## Bonus ★★★ — Provocare: Labirintul cu chei și capcane
*Doar dacă ai terminat Complet.*

Un singur nivel mai greu: ieșirea e **închisă** până iei **cheia**, iar **capcanele** te trimit la start.

**Ajutor:** o hartă din texte nu se poate schimba, deci nu șterge cheia din hartă. Ține minte într-o variabilă `are_cheie = False` dacă ai luat-o și desenează cheia doar cât timp `are_cheie` e `False`. Ieșirea se deschide doar dacă `are_cheie` e `True`. Timpul în secunde: `(running_time() - start) // 1000`.

- [ ] Harta are `K` (cheia), `X` (capcana) și `E`, iar de la `S` există un drum spre `K` și de la `K` spre `E`
- [ ] Bila nu poate intra pe `E` până nu a luat cheia
- [ ] Când bila ajunge pe `X`, se întoarce la start și pierde cheia
- [ ] Când ajunge pe `E` cu cheia, apare bifa, apoi timpul în secunde, iar jocul reîncepe
- [ ] Salvează proiectul ca `Prenume_Nume_MP2_L06_Chei`

## Recapitulare pe scurt
1. Harta e o listă de `5` texte; `harta[y][x]` = rând, apoi coloană.  
2. `accelerometer.get_x()` și `get_y()` dau înclinarea.  
3. O funcție poate **întoarce două valori**: `dx, dy = inclinare()`.  
4. Mutăm doar dacă locul nou e în ecran și nu e perete.  
5. Datele (hărțile) sunt separate de cod: un nivel nou e doar o hartă nouă.

**Schema pe scurt (pe foaie):** `harta[y][x]` · înclinare → `dx, dy` · loc nou: în ecran și nu perete · `E` → nivelul următor

## Quiz scurt
- Ce înseamnă `#` pe hartă?  
- Ce primești din `inclinare()`?  
- Ce se întâmplă dacă locul nou e `#`?  
- Cum treci la nivelul următor?

## Temă
**Harta mea.** Scrie acasă, în editor (merge și în simulator, fără placă), un program care **desenează o hartă făcută de tine**, ca în Exemplul 2: `5` texte cu `#`, `.`, `S` și `E`. Salvează-l ca `Prenume_Nume_MP2_L06_Tema`.

## Ce urmează — Lecția 7
Placa învață să lucreze cu **text**: tai mesaje în bucăți și le ascunzi într-un **cifru**, ca să faci mesaje secrete.

---

## Răspunsuri

**Exercițiul B:** `harta[2][4] = "."`, `harta[3][0] = "."`, `harta[4][0] = "E"`.

**Exercițiul C:** Orice hartă cu exact un `S` (în colțul din stânga-sus), un `E` și un drum liber între ele. Verificați pe hârtie, sau cu degetul, înainte de a o introduce.

**Exercițiul D:** 1) lipsește `from microbit import *`. 2) `accelerometer.get_x` nu are paranteze: `accelerometer.get_x()`. 3) `harta[x][y]` trebuie `harta[y][x]`. 4) nu se verifică marginile ecranului (`x` poate depăși `4`). 5) mutarea trebuie verificată **înainte** (pe locul nou), nu după. 6) în buclă lipsesc `sleep` și ștergerea ecranului.

**Exercițiul E:** 1) Pentru că harta e o listă de **rânduri**: întâi alegem rândul (`y`), apoi coloana din rând (`x`). 2) Primește cele două valori întoarse și le pune în `dx` și `dy`. 3) Altfel am cere un loc care nu există și ar apărea `IndexError`.

**Bonus ★★★ — Labirintul cu chei și capcane:**

*Schema logicii:*
1. Harta are `K`, `X` și `E`. Variabila `are_cheie` începe cu `False`.  
2. Calculezi locul nou. Bila intră în el dacă e în ecran, nu e `#` și nu e `E` fără cheie.  
3. Pe `K` pui `are_cheie = True`. Pe `X` te întorci la start și pui `are_cheie = False`.  
4. Pe `E` (cu cheia) arăți bifa, apoi timpul în secunde, apoi reîncepi și repornești cronometrul.

```python
from microbit import *

PRAG = 300

harta = [
    "S.K..",
    "#.#X.",
    "..#..",
    ".X#..",
    "...#E",
]

def inclinare():
    ax = accelerometer.get_x()
    ay = accelerometer.get_y()
    if ax > PRAG:
        return 1, 0
    if ax < -PRAG:
        return -1, 0
    if ay > PRAG:
        return 0, 1
    if ay < -PRAG:
        return 0, -1
    return 0, 0

def deseneaza(bx, by, vizibil):
    for y in range(5):
        for x in range(5):
            c = harta[y][x]
            if c == "#":
                display.set_pixel(x, y, 4)
            elif c == "E":
                display.set_pixel(x, y, 7)
            elif c == "K" and not are_cheie:
                display.set_pixel(x, y, 6)
            elif c == "X":
                display.set_pixel(x, y, 2)
            else:
                display.set_pixel(x, y, 0)
    if vizibil:
        display.set_pixel(bx, by, 9)

x = 0
y = 0
are_cheie = False
start = running_time()
tura = 0

while True:
    dx, dy = inclinare()
    nx = x + dx
    ny = y + dy
    if 0 <= nx <= 4 and 0 <= ny <= 4:
        loc = harta[ny][nx]
        if loc != "#" and (loc != "E" or are_cheie):
            x = nx
            y = ny

    loc = harta[y][x]
    if loc == "K":
        are_cheie = True
    elif loc == "X":
        x = 0
        y = 0
        are_cheie = False
    elif loc == "E":
        secunde = (running_time() - start) // 1000
        display.show(Image.YES)
        sleep(1200)
        display.scroll(str(secunde) + "s")
        x = 0
        y = 0
        are_cheie = False
        start = running_time()

    tura += 1
    deseneaza(x, y, tura % 2 == 0)
    sleep(150)
```
- `loc != "E" or are_cheie` înseamnă: intri pe `E` doar dacă ai cheia (iar locurile care nu sunt `E` sunt libere).  
- Cheia se desenează doar cât `are_cheie` e `False`, deci „dispare” fără să schimbi harta.  
- Capcana `X` pune bila la start și **pierde** cheia, ca să trebuiască s-o iei din nou.  
- Cronometrul pornește la început și se repornește după fiecare ieșire.
