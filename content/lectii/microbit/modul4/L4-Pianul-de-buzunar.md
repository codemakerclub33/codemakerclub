# LECȚIA 4 — Pianul de buzunar
### Note, melodii și frecvențe
**Modulul 2 · Python pe micro:bit · 2 ore**  
**Code Maker Club · micro:bit Python Pro**

> Azi dai **voce** plăcii tale! Cânți note, melodii mici și faci un **pian de buzunar** care își amintește ce ai cântat.  
> Proiect: **„Pianul de buzunar”** · `Prenume_Nume_MP2_L04`

---

## Ce facem azi
La finalul orei scrii **note** ca text, cânți o **melodie dintr-o listă** și cânți o **frecvență** exactă. Muzica e și matematică: fiecare notă are o frecvență, adică un număr de vibrații pe secundă. O melodie e o **listă** de note, exact ce ai învățat în lecția 2.

> **Sunetul:** placa **micro:bit V2** are difuzor. Pe **V1** conectează un **buzzer pasiv** (sau căști) între **pin 0** și **GND**, cu cleme crocodil. Codul e același. Dacă nu ai sunet, programul merge oricum: pianul arată pe ecran numărul notei.

> **Ai grijă la urechi:** ține volumul rezonabil, nu pune placa lângă ureche și fă pauze.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap: listele din L2 și `range` cu pas din L3 |
| 10–40 | Note, melodii în liste, pauze, tempo, `music.pitch` |
| 40–70 | Pianul (**Minim**) |
| 70–105 | Înregistrarea și redarea (**Complet**) |
| 105–120 | Recapitulare, quiz, temă |

Exercițiile B–E și Provocarea sunt pentru cine termină mai repede, sau pentru acasă.

