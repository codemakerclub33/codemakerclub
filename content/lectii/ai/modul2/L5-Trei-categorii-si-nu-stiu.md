# LECȚIA 5 — Trei categorii și „nu știu”
### Cum învățăm un model să recunoască ce nu cunoaște
**Modulul 2 · Antrenăm modele AI · 10+ · 2 ore**  
**Code Maker Club · AI Maker**

> Azi vedem ce face un model când primește un obiect pe care nu l-a văzut niciodată și îl învățăm să spună „nu știu”: adăugăm o a treia clasă și o regulă după încredere. Lucrăm la calculator, cu un adult prezent dacă se poate.  
> Proiect: **„Modelul care știe să spună nu știu”** · folder: `Prenume_Nume_AI2_L5` (ex. `Ana_Pop_AI2_L5`)

---

## Ce facem azi
La finalul orei știi de ce un model cu două clase răspunde mereu, chiar și la un obiect necunoscut, cum adaugi o clasă „altceva” și cum folosești o **regulă de încredere** (un prag), ca să spui „nu știu” când modelul nu este destul de sigur. În Modulul 1 ai aflat că un model nu spune „sigur”, ci „cât de sigur”. Acum folosim chiar numărul acela, ca să luăm o decizie.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare și ipoteza: ce va spune modelul la un obiect necunoscut? (**Exemplul 1**) |
| 15–40 | Un model cu două clase, testat cu obiecte necunoscute (**Exemplul 2**) |
| 40–65 | Adăugăm clasa „altceva” (**Exemplul 3**) |
| 65–90 | Testul cu 12 situații (**Exemplul 4**) |
| 90–105 | Regula de încredere: pragul (**Exemplul 5**) |
| 105–115 | Fișa „Modelul care știe să spună nu știu” (**Exemplul 6**) |
| 115–120 | Recap și temă |

Exercițiile B–E și Provocarea sunt pentru cine termină mai repede, sau pentru acasă.

**Ce ai nevoie:** calculator cu cameră web și browser actual, 4 obiecte pentru clasele „creion” și „gumă” (două și două), încă 4 obiecte diferite (2 pentru clasa „altceva” și 2 pe care modelul nu le va vedea niciodată, doar la test), foi A4, creioane colorate.  
**Fără calculator sau fără cameră:** adultul încarcă poze făcute în prealabil, în trei seturi: antrenare, „altceva” și test. Sau refaceți pe hârtie „Mașina de sortat”, cu un cartonaș pe care scrie „nu știu”.

---

## Cuvinte noi azi

| Cuvânt | Ce înseamnă | Exemplu |
|--------|-------------|---------|
| **Clasa „altceva”** | O clasă pentru tot ce nu este niciuna dintre clasele tale | fundalul gol, o riglă, o carte |
| **Necunoscut** | Un obiect pe care modelul nu l-a văzut niciodată | o ascuțitoare, la un model creion–gumă |
| **Prag** | Numărul de la care răspunsul modelului contează | 70%: sub 70% spunem „nu știu” |
| **„Nu știu”** | Răspunsul modelului când încrederea este sub prag | 58% creion, deci „nu știu” |

---

## Pas cu pas

**Partea 1 — Problema**

### Exemplul 1 — Ce va spune modelul?
Amintește-ți, din Modulul 1 și din lecțiile trecute, ce face un model când vede ceva nou. Scrie pe foaie **ipoteza**: dacă antrenezi un model doar cu „creion” și „gumă” și îi arăți o ascuțitoare, ce va spune?
1. „creion”, „gumă” sau „nu știu”?  
2. Cât de sigur va fi (procent mare sau mic)?

**Gata când:**  
- [ ] Am scris ipoteza cu cele două răspunsuri  
- [ ] Pot spune ce am învățat în Modulul 1 despre „probabil” și „sigur”  

**Partea 2 — Modelul cu două clase**

### Exemplul 2 — Obiecte necunoscute
1. Deschide Teachable Machine, alege proiectul cu imagini și dă nume claselor „creion” și „gumă”.  
2. Adaugă câte **10 exemple variate** pe clasă și antrenează modelul.  
3. Arată modelului cele **2 obiecte necunoscute**, fiecare în 2 poziții, deci 4 situații. Notează ce spune și cât de sigur este.

| Nr. | Ce arăt | Ce a spus | Încredere |
|-----|---------|-----------|-----------|
| 1 | necunoscut 1, din față | | |
| 2 | necunoscut 1, din lateral | | |
| 3 | necunoscut 2, din față | | |
| 4 | necunoscut 2, din lateral | | |

Compară cu ipoteza. Modelul a spus „nu știu”? Nu poate: nu are o astfel de clasă.

