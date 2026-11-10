# LECȚIA 3 — Semnalizatorul
### Butoane și decizii cu `if`
**Modulul 1 · Python pe micro:bit · 2 ore**  
**Code Maker Club · micro:bit Coder**

> Azi placa **ascultă de butoane** în Python. Facem un **semnalizator de bicicletă**: stânga, dreapta și avarii.  
> Proiect: **„Semnalizatorul”** · `Prenume_Nume_MP1_L03`

---

## Ce facem azi
La finalul orei citești butoanele cu `is_pressed()` și `was_pressed()` și iei decizii cu `if`, `elif` și `else`. Bicicletele, mașinile și trotinetele au semnalizatoare: ele citesc un comutator și **decid** ce să arate. Programul tău face la fel: **citește** o intrare (butonul), **decide** cu `if` și **arată** rezultatul. Aceste trei lucruri apar în aproape orice program.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L2: imagini, liste, `for` |
| 10–30 | Valori `True` / `False` și blocul `if` |
| 30–55 | `if`, `elif`, `else` cu butoanele (**Minim**) |
| 55–75 | `is_pressed()` și `was_pressed()` — care e diferența? |
| 75–105 | Semnalizatorul care rămâne pornit (**Complet**) |
| 105–120 | Recapitulare, quiz, temă |

Exercițiile B–E și Provocarea sunt pentru cine termină mai repede, sau pentru acasă.

