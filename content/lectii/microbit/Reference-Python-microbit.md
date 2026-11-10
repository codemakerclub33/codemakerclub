# Reference python.microbit.org — fișă centralizată

Adunat din paginile `Reference` ale editorului python.microbit.org, trimise pentru verificarea lecțiilor (M1 și M2, micro:bit Python).
Marcaje: **V2** = doar placa V2. **(neconfirmat)** = îl știm din MicroPython, dar nu l-am văzut în Reference.

Nume de panouri confirmate în Reference: `Variables`, `Images`, `Buttons`, `Loops`, `Logic`, `Comments`, `Lists (arrays)`, `Functions`, `Radio`, `Light level`, `Temperature`, `Compass`, `Sound`, `Microphone`, `Touch logo`, `Data logging`, `Pins`, `NeoPixels`, `Data types`, `String manipulation`, `Text input and output`, `Advanced maths`, `Maths`, `Gestures`, `Comments`.

---

## 1. Variabile și tipuri de date
- Variabila nu se declară: `a = 23`. Python alege tipul.
- Tipuri: `int` (`23`), `float` (`17.42`), `str` (`'micro:bit'`, între ghilimele), `bool` (`True`, `False`).
- `display.scroll(23)` și `display.show(23)` primesc numere. `display.scroll(True)` arată `True`.
- Text + număr: `'Score: ' + str(score)`. Fără `str()` apare `TypeError`.
- `type(a) is int` testează tipul. `str(type(a))` îl afișează ca text.
- Conversii: `str()` confirmat; `int()` apare în exemplele de rotunjire (`int(4.9)` dă `4`).

## 2. Imagini și afișaj (`Images`)
- `display.show(Image.HEART)`, `display.scroll("text")`, `display.clear()`.
- Imagine proprie: `Image("00300:03730:37973:03730:00300")` — 5 rânduri de câte 5 cifre `0`–`9`, separate cu `:`.
- Pixel: `display.set_pixel(x, y, luminozitate)`, `x` și `y` de la `0` la `4`, luminozitate `0`–`9`.
- Unele nume: `Image.HEART`, `Image.HEART_SMALL`, `Image.HAPPY`, `Image.SAD`, `Image.ASLEEP`, `Image.SNAKE`.
- Animații: `display.show([Image.HEART, Image.HEART_SMALL])`, cu `delay=` și `loop=`.
- **(neconfirmat)** `Image.ALL_ARROWS`, `Image.ALL_CLOCKS`.

## 3. Butoane (`Buttons`)
- `button_a.is_pressed()` — apăsat acum? (`True`/`False`).
- `button_a.was_pressed()` — a fost apăsat de la ultima verificare?
- `button_a.get_presses()` — de câte ori **(neconfirmat)**.
- A+B: `button_a.is_pressed() and button_b.is_pressed()`; Reference arată `is_pressed()` pentru combinație.
- **V2:** logo atingibil, `pin_logo.is_touched()` (vezi secțiunea 14).

## 4. Bucle (`Loops`)
- `while True:` — repetă la nesfârșit.
- `for i in range(5):` — repetă de un număr de ori (`0`…`4`).
- `for x in lista:` — parcurge elementele.
- `break` iese din buclă.
- `sleep(1000)` — pauză în milisecunde.

## 5. Logică (`Logic`)
- `if` / `elif` / `else`, cu două puncte și indentare.
- Comparații: `==`, `!=`, `<`, `>`, `<=`, `>=`.
- `and`, `or`, `not`. Ex.: `running = not running` schimbă un `True`/`False`.
- `if` în `if` (imbricat) merge.

## 6. Gesturi și accelerometru (`Gestures`)
- `accelerometer.was_gesture('shake')`, `.is_gesture('shake')`.
- Gesturi: `shake`, `freefall`, `3g`, `6g`, `8g`, `up`, `down`, `left`, `right`, `face up`, `face down`.
- `accelerometer.get_x()`, `get_y()`, `get_z()` — valori pozitive sau negative (miimi de g).
- **(neconfirmat)** `accelerometer.current_gesture()`.

