# LECȚIA 8 — Detalii care fac diferența: mod întunecat și buton „sus”
**Modulul 5 · Site complet: HTML + CSS + JavaScript · 2 ore**  
**Code Maker Club · Web Builder**

> Site-urile bune au mici detalii care le fac plăcute: un **mod întunecat** (pentru ochii obosiți seara), care se **ține minte** data viitoare, un buton **„înapoi sus”** care apare doar când derulezi, anul din subsol care se schimbă singur și o derulare lină care se oprește pentru cine nu vrea mișcare.  
> Proiect: **„Detaliile site-ului”** · folder: `Prenume_Nume_W5` (continuăm în același folder)

---

## Obiectiv
La finalul orei, site-ul are un buton care schimbă între mod luminos și întunecat (și alegerea rămâne la reîncărcare), un buton „sus” care apare după ce derulezi și un an automat în subsol, pe toate paginile.  
**Minim:** buton pentru modul întunecat, care schimbă culorile paginii.  
**Ținta orei (Complet):** + variabile CSS pentru tema întunecată, `aria-pressed` pe buton, salvarea alegerii cu `localStorage` în `try … catch`, buton „sus” care apare și dispare, derulare lină cu respectarea `prefers-reduced-motion`, anul din subsol cu `new Date().getFullYear()`.

## De ce contează
Un mod întunecat poate ajuta pe cei care se uită mult la ecran sau care sunt sensibili la lumină. Iar un site care **respectă preferințele** oamenilor (de exemplu, mișcarea redusă) este mai prietenos pentru toți.

---

## Siguranță înainte de toate
- `localStorage` păstrează date **doar în browserul de pe acel calculator**. Salvăm **doar** tema („luminos” sau „intunecat”): nimic personal.  
- Unele browsere pot **bloca** salvarea (de exemplu în modul privat). Folosim `try … catch`, ca site-ul să meargă oricum.  
- Derularea lină nu se aplică la cine a cerut „mișcare redusă” în calculator sau telefon.  
- Butoanele sunt `<button>`: se pot folosi cu tastatura. Au cel puțin 44 px.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare: variabile CSS, `classList`, evenimente |
| 10–35 | Tema întunecată: HTML și CSS (**Exemplul 1**) |
| 35–60 | Tema întunecată: JavaScript și memorarea (**Exemplul 2**) |
| 60–85 | Butonul „sus” (**Exemplul 3**) |
| 85–95 | Anul din subsol (**Exemplul 4**) |
| 95–110 | Mișcarea redusă și testele (**Exemplele 5–6**) |
| 110–120 | Recap și temă |

---

## 1. Tema întunecată: HTML și CSS

### Exemplul 1 — Un buton și o a doua paletă

În **toate cele 3 pagini**, în antet, **după** `</nav>`, adaugă:

```html
<button class="buton-tema" id="butonTema" type="button" aria-pressed="false">Mod întunecat</button>
```

`aria-pressed="false"` spune cititorului de ecran că este un buton **care poate fi apăsat și rămâne apăsat** (ca un comutator), acum oprit.

În `stil.css`, **sub** `:root { ... }`, adaugă a doua paletă:

```css
body.intunecat {
  --principala: #0b1b33;
  --accent: #ff6b6b;
  --fundal: #121c2e;
  --text: #eef2f7;
  --card: #1d2b45;
  --linie: #3a5a80;
}
```

Dacă `<body>` are clasa `intunecat`, aceste variabile le **înlocuiesc** pe cele din `:root`. Pentru că **aproape toate** culorile paginii sunt scrise cu `var(--...)`, schimbăm tema cu o singură clasă. De aceea am pus culorile în variabile încă din lecția 2!

Și stilul butonului, lângă butonul de meniu:

```css
.buton-tema {
  min-height: 44px;
  padding: 8px 14px;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
}

.buton-tema:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
```

Folosește culorile tale în `body.intunecat`: fundal închis, text deschis, accent mai luminos. Verifică din nou că textul **se citește**.

**Încearcă tu (20 min)**  
- [ ] Adaugă butonul în cele 3 pagini  
- [ ] Adaugă paleta întunecată și stilul butonului  
- [ ] Test rapid: scrie `class="intunecat"` în `<body>` la mână și vezi dacă toată pagina devine întunecată, apoi scoate clasa

