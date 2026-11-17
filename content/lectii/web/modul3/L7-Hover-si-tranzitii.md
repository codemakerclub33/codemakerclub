# LECȚIA 7 — Pagina prinde viață
### `:hover` și tranziții
**Modulul 3 · CSS: Stil și culoare · 2 ore**  
**Code Maker Club · CSS Stylist**

> O pagină care reacționează când treci cu mouse-ul peste ea pare **vie**. Azi înveți să schimbi culoarea unui link sau să ridici un capitol când îl atingi cu cursorul, și să faci schimbarea **lină**, nu bruscă. Lucrezi tot pe `tema.html`, în același `stil.css`.  
> Proiect: **„Pagina prinde viață”** · folder: `Prenume_Nume_W3_L7` (ex. `Ana_Pop_W3_L7`)

---

## Ce facem azi
La final linkurile din meniul paginii tale își schimbă culoarea lin când treci peste ele (și când le selectezi cu tastatura), meniul are un submeniu care apare sub link, iar capitolele se ridică ușor și primesc o umbră mai mare. Efectele spun vizitatorului „aici poți apăsa”. Folosite cu măsură, fac o pagină plăcută; folosite prea mult, o obosesc.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · copiem folderul lecției trecute |
| 15–35 | `:hover` și `:focus` (**Exemplele 1–2**) |
| 35–50 | `transition`: schimbare lină (**Exemplul 3**) |
| 50–65 | `transform` și umbră la `:hover` (**Exemplul 4**) |
| 65–75 | Starea „apăsat” · mai multe proprietăți în `transition` (**Exemplul 5**) |
| 75–95 | Piesă nouă: submeniul · `position` și afișarea la `:hover` (**Exemplele 6–7**) |
| 95–110 | Mini-proiect: toate la un loc (**Exemplul 8**) |
| 110–115 | Verificare: se mișcă lin și nimic nu sare? |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `:hover`, `:focus`, `:active` | Stil după stare: mouse deasupra, selectat, apăsat | `nav a:hover` |
| `transition` | Schimbare lină | `0.3s ease` |
| `transform: translateY(…)` | Mută un element în sus sau în jos | `translateY(-5px)` |
| `position: relative;` și `absolute;` | Un element se așază față de părintele lui, în afara rândului | submeniul |
| `display: none;` | Ascunde un element | submeniul, până treci peste el |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- `display: grid;` face rânduri și coloane, iar `fr` este o parte din spațiul liber;
- `gap` pune spațiu între capitole;
- `grid-column: 1 / -1;` întinde un element pe tot rândul;
- `position: sticky;` cu `top: 0;` lipește meniul sus.

**Încearcă tu (8 min)**  
- [ ] Creează folderul `Prenume_Nume_W3_L7` ca o **copie** a folderului `Prenume_Nume_W3_L6` (cu `tema.html`, `stil.css`, `imagini`, `media`)  
- [ ] Deschide `tema.html` cu Live Server și treci cu mouse-ul peste meniu și capitole: reacționează?  
- [ ] Notează într-un comentariu două lucruri din pagină care ar trebui să reacționeze (linkuri, capitole)  

> De aici înainte, exemplele arată ce scrii în `stil.css`, pe piesele paginii-model despre delfin.

---

## 2. Stări: `:hover` și `:focus`

### Exemplul 1 — `:hover`

```css
nav a:hover {
  background-color: var(--principala);
  color: white;
}
```

`:hover` este o **stare**: se aplică doar cât timp cursorul stă **deasupra** elementului. Se scrie după selector, fără spațiu: `nav a:hover` înseamnă „linkurile din meniu, când mouse-ul e peste ele”. Când ridici mouse-ul, stilul dispare.

### Exemplul 2 — `:focus`

Nu toată lumea folosește mouse-ul: unii folosesc **tastatura** (tasta Tab sare de la link la link). Elementul pe care ești cu tastatura are starea `:focus`. Pui aceleași reguli și la `:focus`:

```css
nav a:hover,
nav a:focus {
  background-color: var(--principala);
  color: white;
}
```

Virgula spune „și când e în `:hover`, și când e în `:focus`”. Așa pagina se vede bine și cu mouse-ul, și cu tastatura.

**Încearcă tu (7 min)**  
- [ ] Pune `:hover` pe linkurile din meniu: culoare nouă de fundal și text alb  
- [ ] Apasă Tab de mai multe ori și urmărește care link e selectat  
- [ ] Adaugă `:focus` la aceeași regulă și apasă din nou Tab  

**Gata când:**  
- [ ] Linkurile din meniu se schimbă la `:hover`  
- [ ] Se schimbă și la `:focus`, când apeși Tab  

---

## 3. Schimbarea lină

### Exemplul 3 — `transition`

Fără `transition`, culoarea sare dintr-o dată. Cu ea, trece lin:

```css
nav a {
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

- `background-color` și `color` sunt **proprietățile** care se schimbă lin;  
- `0.3s` este **durata** (trei zecimi de secundă). Pentru efecte la pagină, `0.2s`–`0.4s` este de obicei potrivit;  
- `ease` face schimbarea să înceapă și să se termine mai încet.

Pui `transition` pe **starea normală** (`nav a`), nu pe `:hover`. Așa schimbarea e lină și la intrare, și la ieșire.

**Încearcă tu (6 min)**  
- [ ] Pune `transition` pe `nav a`, pentru `background-color` și `color`  
- [ ] Schimbă durata în `1s` și simte diferența, apoi revino la `0.3s`  
- [ ] Mută `transition` pe `:hover` și vezi ce se întâmplă când ridici mouse-ul  

---

## 4. Capitole care se ridică

### Exemplul 4 — `transform: translateY()` și umbră

```css
.carte {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.carte:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
}
```

- `transform` mută sau schimbă elementul **fără să strice restul paginii**. `translateY(-5px)` îl urcă cu 5px (minus înseamnă în sus; plus, în jos). Elementele din jur rămân unde sunt;  
- la `:hover` capitolul urcă, iar umbra devine mai mare, ca și cum s-ar desprinde de pagină;  
- `transition` e scris pe `.carte` (starea normală) și enumeră **ambele** proprietăți care se schimbă, separate prin virgulă.

**Încearcă tu (7 min)**  
- [ ] Fă capitolele să se ridice cu `translateY(-5px)` la `:hover`  
- [ ] Adaugă o umbră mai mare la `:hover` și `transition` pe `.carte`  
- [ ] Încearcă `-2px` și `-10px` și alege ce ți se pare mai blând  

**Gata când:**  
- [ ] Capitolele se ridică lin la `:hover`  
- [ ] Umbra crește odată cu ridicarea  

---

## 5. Apăsat și mai multe proprietăți

### Exemplul 5 — `:active` și lista din `transition`

`:active` este starea „**apăsat**”: cât ții clicul apăsat.

```css
nav a:active {
  transform: translateY(2px);
}
```

Butonul „se apasă” în jos cu 2px.

Când se schimbă mai multe proprietăți, le scrii în **același** `transition`, separate prin virgulă, cum ai făcut la `.carte`. Poți scrie și `transition: all 0.3s;`, care schimbă lin orice se schimbă, dar încetinește pagina și poate anima lucruri la care nu te-ai gândit, deci **evită `all`**: enumeră proprietățile.

> Dacă scrii `transition` de două ori pe același element, a doua înlocuiește prima.

**Încearcă tu (6 min)**  
- [ ] Adaugă `:active` pe linkurile din meniu  
- [ ] Verifică dacă `.carte` are un singur `transition`, cu două proprietăți  
- [ ] Înlocuiește un `all`, dacă ai scris unul, cu proprietățile exacte  

---

## 6. Submeniul

### Piesă nouă de HTML: submeniul

Azi meniul primește un **submeniu**: o listă care apare sub un link când treci peste el. Copiază în `<nav>`, în lista `<ul>` principală, **după ultimul `<li>`**:

```html
<li>
  <a href="#">Mai mult</a>
  <ul>
    <li><a href="#">Salturile</a></li>
    <li><a href="#">Sunetele</a></li>
  </ul>
