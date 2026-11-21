# LECȚIA 1 — Ecranul meu de start
### Fereastra Pygame, culori și text
**Modulul 4 · Jocuri cu Pygame · 2 ore**  
**Code Maker Club · Game Creator**

> Până acum ai desenat cu țestoasa. Acum trecem la **jocuri adevărate**! Folosim **Pygame**, o bibliotecă făcută special pentru jocuri: ferestre, culori, imagini, tastatură, mouse. Azi pornim prima fereastră și învățăm „inima” oricărui joc: **bucla jocului**.  
> Proiect: **„Ecranul meu de start”** · fișier: `Prenume_Nume_P4_L1.py`

---

## Ce facem azi

La finalul orei ai Pygame instalat, deschizi o fereastră, o ții deschisă cu bucla jocului, o închizi corect (cu butonul X sau cu tasta Escape), schimbi culoarea fundalului, citești tastele și scrii text pe ecran.

Orice joc, de la cele mai simple la cele mai mari, are aceeași structură: o **buclă** care se repetă de zeci de ori pe secundă și, la fiecare repetare, **citește ce faci tu**, **schimbă lumea jocului** și **desenează totul din nou**. Azi construim scheletul acesta, iar în următoarele lecții îl umplem cu personaje.

La final ai **„Ecranul meu de start”** — primul ecran al unui joc.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare din Modulul 3 |
| 10–25 | Instalăm Pygame (**Exemplul 1**) |
| 25–50 | Prima fereastră și bucla jocului (**Exemplul 2**) |
| 50–65 | Culori RGB (**Exemplul 3**) |
| 65–80 | Evenimente: Escape (**Exemplul 4**) |
| 80–90 | Coordonate și cadre pe secundă (**Exemplul 5**) |
| 90–98 | Culoarea se schimbă la tastă (**Exemplul 6**) |
| 98–106 | Primul text (**Exemplul 7**) |
| 106–118 | Mini-proiect: Ecranul meu de start (**Exemplul 8**) |
| 118–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `pygame.init()` | Pornește Pygame | `pygame.init()` |
| `pygame.display.set_mode((l, h))` | Creează fereastra (lățime, înălțime) | `ecran = pygame.display.set_mode((600, 400))` |
| `while ruleaza:` + `pygame.event.get()` | Bucla jocului: citește evenimentele | `for eveniment in pygame.event.get():` |
| `ecran.fill((r, g, b))` | Umple ecranul cu o culoare | `ecran.fill((30, 30, 60))` |
| `pygame.display.flip()` | Arată pe ecran cadrul desenat | `pygame.display.flip()` |
| `eveniment.type == pygame.KEYDOWN` | Se apasă o tastă | `eveniment.key == pygame.K_ESCAPE` |
| `ceas.tick(60)` | Limitează jocul la 60 de cadre pe secundă | `ceas = pygame.time.Clock()` |
| `font.render(...)` + `ecran.blit(...)` | Scrie text pe ecran | `ecran.blit(imagine, (x, y))` |

---

## 1. Recapitulare rapidă din Modulul 3

- Funcții cu `def`, bucle `while` și `for`, dicționare.
- Evenimente: „când apeși o tastă, execută o funcție”.
- Coordonatele ecranului și culori.

---

## 2. Instalăm Pygame

**Pygame** nu vine odată cu Python: trebuie să-l instalăm o singură dată. În Thonny:
1. alege din meniu **Tools → Manage packages...**;
2. scrie `pygame` în căsuța de căutare și apasă **Search on PyPI**;
3. dă click pe `pygame`, apoi pe **Install**;
4. așteaptă câteva secunde până se termină.

(Dacă nu merge, cere ajutorul profesorului sau al unui adult.)

### Exemplul 1 — Funcționează?

```python
import pygame

pygame.init()
print("Pygame 2 sau mai nou:", pygame.version.vernum[0] >= 2)
pygame.quit()
```

**Ieșire:**
```text
Pygame 2 sau mai nou: True
```

