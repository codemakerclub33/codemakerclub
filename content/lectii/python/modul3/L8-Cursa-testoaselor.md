# LECȚIA 8 — Cursa țestoaselor
### Mai multe țestoase, o listă și o cursă
**Modulul 3 · Desenăm cu Turtle · 2 ore**  
**Code Maker Club · Turtle Artist**

> Până acum aveai o singură țestoasă. Azi sunt **cinci**, și aleargă una contra alteia! Care ajunge prima? Nu se știe: fiecare pas este ales la întâmplare. Poți și să pariezi pe câștigătoare.  
> Proiect: **„Cursa țestoaselor”** · fișier: `Prenume_Nume_P3_L8.py`

---

## Ce facem azi
La finalul orei creezi mai multe țestoase, le ții într-o listă, le muți cu pași aleatori, oprești cursa când una trece de linia de sosire, afli câștigătoarea, faci un clasament și construiești o cursă cu pariu. Aproape orice joc are **mai multe personaje** care se mișcă în același timp: inamici, mașini, jucători. Ca să le gestionezi, le pui într-o **listă** și le muți cu o buclă. Așa vei face și în Pygame.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare L7 |
| 10–30 | Două țestoase și linia de sosire (**Exemplele 1–2**) |
| 30–50 | Cursa cu două țestoase (**Exemplul 3**) |
| 50–70 | Lista de țestoase (**Exemplele 4–5**) |
| 70–90 | Câștigătorul și clasamentul (**Exemplul 6**) |
| 90–100 | Pariul (**Exemplul 7**) |
| 100–118 | Mini-proiect (**Exemplul 8**) |
| 118–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `x = turtle.Turtle()` · `lista.append(x)` | Creezi mai multe țestoase și le păstrezi într-o listă | `testoase.append(x)` |
| `while a.xcor() < FINAL:` | Cursa merge până când o țestoasă ajunge la linie | `while a.xcor() < FINAL and b.xcor() < FINAL:` |
| `time.sleep(0.02)` | Pauză de 0,02 secunde, ca să vedem cursa | în bucla cursei |
| `max(lista)` · `lista.index(valoare)` | Valoarea cea mai mare · poziția ei în listă | `pozitii.index(max(pozitii))` |
| `lista.sort(reverse=True)` | Sortează descrescător | în `clasament` |
| `screen.textinput(titlu, mesaj)` | Ca `input()`, dar într-o căsuță de dialog | pariul |

---

## 1. Recapitulare rapidă din L7

- Funcția legată de click primește `x` și `y`.
- Un dicționar sau o listă păstrează date între apeluri.
- `random.randint(a, b)` alege un număr întreg între `a` și `b`.

**Încearcă tu (3 min)**  
- [ ] Alege un număr aleator între 1 și 8 și afișează-l  

---

## 2. Țestoase la start

### Exemplul 1 — Două țestoase

```python
import turtle

a = turtle.Turtle()
a.shape("turtle")
a.color("red")
a.penup()
a.goto(-200, 40)

b = turtle.Turtle()
b.shape("turtle")
b.color("blue")
b.penup()
b.goto(-200, -40)

turtle.done()
```

**Ce vezi pe ecran:** **două țestoase**, una roșie și una albastră, în partea stângă a ferestrei, una deasupra celeilalte. Fiecare țestoasă are propriul nume (`a`, `b`) și propriile comenzi, independente una de alta.

### Exemplul 2 — Linia de sosire

```python
import turtle

START = -200
FINAL = 200

linie = turtle.Turtle()
linie.hideturtle()
linie.speed(0)
linie.pensize(3)

linie.penup()
linie.goto(START - 20, 100)
linie.pendown()
linie.goto(START - 20, -100)

linie.penup()
linie.goto(FINAL, 100)
linie.pendown()
linie.color("red")
linie.goto(FINAL, -100)

turtle.done()
```

**Ce vezi pe ecran:** **două linii verticale** lungi de 200: una **neagră** la start (la stânga) și una **roșie** la sosire (la dreapta). `START` și `FINAL` sunt **constante**: nume scrise cu litere mari pentru valori care nu se schimbă. Dacă vrei o pistă mai lungă, le schimbi într-un singur loc.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 1** (Două țestoase)  
- [ ] Am scris și am rulat **Exemplul 2** (Linia de sosire)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 3. Cursa cu două țestoase

