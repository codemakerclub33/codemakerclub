# LECȚIA 4 — Decizii: if / else
**Modulul 4 · JavaScript pentru începători · 2 ore**  
**Code Maker Club · JavaScript Starter**

> Până acum programele tale făceau mereu **aceleași lucruri**, de sus în jos. Un program adevărat **alege**: dacă ai ghicit numărul, te felicită; dacă nu, te încurajează. Azi înveți `if` și `else`, adică „dacă” și „altfel”, și comparațiile care stau în spatele lor.  
> Proiect: **„Ghicește numărul calculatorului”** · folder: `Prenume_Nume_W4_L4` (ex. `Ana_Pop_W4_L4`)

---

## Obiectiv
La finalul orei știi să compari valori cu `>`, `<`, `>=`, `<=`, `===` și `!==`, să scrii decizii cu `if` și `else`, să folosești acoladele și indentarea corect, să compari text și numere și să știi de ce `===` nu se confundă cu `=`.  
**Minim:** un program care cere vârsta și afișează un mesaj diferit pentru „sub 12 ani” și „12 ani sau mai mult”.  
**Ținta orei (Complet):** + un test par/impar, compararea unui text (parola de joc), un joc „Ghicește numărul” cu un singur răspuns și explicarea diferenței dintre `=` și `===`.

