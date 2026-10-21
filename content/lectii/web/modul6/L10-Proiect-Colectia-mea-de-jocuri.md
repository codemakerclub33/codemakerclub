# LECȚIA 10 — Proiect: Colecția mea de jocuri
**Modulul 6 · Jocuri web · 2 ore**  
**Code Maker Club · Web Game Maker**

> Ai făcut șapte jocuri! Azi le punem într-o singură **colecție**: o pagină principală cu un cartonaș pentru fiecare joc, un buton „Joacă” și **recordul tău** citit din browser. Fiecare joc primește și un link de întoarcere la colecție. La final îți prezinți colecția și povestești ce ai învățat.  
> Proiect: **„Colecția mea de jocuri”** · folder: `Prenume_Nume_W6_L10` (ex. `Ana_Pop_W6_L10`)

---

## Obiectiv
La finalul orei ai un folder cu pagina principală și cele șapte jocuri. Pagina arată cartonașe (generate din JavaScript, dintr-o listă), fiecare cu numele jocului, o descriere, recordul și butonul „Joacă”. Din fiecare joc te poți întoarce la colecție.  
**Minim:** pagina principală cu cartonașe către cel puțin 3 jocuri care merg.  
**Ținta orei (Complet):** + toate cele 7 jocuri, recorduri citite în siguranță din `localStorage`, rezumat („Ai un record la 2 din 4 jocuri”), link „înapoi” în fiecare joc, actualizarea recordurilor când te întorci în pagină, o prezentare de 2 minute.

## De ce contează
Un proiect mare se construiește din **piese mici**. Aici folosești **liste de obiecte**, **funcții**, **crearea elementelor din JavaScript**, **localStorage** citit cu grijă și mai multe pagini care merg împreună. Așa arată munca unui programator adevărat: adună lucruri făcute separat într-un produs finit.

---

## Siguranță înainte de toate
- Pagina arată doar **numere** (recorduri) citite din browserul tău. Nu cerem și nu salvăm date personale.  
- La „Făcut de” scrii **numele tău sau o poreclă**. Nu scrii adresa, școala, numărul de telefon sau poze cu tine.  
- **Publicarea pe internet** se face doar împreună cu un **adult** și cu **acordul scris** al părintelui, după ce profesorul verifică proiectul.  
- Textul din cartonașe se scrie cu `textContent`, nu cu `innerHTML`. Așa nu apar surprize dacă textul conține caractere speciale.  
- Culorile nu sunt singura informație: fiecare cartonaș are text, iar butonul are o descriere pentru cititorul de ecran.  
- **Pauze:** după 20–30 de minute, ridică-te și mișcă-te.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulăm cele 9 lecții și planul proiectului |
| 10–30 | Adunăm jocurile într-un folder, cu nume scurte (**Exemplul 1**) |
| 30–45 | Pagina și stilul (**Exemplul 2**) |
| 45–75 | Lista de jocuri și citirea recordurilor (**Exemplele 3–4**) |
| 75–90 | Cartonașele (**Exemplul 5**) |
| 90–100 | Linkul „înapoi” în fiecare joc (**Exemplul 6**) |
| 100–112 | Verificarea (**Exemplul 7**) |
| 112–120 | Prezentare și temă |

---

## 1. Adunăm jocurile

### Exemplul 1 — Un folder pentru toate

Creează folderul `Prenume_Nume_W6_L10`. În el pui **pagina principală** (`index.html`, `stil.css`, `script.js`) și câte un **subfolder** pentru fiecare joc. Fiecare subfolder are numele scurt de mai jos și conține `index.html`, `stil.css` și `script.js` ale jocului:

```text
Prenume_Nume_W6_L10/
├── index.html          (pagina principală)
├── stil.css
├── script.js
├── monstri/            (lecția 1: Vânătoare de monștri)
├── clicker/            (lecția 2: Clicker)
├── simon/              (lecția 3: Simon spune)
├── cuvant/             (lecțiile 4–5: Cuvântul zilei)
├── minge/              (lecția 6: Mingea care sare)
├── dino/               (lecțiile 7–8: Dino în deșert)
└── pasare/             (lecția 9: Păsărica zburătoare)
```

**Copiază** (nu muta) folderele jocurilor tale în noul folder și schimbă numele folderelor ca în schemă. Dacă un joc nu merge sau nu este terminat, nu copia încă acel joc: vei adăuga cartonașul lui mai târziu.

**Important:** deschide fiecare joc din noul loc și verifică dacă merge la fel. Dacă nu merge, probabil lipsește un fișier sau are alt nume.

**Încearcă tu (20 min)**  
- [ ] Creează folderul și subfolderele  
- [ ] Deschide fiecare `index.html` din subfoldere și joacă 10 secunde

---

## 2. Pagina principală

### Exemplul 2 — HTML și CSS

În `index.html`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Colecția mea de jocuri</title>
  <link rel="stylesheet" href="stil.css">
</head>
<body>
  <header class="antet">
    <h1>Colecția mea de jocuri</h1>
    <p>Alege un joc și încearcă să bați recordul tău!</p>
    <p class="rezumat" id="rezumat" role="status"></p>
  </header>

  <main>
    <section class="lista" id="lista" aria-label="Lista de jocuri"></section>
  </main>

  <footer class="subsol">
    <p>Făcut de <strong>numele tău sau porecla ta</strong> la Code Maker Club.</p>
    <p>Joacă cu pauze: după 20–30 de minute, ridică-te și mișcă-te.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

- `<header>` este antetul paginii, `<main>` conține lista, iar `<footer>` este subsolul.  
- `<section id="lista">` este locul gol în care JavaScript va pune cartonașele. `aria-label` îl descrie pentru cititorul de ecran.  
- `role="status"` la rezumat face ca schimbările lui să fie anunțate de cititorul de ecran.  
- La „Făcut de” înlocuiește textul cu numele tău sau cu porecla ta.

În `stil.css`:

```css
:root {
  --fundal: #f3f0ff;
  --text: #261a4a;
  --accent: #5e35b1;
  --card: #ffffff;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color: var(--fundal);
  color: var(--text);
}

.antet {
  padding: 1.5rem 1rem;
  text-align: center;
  color: white;
  background-color: var(--accent);
}

.antet h1 {
  margin: 0 0 0.5rem;
}

.antet p {
  margin: 0.3rem 0;
}

.rezumat {
  min-height: 1.5em;
  font-weight: bold;
}

main {
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
}

.lista {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--card);
  border: 3px solid var(--accent);
  border-radius: 14px;
}

.card h2 {
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
}

.card p {
  margin: 0.3rem 0;
}

.record {
  font-weight: bold;
}

.buton {
  display: inline-block;
  margin-top: 0.8rem;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: white;
  background-color: var(--accent);
  border-radius: 10px;
}

.buton:hover,
.buton:focus-visible {
  outline: 3px solid #ffb300;
}

.subsol {
  padding: 1rem;
  text-align: center;
  font-size: 0.95rem;
}
```

`display: grid` cu `repeat(auto-fit, minmax(240px, 1fr))` așază cartonașele în coloane. Pe telefon vezi o coloană, pe calculator două sau trei, fără altă muncă. Pe butoane, linia `:focus-visible` face linkul vizibil când navighezi cu tasta Tab.

**Încearcă tu (15 min)**  
- [ ] Scrie `index.html` și `stil.css`  
- [ ] Deschide pagina: vezi antetul violet, un subsol și nimic între ele (încă)

---

## 3. Lista de jocuri

### Exemplul 3 — Fiecare joc este un obiect

În `script.js`:

```javascript
// ===== Jocurile mele =====
// Fiecare joc este un obiect. Folderul trebuie să existe lângă acest fișier.
const jocuri = [
  {
    nume: "Vânătoare de monștri",
    descriere: "Prinde monștrii prietenoși în 30 de secunde.",
    folder: "monstri",
    cheieRecord: "recordMonstri"
  },
  {
    nume: "Clicker",
    descriere: "Strânge monede și cumpără îmbunătățiri.",
    folder: "clicker",
    cheieRecord: null
  },
  {
    nume: "Simon spune",
    descriere: "Ține minte ordinea culorilor.",
    folder: "simon",
    cheieRecord: "recordSimon"
  },
  {
    nume: "Cuvântul zilei",
    descriere: "Ghicește cuvântul secret al zilei.",
    folder: "cuvant",
    cheieRecord: null
  },
  {
    nume: "Mingea care sare",
    descriere: "O minge, gravitație și multă distracție.",
    folder: "minge",
    cheieRecord: null
  },
  {
    nume: "Dino în deșert",
    descriere: "Sari peste cactuși cât poți de departe.",
    folder: "dino",
    cheieRecord: "recordDino"
  },
  {
    nume: "Păsărica zburătoare",
    descriere: "Treci prin spațiile dintre țevi.",
    folder: "pasare",
    cheieRecord: "recordPasare"
  }
];
```

Avem o **listă de obiecte**. Fiecare obiect are:
- `nume` și `descriere`: ce vezi în cartonaș;  
- `folder`: numele subfolderului;  
- `cheieRecord`: numele sub care jocul a salvat recordul în `localStorage`, sau `null` dacă jocul nu are record.

**Cheile trebuie să fie exact cele folosite în jocuri**: `recordMonstri`, `recordSimon`, `recordDino`, `recordPasare`. Dacă ai scris altfel în jocul tău, schimbă aici cheia ca să se potrivească (sau în joc, dar atunci recordurile vechi se pierd).

Ca să adaugi un joc nou în colecție, adaugi **un obiect** în listă și un subfolder. Nu schimbi nimic altceva.

---

## 4. Citirea recordurilor

### Exemplul 4 — Citim cu grijă

```javascript
// ===== Citirea recordurilor (doar numere) =====
function citesteRecord(cheie) {
  try {
    const valoare = Number(localStorage.getItem(cheie));
    if (Number.isFinite(valoare) && valoare > 0) {
      return Math.floor(valoare);
    }
  } catch (eroare) {
    // Dacă browserul nu permite citirea, arătăm 0
  }
  return 0;
}

// Clicker-ul își salvează datele ca text JSON: citim doar monedele
function citesteMonede() {
  try {
    const text = localStorage.getItem("clickerSalvare");
    if (text === null) {
      return 0;
    }

    const date = JSON.parse(text);
    const monede = Number(date.monede);
    if (Number.isFinite(monede) && monede > 0) {
      return Math.floor(monede);
    }
  } catch (eroare) {
    // Salvare lipsă sau stricată: arătăm 0
  }
  return 0;
}
```

- `localStorage.getItem(cheie)` întoarce textul salvat sau `null`.  
- `Number(...)` îl face număr. Dacă lipsește (`null`), rezultatul este 0.  
- `Number.isFinite(valoare) && valoare > 0` verifică dacă este un număr normal și pozitiv. Dacă cineva a modificat valoarea în browser („abc” sau un număr negativ), nu o folosim.  
- `Math.floor` rotunjește în jos la un număr întreg.  
- Tot codul este în `try/catch`: dacă browserul nu permite citirea, funcția întoarce 0 și pagina merge mai departe.

Clicker-ul este diferit: salvează datele ca **text JSON** (monedele și îmbunătățirile). Funcția `citesteMonede`, din aceeași secțiune, citește doar monedele. Ea face `JSON.parse` **în interiorul** lui `try`: dacă salvarea este stricată, `catch` prinde eroarea și întoarcem 0.

Mai avem funcția care alege **textul de sub fiecare joc**:

```javascript
// ===== Textul de sub fiecare joc =====
function textRecord(joc) {
  if (joc.folder === "clicker") {
    const monede = citesteMonede();
    return monede > 0 ? `Monede salvate: ${monede}` : "Încă nu ai jucat";
  }

  if (joc.cheieRecord === null) {
    return "Un joc fără record";
  }

  const record = citesteRecord(joc.cheieRecord);
  return record > 0 ? `Record: ${record}` : "Încă nu ai jucat";
}
```

- Dacă jocul este Clicker, arătăm monedele salvate; dacă nu are record, un text simplu; altfel arătăm recordul sau „Încă nu ai jucat”.  

**Încearcă tu (30 min, pentru Exemplele 3–4)**  
- [ ] Scrie secțiunile  
- [ ] În consolă: `citesteRecord("recordDino")`. Primești numărul tău, sau 0 dacă n-ai jucat  
- [ ] În consolă: `localStorage.setItem("recordDino", "abc")` apoi `citesteRecord("recordDino")` trebuie să dea 0. Apoi pune la loc un număr: `localStorage.setItem("recordDino", "40")`  
- [ ] Gândește-te: ce arată `textRecord(jocuri[3])`? (Cuvântul zilei, deci „Un joc fără record”)

---

## 5. Cartonașele

### Exemplul 5 — Creăm elemente din JavaScript

```javascript
// ===== Cartonașele =====
const lista = document.querySelector("#lista");
const rezumat = document.querySelector("#rezumat");

function creeazaCard(joc) {
  const card = document.createElement("article");
  card.className = "card";

  const continut = document.createElement("div");

  const titlu = document.createElement("h2");
  titlu.textContent = joc.nume;

  const descriere = document.createElement("p");
  descriere.textContent = joc.descriere;

  const record = document.createElement("p");
  record.className = "record";
  record.textContent = textRecord(joc);

  continut.append(titlu, descriere, record);

  const legatura = document.createElement("a");
  legatura.className = "buton";
  legatura.href = joc.folder + "/index.html";
  legatura.textContent = "Joacă";
  legatura.setAttribute("aria-label", "Joacă " + joc.nume);

  card.append(continut, legatura);
  return card;
}

function afiseaza() {
  lista.textContent = "";

  let cuRecord = 0;
  let jucate = 0;

  for (const joc of jocuri) {
    lista.append(creeazaCard(joc));

    if (joc.cheieRecord !== null) {
      cuRecord = cuRecord + 1;
      if (citesteRecord(joc.cheieRecord) > 0) {
        jucate = jucate + 1;
      }
    }
  }

  rezumat.textContent = `Ai un record la ${jucate} din ${cuRecord} jocuri.`;
}
```

Pe bucăți:
- `document.createElement("article")` creează un element nou, **încă nevăzut** în pagină.  
- Setăm `className`, `textContent`, `href`. Textul se pune cu `textContent`, nu cu `innerHTML`.  
- `continut.append(titlu, descriere, record)` pune mai multe elemente într-un părinte.  
- `legatura.href = joc.folder + "/index.html"`: adresa jocului, de exemplu `dino/index.html`.  
- `setAttribute("aria-label", "Joacă " + joc.nume)`: cititorul de ecran spune „Joacă Dino în deșert”, nu doar „Joacă”.  
- `afiseaza` **șterge** lista (`lista.textContent = ""`), apoi creează câte un cartonaș pentru fiecare joc, numără jocurile cu record și scrie rezumatul.  
- `window.addEventListener("pageshow", afiseaza)`: când te întorci pe pagină cu butonul „înapoi” al browserului, recordurile se actualizează.

În final pornim:

```javascript
// ===== Start =====
afiseaza();

// Când te întorci la pagină (de exemplu cu butonul „înapoi”), recordurile se actualizează
window.addEventListener("pageshow", afiseaza);
```

