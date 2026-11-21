# LECȚIA 6 — Tabla de desen
### Tastatura: țestoasa pilot
**Modulul 3 · Desenăm cu Turtle · 2 ore**  
**Code Maker Club · Turtle Artist**

> Până acum țestoasa făcea exact ce scria în program, de la început până la sfârșit. Azi ea **ascultă de tine**: apeși o săgeată și ea merge, apeși o literă și își schimbă culoarea. Așa începe orice joc: programul așteaptă ce faci tu.  
> Proiect: **„Tabla de desen”** · fișier: `Prenume_Nume_P3_L6.py`

---

## Ce facem azi
La finalul orei legi o tastă de o funcție cu `onkeypress` / `onkey`, miști țestoasa cu săgețile, schimbi culoarea și grosimea cu litere, cobori și ridici creionul din tastatură, faci țestoasa să meargă singură cu un cronometru (`ontimer`) și construiești o tablă de desen. Jocurile și aplicațiile **reacționează la ce faci tu**: apeși, miști mouse-ul, dai click. Acest mod de lucru se numește **programare cu evenimente**: programul spune „când apeși tasta X, execută funcția Y”. Vei folosi aceeași idee în Pygame.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare L5 |
| 10–35 | Prima tastă și cele 4 săgeți (**Exemplele 1–2**) |
| 35–65 | Culori, creion, grosime (**Exemplele 3–5**) |
| 65–80 | Ștergere și întoarcere acasă (**Exemplul 6**) |
| 80–95 | Mișcare automată (**Exemplul 7**) |
| 95–118 | Mini-proiect (**Exemplul 8**) |
| 118–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `screen.listen()` | Ecranul începe să asculte tastatura | `screen.listen()` |
| `screen.onkeypress(functia, "Up")` | Leagă tasta de funcție; se repetă cât ții tasta apăsată | `screen.onkeypress(sus, "Up")` |
| `screen.onkey(functia, "space")` | Funcția rulează o singură dată, când lași tasta | `screen.onkey(sterge, "c")` |
| `t.isdown()` | Răspunde `True` dacă creionul este jos | `if t.isdown():` |
| `t.clear()` · `t.home()` | Șterge desenul · mută țestoasa în centru | `t.clear()` |
| `screen.ontimer(functia, ms)` | Apelează funcția peste `ms` milisecunde | `screen.ontimer(muta, 30)` |

---

## 1. Recapitulare rapidă din L5

- Funcția se definește cu `def` și se apelează cu `nume()`.
- Dicționarul păstrează valori sub un nume: `setari["pas"]`.
- `t.xcor()`, `t.ycor()` dau poziția țestoasei.

**Încearcă tu (3 min)**  
- [ ] Scrie o funcție `salut()` care afișează „Salut!”  

---

## 2. Prima tastă

Ca să reacționăm la o tastă, facem **trei lucruri**:
1. scriem o **funcție** care spune ce se întâmplă (fără parametri);
2. îi spunem ecranului să **asculte** tastatura: `screen.listen()`;
3. **legăm** tasta de funcție: `screen.onkeypress(functia, "Up")`.

### Exemplul 1 — O tastă

```python
import turtle

screen = turtle.Screen()
t = turtle.Turtle()
t.shape("turtle")

def inainte():
    t.forward(20)

screen.listen()
screen.onkeypress(inainte, "Up")

turtle.done()
```

**Ce vezi pe ecran:** o fereastră cu țestoasa. Dacă apeși săgeata **sus**, țestoasa face **un pas** de 20 spre dreapta. Ține tasta apăsată și va merge mai departe.

> **Foarte important:** după `inainte` NU punem paranteze! Scriem `onkeypress(inainte, "Up")`, nu `inainte()`.
>
> Gândește-te la un număr de telefon: **îi dai ecranului numele funcției**, ca un număr de telefon, ca să te sune **mai târziu**, când apeși tasta. Nu o suni tu acum. Dacă scrii `inainte()`, funcția se execută imediat, o singură dată, și tasta nu mai face nimic.
>
> Dacă nu se întâmplă nimic, **dă click o dată pe fereastra de desen**, ca să primească tastatura.

