# LECȚIA 2 — Paleta de culori
### Culori și fundaluri
**Modulul 3 · CSS: Stil și culoare · 2 ore**  
**Code Maker Club · CSS Stylist**

> Culorile sunt cea mai rapidă schimbare care face o pagină să arate nouă. Azi înveți felurile de a scrie o culoare, cum faci o culoare **transparentă**, cum faci un **degrade** și cum îți alegi o **paletă** care se potrivește. Lucrezi tot pe `tema.html`, în același `stil.css`.  
> Proiect: **„Paleta de culori”** · folder: `Prenume_Nume_W3_L2` (ex. `Ana_Pop_W3_L2`)

---

## Ce facem azi
La final pagina ta are o **paletă de 4 culori** scrisă într-un singur loc, un degrade în antet și capitole cu fundal transparent. Știi să scrii o culoare cu nume, cu cod `#`, cu `rgb()` și cu `rgba()`. O pagină cu 3–4 culori care se potrivesc arată îngrijit, iar una cu zece culori amestecate obosește ochii. Dacă îți scrii paleta **o singură dată**, o schimbi apoi pe toată pagina cu un singur rând.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · copiem folderul lecției trecute |
| 15–35 | Culori cu nume, cu `#` și cu `rgb()` (**Exemplele 1–2**) |
| 35–50 | Culori transparente: `rgba()` (**Exemplul 3**) |
| 50–70 | Degrade cu `linear-gradient` (**Exemplele 4–5**) |
| 70–90 | Piesă nouă: bannerul · paleta în variabile CSS și alegerea ei (**Exemplele 6–7**) |
| 90–105 | Mini-proiect: toate la un loc (**Exemplul 8**) |
| 105–115 | Verificare: se citește bine tot textul? (ochii strânși) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `rgb(255, 0, 0)` | Culoare din roșu, verde și albastru (0–255) | roșu |
| `rgba(255, 255, 255, 0.6)` | Culoare cu transparență (0–1) | alb transparent |
| `linear-gradient(to right, a, b)` | Degrade între culori | `background: …` |
| `:root { --nume: culoare; }` și `var(--nume)` | Variabilă: paleta într-un singur loc | `var(--accent)` |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- stilul stă în `stil.css`, legat cu `<link>` în `<head>`;
- o regulă are selector, acolade și rânduri `proprietate: valoare;`;
- selectorii pot fi de tag, de clasă (`.`) și de id (`#`);
- câștigă regula mai puternică sau cea scrisă mai jos.

**Încearcă tu (8 min)**  
- [ ] Creează folderul `Prenume_Nume_W3_L2` ca o **copie** a folderului `Prenume_Nume_W3_L1` (cu `tema.html`, `stil.css`, `imagini`, `media`)  
- [ ] Deschide `tema.html` cu Live Server și uită-te la culorile de acum  
- [ ] Notează într-un comentariu trei culori care ți se par potrivite pentru tema ta  

> De aici înainte, exemplele arată ce scrii în `stil.css`, pe piesele paginii-model (`header`, `.carte`, `aside`). Pagina ta le are pe aceleași.

---

## 2. Felurile de a scrie o culoare

### Exemplul 1 — Nume și cod `#`

Le știi din Modulul 1:

```css
h1 {
  color: tomato;
}

h2 {
  color: #2a9d8f;
}
```

Un cod `#` poate fi scris și mai scurt, cu **trei** caractere, dacă fiecare pereche are cifre la fel: `#f60` este același lucru cu `#ff6600`.

### Exemplul 2 — `rgb()`

Un ecran face culorile amestecând **lumină roșie, verde și albastră**. În `rgb()` scrii cât din fiecare, cu numere de la `0` (deloc) la `255` (tot):

```css
header {
  background-color: rgb(150, 50, 200);
}
```

| Valoare | Culoare |
|---------|---------|
| `rgb(255, 0, 0)` | roșu |
| `rgb(255, 255, 0)` | galben (roșu + verde) |
| `rgb(255, 255, 255)` | alb (toate la maximum) |
| `rgb(0, 0, 0)` | negru (niciuna) |

