# LECȚIA 9 — Prinde steaua
### Joc: scor, bombă și bucla jocului
**Modulul 3 · Desenăm cu Turtle · 2 ore**  
**Code Maker Club · Turtle Artist**

> Azi facem **primul nostru joc complet**! Conduci o țestoasă cu săgețile și prinzi cât mai multe stele, dar ai grijă la bomba roșie care ricoșează prin ecran. Dacă te atinge, jocul se termină.  
> Proiect: **„Prinde steaua”** · fișier: `Prenume_Nume_P3_L9.py`

---

## Ce facem azi
La finalul orei construiești un joc cu Turtle: un jucător controlat de tastatură, o stea care apare la întâmplare, coliziuni (atingeri), scor și o bombă care ricoșează. Orice joc are aceleași părți: **jucător**, **ținte**, **pericole**, **scor** și **sfârșit**. Dacă înțelegi cum se leagă între ele, poți face jocuri cu orice temă: spațiu, pădure, mașini. Aceleași idei le vei folosi și în Pygame. Viețile, timpul, nivelurile și recordul sunt în provocarea de la final.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare L8 |
| 10–25 | Jucătorul și steaua (**Exemplele 1–2**) |
| 25–45 | Coliziunea și scorul (**Exemplele 3–4**) |
| 45–65 | Bomba care ricoșează (**Exemplul 5**) |
| 65–95 | Bomba te lovește și bucla jocului (**Exemplele 6–7**) |
| 95–118 | Jocul complet (**Exemplul 8**) |
| 118–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `jucator.distance(stea) < 25` | Coliziune: distanța dintre două țestoase este mică | `if jucator.distance(stea) < 25:` |
| `screen.tracer(0)` · `screen.update()` | Oprește desenarea automată; reîmprospătezi tu ecranul, o dată pe cadru | animație fluidă |
| `screen.ontimer(bucla, 20)` | **Bucla jocului**: funcția se programează singură peste 20 ms | `screen.ontimer(bucla, 20)` |
| `(180 - unghi) % 360` · `(-unghi) % 360` | Noua direcție după ricoșeu de un perete vertical · orizontal | bomba |
| `stare = {"scor": 0, ...}` | Dicționar cu tot ce se schimbă în joc | `stare["scor"] += 1` |
| `screen.register_shape("stea", puncte)` | Creează o formă nouă, cu numele ei | `stea.shape("stea")` |

---

## 1. Recapitulare rapidă din L8

- Fiecare țestoasă este un obiect separat, cu propriile comenzi.
- Tastele: `screen.listen()` și `screen.onkeypress(functia, "Up")`.
- `screen.ontimer(functia, ms)` repetă o funcție (Lecția 6).

**Încearcă tu (3 min)**  
- [ ] Scrie un `for` care afișează numerele de la 1 la 5  

---

## 2. Jucătorul și steaua

### Exemplul 1 — Jucătorul

```python
import turtle

screen = turtle.Screen()
screen.setup(600, 600)
screen.bgcolor("midnightblue")

jucator = turtle.Turtle()
jucator.shape("turtle")
jucator.color("lime")
jucator.penup()

def muta(directie):
    jucator.setheading(directie)
    jucator.forward(20)
    jucator.setx(max(-280, min(280, jucator.xcor())))
    jucator.sety(max(-280, min(280, jucator.ycor())))

def sus():
    muta(90)

def jos():
    muta(270)

def stanga():
    muta(180)

def dreapta():
    muta(0)

screen.listen()
screen.onkeypress(sus, "Up")
screen.onkeypress(jos, "Down")
screen.onkeypress(stanga, "Left")
screen.onkeypress(dreapta, "Right")

turtle.done()
```

**Ce vezi pe ecran:** pe fundal albastru închis, o țestoasă verde pe care o conduci cu **săgețile**. Ea nu lasă urmă (creionul e ridicat) și **nu poate ieși** din ecran.

Funcția `muta(directie)` rotește țestoasa spre `90` (sus), `270` (jos), `180` (stânga) sau `0` (dreapta) și o mută cu 20. Rândurile cu `max` și `min` o țin în interiorul ferestrei: `min(280, x)` nu lasă `x` să treacă de 280, iar `max(-280, ...)` nu-l lasă să coboare sub -280.

### Exemplul 2 — Steaua

