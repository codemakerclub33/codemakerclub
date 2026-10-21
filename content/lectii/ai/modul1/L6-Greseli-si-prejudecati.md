# LECȚIA 6 — Greșeli și prejudecăți
**Modulul 1 · AI pentru copii · 2 ore**  
**Code Maker Club · AI Explorer**

> Azi afli de ce un model poate trata inegal oameni sau situații, chiar dacă nimeni nu a vrut asta. Găsim cine lipsește din date și învățăm cum se repară problema. Nu ai nevoie de calculator.  
> Proiect: **„Detectivul de date”** · folder: `Prenume_Nume_AI1_L6` (ex. `Ana_Pop_AI1_L6`)

---

## Obiectiv
La finalul orei știi ce înseamnă **prejudecată** într-un model (în engleză, *bias*), de ce apare și cum se poate reduce.  
**Minim:** un exemplu în care un model greșește pentru că datele nu cuprind pe toată lumea.  
**Complet:** în plus jocul „Cine lipsește din date?”, o listă cu 3 soluții și un set de date reparat.

## De ce contează
AI învață din date făcute de oameni. Dacă în date lipsesc unele grupuri de oameni sau situații, modelul va funcționa mai prost pentru ei. Nu este vorba că modelul „este rău”, ci că datele au fost incomplete. Dacă știi asta, poți cere date mai bune și poți verifica rezultatele cu grijă.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare: probabil nu înseamnă sigur |
| 10–30 | Ce este prejudecata într-un model (**Exemplele 1–2**) |
| 30–55 | Cine lipsește din date? (**Exemplul 3**) |
| 55–75 | Stereotipuri în text (**Exemplul 4**) |
| 75–95 | Cum reparăm? (**Exemplul 5**) |
| 95–115 | Detectivul de date (**Exemplul 6**) |
| 115–120 | Recap și temă |

**Ce îți trebuie:** foi A4, creioane colorate.

---

## 1. Ce este prejudecata într-un model?
Un model poate funcționa bine pentru unii și mai prost pentru alții, pentru că **datele din care a învățat nu au fost echilibrate**.

### Exemplul 1 — Pantofii
Un program a învățat să recunoască pantofii din poze. Toate pozele au fost cu **adidași**. Primește o poză cu un papuc de casă și spune „nu este pantof”.

De ce a greșit? Pentru că nu a văzut exemple cu papuci. Nimeni nu a „păcălit” programul: datele au fost incomplete.

### Exemplul 2 — Mai multe situații
Alege pentru fiecare ce **lipsește** din date:
1. Un model recunoaște animale, dar a văzut poze doar făcute ziua.  
2. Un program de recunoaștere a vocii a învățat doar de la adulți și are probleme cu vocile copiilor.  
3. Un traducător a văzut texte doar dintr-un domeniu (sport) și nu înțelege cuvinte din bucătărie.

---

## 2. Cine lipsește din date?

### Exemplul 3 — Jocul „Cine lipsește?”
Primești o poză (desenată de un adult) cu o „școală” în care apar doar copii cu ghiozdan albastru. Un model învață să recunoască „un elev” după ghiozdanul albastru.

1. Ce se întâmplă când vine un elev cu ghiozdan roșu?  
2. Cine lipsește din date?  
3. Ce ai adăuga?

Desenează trei elevi noi, diferiți, care ar face setul mai echilibrat (ghiozdane de culori diferite, haine diferite, înălțimi diferite).

---

## 3. Stereotipuri în text

### Exemplul 4 — Ce își imaginează modelul?
Un model care învață din texte poate prelua **stereotipuri**: idei simplificate despre cum sunt „toți” oamenii dintr-un grup. De exemplu, dacă în multe texte doar băieții sunt ingineri și doar fetele sunt profesoare, modelul poate completa propoziția „Inginerul a spus că…” cu un băiat în minte.

Discutăm: asta este adevărat? Poate fi orice persoană inginer? Ce ar trebui să facă cei care construiesc modelul?

Regulă de aur: **un model oglindește datele**. Dacă datele au stereotipuri, modelul le poate repeta, iar noi trebuie să le observăm și să le corectăm.

---

## 4. Cum reparăm?

### Exemplul 5 — Trei soluții
Împreună completăm:
1. **Mai multe date variate:** adăugăm exemple care lipsesc.  
2. **Testăm pe grupuri diferite:** verificăm dacă modelul merge la fel de bine pentru toți.  
3. **Un om verifică:** când răspunsul contează, decide un om, nu doar modelul.

Pentru fiecare problemă de la Exemplul 2, alege soluția cea mai potrivită.

---

## 5. Detectivul de date

### Exemplul 6 — Caut și repar
Alege un model imaginar (de exemplu „un program care recunoaște fructe”). Fă un tabel:

| Ce a văzut modelul | Cine / ce lipsește | Ce adaug |
|--------------------|---------------------|----------|
| doar mere roșii | mere verzi, pere, banane | 5 poze noi |

Desenează 3 exemple noi pentru a repara setul.

