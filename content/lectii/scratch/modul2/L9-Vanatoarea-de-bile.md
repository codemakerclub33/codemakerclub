# Lecția 9 — Vânătoarea de bile
### Recapitulare
**Modulul 2 · Logică**  
**Code Maker Club · Logic Explorer**

> Azi faci un joc ca **Pac-Man**: mănânci bile, ocolești capcane și fugi de fantomă, într-o arenă desenată de tine.  
> Proiect: **„Vânătoarea de bile”** · fișier: `Prenume_Nume_L9` (ex. `Ana_Pop_L9`)

---

## Obiectiv
La finalul orei joci propriul tău joc: Mâncăciosul se mișcă cu săgețile, se oprește la pereți, pierde vieți în capcane, mănâncă bile și adună scor.  
**Minim:** personajul 1 (Mâncăciosul) cu cel puțin **8 blocuri diferite**.  
**Ținta orei (Complet):** personajul 2 (Bila), cu cel puțin **8 blocuri diferite**, care se mută după ce e mâncată, numără scorul și anunță câștigul.

## De ce contează
Aproape orice joc are aceleași piese: **scor**, **vieți**, **obstacole** și **timp**. Azi nu învățăm blocuri noi: le punem pe toate cele de până acum să lucreze împreună. Așa vezi că ai deja tot ce îți trebuie ca să faci un joc.

**În clasă:** la un joc scriptele au `la infinit` și rulează în același timp. Fiecare personaj are partea lui, iar variabilele `scor` și `vieți` sunt **pentru toate personajele**.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + cum arată jocul |
| 5–30 | Reluări: **4** mini-verificări (**Încearcă tu**) |
| 30–105 | Proiectul „Vânătoarea de bile” (vezi **Minim vs Complet**) |
| 105–120 | Recap, bonus, salvare |

**Capitole azi (doar acestea 7):**  
<span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#4C97FF;font-weight:700">Mișcare</span> · <span style="color:#9966FF;font-weight:700">Aspect</span> · <span style="color:#CF63CF;font-weight:700">Sunet</span> · <span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#5CB1D1;font-weight:700">Detectare</span> · <span style="color:#59C059;font-weight:700">Operatori</span> · <span style="color:#FF8C1A;font-weight:700">Variabile</span>  

**Blocuri noi azi:** niciunul. Folosim doar ce știm.

---

## Reluări

| Capitol | Ce reluăm azi |
|---------|---------------|
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | `mergi … pași`, `orientează-te în direcția`, `orientează-te spre`, `mergi la x: y:`, `mergi la [poziție aleatoare]` |
| <span style="color:#FFAB19;font-weight:700">Control</span> | `la infinit`, `dacă … atunci`, `repetă până când`, `așteaptă`, `stop [totul]` |
| <span style="color:#5CB1D1;font-weight:700">Detectare</span> | `tasta [ ] apăsată?`, `atinge culoarea ( )?`, `atinge [personaj]?`, `cronometru`, `resetează cronometru` |
| <span style="color:#FF8C1A;font-weight:700">Variabile</span> | `setează … la`, `modifică … cu` |
| <span style="color:#59C059;font-weight:700">Operatori</span> | `( ) = ( )`, `nu`, `( ) + ( )`, `( ) / ( )` |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | `spune … pentru … secunde`, `costumul următor`, `setează mărimea la` |
| <span style="color:#CF63CF;font-weight:700">Sunet</span> | `pornește sunetul` |

### 1) Mișcare cu săgețile și pereți
1. Pentru fiecare săgeată: `dacă tasta [săgeată dreapta] apăsată? atunci` → `orientează-te în direcția 90` → `mergi 5 pași`
2. Direcțiile sunt: dreapta `90`, stânga `-90`, sus `0`, jos `180`
3. Peretele: `dacă atinge culoarea [albastru]? atunci` → `mergi -5 pași`. Mâncăciosul face pasul înapoi și rămâne în fața peretelui
4. Culoarea albastră o alegi cu **pipeta**, direct de pe perete

**Încearcă tu — mișcarea (4–5 min)**  
- [ ] Personajul merge în toate cele patru direcții cu săgețile  
- [ ] Se oprește în fața unui perete albastru  
- [ ] Nu trece prin perete, nici dacă ții săgeata apăsată  

