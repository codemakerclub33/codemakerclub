# LECȚIA 10 — Proiect: Pagina mea, dar frumoasă
**Modulul 3 · CSS: Stil și culoare · 2 ore**  
**Code Maker Club · CSS Stylist**

> Ai învățat selectori, culori, text, cutii, Flexbox, Grid, efecte, animații și adaptare la telefon. Azi le folosești pe toate: iei o pagină făcută de tine în modulul trecut (**Fișa animalului meu preferat**) și o transformi dintr-o pagină simplă într-una **frumoasă**, cu un fișier de stil separat.  
> Proiect: **„Pagina mea, dar frumoasă”** · folder: `Prenume_Nume_W3_L10` (ex. `Ana_Pop_W3_L10`)

---

## Obiectiv
La finalul orei ai o pagină completă, stilizată cu un fișier `stil.css` separat, cu paletă de culori în variabile, text citibil, antet cu meniu, carduri în grilă, efecte la `:hover`, cel puțin o animație blândă și adaptare la telefon.  
**Minim:** pagina are `stil.css` legat corect, culori și fonturi alese, carduri cu chenar și colțuri rotunjite, un meniu orizontal cu Flexbox și o regulă `@media` pentru telefon.  
**Ținta orei (Complet):** + variabile CSS pentru paletă, grilă adaptivă, efecte la `:hover` cu `transition`, o animație cu `prefers-reduced-motion`, comentarii și cod indentat, verificare pe telefon în DevTools și o prezentare de un minut.

## De ce contează
Un proiect adevărat te obligă să folosești lucrurile învățate **împreună**: dacă o parte nu merge, vezi imediat. Este și un portofoliu bun: o pagină pe care o poți arăta familiei.

---

## Siguranță înainte de toate
- Folosești **pagina ta** din Modulul 2 sau alegi un animal sau un hobby (nu o persoană).  
- Nu scrii date personale (nume complet, adresă, școală, telefon).  
- Imaginile sunt **din pachetul media**, făcute de tine sau alese cu profesorul. Nu folosim poze luate din internet.  
- Animațiile sunt **blânde**, fără licăriri rapide (cel mult 3 pe secundă), iar pagina respectă `prefers-reduced-motion`.  
- Fonturile sunt cele din sistem, fără fișiere sau linkuri externe.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Plan: paleta, fonturile, harta stilului (**Exemplul 1**) |
| 15–30 | `stil.css` legat de pagină · paleta și textul (**Exemplele 2–3**) |
| 30–55 | Antet cu meniu · carduri (**Exemplele 4–5**) |
| 55–75 | Efecte și animație (**Exemplul 6**) |
| 75–90 | Adaptare la telefon (**Exemplul 7**) |
| 90–105 | Verificare cu lista (**Exemplul 8**) |
| 105–115 | Test cu un coleg · prezentare de un minut (**Exemplul 9**) |
| 115–120 | Recap și temă |

---

## 1. Planul

### Exemplul 1 — Harta stilului

Înainte de a scrie CSS, hotărăște pe foaie:

```text
Paleta (4 culori):  culoare principală, culoare de fundal, culoare pentru text, culoare de accent
Fonturile:          unul pentru titluri, unul pentru text (din sistem, cu listă de rezervă)
Antet:              logo în stânga, meniu în dreapta
Conținut:           carduri într-o grilă
Efecte:             ce se mișcă la :hover? ce animație blândă pui?
Telefon:            ce se schimbă sub 600px?
```

Alege 4 culori care se potrivesc și verifică ca textul să se **citească** pe fundal (culoare închisă pe fundal deschis sau invers).

**Încearcă tu (8 min)**  
- [ ] Alege pagina de la care pornești (de exemplu „Fișa animalului meu preferat”)  
- [ ] Notează pe foaie cele 4 culori și cele două fonturi  
- [ ] Desenează pe foaie cum vrei să arate antetul și cardurile  
- [ ] Creează folderul `Prenume_Nume_W3_L10` și pune în el pagina ta, ca `index.html`, plus folderele `imagini` (și `media`, dacă ai)  

---

## 2. `stil.css`, paleta și textul

### Exemplul 2 — Mutăm stilul într-un fișier separat

