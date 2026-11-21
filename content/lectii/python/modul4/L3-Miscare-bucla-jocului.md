# LECȚIA 3 — Mingile care ricoșează
### Mișcare: bucla jocului
**Modulul 4 · Jocuri cu Pygame · 2 ore**  
**Code Maker Club · Game Creator**

> Ecranul tău este ca un **film**: de 60 de ori pe secundă desenezi aceeași scenă, cu obiectele puțin mutate. Dacă mutarea este mică, ochiul vede **mișcare**. Azi punem lucrurile în mișcare: mingi care ricoșează, care cad, care lasă urme, iar la final construim un **screensaver**.  
> Proiect: **„Mingile care ricoșează”** · fișier: `Prenume_Nume_P4_L3.py`

---

## Ce facem azi

La final miști obiecte schimbând `x` și `y` la fiecare cadru, le faci să ricoșeze, să cadă (gravitație) și să lase o urmă, iar mai multe mingi le ții într-o listă.

Toate jocurile se mișcă: personajele aleargă, gloanțele zboară, mașinile circulă. Ceea ce înveți azi (poziție, viteză, ricoșeu) este **baza** pentru orice joc. Ecranul tău este ca un **film**: de 60 de ori pe secundă desenezi aceeași scenă, cu obiectele puțin mutate, iar ochiul vede mișcare.

La final ai **„Mingile care ricoșează”**: un screensaver cu mingi, urme și taste.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare L2 |
| 10–30 | Prima mișcare (**Exemplul 1**) |
| 30–55 | Ricoșeul: pe o direcție, apoi diagonal (**Exemplele 2–3**) |
| 55–70 | Mingea cu imagine, mai multe mingi (**Exemplele 4–5**) |
| 70–90 | Urme și gravitație (**Exemplele 6–7**) |
| 90–118 | Mini-proiect: Mingile care ricoșează (**Exemplul 8**) |
| 118–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `x += viteza` | Mută obiectul la fiecare cadru | `x += 3` |
| `viteza = -viteza` | Schimbă direcția la margine (ricoșeu) | `if x + 50 > LATIME: viteza = -abs(viteza)` |
| `imagine.get_rect()` | Dreptunghiul imaginii; îl folosim ca poziție | `pozitie = imagine.get_rect()` |
| `mingi = []` + `for m in mingi:` | O listă de dicționare: mai multe mingi | `mingi.append(mingea_noua())` |
| `voal.set_alpha(40)` | Un strat semitransparent, pentru urme | `ecran.blit(voal, (0, 0))` |
| `viteza += gravitatie` | Gravitația: viteza crește la fiecare cadru | `y += viteza` |
| `random.randint(a, b)` / `random.choice(lista)` | Valori alese la întâmplare | `random.choice([-4, 4])` |

---

## 1. Recapitulare rapidă din L2

- Desenăm cu `pygame.draw.rect`, `circle`, `line`, `polygon`.
- `Rect` păstrează un dreptunghi: `left`, `right`, `top`, `bottom`, `center`.
- Ce desenăm mai târziu se vede peste ce am desenat mai devreme.

---

## 2. Prima mișcare

Ideea este simplă: poziția obiectului este în **variabile** (`x`, `y`). La fiecare cadru le **schimbăm puțin** și apoi desenăm obiectul în noul loc.

### Exemplul 1 — Pătratul care aleargă

```python
import pygame

pygame.init()
ecran = pygame.display.set_mode((600, 300))
pygame.display.set_caption("Miscare")
ceas = pygame.time.Clock()

x = 0
y = 125

ruleaza = True
while ruleaza:
    for eveniment in pygame.event.get():
        if eveniment.type == pygame.QUIT:
            ruleaza = False

    x += 3

    ecran.fill((30, 30, 60))
    pygame.draw.rect(ecran, (255, 200, 0), (x, y, 50, 50))
    pygame.display.flip()
    ceas.tick(60)

pygame.quit()
```

**Ce vezi pe ecran:** un **pătrat galben** de 50 × 50 care pornește din stânga ferestrei și **alunecă spre dreapta**, cu 3 pixeli la fiecare cadru (adică 3 × 60 = **180 de pixeli pe secundă**). După câteva secunde iese din ecran și nu se mai vede.

Bucla are acum **trei părți**, în această ordine:
1. **evenimente** (citim tastatura, mouse-ul);
2. **actualizare** (schimbăm variabilele: `x += 3`);
3. **desenare** (`fill`, desenăm obiectele, `flip`).

Notează: la fiecare cadru **ștergem tot** cu `fill` și **redesenăm** obiectul în poziția nouă.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 1** (Pătratul care aleargă)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 3. Ricoșeul

### Exemplul 2 — Ricoșează pe orizontală

```python
import pygame

pygame.init()
LATIME = 600
ecran = pygame.display.set_mode((LATIME, 300))
ceas = pygame.time.Clock()

x = 100
y = 125
viteza = 5

ruleaza = True
while ruleaza:
    for eveniment in pygame.event.get():
        if eveniment.type == pygame.QUIT:
            ruleaza = False

    x += viteza
    if x < 0:
        x = 0
        viteza = abs(viteza)
    if x + 50 > LATIME:
        x = LATIME - 50
        viteza = -abs(viteza)

    ecran.fill((30, 30, 60))
    pygame.draw.rect(ecran, (255, 120, 0), (x, y, 50, 50))
    pygame.display.flip()
    ceas.tick(60)

pygame.quit()
```

