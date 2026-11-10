# LECȚIA 8 — Recordul păstrat
### Fișiere pe placă, `try` / `except` și un test de reflexe
**Modulul 2 · Python pe micro:bit · 2 ore**  
**Code Maker Club · micro:bit Python Pro**

> Variabilele **uită** totul când oprești placa. Azi înveți să scrii într-un **fișier** pe placă, ca recordul tău să **rămână** și după ce o oprești și o pornești din nou. Faci **testul de reflexe**: cât de repede apeși **A** când apare semnalul?  
> Proiect: **„Recordul păstrat”** · `Prenume_Nume_MP2_L08`

---

## Ce facem azi
La finalul orei **scrii** și **citești** un fișier cu `open`, tratezi lipsa fișierului cu `try / except` (îl înveți chiar azi) și păstrezi un **record**. Aplicațiile adevărate **își amintesc**: scorul cel mai bun, setările, ultimul nivel. Ele salvează în fișiere. Azi faci același lucru, în mic, pentru testul de reflexe din Modulul 1.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap: `str()` și `int()` din L7; `running_time()` din Modulul 1 |
| 10–40 | Fișiere: `open`, `write`, `read`, lipsa fișierului |
| 40–60 | O rundă de reflexe |
| 60–95 | Testul cu record păstrat (**Minim**) |
| 95–110 | Resetare și mesaj de record (**Complet**) |
| 110–120 | Recapitulare, quiz, temă |

Exercițiile B–E și Provocarea sunt pentru cine termină mai repede, sau pentru acasă.

