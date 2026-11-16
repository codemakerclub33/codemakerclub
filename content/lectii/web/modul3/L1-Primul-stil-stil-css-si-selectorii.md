# LECȚIA 1 — Primul fișier de stil
### Primul stil: stil.css și selectorii
**Modulul 3 · CSS: Stil și culoare · 2 ore**  
**Code Maker Club · CSS Stylist**

> Până acum ai pus stilul în atributul `style` sau într-un bloc `<style>`. Azi mutăm tot într-un **fișier separat**, `stil.css`, pe care îl poate folosi orice pagină. Așa schimbi aspectul unui întreg site dintr-un singur loc.  
> Proiect: **„Primul fișier de stil”** · folder: `Prenume_Nume_W3_L1` (ex. `Ana_Pop_W3_L1`)

---

## Ce facem azi
La final ai o pagină legată la un fișier `stil.css`, cu reguli pentru tag, pentru clasă și pentru id, cu selectori grupați, cu selectori „în interiorul” altor elemente și cu comentarii. Știi și ce se întâmplă când două reguli se bat: cine câștigă. Un site poate avea 20 de pagini. Dacă stilul stă în fiecare pagină, schimbi 20 de fișiere. Dacă stă într-un singur `stil.css`, schimbi un rând și **toate paginile se schimbă deodată**. Așa lucrează toți oamenii care fac site-uri.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · aducem pagina cu articolul de pe Wikipedia |
| 15–30 | Un fișier separat pentru stil · legarea cu `<link>` (**Exemplul 1**) |
| 30–45 | Cum arată o regulă · selectorul de tag (**Exemplul 2**) |
| 45–65 | Selectori după clasă și după id (**Exemplele 3–4**) |
| 65–80 | Mai mulți selectori · elemente din interiorul altora (**Exemplele 5–6**) |
| 80–100 | Cine câștigă · comentarii (**Exemplul 7**) |
| 100–115 | Mini-proiect: primul fișier de stil (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `<link rel="stylesheet" href="stil.css">` | Leagă pagina de fișierul de stil | în `<head>` |
| `selector { proprietate: valoare; }` | O regulă CSS | `p { color: navy; }` |
| `.clasa` și `#id` | Selector de clasă (punct) și de id (diez) | `.carte`, `#titlu-pagina` |
| `h1, h2` și `.carte p` | Mai mulți selectori; element din interiorul altuia | virgulă; spațiu |
| `/* ... */` | Comentariu în CSS | `/* Culorile paginii */` |

---

## 1. Recapitulare rapidă

Din Modulele 1 și 2 ții minte că:
- atributul `style` schimbă un singur tag;
- un bloc `<style>` din `<head>` poate stila mai multe elemente deodată;
- `class` este un nume pentru un grup, iar în stil se scrie cu **punct**: `.carte`;
- `id` este un nume unic, iar în stil se scrie cu **diez**: `#titlu`.

**Încearcă tu (8 min)**  
- [ ] Creează folderul `Prenume_Nume_W3_L1` și fișierul `index.html` cu scheletul complet scris de tine  
- [ ] Pune în `<body>` un `<h1>`, două paragrafe și o listă cu trei elemente  
- [ ] Copiază în folder pagina `tema.html` din Modulul 2 (articolul tău de pe Wikipedia), împreună cu folderele `imagini` și `media`  
- [ ] Deschide `tema.html` cu Live Server și uită-te la regulile din `<style>`: azi le muți într-un fișier separat  

> De aici înainte, exemplele arată ce scrii în `index.html` (în interiorul `<body>`) și, separat, ce scrii în `stil.css`. Când trebuie scheletul întreg, îl arătăm.

---

## 2. Un fișier separat pentru stil

### Exemplul 1 — Problema și soluția: `stil.css` și `<link>`

Așa arată o pagină cu stilul pus direct în tag:

```html
<h1 style="color: tomato;">Titlu</h1>
<h1 style="color: tomato;">Alt titlu</h1>
<h1 style="color: tomato;">Încă un titlu</h1>
```

Dacă vrei titlurile albastre, schimbi de trei ori. Cu un fișier de stil scrii **o singură regulă**, care se aplică tuturor titlurilor:

```css
h1 {
  color: tomato;
}
```

Pasul 1: în același folder cu `index.html`, creează un fișier nou numit `stil.css`.

Pasul 2: în `<head>` din `index.html`, adaugă rândul care leagă pagina de fișierul de stil:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Primul fișier de stil</title>
  <link rel="stylesheet" href="stil.css">
</head>
<body>
  <h1>Salut!</h1>
  <p>Aceasta este prima mea pagină cu fișier de stil.</p>
</body>
</html>
```

Pasul 3: în `stil.css` scrie regula de mai sus. Salvează **ambele** fișiere (Ctrl+S) și privește pagina în Live Server. Titlul a devenit roșu-portocaliu, iar în `index.html` nu ai scris nicio culoare!

| Parte din `<link>` | Ce înseamnă |
|--------------------|-------------|
| `rel="stylesheet"` | „acest fișier este o foaie de stil” |
| `href="stil.css"` | numele și locul fișierului (ca la linkuri și imagini) |

> În `stil.css` **nu** scrii `<style>` și nu scrii taguri HTML. Fișierul conține doar reguli CSS.

> Dacă stilul nu apare: verifică numele (`stil.css`, nu `stil.css.txt`), că fișierul este în **același folder** cu `index.html`, că ai salvat ambele fișiere și că ai scris `rel="stylesheet"` fără greșeli.

**Încearcă tu (6 min)**  
- [ ] Creează `stil.css` lângă `index.html` și leagă-l cu `<link>` în `<head>`  
- [ ] Creează în `tema.html` același `<link>` și un fișier `stil.css` în folderul ei  
- [ ] Mută în `stil.css` regulile din `<style>` de la `tema.html` și șterge blocul `<style>`  

**Gata când:**  
- [ ] Ai un fișier `stil.css` lângă `index.html`  
- [ ] Pagina este legată la `stil.css` cu `<link>` în `<head>`  
- [ ] `tema.html` arată la fel ca înainte, dar stilul vine din `stil.css`  

---

## 3. Cum arată o regulă

### Exemplul 2 — Anatomia unei reguli și selectorul de tag

```css
p {
  color: navy;
  font-size: 18px;
}
```

| Parte | Ce înseamnă | Aici |
|-------|-------------|------|
| `p` | **selectorul**: cine primește stilul | toate paragrafele |
| `{ … }` | acoladele: aici stau regulile | |
| `color` | **proprietatea**: ce schimbăm | culoarea textului |
| `navy` | **valoarea**: cum schimbăm | albastru închis |
| `;` | încheie fiecare rând | |

Poți pune câte rânduri vrei între acolade. Scrie fiecare rând pe linia lui și lasă 2 spații la început de rând, ca să se citească ușor.

Un selector scris doar cu numele tagului stilează **toate** tagurile de acel fel:

```css
body {
  background-color: lightyellow;
  color: #333333;
}

h2 {
  color: green;
}

li {
  font-size: 20px;
}
```

- `body` colorează fundalul întregii pagini și dă culoarea de bază a textului (se moștenește în interior, ca în Modulul 1);  
- `h2` stilează **toate** titlurile `<h2>`;  
- `li` stilează **toate** elementele de listă.

**Încearcă tu (6 min)**  
- [ ] Pune în `stil.css` reguli pentru `body`, `h1`, `h2` și `p`  
- [ ] Schimbă o culoare și salvează: vezi cum se schimbă toate elementele de același fel  
- [ ] În `tema.html`, pune un fundal deschis pe `body` și o culoare pentru `h1` și `h2`, care se potrivește cu tema ta  

---

## 4. Clase și id

### Exemplul 3 — Selectorul de clasă (punct)

În `index.html`:

```html
<p>Un paragraf obișnuit.</p>
<p class="important">Un paragraf important.</p>
<p class="important">Încă unul important.</p>
```

În `stil.css`:

```css
.important {
  color: crimson;
  font-weight: bold;
}
```

În HTML scrii `class="important"` **fără punct**. În CSS scrii `.important` **cu punct**. Doar paragrafele cu clasa `important` devin roșii și groase. Primul paragraf rămâne obișnuit.

### Exemplul 4 — Selectorul de id (diez)

În `index.html`:

```html
<h1 id="titlu-pagina">Jocurile mele preferate</h1>
```

În `stil.css`:

```css
#titlu-pagina {
  text-align: center;
  color: navy;
}
```

Un `id` apare **o singură dată** într-o pagină. Regula cu `#` se aplică doar elementului cu acel id.

