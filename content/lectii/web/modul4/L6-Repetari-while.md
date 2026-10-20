# LECȚIA 6 — Repetări: while
**Modulul 4 · JavaScript pentru începători · 2 ore**  
**Code Maker Club · JavaScript Starter**

> Bucla `for` este bună când știi **de câte ori** repeți. Dar uneori nu știi: „repetă **cât timp** nu ai ghicit numărul”, „repetă **cât timp** mai ai vieți”. Pentru asta există bucla `while` („cât timp”). Azi o învățăm, împreună cu `do…while`, `break` și `continue`.  
> Proiect: **„Ghicește numărul, cu mai multe încercări”** · folder: `Prenume_Nume_W4_L6` (ex. `Ana_Pop_W4_L6`)

---

## Obiectiv
La finalul orei știi să scrii o buclă `while`, să ai grijă ca bucla să se oprească, să folosești `do…while`, să ieși dintr-o buclă cu `break`, să sari peste o rundă cu `continue` și să alegi între `for` și `while`.  
**Minim:** o buclă `while` care numără de la 1 la 5.  
**Ținta orei (Complet):** + un joc de ghicit cu mai multe încercări, un `do…while`, `break` și `continue`, plus explicarea diferenței dintre `for` și `while`.

## De ce contează
Multe lucruri din programe se repetă „până se întâmplă ceva”: un joc rulează până pierzi toate viețile, un meniu se afișează până alegi „Ieșire”. `while` este unealta potrivită.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–35 | Prima buclă `while` (**Exemplele 1–2**) |
| 35–55 | `while` cu un număr necunoscut de runde (**Exemplul 3**) |
| 55–70 | `do…while` (**Exemplul 4**) |
| 70–90 | `break` și `continue` (**Exemplul 5**) |
| 90–115 | Proiect (**Exemplele 6–7**) |
| 115–120 | Recap și temă |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- `for (început; condiție; pas) { … }` repetă corpul cât timp condiția este adevărată;
- un total se creează **înainte** de buclă și se adună în buclă;
- o buclă a cărei condiție nu devine falsă niciodată îngheață pagina;
- cu `cuvant[i]` parcurgi literele unui text.

**Încearcă tu (4 min)**  
- [ ] Creează folderul `Prenume_Nume_W4_L6` cu `index.html` (scheletul complet, cu `<script src="script.js"></script>` înainte de `</body>`) și `script.js`  
- [ ] Pune în `<body>` un `<h1>` cu textul „while”  
- [ ] În `script.js` scrie o buclă `for` care afișează numerele de la 1 la 5  

> De aici înainte, exemplele arată ce scrii în `script.js`.

---

## 2. Prima buclă `while`

### Exemplul 1 — `while`: cât timp

```javascript
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
```

Rezultat: `1`, `2`, `3`, `4`, `5`.

Cum se citește: „**Cât timp** `i` este mai mic sau egal cu 5, afișează `i` și mărește valoarea cu 1.”

Comparat cu `for`, aici cele trei părți sunt **separate**:

| Parte | În `for` | În `while` |
|-------|----------|------------|
| început | `let i = 1;` înăuntrul parantezei | `let i = 1;` **înainte** de buclă |
| condiție | `i <= 5` în paranteză | `i <= 5` în paranteză |
| pas | `i++` în paranteză | `i++` **înăuntrul** corpului |

### Exemplul 2 — Atenție: pasul nu trebuie uitat

```text
let i = 1;
while (i <= 5) {
  console.log(i);
}
```

Aici nu mai este `i++`: valoarea lui `i` rămâne `1`, condiția rămâne mereu adevărată, iar bucla **nu se oprește niciodată** (pagina îngheață; închide fila și repară). **Regula:** în corpul lui `while` trebuie să se schimbe **ceva** care va face într-o zi condiția falsă. Nu rula exemplul de mai sus: este doar pentru a recunoaște greșeala.

**Gata când:**  
- [ ] Ai scris o buclă `while` care numără de la 1 la 5  
- [ ] Poți arăta pe foaie unde stau început, condiție și pas într-un `while`  
- [ ] Știi de ce bucla fără pas nu se termină  

---

## 3. Când nu știi câte runde

### Exemplul 3 — Cât timp nu ai ajuns la obiectiv

Un exemplu: cât timp mai ai bani în pușculiță, cumperi câte un stick de înghețată de 3 lei:

```javascript
let bani = 10;
let inghetate = 0;

while (bani >= 3) {
  bani -= 3;
  inghetate++;
  console.log(`Am cumpărat ${inghetate} înghețate. Au rămas ${bani} lei.`);
}

console.log("Nu mai pot cumpăra nimic.");
```