**Ce ai nevoie:** [python.microbit.org](https://python.microbit.org) · placa micro:bit · cablu USB de date

> **Atenție:** fișierele sunt păstrate în memoria plăcii. **Nu scrie în fișier la fiecare tură** de buclă (memoria se uzează). Scriem **doar când se schimbă recordul**.  
> Dacă încarci din nou programul pe placă, **fișierele pot fi șterse**. Recordul se păstrează cât timp o oprești și o pornești, **fără** să o reprogramezi.

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `with open("nume.txt", "w") as f:` | Deschide fișierul pentru **scris** (șterge ce era) și îl închide singur | `f.write("Salut")` |
| `with open("nume.txt") as f:` | Deschide fișierul pentru **citit** | `text = f.read()` |
| `str(n)` și `int(text)` | Fișierul ține **text**: număr în text la scriere, text în număr la citire | `f.write(str(42))` |
| `try:` / `except OSError:` | „Încearcă; dacă fișierul lipsește, fă asta” | vezi Exemplul 3 |
| `running_time()` | Milisecundele de la pornirea plăcii | `running_time() - start` |

**Ajutor în editor:** în panoul **Reference** caută `File system`, `Data types` și `Maths`.

---

## Pas cu pas

### 1) Un fișier = un caiet
- `open("nume.txt", "w")` — deschide caietul pentru **scris** (șterge ce era înainte).  
- `open("nume.txt")` — deschide pentru **citit**.  
- `with … as f:` — deschide fișierul și îl **închide singur** la final.

### Exemplul 1 — Scriem și citim
```python
from microbit import *

with open("salut.txt", "w") as f:
    f.write("Salut, lume!")

with open("salut.txt") as f:
    text = f.read()

display.scroll(text)
```
`f.write(...)` pune textul în fișier, iar `f.read()` dă **tot textul** din fișier. Poți vedea fișierul `salut.txt` în editor, la fila **Files**, cu placa conectată.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 1** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### 2) Fișierul nu există
Dacă încerci să citești un fișier care **nu există**, apare eroarea `OSError`. Cu `try` spui „încearcă”, iar cu `except OSError` „dacă apare eroarea asta, fă în schimb…”. Astfel programul nu se oprește.

### Exemplul 2 — `try` și `except`
```python
from microbit import *

try:
    with open("nu_exista.txt") as f:
        text = f.read()
    display.scroll(text)
except OSError:
    display.scroll("Nu am gasit fisierul")
```
Programul **nu se oprește**, ci ne spune frumos că fișierul lipsește.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 2** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 3 — Funcții pentru record
Fișierele păstrează **text**. Numărul îl transformăm cu `str()` la scriere și cu `int()` la citire. Punem citirea și scrierea în **funcții**. Când nu există încă un record, folosim un număr foarte mare (`NIMIC = 9999`), pe care orice timp îl bate:
```python
from microbit import *

FISIER = "record.txt"
NIMIC = 9999

def citeste_record():
    try:
        with open(FISIER) as f:
            return int(f.read())
    except OSError:
        return NIMIC
    except ValueError:
        return NIMIC

def salveaza_record(n):
    with open(FISIER, "w") as f:
        f.write(str(n))

salveaza_record(312)
display.scroll(str(citeste_record()))
```
Se afișează `312`. Dacă fișierul lipsește sau are conținut ciudat (`ValueError`), recordul e `9999`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 3** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 4 — Câte porniri?
Un mic truc: placa numără **de câte ori a pornit**, tot cu fișier:
```python
from microbit import *

def citeste():
    try:
        with open("porniri.txt") as f:
            return int(f.read())
    except OSError:
        return 0
    except ValueError:
        return 0

porniri = citeste() + 1

with open("porniri.txt", "w") as f:
    f.write(str(porniri))

display.scroll("Pornire " + str(porniri))
```
Apasă butonul **RESET** (în spate): numărul crește. **Nu reîncărca** programul, altfel pornești de la început.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 4** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### 3) Testul de reflexe
Placa așteaptă un timp **la întâmplare**, apoi arată un **semnal**. Tu apeși **A** cât poți de repede, iar placa măsoară milisecundele cu `running_time()`. Dacă apeși **înainte** de semnal, rezultatul nu se pune.

### Exemplul 5 — O rundă de reflexe
```python
from microbit import *
import random

def runda():
    display.show(Image.SQUARE_SMALL)
    button_a.was_pressed()
    sleep(random.randint(2000, 5000))
    if button_a.was_pressed():
        return -1
    display.show(Image.TARGET)
    start = running_time()
    while not button_a.was_pressed():
        sleep(1)
    return running_time() - start

timp = runda()
if timp < 0:
    display.show(Image.SAD)
else:
    display.scroll(str(timp))
```
- `button_a.was_pressed()` scris singur, la început, **golește** memoria butonului (apăsarea veche nu mai contează).  
- După pauza la întâmplare, dacă **A** a fost apăsat în timpul așteptării, e prea devreme: funcția întoarce `-1`.  
- Altfel apare ținta, pornește cronometrul și așteptăm **A**. Timpul e diferența dintre `running_time()` acum și la start.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 5** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 6 — Testul de reflexe (Minim)
```python
from microbit import *
import random

FISIER = "record.txt"
NIMIC = 9999

def citeste_record():
    try:
        with open(FISIER) as f:
            return int(f.read())
    except OSError:
        return NIMIC
    except ValueError:
        return NIMIC

def salveaza_record(n):
    with open(FISIER, "w") as f:
        f.write(str(n))

def runda():
    display.show(Image.SQUARE_SMALL)
    button_a.was_pressed()
    sleep(random.randint(2000, 5000))
    if button_a.was_pressed():
        return -1
    display.show(Image.TARGET)
    start = running_time()
    while not button_a.was_pressed():
        sleep(1)
    return running_time() - start

record = citeste_record()
display.show(Image.HAPPY)

while True:
    a = button_a.was_pressed()
    b = button_b.was_pressed()

    if a:
        timp = runda()
        if timp < 0:
            display.show(Image.SAD)
            sleep(1000)
        else:
            display.scroll(str(timp))
            if timp < record:
                record = timp
                salveaza_record(record)
                display.show(Image.HEART)
                sleep(1000)
        display.show(Image.HAPPY)
    elif b:
        if record == NIMIC:
            display.scroll("-")
        else:
            display.scroll("Record " + str(record))
        display.show(Image.HAPPY)
    sleep(100)
```
- **A** pornește o rundă, iar rezultatul se derulează în milisecunde.  
- Aici **mai mic e mai bun**: dacă `timp < record`, îl salvăm în fișier (și apare o inimă).  
- **B** arată recordul, sau `-` dacă nu există încă.  
- La pornire, recordul se **citește din fișier**.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 6** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 7 — Testul de reflexe (Complet)
Adăugăm resetarea recordului și un mesaj de record nou:
```python
from microbit import *
import random

FISIER = "record.txt"
NIMIC = 9999

def citeste_record():
    try:
        with open(FISIER) as f:
            return int(f.read())
    except OSError:
        return NIMIC
    except ValueError:
        return NIMIC

def salveaza_record(n):
    with open(FISIER, "w") as f:
        f.write(str(n))

def runda():
    display.show(Image.SQUARE_SMALL)
    button_a.was_pressed()
    sleep(random.randint(2000, 5000))
    if button_a.was_pressed():
        return -1
    display.show(Image.TARGET)
    start = running_time()
    while not button_a.was_pressed():
        sleep(1)
    return running_time() - start

record = citeste_record()
display.show(Image.HAPPY)

while True:
    a = button_a.was_pressed()
    b = button_b.was_pressed()

    if a and b:
        record = NIMIC
        salveaza_record(record)
        display.show(Image.NO)
        sleep(1000)
        display.show(Image.HAPPY)
    elif a:
        timp = runda()
        if timp < 0:
            display.show(Image.SAD)
            sleep(1000)
        else:
            display.scroll(str(timp))
            if timp < record:
                record = timp
                salveaza_record(record)
                display.show(Image.HEART)
                sleep(1200)
                display.scroll("Record!")
        display.show(Image.HAPPY)
    elif b:
        if record == NIMIC:
            display.scroll("-")
        else:
            display.scroll("Record " + str(record))
        display.show(Image.HAPPY)
    sleep(100)
```
- **A+B** pune recordul înapoi pe `9999` (adică „fără record”) și îl salvează.  
- Verificăm `a and b` **primul**, ca să nu fie „mâncat” de `a` sau `b`.  
- La record nou apare inima și se derulează `Record!`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 7** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## Greșeli frecvente
1. **„Recordul dispare”** — ai reîncărcat programul pe placă. Pornește placa fără reîncărcare.  
2. **„OSError la citire”** — fișierul nu există încă. Folosește `try / except OSError`.  
3. **„TypeError la `write`”** — `f.write` vrea **text**: `f.write(str(n))`.  
4. **„ValueError la `int`”** — fișierul e gol sau conține text. Prinde `ValueError`.  
5. **„Scrii la fiecare tură”** — salvează doar când recordul se schimbă.  
6. **„Timpul e mic și ciudat”** — ai apăsat **A** de la începutul rundei; golește memoria butonului cu `button_a.was_pressed()` înainte de așteptare.

---

## De făcut azi — „Recordul păstrat”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Testul de reflexe · „prea devreme” nu se numără · recordul salvat în fișier · **B** îl arată (Exemplul 6) |
| **Complet** | Minim + **A+B** resetează recordul + mesaj `Record!` (Exemplul 7) |

### Exercițiul A — „Recordul păstrat” (obligatoriu)
Scrie programul din Exemplul 6 (Minim). Joacă o rundă, apoi **oprește și pornește** placa (RESET) și apasă **B**: recordul trebuie să apară. Pentru **Complet**, folosește Exemplul 7.

### Exercițiul B — Ce se întâmplă?
Ce află programul dacă `record.txt` conține textul `abc`? Dar dacă fișierul **nu există**? Ce valoare întoarce `citeste_record()` în ambele cazuri?

### Exercițiul C — Mesaj după timp
După fiecare rundă (când `timp` nu e `-1`), arată un mesaj: sub `250` ms `Fulger`, sub `400` ms `Bun`, altfel `Mai incearca`. Folosește `if`, `elif` și `else`.

### Exercițiul D — Găsește greșelile
Programul are **6 greșeli**. Rescrie-l corect.
```text
def salveaza(n):
    with open("record.txt", "r") as f:
        f.write(n)

record = open("record.txt").read()
if record > 5:
    display.scroll(record)
```

### Exercițiul E — Explică
1. De ce transformăm numărul cu `str()` când scriem?  
2. De ce salvăm doar când recordul se schimbă?  
3. Ce face `with open(...) as f:`?

**Gata când:**
- [ ] Testul măsoară timpul în milisecunde și ignoră „prea devreme”  
- [ ] Recordul se salvează și se citește la pornire  
- [ ] Lipsa fișierului nu oprește programul  
- [ ] Ai testat cu RESET  
- [ ] Ai răspunsurile la B–E  

**→ Minim când:** recordul apare corect după ce oprești și pornești placa.

---

## Bonus ★★★ — Provocare: Campionul clasei
*Doar dacă ai terminat Complet.*

Mai mulți colegi folosesc **aceeași placă**. Placa ține minte **cine** are cel mai bun timp, nu doar timpul.

**Ajutor:** fișierul poate păstra **numele și timpul** într-un singur text, separate prin virgulă: `"ANA,287"`. Îl scrii cu `nume + "," + str(timp)`. La citire îl tai cu `text.split(",")`: `parti[0]` e numele, iar `int(parti[1])` e timpul. O funcție poate întoarce **două valori**, ca `return "-", 9999`.

- [ ] Ai o listă `JUCATORI` cu **3 nume** de colegi (litere mari, fără diacritice)
- [ ] **B** alege jucătorul următor, în cerc, și îi derulează numele
- [ ] **A** pornește o rundă pentru jucătorul ales
- [ ] Recordul se salvează în fișier **împreună cu numele**; la record nou se derulează `Record` și numele jucătorului
- [ ] **Scuturarea** derulează campionul: numele și timpul (sau `Niciun record`)
- [ ] Salvează proiectul ca `Prenume_Nume_MP2_L08_Campion`

## Recapitulare pe scurt
1. Fișierele păstrează date și după oprirea plăcii.  
2. `open(nume, "w")` scrie, `open(nume)` citește.  
3. Fișierul păstrează **text**: `str()` și `int()`.  
4. Fișierul lipsă dă `OSError`, prins cu `try / except`.  
5. Scriem doar când e nevoie, nu la fiecare tură.

**Schema pe scurt (pe foaie):** `with open(…, "w")` scrie · `open(…)` citește · `str` / `int` · `try / except OSError` · scrie doar la record nou

## Quiz scurt
- Ce rămâne după RESET: variabilele sau fișierele?  
- Ce eroare apare când lipsește fișierul?  
- De ce nu scriem în fișier la fiecare tură?  
- Ce face `f.read()`?

## Temă
**Numele meu.** Scrie acasă, în editor, un program care salvează într-un fișier **numele tău** și îl citește la pornire. Dacă fișierul există, derulează `Salut` și numele. Dacă lipsește, derulează `Nu te cunosc` (cu `try / except OSError`). Salvează-l ca `Prenume_Nume_MP2_L08_Tema`. Dacă simulatorul nu păstrează fișierul după oprire, verifică rezultatul pe placă.

## Ce urmează — Lecția 9
Construiești **Cutia Exploratorului**: un meniu cu mai multe unelte, de la busolă și termometru la cronometru, cu un record păstrat în fișier.

---

## Răspunsuri

**Exercițiul B:** În ambele cazuri `citeste_record()` întoarce `9999`. Dacă fișierul conține `abc`, `int("abc")` dă `ValueError` (prins); dacă fișierul lipsește, `open` dă `OSError` (prins).

**Exercițiul C:**
```python
if timp < 250:
    display.scroll("Fulger")
elif timp < 400:
    display.scroll("Bun")
else:
    display.scroll("Mai incearca")
```
Îl pui în ramura `else` din care se derulează timpul, adică după `display.scroll(str(timp))`.

**Exercițiul D:** 1) `"r"` e pentru citit; pentru scris trebuie `"w"`. 2) `f.write(n)` vrea text: `f.write(str(n))`. 3) `open("record.txt").read()` dă **text**, iar `record > 5` compară text cu număr: trebuie `int(...)`. 4) dacă fișierul lipsește apare `OSError` (lipsește `try / except`). 5) fișierul din a doua parte nu e închis cu `with`. 6) lipsește `from microbit import *`.