**Ce vezi pe ecran:** un **pătrat portocaliu** care merge spre dreapta, **lovește marginea**, se întoarce, lovește marginea din stânga și tot așa, la nesfârșit.

- „Viteza” poate fi **pozitivă** (spre dreapta) sau **negativă** (spre stânga);
- la margine **schimbăm semnul** vitezei;
- scriem `viteza = abs(viteza)` (mereu pozitivă) la peretele din stânga și `viteza = -abs(viteza)` (mereu negativă) la cel din dreapta. Așa evităm ca obiectul să rămână „lipit” de perete;
- partea **dreaptă** a pătratului este `x + 50` (poziția + lățimea).

### Exemplul 3 — Ricoșează pe diagonală

```python
import pygame

pygame.init()
LATIME = 600
INALTIME = 400
ecran = pygame.display.set_mode((LATIME, INALTIME))
ceas = pygame.time.Clock()

minge = pygame.Rect(100, 100, 40, 40)
vx = 4
vy = 3

ruleaza = True
while ruleaza:
    for eveniment in pygame.event.get():
        if eveniment.type == pygame.QUIT:
            ruleaza = False

    minge.x += vx
    minge.y += vy

    if minge.left < 0:
        minge.left = 0
        vx = abs(vx)
    if minge.right > LATIME:
        minge.right = LATIME
        vx = -abs(vx)
    if minge.top < 0:
        minge.top = 0
        vy = abs(vy)
    if minge.bottom > INALTIME:
        minge.bottom = INALTIME
        vy = -abs(vy)

    ecran.fill((10, 10, 40))
    pygame.draw.ellipse(ecran, (255, 80, 80), minge)
    pygame.display.flip()
    ceas.tick(60)

pygame.quit()
```

**Ce vezi pe ecran:** o **minge roșie** care se deplasează pe diagonală (4 pixeli spre dreapta și 3 în jos la fiecare cadru) și **ricoșează de toate cele patru margini**, ca la biliard.

Aici folosim un `Rect` pentru minge: `minge.left`, `minge.right`, `minge.top`, `minge.bottom` ne dau marginile, iar `minge.x += vx` o mută. Sunt **două viteze**: `vx` pe orizontală, `vy` pe verticală. La un perete vertical se schimbă semnul lui `vx`, la unul orizontal semnul lui `vy`. `pygame.draw.ellipse(ecran, culoare, rect)` desenează o elipsă în interiorul dreptunghiului: pentru un dreptunghi pătrat, rezultă un **cerc**.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 2** (Ricoșează pe orizontală)  
- [ ] Am scris și am rulat **Exemplul 3** (Ricoșează pe diagonală)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 4. Imagini și mai multe obiecte

### Exemplul 4 — Mingea ca imagine

```python
import pygame

pygame.init()
LATIME = 600
INALTIME = 400
ecran = pygame.display.set_mode((LATIME, INALTIME))
ceas = pygame.time.Clock()

imagine = pygame.Surface((60, 60), pygame.SRCALPHA)
pygame.draw.circle(imagine, (0, 160, 255), (30, 30), 28)
pygame.draw.circle(imagine, (255, 255, 255), (22, 22), 8)

pozitie = imagine.get_rect()
pozitie.topleft = (50, 50)
vx = 5
vy = 4

ruleaza = True
while ruleaza:
    for eveniment in pygame.event.get():
        if eveniment.type == pygame.QUIT:
            ruleaza = False

    pozitie.x += vx
    pozitie.y += vy
    if pozitie.left < 0 or pozitie.right > LATIME:
        vx = -vx
    if pozitie.top < 0 or pozitie.bottom > INALTIME:
        vy = -vy

    ecran.fill((255, 245, 200))
    ecran.blit(imagine, pozitie)
    pygame.display.flip()
    ceas.tick(60)

pygame.quit()
```

**Ce vezi pe ecran:** pe fundal crem, o **minge albastră** cu o mică „reflexie” albă, care ricoșează prin fereastră.

Observă `imagine.get_rect()`: ne dă **dreptunghiul imaginii** (cu aceeași mărime). Îl folosim și pentru poziție, și la desenare: `ecran.blit(imagine, pozitie)`. Așa avem **un singur obiect** (`pozitie`) care ne spune unde este mingea.

### Exemplul 5 — Mai multe mingi

```python
import random
import pygame

pygame.init()
LATIME = 600
INALTIME = 400
ecran = pygame.display.set_mode((LATIME, INALTIME))
ceas = pygame.time.Clock()

mingi = []
for i in range(8):
    minge = {
        "x": random.randint(50, 550),
        "y": random.randint(50, 350),
        "vx": random.choice([-4, -3, 3, 4]),
        "vy": random.choice([-4, -3, 3, 4]),
        "r": random.randint(10, 25),
        "culoare": (random.randint(80, 255), random.randint(80, 255), random.randint(80, 255)),
    }
    mingi.append(minge)

print("Mingi create:", len(mingi))

ruleaza = True
while ruleaza:
    for eveniment in pygame.event.get():
        if eveniment.type == pygame.QUIT:
            ruleaza = False

    ecran.fill((15, 15, 35))
    for m in mingi:
        m["x"] += m["vx"]
        m["y"] += m["vy"]
        if m["x"] - m["r"] < 0:
            m["x"] = m["r"]
            m["vx"] = abs(m["vx"])
        if m["x"] + m["r"] > LATIME:
            m["x"] = LATIME - m["r"]
            m["vx"] = -abs(m["vx"])
        if m["y"] - m["r"] < 0:
            m["y"] = m["r"]
            m["vy"] = abs(m["vy"])
        if m["y"] + m["r"] > INALTIME:
            m["y"] = INALTIME - m["r"]
            m["vy"] = -abs(m["vy"])
        pygame.draw.circle(ecran, m["culoare"], (m["x"], m["y"]), m["r"])
    pygame.display.flip()
    ceas.tick(60)

pygame.quit()
```

