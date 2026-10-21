# LECȚIA 6 — Grid și position
**Modulul 3 · CSS: Stil și culoare · 2 ore**  
**Code Maker Club · CSS Stylist**

> Flexbox așază elementele pe **un singur rând** (sau pe o singură coloană). Când vrei **rânduri și coloane în același timp**, ca într-o galerie sau într-un tabel de cutii, folosești **Grid**. Apoi învățăm `position`, cu care așezi un element **peste altul**: o insignă „NOU” într-un colț sau un buton care rămâne pe ecran.  
> Proiect: **„Galeria mea de jocuri”** · folder: `Prenume_Nume_W3_L6` (ex. `Ana_Pop_W3_L6`)

---

## Obiectiv
La finalul orei știi să faci o grilă cu `display: grid;`, să alegi coloanele cu `grid-template-columns` și unitatea `fr`, să pui spațiu cu `gap`, să întinzi un element pe mai multe coloane, să folosești `position` (`relative`, `absolute`, `fixed`, `sticky`) și să ordonezi straturile cu `z-index`.  
**Minim:** o grilă cu 3 coloane egale și 6 cutii, plus o insignă pusă într-un colț al unei cutii.  
**Ținta orei (Complet):** + un element întins pe două coloane, un antet care rămâne sus la derulare, un buton fix „Sus” și explicația diferenței dintre Flexbox și Grid.

## De ce contează
Galeriile, listele de produse și paginile cu mai multe coloane se fac cu Grid. Insignele, butoanele plutitoare și antetele care rămân sus se fac cu `position`. Împreună cu Flexbox, ai uneltele pentru aproape orice pagină.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–40 | Grid: coloane, `fr`, `gap` (**Exemplele 1–3**) |
| 40–55 | Elemente întinse pe mai multe coloane (**Exemplul 4**) |
| 55–80 | `position`: `relative` și `absolute` (**Exemplele 5–6**) |
| 80–100 | `fixed`, `sticky`, `z-index` (**Exemplele 7–9**) |
| 100–115 | Proiect (**Exemplul 10**) |
| 115–120 | Recap și temă |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- `display: flex;` se scrie pe **părinte** și pune copiii pe un rând;
- `justify-content` lucrează pe axa principală, `align-items` pe cea secundară;
- `gap` pune spațiu între elemente, iar `flex-wrap: wrap;` le lasă să treacă pe rândul următor.

**Încearcă tu (4 min)**  
- [ ] Creează folderul `Prenume_Nume_W3_L6` cu `index.html` (scheletul complet, legat la `stil.css`) și `stil.css`  
- [ ] Pune `* { box-sizing: border-box; }` prima în `stil.css`  
- [ ] Pune în `<body>` un `<div class="grila">` cu șase `<div class="cutie">` în el, numerotate de la 1 la 6  

> De aici înainte, exemplele arată ce scrii în `<body>` și, separat, ce scrii în `stil.css`.

---

## 2. Grid: rânduri și coloane

### Exemplul 1 — Prima grilă

În `stil.css`:

```css
.cutie {
  background-color: lightblue;
  border: 2px solid navy;
  padding: 20px;
  text-align: center;
}

.grila {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
}
```

- `display: grid;` face din `.grila` un **container grid**;  
- `grid-template-columns: 1fr 1fr 1fr;` spune: „vreau **trei coloane**, toate egale”;  
- `gap: 15px;` pune spațiu între rânduri și între coloane.

Cele șase cutii se așază singure pe **două rânduri de câte trei**. Nu a trebuit să spui câte rânduri vrei: grila adaugă rânduri cât este nevoie.

### Exemplul 2 — Unitatea `fr` și `repeat`

`fr` vine de la „fracțiune”: o parte din **spațiul liber**. `1fr 1fr 1fr` împarte spațiul în trei părți egale. Pentru multe coloane există o scurtătură:

```css
.grila {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}
```

`repeat(3, 1fr)` înseamnă exact același lucru ca `1fr 1fr 1fr`. Poți amesteca unitățile:

```css
.cu-meniu {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 15px;
}
```

