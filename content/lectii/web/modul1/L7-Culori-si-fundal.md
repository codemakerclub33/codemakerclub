# LECȚIA 7 — Pagina mea colorată
### Culori și fundal
**Modulul 1 · HTML I: Prima mea pagină · 2 ore**  
**Code Maker Club · HTML Starter**

> Paginile tale sunt acum pline de text, liste, linkuri și imagini, dar toate sunt albe și negre. Azi le dai **culoare**! E primul pas spre limbajul **CSS**, pe care îl vei învăța pe larg în Modulul 3.  
> Proiect: **„Pagina mea colorată”** · folder: `Prenume_Nume_W1_L7` (ex. `Ana_Pop_W1_L7`)

---

## Ce facem azi
La final ai o **pagină colorată** despre ceva ce îți place, cu fundal, titluri colorate, cuvinte colorate cu `<span>`, o listă cu elemente colorate diferit și o culoare scrisă cu cod `#`. Este primul pas spre limbajul **CSS**, pe care îl vei învăța pe larg în Modulul 3. Culorile fac o pagină plăcută, dar una aleasă prost (galben pe alb) face textul imposibil de citit, așa că azi înveți atât cum le schimbi, cât și cum le alegi.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–40 | Primul stil · culori cu nume (**Exemplele 1–2**) |
| 40–65 | Culoarea fundalului · mai multe reguli (**Exemplele 3–4**) |
| 65–80 | Colorăm un cuvânt (**Exemplul 5**) |
| 80–100 | Culori cu cod `#` · text care se citește bine (**Exemplele 6–7**) |
| 100–115 | Mini-proiect: pagina mea colorată (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `style="color: red;"` | Schimbă culoarea textului | `<h1 style="color: tomato;">` |
| `background-color` | Schimbă culoarea fundalului | `<body style="background-color: lightyellow;">` |
| `;` între reguli | Separă mai multe reguli în același `style` | `color: white; background-color: navy;` |
| `<span>` | Colorează doar un cuvânt | `<span style="color: green;">verde</span>` |
| `#ff6347` | Culoare scrisă cu cod, din 6 caractere | `color: #ff6347;` |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- imaginile se pun cu `<img src="..." alt="...">`, iar `img` nu are tag de închidere;
- `alt` spune în cuvinte ce se vede în imagine;
- pozele stau într-un folder `imagini`;
- `<figure>` și `<figcaption>` pun o legendă sub imagine.

**Încearcă tu (3 min)**  
- [ ] Creează folderul `Prenume_Nume_W1_L7` și fișierul `index.html` cu scheletul scris de tine  
- [ ] Pune în `<body>` un `<h1>`, două paragrafe și o listă cu buline cu trei lucruri  

> De aici înainte, exemplele arată doar ce scrii **în interiorul `<body>`**, dacă nu spunem altfel.

---

## 2. Primul stil

### Exemplul 1 — Textul roșu

```html
<p style="color: red;">Acest text este roșu.</p>
```

Ai folosit un atribut nou: `style` („stil”). În el scrii **regula de stil**:

```text
nume-proprietate: valoare;
```

| Parte | Ce înseamnă | Aici |
|-------|-------------|------|
| `color` | **proprietatea**: ce schimbăm | culoarea textului |
| `:` | separă numele de valoare | |
| `red` | **valoarea**: cum schimbăm | roșu |
| `;` | încheie regula | |

Regula se scrie **între ghilimele**, în tagul de deschidere: `style="color: red;"`.

> Atenție la semne: între nume și valoare se pune **două puncte** `:`, nu `=`. La final se pune **punct și virgulă** `;`.

### Exemplul 2 — Culori cu nume

Calculatorul cunoaște sute de culori după nume, în engleză:

```html
<h1 style="color: tomato;">Roșu-portocaliu</h1>
<h2 style="color: gold;">Auriu</h2>
<h2 style="color: limegreen;">Verde aprins</h2>
<h2 style="color: skyblue;">Albastru deschis</h2>
<h2 style="color: purple;">Mov</h2>
<h2 style="color: hotpink;">Roz aprins</h2>
```

Câteva nume frecvente:

| Nume | Culoare | Nume | Culoare |
|------|---------|------|---------|
| `red` | roșu | `navy` | albastru închis |
| `orange` | portocaliu | `skyblue` | albastru deschis |
| `gold` | auriu | `purple` | mov |
| `green` | verde | `pink` | roz |
| `limegreen` | verde aprins | `gray` | gri |
| `tomato` | roșu-portocaliu | `black`, `white` | negru, alb |

> Dacă scrii greșit numele culorii, culoarea pur și simplu **nu se schimbă**. Verifică cum e scris.

**Gata când:**  
- [ ] Ai colorat un titlu și un paragraf cu culori alese de tine  
- [ ] Ai schimbat o culoare și ai văzut cum se schimbă pagina după salvare  

---

## 3. Fundalul și mai multe reguli

### Exemplul 3 — Culoarea fundalului: `background-color`

```html
<body style="background-color: lightyellow;">
  <h1>Pagina mea</h1>
  <p>Fundalul acesta este galben deschis.</p>
</body>
```

`background-color` („culoarea fundalului”) colorează **spatele** elementului. Pus pe `<body>`, colorează **toată pagina**. Pune atributul în tagul `<body>` din schelet, nu într-un `<body>` nou!

Culori bune pentru fundal, care nu obosesc ochii: `lightyellow`, `lightblue`, `lightgreen`, `lavender`, `mistyrose`, `white`.

### Exemplul 4 — Mai multe reguli în același `style`

```html
<h1 style="color: white; background-color: navy;">Titlu alb pe fundal albastru</h1>
```

Scrii regulile **una după alta**, fiecare terminată cu `;`. Aici titlul are text alb și fundal albastru închis.

> Regulă: **între reguli pui `;`**. Dacă îl uiți, a doua regulă nu mai funcționează. Pune `;` și după ultima regulă, ca obicei.

**Încearcă tu (4 min)**  
- [ ] Pune un fundal deschis pe `<body>`  
- [ ] Fă un titlu cu text alb pe fundal închis, cu două reguli în același `style`  

---

## 4. Un cuvânt colorat

### Exemplul 5 — Colorăm doar un cuvânt: `<span>`

Dacă pui `style` pe `<p>`, se colorează tot paragraful. Cum colorezi doar **un cuvânt**? Cu `<span>` („întindere”), un tag care **nu face nimic singur**, dar îl poți folosi ca un marker:

```html
<p>Cerul este <span style="color: skyblue;">albastru</span>, iar iarba este <span style="color: green;">verde</span>.</p>
```

Doar cuvintele din interiorul `<span>` se colorează.

**Încearcă tu (4 min)**  
- [ ] Colorează două cuvinte dintr-un paragraf cu culori diferite, cu `<span>`  

---

## 5. Culori cu cod și citibilitate

### Exemplul 6 — Culori cu cod: `#`

Pe lângă nume, o culoare se poate scrie cu un **cod** care începe cu `#` și are **6 caractere** (cifre și litere de la `a` la `f`):

```html
<p style="color: #ff6347;">Aceasta este culoarea tomato.</p>
<p style="color: #ffd700;">Aceasta este culoarea gold.</p>
```

Codul este format din trei perechi: cât **roșu**, cât **verde** și cât **albastru** amestecă calculatorul.

| Cod | Culoare | Cum e făcută |
|-----|---------|--------------|
| `#ff0000` | roșu | tot roșul, fără verde și fără albastru |
| `#00ff00` | verde aprins | tot verdele |
| `#0000ff` | albastru | tot albastrul |
| `#ffffff` | alb | toate, la maximum |
| `#000000` | negru | niciuna |

Nu trebuie să știi codurile pe de rost. Dacă VS Code arată un **pătrățel colorat** lângă cod, apasă pe el și alegi culoarea dintr-o paletă. Poți căuta și în browser „color picker”, ca să alegi o culoare și să copiezi codul culorii.

### Exemplul 7 — Culori care se citesc bine

```html
<p style="color: yellow; background-color: white;">Galben pe alb: foarte greu de citit!</p>
<p style="color: black; background-color: yellow;">Negru pe galben: se citește bine.</p>
<p style="color: white; background-color: navy;">Alb pe albastru închis: se citește bine.</p>
```

Textul și fundalul trebuie să fie **foarte diferite** ca strălucire: una **închisă** și una **deschisă**. Verifică mereu pagina de la o distanță de brațe: dacă nu poți citi, schimbă culorile.

**Încearcă tu (4 min)**  
- [ ] Alege o culoare cu cod `#` (cu paleta din VS Code sau din internet) și folosește culoarea la un titlu  
- [ ] Testează o pereche de culori care se citește prost și una care se citește bine  

---

## 6. Mini-proiect

### Exemplul 8 — „Pagina mea colorată”

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pagina mea colorată</title>
</head>
<body style="background-color: lightyellow; color: #333333;">
  <h1 style="color: tomato;">Grădina mea de vară</h1>
  <p><em>O pagină plină de culori</em></p>

  <h2 style="color: green;">Ce cresc în grădină</h2>
  <ul>
    <li style="color: crimson;">Roșii</li>
    <li style="color: darkorange;">Morcovi</li>
    <li style="color: purple;">Vinete</li>
  </ul>

  <h2 style="color: navy;">Cum arată</h2>
  <p>Cerul este <span style="color: steelblue;">albastru</span>, soarele este <span style="color: darkgoldenrod;">auriu</span> și frunzele sunt <span style="color: forestgreen;">verzi</span>.</p>

  <hr>
  <p style="color: gray;">Pagină făcută de Ana.</p>
</body>
</html>
```

Fă pagina despre **ceva ce îți place**. Alege 3–4 culori care merg bine împreună și folosește culorile în toată pagina.

**Gata când:**  
- [ ] Pagina are fundal colorat, titluri colorate și cuvinte colorate cu `<span>`  
- [ ] Toate textele se citesc ușor  

---

## De făcut azi — „Pagina mea colorată”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | O pagină cu fundalul colorat, un titlu colorat și un paragraf cu un cuvânt colorat |
| **Complet** | Minim + o culoare scrisă cu cod `#`, o listă cu elemente colorate diferit și o verificare că tot textul se citește bine |

### Pasul 1 — Minim
Pe scheletul complet, pune un fundal colorat pe `<body>`, un `<h1>` colorat și un paragraf în care un cuvânt este colorat cu `<span>`.

- [ ] Folderul `Prenume_Nume_W1_L7` are `index.html` cu scheletul complet  
- [ ] Fundalul, titlul și cuvântul au culori alese de tine  
- [ ] Ai schimbat o culoare și ai văzut cum se schimbă pagina după salvare  

### Pasul 2 — Complet
Completezi pagina colorată:

- [ ] Ai cel puțin **două** titluri `<h2>` cu culori diferite  
- [ ] Ai un paragraf în care **două cuvinte** au culori diferite (cu `<span>`)  
- [ ] Ai **o listă** cu cel puțin trei elemente colorate diferit  
- [ ] Ai **o culoare** scrisă cu cod `#`  
- [ ] Toate textele se citesc ușor  

---

## Bonus ★★★ — Provocare: Curcubeul meu
*Doar dacă ai terminat Complet.*

Faci o pagină plină de culori, dar care se citește bine.

- [ ] Fă o pagină „curcubeu”: șapte titluri, fiecare într-o culoare a curcubeului  
- [ ] Încearcă `font-family: Arial;` pe un paragraf și vezi cum se schimbă literele  
- [ ] Pune o imagine pe pagina colorată și vezi cum arată cu fundalul ales  
- [ ] Deschide DevTools (**F12**), fila **Elements**, apasă pe un titlu colorat și caută regula `style` în panoul din dreapta  

---

## Greșeli frecvente
1. **Ai scris `color = red`** — între nume și valoare se pun două puncte: `color: red`.  
2. **Ai uitat `;` între reguli** — `color: red background-color: blue` nu merge.  
3. **Ai scris greșit numele culorii** — culoarea nu se schimbă.  
4. **Ai uitat ghilimelele sau ai deschis ghilimele și nu ai închis** — `style="color: red;` strică tot tagul.  
5. **Ai pus `<body>` de două ori** pentru fundal — pune `style` în `<body>`-ul din schelet.  
6. **Ai scris `24 px`** cu spațiu — scrie `24px`.  
7. **Ai folosit culori prea apropiate** (galben pe alb) — textul nu se mai citește.  
8. **Ai pus prea multe culori** — 3–4 culori care se potrivesc arată mai bine decât zece.  
9. **Ai crezut că `style` schimbă toată pagina** — `style` schimbă doar tagul în care e scris (și ce e în interiorul lui).  

---

## Recapitulare pe scurt
1. Atributul `style` schimbă aspectul unui tag: `style="proprietate: valoare;"`.  
2. `color` schimbă culoarea textului; `background-color` schimbă fundalul.  
3. Culorile se pot scrie cu nume (`tomato`) sau cu cod (`#ff6347`).  
4. Mai multe reguli se scriu una după alta, cu `;` după fiecare.  
5. `<span>` colorează doar un cuvânt.  
6. Textul și fundalul trebuie să fie foarte diferite, ca să se citească bine.

## Quiz scurt
- Cum scrii regula pentru text albastru?  
- Ce face `background-color`?  
- Ce tag folosești ca să colorezi doar un cuvânt?  
- Cum scrii o culoare cu cod?  
- De ce nu punem text galben pe fundal alb?

## Temă
1. Fă o pagină `index.html` despre **jocul sau sportul tău preferat**, colorată în **trei culori care se potrivesc** (de exemplu culorile echipei tale). Folosește fundal colorat, titluri colorate și cel puțin două cuvinte colorate cu `<span>`. Pune pagina în folderul `Prenume_Nume_W1_L7`.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Mărimea și poziția textului.**

```html
<h1 style="text-align: center;">Titlu la mijloc</h1>
<p style="font-size: 24px;">Text mai mare.</p>
<p style="font-size: 14px; color: gray;">Text mic și gri.</p>
```

- `text-align: center;` așază textul **la mijloc** (alte valori: `left`, `right`).  
- `font-size: 24px;` schimbă **mărimea** textului. `px` înseamnă pixeli, iar cifra mai mare înseamnă text mai mare.  

> Între număr și `px` nu se pune spațiu: `24px`, nu `24 px`.

**Acasă 2 — Culoarea merge „în jos”.**

```html
<body style="color: darkgreen; background-color: honeydew;">
  <h1>Grădina mea</h1>
  <p>Toate textele din pagină sunt verzi.</p>
  <p style="color: crimson;">Dar acest paragraf e roșu.</p>
</body>
```

O culoare pusă pe `<body>` se aplică și **textului din interior**, ca o moștenire (linkurile își păstrează culoarea lor). Un tag poate avea însă **propria culoare**, care o înlocuiește pe cea primită: al doilea paragraf rămâne roșu.

4. **Încă patru exerciții (B–E):**

**B — Ce culoare are?** Spune ce culoare au textul și fundalul:

```text
<p style="color: navy; background-color: lightyellow;">Salut</p>
<h1 style="color: white; background-color: black;">Bine ai venit</h1>
```

**C — Scrie regula.** Scrie atributul `style` pentru: (1) un text albastru; (2) un text negru pe fundal galben; (3) un text verde pe fundal alb.

**D — Găsește greșelile.** Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
<p style="color = blue;">Salut</p>
<p style="background-color: yellow color: black;">Bună</p>
<h1 style="color: red">Titlu</p>
```

**E — Explică cu cuvintele tale.** Pe foaie: de ce nu e bine să scrii text galben pe fundal alb? Dă un exemplu de pereche de culori care merge bine.

## Ce urmează — Lecția 8
Legăm **mai multe pagini** într-un mic site, cu un meniu de linkuri pe care îl pui în fiecare pagină, ca să te plimbi ușor între ele.

---

## Răspunsuri
- **Quiz scurt:** (1) `style="color: blue;"`; (2) colorează fundalul elementului (pe `<body>`, toată pagina); (3) `<span>`; (4) cu `#` și 6 caractere, de exemplu `#ff6347`; (5) pentru că cele două culori sunt prea apropiate ca strălucire și textul nu se mai citește.  
- **Dacă ritmul clasei este lent:** Exemplul 6 (culorile cu cod `#`) este opțional; rămâneți la culorile cu nume și la contrast.  
- **Tema, exercițiul B:** (1) text albastru închis pe fundal galben deschis; (2) text alb pe fundal negru.  
- **Tema, exercițiul C:** (1) `style="color: blue;"`; (2) `style="color: black; background-color: yellow;"`; (3) `style="color: green; background-color: white;"`.  
- **Tema, exercițiul D:** (1) `color = blue` trebuie `color: blue`; (2) lipsește `;` între `yellow` și `color`; (3) `<h1>` se închide cu `</h1>`, nu cu `</p>`.  
- **Tema, exercițiul E:** galbenul pe alb are contrast foarte mic; exemple bune: negru pe galben, alb pe albastru închis.