### Exemplul 3 — Cine ajunge prima?

```python
import random
import time
import turtle

START = -200
FINAL = 200

a = turtle.Turtle()
a.shape("turtle")
a.color("red")
a.penup()
a.goto(START, 40)
a.speed(0)

b = turtle.Turtle()
b.shape("turtle")
b.color("blue")
b.penup()
b.goto(START, -40)
b.speed(0)

while a.xcor() < FINAL and b.xcor() < FINAL:
    a.forward(random.randint(1, 8))
    b.forward(random.randint(1, 8))
    time.sleep(0.02)

if a.xcor() >= FINAL:
    print("A castigat testoasa ROSIE!")
else:
    print("A castigat testoasa ALBASTRA!")

turtle.done()
```

**Ieșire (la tine poate fi alta, pentru că pașii sunt aleatori):**
```text
A castigat testoasa ALBASTRA!
```

**Ce vezi pe ecran:** cele două țestoase pornesc de la start și **aleargă spre dreapta**, cu pași diferiți (de la 1 la 8), până când **una** trece de `FINAL`. Atunci bucla `while` se oprește, iar în fereastra de text apare câștigătoarea.

Bucla `while` merge **cât timp amândouă** sunt încă înainte de linia de sosire. (Dacă amândouă trec linia în același pas, câștigă roșia, pentru că o verificăm prima.) Rândul `time.sleep(0.02)` face o mică pauză la fiecare pas: fără el, cursa ar trece prea repede ca s-o vezi.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 3** (Cine ajunge prima?)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 4. Mai multe țestoase: lista

### Exemplul 4 — Cinci țestoase într-o listă

```python
import turtle

culori = ["red", "blue", "green", "orange", "purple"]
testoase = []

for i in range(5):
    x = turtle.Turtle()
    x.shape("turtle")
    x.color(culori[i])
    x.penup()
    x.goto(-200, 100 - i * 50)
    testoase.append(x)

print("Numar de testoase:", len(testoase))

turtle.done()
```

**Ieșire** (în fereastra Thonny, jos):
```text
Numar de testoase: 5
```

**Ce vezi pe ecran:** **cinci țestoase** (roșie, albastră, verde, portocalie, mov), una sub alta, la același start. Pe verticală sunt la distanța de 50: `y = 100, 50, 0, -50, -100`.

Nu mai dăm fiecărei țestoase un nume separat. Le **adăugăm într-o listă** (`testoase.append(x)`) și ne referim la ele prin poziția din listă: `testoase[0]`, `testoase[1]` și așa mai departe.

### Exemplul 5 — Cursa celor cinci

```python
import random
import time
import turtle

culori = ["red", "blue", "green", "orange", "purple"]
nume = ["rosu", "albastru", "verde", "portocaliu", "mov"]
FINAL = 200
testoase = []

for i in range(5):
    x = turtle.Turtle()
    x.shape("turtle")
    x.color(culori[i])
    x.penup()
    x.goto(-200, 100 - i * 50)
    x.speed(0)
    testoase.append(x)

castigator = -1
while castigator == -1:
    for i in range(5):
        testoase[i].forward(random.randint(1, 8))
        if testoase[i].xcor() >= FINAL and castigator == -1:
            castigator = i
    time.sleep(0.02)

print("A castigat:", nume[castigator])

turtle.done()
```

**Ieșire (la tine poate fi alta):**
```text
A castigat: verde
```

**Ce vezi pe ecran:** cele cinci țestoase aleargă și cursa se oprește când prima trece de linia `x = 200`.

Variabila `castigator` pornește de la `-1` (nimeni). Când o țestoasă trece linia, în `castigator` se păstrează **numărul ei din listă** (0, 1, 2, 3 sau 4), iar `nume[castigator]` ne dă culoarea.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 4** (Cinci țestoase într-o listă)  
- [ ] Am scris și am rulat **Exemplul 5** (Cursa celor cinci)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 5. Câștigătorul și clasamentul

### Exemplul 6 — Cine este în frunte, cine este ultimul?

