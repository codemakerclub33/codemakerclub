# LECȚIA 10 — Insigna inteligentă
### Reluare: proiectele din tot Modulul 1 într-o singură insignă
**Modulul 1 · Primii pași cu micro:bit (blocuri)**  
**Code Maker Club · micro:bit Starter**

> Azi aduni proiectele din Modulul 1 într-o singură **insignă** pe placa ta, o prezinți colegilor și primești insigna **micro:bit Starter**.  
> Proiect: **„Insigna inteligentă”** · `Prenume_Nume_MB1_L10`

---

## Ce facem azi
La final ai o insignă micro:bit care îți spune numele, arată temperatura, alege răspunsuri la întâmplare, numără apăsările și desenează o floare. Nu începi de la zero: **reiei proiectele pe care le-ai făcut deja** („Inima mea”, „Comutatorul de emoții”, „Felinarul inteligent”, „Bila magică”, „Cursa până la 10”, „Floarea care se deschide”) și le pui în același program, cu mici modificări. Un proiect adevărat nu are un singur truc: folosește butoane, variabile, decizii și senzori deodată.

**Unelte azi:** tot ce am învățat în lecțiile 1–9 · placa micro:bit · cablu micro-USB

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare: ce proiecte am făcut în Modulul 1? |
| 10–25 | Planul insignei pe foaie: ce face fiecare gest |
| 25–65 | Construim insigna din patru piese (**Minim**) |
| 65–85 | Adăugăm contorul și floarea (**Complet**) |
| 85–105 | Prezentare: fiecare își arată insigna (1 minut) |
| 105–120 | **Verificarea Modulului 1**, autoevaluare, badge |

---

## Instrucțiuni noi azi

Azi nu avem blocuri noi. Reiei piese din lecțiile trecute:

| Piesa | Din proiectul | Ce modificăm |
|-------|---------------|--------------|
| Pornire: numele și inima | „Inima mea” (L1) | numele tău, apoi inima |
| **A**: față veselă | „Comutatorul de emoții” (L3) | doar butonul A |
| **B**: temperatura | „Felinarul inteligent” (L8) | fără lumină, doar `temperature` |
| **Scuturare**: Da / Nu | „Bila magică” (L7) | doar două răspunsuri |
| **A** numără apăsările | „Cursa până la 10” (L4, L5) | la 10 apare inima |
| **A+B**: floarea | „Floarea care se deschide” (L2) | doar cele 3 cadre de deschidere |

---

## Pas cu pas

### 1) Planul pe foaie
Completează un tabel: ce face insigna ta la fiecare gest?

| Gest | Ce face placa | Din lecția |
|------|----------------|------------|
| Pornire | derulează numele, apoi inima | 1 |
| **A** | față veselă (+ numără apăsările) | 3, 5 |
| **B** | arată temperatura | 8 |
| **A+B** | floarea se deschide | 2 |
| **Scuturare** | răspunde `Yes` sau `No` la întâmplare | 7 |

### 2) Piesa 1 — „Inima mea” (Minim)
Creezi proiectul `Prenume_Nume_MB1_L10`. Reiei programul din lecția 1.

```text
on start
    show string "Ana"
    show icon [Heart]
```

În loc de `Ana` scrii **prenumele tău**, fără diacritice.

**Ce vezi pe ecran:** numele trece, apoi rămâne inima.

**Încearcă tu:** schimbă inima cu altă poză din listă.

### 3) Piesa 2 — „Comutatorul de emoții” (Minim)
Din lecția 3 păstrezi doar butonul A.

```text
on button A pressed
    show icon [Happy]
```

**Ce vezi pe ecran:** apeși A și apare fața veselă.

**Încearcă tu:** schimbă fața veselă cu `Surprised`.

### 4) Piesa 3 — „Felinarul inteligent” (Minim)
Din lecția 8 păstrezi doar senzorul de temperatură.

