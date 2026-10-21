# LECȚIA 5 — Repetări: for
**Modulul 4 · JavaScript pentru începători · 2 ore**  
**Code Maker Club · JavaScript Starter**

> Cum ai scrie cu mâna numerele de la 1 la 1000? Greu și plictisitor. Calculatorul însă **nu se plictisește niciodată**: îi spui o dată ce să facă și de câte ori, iar el repetă. Azi înveți bucla `for`, cu care faci un program să repete ceva de zeci, de sute sau de mii de ori, dintr-o singură bucată de cod.  
> Proiect: **„Tabla înmulțirii și steluțele”** · folder: `Prenume_Nume_W4_L5` (ex. `Ana_Pop_W4_L5`)

---

## Obiectiv
La finalul orei știi să scrii o buclă `for`, să înțelegi cele trei părți dintre paranteze (început, condiție, pas), să numeri crescător și descrescător, să folosești variabila buclei în calcule, să aduni valori într-un total, să construiești un text cu o buclă și să recunoști o buclă fără sfârșit.  
**Minim:** o buclă `for` care afișează numerele de la 1 la 10.  
**Ținta orei (Complet):** + tabla înmulțirii, suma numerelor de la 1 la 100, numărătoare inversă, un triunghi din steluțe, parcurgerea literelor unui cuvânt și explicarea celor trei părți ale lui `for`.