**Exercițiul E:** 1) Fișierul păstrează doar text. 2) Memoria plăcii se uzează la scriere repetată și scrierea e lentă. 3) Deschide fișierul și îl închide automat la final.

**Bonus ★★★ — Campionul clasei:**

*Schema logicii:*
1. `JUCATORI` e o listă de nume, iar `j` e poziția jucătorului ales.  
2. `citeste_campion()` citește textul `"NUME,timp"`, îl taie cu `split(",")` și întoarce numele și timpul. Dacă fișierul lipsește sau e stricat, întoarce `"-"` și `9999`.  
3. **B** trece la jucătorul următor cu `% len(JUCATORI)`. **A** pornește runda: dacă `timp < record`, salvezi `nume + "," + str(timp)` și derulezi `Record` și numele.  
4. **Scuturarea** derulează campionul curent.

```python
from microbit import *
import random

FISIER = "campion.txt"
NIMIC = 9999
JUCATORI = ["ANA", "DAN", "MIA"]

def citeste_campion():
    try:
        with open(FISIER) as f:
            parti = f.read().split(",")
        return parti[0], int(parti[1])
    except OSError:
        return "-", NIMIC
    except ValueError:
        return "-", NIMIC
    except IndexError:
        return "-", NIMIC

def salveaza_campion(nume, timp):
    with open(FISIER, "w") as f:
        f.write(nume + "," + str(timp))

def runda():
    display.show(Image.SQUARE_SMALL)
    button_a.was_pressed()
    sleep(random.randint(2000, 5000))
    if button_a.was_pressed():
        return -1
    display.show(Image.TARGET)
    start = running_time()
    while not button_a.was_pressed():
        sleep(1)
    return running_time() - start

campion, record = citeste_campion()
j = 0
display.scroll(JUCATORI[j])
display.show(Image.HAPPY)

while True:
    a = button_a.was_pressed()
    b = button_b.was_pressed()

    if a:
        timp = runda()
        if timp < 0:
            display.show(Image.SAD)
            sleep(1000)
        else:
            display.scroll(str(timp))
            if timp < record:
                record = timp
                campion = JUCATORI[j]
                salveaza_campion(campion, record)
                display.show(Image.HEART)
                sleep(1000)
                display.scroll("Record " + campion)
        display.show(Image.HAPPY)
    elif b:
        j = (j + 1) % len(JUCATORI)
        display.scroll(JUCATORI[j])
        display.show(Image.HAPPY)
    elif accelerometer.was_gesture("shake"):
        if record == NIMIC:
            display.scroll("Niciun record")
        else:
            display.scroll(campion + " " + str(record))
        display.show(Image.HAPPY)
    sleep(100)
```
- `return parti[0], int(parti[1])` întoarce **două valori**, iar la apel le despachetezi: `campion, record = citeste_campion()`.  
- `except IndexError` prinde cazul în care textul din fișier nu are virgulă și `parti[1]` nu există.  
- Aici folosim **o singură** listă de nume; recordul (timpul) se compară cu `<`, pentru că mai mic e mai bun.
