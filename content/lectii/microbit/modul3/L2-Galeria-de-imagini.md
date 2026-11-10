# LECȚIA 2 — Galeria de imagini
### Imagini, pixeli și bucla `for`
**Modulul 1 · Python pe micro:bit · 2 ore**  
**Code Maker Club · micro:bit Coder**

> Azi desenezi pe LED-uri cu **text**: folosești imaginile gata făcute, îți inventezi propriile imagini și faci animații cu `for`.  
> Proiect: **„Galeria de imagini”** · `Prenume_Nume_MP1_L02`

---

## Ce facem azi
La finalul orei creezi imagini cu `Image("…")`, setezi pixeli cu `display.set_pixel` și arăți mai multe imagini una după alta, cu un `for`. Fiecare ecran din lume e făcut din pixeli: cel de pe telefon, de pe televizor, din jocuri. Azi desenezi cu cei 25 de pixeli ai plăcii și înveți un secret: **un desen e doar un șir de cifre**.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L1: `display`, `sleep`, `while True` |
| 10–25 | Imaginile gata făcute: `Image.HEART`, `Image.DUCK` … |
| 25–55 | Imaginile noastre: `Image("…")` (cifre de 0 la 9) |
| 55–75 | Un pixel: `display.set_pixel` și bucla `for` |
| 75–105 | Galeria (**Minim**) și luminozitatea (**Complet**) |
| 105–120 | Recapitulare, quiz, temă |

Exercițiile B–F și Provocarea sunt pentru cine termină mai repede, sau pentru acasă.

