# LECȚIA 10 — Pagina a doua
### Proiect: două pagini, un singur stil
**Modulul 3 · CSS: Stil și culoare · 2 ore**  
**Code Maker Club · CSS Stylist**

> Ai învățat selectori, culori, text, cutii, Flexbox, Grid, efecte, animații și adaptare la telefon. Azi le folosești **singur**, la o provocare: faci o **a doua pagină**, `galerie.html`, cu același `stil.css`. Nu mai primești CSS gata scris. Primești un schelet de HTML și o fișă cu cerințe, iar restul îl construiești tu, cu ce ai învățat în Modulul 3.  
> Proiect: **„Pagina a doua”** · folder: `Prenume_Nume_W3_L10` (ex. `Ana_Pop_W3_L10`)

---

## Ce facem azi
La final ai **două pagini** pe subiectul tău, `tema.html` și `galerie.html`, legate între ele prin meniu și stilizate de **același** `stil.css`. Pagina a doua are șase carduri într-o grilă, un efect la `:hover`, o animație blândă, adaptare la telefon și o **dispoziție proprie**, cu altă culoare de accent. Un singur fișier de stil poate îmbrăcia mai multe pagini: schimbi o culoare și se schimbă pe amândouă. Este și o dovadă că ai înțeles Modulul 3: nu copiezi, ci construiești.

---

## Siguranță înainte de toate
- Pagina a doua este despre **același subiect** ca `tema.html` (un animal, un loc sau un hobby, nu o persoană).  
- Nu scrii date personale (nume complet, adresă, școală, telefon).  
- Pozele sunt făcute de tine sau alese cu profesorul; poți folosi și emoticoane, care nu cer fișiere. Nu luăm poze din internet.  
- Animațiile sunt **blânde**, fără licăriri rapide, iar pagina respectă `prefers-reduced-motion`.  
- Fonturile sunt cele din sistem, fără fișiere sau linkuri externe.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Fișa cu cerințe · planul paginii a doua (**Exemplul 1**) |
| 15–30 | `stil.css` pus în ordine (**Exemplul 2**) |
| 30–45 | Scheletul paginii `galerie.html` · legătura între pagini (**Exemplul 3**) |
| 45–70 | Cele șase carduri în grilă (**Exemplul 4**) |
| 70–85 | Dispoziția paginii a doua, cu variabile (**Exemplul 5**) |
| 85–97 | Efect, animație și telefon (**Exemplul 6**) |
| 97–107 | Verificare cu lista (**Exemplul 7**) |
| 107–117 | Test cu un coleg · prezentare de un minut (**Exemplul 8**) |
| 117–120 | Recap și temă |

---

## Instrucțiuni noi azi

Azi nu învățăm instrucțiuni noi, cu două excepții mici. Folosim lecțiile din tot modulul:

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `<body class="galerie">` | Dă paginii a doua o clasă proprie | în `galerie.html` |
| `body.galerie { --accent: …; }` | Schimbă o culoare din paletă doar pe pagina a doua | Exemplul 5 |

| Din lecția | Folosim |
|------------|---------|
| 1–2 | `<link>`, selectori, variabile în `:root`, `rgba()` |
| 3–4 | fonturi cu rezervă, `box-sizing`, `border-radius`, `box-shadow` |
| 5–6 | Flexbox, Grid, `sticky` |
| 7–9 | `:hover`, `transition`, `@keyframes`, `@media`, `prefers-reduced-motion` |

---

## 1. Planul

### Exemplul 1 — Fișa cu cerințe

Pagina a doua se numește `galerie.html`. Iată fișa cu cerințe; o citești, apoi o copiezi într-un comentariu, în `stil.css`, ca să o ai la îndemână:

```text
Pagina a doua: galerie.html (același subiect ca tema.html)

1. Aceleași antet, meniu și subsol ca pe tema.html
2. Șase carduri, fiecare cu: un titlu, o propoziție, o emoticoană sau o poză
3. Cardurile în grilă: 3 coloane pe calculator, 1 coloană pe telefon
4. Un efect la :hover și o animație blândă pe carduri
5. O dispoziție proprie: altă culoare de accent doar pe această pagină
6. Meniul are legătură spre cealaltă pagină, în ambele pagini
7. Pagina respectă prefers-reduced-motion și se vede bine pe telefon
```

