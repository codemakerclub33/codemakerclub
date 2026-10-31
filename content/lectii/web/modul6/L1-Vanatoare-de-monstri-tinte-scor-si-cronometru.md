# LECȚIA 1 — Vânătoare de monștri: ținte, scor și cronometru
**Modulul 6 · Jocuri web · 2 ore**  
**Code Maker Club · Web Game Maker**

> Începem Modulul 6 cu primul joc adevărat: **Vânătoare de monștri**. Nouă vizuini, un monstru prietenos care iese dintr-una după puțin timp, tu apeși pe el ca să îl prinzi, iar un **cronometru** numără 30 de secunde. La final afli scorul și vezi dacă ai doborât recordul. Înveți să faci un joc cu **timp** (`setInterval`), **întâmplare** (`Math.random`) și **scor**.  
> Proiect: **„Vânătoare de monștri”** · folder: `Prenume_Nume_W6_L1` (ex. `Ana_Pop_W6_L1`)

---

## Obiectiv
La finalul orei ai un joc care merge: pornești jocul, monstrul apare în vizuini diferite, scorul crește când îl nimerești, timpul scade de la 30 la 0, iar la final jocul se oprește și îți arată un mesaj.  
**Minim:** 9 vizuini, un monstru care apare în locuri diferite, scor care crește la apăsare și un buton „Începe jocul”.  
**Ținta orei (Complet):** + cronometru de 30 de secunde, oprirea jocului la 0, mesaj final în funcție de scor, recordul salvat în browser, buton „Mai joc o dată”, vizuini care se pot folosi și cu tastatura, comentarii în cod și o prezentare de un minut.

## De ce contează
Aproape orice joc are aceleași trei lucruri: **o stare** (scorul, timpul), **o buclă** (ceva se întâmplă la intervale de timp) și **reguli** (ce se întâmplă când apeși). Dacă înțelegi cum merge acest joc mic, poți construi multe alte jocuri.

---

## Siguranță înainte de toate
- Monștrii sunt **prietenoși**: îi „prindem”, nu îi rănim. Alege și tu o imagine veselă (emoticoană).  
- Jocul nu are sunet și nu are licăriri rapide: monstrul se mută la fiecare 0,8 secunde.  
- **Pauze:** după 20–30 de minute în fața ecranului, ridică-te, privește pe fereastră și mișcă-te puțin.  
- Recordul se salvează **doar în browserul tău** și este doar un număr. Nu cerem și nu salvăm date personale.  
- Jocul se joacă singur sau cu un coleg alături, nu cu persoane necunoscute din internet.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Cum arată jocul și ce reguli are (**Exemplul 1**) |
| 10–25 | Pagina și stilul (**Exemplul 2**) |
| 25–45 | Setările, starea și vizuinile (**Exemplul 3**) |
| 45–55 | Recordul salvat în browser (**Exemplul 4**) |
| 55–75 | Monstrul: apare, dispare, se prinde (**Exemplul 5**) |
| 75–95 | Cronometrul și sfârșitul jocului (**Exemplul 6**) |
| 95–110 | Verificarea (**Exemplul 7**) |
| 110–120 | Recap și temă |

---

## 1. Cum arată jocul

### Exemplul 1 — Regulile, pe foaie

Înainte de cod, scrie pe foaie **regulile**. Un joc bun are reguli simple:

```text
Numele jocului:     Vânătoare de monștri
Ce vezi:            9 vizuini (3 rânduri a câte 3), scor, timp, record
Ce se întâmplă:     la fiecare 0,8 secunde un monstru iese dintr-o vizuină
Ce faci tu:         apeși pe monstru ca să îl prinzi
Punctele:           +1 pentru fiecare monstru prins
Cât durează:        30 de secunde
Cum se termină:     timpul ajunge la 0; vezi scorul și recordul
```

Un joc are mereu **o stare**, adică lucrurile pe care programul trebuie să le țină minte:

```text
scor              câți monștri am prins
timpRamas         câte secunde au mai rămas
joculMerge        este jocul pornit? (da / nu)
pozitieMonstru    în ce vizuină este monstrul acum (sau -1, dacă nu este niciunul)
record            cel mai mare scor
```

**Încearcă tu (10 min)**  
- [ ] Scrie regulile jocului pe foaie  
- [ ] Alege emoticoana pentru monstru (de exemplu 👾, 👻, 🐲, 🦖) și un titlu al tău  
- [ ] Creează folderul `Prenume_Nume_W6_L1` cu `index.html`, `stil.css` și `script.js`

---

## 2. Pagina și stilul

### Exemplul 2 — HTML și CSS

Pagina are un titlu, un panou cu scorul, timpul și recordul, o zonă goală pentru vizuini (le facem din JavaScript), un buton și un loc pentru mesaje. În `index.html`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vânătoare de monștri</title>
  <link rel="stylesheet" href="stil.css">
</head>
<body>
  <main class="joc">
    <h1>Vânătoare de monștri</h1>
    <p>Monștrii prietenoși ies din vizuini. Apasă pe ei ca să îi prinzi! Ai 30 de secunde.</p>

    <div class="panou">
      <p>Scor: <strong id="scor">0</strong></p>
      <p>Timp: <strong id="timp">30</strong> s</p>
      <p>Record: <strong id="record">0</strong></p>
    </div>

    <div class="grila" id="grila"></div>

    <button class="buton" id="start" type="button">Începe jocul</button>
    <p class="mesaj" id="mesaj" role="status"></p>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

Ce este nou:
- `<div class="grila" id="grila"></div>` este **gol**: vizuinile le creăm din JavaScript, într-o buclă.  
- `role="status"` pe mesaj: cititorul de ecran anunță mesajul final.  
- `<strong id="scor">`: aici va scrie JavaScript scorul, timpul și recordul.

În `stil.css` pune stilul (nu trebuie să îl înveți pe de rost: l-ai învățat în Modulul 3 și 5):

```css
:root {
  --fundal: #1b1f3b;
  --card: #2d3561;
  --accent: #ffd166;
  --text: #f4f4f9;
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
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 0 0.5rem;
  font-size: 1.1rem;
}

.panou p {
  margin: 0;
}

.grila {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 1rem;
}

.vizuina {
  aspect-ratio: 1;
  font-size: 2.5rem;
  background-color: var(--card);
  border: 4px solid #5c6bc0;
  border-radius: 50%;
  cursor: pointer;
}

.vizuina.monstru {
  background-color: #7e57c2;
}

.buton {
  min-height: 48px;
  padding: 12px 28px;
  font-size: 1.1rem;
  font-weight: bold;
  color: #1b1f3b;
  background-color: var(--accent);
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.buton:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.mesaj {
  min-height: 3em;
  font-size: 1.1rem;
  font-weight: bold;
}
```

Două lucruri de remarcat: `grid-template-columns: repeat(3, 1fr)` face **3 coloane**, iar `aspect-ratio: 1` face fiecare vizuină un **pătrat**, care cu `border-radius: 50%` devine cerc.

**Încearcă tu (10 min)**  
- [ ] Scrie `index.html` și `stil.css`  
- [ ] Deschide pagina: vezi titlul, panoul și butonul (vizuinile apar în exemplul următor)  
- [ ] Schimbă culorile din `:root` după preferința ta

---

## 3. Setările, starea și vizuinile

### Exemplul 3 — Variabile și o buclă care creează butoane

În `script.js`, începe cu setările, elementele din pagină și starea jocului:

```javascript
// ===== Setări =====
const NR_VIZUINI = 9;
const DURATA = 30;
```
```javascript
// ===== Elemente din pagină =====
const grila = document.querySelector("#grila");
const elScor = document.querySelector("#scor");
const elTimp = document.querySelector("#timp");
const elRecord = document.querySelector("#record");
const butonStart = document.querySelector("#start");
const mesaj = document.querySelector("#mesaj");
```
```javascript
// ===== Starea jocului =====
let scor = 0;
let timpRamas = DURATA;
let joculMerge = false;
let pozitieMonstru = -1;
let ceasTimp = null;
let ceasMonstru = null;
let record = 0;
```

