# LECȚIA 9 — Liste (array)
**Modulul 4 · JavaScript pentru începători · 2 ore**  
**Code Maker Club · JavaScript Starter**

> O variabilă ține o singură valoare. Dar dacă vrei să ții **mai multe**: numele jocurilor tale preferate, notele de la un test, culorile unui curcubeu? Ai nevoie de o **listă** (în programare, *array*): un raft cu mai multe cutii numerotate. Azi înveți să faci liste, să adaugi și să scoți lucruri și să le parcurgi cu o buclă.  
> Proiect: **„Lista mea de jocuri”** · folder: `Prenume_Nume_W4_L9` (ex. `Ana_Pop_W4_L9`)

---

## Obiectiv
La finalul orei știi să creezi o listă, să citești și să schimbi un element după poziție, să afli lungimea, să adaugi și să scoți elemente (`push`, `pop`), să cauți cu `includes` și `indexOf`, să parcurgi lista cu `for` și cu `for…of` și să calculezi o sumă, o medie și un maxim.  
**Minim:** o listă cu 5 elemente afișate cu o buclă.  
**Ținta orei (Complet):** + adăugare și scoatere, căutare, media unei liste de numere, cel mai mare element și explicarea de ce primul element are numărul 0.

## De ce contează
Aproape orice program lucrează cu **mai multe lucruri deodată**: monștrii dintr-un joc, produsele dintr-un coș, scorurile jucătorilor. Cu liste, ții toate valorile într-un singur loc și le poți prelucra cu o buclă.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–35 | Prima listă: poziții și lungime (**Exemplele 1–2**) |
| 35–55 | Adăugăm, scoatem, căutăm (**Exemplele 3–4**) |
| 55–75 | Parcurgem lista cu bucle (**Exemplul 5**) |
| 75–95 | Calcule cu liste: sumă, medie, maxim (**Exemplul 6**) |
| 95–115 | Proiect (**Exemplul 7**) |
| 115–120 | Recap și temă |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- o funcție se scrie cu `function nume(parametri) { … }` și se cheamă cu `nume(argumente);`;
- `return` trimite o valoare înapoi, iar `console.log` doar o arată;
- cu `cuvant[i]` iei litera de pe poziția `i`, începând de la 0;
- o buclă `for` parcurge pozițiile de la 0 la `length - 1`.

**Încearcă tu (4 min)**  
- [ ] Creează folderul `Prenume_Nume_W4_L9` cu `index.html` (scheletul complet, cu `<script src="script.js"></script>` înainte de `</body>`) și `script.js`  
- [ ] Pune în `<body>` un `<h1>` cu textul „Liste”  
- [ ] În `script.js` scrie o funcție `salut(nume)` și cheamă funcția pentru două nume  

> De aici înainte, exemplele arată ce scrii în `script.js`.

---

## 2. Prima listă

### Exemplul 1 — Creăm o listă

```javascript
const animale = ["pisică", "câine", "pește", "papagal"];

console.log(animale);
console.log(animale[0]);
console.log(animale[2]);
```

Rezultat (Chrome mai scrie în față și numărul de elemente, `(4)`):

```text
['pisică', 'câine', 'pește', 'papagal']
pisică
pește
```

O listă se scrie între **paranteze drepte** `[ … ]`, cu elementele **separate prin virgulă**. Fiecare element are o **poziție** (numită **index**), iar numărătoarea începe de la **0**:

| Poziția | 0 | 1 | 2 | 3 |
|---------|---|---|---|---|
| Elementul | pisică | câine | pește | papagal |

Citim un element cu `animale[2]`: numele listei, apoi poziția între paranteze drepte. O listă poate ține text, numere sau chiar un amestec:

```javascript
const note = [9, 7, 10, 8];
const amestec = ["Ana", 10, true];
```

### Exemplul 2 — Lungimea și ultimul element

```javascript
console.log(animale.length);                    // 4
console.log(animale[animale.length - 1]);       // papagal (ultimul)
console.log(animale[10]);                       // undefined (nu există)
```

- `.length` arată **câte elemente** are lista (4), dar ultima poziție este **3**, adică `length - 1`.  
- Dacă ceri o poziție care nu există, primești `undefined`.

Poți **schimba** un element, scriind în poziția lui:

```javascript
animale[1] = "hamster";
console.log(animale);   // ['pisică', 'hamster', 'pește', 'papagal']
```

Poate te întrebi: lista este `const`, cum de am putut schimba un element? `const` înseamnă că **numele `animale` va arăta mereu spre aceeași listă**; nu poți scrie `animale = ["alt ceva"]`. Dar **înăuntrul** listei poți schimba lucrurile. Folosim `const` pentru liste, în mod obișnuit.

