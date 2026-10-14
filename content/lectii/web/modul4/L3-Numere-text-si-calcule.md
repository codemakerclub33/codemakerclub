# LECȚIA 3 — Numere, text și calcule
**Modulul 4 · JavaScript pentru începători · 2 ore**  
**Code Maker Club · JavaScript Starter**

> Calculatorul este foarte bun la două lucruri: **calcule** și **text**. Azi înveți restul împărțirii, rotunjirile, numerele aleatoare (ca să arunci un zar), cum lucrezi cu litere mari și mici, cum afli lungimea unui text și cum ceri o valoare de la utilizator cu `prompt`.  
> Proiect: **„Calculatorul și zarul meu”** · folder: `Prenume_Nume_W4_L3` (ex. `Ana_Pop_W4_L3`)

---

## Obiectiv
La finalul orei știi să folosești operatorii `+ - * / % **` și parantezele, să rotunjești cu `Math.round`, `Math.floor` și `Math.ceil`, să faci un număr aleator, să lucrezi cu text (`length`, `toUpperCase`, `toLowerCase`, `includes`, `slice`), să transformi text în număr cu `Number(…)` și să ceri date cu `prompt`.  
**Minim:** un program care cere două numere și afișează suma și produsul lor.  
**Ținta orei (Complet):** + restul împărțirii, un zar aleator de la 1 la 6, transformări de text, rotunjiri și explicarea diferenței dintre `"5" + 3` și `5 + 3`.

## De ce contează
Aproape orice program lucrează cu numere și cu text: scoruri, prețuri, nume, mesaje. Dacă înțelegi cum se comportă fiecare, eviți multe greșeli ciudate, de exemplu `2 + 3` care pare să dea `23`.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–35 | Operatori, rest, putere, paranteze (**Exemplele 1–2**) |
| 35–50 | Rotunjiri și numere aleatoare (**Exemplele 3–4**) |
| 50–75 | Text: lungime, litere mari și mici, tăiere (**Exemplele 5–6**) |
| 75–95 | Text sau număr? `Number(...)` și `prompt` (**Exemplele 7–8**) |
| 95–115 | Proiect (**Exemplul 9**) |
| 115–120 | Recap și temă |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- `let` face o variabilă care se schimbă, `const` una care nu se schimbă;
- `+=`, `-=`, `++`, `--` schimbă o valoare mai repede;
- mesajele se construiesc cu `+` sau cu `` `${…}` ``;
- tipurile sunt `string`, `number` și `boolean`.

**Încearcă tu (4 min)**  
- [ ] Creează folderul `Prenume_Nume_W4_L3` cu `index.html` (scheletul complet, cu `<script src="script.js"></script>` înainte de `</body>`) și `script.js`  
- [ ] Pune în `<body>` un `<h1>` cu textul „Calculatorul și zarul meu”  
- [ ] În `script.js` creează `let numar = 10;` și afișează numărul în consolă  

> De aici înainte, exemplele arată ce scrii în `script.js`.

---

## 2. Calcule

### Exemplul 1 — Operatorii

```javascript
console.log(7 + 3);   // 10
console.log(7 - 3);   // 4
console.log(7 * 3);   // 21
console.log(7 / 2);   // 3.5
console.log(7 % 3);   // 1
console.log(2 ** 3);  // 8
```

| Semn | Ce face | Exemplu |
|------|---------|---------|
| `+` `-` `*` `/` | adunare, scădere, înmulțire, împărțire | `7 / 2` este `3.5` |
| `%` | **restul** împărțirii | `7 % 3` este `1` (7 = 2 × 3 + 1) |
| `**` | ridicare la putere | `2 ** 3` este `8` (2 × 2 × 2) |

Restul împărțirii se numește în programare **modulo**. Este foarte folositor: dacă `numar % 2` este `0`, numărul este **par**; dacă este `1`, este **impar**. Și `numar % 10` îți dă ultima cifră a numărului.

