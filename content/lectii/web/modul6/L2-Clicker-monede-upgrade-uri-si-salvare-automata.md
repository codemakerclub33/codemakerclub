# LECȚIA 2 — Clicker: monede, upgrade-uri și salvare automată
**Modulul 6 · Jocuri web · 2 ore**  
**Code Maker Club · Web Game Maker**

> Azi facem un **clicker**, un joc în care apeși pe o monedă ca să câștigi monede, apoi cumperi **îmbunătățiri** (upgrade-uri) care îți dau mai multe monede pe clic sau chiar **lucrează în locul tău**, în fiecare secundă. Jocul **se salvează singur**, deci data viitoare continui de unde ai rămas. Înveți liste de obiecte în joc, calcule de prețuri, `JSON` și `localStorage`.  
> Proiect: **„Fabrica de monede”** · folder: `Prenume_Nume_W6_L2` (ex. `Ana_Pop_W6_L2`)

---

## Obiectiv
La finalul orei ai un clicker care merge: monedele cresc la clic, ai 3 îmbunătățiri cu prețuri care cresc, butoanele de cumpărare se blochează când nu ai destule monede, monedele vin singure în fiecare secundă și progresul se păstrează după reîncărcare.  
**Minim:** o monedă pe care apeși, un număr de monede care crește și cel puțin o îmbunătățire care se poate cumpăra.  
**Ținta orei (Complet):** + 3 îmbunătățiri (una pentru clic, două pentru secundă), prețuri care cresc cu fiecare cumpărare, butoane blocate când nu ai destule monede, monede automate în fiecare secundă, salvare automată și la fiecare cumpărare, buton „Începe de la zero” cu confirmare, mesaje la cumpărare, o prezentare de un minut.

## De ce contează
Clickerele par simple, dar folosesc idei puternice: **liste de obiecte**, **calcule** și **salvarea progresului**. Aceleași idei se află în aproape orice joc, de la un simplu clicker până la jocuri mari.

---

## Siguranță înainte de toate
- Monedele sunt **doar numere** într-un joc. **Nu există bani adevărați** și nu cerem niciodată cumpărături adevărate.  
- Jocurile adevărate au uneori **trucuri** ca să te facă să stai mult (ceasuri care te grăbesc, recompense zilnice, „mai joacă puțin”). Jocul nostru **nu te grăbește** și poți închide oricând. Discută la oră: ce trucuri ai văzut în alte jocuri?  
- **Pauze:** după 20–30 de minute, mută privirea de la ecran și mișcă-te.  
- Salvarea ține doar numere (monedele și câte îmbunătățiri ai), **în browserul tău**. Nu salvăm date personale.  
- Fără sunet și fără licăriri.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Regulile jocului și datele (**Exemplul 1**) |
| 10–25 | Pagina și stilul (**Exemplul 2**) |
| 25–40 | Lista de îmbunătățiri (**Exemplul 3**) |
| 40–60 | Elementele, starea și calculele (**Exemplul 4**) |
| 60–75 | Afișarea (**Exemplul 5**) |
| 75–95 | Cumpărarea și clicurile (**Exemplele 6–7**) |
| 95–110 | Salvarea (**Exemplul 8**) |
| 110–120 | Verificare, recap și temă |

---

## 1. Regulile și datele

### Exemplul 1 — Ce se vinde în fabrică

Gândește pe foaie:

```text
Câștig:          1 monedă la fiecare clic pe monedă
Îmbunătățiri:    Mănușă puternică   +1 monedă la fiecare clic         preț de start 10
                 Robot ajutor       +1 monedă pe secundă              preț de start 25
                 Mini-fabrică       +5 monede pe secundă              preț de start 150
Preț nou:        după fiecare cumpărare, prețul crește (de 1,5 ori)
Salvare:         se salvează singur la 5 secunde și la fiecare cumpărare
```

De ce **cresc prețurile**? Dacă o îmbunătățire ar costa mereu la fel, ai cumpăra la nesfârșit același lucru și jocul ar fi plictisitor. Prețurile care cresc te fac să alegi: mai cumpăr un robot, sau economisesc pentru fabrică?

