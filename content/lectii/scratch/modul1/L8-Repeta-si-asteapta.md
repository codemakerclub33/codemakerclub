# Lecția 8 — Dansul meu (repetă și așteaptă)
**Modulul 1 · Primii pași**  
**Code Maker Club · Scratch Starter**

> Azi personajele **așteaptă**, **repetă** și **aleg singure** ce fac, în funcție de tastă sau de mouse.  
> Proiect: **„Dansul meu”** · fișier: `Prenume_Nume_L8` (ex. `Ana_Pop_L8`)

---

## Obiectiv
La finalul orei concursul tău de dans pornește la o tastă, se repetă până îl oprești și răspunde la tastatură și la mouse, cu blocuri din <span style="color:#FFAB19;font-weight:700">Control</span>.  
**Minim:** personajul 1 (Dansatorul) cu cel puțin **8 blocuri diferite**.  
**Ținta orei (Complet):** personajul 2 (DJ-ul), cu cel puțin **8 blocuri diferite**, care pornește muzica la semnalul Dansatorului.

## De ce contează
În jocuri, personajele nu fac mereu același lucru: așteaptă o tastă, repetă o mișcare, se opresc când le atingi. Asta se face cu blocurile de <span style="color:#FFAB19;font-weight:700">Control</span> (EN: *Control*), împreună cu două condiții simple din <span style="color:#5CB1D6;font-weight:700">Detectare</span> (EN: *Sensing*).

**În clasă:** la proiect ții mouse-ul **departe** de Dansator până apeși tasta de start.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + capitolul Control |
| 5–35 | Pas cu pas: **4** mini-verificări (**Încearcă tu**) |
| 35–105 | Proiectul „Dansul meu” (vezi **Minim vs Complet**) |
| 105–120 | Recap, bonus, salvare |

**Capitole azi (doar acestea 6):**  
<span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#5CB1D6;font-weight:700">Detectare</span> *(doar 2 blocuri)* · <span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#4C97FF;font-weight:700">Mișcare</span> · <span style="color:#9966FF;font-weight:700">Aspect</span> · <span style="color:#CF63CF;font-weight:700">Sunet</span>  
*(Restul din Detectare, Operatori, Variabile — mai târziu.)*

**Blocuri noi azi:**

| Bloc | Ce face |
|------|---------|
| `la infinit` | repetă pentru totdeauna ce e înăuntru, până oprești proiectul |
| `stop [totul]` | oprește tot proiectul, inclusiv sunetele |
| `dacă … atunci` | face ce e înăuntru doar când condiția e adevărată |
| `dacă … atunci … altfel` | face ce e la „atunci” dacă e adevărat, iar dacă nu e adevărat face ce e la „altfel” |
| `așteaptă până când` | oprește scriptul până când condiția devine adevărată |
| `repetă până când` | repetă ce e înăuntru până când condiția devine adevărată |
| `tasta [spațiu] apăsată?` | condiție din Detectare: adevărată cât timp ții tasta apăsată |
| `atinge [cursorul mouse-ului]?` | condiție din Detectare: adevărată când mouse-ul e pe personaj |

---

## Pas cu pas

| Capitol | Ce iei azi |
|---------|------------|
| <span style="color:#FFAB19;font-weight:700">Control</span> | **`la infinit`**, **`stop [totul]`**, **`dacă … atunci`**, **`dacă … atunci … altfel`**, **`așteaptă până când`**, **`repetă până când`**, `repetă`, `așteaptă` |
| <span style="color:#5CB1D6;font-weight:700">Detectare</span> | **`tasta [spațiu] apăsată?`**, **`atinge [cursorul mouse-ului]?`** |
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | `când se dă click pe` steagul verde, `când primesc`, `difuzează` |
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | `setează x la`, `setează y la`, `modifică x cu`, `rotește-te ↻`, `orientează-te spre` |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | `schimbă decorul la`, `decorul următor`, `spune [ ]`, `gândește … pentru … secunde`, `costumul următor`, `setează mărimea la`, `modifică mărimea cu`, `modifică efectul [culoare] cu` |
| <span style="color:#CF63CF;font-weight:700">Sunet</span> | `pornește sunetul`, `redă sunetul … până la final`, `setează volumul la` |