Prima coloană are **fix** 200px, iar a doua ia **tot restul**. Este o machetă clasică: meniu lateral plus conținut. Cu `2fr 1fr`, prima coloană ar fi de două ori mai lată decât a doua.

### Exemplul 3 — Înălțimea rândurilor

```css
.grila {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 120px;
  gap: 15px;
}
```

`grid-auto-rows: 120px;` dă fiecărui rând înălțimea de 120px, oricâte rânduri apar. Fără ea, înălțimea rândului se potrivește cu ce este în cutie. Dacă vrei un rând care **crește** când textul este mai lung, folosește `grid-auto-rows: minmax(120px, auto);`: minimum 120px, iar dacă e nevoie, mai mult.

### Flexbox sau Grid?

| | Flexbox | Grid |
|---|---------|------|
| Lucrează pe | **o singură direcție** (rând sau coloană) | **rânduri și coloane** deodată |
| Bun pentru | meniuri, rânduri de butoane, centrare | galerii, machete cu coloane |
| Regulă simplă | „aranjez elementele pe o linie” | „desenez o tabelă de cutii” |

Nu alegi un singur câștigător: se pot folosi **împreună** (o grilă de carduri, iar în fiecare card un Flexbox).

**Gata când:**  
- [ ] Cele șase cutii stau în 3 coloane egale, cu `gap`  
- [ ] Ai încercat `repeat(3, 1fr)` și `200px 1fr`  
- [ ] Ai setat înălțimea rândurilor cu `grid-auto-rows`  
- [ ] Poți spune când folosești Flexbox și când Grid  

---

## 3. Elemente întinse pe mai multe coloane

### Exemplul 4 — `span`

```css
.mare {
  grid-column: span 2;
  background-color: gold;
}

.latura {
  grid-column: 1 / -1;
  background-color: lightgreen;
}
```

```html
<div class="grila">
  <div class="cutie mare">1 (pe două coloane)</div>
  <div class="cutie">2</div>
  <div class="cutie">3</div>
  <div class="cutie latura">4 (pe toată lățimea)</div>
  <div class="cutie">5</div>
</div>
```

- `grid-column: span 2;` întinde elementul pe **două coloane**;  
- `grid-column: 1 / -1;` îl întinde **de la prima linie până la ultima**, deci pe toată lățimea, oricâte coloane ar fi.

Poți întinde și pe rânduri, cu `grid-row: span 2;`.

**Încearcă tu (6 min)**  
- [ ] Întinde o cutie pe două coloane cu `span 2`  
- [ ] Fă o cutie pe toată lățimea cu `1 / -1`  
- [ ] Schimbă grila la 4 coloane și vezi ce se mută  

---

## 4. `position`: așezăm un element peste altul

Fiecare element are o proprietate `position`. Valoarea implicită este `static`: elementul stă la locul lui, în ordinea paginii. Celelalte valori îți permit să muți elementul cu `top`, `bottom`, `left` și `right`.

| Valoare | Ce face |
|---------|---------|
| `static` | stă normal (implicit); `top` și `left` nu au efect |
| `relative` | stă la locul lui, dar îl poți **împinge** față de locul lui |
| `absolute` | iese din rând și se așază **față de părintele** poziționat |
| `fixed` | se așază **față de fereastră** și rămâne acolo la derulare |
| `sticky` | stă normal, apoi se **lipește sus** când derulezi până la el |

### Exemplul 5 — `relative`

```css
.mutat {
  position: relative;
  top: 10px;
  left: 30px;
}
```

Elementul este împins cu 10px în jos și 30px spre dreapta față de **locul în care ar fi stat**. Celelalte elemente nu se mișcă, iar locul lui rămâne gol. Cel mai des, `relative` nu se folosește ca să muți ceva, ci ca să fie **părinte de referință** pentru un copil `absolute`.

### Exemplul 6 — `absolute`: o insignă în colț

```html
<div class="produs">
  <span class="insigna">NOU</span>
  <h3>Joc de puzzle</h3>
  <p>Potrivește piesele și rezolvă imaginea.</p>
</div>
```

