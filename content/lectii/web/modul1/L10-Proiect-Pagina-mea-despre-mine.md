# LECȚIA 10 — Site-ul meu de proiecte
### Reluare: proiectele din lecțiile 1–7 într-un site
**Modulul 1 · HTML I: Prima mea pagină · 2 ore**  
**Code Maker Club · HTML Starter**

> Ai ajuns la finalul primului modul! Azi aduni proiectele din lecțiile trecute într-un singur **site cu meniu**: o carte de vizită, o rețetă, o colecție de linkuri și un colț cu poze, toate în aceleași culori.  
> Proiect: **„Site-ul meu de proiecte”** · folder: `Prenume_Nume_W1_L10` (ex. `Ana_Pop_W1_L10`)

---

## Ce facem azi
La final ai un **site de proiecte**, scris de tine, curat, colorat și testat: o pagină de început, cartea ta de vizită, rețeta ta, colecția de linkuri și colțul cu poze, legate printr-un meniu. Nu învățăm tag-uri noi: **reiei proiectele din lecțiile 1–9 cu mici modificări** și le legi între ele. Așa vezi ce ai înțeles bine și ce mai trebuie exersat. Este și prima ta lucrare pe care o poți arăta familiei.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Planul: harta site-ului și pregătirea fișierelor (**Exemplul 1**) |
| 10–25 | Folder, schelet, meniu și culori (**Exemplul 2**) |
| 25–40 | Pagina de început, din Lecția 1 (**Exemplul 3**) |
| 40–55 | Cartea mea de vizită, din Lecția 2 (**Exemplul 4**) |
| 55–70 | Rețeta mea, din Lecția 4 (**Exemplul 5**) |
| 70–85 | Colecția mea de linkuri, din Lecția 5 (**Exemplul 6**) |
| 85–100 | Colțul meu cu poze, din Lecția 6 (**Exemplul 7**) |
| 100–118 | Lista de verificare și test cu un coleg (**Exemplul 8**) |
| 118–120 | Recap și temă |

---

## Instrucțiuni noi azi

Azi nu învățăm tag-uri noi. Reiei ce știi deja, din lecțiile trecute:

| Ce reiei | De unde | Unde apare azi |
|----------|---------|----------------|
| Scheletul paginii și `<title>` | Lecțiile 1–2 | fiecare pagină |
| Titluri, paragrafe, liste, text îngroșat | Lecțiile 3–4 | carte de vizită, rețetă |
| Linkuri, filă nouă, `id` | Lecția 5 | colecția de linkuri |
| Imagini cu `alt` și legendă | Lecția 6 | colțul cu poze |
| Culori cu `style` | Lecția 7 | toate paginile |
| Meniu și mai multe pagini | Lecția 8 | toate paginile |
| Indentare, comentarii, DevTools | Lecția 9 | verificarea finală |

---

## 1. Planul

### Siguranță înainte de toate
Este un site despre tine, dar rămâne **al tău și al profesorului**. Nu scrie în el:
- numele complet, adresa, orașul, numele școlii sau numărul de telefon;
- adresa ta reală de e-mail;
- poze cu fața ta sau a altor persoane. Folosește un **desen**, un avatar făcut de tine sau o imagine aleasă cu profesorul.

Scrie doar **prenumele** (sau o poreclă) și lucruri pe care ai voie să le arăți: animale, jocuri, mâncare, hobby-uri, culori.

### Exemplul 1 — Harta site-ului și lista de proiecte

Desenează pe foaie harta, ca în Lecția 8:

```text
                    [ Acasă ]
        /        /       |        \
[ Carte de vizită ] [ Rețeta ] [ Linkuri ] [ Poze ]
```

Apoi scrie sub fiecare căsuță ce proiect din modul reiei:

| Pagină | Fișier | Ce reiei |
|--------|--------|----------|
| Acasă | `index.html` | „Prima mea pagină” (Lecția 1): titlu, bun venit și lista de pagini |
| Cartea mea de vizită | `carte.html` | „Cartea mea de vizită” (Lecția 2): titlu și trei paragrafe |
| Rețeta mea | `reteta.html` | „Rețeta mea” (Lecția 4): lista cu buline și lista numerotată |
| Colecția mea de linkuri | `linkuri.html` | „Colecția mea de linkuri” (Lecția 5): linkuri alese cu profesorul |
| Colțul meu cu poze | `poze.html` | „Colțul meu cu poze” (Lecția 6): imagini cu `alt` și legendă |

Dacă ai păstrat folderele din lecțiile trecute, **copiază paginile de acolo** și schimbă ce trebuie. Dacă nu, le scrii din nou, după exemplele de mai jos.

