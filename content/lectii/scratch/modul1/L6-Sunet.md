# Lecția 6 — Concertul
### Sunet
**Modulul 1 · Primii pași**  
**Code Maker Club · Scratch Starter**

> Azi controlezi **cât de tare**, **cum sună** și **când se oprește** sunetul.  
> Proiect: **„Concertul”** · fișier: `Prenume_Nume_L6` (ex. `Ana_Pop_L6`)

---

## Obiectiv
La finalul orei concertul tău are sunet: personajele cântă mai încet sau mai tare, schimbă înălțimea sunetului și îl opresc la momentul potrivit, cu blocuri din <span style="color:#CF63CF;font-weight:700">Sunet</span>.  
**Minim:** personajul 1 (Chitaristul) cu cel puțin **8 blocuri diferite**.  
**Ținta orei (Complet):** personajul 2 (Toboșarul), cu cel puțin **8 blocuri diferite**, care intră la semnalul Chitaristului.

## De ce contează
În jocuri și filme, sunetul spune „start”, „bravo” sau „ai pierdut” fără text. Un sunet mai încet sau mai ascuțit schimbă tot felul în care simți scena.  
În Scratch, asta e capitolul <span style="color:#CF63CF;font-weight:700">Sunet</span> (EN: *Sound*).

**În clasă (înainte să pornim):** căști dacă se poate; altfel volumul PC **jos**. Testăm pe rând, nu toată sala pe steag odată.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + regula căștilor |
| 5–35 | Pas cu pas: **4** mini-verificări (**Încearcă tu**) |
| 35–105 | Proiectul „Concertul” (vezi **Minim vs Complet**) |
| 105–120 | Recap, bonus, salvare |

**Capitole azi (doar acestea 5):**  
<span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#CF63CF;font-weight:700">Sunet</span> · <span style="color:#9966FF;font-weight:700">Aspect</span> · <span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#4C97FF;font-weight:700">Mișcare</span>  
*(Detectare, Operatori, Variabile — mai târziu.)*

**Blocuri noi azi:**

| Bloc | Ce face |
|------|---------|
| `modifică volumul cu` | face sunetul mai tare (număr pozitiv) sau mai încet (număr negativ); de fiecare dată se adună |
| `setează volumul la` | pune volumul exact la procentul ales (100 % = volumul normal) |
| `volum` | e o valoare: arată volumul de acum; o pui în `spune` ca să o vezi |
| `modifică efectul [înălțimea sunetului] cu` | face sunetul mai ascuțit (număr pozitiv) sau mai grav (număr negativ); se adună |
| `setează efectul [înălțimea sunetului] la` | pune efectul exact la valoarea aleasă (0 = sunet normal) |
| `șterge efectele audio` | scoate toate efectele de pe sunet, iar sunetul revine la normal |
| `oprește toate sunetele` | oprește imediat orice sunet care cântă, de la toate personajele |
| `când [intensitatea sunetului] > …` | pornește scriptul când microfonul aude un sunet mai tare decât valoarea ta |

---

## Pas cu pas

| Capitol | Ce iei azi |
|---------|------------|
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | `când se dă click pe` steagul verde, `când tasta [ ] este apăsată`, `când primesc`, `difuzează`, **`când [intensitatea sunetului] > …`** |
| <span style="color:#CF63CF;font-weight:700">Sunet</span> | **`modifică volumul cu`**, **`setează volumul la`**, **`volum`**, **`modifică efectul [înălțimea sunetului] cu`**, **`setează efectul … la`**, **`șterge efectele audio`**, **`oprește toate sunetele`**, `pornește sunetul`, `redă sunetul … până la final` |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | `spune … pentru … secunde`, `spune [ ]`, `gândește [ ]`, `setează mărimea la`, `modifică mărimea cu`, `costumul următor` |
| <span style="color:#FFAB19;font-weight:700">Control</span> | `repetă`, `așteaptă` |
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | `mergi la x: y:`, `orientează-te în direcția` |

