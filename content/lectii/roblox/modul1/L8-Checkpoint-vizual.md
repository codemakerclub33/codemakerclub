# LECȚIA 8 — Terenul de joacă
### Rotiri exacte, grupuri și puncte de odihnă
**Modulul 1 · Place Builder**  
**Code Maker Club · Roblox Studio**

> Azi construiești **Etapa 8**: un teren de joacă cu balansoar, leagăn și nisip, plus un obby cu discuri, tobogan și **două puncte de odihnă** vizuale. Înveți să rotești piesele cu cifre și să faci **grupuri în grupuri**.  
> Proiect: **„Etapa8_Joaca”** · Place: `Prenume_Nume_M1` (același ca la L1–L7)

---

## Ce facem azi
La finalul orei ai **Etapa 8**: un teren de joacă. Pe el stau un **balansoar** (o scândură înclinată), un **leagăn** (stâlpi, bară, scaun și lanțuri) și o groapă cu **nisip**. Apoi urmează obby-ul: pornești de la **Start**, sari pe trei **discuri**, urci pe **turn**, cobori pe **toboganul** lung, treci pe trei **ciocuri** și ajungi la **Finish**. Pe drum găsești **două puncte de odihnă** (albastru deschis), care marchează jumătatea traseului. Obby-ul tău crește cu încă o etapă.

**Notă:** azi tot fără cod. Punctele de odihnă sunt doar **marcaje vizuale**: ele nu salvează progresul și nu te mută. Mai târziu, cu cod, pot face asta.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L7 · deschidem Place-ul `Prenume_Nume_M1` |
| 10–30 | **Orientation** și grupuri în grupuri · punctul de odihnă (**Încearcă tu**) |
| 30–60 | **Proiectul 1** · sol, nisip, balansoar, leagăn |
| 60–100 | **Proiectul 2** · discuri, turn, tobogan, ciocuri, Finish |
| 100–120 | Test, recap, quiz, salvare · **Bonus ★★★** pentru cine termină devreme |

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| **Orientation** (Properties) | Rotești o piesă cu cifre, în grade | `0, 0, 15` înclină scândura |
| **Grup în grup** | Un grup mic (leagănul) intră într-un grup mare (etapa) | `Leagan` în `Etapa8_Joaca` |
| **Punct de odihnă** | O placă subțire, colorată, care marchează un loc important | `Check1`, albastru deschis |
| **Wedge** (tobogan) | O pantă lungă | `6, 8, 16` |
| **Cylinder culcat și în picioare** | Culcat = bară, în picioare = stâlp (`0, 0, 90`) | Leagănul |

---

## Pas cu pas

### 1) Orientation și grupuri în grupuri
**Orientation** are trei numere: `X, Y, Z`, în **grade**.

- Al treilea număr (`Z`) înclină piesa **în planul stânga–dreapta și sus–jos**: `0, 0, 15` face o scândură lungă să urce într-o parte  
- Dacă înclinarea iese în partea greșită, scrii `0, 0, -15`  

**Grup în grup:** selectezi două sau mai multe piese, **Ctrl+G**, le dai un nume (de exemplu `Balansoar`). Mai târziu, când grupezi toată etapa, acest grup rămâne **înăuntru**. În **Explorer** îl vezi ca un folder în folder.

**Încearcă tu — înclinarea (4 min)**  
- [ ] Un Block `16, 1, 3`, ancorat  
- [ ] **Orientation** `0, 0, 15`; o parte e mai sus decât cealaltă  
- [ ] Îl duci în Play; poți merge pe el  
- [ ] Îl ștergi când ai terminat  

### 2) Punctul de odihnă
Un **punct de odihnă** (checkpoint vizual) e un loc unde jucătorul poate respira: ai trecut de jumătate din traseu. Îl faci dintr-o **placă subțire**, de o culoare care nu seamănă cu Start (verde) sau Finish (galben): **albastru deschis**, **Neon**.

**Încearcă tu — un punct de odihnă (3 min)**  
- [ ] Un Block `4, 0.2, 4`, **Neon**, albastru deschis, numit `Check1`  
- [ ] Ancorat și lipit de sol sau de o platformă  

