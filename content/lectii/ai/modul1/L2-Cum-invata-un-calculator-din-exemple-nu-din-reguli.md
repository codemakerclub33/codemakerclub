# LECȚIA 2 — Cum învață un calculator: din exemple, nu din reguli
### Antrenare, testare și etichete
**Modulul 1 · AI pentru copii · 2 ore**  
**Code Maker Club · AI Explorer**

> Azi „antrenezi” un model de hârtie: primești exemple cu etichete, descoperi regula ascunsă și o testezi pe exemple noi. Nu ai nevoie de calculator.  
> Proiect: **„Raportul antrenorului”** · folder: `Prenume_Nume_AI1_L2` (ex. `Ana_Pop_AI1_L2`)

---

## Ce facem azi
La finalul orei știi ce înseamnă **exemple**, **etichete**, **antrenare** și **testare**, și poți explica de ce un model învață mai bine cu mai multe exemple corecte. Lecția trecută ai aflat că AI învață din exemple. Azi vezi cum se întâmplă asta, pas cu pas. Când înțelegi cum se antrenează un model, înțelegi și de ce uneori greșește.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare: reguli sau exemple? |
| 10–40 | Jocul „Mașina de sortat” (**Exemplele 1–2**) |
| 40–60 | Câte exemple ajung? (**Exemplul 3**) |
| 60–80 | Eticheta greșită (**Exemplul 4**) |
| 80–95 | Învățare prin încercări: cald–rece (**Exemplul 5**) |
| 95–115 | Raportul antrenorului (**Exemplul 6**) |
| 115–120 | Recap și temă |

Exercițiile B–E și Provocarea sunt pentru cine termină mai repede, sau pentru acasă.

**Ce ai nevoie:** foi A4, creioane colorate, foarfecă, 2 plicuri sau 2 cutii mici

---

## Cuvinte noi azi

| Cuvânt | Ce înseamnă | Exemplu |
|--------|-------------|---------|
| **Etichetă** | Răspunsul corect scris pe un exemplu | „A” sau „măr” |
| **Antrenare** | Modelul primește exemple cu etichete și caută ce au în comun | 8 cartonașe cu A sau B |
| **Testare** | Modelul primește exemple noi, fără etichetă, și ghicește | 4 cartonașe noi |
| **Model** | Ce a învățat programul în urma antrenării | regula ghicită |

---

## Pas cu pas

**Partea 1 — Ideea de bază: antrenare și testare**  
Un program cu AI trece prin două etape:
- **Antrenarea:** primește exemple cu **etichete** (răspunsul corect) și caută ce au în comun.
- **Testarea:** primește exemple noi, **fără etichetă**, și încearcă să ghicească.

Rezultatul antrenării se numește **model**: este ce a învățat programul.

### Exemplul 1 — Mașina de sortat (antrenarea)
Jucați în două echipe: **Antrenorii** și **Modelul**.

1. Antrenorii desenează pe 12 cartonașe forme (cercuri, pătrate, triunghiuri) în culori diferite.  
2. Antrenorii aleg în secret o regulă simplă, de exemplu: „toate formele roșii sunt A, restul sunt B”.  
3. Pun 8 cartonașe într-un rând, cu eticheta **A** sau **B** scrisă pe spate sau alături.  
4. Modelul se uită la cele 8 exemple și încearcă să ghicească regula.

**Gata când:**  
- [ ] Antrenorii au făcut cele 12 cartonașe și au ales o regulă  
- [ ] Modelul a spus ce regulă crede că a găsit  

### Exemplul 2 — Testarea
Antrenorii arată celor din echipa Modelului 4 cartonașe **noi**, fără etichetă. Modelul spune A sau B pentru fiecare. Antrenorii verifică.

Scrie un scor: câte din 4 a ghicit corect. Apoi schimbați rolurile cu o regulă nouă.

**Gata când:**  
- [ ] Am notat scorul din 4  
- [ ] Am schimbat rolurile și am jucat cu o regulă nouă  

**Partea 2 — Câte exemple ajung?**

### Exemplul 3 — Doar 2 exemple contra 8
Repetă jocul. De data aceasta Modelul vede întâi **doar 2** cartonașe cu etichetă și ghicește pe 4 cartonașe noi. Apoi vede **8** și ghicește pe alte 4.

| | 2 exemple | 8 exemple |
|---|-----------|-----------|
| Ghicite corect (din 4) | ___ | ___ |

De obicei, cu mai multe exemple ghicești mai bine. Dar contează și **cât de variate** sunt: dacă toate exemplele A sunt cercuri roșii, Modelul poate crede că regula e despre cerc, nu despre culoare.

**Gata când:**  
- [ ] Am completat tabelul cu cele două scoruri  
- [ ] Pot spune de ce contează ca exemplele să fie variate  

**Partea 3 — Când eticheta este greșită**

### Exemplul 4 — Un exemplu stricat
Antrenorii schimbă pe ascuns eticheta la **un singur** cartonaș: unul roșu primește eticheta B. Modelul vede din nou cele 8 exemple.

