# Lecția 1 — Cardul meu animat
**Modulul 1 · Primii pași**  
**Code Maker Club · Scratch Starter**

> Azi înveți ecranul Scratch (steag, salvare, 5 capitole) și faci **„Cardul meu animat”**:  
> un clip scurt cu 2 personaje care vorbesc, merg, gândesc, își schimbă costumul și fac sunete.  
> Fișier: `Prenume_Nume_L1` (ex. `Ana_Pop_L1`)

---

## Obiectiv
La finalul orei pornești proiectul cu <span style="color:#3F8F2A;font-weight:700">steagul verde</span>, îl **salvezi** cu numele corect (`Prenume_Nume_L1`).  
**Minim:** personajul 1 (pisica) cu **8 blocuri diferite**.  
**Ținta orei (Complet):** personajul 2, tot cu **8 blocuri diferite**, care vorbește după personajul 1.

## De ce contează
Scratch e un constructor: lipești **blocuri** ca personajele să facă ceva pe **scenă**.  
Fără steag și fără salvare, restul orelor nu pot începe.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + tur pe ecran (scenă, personaj, steag, stop) |
| 5–35 | Pas cu pas: **4** mini-verificări |
| 35–105 | Proiectul „Cardul meu animat” (vezi **Minim vs Complet**) |
| 105–120 | Recap, bonus, arăți ce ai gata |

**Capitole azi (doar acestea 5):**  
<span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#9966FF;font-weight:700">Aspect</span> · <span style="color:#4C97FF;font-weight:700">Mișcare</span> · <span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#CF63CF;font-weight:700">Sunet</span>  
*(Detectare, Operatori, Variabile — mai târziu.)*

**Blocurile de azi:**

| Bloc | Ce face |
|------|---------|
| `când se dă click pe steagul verde` | pornește scriptul când apeși steagul |
| `mergi … pași` | mută personajul înainte cu atâția pași cât ai ales |
| `spune … pentru … secunde` | personajul vorbește, cu un balon, cât timp ai ales |
| `gândește … pentru … secunde` | la fel, dar cu balon de gând |
| `așteaptă … secunde` | scriptul stă pe loc cât timp ai ales |
| `schimbă costumul la` | personajul trece la costumul ales |
| `pornește sunetul` | pornește sunetul, iar scriptul merge mai departe |
| `redă sunetul … până la final` | pornește sunetul și așteaptă să se termine |

---

## Pas cu pas

### 1) Ecran + unde cauți blocurile
- **Scena** — unde rulează proiectul (dreapta sus)
- **Personaj** — cine e pe scenă (ex. pisica). EN: *sprite*
- **Blocuri** — instrucțiuni pe care le tragi cu mouse-ul

**Un bloc = o acțiune.** Un proiect = mai multe acțiuni lipite una sub alta.

| Capitol | Ce iei azi |
|---------|------------|
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | `când se dă click pe` steagul verde |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | `spune`, `gândește`, `schimbă costumul la` |
| <span style="color:#FFAB19;font-weight:700">Control</span> | `așteaptă` |
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | `mergi` |
| <span style="color:#CF63CF;font-weight:700">Sunet</span> | `pornește sunetul`, `redă sunetul … până la final` |

**Încearcă tu — ecran (1–2 min)**  
- [ ] Arăți: scena · personajul · steagul · stop  
- [ ] Găsești cele **5** capitole colorate din stânga (fără să deschizi altele)

### 2) Steagul + spune + așteaptă (împreună)
1. Selectezi **personajul** (nu Scena)
2. Din <span style="color:#E6A800;font-weight:700">Evenimente</span>:  
   <span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>
3. Din <span style="color:#9966FF;font-weight:700">Aspect</span>:  
   <span style="color:#9966FF;font-weight:700">spune</span> `Salut!` pentru `2` secunde
4. Din <span style="color:#FFAB19;font-weight:700">Control</span>:  
   <span style="color:#FFAB19;font-weight:700">așteaptă</span> `1` secundă
5. Încă un <span style="color:#9966FF;font-weight:700">spune</span> `Eu sunt …` pentru `2` secunde
6. Apeși <span style="color:#3F8F2A;font-weight:700">steagul verde</span> — replicile vin **pe rând**  
7. Butonul **roșu** oprește

Fără blocul de steag deasupra, celelalte blocuri **nu rulează**.

**Încearcă tu — start + ritm (3–4 min)**  
- [ ] Steag deasupra + **2** `spune` cu `așteaptă` între ele  
- [ ] Apeși steagul → mesajele nu se calcă  
- [ ] Oprești cu roșu  

### 3) Mergi, gândești, schimbi costumul, pornești sunetul
Adaugi blocurile pe rând, sub dialog, și apeși steagul după fiecare:

