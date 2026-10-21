# LECȚIA 10 — Proiect: Fișa animalului meu preferat
**Modulul 2 · HTML II: Pagini mai bogate · 2 ore**  
**Code Maker Club · HTML Builder**

> Ai învățat tabele, formulare, sunete, filme, hărți și taguri cu înțeles. Azi le pui pe toate într-o singură pagină: **fișa animalului tău preferat**, ca într-o mică enciclopedie.  
> Proiect: **„Fișa animalului meu preferat”** · folder: `Prenume_Nume_W2_L10` (ex. `Ana_Pop_W2_L10`)

---

## Obiectiv
La finalul orei ai o pagină completă despre un animal, făcută din taguri cu înțeles, cu text, imagine, tabel, sunet, formular de sondaj și clase pentru aspect.  
**Minim:** o pagină cu `header`, `nav`, `main` cu cel puțin 3 secțiuni (despre animal, fișă în tabel, sondaj cu formular) și `footer`.  
**Ținta orei (Complet):** + un sunet sau un film, o hartă a unui loc public, clase (`.carte`) pentru aspect, comentarii, cod indentat și o prezentare de un minut.

## De ce contează
Un proiect adevărat te obligă să folosești lucrurile învățate **împreună**: dacă o parte nu merge, vezi imediat. Este și un bun portofoliu: o pagină pe care o poți arăta familiei.

---

## Siguranță înainte de toate
- Alegi **un animal** (nu o persoană).  
- Nu scrii date personale (nume complet, adresă, școală, telefon).  
- Imaginile, sunetele și filmele sunt **din pachetul media**, făcute de tine sau alese cu profesorul. Nu folosim melodii și poze luate din internet.  
- Formularul este **de exercițiu**: nu trimite nimic și nu cere parole sau date reale.  
- Harta este a unui **loc public** (o grădină zoologică, un parc, un muzeu).

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Plan: ce animal, ce secțiuni (**Exemplul 1**) |
| 15–30 | Schelet, stil și antet (**Exemplele 2–3**) |
| 30–70 | Secțiunile paginii (**Exemplele 4–8**) |
| 70–90 | Verificare cu lista (**Exemplul 9**) |
| 90–100 | Test cu un coleg |
| 100–115 | Prezentare de un minut (**Exemplul 10**) |
| 115–120 | Recap și temă |

---

## 1. Planul

### Exemplul 1 — Harta paginii

Alege animalul (de exemplu pisica) și desenează pe foaie harta paginii:

```text
header: titlul fișei
nav: Despre | Fișa | Sunet | Sondaj | Harta
main:
  section "Despre animal"    (text + imagine + curiozități)
  section "Fișa în cifre"    (tabel)
  section "Cum sună"         (audio / video)
  section "Sondaj"           (formular)
  section "Harta"            (iframe cu un loc public)
  aside "Știai că…"
footer
```

Scrie sub fiecare parte ce vei pune în ea. Alege 3–4 culori care se potrivesc.

**Încearcă tu (8 min)**  
- [ ] Alege animalul și scrie numele animalului pe foaie  
- [ ] Desenează pe foaie harta paginii, cu tagurile potrivite  
- [ ] Notează pe foaie 4 lucruri despre animal (ce mănâncă, unde trăiește, cât trăiește, un lucru ciudat)  
- [ ] Creează în folderul proiectului folderele `imagini` și `media` și pune în ele fișierele de care ai nevoie  

---

## 2. Scheletul, stilul și antetul

