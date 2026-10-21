# LECȚIA 9 — Păsărica zburătoare
**Modulul 6 · Jocuri web · 2 ore**  
**Code Maker Club · Web Game Maker**

> Azi facem un joc nou, de la zero, folosind tot ce am învățat: **Păsărica zburătoare**. O păsărică galbenă cade din cauza gravitației, iar tu o ajuți să **bată din aripi** (Spațiu, săgeata în sus, clic sau buton). Trebuie să treacă prin **spațiile dintre țevi**. Fiecare țeavă depășită înseamnă un punct. Învățăm și o ciocnire nouă: între un **cerc** (păsărica) și un **dreptunghi** (țeava).  
> Proiect: **„Păsărica zburătoare”** · folder: `Prenume_Nume_W6_L9` (ex. `Ana_Pop_W6_L9`)

---

## Obiectiv
La finalul orei ai un joc complet: păsărica cade, urcă la fiecare bătaie de aripi, țevile vin spre ea cu spații la înălțimi diferite, scorul crește la fiecare țeavă depășită, iar la lovitură de țeavă sau de iarbă apare mesajul de final. Recordul se salvează.  
**Minim:** o păsărică care cade și urcă la apăsare, plus țevi desenate.  
**Ținta orei (Complet):** + țevi care vin cu spații la înălțimi diferite, dar mereu posibil de trecut, scor, record salvat, ciocnire corectă cerc–dreptunghi (cu o mică iertare), pauză după final, comenzi cu tastatură, mouse sau atingere și buton, o prezentare de un minut.

## De ce contează
Păsărica folosește aceleași idei ca Dino (stare, buclă, gravitație, listă de obiecte, scor), dar cu o ciocnire nouă. Dacă înțelegi că jocurile refolosesc aceleași **piese**, poți construi singur multe alte jocuri.

---

## Siguranță înainte de toate
- **Joc corect:** spațiile dintre țevi au aceeași mărime și nu sunt niciodată prea departe unul de altul pe verticală, deci se poate trece. Ciocnirea iartă câțiva pixeli.  
- După final, jocul **așteaptă o clipă** ca să nu reîncepi din greșeală.  
- Mesajele sunt prietenoase: „Păsărica a căzut! Scorul tău: 7.” și „Mai încerc”.  
- Aripa păsării se mișcă încet (puțin mai mult de 4 schimbări pe secundă) și este un detaliu mic. Nu avem schimbări mari și bruște de culoare pe tot ecranul.  
- Recordul se salvează doar ca **număr** în browser, fără date personale.  
- **Pauze:** după 20–30 de minute, ridică-te și mișcă-te.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare: ce am învățat la Dino |
| 10–20 | Pagina și stilul (**Exemplul 1**) |
| 20–35 | Setări și stare (**Exemplul 2**) |
| 35–55 | Desenăm păsărica și țevile (**Exemplul 3**) |
| 55–75 | Bătaia de aripi și țevile (**Exemplul 4**) |
| 75–95 | Ciocnirea cerc cu dreptunghi (**Exemplul 5**) |
| 95–112 | Mișcarea, sfârșitul, bucla, controlul (**Exemplele 6–7**) |
| 112–120 | Verificare, recap și temă |

---

## 1. Pagina și stilul

### Exemplul 1 — HTML și CSS

Creează folderul `Prenume_Nume_W6_L9` cu `index.html`, `stil.css` și `script.js`. În `index.html`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Păsărica zburătoare</title>
  <link rel="stylesheet" href="stil.css">
</head>
<body>
  <main class="joc">
    <h1>Păsărica zburătoare</h1>
    <p>Ajută păsărica să treacă prin spațiile dintre țevi. Apasă <strong>Spațiu</strong>, săgeata în sus, pânza sau butonul „Zboară”.</p>

    <div class="panou">
      <p>Scor: <strong id="scor">0</strong></p>
      <p>Record: <strong id="record">0</strong></p>
    </div>

    <canvas id="panza" width="360" height="540" role="img" aria-label="O păsărică galbenă zboară printre țevi verzi"></canvas>

    <p class="mesaj" id="mesaj" role="status">Apasă „Zboară” sau Spațiu ca să începi.</p>
    <button class="buton" id="zboara" type="button">Zboară</button>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

Pânza este **înaltă** (360 × 540), ca un joc pe telefon. În `stil.css`:

