# LECȚIA 10 — Lumea ta
### Legăm etapele, finisăm și prezentăm
**Modulul 1 · Place Builder**  
**Code Maker Club · Roblox Studio**

> Azi legi cele **9 etape** cu **pasarele**, faci **Poarta Parcului** și **Podiumul**, colorezi zonele, repari trei probleme după testul unui coleg și îți **prezinți lumea**. Pentru toate astea primești insigna **Place Builder**.  
> Place: `Prenume_Nume_M1` (același, cu toate cele 9 etape)

---

## Ce facem azi
La finalul orei ai **un singur Obby**, de la **Start** (Etapa 1) la **Podium** (după Etapa 9): 9 etape legate prin **8 pasarele**, cu o **Poartă a Parcului** și un **Podium**. Fiecare zonă are **culoarea ei**. Un coleg o joacă, tu **repari trei probleme**, apoi o **prezinți** în 60 de secunde.

**Notă:** azi tot fără cod. **Nu ștergi nimic**: același Place se deschide și în Modulul 2.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L9 · deschidem Place-ul `Prenume_Nume_M1` |
| 10–25 | Harta lumii · cum calculezi o pasarela (**Încearcă tu**) |
| 25–55 | **Pasarelele** · 8 legături, 12 piese |
| 55–75 | **Poarta Parcului** și **Podiumul** |
| 75–90 | Culoarea zonelor · Start înapoi la Etapa 1 |
| 90–110 | Testul unui coleg · 3 reparații |
| 110–120 | Prezentarea de 60 de secunde · recap · insigna |

Dacă ai rămas în urmă, ajungi **oricum** la prezentare în ultimele 10 minute: cu **Minim** poți primi insigna.

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| **Centrul unei piese** | Media capetelor: `(A + B) / 2` | `(45 + 120) / 2 = 82.5` |
| **Lungimea unei piese** | Diferența dintre capete: `B − A` | `120 − 45 = 75` |
| **Pasarela** | Un Block lung, de `6` lățime și `1` grosime, la `Y = 0.5` | `75, 1, 6` |
| **Shift + click** în **Explorer** | Selectezi o serie de piese pentru **Ctrl+G** | Cele 12 piese ale pasarelelor |
| **Playtest cu coleg** | Altcineva joacă; tu doar privești | Notezi 3 probleme |

---

## Pas cu pas

### 1) Harta lumii și calculul unei pasarele
Cele 9 etape stau pe o **grilă de 3 × 3**, la **150 de stud-uri** una de alta. Ordinea de joc e **1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9**:

```
 5 ←── 4 ←── 3
 │           ↑
 ↓           │
 6     1 ──→ 2
 │
 ↓
 7 ──→ 8 ──→ 9
```

| Etapa | Centru (X, Z) | Nume |
|-------|---------------|------|
| 1 | `0, 0` | `Etapa1_Pod` |
| 2 | `150, 0` | `Etapa2_Casa` |
| 3 | `150, 150` | `Etapa3_Castel` |
| 4 | `0, 150` | `Etapa4_Parcare` |
| 5 | `-150, 150` | `Etapa5_Padure` |
| 6 | `-150, 0` | `Etapa6_Labirint` |
| 7 | `-150, -150` | `Etapa7_ZgarieNori` |
| 8 | `0, -150` | `Etapa8_Joaca` |
| 9 | `150, -150` | `Etapa9_NumeTema` |

O **pasarelă** e o placă lungă care leagă ieșirea unei etape de intrarea următoarei. O faci cu **două numere**: **Position** (centrul) și **Size** (lungimea).

**Exemplu:** pasarela merge pe `X`, de la `X = 45` la `X = 120`, la `Z = 0`.
- Lungimea: `120 − 45 = 75`  
- Centrul: `(45 + 120) / 2 = 82.5`  
- Deci **Size** `75, 1, 6` și **Position** `82.5, 0.5, 0`  

**Încearcă tu — calculul (4 min)**  
- [ ] O pasarelă pe `X`, de la `X = 40` la `X = 110`: **Size** `70, 1, 6`, **Position** `75, 0.5, …`  
- [ ] O pasarelă pe `Z`, de la `Z = 30` la `Z = 120`: lungime `90`, centru `75`  
- [ ] Verifici cu colegul de lângă tine, apoi ștergi piesele de probă  

