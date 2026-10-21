# LECȚIA 8 — Dino în deșert II: obstacole, scor și game over
**Modulul 6 · Jocuri web · 2 ore**  
**Code Maker Club · Web Game Maker**

> Dinozaurul nostru știe să sară, dar nu are peste ce. Azi adăugăm **cactuși** care vin spre el, un **scor** care crește cât timp supraviețuiești, o viteză care crește încet și, când dinozaurul se lovește de un cactus, **Game over**. Recordul se salvează în browser. Aici învățăm și cum află calculatorul că **două dreptunghiuri se ating**.  
> Proiect: **„Dino în deșert”, jocul complet** · folder: `Prenume_Nume_W6_L8` (continuăm din `Prenume_Nume_W6_L7`)

---

## Obiectiv
La finalul orei ai un joc complet: cactușii apar la distanțe diferite și vin tot mai repede, tu sari peste ei, scorul crește, iar la lovitură apare „Game over” cu scorul tău. Recordul rămâne salvat și după ce închizi pagina.  
**Minim:** cactuși care vin spre dinozaur și o ciocnire care oprește jocul.  
**Ținta orei (Complet):** + scor, record salvat, viteză care crește până la un maxim, distanțe diferite între cactuși, o ciocnire corectă (cu o mică iertare), o pauză de o clipă după Game over ca să nu reîncepi din greșeală, buton „Mai încerc”, o prezentare de un minut.

## De ce contează
Aproape orice joc are **obstacole**, **ciocniri** și **sfârșit**. Ciocnirea dintre două dreptunghiuri este una dintre cele mai folosite idei din jocuri. Mai înveți să faci un joc **corect**: să nu fie imposibil și să nu te învingă din greșeală.

---

## Siguranță înainte de toate
- **Corect pentru jucător:** cactușii vin la distanțe care **permit săritura** (distanța crește odată cu viteza), iar ciocnirea iartă câțiva pixeli la margini.  
- După Game over, jocul **așteaptă o clipă** ca să nu reîncepi din greșeală dacă apeși repede.  
- Niciun mesaj nu face rău: „Game over! Scorul tău: 120.” și „Mai încerc”, fără jigniri.  
- Recordul se salvează doar ca **număr** în browser, fără date personale.  
- Mișcarea este lină, fără licăriri.  
- **Pauze:** după 20–30 de minute, ridică-te și mișcă-te.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare: ce avem din lecția 7 |
| 10–25 | Pagina, scorul și starea (**Exemplele 1–2**) |
| 25–45 | Cactușii: apar, se mișcă, se desenează (**Exemplul 3**) |
| 45–70 | Ciocnirea dreptunghi cu dreptunghi (**Exemplul 4**) |
| 70–95 | Mișcarea, începutul și sfârșitul (**Exemplele 5–6**) |
| 95–110 | Verificarea jocului (**Exemplul 7**) |
| 110–120 | Recap și temă |

---

## 1. Pagina

### Exemplul 1 — Adăugăm scorul și recordul

Copiază `Prenume_Nume_W6_L7` în `Prenume_Nume_W6_L8` și lucrează în copie. `stil.css` rămâne la fel. Înlocuiește tot `index.html` cu:

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
    <p>Sari peste cactuși! Apasă <strong>Spațiu</strong>, săgeata în sus, pânza sau butonul „Sari”.</p>

    <div class="panou">
      <p>Scor: <strong id="scor">0</strong></p>
      <p>Record: <strong id="record">0</strong></p>
    </div>

    <canvas id="panza" width="640" height="220" role="img" aria-label="Un dinozaur verde aleargă prin deșert și sare peste cactuși"></canvas>

    <p class="mesaj" id="mesaj" role="status">Apasă „Sari” sau Spațiu ca să începi.</p>
    <button class="buton" id="sari" type="button">Sari</button>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

Ce s-a schimbat: avem un **panou** cu scorul și recordul (deasupra pânzei), textul de sus este nou, iar pânza are o descriere mai bună.

**Încearcă tu (10 min)**  
- [ ] Înlocuiește `index.html`  
- [ ] Deschide pagina: se vede panoul cu „Scor: 0” și „Record: 0”

---

## 2. Setările și starea

### Exemplul 2 — Mai multe constante și variabile

