# LECȚIA 6 — Canvas: desenăm și mișcăm o minge
**Modulul 6 · Jocuri web · 2 ore**  
**Code Maker Club · Web Game Maker**

> Până acum jocurile noastre au folosit butoane și casete. Pentru jocuri cu mișcare (dinozaurul, păsărica) avem nevoie de ceva nou: **canvas**, o **pânză** pe care desenezi cu JavaScript tot ce vrei, cerc, dreptunghi, cer, iarbă, și pe care poți mișca desenele **60 de ori pe secundă**. Azi desenăm o scenă și facem o **minge** care cade, sare și se lovește de pereți. Aceleași idei le folosim în lecțiile 7, 8 și 9.  
> Proiect: **„Mingea care sare”** · folder: `Prenume_Nume_W6_L6` (ex. `Ana_Pop_W6_L6`)

---

## Obiectiv
La finalul orei ai o pânză cu cer, iarbă și soare, iar o minge colorată cade, sare tot mai puțin de pe iarbă, se lovește de pereți și poate fi mutată cu un clic. Ai trei butoane: pauză, „dă mingea sus” și schimbare de culoare.  
**Minim:** o pânză cu o scenă desenată (cer, iarbă, soare) și o minge desenată pe ea.  
**Ținta orei (Complet):** + mingea cade cu gravitație, sare pe iarbă și pierde din viteză, se lovește de pereți, mișcarea nu depinde de calculator (folosim timpul dintre cadre), butoane de pauză, de săritură și de culoare, mutarea mingii cu un clic pe pânză, respectarea preferinței „mișcare redusă”, o prezentare de un minut.

## De ce contează
Un joc cu mișcare este, la bază, o **buclă**: calculează unde trebuie să fie fiecare lucru, șterge pânza, desenează totul din nou, repetă. Dacă înțelegi bucla asta și cum se calculează o cădere, poți face aproape orice joc cu mișcare.

---

## Siguranță înainte de toate
- **Mișcare:** mingea se mișcă lin, fără licăriri sau schimbări bruște de culoare. Culoarea se schimbă **doar când apeși un buton**.  
- Dacă cineva a cerut în calculator „mișcare redusă”, animația **pornește oprită** și o pornești tu cu „Continuă”.  
- Pânza are o **descriere** (`aria-label`) și există butoane normale pentru cine nu folosește mouse-ul.  
- **Pauze:** după 20–30 de minute, ridică-te și mișcă-te.  
- Nu cerem și nu salvăm date personale.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Ce este canvas și cum numărăm pe el (**Exemplul 1**) |
| 10–25 | Pagina și stilul (**Exemplul 2**) |
| 25–40 | Pânza și fizica (**Exemplul 3**) |
| 40–50 | Mingea și starea (**Exemplul 4**) |
| 50–70 | Desenăm scena și mingea (**Exemplul 5**) |
| 70–90 | Mișcarea și bucla (**Exemplele 6–7**) |
| 90–105 | Butoanele și clicul pe pânză (**Exemplul 8**) |
| 105–120 | Verificare, recap și temă |

---

## 1. Ce este canvas

### Exemplul 1 — O pânză cu coordonate

`<canvas>` este un dreptunghi gol în pagină. Cu JavaScript îl „deschizi” ca să desenezi pe el. Poziția pe pânză se măsoară în **pixeli**, dar atenție:

```text
(0, 0) este în COLȚUL DE SUS-STÂNGA
x crește spre DREAPTA
y crește în JOS   (nu în sus, ca la matematică!)
```

De exemplu, pe o pânză de 600 × 360:

```text
(0, 0)       colțul de sus-stânga
(600, 0)     colțul de sus-dreapta
(0, 360)     colțul de jos-stânga
(300, 180)   mijlocul
```

Ca să desenezi, folosești un „creion” numit **context**: `ctx`. Cele mai folosite comenzi:

```text
ctx.fillStyle = "red";            alege culoarea de umplere
ctx.fillRect(x, y, lat, inalt);   desenează un dreptunghi umplut
ctx.beginPath();                  începe o formă nouă
ctx.arc(x, y, raza, 0, Math.PI * 2);   un cerc cu centrul (x, y)
ctx.fill();                       umple forma
ctx.stroke();                     desenează conturul
ctx.clearRect(x, y, lat, inalt);  șterge o zonă
```

