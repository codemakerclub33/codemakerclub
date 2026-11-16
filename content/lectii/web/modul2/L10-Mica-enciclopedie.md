# LECȚIA 10 — Mica enciclopedie
### Reluare: tabele, formulare, media și taguri într-o singură pagină
**Modulul 2 · HTML II: Pagini mai bogate · 2 ore**  
**Code Maker Club · HTML Builder**

> Ai ajuns la finalul modulului! Ai învățat tabele, formulare, sunete, filme, hărți și taguri cu înțeles. Azi le pui pe toate într-o singură pagină: o **mică enciclopedie** despre un oraș, un sport sau un joc, ales de tine.  
> Proiect: **„Mica enciclopedie”** · folder: `Prenume_Nume_W2_L10` (ex. `Ana_Pop_W2_L10`)

---

## Ce facem azi
La final ai o **pagină de enciclopedie** scrisă de tine, cu antet și meniu, o secțiune de prezentare, o fișă în tabel, un sunet, un sondaj cu formular, o hartă și o notă „Știai că…”. Nu învățăm taguri noi: **reiei lecțiile 1–9** și le aduni într-o pagină, folosind tagurile cu înțeles și clasele. Un proiect adevărat te obligă să folosești lucrurile învățate **împreună**: dacă o parte nu merge, vezi imediat. Este și un bun portofoliu, o pagină pe care o poți arăta familiei.

> **Siguranță înainte de toate:** alegi un **oraș**, un **sport**, un **joc** sau **tema ta de pe Wikipedia** (dacă nu e o persoană). Nu scrii date personale (nume complet, adresă, telefon). Imaginile, sunetele și filmele sunt **din pachetul media**, făcute de tine sau alese cu un adult; nu folosim melodii și poze luate din internet, iar în poze nu apar persoane. Formularul este **de exercițiu**: nu trimite nimic și nu cere parole sau date reale. Harta este a unui **loc public** (un parc, un muzeu, o piață).

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Planul: ce subiect, ce secțiuni (**Exemplul 1**) |
| 10–25 | Schelet, stil, antet și meniu (**Exemplul 2**) |
| 25–50 | Prezentarea și fișa în tabel (**Exemplele 3–4**) |
| 50–70 | Sunetul și sondajul (**Exemplele 5–6**) |
| 70–85 | Harta, nota laterală și finalul (**Exemplul 7**) |
| 85–118 | Verificare, test cu un coleg și prezentare de un minut (**Exemplul 8**) |
| 118–120 | Recap și temă |

---

## Instrucțiuni noi azi

Azi nu învățăm taguri noi. Reiei ce știi deja, din lecțiile trecute:

| Ce reiei | De unde | Unde apare azi |
|----------|---------|----------------|
| Tabel cu `caption`, `thead`, `tbody` | Lecțiile 1–2 | „Fișa în cifre” |
| Formular cu `label`, `radio`, `textarea`, validare | Lecțiile 3–5 | „Sondaj” |
| `audio`, `video` | Lecția 6 | „Cum sună” |
| `iframe` cu hartă | Lecția 7 | „Harta” |
| `header`, `nav`, `main`, `section`, `aside`, `footer` | Lecția 8 | toată pagina |
| `div`, `id`, `class` | Lecția 9 | `.carte` și meniul |

---

## 1. Planul

### Exemplul 1 — Harta paginii

Alege subiectul (de exemplu **un oraș**, **un sport** sau **un joc**) și scrie într-un comentariu harta paginii:

```text
header: titlul enciclopediei
nav: Despre | Fișa | Sunet | Sondaj | Harta
main:
  section "Despre subiect"   (text + imagine + curiozități)
  section "Fișa în cifre"    (tabel)
  section "Cum sună"         (audio / video)
  section "Sondaj"           (formular)
  section "Harta"            (iframe cu un loc public)
  aside "Știai că…"
footer
```

Scrie sub fiecare parte ce vei pune în ea. Alege 3–4 culori care se potrivesc. În exemple folosim orașul **București**; tu înlocuiești cu subiectul tău (pentru un sport sau un joc, harta poate arăta locul unde se joacă, iar sunetul poate fi al mingii sau al jocului).

