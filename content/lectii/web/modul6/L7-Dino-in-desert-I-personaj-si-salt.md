# LECȚIA 7 — Dino în deșert I: personaj și salt
**Modulul 6 · Jocuri web · 2 ore**  
**Code Maker Club · Web Game Maker**

> Azi începem un joc cunoscut: **Dino în deșert**. Un dinozaur verde aleargă, iar tu îl faci să **sară** cu Spațiu, cu săgeata în sus, cu un clic pe pânză sau cu un buton. Azi desenăm dinozaurul din dreptunghiuri, îi dăm o săritură cu gravitație și facem solul să „alerge” pe sub el. În lecția următoare adăugăm cactuși, scor și Game over.  
> Proiect: **„Dino în deșert”, partea I** · folder: `Prenume_Nume_W6_L7` (ex. `Ana_Pop_W6_L7`)

---

## Obiectiv
La finalul orei ai o pagină cu un dinozaur care aleargă pe loc pe un sol care se mișcă. Când apeși Spațiu (sau săgeata în sus, sau pe pânză, sau pe buton), dinozaurul sare și aterizează la loc. Prima apăsare pornește jocul.  
**Minim:** un dinozaur desenat pe pânză, pe sol.  
**Ținta orei (Complet):** + săritură cu gravitație, dinozaurul poate sări doar de pe sol (nu și în aer), solul se mișcă, picioarele aleargă pe rând, comenzi de la tastatură, de la mouse sau atingere și de la buton, o prezentare de un minut.

## De ce contează
Jocurile cu personaj folosesc aproape mereu aceeași rețetă: **o stare**, **o buclă**, **gravitație** și **comenzi**. Azi le pui pe toate la un loc. Mai înveți să asculți tastatura într-un joc în mod corect.

---

## Siguranță înainte de toate
- Mișcarea este lină: nu avem licăriri sau schimbări bruște de culoare.  
- Jocul **nu pornește singur**: așteaptă prima ta apăsare.  
- Există **mai multe feluri de a juca**: tastatură, mouse sau atingere și buton mare. Așa poate juca oricine.  
- Pânza are descriere pentru cititorul de ecran.  
- **Pauze:** după 20–30 de minute, ridică-te și mișcă-te.  
- Nu cerem și nu salvăm date personale.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare: bucla și gravitația din lecția 6 |
| 10–25 | Pagina și stilul (**Exemplul 1**) |
| 25–40 | Pânza, fizica, starea (**Exemplul 2**) |
| 40–65 | Desenăm solul și dinozaurul (**Exemplul 3**) |
| 65–85 | Săritura și mișcarea (**Exemplele 4–5**) |
| 85–105 | Bucla și controlul (**Exemplul 6**) |
| 105–120 | Verificare, recap și temă |

---

## 1. Pagina și stilul

### Exemplul 1 — HTML și CSS

Creează folderul `Prenume_Nume_W6_L7` cu `index.html`, `stil.css` și `script.js`. În `index.html`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dino în deșert</title>
  <link rel="stylesheet" href="stil.css">
</head>
<body>
  <main class="joc">
    <h1>Dino în deșert</h1>
    <p>Apasă <strong>Spațiu</strong>, săgeata în sus, pânza sau butonul „Sari” ca să sari.</p>

    <canvas id="panza" width="640" height="220" role="img" aria-label="Un dinozaur verde aleargă prin deșert"></canvas>

    <p class="mesaj" id="mesaj" role="status">Apasă „Sari” sau Spațiu ca să începi.</p>
    <button class="buton" id="sari" type="button">Sari</button>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

În `stil.css`:

```css
:root {
  --fundal: #fff3e0;
  --text: #4e342e;
  --accent: #e65100;
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
  max-width: 680px;
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
  height: auto;
  margin: 0.5rem 0 1rem;
  border: 4px solid var(--accent);
  border-radius: 12px;
  touch-action: manipulation;
}

.mesaj {
  min-height: 3em;
  font-size: 1.1rem;
  font-weight: bold;
}

.buton {
  min-width: 140px;
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

Clasa `.panou` o vom folosi abia în lecția următoare, pentru scor. Poți să o scrii și acum, nu deranjează.

**Încearcă tu (15 min)**  
- [ ] Scrie `index.html` și `stil.css`  
- [ ] Deschide pagina: vezi un titlu, o pânză goală și butonul „Sari”

---

## 2. Pânza, fizica și starea

### Exemplul 2 — Constante și variabile

În `script.js`:

```javascript
// ===== Pânza =====
const panza = document.querySelector("#panza");
const ctx = panza.getContext("2d");

