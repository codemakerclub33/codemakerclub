# LECȚIA 1 — Panoul de misiuni
### Un program mare, cu meniu
**Modulul 2 · Python pe micro:bit · 2 ore**  
**Code Maker Club · micro:bit Python Pro**

> Începem Modulul 2 cu un program mai mare: un **panou cu meniu** și mai multe **misiuni**. Alegi cu **A** misiunea, o pornești cu **B**.  
> Proiect: **„Panoul de misiuni”** · `Prenume_Nume_MP2_L01`

---

## Ce facem azi
La finalul orei organizezi un program în părți (constante, funcții, buclă principală) și faci un **meniu**. Programele mici încap pe un ecran, dar cele mari au nevoie de **ordine**. Dacă fiecare misiune e o funcție, poți adăuga una nouă fără să strici restul. Așa lucrează programatorii adevărați. Azi refolosești lucruri din Modulul 1: lumină, temperatură, inimă și nivela.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Ce am învățat în Modulul 1? Misiunea Modulului 2 |
| 15–35 | Ordinea unui program mare; meniul care se învârte |
| 35–70 | Misiunile ca funcții; panoul (**Minim**) |
| 70–105 | Nivela și contorul (**Complet**) |
| 105–120 | Recapitulare, quiz, temă |

Exercițiile B–E și Provocarea sunt pentru cine termină mai repede, sau pentru acasă.

