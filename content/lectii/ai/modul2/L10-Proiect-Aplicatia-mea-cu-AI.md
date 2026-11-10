# LECȚIA 10 — Proiect: „Aplicația mea cu AI”
### Construim, testăm, reparăm, prezentăm și primim insigna
**Modulul 2 · Antrenăm modele AI · 10+ · 2 ore**  
**Code Maker Club · AI Maker**

> Azi pui laolaltă tot ce ai învățat în acest modul: construiești o aplicație cu un model antrenat de tine, o testezi, o păcălești, o repari și scrii o fișă cinstită despre ea. La final rezolvi testul final al modulului. Lucrăm la calculator, cu un adult prezent dacă se poate.  
> Proiect: **„Aplicația mea cu AI”** · folder: `Prenume_Nume_AI2_L10` (ex. `Ana_Pop_AI2_L10`)

---

## Ce facem azi
La finalul orei ai un model cu două sau trei clase plus clasa „altceva”, testat cu un test fix, cu tabelul greșelilor, acuratețea și un prag pentru „nu știu”. Ai încercat să-l păcălești, l-ai reparat și ai scris o **Fișă a aplicației** cu rezultate, limite și reguli. Prezinți aplicația în două minute, rezolvi testul final și primești insigna **AI Maker**. Un model bun este unul pe care îl poți explica și pe care îl poți apăra cu cifre.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–8 | Recapitulare: lecțiile 1–9 |
| 8–20 | Planul aplicației (**Exemplul 1**) |
| 20–50 | Antrenăm modelul (**Exemplul 2**) |
| 50–68 | Testăm și măsurăm (**Exemplul 3**) |
| 68–85 | Păcălim și reparăm (**Exemplul 4**) |
| 85–98 | Fișa aplicației (**Exemplul 5**) |
| 98–106 | Prezentăm în două minute (**Exemplul 6**) |
| 106–118 | Testul final |
| 118–120 | Autoevaluare și felicitări |

Exercițiile B–D și Provocarea sunt pentru cine termină mai repede, sau pentru acasă.

**Ce ai nevoie:** calculator cu cameră web (sau microfon, dacă ideea ta folosește sunete) și browser actual, obiectele pentru clasele tale, o foaie colorată pentru fundal, foi A4, creioane colorate.  
**Fără calculator sau fără cameră:** adultul încarcă poze făcute în prealabil, sau proiectul se face pe hârtie, cu cartonașe, tabel de test și fișă.

---

## Cuvinte noi azi

| Cuvânt | Ce înseamnă | Exemplu |
|--------|-------------|---------|
| **Fișa aplicației** | O pagină cinstită despre ce face aplicația, cât de bine și unde greșește | „acuratețe 85%, greșește în lumină slabă” |
| **Limită** | Ceva ce aplicația nu poate face bine | „nu recunoaște obiecte acoperite” |
| **Regulă a aplicației** | Ce face aplicația în caz de îndoială | „sub 70% spune nu știu” |
| **Autoevaluare** | Te gândești sincer ce ai învățat | cel mai greu lucru |

---

## Pas cu pas

**Partea 1 — Planul**

### Exemplul 1 — Ce face aplicația mea?
Pornește de la ideea pe care ai ales-o în lecția 9. Scrie pe foaie:
1. **Numele aplicației** (de exemplu „Sortatorul de birou”).  
2. **Ce face:** recunoaște două sau trei clase de obiecte sau de sunete de obiecte.  
3. **Clasele:** cele 2–3 clase, plus clasa **„altceva”**.  
4. **Regula aplicației:** de exemplu „dacă încrederea este sub 70%, aplicația spune nu știu”.  
5. **Semaforul:** confirmă că lucrezi doar cu obiecte sau sunete de obiecte. Fără fețe, documente sau date personale.

Arată planul unui adult. Începi doar după ce a spus „ok”.

**Gata când:**  
- [ ] Planul are nume, clase, regulă și semafor  
- [ ] Un adult a spus „ok”  

**Partea 2 — Antrenăm**

