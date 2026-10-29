# Lecția 3 — Invazia clonelor
**Modulul 3 · Jocuri**  
**Code Maker Club · Game Builder**

> Azi un singur personaj creează o **invazie**: gândacii vin spre prăjitura de la picnic, iar fiecare gândac este o **clonă**. Tu îi strivești cu click și salvezi picnicul.  
> Proiect: **„Invazia clonelor”** · fișier: `Prenume_Nume_L3` (ex. `Ana_Pop_L3`)

---

## Obiectiv
La finalul orei joci propriul joc: gândacii cad din vârful scenei spre prăjitură, tu dai click pe ei ca să strivești gândacii și aduni puncte, iar dacă unul ajunge la prăjitură, pierzi o viață. La zece puncte salvezi picnicul.  
**Minim:** personajul 1 (Gândacul) cu cel puțin **8 blocuri diferite**.  
**Ținta orei (Complet):** personajul 2 (Prăjitura), cu cel puțin **8 blocuri diferite**, care ține viețile și spune dacă ai câștigat sau ai pierdut.

## De ce contează
Într-un joc apar mulți inamici, multe gloanțe, multe monede. Nu faci câte un personaj pentru fiecare: faci **un singur personaj** și îi spui să se **cloneze**. Fiecare clonă este o copie care are aceleași scripturi, dar trăiește singură. Cu blocurile din <span style="color:#FFAB19;font-weight:700">Control</span> (EN: *Control*) creezi clone, le dai o viață a lor și le ștergi.

**În clasă:** clonele sunt copii ale personajului-mamă. Mama rămâne ascunsă și doar creează clone, iar ele arată, se mișcă și mor.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + blocurile noi din Control |
| 5–35 | Pas cu pas: **4** mini-verificări (**Încearcă tu**) |
| 35–105 | Proiectul „Invazia clonelor” (vezi **Minim vs Complet**) |
| 105–120 | Recap, bonus, salvare |

**Capitole azi (doar acestea 8):**  
<span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#4C97FF;font-weight:700">Mișcare</span> · <span style="color:#9966FF;font-weight:700">Aspect</span> · <span style="color:#FF8C1A;font-weight:700">Variabile</span> · <span style="color:#59C059;font-weight:700">Operatori</span> · <span style="color:#5CB1D1;font-weight:700">Detectare</span> · <span style="color:#CF63CF;font-weight:700">Sunet</span>  
*(Restul din Control — mai târziu.)*

**Blocuri noi azi:**

| Bloc | Ce face |
|------|---------|
| `creează o clonă a [mea]` | face o copie nouă a personajului (sau a altui personaj, alegând din listă) |
| `când încep ca și clonă` | pornește scriptul de sub el, **de fiecare dată când se naște o clonă**, doar pe ea |
| `șterge această clonă` | șterge clona care rulează scriptul, nu și personajul-mamă |

---

## Pas cu pas

| Capitol | Ce iei azi |
|---------|------------|
| <span style="color:#FFAB19;font-weight:700">Control</span> | **`creează o clonă a [mea]`**, **`când încep ca și clonă`**, **`șterge această clonă`**, `la infinit`, `așteaptă`, `dacă … atunci`, `dacă … atunci … altfel`, `stop [totul]` |
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | `când se dă click pe` steagul verde, `când se dă click pe acest personaj`, `când primesc`, `difuzează` |
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | `mergi la x: y:`, `glisează în … secunde la x: y:` |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | `arată`, `ascunde`, `spune`, `setează mărimea la` |
| <span style="color:#FF8C1A;font-weight:700">Variabile</span> | `Creează o variabilă`, `setează … la`, `modifică … cu` |
| <span style="color:#59C059;font-weight:700">Operatori</span> | `alege aleator între ( ) și ( )`, `( ) > ( )`, `( ) < ( )`, `( ) = ( )` |
| <span style="color:#5CB1D1;font-weight:700">Detectare</span> | `cronometru`, `resetează cronometru` |
| <span style="color:#CF63CF;font-weight:700">Sunet</span> | `pornește sunetul` |

