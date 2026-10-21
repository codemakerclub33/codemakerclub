# LECȚIA 10 — Proiect: Pagina mea despre mine
**Modulul 1 · HTML I: Prima mea pagină · 2 ore**  
**Code Maker Club · HTML Starter**

> Ai ajuns la finalul primului modul! Azi construiești un **mini-site despre tine**, cu tot ce ai învățat: schelet, titluri, text, liste, linkuri, imagini, culori și mai multe pagini legate între ele.  
> Proiect: **„Pagina mea despre mine”** · folder: `Prenume_Nume_W1_L10` (ex. `Ana_Pop_W1_L10`)

---

## Obiectiv
La finalul orei ai un site cu pagini legate între ele, scris de tine, curat, colorat și testat.  
**Minim:** 3 pagini (`index.html`, `despre.html`, `preferate.html`) cu același meniu, titluri, text, o listă, culori și cel puțin o imagine.  
**Ținta orei (Complet):** + a patra pagină cu galerie (`galerie.html`), un link către un site ales cu profesorul, un link către o secțiune cu `id`, comentarii pe secțiuni, cod indentat și o prezentare de un minut.

## De ce contează
Un proiect adevărat te obligă să folosești toate lucrurile învățate **împreună**, nu câte una. Așa vezi ce ai înțeles bine și ce mai trebuie exersat. Este și prima ta lucrare pe care o poți arăta familiei.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Plan: harta site-ului și conținutul (**Exemplul 1**) |
| 15–30 | Folder, schelet și meniu (**Exemplul 2**) |
| 30–85 | Construim paginile (**Exemplele 3–6**) |
| 85–95 | Culori potrivite pe toate paginile (**Exemplul 7**) |
| 95–105 | Lista de verificare și test cu un coleg (**Exemplele 8–9**) |
| 105–118 | Prezentarea de un minut (**Exemplul 10**) |
| 118–120 | Recap și temă |

---

## 1. Planul

### Siguranță înainte de toate
Este un site despre tine, dar rămâne **al tău și al profesorului**. Nu scrie în el:
- numele complet, adresa, numele școlii sau numărul de telefon;
- adresa ta reală de e-mail;
- poze cu fața ta sau a altor persoane. Folosește un **desen**, un avatar făcut de tine sau o imagine aleasă cu profesorul.

Scrie doar **prenumele** (sau o poreclă) și lucruri pe care ai voie să le arăți: animale, jocuri, mâncare, hobby-uri, culori.

### Exemplul 1 — Harta site-ului și lista de conținut

Desenează pe foaie harta, ca în Lecția 8:

```text
           [ Acasă ]
        /      |       \
[ Despre mine ] [ Preferate ] [ Galerie ]
```

Apoi scrie sub fiecare căsuță ce vei pune în pagină:

| Pagină | Fișier | Ce conține |
|--------|--------|------------|
| Acasă | `index.html` | un titlu, un text de bun venit, o imagine sau un desen |
| Despre mine | `despre.html` | câteva paragrafe și o listă cu lucruri despre tine |
| Preferate | `preferate.html` | liste: mâncare, jocuri, animale |
| Galerie | `galerie.html` | 3–4 imagini cu legende |

**Încearcă tu (10 min)**  
- [ ] Desenează pe foaie harta site-ului tău, cu 3 sau 4 pagini  
- [ ] Scrie pe foaie ce pui în fiecare pagină  
- [ ] Alege 3–4 culori care se potrivesc și scrie culorile pe foaie  
- [ ] Pregătește imaginile (desene, avatar sau poze alese cu profesorul) într-un folder `imagini`  

---

## 2. Folderul, scheletul și meniul

### Exemplul 2 — Începutul fiecărei pagini

Creează folderul `Prenume_Nume_W1_L10`, cu fișierele de pe hartă și folderul `imagini`:

```text
Prenume_Nume_W1_L10/
  index.html
  despre.html
  preferate.html
  galerie.html
  imagini/
```

Fiecare pagină începe cu **scheletul complet**, iar `<body>` începe cu **același meniu**:

```html
<body style="background-color: lightyellow;">
  <!-- ===== MENIU ===== -->
  <p>
    <a href="index.html">Acasă</a> |
    <a href="despre.html">Despre mine</a> |
    <a href="preferate.html">Preferate</a> |
    <a href="galerie.html">Galerie</a>
  </p>
  <hr>

  <!-- aici vine conținutul paginii -->
</body>
```

Scrie scheletul și meniul **o singură dată**, în `index.html`. Copiază scheletul și meniul apoi în celelalte trei pagini și schimbă în fiecare `<title>`.

**Gata când:**  
- [ ] Ai creat folderul și cele 4 fișiere (sau cel puțin 3)  
- [ ] Fiecare fișier are scheletul complet, cu `<title>` diferit  
- [ ] Meniul este la fel în toate paginile și toate linkurile merg  

---

## 3. Construim paginile

### Exemplul 3 — `index.html`

```html
<h1 style="text-align: center; color: tomato;">Salut, sunt Ana!</h1>
<p style="text-align: center;"><em>Bine ai venit pe site-ul meu</em></p>

<p style="text-align: center;">
  <img src="imagini/avatar.png" alt="Desenul meu: o fetiță cu ochelari" width="200">
</p>

<p>Pe acest site afli <strong>cine sunt</strong>, ce îmi place și ce am desenat. Folosește meniul de sus ca să te plimbi prin pagini.</p>
```

Înlocuiește cu un titlu, un text de bun venit și o imagine alese de tine. Alege și un `alt` care descrie imaginea.

### Exemplul 4 — `despre.html`

```html
<h1 style="color: tomato;">Despre mine</h1>

<h2 style="color: navy;">Cine sunt</h2>
<p>Mă cheamă Ana și am 10 ani. Îmi place să desenez și să învăț lucruri noi despre calculatoare.</p>

<h2 id="timpliber" style="color: navy;">Ce fac în timpul liber</h2>
<ul>
  <li>desenez animale</li>
  <li>citesc cărți cu aventuri</li>
  <li>joc fotbal cu prietenii</li>
</ul>

<h2 style="color: navy;">Un lucru la care țin mult</h2>
<p>Am învățat să scriu o pagină web <strong>de la zero</strong>!</p>
```

Scrie propriul text. Folosește `<strong>` pentru ce este important și cel puțin o listă. Nu scrie date personale.

### Exemplul 5 — `preferate.html`

```html
<h1 style="color: tomato;">Lucrurile mele preferate</h1>

<h2 style="color: navy;">Top 3 mâncăruri</h2>
<ol>
  <li>clătite</li>
  <li>pizza</li>
  <li>înghețată</li>
</ol>

<h2 style="color: navy;">Animale</h2>
<ul>
  <li>pisici</li>
  <li>delfini</li>
</ul>

<p>Mai multe despre animale găsești pe <a href="https://ro.wikipedia.org" target="_blank" rel="noopener noreferrer">Wikipedia</a>.</p>
<p><a href="despre.html#timpliber">Înapoi la „Ce fac în timpul liber”</a></p>
```

Folosește o listă numerotată pentru un clasament și una cu buline pentru restul. Linkul extern (spre un site ales cu profesorul) se deschide într-o filă nouă.

### Exemplul 6 — `galerie.html`

```html
<h1 style="color: tomato;">Galeria mea</h1>

<figure>
  <img src="imagini/desen1.png" alt="Desen cu o pisică gri pe un fotoliu" width="300">
  <figcaption>Pisica din desenul meu.</figcaption>
</figure>

<figure>
  <img src="imagini/desen2.png" alt="Desen cu un delfin în mare" width="300">
  <figcaption>Delfinul meu preferat.</figcaption>
</figure>
```

Pune 3–4 imagini, fiecare cu `alt` și legendă. Dacă o imagine nu apare, verifică numele fișierului și folderul `imagini`.

**Gata când:**  
- [ ] `index.html` are titlu, text de bun venit și o imagine cu `alt`  
- [ ] `despre.html` are cel puțin trei titluri și o listă  
- [ ] `preferate.html` are o listă numerotată și una cu buline  
- [ ] Ai un link către un site ales cu profesorul, care se deschide într-o filă nouă  
- [ ] `galerie.html` are 3 imagini cu `alt` și legendă (sau paginile tale au măcar o imagine)  
- [ ] Toate imaginile se văd (verifică în DevTools, Console, că nu există mesaje „404”)  

