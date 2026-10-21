# LECȚIA 1 — Primul script: console.log
**Modulul 4 · JavaScript pentru începători · 2 ore**  
**Code Maker Club · JavaScript Starter**

> Până acum ai învățat HTML (ce este în pagină) și CSS (cum arată pagina). Acum învățăm **JavaScript**: ce **face** pagina. Cu JavaScript, o pagină calculează, ia decizii și răspunde când apeși pe ea. Azi scrii primul tău program și îl privești rulând în **consola** browserului.  
> Proiect: **„Prezentarea mea în consolă”** · folder: `Prenume_Nume_W4_L1` (ex. `Ana_Pop_W4_L1`)

---

## Obiectiv
La finalul orei știi ce este JavaScript, cum legi un fișier `script.js` de o pagină, cum deschizi consola, cum afișezi text și numere cu `console.log`, cum scrii comentarii și cum citești un mesaj de eroare.  
**Minim:** un `script.js` legat de `index.html` care afișează în consolă 3 rânduri.  
**Ținta orei (Complet):** + text și numere, calcule, comentarii, o fereastră cu `alert`, o eroare provocată și reparată, plus explicarea diferenței dintre HTML, CSS și JavaScript.

## De ce contează
JavaScript este limbajul care pune pagina în mișcare. Aproape orice joc sau aplicație de pe un site funcționează cu el. Primul pas este să înveți să dai comenzi calculatorului și să vezi ce răspunde.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Ce este JavaScript · pregătim folderul |
| 15–35 | Legăm `script.js` · prima comandă (**Exemplele 1–2**) |
| 35–55 | Text, numere, calcule (**Exemplele 3–4**) |
| 55–75 | Comentarii · mai multe valori (**Exemplele 5–6**) |
| 75–95 | Erori și cum le citim (**Exemplul 7**) |
| 95–115 | `alert` · proiect (**Exemplele 8–9**) |
| 115–120 | Recap și temă |

---

## 1. Cele trei limbaje ale unei pagini

| Limbaj | Ce face | Exemplu |
|--------|---------|---------|
| **HTML** | structura: ce este în pagină | un titlu, un buton |
| **CSS** | aspectul: cum arată | culoare, mărime |
| **JavaScript** | comportamentul: ce se întâmplă | numără, calculează, răspunde la click |

Gândește-te la o mașinuță: HTML este caroseria, CSS este vopseaua, JavaScript este motorul.

În acest modul lucrăm cu două fișiere: `index.html` și `script.js`.

**Încearcă tu (5 min)**  
- [ ] Creează folderul `Prenume_Nume_W4_L1`  
- [ ] Creează în el fișierul `index.html` cu scheletul complet (`<!DOCTYPE html>`, `<html lang="ro">`, `<head>` cu `charset`, `viewport` și `<title>`, `<body>`)  
- [ ] Pune în `<body>` un `<h1>` cu textul „Primul meu script”  

---

## 2. Prima comandă

### Exemplul 1 — Legăm `script.js`

1. În același folder creează un fișier gol, `script.js`.  
2. În `index.html`, chiar înainte de `</body>`, adaugă linia care îl leagă:

```html
<body>
  <h1>Primul meu script</h1>

  <script src="script.js"></script>
</body>
```

Linia `<script src="script.js"></script>` îi spune browserului: „citește și rulează comenzile din `script.js`”. O punem la **sfârșitul** lui `<body>`, ca pagina să fie încărcată înainte de a porni scriptul. Dacă te uiți atent, `<script>` are și etichetă de închidere, chiar dacă nu scrii nimic între ele.

### Exemplul 2 — `console.log`

În `script.js` scrie:

```javascript
console.log("Salut, lume!");
```

Deschide pagina cu **Live Server**. Apoi deschide **consola**: apasă **F12** (sau clic dreapta pe pagină, apoi „Inspect”) și alege fila **Console**. Vei vedea:

```text
Salut, lume!
```

Ce înseamnă comanda:
- `console.log` este o comandă care **scrie ceva în consolă**;  
- între **paranteze** pui ce vrei să scrie;  
- textul se pune între **ghilimele** (`"…"`);  
- la sfârșit, **punct și virgulă** (`;`) ca să se vadă că instrucțiunea s-a terminat.

