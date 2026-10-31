# LECȚIA 9 — Repară pagina stricată
### Indentare, comentarii și DevTools
**Modulul 1 · HTML I: Prima mea pagină · 2 ore**  
**Code Maker Club · HTML Starter**

> Programatorii buni nu sunt cei care nu greșesc niciodată. Sunt cei care scriu codul **ordonat** și știu să **găsească repede** greșelile. Azi înveți exact asta.  
> Proiect: **„Repară pagina stricată”** · folder: `Prenume_Nume_W1_L9` (ex. `Ana_Pop_W1_L9`)

---

## Ce facem azi
La final ai reparat o **pagină stricată**, cu șase greșeli ascunse, și ai pus ordine în cod: indentare corectă, comentarii care marchează secțiunile și formatare automată. Știi să cauți o greșeală pas cu pas și să folosești DevTools ca să vezi structura paginii și mesajele de eroare. Programatorii buni nu sunt cei care nu greșesc niciodată, ci cei care scriu codul **ordonat** și găsesc repede greșelile.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–35 | Indentarea (**Exemplele 1–2**) |
| 35–55 | Comentariile (**Exemplele 3–4**) |
| 55–70 | Cum căutăm o greșeală (**Exemplul 5**) |
| 70–95 | DevTools: Elements și Console (**Exemplele 6–7**) |
| 95–115 | Repară pagina stricată (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| **Tab** și **Shift + Tab** | Mută liniile spre dreapta sau spre stânga | indentare |
| **Shift + Alt + F** | Aranjează tot codul | pe Mac **Shift + Option + F** |
| `<!-- ... -->` | Comentariu: notiță pentru oameni | `<!-- ===== ANTET ===== -->` |
| **Ctrl + /** | Pune sau scoate comentariul din liniile selectate | pe Mac **Cmd + /** |
| **F12** | Deschide DevTools | fila **Elements** și fila **Console** |

---

## 1. Recapitulare rapidă

- Un site are mai multe pagini, legate printr-un meniu.  
- Prima pagină se numește `index.html`.  
- `../` înseamnă „un folder mai sus”.  
- Dacă un link nu merge, verifici numele fișierului, extensia și folderul.

**Încearcă tu (3 min)**  
- [ ] Creează folderul `Prenume_Nume_W1_L9` și deschide folderul în VS Code  
- [ ] Creează fișierul `index.html` cu scheletul complet scris de tine  

---

## 2. Indentarea: ordine în cod

**Indentarea** înseamnă că scrii codul **mai spre dreapta**, cu câteva spații, când un tag este **în interiorul** altui tag. Browserul nu are nevoie de ea, dar oamenii au.

### Exemplul 1 — Fără indentare și cu indentare

Fără indentare, codul arată ca o mulțime de rânduri la fel:

```html
<ul>
<li>Pisici</li>
<li>Cai</li>
<li>
Mamifere marine:
<ul>
<li>Delfini</li>
</ul>
</li>
</ul>
```

Cu indentare vezi imediat ce este în interiorul a ce:

```html
<ul>
  <li>Pisici</li>
  <li>Cai</li>
  <li>
    Mamifere marine:
    <ul>
      <li>Delfini</li>
    </ul>
  </li>
</ul>
```

Regula este simplă: **tot ce este în interiorul unui tag se mută cu 2 spații spre dreapta**.

### Exemplul 2 — Cum indentezi fără efort

VS Code te ajută:
- **Tab** mută linia (sau liniile selectate) spre dreapta.  
- **Shift + Tab** o mută înapoi.  
- **Formatare automată:** apasă **Shift + Alt + F** (pe Mac: **Shift + Option + F**). VS Code aranjează tot fișierul și îl indentează corect.  

La prima folosire, VS Code poate întreba ce formatator să folosească. Alege cel pentru HTML.

> Formatarea automată arată ce ai de reparat: dacă un tag nu are închidere, rândurile de după el apar mutate greșit.

**Gata când:**  
- [ ] Ai scris sau ai copiat o listă fără indentare și ai indentat lista manual cu Tab  
- [ ] Ai folosit formatarea automată și ai observat ce s-a schimbat  
- [ ] Poți explica regula: ce este în interior se mută cu 2 spații  

---

## 3. Comentariile: notițe pentru oameni

Un **comentariu** este un text pe care browserul îl **ignoră**. Nu apare în pagină și îl vede doar cine citește codul.

```html
<!-- Acesta este un comentariu -->
```

Se scrie între `<!--` și `-->`.

### Exemplul 3 — Comentarii ca notițe și ca semne de carte

```html
<body>
  <!-- ===== ANTET ===== -->
  <h1>Animalele mele</h1>

  <!-- ===== LISTA CU ANIMALE ===== -->
  <ul>
    <li>Pisică</li>
    <li>Cățel</li>
  </ul>

  <!-- ===== FINAL ===== -->
  <p>Mulțumesc că ai vizitat pagina!</p>
</body>
```

Comentariile împart codul în **secțiuni**, ca niște etichete pe sertare. Când pagina crește, găsești repede ce cauți.

### Exemplul 4 — Comentariul care ascunde cod

Dacă pui un comentariu în jurul unei bucăți de cod, pagina nu o mai afișează, dar codul rămâne în fișier:

```html
<p>Acest paragraf se vede.</p>
<!--
<p>Acest paragraf este ascuns.</p>
-->
```

Este util când vrei să **testezi** pagina fără o bucată de cod, fără să o ștergi. Scurtătura din VS Code: selectează liniile și apasă **Ctrl + /** (pe Mac: **Cmd + /**). Apeși din nou și comentariul dispare.

> Nu scrie în comentarii informații personale (adresa, telefonul). Oricine poate vedea comentariile, cu Ctrl + U sau cu DevTools.

**Încearcă tu (5 min)**  
- [ ] Pune în pagina ta trei comentarii care marchează secțiunile  
- [ ] Ascunde un paragraf cu **Ctrl + /** (sau Cmd + /) și verifică în browser că a dispărut  
- [ ] Apasă din nou scurtătura și verifică în browser că a reapărut  

---

## 4. Cum căutăm o greșeală

Când pagina nu arată cum vrei, **nu te panica** și nu schimba la întâmplare. Urmează pașii:

1. **Salvează** fișierul cu **Ctrl + S** și verifică în browser că pagina s-a reîncărcat.  
2. **Citește ce vezi**: ce lipsește, ce este în plus, de unde începe problema?  
3. **Caută sus**: de obicei greșeala este **înaintea** locului unde apare efectul ciudat.  
4. **Verifică lista de suspecți**:  
   - un tag fără închidere (sau închis cu alt nume);  
   - ghilimele lipsă;  
   - un nume de fișier scris greșit;  
   - `:` și `;` în `style`;  
   - o literă mare în loc de literă mică.  
5. **Schimbă un singur lucru** o dată și testează din nou.  
6. Dacă nu găsești, **comentează** bucăți de cod până dispare problema. Apoi știi unde este.  
7. Abia după aceea cere ajutor, cu ce ai încercat deja.

### Exemplul 5 — Efectul apare dincolo de greșeală

```text
<h1>Titlul meu<h1>
<p>Acest text ar trebui să fie mic, dar este foarte mare.</p>
```

Textul de după titlu apare mare, deși este în `<p>`. Greșeala nu este în paragraf, ci **înainte**: titlul nu a fost închis (`<h1>` în loc de `</h1>`). Greșeala și efectul sunt în locuri diferite.

**Gata când:**  
- [ ] Poți spune cu cuvintele tale primii patru pași pentru căutarea unei greșeli  
- [ ] Ai găsit greșeala din Exemplul 5 fără să te uiți la rezolvare  

---

## 5. DevTools: instrumentele browserului

**DevTools** este un panou ascuns în browser, făcut pentru cei care construiesc pagini web. Se deschide cu **F12** sau, pe Mac, cu **Cmd + Option + I**. Poți apăsa și clic dreapta pe pagină, apoi **Inspect** („Inspectează”).

### Exemplul 6 — Fila Elements

Fila **Elements** arată **structura paginii**: tagurile, una în interiorul alteia, ca în codul tău.

1. Deschide DevTools.  
2. Apasă pe săgeata mică din colțul panoului (sau apasă **Ctrl + Shift + C**, pe Mac **Cmd + Shift + C**), apoi treci cu mouse-ul peste pagină. Fiecare element se colorează, iar în Elements vezi tagul lui.  
3. Apasă pe un titlu și vei vedea `<h1>…</h1>` evidențiat.

### Exemplul 7 — Fila Console

Fila **Console** arată mesajele browserului. Dacă ai o imagine cu numele scris greșit, vei vedea un mesaj de eroare, de exemplu:

```text
Failed to load resource: the server responded with a status of 404 (Not Found)
```

Acesta înseamnă: „Nu am găsit un fișier”. Mesajul arată și numele fișierului căutat, deci vezi exact ce nume a căutat browserul. Compară acest nume cu numele din folder.

**Încearcă tu (8 min)**  
- [ ] Deschide DevTools pe pagina ta și găsește în Elements titlul `<h1>`  
- [ ] Apasă pe titlu în Elements și vezi tagul lui evidențiat  
- [ ] Scrie greșit numele unei imagini, salvează și găsește mesajul „404” în Console  
- [ ] Repară numele imaginii, reîncarcă pagina și verifică în Console că mesajul a dispărut  

---

## 6. Mini-proiect

### Exemplul 8 — Repară pagina stricată

Iată un `<body>` cu **6 greșeli**. Copiază acest cod în `index.html`, în folderul `Prenume_Nume_W1_L9`, între tagurile `<body>` și `</body>`, și repară pagina:

```text
<h1>Animalele mele<h1>
<p>Am o pisică <strong>neagră.</p></strong>
<img src="imagini/pisica.jpgg" alt="Pisică neagră">
<ul>
  <li>Hrană
  <li>Apă</li>
</ul>
<a href="despre.htm">Despre mine</a>
<p style="color = red;">Mulțumesc!</p>
```

Lucrează cu metoda din secțiunea 4. Fiecare greșeală găsită merită o bifă.

**Gata când:**  
- [ ] Ai găsit și ai reparat toate cele 6 greșeli  
- [ ] Ai formatat codul cu **Shift + Alt + F** (Mac: Shift + Option + F)  
- [ ] Ai adăugat comentarii care marchează secțiunile paginii  
- [ ] Ai verificat în DevTools, fila Console (dacă imaginea nu este în folder, mesajul „404” pentru ea este normal)  

---

## De făcut azi — „Repară pagina stricată”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | O pagină cu cod indentat corect, trei comentarii și o greșeală găsită cu ajutorul DevTools |
| **Complet** | Minim + o pagină stricată, reparată complet, și cod ordonat cu formatarea automată din VS Code |

### Pasul 1 — Minim
Copiază codul din Exercițiul A într-un fișier nou, `curat.html`, între `<body>` și `</body>`, și indentează-l corect. Apoi adaugă trei comentarii care marchează secțiunile.

- [ ] Codul din `curat.html` este indentat corect, cu **Tab** sau cu **Shift + Alt + F**  
- [ ] Ai trei comentarii care marchează secțiunile  
- [ ] Ai găsit o greșeală cu ajutorul DevTools (Elements sau Console)  

### Pasul 2 — Complet
Repari pagina stricată din Exemplul 8:

- [ ] Ai găsit și ai reparat toate cele 6 greșeli  
- [ ] Ai formatat codul cu **Shift + Alt + F** (Mac: Shift + Option + F)  
- [ ] Ai adăugat comentarii care marchează secțiunile paginii  
- [ ] Ai verificat în DevTools, fila Console (dacă imaginea nu este în folder, mesajul „404” pentru ea este normal)  

---

## Bonus ★★★ — Provocare: Duelul detectivilor
*Doar dacă ai terminat Complet.*

Căutați greșeli împreună, ca doi detectivi.

- [ ] Creează cu un coleg câte o pagină cu 5 greșeli ascunse și schimbați paginile: fiecare găsește greșelile celuilalt  
- [ ] În Elements, apasă clic dreapta pe un tag și caută opțiunea de a șterge temporar acel tag; apoi reîncarcă pagina  
- [ ] Cu profesorul, încearcă un validator HTML (un site care verifică codul) și citește mesajele lui  
- [ ] Deschide DevTools în modul pentru telefon (icoana cu telefon și tabletă) și vezi cum arată pagina mai îngustă  

---

## Greșeli frecvente
1. **Ai indentat cu spații diferite** (uneori 2, alteori 5) — folosește formatarea automată.  
2. **Ai uitat `-->` la un comentariu** — tot ce urmează dispare din pagină.  
3. **Ai pus un comentariu în interiorul unui tag**, de exemplu `<p <!-- text --> >` — comentariul se scrie între taguri, nu în interiorul lor.  
4. **Ai schimbat mai multe lucruri deodată** și nu mai știi ce a reparat pagina — schimbă un singur lucru și testezi.  
5. **Ai reparat în DevTools, dar nu în VS Code** — schimbarea se pierde la reîncărcare.  
6. **Ai uitat să salvezi** înainte să te uiți în browser.  
7. **Ai căutat greșeala doar în locul unde se vede efectul** — privește și mai sus.  
8. **Ai șters codul în loc să îl comentezi** — un comentariu ascunde codul fără să îl piardă.  

---

## Recapitulare pe scurt
1. Indentarea arată ce este în interiorul a ce: 2 spații pentru fiecare nivel.  
2. Formatarea automată: **Shift + Alt + F** (Mac: Shift + Option + F).  
3. Comentariul `<!-- ... -->` este ignorat de browser.  
4. **Ctrl + /** (Mac: Cmd + /) pune sau scoate comentariul pe liniile selectate.  
5. Căutăm greșeala pas cu pas și schimbăm un singur lucru odată.  
6. **F12** deschide DevTools; **Elements** arată structura, **Console** arată erorile.  

## Quiz scurt
- Cu câte spații indentezi un tag aflat în interiorul altui tag?  
- Cum se scrie un comentariu în HTML?  
- Ce arată fila Elements?  
- Ce înseamnă mesajul „404” din Console?  
- De ce schimbi un singur lucru odată când repari o pagină?

## Temă
1. Alege cea mai lungă pagină făcută de tine în acest modul. Formatează pagina cu **Shift + Alt + F**, adaugă comentarii care marchează secțiunile și verifică în DevTools, fila Console, că nu există erori. Notează pe foaie ce ai reparat.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Metoda „jumătate-jumătate”.**

Dacă pagina are 40 de linii și nu știi unde este greșeala: pune în comentariu **jumătatea de jos**. Dacă problema dispare, greșeala era acolo; dacă nu, era în prima jumătate. Împarți din nou în două, până găsești linia exactă.

**Acasă 2 — Schimbăm pagina doar pentru test.**

În Elements poți apăsa **de două ori** pe un text și poți scrie altceva. Pagina se schimbă imediat, dar **numai în browser**. Fișierul tău din VS Code **nu se schimbă**. Când reîncarci pagina, totul revine.

> Este un loc bun să încerci idei: „Cum ar arăta titlul în altă culoare?” Dacă îți place schimbarea, scrie schimbarea și în VS Code, altfel se pierde.

4. **Încă patru exerciții (B–E):**

**B — Comentarii.** În `curat.html`, adaugă trei comentarii care spun ce face fiecare secțiune. Ascunde apoi desertul cu un comentariu și verifică în browser. Apoi afișează din nou desertul.

**C — Greșelile pe foaie.** Pe foaie, scrie fiecare dintre cele 6 greșeli din Exemplul 8 și ce ai schimbat ca să o repari.

**D — Misiune DevTools.** Deschide site-ul tău din Lecția 8. Cu DevTools:
1. găsește în Elements meniul de linkuri;  
2. schimbă temporar culoarea unui titlu;  
3. scrie greșit un link către o imagine, salvează și citește mesajul din Console.  

Notează pe foaie ce ai găsit.

**E — Explică cu cuvintele tale.** Pe foaie: de ce ne ajută indentarea? Dă un exemplu de situație în care un comentariu este util.

## Ce urmează — Lecția 10
Ultimul proiect din modul: **„Pagina mea despre mine”**. Folosești tot ce ai învățat: schelet, titluri, liste, linkuri, imagini, culori și multe pagini.

---

## Răspunsuri
- **Quiz scurt:** (1) cu 2 spații; (2) între `<!--` și `-->`, de exemplu `<!-- notiță -->`; (3) structura paginii: tagurile, unul în interiorul altuia; (4) browserul nu a găsit fișierul cerut (de exemplu o imagine cu numele scris greșit); (5) ca să știi exact ce schimbare a reparat pagina (sau a stricat altceva).  
- **Dacă ritmul clasei este lent:** Exemplul 6 (fila Console) se poate face și ca bonus; rămâneți la indentare, comentarii și repararea paginii.  
- **Exemplul 5:** `<h1>` nu a fost închis; trebuie `</h1>`.  
- **Exemplul 8 (cele 6 greșeli):** (1) `<h1>…<h1>` trebuie `<h1>…</h1>`; (2) tagurile sunt încrucișate: `<strong>neagră.</strong></p>`; (3) `pisica.jpgg` trebuie `pisica.jpg`; (4) primul `<li>` nu este închis: `<li>Hrană</li>`; (5) `despre.htm` trebuie `despre.html`; (6) `color = red` trebuie `color: red`.  
- **Exercițiul A:** `ol` cu `li` pe nivelul 1, iar lista `ul` cu `li` imbricată în al doilea `li`, cu încă un nivel de spații.  
- **Tema, exercițiul D:** cel mai frecvent, mesajul din Console este „404 (Not Found)” și arată numele greșit al fișierului.  
- **Tema, exercițiul E:** indentarea arată ce este în interiorul a ce și ajută să găsești tagurile neînchise; comentariile sunt utile ca notițe sau ca să ascunzi temporar o bucată de cod.