### 1) Un personaj, multe copii
1. <span style="color:#FFAB19;font-weight:700">creează o clonă a [mea]</span> face o copie a personajului care a rulat blocul. Fiecare click pe bloc adaugă încă o copie
2. Clona apare **exact peste personajul-mamă**, cu aceleași scripturi și aceeași poziție. De aceea mama stă ascunsă, ca să se vadă doar clonele
3. Dacă pui blocul într-un `la infinit`, cu un `așteaptă` înăuntru, apare o clonă nouă din când în când: o **invazie**
4. În lista blocului poți alege și alt personaj, nu doar `mea`: așa un personaj creează clone ale altuia

**Încearcă tu — clone (3–4 min)**  
- [ ] Un personaj creează o clonă cu un click pe bloc  
- [ ] Cu `la infinit` și `așteaptă` apar clone una după alta  
- [ ] Personajul-mamă e ascuns, iar clonele se văd  

### 2) Ce face fiecare clonă
1. <span style="color:#FFAB19;font-weight:700">când încep ca și clonă</span> e un bloc de **pornire**: scriptul de sub el rulează o singură dată pe **fiecare** clonă nouă, nu pe mamă
2. În acel script clona se mută, se arată și face ce are de făcut. Fiecare clonă are un loc și un moment ale ei
3. <span style="color:#FFAB19;font-weight:700">șterge această clonă</span> șterge doar clona care a rulat blocul. Mama rămâne
4. Toate clonele dispar când apeși pe steag sau pe oprire. Pot exista cel mult **300** de clone odată

**Încearcă tu — clona (3–4 min)**  
- [ ] Sub `când încep ca și clonă` pui `arată`: clonele apar, mama rămâne ascunsă  
- [ ] Cu `șterge această clonă` la sfârșit, fiecare clonă dispare după ce termină  
- [ ] Mama nu dispare niciodată  

### 3) Click pe o clonă
1. <span style="color:#E6A800;font-weight:700">când se dă click pe acest personaj</span> merge și pe clone: dacă dai click pe o clonă, rulează scriptul **doar pe ea**
2. Acolo pui `modifică scor cu 1` și `șterge această clonă`: gândacul strivit dă un punct și dispare
3. **Atenție la variabile:** `scor` și `vieți` trebuie făcute **pentru toate personajele**. Dacă sunt făcute doar pentru un personaj, fiecare clonă primește propria copie, iar scorul nu se adună

**Încearcă tu — click (3 min)**  
- [ ] Un click pe o clonă o șterge  
- [ ] Un click pe o clonă adaugă un punct la `scor`  
- [ ] `scor` e variabilă **pentru toate personajele** și crește la fiecare gândac strivit  

### 4) Le punem împreună
1. **Locul de start:** fiecare clonă pornește sus, într-un loc la întâmplare: `mergi la x: (alege aleator între -200 și 200) y: 170`
2. **Drumul:** `glisează în 5 secunde la x: 0 y: -110` o duce spre prăjitură. Dacă ajunge acolo, pierzi o viață
3. **Strivit sau nu:** dacă strivești gândacul cu click, scriptul clonei se oprește odată cu ea și nu pierzi viața
4. **Ploaia:** `difuzează ploaie` ajunge la **toate** clonele. Fiecare clonă care primește `când primesc` `ploaie` face `șterge această clonă`

**Încearcă tu — împreună (3 min)**  
- [ ] Gândacii coboară din locuri diferite spre prăjitură  
- [ ] Un gândac strivit dă punct, iar unul care ajunge jos ia o viață  
- [ ] Un mesaj `ploaie` șterge toți gândacii deodată  

---

