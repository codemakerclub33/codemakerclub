# LECȚIA 5 — Flexbox: elemente pe rând
**Modulul 3 · CSS: Stil și culoare · 2 ore**  
**Code Maker Club · CSS Stylist**

> Până acum cutiile tale stăteau una sub alta. Cu **Flexbox** le așezi **una lângă alta**, le distanțezi, le centrezi și le lași să treacă pe rândul următor când nu mai încap. Flexbox este unealta cu care se fac meniurile și rândurile de carduri de pe aproape orice site.  
> Proiect: **„Clubul animalelor: meniu și carduri pe rând”** · folder: `Prenume_Nume_W3_L5` (ex. `Ana_Pop_W3_L5`)

---

## Obiectiv
La finalul orei știi să faci un container flex cu `display: flex;`, să alegi direcția cu `flex-direction`, să așezi elementele cu `justify-content` și `align-items`, să pui distanță cu `gap`, să le lași să treacă pe rândul următor cu `flex-wrap`, să le împarți spațiul cu `flex` și să faci un meniu orizontal dintr-o listă.  
**Minim:** un meniu orizontal făcut dintr-o listă și trei cutii așezate pe un rând.  
**Ținta orei (Complet):** + un element centrat pe orizontală și pe verticală, cutii care trec pe rândul următor când nu încap, un antet cu logo în stânga și meniu în dreapta și explicarea celor două axe.

## De ce contează
Fără Flexbox, să pui trei cutii una lângă alta cerea trucuri greu de ținut minte, iar centrarea pe verticală era o adevărată bătaie de cap. Cu Flexbox faci același lucru în două rânduri, iar rezultatul se adaptează singur la ecrane mari și mici.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–35 | Containerul flex · direcția (**Exemplele 1–2**) |
| 35–60 | `justify-content` și `align-items` (**Exemplele 3–4**) |
| 60–75 | `gap` și `flex-wrap` (**Exemplele 5–6**) |
| 75–95 | `flex` pe elemente · meniu orizontal (**Exemplele 7–8**) |
| 95–115 | Carduri pe rând · proiect (**Exemplele 9–10**) |
| 115–120 | Recap și temă |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- fiecare element este o cutie: conținut, `padding`, `border`, `margin`;
- `* { box-sizing: border-box; }` face ca `width` să includă `padding` și `border`;
- `margin: 0 auto;` centrează o cutie cu lățime;
- `block` ocupă un rând întreg, iar `inline-block` stă în rând.

**Încearcă tu (4 min)**  
- [ ] Creează folderul `Prenume_Nume_W3_L5` cu `index.html` (scheletul complet, legat la `stil.css`) și `stil.css`  
- [ ] Pune `* { box-sizing: border-box; }` prima în `stil.css`  
- [ ] Pune în `<body>` un `<div class="rand">` cu trei `<div class="cutie">` în el, cu numerele 1, 2 și 3  

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

**Gata când:**  
- [ ] Trei cutii stau pe un rând, cu `display: flex;` pus pe părinte  
- [ ] Ai schimbat direcția cu `column` și apoi ai revenit la `row`  
- [ ] Poți spune care sunt cele două axe  

---

## 3. Așezarea pe axe

### Exemplul 3 — `justify-content`: pe axa principală

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

### Exemplul 4 — `align-items`: pe axa secundară

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

**Încearcă tu (6 min)**  
- [ ] Încearcă pe rând toate valorile lui `justify-content` și notează ce face fiecare  
- [ ] Centrează o cutie pe ambele axe, într-un container de 200px înălțime  
- [ ] Schimbă `align-items` între `flex-start`, `center` și `flex-end`  

---

## 4. Distanță, rânduri și împărțirea spațiului

### Exemplul 5 — `gap`: spațiu între elemente

```css
.rand {
  display: flex;
  gap: 15px;
}
```

`gap` pune spațiu **între** elemente, fără să umple marginile din exterior și fără să calculezi `margin` pentru fiecare. Poți scrie `gap: 10px 20px;` (întâi între rânduri, apoi între coloane).

### Exemplul 6 — `flex-wrap`: treci pe rândul următor

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

**Gata când:**  
- [ ] Cutiile au `gap` între ele  
- [ ] Cu `flex-wrap: wrap;`, cutiile trec pe rândul următor când micșorezi fereastra  
- [ ] Poți explica ce se întâmplă fără `flex-wrap`  

---

## 5. Elementele flex și meniul

### Exemplul 7 — `flex`: împărțim spațiul

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

### Exemplul 8 — Un meniu orizontal

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

**Încearcă tu (6 min)**  
- [ ] Fă un meniu orizontal cu patru linkuri, ca în Exemplul 8  
- [ ] Împarte spațiul între trei cutii cu `flex: 1;`, apoi dă uneia `flex: 2;`  
- [ ] Pune meniul la mijloc cu `justify-content: center;`  

---

## 6. Carduri pe rând și proiectul

### Exemplul 9 — Rând de carduri care se adaptează

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

