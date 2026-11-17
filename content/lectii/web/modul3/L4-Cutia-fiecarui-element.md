# LECȚIA 4 — Cutiile paginii
### Cutia fiecărui element
**Modulul 3 · CSS: Stil și culoare · 2 ore**  
**Code Maker Club · CSS Stylist**

> Pentru CSS, fiecare element din pagină este o **cutie**: are conținut, spațiu în interior, chenar și spațiu în afară. Când înțelegi cutiile, înțelegi de ce lucrurile stau unde stau. Azi le învățăm pe toate și le folosim ca să faci din capitolele tale niște **cartonașe**. Lucrezi tot pe `tema.html`, în același `stil.css`.  
> Proiect: **„Cutiile paginii”** · folder: `Prenume_Nume_W3_L4` (ex. `Ana_Pop_W3_L4`)

---

## Ce facem azi
La final capitolele paginii tale sunt cartonașe cu chenar, colțuri rotunjite și umbră, cu spațiu între ele, într-o coloană centrată, iar imaginile nu mai ies din ele. Știi să măsori o cutie și să nu mai fii păcălit de `padding`. Dacă nu înțelegi cutia, nu poți așeza nimic în pagină: toate lecțiile următoare (meniu, grilă, telefon) se bazează pe ea.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · copiem folderul lecției trecute |
| 15–30 | Fiecare element este o cutie (**Exemplul 1**) |
| 30–50 | Piesă nouă: caseta „Știai că?” · spațiu în interior și chenar · spațiu în afară (**Exemplele 2–3**) |
| 50–65 | Coloană centrată cu `max-width` (**Exemplul 4**) |
| 65–80 | Mărimea reală a cutiei: `box-sizing` (**Exemplul 5**) |
| 80–95 | Colțuri rotunjite, umbră · imagini (**Exemplele 6–7**) |
| 95–110 | Mini-proiect: toate la un loc (**Exemplul 8**) |
| 110–115 | Verificare: se vede fiecare strat al cutiei? |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `padding`, `border`, `margin` | Spațiu în interior, chenar, spațiu în afară | `20px`, `2px solid navy` |
| `border-left` | Chenar doar pe o latură | `6px solid tomato` |
| `max-width` și `margin: 0 auto;` | Coloană cu lățime maximă, centrată | `800px` |
| `box-sizing: border-box;` | `width` include `padding` și `border` | `* { … }` |
| `border-radius`, `box-shadow` | Colțuri rotunjite și umbră | `12px` |
| `max-width: 100%; height: auto;` | Imagine care nu iese din cutie | `img { … }` |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- `font-family` are o listă de rezervă care se termină cu un grup general;
- mărimea se scrie în `px` sau `rem`, fără spațiu înainte de unitate;
- `line-height` dă aer între rânduri;
- `text-decoration: none;` scoate sublinierea, iar linkul rămâne colorat.

**Încearcă tu (8 min)**  
- [ ] Creează folderul `Prenume_Nume_W3_L4` ca o **copie** a folderului `Prenume_Nume_W3_L3` (cu `tema.html`, `stil.css`, `imagini`, `media`)  
- [ ] Deschide `tema.html` cu Live Server și uită-te la capitolele paginii  
- [ ] Notează într-un comentariu ce elemente crezi că sunt „cutii” în articolul tău  

> De aici înainte, exemplele arată ce scrii în `stil.css`, pe piesele paginii-model despre delfin.

---

## 2. Cutia

### Exemplul 1 — Fiecare element este o cutie

Fiecare element are, de la **interior spre exterior**, patru straturi:

```text
1. conținut ... textul sau imaginea (în mijloc)
2. padding .... spațiul din interiorul chenarului
3. border ..... chenarul
4. margin ..... spațiul din afara chenarului
```

| Strat | Ce este | Cum îl compari |
|-------|---------|----------------|
| conținut | textul sau imaginea | un cadou |
| `padding` | spațiu **în interiorul** chenarului | hârtia de protecție din jurul cadoului |
| `border` | chenarul | cutia cadoului |
| `margin` | spațiu **în afara** chenarului | spațiul dintre cutii pe raft |

