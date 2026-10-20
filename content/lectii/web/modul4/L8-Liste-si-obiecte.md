# LECȚIA 8 — Liste și obiecte
**Modulul 4 · JavaScript pentru începători · 2 ore**  
**Code Maker Club · JavaScript Starter**

> O variabilă ține o singură valoare. Dar dacă vrei să ții **mai multe**: jocurile tale preferate, notele de la un test, culorile unui curcubeu? Ai nevoie de o **listă** (în programare, *array*): un raft cu mai multe cutii numerotate. Iar când un lucru are mai multe informații de **feluri diferite** (nume, notă, an), folosești un **obiect**: o fișă cu etichete. Azi le înveți pe amândouă și le pui împreună: o **listă de fișe**, ca în orice joc sau aplicație.  
> Proiect: **„Clasamentul jocurilor mele”** · folder: `Prenume_Nume_W4_L8` (ex. `Ana_Pop_W4_L8`)

---

## Obiectiv
La finalul orei știi să creezi o listă și să citești un element după poziție, să adaugi și să scoți elemente (`push`, `pop`), să cauți cu `includes`, să parcurgi lista cu `for` și cu `for…of`, să calculezi o sumă, o medie și un maxim, să creezi un obiect cu proprietăți, să-l citești și să-l schimbi, să faci o listă de obiecte și să dai un obiect unei funcții.  
**Minim:** o listă cu 5 elemente afișate cu o buclă și un obiect cu 3 proprietăți afișate în consolă.  
**Ținta orei (Complet):** + adăugare și căutare, media unei liste de numere, o listă de obiecte parcursă cu `for…of`, o funcție care primește un obiect și explicarea de ce primul element are numărul 0.

## De ce contează
Aproape orice program lucrează cu **mai multe lucruri deodată**: monștrii dintr-un joc, produsele dintr-un coș, scorurile jucătorilor. Cu liste ții toate valorile într-un singur loc, iar cu obiecte ții împreună informațiile despre același lucru. Lista de obiecte este cea mai folosită structură din aplicațiile adevărate.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare · pornim proiectul |
| 10–25 | Prima listă: poziții și lungime (**Exemplele 1–2**) |
| 25–40 | Adăugăm, scoatem, căutăm (**Exemplul 3**) |
| 40–55 | Parcurgem lista, calculăm suma, media, maximul (**Exemplele 4–5**) |
| 55–70 | Primul obiect (**Exemplele 6–7**) |
| 70–85 | Lista de obiecte (**Exemplul 8**) |
| 85–95 | Obiecte și funcții (**Exemplul 9**) |
| 95–115 | Proiect (**Exemplul 10**) |
| 115–120 | Recap și temă |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- o funcție se scrie cu `function nume(parametri) { … }` și se cheamă cu `nume(argumente);`;
- `return` trimite o valoare înapoi, iar `console.log` doar o arată;
- cu `cuvant[i]` iei litera de pe poziția `i`, începând de la 0;
- o buclă `for` parcurge pozițiile de la 0 la `length - 1`.

**Încearcă tu (4 min)**  
- [ ] Creează folderul `Prenume_Nume_W4_L8` cu `index.html` (scheletul complet, cu `<script src="script.js"></script>` înainte de `</body>`) și `script.js`  
- [ ] Pune în `<body>` un `<h1>` cu textul „Liste și obiecte”  
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

### Exemplul 2 — Lungimea, ultimul element și schimbarea

```javascript
console.log(animale.length);                    // 4
console.log(animale[animale.length - 1]);       // papagal (ultimul)
console.log(animale[10]);                       // undefined (nu există)

animale[1] = "hamster";
console.log(animale);   // ['pisică', 'hamster', 'pește', 'papagal']
```

- `.length` arată **câte elemente** are lista (4), dar ultima poziție este **3**, adică `length - 1`.  
- Dacă ceri o poziție care nu există, primești `undefined`.  
- Un element se **schimbă** scriind în poziția lui: `animale[1] = "hamster";`.

Poate te întrebi: lista este `const`, cum de am putut schimba un element? `const` înseamnă că **numele `animale` va arăta mereu spre aceeași listă**; nu poți scrie `animale = ["alt ceva"]`. Dar **înăuntrul** listei poți schimba lucrurile. Folosim `const` pentru liste, în mod obișnuit.

**Gata când:**  
- [ ] Ai o listă cu 5 elemente și ai afișat primul, al treilea și ultimul  
- [ ] Ai schimbat un element după poziție  
- [ ] Poți explica de ce primul element are numărul 0  

