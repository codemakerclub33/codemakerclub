# LECȚIA 1 — Cartea mea de vizită
**Modulul 1 · Primii pași în Python · 2 ore**  
**Code Maker Club · Python Starter**

> Azi pornești Thonny, programul în care vei scrie Python, și îți scrii **primul program**: unul care vorbește pe ecran!  
> Proiect: **„Cartea mea de vizită”** · fișier: `Prenume_Nume_P1_L1.py` (ex. `Ana_Pop_P1_L1.py`)

---

## Ce facem azi
La final ai primul tău program: o **carte de vizită** afișată pe ecran, cu text, numere, un desen din caractere și comentarii. Știi ce este Python, cum pornești Thonny, cum scrii și rulezi un program și cum citești o eroare. Python este unul dintre cele mai folosite limbaje din lume: îl folosesc programatorii de jocuri, savanții care studiază spațiul, firmele care fac aplicații și roboți. E ușor de citit, aproape ca engleza, de aceea se potrivește pentru primii pași.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Ce este un program și ce este Python · pornim Thonny |
| 15–35 | Cum arată Thonny, salvăm și rulăm (**Exemplul 1**) |
| 35–60 | `print` cu text și cu numere (**Exemplele 2–4**) |
| 60–80 | Ghilimele, rânduri noi, comentarii (**Exemplele 5–6**) |
| 80–105 | Desen din caractere și mini-proiect (**Exemplele 7–8**) |
| 105–115 | Erori: cum le citim |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `print(...)` | Afișează pe ecran | `print("Salut!")` |
| `"text"` și `2 + 3` | Cu ghilimele = text; fără ghilimele = calcul | `print(2 + 3)` afișează `5` |
| `sep=` și `end=` | Schimbă separatorul și finalul rândului | `print("a", "b", sep="-")` |
| `\n` | Trece pe rândul următor | `"Linia 1\nLinia 2"` |
| `#` | Comentariu, ignorat de Python | `# notiță pentru mine` |
| `"=" * 22` | Repetă un text | chenar de 22 de `=` |

---

## 1. Ce este un program?

Un **program** este o listă de instrucțiuni pe care calculatorul le face **una după alta, de sus în jos**, exact cum le-ai scris. Calculatorul nu ghicește ce ai vrut să spui: face doar ce scrii.

**Python** este limbajul în care scriem instrucțiunile. Programul pe care îl scrii se numește **cod**.

### Cum pornim Thonny
**Thonny** este un program pentru începători, în care scrii și rulezi Python. Dacă nu e instalat pe calculatorul tău, îl descarci gratuit de pe **thonny.org** (cere ajutorul unui adult sau al profesorului).

Fereastra Thonny are două zone importante:

| Zonă | Unde e | Ce face |
|------|--------|---------|
| **Editorul** | sus, zona mare | Aici **scrii** programul |
| **Shell** | jos | Aici apare **rezultatul** programului |

Butonul verde cu **săgeată (▶ Run)** din bara de sus pornește programul. Tasta rapidă este **F5**.

### Salvarea
Înainte să rulezi pentru prima dată, Thonny îți cere să salvezi:
1. **File → Save as…**  
2. Creează un dosar `Python` și pune-l la tine.  
3. Numele fișierului: `Prenume_Nume_P1_L1.py`  

> Fișierele Python se termină mereu cu `.py`. Folosește litere, cifre și `_`. **Fără spații și fără diacritice** în numele fișierului.

---

## 2. Primul program

### Exemplul 1 — Salut, lume!

```python
print("Salut, lume!")
```

**Ieșire:**
```text
Salut, lume!
```

Ai scris o singură linie, dar ea conține câteva lucruri importante:
- `print` este o **funcție**: o comandă gata făcută care **afișează** ceva pe ecran.
- Parantezele `( )` sunt obligatorii. Între ele pui ce vrei să afișezi.
- Textul stă între **ghilimele** `" "`. Python afișează ce e între ele, fără ghilimele.

> Scrie `print` cu **litere mici**. `Print` sau `PRINT` nu funcționează!

**Încearcă tu (3 min)**  
- [ ] Am scris și am rulat **Exemplul 1** (Salut, lume!)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 3. Mai multe linii

### Exemplul 2 — Rânduri una sub alta

```python
print("Ma numesc Alex.")
print("Am 10 ani.")
print("Imi place Python!")
```

**Ieșire:**
```text
Ma numesc Alex.
Am 10 ani.
Imi place Python!
```

Fiecare `print` afișează pe un rând nou. Programul merge **de sus în jos**: dacă schimbi ordinea liniilor, se schimbă și ordinea afișării.

