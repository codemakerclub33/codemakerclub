# LECȚIA 7 — Păcălim modelul
### Găsim punctele slabe, reparăm și măsurăm din nou
**Modulul 2 · Antrenăm modele AI · 10+ · 2 ore**  
**Code Maker Club · AI Maker**

> Azi încercăm să păcălim propriul model: schimbăm lumina, fundalul, unghiul și vedem ce se strică. Apoi reparăm și măsurăm din nou, cu același test. Așa lucrează cei care verifică dacă un model este de încredere. Lucrăm la calculator, cu un adult prezent dacă se poate.  
> Proiect: **„Raportul de păcăleală”** · folder: `Prenume_Nume_AI2_L7` (ex. `Ana_Pop_AI2_L7`)

---

## Ce facem azi
La finalul orei știi să cauți punctele slabe ale unui model, să deosebești șase feluri de păcăleli, să calculezi **rata păcălirii** și să repari modelul cu exemple noi, apoi să verifici dacă reparația a funcționat. Un model care merge perfect pe masa ta nu este neapărat bun în lumea reală. Un specialist nu întreabă „funcționează?”, ci „unde se strică?”.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare: trei feluri de date (**Exemplul 1**) |
| 10–30 | Cele șase feluri de păcăleli (**Exemplul 2**) |
| 30–50 | Modelul de bază, antrenat în condiții „curate” (**Exemplul 3**) |
| 50–80 | Păcălim modelul: 12 încercări (**Exemplul 4**) |
| 80–100 | Reparăm și măsurăm din nou (**Exemplul 5**) |
| 100–112 | Raportul de păcăleală și lumea reală (**Exemplul 6**) |
| 112–120 | Recap și temă |

Exercițiile B–E și Provocarea sunt pentru cine termină mai repede, sau pentru acasă.

**Ce ai nevoie:** calculator cu cameră web și browser actual, două perechi de obiecte mici (de exemplu un creion și o gumă, plus un pix și o altă gumă pentru a păcăli), o foaie colorată sau cu desene (fundal), o foaie albă pentru acoperit, o lanternă sau lumina telefonului a unui adult (opțional), foi A4, creioane colorate.  
**Fără calculator sau fără cameră:** adultul încarcă poze făcute în prealabil, în două seturi: „curat” și „păcăleli”. Sau faceți experimentul pe hârtie, cu desene ale aceluiași obiect în condiții diferite.

---

## Cuvinte noi azi

| Cuvânt | Ce înseamnă | Exemplu |
|--------|-------------|---------|
| **Păcăleală** | O schimbare a condițiilor care face modelul să greșească | același creion, într-o lumină slabă |
| **Rata păcălirii** | Câte încercări au păcălit modelul, din total, în procente | 5 din 12 înseamnă aproximativ 42% |
| **Robust** | Un model care se descurcă și în condiții diferite de antrenare | recunoaște creionul și în lumină slabă |
| **Reparare** | Adăugăm exemple noi, din situațiile în care modelul a greșit | 10 poze noi, cu lumina slabă |

---

## Pas cu pas

**Partea 1 — Recapitulare**

### Exemplul 1 — Ne amintim
Spune în perechi:
1. Care sunt cele trei feluri de date folosite de modelele noastre?  
2. Ce este un test fix și de ce îl folosim?  
3. Ce este „altceva” într-un model de imagini?

**Gata când:**  
- [ ] Am răspuns la cele 3 întrebări  
- [ ] Am explicat de ce testul fix trebuie păstrat la fiecare rundă  

**Partea 2 — Tipurile de păcăleli**

### Exemplul 2 — Șase feluri de a păcăli un model
Un model învață dintr-un număr limitat de poze. Când condițiile se schimbă, poate greși. Șase feluri de schimbări:

1. **Lumina:** mai întunecat, mai luminos, lumină colorată.  
2. **Fundalul:** un fundal cu desene sau culori puternice.  
3. **Unghiul:** obiectul văzut de sus, din spate sau înclinat.  
4. **Parțial acoperit:** o parte din obiect este ascunsă.  
5. **Obiect asemănător:** un obiect care seamănă cu o clasă, dar nu este în ea.  
6. **Distanța:** foarte aproape sau foarte departe de cameră.

Scrie pe foaie cele șase tipuri și, lângă fiecare, un exemplu din casa ta.

**Gata când:**  
- [ ] Am scris cele 6 tipuri de păcăleli  
- [ ] Am dat un exemplu pentru fiecare  

**Partea 3 — Modelul de bază**

