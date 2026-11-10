# LECȚIA 6 — Roata norocului
### Numere la întâmplare și liste
**Modulul 1 · Python pe micro:bit · 2 ore**  
**Code Maker Club · micro:bit Coder**

> Azi placa învață să **aleagă la întâmplare**. Facem o **roată a norocului**: o săgeată se învârte, încetinește și se oprește singură, iar fiecare direcție are o misiune pentru tine.  
> Proiect: **„Roata norocului”** · `Prenume_Nume_MP1_L06`

---

## Ce facem azi
La finalul orei folosești `random` ca să alegi numere și lucruri la întâmplare și ții mai multe valori într-o **listă**. Jocurile de societate, loteriile și jocurile video au nevoie de întâmplare: un zar, o carte trasă, un monstru care apare când nu te aștepți. Azi înveți cum o produce o placă, cu doar două instrucțiuni noi.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L5: senzori, praguri, constante |
| 10–25 | `import random` și `random.randint` |
| 25–50 | Liste: `[ ]`, poziția cu `[0]`, `len()`, `random.choice` |
| 50–75 | Lista de săgeți, `for` și încetinirea cu `%` |
| 75–105 | Roata norocului (**Minim** și **Complet**) |
| 105–120 | Recapitulare, quiz, temă |

Exercițiile B–E și Provocarea sunt pentru cine termină mai repede, sau pentru acasă.

