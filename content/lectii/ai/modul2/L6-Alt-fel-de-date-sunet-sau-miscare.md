# LECȚIA 6 — Alt fel de date: sunet sau mișcare
### Antrenăm un model care ascultă și, dacă vrem, unul care vede poziții
**Modulul 2 · Antrenăm modele AI · 10+ · 2 ore**  
**Code Maker Club · AI Maker**

> Până acum modelele noastre au văzut imagini. Azi le învățăm să **asculte** sunete și, dacă vrei, să recunoască **poziții**. Comparăm trei feluri de date: imagini, sunete și poziții. Lucrăm la calculator, cu un adult prezent dacă se poate.  
> Proiect: **„Trei feluri de date”** · folder: `Prenume_Nume_AI2_L6` (ex. `Ana_Pop_AI2_L6`)

---

## Ce facem azi
La finalul orei știi că modelele pot învăța nu doar din imagini, ci și din sunete și din poziții, ai făcut un model care recunoaște sunete și poți compara trei feluri de date. Afli și ce înseamnă **zgomotul de fond** și de ce un model de sunet nu poate funcționa fără el. Regulile laboratorului rămân valabile: acum ne ocupăm și de microfon.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare: „nu știu” și pragul (**Exemplul 1**) |
| 10–25 | Semaforul pentru microfon și cum „vede” un model sunetul (**Exemplul 2**) |
| 25–55 | Un model care ascultă (**Exemplul 3**) |
| 55–75 | Testăm și citim greșelile (**Exemplul 4**) |
| 75–95 | Poziții: un model care vede mișcarea (**Exemplul 5**) |
| 95–110 | Fișa „Trei feluri de date” (**Exemplul 6**) |
| 110–120 | Recap și temă |

Exercițiile B–E și Provocarea sunt pentru cine termină mai repede, sau pentru acasă.

**Ce ai nevoie:** calculator cu cameră web și microfon, browser actual, căști (opțional), obiecte care fac zgomot (o foaie de hârtie, o cheie, un clopoțel de jucărie, o sticlă mică cu orez), foi A4, creioane colorate.  
**Important:** dacă mulți lucrează în aceeași sală, sunetele se amestecă. Lucrați în perechi, în colțuri diferite sau pe rând, și înregistrați zgomotul de fond **în locul în care lucrați**.  
**Fără microfon sau fără cameră:** adultul poate încărca înregistrări scurte, făcute în prealabil. Sau faceți partea de sunet „pe hârtie”, cu un coleg care produce sunete, iar voi ghiciți clasa cu ochii închiși și notați într-un tabel.

---

## Cuvinte noi azi

| Cuvânt | Ce înseamnă | Exemplu |
|--------|-------------|---------|
| **Zgomot de fond** | Sunetul din încăpere când nu se întâmplă nimic special | ventilatorul, tăcerea din clasă |
| **Eșantion de sunet** | O bucată de o secundă dintr-o înregistrare | 8 eșantioane cu bătaie în masă |
| **Spectrogramă** | O „poză a sunetului”: arată cât de tare este fiecare ton, în timp | desenul colorat din unealtă |
| **Poziție** | Cum stă corpul: modelul urmărește punctele principale | mâini sus, mâini jos |

---

## Pas cu pas

**Partea 1 — Recapitulare**

### Exemplul 1 — Ne amintim „nu știu”
Spune în perechi:
1. De ce un model cu două clase nu poate spune „nu știu”?  
2. Ce punem în clasa „altceva”?  
3. Ce este un prag și ce se întâmplă dacă este prea mare?

**Gata când:**  
- [ ] Am răspuns la cele 3 întrebări  
- [ ] Am explicat ce face un prag  

**Partea 2 — Cum „aude” un model**

### Exemplul 2 — Semaforul pentru microfon și spectrograma
Microfonul aude **tot**: voci, conversații, zgomote. De aceea aplicăm semaforul:

- **Verde:** sunete de obiecte: foaie de hârtie, cheie, clopoțel, sticlă cu orez, bătăi în masă, palme.  
- **Galben:** propria ta voce, doar cu acordul unui adult, pentru un cuvânt scurt, și fără salvare.  
- **Roșu:** vocea altor oameni, conversații, orice înregistrare care conține nume, adrese sau alte date personale.

Cum „aude” un model un sunet? Unealta nu lucrează cu sunetul brut, ci cu o **spectrogramă**: o poză a sunetului, în care culorile arată cât de tare este fiecare ton în fiecare moment. Ai văzut în Modulul 1 că un calculator vede o imagine ca numere. Un sunet devine, în același fel, o imagine făcută din numere. De aceea sunete care arată la fel în spectrogramă pot fi încurcate de model.