`import pygame` aduce biblioteca. `pygame.init()` o pornește, iar `pygame.quit()` o oprește. Dacă vezi `True`, totul este în regulă. (Pygame poate afișa și un rând cu versiunea și un salut; este normal.)

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 1** (Funcționează?)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 3. Prima fereastră

### Exemplul 2 — Fereastra și bucla jocului

```python
import pygame

pygame.init()
ecran = pygame.display.set_mode((600, 400))
pygame.display.set_caption("Prima mea fereastra")

ruleaza = True
while ruleaza:
    for eveniment in pygame.event.get():
        if eveniment.type == pygame.QUIT:
            ruleaza = False

    ecran.fill((30, 30, 60))
    pygame.display.flip()

pygame.quit()
print("Fereastra s-a inchis.")
```

**Ieșire:**
```text
Fereastra s-a inchis.
```

**Ce vezi pe ecran:** o fereastră de **600 × 400** cu titlul „Prima mea fereastra” și fundal albastru închis. Rămâne deschisă până apeși butonul **X** (închidere). Apoi, în Thonny, apare mesajul „Fereastra s-a inchis.”

Rând cu rând:
- `set_mode((600, 400))` creează fereastra (lățime, înălțime) și ne dă `ecran`, adică suprafața pe care desenăm;
- `while ruleaza:` este **bucla jocului**: se repetă cât timp `ruleaza` este `True`;
- `for eveniment in pygame.event.get()` ia toate lucrurile care s-au întâmplat (taste, mouse, închidere);
- dacă evenimentul este `pygame.QUIT` (ai apăsat X), punem `ruleaza = False`, iar bucla se oprește;
- `ecran.fill(culoare)` **umple tot ecranul** cu o culoare;
- `pygame.display.flip()` **arată** pe monitor ce am desenat.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 2** (Fereastra și bucla jocului)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 4. Culori

### Exemplul 3 — Culorile RGB

```python
import pygame

pygame.init()
ecran = pygame.display.set_mode((600, 400))

ROSU = (255, 0, 0)
VERDE = (0, 255, 0)
ALBASTRU = (0, 0, 255)
ALB = (255, 255, 255)
NEGRU = (0, 0, 0)
PORTOCALIU = (255, 140, 0)

print("Rosu are", ROSU[0], "rosu,", ROSU[1], "verde,", ROSU[2], "albastru")
print("Alb:", ALB, "Negru:", NEGRU)

ruleaza = True
while ruleaza:
    for eveniment in pygame.event.get():
        if eveniment.type == pygame.QUIT:
            ruleaza = False

    ecran.fill(PORTOCALIU)
    pygame.display.flip()

pygame.quit()
```

**Ieșire:**
```text
Rosu are 255 rosu, 0 verde, 0 albastru
Alb: (255, 255, 255) Negru: (0, 0, 0)
```

**Ce vezi pe ecran:** o fereastră **portocalie**.

O culoare se scrie ca **trei numere** de la 0 la 255: cât **roșu**, cât **verde**, cât **albastru** conține (**RGB**). `(255, 0, 0)` este roșu pur, `(255, 255, 255)` este alb (totul la maxim), iar `(0, 0, 0)` este negru (nimic). Amestecând, obții orice culoare: `(255, 140, 0)` este portocaliu. Numele scrise cu litere mari (`ROSU`, `ALB`) sunt **constante**: valori care nu se schimbă.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 3** (Culorile RGB)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 5. Evenimente

### Exemplul 4 — Închidem cu Escape

```python
import pygame

pygame.init()
ecran = pygame.display.set_mode((600, 400))
pygame.display.set_caption("Apasa Escape ca sa inchizi")

ruleaza = True
while ruleaza:
    for eveniment in pygame.event.get():
        if eveniment.type == pygame.QUIT:
            ruleaza = False
        if eveniment.type == pygame.KEYDOWN:
            if eveniment.key == pygame.K_ESCAPE:
                ruleaza = False

    ecran.fill((20, 60, 20))
    pygame.display.flip()

pygame.quit()
```

