# LECȚIA 4 — Ghicește numărul
### Decizii: `if`, `else` și mai multe condiții
**Modulul 4 · JavaScript pentru începători · 2 ore**  
**Code Maker Club · JavaScript Starter**

> Până acum programele tale făceau mereu **aceleași lucruri**, de sus în jos. Un program adevărat **alege**: dacă ai ghicit numărul, te felicită; dacă nu, îți spune dacă ai greșit în sus sau în jos. Azi înveți `if` și `else` („dacă” și „altfel”), `else if` pentru mai multe variante, cuvintele „și”, „sau”, „nu” din programare (`&&`, `||`, `!`) și `switch`, un meniu de alegeri.  
> Proiect: **„Ghicește numărul”** · folder: `Prenume_Nume_W4_L4` (ex. `Ana_Pop_W4_L4`)

---

## Ce facem azi
La final ai un joc în care calculatorul se gândește la un număr secret, iar tu îl ghicești: programul verifică dacă ai scris un număr valid și îți spune „prea mic”, „prea mare”, „foarte aproape” sau „corect”. Știi să compari valori cu `>`, `<`, `>=`, `<=`, `===` și `!==`, să scrii decizii cu `if`, `else` și `else if`, să combini condiții cu `&&`, `||` și `!`, să verifici un interval și să faci un meniu cu `switch`. Deciziile fac programul inteligent: orice joc verifică dacă ai câștigat, orice site verifică parola, iar un magazin alege reducerea potrivită. Fără ele, un program nu poate reacționa la ce face utilizatorul.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare · pornim proiectul |
| 10–25 | Comparații: `true` sau `false` (**Exemplul 1**) |
| 25–45 | `if` și `else` (**Exemplele 2–3**) |
| 45–60 | `else if`: mai multe variante (**Exemplul 4**) |
| 60–72 | `&&` și `||` (**Exemplul 5**) |
| 72–85 | `!` și verificarea numărului scris (**Exemplul 6**) |
| 85–95 | `switch`: meniul (**Exemplul 7**) |
| 95–115 | Mini-proiect: ghicește numărul (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `>` `<` `>=` `<=` | Compară și răspund `true` sau `false` | `5 >= 5` |
| `===` `!==` | „Este egal?” și „este diferit?” | `nota === 10` |
| `if` `else` `else if` | Alege ce face programul | `if (x > 5) { … }` |
| `&&` `\|\|` `!` | „și”, „sau”, „nu” | `x > 1 && x < 20` |
| `switch` `case` `break` `default` | Meniu de alegeri | `switch (alegere) { … }` |
| `Number.isNaN()` | Verifică dacă ce a scris utilizatorul nu este număr | `Number.isNaN(n)` |
| `Math.abs()` | Distanța fără semn | `Math.abs(5 - 8)` |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- `%` dă restul împărțirii, deci `numar % 2` este `0` la numerele pare;
- `Math.floor(Math.random() * 10) + 1` dă un număr aleator de la 1 la 10;
- `prompt` dă întotdeauna text, iar `Number(…)` îl transformă în număr;
- `true` și `false` sunt valori de tip `boolean`.

**Încearcă tu (8 min)**  
- [ ] Creează folderul `Prenume_Nume_W4_L4` ca o **copie** a folderului `Prenume_Nume_W4_L3` (cu `tema.html`, `script.js`, `stil.css`, `imagini`, `media`)  
- [ ] Șterge din `script.js` programul de la lecția trecută (sau comentează-l cu `/* … */`) și scrie un `console.log` cu „Salut din lecția 4”  
- [ ] Deschide `tema.html` cu Live Server și verifică mesajul în consolă  
- [ ] Ia din articolul tău pe Wikipedia un an (de exemplu al unei descoperiri sau al unei nașteri) și scrie-l într-o variabilă  

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

Atenție: `=` și `===` sunt diferite.

```javascript
let scor = 5;              // un singur =  →  PUNE valoarea în cutie
console.log(scor === 5);   // trei =  →  ÎNTREABĂ „este egal cu 5?”
```

- **`=`** înseamnă „pune în” (atribuire);  
- **`===`** înseamnă „este egal cu?” (comparație).

Aceasta este cea mai frecventă greșeală la decizii. Regula: **la întrebări folosești întotdeauna `===`** (trei semne de egal). Mai există și `==` (două semne), dar se poartă ciudat și nu îl folosim.

**Încearcă tu (6 min)**  
- [ ] Afișează în consolă rezultatul a 6 comparații, câte una pentru fiecare semn din tabel  
- [ ] Pune o comparație într-o variabilă și afișeaz-o  
- [ ] Compară anul din articolul tău cu `2000` (mai mic sau mai mare?) și afișează rezultatul  
- [ ] Spune cu voce tare diferența dintre `=` și `===`  

**Gata când:**  
- [ ] Ai afișat în consolă rezultatul a 6 comparații (`true` sau `false`)  
- [ ] Ai pus o comparație într-o variabilă  
- [ ] Poți spune diferența dintre `=` și `===`  

---

## 3. `if` și `else`

### Exemplul 2 — `if`: „dacă”

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

**Încearcă tu (6 min)**  
- [ ] Scrie un `if` care afișează un mesaj doar dacă anul din articolul tău este mai mic decât `2000`  
- [ ] Rulează programul și apoi schimbă anul, ca să vezi cum dispare mesajul  
- [ ] Adaugă sub `if` o linie care se afișează oricum  
- [ ] Spune ce s-ar întâmpla dacă ai uita acoladele  

### Exemplul 3 — `else`: „altfel”

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

**Încearcă tu (8 min)**  
- [ ] Scrie un program care cere vârsta și spune dacă ai voie la un film pentru 12 ani și peste  
- [ ] Rulează programul cu 5, cu 12 și cu 30 și notează ce afișează  
- [ ] Fă o „parolă de castel” cu `===` și `toLowerCase()`  
- [ ] Alege un cuvânt din articolul tău ca parolă și încearcă să-l scrii cu litere mari  

**Gata când:**  
- [ ] Ai un `if` cu `else` care afișează două mesaje diferite  
- [ ] Ai rulat programul cu cel puțin trei valori  
- [ ] Parola ta merge cu litere mari și cu litere mici  

---

## 4. `else if`: mai multe variante

### Exemplul 4 — O scară de decizii

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

**Ordinea contează.** Dacă pui condiția largă prima:

```javascript
let nota = 10;

if (nota >= 5) {
  console.log("Bine");
} else if (nota >= 9) {
  console.log("Excelent");
}
```

pentru `nota = 10` afișează „Bine”, nu „Excelent”: prima condiție (`>= 5`) este adevărată și programul **nu mai ajunge** la a doua. Regula: **începe cu cea mai strictă condiție** (`>= 9`), apoi mergi spre cele mai largi (`>= 7`, `>= 5`).

**Încearcă tu (8 min)**  
- [ ] Scrie o scară cu trei variante pentru o variabilă numerică, de exemplu `varsta` (copil, adolescent, adult)  
- [ ] Testează cu patru valori, câte una pentru fiecare variantă  
- [ ] Inversează ordinea a două condiții și vezi ce se strică  
- [ ] Fă o scară pentru anul din articol: „vechi”, „mai nou”, „modern”, cu limitele alese de tine  

**Gata când:**  
- [ ] Ai o scară de decizii cu cel puțin 3 variante și un `else`  
- [ ] Ai testat valorile 10, 8, 6 și 3  
- [ ] Poți explica de ce ordinea condițiilor contează  

---

## 5. `&&` și `||`

### Exemplul 5 — `&&` înseamnă „și”, `||` înseamnă „sau”

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

**Încearcă tu (8 min)**  
- [ ] Verifică dacă un număr este între 10 și 50, cu `&&`  
- [ ] Verifică dacă o culoare scrisă este „roșu” sau „albastru”, cu `||`  
- [ ] Verifică dacă anul din articol este între 1900 și 1999  
- [ ] Rulează fiecare verificare cu o valoare potrivită și cu una nepotrivită  

---

## 6. `!` și verificarea numărului scris

### Exemplul 6 — `!` înseamnă „nu”

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
- [ ] Scrie o variabilă `true` sau `false` despre articolul tău (de exemplu `areImagini`) și folosește `!` într-un `if`  
- [ ] Verifică ce scrie utilizatorul, cu `Number.isNaN` și `||`  
- [ ] Rulează verificarea cu `abc`, cu `0`, cu `25` și cu `7` și citește mesajul pentru fiecare caz  
- [ ] Spune ce se întâmplă dacă apeși Cancel  

**Gata când:**  
- [ ] Ai folosit `&&` sau `||` într-o condiție  
- [ ] Ai folosit `!` o dată  
- [ ] Programul tău respinge `abc`, `0` și un număr prea mare  

---

## 7. `switch`: un meniu de alegeri

### Exemplul 7 — `switch`

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

**Încearcă tu (8 min)**  
- [ ] Fă un meniu cu trei porți, fiecare cu alt mesaj, și un `default`  
- [ ] Scoate un `break` și vezi ce se întâmplă, apoi pune-l la loc  
- [ ] Fă un meniu cu 3 alegeri legate de subiectul tău (de exemplu „1 poză, 2 text, 3 fapt”)  
- [ ] Încearcă o alegere care nu există și citește mesajul de la `default`  

**Gata când:**  
- [ ] Ai un `switch` cu cel puțin 3 `case`-uri, `break` la fiecare și un `default`  
- [ ] Ai încercat să scoți un `break` și ai văzut ce se întâmplă  

---

## 8. Mini-proiect: toate la un loc

### Exemplul 8 — „Ghicește numărul”

Iată programul-model. `tema.html` rămâne cum este; în `script.js` scrii:

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

// Par sau impar?
if (numarSecret % 2 === 0) {
  console.log("Numărul secret era par.");
} else {
  console.log("Numărul secret era impar.");
}
```

`Math.abs(…)` dă **valoarea absolută**: distanța fără semn (de exemplu `Math.abs(5 - 8)` și `Math.abs(8 - 5)` dau amândouă `3`). Aici îl folosim ca să aflăm cât de departe ai fost, indiferent dacă ai greșit în sus sau în jos.

Reîncarcă pagina și joacă de mai multe ori: de fiecare dată calculatorul alege alt număr. Acum ai o singură încercare la fiecare rulare; în lecția 6, cu `while`, vei avea mai multe încercări. Poți adapta jocul: alt interval, alte mesaje, alt subiect (de exemplu „la ce animal mă gândesc: 1 pisică, 2 câine, 3 pește”).

**Încearcă tu (12 min)**  
- [ ] Scrie programul în `script.js`, cu intervalul tău, nu copiat  
- [ ] Schimbă intervalul în `1`–`50` (atenție la toate numerele din cod)  
- [ ] Adaugă un `switch` care dă un calificativ final după cât de aproape ai fost  
- [ ] Citește programul rând cu rând și spune ce afișează pentru `incercare = 0`, pentru `incercare = numarSecret` și pentru `abc`  

**Gata când:**  
- [ ] Calculatorul alege un număr aleator cu `Math.random`  
- [ ] Programul verifică dacă numărul este valid, cu `Number.isNaN` și `||`  
- [ ] Spune „Bravo”, „Foarte aproape”, „Prea mic” sau „Prea mare”, cu `else if`  
- [ ] Spune dacă numărul secret este par sau impar  
- [ ] Nu apar erori roșii în consolă  

---

## De făcut azi — „Ghicește numărul”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | `script.js` care cere vârsta și afișează mesaje diferite pentru „sub 12 ani” și „12 ani sau mai mult” |
| **Complet** | Minim + număr secret aleator, verificarea numărului scris (cu `||`), indicii „prea mic” / „prea mare” / „corect” (cu `else if`), un `switch`, toate comparațiile cu `===`, `>`, `<`, cod indentat și două comentarii |

### Pasul 1 — Minim
În folderul `Prenume_Nume_W4_L4`:

- [ ] Ai `tema.html` (cu `<script>` legat), `script.js` și `stil.css`  
- [ ] Programul cere vârsta cu `prompt` și o transformă cu `Number(…)`  
- [ ] Afișează un mesaj pentru „sub 12 ani” și altul pentru „12 ani sau mai mult”  

### Pasul 2 — Complet
- [ ] Ai un număr secret aleator într-un interval ales de tine  
- [ ] Programul verifică dacă numărul scris este valid și în interval, cu `||`  
- [ ] Ai indicii „prea mic” / „prea mare” / „corect”, cu `else if`  
- [ ] Ai cel puțin un `switch` (un calificativ sau o poartă)  
- [ ] Toate comparațiile folosesc `===`, `>`, `<` etc., niciun `=` în condiții  
- [ ] Codul este indentat și are cel puțin două comentarii  

---

## Bonus ★★★ — Provocare: Piatră, hârtie, foarfecă
*Doar dacă ai terminat Complet.*

Faci mici jocuri de decizii, fiecare cu alt tip de condiție.

- [ ] Fă un test „Poți urca în roller coaster?”: ai nevoie de cel puțin 120 cm înălțime  
- [ ] Fă un calculator de preț la cinema: copil sub 12 ani = 10 lei, student = 15 lei, ceilalți = 20 lei  
- [ ] Fă un joc „Piatră, hârtie, foarfecă” cu un adversar care alege aleator (0, 1 sau 2)  
- [ ] Fă un `switch` care primește o literă și spune dacă este vocală (`a`, `e`, `i`, `o`, `u`) cu mai multe `case` la rând, fără `break` între ele  

---

## Greșeli frecvente
1. **Ai scris `=` în loc de `===`** în condiție — `if (x = 5)` pune 5 în `x`, nu compară.  
2. **Ai uitat parantezele din jurul condiției sau acoladele** — `if x > 5 {` nu merge, iar consola arată o eroare.  
3. **Ai pus `;` după paranteza condiției** — `if (x > 5);` oprește decizia.  
4. **Ai comparat un număr cu un text** — `prompt` dă text; transformă cu `Number(…)`.  
5. **Literele mari contează** — `"Da"` nu este egal cu `"da"`; folosește `toLowerCase()`.  
6. **Ai pus condiția largă prima** (`>= 5` înaintea lui `>= 9`) — cea strictă trebuie prima.  
7. **Ai scris greșit un interval** — `1 <= n <= 20` nu merge, iar `n >= 1 || n <= 10` este mereu adevărat; scrie `n >= 1 && n <= 20`.  
8. **Ai uitat `break`** în `switch` — se execută și cazul următor.  

---

## Recapitulare pe scurt
1. O comparație răspunde `true` sau `false`: `> < >= <= === !==`.  
2. `=` pune o valoare în cutie, `===` întreabă dacă două valori sunt egale.  
3. `if (condiție) { … }` face ceva doar dacă condiția este adevărată; `else` prinde restul.  
4. `else if` face o scară de decizii: se execută primul bloc adevărat, de sus în jos, deci începe cu condiția cea mai strictă.  
5. `&&` = și, `||` = sau, `!` = nu. Un interval se scrie `n >= 1 && n <= 20`.  
6. `switch` compară aceeași valoare cu mai multe variante; `break` oprește, `default` prinde restul.

## Quiz scurt
- Care este diferența dintre `=` și `===`?  
- De ce contează ordinea la `else if`?  
- Ce face `&&`? Dar `||`?  
- La ce folosește `break`?  
- Cum verifici dacă un număr este între 1 și 20?

## Temă
1. Termină `Prenume_Nume_W4_L4` (Minim, apoi Complet).  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — `===` și `==`.**

```javascript
console.log("10" === 10);
console.log("10" == 10);
```

Prima linie afișează `false` (text față de număr), a doua `true`: `==` transformă singur valorile ca să se potrivească. De aceea folosim mereu `===`, care nu face asemenea „surprize”.

**Acasă 2 — Ordinea ca în dicționar.**

```javascript
console.log("a" < "b");
console.log("mar" < "pară");
console.log("Z" < "a");
```

Textul se compară litera cu litera, ca într-un dicționar: afișează `true`, `true`, `true`. Ultimul este `true` pentru că literele mari vin înaintea celor mici. Încearcă cu trei cuvinte din articolul tău.

4. **Încă patru exerciții (B–E):**

**B — Ce afișează programul?** Spune ce afișează: (1) `console.log(3 === 4);` (2) `console.log("pisica" === "Pisica");` (3) `let n = 15; if (n > 10 && n < 20) { console.log("A"); } else { console.log("B"); }` (4) `let n = 5; if (n > 10 || n === 5) { console.log("A"); } else { console.log("B"); }` (5) `let x = 7; if (x >= 5) { console.log("C"); } else if (x >= 7) { console.log("D"); }`

**C — Scrie codul.** Scrie codul care: (1) spune „Ai trecut” dacă variabila `nota` este cel puțin 5, altfel „Mai încearcă”; (2) afișează „copil” dacă `varsta` este sub 13, „adolescent” dacă este între 13 și 17, și „adult” dacă este 18 sau mai mult; (3) spune dacă un număr cerut cu `prompt` este divizibil și cu 2, și cu 3 (folosește `%` și `&&`).

**D — Găsește greșelile.** Găsește **3 greșeli** în codul de mai jos și repară greșelile.

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

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: care este diferența dintre `=` și `===`? Ce înseamnă `&&`, `||` și `!`? De ce contează ordinea condițiilor la `else if`? La ce folosește `break` în `switch`?

## Ce urmează — Lecția 5
Învățăm **repetările cu `for`**: programul face de zeci de ori ceva, fără să scrii codul de zeci de ori.

---

## Răspunsuri
- **Quiz scurt:** (1) `=` pune o valoare în variabilă, iar `===` compară două valori („este egal cu?”); (2) se execută primul bloc adevărat, deci condiția cea mai strictă trebuie scrisă prima; (3) `&&` înseamnă „și” (ambele condiții adevărate), iar `||` înseamnă „sau” (cel puțin una adevărată); (4) `break` oprește `switch`-ul, ca să nu continue cu cazul următor; (5) `numar >= 1 && numar <= 20`.  
- **Dacă ritmul clasei este lent:** `switch` și explicația despre `NaN` sunt opționale; în proiect poți renunța la `Math.abs` și la mesajul „Foarte aproape”.  
- **Tema, exercițiul B:** (1) `false`; (2) `false` (litera mare contează); (3) `A`; (4) `A` (a doua parte este adevărată); (5) `C` (a doua condiție nu se mai verifică).  
- **Tema, exercițiul C:** (1) `if (nota >= 5) { console.log("Ai trecut"); } else { console.log("Mai încearcă"); }`; (2) `if (varsta < 13) { … } else if (varsta <= 17) { … } else { … }`; (3) `let n = Number(prompt("Număr:")); if (n % 2 === 0 && n % 3 === 0) { … }`.  
- **Tema, exercițiul D:** (1) `varsta = 10` trebuie `varsta === 10`; (2) ordinea condițiilor: `nota >= 9` trebuie înaintea lui `nota >= 5`, altfel „Foarte bine” nu apare niciodată; (3) `||` trebuie `&&` (cu `||` condiția este mereu adevărată).  
- **Tema, exercițiul E:** `=` pune valoarea, `===` compară; `&&` și, `||` sau, `!` nu; condiția strictă prima, altfel cea largă „fură” cazurile; `break` oprește `switch`-ul ca să nu continue cu următorul caz.  
- **Bonus (indicii):** (1) condiția este `inaltime >= 120`, cu `if` și `else`; (2) o scară cu `else if`: întâi `varsta < 12`, apoi verifici dacă este student (de exemplu cu un răspuns `"da"`), apoi `else`; (3) alegi `0`, `1` sau `2` cu `Math.floor(Math.random() * 3)`, apoi compari cele două alegeri; dacă sunt egale, e remiză; (4) pui `case "a":`, `case "e":` și așa mai departe unul sub altul, iar `break` doar după ultimul, apoi `console.log("vocală")`.  
- **Notă informativă:** ca să înțelegi o decizie, desenează o „bifurcație” (drum cu două ramuri): condiția este panoul care alege ramura. Fii atent la `=` și `===`: dacă scrii `if (x = 5)`, programul „merge”, dar face altceva, iar greșeala e greu de văzut. La `&&` și `||` ajută un tabel cu toate combinațiile de `true` și `false`. Ordinea de la `else if` contează: rulează Exemplul 4 cu și fără inversare. Greșeala `1 <= n <= 20` este frecventă: încearcă cu `n = 50` și vezi că „merge” greșit. Jocul cu parola este doar un exercițiu: parolele adevărate se verifică pe un server, nu în pagină. Dacă lecția ți se pare grea, `switch` poate rămâne pentru temă.