Cel mai bun mod să le vezi: deschide DevTools (**F12**; pe Mac Cmd + Option + I), fila **Elements**, apasă pe un element și privește panoul **Styles**, jos, la desenul colorat al cutiei. Fiecare culoare este un strat.

**Încearcă tu (5 min)**  
- [ ] Deschide DevTools și apasă pe un paragraf din `tema.html`  
- [ ] Găsește desenul cutiei și cele patru straturi colorate  
- [ ] Notează într-un comentariu câți pixeli are `padding` și `margin` la un paragraf  

**Gata când:**  
- [ ] Poți spune în ce ordine sunt straturile, de la interior spre exterior  

---

## 3. Spațiu în interior și în afară

### Piesă nouă de HTML: caseta „Știai că?”

Azi pagina primește o **casetă** cu un fapt amuzant. Copiază-o în `tema.html`, în `<main>`, **după primul capitol** (după `</section>`):

```html
<div class="stiai">
  <strong>Știai că?</strong> Delfinii dorm cu un ochi deschis!
</div>
```

Tu scrii un fapt amuzant despre **subiectul tău**. În CSS o alegi cu **punct**, `.stiai`. Până îi dăm stil, caseta arată ca un text obișnuit; îi scriem stilul în Exemplul 2 și 6 de mai jos, din această lecție.

### Exemplul 2 — `padding` și `border`

```css
.carte {
  padding: 20px;
  border: 3px solid navy;
}
```

`padding` poate avea mai multe valori:

| Scris | Ce înseamnă |
|-------|-------------|
| `padding: 20px;` | 20px pe toate cele patru laturi |
| `padding: 10px 30px;` | 10px sus și jos, 30px stânga și dreapta |

`border` are trei lucruri, separate prin spațiu: **grosimea**, **stilul** și **culoarea**. Stilul cel mai folosit este `solid` (linie).

Chenarul poate fi și doar pe **o latură**, cu `border-left` (stânga), `border-top`, `border-right` sau `border-bottom`. Așa faci caseta „Știai că?”, cu o dungă groasă în stânga:

```css
.stiai {
  padding: 12px 15px;
  border-left: 6px solid var(--accent);
  background-color: rgba(255, 255, 255, 0.7);
}
```

### Exemplul 3 — `margin`

```css
.carte {
  margin: 20px 0;
}
```

`margin` este spațiul **din afara** chenarului. Se scrie ca `padding`: o valoare sau două. `20px 0` înseamnă 20px sus și jos, 0 stânga și dreapta.

> `padding` este **în interior** (are fundalul cutiei), iar `margin` este **în afară** (este transparent). Dacă vrei spațiu între două cutii, folosești `margin`.

**Încearcă tu (7 min)**  
- [ ] Copiază caseta „Știai că?” în `tema.html`, după primul capitol, cu un fapt despre subiectul tău  
- [ ] Dă capitolelor (`.carte`) `padding: 20px;` și un chenar subțire, iar casetei regula `.stiai` de mai sus  
- [ ] Dă-le `margin: 20px 0;` ca să respire între ele  
- [ ] Schimbă `padding` și `margin` și vezi ce se mișcă: textul sau cutia?  

---

## 4. Coloana centrată

### Exemplul 4 — `max-width` și `margin: 0 auto;`

Rândurile foarte lungi se citesc greu, pentru că ochiul se pierde. Pune conținutul într-o coloană **îngustă și centrată**:

```css
main {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}
```

- `max-width: 800px;` înseamnă „cel mult 800px lățime”: pe ecrane mici cutia se micșorează, pe cele mari se oprește la 800px;  
- `margin: 0 auto;` **centrează** cutia pe orizontală: 0 sus și jos, iar `auto` înseamnă „calculatorul împarte singur spațiul rămas la stânga și la dreapta”;  
- `padding: 1rem;` lasă spațiu între marginea ecranului și conținut.

**Încearcă tu (6 min)**  
- [ ] Pune pe `main` regula de mai sus  
- [ ] Mărește și micșorează fereastra browserului: ce face coloana?  
- [ ] Schimbă `800px` în `600px` și compară cum se citește  

---

## 5. Mărimea reală a cutiei

