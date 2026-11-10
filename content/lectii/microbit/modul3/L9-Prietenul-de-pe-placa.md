# LECȚIA 9 — Prietenul de pe placă
### Stări, timp și funcții
**Modulul 1 · Python pe micro:bit · 2 ore**  
**Code Maker Club · micro:bit Coder**

> Azi creezi **Pixi**, un animal de companie care trăiește pe placa ta! Îi e foame, se joacă, doarme când se face întuneric și își arată starea pe ecran. Este **proiectul final** al modulului.  
> Proiect: **„Prietenul de pe placă”** · `Prenume_Nume_MP1_L09`

---

## Ce facem azi
La finalul orei ai un program Python cu **stări**, **senzori**, **butoane**, **timp** și **funcții**. Aproape orice joc sau aplicație ține minte **stări** (cât de flămând, cât de vesel) și le schimbă după ce face omul. Azi pui împreună tot ce ai învățat în modul: variabile, decizii, senzori, funcții.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L8: `global`, funcții |
| 10–25 | Planul lui Pixi: stări și reguli |
| 25–60 | Fața lui Pixi și Pixi **Minim** |
| 60–95 | Timp, somn și ecranul de stare (**Complet**) |
| 95–110 | Test cu un coleg, îmbunătățiri |
| 110–120 | Recapitulare, quiz, temă |

Exercițiile B–E și Provocarea sunt pentru cine termină mai repede, sau pentru acasă.