### 1) Volumul
1. Selectezi **personajul**. În tab-ul **Sunete** trebuie să aibă cel puțin un sunet; fără el, blocurile din <span style="color:#CF63CF;font-weight:700">Sunet</span> nu au ce reda
2. Din <span style="color:#CF63CF;font-weight:700">Sunet</span>: <span style="color:#CF63CF;font-weight:700">setează volumul la</span> `40` %, apoi <span style="color:#CF63CF;font-weight:700">pornește sunetul</span>
3. Sub el: <span style="color:#FFAB19;font-weight:700">așteaptă</span> `2` secunde, apoi <span style="color:#CF63CF;font-weight:700">modifică volumul cu</span> `20` și pornești din nou sunetul. Se aude mai tare
4. Blocul <span style="color:#CF63CF;font-weight:700">volum</span> arată cât e volumul acum. Îl tragi în <span style="color:#9966FF;font-weight:700">spune</span> `( volum )` pentru `2` secunde și vezi numărul
5. Diferența: `modifică` **adaugă** la volumul de acum, `setează` **pune** valoarea exactă

**Încearcă tu — volum (2–3 min)**  
- [ ] Sunetul se aude mai încet la `40`  
- [ ] După `modifică volumul cu` se aude mai tare  
- [ ] Personajul spune numărul volumului  

### 2) Efecte audio
1. <span style="color:#CF63CF;font-weight:700">modifică efectul [înălțimea sunetului] cu</span> `-20` — sunetul devine mai grav. Cu număr pozitiv devine mai ascuțit
2. <span style="color:#CF63CF;font-weight:700">setează efectul [înălțimea sunetului] la</span> `0` — sunetul normal
3. <span style="color:#CF63CF;font-weight:700">șterge efectele audio</span> — scoate toate efectele deodată
4. Efectul **rămâne** și la steagul următor, de aceea la start pui `șterge efectele audio` sau `setează efectul … la` `0`

**Încearcă tu — efect (2–3 min)**  
- [ ] Sunetul se aude mai grav sau mai ascuțit  
- [ ] La steag începi mereu cu sunetul normal  

### 3) Oprește sunetele
1. Pornești un sunet lung cu <span style="color:#CF63CF;font-weight:700">pornește sunetul</span>
2. După <span style="color:#FFAB19;font-weight:700">așteaptă</span> `1` secundă pui <span style="color:#CF63CF;font-weight:700">oprește toate sunetele</span>
3. Sunetul se oprește pe loc, indiferent cât mai avea de cântat. Oprește și sunetele celorlalte personaje

**Încearcă tu — oprire (1–2 min)**  
- [ ] Sunetul se oprește după o secundă  

### 4) Microfonul
1. Din <span style="color:#E6A800;font-weight:700">Evenimente</span>: <span style="color:#E6A800;font-weight:700">când [intensitatea sunetului] > </span> `30`. Scriptul pornește când microfonul aude un sunet mai tare de `30`
2. Browserul cere permisiunea pentru microfon. Apeși **Permite**
3. Sub bloc pui <span style="color:#9966FF;font-weight:700">modifică mărimea cu</span> `20` și bați din palme lângă microfon
4. Dacă laptopul nu are microfon, sari peste pasul 4. Nu e nevoie de el pentru Minim sau Complet

**Încearcă tu — microfon (1–2 min)**  
- [ ] Microfonul e permis și personajul crește când bați din palme (sau ai sărit peste, fără microfon)  

---