**Încearcă tu (8 min)**  
- [ ] Desenează pe foaie harta site-ului tău, cu cele cinci pagini  
- [ ] Scrie pe foaie ce reiei în fiecare pagină  
- [ ] Alege 3–4 culori care se potrivesc și scrie culorile pe foaie  
- [ ] Pregătește imaginile (desene, avatar sau poze alese cu profesorul) într-un folder `imagini`  

---

## 2. Folderul, scheletul, meniul și culorile

### Exemplul 2 — Începutul fiecărei pagini

Creează folderul `Prenume_Nume_W1_L10`, cu fișierele de pe hartă și folderul `imagini`:

```text
Prenume_Nume_W1_L10/
  index.html
  carte.html
  reteta.html
  linkuri.html
  poze.html
  imagini/
```

Fiecare pagină începe cu **scheletul complet**, iar `<body>` începe cu **același meniu** și **același fundal**:

```html
<body style="background-color: lightyellow;">
  <!-- ===== MENIU ===== -->
  <p>
    <a href="index.html">Acasă</a> |
    <a href="carte.html">Cartea mea de vizită</a> |
    <a href="reteta.html">Rețeta mea</a> |
    <a href="linkuri.html">Linkuri</a> |
    <a href="poze.html">Poze</a>
  </p>
  <hr>

  <!-- aici vine conținutul paginii -->
</body>
```

Scrie scheletul și meniul **o singură dată**, în `index.html`. Copiază-le apoi în celelalte pagini și schimbă în fiecare `<title>`.

Folosește **aceleași culori** pe toate paginile: același fundal, aceeași culoare pentru `<h1>` și aceeași pentru `<h2>`. Așa site-ul arată ca un singur site.

| Element | Culoarea mea |
|---------|--------------|
| fundal (`background-color`) | |
| `<h1>` | |
| `<h2>` | |

**Gata când:**  
- [ ] Ai creat folderul și cele 5 fișiere  
- [ ] Fiecare fișier are scheletul complet, cu `<title>` diferit  
- [ ] Meniul este la fel în toate paginile și toate linkurile merg  

---

## 3. Construim paginile

În exemplele de mai jos scrii doar ce vine **sub meniu**, în fiecare pagină.

### Exemplul 3 — `index.html` (din Lecția 1)

```html
<!-- Prima mea pagină · Ana -->
<h1 style="color: tomato;">Salut, sunt Ana!</h1>
<p><em>Bine ai venit pe site-ul meu de proiecte</em></p>
<p>Aici am adunat ce am învățat în primul modul de HTML. Alege un proiect:</p>
<ul>
  <li><a href="carte.html">Cartea mea de vizită</a></li>
  <li><a href="reteta.html">Rețeta mea</a></li>
  <li><a href="linkuri.html">Colecția mea de linkuri</a></li>
  <li><a href="poze.html">Colțul meu cu poze</a></li>
</ul>
```

Ca la Lecția 1, o pagină cu un titlu mare și text despre tine. Modificarea de azi: o **listă cu linkuri** către celelalte pagini.

### Exemplul 4 — `carte.html` (din Lecția 2)

```html
<!-- Cartea mea de vizită · Ana -->
<h1 style="color: tomato;">Ana — carte de vizită</h1>
<p>Am zece ani.</p>
<p>Hobby-ul meu: desenez și mă joc cu pisica.</p>
<p>Visul meu: să fac propriul meu joc.</p>
```

Scrie propriul text. Nu scrie date personale (oraș, școală, adresă). Modificarea de azi: titlul are culoarea comună a site-ului.

### Exemplul 5 — `reteta.html` (din Lecția 4)

```html
<!-- Rețeta mea · Ana -->
<h1 style="color: tomato;">Clătite cu dulceață</h1>
<p><em>O rețetă simplă, făcută împreună cu un adult.</em></p>

<h2 style="color: navy;">Ce ne trebuie</h2>
<ul>
  <li><strong>2</strong> ouă</li>
  <li><strong>250 ml</strong> lapte</li>
  <li><strong>100 g</strong> făină</li>
</ul>

<h2 style="color: navy;">Cum le facem</h2>
<ol>
  <li>Amestecăm ouăle cu laptele.</li>
  <li>Adăugăm făina și mixăm până se leagă.</li>
  <li>Un adult coace clătitele.</li>
</ol>

<p><mark>Poftă bună!</mark></p>
```

Folosește rețeta ta (sau topul tău). Modificarea de azi: titlurile `<h2>` au aceeași culoare pe tot site-ul.

### Exemplul 6 — `linkuri.html` (din Lecția 5)

