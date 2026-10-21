# LECȚIA 6 — Galerie cu imagine mărită
**Modulul 5 · Site complet: HTML + CSS + JavaScript · 2 ore**  
**Code Maker Club · Web Builder**

> Azi construim pagina `galerie.html`: șase poze mici într-o grilă, iar când apeși una, ea apare **mare**, peste pagină, pe un fundal întunecat. Se închide cu un buton, cu clic în afara pozei sau cu tasta `Escape`. Folosim HTML, CSS (`position: fixed`, `object-fit`) și JavaScript (evenimente, `hidden`, `focus`).  
> Proiect: **„Galeria mea”** · folder: `Prenume_Nume_W5` (continuăm în același folder)

---

## Obiectiv
La finalul orei, în `galerie.html` ai 6 imagini în grilă și o fereastră de imagine mărită care se deschide și se închide corect, și cu mouse-ul, și cu tastatura.  
**Minim:** 6 imagini mici în grilă, cu `alt`, iar la clic apare imaginea mărită, care se poate închide cu un buton.  
**Ținta orei (Complet):** + imaginile sunt în `<button>`, fereastra se închide și cu `Escape` și cu clic pe fundal, focusul se mută pe butonul de închidere și revine pe imaginea apăsată, `loading="lazy"`, `object-fit: cover`, efect blând la `:hover`.

## De ce contează
Galeriile se află pe aproape orice site. Dacă ai grijă ca ele să funcționeze și cu tastatura, le pot folosi toți oamenii, inclusiv cei care nu pot folosi mouse-ul.

---

## Siguranță înainte de toate
- Imaginile sunt **din pachetul media sau făcute de tine**, fără persoane și fără date personale.  
- Fiecare imagine are `alt` care spune ce se vede.  
- Imaginile sunt mici ca mărime de fișier (cel mult 300 KB), ca site-ul să nu se încarce greu.  
- Fiecare poză este într-un `<button>`: se poate alege cu Tab și apăsa cu Enter.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare: `<img>`, `alt`, `addEventListener` |
| 10–30 | HTML-ul galeriei (**Exemplul 1**) |
| 30–50 | CSS-ul galeriei (**Exemplul 2**) |
| 50–65 | Fereastra pentru imaginea mărită: HTML și CSS (**Exemplul 3**) |
| 65–95 | JavaScript: deschidere și închidere (**Exemplul 4**) |
| 95–115 | Testele (**Exemplul 5**) |
| 115–120 | Recap și temă |

---

## 1. HTML-ul galeriei

### Exemplul 1 — Imagini în butoane

În `galerie.html`, în `<main>`, înlocuiește textul de probă cu:

```html
<section class="container sectiune">
  <h1>Galeria noastră</h1>
  <p>Apasă pe o poză ca să o vezi mai mare.</p>
  <div class="galerie">
    <button class="mini" type="button"><img src="imagini/g1.jpg" alt="Pisică portocalie care doarme pe o pernă" loading="lazy"></button>
    <button class="mini" type="button"><img src="imagini/g2.jpg" alt="Cățel alb care aleargă prin iarbă" loading="lazy"></button>
    <button class="mini" type="button"><img src="imagini/g3.jpg" alt="Delfin care sare din apă" loading="lazy"></button>
    <!-- ...încă 3 imagini, g4.jpg, g5.jpg, g6.jpg -->
  </div>
</section>
```

Scrie `alt`-ul **tău**, care descrie imaginea ta. Ce este nou:
- `<img>` este **în interiorul** unui `<button>`: butonul primește focus de la Tab și poate fi apăsat cu Enter.  
- `loading="lazy"`: browserul încarcă imaginea doar când ajungi aproape de ea.  
- `alt`: dacă imaginea nu se vede, se citește acest text.

**Încearcă tu (15 min)**  
- [ ] Pune cele 6 imagini, fiecare cu `alt` bun  
- [ ] Verifică în browser: se văd toate imaginile? (încă mari și fără stil)  
- [ ] Dacă una nu se vede, verifică numele și calea (`imagini/g3.jpg`)

---

## 2. CSS-ul galeriei

