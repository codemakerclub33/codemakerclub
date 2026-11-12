# LECȚIA 3 — Codul de la ușă
### Bucla `while`
**Modulul 2 · Bucle și vectori · 2 ore**  
**Code Maker Club · Loop Master**

> Azi înveți să repeți ceva **atâta timp cât** o condiție este adevărată, chiar dacă nu știi dinainte de câte ori. La final construiești o ușă care se deschide doar cu codul corect.  
> Fișier: `Prenume_Nume_M2L3.cpp`

---

## Ce facem azi
La final folosești bucla `while` ca să repeți instrucțiuni cât timp o condiție este adevărată, știi când alegi `while` și când `for`, citești numere până apare o valoare care oprește citirea, verifici datele introduse de utilizator și lucrezi cu cifrele unui număr.

La `for` știi, de obicei, de câte ori repeți: de 5 ori, de 30 de ori, de `n` ori. Dar uneori nu știi: câte încercări îi trebuie cuiva să ghicească un cod? Cât timp tastează cineva numere? Pentru astea folosești `while`: **repetă cât timp condiția este adevărată**.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare L2: acumulator, contor, medie |
| 15–35 | `while`: sintaxa și numărătoarea inversă (**Exemplul 1**) |
| 35–60 | Citim până la 0 și verificăm datele introduse (**Exemplele 2–3**) |
| 60–80 | Cifrele unui număr (**Exemplul 4**) |
| 80–115 | Ghicim codul: **Exemplele 5–6**, proiectul și Provocarea |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `while (condiție) { ... }` | Repetă instrucțiunile cât timp condiția este adevărată | `while (n >= 1)` |
| `n /= 10;` | Împarte `n` la 10 și păstrează câtul | `4271` devine `427` |
| `a && b` | Adevărat dacă amândouă sunt adevărate | `cod != secret && incercari < 5` |
| `a \|\| b` | Adevărat dacă măcar una este adevărată | `n < 1 \|\| n > 10` |

---

## Pas cu pas

### Exemplul 1 — `while`: numărătoare inversă

```cpp
#include <iostream>
using namespace std;

int main() {
    int n = 5;

    while (n >= 1) {
        cout << n << "..." << endl;
        n--;
    }
    cout << "Gata!" << endl;
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
Gata!
```

Un `while` are doar **condiția** între paranteze. Startul și pasul nu mai sunt în paranteză: le scrii tu, **înainte** de buclă (`int n = 5;`) și **în interior** (`n--;`).

| `for` | `while` |
|-------|---------|
| `for (int i = 5; i >= 1; i--)` | `int n = 5;` înainte, `while (n >= 1)`, iar `n--;` în buclă |

> **Atenție:** dacă uiți `n--;`, condiția rămâne adevărată pentru totdeauna și bucla nu se mai oprește. Oprești programul cu **Ctrl + C**.

**Încearcă tu (10 min)**  
- [ ] Rulezi programul și compari cu numărătoarea de la `for`, din lecția 1  
- [ ] Începi de la `10` și numeri din 2 în 2 în jos (`n -= 2`)  
- [ ] Uiți intenționat `n--;` și oprești programul cu Ctrl + C  

### Exemplul 2 — Citim numere până la 0

```cpp
#include <iostream>
using namespace std;

int main() {
    int suma = 0;
    int x;

    cout << "Introdu numere (0 = stop): ";
    cin >> x;

    while (x != 0) {
        suma += x;
        cin >> x;
    }

    cout << "Suma este " << suma << endl;
    return 0;
}
```

**Rulare:**
```
Introdu numere (0 = stop): 5 3 10 0
Suma este 18
```

Aici nu știi câte numere va introduce utilizatorul. De aceea bucla se oprește când apare **valoarea `0`**, numită **valoare-santinelă** (un semnal de oprire). Observă schema: citești un număr **înainte** de buclă, iar în buclă adaugi numărul și citești următorul.

**Încearcă tu (10 min)**  
- [ ] Rulezi programul cu 5 numere și apoi `0`  
- [ ] Introduci direct `0`: ce se afișează și de ce?  
- [ ] Numeri și câte numere au fost introduse, cu un contor  

