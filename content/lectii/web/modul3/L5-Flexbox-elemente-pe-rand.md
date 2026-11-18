# LECȚIA 5 — Meniul pe un rând
### Flexbox: elemente pe rând
**Modulul 3 · CSS: Stil și culoare · 2 ore**  
**Code Maker Club · CSS Stylist**

> Până acum, elementele pe care le-ai pus în pagină stau una sub alta. Cu **Flexbox** le poți așeza **pe un rând**, le poți centra și le poți distanța. Azi îl folosim ca să transformi lista de linkuri din `nav` într-un **meniu orizontal**. Lucrezi tot pe `tema.html`, în același `stil.css`.  
> Proiect: **„Meniul pe un rând”** · folder: `Prenume_Nume_W3_L5` (ex. `Ana_Pop_W3_L5`)

---

## Ce facem azi
La final pagina ta are un meniu orizontal, cu butoane pe un rând, centrate, cu spațiu între ele și care trec pe rândul următor când ecranul e îngust, și un subsol centrat. Aproape toate paginile de pe internet au un meniu pe un rând, iar Flexbox este cea mai simplă metodă să-l faci.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · copiem folderul lecției trecute |
| 15–35 | `display: flex;` · direcția și axele (**Exemplele 1–2**) |
| 35–55 | `justify-content` și `align-items` (**Exemplele 3–4**) |
| 55–70 | `gap` și `flex-wrap` (**Exemplul 5**) |
| 70–85 | Piesă nouă: capitol cu poză · poza lângă text (**Exemplul 6**) |
| 85–95 | Meniul complet (**Exemplul 7**) |
| 95–110 | Mini-proiect: toate la un loc (**Exemplul 8**) |
| 110–115 | Verificare: se vede meniul pe un rând și trece pe rândul următor? |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `display: flex;` | Pune copiii pe un rând (pe părinte) | `nav ul { … }` |
| `flex-direction` | Alege direcția | `row`, `column` |
| `justify-content`, `align-items` | Așază pe axa principală și pe cea secundară | `center`, `space-between` |
| `gap`, `flex-wrap: wrap;` | Spațiu între elemente; rând nou când nu încap | `10px` |
| `flex: 1;` | Elementul ia tot spațiul rămas pe rând | text lângă poză |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- fiecare element este o cutie: conținut, `padding`, `border`, `margin`;
- `* { box-sizing: border-box; }` face ca `width` să includă `padding` și `border`;
- `margin: 0 auto;` centrează o cutie cu lățime;
- `border-radius` și `box-shadow` fac cartonașe.

**Încearcă tu (8 min)**  
- [ ] Creează folderul `Prenume_Nume_W3_L5` ca o **copie** a folderului `Prenume_Nume_W3_L4` (cu `tema.html`, `stil.css`, `imagini`, `media`)  
- [ ] Deschide `tema.html` cu Live Server și uită-te la meniu: cum stau linkurile acum?  
- [ ] Notează într-un comentariu cum ai vrea să arate meniul  

> De aici înainte, exemplele arată ce scrii în `stil.css`, pe piesele paginii-model despre delfin.

---

## 2. Un rând și direcția

### Exemplul 1 — `display: flex;`

Meniul din pagină este o listă de linkuri:

```html
<nav>
  <ul>
    <li><a href="#descriere">Descriere</a></li>
    <li><a href="#hrana">Hrana</a></li>
  </ul>
</nav>
```

Fără stil, elementele din listă stau **unul sub altul**, cu buline. Scoatem bulinele și punem lista pe un rând:

```css
nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
```

Elementele `li` s-au așezat **unul lângă altul**. Ai făcut din `nav ul` un **container flex**, iar `li`-urile din el sunt **elementele flex**. Regula se scrie pe **părinte**, nu pe copii. `list-style: none;` scoate bulinele, iar `margin: 0; padding: 0;` scot spațiul pe care browserul îl pune implicit la o listă.

### Exemplul 2 — Direcția: `flex-direction`

```css
nav ul {
  display: flex;
  flex-direction: row;
}
```

