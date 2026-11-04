# LECȚIA 8 — Elicopterul de salvare
### Troliul, sfoara și semnalele care clipesc
**Modulul 1 · Robotică LEGO WeDo 2.0**  
**Code Maker Club · Robot Starter**

> Azi construiești un **elicopter de salvare**, cu elice și troliu cu sfoară. Programezi troliul să **coboare** cârligul spre o ladă, să o **ridice** și să anunțe salvarea cu **semnale** care clipesc.  
> Proiect: **„Elicopterul de salvare”** · Salvezi programele ca `Prenume_Nume_R1_L08`

---

## Ce facem azi
La finalul orei ai un **elicopter de salvare**: troliul coboară sfoara cu cârlig, apoi o ridică. Înveți să controlezi **cât** coboară cârligul cu **timpul** (🟡 **Wait**) și să faci **semnale care clipesc** cu un 🟡 **Loop** și 🟢 **Hub Light**. Programele din aplicație sunt aceleași pentru toți, iar **suplimentul** îți arată cum faci o misiune completă de salvare: alarmă, mesaj, coborâre și ridicare.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L7 · pregătim piesele |
| 10–55 | **Proiectul 1** · corpul, motorul, troliul și curelele |
| 55–80 | **Proiectul 1** · coada, tălpile, elicea, lada și programul **A** |
| 80–105 | **Proiectul 2** · programul **B** și experimentul cu trei durate |
| 105–118 | **Suplimentul** · programul **C**, misiunea de salvare |
| 118–120 | Recap, quiz, salvare · **Bonus ★★★** pentru cine termină devreme |

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| 🟢 **Motor This Way** / 🟢 **Motor That Way** | Coboară sau ridică cârligul | O parte = coboară, cealaltă = ridică |
| 🟡 **Wait** | Alege cât se derulează sfoara | Wait 2 secunde |
| 🟡 **Loop** | Repetă blocurile dinăuntru | Lumina clipește de 4 ori |
| 🟢 **Hub Light** | Lumina hub-ului, ca semnal | Roșu și verde, pe rând |
| 🔴 **Display**, 🔴 **Play Sound** | Mesaj și sunet | „Salvare!” și o sirenă |

---

## Culorile blocurilor
Blocurile din aplicație au culori: 🟡 **galbene** (pornesc și conduc programul), 🟢 **verzi** (motor și lumina hub-ului), 🔴 **roșii** (ecran și sunet), 🔵 **albastre** (senzori). Azi folosim blocuri 🟡, 🟢 și 🔴.

Le pui în rând, de la stânga la dreapta, lipite unul de altul. Blocurile din interiorul unui 🟡 **Loop** sunt cele repetate; **Loop** poate avea blocuri în interior, ca într-o cutie.

---

## Pas cu pas

### 1) Piesele și locul de lucru
Pe masă pui doar ce ai nevoie: **hub-ul**, **motorul**, piese verzi, portocalii, albastre și negre, **sfoara**, roata dințată și piesele pentru lada de salvat. Elicopterul stă pe masă, cu **loc sub el** pentru cârlig și ladă.

**Încearcă tu — locul (3 min)**  
- [ ] Masa e plată și liberă  
- [ ] Sub elicopter e loc pentru cârlig și ladă  

### 2) Proiectul 1 — Corpul, motorul, troliul și curelele
Construiești elicopterul din cei 55 de pași. Pe fiecare pas ai nevoie de anumite piese, în număr precis; ia doar atât. Cine are calculatorul la îndemână poate deschide aplicația **WeDo 2.0 pentru calculator**, unde construcția e arătată pas cu pas.

**Etapa 1 · corpul, hub-ul și motorul (pașii 1–14)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **1–6** | Plăcile **verzi** și piesele portocalii, care fac corpul, apoi **hub-ul** deasupra | Corpul stă drept |
| **7** | Prinzi **motorul**, cu cablul lui, lângă hub și conectezi cablul la hub | Cablul ajunge la hub |
| **8–14** | Axa și piesele mici de legătură (la pasul 14 întorci modelul) | Axa se învârte liber |

**Etapa 2 · troliul, sfoara și curelele (pașii 15–27)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **15–17** | **Troliul**: o bobină neagră și **sfoara**, cu o placă la capăt, ca **cârlig** | Sfoara se derulează fără noduri |
| **18–26** | Piesele mici și **curelele galbene**, care leagă motorul de troliu | Curelele sunt întinse, nu atârnă |
| **27** | Platforma rotundă neagră și o piesă albastră deasupra | Platforma e fixă |

