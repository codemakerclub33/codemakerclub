# LECȚIA 3 — Simon spune: culori, secvențe și memorie
**Modulul 6 · Jocuri web · 2 ore**  
**Code Maker Club · Web Game Maker**

> Azi facem **Simon spune**, un joc de memorie. Patru butoane colorate se aprind într-o anumită ordine, iar tu trebuie să repeți exact aceeași ordine. După fiecare rundă reușită, ordinea se face **mai lungă cu o culoare**. Cât de multe culori poți ține minte? Înveți o **listă care crește**, comparații pas cu pas și o funcție care **așteaptă** (`async` și `await`).  
> Proiect: **„Simon spune”** · folder: `Prenume_Nume_W6_L3` (ex. `Ana_Pop_W6_L3`)

---

## Obiectiv
La finalul orei ai un joc de memorie care merge: jocul arată o ordine de culori, tu o repeți, dacă ai nimerit ordinea crește cu o culoare, iar la prima greșeală jocul se termină și îți arată câte runde ai reușit.  
**Minim:** 4 butoane colorate, o ordine care se aprinde și verificarea apăsărilor tale.  
**Ținta orei (Complet):** + ordine care crește cu o culoare la fiecare rundă, numărul rundei, record salvat în browser, mesaje clare la fiecare pas, butoane care **nu** pot fi apăsate în timp ce jocul arată ordinea, nume scrise pe butoane (nu doar culori), un joc fără licăriri rapide, buton „Mai joc o dată” și o prezentare de un minut.

## De ce contează
Simon este un exemplu bun pentru **o listă care crește** și pentru **mai multe stări** (acum se arată ordinea / acum este rândul tău). Înveți și cum să faci un program să **aștepte** fără să înghețe pagina, ceea ce este nevoie în multe jocuri.

---

## Siguranță înainte de toate
- **Fără licăriri rapide:** fiecare culoare rămâne aprinsă **0,6 secunde**, apoi stinsă 0,3 secunde. Asta înseamnă mai puțin de 2 aprinderi pe secundă, deci în regulă. Nu face culorile să licărească mai repede de 3 ori pe secundă: pot deranja pe cei sensibili.  
- Pe fiecare buton scrie **numele culorii** („Roșu”, „Verde” ...), ca jocul să se poată juca și de cine nu distinge bine culorile.  
- Jocul nu are sunet. Dacă adaugi sunete la bonus, **volumul trebuie să fie mic** și să existe un buton pentru oprire.  
- **Pauze:** după 20–30 de minute în fața ecranului, ridică-te și mișcă-te.  
- Recordul se salvează doar în browserul tău și este un număr, nu date personale.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Regulile jocului și stările (**Exemplul 1**) |
| 10–25 | Pagina și stilul (**Exemplul 2**) |
| 25–40 | Elementele și starea (**Exemplul 3**) |
| 40–55 | Funcția care așteaptă (**Exemplul 4**) |
| 55–75 | Arătăm ordinea (**Exemplul 5**) |
| 75–95 | Apăsările jucătorului (**Exemplul 6**) |
| 95–110 | Începutul, sfârșitul și verificarea (**Exemplele 7–8**) |
| 110–120 | Recap și temă |

---

## 1. Regulile jocului

### Exemplul 1 — Stările jocului

Pe foaie:

```text
Ce vezi:       4 butoane colorate (roșu, verde, albastru, galben), runda, record
Ce se întâmplă: jocul aprinde pe rând culorile din ordinea secretă
Ce faci tu:     apeși aceleași culori, în aceeași ordine
Dacă nimerești: runda crește, ordinea mai primește o culoare
Dacă greșești:  jocul se termină; vezi câte runde ai reușit
```

Jocul are **două stări** care alternează:

```text
1. Jocul arată ordinea      → butoanele NU se pot apăsa
2. Este rândul jucătorului  → butoanele se pot apăsa
```

