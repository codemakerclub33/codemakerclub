# Lecția 4 — Contorul magic
### Variabile: cutia cu număr
**Modulul 1 · Primii pași cu micro:bit (blocuri)**  
**Code Maker Club · micro:bit Starter**

> Azi înveți cum **ține minte** placa un număr și faci **„Contorul magic”**:  
> A adaugă 1, B scade 1, A+B îl face din nou 0, iar la final ai o tabelă de scor cu două echipe.  
> Fișier: `Prenume_Nume_MB1_L04` (ex. `Ana_Pop_MB1_L04`)

---

## Obiectiv
La finalul orei știi să creezi o **variabilă**, să îi schimbi valoarea și să o arăți pe LED-uri.  
**Minim:** un contor cu `score`: **A** adaugă 1, **B** scade 1, **A+B** îl pune pe 0, cu **8 blocuri diferite**.  
**Ținta orei (Complet):** partea a doua: **tabelă de scor** cu două echipe (`rosu` și `verde`), cu cel puțin **6 blocuri diferite**.

## De ce contează
Un joc trebuie să țină minte scorul. Un termometru ține minte temperatura. Un contor ține minte câte persoane au intrat.  
Programul păstrează aceste numere într-o **variabilă**: o **cutie cu nume**. Fără variabile, placa ar uita totul imediat.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L3: evenimente, `on button pressed` |
| 10–25 | Jocul cu cutia și hârtia: ce este o variabilă? |
| 25–45 | Creăm variabila `score` în MakeCode |
| 45–75 | Contorul magic: A, B, A+B (**Minim**) |
| 75–105 | Tabela de scor cu două echipe (**Complet**) |
| 105–120 | Recap, bonus, arăți ce ai gata |