```python
import math
import random
import turtle

screen = turtle.Screen()
screen.setup(600, 600)
screen.bgcolor("midnightblue")

# desenam o forma noua: steaua
puncte = []
for i in range(10):
    if i % 2 == 0:
        raza = 10
    else:
        raza = 4
    unghi = math.radians(90 + i * 36)
    puncte.append((raza * math.cos(unghi), raza * math.sin(unghi)))
screen.register_shape("stea", tuple(puncte))

stea = turtle.Turtle()
stea.shape("stea")
stea.shapesize(2)
stea.color("gold")
stea.penup()

def muta_stea():
    stea.goto(random.randint(-260, 260), random.randint(-260, 260))

muta_stea()

screen.listen()
screen.onkey(muta_stea, "space")

turtle.done()
```

**Ce vezi pe ecran:** pe fundal albastru închis, o **stea aurie** cu 5 colțuri, într-un loc la întâmplare. De fiecare dată când apeși **bara de spațiu**, steaua **sare** în alt loc.

Cum facem o formă nouă: `screen.register_shape("stea", puncte)` înregistrează o formă cu numele `"stea"`, făcută din 10 puncte (colțurile exterioare și interioare ale stelei, alternativ). Apoi o folosim ca orice formă: `stea.shape("stea")`. (`math.cos` și `math.sin` calculează poziția punctelor pe un cerc. Nu trebuie să le înțelegi acum, doar să copiezi forma.)

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 1** (Jucătorul)  
- [ ] Am scris și am rulat **Exemplul 2** (Steaua)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 3. Coliziune și scor

### Exemplul 3 — Când se ating două lucruri?

```python
def distanta(x1, y1, x2, y2):
    return ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5

def se_ating(x1, y1, x2, y2, raza):
    return distanta(x1, y1, x2, y2) < raza

print(distanta(0, 0, 30, 40))
print(se_ating(0, 0, 30, 40, 60))
print(se_ating(0, 0, 30, 40, 50))
print(se_ating(10, 10, 15, 14, 20))
```

**Ieșire** (în fereastra Thonny, jos):
```text
50.0
True
False
True
```

Două obiecte **se ating** dacă distanța dintre ele este mai mică decât o limită (aici `raza`). Distanța se calculează cu teorema lui Pitagora, ca în Lecția 7: pentru `(0, 0)` și `(30, 40)` obținem `50` (triunghiul 3-4-5, înmulțit cu 10). Dacă limita este 60, se ating; dacă este exact 50, **nu** (pentru că `50 < 50` este fals).

În Turtle avem o scurtătură: `jucator.distance(stea)` dă direct distanța dintre două țestoase.

### Exemplul 4 — Scorul pe ecran

```python
import random
import turtle

screen = turtle.Screen()
screen.setup(600, 600)
screen.bgcolor("midnightblue")

scor = {"puncte": 0}

jucator = turtle.Turtle()
jucator.shape("turtle")
jucator.color("lime")
jucator.penup()

stea = turtle.Turtle()
stea.shape("circle")
stea.color("gold")
stea.penup()
stea.goto(100, 100)

panou = turtle.Turtle()
panou.hideturtle()
panou.penup()
panou.color("white")

def scrie_scor():
    panou.clear()
    panou.goto(-280, 260)
    panou.write("Scor: " + str(scor["puncte"]), font=("Arial", 16, "bold"))

def verifica():
    if jucator.distance(stea) < 25:
        scor["puncte"] += 1
        stea.goto(random.randint(-260, 260), random.randint(-260, 230))
        scrie_scor()

def sus():
    jucator.setheading(90)
    jucator.forward(20)
    verifica()

def jos():
    jucator.setheading(270)
    jucator.forward(20)
    verifica()

def stanga():
    jucator.setheading(180)
    jucator.forward(20)
    verifica()

def dreapta():
    jucator.setheading(0)
    jucator.forward(20)
    verifica()

scrie_scor()
screen.listen()
screen.onkeypress(sus, "Up")
screen.onkeypress(jos, "Down")
screen.onkeypress(stanga, "Left")
screen.onkeypress(dreapta, "Right")

turtle.done()
```

**Ce vezi pe ecran:** sus, în stânga, scrie **Scor: 0**. Conduci țestoasa până la **cercul auriu** (steaua provizorie). Când ajungi la mai puțin de 25 de pași de ea, scorul crește cu 1, iar cercul **sare în alt loc**.

După fiecare mișcare apelăm `verifica()`: ea compară distanța cu 25 și, dacă am „prins” ținta, mărește scorul și mută ținta. `panou.clear()` șterge scorul vechi înainte să scriem unul nou.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 3** (Când se ating două lucruri?)  
- [ ] Am scris și am rulat **Exemplul 4** (Scorul pe ecran)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 4. Pericolul: bomba

