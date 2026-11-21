# LECȚIA 5 — Mandala mea
### Stele și mandale
**Modulul 3 · Desenăm cu Turtle · 2 ore**  
**Code Maker Club · Turtle Artist**

> Stelele par greu de desenat, dar pentru o țestoasă sunt ușoare: o linie dreaptă și o rotire, repetate de câteva ori. Azi desenăm stele cu orice număr de colțuri, un cer înstelat și **mandale**: desene rotunde, simetrice, făcute din forme care se repetă în cerc.  
> Proiect: **„Mandala mea”** · fișier: `Prenume_Nume_P3_L5.py`

---

## Ce facem azi
La finalul orei desenezi o stea cu 5 colțuri, o generalizezi pentru orice număr impar de colțuri, pui desenul într-o funcție, aranjezi forme în cerc în jurul unui centru și construiești o mandală cu mai multe inele. Simetria este peste tot: în flori, în fulgi de zăpadă, în desenele de pe covoare. Un model simetric se obține repetând aceeași formă și rotind țestoasa cu **360 ÷ numărul de repetări**. Ideea o vei folosi și la jocuri, ca să așezi lucruri în cerc.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare L4 |
| 10–35 | Steaua cu 5 colțuri (**Exemplele 1–3**) |
| 35–50 | Stele cu alt număr de colțuri (**Exemplul 4**) |
| 50–70 | Cerul înstelat (**Exemplul 5**) |
| 70–95 | Forme în cerc: stele în cerc și inelul de stele (**Exemplele 6–7**) |
| 95–118 | Mini-proiect (**Exemplul 8**) |
| 118–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `t.right(144)` | Rotire mare, care „taie” colțurile: din 5 linii iese o stea | `for i in range(5): t.forward(150); t.right(144)` |
| `180 - 180 / n` | Unghiul pentru o stea cu `n` colțuri (număr impar) | `n = 7` → `154.29` |
| `t.right(360 / numar)` | Rotirea dintre forme așezate în cerc | în funcția `inel` |
| `t.forward(distanta)` · `t.backward(distanta)` | Mergi de la centru la locul formei, desenezi, apoi te întorci | în funcția `inel` |

---

## 1. Recapitulare rapidă din L4

- O funcție de desen primește poziție, mărime și culoare.
- Poligon cu `n` laturi: rotire de `360 / n`.
- `begin_fill()` ... `end_fill()` umple forma.

**Încearcă tu (3 min)**  
- [ ] Scrie o funcție `triunghi(l)` care desenează un triunghi cu latura `l`  

---

## 2. Steaua cu 5 colțuri

### Exemplul 1 — Prima stea

```python
import turtle

t = turtle.Turtle()
t.color("gold")
t.pensize(3)
for i in range(5):
    t.forward(150)
    t.right(144)

turtle.done()
```

**Ce vezi pe ecran:** o **stea cu 5 colțuri**, desenată dintr-o singură linie continuă, cu latura de 150.

Surpriza este unghiul: **144°**, nu 72°! Țestoasa se rotește mult, așa că linia sare peste un colț și „taie” steaua în loc să facă un pentagon.

### Exemplul 2 — De ce 144?

```python
import turtle

t = turtle.Turtle()
t.hideturtle()
for i in range(5):
    t.forward(100)
    t.right(144)

print("Rotire totala:", 5 * 144)
print("Ture complete:", 5 * 144 / 360)
print("Inapoi la start:", round(t.xcor()), round(t.ycor()), round(t.heading()) % 360)

turtle.done()
```

**Ieșire** (în fereastra Thonny, jos):
```text
Rotire totala: 720
Ture complete: 2.0
Inapoi la start: 0 0 0
```

**Ce vezi pe ecran:** aceeași stea, mai mică, fără țestoasă.

Țestoasa se rotește în total **720°**, adică **2 ture complete**. Pentru ca desenul să se închidă, rotirea totală trebuie să fie un număr întreg de ture. De aceea, după 5 laturi, ea revine în punctul de plecare, privind în aceeași direcție.

