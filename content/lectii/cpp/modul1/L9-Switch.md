# LECȚIA 9 — Meniul cafenelei
### switch
**Modulul 1 · Bazele C++ · 2 ore**  
**Code Maker Club · Junior Coder**

> Azi înveți instrucțiunea potrivită pentru **meniuri**: alegi o opțiune numerotată, iar programul execută exact acțiunea ei.  
> Fișier: `Prenume_Nume_L9.cpp`

---

## Ce facem azi
La final scrii un `switch` cu `case`, `break` și `default`, știi ce se întâmplă când uiți `break`, grupezi mai multe cazuri pe aceeași acțiune și alegi între `switch` și `if … else if` după situație.

Aproape orice aplicație are un meniu: „1. Joc nou, 2. Continuă, 3. Setări, 4. Ieșire”. Cu `else if` se poate, dar codul devine lung și greu de urmărit. `switch` este creat tocmai pentru situația în care o valoare poate fi **1, 2, 3 sau altceva**, și pentru fiecare avem o acțiune.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare L8 și problema meniurilor lungi cu `else if` |
| 15–40 | `switch`, `case`, `break`, `default` (**Exemplul 1**) |
| 40–65 | Greșeala fără `break` și grupări de cazuri (**Exemplele 2–3**) |
| 65–85 | `switch` cu `char` (**Exemplele 4–5**) |
| 85–95 | Limitele lui `switch` |
| 95–105 | Proiect model: cafeneaua cu preț (**Exemplul 6**) |
| 105–118 | Proiectul: Meniul cafenelei + Provocarea |
| 118–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `switch (x) { … }` | Alege o acțiune după valoarea lui `x` | `switch (optiune) { … }` |
| `case valoare:` | O acțiune pentru o valoare anume | `case 1:` |
| `break;` | Oprește `switch`-ul după acțiune | `break;` |
| `default:` | Acțiunea pentru orice altă valoare | `default: cout << "Invalid";` |

---

## Pas cu pas

### Structura `switch`

```
switch (expresie) {
    case valoare1:
        // se executa daca expresie == valoare1
        break;
    case valoare2:
        // se executa daca expresie == valoare2
        break;
    default:
        // se executa daca nu se potrivește niciun case
}
```

Cum funcționează:
1. Programul calculează valoarea dintre paranteze (**expresia**).
2. Caută `case`-ul cu aceeași valoare și sare direct acolo.
3. Execută instrucțiunile de acolo **până întâlnește `break`** (sau până se termină `switch`-ul).
4. Dacă nu găsește nicio valoare potrivită, execută `default` (dacă există).

Reguli de reținut:
- `case` are după el o **valoare fixă** (`1`, `'a'`), nu o condiție. Nu scrii `case x > 5`.
- După valoare vine **două puncte `:`**, nu punct și virgulă.
- Expresia trebuie să fie de tip întreg sau `char`. **Nu merge cu `string` sau `double`.**
- `default` este opțional, dar recomandat: prinde valorile neașteptate.

### Exemplul 1 — Meniul restaurantului

```cpp
#include <iostream>
using namespace std;

int main() {
    int optiune;

    cout << "===== MENIU =====" << endl;
    cout << "1. Pizza" << endl;
    cout << "2. Paste" << endl;
    cout << "3. Supa" << endl;
    cout << "Alege: ";
    cin >> optiune;

    switch (optiune) {
        case 1:
            cout << "Ai ales pizza. Pofta buna!" << endl;
            break;
        case 2:
            cout << "Ai ales paste. Pofta buna!" << endl;
            break;
        case 3:
            cout << "Ai ales supa. Pofta buna!" << endl;
            break;
        default:
            cout << "Optiune invalida." << endl;
    }
    return 0;
}
```

**Rulare 1** (tastezi `2`):
```
===== MENIU =====
1. Pizza
2. Paste
3. Supa
Alege: 2
Ai ales paste. Pofta buna!
```

**Rulare 2** (tastezi `7`):
```
===== MENIU =====
1. Pizza
2. Paste
3. Supa
Alege: 7
Optiune invalida.
```

