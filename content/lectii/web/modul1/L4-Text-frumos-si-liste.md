# LECȚIA 4 — Rețeta mea
### Text îngroșat, înclinat și liste
**Modulul 1 · HTML I: Prima mea pagină · 2 ore**  
**Code Maker Club · HTML Starter**

> Azi înveți să faci textul **îngroșat**, **înclinat** sau **evidențiat** și să scrii **liste** cu buline și cu numere, ca într-o rețetă sau într-un top 5!  
> Proiect: **„Rețeta mea”** (sau **„Topul meu”**) · folder: `Prenume_Nume_W1_L4` (ex. `Ana_Pop_W1_L4`)

---

## Ce facem azi
La final ai o **rețetă** (sau un **top**) cu titlu, ingrediente într-o listă cu buline, pașii într-o listă numerotată, cuvinte importante îngroșate și o listă în altă listă. Știi să faci textul îngroșat, înclinat sau evidențiat și să scrii liste cu buline și cu numere. Un text în care totul arată la fel e greu de citit: cu **îngroșat** spui „asta e important”, iar listele pun ideile în ordine, ca la ingrediente, pași, reguli sau topuri.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–40 | `strong`, `em` și tag-uri în tag-uri (**Exemplele 1–3**) |
| 40–55 | `mark` și `small` (**Exemplul 4**) |
| 55–85 | Liste cu buline și cu numere (**Exemplele 5–6**) |
| 85–100 | Liste în liste (**Exemplul 7**) |
| 100–115 | Mini-proiect: rețeta mea (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `<strong>` | Text îngroșat (important) | `<strong>2</strong> ouă` |
| `<em>` | Text înclinat | `<em>iubesc</em>` |
| `<mark>` | Text evidențiat, cu fundal galben | `<mark>sâmbătă</mark>` |
| `<small>` | Text mai mic, pentru note | `<small>Notă mică</small>` |
| `<ul>` și `<li>` | Listă cu buline; `<li>` este un rând | când ordinea nu contează |
| `<ol>` | Listă cu numere | când ordinea contează |
| `<ul>` în `<li>` | Listă în listă | între `<li>` și `</li>` |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- titlurile merg de la `h1` la `h6`, în ordine, ca un cuprins;
- `<p>` face paragrafe, `<br>` rupe rândul, `<hr>` trasează o linie;
- ultimul tag deschis se închide primul;
- `&lt;` și `&gt;` scriu semnele `<` și `>` în text.

**Încearcă tu (3 min)**  
- [ ] Creează folderul `Prenume_Nume_W1_L4` și fișierul `index.html` cu scheletul scris de tine  
- [ ] Pune în `<body>` un `<h1>` și un paragraf despre mâncarea ta preferată  

> De aici înainte, exemplele arată doar ce scrii **în interiorul `<body>`**.

---

## 2. Text îngroșat și înclinat

### Exemplul 1 — Text îngroșat: `<strong>`

```html
<p>Pisica mea se numește <strong>Mițu</strong>.</p>
<p><strong>Atenție:</strong> nu hrăni pisicile cu ciocolată!</p>
```

`<strong>` face textul **îngroșat** și spune: „aceasta e o parte importantă”. Se scrie **în interiorul** unui paragraf, în jurul cuvintelor pe care vrei să le îngroși.

### Exemplul 2 — Text înclinat: `<em>`

```html
<p>Eu <em>chiar</em> iubesc pisicile.</p>
<p>Filmul meu preferat este <em>Regele Leu</em>.</p>
```

`<em>` face textul **înclinat** („em” vine de la „emphasis”, adică „accent”). Îl folosim când apăsăm cu vocea pe un cuvânt sau pentru titlul unui film sau al unei cărți.

> Mai există `<b>` și `<i>`: arată la fel ca `<strong>` și `<em>`, dar nu spun că textul e important. La noi, ca să fie clar, folosim **`strong`** și **`em`**.

### Exemplul 3 — Amândouă, unul în altul

```html
<p>Mâine este <strong><em>marele</em></strong> concurs!</p>
```

Aici `<em>` e în interiorul lui `<strong>`, deci cuvântul e **și îngroșat, și înclinat**. Regula e aceeași: **ultimul tag deschis se închide primul**: `</em>` înaintea lui `</strong>`.

**Gata când:**  
- [ ] Ai scris un cuvânt îngroșat, unul înclinat și unul amândouă  
- [ ] Ai verificat ordinea închiderilor la tag-urile puse unul în altul  

---

## 3. Alte feluri de text

### Exemplul 4 — Evidențiat și mărunt: `<mark>`, `<small>`

```html
<p>Vizita are loc <mark>sâmbătă la ora 10</mark>.</p>
<p><small>Vă rugăm să veniți cu 10 minute mai devreme.</small></p>
```

- `<mark>` pune un **fundal galben**, ca atunci când treci cu textmarkerul.  
- `<small>` face textul **mai mic**, pentru note și mențiuni mărunte.

**Încearcă tu (3 min)**  
- [ ] Scrie un paragraf cu `<mark>` pe data de azi și o notă mică cu `<small>`  

---

## 4. Liste

### Exemplul 5 — Listă cu buline: `<ul>`

```html
<h2>Ce iau la picnic</h2>
<ul>
  <li>Sandvișuri</li>
  <li>Mere</li>
  <li>Suc</li>
  <li>Pătură</li>
</ul>
```

- `<ul>` (de la „unordered list”, adică „listă fără ordine”) este lista întreagă, cu **buline**.  
- `<li>` (de la „list item”, adică „element din listă”) este **un rând** din listă.  
- Fiecare `<li>` se scrie **în interiorul** lui `<ul>`.  

Când ordinea nu contează (ce iei la picnic, ce animale îți plac), folosim `<ul>`.

### Exemplul 6 — Listă cu numere: `<ol>`

```html
<h2>Cum fac o limonadă</h2>
<ol>
  <li>Storc două lămâi.</li>
  <li>Adaug apă și zahăr.</li>
  <li>Amestec bine.</li>
  <li>Pun cuburi de gheață.</li>
</ol>
```

`<ol>` (de la „ordered list”, adică „listă ordonată”) numerotează singură: 1, 2, 3, 4. Când ordinea contează (pași, reguli, clasamente), folosim `<ol>`.

**Încearcă tu (4 min)**  
- [ ] Scrie o listă cu buline despre ce iei într-o excursie  
- [ ] Scrie o listă numerotată cu pașii unei rețete simple sau cu un top 5  

---

## 5. Liste în liste

### Exemplul 7 — Lista din listă

Uneori un element al listei are la rândul lui o listă mică. O punem **în interiorul** lui `<li>`:

```html
<h2>Lista de cumpărături</h2>
<ul>
  <li>Fructe
    <ul>
      <li>Mere</li>
      <li>Banane</li>
    </ul>
  </li>
  <li>Legume
    <ul>
      <li>Roșii</li>
      <li>Castraveți</li>
    </ul>
  </li>
  <li>Lapte</li>
</ul>
```

Observă: lista mică stă **între** `<li>` și `</li>` al elementului din care face parte. Bulinele listei din interior arată altfel, ca să vezi că sunt de „al doilea nivel”.

> Indentează cu atenție. Așa vezi imediat ce listă stă în ce element.

**Gata când:**  
- [ ] Ai o listă cu două elemente care au fiecare o listă mică  
- [ ] Fiecare `<li>` și fiecare `<ul>` are și închidere  

---

## 6. Mini-proiect

### Exemplul 8 — „Rețeta mea”

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Clătite cu dulceață</title>
</head>
<body>
  <h1>Clătite cu dulceață</h1>
  <p><em>O rețetă simplă, făcută împreună cu un adult.</em></p>

  <h2>Ce ne trebuie</h2>
  <ul>
    <li><strong>2</strong> ouă</li>
    <li><strong>250 ml</strong> lapte</li>
    <li><strong>100 g</strong> făină</li>
    <li>dulceață, după gust</li>
  </ul>

  <h2>Cum le facem</h2>
  <ol>
    <li>Amestecăm ouăle cu laptele.</li>
    <li>Adăugăm făina și mixăm până se leagă.</li>
    <li>Un adult încălzește tigaia și coace clătitele.</li>
    <li>Întindem dulceață și rulăm.</li>
  </ol>

  <p><mark>Poftă bună!</mark></p>
</body>
</html>
```

Rețeta ta poate fi despre orice: un desert, o limonadă, un sandviș sau o rețetă pentru o poțiune magică. Sau poate fi un **top** (jocuri, animale, cărți).

> La orice rețetă cu foc sau cuțit cere ajutorul unui adult.

---

## De făcut azi — „Rețeta mea”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | O pagină cu text îngroșat și înclinat, o listă cu buline și o listă cu numere |
| **Complet** | Minim + o listă în altă listă, un cuvânt evidențiat cu `<mark>` și o notă mică cu `<small>` |

### Pasul 1 — Minim
Pe scheletul complet, scrie un `<h1>` cu numele rețetei (sau al topului), o listă cu buline `<ul>` și o listă numerotată `<ol>`.

- [ ] Folderul `Prenume_Nume_W1_L4` are `index.html` cu scheletul complet  
- [ ] Lista cu buline are cel puțin trei elemente `<li>`  
- [ ] Lista numerotată are cel puțin trei elemente `<li>`  

### Pasul 2 — Complet
Îmbunătățești rețeta (sau topul):

- [ ] Ai cel puțin **trei** cuvinte îngroșate și **unul** înclinat  
- [ ] Ai un cuvânt evidențiat cu `<mark>` și o notă mică cu `<small>`  
- [ ] Ai o listă în altă listă (de exemplu „Pentru decor”)  
- [ ] Fiecare `<li>` și fiecare listă au și închidere, iar tag-urile sunt închise în ordine  

---

## Bonus ★★★ — Provocare: Topul cu sub-liste
*Doar dacă ai terminat Complet.*

Faci un top mai bogat, cu liste în liste.

- [ ] Adaugă la rețeta ta o listă în listă (de exemplu: „Pentru decor” cu două sub-elemente)  
- [ ] Scrie o formulă cu `<sup>`, de exemplu viteza în m/s sau aria într-un cm² (vezi Acasă 1)  
- [ ] Fă un top 5 cu `<ol reversed>` și un cuvânt îngroșat în fiecare element (vezi Acasă 2)  
- [ ] Caută listele paginii tale în DevTools: **F12**, fila **Elements**  

---

## Greșeli frecvente
1. **`<li>` scris în afara unei liste** — fiecare `<li>` trebuie să fie în `<ul>` sau `<ol>`.  
2. **`<ul>` închisă cu `</ol>`** — lista se închide cu același tip cu care s-a deschis.  
3. **Ai uitat `</li>`** — închide fiecare element al listei.  
4. **Tag-uri încrucișate** — `<strong><em>…</strong></em>` în loc de `<strong><em>…</em></strong>`.  
5. **Ai pus un `<p>` direct în `<ul>`** — în interiorul unei liste stau doar elemente `<li>`.  
6. **Ai îngroșat prea mult** — dacă totul e îngroșat, nimic nu mai iese în evidență.  
7. **Ai scris numerele singur** (`<li>1. Mere</li>`) — `<ol>` numerotează automat.  
8. **Lista din listă e pusă lângă `<li>`, nu în el** — lista mică stă între `<li>` și `</li>`.  

---

## Recapitulare pe scurt
1. `<strong>` = îngroșat și important; `<em>` = înclinat.  
2. `<mark>` evidențiază, `<small>` micșorează.  
3. `<ul>` = listă cu buline; `<ol>` = listă cu numere.  
4. `<li>` este un rând din listă și stă mereu în interiorul unei liste.  
5. O listă poate sta în interiorul unui `<li>`.  

## Quiz scurt
- Ce face `<strong>`? Dar `<em>`?  
- Când folosești `<ol>` în loc de `<ul>`?  
- Unde stă tagul `<li>`?  
- Ce face `<mark>`?  
- Unde pui o listă mică, în interiorul altei liste?

## Temă
1. Fă o pagină `index.html` cu **regulile clasei tale** (o listă numerotată cu 5 reguli, cu un cuvânt important îngroșat la fiecare) și cu **lucrurile pe care le ai în ghiozdan** (o listă cu buline). Pune pagina în folderul `Prenume_Nume_W1_L4`.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Exponenți și indici: `<sup>`, `<sub>`.**

```html
<p>Aria unui pătrat cu latura 3 este 3 &times; 3 = 9 m<sup>2</sup>.</p>
<p>Apa se scrie H<sub>2</sub>O.</p>
```

- `<sup>` (de la „superscript”) ridică textul **sus**: m².  
- `<sub>` (de la „subscript”) îl coboară **jos**: H₂O.  

`&times;` este semnul înmulțirii (×), scris cu un cod special, ca `&lt;` din exercițiul de acasă la Lecția 3.

**Acasă 2 — Topul meu, cu numărătoare inversă.**

```html
<h2>Top 5 desene animate</h2>
<ol reversed>
  <li>Prietenii din pădure</li>
  <li>Aventurile lui Leo</li>
  <li>Pisicile din oraș</li>
  <li>Echipa de salvare</li>
  <li>Dragonul Foc</li>
</ol>
```

Cu atributul `reversed` lista se numără **înapoi**: 5, 4, 3, 2, 1. Mai poți începe de la alt număr cu `start`, de exemplu `<ol start="3">` începe lista de la 3.

4. **Încă patru exerciții (B–E):**

**B — `ul` sau `ol`?** Pentru fiecare, alege `<ul>` sau `<ol>`: (1) pașii pentru a lega șireturile; (2) animalele pe care le ai acasă; (3) clasamentul jocurilor tale preferate; (4) lucrurile din ghiozdan.

**C — Care e rezultatul?** Ce apare în pagină (îngroșat, înclinat, buline, numere)?

```text
<p>Eu <em>iubesc</em> <strong>pizza</strong>.</p>
<ol start="3">
  <li>Alb</li>
  <li>Negru</li>
</ol>
```

**D — Găsește greșelile.** Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
<ul>
  <li>Mere</li>
  <li>Pere
</ul>
<p>Eu sunt <strong><em>Ana</strong></em></p>
<li>Nuci</li>
```

**E — Explică cu cuvintele tale.** Pe foaie: când folosim `<ul>` și când folosim `<ol>`? Dă câte un exemplu.

## Ce urmează — Lecția 5
Învățăm să facem **linkuri**: cuvinte pe care apeși și te duc pe alte pagini, pe site-uri din internet sau chiar într-un loc anume din aceeași pagină.

---

## Răspunsuri
- **Quiz scurt:** (1) `<strong>` îngroașă textul (important), `<em>` îl înclină; (2) când ordinea contează (pași, reguli, clasamente); (3) în interiorul unei liste, `<ul>` sau `<ol>` (fiecare `<li>` este un rând din listă); (4) evidențiază textul, cu fundal galben; (5) în interiorul unui `<li>`, între `<li>` și `</li>`.  
- **Dacă ritmul clasei este lent:** Exemplul 4 (`mark` și `small`) este opțional; rămâneți la `strong`, `em`, listele cu buline și listele numerotate.  
- **Tema, exercițiul B:** (1) `<ol>`; (2) `<ul>`; (3) `<ol>`; (4) `<ul>`.  
- **Tema, exercițiul C:** „iubesc” înclinat, „pizza” îngroșat; lista numerotată începe de la 3: „3. Alb”, „4. Negru”.  
- **Tema, exercițiul D:** (1) lipsește `</li>` după „Pere”; (2) tag-uri încrucișate, corect: `</em></strong>`; (3) `<li>` în afara unei liste, trebuie pus într-un `<ul>` sau `<ol>`.  
- **Tema, exercițiul E:** `<ul>` când ordinea nu contează (lucruri din ghiozdan); `<ol>` când ordinea contează (pași, clasament).
