# LECȚIA 6 — Audio și video
**Modulul 2 · HTML II: Pagini mai bogate · 2 ore**  
**Code Maker Club · HTML Builder**

> Până acum paginile tale se citeau și se priveau. Azi **vorbesc și se mișcă**: pui în ele sunete și filme scurte, cu butoane de pornire și oprire.  
> Proiect: **„Cutia cu sunete a animalelor”** · folder: `Prenume_Nume_W2_L6` (ex. `Ana_Pop_W2_L6`)

---

## Obiectiv
La finalul orei știi să pui un sunet cu `<audio>` și un film cu `<video>`, să le dai butoane de comandă cu `controls`, să alegi formate potrivite, să ții fișierele într-un folder `media` și să scrii un text care ajută pe cine nu poate auzi sau vedea.  
**Minim:** o pagină cu un `<audio>` și un `<video>`, ambele cu butoane.  
**Ținta orei (Complet):** + un tabel cu cel puțin 3 animale și câte un sunet pentru fiecare, imaginea de început pentru film (`poster`), un text care descrie sunetul și filmul și un fișier ales cu grijă pentru dimensiune.

## De ce contează
Un sunet poate face o pagină mai vie, iar un film scurt poate explica ceva mai bine decât zece paragrafe. Dar fișierele mari încetinesc pagina, iar sunetul pornit singur poate speria sau deranja. De aceea, cine face pagina trebuie să aleagă cu grijă.

---

## Despre fișierele pe care le folosim
- Sunetele și filmele pentru exerciții le primești de la profesor, într-un **pachet media**, sau le faci tu (de exemplu înregistrezi cu telefonul **sunetul unui animal sau al unui instrument**).  
- **Nu punem filme sau sunete cu alți copii sau adulți** fără acordul lor și al părinților.  
- Nu folosim melodii luate din internet: au drepturi de autor, adică nu ai voie să le pui oriunde.  
- Fișierele se salvează cu **litere mici, fără spații și fără diacritice**: `pisica.mp3`, `film.mp4`.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul · pregătim folderul `media` |
| 15–35 | `<audio>` și `controls` (**Exemplele 1–3**) |
| 35–60 | `<video>`, `width`, `poster` (**Exemplele 4–6**) |
| 60–75 | Formate și mai multe surse (**Exemplul 7**) |
| 75–95 | Foldere și text pentru toți (**Exemplele 8–9**) |
| 95–115 | Proiect · greșeli (**Exemplul 10**) |
| 115–120 | Recap și temă |

---

## 1. Recapitulare rapidă

- Formularele se fac cu `<form>`; validarea cere răspunsuri corecte.  
- Fișierele se pun în foldere; calea se scrie în `src`.  
- `../` înseamnă „un folder mai sus”.  
- Numele fișierelor: litere mici, fără spații, fără diacritice.

**Încearcă tu (4 min)**  
- [ ] Creează folderul `Prenume_Nume_W2_L6`, cu fișierul `index.html` (schelet complet) și folderul `media`  
- [ ] Pune în `media` fișierele din pachetul media (sau ale tale)  

> De aici înainte, exemplele arată doar ce scrii **în interiorul `<body>`**.

---

## 2. Sunetul: `<audio>`

### Exemplul 1 — Primul sunet

```html
<audio src="media/pisica.mp3" controls></audio>
```

- `src` arată unde este fișierul (la fel ca la imagini);  
- `controls` face să apară **butoanele**: pornire, oprire, volum;  
- `<audio>` are tag de închidere.

Fără `controls`, nu apare nimic, deoarece nu există niciun buton.

### Exemplul 2 — Mai multe formate și un text de rezervă