**Încearcă tu (10 min)**  
- [ ] Explică, în 2 propoziții, de ce poate greși un model din cauza datelor  
- [ ] Dă un exemplu de lucru care lipsește din date  
- [ ] Spune o soluție  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Detectivul de date” (obligatoriu)
Tabelul cu modelul tău imaginar, ce lipsește din date și ce adaugi, plus 3 desene noi.

### Exercițiul B — Găsește ce lipsește
1. Un model recunoaște mașini, dar a văzut doar mașini roșii.  
2. Un program de scris după voce a fost testat doar pe oameni care vorbesc rar.  
3. Un joc de recunoaștere a desenelor a învățat doar desene făcute cu creion.

### Exercițiul C — Corect sau stereotip?
Spune care afirmații sunt stereotipuri:
1. „Toți băieții iubesc fotbalul.”  
2. „Unii oameni iubesc fotbalul.”  
3. „Fetele nu sunt bune la matematică.”  
4. „Oricine poate învăța matematică.”

### Exercițiul D — Alege soluția
Pentru problema „modelul a văzut doar poze făcute vara”, alege soluția potrivită din cele trei și explică.

### Exercițiul E — Explică cu cuvintele tale
Răspunde în 3 propoziții: de ce spunem că un model „oglindește” datele?

**Gata când:**
- [ ] Ai tabelul „Detectivul de date” complet  
- [ ] Ai desenat 3 exemple noi  
- [ ] Ai răspuns la Exercițiile B–E  
- [ ] Ai explicat o soluție  
- [ ] Foaia se numește `Prenume_Nume_AI1_L6`  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Inventează un set de date care pare bun, dar are o problemă ascunsă  
- [ ] Fă o listă cu 5 întrebări pe care ai vrea să le pui înainte să ai încredere într-un model  
- [ ] Gândește-te cine ar trebui să verifice un model care ajută la decizii importante  

---

## Greșeli frecvente

| Ce crezi | De fapt | Corect |
|----------|---------|--------|
| „Modelul este rău” | Datele au fost incomplete | Reparăm datele |
| „Un model e mereu corect” | Poate trata inegal | Testăm pe grupuri diferite |
| „Stereotipurile sunt adevărate” | Sunt idei simplificate | Oricine poate fi orice |
| „Nu putem face nimic” | Putem repara | Date variate și verificare |
| „Nu contează cine lipsește” | Contează | Cine lipsește din date primește rezultate mai slabe |

---

## Recapitulare pe scurt

- Un model **oglindește datele** din care a învățat.  
- Dacă anumite situații sau oameni lipsesc, modelul funcționează mai prost pentru ei.  
- Un model poate prelua **stereotipuri** din texte.  
- Soluții: **date variate**, **testare pe grupuri diferite** și **verificare de către oameni**.  
- Oricine poate fi orice: stereotipurile nu spun adevărul.  

---

## Quiz scurt
- Ce înseamnă că un model „oglindește” datele?  
- De ce a greșit programul care a văzut doar adidași?  
- Ce este un stereotip?  
- Dă două soluții pentru date incomplete.  
- De ce este important ca un om să verifice răspunsuri importante?

---

## Temă
1. Termină Detectivul de date, dacă nu ai terminat.  
2. Întreabă pe cineva din familie ce stereotip a auzit și cum se poate corecta.  
3. Desenează un set de 6 exemple foarte variate pentru o categorie.  
4. **Bonus:** scrie 3 întrebări pe care ai vrea să le pui unui program înainte să ai încredere în el.  
5. Salvează foaia ca `Tema_AI1_L6_Prenume_Nume`.

---

## Ce urmează — Lecția 7
Căutăm AI în viața de zi cu zi: acasă, la școală, pe drum, și vedem unde ajută și unde trebuie să fim atenți.

---

## Răspunsuri
- **Quiz scurt:** (1) modelul reflectă ce a văzut în date, cu bune și cu rele; (2) pentru că nu a văzut exemple cu alte tipuri de încălțăminte; (3) o idee simplificată despre cum sunt „toți” oamenii dintr-un grup; (4) de exemplu: mai multe date variate, testare pe grupuri diferite, verificare de către un om; (5) pentru că modelul poate greși și poate afecta oameni.  
- **Exemplul 2:** (1) poze făcute noaptea sau în alte condiții; (2) voci de copii; (3) texte din alte domenii.  
- **Exemplul 3:** elevul cu ghiozdan roșu nu este recunoscut; lipsesc elevi cu alte ghiozdane; se adaugă exemple variate.  
- **Exercițiul B:** (1) mașini de alte culori; (2) oameni care vorbesc repede sau cu accent; (3) desene făcute cu alte materiale.  
- **Exercițiul C:** stereotipuri: 1 și 3; nu sunt stereotipuri: 2 și 4.  
- **Exercițiul D:** date variate: adăugăm poze din toate anotimpurile.  
- **Exercițiul E:** pentru că învață ce este în date; dacă datele sunt incomplete sau au stereotipuri, modelul le repetă.  
- **Notă pentru adultul care ajută:** folosiți exemple legate de obiecte, voce, culori și texte, nu comparații între grupuri de oameni. Dacă un elev spune un stereotip, spuneți calm că este o idee simplificată și întrebați dacă poate fi adevărată pentru toți.  
