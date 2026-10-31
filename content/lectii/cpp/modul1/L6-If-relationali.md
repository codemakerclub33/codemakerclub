# LECȚIA 6 — Ești admis?
### Operatori de comparare și if
**Modulul 1 · Bazele C++ · 2 ore**  
**Code Maker Club · Junior Coder**

> Azi programul tău învață să **ia decizii**: face anumite lucruri doar dacă o condiție este adevărată, exact ca blocul „dacă” din Scratch.  
> Fișier: `Prenume_Nume_L6.cpp`

---

## Ce facem azi
La final compari valori cu `<`, `>`, `<=`, `>=`, `==` și `!=`, scrii instrucțiuni `if`, știi diferența dintre `=` și `==` și poți traduce în cod o condiție spusă în cuvinte.

Până acum, programele tale au făcut mereu aceiași pași, de sus în jos. Programele reale **aleg**: dacă ai mai multe vieți, jocul continuă; dacă parola este corectă, intri în cont; dacă nota este peste 5, ești admis. Instrucțiunea `if` este primul pas spre programe care par „inteligente”, exact ca blocul „dacă” din Scratch.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare L5 și ideea de „condiție” |
| 15–30 | Operatori de comparare (**Exemplul 1**) |
| 30–60 | Structura `if` (**Exemplele 2–3**) |
| 60–80 | Capcanele `=` vs `==` și `;` după `if` (**Exemplele 4–5**) |
| 80–95 | `if` cu texte și cu `bool` (**Exemplele 6–7**) |
| 95–105 | Proiect model: temperatura (**Exemplul 8**) |
| 105–118 | Proiectul: Ești admis? + Provocarea |
| 118–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `<` `>` `<=` `>=` | Compară două valori | `nota >= 5` |
| `==` și `!=` | Egal cu / diferit de (la egal se scriu **două** semne) | `x == 7` |
| `if (condiție) { … }` | Execută acoladele doar dacă condiția e adevărată | `if (nota >= 5) { … }` |

---

## Pas cu pas

### Operatori de comparare

O **condiție** este o întrebare la care răspunsul este doar **adevărat** sau **fals**. O construim cu operatori de comparare:

| Operator | Înseamnă | Exemplu | Rezultat |
|----------|----------|---------|----------|
| `<` | mai mic | `3 < 5` | adevărat |
| `>` | mai mare | `3 > 5` | fals |
| `<=` | mai mic sau egal | `5 <= 5` | adevărat |
| `>=` | mai mare sau egal | `4 >= 5` | fals |
| `==` | egal cu | `7 == 7` | adevărat |
| `!=` | diferit de | `7 != 7` | fals |

**Atenție:** pentru „egal” se scriu **două** semne `==`. Un singur `=` înseamnă atribuire, adică „pune în cutie”.

### Exemplul 1 — Ce rezultat au comparațiile?

```cpp
#include <iostream>
using namespace std;

int main() {
    int a = 5, b = 8;

    cout << "a < b  : " << (a < b) << endl;
    cout << "a > b  : " << (a > b) << endl;
    cout << "a <= 5 : " << (a <= 5) << endl;
    cout << "b >= 9 : " << (b >= 9) << endl;
    cout << "a == b : " << (a == b) << endl;
    cout << "a != b : " << (a != b) << endl;
    return 0;
}
```

**Ieșire:**
```
a < b  : 1
a > b  : 0
a <= 5 : 1
b >= 9 : 0
a == b : 0
a != b : 1
```

Rezultatul unei comparații este o valoare `bool`: `1` pentru adevărat, `0` pentru fals (am învățat asta în L5). Comparația se pune între paranteze când o afișezi cu `cout`.

**Încearcă tu (5 min)**  
- [ ] Prevezi pe foaie rezultatul lui `7 > 3`, `4 == 5` și `9 != 9`  
- [ ] Verifici în program cu două variabile `int` și `cout`  

### Instrucțiunea `if`

```
if (conditie) {
    // instructiuni care se executa DOAR daca conditia este adevarata
}
```

