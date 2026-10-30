# Lecția 8 — Blocurile mele
### Blocurile mele
**Modulul 2 · Logică**  
**Code Maker Club · Logic Explorer**

> Azi îți faci **propriile blocuri**: scrii o dată cum se desenează o formă și o folosești oricând, cu orice mărime.  
> Proiect: **„Blocurile mele”** · fișier: `Prenume_Nume_L8` (ex. `Ana_Pop_L8`)

---

## Obiectiv
La finalul orei Pictorul desenează o floare folosind blocul lui `pătrat (mărime)`, făcut de tine.  
**Minim:** personajul 1 (Pictorul) cu cel puțin **8 blocuri diferite**.  
**Ținta orei (Complet):** personajul 2 (Steaua), cu cel puțin **8 blocuri diferite**, care își face blocul `stea (mărime)` și desenează stele.

## De ce contează
Când ai de desenat același lucru de mai multe ori (un pătrat, o stea), nu mai scrii de fiecare dată toate blocurile. Îți faci **un bloc al tău**, îi dai un nume și îl folosești ca pe oricare altul. Programatorii fac asta tot timpul: se numește **funcție** sau **bloc propriu**. Cu un **parametru** (de exemplu `mărime`) același bloc desenează forme mici sau mari.

**În clasă:** la proiect, blocul trebuie și **definit**, și **folosit**: definiția doar spune cum se desenează, nu desenează nimic singură.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + ce este un bloc propriu |
| 5–35 | Pas cu pas: **4** mini-verificări (**Încearcă tu**) |
| 35–105 | Proiectul „Blocurile mele” (vezi **Minim vs Complet**) |
| 105–120 | Recap, bonus, salvare |

**Capitole azi (doar acestea 7):**  
<span style="color:#FF6680;font-weight:700">Blocurile mele</span> · <span style="color:#0FBD8C;font-weight:700">Stilou</span> · <span style="color:#4C97FF;font-weight:700">Mișcare</span> · <span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#9966FF;font-weight:700">Aspect</span> · <span style="color:#59C059;font-weight:700">Operatori</span>

**Bloc nou azi:**

| Bloc | Ce face |
|------|---------|
| <span style="color:#FF6680;font-weight:700">Creează un bloc</span> | butonul din capitolul **Blocurile mele**: îți faci propriul bloc, cu nume și cu **intrări** (parametri) |

Din el apar două lucruri pe care le folosești imediat: scriptul <span style="color:#FF6680;font-weight:700">definește</span> (unde spui cum se desenează) și blocul tău, în lista **Blocurile mele**.

---

## Pas cu pas

| Capitol | Ce iei azi |
|---------|------------|
| <span style="color:#FF6680;font-weight:700">Blocurile mele</span> | **`Creează un bloc`**, `definește`, blocul tău, parametrul (intrarea) |
| <span style="color:#0FBD8C;font-weight:700">Stilou</span> | `stilou jos`, `stilou sus`, `șterge tot`, `schimbă [culoarea] stiloului cu`, `setează grosimea stiloului la` |
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | `mergi … pași`, `rotește-te ↻`, `mergi la x: y:`, `mergi la [poziție aleatoare]`, `glisează în … secunde la [poziție aleatoare]` |
| <span style="color:#FFAB19;font-weight:700">Control</span> | `repetă` |
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | `când se dă click pe` steagul verde, `când primesc`, `difuzează`, `difuzează … și așteaptă` |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | `spune … pentru … secunde`, `arată`, `ascunde` |
| <span style="color:#59C059;font-weight:700">Operatori</span> | `( ) / ( )` |

### 1) Îți creezi un bloc cu un parametru
1. Mergi la capitolul <span style="color:#FF6680;font-weight:700">Blocurile mele</span> (roz) și apeși **Creează un bloc**
2. Se deschide fereastra **Creează un bloc**. În căsuța „numele blocului” scrii: `pătrat`
3. Apeși **Adaugă o intrare (număr sau text)**. Apare un parametru; îi schimbi numele în `mărime`
4. Apeși **OK**. Pe zona de scripturi apare scriptul <span style="color:#FF6680;font-weight:700">definește pătrat (mărime)</span>, iar în lista de blocuri apare blocul tău **pătrat ( )**
5. Sub `definește` pui `repetă 4`, cu `mergi (mărime) pași` și `rotește ↻ 90 grade`. Parametrul `mărime` îl tragi (din chenarul `definește`) în locul numărului din `mergi`

**Încearcă tu — primul bloc (4–5 min)**  
- [ ] Ai creat blocul `pătrat` cu intrarea `mărime`  
- [ ] Sub `definește` ai pus `repetă 4` cu `mergi (mărime)` și `rotește ↻ 90`  
- [ ] Parametrul `mărime` e tras în `mergi`  

