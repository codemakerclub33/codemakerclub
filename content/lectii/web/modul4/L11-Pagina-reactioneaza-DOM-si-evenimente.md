# LECȚIA 11 — Pagina reacționează: DOM și evenimente
**Modulul 4 · JavaScript pentru începători · 2 ore**  
**Code Maker Club · JavaScript Starter**

> Până acum rezultatele programelor tale apăreau doar în consolă. Azi **pagina însăși prinde viață**: apeși un buton și se schimbă un text, scrii un cuvânt și apare într-o listă, apeși alt buton și pagina trece în „modul noapte”. Pentru asta înveți două lucruri: cum **găsește** JavaScript elementele paginii (DOM) și cum **ascultă** ce face utilizatorul (evenimente).  
> Proiect: **„Pagina mea care reacționează”** · folder: `Prenume_Nume_W4_L11` (ex. `Ana_Pop_W4_L11`)

---

## Obiectiv
La finalul orei știi ce este DOM-ul, cum găsești un element cu `document.querySelector`, cum îi schimbi textul cu `textContent`, cum îi schimbi aspectul cu `classList`, cum asculți un click cu `addEventListener`, cum citești ce a scris utilizatorul într-un câmp și cum adaugi un element nou în pagină.  
**Minim:** un buton care, la apăsare, schimbă un text din pagină.  
**Ținta orei (Complet):** + un contor cu butoane, un buton care schimbă aspectul paginii, o listă la care adaugi elemente dintr-un câmp de text și explicarea diferenței dintre a scrie o funcție și a o lăsa să ruleze la un eveniment.

## De ce contează
Aici se întâlnesc cele trei limbaje: HTML pune elementele, CSS le dă aspectul, JavaScript le face să reacționeze. Fiecare site cu butoane, jocuri, formulare și meniuri care se deschid folosește exact aceste unelte.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–35 | DOM: găsim un element, îi schimbăm textul (**Exemplele 1–2**) |
| 35–60 | Evenimente: `click` (**Exemplele 3–4**) |
| 60–75 | Schimbăm aspectul cu `classList` (**Exemplul 5**) |
| 75–95 | Citim un câmp de text · adăugăm în listă (**Exemplele 6–7**) |
| 95–115 | Proiect (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- un obiect are proprietăți: `obiect.eticheta`;
- poți schimba o proprietate cu `obiect.eticheta = valoare;`;
- o funcție primește parametri și poate returna un rezultat;
- `const` ține un obiect sau o listă, dar permite schimbarea conținutului.

**Încearcă tu (4 min)**  
- [ ] Creează folderul `Prenume_Nume_W4_L11` cu `index.html` (scheletul complet) și `script.js`  
- [ ] Pune în `index.html` un `<h1 id="titlu">Pagina mea</h1>`, un `<p id="mesaj">Salut!</p>` și un `<button id="buton">Apasă aici</button>`  
- [ ] Leagă `script.js` cu `<script src="script.js"></script>` **chiar înainte de `</body>`** (este important: elementele trebuie să existe înainte să le cauți)  

> De aici înainte, exemplele arată ce scrii în `index.html` și, separat, în `script.js`.

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

Dacă ai mai multe elemente cu aceeași clasă, `querySelectorAll` le găsește pe **toate**, iar tu le parcurgi cu `for…of`:

```javascript
const carti = document.querySelectorAll(".carte");

for (const carte of carti) {
  carte.textContent = "Carte schimbată";
}
```

**Gata când:**  
- [ ] Ai găsit un element cu `querySelector` și ai schimbat textul cu `textContent`  
- [ ] Poți explica ce este DOM-ul  
- [ ] Știi de ce scriptul este înainte de `</body>`  
- [ ] Știi de ce nu folosim `innerHTML` cu text scris de utilizator  

---

## 3. Evenimente: ascultăm utilizatorul

### Exemplul 3 — `click`

Un **eveniment** este ceva ce se întâmplă în pagină: un click, o tastă apăsată, mouse-ul care trece peste ceva. Poți spune unui element: „când se întâmplă X, rulează funcția asta”.

În `index.html`:

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

Dacă pagina nu se schimbă, deschide consola (F12): apare un mesaj roșu care spune ce nu merge.

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
- [ ] Fă un buton care schimbă textul unui titlu  
- [ ] Fă un contor cu butoane de +1, −1 și reset  
- [ ] Verifică în consolă ce eroare apare dacă scrii greșit un selector  

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
- [ ] Fă un câmp de text și un buton care afișează un salut cu textul scris  
- [ ] Verifică dacă textul este gol înainte să afișezi textul  
- [ ] Fă o listă la care adaugi elemente dintr-un câmp, cu golirea câmpului după adăugare  

---

## 6. Proiectul

### Exemplul 8 — „Pagina mea care reacționează”

Fișierul `index.html`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pagina mea care reacționează</title>
  <link rel="stylesheet" href="stil.css">
</head>
<body>
  <header>
    <h1 id="titlu">Pagina mea care reacționează</h1>
    <button id="tema">Mod noapte</button>
  </header>

  <main>
    <section class="carte">
      <h2>Contor de goluri</h2>
      <p class="mare">Goluri: <span id="numar">0</span></p>
      <button id="plus">+1</button>
      <button id="minus">-1</button>
      <button id="reset">Resetează</button>
    </section>

    <section class="carte">
      <h2>Jocurile mele preferate</h2>
      <input type="text" id="joc" placeholder="Scrie un joc">
      <button id="adauga">Adaugă</button>
      <p id="eroare" class="eroare"></p>
      <ul id="lista"></ul>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

Fișierul `stil.css`:

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f9f9;
  color: #264653;
  transition: background-color 0.3s ease, color 0.3s ease;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  background-color: navy;
  color: white;
  padding: 10px 20px;
}

