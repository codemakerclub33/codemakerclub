# LECȚIA 7 — Funcții
**Modulul 4 · JavaScript pentru începători · 2 ore**  
**Code Maker Club · JavaScript Starter**

> Ai observat că unele lucruri le scrii de mai multe ori: aruncarea unui zar, un mesaj de salut, un calcul. O **funcție** este o bucată de cod căreia îi dai un **nume**. O scrii o singură dată, apoi o **chemi** de câte ori vrei, ca pe o rețetă pe care o folosești iar și iar. Azi înveți să scrii și să folosești funcții.  
> Proiect: **„Trusa mea de unelte”** · folder: `Prenume_Nume_W4_L7` (ex. `Ana_Pop_W4_L7`)

---

## Obiectiv
La finalul orei știi să scrii o funcție cu `function`, să chemi funcția, să dai valori (parametri), să primești un rezultat înapoi cu `return`, să faci diferența dintre a afișa și a returna și să alegi nume bune pentru funcții.  
**Minim:** o funcție `salut(nume)` pe care o chemi de două ori cu nume diferite.  
**Ținta orei (Complet):** + o funcție care calculează și returnează un rezultat, o funcție `zar()`, o funcție cu `if`, o funcție care o cheamă pe alta și explicarea diferenței dintre `console.log` și `return`.