### Exemplul 3 — Steaua umplută

```python
import turtle

screen = turtle.Screen()
screen.bgcolor("midnightblue")

t = turtle.Turtle()
t.color("white", "yellow")
t.pensize(3)
t.begin_fill()
for i in range(5):
    t.forward(160)
    t.right(144)
t.end_fill()
t.hideturtle()

turtle.done()
```

**Ce vezi pe ecran:** pe fundal albastru foarte închis, o **stea galbenă**, cu contur alb.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 1** (Prima stea)  
- [ ] Am scris și am rulat **Exemplul 2** (De ce 144?)  
- [ ] Am scris și am rulat **Exemplul 3** (Steaua umplută)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 3. Orice număr de colțuri

Pentru un număr **impar** de colțuri `n`, unghiul care închide steaua este:

`unghi = 180 - 180 / n`

Verificăm: pentru `n = 5` este `180 - 36 = 144`. Se potrivește!

### Exemplul 4 — Stele cu 5, 7 și 9 colțuri

```python
import turtle

def unghi_stea(n):
    return 180 - 180 / n

for colturi in [5, 7, 9]:
    print(colturi, "colturi: unghi", round(unghi_stea(colturi), 2))

t = turtle.Turtle()
t.speed(0)
t.pensize(2)
culori = ["red", "green", "blue"]
pozitii = [-250, -50, 150]
numere = [5, 7, 9]

for i in range(3):
    t.penup()
    t.goto(pozitii[i], 0)
    t.pendown()
    t.color(culori[i])
    for j in range(numere[i]):
        t.forward(80)
        t.right(unghi_stea(numere[i]))

turtle.done()
```

**Ieșire** (în fereastra Thonny, jos):
```text
5 colturi: unghi 144.0
7 colturi: unghi 154.29
9 colturi: unghi 160.0
```

**Ce vezi pe ecran:** **trei stele** în linie, una lângă alta: roșie (5 colțuri), verde (7 colțuri) și albastră (9 colțuri). Cu cât are mai multe colțuri, cu atât steaua seamănă mai mult cu un cerc.

Funcția `unghi_stea(n)` **returnează** unghiul (nu desenează nimic). Folosim formula de două ori: o dată la afișare și o dată la desen.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 4** (Stele cu 5, 7 și 9 colțuri)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 4. Cerul înstelat

### Exemplul 5 — Stele la întâmplare

```python
import random
import turtle

screen = turtle.Screen()
screen.setup(700, 500)
screen.bgcolor("black")

t = turtle.Turtle()
t.hideturtle()
t.speed(0)

def stea(x, y, marime, culoare):
    t.penup()
    t.goto(x, y)
    t.setheading(0)
    t.pendown()
    t.color(culoare)
    t.begin_fill()
    for i in range(5):
        t.forward(marime)
        t.right(144)
    t.end_fill()

culori = ["white", "yellow", "lightblue", "pink"]

for i in range(30):
    x = random.randint(-330, 300)
    y = random.randint(-230, 200)
    marime = random.randint(8, 30)
    stea(x, y, marime, random.choice(culori))

t.penup()
t.goto(0, -50)
t.dot(90, "lightyellow")

turtle.done()
```

**Ce vezi pe ecran:** pe fundal negru, **30 de stele** colorate, de mărimi diferite, **împrăștiate la întâmplare** (la fiecare rulare altfel), iar în mijloc o **lună** galben deschis.

- `random.randint(a, b)` alege coordonatele `x`, `y` și mărimea;
- `random.choice(culori)` alege o culoare din listă (o veche cunoștință din Modulul 1);
- funcția `stea(x, y, marime, culoare)` desenează o stea umplută oriunde.

Luna este desenată la final, deci acoperă stelele aflate în spatele ei.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 5** (Stele la întâmplare)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 5. Forme în cerc

O **mandală** este un desen rotund, simetric. Rețeta este mereu aceeași: desenezi o formă, o rotești cu `360 / n` grade și o repeți de `n` ori.

