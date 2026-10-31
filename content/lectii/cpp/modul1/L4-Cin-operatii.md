# LECȚIA 4 — Calculatorul meu
### cin și operații aritmetice
**Modulul 1 · Bazele C++ · 2 ore**  
**Code Maker Club · Junior Coder**

> Azi programul tău **ascultă**: citește numere de la tastatură, calculează cu ele (inclusiv împărțire și rest) și afișează rezultatul.  
> Fișier: `Prenume_Nume_L4.cpp`

---

## Ce facem azi
La final citești valori cu `cin`, folosești toți cei cinci operatori aritmetici (`+ - * / %`), știi ce se întâmplă când împarți două numere întregi și rezolvi probleme mici: cifrele unui număr și conversii de timp.

Până acum, valorile erau scrise în cod, iar la fiecare schimbare trebuia să recompilezi programul. De azi, programul primește datele **de la utilizator** și poate rezolva aceeași problemă pentru orice numere. Așa funcționează și problemele de pe platformele de olimpiadă: programul citește datele și calculează răspunsul.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare L3: variabile `int` și calcule |
| 15–40 | `cin` pentru una sau mai multe valori (**Exemplele 1–3**) |
| 40–65 | Împărțirea între numere întregi și restul, `/` și `%` (**Exemplele 4–5**) |
| 65–90 | Probleme: cifrele unui număr, ore și minute (**Exemplele 6–7**) |
| 90–118 | Proiectul: Calculatorul meu + Provocarea |
| 118–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `cin >> x;` | Citește un număr de la tastatură în variabila `x` | `cin >> varsta;` |
| `cin >> a >> b;` | Citește două numere, unul după altul | `cin >> a >> b;` |
| `/` | Câtul împărțirii a două numere întregi | `47 / 6` este `7` |
| `%` | Restul împărțirii | `47 % 6` este `5` |

---

## Pas cu pas

### `cin`: citim de la tastatură

În L1 am spus că datele circulă ca un flux. Pentru afișare folosim `cout <<` (spre ecran). Pentru citire folosim **`cin >>`** (de la tastatură spre variabilă).

```
cin >> nume_variabila;
```

Săgețile arată direcția datelor: la `cout` merg **spre** ecran (`<<`), la `cin` vin **dinspre** tastatură (`>>`).

### Exemplul 1 — Citesc un număr

```cpp
#include <iostream>
using namespace std;

int main() {
    int varsta;

    cout << "Introdu varsta: ";
    cin >> varsta;

    cout << "Ai " << varsta << " ani." << endl;
    cout << "Anul viitor vei avea " << varsta + 1 << " ani." << endl;
    return 0;
}
```

**Rulare** (ce tastezi tu este după `:`, urmat de Enter):
```
Introdu varsta: 12
Ai 12 ani.
Anul viitor vei avea 13 ani.
```

Ce se întâmplă pas cu pas:
1. `cout << "Introdu varsta: ";` afișează mesajul (se numește *prompt*) și lasă cursorul pe același rând.
2. `cin >> varsta;` face programul să **aștepte**. Tu tastezi numărul și apeși Enter.
3. Valoarea ajunge în variabila `varsta` și poți calcula cu ea.

**Regulă bună:** înainte de fiecare `cin`, afișează un mesaj care spune ce trebuie introdus. Altfel, utilizatorul vede un ecran gol și nu știe ce se așteaptă de la el.

### Exemplul 2 — Mai multe numere cu un singur `cin`

```cpp
#include <iostream>
using namespace std;

int main() {
    int a, b, c;

    cout << "Introdu 3 numere, separate prin spatiu: ";
    cin >> a >> b >> c;

    cout << "Suma = " << a + b + c << endl;
    cout << "Produsul = " << a * b * c << endl;
    return 0;
}
```

**Rulare:**
```
Introdu 3 numere, separate prin spatiu: 4 9 6
Suma = 19
Produsul = 216
```

`cin >> a >> b >> c;` citește trei valori una după alta. Utilizatorul le poate scrie despărțite prin **spațiu** sau prin **Enter**, rezultatul este același.

> **Atenție:** dacă tastezi o literă în loc de număr (de exemplu `abc`), `cin` nu reușește să citească și programul se comportă ciudat. Deocamdată presupunem că utilizatorul introduce doar numere corecte.

### Exemplul 3 — Cele trei operații cunoscute, cu date citite