- `row` (implicit): elementele stau **pe rând**, de la stânga la dreapta;  
- `column`: elementele stau **una sub alta**.

Direcția dă cele **două axe** pe care se așază elementele:

| | La `row` | La `column` |
|---|----------|-------------|
| **Axa principală** (direcția elementelor) | orizontală | verticală |
| **Axa secundară** (perpendiculară) | verticală | orizontală |

Axele contează în secțiunea următoare: `justify-content` lucrează pe axa principală, iar `align-items` pe cea secundară.

**Încearcă tu (7 min)**  
- [ ] Pune `display: flex;` pe `nav ul` și scoate bulinele  
- [ ] Schimbă direcția cu `column`, apoi revino la `row`  
- [ ] Scrie într-un comentariu care este axa principală la `row` și care la `column`  

**Gata când:**  
- [ ] Linkurile din meniu stau pe un rând, fără buline  
- [ ] Poți spune care sunt cele două axe  

---

## 3. Așezarea pe axe

### Exemplul 3 — `justify-content`

```css
nav ul {
  display: flex;
  justify-content: center;
}
```

`justify-content` răspunde la întrebarea „cum împart **spațiul rămas** pe rând?”. Valori:

| Valoare | Cum se așază |
|---------|--------------|
| `flex-start` | la început (implicit) |
| `center` | la mijloc |
| `flex-end` | la sfârșit |
| `space-between` | primul la început, ultimul la sfârșit, restul distanțate egal |

Încearcă fiecare valoare și vezi cum se mută linkurile.

### Exemplul 4 — `align-items`

```css
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
}
```

`align-items` așază elementele pe **cealaltă axă** (la `row`, pe verticală). Valori: `stretch` (implicit: toate la fel de înalte), `flex-start` (sus), `center` (la mijloc), `flex-end` (jos). Pentru ca ea să se vadă, containerul trebuie să aibă o **înălțime** mai mare decât elementele, de aceea am pus `height: 80px;`.

Combinația `justify-content: center;` plus `align-items: center;` pune un element **exact la mijlocul** containerului, pe ambele axe. Este cea mai simplă centrare din CSS.

**Încearcă tu (7 min)**  
- [ ] Încearcă pe rând valorile lui `justify-content` pe meniu și notează ce face fiecare  
- [ ] Pune `footer` să fie flex, înalt de 80px, cu textul centrat pe ambele axe  
- [ ] Schimbă `align-items` în `flex-start`, apoi în `flex-end`  

---

## 4. Distanță și rânduri

### Exemplul 5 — `gap` și `flex-wrap`

```css
nav ul {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
```

- `gap` pune spațiu **între** elemente, fără să umple marginile din exterior și fără să calculezi `margin` pentru fiecare;  
- în mod normal, elementele flex se **înghesuie** pe un rând, chiar dacă nu mai au loc. Cu `flex-wrap: wrap;` ele trec **pe rândul următor** când nu mai încap. Micșorează fereastra browserului și privește meniul: linkurile cad pe un rând nou, în loc să iasă din ecran.

**Încearcă tu (7 min)**  
- [ ] Pune `gap: 10px;` pe meniu și vezi spațiul dintre linkuri  
- [ ] Adaugă `flex-wrap: wrap;` și micșorează fereastra: ce se întâmplă?  
- [ ] Scoate `flex-wrap` și micșorează din nou: ce se întâmplă acum?  

**Gata când:**  
- [ ] Linkurile au `gap` între ele  
- [ ] Cu `flex-wrap: wrap;`, linkurile trec pe rândul următor când micșorezi fereastra  

---

## 5. Imagine și text alături

### Piesă nouă de HTML: capitol cu poză

Azi pagina primește un capitol nou, cu o **poză** și un text **alături**. Copiază-l în `<main>`, **după caseta „Știai că?”**:

```html
<section class="carte cu-poza">
  <img src="imagini/delfin.jpg" alt="Un delfin sărind din apă" width="300">
  <div>
    <h2>Un salt spectaculos</h2>
    <p>Delfinii pot sări mai sus de trei metri deasupra apei.</p>
  </div>
</section>
```