Consola este caietul tău de probă: aici vezi ce face programul, iar utilizatorii paginii nu o văd.

**Gata când:**  
- [ ] `script.js` este legat de `index.html` înainte de `</body>`  
- [ ] Vezi „Salut, lume!” în consolă  
- [ ] Știi să deschizi consola (F12, fila Console)  

---

## 3. Text și numere

### Exemplul 3 — Text între ghilimele

```javascript
console.log("Mă numesc Ana");
console.log('Am zece ani');
console.log("Îmi place fotbalul ⚽");
```

Textul se poate scrie între ghilimele duble (`"…"`) sau simple (`'…'`), dar **la fel la început și la sfârșit**. Un text se numește în programare **șir de caractere** (în engleză, *string*). Poate avea litere cu diacritice, cifre și chiar emoji.

### Exemplul 4 — Numere și calcule

```javascript
console.log(10);
console.log(2 + 3);
console.log(10 - 4);
console.log(6 * 7);
console.log(20 / 5);
```

Rezultat în consolă:

```text
10
5
6
42
4
```

Numerele se scriu **fără ghilimele**. Semne: `+` adunare, `-` scădere, `*` înmulțire, `/` împărțire. Calculatorul face calculul și afișează rezultatul.

Diferența dintre text și număr:

```javascript
console.log(2 + 3);
console.log("2 + 3");
```

Prima linie afișează `5` (calcul). A doua afișează chiar textul `2 + 3`, pentru că este între ghilimele.

**Încearcă tu (6 min)**  
- [ ] Scrie trei rânduri de text despre tine  
- [ ] Calculează în consolă `12 * 3`, `100 - 37` și `45 / 9`  
- [ ] Afișează `4 + 4` o dată ca număr și o dată ca text  

---

## 4. Comentarii și mai multe valori

### Exemplul 5 — Comentarii

```javascript
// Acesta este un comentariu pe un rând
console.log("Salut!"); // și acesta este un comentariu

/* Acesta este un comentariu
   pe mai multe rânduri */
console.log("La revedere!");
```

Calculatorul **ignoră** comentariile. Ele sunt notițe pentru oameni, ca să explici ce face codul. `//` comentează restul rândului, iar `/* … */` poate cuprinde mai multe rânduri.

### Exemplul 6 — Mai multe valori într-un `console.log`

```javascript
console.log("Am", 10, "ani");
console.log("2 + 3 =", 2 + 3);
```

Rezultat:

```text
Am 10 ani
2 + 3 = 5
```

Poți pune mai multe valori între paranteze, **separate prin virgulă**. Consola le scrie pe același rând, cu spațiu între ele.

**Gata când:**  
- [ ] Ai scris cel puțin două comentarii în `script.js`  
- [ ] Ai folosit un `console.log` cu mai multe valori, separate prin virgulă  
- [ ] Știi ce face calculatorul cu un comentariu  

---

## 5. Erori

### Exemplul 7 — Ce faci când apare o eroare

Greșelile sunt normale, chiar și programatorii cu experiență le fac. Citește greșelile cu atenție: consola îți spune ce nu merge.

Scrie intenționat o greșeală:

```javascript
console.lg("Salut!");
```

În consolă apare un mesaj **roșu**, cam așa:

```text
Uncaught TypeError: console.lg is not a function
    script.js:1
```

Cum îl citești:
1. **Cuvintele din față** (`TypeError`) spun felul erorii.  
2. **`console.lg is not a function`** spune că `console.lg` nu există, deci poate fi o greșeală de scriere.  
3. **`script.js:1`** spune **unde**: fișierul `script.js`, rândul 1.  

Repară: scrie `console.log`. Cele mai frecvente erori de început:

| Greșeală | Ce se întâmplă |
|----------|----------------|
| `console.lg(...)` (litere greșite) | `is not a function` |
| `Console.log(...)` (C mare) | `Console is not defined`: JavaScript face diferența între litere mari și mici |
| `console.log("Salut)` (lipsește ghilimeaua) | `Invalid or unexpected token` |
| `console.log("Salut";` (lipsește paranteza) | `missing ) after argument list` |