**Încearcă tu — troliul (20 min)**  
- [ ] Motorul e prins ferm și cablul nu e strâns  
- [ ] Rotești troliul cu degetul: sfoara se derulează și se strânge  

### 3) Proiectul 1 — Coada, tălpile, elicea, lada și programul A
**Etapa 3 · coada și tălpile (pașii 28–39)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **28–33** | **Coada**: o bară lungă verde, cu o roată la capăt (la pasul 32 întorci modelul) | Coada e dreaptă |
| **34–39** | **Tălpile** de aterizare, portocalii și verzi, și le prinzi sub corp | Elicopterul stă drept pe masă |

**Etapa 4 · elicea (pașii 40–44)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **40–44** | Piesa albastră de sub elice și **elicea** neagră, lungă | Elicea se învârte liber când o atingi |

**Etapa 5 · lada și oamenii (pașii 45–55)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **45–52** | **Lada** albastră, cu capac portocaliu | Lada nu se desface |
| **53–55** | **Camera**, din piese albe și negre, și patru piese mici, transparente | Totul stă pe masă, sub elicopter |

Verifici toți cei **55 de pași**: elicopterul tău seamănă cu poza finală?

**Programul A — Cârligul coboară**

| Blocurile | Ce se întâmplă |
|-----------|----------------|
| 🟡 **Start** → 🟢 **Motor Power** 5 → 🟢 **Motor This Way** → 🟡 **Wait** 2 secunde → 🟢 **Motor Off** | Troliul se învârte 2 secunde și se oprește |

Schema programului:

```
  [🟡 Start] → [🟢 Motor Power 5] → [🟢 Motor This Way] → [🟡 Wait 2 s] → [🟢 Motor Off]
```

**Încearcă tu — elicopterul (25 min)**  
- [ ] Elicopterul seamănă cu poza finală  
- [ ] Programul A: troliul se învârte 2 secunde și se oprește  
- [ ] Spui dacă sfoara a coborât sau s-a ridicat, și ce schimbi pentru **cealaltă** mișcare  

### 4) Proiectul 2 — Salvarea: programul B și experimentul
**Programul B — Coboară, așteaptă, ridică**

| Blocurile | Ce se întâmplă |
|-----------|----------------|
| 🟡 **Start** → 🟢 **Motor This Way** → 🟡 **Wait** 2 s → 🟢 **Motor Off** → 🟡 **Wait** 3 s → 🟢 **Motor That Way** → 🟡 **Wait** 2 s → 🟢 **Motor Off** | Cârligul coboară, stă 3 secunde, apoi urcă la loc |

Schema programului:

```
  [🟡 Start] → [🟢 Motor This Way] → [🟡 Wait 2 s] → [🟢 Motor Off]
  → [🟡 Wait 3 s] → [🟢 Motor That Way] → [🟡 Wait 2 s] → [🟢 Motor Off]
```

**Experimentul:** schimbi **cât timp** merge motorul și măsori cu rigla **cât de jos** a coborât cârligul.

| Încercarea | 🟡 **Wait** | Cât a coborât cârligul (cm) |
|------------|-------------|------------------------------|
| 1 | 1 secundă | ___ |
| 2 | 2 secunde | ___ |
| 3 | 3 secunde | ___ |

Folosești **Motor Power** 5 la toate trei, schimbi doar **Wait**. Înainte de fiecare încercare strângi sfoara la loc.

**Încearcă tu — experiment (20 min)**  
- [ ] Programul B: cârligul coboară, stă și urcă  
- [ ] Completezi toate cele 3 încercări din tabel  
- [ ] Spui cât timp trebuie ca să ajungă la ladă  

### 5) Proiectul 2 — Suplimentul: programul C
Aplicația te învață programele A și B. Aici adaugi comenzi noi și le legi într-un **program C**: o **misiune de salvare**, cu lumină care clipește.

**Programul C — Misiunea de salvare**

| Blocurile | Ce se întâmplă |
|-----------|----------------|
| 🟡 **Start** → 🔴 **Display** „Salvare!” → 🟡 **Loop** 4 ori [ 🟢 **Hub Light** roșu → 🔴 **Play Sound** → 🟡 **Wait** 0,5 s → 🟢 **Hub Light** verde → 🟡 **Wait** 0,5 s ] → 🟢 **Motor This Way** → 🟡 **Wait** 2 s → 🟢 **Motor Off** → 🟡 **Wait** 2 s → 🟢 **Motor That Way** → 🟡 **Wait** 2 s → 🟢 **Motor Off** | Mesajul apare, lumina clipește roșu și verde de 4 ori cu sirenă, apoi cârligul coboară, stă și urcă |

