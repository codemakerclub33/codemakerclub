# LECȚIA 8 — Traducător de blocuri
### Din blocuri în Python
**Modulul 1 · Python pe micro:bit · 2 ore**  
**Code Maker Club · micro:bit Coder**

> Azi ești **traducător**: iei programe făcute din blocuri și le scrii în Python. Descoperi că aceleași idei se spun în două limbi.  
> Proiect: **„Seiful secret în Python”** · `Prenume_Nume_MP1_L08`

---

## Ce facem azi
La finalul orei traduci evenimente, variabile, decizii și bucle din blocuri în Python și folosești `global` și `random`. Blocurile te ajută să înțelegi o idee; Python îți permite să o scrii mai scurt și să construiești lucruri mai mari. Un programator bun trece ușor din unul în celălalt. Azi exersezi.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L7: funcții, parametri |
| 10–30 | Dicționarul blocuri → Python |
| 30–55 | Traducem 2 programe mici |
| 55–80 | Seiful secret (**Minim**) |
| 80–105 | Funcții, `global` și alarma (**Complet**) |
| 105–120 | Recapitulare, quiz, temă |

Exercițiile B–F și Provocarea sunt pentru cine termină mai repede, sau pentru acasă.

**Ce ai nevoie:** [python.microbit.org](https://python.microbit.org) · placa micro:bit · cablu USB de date

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `while True:` | Înlocuiește blocul `forever`; verifică mereu evenimentele | `while True:` |
| `a = button_a.was_pressed()` | Citește butonul **o dată pe tură**, ca să poți compara `a` și `b` | `if a and b:` |
| `elif` | „Altfel, dacă…” | `elif a:` |
| `global nume` | Lasă o funcție să **schimbe** o variabilă de afară | `global pas, greseli` |
| `x += 1` | Adaugă `1` la `x` | `greseli += 1` |
| `random.randint(a, b)` | Un număr la întâmplare, de la `a` la `b` inclusiv | `random.randint(0, 2)` |

**Ajutor în editor:** în panoul **Reference** caută `Buttons`, `Accelerometer` și `Functions`.

---

## Pas cu pas

### 1) Dicționarul blocuri → Python

| În blocuri | În Python |
|------------|-----------|
| `on start` | rândurile de la început, o singură dată |
| `forever` | `while True:` |
| `on button A pressed` | `if button_a.was_pressed():` în buclă |
| `on button A+B pressed` | `if a and b:` (cu `a` și `b` citite la început) |
| `on shake` | `if accelerometer.was_gesture("shake"):` |
| `set score to 0` | `score = 0` |
| `change score by 1` | `score += 1` |
| `if … then … else` | `if … : … else: …` |
| `else if` | `elif` |
| `pick random 0 to 2` | `random.randint(0, 2)` |
| `show icon [Heart]` | `display.show(Image.HEART)` |
| `show number score` | `display.scroll(str(score))` |
| `pause (ms) 500` | `sleep(500)` |
| `repeat 4 times` | `for i in range(4):` |

> **Evenimentele** din blocuri (`on button A pressed`) nu au un „frate” direct în Python. Folosim **o buclă** care verifică la fiecare tură dacă s-a întâmplat ceva.

### Exemplul 1 — Contorul (din cursul cu blocuri)
Blocuri: A adaugă 1, B scade 1, A+B pune 0.
```python
from microbit import *

score = 0
display.scroll(str(score))

while True:
    a = button_a.was_pressed()
    b = button_b.was_pressed()
    if a and b:
        score = 0
        display.scroll(str(score))
    elif a:
        score += 1
        display.scroll(str(score))
    elif b:
        score -= 1
        display.scroll(str(score))
    sleep(100)
```

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 1** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 2 — Cursa până la 10 (din cursul cu blocuri)
Blocuri: la 10 apare bifă și `Bravo`, scorul revine la 0.
```python
from microbit import *

score = 0
display.scroll(str(score))

while True:
    if button_a.was_pressed():
        score += 1
        if score == 10:
            display.show(Image.YES)
            sleep(1000)
            display.scroll("Bravo")
            score = 0
        display.scroll(str(score))
    sleep(100)
```

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 2** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### 2) Seiful — planul
Codul secret e **A, B, A**. Variabila `pas` ține minte în ce pas ești:

| `pas` | Înseamnă |
|-------|----------|
| `0` | nimic corect încă |
| `1` | ai apăsat corect primul **A** |
| `2` | ai apăsat corect și **B** |

La `pas == 2`, un **A** deschide seiful.

### Exemplul 3 — Seiful Minim
```python
from microbit import *

pas = 0
display.show(Image.SQUARE)

while True:
    a = button_a.was_pressed()
    b = button_b.was_pressed()

    if a and b:
        pas = 0
        display.show(Image.NO)
        sleep(700)
        display.show(Image.SQUARE)
    elif a:
        if pas == 0:
            pas = 1
        elif pas == 2:
            display.show(Image.YES)
            sleep(2000)
            pas = 0
            display.show(Image.SQUARE)
        else:
            pas = 0
            display.show(Image.NO)
            sleep(700)
            display.show(Image.SQUARE)
    elif b:
        if pas == 1:
            pas = 2
        else:
            pas = 0
            display.show(Image.NO)
            sleep(700)
            display.show(Image.SQUARE)
    sleep(100)
```
Se vede cum aceleași rânduri `NO` se repetă de patru ori. Cu o **funcție** scăpăm de repetări.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 3** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 4 — Probleme cu `global`
Încercăm să mutăm greșeala într-o funcție:
```text
pas = 0

def greseala():
    pas = 0               # greseala! creeaza o variabila NOUA, locala
    display.show(Image.NO)
```
Funcția creează **o altă** `pas`, locală, și `pas` din afară nu se schimbă. Ca să schimbi variabila de afară, spui `global`:

```python
from microbit import *

pas = 2

def greseala():
    global pas
    pas = 0
    display.show(Image.NO)
    sleep(700)

greseala()
display.scroll(str(pas))
```
**Ce vezi pe placă:** mai întâi `NO`, apoi `0`.

> `global pas` se pune **înainte** să schimbi `pas` în funcție. Dacă doar **citești** o variabilă de afară, nu ai nevoie de `global`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 4** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 5 — Seiful Complet
Aici folosim funcții și `global` din exemplul 4. `seif_inchis()` readuce seiful, `alarma()` pâlpâie craniul de 5 ori, iar `greseala()` numără greșelile și pornește alarma la a treia.
```python
from microbit import *

pas = 0          # in ce pas al codului A-B-A suntem
greseli = 0      # cate incercari gresite la rand

def seif_inchis():
    display.show(Image.SQUARE)

def alarma():
    for i in range(5):
        display.show(Image.SKULL)
        sleep(200)
        display.clear()
        sleep(200)

def greseala():
    global pas, greseli
    greseli += 1
    pas = 0
    display.show(Image.NO)
    sleep(700)
    if greseli >= 3:
        alarma()
        greseli = 0
    seif_inchis()

seif_inchis()

while True:
    a = button_a.was_pressed()
    b = button_b.was_pressed()

    if a and b:
        greseala()
    elif a:
        if pas == 0:
            pas = 1
        elif pas == 2:
            display.show(Image.YES)
            sleep(2000)
            pas = 0
            greseli = 0
            seif_inchis()
        else:
            greseala()
    elif b:
        if pas == 1:
            pas = 2
        else:
            greseala()
    sleep(100)
```
- **A, B, A** deschide seiful: `YES` timp de 2 secunde.  
- Orice altă secvență (inclusiv **A+B**) e **greșeală**.  
- La **3 greșeli la rând** pornește alarma; o deschidere reușită pune `greseli` înapoi pe `0`.  
- Programul are **mai puține rânduri repetate** decât Exemplul 3.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 5** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## Greșeli frecvente
1. **„Variabila nu se schimbă”** — ai schimbat-o într-o funcție fără `global`.  
2. **„UnboundLocalError”** — ai folosit o variabilă în funcție înainte să-i dai o valoare, fără `global`.  
3. **„NameError: random”** — ai uitat `import random`.  
4. **„Seiful se deschide cu orice”** — lipsesc verificările `pas == 2` sau `pas == 1`.  
5. **„A+B face și A”** — verifică **a și b** primul.  
6. **„Alarma nu pornește”** — `greseli` nu crește (lipsește `global` sau `+= 1`).

---

## De făcut azi — „Seiful secret în Python”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Cod A–B–A · `YES` la deschidere · `NO` la greșeală și reluare |
| **Complet** | Minim + funcții (`greseala`, `alarma`) · `global` · alarmă după 3 greșeli |

### Exercițiul A — „Seiful” (obligatoriu)
Scrie seiful tău. Alege un **cod diferit** de A–B–A (de exemplu B–A–B) și schimbă condițiile.

### Exercițiul B — Ce se întâmplă?
La programul din Exemplul 5, apeși în ordine: **A, A, B, A**. Care sunt valorile finale ale lui `pas` și `greseli`? (Pornești cu `pas = 0`, `greseli = 0`.)

### Exercițiul C — Traduce bila magică cu 4 răspunsuri
Blocuri: la scuturare, `pick random 0 to 3` alege `Yes`, `No`, `Confused` sau `Happy`. Scrie programul în Python. Ai nevoie de `import random` sub `from microbit import *`; `random.randint(0, 3)` dă `0`, `1`, `2` sau `3`.

### Exercițiul D — Găsește greșelile
```text
from microbit import *

scor = 0

def punct():
    scor += 1

if button_a.was_pressed()
    punct()
x = random.randint(0, 3)
```

### Exercițiul E — Felinarul
Blocuri: `forever`, dacă lumina e sub `40` arată ecranul plin, altfel șterge ecranul. Scrie programul în Python (ecranul plin: `Image("99999:99999:99999:99999:99999")`).

### Exercițiul F — Explică
1. De ce Python nu are „blocuri de eveniment” ca MakeCode?  
2. La ce folosește `global`?  
3. Ce valori poate da `random.randint(1, 6)`?

**Gata când:**
- [ ] Seiful merge pe placă  
- [ ] Codul secret e al tău  
- [ ] Greșelile sunt numărate și pornește alarma  
- [ ] Ai folosit cel puțin o funcție cu `global`  
- [ ] Ai răspunsurile la B–F  

**→ Minim când:** un coleg încearcă codul și seiful se deschide doar la secvența corectă.

---

## Bonus ★★★ — Provocare: Simon Says
*Doar dacă ai terminat Complet.*

Placa arată o secvență de butoane, iar tu o repeți din memorie. La fiecare rundă secvența crește cu un pas.

**Ajutor:** `secventa = []` face o listă goală, `secventa.append("A")` adaugă un element la sfârșit, iar `random.choice(["A", "B"])` alege între A și B. Cu `for litera in secventa:` parcurgi lista.

- [ ] La început `secventa` e goală; la fiecare rundă adaugi un element ales la întâmplare dintre `"A"` și `"B"`
- [ ] Placa arată secvența, litera cu litera (`display.show(litera)`, `sleep(600)`, `display.clear()`, `sleep(200)`)
- [ ] Apoi așteaptă ca tu să apeși butoanele în aceeași ordine; o apăsare greșită oprește jocul cu `Image.SAD`
- [ ] Dacă ai repetat corect, apare `Image.HAPPY`, iar runda următoare adaugă un pas
- [ ] La final placa derulează scorul, adică lungimea secvenței atinse
- [ ] Salvează proiectul ca `Prenume_Nume_MP1_L08_Simon`

## Recapitulare pe scurt
1. Blocurile și Python spun aceleași idei: variabile, decizii, bucle.  
2. Evenimentele din blocuri devin verificări în `while True:`.  
3. `random.randint(a, b)` alege un număr între `a` și `b` (inclusiv).  
4. `global` e nevoie ca să **schimbi** o variabilă de afară în funcție.  
5. Funcțiile scurtează codul repetat.  
6. Citim `a` și `b` la începutul fiecărei ture.

**Schema pe scurt (pe foaie):** blocuri → dicționar → Python · `pas` ține minte starea · `greseala()` numără · `alarma()` după 3

## Quiz scurt
- Cu ce înlocuim `forever`?  
- Ce face `random.choice(lista)`?  
- De ce ai nevoie de `global pas`?  
- Ce se întâmplă la a treia greșeală?

## Temă
**Contorul de scuturări.** Iată programul în blocuri: la **scuturare** `scor` crește cu `1`; la **A** se arată `scor`; la **B** `scor` revine la `0`. Scrie-l acasă în Python, în editor (merge și în simulator, fără placă), cu `while True:` și `accelerometer.was_gesture("shake")`. Salvează-l ca `Prenume_Nume_MP1_L08_Tema`.

## Ce urmează — Lecția 9
Creezi **Pixi**, un prieten digital care trăiește pe placa ta: îi e foame, se joacă, doarme când se face întuneric și își arată starea pe ecran.

---

## Răspunsuri

**Exercițiul B:** `A` → `pas` 1. A doua `A`: `pas` e 1, nu 0 și nu 2, deci `else` → greșeală (`greseli = 1`, `pas = 0`). `B`: `pas` e 0, nu 1 → greșeală (`greseli = 2`, `pas = 0`). `A`: `pas` 0 → `pas = 1`. **Final: `pas = 1`, `greseli = 2`.**

**Exercițiul C:**
```python
from microbit import *
import random

display.show("?")

while True:
    if accelerometer.was_gesture("shake"):
        raspuns = random.randint(0, 3)
        if raspuns == 0:
            display.show(Image.YES)
        elif raspuns == 1:
            display.show(Image.NO)
        elif raspuns == 2:
            display.show(Image.CONFUSED)
        else:
            display.show(Image.HAPPY)
    sleep(100)
```

**Exercițiul D:** 1) în `punct()` lipsește `global scor` (altfel apare `UnboundLocalError`). 2) lipsesc `:` după `if button_a.was_pressed()`. 3) `if`-ul nu e într-o buclă `while True:`, deci se verifică o singură dată. 4) `random` nu e importat (`NameError`).

**Exercițiul E:**
```python
from microbit import *

while True:
    if display.read_light_level() < 40:
        display.show(Image("99999:99999:99999:99999:99999"))
    else:
        display.clear()
    sleep(200)
```

**Exercițiul F:** 1) Python e un limbaj de text; verificăm noi evenimentele într-o buclă. 2) Ca să schimbi o variabilă de afară dintr-o funcție. 3) `1, 2, 3, 4, 5` sau `6`.