### 2) Pasarelele
Pasarelele stau la **`Y = 0.5`** (vârful la `Y = 1`, la fel ca podelele etapelor). Toate sunt **ancorate**. Fiecare pasarelă primește **alt Material și altă culoare**, ca să le recunoști.

**Pasarela 1 (Etapa 1 → Etapa 2).** Capătul ei din stânga e capătul rampei tale de ieșire din Etapa 1. Îl găsești așa:
1. În **Explorer**, deschizi grupul `Etapa1_Pod` și selectezi **ultima rampă** (cea de coborâre)  
2. Citești **Position X**: capătul rampei e la `X1 = Position X + 8` (rampa are 16 lungime)  
3. Pasarela merge de la `X1` până la `X = 120` (ușa casei), la `Z = 0`: **Size** `(120 − X1), 1, 6`, **Position** `((X1 + 120) / 2), 0.5, 0`  

**Pasarelele 2–8** sunt date:

| Pasarela | Legătura | Piesa | Size | Position |
|----------|----------|-------|------|----------|
| 1 | 1 → 2 | `Pas1` | calculată | calculată |
| 2 | 2 → 3 | `Pas2a` | `8, 1, 6` | `184, 0.5, 0` |
| 2 | 2 → 3 | `Pas2b` | `6, 1, 106` | `185, 0.5, 50` |
| 2 | 2 → 3 | `Pas2c` | `38, 1, 6` | `169, 0.5, 100` |
| 2 | 2 → 3 | `Pas2d` | `6, 1, 23` | `150, 0.5, 108.5` |
| 3 | 3 → 4 | `Pas3a` | `115, 1, 6` | `92.5, 0.5, 100` |
| 3 | 3 → 4 | `Pas3b` | `6, 1, 23` | `38, 0.5, 108.5` |
| 4 | 4 → 5 | `Pas4` | `70, 1, 6` | `-75, 0.5, 150` |
| 5 | 5 → 6 | `Pas5` | `6, 1, 90` | `-174, 0.5, 75` |
| 6 | 6 → 7 | `Pas6` | `6, 1, 90` | `-126, 0.5, -75` |
| 7 | 7 → 8 | `Pas7` | `80, 1, 6` | `-80, 0.5, -150` |
| 8 | 8 → 9 | `Pas8` | `70, 1, 6` | `75, 0.5, -150` |

**Cum faci:**
1. Faci `Pas1`, o ancorezi; apoi **Ctrl+D** pentru fiecare dintre celelalte, schimbând **Name**, **Size**, **Position**  
2. Dai fiecărei pasarele alt **Material** (de exemplu **Wood**, **Concrete**, **Metal**, **Brick**, **Granite**, **Slate**, **Sand**, **Pebble**) și altă **culoare**  
3. După fiecare 3 pasarele: **Play** și mergi pe ele. Capetele trebuie să se **atingă** de etape  
4. Selectezi toate cele 12 piese cu **Shift + click** în **Explorer** și **Ctrl+G**, redenumești grupul **`Pasarele`**  

Pasarela **2** are **patru** piese, pentru că ocolește casa, iar pasarela **3** are **două**, pentru că vine din poarta castelului până la parcare. La capete, o pasarelă se **lipește** de ușă sau de marginea etapei.

**Încearcă tu — pasarelele (25–30 min)**  
- [ ] 12 piese, toate **ancorate**, cu nume din tabel  
- [ ] Fiecare pasarelă are alt material și altă culoare  
- [ ] Mergi pe pasarela 1 de la Etapa 1 la ușa casei  
- [ ] Grup `Pasarele` · salvat  

### 3) Poarta Parcului și Podiumul
**Poarta Parcului** stă pe **pasarela 1**, la `X = 100`, și e **simetrică** față de `Z = 0`. Are **4 forme**: **Cylinder** (coloane), **Block** (grindă), **Sphere** (bile), **Wedge** (aripi).