### Exemplul 3 — Un model antrenat în condiții curate
1. Deschide Teachable Machine, alege proiectul cu imagini și dă nume celor două clase („creion” și „gumă”).  
2. Antrenează-l **în condiții curate**: lumină normală, fundal alb, obiectul din față sau din lateral, la distanță medie. Adună **10 exemple** pe clasă.  
3. Antrenează modelul. Nu închide fila.  
4. Verifică rapid că recunoaște cele două obiecte în condiții curate.

Facem asta cu intenție: ca să vedem ce se strică atunci când schimbăm condițiile.

**Gata când:**  
- [ ] Modelul de bază este antrenat cu exemple curate  
- [ ] Am verificat rapid că merge în condiții curate  

**Partea 4 — Păcălim modelul**

### Exemplul 4 — Douăsprezece încercări
Pentru fiecare dintre cele șase tipuri de păcăleli, fă **două încercări** (câte una pentru fiecare clasă) și notează:

| Nr. | Tipul păcăleli | Ce am făcut | Clasa reală | Ce a spus modelul | Încredere | Păcălit? |
|-----|------------------|-------------|--------------|--------------------|-----------|----------|
| 1 | lumina | cameră întunecată | creion | | | |
| 2 | lumina | cameră întunecată | gumă | | | |
| 3 | fundalul | foaie cu desene | creion | | | |
| ... | | | | | | |
| 12 | distanța | foarte aproape | gumă | | | |

**Păcălit** înseamnă că modelul a dat clasa greșită. Calculează **rata păcălirii**: numărul de încercări păcălite împărțit la 12, înmulțit cu 100. Care tip de păcăleală a funcționat cel mai des?

**Gata când:**  
- [ ] Am făcut cele 12 încercări și am completat tabelul  
- [ ] Am calculat rata păcălirii și am găsit tipul cel mai periculos  

**Partea 5 — Reparăm**

### Exemplul 5 — Adăugăm exemple din locurile slabe
1. Alege cele **două tipuri** de păcăleli care au păcălit cel mai des modelul.  
2. Adaugă la fiecare clasă **5 exemple noi** pentru fiecare dintre cele două tipuri (în total 10 exemple noi pe clasă).  
3. Antrenează din nou modelul.  
4. Rulează **exact aceleași 12 încercări** și completează o coloană nouă: „După reparare”.  
5. Calculează din nou rata păcălirii și compară.

| | Înainte | După |
|---|---------|------|
| Păcăliri din 12 | | |
| Rata păcălirii | | |

Rezultatul nu trebuie să fie perfect. Important este să vezi dacă reparația a ajutat și unde a rămas slab modelul.

**Gata când:**  
- [ ] Am reparat modelul cu exemple din cele 2 tipuri de păcăleli  
- [ ] Am rulat din nou cele 12 încercări și am comparat rata înainte și după  

**Partea 6 — Raportul și lumea reală**

### Exemplul 6 — „Raportul de păcăleală”
Pe o foaie A4 scrie:
1. **Titlu și nume.**  
2. **Tabelul cu cele 12 încercări**, cu coloanele „înainte” și „după”.  
3. **Diagrama cu bare** cu rata păcălirii înainte și după reparare.  
4. **Trei propoziții:** ce tip de păcăleală a fost cel mai periculos, ce a ajutat reparația și ce tot nu merge.

Apoi discutăm: unde, în lumea reală, s-ar putea întâmpla asemenea păcăleli? De exemplu:
- o cameră de telefon care recunoaște obiecte, într-o lumină slabă;  
- un asistent vocal într-o cameră zgomotoasă;  
- un model care citește semne rutiere, când semnul este murdar sau acoperit de zăpadă.

Ce ar trebui să facă cei care construiesc astfel de modele înainte să le lase pe mâna oamenilor?

**Gata când:**  
- [ ] Raportul are tabelul, diagrama și cele 3 propoziții  
- [ ] Am dat un exemplu din lumea reală și o idee despre ce ar trebui să facă cei care îl construiesc  

---

## Greșeli frecvente

| Ce crezi | De fapt | Corect |
|----------|---------|--------|
| „Dacă merge pe masa mea, merge peste tot” | Condițiile se schimbă | Îl testez și în condiții diferite |
| „Reparez modelul și nu mai testez” | Nu știu dacă a mers | Rulez din nou același test fix |
| „Schimb testul după reparare” | Nu mai pot compara | Păstrez cele 12 încercări |
| „Păcălirea înseamnă că modelul e prost” | Arată unde are nevoie de exemple | Este o informație utilă |
| „Reparez toate tipurile deodată” | Nu știu ce a ajutat | Aleg cele două cele mai slabe |