## Greșeli frecvente
1. **Se vede un gândac mare în mijloc** — mama nu e ascunsă. Lipsește `ascunde` la steag.  
2. **Nu apar clone** — lipsește `creează o clonă a [mea]` din `la infinit`, sau `la infinit` nu are `așteaptă`.  
3. **Clonele stau sus și nu coboară** — scriptul cu `glisează` e sub `când se dă click pe steagul verde`, nu sub `când încep ca și clonă`.  
4. **Nu se văd gândacii** — lipsește `arată` în scriptul clonei.  
5. **Click-ul nu strivește** — scriptul `când se dă click pe acest personaj` nu e pe gândac, sau gândacul e prea mic.  
6. **Scorul nu crește sau crește greșit** — `scor` e făcută numai pentru un personaj. Trebuie **pentru toate personajele**.  
7. **Pierzi vieți deși ai strivit gândacul** — `modifică vieți cu -1` e înainte de `glisează`. Trebuie să fie **după**, ca să se facă doar dacă ajunge jos.  
8. **Jocul nu se oprește** — lipsește `stop [totul]` după mesaj, sau ai scris în `dacă` un alt număr decât punctele pe care le poți strânge.  
9. **Norul nu face nimic la click** — nu au trecut zece secunde, sau lipsește `resetează cronometru` la steag.  
10. **Ploaia nu șterge gândacii** — lipsește `când primesc` `ploaie` la Gândac, sau mesajul are alt nume.  
11. **Jocul încetinește** — apar prea multe clone. Pune `așteaptă` mai mare în `la infinit`.  
12. **Nume fișier** — `Prenume_Nume_L3`, nu doar `Ana_L3`.  

---

## De făcut azi — „Invazia clonelor”
Salvat: `Prenume_Nume_L3`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2** — decorul, personajele, variabilele + **Gândacul** cu ≥ 8 blocuri diferite: creează clone, coboară spre prăjitură și dă puncte la click |
| **Complet (ținta orei)** | Minim + **Prăjitura** cu ≥ 8 blocuri diferite, care ține viețile și spune dacă ai salvat picnicul sau ai pierdut. Scriptul Gândacului nu se mai schimbă |

Dacă rămâi în urmă: salvează la **Minim**. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Picnicul și personajele *(Minim)*
**Decorul:** în tab-ul **Decoruri** alegi **Desenează** și umpli fundalul cu verde (iarba), sau alegi o grădină din bibliotecă.  
**Gândacul:** adaugi din bibliotecă `Beetle`, îl redenumești `Gândacul` și îl faci mic, cam `50` la mărime.  
**Prăjitura:** adaugi din bibliotecă o prăjitură (în căutare scrii `cake`) sau o desenezi cu **Cerc** și **Umple**, o redenumești `Prăjitura` și o pui jos, în mijloc.  
**Variabilele:** creezi `scor` și `vieți`, ambele **pentru toate personajele**.

- [ ] Decor verde, de iarbă sau de grădină  
- [ ] Personajele se numesc `Gândacul` și `Prăjitura`  
- [ ] Variabilele `scor` și `vieți` sunt **pentru toate personajele**  

### Pasul 2 — Gândacul *(Minim)*
Ordinea e un **model**: poți schimba numerele și timpii. Gândacul are **4 scripturi**, toate complete. Al patrulea ajunge la toate clonele când primesc mesajul `ploaie`: îl folosește Norul din Bonus, iar fără Nor nu face nimic. Scriptul clonei scade o viață când gândacul ajunge jos: viețile le ține Prăjitura, la Pasul 3:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">ascunde</span>  
<span style="color:#FF8C1A;font-weight:700">setează scor la</span> `0`  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#FFAB19;font-weight:700">așteaptă</span> <span style="color:#59C059;font-weight:700">(alege aleator între</span> `1` <span style="color:#59C059;font-weight:700">și</span> `2`<span style="color:#59C059;font-weight:700">)</span> secunde  
↳ <span style="color:#FFAB19;font-weight:700">creează o clonă a</span> `[mea]`  