### Exemplul 3 — Verificăm datele introduse

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Alege un numar intre 1 si 10: ";
    cin >> n;

    while (n < 1 || n > 10) {
        cout << "Numar invalid. Alege intre 1 si 10: ";
        cin >> n;
    }

    cout << "Ai ales " << n << "." << endl;
    return 0;
}
```

**Rulare:**
```
Alege un numar intre 1 si 10: 15
Numar invalid. Alege intre 1 si 10: -2
Numar invalid. Alege intre 1 si 10: 7
Ai ales 7.
```

Bucla cere numărul din nou **cât timp** el este în afara intervalului. Se numește **validarea datelor**: programul nu merge mai departe până nu primește o valoare bună. Condiția `n < 1 || n > 10` înseamnă „mai mic decât 1 **sau** mai mare decât 10”.

**Încearcă tu (10 min)**  
- [ ] Rulezi programul cu valori greșite, apoi cu una corectă  
- [ ] Schimbi intervalul în `1`–`100`  
- [ ] Ceri o vârstă între 5 și 120  

### Exemplul 4 — Cifrele unui număr

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Introdu un numar: ";
    cin >> n;

    int cifre = 0;
    int sumaCifre = 0;

    while (n > 0) {
        sumaCifre += n % 10;
        n /= 10;
        cifre++;
    }

    cout << "Cifre: " << cifre << endl;
    cout << "Suma cifrelor: " << sumaCifre << endl;
    return 0;
}
```

**Rulare:**
```
Introdu un numar: 4271
Cifre: 4
Suma cifrelor: 14
```

Aici folosești ce ai învățat în Modulul 1: `n % 10` este ultima cifră, iar `n / 10` taie ultima cifră. Bucla se repetă **până nu mai rămâne nicio cifră**:

| Rotirea | `n` la început | Ultima cifră (`n % 10`) | `n` după `n /= 10` |
|---------|----------------|-------------------------|---------------------|
| 1 | 4271 | 1 | 427 |
| 2 | 427 | 7 | 42 |
| 3 | 42 | 2 | 4 |
| 4 | 4 | 4 | 0 |

Suma cifrelor este `1 + 7 + 2 + 4 = 14`, iar contorul numără 4 rotiri. Nu știai dinainte câte cifre are numărul, deci `while` este alegerea potrivită.

> **Atenție:** pentru `0`, bucla nu rulează deloc și programul afișează `0` cifre. Aici ne mulțumim cu numere pozitive.

**Încearcă tu (10 min)**  
- [ ] Rulezi cu `4271`, apoi cu `9`, cu `100` și cu `98765`  
- [ ] Afișezi ultima cifră a fiecărui număr, pe rând nou, în buclă  
- [ ] Numeri câte cifre de `7` are un număr (`n % 10 == 7`)  

### Exemplul 5 — Ghicim codul

```cpp
#include <iostream>
using namespace std;

int main() {
    int secret = 4271;
    int cod;
    int incercari = 0;

    cout << "Cod: ";
    cin >> cod;
    incercari++;

    while (cod != secret) {
        cout << "Cod gresit. Cod: ";
        cin >> cod;
        incercari++;
    }

    cout << "Usa s-a deschis din " << incercari << " incercari." << endl;
    return 0;
}
```

**Rulare:**
```
Cod: 1000
Cod gresit. Cod: 4000
Cod gresit. Cod: 4271
Usa s-a deschis din 3 incercari.
```

Programul ține un **cod secret** și cere codul **cât timp** este diferit de el. Câte încercări sunt? Nu știi: depinde de utilizator, deci este o problemă pentru `while`. Contorul `incercari` crește la fiecare citire. Într-un joc adevărat, codul nu ar fi scris într-un loc la vedere; aici îl folosim ca să înțelegem bucla.

**Încearcă tu (10 min)**  
- [ ] Schimbi codul secret și rulezi din nou  
- [ ] Afișezi la fiecare greșeală câte încercări ai făcut până acum  
- [ ] Faci codul secret de doar 2 cifre, pentru un joc mai rapid  