## De ce contează
Aproape orice program repetă ceva: un joc verifică fiecare monstru de pe ecran, un magazin adună fiecare produs din coș. Bucla este unealta care face asta, iar tu o folosești de azi încolo în aproape fiecare program.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · de ce avem nevoie de bucle |
| 15–40 | Prima buclă `for` (**Exemplele 1–2**) |
| 40–60 | Numărăm în sus, în jos, din 2 în 2 (**Exemplul 3**) |
| 60–80 | Calcule în buclă: tabla înmulțirii, suma (**Exemplele 4–5**) |
| 80–100 | Text în buclă: steluțe și litere (**Exemplele 6–7**) |
| 100–115 | Proiect (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- `else if` face o scară de decizii și se execută primul bloc adevărat;
- `&&` înseamnă „și”, `||` înseamnă „sau”, `!` înseamnă „nu”;
- `switch` compară aceeași valoare cu mai multe variante;
- un program bun verifică ce a scris utilizatorul.

**Încearcă tu (4 min)**  
- [ ] Creează folderul `Prenume_Nume_W4_L5` cu `index.html` (scheletul complet, cu `<script src="script.js"></script>` înainte de `</body>`) și `script.js`  
- [ ] Pune în `<body>` un `<h1>` cu textul „Repetări”  
- [ ] În `script.js` scrie cinci `console.log` cu numerele de la 1 la 5, unul sub altul, și observă cât de mult scrii  

> De aici înainte, exemplele arată ce scrii în `script.js`.

---

## 2. Prima buclă

### Exemplul 1 — De la 1 la 5

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

În consolă apare:

```text
1
2
3
4
5
```

Un singur `console.log`, dar a rulat de 5 ori. Dacă ai fi vrut până la 1000, ai fi schimbat doar numărul 5.

### Exemplul 2 — Cele trei părți

Între parantezele lui `for` sunt **trei părți**, despărțite prin `;` (punct și virgulă, nu virgulă):

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

| Parte | Aici | Ce spune |
|-------|------|----------|
| **început** | `let i = 1` | pornește cu numărătorul `i` egal cu 1 |
| **condiție** | `i <= 5` | **repetă cât timp** `i` este mai mic sau egal cu 5 |
| **pas** | `i++` | după fiecare rundă, mărește `i` cu 1 |

Ce face calculatorul, pas cu pas:
1. Pune `i = 1`.  
2. Verifică: `1 <= 5`? Da → rulează corpul (afișează 1).  
3. Face pasul: `i` devine 2.  
4. Verifică: `2 <= 5`? Da → afișează 2. … și tot așa.  
5. Când `i` devine 6, `6 <= 5` este fals: **bucla se oprește**.  

Variabila `i` se numește **contor** (de la „index”). Putem alege alt nume, dar `i` este obiceiul. Ce este în **acolade** se repetă, adică **corpul buclei**; lasă 2 spații la începutul rândurilor.

**Gata când:**  
- [ ] Ai scris o buclă `for` care afișează de la 1 la 10  
- [ ] Poți spune pe foaie cele trei părți ale lui `for`  
- [ ] Ai schimbat limita la 20 și bucla a mers fără alte modificări  

---

## 3. Numărăm în moduri diferite

### Exemplul 3 — În sus, în jos, din 2 în 2

```javascript
// Din 2 în 2: numere pare
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// În jos: numărătoare inversă
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
console.log("Start!");

// De la 0
for (let i = 0; i < 3; i++) {
  console.log("Runda", i);
}
```

- `i += 2` face pasul de 2 (2, 4, 6, 8, 10).  
- `i--` merge **în jos**, iar condiția trebuie să fie `i >= 1` (nu `<=`).  
- `i = 0` și `i < 3` este scrierea cea mai frecventă la programatori: numără 0, 1, 2 (trei ture). Vei vedea de ce în lecția despre liste.

**Atenție la bucla fără sfârșit.** Dacă condiția rămâne mereu adevărată, bucla **nu se oprește niciodată** și pagina îngheață:

```text
for (let i = 1; i <= 5; i--) {   // GREȘIT: i scade, nu ajunge la 6
  console.log(i);
}
```

Aici `i` scade (1, 0, −1, …), deci `i <= 5` este mereu adevărat. Dacă ți se întâmplă, **închide fila** din browser și repară codul. Nu rula exemplul de mai sus: este doar ca să recunoști greșeala.

**Încearcă tu (6 min)**  
- [ ] Afișează numerele impare de la 1 la 9 (`i += 2`)  
- [ ] Fă o numărătoare inversă de la 10 la 1, apoi afișează „Decolare!”  
- [ ] Prezice pe foaie ce afișează `for (let i = 0; i < 3; i++)` înainte să rulezi bucla  

---

## 4. Calcule în buclă

### Exemplul 4 — Tabla înmulțirii

```javascript
let numar = 7;

for (let i = 1; i <= 10; i++) {
  console.log(`${numar} x ${i} = ${numar * i}`);
}
```

Rezultat (primele rânduri):

```text
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
```

Folosim `i` în calcul: la fiecare rundă are altă valoare, deci rezultatul diferă. Nu trebuie să scrii 10 rânduri de mână.

### Exemplul 5 — Un total: suma de la 1 la 100

```javascript
let suma = 0;

for (let i = 1; i <= 100; i++) {
  suma += i;
}

console.log("Suma numerelor de la 1 la 100 este", suma);
```

Rezultat: `5050`.

Ce se întâmplă:
- **Înainte** de buclă, creezi un „sac” gol: `let suma = 0;`.  
- La fiecare rundă, **adaugi** valoarea lui `i` în sac: `suma += i;`.  
- **După** buclă, afișezi sacul plin.  

Atenție: `let suma = 0;` trebuie scris **înainte** de buclă. Dacă l-ai scrie înăuntru, sacul s-ar goli la fiecare rundă. Dacă ai uitat valoarea inițială (`let suma;`), rezultatul ar fi `NaN`.

**Gata când:**  
- [ ] Ai tabla înmulțirii cu un număr ales de tine  
- [ ] Ai calculat suma numerelor de la 1 la 100 (rezultat 5050)  
- [ ] Știi de ce `let suma = 0;` stă înainte de buclă  

---

## 5. Text în buclă

### Exemplul 6 — Un triunghi din steluțe

```javascript
let rand = "";

for (let i = 1; i <= 5; i++) {
  rand += "*";
  console.log(rand);
}
```

Rezultat:

```text
*
**
***
****
*****
```

Variabila `rand` este un text care **crește** cu o steluță la fiecare rundă (`rand += "*"`), apoi îl afișăm. Aceeași idee, cu `repeat` din lecția 3:

```javascript
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}
```

### Exemplul 7 — Literele unui cuvânt

```javascript
let cuvant = "fotbal";

for (let i = 0; i < cuvant.length; i++) {
  console.log(`Litera de pe poziția ${i} este ${cuvant[i]}`);
}
```

Rezultat (primele rânduri):

```text
Litera de pe poziția 0 este f
Litera de pe poziția 1 este o
Litera de pe poziția 2 este t
```

Aici bucla pornește de la `0` (prima literă) și merge cât `i < cuvant.length` (pentru șase litere, ultima poziție este 5). Așa **parcurgem** un text literă cu literă. Același tipar vei folosi pentru liste.

Poți număra de câte ori apare o literă într-un cuvânt, combinând bucla cu un `if`:

```javascript
let cuvant = "programare";
let numarR = 0;

for (let i = 0; i < cuvant.length; i++) {
  if (cuvant[i] === "r") {
    numarR++;
  }
}
console.log("Litera r apare de", numarR, "ori");
```

(Rezultat: `3`.)

**Încearcă tu (8 min)**  
- [ ] Fă un triunghi din 6 steluțe, cu `+=` sau cu `repeat`  
- [ ] Afișează literele numelui unui animal, una pe rând, cu poziția lor  
- [ ] Numără de câte ori apare litera „a” în cuvântul „banana”  

---

## 6. Proiectul

### Exemplul 8 — „Tabla înmulțirii și steluțele”

Fișierul `index.html`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tabla înmulțirii și steluțele</title>
</head>
<body>
  <h1>Tabla înmulțirii și steluțele</h1>
  <p>Alege un număr, apoi deschide consola (F12) ca să vezi tabla și steluțele.</p>

  <script src="script.js"></script>
</body>
</html>
```

Fișierul `script.js`:

```javascript
// 1. Tabla înmulțirii
const numar = Number(prompt("Pentru ce număr (1-12) vrei tabla înmulțirii?"));

if (Number.isNaN(numar) || numar < 1 || numar > 12) {
  console.log("Număr nevalid. Alege un număr între 1 și 12.");
} else {
  console.log(`=== Tabla înmulțirii cu ${numar} ===`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numar} x ${i} = ${numar * i}`);
  }

  // 2. Suma rezultatelor din tabla înmulțirii
  let suma = 0;
  for (let i = 1; i <= 10; i++) {
    suma += numar * i;
  }
  console.log("Suma rezultatelor din tabla ta:", suma);

  // 3. Un triunghi din steluțe, cât numărul ales
  console.log("=== Triunghi de steluțe ===");
  for (let i = 1; i <= numar; i++) {
    console.log("*".repeat(i));
  }

  // 4. Numărătoare inversă
  console.log("=== Numărătoare inversă ===");
  for (let i = 3; i >= 1; i--) {
    console.log(i);
  }
  console.log("Gata!");
}
```

Rulează programul cu mai multe numere. Poți adapta proiectul: alt desen (cu `#` sau `+`), alt tip de calcul (tabla adunării) sau un mesaj al tău la finalul numărătorii inverse.

**Gata când:**  
- [ ] Programul afișează tabla înmulțirii cu numărul ales  
- [ ] Calculează suma rezultatelor cu un total (`suma += …`)  
- [ ] Desenează un triunghi din steluțe  
- [ ] Are o numărătoare inversă  
- [ ] Nu apar erori roșii și nicio buclă nu îngheață pagina  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Tabla înmulțirii și steluțele” (obligatoriu)
În folderul `Prenume_Nume_W4_L5` ai `index.html` și `script.js`, cu:
- o **tablă a înmulțirii** cu un număr cerut cu `prompt` (verificat să fie valid);
- un **total** calculat într-o buclă (`suma += …`), cu valoarea inițială scrisă înainte de buclă;
- un **desen din steluțe** (triunghi sau altă formă) făcut cu buclă;
- o **numărătoare inversă**, cu `i--`;
- cel puțin două bucle `for` diferite;
- cod indentat și cel puțin două comentarii.

### Exercițiul B — Ce afișează bucla?
Spune ce afișează: (1) `for (let i = 1; i <= 3; i++) { console.log(i * 10); }` (2) `for (let i = 5; i > 2; i--) { console.log(i); }` (3) `for (let i = 0; i < 6; i += 2) { console.log(i); }` (4) `let s = 0; for (let i = 1; i <= 4; i++) { s += i; } console.log(s);`

### Exercițiul C — Scrie codul
Scrie codul care: (1) afișează numerele de la 10 la 20; (2) afișează numerele divizibile cu 5 de la 5 la 50; (3) calculează produsul `1 × 2 × 3 × 4 × 5` (atenție la valoarea de pornire a totalului).

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile. Nu rula primul exemplu fără să repari codul.

```text
for (let i = 1; i <= 5; i--) {
  console.log(i);
}

for (let j = 1, j <= 5, j++) {
  console.log(j);
}

let suma;
for (let k = 1; k <= 5; k++) {
  suma += k;
}
console.log(suma);
```

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: care sunt cele trei părți ale lui `for`? Când se oprește bucla? De ce pagina îngheață la o buclă fără sfârșit și ce faci atunci?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W4_L5` are `index.html` și `script.js`  
- [ ] Programul rulează fără erori și fără să înghețe  
- [ ] Ai răspuns la exercițiile B–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Afișează tabla înmulțirii de la 1 la 10 pentru **toate** numerele 1–10 (o buclă în altă buclă)  
- [ ] Calculează factorialul lui 6 (1 × 2 × 3 × 4 × 5 × 6)  
- [ ] Desenează un pătrat de 5 × 5 din steluțe, cu 5 rânduri  
- [ ] Afișează numerele de la 1 la 30, dar scrie „Bum!” în loc de numerele divizibile cu 3 (combină `for` cu `if` și `%`)  

---

## Greșeli frecvente
1. **Ai separat părțile cu virgulă** — în `for` se folosesc `;`.  
2. **Bucla fără sfârșit** — condiția nu ajunge niciodată falsă (de exemplu `i--` cu `i <= 5`).  
3. **Ai scris `i <= 5` în loc de `i < 5`** (sau invers) și ai o rundă în plus sau în minus.  
4. **Ai uitat valoarea inițială a totalului** (`let suma;`) — rezultat `NaN`.  
5. **Ai pus `let suma = 0;` în interiorul buclei** — totalul se golește la fiecare rundă.  
6. **Ai uitat acoladele** când corpul are mai multe comenzi — se repetă numai prima.  
7. **Ai pus `;` după paranteza lui `for`** — `for (…);` oprește corpul.  
8. **Ai folosit `i` în afara buclei** — variabila `i` există doar în interiorul lui `for`.  
9. **Ai numerotat literele de la 1** — prima literă este la poziția 0.  
10. **Ai ales limite uriașe** (milioane) — pagina încetinește; începe cu numere mici.  

---

## Recapitulare pe scurt
1. `for (început; condiție; pas) { … }` repetă corpul cât timp condiția este adevărată.  
2. `i++` mărește cu 1, `i--` micșorează, `i += 2` merge din 2 în 2.  
3. Folosești `i` în calcule: tabla înmulțirii, mesaje cu numărul rundei.  
4. Un total se creează **înainte** de buclă (`let suma = 0;`) și se adună în buclă (`suma += …`).  
5. Poți construi un text pe rând (`rand += "*"`) sau parcurge literele cu `cuvant[i]`.  
6. Dacă pagina îngheață, închide fila și repară condiția.

## Quiz scurt
- Care sunt cele trei părți ale lui `for`?  
- Cu ce valoare începe, de obicei, numărătoarea poziției literelor?  
- Cum faci o numărătoare inversă?  
- De ce `let suma = 0;` stă înainte de buclă?  
- Ce este o buclă fără sfârșit?

## Temă
Fă un program „Ceasul de numărat”: cere un număr `n` și afișează numerele de la 1 la `n`, apoi suma lor și media (suma împărțită la `n`). Salvează în `Prenume_Nume_W4_L5`.

## Ce urmează — Lecția 6
Învățăm **bucla `while`**, care repetă „cât timp” se întâmplă ceva (de exemplu „cât timp nu ai ghicit numărul”), plus `break` și `continue`.

---

## Răspunsuri pentru profesor
- **Quiz scurt:** (1) început, condiție și pas, despărțite prin `;`; (2) cu `0` (prima literă are poziția 0); (3) cu `i--` și condiția `i >= 1`, de exemplu `for (let i = 5; i >= 1; i--)`; (4) pentru că, scris înăuntru, totalul s-ar goli la fiecare rundă; (5) o buclă a cărei condiție rămâne mereu adevărată, deci nu se oprește niciodată.  
- **Exercițiul B:** (1) `10`, `20`, `30`; (2) `5`, `4`, `3`; (3) `0`, `2`, `4`; (4) `10` (1 + 2 + 3 + 4).  
- **Exercițiul C:** (1) `for (let i = 10; i <= 20; i++) { console.log(i); }`; (2) `for (let i = 5; i <= 50; i += 5) { console.log(i); }`; (3) `let produs = 1; for (let i = 1; i <= 5; i++) { produs *= i; } console.log(produs);` (rezultă 120; cu valoarea de pornire 0 ar fi mereu 0).  
- **Exercițiul D:** (1) `i--` trebuie `i++` (bucla nu se oprește niciodată); (2) în `for` părțile se despart prin `;`, nu prin `,`; (3) `let suma;` trebuie `let suma = 0;` (altfel `NaN`).  
- **Exercițiul E:** început, condiție, pas; bucla se oprește când condiția devine falsă; la o buclă fără sfârșit condiția rămâne mereu adevărată, iar elevul închide fila și repară.  
- **Notă pentru profesor:** pentru a înțelege bucla, faceți un „joc de rol”: un elev este calculatorul, are `i` pe o foaie și execută pașii cu voce tare (verifică, rulează, mărește). Pentru bucla fără sfârșit, rugați elevii să salveze lucrul înainte de a rula ceva îndoielnic: la nevoie, fila se închide și munca nu se pierde dacă a fost salvată. Evitați limite uriașe în demonstrații.