```css
:root {
  --fundal: #e1f5fe;
  --text: #0d3b66;
  --accent: #ef6c00;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color: var(--fundal);
  color: var(--text);
  text-align: center;
}

.joc {
  max-width: 420px;
  margin: 0 auto;
  padding: 1rem;
}

.panou {
  display: flex;
  justify-content: space-around;
  font-size: 1.2rem;
}

.panou p {
  margin: 0.3rem 0;
}

canvas {
  display: block;
  width: 100%;
  max-width: 360px;
  height: auto;
  margin: 0.5rem auto 1rem;
  border: 4px solid var(--text);
  border-radius: 12px;
  touch-action: manipulation;
}

.mesaj {
  min-height: 3em;
  font-size: 1.1rem;
  font-weight: bold;
}

.buton {
  min-width: 160px;
  min-height: 56px;
  padding: 12px 28px;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background-color: var(--accent);
  border: none;
  border-radius: 12px;
  cursor: pointer;
}
```

**Încearcă tu (10 min)**  
- [ ] Scrie `index.html` și `stil.css`  
- [ ] Deschide pagina: vezi panoul cu scor și record, o pânză și butonul „Zboară”

---

## 2. Setările și starea

### Exemplul 2 — Constante și variabile

În `script.js`:

```javascript
// ===== Pânza =====
const panza = document.querySelector("#panza");
const ctx = panza.getContext("2d");

const LATIME = panza.width;
const INALTIME = panza.height;
const SOL = INALTIME - 60; // de aici începe iarba
```
```javascript
// ===== Setări =====
const GRAVITATIE = 1500;       // pixeli pe secundă, pe secundă
const VITEZA_BATAIE = 420;     // cât de tare urcă la o bătaie de aripi
const VITEZA_TEVI = 160;       // cât de repede vin țevile (pixeli pe secundă)
const LATIME_TEAVA = 60;
const SPATIU = 160;            // înălțimea spațiului prin care trece păsărica
const DISTANTA_INTRE_TEVI = 230;
```
```javascript
// ===== Elemente din pagină =====
const elScor = document.querySelector("#scor");
const elRecord = document.querySelector("#record");
const mesaj = document.querySelector("#mesaj");
const butonZboara = document.querySelector("#zboara");
```
```javascript
// ===== Starea jocului =====
// stare poate fi: "asteptare", "joc" sau "terminat"
let stare = "asteptare";
let scor = 0;
let record = 0;
let tevi = [];
let distantaPanaLaTeava = 0;
let centruAnterior = 270;
let poateReincepe = true;
let timpAnterior = null;
let timpAripi = 0;

const pasare = {
  x: 90,
  y: 250,
  raza: 16,
  vy: 0
};

try {
  record = Number(localStorage.getItem("recordPasare")) || 0;
} catch (eroare) {
  record = 0;
}
elRecord.textContent = record;
```

- `SOL`: iarba începe cu 60 de pixeli deasupra marginii de jos.  
- `GRAVITATIE` și `VITEZA_BATAIE`: o bătaie de aripi ridică păsărica cam 59 de pixeli. Poți schimba valorile ca să simți diferența.  
- `VITEZA_TEVI`: țevile vin cu 160 de pixeli pe secundă.  
- `SPATIU = 160`: spațiul prin care trece păsărica. Cu cât este mai mic, cu atât jocul este mai greu.  
- `DISTANTA_INTRE_TEVI = 230`: cât de departe sunt două țevi una de alta, pe orizontală.  
- `stare`: `"asteptare"`, `"joc"` sau `"terminat"`, ca la Dino.  
- `tevi`: lista de țevi de pe ecran. `centruAnterior`: unde a fost spațiul ultimei țevi.  
- `timpAripi`: un cronometru mic, doar pentru mișcarea aripii.  
- `pasare` este un obiect cu poziția (`x`, `y`), mărimea (`raza`) și viteza `vy`.  
- Recordul se citește din `localStorage`, cu `try/catch`.

**Încearcă tu (15 min)**  
- [ ] Scrie secțiunile  
- [ ] În consolă: `SOL` trebuie să dea `480`

---

## 3. Desenăm

### Exemplul 3 — Țevile, păsărica și scena

