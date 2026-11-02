# LECȚIA 4 — Parcarea
### Material, culori și transparență
**Modulul 1 · Place Builder**  
**Code Maker Club · Roblox Studio**

> Azi dai piselor tale **material**, **culoare** și **transparență** și construiești **Etapa 4**: o parcare cu marcaje și mașini, plus un obby pe rampe și platforme.  
> Proiect: **„Etapa4_Parcare”** · Place: `Prenume_Nume_M1` (același ca la L1–L3)

---

## Ce facem azi
La finalul orei ai **Etapa 4**: o parcare cu asfalt, linii albe și trei mașini. Pe lângă ea ai un obby: urci pe o **rampă**, sari pe **șase platforme** și cobori pe a doua rampă până la **Finish**. Înveți să schimbi **Material** și **Color**, să folosești **Transparency** și să înțelegi ce face **CanCollide**. Obby-ul tău crește cu încă o etapă.

**Notă:** azi tot fără cod. Culorile sunt doar decor: ele spun jucătorului ce să facă, dar nu fac nimic singure.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L3 · deschidem Place-ul `Prenume_Nume_M1` |
| 10–35 | Material, Color, Transparency, CanCollide (**Încearcă tu**) |
| 35–70 | **Proiectul 1** · asfalt, marcaje, mașini |
| 70–105 | **Proiectul 2** · rampe, platforme, Finish, grupul |
| 105–120 | Recap, quiz, salvare · **Bonus ★★★** pentru cine termină devreme |

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| **Color** (Home) | Alegi culoarea piesei din paletă | Home → **Color** → alb |
| **Material** (Home) | Alegi „din ce e făcută” piesa | Home → **Material** → **Asphalt** |
| **Transparency** (Properties) | Cât se vede piesa: `0` = opacă, `1` = invizibilă | `0.5` = ca sticla |
| **CanCollide** (Properties) | Bifat = te oprește; debifat = treci prin ea | Piesă transparentă, dar care te oprește |
| **Ctrl+D** | Dublează piesa selectată | Linie → încă 3 linii |

---

## Pas cu pas

### 1) Color — se vede de departe
1. Selectezi o piesă  
2. Home → **Color**, apoi alegi o culoare din paletă  
3. Același lucru se poate face din **Properties** → **Color**  

Convenția pe care o folosim în tot obby-ul: **verde = Start** (SpawnLocation vine deja verde), **galben strălucitor = Finish**. Restul piselor primesc culori ca să se vadă clar una de alta.

**Încearcă tu — culori (3 min)**  
- [ ] Pui un Block și îl ancorezi (**Anchor**)  
- [ ] Îl faci roșu, apoi albastru  
- [ ] Se vede clar în Viewport, fără să te lipești de el  

### 2) Material — din ce e făcută piesa
1. Selectezi piesa  
2. Home → **Material** și alegi din listă  
3. Încerci pe rând: **Plastic**, **Wood**, **Concrete**, **Metal**, **Asphalt**, **Sand**, **Neon**  

Materialul schimbă aspectul (textura, reflexia). **Neon** strălucește, de aceea îl folosim la Finish. Poți combina Material cu Color: **Wood** maro arată altfel decât **Wood** albastru.

**Încearcă tu — materiale (3 min)**  
- [ ] Pe același Block încerci 4 materiale  
- [ ] Alegi unul și îl lași așa  
- [ ] Observi că **Neon** nu seamănă cu **Plastic**  

### 3) Transparency și CanCollide
Cele două sunt în **Properties**.

1. **Transparency** — scrii `0.5` și piesa devine ca sticla; `1` o face invizibilă  
2. Apasă **Play** și încearcă să treci prin ea: **te oprește**. Transparența schimbă doar cum arată piesa  
3. **CanCollide** — debifezi și repornești **Play**: acum treci prin piesă  

Folosim **Transparency** pentru geamuri, plase și umbre. **CanCollide** debifat e bun pentru decor prin care jucătorul trebuie să poată trece.

**Încearcă tu — vezi diferența (4 min)**  
- [ ] Block cu **Transparency** `0.5`: **Play** → te oprește  
- [ ] Debifezi **CanCollide**: **Play** → treci prin el  
- [ ] Bifezi la loc **CanCollide**, apoi ștergi piesa de test (**Delete**)  

### 4) Proiectul 1 — Asfalt, marcaje, mașini
Etapa 4 stă la **150 de stud-uri** de Etapa 1, pe direcția **albastră** (Z), adică la **Z = 150**. Parcarea e centrată la `0, 0, 150` și are **80 × 60** stud-uri.

Schița parcării, **văzută de sus** (nu e la scară):

```
┌────────────────────────────────────────┐
│                                        │
│          2    3    4    5   6          │
│                                        │
│          1                   D         │
│                              D         │
│          U                   F         │
│          U                             │
│                                        │
│          S           | M  | M  | M  |  │
│                                        │
└────────────────────────────────────────┘
```

**S** = Start (SpawnLocation) · **U** = rampa care urcă · **1–6** = platforme · **D** = rampa care coboară · **F** = Finish · **|** = linie albă · **M** = mașină

