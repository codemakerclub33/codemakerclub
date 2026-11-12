# LECȚIA 2 — Pușculița mea
### `for`: sumă, produs, numărare și medie
**Modulul 2 · Bucle și vectori · 2 ore**  
**Code Maker Club · Loop Master**

> Azi bucla `for` începe să **calculeze**: adună banii cheltuiți într-o săptămână, numără zilele în care ai cheltuit mult și află media pe zi.  
> Fișier: `Prenume_Nume_M2L2.cpp`

---

## Ce facem azi
La final folosești un **acumulator** ca să aduni valori într-o buclă, un **contor** ca să numeri câte valori îndeplinesc o condiție, calculezi o **medie** cu zecimale și faci un **produs** repetat, de exemplu banii care se dublează în fiecare zi.

În lecția trecută bucla doar afișa numere. Azi ea ține minte un rezultat care crește de la o rotire la alta: o sumă, o numărătoare sau un produs. Așa calculează un joc scorul total, o aplicație de bani cât ai cheltuit și un program de sport media timpilor.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare L1: `for`, start, condiție, pas |
| 15–35 | Acumulator: suma numerelor și suma citită (**Exemplele 1–2**) |
| 35–55 | Contor și medie (**Exemplele 3–4**) |
| 55–70 | Produs: banii care se dublează (**Exemplul 5**) |
| 70–115 | Proiectul: Pușculița mea + Provocarea (**Exemplul 6**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `suma += x;` | Adaugă `x` la `suma` | `suma += i;` |
| `contor++;` | Mărește contorul cu 1 | `zileMari++;` |
| `produs *= x;` | Înmulțește `produs` cu `x` | `bani *= 2;` |
| `total / 7.0` | Împărțire cu zecimale (măcar un număr are punct) | `90 / 7.0` este `12.8571` |

---

## Pas cu pas

### Exemplul 1 — Acumulatorul: suma numerelor de la 1 la 5

```cpp
#include <iostream>
using namespace std;

int main() {
    int suma = 0;

    for (int i = 1; i <= 5; i++) {
        suma += i;
        cout << "i = " << i << ", suma = " << suma << endl;
    }

    cout << "Suma numerelor de la 1 la 5 este " << suma << endl;
    return 0;
}
```

**Ieșire:**
```
i = 1, suma = 1
i = 2, suma = 3
i = 3, suma = 6
i = 4, suma = 10
i = 5, suma = 15
Suma numerelor de la 1 la 5 este 15
```

Variabila `suma` se numește **acumulator**. Ea se creează **înainte** de buclă, cu valoarea `0`, și în buclă primește de fiecare dată încă un număr: `suma += i;` înseamnă `suma = suma + i;`. Dacă ai uita să o pui pe `0`, ar porni de la o valoare necunoscută și rezultatul ar fi greșit.

**Încearcă tu (10 min)**  
- [ ] Schimbi `5` în `10` și verifici suma (trebuie să fie `55`)  
- [ ] Calculezi suma numerelor pare de la 2 la 20, cu `i += 2`  
- [ ] Scoți linia cu `cout` din interiorul buclei și lași doar rezultatul final  

### Exemplul 2 — Suma banilor cheltuiți, citită de la tastatură

```cpp
#include <iostream>
using namespace std;

int main() {
    int total = 0;

    for (int zi = 1; zi <= 7; zi++) {
        int cheltuiala;
        cout << "Ziua " << zi << ": ";
        cin >> cheltuiala;
        total += cheltuiala;
    }

    cout << "Total cheltuit: " << total << " lei" << endl;
    return 0;
}
```

**Rulare** (tastezi numerele de după `:`):
```
Ziua 1: 10
Ziua 2: 25
Ziua 3: 0
Ziua 4: 8
Ziua 5: 30
Ziua 6: 5
Ziua 7: 12
Total cheltuit: 90 lei
```

Variabila `cheltuiala` este declarată **în interiorul buclei**: la fiecare zi se creează din nou și primește altă valoare de la `cin`. Valoarea nu se păstrează, dar a fost adăugată deja în `total`, care este în afara buclei și își păstrează valoarea.

**Încearcă tu (10 min)**  
- [ ] Rulezi programul cu 7 numere ale tale  
- [ ] Schimbi programul să citească cheltuielile pe 10 zile  
- [ ] Verifici cu calculatorul că totalul este corect  

### Exemplul 3 — Contorul: câte zile cu cheltuială mare?

```cpp
#include <iostream>
using namespace std;

int main() {
    int zileMari = 0;

    for (int zi = 1; zi <= 7; zi++) {
        int cheltuiala;
        cout << "Ziua " << zi << ": ";
        cin >> cheltuiala;

        if (cheltuiala > 20) {
            zileMari++;
        }
    }

    cout << "Zile cu cheltuiala peste 20 de lei: " << zileMari << endl;
    return 0;
}
```

**Rulare:**
```
Ziua 1: 10
Ziua 2: 25
Ziua 3: 0
Ziua 4: 8
Ziua 5: 30
Ziua 6: 5
Ziua 7: 12
Zile cu cheltuiala peste 20 de lei: 2
```

Variabila `zileMari` este un **contor**: pornește de la `0` și crește cu 1 doar când condiția din `if` este adevărată. Aici sunt două zile peste 20 de lei: ziua 2 (25) și ziua 5 (30).

**Încearcă tu (10 min)**  
- [ ] Schimbi limita din `20` în `10` și vezi cum se schimbă rezultatul  
- [ ] Numeri și zilele în care nu ai cheltuit nimic (`cheltuiala == 0`)  
- [ ] Afișezi ambele numere: zile mari și zile fără cheltuială  

### Exemplul 4 — Media: cu zecimale, nu cu `int`

```cpp
#include <iostream>
using namespace std;

int main() {
    int total = 0;

    for (int zi = 1; zi <= 7; zi++) {
        int cheltuiala;
        cout << "Ziua " << zi << ": ";
        cin >> cheltuiala;
        total += cheltuiala;
    }

    double medie = total / 7.0;
    cout << "Total: " << total << " lei" << endl;
    cout << "Medie pe zi: " << medie << " lei" << endl;
    cout << "Gresit (cu int): " << total / 7 << " lei" << endl;
    return 0;
}
```

**Rulare** (aceleași 7 numere: `10 25 0 8 30 5 12`):
```
Ziua 1: 10
Ziua 2: 25
Ziua 3: 0
Ziua 4: 8
Ziua 5: 30
Ziua 6: 5
Ziua 7: 12
Total: 90 lei
Medie pe zi: 12.8571 lei
Gresit (cu int): 12 lei
```

Media este suma împărțită la numărul de valori. Ca să nu pierzi zecimalele, unul dintre numere trebuie să fie cu zecimale: `total / 7.0`. Cu `total / 7`, ambele sunt `int`, iar rezultatul este doar `12`, fără partea de după virgulă (ai văzut asta în Modulul 1, lecția 4).

**Încearcă tu (10 min)**  
- [ ] Rulezi programul și compari media corectă cu cea greșită  
- [ ] Calculezi media pe 5 zile, în loc de 7  
- [ ] Schimbi numărul `7` din buclă și din împărțire cu o variabilă `zile`, citită cu `cin`  

### Exemplul 5 — Produsul: banii care se dublează

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Cate zile? ";
    cin >> n;

    int bani = 1;
    for (int zi = 1; zi <= n; zi++) {
        cout << "Ziua " << zi << ": " << bani << " lei" << endl;
        bani *= 2;
    }
    return 0;
}
```

**Rulare:**
```
Cate zile? 6
Ziua 1: 1 lei
Ziua 2: 2 lei
Ziua 3: 4 lei
Ziua 4: 8 lei
Ziua 5: 16 lei
Ziua 6: 32 lei
```

Aici nu mai adunăm, ci **înmulțim**: `bani *= 2;` înseamnă `bani = bani * 2;`. Pentru un produs, valoarea de pornire este `1`, nu `0`, pentru că orice număr înmulțit cu `0` rămâne `0`. Observă cât de repede crește un număr care se dublează în fiecare zi.

> **Atenție:** un `int` ține până la aproximativ 2 miliarde. Dacă dublezi prea multe zile (aproximativ 31), numărul depășește limita și rezultatul devine greșit. Pentru exerciții, rămâi la cel mult 30 de zile.

**Încearcă tu (10 min)**  
- [ ] Rulezi programul pentru 10 zile  
- [ ] Schimbi dublarea în triplare (`bani *= 3`)  
- [ ] Pornești de la 5 lei, în loc de 1  

### Exemplul 6 — Pușculița mea (proiectul orei)

```cpp
#include <iostream>
using namespace std;