| Nume | Formă | Size | Position | Orientation |
|------|-------|------|----------|-------------|
| `Coloana1` | Cylinder | `14, 3, 3` | `100, 8, -6` | `0, 0, 90` |
| `Coloana2` | Cylinder | `14, 3, 3` | `100, 8, 6` | `0, 0, 90` |
| `Grinda` | Block | `3, 2, 20` | `100, 16, 0` | — |
| `Bila1` | Sphere | `4, 4, 4` | `100, 19, -8` | — |
| `Bila2` | Sphere | `4, 4, 4` | `100, 19, 8` | — |
| `Aripa1` | Wedge | `3, 4, 6` | `100, 19, -4` | `0, 180, 0` |
| `Aripa2` | Wedge | `3, 4, 6` | `100, 19, 4` | `0, 0, 0` |

Cele două **aripi** trebuie să se înalțe spre **mijloc** (spre `Z = 0`). Dacă una se înalță în direcția greșită, schimbi **Orientation** între `0, 0, 0` și `0, 180, 0`.

**Podiumul** stă la capătul etapei 9, la est de ea:

| Nume | Formă | Size | Position | Material | Culoare |
|------|-------|------|----------|----------|---------|
| `Podium2` | Block | `8, 4, 8` | `197, 3, -150` | Metal | gri deschis |
| `Podium1` | Block | `8, 6, 8` | `205, 4, -150` | Neon | galben |
| `Podium3` | Block | `8, 2, 8` | `213, 2, -150` | Metal | maro |
| `FinishFinal` | Block | `4, 0.2, 4` | `205, 7.1, -150` | Neon | galben |

**Cum faci:**
1. Poarta: 7 piese, ancorate, **Ctrl+G**, numele **`PoartaParcului`**  
2. Podiumul: 4 piese, ancorate, **Ctrl+G**, numele **`Podium`**  
3. **Play**: treci prin poartă, ajungi la Etapa 2 și la Podium  

**Încearcă tu — poarta și podiumul (15–20 min)**  
- [ ] `PoartaParcului` e **simetrică** și are 4 forme  
- [ ] `Podium` are 3 trepte și un `FinishFinal`  
- [ ] Salvezi  

### 4) Culoarea zonelor și Start
Fiecare etapă primește o **culoare de zonă**, diferită de ale vecinelor. Colorezi **cel puțin 3 piese mari** din etapă (podea, ziduri, turnuri) cu culoarea ei. Culoarea aleasă înlocuiește doar piesele mari; marcajele de Start, Finish și punctele de odihnă rămân ca până acum.

| Etapa | Culoare de zonă |
|-------|-----------------|
| 1 | albastru deschis |
| 2 | galben pal |
| 3 | mov |
| 4 | portocaliu |
| 5 | verde |
| 6 | roșu |
| 7 | gri |
| 8 | turcoaz |
| 9 | roz |

Apoi muți **SpawnLocation** (**Size** `8, 1, 8`, verde) lângă **turnul de start al Etapei 1**, pe sol, la câțiva stud-uri în stânga turnului: de acolo începe toată lumea.

**Încearcă tu — culori și Start (10–15 min)**  
- [ ] Fiecare etapă are 3 piese mari cu culoarea ei  
- [ ] **SpawnLocation** e la Etapa 1  
- [ ] **Play**: apari la Etapa 1 și ajungi pe pasarele la Etapa 2  

### 5) Testul unui coleg
1. Colegul stă la calculatorul tău, **fără să îi spui nimic**  
2. Apeși **Play**: el joacă cât poate în 8 minute  
3. Tu **notezi 3 probleme**: unde a căzut, unde nu a știut încotro să meargă, ce nu s-a înțeles  
4. **Stop**, repari cele 3 probleme (cu **Position**, **Size**, **Anchor**, **Color**)  
5. **Play** din nou: problemele au dispărut?  

Dacă lucrezi singur, joci tu în 8 minute, fără să te uiți la editor, și notezi 3 probleme.

**Încearcă tu — testul (15–20 min)**  
- [ ] Ai notat 3 probleme  
- [ ] Le-ai reparat  
- [ ] Al doilea test e mai curat  
- [ ] Salvat  

### 6) Prezentarea de 60 de secunde
Spui, în ordine:
1. „Lumea mea are **9 etape** și se numește…”  
2. „Etapa mea preferată e … pentru că …”  
3. „O problemă pe care am reparat-o după testul unui coleg e …”  
4. „Am învățat … (o unealtă din Studio).”  

Apoi apeși **Play** și arăți **un tur scurt**: Start, Poarta Parcului, o pasarelă, o etapă la alegere, Podiumul.