**Gata când:**  
- [ ] Ai o listă cu 5 elemente și ai afișat primul, al treilea și ultimul  
- [ ] Ai schimbat un element după poziție  
- [ ] Poți explica de ce primul element are numărul 0  

---

## 3. Adăugăm, scoatem, căutăm

### Exemplul 3 — `push`, `pop`, `unshift`, `shift`

```javascript
const coada = ["Ana", "Mihai"];

coada.push("Ioana");      // adaugă la SFÂRȘIT
console.log(coada);       // ['Ana', 'Mihai', 'Ioana']

coada.unshift("Radu");    // adaugă la ÎNCEPUT
console.log(coada);       // ['Radu', 'Ana', 'Mihai', 'Ioana']

const ultimul = coada.pop();   // scoate ultimul element
console.log(ultimul);     // Ioana

const primul = coada.shift();  // scoate primul element
console.log(primul);      // Radu
console.log(coada);       // ['Ana', 'Mihai']
```

| Metodă | Ce face |
|--------|---------|
| `push(x)` | adaugă `x` la **sfârșit** |
| `pop()` | scoate **ultimul** element |
| `unshift(x)` | adaugă `x` la **început** |
| `shift()` | scoate **primul** element |

`pop()` și `shift()` **dau înapoi** elementul scos, deci îl poți pune într-o variabilă. Aceste metode **schimbă lista însăși**. Folosește exemplele cu nume de animale sau de jocuri, nu cu nume de colegi sau de persoane reale.

### Exemplul 4 — Căutăm în listă

```javascript
const jocuri = ["fotbal", "șah", "puzzle", "curse"];

console.log(jocuri.includes("șah"));     // true
console.log(jocuri.includes("tenis"));   // false
console.log(jocuri.indexOf("puzzle"));   // 2
console.log(jocuri.indexOf("tenis"));    // -1  (nu există)
console.log(jocuri.join(", "));          // fotbal, șah, puzzle, curse
```

- `includes(x)` răspunde `true` sau `false`: este `x` în listă?  
- `indexOf(x)` dă **poziția** lui `x`, sau **−1** dacă nu există.  
- `join(", ")` **lipește** toate elementele într-un singur text, cu separatorul ales de tine.

**Încearcă tu (6 min)**  
- [ ] Fă o listă cu 3 jocuri, adaugă unul cu `push` și unul cu `unshift`  
- [ ] Scoate ultimul element cu `pop()` și afișează elementul  
- [ ] Verifică dacă un joc este în listă cu `includes`  

---

## 4. Parcurgem lista

### Exemplul 5 — Cu `for` și cu `for…of`

```javascript
const culori = ["roșu", "galben", "verde", "albastru"];

// Varianta 1: for cu poziția
for (let i = 0; i < culori.length; i++) {
  console.log(`Culoarea ${i + 1}: ${culori[i]}`);
}

// Varianta 2: for...of — direct elementele
for (const culoare of culori) {
  console.log("Îmi place culoarea", culoare);
}
```

- **Varianta 1** (`for` cu `i`): pornești de la `0` și mergi cât `i < culori.length`. Ai la îndemână și poziția (`i`), de exemplu ca să numeroți (`i + 1`).  
- **Varianta 2** (`for…of`): se citește „**pentru fiecare** `culoare` **din** `culori`”. Este mai scurt și mai clar când nu ai nevoie de poziție.

Atenție la limită: `i < culori.length`, nu `i <= culori.length`. Dacă ai pune `<=`, la ultima rundă ai cere `culori[4]`, care nu există (`undefined`).

**Gata când:**  
- [ ] Ai parcurs o listă cu `for` și cu `for…of`  
- [ ] Ai numerotat elementele (1, 2, 3…) folosind `i + 1`  
- [ ] Știi de ce condiția este `i < lista.length`  

---

## 5. Calcule cu liste

### Exemplul 6 — Suma, media, maximul

```javascript
const note = [9, 7, 10, 8, 6];

// Suma
let suma = 0;
for (const nota of note) {
  suma += nota;
}

// Media
const medie = suma / note.length;

// Cea mai mare notă
let maxim = note[0];
for (const nota of note) {
  if (nota > maxim) {
    maxim = nota;
  }
}

console.log("Suma:", suma);                    // 40
console.log("Media:", medie.toFixed(1));       // 8.0
console.log("Nota cea mai mare:", maxim);      // 10
```

Șabloanele sunt cele din lecția 6, doar că acum parcurgi o listă:
- **Suma**: `let suma = 0;` **înainte**, apoi `suma += element;` în buclă.  
- **Media**: suma împărțită la `lista.length`.  
- **Maximul**: pornești cu **primul** element ca „cel mai mare de până acum”; dacă găsești unul mai mare, îl înlocuiești.

Pentru cel mai mare număr ai și `Math.max(...note)`, dar calculul cu o buclă te învață cum gândește calculatorul.