**Piesele din Proiectul 1** (Size și Position, în stud-uri):

| Nume | Formă | Size | Position | Material | Culoare |
|------|-------|------|----------|----------|---------|
| `AsfaltParcare` | Block | `80, 1, 60` | `0, 0.5, 150` | Asphalt | gri închis |
| `Linie1` | Block | `0.6, 0.2, 12` | `5, 1.1, 128` | Plastic | alb |
| `Linie2` | Block | `0.6, 0.2, 12` | `15, 1.1, 128` | Plastic | alb |
| `Linie3` | Block | `0.6, 0.2, 12` | `25, 1.1, 128` | Plastic | alb |
| `Linie4` | Block | `0.6, 0.2, 12` | `35, 1.1, 128` | Plastic | alb |
| `Masina1` | Block | `5, 3, 9` | `10, 2.5, 128` | Metal | roșu |
| `Masina2` | Block | `5, 3, 9` | `20, 2.5, 128` | Metal | albastru |
| `Masina3` | Block | `5, 3, 9` | `30, 2.5, 128` | Metal | galben |

**Cum faci repede:**
1. Faci `AsfaltParcare`, o ancorezi, îi dai **Material** și **Color**  
2. Faci `Linie1`, o ancorezi, apoi **Ctrl+D** de 3 ori; schimbi doar **Name** și **Position**  
3. Faci `Masina1`, o ancorezi, apoi **Ctrl+D** de 2 ori; schimbi **Name**, **Position** și **Color**  
4. Liniile stau la `Y = 1.1`, puțin deasupra asfaltului. Dacă le pui la `Y = 1`, pâlpâie  
5. Mută **SpawnLocation** (Move sau **Position** `-20, 1.5, 128`) în colțul parcării, ca să apari aici, nu la Etapa 1  
6. **Play**: te plimbi pe asfalt și vezi că mașinile te opresc. **Stop**. Salvezi  

**Încearcă tu — parcarea (20–30 min)**  
- [ ] 8 piese, toate **ancorate**, cu numele din tabel  
- [ ] Asfaltul are **Material** și **Color**; liniile sunt albe; mașinile au culori diferite  
- [ ] **SpawnLocation** e în parcare  
- [ ] **Play**: mașinile te opresc  
- [ ] Salvezi  

### 5) Proiectul 2 — Rampe, platforme, Finish
**Obby-ul parcării:** pornești de la **Start** → urci pe **rampa U** → mergi pe **platforma 1** → sari pe platformele **2, 3, 4, 5, 6** → cobori pe **rampa D** → ajungi la **Finish**.

| Nume | Formă | Size | Position | Material | Culoare |
|------|-------|------|----------|----------|---------|
| `Rampa1` | Wedge (`Orientation 0, 180, 0`) | `8, 6, 12` | `-20, 4, 146` | Concrete | portocaliu |
| `Plat1` | Block | `10, 1, 8` | `-20, 6.5, 156` | Wood | maro |
| `Plat2` | Block | `6, 1, 6` | `-20, 6.5, 168` | Wood | maro |
| `Plat3` | Block | `6, 1, 6` | `-10, 6.5, 168` | Wood | maro |
| `Plat4` | Block | `6, 1, 6` | `0, 6.5, 168` | Wood | maro |
| `Plat5` | Block | `6, 1, 6` | `10, 6.5, 168` | Wood | maro |
| `Plat6` | Block | `8, 1, 8` | `20, 6.5, 168` | Wood | maro |
| `Rampa2` | Wedge (`Orientation 0, 180, 0`) | `8, 6, 12` | `20, 4, 158` | Concrete | portocaliu |
| `Finish` | Block | `10, 1, 8` | `20, 1.5, 148` | Neon | galben |

**Cum faci:**
1. **Rampele:** Wedge cu **Size** și **Position** din tabel. Partea **înaltă** a ambelor rampe trebuie să fie spre **nord** (Z mare), adică spre platforme. Un Wedge nou are partea înaltă spre Z mic, de aceea ambele rampe primesc **Orientation** `0, 180, 0`. Dacă panta iese totuși invers, scrii `0, 0, 0`  
2. **Platformele:** faci `Plat2`, o dublezi cu **Ctrl+D** și schimbi doar **Position**  
3. **Între platforme** rămân goluri de 3–5 stud-uri: nu pui nimic acolo, **sari**  
4. **Finish:** **Neon** și galben, ca să se vadă de departe  
5. Toate **ancorate**  
6. **Play**: Start → rampa U → platforma 1 → sari până la 6 → rampa D → Finish. **Stop**  
7. Selectezi **toate cele 17 piese** (fără SpawnLocation) și **Ctrl+G**; redenumești grupul **`Etapa4_Parcare`**  
8. Salvezi  

**Încearcă tu — obby-ul parcării (15–25 min)**  
- [ ] 9 piese noi, toate ancorate, cu material și culoare  
- [ ] Rampele urcă și coboară în direcția corectă  
- [ ] Parcurgi de la Start la Finish, **fără să cazi**  
- [ ] Grupat și numit `Etapa4_Parcare`  
- [ ] Salvat  