```css
.produs {
  position: relative;
  border: 2px solid navy;
  border-radius: 12px;
  padding: 20px;
  width: 250px;
}

.insigna {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: crimson;
  color: white;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: bold;
}
```

Regula de aur: **`absolute` se așază față de cel mai apropiat părinte care are `position`** (de obicei `relative`). Fără `position: relative;` pe `.produs`, insigna s-ar așeza față de toată pagina și ar ajunge în colțul ei, nu al cutiei. Un element `absolute` nu mai ocupă loc în rând, deci celelalte se așază ca și cum el nu ar exista.

**Gata când:**  
- [ ] Insigna „NOU” apare în colțul din dreapta sus al cutiei  
- [ ] Părintele are `position: relative;`  
- [ ] Ai încercat să scoți `position: relative;` și ai văzut că insigna fuge în colțul paginii  

---

## 5. `fixed`, `sticky` și `z-index`

### Exemplul 7 — `fixed`: un buton care rămâne pe ecran

```html
<a class="sus" href="#sus">↑ Sus</a>
```

```css
.sus {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: navy;
  color: white;
  padding: 10px 16px;
  border-radius: 20px;
  text-decoration: none;
}
```

Elementul rămâne **la același loc pe ecran**, oricât derulezi. Pune pe `<header>` atributul `id="sus"`, iar legătura `href="#sus"` te duce înapoi la începutul paginii. Ca să vezi efectul, pagina trebuie să fie destul de lungă încât să deruleze (pune mai multe cutii sau mult text).

### Exemplul 8 — `sticky`: antetul rămâne sus

```css
.antet {
  position: sticky;
  top: 0;
  background-color: navy;
  color: white;
  padding: 12px 20px;
}
```

Antetul stă normal, la începutul paginii. Când derulezi și el ar ieși din ecran, se **lipește** sus, la `top: 0`. Atenție: `sticky` are nevoie de o valoare `top` (sau `bottom`), altfel nu face nimic.

### Exemplul 9 — `z-index`: ce este deasupra

Când două elemente se suprapun, cel scris **mai târziu** în pagină stă deasupra. Cu `z-index` alegi tu ordinea straturilor:

```css
.jos {
  position: relative;
  z-index: 1;
}

.sus-de-tot {
  position: relative;
  z-index: 10;
}
```

Numărul mai mare stă deasupra numărului mai mic. `z-index` funcționează doar pe elementele care au `position` (orice valoare în afară de `static`). Dacă antetul tău `sticky` se ascunde sub cutii când derulezi, îi lipsește un `z-index` mai mare, de exemplu `z-index: 100;`.

**Încearcă tu (6 min)**  
- [ ] Fă un buton „Sus” fix în colțul din dreapta jos  
- [ ] Fă antetul `sticky` și derulează pagina  
- [ ] Suprapune două cutii și schimbă ordinea lor cu `z-index`  

---

## 6. Proiectul

### Exemplul 10 — „Galeria mea de jocuri”

Fișierul `index.html`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Galeria mea de jocuri</title>
  <link rel="stylesheet" href="stil.css">
</head>
<body>
  <header class="antet" id="sus">
    <h1>Galeria mea de jocuri</h1>
  </header>

  <main>
    <div class="galerie">
      <div class="joc mare">
        <span class="insigna">NOU</span>
        <h2>Fotbal pe calculator</h2>
        <p>Jocul meu preferat, cu echipe și goluri.</p>
      </div>
      <div class="joc">
        <h2>Puzzle</h2>
        <p>Potrivește piesele.</p>
      </div>
      <div class="joc">
        <span class="insigna">TOP</span>
        <h2>Labirint</h2>
        <p>Găsește ieșirea.</p>
      </div>
      <div class="joc">
        <h2>Curse</h2>
        <p>Ajunge primul la linia de sosire.</p>
      </div>
      <div class="joc">
        <h2>Memorie</h2>
        <p>Găsește perechile.</p>
      </div>
      <div class="joc">
        <h2>Pește</h2>
        <p>Prinde cât mai mulți pești.</p>
      </div>
    </div>
  </main>

  <a class="sus" href="#sus">↑ Sus</a>
