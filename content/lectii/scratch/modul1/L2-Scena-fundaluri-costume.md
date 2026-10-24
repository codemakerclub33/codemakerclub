# Lecția 2 — Lumea mea (2 scene și costume)
**Modulul 1 · Primii pași**  
**Code Maker Club · Scratch Starter**

> Azi îți faci **povestea ta** pe 2 locuri (decoruri), cu personaje care vorbesc, se mișcă și își schimbă look-ul.  
> Proiect: **„Lumea mea”** · fișier: `Prenume_Nume_L2` (ex. `Ana_Pop_L2`)

---

## Obiectiv
La finalul orei construiești o mică poveste cu **2 decoruri** (locuri) și **personaje**.  
**Minim:** 2 decoruri + **1 personaj** cu 8 blocuri diferite.  
**Ținta orei (Complet):** Minim + **al 2-lea personaj**, tot cu 8 blocuri diferite, care face lucruri diferite față de primul.

## De ce contează
Ca într-un joc sau o poveste pe telefon: se schimbă **locul** (casă → parc), iar personajele **vorbesc, merg și își schimbă look-ul**.  
În Scratch, **decor** = locul de pe scenă (fundalul); **costum** = felul în care arată personajul (EN: *backdrop* / *costume*).

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Obiectiv + unde găsești Decoruri și Costume |
| 10–35 | Pas cu pas + **Încearcă tu** |
| 35–105 | Proiectul „Lumea mea” (vezi **Minim vs Complet**) |
| 105–120 | Recap, bonus, salvare |

**Capitole azi (doar acestea 5):**  
<span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#9966FF;font-weight:700">Aspect</span> · <span style="color:#4C97FF;font-weight:700">Mișcare</span> · <span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#CF63CF;font-weight:700">Sunet</span>  
*(Detectare, Operatori, Variabile — mai târziu.)*

**Blocuri noi azi:**

| Bloc | Ce face |
|------|---------|
| `schimbă decorul la` | schimbă locul de pe scenă la decorul ales (se pune pe Scenă) |
| `decorul următor` | trece la decorul următor din listă |
| `costumul următor` | personajul trece la următorul costum din listă (animație) |
| `repetă` | repetă de câte ori alegi blocurile din interior |

---

## Pas cu pas

| Capitol | Ce iei azi |
|---------|------------|
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | `când se dă click pe` steagul verde |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | **`schimbă decorul la`**, **`decorul următor`**, **`costumul următor`**, `spune`, `gândește`, `schimbă costumul la` |
| <span style="color:#FFAB19;font-weight:700">Control</span> | **`repetă`**, `așteaptă` |
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | `mergi` |
| <span style="color:#CF63CF;font-weight:700">Sunet</span> | `pornește sunetul`, `redă sunetul … până la final` |

### 1) Două decoruri
1. Jos, lângă scenă, apeși pe **Decoruri** (iconița de peisaj)
2. Alegi un decor din bibliotecă — primul loc
3. Adaugi încă un decor (al doilea loc)
4. Dai nume clare, ex. `Casa` și `Parc` (click pe nume)

**Încearcă tu — decoruri (1–2 min)**  
- [ ] Ai **2** decoruri în listă  
- [ ] Se numesc `Casa` și `Parc` (nu `backdrop1`)  
- [ ] `Casa` e primul în listă, `Parc` al doilea  

### 2) Schimbi locul cu blocuri (pe **Scenă**)
1. Selectezi **Scena** (nu personajul)
2. Din <span style="color:#E6A800;font-weight:700">Evenimente</span>:  
   <span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>
3. Din <span style="color:#9966FF;font-weight:700">Aspect</span>:  
   <span style="color:#9966FF;font-weight:700">schimbă decorul la</span> `Casa` *(mereu începi pe scena 1)*
4. Din <span style="color:#FFAB19;font-weight:700">Control</span>:  
   <span style="color:#FFAB19;font-weight:700">așteaptă</span> `10` secunde *(poți alege alt număr)*
5. Din <span style="color:#9966FF;font-weight:700">Aspect</span>:  
   <span style="color:#9966FF;font-weight:700">decorul următor</span> *(trece la decorul următor din listă, deci la `Parc`)*

**Încearcă tu — locuri (1–2 min)**  
- [ ] Scriptul e pe **Scenă**, nu pe personaj  
- [ ] La steag vezi `Casa`, iar după câteva secunde `Parc`  

### 3) Costumul următor
1. Alegi un personaj din bibliotecă (de exemplu un copil)
2. Tab **Costume** → te asiguri că are **cel puțin 3** costume
3. Pe personaj pui: <span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span> + <span style="color:#9966FF;font-weight:700">costumul următor</span>
4. Apeși steagul de câteva ori: la fiecare apăsare personajul trece la costumul următor