### Exemplul 2 — Ordinea operațiilor și parantezele

```javascript
console.log(2 + 3 * 4);     // 14
console.log((2 + 3) * 4);   // 20
```

Ca la matematică, **înmulțirea și împărțirea se fac înaintea adunării și scăderii**. Parantezele schimbă ordinea: se face întâi ce este în paranteză. Când ai dubii, pune paranteze: sunt gratis și fac codul clar.

```javascript
let pret = 12;
let cantitate = 3;
let reducere = 5;
let total = pret * cantitate - reducere;
console.log("Total:", total);   // 31
```

**Gata când:**  
- [ ] Ai folosit toți cei șase operatori, inclusiv `%` și `**`  
- [ ] Ai arătat că `2 + 3 * 4` și `(2 + 3) * 4` dau rezultate diferite  
- [ ] Poți spune ce arată `numar % 2`  

---

## 3. Rotunjiri și numere aleatoare

### Exemplul 3 — Rotunjiri

```javascript
console.log(Math.round(4.6));  // 5  (cel mai apropiat întreg)
console.log(Math.floor(4.9));  // 4  (în jos)
console.log(Math.ceil(4.1));   // 5  (în sus)
console.log(Math.max(3, 9, 5)); // 9  (cel mai mare)
console.log(Math.min(3, 9, 5)); // 3  (cel mai mic)
console.log((3.14159).toFixed(2)); // "3.14"  (două zecimale, ca text)
```

`Math` este o „trusă” de unelte pentru numere. `Math.round` rotunjește la cel mai apropiat întreg, `Math.floor` rotunjește **în jos**, `Math.ceil` **în sus**. `toFixed(2)` păstrează două zecimale (rezultatul este text, bun pentru afișare, de exemplu la prețuri).

### Exemplul 4 — Numere aleatoare: zarul

```javascript
console.log(Math.random());   // un număr între 0 și 1, de exemplu 0.3728...
```

`Math.random()` dă un număr zecimal **cel puțin 0 și mai mic decât 1**, diferit de fiecare dată. Pentru un zar, avem nevoie de numere întregi de la 1 la 6:

```javascript
let zar = Math.floor(Math.random() * 6) + 1;
console.log("Zarul a căzut pe:", zar);
```

Cum se construiește:
1. `Math.random()` este între 0 și aproape 1;  
2. `* 6` îl face între 0 și aproape 6;  
3. `Math.floor(…)` îl rotunjește în jos: 0, 1, 2, 3, 4 sau 5;  
4. `+ 1` îl mută: 1, 2, 3, 4, 5 sau 6.  

Reîncarcă pagina de mai multe ori: de fiecare dată iese alt număr. Aceeași rețetă merge pentru orice interval: `Math.floor(Math.random() * 10) + 1` dă numere de la 1 la 10.

**Încearcă tu (6 min)**  
- [ ] Rotunjește `7.5`, `7.4` și `7.9` cu `round`, `floor` și `ceil` și compară  
- [ ] Aruncă zarul de 5 ori, reîncărcând pagina  
- [ ] Fă un „număr norocos” între 1 și 100  

---

## 4. Text

### Exemplul 5 — Lungimea și literele mari și mici

```javascript
let cuvant = "Fotbal";

console.log(cuvant.length);          // 6
console.log(cuvant.toUpperCase());   // FOTBAL
console.log(cuvant.toLowerCase());   // fotbal
console.log(cuvant[0]);              // F  (prima literă)
console.log(cuvant[cuvant.length - 1]); // l  (ultima literă)
```

- `.length` (fără paranteze) arată **câte caractere** are textul;  
- `.toUpperCase()` face toate literele **mari**, iar `.toLowerCase()` **mici** (cu paranteze);  
- `cuvant[0]` ia **prima literă**: în programare numărătoarea începe de la **0**, nu de la 1;  
- ultima literă este la poziția `length - 1`.