</body>
</html>
```

Fișierul `stil.css`:

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f9f9;
  color: #264653;
}

/* Antetul rămâne sus la derulare */
.antet {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: navy;
  color: white;
  padding: 10px 20px;
  text-align: center;
}

.antet h1 {
  margin: 0;
  font-size: 1.6rem;
}

main {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

/* Galeria: 3 coloane */
.galerie {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(140px, auto);
  gap: 15px;
}

.joc {
  position: relative;
  background-color: white;
  border: 2px solid navy;
  border-radius: 12px;
  padding: 15px;
}

.joc h2 {
  margin-top: 0;
  color: navy;
  font-size: 1.2rem;
}

/* Jocul principal ocupă două coloane */
.mare {
  grid-column: span 2;
  background-color: lightyellow;
}

/* Insigna în colț */
.insigna {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: crimson;
  color: white;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: bold;
}

/* Butonul fix */
.sus {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: navy;
  color: white;
  padding: 10px 16px;
  border-radius: 20px;
  text-decoration: none;
}
```

Fă galeria cu **un subiect ales de tine** (jocuri, animale, echipe, filme). Adaugă destule cutii ca pagina să deruleze și verifică antetul și butonul „Sus”.

**Gata când:**  
- [ ] Galeria are 3 coloane, iar o cutie este întinsă pe două  
- [ ] Cel puțin două cutii au insigne în colț  
- [ ] Antetul rămâne sus la derulare  
- [ ] Butonul „Sus” este fix și te duce la începutul paginii  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Galeria mea” (obligatoriu)
Fă o pagină cu `index.html` și `stil.css`, cu:
- `* { box-sizing: border-box; }` prima în `stil.css`;
- o galerie în **grilă cu 3 coloane**, cu **minimum 6 cutii** și `gap`;
- o cutie întinsă pe **două coloane**;
- **minimum 2 insigne** puse cu `position: absolute;` în părinți cu `position: relative;`;
- un antet `sticky`;
- un buton „Sus” cu `position: fixed;`;
- cel puțin două comentarii în CSS.

### Exercițiul B — Ce face regula?
Spune ce se întâmplă: (1) `grid-template-columns: 200px 1fr;`; (2) `grid-template-columns: repeat(4, 1fr);`; (3) `grid-column: 1 / -1;`; (4) `position: absolute; top: 0; right: 0;` pe un copil, când părintele **nu** are `position`.

### Exercițiul C — Scrie regula
Scrie în CSS: (1) o grilă cu două coloane, prima de două ori mai lată decât a doua, cu 20px între ele; (2) un element întins pe trei coloane; (3) un steag mic în colțul din stânga jos al unei cutii.

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
.grila {
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15;
}

.insigna {
  position: absolute;
  top: 10px;
  z-index: 5px;
}
```

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: care este diferența dintre Flexbox și Grid? Față de ce se așază un element cu `position: absolute;`? Ce face `position: sticky;` și ce proprietate îi mai trebuie?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W3_L6` are `index.html` și `stil.css`  
- [ ] Galeria are grilă, o cutie întinsă, insigne, antet `sticky` și buton `fixed`  
- [ ] Ai răspuns la exercițiile B–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Fă o machetă de pagină cu `grid-template-columns: 200px 1fr;`: meniu lateral în stânga și conținut în dreapta  
- [ ] Pune o cutie care se întinde pe două rânduri cu `grid-row: span 2;`  
- [ ] Fă un cerc cu număr în colțul unei cutii (insignă rotundă, ca la Lecția 4)  
- [ ] În DevTools, apasă pe semnul „grid” de lângă container și vezi liniile grilei desenate  

---

## Greșeli frecvente
1. **Ai uitat `display: grid;`** — `grid-template-columns` nu are efect fără el.  
2. **Ai scris `gap: 15;`** fără `px` — corect este `gap: 15px;`.  
3. **Ai pus `grid-template-columns` pe copii**, nu pe părinte.  
4. **Insigna a fugit în colțul paginii** — părintele nu are `position: relative;`.  
5. **`top` și `left` nu fac nimic** — elementul are `position: static;`.  
6. **Antetul `sticky` nu se lipește** — îi lipsește `top: 0;`.  
7. **Antetul se ascunde sub cutii** — îi trebuie un `z-index` mai mare.  
8. **Ai scris `z-index: 5px`** — este un număr simplu, fără unitate.  
9. **`z-index` nu schimbă nimic** — elementul nu are `position`.  
10. **Butonul `fixed` acoperă textul** — lasă spațiu jos în pagină sau fă butonul mai mic.  

