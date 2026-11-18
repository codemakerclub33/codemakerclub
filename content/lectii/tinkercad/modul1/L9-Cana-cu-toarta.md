# Lecția 9 — Cana cu toartă
### Goluri, Hole și Torus
**Modulul 1 · Bazele Tinkercad**  
**Code Maker Club · Shape Starter**  

> Azi faci un obiect **gol pe dinăuntru**: cană cu perete, fund și toartă.  
> Proiect: **„Cana mea”**  
> Fișier: `Prenume_Nume_T1_L09`


---

## Obiectiv
La finalul orei ai o **cană goală**, cu **fund** și pereți care nu sunt prea subțiri.  
**Minim:** <span style="color:#1E90FF;font-weight:700">Cylinder</span> `40 × 40 × 45`, <span style="color:#00A600;font-weight:700">Hole</span> `32 × 32 × 42` la `5` mm, care iese deasupra cănii, <span style="color:#DC143C;font-weight:700">Group</span>, fund de `5` mm verificat din <span style="color:#D400D4;font-weight:700">Front</span>, cu **cel puțin 8 unelte diferite**.  
**Ținta orei (Complet):** a doua parte: toartă (<span style="color:#1E90FF;font-weight:700">Torus</span>) înfiptă cel mult `3` mm în perete, culori și un model pe cană, cu cel puțin **6 unelte diferite**.

## De ce contează
Cavitățile sunt peste tot: căni, cutii, vaze. **Ordinea pieselor contează** — și grosimea peretelui și a fundului.

**Notă:** imprimanta 3D **nu** e folosită la oră — doar design.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L8 · cană reală: perete, fund, toartă |
| 10–30 | Demo: Hole **mai îngust, ridicat de la fund**, Torus rotit |
| 30–65 | Construim cana: Minim → Complet |
| 65–100 | **Bonus:** ceaiul de la ora cinci, pe trepte (fiecare merge cât apucă) |
| 100–120 | Recap, quiz, galerie |

**Grupe de unelte azi:**  
<span style="color:#1E90FF;font-weight:700">Forme</span> · <span style="color:#D400D4;font-weight:700">Vedere</span> · <span style="color:#E65722;font-weight:700">Mărime și loc</span> · <span style="color:#00A600;font-weight:700">Culoare</span> · <span style="color:#DC143C;font-weight:700">Taste de editare</span>  
*(culorile ajută să știi **ce fel de unealtă** e: o formă, o mișcare a camerei, o schimbare de mărime, culoarea sau o tastă.)*

**Uneltele de azi:**

| Unealtă | Ce face |
|---------|---------|
| <span style="color:#00A600;font-weight:700">Hole</span> | gaură: golul din cană |
| <span style="color:#1E90FF;font-weight:700">Torus</span> | gogoașă: toarta |
| <span style="color:#DC143C;font-weight:700">Ctrl+G</span> | Group: golul taie corpul |
| <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span> | Ungroup: desface grupul, ca să modifici |
| <span style="color:#E65722;font-weight:700">conul negru</span> | ridică golul la `5` mm: acesta e fundul cănii |
| <span style="color:#E65722;font-weight:700">L</span> | aliniază golul pe centrul cănii |

