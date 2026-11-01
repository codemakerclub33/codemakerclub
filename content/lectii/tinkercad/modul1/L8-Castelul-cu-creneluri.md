# Lecția 8 — Castelul cu creneluri
### Duplicare cu repetare
**Modulul 1 · Bazele Tinkercad**  
**Code Maker Club · Shape Starter**  

> Azi înveți **duplicarea cu repetare**: faci o piesă, o muți o dată, apeși <span style="color:#DC143C;font-weight:700">Ctrl+D</span> din nou — și Tinkercad repetă aceeași mutare.  
> Proiect: **„Castelul meu”**  
> Fișier: `Prenume_Nume_T1_L08`


---

## Obiectiv
La finalul orei ai un castel cu **zid**, **creneluri la distanțe egale** și **un turn**.  
**Minim:** zid `104 × 10 × 20`, **7 creneluri** `8 × 10 × 6` la `16` mm distanță, făcute cu <span style="color:#DC143C;font-weight:700">Ctrl+D</span> repetat, și un **turn** `26 × 26 × 40`, cu **cel puțin 8 unelte diferite**.  
**Ținta orei (Complet):** a doua parte: poartă (<span style="color:#00A600;font-weight:700">Hole</span> + <span style="color:#DC143C;font-weight:700">Group</span>), al doilea turn sau zid, steag, culori, cu cel puțin **6 unelte diferite**.

## De ce contează
În loc să tragi 20 de piese, faci **una**, o muți **o dată**, apoi **Ctrl+D** — Tinkercad repetă aceeași mutare.  
La oraș (M4) vei repeta ferestre la fel.

**Notă:** imprimanta 3D **nu** e folosită la oră — doar design. Minim e suficient pentru toată grupa; Complet mănâncă timp.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L7 · ce e un crenel (poză de castel) |
| 10–30 | Demo **de două ori**: copie → mută o dată → Ctrl+D → Ctrl+D… |
| 30–95 | Minim → Complet → Bonus |
| 95–120 | Recap, quiz, galerie |

**Grupe de unelte azi:**  
<span style="color:#1E90FF;font-weight:700">Forme</span> · <span style="color:#D400D4;font-weight:700">Vedere</span> · <span style="color:#E65722;font-weight:700">Mărime și loc</span> · <span style="color:#00A600;font-weight:700">Culoare</span> · <span style="color:#DC143C;font-weight:700">Taste de editare</span>  
*(culorile ajută să știi **ce fel de unealtă** e: o formă, o mișcare a camerei, o schimbare de mărime, culoarea sau o tastă.)*

**Uneltele de azi:**

| Unealtă | Ce face |
|---------|---------|
| <span style="color:#DC143C;font-weight:700">Ctrl+D</span> | copie **cu repetare**: mută o dată, apoi Ctrl+D repetă aceeași mutare |
| <span style="color:#1E90FF;font-weight:700">Cone</span> | con: acoperișul turnului |
| <span style="color:#00A600;font-weight:700">Hole</span> | gaură: poarta |
| <span style="color:#DC143C;font-weight:700">Ctrl+G</span> | Group: lipește piesele, iar Hole-ul taie |
| <span style="color:#E65722;font-weight:700">Snap Grid</span> | cât sare piesa când o muți (jos, dreapta) |
| <span style="color:#D400D4;font-weight:700">View Cube Top</span> | vederea de sus: verifici distanțele |

