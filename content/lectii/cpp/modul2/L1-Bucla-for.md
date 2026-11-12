# LECȚIA 1 — Lansarea rachetei
### Bucla `for`
**Modulul 2 · Bucle și vectori · 2 ore**  
**Code Maker Club · Loop Master**

> Azi înveți să spui calculatorului „repetă de câte ori vreau eu”, fără să scrii aceeași linie de 100 de ori. La final lansezi o rachetă cu numărătoare inversă.  
> Fișier: `Prenume_Nume_M2L1.cpp`

---

## Ce facem azi
La final folosești bucla `for` ca să repeți o instrucțiune de câte ori vrei, știi ce fac cele trei părți dintre paranteze (start, condiție, pas), numeri crescător, descrescător și din 2 în 2 și afișezi numărătoarea inversă a unei rachete.

Până acum, programele tale făceau fiecare lucru o singură dată. Dacă voiai 5 rânduri la fel, scriai 5 linii. Dacă voiai 100, scriai 100. De azi folosești o **buclă**: scrii instrucțiunea o dată și îi spui câte repetări vrei. Așa funcționează numărătoarea unui joc, cele 60 de cadre pe secundă ale unui film sau scorul care crește la fiecare nivel.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare Modulul 1 și problema repetării (**Exemplul 1**) |
| 15–40 | Cele trei părți ale lui `for` (**Exemplele 2–3**) |
| 40–60 | Repetări alese de utilizator, cu `cin` (**Exemplul 4**) |
| 60–85 | Invers și din 5 în 5 (**Exemplul 5**) |
| 85–115 | Proiectul: Lansarea rachetei + Provocarea (**Exemplul 6**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `for (start; condiție; pas) { ... }` | Repetă instrucțiunile din acolade cât timp condiția este adevărată | `for (int i = 1; i <= 5; i++)` |
| `i++` | Mărește `i` cu 1 | `i++` din 3 devine 4 |
| `i--` | Micșorează `i` cu 1 | `i--` din 3 devine 2 |
| `i += 5` | Mărește `i` cu 5 | `i += 5` din 0 devine 5 |

---

## Pas cu pas

### Exemplul 1 — Fără buclă și cu buclă

Vrem să afișăm numerele de la 1 la 5. Fără buclă:

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << 1 << endl;
    cout << 2 << endl;
    cout << 3 << endl;
    cout << 4 << endl;
    cout << 5 << endl;
    return 0;
}
```

Cu buclă, același rezultat:

```cpp
#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 5; i++) {
        cout << i << endl;
    }
    return 0;
}
```

**Ieșire** (la ambele):
```
1
2
3
4
5
```

Pentru 5 numere diferența nu e mare. Pentru numerele de la 1 la 100, primul program are nevoie de 100 de linii, iar al doilea tot de 3: schimbi doar `5` în `100`.

**Încearcă tu (5 min)**  
- [ ] Rulezi ambele programe și vezi că dau același rezultat  
- [ ] În programul cu buclă schimbi `5` în `12` și rulezi din nou  
- [ ] Explici cu cuvintele tale de ce varianta cu buclă este mai scurtă  

### Exemplul 2 — Cele trei părți ale lui `for`

```cpp
#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 10; i++) {
        cout << i << " ";
    }
    cout << endl;
    return 0;
}
```

**Ieșire:**
```
1 2 3 4 5 6 7 8 9 10 
```

Între parantezele lui `for` sunt trei părți, despărțite prin `;`:

| Parte | În exemplu | Ce face |
|-------|------------|---------|
| **Start** | `int i = 1` | Se execută o singură dată, la început: creează variabila `i` și îi dă valoarea 1 |
| **Condiție** | `i <= 10` | Se verifică înainte de fiecare rotire: dacă e adevărată, bucla continuă |
| **Pas** | `i++` | Se execută după fiecare rotire: mărește `i` cu 1 |

Instrucțiunile din acolade `{ }` se numesc **corpul** buclei. Ele se repetă cât timp condiția este adevărată. Variabila `i` se numește **contor**.

**Încearcă tu (10 min)**  
- [ ] Afișezi numerele de la 1 la 20  
- [ ] Schimbi condiția în `i < 10` și vezi ce se schimbă (ultimul număr)  
- [ ] Afișezi numerele de la 5 la 15, schimbând startul și condiția  

### Exemplul 3 — Ce se întâmplă la fiecare rotire

```cpp
#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 3; i++) {
        cout << "Rotirea cu i = " << i << endl;
    }
    cout << "Gata, bucla s-a terminat." << endl;
    return 0;
}
```

**Ieșire:**
```
Rotirea cu i = 1
Rotirea cu i = 2
Rotirea cu i = 3
Gata, bucla s-a terminat.
```

Pas cu pas:

| Moment | Valoarea lui `i` | Condiția `i <= 3` | Ce se întâmplă |
|--------|------------------|-------------------|----------------|
| Start | `i = 1` | adevărată | se afișează „Rotirea cu i = 1”, apoi `i++` |
| A doua rotire | `i = 2` | adevărată | se afișează „Rotirea cu i = 2”, apoi `i++` |
| A treia rotire | `i = 3` | adevărată | se afișează „Rotirea cu i = 3”, apoi `i++` |
| Verificare | `i = 4` | **falsă** | bucla se oprește |

Rândul „Gata, bucla s-a terminat.” este după acolade, deci se afișează o singură dată, după buclă.

**Încearcă tu (10 min)**  
- [ ] Faci același tabel pe foaie pentru `for (int i = 2; i <= 6; i++)`  
- [ ] Scrii programul și verifici dacă ai prevăzut bine ieșirea  
- [ ] Muți linia „Gata” în interiorul acoladelor și observi ce se întâmplă  

### Exemplul 4 — Utilizatorul alege cât numără

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Pana la cat numar? ";
    cin >> n;

    for (int i = 1; i <= n; i++) {
        cout << i << " ";
    }
    cout << endl;
    return 0;
}
```