```python
def cel_mai_departe(pozitii, nume):
    cel_mai_mare = max(pozitii)
    loc = pozitii.index(cel_mai_mare)
    return nume[loc]

def clasament(pozitii, nume):
    perechi = []
    for i in range(len(pozitii)):
        perechi.append([pozitii[i], nume[i]])
    perechi.sort(reverse=True)
    rezultat = []
    for pereche in perechi:
        rezultat.append(pereche[1])
    return rezultat

pozitii = [120, 250, 180, 90, 240]
nume = ["rosu", "albastru", "verde", "portocaliu", "mov"]

print("In frunte:", cel_mai_departe(pozitii, nume))
print("Distanta maxima:", max(pozitii))
print("Ultimul loc:", nume[pozitii.index(min(pozitii))])

ordine = clasament(pozitii, nume)
for loc in range(len(ordine)):
    print(f"{loc + 1}. {ordine[loc]}")
```

**Ieșire** (în fereastra Thonny, jos):
```text
In frunte: albastru
Distanta maxima: 250
Ultimul loc: portocaliu
1. albastru
2. mov
3. verde
4. rosu
5. portocaliu
```

Primul pas: `cel_mai_departe` primește două liste, **pozițiile** țestoaselor și **numele** lor. `max(pozitii)` găsește valoarea cea mai mare, `pozitii.index(...)` spune la ce poziție din listă se află, iar `nume[loc]` ne dă numele acelei țestoase. Pozițiile și numele sunt în aceeași ordine.

Al doilea pas: `clasament` pune fiecare **poziție** împreună cu **numele** (o listă mică `[poziție, nume]`), sortează lista descrescător (cel mai departe primul) și păstrează doar numele. Așa obținem clasamentul: albastru (250), mov (240), verde (180), roșu (120) și portocaliu (90).

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 6** (Cine este în frunte, cine este ultimul?)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 6. Pariul

### Exemplul 7 — Alegem câștigătoarea

```python
import turtle

screen = turtle.Screen()
nume = ["rosu", "albastru", "verde", "portocaliu", "mov"]

pariu = screen.textinput("Pariu", "Pe ce culoare pariezi? (rosu, albastru, verde, portocaliu, mov)")
if pariu is None:
    pariu = ""
pariu = pariu.lower().strip()

if pariu in nume:
    print("Ai pariat pe:", pariu)
else:
    print("Nu cunosc aceasta culoare:", pariu)

castigator = "verde"
if pariu == castigator:
    print("Ai castigat pariul!")
else:
    print("Ai pierdut pariul.")

turtle.done()
```

**Ieșire (dacă ai scris `verde` în căsuță):**
```text
Ai pariat pe: verde
Ai castigat pariul!
```

**Ce vezi pe ecran:** se deschide o **căsuță mică de dialog** cu întrebarea „Pe ce culoare pariezi?”. Scrii o culoare, apeși OK, iar în fereastra de text apare rezultatul. Aici câștigătoarea este scrisă direct în program (`"verde"`) ca să testăm; în jocul final ea va fi aleasă de cursă.

- `screen.textinput(titlu, mesaj)` este ca `input()`, dar într-o fereastră;
- dacă apeși **Cancel**, răspunsul este `None` și îl transformăm în text gol;
- `lower()` face literele mici, iar `strip()` taie spațiile de la margini: `" Verde "` devine `"verde"`.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 7** (Alegem câștigătoarea)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 7. Mini-proiect

### Exemplul 8 — Cursa țestoaselor

