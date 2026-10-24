# Lecția 3 — Plimbarea mea (mișcare pe scenă)
**Modulul 1 · Primii pași**  
**Code Maker Club · Scratch Starter**

> Azi muți personajele pe scenă: le pui la start, le rotești, le faci să glisească și să se întoarcă unul spre altul.  
> Proiect: **„Plimbarea mea”** · fișier: `Prenume_Nume_L3` (ex. `Ana_Pop_L3`)

---

## Obiectiv
La finalul orei muți personaje cu blocuri din <span style="color:#4C97FF;font-weight:700">Mișcare</span>, cu start clar la steag.  
**Minim:** personajul 1 (Racheta) cu cel puțin **10 blocuri diferite**.  
**Ținta orei (Complet):** personajul 2 (Extraterestrul), cu cel puțin **8 blocuri diferite**, care se uită spre Rachetă.

## De ce contează
În jocuri, personajul nu stă pe loc: merge, se rotește, alunecă spre o țintă sau se întoarce spre alt personaj.  
În Scratch, asta e capitolul <span style="color:#4C97FF;font-weight:700">Mișcare</span> (EN: *Motion*).

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + unde e capitolul Mișcare |
| 5–35 | Pas cu pas: **4** mini-verificări (**Încearcă tu**) |
| 35–105 | Proiectul „Plimbarea mea” (vezi **Minim vs Complet**) |
| 105–120 | Recap, bonus, salvare |

**Capitole azi (doar acestea 5):**  
<span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#9966FF;font-weight:700">Aspect</span> · <span style="color:#4C97FF;font-weight:700">Mișcare</span> · <span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#CF63CF;font-weight:700">Sunet</span>  
*(Detectare, Operatori, Variabile — mai târziu.)*

**Blocuri noi azi:**

| Bloc | Ce face |
|------|---------|
| `mergi la x: y:` | mută personajul imediat într-un loc exact de pe scenă |
| `mergi la [poziție aleatoare]` | mută personajul într-un loc ales de Scratch, altul de fiecare dată |
| `orientează-te în direcția` | întoarce personajul spre direcția aleasă (0 sus, 90 dreapta, 180 jos, -90 stânga) |
| `orientează-te spre` | personajul se uită spre alt personaj |
| `rotește-te ↻` | învârte personajul spre dreapta cu atâtea grade cât ai ales |
| `rotește-te ↺` | învârte personajul spre stânga cu atâtea grade cât ai ales |
| `glisează … la x: y:` | mută personajul lin, în timpul ales, într-un loc exact |
| `glisează … la [poziție aleatoare]` | mută personajul lin, în timpul ales, spre un loc ales de Scratch |

---

## Pas cu pas

| Capitol | Ce iei azi |
|---------|------------|
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | `când se dă click pe` steagul verde |
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | **`mergi la x: y:`**, **`mergi la [poziție aleatoare]`**, **`orientează-te în direcția`**, **`orientează-te spre`**, **`rotește-te ↻`**, **`rotește-te ↺`**, **`glisează … la x: y:`**, **`glisează … la [poziție aleatoare]`**, `mergi` |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | `schimbă decorul la`, `decorul următor`, `costumul următor`, `spune`, `gândește`, `schimbă costumul la` |
| <span style="color:#FFAB19;font-weight:700">Control</span> | `repetă`, `așteaptă` |
| <span style="color:#CF63CF;font-weight:700">Sunet</span> | `pornește sunetul`, `redă sunetul … până la final` |

