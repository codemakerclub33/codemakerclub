# LECȚIA 9 — Versiunea pe telefon și teste
**Modulul 5 · Site complet: HTML + CSS + JavaScript · 2 ore**  
**Code Maker Club · Web Builder**

> Site-ul tău este gata, dar **nu este terminat până nu este testat**. Azi ești **testerul**: verifici site-ul pe ecrane de mărimi diferite, doar cu tastatura, cu unelte din browser și cu un coleg. Notezi ce găsești, repari și verifici din nou. Așa lucrează programatorii adevărați.  
> Proiect: **„Raportul meu de teste”** · folder: `Prenume_Nume_W5` (continuăm în același folder)

---

## Obiectiv
La finalul orei ai testat site-ul pe 4 lățimi de ecran, doar cu tastatura, cu verificatorul de HTML și cu raportul de accesibilitate din browser, ai notat problemele într-un raport și ai reparat cel puțin 5.  
**Minim:** testul pe telefon (în DevTools) pe toate cele 3 pagini și un raport cu cel puțin 3 probleme reparate.  
**Ținta orei (Complet):** + test pe 4 lățimi, test doar cu tastatura, verificare HTML, raport de accesibilitate (Lighthouse), test cu un coleg, raport scris cu „problemă / unde / cum am reparat”, și o a doua rundă de teste după reparații.

## De ce contează
Nicio persoană care face un site nu găsește singură toate greșelile: cine a scris codul „vede” ce a vrut să scrie, nu ce a scris. De aceea testăm sistematic și cerem ajutor de la altcineva.

---

## Siguranță înainte de toate
- Testăm **doar paginile noastre**, pe calculatorul nostru.  
- Verificatorul de HTML se folosește cu fișiere **fără date personale** (site-ul tău nu are).  
- Dacă testezi pe un telefon real, ai nevoie de acordul părintelui sau al profesorului și nu te conectezi la rețele necunoscute.  
- Un coleg care testează nu trebuie să scrie în formular date personale reale: folosește nume inventate.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Ce este un test și un raport de probleme |
| 10–35 | Testul pe 4 lățimi de ecran (**Exemplul 1**) |
| 35–50 | Testul doar cu tastatura (**Exemplul 2**) |
| 50–70 | Verificatorul HTML și consola (**Exemplul 3**) |
| 70–85 | Raportul de accesibilitate (**Exemplul 4**) |
| 85–105 | Raportul și reparațiile (**Exemplul 5**) |
| 105–115 | Test cu un coleg (**Exemplul 6**) |
| 115–120 | Recap și temă |

---

## 1. Testul pe 4 lățimi

### Exemplul 1 — Modul „dispozitiv” din DevTools

Deschide pagina, apasă `F12` (DevTools) și activează **modul dispozitiv** (iconița cu telefon și tabletă, sau `Ctrl + Shift + M`; pe Mac `Cmd + Shift + M`). Pune lățimea pe rând la:

```text
1200 px   calculator
768 px    tabletă
375 px    telefon obișnuit
320 px    telefon foarte mic
```

La **fiecare** lățime și pe **fiecare** pagină (Acasă, Galerie, Contact) verifică:

```text
□ Nu apare bară de derulare pe orizontală
□ Textul se citește fără să măresc (cel puțin 16 px)
□ Titlul nu iese din ecran
□ Meniul: pe 375 și 320 px apare butonul, iar lista se deschide și se închide
□ Cardurile: pe 375 px, unul pe rând
□ Galeria: pozele nu sunt deformate; imaginea mărită încape pe ecran
□ Formularul: câmpurile încap pe lățime; butonul se poate apăsa cu degetul (cel puțin 44 px)
□ Butonul „sus” nu acoperă un text sau un buton important
```

**Dacă o pagină iese din ecran** (bară de derulare orizontală), cauzele frecvente sunt: o imagine cu lățime fixă în pixeli, un cuvânt foarte lung, un element cu `width` mai mare decât ecranul. O reparație pentru texte lungi:

```css
p,
h1,
h2,
h3 {
  overflow-wrap: break-word;
}
```

