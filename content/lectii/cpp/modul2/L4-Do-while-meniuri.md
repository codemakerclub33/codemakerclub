# LECȚIA 4 — Automatul de dulciuri
### `do-while` și alegerea buclei
**Modulul 2 · Bucle și vectori · 2 ore**  
**Code Maker Club · Loop Master**

> Azi înveți bucla `do-while`, care se execută **cel puțin o dată**, și o folosești la un meniu care se repetă până alegi ieșirea. La final construiești un automat de dulciuri cu bani, produse și rest.  
> Fișier: `Prenume_Nume_M2L4.cpp`

---

## Ce facem azi
La final folosești `do-while` pentru programe care trebuie să ruleze măcar o dată, faci un meniu care se repetă până alegi `0`, verifici dacă ai destui bani înainte de o cumpărare și știi cum alegi între `for`, `while` și `do-while`.

Un automat de dulciuri îți arată meniul **înainte** să știe ce vrei. Apoi îl arată din nou după fiecare cumpărare, până spui că ai terminat. Exact asta face `do-while`: **mai întâi execută, apoi verifică** dacă mai repetă. Meniurile din aplicații, ATM-uri și jocuri funcționează la fel.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare L3: `while`, valoare-santinelă, validare |
| 15–35 | `do-while` și validarea datelor (**Exemplele 1–2**) |
| 35–60 | Meniul care se repetă, cu `switch` (**Exemplul 3**) |
| 60–75 | Verificăm banii înainte de cumpărare (**Exemplul 4**) |
| 75–90 | Alegem bucla potrivită (**Exemplul 5**) |
| 90–115 | Proiectul: Automatul de dulciuri + Provocarea (**Exemplul 6**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `do { ... } while (condiție);` | Execută corpul o dată, apoi repetă cât timp condiția este adevărată | `do { cin >> n; } while (n < 1);` |
| `;` după `while (...)` | La `do-while` se pune `;` la final | `while (optiune != 0);` |
| `sold -= pret;` | Scade `pret` din `sold` | `sold -= 5;` |
| `endl` la început de afișare | Lasă un rând liber | `cout << endl << "Meniu";` |

---

## Pas cu pas

### Exemplul 1 — `do-while`: mai întâi execută, apoi întreabă

```cpp
#include <iostream>
using namespace std;

int main() {
    int raspuns;

    do {
        cout << "Hop! Am facut o rotire." << endl;
        cout << "Mai vrei una? (1 = da, 0 = nu): ";
        cin >> raspuns;
    } while (raspuns == 1);

    cout << "La revedere!" << endl;
    return 0;
}
```

**Rulare:**
```
Hop! Am facut o rotire.
Mai vrei una? (1 = da, 0 = nu): 1
Hop! Am facut o rotire.
Mai vrei una? (1 = da, 0 = nu): 1
Hop! Am facut o rotire.
Mai vrei una? (1 = da, 0 = nu): 0
La revedere!
```

Corpul dintre acolade se execută **prima dată fără să verifice nimic**. Abia la final, `while (raspuns == 1);` decide dacă se repetă. Observă `;` după paranteza lui `while`: la `do-while` este obligatoriu.

| `while` | `do-while` |
|---------|------------|
| Verifică **înainte** de fiecare rotire | Verifică **după** fiecare rotire |
| Poate să nu ruleze deloc | Rulează **cel puțin o dată** |

**Încearcă tu (10 min)**  
- [ ] Rulezi programul și răspunzi o dată `1` de trei ori, apoi `0`  
- [ ] Răspunzi `0` din prima: de câte ori se afișează „Hop”?  
- [ ] Schimbi mesajul „Hop” cu unul al tău  

### Exemplul 2 — Validarea datelor cu `do-while`

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;

    do {
        cout << "Alege 1, 2 sau 3: ";
        cin >> n;
    } while (n < 1 || n > 3);

    cout << "Ai ales " << n << "." << endl;
    return 0;
}
```

**Rulare:**
```
Alege 1, 2 sau 3: 7
Alege 1, 2 sau 3: 0
Alege 1, 2 sau 3: 2
Ai ales 2.
```

În lecția 3 ai scris aceeași verificare cu `while`: trebuia să citești numărul **înainte** de buclă și apoi încă o dată în buclă. Cu `do-while` scrii citirea o singură dată, în interior, pentru că oricum trebuie să ceri numărul măcar o dată. Programul este mai scurt și mai clar.

**Încearcă tu (10 min)**  
- [ ] Rulezi programul cu valori greșite, apoi cu una corectă  
- [ ] Schimbi intervalul în `1`–`5`  
- [ ] Ceri o vârstă între 5 și 120, cu `do-while`  

### Exemplul 3 — Un meniu care se repetă

```cpp
#include <iostream>
using namespace std;

