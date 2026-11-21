# LECȚIA 7 — Paint-ul meu
### Mouse: click și desenezi
**Modulul 3 · Desenăm cu Turtle · 2 ore**  
**Code Maker Club · Turtle Artist**

> Ai învățat să asculți tastatura. Acum ascultăm **mouse-ul**: la fiecare click, programul află **unde** ai dat click și poate desena acolo, schimba o culoare sau număra puncte. La final construiești un mic program de desen, ca **Paint**.  
> Proiect: **„Paint-ul meu”** · fișier: `Prenume_Nume_P3_L7.py`

---

## Ce facem azi
La finalul orei legi un click de o funcție cu `onscreenclick`, folosești coordonatele `x` și `y` ale click-ului, desenezi puncte colorate, tragi țestoasa cu mouse-ul (`ondrag`), verifici dacă ai dat click într-o zonă și construiești o paletă de culori. Click-ul este „mâna” utilizatorului în aproape orice aplicație: butoane, meniuri, jocuri. Ca să știi dacă jucătorul a lovit un inamic sau un buton, trebuie să știi **unde** a dat click. Azi exersăm exact asta.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare L6 |
| 10–30 | Primul click (**Exemplele 1–2**) |
| 30–50 | Coordonatele click-ului și tragerea cu mouse-ul (**Exemplele 3–4**) |
| 50–85 | Zone de click: stânga/dreapta, paleta și discul (**Exemplele 5–7**) |
| 85–118 | Mini-proiect (**Exemplul 8**) |
| 118–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `screen.onscreenclick(functia)` | Apelează funcția la fiecare click în fereastră | `screen.onscreenclick(pune_punct)` |
| `def click(x, y):` | Funcția de click are **exact doi parametri**: locul click-ului | `def pune_punct(x, y):` |
| `t.ondrag(t.goto)` | Țestoasa te urmează când o tragi cu mouse-ul | desen liber |
| `if 250 <= y <= 290:` | Verifică dacă click-ul este într-o zonă | paleta de culori |
| `(x ** 2 + y ** 2) ** 0.5` | Distanța de la centru până la punctul `(x, y)` | click în disc |

---

## 1. Recapitulare rapidă din L6

- Legăm tasta de o funcție **fără paranteze**: `screen.onkeypress(sus, "Up")`.
- `screen.listen()` pornește ascultarea tastaturii.
- Dicționarul `setari` păstrează valori pe care le schimbăm din funcții.

**Încearcă tu (3 min)**  
- [ ] Scrie o funcție `rosu()` care face țestoasa roșie și leagă-o de tasta `"r"`  

---

## 2. Primul click

Funcția legată de un click primește **două numere**: `x` și `y`, adică poziția exactă a mouse-ului în fereastră.

### Exemplul 1 — Țestoasa merge la click

```python
import turtle

screen = turtle.Screen()
t = turtle.Turtle()
t.shape("turtle")

screen.onscreenclick(t.goto)

turtle.done()
```

**Ce vezi pe ecran:** de fiecare dată când dai click în fereastră, țestoasa **aleargă** în punctul respectiv, desenând o linie dreaptă.

Este un exemplu foarte scurt: `t.goto` este chiar funcția care primește `x` și `y`. Nu punem paranteze după `goto`, ca la tastatură: îi dăm programului **numele** funcției.

### Exemplul 2 — Un punct colorat la click

```python
import turtle

screen = turtle.Screen()
t = turtle.Turtle()
t.hideturtle()
t.speed(0)
t.penup()

def pune_punct(x, y):
    t.goto(x, y)
    t.dot(25, "red")

screen.onscreenclick(pune_punct)

turtle.done()
```

**Ce vezi pe ecran:** fereastră goală. La fiecare click apare un **punct roșu** cu diametrul 25, exact unde ai dat click. Țestoasa este ascunsă și are creionul ridicat, deci nu se văd linii.

Funcția `pune_punct(x, y)` **trebuie** să aibă exact doi parametri, `x` și `y`, chiar dacă nu îi folosești pe amândoi.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 1** (Țestoasa merge la click)  
- [ ] Am scris și am rulat **Exemplul 2** (Un punct colorat la click)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 3. Coordonatele și tragerea cu mouse-ul

### Exemplul 3 — Coordonatele click-ului

```python
import turtle

screen = turtle.Screen()

def arata(x, y):
    print("Click la:", round(x), round(y))

screen.onscreenclick(arata)

turtle.done()
```