Ca să găsești elementul care „iese”, în DevTools: clic dreapta pe pagină → *Inspect* și plimbă mouse-ul peste elementele din panoul HTML: se colorează zona fiecăruia.

**Încearcă tu (25 min)**  
- [ ] Testează cele 3 pagini la 4 lățimi  
- [ ] Notează fiecare problemă pe foaie (pagina, lățimea, ce nu merge)

---

## 2. Testul doar cu tastatura

### Exemplul 2 — Fără mouse

Lasă mouse-ul deoparte. Pe fiecare pagină folosește doar:

```text
Tab            următorul element
Shift + Tab    elementul de dinainte
Enter / Space  apasă butonul sau linkul
Escape         închide imaginea mărită
```

Verifică:

```text
□ Vezi mereu unde este focusul (un contur sau o schimbare de aspect)
□ Ordinea la Tab este logică (de sus în jos, de la stânga la dreapta)
□ Poți deschide meniul pe telefon, poți alege o pagină
□ Poți deschide o poză din galerie și o poți închide cu Escape
□ După închidere, focusul se întoarce pe poza apăsată
□ Poți completa și trimite formularul
□ Poți schimba modul întunecat
□ Nu rămâi „blocat” undeva
```

Dacă vreun element nu are un focus vizibil, adaugă o regulă clară:

```css
a:focus,
button:focus,
input:focus,
select:focus,
textarea:focus {
  outline: 3px solid var(--accent);
  outline-offset: 2px;
}
```

**Încearcă tu (15 min)**  
- [ ] Parcurge toate cele 3 pagini doar cu tastatura  
- [ ] Notează unde lipsește focusul sau unde te blochezi, și repară

---

## 3. Verificatorul HTML și consola

### Exemplul 3 — Greșeli pe care ochii nu le văd

**Consola.** Deschide DevTools → *Console*. Încarcă fiecare pagină și folosește fiecare funcție (meniu, galerie, formular, temă, butonul „sus”). Nu trebuie să apară nicio **eroare roșie**. Dacă apare, citește mesajul: îți spune fișierul și rândul.

**Verificatorul HTML.** Există un verificator oficial pentru HTML, făcut de organizația care stabilește regulile web-ului (W3C): `validator.w3.org/nu`. Deschide pagina verificatorului, alege la „Check by” varianta **„file upload”** (încărcare fișier), alege `index.html` și apasă *Check*. El listează **erori** (de reparat) și **avertismente** (de citit). Cele mai frecvente:

```text
Eroare: un element nu este închis sau este închis în locul greșit
Eroare: id folosit de două ori în aceeași pagină
Eroare: <img> fără alt
Avertisment: lipsește un titlu <h1> sau <h2> într-o secțiune
```

Verifică, pe rând, `index.html`, `galerie.html` și `contact.html`.

**Linkurile.** Apasă pe **fiecare** link și pe fiecare imagine: se deschid? În DevTools → *Network*, o imagine lipsă apare cu roșu (*404*, adică „nu s-a găsit”).

**Încearcă tu (20 min)**  
- [ ] Verifică consola pe toate cele 3 pagini  
- [ ] Verifică fiecare pagină în verificatorul HTML  
- [ ] Notează și repară erorile (un `id` repetat, un `alt` lipsă, o etichetă neînchisă)

---

## 4. Raportul de accesibilitate

### Exemplul 4 — Lighthouse

În DevTools există fila **Lighthouse**, o unealtă care „citește” pagina și dă note de la 0 la 100, plus o listă de probleme. Alege categoria **Accessibility** (accesibilitate) și modul **Mobile**, apoi apasă *Analyze page load*.

Citește:
- **nota** (țintă: cel puțin 90);  
- **problemele** (de exemplu: „contrast insuficient”, „imaginile nu au alt”, „butoanele nu au nume”);  
- pentru fiecare problemă, **elementul** care o produce.

Repară cel puțin 2 probleme și rulează din nou. Compară notele. Notele sunt **un ajutor**, nu un scop în sine: un site cu 100 poate fi totuși greu de folosit, deci testele manuale rămân importante.

