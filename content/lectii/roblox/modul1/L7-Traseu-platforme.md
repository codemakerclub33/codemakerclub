# LECȚIA 7 — Zgârie-norul
### Repetări cu Ctrl+D și formule pentru Position
**Modulul 1 · Place Builder**  
**Code Maker Club · Roblox Studio**

> Azi construiești **Etapa 7**: un zgârie-nori cu 10 etaje și un obby care urcă pe balcoanele lui, în spirală, până pe acoperiș. Înveți să **repeți** o piesă cu **Ctrl+D** și să calculezi pozițiile cu o **formulă**.  
> Proiect: **„Etapa7_ZgarieNori”** · Place: `Prenume_Nume_M1` (același ca la L1–L6)

---

## Ce facem azi
La finalul orei ai **Etapa 7**: un turn înalt de **52** de stud-uri, cu **10 benzi** (etajele) și **10 balcoane** așezate în spirală. Pornești de pe sol, urci de la balcon la balcon (fiecare e cu **5 stud-uri** mai sus decât cel dinainte), ajungi pe **acoperiș** și atingi **Finish**. Înveți să faci **10 piese identice** repede, schimbând doar o cifră, și să calculezi pozițiile cu formule. Obby-ul tău crește cu încă o etapă.

**Notă:** azi tot fără cod.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L6 · deschidem Place-ul `Prenume_Nume_M1` |
| 10–30 | Formula și repetarea cu **Ctrl+D** (**Încearcă tu**) |
| 30–65 | **Proiectul 1** · teren, nucleu, 10 benzi |
| 65–105 | **Proiectul 2** · 10 balcoane, Finish, antenă, grupul |
| 105–120 | Test cu timp · recap, quiz, salvare · **Bonus ★★★** pentru cine termină devreme |

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| **Ctrl+D** | Dublează piesa; duplicatul rămâne selectat | Banda1 → Banda2 |
| **Formula** | Calculezi pozițiile, nu le ghicești | `Y = 5 × k − 2` |
| **Position** (Properties) | Schimbi doar valoarea care se modifică | Doar **Y** la benzi |
| **Name** (Properties) | Numele cu număr, ca să nu te încurci | `Banda1`, `Banda2`… |
| **Shift + click** în **Explorer** | Selectezi o serie, de la prima piesă la ultima | La **Ctrl+G** |

---

## Pas cu pas

### 1) Formula și repetarea
Când ai 10 piese la fel, nu le faci pe rând de la zero: faci **una**, o dublezi cu **Ctrl+D** și schimbi **doar ce diferă**.

**Exemplu:** 5 cuburi `4, 4, 4`, unul peste altul, fiecare la 4 stud-uri mai sus. Primul stă pe Baseplate, cu centrul la `Y = 2`, deci formula e `Y = 4 × k − 2`, unde `k` e numărul cubului:

| k | Y |
|---|---|
| 1 | 2 |
| 2 | 6 |
| 3 | 10 |
| 4 | 14 |
| 5 | 18 |

1. Faci cubul 1, îl ancorezi, îi dai numele `Cub1`  
2. **Ctrl+D** (duplicatul rămâne selectat), scrii **Name** `Cub2` și **Position** cu **Y** `6`  
3. Repeți până la `Cub5`  

**Încearcă tu — formula (5 min)**  
- [ ] Un turn de 5 cuburi `4, 4, 4`, cu `Y` din tabel (X și Z rămân la fel)  
- [ ] Toate **ancorate**  
- [ ] Le ștergi după ce ai terminat (selectezi toate din **Explorer** cu **Shift + click** și **Delete**)  

### 2) Proiectul 1 — Teren, nucleu, benzi
Etapa 7 stă la **150 de stud-uri** de Etapa 1, spre **stânga**, și la **Z = -150** pe axa **albastră**, spre **față**. Centrul ei e `-150, 0, -150`.

| Nume | Formă | Size | Position | Material | Culoare |
|------|-------|------|----------|----------|---------|
| `TerenZN` | Block | `60, 1, 60` | `-150, 0.5, -150` | Concrete | gri deschis |
| `Nucleu` | Block | `20, 52, 20` | `-150, 27, -150` | Concrete | gri |
| `Banda1` | Block | `20.4, 1, 20.4` | `-150, 3, -150` | Metal | gri închis |
| `Banda2` … `Banda10` | Block | `20.4, 1, 20.4` | `-150, Y, -150` | Metal | gri închis |