**Unelte azi:** placa micro:bit · cablu micro-USB · browser Chrome sau Edge · [makecode.microbit.org](https://makecode.microbit.org)

**Capitole azi:**  
<span style="color:#DC143C;font-weight:700">Variables</span> · <span style="color:#9C00C8;font-weight:700">Math</span> · <span style="color:#D400D4;font-weight:700">Input</span> · <span style="color:#1E90FF;font-weight:700">Basic</span>  
*(Logic, Loops — mai târziu.)*

**Blocurile de azi:**

| Bloc | Ce face |
|------|---------|
| <span style="color:#DC143C;font-weight:700">Make a Variable…</span> | creează o variabilă nouă, o cutie cu nume |
| <span style="color:#DC143C;font-weight:700">set score to 0</span> | pune direct o valoare în cutie |
| <span style="color:#DC143C;font-weight:700">change score by 1</span> | adaugă la valoare (sau scade, cu minus) |
| <span style="color:#DC143C;font-weight:700">score</span> | blocul rotund: valoarea din cutie, o pui în alte blocuri |
| <span style="color:#9C00C8;font-weight:700">0 + 0</span> | adună două numere (sau două variabile) |

*Din lecțiile trecute le știi deja:* <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#D400D4;font-weight:700">on button pressed</span>, <span style="color:#1E90FF;font-weight:700">show number</span>, <span style="color:#1E90FF;font-weight:700">show string</span>, <span style="color:#1E90FF;font-weight:700">show icon</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, <span style="color:#1E90FF;font-weight:700">clear screen</span>.

---

## Pas cu pas

### 1) Cutia cu etichetă (fără calculator)
Luăm o cutie și o etichetă: **score**. În cutie punem un bilet cu numărul **0**.

- Cineva spune „A!”: ștergi numărul și scrii cu 1 mai mult.  
- Cineva spune „B!”: scrii cu 1 mai puțin.  
- Cineva spune „A+B!”: iei biletul și scrii din nou **0**.  

Cutia **ține minte** numărul. O **variabilă** e o cutie cu **nume** și **valoare**.

**Încearcă tu — (5–8 min)**  
- [ ] Spui numele cutiei și valoarea ei acum  
- [ ] Joci jocul cu un coleg, 5 mutări  

### 2) Creăm variabila
1. Proiect nou: `Prenume_Nume_MB1_L04`  
2. Deschizi <span style="color:#DC143C;font-weight:700">Variables</span> → **Make a Variable…**  
3. Numele: `score` (fără spații, fără diacritice) → **OK**  
4. Apar blocurile <span style="color:#DC143C;font-weight:700">set</span>, <span style="color:#DC143C;font-weight:700">change</span> și blocul rotund `score`  

> Nume bune: `scor`, `score`, `puncte`. Nume rele: `Scor meu` (are spațiu), `scorț` (diacritice).

**Încearcă tu — (5 min)**  
- [ ] Variabila `score` există și o vezi în lista de blocuri  
- [ ] Ai scris numele fără spațiu și fără diacritice  

### 3) Pornirea contorului
La pornire punem cutia pe **0** și arătăm numărul.

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `score` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `score`  

Blocul rotund `score` se trage din <span style="color:#DC143C;font-weight:700">Variables</span> și se pune **în locul numărului** din <span style="color:#1E90FF;font-weight:700">show number</span>.

**Încearcă tu — (5 min)**  
- [ ] La pornire apare `0` în simulator  

### 4) A, B, A+B: Minim
1. <span style="color:#D400D4;font-weight:700">on button A pressed</span>: <span style="color:#DC143C;font-weight:700">change</span> `score` by `1`, apoi <span style="color:#1E90FF;font-weight:700">show number</span> `score`  
2. <span style="color:#D400D4;font-weight:700">on button B pressed</span>: <span style="color:#DC143C;font-weight:700">change</span> `score` by `-1`, apoi <span style="color:#1E90FF;font-weight:700">show number</span> `score`  
3. <span style="color:#D400D4;font-weight:700">on button A+B pressed</span>: <span style="color:#DC143C;font-weight:700">set</span> `score` to `0`, <span style="color:#1E90FF;font-weight:700">show icon</span> `Yes`, <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`, <span style="color:#1E90FF;font-weight:700">clear screen</span>, <span style="color:#1E90FF;font-weight:700">show number</span> `score`  

Programul tău (Minim):

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `score` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `score`  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `score` by `1`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `score`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `score` by `-1`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `score`  

<span style="color:#D400D4;font-weight:700">on button A+B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `score` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Yes`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `score`  

**Ce vezi:** apeși A de 3 ori, apare `3`. Apeși B o dată, apare `2`. Apeși A+B, apare bifa, apoi `0`.

**Încearcă tu — (15–20 min)**  
- [ ] A adaugă, B scade, A+B pune pe `0`  
- [ ] Contorul trece sub `0` (apar numere negative) și te-ai uitat ce vezi  
- [ ] Programul e pe placa adevărată  

### 5) Complet: tabela de scor cu două echipe
Facem două cutii: `rosu` și `verde`. Creezi încă o variabilă cu **Make a Variable…**, de două ori.

- **A** adaugă 1 la `rosu` și arată `R` și scorul  
- **B** adaugă 1 la `verde` și arată `V` și scorul  
- **A+B** arată `T` (total) și suma celor două scoruri, cu <span style="color:#9C00C8;font-weight:700">0 + 0</span>  

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `rosu` to `0`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `verde` to `0`  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `rosu` by `1`  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `R`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `rosu`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `verde` by `1`  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `V`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `verde`  

<span style="color:#D400D4;font-weight:700">on button A+B pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `T`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#9C00C8;font-weight:700">rosu + verde</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

> Variabilele `rosu` și `verde` sunt **cutii diferite**: de aceea trebuie să fie variabile separate.

**Încearcă tu — (15–20 min)**  
- [ ] A mărește scorul roșu, B pe cel verde  
- [ ] A+B arată totalul (suma celor două scoruri)  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  

---

## Greșeli frecvente
1. **Scorul nu se schimbă** — ai folosit <span style="color:#DC143C;font-weight:700">set</span> în loc de <span style="color:#DC143C;font-weight:700">change</span>. <span style="color:#DC143C;font-weight:700">set</span> pune valoarea, <span style="color:#DC143C;font-weight:700">change</span> o adună.  
2. **În <span style="color:#1E90FF;font-weight:700">show number</span> apare `0`, nu scorul** — ai scris `0`, nu ai tras blocul rotund `score`.  
3. **Numele variabilei nu merge** — are spațiu sau diacritice.  
4. **Scorul trece sub 0** — normal, deocamdată nu avem decizii. Le învățăm în lecția următoare.  
5. **Nu se întâmplă nimic** — blocul de buton e în <span style="color:#1E90FF;font-weight:700">on start</span>.  
6. **La A+B nu se vede scorul** — lipsește <span style="color:#1E90FF;font-weight:700">show number</span> după <span style="color:#DC143C;font-weight:700">set</span>.  

---

## De făcut azi — „Contorul magic”
Salvat: `Prenume_Nume_MB1_L04`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1** — contor cu A, B și A+B, cu **8 blocuri diferite**, pe placă |
| **Complet (ținta orei)** | Minim + **Pasul 2** — tabelă de scor cu două echipe, cu cel puțin **6 blocuri diferite** |

Dacă rămâi în urmă: **oprește-te la Minim** și salvează. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Contorul magic *(Minim)*
<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `score` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `score`  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `score` by `1`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `score`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `score` by `-1`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `score`  

<span style="color:#D400D4;font-weight:700">on button A+B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `score` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Yes`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `score`

- [ ] Proiect nou cu numele `Prenume_Nume_MB1_L04`  
- [ ] Variabila `score` creată, fără spațiu, fără diacritice  
- [ ] La pornire apare `0`  
- [ ] Ai **8 blocuri diferite**: <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#D400D4;font-weight:700">on button pressed</span>, <span style="color:#DC143C;font-weight:700">set</span>, <span style="color:#DC143C;font-weight:700">change</span>, <span style="color:#1E90FF;font-weight:700">show number</span>, <span style="color:#1E90FF;font-weight:700">show icon</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, <span style="color:#1E90FF;font-weight:700">clear screen</span>  
- [ ] Programul e trimis pe placă  

**→ Ai Minim când:** un coleg apasă A de 3 ori, apoi B o dată, și placa arată `2`, apoi A+B o face `0`.

### Pasul 2 — Tabela de scor *(Complet)*
<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `rosu` to `0`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `verde` to `0`  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `rosu` by `1`  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `R`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `rosu`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `verde` by `1`  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `V`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `verde`  

<span style="color:#D400D4;font-weight:700">on button A+B pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `T`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#9C00C8;font-weight:700">rosu + verde</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>

- [ ] Două variabile: `rosu` și `verde`  
- [ ] A mărește `rosu` și arată `R` cu scorul  
- [ ] B mărește `verde` și arată `V` cu scorul  
- [ ] A+B arată `T` și suma, cu <span style="color:#9C00C8;font-weight:700">0 + 0</span>  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  
- [ ] Salvat din nou: `Prenume_Nume_MB1_L04`  

**Gata Complet când:** A și B măresc scorul fiecărei echipe, iar A+B arată totalul.

---

## Bonus ★★★ — Provocare: Casa de marcat
*Doar dacă ai terminat Complet.*

- [ ] Schimbă ordinea: B adaugă `2`, A+B adaugă `10`  
- [ ] **Provocarea:** transformi placa într-o **casă de marcat**. **A** = un măr (`+1`), **B** = un suc (`+5`), **A+B** = o pizza (`+10`), cu <span style="color:#DC143C;font-weight:700">change</span>. Fiecare produs arată o **poză diferită** (<span style="color:#1E90FF;font-weight:700">show icon</span>) înainte de total. Un coleg „cumpără” 3 lucruri și spune cât are de plătit; placa trebuie să arate același număr.  

## Recapitulare rapidă
1. **Variabilă** = cutie cu **nume** și **valoare**  
2. <span style="color:#DC143C;font-weight:700">set</span> pune direct valoarea; <span style="color:#DC143C;font-weight:700">change</span> adaugă (sau scade, cu minus)  
3. Blocul rotund cu numele variabilei înseamnă „valoarea din cutie”  
4. <span style="color:#9C00C8;font-weight:700">0 + 0</span> adună două numere sau două variabile  
5. Nume bune: fără spații, fără diacritice  
6. Minim = Pasul 1 · Complet = Pasul 1 + 2  

## Schema pe scurt *(pe foaie)*
Make a Variable → <span style="color:#1E90FF;font-weight:700">on start</span> <span style="color:#DC143C;font-weight:700">set</span> `score` 0 → A: <span style="color:#DC143C;font-weight:700">change</span> +1 → B: <span style="color:#DC143C;font-weight:700">change</span> −1 → A+B: <span style="color:#DC143C;font-weight:700">set</span> 0 → <span style="color:#1E90FF;font-weight:700">show number</span> `score`

**Quiz scurt (cu profesorul):**  
- Ce are o variabilă: un nume și ce altceva?  
- Care e diferența dintre <span style="color:#DC143C;font-weight:700">set</span> și <span style="color:#DC143C;font-weight:700">change</span>?  
- Ce face blocul rotund `score` din <span style="color:#1E90FF;font-weight:700">show number</span>?  
- De ce `rosu` și `verde` trebuie să fie variabile separate?  
- De ce nu folosim spații în numele unei variabile?  

## Temă (opțional)
- Dacă ai doar Minim: acasă, adaugi tabela de scor (Pasul 2), în același `Prenume_Nume_MB1_L04`.  
- Dacă ai Complet: te gândești la un joc de societate și scrii pe foaie ce numere trebuie ținute minte și ce nume dai fiecărei variabile.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi prețurile.  

## Ce urmează
În **Lecția 5** placa **ia decizii** cu `if` și `else`: o cursă până la 10.