</li>
```

Scrie linkurile **după subiectul tău**. Observă că lista mică stă **în interiorul** unui `<li>` din meniu. Până îi dăm stil, ea apare lângă link; o așezăm sub el în Exemplul 6 și o ascundem în Exemplul 7.

### Exemplul 6 — `position: relative;` și `absolute;`

```css
nav li {
  position: relative;
}

nav li ul {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 160px;
  padding: 0;
  background-color: white;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
}
```

- `position: relative;` pe `li` îl face **punctul de plecare** pentru ce stă în el;  
- `position: absolute;` scoate submeniul din rândul normal și îl așază față de `li`: `top: 100%;` înseamnă „imediat sub link”, iar `left: 0;` „la marginea din stânga”;  
- regula `nav ul` din Lecția 5 se aplică și submeniului, de aceea îi dăm `padding: 0;`;  
- submeniul nu mai împinge restul paginii: **plutește** deasupra.

### Exemplul 7 — Apare doar la `:hover`

```css
nav li ul {
  display: none;
}

nav li:hover ul,
nav li:focus-within ul {
  display: block;
}
```

- `display: none;` ascunde submeniul;  
- `nav li:hover ul` înseamnă „lista din `li`, când mouse-ul e peste `li`”: submeniul apare. Cât ții mouse-ul pe submeniu, el rămâne deschis, pentru că și el e în interiorul lui `li`;  
- `:focus-within` înseamnă „un element din interior are `:focus`”: așa se deschide submeniul și când sari cu tasta Tab.

**Încearcă tu (8 min)**  
- [ ] Copiază submeniul în `tema.html`, cu linkurile tale  
- [ ] Scrie regulile din Exemplul 6 și vezi submeniul sub link  
- [ ] Adaugă `display: none;` și regula de `:hover`, apoi apasă Tab ca să verifici `:focus-within`  

**Gata când:**  
- [ ] Submeniul stă sub link, nu împinge pagina și apare doar la `:hover` sau `:focus-within`  

---

## 7. Mini-proiect: toate la un loc

### Exemplul 8 — Tot ce ai învățat azi, în `stil.css`

Pagina despre delfin (cea din Lecția 1) primește în HTML doar submeniul de mai sus. În `stil.css` păstrezi tot ce ai făcut în lecțiile 2–6 și adaugi o secțiune nouă, **Efectele**. Delfinul este **modelul tău**:

```css
/* Efectele */
nav a {
  transition: background-color 0.3s ease, color 0.3s ease;
}

nav a:hover,
nav a:focus {
  background-color: var(--principala);
  color: white;
}

nav a:active {
  transform: translateY(2px);
}

nav li {
  position: relative;
}

nav li ul {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 160px;
  padding: 0;
  background-color: white;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
}

nav li:hover ul,
nav li:focus-within ul {
  display: block;
}

