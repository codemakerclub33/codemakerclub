# LECȚIA 6 — Floarea care înflorește
### Senzorul de mișcare: programul pornește singur
**Modulul 1 · Robotică LEGO WeDo 2.0**  
**Code Maker Club · Robot Starter**

> Azi construiești o **floare mecanică**, cu petale care se deschid și se închid, și o conectezi la un **senzor de mișcare**: floarea se deschide singură când apropii mâna.  
> Proiect: **„Floarea care înflorește”** · Salvezi programele ca `Prenume_Nume_R1_L06`

---

## Ce facem azi
La finalul orei ai o **floare** care se deschide când apropii mâna de ea și se închide când o îndepărtezi. Până acum ai pornit tu programele de pe ecran. Azi înveți ceva nou: un **senzor** care „vede” când ceva se apropie și pornește programul **singur**. Programele din aplicație sunt aceleași pentru toți, iar **suplimentul** îți arată cum faci floarea să se deschidă și să se închidă singură, cu lumină și sunet.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L5 · pregătim piesele |
| 10–50 | **Proiectul 1** · baza, hub-ul, motorul și axa |
| 50–75 | **Proiectul 1** · petalele, senzorul, soarele și programul **A** |
| 75–100 | **Proiectul 2** · programul **B** cu senzor și experimentul cu trei distanțe |
| 100–115 | **Suplimentul** · programul **C**, floarea care se deschide și se închide |
| 115–120 | Recap, quiz, salvare · **Bonus ★★★** pentru cine termină devreme |

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| 🔵 **Senzorul de mișcare** | Măsoară cât de aproape sau departe e un obiect de el | Mâna ta, apropiată de floare |
| 🟡 **Wait For Distance** | Așteaptă până când senzorul vede ceva aproape (sau departe) | Programul pornește când apropii mâna |
| 🟢 **Motor This Way** / 🟢 **Motor That Way** | Deschide sau închide floarea | O parte = deschide, cealaltă = închide |
| 🟢 **Hub Light**, 🔴 **Play Sound** | Lumină și sunet | Galben la deschidere |

---

## Culorile blocurilor
Blocurile din aplicație au culori: 🟡 **galbene** (pornesc și conduc programul), 🟢 **verzi** (motor și lumina hub-ului), 🔴 **roșii** (ecran și sunet), 🔵 **albastre** (senzori). Azi apare prima dată un bloc 🔵: **senzorul de mișcare**.

Blocurile 🔵 se prind **dedesubt**, în crestătura blocului 🟡 de care au nevoie. Ele nu se așază în rând; ele „dau o valoare” blocului de deasupra.

```
  [🟡 Start] → [🟡 Wait For Distance] → [🟢 Motor This Way]
                      │
                [🔵 senzor de mișcare]   ← se prinde dedesubt
```

---

## Pas cu pas

### 1) Piesele și locul de lucru
Pe masă pui doar ce ai nevoie: **hub-ul**, **motorul**, **senzorul**, piese verzi, portocalii, albastre și piesele pentru petale. Floarea se deschide și se închide, așa că lași **loc în față** pentru mâna ta.

**Încearcă tu — locul (3 min)**  
- [ ] Masa e plată și liberă  
- [ ] Ai loc în fața florii pentru mână  

### 2) Proiectul 1 — Baza, hub-ul, motorul și axa
Construiești floarea din cei 49 de pași. Pe fiecare pas ai nevoie de anumite piese, în număr precis; ia doar atât. Cine are calculatorul la îndemână poate deschide aplicația **WeDo 2.0 pentru calculator**, unde construcția e arătată pas cu pas.

**Etapa 1 · baza și hub-ul (pașii 1–10)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **1–9** | Cadrul **verde** cu două brațe, piese albastre și portocalii | Cadrul stă drept |
| **10** | Pui **hub-ul** deasupra | Hub-ul e prins |

**Etapa 2 · motorul și axa (pașii 11–23)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **11–15** | Suportul mic pentru motor, din piese negre și portocalii | Suportul stă ferm |
| **16** | Prinzi **motorul**, cu cablul lui, și conectezi cablul la hub | Cablul ajunge la hub |
| **17–19** | Axa lungă și roata dințată de la capătul ei | Axa se învârte liber |
| **20–23** | Prinzi mecanismul de baza verde și pui floarea mică roșie, ca decor (la pasul 23 întorci modelul) | Mecanismul e prins |

**Încearcă tu — mecanismul (18 min)**  
- [ ] Motorul e prins ferm și cablul nu e strâns  
- [ ] Rotești axa cu degetul: roata dințată se învârte fără să se agațe  