Alege acum **șase lucruri** despre subiectul tău, câte unul pentru fiecare card (de exemplu șase animale, șase locuri, șase trucuri).

**Încearcă tu (8 min)**  
- [ ] Creează folderul `Prenume_Nume_W3_L10` ca o **copie** a folderului `Prenume_Nume_W3_L9` (cu `tema.html`, `stil.css`, `imagini`, `media`)  
- [ ] Copiază fișa cu cerințe într-un comentariu la începutul lui `stil.css`  
- [ ] Notează într-un comentariu cele șase lucruri pentru carduri  

---

## 2. `stil.css` în ordine

### Exemplul 2 — Un fișier, șase secțiuni

`stil.css` a crescut lecție cu lecție. Azi îl pui în **ordine**, ca să știi unde adaugi regulile paginii a doua. Împarte-l în secțiuni, cu comentarii:

```css
/* 1. Paleta */
/* 2. Pagina și textul */
/* 3. Antetul, bannerul și meniul */
/* 4. Capitolele, cardurile și cutiile */
/* 5. Efectele și animațiile */
/* 6. Telefonul (@media, mereu la sfârșit) */
```

Regulile noi pentru galerie le pui în secțiunile potrivite (cardurile în a patra, efectele în a cincea), iar `@media` rămâne **la sfârșit**. Verifică și că în `tema.html` ai `<meta name="viewport" …>` în `<head>` și că nu a mai rămas niciun `<style>`.

**Încearcă tu (7 min)**  
- [ ] Împarte `stil.css` în cele șase secțiuni, cu comentarii  
- [ ] Verifică dacă toate culorile sunt în variabilele din `:root`  
- [ ] Verifică dacă `@media` este ultimul din fișier  

**Gata când:**  
- [ ] `stil.css` are secțiuni marcate prin comentarii  
- [ ] Ai paleta în `:root`, iar `@media` este la sfârșit  

---

## 3. Scheletul paginii a doua

### Exemplul 3 — `galerie.html` și legătura între pagini

Creează în același folder un fișier nou, `galerie.html`, și copiază în el scheletul. Observă că are același `<link>`, același antet, același meniu și același subsol ca prima pagină, plus o clasă pe `<body>`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Galeria mea</title>
  <link rel="stylesheet" href="stil.css">
</head>
<body class="galerie">
  <header>
    <h1 id="titlu-pagina">Galeria mea</h1>
    <p>Șase lucruri despre subiectul meu</p>
  </header>

  <nav>
    <ul>
      <li><a href="tema.html">Articolul</a></li>
      <li><a href="galerie.html">Galeria</a></li>
    </ul>
  </nav>

  <main class="carduri">
    <!-- aici pui cele șase carduri -->
  </main>

  <footer>
    <p>Pagină făcută la Code Maker Club</p>
  </footer>
