# LECȚIA 6 — Sunetele orașului
### Audio și video
**Modulul 2 · HTML II: Pagini mai bogate · 2 ore**  
**Code Maker Club · HTML Builder**

> Până acum paginile tale se citeau și se priveau. Azi **vorbesc și se mișcă**: pui în ele sunete și filme scurte, cu butoane de pornire și oprire, ca să faci o hartă sonoră a unui oraș.  
> Proiect: **„Sunetele orașului”** · folder: `Prenume_Nume_W2_L6` (ex. `Ana_Pop_W2_L6`)

---

## Ce facem azi
La final ai o pagină cu **sunetele unui oraș**: tramvaiul, clopotele și ploaia, fiecare cu poză și buton de pornire, plus un film scurt cu o stradă. Știi să pui un sunet cu `<audio>` și un film cu `<video>`, să le dai butoane cu `controls`, să alegi formate potrivite, să ții fișierele într-un folder `media` și să scrii un text care ajută pe cine nu poate auzi sau vedea. Un sunet poate face o pagină mai vie, iar un film scurt poate explica ceva mai bine decât zece paragrafe. Dar fișierele mari încetinesc pagina, iar sunetul pornit singur deranjează, de aceea alegi cu grijă.

> **Despre fișierele pe care le folosim:** sunetele și filmele pentru exerciții le primești de la un adult, într-un **pachet media**, sau le faci singur (de exemplu înregistrezi cu telefonul **sunetul ploii sau al unui instrument**). Nu punem filme sau sunete cu **voci sau persoane** fără acordul lor și al părinților. Nu folosim melodii luate din internet: au drepturi de autor. Fișierele se salvează cu **litere mici, fără spații și fără diacritice**: `tramvai.mp3`, `strada.mp4`.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul · pregătim folderul `media` · sunet pentru articol |
| 15–35 | `<audio>` și `controls` (**Exemplele 1–3**) |
| 35–60 | `<video>`, `width`, `poster` (**Exemplele 4–6**) |
| 60–80 | Formate, foldere și text pentru toți (**Exemplul 7**) |
| 80–115 | Mini-proiect: sunetele orașului (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `<audio src="..." controls>` | Pune un sunet, cu butoane | `<audio src="media/tramvai.mp3" controls></audio>` |
| `<video src="..." controls>` | Pune un film, cu butoane | `<video src="media/strada.mp4" controls width="400"></video>` |
| `poster` | Imaginea care se vede înainte de pornire | `poster="imagini/strada.jpg"` |
| `<source>` | Un fișier dintre mai multe formate | `<source src="media/ploaie.ogg" type="audio/ogg">` |
| `loop`, `muted`, `preload` | Repetă, fără sunet, încarcă mai târziu | `<audio controls loop preload="none">` |

---

## 1. Recapitulare rapidă

- Formularele se fac cu `<form>`; validarea cere răspunsuri corecte.  
- Fișierele se pun în foldere; calea se scrie în `src`.  
- `../` înseamnă „un folder mai sus”.  
- Numele fișierelor: litere mici, fără spații, fără diacritice.

**Încearcă tu (10 min)**  
- [ ] Creează folderul `Prenume_Nume_W2_L6`, cu fișierul `index.html` (schelet complet) și folderul `media`  
- [ ] Pune în `media` fișierele din pachetul media (sau ale tale)  
- [ ] Copiază în folder pagina `tema.html` din lecția 2 (cu cronologia) și folderul `imagini`  
- [ ] Caută **împreună cu un adult**, în articol sau pe Wikimedia Commons, un sunet sau un film scurt legat de tema ta, cu licență liberă  
- [ ] Salvează-l în `media`, cu un nume simplu, și notează în `tema.txt` de unde e  

> De aici înainte, exemplele arată doar ce scrii **în interiorul `<body>`**, dacă nu spunem altfel.

---

## 2. Sunetul: `<audio>`

### Exemplul 1 — Primul sunet

```html
<audio src="media/tramvai.mp3" controls></audio>
```

- `src` arată unde este fișierul (la fel ca la imagini);  
- `controls` face să apară **butoanele**: pornire, oprire, volum;  
- `<audio>` are tag de închidere.

Fără `controls`, nu apare nimic, deoarece nu există niciun buton.

### Exemplul 2 — Mai multe formate și un text de rezervă

```html
<audio controls>
  <source src="media/tramvai.mp3" type="audio/mpeg">
  <source src="media/tramvai.ogg" type="audio/ogg">
  Browserul tău nu poate reda sunetul.
</audio>
```

- Fiecare `<source>` este un fișier; browserul alege **primul pe care îl poate reda**;  
- `type` spune ce fel de fișier este (`audio/mpeg` pentru mp3, `audio/ogg` pentru ogg);  
- textul dintre `<audio>` și `</audio>` apare **doar** dacă browserul nu știe `<audio>`.

Acum merge și un singur fișier mp3 în aproape orice browser. Cu mai multe surse, ești sigur.

### Exemplul 3 — Alte atribute

```html
<audio src="media/ploaie.mp3" controls loop preload="none"></audio>
```

| Atribut | Ce face |
|---------|---------|
| `loop` | sunetul se repetă la nesfârșit |
| `preload="none"` | browserul **nu încarcă** fișierul până nu apeși „pornire” (pagina se deschide mai repede) |
| `autoplay` | pornește singur, dar **browserele îl blochează** de obicei, iar sunetul care pornește singur deranjează |

> Regula noastră: **nu folosim `autoplay` cu sunet**. Lasă vizitatorul să apese.

**Încearcă tu (9 min)**  
- [ ] Pune un sunet în pagină, cu `controls`, și pornește-l  
- [ ] Încearcă varianta fără `controls` și vezi ce se întâmplă  
- [ ] Explică de ce nu folosim `autoplay` cu sunet  
- [ ] Adaugă în `tema.html`, la sfârșit, sunetul găsit, cu `controls` și un text de rezervă  

---

## 3. Filmul: `<video>`

### Exemplul 4 — Primul film

```html
<video src="media/strada.mp4" controls width="400"></video>
```

- la fel ca `audio`: `src` și `controls`;  
- `width="400"` stabilește lățimea (în pixeli); înălțimea se potrivește singură.

### Exemplul 5 — Imaginea de început: `poster`

```html
<video src="media/strada.mp4" controls width="400" poster="imagini/strada.jpg"></video>
```

`poster` este imaginea care se vede **înainte** să pornească filmul. Poate fi o poză din film sau un desen. Fără `poster`, de obicei se vede primul cadru sau un ecran negru.

### Exemplul 6 — Film fără sunet care pornește singur

Dacă filmul nu are sunet și vrei să se repete ca un desen animat în fundal:

```html
<video src="media/ploaie.mp4" autoplay muted loop width="400"></video>
```

- `muted` înseamnă fără sunet; browserele permit `autoplay` doar la filme **fără sunet**;  
- `loop` repetă filmul.

Folosește asta **rar**: o mișcare continuă poate obosi sau deranja pe unii vizitatori. Când pui `autoplay`, pune și `controls`, ca vizitatorul să poată opri filmul.

**Încearcă tu (9 min)**  
- [ ] Pune în pagină un film cu `controls` și `width`  
- [ ] Adaugă un `poster` cu o imagine din folderul `imagini`  
- [ ] Încearcă `width="200"` și `width="600"` ca să vezi diferența  
- [ ] Dacă ai găsit un film, pune-l în `tema.html`, cu `controls`, `width` și o imagine `poster` din articol  

---

## 4. Formate, foldere și text pentru toți

### Exemplul 7 — Formate, foldere și descriere

| Fel | Format | Observație |
|-----|--------|------------|
| Sunet | `.mp3` | merge peste tot, mic |
| Sunet | `.ogg` | alternativă bună |
| Sunet | `.wav` | calitate mare, dar **foarte mare** ca dimensiune |
| Film | `.mp4` | merge aproape peste tot |
| Film | `.webm` | alternativă modernă |

La filme poți pune și mai multe `<source>`:

```html
<video controls width="400">
  <source src="media/strada.mp4" type="video/mp4">
  <source src="media/strada.webm" type="video/webm">
  Browserul tău nu poate reda filmul.
</video>
```

Fișierele stau în foldere, iar calea se scrie privind din folderul paginii:

```text
Prenume_Nume_W2_L6/
  index.html
  imagini/
    strada.jpg
  media/
    tramvai.mp3
    strada.mp4
```

Din `index.html`, calea este `media/tramvai.mp3`. Dacă pagina ar fi într-un subfolder, ar trebui `../media/tramvai.mp3`.

**Atenție la dimensiune:** un film lung poate avea sute de megaocteți. Pentru pagini, folosește filme **scurte** (sub un minut) și sunete scurte. Dacă un sunet are zeci de megaocteți, alege altul.

**Text pentru cine nu aude sau nu vede.** Nu toți vizitatorii pot auzi sunetul sau vedea filmul. O descriere scurtă sub fiecare ajută:

```html
<audio src="media/clopote.mp3" controls></audio>
<p><em>Descriere: clopotele unei biserici bat de cinci ori.</em></p>
```

La filmele cu voce, un **text cu ce se spune** (o transcriere) ajută foarte mult. Subtitrările le lăsăm pentru bonus.

**Încearcă tu (8 min)**  
- [ ] Verifică în folder că numele fișierelor au litere mici, fără spații  
- [ ] Adaugă o descriere scurtă sub sunetul tău  
- [ ] Scrie sub sunet și sursa: „Sunet: …, de pe Wikimedia Commons”  
- [ ] Verifică mărimea fișierelor și folosește unele scurte  

---

## 5. Mini-proiect

### Exemplul 8 — „Sunetele orașului”

Acesta este proiectul **complet**, cu tot scheletul paginii. Salvează-l în `index.html` și scrie-l singur, bucată cu bucată.

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sunetele orașului</title>
  <style>
    table, th, td {
      border: 1px solid black;
      border-collapse: collapse;
      padding: 6px;
    }
    th {
      background-color: lightblue;
    }
  </style>
</head>
<body>
  <h1>Sunetele orașului</h1>

  <table>
    <caption>Ce se aude pe străzi?</caption>
    <thead>
      <tr>
        <th scope="col">Sunet</th>
        <th scope="col">Poză</th>
        <th scope="col">Ascultă</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Tramvaiul</td>
        <td><img src="imagini/tramvai.jpg" alt="Un tramvai galben pe linie" width="100"></td>
        <td><audio src="media/tramvai.mp3" controls preload="none"></audio></td>
      </tr>
      <tr>
        <td>Clopotele</td>
        <td><img src="imagini/clopote.jpg" alt="Turnul unei biserici cu clopote" width="100"></td>
        <td><audio src="media/clopote.mp3" controls preload="none"></audio></td>
      </tr>
      <tr>
        <td>Ploaia</td>
        <td><img src="imagini/ploaie.jpg" alt="Stropi de ploaie pe o fereastră" width="100"></td>
        <td><audio src="media/ploaie.mp3" controls preload="none"></audio></td>
      </tr>
    </tbody>
  </table>

  <h2>O stradă dimineața</h2>
  <video src="media/strada.mp4" controls width="400" poster="imagini/strada.jpg"></video>
  <p><em>Descriere: un film scurt cu o stradă liniștită, dimineața, fără oameni în cadru.</em></p>
</body>
</html>
```

Înlocuiește sunetele și fișierele cu ale tale. Dacă nu ai poze, folosește desene.

Greșeli de verificat dacă nu merge ceva:
- numele din `src` nu seamănă cu numele din folder;  
- fișierul este în alt folder;  
- lipsește `controls`;  
- extensia fișierului nu este cea scrisă (de exemplu `.mp3.mp3`);  
- ai pus fișierul pe Desktop, nu în folderul proiectului.

Dacă nu se aude nimic, verifică **volumul** calculatorului și al butonului din pagină. Dacă tot nu merge, deschide DevTools (**F12**; pe Mac Cmd + Option + I), fila **Console**: un mesaj „404” arată că fișierul nu a fost găsit.

---

## De făcut azi — „Sunetele orașului”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | O pagină cu un `<audio>` și un `<video>`, ambele cu `controls` |
| **Complet** | Minim + tabel cu cel puțin 3 sunete cu poză, `poster` la film, câte o descriere pentru sunet și film, și fișiere scurte, alese cu grijă |

### Pasul 1 — Minim
Fă o pagină despre **sunetele unui oraș ales de tine** (sau ale orașului tău).

- [ ] Folderul `Prenume_Nume_W2_L6` conține `index.html` și folderul `media`  
- [ ] Ai un `<audio>` cu `controls` și un `<video>` cu `controls` și `width`  
- [ ] Sunetul și filmul pornesc și se opresc din butoane  

### Pasul 2 — Complet
Îmbunătățești pagina:

- [ ] Tabelul are antet (`th`) și minimum 3 sunete, fiecare cu poză cu `alt` și `<audio controls>`  
- [ ] Filmul are `poster` și o descriere scrisă sub el  
- [ ] Pagina merge fără mesaje „404” în Console  
- [ ] Niciun sunet sau film nu este luat din internet  
- [ ] Codul este indentat și are comentarii  

---

## Bonus ★★★ — Provocare: Ghidul sonor
*Doar dacă ai terminat Complet.*

- [ ] Înregistrează cu telefonul un sunet fără voci (ploaia, un instrument, vântul) și pune-l în pagină  
- [ ] Caută „HTML track subtitles” și, împreună cu un adult, adaugă subtitrări unui film  
- [ ] Fă în `tema.html` un tabel „Media” cu două sunete sau filme, cu coloane pentru nume, descriere și sursă  
- [ ] Deschide DevTools, fila **Network**, reîncarcă pagina și vezi cât de mari sunt fișierele audio și video  

---

## Greșeli frecvente
1. **Nume cu spații sau diacritice** (`Tramvai Mare.mp3`) — folosește `tramvai.mp3`.  
2. **Lipsește `controls`** — nu apar butoanele.  
3. **Fișierul nu este în folderul scris în `src`**.  
4. **Ai folosit `autoplay` cu sunet** — browserul îl blochează, iar sunetul deranjează.  
5. **Fișiere foarte mari** — pagina se încarcă greu.  
6. **Ai luat melodii sau filme din internet** — au drepturi de autor.  
7. **Ai uitat textul de descriere** pentru cine nu aude sau nu vede.  
8. **Ai lăsat tagul fără `>` sau fără ghilimele**.  

---

## Recapitulare pe scurt
1. `<audio src="..." controls>` pune un sunet cu butoane.  
2. `<video src="..." controls width="...">` pune un film.  
3. `poster` este imaginea de început.  
4. `loop`, `muted`, `preload` schimbă comportamentul.  
5. Nu folosim sunet care pornește singur.  
6. Fișierele rămân în folderul `media`, cu nume simple.  
7. Scriem o descriere pentru cine nu aude sau nu vede.

## Quiz scurt
- Ce face `controls`?  
- Care este diferența dintre `<source>` și `src`?  
- Ce este `poster`?  
- De ce nu punem `autoplay` cu sunet?  
- Cum verifici dacă fișierul nu este găsit?

## Temă
1. Fă o pagină „Sunetele sportului preferat” cu un tabel cu 3 sunete (de exemplu mingea, fluierul, pașii pe teren), câte un `<audio>` pentru fiecare, făcute de tine sau din pachetul media, și o descriere. Salvează în `Prenume_Nume_W2_L6`.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Sunet cu legendă: `figure` și `figcaption`.**

```html
<figure>
  <audio src="media/ploaie.mp3" controls></audio>
  <figcaption>Ploaia de seară pe fereastră</figcaption>
</figure>
```

`<figure>` învelește sunetul, iar `<figcaption>` este legenda lui.

**Acasă 2 — Film care încape pe orice ecran.**

```html
<video src="media/strada.mp4" controls style="max-width: 100%;"></video>
```

Cu `max-width: 100%`, filmul nu iese din pagină pe un ecran mic. Încearcă să micșorezi fereastra browserului.

4. **Încă patru exerciții (B–E):**

**B — Ce face atributul?** Spune ce face fiecare: (1) `controls`; (2) `loop`; (3) `preload="none"`; (4) `poster`; (5) `muted`.

**C — Alege formatul.** Pentru fiecare, alege un format potrivit: (1) un sunet scurt pentru o pagină; (2) un film scurt; (3) un sunet foarte mare, de studio.

**D — Găsește greșelile.** Găsește **3 greșeli** și repară greșelile:

```text
<audio src="media/Tramvai Mare.mp3" controls></audio>
<video src="media/strada.mp4" width="400" controls poster="imagini/strada.jpg"
<audio src="media/ploaie.mp3" controls autoplay></audio>
```

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: de ce nu punem sunet care pornește singur? De ce scriem o descriere sub sunet și film?

## Ce urmează — Lecția 7
**Excursia imaginară**: punem în pagină o altă pagină, o hartă sau un film dintr-un alt site, cu `iframe`.

---

## Răspunsuri
- **Quiz scurt:** (1) face să apară butoanele (pornire, oprire, volum); (2) `src` este atributul care arată un singur fișier, iar `<source>` este un tag pus în `<audio>` sau `<video>` pentru mai multe fișiere sau formate, din care browserul alege primul pe care îl poate reda; (3) imaginea care se vede înainte să pornească filmul; (4) browserele îl blochează de obicei, iar sunetul care pornește singur deranjează; (5) deschizi DevTools (**F12**; pe Mac Cmd + Option + I), fila **Console**: un mesaj „404” arată că fișierul nu a fost găsit.  
- **Tema, exercițiul B:** (1) arată butoanele; (2) repetă; (3) nu încarcă fișierul până la pornire; (4) imaginea de început a filmului; (5) fără sunet.  
- **Tema, exercițiul C:** (1) `.mp3`; (2) `.mp4`; (3) `.wav`, dar se recomandă micșorarea lui sau alegerea unui `.mp3`.  
- **Tema, exercițiul D:** (1) numele de fișier `Tramvai Mare.mp3` are spațiu și litere mari (corect: `tramvai.mp3`); (2) tagul `<video …` nu are `>` de încheiere și nici `</video>`; (3) `autoplay` cu sunet (blocat de browsere și deranjant).  
- **Tema, exercițiul E:** sunetul care pornește singur deranjează și este blocat de browsere; descrierea ajută cine nu aude sau nu vede.  
- **Siguranță:** fișiere doar din pachetul media sau făcute de tine; fără voci sau persoane; fără melodii din internet.