Cum funcționează:
1. Programul calculează condiția din paranteze.
2. Dacă este **adevărată**, execută instrucțiunile din acolade.
3. Dacă este **falsă**, le **sare** și continuă cu ce urmează după acolada de închidere.

### Exemplul 2 — Primul `if`

```cpp
#include <iostream>
using namespace std;

int main() {
    int nota;

    cout << "Introdu nota: ";
    cin >> nota;

    if (nota >= 5) {
        cout << "Admis!" << endl;
    }

    cout << "Sfarsit program." << endl;
    return 0;
}
```

**Rulare 1** (tastezi `8`):
```
Introdu nota: 8
Admis!
Sfarsit program.
```

**Rulare 2** (tastezi `3`):
```
Introdu nota: 3
Sfarsit program.
```

Observă: mesajul „Sfarsit program.” apare **mereu**, pentru că este după `if`. Mesajul „Admis!” apare doar când nota este cel puțin 5. Testează **întotdeauna** ambele cazuri: și cel în care condiția e adevărată, și cel în care e falsă.

### Exemplul 3 — Paritatea cu restul împărțirii

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;

    cout << "Introdu un numar: ";
    cin >> n;

    if (n % 2 == 0) {
        cout << n << " este par." << endl;
    }
    if (n % 2 != 0) {
        cout << n << " este impar." << endl;
    }
    if (n % 5 == 0) {
        cout << n << " se imparte exact la 5." << endl;
    }
    return 0;
}
```

**Rulare** (tastezi `30`):
```
Introdu un numar: 30
30 este par.
30 se imparte exact la 5.
```

Aici folosești `%` din L4. Un număr este **par** dacă restul împărțirii la 2 este 0, și **divizibil cu 5** dacă restul împărțirii la 5 este 0. Cele două condiții pot fi adevărate în același timp, ca la `30`.

**Încearcă tu (10 min)**  
- [ ] Citești o vârstă și afișezi „Poți intra la film” doar dacă vârsta este cel puțin 12  
- [ ] Citești un număr și afișezi dacă este divizibil cu 3  
- [ ] Rulezi fiecare program cu o valoare pentru care condiția e adevărată și una pentru care e falsă  

### Capcanele începătorilor

### Exemplul 4 — `=` nu este `==`

```cpp
#include <iostream>
using namespace std;

int main() {
    int scor = 10;

    if (scor == 5) {
        cout << "Scorul este 5." << endl;
    }

    cout << "scor = " << scor << endl;
    return 0;
}
```

**Ieșire:**
```
scor = 10
```

Condiția `scor == 5` **compară**: este falsă, deci mesajul nu apare. Ce ar fi dacă ai scrie din greșeală `scor = 5`? Instrucțiunea ar **pune** valoarea `5` în `scor`, ar considera rezultatul adevărat (orice valoare diferită de 0 este adevărată) și ar afișa mesajul, iar scorul ar fi stricat. Compilatorul te poate avertiza, dar nu întotdeauna. Verifică mereu că ai scris **două** semne la comparație.

| Scrii | Face |
|-------|------|
| `scor = 5` | **pune** 5 în `scor` |
| `scor == 5` | **întreabă** dacă `scor` este 5 |

### Exemplul 5 — Acolade și punct și virgulă

```cpp
#include <iostream>
using namespace std;

int main() {
    int viata = 0;

    // Fara acolade: if controleaza DOAR prima instructiune de dupa el
    if (viata > 0)
        cout << "Esti in joc." << endl;
        cout << "Aceasta linie apare mereu!" << endl;

    // Cu acolade: ambele linii depind de if
    if (viata > 0) {
        cout << "Esti in joc." << endl;
        cout << "Aceasta linie apare doar cu viata." << endl;
    }

    cout << "Gata." << endl;
    return 0;
}
```

**Ieșire:**
```
Aceasta linie apare mereu!
Gata.
```

Două reguli de siguranță:
1. **Pune acolade `{ }` mereu**, chiar și pentru o singură instrucțiune. Fără ele, `if` controlează doar prima instrucțiune de după el, iar indentarea nu schimbă asta.
2. **Nu pune `;` imediat după condiție.** Scrisă ca `if (viata > 0);`, instrucțiunea `if` se termină acolo și blocul din acolade rulează întotdeauna.

**Încearcă tu (5 min)**  
- [ ] Scrii intenționat `if (x = 5)` și vezi ce se întâmplă  
- [ ] Pui un `;` după condiție și explici pe foaie de ce mesajul apare mereu  

### `if` cu alte tipuri de date

Poți compara și **caractere** (`'a'`, între apostrofuri) și **texte** (`"abc"`, între ghilimele), nu doar numere.

Condiția poate compara orice se poate compara: numere, caractere, texte, valori `bool`.

### Exemplul 6 — Compar texte

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string parola;

    cout << "Parola: ";
    cin >> parola;

    if (parola == "cpp2026") {
        cout << "Acces permis. Bine ai venit!" << endl;
    }
    if (parola != "cpp2026") {
        cout << "Parola gresita." << endl;
    }
    return 0;
}
```