Programul ține minte, în variabile:

```text
secventa          lista culorilor, ca numere: 0 = roșu, 1 = verde, 2 = albastru, 3 = galben
pozitie           la a câta culoare din ordine ai ajuns, când repeți
acceptaApasari    este rândul tău? (da / nu)
record            cele mai multe runde reușite
```

Exemplu: dacă `secventa` este `[2, 0, 0]`, jocul aprinde albastru, roșu, roșu, iar tu trebuie să apeși albastru, roșu, roșu.

**Încearcă tu (10 min)**  
- [ ] Scrie regulile pe foaie  
- [ ] Desenează cum arată ecranul  
- [ ] Creează folderul `Prenume_Nume_W6_L3` cu `index.html`, `stil.css` și `script.js`

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
  <title>Simon spune</title>
  <link rel="stylesheet" href="stil.css">
</head>
<body>
  <main class="joc">
    <h1>Simon spune</h1>
    <p>Privește ordinea în care se aprind culorile, apoi repetă ordinea. La fiecare rundă ordinea crește cu o culoare.</p>

    <div class="panou">
      <p>Runda: <strong id="runda">0</strong></p>
      <p>Record: <strong id="record">0</strong></p>
    </div>

    <div class="tabla" id="tabla">
      <button class="culoare rosu" type="button" data-nr="0">Roșu</button>
      <button class="culoare verde" type="button" data-nr="1">Verde</button>
      <button class="culoare albastru" type="button" data-nr="2">Albastru</button>
      <button class="culoare galben" type="button" data-nr="3">Galben</button>
    </div>

    <p class="mesaj" id="mesaj" role="status">Apasă „Start” ca să începi.</p>
    <button class="buton" id="start" type="button">Start</button>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

Ce este nou:
- Fiecare buton are `data-nr="0"` ... `data-nr="3"`: un **atribut propriu**, în care ținem numărul culorii. Din JavaScript îl citim cu `buton.dataset.nr`.  
- Pe butoane scrie **numele culorii**, ca să nu ne bazăm doar pe culoare.

În `stil.css`:

```css
:root {
  --fundal: #263238;
  --text: #ffffff;
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
  font-size: 1.1rem;
}

.panou p {
  margin: 0.3rem 0;
}

.tabla {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 1rem 0;
}

.culoare {
  aspect-ratio: 1;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  border: 5px solid transparent;
  border-radius: 16px;
  cursor: pointer;
  opacity: 0.55;
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.culoare:disabled {
  cursor: not-allowed;
}

.rosu {
  background-color: #c62828;
}

.verde {
  background-color: #2e7d32;
}

.albastru {
  background-color: #1565c0;
}

.galben {
  background-color: #f9a825;
  color: #263238;
}

/* Culoarea "aprinsă": mai luminoasă, mai mare și cu chenar alb */
.culoare.aprins {
  opacity: 1;
  transform: scale(1.05);
  border-color: white;
}

.mesaj {
  min-height: 3em;
  font-size: 1.1rem;
  font-weight: bold;
}

.buton {
  min-height: 48px;
  padding: 12px 32px;
  font-size: 1.1rem;
  font-weight: bold;
  color: #263238;
  background-color: #ffd54f;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.buton:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (prefers-reduced-motion: reduce) {
  .culoare {
    transition: none;
  }
}
```

- Un buton obișnuit este **mai șters** (`opacity: 0.55`). Clasa `aprins` îl face luminos, mai mare și cu chenar alb: se vede că s-a aprins **și** dacă nu distingi culorile.  
- `transition` face trecerea lină, dar scurtă. Pentru cine a cerut „mișcare redusă”, o oprim.

**Încearcă tu (15 min)**  
- [ ] Scrie `index.html` și `stil.css`  
- [ ] Deschide pagina: vezi cele 4 butoane și „Start”  
- [ ] În DevTools, adaugă clasa `aprins` unui buton, ca să vezi cum arată