**Ce vezi pe ecran:** o fereastră **verde închis**. Se închide și când apeși **X**, și când apeși tasta **Escape**.

`pygame.KEYDOWN` înseamnă „s-a apăsat o tastă”. Care tastă? Aflăm din `eveniment.key`: `pygame.K_ESCAPE`, `pygame.K_SPACE`, `pygame.K_LEFT`, `pygame.K_a`... Toate numele tastelor încep cu `K_`.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 4** (Închidem cu Escape)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 6. Coordonate și viteză

În Pygame, **originea `(0, 0)` este în colțul din STÂNGA-SUS**. `x` crește spre **dreapta**, iar `y` crește în **jos** (invers față de matematică și față de țestoasa din Modulul 3!). O fereastră de `600 × 400` are centrul la `(300, 200)`.

### Exemplul 5 — Cadre pe secundă

```python
import pygame

pygame.init()
ecran = pygame.display.set_mode((600, 400))
ceas = pygame.time.Clock()

cadre = 0
ruleaza = True
while ruleaza:
    for eveniment in pygame.event.get():
        if eveniment.type == pygame.QUIT:
            ruleaza = False

    cadre += 1
    pygame.display.set_caption("Cadre desenate: " + str(cadre))
    ecran.fill((40, 0, 60))
    pygame.display.flip()
    ceas.tick(60)

pygame.quit()
```

**Ce vezi pe ecran:** o fereastră **mov închis**, iar în titlul ei un **număr care crește foarte repede**: câte cadre s-au desenat.

`ceas.tick(60)` cere ca bucla să ruleze **cel mult 60 de ori pe secundă** (60 FPS, „frames per second”). Fără el, calculatorul ar repeta bucla de mii de ori pe secundă, degeaba. În 1 secundă, numărul din titlu crește cu aproximativ 60.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 5** (Cadre pe secundă)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 7. Interacțiuni simple

### Exemplul 6 — Culoarea se schimbă la tastă

```python
import pygame

pygame.init()
ecran = pygame.display.set_mode((600, 400))

culori = [(200, 30, 30), (30, 160, 30), (30, 30, 200), (230, 200, 20)]
indice = 0

ruleaza = True
while ruleaza:
    for eveniment in pygame.event.get():
        if eveniment.type == pygame.QUIT:
            ruleaza = False
        if eveniment.type == pygame.KEYDOWN:
            if eveniment.key == pygame.K_SPACE:
                indice = (indice + 1) % len(culori)

    ecran.fill(culori[indice])
    pygame.display.flip()

pygame.quit()
```

**Ce vezi pe ecran:** fundalul începe **roșu**. De fiecare dată când apeși **bara de spațiu**, devine pe rând **verde**, **albastru**, **galben**, apoi din nou **roșu**.

Dacă recunoști `% len(culori)` din Modulul 3, ai dreptate: parcurge lista **în cerc**.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 6** (Culoarea se schimbă la tastă)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 8. Text pe ecran

### Exemplul 7 — Primul text

```python
import pygame

pygame.init()
ecran = pygame.display.set_mode((600, 400))
font = pygame.font.Font(None, 72)

text = font.render("Salut, Pygame!", True, (255, 255, 255))
print("Textul are marimea:", text.get_width() > 0, text.get_height() > 0)

ruleaza = True
while ruleaza:
    for eveniment in pygame.event.get():
        if eveniment.type == pygame.QUIT:
            ruleaza = False

    ecran.fill((0, 80, 120))
    ecran.blit(text, (100, 160))
    pygame.display.flip()

pygame.quit()
```

**Ieșire:**
```text
Textul are marimea: True True
```

**Ce vezi pe ecran:** pe fundal albastru-verzui, textul alb **„Salut, Pygame!”**, cu litere mari, pornind din punctul `(100, 160)`.