```html
<!-- Colecția mea de linkuri · Ana -->
<h1 id="sus" style="color: tomato;">Colecția mea de linkuri</h1>
<p>Site-uri alese împreună cu profesorul.</p>

<h2 style="color: navy;">Să învăț</h2>
<ul>
  <li><a href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer">Wikipedia</a>: enciclopedia liberă</li>
  <li><a href="https://www.nasa.gov" target="_blank" rel="noopener noreferrer">NASA</a>: știri din spațiu</li>
</ul>

<p><a href="#sus">↑ Înapoi sus</a></p>
```

Alege **tu** site-urile. Modificarea de azi: în loc de un link spre `despre.html`, ai meniul site-ului. Dacă ai copiat pagina din lecția 5, **scoate** linkurile vechi care nu mai merg.

### Exemplul 7 — `poze.html` (din Lecția 6)

```html
<!-- Colțul meu cu poze · Ana -->
<h1 style="color: tomato;">Colțul meu cu poze</h1>

<h2 style="color: navy;">Pisica din desenul meu</h2>
<figure>
  <img src="imagini/desen1.png" alt="Desen cu o pisică gri pe un fotoliu" width="300">
  <figcaption>Pisica din desenul meu.</figcaption>
</figure>

<h2 style="color: navy;">Delfinul meu preferat</h2>
<figure>
  <img src="imagini/desen2.png" alt="Desen cu un delfin în mare" width="300">
  <figcaption>Delfinul meu preferat.</figcaption>
</figure>
```

Pune 2–3 imagini, fiecare cu `alt` și legendă. Dacă o imagine nu apare, verifică numele fișierului și folderul `imagini`. Folosește desene sau imagini alese cu profesorul, nu poze cu fețe.

---

## 4. Verificare

### Exemplul 8 — Lista de verificare și testul cu un coleg

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
- [ ] În DevTools, fila Console, nu apar mesaje „404”  

Apoi stai lângă un coleg. Fiecare deschide site-ul celuilalt cu Live Server și:
1. parcurge **toate** paginile prin meniu;  
2. caută un link sau o imagine care nu merge;  
3. spune **un lucru reușit** și **un lucru de îmbunătățit**.  

Notează sugestiile și repară ce ai de reparat.

**Încearcă tu (8 min)**  
- [ ] Parcurge lista de verificare și repară ce nu este bifat  
- [ ] Fă testul cu un coleg și notează un lucru reușit și unul de îmbunătățit  
- [ ] Repară cel puțin un lucru după sugestia colegului  

---

## De făcut azi — „Site-ul meu de proiecte”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | 3 pagini (`index.html`, `carte.html`, `poze.html`) cu același meniu, aceleași culori și cel puțin o imagine cu `alt` |
| **Complet** | Minim + `reteta.html` și `linkuri.html`, comentarii pe secțiuni, cod indentat și lista de verificare bifată |

### Pasul 1 — Minim
Fă folderul `Prenume_Nume_W1_L10` cu paginile `index.html`, `carte.html` și `poze.html`, folderul `imagini`, același meniu și aceleași culori.

- [ ] Folderul are cele 3 pagini și folderul `imagini`  
- [ ] Fiecare pagină are scheletul complet, cu `<title>` diferit  
- [ ] Meniul este la fel în toate paginile și toate linkurile merg  
- [ ] Culorile sunt aceleași pe toate paginile  
- [ ] Pagina cu poze are cel puțin o imagine cu `alt`  

### Pasul 2 — Complet
Adaugi restul proiectelor și pui ordine în cod:

- [ ] Ai `reteta.html` cu o listă cu buline și una numerotată  
- [ ] Ai `linkuri.html` cu un link către un site ales cu profesorul, care se deschide într-o filă nouă  
- [ ] Meniul are cinci linkuri, iar paginile au comentarii pe secțiuni  
- [ ] Codul este indentat, iar lista de verificare este bifată  
- [ ] Ai testat site-ul cu un coleg și ai reparat un lucru  

---

## Bonus ★★★ — Provocare: Pagina poveștii
*Doar dacă ai terminat Complet.*

Adaugi încă un proiect din modul și faci site-ul mai ușor de folosit.

- [ ] Adaugă `poveste.html` din Lecția 3: o poveste de 5 rânduri despre ziua ta preferată, cu `<h1>`, `<h2>`, o linie `<hr>` și `<br>` între rânduri, și un link către ea în meniu  
- [ ] Adaugă în fiecare pagină un link „Sus”, către un `id` din partea de sus  
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
8. **Ai copiat o pagină din lecția veche** și au rămas linkuri către pagini care nu mai există (de exemplu `despre.html`).  
9. **Ai uitat să salvezi** înainte de test.  