- Valorile care nu se schimbă (`NR_VIZUINI`, `DURATA`) sunt scrise cu **litere mari**, ca „setări”. Dacă vrei 12 vizuini sau 20 de secunde, schimbi un singur număr.  
- `let` este pentru valorile care se schimbă în timpul jocului.  
- `ceasTimp` și `ceasMonstru` vor ține „ceasurile” pornite cu `setInterval` ca să le putem opri.

Apoi creezi cele 9 vizuini cu o buclă `for` (ca în Modulul 4):

```javascript
// ===== Vizuinile =====
const vizuini = [];

for (let i = 0; i < NR_VIZUINI; i++) {
  const vizuina = document.createElement("button");
  vizuina.type = "button";
  vizuina.className = "vizuina";
  vizuina.setAttribute("aria-label", `Vizuina ${i + 1}`);
  vizuina.addEventListener("click", function () {
    apasaVizuina(i);
  });
  grila.appendChild(vizuina);
  vizuini.push(vizuina);
}
```

Pe rând:
1. `createElement("button")` creează un buton nou. Folosim **butoane**, nu `div`-uri: se pot apăsa și cu tastatura (Tab și Enter).  
2. `aria-label` dă butonului un nume pentru cititorul de ecran („Vizuina 3”), pentru că în el nu scrie nimic.  
3. `addEventListener("click", ...)` spune ce se întâmplă la apăsare: se apelează `apasaVizuina(i)`. Fiecare buton își „aduce aminte” de numărul lui `i`.  
4. `appendChild(vizuina)` pune butonul în pagină, iar `vizuini.push(vizuina)` îl pune și în lista `vizuini`, ca să îl găsim mai târziu după număr.  
5. `apasaVizuina` o scriem în Exemplul 5; cât timp lipsește, o apăsare dă eroare în consolă și este normal.

**Încearcă tu (20 min)**  
- [ ] Scrie setările, elementele, starea și bucla  
- [ ] Deschide pagina: apar 9 cercuri într-o grilă 3 × 3?  
- [ ] Schimbă `NR_VIZUINI` la 6 sau 12 și vezi ce se întâmplă (grila are 3 coloane)  
- [ ] Pune la loc `9` după încercare

---

## 4. Recordul salvat în browser

### Exemplul 4 — `localStorage` pentru un număr

```javascript
// ===== Recordul (salvat în browser) =====
try {
  record = Number(localStorage.getItem("recordMonstri")) || 0;
} catch (eroare) {
  record = 0;
}
elRecord.textContent = record;
```

Aici folosești ce ai învățat în Modulul 5:
- `localStorage.getItem("recordMonstri")` citește recordul salvat sau `null`, dacă nu există.  
- `Number(...) || 0`: transformă textul în număr, iar dacă nu iese un număr (sau este `null`), folosește `0`.  
- `try … catch`: dacă browserul nu permite salvarea, jocul merge oricum.  
- Salvăm **doar un număr**, deloc date personale.

**Încearcă tu (10 min)**  
- [ ] Scrie secțiunea  
- [ ] Reîncarcă: la „Record” apare `0`  
- [ ] Deschide DevTools → *Application* → *Local Storage*, ca să vezi mai târziu cheia `recordMonstri`

---

## 5. Monstrul

### Exemplul 5 — Apare, dispare, se prinde

