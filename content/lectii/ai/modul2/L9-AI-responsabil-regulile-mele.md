# LECȚIA 9 — AI responsabil: regulile mele
### Cine poate fi afectat, ce verificăm și ce reguli ne punem
**Modulul 2 · Antrenăm modele AI · 10+ · 2 ore**  
**Code Maker Club · AI Maker**

> Cine construiește ceva cu AI are o responsabilitate: să se gândească la cei care vor folosi sau vor fi afectați de acel lucru. Azi vedem, cu un experiment pe propriul model, cum apar nedreptățile într-un model și învățăm cinci întrebări pe care le pune un constructor responsabil. La final scriem „Regulile mele”. Lucrăm la calculator pentru experiment, cu un adult prezent dacă se poate.  
> Proiect: **„Regulile mele pentru AI”** · folder: `Prenume_Nume_AI2_L9` (ex. `Ana_Pop_AI2_L9`)

---

## Ce facem azi
La finalul orei știi să explici cum un set de date dezechilibrat face un model nedrept față de unele situații, pui cinci întrebări despre orice aplicație cu AI și îți scrii propriile reguli pentru a folosi și a construi AI. Cei care lucrează cu AI nu se întreabă doar „merge?”, ci și „pentru cine merge, pentru cine nu și cine decide când greșește?”.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare: cereri bune și verificare |
| 10–30 | Cine poate fi afectat? (**Exemplul 1**) |
| 30–60 | Experimentul: date dezechilibrate (**Exemplul 2**) |
| 60–78 | Cele cinci întrebări (**Exemplul 3**) |
| 78–93 | Spun că este AI. Imagini false (**Exemplul 4**) |
| 93–108 | „Regulile mele pentru AI” (**Exemplul 5**) |
| 108–116 | Ideea proiectului final (**Exemplul 6**) |
| 116–120 | Recap și temă |

Exercițiile B–E și Provocarea sunt pentru cine termină mai repede, sau pentru acasă.

**Ce ai nevoie:** calculator cu cameră web și browser actual, un creion, o gumă (sau două obiecte mici, la alegere), foi A4, creioane colorate.  
**Fără calculator:** adultul încarcă poze făcute în prealabil, sau experimentul se face pe hârtie, cu cartonașe: un coleg „antrenează” cu pachete de cartonașe inegale și celălalt „testează”.

---

## Cuvinte noi azi

| Cuvânt | Ce înseamnă | Exemplu |
|--------|-------------|---------|
| **Responsabilitate** | Mă gândesc la efectul a ceea ce construiesc | „cine poate fi afectat?” |
| **Set de date dezechilibrat** | O clasă are mult mai multe exemple decât alta | 20 de creioane și 4 gume |
| **Părtinire** | Modelul se descurcă mai bine pentru unele situații decât pentru altele | recunoaște creionul, dar nu guma |
| **Transparență** | Spun clar că ceva a fost făcut cu AI | „Imagine făcută cu AI” |

---

## Pas cu pas

**Partea 1 — Cine poate fi afectat?**

### Exemplul 1 — Patru idei
Pentru fiecare idee, spune cine ar avea de câștigat și cine ar putea avea de pierdut:

1. O aplicație care alege din clasă „cine este atent” și „cine nu este atent”, după o cameră.  
2. O aplicație care recunoaște plante și spune dacă pot fi mâncate.  
3. Un program care alege, dintr-o listă de elevi, cine intră în echipa școlii.  
4. Un asistent care ajută la teme, dar scrie și lucruri greșite.

Pentru care dintre ele ai pune un om să verifice înainte de a decide?

**Gata când:**  
- [ ] Am spus pentru fiecare idee cine câștigă și cine poate pierde  
- [ ] Am ales ideile la care ar trebui să verifice un om, și am spus de ce  

**Partea 2 — Experimentul**

### Exemplul 2 — Date dezechilibrate
Vei construi două modele cu aceleași două obiecte și vei compara.

1. **Modelul 1 (echilibrat):** în Teachable Machine, proiect cu imagini, clasele „creion” și „gumă”, câte **10** exemple variate pe clasă. Antrenează.  
2. **Modelul 2 (dezechilibrat):** o clasă „creion” cu **20** de exemple și o clasă „gumă” cu doar **4**. Antrenează.  
3. **Test fix de 10 situații noi:** 5 cu creion și 5 cu gumă, făcute în condiții diferite de antrenare. Folosește același test pentru ambele modele.  
4. Completează:

| | Modelul 1 | Modelul 2 |
|---|-----------|-----------|
| Creioane recunoscute (din 5) | | |
| Gume recunoscute (din 5) | | |
| Acuratețea totală (din 10) | | |

5. Cu ce a greșit mai des modelul 2? Cărei clase i-a dat „avantaj” numărul de exemple?

În lumea reală, același lucru se poate întâmpla cu oameni: dacă un model a văzut puține exemple dintr-un grup, se descurcă mai prost pentru acel grup. Nu facem acest test cu fețe sau cu oameni, ci doar cu obiecte.

**Gata când:**  
- [ ] Am construit și testat ambele modele cu același test fix  
- [ ] Am completat tabelul și am spus care clasă a fost dezavantajată  

### Exemplul 2b — Reparăm
Adaugă încă 10 exemple variate la clasa „gumă” din modelul 2, antrenează și rulează din nou același test. Cum s-a schimbat rezultatul pentru gume?

**Gata când:**  
- [ ] Am reparat modelul 2 și am rulat din nou același test  
- [ ] Am spus ce s-a schimbat pentru clasa dezavantajată  

**Partea 3 — Cele cinci întrebări**

### Exemplul 3 — Un constructor responsabil întreabă
Înainte de a construi sau de a folosi o aplicație cu AI, pui cinci întrebări:

1. **Date:** ce date a folosit și cu acordul cui?  
2. **Echilibru:** funcționează la fel de bine pentru toate situațiile și pentru toți cei care o folosesc?  
3. **Greșeli:** ce se întâmplă când greșește și cine plătește greșeala?  
4. **Om:** cine verifică, mai ales când rezultatul contează?  
5. **Transparență:** este clar că folosește AI?

Aplică cele cinci întrebări pe ideea 2 din Exemplul 1 (aplicația cu plante). Scrie câte un răspuns scurt.

**Gata când:**  
- [ ] Pot spune cele 5 întrebări  
- [ ] Am aplicat cele 5 întrebări pe aplicația cu plante  

**Partea 4 — Transparență și imagini false**

### Exemplul 4 — Spun că este AI
Imaginile, vocile și textele făcute cu AI pot arăta foarte real. De aceea:

- Spun clar când am folosit AI (la o temă, la un desen, la o poză).  
- Nu fac imagini sau voci false cu alți oameni, nici „în glumă”, nici ca să păcălesc pe cineva sau să-l supăr.  
- Dacă primesc o imagine care mă face să mă simt prost sau speriat, nu o trimit mai departe: spun unui adult.  

Pentru fiecare situație spune ce este corect și ce nu:
1. Ai făcut un desen cu ajutorul unui program AI și îl pui în portofoliu, fără să spui.  
2. Un coleg vrea să facă o poză falsă cu un alt coleg „ca să râdă”.  
3. Ai folosit un asistent AI la o temă și spui profesorului cum l-ai folosit.

**Gata când:**  
- [ ] Am spus pentru fiecare situație ce este corect  
- [ ] Pot spune de ce transparența este importantă  

**Partea 5 — Regulile mele**

### Exemplul 5 — „Regulile mele pentru AI”
Pe o foaie A4 scrie 7 reguli personale, în propriile cuvinte. Include cel puțin:
- o regulă despre **date** (ce nu dau);  
- o regulă despre **verificare** (ce fac cu răspunsurile);  
- o regulă despre **cinste** (când spun că am folosit AI);  
- o regulă despre **respect** (ce nu fac cu imagini sau voci ale altora);  
- o regulă despre **echilibru** (ce testez înainte să spun că ceva merge).  

Alege-ți încă două, care ți se potrivesc. Desenează sus un semn, un scut sau un semafor. Semnează la final.

**Gata când:**  
- [ ] Am 7 reguli, cu cele 5 teme obligatorii  
- [ ] Foaia are un desen și semnătura mea  

**Partea 6 — Ideea proiectului final**

### Exemplul 6 — Ce construiesc în lecția 10?
În lecția următoare construiești „Aplicația mea cu AI”: un model antrenat de tine, cu un nume, o regulă și o fișă de siguranță. Azi alegi ideea.

Completează:
1. **Ce recunoaște aplicația?** (două sau trei clase de obiecte sau sunete)  
2. **Pentru cine este?**  
3. **Cele 5 întrebări:** un răspuns scurt la fiecare.  
4. **O regulă a mea** care se aplică acestei aplicații.

Ideea trebuie să respecte semaforul laboratorului: obiecte sau sunete de obiecte, fără fețe, documente sau date personale.