---

## 4. Culori, ordine și verificare

### Exemplul 7 — Culori potrivite

Folosește **aceleași culori** pe toate paginile: aceeași culoare de fundal, aceeași culoare pentru `<h1>` și aceeași pentru `<h2>`. Așa site-ul arată ca un singur site.

| Element | Culoarea mea |
|---------|--------------|
| fundal (`background-color`) | |
| `<h1>` | |
| `<h2>` | |

Verifică citibilitatea: textul trebuie să se vadă clar pe fundal.

### Exemplul 8 — Lista de verificare

Înainte să spui „Am terminat”, parcurge lista. Pune o bifă doar la ce este **adevărat**:

- [ ] Fiecare pagină are scheletul complet și `<title>` diferit  
- [ ] Codul este indentat (formatat cu **Shift + Alt + F**; pe Mac: Shift + Option + F)  
- [ ] Am comentarii care marchează secțiunile  
- [ ] Toate tagurile sunt închise  
- [ ] Există un singur `<h1>` pe pagină  
- [ ] Toate imaginile au `alt`  
- [ ] Toate linkurile din meniu merg din orice pagină  
- [ ] Culorile sunt aceleași pe toate paginile, iar textul se citește bine  
- [ ] Nu există date personale (nume complet, adresă, telefon, poze cu fețe)  

### Exemplul 9 — Test cu un coleg

Stai lângă un coleg. Fiecare deschide site-ul celuilalt cu Live Server și:
1. parcurge **toate** paginile prin meniu;  
2. caută un link sau o imagine care nu merge;  
3. spune **un lucru reușit** și **un lucru de îmbunătățit**.  

Notează sugestiile și repară ce ai de reparat.

**Încearcă tu (8 min)**  
- [ ] Parcurge lista de verificare și repară ce nu este bifat  
- [ ] Fă testul cu un coleg și notează un lucru reușit și unul de îmbunătățit  
- [ ] Repară cel puțin un lucru după sugestia colegului  

---

## 5. Prezentarea

### Exemplul 10 — Un minut despre site-ul tău

Pregătește o prezentare de **un minut**. Poți folosi acest plan:

1. „Site-ul meu se numește … și este despre …”  
2. „Are … pagini: …”  
3. „Partea mea preferată este … pentru că …”  
4. „Cel mai greu lucru a fost … și am rezolvat așa: …”  
5. „Ce vreau să învăț mai departe: …”

> Dacă ai ceva care nu merge, spune și asta: „Am o greșeală pe care nu am reușit să o repar”. Nimeni nu are un cod perfect, iar a vorbi despre greșeli este o parte din meserie.

**Gata când:**  
- [ ] Ai pregătit prezentarea de un minut  
- [ ] Ai prezentat site-ul colegilor sau profesorului  
- [ ] Ai spus un lucru reușit și un lucru pe care îl vei îmbunătăți  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Pagina mea despre mine” (obligatoriu)
Mini-site cu minimum 3 pagini (`index.html`, `despre.html`, `preferate.html`), meniu identic, culori consecvente, cel puțin o imagine cu `alt`, o listă cu buline, o listă numerotată, cod indentat și comentarii.

### Exercițiul B — Autoevaluare
Pe foaie, pune câte o notă de la 1 la 5 pentru fiecare: ordinea codului, aspectul paginilor, linkurile, imaginile, textul scris de tine. Scrie ce vei face mai bine data viitoare.

### Exercițiul C — Fișa greșelilor
Scrie pe foaie trei greșeli făcute în acest modul și cum ai găsit și cum ai reparat fiecare greșeală.