În `script.js` **înlocuiește** secțiunile „Fizica”, „Elemente din pagină” și „Starea jocului” cu:

```javascript
// ===== Fizica =====
const GRAVITATIE = 2400;      // pixeli pe secundă, pe secundă
const VITEZA_SALT = 750;      // cât de tare se desprinde dino de sol
const VITEZA_START = 300;     // cât de repede vin cactușii (pixeli pe secundă)
const VITEZA_MAXIMA = 520;
const CRESTERE_VITEZA = 8;    // cu cât se mărește viteza în fiecare secundă
```
```javascript
// ===== Elemente din pagină =====
const elScor = document.querySelector("#scor");
const elRecord = document.querySelector("#record");
const mesaj = document.querySelector("#mesaj");
const butonSari = document.querySelector("#sari");
```
```javascript
// ===== Starea jocului =====
// stare poate fi: "asteptare", "joc" sau "terminat"
let stare = "asteptare";
let viteza = VITEZA_START;
let scor = 0;
let record = 0;
let distantaParcursa = 0;
let distantaPanaLaCactus = 400;
let poateReincepe = true;
let timpAnterior = null;
let cactusi = [];

const dino = {
  x: 60,
  y: SOL - 44,
  latime: 40,
  inaltime: 44,
  vy: 0
};

try {
  record = Number(localStorage.getItem("recordDino")) || 0;
} catch (eroare) {
  record = 0;
}
elRecord.textContent = record;
```

Ce este nou:
- `VITEZA_START`, `VITEZA_MAXIMA`, `CRESTERE_VITEZA`: cactușii pornesc cu 300 de pixeli pe secundă și devin mai rapizi cu 8 pixeli pe secundă, în fiecare secundă, până la 520. Înlocuiește vechea constantă `VITEZA`.  
- `stare` are acum **trei** valori: `"asteptare"`, `"joc"`, `"terminat"`.  
- `viteza` este viteza de **acum**, care crește.  
- `scor` și `record`: scorul din jocul curent și cel mai bun.  
- `distantaPanaLaCactus`: câți pixeli mai sunt până apare următorul cactus.  
- `poateReincepe`: ne ajută la pauza de după Game over.  
- `cactusi` este o **listă** de obiecte, câte unul pentru fiecare cactus de pe ecran.  
- Recordul se citește din `localStorage` (cu `try/catch`, ca în lecțiile trecute).

---

## 3. Cactușii

### Exemplul 3 — Desenăm și adăugăm cactuși

Înlocuiește secțiunea „Desenarea” cu cea de mai jos (avem o funcție nouă, `deseneazaCactus`, iar `deseneaza` desenează acum și cactușii):

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

function deseneazaCactus(cactus) {
  ctx.fillStyle = "#1b5e20";
  const sus = SOL - cactus.inaltime;
  ctx.fillRect(cactus.x + 8, sus, 8, cactus.inaltime);         // trunchiul
  ctx.fillRect(cactus.x, sus + 12, 8, 6);                      // brațul stâng
  ctx.fillRect(cactus.x, sus + 6, 4, 12);
  ctx.fillRect(cactus.x + 16, sus + 18, 8, 6);                 // brațul drept
  ctx.fillRect(cactus.x + 20, sus + 10, 4, 14);
}