```python
import random
import time
import turtle

screen = turtle.Screen()
screen.setup(700, 500)

culori = ["red", "blue", "green", "orange", "purple"]
nume = ["rosu", "albastru", "verde", "portocaliu", "mov"]
START = -250
FINAL = 280

def deseneaza_pista():
    pista = turtle.Turtle()
    pista.hideturtle()
    pista.speed(0)
    pista.pensize(3)
    pista.penup()
    pista.goto(START - 15, 140)
    pista.pendown()
    pista.goto(START - 15, -140)
    pista.penup()
    pista.goto(FINAL, 140)
    pista.pendown()
    pista.color("red")
    pista.goto(FINAL, -140)
    pista.penup()
    pista.color("black")
    for i in range(5):
        pista.goto(-345, 95 - i * 50)
        pista.write(nume[i], font=("Arial", 10, "normal"))

def creeaza_testoase():
    lista = []
    for i in range(5):
        x = turtle.Turtle()
        x.shape("turtle")
        x.color(culori[i])
        x.penup()
        x.goto(START, 100 - i * 50)
        x.speed(0)
        lista.append(x)
    return lista

def cursa(testoase):
    while True:
        for x in testoase:
            x.forward(random.randint(1, 8))
        time.sleep(0.02)
        for i in range(len(testoase)):
            if testoase[i].xcor() >= FINAL:
                return i

def clasament(pozitii, nume):
    perechi = []
    for i in range(len(pozitii)):
        perechi.append([pozitii[i], nume[i]])
    perechi.sort(reverse=True)
    rezultat = []
    for pereche in perechi:
        rezultat.append(pereche[1])
    return rezultat

def main():
    pariu = screen.textinput("Pariu", "Pe ce culoare pariezi? (rosu, albastru, verde, portocaliu, mov)")
    if pariu is None:
        pariu = ""
    pariu = pariu.lower().strip()

    deseneaza_pista()
    testoase = creeaza_testoase()

    castigator = cursa(testoase)
    print("A castigat:", nume[castigator])
    if pariu == nume[castigator]:
        print("Ai castigat pariul!")
    else:
        print("Ai pierdut pariul. Ai pariat pe:", pariu)

    pozitii = []
    for x in testoase:
        pozitii.append(x.xcor())
    print("CLASAMENT")
    ordine = clasament(pozitii, nume)
    for loc in range(len(ordine)):
        print(f"{loc + 1}. {ordine[loc]}")

main()

turtle.done()
```

**Ieșire (exemplu: jucătorul a pariat pe `albastru`; la tine va fi altfel):**
```text
A castigat: mov
Ai pierdut pariul. Ai pariat pe: albastru
CLASAMENT
1. mov
2. verde
3. rosu
4. portocaliu
5. albastru
```

**Ce vezi pe ecran:** o fereastră de 700 × 500. Întâi apare căsuța de pariu. Apoi se desenează pista (linie de start neagră, linie de sosire roșie, numele culorilor în stânga), iar cele cinci țestoase aleargă **simultan**. Când prima trece linia, cursa se oprește.

Programul este împărțit în funcții: `deseneaza_pista`, `creeaza_testoase`, `cursa` și `main`. Funcția `cursa` **returnează** numărul câștigătorului, iar `main()` folosește rezultatul. Ce este nou aici: bucla `for x in testoase` mută pe rând fiecare țestoasă din listă, într-un singur rând de cod.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 8** (Cursa țestoaselor)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## De făcut azi — „Cursa țestoaselor”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Două țestoase care aleargă până la linia de sosire și câștigătorul afișat |
| **Complet** | Minim + cursa ta: cel puțin 6 țestoase într-o listă, pista desenată, pariul, mesajul final scris pe ecran și clasamentul |

### Pasul 1 — Minim
- [ ] Două țestoase la start, cu culori diferite  
- [ ] Bucla `while` le mută cu pași aleatori până când una trece de `FINAL`  
- [ ] Programul afișează cine a câștigat (Exemplul 3)  

### Pasul 2 — Complet
Pornește de la Exemplul 8 și fă cursa **a ta**. Trebuie să ai:
1. cel puțin **6 țestoase**, cu culori și nume alese de tine;
2. **pista** desenată frumos (benzi, o sosire în carouri sau alt model);
3. **pariul** și **mesajul final** („Câștigă: ...”) scris în fereastra de desen, cu `write`, nu doar în fereastra de text;
4. **clasamentul** complet afișat;
5. funcțiile păstrate: `deseneaza_pista`, `creeaza_testoase`, `cursa`, `main`.

**Gata când:**
- [ ] Cursa are cel puțin 6 țestoase și pistă desenată  
- [ ] Pariul și rezultatul apar și pe ecran, nu doar în text  
- [ ] Clasamentul complet este afișat  
- [ ] Ai explicat pe foaie de ce punem țestoasele într-o listă  
- [ ] Fișierul se numește `Prenume_Nume_P3_L8.py`  

---

## Bonus ★★★ — Provocare: Cursa devine campionat
*Doar dacă ai terminat Complet. Adaugă în **aceeași cursă**, în același program.*