```cpp
#include <iostream>
using namespace std;

int main() {
    int x, y;

    cout << "x = ";
    cin >> x;
    cout << "y = ";
    cin >> y;

    cout << x << " + " << y << " = " << x + y << endl;
    cout << x << " - " << y << " = " << x - y << endl;
    cout << x << " * " << y << " = " << x * y << endl;
    return 0;
}
```

**Rulare:**
```
x = 12
y = 5
12 + 5 = 17
12 - 5 = 7
12 * 5 = 60
```

Programul rămâne același, iar tu îl poți testa cu orice numere: `-4` și `10`, `0` și `0` sau `100` și `3`.

**Încearcă tu (10 min)**  
- [ ] Scrii un program care citește anul nașterii și afișează vârsta ta în 2026  
- [ ] Citești 2 numere și afișezi suma, diferența și produsul  
- [ ] Rulezi programul cu 3 perechi diferite de numere, inclusiv unul negativ  

### Împărțirea și restul

La numere întregi (`int`), împărțirea cu **`/`** dă **câtul**: partea întreagă a rezultatului, **fără zecimale**. Operatorul **`%`** (se citește „modulo”) dă **restul** împărțirii.

| Expresie | Rezultat | Explicație |
|----------|----------|------------|
| `17 / 5` | `3` | 5 încape de 3 ori în 17 |
| `17 % 5` | `2` | 17 = 5 · 3 + **2** |
| `20 / 4` | `5` | |
| `20 % 4` | `0` | se împarte exact |
| `3 / 4` | `0` | 4 nu încape niciodată în 3 |
| `3 % 4` | `3` | |

Legătura dintre ele: **deîmpărțit = împărțitor · cât + rest**.

### Exemplul 4 — Cât și rest

```cpp
#include <iostream>
using namespace std;

int main() {
    int a, b;

    cout << "Deimpartit: ";
    cin >> a;
    cout << "Impartitor: ";
    cin >> b;

    cout << "Catul este " << a / b << endl;
    cout << "Restul este " << a % b << endl;
    cout << a << " = " << b << " * " << a / b << " + " << a % b << endl;
    return 0;
}
```

**Rulare:**
```
Deimpartit: 17
Impartitor: 5
Catul este 3
Restul este 2
17 = 5 * 3 + 2
```

> **Împărțirea la zero este interzisă.** Dacă introduci `0` ca împărțitor, programul se oprește cu o eroare. Mai târziu vom învăța cum să verificăm asta înainte de împărțire.

### Exemplul 5 — Capcana: nu apar zecimale

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "7 / 2 = " << 7 / 2 << endl;
    cout << "1 / 2 = " << 1 / 2 << endl;
    cout << "9 / 10 = " << 9 / 10 << endl;
    cout << "100 / 3 = " << 100 / 3 << endl;
    return 0;
}
```

**Ieșire:**
```
7 / 2 = 3
1 / 2 = 0
9 / 10 = 0
100 / 3 = 33
```

La matematică, `7 / 2` este `3,5`. În C++, între două numere `int`, rezultatul este doar `3`. Partea zecimală se **pierde**. Despre numerele cu zecimale învățăm în lecția 5.

**Încearcă tu (10 min)**  
- [ ] Citești două numere și afișezi cât și rest, în forma `a = b * cat + rest`  
- [ ] Verifici pe foaie că `29 / 6` și `29 % 6` sunt corecte  
- [ ] Prevezi ce afișează `5 + 6 * 2 - 8 / 4`, apoi verifici în program  

### Probleme cu `/` și `%`

Cu `/` și `%` se rezolvă multe probleme clasice. Încearcă să ghicești soluția înainte de a citi codul.

### Exemplul 6 — Ultima cifră și numărul fără ultima cifră

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Introdu un numar: ";
    cin >> n;

    cout << "Ultima cifra: " << n % 10 << endl;
    cout << "Fara ultima cifra: " << n / 10 << endl;
    return 0;
}
```

**Rulare:**
```
Introdu un numar: 4567
Ultima cifra: 7
Fara ultima cifra: 456
```

`n % 10` dă mereu **ultima cifră**, iar `n / 10` „taie” ultima cifră. Această pereche este baza multor probleme de olimpiadă.

### Exemplul 7 — Minute în ore și minute

```cpp
#include <iostream>
using namespace std;

int main() {
    int minute;
    cout << "Cate minute dureaza filmul? ";
    cin >> minute;

    int ore = minute / 60;
    int rest = minute % 60;

    cout << minute << " minute = " << ore << " ore si " << rest << " minute" << endl;
    return 0;
}
```

**Rulare:**
```
Cate minute dureaza filmul? 135
135 minute = 2 ore si 15 minute
```

