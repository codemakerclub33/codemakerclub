# LECȚIA 7 — Mesaje secrete
### Șiruri, protocol și cifru
**Modulul 2 · Python pe micro:bit · 2 ore**  
**Code Maker Club · micro:bit Python Pro**

> Azi lucrezi cu **text**: tai mesaje în bucăți și le **ascunzi într-un cifru**. Placa ta devine o mică mașină de mesaje secrete.  
> Proiect: **„Mesaje secrete”** · `Prenume_Nume_MP2_L07`

---

## Ce facem azi
La finalul orei parcurgi un text literă cu literă, tai un mesaj cu `split` și codezi un cuvânt cu **cifrul lui Cezar**: fiecare literă se mută cu câteva locuri în alfabet. Mesajele „cu cod” sunt peste tot: de la parole până la comenzile trimise roboților. Azi faci unul singur, pe placa ta.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L6: hărți ca text, `while`, funcții |
| 10–30 | Textul ca listă de litere; `split` și `int()` |
| 30–55 | Alfabetul în cerc: `find` și `%` |
| 55–80 | Funcțiile `muta` și `codeaza` |
| 80–105 | Mesaje secrete (**Minim** și **Complet**) |
| 105–120 | Recapitulare, quiz, temă |

Exercițiile B–E și Provocarea sunt pentru cine termină mai repede, sau pentru acasă.

