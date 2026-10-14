# LECȚIA 10 — Publicare și prezentare
**Modulul 5 · Site complet: HTML + CSS + JavaScript · 2 ore**  
**Code Maker Club · Web Builder**

> Site-ul tău este făcut și testat. Azi facem ultimii pași: **pregătim fișierele**, aflăm ce înseamnă să pui un site **pe internet** (și când este bine să o faci), exersăm o **prezentare** și facem **bilanțul** modulului. Publicarea se face **numai cu un adult**, după regulile de mai jos.  
> Proiect: **„Site-ul meu, gata de arătat”** · folder: `Prenume_Nume_W5` (varianta finală)

---

## Obiectiv
La finalul orei ai folderul final curat și verificat, ai citit și înțeles regulile publicării în siguranță, ai o prezentare de 3 minute și ai făcut bilanțul modulului.  
**Minim:** folderul final verificat cu lista „înainte de publicare” și o prezentare scurtă a site-ului în fața unui coleg.  
**Ținta orei (Complet):** + folder final cu structura corectă, discuție despre ce înseamnă „public”, decizie luată **împreună cu un adult** (publicăm sau arătăm doar local), prezentare de 3 minute cu demonstrație, feedback de la colegi, autoevaluare pe lista de criterii, plan pentru Modulul 6.

## De ce contează
Un site este făcut ca să fie **văzut**. Dar odată ce este pe internet, îl poate vedea oricine din lume și nu mai ai control complet asupra lui. De aceea învățăm nu doar **cum**, ci și **când** și **cu cine** publici.

---

## Siguranță înainte de toate
- **Publicarea pe internet se face doar cu acordul scris al părintelui sau al tutorelui și cu ajutorul unui adult.** Profesorul poate decide să nu publice niciun site: este în regulă, site-ul se prezintă pe calculator.  
- **Conturile pe serviciile de găzduire le face un adult.** Mai multe servicii cer o vârstă minimă (de exemplu 13 ani sau mai mult) sau acordul părinților. Copiii **nu își fac conturi singuri**.  
- Site-ul nu are **niciun fel de date personale**: nume complet, adresă, școală, telefon, email, poze cu oameni, locul unde stai.  
- Imaginile și textele sunt **ale tale** (sau din pachetul media, cu permisiune).  
- Odată publicat, un site poate fi **găsit de motoare de căutare**, iar cineva poate **salva o copie**. Chiar dacă îl ștergi, copia poate rămâne. De aceea publicăm doar ce nu ar deranja pe nimeni să vadă, oricând.  
- Formularul nostru **nu trimite nimic** și așa rămâne.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Ce am construit în acest modul |
| 10–30 | Folderul final: curățenie și structură (**Exemplul 1**) |
| 30–50 | Lista „înainte de publicare” (**Exemplul 2**) |
| 50–70 | Ce înseamnă „pe internet” și cum se face în siguranță (**Exemplul 3**) |
| 70–95 | Prezentarea de 3 minute (**Exemplul 4**) |
| 95–110 | Feedback și autoevaluare (**Exemplul 5**) |
| 110–120 | Bilanț și Modulul 6 |

---

## 1. Folderul final

### Exemplul 1 — Curățenie și structură

Folderul trebuie să arate exact așa:

```text
Prenume_Nume_W5/
  index.html
  galerie.html
  contact.html
  stil.css
  script.js
  imagini/
    g1.jpg
    g2.jpg
    ... (cele pe care le folosești)
```

Verifică:
- `index.html` este chiar în **rădăcina** folderului (nu într-un subfolder). Serviciile de găzduire caută pagina principală cu acest nume.  
- Nu sunt fișiere în plus: copii vechi (`index copy.html`), fișiere de test, poze nefolosite, fișiere cu date personale.  
- Toate numele sunt cu **litere mici**, fără spații și fără diacritice.  
- Fiecare `src` și fiecare `href` are exact numele fișierului.

