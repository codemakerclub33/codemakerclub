# LECȚIA 9 — Ecranul de telefon
### Adaptare la telefon
**Modulul 3 · CSS: Stil și culoare · 2 ore**  
**Code Maker Club · CSS Stylist**

> Mulți oameni deschid paginile pe **telefon**, unde ecranul e mic și se atinge cu degetul. O pagină făcută doar pentru calculator iese din ecran sau are litere minuscule. Azi înveți să adaptezi pagina ta la orice ecran, cu regula `@media`. Lucrezi tot pe `tema.html`, în același `stil.css`.  
> Proiect: **„Ecranul de telefon”** · folder: `Prenume_Nume_W3_L9` (ex. `Ana_Pop_W3_L9`)

---

## Ce facem azi
La final pagina ta se vede bine și pe calculator, și pe telefon: pe telefon lista din stânga, capitolele și cifrele stau într-o singură coloană, meniul stă pe verticală, cu butoane mari, titlul e mai mic și nu apare derulare pe orizontală. Aproape jumătate din vizitatorii unui site vin de pe telefon, deci o pagină care nu arată bine acolo pierde cititori.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · copiem folderul lecției trecute |
| 15–30 | `viewport` · lățimi care se adaptează (**Exemplele 1–2**) |
| 30–50 | Prima regulă `@media` · meniul pe telefon (**Exemplele 3–4**) |
| 50–65 | Text, spațiu și degete (**Exemplul 5**) |
| 65–85 | Piesă nouă: cifre pe scurt · trei pe un rând, una sub alta pe telefon (**Exemplul 6**) |
| 85–95 | Testezi cu DevTools (**Exemplul 7**) |
| 95–110 | Mini-proiect: toate la un loc (**Exemplul 8**) |
| 110–115 | Verificare: apare derulare pe orizontală pe telefon? |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `<meta name="viewport" …>` | Spune telefonului să nu micșoreze pagina | în `<head>` |
| `@media (max-width: 600px) { … }` | Reguli doar pentru ecrane înguste | telefon |
| `grid-template-columns: 1fr;` | O singură coloană pe telefon | în `@media` |
| `flex-direction: column;` | Meniul stă pe verticală | în `@media` |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- o animație are o rețetă (`@keyframes`) și o pornire (`animation`);
- `animation-delay` face elementele să apară pe rând;
- `prefers-reduced-motion` oprește mișcarea pentru cine o cere;
- regula `@media` se aplică doar când o condiție este adevărată.

**Încearcă tu (8 min)**  
- [ ] Creează folderul `Prenume_Nume_W3_L9` ca o **copie** a folderului `Prenume_Nume_W3_L8` (cu `tema.html`, `stil.css`, `imagini`, `media`)  
- [ ] Deschide `tema.html` cu Live Server și micșorează fereastra browserului: ce se întâmplă cu capitolele și cu meniul?  
- [ ] Notează într-un comentariu ce nu arată bine pe un ecran îngust  

> De aici înainte, exemplele arată ce scrii în `stil.css`, pe piesele paginii-model despre delfin.

---

## 2. Ecranul mic

### Exemplul 1 — `viewport`

În `<head>`, pagina ta are (din Modulul 1) acest rând:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Fără el, telefonul crede că pagina e făcută pentru calculator și o **micșorează** ca să încapă, iar literele devin minuscule. Cu el, pagina folosește lățimea reală a telefonului. Verifică să-l ai în `tema.html`.

### Exemplul 2 — Lățimi care se adaptează

Lățimile fixe în `px` nu încap pe un ecran mic:

```css
.fix {
  width: 800px;      /* iese din ecran pe telefon */
}
```

Folosește lățimi care se **adaptează**:

```css
.pagina {
  max-width: 1200px;   /* cel mult 1200px, dar poate fi mai îngustă */
}

table {
  width: 100%;         /* tabelul umple cutia, nu iese din ea */
}

img {
  max-width: 100%;
  height: auto;
}
```

Cu `max-width` și `%`, elementele se micșorează singure pe un ecran mic. Imaginea ai făcut-o deja în lecția 4.

**Încearcă tu (7 min)**  
- [ ] Verifică dacă ai rândul `viewport` în `<head>`  
- [ ] Pune `table { width: 100%; }` și `img { max-width: 100%; height: auto; }`  
- [ ] Micșorează fereastra: mai iese ceva din ecran? Notează ce  