### Exemplul 5 — Bomba care ricoșează

```python
import turtle

screen = turtle.Screen()
screen.setup(600, 600)
screen.bgcolor("midnightblue")
screen.tracer(0)

bomba = turtle.Turtle()
bomba.shape("circle")
bomba.color("red")
bomba.penup()
bomba.setheading(40)

def bucla():
    bomba.forward(4)
    if abs(bomba.xcor()) > 280:
        bomba.setheading((180 - bomba.heading()) % 360)
    if abs(bomba.ycor()) > 280:
        bomba.setheading((-bomba.heading()) % 360)
    screen.update()
    screen.ontimer(bucla, 20)

bucla()

turtle.done()
```

**Ce vezi pe ecran:** o **bombă roșie** pornește din centru în sus și spre dreapta și **ricoșează** de marginile ferestrei, ca o minge.

Cum ricoșează: la un perete **vertical** (stânga sau dreapta), direcția `u` devine `180 - u`; la un perete **orizontal** (sus sau jos), devine `-u`. De exemplu, o bombă care merge spre `30°` și lovește un perete vertical pleacă spre `150°`. Operația `% 360` ține unghiul între 0 și 359.

Funcția `bucla()` este **bucla jocului**: face un pas, verifică pereții, actualizează ecranul și se programează să ruleze din nou peste 20 de milisecunde (50 de cadre pe secundă). `screen.tracer(0)` oprește desenarea automată, iar `screen.update()` reîmprospătează ecranul **o singură dată pe cadru**: așa mișcarea este fluidă.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 5** (Bomba care ricoșează)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 5. Bucla jocului

### Exemplul 6 — Bomba te lovește

```python
import turtle

screen = turtle.Screen()
screen.setup(600, 600)
screen.bgcolor("midnightblue")
screen.tracer(0)

stare = {"activ": True}

jucator = turtle.Turtle()
jucator.shape("turtle")
jucator.color("lime")
jucator.penup()

bomba = turtle.Turtle()
bomba.shape("circle")
bomba.color("red")
bomba.penup()
bomba.goto(220, 220)
bomba.setheading(225)

panou = turtle.Turtle()
panou.hideturtle()
panou.penup()
panou.color("white")

def muta(directie):
    if stare["activ"]:
        jucator.setheading(directie)
        jucator.forward(20)
        jucator.setx(max(-280, min(280, jucator.xcor())))
        jucator.sety(max(-280, min(280, jucator.ycor())))

def sus():
    muta(90)

def jos():
    muta(270)

def stanga():
    muta(180)

def dreapta():
    muta(0)

def sfarsit(mesaj):
    stare["activ"] = False
    panou.goto(0, 0)
    panou.write(mesaj, align="center", font=("Arial", 32, "bold"))
    screen.update()

def bucla():
    if not stare["activ"]:
        return
    bomba.forward(3)
    if abs(bomba.xcor()) > 280:
        bomba.setheading((180 - bomba.heading()) % 360)
    if abs(bomba.ycor()) > 280:
        bomba.setheading((-bomba.heading()) % 360)
    if jucator.distance(bomba) < 22:
        sfarsit("GAME OVER")
        return
    screen.update()
    screen.ontimer(bucla, 20)

screen.listen()
screen.onkeypress(sus, "Up")
screen.onkeypress(jos, "Down")
screen.onkeypress(stanga, "Left")
screen.onkeypress(dreapta, "Right")

bucla()

turtle.done()
```

**Ce vezi pe ecran:** conduci **țestoasa verde**, iar **bomba roșie** ricoșează prin ecran, pornind din colțul dreapta-sus. Dacă o atingi, apare cu litere mari **GAME OVER** și jocul se oprește.

Dicționarul `stare` ține minte dacă jocul merge (`"activ"`). Când bomba te atinge, funcția `sfarsit` pune `activ` pe `False`: bucla nu se mai programează, iar tastele nu mai mișcă țestoasa.

### Exemplul 7 — Steaua în bucla jocului

