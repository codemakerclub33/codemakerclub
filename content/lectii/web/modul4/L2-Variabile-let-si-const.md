# LECȚIA 2 — Fișa personajului
### Variabile: `let` și `const`
**Modulul 4 · JavaScript pentru începători · 2 ore**  
**Code Maker Club · JavaScript Starter**

> Un program trebuie să **țină minte** lucruri: scorul unui joc, numele jucătorului, câte vieți mai are. Pentru asta folosim **variabile**: cutii cu nume, în care păstrăm o valoare. Azi înveți să faci cutii cu `let` și `const`, să le schimbi conținutul și să le folosești în mesaje.  
> Proiect: **„Fișa personajului”** · folder: `Prenume_Nume_W4_L2` (ex. `Ana_Pop_W4_L2`)

---

## Ce facem azi
La final ai un program care ține minte datele unui personaj (un animal, un robot sau un erou de poveste): ce nu se schimbă (numele, viețile maxime) și ce se schimbă pe parcurs (scorul, nivelul, viețile rămase). Știi să faci o variabilă cu `let` și cu `const`, să-i schimbi valoarea, să alegi nume bune, să construiești mesaje cu variabile și să recunoști tipurile text, număr și adevărat/fals. Fără variabile, un program ar putea doar să afișeze lucruri scrise de la început; cu ele poate ține scorul, poate număra și își poate schimba comportamentul. Toate jocurile și aplicațiile se bazează pe ele.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul · alegem datele din articol |
| 15–35 | Prima variabilă cu `let` · mai multe variabile (**Exemplele 1–2**) |
| 35–55 | Schimbăm valoarea: `=`, `+=`, `++` (**Exemplul 3**) |
| 55–70 | `const` (**Exemplul 4**) |
| 70–85 | Nume bune pentru variabile (**Exemplul 5**) |
| 85–105 | Mesaje cu variabile · tipuri (**Exemplele 6–7**) |
| 105–115 | Mini-proiect: fișa personajului (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `let` | Creează o variabilă a cărei valoare se poate schimba | `let scor = 0;` |
| `const` | Creează o variabilă a cărei valoare nu se schimbă | `const pi = 3.14;` |
| `+=`  `-=`  `*=`  `++`  `--` | Schimbă valoarea mai repede | `scor += 5;` |
| `` `...${nume}...` `` | Text cu variabile înăuntru | `` `Salut, ${nume}!` `` |
| `typeof` | Spune ce fel de valoare este | `typeof 10` |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- `script.js` se leagă de pagină cu `<script src="script.js"></script>` înainte de `</body>`;
- `console.log(…);` scrie în consolă (F12; pe Mac Cmd + Option + I, fila Console);
- textul se scrie între ghilimele, iar numerele fără ghilimele;
- mesajul roșu din consolă spune felul erorii și rândul.

**Încearcă tu (8 min)**  
- [ ] Creează folderul `Prenume_Nume_W4_L2` ca o **copie** a folderului `Prenume_Nume_W4_L1` (cu `tema.html`, `script.js`, `stil.css`, `imagini`, `media`)  
- [ ] Șterge din `script.js` fișa de la lecția trecută (sau comentează-o cu `/* … */`) și scrie un `console.log` cu „Salut din lecția 2”  
- [ ] Deschide `tema.html` cu Live Server și verifică mesajul în consolă  
- [ ] Alege din articolul tău pe Wikipedia 3 date care **nu se schimbă** (de exemplu un an sau o mărime) și 2 lucruri pe care le poți **număra** (de exemplu câte imagini sau câte capitole ai tu)  

> De aici înainte, exemplele arată ce scrii în `script.js`.

---

## 2. Prima variabilă

### Exemplul 1 — O cutie cu nume

```javascript
let nume = "Rex";
console.log(nume);
```

În consolă apare:

```text
Rex
```

Ce înseamnă prima linie:
- `let` spune: „fac o variabilă nouă”;  
- `nume` este **numele cutiei** (îl alegi tu);  
- `=` **pune** valoarea în cutie (nu înseamnă „egal” ca la matematică, ci „pune în”);  
- `"Rex"` este valoarea;  
- `;` încheie instrucțiunea.

În a doua linie, `console.log(nume);` afișează **ce este în cutie**. Atenție: aici `nume` este **fără ghilimele**. Cu ghilimele (`console.log("nume");`) ar afișa cuvântul `nume`.

**Încearcă tu (5 min)**  
- [ ] Creează o variabilă cu numele subiectului din articolul tău și afișeaz-o  
- [ ] Afișează aceeași variabilă o dată fără ghilimele și o dată cu ghilimele  
- [ ] Spune cu voce tare ce face semnul `=`  

### Exemplul 2 — Mai multe variabile, de feluri diferite

```javascript
let animal = "câine";
let varsta = 3;
let greutate = 12.5;

console.log(animal);
console.log(varsta);
console.log(greutate);
console.log(varsta + greutate);
```

O variabilă poate ține text, un număr întreg sau un număr cu zecimale. **Zecimalele se scriu cu punct**, nu cu virgulă: `12.5`, nu `12,5`. Poți face calcule direct cu variabilele: ultima linie afișează `15.5`.

**Încearcă tu (6 min)**  
- [ ] Creează variabile cu cele 3 date alese din articol (text, număr întreg, număr cu zecimale, după caz)  
- [ ] Afișează-le cu `console.log`, fără ghilimele  
- [ ] Fă un calcul cu două dintre ele  

**Gata când:**  
- [ ] Ai creat variabile cu `let` pentru un text, un număr întreg și un număr cu zecimale  
- [ ] Le-ai afișat fără ghilimele  
- [ ] Ai făcut un calcul cu două variabile  

---

## 3. Schimbăm valoarea

### Exemplul 3 — Punem alt conținut în cutie

```javascript
let scor = 0;
console.log("Scor la început:", scor);

scor = 10;
scor = scor + 5;
console.log("Scor după două runde:", scor);

let monede = 0;
monede += 3;   // la fel ca monede = monede + 3
monede -= 1;   // la fel ca monede = monede - 1
monede *= 2;   // la fel ca monede = monede * 2
monede++;      // la fel ca monede = monede + 1
monede--;      // la fel ca monede = monede - 1
console.log(monede);
```

Rezultat:

```text
Scor la început: 0
Scor după două runde: 15
4
```

Observă: **`let` se scrie doar prima dată**, la crearea variabilei. Când schimbi valoarea, scrii doar numele: `scor = 10;`. Linia `scor = scor + 5;` se citește așa: „ia ce este în `scor`, adaugă 5 și pune rezultatul înapoi în `scor`”. Calculatorul rezolvă mai întâi partea din dreapta, apoi pune rezultatul.

| Scurtătură | Ce face |
|------------|---------|
| `+=` | adaugă |
| `-=` | scade |
| `*=` | înmulțește |
| `++` | adaugă 1 |
| `--` | scade 1 |

După rândurile de mai sus, `monede` este: 0, apoi 3, 2, 4, 5, 4. Deci în consolă apare `4`.

**Încearcă tu (8 min)**  
- [ ] Creează `let contor = 0;` pentru un lucru pe care îl numeri în pagina ta (de exemplu imaginile)  
- [ ] Mărește-l cu `++` de trei ori și scade-l o dată cu `--`  
- [ ] Prezice rezultatul într-un comentariu înainte să-l vezi în consolă  
- [ ] Adaugă `contor += 10;` și afișează valoarea după fiecare schimbare  

**Gata când:**  
- [ ] Ai schimbat o variabilă fără să mai scrii `let`  
- [ ] Ai folosit `+=`, `++` și `--`  
- [ ] Rezultatul din consolă este cel prezis  

---

## 4. `const`: valori care nu se schimbă

### Exemplul 4 — Constante

```javascript
const pi = 3.14;
const numeJoc = "Vânătoarea de monștri";

console.log(pi);
console.log(numeJoc);
```

`const` face o variabilă a cărei valoare **nu se mai schimbă**. Dacă încerci:

```javascript
const pi = 3.14;
pi = 3.15;
```

consola arată o eroare:

```text
Uncaught TypeError: Assignment to constant variable.
```

Asta nu este un necaz, ci o **protecție**: te ferește să strici din greșeală o valoare care trebuie să rămână la fel.

Regula simplă:

| Folosești | Când |
|-----------|------|
| `const` | valoarea **nu se schimbă** (numele jocului, numărul de vieți maxim) |
| `let` | valoarea **se schimbă** (scorul, viețile rămase) |

Dacă ai dubii, începe cu `const`. Dacă primești eroarea de mai sus, înseamnă că valoarea trebuie să se schimbe, deci treci la `let`.

**Încearcă tu (6 min)**  
- [ ] Pune cele 3 date care nu se schimbă din articolul tău în trei constante  
- [ ] Provoacă eroarea „Assignment to constant variable” și citește mesajul  
- [ ] Repară eroarea ștergând rândul care schimbă constanta  

**Gata când:**  
- [ ] Ai constante cu `const` și o variabilă cu `let` care se schimbă  
- [ ] Ai citit mesajul „Assignment to constant variable”  
- [ ] Poți explica ce alegi, `let` sau `const`, pentru scor și pentru numele jocului  

---

## 5. Nume bune

### Exemplul 5 — Cum alegi numele

```javascript
let scorJucator = 0;       // bun
let numarVieti = 3;        // bun
let x = 3;                 // nu spune nimic
let nume_animal = "pisică"; // merge, dar stilul obișnuit este altul
```

Reguli pentru nume:
- doar **litere, cifre și `_`** (liniuță jos), fără spații;  
- **nu începe cu o cifră** (`2jucatori` nu merge, `jucatori2` merge);  
- JavaScript face diferența între **litere mari și mici**: `scor` și `Scor` sunt două variabile diferite;  
- nu folosi cuvinte rezervate, care au înțeles în limbaj (`let`, `const`, `if`, `for`…);  
- evită diacriticele în nume (`varsta`, nu `vârsta`), ca să nu ai probleme.

Stilul obișnuit se numește **camelCase**: primul cuvânt cu literă mică, următoarele cu literă mare la început: `scorMaxim`, `numarVieti`, `numeAnimalPreferat`. Numele trebuie să spună **ce conține** variabila: peste o lună vei înțelege de ce ai scris `scorMaxim`, dar nu și de ce ai scris `x`.

**Încearcă tu (5 min)**  
- [ ] Scrie cinci nume bune pentru variabilele din articolul tău, în camelCase  
- [ ] Scrie două nume greșite și spune de ce nu merg  
- [ ] Verifică în consolă diferența dintre `scor` și `Scor`  

---

## 6. Mesaje și tipuri

### Exemplul 6 — Lipim text cu valori

Două moduri de a construi un mesaj:

```javascript
let nume = "Ana";
let varsta = 10;

// Modul 1: lipim cu +
console.log("Bună, " + nume + "! Ai " + varsta + " ani.");

// Modul 2: text cu variabile înăuntru (între semne `...`)
console.log(`Bună, ${nume}! Ai ${varsta} ani.`);
```

Ambele afișează:

```text
Bună, Ana! Ai 10 ani.
```

- **Cu `+`**: lipești bucăți de text și variabile. Nu uita spațiile din interiorul ghilimelelor.  
- **Cu semnul `` ` `` (backtick)**: scrii tot mesajul între semnele `` ` ``, iar variabilele le pui în `${…}`. Este mai ușor de citit. Semnul `` ` `` nu este ghilimea: este alt caracter, de pe tastatură (cere ajutor unui adult dacă nu găsești semnul).

**Încearcă tu (6 min)**  
- [ ] Scrie un mesaj despre subiectul tău, făcut cu `+`  
- [ ] Scrie același mesaj cu `` `${…}` ``  
- [ ] Verifică dacă între cuvinte au apărut spațiile  

### Exemplul 7 — Tipuri de valori

```javascript
let titlu = "Joc nou";   // text (string)
let nivel = 3;           // număr (number)
let aPornit = true;      // adevărat/fals (boolean)

console.log(typeof titlu);
console.log(typeof nivel);
console.log(typeof aPornit);
```

Rezultat:

```text
string
number
boolean
```

| Tip | Ce ține | Exemplu |
|-----|---------|---------|
| `string` | text | `"Ana"` |
| `number` | număr | `10`, `12.5` |
| `boolean` | adevărat sau fals | `true`, `false` |

`true` și `false` se scriu **fără ghilimele** și cu litere mici. Vei avea nevoie de ele la decizii. Dacă faci o variabilă fără valoare (`let x;`), ea conține `undefined`, adică „nedefinit”: cutia există, dar este goală.

**Încearcă tu (5 min)**  
- [ ] Creează o variabilă `true` sau `false` despre subiectul tău (de exemplu `esteRar`)  
- [ ] Afișează cu `typeof` tipul pentru un text, un număr și un `true`  
- [ ] Spune ce afișează `typeof` pentru `"5"` (cu ghilimele) și pentru `5`  

**Gata când:**  
- [ ] Ai un mesaj făcut cu `+` și unul făcut cu `` `${…}` ``  
- [ ] Ai o variabilă `true` sau `false`  
- [ ] Ai folosit `typeof` pentru trei valori diferite  

---

## 7. Mini-proiect: toate la un loc

### Exemplul 8 — „Fișa personajului”

Iată programul-model, despre un personaj de joc. Scrie un `script.js` ca acesta, cu **personajul tău** (un animal, un robot, un erou de poveste) și cu date din articolul tău:

```javascript
// Datele care nu se schimbă
const numePersonaj = "Cavalerul Curajos";
const vietiMaxime = 3;

// Datele care se schimbă pe parcursul jocului
let scor = 0;
let vieti = vietiMaxime;
let nivel = 1;
let aGasitComoara = false;

console.log(`=== ${numePersonaj} ===`);
console.log(`Scor: ${scor} | Vieți: ${vieti} | Nivel: ${nivel}`);

// Un tur de joc
scor += 50;
nivel++;
vieti--;
aGasitComoara = true;

console.log("--- După prima misiune ---");
console.log(`Scor: ${scor} | Vieți: ${vieti} | Nivel: ${nivel}`);
console.log("A găsit comoara?", aGasitComoara);

// Un calcul
let bonus = vieti * 10;
scor += bonus;
console.log(`Bonus pentru vieți: ${bonus}. Scor final: ${scor}`);
```

Rezultat (pe scurt): scorul crește de la 0 la 50, apoi la 70 (bonus 2 × 10), nivelul devine 2, iar viețile scad la 2. Nu pune **date personale** (nume complet, adresă, școală, telefon): alege un personaj inventat.

**Încearcă tu (10 min)**  
- [ ] Scrie fișa personajului tău, după model, cu cel puțin 2 constante și 4 variabile `let`  
- [ ] Folosește `+=`, `++` și `--` cel puțin o dată fiecare  
- [ ] Pune în fișă și 2 date din articolul tău, în constante  
- [ ] Citește programul rând cu rând și spune cu voce tare ce valoare are fiecare variabilă  

**Gata când:**  
- [ ] Ai cel puțin 2 constante (`const`) și 4 variabile (`let`)  
- [ ] Ai folosit `+=`, `++` și `--`  
- [ ] Mesajele sunt făcute cu `${…}` sau cu `+`  
- [ ] Programul nu arată erori roșii în consolă  

---

## De făcut azi — „Fișa personajului”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | `script.js` cu 4 variabile (un nume, un număr, un text și un număr care se schimbă) afișate în consolă |
| **Complet** | Minim + cel puțin 2 constante și 4 variabile `let` cu nume în camelCase, un text, un număr, un număr cu zecimale și un `true`/`false`, `+=`, `++` și `--`, două mesaje cu variabile, un calcul cu două variabile și două comentarii |

### Pasul 1 — Minim
În folderul `Prenume_Nume_W4_L2`:

- [ ] Ai `tema.html` (cu `<script>` legat), `script.js` și `stil.css`  
- [ ] Ai 4 variabile și le afișezi în consolă  
- [ ] Unul dintre numere se schimbă în program  

### Pasul 2 — Complet
- [ ] Ai cel puțin 2 constante și 4 variabile `let`, cu nume în camelCase  
- [ ] Ai un text, un număr, un număr cu zecimale și un `true`/`false`  
- [ ] Ai folosit `+=`, `++` și `--`  
- [ ] Ai două mesaje cu variabile și un calcul cu două variabile  
- [ ] Ai cel puțin două comentarii  

---

## Bonus ★★★ — Provocare: Coșul de cumpărături
*Doar dacă ai terminat Complet.*

Faci un mic program de cumpărături, cu variabile.

- [ ] Fă un coș cu preț, cantitate și total (`pret * cantitate`) pentru un joc sau o jucărie  
- [ ] Schimbă între ele valorile a două variabile, folosind o a treia variabilă ajutătoare  
- [ ] Calculează aria unui dreptunghi (`lungime * latime`) și perimetrul lui  
- [ ] Afișează `typeof` pentru o variabilă fără valoare (`let x;`) și spune ce observi  

---

## Greșeli frecvente
1. **Ai scris `let` de două ori** pentru aceeași variabilă — apare o eroare („already been declared”). `let` se scrie o singură dată.  
2. **Ai încercat să schimbi un `const`** — `Assignment to constant variable`. Dacă se schimbă, folosește `let`.  
3. **Ai pus ghilimele în jurul numelui variabilei** — `"nume"` este text, `nume` este variabila.  
4. **Ai scris nume cu spațiu sau care începe cu o cifră** (`scor maxim`, `2jucatori`) — folosește `scorMaxim`, `jucatori2`.  
5. **Ai amestecat literele mari și mici** (`Scor` în loc de `scor`) — „is not defined”.  
6. **Ai scris zecimalele cu virgulă** (`12,5`) — folosește punctul: `12.5`.  
7. **Ai uitat spațiile la lipirea textului cu `+`** — mesajul apare lipit: `Bună,Ana`.  
8. **Ai scris `${nume}` între ghilimele obișnuite** — merge doar între semnele `` ` ``.  

---

## Recapitulare pe scurt
1. O variabilă este o cutie cu nume: `let scor = 0;`.  
2. `=` pune o valoare în cutie; `let` se scrie doar la creare.  
3. `+=`, `-=`, `*=`, `++`, `--` schimbă valoarea mai repede.  
4. `const` pentru valori care nu se schimbă; `let` pentru cele care se schimbă.  
5. Nume în camelCase, fără spații, care spun ce conține variabila.  
6. Mesajele se construiesc cu `+` sau cu `` `${…}` ``; tipurile sunt `string`, `number`, `boolean`.

## Quiz scurt
- Ce face `let scor = 0;`?  
- Când folosești `const`?  
- Ce afișează `console.log("scor");`?  
- Ce face `scor++;`?  
- Care este tipul valorii `true`?

## Temă
1. Termină `Prenume_Nume_W4_L2` (Minim, apoi Complet).  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Text plus număr.**

```javascript
console.log(typeof (5 + 5));
console.log("5" + 5);
console.log(typeof ("5" + 5));
```

Afișează `number`, apoi `55`, apoi `string`: când un text se lipește cu un număr, rezultatul este tot text. Încearcă și `"5" - 2` și spune ce observi.

**Acasă 2 — Text pe mai multe rânduri.**

```javascript
const poveste = `Era odată un delfin.
El înota repede.`;
console.log(poveste);
```

Între semnele `` ` `` textul poate continua pe rândul următor. Scrie o poveste de trei rânduri despre subiectul tău, într-o singură variabilă.

4. **Încă patru exerciții (B–E):**

**B — Ce valoare are variabila?** Spune ce afișează programul: (1) `let a = 5; a = a + 2; console.log(a);` (2) `let b = 10; b -= 3; b *= 2; console.log(b);` (3) `let c = 1; c++; c++; c--; console.log(c);` (4) `const d = 4; console.log(d * d);`

**C — Scrie codul.** Scrie codul care: (1) face o variabilă `vieti` cu valoarea 3 și o scade cu 1; (2) face o constantă `nume` cu textul „Luna” și afișează mesajul `Salut, Luna!` folosind variabila; (3) face o variabilă `pret` cu 20, o dublează și o afișează.

**D — Găsește greșelile.** Găsește **3 greșeli** în codul de mai jos și repară greșelile. Programul vrea să afișeze numele `Ana` și să nu mai schimbe valoarea lui `pi`.

```text
let 2jucatori = 5;
const pi = 3.14;
pi = 3.15;
let nume = "Ana";
console.log("nume");
```

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: ce este o variabilă? Care este diferența dintre `let` și `const`? De ce `console.log(scor)` și `console.log("scor")` afișează lucruri diferite?

## Ce urmează — Lecția 3
Învățăm mai multe despre **numere, text și calcule**: restul împărțirii, rotunjiri, lungimea unui text, litere mari și mici, și cum primim date de la utilizator.

---

## Răspunsuri
- **Quiz scurt:** (1) creează o variabilă numită `scor` și pune în ea valoarea `0`; (2) când valoarea nu se schimbă (de exemplu numele jocului); (3) afișează textul `scor`, nu valoarea variabilei; (4) mărește valoarea lui `scor` cu 1; (5) `boolean` (adevărat/fals).  
- **Dacă ritmul clasei este lent:** Exemplul 7 (tipuri) se poate face scurt; Exemplele 1, 3, 4 și 6 sunt obligatorii.  
- **Tema, exercițiul B:** (1) `7`; (2) `14` (10 − 3 = 7, apoi 7 × 2); (3) `2` (1, 2, 3, apoi 2); (4) `16`.  
- **Tema, exercițiul C:** (1) `let vieti = 3; vieti--;` (sau `vieti -= 1;`); (2) `const nume = "Luna"; console.log("Salut, " + nume + "!");` sau `` console.log(`Salut, ${nume}!`); ``; (3) `let pret = 20; pret *= 2; console.log(pret);`.  
- **Tema, exercițiul D:** (1) `2jucatori` începe cu o cifră (de exemplu `jucatori2`); (2) `pi` este `const` și nu poate fi schimbat (se șterge linia `pi = 3.15;`); (3) `console.log("nume")` afișează cuvântul `nume`; trebuie `console.log(nume)`.  
- **Tema, exercițiul E:** variabila este o cutie cu nume care ține o valoare; `let` pentru valori care se schimbă, `const` pentru valori care nu se schimbă; cu ghilimele este text, fără ghilimele este variabila.  
- **Bonus (indicii):** (1) `let pret = 25; let cantitate = 3;` apoi `console.log(pret * cantitate);`; (2) ai nevoie de o a treia variabilă în care salvezi prima valoare **înainte** să o pierzi; (3) aria este `lungime * latime`, iar perimetrul `2 * (lungime + latime)`; (4) o variabilă fără valoare are tipul `undefined`.  
- **Notă informativă:** dacă nu găsești semnul `` ` `` pe tastatură, cere ajutor sau folosește deocamdată metoda cu `+`. Ține minte: `=` înseamnă „pune în”, nu „este egal cu”. Gândește-te la variabile ca la cutii cu etichete. Nu folosi numere mari sau date personale în „fișa personajului”. Dacă nu ai `tema.html` din Modulul 3, alege date dintr-un animal, un loc sau un hobby. La Acasă 1, `"5" - 2` dă `3`: JavaScript transformă textul în număr doar la scădere, nu și la adunare.
