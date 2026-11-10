# LECȚIA 5 — Busola digitală
### Grade, direcții și un ac care arată spre Nord
**Modulul 2 · Python pe micro:bit · 2 ore**  
**Code Maker Club · micro:bit Python Pro**

> Placa ta are în ea o **busolă**: un mic senzor care simte câmpul magnetic al Pământului. Azi o înveți să-ți spună **încotro ești întors** și faci o busolă cu **ac**, care arată mereu spre Nord.  
> Proiect: **„Busola digitală”** · `Prenume_Nume_MP2_L05`

---

## Ce facem azi
La finalul orei **calibrezi** busola, citești `compass.heading()`, transformi **gradele** într-o direcție (litere sau săgeată) și folosești o **listă de săgeți**. Busola ajută drumeții, pilotul și barca de pe mare. Azi transformi un **număr** (de la `0` la `359`) într-o informație pe care o înțelege oricine: litera sau săgeata potrivită.

> **Atenție:** busola e **sensibilă la magneți**. Ține placa departe de telefoane, boxe, cleme magnetice și metale mari, și nu o folosi chiar lângă laptop. Ține-o și **orizontală**, ca pe o tavă.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap: `//`, `%` și listele din lecțiile anterioare |
| 10–30 | Cum merge busola: calibrare, grade, direcții |
| 30–65 | Busola cu litere (**Minim**) |
| 65–105 | Săgeți, acul spre Nord, recalibrare (**Complet**) |
| 105–120 | Recapitulare, quiz, temă |

Exercițiile B–E și Provocarea sunt pentru cine termină mai repede, sau pentru acasă.

