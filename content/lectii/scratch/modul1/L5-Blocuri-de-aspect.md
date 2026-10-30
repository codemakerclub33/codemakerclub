# Lecția 5 — Interviul
### Blocuri de aspect
**Modulul 1 · Primii pași**  
**Code Maker Club · Scratch Starter**

> Azi controlezi **cum arată** și **ce transmite** personajul: balonul de vorbă, mărimea și culoarea.  
> Proiect: **„Interviul”** · fișier: `Prenume_Nume_L5` (ex. `Ana_Pop_L5`)

---

## Obiectiv
La finalul orei personajele tale vorbesc, cresc, se micșorează și își schimbă culoarea, cu blocuri din <span style="color:#9966FF;font-weight:700">Aspect</span>.  
**Minim:** personajul 1 (Reporterul) cu cel puțin **8 blocuri diferite**.  
**Ținta orei (Complet):** personajul 2 (Dragonul), cu cel puțin **8 blocuri diferite**, care răspunde la întrebarea Reporterului.

## De ce contează
În jocuri și animații, personajele se fac mari sau mici, își schimbă culoarea și vorbesc cât timp vrei tu.  
În Scratch, asta e capitolul <span style="color:#9966FF;font-weight:700">Aspect</span> (EN: *Looks*).

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + capitolul Aspect |
| 5–35 | Pas cu pas: **3** mini-verificări (**Încearcă tu**) |
| 35–105 | Proiectul „Interviul” (vezi **Minim vs Complet**) |
| 105–120 | Recap, bonus, salvare |

**Capitole azi (doar acestea 5):**  
<span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#9966FF;font-weight:700">Aspect</span> · <span style="color:#4C97FF;font-weight:700">Mișcare</span> · <span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#CF63CF;font-weight:700">Sunet</span>  
*(Detectare, Operatori, Variabile — mai târziu.)*

**Blocuri noi azi:**

| Bloc | Ce face |
|------|---------|
| `spune [ ]` | personajul vorbește; balonul rămâne până îl schimbă alt bloc (cu text gol îl ștergi) |
| `gândește [ ]` | la fel, dar cu balon de gând |
| `modifică mărimea cu` | mărește personajul (număr pozitiv) sau îl micșorează (număr negativ) |
| `setează mărimea la` | pune mărimea exact la procentul ales (100 % = mărimea normală) |
| `modifică efectul [culoare] cu` | schimbă culoarea personajului cu cât ai ales; de fiecare dată se adună |
| `setează efectul … la` | pune efectul exact la valoarea aleasă (0 = fără efect) |
| `anulează efectele grafice` | șterge toate efectele de pe personaj, iar culoarea revine la normal |

---

## Pas cu pas

| Capitol | Ce iei azi |
|---------|------------|
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | `când se dă click pe` steagul verde, `când primesc` |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | **`spune [ ]`**, **`gândește [ ]`**, **`modifică mărimea cu`**, **`setează mărimea la`**, **`modifică efectul [culoare] cu`**, **`setează efectul … la`**, **`anulează efectele grafice`**, `schimbă decorul la`, `decorul următor`, `costumul următor`, `schimbă costumul la` |
| <span style="color:#FFAB19;font-weight:700">Control</span> | `repetă`, `așteaptă` |
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | `mergi la x: y:`, `orientează-te spre`, `glisează … la [poziție aleatoare]` |
| <span style="color:#CF63CF;font-weight:700">Sunet</span> | `pornește sunetul` |

### 1) Spune și gândește, fără durată
1. Selectezi **personajul** (nu Scena)
2. Din <span style="color:#E6A800;font-weight:700">Evenimente</span>: <span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>
3. Din <span style="color:#9966FF;font-weight:700">Aspect</span>: <span style="color:#9966FF;font-weight:700">spune</span> `Salut!` *(fără „pentru … secunde”)*
4. Sub el: <span style="color:#FFAB19;font-weight:700">așteaptă</span> `2` secunde, apoi <span style="color:#9966FF;font-weight:700">gândește</span> `Hmm…`
5. Balonul **rămâne** pe ecran până îl schimbă alt bloc. Ca să îl ștergi, pui <span style="color:#9966FF;font-weight:700">spune</span> cu textul **gol**

**Încearcă tu — balon (2–3 min)**  
- [ ] Balonul `Salut!` rămâne pe ecran  
- [ ] După 2 secunde apare balonul de gând  
- [ ] Cu `spune` gol balonul dispare  