function deseneaza() {
  ctx.clearRect(0, 0, LATIME, INALTIME);
  ctx.fillStyle = "#ffe0b2";
  ctx.fillRect(0, 0, LATIME, SOL);

  deseneazaSol();
  for (const cactus of cactusi) {
    deseneazaCactus(cactus);
  }
  deseneazaDino();
}
```

`deseneazaCactus` primește un cactus și desenează un trunchi (dreptunghi înalt) și două brațe, tot din dreptunghiuri. Partea de sus a cactusului este `SOL - cactus.inaltime`. În `deseneaza`, `for (const cactus of cactusi)` desenează fiecare cactus din listă.

Acum **adăugarea**. Pune sub „Săritura” o secțiune nouă:

```javascript
// ===== Cactușii =====
function adaugaCactus() {
  const inalt = Math.random() < 0.5;
  cactusi.push({
    x: LATIME,
    latime: 24,
    inaltime: inalt ? 56 : 40
  });

  // Cât de departe vine următorul: mai departe când viteza crește, ca să se poată sări
  const minim = viteza * 0.9;
  distantaPanaLaCactus = minim + Math.random() * 250;
}
```

- `Math.random() < 0.5` este adevărat în jumătate din cazuri: cactusul este **înalt** (56) sau **scund** (40).  
- Fiecare cactus apare la marginea din dreapta (`x: LATIME`).  
- Distanța până la următorul este `viteza * 0.9` plus un număr întâmplător între 0 și 250. Cu cât viteza este mai mare, cu atât minimul este mai mare: așa rămâne timp să sari.

Mai trebuie să schimbăm **„Săritura”**, ca să știe despre starea „terminat”:

```javascript
// ===== Săritura =====
function sari() {
  if (stare === "asteptare" || (stare === "terminat" && poateReincepe)) {
    pornesteJocul();
    return;
  }

  const peSol = dino.y + dino.inaltime >= SOL;
  if (stare === "joc" && peSol) {
    dino.vy = -VITEZA_SALT;
  }
}
```

Dacă jocul așteaptă, **sau** s-a terminat și a trecut pauza de reîncepere, pornim un joc nou. Dacă jocul este în desfășurare și dinozaurul stă pe sol, sare.

**Încearcă tu (20 min)**  
- [ ] Înlocuiește și adaugă secțiunile  
- [ ] În consolă: `cactusi.push({ x: 300, latime: 24, inaltime: 56 })` apoi `deseneaza()`. Apare un cactus?

---

## 4. Ciocnirea

### Exemplul 4 — Când se ating două dreptunghiuri?

Dinozaurul și cactusul sunt, pentru calculator, **dreptunghiuri**. Două dreptunghiuri **se ating** dacă se suprapun și pe orizontală, **și** pe verticală. Adică toate cele patru condiții sunt adevărate în același timp:

```text
1. partea DREAPTĂ a dinozaurului este după partea STÂNGĂ a cactusului
2. partea STÂNGĂ a dinozaurului este înainte de partea DREAPTĂ a cactusului
3. partea de JOS a dinozaurului este sub partea de SUS a cactusului
4. partea de SUS a dinozaurului este deasupra părții de jos a cactusului
```

Dacă măcar una este falsă, dreptunghiurile nu se ating. De exemplu, când dinozaurul sare **deasupra** cactusului, condiția 3 este falsă (jos-ul dinozaurului este mai sus decât vârful cactusului).

În cod:

```javascript
// ===== Ciocnirea (dreptunghi cu dreptunghi) =====
function seCiocnesc(cactus) {
  const margine = 4; // iertăm puțin, ca jocul să fie corect
  const stangaDino = dino.x + margine;
  const dreaptaDino = dino.x + dino.latime - margine;
  const susDino = dino.y + margine;
  const josDino = dino.y + dino.inaltime;

  const stangaCactus = cactus.x + 2;
  const dreaptaCactus = cactus.x + cactus.latime - 2;
  const susCactus = SOL - cactus.inaltime;

  return (
    dreaptaDino > stangaCactus &&
    stangaDino < dreaptaCactus &&
    josDino > susCactus &&
    susDino < SOL
  );
}
```

- `margine = 4`: iertăm câțiva pixeli, ca jocul să fie corect. Dinozaurul are un contur din dreptunghiuri, nu chiar plin, deci o atingere mică la colț nu trebuie să te învingă.  
- Cactusul are aceeași iertare de 2 pixeli pe lateral (`+ 2` și `- 2`).  
- `susCactus = SOL - cactus.inaltime`, iar cactusul ajunge până la `SOL` (jos).  
- Funcția întoarce `true` (se ciocnesc) sau `false`. Cele patru condiții sunt legate cu `&&` (**și**): toate trebuie să fie adevărate.

**Încearcă tu (25 min)**  
- [ ] Scrie funcția  
- [ ] Testează în consolă cu un cactus pus **peste** dinozaur: `seCiocnesc({ x: 60, latime: 24, inaltime: 40 })`. Trebuie să dea `true`  
- [ ] Testează cu un cactus **departe**: `seCiocnesc({ x: 400, latime: 24, inaltime: 40 })`. Trebuie să dea `false`  
- [ ] Desenează pe foaie dinozaurul și un cactus și verifică, pe rând, cele patru condiții

---

## 5. Mișcarea

### Exemplul 5 — Totul se mișcă

Înlocuiește secțiunea „Mișcarea” cu:

```javascript
// ===== Mișcarea =====
function actualizeaza(dt) {
  // Dino: gravitația
  dino.vy = dino.vy + GRAVITATIE * dt;
  dino.y = dino.y + dino.vy * dt;

  if (dino.y + dino.inaltime > SOL) {
    dino.y = SOL - dino.inaltime;
    dino.vy = 0;
  }

  // Viteza crește încet
  viteza = Math.min(VITEZA_MAXIMA, viteza + CRESTERE_VITEZA * dt);
  distantaParcursa = distantaParcursa + viteza * dt;

  // Cactușii
  distantaPanaLaCactus = distantaPanaLaCactus - viteza * dt;
  if (distantaPanaLaCactus <= 0) {
    adaugaCactus();
  }

  for (const cactus of cactusi) {
    cactus.x = cactus.x - viteza * dt;
  }
  cactusi = cactusi.filter(function (cactus) {
    return cactus.x + cactus.latime > 0;
  });

  // Scorul
  scor = scor + dt * 10;
  elScor.textContent = Math.floor(scor);

  // Ciocnirea
  for (const cactus of cactusi) {
    if (seCiocnesc(cactus)) {
      terminaJocul();
      return;
    }
  }
}
```

Pașii dintr-un cadru:
1. **Dinozaurul**: gravitația, ca în lecția 7.  
2. **Viteza** crește încet, dar nu mai mult de `VITEZA_MAXIMA` (`Math.min` alege valoarea mai mică).  
3. **Distanța parcursă** crește, deci solul se mișcă.  
4. **Apariția cactușilor**: scădem distanța rămasă, iar când ajunge la 0 sau mai puțin, apare un cactus.  
5. **Mutăm** fiecare cactus spre stânga cu `viteza * dt`.  
6. **Curățăm** lista: păstrăm doar cactușii care sunt încă pe ecran (`cactus.x + cactus.latime > 0`). Fără curățare, lista ar crește la nesfârșit.  
7. **Scorul** crește cu 10 pe secundă (`dt * 10`), iar pe ecran arătăm partea întreagă (`Math.floor`).  
8. **Ciocnirea**: verificăm fiecare cactus. Dacă se ciocnește, terminăm jocul și ieșim din funcție (`return`).

---

## 6. Începutul și sfârșitul

### Exemplul 6 — Pornim și oprim jocul

Înlocuiește secțiunea „Începutul” cu:

```javascript
// ===== Începutul și sfârșitul =====
function pornesteJocul() {
  stare = "joc";
  viteza = VITEZA_START;
  scor = 0;
  distantaParcursa = 0;
  distantaPanaLaCactus = 400;
  cactusi = [];
  dino.y = SOL - dino.inaltime;
  dino.vy = 0;
  elScor.textContent = 0;
  mesaj.textContent = "Fugi, dino!";
  butonSari.textContent = "Sari";
}