### Exemplul 2 — Cele patru săgeți

```python
import turtle

screen = turtle.Screen()
t = turtle.Turtle()
t.shape("turtle")
t.pensize(3)

def sus():
    t.forward(20)

def jos():
    t.backward(20)

def stanga():
    t.left(30)

def dreapta():
    t.right(30)

screen.listen()
screen.onkeypress(sus, "Up")
screen.onkeypress(jos, "Down")
screen.onkeypress(stanga, "Left")
screen.onkeypress(dreapta, "Right")

turtle.done()
```

**Ce vezi pe ecran:** țestoasa se mișcă cu săgețile și **desenează** pe unde trece:
- **sus** merge înainte, **jos** merge înapoi (în direcția în care privește);
- **stânga** și **dreapta** o rotesc cu 30° (ca o mașină care virează).

Numele tastelor sunt scrise exact așa: `"Up"`, `"Down"`, `"Left"`, `"Right"`, `"space"` (bara de spațiu), iar literele cu litere mici: `"a"`, `"r"`. Atenție la **majuscule**: `"up"` nu funcționează!

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 1** (O tastă)  
- [ ] Am scris și am rulat **Exemplul 2** (Cele patru săgeți)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 3. Culori, creion, grosime

### Exemplul 3 — Culori din taste

```python
import turtle

screen = turtle.Screen()
t = turtle.Turtle()
t.shape("turtle")
t.pensize(4)

def sus():
    t.forward(20)

def stanga():
    t.left(30)

def dreapta():
    t.right(30)

def rosu():
    t.color("red")

def verde():
    t.color("green")

def albastru():
    t.color("blue")

screen.listen()
screen.onkeypress(sus, "Up")
screen.onkeypress(stanga, "Left")
screen.onkeypress(dreapta, "Right")
screen.onkeypress(rosu, "r")
screen.onkeypress(verde, "g")
screen.onkeypress(albastru, "b")

turtle.done()
```

**Ce vezi pe ecran:** conduci țestoasa cu săgețile. Când apeși **r**, linia (și țestoasa) devine roșie, la **g** verde, la **b** albastră.

### Exemplul 4 — Creionul sus sau jos

```python
import turtle

screen = turtle.Screen()
t = turtle.Turtle()
t.shape("turtle")

def sus():
    t.forward(20)

def stanga():
    t.left(30)

def dreapta():
    t.right(30)

def comuta_creion():
    if t.isdown():
        t.penup()
    else:
        t.pendown()

screen.listen()
screen.onkeypress(sus, "Up")
screen.onkeypress(stanga, "Left")
screen.onkeypress(dreapta, "Right")
screen.onkey(comuta_creion, "space")

turtle.done()
```

**Ce vezi pe ecran:** conduci țestoasa, iar la fiecare apăsare pe **bara de spațiu** creionul se **ridică** sau se **coboară**: țestoasa desenează, apoi „sare” fără urmă, apoi desenează iar.

`t.isdown()` răspunde `True` dacă creionul este jos. Așa putem alege între cele două cazuri cu `if`.

Aici am folosit `onkey` (reacționează când **lași** tasta), pentru că vrem **o singură comutare** per apăsare. `onkeypress` reacționează în momentul apăsării și se repetă dacă ții tasta apăsată: bun pentru mișcare.

### Exemplul 5 — Grosimea liniei

```python
import turtle

screen = turtle.Screen()
t = turtle.Turtle()
t.shape("turtle")
t.pensize(2)

setari = {"grosime": 2}

def sus():
    t.forward(20)

def groasa():
    setari["grosime"] += 2
    t.pensize(setari["grosime"])
    print("Grosime:", setari["grosime"])

def subtire():
    if setari["grosime"] > 2:
        setari["grosime"] -= 2
    t.pensize(setari["grosime"])
    print("Grosime:", setari["grosime"])

screen.listen()
screen.onkeypress(sus, "Up")
screen.onkey(groasa, "plus")
screen.onkey(subtire, "minus")

turtle.done()
```

