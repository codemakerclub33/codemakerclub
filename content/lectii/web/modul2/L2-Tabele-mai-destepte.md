# LECȚIA 2 — Tabele mai deștepte
**Modulul 2 · HTML II: Pagini mai bogate · 2 ore**  
**Code Maker Club · HTML Builder**

> În lecția trecută toate rândurile aveau același număr de celule. Azi învățăm să **unim celule** și să împărțim tabelul în **partea de sus, mijloc și final**. Așa faci orare și tabele de scoruri ca ale profesioniștilor.  
> Proiect: **„Orarul săptămânii”** · folder: `Prenume_Nume_W2_L2` (ex. `Ana_Pop_W2_L2`)

---

## Obiectiv
La finalul orei știi să unești celule pe orizontală cu `colspan` și pe verticală cu `rowspan`, să împarți tabelul cu `<thead>`, `<tbody>` și `<tfoot>`, să folosești `scope` pe antet și să aliniezi textul din celule.  
**Minim:** un tabel cu o celulă unită pe orizontală (`colspan`) și una unită pe verticală (`rowspan`).  
**Ținta orei (Complet):** + un tabel cu `thead`, `tbody` și `tfoot`, un orar săptămânal complet, culoare pe antet și toate rândurile verificate (număr corect de celule).

## De ce contează
Un orar are „Pauză” care se întinde pe toată lățimea și o oră de două ore care se întinde pe două rânduri. Fără `colspan` și `rowspan` nu poți face asta. Iar `thead`, `tbody`, `tfoot` ajută atât oamenii, cât și programele care citesc pagina.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–35 | `colspan`: celule unite pe orizontală (**Exemplele 1–2**) |
| 35–55 | `rowspan`: celule unite pe verticală (**Exemplele 3–4**) |
| 55–75 | `thead`, `tbody`, `tfoot` · `scope` (**Exemplele 5–6**) |
| 75–90 | Aliniere și culori (**Exemplul 7**) |
| 90–115 | Orarul săptămânii · tabelul cu totalul (**Exemplele 8–10**) |
| 115–120 | Recap și temă |

---

## 1. Recapitulare rapidă

- `<table>` conține rânduri `<tr>`, iar acestea conțin `<th>` și `<td>`.  
- `<caption>` este titlul tabelului și se scrie imediat după `<table>`.  
- Liniile apar prin regula din `<head>`.  
- Toate rândurile aveau același număr de celule. Azi vedem cum se poate schimba.

**Încearcă tu (4 min)**  
- [ ] Creează folderul `Prenume_Nume_W2_L2` și fișierul `index.html` cu scheletul complet  
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

---

## 2. `colspan`: celule unite pe orizontală

`colspan` înseamnă „întinde celula pe mai multe coloane”.

### Exemplul 1 — „Pauză” pe toată lățimea

```html
<table>
  <tr>
    <th>Ora</th>
    <th>Luni</th>
    <th>Marți</th>
  </tr>
  <tr>
    <td>8:00</td>
    <td>Matematică</td>
    <td>Română</td>
  </tr>
  <tr>
    <td>9:00</td>
    <td colspan="2">Pauză mare</td>
  </tr>
</table>
```

Tabelul are 3 coloane. În ultimul rând sunt două celule, dar a doua are `colspan="2"` și ocupă **două coloane**. Împreună: 1 + 2 = 3 coloane, deci rândul este complet.

> **Regula de aur:** în fiecare rând, **suma** coloanelor ocupate de celule trebuie să fie **egală** cu numărul de coloane al tabelului. Celula cu `colspan="2"` se numără ca 2.

### Exemplul 2 — Un antet unit

```html
<table>
  <tr>
    <th rowspan="2">Jucător</th>
    <th colspan="2">Puncte</th>
  </tr>
  <tr>
    <th>Runda 1</th>
    <th>Runda 2</th>
  </tr>
  <tr>
    <td>Ana</td>
    <td>8</td>
    <td>9</td>
  </tr>
  <tr>
    <td>Mihai</td>
    <td>7</td>
    <td>10</td>
  </tr>
</table>
```

Antetul „Puncte” se întinde pe două coloane și are sub el „Runda 1” și „Runda 2”. „Jucător” se întinde pe două rânduri (vezi secțiunea următoare).

**Gata când:**  
- [ ] Ai făcut un tabel cu o celulă `colspan="2"`  
- [ ] Ai verificat că suma coloanelor este corectă în fiecare rând  
- [ ] Poți explica ce înseamnă `colspan="3"`  

---

## 3. `rowspan`: celule unite pe verticală

`rowspan` înseamnă „întinde celula pe mai multe rânduri”.

