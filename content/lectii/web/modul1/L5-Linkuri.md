# LECȚIA 5 — Colecția mea de linkuri
### Linkuri
**Modulul 1 · HTML I: Prima mea pagină · 2 ore**  
**Code Maker Club · HTML Starter**

> Linkurile sunt „podurile” internetului: un cuvânt pe care apeși și ajungi pe altă pagină. Azi înveți să le faci singur, spre alte site-uri, spre paginile tale și chiar spre un loc anume din aceeași pagină!  
> Proiect: **„Colecția mea de linkuri”** · folder: `Prenume_Nume_W1_L5` (ex. `Ana_Pop_W1_L5`)

---

## Ce facem azi
La final ai un mic site cu **două pagini**: prima pagină are o colecție de linkuri spre site-uri alese cu profesorul, un link spre a doua pagină și un link „↑ Înapoi sus”. Știi să scrii un link cu `<a href="...">`, să deschizi un link în filă nouă și să legi două pagini din folderul tău. Fără linkuri, internetul ar fi o grămadă de pagini fără legătură între ele: linkurile fac din pagini un **site**.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–40 | Primul link · adresa completă · filă nouă (**Exemplele 1–3**) |
| 40–55 | Textul unui link bun (**Exemplul 4**) |
| 55–80 | Link spre propria pagină (**Exemplul 5**) |
| 80–100 | Link în aceeași pagină · link „Sus” (**Exemplele 6–7**) |
| 100–115 | Mini-proiect: colecția mea de linkuri (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `<a href="...">text</a>` | Link: duce unde spune `href` | `<a href="https://www.nasa.gov">NASA</a>` |
| `target="_blank"` și `rel="noopener noreferrer"` | Deschide linkul în filă nouă | se scriu mereu împreună |
| `href="despre.html"` | Link spre altă pagină din același folder | doar numele fișierului |
| `id="sus"` și `href="#sus"` | Link spre un loc din aceeași pagină | `<a href="#sus">↑ Înapoi sus</a>` |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- `<strong>` îngroașă, `<em>` înclină, `<mark>` evidențiază;
- `<ul>` face liste cu buline, `<ol>` liste cu numere, iar `<li>` este un rând din listă;
- ultimul tag deschis se închide primul.

**Încearcă tu (3 min)**  
- [ ] Creează folderul `Prenume_Nume_W1_L5` și fișierul `index.html` cu scheletul scris de tine  
- [ ] Pune în `<body>` un `<h1>` și o listă cu buline cu trei lucruri care îți plac  

> De aici înainte, exemplele arată doar ce scrii **în interiorul `<body>`**.

> **Siguranță pe internet:** în lecțiile de azi facem linkuri doar spre site-uri **pe care le-ai ales împreună cu profesorul sau cu un părinte**. Nu scrie niciodată într-o pagină adresa casei, numărul de telefon sau adresa ta reală de e-mail.

---

## 2. Primul link

### Exemplul 1 — Un link spre Wikipedia

```html
<p>Caută lucruri noi pe <a href="https://www.wikipedia.org">Wikipedia</a>.</p>
```

Un link are trei părți:

| Parte | Ce este | Exemplu |
|-------|---------|---------|
| `<a ...>` ... `</a>` | tagul linkului (de la „anchor”, adică „ancoră”) | `<a>` |
| `href="..."` | **unde duce** linkul (adresa) | `href="https://www.wikipedia.org"` |
| textul dintre taguri | **ce vede și apasă** cititorul | `Wikipedia` |

`href` este un atribut, ca `lang` din lecția 2: scrii `nume="valoare"`, **cu ghilimele**. În browser, textul linkului apare de obicei **albastru și subliniat**; după ce ai apăsat pe el, devine **mov**.

### Exemplul 2 — Adresa trebuie să fie completă

```html
<a href="https://www.nasa.gov">NASA</a>
```

Pentru un site din internet, adresa începe cu `https://`. Fără ea, browserul crede că vrei un **fișier din folderul tău** și linkul nu merge. Cel mai sigur: deschizi site-ul în browser, copiezi adresa din bara de sus și o lipești între ghilimele.

### Exemplul 3 — Link care se deschide în filă nouă

```html
<a href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer">Wikipedia</a>
```

- `target="_blank"` deschide linkul într-o **filă nouă**, iar pagina ta rămâne deschisă.  
- `rel="noopener noreferrer"` este o măsură de siguranță pentru paginile deschise astfel. Îl scrii **mereu** împreună cu `target="_blank"`.  

Folosește fila nouă pentru **linkuri spre alte site-uri**. Pentru paginile tale e mai bine să rămâi în aceeași filă.

**Gata când:**  
- [ ] Ai scris un link spre un site ales cu profesorul  
- [ ] Ai un link care se deschide în filă nouă, cu `target` și `rel`  

---

## 3. Un link bun

### Exemplul 4 — Ce scriem între `<a>` și `</a>`

Compară:

```html
<p>Apasă <a href="https://www.nasa.gov">aici</a> ca să afli despre spațiu.</p>
<p>Află despre spațiu pe <a href="https://www.nasa.gov">site-ul NASA</a>.</p>
```

Al doilea este mai bun. Cine citește doar cuvintele linkurilor (de exemplu un program care citește pagina cu voce tare) trebuie să înțeleagă **unde duce linkul**. „Aici” nu spune nimic, „site-ul NASA” spune tot.

**Încearcă tu (4 min)**  
- [ ] Scrie trei linkuri spre site-uri alese cu profesorul, fiecare cu text care spune unde duce  
- [ ] Verifică în browser că fiecare link merge și arată la ce adresă te duce  

---

## 4. Linkuri spre paginile tale

### Exemplul 5 — O a doua pagină

Un site are **mai multe pagini**. În același folder cu `index.html`, creează încă un fișier: `despre.html`, cu scheletul complet, `<h1>Despre mine</h1>` și un paragraf.

În `index.html` scrie:

```html
<p>Vrei să afli mai multe? Citește pagina <a href="despre.html">Despre mine</a>.</p>
```

În `despre.html` scrie un link înapoi:

```html
<p><a href="index.html">Înapoi la prima pagină</a></p>
```

Aici adresa e doar **numele fișierului**, fără `https://`. Browserul îl caută în **același folder** cu pagina curentă.

> Numele fișierelor: litere mici, fără spații și fără diacritice (`despre.html`, nu `Despre mine.html`). Dacă greșești o literă, linkul nu merge.

**Încearcă tu (5 min)**  
- [ ] Fă pagina `despre.html` și leag-o de `index.html`, în ambele sensuri  
- [ ] Verifică numele fișierelor: litere mici, fără spații și fără diacritice  

---

## 5. Linkuri în aceeași pagină

### Exemplul 6 — Link spre un loc din aceeași pagină

Pe o pagină lungă, poți face un „cuprins” care te duce direct la o parte. Mai întâi dai un **nume** (un `id`) locului în care vrei să ajungi:

```html
<h2 id="hobby">Hobby-urile mele</h2>
```

Apoi faci linkul spre acel loc, cu semnul `#` și numele:

```html
<p><a href="#hobby">Mergi la hobby-uri</a></p>
```

Când apeși, pagina **derulează** până la titlul cu `id="hobby"`.

> Numele din `id` nu are spații sau diacritice și trebuie să fie **unic** în pagină.

### Exemplul 7 — Link „Sus”

```html
<h1 id="sus">Pagina mea</h1>
...
<p><a href="#sus">↑ Înapoi sus</a></p>
```

Pui `id="sus"` pe primul titlu și un link `#sus` la finalul paginii. E util când pagina e lungă.

**Încearcă tu (4 min)**  
- [ ] Fă o pagină cu trei titluri `<h2>`, cu `id` pe fiecare, și un mic cuprins cu trei linkuri `#`  
- [ ] Adaugă un link „↑ Înapoi sus” la final  

---

## 6. Mini-proiect

### Exemplul 8 — „Colecția mea de linkuri”

`index.html`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Colecția mea de linkuri</title>
</head>
<body>
  <h1 id="sus">Colecția mea de linkuri</h1>
  <p>Aici sunt site-urile mele preferate, alese împreună cu profesorul.</p>

  <h2>Să învăț</h2>
  <ul>
    <li><a href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer">Wikipedia</a>: enciclopedia liberă</li>
    <li><a href="https://www.nasa.gov" target="_blank" rel="noopener noreferrer">NASA</a>: știri din spațiu</li>
  </ul>

  <h2>Să mă joc</h2>
  <ul>
    <li><a href="https://scratch.mit.edu" target="_blank" rel="noopener noreferrer">Scratch</a>: jocuri făcute de copii</li>
  </ul>

  <hr>
  <p><a href="despre.html">Despre mine</a> · <a href="#sus">↑ Înapoi sus</a></p>
</body>
</html>
```

`despre.html` (în același folder):

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Despre mine</title>
</head>
<body>
  <h1>Despre mine</h1>
  <p>Mă cheamă Ana și îmi plac site-urile cu povești.</p>
  <p><a href="index.html">← Înapoi la linkuri</a></p>
</body>
</html>
```

Alege **tu** site-urile și scrie ce îți place la fiecare.

**Gata când:**  
- [ ] Ai două pagini: `index.html` și `despre.html`, legate între ele în ambele sensuri  
- [ ] Linkurile spre alte site-uri se deschid în filă nouă  

---

## De făcut azi — „Colecția mea de linkuri”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | O pagină cu trei linkuri: două spre site-uri din internet și unul spre o a doua pagină făcută de tine |
| **Complet** | Minim + un link care se deschide în filă nouă, un link „↑ Înapoi sus” și o listă cu buline pentru linkuri |

### Pasul 1 — Minim
Fă `index.html` cu un `<h1>` și trei linkuri: două spre site-uri alese cu profesorul și unul spre `despre.html`, o pagină făcută de tine.

- [ ] `despre.html` are scheletul complet, un paragraf și un link înapoi spre `index.html`  
- [ ] Cele două pagini sunt legate în ambele sensuri  
- [ ] Ai testat toate linkurile cu Live Server  

### Pasul 2 — Complet
Îmbunătățești colecția:

- [ ] Ai cel puțin trei linkuri spre site-uri alese cu profesorul, în filă nouă (`target` și `rel`), cu text care spune unde duc  
- [ ] Linkurile sunt într-o listă cu buline  
- [ ] Ai un link „↑ Înapoi sus”, cu `id="sus"` pe primul titlu  
- [ ] Folderul `Prenume_Nume_W1_L5` are `index.html` și `despre.html`  

---

## Bonus ★★★ — Provocare: Cuprinsul meu
*Doar dacă ai terminat Complet.*

Faci o pagină ușor de parcurs, cu linkuri peste tot.

- [ ] Fă un mini-cuprins în partea de sus a unei pagini lungi, cu linkuri `#` spre fiecare titlu  
- [ ] Adaugă o a treia pagină (`hobby.html`) și pune un link către ea  
- [ ] Pune un link `mailto:` cu o adresă de probă și testează linkul (vezi Acasă 2)  
- [ ] Deschide „Vezi sursa” (Ctrl + U) pe o pagină din internet și numără câte linkuri `<a href=...>` găsești  

---

## Greșeli frecvente
1. **Adresă fără `https://`** — `href="www.nasa.gov"` caută un fișier în folderul tău.  
2. **Lipsesc ghilimelele** — `href=pagina.html` poate merge uneori, dar scrie mereu `href="pagina.html"`.  
3. **Ai uitat `</a>`** — tot ce urmează devine link.  
4. **Ai scris greșit numele fișierului** — `despre.html` și `Despre.html` sunt diferite pe unele calculatoare. Folosește litere mici.  
5. **Ai pus spații sau diacritice în numele fișierului** — `despre mine.html` nu merge ușor într-un link.  
6. **`target="blank"` în loc de `_blank`** — lipsește liniuța jos `_`.  
7. **Ai uitat `#` la linkul din pagină** — scrie `href="#hobby"`, nu `href="hobby"`.  
8. **`id` duplicat** — două titluri cu același `id` încurcă linkul.  
9. **Ai folosit `\` în adresă** — în linkuri se scrie `/` (bară înclinată spre dreapta), mereu.  

---

## Recapitulare pe scurt
1. Un link este `<a href="adresa">text</a>`.  
2. Spre alte site-uri, adresa începe cu `https://`.  
3. `target="_blank"` + `rel="noopener noreferrer"` deschid linkul în filă nouă.  
4. Textul linkului trebuie să spună **unde duce**.  
5. Spre paginile tale: numele fișierului, de exemplu `despre.html`.  
6. `id="nume"` + `href="#nume"` fac un link în aceeași pagină.  

## Quiz scurt
- Care atribut spune unde duce linkul?  
- Ce face `target="_blank"`?  
- Cum faci un link spre `despre.html` din același folder?  
- De ce e mai bine „site-ul NASA” decât „apasă aici” ca text al unui link?  
- Cum faci un link care duce la un titlu din aceeași pagină?

## Temă
1. Fă un mic site cu **două pagini** despre **un subiect pe care îl iubești** (un animal, un sport, un joc): `index.html` cu trei linkuri spre site-uri alese cu un adult și `despre.html`, legate între ele. Pune paginile în folderul `Prenume_Nume_W1_L5`.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Foldere.**

Când ai multe pagini, le poți pune în foldere, ca într-un dulap cu sertare.

```text
Prenume_Nume_W1_L5/
├── index.html
└── pagini/
    └── despre.html
```

Din `index.html`, linkul spre `despre.html` trece **prin sertarul `pagini`**:

```html
<a href="pagini/despre.html">Despre mine</a>
```

Din `despre.html` (care e în `pagini`), ca să te întorci în folderul de deasupra, folosești `../` („un sertar mai sus”):

```html
<a href="../index.html">Înapoi la prima pagină</a>
```

**Acasă 2 — Link pentru e-mail.**

```html
<p>Scrie un mesaj la <a href="mailto:ana@example.com">ana@example.com</a>.</p>
```

Un link care începe cu `mailto:` deschide programul de e-mail al calculatorului, cu adresa deja completată. Adresa `example.com` este una **de probă**, care nu aparține nimănui.

> **Atenție:** într-o pagină publică nu pune adresa ta reală de e-mail. Pentru exercițiile noastre folosește o adresă de probă.

4. **Încă patru exerciții (B–E):**

**B — Extern sau din folderul meu?** Pentru fiecare adresă, spune dacă duce la un **alt site** sau la o **pagină din folderul tău**: (1) `https://www.nasa.gov`; (2) `galerie.html`; (3) `pagini/hobby.html`; (4) `https://scratch.mit.edu`.

**C — Scrie linkurile.** Scrie linkul (cu `<a>` și `href`) pentru: (1) site-ul `https://www.nasa.gov`, în filă nouă; (2) pagina `galerie.html` din același folder; (3) pagina `index.html` aflată cu un folder mai sus.

**D — Găsește greșelile.** Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
<a href=www.wikipedia.org>Wikipedia</a>
<a href="despre.html">Despre mine
<a href="https://www.nasa.gov" target="blank">NASA</a>
```

**E — Explică cu cuvintele tale.** Pe foaie: de ce e mai bine să scrii „site-ul NASA” decât „apasă aici” ca text al unui link?

## Ce urmează — Lecția 6
Învățăm să punem **imagini** în pagină, să ținem pozele în foldere și să scriem descrieri pentru ele, ca pagina ta să nu mai fie doar text.

---

## Răspunsuri
- **Quiz scurt:** (1) `href`; (2) deschide linkul într-o filă nouă; (3) `<a href="despre.html">Despre mine</a>`; (4) pentru că textul linkului trebuie să spună unde duce; (5) dai titlului un `id` (de exemplu `id="hobby"`) și scrii linkul `<a href="#hobby">...</a>`.  
- **Tema, exercițiul B:** (1) alt site; (2) pagină din folderul tău; (3) pagină din folderul tău, într-un subfolder; (4) alt site.  
- **Tema, exercițiul C:** (1) `<a href="https://www.nasa.gov" target="_blank" rel="noopener noreferrer">NASA</a>`; (2) `<a href="galerie.html">Galerie</a>`; (3) `<a href="../index.html">Prima pagină</a>`.  
- **Tema, exercițiul D:** (1) adresa nu are `https://` și nici ghilimele; (2) lipsește `</a>`; (3) `target="blank"` trebuie `target="_blank"`.  
- **Tema, exercițiul E:** textul linkului trebuie să spună unde duce; cititoarele de ecran și cititorii care caută rapid se orientează după el.