**Ieșire** (în fereastra Thonny, jos), dacă apeși de două ori **+** și apoi o dată **−**:
```text
Grosime: 4
Grosime: 6
Grosime: 4
```

**Ce vezi pe ecran:** țestoasa merge înainte cu săgeata sus. Tasta **+** (`"plus"`) face linia mai groasă, tasta **−** (`"minus"`) o face mai subțire, dar nu mai mult decât grosimea 2.

Valoarea grosimii o păstrăm într-un **dicționar** (`setari`), ca să o putem schimba din mai multe funcții. Dacă tasta **+** nu merge pe tastatura ta, schimbă `"plus"` cu o literă, de exemplu `"m"`.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 3** (Culori din taste)  
- [ ] Am scris și am rulat **Exemplul 4** (Creionul sus sau jos)  
- [ ] Am scris și am rulat **Exemplul 5** (Grosimea liniei)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 4. Ștergere și întoarcere acasă

### Exemplul 6 — Ștergem și ne întoarcem acasă

```python
import turtle

screen = turtle.Screen()
t = turtle.Turtle()
t.shape("turtle")

def sus():
    t.forward(20)

def stanga():
    t.left(30)

def dreapta():
    t.right(30)

def sterge():
    t.clear()

def acasa():
    t.penup()
    t.home()
    t.pendown()

screen.listen()
screen.onkeypress(sus, "Up")
screen.onkeypress(stanga, "Left")
screen.onkeypress(dreapta, "Right")
screen.onkey(sterge, "c")
screen.onkey(acasa, "h")

turtle.done()
```

**Ce vezi pe ecran:** conduci țestoasa și desenezi. La tasta **c** („clear”) desenul **dispare**, dar țestoasa rămâne pe loc. La tasta **h** („home”) ea se întoarce în **centrul** ferestrei, fără să deseneze și privind spre dreapta.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 6** (Ștergem și ne întoarcem acasă)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 5. Mișcare automată

### Exemplul 7 — Țestoasa merge singură

```python
import turtle

screen = turtle.Screen()
screen.setup(600, 600)

t = turtle.Turtle()
t.shape("turtle")
t.color("darkgreen")
t.penup()

def stanga():
    t.left(20)

def dreapta():
    t.right(20)

def muta():
    t.forward(3)
    screen.ontimer(muta, 30)

screen.listen()
screen.onkeypress(stanga, "Left")
screen.onkeypress(dreapta, "Right")
muta()

turtle.done()
```

**Ce vezi pe ecran:** țestoasa **merge singură**, încet, spre dreapta. Cu săgețile **stânga** și **dreapta** o **virezi** ca la volan. Nu mai trebuie să apeși „înainte”.

Cum merge: funcția `muta()` face un pas mic, apoi spune ecranului: `ontimer(muta, 30)`, adică „apelează-mă din nou peste 30 de milisecunde”. Așa se repetă la nesfârșit (aproximativ 33 de pași pe secundă). Este bucla unui joc, făcută cu cronometru. Dacă țestoasa ajunge la marginea ferestrei, iese din ea: o să o oprim în exemplul de acasă.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 7** (Țestoasa merge singură)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 6. Mini-proiect

### Exemplul 8 — Tabla de desen