```text
on button B pressed
    show number temperature
```

**Ce vezi pe ecran:** apeși B și derulează temperatura, de exemplu `23`.

**Încearcă tu:** ține placa în mână un minut și apasă din nou B.

### 5) Piesa 4 — „Bila magică” (Minim)
Din lecția 7 păstrezi doar două răspunsuri. Creezi variabila `raspuns`.

```text
on shake
    set raspuns to pick random 0 to 1
    if raspuns = 0 then
        show icon [Yes]
    else
        show icon [No]
```

**Ce vezi pe ecran:** scuturi placa și apare o bifă sau un X, la întâmplare.

**Gata când:**  
- [ ] Cele patru piese sunt puse în același program  
- [ ] Simulatorul face ce scrie în „Minim”  

### 6) Piesa 5 — „Cursa până la 10” (Complet)
Creezi variabila `apasari`. Din lecțiile 4 și 5 iei contorul și decizia.

```text
on start
    set apasari to 0
    show string "Ana"
    show icon [Heart]

on button A pressed
    change apasari by 1
    show icon [Happy]
    if apasari = 10 then
        show icon [Heart]
        set apasari to 0
```

La a 10-a apăsare de A, fața veselă e înlocuită imediat de **inimă**, apoi contorul pornește iar de la `0`.

**Încearcă tu:** schimbă 10 în 3 ca să testezi repede.

### 7) Piesa 6 — „Floarea care se deschide” (Complet)
Din lecția 2 iei cele trei cadre de deschidere și le pui la **A+B**.

```text
on button A+B pressed
    show leds   (cadrul 1 - mugurul)
    pause (ms) 500
    show leds   (cadrul 2 - pe jumătate deschisă)
    pause (ms) 500
    show leds   (cadrul 3 - floarea mare)
    pause (ms) 500
    clear screen
```

Desenezi cadrele la fel ca în lecția 2. Dacă apeși două butoane în același timp cu scuturarea, blocurile pot rula **unul peste altul**. Testează pe rând.

**Gata când:**  
- [ ] Blocurile pentru „Complet” sunt adăugate  
- [ ] Simulatorul face tot ce scrie în „Complet”  

### 8) Testul și prezentarea (1 minut)
Dă insigna unui coleg și lasă-l să-i testeze toate gesturile. El notează:
- [ ] Numele se vede clar  
- [ ] A, B, A+B și scuturarea merg  
- [ ] Contorul arată inima la a 10-a apăsare  

Apoi prezinți, în ordinea asta:
1. **Cum se numește proiectul** și ce face.  
2. **Arată** fiecare gest pe placă.  
3. Spune **un lucru care ți s-a părut greu** și cum l-ai rezolvat.  
4. Spune **ce ai vrea să adaugi** (o idee).

---

## De făcut azi — „Insigna inteligentă”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Nume + inimă la pornire · A = `Happy` · B = temperatura · scuturare = `Yes` / `No` |
| **Complet** | Minim + contor `apasari` cu inimă la 10 + A+B = floarea |

### Pasul 1 — Minim
- [ ] Prenumele tău derulează la pornire, apoi apare inima  
- [ ] A, B și scuturarea funcționează  
- [ ] Programul e pe placa adevărată  

**→ Minim când:** un coleg testează cele trei gesturi.

### Pasul 2 — Complet
- [ ] Contorul `apasari` arată inima la a 10-a apăsare  
- [ ] A+B desenează floarea  
- [ ] Prezentarea de 1 minut a fost făcută  
- [ ] Verificarea Modulului 1 completată  
- [ ] Numele fișierului e `MB1_L10`  

**Badge:** completezi **Complet + Verificarea** și primești insigna **micro:bit Starter**.

---

## Bonus ★★★ — Provocare: Insigna cu povestea mea
*Doar dacă ai terminat Complet.*

Mai ai proiecte din modul care nu au intrat în insignă.