const LATIME = panza.width;
const INALTIME = panza.height;
const SOL = 180; // linia solului (de sus, în pixeli)
```
```javascript
// ===== Fizica =====
const GRAVITATIE = 2400;   // pixeli pe secundă, pe secundă
const VITEZA_SALT = 750;   // cât de tare se desprinde dino de sol
const VITEZA = 300;        // cât de repede aleargă solul pe sub dino (pixeli pe secundă)
```
```javascript
// ===== Elemente din pagină =====
const mesaj = document.querySelector("#mesaj");
const butonSari = document.querySelector("#sari");
```
```javascript
// ===== Starea jocului =====
// stare poate fi: "asteptare" sau "joc"
let stare = "asteptare";
let distantaParcursa = 0;
let timpAnterior = null;

const dino = {
  x: 60,
  y: SOL - 44,
  latime: 40,
  inaltime: 44,
  vy: 0
};
```

- `SOL = 180`: solul este la 180 de pixeli de sus. Pânza are 220 de pixeli înălțime, deci sub sol rămân 40 de pixeli de nisip.  
- `GRAVITATIE` și `VITEZA_SALT`: numerele sunt alese ca săritura să aibă cam 117 pixeli înălțime și să dureze mai puțin de o secundă. Poți încerca alte valori.  
- `VITEZA`: cât de repede „aleargă” solul pe sub dinozaur (nu dinozaurul se mișcă pe orizontală, ci lumea din jurul lui).  
- `stare` poate fi `"asteptare"` (jocul nu a început) sau `"joc"`. Vom adăuga o a treia stare în lecția următoare.  
- `dino` este un obiect cu poziția, mărimea și viteza pe verticală. `y` este partea **de sus** a dinozaurului, deci când stă pe sol, `y + inaltime` este egal cu `SOL`.

**Încearcă tu (15 min)**  
- [ ] Scrie secțiunile  
- [ ] În consolă: `SOL - 44` trebuie să dea `136`, adică poziția de sus a dinozaurului când stă pe sol

---

## 3. Desenăm

### Exemplul 3 — Solul și dinozaurul

```javascript
// ===== Desenarea =====
function deseneazaSol() {
  ctx.fillStyle = "#d7a86e";
  ctx.fillRect(0, SOL, LATIME, INALTIME - SOL);

  ctx.fillStyle = "#8d6e63";
  ctx.fillRect(0, SOL, LATIME, 3);

  // Liniuțe care aleargă pe sol, ca să se vadă viteza
  const deplasare = distantaParcursa % 60;
  for (let x = -deplasare; x < LATIME; x += 60) {
    ctx.fillRect(x + 10, SOL + 14, 18, 3);
    ctx.fillRect(x + 40, SOL + 28, 10, 3);
  }
}

function deseneazaDino() {
  const x = dino.x;
  const y = dino.y;
  const peSol = y + dino.inaltime >= SOL;

  ctx.fillStyle = "#2e7d32";
  ctx.fillRect(x, y + 12, 30, 24);       // corpul
  ctx.fillRect(x + 16, y, 24, 18);       // capul
  ctx.fillRect(x - 10, y + 16, 14, 8);   // coada

  // Ochiul
  ctx.fillStyle = "white";
  ctx.fillRect(x + 30, y + 4, 6, 6);
  ctx.fillStyle = "black";
  ctx.fillRect(x + 33, y + 6, 3, 3);

  // Picioarele: aleargă pe rând (în aer sunt amândouă jos)
  ctx.fillStyle = "#2e7d32";
  const primulPicior = !peSol || Math.floor(distantaParcursa / 25) % 2 === 0;
  ctx.fillRect(x + 6, y + 36, 8, primulPicior ? 8 : 4);
  ctx.fillRect(x + 18, y + 36, 8, primulPicior ? 4 : 8);
}

