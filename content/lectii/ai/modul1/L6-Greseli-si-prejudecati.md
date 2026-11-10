# LECȚIA 6 — Greșeli și prejudecăți
### Cine lipsește din date?
**Modulul 1 · AI pentru copii · 2 ore**  
**Code Maker Club · AI Explorer**

> Azi afli de ce un model poate trata inegal oameni sau situații, chiar dacă nimeni nu a vrut asta. Găsim cine lipsește din date și învățăm cum se repară problema. Nu ai nevoie de calculator.  
> Proiect: **„Detectivul de date”** · folder: `Prenume_Nume_AI1_L6` (ex. `Ana_Pop_AI1_L6`)

---

## Ce facem azi
La finalul orei știi ce înseamnă **prejudecată** într-un model (în engleză, *bias*), de ce apare și cum se poate reduce. AI învață din date făcute de oameni. Dacă în date lipsesc unele grupuri de oameni sau situații, modelul va funcționa mai prost pentru ei. Nu este vorba că modelul „este rău”, ci că datele au fost incomplete. Dacă știi asta, poți cere date mai bune și poți verifica rezultatele cu grijă.

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

Exercițiile B–E și Provocarea sunt pentru cine termină mai repede, sau pentru acasă.

**Ce ai nevoie:** foi A4, creioane colorate

---

## Cuvinte noi azi

| Cuvânt | Ce înseamnă | Exemplu |
|--------|-------------|---------|
| **Prejudecată** (bias) | Modelul merge mai bine pentru unii decât pentru alții, pentru că datele nu au fost echilibrate | un model care a văzut doar adidași |
| **Stereotip** | O idee simplificată despre cum sunt „toți” dintr-un grup | „doar băieții sunt ingineri” |
| **Echilibrat** | Date care cuprind toate situațiile importante | pantofi de toate felurile |
| **Verificare** | Un om se uită la răspuns înainte să conteze | medicul care verifică un model |

---

## Pas cu pas

**Partea 1 — Ce este prejudecata într-un model?**  
Un model poate funcționa bine pentru unii și mai prost pentru alții, pentru că **datele din care a învățat nu au fost echilibrate**.

### Exemplul 1 — Pantofii
Un program a învățat să recunoască pantofii din poze. Toate pozele au fost cu **adidași**. Primește o poză cu un papuc de casă și spune „nu este pantof”.

De ce a greșit? Pentru că nu a văzut exemple cu papuci. Nimeni nu a „păcălit” programul: datele au fost incomplete.

**Gata când:**  
- [ ] Am spus de ce a greșit programul cu pantofii  
- [ ] Pot spune că datele au fost incomplete, nu că programul e „rău”  

### Exemplul 2 — Mai multe situații
Alege pentru fiecare ce **lipsește** din date:
1. Un model recunoaște animale, dar a văzut poze doar făcute ziua.  
2. Un program de recunoaștere a vocii a învățat doar de la adulți și are probleme cu vocile copiilor.  
3. Un traducător a văzut texte doar dintr-un domeniu (sport) și nu înțelege cuvinte din bucătărie.

**Gata când:**  
- [ ] Am spus ce lipsește în fiecare dintre cele 3 situații  
- [ ] Am explicat o alegere unui coleg  

**Partea 2 — Cine lipsește din date?**

### Exemplul 3 — Jocul „Cine lipsește?”
Primești o poză (desenată de un adult) cu o „școală” în care apar doar copii cu ghiozdan albastru. Un model învață să recunoască „un elev” după ghiozdanul albastru.

1. Ce se întâmplă când vine un elev cu ghiozdan roșu?  
2. Cine lipsește din date?  
3. Ce ai adăuga?

Desenează trei elevi noi, diferiți, care ar face setul mai echilibrat (ghiozdane de culori diferite, haine diferite, înălțimi diferite).

**Gata când:**  
- [ ] Am răspuns la cele 3 întrebări  
- [ ] Am desenat 3 elevi noi, diferiți  

**Partea 3 — Stereotipuri în text**