---

## 2. Tema întunecată: JavaScript

### Exemplul 2 — Comutatorul și memoria

În `script.js`, **la sfârșit**, adaugă:

```javascript
// ===== Modul întunecat (se ține minte în browser) =====
const butonTema = document.querySelector("#butonTema");

function seteazaTema(intunecat) {
  document.body.classList.toggle("intunecat", intunecat);

  if (butonTema !== null) {
    butonTema.setAttribute("aria-pressed", intunecat);
    butonTema.textContent = intunecat ? "Mod luminos" : "Mod întunecat";
  }
}

let temaSalvata = null;
try {
  temaSalvata = localStorage.getItem("tema");
} catch (eroare) {
  temaSalvata = null;
}

seteazaTema(temaSalvata === "intunecat");

if (butonTema !== null) {
  butonTema.addEventListener("click", function () {
    const acumIntunecat = !document.body.classList.contains("intunecat");
    seteazaTema(acumIntunecat);

    try {
      localStorage.setItem("tema", acumIntunecat ? "intunecat" : "luminos");
    } catch (eroare) {
      // Dacă browserul nu permite salvarea, tema merge doar pe pagina curentă
    }
  });
}
```

Pe bucăți:
1. `classList.toggle("intunecat", intunecat)`: cu **al doilea argument**, `toggle` nu mai alege singur: dacă `intunecat` este `true`, pune clasa; dacă este `false`, o scoate.  
2. `intunecat ? "Mod luminos" : "Mod întunecat"`: **operatorul „condițional”**, o scriere scurtă pentru `if … else`: dacă tema este întunecată, butonul spune „Mod luminos” (ce se întâmplă dacă îl apeși); altfel, „Mod întunecat”.  
3. `localStorage.getItem("tema")` citește ce s-a salvat data trecută (sau `null`, dacă nu s-a salvat nimic). `localStorage.setItem("tema", "intunecat")` salvează.  
4. `try { ... } catch (eroare) { ... }`: **încearcă** codul din `try`; dacă apare o eroare (de exemplu, browserul nu permite salvarea), nu se oprește tot scriptul, ci se execută `catch`.  
5. `seteazaTema(temaSalvata === "intunecat")` rulează **la încărcarea paginii**: aplică tema salvată.  
6. La clic: aflăm tema de acum (`contains`), o inversăm (`!`), o aplicăm și o salvăm.

Așa, când treci la altă pagină a site-ului, **tema rămâne**.

**Încearcă tu (25 min)**  
- [ ] Scrie scriptul  
- [ ] Apasă butonul: se schimbă culorile și textul butonului?  
- [ ] Mergi pe altă pagină și reîncarcă: tema a rămas?  
- [ ] Inspectează butonul: `aria-pressed` se schimbă între `true` și `false`?

---

## 3. Butonul „sus”

### Exemplul 3 — Apare doar când derulezi

În **toate cele 3 pagini**, înainte de `<script src="script.js">`, adaugă:

```html
<button class="sus" id="butonSus" type="button" aria-label="Înapoi sus" hidden>↑</button>
```

În `stil.css`:

```css
/* ===== Butonul „sus” ===== */
.sus {
  position: fixed;
  right: 16px;
  bottom: 16px;
  width: 48px;
  height: 48px;
  font-size: 1.5rem;
  color: white;
  background-color: var(--accent);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}

.sus[hidden] {
  display: none;
}
```

Aceeași regulă ca la galerie: dacă o clasă pune `display`, atributul `hidden` nu mai merge singur, deci avem `.sus[hidden]`. În `script.js`:

```javascript
// ===== Butonul „sus” =====
const butonSus = document.querySelector("#butonSus");

if (butonSus !== null) {
  window.addEventListener("scroll", function () {
    butonSus.hidden = window.scrollY < 300;
  });

  butonSus.addEventListener("click", function () {
    const redus = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: redus ? "auto" : "smooth" });
  });
}
```