**Încearcă tu (8 min)**  
- [ ] Alege subiectul și scrie-l într-un comentariu (poate fi articolul tău de pe Wikipedia, dacă nu e despre o persoană)  
- [ ] Deschide în VS Code pagina `tema.html` din lecțiile trecute: de acolo poți copia text, tabel, hartă și sondaj  
- [ ] Scrie într-un comentariu harta paginii, cu tagurile potrivite  
- [ ] Notează într-un comentariu 4 lucruri despre subiect (ce este, unde se găsește, un lucru cunoscut, un lucru ciudat)  
- [ ] Creează în folderul proiectului folderele `imagini` și `media` și pune în ele fișierele de care ai nevoie  

---

## 2. Scheletul, stilul și antetul

### Exemplul 2 — Scheletul cu stil, `header` și `nav`

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mica enciclopedie: București</title>
  <style>
    body {
      background-color: lightyellow;
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: 0 auto;
    }
    header {
      background-color: navy;
      color: white;
      text-align: center;
      padding: 30px 10px;
      border-radius: 12px;
    }
    h1 {
      color: gold;
    }
    h2 {
      color: navy;
    }
    nav ul {
      list-style: none;
      text-align: center;
      padding: 0;
    }
    nav li {
      display: inline-block;
      margin: 5px;
    }
    nav a {
      background-color: tomato;
      color: white;
      text-decoration: none;
      padding: 8px 14px;
      border-radius: 20px;
    }
    .carte {
      border: 2px solid navy;
      border-radius: 12px;
      padding: 10px 20px;
      margin: 15px 0;
      background-color: white;
    }
    table, th, td {
      border: 1px solid black;
      border-collapse: collapse;
      padding: 6px;
    }
    th {
      background-color: lightblue;
    }
    footer {
      text-align: center;
      color: gray;
    }
  </style>
</head>
<body>
  <header>
    <h1>București, orașul cu tramvaie</h1>
    <p>Mica enciclopedie</p>
  </header>

  <nav>
    <ul>
      <li><a href="#despre">Despre</a></li>
      <li><a href="#fisa">Fișa</a></li>
      <li><a href="#sunet">Sunet</a></li>
      <li><a href="#sondaj">Sondaj</a></li>
      <li><a href="#harta">Harta</a></li>
    </ul>
  </nav>

  <main>
    <!-- secțiunile vin aici -->
  </main>

  <footer>
    <p>Pagină făcută de Ana, în anul 2026.</p>
  </footer>
</body>
</html>
```

Aici ai tot stilul de care ai nevoie: un antet albastru cu titlu auriu, un meniu cu butoane rotunjite, chenarul cărților (`.carte`) și liniile tabelului. Regulile de stil ți le dăm gata: le copiezi, iar în Modulul 3 înveți să le scrii singur. Fiecare link din meniu duce la un `id` pe care îl vei pune pe o secțiune. De aici înainte, exemplele arată ce scrii **în interiorul lui `<main>`**.

**Încearcă tu (7 min)**  
- [ ] Scrie scheletul complet, cu `<style>` în `<head>`  
- [ ] Adaugă `header` cu `h1`, `nav` cu cinci linkuri, `main` gol și `footer` (doar prenumele și anul)  

---

## 3. Secțiunile paginii

### Exemplul 3 — „Despre subiect”

```html
<section id="despre" class="carte">
  <h2>Despre București</h2>
  <figure>
    <img src="imagini/oras.jpg" alt="Clădiri și un parc într-un oraș" width="300">
    <figcaption>Un colț de oraș.</figcaption>
  </figure>
  <p>București este capitala României. Are străzi mari, parcuri, muzee și tramvaie.</p>
  <p>Orașul are și un <strong>metrou</strong>, cu care te poți plimba rapid.</p>