Unghiurile din `arc` se măsoară în **radiani**: `Math.PI * 2` este cercul întreg.

**Încearcă tu (10 min)**  
- [ ] Desenează pe foaie o pânză de 600 × 360 și notează unde ar fi un soare la (520, 60)  
- [ ] Gândește-te: dacă y crește în jos, mingea cade când y **crește** sau **scade**?  
- [ ] Creează folderul `Prenume_Nume_W6_L6` cu `index.html`, `stil.css` și `script.js`

---

## 2. Pagina și stilul

### Exemplul 2 — HTML și CSS

În `index.html`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mingea care sare</title>
  <link rel="stylesheet" href="stil.css">
</head>
<body>
  <main class="joc">
    <h1>Mingea care sare</h1>
    <p>Apasă pe pânză ca să muți mingea. Folosește butoanele ca să o dai în sus sau să o oprești.</p>

    <canvas id="panza" width="600" height="360" role="img" aria-label="O minge roșie care sare pe iarbă, sub un cer albastru"></canvas>

    <div class="butoane">
      <button class="buton" id="pauza" type="button">Pauză</button>
      <button class="buton" id="sus" type="button">Dă mingea sus</button>
      <button class="buton" id="culoare" type="button">Altă culoare</button>
    </div>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

- `<canvas id="panza" width="600" height="360">`: `width` și `height` sunt mărimea **desenului** (în pixeli).  
- `role="img"` și `aria-label`: descriu pânza pentru cititorul de ecran, pentru că nu are text în ea.

În `stil.css`:

```css
:root {
  --fundal: #f1f8e9;
  --text: #1b2a1b;
  --accent: #2e7d32;
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
  max-width: 640px;
  margin: 0 auto;
  padding: 1rem;
}

canvas {
  display: block;
  width: 100%;
  height: auto;
  margin: 1rem 0;
  border: 4px solid var(--accent);
  border-radius: 12px;
  touch-action: manipulation;
}

.butoane {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.buton {
  min-height: 48px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: var(--accent);
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
```

`width: 100%; height: auto;` face pânza să se micșoreze pe telefon, păstrând proporțiile. **Desenul rămâne de 600 × 360**; doar afișarea se mărește sau se micșorează.

**Încearcă tu (15 min)**  
- [ ] Scrie `index.html` și `stil.css`  
- [ ] Deschide pagina: vezi o pânză goală (transparentă) cu chenar și 3 butoane

---

## 3. Pânza și fizica

### Exemplul 3 — Contextul și constantele

În `script.js`:

```javascript
// ===== Pânza (canvas) =====
const panza = document.querySelector("#panza");
const ctx = panza.getContext("2d");

const LATIME = panza.width;
const INALTIME = panza.height;
const INALTIME_IARBA = 40;
const PODEA = INALTIME - INALTIME_IARBA;
```
```javascript
// ===== Fizica =====
const GRAVITATIE = 900;      // cât de repede ia viteză în jos (pixeli pe secundă, pe secundă)
const PIERDERE_LA_SALT = 0.8; // la fiecare săritură, mingea păstrează 80% din viteză
```

- `getContext("2d")` ne dă creionul pentru desen 2D.  
- Iarba are 40 de pixeli la bază, deci **podeaua** (`PODEA`) este la `INALTIME - 40`, adică 320.  
- `GRAVITATIE`: cât de repede ia viteză mingea în jos. 900 înseamnă că în fiecare secundă viteza în jos crește cu 900 de pixeli pe secundă.  
- `PIERDERE_LA_SALT`: la fiecare săritură, mingea păstrează 80% din viteză, deci sare tot mai puțin.

**Încearcă tu (5 min)**  
- [ ] Scrie cele două secțiuni  
- [ ] În consolă: `PODEA` trebuie să dea `320`

---

## 4. Mingea și starea

### Exemplul 4 — Un obiect pentru minge