**Ieșire** (în fereastra Thonny, jos), după două click-uri:
```text
Click la: 120 -81
Click la: -200 45
```

La **fiecare click** pe fereastră, Thonny afișează coordonatele locului (numerele tale vor fi altele). Centrul ferestrei este `(0, 0)`. În stânga și jos numerele sunt negative.

Coordonatele click-ului au zecimale (de exemplu `120.4`), de aceea le rotunjim cu `round`.

### Exemplul 4 — Desen liber

```python
import turtle

screen = turtle.Screen()
screen.bgcolor("lightyellow")

t = turtle.Turtle()
t.shape("circle")
t.shapesize(0.6)
t.color("navy")
t.pensize(4)
t.speed(0)

t.ondrag(t.goto)

turtle.done()
```

**Ce vezi pe ecran:** pe fundal galben deschis apare un **cerculeț albastru** (țestoasa). Dacă îl **prinzi cu mouse-ul** (ții apăsat) și îl tragi, el te urmează și desenează o **linie albastră** după mișcarea mouse-ului, ca un creion.

- `ondrag` înseamnă „când tragi țestoasa”;
- `shapesize(0.6)` face forma mai mică (0,6 din mărimea normală).

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 3** (Coordonatele click-ului)  
- [ ] Am scris și am rulat **Exemplul 4** (Desen liber)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 4. Zone de click

Cum aflăm dacă ai dat click într-un anumit loc? Comparăm `x` și `y` cu limitele zonei.

### Exemplul 5 — Stânga sau dreapta

```python
import turtle

screen = turtle.Screen()
screen.setup(600, 500)

t = turtle.Turtle()
t.hideturtle()
t.speed(0)

t.penup()
t.goto(0, -250)
t.pendown()
t.goto(0, 250)
t.penup()

def click(x, y):
    t.goto(x, y)
    if x < 0:
        t.dot(30, "blue")
    else:
        t.dot(30, "red")

screen.onscreenclick(click)

turtle.done()
```

**Ce vezi pe ecran:** o **linie verticală** în mijlocul ferestrei. Click în **stânga** ei pune un punct **albastru**, click în **dreapta** pune un punct **roșu**.

Condiția `x < 0` împarte fereastra în două zone. Alegi zona cu `if` / `else`.

### Exemplul 6 — Paleta de culori

```python
import turtle

screen = turtle.Screen()
screen.setup(600, 500)

culori = ["red", "green", "blue", "gold"]
stare = {"culoare": "red"}

paleta = turtle.Turtle()
paleta.hideturtle()
paleta.speed(0)

for i in range(4):
    paleta.penup()
    paleta.goto(-180 + i * 90, 190)
    paleta.setheading(0)
    paleta.pendown()
    paleta.color("black", culori[i])
    paleta.begin_fill()
    for j in range(4):
        paleta.forward(60)
        paleta.left(90)
    paleta.end_fill()

pensula = turtle.Turtle()
pensula.hideturtle()
pensula.penup()
pensula.speed(0)

def click(x, y):
    if y > 190 and y < 250:
        numar = int((x + 180) // 90)
        if 0 <= numar < 4 and (x + 180) - numar * 90 <= 60:
            stare["culoare"] = culori[numar]
    elif y < 180:
        pensula.goto(x, y)
        pensula.dot(20, stare["culoare"])

screen.onscreenclick(click)

turtle.done()
```

**Ce vezi pe ecran:** sus, o **paletă** cu 4 pătrate: roșu, verde, albastru și auriu. Dacă dai click pe un pătrat, **alegi culoarea**. Dacă dai click mai jos, în restul ferestrei, apare un **punct de culoarea aleasă**. La început culoarea este roșu.

Cum aflăm pe ce pătrat ai dat click: pătratele încep la `x = -180, -90, 0, 90` și au lățimea 60. `(x + 180) // 90` dă numărul pătratului (0, 1, 2, 3), iar `(x + 180) - numar * 90 <= 60` verifică să nu fi dat click în **spațiul dintre** pătrate.

### Exemplul 7 — Contor de click-uri

```python
import turtle

screen = turtle.Screen()
screen.bgcolor("black")

scor = {"click": 0}

disc = turtle.Turtle()
disc.hideturtle()
disc.penup()
disc.goto(0, -100)
disc.pendown()
disc.color("crimson")
disc.begin_fill()
disc.circle(100)
disc.end_fill()

text = turtle.Turtle()
text.hideturtle()
text.penup()
text.color("white")

def scrie():
    text.clear()
    text.goto(0, -25)
    text.write(scor["click"], align="center", font=("Arial", 48, "bold"))

def click(x, y):
    distanta = (x ** 2 + y ** 2) ** 0.5
    if distanta < 100:
        scor["click"] += 1
        scrie()

scrie()
screen.onscreenclick(click)

turtle.done()
```