function terminaJocul() {
  stare = "terminat";
  poateReincepe = false;

  const scorFinal = Math.floor(scor);
  let text = `Game over! Scorul tău: ${scorFinal}.`;

  if (scorFinal > record) {
    record = scorFinal;
    elRecord.textContent = record;
    text = text + " Record nou!";
    try {
      localStorage.setItem("recordDino", record);
    } catch (eroare) {
      // Dacă browserul nu permite salvarea, jocul merge oricum
    }
  }

  mesaj.textContent = text + " Apasă ca să încerci din nou.";
  butonSari.textContent = "Mai încerc";

  // O mică pauză, ca să nu reîncepi din greșeală
  setTimeout(function () {
    poateReincepe = true;
  }, 600);
}
```

- `pornesteJocul` **resetează** tot: starea, viteza, scorul, distanțele, lista de cactuși și dinozaurul. Așa începe fiecare joc de la zero.  
- `terminaJocul`: starea devine `"terminat"` și blocăm reîncepere (`poateReincepe = false`).  
- Scorul final este partea întreagă a scorului. Dacă este mai mare decât recordul, salvăm recordul nou (în `try/catch`) și adăugăm „Record nou!” la mesaj. Mesajul spune scorul **tău** și îți arată cum reîncepi.  
- `setTimeout(..., 600)`: după 600 de milisecunde (o clipă) permitem reîncepere. Așa, o apăsare rapidă din timpul jocului nu pornește imediat un joc nou.

Secțiunile „Bucla jocului” și „Controlul” rămân **neschimbate**. Bucla actualizează lumea doar când `stare` este `"joc"`, deci după Game over cactușii și dinozaurul stau pe loc.

**Încearcă tu (30 min, pentru Exemplele 5–6)**  
- [ ] Înlocuiește secțiunile  
- [ ] Apar cactuși la distanțe diferite? Se mișcă tot mai repede?  
- [ ] Dacă sari la timp, treci peste cactus și scorul crește?  
- [ ] Dacă nu sari, apare „Game over! Scorul tău: …”, iar butonul devine „Mai încerc”?  
- [ ] Dacă apeși imediat după Game over, nu pornește joc nou?  
- [ ] După o clipă, apăsarea pornește un joc nou cu scorul 0?  
- [ ] Recordul rămâne după ce reîncarci pagina?

---

## 7. Verificarea

### Exemplul 7 — Lista de verificare

```text
□ Jocul așteaptă prima apăsare
□ Cactușii apar la distanțe diferite și cu două înălțimi
□ Cactușii nu apar niciodată prea aproape unul de altul ca să nu poți sări
□ Cactușii vin tot mai repede, până la un maxim
□ Scorul crește cât timp joci și este afișat ca număr întreg
□ La ciocnire apare „Game over!” cu scorul
□ O ciocnire foarte mică la colț nu te învinge (iertarea de câțiva pixeli)
□ Apăsarea imediat după Game over nu pornește un joc nou
□ După o clipă, apăsarea pornește un joc nou cu scorul 0
□ Recordul se salvează și rămâne după reîncărcarea paginii
□ Jocul merge și cu tastatura, și cu mouse sau atingere, și cu butonul
□ Nu apar erori în consolă
□ Merge pe telefon (DevTools 375 px)
```

**Gata când:**  
- [ ] Toate punctele sunt bifate  
- [ ] Ai făcut o copie de siguranță a folderului

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Dino în deșert”, jocul complet (obligatoriu)
Folderul `Prenume_Nume_W6_L8` are `index.html`, `stil.css` și `script.js`, iar jocul merge după lista din Exemplul 7.

### Exercițiul B — Îl faci al tău
Schimbă: culorile, mesajele, `VITEZA_START`, `VITEZA_MAXIMA` și `CRESTERE_VITEZA` (jocul devine mai ușor sau mai greu?), înălțimile cactușilor, `margine` din ciocnire și scorul pe secundă. Notează ce ai observat și cum ai simțit jocul.

### Exercițiul C — Găsește greșelile
Găsește **3 greșeli** în codurile de mai jos și repară greșelile:

```javascript
// 1) Ciocnirea
return (
  dreaptaDino > stangaCactus &&
  stangaDino < dreaptaCactus &&
  josDino > susCactus ||
  susDino < SOL
);