## De ce contează
Deciziile fac programul inteligent. Orice joc verifică dacă ai câștigat, orice site verifică dacă ai scris parola corectă. Fără `if`, un program nu poate reacționa la ce face utilizatorul.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–35 | Comparații: `true` sau `false` (**Exemplele 1–2**) |
| 35–60 | `if` și `else` (**Exemplele 3–4**) |
| 60–80 | Număr sau text? · par/impar (**Exemplele 5–6**) |
| 80–95 | Decizii cu text și parolă (**Exemplul 7**) |
| 95–115 | Proiect (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- `%` dă restul împărțirii, deci `numar % 2` este `0` la numerele pare;
- `Math.floor(Math.random() * 10) + 1` dă un număr aleator de la 1 la 10;
- `prompt` dă întotdeauna text, iar `Number(…)` îl transformă în număr;
- `true` și `false` sunt valori de tip `boolean`.

**Încearcă tu (4 min)**  
- [ ] Creează folderul `Prenume_Nume_W4_L4` cu `index.html` (scheletul complet, cu `<script src="script.js"></script>` înainte de `</body>`) și `script.js`  
- [ ] Pune în `<body>` un `<h1>` cu textul „Decizii”  
- [ ] În `script.js` cere un număr cu `prompt` și afișează valoarea în consolă (nu uita `Number(…)`)  

> De aici înainte, exemplele arată ce scrii în `script.js`.

---

## 2. Comparații

### Exemplul 1 — Răspuns: `true` sau `false`

```javascript
console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 >= 5);   // true
console.log(4 <= 3);   // false
console.log(5 === 5);  // true
console.log(5 !== 5);  // false
```

| Semn | Înseamnă |
|------|----------|
| `>` | mai mare decât |
| `<` | mai mic decât |
| `>=` | mai mare sau egal |
| `<=` | mai mic sau egal |
| `===` | **egal** cu |
| `!==` | **diferit** de |

O comparație este o **întrebare** și răspunsul ei este întotdeauna `true` (adevărat) sau `false` (fals). Poți pune răspunsul într-o variabilă:

```javascript
let varsta = 10;
let esteMic = varsta < 12;
console.log(esteMic);   // true
```

### Exemplul 2 — Atenție: `=` și `===` sunt diferite

```javascript
let scor = 5;        // un singur =  →  PUNE valoarea în cutie
console.log(scor === 5);   // trei =  →  ÎNTREABĂ „este egal cu 5?”
```

- **`=`** înseamnă „pune în” (atribuire);  
- **`===`** înseamnă „este egal cu?” (comparație).

Aceasta este cea mai frecventă greșeală la decizii. Regula: **la întrebări folosești întotdeauna `===`** (trei semne de egal). Mai există și `==` (două semne), dar se poartă ciudat și nu îl folosim.

**Gata când:**  
- [ ] Ai afișat în consolă rezultatul a 6 comparații (`true` sau `false`)  
- [ ] Ai pus o comparație într-o variabilă  
- [ ] Poți spune diferența dintre `=` și `===`  

---

## 3. `if` și `else`

### Exemplul 3 — `if`: „dacă”

```javascript
let varsta = 15;

if (varsta >= 12) {
  console.log("Poți intra la jocul de aventură.");
}

console.log("Programul s-a terminat.");
```

Cum se citește: „**Dacă** `varsta` este mai mare sau egal cu 12, atunci scrie mesajul.”

Părțile unui `if`:
- cuvântul `if`;  
- **condiția** între paranteze rotunde: `(varsta >= 12)`;  
- **acoladele** `{ … }`: ce se întâmplă **numai dacă** condiția este adevărată;  
- înăuntrul acoladelor, comenzile sunt **trase la dreapta** cu 2 spații (indentare), ca să se vadă ce ține de decizie.

Dacă `varsta` este 9, condiția este falsă, iar mesajul din acolade **se sare**. Ultima linie se afișează oricum, pentru că este în afara acoladelor.

### Exemplul 4 — `else`: „altfel”

```javascript
let varsta = 9;

if (varsta >= 12) {
  console.log("Poți intra la jocul de aventură.");
} else {
  console.log("Mai ai de așteptat, încă ești mic pentru acest joc.");
}
```

Se citește: „Dacă `varsta >= 12`, scrie primul mesaj; **altfel**, scrie al doilea.” Se execută **exact unul** dintre cele două blocuri, niciodată amândouă. `else` nu are condiție: el prinde tot ce n-a prins `if`-ul. Se scrie pe aceeași linie cu acolada de închidere: `} else {`.

Cu o valoare cerută de la utilizator:

```javascript
let varsta = Number(prompt("Câți ani ai?"));

if (varsta >= 12) {
  console.log("Poți intra la jocul de aventură.");
} else {
  console.log("Mai ai de așteptat.");
}
```

**Încearcă tu (8 min)**  
- [ ] Scrie un program care cere vârsta și spune dacă ai voie la un film pentru 12 ani și peste  
- [ ] Rulează programul cu 5, cu 12 și cu 30 și notează ce afișează  
- [ ] Mută mesajul final în afara acoladelor și verifică dacă apare mereu  

---

## 4. Număr sau text, par sau impar

### Exemplul 5 — Compararea numerelor

```javascript
let a = Number(prompt("Primul număr:"));
let b = Number(prompt("Al doilea număr:"));

if (a > b) {
  console.log(`${a} este mai mare decât ${b}`);
} else {
  console.log(`${a} nu este mai mare decât ${b}`);
}
```

Observă mesajul din `else`: dacă numerele sunt egale, `a > b` este fals, deci se afișează „nu este mai mare”, ceea ce este adevărat, dar nu spune tot. Cum scrii o decizie cu **mai mult de două** variante, afli în lecția următoare.

### Exemplul 6 — Par sau impar

```javascript
let numar = Number(prompt("Scrie un număr întreg:"));

if (numar % 2 === 0) {
  console.log(`${numar} este par`);
} else {
  console.log(`${numar} este impar`);
}
```

`numar % 2` dă restul împărțirii la 2, iar dacă este `0`, numărul este par. Condiția poate fi **orice întrebare cu răspuns `true`/`false`**, inclusiv un calcul urmat de o comparație.

**Gata când:**  
- [ ] Programul compară două numere cerute cu `prompt`  
- [ ] Programul spune dacă un număr este par sau impar  
- [ ] Folosești `Number(…)` și `===` corect  

---

## 5. Decizii cu text

### Exemplul 7 — Parola de joc

```javascript
let parola = prompt("Scrie parola de joc:");

if (parola === "dragon") {
  console.log("Corect! Ai intrat în castel.");
} else {
  console.log("Parolă greșită. Poarta rămâne închisă.");
}
```

Textul se compară tot cu `===`. Atenție: **literele mari și mici contează**. `"Dragon"` nu este egal cu `"dragon"`. Ca să nu conteze, transformi răspunsul cu o metodă din lecția trecută:

```javascript
let parola = prompt("Scrie parola de joc:");

if (parola.toLowerCase() === "dragon") {
  console.log("Corect! Ai intrat în castel.");
} else {
  console.log("Parolă greșită. Poarta rămâne închisă.");
}
```

`parola.toLowerCase()` face literele mici, deci „DRAGON”, „Dragon” și „dragon” sunt toate acceptate.

**Atenție:** aceasta este o parolă **de joc**, pentru exersat. Parolele adevărate nu se păstrează niciodată într-un fișier de pagină, pentru că oricine poate citi codul din browser. Nu scrie parolele tale adevărate.

**Încearcă tu (6 min)**  
- [ ] Fă o „parolă de castel” cu `===`  
- [ ] Încearcă parola cu litere mari și vezi că nu merge  
- [ ] Repară problema cu `toLowerCase()`  

---

## 6. Proiectul

### Exemplul 8 — „Ghicește numărul calculatorului”

Fișierul `index.html`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ghicește numărul calculatorului</title>
</head>
<body>
  <h1>Ghicește numărul calculatorului</h1>
  <p>Calculatorul se gândește la un număr de la 1 la 10. Ghicește numărul! Deschide consola (F12) ca să vezi rezultatul.</p>

  <script src="script.js"></script>
</body>
</html>
```

Fișierul `script.js`:

```javascript
// Calculatorul alege un număr între 1 și 10
const numarSecret = Math.floor(Math.random() * 10) + 1;

// Jucătorul încearcă
let incercare = Number(prompt("Ghicește numărul de la 1 la 10:"));

console.log("Tu ai ales:", incercare);
console.log("Calculatorul s-a gândit la:", numarSecret);

if (incercare === numarSecret) {
  console.log("Bravo! Ai ghicit!");
} else {
  console.log("Nu ai ghicit de data aceasta. Mai încearcă!");
}

// Bonus: par sau impar
if (numarSecret % 2 === 0) {
  console.log("Numărul secret era par.");
} else {
  console.log("Numărul secret era impar.");
}
```

Reîncarcă pagina și joacă de mai multe ori: de fiecare dată calculatorul alege alt număr. Fă jocul cu **propriul tău mesaj** și propria temă (de exemplu „Ghicește la ce animal mă gândesc: 1 pisică, 2 câine, 3 pește”).

**Gata când:**  
- [ ] Calculatorul alege un număr aleator cu `Math.random`  
- [ ] Jucătorul îl ghicește cu `prompt`, transformat cu `Number(…)`  
- [ ] Jocul spune dacă ai ghicit, cu `if` și `else`  
- [ ] Programul spune dacă numărul secret este par sau impar  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Ghicește numărul calculatorului” (obligatoriu)
În folderul `Prenume_Nume_W4_L4` ai `index.html` și `script.js`, cu:
- un **număr secret aleator** de la 1 la 10 (sau alt interval ales de tine);
- o **încercare** cerută cu `prompt` și transformată cu `Number(…)`;
- o decizie `if` / `else` care spune dacă ai ghicit;
- un al doilea `if` / `else`, de exemplu **par/impar** sau **verificarea unei parole de joc**;
- toate comparațiile cu `===`, `>`, `<` etc. (niciun `=` în condiții);
- cod indentat și cel puțin două comentarii.

### Exercițiul B — `true` sau `false`?
Spune ce afișează: (1) `console.log(10 > 7);` (2) `console.log(3 === 4);` (3) `console.log(8 !== 8);` (4) `console.log(9 % 2 === 1);` (5) `console.log("pisica" === "Pisica");`

### Exercițiul C — Scrie codul
Scrie codul care: (1) spune „Ai trecut” dacă variabila `nota` este cel puțin 5, altfel „Mai încearcă”; (2) spune dacă un număr cerut cu `prompt` este mai mare decât 100; (3) verifică dacă un cuvânt cerut cu `prompt` este exact „soare” (indiferent de litere mari sau mici).

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile. Programul vrea să spună dacă ai 10 ani și dacă răspunsul `da` a fost scris.

```text
let varsta = Number(prompt("Câți ani ai?"));
if (varsta = 10) {
  console.log("Ai zece ani");
}

let raspuns = "da";
if raspuns === "Da" {
  console.log("Ai spus da");
}
```

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: care este diferența dintre `=` și `===`? Ce se execută într-un `if` / `else` când condiția este adevărată? Dar când este falsă? De ce nu păstrăm parole adevărate în codul paginii?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W4_L4` are `index.html` și `script.js`  
- [ ] Programul rulează fără erori  
- [ ] Ai răspuns la exercițiile B–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Fă un test „Poți urca în roller coaster?”: ai nevoie de cel puțin 120 cm înălțime  
- [ ] Fă un `if` în alt `if`: întâi verifică dacă numărul este pozitiv, apoi dacă este par  
- [ ] Fă jocul să afle și un nume de la utilizator (un nume de animal) și să folosească numele în mesajul final  
- [ ] Fă un joc „Cap sau pajură”: alege `0` sau `1` aleator și afișează „Cap” sau „Pajură”  

---

## Greșeli frecvente
1. **Ai scris `=` în loc de `===`** în condiție — `if (x = 5)` pune 5 în `x`, nu compară.  
2. **Ai uitat parantezele** din jurul condiției — `if x > 5 {` nu merge.  
3. **Ai uitat acoladele** sau ai pus o acoladă în plus — consola arată o eroare.  
4. **Ai pus `;` după paranteza condiției** — `if (x > 5);` oprește decizia.  
5. **Ai comparat un număr cu un text** — `prompt` dă text; transformă cu `Number(…)`.  
6. **Literele mari contează** — `"Da"` nu este egal cu `"da"`; folosește `toLowerCase()`.  
7. **Ai scris `else` cu o condiție** — `else` nu are condiție.  
8. **Ai uitat indentarea** — codul merge, dar nu se mai înțelege ce ține de ce.  
9. **Ai scris `=>` în loc de `>=`** — `=>` înseamnă altceva.  
10. **Ai păstrat o parolă adevărată în cod** — oricine o poate citi.  

---

## Recapitulare pe scurt
1. O comparație răspunde `true` sau `false`: `> < >= <= === !==`.  
2. `=` pune o valoare în cutie, `===` întreabă dacă două valori sunt egale.  
3. `if (condiție) { … }` face ceva doar dacă condiția este adevărată.  
4. `else { … }` prinde ce n-a prins `if`-ul; se execută exact unul din cele două blocuri.  
5. Textul se compară cu `===`, iar literele mari și mici contează.  
6. Numerele cerute cu `prompt` se transformă cu `Number(…)` înainte de comparare.

## Quiz scurt
- Ce răspuns dă `4 >= 5`?  
- Care este diferența dintre `=` și `===`?  
- Ce se întâmplă cu blocul `else` dacă `if` este adevărat?  
- Cum compari un text fără să conteze literele mari și mici?  
- Cum afli dacă un număr este par?

## Temă
Fă un joc „Poarta castelului”: calculatorul alege un număr de la 1 la 3, jucătorul alege o poartă, iar dacă numerele coincid, a găsit comoara. Salvează în `Prenume_Nume_W4_L4`.

## Ce urmează — Lecția 5
Învățăm **mai multe condiții**: `else if`, `&&` („și”), `||` („sau”), `!` („nu”) și `switch`. Jocul tău va putea spune „mai mare” sau „mai mic”.

---

## Răspunsuri pentru profesor
- **Exercițiul B:** (1) `true`; (2) `false`; (3) `false`; (4) `true`; (5) `false` (litera mare contează).  
- **Exercițiul C:** (1) `if (nota >= 5) { console.log("Ai trecut"); } else { console.log("Mai încearcă"); }`; (2) `let n = Number(prompt("Număr:")); if (n > 100) { console.log("Mai mare ca 100"); } else { console.log("Nu este mai mare ca 100"); }`; (3) `let c = prompt("Cuvânt:"); if (c.toLowerCase() === "soare") { … } else { … }`.  
- **Exercițiul D:** (1) `varsta = 10` trebuie `varsta === 10`; (2) `if raspuns === "Da" {` nu are paranteze: trebuie `if (raspuns === "Da") {`; (3) `"Da"` nu este egal cu `"da"`: trebuie `"da"` (sau `toLowerCase()`).  
- **Exercițiul E:** `=` pune valoarea, `===` compară; dacă este adevărat se execută blocul `if`; dacă este fals, blocul `else`; parolele din cod pot fi citite de oricine.  
- **Notă pentru profesor:** o demonstrație bună pe tablă este un desen cu o „bifurcație” (drum cu două ramuri): condiția este panoul care alege ramura. Insistați pe `=` contra `===`: dacă elevii scriu `if (x = 5)`, programul „merge”, dar face altceva, iar greșeala este greu de văzut. La jocul cu parola, lămuriți că este doar un exercițiu: parolele adevărate se verifică pe un server, nu în pagină.
