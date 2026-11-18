# LECȚIA 8 — Clasamentul jocurilor
### Liste și obiecte
**Modulul 4 · JavaScript pentru începători · 2 ore**  
**Code Maker Club · JavaScript Starter**

> O variabilă ține o singură valoare. Dar dacă vrei să ții **mai multe**: jocurile tale preferate, notele de la un test, culorile unui curcubeu? Ai nevoie de o **listă** (în programare, *array*): un raft cu mai multe cutii numerotate. Iar când un lucru are mai multe informații de **feluri diferite** (nume, notă, an), folosești un **obiect**: o fișă cu etichete. Azi le înveți pe amândouă și le pui împreună: o **listă de fișe**, ca în orice joc sau aplicație.  
> Proiect: **„Clasamentul jocurilor”** · folder: `Prenume_Nume_W4_L8` (ex. `Ana_Pop_W4_L8`)

---

## Ce facem azi
La final ai un clasament de jocuri: o listă de fișe (nume și notă) pe care o afișezi numerotat, în care adaugi un joc nou, calculezi media notelor și găsești jocul cu nota cea mai mare. Știi să creezi o listă și să citești un element după poziție, să adaugi și să scoți elemente (`push`, `pop`), să cauți cu `includes`, să parcurgi lista cu `for` și cu `for…of`, să calculezi o sumă, o medie și un maxim, să creezi un obiect cu proprietăți, să faci o listă de obiecte și să dai un obiect unei funcții. Aproape orice program lucrează cu mai multe lucruri deodată: monștrii dintr-un joc, produsele dintr-un coș, scorurile jucătorilor. Lista de obiecte este cea mai folosită structură din aplicațiile adevărate.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare · pornim proiectul |
| 10–25 | Prima listă: poziții, lungime, schimbare (**Exemplul 1**) |
| 25–38 | Adăugăm, scoatem, căutăm (**Exemplul 2**) |
| 38–50 | Parcurgem lista (**Exemplul 3**) |
| 50–62 | Suma, media, maximul (**Exemplul 4**) |
| 62–75 | Primul obiect (**Exemplul 5**) |
| 75–85 | Lista de obiecte (**Exemplul 6**) |
| 85–93 | Obiecte și funcții (**Exemplul 7**) |
| 93–115 | Mini-proiect: clasamentul jocurilor (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `[a, b, c]` | Creează o listă (poziții de la 0) | `const note = [9, 7, 10];` |
| `lista[i]` `lista.length` | Un element după poziție, numărul de elemente | `note[0]` |
| `push` `pop` | Adaugă la sfârșit, scoate ultimul | `note.push(8);` |
| `includes` `indexOf` `join` | Caută, află poziția, lipește în text | `note.includes(9)` |
| `for (const x of lista)` | Parcurge fiecare element | `for (const n of note)` |
| `{ eticheta: valoare }` | Creează un obiect (o fișă) | `{ nume: "Puzzle", nota: 9 }` |
| `obiect.eticheta` | Citește sau schimbă o proprietate | `joc.nota` |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- o funcție se scrie cu `function nume(parametri) { … }` și se cheamă cu `nume(argumente);`;
- `return` trimite o valoare înapoi, iar `console.log` doar o arată;
- cu `cuvant[i]` iei litera de pe poziția `i`, începând de la 0;
- o buclă `for` parcurge pozițiile de la 0 la `length - 1`.

**Încearcă tu (8 min)**  
- [ ] Creează folderul `Prenume_Nume_W4_L8` ca o **copie** a folderului `Prenume_Nume_W4_L7` (cu `tema.html`, `script.js`, `stil.css`, `imagini`, `media`)  
- [ ] Șterge din `script.js` trusa de la lecția trecută (sau comentează-o cu `/* … */`)  
- [ ] Scrie o funcție `salut(nume)` și cheam-o pentru două nume  
- [ ] Gândește-te la o listă din articolul tău pe Wikipedia (capitole, imagini sau fapte) și la numele subiectului  

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

Lungimea, ultimul element și schimbarea:

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

**Încearcă tu (8 min)**  
- [ ] Fă o listă cu 5 elemente și afișează primul, al treilea și ultimul  
- [ ] Schimbă un element după poziție și afișează lista  
- [ ] Fă o listă cu 4 capitole sau fapte din articolul tău și afișează lungimea ei  
- [ ] Spune de ce primul element are numărul 0  

**Gata când:**  
- [ ] Ai o listă cu 5 elemente și ai afișat primul, al treilea și ultimul  
- [ ] Ai schimbat un element după poziție  
- [ ] Poți explica de ce primul element are numărul 0  

---

## 3. Adăugăm, scoatem, căutăm

### Exemplul 2 — `push`, `pop`, `includes`, `indexOf`

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

**Încearcă tu (8 min)**  
- [ ] Fă o listă cu 3 jocuri și adaugă unul cu `push`  
- [ ] Scoate ultimul element cu `pop()` și afișează elementul scos  
- [ ] Verifică dacă un joc este în listă cu `includes`  
- [ ] Adaugă în lista ta din articol un element nou și afișează lista cu `join(", ")`  

---

## 4. Parcurgem lista și calculăm

### Exemplul 3 — Cu `for` și cu `for…of`

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

**Încearcă tu (6 min)**  
- [ ] Parcurge lista ta cu `for` și afișează fiecare element cu numărul lui de ordine  
- [ ] Parcurge aceeași listă cu `for…of`  
- [ ] Parcurge lista din articolul tău și afișează fiecare element într-un mesaj  
- [ ] Schimbă `<` cu `<=` și citește ce apare la sfârșit  

### Exemplul 4 — Suma, media, maximul

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

Șabloanele sunt cele din lecția 5 (`for`), doar că acum parcurgi o listă:
- **Suma**: `let suma = 0;` **înainte**, apoi `suma += element;` în buclă.  
- **Media**: suma împărțită la `lista.length`.  
- **Maximul**: pornești cu **primul** element ca „cel mai mare de până acum”; dacă găsești unul mai mare, îl înlocuiești.

**Încearcă tu (6 min)**  
- [ ] Calculează suma și media unei liste cu 5 numere  
- [ ] Găsește cel mai mare număr din listă  
- [ ] Găsește cel mai mic număr din listă (schimbă `>` cu `<`)  
- [ ] Fă o listă cu numere din articolul tău (ani, mărimi) și calculează media lor  

**Gata când:**  
- [ ] Ai parcurs o listă cu `for` și cu `for…of`  
- [ ] Ai numerotat elementele (1, 2, 3…) folosind `i + 1`  
- [ ] Ai calculat suma, media și maximul unei liste de numere  

---

## 5. Obiecte

### Exemplul 5 — Creăm un obiect și îl schimbăm

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

Citim și schimbăm proprietăți:

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

**Încearcă tu (8 min)**  
- [ ] Fă un obiect `animal` cu nume, specie, vârstă și greutate  
- [ ] Mărește vârsta cu 1, apoi adaugă o proprietate nouă `culoare`  
- [ ] Afișează într-un mesaj cu `${…}` numele și specia animalului  
- [ ] Fă un obiect `articol` cu titlul, anul și un număr de capitole din articolul tău  

**Gata când:**  
- [ ] Ai un obiect cu cel puțin 3 proprietăți, de tipuri diferite  
- [ ] Ai citit o proprietate cu punct și ai schimbat una  
- [ ] Ai adăugat o proprietate nouă  

---

## 6. Lista de obiecte

### Exemplul 6 — O listă de fișe

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

**Încearcă tu (8 min)**  
- [ ] Fă o listă cu 3 fișe despre animale sau jocuri  
- [ ] Parcurge lista cu `for…of` și afișează fiecare fișă  
- [ ] Adaugă o fișă nouă cu `push`  
- [ ] Fă o listă cu 3 fișe din articolul tău (de exemplu capitole, cu titlu și număr de imagini) și găsește fișa cu cel mai mare număr  

**Gata când:**  
- [ ] Ai o listă cu cel puțin 3 obiecte, parcursă cu `for…of`  
- [ ] Ai adăugat un obiect nou cu `push`  
- [ ] Ai găsit elementul cu cel mai mare scor  

---

## 7. Obiecte și funcții

### Exemplul 7 — Funcția primește obiectul real

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

**Încearcă tu (6 min)**  
- [ ] Scrie o funcție `arataAnimal(animal)` care afișează un animal  
- [ ] Scrie o funcție `maresteVarsta(animal)`, cheam-o, apoi afișează animalul  
- [ ] Spune într-un comentariu de ce vârsta s-a schimbat și în afara funcției  
- [ ] Scrie o funcție `arataArticol(articol)` pentru obiectul din articolul tău  

**Gata când:**  
- [ ] Ai o funcție care primește un obiect și îl afișează  
- [ ] Ai o funcție care schimbă un obiect primit  
- [ ] Poți explica de ce schimbarea se vede și în afara funcției  

---

## 8. Mini-proiect: toate la un loc

### Exemplul 8 — „Clasamentul jocurilor”

Iată programul-model. `tema.html` rămâne cum este; în `script.js` scrii:

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

**Încearcă tu (14 min)**  
- [ ] Scrie programul în `script.js`, cu lista ta, nu copiat  
- [ ] Schimbă clasamentul să fie despre alt subiect (filme, animale, cărți)  
- [ ] Adaugă în listă 4 fișe din articolul tău (de exemplu capitole sau imagini, cu o notă de la tine)  
- [ ] Citește programul rând cu rând și spune ce afișează după ce adaugi un joc nou  

**Gata când:**  
- [ ] Ai o listă de obiecte cu cel puțin 4 elemente și o funcție care o afișează numerotat  
- [ ] Poți adăuga un element cu `push`, după verificarea cu o funcție și a notei  
- [ ] Programul calculează media și găsește cel mai bun element  
- [ ] Nu apar erori roșii în consolă  

---

## De făcut azi — „Clasamentul jocurilor”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | `script.js` cu o listă cu 5 elemente afișate cu o buclă și un obiect cu 3 proprietăți afișate în consolă |
| **Complet** | Minim + o listă de obiecte (`const`) cu minimum 4 elemente și 2 proprietăți, o funcție care afișează lista numerotat, adăugarea unui element nou cu `push` după verificarea valorii cerute, media și elementul cu cea mai mare valoare, cel puțin un `for…of`, cod indentat și două comentarii |

### Pasul 1 — Minim
În folderul `Prenume_Nume_W4_L8`:

- [ ] Ai `tema.html` (cu `<script>` legat), `script.js` și `stil.css`  
- [ ] Ai o listă cu 5 elemente afișate cu o buclă  
- [ ] Ai un obiect cu 3 proprietăți afișat în consolă  

### Pasul 2 — Complet
- [ ] Ai o listă de obiecte (`const`), cu minimum 4 elemente și cel puțin 2 proprietăți fiecare  
- [ ] Ai o funcție care afișează lista numerotat (`i + 1`)  
- [ ] Adaugi un element nou cu `push`, după verificarea valorii cerute cu `prompt`  
- [ ] Calculezi media și elementul cu cea mai mare valoare, cu bucle  
- [ ] Ai cel puțin un `for…of`  
- [ ] Codul este indentat și are cel puțin două comentarii  

---

## Bonus ★★★ — Provocare: Clasamentul sortat
*Doar dacă ai terminat Complet.*

Faci clasamentul mai deștept, cu sortare și alegeri la întâmplare.

- [ ] Sortează o listă de obiecte după notă, cu `jocuri.sort((a, b) => b.nota - a.nota)`, și afișează lista  
- [ ] Scoate din listă un element după poziție, cu `lista.splice(poz, 1)`  
- [ ] Fă un joc „Cuvinte ascunse”: o listă de 5 cuvinte, iar calculatorul alege unul aleator cu `lista[Math.floor(Math.random() * lista.length)]`  
- [ ] Parcurge un obiect cu `for (const eticheta in obiect)` și afișează fiecare etichetă și valoare (`obiect[eticheta]`)  

---

## Greșeli frecvente
1. **Ai numărat de la 1** — primul element este la poziția 0.  
2. **Ai cerut `lista[lista.length]`** — nu există; ultimul este `lista[lista.length - 1]`.  
3. **Ai scris `i <= lista.length`** în buclă — ultima rundă citește `undefined`.  
4. **Ai folosit parantezele greșit** — `lista(0)` în loc de `lista[0]`, sau `lista.push = "x"` în loc de `lista.push("x");`.  
5. **Ai greșit obiectul** — ai pus `;` între proprietăți (se despart cu virgulă) sau ai scris eticheta cu altă literă (`Nume` în loc de `nume`, rezultat `undefined`).  
6. **Ai folosit `lista.nume` în loc de `lista[0].nume`** — la o listă de obiecte alegi mai întâi fișa.  
7. **Ai crezut că o funcție primește o copie a obiectului** — primește obiectul însuși.  
8. **Ai pus nume de colegi sau date personale** în liste — folosește animale, jocuri, filme, cărți.  

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
1. Termină `Prenume_Nume_W4_L8` (Minim, apoi Complet).  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — O listă în altă listă.**

```javascript
const tabla = [
  [1, 2, 3],
  [4, 5, 6]
];
console.log(tabla[1][0]);
console.log(tabla[0].length);
```

Afișează `4`, apoi `3`: `tabla[1]` este al doilea rând, iar `[0]` este primul număr din el. Afișează numărul `6` și apoi toate numerele din tabel, cu două bucle.

**Acasă 2 — Etichetele unui obiect.**

```javascript
const fisa = { nume: "Rex", varsta: 3 };
console.log(Object.keys(fisa));
console.log(Object.keys(fisa).length);
```

`Object.keys` dă lista etichetelor: afișează `['nume', 'varsta']`, apoi `2`. Încearcă-l pe obiectul din articolul tău.

4. **Încă patru exerciții (B–E):**

**B — Ce afișează programul?** Spune ce afișează: (1) `const a = ["x", "y", "z"]; console.log(a[1]);` (2) `a.push("w"); console.log(a[a.length - 1]);` (3) `console.log(a.indexOf("q"));` (4) `const b = { x: 3, y: 5 }; b.x = 10; console.log(b.x + b.y);` (5) `const l = [{ n: 1 }, { n: 2 }]; console.log(l[1].n);`

**C — Scrie codul.** Scrie codul care: (1) face o listă cu 5 numere și afișează doar numerele pare (cu `for…of` și `%`); (2) creează un obiect `film` cu `nume`, `nota` și `esteGratuit`; (3) scrie o funcție `maresteNota(joc)` care adaugă 1 la nota jocului primit.

**D — Găsește greșelile.** Găsește **3 greșeli** în codul de mai jos și repară greșelile.

```text
const culori = ["roșu", "verde", "albastru"];
console.log(culori[3]);

culori.push = "galben";

const pisica = { nume: "Luna"; varsta: 3 };
console.log(pisica.Nume);
```

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: ce este o listă și când o folosești? De ce primul element are numărul 0? Care este diferența dintre o listă și un obiect? De ce o funcție poate schimba un obiect pe care îl primește?

## Ce urmează — Lecția 9
Învățăm **DOM și evenimente**: pagina reacționează la butoane, își schimbă textul și culorile, fără consolă. Vei vedea rezultatele chiar în pagină.

---

## Răspunsuri
- **Quiz scurt:** (1) poziția `0`; (2) `push` adaugă un element la sfârșitul listei, iar `pop` scoate ultimul element și îl dă înapoi; (3) `-1`; (4) între acolade, cu proprietăți de forma etichetă și valoare, de exemplu `{ nume: "Puzzle", nota: 9 }`, iar proprietatea se citește cu punct: `joc.nota`; (5) `lista[1].nume`.  
- **Dacă ritmul clasei este lent:** `join`, `indexOf`, `unshift` / `shift`, `delete` și Exemplul 7 (obiectul dat unei funcții) sunt opționale; proiectul poate rămâne la lista de obiecte, `mediaNotelor` și `celMaiBunJoc`, fără `prompt`.  
- **Tema, exercițiul B:** (1) `y`; (2) `w`; (3) `-1`; (4) `15`; (5) `2`.  
- **Tema, exercițiul C:** (1) `const n = [3, 8, 5, 12, 7]; for (const x of n) { if (x % 2 === 0) { console.log(x); } }`; (2) `const film = { nume: "Aventura", nota: 9, esteGratuit: true };`; (3) `function maresteNota(joc) { joc.nota += 1; }`.  
- **Tema, exercițiul D:** (1) `culori[3]` nu există (ultimul este `culori[2]`); (2) `culori.push = "galben"` trebuie `culori.push("galben");`; (3) proprietățile din `pisica` se despart cu virgulă, nu cu `;` (iar `pisica.Nume` trebuie `pisica.nume`).  
- **Tema, exercițiul E:** lista ține mai multe valori de același fel, numerotate; numărătoarea începe de la 0 pentru că poziția este distanța față de început; obiectul ține informații despre un singur lucru, cu etichete; o funcție primește obiectul însuși (nu o copie), de aceea îl poate schimba.  
- **Bonus (indicii):** (1) `sort` primește o funcție care compară două fișe; `b.nota - a.nota` pune nota mare prima; (2) `splice(poz, 1)` scoate un element de la poziția `poz` și schimbă lista; (3) pui poziția aleatoare într-o variabilă și afișezi `lista[poz]`; (4) la `for (const eticheta in obiect)`, variabila `eticheta` primește pe rând fiecare etichetă, iar valoarea o citești cu `obiect[eticheta]`.  
- **Notă informativă:** o listă este ca un șir de dulapuri numerotate începând de la 0; un obiect este ca o fișă de joc, cu rubrici. La greșeala cu `<=`, desenează lista cu pozițiile și întreabă-te ce se află în `lista[length]`. Când dai un obiect unei funcții, variabila din afară și parametrul sunt două săgeți care arată către **aceeași** cutie. Lecția este densă: dacă ți se pare grea, Exemplul 7 (obiecte și funcții) îl poți face împreună cu profesorul, iar proiectul îl termini ca temă. La proiect folosește exemple neutre (animale, jocuri, filme), nu liste cu nume de colegi.
