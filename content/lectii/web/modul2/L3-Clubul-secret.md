# LECȚIA 3 — Clubul secret
### Formulare: text, parolă și butoane
**Modulul 2 · HTML II: Pagini mai bogate · 2 ore**  
**Code Maker Club · HTML Builder**

> Când te înscrii la un joc sau scrii un mesaj pe un site, completezi un **formular**. Azi înveți să faci primul tău formular: casete de text, o casetă pentru parolă, un loc pentru mesaje lungi și butoane.  
> Proiect: **„Clubul secret”** · folder: `Prenume_Nume_W2_L3` (ex. `Ana_Pop_W2_L3`)

---

## Ce facem azi
La final ai o pagină de **înscriere în clubul secret** al jocurilor: un formular cu poreclă, parolă de probă, jocul preferat și un mesaj, cu butoane de trimitere și de ștergere. Știi să faci un formular cu `<form>`, să pui casete cu `<input>` de tip `text` și `password`, să le legi de o etichetă cu `<label>`, să faci o casetă mare cu `<textarea>` și să adaugi butoane. Formularele sunt singurul mod prin care vizitatorul scrie ceva pe o pagină (nume, mesaj, căutare); fără ele, paginile ar fi doar de citit.

> **Siguranță:** formularele noastre sunt **de exercițiu** și nu trimit nimic pe internet. Nu scriem **parole reale** (nici ale noastre, nici ale altcuiva), doar cuvinte de probă, de exemplu `test123`. Nu scriem adresa, telefonul sau numele complet; pentru nume folosim o **poreclă** sau un prenume inventat.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–35 | `form` · `input` · `label` · `placeholder` (**Exemplele 1–3**) |
| 35–60 | `name` · parola · `textarea` (**Exemplele 4–6**) |
| 60–75 | Butoane (**Exemplul 7**) |
| 75–115 | Mini-proiect: clubul secret · ce se întâmplă la trimitere (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `<form>` | Învelește tot formularul | `<form> ... </form>` |
| `<label for="x">` | Eticheta: textul care spune ce se scrie | `<label for="porecla">Porecla:</label>` |
| `<input type="text" id="x" name="x">` | Caseta în care scrie vizitatorul | `<input type="text" id="porecla" name="porecla">` |
| `type="password"` | Casetă în care literele devin puncte | `<input type="password" id="parola" name="parola">` |
| `<textarea>` | Casetă mare pentru mesaje lungi | `<textarea id="mesaj" name="mesaj" rows="4" cols="30"></textarea>` |
| `<button type="submit">` | Buton care trimite formularul (sau `reset`, `button`) | `<button type="submit">Trimite</button>` |

---

## 1. Recapitulare rapidă

- Tabelele folosesc `table`, `tr`, `th` și `td`.  
- `colspan` și `rowspan` unesc celule.  
- `thead`, `tbody`, `tfoot` împart tabelul.  
- Tagurile se indentează cu 2 spații.

**Încearcă tu (3 min)**  
- [ ] Creează folderul `Prenume_Nume_W2_L3` și deschide folderul în VS Code  
- [ ] Creează `index.html` cu scheletul complet și pornește Live Server  

> De aici înainte, exemplele arată doar ce scrii **în interiorul `<body>`**, dacă nu spunem altfel.

---

## 2. Formularul și caseta de text

### Exemplul 1 — Primul formular

```html
<form>
  <label for="porecla">Porecla ta:</label>
  <input type="text" id="porecla" name="porecla">
</form>
```

| Parte | Ce înseamnă |
|-------|-------------|
| `<form>` | învelește tot formularul |
| `<label>` | eticheta: textul care spune ce se scrie |
| `<input>` | caseta în care scrie vizitatorul |
| `type="text"` | caseta primește text |
| `id` | numele unic al casetei în pagină |
| `name` | numele sub care se păstrează ce scrie vizitatorul |

`<input>` este un tag **fără închidere**, ca `<img>` sau `<br>`.

### Exemplul 2 — Eticheta și caseta se leagă între ele

```html
<label for="porecla">Porecla ta:</label>
<input type="text" id="porecla" name="porecla">
```

Valoarea din `for` din etichetă este **aceeași** cu `id` din casetă: `porecla`. Acum, dacă apeși pe cuvintele „Porecla ta”, cursorul intră în casetă. Fără legătura asta, eticheta ar fi doar text. Un cititor de ecran citește eticheta când ajunge la casetă.

> Fiecare `id` trebuie să fie **unic** în pagină. Nu pune același `id` la două casete.

### Exemplul 3 — Text care ajută: `placeholder`

```html
<label for="joc">Jocul tău preferat:</label>
<input type="text" id="joc" name="joc" placeholder="de exemplu: Minecraft">
```

`placeholder` („text-loc”) arată un exemplu gri în casetă, care dispare când scrii. Nu înlocuiește eticheta: eticheta rămâne mereu vizibilă.

**Încearcă tu (6 min)**  
- [ ] Fă un formular cu o casetă de text și o etichetă legată prin `for` și `id`  
- [ ] Verifică în Live Server că apăsarea pe etichetă pune cursorul în casetă  
- [ ] Adaugă un `placeholder` care dă un exemplu  

---

## 3. `name`, parola și mesajele lungi

### Exemplul 4 — De ce există `name`

Când formularul se trimite, fiecare casetă trimite perechea **nume = valoare**. Numele este cel din `name`.

```html
<form>
  <label for="joc">Jocul tău preferat:</label>
  <input type="text" id="joc" name="joc">
  <button type="submit">Trimite</button>
</form>
```

Scrie `Minecraft` și apasă butonul. Privește **adresa paginii** din browser: apare ceva ca `index.html?joc=Minecraft`. Vezi numele casetei (`joc`) și ce ai scris. Diacriticele se transformă în coduri, dar înțelesul rămâne.

> Dacă o casetă nu are `name`, valoarea ei nu apare deloc.

### Exemplul 5 — Parola

```html
<label for="parola">Parola de probă:</label>
<input type="password" id="parola" name="parola">
```

La `type="password"`, literele sunt înlocuite cu puncte, ca să nu le vadă cineva peste umăr. **Atenție:** în formularul nostru de exercițiu parola apare totuși în adresa paginii (vezi Exemplul 8), de aceea scriem doar cuvinte de probă.

### Exemplul 6 — Mesaje lungi: `textarea`

Pentru mesaje pe mai multe rânduri folosești `<textarea>`:

```html
<label for="mesaj">Mesajul tău:</label>
<textarea id="mesaj" name="mesaj" rows="4" cols="30"></textarea>
```

- `rows="4"` înseamnă patru rânduri vizibile; `cols="30"` înseamnă 30 de caractere în lățime.  
- `<textarea>` **are** tag de închidere. Ce scrii între taguri apare ca text de început.

**Încearcă tu (6 min)**  
- [ ] Adaugă o a doua casetă de text cu `name` diferit  
- [ ] Adaugă o casetă `password` cu o parolă de probă  
- [ ] Adaugă un `<textarea>` cu `rows` și `cols`  

---

## 4. Butoane

### Exemplul 7 — Trei feluri de butoane

```html
<button type="submit">Trimite</button>
<button type="reset">Șterge tot</button>
<button type="button">Nu face nimic încă</button>
```

| Buton | Ce face |
|-------|---------|
| `type="submit"` | trimite formularul |
| `type="reset"` | șterge ce ai scris în toate casetele |
| `type="button"` | un buton simplu, care nu face nimic singur (în Modulul 4 îl vei face să facă lucruri cu JavaScript) |

Textul dintre `<button>` și `</button>` este ce apare pe buton.

**Încearcă tu (4 min)**  
- [ ] Adaugă în formular un buton `submit` și unul `reset`  
- [ ] Scrie ceva în casete, apasă „Șterge tot” și vezi ce se întâmplă  

---

## 5. Mini-proiect

### Exemplul 8 — „Clubul secret”

Acesta este proiectul **complet**, cu tot scheletul paginii. Salvează-l în `index.html` și scrie-l singur, bucată cu bucată.

Dacă pui totul una lângă alta, apar înghesuite. Învelește fiecare pereche etichetă + casetă într-un `<p>`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Clubul secret</title>
</head>
<body>
  <h1>Clubul secret</h1>

  <form>
    <p>
      <label for="porecla">Porecla ta:</label><br>
      <input type="text" id="porecla" name="porecla" placeholder="de exemplu: Ninja">
    </p>

    <p>
      <label for="parola">Parola de probă:</label><br>
      <input type="password" id="parola" name="parola">
    </p>

    <p>
      <label for="joc">Jocul tău preferat:</label><br>
      <input type="text" id="joc" name="joc" placeholder="de exemplu: Minecraft">
    </p>

    <p>
      <label for="mesaj">De ce vrei să intri în club?</label><br>
      <textarea id="mesaj" name="mesaj" rows="4" cols="30"></textarea>
    </p>

    <p>
      <button type="submit">Trimite</button>
      <button type="reset">Șterge tot</button>
    </p>
  </form>
</body>
</html>
```

`<br>` duce caseta pe rândul de sub etichetă.

**Ce se întâmplă când apeși „Trimite”?** Formularul tău nu are încă un loc unde să trimită datele. De aceea, browserul **reîncarcă aceeași pagină** și pune datele în adresă, după semnul `?`, despărțite de `&`:

```text
index.html?porecla=Ninja&parola=test123&joc=Minecraft&mesaj=Vreau+sa+invat
```

Observă:
- fiecare casetă apare cu `name` și valoarea ei;  
- **parola se vede în adresă**!  

Site-urile reale trimit parolele altfel: nu le pun în adresă (folosesc metoda `post`) și le protejează pe un site cu `https`, adică cu lacăt în adresă. Pentru exercițiile noastre, **scriem doar parole de probă**. Mai târziu, în Modulul 5, vei învăța ca formularul să verifice datele.

---

## De făcut azi — „Clubul secret”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | O pagină cu un formular cu două casete de text, fiecare cu etichetă legată prin `for` și `id`, și un buton de trimitere |
| **Complet** | Minim + o casetă de parolă de probă, un `<textarea>`, butonul de ștergere, un `placeholder` și ce vezi în adresă după trimitere, notat într-un comentariu |

### Pasul 1 — Minim
Fă `index.html` cu un `<h1>` și un formular pentru **un club imaginar ales de tine** (de exemplu clubul de jocuri, de desen sau de fotbal).

- [ ] Folderul `Prenume_Nume_W2_L3` are `index.html` cu scheletul complet  
- [ ] Formularul are cel puțin două casete de text, fiecare cu etichetă legată prin `for` și `id`  
- [ ] Ai un buton `submit`, iar fiecare casetă are `name`  

### Pasul 2 — Complet
Îmbunătățești formularul:

- [ ] Ai o casetă `password` (cu parolă de probă), un `<textarea>` și butonul `reset`  
- [ ] Cel puțin un `placeholder` dă un exemplu  
- [ ] Ai apăsat „Trimite” și ai notat într-un comentariu ce apare în adresa paginii, după `?`, cu numele casetelor și valorile  
- [ ] Codul este indentat și fiecare grup de casete are un comentariu  

---

## Bonus ★★★ — Provocare: Formularul cu grupuri
*Doar dacă ai terminat Complet.*

Faci un formular mai bogat și mai ordonat.

- [ ] Adaugă un titlu mic cu `<h2>` pentru fiecare grup de întrebări (de exemplu „Despre tine” și „Despre club”)  
- [ ] Încearcă `<input type="text" size="40">` și vezi cum se schimbă lățimea  
- [ ] Adaugă o casetă `<input type="text" value="Ninja">` și explică ce face `value`  
- [ ] Deschide DevTools (**F12**; pe Mac Cmd + Option + I), fila **Elements**, și caută formularul: vezi cum este legată eticheta de casetă  

---

## Greșeli frecvente
1. **`for` diferit de `id`** — eticheta nu mai este legată de casetă.  
2. **Același `id` pe două casete** — fiecare `id` este unic.  
3. **Ai uitat `name`** — valoarea nu apare la trimitere.  
4. **Ai uitat `</textarea>`** — tot restul paginii intră în casetă.  
5. **Ai pus `/` la `<input>`** sau ai scris `</input>` — `input` nu are închidere.  
6. **Ai folosit `placeholder` în loc de etichetă** — eticheta trebuie să fie vizibilă tot timpul.  
7. **Ai scris o parolă reală în formular** — folosește doar o parolă de probă.  
8. **Ai pus butonul în afara formularului** — nu trimite nimic.  

---

## Recapitulare pe scurt
1. `<form>` învelește formularul.  
2. `<label for="x">` se leagă de `<input id="x">`.  
3. `type="text"` pentru text, `type="password"` pentru parolă.  
4. `<textarea>` este pentru mesaje lungi și are tag de închidere.  
5. `name` dă numele sub care se păstrează ce scrie vizitatorul.  
6. Butoane: `submit` trimite, `reset` șterge, `button` nu face nimic singur.  
7. Fără un loc de trimitere, pagina se reîncarcă și datele apar în adresă.

## Quiz scurt
- Cum legi o etichetă de o casetă?  
- Ce face `type="password"`?  
- Care este diferența dintre `submit` și `reset`?  
- De ce este important `name`?  
- De ce nu scriem parole reale în formularele de exercițiu?

## Temă
1. Fă un formular „Fișa unui jucător” pentru un jucător **imaginar**: poreclă, joc preferat, mesaj. Pune în el un buton de trimitere și unul de ștergere și salvează în `Prenume_Nume_W2_L3`.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — O valoare de început: `value`.**

```html
<label for="porecla">Porecla ta:</label>
<input type="text" id="porecla" name="porecla" value="Ninja">
```

Cu `value` caseta apare completată de la început, iar vizitatorul poate schimba textul.

**Acasă 2 — Casetă care nu se poate schimba: `readonly`.**

```html
<label for="club">Clubul:</label>
<input type="text" id="club" name="club" value="Clubul secret" readonly>
```

Cu `readonly` vizitatorul vede textul, dar nu îl poate modifica. Valoarea se trimite totuși odată cu formularul.

4. **Încă patru exerciții (B–E):**

**B — Ce vezi în adresă?** Completează formularul cu date inventate, apasă „Trimite” și copiază într-un comentariu ce apare în adresa paginii, după `?`. Marchează numele casetelor și valorile.

**C — Ce tip?** Pentru fiecare, alege `text`, `password` sau `textarea`: (1) porecla; (2) parola de probă; (3) povestea unei zile; (4) jocul preferat.

**D — Găsește greșelile.** Găsește **3 greșeli** în fiecare cod și repară greșelile:

```text
<form>
  <label for="jocuri">Jocul tău:</label>
  <input type="text" id="joc">
  <label for="mesaj">Mesaj:</label>
  <textarea id="mesaj" name="mesaj" rows="4" cols="30">
  <button type="submit">Trimite</button>
</form>
```

```text
<label for="nume">Numele:</label>
<input type="text" id="prenume" name="prenume">
```

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: la ce folosește eticheta `<label>` și de ce `for` trebuie să fie la fel cu `id`? De ce nu scriem parole reale în formularele de exercițiu?

## Ce urmează — Lecția 4
Formulare II: **alegeri**. Butoane rotunde, căsuțe bifate și liste de unde alegi, pentru un vot al sporturilor preferate.

---

## Răspunsuri
- **Quiz scurt:** (1) valoarea `for` din `<label>` este la fel cu `id` din `<input>`; (2) înlocuiește literele cu puncte, ca să nu le vadă cineva peste umăr; (3) `submit` trimite formularul, `reset` șterge ce ai scris în toate casetele; (4) `name` este numele sub care se trimite valoarea casetei (perechea nume = valoare); fără el valoarea nu apare; (5) parola apare în adresa paginii și poate fi văzută, deci scriem doar parole de probă.  
- **Tema, exercițiul C:** (1) `text`; (2) `password`; (3) `textarea`; (4) `text`.  
- **Tema, exercițiul D, primul cod:** (1) `for="jocuri"` nu se potrivește cu `id="joc"`; (2) caseta `joc` nu are `name`; (3) `<textarea>` nu este închis cu `</textarea>`.  
- **Tema, exercițiul D, al doilea cod:** `for="nume"` nu se potrivește cu `id="prenume"`; corect este `for="prenume"` (sau `id="nume"` și `name="nume"`).  
- **Tema, exercițiul E:** eticheta spune ce se scrie în casetă, iar `for` trebuie să fie la fel cu `id` ca să se lege; parolele reale nu se scriu pentru că parola apare în adresa paginii.  
- **Siguranță:** verificați că nimeni nu scrie parole sau date reale în exerciții.