```python
import turtle

screen = turtle.Screen()
screen.setup(700, 600)
screen.title("Tabla de desen")
screen.bgcolor("white")

t = turtle.Turtle()
t.shape("turtle")
t.pensize(3)

setari = {"grosime": 3}

def sus():
    t.forward(15)

def jos():
    t.backward(15)

def stanga():
    t.left(20)

def dreapta():
    t.right(20)

def culoare(nume):
    t.color(nume)

def rosu():
    culoare("red")

def verde():
    culoare("green")

def albastru():
    culoare("blue")

def negru():
    culoare("black")

def groasa():
    setari["grosime"] += 2
    t.pensize(setari["grosime"])

def subtire():
    if setari["grosime"] > 2:
        setari["grosime"] -= 2
    t.pensize(setari["grosime"])

def comuta_creion():
    if t.isdown():
        t.penup()
    else:
        t.pendown()

def sterge():
    t.clear()

print("TABLA DE DESEN")
print("Sageti: misca testoasa")
print("r g b n: culori")
print("plus / minus: grosime")
print("spatiu: creion sus / jos")
print("c: sterge desenul")

screen.listen()
screen.onkeypress(sus, "Up")
screen.onkeypress(jos, "Down")
screen.onkeypress(stanga, "Left")
screen.onkeypress(dreapta, "Right")
screen.onkey(rosu, "r")
screen.onkey(verde, "g")
screen.onkey(albastru, "b")
screen.onkey(negru, "n")
screen.onkey(groasa, "plus")
screen.onkey(subtire, "minus")
screen.onkey(comuta_creion, "space")
screen.onkey(sterge, "c")

turtle.done()
```

**Ieșire** (în fereastra Thonny, jos):
```text
TABLA DE DESEN
Sageti: misca testoasa
r g b n: culori
plus / minus: grosime
spatiu: creion sus / jos
c: sterge desenul
```

**Ce vezi pe ecran:** o fereastră albă de 700 × 600, cu țestoasa în centru. Cu **săgețile** o conduci, cu **r, g, b, n** schimbi culoarea (roșu, verde, albastru, negru), cu **+** și **−** schimbi grosimea, cu **spațiu** ridici sau cobori creionul, iar cu **c** ștergi desenul. În fereastra de text apar, o dată, instrucțiunile.

Observă funcția `culoare(nume)`: cele patru funcții de culoare o folosesc ca să nu repete codul. Funcțiile legate de taste nu au voie să aibă parametri, de aceea `rosu`, `verde` etc. apelează ele funcția `culoare`.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 8** (Tabla de desen)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## De făcut azi — „Tabla de desen”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Țestoasa se mișcă cu cele 4 săgeți (sus, jos, stânga, dreapta) |
| **Complet** | Minim + Tabla ta de desen: cel puțin 6 culori, grosime, creion sus/jos, ștergere, o tastă pentru cerc sau punct și instrucțiunile în fereastra de text |

### Pasul 1 — Minim
Începe mic și adaugă pe rând:
- [ ] O singură tastă: **sus** merge înainte (Exemplul 1)  
- [ ] Apoi **jos**, **stânga** și **dreapta**, fiecare cu funcția ei (Exemplul 2)  
- [ ] Apeși fiecare săgeată și țestoasa răspunde  

### Pasul 2 — Complet
Pornește de la Exemplul 8 și fă Tabla de desen **a ta**. Adaugă:
1. încă **două culori** (de exemplu galben și mov) pe alte taste;
2. o tastă care **desenează un cerc** în locul în care se află țestoasa: `t.circle(30)`;
3. o tastă care **desenează un punct** colorat: `t.dot(20)`;
4. instrucțiunile corecte la început, în fereastra de text.

**Gata când:**
- [ ] Tabla de desen are săgeți, 6 culori și grosime  
- [ ] Creionul poate fi ridicat și coborât din tastatură  
- [ ] Ai adăugat tastele pentru cerc sau punct  
- [ ] Fiecare funcție legată de o tastă este scrisă **fără paranteze** la `onkeypress` / `onkey`  
- [ ] Fișierul se numește `Prenume_Nume_P3_L6.py`  

---

## Bonus ★★★ — Provocare: Tabla prinde viață
*Doar dacă ai terminat Complet. Adaugă în **aceeași tablă de desen**, în același program.*

