# LECȚIA 1 — Alegem subiectul și facem planul
**Modulul 5 · Site complet: HTML + CSS + JavaScript · 2 ore**  
**Code Maker Club · Web Builder**

> Până acum ai făcut pagini mici și jocuri mici. În acest modul construiești un **site adevărat**, din mai multe pagini, cu meniu, galerie de poze și formular care verifică ce scrie omul. Se construiește în 10 lecții, o bucată pe lecție. Azi nu scriem încă cod mult: **facem planul**, ca un arhitect înainte de casă.  
> Proiect: **„Planul site-ului meu”** · folder: `Prenume_Nume_W5` (ex. `Ana_Pop_W5`), același folder în toate lecțiile modulului

---

## Obiectiv
La finalul orei ai ales subiectul, ai desenat harta site-ului, ai ales culorile, ai pregătit imaginile și ai folderul proiectului, cu un test care arată că browserul își găsește fișierele.  
**Minim:** subiect ales, o hartă cu 3 pagini (Acasă, Galerie, Contact) și folderul proiectului creat.  
**Ținta orei (Complet):** + desen al fiecărei pagini, paletă de 4 culori, lista cu cel puțin 6 imagini pregătite corect, lista de texte scrise și un fișier `index.html` de test care se deschide în browser.

## De ce contează
Cine începe să scrie cod fără plan ajunge să refacă totul. Cine are un plan știe ce are de făcut la fiecare oră și își poate verifica munca la final. Așa lucrează și echipele care fac site-uri.

---

## Siguranță înainte de toate
- Alege un subiect potrivit pentru copii: **animale, sport, jocuri, spațiu, dinozauri, un hobby**. Nu faci un site despre tine sau despre o persoană.  
- **Fără date personale** pe site: nume complet, adresă, școală, telefon, email, poze cu oameni.  
- Imaginile sunt din **pachetul media**, desenate de tine sau făcute de tine (de exemplu un obiect sau un animal de jucărie). Nu luăm poze din internet fără voie.  
- Site-ul nu primește nimic de la vizitatori: formularul din lecția 7 doar **verifică** textul, nu îl trimite nicăieri.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Ce este un site, cum arată proiectul final (**Exemplul 1**) |
| 10–30 | Alegem subiectul și titlul (**Exemplul 2**) |
| 30–55 | Harta site-ului și desenul paginilor (**Exemplul 3**) |
| 55–70 | Culori și fonturi (**Exemplul 4**) |
| 70–90 | Imagini și texte (**Exemplul 5**) |
| 90–110 | Folderul proiectului și testul (**Exemplul 6**) |
| 110–120 | Recap și temă |

---

## 1. Ce construim

### Exemplul 1 — Proiectul final

La final vei avea un site cu **3 pagini**:

```text
index.html     Acasă: titlu mare, carduri
galerie.html   Galerie: poze mici; când apeși una, apare mare
contact.html   Contact: formular care verifică textul
```

Toate au același antet cu meniu și același subsol. Pe telefon meniul se strânge într-un buton. Mai are un mod întunecat și un buton „înapoi sus”. Folosești tot ce ai învățat: **HTML** pentru structură, **CSS** pentru aspect, **JavaScript** pentru ce se întâmplă când apeși.

Ca exemplu, în lecții construim „Clubul animalelor”. Tu faci același lucru, dar cu **subiectul tău**.

**Încearcă tu (3 min)**  
- [ ] Spune cu voce tare ce face HTML, ce face CSS și ce face JavaScript într-un site

---

## 2. Subiectul

### Exemplul 2 — Alegem și scriem

Completează pe foaie:

```text
Titlul site-ului:    Clubul animalelor
Despre ce este:      animalele noastre preferate
Pentru cine este:    colegii și familia mea
Ce vreau să vadă:    6 animale, 6 poze, un loc unde pot scrie un mesaj
```

Un titlu bun este **scurt** și spune clar despre ce este vorba. Nu scrie numele tău real în titlu.

**Încearcă tu (10 min)**  
- [ ] Alege subiectul și titlul  
- [ ] Completează cele 4 rânduri de mai sus  
- [ ] Arată foaia unui coleg: înțelege despre ce este site-ul?

**Gata când:**  
- [ ] Ai un subiect potrivit pentru copii  
- [ ] Titlul este scurt și clar  
- [ ] Nu ai pus date personale

---

## 3. Harta și desenul paginilor

### Exemplul 3 — Harta site-ului

O **hartă a site-ului** arată paginile și drumurile dintre ele:

```text
            Acasă (index.html)
           /          |           \
   Galerie        Contact        (fiecare pagină are
(galerie.html)  (contact.html)    meniul către toate)
```

