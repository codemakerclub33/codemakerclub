# LECȚIA 9 — Pagina care reacționează
### DOM și evenimente
**Modulul 4 · JavaScript pentru începători · 2 ore**  
**Code Maker Club · JavaScript Starter**

> Până acum rezultatele programelor tale apăreau doar în consolă. Azi **pagina ta însăși prinde viață**: apeși un buton și se schimbă un text, scrii un cuvânt și apare într-o listă, apeși alt buton și pagina trece în „modul noapte”. Pentru asta înveți două lucruri: cum **găsește** JavaScript elementele paginii (DOM) și cum **ascultă** ce face utilizatorul (evenimente).  
> Proiect: **„Pagina care reacționează”** · folder: `Prenume_Nume_W4_L9` (ex. `Ana_Pop_W4_L9`)

---

## Ce facem azi
La final ai `tema.html` cu trei lucruri noi, care funcționează în pagină, nu în consolă: un buton „Mod noapte”, un contor cu butoane și o listă la care adaugi fapte scrise într-un câmp. Știi ce este DOM-ul, cum găsești un element cu `document.querySelector`, cum îi schimbi textul cu `textContent`, cum îi schimbi aspectul cu `classList`, cum asculți un click cu `addEventListener`, cum citești ce a scris utilizatorul într-un câmp și cum adaugi un element nou în pagină. Aici se întâlnesc cele trei limbaje: HTML pune elementele, CSS le dă aspectul, JavaScript le face să reacționeze. Fiecare site cu butoane, jocuri, formulare și meniuri care se deschid folosește exact aceste unelte.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare · pregătim `tema.html` |
| 10–22 | DOM: găsim un element (**Exemplul 1**) |
| 22–32 | Schimbăm textul cu `textContent` (**Exemplul 2**) |
| 32–45 | Evenimente: `click` (**Exemplul 3**) |
| 45–58 | Un contor (**Exemplul 4**) |
| 58–70 | Schimbăm aspectul cu `classList` (**Exemplul 5**) |
| 70–80 | Citim un câmp de text (**Exemplul 6**) |
| 80–90 | Adăugăm elemente într-o listă (**Exemplul 7**) |
| 90–115 | Mini-proiect: pagina care reacționează (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `document.querySelector("#id")` | Găsește un element al paginii | `document.querySelector("#titlu")` |
| `querySelectorAll(".clasa")` | Găsește toate elementele cu o clasă | `querySelectorAll(".carte")` |
| `element.textContent` | Textul din interiorul elementului | `titlu.textContent = "Salut";` |
| `element.addEventListener("click", …)` | Rulează o funcție la un eveniment | `buton.addEventListener("click", function () { … });` |
| `classList.toggle("clasa")` | Adaugă sau scoate o clasă CSS | `document.body.classList.toggle("noapte");` |
| `camp.value` | Textul scris într-un câmp | `camp.value.trim()` |
| `createElement` și `appendChild` | Creează un element și îl pune în pagină | `lista.appendChild(element);` |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- un obiect are proprietăți: `obiect.eticheta`;
- poți schimba o proprietate cu `obiect.eticheta = valoare;`;
- o funcție primește parametri și poate returna un rezultat;
- `const` ține un obiect sau o listă, dar permite schimbarea conținutului.

**Încearcă tu (10 min)**  
- [ ] Creează folderul `Prenume_Nume_W4_L9` ca o **copie** a folderului `Prenume_Nume_W4_L8` (cu `tema.html`, `script.js`, `stil.css`, `imagini`, `media`)  
- [ ] Golește `script.js` (sau comentează tot ce era înăuntru)  
- [ ] În `tema.html` pune `id="titlu"` pe `<h1>` și adaugă, sub el, `<p id="mesaj">Salut!</p>` și `<button id="buton">Apasă aici</button>`  
- [ ] Verifică ca linia `<script src="script.js"></script>` să fie **chiar înainte de `</body>`** (este important: elementele trebuie să existe înainte să le cauți)  

> De aici înainte, exemplele arată ce scrii în `tema.html` și, separat, în `script.js`. Rezultatele le vezi **în pagină**, nu în consolă.

---

## 2. DOM: găsim elementele paginii

### Exemplul 1 — Ce este DOM-ul

Când browserul citește pagina HTML, o transformă într-o **structură** cu elemente „cuibărite”, ca un arbore genealogic: `body` conține `h1`, `p` și `button`. Această structură se numește **DOM**. JavaScript poate **găsi** orice element din ea și îl poate **schimba**, iar browserul reflectă schimbarea pe ecran pe loc.

Ca să lucrezi cu un element, trebuie mai întâi să **găsești** elementul:

```javascript
const titlu = document.querySelector("#titlu");
const mesaj = document.querySelector("#mesaj");
```

- `document` este „toată pagina”;  
- `querySelector("…")` caută un element cu un **selector CSS**, exact ca cele din Modulul 3: `#titlu` (după `id`), `.carte` (după clasă), `p` (după tag);  
- rezultatul se pune într-o variabilă `const`, ca să poți folosi elementul.

Dacă elementul nu există (ai scris greșit selectorul), rezultatul este `null` și vei primi erori mai târziu („Cannot read properties of null”).

Dacă ai mai multe elemente cu aceeași clasă, `querySelectorAll` le găsește pe **toate**, iar tu le parcurgi cu `for…of`:

```javascript
const carti = document.querySelectorAll(".carte");

for (const carte of carti) {
  console.log(carte.textContent);
}
```

**Încearcă tu (6 min)**  
- [ ] Găsește elementul cu `id="titlu"` și afișează-l în consolă cu `console.log`  
- [ ] Găsește un element cu `id` greșit și vezi ce apare (`null`)  
- [ ] Găsește toate elementele `.carte` din pagina ta (sau alt selector care există) și afișează câte sunt  
- [ ] Spune cu voce tare ce este DOM-ul  

### Exemplul 2 — Schimbăm textul

```javascript
const titlu = document.querySelector("#titlu");
titlu.textContent = "Titlul schimbat de JavaScript";
```

`textContent` este textul din interiorul elementului. Dacă îi dai o valoare nouă, textul din pagină se schimbă imediat. Poți să citești și textul:

```javascript
console.log(titlu.textContent);
```

**Atenție la securitate:** pentru a pune text primit de la utilizator folosim întotdeauna `textContent`. Există și `innerHTML`, care înțelege etichete HTML, dar **nu îl folosim cu text scris de utilizator**, pentru că cineva ar putea strecura cod rău intenționat. `textContent` este sigur: tratează tot ca simplu text.

**Încearcă tu (6 min)**  
- [ ] Schimbă textul titlului paginii tale din JavaScript  
- [ ] Schimbă textul paragrafului `#mesaj`  
- [ ] Pune în `#mesaj` o propoziție cu numele subiectului articolului tău de pe Wikipedia  
- [ ] Explică de ce pentru text de la utilizator nu folosim `innerHTML`  

**Gata când:**  
- [ ] Ai găsit un element cu `querySelector` și ai schimbat textul cu `textContent`  
- [ ] Poți explica ce este DOM-ul  
- [ ] Știi de ce scriptul este înainte de `</body>`  
- [ ] Știi de ce nu folosim `innerHTML` cu text scris de utilizator  

---

## 3. Evenimente: ascultăm utilizatorul

### Exemplul 3 — `click`

Un **eveniment** este ceva ce se întâmplă în pagină: un click, o tastă apăsată, mouse-ul care trece peste ceva. Poți spune unui element: „când se întâmplă X, rulează funcția asta”.

În `tema.html`:

```html
<p id="mesaj">Nu ai apăsat încă.</p>
<button id="buton">Apasă aici</button>
```

În `script.js`:

```javascript
const buton = document.querySelector("#buton");
const mesaj = document.querySelector("#mesaj");

buton.addEventListener("click", function () {
  mesaj.textContent = "Ai apăsat butonul!";
});
```

Cum se citește: „**La** butonul `buton`, **ascultă** evenimentul `click`; **când** apare, rulează această funcție”.

Părțile:
- `buton.addEventListener(` ... `)`: „adaugă un ascultător”;  
- `"click"`: ce eveniment așteptăm (cu ghilimele);  
- `function () { … }`: funcția care **rulează doar când apare evenimentul**, nu imediat;  
- sfârșitul: `});` — acolada funcției, paranteza lui `addEventListener` și `;`.

Dacă pagina nu se schimbă, deschide consola (F12; pe Mac Cmd + Option + I): apare un mesaj roșu care spune ce nu merge.

**Încearcă tu (6 min)**  
- [ ] Fă un buton care schimbă textul unui titlu sau al unui paragraf  
- [ ] Fă butonul să scrie și în consolă „Click!”  
- [ ] Fă un buton „Arată un fapt” care pune în `#mesaj` un fapt din articolul tău  
- [ ] Scoate acolada de la sfârșit și citește eroarea din consolă, apoi pune-o la loc  

### Exemplul 4 — Un contor

```javascript
const afisaj = document.querySelector("#numar");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const reset = document.querySelector("#reset");

let numar = 0;

plus.addEventListener("click", function () {
  numar++;
  afisaj.textContent = numar;
});

minus.addEventListener("click", function () {
  numar--;
  afisaj.textContent = numar;
});

reset.addEventListener("click", function () {
  numar = 0;
  afisaj.textContent = numar;
});
```

```html
<p>Goluri: <span id="numar">0</span></p>
<button id="plus">+1</button>
<button id="minus">-1</button>
<button id="reset">Resetează</button>
```

Observă:
- variabila `numar` este creată **în afara** funcțiilor, ca să **țină minte** valoarea între apăsări;  
- fiecare buton are propria lui funcție de ascultare;  
- după ce schimbi variabila, **actualizezi și textul din pagină**: variabila nu se vede singură.

**Încearcă tu (8 min)**  
- [ ] Fă un contor cu butoane de +1, −1 și reset  
- [ ] Fă ca valoarea să nu coboare sub 0  
- [ ] Pune contorul în pagina ta, pentru ceva din articolul tău (de exemplu „Imagini văzute”)  
- [ ] Mută `let numar = 0;` în interiorul unei funcții și vezi ce se strică  

**Gata când:**  
- [ ] Ai un buton care schimbă un text la click  
- [ ] Ai un contor cu cel puțin două butoane, care ține minte valoarea  
- [ ] Poți explica de ce variabila contorului stă în afara funcțiilor  

---

## 4. Schimbăm aspectul

### Exemplul 5 — `classList`

Poți schimba stilul direct (`element.style.color = "red";`), dar o metodă mai bună este să **adaugi sau să scoți o clasă CSS** scrisă deja în `stil.css`:

```css
.noapte {
  background-color: #1d2d44;
  color: white;
}
```

```javascript
const butonTema = document.querySelector("#tema");

butonTema.addEventListener("click", function () {
  document.body.classList.toggle("noapte");
});
```

- `classList.add("noapte")` **adaugă** clasa;  
- `classList.remove("noapte")` **o scoate**;  
- `classList.toggle("noapte")` o **adaugă dacă lipsește** și o **scoate dacă există**: un comutator (întrerupător).  

`document.body` este elementul `<body>` (nu are nevoie de `querySelector`). Cu această metodă, stilul rămâne în CSS, iar JavaScript doar **pornește și oprește** clasele. Așa lucrează programatorii: fiecare limbaj face ce știe mai bine.

Dacă totuși vrei o schimbare rapidă, `style` merge, cu proprietatea scrisă în **camelCase**: `titlu.style.backgroundColor = "gold";` (fără liniuță, cu majusculă).

**Încearcă tu (8 min)**  
- [ ] Scrie în `stil.css` clasa `.noapte` și un buton `#tema` care o pornește și o oprește  
- [ ] Încearcă `add` și `remove` în locul lui `toggle`  
- [ ] Fă ca și cardurile paginii tale să aibă alte culori în modul noapte (`body.noapte .carte { … }`)  
- [ ] Schimbă culoarea titlului cu `style.color` și spune de ce clasa este mai bună  

**Gata când:**  
- [ ] Ai un buton care adaugă sau scoate o clasă cu `classList.toggle`  
- [ ] Ai scris clasa în CSS, nu în JavaScript  
- [ ] Poți explica diferența dintre `add`, `remove` și `toggle`  

---

## 5. Citim ce scrie utilizatorul

### Exemplul 6 — Câmpul de text

```html
<input type="text" id="nume" placeholder="Numele animalului tău">
<button id="saluta">Salută</button>
<p id="salut"></p>
```

```javascript
const camp = document.querySelector("#nume");
const butonSaluta = document.querySelector("#saluta");
const salut = document.querySelector("#salut");

butonSaluta.addEventListener("click", function () {
  const text = camp.value.trim();

  if (text === "") {
    salut.textContent = "Scrie mai întâi un nume!";
  } else {
    salut.textContent = `Salut, ${text}!`;
  }
});
```

- `camp.value` este **ce a scris utilizatorul** (întotdeauna **text**, ca la `prompt`);  
- `.trim()` scoate spațiile de la început și de la sfârșit, ca să nu accepți „   ” ca nume;  
- verifici dacă este gol (`""`) înainte să folosești valoarea.

Ca să transformi în număr: `Number(camp.value)`. Pentru siguranță, **nu cerem nume reale sau date personale**: folosește nume de animale, jocuri sau personaje inventate.

**Încearcă tu (6 min)**  
- [ ] Fă un câmp de text și un buton care afișează un salut cu textul scris  
- [ ] Verifică dacă textul este gol înainte să-l afișezi  
- [ ] Fă un câmp în care scrii numele unui animal și butonul îl afișează cu litere mari  
- [ ] Scrie doar spații în câmp și vezi ce face `trim()`  

### Exemplul 7 — Adăugăm un element în listă

```html
<input type="text" id="joc" placeholder="Un joc preferat">
<button id="adauga">Adaugă</button>
<ul id="lista"></ul>
```

```javascript
const campJoc = document.querySelector("#joc");
const butonAdauga = document.querySelector("#adauga");
const lista = document.querySelector("#lista");

butonAdauga.addEventListener("click", function () {
  const text = campJoc.value.trim();

  if (text === "") {
    return;
  }

  const element = document.createElement("li");
  element.textContent = text;
  lista.appendChild(element);

  campJoc.value = "";
  campJoc.focus();
});
```

Cum se **creează** un element nou:
1. `document.createElement("li")` face un `<li>` nou, **încă în afara paginii**;  
2. `element.textContent = text;` îi pune textul;  
3. `lista.appendChild(element);` îl **lipește la sfârșitul** listei, deci apare în pagină;  
4. `campJoc.value = "";` golește câmpul, iar `focus()` pune cursorul înapoi în el, ca să poți scrie următorul.

`return;` fără valoare **oprește** funcția mai devreme (dacă textul este gol, nu mai adăugăm nimic).

**Încearcă tu (8 min)**  
- [ ] Fă o listă la care adaugi elemente dintr-un câmp, cu golirea câmpului după adăugare  
- [ ] Verifică dacă textul este gol înainte de adăugare  
- [ ] Fă lista să primească fapte despre subiectul articolului tău  
- [ ] Adaugă un buton care scrie în consolă câte elemente are lista (`lista.children.length`)  

**Gata când:**  
- [ ] Ai citit un câmp cu `.value` și ai folosit `.trim()`  
- [ ] Ai adăugat un element nou cu `createElement` și `appendChild`  
- [ ] Câmpul gol primește un mesaj sau este ignorat  

---

## 6. Mini-proiect: toate la un loc

### Exemplul 8 — „Pagina care reacționează”

Adaugi trei lucruri în `tema.html`. În primul rând, în `<header>` (sau lângă titlu) pui butonul pentru modul noapte, iar în `<main>` adaugi două secțiuni noi:

```html
<button id="tema">Mod noapte</button>

<section class="carte">
  <h2>Contor de aprecieri</h2>
  <p class="mare">Aprecieri: <span id="numar">0</span></p>
  <button id="plus">+1</button>
  <button id="minus">-1</button>
  <button id="reset">Resetează</button>
</section>

<section class="carte">
  <h2>Faptele mele</h2>
  <input type="text" id="fapt" placeholder="Scrie un fapt">
  <button id="adauga">Adaugă</button>
  <p id="eroare" class="eroare"></p>
  <ul id="lista"></ul>
</section>
```

În `stil.css` adaugi la sfârșit (pagina ta are deja culori și fonturi din Modulul 3):

```css
/* Modul noapte, pornit și oprit din JavaScript */
body.noapte {
  background-color: #1d2d44;
  color: #eaf4f8;
}

body.noapte .carte {
  background-color: #26394f;
  color: #eaf4f8;
}

.eroare {
  color: crimson;
  min-height: 1.2em;
}

.mare {
  font-size: 1.5rem;
}

button {
  min-height: 44px;
  padding: 10px 16px;
  font-size: 1rem;
  cursor: pointer;
}

input {
  min-height: 44px;
  padding: 10px;
  font-size: 1rem;
}
```

Dacă pagina ta folosește variabile de culoare (`--fundal`, `--text`), poți schimba doar ele în `body.noapte`, în loc de culorile scrise aici.

Și în `script.js`, tot programul:

```javascript
// ----- 1. Modul noapte -----
const butonTema = document.querySelector("#tema");

butonTema.addEventListener("click", function () {
  document.body.classList.toggle("noapte");
});

// ----- 2. Contorul -----
const afisaj = document.querySelector("#numar");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const reset = document.querySelector("#reset");

let numar = 0;

function actualizeazaContor() {
  afisaj.textContent = numar;
}

plus.addEventListener("click", function () {
  numar++;
  actualizeazaContor();
});

minus.addEventListener("click", function () {
  if (numar > 0) {
    numar--;
  }
  actualizeazaContor();
});

reset.addEventListener("click", function () {
  numar = 0;
  actualizeazaContor();
});

// ----- 3. Lista de fapte -----
const campFapt = document.querySelector("#fapt");
const butonAdauga = document.querySelector("#adauga");
const eroare = document.querySelector("#eroare");
const lista = document.querySelector("#lista");

const MAX_FAPTE = 8;

butonAdauga.addEventListener("click", function () {
  const text = campFapt.value.trim();

  if (text === "") {
    eroare.textContent = "Scrie mai întâi un fapt.";
    return;
  }

  if (lista.children.length >= MAX_FAPTE) {
    eroare.textContent = `Lista are deja ${MAX_FAPTE} fapte.`;
    return;
  }

  eroare.textContent = "";

  const element = document.createElement("li");
  element.textContent = text;
  lista.appendChild(element);

  campFapt.value = "";
  campFapt.focus();
});
```

Observă cum **lucrează toate împreună**: CSS-ul din Modulul 3 (cu clasa `.noapte`), funcțiile din lecția 7, `if` din lecția 4 și evenimentele de azi. Contorul nu coboară sub 0, câmpul gol primește un mesaj, iar lista are o limită.

Personalizează: alt contor (puncte, vieți), alte culori, fapte despre alt subiect. Nu cere nume reale și nu pune date personale.

**Încearcă tu (14 min)**  
- [ ] Adaugă în `tema.html` butonul, contorul și lista, cu textele tale  
- [ ] Scrie `script.js` cu cele trei părți, nu copiat  
- [ ] Schimbă contorul să numere ceva din articolul tău și limita listei la 5  
- [ ] Testează cu tastatura: apasă Tab până la un buton și Enter  

**Gata când:**  
- [ ] Butonul „Mod noapte” schimbă aspectul paginii  
- [ ] Contorul merge cu +1, −1 (nu coboară sub 0) și reset  
- [ ] Lista primește fapte noi, golește câmpul și avertizează la câmp gol  
- [ ] Consola nu arată erori roșii  

---

## De făcut azi — „Pagina care reacționează”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | În `tema.html`, un buton care, la apăsare, schimbă un text din pagină |
| **Complet** | Minim + un contor cu cel puțin două butoane și o variabilă care ține minte valoarea, un buton care schimbă aspectul cu `classList.toggle` (clasa scrisă în CSS), un câmp de text și o listă la care adaugi elemente cu `createElement` și `appendChild` (cu verificarea câmpului gol), text pus doar cu `textContent`, cod indentat și două comentarii |

### Pasul 1 — Minim
În folderul `Prenume_Nume_W4_L9`:

- [ ] Ai `tema.html` cu scriptul legat chiar înainte de `</body>`  
- [ ] Ai un buton cu `id` și un element de text cu `id`  
- [ ] La click, textul se schimbă cu `textContent`  

### Pasul 2 — Complet
- [ ] Ai un contor cu cel puțin două butoane și o variabilă în afara funcțiilor  
- [ ] Ai un buton care schimbă aspectul paginii cu `classList.toggle` (clasa este în `stil.css`)  
- [ ] Ai un câmp de text și o listă la care adaugi elemente, cu verificarea câmpului gol  
- [ ] Tot textul pus în pagină folosește `textContent`, nu `innerHTML`  
- [ ] Codul este indentat și are cel puțin două comentarii  

---

## Bonus ★★★ — Provocare: Pagina mai deșteaptă
*Doar dacă ai terminat Complet.*

Faci pagina mai interactivă.

- [ ] Fă un buton care schimbă culoarea de fundal a unei cutii, ciclic, printr-o listă de culori (folosește un contor și `culori[i]`)  
- [ ] Adaugă la listă un buton „Șterge ultimul” cu `lista.lastElementChild.remove()` (verifică întâi dacă lista nu este goală)  
- [ ] Fă ca tasta **Enter** să adauge un element în listă: `campFapt.addEventListener("keydown", function (e) { if (e.key === "Enter") { … } })`  
- [ ] Afișează sub contor un mesaj „Gol de aur!” când contorul ajunge la 10  

---

## Greșeli frecvente
1. **Scriptul este înainte de elemente** (în `<head>` sau la început) — elementele nu există încă; pune scriptul înainte de `</body>`.  
2. **Selector greșit** — `querySelector("buton")` caută un tag `<buton>`; pentru `id` scrii `"#buton"`, cu ghilimele (`querySelector(#buton)` nu merge).  
3. **Ai scris `addEventListener("click", functie())`** — cu paranteze, funcția rulează imediat. Scrie numele ei fără paranteze (`functie`) sau o funcție scrisă direct acolo.  
4. **Ai scris `textcontent`** sau `Textcontent` — corect este `textContent` (cu C mare).  
5. **Ai uitat `.value`** la un câmp de text — `camp` este elementul, `camp.value` este textul scris.  
6. **Ai schimbat variabila, dar nu și pagina** — după `numar++` trebuie `afisaj.textContent = numar;`.  
7. **Ai creat variabila contorului în interiorul funcției** — se reface la fiecare click; trebuie în afară.  
8. **Ai folosit `innerHTML` cu text de la utilizator** — folosește `textContent`.  

---

## Recapitulare pe scurt
1. DOM-ul este structura paginii, pe care JavaScript o poate citi și schimba.  
2. `document.querySelector("#id")` găsește un element; `querySelectorAll` găsește toate.  
3. `element.textContent = "…"` schimbă textul; pentru text de la utilizator folosim doar `textContent`.  
4. `element.addEventListener("click", function () { … });` rulează funcția la click.  
5. `classList.add`, `remove` și `toggle` schimbă aspectul prin clase scrise în CSS.  
6. `camp.value` citește un câmp; `createElement` și `appendChild` adaugă elemente noi.

## Quiz scurt
- De ce punem scriptul înainte de `</body>`?  
- Cu ce selector găsești elementul cu `id="titlu"`?  
- Când rulează funcția din `addEventListener`?  
- Ce face `classList.toggle`?  
- Ce tip de valoare dă `camp.value`?

## Temă
1. Termină `Prenume_Nume_W4_L9` (Minim, apoi Complet).  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Trece mouse-ul peste buton.**

```javascript
const buton = document.querySelector("#buton");

buton.addEventListener("mouseover", function () {
  buton.textContent = "Mă vezi!";
});

buton.addEventListener("mouseout", function () {
  buton.textContent = "Apasă aici";
});
```

Evenimentul `mouseover` apare când mouse-ul intră pe element, iar `mouseout` când iese. Textul butonului se schimbă singur, fără click. Încearcă să schimbi și culoarea.

**Acasă 2 — Numărăm elementele din pagină.**

```javascript
const elemente = document.querySelectorAll("li");
console.log(elemente.length);
```

`querySelectorAll` dă o listă, iar `length` arată câte elemente a găsit. Numără cu el câte `<li>`, `<p>` sau `<img>` are pagina ta.

4. **Încă patru exerciții (B–E):**

**B — Ce se întâmplă?** Spune ce face fiecare cod: (1) `document.querySelector("#titlu").textContent = "Salut";` (2) `buton.addEventListener("click", function () { console.log("Click!"); });` (3) `document.body.classList.add("noapte");` (4) `const x = document.querySelector("#nu-exista"); console.log(x);`

**C — Scrie codul.** Scrie codul care: (1) schimbă textul unui paragraf cu `id="info"` în „Gata!”; (2) la click pe un buton `#ascunde`, adaugă clasa `ascuns` pe un element `#cutie` (clasa `.ascuns` o scrii în CSS cu `display: none;`) și o scoate la al doilea click; (3) citește textul din câmpul `#cuvant` și îl afișează cu litere mari în `#rezultat`.

**D — Găsește greșelile.** Găsește **3 greșeli** în codul de mai jos și repară greșelile. În pagină există un `<button id="buton">` și un `<p id="mesaj">`.

```text
const buton = document.querySelector("buton");
const mesaj = document.querySelector("#mesaj");

function spuneSalut() {
  mesaj.textcontent = "Salut!";
}

buton.addEventListener("click", spuneSalut());
```

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: ce este DOM-ul? Ce face `addEventListener`? De ce folosim `textContent` și nu `innerHTML` pentru text scris de utilizator?

## Ce urmează — Lecția 10
Proiectul final al modulului: **„Testul cu scor”**, un test făcut de tine, cu butoane, scor și mesaje, pe pagina ta, folosind tot ce ai învățat.

---

## Răspunsuri
- **Quiz scurt:** (1) pentru că elementele trebuie să existe în pagină înainte ca scriptul să le caute; (2) `document.querySelector("#titlu")`; (3) numai când apare evenimentul (de exemplu la click), nu imediat; (4) adaugă clasa dacă lipsește și o scoate dacă există (un comutator); (5) text (`string`), chiar dacă utilizatorul a scris un număr.  
- **Dacă ritmul clasei este lent:** `querySelectorAll`, `style.backgroundColor` și `focus()` sunt opționale; poți folosi CSS-ul din Exemplul 8 așa cum este, ca timpul să meargă pe JavaScript.  
- **Tema, exercițiul B:** (1) schimbă textul elementului cu `id="titlu"` în „Salut”; (2) la fiecare click pe `buton`, scrie „Click!” în consolă; (3) adaugă clasa `noapte` pe `<body>`; (4) afișează `null`, pentru că elementul nu există.  
- **Tema, exercițiul C:** (1) `document.querySelector("#info").textContent = "Gata!";`; (2) `document.querySelector("#ascunde").addEventListener("click", function () { document.querySelector("#cutie").classList.toggle("ascuns"); });` plus `.ascuns { display: none; }` în CSS; (3) `document.querySelector("#rezultat").textContent = document.querySelector("#cuvant").value.toUpperCase();` (într-un `click`).  
- **Tema, exercițiul D:** (1) `"buton"` trebuie `"#buton"`; (2) `textcontent` trebuie `textContent`; (3) `spuneSalut()` cu paranteze rulează imediat; trebuie `spuneSalut`.  
- **Tema, exercițiul E:** DOM este structura paginii ca un arbore de elemente; `addEventListener` spune unui element să ruleze o funcție când apare un eveniment; `textContent` tratează totul ca text, iar `innerHTML` poate rula cod rău intenționat.  
- **Bonus (indicii):** (1) ții o listă de culori și un contor `i`; la click treci la următoarea (`i = (i + 1) % culori.length`) și pui `culori[i]` în `style.backgroundColor`; (2) `if (lista.children.length > 0)` înainte de `lista.lastElementChild.remove()`; (3) pui în funcție ce ai scris la click, ca s-o chemi și din `keydown`; (4) în funcția contorului adaugi `if (numar === 10)` și scrii mesajul într-un `<p>` de sub contor.  
- **Notă informativă:** dacă „nu se întâmplă nimic”, verifică, în ordine: consola (mesaj roșu), selectorul (`#`), poziția scriptului și paranteza de la `addEventListener`. Nu scrie nume reale: folosește animale, jocuri sau personaje inventate. Nu trimiți nimic nicăieri: tot ce scrii rămâne în browserul tău. Ține minte: evenimentul este soneria, funcția este ce face portarul când sună.