### 2) Îți folosești blocul
1. Blocul **pătrat ( )** din lista roz îl pui într-un script obișnuit, de exemplu sub steag, după `stilou jos`
2. Scrii un număr în el: `pătrat (30)` desenează un pătrat mic, `pătrat (100)` unul mare
3. Același bloc, alt număr, altă mărime: asta face parametrul
4. Dacă schimbi definiția o dată, se schimbă peste tot unde ai folosit blocul

**Încearcă tu — folosirea (3–4 min)**  
- [ ] Un pătrat de mărime `30`  
- [ ] Un pătrat de mărime `100`  
- [ ] Trei pătrate puse unul peste altul, cu `rotește ↻ 30` între ele  

### 3) Fiecare personaj are blocurile lui
1. Blocul făcut în Pictor se vede **doar** la Pictor. Dacă te muți pe Stea, lista Blocurile mele e goală
2. Steaua își face propriul bloc, cu **Creează un bloc**: `stea`, cu intrarea `mărime`
3. Definiția: `repetă 5` cu `mergi (mărime) pași` și `rotește ↻ 144 grade`
4. Comandă rapidă: poți trage scriptul `definește` pe imaginea altui personaj, în lista de personaje, și blocul se copiază acolo

**Încearcă tu — steaua (4–5 min)**  
- [ ] Blocul `stea` e creat pe personajul Steaua  
- [ ] Cu `rotește ↻ 144` și `repetă 5` iese o stea cu cinci colțuri  
- [ ] Ai desenat o stea mică și una mare  

### 4) Un bloc cu două intrări
1. La **Creează un bloc** poți apăsa **Adaugă o intrare** de două ori: ai două parametri
2. Exemplu: `poligon (laturi) (mărime)`: `laturi` e câte laturi are forma, `mărime` e cât de lungă e o latură
3. Definiția: `repetă (laturi)` cu `mergi (mărime) pași` și `rotește ↻ ((360) / (laturi)) grade`. Blocul `/` e din <span style="color:#59C059;font-weight:700">Operatori</span>
4. Dacă împarți 360 la numărul de laturi, forma se închide singură: `poligon (3) (50)` e triunghi, `poligon (6) (50)` e hexagon

**Încearcă tu — poligonul (4–5 min)**  
- [ ] Blocul `poligon` are două intrări: `laturi` și `mărime`  
- [ ] `poligon (4) (50)` desenează un pătrat  
- [ ] `poligon (5) (50)` desenează un pentagon  

---

## Greșeli frecvente
1. **Blocul meu nu se vede în listă** — ai făcut blocul în alt personaj. Fiecare personaj are blocurile lui.  
2. **Desenul nu se schimbă când schimbi numărul** — în `mergi` ai lăsat un număr fix. Trage parametrul `mărime` în locul lui.  
3. **Nu apare nimic pe scenă** — ai definit blocul, dar nu ai **folosit** blocul. Blocul tău trebuie pus într-un script cu steag.  
4. **Pătratul nu se închide** — la pătrat: `repetă 4` și `rotește ↻ 90`.  
5. **Steaua nu are colțuri** — pentru stea trebuie `repetă 5` și `rotește ↻ 144`. Cu `72` iese un pentagon.  
6. **Poligonul iese deformat** — unghiul trebuie să fie `360 / laturi`, nu `360 / mărime`. Verifică ce parametru ai pus unde.  
7. **Linii în plus între forme** — ai uitat `stilou sus` când muți personajul de la o formă la alta.  
8. **Scriptul de steag a intrat sub `definește`** — scriptul `definește` e separat. Pune scriptul tău de desen sub steag, nu sub `definește`.  
9. **Steaua se vede de la început** — la steag trebuie `ascunde`; ea apare doar când primește `steaua`.  
10. **Nume fișier** — `Prenume_Nume_L8`, nu doar `Ana_L8`.  

---

## De făcut azi — „Blocurile mele”
Salvat: `Prenume_Nume_L8`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2** — personajele, extensia + **Pictorul** cu ≥ 8 blocuri diferite și blocul lui `pătrat (mărime)` |
| **Complet (ținta orei)** | Minim + **Steaua** cu ≥ 8 blocuri diferite, cu blocul ei `stea (mărime)` |

Dacă rămâi în urmă: salvează la **Minim**. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Personajele și extensia *(Minim)*
Poți porni de la proiectul din L7: deschizi `Prenume_Nume_L7`, apeși **Salvează ca** și îl numești `Prenume_Nume_L8`. Păstrezi personajele `Pictorul`, `Steaua` și `Pensula` și ștergi scripturile vechi (blocurile din L7 nu mai trebuie). Dacă începi de la zero: decor alb sau deschis, trei personaje redenumite exact, și extensia **Stilou** adăugată cu butonul **Adaugă o extensie**.