function deseneaza() {
  ctx.clearRect(0, 0, LATIME, INALTIME);
  ctx.fillStyle = "#ffe0b2";
  ctx.fillRect(0, 0, LATIME, SOL);

  deseneazaSol();
  deseneazaDino();
}
```

- **Solul:** un dreptunghi de nisip, o linie mai închisă deasupra și niște liniuțe care se mută spre stânga. `distantaParcursa % 60` este restul împărțirii la 60: o valoare între 0 și 59, care crește tot timpul și revine la 0. Deplasăm liniuțele cu acest rest și pare că solul aleargă.  
- **Dinozaurul** este făcut din dreptunghiuri verzi: corp, cap, coadă, plus un ochi alb cu pupilă neagră.  
- **Picioarele:** `peSol` este adevărat când dinozaurul stă pe sol. Pe sol, picioarele **se schimbă pe rând** (unul lung, unul scurt, apoi invers), în funcție de distanța parcursă. În aer, ambele picioare sunt lungi, ca într-un salt.  
- `deseneaza` șterge pânza, desenează cerul, apoi solul, apoi dinozaurul. Ordinea contează, ca în lecția trecută.

**Încearcă tu (25 min)**  
- [ ] Scrie secțiunea  
- [ ] În consolă: `deseneaza()` (și Enter). Apare dinozaurul pe sol?  
- [ ] Schimbă culoarea dinozaurului (în cele 2 locuri unde apare `"#2e7d32"`)  
- [ ] Desenează în plus un detaliu: o pată pe spate sau un nor în `deseneaza`

---

## 4. Săritura

### Exemplul 4 — Apăsăm, dinozaurul sare

```javascript
// ===== Săritura =====
function sari() {
  if (stare === "asteptare") {
    pornesteJocul();
    return;
  }

  const peSol = dino.y + dino.inaltime >= SOL;
  if (peSol) {
    dino.vy = -VITEZA_SALT;
  }
}
```

- Dacă jocul **așteaptă**, prima apăsare îl **pornește** și nu mai facem altceva (de aceea `return`).  
- Altfel, verificăm dacă dinozaurul este **pe sol**. Doar atunci îi dăm viteză în sus: `dino.vy = -VITEZA_SALT`. Minus, pentru că **în sus** înseamnă `y` mai mic.  
- Dacă nu este pe sol, nu se întâmplă nimic: nu poți sări din aer. Așa evităm „zborul” prin apăsări repetate.

---

## 5. Mișcarea și începutul

### Exemplul 5 — Gravitația trage dinozaurul în jos

```javascript
// ===== Mișcarea =====
function actualizeaza(dt) {
  // Gravitația trage dino în jos
  dino.vy = dino.vy + GRAVITATIE * dt;
  dino.y = dino.y + dino.vy * dt;

  // Solul oprește dino
  if (dino.y + dino.inaltime > SOL) {
    dino.y = SOL - dino.inaltime;
    dino.vy = 0;
  }

  // Solul "aleargă" pe sub dino
  distantaParcursa = distantaParcursa + VITEZA * dt;
}
```
```javascript
// ===== Începutul =====
function pornesteJocul() {
  stare = "joc";
  mesaj.textContent = "Fugi, dino! Sari cu Spațiu.";
}
```

În fiecare cadru:
1. gravitația mărește `vy`, viteza în jos (`GRAVITATIE * dt`);  
2. poziția se schimbă cu `vy * dt`;  
3. dacă dinozaurul a intrat în sol, îl punem exact pe sol (`SOL - dino.inaltime`) și îi oprim viteza;  
4. `distantaParcursa` crește, deci solul și picioarele se mișcă.

Când dinozaurul sare, `vy` este negativ (urcă). Gravitația îl încetinește, în vârf `vy` ajunge 0, apoi devine pozitiv (coboară) până aterizează. Ca și mingea din lecția trecută, doar că aici există o singură săritură pe apăsare.

`pornesteJocul` schimbă starea și afișează un mesaj.

---

## 6. Bucla și controlul

### Exemplul 6 — Bucla și comenzile

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

  if (stare === "joc") {
    actualizeaza(dt);
  }

  deseneaza();
  requestAnimationFrame(cadru);
}
```