**Încearcă tu (15 min)**  
- [ ] Rulează Lighthouse pe `index.html`, apoi pe celelalte pagini  
- [ ] Repară cel puțin 2 probleme  
- [ ] Notează nota înainte și după

---

## 5. Raportul de probleme și reparațiile

### Exemplul 5 — Un raport clar

Pentru fiecare problemă găsită, scrie un rând:

```text
Nr | Pagina   | Problemă                                    | Cum am reparat           | Reparat?
1  | galerie  | pe 320 px apare bară de derulare orizontală | am scris overflow-wrap   | da
2  | contact  | butonul „Trimite” nu are focus vizibil      | am adăugat outline       | da
3  | index    | 2 elemente cu același id                    | am schimbat un id        | da
```

Reguli bune:
1. O problemă = un rând.  
2. Scrie **unde** și **ce** nu merge, ca altcineva să o poată găsi.  
3. După reparație, **testează din nou** același lucru.  
4. Dacă o reparație strică altceva, notează și asta.

Repară mai întâi problemele care **opresc** pe cineva din a folosi site-ul (meniul, formularul), apoi pe cele care doar arată urât.

**Încearcă tu (20 min)**  
- [ ] Scrie raportul cu cel puțin 5 probleme  
- [ ] Repară cel puțin 5  
- [ ] Rulează din nou testele de la Exemplul 1 și 2: au dispărut problemele?

---

## 6. Testul cu un coleg

### Exemplul 6 — Ochi noi

Schimbă calculatorul cu un coleg. Fiecare face, **fără ajutor**, aceste sarcini pe site-ul celuilalt:

```text
1. Găsește pagina cu poze și deschide a treia poză.
2. Închide poza, apoi treci pe modul întunecat.
3. Trimite un mesaj cu porecla „Test” și un mesaj corect.
4. Încearcă să trimiți formularul gol.
5. Mergi pe telefon (DevTools, 375 px) și deschide meniul.
```

Cel care testează **nu cere ajutor** și spune cu voce tare ce gândește („nu înțeleg ce înseamnă butonul acesta…”). Cel care a făcut site-ul **doar privește și notează**, fără să explice. Apoi schimbați rolurile. Fiecare spune: **un lucru reușit** și **un lucru de îmbunătățit**, politicos.

**Gata când:**  
- [ ] Ai testat pe 4 lățimi, cu tastatura, cu verificatorul HTML și cu Lighthouse  
- [ ] Ai raportul cu cel puțin 5 probleme reparate  
- [ ] Ai făcut testul cu un coleg și ai notat ce ai aflat  
- [ ] Ai făcut o copie de siguranță a folderului

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Raportul meu de teste” (obligatoriu)
Raportul din Exemplul 5, cu cel puțin 5 probleme reparate, și site-ul testat din nou după reparații.

### Exercițiul B — Autoevaluare
Notează de la 1 la 5: cât de bine arată site-ul pe telefon, cât de bine merge cu tastatura, cât de clar este pentru cineva care îl vede prima oară. Scrie ce ai îmbunătăți dacă ai mai avea o oră.

### Exercițiul C — Găsește greșelile
Raportul de mai jos are **3 probleme**. Care sunt?

```text
1. Problemă: „Nu merge.” Pagina: (nescrisă). Reparat: da.
2. Problemă: „Pe 375 px meniul nu se deschide.” Cum am reparat: am șters regula @media. Testat din nou: nu.
3. Problemă: „Imaginea g3.jpg nu apare.” Cum am reparat: am redenumit fișierul în „G3.JPG” ca să arate mai frumos.
```

### Exercițiul D — Explică cu cuvintele tale
Pe foaie: de ce testăm și cu tastatura? De ce este bine ca altcineva să testeze site-ul? De ce nu ajunge nota din Lighthouse?

