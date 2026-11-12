# LECȚIA 10 — Arcada de jocuri
### Recapitulare Modul 2 — proiect final
**Modulul 2 · Bucle și vectori · 2 ore**  
**Code Maker Club · Loop Master**

> Azi aduni tot ce ai învățat în Modulul 2 într-un singur program: o **arcadă** cu meniu, în care ții scorurile tale, le afișezi, le cauți și le sortezi. La final primești insigna **Loop Master**.  
> Fișier: `Prenume_Nume_M2_Proiect.cpp`

---

## Ce facem azi
Azi aduni tot ce ai învățat în Modulul 2 într-un singur program: o **arcadă** cu meniu, în care ții scorurile tale, le afișezi, le cauți și le sortezi. La final primești insigna **Loop Master**.

Nu mai înveți o regulă nouă. Folosești buclele și vectorii pe care îi știi deja ca să construiești un program întreg, de la meniu până la ieșire. Așa arată un joc sau o aplicație adevărată: un meniu care se repetă până alegi să ieși, și date păstrate într-un vector.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–25 | Recapitulare pe foaie și în cod (**Exemplele 1–5**) |
| 25–40 | Depanare: găsim greșelile (**Exemplul 6**) |
| 40–50 | Planificăm proiectul și parcurgem lista de verificare |
| 50–100 | Construim proiectul (**Exemplul 7**) |
| 100–115 | Prezentarea proiectelor, mini-testul și Provocarea |
| 115–120 | Insigna **Loop Master** și temă |

---

## Ce folosești azi

Azi nu înveți nicio instrucțiune nouă. Folosești:

| Din lecția | Ce folosești |
|-----------|--------------|
| L1–L2 | `for`, contor, acumulator, `i += pas` |
| L3–L4 | `while` cu santinelă, `do-while`, meniu cu `switch` |
| L5 | bucle imbricate |
| L6–L7 | vectori, indici de la `0`, sumă, medie, minim, maxim |
| L8–L9 | căutare, schimbarea a două valori, sortare |

---

## Pas cu pas

### Recapitulare: cinci programe din lecțiile Modulului 2

Fiecare program mic de mai jos rezumă una sau mai multe lecții. Citește programul, spune cu voce tare ce face și ce lecție ilustrează.

### Exemplul 1 — L1–L2: `for` cu pas, suma

```cpp
#include <iostream>
using namespace std;

int main() {
    int suma = 0;
    for (int i = 3; i <= 30; i += 3) {
        cout << i << " ";
        suma += i;
    }
    cout << endl << "Suma: " << suma << endl;
    return 0;
}
```

**Ieșire:**
```
3 6 9 12 15 18 21 24 27 30 
Suma: 165
```

### Exemplul 2 — L3: `while` cu santinelă

```cpp
#include <iostream>
using namespace std;

int main() {
    int x, nr = 0, suma = 0;

    cout << "Numar (0 = stop): ";
    cin >> x;
    while (x != 0) {
        nr++;
        suma += x;
        cout << "Numar (0 = stop): ";
        cin >> x;
    }

    cout << "Ai citit " << nr << " numere, suma " << suma << endl;
    return 0;
}
```

**Rulare** (tastezi `5`, `3`, `10`, `0`):
```
Numar (0 = stop): 5
Numar (0 = stop): 3
Numar (0 = stop): 10
Numar (0 = stop): 0
Ai citit 3 numere, suma 18
```

### Exemplul 3 — L4–L5: `do-while` și bucle imbricate

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;

    do {
        cout << "Alege 1-5: ";
        cin >> n;
    } while (n < 1 || n > 5);

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cout << "* ";
        }
        cout << endl;
    }
    return 0;
}
```

**Rulare** (tastezi `7`, apoi `4`):
```
Alege 1-5: 7
Alege 1-5: 4
* 
* * 
* * * 
* * * * 
```

### Exemplul 4 — L6–L7: vector, maxim și poziție

```cpp
#include <iostream>
using namespace std;