**Ce ai nevoie:** [python.microbit.org](https://python.microbit.org) · placa micro:bit · cablu USB de date · (pe V1) buzzer pasiv sau căști

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `import music` | Aduce uneltele pentru sunet; se scrie sus | `import music` |
| `music.play(lista)` | Cântă o listă de note, una după alta | `music.play(["c4:4", "e4:4"])` |
| `"c4:4"` | O notă: **nume**, **octavă**, `:` și **durata**; `"r:4"` e pauză | `"g4:2"`, `"r:2"` |
| `music.set_tempo(bpm=120)` | Alege viteza melodiei, în bătăi pe minut | `music.set_tempo(bpm=160)` |
| `music.pitch(Hz, ms)` | Cântă o frecvență exactă, câteva milisecunde | `music.pitch(440, 300)` |

**Ajutor în editor:** în panoul **Reference** caută `Sound`.

---

## Pas cu pas

### 1) Notele în Python
O notă se scrie ca **text**, între ghilimele: `"c4:4"`.

| Parte | Înseamnă |
|-------|----------|
| `c` | numele notei (`c d e f g a b`) |
| `4` | octava (cu cât mai mare, cu atât mai ascuțit) |
| `:4` | durata, în „bătăi” mici (`4` = o bătaie obișnuită) |
| `r` | pauză (de exemplu `"r:4"`) |

Cu `#` (diez) devine mai ascuțită: `"f#4:4"`. Cu `b` (bemol), mai gravă: `"bb4:4"`.

### Exemplul 1 — Prima notă
```python
from microbit import *
import music

display.show(Image.MUSIC_CROTCHET)
music.play(["c4:4"])
display.clear()
```
Auzi un **do**.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 1** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 2 — O gamă
Mai multe note, într-o **listă**:
```python
from microbit import *
import music

gama = ["c4:4", "d4:4", "e4:4", "f4:4", "g4:4", "a4:4", "b4:4", "c5:4"]
music.play(gama)
```
Placa cântă do, re, mi, fa, sol, la, si, do.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 2** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 3 — Durate și pauze
```python
from microbit import *
import music

music.play(["c4:2", "c4:2", "g4:2", "g4:2", "a4:2", "a4:2", "g4:4"])
sleep(500)
music.play(["e4:2", "r:2", "e4:2", "r:2", "g4:4"])
```
Notele cu `:2` sunt scurte, cea cu `:4` e mai lungă. În a doua melodie, `r:2` e o **pauză** scurtă. Cunoști prima melodie?

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 3** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 4 — Tempo
```python
from microbit import *
import music

music.set_tempo(bpm=160)
music.play(["e4:2", "r:2", "e4:2", "r:2", "g4:4"])
music.set_tempo(bpm=120)
```
`bpm` înseamnă **bătăi pe minut**. Sub `120` cântă mai încet, peste `120` mai repede. La final punem tempoul înapoi la `120`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 4** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 5 — Melodii gata făcute
Modulul `music` are melodii în el:
```python
from microbit import *
import music

music.play(music.BA_DING)
sleep(500)
music.play(music.POWER_UP)
```
Încearcă și `music.JUMP_UP`, `music.POWER_DOWN`, `music.WAWAWAWAA`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 5** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 6 — Frecvența cu `pitch`
`music.pitch(frecventa, durata)` cântă o frecvență exactă, în **hertzi** (`Hz`), timp de `durata` milisecunde:
```python
from microbit import *
import music

music.pitch(262, 300)
music.pitch(330, 300)
music.pitch(392, 300)

for f in range(400, 800, 40):
    music.pitch(f, 60)
for f in range(800, 400, -40):
    music.pitch(f, 60)
```
**Ce auzi:** trei note (do, mi, sol), apoi o **sirenă** care urcă și coboară. Cu cât numărul e mai mare, cu atât sunetul e mai ascuțit. Frecvența trebuie să fie **număr întreg**.

> Fără durată (`music.pitch(440)`) sunetul ține până la `music.stop()`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 6** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### 2) Pianul
Ținem minte **ce notă** am ales cu variabila `i` (indexul în gamă). **A** urcă o notă, **B** coboară.

### Exemplul 7 — Pianul (Minim)
```python
from microbit import *
import music

gama = ["c4:4", "d4:4", "e4:4", "f4:4", "g4:4", "a4:4", "b4:4", "c5:4"]
i = 0

display.show(i + 1)

while True:
    a = button_a.was_pressed()
    b = button_b.was_pressed()

    if a:
        i = min(len(gama) - 1, i + 1)
        display.show(i + 1)
        music.play([gama[i]])
    elif b:
        i = max(0, i - 1)
        display.show(i + 1)
        music.play([gama[i]])
    sleep(100)
```
- **A** urcă, **B** coboară, iar pe ecran vezi numărul notei.  
- `min` și `max` opresc indexul la capete, între `0` și `7`.  
- `music.play([gama[i]])` cântă o singură notă, pusă într-o listă.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 7** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 8 — Pianul (Complet)
Fiecare notă cântată se **adaugă** într-o listă `inregistrat`. Păstrăm doar ultimele 16:
```python
from microbit import *
import music

gama = ["c4:4", "d4:4", "e4:4", "f4:4", "g4:4", "a4:4", "b4:4", "c5:4"]
MAXIM = 16
i = 0
inregistrat = []

def canta(n):
    global i
    i = n
    display.show(i + 1)
    music.play([gama[i]])
    inregistrat.append(gama[i])
    if len(inregistrat) > MAXIM:
        inregistrat.pop(0)

display.show(i + 1)

while True:
    a = button_a.was_pressed()
    b = button_b.was_pressed()

    if a and b:
        display.show(Image.MUSIC_QUAVER)
        music.play(inregistrat)
        display.show(i + 1)
    elif a:
        canta(min(len(gama) - 1, i + 1))
    elif b:
        canta(max(0, i - 1))
    sleep(100)
```
- `canta(n)` face **trei lucruri**: afișează, cântă și înregistrează.  
- **A+B** redă toată înregistrarea, cu `music.play(inregistrat)`.  
- `inregistrat.pop(0)` scoate cea mai veche notă, ca lista să nu depășească `16`.  
- `i` primește o valoare nouă în funcție, deci îl declarăm `global i`. Lista `inregistrat` doar o **modificăm** cu `append` și `pop`, deci nu are nevoie de `global`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 8** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## Greșeli frecvente
1. **„Nu se aude nimic”** — pe V1 verifică dacă buzzerul e conectat între **pin 0** și **GND**; pe V2 verifică dacă programul a ajuns pe placă.  
2. **„ValueError: invalid note”** — o notă e scrisă greșit, de exemplu `"h4:4"` (nu există nota `h`) sau `"c44"` (lipsesc `:`).  
3. **„TypeError la `pitch`”** — frecvența trebuie să fie **număr întreg**; folosește `int(...)` sau `//`.  
4. **„Pianul nu înregistrează”** — ai uitat `inregistrat.append(...)` în `canta`.  
5. **„Melodia se aude întreruptă”** — `music.play` așteaptă să termine nota; nu pune `sleep` între note când nu e nevoie.  
6. **„Nu pot opri sunetul”** — folosește `music.stop()`.  
7. **„IndexError în pian”** — indexul a ieșit din gamă; folosește `min` și `max`.

---

## De făcut azi — „Pianul de buzunar”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | 8 note · **A** urcă · **B** coboară · se aude nota și se vede numărul (Exemplul 7) |
| **Complet** | Minim + înregistrare (maxim `16` note) + redare la **A+B** (Exemplul 8) |

### Exercițiul A — „Pianul de buzunar” (obligatoriu)
Scrie programul din Exemplul 7 (Minim). Schimbă **gama**: pune alte note, de exemplu `"c4:4", "e4:4", "g4:4", "c5:4"`. Pentru **Complet**, adaugă înregistrarea, ca la Exemplul 8.

### Exercițiul B — Ce se aude?
`music.play(["g4:2", "r:2", "g4:2"])` — în ce ordine auzi sunete și pauze? Câte note sunt în lista `["c4:4", "d4:4", "e4:4"]` și ce dă `len(...)`?

### Exercițiul C — Melodia ta
Scrie o melodie de **8 note** într-o listă și cântă-o cu `music.play`. Apoi cântă-o de **două ori** cu o buclă `for`.

### Exercițiul D — Găsește greșelile
Programul are **4 greșeli**. Rescrie-l corect.
```text
import music

gama = ["c4:4", "d4:4", "e4:4"]
i = 0

while True:
    if button_a.was_pressed():
        i = i + 1
        music.play(gama(i))
```

### Exercițiul E — Explică
1. Ce înseamnă `"c4:4"`?  
2. De ce `canta` are `global i`, dar nu are `global inregistrat`?  
3. Ce face `r:2`?

**Gata când:**
- [ ] Se aude nota potrivită la **A** și **B** (sau o vezi pe ecran)  
- [ ] Ecranul arată numărul notei  
- [ ] Pianul nu iese din gamă  
- [ ] Ai testat cu un coleg (cu volum mic!)  
- [ ] Ai răspunsurile la B–E  

**→ Minim când:** un coleg cântă o melodie scurtă pe pianul tău, fără ajutor.

---

## Bonus ★★★ — Provocare: Metronomul
*Doar dacă ai terminat Complet.*

Metronomul bate ritmul pentru cine învață o melodie. **A** îl face mai rapid, **B** mai lent. Merge și fără sunet, pentru că bătaia se **vede** pe ecran.

**Ajutor:** pauza dintre bătăi, în milisecunde, e `60000 // bpm`. O bătaie scurtă: `music.pitch(880, 50)`, apoi `sleep(pauza - 50)`. Butoanele apăsate în timpul pauzei sunt ținute minte de `was_pressed()`.

- [ ] Începe de la `bpm = 100`
- [ ] La fiecare bătaie, `Image.HEART` se aprinde scurt și se stinge, cu un sunet scurt (`music.pitch(880, 50)`)
- [ ] **A** mărește `bpm` cu `10`, **B** îl scade cu `10`; rămâne între `40` și `200`
- [ ] Când schimbi viteza, placa derulează valoarea nouă a lui `bpm`
- [ ] **Scuturarea** pune `bpm` înapoi la `100`
- [ ] Salvează proiectul ca `Prenume_Nume_MP2_L04_Metronom`

## Recapitulare pe scurt
1. `import music`; o notă e text: `"c4:4"` (nume, octavă, durată).  
2. O melodie e o **listă** de note; `r` e pauză.  
3. `music.set_tempo(bpm=...)` alege viteza.  
4. `music.pitch(Hz, ms)` cântă o frecvență exactă, număr întreg.  
5. `min` și `max` păstrează indexul între limite.

**Schema pe scurt (pe foaie):** notă `"c4:4"` · listă = melodie · `play(lista)` · `set_tempo` · `pitch(Hz, ms)` · `append` înregistrează

## Quiz scurt
- Ce face `"r:4"`?  
- Cum cânți o melodie dintr-o listă?  
- Ce limite are `i` în pian?  
- Unde conectezi buzzerul pe V1?

## Temă
**Melodia mea.** Scrie acasă, în editor (merge și în simulator, fără placă), o melodie de **8 note** într-o listă și cântă-o de **două ori**, ca în Exercițiul C. Dacă simulatorul nu scoate sunet, afișează `len(melodie)` ca să verifici lista. Salvează-l ca `Prenume_Nume_MP2_L04_Tema`.

## Ce urmează — Lecția 5
Placa devine **busolă**: folosești senzorul magnetic ca să afli încotro e Nordul și arăți direcția pe ecran, cu litere ca N, E, S și V.

---

## Răspunsuri

**Exercițiul B:** Se aude o notă `g4`, apoi o **pauză**, apoi încă o notă `g4`. Lista are **3** note, iar `len(...)` dă `3`.

**Exercițiul C:**
```python
from microbit import *
import music

melodie = ["c4:4", "e4:4", "g4:4", "e4:4", "c4:4", "e4:4", "g4:4", "c5:8"]

for tura in range(2):
    music.play(melodie)
    sleep(300)
```

**Exercițiul D:** 1) lipsește `from microbit import *`. 2) `gama(i)` trebuie `gama[i]` (paranteze drepte), iar la `music.play` pui nota într-o listă: `music.play([gama[i]])`. 3) `i` poate depăși lista (`IndexError`): trebuie `min(len(gama) - 1, i + 1)`. 4) bucla nu are `sleep`.

