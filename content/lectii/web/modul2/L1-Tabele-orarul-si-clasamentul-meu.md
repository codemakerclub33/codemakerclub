# LECȚIA 1 — Tabele: orarul și clasamentul meu
**Modulul 2 · HTML II: Pagini mai bogate · 2 ore**  
**Code Maker Club · HTML Builder**

> Orarul școlii, clasamentul unui joc, lista de prețuri: toate sunt **tabele**. Azi înveți să le faci în HTML, rând cu rând și coloană cu coloană.  
> Proiect: **„Orarul meu”** și **„Clasamentul meu”** · folder: `Prenume_Nume_W2_L1` (ex. `Ana_Pop_W2_L1`)

---

## Obiectiv
La finalul orei știi să faci un tabel cu `<table>`, `<tr>`, `<th>` și `<td>`, să pui un titlu tabelului cu `<caption>`, să pui în celule text îngroșat, linkuri și imagini și să adaugi linii vizibile tabelului cu o regulă de stil.  
**Minim:** un tabel de orar cu 3 coloane și 4 rânduri, cu linii vizibile.  
**Ținta orei (Complet):** + un al doilea tabel (clasament) cu titlu și o celulă cu imagine sau link, plus o pagină cu amândouă tabelele, cod indentat și comentarii.

## De ce contează
Când ai date aranjate pe rânduri și pe coloane (ore, scoruri, prețuri), un tabel le face ușor de citit. Aproape orice site cu informații folosește tabele.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare Modulul 1 · pornim proiectul |
| 15–35 | Primul tabel: `table`, `tr`, `td` (**Exemplele 1–3**) |
| 35–55 | Celule de antet `th` · titlu `caption` (**Exemplele 4–5**) |
| 55–75 | Liniile tabelului (**Exemplul 6**) |
| 75–95 | Orarul meu (**Exemplul 7**) |
| 95–115 | Clasamentul meu · ce punem în celule (**Exemplele 8–10**) |
| 115–120 | Recap și temă |

---

## 1. Recapitulare rapidă

Din Modulul 1 ții minte că:
- o pagină are schelet: `html`, `head`, `body`;  
- listele se fac cu `<ul>`, `<ol>` și `<li>`;  
- tagurile se închid în ordine inversă;  
- codul se indentează cu 2 spații pentru fiecare nivel.

**Încearcă tu (3 min)**  
- [ ] Creează folderul `Prenume_Nume_W2_L1` și deschide folderul în VS Code  
- [ ] Creează `index.html` cu scheletul complet scris de tine  
- [ ] Pornește Live Server și verifică pagina  

> De aici înainte, exemplele arată doar ce scrii **în interiorul `<body>`**, dacă nu spunem altfel.

---

## 2. Primul tabel

Un tabel este făcut din **rânduri**, iar fiecare rând din **celule**.

| Tag | Ce înseamnă | Ce face |
|-----|-------------|---------|
| `<table>` | tabel | învelește tot tabelul |
| `<tr>` | *table row* = rând de tabel | un rând |
| `<td>` | *table data* = date de tabel | o celulă obișnuită |

### Exemplul 1 — Un tabel cu un singur rând

```html
<table>
  <tr>
    <td>Pisică</td>
    <td>Cățel</td>
    <td>Pasăre</td>
  </tr>
</table>
```

Rândul `<tr>` are trei celule `<td>`, așa că tabelul are **trei coloane** pe un rând.

### Exemplul 2 — Două rânduri

```html
<table>
  <tr>
    <td>Pisică</td>
    <td>4 picioare</td>
  </tr>
  <tr>
    <td>Pasăre</td>
    <td>2 picioare</td>
  </tr>
</table>
```

Fiecare `<tr>` este un rând nou. Numărul de coloane este dat de numărul de celule dintr-un rând. **Toate rândurile trebuie să aibă același număr de celule** (mai târziu înveți excepția).

### Exemplul 3 — Tabelul fără linii

Dacă deschizi exemplul 2, vezi doar text aranjat pe rânduri, **fără linii**. Este normal: HTML aranjează datele, iar liniile se adaugă cu stil. Mai jos le adăugăm.

> **Ordinea tagurilor:** `table` conține `tr`, iar `tr` conține `td`. Nu pune niciodată `td` direct în `table` și nu uita să închizi fiecare tag.

**Gata când:**  
- [ ] Ai scris tabelul din Exemplul 2 cu numele animalelor tale preferate  
- [ ] Poți spune ce face `table`, `tr` și `td`  
- [ ] Ai verificat că toate rândurile au același număr de celule  

---

## 3. Antetul și titlul tabelului

### Exemplul 4 — Celule de antet: `<th>`

Prima linie a unui tabel spune de obicei **ce conține fiecare coloană**. Pentru ea folosești `<th>` (*table header* = antet de tabel). Textul din `<th>` apare **îngroșat și centrat**:

```html
<table>
  <tr>
    <th>Animal</th>
    <th>Picioare</th>
    <th>Culoare</th>
  </tr>
  <tr>
    <td>Pisică</td>
    <td>4</td>
    <td>gri</td>
  </tr>
  <tr>
    <td>Pasăre</td>
    <td>2</td>
    <td>galbenă</td>
  </tr>
</table>
```