### 3) Proiectul 1 — Petalele, senzorul, soarele și programul A
**Etapa 3 · petalele (pașii 24–30)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **24–29** | Cele **petale** verzi, în formă de frunză, cu axele lor | Petalele se mișcă ușor |
| **30** | Prinzi petalele de mecanism | Petalele se mișcă odată cu axa |

**Etapa 4 · senzorul în carcasa albastră (pașii 31–37)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **31–34** | Carcasa din piese albastre și portocalii | Carcasa e dreaptă |
| **35** | Pui **senzorul de mișcare**, cu cablul lui, în carcasă și conectezi cablul la hub | Cele două cabluri sunt în porturi diferite |
| **36–37** | Prinzi carcasa de bază | Senzorul privește **înainte**, spre mâna ta |

**Etapa 5 · tulpina și soarele (pașii 38–49)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **38–40** | Tulpina lungă, verde, cu capăt curbat | Tulpina stă dreaptă |
| **41–47** | Soarele: o placă portocalie, piese negre și un „ochi” albastru, cu lentilă (la pasul 46 întorci modelul) | Soarele arată ca în poză |
| **48–49** | Prinzi soarele de tulpină și tulpina de bază | Floarea stă dreaptă |

Verifici toți cei **49 de pași**: floarea ta seamănă cu poza finală?

**Programul A — Floarea se deschide**

| Blocurile | Ce se întâmplă |
|-----------|----------------|
| 🟡 **Start** → 🟢 **Motor Power** 4 → 🟢 **Motor This Way** → 🟡 **Wait** 3 secunde → 🟢 **Motor Off** | Petalele se deschid în 3 secunde |

Schema programului:

```
  [🟡 Start] → [🟢 Motor Power 4] → [🟢 Motor This Way] → [🟡 Wait 3 s] → [🟢 Motor Off]
```

**Încearcă tu — floarea (25 min)**  
- [ ] Floarea seamănă cu poza finală  
- [ ] Programul A: petalele se deschid în 3 secunde  
- [ ] Spui în ce parte trebuie să se învârtă motorul ca să se **închidă**  

### 4) Proiectul 2 — Floarea simte mâna: programul B și experimentul
**Programul B — Se deschide când apropii mâna**

| Blocurile | Ce se întâmplă |
|-----------|----------------|
| 🟡 **Start** → 🟡 **Wait For Distance** (cu 🔵 senzorul de mișcare dedesubt) → 🟢 **Motor This Way** → 🟡 **Wait** 3 secunde → 🟢 **Motor Off** | Floarea așteaptă mâna ta și apoi se deschide |

Schema programului:

```
  [🟡 Start] → [🟡 Wait For Distance] → [🟢 Motor This Way] → [🟡 Wait 3 s] → [🟢 Motor Off]
                       │
                 [🔵 senzor de mișcare]   ← dedesubt
```

**Experimentul:** apropii mâna de floare la **trei distanțe**, cu rigla, și notezi dacă se deschide.

| Încercarea | Distanța mâinii față de senzor | Se deschide? |
|------------|--------------------------------|--------------|
| 1 | 5 cm | ___ |
| 2 | 15 cm | ___ |
| 3 | 30 cm | ___ |

Pornești programul **B** înainte de fiecare încercare, iar mâna vine **încet** spre senzor. Între încercări aduci petalele la loc, închise.

**Încearcă tu — experiment (20 min)**  
- [ ] Programul B: floarea așteaptă și se deschide când apropii mâna  
- [ ] Completezi toate cele 3 încercări din tabel  
- [ ] Spui de la ce distanță începe senzorul să „vadă” mâna  

### 5) Proiectul 2 — Suplimentul: programul C
Aplicația te învață programele A și B. Aici adaugi comenzi noi și le legi într-un **program C**: floarea care se deschide când apropii mâna și se închide când o îndepărtezi.

**Programul C — Deschide și închide**

| Blocurile | Ce se întâmplă |
|-----------|----------------|
| 🟡 **Start** → 🟡 **Loop** 3 ori [ 🟡 **Wait For Distance** aproape → 🟢 **Hub Light** galben → 🔴 **Play Sound** → 🟢 **Motor This Way** → 🟡 **Wait** 3 s → 🟢 **Motor Off** → 🟡 **Wait For Distance** departe → 🟢 **Motor That Way** → 🟡 **Wait** 3 s → 🟢 **Motor Off** → 🟢 **Hub Light** verde ] | Mâna se apropie: lumina galbenă, sunet, floarea se deschide. Mâna pleacă: floarea se închide, lumina verde. De 3 ori |

