# LECȚIA 1 — Ce e o pagină web? VS Code și Live Server
**Modulul 1 · HTML I: Prima mea pagină · 2 ore**  
**Code Maker Club · HTML Starter**

> Azi afli cum funcționează o pagină web, pregătești programul în care vei scrie cod (**VS Code**) și îți faci **prima pagină**, pe care o vezi chiar în browserul tău!  
> Proiect: **„Prima mea pagină”** · folder: `Prenume_Nume_W1_L1` (ex. `Ana_Pop_W1_L1`)

---

## Obiectiv
La finalul orei știi ce este o pagină web și din ce e făcută, ai VS Code pregătit, ai creat un folder de proiect cu un fișier `index.html` și ți-ai văzut pagina în browser cu **Live Server**.  
**Minim:** o pagină cu scheletul complet și textul „Salut, lume!” care se vede în browser.  
**Ținta orei (Complet):** + un titlu în fila browserului, un titlu mare cu numele tău, trei propoziții despre tine, un comentariu în cod și pagina deschisă cu Live Server.

## De ce contează
Aproape tot ce vezi pe internet, de la jocuri la magazine online, este o pagină web. Orice pagină începe cu un fișier mic de text, scris de cineva ca tine. Azi scrii primul tău fișier și îl vezi „prins la viață” într-un browser.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–20 | Ce e o pagină web: HTML, CSS, JavaScript · cum ajunge o pagină la tine |
| 20–45 | Instalăm sau pornim VS Code · Live Server · folderul de proiect |
| 45–70 | Primul fișier `index.html` cu schelet complet · Live Server (**Exemplele 1–3**) |
| 70–95 | Tag-uri, rânduri noi, comentarii (**Exemplele 4–7**) |
| 95–110 | „Vezi sursa” pe o pagină reală · greșeli (**Exemplele 8–9**) |
| 110–120 | Mini-proiect (**Exemplul 10**), recap și temă |

---

## 1. Ce este o pagină web?

O **pagină web** este un fișier pe care browserul (Chrome, Edge, Firefox, Safari) îl citește și îl desenează pe ecran, cu text, imagini, culori și butoane.

Când scrii o adresă, de exemplu `codemakerclub.ro`, se întâmplă asta:
1. Browserul tău **cere** pagina.
2. Un alt calculator, numit **server**, o **trimite**.
3. Browserul o **citește** și o **afișează**.

Fiecare pagină este făcută din **trei limbaje**, care lucrează împreună. Imaginează un om:

| Limbaj | Ce face | Cum e la un om |
|--------|---------|----------------|
| **HTML** | structura: ce e pe pagină (titluri, text, poze) | **scheletul** |
| **CSS** | aspectul: culori, fonturi, aranjare | **hainele** |
| **JavaScript** | comportamentul: ce se întâmplă la click | **mișcarea** |

În acest modul învățăm **HTML**, scheletul. Hainele (CSS) vin în Modulul 3, iar mișcarea (JavaScript) în Modulul 5.

**Încearcă tu (2 min)**  
- [ ] Deschide o pagină web (de exemplu Wikipedia) și arată unui coleg unde e un titlu, unde e un text și unde e o poză  

---

## 2. Pregătim VS Code

**Visual Studio Code** (pe scurt **VS Code**) este programul în care scriem codul. Îl folosesc și programatorii profesioniști, și este gratuit. Îl descarci de pe **code.visualstudio.com** (cere ajutorul unui adult sau al profesorului). Dacă este deja instalat, sari direct la „Instalăm Live Server”.

Fereastra VS Code are trei zone importante:

| Zonă | Unde e | Ce face |
|------|--------|---------|
| **Explorer** (lista de fișiere) | stânga | arată folderul și fișierele proiectului |
| **Editorul** | mijloc, zona mare | aici **scrii** codul |
| **Bara de jos** | jos | arată informații și, mai târziu, butonul **Go Live** |