**Gata când:**  
- [ ] Ai rândul `viewport` în `<head>`  
- [ ] Tabelul și imaginile nu ies din cutie  

---

## 3. Regula `@media`

### Exemplul 3 — Prima regulă `@media`

`@media` aplică reguli **doar când o condiție este adevărată**. Condiția cea mai folosită este lățimea ecranului:

```css
@media (max-width: 600px) {
  .pagina {
    grid-template-columns: 1fr;
  }

  main {
    grid-template-columns: 1fr;
  }
}
```

Se citește: „când ecranul are **cel mult 600px** lățime, `.pagina` și `main` au o singură coloană”. Ai două grile (lista din stânga și capitolele), deci le pui pe amândouă pe o coloană: lista ajunge deasupra capitolelor. Pe calculator, regula nu se aplică. Regulile din interior se scriu **între acolade**, ca într-o regulă mare care conține altele. 600px este o lățime obișnuită pentru telefoane.

> Pune `@media` **la sfârșitul fișierului**, lângă regula `prefers-reduced-motion`, ca să poată înlocui regulile de dinainte.

### Exemplul 4 — Meniul pe telefon

Pe un ecran îngust, butoanele din meniu stau mai bine una sub alta:

```css
@media (max-width: 600px) {
  nav ul {
    flex-direction: column;
  }

  nav a {
    text-align: center;
  }

  nav li ul {
    position: static;
    box-shadow: none;
  }
}
```

Meniul trece pe coloană, iar textul din butoane se centrează. Submeniul din Lecția 7 nu mai plutește (`position: static;` îl aduce înapoi în rând, sub link). Regulile merg în **același** `@media`: nu scrii un `@media` nou pentru fiecare regulă.

**Încearcă tu (7 min)**  
- [ ] Scrie `@media (max-width: 600px)` la sfârșitul `stil.css`, cu `.pagina` și `main` pe o singură coloană  
- [ ] Pune meniul pe coloană în același `@media`  
- [ ] Micșorează fereastra sub 600px și urmărește cum se schimbă pagina  

**Gata când:**  
- [ ] Pe un ecran îngust, lista din stânga și capitolele stau într-o singură coloană  
- [ ] Meniul stă pe verticală  

---

## 4. Text, spațiu și degete

### Exemplul 5 — Text, spațiu și butoane mari

Pe telefon, un titlu mare ocupă prea mult, spațiul larg de la margini mănâncă din loc, iar butoanele se apasă cu **degetul**, nu cu un cursor mic. Ele trebuie să fie **mari** și să aibă spațiu între ele:

```css
@media (max-width: 600px) {
  h1 {
    font-size: 1.6rem;
  }

  .pagina {
    padding: 0.5rem;
  }

  nav a {
    padding: 14px 16px;
  }

  nav ul {
    gap: 8px;
  }
}
```

Titlul se micșorează, pagina are mai puțin spațiu la margini, iar butoanele sunt înalte, de aproximativ 44px (14 + 14 + textul). Dacă două butoane sunt prea aproape, degetul le poate nimeri pe amândouă. Regulile se adaugă în același `@media`.

**Încearcă tu (7 min)**  
- [ ] Micșorează titlul și `padding`-ul lui `.pagina` în `@media`  
- [ ] Fă butoanele din meniu mai înalte, cu `gap` între ele, în același `@media`  
- [ ] Micșorează fereastra sub 600px și compară cu înainte  

---

## 5. Cifre pe scurt

### Piesă nouă de HTML: cifre pe scurt

Azi pagina primește un rând cu **trei cifre**, ca pe o fișă. Copiază-l în `<main>`, **după capitolul cu poză**:

```html
<section class="cifre">
  <div class="cifra"><strong>2–4 m</strong> lungime</div>
  <div class="cifra"><strong>40 km/h</strong> viteză</div>
  <div class="cifra"><strong>30 de ani</strong> viață</div>
</section>
```

Scrie **trei cifre adevărate despre subiectul tău** (verifică-le într-o carte sau cu profesorul). Până îi dăm stil, cele trei cutii stau una sub alta.

### Exemplul 6 — Trei pe un rând, una sub alta pe telefon