**Ieșire (la tine va fi altfel, valorile sunt la întâmplare):**
```text
Mingi create: 8
```

**Ce vezi pe ecran:** pe fundal foarte închis, **opt mingi** colorate, de mărimi și viteze diferite, fiecare ricoșând prin fereastră în felul ei.

Fiecare minge este un **dicționar** cu `x`, `y`, viteze, rază și culoare. Toate se află într-o **listă**, iar o buclă `for` le mută și le desenează pe rând. Cu aceeași schemă ai putea avea 8 mingi sau 800: de aceea folosim liste, nu variabile separate.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 4** (Mingea ca imagine)  
- [ ] Am scris și am rulat **Exemplul 5** (Mai multe mingi)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 5. Urme, gravitație, timp

### Exemplul 6 — Mingea lasă o urmă

```python
import pygame

pygame.init()
LATIME = 600
INALTIME = 400
ecran = pygame.display.set_mode((LATIME, INALTIME))
ceas = pygame.time.Clock()

voal = pygame.Surface((LATIME, INALTIME))
voal.fill((0, 0, 20))
voal.set_alpha(30)

x = 100
y = 100
vx = 6
vy = 4

ruleaza = True
while ruleaza:
    for eveniment in pygame.event.get():
        if eveniment.type == pygame.QUIT:
            ruleaza = False

    x += vx
    y += vy
    if x < 15 or x > LATIME - 15:
        vx = -vx
    if y < 15 or y > INALTIME - 15:
        vy = -vy

    ecran.blit(voal, (0, 0))
    pygame.draw.circle(ecran, (0, 255, 200), (x, y), 15)
    pygame.display.flip()
    ceas.tick(60)

pygame.quit()
```

**Ce vezi pe ecran:** o **minge turcoaz** care lasă în spate o **coadă luminoasă**, ce se **stinge treptat**, ca un meteorit.

Trucul: în loc să ștergem tot ecranul cu `fill`, lipim peste el o imagine întunecată, **aproape transparentă** (`set_alpha(30)`, din 255). Ce era desenat înainte se întunecă puțin la fiecare cadru, deci urmele dispar încet.

### Exemplul 7 — Gravitația

```python
y = 50.0
viteza = 0.0
gravitatie = 0.5
podea = 300

for cadru in range(1, 46):
    viteza += gravitatie
    y += viteza
    if y > podea:
        y = podea
        viteza = -viteza * 0.7
    if cadru % 5 == 0:
        print("Cadrul", cadru, ": y =", round(y, 1), ", viteza =", round(viteza, 1))
```

**Ieșire:**
```text
Cadrul 5 : y = 57.5 , viteza = 2.5
Cadrul 10 : y = 77.5 , viteza = 5.0
Cadrul 15 : y = 110.0 , viteza = 7.5
Cadrul 20 : y = 155.0 , viteza = 10.0
Cadrul 25 : y = 212.5 , viteza = 12.5
Cadrul 30 : y = 282.5 , viteza = 15.0
Cadrul 35 : y = 269.4 , viteza = -9.7
Cadrul 40 : y = 228.4 , viteza = -7.2
Cadrul 45 : y = 199.9 , viteza = -4.7
```

Un obiect care cade nu merge cu viteză **constantă**: viteza lui **crește** la fiecare cadru. Asta este gravitația: `viteza += gravitatie`, apoi `y += viteza`. Când atinge podeaua, o **întoarcem** (`-viteza`) și o **micșorăm** (`* 0.7`): mingea sare, dar de fiecare dată mai puțin, ca o minge adevărată. Programul de mai sus doar **calculează** și afișează valorile din 5 în 5 cadre. Vezi cum `y` crește tot mai repede, iar după cadrul 30 viteza devine **negativă**: mingea a lovit podeaua și **urcă** (`y` scade), tot mai încet.

Același cod, cu desenare:

```python
import pygame

pygame.init()
ecran = pygame.display.set_mode((400, 400))
ceas = pygame.time.Clock()

x = 200
y = 50.0
viteza = 0.0
gravitatie = 0.5
podea = 380

ruleaza = True
while ruleaza:
    for eveniment in pygame.event.get():
        if eveniment.type == pygame.QUIT:
            ruleaza = False

    viteza += gravitatie
    y += viteza
    if y > podea:
        y = podea
        viteza = -viteza * 0.8

    ecran.fill((200, 230, 255))
    pygame.draw.circle(ecran, (255, 60, 60), (x, int(y)), 20)
    pygame.display.flip()
    ceas.tick(60)

pygame.quit()
```

**Ce vezi pe ecran:** o **minge roșie** cade de sus, **sare** de fund și revine, de fiecare dată cu o săritură mai mică, până se oprește aproape de podea.

