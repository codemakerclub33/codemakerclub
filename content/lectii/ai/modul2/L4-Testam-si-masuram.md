# LECȚIA 4 — Testăm și măsurăm
### Tabelul greșelilor: nu doar cât, ci și ce fel de greșeli
**Modulul 2 · Antrenăm modele AI · 10+ · 2 ore**  
**Code Maker Club · AI Maker**

> Azi aflăm că „85% acuratețe” nu spune tot. Facem un tabel al greșelilor, numărăm alarmele false și ratările și hotărâm care greșeală este mai gravă, în funcție de ce face modelul. Lucrăm la calculator, cu un adult prezent dacă se poate.  
> Proiect: **„Fișa greșelilor”** · folder: `Prenume_Nume_AI2_L4` (ex. `Ana_Pop_AI2_L4`)

---

## Ce facem azi
La finalul orei știi să construiești **tabelul greșelilor** al unui model, să deosebești o **alarmă falsă** de o **ratare**, să calculezi acuratețea totală și pe fiecare clasă și să spui ce fel de greșeală costă mai mult într-o situație reală. Două modele pot avea aceeași acuratețe și totuși să greșească foarte diferit. De aceea nu ne uităm doar la un procent.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare: experimentul din lecția trecută (**Exemplul 1**) |
| 10–30 | Două modele cu aceeași acuratețe (**Exemplul 2**) |
| 30–50 | Refacem modelul și pregătim testul de 20 de situații (**Exemplul 3**) |
| 50–75 | Rulăm testul și completăm tabelul greșelilor (**Exemplul 4**) |
| 75–95 | Calculăm acuratețea totală și pe clasă (**Exemplul 5**) |
| 95–112 | Ce greșeală costă mai mult? Fișa greșelilor (**Exemplul 6**) |
| 112–120 | Recap și temă |

Exercițiile B–E și Provocarea sunt pentru cine termină mai repede, sau pentru acasă.

**Ce ai nevoie:** calculator cu cameră web și browser actual, două perechi de obiecte mici (pentru antrenare și pentru test), foi A4 (de preferat cu pătrățele), creioane colorate.  
**Fără calculator sau fără cameră:** adultul încarcă poze făcute în prealabil, iar testul de 20 de situații îl faceți cu poze alese dinainte. Sau folosiți „Mașina de sortat” de hârtie din Modulul 1, cu 20 de cartonașe de test.

---

## Cuvinte noi azi

| Cuvânt | Ce înseamnă | Exemplu |
|--------|-------------|---------|
| **Tabelul greșelilor** | Un tabel care arată, pentru fiecare clasă reală, ce a răspuns modelul | 8 creioane recunoscute, 2 luate drept gume |
| **Alarmă falsă** | Modelul spune că este clasa țintă, dar nu este | modelul spune „creion”, dar era o gumă |
| **Ratare** | Modelul nu recunoaște clasa țintă, deși ea era acolo | era un creion, modelul a spus „gumă” |
| **Recunoscute din clasă** | Câte exemple dintr-o clasă a recunoscut corect modelul | 8 din 10 creioane |

---

## Pas cu pas

**Partea 1 — Recapitulare și o problemă**

### Exemplul 1 — Ne amintim experimentul
Spune în perechi:
1. Ce a ajutat mai mult modelul în lecția trecută: mai multe poze la fel sau poze variate?  
2. Ce înseamnă „un singur lucru schimbat”?  
3. De ce folosim un test fix?

**Gata când:**  
- [ ] Am răspuns la cele 3 întrebări  
- [ ] Am explicat ce înseamnă un test fix  

### Exemplul 2 — Două modele, aceeași acuratețe
Un detector de fum are două versiuni. Fiecare a fost testat în 100 de situații și a ghicit corect 90. Acuratețea este 90% la amândouă. Dar:

- **Versiunea A** a greșit de 10 ori: nu a sunat de 10 ori, deși era fum (10 **ratări**).  
- **Versiunea B** a greșit de 10 ori: a sunat de 10 ori fără fum (10 **alarme false**).

Discutăm în perechi: ce versiune ai pune în casa ta? Ce se întâmplă cu fiecare greșeală? De ce nu ne ajută doar numărul „90%”?

**Gata când:**  
- [ ] Am ales o versiune și am spus de ce  
- [ ] Pot explica diferența dintre o alarmă falsă și o ratare  

**Partea 2 — Pregătim testul**

