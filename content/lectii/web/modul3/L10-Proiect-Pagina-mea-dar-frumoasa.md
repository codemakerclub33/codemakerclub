# LECȚIA 10 — Enciclopedia în haine noi
### Proiect: Enciclopedia în haine noi
**Modulul 3 · CSS: Stil și culoare · 2 ore**  
**Code Maker Club · CSS Stylist**

> Ai învățat selectori, culori, text, cutii, Flexbox, Grid, efecte, animații și adaptare la telefon. Azi le folosești pe toate: iei **Mica enciclopedie** (`index.html`) făcută de tine în ultima lecție din Modulul 2 și o transformi dintr-o pagină simplă într-una **frumoasă**, cu un fișier de stil separat.  
> Proiect: **„Enciclopedia în haine noi”** · folder: `Prenume_Nume_W3_L10` (ex. `Ana_Pop_W3_L10`)

---

## Ce facem azi
La final ai o pagină completă, stilizată cu un fișier `stil.css` separat, cu paletă de culori în variabile, text citibil, antet cu meniu, carduri în grilă, efecte la `:hover`, o animație blândă și adaptare la telefon. Un proiect adevărat te obligă să folosești lucrurile învățate **împreună**: dacă o parte nu merge, vezi imediat. Este și un portofoliu bun: o pagină pe care o poți arăta familiei.

---