---

## Recapitulare pe scurt
Ai învățat să creezi o pagină cu schelet, titluri și paragrafe, text îngroșat și înclinat, liste, linkuri, imagini, culori, mai multe pagini legate prin meniu, cod ordonat cu indentare și comentarii și să cauți greșeli cu DevTools. Azi le-ai adunat într-un singur site. Toate acestea sunt baza pentru ce urmează.

## Quiz final de modul
- Care sunt cele trei limbaje ale unei pagini web și ce face fiecare?  
- Ce tag se închide ultimul într-o pagină?  
- Cum faci un link către altă pagină din același folder?  
- Cum pui o imagine și de ce scrii `alt`?  
- Cum schimbi culoarea fundalului paginii?  
- Ce înseamnă `../`?  
- Cum cauți o greșeală pas cu pas?

## Temă
1. Alege **un lucru de îmbunătățit** din feedbackul colegului sau din lista de verificare și corectează acel lucru. Notează pe foaie ce ai schimbat. Adu la ora următoare, în folderul `Prenume_Nume_W1_L10`, versiunea finală.  
2. **Autoevaluare.** Pe foaie, pune câte o notă de la 1 la 5 pentru fiecare: ordinea codului, aspectul paginilor, linkurile, imaginile, textul scris de tine. Scrie ce vei face mai bine data viitoare.  
3. **Fișa greșelilor.** Scrie pe foaie trei greșeli făcute în acest modul și cum ai găsit și cum ai reparat fiecare greșeală.  
4. **Întrebări pentru profesor.** Scrie două întrebări despre HTML la care nu ai primit încă răspuns. Vor fi folosite în Modulul 2.  
5. **Exemplu pentru acasă.**

**Acasă 1 — Un minut despre site-ul tău.** Pregătește o prezentare de **un minut**. Poți folosi acest plan:

1. „Site-ul meu se numește … și este despre …”  
2. „Are … pagini: …”  
3. „Partea mea preferată este … pentru că …”  
4. „Cel mai greu lucru a fost … și am rezolvat așa: …”  
5. „Ce vreau să învăț mai departe: …”

> Dacă ai ceva care nu merge, spune și asta: „Am o greșeală pe care nu am reușit să o repar”. Nimeni nu are un cod perfect, iar a vorbi despre greșeli este o parte din meserie.

## Ce urmează — Modulul 2: HTML II
Învățăm lucruri noi: **tabele**, **formulare**, **audio și video**, **taguri cu înțeles** și **clase** pentru organizarea paginii. Sunt pașii spre un site cu adevărat complet.

---

## Răspunsuri
- **Quiz final de modul:** (1) HTML = structura (scheletul), CSS = aspectul (culori, fonturi), JavaScript = comportamentul (ce se întâmplă la click); (2) `</html>` (ultimul tag deschis se închide primul); (3) `<a href="despre.html">Despre mine</a>`; (4) `<img src="imagini/poza.jpg" alt="descriere">`; `alt` spune în cuvinte ce se vede, apare dacă imaginea nu se încarcă și este citit pentru cei care nu văd; (5) cu `style="background-color: lightyellow;"` pe `<body>`; (6) „un folder mai sus”; (7) salvezi, citești ce vezi, cauți mai sus de locul efectului, verifici lista de suspecți (tag neînchis, ghilimele, nume de fișier, `:` și `;`), schimbi un singur lucru odată sau comentezi bucăți de cod.  
- **Evaluare sugerată (20 puncte):** schelet corect în fiecare pagină (3); meniu identic și funcțional (3); titluri și paragrafe (2); cele două tipuri de liste (2); imagini cu `alt` care se văd (3); culori consecvente și citibile (2); cod indentat și comentarii (2); fără date personale (1); testul cu un coleg (2).  
- **Siguranță:** verificați înainte de orice prezentare publică să nu existe date personale și poze cu fețe. Folosiți desene sau avatare. Atenție la paginile copiate din lecțiile vechi: unele exemple de acolo conțin un oraș sau alte detalii care nu trebuie să rămână.  
- **Greșeli frecvente la verificare:** un singur `<h1>` pe pagină, `alt` la fiecare imagine, nume de fișiere cu litere mici, fără spații, linkuri vechi către pagini care nu mai există.  
- **Dacă ritmul clasei este lent:** facem doar Minim (trei pagini) și lăsăm `reteta.html` și `linkuri.html` pentru acasă.  
- **Tema, punctul 4:** adunați întrebările și folosiți-le la începutul Modulului 2.