- [ ] **Țestoasa norocoasă:** din când în când, o țestoasă aleasă la întâmplare primește un bonus de 20 de pași  
- [ ] **Zona de noroi:** o fâșie maro pe pistă, în care țestoasele merg mai încet  
- [ ] **Podiumul:** la final, scrie pe ecran primele trei locuri și mărește țestoasa câștigătoare  
- [ ] **Revanșa:** după cursă, întreabă „Mai jucăm?”; dacă da, țestoasele se întorc la start, iar tu aduni puncte pentru fiecare pariu câștigat  

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| `TypeError: '<' not supported between instances of 'method' and 'int'` | Ai scris `a.xcor` fără paranteze | `a.xcor()` |
| Țestoasele desenează linii pe pistă | Creionul este jos | `x.penup()` înainte de `goto` |
| Cursa nu se termină | Condiția buclei `while` nu se schimbă niciodată | Verifică dacă țestoasele chiar avansează (`forward`) |
| Cursa trece prea repede | Lipsește pauza dintre pași | Adaugă `time.sleep(0.02)` în bucla cursei |
| `IndexError: list index out of range` | Ai ales un număr de țestoasă care nu există | Indicii merg de la `0` la `len(lista) - 1` |
| Câștigătorul este greșit | Pozițiile și numele nu sunt în aceeași ordine | Păstrează aceeași ordine în ambele liste |
| `AttributeError: 'NoneType' object has no attribute 'lower'` | Ai apăsat Cancel în căsuța de pariu | `if pariu is None: pariu = ""` |

---

## Recapitulare pe scurt

- Fiecare țestoasă este un obiect separat: `x = turtle.Turtle()`.
- Mai multe țestoase se păstrează într-o **listă** și se mută cu o buclă `for`.
- Cursa merge până când condiția de oprire devine adevărată (`while`).
- Constantele (`START`, `FINAL`) se scriu cu litere mari.
- `max`, `index`, `sort(reverse=True)` ne ajută să găsim câștigătorul și clasamentul.
- `time.sleep` încetinește cursa, ca s-o putem urmări.

---

## Quiz scurt
- Cum creezi mai multe țestoase și unde le păstrezi?  
- Până când merge cursa și ce buclă o conduce?  
- De ce scriem `START` și `FINAL` cu litere mari?  
- Cum găsești țestoasa câștigătoare?  
- La ce folosește `time.sleep(0.02)`?  

---

## Temă
1. Refă **Exemplele 1–8** în Thonny.  
2. Fă o cursă între **mașini** (alt `shape`, de exemplu `"square"`) în loc de țestoase.  
3. Pe foaie, răspunde: de ce punem țestoasele într-o listă? Cum aflăm câștigătoarea după ce se oprește cursa? De ce `START` și `FINAL` se scriu cu litere mari?  
4. **Bonus:** fă o cursă **pe verticală**, de jos în sus.  
5. Salvează totul ca `Tema_P3_L8_Prenume_Nume.py`.

### Exemple pentru acasă
Aceste exemple folosesc exact ce ai învățat azi. Scrie-le în Thonny, rulează-le și schimbă-le după preferințe.

#### Acasă 1 — O țestoasă aleargă

```python
import random
import turtle

START = -200
FINAL = 200

t = turtle.Turtle()
t.shape("turtle")
t.color("green")
t.penup()
t.goto(START, 0)

for pas in range(30):
    t.forward(random.randint(1, 15))

print("A mers spre dreapta:", t.xcor() > START)

turtle.done()
```

**Ieșire** (în fereastra Thonny, jos):
```text
A mers spre dreapta: True
```

**Ce vezi pe ecran:** o țestoasă verde care face **30 de pași** de mărimi diferite (de la 1 la 15) și se oprește. De fiecare dată ajunge în alt loc, pentru că pașii sunt aleatori. Rândul `print` este un test: țestoasa a făcut doar pași înainte, deci răspunsul este mereu `True`.

#### Acasă 2 — Cursa fluidă

```python
import random
import time
import turtle

screen = turtle.Screen()
screen.tracer(0)

FINAL = 200

a = turtle.Turtle()
a.shape("turtle")
a.color("red")
a.penup()
a.goto(-200, 40)

b = turtle.Turtle()
b.shape("turtle")
b.color("blue")
b.penup()
b.goto(-200, -40)

while a.xcor() < FINAL and b.xcor() < FINAL:
    a.forward(random.randint(1, 8))
    b.forward(random.randint(1, 8))
    screen.update()
    time.sleep(0.02)

if a.xcor() >= FINAL:
    print("A castigat testoasa ROSIE!")
else:
    print("A castigat testoasa ALBASTRA!")

turtle.done()
```

**Ieșire (la tine poate fi alta):**
```text
A castigat testoasa ALBASTRA!
```

