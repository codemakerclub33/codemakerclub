# Lecția 7 — Racheta spațială
### Simetrie în jurul unei axe
**Modulul 1 · Bazele Tinkercad**  
**Code Maker Club · Shape Starter**  

> Azi combini forme **cu simetrie în jurul unei axe**: cilindru, con, aripioare, hublou.  
> Proiect: **„Racheta mea”**  
> Fișier: `Prenume_Nume_T1_L07`


---

## Obiectiv
La finalul orei ai o rachetă pe verticală, simetrică, care stă pe plan.  
**Minim:** <span style="color:#1E90FF;font-weight:700">Cylinder</span> `20 × 20 × 50`, <span style="color:#1E90FF;font-weight:700">Cone</span> `20 × 20 × 25` la `49` și **4 aripioare** (Roof) egale, la `90°` una de alta, verificate din <span style="color:#D400D4;font-weight:700">Top</span>, cu **cel puțin 8 unelte diferite**.  
**Ținta orei (Complet):** a doua parte: hublou (<span style="color:#00A600;font-weight:700">Hole</span> + <span style="color:#DC143C;font-weight:700">Group</span>), flăcări sub rachetă, culori, cu cel puțin **6 unelte diferite**.

## De ce contează
Exersezi ce ai învățat: **rotire**, **aliniere**, **Hole**, **Group**.

**Notă:** imprimanta 3D **nu** e folosită la oră — doar design.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L1–L6 · privim o rachetă și numim formele |
| 10–30 | Demo: aripioare în cruce (placă simetrică → Ctrl+D → rotire 90°) |
| 30–65 | Construim racheta: Minim → Complet |
| 65–100 | **Bonus:** lansarea rachetei, pe trepte (fiecare merge cât apucă) |
| 100–120 | Recap, quiz, galerie |

**Grupe de unelte azi:**  
<span style="color:#1E90FF;font-weight:700">Forme</span> · <span style="color:#D400D4;font-weight:700">Vedere</span> · <span style="color:#E65722;font-weight:700">Mărime și loc</span> · <span style="color:#00A600;font-weight:700">Culoare</span> · <span style="color:#DC143C;font-weight:700">Taste de editare</span>  
*(culorile ajută să știi **ce fel de unealtă** e: o formă, o mișcare a camerei, o schimbare de mărime, culoarea sau o tastă.)*

**Uneltele de azi:**

| Unealtă | Ce face |
|---------|---------|
| <span style="color:#1E90FF;font-weight:700">Roof</span> | pană-acoperiș: din ea facem aripioarele |
| <span style="color:#1E90FF;font-weight:700">Cone</span> | con: vârful și flăcările |
| <span style="color:#00A600;font-weight:700">Hole</span> | gaură: hublou |
| <span style="color:#DC143C;font-weight:700">Ctrl+G</span> | Group: lipește piesele, iar Hole-ul taie |
| <span style="color:#E65722;font-weight:700">L</span> | aliniază aripioarele pe axa rachetei |
| <span style="color:#DC143C;font-weight:700">Ctrl+D</span> | copii pe care le rotești `90°` |

