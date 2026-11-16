# LECȚIA 3 — Povestea cu litere frumoase
### Text și fonturi
**Modulul 3 · CSS: Stil și culoare · 2 ore**  
**Code Maker Club · CSS Stylist**

> Pe un site se citește mult. Un text bine aranjat se citește cu plăcere, iar unul înghesuit sau prea mic îți dă dureri de cap. Azi înveți să alegi **literele**, **mărimea**, **grosimea** și **spațiile** care fac textul plăcut.  
> Proiect: **„Povestea cu litere frumoase”** · folder: `Prenume_Nume_W3_L3` (ex. `Ana_Pop_W3_L3`)

---

## Ce facem azi
La final ai o pagină de citit cu un font ales, titluri de mărimi diferite, paragrafe cu aer între rânduri și o coloană îngustă și centrată. Același text poate arăta ca o carte frumoasă sau ca o pagină greu de citit, doar prin felul în care îl aranjezi. Oamenii citesc pe telefoane, pe tablete și pe calculatoare, deci textul trebuie să fie **clar** peste tot.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · aducem pagina cu articolul de pe Wikipedia |
| 15–30 | `font-family` și lista de rezervă (**Exemplul 1**) |
| 30–45 | Mărimea textului · grosime și înclinare (**Exemplul 2**) |
| 45–65 | Aliniere · spațiu între rânduri și litere · subliniere și majuscule (**Exemplele 3–4**) |
| 65–80 | Umbra textului · coloana de citit (**Exemplele 5–6**) |
| 80–100 | Un titlu cu personalitate (**Exemplul 7**) |
| 100–115 | Mini-proiect: povestea cu litere frumoase (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `font-family` | Alege fontul, cu listă de rezervă | `Georgia, serif` |
| `font-size` | Mărimea literelor | `1.1rem` |
| `font-weight`, `font-style` | Grosime și înclinare | `bold`, `italic` |
| `text-align`, `line-height`, `letter-spacing` | Aliniere, aer între rânduri și litere | `center`, `1.6` |
| `text-decoration`, `text-transform`, `text-shadow` | Subliniere, majuscule, umbră | `none`, `uppercase` |
| `max-width` și `margin: 0 auto;` | Coloană îngustă și centrată | `600px` |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- `rgb()` și `rgba()` amestecă culorile, iar `rgba()` poate fi transparent;
- `linear-gradient` face un degrade;
- variabilele din `:root` păstrează paleta într-un singur loc;
- stilul stă în `stil.css`, legat cu `<link>`.

**Încearcă tu (8 min)**  
- [ ] Creează folderul `Prenume_Nume_W3_L3` cu `index.html` (scheletul complet, legat la `stil.css`) și `stil.css`  
- [ ] Pune în `<body>` un `<h1>`, doi `<h2>` și patru paragrafe despre un animal inventat de tine  
- [ ] Copiază în folder `tema.html`, `stil.css` și folderele `imagini` și `media` din lecția trecută  
- [ ] Deschide `tema.html` cu Live Server și citește-ți textul: cât de ușor se citește?  

> De aici înainte, exemplele arată ce scrii în `<body>` și, separat, ce scrii în `stil.css`.

---

## 2. Fontul: forma literelor

### Exemplul 1 — `font-family` și lista de rezervă

```css
body {
  font-family: Arial, sans-serif;
}

h1 {
  font-family: Georgia, serif;
}

.cod {
  font-family: "Courier New", monospace;
}
```

`font-family` alege **felul literelor**. Observă că scrii mai multe nume, separate prin virgulă. De ce? Fiecare calculator are alte fonturi instalate. Browserul încearcă **primul** font din listă. Dacă nu îl găsește, încearcă al doilea, apoi al treilea. Ultimul nume este un **grup general** care există mereu:

| Grup general | Cum arată | Exemple de fonturi |
|--------------|-----------|---------------------|
| `sans-serif` | litere simple, fără „picioruși” | Arial, Verdana, Trebuchet MS |
| `serif` | litere cu „picioruși”, ca în cărți | Georgia, Times New Roman |
| `monospace` | toate literele la fel de late, ca în cod | Courier New |
| `cursive` | litere ca scrise de mână | (variază mult) |

> Numele de font care are **spațiu** în el se scrie între ghilimele: `"Courier New"`, `"Trebuchet MS"`.

> Fonturile de pe internet există, dar le folosim mai târziu, împreună cu profesorul. Azi le folosim doar pe cele care sunt deja în calculator.

**Încearcă tu (6 min)**  
- [ ] Alege un font pentru tot textul și altul pentru titluri  
- [ ] Termină fiecare `font-family` cu un grup general  
- [ ] În `tema.html`, pune un font cu `serif` pe `body` și un font diferit pe titluri  

**Gata când:**  
- [ ] Fiecare `font-family` se termină cu un grup general (`sans-serif`, `serif` sau `monospace`)  
- [ ] Poți explica de ce scriem mai multe fonturi în aceeași regulă  

---

## 3. Mărime, grosime, înclinare

### Exemplul 2 — `font-size`, grosime și înclinare

```css
h1 {
  font-size: 40px;
}

p {
  font-size: 1.1rem;
}

.mic {
  font-size: 0.8rem;
}

.gros {
  font-weight: bold;
}

.subtire {
  font-weight: 300;
}

.inclinat {
  font-style: italic;
}
```

Ai două feluri de a scrie o mărime:

| Unitate | Ce înseamnă |
|---------|-------------|
| `px` | pixeli: o mărime fixă |
| `rem` | un **multiplu al mărimii de bază** a paginii (de obicei 16px): `1rem` = 16px, `2rem` = 32px, `0.5rem` = 8px |

`rem` este bun pentru că se adaptează: dacă un om are nevoie de litere mai mari în setările telefonului, o pagină făcută cu `rem` crește odată cu ele.

> Între număr și unitate **nu se pune spațiu**: `18px`, nu `18 px`.

- `font-weight: bold;` îngroașă textul (și `normal` îl aduce la normal). Poți scrie și numere: `100` e foarte subțire, `400` normal, `700` gros, `900` foarte gros. Nu toate fonturile au toate grosimile;  
- `font-style: italic;` înclină literele.

**Încearcă tu (6 min)**  
- [ ] Dă titlului `<h1>` o mărime de `2.5rem` și paragrafelor `1.1rem`  
- [ ] Fă un cuvânt gros și un cuvânt înclinat, cu clase  
- [ ] În `tema.html`, dă titlului `2.2rem`, paragrafelor `1.1rem` și pune un cuvânt important în gros  

---

## 4. Aliniere, aer și decorare

### Exemplul 3 — Aliniere, `line-height` și `letter-spacing`

```css
h1 {
  text-align: center;
}

.dreapta {
  text-align: right;
}

.egal {
  text-align: justify;
}

p {
  line-height: 1.6;
}

.titlu-larg {
  letter-spacing: 3px;
}
```

`text-align` poate fi `left` (stânga, cel normal), `center` (mijloc), `right` (dreapta) sau `justify` (textul umple rândul de la o margine la alta, ca în ziare).

- `line-height` este **înălțimea unui rând**. Scrisă ca un număr fără unitate (`1.6`), înseamnă „de 1,6 ori mărimea literei”. Un text se citește plăcut cu `line-height` între `1.4` și `1.8`;  
- `letter-spacing` este spațiul dintre **litere**. Un pic de spațiu (`1px`–`3px`) face titlurile să respire.

Compară: un paragraf cu `line-height: 1` este înghesuit și obosește ochii, iar unul cu `line-height: 1.6` se citește ușor.

### Exemplul 4 — `text-decoration` și `text-transform`

```css
a {
  text-decoration: none;
  color: crimson;
}

.taiat {
  text-decoration: line-through;
}

.subliniat {
  text-decoration: underline;
}

.titlu-mare {
  text-transform: uppercase;
}

.nume {
  text-transform: capitalize;
}
```

- `text-decoration: none;` scoate sublinierea de la linkuri. Sublinierea îți arată că ceva se poate apăsa; dacă o scoți, fă linkul **altfel colorat** ca să se vadă;  
- `line-through` taie textul cu o linie (de exemplu un preț vechi), iar `underline` îl subliniază;  
- `text-transform: uppercase;` scrie totul cu **majuscule**, fără să schimbi textul din HTML; `capitalize` face prima literă a fiecărui cuvânt mare.

**Încearcă tu (8 min)**  
- [ ] Centrează un titlu și pune `line-height` pe paragrafe  
- [ ] Compară un paragraf cu `line-height: 1` cu unul cu `1.6`  
- [ ] În `tema.html`, pune `line-height: 1.7` pe paragrafe și `uppercase` cu `letter-spacing` pe `h1`  

**Gata când:**  
- [ ] Ai centrat un titlu și ai pus `line-height` pe paragrafe  
- [ ] Ai folosit `letter-spacing` și `text-transform` pe un titlu  

---

## 5. Umbră și coloana de citit

### Exemplul 5 — Umbra textului

```css
.titlu-umbra {
  color: navy;
  text-shadow: 2px 2px 4px gray;
}
```

`text-shadow` are patru valori: cât se mută umbra spre **dreapta**, cât în **jos**, cât este de **încețoșată** și **culoarea** ei. Folosește umbra cu măsură: pe litere prea colorate sau cu umbră prea mare, textul se citește greu.

### Exemplul 6 — O coloană de text care se citește plăcut

Rândurile foarte lungi se citesc greu, pentru că ochiul se pierde. Fă o coloană **îngustă și centrată**:

```css
body {
  font-family: Georgia, serif;
  font-size: 1.1rem;
  line-height: 1.7;
  color: #2b2b2b;
  background-color: #fffaf0;
}

.poveste {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
```

```html
<div class="poveste">
  <h1>Povestea mea</h1>
  <p>A fost odată ca niciodată…</p>
</div>
```

- `max-width: 600px;` înseamnă „cel mult 600px lățime”: pe ecrane mici textul se micșorează, pe cele mari se oprește la 600px;  
- `margin: 0 auto;` centrează cutia pe orizontală (0 sus și jos, `auto` stânga-dreapta). Lecția 4 explică mai mult `margin`.

**Încearcă tu (6 min)**  
- [ ] Pune o umbră mică pe un titlu și verifică dacă se citește bine  
- [ ] Pune textul într-o coloană cu `max-width: 600px;` și `margin: 0 auto;`  
- [ ] În `tema.html`, pune tot articolul într-un `<div class="articol">` îngust și centrat  

---

## 6. Un titlu cu personalitate

### Exemplul 7 — Fonturi, majuscule și umbră împreună

```css
.titlu-poveste {
  font-family: "Trebuchet MS", Verdana, sans-serif;
  font-size: 2.2rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #7b2d26;
  text-shadow: 1px 1px 2px #d9b3a8;
}
```

Titlul folosește un font diferit de al restului paginii, majuscule și spațiu între litere. Alege **cel mult două fonturi** pe pagină: unul pentru titluri și unul pentru text.

**Încearcă tu (8 min)**  
- [ ] Fă un titlu cu font diferit, majuscule, spațiu între litere și umbră mică  
- [ ] Verifică: sunt cel mult două fonturi pe pagină?  
- [ ] În `tema.html`, dă titlului și celor doi `h2` același stil, cu culoare din paleta ta  
- [ ] Citește pagina de la distanță de brațe: se vede ușor titlul?  

**Gata când:**  
- [ ] Titlul are un font diferit, majuscule și spațiu între litere  
- [ ] Pagina folosește cel mult două fonturi  

---

## 7. Mini-proiect

### Exemplul 8 — „Povestea cu litere frumoase”

Fișierul `index.html`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Povestea mea</title>
  <link rel="stylesheet" href="stil.css">
</head>
<body>
  <div class="poveste">
    <h1 class="titlu-poveste">Dragonul care se temea de foc</h1>
    <p class="autor">O poveste de Ana</p>

    <h2>Începutul</h2>
    <p>Într-o peșteră mare trăia un dragon mic, pe nume <span class="nume-erou">Scânteie</span>. Toți dragonii scuipau foc, dar el nu putea. Se temea de propria lui flacără.</p>

    <h2>Prietenul</h2>
    <p>Într-o zi a întâlnit o veveriță curajoasă. „Focul nu este periculos când știi să îl ții în control”, a spus ea. <em>Hai să exersăm împreună!</em></p>

    <p class="final">Și așa a învățat Scânteie să fie curajos.</p>
  </div>
</body>
</html>
```

Fișierul `stil.css`:

```css
/* Pagina de citit */
body {
  font-family: Georgia, serif;
  font-size: 1.1rem;
  line-height: 1.7;
  color: #2b2b2b;
  background-color: #fffaf0;
}

.poveste {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

/* Titluri */
.titlu-poveste {
  font-family: "Trebuchet MS", Verdana, sans-serif;
  font-size: 2.2rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #7b2d26;
  text-shadow: 1px 1px 2px #d9b3a8;
}

h2 {
  font-family: "Trebuchet MS", Verdana, sans-serif;
  color: #7b2d26;
}

/* Detalii */
.autor {
  text-align: center;
  font-style: italic;
  color: gray;
}

.nume-erou {
  font-weight: bold;
  color: #c0392b;
}

.final {
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
}
```

Fă pagina cu **povestea ta inventată** (un animal, o aventură, un joc). Folosește cel puțin două fonturi, mărimi în `rem`, un titlu cu majuscule și spațiu între litere și o coloană îngustă și centrată.

**Gata când:**  
- [ ] Pagina are un font pentru text și unul pentru titluri, fiecare cu listă de rezervă  
- [ ] Textul este într-o coloană îngustă, centrată, cu `line-height` între 1.4 și 1.8  
- [ ] Ai folosit `text-transform`, `letter-spacing` și cel puțin o umbră sau o înclinare  

---

## De făcut azi — „Povestea cu litere frumoase”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | O pagină cu un font ales, titluri de mărimi diferite și paragrafe cu spațiu între rânduri |
| **Complet** | Minim + text cu umbră, titlu cu majuscule și spațiu între litere, link fără subliniere, coloană îngustă și centrată și o explicație pentru lista de rezervă a fonturilor |

### Pasul 1 — Minim
Pe scheletul complet, legat la `stil.css`, scrie o poveste scurtă și stilează-o cu un font, mărimi diferite și `line-height`.

- [ ] Folderul `Prenume_Nume_W3_L3` are `index.html` și `stil.css`  
- [ ] Pagina are un font ales, titluri de mărimi diferite și `line-height` pe paragrafe  
- [ ] Pagina se vede în browser, cu Live Server pornit  

### Pasul 2 — Complet
Îmbunătățești pagina:

- [ ] Ai **două fonturi** (unul pentru titluri, unul pentru text), fiecare cu listă de rezervă  
- [ ] Titlul mare are `text-transform` și `letter-spacing`  
- [ ] Mărimile sunt în `rem`  
- [ ] Ai o coloană îngustă și centrată (`max-width` și `margin: 0 auto;`)  
- [ ] Ai un cuvânt gros și un cuvânt înclinat, cu clase  
- [ ] Ai cel puțin două comentarii în CSS  

---

## Bonus ★★★ — Provocare: Articolul tău ca o carte
*Doar dacă ai terminat Complet.*

Faci `tema.html` să arate ca o pagină de carte.

- [ ] Pune în `tema.html` o coloană îngustă, `line-height` plăcut, un titlu cu majuscule și spațiu între litere și un font cu rezervă  
- [ ] Încearcă o literă mare la începutul articolului:  
  `.articol p:first-of-type::first-letter { font-size: 2.5rem; font-weight: bold; }`  
- [ ] Fă un `<blockquote>` cu stil: înclinat, cu o linie colorată în stânga (`border-left: 4px solid tomato; padding-left: 15px;`)  
- [ ] Deschide DevTools (**F12**; pe Mac Cmd + Option + I), apasă pe un paragraf și încearcă în panoul **Styles** valori diferite pentru `line-height` și `font-size`, ca să vezi efectul pe loc  

---

## Greșeli frecvente
1. **Ai uitat grupul general** (`sans-serif`, `serif`) la sfârșitul listei de fonturi.  
2. **Ai uitat ghilimelele** la un font cu spațiu: `"Courier New"`.  
3. **Ai scris `18 px`** cu spațiu — scrie `18px`.  
4. **Ai scris `text-align: middle`** — corect este `center`.  
5. **Ai scris `font-weight: heavy`** — valorile sunt `bold`, `normal` sau numere.  
6. **Ai pus `line-height: 1px`** — rândurile se suprapun; scrie `1.6`.  
7. **Ai pus prea multe fonturi** — cel mult două pe pagină.  
8. **Ai scos sublinierea de la un link** fără să schimbi culoarea lui — nu se mai vede că poate fi apăsat.  

---

## Recapitulare pe scurt
1. `font-family` alege fontul, cu o listă de rezervă care se termină cu un grup general.  
2. `font-size` se scrie în `px` (fix) sau `rem` (se adaptează).  
3. `font-weight` îngroașă, `font-style: italic` înclină.  
4. `text-align` așază textul; `line-height` dă aer între rânduri; `letter-spacing` între litere.  
5. `text-decoration` și `text-transform` schimbă sublinierea și majusculele.  
6. `text-shadow` face umbră; `max-width` și `margin: 0 auto;` fac o coloană îngustă și centrată.

## Quiz scurt
- De ce scriem mai multe fonturi în `font-family`?  
- Care este diferența dintre `px` și `rem`?  
- Ce valoare de `line-height` face un text plăcut de citit?  
- Cum scoți sublinierea de la un link?  
- Cum faci un titlu cu majuscule fără să rescrii titlul?

## Temă
1. Fă o pagină „Fișa unui personaj de poveste” (un erou inventat), cu **un font pentru titluri** și **unul pentru text**, un titlu cu `uppercase`, o coloană centrată și un citat stilat cu o linie colorată în stânga. Salvează în `Prenume_Nume_W3_L3`.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Prima literă mai mare.**

```css
.poveste p:first-of-type::first-letter {
  font-size: 2.5rem;
  font-weight: bold;
  color: crimson;
}
```

Cu `::first-letter` stilezi doar prima literă a unui paragraf, ca într-o carte veche.

**Acasă 2 — Spațiu între cuvinte.**

```css
.larg {
  word-spacing: 8px;
}

.indentat {
  text-indent: 30px;
}
```

`word-spacing` dă aer între cuvinte, iar `text-indent` împinge primul rând al paragrafului spre dreapta.

4. **Încă patru exerciții (B–E):**

**B — Ce face regula?** Spune ce face fiecare regulă: (1) `font-size: 2rem;`; (2) `letter-spacing: 4px;`; (3) `text-transform: uppercase;`; (4) `line-height: 1.8;`; (5) `text-decoration: none;` pe un link.

**C — Scrie regula.** Scrie în CSS: (1) paragrafele au font `Verdana` cu rezervă `sans-serif` și mărimea `1.2rem`; (2) clasa `.pret-vechi` are textul tăiat și gri; (3) titlurile `<h2>` sunt centrate și au umbră mică.

**D — Găsește greșelile.** Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
p {
  font-family: Arial, sans-serif;
  font-size: 18 px;
  text-align: middle;
  font-weight: heavy;
}
```

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: de ce scriem mai multe fonturi în `font-family`? De ce este bine ca un paragraf să aibă `line-height` mai mare de 1? De ce nu punem textul pe toată lățimea unui ecran mare?

## Ce urmează — Lecția 4
Învățăm că **fiecare element este o cutie**, cu conținut, spațiu în interior, chenar și spațiu în afară. Cu cutiile învățăm să așezăm lucrurile exact unde vrem.

---

## Răspunsuri
- **Quiz scurt:** (1) fiecare calculator are alte fonturi, deci browserul încearcă primul font și, dacă nu îl găsește, trece la următorul, până la grupul general; (2) `px` este o mărime fixă, iar `rem` este un multiplu al mărimii de bază a paginii (`1rem` = 16px) și se adaptează; (3) între `1.4` și `1.8`, de exemplu `1.6`; (4) cu `text-decoration: none;`; (5) cu `text-transform: uppercase;`.  
- **Tema, exercițiul B:** (1) mărimea literelor este de două ori mărimea de bază (32px); (2) 4px între litere; (3) tot textul se afișează cu majuscule; (4) fiecare rând are înălțimea de 1,8 ori mărimea literei; (5) linkul nu mai este subliniat.  
- **Tema, exercițiul C:** (1) `p { font-family: Verdana, sans-serif; font-size: 1.2rem; }`; (2) `.pret-vechi { text-decoration: line-through; color: gray; }`; (3) `h2 { text-align: center; text-shadow: 1px 1px 2px gray; }`.  
- **Tema, exercițiul D:** (1) `18 px` trebuie `18px`; (2) `middle` trebuie `center`; (3) `heavy` trebuie `bold` (sau un număr, de exemplu `700`).  
- **Tema, exercițiul E:** pentru că nu toate calculatoarele au același font, deci browserul încearcă pe rând; un `line-height` mai mare dă aer și se citește mai ușor; rândurile prea lungi obosesc ochiul, deci limităm lățimea.  
- **Dacă ritmul clasei este lent:** Exemplul 7 se poate sări; titlul din proiect folosește oricum aceleași proprietăți.  
- **Notă pentru profesor:** în această lecție folosim doar fonturi deja instalate pe calculator. Fonturile de pe internet (de exemplu de la servicii externe) trimit date către servere din afară, deci le introducem doar când profesorul decide cum și de unde, ca să respectăm regulile despre datele personale. `padding`, `margin` și `max-width` sunt folosite ca „recomandare” și se explică în lecția 4.