### 2) Mărimea
1. <span style="color:#9966FF;font-weight:700">modifică mărimea cu</span> `10` — personajul crește cu 10. Cu `-10` se micșorează
2. <span style="color:#9966FF;font-weight:700">setează mărimea la</span> `100` % — personajul revine **exact** la mărimea normală
3. Diferența: `modifică` **adaugă** la ce e acum, `setează` **pune** valoarea exactă

**Încearcă tu — mărime (2–3 min)**  
- [ ] Personajul crește cu `modifică mărimea cu`  
- [ ] Revine la normal cu `setează mărimea la` `100`  

### 3) Efecte de culoare
1. <span style="color:#9966FF;font-weight:700">modifică efectul [culoare] cu</span> `25` — personajul își schimbă culoarea; de fiecare dată se adună
2. <span style="color:#9966FF;font-weight:700">setează efectul [culoare] la</span> `0` — culoarea normală
3. <span style="color:#9966FF;font-weight:700">anulează efectele grafice</span> — șterge toate efectele deodată
4. Efectele rămân și la steagul următor, de aceea la start pui `setează efectul … la` `0` sau `anulează efectele grafice`

**Încearcă tu — culoare (2–3 min)**  
- [ ] Culoarea se schimbă cu `modifică efectul`  
- [ ] La steag începi mereu cu culoarea normală  

---

## Greșeli frecvente
1. **Balonul rămâne pe ecran** — `spune` fără durată nu dispare singur. Pune `spune` cu textul gol.  
2. **Personajul e uriaș sau dispare** — la start pune `setează mărimea la` `100`.  
3. **Culoarea e altfel la al doilea steag** — efectele se adună. Pune la start `setează efectul … la` `0` sau `anulează efectele grafice`.  
4. **`modifică` și `setează` se încurcă** — `modifică` adaugă, `setează` pune valoarea exactă.  
5. **Mesajul nu ajunge** — numele din `difuzează` și din `când primesc` nu e același mesaj (`răspuns` și `raspuns` sunt mesaje diferite).  
6. **`decorul următor` nu duce la `Afară`** — în lista de decoruri `Afară` trebuie să fie după `Studio`.  
7. **Nume fișier** — `Prenume_Nume_L5`, nu doar `Ana_L5`.  

---

## De făcut azi — „Interviul”
Salvat: `Prenume_Nume_L5`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2** — 2 decoruri + **Reporterul** cu ≥ 8 blocuri diferite |
| **Complet (ținta orei)** | Minim + **Dragonul** cu ≥ 8 blocuri diferite, care răspunde Reporterului |

Dacă rămâi în urmă: salvează la **Minim**. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Locul *(Minim)*
Adaugi 2 decoruri, `Studio` și `Afară` (în această ordine), și redenumești personajele: `Reporterul`, `Dragonul`, `Publicul`. Pe **Scenă** faci scripturile:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">schimbă decorul la</span> `Studio`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `afară`  
<span style="color:#9966FF;font-weight:700">decorul următor</span>  

- [ ] `Studio` primul în listă, `Afară` al doilea  
- [ ] Scripturile sunt pe **Scenă**  

### Pasul 2 — Reporterul *(Minim)*
Alegi un personaj din bibliotecă care seamănă cu un reporter. Ordinea e un **model**: poți schimba textele, numerele și mesajele.

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `-120` <span style="color:#4C97FF;font-weight:700">y:</span> `-60`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `100` %  
<span style="color:#9966FF;font-weight:700">spune</span> `Bun venit la Interviul!`  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `3` secunde  
<span style="color:#9966FF;font-weight:700">spune</span> `Cum te simți, dragonule?`  
<span style="color:#E6A800;font-weight:700">difuzează … și așteaptă</span> `răspuns`  
<span style="color:#9966FF;font-weight:700">gândește</span> `Uau, ce mare!`  
<span style="color:#9966FF;font-weight:700">modifică efectul [culoare] cu</span> `30`  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span> *(un sunet potrivit)*  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `2` secunde  
<span style="color:#9966FF;font-weight:700">spune</span> `Hai afară!`  
<span style="color:#E6A800;font-weight:700">difuzează</span> `afară`  
<span style="color:#9966FF;font-weight:700">anulează efectele grafice</span>  
<span style="color:#9966FF;font-weight:700">schimbă costumul la</span> *(un costum ales de tine)*  

- [ ] Fără Dragon, Reporterul își termină scriptul singur  
- [ ] Steag din nou → începe de la capăt, cu mărime și culoare normale  
- [ ] Salvat: `Prenume_Nume_L5`  

