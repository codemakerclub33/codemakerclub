# LECȚIA 10 — Obiecte
**Modulul 4 · JavaScript pentru începători · 2 ore**  
**Code Maker Club · JavaScript Starter**

> O listă ține multe lucruri **de același fel**. Dar un personaj de joc are mai multe informații de **feluri diferite**: nume, viață, forță, nivel. Pentru asta folosim un **obiect**: o fișă cu **etichete** (proprietăți) și valori. Azi înveți să faci obiecte, să le citești și să le schimbi, să faci liste de obiecte și să le dai funcțiilor.  
> Proiect: **„Lupta personajelor”** · folder: `Prenume_Nume_W4_L10` (ex. `Ana_Pop_W4_L10`)

---

## Obiectiv
La finalul orei știi să creezi un obiect cu proprietăți, să citești și să schimbi o proprietate cu punct și cu paranteze drepte, să adaugi și să ștergi proprietăți, să faci o listă de obiecte și să parcurgi lista, să trimiți un obiect unei funcții și să știi că funcția îl poate schimba.  
**Minim:** un obiect `personaj` cu 4 proprietăți, afișate în consolă.  
**Ținta orei (Complet):** + modificarea proprietăților, o listă de obiecte, o funcție care primește un obiect și o luptă cu ture între două personaje.

## De ce contează
Aproape tot ce există în lumea reală are mai multe proprietăți: un jucător, un produs, un joc. Cu obiecte ții împreună informațiile despre același lucru. Aproape orice joc și orice aplicație folosește liste de obiecte.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–35 | Primul obiect: proprietăți (**Exemplele 1–2**) |
| 35–55 | Schimbăm, adăugăm, ștergem (**Exemplul 3**) |
| 55–75 | Liste de obiecte (**Exemplul 4**) |
| 75–95 | Obiecte și funcții (**Exemplele 5–6**) |
| 95–115 | Proiect (**Exemplul 7**) |
| 115–120 | Recap și temă |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- o listă se scrie `[a, b, c]`, iar pozițiile încep de la 0;
- `push` adaugă la sfârșit, iar `for…of` parcurge fiecare element;
- calculezi suma, media și maximul cu bucle;
- o funcție poate primi valori și poate returna un rezultat.

**Încearcă tu (4 min)**  
- [ ] Creează folderul `Prenume_Nume_W4_L10` cu `index.html` (scheletul complet, cu `<script src="script.js"></script>` înainte de `</body>`) și `script.js`  
- [ ] Pune în `<body>` un `<h1>` cu textul „Obiecte”  
- [ ] În `script.js` fă o listă cu 3 animale și afișează lista cu `for…of`  

> De aici înainte, exemplele arată ce scrii în `script.js`.

---

## 2. Primul obiect

### Exemplul 1 — Creăm un obiect

```javascript
const personaj = {
  nume: "Cavalerul Curajos",
  viata: 100,
  forta: 15,
  esteViu: true
};

console.log(personaj);
```

Un obiect se scrie între **acolade** `{ … }`. Înăuntru sunt **proprietăți**, fiecare cu o **etichetă** (cheie), două puncte și o **valoare**, separate prin **virgulă** (nu punct și virgulă!). Valorile pot fi text, numere, adevărat/fals, liste sau chiar alte obiecte. Dacă o proprietate este ultima, nu mai pui virgulă după ea.

### Exemplul 2 — Citim proprietăți

```javascript
console.log(personaj.nume);       // Cavalerul Curajos
console.log(personaj.viata);      // 100
console.log(personaj["forta"]);   // 15  (alt mod de a scrie)

console.log(`${personaj.nume} are ${personaj.viata} puncte de viață.`);
```

- **Cu punct**: `personaj.nume` — cel mai des folosit.  
- **Cu paranteze drepte**: `personaj["forta"]` — util când eticheta este într-o variabilă sau are un nume neobișnuit.  
- Atenție la **litere**: `personaj.Nume` (cu N mare) nu există și dă `undefined`.

**Gata când:**  
- [ ] Ai un obiect cu cel puțin 4 proprietăți, de tipuri diferite  
- [ ] Le-ai citit cu punct și cu paranteze drepte  
- [ ] Ai folosit proprietăți într-un mesaj cu `${…}`  

