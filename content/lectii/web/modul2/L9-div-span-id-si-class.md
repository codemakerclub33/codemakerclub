# LECȚIA 9 — div, span, id și class
**Modulul 2 · HTML II: Pagini mai bogate · 2 ore**  
**Code Maker Club · HTML Builder**

> Uneori ai nevoie de o **cutie** în care să pui câteva lucruri, sau de o **etichetă** care să marcheze un cuvânt, iar niciun tag cu înțeles nu se potrivește. Pentru asta există `div` și `span`. Iar ca să le dai **nume**, folosești `id` și `class`.  
> Proiect: **„Cărți de joc cu animale”** · folder: `Prenume_Nume_W2_L9` (ex. `Ana_Pop_W2_L9`)

---

## Obiectiv
La finalul orei știi să folosești `<div>` ca să grupezi lucruri și `<span>` ca să marchezi o parte dintr-un text, să dai nume cu `id` (unic) și `class` (refolosibil) și să folosești aceste nume într-o regulă de stil din `<head>`.  
**Minim:** o pagină cu trei `<div>`-uri cu aceeași `class`, stilate printr-o singură regulă.  
**Ținta orei (Complet):** + un `<span>` cu `class`, un `id` folosit și ca țintă de link, o regulă de stil cu `.` și una cu `#`, două clase pe același element și explicația diferenței dintre `id` și `class`.

## De ce contează
Cu `div`, `class` și `id` poți face aceeași schimbare de aspect la **zece elemente deodată**, scriind regula o singură dată. Este secretul paginilor frumoase pe care le vei face în Modulul 3 (CSS) și al paginilor interactive din Modulul 4 (JavaScript).

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–35 | `div` și `span` (**Exemplele 1–3**) |
| 35–55 | `id` (**Exemplul 4**) |
| 55–80 | `class` · reguli cu `.` și `#` (**Exemplele 5–7**) |
| 80–95 | `id` sau `class`? · alegerea numelor (**Exemplele 8–9**) |
| 95–115 | Proiect · DevTools (**Exemplul 10**) |
| 115–120 | Recap și temă |

---

## 1. Recapitulare rapidă

- `header`, `nav`, `main`, `section`, `article`, `aside`, `footer` sunt taguri cu înțeles.  
- Tabelele sunt pentru date, iar iframe arată o altă pagină.  
- Regula de stil: `proprietate: valoare;`.  
- Linkurile spre o parte a paginii se fac cu `#id`.

**Încearcă tu (4 min)**  
- [ ] Creează folderul `Prenume_Nume_W2_L9` și fișierul `index.html` cu scheletul complet  
- [ ] Pune în `<body>` un `<h1>` „Cărți de joc cu animale”  

> De aici înainte, exemplele arată doar ce scrii **în interiorul `<body>`**, iar regulile de stil se scriu într-un `<style>` din `<head>`, dacă nu spunem altfel.

---

## 2. `div` și `span`

### Exemplul 1 — `<div>`: o cutie

```html
<div>
  <h2>Pisica</h2>
  <p>Doarme toată ziua.</p>
</div>
```

`<div>` („diviziune”) este o **cutie fără niciun înțeles**. Nu schimbă aspectul și nu spune nimic despre conținut. O folosești doar ca să **grupezi** lucruri: aici, un titlu și un paragraf care merg împreună.

> Dacă există un tag cu înțeles (`header`, `nav`, `section`, `article`…), îl alegi pe acela. `<div>` se folosește doar când niciunul nu se potrivește.

### Exemplul 2 — O cutie cu stil

```html
<div style="border: 2px solid tomato; padding: 10px;">
  <h2>Pisica</h2>
  <p>Doarme toată ziua.</p>
</div>
```

- `border: 2px solid tomato;` desenează un chenar;  
- `padding: 10px;` lasă spațiu **în interiorul** chenarului, între chenar și text.

Acum cutia se vede! Dar dacă ai zece cutii, ar trebui să scrii același `style` de zece ori. Mai jos vezi cum eviți asta.

### Exemplul 3 — `<span>`: o etichetă în text

Din Modulul 1 știi `<span>` ca să colorezi un cuvânt:

```html
<p>Pisica este <span style="color: tomato;">foarte</span> leneșă.</p>
```

Diferența față de `div`:

| | `<div>` | `<span>` |
|---|---------|----------|
| Se folosește | pentru grupuri de lucruri (titlu + text + imagine) | pentru **o parte din text** |
| Se așază | pe rând nou | în interiorul rândului |

**Gata când:**  
- [ ] Ai pus un `<div>` care grupează un titlu și un paragraf  
- [ ] Ai dat cutiei un chenar cu `style`  
- [ ] Poți explica diferența dintre `<div>` și `<span>`  

---

## 3. `id`: un nume unic

### Exemplul 4 — `id` ca nume unic și țintă de link

```html
<h2 id="pisica">Pisica</h2>
<p>Doarme toată ziua.</p>

<p><a href="#pisica">Înapoi la pisică</a></p>
```

- `id` este **numele unic** al unui singur element din pagină;  
- poate fi ținta unui link cu `#` (ca în Modulul 1);  
- poate fi folosit într-o regulă de stil, cu `#`:

```html
<style>
  #pisica {
    color: tomato;
  }
</style>
```

Regula `#pisica { … }` se aplică **doar** elementului cu `id="pisica"`.

> Fiecare `id` apare **o singură dată** într-o pagină, ca numărul de pe tricoul unui jucător: nu există doi jucători cu același număr în echipă.

---

## 4. `class`: un nume pentru mai multe

### Exemplul 5 — `class` și regula cu punct

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
  <h2>Pisica</h2>
  <p>Doarme toată ziua.</p>
</div>

<div class="carte">
  <h2>Cățelul</h2>
  <p>Aleargă prin curte.</p>
</div>

<div class="carte">
  <h2>Pasărea</h2>
  <p>Cântă dimineața.</p>
</div>
```

- `class="carte"` pune elementului **numele de grup** „carte”;  
- în `<style>`, regula `.carte { … }` (cu **punct** în față) se aplică **tuturor** elementelor cu acea clasă;  
- `margin: 10px;` lasă spațiu **în afara** chenarului.

Ai scris regula o singură dată, iar cele trei cutii arată la fel. Dacă schimbi o culoare în regulă, se schimbă la toate trei.

### Exemplul 6 — `class` la orice tag

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
<p>Pisica <span class="important">nu</span> iubește apa.</p>
<h2 class="important">Atenție la gheare!</h2>
```

`font-weight: bold;` îngroașă textul. Același nume `important` stilează și un `span`, și un titlu.

### Exemplul 7 — Mai multe clase pe același element

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
  <h2>Pisica aurie</h2>
</div>
```

Cutia primește stilul cărții **și** fundalul auriu al cărții rare.

**Încearcă tu (8 min)**  
- [ ] Fă trei `<div>`-uri cu `class="carte"` și o singură regulă `.carte` în `<style>`  
- [ ] Schimbă o culoare în regulă și verifică în Live Server că se schimbă la toate trei  
- [ ] Adaugă un `<span class="important">` într-un paragraf  

---

## 5. Alegerea numelor și proiectul

### Exemplul 8 — `id` sau `class`?

| | `id` | `class` |
|---|------|---------|
| Cât de des apare | **o singură dată** în pagină | de **oricâte ori** |
| Scris în stil cu | `#nume` | `.nume` |
| Poate fi țintă de link | da | nu |
| Exemplu | `id="titlu-pagina"` | `class="carte"` |

Regula simplă: dacă este **un singur** element special, `id`. Dacă este un **grup** de elemente care arată la fel, `class`.

### Exemplul 9 — Cum alegi un nume bun

- litere **mici**, fără spații și fără diacritice;  
- pentru mai multe cuvinte folosește liniuță: `carte-rara`;  
- numele spune **ce este**, nu cum arată: `important`, nu `rosu-gros` (mâine poate să nu mai fie roșu);  
- nu începe cu o cifră: `carte1` este bun, `1carte` nu.

### Exemplul 10 — „Cărți de joc cu animale”

```html
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
  .putere {
    color: crimson;
    font-weight: bold;
  }
</style>
```

```html
<h1 id="titlu-pagina">Cărți de joc cu animale</h1>

<div class="carte">
  <h2>Pisica</h2>
  <p>Putere: <span class="putere">7</span></p>
</div>

<div class="carte rara">
  <h2>Delfinul de aur</h2>
  <p>Putere: <span class="putere">10</span></p>
</div>

<div class="carte">
  <h2>Cățelul</h2>
  <p>Putere: <span class="putere">8</span></p>
</div>
```