> **Despre diacritice:** în Thonny poți scrie și `ă`, `â`, `î`, `ș`, `ț` în text, dacă tastatura ta le are. În exemplele din lecții scriem uneori fără, ca să fie sigur că funcționează oriunde.

### Exemplul 3 — Python calculează

```python
print(2 + 3)
print(10 - 4)
print(6 * 7)
print(20 / 5)
print("2 + 3")
```

**Ieșire:**
```text
5
6
42
4.0
2 + 3
```

Observă:
- numerele **nu** au ghilimele; Python le calculează înainte să le afișeze;
- `*` înseamnă **înmulțire** și `/` înseamnă **împărțire**;
- împărțirea dă mereu un număr cu virgulă (`4.0`). În Python, virgula zecimală se scrie cu **punct**;
- ultima linie are ghilimele: Python vede **text** și îl afișează cum e, fără calcul. Aceasta este una dintre cele mai importante idei din Python.

### Exemplul 4 — Mai multe lucruri într-un `print`

```python
print("Am", 10, "ani")
print("Ana", "si", "Mihai")
print("a", "b", "c", sep="-")
print("Salut", end="!")
print(" Ce faci?")
```

**Ieșire:**
```text
Am 10 ani
Ana si Mihai
a-b-c
Salut! Ce faci?
```

- Poți pune în `print` mai multe lucruri, **separate prin virgulă**. Python le afișează cu un spațiu între ele.
- `sep="-"` schimbă separatorul (în loc de spațiu pune `-`).
- `end="!"` schimbă ce vine **la sfârșit** (în loc să treacă pe rând nou, pune `!`).

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 2** (Rânduri una sub alta)  
- [ ] Am scris și am rulat **Exemplul 3** (Python calculează)  
- [ ] Am scris și am rulat **Exemplul 4** (Mai multe lucruri într-un `print`)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 4. Ghilimele, rând nou și comentarii

### Exemplul 5 — Ghilimele și rând nou

```python
print("Ce faci?")
print('Ce faci?')
print('El a spus: "Salut!"')
print("Linia 1\nLinia 2\nLinia 3")
```

**Ieșire:**
```text
Ce faci?
Ce faci?
El a spus: "Salut!"
Linia 1
Linia 2
Linia 3
```

- Poți folosi ghilimele **duble** `" "` sau **simple** `' '`, dar trebuie să închizi cu același fel cu care ai deschis. Dacă în text ai nevoie de ghilimele, folosește pentru încadrare celălalt fel.
- `\n` înseamnă „treci pe un rând nou”. Se scrie cu semnul **backslash** `\`, urmat de litera `n`. Dacă nu găsești backslash pe tastatură, cere ajutor profesorului: poziția lui diferă de la tastatură la tastatură.

### Exemplul 6 — Comentarii

```python
# Acesta este un comentariu. Python il ignora.
print("Salut!")  # Si aici am un comentariu

# print("Aceasta linie nu se executa")
print("Gata!")
```

**Ieșire:**
```text
Salut!
Gata!
```

Un **comentariu** începe cu `#`. Tot ce vine după `#`, până la capătul rândului, este ignorat de Python. Îl folosim ca să:
- **explicăm** ce face codul (pentru noi sau pentru alții);
- **oprim temporar** o linie, fără să o ștergem.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 5** (Ghilimele și rând nou)  
- [ ] Am scris și am rulat **Exemplul 6** (Comentarii)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 5. Desen din caractere

### Exemplul 7 — Bradul

```python
print("    *    ")
print("   ***   ")
print("  *****  ")
print(" ******* ")
print("    |    ")
```

**Ieșire:**
```text
    *    
   ***   
  *****  
 ******* 
    |    
```

Desenul apare exact cum l-ai scris. Spațiile din ghilimele contează, ele aliniază desenul!

### Exemplul 8 — Mini-proiect: carte de vizită

```python
# Cartea mea de vizita
print("=" * 22)
print("  Nume:  Alex Popescu")
print("  Varsta:", 10)
print("  Hobby: jocuri si Python")
print("=" * 22)
```

**Ieșire:**
```text
======================
  Nume:  Alex Popescu
  Varsta: 10
  Hobby: jocuri si Python
======================
```

Trucul nou: `"=" * 22` repetă textul `=` de 22 de ori. Așa faci repede un chenar.

**Încearcă tu (5 min)**  
- [ ] Am scris și am rulat **Exemplul 7** (Bradul)  
- [ ] Am scris și am rulat **Exemplul 8** (Mini-proiect: carte de vizită)  
- [ ] Am schimbat o valoare din cod și am observat ce se schimbă  

---

## 6. Erorile nu sunt un pericol