### 2) Scor și vieți
1. Creezi două variabile, **pentru toate personajele**: `scor` și `vieți`
2. La început: `setează vieți la 3` (și `setează scor la 0`)
3. Când se întâmplă ceva: `modifică vieți cu -1` sau `modifică scor cu 1`
4. Verifici cu `dacă (vieți) = 0 atunci`. Variabilele se văd pe scenă

**Încearcă tu — scor și vieți (3–4 min)**  
- [ ] Cele două variabile apar pe scenă  
- [ ] La steag, `vieți` este `3` și `scor` este `0`  
- [ ] Cu un bloc `modifică` o variabilă crește sau scade  

### 3) Capcane și bile
1. O **capcană** este o zonă roșie din decor: `dacă atinge culoarea [roșu]? atunci` → `modifică vieți cu -1` și `mergi la x: y:` (înapoi la start)
2. O **bilă** care se mută: `mergi la [poziție aleatoare]`, apoi `repetă până când` `nu` `atinge culoarea [albastru]?` cu `mergi la [poziție aleatoare]` înăuntru. Așa bila nu rămâne într-un perete

**Încearcă tu — capcane (3–4 min)**  
- [ ] Atingerea roșului scade o viață și te întoarce la start  
- [ ] Bila se mută într-un loc nou, oriunde, fără să fie în perete  

### 4) Timp
1. `resetează cronometru` la început
2. `cronometru` este o valoare: câte secunde au trecut de la început
3. La final poți spune `cronometru`, ca să afli în cât timp ai câștigat

**Încearcă tu — cronometru (2–3 min)**  
- [ ] Personajul spune în cât timp a terminat jocul  

---

## Greșeli frecvente
1. **Mâncăciosul trece prin pereți** — pereții au nuanțe diferite de albastru, sau sunt prea subțiri. Pereții trebuie să aibă o singură culoare și să fie mai groși, cât degetul tău.  
2. **Mâncăciosul stă blocat de la început** — ai pornit personajul într-un perete. Pune `mergi la x: y:` într-un loc liber.  
3. **Se oprește în aer** — un alt personaj are culoarea albastră. Schimbă culoarea personajului sau a peretelui.  
4. **Viețile nu scad** — capcana nu e roșie, sau ai uitat `dacă atinge culoarea [roșu]?`. Dacă doar unele capcane merg, au fost desenate separat și au altă nuanță de roșu: copiază capcana care merge.  
5. **Bila nu vede scorul** — ai făcut variabila **numai pentru acest personaj**. Trebuie **pentru toate personajele**.  
6. **Scorul crește foarte repede** — după ce Mâncăciosul atinge bila, bila trebuie mutată imediat.  
7. **Bila apare în perete** — `mergi la [poziție aleatoare]` trebuie pus și **înainte** de `repetă până când`.  
8. **Bila ajunge într-o cameră închisă** — în arenă lasă drumuri deschise, fără camere închise.  
9. **Fantoma trece prin pereți** — e normal, e fantomă!  
10. **Nume fișier** — `Prenume_Nume_L9`, nu doar `Ana_L9`.  

---

## De făcut azi — „Vânătoarea de bile”
Salvat: `Prenume_Nume_L9`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2** — arena, personajele, variabilele + **Mâncăciosul** cu ≥ 8 blocuri diferite: se mișcă, se oprește la pereți și pierde vieți în capcane |
| **Complet (ținta orei)** | Minim + **Bila** cu ≥ 8 blocuri diferite, care dă scor, se mută după ce e mâncată și anunță câștigul la opt puncte |

Dacă rămâi în urmă: salvează la **Minim**. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Arena, personajele și variabilele *(Minim)*
**Arena** o desenezi tu, în tab-ul **Decoruri**, cu **Desenează**:
1. Umple fundalul cu o culoare deschisă, fără albastru și fără roșu
2. Cu unealta **Dreptunghi** desenezi pereții, **toți în același albastru**. Pereții să fie groși, cât degetul tău
3. Lasă drumuri largi între pereți, de două ori cât Mâncăciosul, și fără camere închise
4. Desenezi **o** capcană: un pătrat **roșu**, pe un drum. Apoi o selectezi, o copiezi și o lipești de încă **4 ori** (Ctrl+C, Ctrl+V), în locuri diferite pe drumuri. Ai **5 capcane**, toate de același roșu

