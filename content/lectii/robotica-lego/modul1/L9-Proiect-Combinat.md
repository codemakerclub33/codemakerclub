# LECȚIA 9 — Camionul de reciclare
### Mers înainte, mers înapoi și semnale de manevră
**Modulul 1 · Robotică LEGO WeDo 2.0**  
**Code Maker Club · Robot Starter**

> Azi construiești un **camion de reciclare** și îl programezi să facă o **misiune**: merge până la container, se oprește, anunță cu sunete și apoi dă **înapoi**, ca un camion adevărat.  
> Proiect: **„Camionul de reciclare”** · Salvezi programele ca `Prenume_Nume_R1_L09`

---

## Ce facem azi
La finalul orei ai un **camion de reciclare** care merge până la un container, se oprește singur, sună și dă înapoi. Folosești tot ce ai învățat: **viteza** (🟢 **Motor Power**), **timpul** (🟡 **Wait**), **direcția** (🟢 **Motor This Way** și 🟢 **Motor That Way**), **repetarea** (🟡 **Loop**) și **semnalele** (🟢 **Hub Light**, 🔴 **Play Sound**, 🔴 **Display**). Programele din aplicație sunt aceleași pentru toți, iar **suplimentul** îți arată cum faci o **misiune completă**, cu manevră de mers înapoi.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L8 · pregătim piesele și pista |
| 10–50 | **Proiectul 1** · șasiul, hub-ul, motorul și mecanismul |
| 50–75 | **Proiectul 1** · cabina, platforma, containerul și programul **A** |
| 75–100 | **Proiectul 2** · programul **B** și experimentul cu trei durate |
| 100–115 | **Suplimentul** · programul **C**, misiunea de reciclare |
| 115–120 | Recap, quiz, salvare · **Bonus ★★★** pentru cine termină devreme |

---

## Instrucțiuni noi azi
Azi nu apar blocuri noi: **le combini** pe cele pe care le știi.

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| 🟢 **Motor Power** | Viteza, de la 1 la 9 | 5 = viteza camionului |
| 🟢 **Motor This Way** / 🟢 **Motor That Way** | Înainte sau înapoi | Merge, apoi dă înapoi |
| 🟡 **Wait** | Cât merge camionul | 3 secunde |
| 🟡 **Loop** | Repetă | Sună de 3 ori |
| 🟢 **Hub Light**, 🔴 **Play Sound**, 🔴 **Display** | Semnale | Lumină galbenă, sunet, mesaj |

---

## Culorile blocurilor
Blocurile din aplicație au culori: 🟡 **galbene** (pornesc și conduc programul), 🟢 **verzi** (motor și lumina hub-ului), 🔴 **roșii** (ecran și sunet), 🔵 **albastre** (senzori). Azi folosim blocuri 🟡, 🟢 și 🔴.

Le pui în rând, de la stânga la dreapta, lipite unul de altul. Blocurile din interiorul unui 🟡 **Loop** sunt cele repetate.

---

## Pas cu pas

### 1) Piesele și pista
Pe masă pui doar ce ai nevoie: **hub-ul**, **motorul**, piese verzi, portocalii, albastre și gri, roțile și elasticul. Pregătești o **pistă dreaptă** de cel puțin **un metru**, cu o riglă lângă ea și o **linie de start**.

**Încearcă tu — pista (3 min)**  
- [ ] Pista e dreaptă, de cel puțin un metru  
- [ ] Linia de start e marcată  

### 2) Proiectul 1 — Șasiul, hub-ul, motorul și mecanismul
Construiești camionul din cei 48 de pași. Pe fiecare pas ai nevoie de anumite piese, în număr precis; ia doar atât. Cine are calculatorul la îndemână poate deschide aplicația **WeDo 2.0 pentru calculator**, unde construcția e arătată pas cu pas.

**Etapa 1 · șasiul (pașii 1–14)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **1–10** | Cadrul lung **verde**, cu două bare și piese portocalii | Cadrul stă drept |
| **11–14** | Piesele mici și axele care trec prin cadru | Axele se învârt liber |

**Etapa 2 · hub-ul și motorul (pașii 15–27)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **15–17** | Pui **hub-ul** deasupra și piesele albastre și verzi din jur | Hub-ul e prins |
| **18** | Prinzi **motorul**, cu cablul lui, și conectezi cablul la hub | Cablul ajunge la hub |
| **19–27** | **Mecanismul** de antrenare: piese negre și gri, axa cu capăt roșu (la pasul 27 verifici piesele din poză) | Axa se învârte când o atingi |

