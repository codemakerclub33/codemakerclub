# LECȚIA 1 — Primul stil: stil.css și selectorii
**Modulul 3 · CSS: Stil și culoare · 2 ore**  
**Code Maker Club · CSS Stylist**

> Până acum ai pus stilul în atributul `style` sau într-un bloc `<style>`. Azi mutăm tot într-un **fișier separat**, `stil.css`, pe care îl poate folosi orice pagină. Așa schimbi aspectul unui întreg site dintr-un singur loc.  
> Proiect: **„Pagina mea cu fișier de stil”** · folder: `Prenume_Nume_W3_L1` (ex. `Ana_Pop_W3_L1`)

---

## Obiectiv
La finalul orei știi să legi o pagină la un fișier `stil.css`, să scrii o regulă CSS (selector, proprietate, valoare), să folosești selectori după tag, după clasă și după id, să grupezi selectori, să stilezi un element doar **în interiorul** altuia, să scrii comentarii și să știi care regulă câștigă atunci când două reguli se bat.  
**Minim:** o pagină legată la `stil.css`, cu trei reguli: una pentru un tag, una pentru o clasă și una pentru un id.  
**Ținta orei (Complet):** + o regulă cu mai mulți selectori separați prin virgulă, o regulă pentru elementele din interiorul unei clase, comentarii în CSS și o explicație pentru cine câștigă între tag, clasă și id.

## De ce contează
Un site poate avea 20 de pagini. Dacă vrei să schimbi culoarea titlurilor și stilul stă în fiecare pagină, trebuie să deschizi 20 de fișiere. Dacă stilul stă într-un singur `stil.css`, schimbi un rând și **toate paginile se schimbă deodată**. Așa lucrează toți oamenii care fac site-uri.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–35 | De ce un fișier separat · legarea cu `<link>` (**Exemplele 1–2**) |
| 35–55 | Cum arată o regulă · selectorul de tag (**Exemplele 3–4**) |
| 55–75 | Selectori după clasă și după id (**Exemplele 5–6**) |
| 75–95 | Mai mulți selectori · elemente din interiorul altora (**Exemplele 7–8**) |
| 95–115 | Cine câștigă · comentarii · proiect (**Exemplele 9–10**) |
| 115–120 | Recap și temă |

---

## 1. Recapitulare rapidă

Din Modulele 1 și 2 ții minte că:
- atributul `style` schimbă un singur tag;
- un bloc `<style>` din `<head>` poate stila mai multe elemente deodată;
- `class` este un nume pentru un grup, iar în stil se scrie cu **punct**: `.carte`;
- `id` este un nume unic, iar în stil se scrie cu **diez**: `#titlu`.

**Încearcă tu (4 min)**  
- [ ] Creează folderul `Prenume_Nume_W3_L1` și fișierul `index.html` cu scheletul complet scris de tine  
- [ ] Pune în `<body>` un `<h1>`, două paragrafe și o listă cu trei elemente  

> De aici înainte, exemplele arată ce scrii în `index.html` (în interiorul `<body>`) și, separat, ce scrii în `stil.css`. Când trebuie scheletul întreg, îl arătăm.

---

## 2. Un fișier separat pentru stil

### Exemplul 1 — Problema și soluția

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

### Exemplul 2 — Legăm pagina la `stil.css`

Pasul 1: în același folder cu `index.html`, creează un fișier nou numit `stil.css`.

Pasul 2: în `<head>` din `index.html`, adaugă rândul care leagă pagina de fișierul de stil:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pagina mea cu stil</title>
  <link rel="stylesheet" href="stil.css">
</head>
<body>
  <h1>Salut!</h1>
  <p>Aceasta este prima mea pagină cu fișier de stil.</p>