**Încearcă tu (10 min)**  
- [ ] Faci un meniu cu 3 opțiuni (de exemplu 1 = Joc nou, 2 = Continuă, 3 = Ieșire)  
- [ ] Testezi o opțiune invalidă  
- [ ] Adaugi un `case 4` nou  

### `break`, fall-through și grupări

### Exemplul 2 — Ce se întâmplă fără `break`

```cpp
#include <iostream>
using namespace std;

int main() {
    int optiune = 2;

    cout << "Fara break:" << endl;
    switch (optiune) {
        case 1:
            cout << "Unu" << endl;
        case 2:
            cout << "Doi" << endl;
        case 3:
            cout << "Trei" << endl;
        default:
            cout << "Altceva" << endl;
    }

    cout << endl << "Cu break:" << endl;
    switch (optiune) {
        case 1:
            cout << "Unu" << endl;
            break;
        case 2:
            cout << "Doi" << endl;
            break;
        case 3:
            cout << "Trei" << endl;
            break;
        default:
            cout << "Altceva" << endl;
    }
    return 0;
}
```

**Ieșire:**
```
Fara break:
Doi
Trei
Altceva

Cu break:
Doi
```

Fără `break`, programul intră în `case 2` și **continuă** în `case 3` și în `default`, ca o cascadă. Fenomenul se numește *fall-through* („cădere”). Este cea mai frecventă greșeală la `switch`. Regula: **pune `break` la finalul fiecărui `case`**, cu excepția cazurilor în care vrei intenționat cascada.

### Exemplul 3 — Cascada folosită intenționat: grupăm cazuri

```cpp
#include <iostream>
using namespace std;

int main() {
    int zi;

    cout << "Ziua (1-7): ";
    cin >> zi;

    switch (zi) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            cout << "Zi de scoala." << endl;
            break;
        case 6:
        case 7:
            cout << "Weekend!" << endl;
            break;
        default:
            cout << "Zi inexistenta." << endl;
    }
    return 0;
}
```

**Rulare** (tastezi `6`):
```
Ziua (1-7): 6
Weekend!
```

Mai multe `case`-uri puse unul sub altul, **fără instrucțiuni între ele**, se comportă ca un „sau”: `case 1`, `case 2`, … `case 5` duc toate la același mesaj. Este varianta compactă a unei condiții de tipul `zi == 1 || zi == 2 || …`.

**Încearcă tu (8 min)**  
- [ ] Scoți intenționat un `break` dintr-un program și explici pe foaie ce apare în plus  
- [ ] Grupezi lunile pe anotimpuri, cu mai multe `case`-uri puse unul sub altul  

### `switch` cu `char` și mici probleme

### Exemplul 4 — Opțiuni cu litere

```cpp
#include <iostream>
using namespace std;

int main() {
    char comanda;

    cout << "Comanda (s = start, p = pauza, x = iesire): ";
    cin >> comanda;

    switch (comanda) {
        case 's':
            cout << "Jocul porneste." << endl;
            break;
        case 'p':
            cout << "Joc in pauza." << endl;
            break;
        case 'x':
            cout << "La revedere!" << endl;
            break;
        default:
            cout << "Comanda necunoscuta." << endl;
    }
    return 0;
}
```

**Rulare** (tastezi `p`):
```
Comanda (s = start, p = pauza, x = iesire): p
Joc in pauza.
```

Pentru `char`, valoarea din `case` se scrie între **apostrofuri**: `case 's':`.

### Exemplul 5 — Majuscule și minuscule împreună

```cpp
#include <iostream>
using namespace std;

int main() {
    char litera;

    cout << "Introdu o litera: ";
    cin >> litera;

    switch (litera) {
        case 'a':
        case 'A':
        case 'e':
        case 'E':
        case 'i':
        case 'I':
        case 'o':
        case 'O':
        case 'u':
        case 'U':
            cout << litera << " este vocala." << endl;
            break;
        default:
            cout << litera << " nu este vocala." << endl;
    }
    return 0;
}
```