- Evenimentul `scroll` se declanșează când derulezi pagina.  
- `window.scrollY` este **câți pixeli** ai derulat de sus. Dacă este **sub 300**, `hidden` este `true`, deci butonul se ascunde; de la 300 în sus, apare.  
- `window.scrollTo({ top: 0, ... })` duce pagina sus. `behavior: "smooth"` face derularea lină.  
- `window.matchMedia("(prefers-reduced-motion: reduce)").matches` este `true` dacă omul a cerut în calculatorul lui **mișcare redusă**. Atunci folosim `"auto"` (sărim direct sus), nu `"smooth"`.

**Încearcă tu (25 min)**  
- [ ] Adaugă butonul în HTML, în cele 3 pagini, apoi CSS și JavaScript  
- [ ] Adaugă temporar mai mult conținut (de exemplu 20 de paragrafe) ca să poți derula  
- [ ] Verifică: butonul apare după ce derulezi puțin și te duce sus?  
- [ ] Verifică tema întunecată și pe buton și pe pagină

---

## 4. Anul din subsol

### Exemplul 4 — `new Date()`

În **toate cele 3 pagini**, schimbă subsolul:

```html
<p>© <span id="an">2026</span> Clubul animalelor · site făcut la Code Maker Club</p>
```

Iar în `script.js`:

```javascript
// ===== Anul din subsol =====
const an = document.querySelector("#an");

if (an !== null) {
  an.textContent = new Date().getFullYear();
}
```

`new Date()` este data de acum; `.getFullYear()` scoate anul. Dacă JavaScript nu merge, în `<span>` rămâne `2026`, scris de mână.

**Încearcă tu (5 min)**  
- [ ] Adaugă `span` și codul  
- [ ] Schimbă temporar `2026` în HTML cu `1999`: după reîncărcare trebuie să apară anul real

---

## 5. Mișcarea redusă

### Exemplul 5 — Derulare lină și respect pentru preferințe

În `stil.css`, în secțiunea de bază, adaugă (lângă `* { ... }`):

```css
html {
  scroll-behavior: smooth;
}
```

Linkurile către părți din pagină vor derula lin. La **sfârșitul** fișierului adaugă:

```css
/* ===== Pentru cine a cerut mișcare redusă ===== */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .card,
  .buton-cta,
  .mini img,
  .meniu a {
    transition: none;
  }
}
```

Dacă omul a cerut mișcare redusă, **oprim** derularea lină și tranzițiile. Poți încerca: în DevTools (F12) → `⋮` → *More tools* → *Rendering* → *Emulate CSS media feature prefers-reduced-motion*.

---

## 6. Testele

### Exemplul 6 — Lista de verificare a detaliilor

```text
□ Butonul de temă este în antet, în toate cele 3 pagini
□ Modul întunecat schimbă TOATE culorile și textul se citește
□ Textul butonului se schimbă (Mod întunecat / Mod luminos)
□ aria-pressed se schimbă între false și true
□ Tema rămâne după reîncărcare și pe celelalte pagini
□ Butonul „sus” apare doar după ce derulez
□ Butonul „sus” duce pagina sus
□ Anul din subsol este cel de acum
□ Cu „mișcare redusă”, derularea nu mai este lină
□ Fără erori în consolă, pe nicio pagină
```

**Gata când:**  
- [ ] Toate punctele sunt bifate  
- [ ] Ai făcut o copie de siguranță a folderului

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Detaliile site-ului” (obligatoriu)
Cele 3 pagini au modul întunecat care se ține minte, buton „sus” și an automat, iar lista din Exemplul 6 este bifată.

### Exercițiul B — Îl faci al tău
Alege **alte culori** pentru tema întunecată, schimbă pragul de 300 px al butonului „sus” și simbolul de pe buton. Notează ce ai schimbat.

### Exercițiul C — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```javascript
butonTema.addEventListener("click", function () {
  document.body.classList.toggle(".intunecat");
  localStorage.setItem("tema");
});

