# LECȚIA 2 — Cartea de glume
### Liste care merg în pereche
**Modulul 2 · Python pe micro:bit · 2 ore**  
**Code Maker Club · micro:bit Python Pro**

> Azi faci o **carte de glume** pe placă: dai pagina cu **A**, afli poanta cu **B** și scuturi placa pentru o glumă la întâmplare. Pe drum înveți să **schimbi o listă**: adaugi, scoți și o parcurgi.  
> Proiect: **„Cartea de glume”** · `Prenume_Nume_MP2_L02`

---

## Ce facem azi
La finalul orei ții **două liste în pereche** (întrebările și răspunsurile), adaugi și scoți elemente cu `append` și `pop` și parcurgi o listă cu `for`. Cartea merge înainte, arată poanta și poate alege o glumă la întâmplare. Aproape orice aplicație ține liste: jocuri, muzică, mesaje, măsurători.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap: lista, indexul și `len` din Modulul 1; meniul cu `%` din L1 |
| 10–35 | `append`, ultimul element, `for`, `pop` |
| 35–60 | Două liste în pereche: întrebări și răspunsuri |
| 60–105 | Cartea de glume (**Minim** și **Complet**) |
| 105–120 | Recapitulare, quiz, temă |

Exercițiile B–E și Provocarea sunt pentru cine termină mai repede, sau pentru acasă.