### Exemplul 2 — Grila și miniaturile

În `stil.css`:

```css
/* ===== Galerie ===== */
.galerie {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}

.mini {
  padding: 0;
  background: none;
  border: 3px solid var(--linie);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
}

.mini img {
  display: block;
  width: 100%;
  height: 160px;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.mini:hover img,
.mini:focus img {
  transform: scale(1.1);
}
```

- `object-fit: cover` taie puțin imaginea ca să umple tot dreptunghiul de 160 px, **fără să o deformeze**.  
- `overflow: hidden` pe buton taie ce iese din cadru când imaginea se mărește la `:hover`.  
- `padding: 0; background: none;` scot aspectul standard al butonului, ca să se vadă doar poza.  
- `display: block` pe imagine scoate un mic spațiu gol care apare sub imaginile care stau pe rând.

**Încearcă tu (15 min)**  
- [ ] Adaugă regulile și verifică grila  
- [ ] Apasă Tab: fiecare poză primește focus și se mărește puțin?  
- [ ] Schimbă înălțimea (`160px`) și spațiul dintre poze

---

## 3. Fereastra pentru imaginea mărită

### Exemplul 3 — HTML și CSS

În `galerie.html`, **după** `</main>`, adaugă:

```html
<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Imagine mărită" hidden>
  <button class="inchide" id="inchide" type="button" aria-label="Închide imaginea">×</button>
  <img id="lightboxImg" alt="">
</div>
```

- `hidden`: la început, fereastra este **ascunsă**.  
- `role="dialog"` și `aria-modal="true"`: spun cititorului de ecran că este o fereastră deasupra paginii.  
- `aria-label` pe butonul de închidere: butonul conține doar „×”, deci îi dăm un nume.  
- `<img>` este gol: JavaScript va pune în el imaginea apăsată.

În `stil.css`:

```css
/* ===== Imaginea mărită ===== */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.85);
}

.lightbox[hidden] {
  display: none;
}

.lightbox img {
  max-width: 100%;
  max-height: 85vh;
  border-radius: 8px;
}

.inchide {
  position: absolute;
  top: 12px;
  right: 16px;
  width: 44px;
  height: 44px;
  font-size: 2rem;
  line-height: 1;
  color: white;
  background-color: var(--accent);
  border: none;
  border-radius: 50%;
  cursor: pointer;
}
```

- `position: fixed; inset: 0;` face fereastra cât tot ecranul (sus, jos, stânga, dreapta la 0). `inset: 0` înseamnă cele patru margini odată.  
- `z-index: 200` o pune **deasupra** antetului (care are 100).  
- `rgba(0, 0, 0, 0.85)`: negru cu transparență, ca să se vadă puțin pagina dedesubt.  
- **Foarte important:** `.lightbox[hidden] { display: none; }`. Regula `.lightbox` setează `display: flex`, care ar **anula** atributul `hidden`. Cu această regulă, `hidden` merge din nou.  
- `max-height: 85vh`: imaginea nu depășește 85% din înălțimea ecranului. `vh` este o sutime din înălțimea ferestrei.

**Încearcă tu (15 min)**  
- [ ] Adaugă HTML-ul și CSS-ul  
- [ ] Fereastra nu trebuie să se vadă acum  
- [ ] Scoate un moment atributul `hidden` din HTML ca să vezi cum arată (apoi pune atributul la loc)

---

## 4. JavaScript: deschidere și închidere

### Exemplul 4 — Clic, `Escape` și focus

În `script.js`, **după** codul meniului, adaugă:

```javascript
// ===== Galeria: imaginea mărită =====
const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector("#lightboxImg");
const butonInchide = document.querySelector("#inchide");
const miniaturi = document.querySelectorAll(".mini");

let butonDeschis = null;

function deschideImagine(buton) {
  const poza = buton.querySelector("img");
  lightboxImg.src = poza.src;
  lightboxImg.alt = poza.alt;
  lightbox.hidden = false;
  butonDeschis = buton;
  butonInchide.focus();
}

function inchideImagine() {
  lightbox.hidden = true;
  lightboxImg.removeAttribute("src");

  if (butonDeschis !== null) {
    butonDeschis.focus();
    butonDeschis = null;
  }
}

if (lightbox !== null) {
  for (const mini of miniaturi) {
    mini.addEventListener("click", function () {
      deschideImagine(mini);
    });
  }

  butonInchide.addEventListener("click", inchideImagine);

  lightbox.addEventListener("click", function (eveniment) {
    if (eveniment.target === lightbox) {
      inchideImagine();
    }
  });

  document.addEventListener("keydown", function (eveniment) {
    if (eveniment.key === "Escape" && !lightbox.hidden) {
      inchideImagine();
    }
  });
}
```

Pe bucăți:
1. `querySelectorAll(".mini")` găsește **toate** cele 6 butoane (o listă).  
2. `deschideImagine(buton)` ia imaginea din butonul apăsat (`buton.querySelector("img")`), copiază `src` și `alt` în fereastra mare, o arată (`hidden = false`) și mută focusul pe butonul „×”, ca cine folosește tastatura să fie în fereastra nouă.  
3. `inchideImagine()` ascunde fereastra, golește imaginea și **returnează focusul** pe poza apăsată înainte. Așa nu te pierzi în pagină.  
4. `for (const mini of miniaturi)`: fiecare miniatură primește un `click`.  
5. `eveniment.target === lightbox`: închidem doar dacă apeși **pe fundal** (nu pe poză).  
6. `keydown` cu `Escape`: tasta de închidere pe care o așteaptă oricine. Verificăm și `!lightbox.hidden`, ca să nu facem nimic dacă fereastra este deja închisă.  
7. `if (lightbox !== null)`: scriptul rulează și pe celelalte pagini, unde fereastra nu există.

**Încearcă tu (30 min)**  
- [ ] Scrie scriptul  
- [ ] Apasă pe o poză: apare mare? Se închide cu „×”, cu clic pe fundal și cu `Escape`?  
- [ ] Folosește doar tastatura: Tab până la o poză, Enter, apoi `Escape`; focusul revine pe poză?  
- [ ] Testează și pe celelalte pagini: nu trebuie să apară erori în consolă

---

## 5. Testele

### Exemplul 5 — Lista de verificare a galeriei

```text
□ Sunt 6 imagini, fiecare cu alt care descrie ce se vede
□ Imaginile nu sunt deformate (object-fit: cover)
□ Galeria se adaptează: mai multe coloane pe calculator, mai puține pe telefon
□ La clic, imaginea apare mare, peste pagină
□ Se închide cu butonul ×, cu clic pe fundal și cu Escape
□ Fereastra nu se vede la început și nu rămâne deschisă după închidere
□ Cu tastatura: Tab, Enter, Escape funcționează, iar focusul se întoarce
□ Pe celelalte pagini nu apare nicio eroare în consolă
□ Imaginile se încarcă repede (fișiere mici)
```

**Gata când:**  
- [ ] Toate punctele sunt bifate  
- [ ] Ai făcut o copie de siguranță a folderului

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Galeria mea” (obligatoriu)
`galerie.html` are 6 imagini în grilă și fereastra de imagine mărită, iar lista din Exemplul 5 este bifată.

### Exercițiul B — Îl faci al tău
Schimbă: înălțimea miniaturilor, culoarea fundalului din fereastra mare, rotunjirea chenarului și efectul la `:hover` (de exemplu `scale(1.05)`). Notează ce ai schimbat.