**Încearcă tu (6 min)**  
- [ ] Provoacă pe rând fiecare eroare din tabel și citește mesajul din consolă  
- [ ] Notează pe foaie rândul indicat de consolă pentru o eroare  
- [ ] Repară toate greșelile și verifică dacă dispar mesajele roșii  

---

## 6. `alert` și proiectul

### Exemplul 8 — Fereastra `alert`

```javascript
alert("Bun venit pe pagina mea!");
```

La încărcarea paginii apare o **fereastră mică** cu mesajul tău, iar pagina așteaptă până apeși **OK**. Folosește `alert` rar: oamenii se enervează când le sar ferestre în față. Pentru a vedea ce face programul, consola este mai bună.

### Exemplul 9 — „Prezentarea mea în consolă”

Fișierul `index.html`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Prezentarea mea în consolă</title>
</head>
<body>
  <h1>Prezentarea mea în consolă</h1>
  <p>Deschide consola (F12) ca să vezi ce a scris programul.</p>

  <script src="script.js"></script>
</body>
</html>
```

Fișierul `script.js`:

```javascript
// Prezentarea mea
console.log("=== Fișa mea ===");
console.log("Animalul meu preferat: pisica");
console.log("Sportul meu preferat: fotbalul");
console.log("Cifra mea norocoasă:", 7);

// Câteva calcule
console.log("Câte zile are o săptămână, de 4 ori?", 7 * 4);
console.log("Dacă am 10 ani, peste 5 ani voi avea", 10 + 5, "ani");

console.log("=== Sfârșit ===");
```

Scrie propria prezentare, cu alte lucruri. Nu pune **date personale** (nume complet, adresă, școală, telefon): alege animale, hobby-uri, jocuri.

**Gata când:**  
- [ ] Programul scrie cel puțin 6 rânduri în consolă  
- [ ] Are text, numere, două calcule și două comentarii  
- [ ] Nu apar mesaje roșii de eroare  
- [ ] Nu ai pus date personale  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Prezentarea mea în consolă” (obligatoriu)
În folderul `Prenume_Nume_W4_L1` ai `index.html` și `script.js`, cu:
- scriptul legat înainte de `</body>`;
- **minimum 6** comenzi `console.log`, cu text și cu numere;
- **minimum 2 calcule** (adunare, scădere, înmulțire sau împărțire);
- cel puțin un `console.log` cu mai multe valori, separate prin virgulă;
- cel puțin două comentarii;
- un singur `alert`, la început (opțional).

### Exercițiul B — Ce apare în consolă?
Spune ce afișează fiecare linie: (1) `console.log(8 + 2);` (2) `console.log("8 + 2");` (3) `console.log("Am", 3 * 4, "mere");` (4) `console.log(15 / 3);`

### Exercițiul C — Scrie comanda
Scrie comenzile care afișează: (1) textul `Bună ziua!`; (2) rezultatul lui `9 * 9`; (3) pe un singur rând: `Am 7 prieteni` (cu numărul 7 scris ca număr, nu ca text).

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
consol.log("Salut");
console.log("Mă cheamă Ana);
Console.log("Am 10 ani");
```

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: ce face HTML, ce face CSS și ce face JavaScript? Unde vezi rezultatul unui `console.log`? Ce faci când apare un mesaj roșu în consolă?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W4_L1` are `index.html` și `script.js`  
- [ ] Programul rulează fără erori  
- [ ] Ai răspuns la exercițiile B–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Fă un „tabel al înmulțirii cu 7” de la 7 × 1 până la 7 × 5, cu un `console.log` pe rând  
- [ ] Calculează în consolă câte secunde are o oră (60 × 60)  
- [ ] Scrie un mesaj cu o „figură” din caractere, de exemplu un chenar făcut din semnul `*`, pe mai multe rânduri  
- [ ] În consolă, la sfârșit, scrie cu mâna `2 + 2` și apasă Enter: consola poate rula comenzi direct  

---

## Greșeli frecvente
1. **Ai uitat să legi `script.js`** de pagină — nu apare nimic în consolă.  
2. **Ai legat fișierul cu numele greșit** (`scrip.js` în loc de `script.js`) — consola arată o eroare 404.  
3. **Ai scris `Console.log`** cu C mare — JavaScript face diferența între litere mari și mici.  
4. **Ai uitat ghilimeaua de închidere** — apare o eroare roșie.  
5. **Ai uitat o paranteză** — `missing ) after argument list`.  
6. **Ai pus un număr între ghilimele** — `"5 + 3"` nu calculează nimic, ci scrie textul.  
7. **Ai amestecat ghilimelele** (`"text'`) — folosește aceleași la început și la sfârșit.  
8. **Ai uitat `;`** la sfârșit — de multe ori merge, dar obișnuiește-te să scrii punctul și virgula.  
9. **Te uiți la pagină, nu la consolă** — mesajele `console.log` apar numai în consolă (F12).  
10. **Nu ai salvat fișierul** (Ctrl+S) — programul vechi rulează în continuare.  