**Ce ai nevoie:** [python.microbit.org](https://python.microbit.org) · placa micro:bit · cablu USB de date

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `Image("00900:09990:…")` | Imagine proprie: 5 rânduri de 5 cifre, despărțite prin `:` | un pom |
| `display.show(lista, delay=…)` | Arată imaginile dintr-o listă, pe rând | `[Image.HEART, Image.DUCK]` |
| `display.set_pixel(x, y, l)` | Aprinde un singur LED (`x`, `y` de la 0 la 4, luminozitate 0–9) | `display.set_pixel(2, 2, 9)` |
| `display.clear()` | Stinge toate LED-urile | între două cadre |
| `for i in range(n):` | Repetă de `n` ori; `i` ia valorile 0, 1, 2, … | `for i in range(5):` |
| `Image.HEART * 0.3` | Aceeași imagine, mai slab luminată | inima care se aprinde |

**Ajutor în editor:** în panoul **Reference** caută `Display`, `Loops` și `Lists (arrays)`.

---

## Pas cu pas

### 1) Imagini gata făcute
Python știe multe imagini: `Image.HEART`, `Image.HAPPY`, `Image.SAD`, `Image.DUCK`, `Image.HOUSE`, `Image.GHOST`, `Image.ARROW_N` (săgeată în sus) … Le scrii mereu cu **litere mari**.

### Exemplul 1 — O imagine gata făcută
```python
from microbit import *

display.show(Image.DUCK)
```

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 1** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 2 — Mai multe imagini într-o listă
O **listă** se scrie între paranteze drepte `[ ]`, cu virgulă între elemente.
```python
from microbit import *

display.show([Image.HEART, Image.HAPPY, Image.DUCK], delay=700)
```
`delay=700` înseamnă că fiecare imagine stă **700 ms**. Afișează cele trei imagini pe rând, o singură dată.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 2** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### 2) Propriile imagini: șirul de cifre
O imagine are **5 rânduri**, iar fiecare rând are **5 cifre**. Rândurile se despart cu `:`. Fiecare cifră e luminozitatea unui LED:

| Cifra | Înseamnă |
|-------|----------|
| `0` | stins |
| `1` … `8` | tot mai luminos |
| `9` | cel mai luminos |

### Exemplul 3 — Un pom
```python
from microbit import *

pom = Image("00900:"
            "09990:"
            "99999:"
            "00900:"
            "00900")
display.show(pom)
```
Fiecare rând al imaginii e scris pe un rând al programului, ca să vezi desenul. Ghilimelele și `:` trebuie să fie **la locul lor**.

**Ce vezi pe placă:**
```text
. . # . .
. # # # .
# # # # #
. . # . .
. . # . .
```

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 3** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 4 — Galeria cu trei imagini
```python
from microbit import *

pom = Image("00900:09990:99999:00900:00900")
casa = Image("00900:09990:99999:99099:99099")
soare = Image("90909:09990:99999:09990:90909")

while True:
    display.show(pom)
    sleep(1000)
    display.show(casa)
    sleep(1000)
    display.show(soare)
    sleep(1000)
```
Numele `pom`, `casa` și `soare` sunt **variabile**: păstrează imaginile ca să le folosim apoi. (Nu folosim `ă`, `î` în numele variabilelor.)

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 4** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### 3) Luminozitate diferită
```python
from microbit import *

gradient = Image("00369:"
                 "00369:"
                 "00369:"
                 "00369:"
                 "00369")
display.show(gradient)
```
Coloanele se luminează tot mai tare spre dreapta.

### 4) Un pixel: `set_pixel(x, y, luminozitate)`
- `x` = coloana, **de la 0 la 4**, de la stânga la dreapta.  
- `y` = rândul, **de la 0 la 4**, de sus în jos.  
- luminozitatea e **de la 0 la 9**.

### Exemplul 5 — Un punct în centru
```python
from microbit import *

display.set_pixel(2, 2, 9)
```

**Ce vezi pe placă:**
```text
. . . . .
. . . . .
. . # . .
. . . . .
. . . . .
```

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 5** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 6 — Bucla `for`
`for i in range(5):` repetă de **5 ori**, iar `i` ia valorile `0, 1, 2, 3, 4`.
```python
from microbit import *

for i in range(5):
    display.set_pixel(i, i, 9)
    sleep(300)
```
Se aprinde diagonala, un LED pe rând.

**Ce vezi pe placă la final:**
```text
# . . . .
. # . . .
. . # . .
. . . # .
. . . . #
```

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 6** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

**Răspunsul la tema din lecția 1.** Numărătoarea inversă de la `9` la `0`, care avea peste 20 de rânduri, se scrie acum în 5:
```python
from microbit import *

for n in range(9, -1, -1):
    display.show(n)
    sleep(1000)
display.show(Image.HAPPY)
```
`range(9, -1, -1)` înseamnă „începe de la 9, oprește-te înainte de -1, scade câte 1”. Ai nevoie de el la **Exercițiul F** de mai jos.

### Exemplul 7 — Apusul soarelui
`display.clear()` stinge toate LED-urile.
```python
from microbit import *

for y in range(5):
    display.clear()
    display.set_pixel(2, y, 9)
    sleep(400)
```
Un punct coboară pe coloana din mijloc: rândul 0, apoi 1, 2, 3, 4.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 7** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 8 — Înmulțim luminozitatea
```python
from microbit import *

display.show(Image.HEART * 0.3)
sleep(1000)
display.show(Image.HEART)
```
`Image.HEART * 0.3` face inima mai **slabă**. Poți înmulți orice imagine.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 8** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 9 — Inima care se aprinde treptat
```python
from microbit import *

for i in range(10):
    display.show(Image.HEART * (i / 9))
    sleep(200)
```
Pentru `i = 0` inima e stinsă, pentru `i = 9` e la fel de luminoasă ca originalul.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 9** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 10 — Galerie cu o listă proprie
```python
from microbit import *

cadre = [
    Image("00000:00000:00900:00000:00000"),
    Image("00000:09990:09090:09990:00000"),
    Image("99999:90009:90009:90009:99999"),
]

while True:
    display.show(cadre, delay=400)
```
Un punct, apoi un pătrat mic, apoi unul mare: o animație cu trei cadre.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 10** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## Greșeli frecvente
1. **„ValueError la `Image(…)`”** — ai pus o literă sau un semn în loc de cifră, sau un rând are altă lungime.  
2. **„Imaginea arată strâmb”** — un rând are mai mult sau mai puțin de 5 cifre.  
3. **„ValueError la `set_pixel`”** — `x` sau `y` e în afara intervalului `0–4`, sau luminozitatea e peste `9`.  
4. **„Nu văd diferența dintre 5 și 9”** — la unele plăci diferența e mică; încearcă `1` față de `9`.  
5. **„Imaginile se schimbă prea repede”** — mărește `delay` sau `sleep`.  
6. **„Programul se oprește după o rundă”** — pune imaginile în `while True:`.

---

## De făcut azi — „Galeria de imagini”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | 3 imagini **desenate de tine** cu `Image("…")`, arătate pe rând, în buclă |
| **Complet** | Minim + a patra imagine + animația „inima care se aprinde” cu `for` |

### Exercițiul A — „Galeria” (obligatoriu)
1. Desenează pe foaie 3 grile 5×5 (un pom, o casă și o față, de exemplu).  
2. Transformă fiecare grilă într-un șir de cifre (`0` = stins, `9` = aprins).  
3. Scrie programul care le arată în buclă, cu `sleep(1000)` între ele.  
4. (Complet) Adaugă imaginea a patra și, după galerie, animația cu `for`.

### Exercițiul B — Ce desen e?
Desenează pe grilă imaginea de mai jos, apoi verifică în placă:
```python
from microbit import *

display.show(Image("90009:09090:00900:09090:90009"))
```

### Exercițiul C — Litera T
Scrie în Python o imagine cu litera **T** (rândul de sus plin, apoi o linie în mijloc în jos) și arată-o pe placă.

### Exercițiul D — Găsește greșelile
Fiecare linie are o greșeală. Spune care e și ce eroare ar da.
```text
display.show(Image("00A00:09990:99999:00900:00900"))
display.set_pixel(5, 0, 9)
display.set_pixel(0, 0, 10)
display.show(Image.heart)
```

### Exercițiul E — Explică
1. Ce înseamnă cifra `9` într-un șir de imagine?  
2. Care e adresa pixelului din colțul din dreapta jos?  
3. De câte ori se repetă `for i in range(5):`?

### Exercițiul F — Numărătoarea cu pas
Scrie un program care numără de la `10` la `0` din 2 în 2 (`10, 8, 6, 4, 2, 0`), câte o secundă pentru fiecare număr. Pentru numere cu două cifre folosește `display.scroll(str(n))`.

**Gata când:**
- [ ] Programul merge pe placă  
- [ ] Ai cel puțin 3 imagini proprii  
- [ ] Folosești `while True:` și `sleep`  
- [ ] Ai încercat `for` cu `set_pixel`  
- [ ] Ai răspunsurile la B–F  

---

## Bonus ★★★ — Provocare: Felicitarea cu tort
*Doar dacă ai terminat Complet.*

Fă o felicitare animată de zi de naștere.

- [ ] Desenezi tu un tort în 3 cadre cu `Image("…")`: același tort, dar flacăra de sus are luminozitate diferită la fiecare cadru (`9`, apoi `4`, apoi `7`), ca să pâlpâie
- [ ] Cadrele sunt într-o listă, arătate cu `display.show(…, delay=…)`, repetate de cel puțin 4 ori cu un `for`
- [ ] La final derulează `"La multi ani!"` (fără diacritice) și apoi numele tău
- [ ] Salvează proiectul ca `Prenume_Nume_MP1_L02_Felicitare`

## Recapitulare pe scurt
1. `Image.NUME` = imagini gata făcute (litere mari).  
2. `Image("…")` = imagine proprie: 5 rânduri × 5 cifre, despărțite prin `:`.  
3. Cifrele `0–9` = luminozitatea.  
4. `display.set_pixel(x, y, luminozitate)` aprinde un LED; `x` și `y` merg de la `0` la `4`.  
5. `for i in range(5):` repetă de 5 ori.  
6. Lista `[a, b, c]` poate fi arătată cu `display.show(lista)`.

**Schema pe scurt (pe foaie):** grilă 5×5 → șir de cifre → `Image("…")` → `display.show(...)` → buclă `while True:`

## Quiz scurt
- Cum desparți rândurile într-un șir `Image`?  
- Ce valori poate avea `x`?  
- Ce face `display.clear()`?  
- Care e diferența dintre `Image.HEART` și `Image.HEART * 0.3`?

## Temă
**O animație cu 4 cadre.** Desenează pe foaie, pe grile 5×5, o mică animație (un fluture care bate din aripi, o floare care se deschide) și scrie șirurile de cifre pentru fiecare cadru. Apoi scrie programul în editor și rulează-l în simulator, fără placă. Salvează-l ca `Prenume_Nume_MP1_L02_Tema`.

## Ce urmează — Lecția 3
Placa începe să **asculte**: citești butoanele A și B și iei decizii cu `if`, `elif` și `else`, ca să construiești un semnalizator de bicicletă.

---

## Răspunsuri

**Exercițiul B:** litera **X**.
```text
# . . . #
. # . # .
. . # . .
. # . # .
# . . . #
```

**Exercițiul C:**
```python
from microbit import *

display.show(Image("99999:00900:00900:00900:00900"))
```

**Exercițiul D:** 1) litera `A` în loc de cifră → `ValueError`. 2) `x = 5` e în afara intervalului `0–4` → `ValueError`. 3) luminozitatea `10` e peste `9` → `ValueError`. 4) `Image.heart` trebuie `Image.HEART` → `AttributeError`.

