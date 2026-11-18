# LECȚIA 6 — Capitole în grilă
### Grid și meniul lipit sus
**Modulul 3 · CSS: Stil și culoare · 2 ore**  
**Code Maker Club · CSS Stylist**

> Flexbox așază elemente pe un singur rând. **Grid** le așază în **rânduri și coloane**, ca într-un tabel, dar fără tabel: este metoda potrivită pentru o pagină întreagă. Azi aranjezi capitolele paginii tale în coloane și lipești meniul sus, ca să rămână la vedere când derulezi. Lucrezi tot pe `tema.html`, în același `stil.css`.  
> Proiect: **„Capitole în grilă”** · folder: `Prenume_Nume_W3_L6` (ex. `Ana_Pop_W3_L6`)

---

## Ce facem azi
La final pagina ta are o coloană cu linkuri în stânga, iar capitolele stau în două coloane, cu spațiu între ele; „Fișa pe scurt”, caseta și capitolul cu poză se întind pe toată lățimea, iar meniul rămâne lipit sus când derulezi. Aproape toate paginile moderne folosesc o grilă, iar un meniu care rămâne la vedere te scutește de derulat înapoi până sus.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · copiem folderul lecției trecute |
| 15–35 | `display: grid;` · coloane cu `fr` și `repeat` · `gap` (**Exemplele 1–2**) |
| 35–50 | Element pe toată lățimea (**Exemplul 3**) |
| 50–70 | Piesă nouă: coloana din stânga · o grilă în altă grilă (**Exemplul 4**) |
| 70–80 | Flexbox sau Grid? (**Exemplul 5**) |
| 80–95 | Meniul lipit sus: `sticky` și `z-index` (**Exemplele 6–7**) |
| 95–110 | Mini-proiect: toate la un loc (**Exemplul 8**) |
| 110–115 | Verificare: stau capitolele în coloane și rămâne meniul sus? |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `display: grid;` | Face un container grid (pe părinte) | `main { … }` |
| `grid-template-columns` | Alege coloanele; `fr` = o parte din spațiul liber | `repeat(2, 1fr)` |
| `grid-column: 1 / -1;` | Întinde un element pe toată lățimea | `.stiai { … }` |
| `200px 1fr` | O coloană cu lățime fixă și una care ia restul | coloana din stânga |
| `position: sticky;` | Se lipește sus la derulare | `top: 0;` |
| `z-index` | Ordinea straturilor | `z-index: 100;` |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- `display: flex;` se scrie pe **părinte** și pune copiii pe un rând;
- `justify-content` lucrează pe axa principală, `align-items` pe cea secundară;
- `gap` pune spațiu între elemente;
- `flex-wrap: wrap;` lasă elementele să treacă pe rândul următor.

**Încearcă tu (8 min)**  
- [ ] Creează folderul `Prenume_Nume_W3_L6` ca o **copie** a folderului `Prenume_Nume_W3_L5` (cu `tema.html`, `stil.css`, `imagini`, `media`)  
- [ ] Deschide `tema.html` cu Live Server și uită-te la capitole: cum stau acum?  
- [ ] Notează într-un comentariu câte capitole are pagina ta și cum ai vrea să se așeze  

> De aici înainte, exemplele arată ce scrii în `stil.css`, pe piesele paginii-model despre delfin.

---

## 2. Prima grilă

### Exemplul 1 — `display: grid;` și coloanele

În pagină, capitolele sunt în `<main>`, unul sub altul. Le punem în **două coloane**:

```css
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

- `display: grid;` face din `main` un **container grid**. Regula se scrie pe **părinte**, ca la Flexbox;  
- `grid-template-columns: 1fr 1fr;` spune „vreau **două coloane**, egale”.

Capitolele (`section`) se așază singure, de la stânga la dreapta, pe rânduri noi când se umple un rând.

### Exemplul 2 — Unitatea `fr`, `repeat` și `gap`

`fr` înseamnă „o **parte** din spațiul liber”. Două coloane la fel de late sunt `1fr 1fr`. Dacă vrei ca prima coloană să fie de două ori mai lată, scrii `2fr 1fr`.

```css
main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
```

- `repeat(2, 1fr)` este același lucru cu `1fr 1fr`, dar mai scurt: „repetă de 2 ori o coloană de `1fr`”. Pentru trei coloane scrii `repeat(3, 1fr)`;  
- `gap` se folosește ca la Flexbox: pune spațiu **între** coloane și între rânduri. Cu `gap` nu mai ai nevoie de `margin` pe capitole: scoate-l de pe `.carte`, altfel spațiul se adună.

**Încearcă tu (8 min)**  
- [ ] Pune `display: grid;` și două coloane egale pe `main`  
- [ ] Schimbă în `repeat(2, 1fr)`, apoi în `2fr 1fr`, apoi în `repeat(3, 1fr)`  
- [ ] Adaugă `gap: 20px;` și scoate `margin`-ul de pe `.carte`  

**Gata când:**  
- [ ] Capitolele stau în coloane, cu `display: grid;` pus pe `main`  
- [ ] Capitolele au `gap` între ele  
- [ ] Poți spune ce înseamnă `1fr`  

---

## 3. Pe toată lățimea

### Exemplul 3 — `grid-column: 1 / -1;`

Uneori un element trebuie să ocupe **tot rândul**, nu doar o coloană. De exemplu „Fișa pe scurt”, caseta „Știai că?” și capitolul cu poză:

```css
main aside,
.stiai,
.cu-poza {
  grid-column: 1 / -1;
}
```

`grid-column: 1 / -1;` le întinde **de la prima linie până la ultima**, deci pe toată lățimea, oricâte coloane ar fi. Am scris `main aside` (fișa din `main`), ca regula să nu atingă și coloana din stânga, pe care o adăugăm în Exemplul 4.

**Încearcă tu (7 min)**  
- [ ] Întinde „Fișa pe scurt”, caseta „Știai că?” și capitolul cu poză pe toată lățimea  
- [ ] Scoate `.stiai` din regulă și vezi cum se așază caseta într-o singură coloană  
- [ ] Verifică dacă spațiul dintre elemente este egal peste tot  

**Gata când:**  
- [ ] „Fișa pe scurt”, caseta și capitolul cu poză ocupă tot rândul  

---

## 4. Coloana din stânga

### Piesă nouă de HTML: „Alte animale”

Azi pagina primește o **coloană în stânga**, cu o listă de linkuri. Ca să stea lângă `main`, le punem pe amândouă într-un **împachetător**. Pune `<div class="pagina">` chiar **înainte de `<main>`**, apoi lista, iar `</div>` **după `</main>`**:

```html
<div class="pagina">
  <aside class="alte">
    <h2>Alte animale</h2>
    <ul>
      <li><a href="#">Balena</a></li>
      <li><a href="#">Rechinul</a></li>
      <li><a href="#">Foca</a></li>
    </ul>
  </aside>

  <main>
    <!-- aici rămâne tot ce ai în main: capitolele, caseta, fișa -->
  </main>