<span style="color:#FFAB19;font-weight:700">când încep ca și clonă</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> <span style="color:#59C059;font-weight:700">(alege aleator între</span> `-200` <span style="color:#59C059;font-weight:700">și</span> `200`<span style="color:#59C059;font-weight:700">)</span> <span style="color:#4C97FF;font-weight:700">y:</span> `170`  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#4C97FF;font-weight:700">glisează în</span> `5` <span style="color:#4C97FF;font-weight:700">secunde la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `-110`  
<span style="color:#FF8C1A;font-weight:700">modifică vieți cu</span> `-1`  
<span style="color:#FFAB19;font-weight:700">șterge această clonă</span>  

<span style="color:#E6A800;font-weight:700">când se dă click pe acest personaj</span>  
<span style="color:#FF8C1A;font-weight:700">modifică scor cu</span> `1`  
<span style="color:#FFAB19;font-weight:700">șterge această clonă</span>  

<span style="color:#E6A800;font-weight:700">când primesc</span> `ploaie`  
<span style="color:#FFAB19;font-weight:700">șterge această clonă</span>  

- [ ] La steag, mama dispare și scorul e `0`  
- [ ] La una sau două secunde apare un gândac nou, sus, într-un loc diferit  
- [ ] Gândacul coboară încet spre prăjitură  
- [ ] Un click pe gândac îl șterge și scorul crește cu unu  
- [ ] Un gândac care ajunge jos dispare și scade variabila `vieți`  
- [ ] Salvat: `Prenume_Nume_L3`  

**→ Minim când:** apeși pe steag, gândacii cad din locuri diferite, tu îi strivești cu click, scorul crește, iar cei care ajung jos dispar.

### Pasul 3 — Prăjitura *(Complet)*
Prăjitura are **un script**, complet, care rulează tot timpul. Scriptul Gândacului nu se mai schimbă:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `-130`  
<span style="color:#FF8C1A;font-weight:700">setează vieți la</span> `3`  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#FF8C1A;font-weight:700">(vieți)</span> <span style="color:#59C059;font-weight:700">&lt;</span> `1` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">spune</span> `Gândacii au mâncat prăjitura!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">stop</span> `[totul]`  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#FF8C1A;font-weight:700">(scor)</span> <span style="color:#59C059;font-weight:700">=</span> `10` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">spune</span> `Picnic salvat!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">stop</span> `[totul]`  

- [ ] Prăjitura stă jos, în mijloc, iar jocul începe cu trei vieți  
- [ ] Un gândac care ajunge jos ia o viață  
- [ ] La zero vieți, Prăjitura spune „Gândacii au mâncat prăjitura!” și jocul se oprește  
- [ ] La zece puncte, Prăjitura spune „Picnic salvat!” și jocul se oprește  
- [ ] Un gândac strivit nu ia viață  
- [ ] Salvat din nou: `Prenume_Nume_L3`  

**Gata Complet când:** apeși pe steag, strivești gândacii cu click, pierzi o viață pentru fiecare care ajunge jos, iar jocul se termină cu câștig sau pierdere, fără explicație cu vocea.

---

## Bonus (dacă ai terminat Complet)
- [ ] **Al 3-lea personaj** (Norul), care aduce ploaia o dată la zece secunde. Adaugi din bibliotecă un nor (în căutare scrii `cloud`) sau îl desenezi, îl redenumești `Norul` și adaugi în **Sunete** un sunet. Norul e **mic** cât timp se încarcă și **mare** când e gata:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `-150` <span style="color:#4C97FF;font-weight:700">y:</span> `140`  
<span style="color:#5CB1D1;font-weight:700">resetează cronometru</span>  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#5CB1D1;font-weight:700">(cronometru)</span> <span style="color:#59C059;font-weight:700">&gt;</span> `10` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span> → <span style="color:#9966FF;font-weight:700">setează mărimea la</span> `120` % **altfel** → <span style="color:#9966FF;font-weight:700">setează mărimea la</span> `60` %  