| Selector | Se scrie în CSS | Se aplică |
|----------|-----------------|-----------|
| tag | `p` | tuturor tagurilor de acel fel |
| clasă | `.important` | tuturor elementelor cu acea clasă |
| id | `#titlu-pagina` | unui singur element |

**Încearcă tu (6 min)**  
- [ ] Scrie o regulă pentru o clasă și una pentru un id în `stil.css`  
- [ ] Pune în `index.html` clasa și id-ul fără punct și fără diez  
- [ ] În `tema.html`, pune `id="titlu-pagina"` pe `<h1>` și centrează-l din `stil.css`  

**Gata când:**  
- [ ] Ai folosit un selector de tag, unul de clasă și unul de id în `stil.css`  
- [ ] Poți explica diferența dintre punct și diez  

---

## 5. Mai mulți selectori și elemente din interior

### Exemplul 5 — Aceeași regulă pentru mai mulți: virgula

Dacă vrei același stil la mai multe taguri, le scrii **separate prin virgulă**:

```css
h1, h2, h3 {
  color: navy;
  font-family: Arial, sans-serif;
}
```

Regula se aplică și titlurilor `<h1>`, și `<h2>`, și `<h3>`. Mai scurt decât trei reguli la fel!

### Exemplul 6 — Doar în interiorul altui element