### Exemplul 3 — Refacem modelul și scriem testul
Dacă ai terminat lecția trecută, modelul tău nu mai există: unealta nu salvează singură. Refă-l rapid.

1. Deschide Teachable Machine, alege proiectul cu imagini și dă nume claselor (alege o „țintă”, de exemplu „creion”, și o altă clasă, de exemplu „gumă”).  
2. Adună **15 exemple variate** pe clasă (din față, din lateral, mai departe, în altă lumină) și antrenează modelul.  
3. Scrie pe foaie **testul**: 20 de situații, 10 pentru fiecare clasă, cu obiecte puse deoparte și poziții variate.

**Gata când:**  
- [ ] Modelul are 15 exemple variate pe clasă și este antrenat  
- [ ] Testul are 20 de situații scrise, 10 pe clasă  

**Partea 3 — Rulăm testul**

### Exemplul 4 — Tabelul greșelilor
Rulează cele 20 de situații și, pentru fiecare, notează ce clasă era în realitate și ce a răspuns modelul. Apoi completează tabelul:

| | Modelul a spus „creion” | Modelul a spus „gumă” |
|---|--------------------------|------------------------|
| **Era creion** (10 situații) | corect: ___ | ratare: ___ |
| **Era gumă** (10 situații) | alarmă falsă: ___ | corect: ___ |

Câmpurile din fiecare rând trebuie să aibă suma 10.

**Gata când:**  
- [ ] Am rulat toate cele 20 de situații  
- [ ] Tabelul greșelilor este completat, cu suma 10 pe fiecare rând  

**Partea 4 — Calculăm**

### Exemplul 5 — Acuratețea totală și pe clasă
Din tabelul greșelilor calculezi:

1. **Acuratețea totală** = (corecte la creion + corecte la gumă) împărțit la 20, înmulțit cu 100.  
2. **Creioane recunoscute** = corectele de pe rândul „Era creion” împărțite la 10.  
3. **Gume recunoscute** = corectele de pe rândul „Era gumă” împărțite la 10.  
4. Câte **alarme false** și câte **ratări** a avut modelul?

Exemplu: dacă ai 8 creioane recunoscute, 2 ratări, 1 alarmă falsă și 9 gume recunoscute, atunci acuratețea totală este 17 din 20, adică 85%; creioanele sunt recunoscute în 80% din cazuri, iar gumele în 90%.

Ce confundă mai des modelul tău? Care clasă are mai multe greșeli?

**Gata când:**  
- [ ] Am calculat cele trei procente și am numărat alarmele false și ratările  
- [ ] Am spus ce confundă mai des modelul meu  

**Partea 5 — Ce greșeală costă mai mult?**

### Exemplul 6 — Alarmă falsă sau ratare?
Pentru fiecare situație, spune care greșeală este mai gravă și de ce:

1. **Detector de fum:** sună fără fum sau nu sună deși e fum.  
2. **Filtru de spam:** pune un mesaj normal la spam sau lasă un spam în căsuța principală.  
3. **Poartă care se deschide când „recunoaște” mașina familiei:** se deschide pentru o mașină străină sau nu se deschide pentru mașina familiei.

Regulă de gândire: **mai gravă este greșeala care poate face rău cuiva sau care nu se mai poate repara.**

Apoi completează **„Fișa greșelilor”** pe o foaie A4:
- tabelul greșelilor cu cifrele tale;  
- cele trei procente;  
- o propoziție: „Greșeala mai gravă pentru modelul meu ar fi ... pentru că ...”.

**Gata când:**  
- [ ] Am ales greșeala mai gravă pentru cele 3 situații, cu motiv  
- [ ] Fișa greșelilor are tabelul, procentele și propoziția  

---

## Greșeli frecvente

| Ce crezi | De fapt | Corect |
|----------|---------|--------|
| „Acuratețea mare spune tot” | Nu spune ce fel de greșeli face modelul | Mă uit și la alarmele false și la ratări |
| „Toate greșelile sunt la fel” | Costul diferă | Mai gravă este cea care poate face rău |
| „Alarmă falsă și ratare sunt același lucru” | Sunt opuse | Alarmă falsă: spune „da” când e „nu”; ratare: spune „nu” când e „da” |
| „Dacă un rând are suma 9, e în regulă” | Am pierdut o situație | Verific că fiecare rând are 10 |
| „Testez cu obiectele de la antrenare” | Nu e un test cinstit | Folosesc obiecte noi |

---

