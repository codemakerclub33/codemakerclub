# LECȚIA 9 — Alegerea ta
### Un obby după planul tău
**Modulul 1 · Place Builder**  
**Code Maker Club · Roblox Studio**

> Azi construiești **Etapa 9** după **tema și planul tău**: ai scheletul dat (teren, Start, Finish), iar tu proiectezi traseul, decorul și punctele de odihnă. Folosești tot ce ai învățat în L1–L8.  
> Proiect: **„Etapa9_NumeTema”** (de exemplu `Etapa9_Plaja`) · Place: `Prenume_Nume_M1`

---

## Ce facem azi
La finalul orei ai **Etapa 9**: un obby făcut de tine, pe o temă aleasă de tine. Are **Start** și **Finish** la capete opuse, un traseu cu **cel puțin 8 sărituri sau obstacole**, **decor** pe tema ta, **două puncte de odihnă** și **cel puțin 25 de piese**. Lucrezi după un **plan** făcut înainte, cu schiță și tabel.

**Notă:** azi tot fără cod. Ești proiectant: nimeni nu îți dă coordonatele traseului, doar scheletul.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L8 · deschidem Place-ul `Prenume_Nume_M1` |
| 10–30 | Alegi tema · schița și planul pe hârtie (**Încearcă tu**) |
| 30–50 | Scheletul etapei: teren, Start, Finish |
| 50–100 | Construiești traseul, decorul, punctele de odihnă |
| 100–120 | Test cu reparații · recap, quiz, salvare · **Bonus ★★★** pentru cine termină devreme |

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| **Planul** | Schiță + tabel cu piesele, **înainte** de construit | Nume, formă, Size, Position |
| **Regulile obby-ului** | Dimensiuni sigure pentru salturi | Gol de cel mult 5 stud-uri |
| **Ctrl+D** | Repeți un element decorativ | 6 palmieri |
| **Ctrl+G** | Faci grupuri mici, apoi un grup mare | Un palmier = trunchi + coroană |
| **Punct de odihnă** | Placă subțire, albastru deschis | `Check1`, `Check2` |

---

## Pas cu pas

### 1) Tema și planul
Alegi **o temă**. Lista de mai jos e un punct de plecare; poți inventa alta, dacă o poți construi cu forme simple.

| Tema | Idei de piese |
|------|---------------|
| **Plajă cu volei** | Nisip (**Sand**), teren cu plasă, palmieri (**Cylinder** + **Sphere**), apă (**Glass**, `Transparency` `0.4`), mingi (**Sphere**), pasarelă de lemn |
| **Canion** | Stânci (**Block** mari, **Rock**, **Slate**, **Granite**), stâlpi de stâncă (**Cylinder**), pod îngust, rampe (**Wedge**) |
| **Insulă** | Pietre plutitoare, copaci, un pod, o cascadă ca decor (**Block** albastru) |
| **Bază spațială** | Module din **Cylinder**, platforme din **Metal**, tuburi, antene, lumini din **Neon** |
| **Parcare cu etaje** | Platforme la înălțimi diferite, rampe (**Wedge**), mașini, bariere |

**Planul tău** are două părți:

1. **Schiță de sus**, pe hârtie: sus nordul, jos sudul, **Start** în stânga, **Finish** în dreapta, traseul, locul punctelor de odihnă  
2. **Tabel de piese**, cu aceste coloane: `Nume`, `Formă`, `Size`, `Position`, `Material`, `Culoare`. Completezi cât mai mult înainte să construiești. Mai bine un plan simplu, dar complet  

**Încearcă tu — planul (15 min)**  
- [ ] Ai ales tema  
- [ ] Ai o schiță cu Start, Finish și traseul între ele  
- [ ] Ai cel puțin **8 rânduri** în tabelul de piese  

### 2) Scheletul etapei (dat)
Etapa 9 stă la **150 de stud-uri** de Etapa 1, spre **dreapta** pe axa roșie, și la **Z = -150**. Centrul ei e `150, 0, -150`. Aceste piese sunt la fel pentru toți: de ele depinde legătura cu celelalte etape de la L10.