**Încearcă tu (15 min)**  
- [ ] Afișezi suma cifrelor unui număr de 3 cifre, citit de la tastatură  
- [ ] Transformi un număr de zile în săptămâni și zile rămase  
- [ ] Verifici dacă un număr e par, afișând `n % 2` (`0` înseamnă par, `1` înseamnă impar)  

---

## De făcut azi — „Calculatorul meu”

| | Ce trebuie să ai |
|---|---|
| **Minim** | Un program care citește două numere întregi și afișează suma și produsul |
| **Complet** | Minim + diferența, câtul și restul, un mesaj clar înainte de fiecare `cin` și un test cu cel puțin două seturi de numere |

**Gata când:**
- [ ] Programul compilează fără erori  
- [ ] Citește minimum două numere cu `cin`  
- [ ] Afișează suma și produsul  
- [ ] (Complet) Afișează câtul și restul  
- [ ] (Complet) Fiecare `cin` are înainte un mesaj clar, de exemplu „Introdu a: ”  
- [ ] (Complet) Ai testat cu minimum 2 seturi de numere diferite  
- [ ] Fișierul se numește `Prenume_Nume_L4.cpp`

---

## Bonus ★★★ — Provocare: Oglinda numerelor
*Doar dacă ai terminat Complet.*

Citește un număr de **4 cifre** și afișează-l cu cifrele **în ordine inversă**: `1234` devine `4321`. Folosești doar `/` și `%`.

- [ ] Programul afișează cele patru cifre, fiecare pe linia ei  
- [ ] Afișează apoi numărul inversat: `4321`  
- [ ] Testezi cu trei numere, de exemplu `1234`, `9080` și `5001`  
- [ ] Explici pe foaie ce face `n % 10` și ce face `n / 10`

---

## Greșeli frecvente
| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| Programul „stă” și nu face nimic | Așteaptă un număr la `cin` | Tastează numărul și apasă Enter |
| Nu știi ce să introduci | Lipsește mesajul înainte de `cin` | Afișează un mesaj cu `cout` |
| `cin << a;` sau `cout >> a;` | Săgețile sunt inversate | `cin >> a;` și `cout << a;` |
| Valori ciudate la afișare | Ai uitat să citești variabila | Adaugă `cin >> variabila;` |
| Ai scris `cin >> "a";` | Numele variabilei nu e între ghilimele | `cin >> a;` |
| Rezultatul `7 / 2` este `3` | Împărțirea între `int` taie zecimalele | Normal pentru `int`. Pentru zecimale, vezi L5 |
| Programul se oprește cu o eroare la `a / b` | `b` este `0` | Testează cu `b` nenul |
| `a % b` nu merge pentru zecimale | `%` funcționează doar cu numere întregi | Folosește `int` |
| Rezultat greșit la `a + b / 2` | Împărțirea se face înainte de adunare | Folosește paranteze: `(a + b) / 2` |
| Programul se strică după ce tastezi o literă | `cin` așteaptă un număr | Introdu doar numere întregi |

---

## Recapitulare pe scurt
- `cin >> x;` citește o valoare de la tastatură în variabila `x`.
- Înaintea fiecărui `cin` afișezi un mesaj, ca utilizatorul să știe ce introduce.
- `cin >> a >> b >> c;` citește mai multe valori deodată.
- La `int`: `/` dă câtul (fără zecimale), iar `%` dă restul.
- `n % 10` este ultima cifră, iar `n / 10` este numărul fără ultima cifră.
- Ordinea operațiilor: paranteze, apoi `* / %`, apoi `+ -`.
- Nu se împarte niciodată la zero.

---

## Quiz scurt
- Ce face `cin >> x;`?  
- De ce afișezi un mesaj înainte de `cin`?  
- Ce dau `/` și `%` la numere `int`?  
- Cum afli ultima cifră a unui număr `n`?  
- De ce nu împărțim niciodată la zero?  

---

## Temă
1. Refă **Exemplele 1–7** pe calculatorul tău și testează fiecare cu cel puțin două seturi de date.  
2. Scrie un program care citește un număr de secunde și îl afișează în forma `minute:secunde` (de exemplu, `135` secunde devine `2 min 15 s`).  
3. Scrie un program care citește prețul unui bilet și numărul de persoane și afișează totalul și cât rămâne dintr-o bancnotă de 200 de lei.  
4. Scrie un program care citește un număr de 3 cifre și afișează suma și produsul cifrelor lui.  
5. Salvează tot ca `Tema_L4_Prenume_Nume.cpp`.

