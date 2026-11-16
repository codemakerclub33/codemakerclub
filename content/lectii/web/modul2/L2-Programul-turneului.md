# LECȚIA 2 — Programul turneului
### Tabele: celule care se întind pe mai multe coloane și rânduri
**Modulul 2 · HTML II: Pagini mai bogate · 2 ore**  
**Code Maker Club · HTML Builder**

> În lecția trecută toate rândurile aveau același număr de celule. Azi învățăm să **unim celule** și să împărțim tabelul în **partea de sus, mijloc și final**. Așa faci programe și tabele de scoruri ca ale profesioniștilor.  
> Proiect: **„Programul turneului”** · folder: `Prenume_Nume_W2_L2` (ex. `Ana_Pop_W2_L2`)

---

## Ce facem azi
La final ai o pagină cu **programul unui turneu sportiv**, pe terenuri și pe ore, cu o pauză care se întinde pe toată lățimea, un meci care ține două ore și un antet colorat, plus un tabel cu **golurile marcate și totalul lor**. Știi să unești celule pe orizontală cu `colspan` și pe verticală cu `rowspan`, să împarți tabelul cu `<thead>`, `<tbody>` și `<tfoot>`, să folosești `scope` pe antet și să aliniezi cifrele. Un program are „Pauză” care se întinde pe toată lățimea și un meci de două ore care se întinde pe două rânduri; fără `colspan` și `rowspan` nu poți face asta.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul · aducem pagina cu articolul de pe Wikipedia |
| 15–35 | `colspan`: celule unite pe orizontală (**Exemplele 1–2**) |
| 35–55 | `rowspan`: celule unite pe verticală (**Exemplele 3–4**) |
| 55–75 | `thead`, `tbody`, `tfoot` · `scope` (**Exemplele 5–6**) |
| 75–90 | Aliniere și culori (**Exemplul 7**) |
| 90–115 | Mini-proiect: programul turneului (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `colspan="N"` | Întinde o celulă pe N coloane | `<td colspan="2">Pauză</td>` |
| `rowspan="N"` | Întinde o celulă pe N rânduri | `<td rowspan="2">Fotbal</td>` |
| `<thead>`, `<tbody>`, `<tfoot>` | Partea de sus, mijlocul și finalul tabelului | `<tfoot>` pentru total |
| `scope="col"` / `scope="row"` | Arată ce acoperă un antet | `<th scope="row">Roșii</th>` |
| `th { background-color: ...; }` | Colorează antetele | în `<style>` |
| `text-align: right;` | Aliniază cifrele la dreapta | `<td style="text-align: right;">5</td>` |

---

## 1. Recapitulare rapidă

- `<table>` conține rânduri `<tr>`, iar acestea conțin `<th>` și `<td>`.  
- `<caption>` este titlul tabelului și se scrie imediat după `<table>`.  
- Liniile apar prin regula din `<head>`.  
- Toate rândurile aveau același număr de celule. Azi vedem cum se poate schimba.

**Încearcă tu (8 min)**  
- [ ] Creează folderul `Prenume_Nume_W2_L2` și fișierul `index.html` cu scheletul complet  
- [ ] Copiază în folder pagina `tema.html` din lecția trecută (cu „Fișa pe scurt”)  
- [ ] Caută în articolul tău de pe Wikipedia 5–6 **ani sau date importante** (nașteri, descoperiri, schimbări): azi le pui într-o cronologie  
- [ ] Copiază în `<head>` regula pentru linii din lecția trecută:  

```html
<style>
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
    padding: 6px;
  }
</style>
```

> De aici înainte scriem **un rând întreg pe o singură linie**, ca să vezi mai ușor câte celule are fiecare rând.

---

## 2. `colspan`: celule unite pe orizontală

`colspan` înseamnă „întinde celula pe mai multe coloane”.

### Exemplul 1 — „Pauză” pe toată lățimea

```html
<table>
  <tr><th>Ora</th><th>Teren 1</th><th>Teren 2</th></tr>
  <tr><td>9:00</td><td>Fotbal</td><td>Baschet</td></tr>
  <tr><td>10:00</td><td colspan="2">Pauză mare</td></tr>
</table>
```

Tabelul are 3 coloane. În ultimul rând sunt două celule, dar a doua are `colspan="2"` și ocupă **două coloane**. Împreună: 1 + 2 = 3 coloane, deci rândul este complet.

> **Regula de aur:** în fiecare rând, **suma** coloanelor ocupate de celule trebuie să fie **egală** cu numărul de coloane al tabelului. Celula cu `colspan="2"` se numără ca 2.

### Exemplul 2 — Un antet unit

```html
<table>
  <tr><th rowspan="2">Echipa</th><th colspan="2">Goluri</th></tr>
  <tr><th>Meci 1</th><th>Meci 2</th></tr>
  <tr><td>Roșii</td><td>2</td><td>3</td></tr>
  <tr><td>Albaștri</td><td>1</td><td>4</td></tr>
</table>
```

Antetul „Goluri” se întinde pe două coloane și are sub el „Meci 1” și „Meci 2”. „Echipa” se întinde pe două rânduri (vezi secțiunea următoare).

**Încearcă tu (9 min)**  
- [ ] Fă un tabel cu 3 coloane și o celulă `colspan="2"` într-un rând  
- [ ] Verifică în fiecare rând că suma coloanelor este 3  
- [ ] În `tema.html`, fă un tabel „Cronologie” cu două coloane (An și Ce s-a întâmplat), cu un antet unit cu `colspan="2"` peste ele  
- [ ] Verifică dacă fiecare rând de date are exact două celule  

---

## 3. `rowspan`: celule unite pe verticală

`rowspan` înseamnă „întinde celula pe mai multe rânduri”.

### Exemplul 3 — Un meci de două ore

```html
<table>
  <tr><th>Ora</th><th>Teren</th></tr>
  <tr><td>8:00</td><td rowspan="2">Fotbal (2 ore)</td></tr>
  <tr><td>9:00</td></tr>
  <tr><td>10:00</td><td>Baschet</td></tr>
</table>
```

Celula „Fotbal” are `rowspan="2"`: ocupă rândul ei **și** rândul următor. De aceea, în al doilea rând **nu mai scrii** o celulă pentru coloana a doua, pentru că locul este deja ocupat.

### Exemplul 4 — Numărăm celulele corect

La `rowspan`, rândul de sub celula unită are cu **o celulă mai puțin**. Un tabel cu 3 coloane:

```html
<table>
  <tr><td rowspan="2">A</td><td>B</td><td>C</td></tr>
  <tr><td>D</td><td>E</td></tr>
</table>
```

Primul rând are 3 celule (A, B, C). În al doilea, A ocupă încă prima coloană, deci mai scrii doar D și E. Total: tot 3 coloane în fiecare rând.

**Încearcă tu (10 min)**  
- [ ] Fă un tabel cu o celulă `rowspan="2"`  
- [ ] În cronologie, adaugă o coloană „Perioada” și unește, cu `rowspan`, două evenimente din aceeași perioadă  
- [ ] Fă în pagină un tabel cu 3 coloane și 3 rânduri, în care o celulă ocupă 2 rânduri, și scrie într-un comentariu câte celule are fiecare rând  

---

## 4. Partea de sus, mijloc și final

### Exemplul 5 — `thead`, `tbody`, `tfoot`

Poți împărți tabelul în trei părți:

| Tag | Ce conține |
|-----|------------|
| `<thead>` | rândurile de antet (partea de sus) |
| `<tbody>` | rândurile cu date (mijlocul) |
| `<tfoot>` | rândul de final, de exemplu totalul |

```html
<table>
  <caption>Golurile turneului</caption>
  <thead>
    <tr><th>Echipa</th><th>Meci 1</th><th>Meci 2</th><th>Meci 3</th></tr>
  </thead>
  <tbody>
    <tr><td>Roșii</td><td>2</td><td>1</td><td>3</td></tr>
    <tr><td>Albaștri</td><td>0</td><td>4</td><td>1</td></tr>
    <tr><td>Verzi</td><td>3</td><td>2</td><td>2</td></tr>
  </tbody>
  <tfoot>
    <tr><th>Total</th><td>5</td><td>7</td><td>6</td></tr>
  </tfoot>
</table>
```

Verifică totalurile: 2 + 0 + 3 = 5; 1 + 4 + 2 = 7; 3 + 1 + 2 = 6. Calculatorul nu face adunarea singur: o faci tu (în Modulul 4 vei învăța cum o face JavaScript).

Aspectul nu se schimbă mult, dar codul este **mai clar**, iar telefonul sau cititorul de ecran înțelege care este antetul.

### Exemplul 6 — `scope`: antet pentru rând sau pentru coloană

Atributul `scope` spune ce acoperă o celulă `<th>`:

```html
<table>
  <tr><th scope="col">Sport</th><th scope="col">Jucători</th></tr>
  <tr><th scope="row">Fotbal</th><td>11</td></tr>
  <tr><th scope="row">Baschet</th><td>5</td></tr>
</table>
```

- `scope="col"` înseamnă „acesta este antetul coloanei de mai jos”;  
- `scope="row"` înseamnă „acesta este antetul rândului din dreapta”.

Un copil care folosește un cititor de ecran aude „Fotbal, Jucători, 11”, nu doar „11”.

**Încearcă tu (10 min)**  
- [ ] Fă un tabel cu `thead`, `tbody` și `tfoot`, cu totalul calculat corect  
- [ ] Folosește `scope="col"` și `scope="row"` într-un tabel  
- [ ] Împarte cronologia din `tema.html` în `thead` și `tbody`, iar în `tfoot` scrie câte evenimente are  
- [ ] Pune `scope` pe antete  

---

## 5. Aliniere și culori

### Exemplul 7 — Text la dreapta și antet colorat

Adaugă în `<style>` din `<head>` încă o regulă:

```html
<style>
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
    padding: 6px;
  }
  th {
    background-color: lightblue;
  }
</style>
```

Antetele vor avea fundal albastru deschis. Pentru cifre, e mai frumos să stea la dreapta; poți pune pe o celulă un `style` ca în Modulul 1:

```html
<td style="text-align: right;">35</td>
```

> Numerele aliniate la dreapta se compară mai ușor, pentru că cifrele sunt una sub alta.

**Încearcă tu (7 min)**  
- [ ] Colorează antetele cu regula `th` din exemplu  
- [ ] Aliniază la dreapta cifrele dintr-un tabel  
- [ ] În cronologie, aliniază anii la dreapta și colorează antetul cu o culoare care se potrivește temei  

---

## 6. Mini-proiect

### Exemplul 8 — „Programul turneului”

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Programul turneului</title>
  <style>
    table, th, td {
      border: 1px solid black;
      border-collapse: collapse;
      padding: 6px;
    }
    th {
      background-color: lightblue;
    }
  </style>
</head>
<body>
  <h1>Programul turneului</h1>

  <table>
    <caption>Sâmbătă, pe terenuri</caption>
    <thead>
      <tr><th scope="col">Ora</th><th scope="col">Teren 1</th><th scope="col">Teren 2</th><th scope="col">Teren 3</th></tr>
    </thead>
    <tbody>
      <tr><td>9:00</td><td rowspan="2">Fotbal: Roșii – Albaștri (2 ore)</td><td>Baschet: Verzi – Galbeni</td><td>Tenis: semifinala 1</td></tr>
      <tr><td>10:00</td><td>Baschet: Albi – Negri</td><td>Tenis: semifinala 2</td></tr>
      <tr><td>11:00</td><td colspan="3">Pauză mare</td></tr>
      <tr><td>11:30</td><td>Fotbal: finala</td><td>Baschet: finala</td><td>Tenis: finala</td></tr>
    </tbody>
  </table>
</body>
</html>
```

Verifică rândurile: primul rând are 4 celule (Ora, Fotbal, Baschet, Tenis); al doilea are 3 (Ora, Baschet, Tenis), pentru că Fotbal ocupă și acest rând; al treilea are 1 + 3 = 4; al patrulea are 4. Totul este în regulă.

> **Cum verifici un tabel:** pentru fiecare rând, scrie într-un comentariu câte coloane ocupă celulele lui. Cu `rowspan`, adaugă și celulele ocupate de rândul de deasupra. Dacă toate rândurile dau același număr, tabelul este corect. Poți apăsa și **F12** (pe Mac **Cmd + Option + I**) → **Elements** și plimba mouse-ul peste tabel: celulele sunt marcate colorat.

---

## De făcut azi — „Programul turneului”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Un tabel de program cu o celulă unită pe orizontală (`colspan`) și una unită pe verticală (`rowspan`) |
| **Complet** | Minim + `<thead>` și `<tbody>`, antet colorat, pe cel puțin 3 terenuri și 5 ore, și un al doilea tabel cu `<tfoot>` și totalul calculat corect |

### Pasul 1 — Minim
Fă `index.html` cu un `<h1>` și un tabel de program cu terenuri pe coloane și ore pe rânduri.

- [ ] Folderul `Prenume_Nume_W2_L2` are `index.html` cu scheletul complet  
- [ ] Tabelul are o pauză cu `colspan` și un meci de două ore cu `rowspan`  
- [ ] Ai verificat că toate rândurile ocupă același număr de coloane  

### Pasul 2 — Complet
Îmbunătățești pagina:

- [ ] Tabelul are `<caption>`, `<thead>` și `<tbody>`, iar antetul este colorat  
- [ ] Programul are cel puțin 3 terenuri și 5 ore  
- [ ] Al doilea tabel are `<tfoot>` cu totaluri calculate corect  
- [ ] Codul este indentat și fiecare tabel are un comentariu  

---

## Bonus ★★★ — Provocare: Scorul turneului
*Doar dacă ai terminat Complet.*

Faci un tabel de scoruri ca la televizor.

- [ ] Fă un tabel pentru un turneu cu 4 echipe și 3 runde, cu total pe fiecare echipă  
- [ ] Pune `style="text-align: right;"` pe toate celulele cu numere  
- [ ] Fă un antet unit pe două niveluri, ca în Exemplul 2, pentru un alt subiect  
- [ ] Fă din cronologia ta de pe Wikipedia un tabel cu cel puțin 8 rânduri, cu perioade unite, `thead`, `tbody` și `tfoot`  

---

## Greșeli frecvente
1. **Ai numărat greșit coloanele** — suma celulelor dintr-un rând trebuie să fie aceeași în toate rândurile.  
2. **Ai uitat să scoți celula ocupată de `rowspan`** din rândul de sub ea.  
3. **Ai scris `colspan=2` fără ghilimele** — scrie `colspan="2"`.  
4. **Ai lăsat rânduri în afara lui `thead`, `tbody` sau `tfoot`** — dacă folosești aceste părți, toate rândurile stau în ele.  
5. **Ai pus `<tfoot>` în afara tabelului**.  
6. **Ai adunat greșit totalul** — verifică de două ori.  
7. **Ai folosit `colspan` ca să aranjezi pagina** — tabelele sunt pentru date.  
8. **Ai uitat `scope`** — merge și fără, dar ajută cititoarele de ecran.  

---

## Recapitulare pe scurt
1. `colspan="N"` întinde o celulă pe N coloane.  
2. `rowspan="N"` întinde o celulă pe N rânduri.  
3. În fiecare rând, suma coloanelor ocupate trebuie să fie aceeași.  
4. `thead`, `tbody` și `tfoot` împart tabelul în sus, mijloc, final.  
5. `scope="col"` și `scope="row"` arată ce acoperă un antet.  
6. Cifrele se aliniază la dreapta cu `text-align: right`.

## Quiz scurt
- Ce face `colspan="3"`?  
- Cum scrii o celulă care ocupă două rânduri?  
- Ce conține `<tfoot>`?  
- La `rowspan`, de ce rândul de sub celulă are mai puține celule?  
- Ce spune `scope="row"`?

## Temă
1. Fă **programul unei zile în oraș**: coloane pentru trei locuri (de exemplu muzeu, parc, bibliotecă), ore pe rânduri, cu o vizită de 2 ore (`rowspan`) și o pauză (`colspan`). Salvează în `Prenume_Nume_W2_L2`.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Celulă unită și pe coloane, și pe rânduri.**

O celulă poate avea `colspan` și `rowspan` în același timp:

```html
<table>
  <tr><td rowspan="2" colspan="2">Mare</td><td>A</td></tr>
  <tr><td>B</td></tr>
  <tr><td>C</td><td>D</td><td>E</td></tr>
</table>
```

Celula „Mare” ocupă un pătrat de 2 coloane și 2 rânduri. Numără: primul rând are 2 + 1 = 3 coloane, al doilea doar celula `B` (restul e ocupat), al treilea are 3.

**Acasă 2 — Un rând colorat.**

```html
<tr style="background-color: lightyellow;"><td>11:00</td><td colspan="3">Pauză mare</td></tr>
```

Cu `style` pe `<tr>` colorezi tot rândul, de exemplu pauza, ca să iasă în evidență.

4. **Încă patru exerciții (B–E):**

**B — Tabel cu total.** Fă un tabel cu `thead`, `tbody` și `tfoot`: de exemplu „Cărțile citite” (luna, numărul de cărți) cu total la final. Calculează corect totalul.

**C — Câte celule?** Un tabel are 4 coloane. Un rând are o celulă cu `colspan="2"`. Câte celule mai scrii în acel rând?

**D — Găsește greșelile.** Găsește **3 greșeli** în fiecare cod și scrie varianta corectă. Atenție: browserul repară unele greșeli singur și nu le vezi pe ecran, dar rămân greșeli de scriere:

```text
<table>
  <tr>
    <th>Sport</th>
    <th>Echipament
  </tr>
  <tr>
    <td rowspan=2>Fotbal</td>
    <td>Minge</td>
  </tr>
  <tr>
    <td>Porți</td>
    <td>Ghete</td>
  </tr>
</table>
```

```text
<table>
  <tr><th>A</th><th>B</th><th>C</th></tr>
  <tr><td colspan="2">X</td><td>Y</td><td>Z</td></tr>
</table>
```

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: la ce folosesc `colspan` și `rowspan`? De ce spunem că regula de aur este să numeri coloanele în fiecare rând?

## Ce urmează — Lecția 3
Începem **formularele**: casete în care scrie vizitatorul, parole, butoane și etichete, pentru un club secret.

---

## Răspunsuri
- **Quiz scurt:** (1) întinde celula pe 3 coloane; (2) cu `rowspan="2"`; (3) rândul de final al tabelului, de exemplu totalul; (4) pentru că celula unită ocupă deja locul în acel rând, deci nu mai scrii o celulă pentru acea coloană; (5) că `<th>` este antetul rândului din dreapta lui.  
- **Tema, exercițiul C:** 2 celule. Celula cu `colspan="2"` ocupă 2 coloane, iar celelalte 2 coloane se acoperă cu 2 celule obișnuite: 2 + 1 + 1 = 4.  
- **Tema, exercițiul D, primul cod:** (1) lipsește `</th>` după „Echipament”; (2) lipsesc ghilimelele la `rowspan="2"` (browserul acceptă și fără, dar regula este să scriem ghilimele); (3) ultimul rând are o celulă în plus: prima coloană este deja ocupată de „Fotbal”, deci rămâne loc doar pentru una dintre `Porți` și `Ghete`. Acceptați orice soluție care face toate rândurile la fel de late.  
- **Tema, exercițiul D, al doilea cod:** al doilea rând ocupă 2 + 1 + 1 = 4 coloane, deși tabelul are 3; se repară scoțând o celulă (de exemplu `Z`) sau adăugând o coloană în antet.  
- **Tema, exercițiul E:** `colspan` unește celule pe orizontală, `rowspan` pe verticală; numărăm ca să nu iasă tabelul strâmb.