int main() {
    int g[5];
    for (int i = 0; i < 5; i++) {
        cout << "Scorul " << i + 1 << ": ";
        cin >> g[i];
    }

    int maxim = g[0];
    int poz = 0;
    for (int i = 1; i < 5; i++) {
        if (g[i] > maxim) {
            maxim = g[i];
            poz = i;
        }
    }

    cout << "Maxim: " << maxim << " pe pozitia " << poz + 1 << endl;
    return 0;
}
```

**Rulare** (tastezi `40`, `15`, `60`, `25`, `30`):
```
Scorul 1: 40
Scorul 2: 15
Scorul 3: 60
Scorul 4: 25
Scorul 5: 30
Maxim: 60 pe pozitia 3
```

### Exemplul 5 — L8: căutare în vector

```cpp
#include <iostream>
using namespace std;

int main() {
    int g[5] = {40, 15, 60, 25, 30};
    int n = 5;
    int x;

    cout << "Ce scor cauti? ";
    cin >> x;

    int i = 0;
    while (i < n && g[i] != x) {
        i++;
    }

    if (i < n) {
        cout << "Gasit pe pozitia " << i + 1 << endl;
    } else {
        cout << "Nu exista" << endl;
    }
    return 0;
}
```

**Rulare** (tastezi `25`):
```
Ce scor cauti? 25
Gasit pe pozitia 4
```

**Încearcă tu (10 min)**  
- [ ] Alegi 3 dintre cele 5 programe și le rescrii **fără să te uiți**  
- [ ] Spui cu voce tare, pentru fiecare, ce lecție ilustrează  
- [ ] Notezi pe foaie ce ți se pare mai greu din tot Modulul 2  

### Depanare: găsește greșelile

Un programator petrece mult timp **căutând greșeli**. Este o aptitudine care se antrenează.

### Exemplul 6 — Programul cu 6 greșeli

Programul ar trebui să afișeze media temperaturilor și **ziua** cea mai caldă. Are **6 greșeli** de logică. Compilează, dar rezultatele sunt greșite sau imprevizibile. Găsește greșelile înainte de a citi soluția.

```cpp
#include <iostream>
using namespace std;

int main() {
    int t[5] = {18, 25, 31, 22, 15};
    int n = 5;

    int suma;
    for (int i = 0; i <= n; i++) {
        suma += t[i];
    }
    cout << "Media: " << suma / n << endl;

    int maxim = 0;
    int ziMax = 0;
    for (int i = 1; i < n; i++) {
        if (t[i] > maxim);
        {
            maxim = t[i];
            ziMax = i;
        }
    }
    cout << "Cea mai calda zi: " << ziMax << endl;
    return 0;
}
```

**Cum lucrezi:** rulează programul, compară rezultatul cu ce ai calcula pe foaie și caută diferențele. Pentru temperaturile `18 25 31 22 15`, rezultatul corect este media `22.2` și ziua `3`.

#### Soluția

```cpp
#include <iostream>
using namespace std;

