# Lecția 4 — Butonul magic (evenimente)
**Modulul 1 · Primii pași**  
**Code Maker Club · Scratch Starter**

> Azi înveți că blocurile pornesc când se întâmplă ceva: o tastă, un click, o schimbare de decor sau un mesaj trimis de alt personaj.  
> Proiect: **„Butonul magic”** · fișier: `Prenume_Nume_L4` (ex. `Ana_Pop_L4`)

---

## Obiectiv
La finalul orei personajele tale reacționează la evenimente, nu doar la steag.  
**Minim:** personajul 1 (Magicianul) cu cel puțin **12 blocuri diferite**.  
**Ținta orei (Complet):** personajul 2 (Iepurele), cu cel puțin **8 blocuri diferite**, care răspunde la mesajele Magicianului.

## De ce contează
În jocuri, lucrurile se întâmplă la apăsarea unei taste, la click sau când alt personaj dă un semn.  
În Scratch, asta e capitolul <span style="color:#E6A800;font-weight:700">Evenimente</span> (EN: *Events*).

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + capitolul Evenimente |
| 5–35 | Pas cu pas: **4** mini-verificări (**Încearcă tu**) |
| 35–105 | Proiectul „Butonul magic” (vezi **Minim vs Complet**) |
| 105–120 | Recap, bonus, salvare |

**Capitole azi (doar acestea 5):**  
<span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#9966FF;font-weight:700">Aspect</span> · <span style="color:#4C97FF;font-weight:700">Mișcare</span> · <span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#CF63CF;font-weight:700">Sunet</span>  
*(Detectare, Operatori, Variabile — mai târziu.)*

**Blocuri noi azi:**

| Bloc | Ce face |
|------|---------|
| `când tasta [ ] este apăsată` | pornește scriptul când apeși tasta aleasă |
| `când se dă click pe acest personaj` | pornește scriptul când dai click pe personaj |
| `când decorul se schimbă la` | pornește scriptul când scena trece la decorul ales |
| `difuzează` | trimite un mesaj către toate personajele, iar scriptul merge mai departe |
| `difuzează … și așteaptă` | trimite mesajul și așteaptă să termine cei care îl primesc |
| `când primesc` | pornește scriptul când personajul aude mesajul ales |

---

## Pas cu pas

| Capitol | Ce iei azi |
|---------|------------|
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | **`când tasta [ ] este apăsată`**, **`când se dă click pe acest personaj`**, **`când decorul se schimbă la`**, **`difuzează`**, **`difuzează … și așteaptă`**, **`când primesc`**, `când se dă click pe` steagul verde |
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | `mergi la x: y:`, `mergi la [poziție aleatoare]`, `orientează-te în direcția`, `orientează-te spre`, `rotește-te ↻`, `glisează … la x: y:`, `glisează … la [poziție aleatoare]`, `mergi` |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | `schimbă decorul la`, `decorul următor`, `costumul următor`, `spune`, `gândește`, `schimbă costumul la` |
| <span style="color:#FFAB19;font-weight:700">Control</span> | `repetă`, `așteaptă` |
| <span style="color:#CF63CF;font-weight:700">Sunet</span> | `pornește sunetul`, `redă sunetul … până la final` |

### 1) Tastă și click
1. Selectezi **personajul** (nu Scena)
2. Din <span style="color:#E6A800;font-weight:700">Evenimente</span>: <span style="color:#E6A800;font-weight:700">când tasta</span> `spațiu` <span style="color:#E6A800;font-weight:700">este apăsată</span>  
   Sub el: <span style="color:#9966FF;font-weight:700">spune</span> `Bis!` pentru `2` secunde
3. Încă un script, tot din <span style="color:#E6A800;font-weight:700">Evenimente</span>: <span style="color:#E6A800;font-weight:700">când se dă click pe acest personaj</span>  
   Sub el: <span style="color:#9966FF;font-weight:700">spune</span> `Salut!` pentru `2` secunde
4. Dai o dată click pe **scenă**, apoi apeși **spațiu** și dai click pe **personaj**

