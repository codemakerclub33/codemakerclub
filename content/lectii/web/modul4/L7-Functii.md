# LECȚIA 7 — Trusa de unelte
### Funcții
**Modulul 4 · JavaScript pentru începători · 2 ore**  
**Code Maker Club · JavaScript Starter**

> Ai observat că unele lucruri le scrii de mai multe ori: aruncarea unui zar, un mesaj de salut, un calcul. O **funcție** este o bucată de cod căreia îi dai un **nume**. O scrii o singură dată, apoi o **chemi** de câte ori vrei, ca pe o rețetă pe care o folosești iar și iar. Azi înveți să scrii și să folosești funcții.  
> Proiect: **„Trusa de unelte”** · folder: `Prenume_Nume_W4_L7` (ex. `Ana_Pop_W4_L7`)

---

## Ce facem azi
La final ai o trusă de unelte: cel puțin cinci funcții mici (un salut, un zar, o medie, o verificare și un titlu cu chenar) pe care le chemi cu valori diferite. Știi să scrii o funcție cu `function`, să o chemi, să-i dai valori (parametri), să primești un rezultat înapoi cu `return`, să faci diferența dintre a afișa și a returna și să alegi nume bune. Funcțiile fac programele mai scurte, mai ușor de citit și mai ușor de reparat: dacă schimbi regula zarului într-un singur loc, se schimbă peste tot. Toate programele mari sunt făcute din funcții mici.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare · pornim proiectul |
| 10–25 | Prima funcție: scriem și chemăm (**Exemplul 1**) |
| 25–40 | Parametri: dăm valori funcției (**Exemplul 2**) |
| 40–50 | Valoare de rezervă (**Exemplul 3**) |
| 50–62 | `return`: primim un rezultat (**Exemplul 4**) |
| 62–72 | `console.log` sau `return`? (**Exemplul 5**) |
| 72–82 | O funcție care decide (**Exemplul 6**) |
| 82–92 | Funcții care cheamă funcții (**Exemplul 7**) |
| 92–115 | Mini-proiect: trusa de unelte (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `function nume() { … }` | Scrie o funcție | `function salut() { … }` |
| `nume();` | Cheamă (apelează) funcția | `salut();` |
| `function nume(parametru)` | Primește o valoare la fiecare apel | `function salut(nume)` |
| `parametru = valoare` | Valoare de rezervă | `function zar(fete = 6)` |
| `return` | Trimite o valoare înapoi și încheie funcția | `return a + b;` |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- `while` repetă cât timp condiția este adevărată și trebuie să aibă un pas care o oprește;
- `break` iese dintr-o buclă, iar `continue` sare peste restul rundei;
- `for` se folosește când știi de câte ori, `while` când repeți până se întâmplă ceva;
- `Math.floor(Math.random() * 6) + 1` este un zar.

**Încearcă tu (8 min)**  
- [ ] Creează folderul `Prenume_Nume_W4_L7` ca o **copie** a folderului `Prenume_Nume_W4_L6` (cu `tema.html`, `script.js`, `stil.css`, `imagini`, `media`)  
- [ ] Șterge din `script.js` jocul de la lecția trecută (sau comentează-l cu `/* … */`)  
- [ ] Aruncă un zar de două ori, scriind de două ori formula, și observă cât de mult te repeți  
- [ ] Alege din articolul tău un titlu, un an și un număr (de exemplu câte imagini ai)  

> De aici înainte, exemplele arată ce scrii în `script.js`.

---

## 2. Prima funcție

### Exemplul 1 — Scriem și chemăm o funcție

```javascript
function spuneSalut() {
  console.log("Salut!");
  console.log("Bine ai venit pe pagina mea.");
}

spuneSalut();
spuneSalut();
```

Rezultat: mesajul apare **de două ori**.

Primele patru rânduri **scriu** funcția: sunt doar **rețeta**, încă nu a fost „gătită”. Dacă ai rula doar ele, **nu s-ar întâmpla nimic**. Părțile ei:
- `function`: spune „fac o funcție nouă”;  
- `spuneSalut`: **numele** ei (camelCase, de obicei un verb);  
- `()`: paranteze (acum goale);  
- `{ … }`: **corpul**: ce face funcția.

`spuneSalut();` se numește **apelare** (sau „chemare”): numele funcției, urmat de paranteze. **Fără paranteze** (`spuneSalut;`), funcția nu pornește. Poți chema aceeași funcție de zece ori, scriind codul o singură dată.

**Încearcă tu (8 min)**  
- [ ] Scrie o funcție `arataTitlul()` care afișează titlul articolului tău, de două ori  
- [ ] Cheam-o de trei ori  
- [ ] Scoate parantezele de la un apel și vezi că nu se mai întâmplă nimic  
- [ ] Spune diferența dintre a scrie o funcție și a o chema  

**Gata când:**  
- [ ] Ai scris o funcție cu `function` și un nume bun  
- [ ] Ai chemat funcția de cel puțin două ori, cu paranteze  
- [ ] Poți spune diferența dintre a scrie o funcție și a o chema  

---

## 3. Parametri

### Exemplul 2 — Dăm valori funcției

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

**Încearcă tu (8 min)**  
- [ ] Scrie o funcție `prezintaJoc(nume, nota)` care afișează un mesaj  
- [ ] Cheam-o pentru trei jocuri diferite  
- [ ] Scrie o funcție `prezintaArticol(titlu, an)` cu datele din articolul tău  
- [ ] Dă argumentele în altă ordine și vezi ce iese  

### Exemplul 3 — Valoare de rezervă

Un parametru poate avea o **valoare de rezervă**, folosită dacă nu dai nimic:

```javascript
function felicita(nume = "campionule") {
  console.log(`Bravo, ${nume}!`);
}

felicita("Ana");   // Bravo, Ana!
felicita();        // Bravo, campionule!
```

Dacă dai un argument, funcția îl folosește; dacă nu dai nimic, folosește valoarea de după `=`.

**Încearcă tu (6 min)**  
- [ ] Scrie o funcție cu un parametru care are valoare de rezervă  
- [ ] Cheam-o o dată cu argument și o dată fără  
- [ ] Fă o funcție cu doi parametri, unde doar al doilea are valoare de rezervă  
- [ ] Spune ce se întâmplă dacă pui valoarea de rezervă înaintea unui parametru fără valoare  

**Gata când:**  
- [ ] Ai o funcție cu cel puțin doi parametri  
- [ ] Ai o funcție cu valoare de rezervă, chemată cu și fără argument  
- [ ] Poți spune diferența dintre parametru și argument  

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

**Încearcă tu (6 min)**  
- [ ] Scrie o funcție `dublu(x)` care returnează dublul numărului  
- [ ] Folosește rezultatul într-un alt calcul, fără să-l pui întâi într-o variabilă  
- [ ] Scrie o funcție `varstaArticol(an)` care returnează câți ani au trecut de la anul din articol până în 2026  
- [ ] Pune un `console.log` după `return` și vezi că nu se afișează  

### Exemplul 5 — `console.log` sau `return`?

Greșeala frecventă de început:

```javascript
function adunaGresit(a, b) {
  console.log(a + b);   // doar AFIȘEAZĂ
}

let rezultat = adunaGresit(2, 3);   // afișează 5 în consolă
console.log(rezultat * 2);          // undefined * 2 → NaN
```

În acest caz funcția **afișează** rezultatul, dar **nu îl dă înapoi**. De aceea `rezultat` conține `undefined` (nimic), iar calculul dă `NaN`. Comparație:

| | `console.log(…)` | `return …` |
|---|------------------|------------|
| Ce face | **arată** ceva în consolă | **dă o valoare înapoi** |
| Poți folosi rezultatul mai departe? | **nu** | **da** |
| Când | pentru a afișa, la final | când vrei să **calculezi** și să folosești rezultatul |

Regula: dacă funcția **calculează** ceva, **returnează**; afișarea o faci de obicei **în afara** funcției, la apel.

**Încearcă tu (6 min)**  
- [ ] Rulează exemplul de mai sus și citește rezultatul `NaN`  
- [ ] Repară funcția ca să folosească `return`  
- [ ] Scrie o funcție care afișează un mesaj (fără `return`) și una care calculează (cu `return`)  
- [ ] Explică cu voce tare când alegi `console.log` și când `return`  

**Gata când:**  
- [ ] Ai o funcție cu `return` folosită într-un calcul  
- [ ] Ai demonstrat de ce `console.log` în loc de `return` dă `NaN` când folosești rezultatul  
- [ ] Poți explica diferența dintre `console.log` și `return`  

---

## 5. Funcții care decid și funcții care cheamă funcții

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

**Încearcă tu (6 min)**  
- [ ] Scrie o funcție `esteMare(numar)` care returnează `true` dacă numărul este peste 100  
- [ ] Scrie o funcție `esteMajor(varsta)` și folosește-o într-un `if`  
- [ ] Scrie o funcție `esteVechi(an)` pentru anul din articol (de exemplu înainte de 2000)  
- [ ] Rescrie una dintre ele cu un singur `return`  

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
- [ ] Scrie o funcție `monedaCapPajura()` care returnează „cap” sau „pajură”  
- [ ] Scrie o funcție care o cheamă pe prima de trei ori și afișează rezultatele  
- [ ] Încearcă să afișezi `z1` în afara funcției `aruncaDouaZaruri` și citește eroarea  
- [ ] Scrie o funcție care folosește altă funcție de-a ta, pe tema articolului  

**Gata când:**  
- [ ] Ai o funcție care returnează `true` sau `false`  
- [ ] Ai o funcție care cheamă altă funcție de-a ta  
- [ ] Știi de ce o variabilă locală nu se vede în afara funcției  

---

## 6. Mini-proiect: toate la un loc

### Exemplul 8 — „Trusa de unelte”

Iată programul-model. `tema.html` rămâne cum este; în `script.js` scrii:

```javascript
// ---- Uneltele (funcțiile) ----

// Un mesaj de întâmpinare
function intampina(nume = "prietene") {
  console.log(`Ai ajuns în trusa mea, ${nume}!`);
}

// Un zar cu un număr de fețe la alegere
function zarCuFete(fete = 6) {
  return Math.floor(Math.random() * fete) + 1;
}

// Media a trei numere
function medie(a, b, c) {
  return (a + b + c) / 3;
}

// Este litera o vocală?
function esteVocala(litera) {
  return "aeiou".includes(litera.toLowerCase());
}

// Un titlu cu chenar din steluțe
function titlu(text) {
  const linie = "*".repeat(text.length + 4);
  console.log(linie);
  console.log(`* ${text} *`);
  console.log(linie);
}

// ---- Folosim uneltele ----

titlu("Trusa de unelte");

intampina("Ana");
intampina();

console.log("Zar cu 6 fețe:", zarCuFete());
console.log("Zar cu 20 de fețe:", zarCuFete(20));

console.log("Media lui 7, 8 și 10 este:", medie(7, 8, 10).toFixed(2));

const prima = "Delfin"[0];
if (esteVocala(prima)) {
  console.log(`${prima} este vocală.`);
} else {
  console.log(`${prima} este consoană.`);
}
```

Adaugă **cel puțin două funcții ale tale**, de exemplu `esteMajor(varsta)` sau `convertesteInEuro(lei)`. Nu pune **date personale** în mesaje.

**Încearcă tu (14 min)**  
- [ ] Scrie programul în `script.js`, cu funcțiile tale, nu copiat  
- [ ] Adaugă două funcții noi, cu date din articolul tău (de exemplu `varstaArticol(an)` și un titlu cu chenar pentru subiect)  
- [ ] Cheam-o pe fiecare cu argumente diferite  
- [ ] Citește programul rând cu rând și spune care funcții returnează și care doar afișează  

**Gata când:**  
- [ ] Ai cel puțin 5 funcții, dintre care cel puțin una cu valoare de rezervă  
- [ ] Cel puțin două funcții folosesc `return`  
- [ ] Funcțiile sunt chemate cu argumente diferite  
- [ ] Nu apar erori roșii în consolă  

---

## De făcut azi — „Trusa de unelte”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | `script.js` cu o funcție `salut(nume)` pe care o chemi de două ori cu nume diferite |
| **Complet** | Minim + cel puțin 5 funcții cu nume în camelCase, una cu mai mulți parametri și una cu valoare de rezervă, cel puțin două funcții cu `return`, o funcție care returnează `true`/`false`, o funcție care cheamă altă funcție, apeluri cu argumente diferite, cod indentat și două comentarii |

### Pasul 1 — Minim
În folderul `Prenume_Nume_W4_L7`:

- [ ] Ai `tema.html` (cu `<script>` legat), `script.js` și `stil.css`  
- [ ] Ai o funcție `salut(nume)` cu parametru  
- [ ] O chemi de două ori cu nume diferite  

### Pasul 2 — Complet
- [ ] Ai minimum 5 funcții, cu nume care spun ce fac  
- [ ] Ai una cu mai mulți parametri și una cu valoare de rezervă  
- [ ] Ai cel puțin două funcții care returnează un rezultat și una care returnează `true`/`false`  
- [ ] Ai o funcție care cheamă altă funcție  
- [ ] Ai chemat funcțiile cu argumente diferite  
- [ ] Codul este indentat și are cel puțin două comentarii  

---

## Bonus ★★★ — Provocare: Funcții în joc
*Doar dacă ai terminat Complet.*

Faci funcții mai grele, cu decizii și bucle.

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
5. **Ai pus argumentele în altă ordine** decât parametrii, sau ai dat prea multe ori prea puține.  
6. **Ai folosit o variabilă din interiorul funcției în afara ei** — este locală („is not defined”).  
7. **Nume neclar sau repetat** — `f` și `x` nu spun nimic, iar dacă scrii două funcții cu același nume se folosește ultima.  
8. **Ai uitat acoladele sau parantezele** funcției.  

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
1. Termină `Prenume_Nume_W4_L7` (Minim, apoi Complet).  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — O funcție în altă funcție.**

```javascript
function inmulteste(a, b) {
  return a * b;
}
console.log(inmulteste(inmulteste(2, 3), 4));
```

Afișează `24`: `inmulteste(2, 3)` dă `6`, apoi `inmulteste(6, 4)` dă `24`. Un apel poate fi chiar argumentul altui apel. Încearcă și `inmulteste(inmulteste(2, 2), inmulteste(3, 3))`.

**Acasă 2 — Mai multe `return`.**

```javascript
function calificativ(nota) {
  if (nota >= 9) {
    return "Excelent";
  }
  if (nota >= 5) {
    return "Bine";
  }
  return "Mai încearcă";
}

console.log(calificativ(10), calificativ(6), calificativ(2));
```

Afișează `Excelent Bine Mai încearcă`: funcția se oprește la primul `return` care se potrivește. Adaugă o treaptă pentru „Foarte bine” (între 7 și 8).

4. **Încă patru exerciții (B–E):**

**B — Ce afișează programul?** Spune ce afișează: (1) `function f(x) { return x * 3; } console.log(f(4));` (2) `function g(a, b) { return a - b; } console.log(g(10, 4));` (3) `function h() { console.log("A"); return 5; console.log("B"); } console.log(h());` (4) `function k(n = 2) { return n * n; } console.log(k(), k(5));`

**C — Scrie codul.** Scrie codul pentru funcțiile: (1) `patrat(x)` care returnează `x` înmulțit cu el însuși; (2) `esteMajor(varsta)` care returnează `true` dacă `varsta` este cel puțin 18; (3) `repetaText(text, ori)` care returnează textul repetat (folosește `repeat`).

**D — Găsește greșelile.** Găsește **3 greșeli** în codul de mai jos și repară greșelile.

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

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: ce este o funcție și de ce o folosim? Care este diferența dintre parametru și argument? Ce diferență este între `console.log` și `return`?

## Ce urmează — Lecția 8
Învățăm **listele și obiectele**: liste ca să ții **mai multe valori** într-o variabilă, ca un raft cu cutii numerotate, și obiecte ca să ții informațiile despre un lucru într-o fișă cu etichete.

---

## Răspunsuri
- **Quiz scurt:** (1) `function` spune „fac o funcție nouă”, adică o bucată de cod cu nume; (2) scrii numele ei urmat de paranteze, de exemplu `spuneSalut();`; (3) o „cutie” din definiția funcției, care primește o valoare nouă la fiecare apelare; (4) trimite o valoare înapoi acolo unde a fost chemată funcția și încheie funcția; (5) pentru că este variabilă locală: există numai înăuntrul funcției, de aceea funcția își returnează rezultatul.  
- **Tema, exercițiul B:** (1) `12`; (2) `6`; (3) afișează `A`, apoi `5` (funcția se oprește la `return`, deci `B` nu apare); (4) `4 25`.  
- **Tema, exercițiul C:** (1) `function patrat(x) { return x * x; }`; (2) `function esteMajor(varsta) { return varsta >= 18; }`; (3) `function repetaText(text, ori) { return text.repeat(ori); }`.  
- **Tema, exercițiul D:** (1) funcția `aduna` afișează în loc să returneze (trebuie `return a + b;`); (2) `salut;` nu cheamă funcția (trebuie `salut("Ana");`); (3) `patrat()` fără argument dă `NaN` (trebuie `patrat(4)`).  
- **Tema, exercițiul E:** funcția este o bucată de cod cu nume, scrisă o dată și folosită de mai multe ori; parametrul este „cutia” din definiție, argumentul este valoarea pe care o dai la apel; `console.log` afișează, `return` dă valoarea înapoi.  
- **Bonus (indicii):** (1) pornești cu `let max = a;` și îl înlocuiești dacă `b` sau `c` este mai mare, apoi `return max;`; (2) fiecare funcție face o singură treabă: prima returnează numărul secret, a doua returnează `Number(prompt(...))`, a treia afișează „prea mic” sau „prea mare”; (3) `let produs = 1;` înainte de buclă, `produs *= i;` în buclă, apoi `return produs;`; (4) săgeata `=>` ține locul cuvântului `function` și al lui `return`: ce este după ea se returnează.  
- **Notă informativă:** pentru parametri și argumente, gândește-te la o cutie de suc: parametrul este locul gol, argumentul este sucul care intră. Pentru `return`, gândește-te la un automat de bomboane: bagi banii (argumentele) și primești bomboana (valoarea returnată). La Exemplul 8, alege mai întâi într-un comentariu cele două funcții noi, apoi scrie-le.