## 7. Comentarii (`Comments`)
- `# text` — Python ignoră ce e după `#`.
- Mac: Option+3 pentru `#`. Comută comentariul pe linii selectate: Ctrl+/ sau Cmd+/.

## 8. Matematică (`Maths`, `Advanced maths`)
- `+ - * /`, `//` (împărțire întreagă), `%` (rest), `**` (putere).
- Prioritate: paranteze, apoi înmulțire/împărțire, apoi adunare/scădere.
- `abs(-5)`, `round(...)`, `int(4.9)` dă `4`.
- `from random import randint` → `randint(1, 6)`.
- `from math import *`: `pi`, `sqrt(25)`, `sin`/`cos`/`tan` (radiani), `radians()`, `log(10, 2)`.
- Binar și hexa: `0b11111111`, `bin(255)`, `0xFF`, `hex(255)`, operatori pe biți (`&`).

## 9. Liste (`Lists (arrays)`)
- Creare: `numbers = [1, 2, 3]`; pot avea tipuri amestecate.
- Index de la `0`: `numbers[0]`; atribuire: `numbers[1] = 1`.
- `append(x)` adaugă la sfârșit; `pop(i)` scoate elementul de la poziția `i`.
- `len(lista)`, `sort()`, `count(x)`.
- Index negativ (`lista[-1]`) merge în MicroPython **(neconfirmat în Reference)**.

## 10. Funcții (`Functions`)
- `def heart_wait():` … apel: `heart_wait()`.
- Parametri: `def image_wait(myImage):`; mai mulți parametri; valoare implicită: `def image_wait(myImage, delay=1000)`, apel cu `delay=3000`.
- `return`: `def convertCtoF(c): return c * 1.8 + 32`.
- Variabilă globală: se poate citi în funcție; se modifică doar cu `global count`.
- Variabilă locală: o variabilă creată în funcție există doar acolo (poate avea același nume cu una globală).
- Definește funcția **înainte** să o apeli.

## 11. Text (`String manipulation`)
- `+` lipește texte; `*` repetă (`'hello' * 3`).
- Felii: `'hello'[1:3]` dă `'el'`.
- `len()`, `upper()`, `lower()`, `replace('a', 'b')`, `strip()`, `lstrip()`, `rstrip()`.
- `find('i')` dă poziția; `-1` dacă nu e găsit. `count('i')` numără apariții.
- Teste: `islower()` ș.a.
- Formatare: `'Hi %s, %i puncte, %1.2f secunde' % (nume, scor, timp)`.
- `ord('a')` dă `97`; `chr(98)` dă `'b'`. Cifru Cezar: `chr(ord('a') + 5)`.
- **(neconfirmat)** `split(':')`.

## 12. Senzori
- **Lumină:** `display.read_light_level()`, `0` (întuneric) – `255` (lumină). LED-urile funcționează ca senzor; afișajul trebuie stins pentru citiri bune.
- **Temperatură:** `temperature()` în °C, senzor în procesor, de obicei puțin peste temperatura aerului.
- **Busolă:** `compass.heading()` în grade față de Nord, în sensul acelor de ceasornic, cu placa orizontală. La prima folosire cere calibrare (`TILT TO FILL SCREEN`); `compass.calibrate()` o cere la fiecare rulare. `compass.get_x()` măsoară câmpul magnetic în nT (poate fi negativ).
- **Microfon (V2):** `microphone.sound_level()` `0`–`255`; `microphone.current_event() == SoundEvent.LOUD` / `QUIET`; `microphone.set_threshold(SoundEvent.LOUD, 200)`. Microfonul e pe spate, cu LED pe față.