**Exercițiul E:** 1) Nota **do** din octava `4`, cu durata `4`. 2) `i` primește o valoare nouă (`i = n`), deci e nevoie de `global`; la `inregistrat` doar **modificăm** lista cu `append` și `pop`, nu o înlocuim. 3) E o **pauză** scurtă, cu durata `2`.

**Bonus ★★★ — Metronomul:**

*Schema logicii:*
1. Pornești cu `bpm = 100`. Pauza dintre bătăi e `60000 // bpm` milisecunde.  
2. La fiecare tură: aprinzi inima, dai un sunet scurt (`music.pitch(880, 50)`), stingi ecranul și aștepți `pauza - 50`.  
3. **A** mărește `bpm` cu `10`, **B** îl scade cu `10`. `min` și `max` îl țin între `40` și `200`. După fiecare schimbare derulezi valoarea nouă.  
4. Scuturarea pune `bpm` înapoi la `100`.

```python
from microbit import *
import music

bpm = 100

while True:
    pauza = 60000 // bpm
    display.show(Image.HEART)
    music.pitch(880, 50)
    display.clear()
    sleep(pauza - 50)

    if button_a.was_pressed():
        bpm = min(200, bpm + 10)
        display.scroll(bpm)
    if button_b.was_pressed():
        bpm = max(40, bpm - 10)
        display.scroll(bpm)
    if accelerometer.was_gesture("shake"):
        bpm = 100
        display.scroll(bpm)
```
- `60000 // bpm` dă pauza: `60000` ms într-un minut, împărțite la câte bătăi sunt într-un minut.  
- Sunetul durează `50` ms, de aceea așteptăm doar `pauza - 50`, ca ritmul să rămână corect.  
- `was_pressed()` ține minte o apăsare făcută în timpul pauzei, deci nu pierzi apăsările.  
- La `200` bpm pauza e `300` ms, deci `pauza - 50` rămâne pozitiv.
