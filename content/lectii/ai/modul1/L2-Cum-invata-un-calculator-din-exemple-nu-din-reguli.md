# LECȚIA 2 — Cum învață un calculator: din exemple, nu din reguli
**Modulul 1 · AI pentru copii · 2 ore**  
**Code Maker Club · AI Explorer**

> Azi „antrenezi” un model de hârtie: primești exemple cu etichete, descoperi regula ascunsă și o testezi pe exemple noi. Nu ai nevoie de calculator.  
> Proiect: **„Raportul antrenorului”** · folder: `Prenume_Nume_AI1_L2` (ex. `Ana_Pop_AI1_L2`)

---

## Obiectiv
La finalul orei știi ce înseamnă **exemple**, **etichete**, **antrenare** și **testare**, și poți explica de ce un model învață mai bine cu mai multe exemple corecte.  
**Minim:** jocul „Mașina de sortat” făcut o dată, cu regula ghicită și testată.  
**Complet:** în plus compari rezultatul după 2 exemple și după 8, vezi ce se întâmplă cu o etichetă greșită și completezi raportul.

## De ce contează
Lecția trecută ai aflat că AI învață din exemple. Azi vezi cum se întâmplă asta, pas cu pas. Când înțelegi cum se antrenează un model, înțelegi și de ce uneori greșește.

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

**Ce îți trebuie:** foi A4, creioane colorate, foarfecă, 2 plicuri sau 2 cutii mici.

---

## 1. Ideea de bază: antrenare și testare
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

### Exemplul 2 — Testarea
Antrenorii arată celor din echipa Modelului 4 cartonașe **noi**, fără etichetă. Modelul spune A sau B pentru fiecare. Antrenorii verifică.

Scrie un scor: câte din 4 a ghicit corect. Apoi schimbați rolurile cu o regulă nouă.

---

## 2. Câte exemple ajung?

### Exemplul 3 — Doar 2 exemple contra 8
Repetă jocul. De data aceasta Modelul vede întâi **doar 2** cartonașe cu etichetă și ghicește pe 4 cartonașe noi. Apoi vede **8** și ghicește pe alte 4.

| | 2 exemple | 8 exemple |
|---|-----------|-----------|
| Ghicite corect (din 4) | ___ | ___ |

De obicei, cu mai multe exemple ghicești mai bine. Dar contează și **cât de variate** sunt: dacă toate exemplele A sunt cercuri roșii, Modelul poate crede că regula e despre cerc, nu despre culoare.

---

## 3. Când eticheta este greșită

### Exemplul 4 — Un exemplu stricat
Antrenorii schimbă pe ascuns eticheta la **un singur** cartonaș: unul roșu primește eticheta B. Modelul vede din nou cele 8 exemple.

Ce se întâmplă? Regula devine confuză și Modelul poate ghici mai prost sau poate crede că există o excepție. Concluzie: **exemplele greșite „strică” antrenarea**. Dacă datele sunt greșite, modelul învață lucruri greșite.

---

## 4. Învățare prin încercări

### Exemplul 5 — Cald–rece
Nu toată învățarea folosește etichete. Uneori programul primește doar un semn: **bine** sau **mai greu**.

1. Un coleg ascunde un obiect mic în clasă (sau în cameră).  
2. Tu cauți. Colegul spune doar „cald” când te apropii și „rece” când te îndepărtezi.  
3. Numără câte încercări ai avut până ai găsit obiectul.

Rejoacă de încă două ori. După fiecare joc, găsești mai repede? Așa învață și unele programe, prin încercări și feedback.

---

## 5. Raportul antrenorului

### Exemplul 6 — Notez ce am învățat
Pe o foaie, creează tabelul:

| Joc | Câte exemple | Ghicite corect | Ce am observat |
|-----|--------------|----------------|----------------|
| Mașina de sortat | 2 | | |
| Mașina de sortat | 8 | | |
| Cu etichetă greșită | 8 | | |

La final scrie 3 propoziții: ce ajută un model să învețe bine și ce îl încurcă.

**Încearcă tu (10 min)**  
- [ ] Explică unui coleg ce înseamnă antrenare și ce înseamnă testare  
- [ ] Dă un exemplu de etichetă  
- [ ] Spune ce se întâmplă dacă o etichetă este greșită  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Raportul antrenorului” (obligatoriu)
Completează tabelul din Exemplul 6 și cele 3 propoziții de concluzie.

### Exercițiul B — Antrenare sau testare?
Spune pentru fiecare dacă este **antrenare** sau **testare**:
1. Primești 10 poze cu etichetele „măr” sau „banană”.  
2. Primești o poză nouă și trebuie să spui ce este.  
3. Cineva îți spune „corect” sau „greșit” după fiecare răspuns, ca să înveți.  
4. Verifici cât din 20 de răspunsuri noi sunt corecte.

### Exercițiul C — Găsește problema
Un model a învățat să recunoască mere din poze, dar spune „nu este măr” pentru un măr verde. Scrie două motive posibile.

### Exercițiul D — Etichetele tale
Alege 3 lucruri din cameră. Pentru fiecare, scrie o etichetă potrivită într-o foaie: de exemplu „jucărie”, „haină”, „carte”. Apoi spune ce ar urma dacă ai pune o etichetă greșită la unul dintre ele.

### Exercițiul E — Explică cu cuvintele tale
Răspunde în 3 propoziții: cum învață un calculator din exemple?

**Gata când:**
- [ ] Ai jucat „Mașina de sortat” cel puțin o dată, cu antrenare și testare  
- [ ] Ai completat tabelul din raport  
- [ ] Ai scris cele 3 propoziții de concluzie  
- [ ] Ai răspuns la Exercițiul B  
- [ ] Foaia se numește `Prenume_Nume_AI1_L2`  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Inventează o regulă mai grea (de exemplu „formă cu colțuri și culoare rece”) și vezi dacă un coleg o ghicește din 8 exemple  
- [ ] Fă un set de 10 exemple în care regula să fie imposibil de ghicit și explică de ce  
- [ ] Gândește-te la un joc în care înveți din „bine” și „greșit”, fără să ți se explice regula  

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

## Recapitulare pe scurt

- **Antrenarea:** modelul primește exemple cu etichete.  
- **Testarea:** modelul primește exemple noi, fără etichetă.  
- Mai multe exemple **variate** ajută la învățat.  
- O **etichetă greșită** poate strica antrenarea.  
- Unele programe învață din **încercări** și semnale de tip „bine” sau „greșit”.  

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
4. **Bonus:** inventează o regulă și lasă pe cineva să o ghicească.  
5. Salvează foaia ca `Tema_AI1_L2_Prenume_Nume`.

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