Fiecare „când …” e un **început de script** de sine stătător. Nu are nevoie de steag.

**Încearcă tu — tastă și click (3–4 min)**  
- [ ] La **spațiu** personajul spune `Bis!`  
- [ ] La **click pe personaj** spune `Salut!`  
- [ ] Schimbi tasta (de exemplu săgeată sus) și merge la fel  

### 2) Când se schimbă decorul
1. Ai 2 decoruri, `Culise` și `Spectacol`
2. Pe **Scenă**: <span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span> → <span style="color:#9966FF;font-weight:700">schimbă decorul la</span> `Culise` → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `5` → <span style="color:#9966FF;font-weight:700">decorul următor</span>
3. Pe **personaj**: <span style="color:#E6A800;font-weight:700">când decorul se schimbă la</span> `Spectacol`  
   Sub el: <span style="color:#9966FF;font-weight:700">spune</span> `Începe spectacolul!` pentru `2` secunde
4. Apeși steagul: după 5 secunde decorul se schimbă și personajul vorbește

**Încearcă tu — decorul se schimbă (2–3 min)**  
- [ ] Personajul vorbește **exact** când decorul trece la `Spectacol`  
- [ ] Nu ai folosit steagul pe personajul care vorbește  

### 3) Mesaje: difuzează și când primesc
1. <span style="color:#E6A800;font-weight:700">difuzează</span> `magie` — **trimite** un semnal (mesaj) tuturor personajelor
2. <span style="color:#E6A800;font-weight:700">când primesc</span> `magie` — pe alt personaj, **pornește** când aude mesajul
3. Mesajul nou îl creezi din lista blocului (**Mesaj nou**) și îl scrii **la fel** în ambele locuri
4. Exemplu: Magicianul <span style="color:#E6A800;font-weight:700">difuzează</span> `magie`, iar Iepurele <span style="color:#E6A800;font-weight:700">când primesc</span> `magie` → <span style="color:#9966FF;font-weight:700">spune</span> `Hop!` pentru `2` secunde

**Încearcă tu — mesaje (3–4 min)**  
- [ ] Un personaj difuzează `magie`  
- [ ] Alt personaj aude și spune `Hop!`  
- [ ] Mesajul are **același** nume în ambele blocuri  

### 4) `difuzează … și așteaptă`
1. <span style="color:#E6A800;font-weight:700">difuzează</span> trimite mesajul și personajul **merge mai departe imediat**
2. <span style="color:#E6A800;font-weight:700">difuzează … și așteaptă</span> trimite mesajul și **așteaptă** să termine scriptul celui care îl primește
3. Exemplu: Magicianul spune `Abracadabra!`, apoi <span style="color:#E6A800;font-weight:700">difuzează … și așteaptă</span> `magie`; abia după ce Iepurele termină, Magicianul spune `Ta-dam!`
4. Dacă nimeni nu primește mesajul, `difuzează … și așteaptă` nu blochează nimic: scriptul merge mai departe

**Încearcă tu — așteaptă răspunsul (3 min)**  
- [ ] Magicianul continuă **după** ce Iepurele termină  
- [ ] Fără Iepure, Magicianul își termină scriptul singur  

---

## Greșeli frecvente
1. **Nu pornește la tastă** — dai o dată click pe **scenă**, apoi apeși tasta.  
2. **Mesajul nu ajunge** — numele din `difuzează` și din `când primesc` nu e același mesaj (`magie` și `magia` sunt mesaje diferite).  
3. **Replicile se calcă** — apeși **spațiu** în timpul spectacolului. Apasă după ce se termină.  
4. **`când primesc` pe personajul greșit** — selectează personajul care trebuie să **audă** mesajul.  
5. **`când decorul se schimbă la` nu pornește** — în bloc e alt decor sau decorul nu se schimbă.  
6. **Sunet după sunet / costum după costum** — pune între ele alt bloc.  
7. **`decorul următor` nu duce la `Spectacol`** — în lista de decoruri `Spectacol` trebuie să fie după `Culise`.  
8. **Nume fișier** — `Prenume_Nume_L4`, nu doar `Ana_L4`.  