**Personajele:** adaugi trei personaje și le redenumești exact: `Mâncăciosul` (un cerc galben, făcut de tine cu unealta **Cerc**, sau o minge din bibliotecă), `Bila` (un cerc mic, portocaliu sau galben) și `Fantoma` (personajul `Ghost`). Pe Mâncăcios faci două costume: copiezi costumul, apoi cu **Radiera** tai o felie, ca să apară gura. Pe Bilă adaugi în tab-ul **Sunete** un sunet. La fiecare personaj pui **Mărimea** la o valoare mică (de exemplu `40`), din câmpul Mărime.

**Variabilele:** creezi `scor` și `vieți`, ambele **pentru toate personajele**.

- [ ] Arena are pereți albaștri, groși, și cinci capcane roșii, copiate din prima  
- [ ] Personajele se numesc `Mâncăciosul`, `Bila` și `Fantoma`  
- [ ] Mâncăciosul are două costume (gura deschisă și închisă)  
- [ ] Variabilele `scor` și `vieți` sunt pentru toate personajele  

### Pasul 2 — Mâncăciosul *(Minim)*
Ordinea e un **model**: poți schimba textele, numerele și poziția de start. Mâncăciosul are **un script**:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#FF8C1A;font-weight:700">setează vieți la</span> `3`  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `-200` <span style="color:#4C97FF;font-weight:700">y:</span> `-140`  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">tasta [săgeată dreapta] apăsată?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">orientează-te în direcția</span> `90`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">mergi</span> `5` pași  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">costumul următor</span>  
↳ la fel pentru <span style="color:#5CB1D1;font-weight:700">tasta [săgeată stânga]</span> (direcția `-90`), <span style="color:#5CB1D1;font-weight:700">[săgeată sus]</span> (direcția `0`) și <span style="color:#5CB1D1;font-weight:700">[săgeată jos]</span> (direcția `180`)  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">atinge culoarea [albastru]?</span> <span style="color:#FFAB19;font-weight:700">atunci</span> → <span style="color:#4C97FF;font-weight:700">mergi</span> `-5` pași  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">atinge culoarea [roșu]?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică vieți cu</span> `-1`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">mergi la x:</span> `-200` <span style="color:#4C97FF;font-weight:700">y:</span> `-140`  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">(vieți) = 0</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">spune</span> `Joc terminat!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">stop</span> `[totul]`  

- [ ] Mâncăciosul pornește din locul de start, cu trei vieți  
- [ ] Se mișcă cu cele patru săgeți și își deschide și închide gura  
- [ ] Se oprește în fața pereților albaștri  
- [ ] În capcana roșie pierde o viață și se întoarce la start  
- [ ] La zero vieți spune „Joc terminat!” și jocul se oprește  
- [ ] Salvat: `Prenume_Nume_L9`  

**→ Minim când:** Mâncăciosul se mișcă prin arenă, nu trece prin pereți, pierde vieți în capcane roșii, iar după a treia capcană jocul se termină.

### Pasul 3 — Bila *(Complet)*
Bila are **un script**, care rulează tot timpul:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#FF8C1A;font-weight:700">setează scor la</span> `0`  
<span style="color:#5CB1D1;font-weight:700">resetează cronometru</span>  
<span style="color:#4C97FF;font-weight:700">mergi la</span> `[poziție aleatoare]`  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">atinge [Mâncăciosul]?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică scor cu</span> `1`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#CF63CF;font-weight:700">pornește sunetul</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">mergi la</span> `[poziție aleatoare]`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">repetă până când</span> <span style="color:#59C059;font-weight:700">nu</span> <span style="color:#5CB1D1;font-weight:700">atinge culoarea [albastru]?</span>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">mergi la</span> `[poziție aleatoare]`  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">(scor) = 8</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">spune</span> `Bravo!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#5CB1D1;font-weight:700">(cronometru)</span> <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">stop</span> `[totul]`  