- [ ] Fă o tastă `"e"` care desenează o **stea** în locul țestoasei, cu funcția `stea()` din Lecția 5  
- [ ] Fă o tastă `"p"` care **pornește și oprește** mersul singur al țestoasei (cu `ontimer`)  
- [ ] Adaugă o **a doua țestoasă**, roșie, pe care o conduci cu **W, A, S, D**, pe aceeași tablă  
- [ ] Fă o tastă `"x"` care alege o **culoare la întâmplare** dintr-o listă  

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| Nu se întâmplă nimic la apăsare | Lipsește `screen.listen()` sau fereastra nu are „focus” | Adaugă `screen.listen()` și dă click pe fereastră |
| Funcția se execută o singură dată, imediat | Ai scris `onkeypress(sus(), "Up")` cu paranteze | `onkeypress(sus, "Up")` |
| `TypeError: sus() takes 1 positional argument but 0 were given` | Funcția legată de tastă are parametri | Funcțiile legate de taste nu primesc parametri |
| Tasta nu merge | Ai scris `"up"` sau `"Space"` | `"Up"` și `"space"` |
| `NameError: name 'screen' is not defined` | Ai uitat `screen = turtle.Screen()` | Creează ecranul înaintea tastelor |
| Țestoasa face un singur pas, chiar dacă ții tasta apăsată | Ai folosit `onkey`, care reacționează doar la lăsarea tastei | Pentru mișcare continuă folosește `onkeypress` |
| Cronometrul nu repetă | Lipsește `screen.ontimer(...)` în interiorul funcției | `screen.ontimer(muta, 30)` la finalul funcției `muta` |

---

## Recapitulare pe scurt

- Programarea cu evenimente: „când se întâmplă X, execută funcția Y”.
- Pași: scrii funcția (fără parametri), `screen.listen()`, apoi `screen.onkeypress(functia, "Tasta")`.
- Numele funcției se dă **fără paranteze**: ca un număr de telefon, ca să fie apelată mai târziu.
- `onkeypress` reacționează la apăsare (și se repetă), `onkey` la lăsarea tastei.
- Nume de taste: `"Up"`, `"Down"`, `"Left"`, `"Right"`, `"space"`, `"r"`, `"plus"`, `"minus"`.
- `screen.ontimer(functia, ms)` apelează funcția după `ms` milisecunde: așa se face mișcarea automată.

---

## Quiz scurt
- Ce înseamnă programarea cu evenimente?  
- Ce trei pași urmezi ca să legi o tastă de o funcție?  
- De ce numele funcției se scrie fără paranteze?  
- Care e diferența dintre `onkeypress` și `onkey`?  
- La ce folosește `screen.ontimer(functia, ms)`?  

---

## Temă
1. Refă **Exemplele 1–8** în Thonny.  
2. Adaugă la Tabla de desen o tastă care **schimbă forma** țestoasei (`"turtle"`, `"arrow"`, `"circle"`).  
3. Adaugă o tastă `"t"` care face pasul `sus` de **trei ori mai mare**, păstrat într-un dicționar `setari`, și o tastă `"n"` care îl readuce la normal.  
4. Adaugă o tastă care desenează un **pătrat** în locul țestoasei.  
5. **Bonus:** fă un **labirint simplu**: desenează 4 pereți și conduci țestoasa cu săgețile.  
6. Pe foaie, răspunde: de ce nu scriem paranteze după numele funcției în `onkeypress(sus, "Up")`? La ce folosește `screen.listen()`? Ce diferență este între `onkey` și `onkeypress`?  
7. Salvează totul ca `Tema_P3_L6_Prenume_Nume.py`.

### Exemple pentru acasă
Aceste exemple folosesc exact ce ai învățat azi. Scrie-le în Thonny, rulează-le și schimbă-le după preferințe.

#### Acasă 1 — Pereți: țestoasa se întoarce