Pune în folderul `imagini` o poză despre **subiectul tău** (sau folosește una din Modulul 2), scrie numele ei la `src` și un text al tău. Capitolul are **două clase** (`carte`, pentru chenar, și `cu-poza`, pentru așezare), iar în el stau două elemente: `img` și `div`. Până îi dăm stil, poza și textul sunt una sub alta; le punem pe un rând în Exemplul 6.

### Exemplul 6 — Poza lângă text

```css
.cu-poza {
  display: flex;
  align-items: center;
  gap: 20px;
}

.cu-poza img {
  width: 200px;
  border-radius: 12px;
}

.cu-poza div {
  flex: 1;
}
```

- `.cu-poza` este **containerul flex**, iar `img` și `div` sunt elementele lui;  
- `align-items: center;` pune poza la mijlocul textului, pe verticală;  
- `flex: 1;` pe text înseamnă „ia **tot spațiul rămas** pe rând, după poză”.

**Încearcă tu (8 min)**  
- [ ] Copiază capitolul cu poză în `tema.html`, cu poza și textul tău  
- [ ] Scrie regulile pentru `.cu-poza` și pune poza lângă text  
- [ ] Schimbă `align-items` în `flex-start`, apoi în `center`, și vezi unde stă poza  
- [ ] Scoate `flex: 1;` și vezi ce se întâmplă cu textul  

**Gata când:**  
- [ ] Poza și textul stau pe același rând  
- [ ] Poza este la mijlocul textului, pe verticală  

---

## 6. Meniul complet

### Exemplul 7 — Linkurile ca butoane

```css
nav {
  background-color: white;
  border-bottom: 3px solid var(--principala);
}

nav ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 10px;
}

nav a {
  display: block;
  padding: 8px 16px;
  border: 2px solid var(--principala);
  border-radius: 8px;
}
```

Un link este implicit „în rând”: nu primește bine `padding` sus și jos. Cu `display: block;` primește `padding`, chenar și colțuri rotunjite, ca un **buton**. Culoarea și lipsa sublinierii le ai din lecția 3.

**Încearcă tu (7 min)**  
- [ ] Dă lui `nav` un fundal și o linie jos  
- [ ] Fă din linkuri butoane, cu `padding`, chenar și colțuri rotunjite  
- [ ] Centrează meniul și verifică-l pe o fereastră îngustă  

---

## 7. Mini-proiect: toate la un loc

### Exemplul 8 — Tot ce ai învățat azi, în `stil.css`

Pagina despre delfin (cea din Lecția 1) primește în HTML doar capitolul cu poză de mai sus. În `stil.css` păstrezi tot ce ai făcut în lecțiile 2–4 și adaugi o secțiune nouă, **Meniul, poza și subsolul**. Delfinul este **modelul tău**:

```css
/* Meniul, poza și subsolul */
nav {
  background-color: white;
  border-bottom: 3px solid var(--principala);
}

nav ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 10px;
}

nav a {
  display: block;
  padding: 8px 16px;
  border: 2px solid var(--principala);
  border-radius: 8px;
}

.cu-poza {
  display: flex;
  align-items: center;
  gap: 20px;
}

.cu-poza img {
  width: 200px;
  border-radius: 12px;
}

.cu-poza div {
  flex: 1;
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
}
```

Meniul stă pe un rând, centrat, cu butoane, și trece pe rândul următor pe un ecran îngust. Capitolul nou are poza lângă text, iar subsolul are textul exact la mijloc.

**Acum e rândul tău:** fă-ți propria pagină după modelul Delfinul, cu **subiectul tău și culorile tale**. Nu copia cifrele delfinului: alege-ți `gap`, `padding`, mărimea pozei și culorile.

**Încearcă tu (10 min)**  
- [ ] Adaugă în `stil.css` secțiunea „Meniul și subsolul”, cu `display: flex;` pe `nav ul`  
- [ ] Fă din linkuri butoane și centrează-le, cu `gap` și `flex-wrap`; pune poza lângă text  
- [ ] Compară cu modelul: ai toate cele cinci părți (rândul, centrarea, spațiul, poza, subsolul)?  