Pune în culoarea potrivită:
- Un clopoțel de jucărie.  
- O conversație între doi colegi.  
- Un cuvânt scurt rostit de tine, fără salvare, cu acord.

**Gata când:**  
- [ ] Am pus cele 3 situații în culoarea potrivită  
- [ ] Pot spune ce este o spectrogramă  

**Partea 3 — Un model care ascultă**

### Exemplul 3 — Trei sunete
1. Deschide Teachable Machine și alege **proiectul cu sunete** („Audio Project”). Permite folosirea microfonului.  
2. Prima clasă, „Zgomot de fond” („Background Noise”), există deja și este obligatorie. Înregistrează **20 de secunde** de liniște, în locul în care lucrezi, apoi apasă „Extract Sample”. Vei obține 20 de eșantioane de o secundă.  
3. Dă nume celorlalte clase după sunetele tale (de exemplu „foaie”, „cheie”, „clopoțel”).  
4. Pentru fiecare clasă: înregistrează cel puțin **8 secunde**, repetând sunetul, apoi „Extract Sample”. Fiecare clasă are nevoie de cel puțin **8 eșantioane**.  
5. Apasă „Train Model” și nu închide fila.

Sunetele trebuie să fie **variate**: aproape și departe, tare și încet. Evită două sunete foarte asemănătoare: modelul le va încurca.

**Gata când:**  
- [ ] Zgomotul de fond are 20 de eșantioane  
- [ ] Fiecare clasă are cel puțin 8 eșantioane și modelul este antrenat  

**Partea 4 — Testăm**

### Exemplul 4 — Zece sunete
Testăm cinstit, cu sunete noi: alt clopoțel, altă foaie, alt unghi. Fă **10 situații** și completează:

| Nr. | Sunetul real | Ce a spus modelul | Încredere | Corect? |
|-----|--------------|-------------------|-----------|---------|
| 1 | foaie | | | |
| 2 | cheie | | | |
| ... | | | | |

Calculează acuratețea. Apoi construiește **tabelul greșelilor**: ce sunet a fost încurcat cu ce? Se aseamănă sunetele pe care le-a încurcat?

Încearcă și o situație „zgomot de fond”: tăcere, apoi un sunet foarte încet. Ce spune modelul?

**Gata când:**  
- [ ] Am completat tabelul cu 10 situații și am calculat acuratețea  
- [ ] Am găsit ce sunete încurcă modelul  

**Partea 5 — Poziții**

### Exemplul 5 — Un model care vede poziții
Alegi una dintre variante.

**Varianta A — poziții ale corpului (galben).** Doar cu acordul tău și al adultului, fără salvare, pe loc, de la brâu în sus:
1. Alege „Pose Project” în Teachable Machine.  
2. Dă nume claselor: „mâini sus”, „mâini jos” și „nimeni în cadru”.  
3. Pentru fiecare clasă înregistrează cu „Hold to Record”, în poziții ușor diferite și la distanțe diferite (aproximativ 30–50 de exemple).  
4. Antrenează și testează cu 6 situații noi. Notează rezultatul.

**Varianta B — poziția unui obiect (verde).** Cu proiectul de imagini, antrenează un model care deosebește un obiect așezat „în picioare” de același obiect „culcat”. Folosește același tipar: 10 exemple variate pe clasă, 6 situații de test.

În ambele variante, aplică semaforul și nu salva nimic în Drive.

**Gata când:**  
- [ ] Am antrenat un model de poziții (varianta A sau B)  
- [ ] Am testat cu 6 situații și am notat cele corecte  

**Partea 6 — Comparația**

### Exemplul 6 — „Trei feluri de date”
Pe o foaie A4 completează tabelul:

| | Imagini | Sunete | Poziții |
|---|---------|--------|---------|
| Ce date aduni | | | |
| Ce clasă specială este nevoie | „altceva” (L5) | „Zgomot de fond” | „nimeni în cadru” |
| Ce a mers bine | | | |
| Ce a încurcat modelul | | | |
| Ce risc pentru viața privată | | | |

Scrie sub tabel trei propoziții: ce fel de date ți s-a părut cel mai ușor de folosit și de ce, și ce regulă din semafor a contat cel mai mult azi.

**Gata când:**  
- [ ] Tabelul „Trei feluri de date” este completat  
- [ ] Am scris cele 3 propoziții  

---

## Greșeli frecvente