---

## 3. Elementele și starea

### Exemplul 3 — Variabilele jocului

În `script.js`:

```javascript
// ===== Elemente din pagină =====
const butoane = document.querySelectorAll(".culoare");
const elRunda = document.querySelector("#runda");
const elRecord = document.querySelector("#record");
const mesaj = document.querySelector("#mesaj");
const butonStart = document.querySelector("#start");
```
```javascript
// ===== Starea jocului =====
let secventa = [];
let pozitie = 0;
let acceptaApasari = false;
let record = 0;

try {
  record = Number(localStorage.getItem("recordSimon")) || 0;
} catch (eroare) {
  record = 0;
}
elRecord.textContent = record;
```

- `querySelectorAll(".culoare")` dă lista tuturor celor 4 butoane. Ele au numerele 0–3, în ordinea din pagină, deci `butoane[2]` este butonul albastru.  
- `secventa = []` este o listă goală, pe care o vom completa.  
- Recordul se citește ca în lecția 1 (`Number(...) || 0` și `try … catch`).

**Încearcă tu (10 min)**  
- [ ] Scrie secțiunile  
- [ ] În consolă, scrie `butoane[2].textContent` (trebuie să dea `Albastru`)

---

## 4. O funcție care așteaptă

### Exemplul 4 — `pauza`, `aprinde` și `stinge`

```javascript
// ===== Pauza: o funcție care "așteaptă" =====
function pauza(milisecunde) {
  return new Promise(function (gata) {
    setTimeout(gata, milisecunde);
  });
}
```
```javascript
// ===== Aprinderea unei culori =====
function aprinde(numar) {
  butoane[numar].classList.add("aprins");
}

function stinge(numar) {
  butoane[numar].classList.remove("aprins");
}
```

`aprinde(numar)` și `stinge(numar)` adaugă și scot clasa `aprins` de pe butonul cu numărul respectiv.

`pauza(milisecunde)` este nouă. Ca să arătăm ordinea, trebuie să: **aprindem** o culoare, **așteptăm** 0,6 secunde, o **stingem**, **așteptăm** 0,3 secunde, trecem la următoarea. Un program nu poate pur și simplu să „stea” (ar îngheța pagina). De aceea `pauza` întoarce o **promisiune**: „te anunț când au trecut `milisecunde`”. `setTimeout(gata, milisecunde)` apelează `gata` după timpul cerut, iar promisiunea se încheie.

Cum o folosim, în funcția următoare:

```javascript
await pauza(600);
```

`await` înseamnă: „**așteaptă** aici terminarea pauzei, dar lasă pagina să meargă”. Regula este simplă: **`await` se poate scrie doar într-o funcție care începe cu `async`** (`async function nume() { ... }`).

Nu trebuie să știi cum merge o promisiune pe dinăuntru. Rețin doar: `async` în fața funcției, `await pauza(...)` când vreau să aștept.

**Încearcă tu (10 min)**  
- [ ] Scrie cele două secțiuni  
- [ ] În consolă: `aprinde(1)` (se aprinde verdele), apoi `stinge(1)`

---

## 5. Arătăm ordinea

### Exemplul 5 — `async function` cu `for … of`

```javascript
// ===== Arătăm ordinea =====
async function arataSecventa() {
  acceptaApasari = false;
  mesaj.textContent = "Privește cu atenție...";
  await pauza(800);

  for (const numar of secventa) {
    aprinde(numar);
    await pauza(600);
    stinge(numar);
    await pauza(300);
  }

  pozitie = 0;
  acceptaApasari = true;
  mesaj.textContent = "Acum tu! Repetă ordinea.";
}

function adaugaPas() {
  const nou = Math.floor(Math.random() * 4);
  secventa.push(nou);
  elRunda.textContent = secventa.length - 1;
}
```