Uneori vrei să stilezi un `<p>` doar dacă se află în interiorul unei cutii. Scrii **selectorul cutiei, un spațiu și selectorul din interior**:

În `index.html`:

```html
<p>Paragraf în afara cutiei.</p>

<div class="carte">
  <h2>Pisica</h2>
  <p>Paragraf în interiorul cutiei.</p>
</div>
```

În `stil.css`:

```css
.carte {
  border: 2px solid tomato;
  padding: 10px;
}

.carte p {
  color: gray;
  font-style: italic;
}
```

`.carte p` se citește „orice `p` din interiorul unui element cu clasa `carte`”. Doar al doilea paragraf devine gri și înclinat. Primul rămâne neschimbat.

> Atenție la spațiu: `.carte p` (cu spațiu) înseamnă „un `p` în interiorul clasei”. `.carte.rara` (fără spațiu) înseamnă „un element care are **ambele** clase”.

**Încearcă tu (8 min)**  
- [ ] Grupează `h1, h2` într-o singură regulă cu virgulă  
- [ ] Fă o cutie cu clasa `carte` care conține un titlu și un paragraf  
- [ ] Stilează doar paragraful din interiorul cutiei, cu `.carte p`  
- [ ] În `tema.html`, grupează titlurile `h2, h3` într-o regulă și stilează `.carte p` pentru paragrafele din capitole  

---

## 6. Cine câștigă? Comentarii

### Exemplul 7 — Două reguli pentru același element, plus comentarii

Ce culoare va avea acest paragraf?

În `index.html`:

```html
<p class="special" id="unic">Salut!</p>
```

În `stil.css`:

```css
p {
  color: blue;
}

.special {
  color: green;
}

#unic {
  color: red;
}
```

Textul va fi **roșu**. Când mai multe reguli vor să stilizeze același lucru, câștigă regula cu cea mai mare „putere”:

| Putere | Ce are | Exemplu |
|--------|--------|---------|
| cea mai mică | tag | `p` |
| mijlocie | clasă | `.special` |
| mare | id | `#unic` |
| cea mai mare | atributul `style` din HTML | `style="color: black;"` |

Dacă două reguli au **aceeași putere**, câștigă cea scrisă **mai jos** în fișier. Dacă scrii `p { color: blue; }` și, mai jos, `p { color: orange; }`, paragrafele sunt portocalii.

> Dacă o regulă pare că nu funcționează, poate o bate o alta mai puternică sau una scrisă mai jos. Verifică cu DevTools (**F12**; pe Mac Cmd + Option + I): regulile bătute apar tăiate cu o linie.

În CSS, un comentariu se scrie între `/*` și `*/`. Browserul îl ignoră, iar tu îl folosești ca să notezi lucruri:

```css
/* Culorile paginii */
body {
  background-color: lightyellow;
}
```

**Încearcă tu (8 min)**  
- [ ] Scrie cele trei reguli din exemplu și verifică culoarea paragrafului  
- [ ] Mută regula `p` sub regula `.special` și vezi dacă se schimbă ceva  
- [ ] Pune în `stil.css` comentarii care împart fișierul în secțiuni (pagina, titluri, cutii, texte speciale)  
- [ ] În `tema.html`, pune un `style="color: black;"` pe un paragraf și vezi că bate regulile din `stil.css`  

**Gata când:**  
- [ ] Poți spune ce culoare are paragraful din exemplu și de ce  
- [ ] Ai cel puțin două comentarii în `stil.css`  

---

## 7. Mini-proiect

### Exemplul 8 — „Primul fișier de stil”

Fișierul `index.html`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fotbalul meu</title>
  <link rel="stylesheet" href="stil.css">