## De făcut azi — „Fișa greșelilor”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Modelul refăcut · testul de 20 de situații · tabelul greșelilor completat |
| **Complet** | Minim + cele trei procente · alarmele false și ratările numărate · cele 3 situații analizate · propoziția cu greșeala mai gravă · Exercițiile B–E |

### Pasul 1 — Minim
**Exercițiul A — „Fișa greșelilor” (obligatoriu).** Completează tabelul greșelilor din Exemplul 4 și calculează acuratețea totală.

**→ Minim când:** tabelul are sumele corecte și acuratețea totală este calculată.

### Pasul 2 — Complet

**Exercițiul B — Calculează din tabel**  
Un model are: 8 creioane recunoscute, 2 ratări, 3 alarme false, 7 gume recunoscute. Completează tabelul și calculează acuratețea totală și procentul de gume recunoscute.

**Exercițiul C — Alarmă falsă sau ratare?**  
Spune ce fel de greșeală este fiecare:
1. Modelul spune „gumă” pentru un creion.  
2. Modelul spune „creion” pentru o gumă.  
3. Detectorul de fum nu sună deși e fum.  
4. Filtrul de spam pune un mesaj de la bunica la spam.

**Exercițiul D — Care e mai gravă?**  
Un model de pe un telefon spune dacă o ciupercă din pădure este sigură de mâncat. Care greșeală este mai gravă și de ce? Ce ai face ca să fii în siguranță?

**Exercițiul E — Explică cu cuvintele tale**  
Răspunde în 3 propoziții: de ce nu ne ajută doar acuratețea, ca să judecăm un model?

**Gata când:**  
- [ ] Fișa greșelilor este completă  
- [ ] Ai refăcut modelul și ai rulat testul de 20 de situații  
- [ ] Ai răspuns la Exercițiile B–E  
- [ ] Foaia se numește `Prenume_Nume_AI2_L4`  

---

## Bonus ★★★ — Provocare: Care greșeală e mai gravă?
*Doar dacă ai terminat Complet.*

Fă un joc cu familia, ca să vezi dacă oamenii aleg la fel greșeala mai gravă.

- [ ] Scrii 6 situații în care un model poate greși (fiecare cu două greșeli posibile), pe 6 cartonașe
- [ ] La 4 dintre ele, una dintre greșeli este clar mai gravă: pe spate scrii care și de ce
- [ ] La 2 dintre ele „depinde”: pe spate scrii cele două păreri posibile
- [ ] Fiecare om din familie alege, pentru fiecare cartonaș, greșeala mai gravă
- [ ] Notezi câte din cele 4 cartonașe clare a ghicit fiecare
- [ ] Scrii 2 propoziții: unde nu au fost de acord oamenii și de ce
- [ ] Salvează foaia ca `Prenume_Nume_AI2_L4_Greseli`

---

## Recapitulare pe scurt

- **Alarmă falsă:** modelul spune „da” când era „nu”.  
- **Ratare:** modelul spune „nu” când era „da”.  
- **Tabelul greșelilor** arată ambele, nu doar procentul.  
- Calculăm acuratețea totală și **recunoscute din fiecare clasă**.  
- Mai gravă este greșeala care poate face rău sau nu se mai repară.  

**Schema pe scurt (pe foaie):** test de 20 → tabelul greșelilor → alarme false și ratări → acuratețe totală și pe clasă → ce greșeală costă mai mult

---

## Quiz scurt
- Ce este o alarmă falsă?  
- Ce este o ratare?  
- Cum calculezi acuratețea totală din tabelul greșelilor?  
- De ce două modele cu aceeași acuratețe pot fi diferite?  
- Cum alegi greșeala mai gravă într-o situație?

---

## Temă
1. Termină Fișa greșelilor, dacă nu ai terminat.  
2. Explică unui adult diferența dintre alarmă falsă și ratare, cu un exemplu din casă.  
3. Găsește 3 aparate sau aplicații care pot greși în două feluri și scrie care greșeală este mai gravă.  
4. Gândește-te ce ai schimba la modelul tău ca să reduci greșeala mai gravă.  
5. Salvează foaia ca `Prenume_Nume_AI2_L4_Tema`.

---

## Ce urmează — Lecția 5
Învățăm modelul să spună „nu știu”: adăugăm o clasă pentru lucruri necunoscute și o regulă după încredere.

---