```javascript
// ===== Desenarea =====
function deseneazaTeava(teava) {
  ctx.fillStyle = "#43a047";
  const josSpatiu = teava.centru + SPATIU / 2;
  const susSpatiu = teava.centru - SPATIU / 2;

  // Țeava de sus și cea de jos
  ctx.fillRect(teava.x, 0, LATIME_TEAVA, susSpatiu);
  ctx.fillRect(teava.x, josSpatiu, LATIME_TEAVA, SOL - josSpatiu);

  // Capetele mai late
  ctx.fillStyle = "#2e7d32";
  ctx.fillRect(teava.x - 4, susSpatiu - 20, LATIME_TEAVA + 8, 20);
  ctx.fillRect(teava.x - 4, josSpatiu, LATIME_TEAVA + 8, 20);
}

function deseneazaPasare() {
  // Corpul
  ctx.fillStyle = "#fdd835";
  ctx.beginPath();
  ctx.arc(pasare.x, pasare.y, pasare.raza, 0, Math.PI * 2);
  ctx.fill();

  // Aripa (se mișcă sus-jos)
  const aripaSus = Math.sin(timpAripi * 14) > 0;
  ctx.fillStyle = "#f9a825";
  ctx.beginPath();
  ctx.ellipse(pasare.x - 5, pasare.y + (aripaSus ? -3 : 4), 9, 5, 0, 0, Math.PI * 2);
  ctx.fill();

  // Ochiul
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(pasare.x + 6, pasare.y - 5, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(pasare.x + 8, pasare.y - 5, 2, 0, Math.PI * 2);
  ctx.fill();

  // Ciocul
  ctx.fillStyle = "#ef6c00";
  ctx.beginPath();
  ctx.moveTo(pasare.x + 14, pasare.y - 2);
  ctx.lineTo(pasare.x + 26, pasare.y + 3);
  ctx.lineTo(pasare.x + 14, pasare.y + 7);
  ctx.closePath();
  ctx.fill();
}

function deseneaza() {
  ctx.clearRect(0, 0, LATIME, INALTIME);

  // Cerul
  ctx.fillStyle = "#81d4fa";
  ctx.fillRect(0, 0, LATIME, SOL);

  for (const teava of tevi) {
    deseneazaTeava(teava);
  }

  // Iarba
  ctx.fillStyle = "#7cb342";
  ctx.fillRect(0, SOL, LATIME, INALTIME - SOL);
  ctx.fillStyle = "#558b2f";
  ctx.fillRect(0, SOL, LATIME, 5);

  deseneazaPasare();
}
```

- **Țeava** are două părți: de sus, de la marginea de sus până la spațiu, și de jos, de la spațiu până la iarbă. `teava.centru` este mijlocul spațiului, iar spațiul începe la `centru - SPATIU / 2` și se termină la `centru + SPATIU / 2`. Capetele sunt dreptunghiuri puțin mai late.  
- **Păsărica** este un cerc galben, o aripă (o elipsă), un ochi și un cioc. Aripa este fie sus, fie jos: `Math.sin(timpAripi * 14) > 0` este adevărat, apoi fals, apoi adevărat, pe măsură ce timpul trece. Așa pare că bate din aripi.  
- Cu `moveTo` și `lineTo` desenăm ciocul ca pe un **triunghi**: ducem „creionul” la primul punct, tragem linii spre celelalte puncte, apoi `closePath` închide forma și `fill` o umple.  
- **Ordinea** în `deseneaza`: cerul, țevile, iarba, păsărica. Iarba este desenată după țevi, ca să acopere capătul lor de jos.

**Încearcă tu (20 min)**  
- [ ] Scrie secțiunea  
- [ ] În consolă: `tevi.push({ x: 200, centru: 250, numarata: false })` apoi `deseneaza()`. Apare o țeavă cu spațiu?  
- [ ] Schimbă culoarea păsării  
- [ ] Adaugă un nor (un cerc alb) în cer

---

## 4. Bătaia de aripi și țevile

### Exemplul 4 — Comenzi și țevi noi

```javascript
// ===== Bătaia de aripi =====
function bateAripile() {
  if (stare === "asteptare" || (stare === "terminat" && poateReincepe)) {
    pornesteJocul();
  }

  if (stare === "joc") {
    pasare.vy = -VITEZA_BATAIE;
  }
}
```

- Dacă jocul așteaptă sau s-a terminat (și a trecut pauza), îl **pornim**.  
- Apoi, dacă jocul este în desfășurare, păsărica primește o viteză **în sus**: `-VITEZA_BATAIE` (minus, pentru că sus înseamnă `y` mai mic). Așa, **prima apăsare** pornește jocul și, în același timp, face prima bătaie de aripi, ca să nu cadă imediat.