### Exemplul 5 — Cutia pare mai mare decât ai cerut: `box-sizing`

```css
.cutie {
  width: 200px;
  padding: 20px;
  border: 5px solid navy;
}
```

Câtă lățime ocupă cutia? Nu 200px! Calculatorul adaugă la `width` și `padding`, și `border`:

```text
200 (conținut) + 20 + 20 (padding) + 5 + 5 (border) = 250px
```

Asta încurcă mult. Soluția: spune calculatorului să socotească `padding` și `border` **în interiorul** lățimii:

```css
* {
  box-sizing: border-box;
}
```

`*` înseamnă „toate elementele”. Acum o cutie cu `width: 200px;` ocupă **exact** 200px, oricât `padding` și `border` ai pune. Scrie această regulă **prima** în fiecare `stil.css`, de azi încolo.

**Încearcă tu (6 min)**  
- [ ] Pune `* { box-sizing: border-box; }` prima în `stil.css`  
- [ ] Dă lui `.carte` `width: 200px;`, `padding: 20px;` și chenar de 5px, apoi măsoară cutia în DevTools  
- [ ] Șterge `width`-ul când ai terminat: capitolele nu au nevoie de lățime fixă  

**Gata când:**  
- [ ] Ai pus `* { box-sizing: border-box; }` prima în `stil.css`  
- [ ] Poți calcula lățimea unei cutii cu `padding` și `border`, fără și cu `border-box`  

---

## 6. Colțuri, umbră și imagini

### Exemplul 6 — `border-radius` și `box-shadow`

```css
.carte,
.stiai {
  border-radius: 12px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
}
```

- `border-radius` rotunjește colțurile;  
- `box-shadow` are patru valori: spre dreapta, în jos, încețoșarea și culoarea (de obicei negru transparent, cu `rgba()` din lecția 2).

Cu puțin chenar, colțuri rotunjite și o umbră ușoară, un capitol arată ca un **cartonaș**.

### Exemplul 7 — Imagini care nu ies din cutie

```css
img {
  max-width: 100%;
  height: auto;
}
```

O imagine mare poate ieși din cutia ei. Cu `max-width: 100%;` ea nu devine niciodată mai lată decât cutia în care stă, iar `height: auto;` păstrează proporțiile. Este o regulă pe care o pui în aproape orice pagină.

**Încearcă tu (6 min)**  
- [ ] Rotunjește colțurile capitolelor și ale casetei cu `border-radius: 12px;`  
- [ ] Pune o umbră ușoară pe capitole și pe casetă  
- [ ] Pune regula pentru `img` și verifică dacă o imagine mare din pagină stă în cutie  

---

## 7. Mini-proiect: toate la un loc

### Exemplul 8 — Tot ce ai învățat azi, în `stil.css`

Pagina despre delfin (cea din Lecția 1) primește în HTML doar caseta „Știai că?” de mai sus. În `stil.css` păstrezi paleta și textul din lecțiile 2 și 3, **înlocuiești** regula `.carte` din lecția 2 cu cea de mai jos și adaugi secțiunea **Cutiile**. Delfinul este **modelul tău**:

```css
/* Cutiile */
* {
  box-sizing: border-box;
}

main {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

.carte {
  background-color: rgba(255, 255, 255, 0.7);
  border: 2px solid var(--principala);
  border-radius: 12px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
  padding: 15px;
  margin: 15px 0;
}

.stiai {
  background-color: rgba(255, 255, 255, 0.7);
  border-left: 6px solid var(--accent);
  border-radius: 12px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
  padding: 12px 15px;
  margin: 15px 0;
}

aside {
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  padding: 15px;
  margin: 15px 0;
}

img {
  max-width: 100%;
  height: auto;
}
```

Capitolele au devenit cartonașe, caseta „Știai că?” are dunga ei din stânga, iar fișa pe scurt este o cutie la fel de rotunjită. Conținutul stă într-o coloană centrată, iar imaginile nu mai ies din cutii.

**Acum e rândul tău:** fă-ți propria pagină după modelul Delfinul, cu **subiectul tău și culorile tale**. Nu copia cifrele delfinului: alege-ți tu `padding`, `margin` și `border-radius`.