---

## 3. Adăugăm, scoatem, căutăm

### Exemplul 3 — `push`, `pop`, `includes`, `indexOf`

```javascript
const jocuri = ["fotbal", "șah"];

jocuri.push("puzzle");          // adaugă la SFÂRȘIT
console.log(jocuri);            // ['fotbal', 'șah', 'puzzle']

const ultimul = jocuri.pop();   // scoate ultimul element
console.log(ultimul);           // puzzle
console.log(jocuri);            // ['fotbal', 'șah']

console.log(jocuri.includes("șah"));     // true
console.log(jocuri.includes("tenis"));   // false
console.log(jocuri.indexOf("șah"));      // 1
console.log(jocuri.indexOf("tenis"));    // -1  (nu există)
console.log(jocuri.join(", "));          // fotbal, șah
```

| Metodă | Ce face |
|--------|---------|
| `push(x)` | adaugă `x` la **sfârșit** |
| `pop()` | scoate **ultimul** element și îl dă înapoi |
| `includes(x)` | răspunde `true` sau `false`: este `x` în listă? |
| `indexOf(x)` | dă **poziția** lui `x`, sau **−1** dacă nu există |
| `join(", ")` | **lipește** elementele într-un singur text |

`push` și `pop` **schimbă lista însăși**. Mai există `unshift` (adaugă la început) și `shift` (scoate primul element), care merg la fel. Folosește exemple cu animale, jocuri sau filme, nu cu nume de colegi sau de persoane reale.

**Încearcă tu (6 min)**  
- [ ] Fă o listă cu 3 jocuri și adaugă unul cu `push`  
- [ ] Scoate ultimul element cu `pop()` și afișează-l  
- [ ] Verifică dacă un joc este în listă cu `includes`  

---

## 4. Parcurgem lista și calculăm

### Exemplul 4 — Cu `for` și cu `for…of`

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

### Exemplul 5 — Suma, media, maximul

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

Șabloanele sunt cele din lecția cu `for`, doar că acum parcurgi o listă:
- **Suma**: `let suma = 0;` **înainte**, apoi `suma += element;` în buclă.  
- **Media**: suma împărțită la `lista.length`.  
- **Maximul**: pornești cu **primul** element ca „cel mai mare de până acum”; dacă găsești unul mai mare, îl înlocuiești.

**Gata când:**  
- [ ] Ai parcurs o listă cu `for` și cu `for…of`  
- [ ] Ai numerotat elementele (1, 2, 3…) folosind `i + 1`  
- [ ] Ai calculat suma, media și maximul unei liste de numere  

---

## 5. Primul obiect

### Exemplul 6 — Creăm un obiect

```javascript
const joc = {
  nume: "Puzzle",
  nota: 9,
  anul: 2021,
  esteGratuit: true
};

console.log(joc);
```

Un obiect se scrie între **acolade** `{ … }`. Înăuntru sunt **proprietăți**, fiecare cu o **etichetă** (cheie), două puncte și o **valoare**, separate prin **virgulă** (nu punct și virgulă!). Valorile pot fi text, numere, adevărat/fals, liste sau chiar alte obiecte. Dacă o proprietate este ultima, nu mai pui virgulă după ea.

Listă contra obiect: lista ține lucruri **de același fel**, numerotate (`note[0]`); obiectul ține informații **de feluri diferite** despre un singur lucru, cu etichete (`joc.nota`).

### Exemplul 7 — Citim și schimbăm proprietăți

```javascript
console.log(joc.nume);          // Puzzle
console.log(joc["nota"]);       // 9  (alt mod de a scrie)
console.log(`${joc.nume} are nota ${joc.nota}.`);

joc.nota = 10;                  // schimbăm
joc.nota -= 1;                  // scădem: 9
joc.culoare = "albastru";       // adăugăm o proprietate nouă
delete joc.anul;                // ștergem o proprietate

console.log(joc);
```

- **Cu punct**: `joc.nume` — cel mai des folosit. **Cu paranteze drepte**: `joc["nota"]` — util când eticheta este într-o variabilă.  
- Atenție la **litere**: `joc.Nume` (cu N mare) nu există și dă `undefined`.  
- `obiect.eticheta = valoare` **schimbă** o proprietate existentă sau o **creează** dacă nu există; `delete obiect.eticheta` o **șterge**.  
- Obiectul este `const`, dar îi poți schimba proprietățile, ca la liste: `const` oprește doar înlocuirea obiectului întreg.