### 3) Proiectul 1 — Sol, nisip, balansoar, leagăn
Etapa 8 stă la **150 de stud-uri** de Etapa 1, la **Z = -150**, pe axa albastră, spre **față**. Centrul ei e `0, 0, -150`.

Schița terenului, **văzută de sus** (nu e la scară):

```
┌────────────────────────────────────────┐
│                                        │
│       N                 B          L   │
│                                        │
│                                        │
│                                        │
│   S    1    2    3   T K               │
│                       v                │
│                       v            F   │
│                       v                │
│                       K    4   5   6   │
└────────────────────────────────────────┘
```

**S** = Start · **1, 2, 3** = discuri · **T** = turn · **K** = punct de odihnă · **v** = tobogan (coboară) · **4, 5, 6** = ciocuri · **F** = Finish · **N** = nisip · **B** = balansoar · **L** = leagăn

| Nume | Formă | Size | Position | Orientation | Material | Culoare |
|------|-------|------|----------|-------------|----------|---------|
| `SolJoaca` | Block | `80, 1, 60` | `0, 0.5, -150` | — | Concrete | gri deschis |
| `Nisip` | Block | `14, 1, 14` | `-25, 1.5, -130` | — | Sand | nisip |
| `Placa` | Block | `16, 1, 3` | `10, 3.5, -130` | `0, 0, 15` | Wood | maro |
| `Suport` | Block | `2, 3, 3` | `10, 2.5, -130` | — | Metal | gri |

**Leagănul** (6 piese, apoi un grup):

| Nume | Formă | Size | Position | Orientation |
|------|-------|------|----------|-------------|
| `Stalp1` | Cylinder | `10, 1.5, 1.5` | `26, 6, -130` | `0, 0, 90` |
| `Stalp2` | Cylinder | `10, 1.5, 1.5` | `38, 6, -130` | `0, 0, 90` |
| `Bara` | Cylinder | `12, 1.5, 1.5` | `32, 11, -130` | `0, 0, 0` |
| `Scaun` | Block | `3, 0.5, 3` | `32, 4, -130` | — |
| `Lant1` | Cylinder | `6, 0.3, 0.3` | `31, 7.25, -130` | `0, 0, 90` |
| `Lant2` | Cylinder | `6, 0.3, 0.3` | `33, 7.25, -130` | `0, 0, 90` |

**Cum faci:**
1. `SolJoaca` și `Nisip`, ancorate, cu **Material** și **Color**  
2. `Placa` cu **Orientation** `0, 0, 15` și `Suport` sub ea; selectezi **ambele** și **Ctrl+G**, numești grupul **`Balansoar`**  
3. Leagănul: cele 6 piese, ancorate; le selectezi și **Ctrl+G**, numești grupul **`Leagan`**  
4. **Bara** e un Cylinder **culcat** (**Orientation** `0, 0, 0`); **stâlpii** și **lanțurile** sunt **în picioare** (`0, 0, 90`)  
5. Mută **SpawnLocation** (**Size** `8, 1, 8`, **Position** `-34, 1.5, -150`) pe teren  
6. **Play**: te plimbi, urci pe scândură, ocolești leagănul. **Stop**. Salvezi  

**Încearcă tu — terenul (20–30 min)**  
- [ ] `SolJoaca`, `Nisip`, grupul `Balansoar` (2 piese) și grupul `Leagan` (6 piese)  
- [ ] Toate **ancorate**  
- [ ] **SpawnLocation** pe teren  
- [ ] Salvezi  

### 4) Proiectul 2 — Obby-ul terenului
**Obby-ul:** Start → discurile **1, 2, 3** → turnul → **toboganul** → punctul de odihnă de jos → ciocurile **4, 5, 6** → **Finish**.

