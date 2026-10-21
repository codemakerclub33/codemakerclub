# LECȚIA 3 — Text și fonturi
**Modulul 3 · CSS: Stil și culoare · 2 ore**  
**Code Maker Club · CSS Stylist**

> Pe un site se citește mult. Un text bine aranjat se citește cu plăcere, iar unul înghesuit sau prea mic îți dă dureri de cap. Azi înveți să alegi **literele**, **mărimea**, **grosimea** și **spațiile** care fac textul plăcut.  
> Proiect: **„Povestea mea cu litere frumoase”** · folder: `Prenume_Nume_W3_L3` (ex. `Ana_Pop_W3_L3`)

---

## Obiectiv
La finalul orei știi să alegi un font cu o listă de rezervă, să schimbi mărimea cu `px` și cu `rem`, să îngroși și să înclini textul, să alinezi textul și să îi dai aer cu `line-height` și `letter-spacing`, să schimbi decorarea și majusculele și să faci o pagină de citit confortabilă.  
**Minim:** o pagină cu un font ales, titluri de mărimi diferite și paragrafe cu spațiu între rânduri.  
**Ținta orei (Complet):** + text cu umbră, titlu cu majuscule și spațiu între litere, link fără subliniere, o coloană de text îngustă și centrată și o explicație pentru lista de rezervă a fonturilor.

## De ce contează
Același text poate arăta ca o carte frumoasă sau ca o pagină greu de citit, doar prin felul în care îl aranjezi. Oamenii citesc pe telefoane, pe tablete și pe calculatoare, deci textul trebuie să fie **clar** peste tot.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–35 | `font-family` și lista de rezervă (**Exemplul 1**) |
| 35–55 | Mărimea textului · grosime și înclinare (**Exemplele 2–3**) |
| 55–75 | Aliniere · spațiu între rânduri și litere (**Exemplele 4–5**) |
| 75–95 | Subliniere, majuscule, umbră (**Exemplele 6–7**) |
| 95–115 | Pagina de citit · proiect (**Exemplele 8–10**) |
| 115–120 | Recap și temă |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- `rgb()` și `rgba()` amestecă culorile, iar `rgba()` poate fi transparent;
- `linear-gradient` face un degrade;
- variabilele din `:root` păstrează paleta într-un singur loc;
- stilul stă în `stil.css`, legat cu `<link>`.

**Încearcă tu (4 min)**  
- [ ] Creează folderul `Prenume_Nume_W3_L3` cu `index.html` (scheletul complet, legat la `stil.css`) și `stil.css`  
- [ ] Pune în `<body>` un `<h1>`, doi `<h2>` și patru paragrafe despre un animal inventat de tine  

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

**Gata când:**  
- [ ] Ai ales un font pentru tot textul și altul pentru titluri  
- [ ] Fiecare `font-family` se termină cu un grup general (`sans-serif`, `serif` sau `monospace`)  
- [ ] Poți explica de ce scriem mai multe fonturi în aceeași regulă  

---

## 3. Mărime, grosime, înclinare

### Exemplul 2 — `font-size`: `px` și `rem`

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
```

Ai două feluri de a scrie o mărime:

| Unitate | Ce înseamnă |
|---------|-------------|
| `px` | pixeli: o mărime fixă |
| `rem` | un **multiplu al mărimii de bază** a paginii (de obicei 16px): `1rem` = 16px, `2rem` = 32px, `0.5rem` = 8px |

`rem` este bun pentru că se adaptează: dacă un om are nevoie de litere mai mari în setările telefonului, o pagină făcută cu `rem` crește odată cu ele.

> Între număr și unitate **nu se pune spațiu**: `18px`, nu `18 px`.

### Exemplul 3 — Grosime și înclinare

```css
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

- `font-weight: bold;` îngroașă textul (și `normal` îl aduce la normal). Poți scrie și numere: `100` e foarte subțire, `400` normal, `700` gros, `900` foarte gros. Nu toate fonturile au toate grosimile;  
- `font-style: italic;` înclină literele.

**Încearcă tu (6 min)**  
- [ ] Dă titlului `<h1>` o mărime de `2.5rem` și paragrafelor `1.1rem`  
- [ ] Fă un cuvânt gros și un cuvânt înclinat, cu clase  
- [ ] Schimbă fontul paginii de două ori și vezi cum se schimbă înfățișarea  

