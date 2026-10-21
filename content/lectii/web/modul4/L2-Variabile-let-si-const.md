# LECȚIA 2 — Variabile: let și const
**Modulul 4 · JavaScript pentru începători · 2 ore**  
**Code Maker Club · JavaScript Starter**

> Un program trebuie să **țină minte** lucruri: scorul unui joc, numele jucătorului, câte vieți mai are. Pentru asta folosim **variabile**: cutii cu nume, în care păstrăm o valoare. Azi înveți să faci cutii cu `let` și `const`, să le schimbi conținutul și să le folosești în mesaje.  
> Proiect: **„Fișa unui personaj de joc”** · folder: `Prenume_Nume_W4_L2` (ex. `Ana_Pop_W4_L2`)

---

## Obiectiv
La finalul orei știi să creezi o variabilă cu `let` și cu `const`, să citești și să schimbi valoarea, să alegi nume bune, să folosești `+=` și `++`, să construiești mesaje cu variabile și să recunoști tipurile text, număr și adevărat/fals.  
**Minim:** un program cu 4 variabile (nume, număr, text, un număr care se schimbă) afișate în consolă.  
**Ținta orei (Complet):** + o constantă, mesaje cu variabile, `+=` și `++`, un exemplu de eroare la `const`, nume corecte și explicarea diferenței dintre `let` și `const`.

## De ce contează
Fără variabile, un program ar putea doar să afișeze lucruri scrise de la început. Cu variabile, poate ține scorul, poate număra și își poate schimba comportamentul. Toate jocurile și aplicațiile se bazează pe ele.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–35 | Prima variabilă cu `let` (**Exemplele 1–2**) |
| 35–55 | Schimbăm valoarea: `=`, `+=`, `++` (**Exemplele 3–4**) |
| 55–70 | `const` (**Exemplul 5**) |
| 70–85 | Nume bune pentru variabile (**Exemplul 6**) |
| 85–100 | Mesaje cu variabile · tipuri (**Exemplele 7–8**) |
| 100–115 | Proiect (**Exemplul 9**) |
| 115–120 | Recap și temă |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- `script.js` se leagă de pagină cu `<script src="script.js"></script>` înainte de `</body>`;
- `console.log(…);` scrie în consolă (F12, fila Console);
- textul se scrie între ghilimele, iar numerele fără ghilimele;
- mesajul roșu din consolă spune felul erorii și rândul.

**Încearcă tu (4 min)**  
- [ ] Creează folderul `Prenume_Nume_W4_L2` cu `index.html` (scheletul complet, cu `<script src="script.js"></script>` înainte de `</body>`) și `script.js`  
- [ ] Pune în `<body>` un `<h1>` cu textul „Variabile”  
- [ ] În `script.js` scrie un `console.log` care afișează „Salut din lecția 2”  

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

În a doua linie, `console.log(nume);` afișează **ce este în cutie**. Atenție: aici `nume` este **fără ghilimele**. Cu ghilimele ar afișa cuvântul `nume`:

```javascript
console.log(nume);
console.log("nume");
```

Prima afișează `Rex`, a doua afișează `nume`.

### Exemplul 2 — Mai multe variabile, de feluri diferite

```javascript
let animal = "câine";
let varsta = 3;
let greutate = 12.5;

console.log(animal);
console.log(varsta);
console.log(greutate);
```

O variabilă poate ține text, un număr întreg sau un număr cu zecimale. **Zecimalele se scriu cu punct**, nu cu virgulă: `12.5`, nu `12,5`. Poți face calcule direct cu variabilele:

```javascript
let mere = 5;
let pere = 3;
console.log(mere + pere);
```

Rezultatul este `8`.

**Gata când:**  
- [ ] Ai creat variabile cu `let` pentru un text, un număr întreg și un număr cu zecimale  
- [ ] Le-ai afișat cu `console.log`, fără ghilimele  
- [ ] Ai adunat două variabile numerice  
- [ ] Poți spune ce face semnul `=` într-o variabilă  

---

## 3. Schimbăm valoarea

### Exemplul 3 — Punem alt conținut în cutie

```javascript
let scor = 0;
console.log("Scor la început:", scor);

scor = 10;
console.log("Scor după prima rundă:", scor);

scor = scor + 5;
console.log("Scor după a doua rundă:", scor);
```

Rezultat:

```text
Scor la început: 0
Scor după prima rundă: 10
Scor după a doua rundă: 15
```

Observă: **`let` se scrie doar prima dată**, la crearea variabilei. Când schimbi valoarea, scrii doar numele: `scor = 10;`. Linia `scor = scor + 5;` se citește așa: „ia ce este în `scor`, adaugă 5 și pune rezultatul înapoi în `scor`”. Calculatorul rezolvă mai întâi partea din dreapta, apoi pune rezultatul.