```javascript
// ===== Monstrul =====
function ascundeMonstru() {
  if (pozitieMonstru !== -1) {
    const vizuina = vizuini[pozitieMonstru];
    vizuina.textContent = "";
    vizuina.classList.remove("monstru");
    vizuina.setAttribute("aria-label", `Vizuina ${pozitieMonstru + 1}`);
    pozitieMonstru = -1;
  }
}

function arataMonstru() {
  const veche = pozitieMonstru;
  ascundeMonstru();

  let noua = Math.floor(Math.random() * NR_VIZUINI);
  while (noua === veche) {
    noua = Math.floor(Math.random() * NR_VIZUINI);
  }

  pozitieMonstru = noua;
  vizuini[noua].textContent = "👾";
  vizuini[noua].classList.add("monstru");
  vizuini[noua].setAttribute("aria-label", `Vizuina ${noua + 1}: monstru`);
}

function apasaVizuina(numar) {
  if (joculMerge && numar === pozitieMonstru) {
    scor = scor + 1;
    elScor.textContent = scor;
    ascundeMonstru();
  }
}
```

Pe bucăți:
1. `ascundeMonstru()` șterge monstrul din vizuina în care este (dacă este vreunul) și îl notează ca „nu este niciunul” (`-1`).  
2. `arataMonstru()` alege o vizuină nouă. `Math.random()` dă un număr între 0 și 1 (de exemplu 0,37). Îl înmulțim cu 9 și îl rotunjim în jos cu `Math.floor`: obținem un număr întreg de la 0 la 8, exact pozițiile vizuinilor.  
3. Bucla `while` repetă alegerea **cât timp** vizuina nouă este aceeași cu cea veche: monstrul nu apare de două ori în același loc.  
4. `textContent = "👾"` pune monstrul în vizuină, iar clasa `monstru` o colorează.  
5. `aria-label` se schimbă și el („Vizuina 5: monstru”), ca să știe și cititorul de ecran unde este monstrul.  
6. `apasaVizuina(numar)`: dacă jocul merge **și** ai apăsat vizuina în care este monstrul, scorul crește cu 1 și monstrul dispare. Dacă ai apăsat altă vizuină, nu se întâmplă nimic (fără pedeapsă).

**Încearcă tu (20 min)**  
- [ ] Scrie secțiunea  
- [ ] Deocamdată jocul nu pornește singur: în consolă (F12) scrie `arataMonstru()` și apasă Enter ca să vezi un monstru  
- [ ] Apasă pe vizuina cu monstrul: scorul nu crește încă, pentru că `joculMerge` este `false` (se pornește în exemplul următor)

---

## 6. Cronometrul și sfârșitul

### Exemplul 6 — `setInterval` și `clearInterval`

```javascript
// ===== Jocul =====
function pornesteJocul() {
  scor = 0;
  timpRamas = DURATA;
  joculMerge = true;
  elScor.textContent = scor;
  elTimp.textContent = timpRamas;
  mesaj.textContent = "";
  butonStart.disabled = true;

  arataMonstru();
  ceasMonstru = setInterval(arataMonstru, 800);
  ceasTimp = setInterval(trecePeSecunda, 1000);
}

function trecePeSecunda() {
  timpRamas = timpRamas - 1;
  elTimp.textContent = timpRamas;

  if (timpRamas === 0) {
    terminaJocul();
  }
}

function terminaJocul() {
  joculMerge = false;
  clearInterval(ceasMonstru);
  clearInterval(ceasTimp);
  ascundeMonstru();

  let text = `Timpul a trecut! Monștri prinși: ${scor}.`;

  if (scor > record) {
    record = scor;
    elRecord.textContent = record;
    text = text + " Record nou!";
    try {
      localStorage.setItem("recordMonstri", record);
    } catch (eroare) {
      // Dacă browserul nu permite salvarea, jocul merge oricum
    }
  } else if (scor >= 15) {
    text = text + " Foarte bine!";
  } else {
    text = text + " Mai încearcă, poți mai mult!";
  }

  mesaj.textContent = text;
  butonStart.textContent = "Mai joc o dată";
  butonStart.disabled = false;
}

butonStart.addEventListener("click", pornesteJocul);
```