Rezultat:

```text
Am cumpărat 1 înghețate. Au rămas 7 lei.
Am cumpărat 2 înghețate. Au rămas 4 lei.
Am cumpărat 3 înghețate. Au rămas 1 lei.
Nu mai pot cumpăra nimic.
```

Nu am știut de la început câte runde vor fi: depinde de câți bani ai. Cu `for` ar fi fost mai greu de scris. Bucla se oprește singură când condiția devine falsă (`bani >= 3` nu mai este adevărat).

Alt exemplu: înjumătățim un număr până ajunge sub 1:

```javascript
let numar = 100;
let pasi = 0;

while (numar >= 1) {
  numar = numar / 2;
  pasi++;
}

console.log("Am jumătățit de", pasi, "ori");
```

(Rezultat: `7`.)

**Regula de alegere:**
- **`for`** când știi **de câte ori** (de la 1 la 10, literele unui cuvânt);  
- **`while`** când repeți **până se întâmplă ceva** (ai ghicit, ai rămas fără vieți).

**Încearcă tu (6 min)**  
- [ ] Scrie programul cu înghețatele, dar cu alt preț și alți bani  
- [ ] Fă un program care dublează un număr (începând de la 1) cât timp este mai mic de 1000 și numără pașii  
- [ ] Spune ce alegi pentru fiecare: „afișez 1–20” și „repet până ghicesc”  

---

## 4. `do…while`

### Exemplul 4 — Mai întâi fă, apoi verifică

La `while`, condiția este verificată **înainte** de fiecare rundă. Cu `do…while`, corpul rulează **cel puțin o dată**, iar condiția se verifică **după**:

```javascript
let numar;

do {
  numar = Number(prompt("Scrie un număr de la 1 la 10:"));
} while (Number.isNaN(numar) || numar < 1 || numar > 10);

console.log("Ai scris:", numar);
```

Programul **cere un număr**, apoi verifică: dacă nu este valid, **cere din nou**, și tot așa până primește un număr bun. Este potrivit pentru „întreabă până răspunde corect”, pentru că ai nevoie de răspuns **înainte** să poți verifica răspunsul.

Observă punctul și virgula de după `while (…)` la sfârșit: la `do…while` ea se scrie. În exemplu, dacă utilizatorul apasă **Cancel**, `Number(null)` este `0`, deci va fi respins și întrebarea revine. Pentru un program care permite renunțarea, ai nevoie de `break` (exemplul următor).

**Gata când:**  
- [ ] Ai o buclă `while` care se oprește singură când condiția devine falsă  
- [ ] Ai un `do…while` care cere un număr până este valid  
- [ ] Poți spune diferența dintre `while` și `do…while`  

---

## 5. `break` și `continue`

### Exemplul 5 — Ieșim sau sărim

- **`break`**: **iese** din buclă pe loc.  
- **`continue`**: **sare** peste restul rundei curente și trece la următoarea.

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 4) {
    continue;   // sare peste 4
  }
  if (i === 8) {
    break;      // oprește tot, la 8
  }
  console.log(i);
}
```

Rezultat:

```text
1
2
3
5
6
7
```

- La `i = 4`, `continue` sare peste afișare, deci 4 lipsește.  
- La `i = 8`, `break` oprește bucla, deci 8, 9 și 10 nu mai apar.  

Cu `prompt` poți permite renunțarea:

```javascript
while (true) {
  const raspuns = prompt("Scrie 'stop' ca să ieși:");

  if (raspuns === null || raspuns === "stop") {
    break;
  }

  console.log("Ai scris:", raspuns);
}

console.log("Ai ieșit din buclă.");
```

`while (true)` repetă la nesfârșit, **dar numai dacă nu avem un `break`** care să o oprească. Aici bucla se termină când utilizatorul scrie `stop` sau apasă Cancel (`null`). Folosește `while (true)` doar dacă ai un `break` sigur.

**Încearcă tu (6 min)**  
- [ ] Afișează numerele de la 1 la 10, dar sari peste numerele divizibile cu 3 (`continue`)  
- [ ] Afișează numerele de la 1 la 100 și oprește-te la primul număr divizibil cu 17 (`break`)  
- [ ] Fă o buclă `prompt` care se oprește la cuvântul „gata”  

---

## 6. Proiectul

### Exemplul 6 — Regulile jocului

Ghicim același tip de număr ca la lecția 4, dar acum avem **mai multe încercări**:
- calculatorul alege un număr de la 1 la 20;  
- jucătorul are **cel mult 5 încercări**;  
- după fiecare încercare primește indiciul „prea mic” sau „prea mare”;  
- o încercare nevalidă (litere, număr în afara intervalului) **nu se numără**;  
- dacă apasă Cancel, jocul se oprește.

### Exemplul 7 — „Ghicește numărul, cu mai multe încercări”

Fișierul `index.html`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ghicește numărul, cu mai multe încercări</title>
</head>
<body>
  <h1>Ghicește numărul, cu mai multe încercări</h1>
  <p>Ai cel mult 5 încercări. Deschide consola (F12) ca să vezi indiciile.</p>

  <script src="script.js"></script>
</body>
</html>
```

