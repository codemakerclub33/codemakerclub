# LECȚIA 10 — Proiect: Pagina interactivă
**Modulul 4 · JavaScript pentru începători · 2 ore**  
**Code Maker Club · JavaScript Starter**

> Ai învățat variabile, decizii, bucle, funcții, liste, obiecte, DOM și evenimente. Azi le pui pe toate într-un singur proiect: un **test cu întrebări și scor**, făcut de tine, pe un subiect la alegere. Pagina pune o întrebare, tu alegi un răspuns, ea îți spune dacă ai nimerit, ține scorul și la final îți dă un mesaj.  
> Proiect: **„Testul meu cu scor”** · folder: `Prenume_Nume_W4_L10` (ex. `Ana_Pop_W4_L10`)

---

## Obiectiv
La finalul orei ai o pagină interactivă completă, cu o listă de întrebări (obiecte într-o listă), butoane de răspuns create din JavaScript, scor, mesaje pentru răspuns corect sau greșit, buton „Următoarea”, ecran final cu mesaj în funcție de scor și buton de reluare.  
**Minim:** un test cu cel puțin 4 întrebări, în care apeși un răspuns, vezi „Corect!” sau „Greșit!” și la final vezi scorul.  
**Ținta orei (Complet):** + stil făcut cu CSS (clase `corect` și `gresit`), progres („Întrebarea 2 din 5”), blocarea răspunsului după prima alegere, mesaj final cu `else if`, buton „Joacă din nou”, comentarii și o prezentare de un minut.

## De ce contează
Un proiect adevărat te obligă să folosești lucrurile învățate **împreună**: dacă o parte nu merge, vezi imediat. Este și un portofoliu bun: o pagină care **face ceva**, pe care o poți arăta familiei.

---