</body>
</html>
```

Pasul 3: în `stil.css` scrie:

```css
h1 {
  color: tomato;
}
```

Salvează **ambele** fișiere (Ctrl+S) și privește pagina în Live Server. Titlul a devenit roșu-portocaliu, iar în `index.html` nu ai scris nicio culoare!

| Parte din `<link>` | Ce înseamnă |
|--------------------|-------------|
| `rel="stylesheet"` | „acest fișier este o foaie de stil” |
| `href="stil.css"` | numele și locul fișierului (ca la linkuri și imagini) |

> În `stil.css` **nu** scrii `<style>` și nu scrii taguri HTML. Fișierul conține doar reguli CSS.

> Dacă stilul nu apare: verifică numele (`stil.css`, nu `stil.css.txt`), că fișierul este în **același folder** cu `index.html`, că ai salvat ambele fișiere și că ai scris `rel="stylesheet"` fără greșeli.

**Gata când:**  
- [ ] Ai un fișier `stil.css` lângă `index.html`  
- [ ] Pagina este legată la `stil.css` cu `<link>` în `<head>`  
- [ ] Titlul își schimbă culoarea când modifici regula din `stil.css`  

---

## 3. Cum arată o regulă

### Exemplul 3 — Anatomia unei reguli CSS

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

### Exemplul 4 — Selectorul de tag și `body`

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

**Încearcă tu (5 min)**  
- [ ] Pune în `stil.css` reguli pentru `body`, `h1`, `h2` și `p`  
- [ ] Schimbă o culoare și salvează: vezi cum se schimbă toate elementele de același fel  
- [ ] Încearcă să scrii greșit o proprietate (`colr`) și observă că nu se întâmplă nimic  

---

## 4. Clase și id

### Exemplul 5 — Selectorul de clasă (punct)

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

### Exemplul 6 — Selectorul de id (diez)

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

**Gata când:**  
- [ ] Ai folosit un selector de tag, unul de clasă și unul de id în `stil.css`  
- [ ] Ai pus în `index.html` clasa și id-ul fără punct și fără diez  
- [ ] Poți explica diferența dintre punct și diez  

---

## 5. Mai mulți selectori și elemente din interior

### Exemplul 7 — Aceeași regulă pentru mai mulți: virgula

Dacă vrei același stil la mai multe taguri, le scrii **separate prin virgulă**:

```css
h1, h2, h3 {
  color: navy;
  font-family: Arial, sans-serif;
}
```

Regula se aplică și titlurilor `<h1>`, și `<h2>`, și `<h3>`. Mai scurt decât trei reguli la fel!

### Exemplul 8 — Doar în interiorul altui element

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

**Încearcă tu (6 min)**  
- [ ] Grupează `h1, h2` într-o singură regulă cu virgulă  
- [ ] Fă o cutie cu clasa `carte` care conține un titlu și un paragraf  
- [ ] Stilează doar paragraful din interiorul cutiei, cu `.carte p`  

---

## 6. Cine câștigă? Comentarii și proiect

### Exemplul 9 — Două reguli pentru același element

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

Dacă două reguli au **aceeași putere**, câștigă cea scrisă **mai jos** în fișier.

```css
p {
  color: blue;
}

p {
  color: orange;
}
```

Aici paragrafele sunt portocalii, pentru că ultima regulă câștigă.

> Dacă o regulă pare că nu funcționează, poate o bate o alta mai puternică sau una scrisă mai jos. Verifică cu DevTools (**F12**): regulile bătute apar tăiate cu o linie.

### Exemplul 10 — Comentarii și „Pagina mea cu fișier de stil”

În CSS, un comentariu se scrie între `/*` și `*/`. Browserul îl ignoră, iar tu îl folosești ca să notezi lucruri:

```css
/* Culorile paginii */
body {
  background-color: lightyellow;
}
```

Proiectul întreg. Fișierul `index.html`:

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

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Pagina mea cu fișier de stil” (obligatoriu)
Fă o pagină despre **un sport sau un joc** ales de tine, cu:
- fișierele `index.html` și `stil.css` în același folder, legate cu `<link>`;
- un `<h1>` cu `id`, stilat cu selector de id;
- cel puțin **trei cutii** `<div class="carte">`, stilate printr-o singură regulă de clasă;
- o regulă `.carte p` pentru paragrafele din cutii;
- o regulă cu mai mulți selectori separați prin virgulă;
- cel puțin **două comentarii** în `stil.css`.

Verifică pagina cu Live Server.

### Exercițiul B — Cine câștigă?
Ce culoare au textele? Spune pentru fiecare paragraf:

```text
p { color: blue; }
.special { color: green; }
#unic { color: red; }