**Ce ai nevoie:** [python.microbit.org](https://python.microbit.org) · placa micro:bit · cablu USB de date

---

## Instrucțiuni noi azi

Lista, indexul și `len` le știi din Modulul 1. Azi adăugăm:

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `lista.append(x)` | Adaugă un element la sfârșit | `culori.append("albastru")` |
| `lista[-1]` | Ultimul element, fără să știi lungimea | `culori[-1]` |
| `for x in lista:` | Parcurge elementele, unul câte unul | `for c in culori:` |
| `lista.pop()` | Scoate ultimul element (`pop(0)` scoate primul) | `culori.pop()` |
| două liste în pereche | Elementul de pe locul `i` din prima merge cu cel de pe locul `i` din a doua | `intrebari[i]` și `raspunsuri[i]` |

**Ajutor în editor:** în panoul **Reference** caută `Lists (arrays)`.

---

## Pas cu pas

### 1) Recapitulare: lista și pagina următoare
O listă se scrie între **paranteze drepte**. Fiecare element are un **index**, iar numărătoarea începe de la `0`. Cu `len(lista)` afli câte elemente are.

### Exemplul 1 — Pagina următoare, în cerc
```python
from microbit import *

glume = ["Salut!", "Bravo", "Curaj!"]
i = 0

display.scroll(glume[i])

while True:
    if button_a.was_pressed():
        i = (i + 1) % len(glume)
        display.scroll(glume[i])
    sleep(100)
```
**Ce vezi pe placă:** `Salut!`, apoi la fiecare **A** următorul text, iar după ultimul revii la primul. Lungimea vine singură din `len()`, deci poți adăuga texte fără să schimbi altceva.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 1** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### 2) Adăugăm și citim de la coadă
`append` pune un element nou **la sfârșit**. Indexul `-1` e **ultimul** element, oricât de lungă ar fi lista.

### Exemplul 2 — `append` și `[-1]`
```python
from microbit import *

culori = ["rosu", "galben"]
culori.append("verde")

display.scroll(str(len(culori)))
display.scroll(culori[-1])
```
**Ce vezi pe placă:** `3`, apoi `verde`.

> Cu 3 elemente indexurile sunt `0, 1, 2`. Dacă scrii `culori[3]`, apare `IndexError` („nu există locul 3”).

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 2** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 3 — Parcurgem lista cu `for`
```python
from microbit import *

culori = ["rosu", "galben", "verde"]

for c in culori:
    display.scroll(c)
```
La fiecare tură, `c` ia pe rând câte un element. Nu ai nevoie de index.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 3** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 4 — Scoatem elemente cu `pop`
```python
from microbit import *

lista = ["a", "b", "c", "d"]
lista.pop(0)
ultimul = lista.pop()

display.scroll(str(len(lista)))
display.scroll(ultimul)
```
**Ce vezi pe placă:** `2`, apoi `d`.
- `pop(0)` scoate **primul** element (`a`).  
- `pop()` scoate **ultimul** (`d`) și ți-l dă înapoi, ca să-l poți folosi.  
- Rămân `["b", "c"]`, deci `len` dă `2`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 4** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### 3) Două liste în pereche
O glumă are **două părți**: întrebarea și răspunsul. Le ținem în două liste, în **aceeași ordine**. Elementul `i` dintr-o listă se potrivește cu elementul `i` din cealaltă.

```text
index        0                 1
intrebari   "Ce zice 0?"      "Ce mananca robotul?"
raspunsuri  "Ce curea!"       "Cipuri!"
```

### Exemplul 5 — Întrebarea și poanta
```python
from microbit import *

intrebari = ["Ce zice 0 catre 8?", "Ce mananca robotul?"]
raspunsuri = ["Ce curea frumoasa!", "Cipuri!"]

i = 1
display.scroll(intrebari[i])
sleep(500)
display.scroll(raspunsuri[i])
```
**Ce vezi pe placă:** `Ce mananca robotul?`, apoi `Cipuri!`. Același `i` merge în ambele liste.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 5** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 6 — Cartea de glume (Minim)
```python
from microbit import *

intrebari = ["Ce zice 0 catre 8?", "Ce mananca robotul?", "De ce e trist calculatorul?", "Cum se saluta programatorii?", "Ce zice un LED fericit?"]
raspunsuri = ["Ce curea frumoasa!", "Cipuri!", "Are prea multe ferestre.", "Hello, world!", "Ma aprinzi!"]
i = 0

display.scroll(intrebari[i])

while True:
    if button_a.was_pressed():
        i = (i + 1) % len(intrebari)
        display.scroll(intrebari[i])
    if button_b.was_pressed():
        display.scroll(raspunsuri[i])
    sleep(100)
```
- **A** → următoarea întrebare, în cerc.  
- **B** → răspunsul la întrebarea de pe ecran.  
Fără diacritice în texte, ca placa să le poată afișa.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 6** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 7 — Cartea de glume (Complet)
Adăugăm o glumă la întâmplare și ștergerea ultimei pagini:
```python
from microbit import *
import random

intrebari = ["Ce zice 0 catre 8?", "Ce mananca robotul?", "De ce e trist calculatorul?", "Cum se saluta programatorii?", "Ce zice un LED fericit?"]
raspunsuri = ["Ce curea frumoasa!", "Cipuri!", "Are prea multe ferestre.", "Hello, world!", "Ma aprinzi!"]
i = 0

display.scroll(intrebari[i])

while True:
    a = button_a.was_pressed()
    b = button_b.was_pressed()

    if a and b:
        if len(intrebari) > 1:
            intrebari.pop()
            raspunsuri.pop()
            i = 0
        display.scroll(str(len(intrebari)))
    elif a:
        i = (i + 1) % len(intrebari)
        display.scroll(intrebari[i])
    elif b:
        display.scroll(raspunsuri[i])
    elif accelerometer.was_gesture("shake"):
        i = random.randint(0, len(intrebari) - 1)
        display.scroll(intrebari[i])
    sleep(100)
```
- **A+B** scoate **ultima pagină** din **ambele** liste, ca perechile să rămână potrivite, și arată câte pagini au rămas. `len(intrebari) > 1` păstrează cel puțin o pagină.  
- **Scuturarea** alege un index la întâmplare, de la `0` până la `len(intrebari) - 1`.  
- Ordinea contează: `a and b` se verifică **înaintea** lui `a` și `b` separat.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 7** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## Greșeli frecvente
1. **„IndexError: list index out of range”** — ai cerut un loc care nu există. Ultimul index e `len(lista) - 1`.  
2. **„Prima poziție e 1”** — în Python prima poziție e `0`.  
3. **„Poanta nu se potrivește cu întrebarea”** — listele nu au aceeași ordine, sau ai scos un element dintr-o singură listă.  
4. **„Cartea sare la întâmplare”** — ai citit butoanele de două ori pe tură. Citește-le o dată.  
5. **„Nu pot afișa lista”** — `display.scroll(lista)` nu merge; afișezi **un element** sau folosești `for`.  
6. **„A+B nu merge”** — apasă cele două butoane **exact în același timp**.  
7. **„TypeError”** — nu poți lipi un text de un număr: `"Pagina " + str(i)`.

---

## De făcut azi — „Cartea de glume”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | 5 glume · **A** întrebarea următoare, în cerc · **B** poanta (Exemplul 6) |
| **Complet** | Minim + **scuturare** = glumă la întâmplare + **A+B** scoate ultima pagină (Exemplul 7) |

### Exercițiul A — „Cartea de glume” (obligatoriu)
Scrie programul din Exemplul 6 (Minim). Schimbă glumele cu **5 glume ale tale**, fără diacritice. Pentru **Complet**, adaugă scuturarea și A+B, ca la Exemplul 7.

### Exercițiul B — Ce dă?
Fie `l = ["a", "b", "c", "d"]`. Fără să rulezi: `l[1]`, `l[-1]`, `len(l)`, `l[0] + l[3]`. Ce se întâmplă cu `l[4]`?

### Exercițiul C — Funcție pentru pagina următoare
Scrie funcția `urmatorul(i, n)` care primește indexul `i` și numărul de pagini `n` și **returnează** indexul următor, în cerc. Apoi folosește-o în carte.

### Exercițiul D — Găsește greșelile
Programul are **5 greșeli**. Rescrie-l corect.
```text
glume = ["Salut", "Bravo", "Curaj"]
i = 1

while True:
    if button_a.was_pressed():
        i = i + 1
        display.scroll(glume[i])
    if button_b.was_pressed():
        glume.append["Super"]
    display.scroll(glume)
```

### Exercițiul E — Explică
1. De ce prima poziție dintr-o listă este `0`?  
2. Ce face `% len(glume)`?  
3. Ce diferență e între `pop()` și `pop(0)`?

**Gata când:**
- [ ] Cartea merge înainte, în cerc, iar **B** arată poanta potrivită  
- [ ] Nu apare `IndexError`  
- [ ] Glumele sunt scrise corect, fără diacritice  
- [ ] Ai testat cu un coleg  
- [ ] Ai răspunsurile la B–E  

**→ Minim când:** un coleg parcurge toată cartea și poantele se potrivesc cu întrebările.

---

## Bonus ★★★ — Provocare: Cartea de glume cu surprize
*Doar dacă ai terminat Complet.*

Cartea ta primește **o a treia listă**, cu pagini-surpriză, și arată la ce pagină ești.

**Ajutor:** numărul paginii se face cu `str(i + 1) + "/" + str(len(intrebari))` și dă `2/5`. O surpriză la întâmplare se alege cu `random.choice(surprize)` (ai nevoie de `import random`). Pentru cine vrea mai mult: `surprize.sort()` le pune în ordine alfabetică.

- [ ] Ai **trei liste**: `intrebari`, `raspunsuri` și `surprize`
- [ ] Înainte de fiecare întrebare se vede pagina, de exemplu `2/5`
- [ ] **Scuturarea** arată mai întâi `Image.HEART`, apoi o surpriză aleasă la întâmplare din listă
- [ ] Cartea are cel puțin **6 glume** și se întoarce de la ultima la prima
- [ ] Salvează proiectul ca `Prenume_Nume_MP2_L02_Glume`

## Recapitulare pe scurt
1. O listă ține mai multe elemente: `[ ]`.  
2. Indexul începe de la **0**; ultimul e `len(lista) - 1` sau `-1`.  
3. `append` adaugă la sfârșit, `pop` scoate.  
4. `for x in lista:` parcurge toate elementele.  
5. Două liste în aceeași ordine merg în pereche, cu același index.

**Schema pe scurt (pe foaie):** listă `[ ]` · index de la `0` · `len` · `append` / `pop` · `for` · `% len(lista)` · două liste în pereche

## Quiz scurt
- Ce index are al treilea element?  
- Ce dă `len(["x", "y"])`?  
- Cum treci de la ultima pagină la prima?  
- Ce face `append`?

## Temă
**Cartea mea de cuvinte.** Scrie acasă, în editor (merge și în simulator, fără placă), un program cu **5 cuvinte** dintr-o altă limbă și traducerile lor, în două liste în pereche. La **A** placa arată cuvântul următor, la **B** traducerea. Salvează-l ca `Prenume_Nume_MP2_L02_Tema`.

## Ce urmează — Lecția 3
Placa devine **artist**: desenezi pe ecranul de LED-uri cu bucle una într-alta, adică un `for` în alt `for`, și alegi desenul cu butoanele.

---

## Răspunsuri

**Exercițiul B:** `l[1] = "b"`, `l[-1] = "d"`, `len(l) = 4`, `l[0] + l[3] = "ad"`. `l[4]` dă `IndexError` (indexurile sunt 0–3).

**Exercițiul C:**
```python
def urmatorul(i, n):
    return (i + 1) % n
```
În carte: `i = urmatorul(i, len(intrebari))`.

**Exercițiul D:** 1) `i = i + 1` poate ieși din listă (`IndexError`): trebuie `(i + 1) % len(glume)`. 2) `glume.append["Super"]` trebuie paranteze rotunde: `glume.append("Super")`. 3) `display.scroll(glume)` nu poate afișa o listă; afișezi un element. 4) lipsește `sleep` în buclă. 5) lipsește `from microbit import *`.

**Exercițiul E:** 1) Indexul arată **câte locuri sunt înainte** de element; primul are `0` înaintea lui. 2) Ține indexul între `0` și ultimul. 3) `pop()` scoate **ultimul**, `pop(0)` scoate **primul**.
