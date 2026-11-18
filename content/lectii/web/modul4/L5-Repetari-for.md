# LECȚIA 5 — Tabla înmulțirii
### Repetări: bucla `for`
**Modulul 4 · JavaScript pentru începători · 2 ore**  
**Code Maker Club · JavaScript Starter**

> Cum ai scrie cu mâna numerele de la 1 la 1000? Greu și plictisitor. Calculatorul însă **nu se plictisește niciodată**: îi spui o dată ce să facă și de câte ori, iar el repetă. Azi înveți bucla `for`, cu care faci un program să repete ceva de zeci, de sute sau de mii de ori, dintr-o singură bucată de cod.  
> Proiect: **„Tabla înmulțirii”** · folder: `Prenume_Nume_W4_L5` (ex. `Ana_Pop_W4_L5`)

---

## Ce facem azi
La final ai un program care cere un număr și afișează tabla înmulțirii lui, suma rezultatelor, un triunghi din steluțe și o numărătoare inversă, toate făcute cu bucle. Știi să scrii o buclă `for`, să înțelegi cele trei părți dintre paranteze (început, condiție, pas), să numeri în sus și în jos, să aduni valori într-un total, să construiești un text cu o buclă, să parcurgi literele unui cuvânt și să recunoști o buclă fără sfârșit. Aproape orice program repetă ceva: un joc verifică fiecare monstru de pe ecran, un magazin adună fiecare produs din coș. Bucla este unealta care face asta și o vei folosi în aproape fiecare program.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare · pornim proiectul |
| 10–30 | Prima buclă `for` și cele trei părți ale ei (**Exemplul 1**) |
| 30–45 | Numărăm în sus, în jos, din 2 în 2 (**Exemplul 2**) |
| 45–58 | Tabla înmulțirii (**Exemplul 3**) |
| 58–70 | Un total: suma de la 1 la 100 (**Exemplul 4**) |
| 70–82 | Text în buclă: steluțele (**Exemplul 5**) |
| 82–92 | Literele unui cuvânt (**Exemplul 6**) |
| 92–100 | Buclă și `if` împreună (**Exemplul 7**) |
| 100–115 | Mini-proiect: tabla înmulțirii (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `for (început; condiție; pas) { … }` | Repetă corpul cât timp condiția este adevărată | `for (let i = 1; i <= 5; i++) { … }` |
| `i++` `i--` `i += 2` | Pasul buclei: crește, scade, sare din 2 în 2 | `i += 2` |
| `suma += i` | Adună în total la fiecare rundă | `suma += i;` |
| `rand += "*"` | Face un text să crească | `rand += "*";` |
| `cuvant[i]` | Litera de pe poziția `i` | `"fotbal"[0]` |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- `else if` face o scară de decizii și se execută primul bloc adevărat;
- `&&` înseamnă „și”, `||` înseamnă „sau”, `!` înseamnă „nu”;
- `switch` compară aceeași valoare cu mai multe variante;
- un program bun verifică ce a scris utilizatorul.

**Încearcă tu (8 min)**  
- [ ] Creează folderul `Prenume_Nume_W4_L5` ca o **copie** a folderului `Prenume_Nume_W4_L4` (cu `tema.html`, `script.js`, `stil.css`, `imagini`, `media`)  
- [ ] Șterge din `script.js` jocul de la lecția trecută (sau comentează-l cu `/* … */`)  
- [ ] Scrie cinci `console.log` cu numerele de la 1 la 5, unul sub altul, și observă cât de mult scrii  
- [ ] Alege din articolul tău un număr mic (de exemplu câte imagini sau câte capitole ai) și un cuvânt din titlu  

> De aici înainte, exemplele arată ce scrii în `script.js`.

---

## 2. Prima buclă

### Exemplul 1 — De la 1 la 5, cu cele trei părți

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

Între parantezele lui `for` sunt **trei părți**, despărțite prin `;` (punct și virgulă, nu virgulă):

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

Variabila `i` se numește **contor** (de la „index”). Poți alege alt nume, dar `i` este obiceiul. Ce este în **acolade** se repetă, adică **corpul buclei**; lasă 2 spații la începutul rândurilor.

**Încearcă tu (8 min)**  
- [ ] Scrie o buclă `for` care afișează numerele de la 1 la 10  
- [ ] Schimbă limita la 20 și vezi că bucla merge fără alte modificări  
- [ ] Afișează numerele de la 1 până la numărul din articolul tău  
- [ ] Spune cu voce tare cele trei părți ale lui `for`  

**Gata când:**  
- [ ] Ai scris o buclă `for` care afișează de la 1 la 10  
- [ ] Poți spune cele trei părți ale lui `for`  
- [ ] Ai schimbat limita și bucla a mers fără alte modificări  

---

## 3. Numărăm în moduri diferite

### Exemplul 2 — În sus, în jos, din 2 în 2

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

**Încearcă tu (8 min)**  
- [ ] Afișează numerele impare de la 1 la 9 (`i += 2`)  
- [ ] Fă o numărătoare inversă de la 10 la 1, apoi afișează „Decolare!”  
- [ ] Prezice într-un comentariu ce afișează `for (let i = 0; i < 3; i++)` înainte să rulezi bucla  
- [ ] Numără din 5 în 5 până la numărul din articolul tău  

**Gata când:**  
- [ ] Ai o buclă care numără din 2 în 2  
- [ ] Ai o numărătoare inversă  
- [ ] Poți explica de ce `i--` cere condiția `i >= 1`  

---

## 4. Calcule în buclă

### Exemplul 3 — Tabla înmulțirii

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

**Încearcă tu (6 min)**  
- [ ] Afișează tabla înmulțirii cu un număr ales de tine  
- [ ] Fă tabla înmulțirii cu numărul din articolul tău  
- [ ] Fă tabla adunării: `${numar} + ${i} = ${numar + i}`  
- [ ] Schimbă bucla să meargă până la 12  

### Exemplul 4 — Un total: suma de la 1 la 100

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

**Încearcă tu (6 min)**  
- [ ] Calculează suma numerelor de la 1 la 10 și verifică dacă este `55`  
- [ ] Calculează suma numerelor pare de la 2 la 20  
- [ ] Calculează suma de la 1 la numărul din articolul tău  
- [ ] Mută `let suma = 0;` în interiorul buclei și vezi ce rezultat apare  

**Gata când:**  
- [ ] Ai tabla înmulțirii cu un număr ales de tine  
- [ ] Ai calculat suma numerelor de la 1 la 100 (rezultat `5050`)  
- [ ] Știi de ce `let suma = 0;` stă înainte de buclă  

---

## 5. Text în buclă

### Exemplul 5 — Un triunghi din steluțe

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

**Încearcă tu (6 min)**  
- [ ] Fă un triunghi din 6 steluțe, cu `+=` sau cu `repeat`  
- [ ] Fă-l cu alt semn, de exemplu `#`  
- [ ] Fă un triunghi cât numărul din articolul tău  
- [ ] Afișează un rând cu 10 liniuțe `-`, ca să faci o linie despărțitoare  

### Exemplul 6 — Literele unui cuvânt

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

**Încearcă tu (6 min)**  
- [ ] Afișează literele numelui unui animal, una pe rând, cu poziția lor  
- [ ] Parcurge cuvântul din titlul articolului tău  
- [ ] Afișează doar literele, fără poziții, pe câte un rând  
- [ ] Spune de ce condiția este `i < cuvant.length` și nu `i <= cuvant.length`  

**Gata când:**  
- [ ] Ai un triunghi din steluțe făcut cu buclă  
- [ ] Ai parcurs literele unui cuvânt cu `cuvant[i]`  
- [ ] Știi de ce prima literă are poziția 0  

---

## 6. Buclă și `if` împreună

### Exemplul 7 — Numărăm o literă

Poți combina bucla cu un `if` ca să numeri de câte ori apare ceva:

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

Rezultat: `3`.

La fiecare rundă, bucla ia litera de pe poziția `i`, iar `if` verifică dacă este „r”. Dacă da, `numarR++` mărește contorul. Contorul `numarR` se creează **înainte** de buclă, ca totalul din Exemplul 4.

**Încearcă tu (6 min)**  
- [ ] Numără de câte ori apare litera „a” în cuvântul „banana”  
- [ ] Numără vocalele dintr-un cuvânt, cu `||` (de exemplu `litera === "a" || litera === "e"`)  
- [ ] Numără de câte ori apare o literă aleasă de tine în titlul articolului  
- [ ] Afișează un mesaj diferit dacă litera nu apare deloc  

**Gata când:**  
- [ ] Ai un contor creat înainte de buclă  
- [ ] Ai un `if` în interiorul buclei  
- [ ] Rezultatul pentru „programare” și litera „r” este `3`  

---

## 7. Mini-proiect: toate la un loc

### Exemplul 8 — „Tabla înmulțirii”

Iată programul-model. `tema.html` rămâne cum este; în `script.js` scrii:

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

**Încearcă tu (12 min)**  
- [ ] Scrie programul în `script.js`, cu valorile tale, nu copiat  
- [ ] Schimbă tabla să meargă de la 1 la 12, nu la 10  
- [ ] Adaugă la sfârșit literele titlului articolului tău, câte una pe rând  
- [ ] Citește programul rând cu rând și spune ce afișează pentru numărul 3  

**Gata când:**  
- [ ] Programul afișează tabla înmulțirii cu numărul ales  
- [ ] Calculează suma rezultatelor cu un total (`suma += …`)  
- [ ] Desenează un triunghi din steluțe  
- [ ] Are o numărătoare inversă  
- [ ] Nu apar erori roșii și nicio buclă nu îngheață pagina  

---

## De făcut azi — „Tabla înmulțirii”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | `script.js` cu o buclă `for` care afișează tabla înmulțirii cu un număr ales de tine |
| **Complet** | Minim + numărul cerut cu `prompt` și verificat, un total calculat în buclă (cu valoarea inițială înainte de buclă), un desen din steluțe, o numărătoare inversă cu `i--`, cel puțin două bucle `for` diferite, cod indentat și două comentarii |

### Pasul 1 — Minim
În folderul `Prenume_Nume_W4_L5`:

- [ ] Ai `tema.html` (cu `<script>` legat), `script.js` și `stil.css`  
- [ ] Ai o buclă `for` cu `i` de la 1 la 10  
- [ ] Afișezi tabla înmulțirii cu un număr ales de tine  

### Pasul 2 — Complet
- [ ] Numărul este cerut cu `prompt` și verificat să fie valid  
- [ ] Ai un total calculat într-o buclă (`suma += …`), cu valoarea inițială scrisă înainte de buclă  
- [ ] Ai un desen din steluțe (triunghi sau altă formă) făcut cu buclă  
- [ ] Ai o numărătoare inversă, cu `i--`  
- [ ] Ai cel puțin două bucle `for` diferite  
- [ ] Codul este indentat și are cel puțin două comentarii  

---

## Bonus ★★★ — Provocare: Bucle în bucle
*Doar dacă ai terminat Complet.*

Faci modele mai mari, cu mai multe bucle.

- [ ] Afișează tabla înmulțirii pentru **toate** numerele de la 1 la 10 (o buclă în altă buclă)  
- [ ] Calculează factorialul lui 6 (1 × 2 × 3 × 4 × 5 × 6)  
- [ ] Desenează un pătrat de 5 × 5 din steluțe, cu 5 rânduri  
- [ ] Afișează numerele de la 1 la 30, dar scrie „Bum!” în loc de numerele divizibile cu 3 (combină `for` cu `if` și `%`)  

---

## Greșeli frecvente
1. **Ai separat părțile cu virgulă** — în `for` se folosesc `;`.  
2. **Bucla fără sfârșit** — condiția nu ajunge niciodată falsă (de exemplu `i--` cu `i <= 5`); începe cu limite mici, nu cu milioane.  
3. **Ai scris `i <= 5` în loc de `i < 5`** (sau invers) și ai o rundă în plus sau în minus.  
4. **Totalul nu are valoare inițială bună** — `let suma;` dă `NaN`, iar `let suma = 0;` scris în buclă se golește la fiecare rundă.  
5. **Ai uitat acoladele** când corpul are mai multe comenzi — se repetă numai prima.  
6. **Ai pus `;` după paranteza lui `for`** — `for (…);` oprește corpul.  
7. **Ai folosit `i` în afara buclei** — variabila `i` există doar în interiorul lui `for`.  
8. **Ai numerotat literele de la 1** — prima literă este la poziția 0.  

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
1. Termină `Prenume_Nume_W4_L5` (Minim, apoi Complet).  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Un text din numere.**

```javascript
let text = "";
for (let i = 5; i >= 1; i--) {
  text += i + " ";
}
console.log(text);
```

Afișează `5 4 3 2 1 ` pe un singur rând: textul crește la fiecare rundă. Schimbă-l ca numerele să fie despărțite prin virgule.

**Acasă 2 — Cuvântul pe dos.**

```javascript
let cuvant = "programare";
let invers = "";
for (let i = cuvant.length - 1; i >= 0; i--) {
  invers += cuvant[i];
}
console.log(invers);
```

Parcurgem literele **de la sfârșit spre început** și afișează `eramargorp`. Încearcă-l pe titlul articolului tău.

4. **Încă patru exerciții (B–E):**

**B — Ce afișează bucla?** Spune ce afișează: (1) `for (let i = 1; i <= 3; i++) { console.log(i * 10); }` (2) `for (let i = 5; i > 2; i--) { console.log(i); }` (3) `for (let i = 0; i < 6; i += 2) { console.log(i); }` (4) `let s = 0; for (let i = 1; i <= 4; i++) { s += i; } console.log(s);`

**C — Scrie codul.** Scrie codul care: (1) afișează numerele de la 10 la 20; (2) afișează numerele divizibile cu 5 de la 5 la 50; (3) calculează produsul `1 × 2 × 3 × 4 × 5` (atenție la valoarea de pornire a totalului).

**D — Găsește greșelile.** Găsește **3 greșeli** în codul de mai jos și repară greșelile. Nu rula primul exemplu fără să repari codul.

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

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: care sunt cele trei părți ale lui `for`? Când se oprește bucla? De ce pagina îngheață la o buclă fără sfârșit și ce faci atunci?

## Ce urmează — Lecția 6
Învățăm **bucla `while`**, care repetă „cât timp” se întâmplă ceva (de exemplu „cât timp nu ai ghicit numărul”), plus `break` și `continue`.

---

## Răspunsuri
- **Quiz scurt:** (1) început, condiție și pas, despărțite prin `;`; (2) cu `0` (prima literă are poziția 0); (3) cu `i--` și condiția `i >= 1`, de exemplu `for (let i = 5; i >= 1; i--)`; (4) pentru că, scris înăuntru, totalul s-ar goli la fiecare rundă; (5) o buclă a cărei condiție rămâne mereu adevărată, deci nu se oprește niciodată.  
- **Tema, exercițiul B:** (1) `10`, `20`, `30`; (2) `5`, `4`, `3`; (3) `0`, `2`, `4`; (4) `10` (1 + 2 + 3 + 4).  
- **Tema, exercițiul C:** (1) `for (let i = 10; i <= 20; i++) { console.log(i); }`; (2) `for (let i = 5; i <= 50; i += 5) { console.log(i); }`; (3) `let produs = 1; for (let i = 1; i <= 5; i++) { produs *= i; } console.log(produs);` (rezultă 120; cu valoarea de pornire 0 ar fi mereu 0).  
- **Tema, exercițiul D:** (1) `i--` trebuie `i++` (bucla nu se oprește niciodată); (2) în `for` părțile se despart prin `;`, nu prin `,`; (3) `let suma;` trebuie `let suma = 0;` (altfel `NaN`).  
- **Tema, exercițiul E:** început, condiție, pas; bucla se oprește când condiția devine falsă; la o buclă fără sfârșit condiția rămâne mereu adevărată, iar pagina îngheață: închizi fila și repari codul.  
- **Bonus (indicii):** (1) pui o buclă `for` în interiorul alteia: cea de afară ia numărul, cea dinăuntru ia `i` de la 1 la 10, iar `console.log` stă în cea dinăuntru; (2) pornești de la `let produs = 1;` și înmulțești cu `*=`; (3) în buclă, la fiecare rând, afișezi `"*".repeat(5)`, de 5 ori; (4) în buclă pui `if (i % 3 === 0)` pentru „Bum!” și `else` pentru numărul obișnuit.  
- **Notă informativă:** ca să înțelegi bucla, joacă un „joc de rol” cu un coleg: unul este calculatorul, ține minte `i`, îl mărește la fiecare pas și spune pașii cu voce tare (verifică, rulează, mărește). Dacă ai făcut o buclă fără sfârșit, salvează-ți lucrul înainte să rulezi ceva îndoielnic: poți închide fila și nu pierzi nimic dacă ai salvat. Nu folosi limite uriașe în încercări.