**Rulare:**
```
Pana la cat numar? 8
1 2 3 4 5 6 7 8 
```

Condiția poate folosi o variabilă citită cu `cin`. Același program numără până la 8, până la 50 sau până la 1000, fără să-l mai modifici.

**Încearcă tu (10 min)**  
- [ ] Rulezi programul cu `3`, cu `20` și cu `0`: ce se întâmplă la `0` și de ce?  
- [ ] Afișezi, pe un rând separat, mesajul „Gata!” după buclă  
- [ ] Citești două numere, `a` și `b`, și afișezi toate numerele de la `a` la `b`  

### Exemplul 5 — Invers și din 5 în 5

```cpp
#include <iostream>
using namespace std;

int main() {
    for (int i = 5; i >= 1; i--) {
        cout << i << "..." << endl;
    }
    cout << "Decolare!" << endl;

    for (int i = 0; i <= 20; i += 5) {
        cout << i << " ";
    }
    cout << endl;
    return 0;
}
```

**Ieșire:**
```
5...
4...
3...
2...
1...
Decolare!
0 5 10 15 20 
```

Prima buclă numără **invers**: pornește de la 5, condiția este `i >= 1` și pasul este `i--`. A doua buclă merge din **5 în 5**: pasul `i += 5` mărește `i` cu 5 la fiecare rotire.

> **Atenție:** dacă pasul nu duce niciodată condiția la fals (de exemplu `i--` într-o buclă care pornește de la 1 cu `i <= 10`), bucla **nu se mai oprește**. Se numește buclă infinită. Oprești programul cu **Ctrl + C** în terminal sau cu butonul de stop din Code::Blocks.

**Încearcă tu (10 min)**  
- [ ] Afișezi numărătoarea inversă de la 10 la 1  
- [ ] Afișezi multiplii lui 3 până la 30 (3, 6, 9 și așa mai departe) cu `i += 3`  
- [ ] Afișezi numerele de la 100 la 0, din 10 în 10, în ordine descrescătoare  

### Exemplul 6 — Lansarea rachetei (proiectul orei)

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "De la ce secunda incepe numaratoarea? ";
    cin >> n;

    cout << "=== LANSARE ===" << endl;
    for (int i = n; i >= 1; i--) {
        cout << "T minus " << i << endl;
    }
    cout << "Decolare!" << endl;

    cout << "   /\\" << endl;
    cout << "  /  \\" << endl;
    cout << "  |  |" << endl;
    cout << "  |__|" << endl;
    for (int i = 1; i <= n; i++) {
        cout << "  ^^^^" << endl;
    }
    return 0;
}
```

**Rulare:**
```
De la ce secunda incepe numaratoarea? 4
=== LANSARE ===
T minus 4
T minus 3
T minus 2
T minus 1
Decolare!
   /\
  /  \
  |  |
  |__|
  ^^^^
  ^^^^
  ^^^^
  ^^^^
