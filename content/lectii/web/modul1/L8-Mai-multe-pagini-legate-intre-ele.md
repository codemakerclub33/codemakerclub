# LECȚIA 8 — Mai multe pagini legate între ele
**Modulul 1 · HTML I: Prima mea pagină · 2 ore**  
**Code Maker Club · HTML Starter**

> Până acum ai făcut pagini singure. Un **site** adevărat are mai multe pagini legate între ele printr-un **meniu**. Azi construiești primul tău mini-site, cu trei pagini.  
> Proiect: **„Mini-site despre mine”** · folder: `Prenume_Nume_W1_L8` (ex. `Ana_Pop_W1_L8`)

---

## Obiectiv
La finalul orei știi să faci un site cu mai multe pagini în același folder, să legi paginile cu linkuri relative, să pui același meniu în fiecare pagină, să folosești un subfolder pentru pagini și să găsești de ce un link „nu merge”.  
**Minim:** un site cu două pagini, `index.html` și `despre.html`, legate prin linkuri în ambele sensuri.  
**Ținta orei (Complet):** + o a treia pagină, un meniu identic în toate paginile și un link către o secțiune dintr-o altă pagină.

## De ce contează
Toate site-urile pe care le vizitezi sunt făcute din mai multe pagini legate între ele. Dacă înțelegi cum se leagă paginile și unde stau fișierele, poți face orice site, mic sau mare.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–40 | Un site = mai multe pagini · două pagini legate (**Exemplele 1–2**) |
| 40–65 | Meniul · trei pagini (**Exemplele 3–4**) |
| 65–85 | Subfolder · `../` · link către o secțiune (**Exemplele 5, 7, 8**) |
| 85–100 | Când un link nu merge (**Exemplul 6**) · harta site-ului (**Exemplul 9**) |
| 100–115 | Mini-site complet (**Exemplul 10**) |
| 115–120 | Recap și temă |

---

## 1. Recapitulare rapidă

- `style="culoare"` schimbă aspectul unui tag: `color` pentru text, `background-color` pentru fundal.  
- `<span>` colorează doar un cuvânt.  
- Textul trebuie să se citească bine pe fundal.  
- Linkurile se fac cu `<a href="...">`, iar linkurile către fișierele tale se scriu fără `https://`.

**Încearcă tu (3 min)**  
- [ ] Creează folderul `Prenume_Nume_W1_L8` și deschide folderul în VS Code  
- [ ] Creează în el fișierul `index.html` cu scheletul complet scris de tine  

---

## 2. Un site înseamnă mai multe pagini

### Exemplul 1 — Cum arată folderul unui site

Un site mic stă într-un singur folder:

```text
Prenume_Nume_W1_L8/
  index.html
  despre.html
  hobby.html
```

- Prima pagină a unui site se numește **`index.html`**. Este „ușa de intrare”, iar serverul o deschide prima.  
- Celelalte pagini au nume scurte, cu litere mici, fără spații și fără diacritice: `despre.html`, `hobby.html`.  
- Toate paginile din același folder se leagă între ele **doar cu numele fișierului**.

### Exemplul 2 — Două pagini legate

Fișierul `index.html` (în `<body>`):

```html
<h1>Pagina mea principală</h1>
<p>Bine ai venit! Vrei să afli mai multe despre mine?</p>
<p><a href="despre.html">Mergi la pagina „Despre mine”</a></p>
```

Fișierul `despre.html` (în `<body>`):

```html
<h1>Despre mine</h1>
<p>Mă cheamă Ana și îmi plac animalele.</p>
<p><a href="index.html">Înapoi la prima pagină</a></p>
```

Deschide `index.html` cu Live Server, apasă pe link și ajungi în `despre.html`. Apoi apasă pe linkul din ea ca să te întorci.

> Fiecare pagină trebuie să aibă propriul **schelet complet** (`<!DOCTYPE html>`, `<head>`, `<body>`). Exemplele arată doar interiorul lui `<body>`.

