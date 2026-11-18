# LECȚIA 3 — Litere cu personalitate
### Text și fonturi
**Modulul 3 · CSS: Stil și culoare · 2 ore**  
**Code Maker Club · CSS Stylist**

> Pe un site se citește mult. Un text bine aranjat se citește cu plăcere, iar unul înghesuit sau prea mic îți dă dureri de cap. Azi înveți să alegi **literele**, **mărimea**, **grosimea** și **spațiile** care fac textul plăcut. Lucrezi tot pe `tema.html`, în același `stil.css`.  
> Proiect: **„Litere cu personalitate”** · folder: `Prenume_Nume_W3_L3` (ex. `Ana_Pop_W3_L3`)

---

## Ce facem azi
La final pagina ta are un font ales pentru text și altul pentru titluri, mărimi în `rem`, paragrafe cu aer între rânduri, un titlu cu litere mari și linkuri curate în meniu. Același text poate arăta ca o carte frumoasă sau ca o pagină greu de citit, doar prin felul în care îl aranjezi. Oamenii citesc pe telefoane, pe tablete și pe calculatoare, deci textul trebuie să fie **clar** peste tot.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · copiem folderul lecției trecute |
| 15–35 | `font-family` și lista de rezervă · mărimea textului (**Exemplele 1–2**) |
| 35–50 | Grosime și înclinare (**Exemplul 3**) |
| 50–70 | Aliniere și `line-height` · spațiul dintre litere și majusculele (**Exemplele 4–5**) |
| 70–85 | Linkuri fără subliniere · un titlu cu personalitate (**Exemplele 6–7**) |
| 85–105 | Mini-proiect: toate la un loc (**Exemplul 8**) |
| 105–115 | Verificare: se citește bine tot textul? |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `font-family` | Alege fontul, cu listă de rezervă | `Georgia, serif` |
| `font-size` | Mărimea literelor | `1.1rem` |
| `font-weight`, `font-style` | Grosime și înclinare | `bold`, `italic` |
| `text-align`, `line-height` | Aliniere și aer între rânduri | `center`, `1.6` |
| `letter-spacing`, `text-transform` | Aer între litere, majuscule | `2px`, `uppercase` |
| `text-decoration` | Subliniere (o scoatem de la linkuri) | `none` |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- `rgb()` și `rgba()` amestecă culorile, iar `rgba()` poate fi transparent;
- `linear-gradient` face un degrade;
- variabilele din `:root` păstrează paleta într-un singur loc;
- în `stil.css` scrii mereu pe piesele paginii: `header`, `nav`, `.banner`, `.carte`, `aside`.

**Încearcă tu (8 min)**  
- [ ] Creează folderul `Prenume_Nume_W3_L3` ca o **copie** a folderului `Prenume_Nume_W3_L2` (cu `tema.html`, `stil.css`, `imagini`, `media`)  
- [ ] Deschide `tema.html` cu Live Server și citește-ți textul: cât de ușor se citește?  
- [ ] Notează într-un comentariu un lucru care s-ar putea citi mai bine (mărime, aer, litere)  

> De aici înainte, exemplele arată ce scrii în `stil.css`, pe piesele paginii-model despre delfin.

---

## 2. Fontul și mărimea

### Exemplul 1 — `font-family` și lista de rezervă

```css
body {
  font-family: Arial, sans-serif;
}

h1 {
  font-family: Georgia, serif;
}
```

`font-family` alege **felul literelor**. Scrii mai multe nume, separate prin virgulă. De ce? Fiecare calculator are alte fonturi instalate. Browserul încearcă **primul** font din listă; dacă nu îl găsește, încearcă al doilea. Ultimul nume este un **grup general** care există mereu:

| Grup general | Cum arată | Exemple de fonturi |
|--------------|-----------|---------------------|
| `sans-serif` | litere simple, fără „picioruși” | Arial, Verdana |
| `serif` | litere cu „picioruși”, ca în cărți | Georgia, Times New Roman |
| `monospace` | toate literele la fel de late, ca în cod | Courier New |

> Numele de font care are **spațiu** în el se scrie între ghilimele: `"Courier New"`, `"Times New Roman"`.

> Azi folosim doar fonturile care sunt deja în calculator.

### Exemplul 2 — `font-size`: px și rem

```css
h1 {
  font-size: 2.2rem;
}

p {
  font-size: 1.1rem;
}

.banner {
  font-size: 1.3rem;
}
```

Ai două feluri de a scrie o mărime:

| Unitate | Ce înseamnă |
|---------|-------------|
| `px` | pixeli: o mărime fixă |
| `rem` | un **multiplu al mărimii de bază** a paginii (de obicei 16px): `1rem` = 16px, `2rem` = 32px |