Dacă `y` are zecimale (de exemplu `12.5`), pentru desenare îl facem întreg cu `int(y)`.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 6** (Mingea lasă o urmă)  
- [ ] Am scris și am rulat **Exemplul 7** (Gravitația)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 6. Mini-proiect

### Exemplul 8 — Screensaver

```python
import random
import pygame

pygame.init()
LATIME = 700
INALTIME = 450
ecran = pygame.display.set_mode((LATIME, INALTIME))
pygame.display.set_caption("Screensaver")
ceas = pygame.time.Clock()
font = pygame.font.Font(None, 30)

voal = pygame.Surface((LATIME, INALTIME))
voal.fill((5, 5, 25))
voal.set_alpha(40)

mingi = []

def mingea_noua():
    return {
        "x": random.randint(40, LATIME - 40),
        "y": random.randint(40, INALTIME - 40),
        "vx": random.choice([-5, -4, -3, 3, 4, 5]),
        "vy": random.choice([-5, -4, -3, 3, 4, 5]),
        "r": random.randint(8, 22),
        "culoare": (random.randint(80, 255), random.randint(80, 255), random.randint(80, 255)),
    }

for i in range(5):
    mingi.append(mingea_noua())

ruleaza = True
while ruleaza:
    for eveniment in pygame.event.get():
        if eveniment.type == pygame.QUIT:
            ruleaza = False
        if eveniment.type == pygame.KEYDOWN:
            if eveniment.key == pygame.K_ESCAPE:
                ruleaza = False
            if eveniment.key == pygame.K_SPACE:
                mingi.append(mingea_noua())
            if eveniment.key == pygame.K_c:
                mingi.clear()
        if eveniment.type == pygame.MOUSEBUTTONDOWN:
            minge = mingea_noua()
            minge["x"], minge["y"] = eveniment.pos
            mingi.append(minge)

    for m in mingi:
        m["x"] += m["vx"]
        m["y"] += m["vy"]
        if m["x"] - m["r"] < 0:
            m["x"] = m["r"]
            m["vx"] = abs(m["vx"])
        if m["x"] + m["r"] > LATIME:
            m["x"] = LATIME - m["r"]
            m["vx"] = -abs(m["vx"])
        if m["y"] - m["r"] < 0:
            m["y"] = m["r"]
            m["vy"] = abs(m["vy"])
        if m["y"] + m["r"] > INALTIME:
            m["y"] = INALTIME - m["r"]
            m["vy"] = -abs(m["vy"])

    ecran.blit(voal, (0, 0))
    for m in mingi:
        pygame.draw.circle(ecran, m["culoare"], (m["x"], m["y"]), m["r"])

    text = font.render("Mingi: " + str(len(mingi)) + "   SPATIU = adauga, C = sterge, Click = pune", True, (200, 200, 200))
    pygame.draw.rect(ecran, (5, 5, 25), (0, 0, LATIME, 34))
    ecran.blit(text, (10, 8))

    pygame.display.flip()
    ceas.tick(60)

pygame.quit()
```

**Ce vezi pe ecran:** pe un fundal întunecat, **5 mingi colorate** ricoșează prin fereastră, lăsând în spate **cozi luminoase**. Sus, pe o bandă închisă, un text care arată **câte mingi sunt** și ce taste poți folosi: **SPAȚIU** adaugă o minge, **C** le șterge pe toate, un **click** pune o minge nouă exact în locul în care ai dat click, iar **Escape** închide programul.

Ce este nou:
- funcția `mingea_noua()` **returnează** un dicționar cu o minge aleasă la întâmplare; o folosim și la început, și la taste, și la click;
- `mingi.clear()` golește lista;
- `eveniment.pos` este `(x, y)` al click-ului; `minge["x"], minge["y"] = eveniment.pos` pune cele două valori deodată;
- banda cu text se desenează **peste** urme, ca textul să rămână clar.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 8** (Screensaver)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă

---

## De făcut azi — „Mingile care ricoșează”

### Minim vs Complet

| Nivel | Ce trebuie să ai |
|-------|------------------|
| **Minim** | O minge care se mișcă și ricoșează de margini |
| **Complet** | Minim + mai multe mingi, urme și screensaver-ul cu taste |

### Pasul 1 — Minim
Scrie un program cu o minge care se mișcă și ricoșează de toate cele patru margini.

### Pasul 2 — Complet
Pornește de la Exemplul 8 și fă un screensaver **al tău**:
1. mingile au **forme sau culori speciale** alese de tine (de exemplu, imagini create cu `Surface`);
2. adaugă **gravitație** care se pornește și se oprește cu tasta **G**;
3. adaugă tasta **S** care **oprește** sau **pornește** mișcarea (pauză);
4. afișează pe ecran **numărul de ricoșeuri** totale;
5. păstrează funcția `mingea_noua()`.

**Gata când:**
- [ ] Screensaver-ul are mingi cu formă proprie, gravitație și pauză  
- [ ] Ricoșeurile sunt numărate pe ecran  
- [ ] Mingile nu rămân „lipite” de margini  
- [ ] Fișierul se numește `Prenume_Nume_P4_L3.py`

---

## Bonus ★★★ — Provocare: Screensaver cu vânt și ciocniri

*Doar dacă ai terminat Complet. Lucrezi tot în screensaver-ul „Mingile care ricoșează”, în același program.*