- [ ] Bila apare într-un loc liber, nu într-un perete  
- [ ] Când Mâncăciosul o atinge, scorul crește și se aude sunetul  
- [ ] Bila se mută în alt loc liber  
- [ ] La opt puncte spune „Bravo!” și în câte secunde ai terminat  
- [ ] Salvat din nou: `Prenume_Nume_L9`  

**Gata Complet când:** apeși pe steag, Mâncăciosul mănâncă opt bile, evitând capcanele roșii, iar Bila te felicită și îți spune timpul, fără explicație cu vocea.

---

## Bonus (dacă ai terminat Complet)
- [ ] **Al 3-lea personaj** (Fantoma), care vine după tine și îți ia vieți:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `50` %  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `200` <span style="color:#4C97FF;font-weight:700">y:</span> `140`  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#4C97FF;font-weight:700">orientează-te spre</span> `[Mâncăciosul]`  
↳ <span style="color:#4C97FF;font-weight:700">mergi</span> `2` pași  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">atinge [Mâncăciosul]?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică vieți cu</span> `-1`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#CF63CF;font-weight:700">pornește sunetul</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">mergi la x:</span> `200` <span style="color:#4C97FF;font-weight:700">y:</span> `140`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">așteaptă</span> `1` secundă  

Pe Fantomă adaugi în tab-ul **Sunete** un sunet.

- [ ] ★★★ **Provocare:** Fantoma merge mai repede cu cât ai scor mai mare. În `mergi`, pui <span style="color:#59C059;font-weight:700">((2) + ((scor) / (4)))</span> în loc de `2`

## Recapitulare rapidă
1. Un joc are **scor**, **vieți**, **obstacole** și **timp**: le facem cu variabile, `dacă` și `cronometru`  
2. Cu `dacă tasta [ ] apăsată?`, `orientează-te în direcția` și `mergi` miști un personaj cu săgețile  
3. `dacă atinge culoarea […]? atunci mergi -5 pași` face un perete  
4. Variabilele folosite de mai multe personaje trebuie făcute **pentru toate personajele**  
5. După ce bila e mâncată, o muți imediat, ca scorul să nu crească de mai multe ori  
6. Nume: **`Prenume_Nume_L9`**  

## Schema pe scurt *(pe foaie)*

**Pe Mâncăcios**  
la steag → `setează vieți la 3` → `mergi la x: y:` → `la infinit` (`dacă tasta … apăsată?` `atunci` `orientează-te` + `mergi 5` + `costumul următor` × 4 săgeți + `dacă atinge culoarea [albastru]?` `atunci` `mergi -5` + `dacă atinge culoarea [roșu]?` `atunci` `modifică vieți cu -1` + `mergi la x: y:` + `dacă vieți = 0` `atunci` `spune` + `stop [totul]`)

**Pe Bilă**  
la steag → `setează scor la 0` → `resetează cronometru` → `mergi la [poziție aleatoare]` → `la infinit` (`dacă atinge [Mâncăciosul]?` `atunci` `modifică scor cu 1` + `pornește sunetul` + `mergi la [poziție aleatoare]` + `repetă până când` `nu` `atinge culoarea [albastru]?` (`mergi la [poziție aleatoare]`) + `dacă scor = 8` `atunci` `spune Bravo!` + `spune (cronometru)` + `stop [totul]`)

**Pe Fantomă**  
la steag → `setează mărimea` → `mergi la x: y:` → `la infinit` (`orientează-te spre [Mâncăciosul]` + `mergi 2` + `dacă atinge [Mâncăciosul]?` `atunci` `modifică vieți cu -1` + `pornește sunetul` + `mergi la x: y:` + `așteaptă 1`)

**Quiz scurt (cu profesorul):**  
- Cum faci un perete cu `atinge culoarea`? De ce pasul înapoi, `-5`?  
- De ce `scor` și `vieți` sunt pentru toate personajele?  
- De ce Bila se mută imediat după ce e mâncată?  
- Ce arată `cronometru` când Bila spune valoarea lui?

## Temă (opțional)
- Dacă ai doar Minim: adaugi acasă Bila, în același `Prenume_Nume_L9`.  
- Dacă ai Complet: adaugi acasă Fantoma, în același `Prenume_Nume_L9`.  
- Dacă ai terminat și Bonusul: desenezi o arenă nouă, mai grea, cu alte capcane, și o dai unui coleg să o încerce.