## 13. Sunet (`Sound`)
- V2 are difuzor. Alte plăci: căști sau buzzer între `pin 0` și `GND`.
- `import music`; `music.play(music.BA_DING)`; `wait=False` pentru a continua programul în timp ce sună.
- `music.set_tempo(bpm=120)`; note: `music.play(['c', 'd', 'e', 'c'])`; octavă: `'c3'`; durată: `'e4:4'`; pauză: `'r'`; bemol `'ab'`, diez `'a#'`.
- `music.pitch(440)` cântă până la `music.stop()`; sirenă: `for p in range(100, 1000): music.pitch(p); sleep(5)`.
- `speech.say('Hello')` (engleză). V2: `audio.play(Sound.GIGGLE)`, `set_volume(0–255)`, `speaker.off()`/`speaker.on()`.
- **(neconfirmat)** `music.pitch(frecvență, durată_ms)`.

## 14. Pini și logo tactil (`Pins`, `Touch logo`)
- Pinii `0`, `1`, `2` sunt GPIO. Tensiune maximă `3 V`.
- Atingere: `pin0.is_touched()` — trebuie atins și `GND` (mod resistiv). V2: `pin1.set_touch_mode(pin1.CAPACITIVE)` nu mai cere `GND`.
- Digital: `pin1.read_digital()` dă `0`/`1`. Analog: `pin1.read_analog()` dă `0`–`1023`.
- **V2:** logoul auriu `pin_logo.is_touched()` (capacitiv, fără `GND`).

## 15. Radio (`Radio`) — nu îl folosim în lecții (o placă pentru fiecare copil)
- `import radio`; `radio.on()`; `radio.off()`.
- `radio.config(group=23, power=0)` — grupa `0`–`255`, puterea `0`–`7`.
- `radio.send('hello')`; `message = radio.receive()` într-o buclă.
- Se testează doar cu două plăci (sau simulatorul cu două plăci).

## 16. Jurnal de date (`Data logging`) — V2
- `import log`; `log.set_labels('temperature', 'sound', 'light')`; timp: `timestamp=log.HOURS` (sau `MILLISECONDS`, `SECONDS`, `MINUTES`, `DAYS`, `NONE`).
- `log.add({'temperature': temperature()})` sau `log.add(temperature=temperature())`.
- Vezi datele în `MY_DATA.HTM` pe unitatea `MICROBIT`, sau descarcă CSV.
- `@run_every(s=30)` rulează o funcție la intervale (concept avansat).

## 17. NeoPixels (`NeoPixels`) — hardware în plus
- `import neopixel`; `np = neopixel.NeoPixel(pin0, 8)`.
- `np[0] = (63, 63, 0)`; **trebuie** `np.show()`. `np.fill((0, 0, 63))` (V2); `np.clear()`.
- Valorile sunt `0`–`255`; folosește valori mici (25% = `63`).
- `len(np)` dă lungimea benzii.

## 18. Consolă serială (`Text input and output`)
- Chrome sau Edge, placa conectată prin USB, buton `Show serial`.
- `print(display.read_light_level())` afișează pe calculator.
- `input('Cum te cheamă? ')` citește de la tastatură.
- Utilă la depanare; simulatorul nu garantează aceleași funcții.

---

## Ce am confirmat pentru lecții (scurt)
| Subiect | Concluzie |
|---|---|
| `scroll`/`show` cu numere | Merge fără `str()`; `str()` e obligatoriu doar la text + număr |
| Panouri de ajutor | `Images` (nu `Image`), `Lists (arrays)`, `Functions`, `Compass`, `Sound` |
| Lumină | `0`–`255`; `// 51` dă `0`–`5` |
| Busolă | Calibrare cu `TILT TO FILL SCREEN`; placa orizontală |
| Sunet | V2 are difuzor; V1 cere buzzer sau căști între `pin 0` și `GND` |
| Microfon | Doar V2 |
| Radio | Neutilizat în lecții |
| Neconfirmat | `split()`, `current_gesture()`, `Image.ALL_ARROWS`/`ALL_CLOCKS`, `get_presses()`, `open()`/`OSError`, `music.pitch` cu durată |