```html
<audio controls>
  <source src="media/pisica.mp3" type="audio/mpeg">
  <source src="media/pisica.ogg" type="audio/ogg">
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

**Gata când:**  
- [ ] Ai pus un sunet în pagină, cu `controls`, și îl poți porni și opri  
- [ ] Ai încercat varianta fără `controls` și ai văzut ce se întâmplă  
- [ ] Poți explica de ce nu folosim `autoplay` cu sunet  

---

## 3. Filmul: `<video>`

### Exemplul 4 — Primul film

```html
<video src="media/film.mp4" controls width="400"></video>
```

- la fel ca `audio`: `src` și `controls`;  
- `width="400"` stabilește lățimea (în pixeli); înălțimea se potrivește singură.

### Exemplul 5 — Imaginea de început: `poster`

```html
<video src="media/film.mp4" controls width="400" poster="imagini/coperta.jpg"></video>
```

`poster` este imaginea care se vede **înainte** să pornească filmul. Poate fi o poză din film sau un desen. Fără `poster`, de obicei se vede primul cadru sau un ecran negru.

### Exemplul 6 — Film fără sunet care pornește singur

Dacă filmul nu are sunet și vrei să se repete ca un desen animat în fundal:

```html
<video src="media/valuri.mp4" autoplay muted loop width="400"></video>
```

- `muted` înseamnă fără sunet; browserele permit `autoplay` doar la filme **fără sunet**;  
- `loop` repetă filmul.

Folosește asta **rar**: o mișcare continuă poate obosi sau deranja pe unii vizitatori. Când pui `autoplay`, pune și `controls`, ca vizitatorul să poată opri filmul.

**Încearcă tu (7 min)**  
- [ ] Pune în pagină un film cu `controls` și `width`  
- [ ] Adaugă un `poster` cu o imagine din folderul `imagini`  
- [ ] Încearcă `width="200"` și `width="600"` ca să vezi diferența  

---

## 4. Formate, foldere și text pentru toți

### Exemplul 7 — Formate frecvente

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
  <source src="media/film.mp4" type="video/mp4">
  <source src="media/film.webm" type="video/webm">
  Browserul tău nu poate reda filmul.
</video>
```

**Atenție la dimensiune:** un film lung poate avea sute de megaocteți. Pentru pagini, folosește filme **scurte** (sub un minut) și sunete scurte. Verifică mărimea fișierelor în folder: dacă un sunet are zeci de megaocteți, alege altul.

### Exemplul 8 — Foldere și căi

```text
Prenume_Nume_W2_L6/
  index.html
  imagini/
    coperta.jpg
  media/
    pisica.mp3
    film.mp4
```

Din `index.html`, calea este `media/pisica.mp3`. Dacă pagina ar fi într-un subfolder, ar trebui `../media/pisica.mp3`. Regula este aceeași ca la imagini: privești din folderul paginii în care te afli.

### Exemplul 9 — Text pentru cine nu aude sau nu vede

Nu toți vizitatorii pot auzi sunetul sau vedea filmul. Un text ajută:

```html
<h2>Pisica toarce</h2>
<audio src="media/pisica.mp3" controls></audio>
<p><em>Descriere: sunetul unei pisici care toarce încet, timp de zece secunde.</em></p>

<h2>Filmul meu</h2>
<video src="media/film.mp4" controls width="400"></video>
<p><em>Descriere: un film despre un cățel care aleargă prin iarbă.</em></p>
```

La filmele cu voce, un **text cu ce se spune** (o transcriere) ajută foarte mult. Se mai pot adăuga și **subtitrări**, dar le lăsăm pentru bonus.

**Gata când:**  
- [ ] Fișierele tale stau în folderul `media`  
- [ ] Ai o descriere scurtă sub sunet și sub film  
- [ ] Ai verificat că nicio melodie sau film luat din internet nu este în pagina ta  
- [ ] Ai verificat mărimea fișierelor și folosești unele scurte  

---

## 5. Proiect și greșeli

### Exemplul 10 — „Cutia cu sunete a animalelor”

```html
<h1>Cutia cu sunete a animalelor</h1>

<table>
  <caption>Cine face ce sunet?</caption>
  <thead>
    <tr>
      <th scope="col">Animal</th>
      <th scope="col">Poză</th>
      <th scope="col">Sunet</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Pisica</td>
      <td><img src="imagini/pisica.jpg" alt="O pisică gri" width="100"></td>
      <td><audio src="media/pisica.mp3" controls preload="none"></audio></td>
    </tr>
    <tr>
      <td>Câinele</td>
      <td><img src="imagini/catel.jpg" alt="Un câine maro" width="100"></td>
      <td><audio src="media/catel.mp3" controls preload="none"></audio></td>
    </tr>
    <tr>
      <td>Vaca</td>
      <td><img src="imagini/vaca.jpg" alt="O vacă albă cu pete negre" width="100"></td>
      <td><audio src="media/vaca.mp3" controls preload="none"></audio></td>
    </tr>
  </tbody>
</table>

<h2>Filmul fermei</h2>
<video src="media/ferma.mp4" controls width="400" poster="imagini/ferma.jpg"></video>
<p><em>Descriere: un film scurt cu animale la fermă.</em></p>
```

