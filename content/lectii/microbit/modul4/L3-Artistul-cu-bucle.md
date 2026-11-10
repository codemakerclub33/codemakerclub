# LECȚIA 3 — Artistul cu bucle
### Desene pe LED-uri, cu `for` în `for`
**Modulul 2 · Python pe micro:bit · 2 ore**  
**Code Maker Club · micro:bit Python Pro**

> Azi placa ta devine **artist**: desenează pe cele 25 de LED-uri o **ramă**, un **X** și un **șah**. Nu aprinzi pixelii unul câte unul: lași **buclele** să o facă pentru tine.  
> Proiect: **„Artistul cu bucle”** · `Prenume_Nume_MP2_L03`

---

## Ce facem azi
La finalul orei folosești `range` cu început, sfârșit și pas, pui o buclă **într-o altă buclă** și alegi cu `if` ce pixeli se aprind. Cu bucle bune, programul rămâne **scurt**: 25 de pixeli se desenează din doar câteva rânduri. La final, **A** schimbă desenul, iar **B** îl face negativ.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap: `for`, `range` și `set_pixel` din Modulul 1 |
| 10–35 | `range` cu pas; `for` în `for` |
| 35–65 | `if` în buclă: rama, X-ul și șahul |
| 65–75 | `while` cu condiție și `break` |
| 75–105 | Artistul cu bucle (**Minim** și **Complet**) |
| 105–120 | Recapitulare, quiz, temă |

Exercițiile B–E și Provocarea sunt pentru cine termină mai repede, sau pentru acasă.