```css
.cifre {
  grid-column: 1 / -1;
  display: flex;
  gap: 15px;
}

.cifra {
  flex: 1;
  text-align: center;
  padding: 15px;
  color: white;
  background-color: var(--principala);
  border-radius: 12px;
}

.cifra strong {
  display: block;
  font-size: 1.6rem;
}

@media (max-width: 600px) {
  .cifre {
    flex-direction: column;
  }
}
```

- `.cifre` ocupă tot rândul din `main` (`grid-column: 1 / -1;`, ca la caseta „Știai că?”) și este un rând Flexbox: cele trei cutii stau **pe un rând**, egale (`flex: 1;`);  
- `display: block;` pe cifră o mută pe un rând separat, deasupra explicației;  
- în `@media`, `flex-direction: column;` le pune **una sub alta** pe telefon. La fel faci și pentru capitolul cu poză (`.cu-poza`), ca poza să nu strângă textul.

**Încearcă tu (8 min)**  
- [ ] Copiază cele trei cifre în `tema.html`, cu cifrele tale  
- [ ] Scrie regulile pentru `.cifre` și `.cifra` și vezi trei cutii pe un rând  
- [ ] Adaugă în `@media` regula `flex-direction: column;` și verifică pe un ecran îngust  

**Gata când:**  
- [ ] Pe calculator, cele trei cifre stau pe un rând  
- [ ] Pe telefon, ele stau una sub alta  

### Exemplul 7 — Testezi cu DevTools

Nu trebuie să ai un telefon la îndemână:

1. Deschide DevTools (**F12**; pe Mac Cmd + Option + I).  
2. Apasă butonul cu telefonul și tableta (**Toggle device toolbar**) sau apasă Ctrl + Shift + M (pe Mac Cmd + Shift + M).  
3. Alege un telefon din listă sau trage de marginea ecranului ca să schimbi lățimea.  
4. Verifică: **nu** apare derulare pe orizontală, textul se citește, butoanele se văd.

**Încearcă tu (5 min)**  
- [ ] Deschide DevTools în modul telefon și alege două lățimi diferite  
- [ ] Verifică dacă apare derulare pe orizontală  
- [ ] Notează într-un comentariu ce ai mai îndreptat  

---

## 6. Mini-proiect: toate la un loc

### Exemplul 8 — Tot ce ai învățat azi, în `stil.css`

Pagina despre delfin (cea din Lecția 1) primește în HTML doar rândul cu cifre. În `stil.css` păstrezi tot ce ai făcut în lecțiile 2–8, adaugi `table { width: 100%; }`, regulile pentru cifre și, **la sfârșit**, regula `@media` pentru telefon. Delfinul este **modelul tău**:

```css
/* Lățimi care se adaptează */
table {
  width: 100%;
}

/* Cifrele */
.cifre {
  grid-column: 1 / -1;
  display: flex;
  gap: 15px;
}

.cifra {
  flex: 1;
  text-align: center;
  padding: 15px;
  color: white;
  background-color: var(--principala);
  border-radius: 12px;
}

.cifra strong {
  display: block;
  font-size: 1.6rem;
}

/* Telefonul (la sfârșitul fișierului) */
@media (max-width: 600px) {
  .pagina {
    grid-template-columns: 1fr;
    padding: 0.5rem;
  }

  main {
    grid-template-columns: 1fr;
  }

  h1 {
    font-size: 1.6rem;
  }

  nav ul {
    flex-direction: column;
    gap: 8px;
  }

  nav a {
    padding: 14px 16px;
    text-align: center;
  }

  nav li ul {
    position: static;
    box-shadow: none;
  }

  .cifre,
  .cu-poza {
    flex-direction: column;
  }
}
```

Pe un ecran îngust, lista din stânga, capitolele și cifrele stau într-o singură coloană, titlul e mai mic, iar meniul are butoane mari, unul sub altul. Pe calculator, pagina rămâne ca înainte.

**Acum e rândul tău:** fă-ți propria pagină după modelul Delfinul, cu **subiectul tău și valorile tale**. Nu copia valorile delfinului: alege-ți tu lățimea (poate 600px sau 700px), cifrele și mărimile.

**Încearcă tu (10 min)**  
- [ ] Adaugă regula `@media` la sfârșitul `stil.css`, cu o singură coloană și titlul mai mic  
- [ ] Pune meniul pe coloană, fă butoanele mari, cu `gap`, și pune cifrele una sub alta  
- [ ] Compară cu modelul: ai toate cele cinci părți (coloana, titlul, meniul, butoanele mari, cifrele)?  