Cum merge:
1. `setInterval(functie, milisecunde)` **repetă** o funcție la intervale. `setInterval(arataMonstru, 800)` mută monstrul din 0,8 în 0,8 secunde. `setInterval(trecePeSecunda, 1000)` scade timpul în fiecare secundă. Atenție: scrii numele funcției **fără paranteze** (`arataMonstru`, nu `arataMonstru()`), pentru că nu vrei să o apelezi acum, ci să o dai ceasului.  
2. `setInterval` întoarce un număr (un „bilet”) pe care îl păstrăm în `ceasMonstru` și `ceasTimp`.  
3. `clearInterval(bilet)` oprește ceasul. La final **trebuie** să oprim amândouă ceasurile, altfel monstrul ar continua să apară.  
4. `terminaJocul()` alege mesajul cu `if … else if … else`: un record nou are prioritate, apoi cel puțin 15 monștri înseamnă „Foarte bine”, altfel un îndemn blând.  
5. `butonStart.disabled = true` oprește butonul cât timp se joacă (altfel ai porni mai multe ceasuri odată). La final îl pornim la loc și schimbăm textul.  
6. Ultima linie leagă butonul de funcția `pornesteJocul`.

**Încearcă tu (20 min)**  
- [ ] Scrie secțiunea  
- [ ] Apasă „Începe jocul”: apare monstrul? Scade timpul?  
- [ ] Prinde monștri: crește scorul?  
- [ ] La 0: se oprește jocul și apare mesajul?  
- [ ] Joacă de două ori: scorul se pune la 0 la a doua rundă?  
- [ ] Dacă nu merge, citește mesajul roșu din consolă

---

## 7. Verificarea

### Exemplul 7 — Lista de verificare a jocului

```text
□ Se văd 9 vizuini într-o grilă 3 × 3
□ „Începe jocul” pornește jocul și se dezactivează cât timp se joacă
□ Monstrul apare într-o vizuină și se mută la fiecare 0,8 secunde
□ Monstrul nu apare de două ori la rând în aceeași vizuină
□ Apăsarea pe monstru crește scorul și face monstrul să dispară
□ Apăsarea pe o vizuină goală nu schimbă scorul
□ Timpul scade de la 30 la 0, în fiecare secundă
□ La 0 jocul se oprește și monstrul dispare
□ Mesajul final se potrivește scorului (record nou / foarte bine / mai încearcă)
□ Recordul rămâne după reîncărcarea paginii
□ Poți juca și cu tastatura (Tab până la vizuină, Enter)
□ Nu apar erori în consolă
□ Jocul merge pe telefon (DevTools, 375 px)
```

**Gata când:**  
- [ ] Toate punctele sunt bifate  
- [ ] Ai făcut o copie de siguranță a folderului

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Vânătoare de monștri” (obligatoriu)
Folderul `Prenume_Nume_W6_L1` are `index.html`, `stil.css` și `script.js` și jocul merge după lista din Exemplul 7.

### Exercițiul B — Îl faci al tău
Schimbă: emoticoana monstrului, culorile, numărul de secunde, viteza (800 ms) și textele mesajelor. Notează pe foaie ce ai schimbat și cum se simte jocul (mai ușor / mai greu).

### Exercițiul C — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```javascript
function apasaVizuina(numar) {
  if (joculMerge = true && numar === pozitieMonstru) {
    scor = scor + 1;
  }
}

const noua = Math.random() * NR_VIZUINI;