**Benzile** sunt etajele: fiecare e un pic mai lată (`20.4`), ca să se vadă pe turn. Formula: **`Y = 5 × k − 2`**.

| Piesă | Y | Piesă | Y |
|-------|---|-------|---|
| `Banda1` | 3 | `Banda6` | 28 |
| `Banda2` | 8 | `Banda7` | 33 |
| `Banda3` | 13 | `Banda8` | 38 |
| `Banda4` | 18 | `Banda9` | 43 |
| `Banda5` | 23 | `Banda10` | 48 |

**Cum faci:**
1. `TerenZN`, apoi `Nucleu`, ancorate, cu **Material** și **Color**  
2. `Banda1`, ancorată; apoi **Ctrl+D**, **Name** `Banda2`, **Position** cu **Y** `8`  
3. Repeți până la `Banda10`. X și Z rămân `-150`  
4. Mută **SpawnLocation** (**Size** `8, 1, 8`, **Position** `-150, 1.5, -172`) în fața turnului, pe teren  
5. **Play**: te plimbi în jurul turnului și te lovești de el. **Stop**. Salvezi  

**Încearcă tu — turnul (20–30 min)**  
- [ ] `TerenZN`, `Nucleu` și 10 benzi, toate **ancorate**  
- [ ] Benzile sunt la `Y` din tabel, vizibile pe turn  
- [ ] **SpawnLocation** în fața turnului, pe teren  
- [ ] Salvezi  

### 3) Proiectul 2 — Balcoanele în spirală
**Obby-ul turnului:** de pe sol sari pe `Balcon1`, apoi pe `Balcon2`… până la `Balcon10`, apoi pe acoperiș, la **Finish**. Fiecare balcon e la `Y = 5 × k + 0.5`.

Schița turnului, **văzută de sus** (nord sus; nu e la scară):

```
         8        7      6
        ####################
     9  ####################   5
        ####################
        ####################
     A  ####################   4
        ####################
        ####################
        ####################   3
        ####################
        ####################

                  1        2
```

**#** = turnul · **1–9** = balcoanele · **A** = balconul 10. Spirala merge **în sens invers acelor de ceasornic**: sud, est, nord, vest.

| Nume | Size | Position |
|------|------|----------|
| `Balcon1` | `6, 1, 6` | `-150, 5.5, -163` |
| `Balcon2` | `6, 1, 6` | `-141, 10.5, -163` |
| `Balcon3` | `6, 1, 6` | `-137, 15.5, -157` |
| `Balcon4` | `6, 1, 6` | `-137, 20.5, -150` |
| `Balcon5` | `6, 1, 6` | `-137, 25.5, -143` |
| `Balcon6` | `6, 1, 6` | `-143, 30.5, -137` |
| `Balcon7` | `6, 1, 6` | `-150, 35.5, -137` |
| `Balcon8` | `6, 1, 6` | `-159, 40.5, -137` |
| `Balcon9` | `6, 1, 6` | `-163, 45.5, -143` |
| `Balcon10` | `6, 1, 6` | `-163, 50.5, -150` |

Toate: **Block**, **Material** **Wood**, culoare maro, **ancorate**.

| Nume | Formă | Size | Position | Material | Culoare |
|------|-------|------|----------|----------|---------|
| `Finish` | Block | `8, 1, 8` | `-150, 53.5, -150` | Neon | galben |
| `Antena` | Cylinder | `10, 1, 1` (Orientation `0, 0, 90`) | `-142, 58, -142` | Metal | gri închis |

**Cum faci:**
1. `Balcon1`, ancorat; apoi **Ctrl+D**, **Name**, **Position** pentru fiecare după tabel  
2. Atenție: la **Position** schimbi **X, Y și Z** (nu doar Y, ca la benzi)  
3. `Finish` pe acoperiș. Din `Balcon10` sari **în sus** pe acoperiș, la `Y = 53`, adică **2 stud-uri** mai sus  
4. `Antena`: un Cylinder în picioare, într-un colț al acoperișului  
5. **Play**: de pe sol sari pe `Balcon1` și urci în spirală. Dacă cazi, începi din nou. **Stop**  
6. Selectezi **tot ce ai făcut azi** (fără SpawnLocation) cu **Shift + click** în **Explorer**, apoi **Ctrl+G**, redenumești **`Etapa7_ZgarieNori`**  
7. Salvezi  