int main() {
    int t[5] = {18, 25, 31, 22, 15};
    int n = 5;

    int suma = 0;                         // 1. suma trebuia pornita de la 0
    for (int i = 0; i < n; i++) {         // 2. i < n, nu i <= n
        suma += t[i];
    }
    cout << "Media: " << (double)suma / n << endl;   // 3. (double), pentru zecimale

    int maxim = t[0];                     // 4. maximul porneste de la t[0]
    int ziMax = 0;
    for (int i = 1; i < n; i++) {
        if (t[i] > maxim) {               // 5. fara ; dupa if
            maxim = t[i];
            ziMax = i;
        }
    }
    cout << "Cea mai calda zi: " << ziMax + 1 << endl;  // 6. ziua este ziMax + 1
    return 0;
}
```

**Rulare:**
```
Media: 22.2
Cea mai calda zi: 3
```

Greșelile 1 și 2 produc rezultate imprevizibile: `suma` pornește de la o valoare întâmplătoare, iar `t[5]` este în afara vectorului. Greșeala 3 taie zecimalele. Greșeala 4 este ascunsă: nu se vede dacă maximul nu e primul element. Greșeala 5 (`;` după `if`) face ca blocul de după să se execute **mereu**. Greșeala 6 afișează indicele, nu ziua. Compilatorul nu prinde nicio greșeală aici: **testarea cu valori** o face.

### Planul proiectului

Proiectul este **Arcada de jocuri**: un program cu meniu, care se repetă până alegi `0`. Scorurile se păstrează într-un vector de cel mult 20 de locuri.

| Opțiune | Ce face | Din lecția |
|---------|---------|------------|
| 1 | Adaugă un scor în listă (dacă mai e loc) | L4, L6 |
| 2 | Afișează scorurile, numerotate | L6 |
| 3 | Statistici: media, minimul, maximul | L7 |
| 4 | Caută un scor și spune pe ce poziție este | L8 |
| 5 | Sortează scorurile descrescător | L9 |
| 0 | Ieșire | L4 |

### Lista de verificare (o completezi înainte de demo)
- [ ] Are **antet** (nume, dată, scop) și minimum 3 comentarii utile  
- [ ] Meniul se repetă cu `do-while` până alegi `0`  
- [ ] Folosește un `switch` pentru opțiuni, cu `default` pentru opțiuni greșite  
- [ ] Păstrează scorurile într-un vector, cu `n` scoruri folosite  
- [ ] Verifică situațiile limită: lista plină și lista goală  
- [ ] Rulează fără erori, cu minimum **2 seturi de date** diferite  
- [ ] Indentare corectă și nume clare pentru variabile  
- [ ] Îl poți explica în **30 de secunde**  

### Exemplul 7 — Arcada de jocuri (model)

Acesta este un model. Nu îl copia: folosește-l ca idee și construiește programul **tău**, cu opțiuni sau mesaje alese de tine.

```cpp
/*
   Program: Arcada de jocuri
   Scop:    meniu pentru scorurile mele: adauga, afiseaza, statistici,
            cauta, sorteaza
*/
#include <iostream>
using namespace std;

int main() {
    int g[20];
    int n = 0;
    int optiune;

    cout << "===== ARCADA DE JOCURI =====" << endl;

    do {
        cout << endl;
        cout << "1 Adauga  2 Afiseaza  3 Statistici  4 Cauta  5 Sorteaza  0 Iesire" << endl;
        cout << "Alege: ";
        cin >> optiune;

        switch (optiune) {
            case 1:
                if (n == 20) {
                    cout << "Lista este plina." << endl;
                } else {
                    cout << "Scor nou: ";
                    cin >> g[n];
                    n++;
                    cout << "Adaugat! Scoruri in lista: " << n << endl;
                }
                break;

            case 2:
                if (n == 0) {
                    cout << "Lista este goala." << endl;
                } else {
                    for (int i = 0; i < n; i++) {
                        cout << i + 1 << ". " << g[i] << endl;
                    }
                }
                break;

            case 3:
                if (n == 0) {
                    cout << "Lista este goala." << endl;
                } else {
                    int suma = 0;
                    int minim = g[0];
                    int maxim = g[0];
                    for (int i = 0; i < n; i++) {
                        suma += g[i];
                        if (g[i] < minim) {
                            minim = g[i];
                        }
                        if (g[i] > maxim) {
                            maxim = g[i];
                        }
                    }
                    cout << "Media: " << (double)suma / n << endl;
                    cout << "Minim: " << minim << endl;
                    cout << "Maxim: " << maxim << endl;
                }
                break;

            case 4:
                if (n == 0) {
                    cout << "Lista este goala." << endl;
                } else {
                    int x;
                    cout << "Ce scor cauti? ";
                    cin >> x;
                    int i = 0;
                    while (i < n && g[i] != x) {
                        i++;
                    }
                    if (i < n) {
                        cout << "Gasit pe pozitia " << i + 1 << endl;
                    } else {
                        cout << "Nu exista." << endl;
                    }
                }
                break;

            case 5:
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
                cout << "Scorurile sunt sortate descrescator." << endl;
                break;

            case 0:
                cout << "La revedere!" << endl;
                break;

            default:
                cout << "Optiune invalida." << endl;
        }
    } while (optiune != 0);

    return 0;
}
```

**Rulare** (tastezi `1 40`, `1 15`, `1 60`, `3`, `5`, `2`, `4 15`, `0`):
```
===== ARCADA DE JOCURI =====

