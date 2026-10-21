# LECȚIA 4 — Formulare II: alegeri
**Modulul 2 · HTML II: Pagini mai bogate · 2 ore**  
**Code Maker Club · HTML Builder**

> Nu toate răspunsurile se scriu cu litere. Uneori alegi **una** dintre mai multe variante, alteori bifezi **mai multe**, iar alteori alegi dintr-o **listă**. Azi înveți toate aceste feluri de alegeri.  
> Proiect: **„Sondaj despre animale”** · folder: `Prenume_Nume_W2_L4` (ex. `Ana_Pop_W2_L4`)

---

## Obiectiv
La finalul orei știi să faci butoane rotunde (`radio`), căsuțe bifate (`checkbox`), liste de alegere (`select`), să grupezi întrebările cu `fieldset` și `legend` și să folosești câmpuri speciale pentru număr, culoare și valoare pe o scală.  
**Minim:** un formular cu o întrebare cu `radio`, una cu `checkbox` și una cu `select`.  
**Ținta orei (Complet):** + grupuri cu `fieldset` și `legend`, un câmp `number` și unul `color`, valori implicite alese și explicația pe foaie a diferenței dintre `radio` și `checkbox`.

## De ce contează
Alegerile dintr-un formular sunt mai ușor de completat decât textul: nu trebuie să scrii, doar apeși. Și sunt mai sigure pentru cine face pagina, pentru că răspunsurile sunt cele pregătite de tine.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–35 | `radio`: o singură alegere (**Exemplele 1–3**) |
| 35–55 | `checkbox`: mai multe alegeri (**Exemplul 4**) |
| 55–75 | `select`: lista de alegere (**Exemplul 5**) |
| 75–90 | `fieldset` și `legend` · câmpuri speciale (**Exemplele 6–7**) |
| 90–115 | Sondajul complet · ce folosim când (**Exemplele 8–10**) |
| 115–120 | Recap și temă |

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

> De aici înainte, exemplele arată doar ce scrii **în interiorul `<body>`**.

---

## 2. Butoane rotunde: `radio`

`radio` înseamnă „alege **una singură**”. Când alegi o variantă, cea aleasă înainte se debifează.

### Exemplul 1 — Prima întrebare cu `radio`

```html
<p>Ce animal preferi?</p>

<input type="radio" id="pisica" name="animal" value="pisica">
<label for="pisica">Pisică</label><br>

<input type="radio" id="catel" name="animal" value="catel">
<label for="catel">Cățel</label><br>

<input type="radio" id="pasare" name="animal" value="pasare">
<label for="pasare">Pasăre</label>
```

Trei lucruri importante:
- toate au **același `name`** (`animal`): așa browserul știe că sunt o singură întrebare și poți alege doar una;  
- fiecare are **alt `id`** (`pisica`, `catel`, `pasare`) și **altă `value`**;  
- fiecare etichetă are `for` egal cu `id`-ul casetei ei.

### Exemplul 2 — La ce folosește `value`

Alege „Pisică” și apasă un buton de trimitere. În adresă vei vedea `?animal=pisica`. `value` este **răspunsul** care se păstrează, iar textul din `<label>` este ce vede vizitatorul. Ele pot fi diferite: textul poate avea diacritice și spații, iar `value` se scrie scurt, cu litere mici și fără diacritice.

### Exemplul 3 — O variantă bifată de la început: `checked`

```html
<input type="radio" id="pisica" name="animal" value="pisica" checked>
```

Atributul `checked` pune varianta aleasă de la început. Pune `checked` **la o singură variantă** dintr-un grup.

**Gata când:**  
- [ ] Ai făcut o întrebare cu cel puțin trei variante `radio`, toate cu același `name`  
- [ ] Fiecare variantă are `id`, `value` și etichetă legată  
- [ ] Ai verificat că poți alege doar una  

---

## 3. Căsuțe bifate: `checkbox`

`checkbox` înseamnă „poți bifa **mai multe**”.

### Exemplul 4 — Ce îți place la animale?

```html
<p>Ce îți place la animale? (poți alege mai multe)</p>

<input type="checkbox" id="blana" name="placut" value="blana">
<label for="blana">Blana moale</label><br>

<input type="checkbox" id="sunete" name="placut" value="sunete">
<label for="sunete">Sunetele lor</label><br>

<input type="checkbox" id="joaca" name="placut" value="joaca">
<label for="joaca">Joaca</label>
```

Bifezi oricâte vrei. La trimitere, fiecare variantă bifată apare în adresă: `?placut=blana&placut=joaca`.

