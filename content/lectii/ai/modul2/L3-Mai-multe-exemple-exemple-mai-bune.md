# LECȚIA 3 — Mai multe exemple, exemple mai bune
### Un experiment cinstit: cantitate sau calitate?
**Modulul 2 · Antrenăm modele AI · 10+ · 2 ore**  
**Code Maker Club · AI Maker**

> Azi faci un experiment: un model, trei runde de antrenare și același test de fiecare dată. Afli dacă un model devine mai bun cu **mai multe** exemple sau cu exemple **mai bune**, și învățăm să comparăm cinstit. Lucrăm la calculator, cu un adult prezent dacă se poate.  
> Proiect: **„Experimentul meu: cantitate sau calitate?”** · folder: `Prenume_Nume_AI2_L3` (ex. `Ana_Pop_AI2_L3`)

---

## Ce facem azi
La finalul orei știi să faci un experiment cu un singur lucru schimbat, să folosești același test de fiecare dată, să compari rezultatele într-o diagramă și să spui ce ajută mai mult un model: mai multe exemple sau exemple mai variate. În Modulul 1 ai aflat că un set bun este mare și variat. Acum măsori asta, cu cifre.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare: planul, setul de test, acuratețea (**Exemplul 1**) |
| 10–30 | Ipoteza și testul fix (**Exemplul 2**) |
| 30–50 | Runda 1: 5 exemple la fel (**Exemplul 3**) |
| 50–70 | Runda 2: 15 exemple la fel (**Exemplul 4**) |
| 70–90 | Runda 3: 15 exemple variate (**Exemplul 5**) |
| 90–110 | Diagrama și concluzia (**Exemplul 6**) |
| 110–120 | Recap și temă |

Exercițiile B–E și Provocarea sunt pentru cine termină mai repede, sau pentru acasă.

**Ce ai nevoie:** calculator cu cameră web și browser actual, două perechi de obiecte mici (pentru antrenare și pentru test), foi A4 (de preferat cu pătrățele), riglă, creioane colorate.  
**Fără calculator sau fără cameră:** adultul încarcă poze făcute în prealabil: un set cu 5 poze la fel, unul cu 15 poze la fel și unul cu 15 poze variate. Sau faceți experimentul pe hârtie, cu „Mașina de sortat” din Modulul 1.

---

## Cuvinte noi azi

| Cuvânt | Ce înseamnă | Exemplu |
|--------|-------------|---------|
| **Ipoteză** | Ce crezi că se va întâmpla, scris înainte de experiment | „Cu 15 exemple variate, modelul va fi cel mai bun” |
| **Test fix** | Același test, folosit la fiecare rundă | aceleași 10 situații, scrise pe foaie |
| **Un singur lucru schimbat** | La fiecare rundă schimbi doar un lucru, ca să știi ce a făcut diferența | doar numărul de exemple |
| **Diagramă cu bare** | Desen în care înălțimea barei arată rezultatul | bara pentru 70% |

---

## Pas cu pas

**Partea 1 — Pregătirea experimentului**

### Exemplul 1 — Ne amintim
Spune în perechi, din memorie:
1. Ce este setul de antrenare și ce este setul de test.  
2. De ce testăm cu obiecte noi.  
3. Cum se calculează acuratețea.

**Gata când:**  
- [ ] Am spus diferența dintre setul de antrenare și cel de test  
- [ ] Am calculat în minte: 6 corecte din 10 înseamnă 60%  

### Exemplul 2 — Ipoteza și testul fix
Experimentul are trei runde, cu **aceleași două clase** (de exemplu „creion” și „gumă”):

- **Runda 1:** 5 exemple pe clasă, toate făcute din aceeași poziție.  
- **Runda 2:** 15 exemple pe clasă, tot din aceeași poziție (mai multe, la fel).  
- **Runda 3:** 15 exemple pe clasă, din poziții diferite (la fel de multe ca în runda 2, dar variate).

Pentru ca rezultatele să fie comparabile, folosim un **test fix**: scrie acum pe foaie **10 situații** (5 pentru fiecare clasă), cu obiectele puse deoparte și cu poziții variate: din față, din lateral, mai departe, în altă lumină. Aceleași 10 situații se repetă la fiecare rundă. Dacă schimbi testul, nu mai poți compara.

Înainte de experiment scrie **ipoteza**: care rundă crezi că va avea cea mai mare acuratețe, și de ce? Scrie și ordinea așteptată a celor trei runde.

**Gata când:**  
- [ ] Am scris cele 10 situații ale testului fix  
- [ ] Am scris ipoteza și ordinea așteptată a rundelor  

**Partea 2 — Rundele**

### Exemplul 3 — Runda 1: 5 exemple la fel
1. Deschide Teachable Machine, alege proiectul cu imagini și dă nume celor două clase.  
2. La fiecare clasă adaugă **5 exemple**, toate din aceeași poziție (apăsări scurte, obiectul nu se mișcă).  
3. Apasă „Train Model” și nu închide fila.  
4. Rulează testul fix, cele 10 situații, și notează în tabel ce a spus modelul.  
5. Calculează acuratețea.

