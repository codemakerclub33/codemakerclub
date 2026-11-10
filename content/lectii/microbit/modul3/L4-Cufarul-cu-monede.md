# LECȚIA 4 — Cufărul cu monede
### Variabile și condiții
**Modulul 1 · Python pe micro:bit · 2 ore**  
**Code Maker Club · micro:bit Coder**

> Azi placa **ține minte** lucruri: câte monede ai, câte ai cheltuit. Folosim **variabile**, **calcule** și **condiții**.  
> Proiect: **„Cufărul cu monede”** · `Prenume_Nume_MP1_L04`

---

## Ce facem azi
La finalul orei creezi variabile, le schimbi cu `+=` și `-=`, le compari și le afișezi pe LED-uri și le lipești de texte cu `str()`. Orice joc ține minte scorul, viețile, banii. Orice aplicație ține minte numele tău și setările. Toate acestea stau în **variabile**. Azi folosești variabile și condiții împreună, ca într-un joc adevărat.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L3: `if`, `elif`, `was_pressed()` |
| 10–30 | Variabile, `+=`, `-=`, `str()` |
| 30–55 | Comparații, `and`, `or`, limite |
| 55–70 | Citim butoanele **o singură dată** pe rând |
| 70–105 | Cufărul cu monede (**Minim** și **Complet**) |
| 105–120 | Recapitulare, quiz, temă |

Exercițiile B–E și Provocarea sunt pentru cine termină mai repede, sau pentru acasă.

