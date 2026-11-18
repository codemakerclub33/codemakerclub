# LECȚIA 10 — Testul cu scor
### Proiect: pagina interactivă
**Modulul 4 · JavaScript pentru începători · 2 ore**  
**Code Maker Club · JavaScript Starter**

> Ai învățat variabile, decizii, bucle, funcții, liste, obiecte, DOM și evenimente. Azi le pui pe toate într-un singur proiect: un **test cu întrebări și scor**, făcut de tine, chiar în `tema.html`, despre subiectul articolului tău de pe Wikipedia. Pagina pune o întrebare, tu alegi un răspuns, ea îți spune dacă ai nimerit, ține scorul și la final îți dă un mesaj.  
> Proiect: **„Testul cu scor”** · folder: `Prenume_Nume_W4_L10` (ex. `Ana_Pop_W4_L10`)

---

## Ce facem azi
La final ai, în `tema.html`, o secțiune „Testul cu scor”: o listă de întrebări (obiecte într-o listă), butoane de răspuns create din JavaScript, scor, mesaje pentru răspuns corect sau greșit, buton „Următoarea”, ecran final cu mesaj în funcție de scor și buton de reluare. Nu mai primești o pagină gata făcută: ai un plan, bucăți de cod pe care le înțelegi și o listă de verificare. Un proiect adevărat te obligă să folosești lucrurile învățate **împreună**: dacă o parte nu merge, vezi imediat. Este și un portofoliu bun: o pagină care **face ceva**, pe care o poți arăta familiei.

---