**De ce contează literele mici?** Pe calculatorul tău, `Galerie.html` și `galerie.html` pot părea același fișier. **Pe internet**, serverele sunt mai stricte: dacă fișierul se numește `Galerie.html` și linkul scrie `galerie.html`, pagina **nu se mai găsește**. Dacă ai urmat regula „litere mici” de la început, nu ai nicio problemă.

**Încearcă tu (15 min)**  
- [ ] Șterge din folder tot ce nu este în schema de mai sus  
- [ ] Verifică literă cu literă numele fișierelor și al linkurilor  
- [ ] Deschide `index.html` și parcurge cele 3 pagini: totul merge?

---

## 2. Lista „înainte de publicare”

### Exemplul 2 — Verificarea finală

Bifează fiecare punct. Dacă un punct nu este bifat, **nu arăți site-ul** înainte să repari problema.

```text
Siguranță
□ Nu există nume complet, adresă, școală, telefon, email, poze cu oameni
□ Formularul nu cere date personale și nu trimite nimic
□ Imaginile sunt ale mele sau din pachetul media
□ Textele sunt scrise de mine și sunt adevărate

Cod
□ Cele 3 pagini au lang="ro", viewport și un <title> propriu
□ Fiecare pagină are un singur <h1>
□ Fiecare imagine are alt care descrie ce se vede
□ Nu sunt erori în consolă și nici în verificatorul HTML
□ Toate linkurile și imaginile merg

Utilizare
□ Merge pe 375 px (telefon) și pe calculator
□ Merge cu tastatura (Tab, Enter, Escape)
□ Modul întunecat se citește bine
□ Butonul „sus” și meniul de pe telefon merg
```

**Încearcă tu (20 min)**  
- [ ] Bifează lista cu atenție  
- [ ] Cere unui coleg să o verifice și el, independent  
- [ ] Repară ce nu este bifat

---

## 3. Ce înseamnă „pe internet”

### Exemplul 3 — De la folder la adresă web

Un site de pe internet nu este magic: este **același folder** de fișiere, pus pe un calculator special, numit **server**, care este mereu pornit și conectat la internet. Un serviciu de **găzduire** (în engleză, *hosting*) îți dă loc pe un asemenea calculator. Rezultatul este o **adresă web** (URL), de exemplu `https://numele-site-ului.exemplu.ro`.

Site-ul nostru este „**static**”: are doar fișiere HTML, CSS, JavaScript și imagini, fără bază de date. Pentru astfel de site-uri există servicii cu **plan gratuit** (de exemplu GitHub Pages, Netlify sau Cloudflare Pages). Pașii sunt, pe scurt, aceiași la toate:

```text
1. Un ADULT își face (sau folosește) un cont pe serviciul ales.
2. Adultul încarcă folderul site-ului (index.html trebuie să fie în rădăcină).
3. Serviciul dă o adresă web.
4. Deschizi adresa de pe alt calculator și de pe telefon și refaci testele din lecția 9.
5. Adultul poate șterge site-ul oricând.
```

Detaliile exacte (butoane, meniuri) **diferă de la un serviciu la altul și se schimbă în timp**, deci profesorul vă arată pe ecran, la zi, ce faceți.

Reguli de siguranță, **toate** obligatorii:

```text
□ Acord scris de la părinte sau tutore
□ Contul îl face un adult; copilul nu are parolă către cont
□ Adresa site-ului nu conține numele complet al copilului
□ Site-ul a trecut lista „înainte de publicare”
□ Profesorul a văzut site-ul și a spus „da”
□ Se știe cine îl poate șterge, și cum
```

Dacă oricare punct lipsește, **nu publicăm**. Site-ul se prezintă local și se păstrează în folder. Asta nu este o pierdere: ai învățat exact aceleași lucruri.

**Încearcă tu (20 min)**  
- [ ] Citește tare regulile de siguranță și explică unui coleg de ce fiecare este importantă  
- [ ] Scrie pe foaie: „Eu aș publica / nu aș publica site-ul meu pentru că …”  
- [ ] Dacă profesorul publică site-uri, urmărește pașii pe proiector, fără să îți faci cont