- [ ] **Vânt.** La tasta **V** pornește sau oprește un vânt spre dreapta: la fiecare cadru, viteza pe orizontală crește puțin (dar nu peste 8)  
- [ ] **Mingi care cresc.** De fiecare dată când o minge lovește un perete, raza ei crește cu 1, până la cel mult 40  
- [ ] **Ciocniri.** Când două mingi se ating, desenează în jurul lor un contur alb (indiciu: distanța dintre centre este mai mică decât suma razelor)  
- [ ] **Soare care orbitează.** Un cerc galben se învârte în jurul centrului ecranului (indiciu: `math.cos` și `math.sin`)

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| Obiectul nu se mișcă | Ai scris `x + 3` în loc de `x += 3` | `x += 3` (sau `x = x + 3`) |
| Obiectul lasă o dâră pe tot ecranul | Lipsește `ecran.fill(...)` înainte de desen | `fill` la începutul desenării |
| Mingea „vibrează” lipită de perete | La perete schimbi semnul, dar nu o mai aduci în ecran | `x = LATIME - r` și `vx = -abs(vx)` |
| Mișcarea este prea rapidă sau prea lentă | Viteza depinde de FPS | `ceas.tick(60)` sau mișcare cu `dt` |
| Obiectul cu `Rect` nu se mișcă la viteze mici (de exemplu 0.5) | Un `Rect` păstrează doar numere **întregi**, iar zecimalele se pierd | Ține `x` ca variabilă cu zecimale și copiază-o în `Rect` cu `int(x)` |
| Obiectul iese din fereastră | Nu ai verificat marginea cu lățimea lui | `if x + latime_obiect > LATIME:` |
| `KeyError: 'vx'` | Ai scris greșit cheia din dicționar | Folosește exact aceleași chei peste tot |

---

## Recapitulare pe scurt

- Bucla jocului: **evenimente** → **actualizare** → **desenare**.
- Mișcare = `x += viteza` la fiecare cadru, apoi redesenare.
- Ricoșeu = schimbăm semnul vitezei la margine (și aducem obiectul în ecran).
- Gravitație = `viteza += gravitatie`, apoi `y += viteza`.
- Mai multe obiecte = o **listă de dicționare**, parcursă cu `for`.
- Pentru viteză independentă de FPS: `dt = ceas.tick(60) / 1000` și `x += viteza * dt` (vezi „Acasă 2”).

---

## Quiz scurt
- Care sunt cei trei pași ai buclei jocului?  
- Cum mișcăm un obiect la fiecare cadru?  
- Cum faci un ricoșeu la margine?  
- Cum adaugi gravitația?  
- Cum păstrezi mai multe obiecte și cum le parcurgi?  

---

---

## Temă
1. Refă **4 exemple la alegere** din cele 8, scrise de tine (nu copiate).  
2. **Două pătrate.** Fă două pătrate: unul care merge **spre dreapta** și altul **spre stânga**, pe rânduri diferite. Când ajung la margine, ricoșează. Apoi adaugă un al treilea, care merge **pe verticală**.  
3. Fă **un joc de „ping”**: o minge care ricoșează între doi pereți și o bară jos care o ține (fără tastatură deocamdată: bara urmărește mouse-ul).  
4. Fă o **ploaie**: 30 de picături care cad și reapar sus.  
5. **Explică pe foaie:** Care sunt cele trei părți ale buclei jocului? De ce schimbăm semnul vitezei când mingea lovește un perete? De ce folosim `dt` (timpul dintre cadre)? (vezi „Acasă 2”)  
6. **Bonus:** fă o **mașinuță** care merge pe o șosea, reapare din stânga și accelerează la tasta SPAȚIU.  
7. Salvează totul ca `Tema_P4_L3_Prenume_Nume.py`.

### Exemple pentru acasă
Aceste exemple folosesc exact ce ai învățat azi. Scrie-le în Thonny, rulează-le și schimbă-le după preferințe.

#### Acasă 1 — Apare din partea cealaltă

```python
import pygame

pygame.init()
LATIME = 600
ecran = pygame.display.set_mode((LATIME, 300))
ceas = pygame.time.Clock()

x = 0
y = 125

ruleaza = True
while ruleaza:
    for eveniment in pygame.event.get():
        if eveniment.type == pygame.QUIT:
            ruleaza = False

    x += 4
    if x > LATIME:
        x = -50

    ecran.fill((30, 30, 60))
    pygame.draw.rect(ecran, (255, 200, 0), (x, y, 50, 50))
    pygame.display.flip()
    ceas.tick(60)

pygame.quit()
```

**Ce vezi pe ecran:** pătratul galben merge spre dreapta, iese pe margine și **reapare imediat din stânga**, la nesfârșit, ca într-un tunel.

Condiția `if x > LATIME` verifică dacă a ieșit complet din ecran, iar `x = -50` îl mută chiar **înainte** de marginea din stânga (cu lățimea lui, 50), ca să intre încet, nu să apară brusc.

#### Acasă 2 — Viteză independentă de calculator

```python
viteza_pe_secunda = 200

for fps in [30, 60, 120]:
    pixeli_pe_cadru = viteza_pe_secunda / fps
    print(fps, "FPS ->", round(pixeli_pe_cadru, 2), "pixeli pe cadru")

dt = 0.5
print("In", dt, "secunde la", viteza_pe_secunda, "pixeli/s -> ", viteza_pe_secunda * dt, "pixeli")
```