Când scrii ceva greșit, Python nu se supără: îți spune **ce** și **unde** nu merge, în zona Shell. Exemplu, ai uitat o ghilimea:

```text
print("Salut)
```

Python afișează un mesaj cu `SyntaxError` și o linie (de exemplu `line 1`). Citește mesajul, caută linia indicată și corectează.

Cum procedezi:
1. Citește **ultima linie** a mesajului roșu.  
2. Uită-te la **linia** indicată (și la cea de dinaintea ei).  
3. Verifică **ghilimelele**, **parantezele** și **scrierea cu litere mici**.  
4. Rulează din nou.

---

## De făcut azi — „Cartea mea de vizită”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Un program cu cel puțin 3 linii `print` cu date despre tine |
| **Complet** | Minim + chenar din `=`, un calcul afișat, un desen din caractere și minimum 2 comentarii |

### Pasul 1 — Minim
Scrie un program care afișează, cu `print`, o carte de vizită cu numele tău, vârsta ta și un hobby, pe cel puțin 3 rânduri.

- [ ] Programul rulează fără erori  
- [ ] Afișează cel puțin 3 rânduri despre tine  

### Pasul 2 — Complet
Îmbunătățești cartea de vizită:

- [ ] Are un chenar de `=` sus și jos, făcut cu `"=" * ...`  
- [ ] Afișează un calcul (de exemplu anul nașterii)  
- [ ] Are un desen din caractere (`*`, `#`, `|`, `-`, `/`): o casă, o stea sau un robot, minimum 5 linii  
- [ ] Are minimum 2 comentarii cu `#`  
- [ ] Fișierul se numește `Prenume_Nume_P1_L1.py`  

---

## Bonus ★★★ — Provocare: Robotul cu numărătoare
*Doar dacă ai terminat Complet.*

Robotul tău numără înainte de start.

- [ ] Afișează `1 - 2 - 3 - GO!` pe același rând, cu `sep` și `end`  
- [ ] Desenează un robot mare (10 rânduri) și pune-i un comentariu la fiecare parte  
- [ ] Afișează un mesaj pe 3 rânduri folosind **un singur** `print` și `\n`  

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| `NameError: name 'Print' is not defined` | Ai scris `Print` cu literă mare | `print` cu litere mici |
| `SyntaxError` cu „EOL while scanning string literal” sau „unterminated string literal” | Ai uitat o ghilimea | `print("Salut")` |
| `SyntaxError` cu „unexpected EOF” sau „'(' was never closed” | Ai uitat `)` | `print("Salut")` |
| `NameError: name 'Salut' is not defined` | Ai uitat ghilimelele din jurul textului | `print("Salut")` |
| `IndentationError: unexpected indent` | Ai pus spații la începutul liniei | Începe linia din marginea din stânga |
| Textul apare cu semne ciudate la ghilimele | Ai copiat ghilimele „ ” dintr-un document | Folosește ghilimelele `" "` de la tastatură |
| Nu se întâmplă nimic | Ai uitat să apeși **Run** | Apasă ▶ sau **F5** |

---

## Recapitulare pe scurt

- Un program este o listă de instrucțiuni, executate **de sus în jos**.
- Scrii codul în **editorul** Thonny și vezi rezultatul în **Shell**.
- `print(...)` afișează pe ecran. Textul stă între ghilimele.
- Fără ghilimele, `print(2 + 3)` calculează; cu ghilimele, `print("2 + 3")` afișează textul.
- `sep` schimbă separatorul, `end` schimbă ce vine la final.
- `\n` trece pe rândul următor.
- `#` începe un comentariu, ignorat de Python.
- Erorile îți spun ce și unde: citește ultima linie și linia indicată.

---

## Quiz scurt
- Ce face `print`?  
- Care e diferența dintre `print("5 + 5")` și `print(5 + 5)`?  
- Cu ce semn începe un comentariu și ce face Python cu el?  
- Ce face `\n` într-un text?  
- Unde vezi rezultatul programului în Thonny și ce apeși ca să-l rulezi?

---

## Temă
1. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
2. Scrie un program care afișează **orarul tău de azi**, minimum 6 rânduri, într-un chenar.  
3. Desenează din caractere **numele tău** sau **un animal**.  
4. **Găsește greșelile:** programul de mai jos are 4 greșeli. Rescrie-l corect și explică pe foaie fiecare corecție.

```text
Print("Salut!")
print("Ma numesc Ana)
print(Am 10 ani)
print("Gata!"
```

5. Salvează totul ca `Tema_P1_L1_Prenume_Nume.py`.

---

## Ce urmează — Lecția 2
Învățăm **variabilele**: cutii cu nume în care programul ține minte numere și cuvinte.