Regulă: `<th>` pentru **titlurile** de coloană, `<td>` pentru **date**.

### Exemplul 5 — Titlul tabelului: `<caption>`

```html
<table>
  <caption>Animalele mele preferate</caption>
  <tr>
    <th>Animal</th>
    <th>Picioare</th>
  </tr>
  <tr>
    <td>Pisică</td>
    <td>4</td>
  </tr>
</table>
```

`<caption>` („legendă”) se scrie **imediat după `<table>`**, înaintea primului rând. Browserul îl afișează deasupra tabelului. Cine citește pagina știe astfel despre ce este tabelul.

**Încearcă tu (5 min)**  
- [ ] Fă un tabel cu antet (`th`) cu 3 coloane și 3 rânduri de date  
- [ ] Adaugă un titlu cu `<caption>` imediat după `<table>`  

---

## 4. Liniile tabelului

### Exemplul 6 — O regulă de stil pentru linii

Ca tabelul să aibă linii, copiezi în `<head>` (între `<title>` și `</head>`) această bucată:

```html
<style>
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
    padding: 6px;
  }
</style>
```

Nu e nevoie să o înțelegi acum; o înveți în Modulul 3 (CSS). Pe scurt:
- `border: 1px solid black;` desenează o linie neagră subțire în jurul tabelului și al fiecărei celule;
- `border-collapse: collapse;` lipește liniile vecine, ca să nu apară linii duble;
- `padding: 6px;` lasă puțin spațiu în interiorul celulelor.

Pune bucata în **`<head>`**, nu în `<body>`. Salvează și vei vedea liniile pe toate tabelele paginii.

> Poți schimba culoarea: `border: 1px solid navy;`. Poți schimba culoarea fundalului antetului: adaugă în aceeași bucată `th { background-color: lightblue; }`.

**Gata când:**  
- [ ] Tabelul tău are linii vizibile  
- [ ] Bucata `<style>` este în `<head>`, nu în `<body>`  
- [ ] Ai încercat să schimbi culoarea liniilor  

---

## 5. Orarul meu

### Exemplul 7 — Orarul unei zile

```html
<h1>Orarul meu</h1>

<table>
  <caption>Luni</caption>
  <tr>
    <th>Ora</th>
    <th>Materia</th>
    <th>Sala</th>
  </tr>
  <tr>
    <td>8:00</td>
    <td>Matematică</td>
    <td>12</td>
  </tr>
  <tr>
    <td>9:00</td>
    <td>Limba română</td>
    <td>12</td>
  </tr>
  <tr>
    <td>10:00</td>
    <td>Educație fizică</td>
    <td>Sala de sport</td>
  </tr>
</table>
```

Scrie propriul orar, cu materiile tale reale (poți să nu scrii numele școlii sau al profesorilor). Adaugă cel puțin 4 rânduri de date.

**Încearcă tu (8 min)**  
- [ ] Fă tabelul cu orarul unei zile, cu 3 coloane și cel puțin 4 rânduri de date  
- [ ] Adaugă titlul tabelului cu `<caption>` (de exemplu „Luni”)  
- [ ] Verifică în Live Server că liniile se văd și toate rândurile sunt complete  

---

## 6. Clasamentul și ce punem în celule

### Exemplul 8 — Clasamentul jocurilor mele preferate

```html
<table>
  <caption>Top 3 jocuri</caption>
  <tr>
    <th>Loc</th>
    <th>Joc</th>
    <th>Nota mea</th>
  </tr>
  <tr>
    <td>1</td>
    <td><strong>Minecraft</strong></td>
    <td>10</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Scratch</td>
    <td>9</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Fotbal în curte</td>
    <td>9</td>
  </tr>
</table>
```

### Exemplul 9 — Link, imagine și text lung în celule

O celulă poate conține orice ai învățat deja:

```html
<table>
  <caption>Site-uri utile</caption>
  <tr>
    <th>Site</th>
    <th>Descriere</th>
  </tr>
  <tr>
    <td><a href="https://ro.wikipedia.org" target="_blank" rel="noopener noreferrer">Wikipedia</a></td>
    <td>O enciclopedie online, unde găsești informații despre multe subiecte.</td>
  </tr>
  <tr>
    <td><img src="imagini/pisica.jpg" alt="O pisică gri" width="80"></td>
    <td><em>Pisica mea</em></td>
  </tr>
</table>
```

Linkurile le alegi doar împreună cu profesorul, iar imaginile sunt desenele sau pozele aprobate (fără persoane).

### Exemplul 10 — Greșeli frecvente la tabele

```text
<table>
  <tr>
    <td>Pisică</td>
    <td>4</td>
  </tr>
  <td>Pasăre</td>
  <td>2</td>
</table>
```

Aici a doua pereche de celule nu este într-un `<tr>`. Corect:

```html
<table>
  <tr>
    <td>Pisică</td>
    <td>4</td>
  </tr>
  <tr>
    <td>Pasăre</td>
    <td>2</td>
  </tr>
</table>
```