Pașii pentru text sunt:
1. `pygame.font.Font(None, 72)` creează un **font** (litere) cu mărimea 72; `None` înseamnă fontul standard;
2. `font.render("text", True, culoare)` **transformă textul într-o imagine**; `True` înseamnă „fără zimți”, adică litere netede;
3. `ecran.blit(text, (x, y))` **lipește** imaginea pe ecran, cu colțul din stânga-sus la `(x, y)`.

Fontul standard nu are toate literele românești, deci în jocuri scriem fără diacritice.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 7** (Primul text)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 9. Mini-proiect

### Exemplul 8 — Ecranul meu de start

```python
import pygame

pygame.init()
LATIME = 700
INALTIME = 450
ecran = pygame.display.set_mode((LATIME, INALTIME))
pygame.display.set_caption("Jocul meu")
ceas = pygame.time.Clock()

font_titlu = pygame.font.Font(None, 90)
font_mic = pygame.font.Font(None, 36)

culori_fundal = [(20, 20, 60), (60, 20, 60), (20, 60, 60)]
indice = 0

def scrie_centrat(text, font, culoare, y):
    imagine = font.render(text, True, culoare)
    x = (LATIME - imagine.get_width()) // 2
    ecran.blit(imagine, (x, y))

ruleaza = True
while ruleaza:
    for eveniment in pygame.event.get():
        if eveniment.type == pygame.QUIT:
            ruleaza = False
        if eveniment.type == pygame.KEYDOWN:
            if eveniment.key == pygame.K_ESCAPE:
                ruleaza = False
            if eveniment.key == pygame.K_SPACE:
                indice = (indice + 1) % len(culori_fundal)

    ecran.fill(culori_fundal[indice])
    pygame.draw.rect(ecran, (255, 255, 255), (10, 10, LATIME - 20, INALTIME - 20), 4)
    scrie_centrat("JOCUL MEU", font_titlu, (255, 220, 0), 120)
    scrie_centrat("Apasa SPATIU pentru alta culoare", font_mic, (255, 255, 255), 250)
    scrie_centrat("Escape = iesire", font_mic, (180, 180, 180), 300)
    pygame.display.flip()
    ceas.tick(60)

pygame.quit()
```

**Ce vezi pe ecran:** o fereastră **700 × 450** cu fundal albastru închis, încadrată de o **ramă albă**. În mijloc, cu litere mari galbene, **„JOCUL MEU”**, iar dedesubt, două rânduri de text. La **SPAȚIU** fundalul își schimbă culoarea (albastru, mov, verde-albastrui), iar **Escape** închide jocul.

Ce este nou:
- `pygame.draw.rect(ecran, culoare, (x, y, lățime, înălțime), grosime)` desenează un dreptunghi; cu grosime 4 este doar **conturul**. Vom învăța mai multe în lecția următoare;
- funcția `scrie_centrat` calculează `x` ca textul să fie **la mijloc**: `(LATIME - lățimea textului) // 2`.

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 8** (Ecranul meu de start)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă

---

## De făcut azi — „Ecranul meu de start”

### Minim vs Complet

| Nivel | Ce trebuie să ai |
|-------|------------------|
| **Minim** | O fereastră care se deschide, are o culoare și se închide corect (X și Escape) |
| **Complet** | Minim + ecranul de start al jocului tău: titlu, cel puțin 5 culori de fundal și numărul culorii afișat |

### Pasul 1 — Minim
Scrie un program care deschide o fereastră cu fundal colorat și o închide cu **X** și cu **Escape**.

### Pasul 2 — Complet
Pornește de la Exemplul 8 și fă ecranul **al tău**:
1. alege un **titlu** pentru jocul tău (cum vrei să-l numești!);
2. alege **cel puțin 5 culori** de fundal;
3. adaugă la fiecare apăsare pe **săgeata dreapta** culoarea următoare și pe **săgeata stânga** culoarea anterioară;
4. afișează jos numărul culorii curente („Culoarea 2 din 5”);
5. închide jocul cu **Escape** și cu **X**.

**Gata când:**
- [ ] Ai Pygame instalat și fereastra se deschide  
- [ ] Ecranul de start are titlul și culorile tale  
- [ ] Săgețile stânga și dreapta schimbă culoarea  
- [ ] Jocul se închide cu X și cu Escape  
- [ ] Fișierul se numește `Prenume_Nume_P4_L1.py`

