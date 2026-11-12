# LECȚIA 8 — Colecția mea
### Căutarea într-un vector: există, unde este, de câte ori apare
**Modulul 2 · Bucle și vectori · 2 ore**  
**Code Maker Club · Loop Master**

> Ai o colecție de cartonașe cu numere și vrei să afli repede: „Îl am pe cel cu 7? Unde este? De câte ori îl am?” Azi înveți să **cauți într-un vector**, pas cu pas.  
> Fișier: `Prenume_Nume_M2L8.cpp`

---

## Ce facem azi
La final știi să verifici dacă o valoare **există** într-un vector, să afli **pe ce poziție** este prima ei apariție, să o **numeri**, să faci **mai multe căutări** una după alta, până scrii `0`, și să găsești **dublurile** dintr-o colecție.

Căutarea este una dintre cele mai folosite operații: când cauți un contact în telefon, o melodie într-o listă sau un obiect într-un joc, programul trece prin elemente până îl găsește. Metoda se numește **căutare liniară**: te uiți la rând, element cu element.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare L7: sumă, maxim, poziție |
| 15–40 | Există sau nu? Și poziția (**Exemplele 1–2**) |
| 40–60 | Numărăm apariții și căutăm de mai multe ori (**Exemplele 3–4**) |
| 60–80 | Dublurile (**Exemplul 5**) |
| 80–115 | Proiectul: Colecția mea + Provocarea (**Exemplul 6**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `bool gasit = false;` | Un **semnal**: „încă nu am găsit” | devine `true` când găsim |
| `while (i < n && c[i] != x)` | Merge înainte **până găsește** valoarea sau se termină vectorul | `i` rămâne la poziția găsită |
| `if (i < n)` | După buclă: dacă `i` nu a ajuns la capăt, valoarea există | `i` este poziția |
| `int prima = -1;` | Poziție care **nu poate exista**: înseamnă „nu am găsit” | indicii sunt de la `0` în sus |

---

## Pas cu pas

### Exemplul 1 — Există sau nu?

```cpp
#include <iostream>
using namespace std;

int main() {
    int c[5] = {14, 7, 23, 9, 31};
    int n = 5;
    int x;

    cout << "Ce cartonas cauti? ";
    cin >> x;

    bool gasit = false;
    for (int i = 0; i < n; i++) {
        if (c[i] == x) {
            gasit = true;
        }
    }

    if (gasit) {
        cout << "Il ai in colectie!" << endl;
    } else {
        cout << "Nu il ai." << endl;
    }
    return 0;
}
```

**Rulare** (cu `9`, apoi cu `5`):
```
Ce cartonas cauti? 9
Il ai in colectie!
```
```
Ce cartonas cauti? 5
Nu il ai.
```

`gasit` este un **semnal** care pornește pe `false`. Parcurgem tot vectorul și, dacă vreun element este egal cu `x`, ridicăm semnalul pe `true`. Abia **după buclă** știm răspunsul. Dacă am spune „Nu il ai” în buclă, programul ar spune asta pentru fiecare element diferit, nu doar la final.

**Încearcă tu (10 min)**  
- [ ] Cauți un cartonaș pe care îl ai și unul pe care nu-l ai  
- [ ] Schimbi vectorul cu alte 5 numere  
- [ ] Cauți primul și ultimul element, ca să verifici că bucla ajunge la capete  

### Exemplul 2 — Pe ce poziție este?

```cpp
#include <iostream>
using namespace std;

int main() {
    int c[5] = {14, 7, 23, 9, 31};
    int n = 5;
    int x;

    cout << "Ce cartonas cauti? ";
    cin >> x;

    int i = 0;
    while (i < n && c[i] != x) {
        i++;
    }

    if (i < n) {
        cout << "Cartonasul " << x << " este al " << i + 1 << "-lea" << endl;
    } else {
        cout << "Nu exista" << endl;
    }
    return 0;
}
```

**Rulare** (cu `23`):
```
Ce cartonas cauti? 23
Cartonasul 23 este al 3-lea
```

Aici folosim `while`, nu `for`. Bucla merge înainte **cât timp** nu am ajuns la capăt (`i < n`) **și** elementul nu este cel căutat (`c[i] != x`). Se oprește fie când găsește valoarea, fie când vectorul se termină. După buclă, `i` ne spune ce s-a întâmplat: dacă `i < n`, am găsit valoarea pe poziția `i` (al `i + 1`-lea cartonaș); dacă `i == n`, nu există.

> **Atenție la ordine:** scrie `i < n` **înaintea** lui `c[i] != x`. Dacă `i` ar fi `n`, `c[i]` ar citi în afara vectorului. Cu `&&`, când prima condiție este falsă, a doua nici nu se mai verifică.

**Încearcă tu (10 min)**  
- [ ] Cauți primul element, apoi ultimul, apoi unul care nu există  
- [ ] Faci pe foaie un tabel cu `i` și `c[i]` pentru căutarea lui `9`  
- [ ] Afișezi poziția cu indice de la `0`, apoi cu `+ 1`, și spui care este mai firească  

### Exemplul 3 — De câte ori apare?

```cpp
#include <iostream>
using namespace std;

int main() {
    int c[8] = {14, 7, 23, 7, 31, 14, 7, 9};
    int n = 8;
    int x;

    cout << "Ce cartonas cauti? ";
    cin >> x;

    int aparitii = 0;
    for (int i = 0; i < n; i++) {
        if (c[i] == x) {
            aparitii++;
        }
    }

    cout << "Cartonasul " << x << " apare de " << aparitii << " ori" << endl;
    return 0;
}
```

**Rulare** (cu `7`):
```
Ce cartonas cauti? 7
Cartonasul 7 apare de 3 ori
```

Este contorul din lecția 7, cu condiția `c[i] == x`. Dacă `aparitii` rămâne `0`, valoarea nu există. Așa afli și dacă ai **dubluri** în colecție.

**Încearcă tu (10 min)**  
- [ ] Cauți `14`, apoi `9`, apoi `100`  
- [ ] Faci programul să scrie „nu apare” când `aparitii` este `0`  
- [ ] Schimbi vectorul cu 8 valori ale tale  

### Exemplul 4 — Mai multe căutări, până scrii 0

```cpp
#include <iostream>
using namespace std;

int main() {
    int c[5] = {14, 7, 23, 9, 31};
    int n = 5;
    int x;

    cout << "Cartonas (0 = stop): ";
    cin >> x;

    while (x != 0) {
        bool gasit = false;
        for (int i = 0; i < n; i++) {
            if (c[i] == x) {
                gasit = true;
            }
        }

        if (gasit) {
            cout << "Il ai!" << endl;
        } else {
            cout << "Nu il ai." << endl;
        }

        cout << "Cartonas (0 = stop): ";
        cin >> x;
    }
    return 0;
}
```

**Rulare** (cu `9`, `4`, `0`):
```
Cartonas (0 = stop): 9
Il ai!
Cartonas (0 = stop): 4
Nu il ai.
Cartonas (0 = stop): 0
```

Combinăm ce știm: **santinela** `0` din lecția 3 ține bucla `while` în funcțiune, iar în interior facem căutarea din Exemplul 1. Observă că `gasit` este declarat **în** buclă, pentru că de fiecare dată căutarea începe de la „încă nu am găsit”.

**Încearcă tu (10 min)**  
- [ ] Faci 4 căutări la rând, apoi scrii `0`  
- [ ] Afișezi și câte căutări ai făcut până la oprire  
- [ ] Afișezi la final câte au fost reușite  

### Exemplul 5 — Dublurile: o buclă în altă buclă

```cpp
#include <iostream>
using namespace std;

int main() {
    int c[7] = {14, 7, 23, 7, 31, 14, 9};
    int n = 7;

    cout << "Cartonase dublate:";
    for (int i = 0; i < n; i++) {
        int total = 0;
        int inainte = 0;
        for (int j = 0; j < n; j++) {
            if (c[j] == c[i]) {
                total++;
                if (j < i) {
                    inainte++;
                }
            }
        }
        if (total > 1 && inainte == 0) {
            cout << " " << c[i];
        }
    }
    cout << endl;
    return 0;
}
```

**Ieșire:**
```
Cartonase dublate: 14 7
```

Pentru **fiecare** cartonaș `c[i]` căutăm în tot vectorul (bucla `j`) de câte ori apare, ca la bucle imbricate. Numărăm două lucruri: `total` (de câte ori apare) și `inainte` (câte apariții sunt **înaintea** lui). Afișăm valoarea doar dacă apare de mai multe ori (`total > 1`) și acesta este **prima** apariție (`inainte == 0`). Fără a doua condiție, `14` și `7` ar fi afișate de două ori.

**Încearcă tu (10 min)**  
- [ ] Schimbi vectorul și verifici dublurile  
- [ ] Încerci un vector fără dubluri  
- [ ] Scoți condiția `inainte == 0` și observi ce se afișează  

### Exemplul 6 — Colecția mea (proiectul orei)

```cpp
#include <iostream>
using namespace std;

int main() {
    int c[30];
    int n;

    do {
        cout << "Cate cartonase ai (1-30)? ";
        cin >> n;
    } while (n < 1 || n > 30);

    for (int i = 0; i < n; i++) {
        cout << "Cartonasul " << i + 1 << ": ";
        cin >> c[i];
    }

    int x;
    cout << "Ce cartonas cauti (0 = stop)? ";
    cin >> x;

    while (x != 0) {
        int aparitii = 0;
        int prima = -1;
        for (int i = 0; i < n; i++) {
            if (c[i] == x) {
                aparitii++;
                if (prima == -1) {
                    prima = i;
                }
            }
        }

        if (aparitii == 0) {
            cout << "Nu ai cartonasul " << x << "." << endl;
        } else {
            cout << "Il ai! Prima data pe pozitia " << prima + 1
                 << ", de " << aparitii << " ori." << endl;
        }

        cout << "Ce cartonas cauti (0 = stop)? ";
        cin >> x;
    }

    int dublate = 0;
    for (int i = 0; i < n; i++) {
        int total = 0;
        int inainte = 0;
        for (int j = 0; j < n; j++) {
            if (c[j] == c[i]) {
                total++;
                if (j < i) {
                    inainte++;
                }
            }
        }
        if (total > 1 && inainte == 0) {
            dublate++;
        }
    }
    cout << "Cartonase dublate: " << dublate << endl;
    return 0;
}
```

**Rulare** (7 cartonase `14 7 23 7 31 14 9`, căutări `7`, `5`, `0`):
```
Cate cartonase ai (1-30)? 7
Cartonasul 1: 14
Cartonasul 2: 7
Cartonasul 3: 23
Cartonasul 4: 7
Cartonasul 5: 31
Cartonasul 6: 14
Cartonasul 7: 9
Ce cartonas cauti (0 = stop)? 7
Il ai! Prima data pe pozitia 2, de 2 ori.
Ce cartonas cauti (0 = stop)? 5
Nu ai cartonasul 5.
Ce cartonas cauti (0 = stop)? 0
Cartonase dublate: 2
```

Programul pune cap la cap tot ce ai învățat: `do-while` pentru `n`, `for` pentru citire, `while` cu santinelă pentru căutări, un `for` cu poziția primei apariții (`prima`, pornit de la `-1`) și numărătoarea apariților, și la final buclele imbricate pentru dubluri. Fiecare parte face un singur lucru.

**Încearcă tu (15 min)**  
- [ ] Introduci cartonasele tale (cel puțin 6) și faci 3 căutări  
- [ ] Cauți un cartonaș care apare de mai multe ori  
- [ ] Mai adaugi un mesaj: „Colecția ta este foarte variată!” dacă nu ai nicio dublură  

---

## De făcut azi — „Colecția mea”

| | Ce trebuie să ai |
|---|---|
| **Minim** | Un program care citește `n` cartonașe într-un vector și spune dacă un număr căutat există |
| **Complet** | Minim + poziția primei apariții, numărul de apariții, căutări repetate până la `0` și numărul de cartonașe dublate |

**Gata când:**
- [ ] Programul compilează fără erori  
- [ ] Citește cartonașele într-un vector, cu verificarea lui `n`  
- [ ] Spune corect dacă un cartonaș există  
- [ ] (Complet) Afișează prima poziție și numărul de apariții  
- [ ] (Complet) Repetă căutarea până scrii `0`  
- [ ] (Complet) Afișează câte cartonașe sunt dublate  
- [ ] Ai testat cu un cartonaș care există, unul care nu există și unul dublat  
- [ ] Fișierul se numește `Prenume_Nume_M2L8.cpp`

---

## Bonus ★★★ — Provocare: Cartonașele lipsă
*Doar dacă ai terminat Complet.*

Colecția completă are cartonașele de la `1` la `10`. Afișează **ce cartonașe îți lipsesc**. Pentru colecția `3 7 1 9 3 10`, lipsesc `2 4 5 6 8`.

- [ ] Pentru fiecare număr `k` de la `1` la `10` cauți dacă există în vector  
- [ ] Afișezi `k` doar dacă **nu** l-ai găsit  
- [ ] Testezi cu o colecție completă (nu trebuie să lipsească nimic)  
- [ ] Testezi cu valori în afara intervalului `1–10` (ele nu trebuie să schimbe rezultatul)  

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| „Nu il ai” apare de mai multe ori | Mesajul este scris în buclă, pentru fiecare element | Scrie răspunsul **după** buclă, în funcție de `gasit` |
| Programul spune mereu „Nu il ai” | Ai pus `gasit = false;` în interiorul `for`, după ce îl ridicai | Pune `gasit = false;` **înainte** de `for` |
| Poziția iese cu 1 mai mică | Ai afișat indicele, nu poziția | `i + 1` |
| Valori ciudate sau oprire | `c[i] != x` este scris înaintea lui `i < n` | `i < n && c[i] != x` |
| Contorul rămâne `0` | `aparitii` este declarat în buclă sau condiția este greșită | Declară-l înainte, folosește `==` |
| Dublurile apar de mai multe ori | Ai numărat și aparițiile următoare | Afișează doar când `inainte == 0` |
| A doua căutare dă același rezultat | Variabilele nu au fost puse pe zero | Pune-le la valoarea de start în interiorul buclei |

---

## Recapitulare pe scurt
- Căutarea liniară: te uiți la rând, element cu element, până găsești valoarea sau se termină vectorul.  
- Semnalul `gasit` pornește pe `false` și devine `true` când găsești.  
- Poziția: `while (i < n && c[i] != x)` — după buclă, `i < n` înseamnă că ai găsit.  
- Aparițiile: un contor cu `c[i] == x`.  
- Mai multe căutări: `while (x != 0)` cu citirea din nou la finalul buclei.  
- Dublurile: o buclă în altă buclă.  

---

## Quiz scurt
- De ce scriem „Nu il ai” **după** buclă, nu în ea?  
- Ce înseamnă că după `while`, `i` este egal cu `n`?  
- De ce scriem `i < n` înaintea lui `c[i] != x`?  
- Cum afli de câte ori apare o valoare?  
- De ce folosim `-1` pentru o poziție care nu a fost găsită?  

---

## Temă
1. Refă **Exemplele 1–6** pe calculatorul tău și testează fiecare cu cel puțin două seturi de date.  
2. Scrie un program care găsește primul număr par dintr-un vector și poziția lui.  
3. Scrie un program care afișează **ultima** apariție a unui număr.  
4. Scrie un program care afișează **toate pozițiile** unde apare un număr.  
5. Salvează tot ca `Tema_M2L8_Prenume_Nume.cpp`.

### Exemple pentru acasă
Aceste exemple folosesc exact ce ai învățat azi. Scrie-le de mână, rulează-le și schimbă-le după preferințe.

**Acasă 1 — Primul număr par**
```cpp
#include <iostream>
using namespace std;

int main() {
    int v[6] = {7, 9, 4, 11, 6, 3};
    int n = 6;

    int i = 0;
    while (i < n && v[i] % 2 != 0) {
        i++;
    }

    if (i < n) {
        cout << "Primul numar par este " << v[i] << " pe pozitia " << i + 1 << endl;
    } else {
        cout << "Nu exista numere pare" << endl;
    }
    return 0;
}
```
Rezultatul este `Primul numar par este 4 pe pozitia 3`. Bucla se oprește la primul număr care **nu** este impar.

**Acasă 2 — Ultima apariție**
```cpp
#include <iostream>
using namespace std;

int main() {
    int v[7] = {5, 8, 5, 2, 5, 9, 1};
    int n = 7;
    int x = 5;

    int ultima = -1;
    for (int i = 0; i < n; i++) {
        if (v[i] == x) {
            ultima = i;
        }
    }

    if (ultima == -1) {
        cout << "Nu exista" << endl;
    } else {
        cout << "Ultima aparitie: pozitia " << ultima + 1 << endl;
    }
    return 0;
}
```
Rezultatul este `Ultima aparitie: pozitia 5`. Parcurgem tot vectorul și **rescriem** `ultima` la fiecare apariție, deci rămâne ultima.

**Acasă 3 — Toate pozițiile**
```cpp
#include <iostream>
using namespace std;

int main() {
    int v[7] = {5, 8, 5, 2, 5, 9, 1};
    int n = 7;
    int x = 5;

    cout << "Pozitiile lui " << x << ":";
    for (int i = 0; i < n; i++) {
        if (v[i] == x) {
            cout << " " << i + 1;
        }
    }
    cout << endl;
    return 0;
}
```
Rezultatul este `Pozitiile lui 5: 1 3 5`.

---

## Ce urmează — Lecția 9
Punem vectorul în ordine: schimbăm două valori între ele și le sortăm crescător și descrescător. Construim **Recordurile mele** și afișăm cele mai bune trei.