**Rulare** (tastezi `abc`):
```
Parola: abc
Parola gresita.
```

Textele se compară tot cu `==` și `!=`. Textul din cod se pune între **ghilimele**.

### Exemplul 7 — `if` cu o valoare `bool`

```cpp
#include <iostream>
using namespace std;

int main() {
    int varsta;

    cout << "Cati ani ai? ";
    cin >> varsta;

    bool major = varsta >= 18;
    bool copil = varsta < 14;

    if (major) {
        cout << "Esti major." << endl;
    }
    if (copil) {
        cout << "Esti copil." << endl;
    }
    if (!major) {
        cout << "Nu ai voie sa conduci masina." << endl;
    }
    return 0;
}
```

**Rulare** (tastezi `12`):
```
Cati ani ai? 12
Esti copil.
Nu ai voie sa conduci masina.
```

O variabilă `bool` poate sta singură în condiție: `if (major)` înseamnă „dacă `major` este adevărat”. Semnul `!` înseamnă „nu”: `if (!major)` este adevărat când `major` este fals. (Despre `!` mai învățăm în L8.)

**Încearcă tu (10 min)**  
- [ ] Citești un cuvânt și verifici dacă este „salut”  
- [ ] Ai o variabilă `bool` pentru „plouă” și afișezi „Ia umbrela” când este adevărată  

### Un proiect complet

### Exemplul 8 — Temperatura

```cpp
#include <iostream>
using namespace std;

int main() {
    int temperatura;

    cout << "Temperatura de afara (grade): ";
    cin >> temperatura;

    cout << "Pe termometru: " << temperatura << " grade." << endl;

    if (temperatura < 0) {
        cout << "Ger! Pune caciula si manusi." << endl;
    }
    if (temperatura >= 15) {
        cout << "Vreme buna pentru joaca afara!" << endl;
    }
    if (temperatura >= 30) {
        cout << "Canicula! Bea multa apa." << endl;
    }
    return 0;
}
```

**Rulare 1** (tastezi `32`):
```
Temperatura de afara (grade): 32
Pe termometru: 32 grade.
Vreme buna pentru joaca afara!
Canicula! Bea multa apa.
```

**Rulare 2** (tastezi `-5`):
```
Temperatura de afara (grade): -5
Pe termometru: -5 grade.
Ger! Pune caciula si manusi.
```

**Rulare 3** (tastezi `8`):
```
Temperatura de afara (grade): 8
Pe termometru: 8 grade.
```

Observă două lucruri: pentru `32`, **două** condiții sunt adevărate în același timp (`>= 15` și `>= 30`), deci apar ambele mesaje. Iar pentru `8` nu este adevărată nicio condiție, deci nu apare niciun mesaj. În lecția următoare învățăm cum să alegi exact un singur drum.

**Încearcă tu (8 min)**  
- [ ] Faci același program cu temperaturi în alte intervale  
- [ ] Rulezi cu trei valori: una care dă două mesaje, una cu un mesaj și una fără niciun mesaj  

---

## De făcut azi — „Ești admis?”