int main() {
    int optiune;

    do {
        cout << "--- MENIU ---" << endl;
        cout << "1. Ciocolata" << endl;
        cout << "2. Biscuiti" << endl;
        cout << "3. Suc" << endl;
        cout << "0. Iesire" << endl;
        cout << "Alege: ";
        cin >> optiune;

        switch (optiune) {
            case 1: cout << "Ai ales ciocolata." << endl; break;
            case 2: cout << "Ai ales biscuiti." << endl; break;
            case 3: cout << "Ai ales suc." << endl; break;
            case 0: cout << "La revedere!" << endl; break;
            default: cout << "Optiune invalida." << endl;
        }
    } while (optiune != 0);

    return 0;
}
```

**Rulare** (alegi `1`, apoi `9`, apoi `0`):
```
--- MENIU ---
1. Ciocolata
2. Biscuiti
3. Suc
0. Iesire
Alege: 1
Ai ales ciocolata.
--- MENIU ---
1. Ciocolata
2. Biscuiti
3. Suc
0. Iesire
Alege: 9
Optiune invalida.
--- MENIU ---
1. Ciocolata
2. Biscuiti
3. Suc
0. Iesire
Alege: 0
La revedere!
```

Acesta este tiparul unui meniu: `do-while` repetă meniul, `switch` alege ce se întâmplă, iar bucla se oprește când utilizatorul alege `0`. Opțiunea `0` este aici **valoarea-santinelă** care oprește programul.

**Încearcă tu (10 min)**  
- [ ] Adaugi un al patrulea produs la meniu  
- [ ] Alegi opțiuni invalide și verifici mesajul  
- [ ] Schimbi opțiunea de ieșire din `0` în `9`  

### Exemplul 4 — Verificăm banii înainte de cumpărare

```cpp
#include <iostream>
using namespace std;

int main() {
    int sold;
    cout << "Cati lei ai? ";
    cin >> sold;

    int raspuns;
    do {
        if (sold >= 4) {
            sold -= 4;
            cout << "Ai cumparat un suc. Mai ai " << sold << " lei." << endl;
        } else {
            cout << "Nu ai destui bani." << endl;
        }
        cout << "Mai incerci? (1 = da, 0 = nu): ";
        cin >> raspuns;
    } while (raspuns == 1);

    cout << "Sold final: " << sold << " lei" << endl;
    return 0;
}
```

**Rulare:**
```
Cati lei ai? 10
Ai cumparat un suc. Mai ai 6 lei.
Mai incerci? (1 = da, 0 = nu): 1
Ai cumparat un suc. Mai ai 2 lei.
Mai incerci? (1 = da, 0 = nu): 1
Nu ai destui bani.
Mai incerci? (1 = da, 0 = nu): 0
Sold final: 2 lei
```

Un `if` verifică dacă `sold >= 4`. Dacă da, scazi prețul din sold cu `sold -= 4;`. Dacă nu, afișezi mesajul și soldul rămâne neschimbat. **Nu scazi niciodată banii fără să verifici înainte**, altfel soldul ar putea deveni negativ.

**Încearcă tu (10 min)**  
- [ ] Rulezi programul cu 10 lei și cumperi până nu mai ai bani  
- [ ] Schimbi prețul sucului în `3` lei  
- [ ] Afișezi la final câte sucuri ai cumpărat, cu un contor  

### Exemplul 5 — Alegem bucla potrivită

```cpp
#include <iostream>
using namespace std;

int main() {
    // for
    for (int i = 1; i <= 3; i++) {
        cout << i << " ";
    }
    cout << endl;

    // while
    int j = 1;
    while (j <= 3) {
        cout << j << " ";
        j++;
    }
    cout << endl;

    // do-while
    int k = 1;
    do {
        cout << k << " ";
        k++;
    } while (k <= 3);
    cout << endl;

    // diferenta: conditia este falsa de la inceput
    int m = 10;
    do {
        cout << "do-while se executa o data: " << m << endl;
    } while (m < 5);

    while (m < 5) {
        cout << "while nu se executa deloc" << endl;
    }
    return 0;
}
```

**Ieșire:**
```
1 2 3 
1 2 3 
1 2 3 
do-while se executa o data: 10
```

Cele trei bucle dau același rezultat. Diferența apare când condiția este falsă de la început: `do-while` rulează o dată, `while` nu rulează deloc. Cum alegi:

| Situația | Bucla potrivită |
|----------|-----------------|
| Știi de câte ori repeți (de 10 ori, de `n` ori) | `for` |
| Nu știi de câte ori și s-ar putea să nu ruleze deloc | `while` |
| Nu știi de câte ori și trebuie să ruleze **măcar o dată** | `do-while` |
| Meniu, validare, „mai vrei o dată?” | `do-while` |

**Încearcă tu (10 min)**  
- [ ] Alegi bucla potrivită pentru: afișarea numerelor de la 1 la 50, citirea numerelor până la `0`, un meniu și o parolă cerută până e corectă  
- [ ] Scrii pe foaie de ce ai ales fiecare  
- [ ] Rescrii numărătoarea de la 1 la 10 cu fiecare dintre cele trei bucle  

### Exemplul 6 — Automatul de dulciuri (proiectul orei)

```cpp
#include <iostream>
using namespace std;