**Gata când:**  
- [ ] Ai rândul `viewport` și lățimi care se adaptează  
- [ ] Ai o regulă `@media (max-width: …)` la sfârșitul fișierului  
- [ ] Pe telefon (în DevTools) nu apare derulare pe orizontală  
- [ ] Butoanele din meniu sunt mari și cu spațiu între ele  
- [ ] Cele trei cifre stau pe un rând pe calculator și una sub alta pe telefon  

---

## De făcut azi — „Ecranul de telefon”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | `tema.html` cu `viewport` și o regulă `@media (max-width: 600px)` care pune lista din stânga și capitolele pe o singură coloană |
| **Complet** | Minim + meniul pe coloană cu butoane mari, titlul mai mic, cifrele una sub alta, tabelul și imaginile care nu ies din cutie și verificarea în DevTools, în modul telefon |

### Pasul 1 — Minim
Pe `tema.html`, adaugă `viewport` (dacă lipsește) și o regulă `@media` pentru telefon.

- [ ] Folderul `Prenume_Nume_W3_L9` are `tema.html` și `stil.css`  
- [ ] Pagina are rândul `viewport` în `<head>`  
- [ ] Ai `@media (max-width: 600px)` cu lista din stânga și capitolele pe o singură coloană  

### Pasul 2 — Complet
Îmbunătățești pagina:

- [ ] Meniul stă pe coloană pe telefon, cu butoane mari și `gap`  
- [ ] Titlul este mai mic pe telefon, iar cele trei cifre stau una sub alta  
- [ ] Tabelul și imaginile nu ies din cutie  
- [ ] Ai verificat pagina în DevTools, în modul telefon, la două lățimi, și nu apare derulare pe orizontală  

---

## Bonus ★★★ — Provocare: Titlu care se adaptează singur
*Doar dacă ai terminat Complet.*

Faci pagina să se adapteze și fără multe reguli `@media`.

- [ ] Scrie pe `h1`: `font-size: clamp(1.5rem, 5vw, 2.5rem);` (mărimea crește odată cu ecranul, dar rămâne între 1.5rem și 2.5rem) și șterge regula `font-size` de pe `h1` din `@media`  
- [ ] Înlocuiește coloanele din `main` cu `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));` și șterge din `@media` linia cu coloana unică: grila se adaptează singură  
- [ ] Adaugă un al doilea `@media (max-width: 900px)` pentru tabletă, cu `.pagina { padding: 1rem; }`  
- [ ] Rotește telefonul în DevTools (butonul de rotire din bara de sus) și verifică pagina și pe orizontală  

---

## Greșeli frecvente
1. **Ai uitat `viewport`** — telefonul micșorează pagina și literele devin mici.  
2. **Ai lățimi fixe în `px`** — pagina iese din ecran; folosește `max-width` și `%`.  
3. **Ai scris `@media` la început de fișier** — regulile de dinainte o bat; pune-l la sfârșit.  
4. **Ai scris `max-width: 600` fără `px`** — scrie `600px`.  
5. **Ai scris `@media` fără paranteze** în jurul condiției — corect este `@media (max-width: 600px)`.  
6. **Ai uitat o acoladă** — regula `@media` are două niveluri de acolade.  
7. **Butoane mici sau lipite** — pe telefon se apasă greu.  
8. **N-ai testat** — verifică în DevTools, în modul telefon, înainte să zici „gata”.  

---

## Recapitulare pe scurt
1. Rândul `viewport` din `<head>` spune telefonului să folosească lățimea reală.  
2. Folosește `max-width`, `%` și `img { max-width: 100%; }`, nu lățimi fixe.  
3. `@media (max-width: 600px) { … }` aplică reguli doar pe ecrane înguste.  
4. Pe telefon: o singură coloană și meniul pe verticală.  
5. Butoanele trebuie să fie mari și cu spațiu între ele.  
6. Testezi cu DevTools, în modul telefon.

## Quiz scurt
- Ce face rândul `viewport`?  
- Ce înseamnă `@media (max-width: 600px)`?  
- De ce nu folosim lățimi fixe în `px` pentru un site?  
- Cum faci meniul să stea pe verticală pe telefon?  
- Cum testezi pagina fără un telefon?