## Răspunsuri
- **Quiz scurt:** (1) modelul spune că este clasa țintă, dar nu este; (2) modelul nu recunoaște clasa țintă, deși ea era acolo; (3) corectele de la ambele clase împărțite la 20, înmulțite cu 100; (4) pentru că pot greși în feluri diferite: unul prin ratări, altul prin alarme false; (5) alegi greșeala care poate face rău cuiva sau nu se mai poate repara.  
- **Exemplul 2:** depinde de ce vrei: la un detector de fum, ratările sunt mai grave, pentru că ratezi pericolul; alarmele false sunt enervante, dar nu fac rău. Variantă acceptată: B, cu explicația că o alarmă falsă se rezolvă, o ratare poate fi periculoasă. Numărul „90%” nu spune ce fel de greșeli sunt.  
- **Exemplul 4:** cifrele diferă de la model la model; verificați că fiecare rând are suma 10.  
- **Exemplul 5:** în exemplu: acuratețea totală 85%, creioane recunoscute 80%, gume recunoscute 90%.  
- **Exemplul 6:** (1) ratarea este mai gravă: nu sună deși e fum; (2) depinde: un mesaj normal ajuns la spam se poate pierde, dar un spam în căsuța principală doar enervează, deci mai gravă este de obicei alarma falsă; (3) alarma falsă este mai gravă: se deschide pentru un străin.  
- **Exercițiul B:** tabel: creion recunoscute 8, ratări 2; alarme false 3, gume recunoscute 7. Acuratețea totală: 15 din 20, adică 75%. Gume recunoscute: 7 din 10, adică 70%.  
- **Exercițiul C:** (1) ratare (era un creion, a spus „gumă”, dacă ținta este creionul); (2) alarmă falsă; (3) ratare; (4) alarmă falsă.  
- **Exercițiul D:** mai gravă este ca modelul să spună „sigură de mâncat” pentru o ciupercă otrăvitoare. De aceea nu ne bazăm pe un model pentru ciuperci: întrebăm un specialist și nu mâncăm dacă nu suntem siguri.  
- **Exercițiul E:** acuratețea nu arată ce fel de greșeli face modelul; două modele cu același procent pot greși în feluri foarte diferite, iar unele greșeli costă mai mult.  
- **Notă pentru adultul care ajută:** „clasa țintă” este cea pe care o urmărim (aici „creion”); în alte situații se alege altfel. Dacă elevii încurcă alarma falsă cu ratarea, folosiți detectorul de fum ca exemplu. Nu cereți date personale în scenarii. Nu salvați proiecte în Google Drive.  

**Bonus ★★★ — Care greșeală e mai gravă?**

*Schema logicii:*
1. Alegi 6 situații cu două greșeli posibile.  
2. La 4 dintre ele una e clar mai gravă; scrii pe spate care și de ce.  
3. La 2 „depinde”: scrii cele două păreri.  
4. Familia alege pentru fiecare cartonaș.  
5. Verifici cu spatele și notezi câte din cele 4 clare a ghicit fiecare.  
6. Scrii unde nu au fost de acord.

*Exemplu de set:*

| Nr. | Situația | Greșeala mai gravă | De ce |
|-----|----------|-------------------|-------|
| 1 | Detector de fum | să nu sune deși e fum | poate fi periculos |
| 2 | Poartă care se deschide pentru mașina familiei | să se deschidă pentru o mașină străină | poate lăsa pe cineva nepoftit |
| 3 | Aplicație care spune când poți trece strada | să spună „poți trece” când vine o mașină | poate răni pe cineva |
| 4 | Detector de mișcare la ușa casei | să nu sune când intră cineva | poate trece neobservat un pericol; să sune la o pisică doar enervează |
| 5 | Filtru care blochează mesaje cu limbaj urât (capcană) | depinde | dacă blochează un mesaj bun, pierzi ceva; dacă lasă un mesaj urât, te poți supăra |
| 6 | Aplicație care recunoaște o plantă din grădină (capcană) | depinde | dacă o numești greșit, nu e grav; dacă o mănânci, poate fi foarte grav |

*Exemplu de notare:* „Tata a ghicit corect 3 din cele 4 cartonașe clare (1, 2, 3 și 4). A greșit la cartonașul 2. Nu am fost de acord la cartonașul 6: mama a zis că nu e grav, tata că planta poate fi periculoasă.”

- Cartonașele clare sunt 1, 2, 3 și 4; 5 și 6 sunt cele cu „depinde”.  
- Contează să poți explica de ce, nu să nimerești același răspuns.  
- Poți folosi alte situații din viața ta, fără date reale.  
