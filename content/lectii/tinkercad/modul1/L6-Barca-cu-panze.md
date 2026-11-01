# Lecția 6 — Barca cu pânze
### Forme speciale: semisferă și pană
**Modulul 1 · Bazele Tinkercad**  
**Code Maker Club · Shape Starter**  

> Azi împarți un obiect real în **forme simple**: semisferă, pană, cilindru → o barcă.  
> Proiect: **„Barca mea”**  
> Fișier: `Prenume_Nume_T1_L06`


---

## Obiectiv
La finalul orei ai o barcă recunoscută din lateral: **corp** + **catarg** + **cel puțin o pânză**, pe plan.  
**Minim:** <span style="color:#1E90FF;font-weight:700">Half Sphere</span> `60 × 20 × 15` cu partea plată **sus**, catarg `3 × 3 × 40` la `14`, o pânză <span style="color:#1E90FF;font-weight:700">Wedge</span> de `2` mm la `15`, nimic nu plutește (verificat din <span style="color:#D400D4;font-weight:700">Front</span>), cu **cel puțin 8 unelte diferite**.  
**Ținta orei (Complet):** a doua parte: a doua pânză oglindită, steag `8 × 1 × 5` la `49`, apă albastră `90 × 50 × 8`, culori, cu cel puțin **6 unelte diferite**.

## De ce contează
Învățăm să privim un obiect real și să îl **împărțim în forme simple** — ca racheta și castelul de mai târziu.

**Notă:** imprimanta 3D **nu** e folosită la oră — doar design.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L5 · poze cu bărci — numim formele din ele |
| 10–30 | Demo: <span style="color:#1E90FF;font-weight:700">Half Sphere</span> răsturnată, <span style="color:#1E90FF;font-weight:700">Wedge</span> ca pânză |
| 30–95 | Minim → Complet → Bonus |
| 95–120 | Recap, quiz, galerie |

**Grupe de unelte azi:**  
<span style="color:#1E90FF;font-weight:700">Forme</span> · <span style="color:#D400D4;font-weight:700">Vedere</span> · <span style="color:#E65722;font-weight:700">Mărime și loc</span> · <span style="color:#00A600;font-weight:700">Culoare</span> · <span style="color:#DC143C;font-weight:700">Taste de editare</span>  
*(culorile ajută să știi **ce fel de unealtă** e: o formă, o mișcare a camerei, o schimbare de mărime, culoarea sau o tastă.)*

**Uneltele de azi:**

| Unealtă | Ce face |
|---------|---------|
| <span style="color:#1E90FF;font-weight:700">Half Sphere</span> | semisferă: corpul bărcii |
| <span style="color:#1E90FF;font-weight:700">Wedge</span> | pană: pânzele |
| <span style="color:#E65722;font-weight:700">săgeata curbă</span> | rotește piesa (aici: `180°` pentru barcă) |
| <span style="color:#E65722;font-weight:700">conul negru</span> | ridică catargul și pânza la înălțimea corectă |
| <span style="color:#E65722;font-weight:700">M</span> | oglindește a doua pânză |
| <span style="color:#D400D4;font-weight:700">View Cube Front</span> | vederea din lateral: verifici barca |