### Exemplul 4 — Ce își imaginează modelul?
Un model care învață din texte poate prelua **stereotipuri**: idei simplificate despre cum sunt „toți” oamenii dintr-un grup. De exemplu, dacă în multe texte doar băieții sunt ingineri și doar fetele sunt profesoare, modelul poate completa propoziția „Inginerul a spus că…” cu un băiat în minte.

Discutăm: asta este adevărat? Poate fi orice persoană inginer? Ce ar trebui să facă cei care construiesc modelul?

Regulă de aur: **un model oglindește datele**. Dacă datele au stereotipuri, modelul le poate repeta, iar noi trebuie să le observăm și să le corectăm.

**Gata când:**  
- [ ] Pot spune ce este un stereotip  
- [ ] Pot spune de ce spunem că „un model oglindește datele”  

**Partea 4 — Cum reparăm?**

### Exemplul 5 — Trei soluții
Împreună completăm:
1. **Mai multe date variate:** adăugăm exemple care lipsesc.  
2. **Testăm pe grupuri diferite:** verificăm dacă modelul merge la fel de bine pentru toți.  
3. **Un om verifică:** când răspunsul contează, decide un om, nu doar modelul.

Pentru fiecare problemă de la Exemplul 2, alege soluția cea mai potrivită.

**Gata când:**  
- [ ] Am scris cele 3 soluții  
- [ ] Am ales o soluție pentru fiecare problemă de la Exemplul 2  

**Partea 5 — Detectivul de date**

### Exemplul 6 — Caut și repar
Alege un model imaginar (de exemplu „un program care recunoaște fructe”). Fă un tabel:

| Ce a văzut modelul | Cine / ce lipsește | Ce adaug |
|--------------------|---------------------|----------|
| doar mere roșii | mere verzi, pere, banane | 5 poze noi |

Desenează 3 exemple noi pentru a repara setul.

**Gata când:**  
- [ ] Tabelul are cel puțin o linie completă  
- [ ] Am desenat 3 exemple noi care repară setul  

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

## De făcut azi — „Detectivul de date”

### Minim vs Complet

| | Ce trebuie |
|--------|------------|
| **Minim** | Un exemplu în care un model greșește pentru că datele nu cuprind pe toată lumea · tabelul cu cel puțin o linie |
| **Complet** | Minim + jocul „Cine lipsește?” · lista cu 3 soluții · 3 desene noi care repară setul · Exercițiile B–E |

### Pasul 1 — Minim
Alege un model imaginar și completează o linie din tabelul din Exemplul 6: ce a văzut, cine lipsește, ce adaugi.

**→ Minim când:** ai un model imaginar și o linie completă în tabel.

### Pasul 2 — Complet

**Exercițiul A — „Detectivul de date” (obligatoriu)**  
Tabelul cu modelul tău imaginar, ce lipsește din date și ce adaugi, plus 3 desene noi.

**Exercițiul B — Găsește ce lipsește**
1. Un model recunoaște mașini, dar a văzut doar mașini roșii.  
2. Un program de scris după voce a fost testat doar pe oameni care vorbesc rar.  
3. Un joc de recunoaștere a desenelor a învățat doar desene făcute cu creion.

**Exercițiul C — Corect sau stereotip?**  
Spune care afirmații sunt stereotipuri:
1. „Toți băieții iubesc fotbalul.”  
2. „Unii oameni iubesc fotbalul.”  
3. „Fetele nu sunt bune la matematică.”  
4. „Oricine poate învăța matematică.”

**Exercițiul D — Alege soluția**  
Pentru problema „modelul a văzut doar poze făcute vara”, alege soluția potrivită din cele trei și explică.

**Exercițiul E — Explică cu cuvintele tale**  
Răspunde în 3 propoziții: de ce spunem că un model „oglindește” datele?

**Gata când:**  
- [ ] Ai tabelul „Detectivul de date” complet  
- [ ] Ai desenat 3 exemple noi  
- [ ] Ai răspuns la Exercițiile B–E  
- [ ] Ai explicat o soluție  
- [ ] Foaia se numește `Prenume_Nume_AI1_L6`  