### Exemplul 6 — Stele în cerc

```python
import turtle

culori = ["red", "orange", "gold", "green", "dodgerblue", "purple"]

screen = turtle.Screen()
screen.bgcolor("black")

t = turtle.Turtle()
t.hideturtle()
t.speed(0)
t.pensize(2)

for i in range(12):
    t.color(culori[i % 6])
    for j in range(5):
        t.forward(90)
        t.right(144)
    t.right(30)

turtle.done()
```

**Ce vezi pe ecran:** pe fundal negru, **12 stele** colorate, care se învârt în jurul aceluiași punct (centrul ferestrei) și formează o **floare de stele**. Rotirea dintre stele este `360 / 12 = 30` de grade.

### Exemplul 7 — Inel de stele cu funcție

```python
import turtle

t = turtle.Turtle()
t.hideturtle()
t.speed(0)

def stea(marime, culoare):
    t.color(culoare)
    t.begin_fill()
    for i in range(5):
        t.forward(marime)
        t.right(144)
    t.end_fill()

def inel(numar, marime, distanta, culoare):
    for i in range(numar):
        t.penup()
        t.forward(distanta)
        t.pendown()
        stea(marime, culoare)
        t.penup()
        t.backward(distanta)
        t.right(360 / numar)

inel(8, 40, 100, "tomato")

turtle.done()
```

**Ce vezi pe ecran:** **8 stele roșii**, așezate **în cerc** în jurul centrului ferestrei, la distanța 100 de el.

Funcția `inel` merge cu `distanta` pași de la centru, desenează o stea, se întoarce în centru și se rotește cu `360 / numar`. Observă că funcția `stea` aici **nu primește poziția**: desenează chiar acolo unde se află țestoasa.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 6** (Stele în cerc)  
- [ ] Am scris și am rulat **Exemplul 7** (Inel de stele cu funcție)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 6. Mini-proiect

### Exemplul 8 — Mandala mea

```python
import turtle

screen = turtle.Screen()
screen.setup(700, 600)
screen.bgcolor("midnightblue")

t = turtle.Turtle()
t.hideturtle()
t.speed(0)
t.pensize(2)

def stea(marime, culoare):
    t.color(culoare)
    t.begin_fill()
    for i in range(5):
        t.forward(marime)
        t.right(144)
    t.end_fill()

def inel(numar, marime, distanta, culoare):
    for i in range(numar):
        t.penup()
        t.forward(distanta)
        t.pendown()
        stea(marime, culoare)
        t.penup()
        t.backward(distanta)
        t.right(360 / numar)

def mandala():
    inel(24, 22, 230, "deepskyblue")
    inel(18, 28, 175, "gold")
    inel(12, 32, 120, "hotpink")
    inel(8, 28, 70, "lime")
    t.dot(40, "white")

mandala()

t.penup()
t.goto(0, 268)
t.color("white")
t.write("Mandala mea", align="center", font=("Arial", 18, "bold"))

turtle.done()
```

**Ce vezi pe ecran:** pe fundal albastru închis, o **mandală cu 4 inele**: 24 de stele albastru-deschis în exterior, apoi 18 aurii, 12 roz și 8 verzi în centru. În mijloc este un **punct alb**, iar sus, deasupra mandalei, apare scris cu litere îngroșate textul **„Mandala mea”**.

Cheia este că după fiecare inel țestoasa a făcut exact un tur complet (`numar × 360 / numar = 360`), deci privește din nou spre dreapta și revine în centru. Putem lega oricâte inele! Un inel nou înseamnă doar un rând nou în funcția `mandala()`: `inel(număr, mărime, distanță, culoare)`.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 8** (Mandala mea)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## De făcut azi — „Mandala mea”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | O funcție `stea(marime, culoare)` și o stea cu 5 colțuri, desenată de două ori, în culori diferite |
| **Complet** | Minim + mandala ta: cel puțin 4 inele de stele, un punct în centru, fundal și un titlu scris pe ecran |