---

## De făcut azi — „Raportul de păcăleală”

### Minim vs Complet

| | Ce trebuie |
|--------|------------|
| **Minim** | Modelul de bază antrenat · tabelul cu cele 12 încercări completat · rata păcălirii calculată |
| **Complet** | Minim + repararea cu exemple noi · coloana „după” completată · diagrama cu bare · cele 3 propoziții · Exercițiile B–E |

### Pasul 1 — Minim
**Exercițiul A — „Raportul de păcăleală” (obligatoriu).** Completează tabelul din Exemplul 4 și calculează rata păcălirii.

**→ Minim când:** ai tabelul cu 12 încercări completat și rata păcălirii calculată.

### Pasul 2 — Complet

**Exercițiul B — Ce fel de păcăleală?**  
Spune tipul pentru fiecare:
1. Creionul este ținut într-o cameră întunecată.  
2. Guma este pe un fundal cu desene colorate.  
3. Creionul este văzut doar de vârf, de sus.  
4. O foaie acoperă jumătate din gumă.  
5. Un pix este arătat ca „creion”.  
6. Creionul este ținut foarte aproape de cameră.

**Exercițiul C — Calculează rata păcălirii**  
1. Un model a fost păcălit în 3 din 12 încercări înainte de reparare și în 1 din 12 după. Care este rata păcălirii înainte și după?  
2. A ajutat repararea? Cu cât a scăzut rata?

**Exercițiul D — Cum repari?**  
Modelul tău greșește când obiectul este pe un fundal cu desene și când lumina este slabă. Scrie ce exemple ai adăuga și cum verifici apoi că reparația a funcționat.

**Exercițiul E — Explică cu cuvintele tale**  
Răspunde în 3 propoziții: de ce nu este de ajuns ca un model să meargă în condiții curate?

**Gata când:**  
- [ ] Ai raportul cu tabel, diagramă și 3 propoziții  
- [ ] Ai făcut cele 12 încercări înainte și după reparare  
- [ ] Ai răspuns la Exercițiile B–E  
- [ ] Foaia se numește `Prenume_Nume_AI2_L7`  

---

## Bonus ★★★ — Provocare: Cutia cu păcăleli
*Doar dacă ai terminat Complet.*

Lasă familia să încerce să păcălească modelul și vezi dacă îl poți repara.

- [ ] Modelul tău de bază este antrenat în condiții curate
- [ ] O persoană din familie propune 6 încercări de păcălit, fiecare diferită, iar tu le notezi într-un tabel
- [ ] Pentru fiecare încercare notezi ce a spus modelul și dacă a fost păcălit
- [ ] Numeri câte din 6 au păcălit modelul
- [ ] Alegi două încercări care au reușit și adaugi exemple noi pentru ele
- [ ] Rulezi din nou cele 6 încercări și notezi rezultatul
- [ ] Scrii 2 propoziții: ce a reușit să păcălească familia și ce ai învățat
- [ ] Salvează foaia ca `Prenume_Nume_AI2_L7_Pacaleli`

---

## Recapitulare pe scurt

- Un model poate fi păcălit prin **lumină**, **fundal**, **unghi**, **acoperire**, **obiecte asemănătoare** și **distanță**.  
- **Rata păcălirii** arată câte încercări au păcălit modelul din total.  
- **Reparăm** cu exemple noi din situațiile în care a greșit.  
- Verificăm cu **același test**, înainte și după.  
- Un model **robust** se descurcă și în condiții diferite.  

**Schema pe scurt (pe foaie):** model de bază → 12 păcăleli → rata păcălirii → reparare cu exemple noi → același test → comparăm

---

## Quiz scurt
- Numește trei feluri de păcăleli.  
- Cum calculezi rata păcălirii?  
- Cum repari un model care greșește într-un anumit loc?  
- De ce rulăm din nou aceleași 12 încercări?  
- Ce înseamnă un model robust?

---

## Temă
1. Termină raportul, dacă nu ai terminat.  
2. Arată familiei păcălelile care au funcționat și întreabă ce alte încercări ar face.  
3. Alege un aparat sau o aplicație din casă și scrie 3 situații în care ar putea fi păcălit.  
4. Scrie cum ai verifica dacă aparatul respectiv este de încredere.  
5. Salvează foaia ca `Prenume_Nume_AI2_L7_Tema`.

---