**Gata când:**  
- [ ] Am o idee cu 2–3 clase  
- [ ] Am completat cele 5 întrebări  
- [ ] Un adult a citit ideea și a spus „ok”  

---

## Greșeli frecvente

| Ce crezi | De fapt | Corect |
|----------|---------|--------|
| „Dacă are acuratețe mare, e bun pentru toți” | Poate merge prost pentru situații rare | Testez separat fiecare clasă |
| „Greșeala e a modelului, nu a mea” | Eu l-am antrenat și l-am pus să decidă | Eu răspund de ce construiesc |
| „E doar o glumă, nu face rău” | O imagine falsă poate răni | Nu fac imagini false cu oameni |
| „Nu e nevoie să spun că am folosit AI” | Ceilalți au dreptul să știe | Spun clar |
| „Dacă AI a spus, nu mai verific” | Poate greși | Un om verifică |

---

## De făcut azi — „Regulile mele pentru AI”

### Minim vs Complet

| | Ce trebuie |
|--------|------------|
| **Minim** | Tabelul experimentului completat · cele 5 întrebări aplicate pe un exemplu |
| **Complet** | Minim + repararea modelului 2 · „Regulile mele” (7 reguli) · ideea proiectului · Exercițiile B–E |

### Pasul 1 — Minim
**Exercițiul A — „Regulile mele pentru AI” (obligatoriu).** Foaia cu 7 reguli din Exemplul 5.

**→ Minim când:** ai tabelul experimentului completat și cele 5 întrebări aplicate pe un exemplu.

### Pasul 2 — Complet

**Exercițiul B — Adevărat sau fals?**  
1. Dacă un model are acuratețe de 90%, funcționează la fel de bine pentru toate clasele.  
2. Un model antrenat cu 20 de exemple dintr-o clasă și 4 din alta poate fi nedrept față de clasa mică.  
3. Dacă nu spun că am folosit AI, nu are importanță.  
4. Când contează mult rezultatul, un om trebuie să verifice.

**Exercițiul C — Ce lipsește din date?**  
O aplicație care recunoaște „păsări de grădină” a fost antrenată doar cu poze de vrăbii. Ce se întâmplă cu o mierlă? Ce adaugi?

**Exercițiul D — Cele cinci întrebări**  
Aplică cele 5 întrebări pe o aplicație care recunoaște în poze dacă un recipient de plastic poate fi reciclat.

**Exercițiul E — Explică cu cuvintele tale**  
Răspunde în 3 propoziții: ce înseamnă să construiești ceva cu AI într-un mod responsabil?

**Gata când:**  
- [ ] Ai foaia cu „Regulile mele” (7 reguli, desen, semnătură)  
- [ ] Ai tabelul experimentului și ai reparat modelul 2  
- [ ] Ai ideea proiectului completată  
- [ ] Ai răspuns la Exercițiile B–E  
- [ ] Foaia se numește `Prenume_Nume_AI2_L9`  

---

## Bonus ★★★ — Provocare: Auditul familiei
*Doar dacă ai terminat Complet.*

Verifică, împreună cu familia, trei lucruri din casă care folosesc AI.

- [ ] Alegi 3 lucruri din casă care par să folosească AI (de exemplu recomandările de filmulețe, tastatura care ghicește cuvinte sau un filtru foto)
- [ ] Pentru fiecare, completezi într-un tabel cele 5 întrebări (date, echilibru, greșeli, om, transparență), cu răspunsuri scurte
- [ ] Marchezi fiecare lucru cu verde, galben sau roșu, după cât de multe întrebări rămân fără răspuns clar
- [ ] Propui o regulă pentru fiecare lucru marcat galben sau roșu
- [ ] Scrii 2 propoziții despre ce te-a surprins
- [ ] Salvează foaia ca `Prenume_Nume_AI2_L9_Audit`

---

## Recapitulare pe scurt

- Un set de date **dezechilibrat** face modelul **nedrept** față de clasa cu puține exemple.  
- Constructorul responsabil pune **cinci întrebări**: date, echilibru, greșeli, om, transparență.  
- **Spun** când am folosit AI și **nu fac** imagini false cu oameni.  
- Rezultatul contează mult? Un **om verifică**.  
- Am **reguli personale**.  

**Schema pe scurt (pe foaie):** date → echilibru → greșeli → om → transparență

---

## Quiz scurt
- Ce este un set de date dezechilibrat?  
- Ce a făcut modelul 2 cu clasa „gumă”?  
- Care sunt cele 5 întrebări?  
- De ce spunem când am folosit AI?  
- Când are nevoie un model de un om care să verifice?

