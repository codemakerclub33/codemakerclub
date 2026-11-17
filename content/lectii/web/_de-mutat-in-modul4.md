# Conținut scos din Modulul 3 (CSS), de reluat mai târziu

Notițe: blocuri scoase ca să ușurăm lecțiile din M3. Nu sunt servite în aplicație (nu au prefix `L<n>-`).

## Din L2 (Culori și fundaluri)
- `opacity` (față de `rgba()`: face transparent tot elementul, inclusiv textul). Notă: `opacity` se introduce în L8, pentru apariția lină
- `background-image: url(...)`, `background-repeat`, `background-size: cover`, `background-position: center`
- Text citibil peste o imagine: panou cu `rgba()` (`min-height: 100vh`, `margin: 40px auto`)
- `hsl()` (Acasă 1 vechi)
- `border-image` cu `linear-gradient` (Acasă 2 vechi)

## Din L3 (Text și fonturi)
- `text-shadow` (umbra textului)
- `text-align: justify` și `right` în exemple (justify rămâne ca „Acasă 2”)
- `font-weight` cu numere (100–900), grupul `cursive`
- `text-transform: capitalize`, `text-decoration: line-through` / `underline`
- `word-spacing`
- Coloana de citit cu `max-width` + `margin: 0 auto` (se explică în L4)
- Mini-proiectul „Povestea cu litere frumoase” (pagină separată cu poveste)

## Din L4 (Cutia fiecărui element)
- `width` / `height` / `min-height` fixe (rămâne doar `max-width`)
- `padding` / `margin` pe o singură latură (`padding-left` etc.) și `border-bottom`; `dashed`, `dotted`
- `display: block / inline / inline-block` (inline-block rămâne în Bonus; block/inline se explică în L5)
- Cercuri cu `border-radius: 50%`
- Link făcut buton (`display: inline-block; padding; border-radius`)
- Mini-proiectul „Cartonașe de joc”

## Din L5 (Flexbox)
- `flex-direction: row-reverse` / `column-reverse`
- `justify-content: space-around` și `space-evenly`
- `gap` cu două valori (`10px 20px`)
- `flex: 1 1 250px` / `flex-basis`: carduri care se adaptează (rămâne `flex: 1` în Bonus)
- Rândul de carduri care se adaptează
- Mini-proiectul „Clubul animalelor: meniu și carduri pe rând”

## Din L6 (Grid și position)
- `grid-column: span N`, `grid-row`, `grid-auto-rows` (span rămâne în Bonus)
- `position: relative` și `absolute` (insigna în colț); `position: fixed` rămâne doar ca buton „Sus” în Bonus
- `z-index` pe mai multe straturi suprapuse (rămâne doar pentru meniul sticky)
- `auto-fit` / `minmax` (grilă care se adaptează singură)
- Mini-proiectul „Galeria de jocuri”

## Din L7 (Hover și tranziții)
- `transform: scale()` și `rotate()` (scale rămâne doar în Bonus, pe imagine)
- `:nth-child(even/odd)` (rămâne în Bonus pentru tabel)
- `cursor: pointer` pe elemente care nu sunt linkuri
- `:focus-visible`, `outline` personalizat
- Mini-proiectul „Butoane și cărți vii”

## Din L8 (Animații)
- Rotire (cerc de încărcare), săritură (minge), pulsare cu `scale`
- `steps()` (efect de scris la mașină)
- `animation-play-state` și `animation-direction` (rămân doar în Bonus)
- Apariția „una după alta” cu `:nth-child` (se face cu id-uri)
- Mini-proiectul „Totul în mișcare”

## Din L9 (Adaptare la telefon)
- `clamp()`, `vw` (rămân doar în Bonus)
- `auto-fit` / `minmax` (rămâne doar în Bonus)
- `min-height: 44px` / reguli detaliate pentru butoane
- `@media` pentru tabletă (rămâne în Bonus), `orientation`
- Mini-proiectul „Site-ul pe orice ecran”

## Scoase la a doua rundă (piese noi de HTML în lecții)
- **L5:** `gap` și `flex-wrap` au fost unite într-un singur exemplu (Exemplul 5), ca să încapă poza lângă text.
- **L6:** `gap` a fost unit cu `fr`/`repeat`; `grid-column` a rămas separat; coloana din stânga (grilă în grilă) e piesă nouă.
- **L7:** `:active` și lista din `transition` au fost unite; `cursor: pointer` scos; `transform` + umbra au fost unite într-un exemplu.
- **L8:** titlul care coboară (`coboara`) scos; `animation-direction: alternate` apare acum doar la personajul din banner.
- **L9:** textul/spațiul și butoanele pentru degete au fost unite într-un singur exemplu.
