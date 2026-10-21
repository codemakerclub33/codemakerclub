# LECȚIA 2 — Culori și fundaluri
**Modulul 3 · CSS: Stil și culoare · 2 ore**  
**Code Maker Club · CSS Stylist**

> Culorile sunt cea mai rapidă schimbare care face o pagină să arate nouă. Azi înveți toate felurile de a scrie o culoare, cum faci o culoare **transparentă**, cum pui o **imagine** sau un **degrade** pe fundal și cum alegi o **paletă** care se potrivește.  
> Proiect: **„Pagina cu paleta mea”** · folder: `Prenume_Nume_W3_L2` (ex. `Ana_Pop_W3_L2`)

---

## Obiectiv
La finalul orei știi să scrii culori cu nume, cu cod `#`, cu `rgb()` și cu `rgba()`, să faci o culoare transparentă, să pui o imagine pe fundal, să faci un degrade cu `linear-gradient` și să definești o paletă de culori într-un singur loc.  
**Minim:** o pagină cu fundal colorat, o cutie cu fundal transparent și un degrade pe un element.  
**Ținta orei (Complet):** + o imagine de fundal care acoperă pagina, o cutie citibilă peste imagine, o paletă definită cu variabile și un test de citibilitate.

## De ce contează
O pagină cu 3–4 culori care se potrivesc arată îngrijit, iar una cu zece culori amestecate obosește ochii. Dacă îți scrii paleta **o singură dată**, o schimbi apoi pe tot site-ul cu un singur rând.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–35 | Culori cu nume, cu `#` și cu `rgb()` (**Exemplele 1–2**) |
| 35–55 | Culori transparente: `rgba()` și `opacity` (**Exemplele 3–4**) |
| 55–75 | Imagini pe fundal (**Exemplele 5–6**) |
| 75–95 | Degrade cu `linear-gradient` (**Exemplele 7–8**) |
| 95–115 | Paleta mea · proiect (**Exemplele 9–10**) |
| 115–120 | Recap și temă |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- stilul stă în `stil.css`, legat cu `<link>` în `<head>`;
- o regulă are selector, acolade și rânduri `proprietate: valoare;`;
- selectorii pot fi de tag, de clasă (`.`) și de id (`#`);
- câștigă regula mai puternică sau cea scrisă mai jos.

**Încearcă tu (4 min)**  
- [ ] Creează folderul `Prenume_Nume_W3_L2` cu `index.html` (scheletul complet, cu `<link>` către `stil.css`) și `stil.css`  
- [ ] Pune în `<body>` un `<h1>`, trei cutii `<div class="cutie">` cu câte un titlu `<h2>` și un paragraf  

> De aici înainte, exemplele arată ce scrii în `<body>` și, separat, ce scrii în `stil.css`.

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

### Exemplul 2 — `rgb()`: amestecăm lumina

Un ecran face culorile amestecând **lumină roșie, verde și albastră**. În `rgb()` scrii cât din fiecare, cu numere de la `0` (deloc) la `255` (tot):

```css
.rosu {
  background-color: rgb(255, 0, 0);
}

.verde {
  background-color: rgb(0, 255, 0);
}

.albastru {
  background-color: rgb(0, 0, 255);
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

**Gata când:**  
- [ ] Ai colorat trei elemente: unul cu nume, unul cu `#` și unul cu `rgb()`  
- [ ] Ai obținut galben amestecând roșu cu verde în `rgb()`  

---

## 3. Culori transparente

### Exemplul 3 — `rgba()`: cu transparență

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

### Exemplul 4 — `rgba()` sau `opacity`?

Cu `opacity` faci transparent **tot elementul**, inclusiv textul din el:

```css
.pal {
  opacity: 0.5;
}
```

Cu `rgba()` faci transparent **doar fundalul**, iar textul rămâne clar. Pentru cutii cu text alege aproape mereu `rgba()`.

| | `rgba()` pe `background-color` | `opacity` |
|---|-----|-----|
| Ce devine transparent | doar fundalul | tot elementul, și textul |
| Textul se citește bine | da | mai greu |

**Încearcă tu (6 min)**  
- [ ] Fă o cutie cu fundal `rgba(255, 255, 255, 0.5)` peste un fundal colorat al paginii  
- [ ] Fă încă o cutie cu `opacity: 0.5` și compară cum se vede textul  
- [ ] Schimbă ultimul număr din `rgba` între `0.2` și `0.9` și vezi diferența  

---

## 4. Imagini pe fundal

### Exemplul 5 — `background-image`

Pune în folderul proiectului un subfolder `imagini` și în el o imagine `fundal.jpg` (un peisaj, un animal sau un desen, **fără persoane**; o alegi cu profesorul). Apoi:

```css
.baner {
  background-image: url("imagini/fundal.jpg");
  height: 200px;
}
```

```html
<div class="baner"></div>
```

`url("...")` spune unde este imaginea, ca la `src` din `<img>`. Dacă imaginea nu apare, verifică numele, folderul și extensia (`.jpg`, nu `.jpeg`, dacă așa a fost salvată).

Trei reguli ajută imaginea să arate bine:

```css
.baner {
  background-image: url("imagini/fundal.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 200px;
}
```

| Regulă | Ce face |
|--------|---------|
| `background-repeat: no-repeat;` | imaginea nu se repetă ca niște plăcuțe |
| `background-size: cover;` | imaginea **acoperă** tot elementul, fără goluri |
| `background-position: center;` | imaginea este centrată |

### Exemplul 6 — Text citibil peste o imagine

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