```python
import turtle

screen = turtle.Screen()
screen.setup(600, 600)
screen.title("Nu iesi din ecran!")

t = turtle.Turtle()
t.shape("turtle")
t.color("darkgreen")
t.penup()

def stanga():
    t.left(20)

def dreapta():
    t.right(20)

def muta():
    t.forward(4)
    if abs(t.xcor()) > 280 or abs(t.ycor()) > 280:
        t.right(180)
    screen.ontimer(muta, 30)

screen.listen()
screen.onkeypress(stanga, "Left")
screen.onkeypress(dreapta, "Right")
muta()

turtle.done()
```

**Ce vezi pe ecran:** ca la Exemplul 7, dar când țestoasa ajunge aproape de marginea ferestrei (la mai mult de 280 de pași de centru pe orizontală sau verticală) **se întoarce înapoi**, ca la un perete. Nu mai poate ieși din ecran!

`abs(...)` este valoarea fără semn: `abs(-300)` este `300`. Așa verificăm cu o singură condiție atât marginea din stânga, cât și pe cea din dreapta.

#### Acasă 2 — Pas mai mare, pas mai mic

```python
import turtle

screen = turtle.Screen()
t = turtle.Turtle()
t.shape("turtle")

setari = {"pas": 10}

def sus():
    t.forward(setari["pas"])

def stanga():
    t.left(30)

def dreapta():
    t.right(30)

def mai_mare():
    setari["pas"] += 5
    print("Pas:", setari["pas"])

def mai_mic():
    if setari["pas"] > 5:
        setari["pas"] -= 5
    print("Pas:", setari["pas"])

screen.listen()
screen.onkeypress(sus, "Up")
screen.onkeypress(stanga, "Left")
screen.onkeypress(dreapta, "Right")
screen.onkey(mai_mare, "f")
screen.onkey(mai_mic, "l")

turtle.done()
```

**Ieșire** (în fereastra Thonny, jos), dacă apeși de două ori **f** și apoi o dată **l**:
```text
Pas: 15
Pas: 20
Pas: 15
```

**Ce vezi pe ecran:** săgeata sus face un pas egal cu `setari["pas"]`, care începe de la 10. Cu **f** pasul crește cu 5, cu **l** scade cu 5, dar niciodată sub 5.

### Încă două exerciții

**Ce se întâmplă?** Gândește-te, apoi verifică în Thonny. Ce face țestoasa dacă apeși de 3 ori **stânga**, apoi o dată **sus**?

```python
import turtle

screen = turtle.Screen()
t = turtle.Turtle()

def stanga():
    t.left(30)

def sus():
    t.forward(50)

screen.listen()
screen.onkeypress(stanga, "Left")
screen.onkeypress(sus, "Up")

turtle.done()
```

**Găsește greșelile.** Programul are 4 greșeli. Rescrie-l corect și explică fiecare corecție:

```text
import turtle
t = turtle.Turtle()
screen = turtle.Screen()
def sus()
    t.forward(20)
screen.onkey(sus(), "up")
turtle.done()
```

---

## Răspunsuri la bonus

*Uită-te aici doar după ce ai încercat singur. Există mai multe soluții bune; a ta poate arăta diferit.*

Toate soluțiile pornesc de la Tabla de desen din Exemplul 8 și adaugă ceva în aceeași tablă. Mai jos e **începutul comun**, pe care îl copiezi o singură dată; după el vine fiecare soluție. La final, nu uita `turtle.done()` pe ultimul rând.