**Ce ai nevoie:** [python.microbit.org](https://python.microbit.org) · placa micro:bit · cablu USB de date

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `running_time()` | Milisecundele de când a pornit placa; măsoară timpul fără `sleep` lung | `acum = running_time()` |
| `return imagine` | O funcție care **întoarce** o imagine, ca s-o arăți cu `display.show` | `display.show(fata())` |
| `pass` | „Nu fac nimic”; ține locul unui rând obligatoriu | `if doarme(): pass` |
| `Image(5, 5)` | O imagine goală, pe care o desenezi cu `set_pixel` | `img = Image(5, 5)` |
| `or` | „sau”: e adevărat dacă măcar una e adevărată | `foame >= 4 or fericire <= 1` |

**Ajutor în editor:** în panoul **Reference** caută `Images`, `Light level` și `Accelerometer`. Funcția `limiteaza` o știi din lecția 7.

---

## Pas cu pas

### 1) Planul lui Pixi
Pixi are **două stări**, fiecare între `0` și `5`:

| Variabilă | 0 înseamnă | 5 înseamnă |
|-----------|-----------|-----------|
| `foame` | sătul | foarte flămând |
| `fericire` | trist | foarte vesel |

Regulile:
- **A** = hrănești → `foame` scade cu 2.  
- **B** = te joci → `fericire` crește cu 1, dar `foame` crește cu 1. Dacă Pixi e prea flămând (`foame >= 4`), nu vrea să se joace.  
- Din când în când îi vine foame singur.  
- Pe **întuneric** doarme.  
- **Scuturat** se sperie.  
- **A+B** arată starea.

### Exemplul 1 — Fața lui Pixi
O funcție care **alege fața** după stări. Valorile le punem la început, ca să testăm:
```python
from microbit import *

foame = 1
fericire = 5

def fata():
    if foame >= 4 or fericire <= 1:
        return Image.SAD
    elif foame >= 3 or fericire <= 2:
        return Image.MEH
    elif fericire >= 4:
        return Image.HAPPY
    else:
        return Image.SMILE

display.show(fata())
sleep(1500)

foame = 4
display.show(fata())
sleep(1500)
```
**Ce vezi pe placă:** întâi o față veselă, apoi, cu `foame = 4`, una tristă.

> Funcția **returnează** o imagine (`return`), iar `display.show(...)` o afișează.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 1** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 2 — Timpul trece
Ca să-i vină foame singur, ne uităm la ceas. `running_time()` dă **milisecundele** de când a pornit placa.
```python
from microbit import *

foame = 0
ultima = running_time()
INTERVAL = 4000

while True:
    acum = running_time()
    if acum - ultima >= INTERVAL:
        ultima = acum
        foame = min(5, foame + 1)
        display.scroll(str(foame))
    sleep(100)
```
La fiecare **4 secunde** `foame` crește cu 1, până la 5.

> De ce nu folosim `sleep(4000)`? Pentru că atunci placa **nu ar mai vedea butoanele** 4 secunde. Cu `running_time()` programul rămâne atent tot timpul.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 2** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 3 — Pixi doarme
```python
from microbit import *

PRAG_INTUNERIC = 20

def doarme():
    return display.read_light_level() < PRAG_INTUNERIC

while True:
    if doarme():
        display.show(Image.ASLEEP)
    else:
        display.show(Image.HAPPY)
    sleep(200)
```
Acoperă placa cu mâna: Pixi adoarme. Dacă lumina ambientală e mică, schimbă pragul.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 3** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 4 — Ecranul de stare
Un mic grafic: **prima coloană** arată `foame`, **ultima** arată `fericire`.
```python
from microbit import *

foame = 3
fericire = 4

def ecran_stare():
    img = Image(5, 5)
    for y in range(foame):
        img.set_pixel(0, 4 - y, 9)
    for y in range(fericire):
        img.set_pixel(4, 4 - y, 9)
    return img

display.show(ecran_stare())
sleep(2000)
```
**Ce vezi pe placă:** o coloană cu 3 LED-uri în stânga și una cu 4 în dreapta.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 4** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 5 — Pixi Minim
```python
from microbit import *

foame = 2
fericire = 3

def limiteaza(x, mic, mare):
    return max(mic, min(mare, x))

def fata():
    if foame >= 4 or fericire <= 1:
        return Image.SAD
    elif foame >= 3 or fericire <= 2:
        return Image.MEH
    elif fericire >= 4:
        return Image.HAPPY
    else:
        return Image.SMILE

display.show(fata())

while True:
    a = button_a.was_pressed()
    b = button_b.was_pressed()

    if a:
        foame = limiteaza(foame - 2, 0, 5)
        display.show(Image.PACMAN)
        sleep(800)
    elif b:
        if foame >= 4:
            display.show(Image.NO)
            sleep(800)
        else:
            fericire = limiteaza(fericire + 1, 0, 5)
            foame = limiteaza(foame + 1, 0, 5)
            display.show(Image.DUCK)
            sleep(800)

    display.show(fata())
    sleep(100)
```
Observă că **funcțiile doar citesc** `foame` și `fericire`. De aceea nu au nevoie de `global`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 5** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 6 — Pixi Complet
Adăugăm timpul, somnul, scuturarea și ecranul de stare:
```python
from microbit import *

foame = 2          # 0 = satul, 5 = foarte flamand
fericire = 3       # 0 = trist, 5 = foarte vesel
ultima = running_time()
INTERVAL = 4000
PRAG_INTUNERIC = 20

def limiteaza(x, mic, mare):
    return max(mic, min(mare, x))

def doarme():
    return display.read_light_level() < PRAG_INTUNERIC

def fata():
    if doarme():
        return Image.ASLEEP
    elif foame >= 4 or fericire <= 1:
        return Image.SAD
    elif foame >= 3 or fericire <= 2:
        return Image.MEH
    elif fericire >= 4:
        return Image.HAPPY
    else:
        return Image.SMILE

def ecran_stare():
    img = Image(5, 5)
    for y in range(foame):
        img.set_pixel(0, 4 - y, 9)
    for y in range(fericire):
        img.set_pixel(4, 4 - y, 9)
    return img

def trece_timpul():
    global foame, fericire, ultima
    acum = running_time()
    if acum - ultima >= INTERVAL:
        ultima = acum
        foame = limiteaza(foame + 1, 0, 5)
        if foame >= 4:
            fericire = limiteaza(fericire - 1, 0, 5)

display.show(fata())

while True:
    a = button_a.was_pressed()
    b = button_b.was_pressed()
    scuturat = accelerometer.was_gesture("shake")

    if doarme():
        pass                          # cand doarme, nu se intampla nimic
    elif a and b:
        display.show(ecran_stare())
        sleep(2000)
    elif a:
        foame = limiteaza(foame - 2, 0, 5)
        display.show(Image.PACMAN)
        sleep(800)
    elif b:
        if foame >= 4:
            display.show(Image.NO)
            sleep(800)
        else:
            fericire = limiteaza(fericire + 1, 0, 5)
            foame = limiteaza(foame + 1, 0, 5)
            display.show(Image.DUCK)
            sleep(800)
    elif scuturat:
        fericire = limiteaza(fericire - 1, 0, 5)
        display.show(Image.SURPRISED)
        sleep(800)
    else:
        trece_timpul()

    display.show(fata())
    sleep(100)
```
Cum funcționează:
- `trece_timpul()` **schimbă** `foame`, `fericire` și `ultima`, așa că are `global` pentru toate trei.  
- Când `doarme()` e adevărat, `pass` înseamnă „nu fac nimic” (și timpul **nu** trece).  
- Ordinea contează: `a and b` e verificat **înaintea** lui `a` și `b` separat.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 6** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## Greșeli frecvente
1. **„Pixi nu mai are foame”** — `trece_timpul()` nu e apelat, sau lipsește `global`.  
2. **„Foamea merge la −1 sau la 7”** — ai uitat `limiteaza`.  
3. **„Pixi nu răspunde la butoane”** — am citit `button_a.was_pressed()` de mai multe ori. Citește **o singură dată** la începutul turei.  
4. **„TypeError la `"Foame: " + foame`”** — nu poți lipi un text de un număr: `"Foame: " + str(foame)`.  
5. **„Doarme și în lumină”** — pragul `PRAG_INTUNERIC` e prea mare pentru sala ta; încearcă `10` sau `5`.  
6. **„A+B hrănește”** — `elif a and b` trebuie să fie **înaintea** lui `elif a`.

---

## De făcut azi — „Prietenul de pe placă”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | `foame` + `fericire` · A hrănește · B joacă · fața se schimbă |
| **Complet** | Minim + timp · doarme pe întuneric · scuturat · ecran de stare |

### Exercițiul A — „Pixi” (obligatoriu)
Scrie programul lui Pixi pe placă. Dă-i un **nume** (scris pe foaie) și o **regulă a ta**, de exemplu: „Pixi se bucură mai mult dacă te joci cu el când e sătul.”

### Exercițiul B — Ce urmează?
Pixi are `foame = 3` și `fericire = 3`. Apeși **B**. Care sunt valorile după aceea? Apoi apeși **B** încă o dată. Ce se întâmplă?

### Exercițiul C — O funcție nouă
Scrie funcția `mancare()` care hrănește pe Pixi: scade `foame` cu 2 (între `0` și `5`) și afișează `Image.PACMAN`. Nu uita `global`!

### Exercițiul D — Găsește greșelile
```text
foame = 2

def hraneste():
    foame -= 2

while True
    if button_a.was_pressed:
        hraneste()
    display.scroll("Foame: " + foame)
```

### Exercițiul E — Explică
1. De ce folosim `running_time()` în loc de `sleep(4000)`?  
2. De ce `fata()` nu are nevoie de `global`, dar `trece_timpul()` are?  
3. Ce face `pass`?

**Gata când:**
- [ ] Pixi apare pe ecran cu fața potrivită  
- [ ] A hrănește, B se joacă (și refuză când e flămând)  
- [ ] Valorile nu ies din `0 … 5`  
- [ ] Ai testat cu un coleg  
- [ ] Ai răspunsurile la B–E  

**→ Minim când:** un coleg apasă A și B și înțelege ce se întâmplă cu Pixi fără ajutorul tău.

---

## Bonus ★★★ — Provocare: Testul de reflexe
*Doar dacă ai terminat Complet.*

Cât de repede reacționezi? Placa așteaptă un timp la întâmplare, apoi dă semnalul, iar tu apeși **A** cât poți de repede.

**Ajutor:** `sleep(random.randint(2000, 5000))` așteaptă între 2 și 5 secunde (ai nevoie de `import random`). Cu `button_a.was_pressed()` citit o dată înainte de așteptare **golești** memoria butonului. Timpul de reacție este `running_time()` de după apăsare minus `running_time()` de la semnal.

- [ ] Pe ecran apare `Image.SQUARE_SMALL`; după o pauză la întâmplare de 2–5 secunde apare `Image.TARGET`
- [ ] Placa măsoară în milisecunde cât timp ai așteptat până ai apăsat **A**
- [ ] Rezultatul se derulează cu `display.scroll(...)`
- [ ] Dacă apeși **înainte** de semnal, apare `Image.SAD` și testul se reia
- [ ] Placa ține minte **recordul** (cel mai mic timp) și îl arată la **B**
- [ ] Salvează proiectul ca `Prenume_Nume_MP1_L09_Reflexe`

## Recapitulare pe scurt
1. Un program cu stări ține minte lucrurile în **variabile**.  
2. `limiteaza` ține valorile între două limite.  
3. O funcție poate **returna** o imagine; o funcție care schimbă variabile de afară are nevoie de `global`.  
4. `running_time()` lasă programul atent, spre deosebire de un `sleep` lung.  
5. `pass` = „nu fac nimic”.  
6. Ordinea `if / elif` contează: cazul cel mai specific (`a and b`) merge primul.

**Schema pe scurt (pe foaie):** stări (`foame`, `fericire`) · butoane schimbă stările · `fata()` alege imaginea · `trece_timpul()` · `doarme()`

## Quiz scurt  
- Ce valori poate avea `foame`?  
- Ce se întâmplă dacă apeși B când `foame` e 4?  
- Ce arată ecranul de stare?  
- De ce `a and b` e înaintea lui `a`?

## Temă
**Temperatura lui Pixi.** Scrie acasă, în editor (merge și în simulator, fără placă), un program în care Pixi simte temperatura. La **A** placa citește `temperature()`: dacă e peste `28` arată `Image.SURPRISED` și derulează `"Cald!"`, dacă e sub `15` derulează `"Frig!"`, altfel arată `Image.HAPPY`. În simulator schimbi temperatura din panoul de senzori. Salvează-l ca `Prenume_Nume_MP1_L09_Tema`.

## Ce urmează — Lecția 10
Ultima lecție: **Expoziția Coder**. Alegi un joc, îl termini, îl arăți colegilor și primești insigna **Coder**.

---

## Răspunsuri

**Exercițiul B:** după primul **B**: `fericire = 4`, `foame = 4`. La al doilea **B**, `foame >= 4`, deci Pixi **refuză** (se afișează `NO`) și valorile rămân `4` și `4`.

**Exercițiul C:**
```python
def mancare():
    global foame
    foame = limiteaza(foame - 2, 0, 5)
    display.show(Image.PACMAN)
    sleep(800)
```

**Exercițiul D:** 1) în `hraneste()` lipsește `global foame` (`UnboundLocalError`). 2) după `while True` lipsește `:`. 3) `button_a.was_pressed` nu are paranteze: `button_a.was_pressed()`. 4) `"Foame: " + foame` lipește text cu număr: trebuie `"Foame: " + str(foame)`. (Și `foame` ar putea ajunge sub `0`: se poate folosi `limiteaza`.)

**Exercițiul E:** 1) Pentru că `sleep(4000)` oprește programul și nu mai vede butoanele. 2) `fata()` doar **citește** variabilele; `trece_timpul()` le **schimbă**. 3) Nu face nimic; ține locul unui rând obligatoriu.