// 2) Curățarea listei
cactusi = cactusi.filter(function (cactus) {
  return cactus.x + cactus.latime < 0;
});

// 3) Recordul
if (scorFinal < record) {
  record = scorFinal;
}
```

### Exercițiul D — Explică cu cuvintele tale
Pe foaie: când se ating două dreptunghiuri? De ce curățăm lista de cactuși? De ce așteptăm 600 de milisecunde după Game over? De ce distanța dintre cactuși crește odată cu viteza?

**Gata când:**  
- [ ] Jocul merge și lista este bifată  
- [ ] Ai răspuns la exercițiile B–D

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Adaugă **păsări** care zboară la înălțime medie (dinozaurul trebuie să stea jos, nu doar să sară)  
- [ ] Adaugă o tastă pentru **pauză** (litera P)  
- [ ] Arată în colț „Viteza: …” în cadrul panoului  
- [ ] Adaugă un mesaj special când scorul trece de 100

---

## Greșeli frecvente
1. **`||` în loc de `&&`** la ciocnire: jocul se termină imediat, sau niciodată.  
2. **Uitat să curățăm lista**: jocul încetinește după o vreme.  
3. **Uitat să resetăm lista și poziția** în `pornesteJocul`: noul joc începe cu cactușii vechi.  
4. **Comparat greșit recordul** (`<` în loc de `>`): recordul nu se actualizează niciodată sau se actualizează cu scoruri mai mici.  
5. **Cactuși prea apropiați**: jocul devine imposibil. Distanța trebuie să crească odată cu viteza.  
6. **Uitat pauza după Game over**: jucătorul reîncepe din greșeală.

## Recapitulare pe scurt
1. Starea jocului are trei valori: așteptare, joc, terminat.  
2. Lista `cactusi` ține toți cactușii de pe ecran: adăugăm la dreapta, mutăm, ștergem ce a ieșit.  
3. Două dreptunghiuri se ating dacă se suprapun și pe orizontală, și pe verticală (4 condiții cu `&&`).  
4. Un joc corect iartă câțiva pixeli și nu cere imposibilul.  
5. Recordul se salvează în `localStorage` (doar numere, cu `try/catch`).  
6. `setTimeout` ne dă o mică pauză după Game over.

## Quiz scurt
1. Ce înseamnă că două dreptunghiuri „se ating”?  
2. De ce folosim `&&` și nu `||` la ciocnire?  
3. Ce ar face jocul dacă nu am șterge cactușii ieșiți de pe ecran?  
4. De ce resetăm lista `cactusi` în `pornesteJocul`?

## Temă
Dă jocul unui prieten sau unui membru al familiei și vezi cât scor face. Notează ce a spus: a fost prea ușor, prea greu sau potrivit? Ajustează o valoare și încearcă din nou. Salvează în `Prenume_Nume_W6_L8`.

## Ce urmează — Lecția 9
Facem **Păsărica zburătoare**: o pasăre care bate din aripi, țevi prin care trebuie să treci și o ciocnire nouă, între un **cerc** și un **dreptunghi**.

---

## Răspunsuri
- **Quiz scurt:** (1) se suprapun și pe orizontală, și pe verticală; (2) toate cele patru condiții trebuie să fie adevărate în același timp; cu `||` rezultatul ar fi mereu `true` și jocul s-ar termina imediat; (3) lista ar crește la nesfârșit și jocul ar încetini; (4) ca jocul nou să nu înceapă cu cactușii vechi.  
- **Dacă ritmul clasei este lent:** dați elevilor `script.js` complet, ca să nu piardă timp cu înlocuirea secțiunilor din Lecția 7.  
- **Exercițiul A:** pentru evaluare folosiți lista din Exemplul 7. Minimul: cactuși care vin și o ciocnire care oprește jocul; ținta: restul listei.  
- **Exercițiul B:** nu are răspuns unic; verificați că elevul poate explica ce a schimbat și cum a afectat jocul.  
- **Exercițiul C:** (1) la ciocnire trebuie `&&` între toate cele patru condiții: `... && josDino > susCactus && susDino < SOL`; cu `||` rezultatul este mereu `true` (pentru că `susDino < SOL` este mereu adevărat), deci jocul se termină imediat; (2) condiția de curățare trebuie `> 0`: `cactus.x + cactus.latime > 0` (păstrăm ce este încă pe ecran); (3) recordul se actualizează când scorul este **mai mare**: `scorFinal > record`.  
- **Exercițiul D:** două dreptunghiuri se ating când se suprapun și pe orizontală, și pe verticală; lista ar crește la nesfârșit și jocul ar încetini; pauza previne reîncepere din greșeală; la viteză mare, aceeași distanță ar lăsa mai puțin timp pentru săritură.  
- **Notă pentru profesor:** dacă elevii înlocuiesc doar o parte din secțiuni, vor apărea erori de tipul „VITEZA is not defined” (constanta veche) sau „scor is not defined”. Cereți elevilor să verifice că secțiunile „Fizica”, „Elemente din pagină” și „Starea jocului” sunt înlocuite integral. Notă de corectitudine: săritura durează 0,625 secunde, iar la viteza maximă (520 de pixeli pe secundă) dinozaurul parcurge 325 de pixeli în timpul ei; distanța minimă dintre cactuși este de 0,9 × viteza (aproximativ 270 de pixeli la 300 pe secundă), deci jocul este mereu posibil de câștigat.