**Ce ai nevoie:** [python.microbit.org](https://python.microbit.org) · placa micro:bit · cablu USB de date

---

## Instrucțiuni noi azi
Azi **organizăm** ce știi deja. Singurele lucruri noi:

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `mod = (mod + 1) % NR_MISIUNI` | Meniul trece la următoarea misiune și revine la prima după ultima | `% 3` dă `0, 1, 2, 0, 1 …` |
| `porneste(m)` | O funcție care alege misiunea după număr | `elif m == 1: misiune_temperatura()` |
| `abs(x)` | Scoate semnul minus | `abs(-100)` dă `100` |
| `a // b` | Împărțire fără zecimale | `17 // 5` dă `3` |

**Ajutor în editor:** în panoul **Reference** caută `Functions`, `Accelerometer` și `Light level`.

---

## Pas cu pas

### 1) Un program cu ordine
Folosim mereu aceeași ordine, de sus în jos:
```text
1. from microbit import *     (importuri)
2. CONSTANTE = ...            (valori care nu se schimbă)
3. variabile = ...            (starea programului)
4. def functii():             (uneltele)
5. pornire (afisari de inceput)
6. while True:                (bucla principala)
```
Cine citește programul știe unde să caute fiecare lucru. **Constantele** (`NR_MISIUNI`) le știi din Modulul 1: se scriu cu litere mari și se schimbă într-un singur loc.

### Exemplul 1 — Meniul care se învârte
Dacă ai **3** misiuni numerotate `0, 1, 2`, după `2` vrei să revii la `0`. Cu `%` (restul împărțirii, din lecția 6 din Modulul 1) merge ușor:
```python
from microbit import *

NR_MISIUNI = 3
mod = 0

while True:
    display.show(str(mod + 1))
    if button_a.was_pressed():
        mod = (mod + 1) % NR_MISIUNI
    sleep(100)
```
Apeși **A**: `1 → 2 → 3 → 1 → 2 …`. Pe ecran numerele sunt `1, 2, 3` (am adăugat `+ 1` doar la afișare).

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 1** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 2 — Misiunea „Lumină”
O funcție care arată un **grafic de lumină**: cu cât e mai multă lumină, cu atât mai multe LED-uri aprinse pe coloana din mijloc.
```python
from microbit import *

def misiune_lumina():
    for i in range(30):
        nivel = display.read_light_level() // 51     # 0 ... 5
        display.clear()
        for y in range(nivel):
            display.set_pixel(2, 4 - y, 9)
        sleep(100)

misiune_lumina()
display.clear()
```
Durează 3 secunde (30 × 100 ms). `//` e împărțirea fără zecimale: `display.read_light_level() // 51` dă un număr de la `0` la `5`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 2** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 3 — Misiunile „Temperatură” și „Inimă”
```python
from microbit import *

def misiune_temperatura():
    display.scroll(str(temperature()) + "C")

def misiune_inima():
    for i in range(3):
        display.show(Image.HEART)
        sleep(400)
        display.show(Image.HEART_SMALL)
        sleep(400)

misiune_temperatura()
misiune_inima()
display.clear()
```
Fiecare misiune e o funcție cu **un nume clar**. Le-am scris separat ca să le poți testa pe rând.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 3** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 4 — Panoul Minim
Punem totul împreună. Funcția `porneste(m)` alege misiunea după număr:
```python
from microbit import *

NR_MISIUNI = 3
mod = 0

def misiune_lumina():
    for i in range(30):
        nivel = display.read_light_level() // 51     # 0 ... 5
        display.clear()
        for y in range(nivel):
            display.set_pixel(2, 4 - y, 9)
        sleep(100)

def misiune_temperatura():
    display.scroll(str(temperature()) + "C")

def misiune_inima():
    for i in range(3):
        display.show(Image.HEART)
        sleep(400)
        display.show(Image.HEART_SMALL)
        sleep(400)

def porneste(m):
    if m == 0:
        misiune_lumina()
    elif m == 1:
        misiune_temperatura()
    elif m == 2:
        misiune_inima()

while True:
    a = button_a.was_pressed()
    b = button_b.was_pressed()

    if a:
        mod = (mod + 1) % NR_MISIUNI
    elif b:
        porneste(mod)

    display.show(str(mod + 1))
    sleep(100)
```
**A** schimbă misiunea (1, 2, 3), **B** o pornește, iar după ea panoul arată din nou numărul.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 4** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 5 — Misiunea „Nivela” (din L5 din Modulul 1)
A 4-a misiune: placa e **dreaptă** dacă nu e înclinată nici pe x, nici pe y.
```python
from microbit import *

def misiune_nivela():
    for i in range(30):
        x = accelerometer.get_x()
        y = accelerometer.get_y()
        if abs(x) < 150 and abs(y) < 150:
            display.show(Image.HAPPY)
        else:
            display.show(Image.SAD)
        sleep(100)

misiune_nivela()
display.clear()
```
`abs()` scoate semnul minus: `abs(-100)` este `100`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 5** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

### Exemplul 6 — Panoul Complet
Adăugăm nivela și un **contor** de misiuni făcute. Funcția `porneste` schimbă o variabilă de afară (`facute`), deci are nevoie de `global`, ca în lecția 8 din Modulul 1:
```python
from microbit import *

NR_MISIUNI = 4
mod = 0
facute = 0

def misiune_lumina():
    for i in range(30):
        nivel = display.read_light_level() // 51     # 0 ... 5
        display.clear()
        for y in range(nivel):
            display.set_pixel(2, 4 - y, 9)
        sleep(100)

def misiune_temperatura():
    display.scroll(str(temperature()) + "C")

def misiune_inima():
    for i in range(3):
        display.show(Image.HEART)
        sleep(400)
        display.show(Image.HEART_SMALL)
        sleep(400)

def misiune_nivela():
    for i in range(30):
        x = accelerometer.get_x()
        y = accelerometer.get_y()
        if abs(x) < 150 and abs(y) < 150:
            display.show(Image.HAPPY)
        else:
            display.show(Image.SAD)
        sleep(100)

def porneste(m):
    global facute
    if m == 0:
        misiune_lumina()
    elif m == 1:
        misiune_temperatura()
    elif m == 2:
        misiune_inima()
    elif m == 3:
        misiune_nivela()
    facute += 1

while True:
    a = button_a.was_pressed()
    b = button_b.was_pressed()

    if a and b:
        display.scroll(str(facute))
    elif a:
        mod = (mod + 1) % NR_MISIUNI
    elif b:
        porneste(mod)

    display.show(str(mod + 1))
    sleep(100)
```
- **A** = următoarea misiune, **B** = pornește, **A+B** = câte misiuni ai făcut.  
- Cazul `a and b` e **primul**, ca să nu fie „mâncat” de `a` sau `b`.  
- Ca să adaugi o misiune nouă schimbi **trei lucruri**: funcția ei, `NR_MISIUNI` și un `elif` în `porneste`.

**Gata când:**  
- [ ] Am scris și am rulat **Exemplul 6** în simulator sau pe placă  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## Greșeli frecvente
1. **„Meniul trece de 3”** — ai uitat `% NR_MISIUNI`.  
2. **„Misiunea pornește de două ori”** — citești `button_b.was_pressed()` de mai multe ori. Citește **o dată** la începutul turei.  
3. **„Contorul rămâne 0”** — lipsește `global facute`.  
4. **„Meniul arată 0, 1, 2”** — afișezi `mod`; pentru `1, 2, 3` afișezi `mod + 1`.  
5. **„Misiunea nu pornește”** — verifică numerele din `porneste` (se începe de la `0`).  
6. **„Lumina nu arată nimic”** — în sală e prea întuneric? Pune placa lângă o lampă.

---

## De făcut azi — „Panoul de misiuni”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | 3 misiuni · A alege · B pornește · meniul revine |
| **Complet** | Minim + misiunea Nivela + contor la A+B |

### Exercițiul A — „Panoul” (obligatoriu)
Scrie panoul pe placă (Exemplul 4 pentru Minim, Exemplul 6 pentru Complet). Poți schimba **ce arată** fiecare misiune (alte imagini, alt text).

### Exercițiul B — Ce dă?
Fără să rulezi: `10 % 4`, `9 % 3`, `5 % 7`, `abs(-3)`, `17 // 5`.

### Exercițiul C — Misiune nouă
Adaugă misiunea **„Salut”**: `display.scroll("Salut!")` urmat de `Image.HAPPY`. Ce schimbi în `NR_MISIUNI` și în `porneste`?

### Exercițiul D — Găsește greșelile
```text
NR_MISIUNI = 3
mod = 0
facute = 0

def porneste(m):
    facute += 1
    if m = 0:
        display.show(Image.HEART)

while True:
    if button_a.was_pressed():
        mod = (mod + 1) % NR_MISIUNI
    display.scroll("Misiunea " + mod)
```

### Exercițiul E — Explică
1. De ce scriem constantele cu litere mari?  
2. Ce face `% NR_MISIUNI` în meniu?  
3. De ce `porneste` are `global facute`?

**Gata când:**
- [ ] Meniul trece prin toate misiunile și revine la prima  
- [ ] B pornește misiunea aleasă  
- [ ] Programul are funcții, nu un bloc lung  
- [ ] Ai testat cu un coleg  
- [ ] Ai răspunsurile la B–E  

**→ Minim când:** un coleg alege și pornește o misiune fără ajutor.

---

## Bonus ★★★ — Provocare: Panoul meu
*Doar dacă ai terminat Complet.*

Adaugă la panou **două misiuni noi**, făcute de tine.

**Ajutor:** în simulator poți schimba lumina cu cursorul de lumină și poți simula **căderea liberă** din lista de gesturi (`freefall`). Gestul se verifică cu `accelerometer.was_gesture("freefall")`. Ieși dintr-o funcție înainte de final cu `return`.

- [ ] **Alarma sertarului:** timp de 10 secunde placa urmărește lumina; dacă `display.read_light_level()` trece de `60` (sertarul s-a deschis), ecranul arată `Image.SKULL` clipind de 3 ori, apoi misiunea se termină
- [ ] **Detectorul de cădere:** timp de 10 secunde placa așteaptă `freefall`; dacă îl detectează, arată `Image.SURPRISED` și derulează `"AAAH!"`, apoi misiunea se termină
- [ ] Cele două misiuni apar în meniu (panoul are acum **6 misiuni**), iar `NR_MISIUNI` e schimbat
- [ ] Contorul de misiuni făcute (A+B) funcționează și pentru ele
- [ ] Fiecare misiune are un **nume scurt** într-un comentariu deasupra funcției
- [ ] Salvează proiectul ca `Prenume_Nume_MP2_L01_Panou`

## Recapitulare pe scurt
1. Un program mare are **ordine**: importuri, constante, variabile, funcții, buclă.  
2. **Constantele** se scriu cu litere mari.  
3. `a % b` = restul împărțirii; ține meniul în cerc.  
4. Fiecare misiune e o **funcție**.  
5. O funcție care schimbă o variabilă de afară are **`global`**.

**Schema pe scurt (pe foaie):** constante · funcții-misiuni · `mod` ține alegerea · `% NR` face cercul · A alege, B pornește

## Quiz scurt
- Ce rest dă `11 % 4`?  
- Ce se întâmplă cu `mod` după a treia apăsare pe A (la 3 misiuni)?  
- De ce `a and b` e primul?  
- Cum adaugi o misiune nouă?

## Temă
**Misiunea mea.** Scrie acasă, în editor (merge și în simulator, fără placă), o **misiune nouă** pentru panou, inventată de tine, ca funcție `misiune_...()`. Adaug-o în meniu, cu `NR_MISIUNI` și `elif` în `porneste`. Salvează-l ca `Prenume_Nume_MP2_L01_Tema`.

## Ce urmează — Lecția 2
Înveți **listele** mai bine: faci o carte de mesaje în care dai pagina înainte și înapoi, cu `append`, indexuri și scuturare.

---

## Răspunsuri

**Exercițiul B:** `10 % 4 = 2`, `9 % 3 = 0`, `5 % 7 = 5`, `abs(-3) = 3`, `17 // 5 = 3`.

**Exercițiul C:** `NR_MISIUNI` devine `4` (sau `5` dacă există deja Nivela), iar în `porneste` se adaugă un `elif m == …:` cu funcția `misiune_salut()`:
```python
def misiune_salut():
    display.scroll("Salut!")
    display.show(Image.HAPPY)
    sleep(800)
```

**Exercițiul D:** 1) în `porneste` lipsește `global facute`. 2) `if m = 0` trebuie `if m == 0:`. 3) `"Misiunea " + mod` lipește text cu număr: trebuie `"Misiunea " + str(mod + 1)`. 4) în `while True` nu există `sleep`, iar `porneste` nu este apelat (lipsește verificarea lui B). 5) lipsește `from microbit import *` la început.

**Exercițiul E:** 1) Ca să se vadă că nu se schimbă și să fie ușor de găsit. 2) Întoarce `mod` la 0 după ultima misiune. 3) Ca să poată **schimba** variabila `facute` din afara funcției.