| | `radio` | `checkbox` |
|---|---------|------------|
| Câte poți alege | una singură | oricâte |
| `name` | același pentru tot grupul | poate fi același |
| Când îl folosești | „Ce animal preferi?” | „Ce îți place la animale?” |

**Încearcă tu (5 min)**  
- [ ] Adaugă o întrebare cu `checkbox` cu trei variante  
- [ ] Bifează două variante și apasă pe un buton de trimitere  
- [ ] Citește în adresă ce s-a trimis  

---

## 4. Lista de alegere: `select`

### Exemplul 5 — Lista de unde alegi

```html
<label for="luna">Luna ta preferată:</label>
<select id="luna" name="luna">
  <option value="">-- alege o lună --</option>
  <option value="iunie">Iunie</option>
  <option value="iulie">Iulie</option>
  <option value="august">August</option>
  <option value="decembrie">Decembrie</option>
</select>
```

- `<select>` este lista; fiecare `<option>` este o variantă;  
- `value` este răspunsul păstrat, iar textul dintre taguri este ce vede vizitatorul;  
- prima opțiune cu `value=""` este un îndemn („alege…”);  
- dacă vrei o variantă aleasă de la început, pune `selected` la acea `<option>`.

`select` este bun când ai **multe** variante (luni, țări, clase) și nu vrei să ocupi mult loc.

---

## 5. Grupuri și câmpuri speciale

### Exemplul 6 — `fieldset` și `legend`

Grupezi întrebările legate între ele într-un chenar:

```html
<fieldset>
  <legend>Ce animal preferi?</legend>

  <input type="radio" id="pisica" name="animal" value="pisica">
  <label for="pisica">Pisică</label><br>

  <input type="radio" id="catel" name="animal" value="catel">
  <label for="catel">Cățel</label>
</fieldset>
```

`<fieldset>` desenează un chenar în jurul grupului, iar `<legend>` („legendă”) este titlul chenarului. Pune `<legend>` **imediat după `<fieldset>`**. Pentru grupurile de `radio` și `checkbox`, `legend` este titlul potrivit al întrebării, în locul unui `<p>`.

### Exemplul 7 — Alte câmpuri utile

```html
<label for="varsta">Câți ani are animalul tău?</label>
<input type="number" id="varsta" name="varsta" min="0" max="30">

<br>

<label for="culoare">Culoarea lui:</label>
<input type="color" id="culoare" name="culoare" value="#808080">

<br>

<label for="drag">Cât de mult îl iubești? (de la 1 la 10)</label>
<input type="range" id="drag" name="drag" min="1" max="10" value="10">
```

| `type` | Ce apare |
|--------|----------|
| `number` | o casetă în care scrii doar numere (cu `min` și `max` pentru limite) |
| `color` | o paletă de culori |
| `range` | un cursor care se mută între `min` și `max` |

Nu cerem vârsta sau data nașterii vizitatorului: întrebăm despre **animalul** lui, nu despre el.

**Gata când:**  
- [ ] Ai făcut o întrebare cu `select` și cel puțin patru opțiuni  
- [ ] Ai grupat o întrebare cu `fieldset` și `legend`  
- [ ] Ai folosit cel puțin două dintre `number`, `color` și `range`  

---

## 6. Sondajul complet

### Exemplul 8 — „Sondaj despre animale”

```html
<h1>Sondaj despre animale</h1>

<form>
  <fieldset>
    <legend>Ce animal preferi?</legend>

    <input type="radio" id="pisica" name="animal" value="pisica" checked>
    <label for="pisica">Pisică</label><br>

    <input type="radio" id="catel" name="animal" value="catel">
    <label for="catel">Cățel</label><br>

    <input type="radio" id="pasare" name="animal" value="pasare">
    <label for="pasare">Pasăre</label>
  </fieldset>

  <fieldset>
    <legend>Ce îți place la animale?</legend>

    <input type="checkbox" id="blana" name="placut" value="blana">
    <label for="blana">Blana moale</label><br>

    <input type="checkbox" id="sunete" name="placut" value="sunete">
    <label for="sunete">Sunetele lor</label><br>

    <input type="checkbox" id="joaca" name="placut" value="joaca">
    <label for="joaca">Joaca</label>
  </fieldset>

  <p>
    <label for="luna">Luna ta preferată:</label>
    <select id="luna" name="luna">
      <option value="">-- alege o lună --</option>
      <option value="iunie">Iunie</option>
      <option value="iulie">Iulie</option>
      <option value="august">August</option>
    </select>
  </p>

  <p>
    <button type="submit">Trimite</button>
    <button type="reset">Șterge tot</button>
  </p>
</form>
```