- [ ] Pune „Inima care bate” (L6) în locul inimii fixe de la 10 apăsări  
- [ ] Adaugă „Felinarul” (L8): la scuturare, arată și lumina din cameră  
- [ ] Fă un **al doilea mod** cu `on logo pressed` (V2) sau cu un cod ca la „Seiful secret” (L9)  
- [ ] Desenează pe foaie un **ambalaj** pentru insigna ta  

---

## Greșeli frecvente
1. **„Insigna nu mai pornește”** — ai prea multe blocuri pe masă, neconectate. Verifică ce e gri.  
2. **„A+B nu merge”** — apasă ambele butoane simultan.  
3. **„Numele se vede ciudat”** — diacritice în text.  
4. **„Inima nu apare la 10”** — `change apasari by 1` e după `if`, nu înainte.  
5. **„Pe ecran rămâne o poză”** — după un gest poza rămâne până la următorul. E normal, nu e o greșeală.  
6. **„Programul nu e pe placă”** — ai uitat **Download** după ultima modificare.  

---

## Recapitulare pe scurt
1. Ai învățat **LED-uri, butoane, variabile, decizii, bucle** și **senzori**.  
2. Un proiect bun **combină** mai multe lucruri.  
3. Prezentarea spune: ce face, cum, ce a fost greu, ce urmează.  
4. Testează întotdeauna **pe placa adevărată**.  
5. Salvează proiectul cu un nume clar.  
6. **Schema pe scurt (pe foaie):** Pornire (nume + inimă) · A (Happy + contor) · B (temperatură) · A+B (floare) · scuturare (Da / Nu)

---

## Quiz scurt
- Care gest din insignă folosește un senzor de mișcare?  
- Ce variabile ai folosit?  
- Unde ai folosit `if`?  
- Ce ai vrea să adaugi în versiunea 2?

---

## Temă
Fă o poză programului tău (screenshot) și o poză a insignei pe placă. Adu-le mâine pentru **portofoliul** tău.

---

## Verificarea Modulului 1
Răspunde pe foaie, fără să te uiți în lecții. Răspunsurile sunt la final.

1. Câte LED-uri are ecranul micro:bit și cum sunt așezate?  
2. Care e diferența dintre `on start` și `forever`?  
3. Ce înseamnă `pause (ms) 500`?  
4. Cum faci placa să răspundă când apeși **A și B deodată**?  
5. Ce este o variabilă? Dă un exemplu.  
6. Care e diferența dintre `set score to 5` și `change score by 5`?  
7. Ce face `if … else`?  
8. De câte ori repetă `for index from 0 to 4`?  
9. Ce măsoară accelerometrul? Dă un gest pe care îl poate recunoaște.  
10. Cum ai folosi `light level` ca să faci un felinar?

**Autoevaluare** (bifează sincer):

Bifează ce poți face **singur**:

- [ ] trimit un program pe placă
- [ ] desenez și animez pe LED-uri
- [ ] folosesc butoanele A, B, A+B
- [ ] creez și schimb o variabilă
- [ ] folosesc `if` și `else`
- [ ] folosesc bucle
- [ ] citesc accelerometrul, lumina, temperatura

**Răspunsuri:**
1. 25, în 5 rânduri și 5 coloane. 2. `on start` rulează o dată, `forever` se repetă. 3. Așteaptă jumătate de secundă. 4. `on button A+B pressed`. 5. O cutie cu nume și valoare, de exemplu `score`. 6. `set` pune valoarea; `change` o adună la valoarea veche. 7. Face un lucru dacă e adevărat, altul dacă nu. 8. De 5 ori. 9. Mișcarea; de exemplu `shake`. 10. Dacă `light level` e sub un prag, aprinzi LED-urile.

---

## Ce urmează — Modulul 2
Placa **vorbește cu alte plăci** prin **radio**, ai mai multe plăci în joc și legi **LED-uri externe** la pini.