**Încearcă tu (10 min)**  
- [ ] Scrie regulile pe foaie  
- [ ] Inventează **3 îmbunătățiri ale tale** (nume, ce fac, preț de start). Poți păstra cele din lecție sau poți schimba tema (de exemplu „Grădina de flori”, „Laboratorul de bomboane”)  
- [ ] Creează folderul `Prenume_Nume_W6_L2` cu `index.html`, `stil.css` și `script.js`

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
  <title>Clicker: Fabrica de monede</title>
  <link rel="stylesheet" href="stil.css">
</head>
<body>
  <main class="joc">
    <h1>Fabrica de monede</h1>

    <p class="monede"><span id="monede">0</span> monede</p>
    <p class="viteza">Câștigi <span id="perClic">1</span> pe clic și <span id="perSecunda">0</span> pe secundă</p>

    <button class="moneda" id="moneda" type="button" aria-label="Fă o monedă">🪙</button>

    <h2>Îmbunătățiri</h2>
    <div class="upgradeuri" id="upgradeuri"></div>

    <p class="mesaj" id="mesaj" role="status"></p>
    <button class="mic" id="reset" type="button">Începe de la zero</button>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

Ce este nou:
- Moneda este un **buton** mare, cu emoticoana în el. `aria-label` îi dă un nume pentru cititorul de ecran.  
- `<div id="upgradeuri">` este gol: butoanele de îmbunătățiri le creăm din JavaScript, din lista de date.  
- Mesajele („Ai cumpărat...”) apar în `<p role="status">`.

În `stil.css`:

```css
:root {
  --fundal: #fff8e1;
  --text: #3e2723;
  --accent: #f9a825;
  --card: #ffffff;
  --linie: #ffcc80;
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
  max-width: 460px;
  margin: 0 auto;
  padding: 1rem;
}

.monede {
  margin: 0.5rem 0 0;
  font-size: 2rem;
  font-weight: bold;
}

.viteza {
  margin: 0 0 1rem;
}

.moneda {
  width: 160px;
  height: 160px;
  font-size: 5rem;
  background-color: var(--accent);
  border: 6px solid #e65100;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.1s ease;
}

.moneda:active {
  transform: scale(0.94);
}

.upgradeuri {
  display: grid;
  gap: 10px;
  margin-bottom: 1rem;
}

.upgrade {
  display: block;
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  text-align: left;
  color: var(--text);
  background-color: var(--card);
  border: 3px solid var(--linie);
  border-radius: 10px;
  cursor: pointer;
}

.upgrade:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.upgrade strong {
  display: block;
}

.mesaj {
  min-height: 2em;
  font-weight: bold;
}

.mic {
  min-height: 44px;
  padding: 8px 16px;
  font-size: 0.95rem;
  color: var(--text);
  background-color: transparent;
  border: 2px solid var(--text);
  border-radius: 8px;
  cursor: pointer;
}
```

Efectul `.moneda:active` micșorează puțin moneda cât ții apăsat: pare că o apeși cu adevărat. Butoanele blocate (`:disabled`) sunt mai șterse.

**Încearcă tu (15 min)**  
- [ ] Scrie `index.html` și `stil.css`  
- [ ] Deschide pagina: vezi moneda, titlul și butonul „Începe de la zero”  
- [ ] Schimbă culorile și emoticoana monedei

---

## 3. Lista de îmbunătățiri

### Exemplul 3 — O listă de obiecte

În `script.js`, **datele** jocului stau într-o listă de obiecte (ca în Modulul 4):

```javascript
// ===== Îmbunătățirile din joc =====
// "tip" arată ce se mărește: "clic" (monede pe clic) sau "secunda" (monede pe secundă)
const upgradeuri = [
  { nume: "Mănușă puternică", descriere: "+1 monedă la fiecare clic", pretStart: 10, crestere: 1.5, tip: "clic", valoare: 1, cumparate: 0 },
  { nume: "Robot ajutor", descriere: "+1 monedă pe secundă", pretStart: 25, crestere: 1.5, tip: "secunda", valoare: 1, cumparate: 0 },
  { nume: "Mini-fabrică", descriere: "+5 monede pe secundă", pretStart: 150, crestere: 1.6, tip: "secunda", valoare: 5, cumparate: 0 }
];
```

Fiecare obiect are:
- `nume` și `descriere`: ce vezi pe buton;  
- `pretStart`: cât costă prima dată;  
- `crestere`: de câte ori se înmulțește prețul la fiecare cumpărare (1,5 înseamnă +50%);  
- `tip`: `"clic"` (mărește câștigul pe clic) sau `"secunda"` (mărește câștigul pe secundă);  
- `valoare`: cât adaugă;  
- `cumparate`: de câte ori a fost cumpărată (pornește de la 0).

