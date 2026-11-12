# LECȚIA 5 — Constructorul de forme
### Bucle imbricate: o buclă în altă buclă
**Modulul 2 · Bucle și vectori · 2 ore**  
**Code Maker Club · Loop Master**

> Azi pui o buclă **în interiorul** altei bucle și desenezi din caractere dreptunghiuri, triunghiuri și piramide. La final construiești un program care desenează forma pe care o alegi.  
> Fișier: `Prenume_Nume_M2L5.cpp`

---

## Ce facem azi
La final folosești două bucle una în alta (bucle **imbricate**), înțelegi cum se învârt ele (cea din interior se repetă complet la fiecare rotire a celei din exterior), desenezi dreptunghiuri, triunghiuri și piramide și alegi forma dintr-un meniu.

Un desen din caractere are **rânduri** și, pe fiecare rând, **coloane**. O buclă se ocupă de rânduri, iar o a doua buclă, din interiorul ei, se ocupă de coloanele de pe fiecare rând. Aceeași idee stă în spatele unui tabel, al unei table de joc sau al pixelilor de pe ecran: pentru fiecare rând, parcurgi toate coloanele.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare L4: `do-while`, meniuri, alegerea buclei |
| 15–35 | Cum se învârt două bucle (**Exemplul 1**) |
| 35–60 | Dreptunghiuri (**Exemplele 2–3**) |
| 60–85 | Triunghi și piramidă (**Exemplele 4–5**) |
| 85–115 | Proiectul: Constructorul de forme + Provocarea (**Exemplul 6**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `for` în interiorul altui `for` | Bucla din interior se repetă complet la fiecare rotire a celei din exterior | `for (i...) { for (j...) { ... } }` |
| `i` pentru rânduri, `j` pentru coloane | Două contoare, câte unul pentru fiecare buclă | `i <= 3`, `j <= 5` |
| `cout << endl;` după bucla interioară | Trece la rândul următor | `cout << endl;` |
| `n - i` și `2 * i - 1` | Câte spații și câte steluțe are rândul `i` al unei piramide | pentru `i = 2` și `n = 4`: 2 spații, 3 steluțe |

---

## Pas cu pas

### Exemplul 1 — Cum se învârt două bucle

```cpp
#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 3; i++) {
        for (int j = 1; j <= 2; j++) {
            cout << "i = " << i << ", j = " << j << endl;
        }
    }
    return 0;
}
```

**Ieșire:**
```
i = 1, j = 1
i = 1, j = 2
i = 2, j = 1
i = 2, j = 2
i = 3, j = 1
i = 3, j = 2
```

Citește ieșirea cu atenție. Cât timp `i` este `1`, bucla cu `j` rulează de la `1` la `2`. Apoi `i` devine `2`, iar `j` o ia de la capăt. Se întâmplă ca la ceas: **bucla din interior face o tură întreagă la fiecare pas al celei din exterior**, la fel cum acul minutelor face o tură la fiecare oră.

| `i` (exterior) | `j` (interior) |
|----------------|----------------|
| 1 | 1, 2 |
| 2 | 1, 2 |
| 3 | 1, 2 |

În total, corpul buclei interioare se execută `3 * 2 = 6` ori.

**Încearcă tu (10 min)**  
- [ ] Schimbi limitele în `i <= 2` și `j <= 4` și prevezi câte rânduri se afișează (8)  
- [ ] Faci același tabel pe foaie pentru `i <= 3` și `j <= 3`  
- [ ] Afișezi doar `i * j` pe fiecare rând, în loc de text  

### Exemplul 2 — Un dreptunghi de steluțe

```cpp
#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 3; i++) {
        for (int j = 1; j <= 5; j++) {
            cout << "*";
        }
        cout << endl;
    }
    return 0;
}
```

**Ieșire:**
```
*****
*****
*****
```

Bucla exterioară (`i`) se repetă de 3 ori: sunt **3 rânduri**. În fiecare rând, bucla interioară (`j`) afișează 5 steluțe: sunt **5 coloane**. După ce rândul este gata, `cout << endl;` trece la rândul următor. Observă **unde** este `endl`: **după** bucla interioară, dar **în** bucla exterioară.

> **Atenție:** dacă pui `cout << endl;` în interiorul buclei cu `j`, fiecare steluță ajunge pe rândul ei. Dacă îl uiți, tot desenul apare pe un singur rând.

**Încearcă tu (10 min)**  
- [ ] Schimbi dreptunghiul în 5 rânduri și 3 coloane  
- [ ] Desenezi un pătrat de 4 pe 4  
- [ ] Muți `endl` în bucla interioară și vezi ce se întâmplă  

### Exemplul 3 — Dreptunghiul ales de utilizator

```cpp
#include <iostream>
using namespace std;

int main() {
    int randuri, coloane;
    cout << "Randuri: ";
    cin >> randuri;
    cout << "Coloane: ";
    cin >> coloane;

    for (int i = 1; i <= randuri; i++) {
        for (int j = 1; j <= coloane; j++) {
            cout << "# ";
        }
        cout << endl;
    }
    return 0;
}
```

**Rulare:**
```
Randuri: 3
Coloane: 4
# # # # 
# # # # 
# # # # 
```

Limitele buclelor vin acum din `cin`, deci același program desenează orice dreptunghi. Am pus un spațiu după fiecare `#`, ca desenul să arate mai pătrățos.

**Încearcă tu (10 min)**  
- [ ] Rulezi cu `5` rânduri și `2` coloane, apoi cu `1` și `8`  
- [ ] Schimbi simbolul `#` cu un alt caracter, de exemplu `@`  
- [ ] Citești un singur număr `n` și desenezi un pătrat `n` pe `n`  

### Exemplul 4 — Triunghiul

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Inaltime: ";
    cin >> n;

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cout << "*";
        }
        cout << endl;
    }
    return 0;
}
```

**Rulare:**
```
Inaltime: 4
*
**
***
****
```

Diferența față de dreptunghi este mică, dar importantă: bucla interioară nu mai merge până la un număr fix, ci până la `i`, adică până la **numărul rândului**. Rândul 1 are 1 steluță, rândul 2 are 2 și așa mai departe.

| Rândul `i` | Câte steluțe (`j` de la 1 la `i`) |
|------------|-----------------------------------|
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 4 |

**Încearcă tu (10 min)**  
- [ ] Desenezi triunghiul pentru înălțimile `3` și `6`  
- [ ] Afișezi, în loc de steluțe, numărul rândului, de exemplu `1`, `22`, `333`  
- [ ] Faci triunghiul „întors”: primul rând are `n` steluțe, iar ultimul are `1` (indiciu: `j <= n - i + 1`)  

### Exemplul 5 — Piramida

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Inaltime: ";
    cin >> n;

    for (int i = 1; i <= n; i++) {
        for (int s = 1; s <= n - i; s++) {
            cout << " ";
        }
        for (int j = 1; j <= 2 * i - 1; j++) {
            cout << "*";
        }
        cout << endl;
    }
    return 0;
}
```

