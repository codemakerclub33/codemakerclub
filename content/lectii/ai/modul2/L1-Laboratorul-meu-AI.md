# LECȚIA 1 — Laboratorul meu AI
### Reguli de siguranță și primul model
**Modulul 2 · Antrenăm modele AI · 10+ · 2 ore**  
**Code Maker Club · AI Maker**

> Azi deschidem „laboratorul” de AI: stabilim regulile de lucru, aflăm cum se antrenează un model pe calculator și facem împreună primul model, cu obiecte de pe masă. Lucrăm la calculator, cu un adult prezent dacă se poate.  
> Proiect: **„Fișa laboratorului meu AI”** · folder: `Prenume_Nume_AI2_L1` (ex. `Ana_Pop_AI2_L1`)

---

## Ce facem azi
La finalul orei știi ce faci și ce nu faci când lucrezi cu un model AI pe calculator, cunoști cei trei pași ai unui model (adună exemple, antrenează, testează) și ai făcut primul tău model cu două obiecte. În Modulul 1 ai făcut totul pe hârtie. Acum lucrăm cu o unealtă reală, gratuită, care rulează în browser. Înainte de orice experiment, stabilim regulile. Așa lucrează și specialiștii: întâi regulile, apoi experimentele.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare: jocul „AI sau nu?” (**Exemplul 1**) |
| 15–35 | Semaforul laboratorului: ce fotografiem și ce nu (**Exemplul 2**) |
| 35–55 | Turul uneltei: cele trei tipuri de modele (**Exemplul 3**) |
| 55–85 | Primul model, împreună (**Exemplul 4**) |
| 85–105 | Citim răspunsul modelului și îl testăm (**Exemplul 5**) |
| 105–115 | Fișa laboratorului meu AI (**Exemplul 6**) |
| 115–120 | Recap și temă |

Exercițiile B–E și Provocarea sunt pentru cine termină mai repede, sau pentru acasă.

**Ce ai nevoie:** un calculator cu cameră web și un browser actual (de exemplu Chrome), 3–4 obiecte mici și diferite de pe masă (creion, gumă, riglă, o jucărie mică), foi A4, creioane colorate.  
**Fără calculator sau fără cameră:** adultul poate încărca în unealtă poze cu obiecte, făcute în prealabil. Dacă nu este posibil, refaceți „Mașina de sortat” de hârtie din Modulul 1.

---

## Cuvinte noi azi

| Cuvânt | Ce înseamnă | Exemplu |
|--------|-------------|---------|
| **Clasă** (categorie) | O grupă pe care modelul învață să o recunoască | „creion” și „gumă” |
| **Exemplu** | Una dintre pozele sau sunetele din care învață modelul | 10 poze cu creionul |
| **Antrenare** | Pasul în care modelul învață din exemple | butonul „Train Model” |
| **Încredere** | Cât de sigur este modelul de răspunsul lui, în procente | „creion 92%” |

---

## Pas cu pas

**Partea 1 — Recapitulare**

### Exemplul 1 — Jocul „AI sau nu?”
Un adult sau un coleg citește pe rând 8 afirmații din Modulul 1. După fiecare, ridici un cartonaș: **Adevărat** sau **Fals**.

1. Un program cu AI învață din exemple.  
2. Un program cu AI nu poate greși niciodată.  
3. Eticheta este răspunsul corect scris pe un exemplu.  
4. Un set de date bun are exemple foarte asemănătoare între ele.  
5. „70% șanse” înseamnă „sigur”.  
6. Un model poate prelua prejudecăți din datele pe care le-a văzut.  
7. Un asistent AI nu poate inventa lucruri.  
8. Nu scriem date personale într-un asistent AI.

**Gata când:**  
- [ ] Am ridicat cartonașul pentru toate cele 8 afirmații  
- [ ] Am corectat împreună afirmațiile la care am greșit  

**Partea 2 — Regulile laboratorului**

### Exemplul 2 — Semaforul laboratorului
Un model AI se antrenează din poze și sunete. De aceea, înainte să pornim camera, hotărâm **ce are voie să vadă**. Lucrăm cu semaforul:

- **Verde:** obiecte de pe masă, jucării, desene făcute de tine, sunete de obiecte (un clopoțel, un zornăit).  
- **Galben:** doar cu acordul unui adult și fără să salvezi nimic: propria ta mână sau propria ta față, pe loc, pentru un test scurt.  
- **Roșu:** nu se face niciodată: fețele colegilor sau ale altor oameni, documente sau foi cu adresă, nume sau telefon, ecrane cu date personale, orice fotografiere fără acord.

În plus, rămân valabile regulile din Modulul 1: nu dăm date personale și nu instalăm nimic pe care ni-l cere o pagină sau o fereastră.