### Exercițiul D — Întrebări pentru profesor
Scrie două întrebări despre HTML la care nu ai primit încă răspuns. Vor fi folosite în Modulul 2.

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W1_L10` conține paginile și folderul `imagini`  
- [ ] Ai bifat lista de verificare din Exemplul 8  
- [ ] Ai făcut autoevaluarea și fișa greșelilor  
- [ ] Ai prezentat site-ul și ai testat site-ul cu un coleg  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Adaugă o pagină `contact.html` fără date reale (de exemplu „Spune ce părere ai” cu un text, fără adresă și fără telefon)  
- [ ] Adaugă în fiecare pagină un link „Sus”, către un `id` din partea de sus  
- [ ] Scrie o poveste de 5 rânduri despre ziua ta preferată, cu `<br>` între rânduri  
- [ ] Mută paginile în folderul `pagini` și repară toate linkurile și imaginile cu `../`  

---

## Greșeli frecvente
1. **Meniul diferă de la o pagină la alta** — copiază același meniu peste tot.  
2. **Ai uitat să schimbi `<title>` și `<h1>`** după copierea paginii.  
3. **Numele imaginilor nu se potrivesc** cu cele din linkuri — verifică în Console mesajele „404”.  
4. **Culori diferite pe fiecare pagină** — site-ul nu mai pare unul singur.  
5. **Ai pus date personale** — șterge datele imediat.  
6. **Ai uitat `alt`** la o imagine.  
7. **Cod neindentat** — apasă **Shift + Alt + F**.  
8. **Ai uitat să salvezi** înainte de test.  

---

## Recapitulare pe scurt
Ai învățat să creezi o pagină cu schelet, titluri și paragrafe, text îngroșat și înclinat, liste, linkuri, imagini, culori, mai multe pagini legate prin meniu, cod ordonat cu indentare și comentarii și să cauți greșeli cu DevTools. Toate acestea sunt baza pentru ce urmează.

## Quiz final de modul
- Care sunt cele trei limbaje ale unei pagini web și ce face fiecare?  
- Ce tag se închide ultimul într-o pagină?  
- Cum faci un link către altă pagină din același folder?  
- Cum pui o imagine și de ce scrii `alt`?  
- Cum schimbi culoarea fundalului paginii?  
- Ce înseamnă `../`?  
- Cum cauți o greșeală pas cu pas?

## Temă
Alege **un lucru de îmbunătățit** din feedbackul colegului sau din lista de verificare și corectează acel lucru. Notează pe foaie ce ai schimbat. Adu la ora următoare, în folderul `Prenume_Nume_W1_L10`, versiunea finală.

## Ce urmează — Modulul 2: HTML II
Învățăm lucruri noi: **tabele**, **formulare**, **audio și video**, **taguri cu înțeles** și **clase** pentru organizarea paginii. Sunt pașii spre un site cu adevărat complet.

---

## Răspunsuri
- **Quiz final de modul:** (1) HTML = structura (scheletul), CSS = aspectul (culori, fonturi), JavaScript = comportamentul (ce se întâmplă la click); (2) `</html>` (ultimul tag deschis se închide primul); (3) `<a href="despre.html">Despre mine</a>`; (4) `<img src="imagini/poza.jpg" alt="descriere">`; `alt` spune în cuvinte ce se vede, apare dacă imaginea nu se încarcă și este citit pentru cei care nu văd; (5) cu `style="background-color: lightyellow;"` pe `<body>`; (6) „un folder mai sus”; (7) salvezi, citești ce vezi, cauți mai sus de locul efectului, verifici lista de suspecți (tag neînchis, ghilimele, nume de fișier, `:` și `;`), schimbi un singur lucru odată sau comentezi bucăți de cod.  
- **Evaluare sugerată (20 puncte):** schelet corect în fiecare pagină (3); meniu identic și funcțional (3); titluri și paragrafe (2); cele două tipuri de liste (2); imagini cu `alt` care se văd (3); culori consecvente și citibile (2); cod indentat și comentarii (2); fără date personale (1); prezentare (2).  
- **Siguranță:** verificați înainte de orice prezentare publică să nu existe date personale și poze cu fețe. Folosiți desene sau avatare.  
- **Greșeli frecvente la verificare:** un singur `<h1>` pe pagină, `alt` la fiecare imagine, nume de fișiere cu litere mici, fără spații.  
- **Exercițiul D:** adunați întrebările și folosiți întrebările la începutul Modulului 2.