**Încearcă tu — șasiul și motorul (18 min)**  
- [ ] Motorul e prins ferm și cablul nu e strâns  
- [ ] Rotești axa cu degetul: mecanismul se mișcă fără să se agațe  

### 3) Proiectul 1 — Cabina, platforma, containerul și programul A
**Etapa 3 · axele și latura (pașii 28–33)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **28–33** | Piesele laterale, care țin axele roților | Piesele nu se mișcă |

**Etapa 4 · cabina, platforma și roțile (pașii 34–43)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **34–37** | Piese gri, portocalii și albastre, care fac **cabina** | Cabina stă dreaptă |
| **38–42** | **Platforma** din plăci verzi, cu piese portocalii (la pașii 38 și 42 întorci modelul) | Platforma e dreaptă |
| **43** | **Roțile** și elasticul galben, care leagă motorul de axă (la pasul 43 întorci modelul) | Elasticul e întins, roțile se învârt |

**Etapa 5 · containerul (pașii 44–48)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **44–48** | **Containerul** din piese albastre și portocalii | Containerul nu se desface |

Verifici toți cei **48 de pași**: camionul tău seamănă cu poza finală? Containerul îl pui pe pistă, la **50 cm** de linia de start.

**Programul A — Merge până la container**

| Blocurile | Ce se întâmplă |
|-----------|----------------|
| 🟡 **Start** → 🟢 **Motor Power** 5 → 🟢 **Motor This Way** → 🟡 **Wait** 3 secunde → 🟢 **Motor Off** | Camionul merge 3 secunde la viteza 5 și se oprește |

Schema programului:

```
  [🟡 Start] → [🟢 Motor Power 5] → [🟢 Motor This Way] → [🟡 Wait 3 s] → [🟢 Motor Off]
```

**Încearcă tu — camionul (25 min)**  
- [ ] Camionul seamănă cu poza finală  
- [ ] Programul A: camionul merge 3 secunde și se oprește singur  
- [ ] Spui dacă a mers **înainte** sau **înapoi**, și ce schimbi pentru **cealaltă** direcție  

### 4) Proiectul 2 — Până la container: programul B și experimentul
**Programul B — Merge și dă înapoi**

| Blocurile | Ce se întâmplă |
|-----------|----------------|
| 🟡 **Start** → 🟢 **Motor Power** 5 → 🟢 **Motor This Way** → 🟡 **Wait** 3 s → 🟢 **Motor Off** → 🟡 **Wait** 2 s → 🟢 **Motor That Way** → 🟡 **Wait** 3 s → 🟢 **Motor Off** | Camionul merge 3 secunde, stă 2 secunde, apoi dă înapoi 3 secunde |

Schema programului:

```
  [🟡 Start] → [🟢 Motor Power 5] → [🟢 Motor This Way] → [🟡 Wait 3 s] → [🟢 Motor Off]
  → [🟡 Wait 2 s] → [🟢 Motor That Way] → [🟡 Wait 3 s] → [🟢 Motor Off]
```

**Experimentul:** cauți cât trebuie să meargă camionul ca să ajungă la container. Containerul e la **50 cm** de linia de start; notezi unde se oprește camionul.

| Încercarea | 🟡 **Wait** | Unde s-a oprit față de container |
|------------|-------------|----------------------------------|
| 1 | 2 secunde | ___ (înainte / lângă / după) |
| 2 | 3 secunde | ___ |
| 3 | 4 secunde | ___ |

Folosești **Motor Power** 5 la toate trei. Pornești de fiecare dată de la linia de start.

**Încearcă tu — experiment (20 min)**  
- [ ] Programul B: camionul merge, stă și dă înapoi  
- [ ] Completezi toate cele 3 încercări din tabel  
- [ ] Spui care **Wait** l-a oprit cel mai aproape de container  

### 5) Proiectul 2 — Suplimentul: programul C
Aplicația te învață programele A și B. Aici le combini într-un **program C**: o **misiune de reciclare** completă.

**Programul C — Misiunea de reciclare**

| Blocurile | Ce se întâmplă |
|-----------|----------------|
| 🟡 **Start** → 🔴 **Display** „Reciclare!” → 🟢 **Hub Light** galben → 🟢 **Motor Power** 5 → 🟢 **Motor This Way** → 🟡 **Wait** 3 s → 🟢 **Motor Off** → 🟡 **Loop** 3 ori [ 🔴 **Play Sound** → 🟡 **Wait** 0,5 s ] → 🟢 **Hub Light** roșu → 🟢 **Motor That Way** → 🟡 **Wait** 3 s → 🟢 **Motor Off** → 🟢 **Hub Light** verde | Mesaj și lumină galbenă; merge la container, se oprește, sună de 3 ori; apoi dă înapoi cu lumina roșie, iar la final lumina e verde |