1. <span style="color:#4C97FF;font-weight:700">mergi</span> `10` pași — pune-l de **3 ori** la rând (încă nu știm `repetă`, deci punem blocul de mai multe ori)
2. <span style="color:#CF63CF;font-weight:700">pornește sunetul</span> *(alegi un sunet din listă)*
3. <span style="color:#9966FF;font-weight:700">gândește</span> `Hmm…` pentru `2` secunde
4. <span style="color:#9966FF;font-weight:700">schimbă costumul la</span> *(alegi un costum din listă; personajul trebuie să aibă cel puțin 2 costume)*
5. <span style="color:#FFAB19;font-weight:700">așteaptă</span> `1` secundă
6. <span style="color:#CF63CF;font-weight:700">redă sunetul</span> *(sunetul ales)* până la final

> **Regula:** nu punem **sunet după sunet** și nici **costum după costum**. Între ele pui alte blocuri (`mergi`, `gândește`, `așteaptă`).  
> **Diferența de sunet:** `pornește sunetul` pornește sunetul și trece mai departe. `redă sunetul … până la final` așteaptă să se termine sunetul.

**Încearcă tu — mișcare, aspect, sunet (3–5 min)**  
- [ ] Personajul merge, gândește, își schimbă costumul și face un sunet  
- [ ] Nu ai sunet după sunet, nici costum după costum  
- [ ] Oprești cu roșu  

### 4) Cum salvezi (nume unic)
1. Meniu **Fișier** (sau cont Scratch)
2. **Salvează acum** / **Salvează pe computerul tău**
3. Nume: **`Prenume_Nume_L1`**  
   - Ex. `Ana_Pop_L1`, `Ana_Ionescu_L1`  
   - **Nu** doar `Ana_L1` — în clasă pot fi doi Ana și se suprascriu

Salvează după părțile importante și înainte să închizi.

**Încearcă tu — salvare (1–2 min)**  
- [ ] Fișierul / proiectul se numește `Prenume_Nume_L1`  
- [ ] Profesorul confirmă că numele e **unic** în grupă  

---

## Greșeli frecvente
1. **Nu se întâmplă nimic** — lipsește steagul deasupra **sau** nu ai apăsat steagul de pe scenă.  
2. **Personajele vorbesc deodată** — lipsește <span style="color:#FFAB19;font-weight:700">așteaptă</span> la începutul personajului 2.  
3. **Script pe personajul greșit** — click pe personajul bun în listă înainte să lipești.  
4. **Costumul nu se schimbă** — personajul are un singur costum, sau ai ales în bloc costumul pe care îl are deja.  
5. **Sunet după sunet / costum după costum** — pune între ele alt bloc.  
6. **Nume greșit la salvare** — lipsește **numele de familie** (`Ana_L1` → `Ana_Pop_L1`).

---

## De făcut azi — „Cardul meu animat”
Salvat: `Prenume_Nume_L1`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1** — personajul 1 (pisica) cu **8 blocuri diferite**, salvat |
| **Complet (ținta orei)** | Minim + **Pasul 2** — personajul 2 cu **8 blocuri diferite**, pe rând cu personajul 1 |

Dacă rămâi în urmă: **oprește-te la Minim** și salvează. Nu e eșec — e baza pentru L2.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Personajul 1 *(Minim)*
Personajul 1 e **pisica**, personajul din start. Mai jos e un **model**. Poți schimba replicile, numerele, costumul și sunetele.

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">spune</span> `Salut! Eu sunt …` pentru `2` secunde  
<span style="color:#4C97FF;font-weight:700">mergi</span> `10` pași  
<span style="color:#4C97FF;font-weight:700">mergi</span> `10` pași  
<span style="color:#4C97FF;font-weight:700">mergi</span> `10` pași  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span> *(un sunet potrivit)*  
<span style="color:#4C97FF;font-weight:700">mergi</span> `15` pași  
<span style="color:#9966FF;font-weight:700">gândește</span> `Hmm…` pentru `2` secunde  
<span style="color:#9966FF;font-weight:700">schimbă costumul la</span> *(un costum ales de tine)*  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `1` secundă  
<span style="color:#CF63CF;font-weight:700">redă sunetul</span> *(un sunet potrivit)* până la final  
<span style="color:#4C97FF;font-weight:700">mergi</span> `30` pași  

- [ ] Nu ai sunet după sunet, nici costum după costum  
- [ ] Steag din nou → reîncepe de la capăt  
- [ ] Salvat: `Prenume_Nume_L1`  

**→ Ai Minim când:** la steag, pisica vorbește, merge, gândește, își schimbă costumul și face sunete, fără explicație cu vocea.

### Pasul 2 — Personajul 2 *(Complet)*
- [ ] Adaugi din **bibliotecă** un personaj la alegere (cu cel puțin 2 costume)  
- [ ] Îl așezi lângă pisică, ca să se vadă amândouă  

**Cum vorbesc pe rând:** scripturile celor 2 personaje pornesc **în același moment** la steag. Ca să nu vorbească deodată, personajul 2 începe cu <span style="color:#FFAB19;font-weight:700">așteaptă</span> cât durează personajul 1 până la ultimul sunet (`2` spune + `2` gândește + `1` așteaptă = `5` secunde).  