ceasMonstru = setInterval(arataMonstru(), 800);
```

### Exercițiul D — Explică cu cuvintele tale
Pe foaie: ce este „starea” unui joc? Ce face `setInterval` și ce face `clearInterval`? De ce rotunjim cu `Math.floor` numărul aleator?

**Gata când:**  
- [ ] Jocul merge și lista este bifată  
- [ ] Ai răspuns la exercițiile B–D

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Mărește viteza pe parcurs: după 15 secunde, monstrul apare la fiecare 600 ms (oprește ceasul vechi și pornește unul nou)  
- [ ] Adaugă un **monstru rău** (🎃) care scade 3 puncte dacă îl apeși, ca să înveți să te uiți atent  
- [ ] Arată un al doilea monstru în același timp  
- [ ] Adaugă nivele de dificultate (ușor, mediu, greu) cu trei butoane

---

## Greșeli frecvente
1. **`=` în loc de `===`** într-un `if`: `=` pune o valoare, `===` compară.  
2. **`setInterval(arataMonstru(), 800)`**: cu paranteze, funcția rulează o dată, imediat, iar ceasul primește rezultatul ei. Corect: fără paranteze.  
3. **Uitat `clearInterval`**: ceasul rămâne pornit și după sfârșitul jocului.  
4. **`Math.random() * 9` fără `Math.floor`**: iese un număr cu zecimale (3,7), care nu este o poziție.  
5. **Butonul de start apăsat de mai multe ori**: pornește mai multe ceasuri. De aceea îl dezactivăm.  
6. **`Number(...)` uitat** la citirea recordului: `"12"` este text, nu număr.

## Recapitulare pe scurt
1. Un joc are o **stare**, o **buclă** și **reguli**.  
2. `setInterval` repetă o funcție; `clearInterval` o oprește.  
3. `Math.floor(Math.random() * n)` dă un număr întreg de la 0 la n - 1.  
4. `if … else if … else` alege mesajul final.  
5. `localStorage` ține minte recordul (doar un număr).  
6. Butoanele reale se pot folosi și cu tastatura.

## Quiz scurt
1. Ce număr poate da `Math.floor(Math.random() * 9)`?  
2. De ce scriem `arataMonstru` fără paranteze în `setInterval`?  
3. Ce face `clearInterval`?  
4. De ce este butonul de start dezactivat în timpul jocului?

## Temă
Joacă jocul cu un membru al familiei, pe rând. Notează scorurile și întreabă ce s-ar schimba (mai repede, mai încet, alt monstru). Încearcă o schimbare. Salvează varianta în `Prenume_Nume_W6_L1`.

## Ce urmează — Lecția 2
Facem un **clicker**: apeși pe o monedă ca să câștigi monede, cumperi îmbunătățiri care lucrează în locul tău și jocul se **salvează singur**.

---

## Răspunsuri
- **Quiz scurt:** (1) un număr întreg de la 0 la 8 (exact pozițiile celor 9 vizuini); (2) pentru că vrem să dăm funcția ceasului, nu să o apelăm acum; cu paranteze ar rula o singură dată, imediat; (3) oprește ceasul pornit cu `setInterval`, ca funcția să nu se mai repete; (4) ca să nu pornească mai multe ceasuri deodată dacă apeși de mai multe ori.  
- **Exercițiul A:** pentru evaluare folosiți lista din Exemplul 7. Minimul de acceptare: grilă de vizuini, monstru care apare în locuri diferite, scor corect și buton de start; dacă elevul nu termină, acceptați și un joc fără cronometru care merge complet.  
- **Exercițiul B:** nu are răspuns unic; verificați că jocul merge după schimbări.  
- **Exercițiul C:** (1) `joculMerge = true` este atribuire; trebuie `joculMerge && numar === pozitieMonstru`; (2) lipsește `Math.floor`: `Math.floor(Math.random() * NR_VIZUINI)`; (3) `setInterval(arataMonstru(), 800)` apelează funcția imediat; corect: `setInterval(arataMonstru, 800)`.  
- **Exercițiul D:** starea este ce ține minte programul (scor, timp, poziție); `setInterval` repetă o funcție la intervale, iar `clearInterval` oprește repetarea; `Math.random()` dă zecimale, iar `Math.floor` le taie ca să obținem o poziție întreagă.  
- **Notă pentru profesor:** pentru Exemplul 3, explicați pe tablă că fiecare buton își aduce aminte de `i` (variabila `let` din buclă este nouă la fiecare rundă); nu cereți elevilor să rețină explicația tehnică. Dacă un elev spune că jocul „merge și după ce se termină”, căutați `clearInterval` sau un buton de start apăsat de mai multe ori. Recordul din `localStorage` poate fi șters din DevTools (*Application → Local Storage*) pentru teste. Verificați alegerea emoticoanei: monștrii trebuie să rămână prietenoși, fără imagini violente.