Aceste unelte se numesc **metode**: se scriu după un punct, lipite de variabilă. Atenție la litere: `.length` se scrie cu l mic, iar `.toUpperCase()` cu U mare în mijloc.

### Exemplul 6 — Căutăm și tăiem

```javascript
let fraza = "Îmi place să programez";

console.log(fraza.includes("place"));   // true
console.log(fraza.includes("zar"));     // false
console.log(fraza.slice(0, 3));         // Îmi
console.log(fraza.slice(10));           // să programez
console.log("ha".repeat(3));            // hahaha
console.log(fraza.replace("programez", "joc"));  // Îmi place să joc
```

| Metodă | Ce face |
|--------|---------|
| `includes("…")` | spune `true`/`false` dacă textul conține bucata |
| `slice(a, b)` | taie de la poziția `a` până **înainte** de poziția `b` |
| `slice(a)` | taie de la poziția `a` până la sfârșit |
| `repeat(n)` | repetă textul de `n` ori |
| `replace("x", "y")` | înlocuiește prima bucată `x` cu `y` |

Metodele **nu schimbă** textul original, ci **dau un text nou**. Dacă vrei să păstrezi rezultatul, îl pui într-o variabilă: `let mare = fraza.toUpperCase();`.

**Gata când:**  
- [ ] Ai afișat lungimea unui cuvânt și versiunea lui cu litere mari și mici  
- [ ] Ai afișat prima și ultima literă  
- [ ] Ai folosit `includes`, `slice` și `replace`  
- [ ] Știi de ce `cuvant[0]` este prima literă  

---

## 5. Text sau număr?

### Exemplul 7 — `"5" + 3` și `5 + 3`

```javascript
console.log(5 + 3);         // 8
console.log("5" + 3);       // 53   (text lipit!)
console.log("5" - 3);       // 2    (aici calculează)
console.log(Number("5") + 3); // 8
console.log(Number("abc"));   // NaN  (nu este număr)
```

Ce se întâmplă:
- Între numere, `+` **adună**.  
- Dacă un termen este **text**, `+` **lipește**: `"5" + 3` devine `"53"`.  
- `-`, `*` și `/` încearcă să transforme textul în număr și calculează.  
- `Number("5")` **transformă** textul în număr. Dacă textul nu arată a număr, rezultă `NaN` („Not a Number”, adică „nu este număr”).

Acesta este cel mai frecvent „necaz” al începătorilor: un număr care arată corect, dar este de fapt text.

### Exemplul 8 — `prompt`: întrebăm utilizatorul

```javascript
let nume = prompt("Cum se numește animalul tău preferat?");
console.log("Animalul tău preferat este:", nume);

let varstaText = prompt("Câți ani are?");
let varsta = Number(varstaText);
console.log("Peste 5 ani va avea", varsta + 5, "ani");
```

`prompt("întrebare")` deschide o fereastră cu o **cutie de scris**. Ce scrie utilizatorul este **întotdeauna text**, chiar dacă a scris `10`. Dacă vrei să calculezi cu valoarea, o transformi cu `Number(…)`. Dacă utilizatorul apasă **Cancel**, `prompt` dă `null` (nimic).

Fără `Number`:

```javascript
let a = prompt("Primul număr:");   // utilizatorul scrie 2
let b = prompt("Al doilea număr:"); // utilizatorul scrie 3
console.log(a + b);                 // 23, nu 5!
```

Cu `Number`:

```javascript
let a = Number(prompt("Primul număr:"));
let b = Number(prompt("Al doilea număr:"));
console.log(a + b);                 // 5
```

Poți pune `prompt` direct în `Number(…)`: întâi se cere valoarea, apoi se transformă.

**Încearcă tu (6 min)**  
- [ ] Arată în consolă diferența dintre `5 + 3`, `"5" + 3` și `Number("5") + 3`  
- [ ] Cere numele animalului tău preferat cu `prompt` și afișează un mesaj cu el  
- [ ] Cere două numere și afișează suma, apoi verifică ce se întâmplă fără `Number`  