Schema programului (blocurile din paranteze stau **în** 🟡 **Loop**):

```
  [🟡 Start] → [🔴 Display Salvare!] → [🟡 Loop 4 ori]
                                            │
                                            └─ în Loop:
                                               [🟢 Hub Light roșu] → [🔴 Play Sound] → [🟡 Wait 0,5 s]
                                               → [🟢 Hub Light verde] → [🟡 Wait 0,5 s]
  după Loop:
  [🟢 Motor This Way] → [🟡 Wait 2 s] → [🟢 Motor Off] → [🟡 Wait 2 s]
  → [🟢 Motor That Way] → [🟡 Wait 2 s] → [🟢 Motor Off]
```

**Încearcă tu — supliment (15 min)**  
- [ ] Programul C: mesajul apare și lumina clipește  
- [ ] Se aude sirena la fiecare clipire  
- [ ] Cârligul coboară, stă și urcă după clipiri  

---

## Greșeli frecvente
1. **Troliul nu se învârte** — verifici dacă motorul e conectat la hub și dacă hub-ul e conectat la aplicație (lumina fixă).  
2. **Motorul merge, dar sfoara stă** — curelele galbene au sărit sau nu sunt întinse; verifici pașii 18–26.  
3. **Sfoara se încurcă** — o derulezi cu mâna și o pui la loc, fără noduri.  
4. **Lumina nu clipește** — blocurile nu sunt **în** Loop; le tragi înăuntru.  
5. **Cârligul coboară prea jos** — **Wait** e prea mare; scazi timpul.

---

## De făcut azi — „Elicopterul de salvare”
Salvat: `Prenume_Nume_R1_L08`

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | **Proiectul 1:** elicopterul construit după cei 55 de pași · programul **A** învârte troliul 2 secunde |
| **Complet** | Minim + **Proiectul 2:** programul **B** · tabelul cu 3 încercări completat · programul **C** (misiunea de salvare) |

Dacă rămâi în urmă: lasă elicopterul gata și programul **A** pornit.

### Pasul 1 — Locul și piesele
- [ ] Masă plată, loc sub elicopter  

### Pasul 2 — Elicopterul *(Minim)*
- [ ] Elicopterul e construit, cu sfoara fără noduri  
- [ ] Programul **A** merge și se oprește singur  

**→ Minim când:** troliul se învârte 2 secunde, fără ajutor.

### Pasul 3 — Salvarea și semnalele *(Complet)*
- [ ] Programul **B** merge  
- [ ] Tabelul cu 3 încercări e completat  
- [ ] Programul **C**: lumina clipește, cârligul coboară și urcă  

**Gata Complet când:** cârligul coboară până lângă ladă și urcă la loc.

---

## Bonus ★★★ — Provocare: „Salvarea exactă”
*Doar dacă ai terminat Complet.*

Pui lada pe masă, sub elicopter. Faci un program în care cârligul coboară și se oprește **la cel mult 2 cm** deasupra lăzii, apoi lumina devine verde și se aude un sunet.  
Reglezi 🟡 **Wait** și 🟢 **Motor Power** până îți iese.

Te-ai oprit la mai puțin de 2 cm de ladă?

---

## Recapitulare pe scurt
1. 🟢 **Motor This Way** și 🟢 **Motor That Way** coboară și ridică cârligul  
2. 🟡 **Wait** alege cât se derulează sfoara  
3. 🟡 **Loop** repetă blocurile din interior, ca să clipească lumina  
4. 🟢 **Hub Light** roșu și verde pe rând sunt un semnal  
5. Un experiment bun schimbă **un singur lucru** o dată

---

## Quiz scurt
1. Ce alege cât coboară cârligul?  
2. Ce face un 🟡 **Loop**?  
3. Cum faci lumina să clipească?  
4. De ce strângi sfoara înainte de fiecare încercare?  
5. Ce se întâmplă dacă blocurile nu sunt în Loop?

---

## Temă
- Scrii într-o propoziție ce ai aflat din tabelul cu 3 încercări.  
- Gândești alte semnale pentru o misiune de salvare (culori, sunete, mesaje) și le scrii pe foaie.  
- Nu demontezi nimic: elicopterul rămâne pregătit pentru lecția următoare.

---

## Ce urmează — Lecția 9
Construim un **camion de reciclare** și îl programăm să facă o misiune: merge până la container, sună și dă înapoi.