| Ce crezi | De fapt | Corect |
|----------|---------|--------|
| „Zgomotul de fond nu contează” | Este obligatoriu la sunete | Îl înregistrez în locul în care lucrez |
| „Pot înregistra pe oricine care vorbește” | Vocea este dată personală | Folosesc sunete de obiecte |
| „Două sunete asemănătoare merg bine împreună” | Modelul le încurcă | Aleg sunete diferite |
| „Un model de poziții are nevoie de oameni care vorbesc” | Urmărește doar poziția corpului | Poziția nu înseamnă voce |
| „Modelul de sunet merge la fel în orice încăpere” | Zgomotul de fond se schimbă | Refac fundalul când mă mut |

---

## De făcut azi — „Trei feluri de date”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Modelul de sunet antrenat (zgomot de fond și cel puțin 2 clase) · tabelul de test cu cel puțin 8 situații |
| **Complet** | Minim + 10 situații și acuratețea · tabelul greșelilor · modelul de poziții (varianta A sau B) · tabelul „Trei feluri de date” cu cele 3 propoziții · Exercițiile B–E |

### Pasul 1 — Minim
**Exercițiul A — „Trei feluri de date” (obligatoriu).** Antrenează modelul de sunet, fă testul și completează cel puțin coloana „Sunete” din tabelul din Exemplul 6.

**→ Minim când:** modelul de sunet este antrenat și tabelul de test are cel puțin 8 situații.

### Pasul 2 — Complet

**Exercițiul B — Verde, galben sau roșu?**  
Pentru microfon, pune în culoarea potrivită:
1. Sunetul unei cutii cu margele.  
2. O înregistrare a colegului de bancă.  
3. Un cuvânt scurt rostit de tine, fără salvare, cu acord.  
4. Zgomotul din clasă, fără voci.  
5. O conversație cu un adult, care dă un nume sau o adresă.

**Exercițiul C — Schimbăm încăperea**  
Un coleg a antrenat acasă, într-o cameră liniștită, un model de sunet cu două clase („palme” și „bătaie în masă”). La școală, în clasă, modelul se încurcă tot timpul. De ce? Ce îi spui să facă?

**Exercițiul D — Ce tip de model?**  
Alege între **imagini**, **sunete** și **poziții** pentru fiecare idee:
1. Un aparat care spune dacă soneria sună.  
2. Un aparat care spune dacă o plantă are frunze.  
3. Un joc în care se mișcă un personaj după cum ții mâinile.  
4. Un aparat care recunoaște cheia de care se agață lucruri.

**Exercițiul E — Explică cu cuvintele tale**  
Răspunde în 3 propoziții: de ce are un model de sunet nevoie de zgomot de fond?

**Gata când:**  
- [ ] Ai modelul de sunet antrenat și testat  
- [ ] Ai tabelul „Trei feluri de date” și cele 3 propoziții  
- [ ] Ai răspuns la Exercițiile B–E  
- [ ] Foaia se numește `Prenume_Nume_AI2_L6`  

---

## Bonus ★★★ — Provocare: Duelul cu modelul
*Doar dacă ai terminat Complet.*

Vezi cine recunoaște mai bine sunetele: modelul sau un om din familie.

- [ ] Alegi 3 sunete pe care modelul le știe (de exemplu foaie, cheie, clopoțel)
- [ ] Scrii 10 runde: pentru fiecare, un sunet produs în spatele unei perne sau cu ochii celuilalt închiși
- [ ] Omul ascultă fără să vadă și scrie ce sunet crede că este
- [ ] La fiecare rundă notezi ce a spus modelul, ce a spus omul și care era sunetul real
- [ ] Numeri câte din 10 a ghicit modelul și câte omul
- [ ] Notezi runda în care s-au înșelat amândoi și de ce
- [ ] Salvează foaia ca `Prenume_Nume_AI2_L6_Duel`

---

## Recapitulare pe scurt

- Modelele pot învăța din **imagini**, **sunete** și **poziții**.  
- Un model de sunet are nevoie de **zgomot de fond**.  
- Sunetul devine o **spectrogramă**, o poză a sunetului.  
- Sunetele asemănătoare se încurcă; alegem sunete diferite.  
- Microfonul aude tot: lucrăm cu sunete de obiecte și respectăm semaforul.  

**Schema pe scurt (pe foaie):** fundal + sunete → eșantioane de o secundă → antrenare → test cu sunete noi → tabelul greșelilor

---

## Quiz scurt
- Ce trei feluri de date au folosit modelele noastre?  
- De ce este obligatoriu zgomotul de fond la sunete?  
- Ce este o spectrogramă?  
- De ce nu înregistrăm vocea colegilor?  
- Ce se întâmplă dacă două sunete sunt foarte asemănătoare?