**Încearcă tu (10 min)**  
- [ ] Adaugă în `stil.css` secțiunea „Cutiile” cu `box-sizing` prima și coloana pe `main`  
- [ ] Fă din capitole cartonașe: chenar, colțuri rotunjite, umbră, `padding` și `margin`  
- [ ] Compară cu modelul: ai toate cele cinci părți (coloana, cartonașele, caseta, fișa, imaginile)?  

**Gata când:**  
- [ ] `box-sizing: border-box;` este prima regulă din `stil.css`  
- [ ] Conținutul este într-o coloană cu `max-width` și `margin: 0 auto;`  
- [ ] Capitolele au chenar, colțuri rotunjite, umbră, `padding` și `margin`  

---

## De făcut azi — „Cutiile paginii”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | `tema.html` cu `box-sizing: border-box;`, capitole cu `padding`, chenar și `margin`, într-o coloană centrată |
| **Complet** | Minim + colțuri rotunjite și umbră pe capitole, fișa pe scurt ca o cutie, imaginile care nu ies din cutie și un desen al cutiei în DevTools verificat |

### Pasul 1 — Minim
Pe `tema.html`, pune `box-sizing: border-box;` prima, o coloană centrată și cartonașe din capitole.

- [ ] Folderul `Prenume_Nume_W3_L4` are `tema.html` și `stil.css`  
- [ ] Pagina are `* { box-sizing: border-box; }` prima, o coloană centrată și capitole cu `padding`, chenar și `margin`  
- [ ] Pagina se vede în browser, cu Live Server pornit  

### Pasul 2 — Complet
Îmbunătățești pagina:

- [ ] Capitolele și caseta „Știai că?” au `border-radius` și `box-shadow`  
- [ ] „Fișa pe scurt” este și ea o cutie, cu `padding` și colțuri rotunjite  
- [ ] Ai `img { max-width: 100%; height: auto; }`  
- [ ] Ai verificat în DevTools desenul cutiei pentru un capitol (`padding`, `border`, `margin`)  

---

## Bonus ★★★ — Provocare: Etichete și cutii în rând
*Doar dacă ai terminat Complet.*

Faci etichete colorate în interiorul textului.

- [ ] Pune în HTML, într-un paragraf, trei cuvinte în `<span class="eticheta">`: „Nou”, „Important”, „De știut”  
- [ ] Scrie regula `.eticheta { display: inline-block; background-color: gold; padding: 5px 12px; margin: 5px; border-radius: 8px; }` și vezi cum stau în rând, dar au `padding` și `margin`  
- [ ] Șterge `display: inline-block;` și vezi ce se întâmplă cu `padding` și `margin` pe sus și jos (un `span` este implicit „în rând” și nu le primește bine)  
- [ ] Deschide DevTools, apasă pe o etichetă și citește desenul cutiei ei  

---

## Greșeli frecvente
1. **Cutia e mai lată decât `width`** — ai uitat `* { box-sizing: border-box; }`.  
2. **Ai scris `padding: 20;`** fără `px` — numărul are nevoie de unitate.  
3. **Ai pus `margin` când voiai `padding`** (sau invers) — `padding` e în interior, `margin` în afară.  
4. **Ai pus `margin: 0 auto;` fără lățime** — coloana nu se centrează dacă nu are `width` sau `max-width`.  
5. **Ai scris `border: 2px solid;` fără culoare** — chenarul ia culoarea textului; scrie și culoarea.  
6. **Ai uitat `;` după `border-radius`** — rândul acela și cel de după nu mai merg.  
7. **Umbra e prea mare sau prea întunecată** — folosește `rgba(0, 0, 0, 0.2)` și valori mici.  
8. **Imaginea iese din cutie** — ai uitat `img { max-width: 100%; height: auto; }`.  

---

## Recapitulare pe scurt
1. O cutie are, de la interior spre exterior: conținut, `padding`, `border`, `margin`.  
2. `padding` este în interiorul chenarului, iar `margin` în afara lui.  
3. `max-width` și `margin: 0 auto;` fac o coloană centrată.  
4. `* { box-sizing: border-box; }` face ca `width` să includă `padding` și `border`.  
5. `border-radius` rotunjește colțurile, iar `box-shadow` face umbră.  
6. `img { max-width: 100%; height: auto; }` ține imaginile în cutie.