```python
import random
import turtle

screen = turtle.Screen()
screen.setup(600, 600)
screen.bgcolor("midnightblue")
screen.tracer(0)

stare = {"scor": 0}

jucator = turtle.Turtle()
jucator.shape("turtle")
jucator.color("lime")
jucator.penup()

stea = turtle.Turtle()
stea.shape("circle")
stea.color("gold")
stea.penup()
stea.goto(100, 100)

panou = turtle.Turtle()
panou.hideturtle()
panou.penup()
panou.color("white")

def scrie_scor():
    panou.clear()
    panou.goto(-280, 262)
    panou.write("Scor: " + str(stare["scor"]), font=("Arial", 16, "bold"))

def muta(directie):
    jucator.setheading(directie)
    jucator.forward(20)
    jucator.setx(max(-280, min(280, jucator.xcor())))
    jucator.sety(max(-280, min(280, jucator.ycor())))

def sus():
    muta(90)

def jos():
    muta(270)

def stanga():
    muta(180)

def dreapta():
    muta(0)

def bucla():
    if jucator.distance(stea) < 25:
        stare["scor"] += 1
        stea.goto(random.randint(-260, 260), random.randint(-260, 220))
        scrie_scor()
    screen.update()
    screen.ontimer(bucla, 20)

scrie_scor()
screen.listen()
screen.onkeypress(sus, "Up")
screen.onkeypress(jos, "Down")
screen.onkeypress(stanga, "Left")
screen.onkeypress(dreapta, "Right")

bucla()

turtle.done()
```

**Ce vezi pe ecran:** ca la Exemplul 4: **Scor: 0**, țestoasa verde și un cerc auriu pe care îl prinzi. Diferența este în cod: verificarea atingerii nu mai este în funcțiile tastelor, ci în `bucla()`, care rulează de 50 de ori pe secundă. Așa jocul observă atingerea **la fiecare cadru**, chiar dacă nu apeși nicio tastă.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 6** (Bomba te lovește)  
- [ ] Am scris și am rulat **Exemplul 7** (Steaua în bucla jocului)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 6. Jocul complet

### Exemplul 8 — „Prinde steaua”

```python
import math
import random
import turtle

screen = turtle.Screen()
screen.setup(600, 600)
screen.bgcolor("midnightblue")
screen.title("Prinde steaua")
screen.tracer(0)

# forma stelei
puncte = []
for i in range(10):
    if i % 2 == 0:
        raza = 10
    else:
        raza = 4
    unghi = math.radians(90 + i * 36)
    puncte.append((raza * math.cos(unghi), raza * math.sin(unghi)))
screen.register_shape("stea", tuple(puncte))

stare = {"scor": 0, "viteza": 3, "activ": True}

jucator = turtle.Turtle()
jucator.shape("turtle")
jucator.color("lime")
jucator.penup()

stea = turtle.Turtle()
stea.shape("stea")
stea.shapesize(2)
stea.color("gold")
stea.penup()

bomba = turtle.Turtle()
bomba.shape("circle")
bomba.color("red")
bomba.penup()
bomba.goto(220, 220)
bomba.setheading(225)

panou = turtle.Turtle()
panou.hideturtle()
panou.penup()
panou.color("white")

def muta_stea():
    stea.goto(random.randint(-260, 260), random.randint(-260, 220))

def scrie_panou():
    panou.clear()
    panou.goto(-280, 262)
    panou.write("Scor: " + str(stare["scor"]), font=("Arial", 14, "bold"))

def sfarsit(mesaj):
    stare["activ"] = False
    panou.goto(0, 0)
    panou.write(mesaj, align="center", font=("Arial", 32, "bold"))
    screen.update()

def muta(directie):
    if stare["activ"]:
        jucator.setheading(directie)
        jucator.forward(20)
        jucator.setx(max(-280, min(280, jucator.xcor())))
        jucator.sety(max(-280, min(280, jucator.ycor())))

def sus():
    muta(90)

def jos():
    muta(270)

def stanga():
    muta(180)

def dreapta():
    muta(0)

def prinde_stea():
    stare["scor"] += 1
    muta_stea()
    scrie_panou()

def loveste_bomba():
    sfarsit("GAME OVER")

def bucla():
    if not stare["activ"]:
        return

    bomba.forward(stare["viteza"])
    if abs(bomba.xcor()) > 280:
        bomba.setheading((180 - bomba.heading()) % 360)
    if abs(bomba.ycor()) > 280:
        bomba.setheading((-bomba.heading()) % 360)

    if jucator.distance(stea) < 25:
        prinde_stea()
    if jucator.distance(bomba) < 22:
        loveste_bomba()

    if not stare["activ"]:
        return
    screen.update()
    screen.ontimer(bucla, 20)

muta_stea()
scrie_panou()
screen.listen()
screen.onkeypress(sus, "Up")
screen.onkeypress(jos, "Down")
screen.onkeypress(stanga, "Left")
screen.onkeypress(dreapta, "Right")

bucla()

turtle.done()
```

