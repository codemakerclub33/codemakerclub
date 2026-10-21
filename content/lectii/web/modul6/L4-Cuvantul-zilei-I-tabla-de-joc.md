# LECȚIA 4 — Cuvântul zilei I: tabla de joc
**Modulul 6 · Jocuri web · 2 ore**  
**Code Maker Club · Web Game Maker**

> Începem un joc de cuvinte: **Cuvântul zilei**. Ghicești un cuvânt de 5 litere în cel mult 6 încercări, iar jocul îți spune ce litere sunt la locul lor. Se joacă în **două lecții**. Azi facem **tabla** (6 rânduri a câte 5 căsuțe), **tastatura de pe ecran** și scrierea literelor, cu ștergere și cu tasta Enter. Verificarea literelor și cuvântul secret vin în lecția 5.  
> Proiect: **„Cuvântul zilei, partea I”** · folder: `Prenume_Nume_W6_L4` (ex. `Ana_Pop_W6_L4`)

---

## Obiectiv
La finalul orei ai o tablă cu 6 rânduri și 5 coloane, o tastatură pe ecran, poți scrie litere (cu tastatura calculatorului sau cu butoanele de pe ecran), le poți șterge și, cu Enter, treci la rândul următor când ai scris 5 litere.  
**Minim:** o tablă de căsuțe și litere care apar în căsuțe când apeși taste.  
**Ținta orei (Complet):** + tastatură pe ecran, ștergere, Enter care verifică dacă ai 5 litere, mesaje, oprirea jocului când tabla este plină, tastatura calculatorului **și** butoanele de pe ecran care merg la fel, o prezentare de un minut.

## De ce contează
O tablă este o **listă de liste**: 6 rânduri, iar fiecare rând are 5 căsuțe. Ai nevoie de ea în multe jocuri (șah, X și 0, labirint). Mai înveți să **citești tastatura** în JavaScript, ca să poți face jocuri care se joacă fără mouse.

---

## Siguranță înainte de toate
- Cuvintele din joc sunt **simple și potrivite pentru copii**.  
- Jocul nu cere date personale și nu trimite nimic nicăieri.  
- **Pauze:** după 20–30 de minute, ridică-te și mișcă-te.  
- Un joc de cuvinte nu are nevoie de grabă: nu punem cronometru.  
- Jocul se poate juca **fără mouse** (tastatura calculatorului) sau **doar cu mouse-ul/degetul** (tastatura de pe ecran).

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Cum se joacă și ce ținem minte (**Exemplul 1**) |
| 10–25 | Pagina și stilul (**Exemplul 2**) |
| 25–45 | Setările, elementele și starea (**Exemplul 3**) |
| 45–65 | Construim tabla: bucle în bucle (**Exemplul 4**) |
| 65–80 | Construim tastatura de pe ecran (**Exemplul 5**) |
| 80–95 | Scriem și ștergem litere (**Exemplul 6**) |
| 95–110 | Enter și tastatura calculatorului (**Exemplele 7–8**) |
| 110–120 | Verificare, recap și temă |

---

## 1. Cum se joacă

### Exemplul 1 — Regulile și ce ține minte programul

```text
Cuvântul:          5 litere, ales de joc (în lecția 5)
Încercări:         6 rânduri
Tu scrii:          5 litere pe rând, apoi Enter
Jocul arată:       ce litere sunt corecte, ce litere sunt în cuvânt dar în alt loc,
                   ce litere nu sunt deloc (în lecția 5)
```

Programul ține minte:

```text
rand                   în ce rând scrii acum (0 până la 5)
coloana                în ce căsuță scrii acum (0 până la 4)
casute                 lista rândurilor, fiecare cu cele 5 căsuțe
joculSaTerminat        mai poți scrie sau nu
```

**Tabla este o listă de liste:** `casute[2][3]` înseamnă „rândul al treilea, coloana a patra”, pentru că numărăm de la 0.