### Instalăm Live Server
**Live Server** este o „extensie” (un ajutor pentru VS Code) care deschide pagina în browser și **o reîncarcă singură** de fiecare dată când salvezi.

1. În bara din stânga apasă pe pătrățelele pentru **Extensions** (sau **Ctrl + Shift + X**; pe Mac **Cmd + Shift + X**).  
2. Scrie în căsuță: `Live Server`.  
3. Alege extensia **Live Server** (autor: Ritwick Dey) și apasă **Install**.  

**Gata când:**  
- [ ] VS Code este pornit  
- [ ] Live Server apare în lista extensiilor ca instalat  

---

## 3. Folderul proiectului

Fiecare proiect stă într-un **folder** al lui. Așa nu pierzi fișierele.

1. Pe calculator creează un folder numit `Prenume_Nume_W1_L1` (de exemplu într-un dosar `Web`).  
2. În VS Code: **File → Open Folder…** și alege folderul tău.  
3. Când te întreabă „Do you trust the authors…?”, apasă **Yes, I trust the authors**.  
4. În Explorer, lângă numele folderului, apasă pe iconița **New File** (hârtie cu +).  
5. Scrie numele: `index.html` și apasă Enter.  

> Fișierele HTML se termină cu `.html`. Numele `index.html` este special: este „pagina de început” a oricărui site.  
> **Fără spații, fără diacritice și fără majuscule** în numele fișierelor. Folosește litere mici, cifre, `-` sau `_`.

> **Pe Windows:** dacă nu vezi terminațiile fișierelor (`.html`), deschide File Explorer → **View → Show → File name extensions**.

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W1_L1` este deschis în VS Code  
- [ ] Vezi fișierul `index.html` în Explorer  

---

## 4. Prima pagină

### Exemplul 1 — Prima pagină completă

Deschide `index.html` (încă gol). VS Code te poate ajuta să scrii scheletul unei pagini:
1. Scrie în fișier semnul exclamării: `!`  
2. Apasă tasta **Tab**.  
3. Apare tot scheletul. Dacă nu apare, copiază scheletul de mai jos.  

Pune textul tău în interiorul `<body>` și schimbă titlul, așa:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Prima mea pagină</title>
</head>
<body>
  <p>Salut, lume!</p>
</body>
</html>
```

Apasă **Ctrl + S** (pe Mac **Cmd + S**) ca să salvezi.

Ce înseamnă fiecare parte (în lecția 2 le exersăm una câte una):

| Parte | Ce face |
|-------|---------|
| `<!DOCTYPE html>` | îi spune browserului: „Asta e o pagină HTML modernă” |
| `<html lang="ro">` | învelișul întregii pagini; `ro` = limba română |
| `<head>` | informații **despre** pagină, care nu apar în ea |
| `<meta charset="UTF-8">` | face ca literele ă, â, î, ș, ț să se vadă corect |
| `<meta name="viewport" ...>` | ajută pagina să arate bine și pe telefon (îl folosim mai târziu) |
| `<title>` | numele paginii, care apare **în fila browserului** |
| `<body>` | tot ce se vede **în pagină**: text, imagini, butoane |

> **Regula azi:** tot ce vrei să se vadă în pagină scrii **între `<body>` și `</body>`**. Restul rămâne neatins.

Ce ai scris în `<body>`:
- `<p>` este un **tag de deschidere** (spune „începe un paragraf”).  
- `Salut, lume!` este **conținutul**, adică ce vede cel care deschide pagina.  
- `</p>` este **tagul de închidere** (spune „aici se termină paragraful”). Are o liniuță înclinată în plus.  

**Gata când:**  
- [ ] Scheletul e în `index.html`, cu `<title>` „Prima mea pagină”  
- [ ] `<p>Salut, lume!</p>` este între `<body>` și `</body>`  
- [ ] Ai salvat cu **Ctrl + S**  

### Exemplul 2 — O vedem în browser cu Live Server