**Ce vezi pe ecran:** aceeași cursă ca în Exemplul 3, dar mișcarea este **fluidă**. `screen.tracer(0)` oprește desenarea automată: ecranul se reîmprospătează doar când spunem noi `screen.update()`, o singură dată pe pas, după ce s-au mișcat ambele țestoase. Așa se fac animațiile din jocuri.

### Încă două exerciții

**Ce afișează?** Gândește-te, apoi verifică în Thonny:

```python
pozitii = [30, 90, 60]
nume = ["rosu", "verde", "albastru"]
print(max(pozitii))
print(pozitii.index(max(pozitii)))
print(nume[pozitii.index(max(pozitii))])
```

**Găsește greșelile.** Programul are 3 greșeli. Rescrie-l corect și explică fiecare corecție:

```text
import turtle
import random
a = turtle.Turtle()
a.penup()
a.goto(-200, 0)
while a.xcor < 200
    a.forward(random.randint(1, 8)
print("Gata")
```

---

## Răspunsuri la bonus

*Uită-te aici doar după ce ai încercat singur. Există mai multe soluții bune; a ta poate arăta diferit.*

Toate soluțiile pornesc de la cursa din Exemplul 8, **fără** ultimele două rânduri (`main()` și `turtle.done()`). Mai jos e **începutul comun**, pe care îl copiezi o singură dată; după el vine fiecare soluție, care redefinește o funcție și apelează `main()`. La final, nu uita `turtle.done()` pe ultimul rând.

```python
import random
import time
import turtle

screen = turtle.Screen()
screen.setup(700, 500)

culori = ["red", "blue", "green", "orange", "purple"]
nume = ["rosu", "albastru", "verde", "portocaliu", "mov"]
START = -250
FINAL = 280

def deseneaza_pista():
    pista = turtle.Turtle()
    pista.hideturtle()
    pista.speed(0)
    pista.pensize(3)
    pista.penup()
    pista.goto(START - 15, 140)
    pista.pendown()
    pista.goto(START - 15, -140)
    pista.penup()
    pista.goto(FINAL, 140)
    pista.pendown()
    pista.color("red")
    pista.goto(FINAL, -140)
    pista.penup()
    pista.color("black")
    for i in range(5):
        pista.goto(-345, 95 - i * 50)
        pista.write(nume[i], font=("Arial", 10, "normal"))

def creeaza_testoase():
    lista = []
    for i in range(5):
        x = turtle.Turtle()
        x.shape("turtle")
        x.color(culori[i])
        x.penup()
        x.goto(START, 100 - i * 50)
        x.speed(0)
        lista.append(x)
    return lista

def cursa(testoase):
    while True:
        for x in testoase:
            x.forward(random.randint(1, 8))
        time.sleep(0.02)
        for i in range(len(testoase)):
            if testoase[i].xcor() >= FINAL:
                return i

def clasament(pozitii, nume):
    perechi = []
    for i in range(len(pozitii)):
        perechi.append([pozitii[i], nume[i]])
    perechi.sort(reverse=True)
    rezultat = []
    for pereche in perechi:
        rezultat.append(pereche[1])
    return rezultat

def main():
    pariu = screen.textinput("Pariu", "Pe ce culoare pariezi? (rosu, albastru, verde, portocaliu, mov)")
    if pariu is None:
        pariu = ""
    pariu = pariu.lower().strip()

    deseneaza_pista()
    testoase = creeaza_testoase()

    castigator = cursa(testoase)
    print("A castigat:", nume[castigator])
    if pariu == nume[castigator]:
        print("Ai castigat pariul!")
    else:
        print("Ai pierdut pariul. Ai pariat pe:", pariu)

    pozitii = []
    for x in testoase:
        pozitii.append(x.xcor())
    print("CLASAMENT")
    ordine = clasament(pozitii, nume)
    for loc in range(len(ordine)):
        print(f"{loc + 1}. {ordine[loc]}")
```

### 1. Țestoasa norocoasă

Adaugă, după codul de mai sus (funcția `cursa` de mai jos o înlocuiește pe cea veche):

```python
def cursa(testoase):
    while True:
        for x in testoase:
            x.forward(random.randint(1, 8))
        if random.randint(1, 10) == 1:
            norocoasa = random.choice(testoase)
            norocoasa.forward(20)
        time.sleep(0.02)
        for i in range(len(testoase)):
            if testoase[i].xcor() >= FINAL:
                return i

main()
```