Model pentru personajul 2 *(alt ritm, alte blocuri în alt loc)*:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `5` secunde  
<span style="color:#9966FF;font-weight:700">gândește</span> `Ce zi frumoasă!` pentru `2` secunde  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span> *(un sunet potrivit)*  
<span style="color:#4C97FF;font-weight:700">mergi</span> `20` pași  
<span style="color:#9966FF;font-weight:700">spune</span> `Bună! Eu sunt …` pentru `3` secunde  
<span style="color:#9966FF;font-weight:700">schimbă costumul la</span> *(un costum ales de tine)*  
<span style="color:#4C97FF;font-weight:700">mergi</span> `10` pași  
<span style="color:#4C97FF;font-weight:700">mergi</span> `10` pași  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `2` secunde  
<span style="color:#CF63CF;font-weight:700">redă sunetul</span> *(un sunet potrivit)* până la final  
<span style="color:#4C97FF;font-weight:700">mergi</span> `25` pași  

- [ ] Începe cu `așteaptă`, ca să nu vorbiți deodată  
- [ ] Nu ai sunet după sunet, nici costum după costum  
- [ ] Steag din nou → reîncepe de la capăt  
- [ ] Salvat din nou: `Prenume_Nume_L1`  

**Gata Complet când:** cele două personaje se mișcă și vorbesc pe rând, fără să se calce.

---

## Bonus (dacă ai terminat Complet)
- [ ] **Al 3-lea personaj** la alegere, care intră ultimul  
- [ ] Modelul de mai jos (începe cu `așteaptă` `12` secunde, ca să apară după personajul 2):

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `12` secunde  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span> *(un sunet potrivit)*  
<span style="color:#4C97FF;font-weight:700">mergi</span> `15` pași  
<span style="color:#9966FF;font-weight:700">spune</span> `Salut, prieteni! Eu sunt …` pentru `3` secunde  
<span style="color:#4C97FF;font-weight:700">mergi</span> `10` pași  
<span style="color:#4C97FF;font-weight:700">mergi</span> `10` pași  
<span style="color:#9966FF;font-weight:700">schimbă costumul la</span> *(un costum ales de tine)*  
<span style="color:#9966FF;font-weight:700">gândește</span> `Ce echipă faină!` pentru `2` secunde  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `1` secundă  
<span style="color:#CF63CF;font-weight:700">redă sunetul</span> *(un sunet potrivit)* până la final  
<span style="color:#4C97FF;font-weight:700">mergi</span> `20` pași  

- [ ] ★★★ **Provocare:** Fiecare personaj are **3 replici** (`spune`) și clipul durează cel puțin 15 secunde, fără să se calce replicile. Arată clipul unui coleg fără să explici nimic: înțelege cine vorbește cu cine?

## Recapitulare rapidă
1. <span style="color:#3F8F2A;font-weight:700">Steagul</span> = start  
2. Personajul 2 începe cu `așteaptă`, ca să vorbească pe rând  
3. Sunetul și costumul nu se pun unul după altul  
4. Nume fișier: **`Prenume_Nume_L1`** (unic în clasă)  
5. Minim = Pasul 1 · Complet = Pasul 1 + 2  

## Schema pe scurt *(pe foaie)*

**Pe personajul 1**  
la steag → `spune` … → `mergi` → `pornește sunetul` → `gândește` … → `schimbă costumul la` … → `așteaptă` … → `redă sunetul`

**Pe personajul 2**  
la steag → `așteaptă` … → `gândește` … → `pornește sunetul` → `mergi` → `spune` … → `schimbă costumul la` … → `așteaptă` … → `redă sunetul`

**Quiz scurt (cu profesorul):**  
- Ce bloc pui primul?  
- Cum se numește fișierul tău? *(trebuie să aibă și numele de familie)*  
- Din ce capitol e `așteaptă`?  
- Ce diferență e între `pornește sunetul` și `redă sunetul … până la final`?

## Exemplu pe Scratch — dacă vrei să verifici / să te prinzi
*(Parcurge **întâi** toată lecția și proiectul. Exemplul e la final: rulează exemplul pe steag, apoi See inside — ca să compari cu cardul tău, nu ca să copiezi tot.)*

<div style="max-width:485px;margin:1rem 0;">
<iframe src="https://scratch.mit.edu/projects/1385205392/embed" width="485" height="402" scrolling="no" allowfullscreen style="max-width:100%;border:0;border-radius:8px;"></iframe>
<p style="margin:0.5rem 0 0;font-size:0.9em;"><a href="https://scratch.mit.edu/projects/1385205392" target="_blank" rel="noopener noreferrer">Deschide pe Scratch</a> — See inside / Remix, apoi rămâi pe **cardul tău** (`Prenume_Nume_L1`).</p>
</div>

## Temă (opțional)
- Dacă ai doar Minim: adaugi acasă personajul 2, în același `Prenume_Nume_L1`.  
- Dacă ai Complet: adaugi acasă al 3-lea personaj, în același `Prenume_Nume_L1`.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi povestea (alte replici, alte costume, alte sunete).