| Nume | Formă | Size | Position | Material | Culoare |
|------|-------|------|----------|----------|---------|
| `Teren9` | Block | `80, 1, 60` | `150, 0.5, -150` | la alegere | la alegere |
| `SpawnLocation` (Start) | — | `8, 1, 8` | `115, 1.5, -150` | — | verde |
| `Finish` | Block | `8, 1, 8` | `185, 1.5, -150` | Neon | galben |

Traseul tău ia **Start**, trece prin toate obstacolele și ajunge la **Finish**. Terenul se întinde de la `X = 110` la `X = 190`; **nu** muți capetele lui.

**Încearcă tu — scheletul (10 min)**  
- [ ] `Teren9`, Start și Finish la pozițiile din tabel, ancorate  
- [ ] **Play**: apari la Start; Finish se vede  

### 3) Regulile unui obby bun
Un obby trebuie să fie **greu, dar corect**. Folosești aceste limite:

| Regulă | Valoare |
|--------|---------|
| **Gol** între două platforme (pe orizontală) | cel mult **5** stud-uri |
| **Diferența de înălțime** între platforme | cel mult **4** stud-uri în sus |
| **Platformă** (cea mai mică) | cel puțin `4, 1, 4` |
| **Câte sărituri** | cel puțin **8** în traseu |
| **Ceva imposibil** | niciodată: poți ajunge cu un salt normal |

Ordine bună: **ușor** la început, **mai greu** la mijloc, **un moment de odihnă** (punct albastru), apoi iar greu, apoi Finish.

**Încearcă tu — verifici planul (3 min)**  
- [ ] Niciun gol din plan nu e mai mare de 5 stud-uri  
- [ ] Nicio diferență de înălțime nu e mai mare de 4 stud-uri  

### 4) Construiești etapa
**Pe rând:**

1. **Traseul:** platformele din plan, cu **Position** și **Size** din tabel; după fiecare 3–4 piese apeși **Play** și testezi  
2. **Decorul:** piese de pe tema ta (copaci, stânci, mașini). Un decor **repetat** (**Ctrl+D**) de cel puțin 4 ori  
3. **Grupuri mici:** un copac, o mașină, o stâncă sunt grupuri (**Ctrl+G**) cu nume clare  
4. **Material** și **Color** pe toate piesele; nu lași nimic gri implicit  
5. **Două puncte de odihnă** `Check1` și `Check2` (plăci subțiri, **Neon**, albastru deschis), pe traseu, unul după aproximativ 3 sărituri și unul după aproximativ 6  
6. **Ancorezi** totul. Verifici cu **Visualization Modes** → **Anchored parts**  
7. La final, selectezi tot ce ai făcut azi (fără SpawnLocation) cu **Shift + click** în **Explorer**, **Ctrl+G**, redenumești grupul **`Etapa9_NumeTema`**. Salvezi  

**Încearcă tu — construcția (40–50 min)**  
- [ ] Traseu cu cel puțin 8 sărituri  
- [ ] Decor pe tema ta, cu un element repetat de cel puțin 4 ori  
- [ ] Cel puțin 25 de piese, toate cu **Material** și **Color**  
- [ ] 2 puncte de odihnă  
- [ ] Toate ancorate · grup `Etapa9_NumeTema` · salvat  

### 5) Test și reparații
1. **Play** și parcurgi etapa de la Start la Finish  
2. Notezi **unde** ai căzut sau ai rămas blocat  
3. **Stop**, repari (**Position**, **Size**), **Play** din nou  
4. Faci cel puțin **două** cicluri „găsești, repari, testezi din nou”  
5. Te uiți la etapă și **de sus**, și **din lateral**, și **de la nivelul avatarului** (ca la L5)  