**Ce ai nevoie:** [python.microbit.org](https://python.microbit.org) · placa micro:bit · cablu USB de date

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `for litera in text:` | Parcurge un text literă cu literă | `for litera in "SALUT":` |
| `text.split(":")` | Taie textul în bucăți, la fiecare `:`; rezultă o listă | `"E:2".split(":")` dă `["E", "2"]` |
| `int(text)` | Transformă textul într-un număr | `int("2")` dă `2` |
| `text.find(litera)` | Poziția literei în text; `-1` dacă nu e acolo | `"ABC".find("C")` dă `2` |
| `text.upper()` | Face toate literele mari | `"salut".upper()` |
| `a + b` cu texte | Lipește două texte | `"SA" + "LUT"` |

**Ajutor în editor:** în panoul **Reference** caută `Strings` și `Advanced maths`.

---

## Pas cu pas

### 1) Textul ca listă de litere
Un text e o înșiruire de litere, ca o listă. Cu `for` le parcurgi pe rând, iar `len()` le numără.

### Exemplul 1 — Literă cu literă
```python
from microbit import *

for litera in "SALUT":
    display.show(litera)
    sleep(500)

display.scroll(str(len("SALUT")))
```
**Ce vezi pe placă:** `S`, `A`, `L`, `U`, `T`, apoi `5`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 1** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### 2) Protocolul: mesaje cu cod
Două programe se înțeleg doar dacă au aceeași **limbă**. O limbă simplă: **tip:valoare**. De exemplu `E:2` înseamnă „emoji-ul numărul 2”. Mesajul se **taie** la `:` cu `split`.

### Exemplul 2 — `split` și `int`
```python
from microbit import *

EMOJI = [Image.HAPPY, Image.SAD, Image.HEART]

mesaj = "E:2"
parti = mesaj.split(":")
tip = parti[0]
numar = int(parti[1])

display.scroll(tip)
display.show(EMOJI[numar])
```
`parti` este lista `["E", "2"]`. `int("2")` face din text un număr, ca să-l folosim ca poziție în listă. Placa derulează `E`, apoi arată inima (poziția `2`).

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 2** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### 3) Cifrul lui Cezar
Un cifru ascunde un mesaj. **Cifrul lui Cezar** mută fiecare literă cu `pas` locuri în alfabet: cu pasul `3`, `A` devine `D`, iar `B` devine `E`. Gândește-te la alfabet ca la un **cerc**: după `Z` urmează iar `A`.

```text
...  X  Y  Z  A  B  C  D  ...
           └─ cu pasul 3, Y ajunge la B
```

Folosim un text cu alfabetul și `find` ca să aflăm poziția unei litere.

### Exemplul 3 — Poziția în alfabet
```python
from microbit import *

ALFABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

display.scroll(str(ALFABET.find("A")))
display.scroll(str(ALFABET.find("D")))
display.scroll(str(ALFABET.find("?")))
```
**Ce vezi pe placă:** `0`, apoi `3`, apoi `-1` (semnul `?` nu e în alfabet).

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 3** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 4 — Funcția `muta`
```python
from microbit import *

ALFABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

def muta(litera, pas):
    i = ALFABET.find(litera)
    if i == -1:
        return litera
    return ALFABET[(i + pas) % 26]

display.scroll(muta("A", 3))
display.scroll(muta("Y", 3))
display.scroll(muta("D", -3))
```
**Ce vezi pe placă:** `D`, apoi `B`, apoi `A`.
- `(i + pas) % 26` face „cercul”: după `Z` se întoarce la `A`. `Y` plus `3` ajunge la `B`.  
- Un pas **negativ** mută înapoi, deci **decodează**.  
- Un semn care nu e literă (spațiu, `!`) rămâne la fel.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 4** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 5 — Codăm un cuvânt întreg
```python
from microbit import *

ALFABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

def muta(litera, pas):
    i = ALFABET.find(litera)
    if i == -1:
        return litera
    return ALFABET[(i + pas) % 26]

def codeaza(text, pas):
    rezultat = ""
    for litera in text.upper():
        rezultat = rezultat + muta(litera, pas)
    return rezultat

secret = codeaza("salut", 3)
display.scroll(secret)
display.scroll(codeaza(secret, -3))
```
**Ce vezi pe placă:** `VDOXW`, apoi `SALUT`. Aceeași funcție **codează** și **decodează**, doar pasul se schimbă din `3` în `-3`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 5** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 6 — Mesaje secrete (Minim)
```python
from microbit import *

ALFABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
CUVINTE = ["SALUT", "PIRAT", "COMOARA", "ROBOT", "PIXEL"]
PAS = 3

def muta(litera, pas):
    i = ALFABET.find(litera)
    if i == -1:
        return litera
    return ALFABET[(i + pas) % 26]

def codeaza(text, pas):
    rezultat = ""
    for litera in text.upper():
        rezultat = rezultat + muta(litera, pas)
    return rezultat

i = 0
display.scroll(CUVINTE[i])

while True:
    if button_a.was_pressed():
        i = (i + 1) % len(CUVINTE)
        display.scroll(CUVINTE[i])
    if button_b.was_pressed():
        display.scroll(codeaza(CUVINTE[i], PAS))
    sleep(100)
```
- **A** → cuvântul următor, din cerc.  
- **B** → cuvântul **codat** cu pasul `3`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 6** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 7 — Mesaje secrete (Complet)
Adăugăm decodarea și o cheie care se schimbă:
```python
from microbit import *

ALFABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
CUVINTE = ["SALUT", "PIRAT", "COMOARA", "ROBOT", "PIXEL"]

def muta(litera, pas):
    i = ALFABET.find(litera)
    if i == -1:
        return litera
    return ALFABET[(i + pas) % 26]

def codeaza(text, pas):
    rezultat = ""
    for litera in text.upper():
        rezultat = rezultat + muta(litera, pas)
    return rezultat

pas = 3
i = 0
display.scroll(CUVINTE[i])

while True:
    a = button_a.was_pressed()
    b = button_b.was_pressed()

    if a and b:
        secret = codeaza(CUVINTE[i], pas)
        display.scroll(codeaza(secret, -pas))
    elif a:
        i = (i + 1) % len(CUVINTE)
        display.scroll(CUVINTE[i])
    elif b:
        display.scroll(codeaza(CUVINTE[i], pas))

    if accelerometer.was_gesture("shake"):
        pas = pas % 5 + 1
        display.scroll(str(pas))
    sleep(100)
```
- **A+B** → codează cuvântul, apoi îl **decodează** la loc: ar trebui să vezi cuvântul de la început.  
- **Scuturarea** schimbă cheia: `1, 2, 3, 4, 5`, apoi iar `1` (`pas % 5 + 1`).  
- Ordinea contează: `a and b` se verifică **înaintea** lui `a` și `b` separat.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 7** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## Greșeli frecvente
1. **„ValueError”** — ai dat lui `int()` un text care nu e număr (de exemplu `"abc"`).  
2. **„IndexError”** — după `split`, mesajul nu avea destule bucăți, sau ai cerut o poziție care nu există.  
3. **„TypeError la lipire”** — nu poți lipi un text de un număr: `"T" + str(numar)`.  
4. **„Cifrul dă litere mici sau semne ciudate”** — ai uitat `text.upper()`, iar `find` nu găsește literele mici.  
5. **„Litera nu se mută”** — `muta` nu întoarce valoarea (`return`) sau alfabetul are litere lipsă.  
6. **„Decodarea nu dă cuvântul”** — pasul de decodare trebuie să fie **opusul** celui de codare (`-pas`).  
7. **„SyntaxError”** — lipsesc `:` după `def` sau `for`.

---

## De făcut azi — „Mesaje secrete”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Lista de cuvinte · **A** schimbă cuvântul · **B** îl arată codat cu pasul `3` (Exemplul 6) |
| **Complet** | Minim + **A+B** decodează · **scuturarea** schimbă pasul `1–5` (Exemplul 7) |

### Exercițiul A — „Mesaje secrete” (obligatoriu)
Scrie programul din Exemplul 6 (Minim). Schimbă lista cu **5 cuvinte ale tale**, fără diacritice. Pentru **Complet**, adaugă A+B și scuturarea, ca la Exemplul 7.

### Exercițiul B — Ce afișează?
```python
ALFABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

def muta(litera, pas):
    i = ALFABET.find(litera)
    if i == -1:
        return litera
    return ALFABET[(i + pas) % 26]

print(muta("Z", 1))
print(muta("B", -2))
print(muta("!", 5))
```
Spune ce se afișează, fără să rulezi. Apoi verifică în simulator, în consola serială.

### Exercițiul C — Decodorul
Scrie funcția `emoji_din(mesaj)` care primește un mesaj ca `"E:1"` și **întoarce** imaginea de pe poziția `1` din lista `EMOJI = [Image.HAPPY, Image.SAD, Image.HEART]`. Apoi arat-o cu `display.show(emoji_din("E:0"))`.

### Exercițiul D — Găsește greșelile
Programul are **4 greșeli**. Rescrie-l corect.
```text
def codeaza(text, pas)
    rezultat = ""
    for litera in text:
        rezultat = rezultat + ALFABET[ALFABET.find(litera) + pas]
    rezultat

display.scroll(codeaza("abc", 3))
```

### Exercițiul E — Explică
1. Ce face `"E:2".split(":")`?  
2. De ce folosim `% 26` la cifru?  
3. Cum decodezi un mesaj codat cu pasul `5`?

**Gata când:**
- [ ] Merge pe placa adevărată sau în simulator  
- [ ] **B** arată cuvântul codat corect  
- [ ] (Complet) **A+B** decodează, iar scuturarea schimbă pasul  
- [ ] Cuvintele sunt ale mele, fără diacritice  
- [ ] Ai răspunsurile la B–E  

**→ Minim când:** un coleg alege un cuvânt, îți arată codul și tu poți spune ce cuvânt era.

---

## Bonus ★★★ — Provocare: Detectivul de coduri
*Doar dacă ai terminat Complet.*

Placa alege un cuvânt secret și îl codează. Tu trebuie să găsești **pasul**.

**Ajutor:** `random.choice(CUVINTE)` alege un cuvânt, iar `random.randint(1, 25)` alege un pas (ai nevoie de `import random`). Pasul tău de încercat poate fi o variabilă `incercare`, mărită cu `1` la fiecare apăsare pe **A**.

- [ ] La început placa alege la întâmplare un cuvânt din listă și un pas secret, apoi derulează cuvântul **codat**
- [ ] **A** mărește încercarea cu `1` (de la `1` la `25`, apoi iar `1`), iar numărul se vede pe ecran
- [ ] **B** decodează cuvântul codat cu `-incercare` și îl derulează
- [ ] Dacă decodarea dă cuvântul secret, apare `Image.HAPPY`; altfel apare `Image.SAD` și poți încerca din nou
- [ ] Placa numără încercările și le derulează după ce ai găsit pasul
- [ ] Salvează proiectul ca `Prenume_Nume_MP2_L07_Detectiv`

## Recapitulare pe scurt
1. Un text se parcurge cu `for litera in text:`.  
2. `split(":")` taie un mesaj în bucăți, iar `int()` face un număr din text.  
3. `find` dă poziția unei litere în alfabet, iar `% 26` face din alfabet un cerc: după `Z` urmează `A`.  
4. Un pas negativ **decodează** ce a codat pasul pozitiv.  
5. Aceeași funcție `muta` stă la baza lui `codeaza`.

**Schema pe scurt (pe foaie):** cuvânt → `muta` pe fiecare literă (`find`, `+ pas`, `% 26`) → `codeaza` → cu `-pas` → cuvântul înapoi

## Quiz scurt
- Ce dă `"A:7".split(":")`?  
- De ce folosim `% 26` la cifru?  
- Ce dă `ALFABET.find("C")`?  
- Cum decodezi un mesaj codat cu pasul `3`?

## Temă
**Cifrul meu.** Scrie acasă, în editor (merge și în simulator, fără placă), un program care codează **numele tău** cu pasul `5`. La **A** placa derulează numele codat, la **B** derulează numele decodat. Salvează-l ca `Prenume_Nume_MP2_L07_Tema`.

## Ce urmează — Lecția 8
Placa învață să **țină minte** lucruri chiar și după ce o oprești: scrie într-un fișier și își păstrează recordul. Acolo înveți și `try / except`, ca să nu se oprească programul la o greșeală.

---

## Răspunsuri

**Exercițiul B:** `muta("Z", 1)` dă `A` (după `Z` se întoarce la început). `muta("B", -2)` dă `Z`: de la `B` înapoi cu două locuri se ajunge la `Z`. `muta("!", 5)` dă `!`, pentru că semnul nu e literă.

**Exercițiul C:**
```python
from microbit import *

EMOJI = [Image.HAPPY, Image.SAD, Image.HEART]

def emoji_din(mesaj):
    parti = mesaj.split(":")
    return EMOJI[int(parti[1])]

display.show(emoji_din("E:0"))
```

**Exercițiul D:** 1) lipsește `:` după `def codeaza(text, pas)`. 2) `ALFABET` nu e definit (`NameError`). 3) `rezultat` pe un rând singur nu întoarce nimic: trebuie `return rezultat`. 4) cu litere mici (`"abc"`) `find` dă `-1`: trebuie `text.upper()`. (În plus, la litere de la capătul alfabetului apare `IndexError`: trebuie `% 26`.)

