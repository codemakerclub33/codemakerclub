# LECȚIA 4 — Secțiunea de intrare (hero)
**Modulul 5 · Site complet: HTML + CSS + JavaScript · 2 ore**  
**Code Maker Club · Web Builder**

> Prima parte pe care o vede vizitatorul, fără să derulezi, se numește **hero** („secțiunea de intrare”). Are un titlu mare, o frază care spune despre ce este site-ul și un buton care duce undeva. Azi o construim cu un fundal degradat, text care se mărește odată cu ecranul și un buton frumos.  
> Proiect: **„Secțiunea de intrare”** · folder: `Prenume_Nume_W5` (continuăm în același folder)

---

## Obiectiv
La finalul orei, pagina `index.html` are sub antet o secțiune colorată, cu titlu mare, o frază și un buton care te duce în galerie.  
**Minim:** secțiune cu fundal colorat, titlu, o frază și un link-buton către `galerie.html`.  
**Ținta orei (Complet):** + fundal degradat (`linear-gradient`), titlu cu mărime adaptivă (`clamp`), text centrat și lățime limitată, buton cu efect la `:hover` și `:focus`, text care se citește bine și pe telefon.

## De ce contează
În câteva secunde, vizitatorul hotărăște dacă rămâne pe site. Titlul clar și butonul vizibil îl ajută să înțeleagă repede unde a ajuns și ce poate face.

---

## Siguranță înainte de toate
- Textul de pe fundal colorat trebuie să se **citească ușor**: litere albe pe fundal închis.  
- Butonul este un **link** (`<a>`), pentru că te duce în altă pagină. Un `<button>` este pentru acțiuni în aceeași pagină.  
- Nicio mișcare rapidă și nicio licărire.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare: gradient, `rem`, `clamp` |
| 10–30 | HTML-ul secțiunii (**Exemplul 1**) |
| 30–55 | Fundalul și textul (**Exemplul 2**) |
| 55–80 | Butonul (**Exemplul 3**) |
| 80–100 | Verificare pe ecrane diferite (**Exemplul 4**) |
| 100–115 | Testele (**Exemplul 5**) |
| 115–120 | Recap și temă |

---

## 1. HTML-ul secțiunii

### Exemplul 1 — Titlu, frază, buton

În `index.html`, în `<main>`, **înaintea** secțiunii existente, adaugă:

```html
<section class="hero">
  <div class="container">
    <h1>Bine ai venit în Clubul animalelor!</h1>
    <p>Aici descoperim animalele noastre preferate, ne uităm la poze și ne spunem părerea.</p>
    <a class="buton-cta" href="galerie.html">Vezi galeria</a>
  </div>
</section>
```

Scrie textele pentru **subiectul tău**. Apoi, în secțiunea de mai jos, care avea tot un `<h1>`, schimbă acel titlu în `<h2>` (de exemplu `<h2>Animalele noastre</h2>`). **O pagină are un singur `<h1>`**: titlul principal.

**Încearcă tu (15 min)**  
- [ ] Adaugă secțiunea `hero` cu textele tale  
- [ ] Schimbă al doilea `<h1>` în `<h2>`  
- [ ] Verifică în browser: titlul, fraza și linkul se văd, încă fără stil

---

## 2. Fundalul și textul

### Exemplul 2 — Degradé și mărime adaptivă

În `stil.css`, **înainte de blocul `@media`** de la sfârșitul fișierului, adaugă:

```css
/* ===== Hero ===== */
.hero {
  background: linear-gradient(135deg, var(--principala), #457b9d);
  color: white;
  text-align: center;
  padding: 4rem 0;
}

.hero h1 {
  margin: 0 0 1rem;
  font-size: clamp(1.8rem, 6vw, 3rem);
}

.hero p {
  max-width: 600px;
  margin: 0 auto 1.5rem;
  font-size: 1.1rem;
}
```