**Rulare** (tastezi `E`):
```
Introdu o litera: E
E este vocala.
```

Grupările de cazuri rezolvă elegant problema majusculelor: ambele variante duc la același răspuns.

**Încearcă tu (8 min)**  
- [ ] Faci un meniu cu litere: `s` start, `p` pauză, `x` ieșire, dar și cu majuscule  
- [ ] Citești o literă și afișezi dacă este vocală  

### Limitele lui `switch`

`switch` compară doar **egalitatea** cu valori fixe. Nu merge pentru:
- intervale (`nota >= 5`);
- condiții combinate (`a > 3 && b < 4`);
- `string` sau `double` în paranteze.

### Un proiect complet

### Exemplul 6 — Cafeneaua: meniu cu preț

```cpp
#include <iostream>
using namespace std;

int main() {
    int produs, cantitate;
    int pret = 0;

    cout << "===== CAFENEAUA CODE MAKER =====" << endl;
    cout << "1. Ceai ............. 8 lei" << endl;
    cout << "2. Limonada ......... 12 lei" << endl;
    cout << "3. Briosa ........... 10 lei" << endl;
    cout << "4. Tort (felie) ..... 18 lei" << endl;
    cout << "Alege produsul: ";
    cin >> produs;

    switch (produs) {
        case 1: pret = 8; break;
        case 2: pret = 12; break;
        case 3: pret = 10; break;
        case 4: pret = 18; break;
        default:
            cout << "Produs inexistent." << endl;
            return 0;
    }

    cout << "Cantitate: ";
    cin >> cantitate;

    cout << "Total: " << pret * cantitate << " lei" << endl;
    return 0;
}
```

**Rulare** (tastezi `2` și `3`):
```
===== CAFENEAUA CODE MAKER =====
1. Ceai ............. 8 lei
2. Limonada ......... 12 lei
3. Briosa ........... 10 lei
4. Tort (felie) ..... 18 lei
Alege produsul: 2
Cantitate: 3
Total: 36 lei
```

Observă două idei noi:
- `switch` poate **seta o variabilă** (`pret`), iar restul programului o folosește;
- pe ramura `default` folosim `return 0;`, care **încheie programul** pe loc. Nu mai are sens să cerem cantitatea pentru un produs care nu există.

**Încearcă tu (10 min)**  
- [ ] Adaugi un al cincilea produs în meniu și îl testezi  
- [ ] Schimbi prețurile și produsele (pizzerie, librărie…)  
- [ ] Testezi o opțiune inexistentă și verifici că programul se oprește frumos  

---

## De făcut azi — „Meniul cafenelei”

| | Ce trebuie să ai |
|---|---|
| **Minim** | Un meniu cu minimum 3 opțiuni în `switch`, cu `break` la fiecare `case` și un `default` |
| **Complet** | Minim + un meniu care calculează ceva (un preț sau o operație) și testarea unei opțiuni invalide |

Alege-ți propriul meniu: o cafenea, o pizzerie, o librărie sau un joc. Exemplul 6 este doar un model.

**Gata când:**
- [ ] Programul compilează fără erori  
- [ ] Meniul are minimum 3 `case` și un `default`  
- [ ] Fiecare `case` se termină cu `break`  
- [ ] Citești opțiunea cu `cin`  
- [ ] (Complet) Calculezi un preț sau o operație  
- [ ] Ai testat o opțiune invalidă  
- [ ] Fișierul se numește `Prenume_Nume_L9.cpp`

---

## Bonus ★★★ — Provocare: Dispecerul de lift
*Doar dacă ai terminat Complet.*

Un lift are etajele de la `0` la `5`. Citește etajul curent (`int`) și o comandă (`char`): `S` pentru sus sau `J` pentru jos, litere mari sau mici.