1. În Explorer, apasă **click dreapta** pe `index.html`.  
2. Alege **Open with Live Server**.  
3. Se deschide browserul, cu adresa `127.0.0.1:5500` sau `localhost:5500`. Vezi **Salut, lume!** pe ecran.  

> Adresa aceea este calculatorul tău, nu internetul. Pagina este vizibilă doar pe computerul tău, cât timp Live Server rulează.

Dacă preferi, în bara de jos din VS Code apare și butonul **Go Live**, care face același lucru.

**Gata când:**  
- [ ] Ai deschis pagina cu Live Server și vezi „Salut, lume!”  
- [ ] În fila browserului vezi titlul „Prima mea pagină”  

### Exemplul 3 — Schimbăm și salvăm

Lasă browserul lângă VS Code. Schimbă textul din `<body>` în:

```html
<p>Salut! Eu sunt Ana și învăț HTML.</p>
```

Salvează cu **Ctrl + S**. Browserul **se schimbă singur**, fără să apeși nimic.

> **Regula de aur:** dacă nu salvezi, nu se vede nimic nou. Un cerc alb lângă numele fișierului, în partea de sus, înseamnă „nesalvat”. Poți porni **File → Auto Save** ca să se salveze singur.

**Încearcă tu (3 min)**  
- [ ] Schimbă textul în numele tău, salvează și vezi că pagina se schimbă singură  
- [ ] Schimbă `<title>` și vezi numele nou în fila browserului  

---

## 5. Tag-uri, rânduri și comentarii

De aici înainte, exemplele arată doar ce scrii **în interiorul `<body>`**. Scheletul de mai sus rămâne în jurul lor.

### Exemplul 4 — Mai multe paragrafe

```html
<p>Mă cheamă Ana.</p>
<p>Am zece ani.</p>
<p>Îmi plac pisicile.</p>
```

Fiecare `<p>` face un **paragraf nou**, cu puțin spațiu între ele.

### Exemplul 5 — Un titlu mare: `<h1>`

```html
<h1>Despre mine</h1>
<p>Mă cheamă Ana.</p>
```

`<h1>` este cel mai mare titlu din pagină. Conține și el text, între tagul de deschidere și cel de închidere. Despre titluri vei afla mai multe în lecția 3.

### Exemplul 6 — Atenție: Enter nu face rând nou!

```html
<p>Prima linie
A doua linie
A treia linie</p>
```

În browser, cele trei rânduri apar **una după alta, pe aceeași linie**. HTML ignoră Enter-urile și spațiile în plus. Pentru un rând nou, ai nevoie de un tag. Un tag simplu este `<br>` („break”, adică „rupe rândul”). El **nu are tag de închidere**:

```html
<p>Prima linie<br>
A doua linie<br>
A treia linie</p>
```

### Exemplul 7 — Comentarii

Un **comentariu** este o notiță pentru tine, pe care browserul o ignoră. Se scrie între `<!--` și `-->`:

```html
<!-- Aici începe pagina mea -->
<h1>Despre mine</h1>
<!-- Mai jos scriu despre mine -->
<p>Mă cheamă Ana.</p>
```

Comentariile **nu apar** în pagină. Te ajută să nu te încurci când codul crește.

**Încearcă tu (5 min)**  
- [ ] Scrie Exemplul 5 (`<h1>`) și Exemplul 6 (fără și cu `<br>`) și compară rezultatele  
- [ ] Adaugă un comentariu și verifică că nu apare în pagină  

---

## 6. Cum arată paginile reale?

### Exemplul 8 — „Vezi sursa” pe o pagină reală

Orice pagină din lume își arată codul HTML. Încearcă:
1. Deschide o pagină simplă, de exemplu `example.com`.  
2. Apasă **Ctrl + U** (pe Mac **Cmd + Option + U**).  
3. Se deschide o filă cu **codul paginii**. Caută `<h1>` și `<p>`: sunt aceleași tag-uri pe care le-ai scris azi!  