Celelalte unelte (formele de bază, vederea, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#DC143C;font-weight:700">Ctrl+Z</span>) le știi din lecțiile trecute.

---

## Pas cu pas

### 1) Proiect nou
1. **Create new design**  
2. Nume: `Prenume_Nume_T1_L07`  
3. Salvare automată — verifici numele

**Încearcă tu — Proiect nou (2 min)**  
- [ ] Proiectul e creat și redenumit `Prenume_Nume_T1_L07`  

### 2) Corpul și vârful
1. <span style="color:#1E90FF;font-weight:700">Cylinder</span> în picioare, pe plan: **20 × 20 × 50**  
2. <span style="color:#1E90FF;font-weight:700">Cone</span> deasupra: **20 × 20 × 25**, ridicat cu <span style="color:#E65722;font-weight:700">conul negru</span> la **49** (intră 1 mm în cilindru). <span style="color:#E65722;font-weight:700">D</span> doar dacă ai greșit cilindrul, nu pe con  
3. Din <span style="color:#D400D4;font-weight:700">Top</span> conul e pe mijlocul cilindrului (muți cu mouse-ul)  
4. Dacă vârful e prea lat: scalezi **lățimea**, nu doar înălțimea

**Încearcă tu — Corpul și vârful (6 min)**  
- [ ] Cilindrul (**20 × 20 × 50**) și conul (**20 × 20 × 25**, la **49**) sunt centrate din <span style="color:#D400D4;font-weight:700">Top</span>  

### 3) Aripioare (4, în cruce)
*Motiv: o piesă se rotește în jurul **propriului** centru. De aceea facem o placă simetrică, al cărei centru e chiar axa rachetei.*  
1. Tragi un <span style="color:#1E90FF;font-weight:700">Roof</span> (acoperiș) din Basic Shapes. Din <span style="color:#D400D4;font-weight:700">Front</span> trebuie să vezi un **triunghi cu vârful sus** (dacă nu, îl rotești 90° în jurul axei de sus)  
2. Îl scalezi: **50 lățime × 2 grosime × 20 înălțime**, pe plan. Triunghiul înalt la mijloc = aripioare care coboară spre capete  
3. Selectezi **corpul (cilindrul) + placa** (Shift+click), apeși <span style="color:#E65722;font-weight:700">L</span> și alegi **punctul din mijloc** pe **ambele** direcții din Top — placa ajunge centrată pe corp. Verifici din Top  
4. Selectezi placa → <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → copia stă peste original → o rotești **90°** cu <span style="color:#E65722;font-weight:700">săgeata curbă</span> (4 pași de 22,5°) — se rotește în jurul centrului, adică al axei rachetei  
5. Verifici din <span style="color:#D400D4;font-weight:700">Top</span>: 4 aripioare egale, în cruce (+). Din <span style="color:#D400D4;font-weight:700">Front</span>: aripioarele sunt la bază  
*(Plan B pentru Minim: aripioare din Box-uri subțiri lipite manual pe față, spate, stânga și dreapta, din Top, la distanțe egale)*

**Încearcă tu — Aripioare (4, în cruce) (12 min)**  
- [ ] Placa-aripă (Roof) e **50 × 2 × 20** și centrată pe corp  
- [ ] Din <span style="color:#D400D4;font-weight:700">Top</span> vezi **4** aripioare egale, în cruce  

### 4) Hublou (Complet)
1. <span style="color:#1E90FF;font-weight:700">Cylinder</span> **8 × 8 × 30**, culcat (<span style="color:#E65722;font-weight:700">săgeata curbă</span>, 90°), pus pe <span style="color:#00A600;font-weight:700">Hole</span>  
2. Îl pui în mijlocul corpului, spre față, la înălțimea **~35** (<span style="color:#E65722;font-weight:700">conul negru</span>). Corpul e plin, deci hublou = un tunel care **străpunge corpul** și iese pe ambele părți (30 > 20) — verifici din Top și Front  
3. <span style="color:#DC143C;font-weight:700">Ctrl+G</span> doar pe **corp + hublou** (Shift+click pe cele două; nu pe vârf sau aripioare)

**Încearcă tu — Hublou (7 min)**  
- [ ] Hublou-ul (<span style="color:#00A600;font-weight:700">Hole</span>) străpunge corpul pe ambele părți  
- [ ] Hublou-ul e grupat doar cu **corpul**, nu cu vârful sau aripioarele  

### 5) Flăcări (Complet)
Racheta stă pe plan, deci flăcările nu pot fi *sub* ea. O ridicăm și o „sprijinim” pe flăcări.  
1. <span style="color:#DC143C;font-weight:700">Ctrl+A</span> (pe plan e doar racheta) → ridici totul cu <span style="color:#E65722;font-weight:700">conul negru</span> la **17**  
2. <span style="color:#1E90FF;font-weight:700">Cone</span> **12 × 12 × 18**, rotit 180° (**vârful în jos**), sub centrul rachetei, vârful pe plan (verifici din Top și Front). Încă 2 conuri mai mici (Ctrl+D + Shift) lângă el, tot cu vârful pe plan  
3. Conurile intră 1 mm în baza rachetei (sus la 18, racheta începe la 17)  
4. <span style="color:#00A600;font-weight:700">Color</span>: galben / portocaliu

**Încearcă tu — Flăcări (6 min)**  
- [ ] Racheta e ridicată la **17**, iar vârfurile flăcărilor ating planul  
- [ ] Conurile intră 1 mm în baza rachetei  

### 6) Verificare finală
1. <span style="color:#D400D4;font-weight:700">Front</span>: racheta e dreaptă, aripioarele la bază  
2. <span style="color:#D400D4;font-weight:700">Top</span>: simetrie  
3. Minim: racheta stă pe plan · Complet: stă pe flăcări (vârfurile lor ating planul)

**Încearcă tu — Verificare finală (2 min)**  
- [ ] Am parcurs toate punctele din verificare  
- [ ] Am corectat ce nu se potrivea

---

## Greșeli frecvente
1. **Aripioarele nu sunt egale** — placa nu e centrată pe corp (se rotește în jurul centrului ei, nu al rachetei); verifici din <span style="color:#D400D4;font-weight:700">Top</span>, realiniezi cu <span style="color:#E65722;font-weight:700">L</span> (punctele din mijloc), apoi rotești din nou.  
2. **Rachetă orizontală** — ridici corpul vertical.  
3. **Hublou nu iese** — nu e Hole, nu trece prin corp (30 mm > 20 mm) sau nu ai dat Group.  
4. **Conul de vârf prea lat** — scalezi pe lățime.  
5. **Flăcările sunt în sus** — le rotești 180°.  
6. **Aripioare doar pe o parte** — dezechilibru; repartizezi.

---

## De făcut azi — „Racheta mea”

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1** — corp, vârf și `4` aripioare egale în cruce, la `90°`, verificate din **Top**, cu **cel puțin 8 unelte diferite** |
| **Complet (ținta orei)** | Minim + **Pasul 2** — hublou cu Hole și Group, flăcări, culori, cu cel puțin **6 unelte diferite** |

Dacă rămâi în urmă: **oprește-te la Minim**. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Minim
- [ ] Corp + vârf, pe plan  
- [ ] 4 aripioare egale, în cruce (Top)
- [ ] Ai folosit cel puțin **8 unelte diferite**: <span style="color:#1E90FF;font-weight:700">Cylinder</span>, <span style="color:#1E90FF;font-weight:700">Cone</span>, <span style="color:#1E90FF;font-weight:700">Roof</span>, <span style="color:#DC143C;font-weight:700">Ctrl+D</span>, <span style="color:#E65722;font-weight:700">săgeata curbă</span>, <span style="color:#E65722;font-weight:700">conul negru</span>, <span style="color:#E65722;font-weight:700">L</span>, <span style="color:#D400D4;font-weight:700">View Cube</span>, <span style="color:#E65722;font-weight:700">D</span>  

**→ Ai Minim când:** din Top un coleg vede cele `4` aripioare în cruce, la `90°` una de alta.

### Pasul 2 — Complet
- [ ] Hublou (Hole + Group)  
- [ ] Flăcări  
- [ ] Culori · numele `T1_L07` e corect
- [ ] Partea a doua are cel puțin **6 unelte diferite**: <span style="color:#00A600;font-weight:700">Hole</span>, <span style="color:#DC143C;font-weight:700">Ctrl+G</span>, <span style="color:#1E90FF;font-weight:700">Cone</span>, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#DC143C;font-weight:700">Ctrl+A</span>, <span style="color:#D400D4;font-weight:700">View Cube</span>  

**Gata Complet când:** hublou cu Hole și Group, flăcări, culori și nimic nu plutește.

---

## Bonus ★★★ — Provocare: Lansarea rachetei
*Doar dacă ai terminat Complet. Lucrezi în același proiect, `Prenume_Nume_T1_L07`. Dificultatea crește de la o treaptă la alta; nu primești pași, ci reguli. Alegi tu cum ajungi la rezultat.*

Racheta ta e gata de lansare, cu platformă, turn și Luna în fundal. Nimic nu plutește. Treptele, de la ușor la greu:

- [ ] **Treapta 1 — Al doilea hublou.** Un al doilea tunel `Hole`, **perpendicular** pe primul (stânga–dreapta), cu centrul la `10` mm sub primul, ca să nu se întâlnească în corp și să nu taie aripioarele. Se vede prin el din **Right**. Grupat doar cu corpul  
- [ ] **Treapta 2 — Platforma de lansare.** Un `Box` de `40 × 40 × 5`, pe plan, **centrat** sub rachetă. Vârfurile flăcărilor **intră** în el, iar racheta nu plutește  
- [ ] **Treapta 3 — Antena.** Pe vârful conului, un cilindru subțire de `2 × 2 × 15` cu o sferă de `4` mm în vârf, **centrat exact** pe axa rachetei (verificat din **Top**)  
- [ ] **Treapta 4 — Boosterele.** `4` boostere (cilindru subțire cu con în vârf), lipite de corp, așezate **între aripioare** (la `45°` de ele), la **aceeași înălțime**, **simetrice** în jurul axei. Verificat din **Top**  
- [ ] **Treapta 5 — Turnul de lansare.** Lângă platformă, un turn din `Box`-uri (un stâlp și un braț). Brațul **atinge racheta** fără să intre în ea și nu atinge aripioarele  
- [ ] **Treapta 6 — Luna cu cratere.** În fundal, la cel puțin `30` mm de rachetă, o sferă mare (`Sphere`) pe plan, cu cel puțin `3` cratere de **mărimi diferite**, făcute cu sfere `Hole` și Group. Dacă trebuie să modifici hubloturile sau craterele, faci Ungroup, apoi Group  

**Verificare (cu un coleg):** colegul numără în **cel mult 30 de secunde**: hubloturile, platforma, antena, boosterele, turnul și Luna. Apoi verifică din **Top** simetria boosterelor și din **Front** că nimic nu plutește.  

## Recapitulare rapidă
1. Aripioare egale → <span style="color:#D400D4;font-weight:700">Top</span> + rotire sau poziții manuale  
2. Hublou = **Hole + Group**  
3. Flăcări: con cu vârful în jos

**Quiz scurt:**  
- La câte grade rotești a doua placă ca să ai **4 aripioare** egale? De ce trebuie placa să fie centrată pe corp?  
- Cum faci un **hublou**?  
- Din ce vedere verifici **simetria**?

## Temă (opțional)
- Dacă ai doar Minim: acasă adaugi hubloul, flăcările și culorile (Pasul 2), în același `Prenume_Nume_T1_L07`.  
- Dacă ai Complet: într-un proiect nou `T1_L07_B`, un **satelit** sau o **navetă**, cu aceeași simetrie.
- Dacă ai terminat și Bonusul: opțional, acasă, într-un proiect nou `T1_L07_C`, o **stație spațială**: un modul cilindric cu `4` panouri solare simetrice.  

## Ce urmează
În **Lecția 8** construiești un **castel**, cu creneluri făcute cu **Ctrl+D** repetat.