Celelalte unelte (formele de bază, vederea, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#DC143C;font-weight:700">Ctrl+Z</span>) le știi din lecțiile trecute.

---

## Pas cu pas

### 1) Proiect nou
1. **Create new design**  
2. Nume: `Prenume_Nume_T1_L08`  
3. Salvare automată — verifici numele

**Încearcă tu — Proiect nou (4 min)**  
- [ ] Proiectul e creat și redenumit `Prenume_Nume_T1_L08`  

### 2) Zidul
1. Tragi un <span style="color:#1E90FF;font-weight:700">Box</span> și îl faci **104 lungime × 10 grosime × 20 înălțime**  
2. Pe plan (dacă plutește → <span style="color:#E65722;font-weight:700">D</span>)

**Încearcă tu — Zidul (8 min)**  
- [ ] Zidul are **104 × 10 × 20** și stă pe plan  

### 3) Crenelurile (repetarea Ctrl+D)
1. Tragi un **Box mic** **8 × 10 × 6** (10 = cât grosimea zidului) și îl pui în **capătul de sus** al zidului: ridicat cu <span style="color:#E65722;font-weight:700">conul negru</span> la **20** — acesta e primul crenel  
2. Selectezi crenelul → <span style="color:#DC143C;font-weight:700">Ctrl+D</span> (Mac: <span style="color:#DC143C;font-weight:700">Cmd+D</span>) — copia apare **peste** primul  
3. **Muți copia o singură dată** de-a lungul zidului, cu **16 mm** (8 mm crenel + 8 mm gol): o tragi pe lungimea zidului cu mouse-ul (înălțimea rămâne 20 — nu o ridici/cobori). Cu Snap Grid de 1 mm, tragerea merge din mm în mm; 16 mm = un crenel și un gol de aceeași mărime  
4. Apeși **Ctrl+D din nou** — apare automat încă una, **la aceeași distanță**  
5. Repeți <span style="color:#DC143C;font-weight:700">Ctrl+D</span> până ajungi la celălalt capăt: în total **7 creneluri** (ultimul se termină chiar la marginea zidului de 104)  
6. **Atenție:** nu muți alte copii între timp — doar prima mutare, apoi doar Ctrl+D  
7. Dacă golurile nu ies egale cu crenelurile, nu e grav — important e să fie **toate la fel**; altfel <span style="color:#DC143C;font-weight:700">Ctrl+Z</span> și refaci prima mutare

**Încearcă tu — Crenelurile (repetarea Ctrl+D) (20 min)**  
- [ ] Ai **7** creneluri, toate la aceeași distanță  
- [ ] Primul crenel e ridicat la **20**  

### 4) Turnul
1. <span style="color:#1E90FF;font-weight:700">Cylinder</span> **26 × 26 × 40**, pe plan, cu centrul pe **capătul zidului** (jumătate intră în zid; primul crenel se ascunde în turn — e OK)  
2. Acoperiș: <span style="color:#1E90FF;font-weight:700">Cone</span> **30 × 30 × 15** ridicat la **40** **sau** creneluri mici pe margine (Ctrl+D ca la zid)  
3. Turnul pe plan; dacă plutește → <span style="color:#E65722;font-weight:700">D</span> (dar **nu** pe con — conul îl ridici la 40)

**Încearcă tu — Turnul (15 min)**  
- [ ] Turnul are **26 × 26 × 40**, centrat pe capătul zidului  
- [ ] Acoperișul (con la **40**) sau crenelurile mici sunt la locul lor  

### 5) Complet
1. **Al doilea turn** la celălalt capăt **sau** zid pe încă o latură (Ctrl+D pe zid + rotire dacă trebuie)  
2. **Poarta (Hole):**
   - un <span style="color:#1E90FF;font-weight:700">Box</span> **20 × 14 × 14** (lățime × grosime × înălțime), pus pe <span style="color:#00A600;font-weight:700">Hole</span>, pe plan, la **mijlocul** zidului — trece **prin** zid (14 > 10 grosime, iese pe ambele fețe) și nu atinge crenelurile (14 < 20)  
   - selectezi **zidul + piesa Hole** (Shift+click — nu <span style="color:#DC143C;font-weight:700">Ctrl+A</span> dacă ai deja turnuri și creneluri pe plan)  
   - <span style="color:#DC143C;font-weight:700">Ctrl+G</span> (Mac: <span style="color:#DC143C;font-weight:700">Cmd+G</span>) — se taie poarta  
   - *(Arc cu cilindru culcat deasupra = Bonus, pentru cine apucă)*  
3. **Steag:** un stâlp (Cylinder **2 × 2 × 12**) înfipt 3 mm în vârful conului + un Box **8 × 1 × 5** lipit de capătul de sus al stâlpului  
4. <span style="color:#00A600;font-weight:700">Color</span>

**Încearcă tu — Complet (25 min)**  
- [ ] Ai al doilea turn sau zid pe încă o latură  
- [ ] Poarta (<span style="color:#00A600;font-weight:700">Hole</span>) taie zidul pe ambele fețe  
- [ ] Steagul e înfipt în vârf  
- [ ] Piesele au culori

---

## Greșeli frecvente
1. **Crenelurile sunt la distanțe diferite** — ai mutat și a doua copie; după prima mutare, doar <span style="color:#DC143C;font-weight:700">Ctrl+D</span>.  
2. **Ctrl+D, dar piesa e peste originală** — muți copia **o dată**, apoi Ctrl+D din nou.  
3. **Distanța e greșită** — <span style="color:#DC143C;font-weight:700">Ctrl+Z</span>, refaci prima mutare, apoi Ctrl+D.  
4. **Poarta nu iese** — Hole-ul nu trece prin zid sau nu ai dat <span style="color:#DC143C;font-weight:700">Group</span>.  
5. **Turnul plutește** — <span style="color:#E65722;font-weight:700">D</span>.  
6. **Group pe tot castelul** — selectezi doar zidul + Hole-ul porții.

---

## De făcut azi — „Castelul meu”

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1** — zid `104 × 10 × 20`, **7 creneluri** egale, făcute cu **Ctrl+D** repetat, și un turn `26 × 26 × 40`, cu **cel puțin 8 unelte diferite** |
| **Complet (ținta orei)** | Minim + **Pasul 2** — poartă, al doilea turn sau zid, steag, culori, cu cel puțin **6 unelte diferite** |

Dacă rămâi în urmă: **oprește-te la Minim**. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Minim
- [ ] Zid pe plan  
- [ ] Creneluri egale (copie → mutare o dată → Ctrl+D…)  
- [ ] Turn  

- [ ] Ai folosit cel puțin **8 unelte diferite**: <span style="color:#1E90FF;font-weight:700">Box</span>, <span style="color:#1E90FF;font-weight:700">Cylinder</span>, <span style="color:#1E90FF;font-weight:700">Cone</span>, <span style="color:#DC143C;font-weight:700">Ctrl+D</span>, <span style="color:#E65722;font-weight:700">conul negru</span>, <span style="color:#DC143C;font-weight:700">Ctrl+Z</span>, <span style="color:#E65722;font-weight:700">D</span>, <span style="color:#D400D4;font-weight:700">View Cube</span>, <span style="color:#E65722;font-weight:700">pătrățelele albe</span>  

**→ Ai Minim când:** crenelurile par făcute cu rigla.

### Pasul 2 — Complet
- [ ] Poartă (Hole + Group)  
- [ ] Al doilea turn sau zid nou  
- [ ] Steag · culori · numele `T1_L08` e corect
- [ ] Partea a doua are cel puțin **6 unelte diferite**: <span style="color:#00A600;font-weight:700">Hole</span>, <span style="color:#DC143C;font-weight:700">Ctrl+G</span>, <span style="color:#1E90FF;font-weight:700">Box</span>, <span style="color:#E65722;font-weight:700">Shift+click</span>, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#1E90FF;font-weight:700">Cylinder</span>  

**Gata Complet când:** poartă, al doilea turn sau zid, steag, culori și nimic nu plutește.

---

## Bonus ★★★ — Provocare: Castelul cu patru ziduri
*Doar dacă ai terminat Complet.*

- [ ] Schimbă mărimea turnului și culorile  
- [ ] **Provocarea:** construiești **4 ziduri** care formează un pătrat, cu **4 turnuri** (câte unul la fiecare colț) și **o poartă**. Toate crenelurile sunt la **aceeași distanță**, iar nimic nu plutește. Un coleg numără **4 turnuri** și găsește poarta în cel mult **20 de secunde**.  

## Recapitulare rapidă
1. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → mută copia **o dată** → <span style="color:#DC143C;font-weight:700">Ctrl+D</span> = piese la aceeași distanță  
2. <span style="color:#00A600;font-weight:700">Hole</span> prin zid + <span style="color:#DC143C;font-weight:700">Group</span> = poartă  
3. Greșeală → <span style="color:#DC143C;font-weight:700">Ctrl+Z</span> și refaci prima mutare

## Schema pe scurt *(pe foaie — dacă o printezi separat)*

**Minim:** zid → crenel → Ctrl+D → mută o dată → Ctrl+D… → turn  
**Complet:** + poartă Hole+Group, turn 2, steag

**Quiz scurt:**  
- Cum faci **10 creneluri** la distanțe egale?  
- Cum faci o **poartă** în zid?  
- Ce faci dacă **distanța** e greșită?

## Temă
Opțional: un gard cu stâlpi repetați (Ctrl+D) — același `T1_L08` sau proiect nou.

## Ce urmează
În **Lecția 9** faci o **cană** goală pe dinăuntru, cu **toartă**.