Poți deschide și **DevTools** cu **F12** (pe Mac **Cmd + Option + I**). Mai târziu o să folosești DevTools des.

> Poți **doar să te uiți** la codul altor pagini. Nu schimbi nimic pe internet.

### Exemplul 9 — Ce se întâmplă când greșim?

Scrie un tag de închidere **fără liniuța înclinată**:

```html
<h1>Salut, lume!<h1>
<p>Eu sunt Ana.</p>
```

Salvează. Browserul nu spune „ai greșit”; el doar încearcă să se descurce. Aici, **textul de după titlu devine și el mare**, pentru că primul `<h1>` nu s-a închis cum trebuie.

Reparația: schimbă al doilea `<h1>` în `</h1>`, salvează și pagina revine la normal.

> Dacă pagina nu arată cum vrei: **verifică dacă fiecare tag deschis are și tagul lui de închidere** (cu `/`) și dacă ai **salvat**.

**Încearcă tu (4 min)**  
- [ ] Găsești `<h1>` în „Vezi sursa” pe `example.com`  
- [ ] Strici un tag intenționat, vezi ce se întâmplă și îl repari  

---

## 7. Mini-proiect

### Exemplul 10 — „Prima mea pagină”

```html
<!-- Prima mea pagină · Ana Pop -->
<h1>Ana Pop</h1>
<p>Am zece ani și locuiesc în Cluj.</p>
<p>Îmi place să desenez și să mă joc cu pisica.</p>
<p>Vreau să învăț să fac site-uri web.</p>
```

Pagina ta trebuie să arate ca un mic „cap de pagină” despre tine: un titlu mare cu numele tău și trei propoziții.

> Dacă ai terminat, alege un coleg și arată colegului pagina: ce observă primul?

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Prima mea pagină” (obligatoriu)
Scrie în `index.html`, pe scheletul complet (între `<body>` și `</body>`):
- un `<title>` cu numele paginii tale,
- un `<h1>` cu **numele tău**,
- **trei** paragrafe `<p>` despre tine,
- **un comentariu** cu numele tău și data de azi.

Deschide pagina cu **Live Server** și verifică în browser.

### Exercițiul B — Ce vede browserul?
Fără să rulezi, spune ce apare în browser:

```html
<h1>Salut</h1>
<!-- Nu mă vede nimeni -->
<p>Lume</p>
```

### Exercițiul C — Rând nou
Scrie o poezie de patru versuri într-un singur `<p>`, cu fiecare vers pe rând nou (folosește `<br>`).

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```html
<h1>Pisica mea<h1>
<p>Se numește Mițu.
<p>Doarme toată ziua.<\p>
```

### Exercițiul E — Explică cu cuvintele tale
Pe foaie, în două propoziții: ce face HTML, ce face CSS și ce face JavaScript?

**Gata când:**  
- [ ] Folderul și fișierul se numesc corect: `Prenume_Nume_W1_L1` și `index.html`  
- [ ] Pagina are scheletul complet și un `<title>`  
- [ ] Are un `<h1>` cu numele tău și 3 paragrafe  
- [ ] Are un comentariu în cod  
- [ ] Se vede în browser, cu Live Server pornit  
- [ ] Ai răspuns la exercițiile B–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Scrie despre **mâncarea ta preferată** în trei paragrafe  
- [ ] Deschide DevTools cu **F12** și caută paragraful tău în fila **Elements**  
- [ ] Deschide „Vezi sursa” (Ctrl + U) pe o pagină de pe internet și găsește tagul `<title>`  

---