Acum țevile:

```javascript
// ===== Țevile =====
function adaugaTeava() {
  // Spațiul nou nu e prea departe de cel de dinainte, ca să se poată trece
  let centru = centruAnterior + (Math.random() * 2 - 1) * 120;
  centru = Math.max(120, Math.min(SOL - 120, centru));
  centruAnterior = centru;

  tevi.push({ x: LATIME, centru: centru, numarata: false });
  distantaPanaLaTeava = DISTANTA_INTRE_TEVI;
}
```

- Centrul spațiului se mută față de cel de dinainte cu un număr între -120 și +120. Formula `Math.random() * 2 - 1` dă un număr între -1 și 1.  
- `Math.max(120, Math.min(SOL - 120, centru))` **limitează** centrul între 120 și 360, ca spațiul să nu iasă din pânză.  
- Fiecare țeavă pornește de la marginea din dreapta și are `numarata: false`: încă nu am dat punct pentru ea.

---

## 5. Ciocnirea cerc cu dreptunghi

### Exemplul 5 — Cel mai apropiat punct

Păsărica este un **cerc**, iar țeava un **dreptunghi**. Cum aflăm dacă se ating? Trucul este să căutăm **punctul din dreptunghi care este cel mai aproape de centrul cercului**:

1. Luăm centrul cercului `(cx, cy)`.  
2. **Limităm** `cx` între marginile dreptunghiului și `cy` între marginile lui: obținem punctul cel mai apropiat `(px, py)`.  
3. Măsurăm distanța dintre centru și acest punct. Dacă este mai mică decât raza, **se ating**.

Distanța se calculează cu teorema lui Pitagora: \( \text{distanța}^2 = dx^2 + dy^2 \). Ca să nu folosim radicalul, comparăm **pătratele**: `dx*dx + dy*dy < raza*raza`.

```javascript
// ===== Ciocnirea cerc cu dreptunghi =====
function cercLovesteDreptunghi(cx, cy, raza, rx, ry, rl, ri) {
  // Cel mai apropiat punct al dreptunghiului de centrul cercului
  const px = Math.max(rx, Math.min(cx, rx + rl));
  const py = Math.max(ry, Math.min(cy, ry + ri));
  const dx = cx - px;
  const dy = cy - py;
  return dx * dx + dy * dy < raza * raza;
}

function seCiocneste(teava) {
  const raza = pasare.raza - 3; // iertăm puțin
  const susSpatiu = teava.centru - SPATIU / 2;
  const josSpatiu = teava.centru + SPATIU / 2;

  return (
    cercLovesteDreptunghi(pasare.x, pasare.y, raza, teava.x, 0, LATIME_TEAVA, susSpatiu) ||
    cercLovesteDreptunghi(pasare.x, pasare.y, raza, teava.x, josSpatiu, LATIME_TEAVA, SOL - josSpatiu)
  );
}
```

- `Math.min(cx, rx + rl)` și apoi `Math.max(rx, ...)`: dacă `cx` este în stânga dreptunghiului, punctul este marginea stângă. Dacă este în dreapta, marginea dreaptă. Dacă este între ele, rămâne `cx`.  
- `seCiocneste` verifică **ambele** jumătăți ale țevii, cea de sus și cea de jos. Spațiul dintre ele nu are nimic.  
- `raza = pasare.raza - 3` iartă câțiva pixeli, ca jocul să fie corect.

**Teste (în consolă):**

| Apel | Rezultat |
|------|----------|
| `cercLovesteDreptunghi(100, 100, 10, 120, 90, 60, 20)` | `false` (cercul este la 20 de pixeli de țeavă) |
| `cercLovesteDreptunghi(115, 100, 10, 120, 90, 60, 20)` | `true` (la 5 pixeli, mai aproape decât raza) |
| `cercLovesteDreptunghi(112, 82, 10, 120, 90, 60, 20)` | `false` (colțul este la 11,3 pixeli: chiar dacă pătratul din jurul cercului atinge dreptunghiul, cercul nu îl atinge) |
| `cercLovesteDreptunghi(115, 85, 10, 120, 90, 60, 20)` | `true` (colțul este la 7,1 pixeli) |

Ultimele două arată de ce folosim cel mai apropiat punct, nu doar „pătrate care se ating”.