`rem` se adaptează: dacă un om are nevoie de litere mai mari în setările telefonului, o pagină făcută cu `rem` crește odată cu ele.

> Între număr și unitate **nu se pune spațiu**: `18px`, nu `18 px`.

**Încearcă tu (7 min)**  
- [ ] Alege un font pentru tot textul și altul pentru titluri, fiecare cu grup general la sfârșit  
- [ ] Dă lui `h1` mărimea `2.2rem`, paragrafelor `1.1rem` și bannerului `1.3rem`  
- [ ] Schimbă mărimea în `px`, apoi în `rem`, și vezi diferența  

**Gata când:**  
- [ ] Fiecare `font-family` se termină cu un grup general  
- [ ] Poți explica de ce scriem mai multe fonturi în aceeași regulă  

---

## 3. Grosime și înclinare

### Exemplul 3 — `font-weight` și `font-style`

```css
.important {
  font-weight: bold;
}

header p {
  font-style: italic;
}
```

- `font-weight: bold;` îngroașă textul (`normal` îl aduce la normal);  
- `font-style: italic;` înclină literele.

Folosește grosimea pentru **cuvintele care contează**, nu pentru tot textul. Dacă totul e gros, nimic nu mai iese în evidență.

**Încearcă tu (6 min)**  
- [ ] Pune `font-weight: bold;` pe clasa `.important`  
- [ ] Înclină paragraful din antet cu `font-style: italic;`  
- [ ] Verifică dacă se vede ce e important în pagină  

---

## 4. Aliniere, aer și litere

### Exemplul 4 — `text-align` și `line-height`

```css
h1 {
  text-align: center;
}

p {
  line-height: 1.6;
}
```

- `text-align` poate fi `left` (stânga, cel normal), `center` (mijloc) sau `right` (dreapta);  
- `line-height` este **înălțimea unui rând**. Scrisă ca un număr fără unitate (`1.6`), înseamnă „de 1,6 ori mărimea literei”. Un text se citește plăcut cu `line-height` între `1.4` și `1.8`.

Compară: un paragraf cu `line-height: 1` este înghesuit și obosește ochii, iar unul cu `line-height: 1.6` se citește ușor.

### Exemplul 5 — `letter-spacing` și `text-transform`

```css
h1 {
  letter-spacing: 2px;
  text-transform: uppercase;
}
```

- `letter-spacing` este spațiul dintre **litere**. Un pic de spațiu (`1px`–`3px`) face titlurile să respire;  
- `text-transform: uppercase;` scrie totul cu **majuscule**, fără să schimbi textul din HTML.

**Încearcă tu (7 min)**  
- [ ] Centrează titlul `h1` și paragraful din antet  
- [ ] Pune `line-height` pe paragrafe și compară `1` cu `1.6`  
- [ ] Fă titlul `h1` cu majuscule și spațiu între litere  

**Gata când:**  
- [ ] Titlul este centrat și are majuscule  
- [ ] Paragrafele au `line-height` între 1.4 și 1.8  

---

## 5. Linkuri și titluri

### Exemplul 6 — `text-decoration`: linkuri fără subliniere

```css
nav a {
  text-decoration: none;
  font-weight: bold;
  color: var(--accent);
}
```

`text-decoration: none;` scoate sublinierea de la linkuri. Sublinierea îți arată că ceva se poate apăsa; dacă o scoți, fă linkul **altfel colorat** (aici cu `--accent`) ca să se vadă că e link.

### Exemplul 7 — Un titlu cu personalitate

```css
h1,
h2 {
  font-family: Georgia, "Times New Roman", serif;
}

h1 {
  font-size: 2.2rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
}
```

Titlurile folosesc un font diferit de al restului paginii, iar `h1` are majuscule și spațiu între litere. Alege **cel mult două fonturi** pe pagină: unul pentru titluri și unul pentru text.

**Încearcă tu (7 min)**  
- [ ] Scoate sublinierea linkurilor din meniu și dă-le o culoare din paleta ta  
- [ ] Dă titlurilor `h1` și `h2` același font, diferit de al textului  
- [ ] Verifică: sunt cel mult două fonturi pe pagină?  

---

## 6. Mini-proiect: toate la un loc

### Exemplul 8 — Tot ce ai învățat azi, în `stil.css`

Pagina despre delfin (cea din Lecția 1) nu își schimbă HTML-ul. În `stil.css` păstrezi tot ce ai făcut în lecția 2 (paleta, degradeul, capitolele) și adaugi o secțiune nouă, **Textul**. Citește-o de sus în jos. Delfinul este **modelul tău**:

```css
/* Textul */
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
}

h1,
h2 {
  font-family: Georgia, "Times New Roman", serif;
}

h1 {
  font-size: 2.2rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
}

header p {
  text-align: center;
  font-style: italic;
}

.banner {
  font-size: 1.3rem;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  color: var(--accent);
}

.important {
  font-weight: bold;
  color: var(--accent);
}
```

Cu un font pentru text, unul pentru titluri, `line-height` și câteva reguli pentru litere, pagina se citește mult mai plăcut.

**Acum e rândul tău:** fă-ți propria pagină după modelul Delfinul, cu **subiectul tău și fonturile tale**. Nu copia fonturile delfinului: alege-ți altele (din tabelul de la Exemplul 1) și urmează aceiași pași.

**Încearcă tu (10 min)**  
- [ ] Adaugă în `stil.css` o secțiune „Textul”, cu un font pentru text și unul pentru titluri  
- [ ] Pune `font-size` (și pe banner), `line-height`, majuscule pe `h1` și linkurile fără subliniere  
- [ ] Compară cu modelul: ai toate cele patru părți (fonturile, mărimile, aerul, linkurile)?  

**Gata când:**  
- [ ] Pagina are un font pentru text și unul pentru titluri, fiecare cu listă de rezervă  
- [ ] Ai mărimi în `rem` și `line-height` între 1.4 și 1.8  
- [ ] Ai folosit `text-transform` și `letter-spacing` pe un titlu  

---

## De făcut azi — „Litere cu personalitate”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | `tema.html` cu un font ales pentru text, titluri de mărimi diferite și `line-height` pe paragrafe |
| **Complet** | Minim + două fonturi cu rezervă, un titlu cu majuscule și spațiu între litere, linkuri fără subliniere, dar colorate, și verificarea „se citește bine?” |

### Pasul 1 — Minim
Pe `tema.html`, alege un font pentru text, mărimi pentru titluri și pune `line-height` pe paragrafe.

- [ ] Folderul `Prenume_Nume_W3_L3` are `tema.html` și `stil.css`  
- [ ] Pagina are un font ales, titluri de mărimi diferite și `line-height` pe paragrafe  
- [ ] Pagina se vede în browser, cu Live Server pornit  

### Pasul 2 — Complet
Îmbunătățești pagina:

- [ ] Ai un font pentru titluri și altul pentru text, fiecare cu listă de rezervă  
- [ ] Titlul are majuscule și spațiu între litere  
- [ ] Linkurile din meniu nu sunt subliniate, dar au altă culoare  
- [ ] Ai verificat cu ochii strânși dacă tot textul se citește bine  

---

## Bonus ★★★ — Provocare: Articolul tău ca o carte
*Doar dacă ai terminat Complet.*

Faci `tema.html` să arate ca o pagină de carte.

- [ ] Pune o literă mare la începutul primului paragraf din capitol: `.carte p:first-of-type::first-letter { font-size: 2.5rem; font-weight: bold; }`  
- [ ] Pune `text-indent: 1.5rem;` pe paragrafe, ca într-o carte, și compară cu varianta fără  
- [ ] Încearcă trei perechi de fonturi (titluri și text) și alege-o pe cea mai frumoasă  
- [ ] Deschide DevTools (**F12**; pe Mac Cmd + Option + I), apasă pe un paragraf și încearcă în panoul **Styles** valori diferite pentru `line-height` și `font-size`, ca să vezi efectul pe loc  

---

## Greșeli frecvente
1. **Ai uitat grupul general** (`sans-serif`, `serif`) la sfârșitul listei de fonturi.  
2. **Ai uitat ghilimelele** la un font cu spațiu: `"Times New Roman"`.  
3. **Ai scris `18 px`** cu spațiu — scrie `18px`.  
4. **Ai scris `text-align: middle`** — corect este `center`.  
5. **Ai scris `font-weight: heavy`** — valorile sunt `bold` sau `normal`.  
6. **Ai pus `line-height: 1px`** — rândurile se suprapun; scrie `1.6`.  
7. **Ai pus prea multe fonturi** — cel mult două pe pagină.  
8. **Ai scos sublinierea de la un link** fără să schimbi culoarea lui — nu se mai vede că poate fi apăsat.  

---

## Recapitulare pe scurt
1. `font-family` alege fontul, cu o listă de rezervă care se termină cu un grup general.  
2. `font-size` se scrie în `px` (fix) sau `rem` (se adaptează).  
3. `font-weight` îngroașă, `font-style: italic` înclină.  
4. `text-align` așază textul; `line-height` dă aer între rânduri.  
5. `letter-spacing` dă aer între litere, iar `text-transform` schimbă majusculele.  
6. `text-decoration: none;` scoate sublinierea; linkul trebuie să rămână colorat.