**Încearcă tu (6 min)**  
- [ ] Fă un obiect `animal` cu nume, specie, vârstă și greutate  
- [ ] Mărește vârsta cu 1, apoi adaugă o proprietate nouă `culoare`  
- [ ] Afișează într-un mesaj cu `${…}` numele și specia animalului  

---

## 6. Lista de obiecte

### Exemplul 8 — O listă de fișe

Cea mai folositoare combinație: o **listă** în care fiecare element este un **obiect**:

```javascript
const jucatori = [
  { nume: "Fulger", scor: 120 },
  { nume: "Umbra", scor: 95 },
  { nume: "Steaua", scor: 150 }
];

console.log(jucatori[0].nume);    // Fulger
console.log(jucatori.length);     // 3

// Parcurgem lista
for (const jucator of jucatori) {
  console.log(`${jucator.nume}: ${jucator.scor} puncte`);
}

// Adăugăm un jucător
jucatori.push({ nume: "Vulpea", scor: 110 });

// Căutăm cel mai mare scor
let castigator = jucatori[0];
for (const jucator of jucatori) {
  if (jucator.scor > castigator.scor) {
    castigator = jucator;
  }
}
console.log("Câștigătorul este", castigator.nume, "cu", castigator.scor, "puncte");
```

Observă:
- `jucatori[0].nume` se citește „prima fișă, eticheta `nume`”;  
- `for…of` dă, la fiecare rundă, **o fișă întreagă**, iar tu citești proprietățile ei cu punct;  
- la maxim, păstrăm **fișa** câștigătoare, nu doar scorul, ca să aflăm și numele.

Folosește nume de **personaje inventate**, de animale sau de jocuri; nu pune nume de colegi sau de persoane reale.

**Gata când:**  
- [ ] Ai un obiect cu cel puțin 3 proprietăți, de tipuri diferite  
- [ ] Ai o listă cu cel puțin 3 obiecte, parcursă cu `for…of`  
- [ ] Ai adăugat un obiect nou cu `push`  
- [ ] Ai găsit elementul cu cel mai mare scor  

---

## 7. Obiecte și funcții

### Exemplul 9 — Funcția primește obiectul real

```javascript
function arataFisa(joc) {
  console.log(`${joc.nume} | nota ${joc.nota}`);
}

function maresteNota(joc) {
  joc.nota += 1;
}

const puzzle = { nume: "Puzzle", nota: 8 };
arataFisa(puzzle);       // Puzzle | nota 8
maresteNota(puzzle);
arataFisa(puzzle);       // Puzzle | nota 9
```

Când trimiți un obiect unei funcții, ea primește **obiectul însuși**, nu o copie. Dacă îl schimbă înăuntru, **se schimbă și în afară**: nota lui `puzzle` a ajuns `9`, deși funcția nu a returnat nimic. (La numere și text, funcția primește o copie, deci acolo nu se întâmplă așa.)

**Încearcă tu (5 min)**  
- [ ] Scrie o funcție `arataAnimal(animal)` care afișează un animal  
- [ ] Scrie o funcție `maresteVarsta(animal)`, cheamă funcția, apoi afișează animalul  
- [ ] Spune pe foaie de ce vârsta s-a schimbat și în afara funcției  

---

## 8. Proiectul

### Exemplul 10 — „Clasamentul jocurilor mele”

Fișierul `index.html`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Clasamentul jocurilor mele</title>
</head>
<body>
  <h1>Clasamentul jocurilor mele</h1>
  <p>Deschide consola (F12) ca să vezi lista și calculele.</p>

  <script src="script.js"></script>
</body>
</html>
```

Fișierul `script.js`:

```javascript
// O listă de obiecte: fiecare joc are un nume și o notă
const jocuri = [
  { nume: "fotbal", nota: 10 },
  { nume: "șah", nota: 8 },
  { nume: "puzzle", nota: 9 },
  { nume: "curse", nota: 7 }
];

// Afișăm lista cu numere de ordine
function afiseazaLista() {
  console.log("=== Clasamentul meu ===");
  for (let i = 0; i < jocuri.length; i++) {
    console.log(`${i + 1}. ${jocuri[i].nume} - nota ${jocuri[i].nota}`);
  }
}

// Verificăm dacă un joc există deja
function existaJoc(nume) {
  for (const joc of jocuri) {
    if (joc.nume === nume) {
      return true;
    }
  }
  return false;
}

// Media notelor
function mediaNotelor() {
  let suma = 0;
  for (const joc of jocuri) {
    suma += joc.nota;
  }
  return suma / jocuri.length;
}