Observă cum o regulă pentru `.carte` stilează toate cărțile, iar `.rara` schimbă doar fundalul uneia. Dacă schimbi `navy` în `tomato` în regula `.carte`, toate chenarele se schimbă.

Deschide DevTools (**F12**) → **Elements**, apasă pe o carte și vezi `class="carte"`. În panoul din dreapta vezi regulile care se aplică ei.

**Gata când:**  
- [ ] Ai făcut cel puțin 3 cărți cu `class`, cel puțin una cu două clase  
- [ ] Ai un `id` pe titlul principal, cu regulă cu `#`  
- [ ] Ai o clasă pentru un `<span>`  
- [ ] Ai verificat în DevTools clasele și regulile  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Cărți de joc cu animale” (obligatoriu)
Fă pagina din Exemplul 10 cu **animalele tale**: minimum 4 cărți, cu:
- un `<style>` în `<head>` cu reguli pentru `body`, `#titlu-pagina`, `.carte`, `.rara` și `.putere`;  
- un `id` doar pe titlul principal;  
- cel puțin una dintre cărți cu două clase (`carte rara`);  
- un `<span class="putere">` în fiecare carte.

### Exercițiul B — `id` sau `class`?
Pentru fiecare, alege `id` sau `class`: (1) titlul principal al paginii; (2) toate cardurile cu animale; (3) cuvintele importante din text; (4) secțiunea „Contact”, către care duce un link.

### Exercițiul C — Citește regula
Ce elemente stilează: (1) `.carte { … }`; (2) `#titlu-pagina { … }`; (3) `.carte.rara { … }`? (fără spațiu între clase înseamnă „și `carte`, și `rara`”: se aplică doar elementelor care au **ambele** clase.)

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** și repară greșelile:

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

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: care este diferența dintre `div` și `span`? Dar dintre `id` și `class`? De ce folosim un nume de clasă în loc să scriem același `style` pe fiecare element?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W2_L9` conține `index.html` cu cărțile de joc  
- [ ] O singură regulă `.carte` stilează toate cărțile  
- [ ] Codul este indentat și are comentarii  
- [ ] Ai răspuns la exercițiile B–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Adaugă o clasă `.comuna` cu un alt fundal și folosește clasa la două cărți  
- [ ] Fă un `<div class="grup">` care conține toate cărțile și dă cutiei un chenar  
- [ ] Adaugă un link în meniu către `#titlu-pagina`  
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
Fă o pagină „Echipa mea de fotbal” (sau altă echipă imaginară) cu 5 carduri de jucători: fiecare cu `class="jucator"`, un titlu și un `<span class="numar">`. Una dintre cărți are și clasa `capitan`. Salvează în `Prenume_Nume_W2_L9`.

## Ce urmează — Lecția 10
**Proiectul Modulului 2**: „Fișa animalului meu preferat”, cu tot ce ai învățat: tabele, formular, audio, video, hartă și taguri cu înțeles.

---

## Răspunsuri
- **Quiz scurt:** (1) este o cutie fără înțeles, care grupează lucruri (de exemplu un titlu și un paragraf); (2) `.carte { … }`, cu punct în față; (3) unul singur, pentru că `id` este unic în pagină; (4) separate prin spațiu: `class="carte rara"`; (5) `<div>` grupează lucruri și se așază pe rând nou, iar `<span>` marchează o parte din text, în interiorul rândului.  
- **Exercițiul B:** (1) `id`; (2) `class`; (3) `class`; (4) `id`.  
- **Exercițiul C:** (1) toate elementele cu clasa `carte`; (2) elementul cu `id="titlu-pagina"`; (3) doar elementele care au și clasa `carte`, și clasa `rara`.  
- **Exercițiul D:** (1) `carte` fără punct trebuie `.carte`; (2) `#Titlu Mare` are spațiu și litere mari: nume de `id` valid este `titlu-mare`, iar elementul trebuie să aibă același `id`; (3) `id="titlu"` apare de două ori: trebuie unic.  
- **Exercițiul E:** `div` grupează, `span` marchează text; `id` unic, `class` pentru grup; o regulă scrisă o singură dată se aplică tuturor.  
- **Notă:** `margin`, `padding`, `border` și `font-weight` sunt folosite ca „recomandare”; ele se explică în Modulul 3.