**Încearcă tu (6 min)**  
- [ ] Calculează suma și media unei liste de 5 numere  
- [ ] Găsește cel mai mic număr din listă (cu o buclă, ca la maxim)  
- [ ] Numără câte numere din listă sunt mai mari decât 7  

---

## 6. Proiectul

### Exemplul 7 — „Lista mea de jocuri”

Fișierul `index.html`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lista mea de jocuri</title>
</head>
<body>
  <h1>Lista mea de jocuri</h1>
  <p>Deschide consola (F12) ca să vezi lista și calculele.</p>

  <script src="script.js"></script>
</body>
</html>
```

Fișierul `script.js`:

```javascript
// Două liste: jocurile și notele lor (aceeași poziție = același joc)
const jocuri = ["fotbal", "șah", "puzzle", "curse"];
const note = [10, 8, 9, 7];

// Funcție care afișează lista cu numere de ordine
function afiseazaLista() {
  console.log("=== Lista mea de jocuri ===");
  for (let i = 0; i < jocuri.length; i++) {
    console.log(`${i + 1}. ${jocuri[i]} - nota ${note[i]}`);
  }
}

// Funcție care calculează media notelor
function mediaNotelor() {
  let suma = 0;
  for (const nota of note) {
    suma += nota;
  }
  return suma / note.length;
}

// Funcție care găsește jocul cu cea mai mare notă
function celMaiBunJoc() {
  let pozitieMax = 0;
  for (let i = 1; i < note.length; i++) {
    if (note[i] > note[pozitieMax]) {
      pozitieMax = i;
    }
  }
  return jocuri[pozitieMax];
}

// 1. Afișăm lista
afiseazaLista();

// 2. Adăugăm un joc nou
const jocNou = prompt("Ce joc vrei să adaugi?");
if (jocNou !== null && jocNou !== "") {
  if (jocuri.includes(jocNou)) {
    console.log(`${jocNou} este deja în listă.`);
  } else {
    const notaNoua = Number(prompt(`Ce notă (1-10) dai jocului ${jocNou}?`));
    if (!Number.isNaN(notaNoua) && notaNoua >= 1 && notaNoua <= 10) {
      jocuri.push(jocNou);
      note.push(notaNoua);
      console.log(`Am adăugat ${jocNou}.`);
    } else {
      console.log("Notă nevalidă, jocul nu a fost adăugat.");
    }
  }
}

// 3. Afișăm lista și calculele
afiseazaLista();
console.log("Media notelor:", mediaNotelor().toFixed(2));
console.log("Cel mai bun joc:", celMaiBunJoc());
console.log("Jocurile mele pe un rând:", jocuri.join(", "));
```

Observă cum funcțiile (lecția 8) și listele lucrează împreună. Poți face lista despre **orice**: filme, animale, cărți, sporturi. Nu pune **date personale** (nume de colegi sau de membri ai familiei).

**Gata când:**  
- [ ] Ai două liste legate (elemente și note) și o funcție care le afișează numerotat  
- [ ] Poți adăuga un element cu `push`, după verificarea cu `includes` și a notei  
- [ ] Programul calculează media și găsește cel mai bun element  
- [ ] Nu apar erori roșii în consolă  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Lista mea de jocuri” (obligatoriu)
În folderul `Prenume_Nume_W4_L9` ai `index.html` și `script.js`, cu:
- **două liste** (`const`), legate între ele (de exemplu nume și note), cu minimum 4 elemente;
- o funcție care **afișează lista numerotat** (`i + 1`);
- adăugarea unui element nou cu `push`, după verificarea cu `includes` și a valorii cerute cu `prompt`;
- **media** și **elementul cu cea mai mare valoare**, calculate cu bucle;
- cel puțin un `for…of`;
- cod indentat și cel puțin două comentarii.

### Exercițiul B — Ce afișează programul?
Spune ce afișează: (1) `const a = ["x", "y", "z"]; console.log(a[1]);` (2) `console.log(a.length);` (3) `a.push("w"); console.log(a[a.length - 1]);` (4) `const b = [1, 2, 3, 4]; let s = 0; for (const n of b) { s += n; } console.log(s);` (5) `console.log(a.indexOf("q"));`

### Exercițiul C — Scrie codul
Scrie codul care: (1) face o listă cu 5 numere și afișează doar numerele pare (cu `for…of` și `%`); (2) elimină primul și ultimul element dintr-o listă și afișează ce a rămas; (3) verifică dacă numele unui animal citit cu `prompt` este în lista `["pisică", "câine", "pește"]` și afișează un mesaj.

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile. Programul vrea să afișeze toate culorile și să mai adauge „galben”.

```text
const culori = ["roșu", "verde", "albastru"];
console.log(culori[3]);