---

## Recapitulare pe scurt
1. HTML = structura, CSS = aspectul, JavaScript = comportamentul.  
2. `<script src="script.js"></script>` înainte de `</body>` leagă scriptul.  
3. `console.log(…);` scrie în consolă (F12, fila Console).  
4. Textul se scrie între ghilimele; numerele, fără.  
5. `//` și `/* … */` sunt comentarii: calculatorul le ignoră.  
6. Mesajele roșii spun felul erorii și rândul ei: citește mesajele cu calm.

## Quiz scurt
- Ce face JavaScript într-o pagină?  
- Ce afișează `console.log(3 + 4);`? Dar `console.log("3 + 4");`?  
- Cum deschizi consola?  
- Ce este un comentariu?  
- Ce spune mesajul `script.js:5`?

## Temă
Scrie un program care afișează un „carnet de note” al jocurilor tale preferate: 5 jocuri și nota fiecăruia (ca număr), apoi un calcul al sumei notelor. Salvează în `Prenume_Nume_W4_L1`.

## Ce urmează — Lecția 2
Învățăm **variabile**: „cutii” cu nume în care păstrăm valori, cu `let` și `const`.

---

## Răspunsuri pentru profesor
- **Quiz scurt:** (1) JavaScript dă comportament paginii: calculează, ia decizii și răspunde la click; (2) `console.log(3 + 4);` afișează `7`, iar `console.log("3 + 4");` afișează textul `3 + 4`; (3) apăsând F12 (sau clic dreapta, „Inspect”) și alegând fila Console; (4) o notiță pentru oameni, scrisă cu `//` sau `/* … */`, pe care calculatorul o ignoră; (5) eroarea este în fișierul `script.js`, la rândul 5.  
- **Exercițiul B:** (1) `10`; (2) `8 + 2` (text); (3) `Am 12 mere`; (4) `5`.  
- **Exercițiul C:** (1) `console.log("Bună ziua!");`; (2) `console.log(9 * 9);` (rezultă 81); (3) `console.log("Am", 7, "prieteni");`.  
- **Exercițiul D:** (1) `consol` trebuie `console`; (2) lipsește ghilimeaua de închidere după `Ana`; (3) `Console` trebuie `console` (litera mică).  
- **Exercițiul E:** HTML pune structura, CSS dă aspectul, JavaScript dă comportamentul; rezultatul se vede în consolă (F12, fila Console); citesc mesajul, văd rândul indicat și repar greșeala.  
- **Notă pentru profesor:** cea mai frecventă problemă este „nu apare nimic”: verificați, în ordine, (1) fișierul `script.js` este salvat; (2) linia `<script>` este în `index.html` și numele este corect; (3) consola este deschisă pe fila Console. Mulți elevi pierd mesajele pentru că se uită la pagină. Încurajați elevii să citească mesajele de eroare cu voce tare: este cea mai bună obișnuință pentru programare. Exemplele nu folosesc imagini, deci nu apar date personale.