### 1) La infinit și stop
1. Din <span style="color:#FFAB19;font-weight:700">Control</span> tragi <span style="color:#FFAB19;font-weight:700">la infinit</span> sub <span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>
2. Înăuntru pui <span style="color:#9966FF;font-weight:700">costumul următor</span> și <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,3`: personajul dansează fără sfârșit
3. Sub `la infinit` nu mai ajunge niciun bloc, pentru că bucla nu se termină niciodată
4. Proiectul se oprește cu butonul roșu sau cu <span style="color:#FFAB19;font-weight:700">stop [totul]</span>, care oprește și sunetele

**Încearcă tu — la infinit (2–3 min)**  
- [ ] Personajul dansează fără să se oprească  
- [ ] Un `așteaptă` înăuntru face dansul vizibil  
- [ ] Ai oprit proiectul cu butonul roșu  

### 2) Două condiții din Detectare
1. Din <span style="color:#5CB1D6;font-weight:700">Detectare</span> iei <span style="color:#5CB1D6;font-weight:700">tasta [spațiu] apăsată?</span>: e adevărată cât ții tasta apăsată
2. Tot de acolo, <span style="color:#5CB1D6;font-weight:700">atinge [cursorul mouse-ului]?</span>: e adevărată când mouse-ul e pe personaj
3. Sunt blocuri cu **colțuri**: nu se pun singure, ci în locul gol al unui bloc de Control (`dacă`, `așteaptă până când`, `repetă până când`)

**Încearcă tu — condiții (1–2 min)**  
- [ ] Ai găsit cele două blocuri în Detectare  
- [ ] Faci clic pe `tasta [spațiu] apăsată?` ținând spațiu apăsat și vezi **adevărat**  

### 3) Dacă și altfel
1. <span style="color:#FFAB19;font-weight:700">dacă … atunci</span> face ce e înăuntru doar când condiția e adevărată
2. Pui <span style="color:#FFAB19;font-weight:700">dacă</span> **în interiorul** lui `la infinit`: așa verifică din nou și din nou. Fără `la infinit` verifică o singură dată, la început
3. Exemplu: la infinit → `dacă` `atinge [cursorul mouse-ului]?` `atunci` <span style="color:#9966FF;font-weight:700">modifică efectul [culoare] cu</span> `25`
4. <span style="color:#FFAB19;font-weight:700">dacă … atunci … altfel</span> are două părți: ce face dacă e adevărat și ce face dacă nu e adevărat

**Încearcă tu — dacă (2–3 min)**  
- [ ] Culoarea se schimbă doar când mouse-ul e pe personaj  
- [ ] Cu `altfel` revine la normal când iei mouse-ul  

### 4) Așteaptă până când și repetă până când
1. <span style="color:#FFAB19;font-weight:700">așteaptă până când</span> `tasta [spațiu] apăsată?` — scriptul stă pe loc până apeși spațiu, apoi merge mai departe
2. <span style="color:#FFAB19;font-weight:700">repetă până când</span> `atinge [cursorul mouse-ului]?` — repetă blocurile dinăuntru până când mouse-ul atinge personajul
3. Diferența față de `repetă`: acolo spui **de câte ori**, aici spui **până când**

**Încearcă tu — până când (2–3 min)**  
- [ ] Personajul așteaptă până apeși spațiu  
- [ ] Se rotește până pui mouse-ul pe el  

---

## Greșeli frecvente
1. **Nu se întâmplă nimic după `la infinit`** — bucla nu se termină niciodată. Ce vrei să se întâmple pui înăuntru sau în alt script.  
2. **Personajul se agită sau ecranul pâlpâie** — în buclă lipsește `așteaptă`. Pune `așteaptă` `0,2`.  
3. **`dacă` nu răspunde decât o dată** — nu e în `la infinit`. Pune `dacă` înăuntru.  
4. **Condiția nu intră în bloc** — blocurile cu colțuri se pun doar în locul gol al unui bloc de Control.  
5. **Dansul se termină imediat** — mouse-ul era deja pe Dansator. Ține mouse-ul departe până apeși tasta.  
6. **`stop [totul]` taie și muzica** — îl pui doar la final, după ce au terminat toți.  
7. **Decorul nu se schimbă la final** — `Confetti` trebuie să fie după `Sala` în listă, iar mesajul din `când primesc` trebuie să fie `final`.  
8. **Mesajul nu ajunge** — numele din `difuzează` și din `când primesc` nu e același mesaj (`start` și `pornire` sunt mesaje diferite).  
9. **Nume fișier** — `Prenume_Nume_L8`, nu doar `Ana_L8`.  

---

## De făcut azi — „Dansul meu”
Salvat: `Prenume_Nume_L8`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2** — scena cu 2 decoruri și sunete + **Dansatorul** cu ≥ 8 blocuri diferite |
| **Complet (ținta orei)** | Minim + **DJ-ul** cu ≥ 8 blocuri diferite, care pornește muzica la semnalul Dansatorului |

Dacă rămâi în urmă: salvează la **Minim**. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Sala de dans *(Minim)*
Alegi un decor de petrecere sau de sală de dans și îl redenumești `Sala`. Apoi **desenezi al doilea decor**, `Confetti`, în editorul de decoruri: un fundal închis, plin de buline colorate și cercuri (uneltele **Cerc** și **Pensulă**). Îți ia 5–8 minute. Dacă nu vrei să desenezi, alegi din bibliotecă un decor colorat.  
Redenumești personajele: `Dansatorul`, `DJ`, `Juriul`. DJ-ul primește în tab-ul **Sunete** o muzică potrivită, iar Juriul aplauze. Pe **Scenă** faci scripturile:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">schimbă decorul la</span> `Sala`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `final`  
<span style="color:#9966FF;font-weight:700">decorul următor</span>  

- [ ] `Sala` primul în listă, `Confetti` al doilea  
- [ ] Scripturile sunt pe **Scenă**  
- [ ] Personajele sunt redenumite  
- [ ] DJ-ul are muzica, iar Juriul aplauzele în tab-ul **Sunete**  
- [ ] Dacă nu ai apucat să desenezi, poți lăsa un singur decor și sări peste cele două scripturi: nu pierzi Minimul  

### Pasul 2 — Dansatorul *(Minim)*
Alegi un personaj din bibliotecă care seamănă cu un dansator, cu cel puțin 2 costume. Ordinea e un **model**: poți schimba textele, numerele și mesajele.

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">setează x la</span> `-150`  
<span style="color:#4C97FF;font-weight:700">setează y la</span> `-60`  
<span style="color:#9966FF;font-weight:700">spune</span> `Apasă spațiu!`  
<span style="color:#FFAB19;font-weight:700">așteaptă până când</span> <span style="color:#5CB1D6;font-weight:700">tasta [spațiu] apăsată?</span>  
<span style="color:#9966FF;font-weight:700">spune</span> `Hai la dans!`  
<span style="color:#E6A800;font-weight:700">difuzează</span> `start`  
<span style="color:#FFAB19;font-weight:700">repetă</span> `4` → <span style="color:#4C97FF;font-weight:700">modifică x cu</span> `30` → <span style="color:#9966FF;font-weight:700">costumul următor</span> → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,3`  
<span style="color:#FFAB19;font-weight:700">repetă până când</span> <span style="color:#5CB1D6;font-weight:700">atinge [cursorul mouse-ului]?</span> → <span style="color:#4C97FF;font-weight:700">rotește-te ↻</span> `15` grade → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,2`  
<span style="color:#E6A800;font-weight:700">difuzează</span> `final`  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `5` secunde  
<span style="color:#FFAB19;font-weight:700">stop [totul]</span>  

- [ ] Fără DJ și Juriu, Dansatorul își termină scriptul singur  
- [ ] Dansul se oprește când pui mouse-ul pe Dansator  
- [ ] Steag din nou → așteaptă iar tasta de start  
- [ ] Salvat: `Prenume_Nume_L8`  

**→ Minim când:** Dansatorul așteaptă spațiu, dansează patru pași, se rotește până îl atingi cu mouse-ul, apoi proiectul se oprește.

### Pasul 3 — DJ-ul *(Complet)*
Alegi un personaj care seamănă cu un DJ. Are **2 scripturi**, iar al doilea pornește când Dansatorul difuzează `start`:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">setează x la</span> `150`  
<span style="color:#4C97FF;font-weight:700">setează y la</span> `-60`  
<span style="color:#4C97FF;font-weight:700">orientează-te spre</span> `Dansatorul`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `start`  
<span style="color:#CF63CF;font-weight:700">setează volumul la</span> `70` %  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span> *(muzica)*  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D6;font-weight:700">atinge [cursorul mouse-ului]?</span> <span style="color:#FFAB19;font-weight:700">atunci</span> → <span style="color:#9966FF;font-weight:700">modifică efectul [culoare] cu</span> `25`  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D6;font-weight:700">tasta [săgeată sus] apăsată?</span> <span style="color:#FFAB19;font-weight:700">atunci</span> → <span style="color:#9966FF;font-weight:700">setează mărimea la</span> `130` % **altfel** → <span style="color:#9966FF;font-weight:700">setează mărimea la</span> `100` %  
↳ <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,2` secunde  