| Nume | Formă | Size | Position | Orientation | Material | Culoare |
|------|-------|------|----------|-------------|----------|---------|
| `Disc1` | Cylinder | `1, 10, 10` | `-24, 2.5, -150` | `0, 0, 90` | Plastic | roșu |
| `Disc2` | Cylinder | `1, 10, 10` | `-14, 4.5, -150` | `0, 0, 90` | Plastic | albastru |
| `Disc3` | Cylinder | `1, 10, 10` | `-4, 6.5, -150` | `0, 0, 90` | Plastic | galben |
| `Turn` | Block | `10, 8, 10` | `6, 5, -150` | — | Concrete | gri |
| `Tobogan` | Wedge | `6, 8, 16` | `6, 5, -163` | `0, 180, 0` | Plastic | portocaliu |
| `Check1` | Block | `4, 0.2, 4` | `6, 9.1, -148` | — | Neon | albastru deschis |
| `Check2` | Block | `6, 0.2, 6` | `6, 1.1, -175` | — | Neon | albastru deschis |
| `Ciot1` | Block | `6, 2, 6` | `16, 2, -175` | — | Wood | maro |
| `Ciot2` | Block | `6, 4, 6` | `24, 3, -175` | — | Wood | maro |
| `Ciot3` | Block | `6, 6, 6` | `32, 4, -175` | — | Wood | maro |
| `Soclu` | Block | `8, 5, 8` | `32, 3.5, -165` | — | Concrete | gri |
| `Finish` | Block | `8, 1, 8` | `32, 6.5, -165` | — | Neon | galben |

La **discuri**, primul număr din **Size** (`1`) e **înălțimea** discului (după rotire), iar celelalte două sunt diametrul.

**Cum faci:**
1. **Discurile:** faci `Disc1`, **Ctrl+D**, schimbi **Name**, **Position** și **Color**  
2. **Turnul** are vârful la `Y = 9`; **toboganul** (**Wedge**) se lipește de el, cu partea **înaltă** spre turn (spre nord) și panta spre sud. La `0, 180, 0` partea înaltă ajunge spre Z mare, adică spre turn. Dacă panta iese totuși invers, scrii `0, 0, 0`  
3. **Check1** stă pe vârful turnului, **Check2** pe sol, la capătul toboganului  
4. **Ciocurile** cresc în înălțime: vârfurile lor sunt la `Y = 3`, `5` și `7`. **Finish** stă pe `Soclu` și are vârful la același nivel cu `Ciot3` (`Y = 7`)  
5. Toate **ancorate**  
6. **Play:** Start → 3 discuri → turn → tobogan → ciocuri → Finish. **Stop**  
7. Selectezi **tot ce ai făcut azi** (fără SpawnLocation; grupurile `Balansoar` și `Leagan` intră cu tot cu conținut) cu **Shift + click** în **Explorer**, **Ctrl+G**, numești grupul **`Etapa8_Joaca`**  
8. Salvezi  

**Încearcă tu — obby-ul terenului (30–40 min)**  
- [ ] 3 discuri, turn, tobogan, 2 puncte de odihnă, 3 ciocuri, soclu, Finish — ancorate  
- [ ] Parcurgi de la Start la Finish, **fără să cazi**  
- [ ] Grup `Etapa8_Joaca` cu `Balansoar` și `Leagan` înăuntru  
- [ ] Salvat  

### 5) Test și reparații
1. **Play** și parcurgi traseul de la Start la Finish  
2. Dacă cazi, notezi **unde** și repari (de obicei **Position** sau **Size**)  
3. Dacă un disc nu se vede în Play, verifici că ai pus **Orientation** `0, 0, 90`  
4. **Punctele de odihnă** nu te mută azi: dacă cazi după **Check1**, apari tot la Start; e normal, fără cod  

**Încearcă tu — testul (4 min)**  
- [ ] Un tur curat, fără să cazi  
- [ ] Știi spune unde sunt cele două puncte de odihnă  

---

## Greșeli frecvente
1. **Discurile stau în picioare ca niște roți** — **Orientation** `0, 0, 90`; verifici și **Size** `1, 10, 10`.  
2. **Scândura e înclinată invers** — `0, 0, -15`.  
3. **Toboganul urcă în loc să coboare** — schimbi **Orientation** între `0, 180, 0` și `0, 0, 0`.  
4. **Grupul `Etapa8_Joaca` nu conține `Leagan`** — în **Explorer**, trage grupul `Leagan` peste `Etapa8_Joaca` sau regrupează.  
5. **Piesele cad la Play** — lipsește **Anchor**.  
6. **Check1 plutește** — `Y = 9.1`, pe vârful turnului.  
7. **Nu poți sări pe un ciot** — verifici **Size** și **Position** (înălțimile 2, 4, 6).  