### Exemplul 2 — Scheletul cu stil

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fișa animalului meu: pisica</title>
  <style>
    body {
      background-color: lightyellow;
    }
    h1 {
      color: tomato;
    }
    h2 {
      color: navy;
    }
    .carte {
      border: 2px solid navy;
      padding: 10px;
      margin: 10px;
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
  </style>
</head>
<body>
  <!-- aici vin părțile paginii -->
</body>
</html>
```

Aici ai deja tot stilul de care ai nevoie: culorile paginii, chenarul cărților (`.carte`) și liniile tabelului.

### Exemplul 3 — `header` și `nav`

```html
<header>
  <h1>Pisica, prietena noastră</h1>
  <p>Fișa animalului meu preferat</p>
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
```

Fiecare link duce la un `id` pe care îl vei pune pe secțiuni.

**Gata când:**  
- [ ] Ai scheletul complet, cu `<style>` în `<head>`  
- [ ] Ai `header` cu `h1` și `nav` cu linkuri către secțiuni  
- [ ] Ai alegerea animalului și titlul paginii potrivit  

---

## 3. Secțiunile paginii

Totul din acest capitol se scrie într-un `<main>`, după `<nav>`. Începe `<main>` așa:

```html
<main>
  <!-- secțiunile vin aici -->
</main>
```

### Exemplul 4 — „Despre animal”

```html
<section id="despre" class="carte">
  <h2>Despre pisică</h2>
  <figure>
    <img src="imagini/pisica.jpg" alt="O pisică gri care doarme pe o pernă" width="300">
    <figcaption>O pisică gri.</figcaption>
  </figure>
  <p>Pisica este un animal de companie. Are blană moale, ochi mari și mustăți.</p>
  <p>Pisicile sunt <strong>carnivore</strong>: mănâncă mai ales carne.</p>
</section>
```

Scrie propriul text, cu cuvintele tale. Imaginea trebuie să aibă `alt` care o descrie.

### Exemplul 5 — „Fișa în cifre” (tabel)

```html
<section id="fisa" class="carte">
  <h2>Fișa în cifre</h2>
  <table>
    <caption>Pisica domestică</caption>
    <thead>
      <tr>
        <th scope="col">Caracteristică</th>
        <th scope="col">Valoare</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Hrană</th>
        <td>carne</td>
      </tr>
      <tr>
        <th scope="row">Greutate obișnuită</th>
        <td>aproximativ 3–5 kg</td>
      </tr>
      <tr>
        <th scope="row">Cât trăiește, în casă</th>
        <td>aproximativ 12–18 ani</td>
      </tr>
      <tr>
        <th scope="row">Somn</th>
        <td>aproximativ 12–16 ore pe zi</td>
      </tr>
    </tbody>
  </table>
</section>
```

Pune în tabel date verificate (din cartea de științe sau de la profesor). Dacă nu știi o cifră exactă, scrie „aproximativ”.

### Exemplul 6 — „Cum sună” (sunet sau film)

```html
<section id="sunet" class="carte">
  <h2>Cum sună</h2>
  <audio src="media/pisica.mp3" controls preload="none"></audio>
  <p><em>Descriere: sunetul unei pisici care toarce încet.</em></p>
</section>
```

Fără `autoplay`! Poți pune și un `<video>` cu `controls`, `width` și `poster`. Descrie ce se aude sau se vede.

### Exemplul 7 — „Sondaj” (formular)

```html
<section id="sondaj" class="carte">
  <h2>Sondaj: ce animal preferi?</h2>
  <form>
    <fieldset>
      <legend>Alege animalul preferat:</legend>

      <input type="radio" id="pisica" name="animal" value="pisica" required>
      <label for="pisica">Pisică</label><br>

      <input type="radio" id="catel" name="animal" value="catel">
      <label for="catel">Cățel</label><br>

      <input type="radio" id="alt" name="animal" value="alt">
      <label for="alt">Altul</label>
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

### Exemplul 8 — „Știai că” și „Hartă”

```html
<aside class="carte">
  <h2>Știai că…</h2>
  <p>Pisicile își petrec o mare parte din zi dormind.</p>
</aside>

<section id="harta" class="carte">
  <h2>Unde putem vedea animale?</h2>
  <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=26.07%2C44.42%2C26.12%2C44.45&layer=mapnik"
          width="500" height="300" title="Harta unui loc public din București" loading="lazy"></iframe>
</section>
```

Harta este opțională și se pune **doar cu profesorul**, pentru un loc public.

Apoi închide pagina cu subsolul, după `</main>`:

```html
<footer>
  <p>Pagină făcută de Ana, în anul 2026.</p>
</footer>
```

**Gata când:**  
- [ ] Ai secțiunea „Despre animal” cu text și imagine cu `alt`  
- [ ] Ai tabelul cu cel puțin 4 rânduri de date verificate, cu `caption`, `thead`, `tbody`  
- [ ] Ai un sunet sau un film cu `controls` și o descriere  
- [ ] Ai formularul de sondaj cu `fieldset`, `legend`, `label` și butoane  
- [ ] Ai `aside` și `footer`  
- [ ] Meniul duce la fiecare secțiune cu `id` potrivit  

---

## 4. Verificarea

### Exemplul 9 — Lista de verificare

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

---

## 5. Prezentarea

### Exemplul 10 — Un minut despre fișa ta

1. „Fișa mea este despre …”  
2. „Am folosit … taguri cu înțeles: …”  
3. „Partea mea preferată este … pentru că …”  
4. „Cel mai greu lucru a fost … și am rezolvat așa: …”  
5. „Ce vreau să învăț mai departe: …”

> Dacă ceva nu merge, spune și asta. Nimeni nu are un cod perfect, iar a vorbi despre greșeli face parte din meserie.

**Gata când:**  
- [ ] Ai pregătit prezentarea de un minut  
- [ ] Ai prezentat fișa colegilor sau profesorului  
- [ ] Ai spus un lucru reușit și un lucru pe care îl vei îmbunătăți  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Fișa animalului meu preferat” (obligatoriu)
O pagină cu minimum: `header`, `nav`, `main` cu 3 secțiuni (despre, tabel, sondaj), `footer`, imagine cu `alt`, tabel cu `caption` și `thead`, formular cu validare, o clasă `.carte` și `id`-uri pentru meniu.

### Exercițiul B — Autoevaluare
Pe foaie, pune o notă de la 1 la 5 pentru fiecare: ordinea codului, tagurile cu înțeles, tabelul, formularul, textul scris de tine. Scrie ce vei face mai bine data viitoare.

### Exercițiul C — Fișa greșelilor
Scrie pe foaie trei greșeli făcute în acest modul și cum ai găsit sau ai reparat fiecare greșeală.

### Exercițiul D — Întrebări pentru Modulul 3
Scrie două lucruri pe care ai vrea să le schimbi la aspectul paginii (culori, litere, așezarea pe ecran) și pe care crezi că le vei putea face cu CSS.

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W2_L10` conține `index.html` și folderele `imagini` și `media`  
- [ ] Ai bifat lista de verificare din Exemplul 9  
- [ ] Ai făcut autoevaluarea și fișa greșelilor  
- [ ] Ai prezentat pagina și ai făcut testul cu un coleg  

---

## Bonus / Provocare (dacă ai terminat)
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
5. **Cifre luate din memorie, fără verificare** — verifică în carte sau cu profesorul.  
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
Alege un lucru de îmbunătățit din feedbackul colegului sau din lista de verificare și repară acel lucru. Notează pe foaie ce ai schimbat. Adu la ora următoare versiunea finală.

## Ce urmează — Modulul 3: CSS
Învățăm să dăm aspect paginilor: culori, litere, spații, așezare pe ecran, animații și pagini care arată bine și pe telefon.

---

## Răspunsuri
- **Evaluare sugerată (25 puncte):** schelet și taguri cu înțeles corecte (4); secțiunea „Despre” cu imagine și `alt` (3); tabel complet și corect (4); sunet sau film cu `controls` și descriere (3); formular cu etichete și validare (4); clasă și `id` folosite corect (3); cod indentat, comentarii și fără erori în Console (2); fără date personale (1); prezentare (1).  
- **Verificați:** cifrele din tabel (să fie aproximativ corecte), ca la științe; locurile din hartă să fie publice; să nu existe date personale.  
- **Greșeli frecvente la verificare:** un singur `h1` și `main`, `alt` la imagini, `id` unic, nume de fișiere cu litere mici, fără spații.  
- **Exercițiul D:** adunați întrebările și folosiți întrebările la începutul Modulului 3.