Pe rând:
1. `acceptaApasari = false` și mesajul „Privește cu atenție...”: acum butoanele **nu** răspund.  
2. `await pauza(800)`: o mică pauză înainte să înceapă.  
3. `for (const numar of secventa)`: pentru fiecare culoare din listă (în ordine): o aprindem, așteptăm 0,6 secunde, o stingem, așteptăm 0,3 secunde. Fiecare culoare rămâne aprinsă 0,6 secunde: **fără licăriri rapide**.  
4. La final `pozitie = 0` (repetăm de la prima culoare), `acceptaApasari = true` și mesajul „Acum tu!”.

**Încearcă tu (10 min)**  
- [ ] Scrie funcția  
- [ ] În consolă: `secventa = [0, 2, 3]` apoi `arataSecventa()`: se aprind roșu, albastru, galben? (Verifică și mesajele)

---

## 6. Apăsările jucătorului

### Exemplul 6 — Comparăm pas cu pas

```javascript
// ===== Apăsările jucătorului =====
async function apasa(numar) {
  if (!acceptaApasari) {
    return;
  }

  aprinde(numar);
  setTimeout(function () {
    stinge(numar);
  }, 300);

  if (numar !== secventa[pozitie]) {
    terminaJocul();
    return;
  }

  pozitie = pozitie + 1;

  if (pozitie === secventa.length) {
    acceptaApasari = false;
    elRunda.textContent = secventa.length;
    mesaj.textContent = "Bravo! Urmează runda următoare.";
    await pauza(1000);
    adaugaPas();
    arataSecventa();
  }
}

for (const buton of butoane) {
  buton.addEventListener("click", function () {
    apasa(Number(buton.dataset.nr));
  });
}
```

Cum se verifică:
1. `if (!acceptaApasari) return;`: dacă nu este rândul tău, ieșim imediat din funcție și apăsarea nu face nimic.  
2. Culoarea apăsată se aprinde scurt, ca să vezi că s-a „simțit” apăsarea.  
3. **Compararea:** `numar !== secventa[pozitie]`. `pozitie` este la a câta culoare din ordine ești. Dacă ai apăsat altă culoare decât cea așteptată, ai greșit: `terminaJocul()`.  
4. Dacă ai nimerit, `pozitie = pozitie + 1`: te muți la culoarea următoare.  
5. Dacă `pozitie === secventa.length`, ai repetat **toată** ordinea. Crește runda, un mesaj de bravo, o pauză de o secundă (`await pauza(1000)`), mai adaugi o culoare cu `adaugaPas()` și arăți ordinea cea nouă.  
6. Bucla de la sfârșit leagă fiecare buton de `apasa(...)`: `Number(buton.dataset.nr)` transformă numărul din `data-nr` (care este text) într-un număr.

Exemplu: ordinea este `[2, 0, 0]`. `pozitie` pornește de la 0. Apeși albastru (2) = `secventa[0]` → bine, `pozitie` devine 1. Apeși roșu (0) = `secventa[1]` → bine. Apeși roșu = `secventa[2]` → bine, iar `pozitie` ajunge 3 = lungimea listei: ai terminat runda.

**Încearcă tu (15 min)**  
- [ ] Scrie funcția și bucla  
- [ ] Verifică în consolă (cu `secventa` setată de tine) că o apăsare greșită oprește jocul  
- [ ] Observă: în timpul arătării ordinii, apăsările sunt ignorate

---

## 7. Începutul și sfârșitul

### Exemplul 7 — Pornim, adăugăm un pas, terminăm