---

## De făcut azi — „Butonul magic”
Salvat: `Prenume_Nume_L4`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2** — 2 decoruri + **Magicianul** cu ≥ 12 blocuri diferite |
| **Complet (ținta orei)** | Minim + **Iepurele** cu ≥ 8 blocuri diferite, care răspunde la mesajele Magicianului |

Dacă rămâi în urmă: salvează la **Minim**. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Locul *(Minim)*
Adaugi 2 decoruri, `Culise` și `Spectacol` (în această ordine), și redenumești personajele: `Magicianul`, `Iepurele`, `Porumbelul`. Pe **Scenă** faci scriptul:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">schimbă decorul la</span> `Culise`  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `5` secunde  
<span style="color:#9966FF;font-weight:700">decorul următor</span>  

- [ ] `Culise` primul în listă, `Spectacol` al doilea  
- [ ] Scriptul e pe **Scenă**  

### Pasul 2 — Magicianul *(Minim)*
Alegi un magician din bibliotecă, cu cel puțin 2 costume. Are **3 scripturi**, fiecare cu alt început. Ordinea e un **model**: poți schimba textele, numerele și mesajele.

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `-120` <span style="color:#4C97FF;font-weight:700">y:</span> `-60`  
<span style="color:#4C97FF;font-weight:700">orientează-te în direcția</span> `90`  
<span style="color:#9966FF;font-weight:700">spune</span> `Doamnelor și domnilor!` pentru `3` secunde  

<span style="color:#E6A800;font-weight:700">când decorul se schimbă la</span> `Spectacol`  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span> *(un sunet potrivit)*  
<span style="color:#9966FF;font-weight:700">spune</span> `Abracadabra!` pentru `2` secunde  
<span style="color:#E6A800;font-weight:700">difuzează … și așteaptă</span> `magie`  
<span style="color:#FFAB19;font-weight:700">repetă</span> `4` → <span style="color:#9966FF;font-weight:700">costumul următor</span> → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,3`  
<span style="color:#9966FF;font-weight:700">gândește</span> `Ta-dam!` pentru `2` secunde  
<span style="color:#9966FF;font-weight:700">schimbă costumul la</span> *(un costum ales de tine)*  

<span style="color:#E6A800;font-weight:700">când tasta</span> `spațiu` <span style="color:#E6A800;font-weight:700">este apăsată</span>  
<span style="color:#9966FF;font-weight:700">spune</span> `Bis!` pentru `2` secunde  
<span style="color:#E6A800;font-weight:700">difuzează</span> `bis`  

- [ ] `schimbă costumul la` **nu** stă lângă `costumul următor`  
- [ ] Nu ai sunet după sunet, nici costum după costum  
- [ ] Fără Iepure, Magicianul își termină scriptul singur  
- [ ] **Spațiu** îl apeși după ce se termină spectacolul  
- [ ] Salvat: `Prenume_Nume_L4`  

**→ Minim când:** decorul trece la `Spectacol`, Magicianul face magia, iar la **spațiu** spune `Bis!`.

### Pasul 3 — Iepurele *(Complet)*
Alegi un iepure sau alt personaj, cu cel puțin 2 costume. Are **3 scripturi**:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `80` <span style="color:#4C97FF;font-weight:700">y:</span> `-80`  
<span style="color:#4C97FF;font-weight:700">orientează-te spre</span> `Magicianul`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `magie`  
<span style="color:#FFAB19;font-weight:700">repetă</span> `6` → <span style="color:#9966FF;font-weight:700">costumul următor</span> → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,3`  
<span style="color:#4C97FF;font-weight:700">glisează în</span> `2` <span style="color:#4C97FF;font-weight:700">secunde la [poziție aleatoare]</span>  
<span style="color:#9966FF;font-weight:700">spune</span> `Hop!` pentru `2` secunde  
<span style="color:#9966FF;font-weight:700">schimbă costumul la</span> *(un costum ales de tine)*  