int main() {
    int sold;
    cout << "Cati lei ai? ";
    cin >> sold;

    int produse = 0;
    int cheltuit = 0;
    int optiune;

    do {
        cout << endl << "=== AUTOMATUL DE DULCIURI ===" << endl;
        cout << "Sold: " << sold << " lei" << endl;
        cout << "1. Ciocolata - 5 lei" << endl;
        cout << "2. Biscuiti  - 3 lei" << endl;
        cout << "3. Suc       - 4 lei" << endl;
        cout << "0. Iesire" << endl;
        cout << "Alege: ";
        cin >> optiune;

        int pret = 0;
        switch (optiune) {
            case 1: pret = 5; break;
            case 2: pret = 3; break;
            case 3: pret = 4; break;
            case 0: break;
            default: cout << "Optiune invalida." << endl;
        }

        if (pret > 0) {
            if (sold >= pret) {
                sold -= pret;
                cheltuit += pret;
                produse++;
                cout << "Poftim! Ai cumparat un produs de " << pret << " lei." << endl;
            } else {
                cout << "Nu ai destui bani." << endl;
            }
        }
    } while (optiune != 0);

    cout << endl << "Produse cumparate: " << produse << endl;
    cout << "Total cheltuit: " << cheltuit << " lei" << endl;
    cout << "Rest: " << sold << " lei" << endl;
    return 0;
}
```

**Rulare** (12 lei; alegi `1`, apoi `0`):
```
Cati lei ai? 12

=== AUTOMATUL DE DULCIURI ===
Sold: 12 lei
1. Ciocolata - 5 lei
2. Biscuiti  - 3 lei
3. Suc       - 4 lei
0. Iesire
Alege: 1
Poftim! Ai cumparat un produs de 5 lei.

=== AUTOMATUL DE DULCIURI ===
Sold: 7 lei
1. Ciocolata - 5 lei
2. Biscuiti  - 3 lei
3. Suc       - 4 lei
0. Iesire
Alege: 0