**Încearcă tu (15 min)**  
- [ ] Scrie secțiunile  
- [ ] Apar 7 cartonașe, fiecare cu butonul „Joacă”?  
- [ ] Jocul fără record arată „Un joc fără record”?  
- [ ] Butoanele duc la jocul corect?

---

## 6. Înapoi la colecție

### Exemplul 6 — Un link în fiecare joc

În fiecare joc, imediat **după** `<main class="joc">`, adaugă linia:

```html
<a class="inapoi" href="../index.html">← Colecția mea de jocuri</a>
```

Iar în `stil.css` al fiecărui joc, la final:

```css
.inapoi {
  display: inline-block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: inherit;
}
```

`../index.html` înseamnă: „ieși din folderul jocului și deschide `index.html` din folderul de deasupra”.

**Încearcă tu (10 min)**  
- [ ] Adaugă linkul în toate cele 7 jocuri  
- [ ] Joacă o rundă în Dino, apoi apasă linkul. Recordul tău apare în cartonaș?

---

## 7. Verificarea

### Exemplul 7 — Lista de verificare

```text
□ Pagina principală are antet, cartonașe și subsol
□ Fiecare joc are cartonaș cu nume, descriere, record (sau text) și butonul „Joacă”
□ Fiecare buton duce la jocul corect
□ Fiecare joc merge din noul folder (nu lipsesc fișiere)
□ Fiecare joc are linkul „← Colecția mea de jocuri”, iar linkul merge
□ Recordurile apar după ce joci și te întorci la colecție
□ Dacă nu ai jucat încă, apare „Încă nu ai jucat”, nu 0 și nu erori
□ Rezumatul spune câte jocuri au record
□ La „Făcut de” este doar numele sau porecla (fără date personale)
□ Pagina arată bine și pe telefon (DevTools 375 px)
□ Se poate naviga cu tasta Tab și toate butoanele se văd când sunt selectate
□ Nu apar erori în consolă
```

**Gata când:**  
- [ ] Toate punctele sunt bifate  
- [ ] Ai făcut o copie de siguranță a folderului

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Colecția mea de jocuri” (obligatoriu)
Folderul `Prenume_Nume_W6_L10` are pagina principală și jocurile tale, iar totul merge după lista din Exemplul 7.

### Exercițiul B — O fișă pentru fiecare joc
Pe o foaie sau într-un fișier text, pentru **fiecare joc**, scrie 2 propoziții: ce idee de programare am folosit (de exemplu: „timp cu `setInterval`”, „gravitație”, „ciocnire cerc–dreptunghi”, „localStorage”) și ce a fost cel mai greu.

### Exercițiul C — Găsește greșelile
Găsește **3 greșeli** în codurile de mai jos și repară greșelile:

```javascript
// 1) Adresa jocului
legatura.href = joc.folder + "index.html";

// 2) Citirea salvării clicker-ului
const text = localStorage.getItem("clickerSalvare");
const date = JSON.parse(text);
const monede = Number(date.monede);

// 3) Începutul funcției afiseaza
function afiseaza() {
  for (const joc of jocuri) {
    lista.append(creeazaCard(joc));
  }
}
```

### Exercițiul D — Prezentarea de 2 minute
Pregătește o prezentare: arată colecția, joacă 20 de secunde dintr-un joc la alegere, explică un lucru pe care l-ai învățat și spune ce ai îmbunătăți. Dacă vrei să arăți colecția altor persoane, folosește doar calculatorul clubului sau al tău.

**Gata când:**  
- [ ] Colecția merge și lista este bifată  
- [ ] Ai făcut fișele și ai pregătit prezentarea

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Adaugă un **al optulea joc** făcut de tine (o idee nouă) doar prin adăugarea unui obiect în listă  
- [ ] Adaugă un **buton de căutare** sau un filtru: „Jocuri cu record” și „Toate jocurile”  
- [ ] Adaugă o pictogramă (un emoji) în fiecare cartonaș: câmp nou `pictograma` în obiecte  
- [ ] Sortează cartonașele: cele cu record mai mare primele (`sort`)