**Ce vezi pe ecran:** pe fundal negru, un **disc mare roșu** (raza 100), iar în mijloc numărul **0**, alb. La fiecare click **în interiorul** discului numărul crește cu 1. Click-urile din afara lui nu contează.

Formula `(x ** 2 + y ** 2) ** 0.5` este **distanța de la centru** până la punctul `(x, y)` (Pitagora!). Dacă este mai mică decât raza (100), click-ul este în disc. De exemplu, click-ul `(50, 50)` este la distanța 70,7 de centru: în disc. Click-ul `(300, 300)` este departe: în afara discului.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 5** (Stânga sau dreapta)  
- [ ] Am scris și am rulat **Exemplul 6** (Paleta de culori)  
- [ ] Am scris și am rulat **Exemplul 7** (Contor de click-uri)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 5. Mini-proiect

### Exemplul 8 — Paint-ul meu

```python
import turtle

screen = turtle.Screen()
screen.setup(700, 600)
screen.title("Paint-ul meu")

culori = ["black", "red", "orange", "gold", "green", "dodgerblue", "purple"]
stare = {"culoare": "black", "marime": 12}

paleta = turtle.Turtle()
paleta.hideturtle()
paleta.speed(0)

def patrat_culoare(x, y, culoare):
    paleta.penup()
    paleta.goto(x, y)
    paleta.setheading(0)
    paleta.pendown()
    paleta.color("black", culoare)
    paleta.begin_fill()
    for i in range(4):
        paleta.forward(40)
        paleta.left(90)
    paleta.end_fill()

def deseneaza_paleta():
    for i in range(len(culori)):
        patrat_culoare(-190 + i * 55, 250, culori[i])

pensula = turtle.Turtle()
pensula.hideturtle()
pensula.speed(0)
pensula.penup()

def click(x, y):
    if 250 <= y <= 290:
        numar = int((x + 190) // 55)
        if 0 <= numar < len(culori) and (x + 190) - numar * 55 <= 40:
            stare["culoare"] = culori[numar]
    elif y < 240:
        pensula.goto(x, y)
        pensula.dot(stare["marime"], stare["culoare"])

def mai_mare():
    stare["marime"] += 4
    print("Marime:", stare["marime"])

def mai_mic():
    if stare["marime"] > 4:
        stare["marime"] -= 4
    print("Marime:", stare["marime"])

def sterge():
    pensula.clear()

deseneaza_paleta()
print("PAINT-UL MEU")
print("Click pe patrat: alegi culoarea")
print("Click in rest: pui un punct")
print("Sus / Jos: marimea punctului")
print("c: stergi desenul")

screen.listen()
screen.onscreenclick(click)
screen.onkey(mai_mare, "Up")
screen.onkey(mai_mic, "Down")
screen.onkey(sterge, "c")

turtle.done()
```

**Ieșire** (în fereastra Thonny, jos):
```text
PAINT-UL MEU
Click pe patrat: alegi culoarea
Click in rest: pui un punct
Sus / Jos: marimea punctului
c: stergi desenul
```

**Ce vezi pe ecran:** sus, o **paletă cu 7 culori** (negru, roșu, portocaliu, auriu, verde, albastru, mov). Click pe un pătrat alege culoarea, click în restul ferestrei pune un punct de **mărimea 12**. Cu săgețile **sus** și **jos** schimbi mărimea punctului, iar cu **c** ștergi desenul fără să dispară paleta.

De ce avem **două țestoase**? Paleta este desenată de `paleta`, iar punctele de `pensula`. Astfel, `pensula.clear()` șterge **doar** desenul, nu și paleta.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 8** (Paint-ul meu)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## De făcut azi — „Paint-ul meu”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | La click, țestoasa merge la punctul în care ai dat click și lasă un punct colorat |
| **Complet** | Minim + Paint-ul tău: paletă cu 9 culori, o gumă, ștergere, mărimea pensulei din tastatură, titlu și instrucțiuni |

### Pasul 1 — Minim
- [ ] Țestoasa merge la click, ca în Exemplul 1  
- [ ] Pune un punct colorat în fiecare loc în care dai click, ca în Exemplul 2  