**Ce ai nevoie:** [python.microbit.org](https://python.microbit.org) · placa micro:bit · cablu USB de date

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `import random` | Aduce uneltele pentru întâmplare; se scrie sus, după `from microbit import *` | primul rând după `from microbit import *` |
| `random.randint(a, b)` | Un număr întreg la întâmplare, de la `a` la `b`, **inclusiv** | `random.randint(1, 9)` |
| `lista = [x, y, z]` | O listă: mai multe valori sub un singur nume | `culori = ["rosu", "verde"]` |
| `lista[0]` | Valoarea de pe o poziție; se numără de la **0** | `culori[0]` este `"rosu"` |
| `len(lista)` | Câte elemente are lista | `len(culori)` |
| `random.choice(lista)` | Un element ales la întâmplare din listă | `random.choice(culori)` |
| `%` | Restul împărțirii; ține un număr între `0` și o limită | `i % 8` |

**Ajutor în editor:** în panoul **Reference** caută `Lists (arrays)`, `Maths` și `Advanced maths`.

---

## Pas cu pas

### 1) Întâmplarea în Python
Placa nu poate „arunca un zar”, dar poate calcula un număr care **arată** ca la întâmplare. Pentru asta folosim modulul `random`. Îl aducem în program cu `import random`, pe un rând nou, **sub** `from microbit import *`.

### Exemplul 1 — Un număr la întâmplare
```python
from microbit import *
import random

display.scroll(str(random.randint(1, 9)))
```
`random.randint(1, 9)` dă un număr întreg de la `1` la `9`, **inclusiv** `9`. Apasă din nou **Play**: numărul se schimbă.

**Ce vezi pe placă:** o cifră de la `1` la `9`, alta la fiecare rulare.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 1** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 2 — Mai multe numere la întâmplare
```python
from microbit import *
import random

for i in range(5):
    display.scroll(str(random.randint(10, 99)))
```
Bucla `for` din lecția 2 repetă de 5 ori, deci primești 5 numere de două cifre.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 2** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### 2) Listele — mai multe lucruri într-un loc
O **listă** ține mai multe valori sub un singur nume. Se scrie între paranteze drepte, cu virgulă între elemente. Fiecare element are o **poziție**, iar pozițiile se numără **de la 0**:

| Poziția | `0` | `1` | `2` |
|---------|-----|-----|-----|
| Valoarea | `"rosu"` | `"verde"` | `"albastru"` |

### Exemplul 3 — O valoare dintr-o listă
```python
from microbit import *

culori = ["rosu", "verde", "albastru"]
display.scroll(culori[1])
```
`culori[1]` este al **doilea** element, deci apare `verde`.

**Ce vezi pe placă:** cuvântul `verde`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 3** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 4 — Câte elemente are lista?
```python
from microbit import *

culori = ["rosu", "verde", "albastru"]
display.scroll(str(len(culori)))
display.scroll(culori[len(culori) - 1])
```
`len(culori)` este `3`. Ultimul element e pe poziția `3 - 1 = 2`, nu `3`. Dacă ceri `culori[3]`, Python spune `IndexError: list index out of range`.

**Ce vezi pe placă:** `3`, apoi `albastru`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 4** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 5 — Alegem din listă la întâmplare
```python
from microbit import *
import random

culori = ["rosu", "verde", "albastru"]
display.scroll(random.choice(culori))
```
`random.choice(lista)` alege un element la întâmplare, fără să-ți bați capul cu pozițiile.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 5** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### 3) Roata: o săgeată care se învârte
Python are 8 săgeți: `Image.ARROW_N` (sus), `ARROW_NE`, `ARROW_E` (dreapta), `ARROW_SE`, `ARROW_S` (jos), `ARROW_SW`, `ARROW_W` (stânga) și `ARROW_NW`. Dacă le punem într-o listă, în ordinea acelor de ceasornic, le putem arăta una după alta.

### Exemplul 6 — Lista de săgeți
```python
from microbit import *

SAGETI = [Image.ARROW_N, Image.ARROW_NE, Image.ARROW_E, Image.ARROW_SE,
          Image.ARROW_S, Image.ARROW_SW, Image.ARROW_W, Image.ARROW_NW]

display.show(SAGETI, delay=150)
```
Lista are 8 elemente, pe pozițiile `0` până la `7`. Săgeata face un tur complet, o singură dată. Numele listei e cu litere mari, pentru că nu se schimbă.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 6** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 7 — Încetinirea
```python
from microbit import *

SAGETI = [Image.ARROW_N, Image.ARROW_NE, Image.ARROW_E, Image.ARROW_SE,
          Image.ARROW_S, Image.ARROW_SW, Image.ARROW_W, Image.ARROW_NW]

pauza = 50
for i in range(24):
    display.show(SAGETI[i % 8])
    sleep(pauza)
    pauza += 15
```
- `i % 8` e **restul** împărțirii lui `i` la `8`: pentru `i = 0, 1, … 7` e `0, 1, … 7`, apoi `8 % 8 = 0` și **se reia** de la început. Așa săgeata se învârte de mai multe ori.  
- `pauza += 15` mărește pauza la fiecare pas, deci săgeata **încetinește**.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 7** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 8 — Se oprește la întâmplare
```python
from microbit import *
import random

SAGETI = [Image.ARROW_N, Image.ARROW_NE, Image.ARROW_E, Image.ARROW_SE,
          Image.ARROW_S, Image.ARROW_SW, Image.ARROW_W, Image.ARROW_NW]

pasi = random.randint(16, 30)
pauza = 50
for i in range(pasi):
    display.show(SAGETI[i % 8])
    sleep(pauza)
    pauza += 15
```
De data asta numărul de pași se alege **la întâmplare**, deci săgeata se oprește de fiecare dată în altă parte.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 8** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 9 — Pornim roata cu butonul A
```python
from microbit import *
import random

SAGETI = [Image.ARROW_N, Image.ARROW_NE, Image.ARROW_E, Image.ARROW_SE,
          Image.ARROW_S, Image.ARROW_SW, Image.ARROW_W, Image.ARROW_NW]

display.show(Image.TARGET)

while True:
    if button_a.was_pressed():
        pasi = random.randint(16, 30)
        pauza = 50
        for i in range(pasi):
            display.show(SAGETI[i % 8])
            sleep(pauza)
            pauza += 15
    sleep(50)
```
Roata stă pe `Image.TARGET` până apeși **A**, apoi se învârte și se oprește pe o săgeată.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 9** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 10 — Roata norocului cu misiuni (Complet)
Fiecare săgeată are o **misiune**, pe aceeași poziție dintr-o a doua listă. Misiunile le scrii **tu**, fără diacritice.
```python
from microbit import *
import random

SAGETI = [Image.ARROW_N, Image.ARROW_NE, Image.ARROW_E, Image.ARROW_SE,
          Image.ARROW_S, Image.ARROW_SW, Image.ARROW_W, Image.ARROW_NW]

MISIUNI = ["Sari de 3 ori", "Bate din palme", "Spune un banc", "Fa o grimasa",
           "Canta o strofa", "Danseaza 5 secunde", "Imita un animal", "Zambeste larg"]

directia = 0
display.show(Image.TARGET)

while True:
    if button_a.was_pressed():
        pasi = random.randint(16, 30)
        pauza = 50
        for i in range(pasi):
            directia = i % 8
            display.show(SAGETI[directia])
            sleep(pauza)
            pauza += 15
    if button_b.was_pressed():
        display.scroll(MISIUNI[directia])
        display.show(SAGETI[directia])
    sleep(50)
```
- **A** învârte roata, iar săgeata se oprește la întâmplare.  
- Variabila `directia` ține minte **unde** s-a oprit săgeata (pozițiile `0` până la `7`).  
- **B** derulează misiunea de pe poziția `directia`, apoi readuce săgeata.  
- Cele două liste au câte **8** elemente, ca fiecare săgeată să aibă o misiune.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 10** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## Greșeli frecvente
1. **„NameError: name 'random' isn't defined”** — ai uitat `import random`.  
2. **„AttributeError la `random.`”** — ai scris greșit numele: `randint`, `choice` (cu litere mici).  
3. **„IndexError: list index out of range”** — ai cerut o poziție care nu există; ultima poziție e `len(lista) - 1`.  
4. **„SyntaxError la `randint`”** — lipsește o paranteză sau virgula dintre numere.  
5. **„Săgeata nu se oprește niciodată în alt loc”** — ai pus `random.randint` în afara lui `for`, sau ai uitat `% 8`.  
6. **„Misiunea nu apare la B”** — `directia` nu are o valoare de la început: pune `directia = 0` înainte de `while True:`.  
7. **„Textul are semne ciudate”** — ai folosit diacritice în misiuni.

---

## De făcut azi — „Roata norocului”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | **A** învârte o săgeată care **încetinește** și se oprește la întâmplare (Exemplul 9) |
| **Complet** | Minim + **B** derulează misiunea pentru săgeata la care s-a oprit roata (Exemplul 10, cu **8 misiuni scrise de tine**) |

### Exercițiul A — „Roata” (obligatoriu)
Scrie programul din Exemplul 9 (Minim). Pentru **Complet**, adaugă lista cu 8 misiuni și butonul **B**, ca la Exemplul 10.

### Exercițiul B — Ce poate afișa?
Spune ce valori **poate** să apară pe placă, fără să rulezi. Apoi verifică în simulator, rulând de mai multe ori:
```python
from microbit import *
import random

nume = ["Ana", "Mihai", "Sara", "Radu"]
display.scroll(random.choice(nume))
display.scroll(str(random.randint(1, 3)))
```

### Exercițiul C — Culoarea norocoasă
Scrie un program în care **A** derulează o culoare aleasă la întâmplare dintr-o listă cu 4 culori (fără diacritice), iar **B** derulează un număr norocos de la `1` la `20`.

### Exercițiul D — Găsește greșelile
Programul are **4 greșeli**. Rescrie-l corect.
```text
from microbit import *

animale = ["pisica", "caine", "iepure"]
while True
    if button_a.was_pressed():
    display.scroll(random.choice(animale))
    if button_b.was_pressed():
        display.scroll(animale[3])
```

### Exercițiul E — Explică
1. Ce valori poate da `random.randint(2, 5)`?  
2. Ce poziție are **primul** element dintr-o listă? Dar ultimul, într-o listă cu 8 elemente?  
3. De ce scriem `SAGETI[i % 8]`, nu doar `SAGETI[i]`?

**Gata când:**
- [ ] Merge pe placa adevărată sau în simulator  
- [ ] Săgeata încetinește și se oprește la întâmplare  
- [ ] (Complet) B arată misiunea potrivită săgeții  
- [ ] Misiunile sunt scrise de mine, fără diacritice  
- [ ] Ai răspunsurile la B–E  

**→ Minim când:** un coleg apasă A de trei ori și vede săgeata oprindu-se în locuri diferite.

---

## Bonus ★★★ — Provocare: Ghicește numărul
*Doar dacă ai terminat Complet.*

Fă un joc în care placa alege un număr secret, iar tu îl cauți.

- [ ] La pornire placa alege un număr secret cu `random.randint(1, 9)` și îl ține într-o variabilă
- [ ] **A** mărește cu `1` numărul tău de încercat (`ghicit`), până la `9`, apoi se întoarce la `1`; numărul se vede pe ecran
- [ ] **B** trimite încercarea: dacă e prea mic apare `Image.ARROW_N`, dacă e prea mare apare `Image.ARROW_S`, iar dacă e corect apare `Image.HAPPY`
- [ ] Placa numără încercările și le derulează la final
- [ ] Salvează proiectul ca `Prenume_Nume_MP1_L06_Ghiceste`

## Recapitulare pe scurt
1. `import random` aduce întâmplarea; `random.randint(a, b)` dă un număr de la `a` la `b`, **inclusiv**.  
2. O **listă** ține mai multe valori: `[x, y, z]`.  
3. Pozițiile se numără **de la 0**: primul element e `lista[0]`, ultimul `lista[len(lista) - 1]`.  
4. `random.choice(lista)` alege un element la întâmplare.  
5. `%` dă restul împărțirii și ține un număr într-o limită: `i % 8`.  
6. Două liste cu același număr de elemente se potrivesc pe poziții.

**Schema pe scurt (pe foaie):** apăs **A** → aleg `pasi` la întâmplare → `for` arată `SAGETI[i % 8]` cu pauză tot mai mare → `directia` → **B** arată `MISIUNI[directia]`

## Quiz scurt
- Ce valori poate da `random.randint(1, 6)`?  
- Pe ce poziție e primul element dintr-o listă?  
- Ce face `len(lista)`?  
- De ce folosim `i % 8` la săgeți?

## Temă
**Povestea la întâmplare.** Scrie acasă, în editor (merge și în simulator, fără placă), un program care compune o poveste scurtă din trei liste cu câte cel puțin 4 elemente: **eroii**, **locurile** și **obiectele** (fără diacritice). La **A** placa derulează o propoziție de forma „erou in loc cu obiect”, cu câte un element ales la întâmplare din fiecare listă (de exemplu: „Dragonul in pestera cu o cheie”). Salvează-l ca `Prenume_Nume_MP1_L06_Tema`.

## Ce urmează — Lecția 7
Înveți să-ți faci propriile **unelte**: funcții cu `def`, care primesc valori și le întorc, ca să nu mai scrii același cod de mai multe ori.

---

## Răspunsuri

**Exercițiul B:** primul `scroll` arată **un** nume din listă: `Ana`, `Mihai`, `Sara` sau `Radu`. Al doilea arată `1`, `2` sau `3`. De fiecare dată când rulezi, combinația poate fi alta.

**Exercițiul C:**
```python
from microbit import *
import random

culori = ["rosu", "verde", "albastru", "galben"]

while True:
    if button_a.was_pressed():
        display.scroll(random.choice(culori))
    if button_b.was_pressed():
        display.scroll(str(random.randint(1, 20)))
    sleep(50)
```

**Exercițiul D:**
```python
from microbit import *
import random

animale = ["pisica", "caine", "iepure"]
while True:
    if button_a.was_pressed():
        display.scroll(random.choice(animale))
    if button_b.was_pressed():
        display.scroll(animale[2])
    sleep(50)
```
Greșelile: lipsea `import random`; lipseau `:` după `while True`; rândul `display.scroll(random.choice(animale))` nu avea indentare sub `if`; iar `animale[3]` nu există: lista are 3 elemente, deci pozițiile sunt `0`, `1`, `2`.

**Exercițiul E:** 1) `2`, `3`, `4` sau `5`. 2) Primul e pe poziția `0`; ultimul, într-o listă cu 8 elemente, e pe `7`. 3) `i` crește peste `7` și ar cere o poziție care nu există; `i % 8` îl ține mereu între `0` și `7`, deci săgeata se învârte de mai multe ori.