### Exemplul 6 — Codul de la ușă (proiectul orei)

```cpp
#include <iostream>
using namespace std;

int main() {
    int secret = 4271;
    int cod = 0;
    int incercari = 0;

    cout << "=== CODUL DE LA USA ===" << endl;
    cout << "Ai 5 incercari." << endl;

    while (cod != secret && incercari < 5) {
        cout << "Cod: ";
        cin >> cod;
        incercari++;

        if (cod < secret) {
            cout << "Prea mic." << endl;
        } else if (cod > secret) {
            cout << "Prea mare." << endl;
        }
    }

    if (cod == secret) {
        cout << "Usa s-a deschis din " << incercari << " incercari!" << endl;
    } else {
        cout << "Usa ramane inchisa. Codul era " << secret << "." << endl;
    }
    return 0;
}
```

**Rulare (ghicit din 3 încercări):**
```
=== CODUL DE LA USA ===
Ai 5 incercari.
Cod: 1000
Prea mic.
Cod: 5000
Prea mare.
Cod: 4271
Usa s-a deschis din 3 incercari!
```

**Rulare (5 încercări fără succes):**
```
=== CODUL DE LA USA ===
Ai 5 incercari.
Cod: 1
Prea mic.
Cod: 2
Prea mic.
Cod: 3
Prea mic.
Cod: 4
Prea mic.
Cod: 5
Prea mic.
Usa ramane inchisa. Codul era 4271.
```

Condiția `cod != secret && incercari < 5` are **două** părți: bucla continuă cât timp codul nu a fost ghicit **și** mai ai încercări. Se oprește când se întâmplă oricare dintre cele două lucruri. După buclă, un `if` verifică **de ce** s-a terminat și afișează mesajul potrivit. Observă și indiciile „Prea mic.” și „Prea mare.”: ele te ajută să ghicești mai repede.

**Încearcă tu (15 min)**  
- [ ] Rulezi programul: o dată câștigi, o dată pierzi  
- [ ] Schimbi numărul de încercări din 5 în 3  
- [ ] Afișezi la fiecare tur câte încercări au mai rămas  

---

## De făcut azi — „Codul de la ușă”

| | Ce trebuie să ai |
|---|---|
| **Minim** | Un program cu un cod secret, care cere codul cu `while` până este ghicit și apoi afișează „Ușa s-a deschis” |
| **Complet** | Minim + numărul de încercări, indiciile „Prea mic” și „Prea mare” și o limită de 5 încercări, cu un mesaj diferit pentru câștig și pentru pierdere |

**Gata când:**
- [ ] Programul compilează fără erori  
- [ ] Cere codul cu un `while`, după un mesaj clar  
- [ ] Se oprește când codul este corect  
- [ ] (Complet) Numără încercările și le afișează la final  
- [ ] (Complet) Afișează „Prea mic” sau „Prea mare” după fiecare cod greșit  
- [ ] (Complet) Se oprește după 5 încercări și spune care era codul  
- [ ] Ai testat o dată cu câștig și o dată cu pierdere  
- [ ] Fișierul se numește `Prenume_Nume_M2L3.cpp`

---

## Bonus ★★★ — Provocare: Codul-oglindă
*Doar dacă ai terminat Complet.*

Un număr este **palindrom** dacă se citește la fel de la stânga la dreapta și de la dreapta la stânga, de exemplu `1221`. Scrie un program care citește un număr, construiește inversul lui cu `while` și spune dacă este palindrom.