Este aceeași buclă ca la minge, doar că actualizăm lumea **doar când `stare` este `"joc"`**. Desenăm însă mereu, ca să se vadă dinozaurul și în așteptare.

```javascript
// ===== Controlul =====
butonSari.addEventListener("click", sari);
panza.addEventListener("pointerdown", sari);

document.addEventListener("keydown", function (eveniment) {
  // Pe un buton, Spațiu și Enter funcționează deja ca un clic
  if (eveniment.target.tagName === "BUTTON") {
    return;
  }

  if (eveniment.code === "Space" || eveniment.code === "ArrowUp") {
    eveniment.preventDefault();
    sari();
  }
});

requestAnimationFrame(cadru);
```

- Butonul și pânza (la atingere sau clic: `pointerdown`) cheamă `sari`.  
- La tastatură ascultăm pe tot documentul. Dacă apăsarea vine de la un **buton** (`eveniment.target.tagName === "BUTTON"`), nu facem nimic în plus: Spațiu și Enter apasă deja butonul, iar dacă nu am ieși din funcție, aceeași apăsare ar fi numărată de două ori: o dată de buton și o dată de tastatură.  
- `eveniment.code` ne dă tasta fizică: `"Space"` sau `"ArrowUp"`.  
- `eveniment.preventDefault()` oprește comportamentul obișnuit al tastei. Fără el, Spațiu ar **derula pagina** în jos.  
- Ultima linie pornește bucla.

**Încearcă tu (35 min, pentru Exemplele 4–6)**  
- [ ] Scrie secțiunile rămase  
- [ ] Dinozaurul stă și așteaptă până apeși? Mesajul se schimbă la prima apăsare?  
- [ ] Spațiu face dinozaurul să sară? Pagina rămâne pe loc?  
- [ ] Săgeata în sus, un clic pe pânză și butonul „Sari” funcționează?  
- [ ] Dacă apeși Spațiu în timp ce dinozaurul este în aer, nu se întâmplă nimic?  
- [ ] Solul alunecă spre stânga, iar picioarele aleargă?

---

## 7. Verificarea

### Exemplul 7 — Lista de verificare

```text
□ Se văd cerul, solul și dinozaurul
□ Jocul așteaptă prima apăsare (nu pornește singur)
□ Prima apăsare pornește jocul fără să facă și un salt
□ Spațiu, săgeata în sus, pânza și butonul fac dinozaurul să sară
□ Dinozaurul nu poate sări din aer
□ Pagina nu derulează la apăsarea Spațiului
□ Solul se mișcă, iar picioarele aleargă pe rând
□ Săritura arată la fel pe orice calculator (se folosește dt)
□ Dinozaurul aterizează exact pe sol (nu se afundă)
□ Nu apar erori în consolă
□ Merge pe telefon (DevTools 375 px)
```

**Gata când:**  
- [ ] Toate punctele sunt bifate  
- [ ] Ai făcut o copie de siguranță a folderului

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Dino în deșert”, partea I (obligatoriu)
Folderul `Prenume_Nume_W6_L7` are `index.html`, `stil.css` și `script.js`, iar dinozaurul sare după lista din Exemplul 7.

### Exercițiul B — Îl faci al tău
Schimbă: culorile dinozaurului și ale deșertului, mesajele, `VITEZA_SALT` (ce se întâmplă dacă este 400? dar 1000?), `GRAVITATIE` (o săritură „pe Lună”) și `VITEZA`. Notează ce ai observat.

### Exercițiul C — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```javascript
function sari() {
  const peSol = dino.y + dino.inaltime = SOL;
  if (peSol) {
    dino.vy = VITEZA_SALT;
  }
}

