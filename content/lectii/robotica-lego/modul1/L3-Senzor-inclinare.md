# LECȚIA 3 — Mașina de curse
### Viteză, timp și accelerare
**Modulul 1 · Robotică LEGO WeDo 2.0**  
**Code Maker Club · Robot Starter**

> Azi construiești o **mașină de curse**, o lansezi de la linia de start și afli cum se schimbă **distanța** și **timpul** când schimbi viteza motorului. La final o faci să **accelereze**.  
> Proiect: **„Mașina de curse”** · Salvezi programele ca `Prenume_Nume_R1_L03`

---

## Ce facem azi
La finalul orei ai o **mașină de curse** care pornește de la linia de start, merge la viteza aleasă de tine și se oprește singură. Înveți că **viteza** (🟢 **Motor Power**) și **timpul** (🟡 **Wait**) se combină ca să afli cât de departe ajunge mașina. Programele din aplicație sunt aceleași pentru toți, iar **suplimentul** te învață să faci mașina să **accelereze**, cu lumini și sunet.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L2 · pregătim piesele, linia de start și rigla |
| 10–50 | **Proiectul 1** · construim mașina și programul **A** |
| 50–85 | **Proiectul 2** · programul **B** și experimentul cu trei viteze |
| 85–110 | **Suplimentul** · programul **C**, mașina care accelerează |
| 110–120 | Recap, quiz, salvare · **Bonus ★★★** pentru cine termină devreme |

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| 🟢 **Motor Power** | Alege viteza, de la 1 la 9 | 3 = încet, 9 = cât de repede poate |
| 🟡 **Wait** | Așteaptă un timp, cât merge mașina | **Wait** 2 secunde |
| 🟢 **Motor Off** | Oprește motorul | Mașina se oprește singură |
| 🟢 **Hub Light** | Schimbă culoarea hub-ului | Verde la start, roșu la oprire |
| 🔴 **Play Sound** | Redă un sunet | Un sunet la start |

---

## Culorile blocurilor
Blocurile din aplicație au culori: 🟡 **galbene** (pornesc și conduc programul), 🟢 **verzi** (motor și lumina hub-ului), 🔴 **roșii** (ecran și sunet), 🔵 **albastre** (senzori). Azi folosim blocuri 🟡, 🟢 și 🔴.

Le pui în rând, de la stânga la dreapta, lipite unul de altul. Programul se citește în aceeași ordine.

---

## Pas cu pas

### 1) Piesele și linia de start
Pe masă pui doar ce ai nevoie: **hub-ul**, **motorul**, piesele verzi și portocalii, două roți mari, două roți mici și elasticul. Pregătești **o pistă dreaptă**, de cel puțin **un metru**: o riglă lângă mașină, plus o **linie de start** din bandă sau creion.

**Încearcă tu — pista (3 min)**  
- [ ] Pista e dreaptă, de cel puțin un metru  
- [ ] Linia de start e marcată  

### 2) Proiectul 1 — Mașina: șasiul, hub-ul și motorul
Construiești mașina din cei 27 de pași. Pe fiecare pas ai nevoie de anumite piese, în număr precis; ia doar atât. Cine are calculatorul la îndemână poate deschide aplicația **WeDo 2.0 pentru calculator**, unde construcția e arătată pas cu pas.

**Etapa 1 · șasiul (pașii 1–9)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **1–5** | Plăcile **verzi** și barele lungi; trece **axa** prin mijloc | Axa se învârte liber |
| **6–9** | Piesele mici de legătură și o piesă **portocalie** | Piesele nu se mișcă |

**Etapa 2 · hub-ul și motorul (pașii 10–14)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **10** | Pui **hub-ul** deasupra șasiului | Hub-ul stă dreapta |
| **11–13** | **Motorul** cu cablul lui, piesa de legătură și capătul axei | Motorul e prins ferm |
| **14** | Capacul albastru peste hub | Capacul nu acoperă butonul verde |

**Încearcă tu — șasiul (12 min)**  
- [ ] Șasiul stă dreapt, cu axa liberă  
- [ ] Hub-ul și motorul sunt prinse ferm  