**Exercițiul E:** 1) Dă lista `["E", "2"]`. 2) Ca după `Z` să se întoarcă la `A`. 3) Cu pasul `-5`: `codeaza(mesaj, -5)`.

**Bonus ★★★ — Detectivul de coduri:**

*Schema logicii:*
1. Placa alege un cuvânt secret și un pas secret, apoi calculează `cod = codeaza(secret, pas)` și îl derulează.  
2. `incercare` pornește de la `0`. **A** o mărește cu `incercare % 25 + 1` (de la `1` la `25`, apoi iar `1`) și o derulează.  
3. **B** numără încercarea, decodează `cod` cu `-incercare` și derulează rezultatul.  
4. Dacă rezultatul e `secret`, arăți `Image.HAPPY` și numărul de încercări, apoi programul se oprește cu `break`. Altfel arăți `Image.SAD` și poți încerca din nou.

```python
from microbit import *
import random

ALFABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
CUVINTE = ["SALUT", "PIRAT", "COMOARA", "ROBOT", "PIXEL"]

def muta(litera, pas):
    i = ALFABET.find(litera)
    if i == -1:
        return litera
    return ALFABET[(i + pas) % 26]

def codeaza(text, pas):
    rezultat = ""
    for litera in text.upper():
        rezultat = rezultat + muta(litera, pas)
    return rezultat

secret = random.choice(CUVINTE)
pas = random.randint(1, 25)
cod = codeaza(secret, pas)
incercare = 0
incercari = 0

display.scroll(cod)

while True:
    if button_a.was_pressed():
        incercare = incercare % 25 + 1
        display.scroll(str(incercare))
    if button_b.was_pressed():
        incercari += 1
        decodat = codeaza(cod, -incercare)
        display.scroll(decodat)
        if decodat == secret:
            display.show(Image.HAPPY)
            sleep(1000)
            display.scroll(str(incercari))
            break
        else:
            display.show(Image.SAD)
            sleep(1000)
    sleep(100)
```
- `incercare % 25 + 1` merge de la `1` la `25`, iar după `25` revine la `1`, la fel ca meniul în cerc.  
- Decodezi cu `-incercare`: dacă pasul tău e egal cu pasul secret, ajungi la cuvântul de la început.  
- `random.randint(1, 25)` alege pasul secret, iar `random.choice(CUVINTE)` alege cuvântul.
