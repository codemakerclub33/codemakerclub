# LECȚIA 10 — Meniul meu de proiecte
### Reluare: proiectele din lecțiile 2–9 într-un meniu
**Modulul 1 · Primii pași în Python · 2 ore**  
**Code Maker Club · Python Starter**

> Aceasta este lecția de final a modulului. Aduni într-un singur program proiectele din lecțiile trecute, cu mici modificări, și le alegi dintr-un **meniu**.  
> Proiect: **„Meniul meu de proiecte”** · fișier: `Prenume_Nume_P1_L10.py`

---

## Ce facem azi
La final ai un program cu un **meniu**: alegi un număr și rulează unul dintre proiectele tale din modul: **Fișa de jucător**, **Calculatorul**, **Oracolul**, **Interviul**, **Laboratorul de cuvinte** sau **Chestionarul**. Nu scrii totul de la zero: reiei codul din lecțiile trecute și îl modifici puțin. Așa lucrează și programatorii adevărați: refolosesc ce au făcut deja. Apoi îți verifici cunoștințele din tot modulul.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare modul · alegem proiectele pe care le reluăm |
| 10–30 | Meniul cu `input` și `if` / `elif` (**Exemplul 1**) |
| 30–60 | Minim: fișa, calculatorul, oracolul (**Exemplele 2–4**) |
| 60–95 | Complet: interviul, laboratorul, chestionarul, programul întreg (**Exemplele 5–8**) |
| 95–115 | Verificarea modulului 1 |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

Nu ai instrucțiuni noi. Combini ce știi deja:

| Ce folosim | Ce face | Din lecția |
|------------|---------|------------|
| `input()` + `if` / `elif` / `else` | Meniul: alegi un număr, rulează un proiect | 4 și 7 |
| variabile, `print`, chenar `"=" * 28` | Fișa de jucător și titlul | 1 și 2 |
| operatori `+ - * // %` | Calculatorul | 5 |
| f-string, `.upper()`, `[ ]` | Laboratorul de cuvinte | 6 |
| `import random`, `randint`, `choice` | Oracolul | 9 |

---

## 1. Ce proiecte reluăm

| Mod | Proiectul | Din lecția | Ce modificăm |
|-----|-----------|------------|--------------|
| 1 | Fișa de jucător | 2 | numele vine de la tastatură |
| 2 | Calculatorul | 5 | doar cinci operații |
| 3 | Oracolul | 9 | o listă scurtă de răspunsuri |
| 4 | Interviul | 4 | folosește numele deja citit |
| 5 | Laboratorul de cuvinte | 6 | lucrează pe numele tău |
| 6 | Chestionarul | 7 | două întrebări și un scor |

Modurile 1–3 sunt **Minim**, iar modurile 4–6 se adaugă la **Complet**.

**Încearcă tu (3 min)**  
- [ ] Am deschis fișierele din lecțiile 2, 5 și 9  
- [ ] Am creat fișierul nou `Prenume_Nume_P1_L10.py`  

---

## 2. Meniul

### Exemplul 1 — Meniul cu trei opțiuni

```python
nume = input("Cum te cheama? ")
print("=" * 28)
print(f"Meniul de proiecte al lui {nume}")
print("=" * 28)
print("1. Fisa de jucator")
print("2. Calculatorul")
print("3. Oracolul")
alegere = input("Alege un numar de la 1 la 3: ")

if alegere == "1":
    print("Aici vine fisa")
elif alegere == "2":
    print("Aici vine calculatorul")
elif alegere == "3":
    print("Aici vine oracolul")
else:
    print("Nu exista aceasta optiune.")
```

- `input` dă mereu **text**, de aceea comparăm cu `"1"`, nu cu `1`.  
- `elif` verifică pe rând celelalte variante, iar `else` prinde orice altceva.  
- Mesajele „Aici vine...” sunt locurile în care pui codul proiectelor.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 1** (Meniul cu trei opțiuni)  
- [ ] Am încercat toate cele trei opțiuni și un număr greșit  