**Încearcă tu — repetiția (3 min)**  
- [ ] Spui cele 4 fraze în sub 60 de secunde  
- [ ] Știi cum pornești **Play** și cum te duci la Etapa 9  

---

## Greșeli frecvente
1. **Pasarelele nu se ating de etape** — capetele sunt greșite; recalculezi centrul și lungimea.  
2. **Pasarela 1 nu se leagă de rampă** — verifici `X1 = Position X + 8` și că rampa e pe `Z = 0`, sau aproape.  
3. **Poarta nu e simetrică** — verifici că valorile `Z` sunt `-6 / 6`, `-8 / 8`, `-4 / 4`.  
4. **Una dintre aripi se înalță spre exterior** — schimbi **Orientation** între `0, 0, 0` și `0, 180, 0`.  
5. **Apari la altă etapă** — **SpawnLocation** nu e la Etapa 1.  
6. **Am șters ceva din etape** — **Ctrl+Z**, sau recitești lecția etapei.  
7. **Nu am salvat** — **File → Save**, în `Prenume_Nume_M1`.  

---

## De făcut azi — „Lumea ta”
Salvat: `Prenume_Nume_M1`

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | **8 pasarele** (12 piese) ancorate, grupul `Pasarele`, **Poarta Parcului**, **SpawnLocation** la Etapa 1, un parcurs pe pasarele de la Etapa 1 la Etapa 9, un tur în Play, prezentare |
| **Complet** | Minim + **Podium**, culoarea fiecărei zone, **3 reparații** după testul unui coleg, o prezentare de 60 de secunde |

Dacă rămâi în urmă: salvează la **Minim**.

### Pasul 1 — Harta și calculul
- [ ] Ai calculat centrul și lungimea pentru două pasarele de probă  

### Pasul 2 — Pasarelele *(Minim)*
- [ ] 12 piese, grup `Pasarele`  
- [ ] Poarta Parcului  
- [ ] Start la Etapa 1  
- [ ] Parcurs în Play · salvat  

**→ Minim când:** ajungi pe pasarele de la Etapa 1 până la Etapa 9.

### Pasul 3 — Finisarea *(Complet)*
- [ ] Podium · culorile zonelor  
- [ ] 3 reparații după testul unui coleg  
- [ ] Prezentare · salvat  

**Gata Complet când:** lumea ta se joacă de la Start până la Podium, fără să te blochezi.

---

## Bonus ★★★ — Provocare: A treia îmbunătățire
*Doar dacă ai terminat Complet.*

Alegi **una** dintre variante:

- [ ] **Felinare:** 4 felinare **simetrice** (Cylinder + Sphere din **Neon**) pe marginile pasarelei 4, câte 2 pe fiecare parte  
- [ ] **Parapet:** balustradă (stâlpi + bară) pe o pasarelă, ca la bonusul din L1  
- [ ] **Drum scurt:** o scurtătură între două etape, cu o pasarelă nouă și un punct de odihnă  

Apoi **parcurgi toată lumea** de la Start la Podium, fără să cazi mai mult de **3 ori**, și o prezinți colegilor într-un **tur de 60 de secunde**.

## Recapitulare pe scurt
1. **Pasarela**: lungimea = diferența, centrul = media capetelor  
2. 9 etape, 8 pasarele, o **Poartă** și un **Podium**  
3. **Ctrl+D**, **Ctrl+G**, **Orientation**, **Material**, **Color**: uneltele din L1–L9  
4. **Playtest cu coleg**: notezi 3 probleme și le repari  
5. **Place Builder** = știi Studio și construiești o lume jucabilă  

## Quiz scurt
- Cum calculezi **Position** și **Size** pentru o pasarelă între `X = 50` și `X = 90`?  
- Ce faci după ce un coleg îți joacă lumea?  
- Care sunt cele 3 unelte din Studio care ți-au fost cele mai utile în Modulul 1?  

## Temă
Opțional, acasă (dacă ai Studio): alege **3 locuri** din lumea ta unde ai vrea să se întâmple ceva (un scor, o monedă, o ușă care se deschide) și notează-le. Le folosim în **Modulul 2**.

---

## Ce urmează — Modulul 2
În **Modulul 2** adaugi **scripturi** pe aceeași lume: Obby-ul tău începe să **răspundă** la ce face jucătorul.