- [ ] Un `switch` pe comandă calculează etajul nou, iar `S` și `s` sunt grupate; `default` afișează „Comandă necunoscută”  
- [ ] Un `if` verifică dacă etajul nou iese din `0–5` și afișează „Nu se poate”  
- [ ] Un al doilea `switch` afișează numele etajului nou: `0` Parter, `1` și `2` Birouri (grupate), `3` Cantină, `4` și `5` Terasă  
- [ ] Testezi `S` de la etajul 5, `j` de la etajul 0 și o comandă greșită, de exemplu `x`

---

## Greșeli frecvente
| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| Se afișează mai multe mesaje | Ai uitat `break` | Pune `break;` la finalul fiecărui `case` |
| `jump to case label` sau altă eroare la o variabilă | Ai declarat o variabilă într-un `case` fără acolade | Pune `case X: { … }` |
| `case 1;` | Punct și virgulă în loc de două puncte | `case 1:` |
| `case x > 5:` | `case` nu primește condiții | Folosește `if`, sau o valoare fixă |
| `switch (nume)` cu `string` | `switch` nu merge cu texte | Folosește `if` / `else if` |
| `case 1` și `case 1` | Aceeași valoare apare de două ori | Fiecare valoare doar o dată |
| Pentru un `char`, `case a:` | Lipsesc apostrofurile | `case 'a':` |
| Meniul nu răspunde la opțiuni greșite | Lipsește `default` | Adaugă `default:` |
| Codul de după `switch` rulează, deși opțiunea e greșită | Programul nu se oprește pe `default` | Folosește `return 0;` în `default` dacă vrei să se oprească |

---

## Recapitulare pe scurt
- `switch (expresie)` compară expresia cu valorile fixe din `case`-uri și sare la cea potrivită.
- Fiecare `case` se termină cu `break`, altfel programul „cade” în următorul (fall-through).
- `default` prinde toate valorile necunoscute.
- Cazuri puse unul sub altul, fără instrucțiuni între ele, formează un grup (ca un „sau”).
- `switch` merge cu `int` și `char`, nu cu `string` sau `double`, și compară doar egalitatea.
- Pentru intervale și condiții combinate folosești `if … else if`.
- O variabilă nouă într-un `case` cere acolade în jurul `case`-ului.

---

## Quiz scurt
- Cu ce compară `switch` expresia?  
- De ce are fiecare `case` nevoie de `break`?  
- Ce prinde `default`?  
- Cu ce tipuri merge `switch` și cu ce nu?  
- Când folosești `if ... else if` în loc de `switch`?  

---

## Temă
1. Refă **Exemplele 1–6** pe calculatorul tău și testează fiecare opțiune, inclusiv una invalidă.  
2. Scrie un program „Meniu de pizza” cu 4 tipuri de pizza și prețuri; citește tipul și numărul de porții și afișează totalul.  
3. Scrie un program care citește o cifră (0–9) și o afișează cu litere („trei”, „cinci”, …).  
4. Scrie un program care citește o notă între 1 și 10 și afișează calificativul folosind un `switch` cu grupări de cazuri.  
5. Salvează tot ca `Tema_L9_Prenume_Nume.cpp`.

### Exemple pentru acasă
Aceste exemple folosesc exact ce ai învățat azi. Scrie-le de mână, rulează-le și schimbă-le după preferințe.

**Acasă 1 — Zilele săptămânii**
```cpp
#include <iostream>
using namespace std;

int main() {
    int zi;

    cout << "Numarul zilei (1-7): ";
    cin >> zi;

    switch (zi) {
        case 1: cout << "Luni" << endl; break;
        case 2: cout << "Marti" << endl; break;
        case 3: cout << "Miercuri" << endl; break;
        case 4: cout << "Joi" << endl; break;
        case 5: cout << "Vineri" << endl; break;
        case 6: cout << "Sambata" << endl; break;
        case 7: cout << "Duminica" << endl; break;
        default: cout << "Zi inexistenta." << endl;
    }
    return 0;
}
```

**Rulare** (tastezi `4`):
```
Numarul zilei (1-7): 4
Joi
```

Când `case`-ul are o singură instrucțiune, o poți scrie pe același rând, ca aici. Compară cu varianta cu 7 `else if`-uri: `switch` e mai scurt și mai clar.