---

## Greșeli frecvente
1. **Piesele cad la Play** — lipsește **Anchor**.  
2. **Culoarea nu se schimbă** — verifici că piesa e selectată; încerci și **Properties** → **Color**.  
3. **Liniile pâlpâie sau nu se văd** — pui `Y = 1.1`, nu `1` și nu mai jos.  
4. **Piesa transparentă te oprește** — normal; pentru a trece prin ea debifezi **CanCollide**.  
5. **Rampa urcă invers** — schimbi **Orientation** între `0, 180, 0` și `0, 0, 0`.  
6. **Nu poți sări între platforme** — golurile sunt prea mari; compară **Position** cu tabelul.  
7. **Cazi la platforma 1** — `Rampa1` și `Plat1` trebuie să fie la același nivel în vârf (`Y = 7`).  

---

## De făcut azi — „Etapa4_Parcare”
Salvat: `Prenume_Nume_M1`

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | **Proiectul 1:** asfalt + 4 linii + 3 mașini, ancorate, cu material și culoare, **SpawnLocation** mutat în parcare |
| **Complet** | Minim + **Proiectul 2:** 2 rampe, 6 platforme, Finish, grup `Etapa4_Parcare`, parcurs de la Start la Finish |

Dacă rămâi în urmă: salvează la **Minim**.

### Pasul 1 — Color, Material, Transparency
- [ ] Ai schimbat culoarea și materialul unui Block  
- [ ] Ai văzut că o piesă transparentă te oprește, până debifezi **CanCollide**  

### Pasul 2 — Parcarea *(Minim)*
- [ ] 8 piese ancorate, cu nume, material și culoare  
- [ ] **SpawnLocation** în parcare  
- [ ] Tur în Play · salvat  

**→ Minim când:** pornești în parcare și mașinile te opresc.

### Pasul 3 — Rampe, platforme, Finish *(Complet)*
- [ ] 2 rampe · 6 platforme · Finish **Neon**  
- [ ] Parcurs de la Start la Finish  
- [ ] Grup `Etapa4_Parcare` · salvat  

**Gata Complet când:** ajungi la Finish fără să cazi.

---

## Bonus ★★★ — Provocare: Terenul de volei
*Doar dacă ai terminat Complet.*

Lângă parcare, spre est, construiești un **teren de volei** și un mic obby care duce la el.

| Nume | Formă | Size | Position | Material | Culoare |
|------|-------|------|----------|----------|---------|
| `TerenVolei` | Block | `40, 1, 24` | `70, 0.5, 135` | Sand | nisip |
| `LinieMijloc` | Block | `0.6, 0.2, 24` | `70, 1.1, 135` | Plastic | alb |
| `Plasa` | Block | `0.6, 5, 24` | `70, 3.5, 135` | Fabric | alb |
| `Minge` | Sphere | `3, 3, 3` | `80, 4, 135` | SmoothPlastic | alb |

- [ ] Terenul are **Material** **Sand**, **linie albă pe cele 4 margini** (dublezi cu **Ctrl+D** linia de mijloc și o muți / rotești) și **LinieMijloc**  
- [ ] **Plasa** are **Transparency** `0.5` și rămâne cu **CanCollide** bifat  
- [ ] **Minge** **nu** e ancorată: la **Play** cade și se rostogolește, o poți împinge  
- [ ] **5 platforme** `PlatBonus1` … `PlatBonus5`, **ancorate**, **Size** `6, 1, 6`, la **Z = 150**, la **X** = `34, 44, 54, 64, 74` și **Y** = `4.5, 6.5, 8.5, 6.5, 4.5`: de la **Finish** sari pe ele și cobori pe teren  
- [ ] Parcurgi tot traseul: Start, Finish, platformele bonus, minge  

## Recapitulare pe scurt
1. **Color** și **Material** (Home) schimbă aspectul piesei  
2. **Neon** strălucește; **Asphalt**, **Wood**, **Concrete**, **Sand** sunt materiale pentru decor  
3. **Transparency** schimbă cât se vede piesa, nu și dacă te oprește  
4. **CanCollide** decide dacă treci prin piesă  
5. **Ctrl+D** dublează, **Ctrl+G** grupează  
6. Etapa 4 e grupul `Etapa4_Parcare`  

## Quiz scurt
- Ce face **Transparency** `0.5`? Te mai oprește piesa?  
- Ce setare folosești ca să treci prin piesă?  
- De ce liniile albe stau la `Y = 1.1`?  

## Temă
Opțional, acasă (dacă ai Studio): în `Etapa4_Parcare` schimbă culoarea și materialul la 3 piese, apoi parcurge etapa de trei ori fără să cazi. Rămâi în același Place.

---

## Ce urmează — Lecția 5
În **lecția 5** construiești **Etapa 5**: o pădure din copaci (Cylinder și Sphere), cu trei puncte de privit din **Camera**, și învățăm să controlăm **Play**.