## Siguranță înainte de toate
- Folosești **Mica enciclopedie** din Modulul 2 (folderul `Prenume_Nume_W2_L10`) sau alegi un animal sau un hobby (nu o persoană).  
- Nu scrii date personale (nume complet, adresă, școală, telefon).  
- Imaginile sunt **din pachetul media**, făcute de tine sau alese cu profesorul. Nu folosim poze luate din internet.  
- Animațiile sunt **blânde**, fără licăriri rapide (cel mult 3 pe secundă), iar pagina respectă `prefers-reduced-motion`.  
- Fonturile sunt cele din sistem, fără fișiere sau linkuri externe.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Plan: paleta, fonturile, harta stilului (**Exemplul 1**) |
| 15–35 | `stil.css` legat de pagină · paleta și textul (**Exemplul 2**) |
| 35–50 | Antet cu meniu (**Exemplul 3**) |
| 50–65 | Carduri în grilă și tabel (**Exemplul 4**) |
| 65–80 | Efecte și animație (**Exemplul 5**) |
| 80–90 | Adaptare la telefon (**Exemplul 6**) |
| 90–105 | Verificare cu lista (**Exemplul 7**) |
| 105–115 | Test cu un coleg · prezentare de un minut (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

Azi nu învățăm instrucțiuni noi. Le folosim pe cele din tot modulul:

| Din lecția | Folosim |
|------------|---------|
| 1–2 | `<link>`, selectori, variabile în `:root`, `rgba()`, degrade |
| 3–4 | fonturi cu rezervă, `line-height`, `box-sizing`, `border-radius`, `box-shadow` |
| 5–6 | Flexbox pentru meniu, Grid pentru carduri, `sticky` |
| 7–9 | `:hover`, `transition`, `@keyframes`, `@media`, `prefers-reduced-motion` |

---

## 1. Planul

### Exemplul 1 — Harta stilului

Înainte de a scrie CSS, hotărăște într-un comentariu:

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
- [ ] Deschide folderul `Prenume_Nume_W2_L10` cu „Mica enciclopedie” (`index.html`, `imagini`, `media`)  
- [ ] Creează folderul `Prenume_Nume_W3_L10` și **copiază** în el `index.html` și folderele `imagini` și `media` (originalul rămâne neschimbat)  
- [ ] Copiază și `tema.html` și `stil.css` din lecția trecută: le folosești la sfârșit  
- [ ] Notează într-un comentariu cele 4 culori și cele două fonturi  

---

## 2. `stil.css`, paleta și textul

### Exemplul 2 — Un fișier separat, paleta și textul

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

Apoi textul:

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

**Încearcă tu (5 min)**  
- [ ] Mută tot stilul din `<style>` în `stil.css` și leagă fișierul cu `<link>`  
- [ ] Scrie paleta ta în `:root` și înlocuiește culorile scrise direct cu `var(...)`  
- [ ] Pune fonturile și `line-height` pe `body` și pe titluri  

**Gata când:**  
- [ ] `stil.css` este legat prin `<link>`, iar blocul `<style>` a fost șters  
- [ ] Ai variabilele culorilor în `:root`  
- [ ] Textul se citește ușor (culori, mărime, `line-height`)  
- [ ] Imaginile au `max-width: 100%; height: auto;`  

---

## 3. Antet cu meniu

### Exemplul 3 — Antetul cu Flexbox

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

**Încearcă tu (5 min)**  
- [ ] Stilizează `<header>` cu culoarea principală și titlul alb  
- [ ] Fă meniul orizontal cu Flexbox, fără buline  
- [ ] Fă meniul `sticky` și derulează pagina  

**Gata când:**  
- [ ] Antetul și meniul sunt stilizate, iar meniul este orizontal  
- [ ] Meniul rămâne sus la derulare (`sticky`)  

---

## 4. Carduri în grilă

### Exemplul 4 — Cardurile și tabelul

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

**Încearcă tu (5 min)**  
- [ ] Pune `class="carte"` pe fiecare secțiune din `index.html`  
- [ ] Stilizează cardurile și așază-le în grilă cu `auto-fit`  
- [ ] Dă tabelului antet colorat și rânduri alternative  

**Gata când:**  
- [ ] Cardurile sunt într-o grilă adaptivă  
- [ ] Tabelul are antet colorat și rânduri alternative  

---

## 5. Efecte și animație

### Exemplul 5 — `:hover`, `transition` și o animație blândă

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

**Încearcă tu (5 min)**  
- [ ] Adaugă `:hover` și `:focus` pe linkurile din meniu, cu `transition`  
- [ ] Fă cardurile să se ridice la `:hover`  
- [ ] Adaugă o animație blândă de apariție și regula `prefers-reduced-motion` la sfârșit  

---

## 6. Telefonul

### Exemplul 6 — `@media`

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

**Încearcă tu (5 min)**  
- [ ] Adaugă regula `@media (max-width: 600px)` la sfârșitul `stil.css`  
- [ ] Deschide DevTools (**F12**; pe Mac Cmd + Option + I) în modul telefon  
- [ ] Verifică dacă apare derulare pe orizontală  

---

## 7. Verificarea

### Exemplul 7 — Lista de verificare

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

**Încearcă tu (6 min)**  
- [ ] Parcurge lista punct cu punct, în pagina ta  
- [ ] Repară fiecare punct nebifat  
- [ ] Pune `stil.css` și în `tema.html` (cu `<link>`) și verifică dacă arată bine și acolo  

---

## 8. Prezentarea

### Exemplul 8 — Prezentarea de un minut

Spune colegilor, în ordine:
1. „Pagina mea este despre …”  
2. „Am ales culorile … pentru că …”  
3. „Cel mai mândru sunt de …” (o parte a paginii)  
4. „Cel mai greu mi s-a părut …, iar soluția a fost: …”  
5. „Pe telefon pagina arată așa: …” (arată ecranul în DevTools)

Colegul care ascultă îți spune **un lucru reușit** și **un lucru care se poate îmbunătăți** (cu politețe).

**Încearcă tu (6 min)**  
- [ ] Scrie într-un comentariu cele cinci propoziții pentru prezentare  
- [ ] Exersează prezentarea o dată, singur, cu ceasul  
- [ ] Prezintă colegului și ascultă ce lucru reușit și ce îmbunătățire îți spune  

**Gata când:**  
- [ ] Ai bifat toate punctele din listă  
- [ ] Ai testat pagina cu un coleg  
- [ ] Ai făcut prezentarea de un minut  

---

## De făcut azi — „Enciclopedia în haine noi”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | `stil.css` legat corect, culori și fonturi alese, carduri cu chenar și colțuri rotunjite, un meniu orizontal cu Flexbox și o regulă `@media` pentru telefon |
| **Complet** | Minim + variabile CSS pentru paletă, grilă adaptivă, efecte la `:hover` cu `transition`, o animație cu `prefers-reduced-motion`, comentarii și cod indentat, verificare pe telefon în DevTools și o prezentare de un minut |

### Pasul 1 — Minim
Pornești de la Mica enciclopedie (copiată în folderul nou) și îi faci stilul în `stil.css`.

- [ ] Folderul `Prenume_Nume_W3_L10` are `index.html`, `stil.css` și folderele de imagini  
- [ ] `stil.css` este legat corect, iar `<style>` a fost șters  
- [ ] Ai culori și fonturi alese, carduri cu chenar și colțuri rotunjite, meniu orizontal și o regulă `@media`  
- [ ] Pagina se vede în browser, cu Live Server pornit  

### Pasul 2 — Complet
Îmbunătățești pagina:

- [ ] Ai paleta în variabile, folosite cu `var(...)`  
- [ ] Cardurile sunt într-o grilă adaptivă  
- [ ] Ai efecte la `:hover` cu `transition` și o animație blândă  
- [ ] Ai regula `prefers-reduced-motion` la sfârșit  
- [ ] Ai comentarii și cod indentat  
- [ ] Ai verificat pagina pe telefon în DevTools și ai făcut prezentarea de un minut  

---

## Bonus ★★★ — Provocare: Pagina cu două teme
*Doar dacă ai terminat Complet.*

Faci pagina să aibă două înfățișări.

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
1. Arată pagina unui membru al familiei, pe calculator și pe telefon, și întreabă ce a plăcut persoanei cel mai mult. Notează răspunsul într-un comentariu și, dacă vrei, fă o îmbunătățire.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Un antet cu degrade.**

```css
header {
  background: linear-gradient(135deg, var(--principala), var(--accent));
}
```

Un degrade în antet dă pagini culoare și personalitate, iar variabilele fac schimbarea ușoară.

**Acasă 2 — Linkuri cu subliniere la `:hover`.**

```css
a {
  text-decoration: none;
}

a:hover,
a:focus {
  text-decoration: underline;
}
```

Linkurile par curate și arată sublinierea doar când le atingi.

4. **Încă patru exerciții (B–E):**

**B — Autoevaluare.** Într-un comentariu din cod, notează de la 1 la 5 cât de bine ai înțeles fiecare lecție din modul (selectori, culori, text, cutii, Flexbox, Grid și `position`, `:hover`, animații, telefon). Scrie două lecții pe care vrei să le mai repeți.

**C — Găsește greșelile.** Găsește **3 greșeli** în codul de mai jos și repară greșelile:

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

**D — Explică cu cuvintele tale.** Într-un comentariu din cod: de ce este mai bine să ai un fișier `stil.css` separat? De ce folosim variabile pentru culori? Ce faci ca pagina ta să fie prietenoasă cu cineva care folosește doar tastatura sau cu cineva sensibil la mișcare?

**E — Ce urmează.** Scrie într-un comentariu două lucruri pe care ai vrea ca pagina ta să le facă singură (de exemplu să numere sau să răspundă la apăsarea unui buton). În Modulul 4 începem JavaScript.

## Ce urmează — Modulul 4
Începem **JavaScript**: pagina ta nu doar arată frumos, ci și **face lucruri**: răspunde la apăsări, calculează și își schimbă singură conținutul.

---

## Răspunsuri
- **Quiz scurt:** (1) cu `<link rel="stylesheet" href="stil.css">` în `<head>`; (2) rădăcina paginii, unde scriem variabilele paletei, de exemplu `--principala: navy;`, ca să le folosim peste tot cu `var(--principala)`; (3) pe `ul` pui `display: flex;` și `list-style: none;`; (4) cu o grilă: `display: grid;` și `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));`; (5) pui regula `@media (prefers-reduced-motion: reduce)` care oprește animațiile cu `animation: none;`.  
- **Proiectul:** pentru evaluare folosiți lista din Exemplul 7. Minimul de acceptare: `stil.css` legat corect, culori și fonturi alese, carduri cu chenar și colțuri rotunjite, meniu orizontal cu Flexbox și o regulă `@media`. Nu cereți animații dacă elevul nu le-a înțeles; contează să nu fie rău făcute.  
- **Tema, exercițiul B:** nu are răspuns corect; este pentru elev. Notați lecțiile pe care le cere repetate și reveniți la ele.  
- **Tema, exercițiul C:** (1) `var(culoare)` trebuie `var(--culoare)`; (2) `transition: transform 0.3;` trebuie `0.3s`; (3) `padding: 10` trebuie `padding: 10px`.  
- **Tema, exercițiul D:** un singur loc pentru stil, ușor de schimbat pentru mai multe pagini; o culoare schimbată într-un singur loc se schimbă peste tot; `:focus` vizibil, linkuri mari, `prefers-reduced-motion`.  
- **Tema, exercițiul E:** nu are răspuns corect; este o pregătire pentru JavaScript. Notați ideile elevilor și reveniți la ele în Modulul 4.  
- **Dacă ritmul clasei este lent:** Exemplul 8 (prezentarea) se poate face în lecția următoare; lista de verificare din Exemplul 7 rămâne obligatorie.  
- **Notă pentru profesor:** dacă un elev nu are Mica enciclopedie din Modulul 2, poate porni de la orice pagină cu antet, meniu și 3–4 secțiuni (un hobby, un sport, un joc); evitați persoane și date personale. Pentru prezentări, alegeți să nu se compare paginile între ele: fiecare spune ce a făcut bine. Dacă lipsesc imagini, cardurile pot fi doar cu text și culori.