**Ce ai nevoie:** [python.microbit.org](https://python.microbit.org) · placa micro:bit · cablu USB de date

---

## Instrucțiuni noi azi

`for`, `range(n)` și `display.set_pixel(x, y, luminozitate)` le știi din Modulul 1. Azi adăugăm:

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `range(start, stop, pas)` | Numără de la `start` până **înainte** de `stop`, din `pas` în `pas` | `range(0, 5, 2)` dă `0, 2, 4` |
| `for` în `for` | O buclă în interiorul alteia: pentru fiecare rând, toate coloanele | `for y in range(5):` apoi `for x in range(5):` |
| `if x == y or x + y == 4:` | `or` = „sau”: ajunge să fie adevărată **una** dintre condiții | `if x == 0 or x == 4:` |
| `while condiție:` | Repetă **cât timp** condiția e adevărată | `while nivel < 5:` |
| `break` | Iese imediat din buclă | `if button_a.was_pressed(): break` |

**Ajutor în editor:** în panoul **Reference** caută `Loops` și `Logic`.

---

## Pas cu pas

### 1) `range` cu pas
`range(0, 5, 2)` numără `0, 2, 4`. Valoarea de **stop** nu e inclusă. Cu un pas **negativ** numeri înapoi: `range(5, 0, -1)` dă `5, 4, 3, 2, 1`.

### Exemplul 1 — Din 2 în 2
```python
from microbit import *

for x in range(0, 5, 2):
    display.set_pixel(x, 2, 9)
    sleep(400)
```
**Ce vezi pe placă:** se aprind LED-urile din mijloc, pe coloanele `0`, `2` și `4`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 1** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### 2) O buclă într-o altă buclă
Ecranul are **5 rânduri** (`y`) și **5 coloane** (`x`). Cu un `for` pentru rânduri și, **înăuntrul lui**, un `for` pentru coloane, treci prin toți cei 25 de pixeli.

### Exemplul 2 — Umplem ecranul
```python
from microbit import *

for y in range(5):
    for x in range(5):
        display.set_pixel(x, y, 9)
        sleep(60)
```
**Ce vezi pe placă:** ecranul se umple rând cu rând, de sus în jos. Bucla de dentru face `5` pași pentru **fiecare** pas al celei de afară: în total `25`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 2** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### 3) `if` în buclă: alegem pixelii
Dacă pui un `if` în bucla dinăuntru, aprinzi **doar** pixelii care îndeplinesc o condiție. Așa apar desenele.

### Exemplul 3 — Rama
```python
from microbit import *

for y in range(5):
    for x in range(5):
        if x == 0 or x == 4 or y == 0 or y == 4:
            display.set_pixel(x, y, 9)
```
Se aprind pixelii de pe **margini**: prima și ultima coloană, primul și ultimul rând.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 3** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 4 — X-ul
```python
from microbit import *

for y in range(5):
    for x in range(5):
        if x == y or x + y == 4:
            display.set_pixel(x, y, 9)
```
- `x == y` desenează diagonala de la stânga-sus la dreapta-jos: `(0, 0)`, `(1, 1)`, … `(4, 4)`.  
- `x + y == 4` desenează cealaltă diagonală: `(4, 0)`, `(3, 1)`, … `(0, 4)`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 4** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 5 — Șahul
```python
from microbit import *

for y in range(5):
    for x in range(5):
        if (x + y) % 2 == 0:
            display.set_pixel(x, y, 9)
```
`(x + y) % 2 == 0` e adevărat din doi în doi pixeli, ca la tabla de șah. Îți amintești `%`: restul împărțirii la `2` e `0` sau `1`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 5** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### 4) `while` și `break`
`for` repetă de un număr **știut** de ori. `while` repetă **cât timp** o condiție e adevărată. `break` iese din buclă imediat.

### Exemplul 6 — `while` cu condiție
```python
from microbit import *

nivel = 0

while nivel < 5:
    nivel += 1
    display.show(nivel)
    sleep(500)

display.show(Image.YES)
```
**Ce vezi pe placă:** `1`, `2`, `3`, `4`, `5`, apoi bifa. La fiecare tură `nivel` crește, iar când ajunge la `5` condiția devine falsă și bucla se oprește.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 6** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 7 — `break`
```python
from microbit import *

for i in range(100):
    display.show(i % 10)
    sleep(200)
    if button_a.was_pressed():
        break

display.show(Image.YES)
```
Numără până la `99`, dar apăsând **A** oprești numărătoarea și apare bifa.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 7** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### 5) Artistul, pe bucăți
Punem fiecare desen într-o **funcție** care spune dacă pixelul `(x, y)` trebuie aprins. Funcția `deseneaza` parcurge ecranul și aprinde sau stinge fiecare pixel.

### Exemplul 8 — Artistul cu bucle (Minim)
```python
from microbit import *

NR_DESENE = 3

def aprins(nr, x, y):
    if nr == 0:
        return x == 0 or x == 4 or y == 0 or y == 4
    elif nr == 1:
        return x == y or x + y == 4
    else:
        return (x + y) % 2 == 0

def deseneaza(nr):
    for y in range(5):
        for x in range(5):
            if aprins(nr, x, y):
                display.set_pixel(x, y, 9)
            else:
                display.set_pixel(x, y, 0)

desen = 0
deseneaza(desen)

while True:
    if button_a.was_pressed():
        desen = (desen + 1) % NR_DESENE
        deseneaza(desen)
    sleep(100)
```
- `aprins` **întoarce** `True` sau `False`: desenul `0` e rama, `1` e X-ul, iar `2` e șahul.  
- `deseneaza` trece prin toți pixelii și aprinde ce trebuie, iar restul îi stinge.  
- **A** trece la desenul următor, în cerc, cu `%` ca în meniul din L1.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 8** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 9 — Artistul cu bucle (Complet)
Adăugăm **negativul** și un desen la întâmplare:
```python
from microbit import *
import random

NR_DESENE = 3

def aprins(nr, x, y):
    if nr == 0:
        return x == 0 or x == 4 or y == 0 or y == 4
    elif nr == 1:
        return x == y or x + y == 4
    else:
        return (x + y) % 2 == 0

def deseneaza(nr, invers):
    for y in range(5):
        for x in range(5):
            pornit = aprins(nr, x, y)
            if invers:
                pornit = not pornit
            if pornit:
                display.set_pixel(x, y, 9)
            else:
                display.set_pixel(x, y, 0)

desen = 0
invers = False
deseneaza(desen, invers)

while True:
    if button_a.was_pressed():
        desen = (desen + 1) % NR_DESENE
        deseneaza(desen, invers)
    if button_b.was_pressed():
        invers = not invers
        deseneaza(desen, invers)
    if accelerometer.was_gesture("shake"):
        desen = random.randint(0, NR_DESENE - 1)
        deseneaza(desen, invers)
    sleep(100)
```
- **B** schimbă `invers` între `False` și `True`: `not` îl întoarce pe contrariu. Când e `True`, pixelii aprinși se sting și invers.  
- **Scuturarea** alege un desen la întâmplare, de la `0` până la `NR_DESENE - 1`.  
- Ca să adaugi un desen nou, adaugi o ramură în `aprins` și măriți `NR_DESENE`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 9** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## Greșeli frecvente
1. **„Pixelii nu se sting”** — desenul vechi rămâne pe ecran. Stinge pixelii (`0`) sau folosește `display.clear()` înainte să desenezi.  
2. **„IndexError sau ValueError la `set_pixel`”** — `x` și `y` merg doar între `0` și `4`. `range(5)` ajunge la `4`, nu la `5`.  
3. **„Desenul e greșit”** — `x == y` și `x + y == 4` sunt două diagonale. Verifică cu un exemplu: `(1, 1)` și `(3, 1)`.  
4. **„SyntaxError la `==`”** — compari cu `==`, nu cu `=`.  
5. **„Bucla nu se termină”** — în `while`, condiția nu se schimbă niciodată.  
6. **„A nu face nimic”** — apasă scurt; programul citește butoanele o dată pe tură.  
7. **„TypeError la `+`”** — nu poți lipi un text de un număr: `"Nivel " + str(nivel)`.

---

## De făcut azi — „Artistul cu bucle”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | 3 desene (ramă, X, șah) · **A** schimbă desenul, în cerc (Exemplul 8) |
| **Complet** | Minim + **B** face negativul + **scuturare** = desen la întâmplare (Exemplul 9) |

### Exercițiul A — „Artistul cu bucle” (obligatoriu)
Scrie programul din Exemplul 8 (Minim). Pentru **Complet**, adaugă **B** și scuturarea, ca la Exemplul 9.

### Exercițiul B — Ce se întâmplă?
Fără să rulezi: ce valori ia `i` în `range(1, 10, 4)`? De câte ori se execută `set_pixel` în două bucle `for` una într-alta, `range(3)` și `range(4)`?

### Exercițiul C — Rând cu rând
Scrie un program care aprinde **un singur rând** (de exemplu rândul `2`), apoi îl stinge și aprinde rândul `3`, până la rândul `4`, cu o buclă `for`.

### Exercițiul D — Găsește greșelile
Programul are **5 greșeli**. Rescrie-l corect.
```text
for y in range(6):
    for x in range(5)
        if x = y:
            display.set_pixel(x, y)
```

### Exercițiul E — Explică
1. Care e diferența dintre `for` și `while`?  
2. Ce face `break`?  
3. Ce desenează `(x + y) % 2 == 0` și de ce?

**Gata când:**
- [ ] **A** schimbă desenul, în cerc  
- [ ] Rama, X-ul și șahul arată corect  
- [ ] Nu apare nicio eroare de `set_pixel`  
- [ ] Ai testat cu un coleg  
- [ ] Ai răspunsurile la B–E  

**→ Minim când:** un coleg recunoaște toate cele trei desene, fără să-i explici.

---

## Bonus ★★★ — Provocare: Ceasul de nisip
*Doar dacă ai terminat Complet.*

Ecranul se umple, **un pixel pe secundă**, ca un ceas de nisip. Poți opri ceasul la jumătate.

**Ajutor:** numărul `n` al pixelului (de la `0` la `24`) se transformă în coloană și rând: `x = n % 5` și `y = n // 5`. Folosește un `while n < 25:` în care crești `n` la fiecare tură. `//` e împărțirea fără zecimale.

- [ ] Placa umple ecranul cu **un pixel pe secundă**, rând cu rând, de la `n = 0` la `24`
- [ ] Dacă apeși **A** în timpul umplerii, ceasul se oprește și apare `Image.NO`
- [ ] Când se umple tot, apare `Image.HAPPY`
- [ ] **B** golește ecranul și pornește ceasul de la capăt
- [ ] Salvează proiectul ca `Prenume_Nume_MP2_L03_Nisip`

## Recapitulare pe scurt
1. `range(start, stop, pas)`: `stop` nu e inclus.  
2. O buclă în altă buclă repetă de **înmulțit** ori: `5` rânduri × `5` coloane = `25`.  
3. `if` în buclă alege pixelii: `x == y or x + y == 4` desenează un X.  
4. `while` merge cât timp condiția e adevărată, iar `break` iese din buclă.  
5. `not` întoarce un `True` în `False` și invers.

**Schema pe scurt (pe foaie):** `for y` → `for x` → `if` condiție → `set_pixel` · ramă, X, șah · `while` = cât timp · `break` = ieși

## Quiz scurt
- Ce valori are `range(0, 6, 2)`?  
- Câți pași face un `for` în `for` de `3` ori `5`?  
- Când folosești `while` în loc de `for`?  
- Ce desenează `x == y`?

## Temă
**Desenul meu.** Scrie acasă, în editor (merge și în simulator, fără placă), programul din Exemplul 8 și adaugă un **al patrulea desen**, de exemplu **plusul** (`x == 2 or y == 2`). Pune `NR_DESENE = 4`. Salvează-l ca `Prenume_Nume_MP2_L03_Tema`.

## Ce urmează — Lecția 4
Placa învață să **cânte**: faci un metronom care bate ritmul, iar tu alegi viteza cu butoanele.

---

## Răspunsuri

**Exercițiul B:** `range(1, 10, 4)` dă `1, 5, 9`. Două bucle `range(3)` și `range(4)` repetă de `3 × 4 = 12` ori.

**Exercițiul C:**
```python
from microbit import *

for y in range(2, 5):
    display.clear()
    for x in range(5):
        display.set_pixel(x, y, 9)
    sleep(500)
```

**Exercițiul D:** 1) `range(6)` iese din ecran (`y` ajunge la `5`): trebuie `range(5)`. 2) lipsește `:` după `for x in range(5)`. 3) `if x = y` trebuie `if x == y`. 4) `set_pixel(x, y)` are nevoie și de luminozitate: `display.set_pixel(x, y, 9)`. 5) lipsește `from microbit import *` la început.

**Exercițiul E:** 1) `for` repetă de un număr știut de ori sau pentru elementele unei liste; `while` repetă cât timp o condiție e adevărată. 2) Iese imediat din buclă. 3) Desenează un șah: suma `x + y` e pară din doi în doi pixeli, deci pixelii aprinși alternează ca la tabla de șah.