**Încearcă tu — testul (10 min)**  
- [ ] Ai parcurs etapa fără să cazi, cel puțin o dată  
- [ ] Ai reparat cel puțin două probleme  
- [ ] Salvat  

---

## Greșeli frecvente
1. **Construiesc fără plan** — mai întâi schița și tabelul, apoi piesele.  
2. **Golul dintre platforme e prea mare** — cel mult 5 stud-uri.  
3. **Traseul trece prin decor** — decorul stă lângă traseu, nu pe el.  
4. **Piesele cad la Play** — lipsește **Anchor**.  
5. **Am mutat Start sau Finish** — la L10 nu se mai leagă de celelalte etape; le pui înapoi la pozițiile din tabel.  
6. **Tot e gri** — pui **Material** și **Color** pe toate.  
7. **Nume `Part`** — fiecare piesă și grup are un nume clar.  

---

## De făcut azi — „Etapa9_NumeTema”
Salvat: `Prenume_Nume_M1`

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Plan (schiță + tabel), scheletul (`Teren9`, Start, Finish), cel puțin **15 piese**, ancorate, cu **Material** și **Color**, și un traseu cu cel puțin **5 sărituri** care duce de la Start la Finish |
| **Complet** | Minim + cel puțin **25 de piese**, **8 sărituri**, decor repetat de cel puțin 4 ori, grupuri mici cu nume, **2 puncte de odihnă**, grup `Etapa9_NumeTema`, parcurs fără să cazi |

Dacă rămâi în urmă: salvează la **Minim**.

### Pasul 1 — Planul
- [ ] Tema aleasă · schiță · tabel cu cel puțin 8 rânduri  

### Pasul 2 — Scheletul și traseul *(Minim)*
- [ ] `Teren9`, Start, Finish  
- [ ] Cel puțin 15 piese · traseu cu cel puțin 5 sărituri  
- [ ] Parcurs în Play · salvat  

**→ Minim când:** ajungi de la Start la Finish pe traseul tău.

### Pasul 3 — Decor, grupuri, puncte de odihnă *(Complet)*
- [ ] Decor repetat cu **Ctrl+D**, grupuri mici  
- [ ] 2 puncte de odihnă · 25 de piese  
- [ ] Grup `Etapa9_NumeTema` · salvat  

**Gata Complet când:** parcurgi etapa fără să cazi și planul ei se potrivește cu ce ai construit.

---

## Bonus ★★★ — Provocare: Trei secțiuni
*Doar dacă ai terminat Complet.*

- [ ] Împarți traseul în **trei secțiuni**: **ușoară** (verde), **medie** (galben), **grea** (roșu). Marchezi începutul fiecăreia cu o placă subțire de culoarea ei  
- [ ] Un **coleg** parcurge etapa **fără ajutor**; tu **nu spui nimic**  
- [ ] Notezi **unde a căzut** și de câte ori  
- [ ] Repari cel puțin **2 locuri** și îl rogi să mai încerce o dată  

## Recapitulare pe scurt
1. Mai întâi **planul**: schiță și tabel  
2. Scheletul e dat: `Teren9`, Start, Finish  
3. Goluri de cel mult 5 stud-uri, urcări de cel mult 4  
4. **Ctrl+D** repetă, **Ctrl+G** grupează  
5. Găsești, repari, testezi din nou  
6. Etapa 9 e grupul `Etapa9_NumeTema`  

## Quiz scurt
- De ce facem planul înainte să construim?  
- Care e cel mai mare gol între platforme pe care îl accepți?  
- Cum faci repede 6 palmieri identici?  

## Temă
Opțional, acasă (dacă ai Studio): mai adaugă 5 piese de decor în `Etapa9_NumeTema` și testează din nou. Rămâi în același Place.

---

## Ce urmează — Lecția 10
În **lecția 10** legi cele **9 etape** cu **pasarele**, faci **Poarta Parcului** și **podiumul**, colorezi zonele, repari trei probleme după testul unui coleg și îți prezinți lumea.
