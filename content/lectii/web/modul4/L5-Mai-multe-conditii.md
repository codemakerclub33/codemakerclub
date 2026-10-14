# LECȚIA 5 — Mai multe condiții
**Modulul 4 · JavaScript pentru începători · 2 ore**  
**Code Maker Club · JavaScript Starter**

> La lecția trecută programul alegea între **două** drumuri. Uneori ai nevoie de **mai multe**: nota 10 înseamnă „Excelent”, nota 8 „Foarte bine”, nota 5 „Bine”, iar sub 5 „Mai încearcă”. Azi înveți `else if`, cuvintele „și”, „sau”, „nu” din programare (`&&`, `||`, `!`) și `switch`, un meniu de alegeri.  
> Proiect: **„Ghicește numărul, cu indicii”** · folder: `Prenume_Nume_W4_L5` (ex. `Ana_Pop_W4_L5`)

---

## Obiectiv
La finalul orei știi să scrii o decizie cu mai multe variante (`else if`), să combini condiții cu `&&`, `||` și `!`, să verifici dacă un număr este într-un interval, să folosești `switch` cu `break` și `default` și să verifici dacă utilizatorul a scris un număr valid.  
**Minim:** un program care transformă o notă în calificativ (cel puțin 3 variante) cu `else if`.  
**Ținta orei (Complet):** + `&&` și `||`, un meniu cu `switch`, verificarea unui număr scris de utilizator și un joc de ghicit care spune „prea mic”, „prea mare” sau „corect”.