**Gata când:**  
- [ ] Modelul cu 2 clase este antrenat  
- [ ] Am notat răspunsul la cele 4 situații necunoscute și am comparat cu ipoteza  

**Partea 3 — A treia clasă**

### Exemplul 3 — Clasa „altceva”
Adaugă o clasă nouă („Add a class”) și redenumește-o „altceva”. Ce pui în ea?
- **Fundalul gol**: camera, fără niciun obiect, în poziții și lumini diferite.  
- **2 obiecte** care nu sunt „creion” sau „gumă” și **nu sunt cele 2 necunoscute** de la test.

Adună **10 exemple variate** în clasa „altceva”, ca să aibă același număr ca celelalte două clase. Apoi antrenează din nou. Nu schimba nimic altceva.

Regula esențială: **obiectele necunoscute de la test nu intră niciodată la antrenare**. Altfel nu mai sunt necunoscute.

**Gata când:**  
- [ ] Modelul are 3 clase și este antrenat  
- [ ] Obiectele necunoscute de la test nu sunt în niciun set de antrenare  

**Partea 4 — Testul**

### Exemplul 4 — Douăsprezece situații
Rulează testul pe 12 situații, scrise pe foaie înainte: 4 pentru „creion”, 4 pentru „gumă” și 4 **necunoscute** (aceleași 2 obiecte, în 2 poziții fiecare). Notează ce a spus modelul și cât de sigur a fost.

| Nr. | Ce arăt (real) | Ce a spus | Încredere | Corect? |
|-----|-----------------|-----------|-----------|---------|
| 1 | creion | | | |
| 2 | creion | | | |
| ... | | | | |
| 9 | necunoscut | | | |
| 12 | necunoscut | | | |

La un necunoscut, răspunsul „altceva” este **corect**.

Calculează: câte din cele 12 sunt corecte, și câte din cele 4 necunoscute au fost recunoscute ca „altceva”. Compară cu Exemplul 2.

**Gata când:**  
- [ ] Am completat tabelul cu 12 situații  
- [ ] Am numărat corectele și necunoscutele recunoscute ca „altceva”  

**Partea 5 — Pragul**

### Exemplul 5 — „Nu știu” după încredere
Chiar și cu clasa „altceva”, modelul poate fi sigur pe un răspuns greșit. De aceea adăugăm o **regulă**, pe care o aplicăm noi, pe hârtie: **dacă cea mai mare încredere este sub pragul ales, spunem „nu știu”.**

Alege pragul 70% și aplică-l pe tabelul din Exemplul 4:
1. Subliniază rândurile cu încrederea **sub 70%**: acolo răspunsul devine „nu știu”.  
2. Numără: la câte situații a răspuns modelul? Câte din ele au fost corecte?  
3. Câte răspunsuri **greșite** au rămas, cu încredere de cel puțin 70%?

Compară cu rezultatul fără regulă. Regula îți aduce mai puține răspunsuri, dar mai de încredere.

**Gata când:**  
- [ ] Am aplicat pragul de 70% pe tabel  
- [ ] Am numărat răspunsurile și răspunsurile greșite rămase  

**Partea 6 — Fișa**

### Exemplul 6 — „Modelul care știe să spună nu știu”
Pe o foaie A4 scrie:
1. **Titlu și nume.**  
2. **Tabelul cu 12 situații** din Exemplul 4.  
3. **Comparația:** cum a răspuns modelul cu 2 clase la cele 4 necunoscute și cum a răspuns cu 3 clase.  
4. **Regula de încredere:** pragul ales și ce s-a schimbat.  
5. **Trei propoziții:** ce a învățat modelul, ce tot nu știe și ce prag ai alege dacă modelul ar ajuta un om.

**Gata când:**  
- [ ] Fișa are tabelul, comparația și regula  
- [ ] Am scris cele 3 propoziții  

---

## Greșeli frecvente

| Ce crezi | De fapt | Corect |
|----------|---------|--------|
| „Un model cu două clase știe să spună «nu știu»” | Alege mereu una dintre clase | Adaug clasa „altceva” și un prag |
| „Pun obiectele de test în «altceva»” | Nu mai sunt necunoscute | Le păstrez doar pentru test |
| „Pragul mare e mereu mai bun” | Modelul va spune „nu știu” aproape mereu | Aleg un prag potrivit |
| „Un procent mare înseamnă că răspunsul e corect” | Poate fi sigur și pe ceva greșit | Verific și cu obiecte noi |
| „Clasa «altceva» poate avea doar fundalul gol” | Atunci modelul nu vede obiecte diferite | Pun și câteva obiecte variate |

---

## De făcut azi — „Modelul care știe să spună nu știu”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Modelul cu 3 clase antrenat · tabelul cu 12 situații completat |
| **Complet** | Minim + modelul cu 2 clase testat pe necunoscute · pragul de 70% aplicat · fișa cu comparația și cele 3 propoziții · Exercițiile B–E |