**Bonus ★★★ — Ghicește numărul:**

*Schema logicii:*
1. La pornire alegi `secret` cu `random.randint(1, 9)`. `ghicit` începe de la `1`, iar `incercari` de la `0`.  
2. **A** mărește `ghicit`; după `9` se întoarce la `1`. Numărul se vede pe ecran.  
3. **B** trimite încercarea: crește `incercari`, apoi compari `ghicit` cu `secret`. Prea mic: `ARROW_N`. Prea mare: `ARROW_S`.  
4. Dacă e corect, arăți `HAPPY`, derulezi numărul de încercări și pornești un joc nou.

```python
from microbit import *
import random

secret = random.randint(1, 9)
ghicit = 1
incercari = 0
display.show(ghicit)

while True:
    if button_a.was_pressed():
        ghicit += 1
        if ghicit > 9:
            ghicit = 1
        display.show(ghicit)

    if button_b.was_pressed():
        incercari += 1
        if ghicit < secret:
            display.show(Image.ARROW_N)
            sleep(800)
            display.show(ghicit)
        elif ghicit > secret:
            display.show(Image.ARROW_S)
            sleep(800)
            display.show(ghicit)
        else:
            display.show(Image.HAPPY)
            sleep(1000)
            display.scroll("Incercari: " + str(incercari))
            secret = random.randint(1, 9)
            ghicit = 1
            incercari = 0
            display.show(ghicit)

    sleep(50)
```
- `secret` se alege o singură dată, la început, și se schimbă doar după ce ai ghicit.  
- Săgeata în sus înseamnă „caută un număr mai mare”, săgeata în jos „caută unul mai mic”.  
- `"Incercari: " + str(incercari)` lipește textul cu numărul, deci numărul trece prin `str()`.