---

## Bonus ★★★ — Provocare: Ecranul de start devine interactiv

*Doar dacă ai terminat Complet. Lucrezi tot în „Ecranul meu de start”, în același program.*

- [ ] **Fundal automat.** Pe lângă SPAȚIU, fă fundalul să se schimbe **singur** la fiecare 2 secunde (indiciu: `pygame.time.get_ticks()`, care dă milisecundele de la pornire)  
- [ ] **Mouse pe ecran.** Afișează jos, pe ecran, textul „Mouse: x, y” cu coordonatele mouse-ului (`pygame.mouse.get_pos()`)  
- [ ] **Steag.** Desenează între titlu și text un steag din **3 dreptunghiuri** colorate, unul lângă altul (`pygame.draw.rect`)  
- [ ] **Fereastră mare.** Fă fereastra de `1000 × 600` schimbând **doar constantele** `LATIME` și `INALTIME` și pozițiile `y` ale textelor, ca totul să rămână centrat

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| `ModuleNotFoundError: No module named 'pygame'` | Pygame nu este instalat | Tools → Manage packages → pygame |
| Fereastra se deschide și se închide imediat | Lipsește bucla `while` | Pune codul într-un `while ruleaza:` |
| Fereastra „îngheață” și nu răspunde | Nu citești evenimentele | Apelează `pygame.event.get()` la fiecare cadru |
| Ecranul rămâne negru | Ai uitat `pygame.display.flip()` | `pygame.display.flip()` la sfârșitul cadrului |
| `TypeError: size must be two numbers` | `set_mode(600, 400)` fără paranteze duble | `set_mode((600, 400))` |
| Textul nu apare | Ai creat textul, dar nu l-ai lipit pe ecran | `ecran.blit(text, (x, y))` |
| Textul se vede doar un moment | `blit` este înainte de `fill`, deci este acoperit | Mai întâi `fill`, apoi `blit` |

---

## Recapitulare pe scurt

- Structura unui joc: `init` → bucla (`evenimente` → `actualizare` → `desenare` → `flip`) → `quit`.
- `pygame.display.set_mode((lățime, înălțime))` creează fereastra.
- `pygame.QUIT` apare când închizi fereastra; `KEYDOWN` la o tastă; `MOUSEBUTTONDOWN` la click.
- Culoarea este `(R, G, B)`, fiecare între 0 și 255.
- În Pygame, `(0, 0)` este în **stânga-sus**, iar `y` crește **în jos**.
- `font.render(...)` creează textul ca imagine, iar `ecran.blit(...)` îl lipește pe ecran.

---

## Quiz scurt
- Care sunt pașii unui joc Pygame, de la `init` la `quit`?  
- Ce apare când închizi fereastra jocului?  
- Cum arată o culoare în Pygame?  
- Unde este `(0, 0)` și încotro crește `y`?  
- Cum afișezi un text pe ecran?  

---

---

## Temă
1. Refă **4 exemple la alegere** din cele 8, scrise de tine (nu copiate).  
2. Fă un **ecran de start** pentru jocul pe care îți dorești să-l faci în acest modul.  
3. Fă fereastra să afișeze în titlu **cât a trecut de la pornire** (în secunde). Indiciu: `pygame.display.set_caption(...)` în buclă și `pygame.time.get_ticks() // 1000`.  
4. **Culori făcute de tine.** Alege 6 culori noi, scrie-le ca `(R, G, B)` și numește-le. Cum faci **un gri deschis**? Dar **un roz**? Indiciu: gri înseamnă că cele trei numere sunt egale.  
5. **Explică pe foaie:** ce face bucla jocului și de ce se repetă? De ce se desenează totul din nou la fiecare cadru? Ce reprezintă numerele `(255, 140, 0)`?  
6. **Bonus:** fă o fereastră care devine **gri** la tasta `G`, **roșie** la `R` și **albastră** la `B`.  
7. Salvează totul ca `Tema_P4_L1_Prenume_Nume.py`.