### 1) Poziția: unde stă și încotro se uită
1. Selectezi **personajul** (nu Scena)
2. Din <span style="color:#E6A800;font-weight:700">Evenimente</span>: <span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>
3. Din <span style="color:#4C97FF;font-weight:700">Mișcare</span>: <span style="color:#4C97FF;font-weight:700">mergi la x:</span> `-150` <span style="color:#4C97FF;font-weight:700">y:</span> `-120` *(x = stânga–dreapta, y = sus–jos; le vezi sub scenă când tragi personajul)*
4. Apoi: <span style="color:#4C97FF;font-weight:700">orientează-te în direcția</span> `0` *(0 = sus, 90 = dreapta, 180 = jos, -90 = stânga)*
5. Tragi personajul în alt loc și apeși steagul: se întoarce la start

**Încearcă tu — poziție (2–3 min)**  
- [ ] Scriptul e pe **personaj**  
- [ ] La steag personajul pleacă mereu din **același** loc  
- [ ] Schimbi direcția (`90`, `180`) și vezi încotro se uită  

### 2) Rotește-te
1. <span style="color:#4C97FF;font-weight:700">rotește-te ↻</span> `90` grade — se întoarce spre **dreapta** (în sensul acelor de ceasornic)
2. <span style="color:#4C97FF;font-weight:700">rotește-te ↺</span> `90` grade — se întoarce spre **stânga**
3. Exemplu: <span style="color:#4C97FF;font-weight:700">mergi</span> `50` pași → <span style="color:#4C97FF;font-weight:700">rotește-te ↻</span> `90` grade → <span style="color:#4C97FF;font-weight:700">mergi</span> `50` pași = o cotitură
4. Între mișcări pui <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,5`, ca să vezi traseul

**Încearcă tu — rotire (3–4 min)**  
- [ ] Personajul face o cotitură la dreapta și una la stânga  
- [ ] Se vede traseul (cu `așteaptă` între mișcări)  

### 3) Glisează
1. <span style="color:#4C97FF;font-weight:700">glisează în</span> `2` <span style="color:#4C97FF;font-weight:700">secunde la x:</span> `150` <span style="color:#4C97FF;font-weight:700">y:</span> `120`
2. Personajul **alunecă** spre punct, nu sare brusc
3. Compară: <span style="color:#4C97FF;font-weight:700">mergi la x: y:</span> = **sare** imediat · <span style="color:#4C97FF;font-weight:700">glisează</span> = **alunecă** în timpul ales

**Încearcă tu — glisează (2 min)**  
- [ ] Ai un `glisează` de câteva secunde  
- [ ] Vezi diferența față de `mergi la x: y:`  

### 4) Aleatoriu și țintă
1. <span style="color:#4C97FF;font-weight:700">mergi la [poziție aleatoare]</span> — personajul apare în alt loc la fiecare steag
2. <span style="color:#4C97FF;font-weight:700">glisează în … secunde la [poziție aleatoare]</span> — alunecă spre un loc ales de Scratch
3. <span style="color:#4C97FF;font-weight:700">orientează-te spre</span> `[alt personaj]` — alegi personajul din listă; se uită spre el *(ai nevoie de 2 personaje)*

**Încearcă tu — aleatoriu și țintă (3–4 min)**  
- [ ] La fiecare steag personajul ajunge în alt loc  
- [ ] Un personaj se uită spre celălalt  

---

## Greșeli frecvente
1. **Nu se mișcă** — blocurile sunt pe **Scenă**; Scena nu „merge”. Selectează personajul.  
2. **Dispare de pe scenă** — prea mulți pași; pune `mergi la x: y:` la start.  
3. **Pleacă din alt loc la al doilea steag** — lipsește `mergi la x: y:` chiar sub steag.  
4. **Se rotește în partea greșită** — `↻` întoarce personajul spre dreapta, `↺` îl întoarce spre stânga.  
5. **`orientează-te spre` nu face nimic** — nu ai ales personajul din listă sau nu ai al doilea personaj.  
6. **`decorul următor` nu duce la `Spațiu`** — în lista de decoruri `Spațiu` trebuie să fie după `Pământ`.  
7. **Nume fișier** — `Prenume_Nume_L3`, nu doar `Ana_L3`.

---

## De făcut azi — „Plimbarea mea”
Salvat: `Prenume_Nume_L3`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2** — 2 decoruri, start pe `Pământ` + **Racheta** cu ≥ 10 blocuri diferite |
| **Complet (ținta orei)** | Minim + **Extraterestrul** cu ≥ 8 blocuri diferite, care se uită spre Rachetă |

Dacă rămâi în urmă: salvează la **Minim**. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Locul *(Minim)*
Adaugi 2 decoruri, `Pământ` și `Spațiu` (în această ordine). Redenumești personajele ca să le găsești în listă: `Racheta`, `Extraterestrul`, `Astronautul`. Pe **Scenă** faci scriptul:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">schimbă decorul la</span> `Pământ`  

- [ ] 2 decoruri, `Pământ` primul și `Spațiu` al doilea  
- [ ] Scriptul e pe **Scenă**  

### Pasul 2 — Racheta *(Minim)*
Alegi o rachetă din bibliotecă (categoria Spațiu), cu cel puțin 2 costume. Ordinea e un **model**: poți schimba textele, numerele și poziția.

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `-150` <span style="color:#4C97FF;font-weight:700">y:</span> `-120`  
<span style="color:#4C97FF;font-weight:700">orientează-te în direcția</span> `0`  
<span style="color:#9966FF;font-weight:700">spune</span> `Decolăm!` pentru `2` secunde  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span> *(un sunet potrivit)*  
<span style="color:#FFAB19;font-weight:700">repetă</span> `4` → <span style="color:#4C97FF;font-weight:700">mergi</span> `30` pași → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,5`  
<span style="color:#4C97FF;font-weight:700">rotește-te ↻</span> `90` grade  
<span style="color:#FFAB19;font-weight:700">repetă</span> `3` → <span style="color:#4C97FF;font-weight:700">mergi</span> `40` pași → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,5`  
<span style="color:#4C97FF;font-weight:700">rotește-te ↺</span> `45` grade  
<span style="color:#9966FF;font-weight:700">gândește</span> `Spre Lună!` pentru `2` secunde  
<span style="color:#FFAB19;font-weight:700">repetă</span> `6` → <span style="color:#9966FF;font-weight:700">costumul următor</span> → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,3`  
<span style="color:#4C97FF;font-weight:700">glisează în</span> `2` <span style="color:#4C97FF;font-weight:700">secunde la x:</span> `150` <span style="color:#4C97FF;font-weight:700">y:</span> `120`  
<span style="color:#9966FF;font-weight:700">schimbă costumul la</span> *(un costum ales de tine)*  