---

## Temă
1. Termină tabelul „Trei feluri de date”, dacă nu ai terminat.  
2. Găsește acasă 3 sunete diferite care ar putea fi clase într-un model și scrie un prag potrivit.  
3. Explică unui adult de ce un model de sunet are nevoie de fundal.  
4. Gândește-te la un aparat din casă care ar putea folosi un model de sunet sau de poziții.  
5. Salvează foaia ca `Prenume_Nume_AI2_L6_Tema`.

---

## Ce urmează — Lecția 7
Încercăm să păcălim modelul: schimbăm lumina, fundalul și unghiul și vedem ce se strică, apoi reparăm.

---

## Răspunsuri
- **Quiz scurt:** (1) imagini, sunete și poziții; (2) pentru că modelul trebuie să învețe cum sună „nimic”, ca să nu confunde liniștea cu un sunet; (3) o poză a sunetului, care arată cât de tare este fiecare ton în timp; (4) pentru că vocea este dată personală; (5) modelul le poate încurca.  
- **Exemplul 1:** (1) pentru că nu are o clasă pentru asta; (2) fundalul gol și alte obiecte; (3) încrederea minimă; dacă este prea mare, modelul spune „nu știu” aproape mereu.  
- **Exemplul 2:** clopoțelul, verde; conversația dintre colegi, roșu; cuvântul scurt, fără salvare și cu acord, galben.  
- **Exemplul 4:** rezultatele diferă. Sunetele asemănătoare (de exemplu palme și bătaie în masă) sunt cele mai încurcate.  
- **Exercițiul B:** (1) verde; (2) roșu; (3) galben; (4) verde; (5) roșu.  
- **Exercițiul C:** zgomotul de fond din clasă este altul decât cel de acasă, iar modelul nu l-a învățat. Îi spui să înregistreze din nou zgomotul de fond în clasă și, dacă e nevoie, să mai adauge eșantioane cu sunetele lui, în locul nou.  
- **Exercițiul D:** (1) sunete; (2) imagini; (3) poziții; (4) imagini.  
- **Exercițiul E:** pentru că trebuie să știe cum sună liniștea și zgomotul normal din încăpere, ca să nu confunde un sunet cu altul.  
- **Notă pentru adultul care ajută:** înainte de oră, verificați permisiunea microfonului în browser. Dacă mulți lucrează în aceeași sală, rugați perechile să lucreze pe rând sau în colțuri diferite, altfel fundalul se amestecă. Varianta cu poziții (A) este opțională: se face doar cu acordul copilului, fără salvare, de la brâu în sus; cine nu dorește face varianta B. Denumirile din site pot diferi puțin. Nu salvați proiecte în Google Drive.  

**Bonus ★★★ — Duelul cu modelul:**

*Schema logicii:*
1. Alegi 3 sunete pe care modelul le știe.  
2. Faci 10 runde. În fiecare rundă produci un sunet în spatele unei perne, iar omul nu vede.  
3. Notezi ce spune modelul, ce spune omul și care este sunetul real.  
4. Numeri corectele pentru model și pentru om.  
5. Găsești runda în care s-au înșelat amândoi.

*Exemplu de tabel (3 sunete: foaie, cheie, clopoțel):*

| Runda | Sunetul real | Modelul | Omul |
|-------|--------------|---------|------|
| 1 | foaie | foaie | foaie |
| 2 | cheie | cheie | cheie |
| 3 | clopoțel | clopoțel | clopoțel |
| 4 | foaie | foaie | cheie |
| 5 | cheie | clopoțel | cheie |
| 6 | clopoțel | clopoțel | clopoțel |
| 7 | foaie | foaie | foaie |
| 8 | cheie | cheie | cheie |
| 9 | clopoțel | cheie | cheie |
| 10 | foaie | foaie | foaie |

*Rezultat:* modelul a ghicit 8 din 10 (a greșit rundele 5 și 9), omul a ghicit tot 8 din 10 (a greșit rundele 4 și 9). Este egalitate. Runda în care s-au înșelat amândoi: 9 (clopoțelul a fost încurcat cu cheia).

*Exemplu de 2 propoziții:* „În runda 9 clopoțelul a sunat scurt și semăna cu zornăitul cheii, așa că amândoi l-au încurcat. Modelul și omul au avut același scor, dar au greșit în runde diferite.”

- Numerele tale vor fi altele: contează să notezi cinstit ambele rezultate.  
- Dacă omul vede obiectul, jocul nu mai e corect: ascunde sursa sunetului.  
- Poți face duelul și cu o poziție în loc de sunet, dacă ai făcut varianta B.  
