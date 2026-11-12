# LECȚIA 9 — Recordurile mele
### Schimbarea a două valori și sortarea unui vector
**Modulul 2 · Bucle și vectori · 2 ore**  
**Code Maker Club · Loop Master**

> Ai jucat de mai multe ori un joc și ai o listă de scoruri. Cum afli rapid recordul, al doilea scor, al treilea? Pui scorurile **în ordine**. Azi înveți să **sortezi un vector**, ca un clasament de joc.  
> Fișier: `Prenume_Nume_M2L9.cpp`

---

## Ce facem azi
La final știi să **schimbi între ele** două valori, să **sortezi** un vector crescător și descrescător cu metoda **sortării prin selecție** și să afișezi **top 3**-ul scorurilor tale.

Sortarea este peste tot: clasamentul din jocuri, melodiile ordonate după câte ori au fost ascultate, produsele de la cel mai ieftin la cel mai scump. Există mai multe metode, iar noi o învățăm pe cea mai ușor de înțeles: de fiecare dată **alegem cea mai mică valoare** rămasă și o punem la locul ei.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare L8: căutare, poziție, bucle imbricate |
| 15–35 | Schimbarea a două valori și un singur pas de sortare (**Exemplele 1–2**) |
| 35–65 | Sortarea completă, crescător și descrescător (**Exemplele 3–4**) |
| 65–80 | Top 3 (**Exemplul 5**) |
| 80–115 | Proiectul: Recordurile mele + Provocarea (**Exemplul 6**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `int aux = a; a = b; b = aux;` | **Schimbă** valorile a două variabile, folosind una ajutătoare | `a` și `b` își iau locurile |
| `int poz = i;` | Reține poziția celui mai mic element găsit până acum | căutăm minimul, ca în L7 |
| `for (int j = i + 1; j < n; j++)` | Bucla interioară începe **după** elementul `i` | caută în partea nesortată |
| `n - 1` în bucla exterioară | Ultimul element ajunge singur la locul lui | `i < n - 1` |

---

## Pas cu pas

### Exemplul 1 — Schimbăm două valori

```cpp
#include <iostream>
using namespace std;

int main() {
    int a = 5;
    int b = 9;

    int aux = a;
    a = b;
    b = aux;

    cout << "a = " << a << ", b = " << b << endl;
    return 0;
}
```

**Ieșire:**
```
a = 9, b = 5
```

Gândește-te la două pahare: unul cu suc, altul cu apă. Ca să le schimbi conținutul, ai nevoie de un **al treilea pahar**. La fel, `aux` păstrează valoarea lui `a`, ca să nu o pierdem când scriem peste `a`. Dacă ai scrie doar `a = b; b = a;`, ambele ar ajunge `9`, iar `5` ar dispărea.

**Încearcă tu (10 min)**  
- [ ] Schimbi valorile cu alte numere  
- [ ] Scrii greșit schimbarea (`a = b; b = a;`) și vezi ce se întâmplă  
- [ ] Schimbi două elemente ale unui vector, de exemplu `g[0]` cu `g[1]`  

### Exemplul 2 — Un singur pas: cel mai mic ajunge pe primul loc

```cpp
#include <iostream>
using namespace std;

int main() {
    int g[5] = {40, 15, 60, 25, 30};
    int n = 5;

    int poz = 0;
    for (int j = 1; j < n; j++) {
        if (g[j] < g[poz]) {
            poz = j;
        }
    }

    int aux = g[0];
    g[0] = g[poz];
    g[poz] = aux;

    for (int i = 0; i < n; i++) {
        cout << g[i] << " ";
    }
    cout << endl;
    return 0;
}
```

**Ieșire:**
```
15 40 60 25 30 
```

Căutăm **poziția** celui mai mic element, ca la minim în lecția 7, dar reținem poziția, nu valoarea. Apoi îl schimbăm cu primul element: `15` ajunge pe locul `0`, iar `40` pleacă pe locul unde era `15`. Un singur pas a pus **un** element la locul lui. Repetând pasul pentru pozițiile următoare, tot vectorul se ordonează.

**Încearcă tu (10 min)**  
- [ ] Rulezi cu alt vector și verifici că minimul ajunge primul  
- [ ] Aduci **maximul** pe primul loc (schimbi `<` în `>`)  
- [ ] Pui cel mai mic element pe **ultimul** loc (îl schimbi cu `g[n - 1]`)  

### Exemplul 3 — Sortare crescătoare (prin selecție)

```cpp
#include <iostream>
using namespace std;

int main() {
    int g[5] = {40, 15, 60, 25, 30};
    int n = 5;

    for (int i = 0; i < n - 1; i++) {
        int poz = i;
        for (int j = i + 1; j < n; j++) {
            if (g[j] < g[poz]) {
                poz = j;
            }
        }
        int aux = g[i];
        g[i] = g[poz];
        g[poz] = aux;
    }

    cout << "Crescator:";
    for (int i = 0; i < n; i++) {
        cout << " " << g[i];
    }
    cout << endl;
    return 0;
}
```

**Ieșire:**
```
Crescator: 15 25 30 40 60
```

Repetăm pasul din Exemplul 2, pentru `i = 0, 1, 2, ...`: la fiecare pas căutăm cel mai mic element din partea **nesortată** (de la `i` încolo) și îl punem pe poziția `i`. Este o **buclă în altă buclă**, ca în lecția 5.

| Pasul `i` | Caut minimul printre | Îl schimb cu `g[i]` | Vectorul după pas |
|-----------|----------------------|---------------------|-------------------|
| (start) | | | 40 15 60 25 30 |
| 0 | 40 15 60 25 30 | 15 cu 40 | 15 40 60 25 30 |
| 1 | 40 60 25 30 | 25 cu 40 | 15 25 60 40 30 |
| 2 | 60 40 30 | 30 cu 60 | 15 25 30 40 60 |
| 3 | 40 60 | 40 este deja la loc | 15 25 30 40 60 |

Bucla exterioară merge până la `n - 1`, pentru că, după ce ultimele două elemente sunt la loc, și ultimul este.

**Încearcă tu (15 min)**  
- [ ] Sortezi un vector de 6 numere ale tale  
- [ ] Faci pe foaie un tabel ca cel de mai sus pentru `5 2 8 1 9`  
- [ ] Sortezi un vector care este deja în ordine și vezi că rămâne la fel  

### Exemplul 4 — Sortare descrescătoare

```cpp
#include <iostream>
using namespace std;

int main() {
    int g[5] = {40, 15, 60, 25, 30};
    int n = 5;

    for (int i = 0; i < n - 1; i++) {
        int poz = i;
        for (int j = i + 1; j < n; j++) {
            if (g[j] > g[poz]) {
                poz = j;
            }
        }
        int aux = g[i];
        g[i] = g[poz];
        g[poz] = aux;
    }

    cout << "Descrescator:";
    for (int i = 0; i < n; i++) {
        cout << " " << g[i];
    }
    cout << endl;
    return 0;
}
```

**Ieșire:**
```
Descrescator: 60 40 30 25 15
```

Singura schimbare față de Exemplul 3 este comparația: `g[j] > g[poz]` în loc de `g[j] < g[poz]`. Acum alegem **cea mai mare** valoare rămasă și o punem înainte. Ordinea (crescător sau descrescător) se hotărăște dintr-un singur semn.

**Încearcă tu (10 min)**  
- [ ] Sortezi un vector de 7 numere descrescător  
- [ ] Faci programul să **citească** vectorul de la tastatură  
- [ ] Alegi ordinea: citești `1` pentru crescător și `2` pentru descrescător (cu `if`)  

### Exemplul 5 — Top 3

```cpp
#include <iostream>
using namespace std;

int main() {
    int g[6] = {40, 15, 60, 25, 30, 55};
    int n = 6;

    for (int i = 0; i < n - 1; i++) {
        int poz = i;
        for (int j = i + 1; j < n; j++) {
            if (g[j] > g[poz]) {
                poz = j;
            }
        }
        int aux = g[i];
        g[i] = g[poz];
        g[poz] = aux;
    }

    int top = 3;
    if (n < top) {
        top = n;
    }
    cout << "Top " << top << ":" << endl;
    for (int i = 0; i < top; i++) {
        cout << "Locul " << i + 1 << ": " << g[i] << " puncte" << endl;
    }
    return 0;
}
```

**Ieșire:**
```
Top 3:
Locul 1: 60 puncte
Locul 2: 55 puncte
Locul 3: 40 puncte
```

După sortarea descrescătoare, cele mai bune scoruri sunt la început, deci top 3 înseamnă primele trei elemente. Dacă ai mai puțin de trei scoruri, nu vrem să citim în afara vectorului: `top` devine `n`.

**Încearcă tu (10 min)**  
- [ ] Faci top 5 în loc de top 3  
- [ ] Rulezi cu doar 2 scoruri, ca să verifici `top`  
- [ ] Afișezi și **cel mai slab** scor (ultimul element)  

### Exemplul 6 — Recordurile mele (proiectul orei)

```cpp
#include <iostream>
using namespace std;

int main() {
    int g[20];
    int n;

    do {
        cout << "Cate recorduri (1-20)? ";
        cin >> n;
    } while (n < 1 || n > 20);

    for (int i = 0; i < n; i++) {
        cout << "Scorul " << i + 1 << ": ";
        cin >> g[i];
    }

    cout << endl << "Scoruri in ordinea introducerii:";
    for (int i = 0; i < n; i++) {
        cout << " " << g[i];
    }
    cout << endl;

    for (int i = 0; i < n - 1; i++) {
        int poz = i;
        for (int j = i + 1; j < n; j++) {
            if (g[j] > g[poz]) {
                poz = j;
            }
        }
        int aux = g[i];
        g[i] = g[poz];
        g[poz] = aux;
    }

    cout << endl << "=== CLASAMENT ===" << endl;
    for (int i = 0; i < n; i++) {
        cout << "Locul " << i + 1 << ": " << g[i] << endl;
    }

    cout << endl << "Recordul tau: " << g[0] << endl;
    cout << "Cel mai slab scor: " << g[n - 1] << endl;
    cout << "Diferenta: " << g[0] - g[n - 1] << endl;
    return 0;
}
```

**Rulare:**
```
Cate recorduri (1-20)? 5
Scorul 1: 40
Scorul 2: 15
Scorul 3: 60
Scorul 4: 25
Scorul 5: 30

Scoruri in ordinea introducerii: 40 15 60 25 30

=== CLASAMENT ===
Locul 1: 60
Locul 2: 40
Locul 3: 30
Locul 4: 25
Locul 5: 15

Recordul tau: 60
Cel mai slab scor: 15
Diferenta: 45
```

Afișăm scorurile **înainte** de sortare, pentru că sortarea le schimbă ordinea în același vector. După sortare, recordul este `g[0]`, iar cel mai slab scor este `g[n - 1]`. Vezi cât de puține linii nouă am adăugat: sortarea este un bloc pe care îl poți reutiliza în orice program.

**Încearcă tu (15 min)**  
- [ ] Introduci scorurile tale (cel puțin 6) și verifici clasamentul  
- [ ] Adaugi „Top 3” sub clasament  
- [ ] Afișezi un mesaj special dacă recordul depășește `100`  

---

## De făcut azi — „Recordurile mele”

| | Ce trebuie să ai |
|---|---|
| **Minim** | Un program care citește `n` scoruri într-un vector, le sortează și le afișează în ordine descrescătoare |
| **Complet** | Minim + scorurile în ordinea introducerii, clasament cu locuri, recordul, cel mai slab scor, diferența și verificarea lui `n` |

**Gata când:**
- [ ] Programul compilează fără erori  
- [ ] Citește scorurile într-un vector, cu verificarea lui `n`  
- [ ] Le sortează corect, descrescător  
- [ ] Afișează clasamentul cu locuri  
- [ ] (Complet) Afișează scorurile și în ordinea introducerii  
- [ ] (Complet) Afișează recordul, cel mai slab scor și diferența  
- [ ] Ai testat cu scoruri deja ordonate și cu scoruri egale  
- [ ] Fișierul se numește `Prenume_Nume_M2L9.cpp`

---

## Bonus ★★★ — Provocare: Mediana
*Doar dacă ai terminat Complet.*

**Mediana** este valoarea din **mijlocul** unui vector sortat. Dacă `n` este impar, este elementul `g[n / 2]`. Dacă `n` este par, este media celor două elemente din mijloc. Pentru `10 40 20 30`, vectorul sortat este `10 20 30 40`, iar mediana este `25`.

- [ ] Sortezi vectorul crescător  
- [ ] Verifici dacă `n` este par sau impar (cu `n % 2`)  
- [ ] Pentru `n` par, folosești `(g[n / 2 - 1] + g[n / 2]) / 2.0`  
- [ ] Testezi cu `40 15 60 25 30` (mediana `30`) și cu un vector cu număr par de elemente  

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| Ambele valori ajung egale la schimbare | Ai scris `a = b; b = a;` fără variabilă ajutătoare | `aux = a; a = b; b = aux;` |
| Vectorul nu iese sortat | Bucla interioară pornește de la `0` sau comparația este greșită | `j = i + 1`, comparație cu `g[poz]` |
| Elemente citite în afara vectorului | Bucla interioară merge până la `n + 1` sau mai mult | `j < n` |
| Ordinea este inversă | Ai folosit `>` în loc de `<` (sau invers) | `<` pentru crescător, `>` pentru descrescător |
| Scorurile din „ordinea introducerii” ies sortate | Le-ai afișat după sortare | Afișează-le **înainte** de sortare |
| Top 3 afișează valori ciudate | Ai mai puține scoruri decât 3 | `if (n < top) top = n;` |
| Se schimbă mereu `g[0]` | Ai uitat să folosești `g[i]` și `g[poz]` la schimbare | `aux = g[i]; g[i] = g[poz]; g[poz] = aux;` |

---

## Recapitulare pe scurt
- Schimbarea a două valori cere o variabilă ajutătoare: `aux = a; a = b; b = aux;`.  
- Sortarea prin selecție: pentru fiecare poziție `i`, găsești cel mai mic (sau cel mai mare) element din restul vectorului și îl schimbi cu `g[i]`.  
- Crescător sau descrescător: se schimbă doar semnul comparației.  
- Top 3: sortezi descrescător și afișezi primele trei, cu grijă la `n`.  
- Sortarea schimbă ordinea din vector: afișează ce vrei din ordinea inițială **înainte**.  

---

## Quiz scurt
- De ce avem nevoie de `aux` la schimbarea a două valori?  
- Ce reține variabila `poz` în sortare?  
- De ce bucla interioară pornește de la `i + 1`?  
- Ce schimbi ca să sortezi descrescător?  
- Unde se află recordul după sortarea descrescătoare?  

---

## Temă
1. Refă **Exemplele 1–6** pe calculatorul tău și testează fiecare cu cel puțin două seturi de date.  
2. Scrie un program care verifică dacă un vector este sortat crescător.  
3. Scrie un program care afișează al doilea cel mai mare scor, după sortare.  
4. Scrie un program care sortează un vector și afișează diferența dintre cea mai mare și cea mai mică valoare.  
5. Salvează tot ca `Tema_M2L9_Prenume_Nume.cpp`.

### Exemple pentru acasă
Aceste exemple folosesc exact ce ai învățat azi. Scrie-le de mână, rulează-le și schimbă-le după preferințe.

**Acasă 1 — Este sortat?**
```cpp
#include <iostream>
using namespace std;

int main() {
    int g[5] = {10, 20, 20, 35, 50};
    int n = 5;

    bool sortat = true;
    for (int i = 0; i < n - 1; i++) {
        if (g[i] > g[i + 1]) {
            sortat = false;
        }
    }

    if (sortat) {
        cout << "Vectorul este sortat crescator" << endl;
    } else {
        cout << "Vectorul nu este sortat" << endl;
    }
    return 0;
}
```
Comparăm fiecare element cu **următorul**. Dacă găsim vreo pereche în care primul este mai mare, vectorul nu este sortat. Rezultatul este `Vectorul este sortat crescator` (valorile egale sunt permise).

**Acasă 2 — Al doilea scor**
```cpp
#include <iostream>
using namespace std;

int main() {
    int g[6] = {40, 15, 60, 25, 30, 55};
    int n = 6;

    for (int i = 0; i < n - 1; i++) {
        int poz = i;
        for (int j = i + 1; j < n; j++) {
            if (g[j] > g[poz]) {
                poz = j;
            }
        }
        int aux = g[i];
        g[i] = g[poz];
        g[poz] = aux;
    }

    cout << "Al doilea scor: " << g[1] << endl;
    return 0;
}
```
Rezultatul este `Al doilea scor: 55`. După sortarea descrescătoare, al doilea scor este chiar `g[1]`.

**Acasă 3 — Diferența dintre extreme**
```cpp
#include <iostream>
using namespace std;

int main() {
    int g[6] = {40, 15, 60, 25, 30, 55};
    int n = 6;

    for (int i = 0; i < n - 1; i++) {
        int poz = i;
        for (int j = i + 1; j < n; j++) {
            if (g[j] < g[poz]) {
                poz = j;
            }
        }
        int aux = g[i];
        g[i] = g[poz];
        g[poz] = aux;
    }

    cout << "Diferenta mare - mic: " << g[n - 1] - g[0] << endl;
    return 0;
}
```
Rezultatul este `Diferenta mare - mic: 45`. După sortarea crescătoare, cel mai mic este `g[0]`, iar cel mai mare este `g[n - 1]`.

---

## Ce urmează — Lecția 10
Încheiem modulul cu **Arcada de jocuri**: un proiect final cu meniu, care folosește tot ce ai învățat în Modulul 2, și primești insigna **Loop Master**.