## Greșeli frecvente
1. **Nu auzi nimic** — personajul nu are sunet în tab-ul Sunete, sau volumul PC e jos. Verifică ambele.  
2. **Volumul rămâne încet sau tare** — se păstrează de la proba trecută. La start pune `setează volumul la`.  
3. **Sunetul e altfel la al doilea steag** — efectul audio rămâne. La start pune `șterge efectele audio`.  
4. **`modifică` și `setează` se încurcă** — `modifică` adaugă, `setează` pune valoarea exactă.  
5. **`oprește toate sunetele` taie și sunetele celorlalte personaje** — pune doar când vrei liniște peste tot.  
6. **Două personaje cântă peste ele** — le sincronizezi cu `așteaptă` sau cu un mesaj (`difuzează` și `când primesc`).  
7. **Microfonul nu merge** — nu ai apăsat Permite, sau laptopul nu are microfon. Nu e obligatoriu.  
8. **Nume fișier** — `Prenume_Nume_L6`, nu doar `Ana_L6`.  

---

## De făcut azi — „Concertul”
Salvat: `Prenume_Nume_L6`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2** — scena cu sunete + **Chitaristul** cu ≥ 8 blocuri diferite |
| **Complet (ținta orei)** | Minim + **Toboșarul** cu ≥ 8 blocuri diferite, care intră la semnalul Chitaristului |

Dacă rămâi în urmă: salvează la **Minim**. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Scena și sunetele *(Minim)*
Alegi un decor de concert. Redenumești personajele: `Chitaristul`, `Toboșarul`, `Publicul`. Fiecare primește în tab-ul **Sunete** sunetul lui: o chitară, o tobă, aplauze sau urale (sau alt sunet potrivit, din bibliotecă).

- [ ] Decor de concert ales  
- [ ] Fiecare personaj are sunetul lui în tab-ul **Sunete**  

### Pasul 2 — Chitaristul *(Minim)*
Alegi un personaj din bibliotecă care seamănă cu un chitarist. Are **2 scripturi**. Ordinea e un **model**: poți schimba textele, numerele și mesajele.

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#CF63CF;font-weight:700">șterge efectele audio</span>  
<span style="color:#CF63CF;font-weight:700">setează volumul la</span> `40` %  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span> *(chitara)*  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `2` secunde  
<span style="color:#CF63CF;font-weight:700">modifică volumul cu</span> `20`  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `2` secunde  
<span style="color:#CF63CF;font-weight:700">modifică volumul cu</span> `20`  
<span style="color:#9966FF;font-weight:700">spune</span> `( volum )` pentru `2` secunde  
<span style="color:#E6A800;font-weight:700">difuzează</span> `start`  

<span style="color:#E6A800;font-weight:700">când tasta</span> `spațiu` <span style="color:#E6A800;font-weight:700">este apăsată</span>  
<span style="color:#CF63CF;font-weight:700">setează efectul [înălțimea sunetului] la</span> `100`  
<span style="color:#CF63CF;font-weight:700">redă sunetul</span> *(chitara)* <span style="color:#CF63CF;font-weight:700">până la final</span>  
<span style="color:#CF63CF;font-weight:700">modifică efectul [înălțimea sunetului] cu</span> `-20`  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `1` secundă  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span> *(chitara)*  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `1` secundă  
<span style="color:#CF63CF;font-weight:700">oprește toate sunetele</span>  

- [ ] La steag volumul urcă în trepte, iar personajul spune numărul  
- [ ] La steag din nou, sunetul începe normal (efectul e șters)  
- [ ] La **spațiu** sunetul se aude mai ascuțit, apoi mai grav, apoi se oprește  
- [ ] Salvat: `Prenume_Nume_L6`  

**→ Minim când:** Chitaristul pornește încet, urcă volumul, spune numărul, iar la spațiu schimbă înălțimea sunetului și îl oprește.

### Pasul 3 — Toboșarul *(Complet)*
Alegi un personaj care seamănă cu un toboșar. Are **2 scripturi**, iar al doilea pornește când Chitaristul difuzează `start`:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `100` <span style="color:#4C97FF;font-weight:700">y:</span> `-60`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `100` %  