**→ Minim când:** Reporterul întâmpină publicul, pune întrebarea, se face verde, spune „Hai afară!” și decorul trece la `Afară`.

### Pasul 3 — Dragonul *(Complet)*
Alegi un dragon sau alt personaj. Are **3 scripturi**:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">orientează-te spre</span> `Reporterul`  
<span style="color:#9966FF;font-weight:700">setează efectul [culoare] la</span> `0`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `răspuns`  
<span style="color:#9966FF;font-weight:700">gândește</span> `Hmm…`  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `1` secundă  
<span style="color:#9966FF;font-weight:700">spune</span> `Sunt foarte emoționat!`  
<span style="color:#FFAB19;font-weight:700">repetă</span> `5` → <span style="color:#9966FF;font-weight:700">modifică mărimea cu</span> `10` → <span style="color:#9966FF;font-weight:700">modifică efectul [culoare] cu</span> `20` → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,3`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `afară`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `100` %  
<span style="color:#4C97FF;font-weight:700">glisează în</span> `2` <span style="color:#4C97FF;font-weight:700">secunde la [poziție aleatoare]</span>  
<span style="color:#9966FF;font-weight:700">spune</span> `Ce aer curat!`  

- [ ] Se uită spre Reporter la steag  
- [ ] La `răspuns` crește și își schimbă culoarea  
- [ ] La `afară` revine la mărimea normală și glisează  
- [ ] Salvat din nou: `Prenume_Nume_L5`  

**Gata Complet când:** Reporterul întreabă, Dragonul răspunde crescând și schimbându-și culoarea, apoi trec amândoi afară, fără explicație cu vocea.

---

## Bonus (dacă ai terminat Complet)
- [ ] **Al 3-lea personaj** (Publicul), care reacționează afară:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `120`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `50` %  

<span style="color:#E6A800;font-weight:700">când primesc</span> `afară`  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `3` secunde  
<span style="color:#9966FF;font-weight:700">modifică mărimea cu</span> `30`  
<span style="color:#FFAB19;font-weight:700">repetă</span> `3` → <span style="color:#9966FF;font-weight:700">costumul următor</span> → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,3`  
<span style="color:#9966FF;font-weight:700">spune</span> `Bravo, dragonule!`  
<span style="color:#9966FF;font-weight:700">schimbă costumul la</span> *(un costum ales de tine)*  

- [ ] ★★★ **Provocare:** Dragonul își schimbă culoarea la fiecare click pe el, iar tasta **spațiu** o readuce cu `anulează efectele grafice`

## Recapitulare rapidă
1. `spune` și `gândește` fără durată **rămân** pe ecran; cu text gol dispar  
2. `modifică` **adaugă**, `setează` **pune** valoarea exactă  
3. `setează mărimea la` `100` % = mărimea normală  
4. Efectele rămân între steaguri: la start pui `setează efectul … la` `0` sau `anulează efectele grafice`  
5. Nume: **`Prenume_Nume_L5`**  

## Schema pe scurt *(pe foaie)*

**Pe Scenă**  
la steag → `schimbă decorul la` Studio  
când primesc afară → `decorul următor`

**Pe Reporter**  
la steag → `mergi la x: y:` → `setează mărimea la` → `spune` → `așteaptă` → `spune` → `difuzează … și așteaptă` → `gândește` → `modifică efectul` → `pornește sunetul` → `așteaptă` → `spune` → `difuzează` → `anulează efectele grafice` → `schimbă costumul la`

**Pe Dragon**  
la steag → `orientează-te spre` → `setează efectul … la`  
când primesc răspuns → `gândește` → `așteaptă` → `spune` → `repetă` (`modifică mărimea` + `modifică efectul` + `așteaptă`)  
când primesc afară → `setează mărimea la` → `glisează la [aleatoare]` → `spune`

**Quiz scurt (cu profesorul):**  
- Ce diferență e între `modifică mărimea cu` și `setează mărimea la`?  
- Cum ștergi un balon de vorbă rămas pe ecran?  
- De ce pui `anulează efectele grafice` la start?  
- Ce face `spune` fără „pentru … secunde”?

## Temă (opțional)
- Dacă ai doar Minim: adaugi acasă Dragonul, în același `Prenume_Nume_L5`.  
- Dacă ai Complet: adaugi acasă al 3-lea personaj, în același `Prenume_Nume_L5`.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi povestea (alte personaje, alte replici, alte culori).