## Greșeli frecvente
1. **Fișierul e salvat ca `index.html.txt`** — pe Windows apare ascuns `.txt`. Activează afișarea extensiilor și redenumește fișierul.  
2. **Nu ai salvat** — apasă **Ctrl + S**; fără salvare, browserul rămâne neschimbat.  
3. **Ai pus spații sau diacritice în numele fișierului** — `pagina mea.html` poate da probleme. Folosește `pagina-mea.html`.  
4. **Live Server nu pornește** — verifică dacă ai deschis **folderul** (File → Open Folder), nu doar un fișier.  
5. **Ai scris textul în afara `<body>`** — în `<head>` nu apare nimic în pagină.
6. **Ai uitat tagul de închidere** — `<p>` fără `</p>`.  
7. **Ai scris `<\p>` în loc de `</p>`** — liniuța înclinată este `/`, ca în „și/sau”.  
8. **Ai crezut că Enter face rând nou** — folosește `<br>` sau un nou `<p>`.  

---

## Recapitulare pe scurt
1. O pagină web e un fișier citit de **browser**.  
2. **HTML** = scheletul, **CSS** = aspectul, **JavaScript** = mișcarea.  
3. Lucrăm în **VS Code**, într-un **folder de proiect**, cu pagina de început `index.html`.  
4. **Live Server** deschide pagina și o reîncarcă la fiecare salvare (**Ctrl + S**).  
5. Un tag are de obicei **deschidere** `<p>` și **închidere** `</p>`.  
6. `<br>` rupe rândul, iar `<!-- -->` este un comentariu.  
7. **Ctrl + U** arată codul unei pagini, iar **F12** deschide DevTools.

## Quiz scurt
- Cum se numește programul în care scriem codul?  
- Ce limbaj dă pagina „scheletul”?  
- Unde scrii textul care se vede în pagină: în `<head>` sau în `<body>`?  
- Ce face `</p>`?  
- De ce nu se schimbă pagina când scrii ceva nou în cod?  
- Cum faci un rând nou într-un paragraf?

## Temă
Fă o pagină `index.html` despre **animalul tău preferat** (sau despre un loc unde ai fost): un `<h1>`, patru paragrafe și un comentariu. Salvează pagina în folderul `Prenume_Nume_W1_L1` și adu pagina la ora următoare.

## Ce urmează — Lecția 2
Cunoaștem **scheletul folosit azi**, bucată cu bucată: `html`, `head`, `body`, `title` și `meta`. Înveți de ce există fiecare și cum scrii scheletul și fără ajutorul `!` + Tab.

---

## Răspunsuri
- **Quiz scurt:** (1) VS Code (Visual Studio Code); (2) HTML; (3) în `<body>`; (4) este tagul de închidere: spune că paragraful se termină aici; (5) pentru că nu ai salvat fișierul (**Ctrl + S**); (6) cu `<br>` sau cu un `<p>` nou, pentru că Enter nu face rând nou în HTML.  
- **Dacă ritmul clasei este lent:** puteți sări peste Exemplul 8 („Vezi sursa”) și peste partea cu F12; se pot face la lecția următoare sau ca bonus.  
- **Exercițiul B:** `<h1>Salut</h1>` apare ca titlu mare cu textul „Salut”; comentariul nu apare deloc în pagină; `<p>Lume</p>` apare dedesubt ca paragraf cu textul „Lume”.  
- **Exercițiul C:** un singur `<p>` cu patru versuri, fiecare urmat de `<br>` (în afară de ultimul), de exemplu `<p>Plouă mărunt peste sat,<br>Eu scriu cod și sunt încântat,<br>Pagina mea e gata azi,<br>Hai să o vedem, copii!</p>`; orice poezie de patru versuri, fiecare pe rând nou, este acceptată.  
- **Exercițiul D:** (1) `<h1>Pisica mea<h1>` trebuie să se închidă cu `</h1>`; (2) lipsește `</p>` după „Se numește Mițu.”; (3) `<\p>` trebuie scris `</p>` (liniuța înclinată este `/`).  
- **Exercițiul E:** HTML face structura paginii (scheletul: titluri, text, poze); CSS face aspectul (culori, fonturi, aranjare); JavaScript face comportamentul (ce se întâmplă la click).  