1 Adauga  2 Afiseaza  3 Statistici  4 Cauta  5 Sorteaza  0 Iesire
Alege: 1
Scor nou: 40
Adaugat! Scoruri in lista: 1

1 Adauga  2 Afiseaza  3 Statistici  4 Cauta  5 Sorteaza  0 Iesire
Alege: 1
Scor nou: 15
Adaugat! Scoruri in lista: 2

1 Adauga  2 Afiseaza  3 Statistici  4 Cauta  5 Sorteaza  0 Iesire
Alege: 1
Scor nou: 60
Adaugat! Scoruri in lista: 3

1 Adauga  2 Afiseaza  3 Statistici  4 Cauta  5 Sorteaza  0 Iesire
Alege: 3
Media: 38.3333
Minim: 15
Maxim: 60

1 Adauga  2 Afiseaza  3 Statistici  4 Cauta  5 Sorteaza  0 Iesire
Alege: 5
Scorurile sunt sortate descrescator.

1 Adauga  2 Afiseaza  3 Statistici  4 Cauta  5 Sorteaza  0 Iesire
Alege: 2
1. 60
2. 40
3. 15

1 Adauga  2 Afiseaza  3 Statistici  4 Cauta  5 Sorteaza  0 Iesire
Alege: 4
Ce scor cauti? 15
Gasit pe pozitia 3

1 Adauga  2 Afiseaza  3 Statistici  4 Cauta  5 Sorteaza  0 Iesire
Alege: 0
La revedere!
```

Ideile importante:
- `do-while` ține meniul în funcțiune cât timp `optiune != 0`;
- `n` este numărul de scoruri **folosite**; vectorul are 20 de locuri, dar folosim doar primele `n`;
- fiecare opțiune se ocupă de situațiile limită înainte să facă ceva (lista goală sau plină);
- sortarea, căutarea și statisticile sunt blocurile din lecțiile 7, 8 și 9, puse în cazuri de `switch`.

### Prezentarea proiectului (demo)
1. Spui într-o propoziție ce face programul.  
2. Îl rulezi cu un set de date: adaugi scoruri, apoi încerci afișarea, statisticile și căutarea.  
3. Arăți o secvență din cod și spui ce lecție ilustrează.  
4. Răspunzi la o întrebare a colegilor sau a mentorului.  

### Mini-test de verificare

Fără să rulezi nimic, scrii pe foaie ce afișează fiecare secvență. Apoi verifici răspunsurile.

**Test 1**
```cpp
for (int i = 1; i <= 4; i++) cout << i * 2 << " ";
```

**Test 2**
```cpp
int g[4] = {5, 8, 2, 9};
cout << g[1] + g[3];
```

**Test 3**
```cpp
int x = 0;
do { x += 3; } while (x < 10);
cout << x;
```

**Test 4**
```cpp
int s = 0;
for (int i = 0; i < 3; i++)
    for (int j = 0; j < 2; j++)
        s++;