.carte {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.carte:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
}
```

Meniul reacționează la mouse și la tastatură și are un submeniu care apare doar când treci peste el, iar capitolele se ridică lin. Observă că `transition` stă pe starea normală, iar `:hover` doar schimbă valorile.

**Acum e rândul tău:** fă-ți propria pagină după modelul Delfinul, cu **subiectul tău și culorile tale**. Nu copia valorile delfinului: alege-ți durata, înălțimea de ridicare, linkurile din submeniu și culorile.

**Încearcă tu (10 min)**  
- [ ] Adaugă în `stil.css` secțiunea „Efectele”, cu `transition` pe starea normală și `:hover` și `:focus` pe meniu  
- [ ] Fă capitolele să se ridice lin, cu umbră mai mare, la `:hover`; pune submeniul sub link  
- [ ] Compară cu modelul: ai toate cele cinci părți (meniul, submeniul, ridicarea, umbra, tranziția)?  

**Gata când:**  
- [ ] Linkurile din meniu reacționează la `:hover` și `:focus`  
- [ ] Capitolele se ridică lin, cu umbră mai mare, la `:hover`  
- [ ] Submeniul apare sub link doar la `:hover` sau `:focus-within`  
- [ ] `transition` este scris pe starea normală și are durate de 0.2s–0.4s  

---

## De făcut azi — „Pagina prinde viață”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | `tema.html` cu linkurile din meniu care își schimbă culoarea la `:hover`, cu `transition` |
| **Complet** | Minim + `:focus` la meniu, capitole care se ridică cu umbră mai mare la `:hover`, `:active` pe meniu, submeniu care apare la `:hover` și verificarea cu tasta Tab |

### Pasul 1 — Minim
Pe `tema.html`, fă linkurile din meniu să-și schimbe culoarea lin la `:hover`.

- [ ] Folderul `Prenume_Nume_W3_L7` are `tema.html` și `stil.css`  
- [ ] `nav a:hover` schimbă fundalul și culoarea textului  
- [ ] `nav a` are `transition`  

### Pasul 2 — Complet
Îmbunătățești pagina:

- [ ] Ai `:focus` la aceeași regulă ca `:hover` și ai verificat cu Tab  
- [ ] Capitolele se ridică lin la `:hover`, cu umbră mai mare  
- [ ] Meniul are `:active` și un submeniu care apare doar la `:hover`  
- [ ] Nu ai folosit `transition: all`  

---

## Bonus ★★★ — Provocare: Rânduri alternative și zoom
*Doar dacă ai terminat Complet.*

Faci tabelul din „Fișa pe scurt” și imaginile să reacționeze.

- [ ] Fă rândurile tabelului alternative: `tr:nth-child(even) { background-color: #e8f1f2; }`  
- [ ] Fă rândul peste care treci să se coloreze: `tr:hover { background-color: lightyellow; }`  
- [ ] Fă o imagine să se mărească puțin la `:hover`: `img { transition: transform 0.3s ease; }` și `img:hover { transform: scale(1.05); }`  
- [ ] Deschide DevTools (**F12**; pe Mac Cmd + Option + I), apasă pe un link, apoi pe butonul `:hov` din panoul **Styles** și bifează `:hover`: vezi regulile de `:hover` fără să ții mouse-ul acolo  

---

## Greșeli frecvente
1. **Ai pus spațiu înainte de `:hover`** — `nav a :hover` nu merge; scrie `nav a:hover`.  
2. **Ai uitat unitatea la durată** — `transition: color 0.3;` nu merge; scrie `0.3s`.  
3. **Ai pus `transition` pe `:hover`** — schimbarea e lină doar la intrare; pune-l pe starea normală.  
4. **Ai scris `transition` de două ori** pe același element — a doua o înlocuiește pe prima.  
5. **Ai scris `translateY(5)`** fără unitate — scrie `translateY(5px)`.  
6. **Ai folosit `transition: all`** — enumeră proprietățile.  
7. **Efectul e prea mare sau prea lung** — ține-te de 0.2s–0.4s și de mutări mici.  
8. **Ai pus efecte doar la `:hover`** — pe telefon nu există mouse, deci pagina trebuie să arate bine și fără efect.  

---

## Recapitulare pe scurt
1. `:hover` se aplică cât timp mouse-ul e deasupra; `:focus` când elementul e selectat cu tastatura; `:active` când e apăsat.  
2. `transition` face schimbarea lină; se scrie pe starea normală.  
3. `transform: translateY(-5px)` urcă un element fără să mute restul paginii.  
4. Mai multe proprietăți în `transition` se separă prin virgulă.  
5. Evită `transition: all`.  
6. Efectele sunt blânde: 0.2s–0.4s și mutări mici.

## Quiz scurt
- Ce face `:hover`?  
- De ce punem și `:focus`?  
- Unde scriem `transition`: pe starea normală sau pe `:hover`?  
- Ce face `transform: translateY(-5px);`?  
- De ce evităm `transition: all`?

## Temă
1. Termină efectele paginii `tema.html`: meniu cu `:hover`, `:focus` și `transition`, și capitole care se ridică lin. Salvează în `Prenume_Nume_W3_L7`.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Subliniere la `:hover` pe linkurile din text.**

```css
.carte a {
  text-decoration: none;
}

.carte a:hover {
  text-decoration: underline;
}
```

Linkurile din capitole par curate și arată sublinierea doar când treci peste ele.

**Acasă 2 — Rândul de tabel colorat la `:hover`.**

```css
tr:hover {
  background-color: lightyellow;
}
```

Rândul peste care treci se colorează, ca să urmărești ușor datele din „Fișa pe scurt”.

4. **Încă patru exerciții (B–E):**

**B — Ce face regula?** Spune ce face fiecare regulă: (1) `nav a:hover { color: red; }`; (2) `transition: color 0.5s;`; (3) `transform: translateY(-10px);`; (4) `nav a:focus { background-color: gold; }`; (5) `nav a:active { transform: translateY(2px); }`.

**C — Scrie regula.** Scrie în CSS: (1) un link `.buton` cu fundal albastru care devine verde la `:hover`; (2) schimbarea culorii să dureze o jumătate de secundă; (3) o `.cutie` care se ridică cu 8px la `:hover`.

**D — Găsește greșelile.** Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
.buton :hover {
  background-color: green
}

.buton {
  transition: background-color 0.3;
}
```

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: de ce punem și `:focus`, nu doar `:hover`? De ce scriem `transition` pe starea normală? De ce nu e bine să punem prea multe efecte într-o pagină?

## Ce urmează — Lecția 8
Învățăm **animațiile**: elemente care se mișcă singure, fără să le atingi, cu `@keyframes`.

---

## Răspunsuri
- **Quiz scurt:** (1) aplică stilul cât timp cursorul e deasupra elementului; (2) pentru cei care folosesc tastatura (Tab); (3) pe starea normală, ca schimbarea să fie lină și la intrare, și la ieșire; (4) urcă elementul cu 5px, fără să mute restul paginii; (5) pentru că încetinește pagina și poate anima lucruri la care nu te-ai gândit.  
- **Tema, exercițiul B:** (1) linkul devine roșu cât timp mouse-ul e peste el; (2) culoarea se schimbă lin, în jumătate de secundă; (3) elementul urcă cu 10px; (4) linkul selectat cu tastatura devine auriu; (5) elementul coboară 2px cât ții clicul apăsat.  
- **Tema, exercițiul C:** (1) `.buton { background-color: blue; } .buton:hover { background-color: green; }`; (2) `.buton { transition: background-color 0.5s; }`; (3) `.cutie { transition: transform 0.3s; } .cutie:hover { transform: translateY(-8px); }`.  
- **Tema, exercițiul D:** (1) `.buton :hover` are spațiu, trebuie `.buton:hover`; (2) lipsește `;` după `green`; (3) `0.3` trebuie `0.3s`.  
- **Tema, exercițiul E:** pentru că nu toată lumea folosește mouse-ul; ca să fie lină și la intrare, și la ieșire; efectele prea multe obosesc ochii și distrag de la conținut.  
- **Dacă ritmul clasei este lent:** Exemplul 5 (`:active`) se poate face scurt; Exemplul 2 (`:focus`) rămâne obligatoriu, pentru accesibilitate. Submeniul (Exemplele 6–7) este piesa nouă a lecției: dacă nu ajung la el, îl pot termina acasă, cu codul din Exemplul 8.  
- **Notă pentru profesor:** `scale`, `rotate`, `:nth-child` și zoom-ul pe imagini apar doar în Bonus; `cursor` nu face parte din lecție. `position: relative` și `absolute` apar doar pentru submeniu (nu sunt predate separat), iar `:focus-within` doar ca o linie în plus pentru tastatură. Efectele de `:hover` nu funcționează pe telefon, deci verificați împreună cu elevii că pagina arată bine și fără ele.