**Gata când:**  
- [ ] Meniul stă pe un rând, fără buline, cu `display: flex;` pe `nav ul`  
- [ ] Linkurile sunt butoane, centrate, cu `gap` între ele  
- [ ] Meniul trece pe rândul următor pe o fereastră îngustă  
- [ ] Capitolul cu poză are poza lângă text, cu `flex: 1;` pe text  
- [ ] Subsolul are textul centrat cu Flexbox  

---

## De făcut azi — „Meniul pe un rând”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | `tema.html` cu meniul pe un rând (`display: flex;`), fără buline |
| **Complet** | Minim + linkuri ca butoane, centrate, cu `gap`, `flex-wrap: wrap;` verificat pe fereastră îngustă un capitol cu poza lângă text și un subsol centrat |

### Pasul 1 — Minim
Pe `tema.html`, pune meniul pe un rând și scoate bulinele.

- [ ] Folderul `Prenume_Nume_W3_L5` are `tema.html` și `stil.css`  
- [ ] `nav ul` are `display: flex;` și `list-style: none;`  
- [ ] Pagina se vede în browser, cu Live Server pornit  

### Pasul 2 — Complet
Îmbunătățești pagina:

- [ ] Linkurile sunt butoane, cu `padding`, chenar și colțuri rotunjite  
- [ ] Meniul este centrat, cu `gap`, și are `flex-wrap: wrap;`  
- [ ] Ai verificat meniul pe o fereastră îngustă  
- [ ] Capitolul cu poză are poza lângă text  
- [ ] Subsolul are textul centrat pe ambele axe  

---

## Bonus ★★★ — Provocare: Galeria în rând
*Doar dacă ai terminat Complet.*

Faci o galerie de imagini cu Flexbox.

- [ ] Pune în HTML trei imagini din folderul `imagini` într-un `<div class="galerie">`  
- [ ] Pune pe `.galerie` `display: flex;`, `gap: 10px;` și `flex-wrap: wrap;`  
- [ ] Pune pe imagini `flex: 1;` (ca pe text în Exemplul 6 din această lecție), ca să împartă egal lățimea rândului (și păstrează `max-width: 100%;`)  
- [ ] Deschide DevTools (**F12**; pe Mac Cmd + Option + I), apasă pe `.galerie` și apasă bifa `flex` de lângă `display: flex;`: vezi cum își desenează browserul rândul  

---

## Greșeli frecvente
1. **Ai uitat `display: flex;`** — `justify-content` și `gap` nu au efect fără el.  
2. **Ai scris `display: flex;` pe `li`** în loc de pe `ul` — regula se pune pe părinte.  
3. **Bulinele rămân** — ai uitat `list-style: none;`.  
4. **Ai încurcat axele** — `justify-content` lucrează pe axa principală, `align-items` pe cea secundară.  
5. **`align-items: center;` nu face nimic** — containerul nu are înălțime mai mare decât elementele.  
6. **Meniul iese din ecran** — ai uitat `flex-wrap: wrap;`.  
7. **Ai scris `justify-content: middle;`** — corect este `center`.  
8. **Ai pus `gap` pe elemente** — el se scrie pe container.  

---

## Recapitulare pe scurt
1. `display: flex;` pe părinte pune copiii pe un rând.  
2. `flex-direction` alege direcția: `row` sau `column`.  
3. `justify-content` așază pe axa principală, iar `align-items` pe cea secundară.  
4. `gap` pune spațiu între elemente.  
5. `flex-wrap: wrap;` lasă elementele să treacă pe rândul următor.  
6. Un meniu: `nav ul` flex, fără buline, cu linkuri ca butoane.

## Quiz scurt
- Pe ce element pui `display: flex;`: pe părinte sau pe copii?  
- Care este diferența dintre `justify-content` și `align-items`?  
- Cum scoți bulinele de la o listă?  
- Ce face `flex-wrap: wrap;`?  
- Cum pui un element exact la mijlocul containerului?

## Temă
1. Termină meniul paginii `tema.html`: pe un rând, linkuri ca butoane, centrate, cu `gap` și `flex-wrap`, plus subsolul centrat. Salvează în `Prenume_Nume_W3_L5`.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Antet pe coloană, centrat.**