<span style="color:#E6A800;font-weight:700">când se dă click pe acest personaj</span>  
<span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#5CB1D1;font-weight:700">(cronometru)</span> <span style="color:#59C059;font-weight:700">&gt;</span> `10` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#E6A800;font-weight:700">difuzează</span> `ploaie`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#CF63CF;font-weight:700">pornește sunetul</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#5CB1D1;font-weight:700">resetează cronometru</span>  

Scriptul Gândacului **nu se mai schimbă**: are deja `când primesc ploaie`, iar clonele se șterg singure.

Gândacii șterși de ploaie **nu dau puncte**: ploaia doar te scapă de ei, ca să nu pierzi vieți.

- [ ] Norul e mic cât timp se încarcă și mare când e gata  
- [ ] Un click pe nor înainte de zece secunde nu face nimic  
- [ ] Un click pe nor după zece secunde șterge toți gândacii și norul se încarcă din nou  
- [ ] ★★★ **Provocare:** gândacii merg mai repede cu cât ai mai multe puncte. În `glisează în` pui <span style="color:#59C059;font-weight:700">((5) - ((scor) / (4)))</span> secunde în loc de `5`

## Recapitulare rapidă
1. `creează o clonă a [mea]` face o copie; într-un `la infinit` cu `așteaptă` apare o invazie  
2. Mama stă **ascunsă**, iar clonele se **arată** și fac treaba  
3. `când încep ca și clonă` pornește scriptul pe fiecare clonă nouă, `șterge această clonă` o șterge doar pe ea  
4. `când se dă click pe acest personaj` merge și pe clone, iar variabilele se fac **pentru toate personajele**  
5. `difuzează` ajunge la toate clonele, iar fiecare poate răspunde cu `când primesc`  
6. Nume: **`Prenume_Nume_L3`**  

## Schema pe scurt *(pe foaie)*

**Pe Gândac**  
la steag → `ascunde` → `setează scor la 0` → `la infinit` (`așteaptă (alege aleator între 1 și 2)` + `creează o clonă a [mea]`)  
când încep ca și clonă → `mergi la x: (alege aleator între -200 și 200) y: 170` → `arată` → `glisează în 5 secunde la x: 0 y: -110` → `modifică vieți cu -1` → `șterge această clonă`  
când se dă click pe acest personaj → `modifică scor cu 1` → `șterge această clonă`  
când primesc ploaie → `șterge această clonă`

**Pe Prăjitură**  
la steag → `mergi la x: y:` → `setează vieți la 3` → `la infinit` (`dacă (vieți) < 1` `atunci` `spune` + `stop [totul]` · `dacă (scor) = 10` `atunci` `spune` + `stop [totul]`)

**Pe Nor** *(Bonus)*  
la steag → `mergi la x: y:` → `resetează cronometru` → `la infinit` (`dacă (cronometru) > 10` `atunci` `setează mărimea la 120` `altfel` `setează mărimea la 60`)  
când se dă click pe acest personaj → `dacă (cronometru) > 10` `atunci` (`difuzează ploaie` + `pornește sunetul` + `resetează cronometru`)

**Quiz scurt (cu profesorul):**  
- Ce face `creează o clonă a [mea]`? De ce mama stă ascunsă?  
- Care script rulează pe fiecare clonă nouă?  
- De ce `scor` trebuie făcută pentru toate personajele?  
- De ce `modifică vieți cu -1` stă după `glisează`, nu înainte?

## Temă (opțional)
- Dacă ai doar Minim: adaugi acasă Prăjitura, în același `Prenume_Nume_L3`.  
- Dacă ai Complet: adaugi acasă Norul, în același `Prenume_Nume_L3`.  
- Dacă ai terminat și Bonusul: schimbi povestea (de exemplu, furnici la un lac, sau gândaci într-o grădină) și faci clonele să vină din părți diferite.
