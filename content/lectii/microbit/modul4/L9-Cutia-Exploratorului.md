# LECȚIA 9 — Cutia Exploratorului
### Un program mare, din funcții mici
**Modulul 2 · Python pe micro:bit · 2 ore**  
**Code Maker Club · micro:bit Python Pro**

> Este **proiectul final** al cursului! Construiești **Cutia Exploratorului**: un meniu cu unelte pentru o expediție: **busolă**, **termometru cu record păstrat**, **cronometru** și **jurnal de măsurători**. Folosești tot ce ai învățat: funcții, liste, busolă, fișiere, timp.  
> Proiect: **„Cutia Exploratorului”** · `Prenume_Nume_MP2_L09`

---

## Ce facem azi
La finalul orei ai un program **mare**, împărțit în **funcții**, cu **meniu**, care folosește senzori, timp și fișier. Un program mare nu se scrie dintr-o dată: se construiește **bucată cu bucată**. Fiecare unealtă e o funcție pe care o **testezi singură**, apoi o pui în meniu. Așa lucrează și echipele de programatori.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L1–L8: ce unelte avem? |
| 10–25 | Planul: meniu + unelte |
| 25–70 | Construim și testăm uneltele una câte una (**Minim**) |
| 70–105 | Jurnalul și ecranul de pornire (**Complet**) |
| 105–120 | Test cu un coleg, recapitulare, quiz, temă |

Exercițiile B–E și Provocarea sunt pentru cine termină mai repede, sau pentru acasă.