## Quiz scurt
- De ce scriem mai multe fonturi în `font-family`?  
- Care este diferența dintre `px` și `rem`?  
- Ce valoare de `line-height` face un text plăcut de citit?  
- Cum scoți sublinierea de la un link?  
- Cum faci un titlu cu majuscule fără să rescrii titlul?

## Temă
1. Termină stilul textului pe `tema.html`: un font pentru titluri și unul pentru text, `line-height` plăcut, titlu cu majuscule și linkuri colorate. Salvează în `Prenume_Nume_W3_L3`.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Un font pentru fișă.**

```css
aside {
  font-family: "Courier New", monospace;
}
```

Fișa pe scurt arată ca o fișă de laborator. Fontul cu spațiu în nume se scrie între ghilimele, iar `monospace` este grupul de rezervă.

**Acasă 2 — Text umplut de la o margine la alta.**

```css
.carte p {
  text-align: justify;
}
```

`justify` întinde rândurile ca în ziare. Uită-te dacă se vede bine și pe telefon: uneori apar spații mari între cuvinte.

4. **Încă patru exerciții (B–E):**

**B — Ce face regula?** Spune ce face fiecare regulă: (1) `font-size: 2rem;`; (2) `letter-spacing: 4px;`; (3) `text-transform: uppercase;`; (4) `line-height: 1.8;`; (5) `text-decoration: none;` pe un link.

**C — Scrie regula.** Scrie în CSS: (1) paragrafele au font `Verdana` cu rezervă `sans-serif` și mărimea `1.2rem`; (2) titlurile `<h2>` sunt centrate; (3) clasa `.nota` este înclinată și are mărimea `0.9rem`.

**D — Găsește greșelile.** Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
p {
  font-family: Arial, sans-serif;
  font-size: 18 px;
  text-align: middle;
  font-weight: heavy;
}
```

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: de ce scriem mai multe fonturi în `font-family`? De ce este bine ca un paragraf să aibă `line-height` mai mare de 1? De ce nu scoatem sublinierea de la linkuri fără să le dăm altă culoare?

## Ce urmează — Lecția 4
Învățăm că **fiecare element este o cutie**, cu conținut, spațiu în interior, chenar și spațiu în afară. Cu cutiile așezăm capitolele exact unde vrem.

---

## Răspunsuri
- **Quiz scurt:** (1) fiecare calculator are alte fonturi, deci browserul încearcă primul font și, dacă nu îl găsește, trece la următorul, până la grupul general; (2) `px` este o mărime fixă, iar `rem` este un multiplu al mărimii de bază a paginii (`1rem` = 16px) și se adaptează; (3) între `1.4` și `1.8`, de exemplu `1.6`; (4) cu `text-decoration: none;`; (5) cu `text-transform: uppercase;`.  
- **Tema, exercițiul B:** (1) mărimea literelor este de două ori mărimea de bază (32px); (2) 4px între litere; (3) tot textul se afișează cu majuscule; (4) fiecare rând are înălțimea de 1,8 ori mărimea literei; (5) linkul nu mai este subliniat.  
- **Tema, exercițiul C:** (1) `p { font-family: Verdana, sans-serif; font-size: 1.2rem; }`; (2) `h2 { text-align: center; }`; (3) `.nota { font-style: italic; font-size: 0.9rem; }`.  
- **Tema, exercițiul D:** (1) `18 px` trebuie `18px`; (2) `middle` trebuie `center`; (3) `heavy` trebuie `bold`.  
- **Tema, exercițiul E:** pentru că nu toate calculatoarele au același font, deci browserul încearcă pe rând; un `line-height` mai mare dă aer și se citește mai ușor; fără subliniere și fără altă culoare, nu se mai vede că linkul poate fi apăsat.  
- **Dacă ritmul clasei este lent:** Exemplul 7 se poate face scurt (el repetă proprietăți din Exemplele 4–5); Exemplul 6 rămâne, pentru că meniul se stilizează în lecția 5.  
- **Bonus (indicii):** (1) `::first-letter` se scrie cu două semne `:` lipite de selector; (2) `text-indent` mută doar primul rând al paragrafului; compară comentând regula cu `/* … */`; (3) schimbă `font-family` separat pentru titluri și pentru text; (4) în panoul **Styles** dai clic pe o valoare și o schimbi cu săgețile sus/jos; schimbarea nu se salvează, dispare la reîncărcare.  
- **Notă informativă:** în această lecție folosești doar fonturi deja instalate pe calculator. Fonturile de pe internet trimit date către servere din afară, așa că le folosim doar când profesorul spune cum și de unde. `text-shadow`, grosimile numerice, `capitalize`, `line-through` și coloana îngustă cu `max-width` nu fac parte din lecția asta (coloana o înveți în lecția 4).