În pagina ta din Modulul 2 stilul era scris în `<style>`, în `<head>`. Acum:
1. Creează în folder un fișier `stil.css`.  
2. **Șterge** blocul `<style> … </style>` din `index.html`.  
3. În `<head>`, adaugă linia care leagă fișierul:

```html
<link rel="stylesheet" href="stil.css">
```

Verifică și că în `<head>` ai `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.

Începe `stil.css` cu paleta, în variabile (Lecția 2), și cu regula de bază (Lecția 4):

```css
:root {
  --principala: navy;
  --fundal: #f4f9f9;
  --text: #264653;
  --accent: crimson;
}

* {
  box-sizing: border-box;
}

img {
  max-width: 100%;
  height: auto;
}
```

Înlocuiește culorile de aici cu ale tale. Din acest moment, în tot fișierul scrii `var(--principala)`, `var(--accent)` etc. Când vrei să schimbi o culoare, o schimbi într-un singur loc.

### Exemplul 3 — Text citibil

```css
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  background-color: var(--fundal);
  color: var(--text);
}

h1,
h2 {
  font-family: Georgia, "Times New Roman", serif;
  color: var(--principala);
}

a {
  color: var(--accent);
}
```

Fonturi din sistem, cu **listă de rezervă** (Lecția 3). `line-height: 1.6;` face rândurile aerisite.

**Gata când:**  
- [ ] `stil.css` este legat prin `<link>`, iar blocul `<style>` a fost șters  
- [ ] Ai variabilele culorilor în `:root`  
- [ ] Textul se citește ușor (culori, mărime, `line-height`)  
- [ ] Imaginile au `max-width: 100%; height: auto;`  

---

## 3. Antet cu meniu și carduri

### Exemplul 4 — Antetul cu Flexbox

Ai deja în pagină un `<header>` și un `<nav>` cu o listă de linkuri. Stilizează antetul și meniul:

```css
header {
  background-color: var(--principala);
  color: white;
  text-align: center;
  padding: 1.5rem 1rem;
}

header h1 {
  color: white;
  margin: 0;
  font-size: clamp(1.5rem, 5vw, 2.5rem);
}

nav {
  background-color: white;
  border-bottom: 3px solid var(--principala);
  position: sticky;
  top: 0;
  z-index: 100;
}

nav ul {
  display: flex;
  justify-content: center;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 10px;
}