```

Programul folosește două bucle. Prima numără invers de la `n` la 1. A doua desenează câte un rând de flăcări (`^^^^`) pentru fiecare secundă: cu cât numărătoarea e mai lungă, cu atât flacăra e mai mare. Observă că `\` apare dublu în cod (`"   /\\"`), dar pe ecran se vede o singură dată.

**Încearcă tu (15 min)**  
- [ ] Rulezi programul cu `3`, cu `6` și cu `10`  
- [ ] Schimbi mesajul „T minus” cu un text al tău  
- [ ] Adaugi sub rachetă un rând „Succes, misiunea a început!”  

---

## De făcut azi — „Lansarea rachetei”

| | Ce trebuie să ai |
|---|---|
| **Minim** | Un program care citește un număr `n`, afișează numărătoarea inversă de la `n` la 1 și apoi „Decolare!” |
| **Complet** | Minim + o rachetă desenată din caractere, cu flăcări în număr egal cu `n` (printr-o a doua buclă) și un test cu cel puțin trei valori diferite pentru `n` |

**Gata când:**
- [ ] Programul compilează fără erori  
- [ ] Citește `n` cu `cin`, după un mesaj clar  
- [ ] Afișează numărătoarea inversă de la `n` la 1  
- [ ] Afișează „Decolare!” o singură dată, după buclă  
- [ ] (Complet) Desenează racheta și atâtea rânduri de flăcări câte secunde a numărat  
- [ ] (Complet) Ai testat cu minimum 3 valori diferite  
- [ ] Fișierul se numește `Prenume_Nume_M2L1.cpp`

---

## Bonus ★★★ — Provocare: Calendarul de lansări
*Doar dacă ai terminat Complet.*

O bază spațială lansează o rachetă la fiecare **7 zile**. Afișează în ce zile din luna de 30 de zile au loc lansările și câte lansări sunt în total.

- [ ] Programul folosește un `for` de la 1 la 30  
- [ ] Afișează, de exemplu, „Lansare in ziua 7” pentru fiecare zi potrivită  
- [ ] Afișează la final numărul total de lansări  
- [ ] Schimbi intervalul din 7 în 5 zile și verifici rezultatul  

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| Bucla se repetă la nesfârșit | Pasul nu duce niciodată condiția la fals | Verifică dacă `i++` sau `i--` merge în sensul bun |
| Bucla nu rulează deloc | Condiția este falsă de la început | Verifică startul și condiția, de exemplu `i = 1` și `i <= n` |
| Lipsește ultimul număr | Ai scris `<` în loc de `<=` | `i <= n` ia și valoarea lui `n` |
| Eroare la `for (int i = 1, i <= 5, i++)` | Ai pus virgulă în loc de `;` | Părțile se despart cu `;` |
| Bucla afișează doar o dată | Ai pus `;` după paranteza lui `for` | Scrie `for (...) {`, fără `;` după paranteză |
| Mesajul final apare la fiecare rotire | Este în interiorul acoladelor | Pune-l după acolada de închidere a buclei |
| Eroare la `i` după buclă | `i` există doar în buclă | Declară `i` înainte de `for` dacă ai nevoie de el și după |

---

## Recapitulare pe scurt
- Bucla `for` repetă instrucțiunile din acolade cât timp condiția este adevărată.  
- Are trei părți: **start**, **condiție** și **pas**, despărțite prin `;`.  
- `i++` crește cu 1, `i--` scade cu 1, iar `i += 5` crește cu 5.  
- Pentru numărătoare inversă: pornești de la valoarea mare, folosești `>=` și `i--`.  
- Cu `cin` poți lăsa utilizatorul să aleagă de câte ori se repetă bucla.  
- O buclă fără oprire se numește buclă infinită: o oprești cu Ctrl + C.  

---

## Quiz scurt
- Care sunt cele trei părți ale lui `for` și ce face fiecare?  
- Câte numere afișează `for (int i = 1; i <= 5; i++)`?  
- Ce diferență este între `i < 10` și `i <= 10`?  
- Cum faci o numărătoare inversă de la 10 la 1?  
- Ce este o buclă infinită și cum o oprești?  

---

## Temă
1. Refă **Exemplele 1–6** pe calculatorul tău și testează fiecare cu cel puțin două valori.  
2. Scrie un program care afișează numerele pare de la 2 la 20.  
3. Scrie un program care citește `n` și afișează „Start!” de `n` ori, fiecare pe rând nou.  
4. Scrie un program care afișează numerele de la 50 la 0, din 10 în 10.  
5. Salvează tot ca `Tema_M2L1_Prenume_Nume.cpp`.

### Exemple pentru acasă
Aceste exemple folosesc exact ce ai învățat azi. Scrie-le de mână, rulează-le și schimbă-le după preferințe.

**Acasă 1 — O linie de steluțe**
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Cate stelute? ";
    cin >> n;

    for (int i = 1; i <= n; i++) {
        cout << "*";
    }
    cout << endl;
    return 0;
}
```
Pentru `6`, programul afișează `******`.

**Acasă 2 — Literele alfabetului**
```cpp
#include <iostream>
using namespace std;

int main() {
    for (char c = 'A'; c <= 'Z'; c++) {
        cout << c << " ";
    }
    cout << endl;
    return 0;
}
```
Bucla poate folosi și un `char` drept contor: literele merg una după alta, în ordinea alfabetului.

**Acasă 3 — Pătratele numerelor**
```cpp
#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 10; i++) {
        cout << i << " la patrat = " << i * i << endl;
    }
    return 0;
}
```
Contorul se poate folosi și în calcule: aici `i * i` dă pătratul fiecărui număr.

**Acasă 4 — Numere pare până la `n`**
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Pana la cat? ";
    cin >> n;

    for (int i = 2; i <= n; i += 2) {
        cout << i << " ";
    }
    cout << endl;
    return 0;
}
```
Pentru `11`, programul afișează `2 4 6 8 10`. Ultimul număr este mai mic decât `n`, pentru că 12 ar depăși 11.

---

## Ce urmează — Lecția 2
Folosim `for` ca să adunăm, să înmulțim și să numărăm: facem **Pușculița mea**, cu suma banilor, numărul de zile cu cheltuieli mari și media.