</section>
```

Scrie propriul text, cu cuvintele tale. Imaginea trebuie să aibă `alt` care o descrie, fără persoane în ea.

### Exemplul 4 — „Fișa în cifre” (tabel)

```html
<section id="fisa" class="carte">
  <h2>Fișa în cifre</h2>
  <table>
    <caption>București pe scurt</caption>
    <thead>
      <tr>
        <th scope="col">Caracteristică</th>
        <th scope="col">Valoare</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Țara</th>
        <td>România</td>
      </tr>
      <tr>
        <th scope="row">Rolul</th>
        <td>capitala țării</td>
      </tr>
      <tr>
        <th scope="row">Râul din oraș</th>
        <td>Dâmbovița</td>
      </tr>
      <tr>
        <th scope="row">Metrou</th>
        <td>da</td>
      </tr>
    </tbody>
  </table>
</section>
```

Pune în tabel date verificate (dintr-o carte, dintr-o enciclopedie sau de la un adult). Dacă nu știi o cifră exactă, scrie „aproximativ”. Pentru un sport poți pune: numărul de jucători, durata, echipamentul, locul unde se joacă.

### Exemplul 5 — „Cum sună” (sunet sau film)

```html
<section id="sunet" class="carte">
  <h2>Cum sună</h2>
  <audio src="media/tramvai.mp3" controls preload="none"></audio>
  <p><em>Descriere: un tramvai care trece pe o stradă liniștită.</em></p>
</section>
```

Fără `autoplay`! Poți pune și un `<video>` cu `controls`, `width` și `poster`. Descrie ce se aude sau se vede.

### Exemplul 6 — „Sondaj” (formular)

```html
<section id="sondaj" class="carte">
  <h2>Sondaj: ce ai vizita?</h2>
  <form>
    <fieldset>
      <legend>Alege un loc:</legend>

      <input type="radio" id="muzeu" name="loc" value="muzeu" required>
      <label for="muzeu">Un muzeu</label><br>

      <input type="radio" id="parc" name="loc" value="parc">
      <label for="parc">Un parc</label><br>

      <input type="radio" id="piata" name="loc" value="piata">
      <label for="piata">O piață</label>
    </fieldset>

    <p>
      <label for="motiv">De ce îți place?</label><br>
      <textarea id="motiv" name="motiv" rows="3" cols="30" maxlength="100"></textarea>
    </p>

    <p>
      <button type="submit">Trimite</button>
      <button type="reset">Șterge tot</button>
    </p>
  </form>
</section>
```

Formularul este **de exercițiu**: nu cere date personale. `required` și `maxlength` sunt validare.

### Exemplul 7 — „Harta”, „Știai că” și finalul

```html
<section id="harta" class="carte">
  <h2>Unde ne plimbăm?</h2>
  <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=26.07%2C44.42%2C26.12%2C44.45&layer=mapnik"
          width="500" height="300" title="Harta centrului orașului București" loading="lazy"></iframe>
</section>

<aside class="carte">
  <h2>Știai că…</h2>
  <p>Prin București curge râul Dâmbovița.</p>