**Încearcă tu (10 min)**  
- [ ] Desenează pe foaie tabla (6 × 5) și notează în căsuța din colțul de jos dreapta cum o scrii (`casute[5][4]`)  
- [ ] Creează folderul `Prenume_Nume_W6_L4` cu `index.html`, `stil.css` și `script.js`

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
  <title>Cuvântul zilei</title>
  <link rel="stylesheet" href="stil.css">
</head>
<body>
  <main class="joc">
    <h1>Cuvântul zilei</h1>
    <p>Ghicește cuvântul de 5 litere. Ai 6 încercări.</p>

    <div class="tabla" id="tabla" aria-label="Tabla de joc"></div>

    <p class="mesaj" id="mesaj" role="status"></p>

    <div class="tastatura" id="tastatura"></div>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

Tabla și tastatura sunt goale: le construim din JavaScript. `aria-label` pe tablă îi dă un nume. Mesajele apar în `<p role="status">`.

În `stil.css`:

```css
:root {
  --fundal: #ffffff;
  --text: #212121;
  --linie: #9e9e9e;
  --corect: #2e7d32;
  --prezent: #b28900;
  --lipsa: #616161;
  --tasta: #e0e0e0;
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

/* ===== Tabla ===== */
.tabla {
  display: grid;
  gap: 6px;
  margin: 1rem auto;
  max-width: 330px;
}

.rand {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 6px;
}

.casuta {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  font-size: 1.8rem;
  font-weight: bold;
  text-transform: uppercase;
  border: 3px solid var(--linie);
  border-radius: 6px;
}

.casuta.plina {
  border-color: var(--text);
}

.casuta.corect,
.casuta.prezent,
.casuta.lipsa {
  color: white;
  border-color: transparent;
}

.casuta.corect {
  background-color: var(--corect);
}

.casuta.prezent {
  background-color: var(--prezent);
}

.casuta.lipsa {
  background-color: var(--lipsa);
}

/* Un mic semn în colț, ca să nu ne bazăm doar pe culoare */
.casuta.corect::after,
.casuta.prezent::after,
.casuta.lipsa::after {
  position: absolute;
  right: 4px;
  bottom: 1px;
  font-size: 0.75rem;
}

.casuta.corect::after {
  content: "✓";
}

.casuta.prezent::after {
  content: "•";
}

.casuta.lipsa::after {
  content: "×";
}

.mesaj {
  min-height: 3em;
  font-size: 1.1rem;
  font-weight: bold;
}

/* ===== Tastatura de pe ecran ===== */
.tastatura {
  display: grid;
  gap: 6px;
}

.rand-taste {
  display: flex;
  justify-content: center;
  gap: 4px;
}

.tasta {
  flex: 1;
  max-width: 44px;
  min-height: 48px;
  padding: 0;
  font-size: 1rem;
  font-weight: bold;
  color: var(--text);
  background-color: var(--tasta);
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.tasta.mare {
  flex: 1.6;
  max-width: 70px;
  font-size: 0.8rem;
}

.tasta.corect {
  color: white;
  background-color: var(--corect);
}

.tasta.prezent {
  color: white;
  background-color: var(--prezent);
}

.tasta.lipsa {
  color: white;
  background-color: var(--lipsa);
}
```

Stilul conține deja culorile pentru lecția 5 (`corect`, `prezent`, `lipsa`). Deocamdată folosim doar `casuta` și `plina` (o căsuță cu o literă în ea). Remarcă:
- `display: grid` cu `repeat(5, 1fr)` face fiecare rând din 5 căsuțe egale.  
- `aspect-ratio: 1` face căsuțele pătrate.  
- `text-transform: uppercase` arată literele mari.

**Încearcă tu (15 min)**  
- [ ] Scrie `index.html` și `stil.css`  
- [ ] Deschide pagina: vezi titlul și textul  
- [ ] Schimbă culorile din `:root`

---

## 3. Setările, elementele și starea

### Exemplul 3 — Variabilele jocului

În `script.js`:

```javascript
// ===== Setări =====
const LUNGIME = 5;
const INCERCARI = 6;
```
```javascript
// ===== Elemente din pagină =====
const tabla = document.querySelector("#tabla");
const tastatura = document.querySelector("#tastatura");
const mesaj = document.querySelector("#mesaj");
```
```javascript
// ===== Starea jocului =====
let rand = 0;
let coloana = 0;
let joculSaTerminat = false;
const casute = [];
const taste = {};
```