**Gata când:**  
- [ ] Ai creat `despre.html` cu scheletul complet și un titlu  
- [ ] Ai un link din `index.html` către `despre.html`  
- [ ] Ai un link înapoi din `despre.html` către `index.html`  
- [ ] Ai testat ambele linkuri cu Live Server  

---

## 3. Meniul

### Exemplul 3 — O linie de linkuri

Un **meniu** este o linie de linkuri către toate paginile site-ului:

```html
<p>
  <a href="index.html">Acasă</a> |
  <a href="despre.html">Despre mine</a> |
  <a href="hobby.html">Hobby</a>
</p>
```

Bara verticală `|` este doar un separator între linkuri. Linkurile se scriu pe linii separate ca să fie ușor de citit în cod.

Același meniu se pune **la începutul fiecărei pagini**, ca vizitatorul să ajungă oriunde de oriunde. Îl copiezi cu **Ctrl+C** și **Ctrl+V** în fiecare fișier.

### Exemplul 4 — Trei pagini cu același meniu

Fișierul `hobby.html` (în `<body>`):

```html
<p>
  <a href="index.html">Acasă</a> |
  <a href="despre.html">Despre mine</a> |
  <a href="hobby.html">Hobby</a>
</p>
<hr>

<h1>Hobby-ul meu</h1>
<p>Îmi place să desenez animale.</p>
<ul>
  <li>pisici</li>
  <li>cai</li>
  <li>delfini</li>
</ul>
```

Pune **același meniu** și în `index.html` și în `despre.html`. Testează că poți merge din orice pagină în orice pagină.

> Dacă schimbi un nume de fișier, trebuie să schimbi linkul în **toate** paginile care îl folosesc. De aceea e bine să alegi numele din prima.

**Încearcă tu (6 min)**  
- [ ] Creează `hobby.html` cu scheletul complet  
- [ ] Pune meniul cu trei linkuri în toate cele trei pagini  
- [ ] Parcurge toate linkurile cu Live Server, pe rând  

---

## 4. Foldere, linkuri către secțiuni și greșeli

### Exemplul 5 — Pagini într-un subfolder

Când ai multe pagini, le poți pune într-un folder `pagini`:

```text
Prenume_Nume_W1_L8/
  index.html
  pagini/
    despre.html
    hobby.html
```

Din `index.html` (care e în folderul principal) intri în folder:

```html
<a href="pagini/despre.html">Despre mine</a>
```

Din `pagini/despre.html` ieși cu `../` („un folder mai sus”):

```html
<a href="../index.html">Acasă</a>
<a href="hobby.html">Hobby</a>
```

`hobby.html` este în același folder cu `despre.html`, deci se scrie doar numele.

| Unde ești | Spre ce mergi | Linkul |
|-----------|---------------|--------|
| `index.html` | `pagini/despre.html` | `pagini/despre.html` |
| `pagini/despre.html` | `index.html` | `../index.html` |
| `pagini/despre.html` | `pagini/hobby.html` | `hobby.html` |

> Acum nu ai nevoie să muți paginile în subfoldere. Important e să înțelegi regula: **linkul se scrie privind din folderul paginii în care te afli**.

### Exemplul 6 — Când linkul nu merge

Dacă apeși pe link și vezi „**404**”, „Cannot GET” sau o pagină goală, browserul **nu a găsit fișierul**. Verifică, pe rând:

1. Numele din `href` este **exact** ca numele fișierului (litere mici, cu `.html`)?  
2. Ai scris `despre.html`, nu `despre.htm` sau `despre`?  
3. Fișierul este în **același folder**? Dacă nu, ai scris calea corectă?  
4. Ai salvat fișierul (**Ctrl+S**) și ai pus fișierul în folderul proiectului?  
5. Ai folosit bara `/`, nu `\`?

### Exemplul 7 — Link către o secțiune dintr-o altă pagină

Dacă pui un `id` pe un titlu din `despre.html`:

```html
<h2 id="prieteni">Prietenii mei</h2>
```

poți face un link direct la el din altă pagină:

```html
<a href="despre.html#prieteni">Vezi prietenii mei</a>
```

Scrii numele paginii, apoi `#`, apoi `id`-ul. Browserul deschide pagina și derulează direct la titlu.

