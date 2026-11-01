# LECȚIA 9 — Stația mea meteo
### Doi senzori, min/max și medii
**Modulul 2 · Senzori**  
**Code Maker Club · Sensor Scout**

> Azi combini **doi senzori** (temperatură și lumină) într-o mică stație meteo cu raport în Serial Monitor.  
> Proiect: **„Stația mea meteo”** · `Prenume_Nume_A2_L09`

---

## Ce facem azi
La finalul orei ai **două proiecte**: **Stația meteo** (temperatură, lumină, minime și maxime, mesaje) și o **Stație cu reset și medie**, care are buton de resetare și netezește citirile. Stațiile meteo adevărate fac același lucru: măsoară, rețin extremele și calculează medii.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L8 · stare și variabile globale |
| 10–25 | Circuitul cu doi senzori |
| 25–50 | Minim · două funcții, un raport |
| 50–75 | **Proiectul 1** · min / max și mesaje |
| 75–110 | **Proiectul 2** · buton de resetare și media ultimelor 5 citiri |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme |

**Componente azi:** Arduino Uno · Breadboard · TMP36 · Photoresistor · Resistor 10 kΩ · LED · Resistor 220 Ω · **Pushbutton** · fire

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `float ultimele[5]` | **Vector**: 5 numere într-o singură variabilă | `float ultimele[5];` |
| `ultimele[idx] = t;` | Scrie în poziția `idx` din vector | `ultimele[idx] = t;` |
| `idx = (idx + 1) % 5` | Ține indexul între 0 și 4 (se întoarce la început) | `idx = (idx + 1) % 5;` |
| `for (int i = 0; i < nr; i++)` | Adună toate valorile din vector | `suma += ultimele[i];` |

---

## Pas cu pas

### 1) Circuit nou
`Prenume_Nume_A2_L09`

**Gata când:**  
- [ ] Proiectul nou are numele `Prenume_Nume_A2_L09`  

### 2) Conexiuni

| Piesă | Se conectează |
|-------|---------------|
| **TMP36** | 5V · semnal la **A1** · GND |
| **Fotorezistor** | 5V → fotorezistor → **A0** → rezistor 10 kΩ → GND |
| **LED** | pin **13** → 220 Ω → anod · catod → GND |

**Gata când:**  
- [ ] Toate firele sunt conectate exact ca în tabel  
- [ ] Am verificat de două ori GND și 5V înainte să pornesc simularea  

### 3) Minim — două funcții, un raport

```cpp
const int SENZOR_LUMINA = A0;
const int SENZOR_TEMP = A1;

float temperatura() {
  float volti = analogRead(SENZOR_TEMP) * 5.0 / 1023.0;
  return (volti - 0.5) * 100.0;
}

int lumina() {
  return map(analogRead(SENZOR_LUMINA), 0, 1023, 0, 100);
}

void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.print("Temperatura: ");
  Serial.print(temperatura(), 1);
  Serial.print(" C   Lumina: ");
  Serial.print(lumina());
  Serial.println(" %");
  delay(2000);
}
```

Fiecare senzor are **propria funcție**. `loop()` devine scurt și ușor de citit.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Simularea pornește și montajul face ce scrie în „Minim”  

### 4) Complet — min / max și mesaje

```cpp
const int SENZOR_LUMINA = A0;
const int SENZOR_TEMP = A1;
const int LED = 13;

float tMin = 100;
float tMax = -100;

float temperatura() {
  float volti = analogRead(SENZOR_TEMP) * 5.0 / 1023.0;
  return (volti - 0.5) * 100.0;
}

int lumina() {
  return map(analogRead(SENZOR_LUMINA), 0, 1023, 0, 100);
}

void setup() {
  pinMode(LED, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  digitalWrite(LED, HIGH);

  float t = temperatura();
  int l = lumina();

  if (t < tMin) tMin = t;
  if (t > tMax) tMax = t;

  Serial.println("--- RAPORT ---");
  Serial.print("Temperatura: ");
  Serial.print(t, 1);
  Serial.println(" C");
  Serial.print("Lumina: ");
  Serial.print(l);
  Serial.println(" %");

  Serial.print("Min / Max: ");
  Serial.print(tMin, 1);
  Serial.print(" / ");
  Serial.println(tMax, 1);

  if (l < 30) {
    Serial.println("Ce e afara: noapte");
  } else {
    Serial.println("Ce e afara: zi");
  }

  if (t < 15) {
    Serial.println("Simt: frig");
  } else if (t < 26) {
    Serial.println("Simt: placut");
  } else {
    Serial.println("Simt: cald");
  }

  digitalWrite(LED, LOW);
  delay(2000);
}
```

**Ce e nou**

- `if (t < tMin) tMin = t;` — fără acolade, merge pentru **o singură** instrucțiune.  
- `tMin` pornește de la 100 și `tMax` de la −100, ca prima citire să le înlocuiască sigur.  
- Variabilele **globale** (în afara funcțiilor) își păstrează valoarea între buclele `loop()`.

**Gata când:**  
- [ ] Codul complet se compilează fără erori  
- [ ] Simularea face tot ce scrie în „Complet”  

### 5) Interpretarea datelor

| Temperatură | Mesaj |
|-------------|-------|
| sub 15 °C | frig |
| 15–25 °C | plăcut |
| 26 °C sau mai mult | cald |

| Lumină | Mesaj |
|--------|-------|
| sub 30 % | noapte |
| 30 % sau mai mult | zi |