```javascript
// ===== Mingea =====
const minge = {
  x: 100,
  y: 60,
  raza: 22,
  vx: 180,   // viteza pe orizontală (pixeli pe secundă)
  vy: 0,     // viteza pe verticală
  culoare: "#e63946"
};

const culori = ["#e63946", "#1d78d8", "#f9a825", "#8e44ad", "#2a9d8f"];
let numarCuloare = 0;
```
```javascript
// ===== Starea animației =====
const preferaFaraMiscare = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let ruleaza = !preferaFaraMiscare;
let timpAnterior = null;
```

Mingea este un **obiect** cu tot ce o descrie: poziția (`x`, `y`), mărimea (`raza`), viteza pe orizontală (`vx`) și pe verticală (`vy`), culoarea. Viteza se măsoară în **pixeli pe secundă**.

Starea animației: `ruleaza` (mișcăm sau nu), `timpAnterior` (când a fost cadrul trecut).

Linia cu `matchMedia("(prefers-reduced-motion: reduce)")` verifică dacă omul a cerut „mișcare redusă”. Dacă da, `ruleaza` începe de la `false`: animația stă pe loc până o pornești tu.

**Încearcă tu (5 min)**  
- [ ] Scrie secțiunile

---

## 5. Desenăm

### Exemplul 5 — Fundalul și mingea

```javascript
// ===== Desenarea =====
function deseneazaFundal() {
  // Cerul
  ctx.fillStyle = "#87ceeb";
  ctx.fillRect(0, 0, LATIME, PODEA);

  // Iarba
  ctx.fillStyle = "#4caf50";
  ctx.fillRect(0, PODEA, LATIME, INALTIME_IARBA);

  // Soarele
  ctx.fillStyle = "#ffd54f";
  ctx.beginPath();
  ctx.arc(520, 60, 32, 0, Math.PI * 2);
  ctx.fill();
}

function deseneazaMinge() {
  ctx.fillStyle = minge.culoare;
  ctx.beginPath();
  ctx.arc(minge.x, minge.y, minge.raza, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "white";
  ctx.lineWidth = 3;
  ctx.stroke();
}

function deseneaza() {
  ctx.clearRect(0, 0, LATIME, INALTIME);
  deseneazaFundal();
  deseneazaMinge();
}
```

- `deseneazaFundal`: cerul (un dreptunghi albastru până la podea), iarba (un dreptunghi verde), soarele (un cerc galben).  
- `deseneazaMinge`: un cerc plin, cu un contur alb gros.  
- `deseneaza`: **șterge** tot (`clearRect`), apoi desenează fundalul și mingea. Ordinea contează: ce desenezi mai târziu apare **deasupra**. Dacă ai desena mingea înainte de fundal, ai vedea doar fundalul.

**Încearcă tu (15 min)**  
- [ ] Scrie secțiunea  
- [ ] În consolă: `deseneaza()` (și Enter). Apare scena cu mingea sus-stânga?  
- [ ] Schimbă `minge.x = 300` în consolă, apoi `deseneaza()`: mingea s-a mutat?  
- [ ] Desenează în `deseneazaFundal` un nor (un cerc alb sau 3 cercuri lipite) sau o floare

---

## 6. Mișcarea

### Exemplul 6 — Gravitația, pereții și iarba

```javascript
// ===== Mișcarea =====
// dt = câte secunde au trecut de la cadrul anterior
function actualizeaza(dt) {
  minge.vy = minge.vy + GRAVITATIE * dt;
  minge.x = minge.x + minge.vx * dt;
  minge.y = minge.y + minge.vy * dt;

  // Pereții din stânga și din dreapta
  if (minge.x - minge.raza < 0) {
    minge.x = minge.raza;
    minge.vx = -minge.vx;
  }
  if (minge.x + minge.raza > LATIME) {
    minge.x = LATIME - minge.raza;
    minge.vx = -minge.vx;
  }

  // Iarba (podeaua)
  if (minge.y + minge.raza > PODEA) {
    minge.y = PODEA - minge.raza;
    minge.vy = -minge.vy * PIERDERE_LA_SALT;

    if (Math.abs(minge.vy) < 40) {
      minge.vy = 0;
    }
  }

  // Tavanul
  if (minge.y - minge.raza < 0) {
    minge.y = minge.raza;
    minge.vy = -minge.vy;
  }
}
```