**Ieșire:**
```text
30 FPS -> 6.67 pixeli pe cadru
60 FPS -> 3.33 pixeli pe cadru
120 FPS -> 1.67 pixeli pe cadru
In 0.5 secunde la 200 pixeli/s ->  100.0 pixeli
```

Dacă mutăm obiectul cu „3 pixeli pe cadru”, pe un calculator care face 30 de cadre pe secundă va merge **la jumătate de viteză** față de unul cu 60. Soluția: măsurăm **timpul dintre cadre** (`dt`) și mutăm obiectul cu `viteza * dt`. Atunci contează **pixelii pe secundă**, nu pixelii pe cadru.

În Pygame, `ceas.tick(60)` **returnează** milisecundele trecute de la cadrul anterior. Împărțite la 1000, ne dau `dt` în secunde:

```python
import pygame

pygame.init()
ecran = pygame.display.set_mode((600, 200))
ceas = pygame.time.Clock()

x = 0.0
viteza = 200

ruleaza = True
while ruleaza:
    dt = ceas.tick(60) / 1000
    for eveniment in pygame.event.get():
        if eveniment.type == pygame.QUIT:
            ruleaza = False

    x += viteza * dt
    if x > 600:
        x = -40

    ecran.fill((30, 30, 60))
    pygame.draw.rect(ecran, (255, 200, 0), (int(x), 80, 40, 40))
    pygame.display.flip()

pygame.quit()
```

**Ce vezi pe ecran:** un **pătrat galben** care traversează fereastra cu **200 de pixeli pe secundă**, aproximativ **3 secunde** de la un capăt la altul, **pe orice calculator**.

### Încă două exerciții

**Ce afișează?** Gândește-te, apoi verifică în Thonny:

```python
x = 590
viteza = 5
for cadru in range(4):
    x += viteza
    if x + 50 > 600:
        viteza = -abs(viteza)
    print(cadru, x, viteza)
```

**Găsește greșelile.** Programul are 3 greșeli. Rescrie-l corect:

```text
import pygame
pygame.init()
ecran = pygame.display.set_mode((600, 300))
x = 0
ruleaza = True
while ruleaza:
    for eveniment in pygame.event.get():
        if eveniment.type == pygame.QUIT
            ruleaza = False
    x + 3
    pygame.draw.rect(ecran, (255, 0, 0), (x, 100, 50, 50)
    pygame.display.flip()
```

---

## Răspunsuri la bonus
Uită-te aici doar după ce ai încercat singur. Există mai multe soluții bune; a ta poate arăta diferit, important este să funcționeze. Fiecare cod este un program întreg, pornit de la screensaver-ul „Mingile care ricoșează” (Exemplul 8).

### 1. Vânt
```python
import random
import pygame

pygame.init()
LATIME = 700
INALTIME = 450
ecran = pygame.display.set_mode((LATIME, INALTIME))
pygame.display.set_caption("Screensaver")
ceas = pygame.time.Clock()
font = pygame.font.Font(None, 30)

voal = pygame.Surface((LATIME, INALTIME))
voal.fill((5, 5, 25))
voal.set_alpha(40)

mingi = []

def mingea_noua():
    return {
        "x": random.randint(40, LATIME - 40),
        "y": random.randint(40, INALTIME - 40),
        "vx": random.choice([-5, -4, -3, 3, 4, 5]),
        "vy": random.choice([-5, -4, -3, 3, 4, 5]),
        "r": random.randint(8, 22),
        "culoare": (random.randint(80, 255), random.randint(80, 255), random.randint(80, 255)),
    }

for i in range(5):
    mingi.append(mingea_noua())

vant = False

ruleaza = True
while ruleaza:
    for eveniment in pygame.event.get():
        if eveniment.type == pygame.QUIT:
            ruleaza = False
        if eveniment.type == pygame.KEYDOWN:
            if eveniment.key == pygame.K_ESCAPE:
                ruleaza = False
            if eveniment.key == pygame.K_SPACE:
                mingi.append(mingea_noua())
            if eveniment.key == pygame.K_c:
                mingi.clear()
            if eveniment.key == pygame.K_v:
                vant = not vant
        if eveniment.type == pygame.MOUSEBUTTONDOWN:
            minge = mingea_noua()
            minge["x"], minge["y"] = eveniment.pos
            mingi.append(minge)

    for m in mingi:
        if vant and m["vx"] < 8:
            m["vx"] += 0.05
        m["x"] += m["vx"]
        m["y"] += m["vy"]
        if m["x"] - m["r"] < 0:
            m["x"] = m["r"]
            m["vx"] = abs(m["vx"])
        if m["x"] + m["r"] > LATIME:
            m["x"] = LATIME - m["r"]
            m["vx"] = -abs(m["vx"])
        if m["y"] - m["r"] < 0:
            m["y"] = m["r"]
            m["vy"] = abs(m["vy"])
        if m["y"] + m["r"] > INALTIME:
            m["y"] = INALTIME - m["r"]
            m["vy"] = -abs(m["vy"])

    ecran.blit(voal, (0, 0))
    for m in mingi:
        pygame.draw.circle(ecran, m["culoare"], (m["x"], m["y"]), m["r"])

    text = font.render("Mingi: " + str(len(mingi)) + "   SPATIU = adauga, C = sterge, V = vant", True, (200, 200, 200))
    pygame.draw.rect(ecran, (5, 5, 25), (0, 0, LATIME, 34))
    ecran.blit(text, (10, 8))

    pygame.display.flip()
    ceas.tick(60)

pygame.quit()
```
**Ce vezi pe ecran:** screensaver-ul obișnuit, plus „V = vant” în banda de sus. La **V**, toate mingile încep să fie împinse spre dreapta și se adună spre peretele din dreapta; la a doua apăsare pe **V** vântul se oprește. `vant = not vant` întoarce `True` în `False` și invers, iar `m["vx"] < 8` oprește creșterea vitezei.

