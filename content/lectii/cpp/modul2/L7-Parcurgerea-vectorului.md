# LECȚIA 7 — Stația meteo
### Calcule cu vectori: sumă, medie, minim, maxim și numărare
**Modulul 2 · Bucle și vectori · 2 ore**  
**Code Maker Club · Loop Master**

> Azi vectorul devine **sursă de date**: citești temperaturile mai multor zile și afli media, cea mai rece și cea mai caldă zi și câte zile au fost calde. La final construiești o mică stație meteo.  
> Fișier: `Prenume_Nume_M2L7.cpp`

---

## Ce facem azi
La final calculezi **suma** și **media** unui vector, găsești **minimul** și **maximul**, afli **pe ce poziție** se află ele, numeri câte valori îndeplinesc o condiție și le aduni într-un raport de stație meteo.

În lecția 2 ai adunat și ai numărat valori citite pe loc. Acum valorile stau într-un vector și poți trece prin ele de câte ori vrei: o dată pentru sumă, o dată pentru maxim și așa mai departe. Așa funcționează aplicațiile de vreme, de sport sau de jocuri, care iau o listă de numere și scot din ea cifre care spun ceva: media, recordul, numărul de zile bune.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare L6: declarare, indici, citire și afișare |
| 15–35 | Suma și media unui vector (**Exemplul 1**) |
| 35–60 | Maxim și minim (**Exemplele 2–3**) |
| 60–80 | Numărare și poziția maximului (**Exemplele 4–5**) |
| 80–115 | Proiectul: Stația meteo + Provocarea (**Exemplul 6**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `int maxim = t[0];` | Pornește maximul de la primul element | apoi compari cu restul |
| `if (t[i] > maxim) maxim = t[i];` | Păstrează cea mai mare valoare văzută până acum | `maxim = t[i];` |
| `(double)suma / n` | Face `suma` un număr cu zecimale înainte de împărțire | `(double)151 / 7` este `21.5714` |
| `ziMax = i;` | Reține **poziția** maximului, nu doar valoarea | `ziMax + 1` este ziua |

---

## Pas cu pas

### Exemplul 1 — Suma și media

```cpp
#include <iostream>
using namespace std;

int main() {
    int t[31];
    int n;
    cout << "Cate zile? ";
    cin >> n;

    for (int i = 0; i < n; i++) {
        cout << "Ziua " << i + 1 << ": ";
        cin >> t[i];
    }

    int suma = 0;
    for (int i = 0; i < n; i++) {
        suma += t[i];
    }

    cout << "Suma: " << suma << endl;
    cout << "Media: " << (double)suma / n << " grade" << endl;
    return 0;
}
```

**Rulare:**
```
Cate zile? 7
Ziua 1: 12
Ziua 2: 18
Ziua 3: 25
Ziua 4: 31
Ziua 5: 28
Ziua 6: 22
Ziua 7: 15
Suma: 151
Media: 21.5714 grade
```

Prima buclă **citește** temperaturile, a doua le **adună**. `suma` este un acumulator, ca în lecția 2. Pentru medie împărțim suma la numărul de zile `n`. Ca rezultatul să aibă zecimale, scriem `(double)suma`: această **conversie** transformă numărul într-unul cu zecimale **înainte** de împărțire (altfel `151 / 7` ar da doar `21`).

**Încearcă tu (10 min)**  
- [ ] Rulezi cu temperaturile tale pe 5 zile  
- [ ] Rulezi cu temperaturi negative, de exemplu `-3 0 2 -1 4`  
- [ ] Verifici cu calculatorul că suma este corectă  

### Exemplul 2 — Maximul

```cpp
#include <iostream>
using namespace std;

int main() {
    int t[7] = {12, 18, 25, 31, 28, 22, 15};
    int n = 7;

    int maxim = t[0];
    for (int i = 1; i < n; i++) {
        if (t[i] > maxim) {
            maxim = t[i];
        }
    }

    cout << "Temperatura maxima: " << maxim << endl;
    return 0;
}
```

**Ieșire:**
```
Temperatura maxima: 31
```

Ideea este ca la concursul „cine e cel mai înalt”: începi cu primul și îl numești „cel mai înalt de până acum”. Apoi compari pe rând cu ceilalți: dacă găsești unul mai înalt, **el devine** campionul. La final, `maxim` este cea mai mare valoare.

| `i` | `t[i]` | Este mai mare decât `maxim`? | `maxim` după pas |
|-----|--------|-------------------------------|-------------------|
| (start) | | | 12 |
| 1 | 18 | da | 18 |
| 2 | 25 | da | 25 |
| 3 | 31 | da | 31 |
| 4 | 28 | nu | 31 |
| 5 | 22 | nu | 31 |
| 6 | 15 | nu | 31 |

> **Atenție:** pornește `maxim` de la `t[0]`, nu de la `0`. Dacă toate temperaturile sunt negative, un `maxim` pornit de la `0` ar rămâne `0`, care nu este în vector.

**Încearcă tu (10 min)**  
- [ ] Rulezi cu alte 7 temperaturi, inclusiv negative  
- [ ] Faci un tabel ca cel de mai sus pe foaie, pentru `5 9 2 8 3`  
- [ ] Cauți cea mai mică temperatură, schimbând `>` în `<`  

### Exemplul 3 — Minim, maxim și diferența

```cpp
#include <iostream>
using namespace std;

int main() {
    int t[7] = {12, 18, 25, 31, 28, 22, 15};
    int n = 7;

    int minim = t[0];
    int maxim = t[0];
    for (int i = 1; i < n; i++) {
        if (t[i] < minim) {
            minim = t[i];
        }
        if (t[i] > maxim) {
            maxim = t[i];
        }
    }

    cout << "Minim: " << minim << endl;
    cout << "Maxim: " << maxim << endl;
    cout << "Diferenta: " << maxim - minim << endl;
    return 0;
}
```

**Ieșire:**
```
Minim: 12
Maxim: 31
Diferenta: 19
```

O singură buclă poate căuta **și** minimul, **și** maximul: la fiecare element faci două comparații. Diferența dintre ele arată cât de mult s-a schimbat vremea în perioada respectivă.

**Încearcă tu (10 min)**  
- [ ] Rulezi cu alte valori și verifici diferența  
- [ ] Citești temperaturile de la tastatură, nu din vector gata făcut  
- [ ] Spui ce se întâmplă dacă toate temperaturile sunt egale  

### Exemplul 4 — Numărăm zilele care îndeplinesc o condiție

```cpp
#include <iostream>
using namespace std;

int main() {
    int t[7] = {12, 18, 25, 31, 28, 22, 15};
    int n = 7;

    int calde = 0;
    int racoroase = 0;
    for (int i = 0; i < n; i++) {
        if (t[i] >= 25) {
            calde++;
        }
        if (t[i] < 15) {
            racoroase++;
        }
    }

    cout << "Zile calde (25 sau mai mult): " << calde << endl;
    cout << "Zile racoroase (sub 15): " << racoroase << endl;
    return 0;
}
```

**Ieșire:**
```
Zile calde (25 sau mai mult): 3
Zile racoroase (sub 15): 1
```

Este contorul din lecția 2, dar acum mergi prin elementele vectorului. Zilele calde sunt cele cu `25`, `31` și `28`, deci `3`. Singura zi sub 15 grade este cea de `12`. Poți folosi **doi contori** în aceeași buclă.

**Încearcă tu (10 min)**  
- [ ] Schimbi limita zilelor calde în `30`  
- [ ] Numeri zilele între 20 și 30 de grade (cu `&&`)  
- [ ] Numeri zilele cu temperatură pară  

### Exemplul 5 — Ziua cea mai caldă: reținem poziția

```cpp
#include <iostream>
using namespace std;

int main() {
    int t[7] = {12, 18, 25, 31, 28, 22, 15};
    int n = 7;

    int maxim = t[0];
    int ziMax = 0;
    for (int i = 1; i < n; i++) {
        if (t[i] > maxim) {
            maxim = t[i];
            ziMax = i;
        }
    }

    cout << "Cea mai calda zi: ziua " << ziMax + 1 << " cu " << maxim << " grade" << endl;
    return 0;
}
```

**Ieșire:**
```
Cea mai calda zi: ziua 4 cu 31 grade
```

Pe lângă valoarea maximă, reținem și **poziția** ei, în `ziMax`. Poziția este indicele (care începe de la `0`), iar ziua este `ziMax + 1`, pentru că oamenii numără zilele de la 1. De fiecare dată când găsești un maxim nou, schimbi **ambele** variabile.

**Încearcă tu (10 min)**  
- [ ] Afișezi și cea mai rece zi, cu poziția ei  
- [ ] Verifici că ziua 4 este într-adevăr cea cu 31 de grade  
- [ ] Spui ce se întâmplă dacă două zile au aceeași temperatură maximă (care este afișată?)  

### Exemplul 6 — Stația meteo (proiectul orei)

```cpp
#include <iostream>
using namespace std;

int main() {
    int t[31];
    int n;

    do {
        cout << "Cate zile (1-31)? ";
        cin >> n;
    } while (n < 1 || n > 31);

    for (int i = 0; i < n; i++) {
        cout << "Ziua " << i + 1 << ": ";
        cin >> t[i];
    }

    int suma = 0;
    int minim = t[0], ziMin = 0;
    int maxim = t[0], ziMax = 0;
    int calde = 0;

    for (int i = 0; i < n; i++) {
        suma += t[i];
        if (t[i] < minim) {
            minim = t[i];
            ziMin = i;
        }
        if (t[i] > maxim) {
            maxim = t[i];
            ziMax = i;
        }
        if (t[i] >= 25) {
            calde++;
        }
    }

    cout << endl << "=== STATIA METEO ===" << endl;
    cout << "Media: " << (double)suma / n << " grade" << endl;
    cout << "Cea mai rece zi: ziua " << ziMin + 1 << " (" << minim << " grade)" << endl;
    cout << "Cea mai calda zi: ziua " << ziMax + 1 << " (" << maxim << " grade)" << endl;
    cout << "Zile calde (25 sau mai mult): " << calde << endl;
    cout << "Diferenta maxim - minim: " << maxim - minim << " grade" << endl;
    return 0;
}
```

**Rulare:**
```
Cate zile (1-31)? 7
Ziua 1: 12
Ziua 2: 18
Ziua 3: 25
Ziua 4: 31
Ziua 5: 28
Ziua 6: 22
Ziua 7: 15

=== STATIA METEO ===
Media: 21.5714 grade
Cea mai rece zi: ziua 1 (12 grade)
Cea mai calda zi: ziua 4 (31 grade)
Zile calde (25 sau mai mult): 3
Diferenta maxim - minim: 19 grade
```

Observă cum o **singură buclă** calculează patru lucruri deodată: suma, minimul cu ziua lui, maximul cu ziua lui și numărul de zile calde. Bucla de citire este separată, pentru că întâi trebuie să ai toate datele. `do-while` verifică numărul de zile, ca să nu depășim vectorul de 31 de locuri.

**Încearcă tu (15 min)**  
- [ ] Rulezi programul cu 7, apoi cu 10 temperaturi ale tale  
- [ ] Schimbi limita zilelor calde  
- [ ] Adaugi un mesaj: „A fost cald!” dacă media depășește 20 de grade  

---

## De făcut azi — „Stația meteo”

| | Ce trebuie să ai |
|---|---|
| **Minim** | Un program care citește temperaturile pe `n` zile într-un vector și afișează media și temperatura maximă |
| **Complet** | Minim + minimul și zilele minimului și maximului, numărul de zile calde, diferența maxim - minim și verificarea lui `n` |

**Gata când:**
- [ ] Programul compilează fără erori  
- [ ] Citește temperaturile într-un vector, cu un `for`  
- [ ] Afișează media, cu zecimale  
- [ ] Afișează temperatura maximă  
- [ ] (Complet) Afișează minimul și ziua minimului și a maximului  
- [ ] (Complet) Numără zilele calde și afișează diferența maxim - minim  
- [ ] (Complet) Verifică `n` înainte de citire  
- [ ] Ai testat cu două seturi de date, unul cu temperaturi negative  
- [ ] Fișierul se numește `Prenume_Nume_M2L7.cpp`

---

## Bonus ★★★ — Provocare: Valul de căldură
*Doar dacă ai terminat Complet.*

Găsește **cea mai lungă serie de zile calde consecutive**, adică zile una după alta cu cel puțin 25 de grade. Pentru `22 26 27 24 28 30 31 20 25 26`, seria cea mai lungă este de `3` zile (`28 30 31`).

- [ ] Folosești un contor pentru seria curentă și o variabilă pentru cea mai lungă serie  
- [ ] Când ziua este caldă, mărești seria curentă; altfel o pui pe `0`  
- [ ] Actualizezi cea mai lungă serie ori de câte ori seria curentă o depășește  
- [ ] Testezi cu un vector fără nicio zi caldă și cu unul în care toate zilele sunt calde  

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| Maximul iese `0` la temperaturi negative | `maxim` a pornit de la `0` | `int maxim = t[0];` |
| Media iese fără zecimale | Ai împărțit două numere `int` | `(double)suma / n` |
| Maximul iese `0` sau o valoare care nu e în vector | Ai pornit `maxim` fără să-l legi de vector | Pornește `maxim` de la `t[0]` și bucla de la `1` |
| Se afișează ziua `0` | Ai afișat indicele, nu ziua | `ziMax + 1` |
| Se afișează valoarea, nu ziua | Ai uitat să reții poziția | Actualizează și `ziMax = i;` |
| Suma este un număr ciudat | `suma` nu a pornit de la `0` | `int suma = 0;` |
| Rezultate greșite la `n` mare | Ai citit mai multe zile decât are vectorul | Verifică `n` înainte |

---

## Recapitulare pe scurt
- Suma unui vector: acumulator, pornit de la `0`, cu `suma += t[i];`.  
- Media: `(double)suma / n`, pentru zecimale.  
- Maximul: pornești de la `t[0]` și înlocuiești când găsești ceva mai mare; la minim, comparația este inversă.  
- Poziția maximului: reții `i` când găsești un maxim nou; ziua este `i + 1`.  
- Numărare: un contor care crește când condiția este adevărată.  
- O singură buclă poate calcula mai multe lucruri.  

---

## Quiz scurt
- De ce pornești maximul de la `t[0]` și nu de la `0`?  
- Cum calculezi media unui vector cu zecimale?  
- Cum afli în ce zi a fost cea mai mare temperatură?  
- Ce se schimbă în program pentru a găsi minimul?  
- De ce afișăm `ziMax + 1`, nu `ziMax`?  

---

## Temă
1. Refă **Exemplele 1–6** pe calculatorul tău și testează fiecare cu cel puțin două seturi de date.  
2. Scrie un program care citește 8 numere într-un vector și afișează câte dintre ele sunt peste medie.  
3. Scrie un program care găsește cea mai mare creștere de temperatură de la o zi la alta.  
4. Scrie un program care afișează de câte ori apare valoarea maximă într-un vector.  
5. Salvează tot ca `Tema_M2L7_Prenume_Nume.cpp`.

### Exemple pentru acasă
Aceste exemple folosesc exact ce ai învățat azi. Scrie-le de mână, rulează-le și schimbă-le după preferințe.

**Acasă 1 — Zile peste medie**
```cpp
#include <iostream>
using namespace std;

int main() {
    int t[7] = {12, 18, 25, 31, 28, 22, 15};
    int n = 7;

    int suma = 0;
    for (int i = 0; i < n; i++) {
        suma += t[i];
    }
    double medie = (double)suma / n;

    int peste = 0;
    for (int i = 0; i < n; i++) {
        if (t[i] > medie) {
            peste++;
        }
    }

    cout << "Media: " << medie << endl;
    cout << "Zile peste medie: " << peste << endl;
    return 0;
}
```
Media este `21.5714`, iar zilele peste medie sunt cele cu `25`, `31`, `28` și `22`, deci `4`. Ai nevoie de **două** parcurgeri: prima pentru medie, a doua pentru numărare.

**Acasă 2 — Cea mai mare creștere de la o zi la alta**
```cpp
#include <iostream>
using namespace std;

int main() {
    int t[7] = {12, 18, 25, 31, 28, 22, 15};
    int n = 7;

    int maxCrestere = t[1] - t[0];
    for (int i = 2; i < n; i++) {
        int crestere = t[i] - t[i - 1];
        if (crestere > maxCrestere) {
            maxCrestere = crestere;
        }
    }

    cout << "Cea mai mare crestere de la o zi la alta: " << maxCrestere << " grade" << endl;
    return 0;
}
```
Rezultatul este `7` (de la `18` la `25`). Aici folosim două elemente vecine: `t[i]` și `t[i - 1]`.

**Acasă 3 — De câte ori apare maximul**
```cpp
#include <iostream>
using namespace std;

int main() {
    int t[8] = {12, 31, 25, 31, 28, 22, 31, 15};
    int n = 8;

    int maxim = t[0];
    for (int i = 1; i < n; i++) {
        if (t[i] > maxim) {
            maxim = t[i];
        }
    }

    int aparitii = 0;
    for (int i = 0; i < n; i++) {
        if (t[i] == maxim) {
            aparitii++;
        }
    }

    cout << "Maximul " << maxim << " apare de " << aparitii << " ori" << endl;
    return 0;
}
```
Rezultatul este `Maximul 31 apare de 3 ori`. Întâi afli maximul, apoi îl numeri în a doua parcurgere.

---

## Ce urmează — Lecția 8
Căutăm într-un vector: există o valoare? Pe ce poziție? De câte ori apare? Construim **Colecția mea**, în care căutăm cartonașele.