## De ce contează
Funcțiile fac programele **mai scurte**, **mai ușor de citit** și **mai ușor de reparat**: dacă schimbi regula zarului într-un singur loc, se schimbă peste tot. Toate programele mari sunt făcute din funcții mici.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–35 | Prima funcție: scriem și chemăm (**Exemplele 1–2**) |
| 35–55 | Parametri: dăm valori funcției (**Exemplul 3**) |
| 55–80 | `return`: primim un rezultat (**Exemplele 4–5**) |
| 80–95 | Funcții cu decizii și funcții care cheamă funcții (**Exemplele 6–7**) |
| 95–115 | Proiect (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- `while` repetă cât timp condiția este adevărată și trebuie să aibă un pas care o oprește;
- `break` iese dintr-o buclă, iar `continue` sare peste restul rundei;
- `for` se folosește când știi de câte ori, `while` când repeți până se întâmplă ceva;
- `Math.floor(Math.random() * 6) + 1` este un zar.

**Încearcă tu (4 min)**  
- [ ] Creează folderul `Prenume_Nume_W4_L7` cu `index.html` (scheletul complet, cu `<script src="script.js"></script>` înainte de `</body>`) și `script.js`  
- [ ] Pune în `<body>` un `<h1>` cu textul „Funcții”  
- [ ] În `script.js` aruncă un zar de două ori, scriind de două ori formula și observă cât de mult te repeți  

> De aici înainte, exemplele arată ce scrii în `script.js`.

---

## 2. Prima funcție

### Exemplul 1 — Scriem o funcție

```javascript
function spuneSalut() {
  console.log("Salut!");
  console.log("Bine ai venit pe pagina mea.");
}
```

Dacă rulezi doar acest cod, **nu se întâmplă nimic**: funcția este doar **rețeta scrisă**, încă nu a fost „gătită”. Părțile ei:
- `function`: spune „fac o funcție nouă”;  
- `spuneSalut`: **numele** ei (camelCase, de obicei un verb);  
- `()`: paranteze (acum goale);  
- `{ … }`: **corpul**: ce face funcția.

### Exemplul 2 — Chemăm funcția

```javascript
function spuneSalut() {
  console.log("Salut!");
  console.log("Bine ai venit pe pagina mea.");
}

spuneSalut();
spuneSalut();
```

Rezultat: mesajul apare **de două ori**.

`spuneSalut();` se numește **apelare** (sau „chemare”): numele funcției, urmat de paranteze. **Fără paranteze** (`spuneSalut;`), funcția nu pornește. Poți chema aceeași funcție de zece ori, scriind codul o singură dată.

**Gata când:**  
- [ ] Ai scris o funcție cu `function` și un nume bun  
- [ ] Ai chemat funcția de cel puțin două ori, cu paranteze  
- [ ] Poți spune diferența dintre a scrie o funcție și a o chema  

---

## 3. Parametri

### Exemplul 3 — Dăm valori funcției

```javascript
function salut(nume) {
  console.log(`Salut, ${nume}! Bine ai venit.`);
}

salut("Ana");
salut("Rex");
salut("Pisica Luna");
```

Rezultat:

```text
Salut, Ana! Bine ai venit.
Salut, Rex! Bine ai venit.
Salut, Pisica Luna! Bine ai venit.
```

`nume` este un **parametru**: o „cutie” care primește o valoare **la fiecare apelare**. Valoarea pe care o dai (`"Ana"`) se numește **argument**. Funcția este aceeași, dar rezultatul se schimbă.

Poți avea mai mulți parametri, separați prin virgulă:

```javascript
function prezinta(animal, varsta) {
  console.log(`${animal} are ${varsta} ani.`);
}

prezinta("Rex", 3);
prezinta("Luna", 5);
```

**Ordinea contează**: primul argument intră în primul parametru, al doilea în al doilea.

Un parametru poate avea o **valoare de rezervă**, folosită dacă nu dai nimic:

```javascript
function salut(nume = "prietene") {
  console.log(`Salut, ${nume}!`);
}

salut("Ana");   // Salut, Ana!
salut();        // Salut, prietene!
```

**Încearcă tu (6 min)**  
- [ ] Scrie o funcție `prezintaJoc(nume, nota)` care afișează un mesaj  
- [ ] Cheamă funcția pentru trei jocuri diferite  
- [ ] Adaugă o valoare de rezervă pentru un parametru  

---

## 4. `return`: primim un rezultat

### Exemplul 4 — `return`

```javascript
function aduna(a, b) {
  return a + b;
}

let rezultat = aduna(2, 3);
console.log(rezultat);          // 5
console.log(aduna(10, 20) * 2); // 60
```

`return` **trimite o valoare înapoi** acolo unde ai chemat funcția. Locul apelului `aduna(2, 3)` devine valoarea `5`, pe care o poți pune într-o variabilă, o poți afișa sau o poți folosi în alt calcul. Când programul ajunge la `return`, **funcția se termină** pe loc: ce este scris după `return` nu se mai execută.

### Exemplul 5 — `console.log` sau `return`?

Greșeala frecventă de început:

```javascript
function aduna(a, b) {
  console.log(a + b);   // doar AFIȘEAZĂ
}

let rezultat = aduna(2, 3);   // afișează 5 în consolă
console.log(rezultat * 2);    // undefined * 2 → NaN
```

În acest caz funcția **afișează** rezultatul, dar **nu îl dă înapoi**. De aceea `rezultat` conține `undefined` (nimic), iar calculul dă `NaN`. Comparație:

| | `console.log(…)` | `return …` |
|---|------------------|------------|
| Ce face | **arată** ceva în consolă | **dă o valoare înapoi** |
| Poți folosi rezultatul mai departe? | **nu** | **da** |
| Când | pentru a afișa, la final | când vrei să **calculezi** și să folosești rezultatul |

Regula: dacă funcția **calculează** ceva, **returnează**; afișarea o faci de obicei **în afara** funcției, la apel.

**Gata când:**  
- [ ] Ai o funcție cu `return` folosită într-un calcul  
- [ ] Ai demonstrat de ce `console.log` în loc de `return` dă `NaN` când folosești rezultatul  
- [ ] Poți explica diferența dintre `console.log` și `return`  

---

## 5. Funcții cu decizii și funcții care cheamă funcții

### Exemplul 6 — O funcție care decide

```javascript
function estePar(numar) {
  if (numar % 2 === 0) {
    return true;
  }
  return false;
}

console.log(estePar(8));  // true
console.log(estePar(7));  // false

if (estePar(12)) {
  console.log("12 este par");
}
```

Funcția primește un număr și returnează `true` sau `false`. Observă că nu avem nevoie de `else`: dacă `if` este adevărat, `return` termină funcția; altfel ajungem la al doilea `return`. Numele funcțiilor care răspund „da/nu” încep de obicei cu `este…` sau `are…`.

Mai scurt: `return numar % 2 === 0;` face același lucru, pentru că expresia este deja `true` sau `false`.

### Exemplul 7 — Funcții care folosesc alte funcții

```javascript
function zar() {
  return Math.floor(Math.random() * 6) + 1;
}

function aruncaDouaZaruri() {
  const z1 = zar();
  const z2 = zar();
  console.log(`Zaruri: ${z1} și ${z2}. Suma: ${z1 + z2}`);
  if (z1 === z2) {
    console.log("Dublă! Mai arunci o dată!");
  }
}

aruncaDouaZaruri();
aruncaDouaZaruri();
```

`aruncaDouaZaruri` folosește funcția `zar` de două ori. Dacă ai vrea un zar cu 8 fețe, ai schimba **un singur loc**. Programele mari se construiesc așa: **funcții mici**, fiecare cu o treabă, care se combină.

**O observație despre variabile:** o variabilă creată **înăuntrul** unei funcții (`z1`, `z2`) există **numai acolo**. În afara funcției nu o poți folosi. Se numește variabilă **locală**. De aceea funcțiile **returnează** rezultatele, ca să ajungă afară.

**Încearcă tu (8 min)**  
- [ ] Scrie o funcție `dublu(x)` care returnează dublul numărului  
- [ ] Scrie o funcție `esteMare(numar)` care returnează `true` dacă numărul este peste 100  
- [ ] Scrie o funcție `monedaCapPajura()` care returnează „cap” sau „pajură”  

---

## 6. Proiectul

### Exemplul 8 — „Trusa mea de unelte”

Fișierul `index.html`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Trusa mea de unelte</title>
</head>
<body>
  <h1>Trusa mea de unelte</h1>
  <p>Deschide consola (F12) ca să vezi uneltele în acțiune.</p>

  <script src="script.js"></script>
</body>
</html>
```

Fișierul `script.js`:

```javascript
// ---- Uneltele (funcțiile) ----

// Un mesaj de salut
function salut(nume = "prietene") {
  console.log(`Salut, ${nume}! Bine ai venit în trusa mea.`);
}

// Un zar cu un număr de fețe la alegere
function zar(fete = 6) {
  return Math.floor(Math.random() * fete) + 1;
}

// Media a trei numere
function medie(a, b, c) {
  return (a + b + c) / 3;
}

// Este numărul par?
function estePar(numar) {
  return numar % 2 === 0;
}

// Un titlu cu chenar din steluțe
function titlu(text) {
  const linie = "*".repeat(text.length + 4);
  console.log(linie);
  console.log(`* ${text} *`);
  console.log(linie);
}

// ---- Folosim uneltele ----

titlu("Trusa mea de unelte");

salut("Ana");
salut();

console.log("Zar cu 6 fețe:", zar());
console.log("Zar cu 20 de fețe:", zar(20));

console.log("Media lui 7, 8 și 10 este:", medie(7, 8, 10).toFixed(2));

const numarZar = zar();
if (estePar(numarZar)) {
  console.log(`Zarul ${numarZar} este par.`);
} else {
  console.log(`Zarul ${numarZar} este impar.`);
}
```

Adaugă **cel puțin două funcții ale tale**, de exemplu `esteMajor(varsta)` sau `convertesteInEuro(lei)`. Nu pune **date personale** în mesaje.

**Gata când:**  
- [ ] Ai cel puțin 5 funcții, dintre care cel puțin una cu valoare de rezervă  
- [ ] Cel puțin două funcții folosesc `return`  
- [ ] Funcțiile sunt chemate cu argumente diferite  
- [ ] Nu apar erori roșii în consolă  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Trusa mea de unelte” (obligatoriu)
În folderul `Prenume_Nume_W4_L7` ai `index.html` și `script.js`, cu:
- **minimum 5 funcții**, cu nume care spun clar ce face funcția (în camelCase);
- cel puțin una cu **mai mulți parametri** și una cu **valoare de rezervă**;
- cel puțin două funcții care **returnează** un rezultat și o funcție care **decide** (returnează `true`/`false`);
- o funcție care **cheamă altă funcție**;
- chemări cu argumente diferite;
- cod indentat și cel puțin două comentarii.

### Exercițiul B — Ce afișează programul?
Spune ce afișează: (1) `function f(x) { return x * 3; } console.log(f(4));` (2) `function g(a, b) { return a - b; } console.log(g(10, 4));` (3) `function h() { console.log("A"); return 5; console.log("B"); } console.log(h());` (4) `function k(n = 2) { return n * n; } console.log(k(), k(5));`

### Exercițiul C — Scrie codul
Scrie codul pentru funcțiile: (1) `patrat(x)` care returnează `x` înmulțit cu el însuși; (2) `esteMajor(varsta)` care returnează `true` dacă `varsta` este cel puțin 18; (3) `repetaText(text, ori)` care returnează textul repetat (folosește `repeat`).

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile.

```text
function aduna(a, b) {
  console.log(a + b);
}
let rezultat = aduna(2, 3);
console.log(rezultat * 2);

function salut(nume) {
  console.log("Salut, " + nume);
}
salut;

function patrat(x) {
  return x * x;
}
console.log(patrat());
```

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: ce este o funcție și de ce o folosim? Care este diferența dintre parametru și argument? Ce diferență este între `console.log` și `return`?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W4_L7` are `index.html` și `script.js`  
- [ ] Programul rulează fără erori  
- [ ] Ai răspuns la exercițiile B–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Scrie o funcție `maximDintreTrei(a, b, c)` care returnează cel mai mare număr (fără `Math.max`)  
- [ ] Rescrie jocul „Ghicește numărul” din lecția 6 cu funcții: `alegeNumar()`, `citesteIncercare()`, `dauIndiciu(incercare, secret)`  
- [ ] Scrie o funcție `factorial(n)` cu o buclă `for` (ex. `factorial(5)` este 120)  
- [ ] Încearcă și scrierea scurtă: `const dublu = (x) => x * 2;` și compară varianta cu cea făcută cu `function`  

---

## Greșeli frecvente
1. **Ai uitat parantezele la apelare** — `salut;` nu pornește funcția; scrie `salut();`.  
2. **Ai scris `console.log` în loc de `return`** — nu poți folosi rezultatul (`undefined` sau `NaN`).  
3. **Ai pus cod după `return`** — nu se mai execută niciodată.  
4. **Ai uitat un argument** — parametrul devine `undefined`, iar calculul dă `NaN`.  
5. **Ai pus argumentele în altă ordine** decât parametrii.  
6. **Ai folosit o variabilă din interiorul funcției în afara ei** — este locală („is not defined”).  
7. **Ai scris două funcții cu același nume** — se folosește ultima.  
8. **Nume neclar** (`f`, `x`) — alege nume care spun ce face funcția.  
9. **Ai dat prea multe sau prea puține argumente** — verifică numărul de parametri.  
10. **Ai uitat acoladele** funcției.  

---

## Recapitulare pe scurt
1. `function nume(parametri) { … }` scrie funcția; `nume(argumente);` o cheamă.  
2. Parametrul primește o valoare nouă la fiecare apelare; poate avea valoare de rezervă.  
3. `return` trimite o valoare înapoi și încheie funcția.  
4. `console.log` doar arată; `return` dă rezultatul mai departe.  
5. Funcțiile care răspund „da/nu” returnează `true` sau `false`.  
6. Variabilele din interiorul unei funcții sunt locale; funcțiile mici se combină.

## Quiz scurt
- Ce face `function`?  
- Cum chemi o funcție?  
- Ce este un parametru?  
- Ce face `return`?  
- De ce nu putem folosi o variabilă creată într-o funcție în afara ei?

## Temă
Scrie funcțiile pentru un mini-magazin de jocuri: `pretCuReducere(pret, procent)`, `totalCos(pret, cantitate)` și `arataFactura(nume, total)`; folosește funcțiile într-un program. Salvează în `Prenume_Nume_W4_L7`.

## Ce urmează — Lecția 8
Învățăm **listele și obiectele**: liste ca să ții **mai multe valori** într-o variabilă, ca un raft cu cutii numerotate, și obiecte ca să ții informațiile despre un lucru într-o fișă cu etichete.

---

## Răspunsuri pentru profesor
- **Quiz scurt:** (1) `function` spune „fac o funcție nouă”, adică o bucată de cod cu nume; (2) scrii numele ei urmat de paranteze, de exemplu `spuneSalut();`; (3) o „cutie” din definiția funcției, care primește o valoare nouă la fiecare apelare; (4) trimite o valoare înapoi acolo unde a fost chemată funcția și încheie funcția; (5) pentru că este variabilă locală: există numai înăuntrul funcției, de aceea funcția își returnează rezultatul.  
- **Exercițiul B:** (1) `12`; (2) `6`; (3) afișează `A`, apoi `5` (funcția se oprește la `return`, deci `B` nu apare); (4) `4 25`.  
- **Exercițiul C:** (1) `function patrat(x) { return x * x; }`; (2) `function esteMajor(varsta) { return varsta >= 18; }`; (3) `function repetaText(text, ori) { return text.repeat(ori); }`.  
- **Exercițiul D:** (1) funcția `aduna` afișează în loc să returneze (trebuie `return a + b;`); (2) `salut;` nu cheamă funcția (trebuie `salut("Ana");`); (3) `patrat()` fără argument dă `NaN` (trebuie `patrat(4)`).  
- **Exercițiul E:** funcția este o bucată de cod cu nume, scrisă o dată și folosită de mai multe ori; parametrul este „cutia” din definiție, argumentul este valoarea pe care o dai la apel; `console.log` afișează, `return` dă valoarea înapoi.  
- **Notă pentru profesor:** pentru parametri și argumente, o analogie bună este „cutia de suc”: parametrul este locul gol, argumentul este sucul care intră. Pentru `return`, folosiți un automat de bomboane: bagi banii (argumentele) și primești bomboana (valoarea returnată). Pentru Exemplul 8, cereți elevilor să aleagă mai întâi pe foaie cele două funcții noi, apoi să le scrie.