### Exemple pentru acasă
Aceste exemple folosesc exact ce ai învățat azi. Scrie-le în Thonny, rulează-le și schimbă-le după preferințe.

#### Acasă 1 — Cât de mare este fereastra?

```python
import pygame

pygame.init()
LATIME = 800
INALTIME = 500
ecran = pygame.display.set_mode((LATIME, INALTIME))

print("Latime:", ecran.get_width())
print("Inaltime:", ecran.get_height())
print("Marime:", ecran.get_size())
print("Centrul ferestrei:", LATIME // 2, INALTIME // 2)

pygame.quit()
```

**Ieșire:**
```text
Latime: 800
Inaltime: 500
Marime: (800, 500)
Centrul ferestrei: 400 250
```

Punem lățimea și înălțimea în **constante** (`LATIME`, `INALTIME`), ca să le schimbăm într-un singur loc. Observă coordonatele în Pygame: **originea `(0, 0)` este în colțul din STÂNGA-SUS**. `x` crește spre **dreapta**, iar `y` crește în **jos** (invers față de Turtle!). Centrul ferestrei este la `(400, 250)`.

#### Acasă 2 — Culoarea se schimbă la click

```python
import random
import pygame

pygame.init()
ecran = pygame.display.set_mode((600, 400))
culoare = (0, 0, 0)

ruleaza = True
while ruleaza:
    for eveniment in pygame.event.get():
        if eveniment.type == pygame.QUIT:
            ruleaza = False
        if eveniment.type == pygame.MOUSEBUTTONDOWN:
            culoare = (random.randint(0, 255), random.randint(0, 255), random.randint(0, 255))

    ecran.fill(culoare)
    pygame.display.flip()

pygame.quit()
```

**Ce vezi pe ecran:** fundal **negru**. La fiecare **click cu mouse-ul**, fundalul capătă o **culoare nouă, aleasă la întâmplare** (câte un număr de la 0 la 255 pentru roșu, verde și albastru).

`pygame.MOUSEBUTTONDOWN` apare când apeși un buton al mouse-ului. Poziția click-ului este în `eveniment.pos`, o pereche `(x, y)`.

### Încă două exerciții

**Ce afișează?** Gândește-te, apoi verifică în Thonny:

```python
import pygame

pygame.init()
ecran = pygame.display.set_mode((400, 300))
print(ecran.get_width() // 2)
print(ecran.get_height() - 100)
print((255, 128, 0)[1])
pygame.quit()
```

**Găsește greșelile.** Programul are 3 greșeli. Rescrie-l corect:

```text
import pygame
pygame.init()
ecran = pygame.display.set_mode(600, 400)
while ruleaza:
    for eveniment in pygame.event.get()
        if eveniment.type == pygame.QUIT:
            ruleaza = False
    ecran.fill((30, 30, 60))
    pygame.display.flip()
pygame.quit()
```

---

## Răspunsuri la bonus
Uită-te aici doar după ce ai încercat singur. Există mai multe soluții bune; a ta poate arăta diferit, important este să funcționeze. Fiecare cod este un program întreg, pornit de la „Ecranul meu de start” (Exemplul 8).