**Ce ai nevoie:** [python.microbit.org](https://python.microbit.org) · placa micro:bit · cablu USB de date

---

## Instrucțiuni noi azi
Azi nu apar multe instrucțiuni noi: **punem împreună** ce știi deja.

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `break` | Iese din buclă; aici, din unealtă înapoi în meniu | `if a: break` |
| `NUME[mod]` și `% len(NUME)` | Meniul ca listă, care se învârte în cerc | `mod = (mod + 1) % len(NUME)` |
| `porneste(m)` | O funcție care alege unealta după număr | `elif m == 1: modul_termometru()` |
| `lista.pop(0)` | Scoate primul element din listă | `jurnal.pop(0)` |
| `Image.ALL_CLOCKS` | Lista celor 12 imagini de ceas | `for img in Image.ALL_CLOCKS:` |

**Ajutor în editor:** în panoul **Reference** caută `Compass`, `File system` și `Images`.

---

## Pas cu pas

### 1) Planul Cutiei
| Literă | Unealta | Ce face | Cum ieși |
|--------|---------|---------|----------|
| **B** | Busolă | Săgeată spre Nord | **A** |
| **T** | Termometru | **B** arată temperatura; salvează recordul | **A** |
| **C** | Cronometru | **B** pornește, **B** oprește și arată timpul | **A** |
| **J** | Jurnal | **B** notează temperatura; scuturare = citește | **A** |

**Meniul:** **A** = următoarea unealtă, **B** = pornește unealta.  
Fiecare unealtă este o **funcție**, cu propria ei buclă. Când apeși **A**, funcția se termină și te întorci în meniu.

> **Regula de aur:** testează **fiecare** funcție singură, înainte s-o pui în program.

### Exemplul 1 — Unealta Busolă
Reluăm funcția `ac` din L5 și o punem într-o unealtă:
```python
from microbit import *

def ac(h):
    s = ((h + 22) // 45) % 8
    return Image.ALL_ARROWS[(8 - s) % 8]

def modul_busola():
    compass.calibrate()
    while not button_a.was_pressed():
        display.show(ac(compass.heading()))
        sleep(200)

modul_busola()
display.show(Image.YES)
```
Placa se calibrează (joc de înclinare), apoi o săgeată arată spre Nord. **A** oprește unealta și apare o bifă.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 1** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 2 — Unealta Termometru
Funcțiile din L8 păstrează **temperatura maximă** în fișier. **B** măsoară; dacă temperatura bate recordul, se salvează și apare o inimă:
```python
from microbit import *

FISIER = "maxtemp.txt"

def citeste_record():
    try:
        with open(FISIER) as f:
            return int(f.read())
    except OSError:
        return 0
    except ValueError:
        return 0

def salveaza_record(n):
    with open(FISIER, "w") as f:
        f.write(str(n))

def modul_termometru():
    record = citeste_record()
    while True:
        a = button_a.was_pressed()
        b = button_b.was_pressed()
        if a:
            break
        if b:
            t = temperature()
            display.scroll(str(t))
            if t > record:
                record = t
                salveaza_record(record)
                display.show(Image.HEART)
                sleep(1000)
        display.show("T")
        sleep(100)

modul_termometru()
display.show(Image.YES)
```
Observă `break`: când apeși **A**, bucla se oprește și funcția se termină.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 2** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 3 — Unealta Cronometru
Ca să măsori timpul fără `sleep` lung, folosești `running_time()`, ca la Pixi în Modulul 1. **B** pornește, **B** oprește și arată timpul în secunde:
```python
from microbit import *

def modul_cronometru():
    pornit = False
    start = 0
    while True:
        a = button_a.was_pressed()
        b = button_b.was_pressed()
        if a:
            break
        if b:
            if not pornit:
                start = running_time()
                pornit = True
            else:
                zecimi = (running_time() - start) // 100
                pornit = False
                display.scroll(str(zecimi // 10) + "." + str(zecimi % 10))
        if pornit:
            display.show(Image.TARGET)
        else:
            display.show("C")
        sleep(100)

modul_cronometru()
display.show(Image.YES)
```
`zecimi` sunt zecimile de secundă. Pentru `12` zecimi se derulează `1.2`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 3** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 4 — Scheletul meniului
Înainte să punem uneltele, testăm **meniul** singur. **B** doar afișează numărul modului:
```python
from microbit import *

NUME = ["B", "T", "C"]
mod = 0

display.show(NUME[mod])

while True:
    a = button_a.was_pressed()
    b = button_b.was_pressed()

    if a:
        mod = (mod + 1) % len(NUME)
    elif b:
        display.scroll("Mod " + str(mod))

    display.show(NUME[mod])
    sleep(100)
```
Apăsând **A** treci prin `B`, `T`, `C` și revii la `B`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 4** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 5 — Cutia Minim
Punem totul împreună. Funcția `porneste(m)` alege unealta după numărul modului:
```python
from microbit import *

def ac(h):
    s = ((h + 22) // 45) % 8
    return Image.ALL_ARROWS[(8 - s) % 8]

def modul_busola():
    compass.calibrate()
    while not button_a.was_pressed():
        display.show(ac(compass.heading()))
        sleep(200)

FISIER = "maxtemp.txt"

def citeste_record():
    try:
        with open(FISIER) as f:
            return int(f.read())
    except OSError:
        return 0
    except ValueError:
        return 0

def salveaza_record(n):
    with open(FISIER, "w") as f:
        f.write(str(n))

def modul_termometru():
    record = citeste_record()
    while True:
        a = button_a.was_pressed()
        b = button_b.was_pressed()
        if a:
            break
        if b:
            t = temperature()
            display.scroll(str(t))
            if t > record:
                record = t
                salveaza_record(record)
                display.show(Image.HEART)
                sleep(1000)
        display.show("T")
        sleep(100)

def modul_cronometru():
    pornit = False
    start = 0
    while True:
        a = button_a.was_pressed()
        b = button_b.was_pressed()
        if a:
            break
        if b:
            if not pornit:
                start = running_time()
                pornit = True
            else:
                zecimi = (running_time() - start) // 100
                pornit = False
                display.scroll(str(zecimi // 10) + "." + str(zecimi % 10))
        if pornit:
            display.show(Image.TARGET)
        else:
            display.show("C")
        sleep(100)

def porneste(m):
    if m == 0:
        modul_busola()
    elif m == 1:
        modul_termometru()
    elif m == 2:
        modul_cronometru()

NUME = ["B", "T", "C"]
mod = 0

display.show(NUME[mod])

while True:
    a = button_a.was_pressed()
    b = button_b.was_pressed()

    if a:
        mod = (mod + 1) % len(NUME)
    elif b:
        porneste(mod)

    display.show(NUME[mod])
    sleep(100)
```
- Programul are **trei unelte** și un meniu.  
- Recordul se **păstrează** după RESET.  
- Toate uneltele au aceeași formă: o buclă care iese cu `break` pe **A**.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 5** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 6 — Jurnalul și ecranul de pornire (pentru Complet)
Două piese noi. **Jurnalul** ține ultimele 5 temperaturi într-o listă; o modificăm cu `append` și `pop`, deci **nu** avem nevoie de `global`:
```python
jurnal = []

def modul_jurnal():
    while True:
        a = button_a.was_pressed()
        b = button_b.was_pressed()
        if a:
            break
        if b:
            jurnal.append(temperature())
            if len(jurnal) > 5:
                jurnal.pop(0)
            display.show(Image.YES)
            sleep(500)
        if accelerometer.was_gesture("shake"):
            for t in jurnal:
                display.scroll(str(t))
        display.show("J")
        sleep(100)
```
**Ecranul de pornire** învârte un ceas și derulează numele Cutiei:
```python
def pornire():
    for img in Image.ALL_CLOCKS:
        display.show(img)
        sleep(80)
    display.scroll("Explorator")
```
Ca să le adaugi în Cutie, schimbi **doar trei lucruri**: pui litera `"J"` în `NUME`, adaugi `elif m == 3: modul_jurnal()` în `porneste` și chemi `pornire()` înainte de bucla meniului. Meniul folosește `% len(NUME)`, deci restul se adaptează singur.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 6** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 7 — Cutia Complet
Pornești de la **Cutia Minim** (Exemplul 5) și faci patru schimbări:

1. Adaugi funcțiile `modul_jurnal` (cu lista `jurnal`) și `pornire` din Exemplul 6, **înainte** de `porneste`.  
2. În `porneste` adaugi unealta nouă:
```python
def porneste(m):
    if m == 0:
        modul_busola()
    elif m == 1:
        modul_termometru()
    elif m == 2:
        modul_cronometru()
    elif m == 3:
        modul_jurnal()
```
3. În listă adaugi litera `J`:
```python
NUME = ["B", "T", "C", "J"]
```
4. Chemi `pornire()` o singură dată, **înainte** de bucla meniului:
```python
mod = 0

pornire()
display.show(NUME[mod])
```
Restul programului rămâne la fel. Toate cele **4 unelte** au aceeași formă: o buclă care iese cu `break` pe **A**. Programul are **mai multe funcții mici**, nu un bloc mare.

**Gata când:**  
- [ ] Am adăugat Jurnalul și ecranul de pornire și am rulat **Cutia Complet** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## Greșeli frecvente
1. **„Nu pot ieși din unealtă”** — unealta nu citește `button_a.was_pressed()` sau nu are `break`.  
2. **„Recordul dispare”** — ai reîncărcat programul pe placă. Folosește RESET.  
3. **„Cronometrul arată un timp ciudat”** — ai uitat să pui `start = running_time()` la pornire.  
4. **„IndexError în meniu”** — modul nu e între `0` și `len(NUME) - 1`. Folosește `%`.  
5. **„Busola arată greșit”** — calibrează departe de magneți și laptopuri.  
6. **„TypeError la lipire”** — nu poți lipi un text de un număr: `"T=" + str(t)`.

---

## De făcut azi — „Cutia Exploratorului”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Meniu + Busolă + Termometru cu record + Cronometru |
| **Complet** | Minim + Jurnal + ecran de pornire |

### Exercițiul A — „Cutia” (obligatoriu)
Construiește Cutia pas cu pas: întâi **fiecare unealtă singură**, apoi meniul. Bifează în caiet fiecare unealtă testată.

### Exercițiul B — Testează cu un coleg
Dă placa unui coleg, fără să-i explici nimic. Notează **un lucru** pe care nu l-a înțeles din meniu și îmbunătățește-l (de exemplu o literă mai clară sau un mesaj de început).

### Exercițiul C — O unealtă nouă
Adaugă o unealtă la alegere, de exemplu **L** (lumină): arată un grafic cu rânduri, ca în L1. Ce schimbi în `NUME` și în `porneste`?

### Exercițiul D — Găsește greșelile
```text
NUME = ["B", "T", "C"]
mod = 0

def modul_termometru():
    while True:
        if button_b.was_pressed():
            display.scroll("T=" + temperature())
        sleep(100)

while True:
    if button_a.was_pressed():
        mod = mod + 1
    if button_b.was_pressed():
        modul_termometru()
    display.show(NUME[mod])
```

### Exercițiul E — Explică
1. De ce testăm fiecare unealtă separat?  
2. Ce face `break` într-o unealtă?  
3. De ce `NUME` și `% len(NUME)` fac meniul ușor de extins?

**Gata când:**
- [ ] Meniul trece prin toate uneltele  
- [ ] Fiecare unealtă pornește și se oprește cu A  
- [ ] Recordul de temperatură se păstrează după RESET  
- [ ] Cronometrul arată timpul corect  
- [ ] Ai răspunsurile la B–E  

**→ Minim când:** un coleg folosește toate cele 3 unelte fără ajutor.

---

## Bonus ★★★ — Provocare: Jurnalul păstrat
*Doar dacă ai terminat Complet.*

Jurnalul din Cutie uită totul la RESET. Fă-l să **țină minte**, ca recordul.

**Ajutor:** un fișier ține doar text, deci lista se scrie ca text cu virgule, de exemplu `"21,23,22"`. Construiești textul cu un `for`, iar la citire îl tai cu `text.split(",")` și transformi fiecare bucată cu `int()`. Media listei e `sum(jurnal) // len(jurnal)`.

- [ ] Când notezi o temperatură cu **B**, jurnalul întreg se salvează într-un fișier (o singură linie, valorile separate prin virgulă)
- [ ] La pornirea Cutiei, jurnalul se citește din fișier; dacă fișierul nu există sau e gol, începe cu o listă goală
- [ ] Jurnalul păstrează tot **cel mult 5** valori
- [ ] La scuturare placa derulează valorile, apoi **media** lor (doar dacă lista nu e goală)
- [ ] Salvezi doar când se notează o valoare nouă, nu la fiecare tură de buclă
- [ ] Salvează proiectul ca `Prenume_Nume_MP2_L09_Jurnal`

## Recapitulare pe scurt
1. Un program mare = **funcții mici**, fiecare testată.  
2. Un meniu = listă + `%` + `porneste(m)`.  
3. Unealta are propria buclă și iese cu `break`.  
4. Datele importante se **salvează** în fișier.  
5. Timpul se măsoară cu `running_time()`, fără `sleep` lung.

**Schema pe scurt (pe foaie):** meniu (A alege, B pornește) → unelte-funcții (busolă · termometru + fișier · cronometru · jurnal listă) → A = ieșire

## Quiz scurt
- Câte unelte are Cutia Minim?  
- Cum se oprește o unealtă?  
- Unde se salvează recordul?  
- De ce nu folosim un `sleep` lung la cronometru?

## Temă
**Unealta Lanterna.** Scrie acasă, în editor (merge și în simulator, fără placă), o unealtă nouă pentru Cutie: funcția `modul_lanterna()`. Ea arată ecranul plin, iar **B** schimbă luminozitatea în cerc între trei niveluri; **A** iese din unealtă. Poți folosi `Image("99999:99999:99999:99999:99999") * 0.3` pentru luminozitate mai mică. Adaugă-o în meniu cu litera `"L"`. Salvează-l ca `Prenume_Nume_MP2_L09_Tema`.

## Ce urmează — Lecția 10
Ultima lecție: **Expoziția Python Pro**. Îți prezinți Cutia sau alt proiect din modul și primești insigna **micro:bit Python Pro**.

---

## Răspunsuri

**Exercițiul B:** nu există un singur răspuns. Important e să observi ce n-a înțeles colegul și să schimbi ceva în program (o literă, un mesaj, o animație).

**Exercițiul C:**
```python
def modul_lumina():
    while not button_a.was_pressed():
        nivel = display.read_light_level() // 51
        img = Image(5, 5)
        for y in range(nivel):
            for x in range(5):
                img.set_pixel(x, 4 - y, 9)
        display.show(img)
        sleep(100)
```
`NUME` primește litera `"L"` la sfârșit, iar în `porneste` se adaugă un `elif` pentru numărul următor (`3` dacă nu există Jurnalul, altfel `4`).

**Exercițiul D:** 1) lipsește `from microbit import *`. 2) `"T=" + temperature()` lipește text cu număr: trebuie `"T=" + str(temperature())`. 3) `mod = mod + 1` poate ieși din listă; trebuie `(mod + 1) % len(NUME)`. 4) `modul_termometru` nu are cum să iasă din buclă (lipsește `A` și `break`). 5) în bucla mare lipsește `sleep`.