</div>
```

Scrie la „Alte animale” **alte exemple de la subiectul tău**. Până îi dăm stil, lista stă deasupra lui `main`; le punem una lângă alta în Exemplul 4.

### Exemplul 4 — O grilă în altă grilă

```css
.pagina {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.alte ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.alte a {
  display: block;
  padding: 8px 0;
  color: var(--principala);
}
```

- `.pagina` are **două coloane**: una de exact `200px` (lista) și una de `1fr`, care ia tot restul (`main`);  
- `main` rămâne o grilă cu două coloane, deci o grilă poate sta în altă grilă: pagina are acum trei zone, lista din stânga și două coloane de capitole;  
- am mutat `max-width` și `margin: 0 auto;` pe `.pagina` (pe `main` nu mai sunt necesare).

**Încearcă tu (8 min)**  
- [ ] Copiază împachetătorul `.pagina` și lista „Alte animale” în `tema.html`  
- [ ] Scrie regulile pentru `.pagina`, `.alte ul` și `.alte a`; scoate `max-width` și `margin: 0 auto;` din regula `main`  
- [ ] Schimbă `200px` în `150px`, apoi în `250px`, și vezi ce se întâmplă cu `main`  

**Gata când:**  
- [ ] Lista „Alte animale” stă în stânga, lângă capitole  
- [ ] Capitolele stau tot în două coloane  

---

## 5. Flexbox sau Grid?

### Exemplul 5 — Care pentru ce?

| Vrei… | Folosești |
|-------|-----------|
| elemente **pe un rând** (meniu, butoane, etichete) | **Flexbox** |
| **rânduri și coloane** (capitole, galerie, pagina întreagă) | **Grid** |
| centrare simplă a unui element | Flexbox |

În pagina ta le folosești pe amândouă:

```css
nav ul {
  display: flex;   /* meniul: elemente pe un rând */
}

main {
  display: grid;   /* capitolele: rânduri și coloane */
}

.pagina {
  display: grid;   /* lista din stânga și main: două zone */
}
```

Se pot și combina: un capitol din grilă poate avea înăuntru un rând Flexbox.

**Încearcă tu (4 min)**  
- [ ] Scrie într-un comentariu, pentru meniu, pentru capitole și pentru subsol, dacă ai folosit Flexbox sau Grid  
- [ ] Verifică în pagină dacă fiecare funcționează  

---

## 6. Meniul rămâne sus

### Exemplul 6 — `position: sticky;`

```css
nav {
  position: sticky;
  top: 0;
}
```

Meniul stă normal, la locul lui. Când derulezi și el ar ieși din ecran, se **lipește** sus, la `top: 0`. Atenție: `sticky` are nevoie de `top` (sau `bottom`), altfel nu face nimic. Dă-i și un fundal (ai deja unul alb), ca textul de dedesubt să nu se vadă prin el.

### Exemplul 7 — `z-index`: ce stă deasupra

Când două elemente se suprapun, cel scris **mai târziu** în pagină stă deasupra. Cu `z-index` alegi tu ordinea straturilor:

```css
nav {
  position: sticky;
  top: 0;
  z-index: 100;
}
```

Numărul mai mare stă deasupra numărului mai mic. `z-index` funcționează doar pe elementele care au `position` (de exemplu `sticky`). Dacă meniul tău se ascunde sub capitole când derulezi, îi lipsește un `z-index` mare.

**Încearcă tu (7 min)**  
- [ ] Fă meniul `sticky` cu `top: 0;` și derulează pagina  
- [ ] Adaugă `z-index: 100;` dacă capitolele trec peste el  
- [ ] Șterge `top: 0;` și vezi că meniul nu se mai lipește  

**Gata când:**  
- [ ] Meniul rămâne sus la derulare  
- [ ] Capitolele nu trec peste meniu  

---

## 7. Mini-proiect: toate la un loc

### Exemplul 8 — Tot ce ai învățat azi, în `stil.css`

Pagina despre delfin (cea din Lecția 1) primește în HTML doar împachetătorul `.pagina` cu lista „Alte animale”. În `stil.css` păstrezi tot ce ai făcut în lecțiile 2–5, **înlocuiești** regula `main` din lecția 4 și adaugi secțiunea **Grila și meniul sus**. Delfinul este **modelul tău**:

```css
/* Grila și meniul sus */
.pagina {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.carte,
.stiai,
aside {
  margin: 0;
}

main aside,
.stiai,
.cu-poza {
  grid-column: 1 / -1;
}

.alte ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.alte a {
  display: block;
  padding: 8px 0;
  color: var(--principala);
}

nav {
  position: sticky;
  top: 0;
  z-index: 100;
}
```

Pagina are trei zone: lista „Alte animale” în stânga și, în dreapta ei, `main` cu două coloane de capitole. Caseta, capitolul cu poză și fișa ocupă tot rândul din `main`, iar meniul rămâne sus. Am scos `margin` de pe `.carte`, `.stiai` și `aside`, pentru că acum spațiul vine de la `gap`.

**Acum e rândul tău:** fă-ți propria pagină după modelul Delfinul, cu **subiectul tău și cifrele tale**. Nu copia cifrele delfinului: alege-ți lățimea coloanei din stânga, numărul de coloane și `gap`-ul.

**Încearcă tu (10 min)**  
- [ ] Pune lista din stânga și împachetătorul `.pagina`, apoi `display: grid;`, coloanele și `gap` pe `.pagina` și pe `main`; scoate `margin`-ul de pe `.carte`, `.stiai` și `aside`  
- [ ] Întinde fișa, caseta și capitolul cu poză pe toată lățimea și fă meniul `sticky`, cu `top` și `z-index`  
- [ ] Compară cu modelul: ai toate cele cinci părți (coloana din stânga, coloanele din `main`, spațiul, elementele pe tot rândul, meniul sus)?  

**Gata când:**  
- [ ] `main` este o grilă cu coloane și `gap`, iar `.pagina` are lista în stânga  
- [ ] „Fișa pe scurt”, caseta și capitolul cu poză ocupă tot rândul  
- [ ] Meniul rămâne sus la derulare și stă deasupra capitolelor  

---

## De făcut azi — „Capitole în grilă”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | `tema.html` cu capitolele în două coloane, într-o grilă (`display: grid;`), și lista „Alte animale” în stânga |
| **Complet** | Minim + `gap` între capitole, „Fișa pe scurt” pe toată lățimea, meniul `sticky` cu `z-index` și un comentariu care spune ce e Flexbox și ce e Grid |

### Pasul 1 — Minim
Pe `tema.html`, pune capitolele în coloane cu `display: grid;`.

- [ ] Folderul `Prenume_Nume_W3_L6` are `tema.html` și `stil.css`  
- [ ] `main` are `display: grid;` și `grid-template-columns`; lista „Alte animale” stă în stânga lui  
- [ ] Pagina se vede în browser, cu Live Server pornit  

### Pasul 2 — Complet
Îmbunătățești pagina:

- [ ] Capitolele au `gap` între ele, fără `margin` suplimentar  
- [ ] „Fișa pe scurt”, caseta „Știai că?” și capitolul cu poză ocupă tot rândul, cu `grid-column: 1 / -1;`  
- [ ] Meniul este `sticky`, cu `top: 0;` și `z-index`  
- [ ] Ai un comentariu care spune pentru ce ai folosit Flexbox și pentru ce Grid  

---

## Bonus ★★★ — Provocare: Un capitol mai mare și un buton „Sus”
*Doar dacă ai terminat Complet.*

Faci prima parte a paginii mai mare și adaugi un buton care te duce sus.

- [ ] Întinde primul capitol pe două coloane cu `grid-column: span 2;` (la o grilă cu trei coloane) sau schimbă coloanele în `2fr 1fr`  
- [ ] Pune în HTML, la sfârșit, `<a class="sus" href="#titlu-pagina">Sus</a>`  
- [ ] Pune pe `.sus`: `position: fixed; bottom: 20px; right: 20px;`, plus un fundal, `padding` și colțuri rotunjite, ca să arate ca un buton  
- [ ] Deschide DevTools (**F12**; pe Mac Cmd + Option + I), apasă pe `main` și apasă bifa `grid` de lângă `display: grid;`: vezi liniile grilei  

---

## Greșeli frecvente
1. **Ai uitat `display: grid;`** — `grid-template-columns` nu are efect fără el.  
2. **Ai pus `display: grid;` pe capitole**, nu pe `main` — regula se pune pe părinte.  
3. **Ai scris `1 fr`** cu spațiu — scrie `1fr`.  
4. **Ai uitat `top: 0;`** la `sticky` — meniul nu se mai lipește.  
5. **Meniul trece sub capitole** — ai uitat `z-index`.  
6. **Meniul nu rămâne sus deloc** — un părinte al lui are `overflow` sau nu e destul de lung; verifică și că `nav` e direct în `body`.  
7. **Spațiu dublu între capitole** — ai și `margin`, și `gap`; păstrează doar `gap`.  
8. **Fișa nu ocupă tot rândul** — ai uitat `grid-column: 1 / -1;` (și ai scris `aside` fără `main`, deci regula a întins și lista din stânga).  

---

## Recapitulare pe scurt
1. `display: grid;` pe părinte face o grilă; `grid-template-columns` alege coloanele.  
2. `fr` este o parte din spațiul liber, iar `repeat(2, 1fr)` repetă o coloană de două ori.  
3. `gap` pune spațiu între coloane și rânduri.  
4. `grid-column: 1 / -1;` întinde un element pe tot rândul.  
5. Flexbox este pentru un rând, Grid pentru rânduri și coloane.  
6. `position: sticky;` cu `top: 0;` lipește meniul sus, iar `z-index` îl ține deasupra.

## Quiz scurt
- Pe ce element pui `display: grid;`: pe părinte sau pe copii?  
- Ce înseamnă `repeat(2, 1fr)`?  
- Cum întinzi un element pe tot rândul?  
- Când folosești Flexbox și când Grid?  
- De ce are nevoie `position: sticky;` ca să funcționeze?

## Temă
1. Termină grila paginii `tema.html`: capitolele în coloane, cu `gap`, fișa pe tot rândul și meniul lipit sus. Salvează în `Prenume_Nume_W3_L6`.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Trei coloane.**

```css
main {
  grid-template-columns: repeat(3, 1fr);
}
```

Cu trei coloane, capitolele sunt mai înguste. Uită-te dacă mai încap textele și gândește-te cum ar arăta pe telefon.

**Acasă 2 — Meniul care se lipește puțin mai jos.**

```css
nav {
  top: 10px;
}
```

Meniul se oprește la 10px de marginea de sus. Schimbă valoarea și vezi ce se întâmplă.

4. **Încă patru exerciții (B–E):**

**B — Ce face regula?** Spune ce face fiecare regulă: (1) `grid-template-columns: 1fr 1fr 1fr;`; (2) `grid-template-columns: 2fr 1fr;`; (3) `gap: 20px;`; (4) `grid-column: 1 / -1;`; (5) `position: sticky; top: 0;`.

**C — Scrie regula.** Scrie în CSS: (1) o grilă `.galerie` cu patru coloane egale și `gap` de 10px; (2) un element `.mare` care ocupă tot rândul; (3) un `header` care rămâne lipit sus și stă deasupra celorlalte.

**D — Găsește greșelile.** Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
.galerie {
  grid-template-columns: repeat(3, 1 fr);
  gap: 15;
}
```

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: care este diferența dintre Flexbox și Grid? De ce nu mai punem `margin` pe elementele dintr-o grilă cu `gap`? De ce are nevoie `position: sticky;` de `top`?

## Ce urmează — Lecția 7
Învățăm **efectele**: culori care se schimbă lin când treci cu mouse-ul peste un buton sau un card, cu `:hover` și `transition`.

---

## Răspunsuri
- **Quiz scurt:** (1) pe părinte; (2) repetă de două ori o coloană de `1fr`, deci două coloane egale; (3) cu `grid-column: 1 / -1;`; (4) Flexbox pentru elemente pe un rând (meniu, butoane), Grid pentru rânduri și coloane (capitole, pagina); (5) de o valoare `top` (sau `bottom`), de exemplu `top: 0;`.  
- **Tema, exercițiul B:** (1) trei coloane egale; (2) prima coloană de două ori mai lată decât a doua; (3) 20px între coloane și rânduri; (4) elementul ocupă tot rândul; (5) elementul stă normal, apoi se lipește sus când derulezi.  
- **Tema, exercițiul C:** (1) `.galerie { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }`; (2) `.mare { grid-column: 1 / -1; }`; (3) `header { position: sticky; top: 0; z-index: 100; }`.  
- **Tema, exercițiul D:** (1) `1 fr` trebuie `1fr`; (2) `gap: 15` trebuie `15px`; (3) lipsește `display: grid;` pe `.galerie`.  
- **Tema, exercițiul E:** Flexbox așază elemente pe un rând, Grid pe rânduri și coloane; `gap` face spațiul, deci `margin` s-ar aduna; `sticky` trebuie să știe la ce distanță de marginea de sus să se lipească.  
- **Dacă ritmul clasei este lent:** Exemplul 5 (Flexbox sau Grid) este doar o fișă și se poate citi împreună; Exemplul 7 (`z-index`) se poate face scurt. Exemplele 1–4 și 6 sunt obligatorii; Exemplul 4 (o grilă în altă grilă) se poate face pe pagina de probă, cu lista deja copiată.  
- **Bonus (indicii):** (1) pune o clasă (de exemplu `.mare`) pe primul capitol și scrie `.mare { grid-column: span 2; }`; (2) `href="#titlu-pagina"` merge doar dacă `<h1>` are `id="titlu-pagina"`; (3) `position: fixed;` se raportează la fereastră, nu la pagină, deci butonul rămâne în colț când derulezi; (4) bifa `grid` apare când apeși pe elementul care are `display: grid;`.  
- **Notă informativă:** `position: relative`, `absolute` și `fixed` (în afară de butonul „Sus” din Bonus), `grid-column: span`, `grid-auto-rows`, `grid-row` și `auto-fit`/`minmax` nu sunt în lecția de bază. Grila cu două coloane devine o singură coloană pe telefon în lecția 9.