### Exemplul 2 — Modelul aplicației
1. Deschide Teachable Machine și alege tipul de proiect potrivit (imagini sau sunete).  
2. Creează clasele din plan. Pentru fiecare adună **cel puțin 15 exemple variate** (lumină diferită, unghiuri diferite, distanțe diferite). La sunete, nu uita zgomotul de fond.  
3. Creează clasa **„altceva”**, cu fundalul gol și cu alte obiecte (cel puțin 10 exemple).  
4. Antrenează modelul. Nu închide fila: nimic nu se salvează singur.  
5. Notează pe foaie câte exemple are fiecare clasă.

**Gata când:**  
- [ ] Fiecare clasă are cel puțin 15 exemple variate, iar „altceva” are cel puțin 10  
- [ ] Modelul este antrenat și am notat numărul de exemple  

**Partea 3 — Testăm**

### Exemplul 3 — Test fix și tabelul greșelilor
Pregătește un test fix de **15 situații noi** (cel puțin câte 4 pentru fiecare clasă, plus situații cu „altceva”). Notează:

| Nr. | Situația | Clasa reală | Ce a spus modelul | Încredere | Corect? |
|-----|----------|--------------|--------------------|-----------|---------|
| 1 | | | | | |
| ... | | | | | |
| 15 | | | | | |

Calculează:
1. **Acuratețea:** răspunsurile corecte împărțite la 15, înmulțit cu 100.  
2. **Acuratețea pe clase:** pentru fiecare clasă, câte au fost recunoscute corect.  
3. **Tabelul greșelilor:** ce a fost încurcat cu ce.  
4. **Pragul:** câte răspunsuri ar fi fost „nu știu” cu pragul de 70%, și câte dintre ele ar fi fost greșeli?

**Gata când:**  
- [ ] Am făcut testul de 15 situații și am completat tabelul  
- [ ] Am calculat acuratețea totală și pe clase și am aplicat pragul de 70%  

**Partea 4 — Păcălim și reparăm**

### Exemplul 4 — Trei păcăleli
1. Alege **trei tipuri de păcăleli** din lecția 7 (lumina, fundalul, unghiul, acoperirea, distanța, obiectul asemănător).  
2. Fă câte două încercări pentru fiecare, în total șase. Notează cât de des a fost păcălit modelul (rata păcălirii).  
3. Alege tipul cel mai periculos și adaugă 5 exemple noi la fiecare clasă pentru el. Antrenează din nou.  
4. Rulează aceleași șase încercări și calculează din nou rata păcălirii.

| | Înainte | După |
|---|---------|------|
| Păcăliri din 6 | | |
| Rata păcălirii | | |

**Gata când:**  
- [ ] Am făcut cele 6 încercări și am calculat rata păcălirii  
- [ ] Am reparat modelul și am rulat din nou aceleași 6 încercări  

**Partea 5 — Fișa**

### Exemplul 5 — Fișa aplicației
Pe o foaie A4 scrie:
1. **Nume și clase.**  
2. **Date:** câte exemple, cum le-ai adunat, ce ai evitat (semaforul).  
3. **Rezultate:** acuratețea totală, pe clase, pragul și câte „nu știu”.  
4. **Păcăleli:** rata înainte și după reparare.  
5. **Limite:** două lucruri pe care aplicația nu le face bine.  
6. **Cele 5 întrebări:** date, echilibru, greșeli, om, transparență, câte un răspuns scurt.  
7. **O regulă a mea** pentru această aplicație.  
8. **Semnătura mea și „citit” de la un adult.**

**Gata când:**  
- [ ] Fișa are cele 8 părți  
- [ ] Un adult a scris „citit”  

**Partea 6 — Prezentăm**

### Exemplul 6 — Două minute
Prezintă aplicația cuiva din clasă sau din familie în 2 minute: ce face, cum ai antrenat-o, cât de bine merge, unde greșește și ce regulă ai ales. Rolul tău este să fii cinstit, nu să arăți că este perfectă. Notează o întrebare pe care ai primit-o.

**Gata când:**  
- [ ] Am prezentat în 2 minute și am spus și limitele  
- [ ] Am notat o întrebare primită  

---

## Greșeli frecvente

| Ce crezi | De fapt | Corect |
|----------|---------|--------|
| „Dacă merge pe exemplele mele, e gata” | Poate merge prost pe situații noi | Testez cu un test fix de situații noi |
| „Ascund greșelile din fișă” | Fișa e despre cinste | Scriu limitele |
| „Schimb testul ca să iasă mai bine” | Nu mai e cinstit | Păstrez același test |
| „Folosesc fețe, ca să fie mai interesant” | Nu e permis în laborator | Obiecte sau sunete de obiecte |
| „Nu salvez nimic, deci pierd tot” | Nimic nu se salvează singur | Notez rezultatele pe foaie |