## Siguranță înainte de toate
- Alege un subiect **sigur și potrivit pentru copii**: animale, sport, jocuri, spațiu, geografie, matematică.  
- Nu cere și nu afișa **date personale** (nume complet, adresă, școală, telefon).  
- Întrebările trebuie să aibă un **răspuns corect clar**; cere unui adult să verifice întrebările sau caută răspunsurile într-o sursă bună.  
- Nu copia întrebări sau imagini din surse de pe internet fără să le rescrii cu cuvintele tale.  
- Tot ce se întâmplă rămâne în browserul tău: pagina **nu trimite** nimic nicăieri.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Plan: subiectul, întrebările, harta paginii (**Exemplul 1**) |
| 15–30 | Scheletul paginii și stilul (**Exemplul 2**) |
| 30–45 | Datele: lista de întrebări (**Exemplul 3**) |
| 45–70 | Afișăm întrebarea și răspunsurile (**Exemplul 4**) |
| 70–90 | Alegem răspunsul, scorul și „Următoarea” (**Exemplele 5–6**) |
| 90–105 | Verificare cu lista (**Exemplul 7**) |
| 105–115 | Test cu un coleg · prezentare de un minut (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## 1. Planul

### Exemplul 1 — Harta testului

Alege subiectul (de exemplu „Animale”) și gândește-te pe foaie:

```text
Titlul testului:      Cât știu despre animale?
Întrebări:            5 întrebări, fiecare cu 3 răspunsuri și unul corect
Ce vede jucătorul:    progres, întrebarea, 3 butoane, mesaj, scor, buton „Următoarea”
La final:             scorul și un mesaj (excelent / bine / mai încearcă) + buton „Joacă din nou”
```

Scrie cele **5 întrebări** (cu răspunsurile lor). Verifică întrebările: există un singur răspuns corect?

**Încearcă tu (8 min)**  
- [ ] Alege subiectul și titlul testului  
- [ ] Scrie 5 întrebări, fiecare cu 3 răspunsuri și răspunsul corect marcat  
- [ ] Desenează pe foaie cum arată pagina  
- [ ] Creează folderul `Prenume_Nume_W4_L10` cu `index.html`, `stil.css` și `script.js`  

---

## 2. Scheletul și stilul

### Exemplul 2 — HTML și CSS

Fișierul `index.html`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Testul meu cu scor</title>
  <link rel="stylesheet" href="stil.css">
</head>
<body>
  <header>
    <h1>Cât știu despre animale?</h1>
  </header>

  <main>
    <section id="joc" class="carte">
      <p id="progres"></p>
      <h2 id="intrebare"></h2>
      <div id="raspunsuri"></div>
      <p id="feedback"></p>
      <button id="urmatoarea" hidden>Următoarea</button>
      <p>Scor: <span id="scor">0</span></p>
    </section>

    <section id="final" class="carte" hidden>
      <h2>Testul s-a terminat!</h2>
      <p id="mesajFinal"></p>
      <button id="reia">Joacă din nou</button>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

Atributul `hidden` ascunde un element. Din JavaScript îl pornești și îl oprești cu `element.hidden = true;` sau `false`. La început, butonul „Următoarea” și ecranul final sunt ascunse.

Fișierul `stil.css`:

```css
* {
  box-sizing: border-box;
}

[hidden] {
  display: none;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f9f9;
  color: #264653;
}

header {
  background-color: navy;
  color: white;
  text-align: center;
  padding: 1rem;
}

header h1 {
  margin: 0;
  font-size: clamp(1.4rem, 5vw, 2.2rem);
}

main {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
}

.carte {
  background-color: white;
  border: 2px solid navy;
  border-radius: 12px;
  padding: 1rem;
}

#raspunsuri {
  display: grid;
  gap: 10px;
  margin: 1rem 0;
}

button {
  background-color: navy;
  color: white;
  border: none;
  padding: 12px 16px;
  min-height: 44px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover,
button:focus {
  background-color: #3a4fa3;
}

/* Răspunsul corect și cel greșit, puse din JavaScript */
button.corect {
  background-color: seagreen;
}

button.gresit {
  background-color: crimson;
}

#feedback {
  font-weight: bold;
  min-height: 1.5em;
}
```

Clasele `.corect` și `.gresit` vor fi adăugate de JavaScript la butoane. **Reține**: fiecare lucru la locul lui: HTML pune elementele, CSS dă aspectul, JavaScript doar pornește și oprește clasele.

**Gata când:**  
- [ ] `index.html` are secțiunile `joc` și `final`, cu elementele cu `id`  
- [ ] `stil.css` este legat și conține `[hidden]`, `.corect` și `.gresit`  
- [ ] Pagina se vede bine pe calculator și pe telefon  

---

## 3. Datele: lista de întrebări

### Exemplul 3 — Întrebările, ca obiecte într-o listă

Fișierul `script.js` începe cu datele:

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

Scrie întrebările **tale**, pe subiectul ales. Respectă virgulele dintre proprietăți și dintre obiecte (nu și după ultimul).

**Gata când:**  
- [ ] Ai o listă cu cel puțin 4 întrebări, ca obiecte  
- [ ] Fiecare are `text`, `optiuni` și `corect`  
- [ ] Ai verificat că `corect` este o poziție care există (de la 0 la `optiuni.length - 1`)  

---

## 4. Afișăm întrebarea

### Exemplul 4 — Găsim elementele și arătăm întrebarea

Continuă fișierul `script.js`:

```javascript
// ----- Elementele paginii -----
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

**Încearcă tu (6 min)**  
- [ ] Scrie funcția `arataIntrebarea` și cheamă funcția la sfârșit cu `arataIntrebarea();`  
- [ ] Verifică dacă apar întrebarea și cele 3 butoane (dacă apeși pe ele, în consolă apare eroarea `alegeRaspuns is not defined`; este normal, pentru că funcția urmează)  
- [ ] Dacă apar erori roșii în consolă, citește mesajele (probabil o greșeală de `id` sau de scriere)  

---

## 5. Alegem răspunsul și mergem mai departe

### Exemplul 5 — Răspunsul și scorul

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

`indice++` trece la următoarea întrebare; dacă mai sunt întrebări, le arătăm, altfel ajungem la final. Mesajul final se alege cu `else if` (lecția 4), iar `+=` lipește bucăți de text (lecția 2). La „Joacă din nou” resetăm starea și pornim din nou. **Ultima linie** (`arataIntrebarea();`) pornește jocul când se încarcă pagina.

Ordinea fișierului `script.js`: **datele** (lista de întrebări), **elementele și starea**, funcția `arataIntrebarea`, funcția `alegeRaspuns`, ascultătorul pentru „Următoarea”, `arataFinalul`, ascultătorul pentru „Joacă din nou”, apoi pornirea.

**Gata când:**  
- [ ] Apăsarea unui răspuns arată „Corect!” sau „Greșit.” și colorează butoanele  
- [ ] Scorul crește numai la răspunsurile corecte  
- [ ] Nu poți răspunde de două ori la aceeași întrebare  
- [ ] „Următoarea” te duce la întrebarea următoare, iar la final apare mesajul cu scorul  
- [ ] „Joacă din nou” pornește testul de la început  

---

## 6. Verificarea și prezentarea

### Exemplul 7 — Lista de verificare

Bifează fiecare punct, în pagina ta:

```text
□ Subiectul este potrivit și nu apar date personale
□ Am cel puțin 4 întrebări, fiecare cu răspunsul corect marcat bine
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
```

Dacă un punct nu este bifat, repară înainte să prezinți.

### Exemplul 8 — Prezentarea de un minut

Spune colegilor, în ordine:
1. „Testul meu este despre …”  
2. „Am făcut … întrebări; cea mai grea este …”  
3. „Cel mai mândru sunt de …” (o parte a paginii)  
4. „Cel mai greu mi s-a părut …, iar soluția a fost: …”  
5. „Dacă aș mai avea timp, aș adăuga …”  

Lasă un coleg să joace testul. Colegul îți spune **un lucru reușit** și **un lucru care se poate îmbunătăți** (cu politețe).

**Gata când:**  
- [ ] Ai bifat toate punctele din listă  
- [ ] Un coleg a jucat testul  
- [ ] Ai făcut prezentarea de un minut  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Testul meu cu scor” (obligatoriu)
Folderul `Prenume_Nume_W4_L10` are `index.html`, `stil.css` și `script.js`, cu tot ce este în **lista de verificare** din Exemplul 7.

### Exercițiul B — Autoevaluare
Pe foaie, notează de la 1 la 5 cât de bine ai înțeles fiecare lecție din modul (console.log, variabile, numere și text, decizii, `for`, `while`, funcții, liste și obiecte, DOM și evenimente). Scrie două lecții pe care vrei să le mai repeți.

### Exercițiul C — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile.

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

### Exercițiul D — Explică cu cuvintele tale
Pe foaie: de ce întrebările sunt obiecte într-o listă? De ce folosim variabila `amRaspuns`? De ce folosim `textContent`, nu `innerHTML`?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W4_L10` are `index.html`, `stil.css` și `script.js`  
- [ ] Toate punctele din lista de verificare sunt bifate  
- [ ] Ai răspuns la exercițiile B–D  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Amestecă ordinea întrebărilor la fiecare joc (caută „shuffle” cu `sort` și `Math.random`, cu ajutorul profesorului)  
- [ ] Adaugă un cronometru de 15 secunde pentru fiecare întrebare, cu `setInterval` (profesorul îți arată cum)  
- [ ] Salvează cel mai bun scor în browser cu `localStorage.setItem("record", scor)` și afișează recordul la final (rămâne doar în browserul tău)  
- [ ] Adaugă o imagine desenată de tine (sau din pachetul media) pentru fiecare întrebare, prin proprietatea `imagine` din obiecte  

---

## Greșeli frecvente
1. **Răspunsul corect marcat greșit** — `corect: 2` când sunt doar 2 opțiuni (pozițiile sunt 0 și 1).  
2. **Ai uitat virgula** între proprietăți sau între obiectele din listă.  
3. **Ai pus `=` în loc de `===`** în comparația răspunsului.  
4. **Ai scris `i <= optiuni.length`** — o rundă în plus, cu `undefined`.  
5. **Ai uitat `amRaspuns`** — poți răspunde de mai multe ori și scorul crește greșit.  
6. **Ai uitat să golești butoanele vechi** (`raspunsuri.textContent = ""`) — se adună butoane la fiecare întrebare.  
7. **Ai uitat să resetezi `indice` și `scor`** la „Joacă din nou”.  
8. **Ai scris `id` diferit** în HTML și în `querySelector` — apar erori „null”.  
9. **Scriptul nu este înainte de `</body>`** — elementele nu sunt găsite.  
10. **Ai pus date personale sau întrebări nepotrivite** — folosește subiecte sigure și verificate.  

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
Arată testul unui membru al familiei și lasă persoana să joace. Notează care întrebare a fost cea mai grea și, dacă vrei, adaugă o întrebare nouă. Salvează varianta finală în `Prenume_Nume_W4_L10`.

## Ce urmează — Modulul 5
Construim un **site complet** din mai multe pagini, cu meniu, galerie și formular care funcționează, folosind HTML, CSS și JavaScript împreună.

---

## Răspunsuri
- **Quiz scurt:** (1) un obiect cu `text` (întrebarea), `optiuni` (lista de răspunsuri) și `corect` (poziția răspunsului corect, numărând de la 0); (2) la ce întrebare suntem, adică poziția în lista de întrebări; (3) după primul răspuns `amRaspuns` devine `true`, iar `alegeRaspuns` iese din funcție cu `return`; (4) cu `if` / `else if` după scor: scor egal cu total înseamnă „Excelent”, cel puțin jumătate înseamnă „Foarte bine”, altfel „Mai încearcă”; (5) ascunde butonul „Următoarea”.  
- **Dacă ritmul clasei este lent:** dați elevilor CSS-ul gata (fișier de copiat); ei scriu doar `script.js`.  
- **Exercițiul A:** pentru evaluare folosiți lista din Exemplul 7. Minimul de acceptare: cel puțin 4 întrebări într-o listă de obiecte, butoane create din JavaScript, scor corect și mesaj final. Dacă elevul nu termină, acceptați un test cu 3 întrebări care funcționează complet.  
- **Exercițiul B:** nu are răspuns corect; este pentru elev. Notați lecțiile pe care le cere repetate și reveniți la ele.  
- **Exercițiul C:** (1) `corect: 2` nu există la două opțiuni (trebuie `1`); (2) `pozitie = …` trebuie `pozitie === …`; (3) `i <= …length` trebuie `i < …length`.  
- **Exercițiul D:** o listă de obiecte ține întrebările ordonat, iar programul le parcurge cu un indice; `amRaspuns` împiedică răspunsul dublu; `textContent` tratează totul ca text.  
- **Notă pentru profesor:** pentru Exemplul 4, explicați pe tablă de ce fiecare buton „își aduce aminte” de `i` (variabila `let` din buclă se creează nouă la fiecare rundă). Nu cereți elevilor să rețină explicația tehnică, doar să vadă că merge. Dacă un elev se blochează, cereți elevului să deschidă consola și să citească mesajul roșu cu voce tare. Pentru bonusuri (`setInterval`, `localStorage`), arătați codul pe proiector și lăsați elevul să adapteze codul. Verificați întrebările elevilor: răspunsurile corecte trebuie să fie clare și subiectele potrivite pentru copii.