Pe bucăți (`dt` înseamnă „câte secunde au trecut de la cadrul anterior”, de obicei 0,016):
1. `minge.vy = minge.vy + GRAVITATIE * dt`: **gravitația** mărește viteza în jos. Ca să aflăm cât, înmulțim cu `dt`.  
2. `minge.x = minge.x + minge.vx * dt` și la fel pentru `y`: **poziția nouă** = poziția veche + viteza × timpul.  
3. **Pereții:** dacă mingea iese din stânga (`x - raza < 0`), o punem exact la margine și **inversăm viteza** pe orizontală (`vx = -vx`): pare că a lovit peretele și s-a întors. La fel în dreapta.  
4. **Iarba:** dacă mingea ajunge la podea, o punem pe podea și inversăm viteza pe verticală, dar o și **micșorăm** (`* PIERDERE_LA_SALT`), ca să sară mai puțin. Dacă viteza devine foarte mică (`< 40`), o punem pe 0: altfel mingea ar tremura la nesfârșit pe iarbă.  
5. **Tavanul:** la fel, ca mingea să nu iasă prin partea de sus.

De ce înmulțim cu `dt`? Un calculator rapid desenează 144 de cadre pe secundă, unul mai lent 30. Dacă mingea s-ar mișca 3 pixeli **pe cadru**, ar fi mai rapidă pe calculatorul rapid. Cu **pixeli pe secundă înmulțiți cu `dt`**, mingea se mișcă la fel pe orice calculator.

---

## 7. Bucla

### Exemplul 7 — `requestAnimationFrame`

```javascript
// ===== Bucla jocului =====
function cadru(timp) {
  if (timpAnterior === null) {
    timpAnterior = timp;
  }

  let dt = (timp - timpAnterior) / 1000;
  timpAnterior = timp;

  // Dacă fila a stat ascunsă, nu lăsăm mingea să "sară" prea departe
  if (dt > 0.05) {
    dt = 0.05;
  }

  if (ruleaza) {
    actualizeaza(dt);
  }

  deseneaza();
  requestAnimationFrame(cadru);
}
```

- `requestAnimationFrame(cadru)` îi spune browserului: „apelează `cadru` înainte să desenezi următorul cadru pe ecran”. Browserul îi dă ca parametru **timpul** în milisecunde (`timp`).  
- La **fiecare cadru**: calculăm `dt`, actualizăm mingea (dacă `ruleaza`), desenăm și cerem **următorul** cadru. Așa se formează o buclă.  
- `dt > 0.05`: dacă fila a stat ascunsă o vreme, următorul `dt` ar fi uriaș și mingea ar „zbura”. Limităm pasul la 0,05 secunde.  
- La prima rulare `timpAnterior` este `null`, așa că îl punem egal cu `timp` și primul `dt` este 0.

Atenție: scrii `requestAnimationFrame(cadru)` **fără paranteze** (dai funcția, nu o apelezi). Cu paranteze, `cadru()` s-ar apela imediat, iar apoi s-ar apela din nou și din nou, fără sfârșit, până când browserul oprește totul cu o eroare.

---

## 8. Butoanele și clicul

### Exemplul 8 — Control

```javascript
// ===== Butoanele =====
const butonPauza = document.querySelector("#pauza");
const butonSus = document.querySelector("#sus");
const butonCuloare = document.querySelector("#culoare");

function scrieTextPauza() {
  butonPauza.textContent = ruleaza ? "Pauză" : "Continuă";
}

butonPauza.addEventListener("click", function () {
  ruleaza = !ruleaza;
  scrieTextPauza();
});

butonSus.addEventListener("click", function () {
  minge.vy = -650;
  if (!ruleaza) {
    ruleaza = true;
    scrieTextPauza();
  }
});

butonCuloare.addEventListener("click", function () {
  numarCuloare = (numarCuloare + 1) % culori.length;
  minge.culoare = culori[numarCuloare];
});
```

- Butonul de pauză comută `ruleaza` între `true` și `false`.  
- „Dă mingea sus” pune viteza `vy` la -650 (minus înseamnă în sus) și, dacă animația era oprită, o pornește.  
- „Altă culoare” trece la următoarea culoare din listă. `%` (restul împărțirii) face ca după ultima culoare să revenim la prima.

Acum clicul pe pânză:

```javascript
// ===== Apăsarea pe pânză: mutăm mingea acolo =====
panza.addEventListener("click", function (eveniment) {
  const dreptunghi = panza.getBoundingClientRect();
  const scaraX = LATIME / dreptunghi.width;
  const scaraY = INALTIME / dreptunghi.height;

  minge.x = (eveniment.clientX - dreptunghi.left) * scaraX;
  minge.y = (eveniment.clientY - dreptunghi.top) * scaraY;
  minge.vy = 0;
});
```

Pânza se poate afișa mai mică decât desenul (pe telefon), deci coordonatele clicului **nu** se potrivesc direct cu desenul. `getBoundingClientRect()` ne dă poziția și mărimea afișată a pânzei, iar `scaraX` și `scaraY` convertesc din „pixeli de pe ecran” în „pixeli de desen”. Apoi punem mingea acolo și o oprim din cădere (`vy = 0`).

În final pornim totul:

```javascript
// ===== Start =====
scrieTextPauza();
requestAnimationFrame(cadru);
```

**Încearcă tu (30 min, pentru Exemplele 6–8)**  
- [ ] Scrie secțiunile rămase  
- [ ] Mingea cade, sare tot mai puțin și se rostogolește spre pereți?  
- [ ] „Pauză” o oprește, iar textul butonului devine „Continuă”?  
- [ ] „Dă mingea sus” o aruncă în sus?  
- [ ] „Altă culoare” schimbă culoarea?  
- [ ] Un clic pe pânză mută mingea acolo?  
- [ ] Micșorează fereastra: clicul merge corect și pe pânza micșorată?

---

## 9. Verificarea

### Exemplul 9 — Lista de verificare

```text
□ Se văd cerul, iarba, soarele și mingea
□ Mingea cade și sare tot mai puțin, apoi rulează pe iarbă (nu tremură)
□ Mingea se lovește de pereții din stânga și din dreapta și se întoarce
□ „Pauză” oprește mingea, „Continuă” o pornește
□ „Dă mingea sus” o aruncă în sus
□ „Altă culoare” schimbă culoarea mingii
□ Un clic pe pânză mută mingea (și pe o pânză micșorată)
□ Viteza este aceeași pe calculatoare diferite (se folosește dt)
□ Cu „mișcare redusă” animația pornește oprită
□ Culorile nu licăresc, nu se schimbă singure
□ Nu apar erori în consolă
□ Merge pe telefon (DevTools 375 px)
```

**Gata când:**  
- [ ] Toate punctele sunt bifate  
- [ ] Ai făcut o copie de siguranță a folderului

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Mingea care sare” (obligatoriu)
Folderul `Prenume_Nume_W6_L6` are `index.html`, `stil.css` și `script.js`, iar mingea merge după lista din Exemplul 9.

### Exercițiul B — Îl faci al tău
Schimbă: mărimea și culorile mingii, viteza `vx`, gravitația (50% din cât este: cum sare?), `PIERDERE_LA_SALT` (1 înseamnă că nu pierde viteză), scena (adaugă un nor, o casă, un copac) și textele. Notează ce ai observat.

### Exercițiul C — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```javascript
function actualizeaza(dt) {
  minge.vy = minge.vy + GRAVITATIE;
  minge.y = minge.y + minge.vy * dt;

  if (minge.y + minge.raza > PODEA) {
    minge.y = PODEA - minge.raza;
    minge.vy = minge.vy * PIERDERE_LA_SALT;
  }
}