Produse cumparate: 1
Total cheltuit: 5 lei
Rest: 7 lei
```

Observă cum lucrează părțile împreună:
- `switch` stabilește **prețul** produsului ales; pentru `0` sau o opțiune invalidă, prețul rămâne `0`.  
- `if (pret > 0)` face cumpărarea doar dacă ai ales un produs real.  
- `if (sold >= pret)` verifică banii **înainte** să scadă prețul.  
- Doi acumulatori și un contor țin evidența: `cheltuit`, `produse` și `sold`.  
- Bucla se oprește la `0`, iar rezumatul se afișează după buclă.

Dacă ai doar 3 lei și alegi ciocolata (5 lei), automatul afișează `Nu ai destui bani.` și soldul rămâne `3`.

**Încearcă tu (15 min)**  
- [ ] Rulezi programul cu 12 lei și cumperi trei produse, apoi ieși  
- [ ] Încerci să cumperi ceva mai scump decât soldul  
- [ ] Adaugi un al patrulea produs cu prețul tău  

---

## De făcut azi — „Automatul de dulciuri”

| | Ce trebuie să ai |
|---|---|
| **Minim** | Un meniu cu 3 produse, în `do-while`, care se repetă până alegi `0`, și afișează ce ai ales |
| **Complet** | Minim + banii citiți la început, verificarea soldului înainte de cumpărare, mesajul pentru opțiune invalidă și, la final, numărul de produse, totalul cheltuit și restul |

**Gata când:**
- [ ] Programul compilează fără erori  
- [ ] Meniul se repetă cu `do-while` până alegi `0`  
- [ ] Folosește `switch` cu `default` pentru opțiuni invalide  
- [ ] (Complet) Citește soldul la început și îl scade la fiecare cumpărare  
- [ ] (Complet) Nu cumpără dacă soldul nu ajunge, ci afișează un mesaj  
- [ ] (Complet) Afișează la final numărul de produse, totalul cheltuit și restul  
- [ ] Ai testat: o cumpărare reușită, una fără destui bani și o opțiune invalidă  
- [ ] Fișierul se numește `Prenume_Nume_M2L4.cpp`

---

## Bonus ★★★ — Provocare: Restul în monede
*Doar dacă ai terminat Complet.*

La final, automatul dă restul în **bancnote de 5 lei** și **monede de 1 leu**. Cu `/` și `%`, află câte bancnote și câte monede trebuie să dea.

- [ ] Afișezi câte bancnote de 5 lei sunt în rest  
- [ ] Afișezi câte monede de 1 leu rămân  
- [ ] Pentru un rest de `13` lei, rezultatul este 2 bancnote și 3 monede  
- [ ] Testezi cu `0`, `4`, `5` și `27`  

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| Eroare de compilare la `do-while` | Lipsește `;` după `while (...)` | `} while (conditie);` |
| Meniul nu se mai oprește | Opțiunea de ieșire nu este în condiție | Verifică `while (optiune != 0);` |
| Soldul devine negativ | Ai scăzut prețul fără să verifici | `if (sold >= pret)` înainte de `sold -= pret;` |
| Programul cumpără și la opțiunea `0` | Prețul rămâne de la tura trecută | Pune `int pret = 0;` în interiorul buclei, la fiecare tură |
| Se afișează și „Optiune invalida” la `0` | Lipsește `case 0:` sau `break` | Adaugă `case 0: break;` |
| Cade programul la o literă în loc de număr | `cin` așteaptă un număr | Introdu doar numere |

---

## Recapitulare pe scurt
- `do { ... } while (condiție);` execută corpul **o dată**, apoi repetă cât timp condiția este adevărată.  
- La `do-while`, `;` după `while (...)` este obligatoriu.  
- Un meniu se face cu `do-while` și `switch`: bucla repetă meniul, iar `switch` alege acțiunea.  
- `0` poate fi **valoarea-santinelă** care oprește meniul.  
- Verifici `if (sold >= pret)` **înainte** să scazi banii.  
- `for` când știi de câte ori, `while` când nu știi, `do-while` când trebuie să ruleze măcar o dată.  

---

## Quiz scurt
- Care este diferența dintre `while` și `do-while`?  
- Ce se întâmplă dacă uiți `;` după `while (...)` la un `do-while`?  
- Ce bucle și ce instrucțiune folosești la un meniu?  
- De ce verifici soldul înainte de `sold -= pret;`?  
- Ce buclă alegi pentru „citește o parolă până este corectă”?  

---

## Temă
1. Refă **Exemplele 1–6** pe calculatorul tău și testează fiecare cu cel puțin două seturi de date.  
2. Scrie un meniu cu 3 opțiuni (de exemplu: salut, glumă, ieșire) care se repetă până alegi ieșirea.  
3. Scrie un program care cere un număr între 1 și 100 cu `do-while` și spune dacă este par sau impar.  
4. Scrie un program „Mai vrei o dată?”, care afișează un mesaj și întreabă dacă repetă.  
5. Salvează tot ca `Tema_M2L4_Prenume_Nume.cpp`.

### Exemple pentru acasă
Aceste exemple folosesc exact ce ai învățat azi. Scrie-le de mână, rulează-le și schimbă-le după preferințe.

**Acasă 1 — Rest în bancnote și monede**
```cpp
#include <iostream>
using namespace std;

int main() {
    int rest;
    cout << "Rest de dat (lei): ";
    cin >> rest;

    int bancnote = rest / 5;
    int monede = rest % 5;

    cout << "Bancnote de 5 lei: " << bancnote << endl;
    cout << "Monede de 1 leu: " << monede << endl;
    return 0;
}
```
Pentru `13`, rezultatul este `2` bancnote de 5 lei și `3` monede de 1 leu.

**Acasă 2 — Aceeași verificare, cu `while` și cu `do-while`**
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;

    // varianta cu while: citim o data inainte
    cout << "Numar pozitiv: ";
    cin >> n;
    while (n <= 0) {
        cout << "Numar pozitiv: ";
        cin >> n;
    }

    // varianta cu do-while: citim o singura data, in interior
    do {
        cout << "Numar pozitiv: ";
        cin >> n;
    } while (n <= 0);

    cout << "Ai ales " << n << "." << endl;
    return 0;
}
```
Cele două variante fac aceeași verificare. Observă că varianta cu `do-while` are citirea scrisă o singură dată.

---

## Ce urmează — Lecția 5
Punem o buclă în interiorul altei bucle și desenăm figuri: facem **Constructorul de forme**, cu dreptunghiuri, triunghiuri și piramide.