Apoi desenează pe foaie **fiecare pagină**, cu dreptunghiuri:

```text
+-----------------------------------+
| LOGO         Acasă Galerie Contact|   <- antet
+-----------------------------------+
|        TITLU MARE + buton         |   <- secțiunea de intrare
+-----------------------------------+
| [card] [card] [card]              |   <- carduri
| [card] [card] [card]              |
+-----------------------------------+
| subsol                            |
+-----------------------------------+
```

Desenul se numește **schiță** (în engleză, *wireframe*). Nu trebuie să fie frumos, trebuie să arate **unde stă fiecare lucru**.

**Încearcă tu (20 min)**  
- [ ] Desenează harta cu cele 3 pagini  
- [ ] Desenează schița paginii Acasă, a Galeriei și a paginii Contact  
- [ ] Scrie sub fiecare schiță ce cuvinte vor fi pe pagină

**Gata când:**  
- [ ] Ai harta cu 3 pagini  
- [ ] Ai 3 schițe, cu antet, conținut și subsol

---

## 4. Culori și fonturi

### Exemplul 4 — Paleta

Alege **4 culori** care se potrivesc și scrie ce rol are fiecare:

```text
principala:  #1d3557   (antet, subsol)
accent:      #e63946   (butoane, titluri de carduri)
fundal:      #f1faee   (fundalul paginii)
text:        #1d2d3a   (literele)
```

Reguli bune:
- Textul închis pe fundal deschis (sau invers) se citește ușor. Textul gri deschis pe alb **nu**.  
- Butonul are altă culoare decât fundalul, ca să se vadă.  
- Maximum **două** familii de litere, din sistem (de exemplu `Arial` și `Georgia`).

În lecția 8 vei face și o **variantă întunecată** a acestei palete, deci alege culori care pot fi schimbate ușor, ca variabile CSS.

**Încearcă tu (10 min)**  
- [ ] Scrie cele 4 culori cu rolul lor  
- [ ] Colorează 4 pătrate pe foaie și verifică dacă literele se văd pe ele

---

## 5. Imagini și texte

### Exemplul 5 — Pregătim materialele

Pentru galerie ai nevoie de **cel puțin 6 imagini**. Pregătește imaginile corect:

```text
1. Formatul este .jpg sau .png
2. Numele este cu litere mici, fără spații, fără diacritice: g1.jpg, g2.jpg ... g6.jpg
3. Fiecare imagine are cel mult 300 KB (dacă este mai mare, cere ajutor la micșorare)
4. Pentru fiecare imagine ai scris o propoziție care o descrie
```

De ce fără spații și diacritice? Pentru că **pe internet** un fișier numit `Pisică mică.jpg` se strică ușor în adresă. Un fișier numit `g1.jpg` merge peste tot.

Propoziția care descrie imaginea se numește **text alternativ** (`alt`). O folosesc cei care nu văd imaginea și cititoarele de ecran. Un `alt` bun spune ce este în poză: „Pisică portocalie care doarme pe o pernă”, nu „poza 1”.

Scrie și textele: un titlu pentru fiecare pagină, câte 1–2 propoziții pentru 6 carduri și textul de la „Contact”. Verifică ortografia.

**Încearcă tu (15 min)**  
- [ ] Alege 6 imagini și redenumește imaginile `g1.jpg … g6.jpg`  
- [ ] Scrie pe foaie textul alternativ al fiecăreia  
- [ ] Scrie textele pentru cele 6 carduri

---

## 6. Folderul proiectului

### Exemplul 6 — Structura și testul

Creează pe Desktop folderul `Prenume_Nume_W5` și în el:

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
    ... (până la g6.jpg)
```

Fișierele noi pot fi **goale** pentru moment (în VS Code: clic dreapta în listă → *New File*). Apoi pune în `index.html` un test:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <title>Test</title>
</head>
<body>
  <h1>Merge!</h1>
  <img src="imagini/g1.jpg" alt="Prima mea imagine">
</body>
</html>
```

Deschide pagina în browser (clic dreapta → *Open with Live Server*, sau dublu clic pe fișier). Vezi titlul și imaginea? Atunci **calea către imagine este corectă**. Dacă vezi o iconiță ruptă, verifică numele fișierului și al folderului: litere mici, fără spații.

