# LECȚIA 1 — Cartea mea de vizită
### Primul program și afișarea
**Modulul 1 · Bazele C++ · 2 ore**  
**Code Maker Club · Junior Coder**

> Azi scrii primul tău program în C++, îl rulezi și faci calculatorul să **afișeze** ce vrei tu: text, tabele și desene.  
> Fișier: `Prenume_Nume_L1.cpp` (ex. `Ana_Pop_L1.cpp`)

---

## Ce facem azi
La final știi să deschizi un fișier nou, să scrii structura de bază a unui program C++, să îl rulezi și să afișezi mai multe rânduri de text, un tabel și un desen din caractere.

Aproape tot ce face un program începe cu **afișarea** unui rezultat: un scor în joc, un meniu, un mesaj de eroare. C++ este folosit în jocuri, în sisteme de operare și la olimpiadele de informatică.

> Dacă ai învățat deja Scratch: acolo trăgeai blocuri, aici le **scrii** cu tastatura. Ideile (instrucțiuni, ordine) sunt aceleași.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Ce este C++ și pregătim fișierul în Code::Blocks |
| 15–40 | Primul program, linie cu linie (**Exemplul 1**) |
| 40–65 | Rând nou: `\n` și `endl` (**Exemplele 2–3**) |
| 65–85 | Tab, ghilimele și bară oblică (**Exemplele 4–5**) |
| 85–95 | Desen din caractere (**Exemplul 6**) |
| 95–118 | Proiectul: Cartea mea de vizită + Provocarea |
| 118–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `cout << "text";` | Afișează text pe ecran | `cout << "Salut";` |
| `\n` sau `endl` | Trece pe rândul următor | `cout << "A\n";` |
| `\t` | Tab (spațiu mare, pentru aliniere) | `"Nume\tNota"` |
| `\"` și `\\` | Afișează ghilimele și o bară `\` | `"Zice: \"Da\""` |

---

## Pas cu pas

### Ce este C++ și cum ajunge programul la calculator
**C++** este un limbaj de programare. Drumul unui program:
1. **Scrii** codul într-un fișier `.cpp` (*cod sursă*).
2. **Compilatorul** îl traduce în limbajul calculatorului. Dacă ai greșit ceva, primești mesaje de eroare. Sunt un ajutor, nu o pedeapsă.
3. **Rulezi** programul și vezi rezultatul.

### Pregătim fișierul (Code::Blocks)
1. Deschide **Code::Blocks**.
2. **File → New → Empty File**.
3. Salvează imediat ca `Prenume_Nume_L1.cpp`. Extensia `.cpp` este obligatorie.
4. Pentru a rula, apasă **Build and Run** (tasta **F9**).

**Încearcă tu (3 min)**  
- [ ] Ai un fișier gol, salvat cu extensia `.cpp`  
- [ ] Știi unde este butonul **Build and Run**  

### Exemplul 1 — „Salut, lume!”

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Salut, lume!";
    return 0;
}
```

**Ieșire:**
```
Salut, lume!
```

| Linia | Cod | Ce face |
|-------|-----|---------|
| 1 | `#include <iostream>` | Aduce biblioteca pentru afișare și citire (`cout`, `cin`) |
| 2 | `using namespace std;` | Ne lasă să scriem `cout` în loc de `std::cout` |
| 4 | `int main() {` | **Punctul de start.** Programul rulează ce e între `{` și `}` |
| 5 | `cout << "Salut, lume!";` | Afișează textul dintre ghilimele |
| 6 | `return 0;` | Spune că programul s-a terminat fără probleme |
| 7 | `}` | Închide `main` |

Trei reguli de ținut minte:
- Fiecare instrucțiune se termină cu **`;`**.
- Textul se pune între **ghilimele drepte** `"…"`.
- C++ face diferență între litere mari și mici: `cout` e corect, `Cout` nu.

**Încearcă tu (5 min)**  
- [ ] Scrii Exemplul 1 **de mână**, fără copy-paste  
- [ ] Apeși **Build and Run** și vezi mesajul  
- [ ] Schimbi textul cu numele tău și rulezi din nou  

