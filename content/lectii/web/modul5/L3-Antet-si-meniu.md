# LECȚIA 3 — Antet și meniu (inclusiv pe telefon)
**Modulul 5 · Site complet: HTML + CSS + JavaScript · 2 ore**  
**Code Maker Club · Web Builder**

> Azi antetul devine **antet de site adevărat**: rămâne sus când derulezi, are meniul pe orizontală, arată pe ce pagină ești și, pe telefon, meniul se strânge într-un buton care îl deschide și îl închide. Folosim Flexbox (CSS), `@media` și JavaScript.  
> Proiect: **„Antetul cu meniu”** · folder: `Prenume_Nume_W5` (continuăm în același folder)

---

## Obiectiv
La finalul orei, pe calculator meniul este pe un rând, iar pe telefon apare un buton „Meniu” care deschide și închide lista de linkuri.  
**Minim:** antet cu logo în stânga și meniu pe orizontală în dreapta, cu efect `:hover`, pe toate cele 3 pagini.  
**Ținta orei (Complet):** + antet care rămâne sus (`position: sticky`), linkul paginii curente marcat, buton „Meniu” pentru telefon cu JavaScript, `aria-expanded` actualizat, test cu tasta Tab.

## De ce contează
Meniul este lucrul pe care vizitatorul îl folosește cel mai des. Dacă nu merge pe telefon, mulți oameni nu mai găsesc restul site-ului.

---

## Siguranță înainte de toate
- Butonul de meniu este un **`<button>`**, nu un `<div>`. Un buton adevărat se poate apăsa și cu tastatura.  
- Zona de apăsat are cel puțin **44 px** înălțime, ca să o nimerești ușor cu degetul.  
- Efectele sunt blânde (tranziție scurtă, fără licăriri).

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare Flexbox și `@media` |
| 10–30 | HTML-ul antetului (**Exemplul 1**) |
| 30–55 | Antet și meniu pe orizontală (**Exemplul 2**) |
| 55–75 | Meniul pe telefon: CSS (**Exemplul 3**) |
| 75–100 | Meniul pe telefon: JavaScript (**Exemplul 4**) |
| 100–115 | Testele (**Exemplul 5**) |
| 115–120 | Recap și temă |

---

## 1. HTML-ul antetului

### Exemplul 1 — Rând cu logo, buton și meniu

În **toate cele 3 pagini**, înlocuiește antetul cu acesta (la fiecare pagină rămâne `aria-current` pe linkul ei):

```html
<header class="antet">
  <div class="container antet-rand">
    <a class="logo" href="index.html">Clubul animalelor</a>
    <button class="buton-meniu" id="butonMeniu" type="button" aria-expanded="false" aria-controls="meniu">Meniu</button>
    <nav class="meniu" id="meniu" aria-label="Meniu principal">
      <ul>
        <li><a href="index.html" aria-current="page">Acasă</a></li>
        <li><a href="galerie.html">Galerie</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>
```

Ce este nou:
- `class="antet-rand"` pe același `div` ca `container`: va fi un rând Flexbox.  
- `<button id="butonMeniu">`: butonul pentru telefon. `type="button"` spune că nu trimite niciun formular.  
- `aria-expanded="false"`: spune cititorului de ecran că meniul este închis. Îl vom schimba din JavaScript.  
- `aria-controls="meniu"`: spune ce element controlează butonul (cel cu `id="meniu"`).  

Mai adaugă, **la sfârșitul `<body>`, în fiecare pagină**, linia care încarcă scriptul:

```html
  <script src="script.js"></script>
</body>
```

**Încearcă tu (15 min)**  
- [ ] Copiază antetul în cele 3 pagini și corectează `aria-current` în fiecare  
- [ ] Adaugă `<script src="script.js"></script>` înainte de `</body>`, în toate  
- [ ] Reîncarcă: vezi butonul „Meniu” și lista, încă fără stil

---

## 2. Antet și meniu pe orizontală

### Exemplul 2 — CSS-ul antetului

În `stil.css`, **șterge** regulile vechi `.antet, .subsol { ... }` și `.antet { padding ... }`. Pune în loc:

```css
/* ===== Antet și meniu ===== */
.antet {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--principala);
  color: white;
}

.antet-rand {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.meniu ul {
  display: flex;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.meniu a {
  display: block;
  padding: 10px 14px;
  color: white;
  text-decoration: none;
  border: 2px solid transparent;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.meniu a:hover,
.meniu a:focus {
  background-color: rgba(255, 255, 255, 0.2);
}

.meniu a[aria-current="page"] {
  border-color: white;
}

.buton-meniu {
  display: none;
  min-height: 44px;
  padding: 8px 14px;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
}
```

Subsolul și-a pierdut culoarea de fundal. Înlocuiește regulile `.subsol` și `.subsol p` care existau deja cu acestea:

```css
.subsol {
  padding: 1rem;
  background-color: var(--principala);
  color: white;
  text-align: center;
}

.subsol p {
  margin: 0;
}
```

Ce face fiecare:
- `position: sticky; top: 0;` lipește antetul de marginea de sus când derulezi. `z-index` îl ține deasupra restului.  
- `.antet-rand` este rândul Flexbox: logo în stânga, meniu în dreapta (`space-between`).  
- `list-style: none` scoate bulinele de pe lista de linkuri, iar `display: flex` le pune pe un rând.  
- `a[aria-current="page"]` alege linkul care are acest atribut și îi pune un chenar alb: vezi unde ești.  
- `.buton-meniu { display: none; }`: pe calculator butonul **nu se vede**.

**Încearcă tu (20 min)**  
- [ ] Pune CSS-ul în `stil.css` (și subsolul înapoi)  
- [ ] Verifică: logo la stânga, meniu la dreapta, linkul curent cu chenar  
- [ ] Derulează pagina (adaugă temporar mai multe `<p>`): antetul rămâne sus?  
- [ ] Apasă Tab: linkurile se luminează pe rând?

---

## 3. Meniul pe telefon: CSS

### Exemplul 3 — `@media` pentru ecrane mici

La **sfârșitul** lui `stil.css` adaugă:

```css
/* ===== Pe telefon ===== */
@media (max-width: 700px) {
  .buton-meniu {
    display: block;
  }

  .antet-rand {
    flex-wrap: wrap;
  }

  .meniu {
    display: none;
    order: 3;
    width: 100%;
  }

  .meniu.deschis {
    display: block;
  }

  .meniu ul {
    flex-direction: column;
  }
}
```

Cum merge:
- Sub 700 px lățime, butonul apare, iar meniul este **ascuns** (`display: none`).  
- `order: 3` mută meniul **după** logo și buton, pe rândul de jos (`width: 100%`), iar `flex-wrap: wrap` îi permite să treacă pe rândul următor.  
- `.meniu.deschis` (fără spațiu între cele două clase) înseamnă „elementul cu clasa `meniu` **și** clasa `deschis`”. Atunci meniul se vede.  
- `flex-direction: column` pune linkurile unul sub altul.

Acum meniul se deschide doar dacă ceva adaugă clasa `deschis`. Asta face JavaScript.

**Încearcă tu (10 min)**  
- [ ] Pune regula `@media` la sfârșitul fișierului  
- [ ] Micșorează fereastra sau folosește DevTools în modul telefon: apare butonul, iar meniul dispare?  
- [ ] Adaugă manual clasa `deschis` în HTML (`class="meniu deschis"`), vezi cum apare meniul, apoi șterge clasa

---

## 4. Meniul pe telefon: JavaScript

### Exemplul 4 — Butonul care deschide și închide

În `script.js` scrie:

```javascript
// ===== Meniul pe telefon =====
const butonMeniu = document.querySelector("#butonMeniu");
const meniu = document.querySelector("#meniu");

if (butonMeniu !== null && meniu !== null) {
  butonMeniu.addEventListener("click", function () {
    const esteDeschis = meniu.classList.toggle("deschis");
    butonMeniu.setAttribute("aria-expanded", esteDeschis);
  });
}
```

Pe rând:
1. Găsim butonul și meniul după `id`.  
2. `if (... !== null ...)`: același fișier `script.js` va fi folosit pe toate paginile, iar în lecțiile următoare unele elemente vor exista doar pe **anumite** pagini. Dacă un element lipsește, `querySelector` dă `null`, iar fără `if` ar apărea o eroare. Așa ne obișnuim de acum să verificăm.  
3. La clic: `classList.toggle("deschis")` pune clasa dacă lipsește și o scoate dacă există. În plus, **îți spune ce a făcut**: `true` (clasa a fost pusă) sau `false` (clasa a fost scoasă).  
4. `setAttribute("aria-expanded", esteDeschis)` pune în atribut `true` sau `false`, ca cititorul de ecran să știe dacă meniul este deschis.

**Încearcă tu (15 min)**  
- [ ] Scrie scriptul  
- [ ] În modul telefon, apasă „Meniu”: se deschide și se închide?  
- [ ] Inspectează butonul (clic dreapta → *Inspect*): se schimbă `aria-expanded`?  
- [ ] Dacă nu merge: deschide consola (F12) și citește mesajul roșu

---

## 5. Testele

### Exemplul 5 — Lista de verificare a antetului

```text
□ Pe calculator: logo la stânga, meniu pe un rând la dreapta
□ Linkul paginii curente are chenar, și doar acela
□ Antetul rămâne sus când derulez
□ Pe telefon (sub 700 px): se vede butonul „Meniu”, nu lista
□ Butonul deschide și închide lista
□ aria-expanded se schimbă între false și true
□ Pot folosi meniul doar cu tastatura (Tab, apoi Enter sau Spațiu)
□ Antetul este la fel în toate cele 3 pagini
□ Nu apare eroare roșie în consolă
```