---

## 3. Minim — primele trei moduri

Pui codul fiecărui proiect în locul mesajului „Aici vine...”. Codul din interior se **indentează** cu patru spații. Pe prima linie a fișierului scrii `import random`, pentru Oracol. Mai jos vezi fiecare mod împreună cu linia lui din `if` / `elif`.

### Exemplul 2 — Mod 1: Fișa de jucător (lecția 2)

```python
if alegere == "1":
    nivel = 1
    puncte = 0
    vieti = 3
    print("Jucator:", nume)
    print("Nivel:", nivel, " Puncte:", puncte, " Vieti:", vieti)
    puncte = puncte + 50
    nivel = nivel + 1
    vieti -= 1
    print(nume, "a terminat un nivel!")
    print("Nivel:", nivel, " Puncte:", puncte, " Vieti:", vieti)
```

Față de lecția 2, numele nu mai e scris în cod, ci vine din `input`.

### Exemplul 3 — Mod 2: Calculatorul (lecția 5)

```python
elif alegere == "2":
    a = int(input("Primul numar: "))
    b = int(input("Al doilea numar: "))
    print(a, "+", b, "=", a + b)
    print(a, "-", b, "=", a - b)
    print(a, "*", b, "=", a * b)
    print(a, "//", b, "=", a // b)
    print(a, "%", b, "=", a % b)
```

### Exemplul 4 — Mod 3: Oracolul (lecția 9)

```python
elif alegere == "3":
    intrebare = input("Pune o intrebare cu raspuns da/nu: ")
    raspunsuri = ["Da, sigur!", "Cu siguranta nu.", "Poate...", "Stelele spun da."]
    print("Raspunsul oracolului:", random.choice(raspunsuri))
    print("Numarul tau norocos:", random.randint(1, 6))
```

**Încearcă tu (10 min)**  
- [ ] Am pus modul 1 în meniu și l-am rulat  
- [ ] Am pus modul 2 în meniu și l-am rulat  
- [ ] Am pus modul 3 în meniu și l-am rulat  
- [ ] Am schimbat ceva în fiecare mod, după preferințe  

---

## 4. Complet — alte trei moduri și programul întreg

### Exemplul 5 — Mod 4: Interviul (lecția 4)

```python
elif alegere == "4":
    varsta = int(input("Cati ani ai? "))
    joc = input("Care e jocul tau preferat? ")
    print("Litere in nume:", len(nume))
    print("Peste 5 ani vei avea", varsta + 5, "ani")
    print("Jocul preferat:", joc)
```

### Exemplul 6 — Mod 5: Laboratorul de cuvinte (lecția 6)

```python
elif alegere == "5":
    print(f"Cu litere mari: {nume.upper()}")
    print(f"Prima litera:   {nume[0]}")
    print(f"Invers:         {nume[::-1]}")
    print(f"Lungime:        {len(nume)}")
```

### Exemplul 7 — Mod 6: Chestionarul (lecția 7)

```python
elif alegere == "6":
    scor = 0
    r1 = input("1. Care e capitala Romaniei? ")
    if r1.lower() == "bucuresti":
        scor += 1
    r2 = int(input("2. Cat face 7 * 8? "))
    if r2 == 56:
        scor += 1
    print(f"Scor: {scor} din 2")
    if scor == 2:
        print("Excelent!")
    elif scor == 1:
        print("Bravo!")
    else:
        print("Mai incearca!")
```

### Exemplul 8 — Programul complet

Așa arată toate piesele puse laolaltă. Compară-l cu al tău.