```python
import random
import turtle

screen = turtle.Screen()
screen.setup(700, 600)
screen.title("Tabla de desen")
screen.bgcolor("white")

t = turtle.Turtle()
t.shape("turtle")
t.pensize(3)

setari = {"grosime": 3}

def sus():
    t.forward(15)

def jos():
    t.backward(15)

def stanga():
    t.left(20)

def dreapta():
    t.right(20)

def culoare(nume):
    t.color(nume)

def rosu():
    culoare("red")

def verde():
    culoare("green")

def albastru():
    culoare("blue")

def negru():
    culoare("black")

def groasa():
    setari["grosime"] += 2
    t.pensize(setari["grosime"])

def subtire():
    if setari["grosime"] > 2:
        setari["grosime"] -= 2
    t.pensize(setari["grosime"])

def comuta_creion():
    if t.isdown():
        t.penup()
    else:
        t.pendown()

def sterge():
    t.clear()

screen.listen()
screen.onkeypress(sus, "Up")
screen.onkeypress(jos, "Down")
screen.onkeypress(stanga, "Left")
screen.onkeypress(dreapta, "Right")
screen.onkey(rosu, "r")
screen.onkey(verde, "g")
screen.onkey(albastru, "b")
screen.onkey(negru, "n")
screen.onkey(groasa, "plus")
screen.onkey(subtire, "minus")
screen.onkey(comuta_creion, "space")
screen.onkey(sterge, "c")
```

### 1. Steaua

Adaugă, după codul de mai sus:

```python
def stea():
    era_jos = t.isdown()
    t.pendown()
    for i in range(5):
        t.forward(60)
        t.right(144)
    if not era_jos:
        t.penup()

screen.onkey(stea, "e")
```

**Ce vezi pe ecran:** la tasta **e**, țestoasa desenează o **stea cu 5 colțuri** (latura 60), în culoarea și grosimea de la momentul respectiv. Funcția își aduce singură creionul jos, ca să se vadă steaua, apoi îl pune la loc dacă era sus. După cele 5 laturi, țestoasa revine în același loc și privește în aceeași direcție.

### 2. Pornește și oprește

Adaugă, după codul de mai sus:

```python
setari["merge"] = False

def muta():
    if setari["merge"]:
        t.forward(3)
    screen.ontimer(muta, 30)

def porneste_opreste():
    setari["merge"] = not setari["merge"]

screen.onkey(porneste_opreste, "p")
muta()
```

**Ce vezi pe ecran:** la început țestoasa stă pe loc. La tasta **p** începe să **meargă singură**, iar la a doua apăsare pe **p** se oprește. Cronometrul `ontimer` pornește o singură dată, iar funcția `muta` verifică de fiecare dată dacă `setari["merge"]` este `True`. Săgețile merg în continuare, deci poți vira.

### 3. A doua țestoasă

Adaugă, după codul de mai sus:

```python
t2 = turtle.Turtle()
t2.shape("turtle")
t2.color("red")
t2.pensize(3)
t2.penup()
t2.goto(-200, 0)
t2.pendown()

def w_sus():
    t2.forward(15)

def s_jos():
    t2.backward(15)

def a_stanga():
    t2.left(20)

def d_dreapta():
    t2.right(20)

screen.onkeypress(w_sus, "w")
screen.onkeypress(s_jos, "s")
screen.onkeypress(a_stanga, "a")
screen.onkeypress(d_dreapta, "d")
```

**Ce vezi pe ecran:** pe tablă apar **două țestoase**: cea originală, pe care o conduci cu săgețile, și una **roșie**, plecată din stânga (`x = -200`), pe care o conduci cu **W, A, S, D**. Fiecare își desenează propria linie. Funcțiile au nume diferite (`w_sus`, `s_jos`...), pentru că `sus` și `jos` aparțin deja primei țestoase.

### 4. Culoare la întâmplare

Adaugă, după codul de mai sus:

```python
def culoare_la_intamplare():
    lista = ["red", "orange", "gold", "green", "blue", "purple", "hotpink"]
    culoare(random.choice(lista))

screen.onkey(culoare_la_intamplare, "x")
```

**Ce vezi pe ecran:** la fiecare apăsare pe **x**, linia primește o culoare **la întâmplare** din listă. Funcția refolosește funcția `culoare(nume)` din tablă și `random.choice` din Modulul 1.

---

## Ce urmează — Lecția 7
**Mouse: click și desenezi**: ecranul reacționează la click și la mișcarea mouse-ului.