### Exemplul 2 — Rând nou cu `\n`

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Imi place C++.";
    cout << "Programarea e distractiva.";
    return 0;
}
```

**Ieșire:**
```
Imi place C++.Programarea e distractiva.
```

`cout` **nu** trece singur pe rândul următor, deci textele ies lipite. Adaugă `\n` **în interiorul** ghilimelelor:

```cpp
    cout << "Imi place C++.\n";
    cout << "Programarea e distractiva.\n";
```

**Ieșire:**
```
Imi place C++.
Programarea e distractiva.
```

`\n` înseamnă „rând nou” (*new line*).

### Exemplul 3 — Rând nou cu `endl` și linie goală

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Titlu" << endl << endl;
    cout << "Rand 1" << endl;
    cout << "Rand 2" << endl;
    return 0;
}
```

**Ieșire:**
```
Titlu

Rand 1
Rand 2
```

`endl` face același lucru ca `\n`, dar se scrie **în afara** ghilimelelor, legat cu `<<`. Două la rând lasă o **linie goală**. Poți folosi oricare, dar rămâi la același în tot programul.

**Încearcă tu (8 min)**  
- [ ] Afișezi 4 rânduri: numele, clasa, școala, un hobby  
- [ ] Lași o linie goală între nume și restul  
- [ ] Faci o dată cu `\n` și o dată cu `endl`  

### Exemplul 4 — Tabel cu `\t`

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Nume\tClasa\tNota\n";
    cout << "Ana\t7A\t10\n";
    cout << "Ion\t7B\t9\n";
    return 0;
}
```

**Ieșire:**
```
Nume    Clasa   Nota
Ana     7A      10
Ion     7B      9
```

`\t` pune un **tab**: textul se aliniază în coloane.

### Exemplul 5 — Ghilimele și bară oblică în text

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Profesorul a spus: \"Bravo!\"" << endl;
    cout << "Fisierul meu: C:\\CodeMaker\\L1.cpp" << endl;
    return 0;
}
```

**Ieșire:**
```
Profesorul a spus: "Bravo!"
Fisierul meu: C:\CodeMaker\L1.cpp
```

- `\"` afișează ghilimele. Fără `\`, compilatorul crede că textul s-a terminat și dă eroare.
- `\\` afișează **o singură** bară `\`.

**Încearcă tu (8 min)**  
- [ ] Faci un tabel cu 3 coloane și 3 rânduri cu `\t`  
- [ ] Afișezi o replică cu ghilimele: `Mama a zis: "Fa-ti tema!"`  
- [ ] Afișezi o cale de forma `D:\Poze\Vacanta`  

### Exemplul 6 — Desen din caractere: pisica

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "  /\\_/\\" << endl;
    cout << " ( o.o )" << endl;
    cout << "  > ^ <" << endl;
    return 0;
}
```

**Ieșire:**
```
  /\_/\
 ( o.o )
  > ^ <
```

Fiecare rând al desenului este un `cout` separat. **Spațiile** din ghilimele poziționează desenul, deci numără-le. Urechile folosesc `\\` ca să apară o singură bară pe ecran.

**Încearcă tu (10 min)**  
- [ ] Desenezi un obiect nou (inimă, steag, mașină, copac) din minimum 4 rânduri  
- [ ] Tragi un chenar din `+`, `-` și `|` în jurul unui text  

---

## De făcut azi — „Cartea mea de vizită”

| | Ce trebuie să ai |
|---|---|
| **Minim** | Un program care afișează cel puțin 4 rânduri, fiecare pe linia lui: numele, clasa și școala, hobby-ul, jocul sau limbajul preferat |
| **Complet** | Minim + un mic tabel cu `\t`, un motto între ghilimele și un desen din caractere |

**Gata când:**
- [ ] Programul compilează fără erori  
- [ ] Are cel puțin 4 rânduri, fiecare pe linia lui  
- [ ] (Complet) Ai folosit `\t`, `\"` și un desen  
- [ ] Fișierul se numește `Prenume_Nume_L1.cpp`  

---

## Bonus ★★★ — Provocare: Biletul de joc
*Doar dacă ai terminat Complet.*