Schema programului (blocurile din paranteze stau **în** 🟡 **Loop**):

```
  [🟡 Start] → [🟡 Loop 3 ori]
                    │
                    └─ în Loop:
                       [🟡 Wait For Distance aproape] → [🟢 Hub Light galben] → [🔴 Play Sound]
                       → [🟢 Motor This Way] → [🟡 Wait 3 s] → [🟢 Motor Off]
                       → [🟡 Wait For Distance departe] → [🟢 Motor That Way]
                       → [🟡 Wait 3 s] → [🟢 Motor Off] → [🟢 Hub Light verde]
```

Ambele blocuri 🟡 **Wait For Distance** au senzorul 🔵 dedesubt.

**Încearcă tu — supliment (15 min)**  
- [ ] Programul C: floarea se deschide când apropii mâna  
- [ ] Floarea se închide când îndepărtezi mâna  
- [ ] Lumina e galbenă la deschidere și verde la închidere  

---

## Greșeli frecvente
1. **Floarea nu se deschide** — verifici dacă motorul e conectat la hub și dacă hub-ul e conectat la aplicație (lumina fixă).  
2. **Programul B nu pornește când apropii mâna** — senzorul nu privește spre tine sau cablul nu e în hub; verifici pașii 35–37.  
3. **Floarea se deschide singură, fără mână** — senzorul „vede” altceva aproape; muți floarea de perete sau de obiecte.  
4. **Petalele se agață** — verifici pașii 24–30.  
5. **Floarea nu se închide** — în programul C lipsește **Motor That Way** sau al doilea **Wait For Distance**.

---

## De făcut azi — „Floarea care înflorește”
Salvat: `Prenume_Nume_R1_L06`

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | **Proiectul 1:** floarea construită după cei 49 de pași · programul **A** deschide petalele |
| **Complet** | Minim + **Proiectul 2:** programul **B** (cu senzor) · tabelul cu 3 încercări completat · programul **C** (deschide și închide) |

Dacă rămâi în urmă: lasă floarea gata și programul **A** pornit.

### Pasul 1 — Locul și piesele
- [ ] Masă plată, loc în față pentru mână  

### Pasul 2 — Floarea *(Minim)*
- [ ] Floarea e construită, cu senzorul îndreptat înainte  
- [ ] Programul **A** merge și se oprește singur  

**→ Minim când:** petalele se deschid în 3 secunde, fără ajutor.

### Pasul 3 — Senzorul și suplimentul *(Complet)*
- [ ] Programul **B** pornește când apropii mâna  
- [ ] Tabelul cu 3 încercări e completat  
- [ ] Programul **C** deschide și închide floarea  

**Gata Complet când:** floarea se deschide când apropii mâna și se închide când o îndepărtezi.

---

## Bonus ★★★ — Provocare: „Floarea timidă”
*Doar dacă ai terminat Complet.*

Faci o floare **timidă**: se deschide doar când mâna e **departe** și se închide când mâna se **apropie**, ca și cum ar fi speriată. Adaugi un 🔴 **Display** cu mesajul „Hei!” când se închide.  
Folosești aceleași blocuri ca la programul C, dar schimbi unde apare **aproape** și **departe**.

Funcționează la prima încercare?

---

## Recapitulare pe scurt
1. 🔵 **Senzorul de mișcare** vede cât de aproape sau departe e un obiect  
2. 🟡 **Wait For Distance** așteaptă senzorul, apoi programul merge mai departe  
3. Blocurile 🔵 se prind **dedesubt**, nu în rând  
4. 🟢 **Motor This Way** deschide, 🟢 **Motor That Way** închide  
5. Un experiment bun schimbă **un singur lucru** o dată

---

## Quiz scurt
1. Ce măsoară senzorul de mișcare?  
2. Ce face 🟡 **Wait For Distance**?  
3. Unde se prinde un bloc 🔵?  
4. Cum închizi floarea?  
5. De ce lași programul să pornească singur, fără să apeși tu Start de fiecare dată?

---

## Temă
- Scrii într-o propoziție ce ai aflat din tabelul cu 3 încercări.  
- Gândești un obiect din casă care s-ar porni singur cu un senzor (ușă, lumină, ventilator); scrii blocurile pe foaie.  
- Nu demontezi nimic: floarea rămâne pregătită pentru lecția următoare.

---

## Ce urmează — Lecția 7
Construim un **stăvilar**: o poartă care se ridică și coboară ca să lase o barcă să treacă, cu semnale de lumină.