| | Ce trebuie să ai |
|---|---|
| **Minim** | Un program care citește o notă și afișează „Admis!” dacă este cel puțin 5, testat cu o notă pentru care condiția e adevărată și una pentru care e falsă |
| **Complet** | Minim + minimum 3 instrucțiuni `if` (de exemplu „Felicitări!” pentru nota 10 și „Mai încearcă” pentru nota sub 5), date citite cu `cin` și condițiile spuse în cuvinte pe foaie |

**Pe foaie:** înainte de cod, scrie fiecare condiție **în cuvinte**, de exemplu: „nota este mai mare sau egală cu 5”.

**Gata când:**
- [ ] Programul compilează fără erori  
- [ ] Are minimum un `if` cu o condiție reală  
- [ ] Citește datele cu `cin`  
- [ ] Ai testat ambele cazuri: adevărat și fals  
- [ ] (Complet) Are 3 instrucțiuni `if` și condițiile scrise pe foaie  
- [ ] Fișierul se numește `Prenume_Nume_L6.cpp`

---

## Bonus ★★★ — Provocare: Fizz și Buzz
*Doar dacă ai terminat Complet.*

Citește un număr și afișează **trei mesaje independente**, fiecare cu propriul `if`:

- [ ] `Fizz` dacă numărul este divizibil cu 3  
- [ ] `Buzz` dacă numărul este divizibil cu 5  
- [ ] `Sapte la final` dacă ultima cifră este 7  
- [ ] Testezi cu `15` (apar două mesaje), `7`, `8` și `27` și scrii rezultatele pe foaie

---

## Greșeli frecvente
| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| Mesajul apare mereu, indiferent de valoare | `=` în loc de `==`, sau `;` după `if (…)` | `if (x == 5) {` |
| `expected '(' before …` | Ai uitat parantezele condiției | `if (x > 0) {` |
| Condiția nu se potrivește cu textul | Ai greșit sensul (`<` în loc de `>`) | Citește condiția cu voce tare |
| O instrucțiune după `if` apare mereu | Ai uitat acoladele | Pune `{ }` pentru fiecare `if` |
| `if (5 < x < 10)` nu merge cum vrei | În C++ nu se înlănțuie comparațiile | Se rezolvă cu `&&` (lecția 8) |
| `if (parola = "abc")` | `=` pune în loc să compare | `if (parola == "abc")` |
| `if (x == 'abc')` | Apostrofurile sunt doar pentru un caracter | `if (text == "abc")` pentru `string` |
| Un mesaj nu apare niciodată | Condiția nu poate fi adevărată (de exemplu `x < 0 && x > 5`, cu `&&` din lecția 8) | Verifică logica cu valori concrete |
| Nu știi care ramură se execută | Lipsesc mesajele de test | Adaugă un `cout` în fiecare `if` |

---

## Recapitulare pe scurt
- Comparațiile `<`, `>`, `<=`, `>=`, `==`, `!=` dau ca rezultat adevărat (`1`) sau fals (`0`).
- `if (condiție) { … }` execută blocul doar dacă condiția este adevărată.
- `=` pune o valoare, `==` compară. Nu le amesteca.
- Pune mereu acolade și nu scrie `;` după `if (…)`.
- Poți compara numere, caractere (`'a'`), texte (`"abc"`) și poți folosi direct o variabilă `bool`.
- Un program se testează cu valori pentru care condiția e adevărată **și** cu valori pentru care e falsă.

---

## Quiz scurt
- Ce rezultat dă o comparație?  
- Când se execută blocul din `if`?  
- Care e diferența dintre `=` și `==`?  
- De ce nu scriem `;` după `if (...)`?  
- De ce testăm cu valori pentru care condiția e adevărată și cu valori pentru care e falsă?  

---

## Temă
1. Refă **Exemplele 1–8** pe calculatorul tău și testează fiecare în ambele cazuri.  
2. Scrie un program care citește temperatura corpului (`double`) și afișează „Ai febră” dacă este peste 37.5.  
3. Scrie un program care citește un număr și afișează dacă este par, dacă este divizibil cu 3 și dacă este mai mare decât 100 (trei `if`-uri separate).  
4. Scrie un program care citește două numere și afișează „unul dintre numere este 0” când e cazul (poți folosi două `if`-uri).  
5. Salvează tot ca `Tema_L6_Prenume_Nume.cpp`.

