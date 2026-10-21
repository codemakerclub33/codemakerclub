# LECȚIA 5 — Linkuri
**Modulul 1 · HTML I: Prima mea pagină · 2 ore**  
**Code Maker Club · HTML Starter**

> Linkurile sunt „podurile” internetului: un cuvânt pe care apeși și ajungi pe altă pagină. Azi înveți să le faci singur, spre alte site-uri, spre paginile tale și chiar spre un loc anume din aceeași pagină!  
> Proiect: **„Colecția mea de linkuri”** · folder: `Prenume_Nume_W1_L5` (ex. `Ana_Pop_W1_L5`)

---

## Obiectiv
La finalul orei știi să scrii un link cu `<a href="...">`, să deschizi un link în filă nouă, să legi două pagini din folderul tău, să faci un link care duce într-un loc din aceeași pagină și să scrii un link pentru e-mail.  
**Minim:** o pagină cu trei linkuri: două spre site-uri din internet și unul spre o a doua pagină făcută de tine.  
**Ținta orei (Complet):** + un link care se deschide în filă nouă, un link „Sus” care te duce în vârful paginii și un link `mailto:`.

## De ce contează
Fără linkuri, internetul ar fi o grămadă de pagini fără legătură între ele. Linkurile fac din pagini un **site**: de la prima pagină poți ajunge oriunde. Orice site pe care îl vei face va avea linkuri.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–40 | Primul link · adresa completă · filă nouă (**Exemplele 1–3**) |
| 40–55 | Textul unui link bun (**Exemplul 4**) |
| 55–85 | Link către propriile pagini · foldere (**Exemplele 5–6**) |
| 85–100 | Link în aceeași pagină · e-mail (**Exemplele 7–9**) |
| 100–115 | Mini-proiect: colecția mea de linkuri (**Exemplul 10**) |
| 115–120 | Recap și temă |

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

### Exemplul 6 — Foldere

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

**Încearcă tu (5 min)**  
- [ ] Fă pagina `despre.html` și leagă pagina de `index.html`, în ambele sensuri  
- [ ] Mută `despre.html` într-un folder `pagini` și schimbă ambele linkuri ca să meargă din nou  

---

## 5. Linkuri în aceeași pagină și e-mail

### Exemplul 7 — Link spre un loc din aceeași pagină

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

### Exemplul 8 — Link „Sus”

```html
<h1 id="sus">Pagina mea</h1>
...
<p><a href="#sus">↑ Înapoi sus</a></p>
```

Pui `id="sus"` pe primul titlu și un link `#sus` la finalul paginii. E util când pagina e lungă.

### Exemplul 9 — Link pentru e-mail

```html
<p>Scrie un mesaj la <a href="mailto:ana@example.com">ana@example.com</a>.</p>
```

Un link care începe cu `mailto:` deschide programul de e-mail al calculatorului, cu adresa deja completată. Adresa `example.com` este una **de probă**, care nu aparține nimănui.

> **Atenție:** într-o pagină publică nu pune adresa ta reală de e-mail. Pentru exercițiile noastre folosește o adresă de probă.

**Încearcă tu (4 min)**  
- [ ] Fă o pagină cu trei titluri `<h2>`, cu `id` pe fiecare, și un mic cuprins cu trei linkuri `#`  
- [ ] Adaugă un link „↑ Înapoi sus” la final  

---

## 6. Mini-proiect

### Exemplul 10 — „Colecția mea de linkuri”

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

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Colecția mea de linkuri” (obligatoriu)
Fă un mic site cu două pagini:
- `index.html` cu un `<h1>`, **cel puțin trei** linkuri spre site-uri alese cu profesorul (în filă nouă, cu text care spune unde duc);
- o listă cu buline pentru linkuri;
- un link spre `despre.html` și un link „↑ Înapoi sus”;
- `despre.html` cu scheletul complet, un paragraf despre tine și un link înapoi.

Verifică totul cu Live Server.

### Exercițiul B — Extern sau din folderul meu?
Pentru fiecare adresă, spune dacă duce la un **alt site** sau la o **pagină din folderul tău**: (1) `https://www.nasa.gov`; (2) `galerie.html`; (3) `pagini/hobby.html`; (4) `https://scratch.mit.edu`.

### Exercițiul C — Scrie linkurile
Scrie linkul (cu `<a>` și `href`) pentru: (1) site-ul `https://www.nasa.gov`, în filă nouă; (2) pagina `galerie.html` din același folder; (3) pagina `index.html` aflată cu un folder mai sus.

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
<a href=www.wikipedia.org>Wikipedia</a>
<a href="despre.html">Despre mine
<a href="https://www.nasa.gov" target="blank">NASA</a>
```

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: de ce e mai bine să scrii „site-ul NASA” decât „apasă aici” ca text al unui link?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W1_L5` are `index.html` și `despre.html`  
- [ ] Ai cel puțin trei linkuri spre alte site-uri, în filă nouă, cu text clar  
- [ ] Ai legat cele două pagini între ele și ai un link „↑ Înapoi sus”  
- [ ] Ai răspuns la exercițiile B–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Fă un mini-cuprins în partea de sus a unei pagini lungi, cu linkuri `#` spre fiecare titlu  
- [ ] Adaugă o a treia pagină (`hobby.html`) și adaugă în meniu un link către ea  
- [ ] Pune un link `mailto:` cu o adresă de probă și testează linkul  
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
5. Spre paginile tale: numele fișierului; `pagini/despre.html` merge într-un folder, `../index.html` urcă un folder.  
6. `id="nume"` + `href="#nume"` fac un link în aceeași pagină.  
7. `mailto:` deschide programul de e-mail. Pe internet nu scrii adresa ta reală.

## Quiz scurt
- Care atribut spune unde duce linkul?  
- Ce face `target="_blank"`?  
- Cum faci un link spre `despre.html` din același folder?  
- Ce înseamnă `../` într-o adresă?  
- Cum faci un link care duce la un titlu din aceeași pagină?

## Temă
Fă un mic site cu **două pagini** despre **un subiect pe care îl iubești** (un animal, un sport, un joc): `index.html` cu trei linkuri spre site-uri alese cu un adult și `despre.html`, legate între ele. Pune paginile în folderul `Prenume_Nume_W1_L5`.

## Ce urmează — Lecția 6
Învățăm să punem **imagini** în pagină, să ținem pozele în foldere și să scriem descrieri pentru ele, ca pagina ta să nu mai fie doar text.

---

## Răspunsuri pentru profesor
- **Quiz scurt:** (1) `href`; (2) deschide linkul într-o filă nouă; (3) `<a href="despre.html">Despre mine</a>`; (4) „un folder mai sus” (ieși din folderul curent); (5) dai titlului un `id` (de exemplu `id="hobby"`) și scrii linkul `<a href="#hobby">...</a>`.  
- **Exercițiul B:** (1) alt site; (2) pagină din folderul tău; (3) pagină din folderul tău, într-un subfolder; (4) alt site.  
- **Exercițiul C:** (1) `<a href="https://www.nasa.gov" target="_blank" rel="noopener noreferrer">NASA</a>`; (2) `<a href="galerie.html">Galerie</a>`; (3) `<a href="../index.html">Prima pagină</a>`.  
- **Exercițiul D:** (1) adresa nu are `https://` și nici ghilimele; (2) lipsește `</a>`; (3) `target="blank"` trebuie `target="_blank"`.  
- **Exercițiul E:** textul linkului trebuie să spună unde duce; cititoarele de ecran și cititorii care caută rapid se orientează după el.