</aside>
```

Harta se pune **doar împreună cu un adult**, pentru un loc public. Subsolul (`footer`) este deja în schelet, după `</main>`.

**Încearcă tu (25 min)**  
- [ ] Fă secțiunea „Despre” cu text și imagine cu `alt` (poți folosi paragrafele din `tema.html`)  
- [ ] Fă tabelul cu cel puțin 4 rânduri de date verificate, cu `caption`, `thead`, `tbody`  
- [ ] Adaugă un sunet sau un film cu `controls` și o descriere  
- [ ] Pune la sfârșit sursa articolului de pe Wikipedia într-un `<small>`  
- [ ] Adaugă formularul de sondaj cu `fieldset`, `legend`, `label` și butoane  
- [ ] Adaugă harta, `aside` și verifică meniul: fiecare link duce la un `id`  

---

## 4. Verificarea

### Exemplul 8 — Lista de verificare, testul și prezentarea

Pune o bifă doar la ce este **adevărat**:

- [ ] Pagina are scheletul complet și un `<title>` potrivit  
- [ ] Am `header`, `nav`, un singur `main` și `footer`  
- [ ] Un singur `<h1>`, titlurile merg în ordine (`h1`, `h2`, `h3`)  
- [ ] Toate imaginile au `alt`  
- [ ] Tabelul are `caption`, antet și date corecte  
- [ ] Fișierul audio sau video merge, are `controls` și descriere, fără `autoplay` cu sunet  
- [ ] Formularul are etichete legate cu `for` și `id`  
- [ ] Fiecare `id` este unic în pagină  
- [ ] Codul este indentat și are comentarii pentru fiecare secțiune  
- [ ] În Console (DevTools) nu apare niciun mesaj „404”  
- [ ] Nu există date personale în pagină  

**Test cu un coleg:** fiecare deschide pagina celuilalt cu Live Server, o parcurge cu meniul și spune **un lucru reușit** și **un lucru de îmbunătățit**. Repară cel puțin un lucru.

**Prezentare de un minut:**

1. „Enciclopedia mea este despre …”  
2. „Am folosit … taguri cu înțeles: …”  
3. „Partea mea preferată este … pentru că …”  
4. „Cel mai greu lucru a fost … și am rezolvat așa: …”  
5. „Ce vreau să învăț mai departe: …”

> Dacă ceva nu merge, spune și asta. Nimeni nu are un cod perfect, iar a vorbi despre greșeli face parte din meserie.

**Încearcă tu (25 min)**  
- [ ] Parcurge lista de verificare și repară ce nu este bifat  
- [ ] Fă testul cu un coleg și notează un lucru reușit și unul de îmbunătățit  
- [ ] Pregătește prezentarea de un minut și prezintă-o  

---

## De făcut azi — „Mica enciclopedie”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | O pagină cu `header`, `nav`, `main` cu cel puțin 3 secțiuni (despre subiect, fișă în tabel, sondaj cu formular) și `footer` |
| **Complet** | Minim + un sunet sau un film, o hartă a unui loc public, clasa `.carte` pentru aspect, comentarii, cod indentat, lista de verificare bifată și prezentarea de un minut |

### Pasul 1 — Minim
Fă folderul `Prenume_Nume_W2_L10` cu `index.html` și folderul `imagini`.

- [ ] Pagina are scheletul complet, un `<title>` potrivit și un singur `<h1>`  
- [ ] Ai `header`, `nav` cu linkuri către secțiuni, `main` și `footer`  
- [ ] Ai secțiunile „Despre” (cu imagine cu `alt`), „Fișa” (tabel cu `caption` și `thead`) și „Sondaj” (formular cu validare)  
- [ ] Fiecare secțiune are `id`, iar meniul duce la ea  

### Pasul 2 — Complet
Adaugi restul și pui ordine în cod:

- [ ] Ai un sunet sau un film cu `controls` și o descriere, într-un folder `media`  
- [ ] Ai o hartă a unui loc public, cu `title`, și un `aside` „Știai că…”  
- [ ] Secțiunile folosesc clasa `.carte`, iar codul este indentat și are comentarii  
- [ ] Ai bifat lista de verificare, ai făcut testul cu un coleg și ai reparat un lucru  
- [ ] Ai pregătit prezentarea de un minut  

---

## Bonus ★★★ — Provocare: Două pagini
*Doar dacă ai terminat Complet.*

- [ ] Adaugă o a doua pagină, `curiozitati.html`, legată de prima printr-un meniu  
- [ ] Adaugă un `<video>` cu `poster`, `controls` și `width`  
- [ ] Adaugă o a doua clasă (`.rara`) și folosește clasa la o secțiune  
- [ ] Adaugă un `<aside>` cu un test de două întrebări (fără răspuns automat încă: îl vei face în Modulul 4)  

---

## Greșeli frecvente
1. **Ai uitat `id` pe secțiuni** — linkurile din meniu nu merg.  
2. **Ai pus două `<main>` sau doi `<h1>`**.  
3. **Ai pus un `id` de două ori**.  
4. **Ai folosit `div` unde exista un tag cu înțeles**.  
5. **Date luate din memorie, fără verificare** — verifică într-o carte sau cu un adult.  
6. **Ai pus sunete sau poze din internet** fără permisiune.  
7. **Ai uitat `alt`, `caption` sau descrierea sunetului**.  
8. **Ai pus date personale în pagină sau în formular**.  
9. **Ai uitat să salvezi** înainte de test.  

---

## Recapitulare pe scurt
În Modulul 2 ai învățat: tabele (`table`, `tr`, `th`, `td`, `colspan`, `rowspan`, `thead`, `tbody`, `tfoot`), formulare (`input`, `label`, `textarea`, `select`, `radio`, `checkbox`, validare), media (`audio`, `video`), `iframe`, taguri cu înțeles (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`), `div`, `span`, `id` și `class`. Acum poți construi pagini bogate și bine organizate.

