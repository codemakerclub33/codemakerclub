# LECȚIA 3 — Galaxia mea
### Spirale, rozete și bucle în bucle
**Modulul 3 · Desenăm cu Turtle · 2 ore**  
**Code Maker Club · Turtle Artist**

> Cele mai frumoase desene Turtle sunt făcute din **repetiții**: o formă mică, repetată de zeci de ori, cu o mică schimbare de fiecare dată. Azi desenăm spirale, rozete, soare și galaxii cu doar câteva rânduri de cod.  
> Proiect: **„Galaxia mea”** · fișier: `Prenume_Nume_P3_L3.py`

---

## Ce facem azi
La finalul orei folosești variabila `i` din bucla `for` ca să schimbi lungimea, culoarea și grosimea liniei, desenezi spirale și rozete, folosești o buclă în altă buclă și construiești un desen cu mai multe brațe colorate. În jocuri și în grafică, un model frumos se repetă de multe ori. Dacă înțelegi cum o variabilă dintr-o buclă „creează” modele, poți desena aproape orice: de la o tapetă la un fulg de zăpadă.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare L2 |
| 10–30 | Spirale (**Exemplele 1–2**) |
| 30–50 | Spirala colorată cu `%` (**Exemplul 3**) |
| 50–75 | Rozeta și bucla în buclă (**Exemplele 4–5**) |
| 75–90 | Grila de puncte (**Exemplul 6**) |
| 90–105 | Soarele cu raze (**Exemplul 7**) |
| 105–118 | Mini-proiect (**Exemplul 8**) |
| 118–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `t.forward(i * 5)` | Lungimea depinde de `i`: spirală | `for i in range(40):` |
| `culori[i % 6]` | Parcurge o listă în cerc (restul împărțirii) | `t.color(culori[i % 6])` |
| `for` în `for` | Buclă în altă buclă: rânduri × coloane | `for rand in range(4):` |
| `t.home()` · `t.setheading(grade)` | Duce țestoasa în centru · o orientează | `t.setheading(60)` |

---

## 1. Recapitulare rapidă din L2

- `color`, `pensize`, `begin_fill` / `end_fill`, `circle`, `dot`.
- Poligon cu `n` laturi: rotire de `360 / n`.
- `for i in range(n)`: variabila `i` ia valorile `0, 1, 2, ..., n-1`.
- `%` dă restul împărțirii: `7 % 3` este `1`.

**Încearcă tu (3 min)**  
- [ ] Desenează un hexagon verde  

---

## 2. Spirale

Ideea este simplă: la fiecare pas, țestoasa merge **mai mult** decât înainte și se rotește. Variabila `i` crește, așa că și drumul crește.

### Exemplul 1 — Spirala pătrată

```python
import turtle

t = turtle.Turtle()
t.speed(0)
for i in range(40):
    t.forward(i * 5)
    t.left(90)

turtle.done()
```

**Ce vezi pe ecran:** o **spirală pătrată** care pornește din centru și se desface spre exterior. Liniile devin tot mai lungi: prima este 0, a doua 5, a treia 10 și așa mai departe, până la 195.

### Exemplul 2 — Alt unghi, altă spirală

```python
import turtle

t = turtle.Turtle()
t.speed(0)
for i in range(60):
    t.forward(i * 4)
    t.left(120)

turtle.done()
```

**Ce vezi pe ecran:** o **spirală triunghiulară** (colțurile sunt de 60°). Observă ce se întâmplă când schimbi unghiul: `90` dă pătrate, `120` dă triunghiuri. Încearcă și `72`, `144`, sau un număr „aproape” de 90, ca `91`: spirala începe să se **răsucească**.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 1** (Spirala pătrată)  
- [ ] Am scris și am rulat **Exemplul 2** (Alt unghi, altă spirală)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 3. Spirala colorată

### Exemplul 3 — Culoarea se schimbă

```python
import turtle

culori = ["red", "orange", "yellow", "green", "blue", "purple"]

screen = turtle.Screen()
screen.bgcolor("black")

t = turtle.Turtle()
t.speed(0)
t.pensize(2)
for i in range(90):
    t.color(culori[i % 6])
    t.forward(i * 2)
    t.left(61)

turtle.done()
```

**Ce vezi pe ecran:** pe fundal negru, o **spirală răsucită**, ale cărei linii se schimbă ciclic: roșu, portocaliu, galben, verde, albastru, mov, apoi din nou roșu.

Cum merge: `i % 6` este restul împărțirii la 6, deci ia pe rând valorile `0, 1, 2, 3, 4, 5, 0, 1, ...`. Așa alegem din listă culoarea numărul `0`, `1`, ..., `5`, apoi o luăm de la capăt. Poți folosi `%` ori de câte ori vrei să parcurgi o listă în cerc.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 3** (Culoarea se schimbă)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 4. Rozete și bucla în buclă