## De ce contează
Lumea este plină de situații cu mai multe variante: nivelurile unui joc, reducerile dintr-un magazin, zilele săptămânii. Cu `else if` și cu operatorii logici, programul tău poate face alegeri mai bune și poate verifica dacă datele primite au sens.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–35 | `else if`: mai multe variante (**Exemplele 1–2**) |
| 35–60 | `&&`, `||`, `!` (**Exemplele 3–5**) |
| 60–80 | `switch`: meniul (**Exemplul 6**) |
| 80–95 | Verificăm ce a scris utilizatorul (**Exemplul 7**) |
| 95–115 | Proiect (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- o comparație dă `true` sau `false`: `> < >= <= === !==`;
- `=` pune o valoare, `===` întreabă dacă sunt egale;
- `if (condiție) { … } else { … }` execută exact unul dintre cele două blocuri;
- `prompt` dă text, iar `Number(…)` îl face număr.

**Încearcă tu (4 min)**  
- [ ] Creează folderul `Prenume_Nume_W4_L5` cu `index.html` (scheletul complet, cu `<script src="script.js"></script>` înainte de `</body>`) și `script.js`  
- [ ] Pune în `<body>` un `<h1>` cu textul „Mai multe condiții”  
- [ ] În `script.js` scrie un `if` / `else` simplu care spune dacă un număr cerut este pozitiv  

> De aici înainte, exemplele arată ce scrii în `script.js`.

---

## 2. `else if`: mai multe variante

### Exemplul 1 — O scară de decizii

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

### Exemplul 2 — Ordinea contează

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

## 3. `&&`, `||`, `!`

### Exemplul 3 — `&&` înseamnă „și”

```javascript
let numar = Number(prompt("Scrie un număr:"));

if (numar >= 1 && numar <= 20) {
  console.log("Numărul este între 1 și 20.");
} else {
  console.log("Numărul este în afara intervalului.");
}
```

`&&` cere ca **amândouă** condițiile să fie adevărate. Aici: mai mare sau egal cu 1 **și** mai mic sau egal cu 20. Verificarea unui interval se scrie întotdeauna așa; nu merge `1 <= numar <= 20`.

### Exemplul 4 — `||` înseamnă „sau”

```javascript
let zi = prompt("Ce zi este? (sâmbătă, duminică, luni…)");

if (zi === "sâmbătă" || zi === "duminică") {
  console.log("Este weekend, poți dormi mai mult!");
} else {
  console.log("Este zi de școală sau de lucru.");
}
```

`||` cere ca **cel puțin una** dintre condiții să fie adevărată. Semnul `||` se face cu două bare verticale. Fiecare parte a lui `||` și `&&` trebuie să fie o **comparație completă**: scrii `zi === "sâmbătă" || zi === "duminică"`, nu `zi === "sâmbătă" || "duminică"`.

### Exemplul 5 — `!` înseamnă „nu”

```javascript
let plouă = false;

if (!plouă) {
  console.log("Mergem la fotbal în curte!");
} else {
  console.log("Rămânem în casă și jucăm un joc de masă.");
}
```

`!` **întoarce** răspunsul: `!true` este `false`, iar `!false` este `true`. Cât timp `plouă` este `false`, `!plouă` este `true`, deci „Mergem la fotbal”.

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

**Încearcă tu (8 min)**  
- [ ] Verifică dacă un număr este între 10 și 50, cu `&&`  
- [ ] Verifică dacă o culoare scrisă este „roșu” sau „albastru”, cu `||`  
- [ ] Folosește `!` ca să întorci o variabilă `true`  

---

## 4. `switch`: un meniu de alegeri

### Exemplul 6 — `switch`

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

## 5. Verificăm ce a scris utilizatorul

### Exemplul 7 — Număr valid sau nu?

Utilizatorul poate scrie litere, nimic sau un număr prea mare. Un program bun **verifică**:

```javascript
let numar = Number(prompt("Scrie un număr de la 1 la 20:"));

if (Number.isNaN(numar) || numar < 1 || numar > 20) {
  console.log("Număr nevalid. Scrie un număr de la 1 la 20.");
} else {
  console.log("Ai scris:", numar);
}
```

- `Number.isNaN(numar)` este `true` dacă `Number(…)` n-a găsit un număr (rezultat `NaN`, de exemplu pentru litere). Nu poți scrie `numar === NaN`, pentru că `NaN` nu este egal nici cu el însuși; de aceea există `Number.isNaN`.  
- Cu `||` verificăm trei probleme deodată: „nu este număr” **sau** „prea mic” **sau** „prea mare”.  
- Dacă utilizatorul apasă **Cancel**, `prompt` dă `null`, iar `Number(null)` este `0`, deci fiind sub 1, va fi respins.

**Încearcă tu (6 min)**  
- [ ] Rulează programul cu `abc`, cu `0`, cu `25` și cu `7`  
- [ ] Citește mesajul pentru fiecare caz  
- [ ] Adaugă o a patra verificare: numărul să fie întreg (`Number.isInteger(numar)`)  

---

## 6. Proiectul

### Exemplul 8 — „Ghicește numărul, cu indicii”

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
```

`Math.abs(…)` dă **valoarea absolută**: distanța fără semn (de exemplu `Math.abs(5 - 8)` și `Math.abs(8 - 5)` dau amândouă `3`). Aici îl folosim ca să aflăm cât de departe ai fost, indiferent dacă ai greșit în sus sau în jos.

Reîncarcă pagina și joacă de mai multe ori. Poți adapta jocul: alt interval, alte mesaje, alt subiect (de exemplu „la ce animal mă gândesc”, cu numere pentru animale).

**Gata când:**  
- [ ] Programul verifică dacă numărul este valid, cu `Number.isNaN` și `||`  
- [ ] Spune „Bravo”, „Foarte aproape”, „Prea mic” sau „Prea mare”  
- [ ] Folosește `else if` și cel puțin un `&&` sau `||`  
- [ ] Nu apar erori roșii în consolă  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Ghicește numărul, cu indicii” (obligatoriu)
În folderul `Prenume_Nume_W4_L5` ai `index.html` și `script.js`, cu:
- un **număr secret aleator** într-un interval ales de tine;
- **verificarea** numărului scris (să fie număr și să fie în interval), cu `||`;
- indicii **„prea mic” / „prea mare” / „corect”**, cu `else if`;
- cel puțin un **calificativ** sau o **poartă** realizată cu `switch`;
- cod indentat și cel puțin două comentarii.

### Exercițiul B — Ce afișează programul?
Spune ce afișează: (1) `let n = 15; if (n > 10 && n < 20) { console.log("A"); } else { console.log("B"); }` (2) `let n = 5; if (n > 10 || n === 5) { console.log("A"); } else { console.log("B"); }` (3) `let ok = true; if (!ok) { console.log("A"); } else { console.log("B"); }` (4) `let x = 7; if (x >= 5) { console.log("C"); } else if (x >= 7) { console.log("D"); }`

### Exercițiul C — Scrie codul
Scrie codul care: (1) afișează „copil” dacă `varsta` este sub 13, „adolescent” dacă este între 13 și 17, și „adult” dacă este 18 sau mai mult; (2) spune dacă un număr este divizibil și cu 2, și cu 3 (folosește `%` și `&&`); (3) cu `switch`, afișează numele culorii pentru `"r"` (roșu), `"g"` (galben) sau `"a"` (albastru), iar pentru orice altceva „necunoscut”.

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile.

```text
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

let zi = 1;
switch (zi) {
  case 1:
    console.log("Luni");
  case 2:
    console.log("Marți");
    break;
}
```

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: ce înseamnă `&&`, `||` și `!`? De ce contează ordinea condițiilor la `else if`? La ce folosește `break` în `switch`?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W4_L5` are `index.html` și `script.js`  
- [ ] Programul rulează fără erori  
- [ ] Ai răspuns la exercițiile B–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Fă un calculator de preț la cinema: copil sub 12 ani = 10 lei, student = 15 lei, ceilalți = 20 lei  
- [ ] Fă un joc „Piatră, hârtie, foarfecă” cu un adversar care alege aleator (0, 1 sau 2)  
- [ ] Fă un program care spune dacă un an este bisect (divizibil cu 4, dar nu cu 100, sau divizibil cu 400)  
- [ ] Fă un `switch` care primește o literă și spune dacă este vocală (`a`, `e`, `i`, `o`, `u`) cu mai multe `case` la rând, fără `break` între ele  

---

## Greșeli frecvente
1. **Ai pus condiția largă prima** (`>= 5` înaintea lui `>= 9`) — cea strictă trebuie prima.  
2. **Ai scris `1 <= n <= 20`** — nu merge; scrie `n >= 1 && n <= 20`.  
3. **Ai folosit `||` în loc de `&&`** pentru interval — `n >= 1 || n <= 10` este mereu adevărat.  
4. **Ai scris `zi === "sâmbătă" || "duminică"`** — fiecare parte trebuie să fie o comparație completă.  
5. **Ai uitat `break`** în `switch` — se execută și cazul următor.  
6. **Ai scris cazurile cu numere**, dar valoarea din `prompt` este text (sau invers).  
7. **Ai scris `numar === NaN`** — folosește `Number.isNaN(numar)`.  
8. **Ai uitat `default`** — pentru valori neașteptate nu apare nimic.  
9. **Ai pus `;` după `if (…)`** — oprește decizia.  
10. **Ai folosit un singur `&` sau o singură `|`** — sunt alți operatori; folosește două.  

---

## Recapitulare pe scurt
1. `else if` face o scară de decizii: se execută primul bloc adevărat, de sus în jos.  
2. Începe cu condiția cea mai strictă.  
3. `&&` = și, `||` = sau, `!` = nu.  
4. Un interval se scrie `n >= 1 && n <= 20`.  
5. `switch` compară aceeași valoare cu mai multe variante; `break` oprește, `default` prinde restul.  
6. Verifică ce scrie utilizatorul cu `Number.isNaN(...)` și cu limite.

## Quiz scurt
- Ce face `&&`? Dar `||`?  
- De ce contează ordinea la `else if`?  
- La ce folosește `break`?  
- Cum verifici dacă un număr este între 1 și 20?  
- Ce este `Number.isNaN(x)`?

## Temă
Fă un „Meniu al cafenelei”: cu `switch`, utilizatorul alege 1 (limonadă), 2 (sandviș) sau 3 (prăjitură), iar programul afișează prețul. Pentru altă valoare, un mesaj de eroare. Salvează în `Prenume_Nume_W4_L5`.

## Ce urmează — Lecția 6
Învățăm **repetările cu `for`**: programul face de zeci de ori ceva, fără să scrii codul de zeci de ori.

---

## Răspunsuri pentru profesor
- **Exercițiul B:** (1) `A`; (2) `A` (a doua parte este adevărată); (3) `B`; (4) `C` (a doua condiție nu se mai verifică).  
- **Exercițiul C:** (1) `if (varsta < 13) { … } else if (varsta <= 17) { … } else { … }`; (2) `if (n % 2 === 0 && n % 3 === 0) { … }`; (3) `switch (litera) { case "r": console.log("roșu"); break; case "g": console.log("galben"); break; case "a": console.log("albastru"); break; default: console.log("necunoscut"); }`.  
- **Exercițiul D:** (1) ordinea condițiilor: `nota >= 9` trebuie înaintea lui `nota >= 5`, altfel „Foarte bine” nu apare niciodată; (2) `||` trebuie `&&` (cu `||` condiția este mereu adevărată); (3) lipsește `break` după `console.log("Luni");`.  
- **Exercițiul E:** `&&` și, `||` sau, `!` nu; condiția strictă prima, altfel cea largă „fură” cazurile; `break` oprește `switch`-ul ca să nu continue cu următorul caz.  
- **Notă pentru profesor:** la `&&` și `||` este util un tabel pe tablă cu toate combinațiile de `true`/`false`. Arătați că ordinea de la `else if` contează rulând Exemplul 2 cu și fără inversare. Copiii confundă des `1 <= n <= 20`: cereți elevilor să încerce cu `n = 50` ca să vadă că „merge” greșit. La „Piatră, hârtie, foarfecă”, lăsați elevii să deseneze mai întâi tabelul cu cine câștigă.