**Ce ai nevoie:** [python.microbit.org](https://python.microbit.org) · placa micro:bit · cablu USB de date

---

## Instrucțiuni noi azi

`//` (împărțire fără zecimale) și `%` (restul împărțirii) le știi deja. Azi adăugăm:

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `compass.calibrate()` | Pornește calibrarea busolei (mini-joc cu înclinarea plăcii) | primul rând după `from microbit import *` |
| `compass.heading()` | Încotro ești întors, în grade, de la `0` la `359` | `h = compass.heading()` |
| `((h + 45) // 90) % 4` | Transformă gradele într-un număr de la `0` la `3` (N, E, S, V) | `h = 100` dă `1` |
| `Image.ALL_ARROWS[i]` | O listă cu 8 săgeți, de la `N` în sensul acelor de ceasornic | `Image.ALL_ARROWS[2]` e săgeata spre Est |
| `(8 - s) % 8` | Întoarce un sector pe partea opusă, ca acul să arate spre Nord | `s = 2` dă `6` |

**Ajutor în editor:** în panoul **Reference** caută `Compass` și `Images`.

---

## Pas cu pas

### 1) Gradele busolei
Busola dă un număr între `0` și `359` (grade), măsurat de la **Nord**, în sensul acelor de ceasornic:

| Grade | Direcție |
|-------|----------|
| `0` | Nord (N) |
| `90` | Est (E) |
| `180` | Sud (S) |
| `270` | Vest (V) |

Numărul crește când te învârți în sensul acelor de ceasornic. `360` de grade e un cerc complet, adică din nou Nord.

### 2) Calibrarea
La început placa trebuie să învețe unde e câmpul magnetic. `compass.calibrate()` pornește un **mini-joc**: pe ecran se derulează `TILT TO FILL SCREEN`, iar tu **înclini placa** în toate direcțiile, ca să **umpli ecranul** cu puncte. Când s-au aprins toate LED-urile, apare o **față zâmbitoare**. Calibrezi după ce pornești placa și când te muți în alt loc.

### Exemplul 1 — Calibrăm
```python
from microbit import *

compass.calibrate()
display.show(Image.YES)
```
Înclină placa până se umple ecranul, apoi vezi fața zâmbitoare și, după ea, bifa.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 1** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 2 — Citim gradele
```python
from microbit import *

compass.calibrate()

while True:
    h = compass.heading()
    display.scroll(str(h))
    sleep(300)
```
Întoarce-te încet în cerc: numărul crește de la `0` la `359`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 2** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### 3) Împărțim cercul în 4
Vrem litera: N, E, S sau V. Fiecare ocupă `90` de grade, dar „Nord” e în jurul lui `0`, adică de la `315` la `45`. Adunăm `45`, împărțim la `90` și luăm restul la `4`:

| `h` | `h + 45` | `// 90` | `% 4` | Direcție |
|-----|----------|---------|-------|----------|
| 10 | 55 | 0 | 0 | N |
| 100 | 145 | 1 | 1 | E |
| 190 | 235 | 2 | 2 | S |
| 280 | 325 | 3 | 3 | V |
| 350 | 395 | 4 | 0 | N |

### Exemplul 3 — Litera direcției
```python
from microbit import *

def directie4(h):
    litere = ["N", "E", "S", "V"]
    return litere[((h + 45) // 90) % 4]

display.scroll(directie4(10))
display.scroll(directie4(100))
display.scroll(directie4(350))
```
**Ce vezi pe placă:** `N`, `E`, `N`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 3** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 4 — Busola (Minim)
```python
from microbit import *

def directie4(h):
    litere = ["N", "E", "S", "V"]
    return litere[((h + 45) // 90) % 4]

compass.calibrate()

while True:
    h = compass.heading()
    display.show(directie4(h))
    sleep(200)
```
Rotește-te: litera se schimbă între `N`, `E`, `S` și `V`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 4** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### 4) Săgeți: 8 sectoare
Pentru **8 sectoare** de câte `45` de grade adunăm `22`, împărțim la `45` și luăm restul la `8`. `Image.ALL_ARROWS` e o **listă cu 8 săgeți**, în ordinea `N, NE, E, SE, S, SV, V, NV`, deci sectorul e chiar **indexul** săgeții.

### Exemplul 5 — Săgeata direcției
```python
from microbit import *

def sector8(h):
    return ((h + 22) // 45) % 8

for h in [0, 50, 90, 140, 200, 275, 330]:
    display.show(Image.ALL_ARROWS[sector8(h)])
    sleep(700)
```
**Ce vezi pe placă:** săgeata se rotește în sensul acelor de ceasornic: sus, dreapta-sus, dreapta, dreapta-jos, jos, stânga, stânga-sus.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 5** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### 5) Acul care arată spre Nord
Dacă ești întors spre **Est** (sectorul `2`), Nordul e **la stânga ta**, deci acul trebuie să arate spre **Vest** (indexul `6`). Formula: `(8 - sector) % 8`. Acul **nu** arată direcția ta, ci locul fix al Nordului, de aceea se rotește în sens opus.

### Exemplul 6 — Funcția `ac`
```python
from microbit import *

def ac(h):
    s = ((h + 22) // 45) % 8
    return Image.ALL_ARROWS[(8 - s) % 8]

display.show(ac(0))
sleep(1000)
display.show(ac(90))
sleep(1000)
display.show(ac(180))
```
**Ce vezi pe placă:** o săgeată în sus (`N`), apoi spre stânga (`V`), apoi în jos (`S`).

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 6** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 7 — Busola cu ac (Complet)
```python
from microbit import *

def ac(h):
    s = ((h + 22) // 45) % 8
    return Image.ALL_ARROWS[(8 - s) % 8]

compass.calibrate()
display.show(Image.YES)
sleep(800)

while True:
    a = button_a.was_pressed()
    b = button_b.was_pressed()

    if a:
        compass.calibrate()
        display.show(Image.YES)
        sleep(800)
    elif b:
        display.scroll(str(compass.heading()))

    display.show(ac(compass.heading()))
    sleep(200)
```
- **A** → recalibrează (de exemplu când te muți în altă sală).  
- **B** → derulează gradele.  
- Altfel, săgeata arată **spre Nord**, oriunde te-ai învârti.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 7** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## Greșeli frecvente
1. **„Busola arată prostii”** — nu ai calibrat, ții placa înclinată sau ești lângă un magnet (telefon, boxă). Mută-te și recalibrează.  
2. **„Săgeata arată invers”** — ai folosit direct sectorul, nu `(8 - s) % 8`.  
3. **„IndexError”** — indexul nu e între `0` și `7`; folosește `% 8`.  
4. **„`display.scroll(h)` nu arată ce vreau”** — pentru text lipit de număr folosește `str(h)`.  
5. **„Nu pot ieși din calibrare”** — umple tot ecranul înclinând placa, apoi se termină.  
6. **„Nordul nu e spre fereastră”** — corect: Nordul e **magnetic**, nu spre fereastră sau ușă. Verifică cu o busolă de turist.  
7. **„SyntaxError”** — la `compass.heading()` lipsesc parantezele, sau ai uitat `)` la sfârșitul unei linii.

---

## De făcut azi — „Busola digitală”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Calibrare · literele N, E, S, V care se schimbă (Exemplul 4) |
| **Complet** | Minim + acul spre Nord, cu săgeți + **A** recalibrează + **B** arată gradele (Exemplul 7) |

### Exercițiul A — „Busola digitală” (obligatoriu)
Scrie programul din Exemplul 4 (Minim). Rotește-te și verifică litera cu o busolă adevărată (sau cu aplicația din telefon, ținută **departe** de placă). Pentru **Complet**, folosește Exemplul 7.

### Exercițiul B — Care direcție?
Cu formula `((h + 45) // 90) % 4`, ce direcție dă: `h = 80`, `h = 200`, `h = 300`, `h = 359`?

### Exercițiul C — Alarma de Nord
Scrie un program care afișează `Image.YES` când placa e întoarsă spre **Nord**, cu o greșeală de cel mult `15` grade (`h <= 15` **sau** `h >= 345`). Altfel afișează `Image.NO`.

### Exercițiul D — Găsește greșelile
Programul are **4 greșeli**. Rescrie-l corect.
```text
def directie4(h):
    litere = ["N", "E", "S", "V"]
    return litere[(h + 45) / 90]

while True:
    h = compass.heading
    display.show(directie4(h)
    sleep(200)
```

### Exercițiul E — Explică
1. De ce adunăm `45` înainte să împărțim la `90`?  
2. Ce face `% 4`, sau `% 8`, la final?  
3. De ce acul arată spre Nord și nu spre direcția în care ești întors?

**Gata când:**
- [ ] Busola e calibrată și arată litera corectă  
- [ ] Ai verificat-o cu o busolă adevărată  
- [ ] Nu apare `IndexError`  
- [ ] Ai testat cu un coleg  
- [ ] Ai răspunsurile la B–E  

**→ Minim când:** un coleg se întoarce și spune corect direcția citită de placă.

---

## Bonus ★★★ — Provocare: Busola cu 8 direcții
*Doar dacă ai terminat Complet.*

Placa scrie direcția cu **litere**, din 8: `N`, `NE`, `E`, `SE`, `S`, `SV`, `V`, `NV`. Numele se vede o singură dată, când te întorci spre altă direcție.

**Ajutor:** numele sunt într-o listă, în aceeași ordine cu săgețile: `["N", "NE", "E", "SE", "S", "SV", "V", "NV"]`. Sectorul e `s = ((h + 22) // 45) % 8`. Ca numele să nu se tot repete, ține minte într-o variabilă `ultima` sectorul de data trecută și derulează doar când `s` e **altul**.

- [ ] Placa calibrează la pornire, apoi derulează direcția cu litere (`N`, `NE`, `E`, …)
- [ ] Numele derulează **doar** când direcția se schimbă, nu la fiecare tură
- [ ] **B** derulează gradele, iar **A** recalibrează
- [ ] Ai verificat cel puțin **4 direcții** cu o busolă adevărată sau cu o aplicație
- [ ] Salvează proiectul ca `Prenume_Nume_MP2_L05_Busola8`

## Recapitulare pe scurt
1. `compass.heading()` dă gradele de la `0` la `359` (`0` = Nord).  
2. Înainte de utilizare: `compass.calibrate()`.  
3. Cu `+ jumătate`, `//` și `%` transformăm gradele într-un **sector**.  
4. `Image.ALL_ARROWS` e o listă cu 8 săgeți, iar sectorul e indexul lor.  
5. Acul spre Nord: `(8 - sector) % 8`.  
6. Magneții strică busola.

**Schema pe scurt (pe foaie):** grade `0`–`359` · `+ 45` → `// 90` → `% 4` · `+ 22` → `// 45` → `% 8` · lista de săgeți · ac = `(8 - s) % 8`

## Quiz scurt
- Ce grade are Estul?  
- Ce face `calibrate()`?  
- Câte săgeți are `Image.ALL_ARROWS`?  
- Ce strică busola?

## Temă
**Jocul Estului.** Scrie acasă, în editor (merge și în simulator, fără placă; busola se mișcă din simulator), un program care arată `Image.HAPPY` când busola e întoarsă spre **Est**, cu o greșeală de cel mult `20` de grade, și `Image.SAD` în rest. Salvează-l ca `Prenume_Nume_MP2_L05_Tema`.

## Ce urmează — Lecția 6
Placa devine **joc**: o bilă într-un labirint, pe care o miști **înclinând** placa. Folosim accelerometrul, ca la nivelă, dar cu o hartă făcută din liste de text.

---

## Răspunsuri

**Exercițiul B:** `h = 80` → `(125 // 90) % 4 = 1` → **E**. `h = 200` → `(245 // 90) % 4 = 2` → **S**. `h = 300` → `(345 // 90) % 4 = 3` → **V**. `h = 359` → `(404 // 90) % 4 = 4 % 4 = 0` → **N**.

**Exercițiul C:**
```python
from microbit import *

compass.calibrate()

while True:
    h = compass.heading()
    if h <= 15 or h >= 345:
        display.show(Image.YES)
    else:
        display.show(Image.NO)
    sleep(200)
```

**Exercițiul D:** 1) `(h + 45) / 90` dă număr zecimal; trebuie `//` și `% 4`: `((h + 45) // 90) % 4`. 2) `compass.heading` nu are paranteze: `compass.heading()`. 3) la `display.show(directie4(h)` lipsește `)`. 4) lipsesc `from microbit import *` și calibrarea (`compass.calibrate()`).