cout << s;
```

**Răspunsuri:** Test 1: `2 4 6 8`. Test 2: `17` (`g[1]` este `8`, `g[3]` este `9`). Test 3: `12` (`3, 6, 9, 12`, se oprește când `x` nu mai e sub `10`). Test 4: `6` (3 pași la exterior, câte 2 la interior).

---

## De făcut azi — „Arcada de jocuri”

| | Ce trebuie să ai |
|---|---|
| **Minim** | Meniu cu `do-while` și `switch`, cu opțiunile: adaugă un scor, afișează scorurile, ieșire |
| **Complet** | Minim + statistici (medie, minim, maxim), căutare, sortare, verificări pentru lista plină sau goală, antet și comentarii și test cu minimum două seturi de date |

**Gata când:**
- [ ] Programul compilează fără erori  
- [ ] Meniul se repetă până alegi `0`  
- [ ] Scorurile sunt păstrate într-un vector, cu `n` scoruri folosite  
- [ ] (Complet) Statisticile, căutarea și sortarea funcționează corect  
- [ ] (Complet) Programul reacționează corect la lista goală, lista plină și opțiuni greșite  
- [ ] (Complet) Are antet, comentarii, indentare corectă și mesaje clare  
- [ ] Ai testat programul cu minimum 2 seturi de date  
- [ ] Ai prezentat programul și ai explicat ce face în 30 de secunde  
- [ ] Ai primit insigna **Loop Master**

---

## Bonus ★★★ — Provocare: Ștergerea unui scor
*Doar dacă ai terminat Complet.*

Adaugă în meniu opțiunea **Șterge un scor**: utilizatorul alege poziția, iar scorul dispare din listă.

- [ ] Verifici că poziția există (între `1` și `n`)  
- [ ] Muți toate scorurile de după poziția ștearsă cu **un loc spre stânga**  
- [ ] Scazi `n` cu `1`  
- [ ] Testezi ștergerea primului, a ultimului și a unui scor din mijloc  

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| Meniul se oprește după o singură alegere | Lipsește bucla sau condiția este greșită | `do { ... } while (optiune != 0);` |
| Programul trece prin mai multe cazuri | Lipsește `break;` la un `case` | Pune `break;` la finalul fiecărui caz |
| Eroare la declarare în `case` | Variabila este declarată direct în `case` | Pune codul între `{ }` (de exemplu, în `else { }`) |
| Statisticile ies ciudate când lista e goală | `g[0]` nu are încă o valoare | Verifică `if (n == 0)` înainte |
| Scorurile se pierd sau se suprascriu | Ai uitat `n++` după adăugare | `g[n] = scor; n++;` |
| Programul se oprește sau afișează valori ciudate | Ai folosit mai multe scoruri decât are vectorul | Verifică `n == 20` înainte să adaugi |
| Sortarea strică ordinea | Bucla interioară nu pornește de la `i + 1` | `for (int j = i + 1; j < n; j++)` |
| Căutarea spune mereu „Nu exista” | Compari cu `=` sau cauți până la `n - 1` | `g[i] != x`, `i < n` |

---

## Recapitularea Modulului 2
- **L1:** `for`, contor, numărătoare inversă, `i += pas`.
- **L2:** sumă, produs, numărare, medie.
- **L3:** `while`, santinelă, validare, cifrele unui număr.
- **L4:** `do-while`, meniu cu `switch`.
- **L5:** bucle imbricate: dreptunghi, triunghi, piramidă.
- **L6:** vectori, indici de la `0`, citire și afișare.
- **L7:** sumă, medie, minim, maxim, poziția maximului.
- **L8:** căutare, poziție, apariții, dubluri.
- **L9:** schimbarea a două valori, sortare, top 3.
- **L10:** un program complet, cu meniu, de la idee la demo.

---

## Insigna Loop Master
Felicitări! Dacă ai bifat toată lista de verificare, ai primit insigna **Loop Master**. Ai învățat să repeți acțiuni cu bucle și să lucrezi cu mai multe valori deodată, în vectori. Programele tale pot acum să proceseze sute de date cu aceleași câteva linii de cod. Asta este fundația pe care construim în Modulul 3, **Problem Solver**.

---

## Quiz scurt
- Ce poate face acum un program scris de tine, după Modulul 2?  
- Când alegi `for`, `while` și `do-while`?  
- De ce vectorul are indici de la `0`?  
- Cum afli cea mai mare valoare dintr-un vector?  
- Ce trebuie verificat înainte să adaugi un element într-un vector?  

---

## Temă
1. Îmbunătățește proiectul cu **o singură** idee mică: o opțiune nouă, un mesaj în plus sau o verificare suplimentară.  
2. Pe foaie, scrie 3 lucruri învățate în Modulul 2 și 1 lucru pe care vrei să îl înțelegi mai bine.  
3. Repetă cele 5 programe de recapitulare (Exemplele 1–5) și rescrie-le din memorie.  
4. Salvează tot ca `Tema_M2L10_Prenume_Nume.cpp`.

### Exemple pentru acasă
Aceste exemple folosesc exact ce ai învățat în Modulul 2. Scrie-le de mână, rulează-le și schimbă-le după preferințe.

**Acasă 1 — Meniu cu puncte**
```cpp
#include <iostream>
using namespace std;