Ce se întâmplă? Regula devine confuză și Modelul poate ghici mai prost sau poate crede că există o excepție. Concluzie: **exemplele greșite „strică” antrenarea**. Dacă datele sunt greșite, modelul învață lucruri greșite.

**Gata când:**  
- [ ] Am schimbat o etichetă și am văzut ce se întâmplă cu scorul  
- [ ] Pot spune de ce o etichetă greșită strică antrenarea  

**Partea 4 — Învățare prin încercări**

### Exemplul 5 — Cald–rece
Nu toată învățarea folosește etichete. Uneori programul primește doar un semn: **bine** sau **mai greu**.

1. Un coleg ascunde un obiect mic în clasă (sau în cameră).  
2. Tu cauți. Colegul spune doar „cald” când te apropii și „rece” când te îndepărtezi.  
3. Numără câte încercări ai avut până ai găsit obiectul.

Rejoacă de încă două ori. După fiecare joc, găsești mai repede? Așa învață și unele programe, prin încercări și feedback.

**Gata când:**  
- [ ] Am jucat de trei ori și am notat încercările  
- [ ] Pot spune dacă am găsit mai repede la ultimul joc  

**Partea 5 — Raportul antrenorului**

### Exemplul 6 — Notez ce am învățat
Pe o foaie, creează tabelul:

| Joc | Câte exemple | Ghicite corect | Ce am observat |
|-----|--------------|----------------|----------------|
| Mașina de sortat | 2 | | |
| Mașina de sortat | 8 | | |
| Cu etichetă greșită | 8 | | |

La final scrie 3 propoziții: ce ajută un model să învețe bine și ce îl încurcă.

**Gata când:**  
- [ ] Am completat tabelul cu rezultatele mele  
- [ ] Am explicat unui coleg ce înseamnă antrenare și ce înseamnă testare  

---

## Greșeli frecvente

| Ce crezi | De fapt | Corect |
|----------|---------|--------|
| „Două exemple sunt de ajuns” | Sunt prea puține | Cu mai multe exemple variate se învață mai bine |
| „Antrenarea și testarea sunt la fel” | Sunt etape diferite | La testare modelul vede exemple noi |
| „O etichetă greșită nu contează” | Contează | Poate strica ce învață modelul |
| „Modelul înțelege regula” | Nu | Găsește tipare în exemple |
| „Modelul învață o dată pentru totdeauna” | Poate fi antrenat din nou | Cu exemple noi se poate îmbunătăți |

---

## De făcut azi — „Raportul antrenorului”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Jocul „Mașina de sortat” făcut o dată, cu regula ghicită și testată · prima linie din tabel completată · o propoziție de concluzie |
| **Complet** | Minim + scorul cu 2 exemple și cu 8 · jocul cu etichetă greșită · tabelul complet · cele 3 propoziții de concluzie · Exercițiile B–E |

### Pasul 1 — Minim
**Exercițiul A — „Raportul antrenorului” (obligatoriu).** Completează tabelul din Exemplul 6 cu ce ai jucat și scrie cel puțin o propoziție despre ce ai observat.

**→ Minim când:** ai jucat o dată cu antrenare și testare și ai completat prima linie din tabel.

### Pasul 2 — Complet
Termină tabelul și cele 3 propoziții de concluzie, apoi rezolvă exercițiile.

**Exercițiul B — Antrenare sau testare?**  
Spune pentru fiecare dacă este **antrenare** sau **testare**:
1. Primești 10 poze cu etichetele „măr” sau „banană”.  
2. Primești o poză nouă și trebuie să spui ce este.  
3. Cineva îți spune „corect” sau „greșit” după fiecare răspuns, ca să înveți.  
4. Verifici cât din 20 de răspunsuri noi sunt corecte.

**Exercițiul C — Găsește problema**  
Un model a învățat să recunoască mere din poze, dar spune „nu este măr” pentru un măr verde. Scrie două motive posibile.

**Exercițiul D — Etichetele tale**  
Alege 3 lucruri din cameră. Pentru fiecare, scrie o etichetă potrivită într-o foaie: de exemplu „jucărie”, „haină”, „carte”. Apoi spune ce ar urma dacă ai pune o etichetă greșită la unul dintre ele.

**Exercițiul E — Explică cu cuvintele tale**  
Răspunde în 3 propoziții: cum învață un calculator din exemple?

**Gata când:**  
- [ ] Ai jucat „Mașina de sortat” cel puțin o dată, cu antrenare și testare  
- [ ] Ai completat tabelul din raport  
- [ ] Ai scris cele 3 propoziții de concluzie  
- [ ] Ai răspuns la Exercițiul B  
- [ ] Foaia se numește `Prenume_Nume_AI1_L2`  

---

## Bonus ★★★ — Provocare: Regula cu două trăsături
*Doar dacă ai terminat Complet.*

Fă o „Mașină de sortat” mai grea, în care regula folosește **două** trăsături deodată, și vezi dacă o familie o ghicește.

