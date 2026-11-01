# Lecția 9 — Carcasă cu măsurători precise
### Măsurare, joc și decupaje
**Modulul 2 · Obiecte utile**  
**Code Maker Club · Object Maker**  

> Azi faci **carcase** pentru o placă electronică reală: măsori placa, adaugi joc și decupezi porturile.  
> Proiect: **„Carcasa mea”**  
> Fișier: `Prenume_Nume_T2_L09` (obiectul 1) și `Prenume_Nume_T2_L09_B` (obiectul 2)


---

## Obiectiv
La finalul orei ai **două obiecte utile**: **Carcasa pentru Arduino Uno** și **Carcasa pentru micro:bit**.  
**Minim:** **Obiectul 1:** carcasa Arduino (cutie `80 · 65 · 28`, gol `70 · 55`, porturi `15 · 10 · 16` și `22 · 10 · 16`, capac cu dop `69 · 54` și `3` fante) și **Obiectul 2:** carcasa micro:bit (cutie `61 · 51 · 23`, gol `51 · 41`, decupaj USB, capac cu dop `50 · 40` și **3 ferestre**), ambele cu capacul separat, cu **cel puțin 8 unelte diferite**.  
**Ținta orei (Complet):** a doua parte: text pe capac, <span style="color:#E65722;font-weight:700">Ruler</span> pe joc și culoare, cu cel puțin **6 unelte diferite**.

## De ce contează
O carcasă bună pornește de la **placa reală**. Măsori, rotunjești în **sus**, adaugi **joc**, apoi faci găuri pentru porturi **mai mari** decât portul.  

**Regula azi:**  
golul = placa **+ 1 mm** (`0,5` mm pe fiecare parte) · dopul capacului = golul **− 1 mm** · peretele = **5 mm**

**Notă:** mărimile plăcilor din lecție sunt **exemple rotunjite** (Arduino Uno `68,6 × 53,4` rotunjit la `69 × 54`, micro:bit `50 × 40`, cu o grosime de `11`–`12` mm cu tot cu componente). Dacă ai placa în față, o măsori tu cu o riglă și corectezi numerele.  
**Notă:** imprimanta 3D **nu** e folosită la oră — doar design.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap lecția trecută · privim obiecte reale: ce părți au? |
| 10–55 | **Obiectul 1** — Carcasa Arduino (Minim) |
| 55–90 | **Obiectul 2** — Carcasa micro:bit (Minim) |
| 90–110 | **Complet** pe primul obiect |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme sau ca temă |

**Grupe de unelte azi:**  
<span style="color:#1E90FF;font-weight:700">Forme</span> · <span style="color:#D400D4;font-weight:700">Vedere</span> · <span style="color:#E65722;font-weight:700">Mărime și loc</span> · <span style="color:#00A600;font-weight:700">Culoare</span> · <span style="color:#DC143C;font-weight:700">Taste de editare</span>  
*(culorile ajută să știi **ce fel de unealtă** e: o formă, o mișcare a camerei, o schimbare de mărime, culoarea sau o tastă.)*

**Uneltele de azi:**

| Unealtă | Ce face |
|---------|---------|
| <span style="color:#E65722;font-weight:700">Ruler</span> | măsori placa și verifici jocul |
| <span style="color:#E65722;font-weight:700">mărimi cu numere</span> | scrii mărimile calculate: placă + 1 mm |
| <span style="color:#00A600;font-weight:700">Hole</span> | golul plăcii, porturile, fantele și ferestrele |
| <span style="color:#E65722;font-weight:700">Align (L)</span> | centrează golul și piesele capacului |
| <span style="color:#E65722;font-weight:700">conul negru</span> | ridică golul sau portul la înălțimea lor |
| <span style="color:#E65722;font-weight:700">săgețile de la tastatură</span> | mută portul și fantele cu pași de `5` mm |
| <span style="color:#DC143C;font-weight:700">Ctrl+D</span> | a doua și a treia fantă, egale cu prima |
| <span style="color:#DC143C;font-weight:700">Ctrl+G</span> | Group: golurile taie cutia sau capacul |