Fișierul `script.js`:

```javascript
const numarSecret = Math.floor(Math.random() * 20) + 1;
const maxIncercari = 5;

let incercari = 0;
let ghicit = false;
let renuntat = false;

while (!ghicit && incercari < maxIncercari) {
  const raspuns = prompt(`Încercarea ${incercari + 1} din ${maxIncercari}. Ghicește numărul de la 1 la 20:`);

  // Cancel: ieșim din joc
  if (raspuns === null) {
    renuntat = true;
    break;
  }

  const incercare = Number(raspuns);

  // O încercare nevalidă nu se numără
  if (Number.isNaN(incercare) || incercare < 1 || incercare > 20) {
    console.log("Număr nevalid. Scrie un număr între 1 și 20.");
    continue;
  }

  incercari++;

  if (incercare === numarSecret) {
    ghicit = true;
  } else if (incercare < numarSecret) {
    console.log(`${incercare}: prea mic.`);
  } else {
    console.log(`${incercare}: prea mare.`);
  }
}

// Rezultatul jocului
if (ghicit) {
  console.log(`Bravo! Ai ghicit numărul ${numarSecret} din ${incercari} încercări.`);
} else if (renuntat) {
  console.log(`Ai renunțat. Numărul era ${numarSecret}.`);
} else {
  console.log(`Ai rămas fără încercări. Numărul era ${numarSecret}.`);
}
```

Observă ce folosește jocul din tot ce ai învățat: variabile (`let`/`const`), decizii (`if`/`else if`), `&&`/`!`, `while`, `continue` și `break`, `Math.random`, `prompt` și `Number`.

Adaptează jocul: alt interval, alt număr de încercări, alte mesaje, alt subiect. Nu pune **date personale** în mesaje.

**Gata când:**  
- [ ] Jocul are cel mult 5 încercări și le numără corect  
- [ ] Spune „prea mic” sau „prea mare” după fiecare încercare greșită  
- [ ] O încercare nevalidă nu se numără (`continue`)  
- [ ] Cancel oprește jocul (`break`)  
- [ ] La final afișează un mesaj potrivit pentru câștig, renunțare sau înfrângere  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Ghicește numărul, cu mai multe încercări” (obligatoriu)
În folderul `Prenume_Nume_W4_L6` ai `index.html` și `script.js`, cu:
- un **număr secret aleator** într-un interval ales de tine;
- o buclă **`while`** cu un **număr maxim de încercări** (o constantă `const`);
- indicii „prea mic” / „prea mare”, cu `if` / `else if`;
- o încercare nevalidă care **nu** se numără, cu `continue`;
- ieșire la **Cancel**, cu `break`;
- un mesaj final diferit pentru câștig, renunțare și înfrângere;
- cod indentat și cel puțin două comentarii.

### Exercițiul B — Ce afișează bucla?
Spune ce afișează: (1) `let n = 3; while (n > 0) { console.log(n); n--; }` (2) `let s = 0; let i = 1; while (i <= 4) { s += i; i++; } console.log(s);` (3) `for (let i = 1; i <= 5; i++) { if (i === 3) { continue; } console.log(i); }` (4) `for (let i = 1; i <= 5; i++) { if (i === 3) { break; } console.log(i); }`

### Exercițiul C — Scrie codul
Scrie codul care: (1) cu `while`, afișează numerele de la 10 la 1; (2) dublează un număr (pornind de la 5) cât timp este mai mic de 200 și afișează fiecare valoare; (3) cu `do…while`, cere un cuvânt cu `prompt` până când scrie cel puțin 3 litere.

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile. Nu rula primele două exemple fără să le repari.