int main() {
    int buzunar;
    cout << "Banii de buzunar pe saptamana: ";
    cin >> buzunar;

    int total = 0;
    int zileMari = 0;

    for (int zi = 1; zi <= 7; zi++) {
        int cheltuiala;
        cout << "Ziua " << zi << ": ";
        cin >> cheltuiala;
        total += cheltuiala;
        if (cheltuiala > 20) {
            zileMari++;
        }
    }

    cout << "=== PUSCULITA MEA ===" << endl;
    cout << "Total cheltuit: " << total << " lei" << endl;
    cout << "Zile cu cheltuiala peste 20 de lei: " << zileMari << endl;
    cout << "Medie pe zi: " << total / 7.0 << " lei" << endl;
    cout << "Au ramas: " << buzunar - total << " lei" << endl;
    return 0;
}
```

**Rulare:**
```
Banii de buzunar pe saptamana: 100
Ziua 1: 10
Ziua 2: 25
Ziua 3: 0
Ziua 4: 8
Ziua 5: 30
Ziua 6: 5
Ziua 7: 12
=== PUSCULITA MEA ===
Total cheltuit: 90 lei
Zile cu cheltuiala peste 20 de lei: 2
Medie pe zi: 12.8571 lei
Au ramas: 10 lei
```

Programul folosește aceeași buclă pentru **doi** calcule: acumulatorul `total` și contorul `zileMari`. Banii rămași sunt banii de buzunar minus totalul cheltuit.

**Încearcă tu (15 min)**  
- [ ] Rulezi programul cu banii de buzunar și cheltuielile tale  
- [ ] Schimbi limita „cheltuială mare” din `20` în `15`  
- [ ] Adaugi un mesaj care spune dacă ai rămas fără bani (când `buzunar - total` este negativ)  

---

## De făcut azi — „Pușculița mea”

| | Ce trebuie să ai |
|---|---|
| **Minim** | Un program care citește cheltuielile pe 7 zile și afișează totalul cheltuit |
| **Complet** | Minim + banii de buzunar citiți la început, câte zile au cheltuială mare, media pe zi (cu zecimale) și cât a rămas |

**Gata când:**
- [ ] Programul compilează fără erori  
- [ ] Citește cheltuielile pe 7 zile cu un `for`, după mesaje clare  
- [ ] Afișează totalul cheltuit  
- [ ] (Complet) Afișează numărul de zile cu cheltuială peste limita aleasă de tine  
- [ ] (Complet) Afișează media pe zi, cu zecimale  
- [ ] (Complet) Afișează cât a rămas din banii de buzunar  
- [ ] Ai testat cu două seturi de cheltuieli diferite  
- [ ] Fișierul se numește `Prenume_Nume_M2L2.cpp`

---

## Bonus ★★★ — Provocare: Povestea dublării
*Doar dacă ai terminat Complet.*

Într-o poveste, primești 1 leu în prima zi, 2 lei în a doua, 4 lei în a treia și așa mai departe: suma se dublează în fiecare zi. Citește numărul de zile și afișează, pentru fiecare zi, cât primești și cât ai strâns în total.

- [ ] Programul citește numărul de zile `n` (cel mult 30)  
- [ ] Pentru fiecare zi afișează suma primită și totalul strâns până atunci  
- [ ] Pentru `6` zile, totalul din ultima zi este `63`  
- [ ] Observi o regulă: totalul de după `n` zile este cu 1 mai mic decât suma primită în ziua `n + 1`  

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| Suma este un număr foarte mare sau ciudat | Acumulatorul nu a fost pus pe `0` | `int suma = 0;` înainte de buclă |
| Produsul este mereu `0` | Ai pornit produsul de la `0` | `int produs = 1;` |
| Suma nu se mai adună | Ai declarat acumulatorul în interiorul buclei | Declară-l înainte de `for` |
| Media afișează `12`, nu `12.8571` | Ai împărțit două numere `int` | `total / 7.0` sau `double` |
| Contorul numără prea mult | `contor++` este în afara lui `if` | Pune-l în interiorul acoladelor lui `if` |
| Rezultat greșit la dublare după multe zile | `int` depășește limita | Folosește cel mult 30 de zile |
| Se afișează doar ultima valoare | Valoarea e citită în buclă, dar nu e adunată | Adaugă `total += valoare;` |

---

## Recapitulare pe scurt
- Un **acumulator** adună valori: pornește de la `0` și primește `suma += x;` în buclă.  
- Un **contor** numără: pornește de la `0` și crește cu `contor++;` doar când condiția din `if` este adevărată.  
- Un **produs** înmulțește: pornește de la `1` și primește `produs *= x;`.  
- Media este suma împărțită la numărul de valori; pentru zecimale folosești `7.0` sau `double`.  
- Acumulatorul și contorul se declară **înainte** de buclă.  

---

## Quiz scurt
- De ce pornește un acumulator de la `0`, iar un produs de la `1`?  
- Unde declari acumulatorul: înainte sau în interiorul buclei? De ce?  
- Ce diferență este între un acumulator și un contor?  
- De ce `90 / 7` dă `12`, iar `90 / 7.0` dă `12.8571`?  
- Ce greșeală apare dacă pui `contor++;` în afara lui `if`?  

---

## Temă
1. Refă **Exemplele 1–6** pe calculatorul tău și testează fiecare cu cel puțin două seturi de date.  
2. Scrie un program care citește 5 numere și afișează suma și media lor.  
3. Scrie un program care citește 10 numere și numără câte sunt pozitive și câte sunt negative.  
4. Scrie un program care citește `n` și calculează `2` la puterea `n`, prin înmulțiri repetate.  
5. Salvează tot ca `Tema_M2L2_Prenume_Nume.cpp`.

### Exemple pentru acasă
Aceste exemple folosesc exact ce ai învățat azi. Scrie-le de mână, rulează-le și schimbă-le după preferințe.

**Acasă 1 — Factorialul**
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "n = ";
    cin >> n;

    int factorial = 1;
    for (int i = 1; i <= n; i++) {
        factorial *= i;
    }
    cout << n << "! = " << factorial << endl;
    return 0;
}
```
Pentru `5`, rezultatul este `120`, adică `1 * 2 * 3 * 4 * 5`. Rămâi la cel mult `n = 12`, ca să nu depășești limita lui `int`.