Trei numere, două virgule, paranteze rotunde. Nu trebuie să știi numerele pe de rost: VS Code arată un pătrățel colorat lângă culoare, iar pe el alegi dintr-o paletă.

**Încearcă tu (7 min)**  
- [ ] Colorează `h1` cu un nume de culoare și `h2` cu un cod `#`  
- [ ] Dă antetului un fundal cu `rgb()` și obține galben amestecând roșu cu verde  
- [ ] Alege culorile să se potrivească cu tema ta și verifică dacă titlul se citește pe fundal  

**Gata când:**  
- [ ] Ai folosit o culoare cu nume, una cu `#` și una cu `rgb()`  
- [ ] Poți spune ce culoare dă `rgb(255, 255, 255)`  

---

## 3. Culori transparente

### Exemplul 3 — `rgba()`

`rgba()` are un al patrulea număr, **transparența** (în engleză „alpha”), de la `0` (invizibil) la `1` (complet vizibil):

```css
body {
  background-color: lightblue;
}

.carte {
  background-color: rgba(255, 255, 255, 0.6);
  padding: 20px;
}
```

`0.6` înseamnă 60% vizibil: prin capitol se vede fundalul albastru al paginii. Zecimalele se scriu cu **punct**: `0.6`, nu `0,6`. Fundalul e transparent, dar textul rămâne clar și se citește bine.

**Încearcă tu (6 min)**  
- [ ] Pune un fundal colorat pe `body`  
- [ ] Dă capitolelor (`.carte`) un fundal `rgba(255, 255, 255, 0.5)`  
- [ ] Schimbă ultimul număr (0.2, apoi 0.9) și vezi ce se schimbă  

---

## 4. Degrade (gradient)

### Exemplul 4 — `linear-gradient`: de la o culoare la alta

Un **degrade** trece lin de la o culoare la alta:

```css
header {
  background: linear-gradient(to right, tomato, gold);
}
```

Între paranteze scrii **direcția** și apoi **culorile**, separate prin virgulă. Direcții: `to right` (spre dreapta), `to bottom` (în jos), `to left`, `to top`. Scrii proprietatea `background`, nu `background-color`, pentru că degradeul este o imagine făcută de calculator.

### Exemplul 5 — Mai multe culori și un unghi

```css
header {
  background: linear-gradient(135deg, navy, teal, lightgreen);
}
```

- poți pune câte culori vrei, iar ele se împart egal;  
- în loc de direcție poți scrie un **unghi**: `135deg` este pe diagonală (`deg` vine de la „grade”).

**Încearcă tu (7 min)**  
- [ ] Fă antetul un degrade de la două culori, spre dreapta  
- [ ] Schimbă direcția în `to bottom`, apoi într-un unghi  
- [ ] Fă un degrade cu trei culori care se potrivesc cu tema ta  

**Gata când:**  
- [ ] Antetul are un degrade  
- [ ] Titlul alb sau închis se citește bine peste degrade  

---

## 5. Paleta ta

### Piesă nouă de HTML: bannerul

Azi pagina primește un **banner**: o bandă colorată, cu o frază de bun venit, sub meniu. Copiază-l în `tema.html`, **între `</nav>` și `<main>`**:

```html
<div class="banner">
  Bun venit în lumea delfinilor!
</div>
```

Tu scrii o frază despre **subiectul tău**. Observă `class="banner"`: în CSS îl alegi cu **punct**, `.banner` (ca la `.carte` și `.important` din Lecția 1). Până îi dăm stil, bannerul arată ca un text obișnuit; îi scriem stilul chiar în **Exemplul 6** de mai jos.

### Exemplul 6 — Variabile CSS: culorile într-un singur loc

În loc să scrii `#2a9d8f` în zece locuri, îl scrii o dată, cu un **nume**, și îl folosești pe nume peste tot:

```css
:root {
  --principala: #2a9d8f;
  --accent: #e76f51;
  --fundal: #fdf6e3;
  --text: #264653;
}

body {
  background-color: var(--fundal);
  color: var(--text);
}

h1 {
  color: var(--principala);
}

.banner {
  background-color: var(--accent);
  color: white;
  text-align: center;
  padding: 12px;
}
```