### Pasul 1 — Minim
**Exercițiul A — „Modelul care știe să spună nu știu” (obligatoriu).** Completează tabelul din Exemplul 4 și numără câte din cele 12 situații sunt corecte.

**→ Minim când:** modelul are 3 clase și tabelul are cele 12 situații completate.

### Pasul 2 — Complet

**Exercițiul B — Ce intră în „altceva”?**  
Modelul recunoaște „creion” și „gumă”. Spune pentru fiecare dacă este o idee bună pentru clasa „altceva”:
1. Camera fără niciun obiect.  
2. Obiectul necunoscut pe care îl vei folosi la test.  
3. O riglă și o carte.  
4. Un creion și o gumă din alt unghi.

**Exercițiul C — Aplică pragul**  
Pragul este 70%. Pentru fiecare rezultat spune „răspuns” sau „nu știu”:
1. creion, 95%  
2. gumă, 62%  
3. creion, 71%  
4. altceva, 55%  
5. gumă, 88%  
6. creion, 69%

**Exercițiul D — Prag mic sau mare?**  
Ce se întâmplă dacă alegi pragul 50%? Dar 95%? Care ți se pare mai bun pentru un model care deschide poarta unei case? De ce?

**Exercițiul E — Explică cu cuvintele tale**  
Răspunde în 3 propoziții: de ce un model cu doar două clase nu poate spune „nu știu” și ce facem ca să-l ajutăm?

**Gata când:**  
- [ ] Fișa este completă  
- [ ] Ai testat modelul cu 2 clase și cu 3 clase pe aceleași necunoscute  
- [ ] Ai aplicat pragul de 70% pe tabel  
- [ ] Ai răspuns la Exercițiile B–E  
- [ ] Foaia se numește `Prenume_Nume_AI2_L5`  

---

## Bonus ★★★ — Provocare: Cât de sus punem pragul?
*Doar dacă ai terminat Complet.*

Descoperă ce prag funcționează cel mai bine pentru modelul tău.

- [ ] Folosești tabelul cu cele 12 situații și încrederea notată la fiecare
- [ ] Aplici, pe rând, pragurile 60%, 70%, 80% și 90%
- [ ] Pentru fiecare prag completezi: la câte situații răspunde modelul, câte din ele sunt corecte, câte răspunsuri greșite rămân și câte din cele 4 necunoscute sunt prinse
- [ ] Calculezi pentru fiecare prag procentul de răspunsuri corecte din cele la care a răspuns
- [ ] Alegi pragul care ți se pare cel mai bun și scrii de ce
- [ ] Scrii 2 propoziții: ce se întâmplă dacă pragul este prea mic și ce se întâmplă dacă este prea mare
- [ ] Salvează foaia ca `Prenume_Nume_AI2_L5_Prag`

---

## Recapitulare pe scurt

- Un model cu două clase răspunde **mereu**, chiar și la un obiect necunoscut.  
- Clasa **„altceva”** îl ajută să recunoască ce nu cunoaște.  
- Obiectele necunoscute de la test **nu intră** la antrenare.  
- **Pragul** este încrederea minimă: sub el spunem „nu știu”.  
- Un prag mic lasă multe greșeli; unul prea mare lasă puține răspunsuri.  

**Schema pe scurt (pe foaie):** 2 clase → răspunde mereu · + „altceva” + prag → „nu știu” când încrederea e mică → mai puține greșeli, mai puține răspunsuri

---

## Quiz scurt
- De ce un model cu 2 clase nu poate spune „nu știu”?  
- Ce punem în clasa „altceva”?  
- De ce obiectele necunoscute de la test nu intră la antrenare?  
- Ce este un prag?  
- Ce se întâmplă dacă pragul este foarte mare?

---

## Temă
1. Termină fișa, dacă nu ai terminat.  
2. Explică unui adult ce înseamnă „nu știu” pentru un model și de ce este util.  
3. Alege 3 situații din viață în care un aparat ar trebui să spună „nu știu” în loc să ghicească.  
4. Scrie ce prag ai pune pentru fiecare dintre ele și de ce.  
5. Salvează foaia ca `Prenume_Nume_AI2_L5_Tema`.

---

## Ce urmează — Lecția 6
Lăsăm imaginile și învățăm modele pe alte date: sunete și, dacă vrei, poziții ale corpului.

---