**Exercițiul E:** 1) Ca să găsești greșelile ușor, într-o singură bucată. 2) Oprește bucla și funcția se termină, deci revenim în meniu. 3) Adăugăm o literă în listă și un `elif`; restul se adaptează singur.

**Bonus ★★★ — Jurnalul păstrat:**

*Schema logicii:*
1. Jurnalul se scrie în fișier ca **un singur text**, cu valorile separate prin virgulă: `"21,23,22,"`.  
2. `salveaza_jurnal(lista)` lipește fiecare valoare și o virgulă într-un text și îl scrie în fișier.  
3. `citeste_jurnal()` deschide fișierul, taie textul cu `split(",")` și transformă fiecare bucată cu `int()`. Dacă fișierul lipsește sau e stricat, întoarce o listă goală.  
4. La pornire `jurnal = citeste_jurnal()`. La **B** salvezi după `append` și `pop`. La scuturare derulezi valorile și media, doar dacă lista nu e goală.

```python
JURNAL = "jurnal.txt"

def citeste_jurnal():
    lista = []
    try:
        with open(JURNAL) as f:
            text = f.read()
        for bucata in text.split(","):
            if bucata != "":
                lista.append(int(bucata))
    except OSError:
        return []
    except ValueError:
        return []
    return lista

def salveaza_jurnal(lista):
    text = ""
    for t in lista:
        text = text + str(t) + ","
    with open(JURNAL, "w") as f:
        f.write(text)

jurnal = citeste_jurnal()

def modul_jurnal():
    while True:
        a = button_a.was_pressed()
        b = button_b.was_pressed()
        if a:
            break
        if b:
            jurnal.append(temperature())
            if len(jurnal) > 5:
                jurnal.pop(0)
            salveaza_jurnal(jurnal)
            display.show(Image.YES)
            sleep(500)
        if accelerometer.was_gesture("shake"):
            if len(jurnal) > 0:
                for t in jurnal:
                    display.scroll(str(t))
                display.scroll(str(sum(jurnal) // len(jurnal)))
        display.show("J")
        sleep(100)
```
În Cutia Complet pui `JURNAL`, `citeste_jurnal`, `salveaza_jurnal` și `jurnal = citeste_jurnal()` **înainte** de `modul_jurnal`, în locul lui `jurnal = []`.
- Textul `"21,23,22,"` are o virgulă la sfârșit, deci `split` dă o ultimă bucată goală; de aceea sărim peste `""`.  
- `try / except` din L8 acoperă ambele cazuri: fișier lipsă (`OSError`) și text care nu e număr (`ValueError`).  
- Salvezi doar când notezi o valoare nouă, nu la fiecare tură.  
- `sum(jurnal) // len(jurnal)` e media, fără zecimale.