// Jocul cu cea mai mare notă (întoarce fișa întreagă)
function celMaiBunJoc() {
  let cel = jocuri[0];
  for (const joc of jocuri) {
    if (joc.nota > cel.nota) {
      cel = joc;
    }
  }
  return cel;
}

// 1. Afișăm lista
afiseazaLista();

// 2. Adăugăm un joc nou
const numeNou = prompt("Ce joc vrei să adaugi?");

if (numeNou !== null && numeNou !== "") {
  if (existaJoc(numeNou)) {
    console.log(`${numeNou} este deja în listă.`);
  } else {
    const notaNoua = Number(prompt(`Ce notă (1-10) dai jocului ${numeNou}?`));

    if (!Number.isNaN(notaNoua) && notaNoua >= 1 && notaNoua <= 10) {
      jocuri.push({ nume: numeNou, nota: notaNoua });
      console.log(`Am adăugat ${numeNou}.`);
    } else {
      console.log("Notă nevalidă, jocul nu a fost adăugat.");
    }
  }
}

// 3. Afișăm lista și calculele
afiseazaLista();
console.log("Media notelor:", mediaNotelor().toFixed(2));
console.log("Cel mai bun joc:", celMaiBunJoc().nume);
```

Observă cum funcțiile, deciziile, buclele, listele și obiectele lucrează împreună. Poți face clasamentul despre **orice**: filme, animale, cărți, sporturi. Nu pune **date personale** (nume de colegi sau de membri ai familiei).

**Gata când:**  
- [ ] Ai o listă de obiecte cu cel puțin 4 elemente și o funcție care o afișează numerotat  
- [ ] Poți adăuga un element cu `push`, după verificarea cu o funcție și a notei  
- [ ] Programul calculează media și găsește cel mai bun element  
- [ ] Nu apar erori roșii în consolă  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Clasamentul jocurilor mele” (obligatoriu)
În folderul `Prenume_Nume_W4_L8` ai `index.html` și `script.js`, cu:
- o **listă de obiecte** (`const`), cu minimum 4 elemente și cel puțin 2 proprietăți fiecare;
- o funcție care **afișează lista numerotat** (`i + 1`);
- adăugarea unui element nou cu `push`, după verificarea valorii cerute cu `prompt`;
- **media** și **elementul cu cea mai mare valoare**, calculate cu bucle;
- cel puțin un `for…of`;
- cod indentat și cel puțin două comentarii.

### Exercițiul B — Ce afișează programul?
Spune ce afișează: (1) `const a = ["x", "y", "z"]; console.log(a[1]);` (2) `a.push("w"); console.log(a[a.length - 1]);` (3) `console.log(a.indexOf("q"));` (4) `const b = { x: 3, y: 5 }; b.x = 10; console.log(b.x + b.y);` (5) `const l = [{ n: 1 }, { n: 2 }]; console.log(l[1].n);`

### Exercițiul C — Scrie codul
Scrie codul care: (1) face o listă cu 5 numere și afișează doar numerele pare (cu `for…of` și `%`); (2) creează un obiect `film` cu `nume`, `nota` și `esteGratuit`; (3) scrie o funcție `maresteNota(joc)` care adaugă 1 la nota jocului primit.

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile.

```text
const culori = ["roșu", "verde", "albastru"];
console.log(culori[3]);

culori.push = "galben";

const pisica = { nume: "Luna"; varsta: 3 };
console.log(pisica.Nume);
```

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: ce este o listă și când o folosești? De ce primul element are numărul 0? Care este diferența dintre o listă și un obiect? De ce o funcție poate schimba un obiect pe care îl primește?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W4_L8` are `index.html` și `script.js`  
- [ ] Programul rulează fără erori  
- [ ] Ai răspuns la exercițiile B–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Sortează o listă de obiecte după notă, cu `jocuri.sort((a, b) => b.nota - a.nota)`, și afișează lista  
- [ ] Scoate din listă un element după poziție, cu `lista.splice(poz, 1)`  
- [ ] Fă un joc „Cuvinte ascunse”: o listă de 5 cuvinte, iar calculatorul alege unul aleator cu `lista[Math.floor(Math.random() * lista.length)]`  
- [ ] Parcurge un obiect cu `for (const eticheta in obiect)` și afișează fiecare etichetă și valoare (`obiect[eticheta]`)  

---