- [ ] Programul păstrează numărul original într-o variabilă separată  
- [ ] În buclă construiești inversul cu formula `invers = invers * 10 + n % 10;`  
- [ ] Afișezi inversul și spui dacă este palindrom  
- [ ] Testezi cu `1221`, `1234` și `7`  

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| Programul nu se mai oprește | Condiția nu devine niciodată falsă (ai uitat pasul) | Verifică dacă variabila din condiție se schimbă în buclă; oprește cu Ctrl + C |
| Bucla nu rulează deloc | Condiția este falsă de la început | Verifică valoarea de pornire a variabilei |
| Programul cere un număr în plus | Ai citit de două ori la rând | Citește o dată înainte de buclă și o dată la sfârșitul ei |
| Maximul iese greșit la numere negative | `maxim` a pornit de la `0` | Pornește-l de la primul număr citit |
| `while (x = 0)` nu merge | Un singur `=` este atribuire | Compară cu `==` sau `!=` |
| Rezultat greșit la cifre | Ai modificat `n` și îl folosești după buclă | Păstrează o copie, `int original = n;` |
| Mesajul final nu spune dacă ai câștigat | Lipsește `if` după buclă | Verifică după buclă de ce s-a oprit |

---

## Recapitulare pe scurt
- `while (condiție)` repetă cât timp condiția este adevărată.  
- Pregătești variabila **înainte** de buclă și o schimbi **în interior**, altfel bucla nu se oprește.  
- Folosești `for` când știi de câte ori repeți și `while` când nu știi.  
- O **valoare-santinelă** (de exemplu `0`) oprește citirea numerelor.  
- Validarea datelor: ceri din nou valoarea cât timp este greșită.  
- Cifrele unui număr: `n % 10` este ultima cifră, iar `n /= 10` o taie.  
- `&&` înseamnă „și”, iar `||` înseamnă „sau”.  

---

## Quiz scurt
- Când alegi `while` și când `for`?  
- Ce se întâmplă dacă uiți să schimbi variabila din condiția lui `while`?  
- Ce este o valoare-santinelă?  
- Cum afli ultima cifră a unui număr și cum o scoți din număr?  
- Ce înseamnă `cod != secret && incercari < 5`?  

---

## Temă
1. Refă **Exemplele 1–6** pe calculatorul tău și testează fiecare cu cel puțin două seturi de date.  
2. Scrie un program care citește numere până la `0` și afișează cel mai mare.  
3. Scrie un program care cere o parolă numerică până este corectă, dar cel mult de 3 ori.  
4. Scrie un program care citește un număr și afișează cifrele lui, pe rând nou, de la ultima la prima.  
5. Salvează tot ca `Tema_M2L3_Prenume_Nume.cpp`.

### Exemple pentru acasă
Aceste exemple folosesc exact ce ai învățat azi. Scrie-le de mână, rulează-le și schimbă-le după preferințe.

**Acasă 1 — Cel mai mare număr citit**
```cpp
#include <iostream>
using namespace std;

int main() {
    int x;
    cout << "Numere (0 = stop): ";
    cin >> x;

    int maxim = x;
    while (x != 0) {
        if (x > maxim) {
            maxim = x;
        }
        cin >> x;
    }

    cout << "Cel mai mare: " << maxim << endl;
    return 0;
}
```
Cu numerele `4 9 2 7 0`, rezultatul este `9`. Variabila `maxim` pornește de la primul număr și se schimbă doar când apare unul mai mare.

**Acasă 2 — Până depășești 100**
```cpp
#include <iostream>
using namespace std;

int main() {
    int suma = 0;

    while (suma <= 100) {
        int x;
        cout << "Numar: ";
        cin >> x;
        suma += x;
        cout << "Suma: " << suma << endl;
    }

    cout << "Ai depasit 100!" << endl;
    return 0;
}
```
Cu numerele `40 35 30`, suma ajunge la `40`, `75` și apoi `105`, iar programul se oprește.

**Acasă 3 — Cât de repede ajungi la 1 înjumătățind**
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "n = ";
    cin >> n;

    int pasi = 0;
    while (n > 1) {
        n /= 2;
        pasi++;
    }

    cout << "Pasi pana la 1: " << pasi << endl;
    return 0;
}
```
Pentru `40`, numerele sunt `40`, `20`, `10`, `5`, `2`, `1`, deci sunt `5` pași.

---

## Ce urmează — Lecția 4
Învățăm `do-while`, bucla care se execută cel puțin o dată, și o folosim la **Automatul de dulciuri**, cu meniu care se repetă până alegi ieșirea.