---

## 3. Schimbăm, adăugăm, ștergem

### Exemplul 3 — Modificăm un obiect

```javascript
const personaj = {
  nume: "Cavalerul Curajos",
  viata: 100,
  forta: 15
};

personaj.viata = 80;            // schimbăm
personaj.viata -= 10;           // scădem: 70
personaj.nivel = 2;             // adăugăm o proprietate nouă
delete personaj.forta;          // ștergem o proprietate

console.log(personaj);
```

Rezultat:

```text
{ nume: 'Cavalerul Curajos', viata: 70, nivel: 2 }
```

- `obiect.eticheta = valoare` **schimbă** o proprietate existentă sau o **creează** dacă nu există;  
- `delete obiect.eticheta` o **șterge**;  
- și aici, obiectul este `const`, dar îi poți schimba proprietățile (ca la liste): `const` oprește doar înlocuirea obiectului întreg.

Verifici dacă o proprietate există astfel:

```javascript
console.log("viata" in personaj);   // true
console.log("forta" in personaj);   // false (proprietatea a fost ștearsă)
```

**Încearcă tu (6 min)**  
- [ ] Fă un obiect `animal` cu nume, specie, vârstă și greutate  
- [ ] Mărește vârsta cu 1, apoi adaugă o proprietate nouă `culoare`  
- [ ] Șterge o proprietate și verifică cu `in`  

---

## 4. Liste de obiecte

### Exemplul 4 — O listă de fișe

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
- [ ] Ai o listă cu cel puțin 3 obiecte  
- [ ] Ai parcurs lista cu `for…of` și ai afișat câte un mesaj pentru fiecare  
- [ ] Ai adăugat un obiect nou cu `push`  
- [ ] Ai găsit elementul cu cel mai mare scor  

---

## 5. Obiecte și funcții

### Exemplul 5 — O funcție care primește un obiect

```javascript
function arataFisa(personaj) {
  console.log(`${personaj.nume} | viață: ${personaj.viata} | forță: ${personaj.forta}`);
}

const erou = { nume: "Cavalerul", viata: 100, forta: 15 };
arataFisa(erou);
```

Funcția primește obiectul întreg și citește proprietățile lui.

### Exemplul 6 — Atenție: funcția schimbă obiectul real

```javascript
function raneste(personaj, paguba) {
  personaj.viata -= paguba;
}

const erou = { nume: "Cavalerul", viata: 100, forta: 15 };
raneste(erou, 30);
console.log(erou.viata);   // 70
```

Când trimiți un obiect unei funcții, ea primește **obiectul însuși**, nu o copie. Dacă îl schimbă înăuntru, **se schimbă și în afară**. De aceea `erou.viata` a ajuns `70`, deși funcția nu a returnat nimic. (La numere și text, funcția primește o copie, deci acolo nu se întâmplă așa.)

Poți face și o funcție care **creează** obiecte, ca să nu te repeți:

```javascript
function creeazaPersonaj(nume, viata, forta) {
  return { nume: nume, viata: viata, forta: forta };
}

const erou = creeazaPersonaj("Cavalerul", 100, 15);
const monstru = creeazaPersonaj("Dragonul", 80, 12);
```

**Încearcă tu (6 min)**  
- [ ] Scrie o funcție `vindeca(personaj, cantitate)` care mărește viața  
- [ ] Cheamă funcția pentru un personaj și afișează viața înainte și după  
- [ ] Scrie o funcție `creeazaAnimal(nume, specie)` care returnează un obiect  

---

## 6. Proiectul

### Exemplul 7 — „Lupta personajelor”

Fișierul `index.html`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lupta personajelor</title>
</head>
<body>
  <h1>Lupta personajelor</h1>
  <p>Două personaje inventate se luptă pe ture. Deschide consola (F12) ca să vezi lupta.</p>

  <script src="script.js"></script>
</body>
</html>
```

Fișierul `script.js`:

```javascript
// Un zar cu un număr de fețe
function zar(fete = 6) {
  return Math.floor(Math.random() * fete) + 1;
}

// Creăm un personaj (un obiect)
function creeazaPersonaj(nume, viata, forta) {
  return { nume: nume, viata: viata, forta: forta };
}