Pe rând:
- `linear-gradient(135deg, culoare1, culoare2)`: trecere lină de la o culoare la alta, în diagonală. Prima culoare vine din variabila ta.  
- `text-align: center`: tot textul din secțiune este la mijloc.  
- `padding: 4rem 0`: spațiu mare sus și jos, zero în lateral (marginile le face `.container`).  
- `clamp(1.8rem, 6vw, 3rem)` alege o mărime **între** un minim și un maxim, în funcție de lățimea ecranului. Ordinea este: **minim, preferat, maxim**.  
- `max-width: 600px` pe paragraf și `margin: 0 auto` îl centrează și îl face mai îngust, ca să se citească mai ușor.

**Încearcă tu (20 min)**  
- [ ] Pune regulile în `stil.css`  
- [ ] Schimbă a doua culoare din degradé cu una potrivită paletei tale  
- [ ] Mărește și micșorează fereastra: titlul își schimbă mărimea?  
- [ ] Verifică: se citește ușor textul alb pe fundal?

---

## 3. Butonul

### Exemplul 3 — Un link care arată ca un buton

```css
.buton-cta {
  display: inline-block;
  min-height: 44px;
  padding: 12px 24px;
  background-color: var(--accent);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.buton-cta:hover,
.buton-cta:focus {
  transform: translateY(-3px);
}
```

- `display: inline-block` îi permite să aibă `padding` și înălțime, dar rămâne pe același rând cu textul din jur.  
- `translateY(-3px)` ridică butonul cu 3 pixeli la `:hover` și `:focus`: se vede și cu mouse-ul, și cu tasta Tab.  
- `CTA` vine din engleză, *call to action*: „te îndemn să faci ceva”.

Clasa `buton-cta` o vom folosi și la butonul formularului, în lecția 7.

**Încearcă tu (15 min)**  
- [ ] Adaugă regulile  
- [ ] Apasă Tab până ajungi la buton: se ridică?  
- [ ] Dacă culoarea butonului este prea asemănătoare cu fundalul, schimbă culoarea butonului

---

## 4. Verificarea pe mai multe ecrane

### Exemplul 4 — Cele 3 mărimi

Deschide DevTools (F12) și testează la trei lățimi: **1200 px** (calculator), **768 px** (tabletă), **375 px** (telefon). Caută:

```text
□ Titlul nu iese din ecran și nu este tăiat
□ Fraza are rânduri scurte, ușor de citit
□ Butonul este suficient de mare pentru deget
□ Nu apare bară de derulare pe orizontală
□ Culoarea textului se vede bine pe fundal
```

Dacă pe telefon spațiul de sus și de jos este prea mare, adaugă, la regula `@media (max-width: 700px)` din lecția trecută:

```css
  .hero {
    padding: 2.5rem 0;
  }
```

Atenție: regula merge **în interiorul** acoladelor `@media`, lângă celelalte.

**Încearcă tu (15 min)**  
- [ ] Testează la 3 lățimi și bifează lista  
- [ ] Reglează spațiul de sus și de jos pe telefon

---

## 5. Testele

### Exemplul 5 — Lista de verificare a secțiunii

```text
□ Pagina are un singur <h1> (în hero), iar celelalte titluri sunt <h2>
□ Secțiunea are fundal degradat și text alb citibil
□ Titlul se adaptează la ecran (clamp)
□ Fraza este centrată și nu este prea lată
□ Butonul este un <a> cu href="galerie.html" și se ridică la :hover și :focus
□ Nu apar erori în consolă
□ Pe telefon totul încape pe lățime
□ Textele sunt fără greșeli de scriere
```

**Gata când:**  
- [ ] Toate punctele sunt bifate  
- [ ] Ai făcut o copie de siguranță a folderului

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Secțiunea de intrare” (obligatoriu)
`index.html` are `hero` cu titlu, frază și buton, cu textele și culorile tale, iar lista din Exemplul 5 este bifată.

### Exercițiul B — Îl faci al tău
Schimbă: direcția degradeului (`90deg`, `180deg`), mărimile din `clamp`, culoarea butonului și rotunjirea colțurilor. Notează ce s-a schimbat.