### Pasul 2 — Complet
Pornește de la Exemplul 8 și fă Paint-ul **al tău**. Trebuie să ai:
1. **9 culori** în paletă, alese de tine (încap în fereastră: ultimul pătrat se termină la `x = 290`);
2. o **gumă de șters**: un pătrat `"white"` în paletă, care „desenează” cu culoarea fundalului (alb);
3. ștergerea cu **c** și mărimea punctului cu **sus** / **jos**;
4. un titlu pentru fereastră și instrucțiuni în fereastra de text.

**Gata când:**
- [ ] Paint-ul are 9 culori și o gumă  
- [ ] Click pe un pătrat schimbă culoarea, click în rest pune un punct  
- [ ] Mărimea punctului și ștergerea merg din tastatură  
- [ ] Ai explicat pe foaie ce sunt `x` și `y` și cum verifici o zonă  
- [ ] Fișierul se numește `Prenume_Nume_P3_L7.py`  

---

## Bonus ★★★ — Provocare: Paint-ul crește
*Doar dacă ai terminat Complet. Adaugă în **același Paint**, în același program.*

- [ ] Afișează **mărimea pensulei pe ecran**, într-un colț (cu `write`), nu doar în fereastra de text  
- [ ] Fă o tastă `"l"` care comută între **puncte** și **linii**: în modul linii, fiecare click leagă punctul de cel precedent  
- [ ] Fă o tastă `"u"` care **anulează ultimul punct** desenat (indiciu: o listă cu punctele desenate)  
- [ ] Fă o tastă `"f"` care **schimbă fundalul**, pe rând, dintr-o listă de culori deschise  

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| `TypeError: click() takes 0 positional arguments but 2 were given` | Funcția legată de click nu are `x` și `y` | `def click(x, y):` |
| `TypeError: ... missing 2 required positional arguments` | Ai scris `onscreenclick(click())` cu paranteze | `onscreenclick(click)` |
| Țestoasa desenează o linie din centru la primul click | Creionul este jos | `penup()` înainte de primul `goto` |
| Click-ul nu face nimic | Ai legat `t.onclick`, dar ai dat click lângă țestoasă | Dă click chiar pe țestoasă sau folosește `screen.onscreenclick` |
| Zonele de click nu se potrivesc cu desenul | Ai calculat greșit coordonatele | Folosește `print(x, y)` ca să vezi unde dai click |
| Paleta dispare când ștergi | Ai folosit aceeași țestoasă pentru paletă și desen | Folosește două țestoase |
| Punctele sunt prea sus sau prea jos | Axa `y` crește în sus, nu în jos | Sus = valori pozitive pentru `y` |

---

## Recapitulare pe scurt

- `screen.onscreenclick(functia)` apelează funcția la fiecare click, cu `x` și `y`.
- Funcția legată de click trebuie să aibă **doi parametri**.
- `t.ondrag(t.goto)` te lasă să tragi țestoasa; `t.onclick(...)` reacționează doar la click **pe țestoasă**.
- O zonă de click se verifică cu comparații: `if 250 <= y <= 290`.
- Distanța până la un punct: `(x ** 2 + y ** 2) ** 0.5`.
- Cu două țestoase poți șterge desenul fără să ștergi paleta.

---

## Quiz scurt
- Ce face `screen.onscreenclick(functia)`?  
- Câți parametri trebuie să aibă funcția legată de click?  
- Care e diferența dintre `onscreenclick` și `t.onclick`?  
- Cum verifici dacă un click e într-o zonă?  
- De ce folosim două țestoase când ștergem desenul?  

---

## Temă
1. Refă **Exemplele 1–8** în Thonny.  
2. Fă un program care desenează **un cerc la fiecare click**, cu raza aleasă la întâmplare.  
3. Fă un **buton** pătrat verde; când dai click pe el, fundalul se schimbă.  
4. Fă o **țestoasă mare** (`t.shapesize(4)`) care își schimbă culoarea la întâmplare când dai click **pe ea**, cu `t.onclick(...)`.  
5. **Bonus — dreptunghi cu două click-uri.** Primul click marchează un colț, al doilea colțul opus; după al doilea click, programul desenează dreptunghiul dintre cele două puncte. Indiciu: ține într-o listă primul punct.  
6. Pe foaie, răspunde: ce reprezintă `x` și `y` în funcția legată de click? Cum verifici dacă un click este într-un cerc? De ce folosim două țestoase în Paint?  
7. Salvează totul ca `Tema_P3_L7_Prenume_Nume.py`.