// Afișăm fișa
function arataFisa(personaj) {
  console.log(`${personaj.nume} | viață: ${personaj.viata} | forță: ${personaj.forta}`);
}

// Un personaj îl lovește pe celălalt
function ataca(atacator, tinta) {
  const lovitura = zar() + atacator.forta;
  tinta.viata -= lovitura;

  if (tinta.viata < 0) {
    tinta.viata = 0;
  }

  console.log(`${atacator.nume} lovește cu ${lovitura}. ${tinta.nume} mai are ${tinta.viata} viață.`);
}

// Personajele
const erou = creeazaPersonaj("Cavalerul Curajos", 60, 5);
const monstru = creeazaPersonaj("Dragonul Somnoros", 50, 4);

console.log("=== Personajele ===");
arataFisa(erou);
arataFisa(monstru);

// Lupta, pe ture
let tura = 1;

while (erou.viata > 0 && monstru.viata > 0) {
  console.log(`--- Tura ${tura} ---`);

  ataca(erou, monstru);

  if (monstru.viata > 0) {
    ataca(monstru, erou);
  }

  tura++;
}

// Rezultatul
console.log("=== Sfârșit ===");
if (erou.viata > 0) {
  console.log(`${erou.nume} a câștigat în ${tura - 1} ture!`);
} else {
  console.log(`${monstru.nume} a câștigat în ${tura - 1} ture!`);
}
```

În acest proiect folosești tot ce ai învățat: variabile, decizii, bucla `while`, funcții și obiecte. Reîncarcă pagina și compară luptele: iese altceva de fiecare dată, pentru că zarul este aleator.

Adaptează proiectul cu personaje **inventate de tine** (animale, roboți, eroi de poveste), alte valori de viață și forță, un al treilea personaj sau un mesaj final nou. Fără date personale.

**Gata când:**  
- [ ] Personajele sunt obiecte create cu o funcție  
- [ ] Funcția `ataca` primește două obiecte și schimbă viața țintei  
- [ ] Lupta rulează cu `while`, pe ture, până când un personaj ajunge la 0  
- [ ] La final se afișează câștigătorul și numărul de ture  
- [ ] Nu apar erori roșii și lupta se termină  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Lupta personajelor” (obligatoriu)
În folderul `Prenume_Nume_W4_L10` ai `index.html` și `script.js`, cu:
- **minimum 2 personaje**, ca obiecte cu cel puțin 3 proprietăți, create cu o funcție;
- o funcție `arataFisa(personaj)` care afișează un personaj;
- o funcție `ataca(atacator, tinta)` care schimbă viața țintei;
- o **luptă pe ture** cu `while`, care se termină când un personaj ajunge la 0;
- un **mesaj final** cu câștigătorul;
- cod indentat și cel puțin două comentarii.

### Exercițiul B — Ce afișează programul?
Spune ce afișează: (1) `const a = { x: 3, y: 5 }; console.log(a.x + a.y);` (2) `a.x = 10; console.log(a.x);` (3) `a.z = 7; console.log(a.z);` (4) `delete a.y; console.log(a.y);` (5) `const l = [{ n: 1 }, { n: 2 }]; console.log(l[1].n);`

### Exercițiul C — Scrie codul
Scrie codul care: (1) creează un obiect `joc` cu `nume`, `nota` și `esteGratuit`; (2) creează o listă cu 3 jocuri (obiecte) și afișează numele fiecăruia; (3) scrie o funcție `maresteNota(joc)` care adaugă 1 la nota jocului primit.

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile.

```text
const pisica = { nume: "Luna", varsta: 3 };
console.log(pisica.Nume);

const caine = { nume: "Rex"; varsta: 5 };

console.log(pisica.culoare.length);
```

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: care este diferența dintre o listă și un obiect? Cum citești eticheta `nume` dintr-un obiect `personaj`? De ce o funcție poate schimba un obiect pe care îl primește?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W4_L10` are `index.html` și `script.js`  
- [ ] Programul rulează fără erori  
- [ ] Ai răspuns la exercițiile B–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Adaugă un al treilea personaj și fă o luptă între toți trei (pe rând)  
- [ ] Adaugă o proprietate `scut` și fă lovitura mai mică dacă ținta are scut  
- [ ] Fă o listă cu 5 personaje și afișează personajele în ordinea vieții (cel mai puternic primul), cu `sort((a, b) => b.viata - a.viata)`  
- [ ] Parcurge un obiect cu `for (const eticheta in obiect)` și afișează fiecare etichetă și valoare (`obiect[eticheta]`)  