### Exemplul 4 — Scurtături

```javascript
let monede = 0;

monede += 3;   // la fel ca monede = monede + 3
monede -= 1;   // la fel ca monede = monede - 1
monede *= 2;   // la fel ca monede = monede * 2
monede++;      // la fel ca monede = monede + 1
monede--;      // la fel ca monede = monede - 1

console.log(monede);
```

| Scurtătură | Ce face |
|------------|---------|
| `+=` | adaugă |
| `-=` | scade |
| `*=` | înmulțește |
| `++` | adaugă 1 |
| `--` | scade 1 |

După aceste rânduri, `monede` este: 0, apoi 3, 2, 4, 5, 4. Deci în consolă apare `4`.

**Încearcă tu (6 min)**  
- [ ] Creează `let scor = 0;` și adaugă 10, apoi 5, afișând scorul de fiecare dată  
- [ ] Folosește `++` de trei ori și `--` o dată  
- [ ] Prezice rezultatul pe foaie înainte să vezi rezultatul în consolă  

---

## 4. `const`: valori care nu se schimbă

### Exemplul 5 — Constante

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

**Gata când:**  
- [ ] Ai o constantă cu `const` și o variabilă cu `let` care se schimbă  
- [ ] Ai provocat eroarea „Assignment to constant variable” și ai citit mesajul  
- [ ] Poți explica ce alegi, `let` sau `const`, pentru scor și pentru numele jocului  

---

## 5. Nume bune

### Exemplul 6 — Cum alegi numele

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

**Încearcă tu (4 min)**  
- [ ] Scrie cinci nume bune pentru variabile (scor, vieți, numele jocului, nivelul, viteza)  
- [ ] Scrie două nume greșite și spune de ce nu merg  
- [ ] Verifică în consolă diferența dintre `scor` și `Scor`  

---

## 6. Mesaje cu variabile și tipuri

### Exemplul 7 — Lipim text cu valori

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
- **Cu semnul `` ` `` (backtick)**: scrii tot mesajul între semnele `` ` ``, iar variabilele le pui în `${…}`. Este mai ușor de citit. Semnul `` ` `` nu este ghilimea: este alt caracter, de pe tastatură (cere ajutor profesorului dacă nu găsești semnul).

### Exemplul 8 — Tipuri de valori

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

**Gata când:**  
- [ ] Ai un mesaj făcut cu `+` și unul făcut cu `` `${…}` ``  
- [ ] Ai o variabilă `true` sau `false`  
- [ ] Ai folosit `typeof` pentru trei valori diferite  

---

## 7. Proiectul

### Exemplul 9 — „Fișa unui personaj de joc”

Fișierul `index.html`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fișa unui personaj de joc</title>
</head>
<body>
  <h1>Fișa unui personaj de joc</h1>
  <p>Deschide consola (F12) ca să vezi fișa.</p>

  <script src="script.js"></script>
</body>
</html>
```

Fișierul `script.js`:

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

Rezultat (pe scurt): scorul crește de la 0 la 50, apoi la 70 (bonus 2 × 10), nivelul devine 2, iar viețile scad la 2.

Fă fișa cu **un personaj ales de tine** (un animal, un robot, un erou de poveste). Nu pune date personale.

**Gata când:**  
- [ ] Ai cel puțin 2 constante (`const`) și 4 variabile (`let`)  
- [ ] Ai folosit `+=`, `++` și `--`  
- [ ] Mesajele sunt făcute cu `${…}` sau cu `+`  
- [ ] Programul nu arată erori roșii în consolă  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Fișa unui personaj de joc” (obligatoriu)
În folderul `Prenume_Nume_W4_L2` ai `index.html` și `script.js`, cu:
- **minimum 2 constante** (`const`) și **minimum 4 variabile** (`let`), cu nume în camelCase;
- cel puțin un text, un număr, un număr cu zecimale și un `true`/`false`;
- cel puțin **un `+=`**, **un `++`** și **un `--`**;
- cel puțin **două mesaje** cu variabile (cu `+` sau cu `${…}`);
- un calcul care folosește două variabile;
- cel puțin două comentarii.

### Exercițiul B — Ce valoare are variabila?
Spune ce afișează programul: (1) `let a = 5; a = a + 2; console.log(a);` (2) `let b = 10; b -= 3; b *= 2; console.log(b);` (3) `let c = 1; c++; c++; c--; console.log(c);` (4) `const d = 4; console.log(d * d);`