**Acasă 2 — Puterea unui număr**
```cpp
#include <iostream>
using namespace std;

int main() {
    int baza, exponent;
    cout << "Baza: ";
    cin >> baza;
    cout << "Exponent: ";
    cin >> exponent;

    int rezultat = 1;
    for (int i = 1; i <= exponent; i++) {
        rezultat *= baza;
    }
    cout << baza << " la puterea " << exponent << " = " << rezultat << endl;
    return 0;
}
```
Pentru baza `3` și exponentul `4`, rezultatul este `81`.

**Acasă 3 — Numere pare și impare**
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Cate numere? ";
    cin >> n;

    int pare = 0;
    int impare = 0;
    for (int i = 1; i <= n; i++) {
        int x;
        cout << "Numarul " << i << ": ";
        cin >> x;
        if (x % 2 == 0) {
            pare++;
        } else {
            impare++;
        }
    }
    cout << "Pare: " << pare << ", impare: " << impare << endl;
    return 0;
}
```
Cu numerele `3 8 10 7 2`, rezultatul este `Pare: 3, impare: 2`. Aici folosești **doi** contori în aceeași buclă.

---

## Ce urmează — Lecția 3
Învățăm bucla `while`, ca să repetăm ceva atunci când nu știm de câte ori. Facem **Codul de la ușă**: programul cere codul până îl ghicești.