### Exercițiul C — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```css
.lightbox { position: fixed; display: flex; }
.lightbox img { max-height: 85; }
```
```javascript
const miniaturi = document.querySelector(".mini");
for (const mini of miniaturi) {
  mini.addEventListener("click", deschideImagine(mini));
}
```

### Exercițiul D — Explică cu cuvintele tale
Pe foaie: de ce punem imaginile în `<button>`? De ce are `.lightbox[hidden]` o regulă separată? De ce mutăm focusul la deschidere și îl întoarcem la închidere?

**Gata când:**  
- [ ] Galeria merge cu mouse-ul și cu tastatura  
- [ ] Ai răspuns la exercițiile B–D

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Adaugă butoane „Înapoi” și „Înainte” în fereastra mare, ca să treci prin poze (poți ține în JavaScript indicele pozei curente)  
- [ ] Arată sub imaginea mărită textul alternativ, ca legendă (`<p id="legenda">` completat cu `textContent`)  
- [ ] Adaugă o animație blândă de apariție a ferestrei (`opacity`), cu respectarea `prefers-reduced-motion`

---

## Greșeli frecvente
1. **`querySelector`** în loc de `querySelectorAll` când vrei toate imaginile.  
2. **`addEventListener("click", deschideImagine(mini))`**: aici funcția se **apelează imediat**. Corect: `function () { deschideImagine(mini); }`, care apelează `deschideImagine` abia la clic.  
3. **Lipsește `.lightbox[hidden]`:** fereastra se vede tot timpul, pentru că `display: flex` anulează `hidden`.  
4. **`max-height: 85`** fără unitate.  
5. **Imagini fără `alt`** sau cu `alt` de tipul „poza 1”.

## Recapitulare pe scurt
1. Imaginile din galerie sunt în butoane, ca să funcționeze și cu tastatura.  
2. `position: fixed` și `inset: 0` fac o fereastră cât tot ecranul.  
3. `hidden` ascunde, dar are nevoie de regula `[hidden]` când pui `display: flex`.  
4. JavaScript copiază `src` și `alt` și mută focusul.  
5. Se închide cu buton, cu clic pe fundal și cu `Escape`.

## Quiz scurt
1. Ce face `object-fit: cover`?  
2. De ce este nevoie de `.lightbox[hidden]`?  
3. Ce face `eveniment.target === lightbox`?  
4. De ce întoarcem focusul la închidere?

## Temă
Cere unui coleg să folosească galeria **doar cu tastatura** și să spună dacă s-a pierdut undeva. Repară ce nu a mers. Salvează varianta în `Prenume_Nume_W5_L6`.

## Ce urmează — Lecția 7
Facem **pagina de contact**: un formular cu verificarea textului, mesaje de eroare clare și o regulă de siguranță care oprește datele personale.

---

## Răspunsuri
- **Quiz scurt:** (1) umple tot dreptunghiul tăind puțin imaginea, fără să o deformeze; (2) pentru că `display: flex` anulează atributul `hidden`, iar regula cu `display: none` îl face să meargă din nou; (3) verifică dacă s-a apăsat chiar pe fundal, nu pe poză, ca să se închidă doar atunci; (4) ca cine folosește tastatura să revină la poza apăsată și să nu se piardă în pagină.  
- **Dacă ritmul clasei este lent:** deschiderea și închiderea cu buton și cu `Escape` sunt suficiente; verificarea `eveniment.target === lightbox` și întoarcerea focusului sunt bonus.  
- **Exercițiul A:** pentru evaluare folosiți lista din Exemplul 5.  
- **Exercițiul B:** nu are răspuns unic; verificați că galeria rămâne funcțională.  
- **Exercițiul C:** (1) `max-height: 85` trebuie `85vh` (lipsește unitatea); (2) `querySelector` întoarce un singur element; pentru toate trebuie `querySelectorAll`; (3) `addEventListener("click", deschideImagine(mini))` apelează funcția imediat; corect: `function () { deschideImagine(mini); }`. Observație: lipsesc `inset` și `background-color` la `.lightbox`, dar acestea nu sunt greșeli de sintaxă.  
- **Exercițiul D:** butonul primește focus și răspunde la Enter; `display: flex` are prioritate peste regula implicită `hidden`, deci este nevoie de o regulă dedicată; focusul mutat arată utilizatorului de tastatură unde este, iar întoarcerea îl readuce unde a rămas.  
- **Notă pentru profesor:** testul cu tastatura este cel mai important: cereți elevilor să lase mouse-ul deoparte. Dacă imaginile nu apar, cauza este aproape mereu un nume sau o cale greșită; verificați în `Inspect → Network` sau cu clic dreapta pe imagine. Pentru elevii care nu au imagini potrivite, folosiți pachetul media.