---

## 4. Aliniere și spațiu

### Exemplul 4 — Alinierea textului

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
```

`text-align` poate fi `left` (stânga, cel normal), `center` (mijloc), `right` (dreapta) sau `justify` (textul umple rândul de la o margine la alta, ca în ziare).

### Exemplul 5 — Aer între rânduri și între litere

```css
p {
  line-height: 1.6;
}

.titlu-larg {
  letter-spacing: 3px;
}
```

- `line-height` este **înălțimea unui rând**. Scrisă ca un număr fără unitate (`1.6`), înseamnă „de 1,6 ori mărimea literei”. Un text se citește plăcut cu `line-height` între `1.4` și `1.8`;  
- `letter-spacing` este spațiul dintre **litere**. Un pic de spațiu (`1px`–`3px`) face titlurile să respire.

Compară: un paragraf cu `line-height: 1` este înghesuit și obosește ochii, iar unul cu `line-height: 1.6` se citește ușor.

**Gata când:**  
- [ ] Ai centrat un titlu și ai pus `line-height` pe paragrafe  
- [ ] Ai comparat un paragraf cu `line-height: 1` cu unul cu `1.6`  
- [ ] Ai folosit `letter-spacing` pe un titlu  

---

## 5. Decorare și efecte

### Exemplul 6 — `text-decoration` și `text-transform`

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

### Exemplul 7 — Umbra textului

```css
.titlu-umbra {
  color: navy;
  text-shadow: 2px 2px 4px gray;
}
```

`text-shadow` are patru valori: cât se mută umbra spre **dreapta**, cât în **jos**, cât este de **încețoșată** și **culoarea** ei. Folosește umbra cu măsură: pe litere prea colorate sau cu umbră prea mare, textul se citește greu.

**Încearcă tu (6 min)**  
- [ ] Scoate sublinierea unui link și pune o culoare care se vede  
- [ ] Scrie un titlu cu `uppercase` și `letter-spacing`  
- [ ] Pune o umbră mică pe un titlu și verifică dacă se citește bine  

---

## 6. Pagina de citit și proiectul

### Exemplul 8 — O coloană de text care se citește plăcut

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

### Exemplul 9 — Un titlu cu personalitate

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

### Exemplul 10 — „Povestea mea cu litere frumoase”

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

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Povestea mea cu litere frumoase” (obligatoriu)
Fă o pagină cu `index.html` și `stil.css`, care conține **o poveste scurtă** inventată de tine, cu:
- cel puțin **două fonturi** (unul pentru titluri, unul pentru text), fiecare cu listă de rezervă;
- un titlu mare cu `text-transform` și `letter-spacing`;
- mărimi scrise în `rem`;
- text cu `line-height` între `1.4` și `1.8`;
- o coloană îngustă și centrată (`max-width` și `margin: 0 auto;`);
- un cuvânt gros și un cuvânt înclinat, cu clase;
- cel puțin două comentarii în CSS.

Verifică pagina cu Live Server.

### Exercițiul B — Ce face regula?
Spune ce face fiecare regulă: (1) `font-size: 2rem;`; (2) `letter-spacing: 4px;`; (3) `text-transform: uppercase;`; (4) `line-height: 1.8;`; (5) `text-decoration: none;` pe un link.

### Exercițiul C — Scrie regula
Scrie în CSS: (1) paragrafele au font `Verdana` cu rezervă `sans-serif` și mărimea `1.2rem`; (2) clasa `.pret-vechi` are textul tăiat și gri; (3) titlurile `<h2>` sunt centrate și au umbră mică.

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
p {
  font-family: Arial, sans-serif;
  font-size: 18 px;
  text-align: middle;
  font-weight: heavy;
}
```

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: de ce scriem mai multe fonturi în `font-family`? De ce este bine ca un paragraf să aibă `line-height` mai mare de 1? De ce nu punem textul pe toată lățimea unui ecran mare?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W3_L3` are `index.html` și `stil.css`  
- [ ] Pagina are fonturi cu rezervă, mărimi în `rem`, coloană îngustă și titlu cu efecte  
- [ ] Textul se citește ușor, de la distanță de brațe  
- [ ] Ai răspuns la exercițiile B–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Fă două variante ale paginii: una cu font `serif` și una cu `sans-serif`, și alege varianta care se citește mai bine  
- [ ] Încearcă `first-letter` pentru o literă mare la începutul poveștii:  
  `.poveste p:first-of-type::first-letter { font-size: 2.5rem; font-weight: bold; }`  
- [ ] Fă un `<blockquote>` cu stil: înclinat, cu o linie colorată în stânga (`border-left: 4px solid tomato; padding-left: 15px;`)  
- [ ] Deschide DevTools (**F12**), apasă pe un paragraf și încearcă în panoul **Styles** valori diferite pentru `line-height` și `font-size`, ca să vezi efectul pe loc  

---

## Greșeli frecvente
1. **Ai uitat grupul general** (`sans-serif`, `serif`) la sfârșitul listei de fonturi.  
2. **Ai uitat ghilimelele** la un font cu spațiu: `"Courier New"`.  
3. **Ai scris `18 px`** cu spațiu — scrie `18px`.  
4. **Ai scris `text-align: middle`** — corect este `center`.  
5. **Ai scris `font-weight: heavy`** — valorile sunt `bold`, `normal` sau numere.  
6. **Ai pus `line-height` cu unitate și valoare mică** (`line-height: 1px`) — rândurile se suprapun; scrie `1.6`.  
7. **Ai pus prea multe fonturi** — cel mult două pe pagină.  
8. **Ai scos sublinierea de la un link** fără să schimbi culoarea lui — nu se mai vede că poate fi apăsat.  
9. **Umbră prea mare sau prea colorată** — textul se citește greu.  
10. **Textul se întinde pe toată lățimea ecranului** — pune `max-width` ca rândurile să nu fie prea lungi.  

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
Fă o pagină „Fișa unui personaj de poveste” (un erou inventat), cu **un font pentru titluri** și **unul pentru text**, un titlu cu `uppercase`, o coloană centrată și un citat stilat cu o linie colorată în stânga. Salvează în `Prenume_Nume_W3_L3`.

## Ce urmează — Lecția 4
Învățăm că **fiecare element este o cutie**, cu conținut, spațiu în interior, chenar și spațiu în afară. Cu cutiile învățăm să așezăm lucrurile exact unde vrem.

---

## Răspunsuri pentru profesor
- **Quiz scurt:** (1) fiecare calculator are alte fonturi, deci browserul încearcă primul font și, dacă nu îl găsește, trece la următorul, până la grupul general; (2) `px` este o mărime fixă, iar `rem` este un multiplu al mărimii de bază a paginii (`1rem` = 16px) și se adaptează; (3) între `1.4` și `1.8`, de exemplu `1.6`; (4) cu `text-decoration: none;`; (5) cu `text-transform: uppercase;`.  
- **Exercițiul B:** (1) mărimea literelor este de două ori mărimea de bază (32px); (2) 4px între litere; (3) tot textul se afișează cu majuscule; (4) fiecare rând are înălțimea de 1,8 ori mărimea literei; (5) linkul nu mai este subliniat.  
- **Exercițiul C:** (1) `p { font-family: Verdana, sans-serif; font-size: 1.2rem; }`; (2) `.pret-vechi { text-decoration: line-through; color: gray; }`; (3) `h2 { text-align: center; text-shadow: 1px 1px 2px gray; }`.  
- **Exercițiul D:** (1) `18 px` trebuie `18px`; (2) `middle` trebuie `center`; (3) `heavy` trebuie `bold` (sau un număr, de exemplu `700`).  
- **Exercițiul E:** pentru că nu toate calculatoarele au același font, deci browserul încearcă pe rând; un `line-height` mai mare dă aer și se citește mai ușor; rândurile prea lungi obosesc ochiul, deci limităm lățimea.  
- **Notă pentru profesor:** în această lecție folosim doar fonturi deja instalate pe calculator. Fonturile de pe internet (de exemplu de la servicii externe) trimit date către servere din afară, deci le introducem doar când profesorul decide cum și de unde, ca să respectăm regulile despre datele personale. `padding`, `margin` și `max-width` sunt folosite ca „recomandare” și se explică în lecția 4.