---

## Bonus ★★★ — Provocare: Setul cu problemă ascunsă
*Doar dacă ai terminat Complet.*

Fă un set de date care pare bun, dar ascunde o problemă, și vezi dacă cineva din familie o găsește.

- [ ] Alegi o categorie (de exemplu „fructe”) și faci un set de 8 exemple cu nume diferite, fiecare cu etichetă
- [ ] Setul pare variat, dar ascunde o problemă (de exemplu toate au aceeași culoare sau aceeași mărime)
- [ ] Problema o scrii pe spatele foii, fără să o arăți
- [ ] O persoană din familie are 2 minute să găsească ce lipsește și notezi dacă a găsit
- [ ] Completezi un tabel cu 3 coloane: ce lipsește, ce adaugi, de ce ajută
- [ ] Adaugi 3 exemple noi care repară setul
- [ ] Scrii 3 întrebări pe care le-ai pune înainte să ai încredere într-un model
- [ ] Salvează foaia ca `Prenume_Nume_AI1_L6_Problema`

---

## Recapitulare pe scurt

- Un model **oglindește datele** din care a învățat.  
- Dacă anumite situații sau oameni lipsesc, modelul funcționează mai prost pentru ei.  
- Un model poate prelua **stereotipuri** din texte.  
- Soluții: **date variate**, **testare pe grupuri diferite** și **verificare de către oameni**.  
- Oricine poate fi orice: stereotipurile nu spun adevărul.  

**Schema pe scurt (pe foaie):** date incomplete → model care greșește pentru cine lipsește → reparăm: date variate · testăm pe grupuri · un om verifică

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
4. Scrie 3 întrebări pe care ai vrea să le pui unui program înainte să ai încredere în el.  
5. Salvează foaia ca `Prenume_Nume_AI1_L6_Tema`.

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

**Bonus ★★★ — Setul cu problemă ascunsă:**

*Schema logicii:*
1. Alegi categoria „fructe” și scrii 8 exemple cu nume diferite, fiecare cu eticheta „fruct”.  
2. Le alegi astfel încât să aibă toate aceeași trăsătură ascunsă, de exemplu culoarea roșie. Scrii pe spatele foii: „toate sunt roșii”.  
3. Persoana din familie se uită 2 minute și încearcă să spună ce lipsește.  
4. Completezi tabelul și adaugi 3 exemple care repară setul.  
5. Scrii întrebările pentru un model.

*Exemplu de set cu problemă ascunsă:*

| Nr. | Exemplu | Eticheta |
|-----|---------|----------|
| 1 | măr roșu | fruct |
| 2 | cireașă | fruct |
| 3 | căpșună | fruct |
| 4 | rodie | fruct |
| 5 | zmeură | fruct |
| 6 | pepene roșu (tăiat) | fruct |
| 7 | prună roșie | fruct |
| 8 | struguri roșii | fruct |

*Problema ascunsă:* toate sunt roșii. Un model antrenat așa ar putea crede că „fruct” înseamnă „roșu” și ar spune „nu este fruct” despre o banană.

*Tabelul de reparare:*

| Ce lipsește | Ce adaug | De ce ajută |
|-------------|----------|-------------|
| fructe galbene | banană | modelul vede că fructele nu sunt doar roșii |
| fructe verzi | kiwi | arată altă culoare și altă formă |
| fructe închise la culoare | afine | completează varietatea de culori |

*Exemple de întrebări înainte să ai încredere într-un model:*
1. Din ce date a învățat?  
2. Cine sau ce lipsește din aceste date?  
3. L-a testat cineva pe situații diferite, nu doar pe cele din antrenare?  

- Dacă persoana din familie nu găsește problema, o poți ajuta cu un indiciu: „uită-te la culori”.  
- Problema ascunsă poate fi și alta: toate rotunde, toate mici, toate dintr-un singur loc.  
- Ce contează e să poți explica ce lipsește și cum repari.  