**Rulare:**
```
Inaltime: 4
   *
  ***
 *****
*******
```

Pe fiecare rând sunt **două** bucle, una după alta, în interiorul buclei exterioare. Prima afișează **spațiile** din stânga: `n - i`. A doua afișează **steluțele**: `2 * i - 1`.

| Rândul `i` (pentru `n = 4`) | Spații (`n - i`) | Steluțe (`2 * i - 1`) |
|-----------------------------|------------------|-----------------------|
| 1 | 3 | 1 |
| 2 | 2 | 3 |
| 3 | 1 | 5 |
| 4 | 0 | 7 |

Spațiile se micșorează, iar steluțele cresc cu 2 pe rând: de aceea piramida este simetrică.

**Încearcă tu (10 min)**  
- [ ] Verifici tabelul de mai sus pentru `n = 5`  
- [ ] Desenezi piramida pentru `n = 3` și `n = 6`  
- [ ] Înlocuiești steluțele cu un alt caracter  

### Exemplul 6 — Constructorul de forme (proiectul orei)

```cpp
#include <iostream>
using namespace std;

int main() {
    int optiune;

    do {
        cout << endl << "=== CONSTRUCTORUL DE FORME ===" << endl;
        cout << "1. Dreptunghi" << endl;
        cout << "2. Triunghi" << endl;
        cout << "3. Piramida" << endl;
        cout << "0. Iesire" << endl;
        cout << "Alege: ";
        cin >> optiune;

        if (optiune >= 1 && optiune <= 3) {
            int n;
            cout << "Inaltime: ";
            cin >> n;

            for (int i = 1; i <= n; i++) {
                if (optiune == 1) {
                    for (int j = 1; j <= 2 * n; j++) {
                        cout << "#";
                    }
                } else if (optiune == 2) {
                    for (int j = 1; j <= i; j++) {
                        cout << "*";
                    }
                } else {
                    for (int s = 1; s <= n - i; s++) {
                        cout << " ";
                    }
                    for (int j = 1; j <= 2 * i - 1; j++) {
                        cout << "*";
                    }
                }
                cout << endl;
            }
        } else if (optiune != 0) {
            cout << "Optiune invalida." << endl;
        }
    } while (optiune != 0);

    cout << "La revedere!" << endl;
    return 0;
}
```