header h1 {
  margin: 0;
  font-size: 1.4rem;
}

main {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  display: grid;
  gap: 20px;
}

.carte {
  background-color: white;
  color: #264653;
  border: 2px solid navy;
  border-radius: 12px;
  padding: 1rem;
}

.mare {
  font-size: 1.5rem;
}

button {
  background-color: navy;
  color: white;
  border: none;
  padding: 10px 16px;
  min-height: 44px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
}

button:hover,
button:focus {
  background-color: crimson;
}

input {
  padding: 10px;
  font-size: 1rem;
  min-height: 44px;
  border: 2px solid navy;
  border-radius: 8px;
}

.eroare {
  color: crimson;
  min-height: 1.2em;
}

/* Modul noapte, pornit și oprit din JavaScript */
.noapte {
  background-color: #1d2d44;
  color: white;
}
```

Fișierul `script.js`:

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

// ----- 3. Lista de jocuri -----
const campJoc = document.querySelector("#joc");
const butonAdauga = document.querySelector("#adauga");
const eroare = document.querySelector("#eroare");
const lista = document.querySelector("#lista");

const MAX_JOCURI = 8;

butonAdauga.addEventListener("click", function () {
  const text = campJoc.value.trim();

  if (text === "") {
    eroare.textContent = "Scrie mai întâi numele unui joc.";
    return;
  }

  if (lista.children.length >= MAX_JOCURI) {
    eroare.textContent = `Lista are deja ${MAX_JOCURI} jocuri.`;
    return;
  }

  eroare.textContent = "";

  const element = document.createElement("li");
  element.textContent = text;
  lista.appendChild(element);

  campJoc.value = "";
  campJoc.focus();
});
```

Observă cum **lucrează toate împreună**: CSS-ul scris în Modulul 3 (cu clasa `.noapte`), funcțiile din lecția 8, `if` din lecțiile 4–5 și evenimentele de azi. Contorul nu coboară sub 0, câmpul gol primește un mesaj, iar lista are o limită.

Personalizează proiectul: alt subiect (animale, filme), alt contor (puncte, vieți), alte culori. Nu cere nume reale și nu pune date personale.

**Gata când:**  
- [ ] Butonul „Mod noapte” schimbă aspectul paginii  
- [ ] Contorul merge cu +1, −1 (nu coboară sub 0) și reset  
- [ ] Lista primește jocuri noi, golește câmpul și avertizează la câmp gol  
- [ ] Consola nu arată erori roșii  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Pagina mea care reacționează” (obligatoriu)
În folderul `Prenume_Nume_W4_L11` ai `index.html`, `stil.css` și `script.js`, cu:
- scriptul legat **chiar înainte de `</body>`**;
- un **contor** cu cel puțin două butoane și o variabilă care ține minte valoarea;
- un buton care schimbă aspectul paginii cu `classList.toggle` (clasa scrisă în CSS);
- un **câmp de text** și o **listă** la care adaugi elemente cu `createElement` și `appendChild`, cu verificarea câmpului gol;
- text pus în pagină doar cu `textContent` (nu `innerHTML`);
- cod indentat și cel puțin două comentarii.

### Exercițiul B — Ce se întâmplă?
Spune ce face fiecare cod: (1) `document.querySelector("#titlu").textContent = "Salut";` (2) `buton.addEventListener("click", function () { console.log("Click!"); });` (3) `document.body.classList.add("noapte");` (4) `const x = document.querySelector("#nu-exista"); console.log(x);`

### Exercițiul C — Scrie codul
Scrie codul care: (1) schimbă textul unui paragraf cu `id="info"` în „Gata!”; (2) la click pe un buton `#ascunde`, adaugă clasa `ascuns` pe un element `#cutie` (clasa `.ascuns` o scrii în CSS cu `display: none;`) și o scoate la al doilea click; (3) citește textul din câmpul `#cuvant` și îl afișează cu litere mari în `#rezultat`.

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile. În pagină există un `<button id="buton">` și un `<p id="mesaj">`.