```javascript
// ===== Începutul și sfârșitul =====
function pornesteJocul() {
  secventa = [];
  elRunda.textContent = 0;
  butonStart.disabled = true;
  adaugaPas();
  arataSecventa();
}

function terminaJocul() {
  acceptaApasari = false;
  const rundeTerminate = secventa.length - 1;
  let text = `Greșit! Runde terminate: ${rundeTerminate}.`;

  if (rundeTerminate > record) {
    record = rundeTerminate;
    elRecord.textContent = record;
    text = text + " Record nou!";
    try {
      localStorage.setItem("recordSimon", record);
    } catch (eroare) {
      // Dacă browserul nu permite salvarea, jocul merge oricum
    }
  }

  mesaj.textContent = text;
  butonStart.textContent = "Mai joc o dată";
  butonStart.disabled = false;
}

butonStart.addEventListener("click", pornesteJocul);
```

- `pornesteJocul()`: golește lista, pune runda la 0, **dezactivează** butonul „Start”, adaugă prima culoare și arată ordinea.  
- `adaugaPas()`: alege o culoare între 0 și 3 (`Math.floor(Math.random() * 4)`) și o pune la **sfârșitul** listei cu `push`. Ordinea veche rămâne, cu o culoare în plus.  
- `terminaJocul()`: calculează rundele terminate (lungimea listei minus 1, pentru că ultima nu a fost terminată), schimbă mesajul, salvează recordul dacă este nou și reactivează butonul de start.

Un detaliu: `arataSecventa()` și `apasa()` sunt `async`, dar funcțiile care le apelează (`pornesteJocul`) nu trebuie să fie: le apelăm fără `await`, iar ele își văd de treabă singure.

**Încearcă tu (20 min)**  
- [ ] Scrie secțiunea  
- [ ] Apasă „Start”: se aprinde o culoare, apoi apare „Acum tu!”?  
- [ ] Repetă corect 3 runde: ordinea crește?  
- [ ] Greșește intenționat: se termină jocul cu mesajul și recordul?  
- [ ] Reîncarcă pagina: recordul a rămas?

---

## 8. Verificarea

### Exemplul 8 — Lista de verificare a jocului

```text
□ Se văd 4 butoane colorate cu numele lor, runda și recordul
□ „Start” pornește jocul și se dezactivează cât timp se joacă
□ Se aprinde prima culoare, apoi apare „Acum tu!”
□ Cu butoanele apăsate în ordinea corectă, runda crește și ordinea primește o culoare
□ O apăsare greșită termină jocul, cu mesajul și numărul de runde
□ În timp ce se arată ordinea, apăsările nu fac nimic
□ După „Game over”, apăsările nu fac nimic până la un nou „Start”
□ Recordul se salvează și rămâne după reîncărcare
□ Fiecare culoare este aprinsă 0,6 secunde, fără licăriri rapide
□ Merge cu tastatura (Tab, Enter) și pe telefon
□ Nu apar erori în consolă
```

**Gata când:**  
- [ ] Toate punctele sunt bifate  
- [ ] Ai făcut o copie de siguranță a folderului

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Simon spune” (obligatoriu)
Folderul `Prenume_Nume_W6_L3` are `index.html`, `stil.css` și `script.js` și jocul merge după lista din Exemplul 8.

### Exercițiul B — Îl faci al tău
Schimbă culorile și numele lor, durata aprinderii (dar **nu mai repede** de 0,3 secunde), mesajele și titlul. Încearcă să faci ordinea să înceapă cu **2 culori**, nu cu una. Notează ce ai schimbat.

### Exercițiul C — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```javascript
async function arataSecventa() {
  for (const numar of secventa) {
    aprinde(numar);
    pauza(600);
    stinge(numar);
  }
}

function adaugaPas() {
  const nou = Math.floor(Math.random() * 3);
  secventa.push(nou);
}