Celelalte unelte (formele de bază, vederea, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#DC143C;font-weight:700">Ctrl+Z</span>) le știi din lecțiile trecute.

---

## Pas cu pas

**Obiectul 1 — Carcasa pentru Arduino Uno**

### 1) Proiect nou și calculul
1. **Create new design** · nume `Prenume_Nume_T2_L09`  
2. Snap Grid: **5.0 mm**  
3. Pe foaie, cu placa Arduino Uno (`69 × 54`, rotunjită în sus):  
   gol = 69 + 1 = **70** și 54 + 1 = **55** · exterior = 70 + 10 = **80** și 55 + 10 = **65**  
   dop pentru capac = **69 × 54** (golul − 1)

**Încearcă tu — Proiect nou și calculul (5 min)**  
- [ ] Ai calculat pe foaie: golul, exteriorul și dopul pentru placa ta  

### 2) Cutia
1. <span style="color:#1E90FF;font-weight:700">Box</span> → **80 · 65 · 28**: cutia  
2. Alt <span style="color:#1E90FF;font-weight:700">Box</span> → **70 · 55 · 25** → <span style="color:#00A600;font-weight:700">Hole</span>: golul  
3. Selectezi golul și cutia → <span style="color:#E65722;font-weight:700">L</span> → **mijloc** pe stânga–dreapta și pe față–spate  
4. Ridici golul cu **<span style="color:#E65722;font-weight:700">conul negru</span>** la **5** (scrii 5): fundul rămâne de `5` mm, iar golul iese deasupra cutiei (`30 > 28`)  

**Încearcă tu — Cutia (10 min)**  
- [ ] Cutia are **80 · 65 · 28**, golul **70 · 55 · 25**, centrat  
- [ ] Golul e ridicat la `5` mm: fundul e închis  

### 3) Porturile de alimentare și USB
*Pe desenul plăcii, conectorii ies cam `4,5` mm în afara plăcii, în peretele din stânga. Alimentarea e lată de cam `9` mm, iar USB-B de cam `18` mm. Găurile le facem mai mari decât ele.*

1. <span style="color:#1E90FF;font-weight:700">Box</span> → **15 · 10 · 16** → <span style="color:#00A600;font-weight:700">Hole</span>: portul de **alimentare**  
2. Selectezi portul și cutia → <span style="color:#E65722;font-weight:700">L</span> → **stânga** pe stânga–dreapta și **față** pe față–spate. Portul iese pe peretele din stânga  
3. Ridici portul cu **<span style="color:#E65722;font-weight:700">conul negru</span>** la **5**. Apoi <span style="color:#E65722;font-weight:700">săgeata spre spate</span> de `1` ori (`5` mm): portul e la `5` mm de marginea din față  
4. <span style="color:#1E90FF;font-weight:700">Box</span> → **22 · 10 · 16** → <span style="color:#00A600;font-weight:700">Hole</span>: portul **USB**. La fel: <span style="color:#E65722;font-weight:700">L</span> cu cutia, **stânga** și **față**, ridicat la **5**, apoi <span style="color:#E65722;font-weight:700">săgeata spre spate</span> de `6` ori (`30` mm): portul e la `30` mm de marginea din față  

**Încearcă tu — Porturile de alimentare și USB (10 min)**  
- [ ] Alimentarea (**15 · 10 · 16**) și USB (**22 · 10 · 16**) sunt Hole pe peretele din stânga, ridicate la `5` mm  
- [ ] Sunt la `5` mm și `30` mm de marginea din față, deci nu se ating  

### 4) Capacul
1. <span style="color:#1E90FF;font-weight:700">Box</span> → **69 · 54 · 4** pe plan, **lângă** cutie: dopul  
2. <span style="color:#1E90FF;font-weight:700">Box</span> → **80 · 65 · 4**: plăcuța capacului  
3. Selectezi dopul și plăcuța → <span style="color:#E65722;font-weight:700">L</span> → **mijloc** pe stânga–dreapta și pe față–spate  
4. Ridici plăcuța cu **<span style="color:#E65722;font-weight:700">conul negru</span>** la **3**: se așază **peste** dop și se înfige `1` mm în el  

**Încearcă tu — Capacul (12 min)**  
- [ ] Dopul are **69 · 54 · 4**, plăcuța **80 · 65 · 4**  
- [ ] Plăcuța e la `3` mm și stă peste dop, centrată  

### 5) Fantele, Group și verificare
1. <span style="color:#1E90FF;font-weight:700">Box</span> → **40 · 4 · 10** → <span style="color:#00A600;font-weight:700">Hole</span>: prima fantă de aerisire  
2. Selectezi fanta și plăcuța → <span style="color:#E65722;font-weight:700">L</span> → **mijloc** pe stânga–dreapta și pe față–spate. Apoi <span style="color:#E65722;font-weight:700">săgeata spre spate</span> de `2` ori (`10` mm)  
3. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → muți copia **10 mm** spre față (`2` apăsări). <span style="color:#DC143C;font-weight:700">Ctrl+D</span> din nou: a treia fantă, tot la `10` mm. Fantele sunt la `−10`, `0` și `+10` mm de centru  
4. Selectezi **doar** piesele capacului (dop, plăcuță, cele 3 fante; nu și cutia) → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  
5. Selectezi cutia cu golul și cele 2 porturi → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>. <span style="color:#D400D4;font-weight:700">Top</span>: placa încape în gol, capacul stă lângă cutie  

**Încearcă tu — Fantele, Group și verificare (10 min)**  
- [ ] Cele **3** fante (**40 · 4 · 10**) sunt egale, la `10` mm una de alta  
- [ ] Cutia și capacul sunt **două** grupuri separate  

**Obiectul 2 — Carcasa pentru micro:bit**

### 6) micro:bit: proiect nou, cutia și decupajul USB
1. Dai **Create new design** și scrii numele `Prenume_Nume_T2_L09_B`. Snap Grid: **5.0 mm**.  
2. Măsori placa (exemplu `50 × 40`, grosime cam `12` mm cu tot cu componente) și aplici regula: gol **51 × 41**, exterior `51 + 10 = 61` și `41 + 10 = 51`, dop **50 × 40**. Placa stă pe componentele din spate, deci golul trebuie să fie adânc de cel puțin `16` mm  
3. <span style="color:#1E90FF;font-weight:700">Box</span> **61 · 51 · 23**: cutia. Alt <span style="color:#1E90FF;font-weight:700">Box</span> **51 · 41 · 25** → <span style="color:#00A600;font-weight:700">Hole</span>, selectezi golul și cutia → <span style="color:#E65722;font-weight:700">L</span> → **mijloc** pe stânga–dreapta și pe față–spate. Ridici golul cu **<span style="color:#E65722;font-weight:700">conul negru</span>** la **5**  
4. <span style="color:#1E90FF;font-weight:700">Box</span> **14 · 10 · 8** → <span style="color:#00A600;font-weight:700">Hole</span>: decupajul micro-USB. Selectezi decupajul și cutia → <span style="color:#E65722;font-weight:700">L</span> → **mijloc** pe stânga–dreapta și **spate** pe față–spate. Ridici decupajul cu <span style="color:#E65722;font-weight:700">conul negru</span> la **6**  
5. Selectezi cutia, golul și decupajul → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  

**Încearcă tu — micro:bit: proiect nou, cutia și decupajul USB (12 min)**  
- [ ] Cutia are **61 · 51 · 23**, golul **51 · 41 · 25**, la `5` mm de plan  
- [ ] Decupajul USB (**14 · 10 · 8**) e centrat pe peretele din spate, la `6` mm de plan  

### 7) micro:bit: capacul cu trei ferestre
1. <span style="color:#1E90FF;font-weight:700">Box</span> **50 · 40 · 4** pe plan, lângă cutie: dopul. <span style="color:#1E90FF;font-weight:700">Box</span> **61 · 51 · 4**: plăcuța → <span style="color:#E65722;font-weight:700">L</span> → **mijloc** pe stânga–dreapta și pe față–spate. Ridici plăcuța la **3**  
2. <span style="color:#1E90FF;font-weight:700">Box</span> **25 · 25 · 10** → <span style="color:#00A600;font-weight:700">Hole</span>: fereastra pentru matricea de LED-uri. <span style="color:#E65722;font-weight:700">L</span> cu plăcuța → **mijloc** pe stânga–dreapta și pe față–spate  
3. <span style="color:#1E90FF;font-weight:700">Cylinder</span> **10 · 10 · 10** → <span style="color:#00A600;font-weight:700">Hole</span>: butonul A. <span style="color:#E65722;font-weight:700">L</span> cu plăcuța → **mijloc** pe ambele direcții, apoi <span style="color:#E65722;font-weight:700">săgeata stânga</span> de `4` ori (`20` mm)  
4. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → muți copia **40 mm** spre dreapta (`8` apăsări): butonul B, la `20` mm de centru  
5. Selectezi **doar** piesele capacului (dop, plăcuță, cele 3 ferestre) → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  

**Încearcă tu — micro:bit: capacul cu trei ferestre (14 min)**  
- [ ] Dopul are **50 · 40 · 4**, plăcuța **61 · 51 · 4**, la `3` mm  
- [ ] Capacul are **3** ferestre: matricea **25 · 25** și două butoane **Ø10** la `20` mm de centru  

**Complet**

### 8) Complet — text, Ruler, culoare
*Deschizi din nou proiectul `Prenume_Nume_T2_L09` din lista **Designs**.*

1. <span style="color:#1E90FF;font-weight:700">Text</span> → scrii **UNO**, înălțimea **2** mm, lățimea cam **30**. Selectezi textul și capacul → <span style="color:#E65722;font-weight:700">L</span> → **mijloc** pe stânga–dreapta și pe față–spate. Ridici textul cu <span style="color:#E65722;font-weight:700">conul negru</span> la **6**: se înfige `1` mm în plăcuță, iar `1` mm iese deasupra  
2. <span style="color:#E65722;font-weight:700">Ruler</span>: pui rigla pe golul cutiei (**70 · 55**) și pe dop (**69 · 54**): jocul e `0,5` mm pe fiecare parte  
3. <span style="color:#00A600;font-weight:700">Color</span>: cutia într-o culoare, capacul în alta  

**Încearcă tu — Complet — text, Ruler, culoare (12 min)**  
- [ ] Textul **UNO** (`2` mm înălțime, din care `1` mm iese) e centrat pe capac  
- [ ] Cu <span style="color:#E65722;font-weight:700">Ruler</span>: golul **70 · 55** și dopul **69 · 54**, deci `0,5` mm joc pe parte  
- [ ] Cutia și capacul au culori diferite  

---

## Greșeli frecvente
1. **Placa nu încape în gol** — ai uitat jocul: golul trebuie să fie placa **+ 1 mm**.  
2. **Capacul nu intră** — dopul are aceeași mărime ca golul. Dopul trebuie să fie golul **− 1 mm**.  
3. **Portul e prea sus sau prea jos** — Hole-ul nu e ridicat la `5` mm.  
4. **Portul nu taie peretele** — lipsește <span style="color:#DC143C;font-weight:700">Ctrl+G</span>, sau Hole-ul nu ajunge până la perete (l-ai aliniat pe stânga, nu pe mijloc).  
5. **Am grupat capacul cu cutia** — nu folosi <span style="color:#DC143C;font-weight:700">Ctrl+A</span>: selectezi piesele capacului cu Shift+click.  
6. **Fantele nu sunt egale** — la <span style="color:#DC143C;font-weight:700">Ctrl+D</span> ai mutat altă distanță a doua oară. Mută de fiecare dată cu `2` apăsări.  
7. **Placa mea e altfel decât în lecție** — o măsori, rotunjești în sus, apoi aplici aceeași regulă `+ 1 mm`.  
8. **Dopul iese în afara plăcuței** — dopul trebuie să fie **mai mic** decât plăcuța capacului.  

---

## De făcut azi — „Carcasa mea”

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pașii 1 și 2** — carcasa Arduino (cutie `80 · 65 · 28`, gol `70 · 55`, 2 porturi, capac cu 3 fante) **și** carcasa micro:bit (cutie `61 · 51 · 23`, gol `51 · 41`, decupaj USB, capac cu 3 ferestre), cu **cel puțin 8 unelte diferite** |
| **Complet (ținta orei)** | Minim + **Pasul 3** — text pe capac, `Ruler` pe joc, culori, cu cel puțin **6 unelte diferite** |

Dacă rămâi în urmă: **oprește-te la Minim**. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Obiectul 1: Carcasa Arduino *(Minim)*
- [ ] Calcul pe foaie: gol `70 × 55`, exterior `80 × 65`, dop `69 × 54`  
- [ ] Cutia **80 · 65 · 28** cu golul **70 · 55 · 25**, centrat, la `5` mm de plan  
- [ ] **2** porturi pe peretele din stânga: **15 · 10 · 16** la `5` mm și **22 · 10 · 16** la `30` mm de față  
- [ ] Capac: dop **69 · 54 · 4**, plăcuță **80 · 65 · 4** la `3` mm, **3** fante egale la `10` mm  

### Pasul 2 — Obiectul 2: Carcasa micro:bit *(Minim)*
- [ ] Cutia **61 · 51 · 23** cu golul **51 · 41 · 25**, la `5` mm de plan  
- [ ] Decupaj USB **14 · 10 · 8** pe peretele din spate, la `6` mm  
- [ ] Capac: dop **50 · 40 · 4**, plăcuță **61 · 51 · 4**, ferestre: matrice **25 · 25** și două butoane **Ø10**  
- [ ] Ai folosit cel puțin **8 unelte diferite** (la ambele obiecte): <span style="color:#1E90FF;font-weight:700">Box</span>, <span style="color:#1E90FF;font-weight:700">Cylinder</span>, <span style="color:#00A600;font-weight:700">Hole</span>, <span style="color:#E65722;font-weight:700">Align (L)</span>, <span style="color:#E65722;font-weight:700">conul negru</span>, <span style="color:#E65722;font-weight:700">săgețile de la tastatură</span>, <span style="color:#DC143C;font-weight:700">Ctrl+D</span>, <span style="color:#DC143C;font-weight:700">Ctrl+G</span>, <span style="color:#E65722;font-weight:700">mărimi cu numere</span>  

**→ Ai Minim când:** placa se așază în gol cu un joc mic, porturile sunt în dreptul găurilor, iar capacul se potrivește cu dopul în gol.

### Pasul 3 — Complet
- [ ] Text **UNO** (`2` mm înălțime) pe capac, centrat  
- [ ] <span style="color:#E65722;font-weight:700">Ruler</span>: gol **70 · 55**, dop **69 · 54**  
- [ ] <span style="color:#00A600;font-weight:700">Color</span> · numele `T2_L09` e corect  
- [ ] Partea a doua are cel puțin **6 unelte diferite**: <span style="color:#1E90FF;font-weight:700">Text</span>, <span style="color:#E65722;font-weight:700">Align (L)</span>, <span style="color:#E65722;font-weight:700">conul negru</span>, <span style="color:#E65722;font-weight:700">Ruler</span>, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  

**Gata Complet când:** textul e pe capac, jocul de `0,5` mm e verificat cu Ruler, iar cutia și capacul au culori diferite.

---

## Bonus ★★★ — Provocare: Carcasă Raspberry Pi cu clemă
*Doar dacă ai terminat Complet.*

- [ ] Schimbă culorile și adaugă text cu numele tău pe capac (`1` mm)  
- [ ] **Provocarea (obiect mai complicat):** într-un proiect nou `Prenume_Nume_T2_L09_C`, o **carcasă pentru Raspberry Pi** (placă `85 × 56`, rotunjită; gol **86 × 57**, perete `5`, cutie **96 · 67 · 30**) cu capac cu dop **85 · 56 · 4** și **6 fante** de aerisire (**50 · 3 · 10**) la `8` mm una de alta, plus **2 cleme snap-fit**: pe fiecare latură lungă a dopului un nub <span style="color:#1E90FF;font-weight:700">Box</span> **10 · 2 · 2**, care intră într-o crestătură Hole **12 · 3 · 4** din peretele cutiei, la `2` mm sub margine. Cu <span style="color:#E65722;font-weight:700">Ruler</span> confirmi cele **6** fante egale și jocul de `0,5` mm.  

## Recapitulare rapidă
1. Placa reală se **măsoară**, se rotunjește în sus, apoi primește **+ 1 mm** joc  
2. Dopul capacului = golul **− 1 mm**  
3. Porturile se decupează cu Hole **mai mare** decât portul și **ridicat** la înălțimea lui  
4. Fantele egale = **Ctrl+D** repetat, cu aceeași mutare  
5. Al doilea obiect (carcasa micro:bit) exersează aceeași regulă pe altă placă  

## Schema pe scurt *(pe foaie — dacă o printezi separat)*

**Calcul:** placă 69·54 → gol 70·55 → exterior 80·65 → dop 69·54  
**Minim:** Box 80·65·28 − Hole 70·55·25 (la 5) − porturi 15·10·16 și 22·10·16 · capac: dop 69·54·4 + plăcuță 80·65·4 (la 3) − 3 fante 40·4·10 · apoi carcasa micro:bit 61·51·23  
**Complet:** + Text UNO · Ruler · Color

**Quiz scurt:**  
- De ce golul e placa `+ 1` mm?  
- De ce dopul capacului e golul `− 1` mm?  
- De ce gaura portului e mai mare decât portul?

## Temă
Opțional: măsori o placă sau un obiect electronic de acasă (de exemplu o telecomandă), calculezi pe foaie golul, peretele și dopul, și scrii mărimile (fără Tinkercad). Îl facem la L10, dacă îl alegi.

## Ce urmează
În **Lecția 10** alegi **tu** un obiect util, cu **piesa lui pereche** care se potrivește cu joc.