**Ce vezi pe ecran:** pe fundal albastru închis, sus, în stânga, scrie **Scor: 0**. Conduci **țestoasa verde** cu săgețile și prinzi **steaua aurie**: fiecare stea înseamnă **+1 punct**, iar steaua sare în alt loc. **Bomba roșie** ricoșează prin ecran. Dacă te atinge, apare **GAME OVER** și jocul se oprește.

Cum sunt legate piesele:
- **`stare`** (un dicționar) păstrează tot ce se schimbă: scor, viteza bombei și dacă jocul merge (`activ`);
- **`bucla()`** rulează de 50 de ori pe secundă: mută bomba, verifică stea și bombă, actualizează ecranul;
- **`prinde_stea()`** și **`loveste_bomba()`** sunt funcții mici, chemate din `bucla`: ce se întâmplă la o atingere este scris într-un singur loc, ușor de schimbat;
- **`sfarsit(mesaj)`** oprește jocul și scrie mesajul pe ecran.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 8** („Prinde steaua”)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## De făcut azi — „Prinde steaua”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Jucătorul prinde steaua și scorul crește |
| **Complet** | Minim + bomba care ricoșează, GAME OVER la atingere, tema ta (culori, titlu) și funcțiile `bucla`, `prinde_stea`, `loveste_bomba`, `sfarsit` |

### Pasul 1 — Minim
- [ ] Jucătorul se mișcă cu săgețile și nu iese din ecran (Exemplul 1)  
- [ ] Steaua apare la întâmplare, iar când o prinzi scorul crește cu 1 și steaua sare în alt loc (Exemplul 4 sau 7)  
- [ ] Scorul se vede pe ecran  

### Pasul 2 — Complet
Pornește de la Exemplul 8 și fă jocul **al tău**. Trebuie să ai:
1. **bomba** care ricoșează și **GAME OVER** când te atinge;
2. **culori și temă** alese de tine (spațiu, ocean, desert), plus un titlu pentru fereastră;
3. forma stelei și scorul pe ecran;
4. funcțiile păstrate: `bucla`, `prinde_stea`, `loveste_bomba`, `sfarsit`.

**Gata când:**
- [ ] Jocul are scor, bombă și GAME OVER  
- [ ] Bomba ricoșează de toate marginile  
- [ ] Ai schimbat tema (culori, titlu)  
- [ ] Ai explicat pe foaie bucla jocului și coliziunea  
- [ ] Fișierul se numește `Prenume_Nume_P3_L9.py`  

---

## Bonus ★★★ — Provocare: Prinde steaua crește
*Doar dacă ai terminat Complet. Adaugă în **același joc**, în același program.*

- [ ] Adaugă **3 vieți**: bomba îți ia o viață, iar GAME OVER apare abia la 0 vieți  
- [ ] Adaugă un **cronometru de 30 de secunde**: când se termină, apare „TIMPUL A EXPIRAT”  
- [ ] Adaugă **niveluri**: la fiecare 5 stele, bomba merge mai repede și crește **Nivelul**  
- [ ] Adaugă **record** și **joc nou**: scorul cel mai bun rămâne pe ecran, iar cu **SPAȚIU** începi din nou  

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| Nu merg tastele | Lipsește `screen.listen()` sau fereastra nu are focus | `screen.listen()` și click pe fereastră |
| Jocul pare „înghețat” | Ai pus `screen.tracer(0)` și ai uitat `screen.update()` | Apelează `screen.update()` în `bucla()` |
| Jocul merge o singură dată și se oprește | Lipsește `screen.ontimer(bucla, 20)` la finalul funcției `bucla` | Programează funcția din nou, în interiorul ei |
| `KeyError: 'viteza'` | Cheie scrisă greșit sau lipsă din dicționar | Verifică numele: `stare["viteza"]` |
| `AttributeError: 'Turtle' object has no attribute 'Distance'` | Ai scris metoda cu majusculă | `jucator.distance(stea)` |
| Scorul nu se actualizează pe ecran | Ai uitat `scrie_panou()` după schimbare | Apelează funcția de afișare după fiecare schimbare |
| Bomba iese din ecran | Ai uitat verificarea pereților | `if abs(bomba.xcor()) > 280:` |

---

## Recapitulare pe scurt