- [ ] DJ-ul stă pe loc până vine `start`  
- [ ] Muzica pornește odată cu dansul  
- [ ] Cu mouse-ul pe DJ își schimbă culoarea, iar cu săgeata sus se mărește  
- [ ] Salvat din nou: `Prenume_Nume_L8`  

**Gata Complet când:** apeși spațiu, Dansatorul dansează, DJ-ul pornește muzica și lumina, apoi atingi Dansatorul cu mouse-ul și totul se oprește, fără explicație cu vocea.

---

## Bonus (dacă ai terminat Complet)
- [ ] **Al 3-lea personaj** (Juriul), care aplaudă la final:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">setează x la</span> `0`  
<span style="color:#4C97FF;font-weight:700">setează y la</span> `120`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `50` %  
<span style="color:#CF63CF;font-weight:700">setează volumul la</span> `100` %  

<span style="color:#E6A800;font-weight:700">când primesc</span> `start`  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `1` secundă  
<span style="color:#9966FF;font-weight:700">gândește</span> `Ce ritm!` pentru `2` secunde  

<span style="color:#E6A800;font-weight:700">când primesc</span> `final`  
<span style="color:#CF63CF;font-weight:700">redă sunetul</span> *(aplauze)* <span style="color:#CF63CF;font-weight:700">până la final</span>  
<span style="color:#FFAB19;font-weight:700">repetă</span> `3` → <span style="color:#9966FF;font-weight:700">costumul următor</span> → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,3`  
<span style="color:#9966FF;font-weight:700">modifică mărimea cu</span> `30`  
<span style="color:#9966FF;font-weight:700">spune</span> `Zece! Bravo!` pentru `2` secunde  

- [ ] ★★★ **Provocare:** în `repetă până când`, dacă tasta **săgeată stânga** e apăsată, Dansatorul se rotește în sens invers (`rotește-te ↺`), altfel se rotește ca până acum (`dacă … altfel`)

## Recapitulare rapidă
1. `la infinit` nu se termină; ce e sub el nu mai ajunge niciodată  
2. `dacă` verifică o dată; ca să verifice mereu îl pui în `la infinit`  
3. `dacă … altfel` alege între două lucruri  
4. `așteaptă până când` oprește scriptul până când condiția e adevărată  
5. `repetă până când` repetă până când condiția devine adevărată  
6. Nume: **`Prenume_Nume_L8`**  

## Schema pe scurt *(pe foaie)*

**Pe Scenă**  
la steag → `schimbă decorul la` Sala  
când primesc final → `decorul următor`

**Pe Dansator**  
la steag → `setează x la` → `setează y la` → `spune` → `așteaptă până când` `tasta spațiu` → `spune` → `difuzează start` → `repetă` (`modifică x` + `costumul următor` + `așteaptă`) → `repetă până când` `atinge mouse-ul` (`rotește-te` + `așteaptă`) → `difuzează final` → `așteaptă` → `stop`

**Pe DJ**  
la steag → `setează x la` → `setează y la` → `orientează-te spre`  
când primesc start → `setează volumul` → `pornește sunetul` → `la infinit` (`dacă` `atinge mouse-ul` `atunci` `modifică efectul`; `dacă` `tasta` `atunci` `setează mărimea` `altfel` `setează mărimea`; `așteaptă`)

**Quiz scurt (cu profesorul):**  
- De ce nu ajunge niciun bloc sub `la infinit`?  
- Ce diferență e între `repetă` `4` și `repetă până când`?  
- Ce face `altfel` în `dacă … altfel`?  
- De ce pui `dacă` în interiorul lui `la infinit`?

## Temă (opțional)
- Dacă ai doar Minim: adaugi acasă DJ-ul, în același `Prenume_Nume_L8`.  
- Dacă ai Complet: adaugi acasă al 3-lea personaj, în același `Prenume_Nume_L8`.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi povestea (alt dans, altă muzică, alte reguli de oprire).