### 1. Fundal automat
```python
import pygame

pygame.init()
LATIME = 700
INALTIME = 450
ecran = pygame.display.set_mode((LATIME, INALTIME))
pygame.display.set_caption("Jocul meu")
ceas = pygame.time.Clock()

font_titlu = pygame.font.Font(None, 90)
font_mic = pygame.font.Font(None, 36)

culori_fundal = [(20, 20, 60), (60, 20, 60), (20, 60, 60)]
indice = 0
ultima_schimbare = 0

def scrie_centrat(text, font, culoare, y):
    imagine = font.render(text, True, culoare)
    x = (LATIME - imagine.get_width()) // 2
    ecran.blit(imagine, (x, y))

ruleaza = True
while ruleaza:
    for eveniment in pygame.event.get():
        if eveniment.type == pygame.QUIT:
            ruleaza = False
        if eveniment.type == pygame.KEYDOWN:
            if eveniment.key == pygame.K_ESCAPE:
                ruleaza = False
            if eveniment.key == pygame.K_SPACE:
                indice = (indice + 1) % len(culori_fundal)

    acum = pygame.time.get_ticks()
    if acum - ultima_schimbare >= 2000:
        indice = (indice + 1) % len(culori_fundal)
        ultima_schimbare = acum

    ecran.fill(culori_fundal[indice])
    pygame.draw.rect(ecran, (255, 255, 255), (10, 10, LATIME - 20, INALTIME - 20), 4)
    scrie_centrat("JOCUL MEU", font_titlu, (255, 220, 0), 120)
    scrie_centrat("Apasa SPATIU pentru alta culoare", font_mic, (255, 255, 255), 250)
    scrie_centrat("Escape = iesire", font_mic, (180, 180, 180), 300)
    pygame.display.flip()
    ceas.tick(60)

pygame.quit()
```
**Ce vezi pe ecran:** ecranul de start obișnuit, dar fundalul trece singur la următoarea culoare din 2 în 2 secunde; SPAȚIU funcționează în continuare. Ideea: `ultima_schimbare` ține minte *când* s-a schimbat ultima dată culoarea, iar `acum - ultima_schimbare >= 2000` înseamnă „au trecut 2000 de milisecunde”.

### 2. Mouse pe ecran
```python
import pygame

pygame.init()
LATIME = 700
INALTIME = 450
ecran = pygame.display.set_mode((LATIME, INALTIME))
pygame.display.set_caption("Jocul meu")
ceas = pygame.time.Clock()

font_titlu = pygame.font.Font(None, 90)
font_mic = pygame.font.Font(None, 36)

culori_fundal = [(20, 20, 60), (60, 20, 60), (20, 60, 60)]
indice = 0

def scrie_centrat(text, font, culoare, y):
    imagine = font.render(text, True, culoare)
    x = (LATIME - imagine.get_width()) // 2
    ecran.blit(imagine, (x, y))

ruleaza = True
while ruleaza:
    for eveniment in pygame.event.get():
        if eveniment.type == pygame.QUIT:
            ruleaza = False
        if eveniment.type == pygame.KEYDOWN:
            if eveniment.key == pygame.K_ESCAPE:
                ruleaza = False
            if eveniment.key == pygame.K_SPACE:
                indice = (indice + 1) % len(culori_fundal)

    ecran.fill(culori_fundal[indice])
    pygame.draw.rect(ecran, (255, 255, 255), (10, 10, LATIME - 20, INALTIME - 20), 4)
    scrie_centrat("JOCUL MEU", font_titlu, (255, 220, 0), 120)
    scrie_centrat("Apasa SPATIU pentru alta culoare", font_mic, (255, 255, 255), 250)
    scrie_centrat("Escape = iesire", font_mic, (180, 180, 180), 300)
    pozitie = pygame.mouse.get_pos()
    scrie_centrat("Mouse: " + str(pozitie[0]) + ", " + str(pozitie[1]), font_mic, (255, 255, 255), INALTIME - 60)
    pygame.display.flip()
    ceas.tick(60)

pygame.quit()
```
**Ce vezi pe ecran:** jos apare textul „Mouse: x, y”, care se schimbă când miști mouse-ul deasupra ferestrei. `get_pos()` dă o pereche `(x, y)`, iar `pozitie[0]` și `pozitie[1]` sunt cele două numere. Textul se redesenează în fiecare cadru, deci numerele sunt mereu la zi.