Celelalte unelte (formele de bază, vederea, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#DC143C;font-weight:700">Ctrl+Z</span>) le știi din lecțiile trecute.

---

## Pas cu pas

### 1) Proiect nou
1. **Create new design**  
2. Nume: `Prenume_Nume_T1_L06`  
3. Salvare automată — verifici numele

**Încearcă tu — Proiect nou (4 min)**  
- [ ] Proiectul e creat și redenumit `Prenume_Nume_T1_L06`  

### 2) Corpul bărcii
1. Tragi un <span style="color:#1E90FF;font-weight:700">Half Sphere</span> din Basic Shapes  
2. Îl scalezi **lung și îngust** (<span style="color:#E65722;font-weight:700">pătrățelele albe</span>): **60 lungime × 20 lățime × 15 înălțime**  
3. **Partea plată trebuie să fie sus**, partea rotundă dedesubt (ca o barcă pe apă). Un Half Sphere nou are de obicei partea rotundă **sus** — deci trebuie întors  
4. Îl **rotești la 180°** cu o săgeată curbă de pe latură (2 × 90°, pași de 22,5°; vezi unghiul afișat)  
5. Verifici din <span style="color:#D400D4;font-weight:700">Front</span> sau <span style="color:#D400D4;font-weight:700">Right</span>: vezi rotundul jos, plat sus?  
6. Baza (acum vârful rotund) să fie pe plan (dacă plutește → <span style="color:#E65722;font-weight:700">D</span>)

**Încearcă tu — Corpul bărcii (12 min)**  
- [ ] Half Sphere **60 × 20 × 15**, partea plată **sus**  
- [ ] Din <span style="color:#D400D4;font-weight:700">Front</span>: rotund jos, plat sus  

### 3) Catargul
1. <span style="color:#1E90FF;font-weight:700">Cylinder</span> subțire și înalt: **3 × 3 × 40**  
2. Îl pui pe **mijlocul** bărcii, pe partea plată de sus (verifici din <span style="color:#D400D4;font-weight:700">Top</span>)  
3. Îl ridici cu **<span style="color:#E65722;font-weight:700">conul negru</span>** la **14** — puntea e la 15, deci catargul intră 1 mm în corp  
4. Verifici din <span style="color:#D400D4;font-weight:700">Front</span>: catargul intră puțin în barcă (nu plutește)

**Încearcă tu — Catargul (10 min)**  
- [ ] Catargul are **3 × 3 × 40**, e pe mijlocul bărcii, la **14**  
- [ ] Din <span style="color:#D400D4;font-weight:700">Front</span>, intră 1 mm în corp  

### 4) Pânza
1. Tragi un <span style="color:#1E90FF;font-weight:700">Wedge</span> (pană)  
2. Îl rotești pe verticală până când, din <span style="color:#D400D4;font-weight:700">Front</span>, vezi un **triunghi** (dacă vezi dreptunghi, rotești 90° în jurul axei de sus). Latura **dreaptă, verticală** o pui lângă catarg  
3. Îl scalezi **subțire** (pânză, nu zid): **2 mm** grosime, ~**25 lungime × 30 înălțime** văzut din Front  
4. Îl ridici cu <span style="color:#E65722;font-weight:700">conul negru</span> la **15** (pe punte) și îl muți cu mouse-ul din <span style="color:#D400D4;font-weight:700">Top</span> / <span style="color:#D400D4;font-weight:700">Front</span> până latura dreaptă **intră 1 mm** în catarg  
5. <span style="color:#E65722;font-weight:700">L</span> nu e necesar azi — muți manual

**Încearcă tu — Pânza (12 min)**  
- [ ] Din <span style="color:#D400D4;font-weight:700">Front</span>, pânza e un **triunghi** cu latura dreaptă lângă catarg  
- [ ] Pânza e subțire (**2 mm**), la **15**, și intră 1 mm în catarg  

### 5) Complet
1. A doua pânză mai mică, de **cealaltă parte** a catargului: <span style="color:#DC143C;font-weight:700">Ctrl+D</span> pe prima, o micșorezi cu <span style="color:#E65722;font-weight:700">Shift</span>, o oglindești cu <span style="color:#E65722;font-weight:700">M</span> (ca în L3), ca latura dreaptă să fie tot lângă catarg, apoi o muți  
2. **Steag:** Box plat mic (**8 × 1 × 5**) ridicat la **49**, lipit de vârful catargului (catargul se termină la 54)  
3. <span style="color:#00A600;font-weight:700">Color</span> pe barcă, pânze, steag

**Încearcă tu — Complet (20 min)**  
- [ ] A doua pânză e oglindită, pe cealaltă parte a catargului  
- [ ] Steagul e la vârful catargului  
- [ ] Piesele au culori  

### 6) Apa (Complet)
1. Box plat, **albastru**, **90 × 50 × 8**, pe plan, **în jurul** bărcii (barca e pe plan, deci jumătatea ei de jos intră în apă). Îl centrezi din <span style="color:#D400D4;font-weight:700">Top</span>  
2. Apa are 8 mm, barca 15: puțin peste jumătate din corp e „în apă”, restul iese deasupra  
3. Verifici din <span style="color:#D400D4;font-weight:700">Front</span>: barca nu „zboară” deasupra apei, apa nu acoperă puntea

**Încearcă tu — Apa (12 min)**  
- [ ] Apa e albastră, **90 × 50 × 8**, în jurul bărcii  
- [ ] Barca nu „zboară” și apa nu acoperă puntea

---

## Greșeli frecvente
1. **Barca cu fundul plat în jos / invers** — rotești la 180° și verifici din Front.  
2. **Catargul nu stă pe barcă** — <span style="color:#E65722;font-weight:700">conul negru</span>, apoi Front.  
3. **Pânza prea groasă** — scalezi pe grosime.  
4. **Pânza departe de catarg** — o muți până atinge catargul.  
5. **Ceva plutește** — <span style="color:#E65722;font-weight:700">D</span> pe bază sau coborâre cu <span style="color:#E65722;font-weight:700">conul negru</span>.  
6. **Apa deasupra bărcii** — barca stă *în* apă, nu sub ea; apa are doar 8 mm.  
7. **D pe catarg sau pe pânză** — le coboară în corp; le ridici cu <span style="color:#E65722;font-weight:700">conul negru</span>.

---

## De făcut azi — „Barca mea”

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1** — **Half Sphere** `60 × 20 × 15` cu partea plată sus, catarg, o pânză **Wedge** subțire, nimic nu plutește, verificat din **Front**, cu **cel puțin 8 unelte diferite** |
| **Complet (ținta orei)** | Minim + **Pasul 2** — a doua pânză, steag, apă, culori, cu cel puțin **6 unelte diferite** |

Dacă rămâi în urmă: **oprește-te la Minim**. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Minim
- [ ] Corp (<span style="color:#1E90FF;font-weight:700">Half Sphere</span>) corect orientat  
- [ ] Catarg pe corp  
- [ ] Pânză lipită de catarg  
- [ ] Din <span style="color:#D400D4;font-weight:700">Front</span>/<span style="color:#D400D4;font-weight:700">Right</span>: se recunoaște o barcă, nimic nu plutește  

- [ ] Ai folosit cel puțin **8 unelte diferite**: <span style="color:#1E90FF;font-weight:700">Half Sphere</span>, <span style="color:#1E90FF;font-weight:700">Cylinder</span>, <span style="color:#1E90FF;font-weight:700">Wedge</span>, <span style="color:#E65722;font-weight:700">săgeata curbă</span>, <span style="color:#E65722;font-weight:700">pătrățelele albe</span>, <span style="color:#E65722;font-weight:700">conul negru</span>, <span style="color:#E65722;font-weight:700">D</span>, <span style="color:#D400D4;font-weight:700">View Cube</span>, <span style="color:#E65722;font-weight:700">Shift</span>  

**→ Ai Minim când:** profesorul zice „arată-mi barca din lateral” și se vede clar barca.

### Pasul 2 — Complet
- [ ] A 2-a pânză  
- [ ] Steag  
- [ ] Apă + culori · numele `T1_L06` e corect
- [ ] Partea a doua are cel puțin **6 unelte diferite**: <span style="color:#1E90FF;font-weight:700">Box</span>, <span style="color:#DC143C;font-weight:700">Ctrl+D</span>, <span style="color:#E65722;font-weight:700">M</span>, <span style="color:#E65722;font-weight:700">Shift</span>, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#E65722;font-weight:700">conul negru</span>  

**Gata Complet când:** a doua pânză, steag, apă, culori și nimic nu plutește.

---

## Bonus ★★★ — Provocare: Barca cu cabină și vâsle
*Doar dacă ai terminat Complet.*

- [ ] Schimbă culoarea pânzelor și a steagului  
- [ ] **Provocarea:** adaugi o **cabină** (Box `12 × 10 × 8`) pe punte, **lângă catarg** (nu peste el), la înălțimea `15`, și **2 vâsle** din cilindri subțiri, rotiți cu cel puțin `45°`. Din Front și din Right, un coleg recunoaște **4 părți** (corp, cabină, catarg, vâsle) în cel mult **30 de secunde**.  

## Recapitulare rapidă
1. Orice obiect se descompune în **forme simple**  
2. **180°** cu <span style="color:#E65722;font-weight:700">săgeata curbă</span> răstoarnă o piesă  
3. <span style="color:#D400D4;font-weight:700">Front</span> / <span style="color:#D400D4;font-weight:700">Right</span> = verifici lateral

## Schema pe scurt *(pe foaie — dacă o printezi separat)*

**Minim:** Half Sphere (plat sus) → catarg → Wedge pânză  
**Complet:** + pânză 2, steag, apă, culori

**Quiz scurt:**  
- Din ce formă ai făcut **corpul**?  
- Cum **răstorni** o piesă?  
- Din ce vedere verifici că **catargul stă pe barcă**?

## Temă
Opțional: un vapor sau o barcă cu motor — același `T1_L06` sau proiect nou.

## Ce urmează
În **Lecția 7** construiești o **rachetă**, cu **simetrie în jurul unei axe**.