<p>Primul</p>
<p class="special">Al doilea</p>
<p class="special" id="unic">Al treilea</p>
```

### Exercițiul C — Scrie regula
Scrie în CSS: (1) toate titlurile `<h2>` sunt mov; (2) elementele cu clasa `nota` au text gri de mărime 14px; (3) elementul cu id-ul `titlu` este centrat.

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile:

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

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: de ce este mai bine să ai stilul într-un fișier `stil.css` decât în fiecare pagină? Care este diferența dintre `.carte` și `#carte`?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W3_L1` are `index.html` și `stil.css`  
- [ ] Ai selectori de tag, de clasă și de id, plus o regulă cu virgulă și una cu selector din interior  
- [ ] Codul CSS este indentat și are comentarii  
- [ ] Ai răspuns la exercițiile B–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Fă încă o pagină `despre.html` care folosește **același** `stil.css` și vezi cum arată la fel  
- [ ] Schimbă o culoare în `stil.css` și verifică în ambele pagini că s-a schimbat  
- [ ] Adaugă o clasă `.rara` cu alt fundal și pune clasa împreună cu `carte` la o cutie (`class="carte rara"`)  
- [ ] Deschide DevTools (**F12**), fila **Elements**, apasă pe un paragraf și privește panoul **Styles**: vezi în ce fișier este scrisă fiecare regulă  

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
9. **Ai scris `font-size = 20px`** — între proprietate și valoare se pun **două puncte**.  
10. **Ai crezut că regula nu merge**, dar o bate alta mai puternică sau scrisă mai jos.  

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
Fă un site mic cu **două pagini** (`index.html` și `despre.html`) despre **animalul tău preferat**, care folosesc **același** fișier `stil.css`. Folosește cel puțin o clasă, un id și o regulă cu virgulă. Salvează totul în `Prenume_Nume_W3_L1`.

## Ce urmează — Lecția 2
Învățăm să lucrăm cu **culori și fundaluri**: culori scrise în mai multe feluri, culori transparente, imagini de fundal și culori care se amestecă frumos (degrade).

---

## Răspunsuri
- **Quiz scurt:** (1) cu `<link rel="stylesheet" href="stil.css">` în `<head>`; (2) pentru clasă punct (`.important`), pentru id diez (`#titlu`); (3) aplică aceeași regulă și titlurilor `<h1>`, și titlurilor `<h2>`; (4) roșu, pentru că id bate clasa, iar clasa bate tagul; (5) între `/*` și `*/`, de exemplu `/* Culorile paginii */`.  
- **Exercițiul B:** primul paragraf albastru; al doilea verde; al treilea roșu (id bate clasa, iar clasa bate tagul).  
- **Exercițiul C:** (1) `h2 { color: purple; }`; (2) `.nota { color: gray; font-size: 14px; }`; (3) `#titlu { text-align: center; }`.  
- **Exercițiul D:** (1) lipsește `{` după `p`; (2) `carte` fără punct trebuie `.carte`; (3) lipsește `;` după `blue`.  
- **Exercițiul E:** un fișier se schimbă o dată și se aplică tuturor paginilor; `.carte` se aplică mai multor elemente (clasă), `#carte` unui singur element (id).  
- **Notă:** `border`, `padding`, `margin` și `font-weight` apar deja din Modulul 2; sunt explicate pe larg în lecțiile 3 și 4. În exemple, `font-family: Arial, sans-serif;` este explicat în Lecția 3.