---

## De făcut azi — „Etapa8_Joaca”
Salvat: `Prenume_Nume_M1`

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | **Proiectul 1:** `SolJoaca`, `Nisip`, grupurile `Balansoar` și `Leagan`, ancorate, **SpawnLocation** pe teren, un tur în Play |
| **Complet** | Minim + **Proiectul 2:** 3 discuri, turn, tobogan, 2 puncte de odihnă, 3 ciocuri, Finish, grup `Etapa8_Joaca`, parcurs de la Start la Finish |

Dacă rămâi în urmă: salvează la **Minim**.

### Pasul 1 — Orientation, grupuri, punct de odihnă
- [ ] Scândura înclinată cu **Orientation** `0, 0, 15`  
- [ ] Un `Check1` din Neon albastru deschis  

### Pasul 2 — Terenul *(Minim)*
- [ ] Sol, nisip, `Balansoar`, `Leagan`  
- [ ] Tur în Play · salvat  

**→ Minim când:** poți merge pe teren, pe scândură, și leagănul te oprește.

### Pasul 3 — Obby-ul *(Complet)*
- [ ] Discuri, turn, tobogan, ciocuri, Finish  
- [ ] 2 puncte de odihnă  
- [ ] Parcurs de la Start la Finish · grup `Etapa8_Joaca` · salvat  

**Gata Complet când:** ajungi la Finish fără să cazi.

---

## Bonus ★★★ — Provocare: Căsuța de joacă
*Doar dacă ai terminat Complet.*

O căsuță ridicată de la sol, cu **acoperiș din două scânduri înclinate**.

| Nume | Formă | Size | Position | Orientation |
|------|-------|------|----------|-------------|
| `PodeaCasuta` | Block | `10, 1, 10` | `-22, 4.5, -168` | — |
| `StalpC1` | Cylinder | `8, 1, 1` | `-26.5, 5, -172.5` | `0, 0, 90` |
| `StalpC2` | Cylinder | `8, 1, 1` | `-17.5, 5, -172.5` | `0, 0, 90` |
| `StalpC3` | Cylinder | `8, 1, 1` | `-26.5, 5, -163.5` | `0, 0, 90` |
| `StalpC4` | Cylinder | `8, 1, 1` | `-17.5, 5, -163.5` | `0, 0, 90` |
| `AcoperisS` | Block | `6, 0.5, 12` | `-24.6, 11, -168` | `0, 0, 30` |
| `AcoperisD` | Block | `6, 0.5, 12` | `-19.4, 11, -168` | `0, 0, -30` |

- [ ] Cele 7 piese, **ancorate**, grupate ca `Casuta`, în grupul `Etapa8_Joaca`  
- [ ] Acoperișul arată ca un **acoperiș** (ca un „A”), nu ca un „V”. Dacă e invers, schimbi semnele  
- [ ] Urci în casuță în Play (sari pe podea), apoi te întorci la Start și parcurgi etapa de **3 ori**, fără să cazi  

## Recapitulare pe scurt
1. **Orientation** `X, Y, Z` rotește în grade; `0, 0, 15` înclină  
2. **Ctrl+G** face grupuri; un grup poate intra în alt grup  
3. Un **punct de odihnă** e o placă subțire și colorată, doar vizuală  
4. **Wedge** = tobogan (`0, 180, 0` pune partea înaltă spre Z mare)  
5. Etapa 8 e grupul `Etapa8_Joaca`  

## Quiz scurt
- Ce face al treilea număr din **Orientation**?  
- Ce e un grup în grup și cum îl recunoști în **Explorer**?  
- Ce face un punct de odihnă azi, fără cod?  

## Temă
Opțional, acasă (dacă ai Studio): adaugă în `Etapa8_Joaca` o a treia piesă de joacă (de exemplu o groapă cu bile din Sphere) și grupeaz-o cu un nume clar. Rămâi în același Place.

---

## Ce urmează — Lecția 9
În **lecția 9** îți alegi singur tema și construiești **Etapa 9**: un obby al tău, după un plan, cu Start, Finish, puncte de odihnă și parcurs complet.