### 3) Proiectul 1 — Botul mașinii, roțile și programul A
**Etapa 3 · partea din față (pașii 15–21)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **15–18** | Cadrul gri cu piesa portocalie, bara lungă verde și plăcile portocalii | Bara e dreaptă |
| **19–20** | Placa verde din față, ca un spoiler, și două piese mici | Spoilerul nu atinge pista |
| **21** | Prinzi partea din față de șasiu | Mașina e dreaptă, nu strâmbă |

**Etapa 4 · senzorul și roțile (pașii 22–27)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **22** | Conectezi **senzorul** la hub, în portul liber | Cele două cabluri sunt în porturi diferite |
| **23–24** | Piesa roții din spate și **elasticul**, care leagă motorul de axă | Elasticul e întins, nu atârnă |
| **25–27** | Cele două roți din spate și cele din față | Roțile se învârt liber |

Verifici toți cei **27 de pași**: mașina ta seamănă cu poza de pe copertă?

Senzorul de la pasul 22 rămâne conectat, dar azi nu îl programăm.

**Programul A — Merge la viteza 5**

| Blocurile | Ce se întâmplă |
|-----------|----------------|
| 🟡 **Start** → 🟢 **Motor Power** 5 → 🟢 **Motor This Way** → 🟡 **Wait** 3 secunde → 🟢 **Motor Off** | Mașina merge 3 secunde la viteza 5 și se oprește |

Schema programului:

```
  [🟡 Start] → [🟢 Motor Power 5] → [🟢 Motor This Way] → [🟡 Wait 3 s] → [🟢 Motor Off]
```

**Încearcă tu — mașina (18 min)**  
- [ ] Mașina seamănă cu poza de pe copertă  
- [ ] Împingi mașina ușor pe masă: merge drept  
- [ ] Programul A: mașina merge 3 secunde și se oprește singură  

### 4) Proiectul 2 — Cursa: programul B și experimentul
**Programul B — Sprint**

| Blocurile | Ce se întâmplă |
|-----------|----------------|
| 🟡 **Start** → 🟢 **Motor Power** 9 → 🟢 **Motor This Way** → 🟡 **Wait** 2 secunde → 🟢 **Motor Off** | Mașina pornește cât de repede poate, 2 secunde |

Schema programului:

```
  [🟡 Start] → [🟢 Motor Power 9] → [🟢 Motor This Way] → [🟡 Wait 2 s] → [🟢 Motor Off]
```

**Experimentul:** lansezi mașina de la linia de start de **trei ori**, cu viteze diferite, și măsori cu rigla cât de departe a ajuns în **2 secunde**.

| Încercarea | Motor Power | Wait | Cât a ajuns (cm) |
|------------|-------------|------|------------------|
| 1 | 3 | 2 secunde | ___ |
| 2 | 6 | 2 secunde | ___ |
| 3 | 9 | 2 secunde | ___ |

Schimbi doar **Motor Power**; **Wait** rămâne 2 secunde, iar mașina pornește de fiecare dată de la linia de start.

**Încearcă tu — experiment (20 min)**  
- [ ] Programul B: mașina pornește rapid și se oprește singură  
- [ ] Completezi toate cele 3 încercări din tabel  
- [ ] Spui ce se întâmplă cu distanța când viteza crește  

### 5) Proiectul 2 — Suplimentul: programul C
Aplicația te învață programele A și B. Aici adaugi comenzi noi și le legi într-un **program C**: o mașină care **accelerează**.

**Programul C — Accelerarea**

| Blocurile | Ce se întâmplă |
|-----------|----------------|
| 🟡 **Start** → 🔴 **Play Sound** → 🟢 **Hub Light** verde → 🟢 **Motor Power** 3 → 🟢 **Motor This Way** → 🟡 **Wait** 1 s → 🟢 **Motor Power** 6 → 🟡 **Wait** 1 s → 🟢 **Motor Power** 9 → 🟡 **Wait** 1 s → 🟢 **Motor Off** → 🟢 **Hub Light** roșu | Mașina pornește încet și accelerează în trei trepte; la final lumina devine roșie |

Schema programului (de la stânga la dreapta, pe două rânduri):