---

## Greșeli frecvente
1. **Ai pus `;` între proprietăți** — se despart cu virgulă.  
2. **Ai uitat virgula** între proprietăți — eroare.  
3. **Ai scris eticheta cu altă literă** (`Nume` în loc de `nume`) — dă `undefined`.  
4. **Ai citit o proprietate care nu există** și apoi ai cerut ceva din ea (`obiect.culoare.length`) — „Cannot read properties of undefined”.  
5. **Ai folosit `:` în loc de `=` la modificare** — corect este `personaj.viata = 80;`.  
6. **Ai folosit `=` în loc de `:` la creare** — în obiect se scrie `viata: 100`.  
7. **Ai crezut că o funcție primește o copie a obiectului** — primește obiectul însuși.  
8. **Ai uitat că `const` nu oprește schimbarea proprietăților** — oprește doar înlocuirea obiectului întreg.  
9. **Ai folosit `lista.nume` în loc de `lista[0].nume`** — la o listă de obiecte alegi mai întâi fișa.  
10. **Ai pus nume de colegi sau date personale** în obiecte — folosește personaje inventate.  

---

## Recapitulare pe scurt
1. Un obiect se scrie `{ eticheta: valoare, … }`, cu proprietăți separate prin virgulă.  
2. Citești cu `obiect.eticheta` sau `obiect["eticheta"]`.  
3. `obiect.eticheta = valoare` schimbă sau adaugă; `delete` șterge.  
4. O listă de obiecte se parcurge cu `for…of`, citind proprietățile cu punct.  
5. O funcție care primește un obiect îl poate schimba pe cel real.  
6. Funcțiile `creeaza…` returnează obiecte noi.

## Quiz scurt
- Cum scrii un obiect?  
- Care este diferența dintre `obiect.nume` și `obiect["nume"]`?  
- Cum adaugi o proprietate nouă?  
- Ce primește o funcție când îi dai un obiect?  
- Cum citești numele celui de-al doilea element dintr-o listă de obiecte?

## Temă
Fă un program „Clasamentul jocurilor”: o listă de 5 obiecte (`nume`, `nota`, `anul`), o funcție care afișează toate jocurile, una care găsește jocul cu cea mai mare notă și una care adaugă un joc nou. Salvează în `Prenume_Nume_W4_L10`.

## Ce urmează — Lecția 11
Învățăm **DOM și evenimente**: pagina reacționează la butoane, își schimbă textul și culorile, fără consolă. Vei vedea rezultatele chiar în pagină.

---

## Răspunsuri pentru profesor
- **Exercițiul B:** (1) `8`; (2) `10`; (3) `7`; (4) `undefined`; (5) `2`.  
- **Exercițiul C:** (1) `const joc = { nume: "Puzzle", nota: 9, esteGratuit: true };`; (2) `const jocuri = [{ nume: "A", nota: 8 }, { nume: "B", nota: 9 }, { nume: "C", nota: 7 }]; for (const j of jocuri) { console.log(j.nume); }`; (3) `function maresteNota(joc) { joc.nota += 1; }`.  
- **Exercițiul D:** (1) `pisica.Nume` trebuie `pisica.nume`; (2) proprietățile din `caine` se despart cu virgulă, nu cu `;`; (3) `pisica.culoare` nu există, deci `.length` dă eroare (se poate adăuga proprietatea sau se șterge linia).  
- **Exercițiul E:** lista ține valori de același fel, numerotate; obiectul ține informații despre un singur lucru, cu etichete; `personaj.nume` sau `personaj["nume"]`; o funcție primește obiectul însuși (nu o copie).  
- **Notă pentru profesor:** pentru obiect, folosiți analogia „fișa de joc” sau „cartea de joc” cu rubrici. Pentru comportamentul funcțiilor cu obiecte, desenați pe tablă două săgeți (variabila din afara funcției și parametrul) care arată către **aceeași** cutie. La „Lupta personajelor”, insistați ca personajele să fie inventate; evitați comparațiile cu persoane reale.