### Exemplul 4 — Rozeta din cercuri

```python
import turtle

screen = turtle.Screen()
screen.bgcolor("black")

t = turtle.Turtle()
t.color("cyan")
t.speed(0)
for i in range(36):
    t.circle(80)
    t.right(10)

turtle.done()
```

**Ce vezi pe ecran:** pe fundal negru, o **rozetă** albastru-deschis formată din **36 de cercuri** de rază 80. Toate trec prin centrul ferestrei, dar sunt rotite cu câte 10° unul față de altul (36 × 10° = 360°).

### Exemplul 5 — Pătrate rotite

```python
import turtle

t = turtle.Turtle()
t.speed(0)
t.color("darkgreen")
for i in range(36):
    for j in range(4):
        t.forward(100)
        t.left(90)
    t.right(10)

turtle.done()
```

**Ce vezi pe ecran:** o **floare geometrică** făcută din 36 de pătrate rotite cu câte 10° în jurul aceluiași colț.

Aici avem **o buclă în altă buclă**: bucla de afară (`i`) repetă de 36 de ori, iar bucla din interior (`j`) desenează un pătrat. Pentru fiecare valoare a lui `i`, bucla din interior face un pătrat întreg.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 4** (Rozeta din cercuri)  
- [ ] Am scris și am rulat **Exemplul 5** (Pătrate rotite)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 5. Grila de puncte

### Exemplul 6 — Grila de puncte

```python
import turtle

t = turtle.Turtle()
t.hideturtle()
t.speed(0)
t.penup()

numar = 0
for rand in range(4):
    for coloana in range(5):
        if (rand + coloana) % 2 == 0:
            culoare = "red"
        else:
            culoare = "blue"
        t.goto(-100 + coloana * 50, 75 - rand * 50)
        t.dot(30, culoare)
        numar += 1

print("Puncte desenate:", numar)
turtle.done()
```

**Ieșire** (în fereastra Thonny, jos):
```text
Puncte desenate: 20
```

**Ce vezi pe ecran:** o **grilă cu 4 rânduri și 5 coloane** de puncte, alternativ roșii și albastre (ca o tablă de șah).

- pentru fiecare rând (`rand`) parcurgem toate cele 5 coloane (`coloana`): 4 × 5 = **20** de puncte;
- poziția fiecărui punct se calculează din `rand` și `coloana`: `x = -100 + coloana * 50`, iar `y = 75 - rand * 50`;
- `(rand + coloana) % 2 == 0` alternează culorile.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 6** (Grila de puncte)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 6. Soarele cu raze

### Exemplul 7 — Soarele cu raze

```python
import turtle

screen = turtle.Screen()
screen.bgcolor("skyblue")

t = turtle.Turtle()
t.speed(0)
t.pensize(3)
t.color("orange")
for i in range(36):
    t.forward(120)
    t.backward(120)
    t.left(10)

t.color("gold")
t.dot(100)
t.hideturtle()

turtle.done()
```

**Ce vezi pe ecran:** pe cer albastru, un **soare**: 36 de raze portocalii care pornesc din centru, iar peste ele un disc auriu (diametrul 100).

Fiecare rază înseamnă „înainte 120, înapoi 120, rotire 10°”. Discul auriu se desenează la urmă, ca să acopere începutul razelor.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 7** (Soarele cu raze)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 7. Mini-proiect

### Exemplul 8 — Galaxia

```python
import turtle

culori = ["red", "orange", "yellow", "green", "cyan", "violet"]

screen = turtle.Screen()
screen.bgcolor("black")

t = turtle.Turtle()
t.speed(0)
t.hideturtle()
t.pensize(2)

for brat in range(6):
    t.penup()
    t.home()
    t.setheading(brat * 60)
    t.pendown()
    t.color(culori[brat])
    for i in range(40):
        t.forward(2 + i * 0.3)
        t.left(4)

turtle.done()
```

**Ce vezi pe ecran:** pe fundal negru, o **galaxie** cu **6 brațe curbate**, fiecare de altă culoare, care pornesc din centru și se curbează în același sens.

- `t.home()` duce țestoasa în centru (și o orientează spre dreapta);
- `t.setheading(brat * 60)` o rotește la 0°, 60°, 120°... deci brațele pleacă la distanțe egale;
- bucla `for i in range(40)` desenează un braț: pași tot mai lungi, cu o mică rotire de 4° la fiecare pas.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 8** (Galaxia)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## De făcut azi — „Galaxia mea”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | O spirală (cu `i` în `forward`) și o rozetă din cercuri |
| **Complet** | Minim + galaxia ta: număr de brațe și culori la alegere, 30 de stele aleatoare și un disc luminos în centru |