> **Atenție:** dacă pui `costumul următor` imediat după `schimbă costumul la`, costumul ales de tine se schimbă pe loc și nu mai e cel pe care îl voiai. Folosește `costumul următor` pentru animație, iar `schimbă costumul la` la final, ca poză finală.  
> Nu ai sunet după sunet, nici costum după costum.

**Încearcă tu — costume (2–3 min)**  
- [ ] Personajul are **cel puțin 3** costume  
- [ ] La fiecare click pe steag costumul se schimbă  

### 4) Blocul `repetă`
1. Din <span style="color:#FFAB19;font-weight:700">Control</span> tragi <span style="color:#FFAB19;font-weight:700">repetă</span> — are formă de „C”, iar blocurile se pun **înăuntru**
2. Numărul din bloc spune **de câte ori** se repetă ce e înăuntru
3. Exemplu: <span style="color:#FFAB19;font-weight:700">repetă</span> `5` cu <span style="color:#4C97FF;font-weight:700">mergi</span> `10` pași și <span style="color:#FFAB19;font-weight:700">așteaptă</span> `1` înăuntru înlocuiește blocurile puse de 5 ori unul sub altul
4. Animație: <span style="color:#FFAB19;font-weight:700">repetă</span> `10` → <span style="color:#9966FF;font-weight:700">costumul următor</span> → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,2` — fără `așteaptă`, costumele trec prea repede ca să le vezi

**Încearcă tu — repetă (3–4 min)**  
- [ ] Personajul merge cu <span style="color:#FFAB19;font-weight:700">repetă</span> `5`, apoi schimbi numărul și vezi diferența  
- [ ] Animația de costume rulează cu <span style="color:#FFAB19;font-weight:700">repetă</span> `10` și `așteaptă` `0,2`  
- [ ] Blocurile sunt **înăuntru** în `repetă`, nu lipite dedesubt  

---

## Greșeli frecvente
1. **Decorul nu se schimbă** — ai lipit blocul pe **personaj** în loc de **Scenă**, sau în bloc e alt decor decât `Casa` / `Parc`.  
2. **Costumele nu se văd** — rulezi pe un personaj, te uiți la altul.  
3. **La steag rămâi pe `Parc`** — lipsește la start `schimbă decorul la` `Casa`.  
4. **`schimbă costumul la` și `costumul următor` lipite unul de altul** — costumul ales de tine se schimbă pe loc. Pune `schimbă costumul la` la final.  
5. **Sunet după sunet / costum după costum** — pune între ele alt bloc.  
6. **`decorul următor` nu duce la `Parc`** — în lista de decoruri `Parc` trebuie să fie după `Casa`.  
7. **`repetă` nu repetă nimic** — blocurile sunt lipite sub `repetă`, nu **înăuntru**.  
8. **Nume fișier** — folosește `Prenume_Nume_L2`, nu doar `Ana_L2` (se suprascriu în clasă).

---

## De făcut azi — „Lumea mea”
Salvat: `Prenume_Nume_L2`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2** — 2 decoruri, start pe `Casa`, schimbare la `Parc` + **Copilul** cu ≥ 8 blocuri diferite |
| **Complet (ținta orei)** | Minim + **Câinele** (sau alt personaj) cu ≥ 8 blocuri diferite, diferite de ale Copilului |

Dacă rămâi în urmă: salvează la **Minim**. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Locurile *(Minim)*
Pe **Scenă** faci scriptul de mai jos. E un **model**: poți schimba decorurile și numărul de secunde.

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">schimbă decorul la</span> `Casa`  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `10` secunde  
<span style="color:#9966FF;font-weight:700">decorul următor</span>  

- [ ] **2 decoruri** cu nume (`Casa` / `Parc` sau altele)  
- [ ] Scriptul e pe **Scenă**  
- [ ] La steag începi pe scena 1, apoi `așteaptă` și treci la scena 2  

### Pasul 2 — Copilul *(Minim)*
Pe personaj faci scriptul de mai jos. Ordinea e un **model**: poți schimba textele, numerele și costumele.

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#FFAB19;font-weight:700">repetă</span> `10` → <span style="color:#9966FF;font-weight:700">costumul următor</span> → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,2`  
<span style="color:#9966FF;font-weight:700">spune</span> `Plecăm în parc!` pentru `3` secunde  
<span style="color:#FFAB19;font-weight:700">repetă</span> `5` → <span style="color:#4C97FF;font-weight:700">mergi</span> `10` pași → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `1`  
<span style="color:#9966FF;font-weight:700">spune</span> `Am ajuns!` pentru `3` secunde  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span> *(un sunet potrivit)*  
<span style="color:#9966FF;font-weight:700">gândește</span> `Ce să fac?` pentru `3` secunde  
<span style="color:#9966FF;font-weight:700">schimbă costumul la</span> *(un costum ales de tine)*  