## Greșeli frecvente
1. **Ai numărat de la 1** — primul element este la poziția 0.  
2. **Ai cerut `lista[lista.length]`** — nu există; ultimul este `lista[lista.length - 1]`.  
3. **Ai scris `i <= lista.length`** în buclă — ultima rundă citește `undefined`.  
4. **Ai scris `lista.push = "x"`** — metodele se cheamă cu paranteze: `lista.push("x");`.  
5. **Ai scris paranteze rotunde** în loc de drepte la citire: `lista(0)` în loc de `lista[0]`.  
6. **Ai pus `;` între proprietățile unui obiect** — se despart cu virgulă.  
7. **Ai scris eticheta cu altă literă** (`Nume` în loc de `nume`) — dă `undefined`.  
8. **Ai folosit `lista.nume` în loc de `lista[0].nume`** — la o listă de obiecte alegi mai întâi fișa.  
9. **Ai crezut că o funcție primește o copie a obiectului** — primește obiectul însuși.  
10. **Ai pus nume de colegi sau date personale** în liste — folosește animale, jocuri, filme, cărți.  

---

## Recapitulare pe scurt
1. O listă se scrie `[a, b, c]`; elementele au poziții de la **0**.  
2. `lista[i]` citește sau schimbă un element; `lista.length` dă numărul de elemente.  
3. `push` adaugă la sfârșit, `pop` scoate ultimul; `includes` răspunde da/nu, `indexOf` dă poziția sau −1.  
4. Parcurgi lista cu `for (let i = 0; i < lista.length; i++)` sau cu `for (const x of lista)`.  
5. Un obiect se scrie `{ eticheta: valoare, … }`; citești cu `obiect.eticheta`, schimbi cu `obiect.eticheta = valoare`.  
6. O listă de obiecte se parcurge cu `for…of`, citind proprietățile cu punct.  
7. O funcție care primește un obiect îl poate schimba pe cel real.

## Quiz scurt
- Care este poziția primului element dintr-o listă?  
- Ce face `push`? Dar `pop`?  
- Ce dă `indexOf` când elementul nu există?  
- Cum scrii un obiect și cum citești o proprietate?  
- Cum citești numele celui de-al doilea element dintr-o listă de obiecte?

## Temă
Fă un program „Clasamentul meu de filme”: o listă de 5 obiecte (`nume`, `nota`, `anul`), o funcție care afișează toate filmele, una care găsește filmul cu cea mai mare notă și una care adaugă un film nou. Salvează în `Prenume_Nume_W4_L8`.

## Ce urmează — Lecția 9
Învățăm **DOM și evenimente**: pagina reacționează la butoane, își schimbă textul și culorile, fără consolă. Vei vedea rezultatele chiar în pagină.

---

## Răspunsuri pentru profesor
- **Exercițiul B:** (1) `y`; (2) `w`; (3) `-1`; (4) `15`; (5) `2`.  
- **Exercițiul C:** (1) `const n = [3, 8, 5, 12, 7]; for (const x of n) { if (x % 2 === 0) { console.log(x); } }`; (2) `const film = { nume: "Aventura", nota: 9, esteGratuit: true };`; (3) `function maresteNota(joc) { joc.nota += 1; }`.  
- **Exercițiul D:** (1) `culori[3]` nu există (ultimul este `culori[2]`); (2) `culori.push = "galben"` trebuie `culori.push("galben");`; (3) proprietățile din `pisica` se despart cu virgulă, nu cu `;` (iar `pisica.Nume` trebuie `pisica.nume`).  
- **Exercițiul E:** lista ține mai multe valori de același fel, numerotate; numărătoarea începe de la 0 pentru că poziția este distanța față de început; obiectul ține informații despre un singur lucru, cu etichete; o funcție primește obiectul însuși (nu o copie), de aceea îl poate schimba.  
- **Notă pentru profesor:** pentru liste, o analogie bună este un șir de dulapuri numerotate începând de la 0 la ușa clasei; pentru obiect, „fișa de joc” sau cartea de joc cu rubrici. Pentru greșeala `<=`, desenați lista cu pozițiile și întrebați ce se află în `lista[length]`. Pentru comportamentul funcțiilor cu obiecte, desenați două săgeți (variabila din afara funcției și parametrul) care arată către **aceeași** cutie. Lecția este densă: dacă ritmul clasei o cere, Exemplul 9 (obiecte și funcții) poate fi făcut împreună, la tablă, iar proiectul se poate încheia ca temă. La proiect, asigurați-vă că elevii folosesc exemple neutre (animale, jocuri, filme) și nu liste cu nume de colegi.