### Exemple pentru acasă
Aceste exemple folosesc exact ce ai învățat azi. Scrie-le în Thonny, rulează-le și schimbă-le după preferințe.

#### Acasă 1 — Confetti

```python
import random
import turtle

screen = turtle.Screen()
screen.bgcolor("black")

t = turtle.Turtle()
t.hideturtle()
t.speed(0)
t.penup()

culori = ["red", "orange", "yellow", "lime", "cyan", "magenta", "white"]

def confetti(x, y):
    t.goto(x, y)
    t.dot(random.randint(10, 40), random.choice(culori))

screen.onscreenclick(confetti)

turtle.done()
```

**Ce vezi pe ecran:** pe fundal negru, fiecare click aduce un **punct colorat**, de o culoare și o mărime **alese la întâmplare** (de la 10 la 40).

#### Acasă 2 — Poligonul din click-uri

```python
import turtle

screen = turtle.Screen()

t = turtle.Turtle()
t.color("darkgreen")
t.pensize(3)
t.speed(0)

puncte = []

def click(x, y):
    if len(puncte) == 0:
        t.penup()
    t.goto(x, y)
    t.pendown()
    t.dot(10, "red")
    puncte.append((x, y))

def inchide():
    if len(puncte) > 2:
        t.goto(puncte[0])
        print("Puncte:", len(puncte))

screen.onscreenclick(click)
screen.listen()
screen.onkey(inchide, "space")

turtle.done()
```

**Ieșire** (în fereastra Thonny, jos), după 3 click-uri și o apăsare pe bara de spațiu:
```text
Puncte: 3
```

**Ce vezi pe ecran:** fiecare click pune un **punct roșu** și îl **leagă cu o linie** de cel precedent. Apeși **bara de spațiu** și ultima linie se închide la primul punct, deci cu 3 click-uri obții un **triunghi**.

Lista `puncte` memorează toate punctele (ca perechi `(x, y)`). Primul click ridică creionul, ca să nu apară o linie din centru.

### Încă două exerciții

**Ce se întâmplă?** Gândește-te, apoi verifică în Thonny. Ce culoare are punctul dacă dai click la `(150, 20)`? Dar la `(-120, 0)`? Dar la `(10, 10)`?

```python
import turtle

screen = turtle.Screen()
t = turtle.Turtle()
t.hideturtle()
t.penup()

def click(x, y):
    t.goto(x, y)
    if x > 100 or x < -100:
        t.dot(30, "blue")
    else:
        t.dot(30, "red")

screen.onscreenclick(click)

turtle.done()
```

**Găsește greșelile.** Programul are 3 greșeli. Rescrie-l corect și explică fiecare corecție:

```text
import turtle
screen = turtle.Screen()
t = turtle.Turtle()
def pune(x)
    t.goto(x, y)
    t.dot(20, "red")
screen.onscreenclick(pune())
turtle.done()
```

---

## Răspunsuri la bonus

*Uită-te aici doar după ce ai încercat singur. Există mai multe soluții bune; a ta poate arăta diferit.*

Toate soluțiile pornesc de la Paint-ul din Exemplul 8 și adaugă ceva în același program. Mai jos e **începutul comun**, pe care îl copiezi o singură dată; după el vine fiecare soluție. La final, nu uita `turtle.done()` pe ultimul rând.

```python
import turtle

screen = turtle.Screen()
screen.setup(700, 600)
screen.title("Paint-ul meu")

culori = ["black", "red", "orange", "gold", "green", "dodgerblue", "purple"]
stare = {"culoare": "black", "marime": 12}

paleta = turtle.Turtle()
paleta.hideturtle()
paleta.speed(0)

def patrat_culoare(x, y, culoare):
    paleta.penup()
    paleta.goto(x, y)
    paleta.setheading(0)
    paleta.pendown()
    paleta.color("black", culoare)
    paleta.begin_fill()
    for i in range(4):
        paleta.forward(40)
        paleta.left(90)
    paleta.end_fill()

def deseneaza_paleta():
    for i in range(len(culori)):
        patrat_culoare(-190 + i * 55, 250, culori[i])

pensula = turtle.Turtle()
pensula.hideturtle()
pensula.speed(0)
pensula.penup()

def click(x, y):
    if 250 <= y <= 290:
        numar = int((x + 190) // 55)
        if 0 <= numar < len(culori) and (x + 190) - numar * 55 <= 40:
            stare["culoare"] = culori[numar]
    elif y < 240:
        pensula.goto(x, y)
        pensula.dot(stare["marime"], stare["culoare"])

def mai_mare():
    stare["marime"] += 4

def mai_mic():
    if stare["marime"] > 4:
        stare["marime"] -= 4

def sterge():
    pensula.clear()

deseneaza_paleta()

screen.listen()
screen.onscreenclick(click)
screen.onkey(mai_mare, "Up")
screen.onkey(mai_mic, "Down")
screen.onkey(sterge, "c")
```