</head>
<body>
  <h1 id="titlu-pagina">Fotbalul meu</h1>
  <p class="intro">Fotbalul este sportul meu preferat. Iată câteva lucruri despre el.</p>

  <h2>Poziții pe teren</h2>
  <div class="carte">
    <h3>Portarul</h3>
    <p>Apără poarta și poate prinde mingea cu mâinile.</p>
  </div>
  <div class="carte">
    <h3>Atacantul</h3>
    <p>Încearcă să dea goluri.</p>
  </div>

  <p class="important">Fotbalul se joacă în echipă!</p>
</body>
</html>
```

Fișierul `stil.css`:

```css
/* Pagina în general */
body {
  background-color: honeydew;
  color: #333333;
  font-family: Arial, sans-serif;
}

/* Titluri */
h2, h3 {
  color: darkgreen;
}

#titlu-pagina {
  text-align: center;
  color: navy;
}

/* Cutiile cu poziții */
.carte {
  border: 2px solid darkgreen;
  background-color: white;
  padding: 10px;
  margin: 10px 0;
}

.carte p {
  color: gray;
}

/* Texte speciale */
.intro {
  font-size: 18px;
}

.important {
  color: crimson;
  font-weight: bold;
}
```

Fă pagina despre **un sport sau un joc** care îți place. Folosește selectori de tag, de clasă și de id, cel puțin o regulă cu virgulă, una cu „în interior” și comentarii.

**Gata când:**  
- [ ] Pagina are `index.html` și `stil.css`, legate cu `<link>`  
- [ ] `stil.css` conține reguli de tag, de clasă și de id  
- [ ] Ai o regulă cu virgulă și una cu un selector din interiorul unei clase  
- [ ] Ai scris cel puțin două comentarii în CSS  

---

## De făcut azi — „Primul fișier de stil”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | O pagină legată la `stil.css`, cu trei reguli: una pentru un tag, una pentru o clasă și una pentru un id |
| **Complet** | Minim + o regulă cu mai mulți selectori separați prin virgulă, o regulă pentru elementele din interiorul unei clase și comentarii în CSS |

### Pasul 1 — Minim
Pe scheletul complet, leagă pagina la `stil.css` și scrie în el o regulă pentru un tag, una pentru o clasă și una pentru un id.

- [ ] Folderul `Prenume_Nume_W3_L1` are `index.html` și `stil.css`  
- [ ] Pagina are un `<link>` către `stil.css` în `<head>`  
- [ ] Ai o regulă de tag, una de clasă și una de id  

### Pasul 2 — Complet
Îmbunătățești pagina:

- [ ] Ai un `<h1>` cu `id`, stilat cu selector de id  
- [ ] Ai cel puțin **trei cutii** `<div class="carte">`, stilate printr-o singură regulă de clasă  
- [ ] Ai o regulă `.carte p` pentru paragrafele din cutii  
- [ ] Ai o regulă cu mai mulți selectori separați prin virgulă  
- [ ] Ai cel puțin **două comentarii** în `stil.css`, iar codul este indentat  

---

## Bonus ★★★ — Provocare: Un stil pentru tot site-ul
*Doar dacă ai terminat Complet.*

Faci un singur fișier de stil pentru mai multe pagini.

- [ ] Fă încă o pagină, `despre.html`, care folosește **același** `stil.css`, și vezi cum arată la fel  
- [ ] Schimbă o culoare în `stil.css` și verifică în ambele pagini că s-a schimbat  
- [ ] Adaugă o clasă `.rara` cu alt fundal și pune clasa împreună cu `carte` la o cutie (`class="carte rara"`)  
- [ ] Deschide DevTools (**F12**; pe Mac Cmd + Option + I), fila **Elements**, apasă pe un paragraf și privește panoul **Styles**: vezi în ce fișier este scrisă fiecare regulă  

---

## Greșeli frecvente
1. **Ai scris `<style>` în `stil.css`** — în fișierul CSS stau doar regulile.  
2. **Ai uitat `<link>` în `<head>`** — pagina nu află de `stil.css`.  
3. **Fișierul nu este în același folder** sau are alt nume (`stil.css.txt`).  
4. **Ai uitat să salvezi** `stil.css` după modificare.  
5. **Ai scris `carte { … }` în loc de `.carte { … }`** — fără punct, regula caută un tag numit `carte`.  
6. **Ai scris `#` pentru o clasă** sau `.` pentru un id.  
7. **Ai uitat o acoladă** `{` sau `}` — de acolo încolo regulile nu mai merg.  
8. **Ai uitat `;` la sfârșitul unui rând** — rândul acela și cel de după nu mai funcționează.  