## Ce urmează — Lecția 8
Lăsăm modelele noastre și lucrăm cu un asistent AI: scriem cereri, comparăm răspunsuri și învățăm să le verificăm.

---

## Răspunsuri
- **Quiz scurt:** (1) de exemplu lumina, fundalul, unghiul, acoperirea, un obiect asemănător, distanța; (2) numărul de încercări păcălite împărțit la total, înmulțit cu 100; (3) adaugi exemple noi din situațiile în care a greșit și îl antrenezi din nou; (4) pentru că așa comparăm cinstit înainte și după; (5) un model care se descurcă și în condiții diferite de cele de la antrenare.  
- **Exemplul 1:** imagini, sunete și poziții; testul fix este același test, folosit la fiecare rundă, ca să putem compara; „altceva” este clasa pentru tot ce nu aparține celorlalte clase.  
- **Exemplul 4:** rezultatele diferă de la model la model. Este normal ca unele tipuri de păcăleli să funcționeze mai des decât altele.  
- **Exemplul 5:** reparația nu trebuie să ducă rata la zero. Contează să se vadă cu cât a scăzut și ce a rămas slab.  
- **Exemplul 6:** de exemplu: cei care construiesc astfel de modele trebuie să le testeze în multe condiții, să spună unde nu merg bine și să lase un om să verifice atunci când contează.  
- **Exercițiul B:** (1) lumina; (2) fundalul; (3) unghiul; (4) parțial acoperit; (5) obiect asemănător; (6) distanța.  
- **Exercițiul C:** (1) înainte 25%, după aproximativ 8%; (2) da, a scăzut cu aproximativ 17 puncte procentuale.  
- **Exercițiul D:** adaugi exemple cu fundal cu desene și exemple cu lumină slabă, la ambele clase, apoi rulezi din nou aceleași încercări și compari rata păcălirii înainte și după.  
- **Exercițiul E:** pentru că în lumea reală condițiile se schimbă; un model antrenat doar în condiții curate poate greși când lumina, fundalul sau unghiul sunt diferite.  
- **Notă pentru adultul care ajută:** nu cereți elevilor să păcălească modelul cu fețe sau cu oameni; folosim doar obiecte. Dacă un elev obține rate foarte mici de păcălire, întrebați dacă a făcut încercările destul de diferite de condițiile curate. Lumina se schimbă ușor cu o lanternă sau cu o foaie colorată. Nu salvați proiecte în Google Drive.  

**Bonus ★★★ — Cutia cu păcăleli:**

*Schema logicii:*
1. Antrenezi modelul de bază în condiții curate.  
2. Familia propune 6 încercări diferite; le notezi.  
3. Pentru fiecare notezi ce a spus modelul și dacă a fost păcălit.  
4. Numeri păcălirile.  
5. Alegi două încercări reușite și adaugi exemple noi pentru ele.  
6. Rulezi din nou cele 6 încercări și compari.

*Exemplu de tabel:*

| Nr. | Încercarea familiei | Clasa reală | Ce a spus modelul | Păcălit? | După reparare |
|-----|----------------------|-------------|--------------------|----------|----------------|
| 1 | creion pe un șervețel cu flori | creion | gumă | da | creion |
| 2 | gumă în lumină slabă | gumă | gumă | nu | gumă |
| 3 | creion văzut de sus | creion | creion | nu | creion |
| 4 | gumă cu un colț acoperit | gumă | creion | da | gumă |
| 5 | pix arătat ca „creion” | niciuna (este un pix) | creion | da | creion |
| 6 | creion departe de cameră | creion | creion | nu | creion |

*Rezultat:* modelul a fost păcălit în 3 din 6 încercări (1, 4 și 5). Am adăugat exemple cu fundal cu desene (încercarea 1) și cu obiecte acoperite parțial (încercarea 4). După reparare, încercările 1 și 4 au reușit, dar încercarea 5 (pixul) a rămas păcălită, pentru că pixul nu a fost niciodată în vreo clasă.

*Exemplu de 2 propoziții:* „Familia a păcălit modelul cu fundalul cu flori, cu un colț acoperit și cu un pix. Am reparat două dintre ele, iar pixul îmi arată că modelul are nevoie și de o clasă «altceva».”

- Numerele tale vor fi altele: contează să faci aceleași comparații înainte și după.  
- Un pix arătat ca „creion” nu poate fi „reparat” cu exemple de creion: aici ar ajuta clasa „altceva”.  
- Poți lăsa familia să aleagă încercările fără să știe ce clase are modelul.  