</body>
</html>
```

- `href="stil.css"` îi dă paginii a doua **același** stil, fără să scrii nimic nou;  
- `class="galerie"` pe `<body>` o să ne ajute în Exemplul 5, ca să dăm acestei pagini o dispoziție proprie;  
- `main class="carduri"` este locul cardurilor;  
- în `tema.html` adaugă și tu, în meniu, un link spre `galerie.html` (`<li><a href="galerie.html">Galeria</a></li>`), ca să poți merge de pe o pagină pe alta.

Schimbă titlul și textul din antet cu ale tale. Deschide `galerie.html` cu Live Server: ar trebui să arate deja ca prima pagină, cu același antet și același meniu, dar fără carduri.

**Încearcă tu (8 min)**  
- [ ] Creează `galerie.html` din schelet și scrie titlul tău în antet  
- [ ] Adaugă în meniul din `tema.html` un link spre `galerie.html`  
- [ ] Deschide ambele pagini și mergi de pe una pe alta cu meniul  

**Gata când:**  
- [ ] `galerie.html` arată ca prima pagină (același antet, meniu și subsol)  
- [ ] Meniul duce de pe o pagină pe cealaltă, în ambele sensuri  

---

## 4. Cardurile

### Exemplul 4 — Șase carduri în grilă

Aici construiești **singur**. Nu primești cod. Ai nevoie de ce știi din lecțiile 4 și 6:

1. În `<main class="carduri">`, scrie șase carduri. Fiecare card este un `<article class="card">` cu un titlu (`<h2>`), o propoziție (`<p>`) și o emoticoană sau o poză.  
2. În `stil.css` scrie regulile pentru `.carduri` și `.card`.  

Ce trebuie să iasă:
- cardurile stau într-o **grilă cu trei coloane**, cu `gap` între ele (`main` este deja grilă din Lecția 6, deci trebuie să schimbi doar coloanele);  
- grila este într-o coloană centrată, cu `max-width` (Lecția 4), fiindcă aici nu ai `.pagina`;  
- fiecare card are chenar, colțuri rotunjite, umbră și `padding` (Lecția 4);  
- textele din carduri se citesc ușor.

> Ajutor: dacă nu știi cum, caută în lecțiile 4 (cutii) și 6 (grilă). Poți deschide lecțiile vechi, iar codul tău din `tema.html` te ajută.

**Încearcă tu (20 min)**  
- [ ] Scrie cele șase carduri în `galerie.html`, cu textele tale  
- [ ] Pune cele trei coloane și `gap` pe `.carduri`  
- [ ] Dă cardurilor chenar, colțuri rotunjite, umbră și `padding`  

**Gata când:**  
- [ ] Ai șase carduri, în trei coloane, cu spațiu între ele  
- [ ] Cardurile au chenar, colțuri rotunjite și umbră  

---

## 5. Dispoziția paginii

### Exemplul 5 — Altă culoare, aceeași paletă

Pagina a doua poate avea alt „caracter” fără să atingi regulile de mai sus. Folosim clasa de pe `<body>` și **variabilele** din Lecția 2:

```css
body.galerie {
  --accent: teal;
  --fundal: #fff8e7;
}
```

Variabilele scrise în `body.galerie` **înlocuiesc** pe cele din `:root`, dar **doar** pentru pagina care are `class="galerie"` pe `<body>`. Toate regulile care folosesc `var(--accent)` și `var(--fundal)` (bannerul, linkurile, fundalul paginii) se colorează singure, fără să rescrii nimic. Prima pagină rămâne neschimbată.

Alege **tu** culorile paginii a doua (două variabile sunt de ajuns) și ai grijă ca textul să se vadă pe fundal.

**Încearcă tu (8 min)**  
- [ ] Scrie în `stil.css`, în prima secțiune, o regulă `body.galerie` cu două variabile ale tale  
- [ ] Compară cele două pagini: prima pagină s-a schimbat? A doua?  
- [ ] Strânge ochii și verifică dacă textul se citește pe noul fundal  

**Gata când:**  
- [ ] Pagina a doua are altă culoare de accent și alt fundal  
- [ ] Prima pagină arată la fel ca înainte  

---

## 6. Efect, animație, telefon

### Exemplul 6 — Cardurile prind viață și se adaptează

Aici construiești tot **singur**, cu ce știi din lecțiile 7, 8 și 9:

1. un efect la `:hover` pe carduri, cu `transition` pe starea normală (Lecția 7);  
2. o animație blândă de apariție pe carduri, cu `@keyframes` (Lecția 8). Poți refolosi rețeta `aparitie` pe care o ai deja;  
3. pe telefon, cardurile stau într-o singură coloană (Lecția 9);  
4. cardurile sunt incluse în regula `prefers-reduced-motion`, ca să se oprească mișcarea pentru cine o cere.

Fii atent la două capcane:
- regula `@media` o scrii **pe `.carduri`**, nu pe `main`: o regulă de clasă bate una de tag, deci altfel cardurile rămân pe trei coloane;  
- `transition` și `animation` se scriu **o singură dată** pe `.card`.

**Încearcă tu (12 min)**  
- [ ] Fă cardurile să se ridice lin la `:hover`  
- [ ] Adaugă animația de apariție și include `.card` în regula `prefers-reduced-motion`  
- [ ] Adaugă în `@media (max-width: 600px)` o singură coloană pentru `.carduri`, apoi verifică în DevTools, în modul telefon  

**Gata când:**  
- [ ] Cardurile se ridică lin la `:hover` și apar blând la încărcare  
- [ ] Pe telefon, cardurile stau într-o singură coloană  
- [ ] Regula `prefers-reduced-motion` include cardurile  

---

## 7. Verificarea

### Exemplul 7 — Lista de verificare

Bifează fiecare punct, pe **ambele** pagini:

```text
□ Ambele pagini folosesc același stil.css, cu <link> în <head>, fără <style>
□ Meniul duce de pe o pagină pe cealaltă
□ Am o paletă în variabile (:root) și o dispoziție proprie pentru pagina a doua
□ Textul se citește ușor pe fundal (culori și mărimi bune)
□ Pagina a doua are șase carduri, în trei coloane, cu chenar, colțuri rotunjite și umbră
□ Am un efect la :hover cu transition și o animație blândă
□ Am regula prefers-reduced-motion, iar cardurile sunt incluse
□ Pe telefon, cardurile stau pe o singură coloană
□ Nu apare derulare pe orizontală pe telefon
□ Am comentarii în CSS și codul este indentat
□ Nu am date personale în pagini
```

Dacă un punct nu este bifat, repară înainte să prezinți.

**Încearcă tu (8 min)**  
- [ ] Parcurge lista punct cu punct, pe ambele pagini  
- [ ] Repară fiecare punct nebifat  
- [ ] Apasă fiecare link din meniu, pe ambele pagini, și verifică dacă duce unde trebuie  

---

## 8. Prezentarea

### Exemplul 8 — Prezentarea de un minut

Spune colegilor, în ordine:
1. „Paginile mele sunt despre …”  
2. „Am ales culorile … pentru că …”  
3. „Pagina a doua are altă dispoziție pentru că …”  
4. „Cel mai mândru sunt de …” (o parte a paginilor)  
5. „Cel mai greu mi s-a părut …, iar soluția a fost: …”  
6. „Pe telefon paginile arată așa: …” (arată ecranul în DevTools)

Colegul care ascultă îți spune **un lucru reușit** și **un lucru care se poate îmbunătăți** (cu politețe).

**Încearcă tu (8 min)**  
- [ ] Scrie într-un comentariu cele șase propoziții pentru prezentare  
- [ ] Exersează prezentarea o dată, singur, cu ceasul  
- [ ] Prezintă colegului și ascultă ce lucru reușit și ce îmbunătățire îți spune  

**Gata când:**  
- [ ] Ai bifat toate punctele din listă  
- [ ] Ai testat paginile cu un coleg  
- [ ] Ai făcut prezentarea de un minut  

---

## De făcut azi — „Pagina a doua”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | `galerie.html` legată la `stil.css`, cu șase carduri într-o grilă, și un meniu care duce de pe o pagină pe cealaltă |
| **Complet** | Minim + trei coloane pe calculator și una pe telefon, efect la `:hover` și animație blândă, dispoziție proprie cu variabile în `body.galerie`, `prefers-reduced-motion`, comentarii și cod indentat, verificare pe telefon în DevTools și o prezentare de un minut |

### Pasul 1 — Minim
Pornești de la `tema.html` și `stil.css` (copiate în folderul nou) și adaugi pagina a doua.

- [ ] Folderul `Prenume_Nume_W3_L10` are `tema.html`, `galerie.html`, `stil.css` și folderele de imagini  
- [ ] `galerie.html` are `<link>` către `stil.css`, iar `<style>` nu mai există nicăieri  
- [ ] Ai șase carduri într-o grilă  
- [ ] Meniul duce de pe o pagină pe cealaltă  

### Pasul 2 — Complet
Îmbunătățești paginile:

- [ ] Cardurile sunt în trei coloane pe calculator și într-una pe telefon  
- [ ] Ai efect la `:hover` cu `transition` și o animație blândă  
- [ ] Ai o dispoziție proprie pentru pagina a doua, cu variabile în `body.galerie`  
- [ ] Ai regula `prefers-reduced-motion` la sfârșit, cu cardurile incluse  
- [ ] Ai comentarii și cod indentat  
- [ ] Ai verificat paginile pe telefon în DevTools și ai făcut prezentarea de un minut  

---

## Bonus ★★★ — Provocare: A treia pagină și butonul „Sus”
*Doar dacă ai terminat Complet.*

Faci site-ul mai mare, tot cu același `stil.css`.

- [ ] Adaugă o a treia pagină, `despre.html`, cu antet, meniu cu toate cele trei pagini, un titlu și două paragrafe  
- [ ] Adaugă un buton „Sus” fix, în colțul din dreapta jos (cu `position: fixed;`), pe toate paginile  
- [ ] Fă o dispoziție **întunecată** pentru `despre.html`: `body.intunecat { --fundal: #1b2f3b; --text: #eaf4f8; }`  
- [ ] Adaugă un `@media (max-width: 900px)` pentru tabletă, care pune cardurile pe două coloane  

---

## Greșeli frecvente
1. **Ai uitat `<link rel="stylesheet" href="stil.css">` în `galerie.html`** — pagina a doua apare fără stil.  
2. **Linkul dintre pagini duce nicăieri** — fișierele trebuie să fie în același folder, iar `href` scris exact (`galerie.html`).  
3. **Cardurile rămân pe trei coloane pe telefon** — ai scris regula `@media` pe `main`, nu pe `.carduri`; clasa bate tagul.  
4. **Dispoziția nu se vede** — ai uitat `class="galerie"` pe `<body>`.  
5. **Ai schimbat culoarea și pe prima pagină** — ai scris variabilele în `:root`, nu în `body.galerie`.  
6. **Ai scris `var(culoare)`** în loc de `var(--culoare)` — numele variabilei începe cu două liniuțe.  
7. **Ai scris `transition: transform 0.3;`** — lipsește `s`.  
8. **`transition` sau `animation` scrise de două ori** pe `.card` — a doua o înlocuiește pe prima.  

---

## Recapitulare pe scurt
1. Un singur `stil.css`, legat cu `<link>`, poate îmbrăca mai multe pagini.  
2. Paleta se ține în variabile (`:root`), iar o pagină își poate schimba o variabilă cu o clasă pe `<body>`.  
3. Cardurile se fac cu Grid (`repeat(3, 1fr)`), cu chenar, colțuri rotunjite și umbră.  
4. `:hover` plus `transition` dau viață paginii; animațiile sunt puține și blânde.  
5. `@media` se scrie la sfârșit și pe același selector ca regula pe care o schimbă.  
6. `prefers-reduced-motion` face pagina prietenoasă pentru toți.

## Quiz scurt
- Cum primește `galerie.html` același stil ca `tema.html`?  
- Cum schimbi culoarea de accent doar pe pagina a doua?  
- Cum pui cardurile în trei coloane?  
- De ce rămân cardurile pe trei coloane pe telefon dacă scrii `@media` pe `main`?  
- Ce faci pentru cine nu vrea mișcare pe ecran?

## Temă
1. Arată paginile unui membru al familiei, pe calculator și pe telefon, și întreabă ce a plăcut persoanei cel mai mult. Notează răspunsul într-un comentariu și, dacă vrei, fă o îmbunătățire.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Un antet cu degrade.**

```css
header {
  background: linear-gradient(135deg, var(--principala), var(--accent));
}
```

Pe pagina a doua, degradeul se schimbă singur, pentru că `--accent` are altă valoare în `body.galerie`.

**Acasă 2 — Linkuri cu subliniere la `:hover`.**

```css
a {
  text-decoration: none;
}

a:hover,
a:focus {
  text-decoration: underline;
}
```

Linkurile par curate și arată sublinierea doar când le atingi.

4. **Încă patru exerciții (B–E):**

**B — Autoevaluare.** Într-un comentariu din cod, notează de la 1 la 5 cât de bine ai înțeles fiecare lecție din modul (selectori, culori, text, cutii, Flexbox, Grid și `sticky`, `:hover` și submeniu, animații, telefon). Scrie două lecții pe care vrei să le mai repeți.

**C — Găsește greșelile.** Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
.carduri {
  display: grid;
  grid-template-columns: repeat(3, 1 fr);
}

.card {
  background: var(culoare);
  transition: transform 0.3;
}
```

**D — Explică cu cuvintele tale.** Într-un comentariu din cod: de ce este mai bine să ai un singur fișier `stil.css` pentru mai multe pagini? Cum faci ca o pagină să aibă alte culori fără să rescrii regulile? Ce faci ca pagina ta să fie prietenoasă cu cineva care folosește doar tastatura sau cu cineva sensibil la mișcare?

**E — Ce urmează.** Scrie într-un comentariu două lucruri pe care ai vrea ca paginile tale să le facă singure (de exemplu să numere sau să răspundă la apăsarea unui buton). În Modulul 4 începem JavaScript.

## Ce urmează — Modulul 4
Începem **JavaScript**: paginile tale nu doar arată frumos, ci și **fac lucruri**: răspund la apăsări, calculează și își schimbă singure conținutul.

---

## Răspunsuri
- **Quiz scurt:** (1) cu `<link rel="stylesheet" href="stil.css">` în `<head>`, la fel ca prima pagină; (2) scrii variabila în `body.galerie { --accent: …; }`, cu clasa `galerie` pe `<body>`; (3) cu `display: grid;` și `grid-template-columns: repeat(3, 1fr);`; (4) pentru că o regulă de clasă (`.carduri`) bate una de tag (`main`), deci regula din `@media` trebuie scrisă tot pe `.carduri`; (5) pui regula `@media (prefers-reduced-motion: reduce)` care oprește animațiile cu `animation: none;`, cardurile incluse.  
- **Proiectul:** pentru evaluare folosiți lista din Exemplul 7. Minimul de acceptare: `galerie.html` legată la `stil.css`, șase carduri într-o grilă și un meniu care duce de pe o pagină pe cealaltă. Nu cereți animații dacă elevul nu le-a înțeles; contează să nu fie rău făcute. **Nu dați cod de CSS în plus:** dacă un elev se blochează, trimiteți-l la lecția potrivită (4 pentru cutii, 6 pentru grilă, 7 pentru `:hover`, 9 pentru `@media`).  
- **Tema, exercițiul B:** nu are răspuns corect; este pentru elev. Notați lecțiile pe care le cere repetate și reveniți la ele.  
- **Tema, exercițiul C:** (1) `1 fr` trebuie `1fr`; (2) `var(culoare)` trebuie `var(--culoare)`; (3) `transition: transform 0.3;` trebuie `0.3s`.  
- **Tema, exercițiul D:** un singur loc pentru stil, ușor de schimbat pentru mai multe pagini; variabilele schimbate într-o clasă de pe `<body>` recolorează pagina fără să rescrii reguli; `:focus` vizibil, butoane mari, `prefers-reduced-motion`.  
- **Tema, exercițiul E:** nu are răspuns corect; este o pregătire pentru JavaScript. Notați ideile elevilor și reveniți la ele în Modulul 4.  
- **Dacă ritmul clasei este lent:** Exemplul 8 (prezentarea) se poate face în lecția următoare; lista de verificare din Exemplul 7 rămâne obligatorie. Exemplul 5 (dispoziția) se poate face acasă; paginile rămân corecte și cu aceeași paletă.  
- **Notă pentru profesor:** această lecție este un **proiect cu cerințe**, nu o lecție cu exemple de copiat: copilul trebuie să scrie singur cardurile și CSS-ul lor. Dacă un elev nu are `tema.html` completă din Modulul 2, poate porni de la orice pagină cu antet, meniu și 3–4 capitole (un hobby, un sport, un joc); evitați persoane și date personale. Pentru prezentări, alegeți să nu se compare paginile între ele: fiecare spune ce a făcut bine. Dacă lipsesc imagini, cardurile pot fi doar cu text, culori și emoticoane.