---

## Temă
1. Termină „Regulile mele”, dacă nu ai terminat.  
2. Arată regulile unui adult și întreabă ce ar mai adăuga.  
3. Alege o aplicație din casă care folosește AI și pune-i cele 5 întrebări.  
4. Gândește-te la ideea proiectului final și pregătește obiectele.  
5. Salvează foaia ca `Prenume_Nume_AI2_L9_Tema`.

---

## Ce urmează — Lecția 10
Proiectul final: construim „Aplicația mea cu AI”, o testăm, o prezentăm și rezolvăm testul final. Primești insigna AI Maker.

---

## Răspunsuri
- **Quiz scurt:** (1) un set în care o clasă are mult mai multe exemple decât alta; (2) a recunoscut-o mai prost, pentru că a avut puține exemple; (3) date, echilibru, greșeli, om, transparență; (4) pentru că ceilalți au dreptul să știe și pentru că imaginile false pot păcăli; (5) când rezultatul contează mult, de exemplu sănătate, siguranță sau decizii despre oameni.  
- **Exemplul 1:** răspunsurile pot varia. De exemplu: (1) poate fi nedreaptă și lasă o cameră să judece oameni; trebuie un adult; (2) greșeala poate otrăvi; trebuie verificare serioasă; (3) poate dezavantaja pe cineva; decide un om; (4) ajută, dar greșeala poate duce la teme greșite; verifici. Ideile 2 și 3 sunt cele mai sensibile.  
- **Exemplul 2:** rezultatele diferă. De obicei modelul 2 recunoaște bine creionul și prost guma. După reparare, recunoașterea gumei se îmbunătățește, iar acuratețea totală crește. Clasa cu 20 de exemple a primit „avantaj”.  
- **Exemplul 3 (plante):** date: pozele trebuie să fie adevărate și bine etichetate; echilibru: poate merge prost pentru plante rare sau în lumină proastă; greșeli: cineva ar putea mânca o plantă otrăvitoare; om: un specialist verifică; transparență: aplicația spune clar că este un program și că poate greși.  
- **Exemplul 4:** (1) nu este corect, trebuie spus; (2) nu este corect, nu facem imagini false cu oameni; (3) corect.  
- **Exercițiul B:** (1) fals; (2) adevărat; (3) fals; (4) adevărat.  
- **Exercițiul C:** modelul nu recunoaște mierla sau o încurcă cu vrabia. Adaugi poze cu alte păsări din grădină, în lumini diferite, și o clasă „altă pasăre”.  
- **Exercițiul D:** date: poze cu recipiente reale, etichetate corect; echilibru: merge și pentru recipiente murdare sau deformate?; greșeli: un recipient greșit în sortare strică un lot de reciclat; om: o persoană verifică cazurile nesigure; transparență: aplicația spune că este un program, nu un specialist.  
- **Exercițiul E:** de exemplu: mă gândesc la cine poate fi afectat, verific răspunsurile și datele, spun când folosesc AI și nu fac nimic care poate răni pe cineva.  
- **Notă pentru adultul care ajută:** experimentul se face doar cu obiecte, fără fețe sau oameni. Ideea proiectului trebuie aprobată: fără date personale, fără fețe, fără documente. Nu salvați proiecte în Google Drive.  

**Bonus ★★★ — Auditul familiei:**

*Exemplu de tabel (un rând):*

| Lucru | Date | Echilibru | Greșeli | Om | Transparență | Culoare |
|-------|------|-----------|---------|----|--------------|---------|
| recomandări de filmulețe | ce am vizionat | nu știu dacă arată de toate felurile | pot arăta lucruri nepotrivite | un adult se uită | nu e clar cum alege | galben |
| tastatura care ghicește cuvinte | ce scriu | merge mai prost cu cuvinte rare | cuvânt greșit trimis | eu, înainte de a trimite | nu se vede clar | verde |
| filtru foto | poza mea | nu știu | poza poate arăta ciudat | eu | filtrul se vede | verde |

*Regulă propusă (galben):* „La recomandări, un adult verifică ce văd și eu pot alege să opresc.”

*Exemplu de 2 propoziții:* „M-a surprins că multe lucruri din casă folosesc AI fără să scrie. Vreau să întreb mereu ce date folosește.”

- Culoarea depinde de câte întrebări rămân fără răspuns clar: 0–1 verde, 2–3 galben, 4–5 roșu.  
- Răspunsurile vor fi altele, iar „nu știu” este un răspuns valid.  
- Nu pomeniți date personale reale în tabel (adrese, nume).  