**Ce ai nevoie:** [python.microbit.org](https://python.microbit.org) · placa micro:bit · cablu USB de date

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `button_a.is_pressed()` | Răspunde `True` dacă butonul e apăsat **acum** | `if button_a.is_pressed():` |
| `button_a.was_pressed()` | Răspunde `True` dacă a fost apăsat **de la ultima întrebare** | apăsări scurte |
| `if` / `elif` / `else` | Alege ce se întâmplă, după o condiție | A → stânga, B → dreapta |
| `and` | Cere ca **amândouă** condițiile să fie adevărate | A și B deodată |
| `=` și `==` | `=` pune o valoare, `==` întreabă dacă două valori sunt egale | `directie == "stanga"` |

**Ajutor în editor:** în panoul **Reference** caută `Buttons` și `Logic`. În simulator, butoanele **A** și **B** se apasă cu mouse-ul, în panoul din dreapta.

---

## Pas cu pas

### 1) `True` și `False`
Un buton poate fi **apăsat** sau **neapăsat**. În Python se spune `True` (adevărat) sau `False` (fals). `button_a.is_pressed()` răspunde cu una dintre ele. Atenție la **parantezele** de la final: ele „întreabă” butonul.

### 2) Condiția `if`
```text
if conditie:
    ce se întâmplă dacă e adevărată
```
După condiție pui **două puncte** `:`, iar ce se întâmplă începe cu **4 spații**.

### Exemplul 1 — `if` simplu
```python
from microbit import *

while True:
    if button_a.is_pressed():
        display.show(Image.ARROW_W)
    sleep(100)
```
Cât ții apăsat A, apare săgeata spre vest (stânga). Atenție: după ce lași butonul, săgeata **rămâne** pe ecran, pentru că nu am dat comanda de a o șterge.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 1** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 2 — `if` și `else`
```python
from microbit import *

while True:
    if button_a.is_pressed():
        display.show(Image.ARROW_W)
    else:
        display.clear()
    sleep(100)
```
Acum, când lași butonul, ecranul se curăță.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 2** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 3 — `if`, `elif`, `else`
`elif` înseamnă „altfel dacă”.
```python
from microbit import *

while True:
    if button_a.is_pressed():
        display.show(Image.ARROW_W)
    elif button_b.is_pressed():
        display.show(Image.ARROW_E)
    else:
        display.clear()
    sleep(100)
```
- A → săgeată stânga (`ARROW_W`)  
- B → săgeată dreapta (`ARROW_E`)  
- niciun buton → ecran curat

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 3** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 4 — Două butoane deodată
Cu `and` verificăm că **amândouă** condițiile sunt adevărate.
```python
from microbit import *

while True:
    if button_a.is_pressed() and button_b.is_pressed():
        display.show(Image.DIAMOND)
    elif button_a.is_pressed():
        display.show(Image.ARROW_W)
    elif button_b.is_pressed():
        display.show(Image.ARROW_E)
    else:
        display.clear()
    sleep(100)
```
> **Ordinea contează.** Python verifică de sus în jos și se oprește la **prima** condiție adevărată. Dacă am pune întâi `if button_a.is_pressed():`, pe A+B s-ar vedea mereu doar săgeata spre stânga. De aceea verificăm **A+B primul**.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 4** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 5 — Pâlpâirea
Un semnalizator **pâlpâie**: aprins, stins, aprins, stins.
```python
from microbit import *

while True:
    if button_a.is_pressed():
        display.show(Image.ARROW_W)
        sleep(300)
        display.clear()
        sleep(300)
    else:
        sleep(50)
```
`else: sleep(50)` e o pauză mică ca bucla să nu alerge prea repede.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 5** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 6 — `is_pressed()` și `was_pressed()`

| Întrebarea | Ce răspunde |
|------------|-------------|
| `is_pressed()` | „Este apăsat **chiar acum**?” |
| `was_pressed()` | „A fost apăsat **de când te-am întrebat ultima dată**?” |

`was_pressed()` ține minte și o atingere **scurtă**, făcută în timp ce programul dormea cu `sleep`. După ce îl citești, memoria se **șterge**.
```python
from microbit import *

while True:
    if button_a.was_pressed():
        display.show(Image.HAPPY)
        sleep(500)
    else:
        display.clear()
        sleep(100)
```

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 6** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 7 — Numărăm apăsările
```python
from microbit import *

while True:
    sleep(2000)
    display.scroll(str(button_a.get_presses()))
```
`get_presses()` spune **de câte ori** a fost apăsat A în ultimele 2 secunde (cât a dormit programul).

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 7** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 8 — O variabilă cu text
O variabilă poate ține și text. Pentru a compara folosim `==` (două semne egal).
```python
from microbit import *

directie = "nimic"

while True:
    if button_a.was_pressed():
        directie = "stanga"
    elif button_b.was_pressed():
        directie = "dreapta"

    if directie == "stanga":
        display.show(Image.ARROW_W)
    elif directie == "dreapta":
        display.show(Image.ARROW_E)
    else:
        display.clear()
    sleep(100)
```
`=` **pune** o valoare, iar `==` **întreabă** dacă două valori sunt egale.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 8** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 9 — Semnalizatorul care rămâne pornit (Complet)
```python
from microbit import *

directie = "nimic"

while True:
    if button_a.is_pressed() and button_b.is_pressed():
        directie = "nimic"
        button_a.was_pressed()     # golim memoria butonului A
        button_b.was_pressed()     # golim memoria butonului B
    elif button_a.was_pressed():
        directie = "stanga"
    elif button_b.was_pressed():
        directie = "dreapta"

    if directie == "stanga":
        display.show(Image.ARROW_W)
        sleep(300)
        display.clear()
        sleep(300)
    elif directie == "dreapta":
        display.show(Image.ARROW_E)
        sleep(300)
        display.clear()
        sleep(300)
    else:
        sleep(50)
```
- Apeși **A** scurt: semnalizatorul stânga pornește și **rămâne** pornit.  
- **B** pornește dreapta.  
- **A+B** îl oprește.  
- Liniile `button_a.was_pressed()` fără nimic în jurul lor doar **golesc** memoria; fără ele, după A+B placa ar „crede” că A a fost apăsat.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 9** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 10 — Avariile (Minim, varianta pâlpâitoare)
```python
from microbit import *

while True:
    if button_a.is_pressed() and button_b.is_pressed():
        display.show(Image.SQUARE)
        sleep(300)
        display.clear()
        sleep(300)
    elif button_a.is_pressed():
        display.show(Image.ARROW_W)
        sleep(300)
        display.clear()
        sleep(300)
    elif button_b.is_pressed():
        display.show(Image.ARROW_E)
        sleep(300)
        display.clear()
        sleep(300)
    else:
        display.clear()
        sleep(50)
```
Pâlpâie doar cât ții butonul apăsat. Pentru apăsări scurte folosești varianta din Exemplul 9.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 10** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## Greșeli frecvente
1. **„Semnalizatorul e mereu pornit”** — ai scris `button_a.is_pressed` fără `()`. Fără paranteze, Python nu întreabă butonul.  
2. **„SyntaxError la `if`”** — lipsesc `:` sau ai folosit `=` în loc de `==`.  
3. **„Pe A+B apare doar stânga”** — condiția cu `and` trebuie pusă **prima**.  
4. **„Placa nu simte apăsările scurte”** — ai folosit `is_pressed()` și programul dormea. Folosește `was_pressed()`.  
5. **„După A+B pornește singur stânga”** — ai uitat să golești memoria butoanelor.  
6. **„IndentationError”** — rândurile din `if` și din `while` nu au spațiile potrivite.

---

## De făcut azi — „Semnalizatorul”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | `is_pressed()` · A = stânga · B = dreapta · A+B = avarii · pâlpâie |
| **Complet** | Minim + semnalizatorul rămâne pornit după o apăsare scurtă (`was_pressed()`) și se oprește cu A+B |

### Exercițiul A — „Semnalizatorul” (obligatoriu)
Scrie programul din Exemplul 10 (Minim). Pentru **Complet**, scrie varianta din Exemplul 9.

### Exercițiul B — Ce se întâmplă?
Spune ce vezi pe placă dacă apeși **A scurt, o singură dată**, la programul din Exemplul 6:
```python
from microbit import *

while True:
    if button_a.was_pressed():
        display.show(Image.HAPPY)
        sleep(500)
    else:
        display.clear()
        sleep(100)
```

### Exercițiul C — O față pentru fiecare buton
Scrie un program: cât ții **A** apare `Image.HAPPY`, cât ții **B** apare `Image.SAD`, altfel apare `Image.ASLEEP`.

### Exercițiul D — Găsește greșelile
Programul are **4 greșeli**. Rescrie-l corect.
```text
from microbit import *

while True
    if button_a.is_pressed:
        display.show(Image.HAPPY)
    elif button_b.is_pressed() = True:
        display.show(Image.SAD)
    else
        display.clear()
```

### Exercițiul E — Explică
1. Care e diferența dintre `=` și `==`?  
2. De ce verificăm A+B înaintea lui A?  
3. Când folosești `was_pressed()` în loc de `is_pressed()`?

**Gata când:**
- [ ] Merge pe placa adevărată  
- [ ] A, B și A+B fac lucruri diferite  
- [ ] Săgețile **pâlpâie**  
- [ ] (Complet) rămâne pornit după o apăsare scurtă  
- [ ] Ai răspunsurile la B–E  

**→ Minim când:** un coleg ține A și vede săgeata pâlpâind spre stânga.

---

## Bonus ★★★ — Provocare: Emoji Box
*Doar dacă ai terminat Complet.*

Fă o cutie de emoji, cu o față, un animal și o surpriză.

- [ ] **A** arată o față (`Image.HAPPY`, `Image.SAD`, `Image.SILLY` sau `Image.ANGRY`), **B** arată un animal (`Image.DUCK`, `Image.COW`, `Image.RABBIT` sau `Image.GIRAFFE`), **A+B** arată o surpriză (`Image.GHOST`, `Image.SKULL` sau `Image.SURPRISED`)
- [ ] Imaginea **rămâne pe ecran** până la următoarea apăsare, ținută minte într-o variabilă cu text, ca la Exemplul 8
- [ ] Când apeși un buton, imaginea **pâlpâie o dată** (apare, se stinge 200 ms, apare din nou) înainte să rămână
- [ ] La pornire placa arată `Image.ASLEEP`
- [ ] Salvează proiectul ca `Prenume_Nume_MP1_L03_Emoji`

## Recapitulare pe scurt
1. `button_a.is_pressed()` = apăsat **acum**; `was_pressed()` = apăsat **de la ultima întrebare**.  
2. `if` / `elif` / `else` aleg ce se întâmplă; Python se oprește la **prima** condiție adevărată.  
3. `and` cere ca **amândouă** condițiile să fie adevărate.  
4. `=` pune o valoare; `==` o compară.  
5. Condiția cea mai **specifică** (A+B) se pune **prima**.

**Schema pe scurt (pe foaie):** `while True:` → citesc butoanele → `if A și B` → avarii · `elif A` → stânga · `elif B` → dreapta · `else` → curat

## Quiz scurt
- Ce înseamnă `elif`?  
- De ce parantezele din `is_pressed()` sunt importante?  
- Care e diferența dintre `is_pressed()` și `was_pressed()`?  
- Ce face `and`?

## Temă
**Indicatorul de dispoziție.** Scrie acasă, în editor (merge și în simulator, fără placă), un program care ține minte cum te simți: **A** = `Image.HAPPY`, **B** = `Image.SAD`, **A+B** = `Image.ASLEEP`. Fața rămâne pe ecran până la următoarea apăsare, ca la Exemplul 8. Salvează-l ca `Prenume_Nume_MP1_L03_Tema`.

Pe foaie notează: ce ai fi făcut diferit dacă ai fi folosit `is_pressed()` în loc de `was_pressed()`?

## Ce urmează — Lecția 4
Placa învață să **numere**: faci un cufăr cu monede, cu variabile, `+=` și limite, în care adaugi monede cu A și cumperi lucruri cu B.

---

## Răspunsuri

**Exercițiul B:** apare fața veselă o jumătate de secundă, apoi ecranul se curăță. `was_pressed()` a prins apăsarea scurtă. Dacă apeși A **de mai multe ori**, `was_pressed()` spune doar `True`, adică „a fost apăsat”, nu câte ori.

**Exercițiul C:**
```python
from microbit import *

while True:
    if button_a.is_pressed():
        display.show(Image.HAPPY)
    elif button_b.is_pressed():
        display.show(Image.SAD)
    else:
        display.show(Image.ASLEEP)
    sleep(100)
```

**Exercițiul D:**
```python
from microbit import *

while True:
    if button_a.is_pressed():
        display.show(Image.HAPPY)
    elif button_b.is_pressed():
        display.show(Image.SAD)
    else:
        display.clear()
    sleep(100)
```
Greșelile: lipsea `:` după `while True`; lipseau `()` la `button_a.is_pressed`; `= True` era greșit (trebuia `==` sau nimic); lipsea `:` după `else`.

**Exercițiul E:** 1) `=` pune o valoare, `==` compară. 2) Altfel placa s-ar opri la A. 3) Când vrei să prinzi și o apăsare scurtă, în timp ce programul face altceva.