- [ ] `schimbă costumul la` **nu** stă lângă `costumul următor`  
- [ ] Steag din nou → pleacă din același loc  
- [ ] Salvat: `Prenume_Nume_L3`  

**→ Minim când:** steagul pornește pe `Pământ`, iar Racheta decolează, face cotituri și alunecă spre Lună.

### Pasul 3 — Extraterestrul *(Complet)*
Alegi un extraterestru sau alt personaj. El pornește după Rachetă și se uită spre ea:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `3` secunde  
<span style="color:#4C97FF;font-weight:700">mergi la [poziție aleatoare]</span>  
<span style="color:#4C97FF;font-weight:700">orientează-te spre</span> `Racheta`  
<span style="color:#9966FF;font-weight:700">spune</span> `Salut, rachetă!` pentru `2` secunde  
<span style="color:#FFAB19;font-weight:700">repetă</span> `4` → <span style="color:#9966FF;font-weight:700">costumul următor</span> → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,3`  
<span style="color:#CF63CF;font-weight:700">redă sunetul</span> *(un sunet potrivit)* până la final  
<span style="color:#4C97FF;font-weight:700">glisează în</span> `2` <span style="color:#4C97FF;font-weight:700">secunde la [poziție aleatoare]</span>  
<span style="color:#9966FF;font-weight:700">decorul următor</span>  
<span style="color:#9966FF;font-weight:700">gândește</span> `Ce vizitatori!` pentru `2` secunde  
<span style="color:#9966FF;font-weight:700">schimbă costumul la</span> *(un costum ales de tine)*  

- [ ] La fiecare steag apare în alt loc  
- [ ] Se uită spre Rachetă  
- [ ] Decorul trece la `Spațiu`  
- [ ] Salvat din nou: `Prenume_Nume_L3`  

**Gata Complet când:** un coleg vede decolarea, extraterestrul care vine spre rachetă și trecerea la `Spațiu`, fără explicație cu vocea.

---

## Bonus (dacă ai terminat Complet)
- [ ] **Al 3-lea personaj** (Astronautul), care apare după ceilalți:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `12` secunde  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `-100`  
<span style="color:#4C97FF;font-weight:700">orientează-te spre</span> `Extraterestrul`  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span> *(un sunet potrivit)*  
<span style="color:#9966FF;font-weight:700">spune</span> `Bun venit pe Lună!` pentru `2` secunde  
<span style="color:#FFAB19;font-weight:700">repetă</span> `6` → <span style="color:#4C97FF;font-weight:700">rotește-te ↻</span> `30` grade → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,3`  
<span style="color:#4C97FF;font-weight:700">glisează în</span> `2` <span style="color:#4C97FF;font-weight:700">secunde la x:</span> `-100` <span style="color:#4C97FF;font-weight:700">y:</span> `0`  
<span style="color:#9966FF;font-weight:700">gândește</span> `Ce zi!` pentru `2` secunde  
<span style="color:#9966FF;font-weight:700">schimbă costumul la</span> *(un costum ales de tine)*  