**Gata când:**  
- [ ] Toate punctele sunt bifate  
- [ ] Ai făcut o copie de siguranță a folderului

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Antetul cu meniu” (obligatoriu)
Antetul din Exemplul 1–4 funcționează pe cele 3 pagini, cu culorile tale, și toate punctele din Exemplul 5 sunt bifate.

### Exercițiul B — Îl faci al tău
Schimbă: culoarea chenarului de la linkul curent, mărimea logoului, textul butonului (de exemplu „☰ Meniu”) și viteza tranziției. Notează ce ai schimbat.

### Exercițiul C — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```css
.meniu ul { display: flex; list-style: none }
.meniu.deschis { display: block; }
@media (max-width 700px) {
  .meniu { display: none }
}
```
```javascript
const butonMeniu = document.querySelector("butonMeniu");
butonMeniu.addEventListener("click", function () {
  meniu.classList.toggle(".deschis");
});
```

### Exercițiul D — Explică cu cuvintele tale
Pe foaie: de ce este mai bun un `<button>` decât un `<div>` pentru deschiderea meniului? Ce face `classList.toggle`? De ce punem `if (... !== null)`?

**Gata când:**  
- [ ] Antetul merge pe toate paginile  
- [ ] Ai răspuns la exercițiile B–D

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Închide meniul și când apeși un link din el  
- [ ] Închide meniul când apeși tasta `Escape`  
- [ ] Ce se întâmplă pe telefon dacă JavaScript nu se încarcă? Meniul rămâne ascuns. Cum ai putea face meniul vizibil în acest caz?

---

## Greșeli frecvente
1. **`.meniu .deschis`** (cu spațiu) în loc de `.meniu.deschis` (fără spațiu).  
2. **Regula `@media` pusă la început**: regulile de după o suprascriu. Scrie regula la sfârșit.  
3. **`toggle(".deschis")`** cu punct: în `classList` scrii doar numele, fără punct.  
4. **`querySelector("butonMeniu")`** fără `#`.  
5. **Scriptul pus în `<head>`** sau uitat: elementele nu există încă, iar butonul nu merge.

## Recapitulare pe scurt
1. Antetul este un rând Flexbox, lipit sus cu `position: sticky`.  
2. `a[aria-current="page"]` arată în ce pagină ești.  
3. Pe telefon, `@media` ascunde meniul și arată butonul.  
4. JavaScript adaugă sau scoate clasa `deschis` și actualizează `aria-expanded`.  
5. Verificăm dacă elementul există înainte să îl folosim.

## Quiz scurt
1. Ce face `position: sticky`?  
2. Ce înseamnă `.meniu.deschis`?  
3. Ce valoare întoarce `classList.toggle`?  
4. De ce folosim `<button>`?

## Temă
Cere unui coleg să folosească meniul pe telefonul lui sau în DevTools și notează un lucru greu de folosit. Repară acea problemă. Salvează varianta în `Prenume_Nume_W5_L3`.

## Ce urmează — Lecția 4
Facem **secțiunea de intrare** (hero): titlul mare, o frază și un buton, cu text care se mărește și se micșorează odată cu ecranul.

---

## Răspunsuri pentru profesor
- **Quiz scurt:** (1) lipește antetul de marginea de sus când derulezi pagina; (2) elementul care are și clasa `meniu`, și clasa `deschis` (fără spațiu între ele); (3) `true` dacă a pus clasa, `false` dacă a scos clasa; (4) pentru că un buton adevărat se poate apăsa și cu tastatura și este înțeles de cititoarele de ecran.  
- **Dacă ritmul clasei este lent:** verificarea `if (... !== null)` și valoarea returnată de `toggle` se prezintă ca rețetă, fără explicații.  
- **Exercițiul A:** pentru evaluare folosiți lista din Exemplul 5.  
- **Exercițiul B:** nu are răspuns unic; verificați că modificările se văd și nu strică meniul.  
- **Exercițiul C:** (1) lipsește `:` în `(max-width 700px)` (corect: `(max-width: 700px)`); (2) `querySelector("butonMeniu")` trebuie `"#butonMeniu"`; (3) `toggle(".deschis")` trebuie `toggle("deschis")`. Mai sunt probleme secundare: `meniu` nu este definit în codul dat și un `display: none` fără `;` final este permis, dar neîngrijit.  
- **Exercițiul D:** butonul se poate apăsa cu tastatura și este înțeles de cititoarele de ecran; `toggle` pune clasa dacă lipsește și o scoate dacă există; fără `if`, un element lipsă dă eroare.  
- **Notă pentru profesor:** cea mai frecventă greșeală este un spațiu în `.meniu.deschis`. Arătați cu Inspect cum clasa apare și dispare în HTML la fiecare clic. Dacă butonul nu merge, cereți elevului să verifice mai întâi că `script.js` este legat în **acea** pagină.