<span style="color:#E6A800;font-weight:700">când primesc</span> `start`  
<span style="color:#CF63CF;font-weight:700">setează volumul la</span> `100` %  
<span style="color:#4C97FF;font-weight:700">orientează-te în direcția</span> `75`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `120` %  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span> *(toba)*  
<span style="color:#FFAB19;font-weight:700">repetă</span> `4` → <span style="color:#9966FF;font-weight:700">modifică mărimea cu</span> `10` → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,5`  
<span style="color:#CF63CF;font-weight:700">oprește toate sunetele</span>  
<span style="color:#9966FF;font-weight:700">gândește</span> `Ritm perfect!`  
<span style="color:#E6A800;font-weight:700">difuzează</span> `final`  

- [ ] Toboșarul stă pe loc până vine `start`  
- [ ] Intră la tobe când Chitaristul termină de vorbit  
- [ ] La final difuzează `final`  
- [ ] Salvat din nou: `Prenume_Nume_L6`  

**Gata Complet când:** Chitaristul cântă și urcă volumul, Toboșarul intră la semnal, crește în ritm, apoi se face liniște, fără explicație cu vocea.

---

## Bonus (dacă ai terminat Complet)
- [ ] **Al 3-lea personaj** (Publicul), care aplaudă la final:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `120`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `50` %  

<span style="color:#E6A800;font-weight:700">când primesc</span> `final`  
<span style="color:#CF63CF;font-weight:700">redă sunetul</span> *(aplauze)* <span style="color:#CF63CF;font-weight:700">până la final</span>  
<span style="color:#FFAB19;font-weight:700">repetă</span> `3` → <span style="color:#9966FF;font-weight:700">costumul următor</span> → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,3`  
<span style="color:#9966FF;font-weight:700">spune</span> `Bis!`  

<span style="color:#E6A800;font-weight:700">când [intensitatea sunetului] ></span> `30`  
<span style="color:#9966FF;font-weight:700">modifică mărimea cu</span> `20`  

- [ ] ★★★ **Provocare:** un „mixer” pe Chitarist: săgeata **sus** crește volumul cu `10`, săgeata **jos** îl scade cu `10`, iar Chitaristul spune volumul de acum

## Recapitulare rapidă
1. `modifică volumul` **adaugă**, `setează volumul` **pune** valoarea exactă  
2. `volum` e o valoare: o pui în `spune` ca să o vezi  
3. Efectul audio rămâne între steaguri: la start pui `șterge efectele audio`  
4. `oprește toate sunetele` oprește sunetele de la toate personajele  
5. Nume: **`Prenume_Nume_L6`**  

## Schema pe scurt *(pe foaie)*

**Pe Chitarist**  
la steag → `șterge efectele audio` → `setează volumul la` → `pornește sunetul` → `așteaptă` → `modifică volumul` → `așteaptă` → `modifică volumul` → `spune ( volum )` → `difuzează start`  
la tasta spațiu → `setează efectul` → `redă sunetul` → `modifică efectul` → `așteaptă` → `pornește sunetul` → `așteaptă` → `oprește toate sunetele`

**Pe Toboșar**  
la steag → `mergi la x: y:` → `setează mărimea la`  
când primesc start → `setează volumul` → `orientează-te în direcția` → `setează mărimea` → `pornește sunetul` → `repetă` (`modifică mărimea` + `așteaptă`) → `oprește toate sunetele` → `gândește` → `difuzează final`

**Quiz scurt (cu profesorul):**  
- Ce diferență e între `modifică volumul cu` și `setează volumul la`?  
- De ce pui `șterge efectele audio` la start?  
- Ce face `oprește toate sunetele` și la ce personaje?  
- Ce arată blocul `volum` și unde îl pui ca să îl vezi?

## Temă (opțional)
- Dacă ai doar Minim: adaugi acasă Toboșarul, în același `Prenume_Nume_L6`.  
- Dacă ai Complet: adaugi acasă al 3-lea personaj, în același `Prenume_Nume_L6`.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi povestea (alte instrumente, alte sunete, alt decor).
