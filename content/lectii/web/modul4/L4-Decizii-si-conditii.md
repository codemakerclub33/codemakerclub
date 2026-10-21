# LECȚIA 4 — Decizii: if, else și mai multe condiții
**Modulul 4 · JavaScript pentru începători · 2 ore**  
**Code Maker Club · JavaScript Starter**

> Până acum programele tale făceau mereu **aceleași lucruri**, de sus în jos. Un program adevărat **alege**: dacă ai ghicit numărul, te felicită; dacă nu, îți spune dacă ai greșit în sus sau în jos. Azi înveți `if` și `else` („dacă” și „altfel”), `else if` pentru mai multe variante, cuvintele „și”, „sau”, „nu” din programare (`&&`, `||`, `!`) și `switch`, un meniu de alegeri.  
> Proiect: **„Ghicește numărul, cu indicii”** · folder: `Prenume_Nume_W4_L4` (ex. `Ana_Pop_W4_L4`)

---

## Obiectiv
La finalul orei știi să compari valori cu `>`, `<`, `>=`, `<=`, `===` și `!==`, să scrii decizii cu `if`, `else` și `else if`, să combini condiții cu `&&`, `||` și `!`, să verifici dacă un număr este într-un interval, să folosești `switch` și să verifici dacă utilizatorul a scris un număr valid.  
**Minim:** un program care cere vârsta și afișează un mesaj diferit pentru „sub 12 ani” și „12 ani sau mai mult”.  
**Ținta orei (Complet):** + o scară de decizii cu cel puțin 3 variante, `&&` și `||`, un meniu cu `switch`, verificarea numărului scris de utilizator și un joc de ghicit care spune „prea mic”, „prea mare” sau „corect”.

## De ce contează
Deciziile fac programul inteligent. Orice joc verifică dacă ai câștigat, orice site verifică dacă ai scris parola corectă, iar un magazin alege reducerea potrivită. Fără decizii, un program nu poate reacționa la ce face utilizatorul.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare · pornim proiectul |
| 10–30 | Comparații: `true` sau `false` (**Exemplele 1–2**) |
| 30–50 | `if` și `else` (**Exemplele 3–4**) |
| 50–65 | `else if`: mai multe variante (**Exemplele 5–6**) |
| 65–85 | `&&`, `||`, `!` (**Exemplele 7–8**) |
| 85–95 | `switch`: meniul (**Exemplul 9**) |
| 95–115 | Proiect (**Exemplul 10**) |
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
let varsta = Number(prompt("Câți ani ai?"));

