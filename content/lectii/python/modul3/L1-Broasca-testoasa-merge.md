# LECȚIA 1 — Scara țestoasei
### Turtle: forward, left și for
**Modulul 3 · Desenăm cu Turtle · 2 ore**  
**Code Maker Club · Turtle Artist**

> Până acum programele tale scriau text. Azi ele **desenează**! În Python există o „broască țestoasă” care merge pe ecran și lasă o urmă în spatele ei. Tu îi dai comenzi, iar ea desenează.  
> Proiect: **„Scara țestoasei”** · fișier: `Prenume_Nume_P3_L1.py`

---

## Ce facem azi
La finalul orei pornești o fereastră Turtle, miști țestoasa cu `forward`, `backward`, `left` și `right`, desenezi un pătrat cu `for`, ridici și cobori creionul și muți țestoasa cu `goto`. Desenul este cea mai bună metodă să **vezi** ce face un program: dacă ceva nu merge, vezi imediat unde a greșit țestoasa. Desenele de azi sunt baza pentru jocurile din ultimele lecții ale modulului.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare Modulul 2 |
| 10–30 | Prima fereastră și comenzile de mișcare (**Exemplele 1–2**) |
| 30–55 | Unghiuri și pătratul (**Exemplele 3–4**) |
| 55–75 | Formă, viteză și creion (**Exemplele 5–6**) |
| 75–90 | Unde este țestoasa? Text pe ecran (**Exemplul 7**) |
| 90–115 | Mini-proiect (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `import turtle` | Aduce uneltele de desen | `t = turtle.Turtle()` |
| `t.forward(n)` · `t.left(g)` | Merge înainte · se rotește la stânga | `t.forward(100)` |
| `t.penup()` · `t.goto(x, y)` · `t.pendown()` | Mută țestoasa fără să deseneze | `t.goto(-100, 50)` |
| `t.write("text")` | Scrie text pe ecran | `t.write("Salut!")` |
| `turtle.done()` | Ține fereastra deschisă | ultima linie din program |

---

## 1. Recapitulare rapidă din Modulul 2

- Bucla `for i in range(n)` repetă de `n` ori.
- O funcție se definește cu `def` și se apelează cu `nume()`.
- Indentarea (4 spații) arată ce face parte din buclă.

**Încearcă tu (3 min)**  
- [ ] Scrie o buclă care afișează „Salut!” de 3 ori  

---

## 2. Prima fereastră

Pentru desen folosim un **modul** al lui Python, numit `turtle`. Un modul este o cutie cu unelte pregătite.

> **Atenție:** nu salva niciodată fișierul cu numele `turtle.py`! Python ar încerca să se importe pe el însuși și ar da eroare. Folosește numele din lecție, de exemplu `Ion_Popescu_P3_L1.py`.

### Exemplul 1 — Fereastra și o linie

```python
import turtle

t = turtle.Turtle()
t.forward(100)

turtle.done()
```

**Ce vezi pe ecran:**
- se deschide o fereastră cu fundal alb;
- o săgeată (țestoasa) pornește din centru și se mută **spre dreapta**;
- în urma ei rămâne o linie neagră lungă de 100 de pași.

Rând cu rând:
- `import turtle` aduce uneltele de desen;
- `t = turtle.Turtle()` creează o țestoasă și o numește `t`;
- `t.forward(100)` o face să meargă 100 de pași înainte;
- `turtle.done()` ține fereastra deschisă. Fără ea, fereastra s-ar închide imediat.

### Exemplul 2 — Înainte, înapoi, stânga, dreapta

```python
import turtle

t = turtle.Turtle()
t.forward(100)
t.left(90)
t.forward(100)
t.backward(50)

turtle.done()
```

**Ce vezi pe ecran:**
- o linie spre dreapta, lungă de 100;
- țestoasa se întoarce spre **în sus** și desenează o linie de 100 în sus;
- apoi merge **înapoi** 50 de pași, deci o parte din linia verticală se desenează de două ori (nu se observă diferența).

Comenzile sunt:

| Comandă | Ce face |
|---------|---------|
| `forward(n)` | merge `n` pași înainte |
| `backward(n)` | merge `n` pași înapoi |
| `left(g)` | se rotește la stânga cu `g` grade |
| `right(g)` | se rotește la dreapta cu `g` grade |

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 1** (Fereastra și o linie)  
- [ ] Am scris și am rulat **Exemplul 2** (Înainte, înapoi, stânga, dreapta)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 3. Unghiuri și pătratul

Un cerc complet are **360 de grade**. Un colț „drept” (ca la un caiet) are **90 de grade**.

### Exemplul 3 — `left` și `right`

```python
import turtle

t = turtle.Turtle()
t.forward(80)
t.left(90)
t.forward(80)
t.right(90)
t.forward(80)

turtle.done()
```

**Ce vezi pe ecran:** o formă de „scară” cu o treaptă: spre dreapta 80, în sus 80, din nou spre dreapta 80.

`left` o întoarce spre stânga, `right` spre dreapta. După fiecare rotire, `forward` merge în **noua** direcție.

### Exemplul 4 — Pătratul cu `for`

Pătratul are 4 laturi egale și 4 rotiri de 90°. „Cu mâna” ar însemna 8 linii de cod:

```text
t.forward(100)
t.left(90)
(...și tot așa, de 4 ori)
```

Cu `for`, aceleași două comenzi se repetă de 4 ori și ajung doar 3 linii:

```python
import turtle

t = turtle.Turtle()
for i in range(4):
    t.forward(100)
    t.left(90)

turtle.done()
```

**Ce vezi pe ecran:** un pătrat cu latura de 100. Țestoasa se întoarce la punctul de plecare și privește din nou spre dreapta. Ai învățat în Modulul 2 că `for` repetă instrucțiunile: acum le folosești la desen.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 3** (`left` și `right`)  
- [ ] Am scris și am rulat **Exemplul 4** (Pătratul cu `for`)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 4. Formă, viteză și creion

### Exemplul 5 — Țestoasă adevărată și viteză

```python
import turtle

t = turtle.Turtle()
t.shape("turtle")
t.speed(1)
for i in range(4):
    t.forward(100)
    t.left(90)

turtle.done()
```

**Ce vezi pe ecran:** în loc de săgeată apare o **mică țestoasă**, iar pătratul se desenează **foarte încet**.

| Comandă | Ce face |
|---------|---------|
| `shape("turtle")` | schimbă forma: `"arrow"`, `"turtle"`, `"circle"`, `"square"`, `"triangle"` |
| `speed(n)` | viteza, de la `1` (lent) la `10` (rapid); `0` = cel mai rapid |

### Exemplul 6 — Ridicăm creionul

```python
import turtle

t = turtle.Turtle()
t.forward(100)
t.penup()
t.goto(-100, 50)
t.pendown()
t.forward(100)

turtle.done()
```

**Ce vezi pe ecran:** **două linii separate**. Prima merge de la centru spre dreapta. A doua este puțin mai sus și mai la stânga, de la `(-100, 50)` până în centrul de sus. Țestoasa a „sărit” fără să deseneze.

- `penup()` ridică creionul: de acum **nu mai desenează**;
- `goto(x, y)` mută țestoasa direct în punctul `(x, y)`;
- `pendown()` coboară creionul.

Fereastra are un sistem de coordonate: centrul este `(0, 0)`. `x` crește spre **dreapta**, `y` crește în **sus**. Deci `(-100, 50)` este la stânga și deasupra centrului.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 5** (Țestoasă adevărată și viteză)  
- [ ] Am scris și am rulat **Exemplul 6** (Ridicăm creionul)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 5. Unde este țestoasa?

### Exemplul 7 — Poziția, direcția și textul

```python
import turtle

t = turtle.Turtle()
print("Start:", t.xcor(), t.ycor(), t.heading())
t.forward(100)
t.left(90)
t.forward(50)
print("Acum:", round(t.xcor()), round(t.ycor()), round(t.heading()))

t.penup()
t.goto(-100, -60)
t.write("Salut, Turtle!", font=("Arial", 24, "bold"))
t.hideturtle()

turtle.done()
```

**Ieșire** (în fereastra Thonny, jos):
```text
Start: 0.0 0.0 0.0
Acum: 100 50 90
```

**Ce vezi pe ecran:** o linie spre dreapta și apoi în sus, iar sub ea textul **Salut, Turtle!** scris îngroșat. Țestoasa este ascunsă.

- `xcor()` și `ycor()` dau poziția, iar `heading()` dă direcția în grade: `0` = spre dreapta, `90` = în sus, `180` = spre stânga, `270` = în jos. Folosim `round(...)` ca să scăpăm de zecimalele foarte mici care pot apărea la calcule.
- `write("text", font=(nume, mărime, stil))` scrie pe ecran.
- `hideturtle()` ascunde țestoasa (`showturtle()` o arată din nou).

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 7** (Poziția, direcția și textul)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 6. Mini-proiect

### Exemplul 8 — Scara țestoasei

```python
import turtle

t = turtle.Turtle()
t.shape("turtle")
t.speed(3)

t.penup()
t.goto(-120, -100)
t.pendown()

for treapta in range(5):
    t.forward(40)
    t.left(90)
    t.forward(40)
    t.right(90)

turtle.done()
```

**Ce vezi pe ecran:** o **scară cu 5 trepte**, care urcă spre dreapta. Fiecare treaptă înseamnă: 40 spre dreapta, 40 în sus, apoi țestoasa se îndreaptă din nou spre dreapta. Scara începe jos, în partea stângă a ferestrei.

Începem cu `penup()` și `goto`, ca desenul să nu pornească din centru. Treapta se repetă de 5 ori cu `for`.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 8** (Scara țestoasei)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## De făcut azi — „Scara țestoasei”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | O fereastră Turtle cu un pătrat desenat cu `for` |
| **Complet** | Minim + o scară cu cel puțin 6 trepte, încă o formă desenată în alt loc (cu `penup`, `goto`, `pendown`) și numele tău scris pe ecran |

### Pasul 1 — Minim
- [ ] O fereastră Turtle cu un pătrat desenat cu `for`  

### Pasul 2 — Complet
Scrie un program care:
1. desenează o scară cu **cel puțin 6 trepte**, cu altă mărime decât în exemplu;
2. mută țestoasa cu `penup`, `goto`, `pendown` și desenează **încă o formă** lângă scară (un pătrat sau o linie);
3. scrie pe ecran numele tău cu `write`.

**Gata când:**
- [ ] Scara are cel puțin 6 trepte  
- [ ] A doua formă e desenată în alt loc, fără o linie nedorită până la ea  
- [ ] Numele tău e scris pe ecran  
- [ ] Ai testat programul cu 3 mărimi diferite pentru trepte  
- [ ] Fișierul se numește `Prenume_Nume_P3_L1.py` (nu `turtle.py`)  

---

## Bonus ★★★ — Provocare: Scara cu steag
*Doar dacă ai terminat Complet. Pornești de la scara ta din Exemplul 8 și o completezi, în același program.*

- [ ] Pune un **steag** în vârful scării: un băț în sus și un dreptunghi la capătul lui  
- [ ] Desenează **soarele**: un punct galben mare, cu 8 raze în jur  
- [ ] **Numerotează treptele** (1, 2, 3...) cu `write`, în buclă  
- [ ] Desenează o **a doua scară**, mai mică, cu 3 trepte, în partea dreaptă a ferestrei  


---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| Fereastra se închide imediat | Lipsește `turtle.done()` la final | Adaugă `turtle.done()` pe ultimul rând |
| `AttributeError: partially initialized module 'turtle'` | Fișierul tău se numește `turtle.py` | Redenumește fișierul |
| `NameError: name 'turtle' is not defined` | Lipsește `import turtle` sau l-ai scris cu majusculă | `import turtle` (litere mici) |
| `AttributeError: 'Turtle' object has no attribute 'Forward'` | Ai scris comanda cu majusculă | `t.forward(...)` |
| Țestoasa desenează o linie nedorită spre un punct | Ai folosit `goto` cu creionul jos | `penup()` înainte de `goto` |
| Pătratul nu se închide | Unghiul nu este 90 sau nu s-a repetat de 4 ori | `for i in range(4)` și `left(90)` |
| Ai instrucțiuni după `turtle.done()` și nu se execută | `done()` așteaptă închiderea ferestrei | Pune `done()` ultima |

---

## Recapitulare pe scurt

- `import turtle` și `t = turtle.Turtle()` creează țestoasa.
- `forward`, `backward`, `left`, `right` o mișcă și o rotesc.
- `for` repetă desenul: pătratul are 4 laturi și rotiri de 90°.
- `penup()`, `goto(x, y)`, `pendown()` mută țestoasa fără să deseneze.
- `xcor()`, `ycor()`, `heading()` spun unde este și încotro privește.
- `write(...)` scrie text; `turtle.done()` ține fereastra deschisă.

---

## Quiz scurt
- Cum creezi o țestoasă în Python?  
- Care sunt cele patru comenzi de mișcare și rotire?  
- Câte laturi și ce rotire are un pătrat?  
- Cum muți țestoasa fără să deseneze?  
- La ce folosește `turtle.done()`?  

---

## Temă
1. Refă **Exemplele 1–8** în Thonny, scrise de mână.  
2. Desenează o **scară care coboară** în loc să urce.  
3. Desenează **trei pătrate** puse unul lângă altul (mută țestoasa între ele).  
4. **Bonus:** desenează un pătrat în care fiecare latură are altă lungime, cu `for` și lista `[50, 80, 110, 140]`.  
5. **Triunghiul.** Desenează un **triunghi** cu laturile egale. Indiciu: pătratul se rotește cu 90° (`360 / 4`). Câte grade se rotește triunghiul, la `360 / 3`?  
6. Salvează totul ca `Tema_P3_L1_Prenume_Nume.py`.

### Exemple pentru acasă
Aceste exemple folosesc exact ce ai învățat azi. Scrie-le în Thonny, rulează-le și schimbă-le după preferințe.

#### Acasă 1 — Triunghiul

```python
import turtle

t = turtle.Turtle()
for i in range(3):
    t.forward(120)
    t.left(120)

turtle.done()
```

**Ce vezi pe ecran:** un **triunghi** cu laturile egale. Ca să se închidă, țestoasa se rotește de trei ori câte `120` de grade (`3 × 120 = 360`).

#### Acasă 2 — Linia punctată

```python
import turtle

t = turtle.Turtle()
t.penup()
t.goto(-150, 0)
t.pendown()
for i in range(10):
    t.forward(15)
    t.penup()
    t.forward(15)
    t.pendown()

turtle.done()
```

**Ce vezi pe ecran:** o **linie punctată** de la stânga spre dreapta: 15 pași desenați, 15 pași săriți, de 10 ori. Țestoasa folosește `penup` și `pendown` în interiorul buclei.

### Încă două exerciții

**Ce desenează?** Gândește-te, apoi verifică în Thonny:

```python
import turtle

t = turtle.Turtle()
t.forward(100)
t.left(90)
t.forward(100)
t.left(90)
t.forward(50)

turtle.done()
```

**Găsește greșelile.** Programul are 4 greșeli. Rescrie-l corect și explică fiecare corecție:

```text
import Turtle
t = turtle.Turtle()
t.forward(100
t.left(90)
t.Forward(50)
turtle.done
```

---

## Răspunsuri la bonus

*Uită-te aici doar după ce ai încercat singur. Există mai multe soluții bune; a ta poate arăta diferit.*

### 1. Steagul

```python
import turtle

t = turtle.Turtle()
t.speed(3)
t.penup()
t.goto(-120, -100)
t.pendown()

for treapta in range(5):
    t.forward(40)
    t.left(90)
    t.forward(40)
    t.right(90)

# bățul steagului
t.left(90)
t.forward(50)
t.right(90)

# panza steagului: un dreptunghi
t.forward(25)
t.right(90)
t.forward(15)
t.right(90)
t.forward(25)

turtle.done()
```

**Ce vezi pe ecran:** scara de 5 trepte, iar în vârf un **steag**: un băț de 50 și un dreptunghi de 25 pe 15 agățat de capătul lui.

### 2. Soarele

```python
import turtle

t = turtle.Turtle()
t.speed(0)
t.penup()
t.goto(130, 130)
t.dot(50, "gold")

for i in range(8):
    t.forward(35)
    t.pendown()
    t.forward(20)
    t.penup()
    t.backward(55)
    t.left(45)

turtle.done()
```

**Ce vezi pe ecran:** un **soare** galben cu 8 raze negre. Fiecare rază începe la 35 de pași de centru și are 20 de pași. Țestoasa se întoarce în centru și se rotește cu `45` de grade (`360 / 8`).

### 3. Treptele numerotate

```python
import turtle

t = turtle.Turtle()
t.speed(3)
t.penup()
t.goto(-120, -100)
t.pendown()

for treapta in range(5):
    t.forward(40)
    t.write(treapta + 1, font=("Arial", 14, "normal"))
    t.left(90)
    t.forward(40)
    t.right(90)

turtle.done()
```

**Ce vezi pe ecran:** scara, cu numerele **1, 2, 3, 4, 5** scrise la capătul fiecărei trepte. Variabila `treapta` pornește de la `0`, de aceea scriem `treapta + 1`.

### 4. A doua scară, mai mică

```python
import turtle

t = turtle.Turtle()
t.speed(3)

# scara mare
t.penup()
t.goto(-120, -100)
t.pendown()
for treapta in range(5):
    t.forward(40)
    t.left(90)
    t.forward(40)
    t.right(90)

# scara mică, în dreapta
t.penup()
t.goto(110, -100)
t.pendown()
for treapta in range(3):
    t.forward(20)
    t.left(90)
    t.forward(20)
    t.right(90)

turtle.done()
```

**Ce vezi pe ecran:** scara mare din stânga și, în dreapta, o **scară mică** de 3 trepte, cu treptele de 20. Țestoasa se mută între ele cu `penup`, `goto` și `pendown`.

---

## Ce urmează — Lecția 2
**Forme și culori**: triunghiuri, cercuri, culori și umplerea formelor.