**Avantajul:** dacă vrei o îmbunătățire nouă, adaugi **un singur obiect** în listă, iar restul programului o folosește singur. Încearcă la final.

**Încearcă tu (15 min)**  
- [ ] Scrie lista cu cele 3 îmbunătățiri ale tale  
- [ ] Verifică virgulele: între obiecte este virgulă, după ultimul obiect nu

---

## 4. Elementele, starea și calculele

### Exemplul 4 — Funcții care calculează

```javascript
// ===== Elemente din pagină =====
const elMonede = document.querySelector("#monede");
const elPerClic = document.querySelector("#perClic");
const elPerSecunda = document.querySelector("#perSecunda");
const butonMoneda = document.querySelector("#moneda");
const zonaUpgrade = document.querySelector("#upgradeuri");
const mesaj = document.querySelector("#mesaj");
const butonReset = document.querySelector("#reset");
```
```javascript
// ===== Starea jocului =====
let monede = 0;
const butoaneUpgrade = [];
```

Starea este foarte scurtă: `monede` (câte ai) și lista `butoaneUpgrade`, în care vom păstra butoanele create. Restul (cât câștigi) **se calculează** din lista de îmbunătățiri. Așa nu ținem aceeași informație în două locuri, unde ar putea să nu se potrivească.

```javascript
// ===== Calcule =====
function pretUpgrade(upgrade) {
  return Math.ceil(upgrade.pretStart * Math.pow(upgrade.crestere, upgrade.cumparate));
}

function calculeazaPerClic() {
  let total = 1;
  for (const upgrade of upgradeuri) {
    if (upgrade.tip === "clic") {
      total = total + upgrade.valoare * upgrade.cumparate;
    }
  }
  return total;
}

function calculeazaPerSecunda() {
  let total = 0;
  for (const upgrade of upgradeuri) {
    if (upgrade.tip === "secunda") {
      total = total + upgrade.valoare * upgrade.cumparate;
    }
  }
  return total;
}

function scrieNumar(numar) {
  return numar.toLocaleString("ro-RO");
}
```

Pe rând:
1. `pretUpgrade`: prețul de acum este `pretStart * crestere` înmulțit cu el însuși de atâtea ori câte ai cumpărat. `Math.pow(1.5, 3)` înseamnă 1,5 la puterea a treia (1,5 × 1,5 × 1,5). `Math.ceil` rotunjește **în sus**, ca prețul să fie număr întreg.  
2. `calculeazaPerClic`: începe de la 1 și adună, pentru fiecare îmbunătățire de tip `"clic"`, `valoare × cumparate`.  
3. `calculeazaPerSecunda`: la fel, pentru tipul `"secunda"`.  
4. `scrieNumar`: `toLocaleString("ro-RO")` scrie numerele în stil românesc, cu separator pentru mii (de exemplu `12.345`), ca să se citească ușor.

**Încearcă tu (20 min)**  
- [ ] Scrie secțiunile  
- [ ] În consolă, scrie `pretUpgrade(upgradeuri[0])` (trebuie să dea `10`) și `calculeazaPerClic()` (trebuie să dea `1`)  
- [ ] În consolă: `upgradeuri[0].cumparate = 2` apoi `pretUpgrade(upgradeuri[0])`: ce preț iese? (`23`: 10 × 1,5 × 1,5 = 22,5, rotunjit în sus) Pune la loc `0`

---

## 5. Afișarea

### Exemplul 5 — Un singur loc care scrie pe ecran

```javascript
// ===== Afișarea =====
function actualizeaza() {
  elMonede.textContent = scrieNumar(monede);
  elPerClic.textContent = scrieNumar(calculeazaPerClic());
  elPerSecunda.textContent = scrieNumar(calculeazaPerSecunda());

  for (let i = 0; i < upgradeuri.length; i++) {
    const upgrade = upgradeuri[i];
    const pret = pretUpgrade(upgrade);
    const buton = butoaneUpgrade[i];

    buton.querySelector("strong").textContent = `${upgrade.nume} (ai ${upgrade.cumparate})`;
    buton.querySelector("span").textContent = `${upgrade.descriere} · Preț: ${scrieNumar(pret)} monede`;
    buton.disabled = monede < pret;
  }
}
```

