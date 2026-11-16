# LECȚIA 1 — Orarul de weekend
### Tabele: rânduri, celule și antet
**Modulul 2 · HTML II: Pagini mai bogate · 2 ore**  
**Code Maker Club · HTML Builder**

> Orarul unei zile, clasamentul unui joc, lista de prețuri: toate sunt **tabele**. Azi înveți să le faci în HTML, rând cu rând și coloană cu coloană.  
> Proiect: **„Orarul de weekend”** (și un **„Top 3 jocuri”**) · folder: `Prenume_Nume_W2_L1` (ex. `Ana_Pop_W2_L1`)

---

## Ce facem azi
La final ai o pagină cu **două tabele**: orarul unei zile de weekend (ore, activități, locuri) și un clasament cu trei jocuri, ambele cu titlu, antet și linii vizibile. Știi să faci un tabel cu `<table>`, `<tr>`, `<th>` și `<td>`, să-i pui un titlu cu `<caption>`, să pui în celule text îngroșat, linkuri sau imagini și să adaugi liniile cu o regulă de stil. Când ai date pe rânduri și pe coloane (ore, scoruri, prețuri), un tabel le face ușor de citit: aproape orice site cu informații folosește tabele.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare Modulul 1 · pornim proiectul |
| 15–35 | Primul tabel: `table`, `tr`, `td` (**Exemplele 1–2**) |
| 35–55 | Antetul `th` și titlul `caption` (**Exemplele 3–4**) |
| 55–70 | Liniile tabelului (**Exemplul 5**) |
| 70–90 | Ce punem în celule: clasament, link, imagine (**Exemplele 6–7**) |
| 90–115 | Mini-proiect: orarul de weekend (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `<table>` | Învelește tot tabelul | `<table> ... </table>` |
| `<tr>` | Un rând de tabel (*table row*) | `<tr> ... </tr>` |
| `<td>` | O celulă de date (*table data*) | `<td>Fotbal</td>` |
| `<th>` | O celulă de antet, îngroșată și centrată | `<th>Sport</th>` |
| `<caption>` | Titlul tabelului, scris imediat după `<table>` | `<caption>Luni</caption>` |
| `border: 1px solid black;` | Regulă de stil pentru liniile tabelului, în `<head>` | în `<style>` |

---

## 1. Recapitulare rapidă

Din Modulul 1 ții minte că:
- o pagină are schelet: `html`, `head`, `body`;
- listele se fac cu `<ul>`, `<ol>` și `<li>`;
- ultimul tag deschis se închide primul;
- codul se indentează cu 2 spații pentru fiecare nivel.

**Încearcă tu (3 min)**  
- [ ] Creează folderul `Prenume_Nume_W2_L1` și deschide-l în VS Code  
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
    <td>Fotbal</td>
    <td>Înot</td>
    <td>Baschet</td>
  </tr>
</table>
```

Rândul `<tr>` are trei celule `<td>`, așa că tabelul are **trei coloane** pe un singur rând.

### Exemplul 2 — Două rânduri, încă fără linii

```html
<table>
  <tr>
    <td>Fotbal</td>
    <td>11 jucători</td>
  </tr>
  <tr>
    <td>Baschet</td>
    <td>5 jucători</td>
  </tr>
</table>
```

Fiecare `<tr>` este un rând nou. Numărul de coloane este dat de numărul de celule dintr-un rând, iar **toate rândurile trebuie să aibă același număr de celule**.

Dacă deschizi exemplul, vezi text aranjat pe rânduri, **fără linii**. Este normal: HTML aranjează datele, iar liniile se adaugă cu stil. Le adăugăm mai jos.

> **Ordinea tagurilor:** `table` conține `tr`, iar `tr` conține `td`. Nu pune niciodată `td` direct în `table` și nu uita să închizi fiecare tag.

**Încearcă tu (4 min)**  
- [ ] Scrie tabelul din Exemplul 2, dar cu două sporturi sau jocuri alese de tine  
- [ ] Verifică în Live Server că ambele rânduri au același număr de celule  

---

## 3. Antetul și titlul tabelului

### Exemplul 3 — Celule de antet: `<th>`

Prima linie a unui tabel spune de obicei **ce conține fiecare coloană**. Pentru ea folosești `<th>` (*table header* = antet de tabel). Textul din `<th>` apare **îngroșat și centrat**:

```html
<table>
  <tr>
    <th>Sport</th>
    <th>Jucători</th>
    <th>Minge</th>
  </tr>
  <tr>
    <td>Fotbal</td>
    <td>11</td>
    <td>rotundă</td>
  </tr>
  <tr>
    <td>Rugby</td>
    <td>15</td>
    <td>ovală</td>
  </tr>
</table>
```

Regulă: `<th>` pentru **titlurile** de coloană, `<td>` pentru **date**.

### Exemplul 4 — Titlul tabelului: `<caption>`

```html
<table>
  <caption>Sporturi de echipă</caption>
  <tr>
    <th>Sport</th>
    <th>Jucători</th>
  </tr>
  <tr>
    <td>Handbal</td>
    <td>7</td>
  </tr>
</table>
```

`<caption>` („legendă”) se scrie **imediat după `<table>`**, înaintea primului rând. Browserul îl afișează deasupra tabelului, iar cine citește pagina știe despre ce este tabelul.

**Încearcă tu (5 min)**  
- [ ] Fă un tabel cu antet (`th`), 3 coloane și 3 rânduri de date  
- [ ] Adaugă un titlu cu `<caption>` imediat după `<table>`  

---

## 4. Liniile tabelului

### Exemplul 5 — O regulă de stil pentru linii

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

> Poți schimba culoarea: `border: 1px solid navy;`. Poți colora antetul: adaugă în aceeași bucată `th { background-color: lightblue; }`.

**Încearcă tu (4 min)**  
- [ ] Adaugă bucata `<style>` în `<head>` și verifică liniile  
- [ ] Schimbă culoarea liniilor din `black` în altă culoare  

---

## 5. Ce punem în celule

### Exemplul 6 — Clasamentul jocurilor preferate

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

Ordinea contează într-un clasament, dar nu avem nevoie de o listă: tabelul arată locul, jocul și nota, pe coloane. Cuvântul îngroșat cu `<strong>` stă **în interiorul** celulei.

### Exemplul 7 — Link, imagine și text lung în celule

O celulă poate conține orice ai învățat deja:

```html
<table>
  <caption>Lucruri de văzut</caption>
  <tr>
    <th>Ce</th>
    <th>Descriere</th>
  </tr>
  <tr>
    <td><a href="https://ro.wikipedia.org" target="_blank" rel="noopener noreferrer">Wikipedia</a></td>
    <td>O enciclopedie online, unde găsești informații despre multe subiecte.</td>
  </tr>
  <tr>
    <td><img src="imagini/minge.jpg" alt="O minge de fotbal" width="80"></td>
    <td><em>Mingea mea de fotbal</em></td>
  </tr>
</table>
```

> **Siguranță:** linkurile le alegi doar împreună cu un adult, iar imaginile sunt desenele sau pozele aprobate (fără persoane).

**Încearcă tu (6 min)**  
- [ ] Fă un clasament cu trei elemente, cu antet și un cuvânt îngroșat într-o celulă  
- [ ] Pune într-o celulă un link sau o imagine  

---

## 6. Mini-proiect

### Exemplul 8 — „Orarul de weekend”

Toate la un loc: orarul unei zile și un top, pe aceeași pagină.

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Orarul de weekend</title>
  <style>
    table, th, td {
      border: 1px solid black;
      border-collapse: collapse;
      padding: 6px;
    }
  </style>
</head>
<body>
  <h1>Orarul de weekend</h1>

  <!-- Orarul zilei -->
  <table>
    <caption>Sâmbătă</caption>
    <tr>
      <th>Ora</th>
      <th>Ce fac</th>
      <th>Unde</th>
    </tr>
    <tr>
      <td>9:00</td>
      <td>Fotbal</td>
      <td>în parc</td>
    </tr>
    <tr>
      <td>11:00</td>
      <td>Desen</td>
      <td>acasă</td>
    </tr>
    <tr>
      <td>13:00</td>
      <td>Masa de prânz</td>
      <td>acasă</td>
    </tr>
    <tr>
      <td>16:00</td>
      <td>Înot</td>
      <td>la bazin</td>
    </tr>
  </table>

  <h2>Cele mai bune jocuri ale mele</h2>

  <!-- Clasamentul -->
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
</body>
</html>
```

Orarul tău poate fi despre ce vrei: o zi de sport, o zi în oraș sau o zi de jocuri. Scrie activități reale, fără numele locurilor tale exacte.

---

## De făcut azi — „Orarul de weekend”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | O pagină cu un tabel de orar: 3 coloane, 4 rânduri de date, antet cu `<th>` și linii vizibile |
| **Complet** | Minim + titlu cu `<caption>`, un al doilea tabel (clasament cu cel puțin 3 rânduri) cu un cuvânt îngroșat și o celulă cu link sau imagine, cod indentat și comentarii |

### Pasul 1 — Minim
Fă `index.html` cu un `<h1>` și un tabel cu orarul unei zile.

- [ ] Folderul `Prenume_Nume_W2_L1` are `index.html` cu scheletul complet  
- [ ] Tabelul are antet cu `<th>` și cel puțin 4 rânduri de date  
- [ ] Toate rândurile au același număr de celule, iar liniile se văd  

### Pasul 2 — Complet
Îmbunătățești pagina:

- [ ] Primul tabel are titlu cu `<caption>`, scris imediat după `<table>`  
- [ ] Sub orar ai un al doilea tabel: clasament cu cel puțin 3 rânduri, cu antet  
- [ ] Un cuvânt din clasament este îngroșat, iar o celulă are un link sau o imagine  
- [ ] Bucata `<style>` este în `<head>`, codul e indentat și fiecare tabel are un comentariu  

---

## Bonus ★★★ — Provocare: Tabelul înmulțirii
*Doar dacă ai terminat Complet.*

Faci un tabel care se citește foarte ușor.

- [ ] Fă tabelul înmulțirii cu 2: două coloane (`2 × 1`, `2 × 2` și așa mai departe) și 10 rânduri  
- [ ] Schimbă culoarea antetului cu `th { background-color: lightblue; }`  
- [ ] Fă un tabel „Sporturi” cu coloanele Sport, Minge și Unde se joacă  
- [ ] Deschide DevTools (**F12**; pe Mac Cmd + Option + I), fila **Elements**, și deschide pe rând `table`, `tr` și `td` ca să vezi structura  

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
1. Fă o pagină cu **tabelul cărților sau filmelor tale preferate**: coloane Titlu, Autor (sau Regizor), Nota mea (de la 1 la 10). Minimum 5 rânduri, cu antet, titlu și linii. Pune pagina în folderul `Prenume_Nume_W2_L1`.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Alinierea textului în celule.**

În mod obișnuit textul din `<td>` stă la stânga, iar cel din `<th>` e centrat. Cu o regulă de stil poți schimba asta, de exemplu pentru numere:

```html
<style>
  td { text-align: right; }
</style>
```

Adaugă regula în `<style>`, lângă cea cu liniile, și vezi cum se mută numerele spre dreapta.

**Acasă 2 — O listă într-o celulă.**

```html
<table>
  <caption>Ce iau la meci</caption>
  <tr>
    <th>Echipament</th>
    <th>Ce conține</th>
  </tr>
  <tr>
    <td>Rucsac</td>
    <td>
      <ul>
        <li>Apă</li>
        <li>Mingea</li>
        <li>Șapcă</li>
      </ul>
    </td>
  </tr>
</table>
```

O celulă poate conține și o listă, fiindcă lista stă **între** `<td>` și `</td>`.

4. **Încă patru exerciții (B–E):**

**B — `th` sau `td`?** Pentru fiecare, alege `<th>` sau `<td>`: (1) „Loc”, titlul unei coloane; (2) „Minecraft”, numele unui joc; (3) „Nota mea”, titlul unei coloane; (4) „10”, o notă.

**C — Cât este?** Spune câte rânduri, câte coloane și câte celule are acest tabel:

```text
<table>
  <tr><th>A</th><th>B</th><th>C</th></tr>
  <tr><td>1</td><td>2</td><td>3</td></tr>
  <tr><td>4</td><td>5</td><td>6</td></tr>
</table>
```

**D — Găsește greșelile.** Găsește **3 greșeli** în fiecare cod și repară greșelile:

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

```text
<table>
  <tr>
    <td>Fotbal</td>
    <td>11</td>
  </tr>
  <td>Baschet</td>
  <td>5</td>
</table>
```

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: care este diferența dintre `<th>` și `<td>`? De ce am pus `<style>` în `<head>`?

## Ce urmează — Lecția 2
Învățăm tabele **mai deștepte**: celule care se unesc pe mai multe coloane sau rânduri și un program de turneu cu pauze.

---

## Răspunsuri
- **Quiz scurt:** (1) face un rând de tabel, care conține celulele; (2) `<th>` este celulă de antet (îngroșat și centrat) pentru titlurile de coloană, `<td>` este celulă de date; (3) imediat după `<table>`, înaintea primului rând; (4) HTML doar aranjează datele, iar liniile se adaugă cu o regulă de stil (`border`) în `<style>`; (5) 4 coloane.  
- **Tema, exercițiul B:** (1) `<th>`; (2) `<td>`; (3) `<th>`; (4) `<td>`.  
- **Tema, exercițiul C:** 3 rânduri, 3 coloane, 9 celule.  
- **Tema, exercițiul D, primul cod:** (1) lipsește `</th>` după „Culoare”; (2) `<caption>` trebuie scris imediat după `<table>`, înaintea primului rând; (3) celulele `Măr` și `roșu` nu sunt într-un rând: trebuie `<tr>` înainte de ele și `</tr>` după ele.  
- **Tema, exercițiul D, al doilea cod:** celulele `Baschet` și `5` nu sunt într-un `<tr>`; corect: `<tr><td>Baschet</td><td>5</td></tr>`.  
- **Tema, exercițiul E:** `th` este antetul coloanei (îngroșat și centrat), `td` este pentru date; `style` este în `head`, pentru că aparține configurării paginii, nu conținutului.