### Exemplul 10 — „Clubul animalelor”

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

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Clubul animalelor” (obligatoriu)
Fă o pagină cu `index.html` și `stil.css`, cu:
- regula `* { box-sizing: border-box; }` prima în `stil.css`;
- un `<header>` cu **logo în stânga și meniu în dreapta** (`space-between`, `align-items: center`);
- un meniu cu **minimum 3 linkuri**, făcut dintr-o listă cu Flexbox;
- **minimum 4 carduri** în rând, cu `flex-wrap: wrap;`, `gap` și `flex: 1 1 …px`;
- un `<footer>` cu textul centrat cu Flexbox;
- cel puțin două comentarii în CSS.

Verifică pagina cu Live Server și micșorează fereastra ca să vezi cardurile cum cad pe rânduri.

### Exercițiul B — Ce face regula?
Spune ce se întâmplă cu cele trei cutii: (1) `display: flex; justify-content: space-between;`; (2) `display: flex; flex-direction: column;`; (3) `display: flex; justify-content: center; align-items: center; height: 200px;`; (4) `display: flex; flex-wrap: wrap;` când cutiile au `width: 300px;`, iar fereastra are 700px lățime.

### Exercițiul C — Scrie regula
Scrie în CSS: (1) un container care pune elementele pe rând, la mijloc, cu 20px între ele; (2) un meniu fără buline, orizontal, cu 15px între linkuri; (3) trei cutii care împart spațiul în mod egal.

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
.rand {
  display: flexbox;
  justify-content: middle;
  flex-direction: vertical;
}
```

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: care sunt cele două axe ale Flexbox? Care este diferența dintre `justify-content` și `align-items`? Pe ce element se scrie `display: flex;` (părinte sau copii)?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W3_L5` are `index.html` și `stil.css`  
- [ ] Pagina are antet cu meniu orizontal, carduri pe rând și subsol  
- [ ] Cardurile trec pe rândul următor când micșorezi fereastra  
- [ ] Ai răspuns la exercițiile B–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Împinge ultimul link din meniu la dreapta cu `margin-left: auto;` (truc: `auto` ia tot spațiul liber)  
- [ ] Fă un card în care titlul, textul și un buton stau pe coloană, iar butonul rămâne mereu jos (`display: flex; flex-direction: column;` și `margin-top: auto;` pe buton)  
- [ ] Fă o „bară de etichete” cu 6 etichete care trec pe rândul următor (`flex-wrap`)  
- [ ] În DevTools, apasă pe un container flex: apare un mic semn „flex” lângă el. Apasă pe el și vezi cum se desenează spațiile și axele  

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
9. **Spații ciudate în jurul meniului** — ai uitat `margin: 0; padding: 0;` pe `ul`.  
10. **Ai pus lățimi fixe care depășesc ecranul** — folosește `flex: 1 1 …px` ca să se adapteze.  

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
Fă pagina „Echipa mea de fotbal” cu un antet cu logo și meniu, cinci carduri de jucători pe rând (care trec pe rândul următor) și un subsol centrat. Salvează în `Prenume_Nume_W3_L5`.

## Ce urmează — Lecția 6
Învățăm **Grid**, pentru machete cu rânduri și coloane (de exemplu o galerie), și **position**, ca să așezi un element peste altul (o insignă într-un colț, un buton care rămâne fixat pe ecran).

---

## Răspunsuri
- **Quiz scurt:** (1) pe părinte, adică pe container; (2) primul element la început, ultimul la sfârșit, iar restul distanțate egal; (3) pe container: `display: flex; justify-content: center; align-items: center;`, cu o înălțime pusă containerului; (4) elementele trec pe rândul următor când nu mai încap; (5) pe `ul` pui `display: flex;` și `list-style: none;`, plus `margin: 0; padding: 0;`.  
- **Exercițiul B:** (1) prima cutie la început, ultima la sfârșit, cea din mijloc distanțată egal; (2) cutiile stau una sub alta; (3) cutiile sunt la mijlocul containerului, pe orizontală și pe verticală; (4) două cutii pe primul rând (300 + 300 = 600 încape) și a treia pe rândul de jos.  
- **Exercițiul C:** (1) `.rand { display: flex; justify-content: center; gap: 20px; }`; (2) `.meniu { display: flex; gap: 15px; list-style: none; margin: 0; padding: 0; }`; (3) `.container { display: flex; }` și `.cutie { flex: 1; }`.  
- **Exercițiul D:** (1) `flexbox` trebuie `flex`; (2) `middle` trebuie `center`; (3) `vertical` trebuie `column`.  
- **Exercițiul E:** axa principală (direcția elementelor) și axa secundară (perpendiculară); `justify-content` așază pe axa principală, `align-items` pe cea secundară; `display: flex;` se scrie pe părinte.  
- **Notă pentru profesor:** dacă elevii se încurcă între axe, desenați pe tablă o săgeată pentru axa principală. Un joc bun: „unde ajunge cutia?”, cu `justify-content` și `align-items` schimbate pe rând pe proiector. În Exemplul 9, valorile `flex: 1 1 250px` nu trebuie memorate; contează ideea „crește, se micșorează, vrea cam 250px”.