```python
import random

nume = input("Cum te cheama? ")
print("=" * 28)
print(f"Meniul de proiecte al lui {nume}")
print("=" * 28)
print("1. Fisa de jucator")
print("2. Calculatorul")
print("3. Oracolul")
print("4. Interviul")
print("5. Laboratorul de cuvinte")
print("6. Chestionarul")
alegere = input("Alege un numar de la 1 la 6: ")
print("-" * 28)

if alegere == "1":
    nivel = 1
    puncte = 0
    vieti = 3
    print("Jucator:", nume)
    print("Nivel:", nivel, " Puncte:", puncte, " Vieti:", vieti)
    puncte = puncte + 50
    nivel = nivel + 1
    vieti -= 1
    print(nume, "a terminat un nivel!")
    print("Nivel:", nivel, " Puncte:", puncte, " Vieti:", vieti)
elif alegere == "2":
    a = int(input("Primul numar: "))
    b = int(input("Al doilea numar: "))
    print(a, "+", b, "=", a + b)
    print(a, "-", b, "=", a - b)
    print(a, "*", b, "=", a * b)
    print(a, "//", b, "=", a // b)
    print(a, "%", b, "=", a % b)
elif alegere == "3":
    intrebare = input("Pune o intrebare cu raspuns da/nu: ")
    raspunsuri = ["Da, sigur!", "Cu siguranta nu.", "Poate...", "Stelele spun da."]
    print("Raspunsul oracolului:", random.choice(raspunsuri))
    print("Numarul tau norocos:", random.randint(1, 6))
elif alegere == "4":
    varsta = int(input("Cati ani ai? "))
    joc = input("Care e jocul tau preferat? ")
    print("Litere in nume:", len(nume))
    print("Peste 5 ani vei avea", varsta + 5, "ani")
    print("Jocul preferat:", joc)
elif alegere == "5":
    print(f"Cu litere mari: {nume.upper()}")
    print(f"Prima litera:   {nume[0]}")
    print(f"Invers:         {nume[::-1]}")
    print(f"Lungime:        {len(nume)}")
elif alegere == "6":
    scor = 0
    r1 = input("1. Care e capitala Romaniei? ")
    if r1.lower() == "bucuresti":
        scor += 1
    r2 = int(input("2. Cat face 7 * 8? "))
    if r2 == 56:
        scor += 1
    print(f"Scor: {scor} din 2")
    if scor == 2:
        print("Excelent!")
    elif scor == 1:
        print("Bravo!")
    else:
        print("Mai incearca!")
else:
    print("Nu exista aceasta optiune.")
```

**Încearcă tu (10 min)**  
- [ ] Am adăugat modurile 4, 5 și 6  
- [ ] Meniul are șase opțiuni, iar textul „Alege un număr de la 1 la 6” e corect  
- [ ] Am rulat programul de șase ori, câte o dată pentru fiecare mod  

---

## 5. Verificarea modulului 1

Rezolvă pe foaie, fără să te uiți în lecții. Răspunsurile sunt la final.

| # | Întrebare |
|---|-----------|
| 1 | Ce afișează `print("2" + "3")`? |
| 2 | Ce tip are `3.5`? |
| 3 | Ce afișează `print(int("5") + 3)`? |
| 4 | Cât este `17 % 5`? Dar `17 // 5`? |
| 5 | Ce afișează `"Python"[0]`? |
| 6 | Ce face `text.upper()`? |
| 7 | Ce afișează `print(3 > 5 or 2 < 4)`? |
| 8 | Ce valori poate da `random.randint(1, 6)`? |
| 9 | Ce tip de date dă mereu `input()`? |
| 10 | Ce afișează `print(not True and False)`? |

**Răspunsuri:** 1) `23` · 2) `float` · 3) `8` · 4) `2` și `3` · 5) `P` · 6) transformă toate literele în litere mari · 7) `True` · 8) orice număr întreg de la 1 la 6, inclusiv · 9) text (`str`) · 10) `False`.

**Autoevaluare** — bifează cât ești de sigur:

Bifează ce poți face **singur**:

- [ ] afișez text și numere cu `print`
- [ ] folosesc variabile
- [ ] citesc date cu `input` și le transform cu `int()`
- [ ] fac calcule cu `+ - * / // % **`
- [ ] construiesc mesaje cu f-string
- [ ] iau decizii cu `if / elif / else`
- [ ] leg condiții cu `and`, `or`, `not`
- [ ] folosesc `random`

---

## De făcut azi — „Meniul meu de proiecte”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Meniu cu 3 moduri: Fișa de jucător, Calculatorul, Oracolul |
| **Complet** | Minim + Interviul, Laboratorul de cuvinte, Chestionarul și o modificare a ta la fiecare mod |

### Pasul 1 — Minim
- [ ] Meniul cu `input`, `if`, `elif` și `else`  
- [ ] Modurile 1, 2 și 3, luate din lecțiile 2, 5 și 9  

### Pasul 2 — Complet
- [ ] Modurile 4, 5 și 6, luate din lecțiile 4, 6 și 7  
- [ ] La fiecare mod ai schimbat ceva: un text, o valoare, o întrebare  
- [ ] Salutul de la început folosește numele tău  

**Gata când:**  
- [ ] Programul rulează fără erori  
- [ ] Fiecare opțiune din meniu pornește proiectul potrivit  
- [ ] O opțiune greșită afișează un mesaj, nu o eroare  
- [ ] Ai completat verificarea modulului  
- [ ] Fișierul se numește `Prenume_Nume_P1_L10.py`  

---

## Bonus ★★★ — Provocare: Modul tău secret
*Doar dacă ai terminat Complet.*

- [ ] Adaugă un al șaptelea mod, luat din lecția 8: **Poarta parcului**, cu `and` și `or`  
- [ ] La Oracol, afișează și un mesaj special dacă numărul norocos este 6  
- [ ] Afișează la sfârșit, în orice mod, mesajul „La revedere,” urmat de numele tău  

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| Meniul nu face nimic la `1` | Ai comparat cu număr: `alegere == 1` | `alegere == "1"`, cu ghilimele |
| `IndentationError` | Codul din mod nu e indentat la fel | Patru spații pentru fiecare linie din mod |
| `NameError: name 'random' is not defined` | Ai uitat `import random` | `import random` pe prima linie |
| Se rulează mai multe moduri | Ai scris `if` în loc de `elif` | `elif` pentru celelalte opțiuni |
| `ValueError` la calculator | Ai scris litere unde se cere număr | Scrie numere întregi |
| `NameError` la `nume` | Ai folosit `nume` înainte să îl citești | Citește `nume` la începutul programului |

---

## Recapitulare pe scurt — tot Modulul 1

- `print`, `input`, variabile, tipuri: `int`, `float`, `str`, `bool`.
- Operatori: `+ - * / // % **` și ordinea operațiilor.
- f-string și metode de text: `f"..."`, `.upper()`, `.lower()`, `[ ]`, `[ : ]`.
- Decizii: `if`, `elif`, `else`, cu `==`, `!=`, `<`, `>`, `<=`, `>=`.
- Condiții combinate: `and`, `or`, `not`.
- Noroc: `import random`, `randint`, `choice`, liste simple.
- Un meniu cu `input` și `elif` pune proiectele laolaltă.

---

## Quiz scurt
- Care sunt tipurile de bază învățate în acest modul?  
- Ce operator dă restul împărțirii?  
- Care e diferența dintre `and` și `or`?  
- Ce face `random.choice(lista)`?  
- Cum construiești un text cu valori din variabile?  

---

## Temă
1. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
2. Arată programul unui prieten și întreabă-l ce mod ar mai adăuga.  
3. Scrie pe o foaie **cinci lucruri** pe care le poți face acum cu Python și nu le puteai face acum 10 lecții.  
4. Salvează totul ca `Tema_P1_L10_Prenume_Nume.py`.

---

## Ce urmează — Modulul 2
Învățăm să **repetăm** (cu `for` și `while`), să **colecționăm** (liste, dicționare) și să **organizăm** programele în funcții.