### Exercițiul C — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```css
.hero {
  background: linear-gradient(135deg #1d3557, #457b9d);
  padding: 4rem 0;
}
.hero h1 { font-size: clamp(3rem, 6vw, 1.8rem); }
.buton-cta { background-color: #ffe66d; color: white; }
```

### Exercițiul D — Explică cu cuvintele tale
Pe foaie: de ce butonul „Vezi galeria” este un `<a>` și nu un `<button>`? Ce face `clamp`? De ce o pagină are un singur `<h1>`?

**Gata când:**  
- [ ] `hero` arată bine pe calculator și pe telefon  
- [ ] Ai răspuns la exercițiile B–D

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Pune o imagine de fundal în hero, cu un strat închis deasupra, ca textul să se citească:

```css
.hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("imagini/g1.jpg");
  background-size: cover;
  background-position: center;
}
```
Calea din CSS se socotește față de fișierul `stil.css`, care este în același folder cu `imagini`.  
- [ ] Adaugă un al doilea buton (de exemplu „Scrie un mesaj”) cu altă culoare

---

## Greșeli frecvente
1. **Două `<h1>`** pe aceeași pagină.  
2. **`clamp` cu valorile în ordine greșită.** Ordinea este minim, preferat, maxim.  
3. **Lipsește virgula** între unghi și prima culoare din `linear-gradient`.  
4. **Text deschis pe fundal deschis** (se citește greu).  
5. **Butonul făcut din `<button>`** când de fapt duce în altă pagină.

## Recapitulare pe scurt
1. Hero este prima parte a paginii: titlu, frază, buton.  
2. `linear-gradient` face fundalul degradat.  
3. `clamp(min, preferat, max)` adaptează mărimea textului.  
4. Linkul poate arăta ca un buton cu `display: inline-block` și `padding`.  
5. Testăm la 3 lățimi de ecran.

## Quiz scurt
1. Care este ordinea valorilor în `clamp`?  
2. Câte `<h1>` are o pagină?  
3. Când folosim `<a>` și când `<button>`?  
4. Ce înseamnă CTA?

## Temă
Arată pagina unui adult și întreabă ce crede că poate face pe site doar din prima privire. Dacă nu a înțeles, schimbă titlul sau butonul. Salvează varianta în `Prenume_Nume_W5_L4`.

## Ce urmează — Lecția 5
Facem **carduri**: 6 căsuțe cu poză și text, așezate într-o grilă care se adaptează singură la lățimea ecranului.

---

## Răspunsuri pentru profesor
- **Quiz scurt:** (1) minim, preferat, maxim; (2) unul singur; (3) `<a>` când duce în altă pagină, `<button>` când face o acțiune în pagina curentă; (4) *call to action*, adică „te îndemn să faci ceva”.  
- **Exercițiul A:** pentru evaluare folosiți lista din Exemplul 5.  
- **Exercițiul B:** nu are răspuns unic; verificați că textul rămâne citibil.  
- **Exercițiul C:** (1) lipsește virgula după `135deg` (corect: `linear-gradient(135deg, #1d3557, #457b9d)`); (2) `clamp` are ordinea greșită (minimul 3rem este mai mare decât maximul 1.8rem; corect: `clamp(1.8rem, 6vw, 3rem)`); (3) text alb pe buton galben deschis: contrast prea slab (corect: text închis, de exemplu `#1d2d3a`).  
- **Exercițiul D:** linkul duce în altă pagină, iar butonul face o acțiune în pagina curentă; `clamp` alege o mărime între minim și maxim, după lățimea ecranului; un singur `<h1>` spune clar care este subiectul paginii.  
- **Notă pentru profesor:** la contrast, cereți elevului să se uite la ecran de la 1 metru: dacă nu se citește, culorile se schimbă. Pentru testul pe telefon, folosiți DevTools (modul dispozitiv), nu telefoanele elevilor, dacă nu aveți acordul părinților.