**Acasă 2 — Calculator cu operator citit ca `char`**
```cpp
#include <iostream>
using namespace std;

int main() {
    int a, b;
    char op;

    cout << "Introdu: numar operator numar (ex: 12 + 5): ";
    cin >> a >> op >> b;

    switch (op) {
        case '+':
            cout << a << " + " << b << " = " << a + b << endl;
            break;
        case '-':
            cout << a << " - " << b << " = " << a - b << endl;
            break;
        case '*':
            cout << a << " * " << b << " = " << a * b << endl;
            break;
        case '/':
            if (b == 0) {
                cout << "Nu se poate imparti la zero." << endl;
            } else {
                cout << a << " / " << b << " = " << a / b << endl;
            }
            break;
        default:
            cout << "Operator necunoscut." << endl;
    }
    return 0;
}
```

**Rulare 1** (tastezi `12 * 5`):
```
Introdu: numar operator numar (ex: 12 + 5): 12 * 5
12 * 5 = 60
```

**Rulare 2** (tastezi `7 / 0`):
```
Introdu: numar operator numar (ex: 12 + 5): 7 / 0
Nu se poate imparti la zero.
```

În interiorul unui `case` poți folosi și `if`. Aici, `case '/'` verifică întâi dacă împărțitorul este zero. Observă că un singur `cin` citește cele trei valori una după alta, cu spații între ele.

**Acasă 3 — Aventura ta (alege drumul)**
```cpp
#include <iostream>
using namespace std;

int main() {
    int drum;

    cout << "Esti in fata unei paduri intunecate." << endl;
    cout << "1. Intri pe poteca" << endl;
    cout << "2. Ocolesti padurea" << endl;
    cout << "3. Te intorci acasa" << endl;
    cout << "Ce alegi? ";
    cin >> drum;

    switch (drum) {
        case 1:
            cout << "Gasesti o pestera plina de comori!" << endl;
            break;
        case 2:
            cout << "Ajungi la un lac. Un pescar te invita la masa." << endl;
            break;
        case 3:
            cout << "Acasa e bine, dar aventura se termina aici." << endl;
            break;
        default:
            cout << "Stai si te gandesti... si se face seara." << endl;
    }
    return 0;
}
```

**Rulare** (tastezi `1`):
```
Esti in fata unei paduri intunecate.
1. Intri pe poteca
2. Ocolesti padurea
3. Te intorci acasa
Ce alegi? 1
Gasesti o pestera plina de comori!
```

**Acasă 4 — Convertor de unități cu meniu**
```cpp
/*
   Program: Convertor de unitati
   Meniu:   1 = km -> m, 2 = ore -> minute, 3 = kg -> g
*/
#include <iostream>
using namespace std;

int main() {
    int optiune;
    double valoare;

    cout << "===== CONVERTOR =====" << endl;
    cout << "1. Kilometri in metri" << endl;
    cout << "2. Ore in minute" << endl;
    cout << "3. Kilograme in grame" << endl;
    cout << "Alege: ";
    cin >> optiune;

    cout << "Valoarea: ";
    cin >> valoare;

    switch (optiune) {
        case 1:
            cout << valoare << " km = " << valoare * 1000 << " m" << endl;
            break;
        case 2:
            cout << valoare << " ore = " << valoare * 60 << " minute" << endl;
            break;
        case 3:
            cout << valoare << " kg = " << valoare * 1000 << " g" << endl;
            break;
        default:
            cout << "Optiune invalida." << endl;
    }
    return 0;
}
```

**Rulare** (tastezi `2` și `1.5`):
```
===== CONVERTOR =====
1. Kilometri in metri
2. Ore in minute
3. Kilograme in grame
Alege: 2
Valoarea: 1.5
1.5 ore = 90 minute
```

---

## Ce urmează — Lecția 10
Recapitulăm tot Modulul 1 și construim **mini-proiectul final**: un quiz sau un calculator cu meniu. La final primești insigna **Junior Coder**!