- [ ] Personajul are **cel puțin 3** costume  
- [ ] `schimbă costumul la` **nu** stă lângă `costumul următor`  
- [ ] Nu ai sunet după sunet, nici costum după costum  
- [ ] La final stă într-un costum ales de tine  
- [ ] Salvat: `Prenume_Nume_L2`  

**→ Minim când:** steagul pornește povestea pe `Casa`, decorul trece la `Parc`, iar Copilul face tot scriptul.

### Pasul 3 — Al doilea personaj: Câinele *(Complet)*
Alegi un animal sau alt personaj. El face **lucruri diferite** față de Copil și pornește după el:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `2` secunde  
<span style="color:#CF63CF;font-weight:700">redă sunetul</span> *(un sunet potrivit)* până la final  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `2` secunde  
<span style="color:#FFAB19;font-weight:700">repetă</span> `5` → <span style="color:#4C97FF;font-weight:700">mergi</span> `15` pași → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `1`  
<span style="color:#9966FF;font-weight:700">spune</span> `Ham! Ham!` pentru `3` secunde  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span> *(un sunet potrivit)*  
<span style="color:#9966FF;font-weight:700">gândește</span> `Ce frumos e în parc!` pentru `3` secunde  
<span style="color:#9966FF;font-weight:700">schimbă costumul la</span> *(un costum ales de tine)*  

- [ ] Personaj nou, care face lucruri diferite față de Copil (alt sunet, alte replici, altă mișcare)  
- [ ] Cel puțin **3 tipuri** de acțiuni (Aspect, Mișcare, Sunet)  
- [ ] Nu ai sunet după sunet, nici costum după costum  
- [ ] Salvat din nou: `Prenume_Nume_L2`  

**Gata Complet când:** un coleg vede clar **2 locuri** și **2 personaje** care fac lucruri diferite, fără explicație cu vocea.

---

## Bonus (dacă ai terminat Complet)
- [ ] **Al 3-lea personaj** (Pasărea), care apare în parc, după ceilalți:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `10` secunde  
<span style="color:#FFAB19;font-weight:700">repetă</span> `6` → <span style="color:#9966FF;font-weight:700">costumul următor</span> → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,3`  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span> *(un sunet potrivit)*  
<span style="color:#9966FF;font-weight:700">spune</span> `Cip-cip! Bine ați venit!` pentru `3` secunde  
<span style="color:#FFAB19;font-weight:700">repetă</span> `4` → <span style="color:#4C97FF;font-weight:700">mergi</span> `10` pași → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,5`  
<span style="color:#9966FF;font-weight:700">gândește</span> `Ce zi frumoasă!` pentru `2` secunde  
<span style="color:#9966FF;font-weight:700">schimbă costumul la</span> *(un costum ales de tine)*  

- [ ] **Al 3-lea decor** + pe Scenă, după `decorul următor`: `așteaptă` `6` secunde + încă un <span style="color:#9966FF;font-weight:700">decorul următor</span>  
- [ ] ★★★ **Provocare:** în Parc, cele 3 personaje spun câte o replică nouă, pe rând, fără să se calce

## Recapitulare rapidă
1. **Decor** = locul · **Costum** = look-ul  
2. Schimbarea locului se face cu blocuri pe **Scenă**  
3. `repetă` pune blocurile **înăuntru** și le face de mai multe ori  
4. `schimbă costumul la` și `costumul următor` nu se pun unul lângă altul  
5. Nu ai sunet după sunet, nici costum după costum  
6. Nume: **`Prenume_Nume_L2`**  

## Schema pe scurt *(pe foaie)*
**Pe Scenă**  
la steag → `schimbă decorul la` Casa → `așteaptă` … → `decorul următor`

**Pe Copil**  
la steag → `repetă` (`costumul următor` + `așteaptă`) → `spune` → `repetă` (`mergi` + `așteaptă`) → `spune` → `pornește sunetul` → `gândește` → `schimbă costumul la`

**Pe Câine**  
la steag → `așteaptă` → `redă sunetul` → `așteaptă` → `repetă` (`mergi` + `așteaptă`) → `spune` → `pornește sunetul` → `gândește` → `schimbă costumul la`

**Quiz scurt (cu profesorul):**  
- Unde adaugi un decor nou?  
- Ce bloc schimbă locul?  
- Ce face `decorul următor`?  
- Ce face blocul `repetă`?  
- De ce nu punem `schimbă costumul la` lângă `costumul următor`?

## Temă (opțional)
- Dacă ai doar Minim: adaugi acasă Câinele, în același `Prenume_Nume_L2`.  
- Dacă ai Complet: adaugi acasă al 3-lea personaj, în același `Prenume_Nume_L2`.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi povestea (alte decoruri, alte replici, alte costume).
