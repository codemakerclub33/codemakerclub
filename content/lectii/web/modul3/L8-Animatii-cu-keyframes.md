# LECȚIA 8 — Animații cu @keyframes
**Modulul 3 · CSS: Stil și culoare · 2 ore**  
**Code Maker Club · CSS Stylist**

> Tranziția din lecția trecută are nevoie de o atingere ca să pornească. O **animație** pornește **singură** și poate avea mai mulți pași: un buton care pulsează, o minge care sare, un titlu care apare încet, un cerc care se învârte. Le faci cu `@keyframes` și cu proprietatea `animation`.  
> Proiect: **„Pagina cu mișcare”** · folder: `Prenume_Nume_W3_L8` (ex. `Ana_Pop_W3_L8`)

---

## Obiectiv
La finalul orei știi să scrii o animație cu `@keyframes`, să o legi de un element cu `animation`, să alegi durata, întârzierea, repetarea și direcția, să faci o animație care pulsează, sare, apare lin sau se învârte, și să oprești mișcarea pentru cine nu o dorește (`prefers-reduced-motion`).  
**Minim:** un buton care pulsează (se mărește și se micșorează) la infinit.  
**Ținta orei (Complet):** + un titlu care apare lin, o minge care sare, un cerc care se învârte și o regulă care oprește animațiile la cererea utilizatorului.

## De ce contează
Animațiile atrag privirea spre un lucru important (un buton, un mesaj) și fac pagina plăcută. Folosite cu măsură, ele ajută. Folosite prea mult sau prea repede, obosesc și pot face rău unor oameni, de aceea învățăm și regulile de siguranță.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–35 | Prima animație: `@keyframes` și `animation` (**Exemplele 1–2**) |
| 35–55 | Proprietățile animației (**Exemplul 3**) |
| 55–85 | Pulsare, săritură, apariție, rotire (**Exemplele 4–7**) |
| 85–100 | Pauză la `:hover` · reguli de siguranță (**Exemplele 8–9**) |
| 100–115 | Proiect (**Exemplul 10**) |
| 115–120 | Recap și temă |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- `transition` face o schimbare lină între două stări, când pui mouse-ul;
- `transform` are `scale`, `rotate` și `translate`;
- `:nth-child` alege elemente după poziție.

**Încearcă tu (4 min)**  
- [ ] Creează folderul `Prenume_Nume_W3_L8` cu `index.html` (scheletul complet, legat la `stil.css`) și `stil.css`  
- [ ] Pune `* { box-sizing: border-box; }` prima în `stil.css`  
- [ ] Pune în `<body>` un `<h1>` și un `<button class="buton">Apasă aici</button>`  

> De aici înainte, exemplele arată ce scrii în `<body>` și, separat, ce scrii în `stil.css`.

---

## 2. Prima animație

### Exemplul 1 — `@keyframes` și `animation`

O animație are **două părți**: o **rețetă** (ce se schimbă) și o **pornire** (pe ce element rulează).

Rețeta:

```css
@keyframes aparitie {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

Pornirea:

```css
h1 {
  animation-name: aparitie;
  animation-duration: 2s;
}
```

- `@keyframes aparitie` dă un **nume** animației (alegi tu numele);  
- `from` este începutul: titlul este invizibil (`opacity: 0`);  
- `to` este sfârșitul: titlul este vizibil (`opacity: 1`);  
- `animation-name` leagă elementul de rețetă, iar `animation-duration` spune cât durează: 2 secunde.

Reîncarcă pagina: titlul apare încet. **Numele din `animation-name` trebuie să fie identic** cu cel din `@keyframes`.

### Exemplul 2 — Mai mulți pași, cu procente

Când ai mai mult de două stări, folosești **procente** în loc de `from` și `to`:

```css
@keyframes pulsare {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
```

`0%` este începutul, `50%` mijlocul, `100%` sfârșitul. Aici elementul se mărește până la mijloc, apoi revine. Când începutul și sfârșitul sunt la fel, le poți scrie împreună: `0%, 100% { … }`.

**Gata când:**  
- [ ] Titlul apare încet la încărcarea paginii  
- [ ] Numele din `animation-name` este identic cu cel din `@keyframes`  
- [ ] Ai scris o animație cu trei pași (`0%`, `50%`, `100%`)  

---

## 3. Proprietățile animației

### Exemplul 3 — Cum rulează animația

```css
.buton {
  animation-name: pulsare;
  animation-duration: 1.5s;
  animation-timing-function: ease-in-out;
  animation-delay: 0.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: both;
}
```

| Proprietate | Ce face |
|-------------|---------|
| `animation-name` | numele rețetei din `@keyframes` |
| `animation-duration` | cât durează **o rulare** (cu `s` sau `ms`) |
| `animation-timing-function` | felul mersului: `ease`, `linear`, `ease-in-out` |
| `animation-delay` | **așteptarea** înainte de pornire |
| `animation-iteration-count` | de câte ori se repetă (`3`, `infinite`) |
| `animation-direction` | `normal`, `reverse` sau `alternate` (înainte, apoi înapoi) |
| `animation-fill-mode` | ce se întâmplă înainte și după: `forwards` păstrează ultima stare, `both` păstrează și prima |

Există și o **scurtătură** care le scrie pe toate într-o singură linie, în această ordine: nume, durată, fel, întârziere, repetări, direcție, fill-mode:

```css
.buton {
  animation: pulsare 1.5s ease-in-out 0.5s infinite alternate both;
}
```

Primele două valori de timp sunt **durata** și apoi **întârzierea**. Nu trebuie să le scrii pe toate: `animation: pulsare 1.5s infinite;` este suficient.

**Încearcă tu (6 min)**  
- [ ] Fă butonul să pulseze la infinit cu `pulsare 1.5s infinite;`  
- [ ] Schimbă durata la `0.5s`, apoi la `3s` și compară  
- [ ] Adaugă `alternate` și vezi diferența  

---

## 4. Animații pe care le folosești des

### Exemplul 4 — Pulsare (buton care cere atenție)

```css
@keyframes pulsare {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.buton {
  animation: pulsare 2s ease-in-out infinite;
}
```

Un buton care pulsează încet spune „apasă aici”. Pulsarea trebuie să fie **blândă** (de la 1 la 1,1), nu bruscă.

### Exemplul 5 — Săritură (minge)

```html
<div class="teren">
  <div class="minge"></div>
</div>
```

```css
.teren {
  height: 150px;
}

.minge {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  background-color: orange;
  border-radius: 50%;
  animation: sare 1s ease-in-out infinite;
}

@keyframes sare {
  0%, 100% {
    transform: translateY(100px);
  }
  50% {
    transform: translateY(0);
  }
}
```

Mingea urcă și coboară la nesfârșit. Terenul are o înălțime ca mingea să aibă loc. Observă că folosim `transform`, nu `top`: `transform` și `opacity` se animează cel mai lin, pentru că browserul le calculează ușor.

### Exemplul 6 — Apariție la încărcare, una după alta

```html
<p class="intrare">Primul rând</p>
<p class="intrare">Al doilea rând</p>
<p class="intrare">Al treilea rând</p>
```

```css
@keyframes urca-lin {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.intrare {
  animation: urca-lin 0.8s ease both;
}

.intrare:nth-child(2) {
  animation-delay: 0.3s;
}

.intrare:nth-child(3) {
  animation-delay: 0.6s;
}
```

Fiecare rând apare cu o mică întârziere față de cel dinainte, ca într-un spectacol. `both` ține rândul **invizibil cât așteaptă** (starea de la `from`) și îl lasă vizibil la final. Fără `both`, rândurile ar sta vizibile în timpul așteptării și ar „sări” când pornește animația.

### Exemplul 7 — Rotire (cerc de încărcare)

```html
<div class="rotitor"></div>
```

```css
.rotitor {
  width: 50px;
  height: 50px;
  border: 6px solid lightgray;
  border-top-color: navy;
  border-radius: 50%;
  animation: roteste 1s linear infinite;
}

@keyframes roteste {
  to {
    transform: rotate(360deg);
  }
}
```

Un cerc cu o singură latură colorată, care se învârte, arată ca un indicator de încărcare. Folosim `linear`, ca viteza să fie egală, fără încetiniri. Observă că `from` lipsește: dacă îl omiți, animația pornește din starea normală a elementului.

**Gata când:**  
- [ ] Butonul pulsează blând la infinit  
- [ ] Mingea sare la nesfârșit în teren  
- [ ] Trei rânduri apar unul după altul, cu `animation-delay`  
- [ ] Cercul se învârte cu viteză egală  

---

## 5. Siguranță și control

### Exemplul 8 — Pauză la `:hover`

```css
.minge:hover {
  animation-play-state: paused;
}
```

`animation-play-state: paused;` oprește animația pe loc cât timp ții mouse-ul deasupra. Când pleci, își continuă mersul. E util când vrei ca un element care se mișcă să poată fi citit sau apăsat.

### Exemplul 9 — Respectă dorința utilizatorului

Unor oameni mișcarea de pe ecran le provoacă amețeală sau disconfort, așa că sistemul lor (telefon sau calculator) are o opțiune „redu mișcarea”. Pagina ta o poate respecta:

```css
@media (prefers-reduced-motion: reduce) {
  .buton,
  .minge,
  .intrare,
  .rotitor {
    animation: none;
  }
}
```

Regula din `@media (prefers-reduced-motion: reduce)` se aplică **numai** pentru cei care au cerut mișcare redusă. Pentru ei, elementele din listă stau liniștite. Pune regula **la sfârșitul** fișierului `stil.css`, ca să aibă ultimul cuvânt.

**Reguli de siguranță pentru animații**
1. **Fără licăriri rapide.** Un element nu trebuie să se aprindă și să se stingă de mai mult de 3 ori pe secundă: poate provoca disconfort sau chiar crize unor oameni.  
2. **Cu măsură.** Una sau două animații mici pe pagină sunt de ajuns. Dacă se mișcă totul, nu se mai înțelege nimic.  
3. **Infinit doar la ce are sens**: indicatori de încărcare, un buton important. Textul care se citește trebuie să stea nemișcat.  
4. **Respectă `prefers-reduced-motion`.**

**Încearcă tu (6 min)**  
- [ ] Oprește mingea la `:hover` cu `animation-play-state: paused;`  
- [ ] Adaugă regula `@media (prefers-reduced-motion: reduce)` la sfârșitul fișierului  
- [ ] Poți spune câte licăriri pe secundă sunt permise cel mult  

---

## 6. Proiectul

### Exemplul 10 — „Pagina cu mișcare”

Fișierul `index.html`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pagina cu mișcare</title>
  <link rel="stylesheet" href="stil.css">
</head>
<body>
  <main>
    <h1 class="titlu">Pagina cu mișcare</h1>

    <p class="intrare">Aici fiecare rând apare pe rând.</p>
    <p class="intrare">Animațiile pornesc singure, fără mouse.</p>
    <p class="intrare">Și se opresc dacă ai cerut mișcare redusă.</p>

    <button class="buton">Apasă aici</button>

    <div class="teren">
      <div class="minge"></div>
    </div>

    <div class="rotitor"></div>
  </main>
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
  text-align: center;
}

main {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

/* Titlul apare încet */
@keyframes aparitie {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.titlu {
  animation: aparitie 2s ease both;
}

/* Rândurile apar unul după altul */
@keyframes urca-lin {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.intrare {
  animation: urca-lin 0.8s ease both;
}

.intrare:nth-of-type(1) {
  animation-delay: 0.5s;
}

.intrare:nth-of-type(2) {
  animation-delay: 0.8s;
}

.intrare:nth-of-type(3) {
  animation-delay: 1.1s;
}

/* Butonul pulsează blând */
@keyframes pulsare {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.buton {
  background-color: navy;
  color: white;
  border: none;
  padding: 12px 28px;
  font-size: 1rem;
  border-radius: 10px;
  cursor: pointer;
  animation: pulsare 2s ease-in-out infinite;
}

/* Mingea sare */
@keyframes sare {
  0%, 100% {
    transform: translateY(100px);
  }
  50% {
    transform: translateY(0);
  }
}

.teren {
  height: 170px;
  margin-top: 20px;
}

.minge {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  background-color: orange;
  border-radius: 50%;
  animation: sare 1s ease-in-out infinite;
}

.minge:hover {
  animation-play-state: paused;
}

/* Cercul se învârte */
@keyframes roteste {
  to {
    transform: rotate(360deg);
  }
}

.rotitor {
  width: 50px;
  height: 50px;
  margin: 20px auto;
  border: 6px solid lightgray;
  border-top-color: navy;
  border-radius: 50%;
  animation: roteste 1s linear infinite;
}

/* Pentru cine a cerut mișcare redusă */
@media (prefers-reduced-motion: reduce) {
  .titlu,
  .intrare,
  .buton,
  .minge,
  .rotitor {
    animation: none;
  }
}
```

Observă că în această pagină rândurile sunt alese cu `:nth-of-type(…)`, pentru că titlul `<h1>` este și el frate cu paragrafele: `:nth-of-type(2)` numără **doar paragrafele**, nu și celelalte elemente.

Fă pagina cu **un subiect ales de tine**. Păstrează animațiile blânde.

**Gata când:**  
- [ ] Titlul apare lin, iar rândurile apar unul după altul  
- [ ] Butonul pulsează blând, mingea sare, cercul se învârte  
- [ ] Mingea se oprește la `:hover`  
- [ ] Pagina are regula `prefers-reduced-motion` la sfârșit  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Pagina cu mișcare” (obligatoriu)
Fă o pagină cu `index.html` și `stil.css`, cu:
- `* { box-sizing: border-box; }` prima în `stil.css`;
- **minimum 4 animații** diferite, fiecare cu propriul `@keyframes` (apariție, pulsare, săritură, rotire sau altele ale tale);
- cel puțin una cu **procente** (`0%`, `50%`, `100%`) și cel puțin una cu `from` și `to`;
- cel puțin o animație cu `animation-delay` și una cu `infinite`;
- o pauză la `:hover` pe un element care se mișcă;
- regula `@media (prefers-reduced-motion: reduce)` la sfârșit;
- cel puțin două comentarii în CSS.

### Exercițiul B — Ce face regula?
Spune ce se întâmplă: (1) `animation: pulsare 3s infinite;`; (2) `animation-iteration-count: 3;`; (3) `animation-direction: alternate;` la o animație care mută un element de la stânga la dreapta; (4) `animation-delay: 2s;` fără `animation-fill-mode`, la o animație care pornește cu `opacity: 0`.

### Exercițiul C — Scrie regula
Scrie în CSS: (1) o animație „clatină” care rotește un element de la `-5deg` la `5deg` și înapoi, la infinit, în 1 secundă; (2) o animație „culori” care schimbă `background-color` din roșu în galben și în verde, în 6 secunde; (3) o regulă care oprește animația `clatina` la `:hover`.

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
@keyframe pulsare {
  from { transform: scale(1); }
  to   { transform: scale(1.2); }
}

.buton {
  animation: pulseaza 2 infinite;
}
```

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: care este diferența dintre `transition` și `animation`? Câte licăriri pe secundă sunt permise cel mult? De ce respectăm `prefers-reduced-motion`?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W3_L8` are `index.html` și `stil.css`  
- [ ] Pagina are cel puțin 4 animații, o pauză la `:hover` și regula pentru mișcare redusă  
- [ ] Nicio animație nu licărește rapid  
- [ ] Ai răspuns la exercițiile B–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Fă un text care „bate” ca o inimă (`scale` rapid, dar blând, la 1,2s)  
- [ ] Fă un nor care traversează ecranul de la stânga la dreapta (`translateX`) la infinit, încet  
- [ ] Fă trei puncte care sar pe rând („se scrie un mesaj”), cu `animation-delay` diferit  
- [ ] Combină `transform` și `opacity` în aceeași animație pentru un efect de „plutire”  

---

## Greșeli frecvente
1. **Ai scris `@keyframe`** în loc de `@keyframes` — cu `s` la sfârșit.  
2. **Numele din `animation` nu este identic** cu cel din `@keyframes` — nu pornește nimic.  
3. **Ai scris durata fără unitate** (`2`) — corect este `2s`.  
4. **Ai uitat durata** — fără ea animația nu rulează, durata implicită este 0.  
5. **Animația „sare” la început** când ai `animation-delay` — adaugă `animation-fill-mode: both;` (sau `both` în scurtătură).  
6. **Ai pus `infinite` pe tot** — pagina obosește privirea.  
7. **Ai animat `top` sau `width`** — merge, dar este mai greu pentru calculator; preferă `transform` și `opacity`.  
8. **Ai uitat regula de mișcare redusă** sau ai pus regula la începutul fișierului, unde poate fi suprascrisă.  
9. **Licăriri prea rapide** — mai mult de 3 pe secundă pot provoca disconfort.  
10. **Ai scris două `transform` în același pas** — a doua înlocuiește prima; scrie ambele funcții într-un singur `transform`.  

---

## Recapitulare pe scurt
1. O animație are o rețetă (`@keyframes nume { … }`) și o pornire (`animation: nume durată …;`).  
2. `from` și `to` pentru două stări; procente pentru mai multe.  
3. `animation-delay`, `animation-iteration-count`, `animation-direction` și `animation-fill-mode` controlează rularea.  
4. Animează mai ales `transform` și `opacity`.  
5. `animation-play-state: paused;` oprește animația.  
6. Respectă siguranța: fără licăriri rapide, cu măsură și cu `prefers-reduced-motion`.

## Quiz scurt
- Care sunt cele două părți ale unei animații?  
- Ce face `animation-iteration-count: infinite;`?  
- Ce face `alternate`?  
- Ce proprietăți se animează cel mai ușor?  
- Câte licăriri pe secundă sunt permise?

## Temă
Fă o pagină „Povestea mea animată”: titlul apare lin, trei rânduri de text apar unul după altul, un personaj desenat din cutii sare, iar regula de mișcare redusă este la sfârșit. Salvează în `Prenume_Nume_W3_L8`.

## Ce urmează — Lecția 9
Învățăm să facem pagina **să arate bine pe telefon**: `viewport`, unități relative, `@media` și carduri care se așază singure.

---

## Răspunsuri pentru profesor
- **Exercițiul B:** (1) animația `pulsare` rulează 3 secunde și se repetă la infinit; (2) animația rulează de 3 ori și se oprește; (3) elementul merge de la stânga la dreapta, apoi înapoi de la dreapta la stânga, alternativ; (4) în cele 2 secunde de așteptare elementul este vizibil (starea normală), apoi dispare brusc și apare lin (de aceea trebuie `both`).  
- **Exercițiul C:** (1) `@keyframes clatina { 0%, 100% { transform: rotate(-5deg); } 50% { transform: rotate(5deg); } }` și `.element { animation: clatina 1s ease-in-out infinite; }`; (2) `@keyframes culori { 0% { background-color: red; } 50% { background-color: yellow; } 100% { background-color: green; } }` cu `animation: culori 6s infinite;`; (3) `.element:hover { animation-play-state: paused; }`.  
- **Exercițiul D:** (1) `@keyframe` trebuie `@keyframes`; (2) numele `pulseaza` nu coincide cu `pulsare`; (3) `2` trebuie `2s`.  
- **Exercițiul E:** `transition` are nevoie de o declanșare (hover, focus) și face o schimbare între două stări; `animation` pornește singură și poate avea mai mulți pași; cel mult 3 licăriri pe secundă; unii oameni sunt deranjați de mișcare, iar sistemul le permite să ceară mai puțină.  
- **Notă pentru profesor:** la Exercițiul B (4) este bine să rulați exemplul pe proiector, cu și fără `both`. Insistați asupra regulii de siguranță: elevii adoră efectele rapide, iar licărirea rapidă poate fi periculoasă pentru copiii sensibili. Dacă un elev are probleme cu mișcarea de pe ecran, lăsați elevul să dezactiveze animațiile din setările sistemului și arătați cum reacționează pagina lui.