- Un joc are: **jucător**, **țintă**, **pericol**, **scor**, **sfârșit**.
- Starea jocului se păstrează într-un **dicționar** (`stare`).
- **Bucla jocului**: o funcție care se programează singură cu `ontimer` și actualizează ecranul cu `update()`.
- **Coliziunea**: distanța dintre două obiecte este mai mică decât o limită.
- Ricoșeul: `180 - unghi` la pereți verticali, `-unghi` la pereți orizontali.
- `register_shape` creează forme noi, de exemplu o stea.

---

## Quiz scurt
- Care sunt părțile unui joc?  
- Unde păstrăm starea jocului?  
- Ce este bucla jocului și cum se repetă ea?  
- Cum verifici o coliziune între două obiecte?  
- Ce face `register_shape`?  

---

## Temă
1. Refă **Exemplele 1–8** în Thonny.  
2. Schimbă tema jocului: **pește care mănâncă pește mic**, **rachetă care strânge stele** sau altă idee.  
3. Pornind de la lista `runde = [4, 9, 7, 12, 3]`, scrie un program care afișează, pentru fiecare rundă, dacă este **record nou**.  
4. Joacă jocul cu un prieten și notează cât a fost scorul maxim.  
5. **Bonus:** schimbă fundalul la fiecare nivel nou (folosește `screen.bgcolor(...)`).  
6. Pe foaie, răspunde: ce face `bucla()` și de ce se programează singură cu `ontimer`? Cum știm că două obiecte s-au atins? La ce folosește variabila `activ`?  
7. Salvează totul ca `Tema_P3_L9_Prenume_Nume.py`.

### Exemple pentru acasă
Aceste exemple folosesc exact ce ai învățat azi. Scrie-le în Thonny, rulează-le și schimbă-le după preferințe.

#### Acasă 1 — Cronometrul

```python
import turtle

screen = turtle.Screen()
screen.setup(400, 300)
screen.bgcolor("black")

stare = {"timp": 10}

panou = turtle.Turtle()
panou.hideturtle()
panou.penup()
panou.color("white")

def scrie():
    panou.clear()
    panou.goto(0, -20)
    if stare["timp"] > 0:
        panou.write(stare["timp"], align="center", font=("Arial", 48, "bold"))
    else:
        panou.color("red")
        panou.write("TIMP!", align="center", font=("Arial", 48, "bold"))

def tick():
    stare["timp"] -= 1
    scrie()
    if stare["timp"] > 0:
        screen.ontimer(tick, 1000)

scrie()
screen.ontimer(tick, 1000)

turtle.done()
```

**Ce vezi pe ecran:** pe fundal negru apare **10**, apoi, la fiecare secundă, **9, 8, 7, ... 1**. La 0 apare cu roșu cuvântul **TIMP!** și numărătoarea se oprește.

`screen.ontimer(tick, 1000)` apelează funcția peste 1000 ms, adică **o secundă**. Funcția `tick` scade timpul și se programează din nou, **doar dacă** mai este timp. Altfel nu se mai programează și numărătoarea se oprește.

#### Acasă 2 — Viețile

```python
import turtle

screen = turtle.Screen()
screen.setup(400, 300)
screen.bgcolor("black")

stare = {"vieti": 3, "activ": True}

panou = turtle.Turtle()
panou.hideturtle()
panou.penup()
panou.color("white")

def scrie():
    panou.clear()
    panou.goto(0, 20)
    if stare["activ"]:
        panou.write("Vieti: " + "O " * stare["vieti"], align="center", font=("Arial", 24, "bold"))
    else:
        panou.color("red")
        panou.write("GAME OVER", align="center", font=("Arial", 36, "bold"))

def pierde_o_viata():
    if stare["activ"]:
        stare["vieti"] -= 1
        if stare["vieti"] <= 0:
            stare["activ"] = False
        scrie()

scrie()
screen.listen()
screen.onkey(pierde_o_viata, "x")

turtle.done()
```

**Ce vezi pe ecran:** scrie **Vieti: O O O** (trei „bile”, adică trei vieți). De fiecare dată când apeși **x** (ca și cum ai atinge bomba), se pierde o viață. După a treia apare cu roșu **GAME OVER**.

`"O " * 3` repetă textul de 3 ori: `"O O O "`. Variabila `activ` ne spune dacă jocul încă merge: după `GAME OVER`, tasta **x** nu mai face nimic.

### Încă două exerciții

**Ce afișează?** Gândește-te, apoi verifică în Thonny:

```python
scor = 0
viteza = 3
for i in range(12):
    scor += 1
    if scor % 4 == 0:
        viteza += 2
print(scor, viteza)
```

**Găsește greșelile.** Programul are 4 greșeli. Rescrie-l corect și explică fiecare corecție:

```text
import turtle
screen = turtle.Screen()
jucator = turtle.Turtle()
stea = turtle.Turtle()
def sus():
    jucator.forward(20)
screen.onkeypress(sus(), "Up")
if jucator.Distance(stea) < 20
    print("Prins!")
```

---

## Răspunsuri la bonus

*Uită-te aici doar după ce ai încercat singur. Există mai multe soluții bune; a ta poate arăta diferit.*

Toate soluțiile pornesc de la jocul din Exemplul 8, **fără** ultimele două rânduri (`bucla()` și `turtle.done()`). Mai jos e **începutul comun**, pe care îl copiezi o singură dată; după el vine fiecare soluție, care redefinește câteva funcții și pornește `bucla()`. La final, nu uita `turtle.done()` pe ultimul rând.

```python
import math
import random
import turtle

screen = turtle.Screen()
screen.setup(600, 600)
screen.bgcolor("midnightblue")
screen.title("Prinde steaua")
screen.tracer(0)

# forma stelei
puncte = []
for i in range(10):
    if i % 2 == 0:
        raza = 10
    else:
        raza = 4
    unghi = math.radians(90 + i * 36)
    puncte.append((raza * math.cos(unghi), raza * math.sin(unghi)))
screen.register_shape("stea", tuple(puncte))

stare = {"scor": 0, "viteza": 3, "activ": True}

jucator = turtle.Turtle()
jucator.shape("turtle")
jucator.color("lime")
jucator.penup()

stea = turtle.Turtle()
stea.shape("stea")
stea.shapesize(2)
stea.color("gold")
stea.penup()

bomba = turtle.Turtle()
bomba.shape("circle")
bomba.color("red")
bomba.penup()
bomba.goto(220, 220)
bomba.setheading(225)

panou = turtle.Turtle()
panou.hideturtle()
panou.penup()
panou.color("white")

def muta_stea():
    stea.goto(random.randint(-260, 260), random.randint(-260, 220))

def scrie_panou():
    panou.clear()
    panou.goto(-280, 262)
    panou.write("Scor: " + str(stare["scor"]), font=("Arial", 14, "bold"))

def sfarsit(mesaj):
    stare["activ"] = False
    panou.goto(0, 0)
    panou.write(mesaj, align="center", font=("Arial", 32, "bold"))
    screen.update()

def muta(directie):
    if stare["activ"]:
        jucator.setheading(directie)
        jucator.forward(20)
        jucator.setx(max(-280, min(280, jucator.xcor())))
        jucator.sety(max(-280, min(280, jucator.ycor())))

def sus():
    muta(90)

def jos():
    muta(270)

def stanga():
    muta(180)

def dreapta():
    muta(0)

def prinde_stea():
    stare["scor"] += 1
    muta_stea()
    scrie_panou()

def loveste_bomba():
    sfarsit("GAME OVER")

def bucla():
    if not stare["activ"]:
        return

    bomba.forward(stare["viteza"])
    if abs(bomba.xcor()) > 280:
        bomba.setheading((180 - bomba.heading()) % 360)
    if abs(bomba.ycor()) > 280:
        bomba.setheading((-bomba.heading()) % 360)

    if jucator.distance(stea) < 25:
        prinde_stea()
    if jucator.distance(bomba) < 22:
        loveste_bomba()

    if not stare["activ"]:
        return
    screen.update()
    screen.ontimer(bucla, 20)

muta_stea()
scrie_panou()
screen.listen()
screen.onkeypress(sus, "Up")
screen.onkeypress(jos, "Down")
screen.onkeypress(stanga, "Left")
screen.onkeypress(dreapta, "Right")
```

### 1. Trei vieți

Adaugă, după codul de mai sus:

```python
stare["vieti"] = 3

def scrie_panou():
    panou.clear()
    panou.goto(-280, 262)
    text = "Scor: " + str(stare["scor"]) + "   Vieti: " + str(stare["vieti"])
    panou.write(text, font=("Arial", 14, "bold"))

def loveste_bomba():
    stare["vieti"] -= 1
    bomba.goto(random.choice([-250, 250]), random.choice([-250, 250]))
    scrie_panou()
    if stare["vieti"] <= 0:
        sfarsit("GAME OVER")

scrie_panou()
bucla()
```