**Exercițiul E:** 1) Ca sectorul Nord să fie centrat pe `0` grade (de la `315` la `45`) și să nu înceapă în `0`. 2) Face ca indexul să rămână între `0` și `3` (sau `0` și `7`): după ultimul sector revenim la primul. 3) Pentru că un ac de busolă arată **locul fix** (Nord), iar noi ne rotim: săgeata trebuie să se rotească în sens opus.

**Bonus ★★★ — Busola cu 8 direcții:**

*Schema logicii:*
1. Ai o listă `nume` cu cele 8 direcții și o variabilă `ultima = -1` (nicio direcție încă).  
2. Calibrezi la pornire.  
3. La fiecare tură: **A** recalibrează, **B** derulează gradele. Calculezi sectorul `s = ((h + 22) // 45) % 8`.  
4. Dacă `s` e diferit de `ultima`, derulezi `nume[s]` și pui `ultima = s`.

```python
from microbit import *

nume = ["N", "NE", "E", "SE", "S", "SV", "V", "NV"]
ultima = -1

compass.calibrate()
display.show(Image.YES)
sleep(800)

while True:
    if button_a.was_pressed():
        compass.calibrate()
        display.show(Image.YES)
        sleep(800)
    if button_b.was_pressed():
        display.scroll(str(compass.heading()))
    s = ((compass.heading() + 22) // 45) % 8
    if s != ultima:
        display.scroll(nume[s])
        ultima = s
    sleep(200)
```
- `ultima = -1` e un număr care nu e niciun sector, deci prima direcție se derulează sigur.  
- `s != ultima` înseamnă „s e diferit de ultima”. Numele se derulează o singură dată pentru fiecare direcție nouă.  
- Lista `nume` are aceeași ordine ca `Image.ALL_ARROWS`, deci sectorul `s` e indexul potrivit în ambele liste.