### Exercițiul C — Scrie codul
Scrie codul care: (1) face o variabilă `vieti` cu valoarea 3 și o scade cu 1; (2) face o constantă `nume` cu textul „Luna” și afișează mesajul `Salut, Luna!` folosind variabila; (3) face o variabilă `pret` cu 20, o dublează și o afișează.

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile. Programul vrea să afișeze numele `Ana` și să nu mai schimbe valoarea lui `pi`.

```text
let 2jucatori = 5;
const pi = 3.14;
pi = 3.15;
let nume = "Ana";
console.log("nume");
```

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: ce este o variabilă? Care este diferența dintre `let` și `const`? De ce `console.log(scor)` și `console.log("scor")` afișează lucruri diferite?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W4_L2` are `index.html` și `script.js`  
- [ ] Programul rulează fără erori  
- [ ] Ai răspuns la exercițiile B–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Fă un „coș de cumpărături”: preț, cantitate și total (`pret * cantitate`)  
- [ ] Schimbă între ele valorile a două variabile, folosind o a treia variabilă ajutătoare  
- [ ] Calculează aria unui dreptunghi (`lungime * latime`) și perimetrul lui  
- [ ] Afișează `typeof` pentru o variabilă fără valoare (`let x;`) și spune ce observi  

---

## Greșeli frecvente
1. **Ai scris `let` de două ori** pentru aceeași variabilă — apare o eroare („already been declared”). `let` se scrie o singură dată.  
2. **Ai încercat să schimbi un `const`** — `Assignment to constant variable`. Dacă se schimbă, folosește `let`.  
3. **Ai pus ghilimele în jurul numelui variabilei** — `"nume"` este text, `nume` este variabila.  
4. **Ai scris nume cu spațiu** (`scor maxim`) — folosește `scorMaxim`.  
5. **Numele începe cu o cifră** (`2jucatori`) — nu merge.  
6. **Ai amestecat literele mari și mici** (`Scor` în loc de `scor`) — „is not defined”.  
7. **Ai scris zecimalele cu virgulă** (`12,5`) — folosește punctul: `12.5`.  
8. **Ai uitat spațiile la lipirea textului cu `+`** — mesajul apare lipit: `Bună,Ana`.  
9. **Ai scris `${nume}` între ghilimele obișnuite** — merge doar între semnele `` ` ``.  
10. **Ai folosit o variabilă înainte să creezi variabila** — creează variabila mai sus în fișier.  

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
Scrie un program „Magazinul meu de jocuri”: o constantă cu numele magazinului, variabile pentru prețul unui joc și numărul de jocuri cumpărate, calculul totalului și un mesaj final cu toate valorile. Salvează în `Prenume_Nume_W4_L2`.

## Ce urmează — Lecția 3
Învățăm mai multe despre **numere, text și calcule**: restul împărțirii, rotunjiri, lungimea unui text, litere mari și mici, și cum primim date de la utilizator.

---

## Răspunsuri
- **Quiz scurt:** (1) creează o variabilă numită `scor` și pune în ea valoarea `0`; (2) când valoarea nu se schimbă (de exemplu numele jocului); (3) afișează textul `scor`, nu valoarea variabilei; (4) mărește valoarea lui `scor` cu 1; (5) `boolean` (adevărat/fals).  
- **Exercițiul B:** (1) `7`; (2) `14` (10 − 3 = 7, apoi 7 × 2); (3) `2` (1, 2, 3, apoi 2); (4) `16`.  
- **Exercițiul C:** (1) `let vieti = 3; vieti--;` (sau `vieti -= 1;`); (2) `const nume = "Luna"; console.log("Salut, " + nume + "!");` sau `` console.log(`Salut, ${nume}!`); ``; (3) `let pret = 20; pret *= 2; console.log(pret);`.  
- **Exercițiul D:** (1) `2jucatori` începe cu o cifră (de exemplu `jucatori2`); (2) `pi` este `const` și nu poate fi schimbat (se șterge linia `pi = 3.15;`); (3) `console.log("nume")` afișează cuvântul `nume`; trebuie `console.log(nume)`.  
- **Exercițiul E:** variabila este o cutie cu nume care ține o valoare; `let` pentru valori care se schimbă, `const` pentru valori care nu se schimbă; cu ghilimele este text, fără ghilimele este variabila.  
- **Notă pentru profesor:** unii elevi nu găsesc semnul `` ` `` pe tastatură: arătați elevilor tasta sau lăsați elevii să folosească metoda cu `+` până se obișnuiesc. Pentru comparația cu „cutia”, desenați pe tablă cutii cu etichete. Insistați pe faptul că `=` este „pune în”, nu „este egal cu”: confuzia cu matematica îi încurcă mult. Nu cereți numere mari sau date personale la „fișa personajului”.