Completează sondajul, apasă „Trimite” și citește în adresă răspunsurile: `animal=…&placut=…&luna=…`.

### Exemplul 9 — Ce folosim când?

| Vrei… | Folosești |
|-------|-----------|
| o singură variantă din 2–5 | `radio` |
| oricâte variante din câteva | `checkbox` |
| o singură variantă din multe | `select` |
| un număr | `number` |
| o culoare | `color` |
| o valoare pe o scală | `range` |

### Exemplul 10 — Greșeli frecvente

```text
<input type="radio" id="a" name="animal1" value="pisica">
<input type="radio" id="b" name="animal2" value="catel">
```

Cele două butoane au `name` diferit, deci sunt **două întrebări**, nu una: poți bifa amândouă. Corect: același `name` la ambele (`name="animal"`).

**Gata când:**  
- [ ] Ai făcut sondajul complet cu `radio`, `checkbox` și `select`  
- [ ] Ai testat formularul și ai citit răspunsurile din adresă  
- [ ] Ai găsit greșeala din Exemplul 10 fără să te uiți la rezolvare  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Sondaj despre animale” (obligatoriu)
Fă un sondaj despre **un subiect ales de tine** (animale, jocuri, mâncare, sport) cu:
- o întrebare `radio` (minimum 3 variante, o variantă `checked`);  
- o întrebare `checkbox` (minimum 3 variante);  
- o listă `select` (minimum 4 opțiuni);  
- un câmp `number`, `color` sau `range`;  
- `fieldset` și `legend` pentru grupurile `radio` și `checkbox`;  
- butoanele „Trimite” și „Șterge tot”.

### Exercițiul B — Ce vezi în adresă?
Completează sondajul și apasă „Trimite”. Copiază pe foaie ce apare după `?` și marchează fiecare nume și valoare.

### Exercițiul C — Ce folosim?
Alege `radio`, `checkbox` sau `select`: (1) materia ta preferată de la școală (5 variante); (2) ce fructe mănânci (mai multe); (3) ești de acord sau nu (2 variante); (4) luna nașterii animalului tău (12 variante).

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** și scrie varianta corectă. Browserul repară unele singur, dar rămân greșeli de scriere:

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

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: care este diferența dintre `radio` și `checkbox`? De ce toate variantele unei întrebări `radio` au același `name`?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W2_L4` conține `index.html` cu sondajul complet  
- [ ] Toate variantele au `id`, `value` și etichete legate  
- [ ] Ai testat formularul și ai notat răspunsurile din adresă  
- [ ] Codul este indentat și are comentarii  
- [ ] Ai răspuns la exercițiile C–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Adaugă la `select` atributul `multiple` și vezi cum se schimbă lista  
- [ ] Adaugă `<datalist>`: o casetă de text care sugerează variante (caută „HTML datalist”, cu profesorul)  
- [ ] Fă o întrebare cu `range` între 0 și 100, cu `step="10"`  
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
8. **Ai cerut date personale** (vârstă, clasă, adresă) — întreabă despre lucruri nepersonale.  

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
Fă un formular „Alege aventura ta”: o întrebare `radio` (munte, mare sau pădure), una `checkbox` (ce iei în rucsac) și un `select` (cu cine mergi, cu variante generale: familia, prietenii, clasa). Salvează în `Prenume_Nume_W2_L4`.

## Ce urmează — Lecția 5
Formulare III: **validare**. Cum cerem să fie completate câmpurile și cum verificăm ce scrie vizitatorul.

---

## Răspunsuri
- **Quiz scurt:** (1) formează o singură întrebare: poți alege doar una, iar alegerea nouă o debifează pe cea veche; (2) când vizitatorul poate alege mai multe variante, oricâte; (3) o variantă din lista `<select>`; (4) imediat după `<fieldset>`, ca titlu al grupului; (5) pune varianta bifată de la început.  
- **Exercițiul C:** (1) `select` sau `radio`; (2) `checkbox`; (3) `radio`; (4) `select`.  
- **Exercițiul D:** (1) `legend` trebuie să fie imediat după `<fieldset>`; (2) `name="raspuns"` și `name="raspunsuri"` diferă: trebuie același; (3) `<option>Iunie` nu este închis cu `</option>` (browserul îl închide singur, dar regula este să punem noi `</option>`).  
- **Exemplul 10:** `animal1` și `animal2` formează două întrebări; trebuie același `name`.  
- **Siguranță:** nu cerem vârstă, clasă sau adresă în sondaje.
