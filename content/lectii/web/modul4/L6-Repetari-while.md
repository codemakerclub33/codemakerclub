# LECȚIA 6 — Mai multe încercări
### Repetări: bucla `while`
**Modulul 4 · JavaScript pentru începători · 2 ore**  
**Code Maker Club · JavaScript Starter**

> Bucla `for` este bună când știi **de câte ori** repeți. Dar uneori nu știi: „repetă **cât timp** nu ai ghicit numărul”, „repetă **cât timp** mai ai vieți”. Pentru asta există bucla `while` („cât timp”). Azi o învățăm, împreună cu `do…while`, `break` și `continue`.  
> Proiect: **„Mai multe încercări”** · folder: `Prenume_Nume_W4_L6` (ex. `Ana_Pop_W4_L6`)

---

## Ce facem azi
La final ai jocul „Ghicește numărul” din lecția 4, dar cu mai multe încercări: jucătorul are cel mult 5 încercări, primește indicii după fiecare, o încercare nevalidă nu se numără, iar Cancel oprește jocul. Știi să scrii o buclă `while`, să ai grijă ca bucla să se oprească, să folosești `do…while`, să ieși dintr-o buclă cu `break`, să sari peste o rundă cu `continue` și să alegi între `for` și `while`. Multe lucruri din programe se repetă „până se întâmplă ceva”: un joc rulează până pierzi toate viețile, un meniu se afișează până alegi „Ieșire”. `while` este unealta potrivită.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare · pornim proiectul |
| 10–25 | Prima buclă `while` (**Exemplul 1**) |
| 25–40 | Când nu știi câte runde sunt (**Exemplul 2**) |
| 40–50 | Jumătăți și alegerea între `for` și `while` (**Exemplul 3**) |
| 50–62 | `do…while` (**Exemplul 4**) |
| 62–72 | `break`: ieșim din buclă (**Exemplul 5**) |
| 72–80 | `continue`: sărim peste o rundă (**Exemplul 6**) |
| 80–90 | `while (true)` cu `break` sigur (**Exemplul 7**) |
| 90–115 | Mini-proiect: mai multe încercări (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `while (condiție) { … }` | Repetă cât timp condiția este adevărată | `while (i <= 5) { … }` |
| `do { … } while (condiție);` | Rulează corpul cel puțin o dată | `do { … } while (x < 1);` |
| `break` | Iese din buclă | `break;` |
| `continue` | Sare peste restul rundei | `continue;` |
| `while (true)` | Buclă care se oprește doar cu `break` | `while (true) { … }` |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- `for (început; condiție; pas) { … }` repetă corpul cât timp condiția este adevărată;
- un total se creează **înainte** de buclă și se adună în buclă;
- o buclă a cărei condiție nu devine falsă niciodată îngheață pagina;
- cu `cuvant[i]` parcurgi literele unui text.

**Încearcă tu (8 min)**  
- [ ] Creează folderul `Prenume_Nume_W4_L6` ca o **copie** a folderului `Prenume_Nume_W4_L5` (cu `tema.html`, `script.js`, `stil.css`, `imagini`, `media`)  
- [ ] Șterge din `script.js` programul de la lecția trecută (sau comentează-l cu `/* … */`)  
- [ ] Scrie o buclă `for` care afișează numerele de la 1 la 5  
- [ ] Alege din articolul tău un număr (de exemplu un an) și un cuvânt din titlu  

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

**Atenție: pasul nu trebuie uitat.** Dacă scoți `i++`:

```text
let i = 1;
while (i <= 5) {
  console.log(i);
}
```

valoarea lui `i` rămâne `1`, condiția rămâne mereu adevărată, iar bucla **nu se oprește niciodată** (pagina îngheață; închide fila și repară). **Regula:** în corpul lui `while` trebuie să se schimbe **ceva** care va face într-o zi condiția falsă. Nu rula exemplul de mai sus: este doar pentru a recunoaște greșeala.

**Încearcă tu (8 min)**  
- [ ] Scrie o buclă `while` care numără de la 1 la 5  
- [ ] Fă o numărătoare inversă de la 5 la 1, cu `while`  
- [ ] Numără de la 1 până la numărul din articolul tău, cu `while`  
- [ ] Arată în cod unde stau început, condiție și pas  

**Gata când:**  
- [ ] Ai scris o buclă `while` care numără de la 1 la 5  
- [ ] Poți arăta în cod unde stau început, condiție și pas într-un `while`  
- [ ] Știi de ce bucla fără pas nu se termină  

---

## 3. Când nu știi câte runde

### Exemplul 2 — Cât timp nu ai ajuns la obiectiv

Un exemplu: cât timp mai ai bani în pușculiță, cumperi câte o înghețată de 3 lei:

```javascript
let bani = 10;
let inghetate = 0;

while (bani >= 3) {
  bani -= 3;
  inghetate++;
  console.log(`Înghețate cumpărate: ${inghetate}. Au rămas ${bani} lei.`);
}

console.log("Nu mai pot cumpăra nimic.");
```

Rezultat:

```text
Înghețate cumpărate: 1. Au rămas 7 lei.
Înghețate cumpărate: 2. Au rămas 4 lei.
Înghețate cumpărate: 3. Au rămas 1 lei.
Nu mai pot cumpăra nimic.
```

Nu am știut de la început câte runde vor fi: depinde de câți bani ai. Cu `for` ar fi fost mai greu de scris. Bucla se oprește singură când condiția devine falsă (`bani >= 3` nu mai este adevărat).

**Încearcă tu (6 min)**  
- [ ] Scrie programul cu înghețatele, dar cu alt preț și alți bani  
- [ ] Schimbă banii la 100 și vezi câte runde apar fără să modifici bucla  
- [ ] Fă un program în care ai tot atâtea vieți cât numărul de capitole din articolul tău și pierzi câte una pe rând  
- [ ] Spune de ce aici nu merge bine un `for`  

### Exemplul 3 — Jumătăți: `for` sau `while`?

Înjumătățim un număr până ajunge sub 1:

```javascript
let numar = 100;
let pasi = 0;

while (numar >= 1) {
  numar = numar / 2;
  pasi++;
}

console.log("Am jumătățit de", pasi, "ori");
```

Rezultat: `7`.

Nu știm dinainte câți pași sunt, deci `while` este alegerea bună.

**Regula de alegere:**
- **`for`** când știi **de câte ori** (de la 1 la 10, literele unui cuvânt);  
- **`while`** când repeți **până se întâmplă ceva** (ai ghicit, ai rămas fără vieți).

**Încearcă tu (6 min)**  
- [ ] Jumătățește numărul din articolul tău până ajunge sub 1 și numără pașii  
- [ ] Dublează un număr (începând de la 1) cât timp este mai mic de 1000 și numără pașii  
- [ ] Spune ce alegi pentru fiecare: „afișez 1–20” și „repet până ghicesc”  
- [ ] Scrie cu `while` și cu `for` același program, care afișează numerele de la 1 la 5  

**Gata când:**  
- [ ] Ai o buclă `while` care se oprește singură când condiția devine falsă  
- [ ] Ai numărat pașii într-o variabilă  
- [ ] Poți alege între `for` și `while` după întrebarea „știu de câte ori?”  

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

Observă punctul și virgula de după `while (…)` la sfârșit: la `do…while` ea se scrie. Dacă utilizatorul apasă **Cancel**, `Number(null)` este `0`, deci va fi respins și întrebarea revine. Pentru un program care permite renunțarea, ai nevoie de `break` (exemplul următor).

**Încearcă tu (8 min)**  
- [ ] Cere un număr de la 1 la 10 până primești unul valid  
- [ ] Cere un cuvânt cu `prompt`, până când scrie cel puțin 3 litere  
- [ ] Cere „parola” (cuvântul din titlul articolului tău) până o scrii corect, cu `toLowerCase()`  
- [ ] Rulează programul cu litere, apoi cu un număr bun, și vezi cum se oprește  

---

## 5. `break` și `continue`

### Exemplul 5 — `break`: ieșim din buclă

`break` **iese** din buclă pe loc:

```javascript
for (let i = 1; i <= 100; i++) {
  if (i % 17 === 0) {
    console.log("Primul număr divizibil cu 17:", i);
    break;
  }
}
```

Rezultat: `Primul număr divizibil cu 17: 17`.

Bucla era făcută să meargă până la 100, dar la 17 a găsit ce căuta și `break` a oprit-o: nu mai are rost să continue.

**Încearcă tu (6 min)**  
- [ ] Caută primul număr divizibil cu 23, între 1 și 200, și oprește-te  
- [ ] Scoate `break` și vezi că bucla afișează toate numerele divizibile cu 17  
- [ ] Caută primul număr mai mare decât anul din articolul tău, care se împarte exact la 7  
- [ ] Spune când ai folosi `break` într-un joc  

### Exemplul 6 — `continue`: sărim peste o rundă

`continue` **sare** peste restul rundei curente și trece la următoarea:

```javascript
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    continue;   // sare peste numerele divizibile cu 3
  }
  console.log(i);
}
```

Rezultat: `1`, `2`, `4`, `5`, `7`, `8`, `10`. La `i = 3`, `6` și `9`, `continue` sare peste afișare, deci aceste numere lipsesc, dar bucla merge mai departe.

**Încearcă tu (6 min)**  
- [ ] Afișează numerele de la 1 la 10, dar sari peste cele pare  
- [ ] Afișează literele unui cuvânt, dar sari peste litera „a”  
- [ ] Afișează literele din titlul articolului tău, fără vocale  
- [ ] Explică diferența dintre `break` și `continue` cu propriile cuvinte  

**Gata când:**  
- [ ] Ai folosit `break` ca să oprești o buclă  
- [ ] Ai folosit `continue` ca să sari peste o rundă  
- [ ] Poți spune diferența dintre ele  

---

## 6. `while (true)` cu un `break` sigur

### Exemplul 7 — O buclă care se oprește la comandă

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

Ordinea contează: verificăm întâi `raspuns === null`, apoi `raspuns === "stop"`. Dacă ai întreba direct ceva despre textul din `raspuns` (de exemplu `.length`), un `null` ar produce o eroare.

**Încearcă tu (6 min)**  
- [ ] Fă o buclă `prompt` care se oprește la cuvântul „gata”  
- [ ] Fă ca bucla să afișeze fiecare cuvânt scris cu litere mari  
- [ ] Numără câte cuvinte ai scris până la „gata” și afișează numărul  
- [ ] Fă-o să se oprească și dacă scrii cuvântul din titlul articolului tău  

**Gata când:**  
- [ ] Ai un `while (true)` cu un `break` care se poate întâmpla  
- [ ] Bucla se oprește și la Cancel  
- [ ] Nu ai blocat pagina  

---

## 7. Mini-proiect: toate la un loc

### Exemplul 8 — „Mai multe încercări”

Ghicim același tip de număr ca în lecția 4, dar acum avem **mai multe încercări**. Regulile:
- calculatorul alege un număr de la 1 la 20;  
- jucătorul are **cel mult 5 încercări**;  
- după fiecare încercare primește indiciul „prea mic” sau „prea mare”;  
- o încercare nevalidă (litere, număr în afara intervalului) **nu se numără**;  
- dacă apasă Cancel, jocul se oprește.

Iată programul-model. `tema.html` rămâne cum este; în `script.js` scrii:

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

**Încearcă tu (14 min)**  
- [ ] Scrie jocul în `script.js`, cu valorile tale, nu copiat  
- [ ] Schimbă intervalul la 1–50 și numărul de încercări la 7 (atenție la toate numerele din cod)  
- [ ] Schimbă jocul să ghicești anul din articolul tău, în jurul lui (de exemplu într-un interval de 20 de ani)  
- [ ] Joacă jocul cu un coleg și încearcă să-l strici: litere, numere negative, Cancel  

**Gata când:**  
- [ ] Jocul are cel mult 5 încercări și le numără corect  
- [ ] Spune „prea mic” sau „prea mare” după fiecare încercare greșită  
- [ ] O încercare nevalidă nu se numără (`continue`)  
- [ ] Cancel oprește jocul (`break`)  
- [ ] La final afișează un mesaj potrivit pentru câștig, renunțare sau înfrângere  

---

## De făcut azi — „Mai multe încercări”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | `script.js` cu o buclă `while` care numără de la 1 la 5 și un joc în care ai cel puțin 3 încercări |
| **Complet** | Minim + număr secret aleator, un număr maxim de încercări (`const`), indicii „prea mic” / „prea mare” cu `if` / `else if`, o încercare nevalidă care nu se numără (`continue`), ieșire la Cancel (`break`), un mesaj final diferit pentru câștig, renunțare și înfrângere, cod indentat și două comentarii |

### Pasul 1 — Minim
În folderul `Prenume_Nume_W4_L6`:

- [ ] Ai `tema.html` (cu `<script>` legat), `script.js` și `stil.css`  
- [ ] Ai o buclă `while` care numără de la 1 la 5  
- [ ] Ai un joc în care jucătorul are cel puțin 3 încercări  

### Pasul 2 — Complet
- [ ] Ai un număr secret aleator într-un interval ales de tine  
- [ ] Ai un număr maxim de încercări, într-o constantă `const`  
- [ ] Ai indicii „prea mic” / „prea mare”, cu `if` / `else if`  
- [ ] O încercare nevalidă nu se numără, cu `continue`  
- [ ] Cancel oprește jocul, cu `break`  
- [ ] Ai un mesaj final diferit pentru câștig, renunțare și înfrângere  
- [ ] Codul este indentat și are cel puțin două comentarii  

---

## Bonus ★★★ — Provocare: Meniul jocului
*Doar dacă ai terminat Complet.*

Faci jocul mai bogat, cu scor și meniu.

- [ ] Adaugă la joc un scor: 5 puncte la prima încercare, 4 la a doua etc.  
- [ ] Fă un meniu care se repetă (`while (true)`) cu opțiunile „1 Joc”, „2 Ajutor”, „0 Ieșire”  
- [ ] Calculează de câte ori poți împărți un număr la 2 până când rămâne mai mic sau egal cu 1  
- [ ] Fă ca jocul să întrebe „Vrei să mai joci?” și să reia jocul dacă răspunsul este „da”  

---

## Greșeli frecvente
1. **Ai uitat pasul din corpul lui `while`** — bucla nu se oprește.  
2. **Ai scris `while (i = 5)` sau ai pus condiția pe dos** — un singur `=` pune valoarea, nu compară; iar `while (i >= 5)` când voiai `<=` nu rulează deloc sau nu se termină.  
3. **Ai uitat valoarea inițială** înainte de buclă — eroare sau `NaN`.  
4. **Ai scris `break` în afara unei bucle** (`Illegal break statement`) **sau ai folosit `while (true)` fără `break`** — bucla nu se termină.  
5. **Ai pus `continue` înainte de pasul `i++`** — în `while`, `continue` sare peste pas și bucla se blochează. Mută pasul înainte de `continue`, sau numără încercările valide cum am făcut în proiect.  
6. **Ai uitat punctul și virgula** la sfârșitul lui `do…while (…);`.  
7. **Ai folosit `for` unde `while` este mai potrivit** (sau invers) — alege după „știu de câte ori?”.  
8. **Ai uitat că `Cancel` dă `null`** — programul poate rămâne blocat într-o întrebare fără ieșire.  

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
1. Termină `Prenume_Nume_W4_L6` (Minim, apoi Complet).  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Înmulțim până trecem de 100.**

```javascript
let n = 1;
while (n < 100) {
  n = n * 3;
}
console.log(n);
```

Afișează `243`: `n` devine 3, 9, 27, 81, 243, iar când nu mai este sub 100, bucla se oprește. Schimbă `3` cu `2` și prezice rezultatul înainte să rulezi.

**Acasă 2 — Suma cifrelor.**

```javascript
let numar = 472;
let suma = 0;
while (numar > 0) {
  suma += numar % 10;
  numar = Math.floor(numar / 10);
}
console.log(suma);
```

Afișează `13` (2 + 7 + 4): `% 10` ia ultima cifră, iar `Math.floor(numar / 10)` o taie. Încearcă-l cu anul din articolul tău.

4. **Încă patru exerciții (B–E):**

**B — Ce afișează bucla?** Spune ce afișează: (1) `let n = 3; while (n > 0) { console.log(n); n--; }` (2) `let s = 0; let i = 1; while (i <= 4) { s += i; i++; } console.log(s);` (3) `for (let i = 1; i <= 5; i++) { if (i === 3) { continue; } console.log(i); }` (4) `for (let i = 1; i <= 5; i++) { if (i === 3) { break; } console.log(i); }`

**C — Scrie codul.** Scrie codul care: (1) cu `while`, afișează numerele de la 10 la 1; (2) dublează un număr (pornind de la 5) cât timp este mai mic de 200 și afișează fiecare valoare; (3) cu `do…while`, cere un cuvânt cu `prompt` până când scrie cel puțin 3 litere.

**D — Găsește greșelile.** Găsește **3 greșeli** în codul de mai jos și repară greșelile. Primul bloc vrea să afișeze numerele de la 1 la 5, al doilea numerele de la 10 la 6. Nu rula primele două blocuri fără să le repari.

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

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: când alegi `for` și când alegi `while`? Care este diferența dintre `while` și `do…while`? Ce fac `break` și `continue`?

## Ce urmează — Lecția 7
Învățăm **funcțiile**: bucăți de cod cu nume, pe care le scrii o dată și le folosești de câte ori vrei.

---

## Răspunsuri
- **Quiz scurt:** (1) bucla `while` repetă corpul cât timp condiția rămâne adevărată; (2) condiția rămâne mereu adevărată, bucla nu se mai oprește și pagina îngheață; (3) când corpul trebuie să ruleze cel puțin o dată, de exemplu „întreabă până răspunde corect”; (4) sare peste restul rundei curente și trece la runda următoare; (5) `null`.  
- **Tema, exercițiul B:** (1) `3`, `2`, `1`; (2) `10`; (3) `1`, `2`, `4`, `5`; (4) `1`, `2`.  
- **Tema, exercițiul C:** (1) `let i = 10; while (i >= 1) { console.log(i); i--; }`; (2) `let n = 5; while (n < 200) { console.log(n); n *= 2; }`; (3) `let cuvant; do { cuvant = prompt("Un cuvânt de cel puțin 3 litere:"); } while (cuvant === null || cuvant.length < 3);` (la Cancel `prompt` dă `null`, iar `null.length` dă eroare; de aceea verificăm întâi `cuvant === null`, iar `||` oprește evaluarea).  
- **Tema, exercițiul D:** (1) lipsește `n++;` în corp (bucla nu se oprește); (2) `i = 5` trebuie o comparație, `i > 5` (cu `=` condiția este mereu adevărată); (3) `break` în afara unei bucle.  
- **Tema, exercițiul E:** `for` când știi de câte ori, `while` când repeți până se întâmplă ceva; `do…while` rulează corpul cel puțin o dată; `break` iese din buclă, `continue` sare peste restul rundei.  
- **Bonus (indicii):** (1) un `punctaj` care pornește de la 6 și scade cu numărul încercării (`6 - incercari`), afișat la câștig; (2) `while (true)` cu `prompt` și un `switch` pe răspuns; la `"0"` faci `break`; (3) o variabilă `pasi` care crește la fiecare împărțire, într-un `while (numar > 1)`; (4) pui tot jocul într-o buclă mai mare, care se oprește dacă răspunsul nu este `"da"`.  
- **Notă informativă:** la (3) din Exercițiul C, verificarea `cuvant === null` înainte de `cuvant.length` poate fi grea; poți face și o variantă fără tratarea lui Cancel, dacă știi să explici riscul. Joacă jocul cu un coleg: cel mai bun test este să încerci să-l strici (litere, numere negative, Cancel). Ține minte regula: fiecare `while` are un pas care îl poate opri.