**Exercițiul E:** 1) luminozitate maximă. 2) `(4, 4)`. 3) De 5 ori (`i` = 0, 1, 2, 3, 4).

**Exercițiul F:**
```python
from microbit import *

for n in range(10, -1, -2):
    display.scroll(str(n))
    sleep(1000)
```

**Bonus ★★★ — Felicitarea cu tort:**

*Schema logicii:*
1. Ai trei imagini cu același tort. Doar pixelul flăcării (rândul de sus, coloana din mijloc) are luminozitatea `9`, apoi `4`, apoi `7`.  
2. Le pui într-o listă `cadre`.  
3. Un `for` cu `range(4)` arată lista de patru ori, cu `delay`, deci flacăra pâlpâie.  
4. La final derulezi urarea și numele.

```python
from microbit import *

T1 = Image("00900:00500:09990:99999:99999")
T2 = Image("00400:00500:09990:99999:99999")
T3 = Image("00700:00500:09990:99999:99999")
cadre = [T1, T2, T3]

for i in range(4):
    display.show(cadre, delay=300)

display.scroll("La multi ani!")
display.scroll("Maria")
```
- Prima cifră a primului rând este flacăra: `9`, `4`, `7`. Restul rândurilor sunt la fel în toate cele trei imagini.  
- `display.show(cadre, delay=300)` arată toată lista, câte o imagine la `300` ms.  
- `range(4)` repetă de patru ori, deci animația are `12` cadre.