Afișează un bilet cu **chenar perfect drept**: titlu, jucător, nivel și scor, între două rânduri de `*`.

```
*************************
*      BILET JOC        *
*************************
* Jucator: Alex         *
* Nivel:   3            *
* Scor:    1250         *
*************************
```

- [ ] Toate rândurile au exact aceeași lungime  
- [ ] Nu folosești `\t` (tab-ul strică marginea din dreapta). Folosește **spații**  
- [ ] Sub bilet afișezi un mesaj între ghilimele: `"Mult succes!"`  

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| `expected ';'` | Ai uitat `;` | `cout << "Salut";` |
| `'Cout' was not declared` | Litere mari greșite | `cout` (litere mici) |
| `'cout' was not declared` | Lipsește `#include <iostream>` sau `using namespace std;` | Adaugă ambele linii |
| Eroare la ghilimele | Ghilimele curbe `“ ”` copiate din Word sau chat | Folosește `"` de la tastatură |
| Ghilimelele din text dau eroare | Ai uitat `\` în fața lor | `\"` |
| Programul se închide imediat | L-ai rulat din afara Code::Blocks | Folosește **Build and Run** |
| Desenul e strâmb | Spații lipsă sau în plus | Numără spațiile, compară rând cu rând |
| `\n` apare ca text | Ai scris `\n` în afara ghilimelelor | `cout << "Text\n";` |

**Cum citești o eroare:** compilatorul îți spune **linia** (ex. `main.cpp:6`) și o descriere. Începe cu **prima** eroare din listă; adesea celelalte dispar după ce o repari pe aceea.

---

## Recapitulare pe scurt

- Un program are: `#include <iostream>`, `using namespace std;` și `int main() { … return 0; }`.
- `cout << "text";` afișează. Instrucțiunea se termină cu `;`.
- `\n` și `endl` trec pe rândul următor.
- `\t` = tab, `\"` = ghilimele, `\\` = bară oblică.
- Spațiile din ghilimele contează la desene.

## Quiz scurt
- Ce trei lucruri are cel puțin un program C++?  
- Care e diferența dintre `\n` și `endl`?  
- Cum afișezi ghilimele în interiorul unui text?  
- De ce contează spațiile din ghilimele la un desen?  

---

## Temă
1. Refă **Exemplele 1–6** acasă, de mână.  
2. Scrie un program **„Despre mine”** cu minimum 6 rânduri, care folosește un tab și ghilimele.  
3. Desenează o scenă din 8–10 rânduri (de exemplu o casă cu brad și soare).  
4. Salvează tot ca `Tema_L1_Prenume_Nume.cpp`.

### Exemple pentru acasă
Aceste desene folosesc exact ce ai învățat azi. Scrie-le de mână și schimbă-le după preferințe.

**Brad**
```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "    *" << endl;
    cout << "   ***" << endl;
    cout << "  *****" << endl;
    cout << " *******" << endl;
    cout << "*********" << endl;
    cout << "    |" << endl;
    return 0;
}
```

**Cutie cu chenar** (fiecare rând are aceeași lungime)
```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "+----------------+" << endl;
    cout << "|  CODE MAKER    |" << endl;
    cout << "|  Clasa: 7A     |" << endl;
    cout << "+----------------+" << endl;
    return 0;
}
```

**Casă**
```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "     /\\" << endl;
    cout << "    /  \\" << endl;
    cout << "   /____\\" << endl;
    cout << "   | [] |" << endl;
    cout << "   |    |" << endl;
    cout << "   |_##_|" << endl;
    return 0;
}
```

**Robot cu mesaj** (desen, ghilimele cu `\"` și bare `\\` la un loc)
```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "   _____" << endl;
    cout << "  | o o |" << endl;
    cout << "  |  -  |   \"Salut! Sunt R2-CK.\"" << endl;
    cout << " /|_____|\\" << endl;
    cout << "  /     \\" << endl;
    return 0;
}
```

---

## Ce urmează — Lecția 2
Învățăm **comentariile** (`//` și `/* */`), structura unui program și cum scrii cod pe care îl poate citi și altcineva.