culori.push = "galben";

for (let i = 1; i <= culori.length; i++) {
  console.log(culori[i]);
}
```

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: ce este o listă și când o folosești? De ce primul element are numărul 0? De ce putem adăuga elemente într-o listă `const`?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W4_L9` are `index.html` și `script.js`  
- [ ] Programul rulează fără erori  
- [ ] Ai răspuns la exercițiile B–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Sortează o listă de numere cu `note.sort((a, b) => a - b)` și afișează lista. Fără funcția dintre paranteze, `sort` ordonează ca text și greșește: `[9, 10, 8]` iese `[10, 8, 9]`  
- [ ] Scoate din listă un element după poziție, cu `lista.splice(poz, 1)`  
- [ ] Fă un joc „Cuvinte ascunse”: o listă de 5 cuvinte, iar calculatorul alege unul aleator cu `lista[Math.floor(Math.random() * lista.length)]`  
- [ ] Inversează o listă cu `lista.reverse()` și compară cu originalul  

---

## Greșeli frecvente
1. **Ai numărat de la 1** — primul element este la poziția 0.  
2. **Ai cerut `lista[lista.length]`** — nu există; ultimul este `lista[lista.length - 1]`.  
3. **Ai scris `i <= lista.length`** în buclă — ultima rundă citește `undefined`.  
4. **Ai scris `lista.push = "x"`** — metodele se cheamă cu paranteze: `lista.push("x");`.  
5. **Ai scris paranteze rotunde** în loc de drepte la citire: `lista(0)` în loc de `lista[0]`.  
6. **Ai uitat virgula** între elemente — eroare sau elemente lipite.  
7. **Ai încercat `lista = [...]` pe un `const`** — nu poți schimba lista întreagă; schimbă elementele.  
8. **Ai folosit `indexOf` ca `true`/`false`** — dă o poziție sau −1; pentru da/nu folosește `includes`.  
9. **Ai pus numele colegilor sau date personale** în listă — folosește animale, jocuri, filme, cărți.  
10. **Ai uitat că `pop()` și `shift()` schimbă lista** — elementul dispare din ea.  

---

## Recapitulare pe scurt
1. O listă se scrie `[a, b, c]`; elementele au poziții de la **0**.  
2. `lista[i]` citește sau schimbă un element; `lista.length` dă numărul de elemente.  
3. `push` și `pop` lucrează la **sfârșit**; `unshift` și `shift` la **început**.  
4. `includes` răspunde da/nu; `indexOf` dă poziția sau −1; `join` lipește elementele.  
5. Parcurgi lista cu `for (let i = 0; i < lista.length; i++)` sau cu `for (const x of lista)`.  
6. Suma, media și maximul se calculează cu bucle, ca la lecția 6.

## Quiz scurt
- Care este poziția primului element?  
- Cum afli câte elemente are o listă?  
- Ce face `push`? Dar `pop`?  
- Ce dă `indexOf` când elementul nu există?  
- Care este diferența dintre `for` și `for…of`?

## Temă
Fă un program „Clasamentul meu de filme”: o listă de 5 filme și o listă de note, o funcție de afișare, media notelor și cel mai bun film. Salvează în `Prenume_Nume_W4_L9`.

## Ce urmează — Lecția 10
Învățăm **obiectele**: o „fișă” cu mai multe informații despre un lucru (nume, vârstă, nivel), ca în jocuri.

---

## Răspunsuri pentru profesor
- **Exercițiul B:** (1) `y`; (2) `3`; (3) `w`; (4) `10`; (5) `-1`.  
- **Exercițiul C:** (1) `const n = [3, 8, 5, 12, 7]; for (const x of n) { if (x % 2 === 0) { console.log(x); } }`; (2) `lista.shift(); lista.pop(); console.log(lista);`; (3) `const a = prompt("Animal:"); if (["pisică", "câine", "pește"].includes(a)) { console.log("Este în listă"); } else { console.log("Nu este în listă"); }`.  
- **Exercițiul D:** (1) `culori[3]` nu există (ultimul este `culori[2]`); (2) `culori.push = "galben"` trebuie `culori.push("galben");`; (3) bucla trebuie să pornească de la `0` și să folosească `i < culori.length`.  
- **Exercițiul E:** lista ține mai multe valori într-o variabilă; numărătoarea începe de la 0 pentru că poziția este distanța față de început; `const` interzice înlocuirea listei întregi, nu modificarea conținutului ei.  
- **Notă pentru profesor:** o analogie bună este un șir de dulapuri numerotate începând de la 0 la ușa clasei. Pentru greșeala `<=`, desenați lista cu pozițiile și întrebați ce se află în `lista[length]`. La proiect, asigurați-vă că elevii folosesc exemple neutre (animale, jocuri, filme) și nu liste cu nume de colegi.