Schema programului (blocurile din paranteze stau **în** 🟡 **Loop**):

```
  [🟡 Start] → [🔴 Display Reciclare!] → [🟢 Hub Light galben] → [🟢 Motor Power 5]
  → [🟢 Motor This Way] → [🟡 Wait 3 s] → [🟢 Motor Off] → [🟡 Loop 3 ori] → ...
                                                                 │
                                                                 └─ în Loop:
                                                                    [🔴 Play Sound] → [🟡 Wait 0,5 s]
  după Loop:
  [🟢 Hub Light roșu] → [🟢 Motor That Way] → [🟡 Wait 3 s] → [🟢 Motor Off] → [🟢 Hub Light verde]
```

**Încearcă tu — supliment (15 min)**  
- [ ] Programul C: mesaj, lumină galbenă, mers până la container  
- [ ] Camionul sună de 3 ori și dă înapoi cu lumina roșie  
- [ ] La final lumina e verde  

---

## Greșeli frecvente
1. **Camionul nu merge** — verifici dacă motorul e conectat la hub și dacă hub-ul e conectat la aplicație (lumina fixă).  
2. **Motorul merge, dar roțile stau** — elasticul galben a sărit sau nu e întins; verifici pasul 43.  
3. **Camionul merge strâmb** — roțile nu sunt prinse la fel; verifici pașii 28–33 și 43.  
4. **Dă înapoi, dar nu ajunge la linia de start** — **Wait** de la înapoi e mai mic decât cel de la înainte; le faci egale.  
5. **Nu sună de 3 ori** — blocurile nu sunt **în** Loop; le tragi înăuntru.

---

## De făcut azi — „Camionul de reciclare”
Salvat: `Prenume_Nume_R1_L09`

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | **Proiectul 1:** camionul construit după cei 48 de pași · programul **A** merge 3 secunde și se oprește |
| **Complet** | Minim + **Proiectul 2:** programul **B** · tabelul cu 3 încercări completat · programul **C** (misiunea) |

Dacă rămâi în urmă: lasă camionul gata și programul **A** pornit.

### Pasul 1 — Pista și piesele
- [ ] Pistă dreaptă, linie de start, container la 50 cm  

### Pasul 2 — Camionul *(Minim)*
- [ ] Camionul e construit, cu elasticul întins  
- [ ] Programul **A** merge și se oprește singur  

**→ Minim când:** camionul merge 3 secunde, fără ajutor.

### Pasul 3 — Misiunea *(Complet)*
- [ ] Programul **B** merge  
- [ ] Tabelul cu 3 încercări e completat  
- [ ] Programul **C**: mers, sunet, mers înapoi, lumini  

**Gata Complet când:** camionul ajunge lângă container, sună și se întoarce la start.

---

## Bonus ★★★ — Provocare: „Parcare exactă”
*Doar dacă ai terminat Complet.*

Faci un program în care camionul se oprește la **cel mult 5 cm** de container, sună, apoi dă înapoi și se oprește la **cel mult 5 cm** de linia de start.  
Reglezi 🟡 **Wait** și 🟢 **Motor Power** pentru fiecare drum, înainte și înapoi.

Te-ai oprit în 5 cm la ambele capete?

---

## Recapitulare pe scurt
1. 🟢 **Motor This Way** merge înainte, 🟢 **Motor That Way** dă înapoi  
2. 🟡 **Wait** alege cât merge camionul  
3. 🟢 **Motor Power** schimbă viteza  
4. 🟡 **Loop** repetă semnalul de manevră  
5. Un program bun combină blocurile învățate, în ordine

---

## Quiz scurt
1. Cum faci camionul să dea înapoi?  
2. Ce alege cât merge camionul?  
3. Ce pui într-un 🟡 **Loop** ca să sune de 3 ori?  
4. De ce pornim de fiecare dată de la aceeași linie?  
5. Ce blocuri verzi ai folosit azi?

---

## Temă
- Scrii într-o propoziție ce ai aflat din tabelul cu 3 încercări.  
- Alegi cel mai bun program din modul (A, B sau C, din orice lecție) și scrii ce ai schimba la el.  
- Nu demontezi nimic: camionul rămâne pregătit pentru lecția următoare.

---

## Ce urmează — Lecția 10
Construim un **rover lunar**, îl trimitem într-o misiune, apoi prezentăm ce am învățat în modul și primim insigna **Robot Starter**.