### Exemple pentru acasă
Aceste exemple folosesc exact ce ai învățat azi. Scrie-le de mână, rulează-le și schimbă-le după preferințe.

**Acasă 1 — Ordinea operațiilor**
```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "2 + 3 * 4 = " << 2 + 3 * 4 << endl;
    cout << "(2 + 3) * 4 = " << (2 + 3) * 4 << endl;
    cout << "10 - 4 - 3 = " << 10 - 4 - 3 << endl;
    cout << "20 / 4 / 2 = " << 20 / 4 / 2 << endl;
    cout << "7 + 8 % 3 = " << 7 + 8 % 3 << endl;
    cout << "(7 + 8) % 3 = " << (7 + 8) % 3 << endl;
    return 0;
}
```

**Ieșire:**
```
2 + 3 * 4 = 14
(2 + 3) * 4 = 20
10 - 4 - 3 = 3
20 / 4 / 2 = 2
7 + 8 % 3 = 9
(7 + 8) % 3 = 0
```

Reguli de reținut:
1. Mai întâi paranteze `( )`.
2. Apoi `*`, `/` și `%` (de la stânga la dreapta).
3. Apoi `+` și `-` (de la stânga la dreapta).

Când nu ești sigur, pune paranteze. Ele nu strică niciodată.

**Acasă 2 — Cifrele unui număr de 3 cifre**
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Introdu un numar de 3 cifre: ";
    cin >> n;

    int unitati = n % 10;
    int zeci = n / 10 % 10;
    int sute = n / 100;

    cout << "Sute: " << sute << endl;
    cout << "Zeci: " << zeci << endl;
    cout << "Unitati: " << unitati << endl;
    cout << "Suma cifrelor: " << sute + zeci + unitati << endl;
    return 0;
}
```

**Rulare:**
```
Introdu un numar de 3 cifre: 824
Sute: 8
Zeci: 2
Unitati: 4
Suma cifrelor: 14
```

Cum funcționează `n / 10 % 10`: mai întâi `824 / 10 = 82`, apoi `82 % 10 = 2`. Cifra zecilor este ultima cifră a numărului fără ultima cifră.

**Acasă 3 — Casierul: câte bancnote?**
```cpp
#include <iostream>
using namespace std;

int main() {
    int suma;
    cout << "Suma de platit (lei): ";
    cin >> suma;

    int b50 = suma / 50;
    suma = suma % 50;

    int b10 = suma / 10;
    suma = suma % 10;

    int b5 = suma / 5;
    suma = suma % 5;

    cout << "Bancnote de 50: " << b50 << endl;
    cout << "Bancnote de 10: " << b10 << endl;
    cout << "Bancnote de 5: " << b5 << endl;
    cout << "Monede de 1: " << suma << endl;
    return 0;
}
```

**Rulare:**
```
Suma de platit (lei): 187
Bancnote de 50: 3
Bancnote de 10: 3
Bancnote de 5: 1
Monede de 1: 2
```

Verificare: 3 · 50 + 3 · 10 + 1 · 5 + 2 = 150 + 30 + 5 + 2 = 187. După fiecare pas, `suma` păstrează restul rămas de plătit, iar în final rămân monedele de câte 1 leu.

**Acasă 4 — Calculatorul complet**
```cpp
/*
   Program: Calculator cu doua numere
   Scop:    citeste a si b si afiseaza toate operatiile
*/
#include <iostream>
using namespace std;

int main() {
    int a, b;

    cout << "===== CALCULATOR =====" << endl;
    cout << "Primul numar: ";
    cin >> a;
    cout << "Al doilea numar (nenul): ";
    cin >> b;

    cout << endl;
    cout << a << " + " << b << " = " << a + b << endl;
    cout << a << " - " << b << " = " << a - b << endl;
    cout << a << " * " << b << " = " << a * b << endl;
    cout << a << " / " << b << " = " << a / b << " (cat)" << endl;
    cout << a << " % " << b << " = " << a % b << " (rest)" << endl;
    cout << "======================" << endl;
    return 0;
}
```

**Rulare:**
```
===== CALCULATOR =====
Primul numar: 47
Al doilea numar (nenul): 6

47 + 6 = 53
47 - 6 = 41
47 * 6 = 282
47 / 6 = 7 (cat)
47 % 6 = 5 (rest)
======================
```

---

## Ce urmează — Lecția 5
Descoperim celelalte **tipuri de date**: `double` pentru numere cu zecimale, `char` pentru litere, `bool` pentru adevărat/fals și `string` pentru text. În sfârșit vom putea citi un nume și face o medie corectă.