Poți schimba pragurile după ce simți tu că e „frig” sau „cald”.

### 6) Proiectul 2 — Buton de resetare
Adaugă un **buton** (un picior la pin **2**, piciorul diagonal la GND), care **șterge** minima și maxima. Dar atenție: `delay(2000)` ar face butonul să pară „mort” timp de 2 secunde. Înlocuiește-l cu **20 de pauze de 100 ms**, în care verifici butonul:

```cpp
const int RESET = 2;
```

În `setup()` adaugă `pinMode(RESET, INPUT_PULLUP);`, iar la sfârșitul `loop()` înlocuiește `delay(2000);` cu:

```cpp
  for (int i = 0; i < 20; i++) {
    if (digitalRead(RESET) == LOW) {
      tMin = 100;
      tMax = -100;
      Serial.println("Min / Max resetate");
    }
    delay(100);
  }
```

**Gata când:**  
- [ ] Butonul funcționează oricând, nu doar la fiecare 2 secunde  
- [ ] După apăsare, minima și maxima pornesc din nou de la temperatura curentă  

### 7) Media ultimelor 5 temperaturi
O citire singură poate sări. **Media** ultimelor 5 e mai calmă. Un **vector** ține ultimele 5 valori, iar `idx` arată unde scriem următoarea (se întoarce la 0 după 4).

În afara funcțiilor adaugă:

```cpp
float ultimele[5];
int idx = 0;
int nr = 0;
```

Apoi, în `loop()`, după ce ai citit `t`:

```cpp
  ultimele[idx] = t;
  idx = (idx + 1) % 5;
  if (nr < 5) nr++;

  float suma = 0;
  for (int i = 0; i < nr; i++) {
    suma += ultimele[i];
  }
  float medie = suma / nr;

  Serial.print("Media ultimelor ");
  Serial.print(nr);
  Serial.print(": ");
  Serial.print(medie, 1);
  Serial.println(" C");
```

Împărțim la `nr`, nu la 5, ca la început (cu mai puțin de 5 citiri) media să fie corectă.

**Gata când:**  
- [ ] Media apare în raport, lângă temperatura curentă  
- [ ] La prima citire media e egală cu temperatura, iar apoi se mișcă mai încet decât ea  

---

## Greșeli frecvente
1. **Valori amestecate** — senzorii sunt pe pinul greșit (A0 vs A1).  
2. **Min/Max greșite** — le-ai declarat în `loop`, nu global; se resetează la fiecare rundă.  
3. **Raport prea des** — lipsește `delay(2000)`.  
4. **Lumină negativă** — folosește `constrain` dacă ai calibrare proprie.  
5. **Apar semne ciudate în loc de `°`** — ecranul și Serial Monitor nu afișează mereu simbolul grad; scrie simplu „C”.  
6. **Butonul de resetare „întârzie”** — ai lăsat `delay(2000)` în loc de 20 de pauze de 100 ms.  
7. **Media e greșită la început** — împarți la 5 în loc de `nr`.

---

## De făcut azi — „Stația mea meteo”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Temperatură + lumină la 2 secunde |
| **Complet** | Minim + min/max + mesaje + LED de raport |
| **Proiectul 2** | Buton de resetare min / max + media ultimelor 5 temperaturi |

### Pasul 1 — Minim
- [ ] Funcțiile `temperatura()` și `lumina()`  
- [ ] Raport în Serial Monitor  

### Pasul 2 — Complet
- [ ] Min și max globale  
- [ ] Mesaje zi/noapte și frig/cald  
- [ ] Numele `A2_L09` e corect

### Pasul 3 — Proiectul 2
- [ ] Buton pe pin 2 care resetează minima și maxima  
- [ ] Butonul răspunde repede (20 de pauze de 100 ms)  
- [ ] Media ultimelor 5 temperaturi, cu `nr`

---

## Bonus ★★★ — Provocare: Alarma meteo
*Doar dacă ai terminat Proiectul 2.*

Stația te avertizează singură.

- [ ] Un LED **roșu** pe pin 12 și un mesaj de avertizare când **temperatura > 30 °C** sau **lumina < 10 %**  
- [ ] Raportul se scrie și în format **`temperatura;lumina`**, de exemplu `24.5;80`  
- [ ] Testezi **4 scenarii**: cald și lumină, cald și întuneric, rece și lumină, rece și întuneric, și notezi dacă alarma e corectă

## Recapitulare pe scurt
1. Funcții separate pentru fiecare senzor  
2. Variabilele **globale** rețin valori între ture  
3. Min/max se actualizează cu `if`  
4. Datele devin utile când le **interpretezi**  
5. Un vector și un index circular dau media ultimelor valori

## Pe placa reală *(opțional)*
Pentru exterior folosești o cutie ventilată, ferită de soare direct (care încălzește senzorul), cum fac stațiile meteo adevărate.

## Quiz scurt
- De ce `tMin` începe de la 100?  
- Ce e o variabilă globală?  
- Cum ai afișa „ploaie” dacă ai avea un senzor de apă?  
- De ce împărțim media la `nr` și nu la 5?

## Temă
Alege 3 informații pe care le-ai pune într-o stație meteo reală (ex. vânt, ploaie) și ce senzor ți-ar trebui.

---

## Ce urmează — Lecția 10
În **lecția 10** pui totul laolaltă într-un mini-proiect: o casă care se protejează singură.