**Gata când:**  
- [ ] Raportul este complet  
- [ ] Ai răspuns la exercițiile B–D

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Testează site-ul într-un al doilea browser (de exemplu Firefox, dacă îl ai) și notează diferențele  
- [ ] Mărește textul din browser la 200% (`Ctrl` și `+`) și vezi dacă site-ul mai merge  
- [ ] Fă o listă de 5 lucruri pe care le vei verifica la **fiecare** site pe care îl vei face de acum  
- [ ] Adaugă un `<noscript>` cu un text scurt pentru cine nu are JavaScript

---

## Greșeli frecvente
1. **Testezi doar pe calculator** și crezi că pe telefon este la fel.  
2. **Repari fără să notezi.** Nu mai știi ce ai reparat.  
3. **Nu testezi din nou după reparație**, iar reparația poate strica altceva.  
4. **Ignori erorile roșii din consolă** („oricum merge”): ele apar mai târziu în alte locuri.  
5. **Nume de fișiere schimbate** (`G3.JPG`) fără să schimbi și `src` din HTML: imaginea nu mai apare.  
6. **Te bazezi doar pe notă** (Lighthouse) și nu pe testul real.

## Recapitulare pe scurt
1. Testăm pe mai multe lățimi de ecran, cu DevTools.  
2. Testăm doar cu tastatura.  
3. Consola și verificatorul HTML găsesc greșeli ascunse.  
4. Lighthouse dă o notă și o listă de probleme de accesibilitate.  
5. Notăm problemele, reparăm și testăm din nou; cerem ajutor de la un coleg.

## Quiz scurt
1. Cum activezi modul dispozitiv în DevTools?  
2. Ce înseamnă o eroare 404?  
3. De ce testăm doar cu tastatura?  
4. De ce testăm din nou după reparație?

## Temă
Cere unui adult din familie să facă sarcinile din Exemplul 6 pe site-ul tău. Notează unde s-a oprit sau a ezitat și repară. Salvează varianta în `Prenume_Nume_W5_L9`.

## Ce urmează — Lecția 10
**Publicare și prezentare**: pregătim site-ul pentru a fi arătat, învățăm ce înseamnă să îl pui pe internet (și cum se face în siguranță) și îl prezentăm colegilor.

---

## Răspunsuri
- **Quiz scurt:** (1) cu `F12`, apoi iconița cu telefon și tabletă sau `Ctrl + Shift + M` (pe Mac `Cmd + Shift + M`); (2) „nu s-a găsit”: fișierul sau imaginea lipsește; (3) pentru că nu toți oamenii folosesc mouse-ul, iar așa vedem dacă totul merge și dacă se vede focusul; (4) pentru că reparația poate strica altceva sau problema poate rămâne.  
- **Dacă ritmul clasei este lent:** Lighthouse este opțional pentru grupele mici.  
- **Exercițiul A:** pentru evaluare: raport cu cel puțin 5 probleme, fiecare cu pagină, descriere, reparație și retestare; site-ul funcționează pe 375 px și cu tastatura.  
- **Exercițiul B:** nu are răspuns corect; este pentru elev.  
- **Exercițiul C:** (1) problema este prea vagă („Nu merge”) și nu spune pe ce pagină; (2) reparația (ștergerea regulii `@media`) strică în loc să repare, iar retestarea arată că problema a rămas, deci nu poate fi marcată ca rezolvată; (3) fișierul a fost redenumit în `G3.JPG` fără să se schimbe `src` și, pe un server, majusculele contează; trebuie păstrat numele din HTML (`g3.jpg`) sau schimbate ambele.  
- **Exercițiul D:** nu toți oamenii folosesc mouse-ul; ochii noi văd ce autorul nu mai observă; nota este o aproximare, iar un site poate avea notă mare și să fie greu de folosit.  
- **Notă pentru profesor:** pentru Lighthouse folosiți o fereastră de browser **fără extensii** (modul incognito), altfel rezultatele pot fi diferite. Pentru verificatorul HTML, aveți în vedere că el este un serviciu extern: încărcarea fișierelor elevilor nu conține date personale, dar discutați cu elevii că nu urcăm niciodată fișiere cu date personale. Când un elev spune „pe telefonul meu merge”, cereți să arate pe care lățime și în ce browser: diferențele sunt reale și sunt o ocazie de învățare.
