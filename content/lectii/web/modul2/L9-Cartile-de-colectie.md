# LECȚIA 9 — Cărțile de colecție
### `div`, `span`, `id` și `class`
**Modulul 2 · HTML II: Pagini mai bogate · 2 ore**  
**Code Maker Club · HTML Builder**

> Uneori ai nevoie de o **cutie** în care să pui câteva lucruri, sau de o **etichetă** care să marcheze un cuvânt, iar niciun tag cu înțeles nu se potrivește. Pentru asta există `div` și `span`. Iar ca să le dai **nume**, folosești `id` și `class`. Cu ele faci cărți de colecție cu jocurile tale preferate.  
> Proiect: **„Cărțile de colecție”** · folder: `Prenume_Nume_W2_L9` (ex. `Ana_Pop_W2_L9`)

---

## Ce facem azi
La final ai o pagină cu **cărți de colecție** despre jocurile preferate: fiecare carte este o cutie cu chenar, titlu și o valoare, iar una este „rară”, cu fundal auriu. Știi să folosești `<div>` ca să grupezi lucruri și `<span>` ca să marchezi o parte dintr-un text, să dai nume cu `id` (unic) și `class` (refolosibil) și să folosești aceste nume într-o regulă de stil din `<head>`. Cu `class` poți face aceeași schimbare de aspect la **zece elemente deodată**, scriind regula o singură dată. Este secretul paginilor frumoase din Modulul 3 (CSS).

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul · aducem pagina cu articolul de pe Wikipedia |
| 15–35 | `div` și `span` (**Exemplele 1–2**) |
| 35–55 | `id` (**Exemplul 3**) |
| 55–80 | `class` · reguli cu `.` și `#` (**Exemplele 4–6**) |
| 80–95 | `id` sau `class`? · alegerea numelor (**Exemplul 7**) |
| 95–115 | Mini-proiect: cărțile de colecție (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `<div>` | Cutie fără înțeles, care grupează lucruri | `<div> ... </div>` |
| `<span>` | Etichetă pentru o parte dintr-un text | `<span class="dificultate">8</span>` |
| `id="nume"` | Nume **unic** pentru un singur element | `<h1 id="titlu-pagina">` |
| `class="nume"` | Nume pentru **un grup** de elemente | `<div class="carte">` |
| `.nume { }` și `#nume { }` | Regulă de stil pentru o clasă / pentru un `id` | `.carte { border: 2px solid navy; }` |

---

## 1. Recapitulare rapidă

- `header`, `nav`, `main`, `section`, `article`, `aside`, `footer` sunt taguri cu înțeles.  
- Tabelele sunt pentru date, iar iframe arată o altă pagină.  
- Regula de stil: `proprietate: valoare;`.  
- Linkurile spre o parte a paginii se fac cu `#id`.

**Încearcă tu (8 min)**  
- [ ] Creează folderul `Prenume_Nume_W2_L9` și fișierul `index.html` cu scheletul complet  
- [ ] Pune în `<body>` un `<h1>` „Cărțile de colecție”  
- [ ] Copiază în folder pagina `tema.html` din lecția trecută (cu taguri cu înțeles), împreună cu folderele `imagini` și `media`  
- [ ] Numără în ea câte secțiuni și articole sunt: vor deveni „cărți” cu aspect comun  

> De aici înainte, exemplele arată doar ce scrii **în interiorul `<body>`**, iar regulile de stil se scriu într-un `<style>` din `<head>`, dacă nu spunem altfel.

---

## 2. `div` și `span`

### Exemplul 1 — `<div>`: o cutie

```html
<div>
  <h2>Șah</h2>
  <p>Se joacă pe o tablă cu pătrate albe și negre.</p>
</div>
```

`<div>` („diviziune”) este o **cutie fără niciun înțeles**. Nu schimbă aspectul și nu spune nimic despre conținut. O folosești doar ca să **grupezi** lucruri: aici, un titlu și un paragraf care merg împreună.

> Dacă există un tag cu înțeles (`header`, `nav`, `section`, `article`…), îl alegi pe acela. `<div>` se folosește doar când niciunul nu se potrivește.

Ca să vezi cutia, îi poți da un chenar cu `style`:

```html
<div style="border: 2px solid tomato; padding: 10px;">
  <h2>Șah</h2>
  <p>Se joacă pe o tablă cu pătrate albe și negre.</p>
</div>
```

- `border: 2px solid tomato;` desenează un chenar;  
- `padding: 10px;` lasă spațiu **în interiorul** chenarului, între chenar și text.

Dacă ai zece cutii, ar trebui să scrii același `style` de zece ori. Mai jos vezi cum eviți asta.

### Exemplul 2 — `<span>`: o etichetă în text

Din Modulul 1 știi `<span>` ca să colorezi un cuvânt:

```html
<p>Șahul este <span style="color: tomato;">foarte</span> vechi.</p>
```

Diferența față de `div`:

| | `<div>` | `<span>` |
|---|---------|----------|
| Se folosește | pentru grupuri de lucruri (titlu + text + imagine) | pentru **o parte din text** |
| Se așază | pe rând nou | în interiorul rândului |

**Încearcă tu (8 min)**  
- [ ] Pune un `<div>` care grupează un titlu și un paragraf  
- [ ] Dă cutiei un chenar cu `style`  
- [ ] Explică diferența dintre `<div>` și `<span>`  
- [ ] În `tema.html`, pune cu `<span>` cuvintele importante din paragrafe, ca să le poți colora  

---

## 3. `id`: un nume unic

### Exemplul 3 — `id` ca nume unic și țintă de link

```html
<h2 id="sah">Șah</h2>
<p>Se joacă pe o tablă cu pătrate albe și negre.</p>

<p><a href="#sah">Înapoi la șah</a></p>
```

- `id` este **numele unic** al unui singur element din pagină;  
- poate fi ținta unui link cu `#` (ca în Modulul 1);  
- poate fi folosit într-o regulă de stil, cu `#`:

```html
<style>
  #sah {
    color: tomato;
  }
</style>
```

Regula `#sah { … }` se aplică **doar** elementului cu `id="sah"`.

> Fiecare `id` apare **o singură dată** într-o pagină, ca numărul de pe tricoul unui jucător: nu există doi jucători cu același număr în echipă.

**Încearcă tu (7 min)**  
- [ ] Pune un `id` pe un titlu și fă un link către el cu `#`  
- [ ] Scrie în `<style>` o regulă cu `#` pentru acel `id`  
- [ ] Pune în `tema.html` un `id` pe titlul principal și un link „↑ Înapoi sus” care duce la el  

---

## 4. `class`: un nume pentru mai multe

### Exemplul 4 — `class` și regula cu punct

```html
<style>
  .carte {
    border: 2px solid tomato;
    padding: 10px;
    margin: 10px;
    background-color: lightyellow;
  }
</style>
```

```html
<div class="carte">
  <h2>Șah</h2>
  <p>Se joacă pe o tablă cu pătrate.</p>
</div>

<div class="carte">
  <h2>Puzzle</h2>
  <p>Potrivești bucăți până iese o imagine.</p>
</div>

<div class="carte">
  <h2>Fotbal pe masă</h2>
  <p>Se joacă în doi, cu o minge mică.</p>
</div>
```

- `class="carte"` pune elementului **numele de grup** „carte”;  
- în `<style>`, regula `.carte { … }` (cu **punct** în față) se aplică **tuturor** elementelor cu acea clasă;  
- `margin: 10px;` lasă spațiu **în afara** chenarului.

Ai scris regula o singură dată, iar cele trei cutii arată la fel. Dacă schimbi o culoare în regulă, se schimbă la toate trei.

### Exemplul 5 — `class` la orice tag

Clasa merge pe **orice** tag, nu doar pe `div`:

```html
<style>
  .important {
    color: crimson;
    font-weight: bold;
  }
</style>
```

```html
<p>La șah, regulile <span class="important">contează</span> mult.</p>
<h2 class="important">Atenție la reguli!</h2>
```

`font-weight: bold;` îngroașă textul. Același nume `important` stilează și un `span`, și un titlu.

### Exemplul 6 — Mai multe clase pe același element

Un element poate avea **mai multe clase**, separate prin spațiu:

```html
<style>
  .carte {
    border: 2px solid tomato;
    padding: 10px;
    margin: 10px;
  }
  .rara {
    background-color: gold;
  }
</style>
```

```html
<div class="carte rara">
  <h2>Jocul de aur</h2>
</div>
```

Cutia primește stilul cărții **și** fundalul auriu al cărții rare.

**Încearcă tu (14 min)**  
- [ ] Fă trei `<div>`-uri cu `class="carte"` și o singură regulă `.carte` în `<style>`  
- [ ] Schimbă o culoare în regulă și verifică în Live Server că se schimbă la toate trei  
- [ ] Adaugă un `<span class="important">` într-un paragraf  
- [ ] În `tema.html`, pune `class="carte"` pe fiecare capitol și scrie o singură regulă `.carte`, cu chenar, colțuri rotunjite și spațiu  
- [ ] Schimbă o culoare în regulă și verifică dacă se schimbă toate capitolele  
- [ ] Pune `class="important"` pe cuvintele importante și dă-le o culoare  

---

## 5. Mini-proiect

### Exemplul 7 — `id` sau `class`? Cum alegi un nume

| | `id` | `class` |
|---|------|---------|
| Cât de des apare | **o singură dată** în pagină | de **oricâte ori** |
| Scris în stil cu | `#nume` | `.nume` |
| Poate fi țintă de link | da | nu |
| Exemplu | `id="titlu-pagina"` | `class="carte"` |

Regula simplă: dacă este **un singur** element special, `id`. Dacă este un **grup** de elemente care arată la fel, `class`.

Cum alegi un nume bun:
- litere **mici**, fără spații și fără diacritice;  
- pentru mai multe cuvinte folosește liniuță: `carte-rara`;  
- numele spune **ce este**, nu cum arată: `important`, nu `rosu-gros` (mâine poate să nu mai fie roșu);  
- nu începe cu o cifră: `carte1` este bun, `1carte` nu.

### Exemplul 8 — „Cărțile de colecție”

Acesta este proiectul **complet**, cu tot scheletul paginii. Salvează-l în `index.html` și scrie-l singur, bucată cu bucată.

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cărțile de colecție</title>
  <style>
    body {
      background-color: honeydew;
    }
    #titlu-pagina {
      text-align: center;
      color: navy;
    }
    .carte {
      border: 3px solid navy;
      padding: 10px;
      margin: 10px;
      background-color: white;
    }
    .rara {
      background-color: gold;
    }
    .dificultate {
      color: crimson;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1 id="titlu-pagina">Cărțile de colecție</h1>

  <div class="carte">
    <h2>Șah</h2>
    <p>Dificultate: <span class="dificultate">8</span></p>
  </div>

  <div class="carte rara">
    <h2>Jocul de aur</h2>
    <p>Dificultate: <span class="dificultate">10</span></p>
  </div>

  <div class="carte">
    <h2>Puzzle</h2>
    <p>Dificultate: <span class="dificultate">5</span></p>
  </div>
</body>
</html>
```

Observă cum o regulă pentru `.carte` stilează toate cărțile, iar `.rara` schimbă doar fundalul uneia. Dacă schimbi `navy` în `tomato` în regula `.carte`, toate chenarele se schimbă.

Deschide DevTools (**F12**; pe Mac Cmd + Option + I) → **Elements**, apasă pe o carte și vezi `class="carte"`. În panoul din dreapta vezi regulile care se aplică ei.

---

## De făcut azi — „Cărțile de colecție”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | O pagină cu trei `<div>`-uri cu aceeași `class`, stilate printr-o singură regulă |
| **Complet** | Minim + un `<span>` cu `class`, un `id` pe titlul principal cu regulă cu `#`, o carte cu două clase și explicația într-un comentariu a diferenței dintre `id` și `class` |

### Pasul 1 — Minim
Fă cărți de colecție despre **jocurile tale preferate** (sau despre sporturi, orașe, mâncăruri).

- [ ] Folderul `Prenume_Nume_W2_L9` are `index.html` cu scheletul complet  
- [ ] Ai trei `<div>`-uri cu `class="carte"`, fiecare cu un titlu și un paragraf  
- [ ] Ai o singură regulă `.carte` în `<style>`, în `<head>`  

### Pasul 2 — Complet
Îmbunătățești pagina:

- [ ] Ai minimum 4 cărți și un `<span class="dificultate">` în fiecare  
- [ ] Ai un `id` doar pe titlul principal, cu regulă cu `#`  
- [ ] Cel puțin una dintre cărți are două clase (`carte rara`)  
- [ ] Ai verificat în DevTools clasele și regulile  
- [ ] Codul este indentat și are comentarii  

---

## Bonus ★★★ — Provocare: Colecția cu grupuri
*Doar dacă ai terminat Complet.*

- [ ] Adaugă o clasă `.comuna` cu un alt fundal și folosește clasa la două cărți  
- [ ] Fă un `<div class="grup">` care conține toate cărțile și dă cutiei un chenar  
- [ ] Fă din `tema.html` o pagină cu aspect comun: `.carte` pe capitole, `.important` pe cuvinte, `id` pe secțiuni și meniu care duce la ele  
- [ ] Schimbă în DevTools, în panoul de stil, culoarea regulii `.carte` și vezi cum se schimbă toate cărțile (schimbarea e doar temporară)  

---

## Greșeli frecvente
1. **Ai scris `carte { … }` în loc de `.carte { … }`** — fără punct, regula caută un tag numit `carte`.  
2. **Ai scris `#carte` pentru o clasă** — `#` este pentru `id`, `.` pentru `class`.  
3. **Ai folosit același `id` de două ori** — fiecare `id` este unic.  
4. **Nume cu spații sau diacritice** — folosește `carte-rara`.  
5. **Ai uitat `;` la sfârșitul unei reguli** din bloc.  
6. **Ai pus `<style>` în `<body>`** — locul lui este în `<head>`.  
7. **Ai folosit `div` unde exista un tag cu înțeles** — folosește `header`, `nav` etc.  
8. **Ai pus două clase cu virgulă** — se separă prin spațiu: `class="carte rara"`.  

---

## Recapitulare pe scurt
1. `<div>` grupează lucruri; `<span>` marchează o parte din text.  
2. `id` este un nume unic; `class` este un nume pentru un grup.  
3. În `<style>`: `.clasa { … }` și `#id { … }`.  
4. Un element poate avea mai multe clase, separate prin spațiu.  
5. Folosim tag cu înțeles când se poate; `div` când nu se poate.  
6. Numele: litere mici, fără spații și diacritice.

## Quiz scurt
- Ce face `<div>`?  
- Cum scrii în `<style>` o regulă pentru clasa `carte`?  
- Câte elemente pot avea același `id`?  
- Cum pui două clase unui element?  
- Care este diferența dintre `<div>` și `<span>`?

## Temă
1. Fă o pagină „Cărți de colecție cu sporturi” cu 5 carduri: fiecare cu `class="sport"`, un titlu și un `<span class="numar">`. Una dintre cărți are și clasa `campion`. Salvează în `Prenume_Nume_W2_L9`.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — `id` și `class` pe același element.**

```html
<div class="carte" id="cartea-speciala">
  <h2>Cartea specială</h2>
</div>

<p><a href="#cartea-speciala">Du-mă la cartea specială</a></p>
```

Elementul are și o clasă, ca să arate ca celelalte cărți, și un `id`, ca să poată fi țintă de link.

**Acasă 2 — Cartea care se schimbă când treci cu mouse-ul.**

```html
<style>
  .carte:hover {
    background-color: lightblue;
  }
</style>
```

`:hover` („deasupra”) aplică regula doar cât timp mouse-ul este deasupra elementului. Încearcă regula cu cărțile tale.

4. **Încă patru exerciții (B–E):**

**B — `id` sau `class`?** Pentru fiecare, alege `id` sau `class`: (1) titlul principal al paginii; (2) toate cardurile cu jocuri; (3) cuvintele importante din text; (4) secțiunea „Contact”, către care duce un link.

**C — Citește regula.** Ce elemente stilează: (1) `.carte { … }`; (2) `#titlu-pagina { … }`; (3) `.carte.rara { … }`? (fără spațiu între clase înseamnă „și `carte`, și `rara`”: se aplică doar elementelor care au **ambele** clase.)

**D — Găsește greșelile.** Găsește **3 greșeli** și repară greșelile:

```text
<style>
  carte {
    color: red;
  }
  #Titlu Mare {
    color: blue;
  }
</style>
<div class="carte">Prima carte</div>
<div class="carte">A doua carte</div>
<h1 id="titlu">Titlu</h1>
<h2 id="titlu">Alt titlu</h2>
```

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: care este diferența dintre `div` și `span`? Dar dintre `id` și `class`? De ce folosim un nume de clasă în loc să scriem același `style` pe fiecare element?

## Ce urmează — Lecția 10
**Mica enciclopedie**: reluăm tot ce am învățat în Modulul 2 (tabele, formulare, sunete, hărți și taguri cu înțeles) într-o singură pagină despre un oraș, un sport sau un joc.

---

## Răspunsuri
- **Quiz scurt:** (1) este o cutie fără înțeles, care grupează lucruri (de exemplu un titlu și un paragraf); (2) `.carte { … }`, cu punct în față; (3) unul singur, pentru că `id` este unic în pagină; (4) separate prin spațiu: `class="carte rara"`; (5) `<div>` grupează lucruri și se așază pe rând nou, iar `<span>` marchează o parte din text, în interiorul rândului.  
- **Tema, exercițiul B:** (1) `id`; (2) `class`; (3) `class`; (4) `id`.  
- **Tema, exercițiul C:** (1) toate elementele cu clasa `carte`; (2) elementul cu `id="titlu-pagina"`; (3) doar elementele care au și clasa `carte`, și clasa `rara`.  
- **Tema, exercițiul D:** (1) `carte` fără punct trebuie `.carte`; (2) `#Titlu Mare` are spațiu și litere mari: nume de `id` valid este `titlu-mare`, iar elementul trebuie să aibă același `id`; (3) `id="titlu"` apare de două ori: trebuie unic.  
- **Tema, exercițiul E:** `div` grupează, `span` marchează text; `id` este unic, `class` este pentru un grup; o regulă scrisă o singură dată se aplică tuturor.  
- **Notă:** `margin`, `padding`, `border`, `font-weight` și `:hover` sunt folosite ca „recomandare”; ele se explică în Modulul 3.