---

## 4. Prezentarea de 3 minute

### Exemplul 4 — Povestea site-ului

Pregătește o prezentare în care **arăți** site-ul, nu doar vorbești despre el. Ordinea:

```text
1. (20 s)  „Site-ul meu se numește … și este despre …, pentru că …”
2. (60 s)  Demonstrație: meniu → carduri → galerie (imaginea mărită) → formular (o eroare, apoi un mesaj corect)
3. (30 s)  „Detaliile mele: modul întunecat, butonul sus, adaptarea la telefon”
4. (30 s)  „Cel mai greu mi s-a părut … și am rezolvat așa: …”
5. (20 s)  „Ce am învățat despre siguranță: …”
6. (20 s)  „Dacă aș mai avea o oră, aș adăuga …”
```

Sfaturi:
- Exersează o dată cu un coleg, cu ceasul în mână.  
- Pregătește **pagina deschisă** înainte. Nu pierde timp căutând fișiere.  
- Dacă ceva nu merge în timpul prezentării, spune calm ce credeți că s-a întâmplat. Și programatorii adevărați au astfel de momente.  
- Vorbește către public, nu către ecran.

**Încearcă tu (25 min)**  
- [ ] Scrie ordinea prezentării pe foaie  
- [ ] Exersează cu un coleg (3 minute)  
- [ ] Prezintă în fața grupei sau a profesorului

---

## 5. Feedback și autoevaluare

### Exemplul 5 — Ce spun colegii, ce spun eu

După fiecare prezentare, colegii spun, pe rând:

```text
Un lucru care a plăcut:
Un lucru de îmbunătățit:
O întrebare:
```

Apoi completează autoevaluarea, cu **DA / PARȚIAL / NU**:

```text
□ Site-ul are 3 pagini legate printr-un meniu
□ Antetul rămâne sus și meniul merge pe telefon
□ Pagina de start are secțiune de intrare și 6 carduri
□ Galeria deschide imaginea mărită și se închide cu 3 metode
□ Formularul verifică câmpurile și oprește datele personale
□ Am modul întunecat care se ține minte, butonul „sus” și anul automat
□ Site-ul merge pe telefon și cu tastatura
□ Am testat, am scris raportul și am reparat problemele
□ Nu are date personale
□ Pot explica cu cuvintele mele cum merge fiecare parte
```

Pentru fiecare „PARȚIAL” sau „NU” scrie un pas concret pentru a-l face „DA”.

**Gata când:**  
- [ ] Folderul final este curat și verificat  
- [ ] Ai bifat lista „înainte de publicare”  
- [ ] Ai făcut prezentarea de 3 minute  
- [ ] Ai primit feedback și ai completat autoevaluarea  
- [ ] Ai o copie de siguranță a folderului final

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Site-ul meu, gata de arătat” (obligatoriu)
Folderul `Prenume_Nume_W5` final, cu structura din Exemplul 1, lista din Exemplul 2 bifată și prezentarea făcută.

### Exercițiul B — Autoevaluare
Autoevaluarea din Exemplul 5, cu un pas concret pentru fiecare „PARȚIAL” sau „NU”.

### Exercițiul C — Găsește greșelile
Un coleg spune: „Am pus în subsol numele școlii, imaginile sunt luate de pe internet, iar meniul are linkul `galerie.html` dar fișierul meu se numește `Galerie.HTML`. Vreau să îl public singur, cu contul meu.” Găsește **4 probleme** și spune ce ar trebui să facă colegul.

### Exercițiul D — Explică cu cuvintele tale
Pe foaie: ce este un server? De ce publicarea se face cu un adult? De ce nu punem date personale pe un site? Ce înseamnă că un site este „static”?