**Ce ai nevoie:** [python.microbit.org](https://python.microbit.org) · placa micro:bit · cablu USB de date

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `nume = valoare` | Creează o variabilă: o cutie cu etichetă | `monede = 5` |
| `+=` și `-=` | Adaugă sau scade din variabilă | `monede += 1` |
| `==`, `!=`, `<`, `>`, `<=`, `>=` | Compară două valori | `if monede >= 3:` |
| `and` / `or` | Cere ambele condiții / măcar una | `if a and b:` |
| `str(număr)` | Transformă un număr în text; îți trebuie când lipești un număr de un text | `"Monede: " + str(monede)` |
| `min()` și `max()` | Ține o valoare între două limite | `min(monede + 5, 20)` |

**Ajutor în editor:** în panoul **Reference** caută `Variables`, `Maths` și `Data types`.

---

## Pas cu pas

### 1) Variabila — cutia cu etichetă
```text
monede = 5
```
`monede` e **numele** (eticheta). `5` e **valoarea** (ce e în cutie). Semnul `=` înseamnă „pune în cutie”.

**Reguli pentru nume:** litere mici, fără spații, fără diacritice, nu începe cu cifră. Folosește cuvinte clare: `monede`, `scor`, `vieti`.

### Exemplul 1 — Prima variabilă
```python
from microbit import *

monede = 5
display.scroll(str(monede))
```
`display.scroll` arată și numere direct. `str()` îți trebuie când **lipești** un număr de un text (Exemplul 7). Noi îl scriem de la început, ca să ne obișnuim.

**Ce vezi pe placă:** cifra `5`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 1** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 2 — Schimbăm valoarea
```python
from microbit import *

monede = 5
monede = monede + 1
monede += 2
monede -= 3
display.scroll(str(monede))
```
- `monede = monede + 1` → `6`  
- `monede += 2` este o prescurtare pentru `monede = monede + 2` → `8`  
- `monede -= 3` → `5`

**Ce vezi pe placă:** `5`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 2** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 3 — Comparații
| Se scrie | Înseamnă |
|----------|----------|
| `a == b` | egal |
| `a != b` | **diferit** |
| `a < b` | mai mic |
| `a > b` | mai mare |
| `a <= b` | mai mic **sau egal** |
| `a >= b` | mai mare **sau egal** |

```python
from microbit import *

monede = 5
if monede >= 3:
    display.show(Image.YES)
else:
    display.show(Image.NO)
```
Cu 5 monede apare bifa.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 3** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 4 — `and` și `or`
- `and` = **amândouă** adevărate.  
- `or` = **cel puțin una** adevărată.
```python
from microbit import *

monede = 7
if monede >= 3 and monede < 10:
    display.show(Image.HAPPY)
elif monede >= 10 or monede == 0:
    display.show(Image.SURPRISED)
else:
    display.show(Image.SAD)
```
Cu 7 monede, prima condiție e adevărată: apare `HAPPY`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 4** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 5 — Limite
Cufărul are loc pentru cel mult 20 de monede.
```python
from microbit import *

monede = 19
for i in range(3):
    if monede < 20:
        monede += 1
display.scroll(str(monede))
```
Chiar dacă încercăm de 3 ori, ajungem la `20`, nu mai sus.

**Ce vezi pe placă:** `20`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 5** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 6 — Prescurtare cu `min` și `max`
`min(a, b)` dă cel mai mic dintre două numere, iar `max(a, b)` pe cel mai mare.
```python
from microbit import *

monede = 19
monede = min(monede + 5, 20)     # nu trece de 20
monede = max(monede - 30, 0)     # nu coboară sub 0
display.scroll(str(monede))
```
Prima linie dă `20`, a doua linie dă `0`.

**Ce vezi pe placă:** `0`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 6** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 7 — Text + număr
Textul și numărul se pot lipi doar dacă numărul devine text.
```python
from microbit import *

monede = 12
display.scroll("Monede: " + str(monede))
```
**Ce vezi pe placă:** `Monede: 12`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 7** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 8 — Citim butoanele o singură dată
Citim memoria butoanelor **la începutul** fiecărei ture și o folosim apoi de mai multe ori:
```python
from microbit import *

while True:
    a = button_a.was_pressed()
    b = button_b.was_pressed()
    if a and b:
        display.show(Image.DIAMOND)
    elif a:
        display.show(Image.ARROW_W)
    elif b:
        display.show(Image.ARROW_E)
    sleep(100)
```
`a` și `b` sunt variabile care țin `True` sau `False`. Astfel, A+B se recunoaște corect și nu rămâne nimic „în memorie”.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 8** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 9 — Constante
Valorile care nu se schimbă (prețul, limita) le scriem cu **litere mari** ca să se vadă.
```python
from microbit import *

PRET = 3
MAXIM = 20
display.scroll(str(PRET) + "/" + str(MAXIM))
```
**Ce vezi pe placă:** `3/20`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 9** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 10 — Proiectul: cufărul cu monede
```python
from microbit import *

PRET = 3          # cat costa o cumparatura
MAXIM = 20        # cate monede incap in cufar

monede = 0
cumparaturi = 0

def cufar():
    display.show(Image.SQUARE_SMALL)

cufar()

while True:
    a = button_a.was_pressed()
    b = button_b.was_pressed()

    if a and b:
        display.scroll(str(monede) + " monede, " + str(cumparaturi) + " cump.")
        cufar()
    elif a:
        if monede < MAXIM:
            monede += 1
            display.show(Image.HAPPY)
        else:
            display.show(Image.NO)      # cufar plin
        sleep(300)
        cufar()
    elif b:
        if monede >= PRET:
            monede -= PRET
            cumparaturi += 1
            display.show(Image.YES)     # cumparat
        else:
            display.show(Image.SAD)     # prea putine monede
        sleep(300)
        cufar()

    sleep(100)
```
- **A:** adaugă o monedă, dacă mai e loc. Dacă e plin, arată `NO`.  
- **B:** dacă ai cel puțin 3 monede, cheltuiești 3 și crești `cumparaturi`; altfel arată `SAD`.  
- **A+B:** derulează soldul și numărul de cumpărături.  
- `def cufar():` e o mică **funcție** care arată cufărul. O vom învăța la lecția 7: pentru azi, o copiezi așa.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 10** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## Greșeli frecvente
1. **„TypeError la `scroll`”** — ai lipit text cu număr fără `str()`: `"Monede: " + monede`. Corect: `"Monede: " + str(monede)`.  
2. **„SyntaxError la `if`”** — ai scris `=` în loc de `==`, sau ai uitat `:`.  
3. **„Monedele trec de 20”** — lipsește condiția `monede < MAXIM`.  
4. **„Cumpăr și cu 1 monedă”** — ai scris `monede > PRET` în loc de `>=`.  
5. **„A+B face și A, și B”** — ai pus întâi `elif a` și abia apoi `a and b`. Verifică **a și b** primul.  
6. **„NameError”** — ai scris `Monede` în loc de `monede` sau ai folosit variabila înainte să o creezi.

---

## De făcut azi — „Cufărul cu monede”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | A adaugă (maxim 20) · B cumpără pentru 3 monede, doar dacă ai destule |
| **Complet** | Minim + A+B arată soldul și cumpărăturile · `cumparaturi` ține minte |

### Exercițiul A — „Cufărul” (obligatoriu)
Scrie programul din Exemplul 10, **fără să copiezi** direct: folosește-l doar ca ghid. La Minim poți lăsa deoparte `cumparaturi` și A+B.

### Exercițiul B — Ce afișează?
Gândește-te, apoi verifică pe placă:
```python
from microbit import *

a = 7
b = 3
a += b
b -= 1
c = a * b
display.scroll(str(c) + "/" + str(a - b))
```

### Exercițiul C — Viețile
Un jucător începe cu `vieti = 3`. De fiecare dată când apeși B pierde o viață, dar **nu mai jos de 0**. Când `vieti` e `0`, arată `Image.SKULL`. Cu A pornește jocul din nou (`vieti = 3`).

### Exercițiul D — Găsește greșelile
Fiecare linie are o greșeală. Spune care e și ce eroare ar da. (La una nu apare nicio eroare, dar rezultatul e greșit.)
```text
monede = "5" + 1
if monede = 3:
display.scroll("Monede: " + monede)
monede =+ 1
```

### Exercițiul E — Explică
1. Ce face `monede += 1`?  
2. Care e diferența dintre `>` și `>=`?  
3. De ce scriem `PRET` cu litere mari?

**Gata când:**
- [ ] Merge pe placa adevărată  
- [ ] Monedele nu trec de 20 și nu coboară sub 0  
- [ ] B cumpără doar dacă ai destule monede  
- [ ] Ai folosit `str()` la afișare  
- [ ] Ai răspunsurile la B–E  

**→ Minim când:** un coleg apasă A de 5 ori, B o dată și vede că ai rămas cu 2 monede.

---

## Bonus ★★★ — Provocare: Creator de pixeli
*Doar dacă ai terminat Complet.*

Fă un caiet de desen pe LED-uri, în care mișți un punct și lași urme.

- [ ] Două variabile, `x` și `y`, țin locul punctului; la pornire punctul e în centru (`x = 2`, `y = 2`)
- [ ] **A** mută punctul spre dreapta (`x += 1`), **B** îl mută în jos (`y += 1`), iar punctul se vede cu `display.set_pixel(x, y, 9)`
- [ ] Punctul **nu iese** din ecran: după `4` se întoarce la `0` (sau folosești `min()`)
- [ ] Punctele aprinse **rămân** pe ecran, ca urme; **A+B** șterge desenul (`display.clear()`) și readuce punctul în centru
- [ ] Salvează proiectul ca `Prenume_Nume_MP1_L04_Pixeli`

## Recapitulare pe scurt
1. **Variabilă** = cutie cu nume: `monede = 5`.  
2. `+=` și `-=` schimbă valoarea: `monede += 1`.  
3. `==` compară, `=` pune.  
4. `and` cere ambele condiții, `or` cere măcar una.  
5. `str(numar)` transformă un număr în text, ca să-l poți lipi de un alt text.  
6. Limitele se păzesc cu `if` sau cu `min()` și `max()`.  
7. Constantele se scriu cu litere mari: `PRET`, `MAXIM`.

**Schema pe scurt (pe foaie):** citesc `a` și `b` → `if a and b` → afișez soldul · `elif a` → adaug moneda (dacă mai e loc) · `elif b` → cumpăr (dacă am destule)

## Quiz scurt
- Ce valoare are `monede` după `monede = 4`, `monede += 3`, `monede -= 2`?  
- Ce face `str(5)`?  
- Ce diferență e între `and` și `or`?  
- Cum împiedici monedele să treacă de 20?

## Temă
**Clicker Challenge: câte apăsări în 10 secunde?** Scrie acasă, în editor (merge și în simulator, fără placă), un program în care **B** pornește proba. Placa golește mai întâi memoria butonului (`button_a.get_presses()`), așteaptă `sleep(10000)`, apoi arată cu `display.scroll(str(...))` câte apăsări pe **A** ai făcut. Ține minte **recordul** într-o variabilă, cu `max()`, și arată-l la final. Salvează-l ca `Prenume_Nume_MP1_L04_Tema`.

## Ce urmează — Lecția 5
Placa învață să **simtă**: citește lumina, temperatura și mișcarea, și dă alerte când trec de un prag.

---

## Răspunsuri

**Exercițiul B:** `a` devine `10`, `b` devine `2`, `c = 20`, iar `a - b = 8`. Se derulează `20/8`.

**Exercițiul C:**
```python
from microbit import *

vieti = 3
display.show(vieti)

while True:
    a = button_a.was_pressed()
    b = button_b.was_pressed()
    if a:
        vieti = 3
    elif b and vieti > 0:
        vieti -= 1
    if vieti == 0:
        display.show(Image.SKULL)
    else:
        display.show(vieti)
    sleep(100)
```

**Exercițiul D:** 1) `"5" + 1` adună text cu număr → `TypeError`. 2) `=` în loc de `==` → `SyntaxError`. 3) `"Monede: " + monede` fără `str()` → `TypeError`. 4) `monede =+ 1` nu dă eroare, dar pune în `monede` valoarea `+1`, adică `1`; corect este `monede += 1`.