- `.banner` alege elementul cu `class="banner"`, adică bannerul copiat mai sus: fundalul vine din accent, iar textul este alb, centrat, cu spațiu în jur;  
- `:root` este „rădăcina” paginii; ce scrii acolo este valabil peste tot;  
- numele variabilei începe cu **două liniuțe**: `--principala`;  
- o folosești cu `var(--nume)`.

Dacă îți place altă culoare principală, schimbi **un singur rând** din `:root`, iar pagina se schimbă peste tot.

### Exemplul 7 — Cum alegi o paletă bună

O paletă are patru roluri:
- 1 culoare **principală** (titluri, antet);  
- 1 culoare **accent** (linkuri, cuvinte care trebuie să se vadă);  
- 1 culoare de **fundal**, deschisă;  
- 1 culoare de **text**, închisă, foarte diferită de fundal.

**Se citește bine?** Uită-te la text și **strânge ochii**. Dacă literele dispar în fundal, schimbă culoarea textului sau a fundalului. Așa verifici dacă o pagină se citește ușor.

```css
/* Se citește greu: gri deschis pe alb */
.slab {
  color: lightgray;
  background-color: white;
}

/* Se citește bine: albastru închis pe alb */
.bun {
  color: #264653;
  background-color: white;
}
```

**Încearcă tu (8 min)**  
- [ ] Copiază bannerul în `tema.html`, între `</nav>` și `<main>`, cu o frază despre subiectul tău  
- [ ] Scrie în `:root` patru variabile: principală, accent, fundal și text  
- [ ] Folosește-le cu `var(...)` pentru `body`, `h1`, antet și banner (regula `.banner` din exemplu)  
- [ ] Strânge ochii și uită-te la textul de pe capitole: se citește bine? Repară ce nu se citește  

**Gata când:**  
- [ ] Pagina are o paletă definită în `:root` și folosită cu `var(...)`  
- [ ] Textul și fundalul sunt foarte diferite ca strălucire  

---

## 6. Mini-proiect: toate la un loc

### Exemplul 8 — Tot ce ai învățat, într-un singur `stil.css`

Pagina despre delfin (cea din Lecția 1) primește în HTML doar bannerul de mai sus. Restul este la fel: `header`, capitolele `.carte` și cuvântul `.important`. Se schimbă `stil.css`. Iată-l, cu **tot ce ai învățat azi la un loc**: paleta, degradeul, fundalul transparent. Citește-l de sus în jos; fiecare parte are un comentariu. Delfinul este **modelul tău**.

```css
/* Paleta */
:root {
  --principala: #1d6fa5;
  --accent: #e76f51;
  --fundal: #eaf4f8;
  --text: #1b2f3b;
}

/* Pagina */
body {
  background-color: var(--fundal);
  color: var(--text);
  font-family: Arial, sans-serif;
}

/* Antetul */
header {
  background: linear-gradient(135deg, var(--principala), var(--accent));
  color: white;
  text-align: center;
  padding: 20px;
}

#titlu-pagina {
  color: white;
}

h2 {
  color: var(--principala);
}

/* Bannerul */
.banner {
  background-color: var(--accent);
  color: white;
  text-align: center;
  font-weight: bold;
  padding: 12px;
}

/* Capitolele */
.carte {
  background-color: rgba(255, 255, 255, 0.7);
  border: 2px solid var(--principala);
  padding: 15px;
  margin: 10px 0;
}

.important {
  color: var(--accent);
  font-weight: bold;
}
```

Titlul are și o regulă cu `#`, pentru că în Lecția 1 l-ai făcut albastru închis cu `#titlu-pagina`, iar id-ul bate tagul și antetul: ca să fie alb, îl rescrii tot cu `#`. Cu patru culori și câteva reguli, pagina are acum o înfățișare proprie.

**Acum e rândul tău:** fă-ți propria pagină după modelul Delfinul, cu **subiectul tău și culorile tale**. Nu copia culorile delfinului, ci urmează aceiași pași: întâi paleta în `:root`, apoi fundalul paginii, degradeul în antet, bannerul în culoarea accent și `rgba()` pe capitole.