- `LUNGIME` (5 litere) și `INCERCARI` (6 rânduri) sunt setări. Dacă vrei un joc cu 4 litere, schimbi un singur număr.  
- `casute` este lista de rânduri; fiecare element al ei va fi o listă de căsuțe.  
- `taste = {}` este un obiect gol, în care vom pune butoanele tastaturii, ca să le găsim după literă (`taste["A"]`).

**Încearcă tu (10 min)**  
- [ ] Scrie cele trei secțiuni  
- [ ] Verifică în consolă că nu apar erori

---

## 4. Construim tabla

### Exemplul 4 — O buclă în altă buclă

```javascript
// ===== Construim tabla =====
for (let r = 0; r < INCERCARI; r++) {
  const elementRand = document.createElement("div");
  elementRand.className = "rand";
  const casuteRand = [];

  for (let c = 0; c < LUNGIME; c++) {
    const casuta = document.createElement("div");
    casuta.className = "casuta";
    elementRand.appendChild(casuta);
    casuteRand.push(casuta);
  }

  tabla.appendChild(elementRand);
  casute.push(casuteRand);
}
```

- Bucla de **afară** (`r`) creează fiecare rând: un `<div class="rand">`.  
- Bucla de **dinăuntru** (`c`) creează cele 5 căsuțe ale rândului.  
- Pentru fiecare rând, ținem o listă de căsuțe (`casuteRand`). La final o punem în lista mare `casute`: `casute.push(casuteRand)`.  
- Rezultat: 6 rânduri × 5 căsuțe = 30 de căsuțe. Ca să ajungi la una: `casute[rând][coloană]`.

Imaginează un bloc de apartamente: bucla de afară trece prin etaje, cea de dinăuntru prin apartamentele de pe etaj.

**Încearcă tu (20 min)**  
- [ ] Scrie secțiunea  
- [ ] Verifică: apar 6 rânduri a câte 5 căsuțe?  
- [ ] În consolă: `casute[0][0].textContent = "A"` pune un **A** în prima căsuță  
- [ ] Încearcă `casute[5][4].textContent = "Z"`: ajunge în colțul de jos dreapta?

---

## 5. Construim tastatura

### Exemplul 5 — Butoane pentru fiecare literă

```javascript
// ===== Construim tastatura =====
const randuriTaste = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"]
];

function creazaTasta(valoare) {
  const buton = document.createElement("button");
  buton.type = "button";
  buton.dataset.tasta = valoare;

  if (valoare === "ENTER") {
    buton.textContent = "Enter";
    buton.className = "tasta mare";
  } else if (valoare === "BACKSPACE") {
    buton.textContent = "⌫";
    buton.className = "tasta mare";
    buton.setAttribute("aria-label", "Șterge litera");
  } else {
    buton.textContent = valoare;
    buton.className = "tasta";
    taste[valoare] = buton;
  }

  buton.addEventListener("click", function () {
    apasaTasta(valoare);
  });

  return buton;
}

for (const tastePeRand of randuriTaste) {
  const elementRand = document.createElement("div");
  elementRand.className = "rand-taste";

  for (const valoare of tastePeRand) {
    elementRand.appendChild(creazaTasta(valoare));
  }

  tastatura.appendChild(elementRand);
}
```

- `randuriTaste` este o listă de **3 rânduri**, fiecare cu o listă de taste. Primul rând are literele de sus ale tastaturii (QWERTYUIOP), al doilea de la mijloc, iar al treilea are și tastele speciale `ENTER` și `BACKSPACE` (ștergere).  
- `creazaTasta(valoare)` face un buton. Tastele speciale au text „Enter” și „⌫”, clasa `mare` și, pentru ștergere, un `aria-label` („Șterge litera”) ca să o înțeleagă și cititorul de ecran.  
- Fiecare literă este salvată și în `taste`, ca să o găsim mai târziu și să o colorăm.  
- La apăsarea unui buton se apelează `apasaTasta(valoare)`. O scriem în exemplul 8; până atunci o apăsare dă eroare în consolă (este normal).