window.addEventListener("scroll", function () {
  butonSus.hidden = window.scrollY > 300;
});
```

### Exercițiul D — Explică cu cuvintele tale
Pe foaie: de ce folosim variabile CSS pentru culori? De ce este nevoie de `try … catch` la `localStorage`? Ce înseamnă „mișcare redusă” și de ce o respectăm?

**Gata când:**  
- [ ] Detaliile merg pe toate paginile  
- [ ] Ai răspuns la exercițiile B–D

---

## Bonus / Provocare (dacă ai terminat)
- [ ] La prima vizită, alege tema după preferința calculatorului: `window.matchMedia("(prefers-color-scheme: dark)").matches`  
- [ ] Adaugă un contor „Ai vizitat site-ul de N ori”, cu `localStorage` (doar un număr, fără nimic personal)  
- [ ] Fă butonul „sus” să apară cu o mică animație de `opacity`

---

## Greșeli frecvente
1. **`toggle(".intunecat")`** cu punct: în `classList` scrii doar `"intunecat"`.  
2. **`setItem("tema")`** fără valoare: trebuie două argumente (cheie și valoare).  
3. **`scrollY > 300`** pus invers: butonul ar fi ascuns exact când trebuie să se vadă.  
4. **Culori scrise direct** (nu în variabile) în unele reguli: acele părți nu se schimbă în modul întunecat.  
5. **Fără `.sus[hidden]`**: butonul se vede tot timpul.  
6. **Fără `try … catch`**: într-un browser care blochează salvarea apare o eroare.

## Recapitulare pe scurt
1. O a doua paletă, la `body.intunecat`, înlocuiește variabilele.  
2. `classList.toggle(nume, true/false)` pune sau scoate clasa.  
3. `localStorage` ține minte tema, în `try … catch`.  
4. `scroll` și `window.scrollY` arată cât ai derulat.  
5. `prefers-reduced-motion` ne spune să nu mai folosim mișcare.

## Quiz scurt
1. Ce face `body.intunecat`?  
2. Ce face `try … catch`?  
3. Ce arată `window.scrollY`?  
4. Cum aflăm dacă omul vrea mișcare redusă?

## Temă
Cere unui membru al familiei să încerce site-ul seara, în modul întunecat. Întreabă dacă toate textele se văd bine. Repară ce nu se vede. Salvează varianta în `Prenume_Nume_W5_L8`.

## Ce urmează — Lecția 9
Testăm site-ul pe **telefon** și facem o verificare completă: linkuri, imagini, tastatură, erori.

---

## Răspunsuri
- **Quiz scurt:** (1) când `<body>` are clasa `intunecat`, variabilele ei le înlocuiesc pe cele din `:root`, deci pagina trece la paleta întunecată; (2) încearcă codul din `try`, iar dacă apare o eroare, execută `catch`, fără să oprească tot scriptul; (3) câți pixeli a derulat pagina de sus; (4) cu `window.matchMedia("(prefers-reduced-motion: reduce)").matches`, care este `true` dacă omul a cerut mișcare redusă.  
- **Dacă ritmul clasei este lent:** `try…catch` și `matchMedia` sunt bonus pentru grupele mici.  
- **Exercițiul A:** pentru evaluare folosiți lista din Exemplul 6.  
- **Exercițiul B:** nu are răspuns unic; verificați că textul rămâne citibil în ambele teme.  
- **Exercițiul C:** (1) `toggle(".intunecat")` trebuie `toggle("intunecat")`; (2) `localStorage.setItem("tema")` are nevoie și de valoare (`setItem("tema", "intunecat")`); (3) `scrollY > 300` trebuie `scrollY < 300` pentru `hidden`.  
- **Exercițiul D:** o schimbare într-un loc se vede peste tot; salvarea poate fi blocată de browser, iar `try … catch` evită oprirea scriptului; unii oameni se simt rău de la mișcare (de exemplu, derulări sau animații), deci le respectăm setarea.  
- **Notă pentru profesor:** operatorul condițional `? :` este scurtătura pentru `if … else`; arătați operatorul ca atare, fără să cereți memorare. Dacă tema nu rămâne după reîncărcare, verificați dacă elevul deschide fișierele de pe disc (`file://`) într-un browser care tratează fiecare fișier separat; cu Live Server problema nu apare. Dacă un colț de pagină rămâne luminos în modul întunecat, căutați o culoare scrisă direct, fără `var(...)`.