**Gata când:**  
- [ ] O imagine acoperă fundalul unui element cu `cover`  
- [ ] Textul este pe un panou transparent și se citește ușor  
- [ ] Imaginea nu conține persoane și este în folderul `imagini`  

---

## 5. Degrade (gradient)

### Exemplul 7 — `linear-gradient`: de la o culoare la alta

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

### Exemplul 8 — Mai multe culori, unghi și degrade pe toată pagina

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
- [ ] Pune pe `body` un degrade spre jos care umple tot ecranul  

---

## 6. Paleta mea și proiectul

### Exemplul 9 — Variabile CSS: culorile într-un singur loc

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

### Exemplul 10 — „Pagina cu paleta mea”

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

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Pagina cu paleta mea” (obligatoriu)
Fă o pagină despre un subiect ales de tine, cu fișierele `index.html` și `stil.css`, care are:
- o paletă de **4 variabile** în `:root`, folosite cu `var(...)`;
- un degrade pe `body` (cu `min-height: 100vh;`) sau pe un antet;
- cel puțin **trei cutii** cu aceeași clasă, una cu fundal `rgba()` transparent;
- o imagine de fundal pe un element, cu `cover`, **sau** un al doilea degrade;
- un `<span>` sau un cuvânt colorat cu culoarea accent.

Verifică pagina cu Live Server.

### Exercițiul B — Ce culoare este?
Spune ce culoare crezi că rezultă: (1) `rgb(255, 0, 0)`; (2) `rgb(0, 0, 255)`; (3) `rgb(255, 255, 255)`; (4) `rgb(0, 0, 0)`; (5) `rgba(0, 0, 0, 0.5)` pus peste un fundal alb.

### Exercițiul C — Scrie regula
Scrie în CSS: (1) un fundal cu degrade de la albastru la verde, spre dreapta; (2) un fundal negru transparent la 60%; (3) o variabilă `--rosu-meu` cu o culoare la alegere, pusă ca fundal pentru `.alerta`.

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile:

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

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: care este diferența dintre `opacity: 0.5` și `rgba(…, 0.5)` pe fundal? De ce nu punem text direct peste o imagine? Cum alegi culorile unei pagini?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W3_L2` are `index.html`, `stil.css` și (dacă ai folosit imagine) folderul `imagini`  
- [ ] Pagina are paletă cu variabile, degrade și cutie transparentă  
- [ ] Toate textele se citesc ușor  
- [ ] Ai răspuns la exercițiile B–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Schimbă toată pagina cu un singur rând: modifică `--principala` din `:root` și vezi cum se schimbă tot  
- [ ] Fă un degrade cu **trei** culori și un unghi (`135deg`)  
- [ ] Încearcă `hsl(200, 70%, 50%)`: primul număr este culoarea (0–360), al doilea cât de vie este, al treilea cât de deschisă  
- [ ] Fă două palete (una deschisă, una închisă) și schimbă între ele doar valorile din `:root`  

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
9. **Ai folosit prea multe culori** — 4 culori care se potrivesc arată mai bine.  
10. **Text peste imagine, fără panou** — nu se citește; pune o cutie transparentă între ele.  

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
Fă o pagină „Cartea de vizită a unui animal” cu o **paletă de 4 culori** în variabile, un degrade în antet și o cutie transparentă. Schimbă apoi doar variabilele ca să obții o a doua variantă de culori. Salvează în `Prenume_Nume_W3_L2`.

## Ce urmează — Lecția 3
Învățăm să dăm **personalitate textului**: litere, mărimi, grosimi, spațiu între rânduri, umbre și alinieri, ca pagina să se citească plăcut.

---

## Răspunsuri pentru profesor
- **Quiz scurt:** (1) cât roșu, cât verde și cât albastru, de la 0 la 255 (aici roșu complet, deci culoarea roșie); (2) `background-color: rgba(255, 255, 255, 0.5);`; (3) `background: linear-gradient(to right, red, yellow);`; (4) imaginea de fundal acoperă tot elementul, fără goluri; (5) se scrie în `:root`, de exemplu `--text: #264653;`, și se folosește cu `var(--text)`.  
- **Dacă ritmul clasei este lent:** Exemplul 9 (variabile CSS) și Exemplul 8 (degrade cu mai multe culori) sunt opționale; paleta se poate scrie direct, fără variabile.  
- **Exercițiul B:** (1) roșu; (2) albastru; (3) alb; (4) negru; (5) gri (negru jumătate transparent peste alb).  
- **Exercițiul C:** (1) `background: linear-gradient(to right, blue, green);`; (2) `background-color: rgba(0, 0, 0, 0.6);`; (3) `:root { --rosu-meu: #cc0000; }` și `.alerta { background-color: var(--rosu-meu); }`.  
- **Exercițiul D:** (1) lipsește `#` — `#ff6600`; (2) `rgb` cere trei numere — `rgb(255, 255, 255)`; (3) lipsește virgula — `linear-gradient(red, blue)`.  
- **Exercițiul E:** `opacity` face transparent tot elementul, inclusiv textul; `rgba` doar fundalul; textul peste imagine se citește greu, deci punem un panou transparent; alegem 3–4 culori care se potrivesc și un text foarte diferit de fundal.  
- **Notă pentru profesor:** pregătește o mică colecție de imagini de fundal fără persoane (peisaje, animale, desene) pentru folderul `imagini`. Dacă lecția se face fără internet, imaginile trebuie să fie deja pe calculatoare. Variabilele CSS (`:root`, `var(...)`) sunt un pas mai greu: dacă o parte din grup nu le prinde, rămân ca bonus, iar proiectul se face și cu culori scrise direct. `margin: 0 auto` și `padding` sunt folosite ca „recomandare” și se explică în lecția 4.