```text
let n = 1;
while (n <= 5) {
  console.log(n);
}

let i = 10;
while (i = 5) {
  console.log(i);
  i--;
}

let x = 5;
if (x > 3) {
  break;
}
```

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: când alegi `for` și când alegi `while`? Care este diferența dintre `while` și `do…while`? Ce fac `break` și `continue`?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W4_L6` are `index.html` și `script.js`  
- [ ] Jocul rulează fără erori și fără să înghețe  
- [ ] Ai răspuns la exercițiile B–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Adaugă la joc un scor: 5 puncte la prima încercare, 4 la a doua etc.  
- [ ] Fă un meniu care se repetă (`while (true)`) cu opțiunile „1 Joc”, „2 Ajutor”, „0 Ieșire”  
- [ ] Calculează cât timp un număr, împărțit la 2 de mai multe ori, rămâne mai mare decât 1  
- [ ] Fă ca jocul să întrebe „Vrei să mai joci?” și să reia jocul dacă răspunsul este „da”  

---

## Greșeli frecvente
1. **Ai uitat pasul din corpul lui `while`** — bucla nu se oprește.  
2. **Ai scris `while (i = 5)`** — un singur `=` pune valoarea, nu compară. Folosește `===`.  
3. **Ai pus condiția pe dos** (`while (i >= 5)` când voiai `<=`) — bucla nu rulează deloc sau nu se termină.  
4. **Ai uitat valoarea inițială** înainte de buclă — eroare sau `NaN`.  
5. **Ai scris `break` în afara unei bucle** — `Illegal break statement`.  
6. **Ai pus `continue` înainte de pasul `i++`** — în `while`, `continue` sare peste pas și bucla se blochează. Mută pasul înainte de `continue`, sau numără încercările valide cum am făcut în proiect.  
7. **Ai uitat punctul și virgula** la sfârșitul lui `do…while (…);`.  
8. **Ai folosit `while (true)` fără `break`** — bucla nu se termină.  
9. **Ai folosit `for` unde `while` este mai potrivit** (sau invers) — alege după „știu de câte ori?”.  
10. **Ai uitat că `Cancel` dă `null`** — programul poate rămâne blocat într-o întrebare fără ieșire.  

---

## Recapitulare pe scurt
1. `while (condiție) { … }` repetă cât timp condiția este adevărată.  
2. În corp trebuie să se schimbe ceva care face condiția, într-o zi, falsă.  
3. `for` când știi de câte ori; `while` când repeți „până se întâmplă ceva”.  
4. `do { … } while (condiție);` rulează corpul cel puțin o dată.  
5. `break` iese din buclă; `continue` sare peste restul rundei.  
6. `while (true)` cere un `break` sigur.

## Quiz scurt
- Ce înseamnă „cât timp”?  
- Ce se întâmplă dacă uiți pasul într-un `while`?  
- Când folosești `do…while`?  
- Ce face `continue`?  
- Ce dă `prompt` când apeși Cancel?

## Temă
Fă un joc „Contul de bani”: începi cu 100 de lei, iar la fiecare rundă utilizatorul scrie cât cheltuiește; jocul se oprește când nu mai ai bani sau când scrie `stop`. Salvează în `Prenume_Nume_W4_L6`.

## Ce urmează — Lecția 7
Învățăm **funcțiile**: bucăți de cod cu nume, pe care le scrii o dată și le folosești de câte ori vrei.

---

## Răspunsuri pentru profesor
- **Exercițiul B:** (1) `3`, `2`, `1`; (2) `10`; (3) `1`, `2`, `4`, `5`; (4) `1`, `2`.  
- **Exercițiul C:** (1) `let i = 10; while (i >= 1) { console.log(i); i--; }`; (2) `let n = 5; while (n < 200) { console.log(n); n *= 2; }`; (3) `let cuvant; do { cuvant = prompt("Un cuvânt de cel puțin 3 litere:"); } while (cuvant === null || cuvant.length < 3);` (atenție: la Cancel `prompt` dă `null`, iar `null.length` dă eroare; de aceea verificăm întâi `cuvant === null`, iar `||` oprește evaluarea).  
- **Exercițiul D:** (1) lipsește `n++;` în corp (bucla nu se oprește); (2) `i = 5` trebuie o comparație, de exemplu `i > 5` sau `i !== 5` (depinde de ce vrea elevul); cu `=` condiția este mereu adevărată; (3) `break` în afara unei bucle.  
- **Exercițiul E:** `for` când știi de câte ori, `while` când repeți până se întâmplă ceva; `do…while` rulează corpul cel puțin o dată; `break` iese din buclă, `continue` sare peste restul rundei.  
- **Notă pentru profesor:** la (3) din Exercițiul C, verificarea `cuvant === null` înainte de `cuvant.length` poate fi prea grea; acceptați și o variantă fără tratarea lui Cancel, dacă elevul explică riscul. Pentru jocul principal, lăsați elevii să joace între ei: cel mai bun test este să încerce să strice jocul (litere, numere negative, Cancel). Insistați pe regula „fiecare `while` are un pas care o poate opri”.