## Quiz final de modul
- Ce face `colspan`?  
- Cum legi o etichetă de o casetă?  
- Care este diferența dintre `radio` și `checkbox`?  
- Ce atribut cere să fie completat un câmp?  
- Cum pui un sunet cu butoane?  
- La ce folosește `title` la un iframe?  
- Care este diferența dintre `<head>` și `<header>`?  
- Care este diferența dintre `id` și `class`?

## Temă
1. Alege **un lucru de îmbunătățit** din feedbackul colegului sau din lista de verificare și corectează acel lucru. Notează într-un comentariu ce ai schimbat. Adu la ora următoare, în folderul `Prenume_Nume_W2_L10`, versiunea finală.  
2. **Autoevaluare.** Într-un comentariu din cod, pune câte o notă de la 1 la 5 pentru fiecare: ordinea codului, tagurile cu înțeles, tabelul, formularul, textul scris de tine. Scrie ce vei face mai bine data viitoare.  
3. **Fișa greșelilor.** Scrie într-un comentariu trei greșeli făcute în acest modul și cum ai găsit și cum ai reparat fiecare greșeală.  
4. **Întrebări pentru Modulul 3.** Scrie două lucruri pe care ai vrea să le schimbi la aspectul paginii (culori, litere, așezarea pe ecran) și pe care crezi că le vei putea face cu CSS.  
5. **Exemplu pentru acasă.**

**Acasă 1 — O a doua enciclopedie.** Alege alt subiect (un sport sau un joc, dacă prima a fost un oraș) și refă pagina cu același plan. Câte părți poți refolosi fără să le schimbi?

## Ce urmează — Modulul 3: CSS
Învățăm să dăm aspect paginilor: culori, litere, spații, așezare pe ecran, animații și pagini care arată bine și pe telefon.

---

## Răspunsuri
- **Quiz final de modul:** (1) `colspan` unește celule pe orizontală, pe mai multe coloane; (2) valoarea `for` din `<label>` este la fel cu `id` din `<input>`; (3) `radio` permite o singură alegere dintr-un grup, `checkbox` permite oricâte; (4) `required`; (5) `<audio src="media/sunet.mp3" controls></audio>`; (6) descrie în cuvinte conținutul iframe-ului, pentru cititorul de ecran; (7) `<head>` conține informații invizibile (`title`, `meta`), iar `<header>` este antetul vizibil din `<body>`; (8) `id` este unic și apare o singură dată, `class` este pentru un grup de elemente.  
- **Evaluare sugerată (25 puncte):** schelet și taguri cu înțeles corecte (4); secțiunea „Despre” cu imagine și `alt` (3); tabel complet și corect (4); sunet sau film cu `controls` și descriere (3); formular cu etichete și validare (4); clasă și `id` folosite corect (3); cod indentat, comentarii și fără erori în Console (2); fără date personale (1); prezentare (1).  
- **Verificați:** datele din tabel (să fie corecte sau marcate „aproximativ”); locul din hartă să fie public; să nu existe date personale.  
- **Greșeli frecvente la verificare:** un singur `h1` și `main`, `alt` la imagini, `id` unic, nume de fișiere cu litere mici, fără spații.  
- **Tema, punctul 4:** adunați întrebările și folosiți-le la începutul Modulului 3.