```css
header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

Titlul și paragraful din antet stau unul sub altul, la mijloc, fără `text-align`. La `column`, `align-items` lucrează pe orizontală.

**Acasă 2 — Linkuri distanțate de la o margine la alta.**

```css
nav ul {
  justify-content: space-between;
}
```

Primul link ajunge la marginea din stânga, ultimul la cea din dreapta, iar restul se distanțează egal.

4. **Încă patru exerciții (B–E):**

**B — Ce face regula?** Spune ce face fiecare regulă: (1) `display: flex;`; (2) `justify-content: center;`; (3) `align-items: flex-end;`; (4) `gap: 20px;`; (5) `flex-wrap: wrap;`.

**C — Scrie regula.** Scrie în CSS: (1) un `ul` cu clasa `meniu` pe un rând, cu 15px între elemente; (2) elementele din `.meniu` sunt centrate pe rând; (3) un `div` cu clasa `mijloc`, înalt de 150px, care își centrează conținutul pe ambele axe.

**D — Găsește greșelile.** Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
.meniu li {
  display: flex;
  justify-content: middle;
}

.meniu {
  gap: 10px
}
```

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: pe ce element se pune `display: flex;` și de ce? Care este diferența dintre axa principală și axa secundară? Ce se întâmplă cu un meniu pe telefon dacă uiți `flex-wrap: wrap;`?

## Ce urmează — Lecția 6
Învățăm **Grid**: așezăm capitolele în rânduri și coloane, iar meniul rămâne lipit sus când derulezi pagina.

---

## Răspunsuri
- **Quiz scurt:** (1) pe părinte; (2) `justify-content` așază elementele pe axa principală, `align-items` pe cea secundară; (3) cu `list-style: none;`; (4) lasă elementele să treacă pe rândul următor când nu mai încap; (5) `display: flex;` plus `justify-content: center;` și `align-items: center;`, într-un container cu înălțime.  
- **Tema, exercițiul B:** (1) pune copiii pe un rând; (2) îi centrează pe axa principală; (3) îi duce în jos, pe axa secundară; (4) 20px între elemente; (5) elementele trec pe rândul următor când nu încap.  
- **Tema, exercițiul C:** (1) `.meniu { display: flex; gap: 15px; }`; (2) `.meniu { justify-content: center; }`; (3) `.mijloc { display: flex; justify-content: center; align-items: center; height: 150px; }`.  
- **Tema, exercițiul D:** (1) `display: flex;` trebuie pe `.meniu` (părintele), nu pe `li`; (2) `middle` trebuie `center`; (3) lipsește `;` după `10px`.  
- **Tema, exercițiul E:** pe părinte, pentru că el decide cum se așază copiii; axa principală este direcția elementelor, iar cea secundară este perpendiculară; fără `flex-wrap`, linkurile se înghesuie sau ies din ecran.  
- **Dacă ritmul clasei este lent:** Exemplul 4 (`align-items`) se poate face doar pe subsol; Exemplul 7 repetă ce s-a făcut la 1–5 și se poate face scurt. Exemplul 5 este obligatoriu, pentru că meniul se adaptează la telefon în lecția 9, iar Exemplul 6 (poza lângă text) este piesa nouă a paginii.  
- **Bonus (indicii):** (1) imaginile se scriu `<img src="imagini/nume.jpg" alt="descriere">`, toate în același `<div class="galerie">`; (2) dacă imaginile ies prea late, ai uitat `max-width: 100%;`; (3) `flex: 1` se pune pe imagini, nu pe `.galerie`; (4) bifa `flex` apare doar când ai apăsat pe elementul cu `display: flex;`.  
- **Notă informativă:** `flex-basis`, `space-around`, `space-evenly`, `row-reverse` și rândul de carduri care se adaptează nu fac parte din lecția de bază (`flex: 1` apare doar pe textul de lângă poză și în Bonus). Dacă nu ai meniu în `tema.html`, îl poți adăuga din Modulul 2 (lecția 8: `nav` cu linkuri `#`).