---

## De făcut azi — „Aplicația mea cu AI”

### Minim vs Complet

| | Ce trebuie |
|--------|------------|
| **Minim** | Model cu 2 clase + „altceva”, antrenat · test de cel puțin 12 situații · acuratețea calculată · fișa cu părțile 1, 2 și 3 |
| **Complet** | Minim + păcăleli și reparare · pragul · Fișa cu toate cele 8 părți · prezentarea · autoevaluarea · testul final |

### Pasul 1 — Minim
**Exercițiul A — „Aplicația mea cu AI” (obligatoriu).** Modelul, testul și acuratețea.

**→ Minim când:** modelul este antrenat și ai acuratețea calculată pe un test de situații noi.

### Pasul 2 — Complet

**Exercițiul B — Pagina de autoevaluare**  
Scrie la sfârșit:
1. Cel mai interesant lucru învățat în acest modul.  
2. Cel mai greu lucru.  
3. Un lucru pe care îl vei face diferit când folosești sau construiești AI.

**Exercițiul C — Prezentarea**  
Prezintă aplicația cuiva din clasă sau din familie și notează o întrebare pe care o primești.

**Exercițiul D — Testul final**  
Răspunde la cele 10 întrebări de mai jos, fără să te uiți în lecții. Pentru insignă ai nevoie de cel puțin 8 răspunsuri corecte.

**Gata când:**  
- [ ] Modelul este antrenat, testat, păcălit și reparat  
- [ ] Fișa are cele 8 părți  
- [ ] Ai prezentat aplicația și ai completat autoevaluarea  
- [ ] Ai rezolvat testul final cu cel puțin 8 din 10  
- [ ] Foaia sau folderul se numește `Prenume_Nume_AI2_L10`  

**Insigna:** Completezi **Complet + testul final** și primești insigna **AI Maker**.

---

## Bonus ★★★ — Provocare: Testul pe teren
*Doar dacă ai terminat Complet.*

Lasă familia să-ți testeze aplicația cu exemplele ei, nu cu ale tale.

- [ ] Un membru al familiei alege 10 situații pe care tu nu le-ai văzut (obiecte din clasele tale și câteva care nu aparțin niciunei clase)
- [ ] Rulezi aplicația pe cele 10 situații și notezi rezultatul într-un tabel
- [ ] Calculezi acuratețea pe testul familiei
- [ ] O compari cu acuratețea de pe testul tău fix
- [ ] Scrii 2 motive posibile pentru diferență
- [ ] Alegi o situație greșită și spui ce exemple ai adăuga ca s-o repari
- [ ] Salvează foaia ca `Prenume_Nume_AI2_L10_Teren`

---

## Recapitulare pe scurt

- Aplicația are **clase**, **altceva** și o **regulă** pentru îndoială.  
- Testăm cu un **test fix** de situații noi și calculăm **acuratețea**.  
- Citim **tabelul greșelilor** și aplicăm un **prag**.  
- Păcălim, **reparăm** și măsurăm din nou, cu același test.  
- Scriem o **fișă cinstită**, cu limite.  
- Lucrăm cu semaforul și cu **cele 5 întrebări**.  

**Schema pe scurt (pe foaie):** plan → exemple variate → antrenare → test fix → tabelul greșelilor → prag → păcălim → reparăm → fișă → insigna **AI Maker**

---

## Testul final
1. Ce este o clasă și ce este un exemplu?  
2. De ce împărțim datele în set de antrenare și set de test?  
3. Cum calculezi acuratețea?  
4. Ce arată tabelul greșelilor?  
5. Ce este o alarmă falsă și ce este o ratare?  
6. De ce adăugăm clasa „altceva” și ce face un prag?  
7. De ce are nevoie un model de sunet de zgomot de fond?  
8. Dă două feluri în care poate fi păcălit un model și spune cum îl repari.  
9. Care sunt cele 4 părți ale unei cereri bune către un asistent și ce faci cu răspunsul?  
10. Numește trei dintre cele cinci întrebări ale unui constructor responsabil.