int main() {
    int puncte = 0;
    int optiune;

    do {
        cout << "1 Castigi 10 puncte  2 Pierzi 5 puncte  3 Afiseaza  0 Iesire" << endl;
        cout << "Alege: ";
        cin >> optiune;

        switch (optiune) {
            case 1:
                puncte += 10;
                break;
            case 2:
                puncte -= 5;
                break;
            case 3:
                cout << "Ai " << puncte << " puncte." << endl;
                break;
            case 0:
                cout << "Scor final: " << puncte << endl;
                break;
            default:
                cout << "Optiune invalida." << endl;
        }
    } while (optiune != 0);
    return 0;
}
```

**Rulare** (tastezi `1`, `2`, `3`, `0`):
```
1 Castigi 10 puncte  2 Pierzi 5 puncte  3 Afiseaza  0 Iesire
Alege: 1
1 Castigi 10 puncte  2 Pierzi 5 puncte  3 Afiseaza  0 Iesire
Alege: 2
1 Castigi 10 puncte  2 Pierzi 5 puncte  3 Afiseaza  0 Iesire
Alege: 3
Ai 5 puncte.
1 Castigi 10 puncte  2 Pierzi 5 puncte  3 Afiseaza  0 Iesire
Alege: 0
Scor final: 5
```

Este scheletul oricărui joc cu meniu: `do-while` ține programul în funcțiune, iar `switch` alege acțiunea. Aici `puncte` este un acumulator care crește sau scade.

**Acasă 2 — Inversăm vectorul pe loc**
```cpp
#include <iostream>
using namespace std;

int main() {
    int g[6] = {10, 20, 30, 40, 50, 60};
    int n = 6;

    for (int i = 0; i < n / 2; i++) {
        int aux = g[i];
        g[i] = g[n - 1 - i];
        g[n - 1 - i] = aux;
    }

    for (int i = 0; i < n; i++) {
        cout << g[i] << " ";
    }
    cout << endl;
    return 0;
}
```

Rezultatul este `60 50 40 30 20 10`. Inversăm vectorul **pe loc**, schimbând perechile de la capete: primul cu ultimul, al doilea cu penultimul. Bucla merge doar până la jumătate (`n / 2`); dacă ar merge până la capăt, ar întoarce vectorul la loc.

**Acasă 3 — Tabla înmulțirii**
```cpp
#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 5; i++) {
        for (int j = 1; j <= 5; j++) {
            cout << i * j << "\t";
        }
        cout << endl;
    }
    return 0;
}
```

Rezultat (tabla înmulțirii de la 1 la 5):
```
1	2	3	4	5
2	4	6	8	10
3	6	9	12	15
4	8	12	16	20
5	10	15	20	25
```
Bucla exterioară alege rândul `i`, iar cea interioară parcurge coloanele `j`. `\t` pune un spațiu mare între numere, ca să stea în coloane.

---

## Ce urmează — Modulul 3: „Funcții, string, algoritmi”
Învățăm să împărțim un program în **bucăți mici, cu nume**, numite funcții, să lucrăm cu texte (`string`) și să rezolvăm probleme cu cifre și numere prime. Blocurile de azi, ca sortarea sau căutarea, pot deveni funcții pe care le folosești oricând.