### Exemplul 3 — O oră de două ore

```html
<table>
  <tr>
    <th>Ora</th>
    <th>Materia</th>
  </tr>
  <tr>
    <td>8:00</td>
    <td rowspan="2">Matematică (2 ore)</td>
  </tr>
  <tr>
    <td>9:00</td>
  </tr>
  <tr>
    <td>10:00</td>
    <td>Desen</td>
  </tr>
</table>
```

Celula „Matematică” are `rowspan="2"`: ocupă rândul ei **și** rândul următor. De aceea, în al doilea rând **nu mai scrii** o celulă pentru coloana a doua, pentru că locul este deja ocupat.

### Exemplul 4 — Numărăm celulele corect

La `rowspan`, rândul de sub celula unită are cu **o celulă mai puțin**. Un tabel cu 3 coloane:

```html
<table>
  <tr>
    <td rowspan="2">A</td>
    <td>B</td>
    <td>C</td>
  </tr>
  <tr>
    <td>D</td>
    <td>E</td>
  </tr>
</table>
```

Primul rând are 3 celule (A, B, C). În al doilea, A ocupă încă prima coloană, deci mai scrii doar D și E. Total: tot 3 coloane în fiecare rând.

**Încearcă tu (6 min)**  
- [ ] Fă un tabel cu o celulă `rowspan="2"`  
- [ ] Verifică în Live Server că tabelul arată corect  
- [ ] Desenează pe foaie un tabel cu 3 coloane și 3 rânduri, în care o celulă ocupă 2 rânduri, și scrie câte celule are fiecare rând în cod  

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
  <caption>Banii mei de buzunar</caption>
  <thead>
    <tr>
      <th>Săptămâna</th>
      <th>Primit</th>
      <th>Cheltuit</th>
      <th>Rămas</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>10</td>
      <td>4</td>
      <td>6</td>
    </tr>
    <tr>
      <td>2</td>
      <td>10</td>
      <td>7</td>
      <td>3</td>
    </tr>
    <tr>
      <td>3</td>
      <td>15</td>
      <td>9</td>
      <td>6</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Total</th>
      <td>35</td>
      <td>20</td>
      <td>15</td>
    </tr>
  </tfoot>
</table>
```

Verifică totalurile: 10 + 10 + 15 = 35; 4 + 7 + 9 = 20; 6 + 3 + 6 = 15. Calculatorul nu face adunarea singur: o faci tu (în Modulul 4 vei învăța cum o face JavaScript).

Aspectul nu se schimbă mult, dar codul este **mai clar**, iar telefonul sau cititorul de ecran înțelege care este antetul.

### Exemplul 6 — `scope`: antet pentru rând sau pentru coloană

Atributul `scope` spune ce acoperă o celulă `<th>`:

```html
<table>
  <tr>
    <th scope="col">Animal</th>
    <th scope="col">Picioare</th>
  </tr>
  <tr>
    <th scope="row">Pisică</th>
    <td>4</td>
  </tr>
  <tr>
    <th scope="row">Pasăre</th>
    <td>2</td>
  </tr>
</table>
```

- `scope="col"` înseamnă „acesta este antetul coloanei de mai jos”;  
- `scope="row"` înseamnă „acesta este antetul rândului din dreapta”.

Un copil care folosește un cititor de ecran aude „Pisică, Picioare, 4”, nu doar „4”.

**Gata când:**  
- [ ] Ai făcut un tabel cu `thead`, `tbody` și `tfoot`  
- [ ] Ai verificat că totalul din `tfoot` este calculat corect  
- [ ] Ai folosit `scope="col"` și `scope="row"` într-un tabel  

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

---

## 6. Orarul săptămânii

### Exemplul 8 — Orar cu `colspan` și `rowspan`

```html
<table>
  <caption>Orarul meu</caption>
  <thead>
    <tr>
      <th scope="col">Ora</th>
      <th scope="col">Luni</th>
      <th scope="col">Marți</th>
      <th scope="col">Miercuri</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>8:00</td>
      <td rowspan="2">Matematică (2 ore)</td>
      <td>Română</td>
      <td>Științe</td>
    </tr>
    <tr>
      <td>9:00</td>
      <td>Engleză</td>
      <td>Științe</td>
    </tr>
    <tr>
      <td>10:00</td>
      <td colspan="3">Pauză mare</td>
    </tr>
    <tr>
      <td>10:30</td>
      <td>Muzică</td>
      <td>Desen</td>
      <td>Sport</td>
    </tr>
  </tbody>