| Runda | Exemple pe clasă | Cum sunt | Corecte din 10 | Acuratețe |
|-------|------------------|----------|----------------|-----------|
| 1 | 5 | la fel | | |
| 2 | 15 | la fel | | |
| 3 | 15 | variate | | |

**Gata când:**  
- [ ] Modelul este antrenat cu 5 exemple pe clasă  
- [ ] Am rulat testul fix și am completat linia 1 din tabel  

### Exemplul 4 — Runda 2: 15 exemple la fel
Adaugă la fiecare clasă încă 10 exemple, tot din aceeași poziție, ca să ajungi la 15. Antrenează din nou și rulează **exact același test**. Completează linia 2.

Întrebare: a crescut acuratețea? Cu cât? Sunt de ajuns mai multe poze, dacă toate sunt la fel?

**Gata când:**  
- [ ] Fiecare clasă are 15 exemple la fel  
- [ ] Am completat linia 2 din tabel cu același test  

### Exemplul 5 — Runda 3: 15 exemple variate
Șterge exemplele fiecărei clase (din meniul clasei) și adună **15 exemple noi**, de data aceasta din poziții diferite: față, lateral, mai departe, în altă lumină. Antrenează și rulează **același test fix**. Completează linia 3.

Nu schimba nimic altceva: aceleași clase, același număr de exemple ca în runda 2, același test. Singurul lucru schimbat este **varietatea**.

**Gata când:**  
- [ ] Fiecare clasă are 15 exemple din poziții diferite  
- [ ] Am completat linia 3 din tabel cu același test  

**Partea 3 — Concluzia**

### Exemplul 6 — Diagrama și concluzia
1. Desenează o **diagramă cu bare** cu cele trei acurateți (câte o bară pentru fiecare rundă), cu titlu și axe.  
2. Compară cu ipoteza ta: ordinea așteptată a fost cea reală?  
3. Scrie trei propoziții: ce a ajutat cel mai mult modelul, ce nu s-a schimbat mult și de ce crezi asta.

Ideea de reținut: **mai multe poze nu înseamnă automat mai bine**. Dacă toate sunt la fel, modelul nu învață nimic nou. Variația ajută, pentru că modelul vede obiectul în situații cum vor fi și la test.

**Gata când:**  
- [ ] Diagrama are trei bare, titlu și axe  
- [ ] Am scris cele trei propoziții și am comparat cu ipoteza  

---

## Greșeli frecvente

| Ce crezi | De fapt | Corect |
|----------|---------|--------|
| „Mai multe poze la fel sunt mai bune” | Nu aduc informație nouă | Variez pozițiile |
| „Schimb mai multe lucruri deodată, ca să meargă mai repede” | Nu mai știu ce a ajutat | Schimb un singur lucru pe rând |
| „Schimb testul la fiecare rundă” | Nu mai pot compara | Folosesc același test fix |
| „Dacă ipoteza mea a fost greșită, experimentul a eșuat” | Un rezultat neașteptat este tot o descoperire | Notez ce am aflat |
| „O diferență de o singură situație dintre două runde dovedește ceva” | Testul este mic | Mă uit la tendință, nu la o singură cifră |

---

## De făcut azi — „Experimentul meu: cantitate sau calitate?”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Testul fix scris (10 situații) · runda 1 și runda 3 făcute · tabelul completat pentru acele două runde |
| **Complet** | Minim + runda 2 · diagrama cu bare · ipoteza și cele 3 propoziții · Exercițiile B–E |

### Pasul 1 — Minim
**Exercițiul A — „Experimentul meu: cantitate sau calitate?” (obligatoriu).** Completează tabelul din Exemplul 3 pentru runda 1 și runda 3, cu același test fix.

**→ Minim când:** ai testul fix scris și rundele 1 și 3 sunt notate în tabel.

### Pasul 2 — Complet

**Exercițiul B — Ce s-a schimbat?**  
Spune ce a fost schimbat între runde:
1. Runda 1 la runda 2.  
2. Runda 2 la runda 3.

**Exercițiul C — Citește rezultatele**  
Un elev a obținut: runda 1, 50%; runda 2, 60%; runda 3, 90%. Ce învățăm din asta? Care dintre cele două schimbări a ajutat mai mult?

**Exercițiul D — Este un experiment cinstit?**  
Ana schimbă în același timp numărul de exemple, pozițiile și testul. Apoi spune că „variația a ajutat”. De ce nu putem fi siguri?

**Exercițiul E — Explică cu cuvintele tale**  
Răspunde în 3 propoziții: ce înseamnă „un singur lucru schimbat” și de ce folosim un test fix?

**Gata când:**  
- [ ] Ai testul fix scris și toate cele 3 runde notate  
- [ ] Ai diagrama cu bare și cele 3 propoziții  
- [ ] Ai răspuns la Exercițiile B–E  
- [ ] Foaia se numește `Prenume_Nume_AI2_L3`  

---

## Bonus ★★★ — Provocare: Curba exemplelor
*Doar dacă ai terminat Complet.*

Descoperă de la câte exemple variate modelul nu mai crește prea mult.