nav a {
  display: block;
  padding: 10px 16px;
  color: var(--principala);
  text-decoration: none;
  border: 2px solid var(--principala);
  border-radius: 8px;
}
```

Meniul este orizontal (Lecția 5) și rămâne sus când derulezi (Lecția 6).

### Exemplul 5 — Cardurile

Fiecare secțiune a paginii tale are `class="carte"`. Le așezi în grilă:

```css
main {
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.carte {
  background-color: white;
  border: 2px solid var(--principala);
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.carte h2 {
  margin-top: 0;
}
```

Pe calculator, cardurile stau două sau trei pe rând; pe telefon, câte unul (Lecția 9). Dacă ai o secțiune mai mare (de exemplu tabelul), îi poți da `grid-column: 1 / -1;` ca să ocupe toată lățimea.

Stilizează și **tabelul**, ca să arate bine:

```css
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px 12px;
  border: 1px solid var(--principala);
  text-align: left;
}

th {
  background-color: var(--principala);
  color: white;
}

tr:nth-child(even) td {
  background-color: #e8f1f2;
}
```

**Gata când:**  
- [ ] Antetul și meniul sunt stilizate, iar meniul este orizontal  
- [ ] Meniul rămâne sus la derulare (`sticky`)  
- [ ] Cardurile sunt într-o grilă adaptivă  
- [ ] Tabelul are antet colorat și rânduri alternative  

---

## 4. Efecte, animație și telefon

### Exemplul 6 — `:hover`, `transition` și o animație blândă

```css
nav a {
  transition: background-color 0.3s ease, color 0.3s ease;
}

nav a:hover,
nav a:focus {
  background-color: var(--principala);
  color: white;
}

.carte {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.carte:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
}

@keyframes aparitie {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.carte {
  animation: aparitie 0.7s ease backwards;
}

@media (prefers-reduced-motion: reduce) {
  .carte {
    animation: none;
    transition: none;
  }
}
```

Cardurile apar lin la încărcare și se ridică la `:hover` (Lecțiile 7 și 8). Regula pentru mișcare redusă este **la sfârșit**, iar animația este una singură, blândă.

Observă că `.carte` apare în mai multe reguli. E în regulă, dar fiecare proprietate (`transition`, `animation`) trebuie scrisă **o singură dată** pe un element: dacă o scrii de două ori, a doua o înlocuiește pe prima. Adună proprietățile cu grijă, într-o singură regulă.

### Exemplul 7 — Telefonul

```css
@media (max-width: 600px) {
  nav ul {
    flex-wrap: wrap;
  }

  main {
    grid-template-columns: 1fr;
  }
}
```

Pe telefon, meniul poate trece pe mai multe rânduri, iar cardurile stau pe o singură coloană. Pune regula `@media` **la sfârșitul** fișierului, ca să poată înlocui regulile de dinainte.

**Încearcă tu (10 min)**  
- [ ] Verifică efectele `:hover` și `:focus` (cu mouse-ul și cu tasta Tab)  
- [ ] Verifică animația și regula `prefers-reduced-motion`  
- [ ] Deschide DevTools în modul telefon și verifică dacă apare derulare pe orizontală  

---

## 5. Verificarea și prezentarea

### Exemplul 8 — Lista de verificare

Bifează fiecare punct, în pagina ta:

```text
□ stil.css este legat cu <link>, iar în index.html nu mai este <style>
□ Am o paletă de 4 culori, în variabile (:root)
□ Textul se citește ușor pe fundal (culori și mărimi bune)
□ Am cel puțin 3 tipuri de selectori (tag, clasă, id sau grupare)
□ Antetul are meniu orizontal făcut cu Flexbox
□ Cardurile sunt în grilă (Grid) și au chenar, colțuri rotunjite și umbră
□ Am efecte la :hover, cu transition
□ Am o singură animație blândă, fără licăriri rapide
□ Am regula prefers-reduced-motion
□ Am o regulă @media (max-width: ...) pentru telefon
□ Nu apare derulare pe orizontală pe telefon
□ Am comentarii în CSS și codul este indentat
□ Nu am date personale în pagină
```

Dacă un punct nu este bifat, repară înainte să prezinți.

### Exemplul 9 — Prezentarea de un minut

Spune colegilor, în ordine:
1. „Pagina mea este despre …”  
2. „Am ales culorile … pentru că …”  
3. „Cel mai mândru sunt de …” (o parte a paginii)  
4. „Cel mai greu mi s-a părut …, iar soluția a fost: …”  
5. „Pe telefon pagina arată așa: …” (arată ecranul în DevTools)

Colegul care ascultă îți spune **un lucru reușit** și **un lucru care se poate îmbunătăți** (cu politețe).

**Gata când:**  
- [ ] Ai bifat toate punctele din listă  
- [ ] Ai testat pagina cu un coleg  
- [ ] Ai făcut prezentarea de un minut  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Pagina mea, dar frumoasă” (obligatoriu)
Folderul `Prenume_Nume_W3_L10` are `index.html` și `stil.css`, cu tot ce este în **lista de verificare** din Exemplul 8.

### Exercițiul B — Autoevaluare
Pe foaie, notează de la 1 la 5 cât de bine ai înțeles fiecare lecție din modul (selectori, culori, text, cutii, Flexbox, Grid și `position`, `:hover`, animații, telefon). Scrie două lecții pe care vrei să le mai repeți.

### Exercițiul C — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
.carte {
  display: grid;
  background: var(culoare);
  transition: transform 0.3;
}

@media (max-width: 600px) {
  .carte { padding: 10 }
}
```

### Exercițiul D — Explică cu cuvintele tale
Pe foaie: de ce este mai bine să ai un fișier `stil.css` separat? De ce folosim variabile pentru culori? Ce faci ca pagina ta să fie prietenoasă cu cineva care folosește doar tastatura sau cu cineva sensibil la mișcare?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W3_L10` are `index.html`, `stil.css` și folderele de imagini  
- [ ] Toate punctele din lista de verificare sunt bifate  
- [ ] Ai răspuns la exercițiile B–D  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Fă o a doua variantă de paletă (de exemplu „temă întunecată”), schimbând doar variabilele din `:root`  
- [ ] Adaugă un buton „Sus” fix, în colțul din dreapta jos  
- [ ] Adaugă o a doua pagină, cu același `stil.css`, și vezi cum se schimbă amândouă odată  
- [ ] Adaugă un `@media (max-width: 900px)` pentru tabletă  

---

## Greșeli frecvente
1. **Ai uitat `<link rel="stylesheet" href="stil.css">`** — pagina apare fără stil.  
2. **Ai lăsat și `<style>` în pagină** — regulile se amestecă și nu mai știi de unde vin.  
3. **Calea către `stil.css` este greșită** — fișierul trebuie să fie în același folder cu `index.html`.  
4. **Ai scris `var(culoare)`** în loc de `var(--culoare)` — numele variabilei începe cu două liniuțe.  
5. **Ai scris `transition: transform 0.3;`** — lipsește `s`.  
6. **Textul nu se vede** — culoarea textului este prea apropiată de fundal.  
7. **Cardurile ies din ecran pe telefon** — ai lățimi fixe; folosește grilă și `max-width`.  
8. **`transition` sau `animation` scrise de două ori** pe același element — a doua o înlocuiește pe prima.  
9. **Animația licărește sau se mișcă prea mult** — mai puțin este mai bine.  
10. **Ai uitat regula `prefers-reduced-motion`.**  

---

## Recapitulare pe scurt
1. Stilul stă într-un fișier `stil.css` legat cu `<link>`.  
2. Paleta se ține în variabile (`:root`, `var(--nume)`).  
3. Textul citibil are fonturi cu listă de rezervă, mărime bună și `line-height`.  
4. Antetul și meniul se fac cu Flexbox; cardurile, cu Grid.  
5. `:hover` plus `transition` dau viață paginii; animațiile sunt puține și blânde.  
6. `@media` și `prefers-reduced-motion` fac pagina prietenoasă pentru toți.

## Quiz scurt
- Cum legi `stil.css` de o pagină?  
- Ce este `:root` și la ce folosește?  
- Cum faci un meniu orizontal?  
- Cum faci cardurile să se așeze singure?  
- Ce faci pentru cine nu vrea mișcare pe ecran?

## Temă
Arată pagina unui membru al familiei, pe calculator și pe telefon, și întreabă ce a plăcut persoanei cel mai mult. Notează răspunsul pe foaie și, dacă vrei, fă o îmbunătățire.

## Ce urmează — Modulul 4
Începem **JavaScript**: pagina ta nu doar arată frumos, ci și **face lucruri**: răspunde la apăsări, calculează și își schimbă singură conținutul.

---

## Răspunsuri
- **Quiz scurt:** (1) cu `<link rel="stylesheet" href="stil.css">` în `<head>`; (2) rădăcina paginii, unde scriem variabilele paletei, de exemplu `--principala: navy;`, ca să le folosim peste tot cu `var(--principala)`; (3) pe `ul` pui `display: flex;` și `list-style: none;`; (4) cu o grilă: `display: grid;` și `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));`; (5) pui regula `@media (prefers-reduced-motion: reduce)` care oprește animațiile cu `animation: none;`.  
- **Exercițiul A:** pentru evaluare folosiți lista din Exemplul 8. Minimul de acceptare: `stil.css` legat corect, culori și fonturi alese, carduri cu chenar și colțuri rotunjite, meniu orizontal cu Flexbox și o regulă `@media`. Nu cereți animații dacă elevul nu le-a înțeles; contează să nu fie rău făcute.  
- **Exercițiul B:** nu are răspuns corect; este pentru elev. Notați lecțiile pe care le cere repetate și reveniți la ele.  
- **Exercițiul C:** (1) `var(culoare)` trebuie `var(--culoare)`; (2) `transition: transform 0.3;` trebuie `0.3s`; (3) `padding: 10` trebuie `padding: 10px`.  
- **Exercițiul D:** un singur loc pentru stil, ușor de schimbat pentru mai multe pagini; o culoare schimbată într-un singur loc se schimbă peste tot; `:focus` vizibil, linkuri mari, `prefers-reduced-motion`.  
- **Notă pentru profesor:** dacă un elev nu are pagina din Modulul 2, poate porni de la orice pagină cu antet, meniu și 3–4 secțiuni (un hobby, un sport, un joc); evitați persoane și date personale. Pentru prezentări, alegeți să nu se compare paginile între ele: fiecare spune ce a făcut bine. Dacă lipsesc imagini, cardurile pot fi doar cu text și culori.