Funcția `actualizeaza()` **rescrie tot ce se vede**: monedele, câștigul pe clic și pe secundă, apoi numele, descrierea și prețul fiecărui buton. Apoi:

```javascript
buton.disabled = monede < pret;
```

Dacă ai **mai puține** monede decât prețul, butonul este blocat (`true`); altfel este activ. O funcție care afișează tot într-un loc, pe care o apelăm de fiecare dată când se schimbă ceva, este un model foarte folosit: nu mai uiți să schimbi un număr pe ecran.

Pentru că `<strong>` și `<span>` stau în buton, le găsim cu `querySelector` **în interiorul butonului**.

---

## 6. Butoanele de îmbunătățiri și cumpărarea

### Exemplul 6 — Creăm butoane dintr-o listă

```javascript
// ===== Butoanele de îmbunătățiri =====
for (let i = 0; i < upgradeuri.length; i++) {
  const buton = document.createElement("button");
  buton.type = "button";
  buton.className = "upgrade";
  buton.innerHTML = "<strong></strong><span></span>";

  buton.addEventListener("click", function () {
    cumpara(i);
  });

  zonaUpgrade.appendChild(buton);
  butoaneUpgrade.push(buton);
}

function cumpara(numar) {
  const upgrade = upgradeuri[numar];
  const pret = pretUpgrade(upgrade);

  if (monede >= pret) {
    monede = monede - pret;
    upgrade.cumparate = upgrade.cumparate + 1;
    mesaj.textContent = `Ai cumpărat: ${upgrade.nume}!`;
    salveaza();
    actualizeaza();
  }
}
```

- Bucla creează câte un buton pentru **fiecare** obiect din listă. Dacă adaugi un obiect în listă, apare automat un buton nou.  
- `buton.innerHTML = "<strong></strong><span></span>"` pune două etichete goale, pe care le completează `actualizeaza()`. Aici folosim `innerHTML` doar cu un text **scris de noi**, care nu se schimbă niciodată; textul scris de vizitatori nu se pune niciodată cu `innerHTML`.  
- `cumpara(numar)`: dacă ai destule monede, scazi prețul, crești `cumparate`, anunți cumpărătura, **salvezi** și **actualizezi** ecranul. Verificarea `monede >= pret` contează: cu exact cât costă, poți cumpăra.

---

## 7. Clicurile și timpul

### Exemplul 7 — Câștigi la clic și în fiecare secundă

```javascript
// ===== Clicurile și timpul =====
butonMoneda.addEventListener("click", function () {
  monede = monede + calculeazaPerClic();
  actualizeaza();
});

setInterval(function () {
  const castig = calculeazaPerSecunda();
  if (castig > 0) {
    monede = monede + castig;
    actualizeaza();
  }
}, 1000);

setInterval(salveaza, 5000);

butonReset.addEventListener("click", function () {
  if (confirm("Sigur vrei să începi de la zero? Se șterge tot progresul.")) {
    monede = 0;
    for (const upgrade of upgradeuri) {
      upgrade.cumparate = 0;
    }
    salveaza();
    actualizeaza();
    mesaj.textContent = "Ai început un joc nou.";
  }
});
```

1. La clic pe monedă adaugi `calculeazaPerClic()` monede și actualizezi.  
2. Primul `setInterval` rulează la **fiecare secundă** și adaugă `calculeazaPerSecunda()`. `if (castig > 0)` evită un calcul inutil dacă nu ai încă nimic care lucrează.  
3. Al doilea `setInterval(salveaza, 5000)` salvează jocul la 5 secunde (salvarea automată).  
4. Butonul „Începe de la zero” întreabă mai întâi `confirm(...)`, apoi șterge progresul. Confirmarea există ca să nu pierzi tot dintr-o apăsare greșită.

---

## 8. Salvarea

### Exemplul 8 — `JSON` și `localStorage`