### Exemplul 8 — Imagini în pagini din subfolder

Dacă o pagină este în folderul `pagini` și imaginile sunt în folderul `imagini` de lângă `index.html`, urci un folder:

```html
<img src="../imagini/pisica.jpg" alt="O pisică gri" width="300">
```

Aceeași regulă ca la linkuri: `../` înseamnă „un folder mai sus”.

**Gata când:**  
- [ ] Înțelegi de ce `index.html` este numele primei pagini  
- [ ] Poți explica de ce la `../` urcăm un folder  
- [ ] Ai încercat un link greșit (de exemplu `despre.htm`) și ai înțeles mesajul „404”, apoi ai reparat linkul  
- [ ] Ai făcut un link cu `#id` către un titlu din altă pagină  

---

## 5. Planul site-ului și mini-proiectul

### Exemplul 9 — Harta site-ului

Înainte să scrii cod, desenează pe foaie **harta site-ului**: o căsuță pentru fiecare pagină și săgeți pentru linkuri.

```text
        [ Acasă ]
       /    |     \
[Despre mine] [Hobby] [Animalele mele]
```

Din fiecare pagină se poate ajunge în oricare alta, prin meniu. Hartă pe hârtie înseamnă mai puține greșeli în cod.

### Exemplul 10 — Mini-site cu trei pagini

`index.html`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Acasă - Ana</title>
</head>
<body style="background-color: lightyellow;">
  <p>
    <a href="index.html">Acasă</a> |
    <a href="despre.html">Despre mine</a> |
    <a href="hobby.html">Hobby</a>
  </p>
  <hr>

  <h1 style="color: tomato;">Salut, sunt Ana!</h1>
  <p>Bine ai venit pe mini-site-ul meu. Folosește meniul de sus ca să te plimbi prin pagini.</p>
  <p>Am 10 ani și îmi plac animalele.</p>
</body>
</html>
```

`despre.html` și `hobby.html` au **același schelet, același meniu și același stil de fundal**, dar alt titlu și alt conținut. Folosește culori care se potrivesc și pe toate paginile.

**Gata când:**  
- [ ] Site-ul are trei pagini: `index.html`, `despre.html`, `hobby.html`  
- [ ] Fiecare pagină are scheletul complet și același meniu  
- [ ] Toate linkurile din meniu merg din orice pagină în orice pagină  
- [ ] Fiecare pagină are propriul titlu în `<title>` (apare în tab)  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Mini-site despre mine” (obligatoriu)
Fă un site cu **trei pagini** în folderul `Prenume_Nume_W1_L8`:
- `index.html`: un titlu, un text de bun venit, o imagine (opțional);
- `despre.html`: câteva paragrafe despre tine și o listă;
- `hobby.html`: o listă cu pasiunile tale.

Fiecare pagină are același **meniu** cu trei linkuri, **același fundal colorat** și un `<title>` diferit. În `despre.html` pune cel puțin un titlu `<h2>` cu `id` și un link către el din `index.html`.

### Exercițiul B — Unde duce linkul?
Pentru fiecare link, spune ce fișier deschide, dacă te afli în `pagini/hobby.html`:

```text
<a href="despre.html">...</a>
<a href="../index.html">...</a>
<a href="../imagini/pisica.jpg">...</a>
```

### Exercițiul C — Scrie linkul
Ești în `index.html`. Scrie linkul către `pagini/galerie.html`. Apoi ești în `pagini/galerie.html`. Scrie linkul înapoi către `index.html`.

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos:

```text
<a href="Despre Mine.html">Despre</a>
<a href="hobby.htm">Hobby</a>
<a href=index.html>Acasă</a>
```

### Exercițiul E — Harta ta
Desenează pe foaie harta unui site cu patru pagini despre un subiect ales de tine. Scrie sub fiecare căsuță numele fișierului.

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W1_L8` conține cele trei pagini  
- [ ] Meniul funcționează din toate paginile  
- [ ] Ai făcut linkul către un `id` dintr-o altă pagină  
- [ ] Ai răspuns la exercițiile B–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Adaugă o a patra pagină, `galerie.html`, cu imagini și legende  
- [ ] Pune în fiecare pagină un link „Sus”, către `#sus`  
- [ ] Mută paginile `despre` și `hobby` în folderul `pagini` și repară toate linkurile  
- [ ] Deschide DevTools (**F12**), fila **Network**, reîncarcă pagina și vezi ce fișiere cere browserul  