Înlocuiește animalele și fișierele cu ale tale. Dacă nu ai poze, folosește desene.

Greșeli de verificat dacă nu merge ceva:
- numele din `src` nu seamănă cu numele din folder;  
- fișierul este în alt folder;  
- lipsește `controls`;  
- extensia fișierului nu este cea scrisă (de exemplu `.mp3.mp3`);  
- ai pus fișierul pe Desktop, nu în folderul proiectului.

Dacă nu se aude nimic, verifică **volumul** calculatorului și al butonului din pagină. Dacă tot nu merge, deschide DevTools (**F12**), fila **Console**: un mesaj „404” arată că fișierul nu a fost găsit.

**Gata când:**  
- [ ] Tabelul cu animale are 3 sunete care merg  
- [ ] Filmul pornește cu butoanele lui și are `poster`  
- [ ] Nu apare niciun mesaj „404” în Console  
- [ ] Descrierile sunt scrise sub sunete și film  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Cutia cu sunete a animalelor” (obligatoriu)
Fă pagina din Exemplul 10 cu:
- un `<h1>` și un tabel cu antet (`th`) și minimum 3 animale;  
- câte un `<audio controls>` pentru fiecare animal;  
- o imagine cu `alt` pentru fiecare animal;  
- un `<video>` cu `controls`, `width` și `poster`;  
- o descriere scrisă sub film;  
- fișierele în folderele `media` și `imagini`.

### Exercițiul B — Ce face atributul?
Spune ce face fiecare: (1) `controls`; (2) `loop`; (3) `preload="none"`; (4) `poster`; (5) `muted`.

### Exercițiul C — Alege formatul
Pentru fiecare, alege un format potrivit: (1) un sunet scurt pentru o pagină; (2) un film scurt; (3) un sunet foarte mare, de studio.

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** și repară greșelile:

```text
<audio src="media/Pisica Mea.mp3" controls></audio>
<video src="media/film.mp4" width="400" controls poster="imagini/coperta.jpg"
<audio src="media/ploaie.mp3" controls autoplay></audio>
```

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: de ce nu punem sunet care pornește singur? De ce scriem o descriere sub sunet și film?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W2_L6` conține `index.html` și folderele `media` și `imagini`  
- [ ] Pagina merge fără mesaje „404”  
- [ ] Codul este indentat și are comentarii  
- [ ] Ai răspuns la exercițiile B–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Înregistrează un sunet cu telefonul (un instrument sau un animal) și pune sunetul în pagină  
- [ ] Caută „HTML track subtitles” și, cu profesorul, adaugă subtitrări unui film  
- [ ] Pune în același tabel o coloană cu o legendă pentru fiecare sunet  
- [ ] Deschide DevTools, fila **Network**, reîncarcă pagina și vezi cât de mari sunt fișierele audio și video  

---

## Greșeli frecvente
1. **Nume cu spații sau diacritice** (`Pisica Mea.mp3`) — folosește `pisica.mp3`.  
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
Fă o pagină „Instrumentele mele preferate” cu un tabel cu 3 instrumente, câte un sunet pentru fiecare (din pachetul media sau înregistrat de tine) și o descriere. Salvează în `Prenume_Nume_W2_L6`.

## Ce urmează — Lecția 7
**iframe**: punem în pagină o altă pagină, o hartă sau un film dintr-un alt site.

---

## Răspunsuri pentru profesor
- **Exercițiul B:** (1) arată butoanele; (2) repetă; (3) nu încarcă fișierul până la pornire; (4) imaginea de început a filmului; (5) fără sunet.  
- **Exercițiul C:** (1) `.mp3`; (2) `.mp4`; (3) `.wav`, dar se recomandă micșorarea lui sau alegerea unui `.mp3`.  
- **Exercițiul D:** (1) numele de fișier `Pisica Mea.mp3` are spațiu și litere mari (corect: `pisica.mp3`); (2) tagul `<video …` nu are `>` de încheiere și nici `</video>`; (3) `autoplay` cu sunet (blocat de browsere și deranjant).  
- **Siguranță:** fișiere doar din pachetul media sau făcute de elev; fără persoane; fără melodii din internet.