```javascript
// ===== Salvarea (doar numere, în browserul tău) =====
function salveaza() {
  const date = {
    monede: monede,
    cumparate: upgradeuri.map(function (upgrade) {
      return upgrade.cumparate;
    })
  };

  try {
    localStorage.setItem("clickerSalvare", JSON.stringify(date));
  } catch (eroare) {
    // Dacă browserul nu permite salvarea, jocul merge oricum
  }
}

function incarca() {
  try {
    const text = localStorage.getItem("clickerSalvare");
    if (text === null) {
      return;
    }

    const date = JSON.parse(text);
    const monedeSalvate = Number(date.monede);

    if (Number.isFinite(monedeSalvate) && monedeSalvate >= 0) {
      monede = Math.floor(monedeSalvate);
    }

    if (Array.isArray(date.cumparate)) {
      for (let i = 0; i < upgradeuri.length; i++) {
        const nr = Number(date.cumparate[i]);
        if (Number.isInteger(nr) && nr >= 0) {
          upgradeuri[i].cumparate = nr;
        }
      }
    }
  } catch (eroare) {
    // Salvare stricată sau lipsă: începem de la zero
    monede = 0;
  }
}
```

`localStorage` păstrează **doar text**. Ca să salvăm mai multe lucruri (monedele și câte îmbunătățiri ai), le punem într-un obiect și îl transformăm în text:

- `JSON.stringify(date)` transformă obiectul în text (de exemplu `{"monede":40,"cumparate":[1,1,0]}`).  
- `JSON.parse(text)` face invers: din text îl readuce în obiect.  
- `upgradeuri.map(function ...)` face o listă nouă, luând din fiecare îmbunătățire numărul `cumparate`.  
- La încărcare **nu avem încredere** în ce găsim: dacă salvarea este lipsă sau stricată, `try … catch` o ignoră și începem de la zero. Verificăm și că numerele sunt corecte (`Number.isFinite`, `Number.isInteger`, `>= 0`).  
- Salvăm doar monedele și numerele de îmbunătățiri, **nu date personale**.

La finalul scriptului pornim jocul:

```javascript
// ===== Start =====
incarca();
actualizeaza();
```

`incarca()` citește salvarea (dacă există), iar `actualizeaza()` desenează prima dată ecranul.

**Încearcă tu (25 min, pentru Exemplele 5–8)**  
- [ ] Scrie toate secțiunile rămase, în ordinea din fișier  
- [ ] Apasă moneda: cresc monedele?  
- [ ] Când ai 10 monede, butonul „Mănușă puternică” se activează? Cumpără îmbunătățirea: prețul crește, iar un clic dă 2 monede?  
- [ ] Cumpără un „Robot ajutor”: monedele cresc singure în fiecare secundă?  
- [ ] Reîncarcă pagina: monedele și îmbunătățirile au rămas?  
- [ ] Apasă „Începe de la zero” și confirmă: se șterge totul?

---

## 9. Verificarea

### Exemplul 9 — Lista de verificare a clickerului

```text
□ Moneda dă monede la clic (la început 1 monedă pe clic)
□ Butoanele sunt blocate când nu ai destule monede și se activează când ai
□ Cumpărarea scade prețul din monede și mărește „ai N” la îmbunătățire
□ Prețul crește după fiecare cumpărare (10, 15, 23, ...)
□ „Mănușa” mărește câștigul pe clic, iar „Robotul” și „Mini-fabrica” pe secundă
□ Monedele automate vin la fiecare secundă
□ La reîncărcare progresul se păstrează (monede și îmbunătățiri)
□ „Începe de la zero” întreabă, apoi șterge progresul
□ Numerele mari se citesc ușor (cu separator pentru mii)
□ Poți juca cu tastatura (Tab, Enter) și cu degetul pe telefon
□ Nu apar erori în consolă
```

**Gata când:**  
- [ ] Toate punctele sunt bifate  
- [ ] Ai făcut o copie de siguranță a folderului

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Fabrica de monede” (obligatoriu)
Folderul `Prenume_Nume_W6_L2` are `index.html`, `stil.css` și `script.js` și jocul merge după lista din Exemplul 9, cu cele 3 îmbunătățiri ale tale.

### Exercițiul B — Îl faci al tău
Schimbă tema (nume, emoticoane, texte), prețurile de start și creșterea prețului (1,3? 2?). Adaugă a patra îmbunătățire în listă. Notează cum se simte jocul: prea ușor, prea greu?

### Exercițiul C — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```javascript
function pretUpgrade(upgrade) {
  return Math.ceil(upgrade.pretStart * Math.pow(upgrade.cumparate, upgrade.crestere));
}

function cumpara(numar) {
  const upgrade = upgradeuri[numar];
  const pret = pretUpgrade(upgrade);
  if (monede > pret) {
    monede = monede - pret;
    upgrade.cumparate = upgrade.cumparate + 1;
  }
}