- [ ] Folosești aceleași două clase și același test fix de 10 situații
- [ ] Faci patru runde, cu exemple variate: 5, 10, 20 și 40 de exemple pe clasă
- [ ] La fiecare rundă notezi acuratețea
- [ ] Desenezi un grafic cu linie: pe orizontală numărul de exemple, pe verticală acuratețea
- [ ] Spui în ce punct acuratețea nu mai crește mult
- [ ] Scrii 2 propoziții: ce ți-a arătat curba despre „mai multe exemple”
- [ ] Salvează foaia ca `Prenume_Nume_AI2_L3_Curba`

---

## Recapitulare pe scurt

- Un experiment cinstit schimbă **un singur lucru** odată.  
- Folosim **același test fix** la fiecare rundă.  
- Scriem **ipoteza** înainte, apoi comparăm cu rezultatul.  
- Mai multe poze la fel ajută puțin; **exemplele variate** ajută mai mult.  
- Desenăm rezultatele într-o **diagramă**, ca să le vedem clar.  

**Schema pe scurt (pe foaie):** ipoteză → test fix → runda 1 → runda 2 → runda 3 → diagramă → concluzie

---

## Quiz scurt
- Ce este o ipoteză?  
- Ce este un test fix și de ce îl folosim?  
- Ce înseamnă „un singur lucru schimbat”?  
- Ce ajută mai mult un model, 15 poze la fel sau 15 poze variate?  
- De ce desenăm rezultatele într-o diagramă?

---

## Temă
1. Termină diagrama și concluzia, dacă nu ai terminat.  
2. Explică unui adult experimentul tău, cu diagrama în față.  
3. Alege o pereche nouă de obiecte și scrie ipoteza pentru un experiment nou.  
4. Gândește-te la un alt lucru pe care l-ai putea schimba într-un experiment (de exemplu lumina) și scrie cum ai păstra testul fix.  
5. Salvează foaia ca `Prenume_Nume_AI2_L3_Tema`.

---

## Ce urmează — Lecția 4
Aflăm cum arătăm greșelile unui model într-un tabel simplu și cum citim ce confundă modelul.

---

## Răspunsuri
- **Quiz scurt:** (1) ce crezi că se va întâmpla, scris înainte de experiment; (2) același test, folosit la fiecare rundă, ca să putem compara; (3) la fiecare rundă schimbi doar un lucru, ca să știi ce a făcut diferența; (4) 15 poze variate, pentru că modelul vede obiectul în situații diferite; (5) pentru că se văd mai ușor diferențele dintre rezultate.  
- **Exemplul 1:** 6 corecte din 10 înseamnă 60%.  
- **Exemplul 6:** rezultatele diferă de la model la model. Dacă ordinea reală nu seamănă cu ipoteza, nu este o greșeală: este o descoperire și se notează.  
- **Exercițiul B:** (1) numărul de exemple (de la 5 la 15), pozițiile au rămas la fel; (2) varietatea (pozițiile), numărul a rămas 15.  
- **Exercițiul C:** variația a ajutat mai mult: creșterea de la 60% la 90% este mai mare decât cea de la 50% la 60%.  
- **Exercițiul D:** pentru că a schimbat trei lucruri odată: nu știm care dintre ele a făcut diferența.  
- **Exercițiul E:** un singur lucru schimbat înseamnă că la fiecare rundă modifici doar un factor, ca să vezi efectul lui; testul fix este același de fiecare dată, ca să putem compara rezultatele cinstit.  
- **Notă pentru adultul care ajută:** verificați că fiecare elev are testul fix scris înainte de runda 1. Ștergerea exemplelor se face din meniul clasei; denumirile pot diferi puțin în site. Dacă o rundă dă un rezultat neașteptat, nu o corectați: notați-l și discutați cauzele. Nu salvați proiecte în Google Drive.  

**Bonus ★★★ — Curba exemplelor:**

*Schema logicii:*
1. Păstrezi aceleași clase și același test fix de 10 situații.  
2. Faci patru runde cu exemple variate: 5, 10, 20, apoi 40 pe clasă.  
3. Notezi acuratețea la fiecare rundă.  
4. Desenezi graficul: numărul de exemple pe orizontală, acuratețea pe verticală.  
5. Cauți punctul de la care curba se aplatizează.

*Exemplu de rezultate:*

| Exemple pe clasă | Corecte din 10 | Acuratețe |
|------------------|----------------|-----------|
| 5 | 5 | 50% |
| 10 | 7 | 70% |
| 20 | 9 | 90% |
| 40 | 9 | 90% |

*Exemplu de grafic:* linia urcă mult între 5 și 20 de exemple, apoi rămâne la 90% între 20 și 40.

*Exemplu de 2 propoziții:* „Între 5 și 20 de exemple, modelul a crescut mult. De la 20 la 40 nu a mai crescut, deci mai multe exemple nu ajută automat. Probabil mai trebuiau poziții noi, nu mai multe poze.”

- Numerele diferă de la model la model: contează forma curbei.  
- Dacă la 40 de exemple acuratețea scade puțin, poate fi din întâmplare sau de la poze la fel. Notează-o.  
- Poți face graficul pe pătrățele, cu rigla.  