**Încearcă tu (10 min)**  
- [ ] Creează folderul și fișierele  
- [ ] Pune imaginile în `imagini`  
- [ ] Deschide testul și verifică dacă se vede imaginea

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W5` are cele 5 fișiere și folderul `imagini`  
- [ ] Testul cu imaginea merge  
- [ ] Ai planul pe foaie (hartă, schițe, culori, texte)

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Planul site-ului meu” (obligatoriu)
Foaia cu titlul, harta, cele 3 schițe, paleta și textele, plus folderul `Prenume_Nume_W5` cu structura din Exemplul 6.

### Exercițiul B — Autoevaluare
Pe foaie, notează de la 1 la 5 cât de sigur ești pe: etichete HTML de bază, selectori CSS, Flexbox și Grid, evenimente în JavaScript. Pe cele cu 1–2 le recitești înainte de lecțiile următoare.

### Exercițiul C — Găsește greșelile
Găsește **3 probleme** în planul de mai jos și propune o variantă bună:

```text
Titlul: Site-ul lui Mihai Ionescu din Cluj
Pagini: pagina1, Galerie Poze, contact
Imagini: Poză 1.JPG, pisică mică.jpg, IMG_2231 (copie).png
Formular: cere numele, adresa și telefonul
```

### Exercițiul D — Explică cu cuvintele tale
Pe foaie: de ce facem un plan înainte să scriem cod? De ce un site pentru copii nu cere telefon sau adresă?

**Gata când:**  
- [ ] Planul este complet  
- [ ] Ai răspuns la exercițiile B–D

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Desenează și o a patra pagină (de exemplu „Despre club”) și scrie ce ar conține  
- [ ] Alege un al doilea set de 4 culori, pentru varianta întunecată  
- [ ] Caută pe un site cunoscut pentru copii meniul și spune câte pagini are

---

## Greșeli frecvente
1. **Subiect prea mare** („toate animalele din lume”). Alege ceva ce poți completa cu 6 carduri.  
2. **Nume de fișiere cu spații și diacritice.** Folosește litere mici, fără spații.  
3. **Imagini foarte mari.** O imagine de 5 MB încetinește pagina.  
4. **Fără text alternativ.** Fiecare imagine are `alt`.  
5. **Culori care nu se văd** una pe alta. Testează literele pe fundal.

## Recapitulare pe scurt
1. Un site are mai multe pagini legate printr-un meniu.  
2. Planul (hartă, schițe, culori, texte) se face înainte de cod.  
3. Fișierele au nume simple: litere mici, fără spații și diacritice.  
4. Imaginile au text alternativ.  
5. Fără date personale pe site.

## Quiz scurt
1. Ce este o schiță a paginii?  
2. De ce numim fișierele `g1.jpg` și nu `Pisică mică.jpg`?  
3. Ce este textul alternativ?  
4. Ce date nu punem pe site?

## Temă
Termină planul pe foaie și arată planul unui adult din familie. Întreabă ce se înțelege și ce nu. Notează o schimbare pe care o faci. Salvează folderul `Prenume_Nume_W5` și fă o copie de siguranță numită `Prenume_Nume_W5_L1`.

## Ce urmează — Lecția 2
Scriem **scheletul**: cele 3 pagini HTML cu același antet și același subsol, legate prin meniu, plus fișierul `stil.css` cu paleta ta.

---

## Răspunsuri
- **Quiz scurt:** (1) un desen simplu al paginii, care arată unde stă fiecare lucru (în engleză *wireframe*); (2) pentru că numele fără spații și fără diacritice merg peste tot pe internet, iar `Pisică mică.jpg` se strică ușor în adresă; (3) propoziția care descrie imaginea (`alt`), folosită de cei care nu văd poza și de cititoarele de ecran; (4) date personale: nume complet, adresă, școală, telefon, email, poze cu oameni.  
- **Exercițiul A:** pentru evaluare: subiect potrivit, 3 pagini, 3 schițe, paletă de 4 culori, cel puțin 6 imagini cu nume corecte și testul `index.html` funcțional.  
- **Exercițiul B:** nu are răspuns corect; notați lecțiile de repetat.  
- **Exercițiul C:** (1) titlul conține nume și oraș (date personale); (2) numele paginilor nu sunt clare și consecvente (de exemplu `index.html`, `galerie.html`, `contact.html`); (3) numele imaginilor au majuscule, spații, diacritice sau paranteze; (4) formularul cere date personale (nume, adresă, telefon). Se acceptă oricare 3 dintre cele 4 probleme.  
- **Exercițiul D:** planul evită greșelile și refacerile; datele personale nu trebuie cerute copiilor, deoarece pot ajunge la persoane necunoscute.  
- **Notă pentru profesor:** nu lăsați elevii să sară direct la cod. Dacă un elev nu are imagini, oferiți pachetul media sau lăsați elevul să deseneze și să fotografieze 6 desene. Un fișier `.jpg` salvat din telefon poate avea nume lung: elevul îl redenumește. La testul din Exemplul 6, cea mai frecventă problemă este extensia ascunsă (`g1.jpg.jpg`): arătați cum se afișează extensiile fișierelor.
