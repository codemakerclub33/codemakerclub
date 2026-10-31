# LECȚIA 2 — Cartea mea de vizită
### Scheletul unei pagini
**Modulul 1 · HTML I: Prima mea pagină · 2 ore**  
**Code Maker Club · HTML Starter**

> Săptămâna trecută VS Code a scris scheletul paginii pentru tine. Azi afli **ce înseamnă fiecare bucată** și îl scrii **singur**, fără ajutor!  
> Proiect: **„Cartea mea de vizită”** · folder: `Prenume_Nume_W1_L2` (ex. `Ana_Pop_W1_L2`)

---

## Ce facem azi
La final ai scheletul unei pagini scris de tine, fără ajutorul lui `!` + Tab, și o **carte de vizită** în browser: un titlu mare cu numele tău, trei paragrafe despre tine, un comentariu și codul aranjat frumos. Știi la ce folosește fiecare parte a scheletului (`DOCTYPE`, `html`, `head`, `title`, `meta`, `body`) și cum se așază un tag în interiorul altuia. Fiecare pagină de pe internet, de la jocuri la magazine, începe cu același schelet, așa că, dacă îl înțelegi, vei ști mereu **unde** să pui fiecare lucru nou.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare din lecția 1 · pornim VS Code și Live Server |
| 15–40 | Scheletul scris de mână · `DOCTYPE` și `html` (**Exemplele 1–3**) |
| 40–65 | `head`, `title`, `meta` (**Exemplele 4–5**) |
| 65–90 | Tag-uri în tag-uri · indentare (**Exemplele 6–7**) |
| 90–115 | Mini-proiect: cartea de vizită (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `<!DOCTYPE html>` | Prima linie: pagină HTML modernă | fără tag de închidere |
| `<html lang="ro">` | Înfășoară toată pagina | se închide ultimul |
| `<head>` | Informații despre pagină, care nu se văd | `<title>`, `<meta>` |
| `<title>` | Numele paginii, din fila browserului | `<title>Pisica Mițu</title>` |
| `<meta charset="UTF-8">` | Diacriticele se văd corect | ă, â, î, ș, ț |
| `<body>` | Tot ce se vede în pagină | `<p>Salut!</p>` |
| **Shift + Alt + F** | Aranjează codul cu indentare | pe Mac **Shift + Option + F** |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- o pagină web este un fișier citit de **browser**;
- HTML este **scheletul** paginii;
- un tag are, de obicei, **deschidere** `<p>` și **închidere** `</p>`;
- salvezi cu **Ctrl + S** (pe Mac **Cmd + S**), iar **Live Server** reîncarcă pagina.

**Încearcă tu (3 min)**  
- [ ] Creează folderul `Prenume_Nume_W1_L2` și deschide folderul în VS Code  
- [ ] Fă fișierul `index.html` și scrie în el un paragraf `<p>`, apoi pornește Live Server  

---

## 2. Scheletul, bucată cu bucată

Imaginează pagina ta ca pe o **casă**:
- `html` este **casa întreagă**;
- `head` este **biroul din spatele casei**: acolo sunt informațiile despre casă, dar nu se văd din stradă;
- `body` este **casa pe care o vede lumea**: camerele, mobila, oamenii.

### Exemplul 1 — Scheletul scris de mână

Șterge tot din `index.html` și scrie scheletul **linie cu linie**, fără `!` + Tab. Nu te grăbi, citește fiecare linie pe măsură ce o scrii:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cartea mea de vizită</title>
</head>
<body>
  <p>Salut!</p>
</body>
</html>
```

Salvează și deschide pagina cu Live Server. Trebuie să vezi **Salut!** și, în fila browserului, **Cartea mea de vizită**.

> Linia cu `viewport` o scrii exact așa, ca pe o „formulă magică”. O vom înțelege în Modulul 3, când facem paginile să arate bine și pe telefon.

**Gata când:**  
- [ ] Ai scris scheletul singur, fără `!` + Tab  
- [ ] Pagina arată „Salut!”, iar în filă apare „Cartea mea de vizită”  

### Exemplul 2 — `<!DOCTYPE html>`

```html
<!DOCTYPE html>
```

Este **prima linie** din orice pagină. Îi spune browserului: „Aceasta este o pagină HTML modernă, citește pagina ca atare.”

Două lucruri speciale:
- începe cu `!` și nu e un tag obișnuit;
- **nu are tag de închidere** (nu există `</!DOCTYPE>`).

### Exemplul 3 — `<html>` și limba paginii

```html
<html lang="ro">
  ...
</html>
```

`<html>` **înfășoară** tot restul paginii: se deschide la început și se închide **ultimul**, la sfârșit.

`lang="ro"` înseamnă „pagina este în limba română”. Se numește **atribut**: o informație în plus, scrisă în tagul de deschidere, în forma `nume="valoare"`. Calculatoarele care citesc pagina cu voce tare sau browserele care traduc pagini se folosesc de el. Pentru engleză ar fi `lang="en"`.

**Încearcă tu (3 min)**  
- [ ] Schimbă `lang="ro"` în `lang="en"` și apoi pune din nou `ro`  
- [ ] Verifică ce tag se închide **ultimul** în pagina ta  

---

## 3. Informațiile din `head`

În `<head>` pui lucruri **despre** pagină. Nimic din `head` nu apare în pagină, în afară de titlu, care apare în filă.

### Exemplul 4 — `<title>`

```html
<head>
  <title>Pisica Mițu</title>
</head>
```

Titlul apare:
- în **fila** browserului (tab-ul de sus);
- în lista de **file deschise**;
- când salvezi pagina la **favorite**.

Un titlu bun este scurt și spune despre ce e pagina. Compară: `Pagina 1` sau `Pisica Mițu — povestea mea`?

### Exemplul 5 — `<meta charset="UTF-8">`

```html
<meta charset="UTF-8">
```

Spune browserului ce „alfabet de coduri” să folosească. Cu `UTF-8` se văd corect literele din limba noastră: **ă, â, î, ș, ț**.

Fără această linie, pe unele calculatoare apar semne ciudate în loc de diacritice (de exemplu `Äƒ` în loc de `ă`). Pe altele nu se vede nicio diferență, dar linia trebuie să rămână **mereu** în pagină, ca să fii sigur.

> `meta` nu are tag de închidere. Tagurile care nu au închidere, precum `meta`, `br` și `hr`, se numesc **tag-uri singure**.

**Încearcă tu (4 min)**  
- [ ] Schimbă `<title>` în numele tău și vezi noul titlu în filă  
- [ ] Scrie în `<body>` un paragraf cu diacritice (de exemplu „Șoricelul țese mătase”) și verifică să se vadă corect  

---

## 4. Ce se vede în `body`

### Exemplul 6 — Tag-uri în tag-uri

Tag-urile pot sta **unul în altul**, ca păpușile rusești: cea mică încape în cea mare.

```html
<body>
  <p>Eu sunt <strong>Ana</strong>.</p>
</body>
```

Aici `<strong>` (text îngroșat) este **în interiorul** lui `<p>`, care la rândul lui este **în interiorul** lui `<body>`.

Regula: **ultimul tag deschis se închide primul.**

```text
<body>
  <p>
    <strong>
    </strong>
  </p>
</body>
```

**Încearcă tu (4 min)**  
- [ ] Scrie Exemplul 6 și vezi că „Ana” apare îngroșat  
- [ ] Scrie pe foaie ordinea în care se închid `<body>`, `<p>` și `<strong>`  

---

## 5. Cod aranjat frumos

### Exemplul 7 — Indentare

**Indentarea** înseamnă că scrii codul **tras spre dreapta** cu 2 spații pentru fiecare tag aflat în interiorul altuia. Browserul nu o citește, dar **tu** vezi imediat ce stă în ce.

Aranjat:

```html
<body>
  <h1>Ana Pop</h1>
  <p>Am zece ani.</p>
</body>
```

Nearanjat (browserul îl afișează la fel, dar e greu de citit):

```html
<body>
<h1>Ana Pop</h1>
<p>Am zece ani.</p>
</body>
```

VS Code poate aranja codul pentru tine: apasă **Shift + Alt + F** (pe Mac **Shift + Option + F**). Dacă te întreabă ce formatare să folosești, alege varianta pentru HTML.

> Tasta **Tab** în VS Code pune spații pentru indentare, iar **Shift + Tab** le scoate.

**Încearcă tu (3 min)**  
- [ ] Șterge indentarea din pagina ta, apoi aranjează codul cu **Shift + Alt + F** (sau cu mâna)  

---

## 6. Mini-proiect

### Exemplul 8 — „Cartea mea de vizită”

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ana Pop — carte de vizită</title>
</head>
<body>
  <!-- Cartea mea de vizită -->
  <h1>Ana Pop</h1>
  <p>Am zece ani și locuiesc în Cluj.</p>
  <p>Hobby-ul meu: desenez și mă joc cu pisica.</p>
  <p>Visul meu: să fac propriul meu joc.</p>
</body>
</html>
```

Cartea ta de vizită este despre **tine**: schimbă numele, orașul, hobby-ul și visul.

---

## De făcut azi — „Cartea mea de vizită”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Scheletul complet, scris de tine, cu un `<title>` și un paragraf în `<body>` |
| **Complet** | Minim + un `<h1>`, trei paragrafe despre tine, un comentariu și codul aranjat frumos, cu indentare |

### Pasul 1 — Minim
Șterge tot din `index.html` și scrie singur scheletul complet, fără `!` + Tab, cu un `<title>` și un paragraf în `<body>`.

- [ ] Folderul `Prenume_Nume_W1_L2` este deschis în VS Code și are fișierul `index.html`  
- [ ] Ai scris scheletul singur, fără `!` + Tab  
- [ ] Pagina se vede în browser, cu Live Server pornit  

### Pasul 2 — Complet
Transformi pagina în „Cartea mea de vizită”:

- [ ] În `<title>` ai numele tău și cuvintele „carte de vizită”  
- [ ] Pagina are un `<h1>` cu numele tău  
- [ ] Are **trei** paragrafe `<p>` despre tine  
- [ ] Are **un comentariu** cu numele tău  
- [ ] Codul e indentat frumos (cu mâna sau cu **Shift + Alt + F**)  

---

## Bonus ★★★ — Provocare: Cartea de vizită a unui personaj
*Doar dacă ai terminat Complet.*

Inventezi un personaj și îi faci cartea de vizită.

- [ ] Fă o a doua „carte de vizită”, pentru un personaj inventat (un pirat, o vrăjitoare, un robot)  
- [ ] Scrie un `<title>` de 3 feluri diferite și alege titlul cel mai bun  
- [ ] Deschide DevTools cu **F12**, fila **Elements**, și găsește `head` și `body` ale paginii tale  
- [ ] Deschide „Vezi sursa” (Ctrl + U) pe o pagină din internet și caută `<title>` și `lang=`  

---

## Greșeli frecvente
1. **Ai scris textul în `<head>`** — nu apare în pagină; mută textul în `<body>`.  
2. **Tagul `</html>` lipsește sau nu e ultimul** — `html` se închide mereu ultimul.  
3. **Ai pus două `<body>`** — o pagină are un singur `head` și un singur `body`.  
4. **Ai uitat `</title>`** — tot ce urmează devine „titlu” și pagina arată ciudat.  
5. **Tag-uri încrucișate** — `<p><strong>…</p></strong>` în loc de `<p><strong>…</strong></p>`.  
6. **Ai scris `<!DOCTYPE html>` de două ori** sau nu în prima linie.  
7. **Ai uitat să salvezi** — apasă **Ctrl + S** și verifică dacă nu mai e cercul alb lângă numele fișierului.  

---

## Recapitulare pe scurt
1. Scheletul: `DOCTYPE`, `html`, `head` (informații), `body` (ce se vede).  
2. `DOCTYPE` este prima linie și nu are închidere.  
3. `<html lang="ro">` înfășoară pagina și se închide ultimul.  
4. `<title>` apare în fila browserului.  
5. `<meta charset="UTF-8">` face diacriticele să se vadă corect.  
6. Tag-urile se pun unul în altul; **ultimul deschis se închide primul**.  
7. Indentarea ajută să vezi ce stă în ce.

## Quiz scurt
- Ce parte a scheletului conține informații care nu se văd în pagină?  
- Unde apare textul din `<title>`?  
- Ce tag se închide ultimul într-o pagină?  
- Ce face `lang="ro"`?  
- Ce înseamnă „tag-uri încrucișate”?

## Temă
1. Fă încă o pagină `index.html` în folderul `Prenume_Nume_W1_L2`: o carte de vizită pentru **un prieten sau pentru un animal** (cu schelet scris de tine, un `<h1>`, trei paragrafe și un `<title>` potrivit). Adu pagina la ora următoare.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Tot ce se vede, în `body`.**

```html
<body>
  <h1>Ana Pop</h1>
  <p>Am zece ani.</p>
</body>
```

Tot ce vrei să vadă cineva (titluri, text, poze, butoane) scrii între `<body>` și `</body>`. Ce scrii în afara lui nu se va vedea cum vrei.

**Acasă 2 — Tag-uri încrucișate (greșeală)**

```html
<p>Eu sunt <strong>Ana</p></strong>
```

Aici `</p>` apare **înainte** de `</strong>`, deși `<strong>` s-a deschis după `<p>`. Tag-urile se „încrucișează”, iar browserul se încurcă. Corect este:

```html
<p>Eu sunt <strong>Ana</strong></p>
```

4. **Încă patru exerciții (B–E):**

**B — Ce apare în filă și ce în pagină?** Fără să rulezi codul, spune ce apare **în fila browserului** și ce apare **în pagină**:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <title>Clubul meu</title>
</head>
<body>
  <h1>Bine ai venit!</h1>
  <p>Suntem prieteni.</p>
</body>
</html>
```

**C — Completează scheletul.** Înlocuiește fiecare `____` cu cuvântul potrivit:

```text
<!DOCTYPE ____>
<html lang="___">
<____>
  <meta charset="UTF-8">
  <____>Pagina mea</____>
</head>
<____>
  <p>Salut!</p>
</body>
</____>
```

**D — Găsește greșelile.** Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
<!DOCTYPE html>
<html lang="ro">
<head>
  <title>Pisica mea
</head>
<body>
  <h1>Salut!</h1>
  <p>Eu sunt <strong>Ana</p></strong>
</body>
```

**E — Explică cu cuvintele tale.** Pe foaie, într-o propoziție pentru fiecare: la ce folosesc `head`, `body` și `title`?

## Ce urmează — Lecția 3
Învățăm să scriem **titluri de mărimi diferite** (`h1` … `h6`) și să împărțim textul în **paragrafe**. Paginile tale încep să arate ca niște pagini adevărate.

---

## Răspunsuri
- **Quiz scurt:** (1) `head`; (2) în fila browserului (și în lista de file deschise sau la favorite); (3) `</html>`; (4) spune că pagina este scrisă în limba română; (5) tag-uri închise în ordine greșită, de exemplu `<p>Eu sunt <strong>Ana</p></strong>`; corect este ca ultimul tag deschis să se închidă primul.  
- **Tema, exercițiul B:** în filă: „Clubul meu”. În pagină: „Bine ai venit!” (titlu mare) și „Suntem prieteni.”  
- **Tema, exercițiul C:** `html`, `ro`, `head`, `title`, `title`, `body`, `html`.  
- **Tema, exercițiul D:** (1) lipsește `</title>`; (2) tag-uri încrucișate: `</p></strong>` trebuie `</strong></p>`; (3) lipsește `</html>` la final.  
- **Tema, exercițiul E:** `head` = informații despre pagină care nu se văd; `body` = tot ce se vede în pagină; `title` = numele paginii din fila browserului.