## Siguranță înainte de toate
- Testul este despre **subiectul articolului tău** (un animal, un loc sau un hobby, nu o persoană). Dacă ai alt subiect sigur și potrivit pentru copii, poți folosi altul: sport, jocuri, spațiu, geografie, matematică.  
- Nu cere și nu afișa **date personale** (nume complet, adresă, școală, telefon).  
- Întrebările trebuie să aibă un **răspuns corect clar**; verifică-le în articol sau cere unui adult să le verifice.  
- Nu copia întrebări sau imagini din surse de pe internet fără să le rescrii cu cuvintele tale.  
- Tot ce se întâmplă rămâne în browserul tău: pagina **nu trimite** nimic nicăieri.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare · pregătim folderul |
| 10–20 | Plan: subiectul, întrebările, harta testului (**Exemplul 1**) |
| 20–32 | Secțiunea în `tema.html` și stilul (**Exemplul 2**) |
| 32–42 | Datele: lista de întrebări (**Exemplul 3**) |
| 42–62 | Afișăm întrebarea și răspunsurile (**Exemplul 4**) |
| 62–77 | Alegem răspunsul și scorul (**Exemplul 5**) |
| 77–90 | „Următoarea”, ecranul final și reluarea (**Exemplul 6**) |
| 90–103 | Verificare cu lista (**Exemplul 7**) |
| 103–115 | Test cu un coleg · prezentare de un minut (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

Azi nu învățăm instrucțiuni noi, cu o singură excepție mică. Folosim lecțiile din tot modulul:

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `hidden` și `element.hidden = true;` | Ascunde sau arată un element | `butonUrmatoarea.hidden = false;` |

| Din lecția | Folosim |
|------------|---------|
| 2 și 3 | variabile, `+=`, text și numere |
| 4 | `if`, `else if`, `===` |
| 5 | `for` |
| 7 | funcții |
| 8 | liste, obiecte, `length` |
| 9 | `querySelector`, `textContent`, `addEventListener`, `classList`, `createElement`, `appendChild` |

---

## 1. Recapitulare rapidă

Din lecțiile trecute ții minte că:
- `document.querySelector("#id")` găsește un element, iar `textContent` îi schimbă textul;
- `addEventListener("click", function () { … })` rulează o funcție la click;
- o listă de obiecte se parcurge cu `for` sau cu `for…of`, iar `lista[i].eticheta` citește o proprietate;
- `classList.add("clasa")` schimbă aspectul prin CSS.

**Încearcă tu (10 min)**  
- [ ] Creează folderul `Prenume_Nume_W4_L10` ca o **copie** a folderului `Prenume_Nume_W4_L9` (cu `tema.html`, `script.js`, `stil.css`, `imagini`, `media`)  
- [ ] Lasă în `script.js` tot ce ai de la lecția 9; azi adaugi testul **sub** el (numele din cod nu se suprapun cu cele de la lecția 9)  
- [ ] Verifică ca linia `<script src="script.js"></script>` să fie **chiar înainte de `</body>`**  
- [ ] Deschide `tema.html` cu Live Server și verifică ca pagina să meargă ca la sfârșitul lecției 9  

> Exemplele de azi arată ce scrii în `tema.html`, în `stil.css` și în `script.js`.

---

## 2. Planul testului

### Exemplul 1 — Harta testului

Alege cinci lucruri din **articolul tău**, din care să faci întrebări. Gândește-te într-un comentariu:

```text
Titlul testului:      Cât știu despre animale?
Întrebări:            5 întrebări, fiecare cu 3 răspunsuri și unul corect
Ce vede jucătorul:    progres, întrebarea, 3 butoane, mesaj, scor, buton „Următoarea”
La final:             scorul și un mesaj (excelent / bine / mai încearcă) + buton „Joacă din nou”
```

Scrie cele **5 întrebări** (cu răspunsurile lor). Verifică întrebările: există un singur răspuns corect, iar răspunsul se găsește în articolul tău?

**Încearcă tu (8 min)**  
- [ ] Alege titlul testului, în legătură cu subiectul articolului  
- [ ] Scrie 5 întrebări din articol, fiecare cu 3 răspunsuri și răspunsul corect marcat  
- [ ] Verifică fiecare răspuns corect în articol  
- [ ] Scrie într-un comentariu cum arată secțiunea (titlu, butoane, rezultat)  

---

## 3. Secțiunea și stilul

### Exemplul 2 — HTML și CSS

În `tema.html`, în `<main>`, adaugă (de exemplu la sfârșit, înainte de subsol) secțiunea testului:

```html
<section id="test" class="carte">
  <h2>Testul cu scor</h2>

  <div id="joc">
    <p id="progres"></p>
    <h3 id="intrebare"></h3>
    <div id="raspunsuri"></div>
    <p id="feedback"></p>
    <button id="urmatoarea" hidden>Următoarea</button>
    <p>Scor: <span id="scor">0</span></p>
  </div>

  <div id="final" hidden>
    <h3>Testul s-a terminat!</h3>
    <p id="mesajFinal"></p>
    <button id="reia">Joacă din nou</button>
  </div>
</section>
```

Atributul `hidden` ascunde un element. Din JavaScript îl pornești și îl oprești cu `element.hidden = true;` sau `false`. La început, butonul „Următoarea” și ecranul final sunt ascunse.

În `stil.css` adaugă, la sfârșit, **înainte** de regulile `@media`:

```css
/* Testul cu scor */
[hidden] {
  display: none;
}

#raspunsuri {
  display: grid;
  gap: 10px;
  margin: 1rem 0;
}

#test button {
  min-height: 44px;
  padding: 12px 16px;
  font-size: 1rem;
  cursor: pointer;
}

/* Răspunsul corect și cel greșit, puse din JavaScript */
#test button.corect {
  background-color: seagreen;
  color: white;
}

#test button.gresit {
  background-color: crimson;
  color: white;
}

#feedback {
  font-weight: bold;
  min-height: 1.5em;
}
```

Clasele `.corect` și `.gresit` vor fi adăugate de JavaScript la butoane. **Reține**: fiecare lucru la locul lui: HTML pune elementele, CSS dă aspectul, JavaScript doar pornește și oprește clasele. Dacă pagina ta folosește variabile de culoare (`--accent`), poți folosi `var(--accent)` pentru butoane, în loc de culorile de aici.

**Încearcă tu (8 min)**  
- [ ] Adaugă secțiunea în `tema.html` și regulile în `stil.css`  
- [ ] Pune titlul tău la `<h2>` și verifică ca pagina să arate bine  
- [ ] Verifică dacă secțiunea se vede la fel de bine și în modul noapte de la lecția 9  
- [ ] Deschide DevTools în modul telefon și verifică dacă nu apare derulare pe orizontală  

**Gata când:**  
- [ ] `tema.html` are secțiunea `#test`, cu `#joc` și `#final`, cu elementele cu `id`  
- [ ] `stil.css` conține `[hidden]`, `.corect` și `.gresit`  
- [ ] Pagina se vede bine pe calculator și pe telefon  

---

## 4. Datele și prima întrebare

### Exemplul 3 — Întrebările, ca obiecte într-o listă

Sub codul din lecția 9, în `script.js`, adaugă datele:

```javascript
// ----- Datele testului -----
const intrebari = [
  {
    text: "Care este cel mai mare animal de pe uscat?",
    optiuni: ["Elefantul", "Girafa", "Calul"],
    corect: 0
  },
  {
    text: "Câte picioare are o insectă?",
    optiuni: ["4", "6", "8"],
    corect: 1
  },
  {
    text: "Ce mănâncă, în principal, un panda?",
    optiuni: ["Pește", "Carne", "Bambus"],
    corect: 2
  },
  {
    text: "Care animal poate să zboare?",
    optiuni: ["Liliacul", "Pisica", "Broasca"],
    corect: 0
  },
  {
    text: "În ce mediu trăiește delfinul?",
    optiuni: ["În deșert", "În apă", "Într-un copac"],
    corect: 1
  }
];
```

Fiecare întrebare este un **obiect** cu trei proprietăți: `text` (întrebarea), `optiuni` (o **listă** cu răspunsurile) și `corect` (**poziția** răspunsului corect în listă, numărând de la 0). La prima întrebare, `corect: 0` înseamnă „Elefantul”.

Scrie întrebările **tale**, din articolul tău. Respectă virgulele dintre proprietăți și dintre obiecte (nu și după ultimul).

**Încearcă tu (8 min)**  
- [ ] Scrie lista cu cele 5 întrebări ale tale, ca obiecte  
- [ ] Verifică ca fiecare `corect` să fie o poziție care există (de la 0 la `optiuni.length - 1`)  
- [ ] Afișează `intrebari.length` în consolă și verifică dacă este 5  
- [ ] Afișează în consolă textul celei de-a treia întrebări (`intrebari[2].text`)  

**Gata când:**  
- [ ] Ai o listă cu cel puțin 4 întrebări, ca obiecte  
- [ ] Fiecare are `text`, `optiuni` și `corect`  
- [ ] Ai verificat că `corect` este o poziție care există  

### Exemplul 4 — Găsim elementele și arătăm întrebarea

Continuă fișierul `script.js`:

```javascript
// ----- Elementele testului -----
const sectiuneJoc = document.querySelector("#joc");
const sectiuneFinal = document.querySelector("#final");
const progres = document.querySelector("#progres");
const textIntrebare = document.querySelector("#intrebare");
const raspunsuri = document.querySelector("#raspunsuri");
const feedback = document.querySelector("#feedback");
const butonUrmatoarea = document.querySelector("#urmatoarea");
const afisajScor = document.querySelector("#scor");
const mesajFinal = document.querySelector("#mesajFinal");
const butonReia = document.querySelector("#reia");

// ----- Starea jocului -----
let indice = 0;          // la ce întrebare suntem
let scor = 0;            // câte răspunsuri corecte
let amRaspuns = false;   // am ales deja un răspuns la întrebarea asta?

// ----- Arătăm întrebarea curentă -----
function arataIntrebarea() {
  const intrebare = intrebari[indice];
  amRaspuns = false;

  progres.textContent = `Întrebarea ${indice + 1} din ${intrebari.length}`;
  textIntrebare.textContent = intrebare.text;
  feedback.textContent = "";
  butonUrmatoarea.hidden = true;
  raspunsuri.textContent = "";   // golim butoanele vechi

  for (let i = 0; i < intrebare.optiuni.length; i++) {
    const buton = document.createElement("button");
    buton.textContent = intrebare.optiuni[i];

    buton.addEventListener("click", function () {
      alegeRaspuns(i, buton);
    });

    raspunsuri.appendChild(buton);
  }
}
```

Ce se întâmplă:
- `indice` ține minte **la ce întrebare** suntem; `scor` ține scorul; `amRaspuns` împiedică să răspunzi de două ori la aceeași întrebare;  
- pentru fiecare răspuns din listă, **creăm un buton** nou, îi punem textul și îl adăugăm în `#raspunsuri`;  
- fiecare buton ascultă `click` și cheamă `alegeRaspuns(i, buton)`, cu **poziția** lui (`i`) și cu **butonul** însuși. Folosim `let i` în buclă, deci fiecare buton își „aduce aminte” de propriul `i`.

Încă nu am scris `alegeRaspuns`; urmează.

**Încearcă tu (10 min)**  
- [ ] Scrie funcția `arataIntrebarea` și cheamă-o la sfârșitul fișierului cu `arataIntrebarea();`  
- [ ] Verifică dacă apar întrebarea și cele 3 butoane (dacă apeși pe ele, în consolă apare eroarea `alegeRaspuns is not defined`; este normal, pentru că funcția urmează)  
- [ ] Dacă apar erori roșii în consolă, citește mesajele (probabil o greșeală de `id` sau de scriere)  
- [ ] Schimbă `indice` în `2` și vezi că apare a treia întrebare (apoi pune-l la loc)  

**Gata când:**  
- [ ] Apare prima întrebare, cu progresul „Întrebarea 1 din …”  
- [ ] Apar atâtea butoane câte răspunsuri are întrebarea  
- [ ] Nu apar alte erori roșii decât `alegeRaspuns is not defined`  

---

## 5. Răspunsul, scorul și finalul

### Exemplul 5 — Alegem răspunsul

```javascript
// ----- Alegem un răspuns -----
function alegeRaspuns(pozitieAleasa, butonAles) {
  // Nu lăsăm să răspunzi de două ori
  if (amRaspuns) {
    return;
  }
  amRaspuns = true;

  const intrebare = intrebari[indice];

  if (pozitieAleasa === intrebare.corect) {
    scor++;
    feedback.textContent = "Corect! Bravo!";
    butonAles.classList.add("corect");
  } else {
    feedback.textContent = `Greșit. Răspunsul corect era: ${intrebare.optiuni[intrebare.corect]}.`;
    butonAles.classList.add("gresit");
    raspunsuri.children[intrebare.corect].classList.add("corect");
  }

  afisajScor.textContent = scor;

  // Textul butonului: la ultima întrebare arată altceva
  if (indice === intrebari.length - 1) {
    butonUrmatoarea.textContent = "Vezi rezultatul";
  } else {
    butonUrmatoarea.textContent = "Următoarea";
  }
  butonUrmatoarea.hidden = false;
}
```

- `pozitieAleasa === intrebare.corect` compară **poziția** apăsată cu cea corectă;  
- dacă ai nimerit, scorul crește și butonul apăsat devine verde (clasa `corect`);  
- dacă nu, butonul apăsat devine roșu, iar **răspunsul corect** se colorează verde: `raspunsuri.children[…]` este lista butoanelor din `#raspunsuri`, iar `corect` este poziția lui;  
- apare butonul „Următoarea” (sau „Vezi rezultatul” la ultima întrebare).

**Încearcă tu (8 min)**  
- [ ] Scrie funcția `alegeRaspuns` și verifică dacă un răspuns corect devine verde  
- [ ] Alege un răspuns greșit și verifică dacă răspunsul corect se colorează verde  
- [ ] Apasă de două ori pe răspunsuri diferite și verifică ca scorul să nu crească a doua oară  
- [ ] Citește funcția rând cu rând și spune ce face fiecare `if`  

### Exemplul 6 — Următoarea întrebare și finalul

```javascript
// ----- Trecem la următoarea întrebare -----
butonUrmatoarea.addEventListener("click", function () {
  indice++;

  if (indice < intrebari.length) {
    arataIntrebarea();
  } else {
    arataFinalul();
  }
});

// ----- Ecranul final -----
function arataFinalul() {
  sectiuneJoc.hidden = true;
  sectiuneFinal.hidden = false;

  const total = intrebari.length;
  let mesaj = `Ai răspuns corect la ${scor} din ${total} întrebări. `;

  if (scor === total) {
    mesaj += "Excelent! Nu ai greșit niciuna!";
  } else if (scor >= total / 2) {
    mesaj += "Foarte bine! Mai încearcă o dată pentru scor maxim.";
  } else {
    mesaj += "Mai încearcă, data viitoare iese mai bine!";
  }

  mesajFinal.textContent = mesaj;
}

// ----- Joacă din nou -----
butonReia.addEventListener("click", function () {
  indice = 0;
  scor = 0;
  afisajScor.textContent = scor;
  sectiuneFinal.hidden = true;
  sectiuneJoc.hidden = false;
  arataIntrebarea();
});

// ----- Pornim jocul -----
arataIntrebarea();
```

`indice++` trece la următoarea întrebare; dacă mai sunt întrebări, le arătăm, altfel ajungem la final. Mesajul final se alege cu `else if` (lecția 4), iar `+=` lipește bucăți de text (lecția 2). La „Joacă din nou” resetăm starea și pornim din nou. **Ultima linie** (`arataIntrebarea();`) pornește jocul când se încarcă pagina; dacă ai pus-o mai devreme pentru încercare, lasă-o doar aici, la sfârșit.

Ordinea codului testului în `script.js`: **datele** (lista de întrebări), **elementele și starea**, funcția `arataIntrebarea`, funcția `alegeRaspuns`, ascultătorul pentru „Următoarea”, `arataFinalul`, ascultătorul pentru „Joacă din nou”, apoi pornirea.

**Încearcă tu (10 min)**  
- [ ] Scrie ascultătorul pentru „Următoarea” și funcția `arataFinalul`  
- [ ] Joacă testul până la capăt, o dată cu toate răspunsurile corecte și o dată cu toate greșite  
- [ ] Apasă „Joacă din nou” și verifică dacă scorul și progresul se reiau de la început  
- [ ] Schimbă mesajele de final cu ale tale, despre subiectul articolului  

**Gata când:**  
- [ ] Apăsarea unui răspuns arată „Corect!” sau „Greșit.” și colorează butoanele  
- [ ] Scorul crește numai la răspunsurile corecte  
- [ ] Nu poți răspunde de două ori la aceeași întrebare  
- [ ] „Următoarea” te duce la întrebarea următoare, iar la final apare mesajul cu scorul  
- [ ] „Joacă din nou” pornește testul de la început  

---

## 6. Mini-proiect: verificăm și prezentăm

### Exemplul 7 — Lista de verificare

Bifează fiecare punct, în pagina ta:

```text
□ Subiectul este potrivit și nu apar date personale
□ Am cel puțin 4 întrebări din articol, fiecare cu răspunsul corect marcat bine
□ Întrebările sunt într-o listă de obiecte (text, optiuni, corect)
□ Butoanele de răspuns sunt create cu createElement și appendChild
□ La răspuns apare mesaj și butonul se colorează (clase din CSS)
□ Scorul se calculează corect și nu poți răspunde de două ori
□ Se vede progresul (Întrebarea 2 din 5)
□ La final apare un mesaj diferit în funcție de scor (else if)
□ „Joacă din nou” resetează totul
□ Textul din pagină este pus cu textContent (nu innerHTML)
□ Consola nu arată erori roșii
□ Codul este indentat și are comentarii
□ Pagina arată bine și pe telefon (DevTools, modul telefon)
□ Partea de la lecția 9 (modul noapte, contor, listă) merge în continuare
```

Dacă un punct nu este bifat, repară înainte să prezinți.

**Încearcă tu (12 min)**  
- [ ] Parcurge lista și bifează fiecare punct, în ordine  
- [ ] Repară cel puțin un punct nebifat  
- [ ] Testează cu tastatura: apasă Tab până la un răspuns și Enter  
- [ ] Verifică din nou fiecare întrebare din articol, cu răspunsul ei  

### Exemplul 8 — Prezentarea de un minut

Spune colegilor, în ordine:
1. „Testul meu este despre …”  
2. „Am făcut … întrebări; cea mai grea este …”  
3. „Cel mai mândru sunt de …” (o parte a paginii)  
4. „Cel mai greu mi s-a părut …, iar soluția a fost: …”  
5. „Dacă aș mai avea timp, aș adăuga …”  

Lasă un coleg să joace testul. Colegul îți spune **un lucru reușit** și **un lucru care se poate îmbunătăți** (cu politețe).

**Încearcă tu (10 min)**  
- [ ] Scrie cele cinci propoziții ale prezentării  
- [ ] Exersează-le o dată cu voce tare  
- [ ] Lasă un coleg să joace testul și notează ce îți spune  
- [ ] Alege o îmbunătățire pe care o faci acasă  

**Gata când:**  
- [ ] Ai bifat toate punctele din listă  
- [ ] Un coleg a jucat testul  
- [ ] Ai făcut prezentarea de un minut  

---

## De făcut azi — „Testul cu scor”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | În `tema.html`, un test cu cel puțin 4 întrebări, în care apeși un răspuns, vezi „Corect!” sau „Greșit.” și la final vezi scorul |
| **Complet** | Minim + stil făcut cu CSS (clasele `corect` și `gresit`), progres („Întrebarea 2 din 5”), blocarea răspunsului după prima alegere, mesaj final cu `else if`, buton „Joacă din nou”, comentarii și prezentarea de un minut |

### Pasul 1 — Minim
În folderul `Prenume_Nume_W4_L10`:

- [ ] `tema.html` are secțiunea testului, iar `script.js` are lista de întrebări  
- [ ] Apar întrebarea și butoanele de răspuns  
- [ ] Apeși un răspuns și vezi dacă ai nimerit, iar la final vezi scorul  

### Pasul 2 — Complet
- [ ] Ai stil cu clasele `corect` și `gresit`, scrise în CSS  
- [ ] Vezi progresul („Întrebarea 2 din 5”)  
- [ ] Nu poți răspunde de două ori la aceeași întrebare  
- [ ] Mesajul final se alege cu `else if`  
- [ ] Ai butonul „Joacă din nou”  
- [ ] Codul este indentat și are comentarii  

---

## Bonus ★★★ — Provocare: Testul mai bun
*Doar dacă ai terminat Complet.*

Faci testul mai interesant, cu ordine nouă, timp și record.

- [ ] Amestecă ordinea întrebărilor la fiecare joc (caută „shuffle” cu `sort` și `Math.random`, cu ajutorul profesorului)  
- [ ] Adaugă un cronometru de 15 secunde pentru fiecare întrebare, cu `setInterval` (profesorul îți arată cum)  
- [ ] Salvează cel mai bun scor în browser cu `localStorage.setItem("record", scor)` și afișează recordul la final (rămâne doar în browserul tău)  
- [ ] Adaugă o imagine desenată de tine (sau din pachetul media) pentru fiecare întrebare, prin proprietatea `imagine` din obiecte  

---

## Greșeli frecvente
1. **Răspunsul corect marcat greșit** — `corect: 2` când sunt doar 2 opțiuni (pozițiile sunt 0 și 1).  
2. **Ai uitat virgula** între proprietăți sau între obiectele din listă, sau ai pus `=` în loc de `===` în comparația răspunsului.  
3. **Ai scris `i <= optiuni.length`** — o rundă în plus, cu `undefined`.  
4. **Ai uitat `amRaspuns`** — poți răspunde de mai multe ori și scorul crește greșit.  
5. **Ai uitat să golești butoanele vechi** (`raspunsuri.textContent = ""`) — se adună butoane la fiecare întrebare.  
6. **Ai uitat să resetezi `indice` și `scor`** la „Joacă din nou”.  
7. **Ai scris `id` diferit** în HTML și în `querySelector` (apar erori „null”) sau scriptul nu este înainte de `</body>`.  
8. **Ai pus date personale sau întrebări nepotrivite** — folosește subiecte sigure și verificate.  

---

## Recapitulare pe scurt
1. Datele stau într-o listă de obiecte; programul le arată și le verifică.  
2. Starea jocului (`indice`, `scor`, `amRaspuns`) se ține în variabile.  
3. Elementele noi se creează cu `createElement` și se adaugă cu `appendChild`.  
4. Aspectul se schimbă prin clase scrise în CSS (`classList.add`).  
5. Deciziile (`if`, `else if`) aleg mesajele; funcțiile țin codul ordonat.  
6. Verifici proiectul cu o listă, îl testezi cu un coleg și îl prezinți.

## Quiz scurt
- Cum arată o întrebare în lista ta?  
- Ce ține minte variabila `indice`?  
- De ce nu poți răspunde de două ori la aceeași întrebare?  
- Cum se alege mesajul final?  
- Ce face `butonUrmatoarea.hidden = true;`?

## Temă
1. Termină `Prenume_Nume_W4_L10`.  
2. Arată testul unui membru al familiei și lasă persoana să joace. Notează care întrebare a fost cea mai grea și, dacă vrei, adaugă o întrebare nouă.  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Scorul în procente.**

```javascript
const total = 5;
const scorFinal = 4;
const procent = Math.round((scorFinal / total) * 100);
console.log(`Ai nimerit ${procent}%.`);
```

Afișează `Ai nimerit 80%.`: împarți scorul la total, înmulțești cu 100 și rotunjești. Pune procentul în mesajul final al testului tău.

**Acasă 2 — Butoane blocate.**

```javascript
for (const buton of raspunsuri.children) {
  buton.disabled = true;
}
```

Atributul `disabled` face un buton să nu mai răspundă la click și îl arată estompat. Pune bucla în `alegeRaspuns`, după ce ai ales un răspuns, și vezi cum se schimbă pagina; apoi poți șterge `amRaspuns` dacă nu mai ai nevoie de el.

4. **Exerciții (B–D):**

**B — Autoevaluare.** Într-un comentariu din cod, notează de la 1 la 5 cât de bine ai înțeles fiecare lecție din modul (console.log, variabile, numere și text, decizii, `for`, `while`, funcții, liste și obiecte, DOM și evenimente). Scrie două lecții pe care vrei să le mai repeți.

**C — Găsește greșelile.** Găsește **3 greșeli** în codul de mai jos și repară greșelile.

```text
const intrebari = [
  { text: "2 + 2 = ?", optiuni: ["3", "4"], corect: 2 }
];

function verifica(pozitie) {
  if (pozitie = intrebari[0].corect) {
    scor++;
  }
}

for (let i = 0; i <= intrebari[0].optiuni.length; i++) {
  console.log(intrebari[0].optiuni[i]);
}
```

**D — Explică cu cuvintele tale.** Într-un comentariu din cod: de ce întrebările sunt obiecte într-o listă? De ce folosim variabila `amRaspuns`? De ce folosim `textContent`, nu `innerHTML`?

## Ce urmează — Modulul 5
Construim un **site complet** din mai multe pagini, cu meniu, galerie și formular care funcționează, folosind HTML, CSS și JavaScript împreună.

---

## Răspunsuri
- **Quiz scurt:** (1) un obiect cu `text` (întrebarea), `optiuni` (lista de răspunsuri) și `corect` (poziția răspunsului corect, numărând de la 0); (2) la ce întrebare suntem, adică poziția în lista de întrebări; (3) după primul răspuns `amRaspuns` devine `true`, iar `alegeRaspuns` iese din funcție cu `return`; (4) cu `if` / `else if` după scor: scor egal cu total înseamnă „Excelent”, cel puțin jumătate înseamnă „Foarte bine”, altfel „Mai încearcă”; (5) ascunde butonul „Următoarea”.  
- **Dacă ritmul clasei este lent:** CSS-ul din Exemplul 2 îl poți copia așa cum este; scrii doar `script.js`. Dacă nu termini, un test cu 3 întrebări care funcționează complet este suficient.  
- **Tema, exercițiul B:** nu are răspuns corect; este pentru tine. Notează lecțiile pe care vrei să le repeți și revino la ele.  
- **Tema, exercițiul C:** (1) `corect: 2` nu există la două opțiuni (trebuie `1`); (2) `pozitie = …` trebuie `pozitie === …`; (3) `i <= …length` trebuie `i < …length`.  
- **Tema, exercițiul D:** o listă de obiecte ține întrebările ordonat, iar programul le parcurge cu un indice; `amRaspuns` împiedică răspunsul dublu; `textContent` tratează totul ca text.  
- **Bonus (indicii):** (1) un „shuffle” simplu este `intrebari.sort(function () { return Math.random() - 0.5; });`, făcut o singură dată, înainte de prima întrebare; (2) `setInterval` repetă o funcție la un interval în milisecunde, iar `clearInterval` o oprește; ține minte timpul rămas într-o variabilă; (3) citești recordul cu `localStorage.getItem("record")`, îl compari cu scorul și îl salvezi doar dacă scorul este mai mare; (4) la obiecte adaugi `imagine: "imagini/nume.jpg"`, iar în `arataIntrebarea` creezi un `<img>` cu `createElement("img")`, `src` și `alt`.  
- **Notă informativă:** la Exemplul 4, fiecare buton „își aduce aminte” de `i` pentru că variabila `let` din buclă se creează nouă la fiecare rundă. Nu trebuie să reții explicația tehnică, doar să vezi că merge. Dacă te blochezi, deschide consola și citește mesajul roșu cu voce tare. Pentru bonusuri (`setInterval`, `localStorage`), uită-te la cod și adaptează-l pentru jocul tău. Verifică întrebările tale: răspunsurile corecte trebuie să fie clare, iar subiectele potrivite pentru copii.