function actualizeaza(dt) {
  dino.vy = dino.vy + GRAVITATIE * dt;
  dino.y = dino.y + dino.vy * dt;

  if (dino.y + dino.inaltime > SOL) {
    dino.y = SOL;
    dino.vy = 0;
  }
}
```

### Exercițiul D — Explică cu cuvintele tale
Pe foaie: de ce `vy` este negativ când dinozaurul urcă? De ce verificăm `peSol` înainte de salt? Ce face `preventDefault()`?

**Gata când:**  
- [ ] Dinozaurul sare și lista este bifată  
- [ ] Ai răspuns la exercițiile B–D

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Adaugă **norișori** care se mișcă încet (o listă de obiecte cu `x` și `y`)  
- [ ] Fă dinozaurul să se **aplece** când apeși săgeata în jos (corp mai jos și mai scund)  
- [ ] Adaugă un **sol cu pietre** desenate din dreptunghiuri mici  
- [ ] Schimbă fundalul încet din zi în noapte (fără licăriri: încet, în câteva minute)

---

## Greșeli frecvente
1. **`=` în loc de `>=` sau `===`**: codul nu mai merge sau nu face ce vrei.  
2. **Uitat minusul la săritură**: dinozaurul se afundă în loc să sară.  
3. **`dino.y = SOL`** în loc de `SOL - dino.inaltime`: dinozaurul intră în sol, pentru că `y` este partea de sus.  
4. **Uitat `preventDefault`**: Spațiu derulează pagina.  
5. **Sărit în aer**: nu am verificat dacă este pe sol.  
6. **Uitat `* dt`**: săritura depinde de viteza calculatorului.

## Recapitulare pe scurt
1. Jocul are o **stare** (`"asteptare"` sau `"joc"`) și o **buclă**.  
2. Gravitația schimbă `vy`, iar `vy` schimbă `y`.  
3. Pe sol: poziția este corectată, iar viteza devine 0.  
4. Sărim doar de pe sol, cu o viteză negativă (în sus).  
5. Comenzi: tastatură, mouse sau atingere și buton, toate cheamă aceeași funcție.  
6. `preventDefault()` oprește derularea paginii la Spațiu.

## Quiz scurt
1. Dacă `dino.y + dino.inaltime` este 180, unde se află dinozaurul?  
2. De ce este `-VITEZA_SALT` negativ?  
3. Ce se întâmplă dacă scoatem verificarea `peSol`?  
4. De ce ignorăm tasta dacă apăsarea vine de la un buton?

## Temă
Arată jocul unui membru al familiei și întreabă ce ar vrea să apară în joc. Încearcă o idee mică (un nor, o altă culoare, un alt animal). Salvează în `Prenume_Nume_W6_L7`.

## Ce urmează — Lecția 8
Terminăm jocul: apar **cactuși** pe care trebuie să îi sari, jocul numără scorul, crește viteza, iar când te lovești de un cactus apare **Game over** și recordul se salvează.

---

## Răspunsuri pentru profesor
- **Exercițiul A:** pentru evaluare folosiți lista din Exemplul 7. Minimul: dinozaurul desenat pe sol; ținta: săritura corectă și comenzile.  
- **Exercițiul B:** nu are răspuns unic; verificați că elevul poate explica ce a schimbat.  
- **Exercițiul C:** (1) `=` trebuie `>=`: `dino.y + dino.inaltime >= SOL`; (2) săritura are nevoie de minus: `dino.vy = -VITEZA_SALT`; (3) `dino.y = SOL - dino.inaltime`, nu `SOL`, pentru că `y` este partea de sus.  
- **Exercițiul D:** în sus înseamnă `y` mai mic, deci viteza este negativă; `peSol` previne săriturile în aer; `preventDefault()` oprește derularea paginii când se apasă Spațiu.  
- **Notă pentru profesor:** în `sari`, prima apăsare doar pornește jocul (`return`), ca să nu pornească jocul și să sară deodată. Dacă dinozaurul pare să „ardă” cadre, verificați limitarea `dt > 0.05` din buclă. Elevii care schimbă `VITEZA_SALT` foarte mult pot face dinozaurul să iasă din pânză: este un bun prilej de discuție despre alegerea valorilor. Înălțimea săriturii este `VITEZA_SALT² / (2 × GRAVITATIE)`, adică 117 pixeli cu valorile din lecție.