- [ ] Fișierul se numește `Prenume_Nume_L8`  
- [ ] Personajele se numesc `Pictorul`, `Steaua` și `Pensula`  
- [ ] Extensia Stilou e adăugată  
- [ ] Scripturile vechi din L7 sunt șterse  

### Pasul 2 — Pictorul *(Minim)*
Ordinea e un **model**: poți schimba textele, numerele și mesajele. Pictorul are **2 scripturi**.

Blocul tău (creat cu **Creează un bloc**, cu intrarea `mărime`):

<span style="color:#FF6680;font-weight:700">definește pătrat (mărime)</span>  
↳ <span style="color:#FFAB19;font-weight:700">repetă</span> `4`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">mergi</span> `(mărime)` pași  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">rotește-te ↻</span> `90` grade  

Scriptul de desen:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#0FBD8C;font-weight:700">șterge tot</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `60`  
<span style="color:#0FBD8C;font-weight:700">stilou jos</span>  
<span style="color:#FFAB19;font-weight:700">repetă</span> `12`  
↳ <span style="color:#FF6680;font-weight:700">pătrat</span> `(60)`  
↳ <span style="color:#4C97FF;font-weight:700">rotește-te ↻</span> `30` grade  
↳ <span style="color:#0FBD8C;font-weight:700">schimbă [culoarea] stiloului cu</span> `10`  
<span style="color:#0FBD8C;font-weight:700">stilou sus</span>  
<span style="color:#9966FF;font-weight:700">spune</span> `Floarea mea!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#E6A800;font-weight:700">difuzează</span> `steaua` <span style="color:#E6A800;font-weight:700">și așteaptă</span>  
<span style="color:#E6A800;font-weight:700">difuzează</span> `final`  

- [ ] Blocul `pătrat` are intrarea `mărime`, trasă în `mergi`  
- [ ] Scena se curăță, iar Pictorul desenează o floare din 12 pătrate  
- [ ] Culorile se schimbă de la un pătrat la altul  
- [ ] La final spune „Floarea mea!”  
- [ ] Fără Stea și Pensulă, Pictorul își termină povestea singur  
- [ ] Salvat: `Prenume_Nume_L8`  

**→ Minim când:** apeși pe steag și Pictorul desenează, cu blocul lui `pătrat`, o floare colorată din 12 pătrate, apoi spune „Floarea mea!”.

### Pasul 3 — Steaua *(Complet)*
Steaua are **3 scripturi**: blocul ei, scriptul de steag și scriptul care pornește când Pictorul difuzează `steaua`:

<span style="color:#FF6680;font-weight:700">definește stea (mărime)</span>  
↳ <span style="color:#FFAB19;font-weight:700">repetă</span> `5`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">mergi</span> `(mărime)` pași  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">rotește-te ↻</span> `144` grade  

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">ascunde</span>  

<span style="color:#E6A800;font-weight:700">când primesc</span> `steaua`  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#4C97FF;font-weight:700">mergi la</span> `[poziție aleatoare]`  
<span style="color:#0FBD8C;font-weight:700">stilou jos</span>  
<span style="color:#FF6680;font-weight:700">stea</span> `(40)`  
<span style="color:#0FBD8C;font-weight:700">stilou sus</span>  
<span style="color:#4C97FF;font-weight:700">glisează în</span> `1` <span style="color:#4C97FF;font-weight:700">secunde la</span> `[poziție aleatoare]`  
<span style="color:#0FBD8C;font-weight:700">schimbă [culoarea] stiloului cu</span> `40`  
<span style="color:#0FBD8C;font-weight:700">stilou jos</span>  
<span style="color:#FF6680;font-weight:700">stea</span> `(80)`  
<span style="color:#0FBD8C;font-weight:700">stilou sus</span>  
<span style="color:#9966FF;font-weight:700">ascunde</span>  

- [ ] Blocul `stea` e făcut pe Stea, cu intrarea `mărime`  
- [ ] Steaua e ascunsă până vine `steaua`  
- [ ] Apare, desenează o stea mică, se mută și desenează una mai mare, de altă culoare  
- [ ] La final dispare  
- [ ] Salvat din nou: `Prenume_Nume_L8`  

**Gata Complet când:** apeși pe steag, Pictorul desenează floarea, apoi Steaua desenează două stele de mărimi diferite, folosind blocul ei.

---

## Bonus (dacă ai terminat Complet)
- [ ] **Al 3-lea personaj** (Pensula), cu un bloc cu **două intrări**, `poligon (laturi) (mărime)`:

<span style="color:#FF6680;font-weight:700">definește poligon (laturi) (mărime)</span>  
↳ <span style="color:#FFAB19;font-weight:700">repetă</span> `(laturi)`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">mergi</span> `(mărime)` pași  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">rotește-te ↻</span> <span style="color:#59C059;font-weight:700">((360) / (laturi))</span> grade  

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">ascunde</span>  

<span style="color:#E6A800;font-weight:700">când primesc</span> `final`  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#0FBD8C;font-weight:700">setează grosimea stiloului la</span> `3`  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `-160` <span style="color:#4C97FF;font-weight:700">y:</span> `-70`  
<span style="color:#0FBD8C;font-weight:700">stilou jos</span>  
<span style="color:#FF6680;font-weight:700">poligon</span> `(3)` `(40)`  
<span style="color:#0FBD8C;font-weight:700">stilou sus</span>  
<span style="color:#4C97FF;font-weight:700">mergi</span> `75` pași  
<span style="color:#0FBD8C;font-weight:700">stilou jos</span>  
<span style="color:#FF6680;font-weight:700">poligon</span> `(4)` `(40)`  
<span style="color:#0FBD8C;font-weight:700">stilou sus</span>  
<span style="color:#4C97FF;font-weight:700">mergi</span> `75` pași  
<span style="color:#0FBD8C;font-weight:700">stilou jos</span>  
<span style="color:#FF6680;font-weight:700">poligon</span> `(5)` `(40)`  
<span style="color:#0FBD8C;font-weight:700">stilou sus</span>  
<span style="color:#4C97FF;font-weight:700">mergi</span> `75` pași  
<span style="color:#0FBD8C;font-weight:700">stilou jos</span>  
<span style="color:#FF6680;font-weight:700">poligon</span> `(6)` `(40)`  
<span style="color:#0FBD8C;font-weight:700">stilou sus</span>  

- [ ] ★★★ **Provocare:** adaugi, într-un loc liber al scenei, un **cerc**: `poligon (36) (10)`. Cu 36 de laturi mici, forma arată ca un cerc

## Recapitulare rapidă
1. **Creează un bloc** (în Blocurile mele) îți face un bloc propriu; scriptul `definește` spune cum se desenează  
2. Blocul trebuie și **definit**, și **folosit** într-un script  
3. Un **parametru** (intrare) schimbă mărimea sau forma cu același bloc  
4. Blocul se vede doar la personajul în care ai făcut blocul  
5. Pătrat: `repetă 4` și `rotește 90`; stea: `repetă 5` și `rotește 144`; poligon: `rotește 360 / laturi`  
6. Nume: **`Prenume_Nume_L8`**  

## Schema pe scurt *(pe foaie)*

**Pe Pictor**  
`definește pătrat (mărime)` → `repetă 4` (`mergi (mărime)` + `rotește ↻ 90`)  
la steag → `șterge tot` → `mergi la x: y:` → `stilou jos` → `repetă 12` (`pătrat (60)` + `rotește ↻ 30` + `schimbă [culoarea] cu 10`) → `stilou sus` → `spune` → `difuzează steaua și așteaptă` → `difuzează final`

**Pe Stea**  
`definește stea (mărime)` → `repetă 5` (`mergi (mărime)` + `rotește ↻ 144`)  
la steag → `ascunde`  
când primesc steaua → `arată` → `mergi la [poziție aleatoare]` → `stilou jos` → `stea (40)` → `stilou sus` → `glisează` → `schimbă [culoarea]` → `stilou jos` → `stea (80)` → `stilou sus` → `ascunde`

**Pe Pensulă**  
`definește poligon (laturi) (mărime)` → `repetă (laturi)` (`mergi (mărime)` + `rotește ↻ (360 / laturi)`)  
la steag → `ascunde`  
când primesc final → `arată` → `setează grosimea` → `mergi la x: y:` → (`stilou jos` → `poligon` → `stilou sus` → `mergi 75`) × 4

**Quiz scurt (cu profesorul):**  
- La ce folosește un bloc propriu? De ce nu scriem de fiecare dată tot desenul?  
- Ce face un parametru, de exemplu `mărime`?  
- De ce o stea are unghiul `144`, iar un pătrat `90`?  
- De ce, la poligon, împărțim `360` la numărul de laturi?

## Temă (opțional)
- Dacă ai doar Minim: adaugi acasă Steaua, în același `Prenume_Nume_L8`.  
- Dacă ai Complet: adaugi acasă Pensula, în același `Prenume_Nume_L8`.  
- Dacă ai terminat și Bonusul: îți faci un bloc nou, de exemplu `casă (mărime)` (un pătrat cu un triunghi deasupra), și îl folosești de trei ori, cu mărimi diferite.