---

## Recapitulare pe scurt
1. `display: grid;` plus `grid-template-columns` face o grilă; `fr` este o parte din spațiul liber.  
2. `repeat(3, 1fr)` înseamnă trei coloane egale; `gap` pune spațiu între ele.  
3. `grid-column: span 2;` întinde un element; `1 / -1` îl întinde pe toată lățimea.  
4. `position: relative;` pe părinte plus `absolute` pe copil = insignă în colț.  
5. `fixed` rămâne pe ecran; `sticky` se lipește sus la derulare.  
6. `z-index` ordonează straturile, dar numai pe elemente cu `position`.

## Quiz scurt
- Ce înseamnă `1fr 1fr 1fr`?  
- Cum întinzi un element pe două coloane?  
- Față de ce se așază un element `absolute`?  
- Care este diferența dintre `fixed` și `sticky`?  
- De ce nu merge `z-index` pe un element fără `position`?

## Temă
Fă o pagină „Colecția mea” cu o grilă de 8 cutii (cărți, jucării sau cărți de joc), cu o cutie mai mare, insigne „NOU” pe două dintre ele și un buton „Sus”. Salvează în `Prenume_Nume_W3_L6`.

## Ce urmează — Lecția 7
Învățăm **`:hover` și tranziții**: butoane care își schimbă culoarea când pui mouse-ul pe ele și cărți care se măresc lin.

---

## Răspunsuri pentru profesor
- **Quiz scurt:** (1) trei coloane egale, fiecare o parte din spațiul liber (se poate scrie și `repeat(3, 1fr)`); (2) cu `grid-column: span 2;`; (3) față de cel mai apropiat părinte care are `position` (de obicei `relative`); (4) `fixed` rămâne la același loc pe ecran, iar `sticky` stă normal în pagină și se lipește sus abia când derulezi până la el; (5) pentru că `z-index` funcționează doar pe elementele care au `position` (altă valoare decât `static`).  
- **Dacă ritmul clasei este lent:** rămâneți la Grid de bază, `relative`, `absolute` și `fixed`; Exemplul 8 (`sticky`), Exemplul 9 (`z-index`) și `minmax(...)` sunt opționale.  
- **Exercițiul B:** (1) două coloane: prima fixă de 200px, a doua ia restul; (2) patru coloane egale; (3) elementul se întinde de la prima până la ultima linie a grilei, adică pe toată lățimea; (4) elementul se așază față de pagină (față de cel mai apropiat strămoș cu `position`, iar aici nu există), deci ajunge în colțul din dreapta sus al paginii.  
- **Exercițiul C:** (1) `.grila { display: grid; grid-template-columns: 2fr 1fr; gap: 20px; }`; (2) `grid-column: span 3;`; (3) părintele `position: relative;`, iar steagul `position: absolute; bottom: 10px; left: 10px;`.  
- **Exercițiul D:** (1) lipsește `display: grid;` din `.grila`; (2) `gap: 15;` trebuie `gap: 15px;`; (3) `z-index: 5px` trebuie `z-index: 5` (număr fără unitate).  
- **Exercițiul E:** Flexbox lucrează pe o direcție, Grid pe rânduri și coloane; `absolute` se așază față de cel mai apropiat părinte cu `position`; `sticky` se lipește sus la derulare și are nevoie de `top` (sau `bottom`).  
- **Notă pentru profesor:** copiii confundă des `fixed` cu `sticky`. Demonstrați pe proiector: `fixed` nu există în pagină, plutește peste ea; `sticky` stă la locul lui până când ar ieși din ecran. Pentru galerie nu sunt necesare imagini: cutii colorate cu text sunt suficiente și evită datele personale.