**Ce vezi pe ecran:** sus apare **Scor: 0   Vieti: 3**. Când bomba te atinge, pierzi **o viață**, iar bomba **reapare într-un colț**. Abia când vietile ajung la 0 apare **GAME OVER**. Observă că nu am atins funcția `bucla`: am schimbat doar `loveste_bomba` și `scrie_panou`, pentru că `bucla` le cheamă după nume.

### 2. Cronometru de 30 de secunde

Adaugă, după codul de mai sus:

```python
stare["timp"] = 30

def scrie_panou():
    panou.clear()
    panou.goto(-280, 262)
    text = "Scor: " + str(stare["scor"]) + "   Timp: " + str(stare["timp"])
    panou.write(text, font=("Arial", 14, "bold"))

def tick():
    if stare["activ"]:
        stare["timp"] -= 1
        scrie_panou()
        if stare["timp"] <= 0:
            sfarsit("TIMPUL A EXPIRAT")
        else:
            screen.ontimer(tick, 1000)

scrie_panou()
screen.ontimer(tick, 1000)
bucla()
```

**Ce vezi pe ecran:** sus apare **Scor: 0   Timp: 30**, iar timpul scade o dată pe secundă. La 0 jocul se oprește cu mesajul **TIMPUL A EXPIRAT**. Cronometrul `tick` merge separat de `bucla`: bucla rulează de 50 de ori pe secundă, `tick` o dată pe secundă. Dacă jocul se termină mai devreme (bomba), `tick` nu se mai programează, pentru că `activ` este `False`.

### 3. Niveluri

Adaugă, după codul de mai sus:

```python
stare["nivel"] = 1

def scrie_panou():
    panou.clear()
    panou.goto(-280, 262)
    text = "Scor: " + str(stare["scor"]) + "   Nivel: " + str(stare["nivel"])
    panou.write(text, font=("Arial", 14, "bold"))

def prinde_stea():
    stare["scor"] += 1
    if stare["scor"] % 5 == 0:
        stare["nivel"] += 1
        stare["viteza"] += 1
    muta_stea()
    scrie_panou()

scrie_panou()
bucla()
```

**Ce vezi pe ecran:** sus apare **Scor: 0   Nivel: 1**. La fiecare **5 stele** (`scor % 5 == 0`, adică restul împărțirii la 5 este zero), nivelul crește cu 1, iar **bomba merge mai repede** cu 1. Scorurile 5 și 10 dau nivelurile 2 și 3, iar viteza crește de la 3 la 4 și apoi la 5.

### 4. Record și joc nou

Adaugă, după codul de mai sus:

```python
stare["record"] = 0

def scrie_panou():
    panou.clear()
    panou.goto(-280, 262)
    text = "Scor: " + str(stare["scor"]) + "   Record: " + str(stare["record"])
    panou.write(text, font=("Arial", 14, "bold"))

def sfarsit(mesaj):
    stare["activ"] = False
    if stare["scor"] > stare["record"]:
        stare["record"] = stare["scor"]
    scrie_panou()
    panou.goto(0, 0)
    panou.write(mesaj, align="center", font=("Arial", 32, "bold"))
    panou.goto(0, -40)
    panou.write("Apasa SPATIU pentru joc nou", align="center", font=("Arial", 16, "normal"))
    screen.update()

def joc_nou():
    if stare["activ"]:
        return
    stare["scor"] = 0
    stare["viteza"] = 3
    stare["activ"] = True
    jucator.goto(0, 0)
    bomba.goto(220, 220)
    bomba.setheading(225)
    muta_stea()
    scrie_panou()
    bucla()

screen.onkey(joc_nou, "space")
scrie_panou()
bucla()
```

**Ce vezi pe ecran:** sus apare **Scor: 0   Record: 0**. Când jocul se termină, recordul se actualizează (dacă ai bătut scorul cel mai bun), iar sub **GAME OVER** apare „Apasa SPATIU pentru joc nou”. Cu **SPAȚIU** scorul și viteza se resetează, jucătorul și bomba se întorc la start, iar bucla pornește din nou. **Recordul nu se resetează**, dar scorul da. Funcția `joc_nou` funcționează doar dacă jocul s-a terminat: altfel ar porni două bucle deodată.

---

## Ce urmează — Lecția 10
**Proiect: galeria mea de artă**: strângem tot ce am învățat despre Turtle într-un proiect final, cu desene, culori, funcții și un meniu interactiv.
