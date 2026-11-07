# Idei de proiecte micro:bit Python (bancă de idei)

Doar notate, pentru discuții viitoare. Nu sunt încă în lecții. Lista vine de la utilizator (7 nov 2026).

## 1. Începători (1–10)
1. **Inimă care bate:** o animație simplă pe ecran folosind imagini predefinite (`Image.HEART`) și pauze active (`sleep`).
2. **Insignă cu nume animată:** afișarea numelui copilului în buclă (`display.scroll()`).
3. **Indicator de dispoziție (Mood Badge):** schimbarea feței afișate (fericit/trist) la apăsarea butoanelor A sau B.
4. **Zar digital:** generarea unui număr aleatoriu de la 1 la 6 când micro:bit-ul este scuturat (`accelerometer.was_gesture('shake')`).
5. **Numărătoare inversă:** un cronometru vizual de la 9 la 0, util pentru jocuri sau spălatul pe dinți.
6. **Felicitare de zi de naștere:** o animație cu un tort și un text derulant care urează „La mulți ani!”.
7. **Piatra, Foarfeca, Hârtia:** alegerea unei imagini aleatorii (piatră, foarfecă sau hârtie) la scuturarea plăcuței.
8. **Monedă virtuală (Cap sau Pajură):** proiect bazat pe probabilitate matematică folosind funcția `random.choice()`.
9. **Creator de pixeli (Artă pe LED-uri):** aprinderea unui singur LED de pe matrice și mutarea lui folosind butoanele.
10. **Afișaj cu pictograme (Emoji Box):** un program care rulează fețe amuzante și animale la apăsarea combinată a butoanelor (A+B).

## 2. Intermediari — senzori integrați: lumină, temperatură, mișcare (11–20)
11. **Alarmă anti-hoți pentru sertar:** detectează lumina când sertarul este deschis și afișează o alertă (`display.read_light_level()`).
12. **Termometru digital:** citește temperatura camerei și o afișează în grade Celsius (`temperature()`).
13. **Indicator de febră / temperatură extremă:** sună o alertă sonoră dacă temperatura depășește 30 de grade.
14. **Busolă digitală:** folosește magnetometrul pentru a arăta dacă ești orientat spre Nord (N), Sud (S), Est (E) sau Vest (V).
15. **Pedometru simplu (numărător de pași):** incrementarea unei variabile de fiecare dată când este detectat un pas prin gestul shake.
16. **Nivelă cu bulă de aer (Spirit Level):** folosește accelerometrul pe axele X și Y pentru a centra un punct luminos pe ecran.
17. **Lumină de veghe automată:** ecranul LED se aprinde la intensitate maximă doar când senzorul detectează întuneric în cameră.
18. **Detector de cădere liberă:** afișează un mesaj de panică sau emite un sunet dacă micro:bit-ul este scăpat din mână (`was_gesture('freefall')`).
19. **Detector de postură corectă:** plăcuța atașată de haine scoate un sunet dacă cel mic se apleacă prea mult în față.
20. **Ceas de buzunar (Timer):** un cronometru pornit cu butonul A și oprit cu butonul B, util pentru testarea reflexelor.

## 3. Audio și sunete — disponibile pe micro:bit V2 (21–30)
21. **Jukebox portabil:** schimbarea melodiilor predefinite (`music.PRELUDE`, `music.ENTERTAINER`) prin gesturi.
22. **Instrument muzical „Theremin”:** modificarea frecvenței sunetului generat în funcție de înclinarea plăcuței.
23. **Alarmă de zgomot în cameră:** senzorul de sunet aprinde un LED roșu dacă copiii vorbesc prea tare.
24. **Metronom pentru muzică:** emite un sunet regulat (bip) al cărui ritm (BPM) poate fi mărit sau micșorat din butoane.
25. **Mesaje în codul Morse:** convertirea apăsărilor scurte și lungi în sunete sau text.
26. **Detector de aplauze:** aprinde o lumină sau o animație pe ecran doar atunci când detectează un sunet puternic și brusc.
27. **Pian de jucărie:** conectarea unor fire cu cleme crocodil la pinii 0, 1 și 2 pentru a reda note muzicale diferite când sunt atinși.
28. **Robot vorbitor:** utilizarea modulului de sinteză vocală din Python pentru a face micro:bit-ul să rostească cuvinte în engleză.
29. **Casieră de magazin (Scanner sonor):** emite un sunet specific de „bip” de fiecare dată când simte o schimbare de lumină (simulând scanarea unui produs).
30. **Cutie muzicală secretă:** cântă o melodie doar atunci când cutia în care este ascuns micro:bit-ul este deschisă la lumină.