if (varsta >= 12) {
  console.log("Poți intra la jocul de aventură.");
} else {
  console.log("Mai ai de așteptat, încă ești mic pentru acest joc.");
}
```

Se citește: „Dacă `varsta >= 12`, scrie primul mesaj; **altfel**, scrie al doilea.” Se execută **exact unul** dintre cele două blocuri, niciodată amândouă. `else` nu are condiție: el prinde tot ce n-a prins `if`-ul. Se scrie pe aceeași linie cu acolada de închidere: `} else {`.

Textul se compară tot cu `===`, dar **literele mari și mici contează**: `"Dragon"` nu este egal cu `"dragon"`. Ca să nu conteze, transformi răspunsul cu `toLowerCase()`:

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
- [ ] Scrie un program care cere vârsta și spune dacă ai voie la un film pentru 12 ani și peste  
- [ ] Rulează programul cu 5, cu 12 și cu 30 și notează ce afișează  
- [ ] Fă o „parolă de castel” cu `===` și `toLowerCase()`  

---

## 4. `else if`: mai multe variante

### Exemplul 5 — O scară de decizii

Uneori ai nevoie de **mai mult de două** drumuri: nota 10 înseamnă „Excelent”, nota 8 „Foarte bine”, nota 5 „Bine”, iar sub 5 „Mai încearcă”.

```javascript
let nota = Number(prompt("Ce notă ai luat (1-10)?"));

if (nota >= 9) {
  console.log("Excelent!");
} else if (nota >= 7) {
  console.log("Foarte bine!");
} else if (nota >= 5) {
  console.log("Bine, poți mai mult.");
} else {
  console.log("Mai încearcă, o să iasă.");
}
```

Cum se citește, **de sus în jos**:
1. Dacă `nota >= 9` → „Excelent!”.  
2. **Altfel, dacă** `nota >= 7` → „Foarte bine!”.  
3. **Altfel, dacă** `nota >= 5` → „Bine”.  
4. **Altfel** (orice altceva) → „Mai încearcă”.

Se execută **doar primul** bloc a cărui condiție este adevărată; restul se sar. La final, `else` este opțional, dar bun, ca să prindă tot ce a rămas.

### Exemplul 6 — Ordinea contează

```javascript
let nota = 10;

if (nota >= 5) {
  console.log("Bine");
} else if (nota >= 9) {
  console.log("Excelent");
}
```

Pentru `nota = 10`, afișează „Bine”, nu „Excelent”: prima condiție (`>= 5`) este adevărată și programul **nu mai ajunge** la a doua. Regula: **începe cu cea mai strictă condiție** (`>= 9`), apoi mergi spre cele mai largi (`>= 7`, `>= 5`).

**Gata când:**  
- [ ] Ai o scară de decizii cu cel puțin 3 variante și un `else`  
- [ ] Ai testat valorile 10, 8, 6 și 3  
- [ ] Poți explica de ce ordinea condițiilor contează  

---

## 5. `&&`, `||`, `!`

### Exemplul 7 — `&&` înseamnă „și”, `||` înseamnă „sau”

```javascript
let numar = Number(prompt("Scrie un număr:"));

if (numar >= 1 && numar <= 20) {
  console.log("Numărul este între 1 și 20.");
} else {
  console.log("Numărul este în afara intervalului.");
}
```

`&&` cere ca **amândouă** condițiile să fie adevărate. Aici: mai mare sau egal cu 1 **și** mai mic sau egal cu 20. Verificarea unui interval se scrie întotdeauna așa; nu merge `1 <= numar <= 20`.

```javascript
let zi = prompt("Ce zi este? (sâmbătă, duminică, luni…)");

if (zi === "sâmbătă" || zi === "duminică") {
  console.log("Este weekend, poți dormi mai mult!");
} else {
  console.log("Este zi de școală sau de lucru.");
}
```

`||` cere ca **cel puțin una** dintre condiții să fie adevărată. Semnul `||` se face cu două bare verticale. Fiecare parte a lui `||` și `&&` trebuie să fie o **comparație completă**: scrii `zi === "sâmbătă" || zi === "duminică"`, nu `zi === "sâmbătă" || "duminică"`.

### Exemplul 8 — `!` înseamnă „nu”

```javascript
let ploua = false;

if (!ploua) {
  console.log("Mergem la fotbal în curte!");
} else {
  console.log("Rămânem în casă și jucăm un joc de masă.");
}
```

`!` **întoarce** răspunsul: `!true` este `false`, iar `!false` este `true`. Cât timp `ploua` este `false`, `!ploua` este `true`, deci „Mergem la fotbal”.

Poți combina operatorii, cu **paranteze** ca să fie clar:

```javascript
let varsta = 11;
let areBilet = true;

if ((varsta >= 10 && varsta <= 14) && areBilet) {
  console.log("Poți intra în sala de jocuri.");
}
```

- `&&` (și): adevărat când **ambele** părți sunt adevărate;  
- `||` (sau): adevărat când **cel puțin una** este adevărată;  
- `!` (nu): adevărat când partea este **falsă**.  

Cu `||` poți verifica mai multe probleme deodată. Utilizatorul poate scrie litere, nimic sau un număr prea mare, iar un program bun **verifică**:

```javascript
let numar = Number(prompt("Scrie un număr de la 1 la 20:"));

if (Number.isNaN(numar) || numar < 1 || numar > 20) {
  console.log("Număr nevalid. Scrie un număr de la 1 la 20.");
} else {
  console.log("Ai scris:", numar);
}
```

- `Number.isNaN(numar)` este `true` dacă `Number(…)` n-a găsit un număr (rezultat `NaN`, de exemplu pentru litere). Nu poți scrie `numar === NaN`, pentru că `NaN` nu este egal nici cu el însuși; de aceea există `Number.isNaN`.  
- Dacă utilizatorul apasă **Cancel**, `prompt` dă `null`, iar `Number(null)` este `0`, deci fiind sub 1, va fi respins.

**Încearcă tu (8 min)**  
- [ ] Verifică dacă un număr este între 10 și 50, cu `&&`  
- [ ] Verifică dacă o culoare scrisă este „roșu” sau „albastru”, cu `||`  
- [ ] Rulează verificarea cu `abc`, cu `0`, cu `25` și cu `7` și citește mesajul pentru fiecare caz  

---

## 6. `switch`: un meniu de alegeri

### Exemplul 9 — `switch`

Când compari **aceeași valoare** cu mai multe variante exacte, `switch` este mai curat decât multe `else if`:

```javascript
let alegere = prompt("Alege o poartă: 1, 2 sau 3");

switch (alegere) {
  case "1":
    console.log("Ai găsit o comoară!");
    break;
  case "2":
    console.log("Ai întâlnit un dragon prietenos.");
    break;
  case "3":
    console.log("Ai căzut într-o pădure de bomboane.");
    break;
  default:
    console.log("Nu există o astfel de poartă.");
}
```

Cum funcționează:
- `switch (alegere)` spune „ia valoarea din `alegere`”;  
- fiecare `case` este o variantă: dacă valoarea se potrivește, se execută codul de după;  
- **`break;`** oprește `switch`-ul. **Fără `break`**, programul continuă și cu varianta următoare;  
- `default` este „orice altceva”, ca `else`.

Observă că `prompt` dă **text**, deci cazurile sunt `"1"`, `"2"` și `"3"` (cu ghilimele). Dacă ai transforma răspunsul în număr cu `Number(…)`, cazurile ar fi `1`, `2` și `3`, fără ghilimele.

**Gata când:**  
- [ ] Ai un `switch` cu cel puțin 3 `case`-uri, `break` la fiecare și un `default`  
- [ ] Ai încercat să scoți un `break` și ai văzut ce se întâmplă  
- [ ] Ai folosit `&&` sau `||` într-o condiție  

---

## 7. Proiectul

### Exemplul 10 — „Ghicește numărul, cu indicii”

Fișierul `index.html`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ghicește numărul, cu indicii</title>
</head>
<body>
  <h1>Ghicește numărul, cu indicii</h1>
  <p>Calculatorul se gândește la un număr de la 1 la 20. Deschide consola (F12) ca să vezi indiciile.</p>

  <script src="script.js"></script>
</body>
</html>
```

Fișierul `script.js`:

```javascript
// Numărul secret, între 1 și 20
const numarSecret = Math.floor(Math.random() * 20) + 1;

// Încercarea jucătorului
const incercare = Number(prompt("Ghicește numărul de la 1 la 20:"));

console.log("Ai ales:", incercare);

// Verificăm mai întâi dacă numărul este valid
if (Number.isNaN(incercare) || incercare < 1 || incercare > 20) {
  console.log("Număr nevalid. Trebuie să fie între 1 și 20.");
} else if (incercare === numarSecret) {
  console.log("Bravo! Ai ghicit!");
} else {
  // Cât de aproape ai fost?
  const diferenta = Math.abs(incercare - numarSecret);

  if (diferenta <= 2) {
    console.log("Foarte aproape!");
  } else if (incercare < numarSecret) {
    console.log("Prea mic.");
  } else {
    console.log("Prea mare.");
  }

  console.log("Numărul secret era:", numarSecret);
}

// Bonus: par sau impar
if (numarSecret % 2 === 0) {
  console.log("Numărul secret era par.");
} else {
  console.log("Numărul secret era impar.");
}
```

`Math.abs(…)` dă **valoarea absolută**: distanța fără semn (de exemplu `Math.abs(5 - 8)` și `Math.abs(8 - 5)` dau amândouă `3`). Aici îl folosim ca să aflăm cât de departe ai fost, indiferent dacă ai greșit în sus sau în jos.

Reîncarcă pagina și joacă de mai multe ori: de fiecare dată calculatorul alege alt număr. Acum ai o singură încercare la fiecare rulare; în lecția 6, cu `while`, vei avea mai multe încercări. Poți adapta jocul: alt interval, alte mesaje, alt subiect (de exemplu „la ce animal mă gândesc: 1 pisică, 2 câine, 3 pește”).

**Gata când:**  
- [ ] Calculatorul alege un număr aleator cu `Math.random`  
- [ ] Programul verifică dacă numărul este valid, cu `Number.isNaN` și `||`  
- [ ] Spune „Bravo”, „Foarte aproape”, „Prea mic” sau „Prea mare”, cu `else if`  
- [ ] Spune dacă numărul secret este par sau impar  
- [ ] Nu apar erori roșii în consolă  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Ghicește numărul, cu indicii” (obligatoriu)
În folderul `Prenume_Nume_W4_L4` ai `index.html` și `script.js`, cu:
- un **număr secret aleator** într-un interval ales de tine;
- **verificarea** numărului scris (să fie număr și să fie în interval), cu `||`;
- indicii **„prea mic” / „prea mare” / „corect”**, cu `else if`;
- cel puțin un **calificativ** sau o **poartă** realizată cu `switch`;
- toate comparațiile cu `===`, `>`, `<` etc. (niciun `=` în condiții);
- cod indentat și cel puțin două comentarii.

### Exercițiul B — Ce afișează programul?
Spune ce afișează: (1) `console.log(3 === 4);` (2) `console.log("pisica" === "Pisica");` (3) `let n = 15; if (n > 10 && n < 20) { console.log("A"); } else { console.log("B"); }` (4) `let n = 5; if (n > 10 || n === 5) { console.log("A"); } else { console.log("B"); }` (5) `let x = 7; if (x >= 5) { console.log("C"); } else if (x >= 7) { console.log("D"); }`

### Exercițiul C — Scrie codul
Scrie codul care: (1) spune „Ai trecut” dacă variabila `nota` este cel puțin 5, altfel „Mai încearcă”; (2) afișează „copil” dacă `varsta` este sub 13, „adolescent” dacă este între 13 și 17, și „adult” dacă este 18 sau mai mult; (3) spune dacă un număr cerut cu `prompt` este divizibil și cu 2, și cu 3 (folosește `%` și `&&`).

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile.

```text
let varsta = Number(prompt("Câți ani ai?"));
if (varsta = 10) {
  console.log("Ai zece ani");
}

let nota = 8;
if (nota >= 5) {
  console.log("Trecut");
} else if (nota >= 9) {
  console.log("Foarte bine");
}

let n = 5;
if (n >= 1 || n <= 10) {
  console.log("În interval");
}
```

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: care este diferența dintre `=` și `===`? Ce înseamnă `&&`, `||` și `!`? De ce contează ordinea condițiilor la `else if`? La ce folosește `break` în `switch`?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W4_L4` are `index.html` și `script.js`  
- [ ] Programul rulează fără erori  
- [ ] Ai răspuns la exercițiile B–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Fă un test „Poți urca în roller coaster?”: ai nevoie de cel puțin 120 cm înălțime  
- [ ] Fă un calculator de preț la cinema: copil sub 12 ani = 10 lei, student = 15 lei, ceilalți = 20 lei  
- [ ] Fă un joc „Piatră, hârtie, foarfecă” cu un adversar care alege aleator (0, 1 sau 2)  
- [ ] Fă un `switch` care primește o literă și spune dacă este vocală (`a`, `e`, `i`, `o`, `u`) cu mai multe `case` la rând, fără `break` între ele  

---

## Greșeli frecvente
1. **Ai scris `=` în loc de `===`** în condiție — `if (x = 5)` pune 5 în `x`, nu compară.  
2. **Ai uitat parantezele** din jurul condiției — `if x > 5 {` nu merge.  
3. **Ai uitat acoladele** sau ai pus o acoladă în plus — consola arată o eroare.  
4. **Ai pus `;` după paranteza condiției** — `if (x > 5);` oprește decizia.  
5. **Ai comparat un număr cu un text** — `prompt` dă text; transformă cu `Number(…)`.  
6. **Literele mari contează** — `"Da"` nu este egal cu `"da"`; folosește `toLowerCase()`.  
7. **Ai pus condiția largă prima** (`>= 5` înaintea lui `>= 9`) — cea strictă trebuie prima.  
8. **Ai scris `1 <= n <= 20`** — nu merge; scrie `n >= 1 && n <= 20`.  
9. **Ai folosit `||` în loc de `&&`** pentru interval — `n >= 1 || n <= 10` este mereu adevărat.  
10. **Ai uitat `break`** în `switch` — se execută și cazul următor.  

---

## Recapitulare pe scurt
1. O comparație răspunde `true` sau `false`: `> < >= <= === !==`.  
2. `=` pune o valoare în cutie, `===` întreabă dacă două valori sunt egale.  
3. `if (condiție) { … }` face ceva doar dacă condiția este adevărată; `else` prinde restul.  
4. `else if` face o scară de decizii: se execută primul bloc adevărat, de sus în jos, deci începe cu condiția cea mai strictă.  
5. `&&` = și, `||` = sau, `!` = nu. Un interval se scrie `n >= 1 && n <= 20`.  
6. `switch` compară aceeași valoare cu mai multe variante; `break` oprește, `default` prinde restul.  
7. Verifică ce scrie utilizatorul cu `Number.isNaN(…)` și cu limite.

## Quiz scurt
- Care este diferența dintre `=` și `===`?  
- Ce se întâmplă cu blocul `else` dacă `if` este adevărat?  
- De ce contează ordinea la `else if`?  
- Ce face `&&`? Dar `||`?  
- La ce folosește `break`?  
- Cum verifici dacă un număr este între 1 și 20?

## Temă
Fă un „Meniu al cafenelei”: cu `switch`, utilizatorul alege 1 (limonadă), 2 (sandviș) sau 3 (prăjitură), iar programul afișează prețul. Pentru altă valoare, un mesaj de eroare. Salvează în `Prenume_Nume_W4_L4`.

## Ce urmează — Lecția 5
Învățăm **repetările cu `for`**: programul face de zeci de ori ceva, fără să scrii codul de zeci de ori.

---

## Răspunsuri
- **Quiz scurt:** (1) `=` pune o valoare în variabilă, iar `===` compară două valori („este egal cu?”); (2) se sare, deoarece se execută exact unul dintre cele două blocuri; (3) se execută primul bloc adevărat, deci condiția cea mai strictă trebuie scrisă prima; (4) `&&` înseamnă „și” (ambele condiții adevărate), iar `||` înseamnă „sau” (cel puțin una adevărată); (5) `break` oprește `switch`-ul, ca să nu continue cu cazul următor; (6) `numar >= 1 && numar <= 20`.  
- **Dacă ritmul clasei este lent:** `switch` și explicația despre `NaN` sunt opționale; în proiect puteți renunța la `Math.abs` și la mesajul „Foarte aproape”.  
- **Exercițiul B:** (1) `false`; (2) `false` (litera mare contează); (3) `A`; (4) `A` (a doua parte este adevărată); (5) `C` (a doua condiție nu se mai verifică).  
- **Exercițiul C:** (1) `if (nota >= 5) { console.log("Ai trecut"); } else { console.log("Mai încearcă"); }`; (2) `if (varsta < 13) { … } else if (varsta <= 17) { … } else { … }`; (3) `let n = Number(prompt("Număr:")); if (n % 2 === 0 && n % 3 === 0) { … }`.  
- **Exercițiul D:** (1) `varsta = 10` trebuie `varsta === 10`; (2) ordinea condițiilor: `nota >= 9` trebuie înaintea lui `nota >= 5`, altfel „Foarte bine” nu apare niciodată; (3) `||` trebuie `&&` (cu `||` condiția este mereu adevărată).  
- **Exercițiul E:** `=` pune valoarea, `===` compară; `&&` și, `||` sau, `!` nu; condiția strictă prima, altfel cea largă „fură” cazurile; `break` oprește `switch`-ul ca să nu continue cu următorul caz.  
- **Notă pentru profesor:** o demonstrație bună pe tablă este un desen cu o „bifurcație” (drum cu două ramuri): condiția este panoul care alege ramura. Insistați pe `=` contra `===`: dacă elevii scriu `if (x = 5)`, programul „merge”, dar face altceva, iar greșeala este greu de văzut. La `&&` și `||` este util un tabel pe tablă cu toate combinațiile de `true` și `false`. Arătați că ordinea de la `else if` contează rulând Exemplul 6 cu și fără inversare. Copiii confundă des `1 <= n <= 20`: cereți elevilor să încerce cu `n = 50` ca să vadă că „merge” greșit. La jocul cu parola, lămuriți că este doar un exercițiu: parolele adevărate se verifică pe un server, nu în pagină. Lecția este densă: dacă ritmul clasei o cere, `switch` poate rămâne ca temă.