Celelalte unelte (formele de bază, vederea, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#DC143C;font-weight:700">Ctrl+Z</span>) le știi din lecțiile trecute.

---

## Pas cu pas

### 1) Proiect nou
1. **Create new design**  
2. Nume: `Prenume_Nume_T1_L09`  
3. Salvare automată — verifici numele

**Încearcă tu — Proiect nou (2 min)**  
- [ ] Proiectul e creat și redenumit `Prenume_Nume_T1_L09`  

### 2) Corpul
1. Tragi un <span style="color:#1E90FF;font-weight:700">Cylinder</span> și îl faci **40 × 40 × 45** (diametru 40, înălțime 45) — corpul cănii  
2. Pe plan (dacă plutește → <span style="color:#E65722;font-weight:700">D</span>)

**Încearcă tu — Corpul (3 min)**  
- [ ] Corpul are **40 × 40 × 45** și stă pe plan  

### 3) Golul (Hole)
1. Tragi al doilea <span style="color:#1E90FF;font-weight:700">Cylinder</span>, **mai îngust** decât corpul: **32 × 32 × 42** (peretele va avea 4 mm)  
2. Îl pui pe <span style="color:#00A600;font-weight:700">Hole</span> (fereastra piesei, varianta cu dungi)  
3. Îl ridici cu **<span style="color:#E65722;font-weight:700">conul negru</span>** la **5**: golul începe la 5 mm de plan (**fund de 5 mm**) și urcă până la 47 — adică **iese deasupra** cănii (45), altfel ar rămâne un capac  
4. Golul e deci puțin mai scund decât corpul, dar **nu coboară până la plan**  
5. Îl pui **în centru**: selectezi **corpul + golul** (Shift+click), apeși <span style="color:#E65722;font-weight:700">L</span> și alegi **punctul din mijloc** pe ambele direcții din Top. Verifici din Top că peretele are aceeași grosime peste tot  
6. Verifici din <span style="color:#D400D4;font-weight:700">Front</span>: golul începe **deasupra** planului (5 mm) și iese deasupra marginii cănii

**Încearcă tu — Golul (Hole) (10 min)**  
- [ ] Golul (<span style="color:#00A600;font-weight:700">Hole</span>) are **32 × 32 × 42**, începe la **5** mm și iese deasupra marginii  
- [ ] Din <span style="color:#D400D4;font-weight:700">Top</span>, peretele are aceeași grosime peste tot  

### 4) Toarta (Complet) — înainte de Group
1. Tragi un <span style="color:#1E90FF;font-weight:700">Torus</span> (gogoașă din Basic Shapes) și îl scalezi cu <span style="color:#E65722;font-weight:700">Shift</span> la ~**25 mm** diametru  
2. Îl **rotești la 90°** cu <span style="color:#E65722;font-weight:700">săgeata curbă</span>, ca să stea **vertical** și, din <span style="color:#D400D4;font-weight:700">Front</span>, să vezi un **cerc** (inel) — dacă vezi doar o linie, rotești 90° pe cealaltă axă  
3. Îl lipești pe **o parte** a corpului (la dreapta, în Front): marginea lui interioară **intră ~3 mm în perete**; îl ridici la ~**10** (să fie pe la mijlocul cănii)  
4. Îl scalezi dacă iese prea mare sau strâmb (pătrățele albe + <span style="color:#E65722;font-weight:700">Shift</span>)  
5. Verifici din <span style="color:#D400D4;font-weight:700">Top</span>: toarta intră doar în perete (peretele are 4 mm; **nu** intră mai mult de 3 mm, ca să nu ajungă în gol)

**Încearcă tu — Toarta — înainte de Group (8 min)**  
- [ ] Toarta e vertical (din <span style="color:#D400D4;font-weight:700">Front</span> vezi un cerc)  
- [ ] Intră cel mult ~3 mm în perete, la ~**10** înălțime  

### 5) Group
1. Selectezi **corpul + golul Hole** (și **toarta**, dacă ai făcut-o) cu Shift+click  
2. <span style="color:#DC143C;font-weight:700">Ctrl+G</span> (Mac: <span style="color:#DC143C;font-weight:700">Cmd+G</span>)  
3. Rotești vederea: cana e goală, are fund, toarta e afară  
4. Dacă toarta intră în cavitate (Hole-ul o taie), <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span> (Ungroup), o muți spre exterior, <span style="color:#DC143C;font-weight:700">Ctrl+G</span> din nou

**Încearcă tu — Group (4 min)**  
- [ ] Cana e goală, cu fund  
- [ ] Toarta e pe exterior, nu în cavitate  

### 6) Complet
1. <span style="color:#00A600;font-weight:700">Color</span>: selectezi grupul → o singură culoare pentru tot (pentru culori diferite la cană și toartă, le colorezi **înainte** de Group)  
2. **Model:** cercuri mici sau dungi subțiri lipite pe exterior (formă <span style="color:#00A600;font-weight:700">Solid</span>, nu Hole)  
3. Nume corect

**Încearcă tu — Complet (8 min)**  
- [ ] Cana are culoare (sau culori făcute **înainte** de Group)  
- [ ] Modelul lipit pe exterior e <span style="color:#00A600;font-weight:700">Solid</span>, nu Hole

---

## Greșeli frecvente
1. **Cana nu are fund** — golul a coborât până la plan (trebuie să înceapă la 5); îl ridici cu <span style="color:#E65722;font-weight:700">conul negru</span>.  
2. **Cana are capac (nu e deschisă sus)** — golul nu iese deasupra marginii (47 > 45); îl înalți.  
3. **Peretele e prea subțire** — micșorezi golul sau mărești corpul.  
4. **Toarta intră în gol** — Hole-ul o taie; o muți spre exterior înainte de Group.  
5. **Toarta e culcată** — <span style="color:#E65722;font-weight:700">săgeata curbă</span>, 90°.  
6. **Golul nu e în centru** — Top, <span style="color:#E65722;font-weight:700">L</span> sau muți.  
7. **Group doar corp + gol, iar toarta rămâne separată** — o poți alipi, dar Group pe toate odată e mai simplu la început.

---

## De făcut azi — „Cana mea”

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1** — **Cylinder** `40 × 40 × 45`, **Hole** `32 × 32 × 42` la `5` mm, **Group**, fund de `5` mm din **Front**, cu **cel puțin 8 unelte diferite** |
| **Complet (ținta orei)** | Minim + **Pasul 2** — toartă, culori, model pe cană, cu cel puțin **6 unelte diferite** |

Dacă rămâi în urmă: **oprește-te la Minim**. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Minim
- [ ] Corp  
- [ ] Gol <span style="color:#00A600;font-weight:700">Hole</span>, mai îngust, ridicat la 5 mm, iese deasupra cănii  
- [ ] Fund gros (verificat din Front)  
- [ ] Group făcut  

- [ ] Ai folosit cel puțin **8 unelte diferite**: <span style="color:#1E90FF;font-weight:700">Cylinder</span>, <span style="color:#00A600;font-weight:700">Hole</span>, <span style="color:#E65722;font-weight:700">conul negru</span>, <span style="color:#DC143C;font-weight:700">Ctrl+G</span>, <span style="color:#E65722;font-weight:700">pătrățelele albe</span>, <span style="color:#E65722;font-weight:700">D</span>, <span style="color:#D400D4;font-weight:700">View Cube</span>, <span style="color:#E65722;font-weight:700">Shift+click</span>  

**→ Ai Minim când:** cana e goală sus și închisă jos.

### Pasul 2 — Complet
- [ ] Toartă  
- [ ] Culori  
- [ ] Model pe cană · numele `T1_L09` e corect
- [ ] Partea a doua are cel puțin **6 unelte diferite**: <span style="color:#1E90FF;font-weight:700">Torus</span>, <span style="color:#E65722;font-weight:700">Shift</span>, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span>, <span style="color:#DC143C;font-weight:700">Ctrl+G</span>, <span style="color:#D400D4;font-weight:700">View Cube</span>  

**Gata Complet când:** toartă, culori, model pe cană și nimic nu plutește.

---

## Bonus ★★★ — Provocare: Ceaiul de la ora cinci
*Doar dacă ai terminat Complet. Lucrezi în același proiect, `Prenume_Nume_T1_L09`. Dificultatea crește de la o treaptă la alta; nu primești pași, ci reguli. Alegi tu cum ajungi la rezultat.*

Cana ta nu stă singură: pregătești o masă de ceai. Nimic nu plutește. Treptele, de la ușor la greu:

- [ ] **Treapta 1 — Tăvița.** Un `Box` de `150 × 80 × 3`, pe care stă cana, ridicat la `2` (intră `1` mm în tăviță). Din Front nu e niciun gol între cană și tăviță  
- [ ] **Treapta 2 — Capacul.** Un disc de `42 × 42 × 3` cu un buton (sferă de `8` mm) centrat, **separat** de cană (neprins în Group). Stă pe cană și din Front nu e gol  
- [ ] **Treapta 3 — Lingurița.** Pe tăviță, lângă cană: un căuș (`Half Sphere`) și un mâner (`Box` subțire). Nu atinge cana  
- [ ] **Treapta 4 — Cuburile de zahăr.** `3` cuburi de `8` mm pe tăviță, la distanțe egale, făcute cu `Ctrl+D` repetat (ca la castel). Nu ating lingurița  
- [ ] **Treapta 5 — Ceașca.** O a doua cană, făcută de la zero, cu **altă formă**: un `Half Sphere` de `40 × 40 × 20` (rotit `180°`, ca la barcă), cu un `Hole` tot de tip `Half Sphere`, mai mic, care începe mai sus de fund și iese deasupra marginii. Are o toartă mică și stă pe tăviță  
- [ ] **Treapta 6 — Ceainicul.** Un obiect nou, lângă tăviță, pe plan: o sferă goală înăuntru (`Hole` sferă mai mică, deschisă sus), un cioc (con culcat cu un canal `Hole` prin el), o toartă (`Torus`) și un capac separat. Dacă trebuie să modifici golurile, faci Ungroup, apoi Group  

**Verificare (cu un coleg):** colegul numără în **cel mult 30 de secunde**: tăvița, capacul, lingurița, zahărul, ceașca și ceainicul. Apoi verifică din **Front** că nimic nu plutește și că ambele căni sunt cu adevărat goale.  

## Recapitulare rapidă
1. Cavitate = **Hole mai îngust**, care începe **mai sus de plan** (fund) și **iese deasupra** (deschis sus)  
2. Fundul și peretele nu trebuie să fie prea subțiri  
3. Toarta: <span style="color:#1E90FF;font-weight:700">Torus</span> rotit **90°**, în perete, nu în gol

**Quiz scurt:**  
- De ce golul **nu coboară până la plan**? Și de ce **iese deasupra** cănii?  
- Cum **rotești** toarta?  
- Ce se întâmplă dacă toarta ajunge în **gol**?

## Temă (opțional)
- Dacă ai doar Minim: acasă adaugi toarta, culorile și modelul (Pasul 2), în același `Prenume_Nume_T1_L09`.  
- Dacă ai Complet: într-un proiect nou `T1_L09_B`, o **vază** cu gât îngust.
- Dacă ai terminat și Bonusul: opțional, acasă, într-un proiect nou `T1_L09_C`, o **cutie** goală cu **capac** separat.  

## Ce urmează
În **Lecția 10** îți faci **insula în miniatură**, cu piese din toate lecțiile.