**Gata când:**  
- [ ] Ai făcut proiectul și autoevaluarea  
- [ ] Ai răspuns la exercițiile C–D

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Scrie un fișier `citeste-ma.txt` (în afara folderului site-ului, pentru tine) cu: ce face site-ul, ce pagini are, cum îl testezi  
- [ ] Fă o variantă a site-ului pentru un alt subiect, schimbând doar textele, imaginile și culorile din `:root`  
- [ ] Găsește o idee de site pentru un club sau pentru clasa ta: ce pagini ar avea?

---

## Greșeli frecvente
1. **Date personale rămase** în subsol, în `alt`, într-un comentariu sau într-un nume de fișier.  
2. **`index.html` într-un subfolder**: serviciul nu găsește pagina principală.  
3. **Majuscule în numele fișierelor**, nepotrivite cu linkurile.  
4. **Fișiere vechi sau de test** rămase în folder.  
5. **Publicat fără acord și fără adult.**  
6. **Nu se testează adresa publicată** pe telefon, după publicare.

## Recapitulare pe scurt
1. Un site static este un folder cu HTML, CSS, JavaScript și imagini.  
2. Un server este un calculator mereu pornit, care îl arată lumii.  
3. Folderul final este curat, cu nume în litere mici.  
4. Publicarea se face doar cu acord și cu un adult, fără date personale.  
5. Prezentăm arătând site-ul, testăm și învățăm din feedback.

## Quiz scurt
1. Ce este un server?  
2. De ce trebuie ca `index.html` să fie în rădăcina folderului?  
3. Ce reguli de siguranță trebuie îndeplinite înainte de publicare?  
4. Ce faci dacă nu poți publica site-ul?

## Temă
Arată familiei site-ul tău, pe calculator sau pe telefon, și povestește familiei ce ai învățat în acest modul. Întreabă familia care parte a fost cea mai reușită. Păstrează folderul final în două locuri (de exemplu, calculator și stick USB), ca să nu îl pierzi.

## Ce urmează — Modulul 6
**Jocuri web**: folosim tot ce ai învățat (HTML, CSS, JavaScript) ca să construim jocuri care se joacă în browser: un joc cu monștri, un clicker, un joc de memorie cu secvențe și un joc de cuvinte.

---

## Răspunsuri pentru profesor
- **Exercițiul A:** pentru evaluare folosiți lista din Exemplul 2 și lista din Exemplul 5. Minimul de acceptare: folder curat, 3 pagini funcționale, fără date personale, și o prezentare scurtă cu demonstrație.  
- **Exercițiul B:** nu are răspuns corect; este pentru elev. Notați lecțiile pe care elevul vrea să le repete.  
- **Exercițiul C:** (1) numele școlii în subsol este dată personală; (2) imaginile de pe internet pot avea drepturi de autor și nu sunt ale elevului; (3) `galerie.html` în link și `Galerie.HTML` pe disc: pe server pagina nu se va găsi; (4) elevul vrea să publice singur, cu contul lui: publicarea se face cu un adult, cu acord scris și cu aprobarea profesorului. Elevul trebuie să șteargă numele școlii, să folosească imagini proprii sau din pachetul media, să redenumească fișierul `galerie.html` și să ceară ajutorul unui adult.  
- **Exercițiul D:** serverul este un calculator mereu pornit care arată site-ul; copiii nu trebuie să își facă singuri conturi și nu pot hotărî singuri ce rămâne public; datele personale pot ajunge la oameni necunoscuți; „static” înseamnă fără bază de date, doar fișiere gata făcute.  
- **Notă pentru profesor:** **nu publicați niciun site de elev fără acord scris al părintelui sau tutorelui și fără să fi verificat personal site-ul.** Alegeți serviciul de găzduire după regulile clubului și în conformitate cu condițiile serviciului privind vârsta; demonstrația se poate face de pe contul clubului, pe proiector, fără ca elevii să își facă conturi. Dacă nu publicați, prezentarea locală are aceeași valoare didactică. Verificați că niciun site nu conține date personale (subsol, `alt`, comentarii, nume de fișiere, nume de folder). Pentru Modulul 6, notați elevii care au nevoie de recapitulare la funcții, liste și evenimente.
