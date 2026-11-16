# LECȚIA 5 — Clubul animalelor: meniu și carduri pe rând
### Flexbox: elemente pe rând
**Modulul 3 · CSS: Stil și culoare · 2 ore**  
**Code Maker Club · CSS Stylist**

> Până acum cutiile tale stăteau una sub alta. Cu **Flexbox** le așezi **una lângă alta**, le distanțezi, le centrezi și le lași să treacă pe rândul următor când nu mai încap. Flexbox este unealta cu care se fac meniurile și rândurile de carduri de pe aproape orice site.  
> Proiect: **„Clubul animalelor: meniu și carduri pe rând”** · folder: `Prenume_Nume_W3_L5` (ex. `Ana_Pop_W3_L5`)

---

## Ce facem azi
La final ai o pagină cu un antet (logo în stânga, meniu în dreapta), un rând de carduri care trec pe rândul următor când fereastra se micșorează și un subsol centrat. Fără Flexbox, să pui trei cutii una lângă alta cerea trucuri greu de ținut minte, iar centrarea pe verticală era o adevărată bătaie de cap. Cu Flexbox faci același lucru în două rânduri, iar rezultatul se adaptează singur la ecrane mari și mici.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · aducem pagina cu articolul de pe Wikipedia |
| 15–30 | Containerul flex (**Exemplul 1**) · direcția și axele (**Exemplul 2**) |
| 30–50 | `justify-content` și `align-items` (**Exemplul 3**) |
| 50–65 | `gap` și `flex-wrap` (**Exemplul 4**) |
| 65–80 | `flex` pe elemente (**Exemplul 5**) |
| 80–95 | Un meniu orizontal (**Exemplul 6**) |
| 95–105 | Carduri pe rând (**Exemplul 7**) |
| 105–115 | Mini-proiect: Clubul animalelor (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `display: flex;` | Pune copiii pe un rând (pe părinte) | `.rand { … }` |
| `flex-direction` | Alege direcția | `row`, `column` |
| `justify-content`, `align-items` | Așază pe axa principală și pe cea secundară | `center`, `space-between` |
| `gap`, `flex-wrap: wrap;` | Spațiu între elemente; rând nou când nu încap | `15px` |
| `flex: 1 1 250px;` | Carduri care se adaptează | `flex: 1;` |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- fiecare element este o cutie: conținut, `padding`, `border`, `margin`;
- `* { box-sizing: border-box; }` face ca `width` să includă `padding` și `border`;
- `margin: 0 auto;` centrează o cutie cu lățime;
- `block` ocupă un rând întreg, iar `inline-block` stă în rând.

**Încearcă tu (8 min)**  
- [ ] Creează folderul `Prenume_Nume_W3_L5` cu `index.html` (scheletul complet, legat la `stil.css`) și `stil.css`  
- [ ] Pune `* { box-sizing: border-box; }` prima în `stil.css`  
- [ ] Pune în `<body>` un `<div class="rand">` cu trei `<div class="cutie">` în el, cu numerele 1, 2 și 3  
- [ ] Copiază în folder `tema.html`, `stil.css` și folderele `imagini` și `media` din lecția trecută  

> De aici înainte, exemplele arată ce scrii în `<body>` și, separat, ce scrii în `stil.css`.

---

## 2. Containerul flex

### Exemplul 1 — `display: flex;`

În `index.html`:

```html
<div class="rand">
  <div class="cutie">1</div>
  <div class="cutie">2</div>
  <div class="cutie">3</div>
</div>
```

În `stil.css`:

```css
.cutie {
  background-color: lightblue;
  border: 2px solid navy;
  padding: 20px;
}
```

Fără altceva, cutiile stau **una sub alta**. Acum schimbăm containerul:

```css
.rand {
  display: flex;
}
```

Cele trei cutii s-au așezat **una lângă alta**, pe un singur rând. Ai făcut din `.rand` un **container flex**, iar cutiile din el sunt **elementele flex**. Regula se scrie pe **părinte**, nu pe copii.

**Încearcă tu (5 min)**  
- [ ] Pune `display: flex;` pe `.rand` și privește cum se mută cutiile  
- [ ] Scoate regula și pune-o la loc: ce se schimbă?  
- [ ] Pune încă o cutie în container: ce se întâmplă?  

### Exemplul 2 — Direcția: `flex-direction`

```css
.rand {
  display: flex;
  flex-direction: row;
}

.coloana {
  display: flex;
  flex-direction: column;
}
```

- `row` (implicit): elementele stau **pe rând**, de la stânga la dreapta;  
- `column`: elementele stau **una sub alta**, ca la început;  
- `row-reverse` și `column-reverse`: în ordine inversă.

Direcția dă cele **două axe** pe care se așază elementele:

| | La `row` | La `column` |
|---|----------|-------------|
| **Axa principală** (direcția elementelor) | orizontală | verticală |
| **Axa secundară** (perpendiculară) | verticală | orizontală |

Axele contează în secțiunea următoare, pentru că `justify-content` lucrează pe axa principală, iar `align-items` pe cea secundară.

**Încearcă tu (5 min)**  
- [ ] Schimbă direcția cu `column` și apoi revino la `row`  
- [ ] Încearcă `row-reverse`: în ce ordine apar cutiile?  
- [ ] Scrie într-un comentariu din cod care este axa principală la `row` și care la `column`  

**Gata când:**  
- [ ] Trei cutii stau pe un rând, cu `display: flex;` pus pe părinte  
- [ ] Poți spune care sunt cele două axe  

---

## 3. Așezarea pe axe

### Exemplul 3 — `justify-content` și `align-items`

```css
.rand {
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
| `space-around` | spațiu egal în jurul fiecăruia |
| `space-evenly` | spațiu egal între toate, inclusiv la margini |

Încearcă fiecare valoare și vezi cum se mută cutiile.

Acum cealaltă axă:

```css
.rand {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: lightyellow;
}
```

`align-items` așază elementele pe **cealaltă axă** (la `row`, pe verticală). Valori: `stretch` (implicit: toate la fel de înalte), `flex-start` (sus), `center` (la mijloc), `flex-end` (jos). Pentru ca verticala să aibă ce împărți, containerul are nevoie de o **înălțime** (`height` sau `min-height`).

Combinația `justify-content: center;` plus `align-items: center;` pune un element **exact la mijlocul** containerului, pe ambele axe. Este cea mai simplă centrare din CSS.

**Încearcă tu (5 min)**  
- [ ] Încearcă pe rând toate valorile lui `justify-content` și notează ce face fiecare  
- [ ] Centrează o cutie pe ambele axe, într-un container de 200px înălțime  
- [ ] În `tema.html`, pune titlul `h1` într-un antet cu `display: flex;`, centrat pe ambele axe, înalt de 120px  

---

## 4. Distanță și rânduri

### Exemplul 4 — `gap` și `flex-wrap`

```css
.rand {
  display: flex;
  gap: 15px;
}
```

`gap` pune spațiu **între** elemente, fără să umple marginile din exterior și fără să calculezi `margin` pentru fiecare. Poți scrie `gap: 10px 20px;` (întâi între rânduri, apoi între coloane).

```css
.rand {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.cutie {
  width: 150px;
}
```

În mod normal, elementele flex se **înghesuie** pe un rând, chiar dacă nu mai au loc. Cu `flex-wrap: wrap;` ele trec **pe rândul următor** când nu mai încap. Micșorează fereastra browserului și privește cum cad cutiile pe rândul de jos.

**Încearcă tu (5 min)**  
- [ ] Pune `gap: 15px;` pe container și vezi spațiul dintre cutii  
- [ ] Pune opt cutii de 150px și adaugă `flex-wrap: wrap;`  
- [ ] În `tema.html`, pune mai multe imagini din articol într-un `<div class="galerie">` cu `display: flex;`, `gap` și `flex-wrap`  

**Gata când:**  
- [ ] Cutiile au `gap` între ele  
- [ ] Cu `flex-wrap: wrap;`, cutiile trec pe rândul următor când micșorezi fereastra  
- [ ] Poți explica ce se întâmplă fără `flex-wrap`  

---

## 5. Elementele flex

### Exemplul 5 — `flex`: împărțim spațiul

```css
.rand {
  display: flex;
  gap: 10px;
}

.cutie {
  flex: 1;
}

.lata {
  flex: 2;
}
```

```html
<div class="rand">
  <div class="cutie">1</div>
  <div class="cutie">2</div>
  <div class="cutie lata">3 (de două ori mai lată)</div>
</div>
```

`flex: 1;` pe fiecare element înseamnă „împarteți **egal** spațiul rămas”. Un element cu `flex: 2;` ia **de două ori mai mult** decât unul cu `flex: 1;`. Dacă pui doar `flex: 1;` la un singur element și lași celelalte cu lățimea lor, acela **umple tot spațiul rămas**.

**Încearcă tu (5 min)**  
- [ ] Împarte spațiul între trei cutii cu `flex: 1;`  
- [ ] Dă uneia `flex: 2;` și observă ce se întâmplă  
- [ ] În `tema.html`, pune o imagine și un paragraf pe același rând: imaginea `flex: 1;` și textul `flex: 2;`  

---

## 6. Meniul orizontal

### Exemplul 6 — Un meniu din listă

Dintr-o listă faci un meniu în rând:

```html
<nav>
  <ul class="meniu">
    <li><a href="#acasa">Acasă</a></li>
    <li><a href="#animale">Animale</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
```

```css
.meniu {
  display: flex;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.meniu a {
  display: block;
  padding: 10px 18px;
  background-color: navy;
  color: white;
  text-decoration: none;
  border-radius: 8px;
}
```

- `list-style: none;` scoate bulinele;  
- `margin: 0; padding: 0;` scoate spațiul pe care browserul îl pune implicit listei;  
- `display: flex;` pe `ul` pune elementele `li` în rând;  
- `.meniu a { display: block; … }` face fiecare link o cutie mare, ușor de apăsat.

Un meniu așa este ceva ce vei pune în fiecare site.

**Încearcă tu (5 min)**  
- [ ] Fă un meniu orizontal cu patru linkuri, ca în Exemplul 6  
- [ ] Pune meniul la mijloc cu `justify-content: center;`  
- [ ] În `tema.html`, pune sus un `<nav>` cu linkuri către capitolele articolului (`#id` pe fiecare `<h2>`), stilat ca un meniu orizontal  

---

## 7. Carduri pe rând

### Exemplul 7 — Rând de carduri care se adaptează

```css
.carduri {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 250px;
  background-color: white;
  border: 2px solid navy;
  border-radius: 12px;
  padding: 15px;
}
```

`flex: 1 1 250px;` are trei valori:

| Valoare | Ce spune |
|---------|----------|
| `1` (primul) | poate **crește** ca să umple spațiul liber |
| `1` (al doilea) | **se poate micșora** dacă nu are loc |
| `250px` | **mărimea de pornire**: își dorește cam 250px |

Rezultat: pe un ecran lat sunt 3–4 carduri pe rând, pe unul mai îngust 2, iar pe telefon unul singur pe rând, fără nicio altă regulă. Este tehnica cea mai folosită pentru carduri.

**Încearcă tu (5 min)**  
- [ ] Fă patru carduri cu `flex: 1 1 250px;`  
- [ ] Micșorează fereastra: câte carduri sunt pe rând la fiecare lățime?  
- [ ] În `tema.html`, pune „Pe scurt” (3 fapte din articol) în trei carduri pe rând  

**Gata când:**  
- [ ] Meniul și cardurile sunt făcute cu Flexbox  
- [ ] Cardurile se adaptează la lățimea ferestrei  

---

## 8. Mini-proiect

### Exemplul 8 — „Clubul animalelor”

Fișierul `index.html`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Clubul animalelor</title>
  <link rel="stylesheet" href="stil.css">
</head>
<body>
  <header class="antet">
    <p class="logo">Clubul animalelor</p>
    <nav>
      <ul class="meniu">
        <li><a href="#acasa">Acasă</a></li>
        <li><a href="#animale">Animale</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <h1>Animalele noastre</h1>
    <div class="carduri">
      <div class="card">
        <h2>Pisica</h2>
        <p>Doarme toată ziua și vânează seara.</p>
      </div>
      <div class="card">
        <h2>Cățelul</h2>
        <p>Aleargă prin curte și își apără prietenii.</p>
      </div>
      <div class="card">
        <h2>Delfinul</h2>
        <p>Înoată repede și face salturi mari.</p>
      </div>
      <div class="card">
        <h2>Papagalul</h2>
        <p>Imită sunete și are pene colorate.</p>
      </div>
    </div>
  </main>

  <footer class="subsol">
    <p>© Clubul animalelor</p>
  </footer>
</body>
</html>
```

Fișierul `stil.css`:

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f9f9;
  color: #264653;
}

/* Antet: logo în stânga, meniu în dreapta */
.antet {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: navy;
  padding: 10px 20px;
}

.logo {
  margin: 0;
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
}

.meniu {
  display: flex;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.meniu a {
  display: block;
  padding: 8px 14px;
  color: white;
  text-decoration: none;
  border: 2px solid white;
  border-radius: 8px;
}

/* Conținutul */
main {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
}

.carduri {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 200px;
  background-color: white;
  border: 2px solid navy;
  border-radius: 12px;
  padding: 15px;
}

.card h2 {
  margin-top: 0;
  color: navy;
}

/* Subsol: text la mijloc */
.subsol {
  display: flex;
  justify-content: center;
  background-color: navy;
  color: white;
  padding: 10px;
}

.subsol p {
  margin: 0;
}
```

Fă pagina cu **un subiect ales de tine** (animale, sporturi, jocuri, călătorii). Micșorează fereastra și verifică cum cad cardurile pe rânduri.

**Gata când:**  
- [ ] Antetul are logo în stânga și meniu în dreapta, cu `justify-content: space-between;`  
- [ ] Meniul este făcut dintr-o listă cu `display: flex;` și `gap`  
- [ ] Cardurile stau pe rând și trec pe rândul următor când fereastra se micșorează  
- [ ] Subsolul are textul centrat cu Flexbox  

---

## De făcut azi — „Clubul animalelor”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Un meniu orizontal făcut dintr-o listă și trei cutii așezate pe un rând |
| **Complet** | Minim + un element centrat pe orizontală și pe verticală, cutii care trec pe rândul următor când nu încap, un antet cu logo în stânga și meniu în dreapta și explicarea celor două axe |

### Pasul 1 — Minim
Pe scheletul complet, legat la `stil.css`, fă un meniu orizontal dintr-o listă și trei cutii pe un rând.

- [ ] Folderul `Prenume_Nume_W3_L5` are `index.html` și `stil.css`  
- [ ] Meniul are minimum 3 linkuri și este orizontal  
- [ ] Trei cutii stau pe un rând, cu `display: flex;` pe părinte  
- [ ] Pagina se vede în browser, cu Live Server pornit  

### Pasul 2 — Complet
Îmbunătățești pagina:

- [ ] Ai regula `* { box-sizing: border-box; }` prima în `stil.css`  
- [ ] Un `<header>` cu **logo în stânga și meniu în dreapta** (`space-between`, `align-items: center`)  
- [ ] **Minimum 4 carduri** în rând, cu `flex-wrap: wrap;`, `gap` și `flex: 1 1 …px`  
- [ ] Un `<footer>` cu textul centrat cu Flexbox  
- [ ] Ai cel puțin două comentarii în CSS  

---

## Bonus ★★★ — Provocare: Articolul tău cu meniu
*Doar dacă ai terminat Complet.*

Faci `tema.html` să arate ca un mic site.

- [ ] Pune în `tema.html` un antet cu titlul în stânga și un meniu cu linkuri către capitole în dreapta  
- [ ] Pune imaginile din articol într-o galerie cu Flexbox, cu `gap` și `flex-wrap`  
- [ ] Împinge ultimul link din meniu la dreapta cu `margin-left: auto;` (truc: `auto` ia tot spațiul liber)  
- [ ] În DevTools, apasă pe un container flex: apare un mic semn „flex” lângă el. Apasă pe el și vezi cum se desenează spațiile și axele (**F12**; pe Mac Cmd + Option + I)  

---

## Greșeli frecvente
1. **Ai pus `display: flex;` pe copii**, nu pe părinte — regula se scrie pe container.  
2. **Ai scris `display: flexbox;`** — corect este `display: flex;`.  
3. **Ai scris `justify-content: middle`** — corect este `center`.  
4. **Ai confundat `justify-content` cu `align-items`** — primul lucrează pe axa principală, al doilea pe cea secundară.  
5. **`align-items: center` nu face nimic** — containerul nu are înălțime, deci nu e loc pe verticală.  
6. **Elementele ies din pagină** — ai uitat `flex-wrap: wrap;`.  
7. **Linkurile din meniu nu stau în rând** — ai pus `display: flex;` pe `li`, nu pe `ul`.  
8. **Bulinele apar în meniu** — ai uitat `list-style: none;`.  

---

## Recapitulare pe scurt
1. `display: flex;` pe părinte pune copiii pe un rând.  
2. `flex-direction` alege direcția; sunt două axe: principală și secundară.  
3. `justify-content` așază pe axa principală; `align-items` pe cea secundară.  
4. `gap` pune spațiu între elemente; `flex-wrap: wrap;` le lasă să treacă pe rândul următor.  
5. `flex: 1;` împarte spațiul rămas; `flex: 1 1 250px;` face carduri care se adaptează.  
6. Un meniu orizontal = o listă cu `list-style: none;` și `display: flex;`.

## Quiz scurt
- Pe ce element scrii `display: flex;`?  
- Ce face `justify-content: space-between;`?  
- Cum pui un element exact la mijlocul unui container?  
- Ce face `flex-wrap: wrap;`?  
- Cum faci un meniu orizontal dintr-o listă?

## Temă
1. Fă pagina „Echipa mea de fotbal” cu un antet cu logo și meniu, cinci carduri de jucători pe rând (care trec pe rândul următor) și un subsol centrat. Salvează în `Prenume_Nume_W3_L5`.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Ordinea elementelor.**

```css
.rand {
  display: flex;
}

.ultima {
  order: -1;
}
```

`order` schimbă ordinea cutiilor fără să muți nimic în HTML. Valoarea `-1` pune elementul primul.

**Acasă 2 — Un card cu butonul mereu jos.**

```css
.card {
  display: flex;
  flex-direction: column;
}

.card .buton {
  margin-top: auto;
}
```

Într-un card cu direcția `column`, `margin-top: auto;` împinge butonul în partea de jos.

4. **Încă patru exerciții (B–E):**

**B — Ce face regula?** Spune ce se întâmplă cu cele trei cutii: (1) `display: flex; justify-content: space-between;`; (2) `display: flex; flex-direction: column;`; (3) `display: flex; justify-content: center; align-items: center; height: 200px;`; (4) `display: flex; flex-wrap: wrap;` când cutiile au `width: 300px;`, iar fereastra are 700px lățime.

**C — Scrie regula.** Scrie în CSS: (1) un container care pune elementele pe rând, la mijloc, cu 20px între ele; (2) un meniu fără buline, orizontal, cu 15px între linkuri; (3) trei cutii care împart spațiul în mod egal.

**D — Găsește greșelile.** Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
.rand {
  display: flexbox;
  justify-content: middle;
  flex-direction: vertical;
}
```

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: care sunt cele două axe ale Flexbox? Care este diferența dintre `justify-content` și `align-items`? Pe ce element se scrie `display: flex;` (părinte sau copii)?

## Ce urmează — Lecția 6
Învățăm **Grid**, pentru machete cu rânduri și coloane (de exemplu o galerie), și **position**, ca să așezi un element peste altul (o insignă într-un colț, un buton care rămâne fixat pe ecran).

---

## Răspunsuri
- **Quiz scurt:** (1) pe părinte, adică pe container; (2) primul element la început, ultimul la sfârșit, iar restul distanțate egal; (3) pe container: `display: flex; justify-content: center; align-items: center;`, cu o înălțime pusă containerului; (4) elementele trec pe rândul următor când nu mai încap; (5) pe `ul` pui `display: flex;` și `list-style: none;`, plus `margin: 0; padding: 0;`.  
- **Tema, exercițiul B:** (1) prima cutie la început, ultima la sfârșit, cea din mijloc distanțată egal; (2) cutiile stau una sub alta; (3) cutiile sunt la mijlocul containerului, pe orizontală și pe verticală; (4) două cutii pe primul rând (300 + 300 = 600 încape) și a treia pe rândul de jos.  
- **Tema, exercițiul C:** (1) `.rand { display: flex; justify-content: center; gap: 20px; }`; (2) `.meniu { display: flex; gap: 15px; list-style: none; margin: 0; padding: 0; }`; (3) `.container { display: flex; }` și `.cutie { flex: 1; }`.  
- **Tema, exercițiul D:** (1) `flexbox` trebuie `flex`; (2) `middle` trebuie `center`; (3) `vertical` trebuie `column`.  
- **Tema, exercițiul E:** axa principală (direcția elementelor) și axa secundară (perpendiculară); `justify-content` așază pe axa principală, `align-items` pe cea secundară; `display: flex;` se scrie pe părinte.  
- **Dacă ritmul clasei este lent:** Exemplul 5 (`flex: 1`, `flex: 2`) poate rămâne pentru acasă; cardurile din Exemplul 7 folosesc oricum `flex: 1 1 250px`.  
- **Notă pentru profesor:** dacă elevii se încurcă între axe, desenați pe tablă o săgeată pentru axa principală. Un joc bun: „unde ajunge cutia?”, cu `justify-content` și `align-items` schimbate pe rând pe proiector. În Exemplul 7, valorile `flex: 1 1 250px` nu trebuie memorate; contează ideea „crește, se micșorează, vrea cam 250px”.