**Încearcă tu (15 min)**  
- [ ] Scrie secțiunea  
- [ ] Verifică: apar 3 rânduri de taste sub tablă?

---

## 6. Scriem și ștergem litere

### Exemplul 6 — Ce se întâmplă în căsuțe

```javascript
// ===== Scriem și ștergem litere =====
function scrieLitera(litera) {
  if (coloana < LUNGIME) {
    const casuta = casute[rand][coloana];
    casuta.textContent = litera;
    casuta.classList.add("plina");
    coloana = coloana + 1;
  }
}

function stergeLitera() {
  if (coloana > 0) {
    coloana = coloana - 1;
    const casuta = casute[rand][coloana];
    casuta.textContent = "";
    casuta.classList.remove("plina");
  }
}
```

Pe rând:
1. `scrieLitera`: dacă mai este loc în rând (`coloana < LUNGIME`), punem litera în căsuța din rândul și coloana curentă, o marcăm cu clasa `plina` și mergem la coloana următoare.  
2. `stergeLitera`: dacă am scris măcar o literă (`coloana > 0`), **întâi** ne întoarcem o coloană, **apoi** golim căsuța acelei coloane. Ordinea contează!  
3. Dacă rândul este plin, `scrieLitera` nu face nimic: nu poți scrie a șasea literă.

**Încearcă tu (10 min)**  
- [ ] Scrie secțiunea  
- [ ] În consolă: `scrieLitera("A")`, `scrieLitera("B")`, apoi `stergeLitera()`: rămâne doar **A**?

---

## 7. Trimitem rândul și citim tastele

### Exemplul 7 — Enter

```javascript
// ===== Verificarea literelor =====
function trimiteIncercarea() {
  if (coloana < LUNGIME) {
    mesaj.textContent = "Mai ai nevoie de litere. Cuvântul are 5 litere.";
    return;
  }

  // Deocamdată doar trecem la rândul următor. În lecția 5 vom verifica literele.
  rand = rand + 1;
  coloana = 0;

  if (rand === INCERCARI) {
    mesaj.textContent = "Tabla este plină. Gata încercările!";
    joculSaTerminat = true;
  } else {
    mesaj.textContent = `Încercarea ${rand + 1} din ${INCERCARI}.`;
  }
}
```

Deocamdată nu verificăm literele (vine în lecția 5). Funcția doar:
1. verifică dacă rândul are 5 litere; dacă nu, spune „Mai ai nevoie de litere”;  
2. dacă are, trece la rândul următor (`rand + 1`, `coloana = 0`);  
3. dacă tabla este plină (`rand === INCERCARI`), oprește jocul.

### Exemplul 8 — Tastele de pe ecran și de pe calculator

```javascript
// ===== Tastele =====
function apasaTasta(tasta) {
  if (joculSaTerminat) {
    return;
  }

  if (tasta === "ENTER") {
    trimiteIncercarea();
  } else if (tasta === "BACKSPACE") {
    mesaj.textContent = "";
    stergeLitera();
  } else {
    mesaj.textContent = "";
    scrieLitera(tasta);
  }
}

document.addEventListener("keydown", function (eveniment) {
  if (eveniment.ctrlKey || eveniment.metaKey || eveniment.altKey) {
    return;
  }

  if (eveniment.key === "Enter") {
    eveniment.preventDefault();
    apasaTasta("ENTER");
  } else if (eveniment.key === "Backspace") {
    eveniment.preventDefault();
    apasaTasta("BACKSPACE");
  } else if (/^[a-zA-Z]$/.test(eveniment.key)) {
    apasaTasta(eveniment.key.toUpperCase());
  }
});
```