**Rulare** (alegi `1` cu înălțimea `3`, apoi `3` cu înălțimea `4`, apoi `0`):
```

=== CONSTRUCTORUL DE FORME ===
1. Dreptunghi
2. Triunghi
3. Piramida
0. Iesire
Alege: 1
Inaltime: 3
######
######
######

=== CONSTRUCTORUL DE FORME ===
1. Dreptunghi
2. Triunghi
3. Piramida
0. Iesire
Alege: 3
Inaltime: 4
   *
  ***
 *****
*******

=== CONSTRUCTORUL DE FORME ===
1. Dreptunghi
2. Triunghi
3. Piramida
0. Iesire
Alege: 0
La revedere!
```

Programul adună lecțiile modulului: `do-while` pentru meniu, `if` pentru alegerea formei, bucla exterioară pentru rânduri și bucle interioare pentru coloane. Dreptunghiul are înălțimea `n` și lățimea `2 * n`, ca să arate aproape pătrat în consolă.

**Încearcă tu (15 min)**  
- [ ] Desenezi pe rând toate cele trei forme, cu înălțimi diferite  
- [ ] Alegi o opțiune invalidă și verifici mesajul  
- [ ] Adaugi o a patra formă, de exemplu triunghiul „întors”  

---

## De făcut azi — „Constructorul de forme”

| | Ce trebuie să ai |
|---|---|
| **Minim** | Un program care citește înălțimea și desenează un dreptunghi și un triunghi, cu bucle imbricate |
| **Complet** | Minim + piramida, un meniu în `do-while` care alege forma (și se repetă până la `0`) și un mesaj pentru opțiune invalidă |

**Gata când:**
- [ ] Programul compilează fără erori  
- [ ] Citește înălțimea cu `cin`, după un mesaj clar  
- [ ] Desenează un dreptunghi cu două bucle imbricate  
- [ ] Desenează un triunghi cu două bucle imbricate  
- [ ] (Complet) Desenează o piramidă simetrică  
- [ ] (Complet) Meniul se repetă până alegi `0` și tratează opțiunile invalide  
- [ ] Ai testat fiecare formă cu cel puțin două înălțimi  
- [ ] Fișierul se numește `Prenume_Nume_M2L5.cpp`

---

## Bonus ★★★ — Provocare: Tabla de joc
*Doar dacă ai terminat Complet.*

Desenează o tablă de joc `n` pe `n`, în care pătratele alternează între `#` și `.`, ca la o tablă de șah. Afișează `#` când suma `i + j` este pară și `.` când este impară.