## Quiz scurt
- În ce ordine sunt straturile unei cutii, de la interior spre exterior?  
- Care este diferența dintre `padding` și `margin`?  
- Cum centrezi o coloană pe orizontală?  
- Ce face `* { box-sizing: border-box; }`?  
- Cum faci o imagine să nu iasă din cutia ei?

## Temă
1. Termină cutiile paginii `tema.html`: coloană centrată, capitole ca niște cartonașe (chenar, colțuri rotunjite, umbră, `padding`, `margin`) și fișa pe scurt ca o cutie. Salvează în `Prenume_Nume_W3_L4`.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Chenar doar pe o latură.**

```css
.carte {
  border-left: 6px solid var(--accent);
}
```

Un chenar gros doar pe stânga arată ca un semn de carte și face capitolul să iasă în evidență.

**Acasă 2 — Patru valori la `padding`.**

```css
.carte {
  padding: 5px 10px 15px 20px;
}
```

Cele patru valori sunt: sus, dreapta, jos, stânga, în sensul acelor de ceasornic. Schimbă-le pe rând și vezi cum se mișcă textul.

4. **Încă patru exerciții (B–E):**

**B — Câtă lățime ocupă?** O cutie are `width: 200px; padding: 20px; border: 5px solid navy;`. Calculează lățimea totală (1) fără `box-sizing: border-box;` și (2) cu `box-sizing: border-box;`.

**C — Scrie regula.** Scrie în CSS: (1) `main` are lățimea cel mult 700px și este centrat; (2) `.carte` are chenar roșu de 2px, colțuri rotunjite la 10px și `padding` de 15px; (3) `img` nu iese din cutie.

**D — Găsește greșelile.** Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
.carte {
  padding: 20;
  border: 2px solid;
  border-radius 12px;
}
```

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: care este diferența dintre `padding` și `margin`? De ce punem `box-sizing: border-box;` prima în `stil.css`? De ce nu lăsăm textul să ocupe toată lățimea unui ecran mare?

## Ce urmează — Lecția 5
Învățăm **Flexbox**: așezăm elemente pe un rând, ca să facem un meniu orizontal frumos.

---

## Răspunsuri
- **Quiz scurt:** (1) conținut, `padding`, `border`, `margin`; (2) `padding` este spațiul din interiorul chenarului, iar `margin` este spațiul din afara lui; (3) cu `max-width` (sau `width`) și `margin: 0 auto;`; (4) face ca `width` să includă `padding` și `border`, deci cutia ocupă exact lățimea scrisă; (5) cu `img { max-width: 100%; height: auto; }`.  
- **Tema, exercițiul B:** (1) 200 + 20 + 20 + 5 + 5 = 250px; (2) 200px.  
- **Tema, exercițiul C:** (1) `main { max-width: 700px; margin: 0 auto; }`; (2) `.carte { border: 2px solid red; border-radius: 10px; padding: 15px; }`; (3) `img { max-width: 100%; height: auto; }`.  
- **Tema, exercițiul D:** (1) `padding: 20;` trebuie `20px`; (2) `border: 2px solid;` are nevoie de o culoare (de exemplu `navy`); (3) lipsesc două puncte la `border-radius: 12px;`.  
- **Tema, exercițiul E:** `padding` e în interior și are fundalul cutiei, `margin` e în afară și e transparent; `border-box` ne scutește de calculele cu `padding` și `border`; rândurile prea lungi obosesc ochiul, deci limităm lățimea.  
- **Dacă ritmul clasei este lent:** Exemplul 7 (imaginile) și Acasă 2 se pot face scurt; Exemplul 5 (`box-sizing`) rămâne obligatoriu, fiindcă toate lecțiile următoare se bazează pe el.  
- **Notă pentru profesor:** `display: inline-block`, `height`, `min-height`, `dashed`/`dotted`, `border-bottom`/`padding-left` pe o singură latură și cercurile cu `border-radius: 50%` nu fac parte din lecția de bază (`inline-block` este în Bonus). `block` și `inline` apar mai târziu, când e nevoie (lecția 5).