### 2. Mingi care cresc
```python
import random
import pygame

pygame.init()
LATIME = 700
INALTIME = 450
ecran = pygame.display.set_mode((LATIME, INALTIME))
pygame.display.set_caption("Screensaver")
ceas = pygame.time.Clock()
font = pygame.font.Font(None, 30)

voal = pygame.Surface((LATIME, INALTIME))
voal.fill((5, 5, 25))
voal.set_alpha(40)

mingi = []

def mingea_noua():
    return {
        "x": random.randint(40, LATIME - 40),
        "y": random.randint(40, INALTIME - 40),
        "vx": random.choice([-5, -4, -3, 3, 4, 5]),
        "vy": random.choice([-5, -4, -3, 3, 4, 5]),
        "r": random.randint(8, 22),
        "culoare": (random.randint(80, 255), random.randint(80, 255), random.randint(80, 255)),
    }

for i in range(5):
    mingi.append(mingea_noua())

ruleaza = True
while ruleaza:
    for eveniment in pygame.event.get():
        if eveniment.type == pygame.QUIT:
            ruleaza = False
        if eveniment.type == pygame.KEYDOWN:
            if eveniment.key == pygame.K_ESCAPE:
                ruleaza = False
            if eveniment.key == pygame.K_SPACE:
                mingi.append(mingea_noua())
            if eveniment.key == pygame.K_c:
                mingi.clear()
        if eveniment.type == pygame.MOUSEBUTTONDOWN:
            minge = mingea_noua()
            minge["x"], minge["y"] = eveniment.pos
            mingi.append(minge)

    for m in mingi:
        m["x"] += m["vx"]
        m["y"] += m["vy"]
        lovit = False
        if m["x"] - m["r"] < 0:
            m["x"] = m["r"]
            m["vx"] = abs(m["vx"])
            lovit = True
        if m["x"] + m["r"] > LATIME:
            m["x"] = LATIME - m["r"]
            m["vx"] = -abs(m["vx"])
            lovit = True
        if m["y"] - m["r"] < 0:
            m["y"] = m["r"]
            m["vy"] = abs(m["vy"])
            lovit = True
        if m["y"] + m["r"] > INALTIME:
            m["y"] = INALTIME - m["r"]
            m["vy"] = -abs(m["vy"])
            lovit = True
        if lovit and m["r"] < 40:
            m["r"] += 1

    ecran.blit(voal, (0, 0))
    for m in mingi:
        pygame.draw.circle(ecran, m["culoare"], (m["x"], m["y"]), m["r"])

    text = font.render("Mingi: " + str(len(mingi)) + "   SPATIU = adauga, C = sterge, Click = pune", True, (200, 200, 200))
    pygame.draw.rect(ecran, (5, 5, 25), (0, 0, LATIME, 34))
    ecran.blit(text, (10, 8))

    pygame.display.flip()
    ceas.tick(60)

pygame.quit()
```
**Ce vezi pe ecran:** mingile ricoșează ca de obicei, dar fiecare lovitură de perete le face puțin mai mari, până ajung la raza 40. Variabila `lovit` este `False` la începutul fiecărui cadru și devine `True` în orice ramură care a atins un perete; abia apoi mărim raza.