- [ ] Ai 12 cartonașe cu forme în cel puțin 3 culori și 3 forme diferite
- [ ] Regula secretă folosește **două** trăsături (de exemplu „cerc **și** roșu înseamnă A, restul B”)
- [ ] Pui 8 exemple cu etichetă și 4 exemple noi, fără etichetă, pentru testare
- [ ] Un membru al familiei se uită la cele 8 exemple, spune ce regulă crede și ghicește cele 4 exemple noi
- [ ] Notezi scorul din 4 și dacă a ghicit regula; dacă nu, mai adaugi 4 exemple și notezi scorul nou
- [ ] Salvează foaia ca `Prenume_Nume_AI1_L2_Masina`

---

## Recapitulare pe scurt

- **Antrenarea:** modelul primește exemple cu etichete.  
- **Testarea:** modelul primește exemple noi, fără etichetă.  
- Mai multe exemple **variate** ajută la învățat.  
- O **etichetă greșită** poate strica antrenarea.  
- Unele programe învață din **încercări** și semnale de tip „bine” sau „greșit”.  

**Schema pe scurt (pe foaie):** exemple cu etichete → antrenare → model → testare pe exemple noi → scor

---

## Quiz scurt
- Ce este antrenarea unui model?  
- Ce este testarea?  
- Ce este o etichetă?  
- De ce ajută mai multe exemple?  
- Ce se întâmplă dacă o etichetă este greșită?

---

## Temă
1. Termină Raportul antrenorului, dacă nu ai terminat.  
2. Joacă „Mașina de sortat” cu cineva din familie și notează scorul.  
3. Scrie un exemplu de lucru pe care îl înveți și tu din exemple, nu din reguli (de exemplu cum arată un anotimp).  
4. Inventează o regulă și lasă pe cineva să o ghicească.  
5. Salvează foaia ca `Prenume_Nume_AI1_L2_Tema`.

---

## Ce urmează — Lecția 3
Aflăm ce sunt datele, de ce spunem că sunt „hrana” pentru AI și cum arată datele bune și datele proaste.

---

## Răspunsuri
- **Quiz scurt:** (1) etapa în care modelul primește exemple cu etichete și caută ce au în comun; (2) etapa în care modelul primește exemple noi, fără etichetă, și încearcă să ghicească; (3) răspunsul corect pentru un exemplu, de exemplu „măr” sau „A”; (4) pentru că modelul vede mai multe tipare și greșește mai rar, mai ales dacă exemplele sunt variate; (5) modelul învață lucruri greșite și poate greși mai mult.  
- **Exemplul 3:** rezultatele variază; important este ca elevul să observe că mai multe exemple variate ajută. Acceptați și cazurile în care 2 exemple au fost „norocoase”.  
- **Exercițiul B:** (1) antrenare; (2) testare; (3) antrenare; (4) testare.  
- **Exercițiul C:** de exemplu: în antrenare au fost doar mere roșii, deci mărul verde nu seamănă cu exemplele văzute; sau eticheta unor exemple a fost greșită.  
- **Exercițiul D:** acceptați orice etichete logice; o etichetă greșită duce la o regulă greșită.  
- **Exercițiul E:** modelul primește multe exemple cu etichete, caută ce au în comun și apoi folosește ce a găsit pe exemple noi.  
- **Notă pentru adultul care ajută:** nu explicați regula înainte ca elevii să încerce. Dacă jocul se termină prea repede, folosiți reguli mai grele. Dacă este prea greu, folosiți o regulă cu o singură trăsătură (doar culoarea).  

**Bonus ★★★ — Regula cu două trăsături:**

*Schema logicii:*
1. Alegi regula: „cerc **și** roșu înseamnă A, restul B”. Pentru ea trebuie ambele trăsături.  
2. Alegi 8 exemple cu etichetă. Pui cel puțin două cercuri roșii (A) și, printre cele B, câte un cerc de altă culoare și o formă roșie de altă formă. Așa se vede că nici culoarea singură, nici forma singură nu ajung.  
3. Pui deoparte 4 exemple noi pentru testare.  
4. Familia se uită la exemple și spune regula. Verifici cu 4 exemple noi și notezi scorul.  
5. Dacă n-a ghicit, adaugi 4 exemple care arată mai clar diferența și testezi din nou.

*Exemplu de set:*

| Nr. | Cartonaș | Eticheta |
|-----|----------|----------|
| 1 | cerc roșu | A |
| 2 | cerc roșu | A |
| 3 | pătrat roșu | B |
| 4 | triunghi roșu | B |
| 5 | cerc albastru | B |
| 6 | cerc verde | B |
| 7 | pătrat albastru | B |
| 8 | triunghi verde | B |

*Cartonașe noi, fără etichetă (răspuns pe spate):*

| Cartonaș | Răspuns |
|----------|---------|
| cerc roșu | A |
| pătrat verde | B |
| cerc albastru | B |
| triunghi roșu | B |

- Cu doar 2 exemple, cineva ar putea crede „doar roșu” sau „doar cerc”. Exemplele 3–6 arată că fiecare trăsătură singură nu ajunge.  
- Dacă scorul e mic, de obicei lipsesc exemple variate, nu „a greșit” persoana.  
- Răspunsul exact diferă de la familie la familie: contează să explice cum a ajuns la regulă.  