---

## Greșeli frecvente
1. **Foldere cu alt nume** decât în listă: butonul duce la o pagină inexistentă (eroare 404).  
2. **Chei de record diferite** între joc și colecție: recordul nu apare.  
3. **Uitat `/`** în adresa jocului (`folderindex.html`).  
4. **`JSON.parse` în afara lui `try`**: o salvare stricată blochează pagina.  
5. **Uitat `lista.textContent = ""`**: după `pageshow` apar cartonașele de două ori.  
6. **`innerHTML` cu text necontrolat**: poate introduce probleme. Folosim `textContent`.

## Recapitulare pe scurt
1. Un proiect mare se compune din piese mici (foldere, pagini, funcții).  
2. O listă de obiecte descrie datele; funcțiile creează elementele din ea.  
3. `createElement`, `append`, `textContent`, `setAttribute` construiesc pagina din JavaScript.  
4. Citim `localStorage` cu `try/catch` și verificăm valorile.  
5. `../` urcă un folder în adresă.  
6. Publicăm doar împreună cu un adult și cu acord scris.

## Quiz scurt
1. De ce descriem jocurile într-o listă de obiecte?  
2. Ce face `lista.textContent = ""`?  
3. De ce citim recordul cu `Number.isFinite`?  
4. Ce înseamnă `../index.html`?

## Temă
Joacă fiecare joc o dată cu un membru al familiei și notează ce au spus. Alege **o singură** îmbunătățire (alt joc, o culoare, un mesaj) și fă îmbunătățirea în `Prenume_Nume_W6_L10`.

## Ce urmează
Felicitări! Ai terminat ultimul modul al cursului Web. Poți continua singur: un joc nou pentru colecție, o idee de la un prieten sau o îmbunătățire a unui joc vechi. Dacă vrei să pui colecția online, vorbește mai întâi cu un adult.

---

## Răspunsuri
- **Quiz scurt:** (1) ca să adaugi un joc nou doar printr-un obiect în listă, fără să schimbi altceva, iar cartonașele se creează singure din listă; (2) șterge lista de cartonașe, ca să nu apară de două ori; (3) ca să folosim doar un număr normal; dacă cineva schimbă valoarea (de exemplu „abc”), o ignorăm; (4) ieși din folderul jocului și deschizi `index.html` din folderul de deasupra.  
- **Exercițiul A:** pentru evaluare folosiți lista din Exemplul 7. Minimul: cartonașe către cel puțin 3 jocuri care merg; ținta: restul listei.  
- **Exercițiul B:** nu are răspuns unic; urmăriți ca elevul să numească o idee de programare reală pentru fiecare joc.  
- **Exercițiul C:** (1) lipsește `/`: `joc.folder + "/index.html"`; (2) `JSON.parse` trebuie să fie în `try { ... } catch`, ca o salvare stricată să nu blocheze pagina; (3) lipsește `lista.textContent = ""` la început, deci după `pageshow` cartonașele se dublează.  
- **Exercițiul D:** nu are răspuns unic; folosiți o grilă simplă: arată colecția, joacă, explică un lucru învățat, spune o îmbunătățire.  
- **Notă pentru profesor:** `localStorage` este legat de **adresa de origine** a paginii. Când paginile sunt deschise direct din fișiere (`file://`), unele browsere nu împart recordurile între foldere diferite și cartonașele pot arăta „Încă nu ai jucat”. Soluția simplă este un server local (de exemplu extensia „Live Server” din editor) sau publicarea tuturor jocurilor sub același domeniu, cu acordul părinților. Pentru recordurile care nu apar, verificați mai întâi dacă cheile din colecție se potrivesc cu cele din jocuri. În jocul „Cuvântul zilei” și în „Mingea care sare” nu există record, ceea ce este în regulă.
