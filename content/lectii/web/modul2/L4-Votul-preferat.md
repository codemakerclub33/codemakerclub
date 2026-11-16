# LECȚIA 4 — Votul preferat
### Formulare: alegeri (radio, checkbox, listă)
**Modulul 2 · HTML II: Pagini mai bogate · 2 ore**  
**Code Maker Club · HTML Builder**

> Nu toate răspunsurile se scriu cu litere. Uneori alegi **una** dintre mai multe variante, alteori bifezi **mai multe**, iar alteori alegi dintr-o **listă**. Azi înveți toate aceste feluri de alegeri, pentru un sondaj despre sporturi.  
> Proiect: **„Votul preferat”** · folder: `Prenume_Nume_W2_L4` (ex. `Ana_Pop_W2_L4`)

---

## Ce facem azi
La final ai o pagină de **vot** pentru sportul preferat, cu butoane rotunde, căsuțe bifate, o listă de alegere și câmpuri speciale pentru număr, culoare și valoare pe o scală. Alegerile sunt mai ușor de completat decât textul: nu scrii, doar apeși. Și sunt mai sigure pentru cine face pagina, pentru că răspunsurile sunt cele pregătite de tine.

> **Siguranță:** în sondaje întrebăm despre **lucruri**, nu despre persoane: sporturi, echipe, jocuri. Nu cerem vârsta, adresa sau alte date personale.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–35 | `radio`: o singură alegere (**Exemplele 1–2**) |
| 35–55 | `checkbox`: mai multe alegeri (**Exemplul 3**) |
| 55–70 | `select`: lista de alegere (**Exemplul 4**) |
| 70–90 | `fieldset` și `legend` · câmpuri speciale (**Exemplele 5–6**) |
| 90–115 | Ce folosim când · votul complet (**Exemplele 7–8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `type="radio"` | Alegi o singură variantă din grup (același `name`) | `<input type="radio" id="fotbal" name="sport" value="fotbal">` |
| `type="checkbox"` | Bifezi oricâte variante | `<input type="checkbox" id="prieteni" name="placut" value="prieteni">` |
| `<select>` și `<option>` | Listă de unde alegi o variantă | `<option value="luni">Luni</option>` |
| `checked` / `selected` | Pune o variantă aleasă de la început | `<input type="radio" ... checked>` |
| `<fieldset>` și `<legend>` | Grupează întrebările într-un chenar cu titlu | `<legend>Ce sport preferi?</legend>` |
| `type="number"`, `color`, `range` | Câmpuri pentru număr, culoare, scală | `<input type="range" min="1" max="10">` |

---

## 1. Recapitulare rapidă

- `<form>` învelește formularul.  
- `<label for="x">` se leagă de `<input id="x">`.  
- `name` este numele sub care se păstrează răspunsul.  
- La trimitere, datele apar în adresa paginii, după `?`.  
- Nu scriem date personale în formularele de exercițiu.

**Încearcă tu (3 min)**  
- [ ] Creează folderul `Prenume_Nume_W2_L4` și fișierul `index.html` cu scheletul complet  
- [ ] Creează în `<body>` un `<h1>` și un formular gol (`<form></form>`)  

> De aici înainte, exemplele arată doar ce scrii **în interiorul `<body>`**, dacă nu spunem altfel.

---

## 2. Butoane rotunde: `radio`

`radio` înseamnă „alege **una singură**”. Când alegi o variantă, cea aleasă înainte se debifează.

### Exemplul 1 — Prima întrebare cu `radio`

```html
<p>Ce sport preferi?</p>

<input type="radio" id="fotbal" name="sport" value="fotbal">
<label for="fotbal">Fotbal</label><br>

<input type="radio" id="baschet" name="sport" value="baschet">
<label for="baschet">Baschet</label><br>

<input type="radio" id="inot" name="sport" value="inot">
<label for="inot">Înot</label>
```

Trei lucruri importante:
- toate au **același `name`** (`sport`): așa browserul știe că sunt o singură întrebare și poți alege doar una;  
- fiecare are **alt `id`** (`fotbal`, `baschet`, `inot`) și **altă `value`**;  
- fiecare etichetă are `for` egal cu `id`-ul casetei ei.

### Exemplul 2 — `value` și `checked`

Alege „Baschet” și apasă un buton de trimitere. În adresă vei vedea `?sport=baschet`. `value` este **răspunsul** care se păstrează, iar textul din `<label>` este ce vede vizitatorul. Ele pot fi diferite: textul poate avea diacritice și spații, iar `value` se scrie scurt, cu litere mici și fără diacritice.

Dacă vrei o variantă aleasă de la început, adaugi `checked`:

```html
<input type="radio" id="fotbal" name="sport" value="fotbal" checked>
```

Pune `checked` **la o singură variantă** dintr-un grup.

**Încearcă tu (6 min)**  
- [ ] Fă o întrebare cu cel puțin trei variante `radio`, toate cu același `name`  
- [ ] Fiecare variantă are `id`, `value` și etichetă legată  
- [ ] Verifică în Live Server că poți alege doar una  

---

## 3. Căsuțe bifate: `checkbox`

`checkbox` înseamnă „poți bifa **mai multe**”.

### Exemplul 3 — Ce îți place la sport?

```html
<p>Ce îți place la sport? (poți alege mai multe)</p>

<input type="checkbox" id="prieteni" name="placut" value="prieteni">
<label for="prieteni">Să joc cu prietenii</label><br>

<input type="checkbox" id="miscare" name="placut" value="miscare">
<label for="miscare">Mișcarea</label><br>

<input type="checkbox" id="victorie" name="placut" value="victorie">
<label for="victorie">Bucuria victoriei</label>
```

Bifezi oricâte vrei. La trimitere, fiecare variantă bifată apare în adresă: `?placut=prieteni&placut=victorie`.

| | `radio` | `checkbox` |
|---|---------|------------|
| Câte poți alege | una singură | oricâte |
| `name` | același pentru tot grupul | poate fi același |
| Când îl folosești | „Ce sport preferi?” | „Ce îți place la sport?” |

**Încearcă tu (5 min)**  
- [ ] Adaugă o întrebare cu `checkbox` cu trei variante  
- [ ] Bifează două variante și apasă pe un buton de trimitere  
- [ ] Citește în adresă ce s-a trimis  

---

## 4. Lista de alegere: `select`

### Exemplul 4 — Lista de unde alegi

```html
<label for="zi">Ziua preferată pentru sport:</label>
<select id="zi" name="zi">
  <option value="">-- alege o zi --</option>
  <option value="luni">Luni</option>
  <option value="miercuri">Miercuri</option>
  <option value="vineri">Vineri</option>
  <option value="sambata">Sâmbătă</option>
</select>
```

- `<select>` este lista; fiecare `<option>` este o variantă;  
- `value` este răspunsul păstrat, iar textul dintre taguri este ce vede vizitatorul;  
- prima opțiune cu `value=""` este un îndemn („alege…”);  
- dacă vrei o variantă aleasă de la început, pune `selected` la acea `<option>`.

`select` este bun când ai **multe** variante (zile, luni, orașe) și nu vrei să ocupi mult loc.

**Încearcă tu (5 min)**  
- [ ] Fă o întrebare cu `select` și cel puțin patru opțiuni  
- [ ] Pune `selected` la una dintre opțiuni  

---

## 5. Grupuri și câmpuri speciale

### Exemplul 5 — `fieldset` și `legend`

Grupezi întrebările legate între ele într-un chenar:

```html
<fieldset>
  <legend>Ce sport preferi?</legend>

  <input type="radio" id="fotbal" name="sport" value="fotbal">
  <label for="fotbal">Fotbal</label><br>

  <input type="radio" id="baschet" name="sport" value="baschet">
  <label for="baschet">Baschet</label>
</fieldset>
```

`<fieldset>` desenează un chenar în jurul grupului, iar `<legend>` („legendă”) este titlul chenarului. Pune `<legend>` **imediat după `<fieldset>`**. Pentru grupurile de `radio` și `checkbox`, `legend` este titlul potrivit al întrebării, în locul unui `<p>`.

### Exemplul 6 — Alte câmpuri utile

```html
<label for="antrenamente">Câte antrenamente pe săptămână ți-ar plăcea?</label>
<input type="number" id="antrenamente" name="antrenamente" min="0" max="7">

<br>

<label for="culoare">Culoarea echipei preferate:</label>
<input type="color" id="culoare" name="culoare" value="#0000ff">

<br>

<label for="drag">Cât de mult îți place să privești meciuri? (de la 1 la 10)</label>
<input type="range" id="drag" name="drag" min="1" max="10" value="5">
```

| `type` | Ce apare |
|--------|----------|
| `number` | o casetă în care scrii doar numere (cu `min` și `max` pentru limite) |
| `color` | o paletă de culori |
| `range` | un cursor care se mută între `min` și `max` |

**Încearcă tu (5 min)**  
- [ ] Grupează o întrebare cu `fieldset` și `legend`  
- [ ] Folosește cel puțin două dintre `number`, `color` și `range`  

---

## 6. Mini-proiect: votul complet

### Exemplul 7 — Ce folosim când?

| Vrei… | Folosești |
|-------|-----------|
| o singură variantă din 2–5 | `radio` |
| oricâte variante din câteva | `checkbox` |
| o singură variantă din multe | `select` |
| un număr | `number` |
| o culoare | `color` |
| o valoare pe o scală | `range` |

### Exemplul 8 — „Votul preferat”

Acesta este proiectul **complet**, cu tot scheletul paginii. Salvează-l în `index.html` și scrie-l singur, bucată cu bucată.

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Votul preferat</title>
</head>
<body>
  <h1>Votul preferat</h1>

  <form>
    <fieldset>
      <legend>Ce sport preferi?</legend>

      <input type="radio" id="fotbal" name="sport" value="fotbal" checked>
      <label for="fotbal">Fotbal</label><br>

      <input type="radio" id="baschet" name="sport" value="baschet">
      <label for="baschet">Baschet</label><br>

      <input type="radio" id="inot" name="sport" value="inot">
      <label for="inot">Înot</label>
    </fieldset>

    <fieldset>
      <legend>Ce îți place la sport?</legend>

      <input type="checkbox" id="prieteni" name="placut" value="prieteni">
      <label for="prieteni">Să joc cu prietenii</label><br>

      <input type="checkbox" id="miscare" name="placut" value="miscare">
      <label for="miscare">Mișcarea</label><br>

      <input type="checkbox" id="victorie" name="placut" value="victorie">
      <label for="victorie">Bucuria victoriei</label>
    </fieldset>

    <p>
      <label for="zi">Ziua preferată pentru sport:</label>
      <select id="zi" name="zi">
        <option value="">-- alege o zi --</option>
        <option value="luni">Luni</option>
        <option value="miercuri">Miercuri</option>
        <option value="sambata">Sâmbătă</option>
      </select>
    </p>

    <p>
      <label for="drag">Cât de mult îți place să privești meciuri? (1–10)</label>
      <input type="range" id="drag" name="drag" min="1" max="10" value="5">
    </p>

    <p>
      <button type="submit">Trimite votul</button>
      <button type="reset">Șterge tot</button>
    </p>
  </form>
</body>
</html>
```

Completează votul, apasă „Trimite votul” și citește în adresă răspunsurile: `sport=…&placut=…&zi=…&drag=…`.

---

## De făcut azi — „Votul preferat”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Un formular cu o întrebare `radio` (minimum 3 variante), una `checkbox` și una `select` |
| **Complet** | Minim + grupuri cu `fieldset` și `legend`, un câmp `number`, `color` sau `range`, o variantă `checked`, butoanele „Trimite” și „Șterge tot”, și răspunsurile din adresă notate într-un comentariu |

### Pasul 1 — Minim
Fă un vot despre **un subiect ales de tine** (sporturi, jocuri, mâncare, orașe).

- [ ] Folderul `Prenume_Nume_W2_L4` are `index.html` cu scheletul complet  
- [ ] O întrebare `radio` cu minimum 3 variante, toate cu același `name`  
- [ ] O întrebare `checkbox` (minimum 3 variante) și o listă `select` (minimum 4 opțiuni)  
- [ ] Toate variantele au `id`, `value` și etichete legate  

### Pasul 2 — Complet
Îmbunătățești votul:

- [ ] Ai grupat `radio` și `checkbox` cu `fieldset` și `legend`  
- [ ] Ai un câmp `number`, `color` sau `range` și o variantă `checked`  
- [ ] Ai butoanele „Trimite” și „Șterge tot”  
- [ ] Ai completat votul, ai apăsat „Trimite” și ai notat într-un comentariu ce apare după `?` în adresă  
- [ ] Codul este indentat și are comentarii  

---

## Bonus ★★★ — Provocare: Votul cu sugestii
*Doar dacă ai terminat Complet.*

- [ ] Adaugă la `select` atributul `multiple` și vezi cum se schimbă lista  
- [ ] Fă o întrebare cu `range` între 0 și 100, cu `step="10"`  
- [ ] Adaugă `<datalist>`: o casetă de text care sugerează variante (caută „HTML datalist” împreună cu un adult)  
- [ ] Adaugă o a patra întrebare `radio` și verifică din nou rezultatele din adresă  

---

## Greșeli frecvente
1. **`radio` cu `name` diferit** — butoanele devin întrebări separate.  
2. **Același `id` la mai multe casete** — `id` este unic.  
3. **Lipsește `value`** — răspunsul nu are nume sau apare ca `on`.  
4. **`checked` pe mai multe `radio` din același grup** — rămâne bifat doar ultimul.  
5. **`legend` nu este primul în `fieldset`** — trebuie să fie imediat după `<fieldset>`.  
6. **Ai uitat `</option>` sau `</select>`**.  
7. **Etichete nelegate** (`for` diferit de `id`).  
8. **Ai cerut date personale** (vârstă, adresă) — întreabă despre lucruri nepersonale.  

---

## Recapitulare pe scurt
1. `radio`: o singură alegere; toate variantele au același `name`.  
2. `checkbox`: mai multe alegeri.  
3. `select` cu `option`: listă de alegere.  
4. `value` este răspunsul păstrat; textul din `label` este ce vede vizitatorul.  
5. `checked` și `selected` pun o variantă de la început.  
6. `fieldset` și `legend` grupează întrebările.  
7. `number`, `color` și `range` sunt câmpuri speciale.

## Quiz scurt
- Cum se comportă butoanele `radio` cu același `name`?  
- Când folosești `checkbox`?  
- Ce este `<option>`?  
- Unde pui `<legend>`?  
- Ce face `checked`?

## Temă
1. Fă un formular „Alege aventura ta”: o întrebare `radio` (munte, mare sau pădure), una `checkbox` (ce iei în rucsac) și un `select` (cu cine mergi: familia, prietenii sau un grup de explorare). Salvează în `Prenume_Nume_W2_L4`.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Listă cu grupuri: `optgroup`.**

```html
<label for="sport">Sportul preferat:</label>
<select id="sport" name="sport">
  <optgroup label="Cu mingea">
    <option value="fotbal">Fotbal</option>
    <option value="baschet">Baschet</option>
  </optgroup>
  <optgroup label="În apă">
    <option value="inot">Înot</option>
    <option value="polo">Polo</option>
  </optgroup>
</select>
```

`<optgroup>` pune un titlu deasupra unui grup de opțiuni din listă.

**Acasă 2 — Alegere cu un buton în plus: `selected`.**

```html
<select id="nivel" name="nivel">
  <option value="incepator">Începător</option>
  <option value="mediu" selected>Mediu</option>
  <option value="avansat">Avansat</option>
</select>
```

Lista pornește cu „Mediu” ales. Vizitatorul poate alege oricând altă variantă.

4. **Încă patru exerciții (B–E):**

**B — Ce vezi în adresă?** Completează votul și apasă „Trimite”. Copiază într-un comentariu ce apare după `?` și marchează fiecare nume și valoare.

**C — Ce folosim?** Alege `radio`, `checkbox` sau `select`: (1) culoarea preferată dintre 5 culori; (2) ce jocuri ai jucat (mai multe); (3) ești de acord sau nu (2 variante); (4) luna preferată (12 variante).

**D — Găsește greșelile.** Găsește **3 greșeli** în primul cod și **o greșeală** în al doilea. Scrie varianta corectă:

```text
<fieldset>
  <input type="radio" id="da" name="raspuns" value="da">
  <label for="da">Da</label>
  <input type="radio" id="nu" name="raspunsuri" value="nu">
  <label for="nu">Nu</label>
  <legend>Îți place înghețata?</legend>
</fieldset>
<select id="luna" name="luna">
  <option>Iunie
  <option>Iulie</option>
</select>
```

```text
<input type="radio" id="a" name="sport1" value="fotbal">
<input type="radio" id="b" name="sport2" value="baschet">
```

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: care este diferența dintre `radio` și `checkbox`? De ce toate variantele unei întrebări `radio` au același `name`?

## Ce urmează — Lecția 5
Formulare: **verificarea datelor**. Cum cerem să fie completate câmpurile și cum verificăm ce scrie vizitatorul, la rezervarea unor bilete la muzeu.

---

## Răspunsuri
- **Quiz scurt:** (1) formează o singură întrebare: poți alege doar una, iar alegerea nouă o debifează pe cea veche; (2) când vizitatorul poate alege mai multe variante, oricâte; (3) o variantă din lista `<select>`; (4) imediat după `<fieldset>`, ca titlu al grupului; (5) pune varianta bifată de la început.  
- **Tema, exercițiul C:** (1) `select` sau `radio`; (2) `checkbox`; (3) `radio`; (4) `select`.  
- **Tema, exercițiul D, primul cod:** (1) `legend` trebuie să fie imediat după `<fieldset>`; (2) `name="raspuns"` și `name="raspunsuri"` diferă: trebuie același; (3) `<option>Iunie` nu este închis cu `</option>` (browserul îl închide singur, dar regula este să punem noi `</option>`).  
- **Tema, exercițiul D, al doilea cod:** `sport1` și `sport2` formează două întrebări; trebuie același `name`.  
- **Tema, exercițiul E:** `radio` permite o singură alegere, `checkbox` oricâte; variantele au același `name` ca browserul să știe că fac parte din aceeași întrebare.  
- **Siguranță:** nu cerem vârstă sau adresă în sondaje.