---

## 6. Proiectul

### Exemplul 9 — „Calculatorul și zarul meu”

Fișierul `index.html`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculatorul și zarul meu</title>
</head>
<body>
  <h1>Calculatorul și zarul meu</h1>
  <p>Răspunde la întrebări, apoi deschide consola (F12) ca să vezi rezultatele.</p>

  <script src="script.js"></script>
</body>
</html>
```

Fișierul `script.js`:

```javascript
// 1. Calculatorul
let a = Number(prompt("Scrie primul număr:"));
let b = Number(prompt("Scrie al doilea număr:"));

console.log("=== Calculator ===");
console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${(a / b).toFixed(2)}`);
console.log(`Restul împărțirii lui ${a} la ${b} este ${a % b}`);

// 2. Par sau impar?
console.log(`Restul lui ${a} la 2 este ${a % 2} (0 înseamnă număr par)`);

// 3. Zarul
let zar = Math.floor(Math.random() * 6) + 1;
console.log("=== Zarul ===");
console.log("Zarul a căzut pe:", zar);

// 4. Numele
let animal = prompt("Scrie numele animalului tău preferat:");
console.log("=== Animalul ===");
console.log("Numele: " + animal.toUpperCase());
console.log("Are", animal.length, "litere");
console.log("Prima literă este:", animal[0]);
```

Rulează programul și introdu valori diferite. Nu scrie **date personale** la `prompt` (nume complet, adresă, telefon): folosește numere și numele unui animal sau al unui joc.

**Gata când:**  
- [ ] Programul cere două numere și afișează cele cinci calcule  
- [ ] Zarul afișează un număr între 1 și 6  
- [ ] Programul afișează numele animalului cu litere mari, lungimea și prima literă  
- [ ] Nu apar erori roșii în consolă  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Calculatorul și zarul meu” (obligatoriu)
În folderul `Prenume_Nume_W4_L3` ai `index.html` și `script.js`, cu:
- **două numere** cerute cu `prompt` și transformate cu `Number(…)`;
- **suma, diferența, produsul, câtul și restul** afișate în mesaje clare;
- un **zar** de la 1 la 6 cu `Math.random()` și `Math.floor`;
- un **text** cerut cu `prompt`, afișat cu litere mari, cu lungimea lui și cu prima literă;
- cel puțin o rotunjire (`round`, `floor`, `ceil` sau `toFixed`);
- cel puțin două comentarii.

### Exercițiul B — Ce afișează programul?
Spune ce afișează: (1) `console.log(17 % 5);` (2) `console.log("7" + 2);` (3) `console.log(2 + 3 * 2);` (4) `console.log("pisica".length);` (5) `console.log("pisica".toUpperCase());` (6) `console.log(Math.floor(8.9));`

### Exercițiul C — Scrie codul
Scrie codul care: (1) afișează ultima cifră a numărului `4729`; (2) face un zar de la 1 la 10; (3) ia cuvântul `"programare"` și afișează primele 4 litere.

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile. Programul vrea să afișeze suma a două numere cerute, un zar de la 1 la 6 și lungimea cuvântului „Salut”.