function cadru(timp) {
  actualizeaza(0.016);
  deseneaza();
  requestAnimationFrame(cadru());
}
```

### Exercițiul D — Explică cu cuvintele tale
Pe foaie: unde este punctul (0, 0) pe pânză și încotro crește y? De ce înmulțim vitezele cu `dt`? Ce face `clearRect` la începutul fiecărui cadru?

**Gata când:**  
- [ ] Mingea merge și lista este bifată  
- [ ] Ai răspuns la exercițiile B–D

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Adaugă o **umbră** sub minge: o elipsă gri pe iarbă, care se micșorează când mingea este sus (`ctx.ellipse`)  
- [ ] Fă mingea să lase o **dâră** de cercuri mici (păstrează ultimele poziții într-o listă)  
- [ ] Adaugă 3 mingi diferite, într-o listă de obiecte, desenate cu o buclă  
- [ ] Arată sub pânză câte ori a sărit mingea

---

## Greșeli frecvente
1. **`requestAnimationFrame(cadru())`** cu paranteze: bucla nu merge, iar în consolă apare o eroare (`Maximum call stack size exceeded`).  
2. **Uitat `* dt`**: mingea se mișcă mult prea repede sau diferit pe calculatoare diferite.  
3. **Semn greșit la săritură**: `vy * PIERDERE` fără minus nu inversează direcția.  
4. **Uitat `clearRect`**: mingea lasă o dâră pe tot ecranul (dacă fundalul nu acoperă tot).  
5. **y în jos**: crezi că -650 este în jos; de fapt este în sus.  
6. **Mărimea pânzei schimbată din CSS** și clicul nepotrivit: de aceea convertim coordonatele.

## Recapitulare pe scurt
1. Pe canvas, (0, 0) este sus-stânga, iar y crește în jos.  
2. Desenăm cu `ctx`: `fillRect`, `arc`, `fill`, `stroke`.  
3. Bucla de joc: calculează, șterge, desenează, cere cadrul următor.  
4. Poziție nouă = poziție veche + viteză × `dt`.  
5. Gravitația mărește viteza în jos; la lovitură, viteza se inversează și se micșorează.  
6. Respectăm „mișcarea redusă”.

## Quiz scurt
1. Ce înseamnă `ctx.arc(100, 50, 20, 0, Math.PI * 2)`?  
2. Ce este `dt` și de ce îl folosim?  
3. De ce nu scriem paranteze la `requestAnimationFrame(cadru)`?  
4. De ce punem mingea exact pe podea când o lovește?

## Temă
Arată animația unui membru al familiei și întreabă ce s-ar putea adăuga. Încearcă o idee (alt fundal, o a doua minge, o dâră). Salvează varianta în `Prenume_Nume_W6_L6`.

## Ce urmează — Lecția 7
Facem **Dino în deșert**, partea I: un dinozaur desenat de noi, care aleargă și **sare** când apeși Spațiu. Folosim exact ideile de azi: bucla, gravitația și `dt`.

---

## Răspunsuri
- **Quiz scurt:** (1) un cerc cu centrul în punctul (100, 50), cu raza 20, desenat de la unghiul 0 până la cercul întreg; (2) `dt` este timpul în secunde de la cadrul anterior; înmulțim vitezele cu el ca mingea să se miște la fel pe orice calculator; (3) pentru că dăm funcția, nu o apelăm; cu paranteze ar rula imediat, iar bucla nu ar merge; (4) ca să nu intre în iarbă și să aibă o poziție corectă pentru săritura următoare.  
- **Exercițiul A:** pentru evaluare folosiți lista din Exemplul 9. Minimul de acceptare: scena desenată și mingea care cade și sare; pauza, butonul și clicul sunt ținta.  
- **Exercițiul B:** nu are răspuns unic; verificați că elevul poate explica ce a schimbat.  
- **Exercițiul C:** (1) gravitația fără `* dt`: `minge.vy + GRAVITATIE * dt`; (2) la săritură lipsește minusul: `-minge.vy * PIERDERE_LA_SALT`; (3) `requestAnimationFrame(cadru())` trebuie `requestAnimationFrame(cadru)`. Observație: `actualizeaza(0.016)` ignoră timpul real (nu este o greșeală de sintaxă, dar mișcarea ar depinde de calculator).  
- **Exercițiul D:** (0, 0) este colțul de sus-stânga, iar y crește în jos; `dt` face mișcarea la fel pe calculatoare rapide și lente; `clearRect` șterge cadrul vechi, altfel s-ar suprapune desenele.  
- **Notă pentru profesor:** dacă mingea „tremură” pe iarbă, căutați pragul `Math.abs(minge.vy) < 40`. Dacă pânza este neclară pe telefon, discutați despre diferența dintre mărimea desenului (`width`/`height` din HTML) și mărimea afișată (CSS). Pentru elevii care întreabă „de ce înmulțim cu dt?”, folosiți exemplul două calculatoare, unul cu 30 de cadre pe secundă și altul cu 144: la același număr de pixeli pe cadru, unul ar fi de 5 ori mai rapid.