### 1. Mărimea pe ecran

Adaugă, după codul de mai sus:

```python
text = turtle.Turtle()
text.hideturtle()
text.penup()
text.speed(0)

def scrie_marime():
    text.clear()
    text.goto(-330, -280)
    text.write("Marime: " + str(stare["marime"]), font=("Arial", 14, "bold"))

def mai_mare_afisat():
    mai_mare()
    scrie_marime()

def mai_mic_afisat():
    mai_mic()
    scrie_marime()

scrie_marime()
screen.onkey(mai_mare_afisat, "Up")
screen.onkey(mai_mic_afisat, "Down")
```

**Ce vezi pe ecran:** în colțul din stânga jos apare textul **„Marime: 12”**. Când apeși **sus** sau **jos**, numărul din text se schimbă odată cu mărimea punctului. A treia țestoasă, `text`, scrie doar textul: așa îl poți șterge cu `text.clear()` fără să atingi desenul sau paleta.

### 2. Puncte sau linii

Adaugă, după codul de mai sus:

```python
stare["linii"] = False
stare["ultim"] = None

def click_nou(x, y):
    if y >= 240:
        click(x, y)
    elif stare["linii"]:
        pensula.color(stare["culoare"])
        pensula.pensize(max(1, stare["marime"] // 3))
        if stare["ultim"] is None:
            pensula.penup()
            pensula.goto(x, y)
            pensula.pendown()
        else:
            pensula.goto(x, y)
        stare["ultim"] = (x, y)
    else:
        click(x, y)

def comuta_linii():
    stare["linii"] = not stare["linii"]
    stare["ultim"] = None
    pensula.penup()

screen.onscreenclick(click_nou)
screen.onkey(comuta_linii, "l")
```

**Ce vezi pe ecran:** la început Paint-ul pune puncte. La tasta **l** trece în modul **linii**: primul click marchează începutul, iar fiecare click următor **trage o linie** de la precedentul. La a doua apăsare pe **l** revii la puncte. Culoarea o poți schimba din paletă și în modul linii. Grosimea liniei este o treime din mărimea punctului.

### 3. Anulează ultimul punct

Adaugă, după codul de mai sus:

```python
stare["istoric"] = []

def click_istoric(x, y):
    if y < 240:
        stare["istoric"].append((x, y, stare["culoare"], stare["marime"]))
    click(x, y)

def anuleaza():
    if len(stare["istoric"]) > 0:
        stare["istoric"].pop()
    pensula.clear()
    for p in stare["istoric"]:
        pensula.goto(p[0], p[1])
        pensula.dot(p[3], p[2])

def sterge_tot():
    stare["istoric"] = []
    pensula.clear()

screen.onscreenclick(click_istoric)
screen.onkey(anuleaza, "u")
screen.onkey(sterge_tot, "c")
```

**Ce vezi pe ecran:** desenezi puncte ca de obicei. La fiecare apăsare pe **u**, **ultimul punct dispare**: programul șterge tot desenul și îl **redesenează** fără ultimul punct, pe baza listei `istoric`. Fiecare element din listă ține minte `(x, y, culoare, mărime)`. Tasta **c** golește și lista, ca `u` să nu readucă punctele șterse.

### 4. Fundal care se schimbă

Adaugă, după codul de mai sus:

```python
fundaluri = ["white", "lightyellow", "lightcyan", "lavender"]
stare["fundal"] = 0

def schimba_fundal():
    stare["fundal"] = (stare["fundal"] + 1) % len(fundaluri)
    screen.bgcolor(fundaluri[stare["fundal"]])

screen.onkey(schimba_fundal, "f")
```

**Ce vezi pe ecran:** la fiecare apăsare pe **f**, fundalul trece la următoarea culoare din listă: alb, galben deschis, albastru deschis, lavandă, apoi de la capăt. Operația `% len(fundaluri)` readuce numărul la 0 după ultima culoare. Desenul și paleta rămân pe loc.

---

## Ce urmează — Lecția 8
**Cursa țestoaselor**: mai multe țestoase aleargă una contra alteia și câștigă una singură.