**Gata când:**  
- [ ] Ai făcut un clasament de trei elemente, cu antet și cu un cuvânt îngroșat într-o celulă  
- [ ] Ai pus într-un tabel un link sau o imagine într-o celulă  
- [ ] Ai găsit greșeala din Exemplul 10 fără să te uiți la rezolvare  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Orarul meu” (obligatoriu)
Pagina `index.html` cu:
- un `<h1>`,  
- un tabel cu orarul unei zile (minimum 3 coloane și 4 rânduri de date), cu `<caption>` și antet cu `<th>`,  
- liniile vizibile (bucata `<style>` din `<head>`).

### Exercițiul B — „Clasamentul meu”
Pe aceeași pagină, sub orar, adaugă un al doilea tabel: clasamentul (cel puțin 3 rânduri) pentru o temă aleasă de tine (jocuri, animale, mâncare, desene animate). Pune într-o celulă un cuvânt îngroșat.

### Exercițiul C — Cât este?
Spune câte rânduri, câte coloane și câte celule are acest tabel:

```text
<table>
  <tr><th>A</th><th>B</th><th>C</th></tr>
  <tr><td>1</td><td>2</td><td>3</td></tr>
  <tr><td>4</td><td>5</td><td>6</td></tr>
</table>
```

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli**:

```text
<table>
  <tr>
    <th>Fruct</th>
    <th>Culoare
  </tr>
  <caption>Fructe</caption>
  <td>Măr</td>
  <td>roșu</td>
</table>
```

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: care este diferența dintre `<th>` și `<td>`? De ce am pus `<style>` în `<head>`?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W2_L1` conține `index.html` cu cele două tabele  
- [ ] Ambele tabele au titlu (`caption`), antet (`th`) și linii  
- [ ] Codul este indentat și are comentarii pentru fiecare tabel  
- [ ] Ai răspuns la exercițiile C–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Fă tabelul înmulțirii cu 2: două coloane (`2 × 1`, `2 × 2` și așa mai departe) și 10 rânduri  
- [ ] Schimbă culoarea antetului cu `th { background-color: lightblue; }`  
- [ ] Fă un tabel „Familia animalelor”: coloane Animal, Mănâncă, Trăiește în (fără date personale)  
- [ ] Deschide DevTools (**F12**), fila **Elements**, și deschide pe rând `table`, `tr` și `td` ca să vezi structura  

---

## Greșeli frecvente
1. **Ai pus `<td>` direct în `<table>`** — celulele stau în `<tr>`.  
2. **Rândurile au număr diferit de celule** — tabelul arată strâmb.  
3. **Ai uitat `</tr>` sau `</td>`**.  
4. **Ai pus `<caption>` la sfârșit** — trebuie imediat după `<table>`.  
5. **Ai pus `<style>` în `<body>`** — locul lui este în `<head>`.  
6. **Ai folosit `<td>` pentru titluri** — folosește `<th>`.  
7. **Ai făcut un tabel doar ca să aranjezi pagina** — tabelele sunt pentru date, nu pentru aspect.  
8. **Nu se văd liniile** — verifică dacă ai pus bucata `<style>` și dacă ai salvat.  

---

## Recapitulare pe scurt
1. `<table>` conține rânduri `<tr>`, iar `<tr>` conține celule.  
2. `<th>` este celulă de antet, `<td>` este celulă de date.  
3. `<caption>` este titlul tabelului.  
4. Toate rândurile au același număr de celule.  
5. Liniile se adaugă cu o regulă de stil din `<head>`.  
6. O celulă poate avea text îngroșat, link sau imagine.  
7. Tabelele sunt pentru date, nu pentru aranjarea paginii.

## Quiz scurt
- Ce face `<tr>`?  
- Care este diferența dintre `<th>` și `<td>`?  
- Unde se scrie `<caption>`?  
- De ce nu se văd liniile unui tabel fără stil?  
- Câte coloane are un tabel cu 4 celule pe rând?

## Temă
Fă o pagină cu **tabelul cu cărțile tale preferate**: coloane Titlu, Autor, Nota mea (de la 1 la 10). Minimum 5 rânduri, cu antet, titlu și linii. Pune pagina în folderul `Prenume_Nume_W2_L1`.

## Ce urmează — Lecția 2
Tabele **mai deștepte**: celule care se unesc pe mai multe coloane sau rânduri, tabele cu partea de sus, mijloc și final.

---

## Răspunsuri pentru profesor
- **Exercițiul C:** 3 rânduri, 3 coloane, 9 celule.  
- **Exercițiul D:** (1) lipsește `</th>` după „Culoare”; (2) `<caption>` trebuie scris imediat după `<table>`, înaintea primului rând; (3) celulele `Măr` și `roșu` nu sunt într-un rând: trebuie `<tr>` înainte de ele și `</tr>` după ele.  
- **Exercițiul E:** `th` este antetul coloanei (îngroșat și centrat), `td` este pentru date; `style` este în `head`, pentru că aparține configurării paginii, nu conținutului.  
- **Exemplul 10:** `<td>` fără `<tr>`.