Pune fiecare situație în culoarea potrivită:
- Fotografiezi un creion și o gumă.  
- Fotografiezi colegul de bancă, fără să-l întrebi.  
- Fotografiezi o foaie cu adresa ta.  
- Înregistrezi sunetul unui clopoțel de jucărie.

**Gata când:**  
- [ ] Am pus cele 4 situații în culoarea potrivită  
- [ ] Pot spune de ce nu fotografiem fețele altor oameni  

**Partea 3 — Turul uneltei**

### Exemplul 3 — Cele trei tipuri de modele
Folosim **Teachable Machine**, o unealtă gratuită de la Google, care rulează în browser. Nu ai nevoie de cont pentru a antrena un model. Antrenarea se face în browserul tău, iar pozele și sunetele din cameră rămân pe calculator, dacă nu salvezi proiectul în Google Drive. Noi nu salvăm în Drive.

**Atenție:** unealta nu salvează nimic singură. Dacă închizi fila, modelul dispare. De aceea, în fiecare oră notăm rezultatele **pe foaie**, iar fila rămâne deschisă până terminăm.

Deschideți unealta (adultul scrie adresa) și apăsați „Get Started”. Veți vedea trei tipuri de proiecte:
- **Imagini** (poze cu camera sau din fișiere);  
- **Sunete** (înregistrări scurte);  
- **Poze cu corpul** (poziții).

Azi lucrăm cu **imagini**. Alegeți „Image Project” și apoi „Standard image model”. Denumirile din site pot diferi puțin: adultul verifică înainte de oră și vă ajută dacă apar alte nume.

Unealta are trei pași, de la stânga la dreapta:
1. **Adună exemple** (în fiecare clasă adaugi poze).  
2. **Antrenează** (butonul „Train Model”).  
3. **Testează** (partea „Preview”).

**Gata când:**  
- [ ] Am deschis unealta și am ales proiectul cu imagini  
- [ ] Pot spune cei trei pași ai unui model  

**Partea 4 — Primul model**

### Exemplul 4 — Creion sau gumă?
Lucrați în perechi. Alegeți **două obiecte** diferite (de exemplu un creion și o gumă).

1. Redenumește „Class 1” în numele primului obiect și „Class 2” în numele celui de-al doilea. Apasă pe creionul de lângă nume.  
2. La prima clasă, apasă „Webcam” și permite folosirea camerei. Ține apăsat butonul de înregistrare („Hold to Record”) cât ții obiectul în fața camerei și îl miști încet. Ajung **10 exemple**.  
3. Fă la fel pentru a doua clasă: 10 exemple.  
4. Apasă „Train Model” și **nu închide fila și nu schimba fila** cât timp antrenează.  
5. După antrenare, ține fiecare obiect în fața camerei și vezi ce arată „Preview”.

**Gata când:**  
- [ ] Am două clase cu câte 10 exemple  
- [ ] Am antrenat modelul și am văzut răspunsul pe ecran  

**Partea 5 — Citim răspunsul**

### Exemplul 5 — Cât de sigur este modelul?
În „Preview” apar procente pentru fiecare clasă. Acestea sunt **încrederea** modelului. Dacă apare „creion 92%, gumă 8%”, modelul crede că este creion și este destul de sigur.

Testăm cu trei situații și notăm ce spune modelul:
1. Același obiect, ținut altfel (pe altă parte, mai departe de cameră).  
2. Un al treilea obiect, pe care modelul nu l-a văzut niciodată.  
3. Camera fără niciun obiect, doar fundalul.

Compară: ce procent a dat pentru fiecare? Modelul are **mereu** un răspuns, chiar și când nu a văzut niciodată lucrul respectiv. Un model nu știe să spună „nu știu” dacă nu l-am învățat asta. Vom învăța asta în lecția 5.

**Gata când:**  
- [ ] Am notat pe foaie răspunsul modelului la cele 3 situații  
- [ ] Pot spune ce face modelul când vede un obiect nou  

**Partea 6 — Fișa laboratorului**

### Exemplul 6 — „Fișa laboratorului meu AI”
Pe o foaie A4:

1. Scrie titlul: **„Laboratorul meu AI”**.  
2. Scrie **6 reguli ale laboratorului** (de exemplu: nu fotografiem fețele altor oameni, nu salvăm în Drive, nu închidem fila în timpul antrenării, nu instalăm nimic, notăm rezultatele pe foaie, spunem unui adult dacă apare ceva neobișnuit).  
3. Desenează semaforul cu câte un exemplu pentru fiecare culoare.  
4. Adaugă tabelul **„Primul test”** cu cele 3 situații din Exemplul 5 și răspunsul modelului.  
5. Semnează în colț.

**Gata când:**  
- [ ] Fișa are titlul, 6 reguli și semaforul  
- [ ] Tabelul „Primul test” are cele 3 situații completate  