### 3. Ciocniri
```python
import random
import pygame

pygame.init()
LATIME = 700
INALTIME = 450
ecran = pygame.display.set_mode((LATIME, INALTIME))
pygame.display.set_caption("Screensaver")
ceas = pygame.time.Clock()
font = pygame.font.Font(None, 30)

voal = pygame.Surface((LATIME, INALTIME))
voal.fill((5, 5, 25))
voal.set_alpha(40)

mingi = []

def mingea_noua():
    return {
        "x": random.randint(40, LATIME - 40),
        "y": random.randint(40, INALTIME - 40),
        "vx": random.choice([-5, -4, -3, 3, 4, 5]),
        "vy": random.choice([-5, -4, -3, 3, 4, 5]),
        "r": random.randint(8, 22),
        "culoare": (random.randint(80, 255), random.randint(80, 255), random.randint(80, 255)),
    }

for i in range(5):
    mingi.append(mingea_noua())

ruleaza = True
while ruleaza:
    for eveniment in pygame.event.get():
        if eveniment.type == pygame.QUIT:
            ruleaza = False
        if eveniment.type == pygame.KEYDOWN:
            if eveniment.key == pygame.K_ESCAPE:
                ruleaza = False
            if eveniment.key == pygame.K_SPACE:
                mingi.append(mingea_noua())
            if eveniment.key == pygame.K_c:
                mingi.clear()
        if eveniment.type == pygame.MOUSEBUTTONDOWN:
            minge = mingea_noua()
            minge["x"], minge["y"] = eveniment.pos
            mingi.append(minge)

    for m in mingi:
        m["x"] += m["vx"]
        m["y"] += m["vy"]
        if m["x"] - m["r"] < 0:
            m["x"] = m["r"]
            m["vx"] = abs(m["vx"])
        if m["x"] + m["r"] > LATIME:
            m["x"] = LATIME - m["r"]
            m["vx"] = -abs(m["vx"])
        if m["y"] - m["r"] < 0:
            m["y"] = m["r"]
            m["vy"] = abs(m["vy"])
        if m["y"] + m["r"] > INALTIME:
            m["y"] = INALTIME - m["r"]
            m["vy"] = -abs(m["vy"])

    ecran.blit(voal, (0, 0))
    for m in mingi:
        pygame.draw.circle(ecran, m["culoare"], (m["x"], m["y"]), m["r"])

    for i in range(len(mingi)):
        for j in range(i + 1, len(mingi)):
            a = mingi[i]
            b = mingi[j]
            dx = a["x"] - b["x"]
            dy = a["y"] - b["y"]
            if (dx * dx + dy * dy) ** 0.5 < a["r"] + b["r"]:
                pygame.draw.circle(ecran, (255, 255, 255), (a["x"], a["y"]), a["r"] + 4, 2)
                pygame.draw.circle(ecran, (255, 255, 255), (b["x"], b["y"]), b["r"] + 4, 2)

    text = font.render("Mingi: " + str(len(mingi)) + "   SPATIU = adauga, C = sterge, Click = pune", True, (200, 200, 200))
    pygame.draw.rect(ecran, (5, 5, 25), (0, 0, LATIME, 34))
    ecran.blit(text, (10, 8))

    pygame.display.flip()
    ceas.tick(60)

pygame.quit()
```
**Ce vezi pe ecran:** când două mingi se ating, apare câte un contur alb în jurul lor, care dispare când se despart. Cele două `for` iau fiecare pereche o singură dată (`j` pornește de la `i + 1`), iar `(dx * dx + dy * dy) ** 0.5` este distanța dintre centre.

### 4. Soare care orbitează
```python
import math
import random
import pygame

pygame.init()
LATIME = 700
INALTIME = 450
ecran = pygame.display.set_mode((LATIME, INALTIME))
pygame.display.set_caption("Screensaver")
ceas = pygame.time.Clock()
font = pygame.font.Font(None, 30)

voal = pygame.Surface((LATIME, INALTIME))
voal.fill((5, 5, 25))
voal.set_alpha(40)

mingi = []

def mingea_noua():
    return {
        "x": random.randint(40, LATIME - 40),
        "y": random.randint(40, INALTIME - 40),
        "vx": random.choice([-5, -4, -3, 3, 4, 5]),
        "vy": random.choice([-5, -4, -3, 3, 4, 5]),
        "r": random.randint(8, 22),
        "culoare": (random.randint(80, 255), random.randint(80, 255), random.randint(80, 255)),
    }

for i in range(5):
    mingi.append(mingea_noua())

unghi = 0

ruleaza = True
while ruleaza:
    for eveniment in pygame.event.get():
        if eveniment.type == pygame.QUIT:
            ruleaza = False
        if eveniment.type == pygame.KEYDOWN:
            if eveniment.key == pygame.K_ESCAPE:
                ruleaza = False
            if eveniment.key == pygame.K_SPACE:
                mingi.append(mingea_noua())
            if eveniment.key == pygame.K_c:
                mingi.clear()
        if eveniment.type == pygame.MOUSEBUTTONDOWN:
            minge = mingea_noua()
            minge["x"], minge["y"] = eveniment.pos
            mingi.append(minge)

    for m in mingi:
        m["x"] += m["vx"]
        m["y"] += m["vy"]
        if m["x"] - m["r"] < 0:
            m["x"] = m["r"]
            m["vx"] = abs(m["vx"])
        if m["x"] + m["r"] > LATIME:
            m["x"] = LATIME - m["r"]
            m["vx"] = -abs(m["vx"])
        if m["y"] - m["r"] < 0:
            m["y"] = m["r"]
            m["vy"] = abs(m["vy"])
        if m["y"] + m["r"] > INALTIME:
            m["y"] = INALTIME - m["r"]
            m["vy"] = -abs(m["vy"])

    ecran.blit(voal, (0, 0))
    for m in mingi:
        pygame.draw.circle(ecran, m["culoare"], (m["x"], m["y"]), m["r"])

    unghi += 0.03
    sx = LATIME // 2 + 150 * math.cos(unghi)
    sy = INALTIME // 2 + 150 * math.sin(unghi)
    pygame.draw.circle(ecran, (255, 220, 0), (sx, sy), 14)

    text = font.render("Mingi: " + str(len(mingi)) + "   SPATIU = adauga, C = sterge, Click = pune", True, (200, 200, 200))
    pygame.draw.rect(ecran, (5, 5, 25), (0, 0, LATIME, 34))
    ecran.blit(text, (10, 8))

    pygame.display.flip()
    ceas.tick(60)

pygame.quit()
```
**Ce vezi pe ecran:** un cerc galben se rotește în jurul centrului ferestrei, pe un cerc cu raza 150, peste mingile care ricoșează. `unghi` crește cu 0.03 la fiecare cadru; `cos` dă poziția pe orizontală, iar `sin` pe verticală.

---
## Ce urmează — Lecția 4
**Tastatura: controlăm personajul**: acum tu decizi unde merge personajul, cu săgețile și cu W, A, S, D.