**Încearcă tu — obby-ul turnului (30–40 min)**  
- [ ] 10 balcoane, `Finish` și `Antena`, toate ancorate  
- [ ] Ajungi pe acoperiș și atingi `Finish`  
- [ ] Grupat și numit `Etapa7_ZgarieNori`  
- [ ] Salvat  

### 4) Test cu timp
1. Apeși **Play** și te uiți la ceas: cât durează de pe sol până la **Finish**?  
2. Dacă cazi, notezi **la ce balcon** și repari: apropii balconul (**Position**) sau verifici **Y**  
3. Repeți: al doilea timp e mai scurt decât primul?  

**Încearcă tu — cronometrul (4 min)**  
- [ ] Ai notat un timp și un balcon unde ai căzut  
- [ ] Ai reparat sau ai înțeles de ce  

---

## Greșeli frecvente
1. **Benzile sau balcoanele „plutesc”** — verifici **X** și **Z**: la benzi trebuie `-150`.  
2. **Nu ajungi pe un balcon** — verifici **Y** cu formula; golul dintre balcoane e mic, dar înălțimea trebuie exactă.  
3. **Am schimbat Position la piesa greșită** — după **Ctrl+D** selecția e pe duplicat; verifici numele.  
4. **Două piese au același nume** — la fiecare **Ctrl+D** schimbi **Name**.  
5. **Cazi de pe balcon** — pe marginea balconului, sari **din mers**, nu din loc.  
6. **Nu urci pe acoperiș** — `Balcon10` stă lipit de turn, iar acoperișul e cu 2 stud-uri mai sus.  
7. **Piesele cad la Play** — lipsește **Anchor**.  

---

## De făcut azi — „Etapa7_ZgarieNori”
Salvat: `Prenume_Nume_M1`

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | **Proiectul 1:** teren, nucleu, 10 benzi, ancorate, **SpawnLocation** în fața turnului, un tur în Play |
| **Complet** | Minim + **Proiectul 2:** 10 balcoane, `Finish`, `Antena`, grup `Etapa7_ZgarieNori`, un urcuș pe sol → balcoane → acoperiș |

Dacă rămâi în urmă: salvează la **Minim**.

### Pasul 1 — Formula
- [ ] Turnul de 5 cuburi, cu `Y = 4 × k − 2`  

### Pasul 2 — Turnul *(Minim)*
- [ ] `TerenZN`, `Nucleu`, `Banda1` … `Banda10`  
- [ ] **SpawnLocation** pe teren  
- [ ] Tur în Play · salvat  

**→ Minim când:** turnul are 10 benzi vizibile și te oprește când te lovești de el.

### Pasul 3 — Balcoanele *(Complet)*
- [ ] 10 balcoane, `Finish`, `Antena`  
- [ ] Urcuș complet, grup `Etapa7_ZgarieNori`  
- [ ] Salvat  

**Gata Complet când:** ajungi la `Finish` de pe sol, fără ajutor.

---

## Bonus ★★★ — Provocare: Sub un minut
*Doar dacă ai terminat Complet.*

- [ ] Urci de pe sol până la `Finish` în **mai puțin de 60 de secunde**, **fără să cazi**  
- [ ] Faci **3 încercări** și notezi timpul fiecăreia; a treia e mai bună decât prima  
- [ ] Marchezi **balconul 5** (la jumătatea drumului) cu o culoare diferită, ca „punct de odihnă” vizual  

## Recapitulare pe scurt
1. **Ctrl+D** dublează; duplicatul rămâne selectat  
2. Schimbi doar ce diferă: **Name** și **Position**  
3. Formula: benzi `Y = 5 × k − 2`, balcoane `Y = 5 × k + 0.5`  
4. **Shift + click** în **Explorer** selectează o serie  
5. Etapa 7 e grupul `Etapa7_ZgarieNori`  

## Quiz scurt
- Care e formula pentru **Y** la benzi? Cât e `Y` pentru `Banda4`?  
- Ce schimbi după **Ctrl+D**?  
- De ce la balcoane schimbi **X, Y și Z**, nu doar Y?  

## Temă
Opțional, acasă (dacă ai Studio): adaugă un **al 11-lea etaj** (`Banda11`) și un `Balcon11` cu formulele din lecție. Rămâi în același Place.

---

## Ce urmează — Lecția 8
În **lecția 8** construiești **Etapa 8**: un teren de joacă cu tobogan, balansoar, leagăn și **două puncte de odihnă** vizuale.