## 4. Jocuri interactive — logică și reflexe (31–40)
31. **Testul de reflexe (Reaction Timer):** așteaptă un semnal vizual și măsoară în milisecunde cât de repede apasă copilul butonul.
32. **Evită obstacolul (Crashy Bird / Flappy Bird):** un joc simplu unde controlezi un punct luminos și trebuie să eviți pereții care cad.
33. **Prinde punctul căzător:** un LED cade de sus, iar jucătorul trebuie să poziționeze o platformă la baza ecranului pentru a-l prinde.
34. **Animal de companie virtual (Tamagotchi):** trebuie să „hrănești” animalul (butonul A) și să te joci cu el (scuturare) ca să nu devină trist.
35. **Labirint cu înclinare:** ghidează un punct luminos prin labirint înclinând fizic plăcuța la stânga și la dreapta.
36. **Găsește comoara ascunsă:** joc în doi în care ecranul clipește mai repede pe măsură ce te apropii de o zonă magnetică (folosind busola).
37. **Jocul de memorie (Simon Says):** micro:bit afișează o secvență de litere sau lumini (A sau B), iar copilul trebuie să o repete corect.
38. **Ghicește numărul:** plăcuța alege un număr secret, iar jucătorul folosește butoanele pentru a tasta o variantă; ecranul spune dacă e „prea mare” sau „prea mic”.
39. **Clicker Counter Speed Challenge:** câte apăsări de buton poți strânge în exact 10 secunde?
40. **Adevăr sau Provocare:** plăcuța afișează o săgeată rotativă pe ecran, indicând la întâmplare spre persoana care trebuie să răspundă.

## 5. Avansate — radio, IoT și robotică (41–50)
41. **Walkie-Talkie prin text (Radio):** trimiterea de mesaje secrete de pe un micro:bit pe altul folosind antenele radio integrate.
42. **Semafor inteligent:** sincronizarea a două plăcuțe prin radio pentru a simula un sistem corect de semafoare interconectate.
43. **Sistem de udare automată a plantelor:** conectarea unui senzor de umiditate din sol și a unei mini-pompe de apă la pini.
44. **Teleghidă pentru roboți:** un micro:bit trimite comenzi prin radio (în funcție de înclinare) către un alt micro:bit montat pe o mașinuță robot.
45. **Casă inteligentă (Smart Home):** controlul unui mini-servomotor pentru a deschide o ușă din carton când se apasă codul corect.
46. **Urmăritor de linie (Line Follower):** programarea unei mașinuțe cu senzori infraroșu să urmărească o bandă neagră lipită pe podea.
47. **Colector de date meteo (Data Logging):** salvarea temperaturii din oră în oră în memoria plăcuței și descărcarea datelor pe calculator sub formă de grafic.
48. **Poartă de fotbal inteligentă:** un senzor de lumină montat pe linia porții detectează când mingea trece și modifică scorul pe ecran.
49. **Seif cu alarmă laser:** folosirea unui laser de jucărie îndreptat spre senzorul de lumină; dacă raza este întreruptă, pornește o alarmă sonoră de efracție.
50. **Sistem de votare wireless:** mai mulți copii folosesc micro:bit-uri pentru a trimite voturi (A sau B) către o plăcuță centrală care calculează rezultatele totale.

## Note de verificare (de discutat, nu s-a schimbat nimic)
- Proiectele 21–30 cer micro:bit V2 (sunet, microfon); 27 folosește pinii cu cleme crocodil.
- 28 (vorbire) folosește modulul `speech` din MicroPython.
- 43, 45, 46 cer componente în plus (senzor de umiditate, servo, mașinuță cu senzori).
- 44 (teleghidă) cere o mașinuță robot.
- 47 (data logging) merge doar pe V2.