### Exemple pentru acasă
Aceste exemple folosesc exact ce ai învățat azi. Scrie-le de mână, rulează-le și schimbă-le după preferințe.

**Acasă 1 — Compar două numere**
```cpp
#include <iostream>
using namespace std;

int main() {
    int a, b;

    cout << "Introdu doua numere: ";
    cin >> a >> b;

    if (a > b) {
        cout << a << " este mai mare decat " << b << endl;
    }
    if (a < b) {
        cout << a << " este mai mic decat " << b << endl;
    }
    if (a == b) {
        cout << "Numerele sunt egale." << endl;
    }
    return 0;
}
```

**Rulare** (tastezi `12 7`):
```
Introdu doua numere: 12 7
12 este mai mare decat 7
```

Pentru oricare două numere, exact **una** dintre cele trei condiții este adevărată.

**Acasă 2 — Compar caractere**
```cpp
#include <iostream>
using namespace std;

int main() {
    char raspuns;

    cout << "Iti place programarea? (d/n): ";
    cin >> raspuns;

    if (raspuns == 'd') {
        cout << "Super! Continua sa exersezi." << endl;
    }
    if (raspuns == 'n') {
        cout << "Hai sa o facem mai distractiva!" << endl;
    }
    return 0;
}
```

**Rulare** (tastezi `d`):
```
Iti place programarea? (d/n): d
Super! Continua sa exersezi.
```

Observă apostrofurile: `'d'` este un `char`. Programul tratează diferit literele `d` și `D`, deoarece sunt coduri ASCII diferite.

**Acasă 3 — Biletul de cinema**
```cpp
#include <iostream>
using namespace std;

int main() {
    int varsta;
    int pret = 20;

    cout << "Varsta: ";
    cin >> varsta;

    if (varsta < 6) {
        pret = 0;
    }
    if (varsta >= 65) {
        pret = pret / 2;
    }

    cout << "Pretul biletului: " << pret << " lei" << endl;
    return 0;
}
```

**Rulare 1** (tastezi `4`):
```
Varsta: 4
Pretul biletului: 0 lei
```

**Rulare 2** (tastezi `70`):
```
Varsta: 70
Pretul biletului: 10 lei
```

**Rulare 3** (tastezi `15`):
```
Varsta: 15
Pretul biletului: 20 lei
```

Un `if` poate și **schimba** valoarea unei variabile, nu doar să afișeze un mesaj. Prețul pornește de la 20 și se modifică doar dacă este îndeplinită condiția.

**Acasă 4 — „Ești admis?”**
```cpp
/*
   Program: Esti admis?
   Scop:    decide admiterea in functie de punctaj si varsta
*/
#include <iostream>
using namespace std;

int main() {
    int punctaj, varsta;

    cout << "===== ADMITERE CODE MAKER =====" << endl;
    cout << "Punctaj la test (0-100): ";
    cin >> punctaj;
    cout << "Varsta: ";
    cin >> varsta;

    cout << endl;
    cout << "Punctaj: " << punctaj << endl;
    cout << "Varsta: " << varsta << endl;

    if (punctaj >= 60) {
        cout << "Ai trecut testul!" << endl;
    }
    if (punctaj < 60) {
        cout << "Mai exerseaza si incearca din nou." << endl;
    }
    if (punctaj == 100) {
        cout << "Punctaj maxim! Felicitari!" << endl;
    }
    if (varsta < 12) {
        cout << "Atentie: grupa recomandata este 12+." << endl;
    }

    cout << "=============================" << endl;
    return 0;
}
```

**Rulare** (tastezi `100`, apoi `11`):
```
===== ADMITERE CODE MAKER =====
Punctaj la test (0-100): 100
Varsta: 11

Punctaj: 100
Varsta: 11
Ai trecut testul!
Punctaj maxim! Felicitari!
Atentie: grupa recomandata este 12+.
=============================
```

---

## Ce urmează — Lecția 7
Învățăm `else` și `else if`: cum alegi **între două sau mai multe drumuri**, fără să mai repeți condiția opusă. Programele tale vor fi mai scurte și mai ușor de citit.