- [ ] Citești mărimea `n` a tablei  
- [ ] Folosești două bucle imbricate și `(i + j) % 2`  
- [ ] Pentru `n = 5`, colțul din stânga sus este `#`, iar pătratul din dreapta lui este `.`  
- [ ] Testezi cu `4` și cu `8`  

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| Tot desenul apare pe un singur rând | Lipsește `cout << endl;` după bucla interioară | Pune `endl` după bucla cu `j`, în bucla cu `i` |
| Fiecare steluță este pe rândul ei | `endl` este în bucla interioară | Mută `endl` după bucla interioară |
| Desenul este un dreptunghi, nu triunghi | Bucla interioară merge până la un număr fix | Folosește `j <= i` |
| Piramida nu este simetrică | Numărul de spații sau de steluțe este greșit | Spații: `n - i`; steluțe: `2 * i - 1` |
| Bucla interioară nu se resetează | Ai declarat `j` în afara buclei exterioare | Declară `j` în `for (int j = 1; ...)`, în interior |
| Se afișează prea multe sau prea puține rânduri | Ai amestecat `i` și `j` | `i` pentru rânduri, `j` pentru coloane |
| Programul pare blocat | Ai pus `i++` în loc de `j++` în bucla interioară | Fiecare buclă își crește propriul contor |

---

## Recapitulare pe scurt
- Două bucle una în alta se numesc **bucle imbricate**.  
- Bucla din interior face o tură completă la fiecare rotire a buclei din exterior.  
- `i` numără rândurile, `j` numără coloanele; `endl` vine după bucla interioară.  
- Dreptunghi: ambele limite sunt fixe. Triunghi: `j <= i`.  
- Piramidă: `n - i` spații, apoi `2 * i - 1` steluțe.  
- Numărul total de repetări ale corpului interior este rânduri înmulțit cu coloane.  

---

## Quiz scurt
- De câte ori se execută corpul buclei interioare la `i <= 3` și `j <= 4`?  
- Unde pui `cout << endl;` într-un desen cu două bucle și de ce?  
- Cum faci din dreptunghi un triunghi?  
- Câte spații și câte steluțe are rândul 3 al unei piramide cu `n = 5`?  
- La ce folosește `(i + j) % 2` într-o tablă de joc?  

---

## Temă
1. Refă **Exemplele 1–6** pe calculatorul tău și testează fiecare cu cel puțin două înălțimi.  
2. Scrie un program care desenează un triunghi de numere: `1`, `12`, `123` și așa mai departe.  
3. Scrie un program care desenează un dreptunghi gol, doar cu marginea din `*`.  
4. Scrie un program care afișează rândurile `1`, `22`, `333`, `4444`, `55555`.  
5. Salvează tot ca `Tema_M2L5_Prenume_Nume.cpp`.

### Exemple pentru acasă
Aceste exemple folosesc exact ce ai învățat azi. Scrie-le de mână, rulează-le și schimbă-le după preferințe.

**Acasă 1 — Triunghi de numere**
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Inaltime: ";
    cin >> n;

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cout << j;
        }
        cout << endl;
    }
    return 0;
}
```
Pentru `4`, programul afișează `1`, `12`, `123`, `1234`, fiecare pe rândul lui.

**Acasă 2 — Dreptunghi gol**
```cpp
#include <iostream>
using namespace std;

int main() {
    int randuri, coloane;
    cout << "Randuri: ";
    cin >> randuri;
    cout << "Coloane: ";
    cin >> coloane;

    for (int i = 1; i <= randuri; i++) {
        for (int j = 1; j <= coloane; j++) {
            if (i == 1 || i == randuri || j == 1 || j == coloane) {
                cout << "*";
            } else {
                cout << " ";
            }
        }
        cout << endl;
    }
    return 0;
}
```
Pentru `4` rânduri și `6` coloane, se desenează doar marginea: prima și ultima linie și prima și ultima coloană.

**Acasă 3 — Rânduri de cifre identice**
```cpp
#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 5; i++) {
        for (int j = 1; j <= i; j++) {
            cout << i;
        }
        cout << endl;
    }
    return 0;
}
```
Rezultatul este `1`, `22`, `333`, `4444`, `55555`. Rândul `i` conține cifra `i` repetată de `i` ori.

---

## Ce urmează — Lecția 6
Trecem la **vectori**: o listă de valori sub un singur nume. Facem **Cutia cu piese**, în care citim și afișăm greutatea mai multor piese.