**Încearcă tu (20 min)**  
- [ ] Scrie funcțiile și rulează cele 4 teste din tabel  
- [ ] Desenează pe foaie cercul și dreptunghiul din al treilea test și găsește punctul cel mai apropiat

---

## 6. Mișcarea, începutul și sfârșitul

### Exemplul 6 — Se mișcă totul

```javascript
// ===== Mișcarea =====
function actualizeaza(dt) {
  pasare.vy = pasare.vy + GRAVITATIE * dt;
  pasare.y = pasare.y + pasare.vy * dt;

  // Tavanul
  if (pasare.y - pasare.raza < 0) {
    pasare.y = pasare.raza;
    pasare.vy = 0;
  }

  // Țevile
  distantaPanaLaTeava = distantaPanaLaTeava - VITEZA_TEVI * dt;
  if (distantaPanaLaTeava <= 0) {
    adaugaTeava();
  }

  for (const teava of tevi) {
    teava.x = teava.x - VITEZA_TEVI * dt;

    // Punctul: când țeava a trecut de păsărică
    if (!teava.numarata && teava.x + LATIME_TEAVA < pasare.x - pasare.raza) {
      teava.numarata = true;
      scor = scor + 1;
      elScor.textContent = scor;
    }
  }

  tevi = tevi.filter(function (teava) {
    return teava.x + LATIME_TEAVA > -10;
  });

  // Ciocnirile
  if (pasare.y + pasare.raza >= SOL) {
    terminaJocul();
    return;
  }

  for (const teava of tevi) {
    if (seCiocneste(teava)) {
      terminaJocul();
      return;
    }
  }
}
```

Pașii dintr-un cadru:
1. **Gravitația**: `vy` crește, iar `y` se schimbă.  
2. **Tavanul**: păsărica nu iese prin partea de sus.  
3. **Țevile noi**: când distanța rămasă ajunge la 0, apare o țeavă.  
4. **Mutăm** țevile spre stânga. **Punct**: când marginea din dreapta a țevii a trecut de marginea din stânga a păsării, adăugăm 1 la scor. `numarata` ne asigură că dăm punct **o singură dată** pentru fiecare țeavă.  
5. **Curățăm** lista: păstrăm țevile care nu au ieșit complet din ecran.  
6. **Ciocniri**: dacă păsărica atinge iarba sau o țeavă, jocul se termină.

```javascript
// ===== Începutul și sfârșitul =====
function pornesteJocul() {
  stare = "joc";
  scor = 0;
  tevi = [];
  distantaPanaLaTeava = 250;
  centruAnterior = 270;
  pasare.y = 250;
  pasare.vy = 0;
  elScor.textContent = 0;
  mesaj.textContent = "Zboară!";
  butonZboara.textContent = "Zboară";
}

function terminaJocul() {
  stare = "terminat";
  poateReincepe = false;

  let text = `Păsărica a căzut! Scorul tău: ${scor}.`;

  if (scor > record) {
    record = scor;
    elRecord.textContent = record;
    text = text + " Record nou!";
    try {
      localStorage.setItem("recordPasare", record);
    } catch (eroare) {
      // Dacă browserul nu permite salvarea, jocul merge oricum
    }
  }

  mesaj.textContent = text + " Apasă ca să încerci din nou.";
  butonZboara.textContent = "Mai încerc";

  // O mică pauză, ca să nu reîncepi din greșeală
  setTimeout(function () {
    poateReincepe = true;
  }, 600);
}
```

- `pornesteJocul` **resetează** totul: scorul, țevile, poziția păsării. Prima țeavă apare la 250 de pixeli distanță.  
- `terminaJocul`: starea `"terminat"`, blocăm reîncepere, salvăm recordul dacă este nou și afișăm un mesaj. După 600 de milisecunde permitem reîncepere.

---

## 7. Bucla și controlul

### Exemplul 7 — La fel ca la Dino

```javascript
// ===== Bucla jocului =====
function cadru(timp) {
  if (timpAnterior === null) {
    timpAnterior = timp;
  }

  let dt = (timp - timpAnterior) / 1000;
  timpAnterior = timp;

  if (dt > 0.05) {
    dt = 0.05;
  }

  timpAripi = timpAripi + dt;

  if (stare === "joc") {
    actualizeaza(dt);
  }

  deseneaza();
  requestAnimationFrame(cadru);
}
```