## Temă
1. Termină adaptarea paginii `tema.html` la telefon: `viewport`, o regulă `@media` cu o coloană, meniu pe verticală cu butoane mari, titlu mai mic, fără derulare pe orizontală. Salvează în `Prenume_Nume_W3_L9`.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Fișa pe scurt, mai mică pe telefon.**

```css
@media (max-width: 600px) {
  aside {
    font-size: 0.9rem;
  }
}
```

Pe telefon, textul din fișă se micșorează puțin, ca tabelul să încapă mai ușor.

**Acasă 2 — O regulă pentru ecrane mari.**

```css
@media (min-width: 900px) {
  .pagina {
    max-width: 1400px;
  }
}
```

`min-width` este opusul lui `max-width`: regula se aplică doar când ecranul are **cel puțin** 900px, deci pe ecrane mari conținutul se lărgește.

4. **Încă patru exerciții (B–E):**

**B — Ce face regula?** Spune ce face fiecare regulă: (1) `@media (max-width: 600px) { main { grid-template-columns: 1fr; } }`; (2) `nav ul { flex-direction: column; }` în interiorul unui `@media`; (3) `img { max-width: 100%; }`; (4) `<meta name="viewport" …>`; (5) `@media (min-width: 900px) { … }`.

**C — Scrie regula.** Scrie în CSS: (1) pe ecrane de cel mult 500px, `h1` are mărimea `1.5rem`; (2) în același `@media`, `.meniu` este pe coloană; (3) imaginile nu depășesc niciodată cutia lor.

**D — Găsește greșelile.** Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
@media max-width: 600 {
  main {
    grid-template-columns: 1fr;
  }
```

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: de ce punem `@media` la sfârșitul fișierului? De ce trebuie să testăm pagina și pe un ecran îngust? De ce sunt importante butoanele mari pe telefon?

## Ce urmează — Lecția 10
Folosim tot ce am învățat în Modulul 3 ca să ducem **articolul tău** la forma finală: o pagină frumoasă, cu stil, meniu, carduri, efecte și adaptare la telefon.

---

## Răspunsuri
- **Quiz scurt:** (1) spune telefonului să folosească lățimea reală a ecranului, nu să micșoreze pagina; (2) regulile dinăuntru se aplică doar când ecranul are cel mult 600px lățime; (3) pentru că nu încap pe ecrane mici și pagina iese din ecran; (4) cu `flex-direction: column;` pe `nav ul`, într-un `@media`; (5) cu DevTools (F12), în modul telefon (Toggle device toolbar).  
- **Tema, exercițiul B:** (1) pe ecrane de cel mult 600px, `main` are o singură coloană; (2) pe ecrane înguste, meniul stă pe verticală; (3) imaginea nu depășește niciodată cutia ei; (4) telefonul folosește lățimea reală, nu micșorează pagina; (5) regulile se aplică doar pe ecrane de cel puțin 900px.  
- **Tema, exercițiul C:** (1) `@media (max-width: 500px) { h1 { font-size: 1.5rem; } }`; (2) în același `@media`: `.meniu { flex-direction: column; }`; (3) `img { max-width: 100%; height: auto; }`.  
- **Tema, exercițiul D:** (1) lipsesc parantezele: `@media (max-width: 600px)`; (2) `600` trebuie `600px`; (3) lipsește acolada de închidere a lui `@media`.  
- **Tema, exercițiul E:** pentru ca regulile din `@media` să poată înlocui regulile de dinainte; pentru că mulți oameni folosesc telefonul; pentru că degetul e mai gros decât cursorul și poate apăsa pe mai multe butoane.  
- **Dacă ritmul clasei este lent:** Exemplele 2 și 5 se pot face scurt; Exemplele 1, 3, 4 și 7 sunt obligatorii. Cifrele (Exemplul 6) sunt piesa nouă a paginii și se pot termina acasă. DevTools în modul telefon poate fi făcut de profesor pe ecranul mare, apoi repetat de elevi.  
- **Notă pentru profesor:** `clamp()`, `vw`, `auto-fit` și `minmax` apar doar în Bonus. Dacă un elev nu vede modul telefon în DevTools, poate trage de marginea ferestrei browserului, fără alte unelte. Verificați împreună cu elevii lipsa derulării pe orizontală.