- `apasaTasta(tasta)` primește una dintre valori: `"ENTER"`, `"BACKSPACE"` sau o literă. Din ea alege ce să facă (`if … else if … else`).  
- `joculSaTerminat`: dacă jocul s-a terminat, nu mai facem nimic.  
- Tastatura calculatorului: evenimentul `keydown` ne dă `eveniment.key` (de exemplu `"a"`, `"Enter"`, `"Backspace"`).  
- `/^[a-zA-Z]$/.test(eveniment.key)` verifică dacă tasta este **o singură literă** de la A la Z. Este o expresie regulată: o primești gata făcută. Așa ignorăm tastele precum `Shift`, `F5` sau `Tab`.  
- `toUpperCase()` face litera mare, ca să fie la fel ca pe tastatura de pe ecran.  
- `eveniment.preventDefault()` la `Enter` și `Backspace` oprește comportamentul obișnuit al browserului: altfel un `Enter` când un buton de pe ecran are focus ar apăsa și butonul respectiv.  
- Ignorăm combinațiile cu `Ctrl`, `Alt` sau `Cmd`, ca să nu stricăm comenzile browserului (de exemplu `Ctrl + R` pentru reîncărcare).  
- Literele cu diacritice (ă, â, î, ș, ț) nu sunt acceptate: cuvintele noastre nu au diacritice.

**Încearcă tu (25 min)**  
- [ ] Scrie cele două secțiuni  
- [ ] Scrie cu tastatura calculatorului 5 litere: apar în primul rând?  
- [ ] Apasă `Backspace`: se șterge ultima literă?  
- [ ] Apasă `Enter` cu mai puțin de 5 litere: apare mesajul?  
- [ ] Folosește tastatura de pe ecran: face același lucru?  
- [ ] Umple toată tabla (6 rânduri): apare „Tabla este plină” și nu mai poți scrie?

---

## 8. Verificarea

### Exemplul 9 — Lista de verificare a tablei

```text
□ Tabla are 6 rânduri a câte 5 căsuțe
□ Literele apar în căsuța potrivită, de la stânga la dreapta
□ Nu poți scrie a șasea literă într-un rând
□ Backspace șterge ultima literă (și nu face nimic dacă rândul este gol)
□ Enter cu mai puțin de 5 litere dă mesajul „Mai ai nevoie de litere”
□ Enter cu 5 litere trece la rândul următor
□ Tastatura de pe ecran și cea a calculatorului fac același lucru
□ După 6 rânduri, jocul se oprește cu mesajul
□ Tastele precum Shift, Tab sau F5 nu scriu nimic
□ Merge pe telefon (tastatura de pe ecran, DevTools 375 px)
□ Nu apar erori în consolă
```

**Gata când:**  
- [ ] Toate punctele sunt bifate  
- [ ] Ai făcut o copie de siguranță a folderului

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Cuvântul zilei, partea I” (obligatoriu)
Folderul `Prenume_Nume_W6_L4` are `index.html`, `stil.css` și `script.js`, iar tabla și tastaturile merg după lista din Exemplul 9.

### Exercițiul B — Îl faci al tău
Schimbă culorile, titlul și mesajele. Schimbă `LUNGIME` la 4 sau 6 și vezi ce se întâmplă (atenție: stilul are 5 coloane în `.rand`, deci schimbă și numărul din `repeat(5, 1fr)`). Notează ce ai schimbat și de ce a trebuit să modifici și CSS-ul.

### Exercițiul C — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```javascript
for (let r = 0; r <= INCERCARI; r++) {
  // creează un rând
}

function scrieLitera(litera) {
  if (coloana <= LUNGIME) {
    casute[rand][coloana].textContent = litera;
    coloana = coloana + 1;
  }
}