---

## Greșeli frecvente

| Ce crezi | De fapt | Corect |
|----------|---------|--------|
| „Modelul rămâne salvat singur” | Unealta nu salvează automat | Notăm rezultatele pe foaie și nu închidem fila |
| „Pot fotografia pe oricine” | Fețele altor oameni nu se fotografiază fără acord | Lucrăm cu obiecte |
| „Dacă modelul dă un procent mare, are dreptate” | Poate fi sigur și pe un răspuns greșit | Testăm și cu obiecte noi |
| „Trebuie să instalez ceva ca să meargă camera” | Unealta rulează în browser | Nu instalăm nimic, întrebăm un adult |
| „Un model știe să spună «nu știu»” | Alege mereu o clasă | Învățăm asta mai târziu |

---

## De făcut azi — „Fișa laboratorului meu AI”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Fișa cu cele 6 reguli și semaforul · primul model antrenat cu 2 clase · tabelul „Primul test” completat |
| **Complet** | Minim + jocul „AI sau nu?” · semaforul pentru toate cele 4 situații · tururile celor 3 tipuri de modele · Exercițiile B–E |

### Pasul 1 — Minim
**Exercițiul A — „Fișa laboratorului meu AI” (obligatoriu).** Completează fișa din Exemplul 6, cu cele 6 reguli, semaforul și tabelul „Primul test”.

**→ Minim când:** fișa are titlul, regulile, semaforul și tabelul completat, iar modelul a fost antrenat.

### Pasul 2 — Complet

**Exercițiul B — Verde, galben sau roșu?**  
Pune în culoarea potrivită:
1. Fotografiezi o jucărie de pe raft.  
2. Fotografiezi un coleg care nu știe.  
3. Înregistrezi sunetul unei sonerii de jucărie.  
4. O fereastră îți cere să descarci un program „ca să meargă camera”.  
5. Pe loc, fără salvare, testezi modelul cu propria ta mână, cu acordul adultului.

**Exercițiul C — Adevărat sau fals?**  
1. Unealta cere cont pentru a antrena un model.  
2. Dacă închizi fila fără să salvezi, modelul dispare.  
3. Pozele din cameră pleacă automat pe un server.  
4. Modelul are mereu un răspuns, chiar și pentru un obiect nou.

**Exercițiul D — Citește procentele**  
Modelul spune: (a) „creion 90%, gumă 10%”; (b) „creion 52%, gumă 48%”. Ce înseamnă fiecare răspuns? În care dintre ele este modelul mai sigur?

**Exercițiul E — Explică cu cuvintele tale**  
Pe foaie, răspunde fără să te uiți în lecție:
1. Care sunt cei trei pași ai unui model?  
2. De ce lucrăm cu obiecte, nu cu fețe?  
3. De ce notăm rezultatele pe foaie?

**Gata când:**  
- [ ] Fișa laboratorului este completă  
- [ ] Ai antrenat și testat un model cu 2 clase  
- [ ] Ai răspuns la Exercițiile B–E  
- [ ] Foaia se numește `Prenume_Nume_AI2_L1`  

---

## Bonus ★★★ — Provocare: Semaforul pentru familie
*Doar dacă ai terminat Complet.*

Fă un joc cu familia, ca să vezi dacă regulile laboratorului se înțeleg ușor.

- [ ] Scrii 8 situații, fiecare pe un cartonaș, cu răspunsul (verde, galben sau roșu) pe spate
- [ ] Cel puțin 2 situații sunt „capcană”: par nevinovate, dar au o culoare mai gravă
- [ ] O persoană din familie sortează cartonașele în trei grupe, fără să vadă răspunsurile
- [ ] Notezi câte din 8 a pus în culoarea potrivită
- [ ] La fiecare greșeală scrii o propoziție care explică de ce
- [ ] Salvează foaia ca `Prenume_Nume_AI2_L1_Semafor`

---

## Recapitulare pe scurt

- Înainte de experiment, stabilim **regulile laboratorului**.  
- Semaforul: **verde** obiecte, **galben** doar cu acord și fără salvare, **roșu** fețele altora și datele personale.  
- Un model are trei pași: **adună exemple, antrenează, testează**.  
- **Încrederea** arată cât de sigur este modelul, dar un model sigur poate greși.  
- Unealta nu salvează singură: notăm rezultatele pe foaie.  

**Schema pe scurt (pe foaie):** reguli → exemple în clase → antrenare → test → încredere → notez pe foaie

---

## Quiz scurt
- Care sunt cei trei pași ai unui model?  
- Ce înseamnă „clasă”?  
- Ce arată procentul din „Preview”?  
- Dă un exemplu „roșu” din semaforul laboratorului.  
- Ce se întâmplă dacă închizi fila fără să notezi nimic?