Singura diferență: creștem și `timpAripi`, ca aripa să bată **și în așteptare**.

```javascript
// ===== Controlul =====
butonZboara.addEventListener("click", bateAripile);
panza.addEventListener("pointerdown", bateAripile);

document.addEventListener("keydown", function (eveniment) {
  // Pe un buton, Spațiu și Enter funcționează deja ca un clic
  if (eveniment.target.tagName === "BUTTON" && eveniment.code !== "ArrowUp") {
    return;
  }

  if (eveniment.code === "Space" || eveniment.code === "ArrowUp") {
    eveniment.preventDefault();
    bateAripile();
  }
});

requestAnimationFrame(cadru);
```

La fel ca la Dino: butonul și pânza cheamă `bateAripile`, tastatura ascultă `Space` și `ArrowUp`, iar `preventDefault()` oprește derularea paginii.

**Încearcă tu (17 min, pentru Exemplele 6–7)**  
- [ ] Scrie secțiunile rămase  
- [ ] Prima apăsare pornește jocul și păsărica urcă?  
- [ ] Țevile vin spre păsărică cu spații la înălțimi diferite?  
- [ ] Scorul crește când treci printr-un spațiu?  
- [ ] La atingerea unei țevi sau a ierbii apare „Păsărica a căzut! Scorul tău: …”?  
- [ ] Apăsarea imediat după final nu pornește joc nou, dar după o clipă pornește?  
- [ ] Recordul rămâne după reîncărcarea paginii?

---

## 8. Verificarea

### Exemplul 8 — Lista de verificare

```text
□ Jocul așteaptă prima apăsare
□ Prima apăsare pornește jocul și păsărica urcă
□ Spațiu, săgeata în sus, pânza și butonul fac păsărica să urce
□ Pagina nu derulează la apăsarea Spațiului
□ Păsărica cade din cauza gravitației și nu iese prin tavan
□ Țevile vin cu spații la înălțimi diferite, dar mereu posibil de trecut
□ Scorul crește cu 1 pentru fiecare țeavă depășită (nu de două ori)
□ La atingerea unei țevi sau a ierbii jocul se termină
□ O atingere foarte mică la colț nu te învinge (iertarea de câțiva pixeli)
□ Apăsarea imediat după final nu pornește joc nou; după o clipă, da
□ Recordul se salvează și rămâne după reîncărcare
□ Nu apar erori în consolă
□ Merge pe telefon (DevTools 375 px)
```

**Gata când:**  
- [ ] Toate punctele sunt bifate  
- [ ] Ai făcut o copie de siguranță a folderului

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Păsărica zburătoare” (obligatoriu)
Folderul `Prenume_Nume_W6_L9` are `index.html`, `stil.css` și `script.js`, iar jocul merge după lista din Exemplul 8.

### Exercițiul B — Îl faci al tău
Schimbă: culorile (păsărică, țevi, cer), mesajele, `SPATIU` (160, apoi 120, apoi 200: cum se schimbă jocul?), `VITEZA_TEVI`, `GRAVITATIE` și `VITEZA_BATAIE`. Poți schimba păsărica în alt animal. Notează ce ai observat.

### Exercițiul C — Găsește greșelile
Găsește **3 greșeli** în codurile de mai jos și repară greșelile:

```javascript
// 1) Cel mai apropiat punct
const px = Math.min(rx, Math.max(cx, rx + rl));
const py = Math.min(ry, Math.max(cy, ry + ri));

// 2) Compararea distanței
return dx * dx + dy * dy < raza;

// 3) Bătaia de aripi
pasare.vy = VITEZA_BATAIE;
```

### Exercițiul D — Explică cu cuvintele tale
Pe foaie: cum găsim punctul din dreptunghi cel mai apropiat de centrul cercului? De ce comparăm pătratele distanțelor? De ce are fiecare țeavă `numarata`? De ce `-VITEZA_BATAIE` are minus?

**Gata când:**  
- [ ] Jocul merge și lista este bifată  
- [ ] Ai răspuns la exercițiile B–D

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Arată o **medalie** în mesaj: bronz (5 puncte), argint (10), aur (20)  
- [ ] Fă păsărica să se **încline** în sus și în jos după viteză (`ctx.rotate`)  
- [ ] Adaugă **monede** între țevi care dau 2 puncte  
- [ ] Fă spațiul dintre țevi să se micșoreze foarte puțin după fiecare 10 puncte (dar niciodată sub 120)