function stergeLitera() {
  if (coloana > 0) {
    casute[rand][coloana].textContent = "";
    coloana = coloana - 1;
  }
}
```

### Exercițiul D — Explică cu cuvintele tale
Pe foaie: ce înseamnă `casute[2][3]`? De ce avem nevoie de două bucle una în alta pentru tablă? De ce ignorăm `Shift` și `Ctrl`?

**Gata când:**  
- [ ] Tabla merge și lista este bifată  
- [ ] Ai răspuns la exercițiile B–D

---

## Bonus / Provocare (dacă ai terminat)
- [ ] La `Enter`, dacă tabla este plină, arată un buton „Reîncepe” care o golește  
- [ ] Adaugă un mic efect de „tremur” al rândului când scrii prea puține litere (dar scurt, fără licăriri)  
- [ ] Permite și tasta `Delete` pentru ștergere  
- [ ] Fă o tablă cu 7 încercări

---

## Greșeli frecvente
1. **`<=` în loc de `<`** într-o buclă: apare un rând în plus, iar `casute[6]` nu există.  
2. **Ștergerea în ordine greșită**: golești căsuța de la coloana curentă (cea goală) în loc de cea dinainte.  
3. **Numărătoarea de la 1**: `casute[1][1]` nu este prima căsuță. Prima este `casute[0][0]`.  
4. **Literele mici și mari amestecate**: de aceea folosim `toUpperCase()`.  
5. **Uitat `preventDefault`** la `Enter` și `Backspace`: browserul face și el ce vrea.  
6. **Rând plin, dar pui litera**: nu verifici `coloana < LUNGIME`.

## Recapitulare pe scurt
1. Tabla este o listă de liste; ajungem la o căsuță cu `casute[rând][coloană]`.  
2. Două bucle una în alta creează 6 × 5 căsuțe.  
3. O singură funcție (`apasaTasta`) servește și tastatura de pe ecran, și pe cea a calculatorului.  
4. `keydown` și `eveniment.key` ne spun ce tastă a fost apăsată.  
5. Starea (`rand`, `coloana`, `joculSaTerminat`) spune unde ne aflăm.

## Quiz scurt
1. Ce este `casute[0][4]`?  
2. Ce face `toUpperCase()`?  
3. De ce ștergerea scade întâi `coloana`?  
4. Ce face `joculSaTerminat`?

## Temă
Joacă scrierea cu un coleg: unul spune un cuvânt de 5 litere, celălalt îl scrie pe tablă cu tastatura. Verificați dacă merge ștergerea. Dacă ai idei de cuvinte pentru lecția următoare (5 litere, fără diacritice), notează cuvintele pe foaie. Salvează varianta în `Prenume_Nume_W6_L4`.

## Ce urmează — Lecția 5
Terminăm **Cuvântul zilei**: jocul alege un cuvânt secret în fiecare zi, verifică literele cu culori (verde, galben, gri) și arată cine a câștigat.

---

## Răspunsuri
- **Quiz scurt:** (1) căsuța din primul rând, a cincea coloană (ultima din rând), pentru că numărăm de la 0; (2) face litera mare; (3) pentru că `coloana` arată următoarea căsuță goală, deci trebuie să ne întoarcem la ultima literă scrisă, abia apoi o golim; (4) ține minte dacă jocul s-a terminat; dacă este `true`, tastele nu mai fac nimic.  
- **Exercițiul A:** pentru evaluare folosiți lista din Exemplul 9. Minimul de acceptare: tabla și scrierea literelor în căsuțe; tastatura de pe ecran și Enter sunt ținta.  
- **Exercițiul B:** nu are răspuns unic; verificați că elevul își dă seama că schimbarea lungimii cere și o schimbare în CSS.  
- **Exercițiul C:** (1) `r <= INCERCARI` trebuie `r < INCERCARI`; (2) `coloana <= LUNGIME` trebuie `coloana < LUNGIME`; (3) la ștergere, `coloana` trebuie scăzută **înainte** de a goli căsuța.  
- **Exercițiul D:** `casute[2][3]` este rândul al treilea, coloana a patra; prima buclă trece prin rânduri, a doua prin căsuțele fiecărui rând; ignorăm tastele speciale ca să nu scriem litere false și să nu stricăm comenzile browserului.  
- **Notă pentru profesor:** nu cereți elevilor să rețină expresia regulată `/^[a-zA-Z]$/`; este o formulă gata făcută. Dacă un elev cere cuvinte cu diacritice, explicați că tastatura și lista noastră sunt fără diacritice, ca să fie simplu. Dacă `Enter` pare să facă două lucruri, căutați `preventDefault`. Pentru testul pe telefon, folosiți DevTools.