### Pasul 1 — Minim
- [ ] O funcție `stea(marime, culoare)` cu `begin_fill()` și `end_fill()`  
- [ ] Steaua apelată de două ori, cu mărimi și culori diferite (mută țestoasa între ele cu `penup`, `goto`, `pendown`)  

### Pasul 2 — Complet
Pornește de la Exemplul 8 și fă mandala **a ta**. Trebuie să ai:
1. cel puțin **4 inele**, cu numere de stele, mărimi și culori alese de tine;
2. un **punct** (`dot`) în centru;
3. un **fundal** potrivit;
4. un **titlu** scris pe ecran;
5. toate inelele apelate dintr-o funcție `mandala()`.

**Gata când:**
- [ ] Mandala are cel puțin 4 inele, un punct în centru și un titlu  
- [ ] Toate inelele se apelează din funcția `mandala()`  
- [ ] Am schimbat numărul de stele dintr-un inel și am văzut cum se schimbă desenul  
- [ ] Fișierul se numește `Prenume_Nume_P3_L5.py`  

---

## Bonus ★★★ — Provocare: Mandala crește
*Doar dacă ai terminat Complet. Adaugă în **aceeași mandală**, în același program.*

- [ ] Fă o funcție `inel_colorat(numar, marime, distanta, culori)` în care fiecare stea ia culoarea din listă, cu `i % len(culori)`, și pune-l în jurul mandalei  
- [ ] Pune mandala pe un **cer înstelat**: 60 de stele mici, la întâmplare, desenate **înainte** de mandală  
- [ ] Fă o funcție `inel_puncte(numar, distanta, raza, culoare)` și înconjoară mandala cu un inel de puncte  
- [ ] Desenează **două mandale mici**, una în stânga și una în dreapta mandalei mari  

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| Steaua arată ca un pentagon | Ai folosit 72° în loc de 144° | `t.right(144)` |
| Steaua nu se închide | Unghi greșit sau număr de repetări greșit | Pentru `n` colțuri impare: `n` repetări și `180 - 180 / n` |
| Inelul nu se închide ca un cerc | Lipsește rotirea `360 / numar` | `t.right(360 / numar)` la fiecare pas |
| Stelele nu sunt umplute | Lipsește `end_fill()` | Închide cu `t.end_fill()` |
| Toate stelele sunt în același loc | Ai uitat `goto` sau `forward(distanta)` înainte de desen | Mută țestoasa înainte de fiecare stea |
| Liniile unesc stelele între ele | Creionul a rămas jos la mutare | `penup()` înainte să mergi, `pendown()` înainte să desenezi |
| Inelele nu sunt la același centru | Ai început un inel din alt loc sau cu altă direcție | Începe fiecare inel din centru, cu `goto(0, 0)` și `setheading(0)` |

---

## Recapitulare pe scurt

- Steaua cu 5 colțuri: `forward(l)` și `right(144)`, repetate de 5 ori.
- Pentru `n` colțuri impare, unghiul este `180 - 180 / n`.
- Un desen se închide când rotirea totală este un număr întreg de ture.
- Forme în cerc: mergi `distanta`, desenezi, te întorci, rotești `360 / numar`.
- Mandala = mai multe inele, fiecare cu alt număr, altă mărime și altă culoare.
- O funcție `mandala()` aduce inelele împreună, ca `peisaj()` în lecția trecută.

---

## Quiz scurt
- Cu ce rotire se desenează steaua cu 5 colțuri?  
- Care e formula unghiului pentru `n` colțuri impare?  
- Când se închide un desen?  
- Cum desenezi forme dispuse în cerc?  
- Ce face funcția `mandala()`?  

---