---

## Recapitulare pe scurt
1. Stilul stă într-un fișier `stil.css`, legat în `<head>` cu `<link rel="stylesheet" href="stil.css">`.  
2. O regulă are un selector, acolade și rânduri `proprietate: valoare;`.  
3. Selectorii pot fi: tag (`p`), clasă (`.carte`), id (`#titlu`).  
4. Mai mulți selectori se separă cu virgulă; `.carte p` înseamnă „p din interiorul clasei carte”.  
5. Câștigă puterea mai mare: tag, apoi clasă, apoi id, apoi `style`; la putere egală, regula mai de jos.  
6. Comentariile se scriu între `/*` și `*/`.

## Quiz scurt
- Cum legi o pagină la `stil.css`?  
- Ce selector folosești pentru o clasă? Dar pentru un id?  
- Ce face `h1, h2 { … }`?  
- Ce culoare are un paragraf care are și o regulă de tag, și una de clasă, și una de id?  
- Cum scrii un comentariu în CSS?

## Temă
1. Fă un site mic cu **două pagini** (`index.html` și `despre.html`) despre **animalul tău preferat**, care folosesc **același** fișier `stil.css`. Folosește cel puțin o clasă, un id și o regulă cu virgulă. Salvează totul în `Prenume_Nume_W3_L1`.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Două clase pe același element.**

```html
<div class="carte rara">Carte rară</div>
```

```css
.carte {
  background-color: white;
}

.carte.rara {
  background-color: gold;
}
```

`class="carte rara"` dă elementului **două clase**, separate prin spațiu. Selectorul `.carte.rara` (fără spațiu) alege doar elementele care le au pe amândouă.

**Acasă 2 — Două fișiere de stil.**

```html
<link rel="stylesheet" href="stil.css">
<link rel="stylesheet" href="extra.css">
```

O pagină poate lega mai multe fișiere de stil. Dacă două reguli au aceeași putere, câștigă cea din fișierul legat **mai jos**.

4. **Încă patru exerciții (B–E):**

**B — Cine câștigă?** Ce culoare au textele? Spune pentru fiecare paragraf:

```text
p { color: blue; }
.special { color: green; }
#unic { color: red; }

<p>Primul</p>
<p class="special">Al doilea</p>
<p class="special" id="unic">Al treilea</p>
```

**C — Scrie regula.** Scrie în CSS: (1) toate titlurile `<h2>` sunt mov; (2) elementele cu clasa `nota` au text gri de mărime 14px; (3) elementul cu id-ul `titlu` este centrat.

**D — Găsește greșelile.** Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
p
  color: red;
}

carte {
  background-color: yellow;
}

h1 {
  color: blue
  text-align: center;
}
```

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: de ce este mai bine să ai stilul într-un fișier `stil.css` decât în fiecare pagină? Care este diferența dintre `.carte` și `#carte`?

## Ce urmează — Lecția 2
Învățăm să lucrăm cu **culori și fundaluri**: culori scrise în mai multe feluri, culori transparente, imagini de fundal și culori care se amestecă frumos (degrade).

---

## Răspunsuri
- **Quiz scurt:** (1) cu `<link rel="stylesheet" href="stil.css">` în `<head>`; (2) pentru clasă punct (`.important`), pentru id diez (`#titlu`); (3) aplică aceeași regulă și titlurilor `<h1>`, și titlurilor `<h2>`; (4) roșu, pentru că id bate clasa, iar clasa bate tagul; (5) între `/*` și `*/`, de exemplu `/* Culorile paginii */`.  
- **Tema, exercițiul B:** primul paragraf albastru; al doilea verde; al treilea roșu (id bate clasa, iar clasa bate tagul).  
- **Tema, exercițiul C:** (1) `h2 { color: purple; }`; (2) `.nota { color: gray; font-size: 14px; }`; (3) `#titlu { text-align: center; }`.  
- **Tema, exercițiul D:** (1) lipsește `{` după `p`; (2) `carte` fără punct trebuie `.carte`; (3) lipsește `;` după `blue`.  
- **Tema, exercițiul E:** un fișier se schimbă o dată și se aplică tuturor paginilor; `.carte` se aplică mai multor elemente (clasă), `#carte` unui singur element (id).  
- **Notă:** `border`, `padding`, `margin` și `font-weight` apar deja din Modulul 2; sunt explicate pe larg în lecțiile 3 și 4. În exemple, `font-family: Arial, sans-serif;` este explicat în Lecția 3.