**Ce vezi pe ecran:** cursa merge ca înainte, dar în **aproximativ una din 10 runde** o țestoasă aleasă la întâmplare face un salt de 20 de pași. Ordinea se poate schimba oricând, deci pariul devine mai greu de ghicit. Funcția `random.choice(testoase)` alege o țestoasă din listă.

### 2. Zona de noroi

Adaugă, după codul de mai sus:

```python
def deseneaza_noroi():
    noroi = turtle.Turtle()
    noroi.hideturtle()
    noroi.speed(0)
    noroi.penup()
    noroi.goto(-50, -125)
    noroi.setheading(0)
    noroi.pendown()
    noroi.color("saddlebrown")
    noroi.begin_fill()
    for i in range(2):
        noroi.forward(100)
        noroi.left(90)
        noroi.forward(250)
        noroi.left(90)
    noroi.end_fill()

def cursa(testoase):
    while True:
        for x in testoase:
            if -50 <= x.xcor() <= 50:
                x.forward(random.randint(1, 3))
            else:
                x.forward(random.randint(1, 8))
        time.sleep(0.02)
        for i in range(len(testoase)):
            if testoase[i].xcor() >= FINAL:
                return i

deseneaza_noroi()
main()
```

**Ce vezi pe ecran:** pe pistă apare o **fâșie maro** lată de 100, între `x = -50` și `x = 50`. Țestoasele care intră în ea merg cu pași de 1–3, deci **încetinesc**, apoi își reiau viteza (pași de 1–8) după ce ies. Zona se desenează înaintea țestoaselor, ca ele să treacă peste ea.

### 3. Podiumul

Adaugă, după codul de mai sus (funcția `main` de mai jos o înlocuiește pe cea veche):

```python
def main():
    deseneaza_pista()
    testoase = creeaza_testoase()
    castigator = cursa(testoase)
    testoase[castigator].shapesize(2.5)

    pozitii = []
    for x in testoase:
        pozitii.append(x.xcor())
    ordine = clasament(pozitii, nume)

    podium = turtle.Turtle()
    podium.hideturtle()
    podium.penup()
    for loc in range(3):
        podium.goto(0, -165 - loc * 30)
        podium.write(f"{loc + 1}. {ordine[loc]}", align="center", font=("Arial", 16, "bold"))

main()
```

**Ce vezi pe ecran:** după cursă, **țestoasa câștigătoare se mărește** (`shapesize(2.5)`), iar sub pistă apar, pe trei rânduri, **primele trei locuri**: „1. …”, „2. …”, „3. …”, scrise cu litere îngroșate. Clasamentul vine din aceeași funcție `clasament` ca la Exemplul 6.

### 4. Revanșa

Adaugă, după codul de mai sus (funcția `main` de mai jos o înlocuiește pe cea veche):

```python
def main():
    deseneaza_pista()
    testoase = creeaza_testoase()
    puncte = 0
    runda = 0
    ruleaza = True

    while ruleaza:
        runda += 1
        pariu = screen.textinput("Pariu", "Runda " + str(runda) + ". Pe ce culoare pariezi?")
        if pariu is None:
            pariu = ""
        pariu = pariu.lower().strip()

        castigator = cursa(testoase)
        if pariu == nume[castigator]:
            puncte += 1
            print("Ai castigat! Puncte:", puncte)
        else:
            print("A castigat", nume[castigator], "- Puncte:", puncte)

        raspuns = screen.textinput("Revansa", "Mai jucam o runda? (da / nu)")
        if raspuns is None:
            raspuns = "nu"
        ruleaza = raspuns.lower().strip() == "da"
        if ruleaza:
            for i in range(len(testoase)):
                testoase[i].goto(START, 100 - i * 50)

    print("Puncte finale:", puncte)

main()
```

**Ce vezi pe ecran:** după fiecare cursă apare o căsuță „Mai jucăm o runda?”. La **da**, cele cinci țestoase **se întorc la start** și începe o nouă rundă, cu un nou pariu; la **nu**, jocul se oprește și se afișează punctele. Pista se desenează o singură dată, iar `puncte` crește cu 1 pentru fiecare pariu câștigat.

---

## Ce urmează — Lecția 9
**Joc: Prinde steaua**: ținem scorul, timpul și viețile într-un joc complet cu Turtle.