---

## Greșeli frecvente
1. **Linkul nu se potrivește cu numele fișierului** — `Despre.html` și `despre.html` sunt diferite.  
2. **Ai scris `despre.htm` sau `despre`** — trebuie `.html`.  
3. **Nume cu spații sau diacritice** — folosește `despre_mine.html` sau `despre-mine.html`.  
4. **Ai uitat meniul într-una din pagini** — vizitatorul rămâne blocat acolo.  
5. **Ai uitat scheletul** într-o pagină nouă.  
6. **Ai pus fișierele în foldere diferite** fără să schimbi linkurile.  
7. **Ai scris `\` în loc de `/`** în cale.  
8. **Ai uitat ghilimelele** în jurul lui `href`.  
9. **Ai copiat o pagină și ai uitat să schimbi `<title>` și `<h1>`** — toate paginile arată la fel.  

---

## Recapitulare pe scurt
1. Un site = mai multe pagini legate prin linkuri.  
2. Prima pagină se numește `index.html`.  
3. Linkurile către propriile pagini se scriu cu numele fișierului, fără `https://`.  
4. Meniul este o linie de linkuri, pusă în toate paginile.  
5. `../` înseamnă „un folder mai sus”.  
6. `pagina.html#id` duce direct la o secțiune.  
7. Dacă un link nu merge, verifică numele, extensia și folderul.

## Quiz scurt
- Cum se numește prima pagină a unui site?  
- Cum scrii un link către `despre.html` din același folder?  
- Ce înseamnă `../`?  
- Ce faci dacă vezi „404” după ce apeși pe un link?  
- De ce pui același meniu în toate paginile?

## Temă
Fă un site cu **patru pagini** despre **animalul tău preferat** (sau un alt subiect ales de tine): `index.html`, `aspect.html`, `hrana.html` și `curiozitati.html`. Pune același meniu în toate paginile și o imagine într-una dintre ele. Salvează totul în `Prenume_Nume_W1_L8`.

## Ce urmează — Lecția 9
Învățăm să **ținem codul ordonat**: indentare, comentarii și cum folosești DevTools ca să găsești greșelile.

---

## Răspunsuri pentru profesor
- **Quiz scurt:** (1) `index.html`; (2) `<a href="despre.html">Despre mine</a>`; (3) „un folder mai sus”; (4) browserul nu a găsit fișierul: verifici numele din `href`, extensia `.html`, folderul, salvarea și bara `/`; (5) ca vizitatorul să poată ajunge oriunde din orice pagină.  
- **Exercițiul B:** (1) deschide `pagini/despre.html` (același folder); (2) deschide `index.html`, din folderul de deasupra; (3) deschide imaginea `pisica.jpg` din folderul `imagini`, aflat lângă `index.html`.  
- **Exercițiul C:** din `index.html`: `<a href="pagini/galerie.html">Galerie</a>`; din `pagini/galerie.html`: `<a href="../index.html">Acasă</a>`.  
- **Exercițiul D:** (1) nume cu spațiu și cu litere mari: `Despre Mine.html` (fișier corect: `despre_mine.html`); (2) `.htm` în loc de `.html`; (3) lipsesc ghilimelele la `href`.  
- **Exercițiul E:** răspuns liber; verifică numele fișierelor (litere mici, fără spații) și că fiecare pagină e legată de celelalte.