**Exercițiul E:** 1) Adună 1 la `monede`. 2) `>` e „strict mai mare”, `>=` include și egalitatea. 3) Ca să se vadă că sunt valori care nu se schimbă.

**Bonus ★★★ — Creator de pixeli:**

*Schema logicii:*
1. `x` și `y` țin locul punctului. La pornire sunt `2` și `2`.  
2. Citești butoanele o singură dată pe tură, în `a` și `b`.  
3. `A+B` șterge desenul și readuce punctul în centru. Altfel `A` mărește `x`, iar `B` mărește `y`; după `4` se revine la `0`.  
4. `set_pixel` aprinde punctul. Nu stingem ecranul la fiecare tură, deci punctele vechi rămân ca urme.

```python
from microbit import *

x = 2
y = 2

while True:
    a = button_a.was_pressed()
    b = button_b.was_pressed()

    if a and b:
        display.clear()
        x = 2
        y = 2
    elif a:
        x += 1
        if x > 4:
            x = 0
    elif b:
        y += 1
        if y > 4:
            y = 0

    display.set_pixel(x, y, 9)
    sleep(100)
```
- Verificăm `a and b` primul, altfel `A+B` ar fi tratat ca un simplu `A`.  
- `if x > 4: x = 0` ține punctul în ecran: după ultima coloană urmează prima.  
- `display.clear()` e apelat doar la `A+B`, de aceea desenul rămâne pe ecran între apăsări.