</table>
```

Verifică rândurile: primul rând are 4 celule (Ora, Matematică, Română, Științe); al doilea are 3 (Ora, Engleză, Științe), pentru că Matematică ocupă și acest rând; al treilea are 1 + 3 = 4; al patrulea are 4. Totul este în regulă.

### Exemplul 9 — Greșeli la numărat

```text
<table>
  <tr>
    <th>A</th>
    <th>B</th>
    <th>C</th>
  </tr>
  <tr>
    <td colspan="2">X</td>
    <td>Y</td>
    <td>Z</td>
  </tr>
</table>
```

Al doilea rând ocupă 2 + 1 + 1 = 4 coloane, deși tabelul are 3. Corect este să scoți celula `Z` sau să adaugi o coloană în antet (un `<th>` în plus). Alege varianta care are sens și numără din nou.

### Exemplul 10 — Cum verifici un tabel

Pentru fiecare rând, scrie pe foaie: **câte coloane ocupă celulele lui**. Cu `rowspan`, adaugă și celulele ocupate de rândul de deasupra. Dacă toate rândurile dau același număr, tabelul este corect. Poți apăsa și **F12** → **Elements** și plimbi mouse-ul peste tabel: celulele sunt marcate colorat.

**Încearcă tu (10 min)**  
- [ ] Fă orarul tău pe 3 zile, cu cel puțin o celulă `rowspan` și una `colspan`  
- [ ] Numără pe foaie coloanele fiecărui rând  
- [ ] Deschide DevTools și verifică structura în fila Elements  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Orarul săptămânii” (obligatoriu)
Pagina `index.html` cu un tabel de orar pe **cel puțin 3 zile și 5 ore**, cu:
- `<caption>`, `<thead>`, `<tbody>`;  
- cel puțin o celulă `rowspan` (o materie de două ore);  
- cel puțin o celulă `colspan` (pauza);  
- antetul colorat cu `<style>`.

### Exercițiul B — Tabel cu total
Fă un al doilea tabel cu `thead`, `tbody` și `tfoot`: de exemplu „Cărțile citite” (luna, număr de cărți) cu total la final. Calculează corect totalul.

### Exercițiul C — Câte celule?
Un tabel are 4 coloane. Un rând are o celulă cu `colspan="2"`. Câte celule mai scrii în acel rând?

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
<table>
  <tr>
    <th>Animal</th>
    <th>Hrană
  </tr>
  <tr>
    <td rowspan=2>Pisică</td>
    <td>Pește</td>
  </tr>
  <tr>
    <td>Lapte</td>
    <td>Carne</td>
  </tr>
</table>
```

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: la ce folosesc `colspan` și `rowspan`? De ce spunem că regula de aur este să numeri coloanele în fiecare rând?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W2_L2` conține `index.html` cu orarul și tabelul cu total  
- [ ] Orarul are `colspan`, `rowspan`, `thead`, `tbody` și antet colorat  
- [ ] Tabelul cu total are totalul calculat corect  
- [ ] Codul este indentat și are comentarii  
- [ ] Ai răspuns la exercițiile C–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Adaugă orarului zilele Joi și Vineri  
- [ ] Fă un tabel de scoruri pentru un turneu cu 4 jucători și 3 runde, cu total  
- [ ] Pune `style="text-align: right;"` pe toate celulele cu numere  
- [ ] Fă un tabel cu antet unit pe două niveluri, ca în Exemplul 2, pentru un alt subiect  

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
Fă un **orar de weekend** (sâmbătă și duminică, ora, activitatea) cu o activitate de 2 ore (`rowspan`) și o pauză (`colspan`). Salvează în `Prenume_Nume_W2_L2`.

## Ce urmează — Lecția 3
Începem **formularele**: casete în care scrie vizitatorul, parole, butoane și etichete.

---

## Răspunsuri pentru profesor
- **Exemplul 9:** al doilea rând ocupă 4 coloane la un tabel de 3. Se repară scoțând o celulă (de exemplu `Z`) sau adăugând o coloană în antet.  
- **Exercițiul C:** 2 celule. Celula cu `colspan="2"` ocupă 2 coloane, iar celelalte 2 coloane se acoperă cu 2 celule obișnuite: 2 + 1 + 1 = 4.  
- **Exercițiul D:** (1) lipsește `</th>` după „Hrană”; (2) lipsesc ghilimelele la `rowspan="2"`; (3) ultimul rând are o celulă în plus: prima coloană este deja ocupată de „Pisică”, deci rămâne loc doar pentru una dintre `Lapte` și `Carne`. Acceptați orice soluție care face toate rândurile la fel de late.  
- **Exercițiul E:** `colspan` unește celule pe orizontală, `rowspan` pe verticală; numărăm ca să nu iasă tabelul strâmb.