**Încearcă tu (10 min)**  
- [ ] Alege 4 culori pentru subiectul tău (principală, accent, fundal, text) și scrie-le în `:root`  
- [ ] Pune-le pe `body`, pe antet (degrade), pe banner (accentul) și pe capitole (`rgba()`), ca în model  
- [ ] Compară cu modelul: ai toate cele cinci părți (paleta, fundalul, degradeul, bannerul, capitolele)?  

**Gata când:**  
- [ ] Ai paleta în `:root` și o folosești cu `var(...)`  
- [ ] Ai un degrade în antet  
- [ ] Bannerul are fundalul din culoarea accent  
- [ ] Capitolele au fundal `rgba()`  
- [ ] Toate textele se citesc ușor  

---

## De făcut azi — „Paleta de culori”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | `tema.html` cu fundal colorat pe `body`, capitole cu fundal `rgba()` și un degrade în antet |
| **Complet** | Minim + o paletă de 4 variabile în `:root`, folosite peste tot, și verificarea „se citește bine?” |

### Pasul 1 — Minim
Pe `tema.html`, pune un fundal colorat pe `body`, un fundal `rgba()` pe capitole și un degrade în antet.

- [ ] Folderul `Prenume_Nume_W3_L2` are `tema.html` și `stil.css`  
- [ ] Pagina are fundal colorat, capitole transparente și un degrade în antet  
- [ ] Pagina se vede în browser, cu Live Server pornit  

### Pasul 2 — Complet
Îmbunătățești pagina:

- [ ] Ai o paletă de **4 variabile** în `:root`, folosite cu `var(...)`, inclusiv pe banner  
- [ ] Nu mai ai nicio culoare scrisă direct în afara lui `:root`  
- [ ] Ai verificat cu ochii strânși textul de pe antet, capitole și fișă, și toate se citesc bine  
- [ ] Ai comentarii care împart `stil.css` în secțiuni  

---

## Bonus ★★★ — Provocare: Paleta care se schimbă
*Doar dacă ai terminat Complet.*

Faci o pagină care își schimbă toate culorile dintr-un singur loc.

- [ ] Schimbă toată pagina cu un singur rând: modifică `--principala` din `:root`  
- [ ] Fă un degrade cu **trei** culori și un unghi (`135deg`)  
- [ ] Pune degradeul și pe `body`, cu `min-height: 100vh;` (altfel se oprește unde se termină textul)  
- [ ] Fă două palete: pune a doua într-o regulă `.intunecat { --fundal: #1b2f3b; --text: #eaf4f8; }`, apoi pune clasa `intunecat` pe `<body>` și vezi cum se schimbă pagina  

---

## Greșeli frecvente
1. **Ai uitat `#` la codul culorii** — `ff6600` nu merge, scrie `#ff6600`.  
2. **Ai scris `rgb(255, 0)`** cu două numere — trebuie trei: `rgb(255, 0, 0)`.  
3. **Ai pus virgulă la zecimale** — `0,5` nu merge, scrie `0.5`.  
4. **Ai uitat virgulele din `linear-gradient`** — culorile se despart prin virgulă.  
5. **Ai scris `background-color` pentru degrade** — folosește `background`.  
6. **Ai scris numele variabilei fără `--`** — o variabilă începe cu două liniuțe.  
7. **Ai scris `--principala` direct în regulă** — pentru folosire scrii `var(--principala)`.  
8. **Text deschis pe fundal deschis** — culorile sunt prea apropiate și nu se citește.  

---

## Recapitulare pe scurt
1. Culorile se scriu cu nume, cu `#`, cu `rgb()` sau cu `rgba()`.  
2. `rgb()` amestecă roșu, verde și albastru, de la 0 la 255.  
3. `rgba()` adaugă transparența, de la 0 la 1.  
4. `linear-gradient(direcție, culoare, culoare)` face un degrade.  
5. Variabilele din `:root` păstrează paleta într-un singur loc: `var(--nume)`.  
6. O paletă bună are principală, accent, fundal deschis și text închis.