```text
const buton = document.querySelector("buton");
const mesaj = document.querySelector("#mesaj");

function spuneSalut() {
  mesaj.textcontent = "Salut!";
}

buton.addEventListener("click", spuneSalut());
```

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: ce este DOM-ul? Ce face `addEventListener`? De ce folosim `textContent` și nu `innerHTML` pentru text scris de utilizator?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W4_L11` are `index.html`, `stil.css` și `script.js`  
- [ ] Pagina funcționează fără erori în consolă  
- [ ] Ai răspuns la exercițiile B–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Fă un buton care schimbă culoarea de fundal a unei cutii, ciclic, printr-o listă de culori (folosește un contor și `culori[i]`)  
- [ ] Adaugă la listă un buton „Șterge ultimul” cu `lista.lastElementChild.remove()` (verifică întâi dacă lista nu este goală)  
- [ ] Fă ca tasta **Enter** să adauge un element în listă: `campJoc.addEventListener("keydown", function (e) { if (e.key === "Enter") { … } })`  
- [ ] Afișează sub contor un mesaj „Gol de aur!” când contorul ajunge la 10  

---

## Greșeli frecvente
1. **Scriptul este înainte de elemente** (în `<head>` sau la început) — elementele nu există încă; pune scriptul înainte de `</body>`.  
2. **Selector greșit** — `querySelector("buton")` caută un tag `<buton>`; pentru `id` scrii `"#buton"`.  
3. **Ai scris `getElementById("#buton")` cu `#`** — la `getElementById` nu se pune `#`; la `querySelector` se pune.  
4. **Ai scris `addEventListener("click", functie())`** — cu paranteze, funcția rulează imediat. Scrie numele ei fără paranteze (`functie`) sau o funcție scrisă direct acolo.  
5. **Ai scris `textcontent`** sau `Textcontent` — corect este `textContent` (cu C mare).  
6. **Ai uitat `.value`** la un câmp de text — `camp` este elementul, `camp.value` este textul scris.  
7. **Ai schimbat variabila, dar nu și pagina** — după `numar++` trebuie `afisaj.textContent = numar;`.  
8. **Ai creat variabila contorului în interiorul funcției** — se reface la fiecare click; trebuie în afară.  
9. **Ai folosit `innerHTML` cu text de la utilizator** — folosește `textContent`.  
10. **Ai uitat să golești câmpul** după adăugare — rămâne textul vechi.  

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
Fă o pagină „Colecția mea”: un câmp și un buton care adaugă elemente într-o listă, un contor cu câte elemente ai adăugat și un buton „Golește lista”. Salvează în `Prenume_Nume_W4_L11`.

## Ce urmează — Lecția 12
Proiectul final al modulului: **„Pagina interactivă”**, un mic joc sau un test făcut de tine, cu butoane, scor și mesaje, folosind tot ce ai învățat.

---

## Răspunsuri pentru profesor
- **Exercițiul B:** (1) schimbă textul elementului cu `id="titlu"` în „Salut”; (2) la fiecare click pe `buton`, scrie „Click!” în consolă; (3) adaugă clasa `noapte` pe `<body>`; (4) afișează `null`, pentru că elementul nu există.  
- **Exercițiul C:** (1) `document.querySelector("#info").textContent = "Gata!";`; (2) `document.querySelector("#ascunde").addEventListener("click", function () { document.querySelector("#cutie").classList.toggle("ascuns"); });` plus `.ascuns { display: none; }` în CSS; (3) `document.querySelector("#rezultat").textContent = document.querySelector("#cuvant").value.toUpperCase();` (într-un `click`).  
- **Exercițiul D:** (1) `"buton"` trebuie `"#buton"`; (2) `textcontent` trebuie `textContent`; (3) `spuneSalut()` cu paranteze rulează imediat; trebuie `spuneSalut`.  
- **Exercițiul E:** DOM este structura paginii ca un arbore de elemente; `addEventListener` spune unui element să ruleze o funcție când apare un eveniment; `textContent` tratează totul ca text, iar `innerHTML` poate rula cod rău intenționat.  
- **Notă pentru profesor:** cea mai frecventă problemă este „nu se întâmplă nimic”: verificați, în ordine, consola (mesaj roșu), selectorul (`#`), poziția scriptului și paranteza la `addEventListener`. În clasă, nu cereți nume reale: folosiți animale, jocuri sau personaje inventate, iar elevii să nu trimită nimic nicăieri: tot ce se scrie rămâne în browserul lor. Analogie utilă: evenimentul este soneria, funcția este ce face portarul când sună.