### Pasul 1 — Minim
- [ ] O spirală în care lungimea liniei depinde de `i`  
- [ ] O rozetă din cercuri, rotite cu `360 / repetări`  

### Pasul 2 — Complet
Pornește de la Exemplul 8 și fă galaxia **a ta**:
1. schimbă numărul brațelor (8 brațe: unghi `360 / 8`; 5 brațe: `360 / 5`);
2. alege-ți propriile culori;
3. adaugă **stele**: 30 de puncte mici albe la poziții aleatoare (`import random` și `random.randint(-300, 300)` pentru `x` și `y`; mută țestoasa cu `penup` și `goto`);
4. adaugă un **disc luminos** în centru, cu `dot`.

**Gata când:**
- [ ] Galaxia are numărul brațelor și culorile alese de tine  
- [ ] Ai adăugat stele aleatoare și un disc în centru  
- [ ] Brațele pornesc toate din centru, la unghiuri egale  
- [ ] Ai testat cu 3 numere de brațe diferite  
- [ ] Fișierul se numește `Prenume_Nume_P3_L3.py`  

---

## Bonus ★★★ — Provocare: Cerul din galaxie
*Doar dacă ai terminat Complet. Adaugă în **aceeași scenă** cu galaxia ta, în același program.*

- [ ] Desenează o **planetă cu inel**: un punct mare portocaliu și un cerc gri în jurul lui  
- [ ] Desenează o **cometă**: puncte albe tot mai mici, în șir, ca o coadă  
- [ ] Fă **stelele colorate**: culoare și mărime alese la întâmplare pentru fiecare stea  
- [ ] Desenează o **a doua galaxie**, mai mică, într-un colț al ferestrei  

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| `IndexError: list index out of range` | Ai folosit `i % 4` la o listă cu 3 culori | Folosește `i % len(culori)` |
| Spirala iese din fereastră | Pașii cresc prea mult | Micșorează înmulțirea sau numărul de repetări |
| Primul pas nu se vede | `i` pornește de la 0 și `forward(0)` nu desenează | Folosește `range(1, n)` |
| Toate cercurile se suprapun perfect | Raza nu depinde de `i` | `t.circle(i * 15)` |
| Brațele galaxiei pornesc din alt loc | Lipsește `home()` | `t.home()` după `penup()` |
| Desenul se face foarte încet | Viteza este mică | `t.speed(0)` |
| `TypeError: 'float' object cannot be interpreted as an integer` | Ai dat un număr cu zecimale lui `range` | `range(int(...))` |

---

## Recapitulare pe scurt

- Variabila `i` dintr-un `for` poate controla lungimea, culoarea, grosimea.
- Spirala = pași tot mai lungi + o rotire constantă.
- `i % n` parcurge o listă în cerc (restul împărțirii).
- Rozeta = aceeași formă repetată, rotită cu `360 / repetări` grade.
- O buclă în altă buclă repetă de „rânduri × coloane” ori.
- `home()` și `setheading(grade)` duc țestoasa în centru și o orientează.

---

## Quiz scurt
- Cum poate `i` dintr-un `for` să schimbe desenul?  
- Ce are o spirală: pași egali sau tot mai lungi? Dar rotirea?  
- Ce face `i % n` când parcurgi o listă de culori?  
- Cum desenezi o rozetă din aceeași formă?  
- La ce folosesc `home()` și `setheading(grade)`?  

---

## Temă
1. Refă **Exemplele 1–8** în Thonny, scrise de mână.  
2. Desenează o **tablă de șah 8 × 8** din puncte mari sau din pătrate.  
3. Desenează **trei spirale** cu unghiuri diferite (90, 120, 72) și notează cum arată.  
4. **Bonus:** desenează un **curcubeu spiralat** pe fundal negru.  
5. **Rozeta ta.** Desenează o rozetă din **cercuri cu raza 60**, rotite cu **15°**. Câte cercuri îți trebuie ca să faci un tur complet?  
6. Salvează totul ca `Tema_P3_L3_Prenume_Nume.py`.

### Exemple pentru acasă
Aceste exemple folosesc exact ce ai învățat azi. Scrie-le în Thonny, rulează-le și schimbă-le după preferințe.

#### Acasă 1 — Cercuri imbricate

```python
import turtle

t = turtle.Turtle()
t.speed(0)
t.pensize(2)
for i in range(1, 7):
    t.circle(i * 15)

turtle.done()
```