```text
let a = prompt("Primul număr:");
let b = prompt("Al doilea număr:");
console.log("Suma:", a + b);
console.log("Zar:", Math.random() * 6);
console.log("Lungime:", "Salut".Length);
```

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: de ce `"5" + 3` dă `53`? Ce face `%` și la ce folosește? Ce tip de valoare dă întotdeauna `prompt`?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W4_L3` are `index.html` și `script.js`  
- [ ] Programul rulează fără erori  
- [ ] Ai răspuns la exercițiile B–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Fă un convertor: cere lei și afișează cât înseamnă în euro, la un curs ales de tine, cu 2 zecimale  
- [ ] Aruncă două zaruri și afișează suma lor  
- [ ] Cere un cuvânt și afișează cuvântul de 3 ori, cu litere mari, separat prin spații  
- [ ] Scrie „Caut ac în carul cu fân” într-o variabilă și afișează dacă conține cuvântul „ac” (`includes`)  

---

## Greșeli frecvente
1. **Ai uitat `Number(…)`** la `prompt` — `"2" + "3"` dă `23`.  
2. **Ai scris `.Length`** cu L mare — rezultatul este `undefined`; corect este `.length`.  
3. **Ai scris `.toUppercase()`** — corect este `.toUpperCase()`, cu U mare în mijloc.  
4. **Ai uitat parantezele** la `toUpperCase` — fără ele nu se execută.  
5. **Zarul iese 0 sau 6.5** — ai uitat `Math.floor` sau `+ 1`.  
6. **Ai scris `Math.floor(Math.random() * 6)`** fără `+ 1` — iese de la 0 la 5.  
7. **Numerele cu zecimale** — scrie `3.5`, nu `3,5`.  
8. **`NaN` în rezultat** — ai transformat în număr un text care nu este număr.  
9. **Ai crezut că prima literă are numărul 1** — are numărul 0.  
10. **Ai uitat că metodele nu schimbă textul original** — pune rezultatul într-o variabilă.  

---

## Recapitulare pe scurt
1. Operatori: `+ - * / % **`; înmulțirea și împărțirea se fac înaintea adunării; parantezele schimbă ordinea.  
2. `%` dă restul împărțirii; `numar % 2` arată dacă este par sau impar.  
3. `Math.round`, `Math.floor`, `Math.ceil` rotunjesc; `Math.floor(Math.random() * 6) + 1` este un zar.  
4. Text: `.length`, `.toUpperCase()`, `.toLowerCase()`, `[0]`, `.includes()`, `.slice()`, `.replace()`.  
5. `"5" + 3` lipește; `Number("5") + 3` adună.  
6. `prompt` dă mereu text; îl transformi cu `Number(…)`.

## Quiz scurt
- Ce este `10 % 3`?  
- Cum faci un număr aleator între 1 și 6?  
- Ce afișează `"hai".length`?  
- De ce `"2" + "3"` dă `23`?  
- Cum transformi un text în număr?

## Temă
Scrie un program „Joc de ghicit norocul”: aruncă un zar, cere utilizatorului un număr de la 1 la 6 cu `prompt`, apoi afișează ambele numere (comparația o înveți în lecția următoare). Salvează în `Prenume_Nume_W4_L3`.

## Ce urmează — Lecția 4
Învățăm **decizii**: `if` și `else`, ca programul să aleagă ce face în funcție de situație.

---

## Răspunsuri pentru profesor
- **Exercițiul B:** (1) `2`; (2) `72` (text lipit); (3) `8`; (4) `6`; (5) `PISICA`; (6) `8`.  
- **Exercițiul C:** (1) `console.log(4729 % 10);` (rezultă 9); (2) `Math.floor(Math.random() * 10) + 1`; (3) `console.log("programare".slice(0, 4));` (rezultă `prog`).  
- **Exercițiul D:** (1) lipsește `Number(…)` la `prompt`, deci `a + b` lipește textele; (2) `Math.random() * 6` dă un zecimal între 0 și 6; trebuie `Math.floor(Math.random() * 6) + 1`; (3) `.Length` trebuie `.length`.  
- **Exercițiul E:** dacă un termen este text, `+` lipește; `%` dă restul împărțirii și ajută la par/impar; `prompt` dă întotdeauna text.  
- **Notă pentru profesor:** zarul este locul bun pentru a insista pe construirea pas cu pas: `Math.random()`, apoi `* 6`, apoi `Math.floor`, apoi `+ 1`. Lăsați elevii să afișeze fiecare pas separat. La `prompt`, rugați elevii să nu scrie nume complete sau alte date personale. Dacă browserul blochează ferestrele `prompt`, permiteți ferestrele pentru pagina de test.
