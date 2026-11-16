# LECȚIA 2 — Paleta de culori
### Culori și fundaluri
**Modulul 3 · CSS: Stil și culoare · 2 ore**  
**Code Maker Club · CSS Stylist**

> Culorile sunt cea mai rapidă schimbare care face o pagină să arate nouă. Azi înveți toate felurile de a scrie o culoare, cum faci o culoare **transparentă**, cum pui o **imagine** sau un **degrade** pe fundal și cum alegi o **paletă** care se potrivește.  
> Proiect: **„Paleta de culori”** · folder: `Prenume_Nume_W3_L2` (ex. `Ana_Pop_W3_L2`)

---

## Ce facem azi
La final ai o pagină cu o **paletă de 4 culori** definită într-un singur loc, cu un degrade pe fundal sau pe antet, cu o cutie transparentă și, dacă vrei, cu o imagine de fundal. Știi să scrii o culoare cu nume, cu cod `#`, cu `rgb()` și cu `rgba()`. O pagină cu 3–4 culori care se potrivesc arată îngrijit, iar una cu zece culori amestecate obosește ochii. Dacă îți scrii paleta **o singură dată**, o schimbi apoi pe tot site-ul cu un singur rând.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · aducem pagina cu articolul de pe Wikipedia |
| 15–30 | Culori cu nume, cu `#` și cu `rgb()` (**Exemplul 1**) |
| 30–45 | Culori transparente: `rgba()` și `opacity` (**Exemplul 2**) |
| 45–65 | Imagini pe fundal · text citibil peste imagine (**Exemplele 3–4**) |
| 65–80 | Degrade cu `linear-gradient` (**Exemplele 5–6**) |
| 80–100 | Paleta mea cu variabile CSS (**Exemplul 7**) |
| 100–115 | Mini-proiect: paleta de culori (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `rgb(255, 0, 0)` | Culoare din roșu, verde și albastru (0–255) | roșu |
| `rgba(255, 255, 255, 0.6)` | Culoare cu transparență (0–1) | alb transparent |
| `background-image: url("…")` | Imagine pe fundal | `cover`, `center` |
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
- [ ] Creează folderul `Prenume_Nume_W3_L2` cu `index.html` (scheletul complet, cu `<link>` către `stil.css`) și `stil.css`  
- [ ] Pune în `<body>` un `<h1>`, trei cutii `<div class="cutie">` cu câte un titlu `<h2>` și un paragraf  
- [ ] Copiază în folder `tema.html`, `stil.css` și folderele `imagini` și `media` din lecția trecută  
- [ ] Deschide `tema.html` cu Live Server și notează trei culori care ți se par potrivite pentru tema ta  

> De aici înainte, exemplele arată ce scrii în `<body>` și, separat, ce scrii în `stil.css`.

---

## 2. Felurile de a scrie o culoare

### Exemplul 1 — Nume, cod `#` și `rgb()`

Nume și cod `#` le știi din Modulul 1:

```css
h1 {
  color: tomato;
}

h2 {
  color: #2a9d8f;
}
```

Un cod `#` poate fi scris și mai scurt, cu **trei** caractere, dacă fiecare pereche are cifre la fel: `#f60` este același lucru cu `#ff6600`.

Un ecran face culorile amestecând **lumină roșie, verde și albastră**. În `rgb()` scrii cât din fiecare, cu numere de la `0` (deloc) la `255` (tot):

```css
.rosu {
  background-color: rgb(255, 0, 0);
}

.mov {
  background-color: rgb(150, 50, 200);
}
```

| Valoare | Culoare |
|---------|---------|
| `rgb(255, 0, 0)` | roșu |
| `rgb(255, 255, 0)` | galben (roșu + verde) |
| `rgb(255, 255, 255)` | alb (toate la maximum) |
| `rgb(0, 0, 0)` | negru (niciuna) |
| `rgb(128, 128, 128)` | gri |

Trei numere, două virgule, paranteze rotunde. Nu trebuie să știi numerele pe de rost: VS Code arată un pătrățel colorat lângă culoare, iar pe el alegi dintr-o paletă.

**Încearcă tu (8 min)**  
- [ ] Colorează trei elemente: unul cu nume, unul cu `#` și unul cu `rgb()`  
- [ ] Obține galben amestecând roșu cu verde în `rgb()`  
- [ ] În `tema.html`, colorează `h1` cu un cod `#` și `h2` cu un `rgb()`, alese să se potrivească cu tema ta  

**Gata când:**  
- [ ] Ai colorat trei elemente în trei feluri  
- [ ] Poți spune ce culoare dă `rgb(255, 255, 255)`  

---

## 3. Culori transparente

### Exemplul 2 — `rgba()` și `opacity`

`rgba()` are un al patrulea număr, **transparența** (în engleză „alpha”), de la `0` (invizibil) la `1` (complet vizibil):

```css
body {
  background-color: lightblue;
}

.sticla {
  background-color: rgba(255, 255, 255, 0.6);
  padding: 20px;
}
```

```html
<div class="sticla">
  <h2>Cutie transparentă</h2>
  <p>Fundalul albastru se vede prin cutie.</p>
</div>
```

`0.6` înseamnă 60% vizibil, deci se vede prin el fundalul paginii. Zecimalele se scriu cu **punct**: `0.6`, nu `0,6`.

Cu `opacity` faci transparent **tot elementul**, inclusiv textul din el:

```css
.pal {
  opacity: 0.5;
}
```

| | `rgba()` pe `background-color` | `opacity` |
|---|-----|-----|
| Ce devine transparent | doar fundalul | tot elementul, și textul |
| Textul se citește bine | da | mai greu |

Pentru cutii cu text alege aproape mereu `rgba()`.

**Încearcă tu (6 min)**  
- [ ] Fă o cutie cu fundal `rgba(255, 255, 255, 0.5)` peste un fundal colorat al paginii  
- [ ] Fă încă o cutie cu `opacity: 0.5` și compară cum se vede textul  
- [ ] În `tema.html`, dă capitolelor un fundal alb transparent peste fundalul colorat al paginii  

---

## 4. Imagini pe fundal

### Exemplul 3 — `background-image`

Pune în folderul proiectului un subfolder `imagini` și în el o imagine `fundal.jpg` (un peisaj, un animal sau un desen, **fără persoane**; o alegi cu profesorul; poate fi chiar o imagine din articolul tău de pe Wikipedia). Apoi:

```css
.baner {
  background-image: url("imagini/fundal.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 200px;
}
```

```html
<div class="baner"></div>
```

`url("...")` spune unde este imaginea, ca la `src` din `<img>`. Dacă imaginea nu apare, verifică numele, folderul și extensia (`.jpg`, nu `.jpeg`, dacă așa a fost salvată).

| Regulă | Ce face |
|--------|---------|
| `background-repeat: no-repeat;` | imaginea nu se repetă ca niște plăcuțe |
| `background-size: cover;` | imaginea **acoperă** tot elementul, fără goluri |
| `background-position: center;` | imaginea este centrată |

### Exemplul 4 — Text citibil peste o imagine

Textul scris direct peste o imagine se citește greu. Soluția: o cutie cu **fundal transparent** între ele.

```css
body {
  margin: 0;
  min-height: 100vh;
  background-image: url("imagini/fundal.jpg");
  background-size: cover;
  background-position: center;
}

.panou {
  background-color: rgba(255, 255, 255, 0.85);
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
}
```

```html
<div class="panou">
  <h1>Titlu ușor de citit</h1>
  <p>Textul stă pe o cutie albă, aproape opacă, așezată peste imagine.</p>
</div>
```

- `min-height: 100vh;` înseamnă „cel puțin cât **înălțimea ferestrei**” (`vh` = a suta parte din înălțimea ferestrei), ca fundalul să acopere tot ecranul;  
- `margin: 0;` scoate spațiul mic pe care browserul îl pune implicit în jurul paginii;  
- `margin: 40px auto;` pune 40px sus și jos și **centrează** cutia pe orizontală. Despre `margin` și `padding` vorbim mai mult în lecția 4.

**Încearcă tu (8 min)**  
- [ ] Pune o imagine pe fundalul unui element cu `cover` și `center`  
- [ ] Pune un panou transparent peste imagine și verifică dacă textul se citește  
- [ ] În `tema.html`, pune ca fundal al antetului o imagine din articol (cu `cover`)  

**Gata când:**  
- [ ] O imagine acoperă fundalul unui element cu `cover`  
- [ ] Textul este pe un panou transparent și se citește ușor  
- [ ] Imaginea nu conține persoane și este în folderul `imagini`  

---

## 5. Degrade (gradient)

### Exemplul 5 — `linear-gradient`: de la o culoare la alta

Un **degrade** trece lin de la o culoare la alta:

```css
.degrade {
  background: linear-gradient(to right, tomato, gold);
  height: 100px;
}
```

```html
<div class="degrade"></div>
```

Între paranteze scrii **direcția** și apoi **culorile**, separate prin virgulă. Direcții: `to right` (spre dreapta), `to bottom` (în jos), `to left`, `to top`. Scrii proprietatea `background`, nu `background-color`, pentru că degradeul este o imagine făcută de calculator.

### Exemplul 6 — Mai multe culori, unghi și degrade pe toată pagina

```css
.curcubeu {
  background: linear-gradient(to right, red, orange, gold, green, deepskyblue, purple);
  height: 60px;
}

.diagonal {
  background: linear-gradient(45deg, hotpink, skyblue);
  height: 100px;
}

body {
  margin: 0;
  min-height: 100vh;
  background: linear-gradient(to bottom, lightyellow, lightblue);
}
```

- poți pune câte culori vrei, iar ele se împart egal;  
- în loc de direcție poți scrie un **unghi**: `45deg` este pe diagonală (`deg` vine de la „grade”);  
- pentru degradeul pe tot ecranul pune pe `body` și `min-height: 100vh;`, altfel degradeul se oprește unde se termină textul.

**Încearcă tu (6 min)**  
- [ ] Fă un degrade de la două culori, de la stânga la dreapta  
- [ ] Fă un „curcubeu” din cel puțin cinci culori  
- [ ] În `tema.html`, pune un degrade în antet, cu două culori din paleta ta  

---

## 6. Paleta mea

### Exemplul 7 — Variabile CSS: culorile într-un singur loc

În loc să scrii `#2a9d8f` în zece locuri, îl scrii o dată, cu un **nume**, și îl folosești pe nume peste tot:

```css
:root {
  --culoare-principala: #2a9d8f;
  --culoare-accent: #e76f51;
  --fundal-pagina: #fdf6e3;
  --text: #264653;
}

body {
  background-color: var(--fundal-pagina);
  color: var(--text);
}

h1 {
  color: var(--culoare-principala);
}

.buton {
  background-color: var(--culoare-accent);
  color: white;
}
```

- `:root` este „rădăcina” paginii; ce scrii acolo este valabil peste tot;  
- numele variabilei începe cu **două liniuțe**: `--culoare-principala`;  
- o folosești cu `var(--nume)`.

Dacă îți place altă culoare principală, schimbi **un singur rând** din `:root`, iar pagina se schimbă peste tot.

**Cum alegi o paletă bună:**
- 1 culoare **principală** (titluri, elemente importante);  
- 1 culoare **accent** (butoane, cuvinte care trebuie să se vadă);  
- 1 culoare de **fundal** deschisă și 1 culoare de **text** închisă, foarte diferite una de alta;  
- cu cât textul și fundalul sunt mai diferite ca strălucire, cu atât se citește mai ușor.

**Încearcă tu (6 min)**  
- [ ] Scrie în `:root` patru variabile: principală, accent, fundal și text  
- [ ] Folosește-le cu `var(...)` pentru `body`, `h1` și o clasă  
- [ ] În `tema.html`, înlocuiește culorile scrise direct cu variabile din paleta ta  

**Gata când:**  
- [ ] Pagina are o paletă definită în `:root` și folosită cu `var(...)`  
- [ ] Textul și fundalul sunt foarte diferite ca strălucire  

---

## 7. Mini-proiect

### Exemplul 8 — „Paleta de culori”

Fișierul `index.html`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Paleta mea</title>
  <link rel="stylesheet" href="stil.css">
</head>
<body>
  <header class="antet">
    <h1>Paleta mea de culori</h1>
    <p>Patru culori care se potrivesc</p>
  </header>

  <main>
    <div class="cutie">
      <h2>Culoarea principală</h2>
      <p>O folosesc pentru titluri și pentru antet.</p>
    </div>
    <div class="cutie">
      <h2>Culoarea accent</h2>
      <p>O folosesc pentru lucrurile care trebuie să se vadă.</p>
    </div>
    <div class="cutie sticla">
      <h2>Cutie transparentă</h2>
      <p>Se vede fundalul prin ea.</p>
    </div>
  </main>
</body>
</html>
```

Fișierul `stil.css`:

```css
/* Paleta mea */
:root {
  --principala: #2a9d8f;
  --accent: #e76f51;
  --fundal: #fdf6e3;
  --text: #264653;
}

body {
  margin: 0;
  min-height: 100vh;
  background: linear-gradient(to bottom, var(--fundal), lightblue);
  color: var(--text);
  font-family: Arial, sans-serif;
}

.antet {
  background: linear-gradient(to right, var(--principala), var(--accent));
  color: white;
  text-align: center;
  padding: 20px;
}

main {
  max-width: 600px;
  margin: 20px auto;
}

.cutie {
  background-color: white;
  border: 2px solid var(--principala);
  padding: 15px;
  margin-bottom: 15px;
}

.cutie h2 {
  color: var(--principala);
}

.sticla {
  background-color: rgba(255, 255, 255, 0.6);
  border-color: var(--accent);
}
```

Fă pagina despre **ceva ce îți place**. Alege o paletă proprie, cu 4 culori care se potrivesc, și folosește paleta prin variabile.

**Gata când:**  
- [ ] Pagina are o paletă definită în `:root` și folosită cu `var(...)`  
- [ ] Ai un degrade pe `body` sau pe antet  
- [ ] Ai cel puțin o cutie cu fundal transparent  
- [ ] Toate textele se citesc ușor  

---

## De făcut azi — „Paleta de culori”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | O pagină cu fundal colorat, o cutie cu fundal transparent și un degrade pe un element |
| **Complet** | Minim + o paletă definită cu variabile, o cutie citibilă peste o imagine de fundal și un test de citibilitate |

### Pasul 1 — Minim
Pe scheletul complet, legat la `stil.css`, pune un fundal colorat pe `body`, o cutie cu fundal `rgba()` și un degrade pe un element.

- [ ] Folderul `Prenume_Nume_W3_L2` are `index.html` și `stil.css`  
- [ ] Pagina are fundal colorat, o cutie transparentă și un degrade  
- [ ] Pagina se vede în browser, cu Live Server pornit  

### Pasul 2 — Complet
Îmbunătățești pagina:

- [ ] Ai o paletă de **4 variabile** în `:root`, folosite cu `var(...)`  
- [ ] Ai o imagine de fundal cu `cover`, cu un panou transparent peste ea  
- [ ] Ai cel puțin **trei cutii** cu aceeași clasă, una cu fundal `rgba()`  
- [ ] Toate textele se citesc ușor (ai testat de la distanță)  

---

## Bonus ★★★ — Provocare: Paleta care se schimbă
*Doar dacă ai terminat Complet.*

Faci o pagină care își schimbă toate culorile dintr-un singur loc.

- [ ] Schimbă toată pagina cu un singur rând: modifică `--principala` din `:root` și vezi cum se schimbă tot  
- [ ] Fă un degrade cu **trei** culori și un unghi (`135deg`)  
- [ ] Fă două palete (una deschisă, una închisă) și schimbă între ele doar valorile din `:root`  
- [ ] Fă din `tema.html` pagina cu cea mai bună paletă din grup: patru culori, un degrade, o imagine de fundal cu panou și text care se citește perfect  

---

## Greșeli frecvente
1. **Ai uitat `#` la codul culorii** — `ff6600` nu merge, scrie `#ff6600`.  
2. **Ai scris `rgb(255, 0)`** cu două numere — trebuie trei: `rgb(255, 0, 0)`.  
3. **Ai pus virgulă la zecimale** — `0,5` nu merge, scrie `0.5`.  
4. **Ai uitat virgulele din `linear-gradient`** — culorile se despart prin virgulă.  
5. **Ai scris `background-color` pentru degrade** — folosește `background`.  
6. **Imaginea de fundal nu apare** — verifică calea din `url("...")`, numele și folderul `imagini`.  
7. **Degradeul de pe `body` se oprește la jumătate** — adaugă `min-height: 100vh;`.  
8. **Ai scris numele variabilei fără `--`** — o variabilă începe cu două liniuțe.  

---

## Recapitulare pe scurt
1. Culorile se scriu cu nume, cu `#`, cu `rgb()` sau cu `rgba()`.  
2. `rgb()` amestecă roșu, verde și albastru, de la 0 la 255.  
3. `rgba()` adaugă transparența, de la 0 la 1; `opacity` face transparent tot elementul.  
4. `background-image: url(...)` pune o imagine; `cover` o face să acopere elementul.  
5. `linear-gradient(direcție, culoare, culoare)` face un degrade.  
6. Variabilele din `:root` păstrează paleta într-un singur loc: `var(--nume)`.

## Quiz scurt
- Ce înseamnă cele trei numere din `rgb(255, 0, 0)`?  
- Cum faci un fundal alb transparent la jumătate?  
- Cum faci un degrade de la roșu la galben, spre dreapta?  
- Ce face `background-size: cover`?  
- Cum scrii și cum folosești o variabilă CSS?

## Temă
1. Fă o pagină „Cartea de vizită a unui animal” cu o **paletă de 4 culori** în variabile, un degrade în antet și o cutie transparentă. Schimbă apoi doar variabilele ca să obții o a doua variantă de culori. Salvează în `Prenume_Nume_W3_L2`.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Culori cu `hsl()`.**

```css
.titlu {
  color: hsl(200, 70%, 40%);
}
```

Primul număr este culoarea pe un cerc, de la 0 la 360 (0 roșu, 120 verde, 240 albastru), al doilea cât de vie este culoarea, al treilea cât de deschisă. Schimbă doar ultimul număr și obții culori mai deschise sau mai închise din aceeași familie.

**Acasă 2 — Un cadru cu degrade.**

```css
.cadru {
  border: 6px solid;
  border-image: linear-gradient(to right, tomato, gold) 1;
  padding: 10px;
}
```

Un degrade poate fi pus și pe marginea unei cutii, cu `border-image`.

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

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: care este diferența dintre `opacity: 0.5` și `rgba(…, 0.5)` pe fundal? De ce nu punem text direct peste o imagine? Cum alegi culorile unei pagini?

## Ce urmează — Lecția 3
Învățăm să dăm **personalitate textului**: litere, mărimi, grosimi, spațiu între rânduri, umbre și alinieri, ca pagina să se citească plăcut.

---

## Răspunsuri
- **Quiz scurt:** (1) cât roșu, cât verde și cât albastru, de la 0 la 255 (aici roșu complet, deci culoarea roșie); (2) `background-color: rgba(255, 255, 255, 0.5);`; (3) `background: linear-gradient(to right, red, yellow);`; (4) imaginea de fundal acoperă tot elementul, fără goluri; (5) se scrie în `:root`, de exemplu `--text: #264653;`, și se folosește cu `var(--text)`.  
- **Dacă ritmul clasei este lent:** Exemplul 7 (variabile CSS) și degradeul cu mai multe culori din Exemplul 6 sunt opționale; paleta se poate scrie direct, fără variabile.  
- **Tema, exercițiul B:** (1) roșu; (2) albastru; (3) alb; (4) negru; (5) gri (negru jumătate transparent peste alb).  
- **Tema, exercițiul C:** (1) `background: linear-gradient(to right, blue, green);`; (2) `background-color: rgba(0, 0, 0, 0.6);`; (3) `:root { --rosu-meu: #cc0000; }` și `.alerta { background-color: var(--rosu-meu); }`.  
- **Tema, exercițiul D:** (1) lipsește `#` — `#ff6600`; (2) `rgb` cere trei numere — `rgb(255, 255, 255)`; (3) lipsește virgula — `linear-gradient(red, blue)`.  
- **Tema, exercițiul E:** `opacity` face transparent tot elementul, inclusiv textul; `rgba` doar fundalul; textul peste imagine se citește greu, deci punem un panou transparent; alegem 3–4 culori care se potrivesc și un text foarte diferit de fundal.  
- **Notă pentru profesor:** pregătește o mică colecție de imagini de fundal fără persoane (peisaje, animale, desene) pentru folderul `imagini`. Dacă lecția se face fără internet, imaginile trebuie să fie deja pe calculatoare. Variabilele CSS (`:root`, `var(...)`) sunt un pas mai greu: dacă o parte din grup nu le prinde, rămân ca bonus, iar proiectul se face și cu culori scrise direct. `margin: 0 auto` și `padding` sunt folosite ca „recomandare” și se explică în lecția 4.