---

## Greșeli frecvente
1. **Uitat minusul la bătaia de aripi**: păsărica se scufundă în loc să urce.  
2. **`Math.min` și `Math.max` în ordine greșită**: punctul cel mai apropiat iese greșit.  
3. **Uitat `raza * raza`**: ciocnirea nu mai are sens.  
4. **Uitat `numarata`**: scorul crește de zeci de ori pentru aceeași țeavă.  
5. **Spații care se schimbă prea mult de la o țeavă la alta**: jocul devine imposibil. De aceea limităm centrul și îl mutăm doar puțin față de cel anterior.  
6. **Uitat să resetăm lista `tevi`**: noul joc începe cu țevile vechi.

## Recapitulare pe scurt
1. Păsărica: gravitație, o bătaie dă viteză în sus.  
2. Țevile sunt o listă de obiecte: adăugăm, mutăm, curățăm.  
3. Ciocnire cerc–dreptunghi: punctul cel mai apropiat și distanța comparată cu raza.  
4. Un punct se dă o singură dată pentru fiecare țeavă (`numarata`).  
5. Un joc corect iartă câțiva pixeli și se poate câștiga.  
6. Jocurile refolosesc aceleași piese: stare, buclă, gravitație, ciocnire, scor.

## Quiz scurt
1. Cum se alege punctul din dreptunghi cel mai apropiat de centrul cercului?  
2. De ce comparăm `dx*dx + dy*dy` cu `raza*raza`?  
3. Ce se întâmplă dacă scoatem `numarata`?  
4. Care sunt diferențele dintre Dino și Păsărică?

## Temă
Dă jocul unui prieten sau unui membru al familiei și vezi cât scor face. Întreabă ce ar schimba. Ajustează spațiul dintre țevi ca jocul să fie potrivit și salvează în `Prenume_Nume_W6_L9`.

## Ce urmează — Lecția 10
Proiectul final al modulului: **Colecția mea de jocuri**. O pagină principală cu cartonașe către jocurile tale și recordurile lor.

---

## Răspunsuri
- **Quiz scurt:** (1) limităm `cx` între marginile stângă și dreaptă ale dreptunghiului și `cy` între marginile de sus și de jos: `Math.max(rx, Math.min(cx, rx + rl))` și `Math.max(ry, Math.min(cy, ry + ri))`; (2) ca să nu folosim radicalul: comparăm pătratele, ceea ce este mai simplu; (3) scorul ar crește de zeci de ori pentru aceeași țeavă; (4) la Păsărică ciocnirea este cerc cu dreptunghi (la Dino, dreptunghi cu dreptunghi), păsărica poate bate din aripi oricând (Dino sare doar de pe sol), iar jocul se termină și când atinge iarba.  
- **Dacă ritmul clasei este lent:** dați elevilor HTML-ul și CSS-ul gata; formula cu Pitagora pentru ciocnire se dă ca fragment, iar copiii o testează cu tabelul.  
- **Exercițiul A:** pentru evaluare folosiți lista din Exemplul 8. Minimul: păsărica care cade și urcă, plus țevile; ținta: restul listei.  
- **Exercițiul B:** nu are răspuns unic; verificați că elevul poate explica ce a schimbat și cum a afectat jocul.  
- **Exercițiul C:** (1) ordinea trebuie să fie `Math.max(rx, Math.min(cx, rx + rl))` și `Math.max(ry, Math.min(cy, ry + ri))`; (2) trebuie `< raza * raza` (comparăm pătratele); (3) lipsește minusul: `pasare.vy = -VITEZA_BATAIE`.  
- **Exercițiul D:** limităm `cx` și `cy` între marginile dreptunghiului; evităm radicalul (mai simplu și mai rapid) comparând pătratele; `numarata` dă punctul o singură dată; sus înseamnă `y` mai mic, deci viteza este negativă.  
- **Notă pentru profesor:** o apăsare din timpul așteptării pornește jocul și face prima bătaie de aripi în `bateAripile`. Dacă elevii cred că „jocul e imposibil”, verificați că `SPATIU` este cel puțin 140 și că țevile nu au spații la înălțimi foarte diferite una după alta. Cu valorile din lecție, înălțimea unei bătăi de aripi este 420² / (2 × 1500) ≈ 59 de pixeli, iar centrul spațiului se mută cel mult 120 de pixeli între două țevi, deci jocul este posibil.