## Temă
1. Refă **Exemplele 1–8** în Thonny, scrise de mână.  
2. Scrie o funcție `stea_n(colturi, latura)` care desenează o stea cu `colturi` colțuri (număr impar), folosind formula `180 - 180 / colturi`. Desenează stele cu 5, 7, 9 și 11 colțuri.  
3. Desenează un **cer înstelat** cu 50 de stele, în doar 3 mărimi (mică, medie, mare).  
4. Fă o **mandală nouă** cu 6 inele, în culori diferite față de cele din clasă.  
5. **Bonus — steagul Uniunii Europene.** Fundal albastru și 12 stele galbene așezate în cerc. Ai nevoie de funcția `inel`: `inel(12, 20, 100, "gold")`.  
6. Pe foaie, răspunde: de ce unghiul stelei este 144° și nu 72°? De ce rotim cu `360 / numar` când așezăm forme în cerc?  
7. Salvează totul ca `Tema_P3_L5_Prenume_Nume.py`.

### Exemple pentru acasă
Aceste exemple folosesc exact ce ai învățat azi. Scrie-le în Thonny, rulează-le și schimbă-le după preferințe.

#### Acasă 1 — Spirala de stele

```python
import turtle

culori = ["red", "gold", "lime", "cyan", "magenta"]

screen = turtle.Screen()
screen.bgcolor("black")

t = turtle.Turtle()
t.hideturtle()
t.speed(0)
t.pensize(2)

for i in range(100):
    t.color(culori[i % 5])
    t.forward(i * 2)
    t.right(144)

turtle.done()
```

**Ce vezi pe ecran:** o **spirală cu cinci brațe** în culorile roșu, auriu, verde deschis, azuriu și magenta. Este spirala din Lecția 3, dar cu unghiul `144°` de la stele: aceeași idee, alt rezultat.

#### Acasă 2 — Mandala descrisă de o listă

```python
import turtle

screen = turtle.Screen()
screen.setup(700, 600)
screen.bgcolor("midnightblue")

t = turtle.Turtle()
t.hideturtle()
t.speed(0)
t.pensize(2)

def stea(marime, culoare):
    t.color(culoare)
    t.begin_fill()
    for i in range(5):
        t.forward(marime)
        t.right(144)
    t.end_fill()

def inel(numar, marime, distanta, culoare):
    for i in range(numar):
        t.penup()
        t.forward(distanta)
        t.pendown()
        stea(marime, culoare)
        t.penup()
        t.backward(distanta)
        t.right(360 / numar)

def mandala(straturi):
    for nr, marime, distanta, culoare in straturi:
        inel(nr, marime, distanta, culoare)
    t.dot(40, "white")

straturi = [
    (24, 22, 230, "deepskyblue"),
    (18, 28, 175, "gold"),
    (12, 32, 120, "hotpink"),
    (8, 28, 70, "lime"),
]

mandala(straturi)

turtle.done()
```

**Ce vezi pe ecran:** aceeași mandală cu 4 inele ca în Exemplul 8, dar acum este **descrisă de o listă**. Fiecare rând din listă este un grup `(număr de stele, mărime, distanță, culoare)`, iar bucla `for nr, marime, distanta, culoare in straturi` desface grupul în patru valori. Un inel nou înseamnă doar un rând nou în listă.

### Încă două exerciții

**Ce desenează?** Gândește-te, apoi verifică în Thonny:

```python
import turtle

t = turtle.Turtle()
for i in range(7):
    t.forward(100)
    t.right(720 / 7)

turtle.done()
```

**Găsește greșelile.** Programul are 5 greșeli. Rescrie-l corect și explică fiecare corecție:

```text
import turtle
t = turtle.Turtle()
def stea(marime)
    for i in range(5)
        t.forward(marime)
        t.right(144
stea(100)
stea()
turtle.done
```

---

## Răspunsuri la bonus

*Uită-te aici doar după ce ai încercat singur. Există mai multe soluții bune; a ta poate arăta diferit.*

Toate soluțiile pornesc de la mandala din Exemplul 8 și adaugă ceva în aceeași scenă. Mai jos e **începutul comun**, pe care îl copiezi o singură dată; după el vine fiecare soluție. La final, nu uita `turtle.done()` pe ultimul rând.