## Răspunsuri
- **Quiz scurt:** (1) pentru că nu are o clasă pentru asta și alege mereu una dintre cele pe care le știe; (2) fundalul gol și câteva obiecte care nu sunt nici creion, nici gumă; (3) pentru că altfel nu mai sunt necunoscute și nu mai putem verifica dacă modelul se descurcă la lucruri noi; (4) încrederea minimă de la care luăm răspunsul în seamă; (5) modelul spune „nu știu” aproape mereu și răspunde la prea puține situații.  
- **Exemplul 1:** în general modelul alege „creion” sau „gumă”, de multe ori cu încredere mare, pentru că nu are altă variantă. Ipoteza poate fi diferită: contează să o comparăm cu rezultatul.  
- **Exemplul 2:** modelul cu 2 clase răspunde mereu, chiar la necunoscute. Nu poate spune „nu știu”.  
- **Exemplul 4:** cifrele diferă de la model la model. Cu clasa „altceva”, de obicei mai multe necunoscute sunt recunoscute, dar nu toate.  
- **Exemplul 5:** aplicarea regulii scade numărul de răspunsuri, dar și numărul de greșeli confidente.  
- **Exercițiul B:** (1) da; (2) nu, este obiectul de test; (3) da; (4) nu, acestea aparțin claselor „creion” și „gumă”.  
- **Exercițiul C:** (1) răspuns; (2) nu știu; (3) răspuns; (4) nu știu; (5) răspuns; (6) nu știu.  
- **Exercițiul D:** la 50%, modelul răspunde aproape mereu și lasă multe greșeli; la 95%, spune „nu știu” aproape mereu. Pentru o poartă este mai bun un prag mare: mai bine nu se deschide decât să se deschidă pentru un străin, iar omul poate verifica.  
- **Exercițiul E:** pentru că are doar două clase și alege mereu una; adăugăm clasa „altceva” și o regulă după încredere.  
- **Notă pentru adultul care ajută:** verificați că obiectele de test nu apar în nicio clasă de antrenare. Dacă un elev are un rezultat „prea bun” (toate necunoscutele prinse), întrebați dacă obiectele de test au fost văzute la antrenare. Pragul se aplică de elev pe hârtie: unealta nu îl calculează singură. Nu salvați proiecte în Google Drive.  

**Bonus ★★★ — Cât de sus punem pragul?**

*Schema logicii:*
1. Pornești de la tabelul cu 12 situații și încrederea la fiecare.  
2. Pentru fiecare prag (60%, 70%, 80%, 90%) subliniezi rândurile cu încrederea sub prag: acolo modelul spune „nu știu”.  
3. Numeri: la câte situații răspunde, câte din ele sunt corecte, câte răspunsuri greșite rămân și câte din cele 4 necunoscute sunt prinse (prinse = „altceva” corect sau „nu știu”).  
4. Calculezi procentul de răspunsuri corecte din cele la care a răspuns.  
5. Alegi pragul și scrii de ce.

*Exemplu de tabel cu 12 situații:*

| Nr. | Real | Ce a spus | Încredere |
|-----|------|-----------|-----------|
| 1 | creion | creion | 96% |
| 2 | creion | creion | 88% |
| 3 | creion | creion | 74% |
| 4 | creion | gumă | 58% |
| 5 | gumă | gumă | 93% |
| 6 | gumă | gumă | 81% |
| 7 | gumă | creion | 66% |
| 8 | gumă | gumă | 72% |
| 9 | necunoscut | altceva | 90% |
| 10 | necunoscut | altceva | 63% |
| 11 | necunoscut | gumă | 57% |
| 12 | necunoscut | creion | 85% |

*Rezultate pe praguri:*

| Prag | Răspunde la | Corecte din cele la care răspunde | Greșeli rămase | Necunoscute prinse |
|------|-------------|-----------------------------------|----------------|--------------------|
| fără prag | 12 | 8 din 12, adică 67% | 4 | 2 din 4 |
| 60% | 10 | 8 din 10, adică 80% | 2 | 3 din 4 |
| 70% | 8 | 7 din 8, adică 88% | 1 | 3 din 4 |
| 80% | 6 | 5 din 6, adică 83% | 1 | 3 din 4 |
| 90% | 3 | 3 din 3, adică 100% | 0 | 4 din 4 |

*Alegerea pragului:* 70% este un compromis bun: modelul răspunde la 8 din 12 situații și are 88% corecte. La 90% nu mai greșește deloc, dar răspunde la doar 3 din 12, deci aproape nu mai ajută.

*Exemplu de 2 propoziții:* „Dacă pragul este prea mic, modelul răspunde la aproape tot și greșește cu încredere mare. Dacă este prea mare, spune «nu știu» aproape mereu și nu mai folosește la nimic.”

- Numerele tale vor fi altele: contează să faci același calcul pentru fiecare prag.  
- „Nu știu” la un obiect creion sau gumă înseamnă că modelul nu a răspuns, nu că a greșit.  
- Pragul bun depinde de ce face modelul: pentru ceva periculos, alegi un prag mai mare.  