```
  [🟡 Start] → [🔴 Play Sound] → [🟢 Hub Light verde] → [🟢 Motor Power 3]
  → [🟢 Motor This Way] → [🟡 Wait 1 s] → [🟢 Motor Power 6] → [🟡 Wait 1 s]
  → [🟢 Motor Power 9] → [🟡 Wait 1 s] → [🟢 Motor Off] → [🟢 Hub Light roșu]
```

**Încearcă tu — supliment (15 min)**  
- [ ] Programul C: mașina accelerează în trei trepte  
- [ ] Lumina e verde la start și roșie la oprire  
- [ ] Schimbi o treaptă și vezi cum se schimbă drumul  

---

## Greșeli frecvente
1. **Mașina nu merge drept** — roțile din față nu sunt prinse la fel; verifici pașii 25–27.  
2. **Motorul merge, dar roțile stau** — elasticul a sărit; îl pui la loc, întins.  
3. **Roțile patinează la viteză mare** — pista e prea lucioasă; încerci pe o suprafață mai aspră.  
4. **Rezultatele nu se potrivesc** — nu pornești de la aceeași linie sau schimbi două lucruri odată.  
5. **Programul C pare la fel ca B** — verifici că **Motor Power** se schimbă între blocurile **Wait**.

---

## De făcut azi — „Mașina de curse”
Salvat: `Prenume_Nume_R1_L03`

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | **Proiectul 1:** mașina construită după cei 27 de pași · programul **A** merge 3 secunde și se oprește |
| **Complet** | Minim + **Proiectul 2:** programul **B** · tabelul cu 3 încercări completat · programul **C** (accelerare) |

Dacă rămâi în urmă: lasă mașina gata și programul **A** pornit.

### Pasul 1 — Pista și piesele
- [ ] Pistă dreaptă, linie de start, riglă la îndemână  

### Pasul 2 — Mașina *(Minim)*
- [ ] Mașina e construită, cu elasticul întins  
- [ ] Programul **A** merge și mașina se oprește singură  

**→ Minim când:** mașina merge 3 secunde la viteza 5, fără ajutor.

### Pasul 3 — Cursa și accelerarea *(Complet)*
- [ ] Programul **B** merge  
- [ ] Tabelul cu 3 încercări e completat  
- [ ] Programul **C** accelerează în trei trepte  

**Gata Complet când:** poți spune cum se schimbă distanța când crește viteza.

---

## Bonus ★★★ — Provocare: „Linia de sosire”
*Doar dacă ai terminat Complet.*

Pui o **linie de sosire** la **1 metru** de start. Faci un program care pornește mașina de la start, o oprește **după linia de sosire, la cel mult 20 cm**, aprinde lumina verde și redă un sunet.  
Reglezi **viteza** din 🟢 **Motor Power** și **timpul** din 🟡 **Wait** până îți iese. Poți chema un coleg sau un părinte să cronometreze cu telefonul.

Te-ai oprit în cei 20 cm după linie?

---

## Recapitulare pe scurt
1. 🟢 **Motor Power** alege viteza, de la 1 la 9  
2. 🟡 **Wait** alege cât timp merge mașina  
3. Viteza mai mare duce mașina **mai departe** în același timp  
4. Accelerarea se face schimbând **Motor Power** între blocurile **Wait**  
5. Un experiment bun schimbă **un singur lucru** o dată

---

## Quiz scurt
1. Ce alege 🟢 **Motor Power**?  
2. Ce alege 🟡 **Wait**?  
3. Ce se întâmplă cu distanța când crește viteza, la același timp?  
4. Cum faci mașina să accelereze?  
5. De ce pornim de fiecare dată de la aceeași linie?

---

## Temă
- Scrii într-o propoziție ce ai aflat din tabelul cu 3 încercări.  
- Gândești o mașină care pornește încet, accelerează și frânează la final; scrii blocurile pe foaie.  
- Nu demontezi nimic: mașina rămâne pregătită pentru lecția următoare.

---

## Ce urmează — Lecția 4
Construim un **simulator de cutremur**: un motor care zguduie o platformă cu clădiri, iar tu afli ce se întâmplă când schimbi intensitatea și durata.