**Ce vezi pe ecran:** **6 cercuri**, unul în interiorul celuilalt, care se ating toate în punctul de plecare (jos). Razele sunt 15, 30, 45, 60, 75 și 90.

Observă `range(1, 7)`: pornește de la `1`, ca să nu desenăm un cerc cu raza 0.

#### Acasă 2 — Linie tot mai groasă

```python
import turtle

culori = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]

screen = turtle.Screen()
screen.bgcolor("black")

t = turtle.Turtle()
t.speed(0)
for i in range(100):
    t.color(culori[i % 7])
    t.pensize(1 + i // 20)
    t.forward(i * 2)
    t.left(59)

turtle.done()
```

**Ce vezi pe ecran:** o **spirală în culorile curcubeului**, în care linia devine tot mai **groasă**. Grosimea este `1 + i // 20`: primele 20 de linii au grosimea 1, următoarele 20 au 2 și tot așa, până la 5.

`//` este împărțirea întreagă: `45 // 20` este `2`.

### Încă două exerciții

**Ce desenează?** Gândește-te, apoi verifică în Thonny:

```python
import turtle

t = turtle.Turtle()
t.speed(0)
for i in range(8):
    t.forward(100)
    t.left(135)

turtle.done()
```

**Găsește greșelile.** Programul are 3 greșeli. Rescrie-l corect și explică fiecare corecție:

```text
import turtle
culori = ["red", "blue", "green"]
t = turtle.Turtle()
for i in range(30)
    t.color(culori[i % 4])
    t.forward(i * 5)
    t.left(90)
turtle.Done()
```

---

## Răspunsuri la bonus

*Uită-te aici doar după ce ai încercat singur. Există mai multe soluții bune; a ta poate arăta diferit. Fiecare cod de mai jos e un program întreg: ca să-l pui în galaxia ta, copiezi liniile care desenează înainte de `turtle.done()`.*

### 1. Planeta cu inel

```python
import turtle

screen = turtle.Screen()
screen.bgcolor("black")

t = turtle.Turtle()
t.speed(0)
t.hideturtle()
t.penup()

t.goto(-150, -100)
t.dot(70, "orange")

t.color("lightgray")
t.pensize(4)
t.goto(-150, -155)
t.pendown()
t.circle(55)

turtle.done()
```

**Ce vezi pe ecran:** o **planetă** portocalie cu un **inel** gri în jurul ei. Cercul de 55 pornește de jos, din punctul `(-150, -155)`, adică la 55 sub centrul planetei.

### 2. Cometa

```python
import turtle

screen = turtle.Screen()
screen.bgcolor("black")

t = turtle.Turtle()
t.speed(0)
t.hideturtle()
t.penup()

for i in range(20):
    t.goto(180 - i * 12, 150 - i * 6)
    t.dot(24 - i, "white")

turtle.done()
```

**Ce vezi pe ecran:** o **cometă**: un punct alb mare în dreapta-sus, urmat spre stânga-jos de o coadă de puncte tot mai mici. Mărimea punctului este `24 - i`: scade cu 1 la fiecare pas.

### 3. Stelele colorate

```python
import random
import turtle

culori = ["white", "yellow", "cyan", "pink"]

screen = turtle.Screen()
screen.bgcolor("black")

t = turtle.Turtle()
t.speed(0)
t.hideturtle()
t.penup()

for i in range(30):
    x = random.randint(-300, 300)
    y = random.randint(-300, 300)
    t.goto(x, y)
    t.dot(random.randint(3, 8), random.choice(culori))

turtle.done()
```

**Ce vezi pe ecran:** **30 de stele** în locuri diferite, de mărimi între 3 și 8 și de culori alese la întâmplare din listă. `random.choice` alege un element din listă (îl știi din Modulul 1).

### 4. A doua galaxie, mai mică

```python
import turtle

culori = ["red", "orange", "yellow", "green", "cyan", "violet"]

screen = turtle.Screen()
screen.bgcolor("black")

t = turtle.Turtle()
t.speed(0)
t.hideturtle()
t.pensize(2)

for brat in range(6):
    t.penup()
    t.goto(180, 130)
    t.setheading(brat * 60)
    t.pendown()
    t.color(culori[brat])
    for i in range(30):
        t.forward(1 + i * 0.15)
        t.left(5)

turtle.done()
```

**Ce vezi pe ecran:** o **galaxie mică** cu 6 brațe, în dreapta-sus. În loc de `home()` folosim `goto(180, 130)`, ca să pornească din alt loc decât centrul. Pașii sunt mai mici, deci brațele ies mai scurte.

---

## Ce urmează — Lecția 4
**Funcții de desen**: învățăm să punem un desen într-o funcție și să-l reutilizăm pentru a face o casă și o floare.
