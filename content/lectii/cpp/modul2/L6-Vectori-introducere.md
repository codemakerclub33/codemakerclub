# LECȚIA 6 — Cutia cu piese
### Vectori: mai multe valori sub un singur nume
**Modulul 2 · Bucle și vectori · 2 ore**  
**Code Maker Club · Loop Master**

> Azi înveți să ții mai multe valori în **același loc**, ca într-o cutie cu sertare numerotate. Citești greutatea mai multor piese, le afișezi, le afișezi invers și schimbi una dintre ele.  
> Fișier: `Prenume_Nume_M2L6.cpp`

---

## Ce facem azi
La final declari un vector, știi că primul element are indicele `0`, citești și afișezi un vector cu `for`, îl parcurgi și invers, schimbi un element și ai grijă să nu ieși din limitele lui.

Până acum, fiecare valoare avea variabila ei. Pentru 5 piese ai fi scris 5 variabile, pentru 100 de piese, 100. Un **vector** (numit și **tablou**) rezolvă problema: ai **un singur nume** și mai multe valori, fiecare cu **numărul ei de ordine**. Iar cu bucla `for`, pe care o știi deja, treci prin toate valorile cu trei rânduri.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare L5: bucle imbricate |
| 15–35 | De ce vectori și cum îi declarăm (**Exemplele 1–2**) |
| 35–60 | Citim și afișăm cu `for` (**Exemplul 3**) |
| 60–80 | Schimbăm elemente, `n` piese dintr-un vector mai mare (**Exemplul 4**) |
| 80–90 | Parcurgere inversă și limitele vectorului (**Exemplul 5**) |
| 90–115 | Proiectul: Cutia cu piese + Provocarea (**Exemplul 6**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `int g[5];` | Creează un vector cu 5 locuri, fără valori | `int g[5];` |
| `int g[5] = {25, 40, 15, 60, 30};` | Creează vectorul și îi dă valori | `g[0]` este `25` |
| `g[i]` | Elementul de pe poziția `i` (numărătoarea începe de la `0`) | `g[2]` este al treilea element |
| `g[i] = x;` | Schimbă elementul de pe poziția `i` | `g[1] = 99;` |

---

## Pas cu pas

### Exemplul 1 — Fără vector și cu vector

Cinci piese, cinci variabile:

```cpp
#include <iostream>
using namespace std;

int main() {
    int g0 = 25, g1 = 40, g2 = 15, g3 = 60, g4 = 30;

    cout << "Piesa 1: " << g0 << " g" << endl;
    cout << "Piesa 2: " << g1 << " g" << endl;
    cout << "Piesa 3: " << g2 << " g" << endl;
    cout << "Piesa 4: " << g3 << " g" << endl;
    cout << "Piesa 5: " << g4 << " g" << endl;
    return 0;
}
```

**Ieșire:**
```
Piesa 1: 25 g
Piesa 2: 40 g
Piesa 3: 15 g
Piesa 4: 60 g
Piesa 5: 30 g
```

Funcționează, dar nu putem folosi o buclă: fiecare variabilă are alt nume. Cu 100 de piese, programul ar avea sute de linii. Un **vector** pune toate valorile sub același nume:

```cpp
int g[5] = {25, 40, 15, 60, 30};
```

Acum `g` este o „cutie” cu 5 sertare. Sertarul de la poziția `0` conține `25`, cel de la poziția `1` conține `40` și așa mai departe.

**Încearcă tu (5 min)**  
- [ ] Rulezi programul cu cinci variabile  
- [ ] Schimbi o greutate și rulezi din nou  
- [ ] Spui pe foaie de ce nu putem folosi un `for` cu variabilele `g0`, `g1`, `g2`  

### Exemplul 2 — Indicii încep de la 0

```cpp
#include <iostream>
using namespace std;

int main() {
    int g[5] = {25, 40, 15, 60, 30};

    cout << "Prima piesa: " << g[0] << " g" << endl;
    cout << "A treia piesa: " << g[2] << " g" << endl;
    cout << "Ultima piesa: " << g[4] << " g" << endl;
    return 0;
}
```

**Ieșire:**
```
Prima piesa: 25 g
A treia piesa: 15 g
Ultima piesa: 30 g
```

Numărul din paranteze pătrate se numește **indice** sau **poziție**. **Numărătoarea începe de la `0`**, deci un vector cu 5 elemente are indicii `0, 1, 2, 3, 4`:

| Indice | 0 | 1 | 2 | 3 | 4 |
|--------|---|---|---|---|---|
| Valoare | 25 | 40 | 15 | 60 | 30 |

Ultimul element are indicele `4`, adică **dimensiunea minus 1**. La un vector cu 5 locuri nu există `g[5]`.

**Încearcă tu (10 min)**  
- [ ] Afișezi elementul de pe poziția `1` și pe cel de pe poziția `3`  
- [ ] Prevezi ce afișează `g[0] + g[4]`, apoi verifici  
- [ ] Faci tabelul indicilor pe foaie pentru un vector cu 7 valori  

### Exemplul 3 — Citim și afișăm cu `for`

```cpp
#include <iostream>
using namespace std;

int main() {
    int g[5];

    for (int i = 0; i < 5; i++) {
        cout << "Greutatea piesei " << i + 1 << ": ";
        cin >> g[i];
    }

    cout << "In cutie sunt:" << endl;
    for (int i = 0; i < 5; i++) {
        cout << "Piesa " << i + 1 << ": " << g[i] << " g" << endl;
    }
    return 0;
}
```

**Rulare:**
```
Greutatea piesei 1: 25
Greutatea piesei 2: 40
Greutatea piesei 3: 15
Greutatea piesei 4: 60
Greutatea piesei 5: 30
In cutie sunt:
Piesa 1: 25 g
Piesa 2: 40 g
Piesa 3: 15 g
Piesa 4: 60 g
Piesa 5: 30 g
```

Tiparul `for (int i = 0; i < 5; i++)` este cel mai folosit la vectori: contorul pornește de la `0` și merge **până la dimensiune, fără ea** (`<`, nu `<=`). Variabila `i` este chiar indicele. Pentru afișare scriem `i + 1`, ca piesele să fie numerotate de la 1, așa cum numără oamenii.

**Încearcă tu (10 min)**  
- [ ] Rulezi programul cu greutățile tale  
- [ ] Schimbi vectorul la 8 piese (atenție la `5` din ambele bucle și din declarare)  
- [ ] Afișezi greutățile pe un singur rând, despărțite prin spațiu  

### Exemplul 4 — Schimbăm un element și folosim doar o parte din vector

```cpp
#include <iostream>
using namespace std;

int main() {
    int g[100];
    int n;
    cout << "Cate piese? ";
    cin >> n;

    for (int i = 0; i < n; i++) {
        cin >> g[i];
    }

    g[1] = 99;

    for (int i = 0; i < n; i++) {
        cout << g[i] << " ";
    }
    cout << endl;
    return 0;
}
```

**Rulare:**
```
Cate piese? 4
10 20 30 40
10 99 30 40 
```

Două lucruri noi aici:
- `g[1] = 99;` **schimbă** elementul de pe poziția `1` (a doua piesă): `20` a devenit `99`.  
- `int g[100];` rezervă loc pentru **cel mult** 100 de piese, dar noi folosim doar primele `n`, numărul citit. Așa programul funcționează pentru orice `n` până la 100, și bucla merge până la `n`, nu până la 100.

> **Atenție:** dacă `n` este mai mare decât dimensiunea vectorului (de exemplu 150 la un vector de 100), programul scrie în afara vectorului. Rezultatul este imprevizibil: valori ciudate sau oprirea programului. De aceea verificăm `n` înainte.

**Încearcă tu (10 min)**  
- [ ] Rulezi cu `n = 4`, apoi cu `n = 8`  
- [ ] Schimbi elementul de pe poziția `0`, apoi pe cel de pe ultima poziție  
- [ ] Dublezi valoarea unui element: `g[2] = g[2] * 2;`  

### Exemplul 5 — Parcurgem și invers

```cpp
#include <iostream>
using namespace std;

int main() {
    int g[5] = {25, 40, 15, 60, 30};
    int n = 5;

    cout << "In ordine: ";
    for (int i = 0; i < n; i++) {
        cout << g[i] << " ";
    }
    cout << endl;

    cout << "Invers: ";
    for (int i = n - 1; i >= 0; i--) {
        cout << g[i] << " ";
    }
    cout << endl;
    return 0;
}
```

**Ieșire:**
```
In ordine: 25 40 15 60 30 
Invers: 30 60 15 40 25 
```

Pentru a parcurge invers, începi de la **ultimul indice** (`n - 1`), mergi cât timp `i >= 0` și scazi `i--`. Este numărătoarea inversă din lecția 1, aplicată indicilor.

| Direcția | Start | Condiție | Pas |
|----------|-------|----------|-----|
| În ordine | `i = 0` | `i < n` | `i++` |
| Invers | `i = n - 1` | `i >= 0` | `i--` |

**Încearcă tu (10 min)**  
- [ ] Afișezi doar piesele de pe pozițiile pare (`0`, `2`, `4`), cu `i += 2`  
- [ ] Afișezi piesele invers, cu numărul lor (`Piesa 5: 30 g` primul)  
- [ ] Afișezi doar prima și ultima piesă, fără buclă  

### Exemplul 6 — Cutia cu piese (proiectul orei)

```cpp
#include <iostream>
using namespace std;

int main() {
    int g[20];
    int n;

    do {
        cout << "Cate piese (1-20)? ";
        cin >> n;
    } while (n < 1 || n > 20);

    for (int i = 0; i < n; i++) {
        cout << "Greutatea piesei " << i + 1 << " (grame): ";
        cin >> g[i];
    }

    cout << endl << "=== CUTIA CU PIESE ===" << endl;
    for (int i = 0; i < n; i++) {
        cout << "Piesa " << i + 1 << ": " << g[i] << " g" << endl;
    }

    cout << endl << "Invers: ";
    for (int i = n - 1; i >= 0; i--) {
        cout << g[i] << " ";
    }
    cout << endl;

    int poz, nou;
    cout << endl << "Ce piesa schimbi (1-" << n << ")? ";
    cin >> poz;
    if (poz >= 1 && poz <= n) {
        cout << "Noua greutate: ";
        cin >> nou;
        g[poz - 1] = nou;
        cout << "Piesa " << poz << " are acum " << g[poz - 1] << " g." << endl;
    } else {
        cout << "Nu exista piesa " << poz << "." << endl;
    }
    return 0;
}
```

**Rulare:**
```
Cate piese (1-20)? 4
Greutatea piesei 1 (grame): 25
Greutatea piesei 2 (grame): 40
Greutatea piesei 3 (grame): 15
Greutatea piesei 4 (grame): 60

=== CUTIA CU PIESE ===
Piesa 1: 25 g
Piesa 2: 40 g
Piesa 3: 15 g
Piesa 4: 60 g

Invers: 60 15 40 25 

Ce piesa schimbi (1-4)? 2
Noua greutate: 99
Piesa 2 are acum 99 g.
```

Observă cum folosește programul tot ce știi:
- `do-while` verifică `n`, ca să nu depășim vectorul;  
- `for` cu `i` de la `0` citește și afișează;  
- `i + 1` face numerotarea pentru oameni;  
- la schimbare, omul spune piesa 2, iar programul folosește indicele `poz - 1`, adică `1`;  
- un `if` verifică dacă piesa există înainte să scrie în vector.

**Încearcă tu (15 min)**  
- [ ] Rulezi programul cu `4` piese, apoi cu `7`  
- [ ] Alegi o poziție care nu există și verifici mesajul  
- [ ] Afișezi, cu un `if`, dacă prima piesă este mai grea decât a doua (`g[0]` și `g[1]`)  

---

## De făcut azi — „Cutia cu piese”

| | Ce trebuie să ai |
|---|---|
| **Minim** | Un program care citește `n` piese (cel mult 10) într-un vector și le afișează, numerotate |
| **Complet** | Minim + verificarea lui `n`, afișarea în ordine inversă și schimbarea greutății unei piese alese de utilizator, cu verificarea poziției |

**Gata când:**
- [ ] Programul compilează fără erori  
- [ ] Declară un vector și citește valorile cu un `for`  
- [ ] Afișează piesele numerotate de la 1  
- [ ] (Complet) Verifică `n` înainte de citire  
- [ ] (Complet) Afișează valorile și în ordine inversă  
- [ ] (Complet) Schimbă o piesă aleasă, doar dacă poziția există  
- [ ] Ai testat cu două seturi de piese diferite  
- [ ] Fișierul se numește `Prenume_Nume_M2L6.cpp`

---

## Bonus ★★★ — Provocare: Rotirea cutiei
*Doar dacă ai terminat Complet.*

Mută toate piesele **o poziție la dreapta**, iar ultima piesă ajunge pe prima poziție. Pentru `25 40 15 60 30` rezultatul este `30 25 40 15 60`.

- [ ] Păstrezi ultima valoare într-o variabilă, înainte de mutare  
- [ ] Mută elementele cu un `for` care merge **de la sfârșit spre început**  
- [ ] Pui valoarea păstrată pe poziția `0`  
- [ ] Explici pe foaie de ce nu merge dacă bucla ar merge de la început spre sfârșit  

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| Prima valoare lipsește sau se afișează ciudat | Ai pornit de la `1` | Indicii încep de la `0` |
| Ultima valoare se afișează cu o valoare ciudată | Ai scris `i <= n` | Folosește `i < n` |
| Programul se oprește sau afișează numere ciudate | Ai citit sau scris dincolo de vector | Verifică `n` și rămâi între `0` și `n - 1` |
| `g[5]` nu merge la un vector cu 5 elemente | Ultimul indice este `4` | Dimensiunea minus 1 |
| Vectorul rămâne cu valori ciudate | Nu ai citit sau ai uitat valori | Citește toate valorile cu un `for` |
| Se schimbă piesa greșită | Ai folosit `poz` în loc de `poz - 1` | Numărul omului minus 1 este indicele |
| Eroare sau comportament ciudat la `int g[n];` | În C++ standard, dimensiunea trebuie să fie cunoscută la compilare | Declară `int g[100];` și folosește primele `n` |

---

## Recapitulare pe scurt
- Un **vector** ține mai multe valori de același tip sub un singur nume.  
- `int g[5];` creează 5 locuri; indicii sunt `0, 1, 2, 3, 4`.  
- `g[i]` este elementul de pe poziția `i`; `g[i] = x;` îl schimbă.  
- Parcurgerea în ordine: `for (int i = 0; i < n; i++)`; invers: `for (int i = n - 1; i >= 0; i--)`.  
- Ultimul indice este **dimensiunea minus 1**.  
- Nu citești și nu scrii în afara vectorului.  

---

## Quiz scurt
- Ce este un vector și de ce este mai bun decât mai multe variabile?  
- Ce indice are primul element? Dar ultimul, la un vector cu 8 elemente?  
- De ce folosim `i < n` și nu `i <= n`?  
- Cum afișezi un vector în ordine inversă?  
- Ce se poate întâmpla dacă scrii în afara vectorului?  

---

## Temă
1. Refă **Exemplele 1–6** pe calculatorul tău și testează fiecare cu cel puțin două seturi de date.  
2. Scrie un program care citește 6 numere într-un vector și le afișează în ordine inversă.  
3. Scrie un program care umple un vector cu pătratele numerelor de la 1 la 10 și îl afișează.  
4. Scrie un program care citește 5 numere și afișează primul și ultimul, apoi schimbă între ele aceste două valori.  
5. Salvează tot ca `Tema_M2L6_Prenume_Nume.cpp`.

### Exemple pentru acasă
Aceste exemple folosesc exact ce ai învățat azi. Scrie-le de mână, rulează-le și schimbă-le după preferințe.

**Acasă 1 — Vector de pătrate**
```cpp
#include <iostream>
using namespace std;

int main() {
    int p[10];

    for (int i = 0; i < 10; i++) {
        p[i] = (i + 1) * (i + 1);
    }

    for (int i = 0; i < 10; i++) {
        cout << p[i] << " ";
    }
    cout << endl;
    return 0;
}
```
Rezultatul este `1 4 9 16 25 36 49 64 81 100`. Valorile se pot calcula și pune în vector, nu doar citi.

**Acasă 2 — Numere în ordine inversă**
```cpp
#include <iostream>
using namespace std;

int main() {
    int v[5];

    cout << "Introdu 5 numere: ";
    for (int i = 0; i < 5; i++) {
        cin >> v[i];
    }

    cout << "In ordine inversa: ";
    for (int i = 4; i >= 0; i--) {
        cout << v[i] << " ";
    }
    cout << endl;
    return 0;
}
```
Pentru `1 2 3 4 5`, rezultatul este `5 4 3 2 1`.

**Acasă 3 — Schimb primul cu ultimul**
```cpp
#include <iostream>
using namespace std;

int main() {
    int v[6] = {10, 20, 30, 40, 50, 60};
    int n = 6;

    cout << "Primul: " << v[0] << endl;
    cout << "Ultimul: " << v[n - 1] << endl;

    int aux = v[0];
    v[0] = v[n - 1];
    v[n - 1] = aux;

    for (int i = 0; i < n; i++) {
        cout << v[i] << " ";
    }
    cout << endl;
    return 0;
}
```
Rezultatul final este `60 20 30 40 50 10`. Variabila `aux` păstrează o valoare cât timp o suprascrii pe cealaltă: ca să schimbi două valori, ai nevoie de un loc în plus.

---

## Ce urmează — Lecția 7
Facem calcule cu vectori: suma, media, minimul și maximul. Construim **Stația meteo**, care analizează temperaturile unei luni.