<span style="color:#E6A800;font-weight:700">când se dă click pe acest personaj</span>  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span> *(un sunet potrivit)*  
<span style="color:#9966FF;font-weight:700">spune</span> `Nu mă gâdila!` pentru `2` secunde  
<span style="color:#4C97FF;font-weight:700">mergi la [poziție aleatoare]</span>  

- [ ] Se uită spre Magician la steag  
- [ ] La mesajul `magie` face animația, glisează și spune `Hop!`  
- [ ] La click pe el spune `Nu mă gâdila!` și sare în alt loc  
- [ ] Salvat din nou: `Prenume_Nume_L4`  

**Gata Complet când:** Magicianul spune `Abracadabra!`, Iepurele răspunde, apoi Magicianul spune `Ta-dam!`, fără explicație cu vocea.

---

## Bonus (dacă ai terminat Complet)
- [ ] **Al 3-lea personaj** (Porumbelul), care răspunde la `bis`:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `100`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `bis`  
<span style="color:#FFAB19;font-weight:700">repetă</span> `6` → <span style="color:#4C97FF;font-weight:700">rotește-te ↻</span> `30` grade → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,3`  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span> *(un sunet potrivit)*  
<span style="color:#9966FF;font-weight:700">spune</span> `Cu-cu!` pentru `2` secunde  
<span style="color:#4C97FF;font-weight:700">glisează în</span> `2` <span style="color:#4C97FF;font-weight:700">secunde la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `100`  

<span style="color:#E6A800;font-weight:700">când se dă click pe acest personaj</span>  
<span style="color:#9966FF;font-weight:700">gândește</span> `Cu-cu! Ai apăsat pe mine!` pentru `2` secunde  
<span style="color:#9966FF;font-weight:700">schimbă costumul la</span> *(un costum ales de tine)*  

- [ ] ★★★ **Provocare:** o a doua tastă (de exemplu săgeată sus) difuzează un mesaj nou, iar Iepurele face la el altceva

## Recapitulare rapidă
1. Fiecare „când …” e un **început de script**, nu are nevoie de steag  
2. `difuzează` trimite un mesaj · `când primesc` îl aude  
3. `difuzează … și așteaptă` așteaptă să termine cel care primește  
4. Numele mesajului trebuie să fie **identic** în ambele blocuri  
5. Nu ai sunet după sunet, nici costum după costum  
6. Nume: **`Prenume_Nume_L4`**  

## Schema pe scurt *(pe foaie)*

**Pe Scenă**  
la steag → `schimbă decorul la` Culise → `așteaptă` … → `decorul următor`

**Pe Magician**  
la steag → `mergi la x: y:` → `orientează-te în direcția` → `spune`  
când decorul se schimbă la Spectacol → `pornește sunetul` → `spune` → `difuzează … și așteaptă` → `repetă` (`costumul următor` + `așteaptă`) → `gândește` → `schimbă costumul la`  
când tasta spațiu → `spune` → `difuzează`

**Pe Iepure**  
la steag → `mergi la x: y:` → `orientează-te spre`  
când primesc magie → `repetă` (`costumul următor` + `așteaptă`) → `glisează la [aleatoare]` → `spune` → `schimbă costumul la`  
când click pe personaj → `pornește sunetul` → `spune` → `mergi la [aleatoare]`

**Quiz scurt (cu profesorul):**  
- Ce diferență e între `difuzează` și `difuzează … și așteaptă`?  
- Ce face `când primesc`?  
- De ce trebuie să fie același nume la mesaj?  
- Ce se întâmplă dacă nimeni nu primește mesajul?

## Temă (opțional)
- Dacă ai doar Minim: adaugi acasă Iepurele, în același `Prenume_Nume_L4`.  
- Dacă ai Complet: adaugi acasă al 3-lea personaj, în același `Prenume_Nume_L4`.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi povestea (alte personaje, alte replici, alte mesaje).