---

## Temă
1. Arată aplicația și Fișa cuiva din familie și întreabă ce ar adăuga.  
2. Alege un lucru din modul și explică-l unui prieten.  
3. Păstrează Fișa într-un loc sigur și poți s-o adaugi la portofoliul tău.  
4. Gândește-te ce clasă nouă ai adăuga aplicației.  
5. Salvează foaia ca `Prenume_Nume_AI2_L10_Tema`.

---

## Ce urmează
Felicitări! Ai terminat Modulul 2 din **Antrenăm modele AI** și ai primit insigna **AI Maker**. Continuă să testezi, să verifici și să te întrebi mereu cine poate fi afectat.

---

## Răspunsuri
- **Testul final:** (1) clasa este o categorie, de exemplu „creion”, iar exemplul este o poză sau un sunet din acea categorie; (2) ca să testăm modelul pe situații pe care nu le-a văzut; (3) răspunsurile corecte împărțite la total, înmulțit cu 100; (4) ce a fost încurcat cu ce; (5) alarma falsă este când modelul spune că este ceva, dar nu este; ratarea este când nu observă ceva care există; (6) pentru ca modelul să poată spune „altceva” pentru ce nu cunoaște; pragul este nivelul sub care răspunsul devine „nu știu”; (7) pentru că trebuie să învețe cum sună liniștea din locul unde lucrăm; (8) de exemplu lumina și fundalul; repari cu exemple noi din acele situații și rulezi din nou același test; (9) Cine, Ce, Pentru cine, Cum; verifici în surse și nu dai date personale; (10) de exemplu: date, echilibru, greșeli, om, transparență.  
- **Exercițiul B:** nu există răspuns unic; contează sinceritatea și o idee practică.  
- **Verificarea proiectului:** căutați: clase cu cel puțin 15 exemple variate, test fix cu situații noi, acuratețe corect calculată, tabelul greșelilor, rata păcălirii înainte și după, limite spuse cinstit și lipsa datelor personale. Dacă fișa spune că aplicația „nu greșește niciodată”, corectați blând.  
- **Notă pentru adultul care ajută:** nimic nu se salvează automat; încurajați copilul să noteze rezultatele pe foaie înainte să închidă fila. Dacă timpul este scurt, Minimul este suficient pentru a trece la testul final. Dacă lipsește o cameră, faceți proiectul pe hârtie, cu cartonașe. Nu salvați proiecte în Google Drive.  

**Bonus ★★★ — Testul pe teren:**

*Schema logicii:*
1. Familia alege 10 situații noi.  
2. Rulezi aplicația și notezi.  
3. Calculezi acuratețea.  
4. Compari cu testul tău.  
5. Găsești motive și o reparație.

*Exemplu de tabel:*

| Nr. | Situația | Clasa reală | Ce a spus modelul | Corect? |
|-----|----------|--------------|--------------------|---------|
| 1 | creion scurt, ascuțit | creion | creion | da |
| 2 | gumă colorată | gumă | gumă | da |
| 3 | pix | altceva | creion | nu |
| 4 | creion cu capac | creion | creion | da |
| 5 | gumă mică, veche | gumă | altceva | nu |
| 6 | riglă | altceva | altceva | da |
| 7 | creion de ceară | creion | creion | da |
| 8 | foaie goală | altceva | altceva | da |
| 9 | gumă albă | gumă | gumă | da |
| 10 | marker | altceva | creion | nu |

*Rezultat:* 7 corecte din 10, adică 70%. Pe testul tău fix, acuratețea a fost, de exemplu, 87%. Diferența este de 17 puncte procentuale.

*Două motive posibile:* familia a ales obiecte pe care modelul nu le văzuse (pix, marker, gumă veche), iar la antrenare nu a existat destulă varietate în clasa „altceva”.

*Reparație:* pentru pix și marker adaug la „altceva” 8–10 exemple cu obiecte lungi, asemănătoare cu creionul.

- Numerele tale vor fi altele; contează să explici diferența.  
- Un test făcut de altcineva este adesea mai greu, pentru că nu știe ce „cunoaște” modelul.  
- Dacă diferența este mică, este un semn bun, dar nu garantează că modelul merge peste tot.  