```python
import random
import turtle

screen = turtle.Screen()
screen.setup(900, 600)
screen.bgcolor("midnightblue")

t = turtle.Turtle()
t.hideturtle()
t.speed(0)
t.pensize(2)

def stea(marime, culoare):
    t.color(culoare)
    t.begin_fill()
    for i in range(5):
        t.forward(marime)
        t.right(144)
    t.end_fill()

def inel(numar, marime, distanta, culoare):
    for i in range(numar):
        t.penup()
        t.forward(distanta)
        t.pendown()
        stea(marime, culoare)
        t.penup()
        t.backward(distanta)
        t.right(360 / numar)

def muta(x, y):
    t.penup()
    t.goto(x, y)
    t.setheading(0)
    t.pendown()

def mandala():
    inel(24, 22, 230, "deepskyblue")
    inel(18, 28, 175, "gold")
    inel(12, 32, 120, "hotpink")
    inel(8, 28, 70, "lime")
    t.dot(40, "white")
```

### 1. Inel colorat

Adaugă, după funcțiile de mai sus:

```python
def inel_colorat(numar, marime, distanta, culori):
    for i in range(numar):
        t.penup()
        t.forward(distanta)
        t.pendown()
        stea(marime, culori[i % len(culori)])
        t.penup()
        t.backward(distanta)
        t.right(360 / numar)

muta(0, 0)
mandala()
muta(0, 0)
inel_colorat(30, 12, 270, ["red", "orange", "gold", "lime", "deepskyblue", "violet"])
```

**Ce vezi pe ecran:** mandala din Exemplul 8, înconjurată de un **inel exterior de 30 de stele** care își schimbă culoarea la fiecare pas: roșu, portocaliu, auriu, verde, albastru, violet, apoi de la capăt. Culoarea se alege cu `culori[i % len(culori)]`, ca la spirala din Lecția 3.

### 2. Cer înstelat

Adaugă, după funcțiile de mai sus:

```python
def cer(numar):
    culori = ["white", "yellow", "lightblue"]
    for i in range(numar):
        x = random.randint(-440, 420)
        y = random.randint(-290, 270)
        muta(x, y)
        stea(random.randint(6, 14), random.choice(culori))

cer(60)
muta(0, 0)
mandala()
```

**Ce vezi pe ecran:** pe fundal albastru închis, **60 de stele mici** împrăștiate la întâmplare (la fiecare rulare altfel), iar peste ele mandala. Cerul se desenează **înainte**, deci mandala acoperă stelele care îi sunt în cale.

### 3. Inel de puncte

Adaugă, după funcțiile de mai sus:

```python
def inel_puncte(numar, distanta, raza, culoare):
    for i in range(numar):
        t.penup()
        t.forward(distanta)
        t.dot(raza, culoare)
        t.backward(distanta)
        t.right(360 / numar)

muta(0, 0)
mandala()
muta(0, 0)
inel_puncte(48, 280, 8, "white")
```

**Ce vezi pe ecran:** mandala, înconjurată de un **inel de 48 de puncte albe**, la distanța 280 de centru. Funcția `inel_puncte` are aceeași structură ca `inel`, doar că în loc de stea folosește `dot`.

### 4. Două mandale mici

Adaugă, după funcțiile de mai sus:

```python
def mandala_mica(x, y):
    muta(x, y)
    inel(12, 14, 70, "gold")
    inel(6, 14, 30, "white")
    t.dot(14, "hotpink")

muta(0, 0)
mandala()
mandala_mica(-350, 0)
mandala_mica(350, 0)
```

**Ce vezi pe ecran:** mandala mare în mijloc și **două mandale mici**, una în stânga și una în dreapta, la `x = -350` și `x = 350`. Fereastra de 900 × 600 are loc pentru toate trei. Funcția `mandala_mica(x, y)` își mută singură țestoasa în centrul ei, apoi desenează două inele.

---

## Ce urmează — Lecția 6
**Tastatura: țestoasa pilot**: de acum controlăm țestoasa cu săgețile și transformăm desenul într-un joc.