### 3. Steag
```python
import pygame

pygame.init()
LATIME = 700
INALTIME = 450
ecran = pygame.display.set_mode((LATIME, INALTIME))
pygame.display.set_caption("Jocul meu")
ceas = pygame.time.Clock()

font_titlu = pygame.font.Font(None, 90)
font_mic = pygame.font.Font(None, 36)

culori_fundal = [(20, 20, 60), (60, 20, 60), (20, 60, 60)]
indice = 0

def scrie_centrat(text, font, culoare, y):
    imagine = font.render(text, True, culoare)
    x = (LATIME - imagine.get_width()) // 2
    ecran.blit(imagine, (x, y))

ruleaza = True
while ruleaza:
    for eveniment in pygame.event.get():
        if eveniment.type == pygame.QUIT:
            ruleaza = False
        if eveniment.type == pygame.KEYDOWN:
            if eveniment.key == pygame.K_ESCAPE:
                ruleaza = False
            if eveniment.key == pygame.K_SPACE:
                indice = (indice + 1) % len(culori_fundal)

    ecran.fill(culori_fundal[indice])
    pygame.draw.rect(ecran, (255, 255, 255), (10, 10, LATIME - 20, INALTIME - 20), 4)
    scrie_centrat("JOCUL MEU", font_titlu, (255, 220, 0), 120)
    pygame.draw.rect(ecran, (255, 0, 0), (260, 190, 60, 45))
    pygame.draw.rect(ecran, (255, 220, 0), (320, 190, 60, 45))
    pygame.draw.rect(ecran, (0, 120, 255), (380, 190, 60, 45))
    scrie_centrat("Apasa SPATIU pentru alta culoare", font_mic, (255, 255, 255), 250)
    scrie_centrat("Escape = iesire", font_mic, (180, 180, 180), 300)
    pygame.display.flip()
    ceas.tick(60)

pygame.quit()
```
**Ce vezi pe ecran:** între titlu și text apar trei dreptunghiuri lipite — roșu, galben, albastru. Fiecare e lat de 60, deci al doilea începe la `260 + 60 = 320` și al treilea la `380`; împreună acoperă de la `260` la `440`, adică exact centrat într-o fereastră de 700.

### 4. Fereastră mare
```python
import pygame

pygame.init()
LATIME = 1000
INALTIME = 600
ecran = pygame.display.set_mode((LATIME, INALTIME))
pygame.display.set_caption("Jocul meu")
ceas = pygame.time.Clock()

font_titlu = pygame.font.Font(None, 90)
font_mic = pygame.font.Font(None, 36)

culori_fundal = [(20, 20, 60), (60, 20, 60), (20, 60, 60)]
indice = 0

def scrie_centrat(text, font, culoare, y):
    imagine = font.render(text, True, culoare)
    x = (LATIME - imagine.get_width()) // 2
    ecran.blit(imagine, (x, y))

ruleaza = True
while ruleaza:
    for eveniment in pygame.event.get():
        if eveniment.type == pygame.QUIT:
            ruleaza = False
        if eveniment.type == pygame.KEYDOWN:
            if eveniment.key == pygame.K_ESCAPE:
                ruleaza = False
            if eveniment.key == pygame.K_SPACE:
                indice = (indice + 1) % len(culori_fundal)

    ecran.fill(culori_fundal[indice])
    pygame.draw.rect(ecran, (255, 255, 255), (10, 10, LATIME - 20, INALTIME - 20), 4)
    scrie_centrat("JOCUL MEU", font_titlu, (255, 220, 0), INALTIME // 3)
    scrie_centrat("Apasa SPATIU pentru alta culoare", font_mic, (255, 255, 255), INALTIME // 3 + 130)
    scrie_centrat("Escape = iesire", font_mic, (180, 180, 180), INALTIME // 3 + 180)
    pygame.display.flip()
    ceas.tick(60)

pygame.quit()
```
**Ce vezi pe ecran:** o fereastră de `1000 × 600` cu rama albă pe margini (ea folosește `LATIME` și `INALTIME`) și cu titlul și textele centrate. Pozițiile `y` sunt calculate din `INALTIME // 3`, așa că rămân frumoase la orice mărime.

---
## Ce urmează — Lecția 2
**Forme, culori și imagini**: desenăm dreptunghiuri, cercuri, linii și creăm imaginile pentru personajele noastre.