## Quiz scurt
- Ce înseamnă cele trei numere din `rgb(255, 0, 0)`?  
- Cum faci un fundal alb transparent la jumătate?  
- Cum faci un degrade de la roșu la galben, spre dreapta?  
- Cum scrii și cum folosești o variabilă CSS?  
- De ce nu punem text gri deschis pe fundal alb?

## Temă
1. Fă pentru `tema.html` **a doua variantă de culori**, schimbând doar valorile din `:root` (nu atinge restul regulilor). Salvează în `Prenume_Nume_W3_L2`.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Degrade în jos.**

```css
aside {
  background: linear-gradient(to bottom, white, lightblue);
}
```

Un degrade de la alb spre albastru deschis arată „Fișa pe scurt” ca o cutie luminoasă, fără să încarce pagina.

**Acasă 2 — O variabilă cu valoare de rezervă.**

```css
a {
  color: var(--accent, tomato);
}
```

Dacă variabila `--accent` lipsește, browserul folosește culoarea de rezervă, `tomato`.

4. **Încă patru exerciții (B–E):**

**B — Ce culoare este?** Spune ce culoare crezi că rezultă: (1) `rgb(255, 0, 0)`; (2) `rgb(0, 0, 255)`; (3) `rgb(255, 255, 255)`; (4) `rgb(0, 0, 0)`; (5) `rgba(0, 0, 0, 0.5)` pus peste un fundal alb.

**C — Scrie regula.** Scrie în CSS: (1) un fundal cu degrade de la albastru la verde, spre dreapta; (2) un fundal negru transparent la 60%; (3) o variabilă `--rosu-meu` cu o culoare la alegere, pusă ca fundal pentru `.alerta`.

**D — Găsește greșelile.** Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
.cutie {
  background-color: ff6600;
}
.alb {
  color: rgb(255, 255);
}
.degrade {
  background: linear-gradient(red blue);
}
```

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: de ce este mai bine să scrii culorile într-un singur loc? Cum alegi culorile unei pagini ca să se citească bine?

## Ce urmează — Lecția 3
Învățăm să dăm **personalitate textului**: litere, mărimi, grosimi, spațiu între rânduri, umbre și alinieri, ca pagina să se citească plăcut.

---

## Răspunsuri
- **Quiz scurt:** (1) cât roșu, cât verde și cât albastru, de la 0 la 255 (aici roșu complet, deci culoarea roșie); (2) `background-color: rgba(255, 255, 255, 0.5);`; (3) `background: linear-gradient(to right, red, yellow);`; (4) se scrie în `:root`, de exemplu `--text: #264653;`, și se folosește cu `var(--text)`; (5) pentru că textul nu se mai citește: culorile sunt prea apropiate ca strălucire.  
- **Dacă ritmul clasei este lent:** Exemplul 5 (degrade cu trei culori și unghi) și Exemplul 7 (verificarea „se citește bine?”) se pot face scurt; paleta se poate scrie direct, fără variabile, iar variabilele se introduc la sfârșit.  
- **Tema, exercițiul B:** (1) roșu; (2) albastru; (3) alb; (4) negru; (5) gri (negru jumătate transparent peste alb).  
- **Tema, exercițiul C:** (1) `background: linear-gradient(to right, blue, green);`; (2) `background-color: rgba(0, 0, 0, 0.6);`; (3) `:root { --rosu-meu: #cc0000; }` și `.alerta { background-color: var(--rosu-meu); }`.  
- **Tema, exercițiul D:** (1) lipsește `#` — `#ff6600`; (2) `rgb` cere trei numere — `rgb(255, 255, 255)`; (3) lipsește virgula — `linear-gradient(red, blue)`.  
- **Tema, exercițiul E:** o culoare schimbată într-un singur loc se schimbă peste tot; alegem 3–4 culori care se potrivesc și un text foarte diferit de fundal.  
- **Notă pentru profesor:** variabilele CSS (`:root`, `var(...)`) sunt un pas mai greu: dacă o parte din grup nu le prinde, rămân ca bonus, iar pagina se face și cu culori scrise direct. `padding` și `margin` apar ca „recomandare” și se explică în lecția 4. Imaginile de fundal, `opacity`, `hsl()` și `border-image` nu fac parte din această lecție.