- [ ] ★★★ **Provocare:** Racheta desenează un pătrat în aer, cu <span style="color:#FFAB19;font-weight:700">repetă</span> `4` → <span style="color:#4C97FF;font-weight:700">mergi</span> `50` pași → <span style="color:#4C97FF;font-weight:700">rotește-te ↻</span> `90` grade

## Recapitulare rapidă
1. `mergi la x: y:` **sare** · `glisează` **alunecă**  
2. `rotește-te ↻` = dreapta · `rotește-te ↺` = stânga  
3. `orientează-te spre` = se uită spre alt personaj  
4. Blocurile sunt pe **personaj**; la steag: `mergi la x: y:`  
5. Nume: **`Prenume_Nume_L3`**  

## Schema pe scurt *(pe foaie)*

**Pe Scenă**  
la steag → `schimbă decorul la` Pământ

**Pe Rachetă**  
la steag → `mergi la x: y:` → `orientează-te în direcția` → `spune` → `pornește sunetul` → `repetă` (`mergi` + `așteaptă`) → `rotește-te ↻` → `repetă` (`mergi` + `așteaptă`) → `rotește-te ↺` → `gândește` → `repetă` (`costumul următor` + `așteaptă`) → `glisează` → `schimbă costumul la`

**Pe Extraterestru**  
la steag → `așteaptă` → `mergi la [aleatoare]` → `orientează-te spre` → `spune` → `repetă` (`costumul următor` + `așteaptă`) → `redă sunetul` → `glisează la [aleatoare]` → `decorul următor` → `gândește` → `schimbă costumul la`

**Quiz scurt (cu profesorul):**  
- Care e diferența între `mergi la x: y:` și `glisează`?  
- Ce face `rotește-te ↻`?  
- Ce face `orientează-te spre`?  
- De ce punem `mergi la x: y:` chiar sub steag?

## Temă (opțional)
- Dacă ai doar Minim: adaugi acasă Extraterestrul, în același `Prenume_Nume_L3`.  
- Dacă ai Complet: adaugi acasă al 3-lea personaj, în același `Prenume_Nume_L3`.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi povestea (alte personaje, alte replici, alte poziții).