localStorage.setItem("clickerSalvare", { monede: monede });
```

### Exercițiul D — Explică cu cuvintele tale
Pe foaie: de ce nu ținem „câștigul pe clic” într-o variabilă, ci îl calculăm? De ce transformăm obiectul în text cu `JSON.stringify` înainte să îl salvezi? De ce nu avem încredere în ce citim din `localStorage`?

**Gata când:**  
- [ ] Jocul merge și lista este bifată  
- [ ] Ai răspuns la exercițiile B–D

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Adaugă un mesaj „Felicitări!” când ajungi la 1.000 de monede  
- [ ] Arată câte monede câștigi în total, de la început, într-o variabilă salvată  
- [ ] Arată, lângă fiecare îmbunătățire, cât de repede se plătește (preț împărțit la câștig)  
- [ ] Adaugă o îmbunătățire care se poate cumpăra o singură dată

---

## Greșeli frecvente
1. **`Math.pow` cu argumentele inversate**: întâi baza (1,5), apoi puterea (câte ai cumpărat).  
2. **Salvarea unui obiect fără `JSON.stringify`**: în `localStorage` ajunge textul `[object Object]`.  
3. **`monede > pret` în loc de `>=`**: nu poți cumpăra cu exact cât costă.  
4. **Uitat `actualizeaza()`** după o schimbare: numerele de pe ecran nu se schimbă.  
5. **Virgulă lipsă** între obiectele din listă: eroare de scriere.  
6. **Textul scris de utilizator** pus în `innerHTML`: poate introduce cod în pagină. Folosește `textContent`.

## Recapitulare pe scurt
1. Datele jocului stau într-o listă de obiecte; programul le folosește pe toate la fel.  
2. Ce se poate calcula, se calculează, nu se ține în variabile.  
3. O funcție `actualizeaza()` rescrie tot ce se vede.  
4. `setInterval` face monedele automate și salvarea automată.  
5. `JSON.stringify` și `JSON.parse` fac legătura între obiecte și text.  
6. Salvarea citită se verifică, nu se crede orbește.

## Quiz scurt
1. Ce face `Math.ceil(22.5)`?  
2. Ce face `JSON.stringify`?  
3. De ce este bună o funcție `actualizeaza()`?  
4. Ce se întâmplă dacă `localStorage` conține text stricat?

## Temă
Dă jocul unui membru al familiei și cere să îl joace 5 minute. Notează ce cumpără primul și când se plictisește. Dacă s-a plictisit, schimbă ceva (prețuri, o îmbunătățire nouă). Salvează varianta în `Prenume_Nume_W6_L2`.

## Ce urmează — Lecția 3
Facem **Simon spune**: un joc de memorie cu culori care se aprind într-o ordine pe care trebuie să o repeți, tot mai lungă.

---

## Răspunsuri pentru profesor
- **Exercițiul A:** pentru evaluare folosiți lista din Exemplul 9. Minimul de acceptare: monedă care dă monede, cel puțin o îmbunătățire cumpărabilă cu preț care crește, butoane blocate corect și actualizare corectă a ecranului. Salvarea este ținta, nu minimul.  
- **Exercițiul B:** nu are răspuns unic; verificați că jocul merge după schimbări.  
- **Exercițiul C:** (1) `Math.pow(upgrade.cumparate, upgrade.crestere)` trebuie `Math.pow(upgrade.crestere, upgrade.cumparate)`; (2) `monede > pret` trebuie `monede >= pret`; (3) obiectul trebuie transformat în text: `JSON.stringify({ monede: monede })`.  
- **Exercițiul D:** o valoare calculată nu poate ajunge să nu se potrivească cu datele din care provine; `localStorage` ține doar text; un text citit poate lipsi, fi stricat sau fi schimbat de altcineva, deci îl verificăm.  
- **Notă pentru profesor:** dacă un elev vrea să adauge „sunete” sau „reclame”, discutați despre ce fac jocurile adevărate ca să țină jucătorul mult timp și că jocul nostru nu face asta. Pentru Exemplul 8, nu cereți elevilor să rețină `JSON`; este suficient să știe că `stringify` face text și `parse` face obiect. La teste, progresul se poate șterge din DevTools (*Application → Local Storage*). Dacă un elev are numere foarte mari sau salvare stricată, cereți să apese „Începe de la zero”.