**Bonus ★★★ — Emoji Box:**

*Schema logicii:*
1. Variabila `stare` ține minte ce se vede: `"somn"`, `"fata"`, `"animal"` sau `"surpriza"`. La pornire e `"somn"`.  
2. Verifici **întâi** `A` și `B` împreună, apoi doar `A`, apoi doar `B`. La o apăsare schimbi `stare` și pui `schimba = True`.  
3. Arăți imaginea care corespunde lui `stare`.  
4. Dacă `schimba` este `True`, imaginea se stinge `200` ms și apoi apare din nou, deci pâlpâie o dată.

```python
from microbit import *

stare = "somn"

while True:
    schimba = False

    if button_a.is_pressed() and button_b.is_pressed():
        stare = "surpriza"
        schimba = True
    elif button_a.is_pressed():
        stare = "fata"
        schimba = True
    elif button_b.is_pressed():
        stare = "animal"
        schimba = True

    if stare == "fata":
        display.show(Image.HAPPY)
    elif stare == "animal":
        display.show(Image.DUCK)
    elif stare == "surpriza":
        display.show(Image.GHOST)
    else:
        display.show(Image.ASLEEP)

    if schimba:
        sleep(200)
        display.clear()
        sleep(200)

    sleep(100)
```
- `A+B` se verifică primul, altfel placa ar vedea doar `A` și nu ar ajunge niciodată la surpriză.  
- Imaginea rămâne pe ecran pentru că `stare` nu se schimbă până la următoarea apăsare.  
- `schimba` este `True` doar în tura în care ai apăsat, deci pâlpâirea apare o singură dată.