---

## Temă
1. Termină fișa laboratorului, dacă nu ai terminat.  
2. Arată semaforul cuiva din familie și întreabă ce ar mai adăuga.  
3. Alege 3 perechi de obiecte din casă pe care ai putea antrena un model.  
4. Explică unui adult cei trei pași ai unui model.  
5. Salvează foaia ca `Prenume_Nume_AI2_L1_Tema`.

---

## Ce urmează — Lecția 2
Facem un model mai atent: plănuim exemplele pe hârtie, le adunăm, antrenăm modelul și îl testăm cu un raport.

---

## Răspunsuri
- **Quiz scurt:** (1) adună exemple, antrenează, testează; (2) o grupă pe care modelul învață să o recunoască, de exemplu „creion”; (3) cât de sigur este modelul de răspunsul lui; (4) de exemplu fața unui coleg, o foaie cu adresa sau orice fotografiere fără acord; (5) modelul dispare, pentru că unealta nu salvează singură.  
- **Exemplul 1:** (1) adevărat; (2) fals; (3) adevărat; (4) fals; (5) fals; (6) adevărat; (7) fals; (8) adevărat.  
- **Exemplul 2:** creion și gumă, verde; colegul fără să-l întrebi, roșu; foaia cu adresa, roșu; clopoțelul de jucărie, verde.  
- **Exemplul 5:** răspunsurile diferă de la un model la altul. Important este ca elevul să observe că modelul dă mereu un procent, chiar și pentru un obiect nou sau pentru un fundal gol.  
- **Exercițiul B:** (1) verde; (2) roșu; (3) verde; (4) roșu: nu descărcăm nimic, întrebăm un adult; (5) galben.  
- **Exercițiul C:** (1) fals; (2) adevărat; (3) fals; (4) adevărat.  
- **Exercițiul D:** (a) modelul crede că este creion și este destul de sigur; (b) este aproape indecis, aproape 50–50; în (a) este mai sigur.  
- **Exercițiul E:** (1) adună exemple, antrenează, testează; (2) pentru că nu fotografiem oameni fără acord, iar fețele sunt date personale; (3) pentru că unealta nu salvează singură și modelul dispare când închidem fila.  
- **Notă pentru adultul care ajută:** înainte de oră, deschideți unealta pe calculatoarele din clasă și verificați că funcționează camera și că browserul cere permisiunea. Numele butoanelor pot diferi puțin față de lecție. Nu salvați proiecte în Google Drive și nu cereți elevilor conturi. Dacă un elev vrea să folosească propria față, faceți-o doar cu acordul lui, pe loc, fără salvare.  

**Bonus ★★★ — Semaforul pentru familie:**

*Schema logicii:*
1. Scrii 8 situații, fiecare pe un cartonaș.  
2. Pe spate scrii culoarea: verde, galben sau roșu.  
3. Cel puțin 2 sunt capcană: par nevinovate, dar au culoarea mai gravă decât crezi.  
4. Familia sortează cartonașele în trei grupe.  
5. Verifici cu spatele și notezi câte din 8 sunt corecte.  
6. La greșeli scrii de ce.

*Exemplu de set:*

| Nr. | Situația | Culoarea | De ce (pe spate) |
|-----|----------|----------|------------------|
| 1 | Fotografiezi un creion și o gumă de pe masa ta. | verde | sunt obiecte, nu oameni |
| 2 | Fotografiezi colegul de bancă, fără să-l întrebi. | roșu | fața altcuiva, fără acord |
| 3 | Testezi modelul cu propria ta mână, pe loc, fără salvare. | galben | doar cu acord și fără salvare |
| 4 | Fotografiezi o foaie cu adresa ta. | roșu | adresa este dată personală |
| 5 | Înregistrezi sunetul unui clopoțel de jucărie. | verde | este un sunet de obiect |
| 6 | Un coleg îți cere să salvezi modelul cu fețe și să i-l trimiți. | roșu | fețele nu se salvează și nu se trimit |
| 7 | O pagină îți cere să-ți faci cont ca să continui (capcană). | galben | unealta nu cere cont pentru antrenare; întrebi un adult |
| 8 | O fereastră îți cere să descarci un program „ca să meargă camera” (capcană). | roșu | nu instalăm nimic și spunem unui adult |

*Exemplu de notare:* „Tata a pus corect 6 din 8. A greșit la cartonașele 3 și 7: le-a pus verde. Am explicat că 3 cere acord și fără salvare, iar 7 este o cerere de cont pe care o verifică un adult.”

- Capcanele sunt 7 și 8: par o problemă tehnică, dar sunt cereri pe care nu le acceptăm.  
- Scorul nu contează: contează să poți explica de ce.  
- Poți inventa alte situații din viața ta, dar fără date reale.  