// în funcția apasa:
if (numar === secventa[pozitie]) {
  terminaJocul();
  return;
}
```

### Exercițiul D — Explică cu cuvintele tale
Pe foaie: ce reține variabila `pozitie`? De ce ignorăm apăsările când `acceptaApasari` este `false`? Ce face `await`?

**Gata când:**  
- [ ] Jocul merge și lista este bifată  
- [ ] Ai răspuns la exercițiile B–D

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Fă ordinea să se arate mai repede pe măsură ce runda crește (dar nu sub 0,3 secunde pe culoare)  
- [ ] Adaugă un mod „Dificil” cu 6 butoane  
- [ ] Adaugă **sunete** cu volum mic (cu `AudioContext` și un oscilator, sau cu fișiere audio din pachetul media) și un buton „Oprește sunetul”  
- [ ] Poți juca și cu tastele 1, 2, 3, 4 de la tastatură

---

## Greșeli frecvente
1. **Uitat `await`** în fața lui `pauza(...)`: culorile se aprind toate odată.  
2. **`await` într-o funcție fără `async`**: eroare de scriere.  
3. **`Math.random() * 3`** când ai 4 culori: culoarea 3 nu apare niciodată.  
4. **Comparație inversă**: `===` în loc de `!==` termină jocul când nimerești.  
5. **Nu blochezi apăsările** în timpul arătării ordinii.  
6. **Uitat `pozitie = 0`** la începutul rundei: repetarea începe de unde ai rămas.

## Recapitulare pe scurt
1. Ordinea este o listă care crește cu `push`.  
2. Jocul are două stări; o variabilă (`acceptaApasari`) spune în care ne aflăm.  
3. `async function` și `await pauza(...)` ne lasă să așteptăm fără să înghețăm pagina.  
4. `pozitie` arată unde am ajuns la repetarea ordinii.  
5. `data-nr` și `dataset` ne lasă să legăm date de butoane.  
6. Un joc corect nu licărește repede și nu se bazează doar pe culori.

## Quiz scurt
1. Ce face `secventa.push(2)`?  
2. Când se poate scrie `await`?  
3. Ce se întâmplă dacă `acceptaApasari` este `false` și apeși un buton?  
4. De ce scriem numele culorilor pe butoane?

## Temă
Joacă Simon cu un coleg, pe rând, și notează cine ajunge cel mai departe. Încercați împreună o idee nouă (6 butoane, alte culori, ordine mai rapidă). Salvează varianta în `Prenume_Nume_W6_L3`.

## Ce urmează — Lecția 4
Începem **Cuvântul zilei**: un joc de cuvinte cu o tablă de litere și o tastatură pe ecran. Azi avem doar tabla; litera cu litera, verificarea o facem în lecția 5.

---

## Răspunsuri pentru profesor
- **Exercițiul A:** pentru evaluare folosiți lista din Exemplul 8. Minimul de acceptare: 4 butoane, ordine care se aprinde, verificarea apăsărilor și sfârșitul jocului la greșeală; creșterea ordinii cu o culoare este ținta.  
- **Exercițiul B:** nu are răspuns unic; verificați că durata aprinderii nu scade sub 0,3 secunde (siguranță pentru licăriri).  
- **Exercițiul C:** (1) lipsește `await` în fața lui `pauza(600)` (culorile se aprind și se sting aproape deodată); (2) `Math.random() * 3` trebuie `* 4`; (3) comparația este inversă: trebuie `numar !== secventa[pozitie]`. Mai lipsește `await pauza(...)` după `stinge(numar)`, dar nu este o greșeală de sintaxă.  
- **Exercițiul D:** `pozitie` ține minte la a câta culoare din ordine a ajuns jucătorul; ignorăm apăsările ca să nu apese în timpul arătării ordinii; `await` așteaptă terminarea unei promisiuni (aici, a unei pauze) fără să înghețe pagina.  
- **Notă pentru profesor:** `async` și `await` sunt prezentate ca o „rețetă”: nu cereți explicația promisiunilor. Dacă un elev vrea culori mai rapide, explicați regula licăririlor: mai puțin de 3 pe secundă. Dacă butoanele răspund în timpul arătării ordinii, căutați `acceptaApasari`. Dacă ordinea nu se arată deloc, cereți elevului să citească eroarea din consolă (de obicei `async` lipsă sau un nume scris greșit).
