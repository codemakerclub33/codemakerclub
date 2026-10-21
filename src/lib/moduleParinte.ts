/**
 * Prezentare scurtă a fiecărui modul, scrisă pentru părinți (fără termeni tehnici inutili).
 * Cheia este id-ul modulului din mockData. Modulele fără text nu afișează nimic.
 */
export const descriereModulParinte: Record<string, string> = {
  // Python
  m6: 'Copilul face cunoștință cu Python și scrie primele programe: le dă nume și valori, face calcule, pune întrebări utilizatorului și îl lasă pe calculator să decidă. La final creează singur un generator de povești.',
  m7: 'Copilul învață să repete o acțiune de multe ori, să țină informații în liste și într-o agendă și să-și împartă programele în bucăți mici, reutilizabile. Proiectul final este un joc în care calculatorul alege un număr, iar copilul îl ghicește.',
  m8: 'Copilul desenează cu cod: formele, culorile, spiralele, casa, floarea și mandalele apar pe ecran din instrucțiuni. Apoi controlează desenul cu tastatura și cu mouse-ul, face o cursă de broscuțe și creează o galerie de artă proprie.',
  m40: 'Copilul construiește jocuri adevărate: personaje care se mișcă, monede de strâns, scor, vieți și inamici, cu un record care se salvează. Își face propriul joc și îl prezintă la final într-o mică expoziție.',

  // C++
  m1: 'Copilul învață bazele programării în C++: cum păstrează programul informații, cum face calcule și cum ia decizii. Modulul se termină cu un mini-proiect în care folosește tot ce a învățat.',
  m2: 'Copilul învață să repete o acțiune de multe ori fără să o scrie de fiecare dată și să lucreze cu liste de numere: le parcurge, caută în ele și le sortează. Modulul se încheie cu un catalog de note făcut chiar de el.',
  m14: 'Copilul învață să împartă programul în bucăți mici cu nume (funcții), să lucreze cu text și să rezolve probleme cu numere, de la cifre și divizori până la numere prime. Învață și să caute și să repare greșelile din cod.',
  m15: 'Copilul învață să salveze date în fișiere, să grupeze informații despre obiecte și să facă meniuri. Apoi alege și construiește un proiect propriu: un joc, un magazin sau un quiz, pe care îl prezintă la final.',
  m34: 'Copilul construiește pas cu pas un joc de aventură în consolă, cu hartă, camere, obiecte, monștri, magazin și misiuni. Jocul se poate salva și reîncărca, iar la final copilul îl prezintă.',

  // Arduino
  m3: 'Copilul construiește primele circuite adevărate cu Arduino: aprinde LED-uri, face un semnalizator de bicicletă, o trecere de pietoni, o sonerie și chiar un pian cu patru clape. Învață cum se leagă firele și cum le comandă programul.',
  m4: 'Copilul învață cum „simte” Arduino lumea: lumină, căldură, distanță, mișcare și umiditatea pământului. Construiește o veioză automată, un termometru, un senzor de parcare, o alarmă și o mică stație meteo.',
  m35: 'Copilul învață să afișeze mesaje pe un ecran, să miște un motoraș servo și să comande lucruri cu butoane și cod. Construiește o bariera automată, un radar, un seif cu cod și o telecomandă.',
  m36: 'Copilul pornește de la o idee, o desenează ca schemă și o transformă într-un proiect complet: o casă inteligentă, un joc de reflexe sau un robot care ocolește obstacolele. La final își prezintă lucrarea într-o expoziție.',

  // Blender
  m5: 'Copilul învață să se miște în spațiul 3D din Blender și să creeze forme simple: un om de zăpadă, o căsuță din cuburi, cu culori, lumini și o primă imagine finală. Modulul se termină cu o mică scenă proprie.',
  m37: 'Copilul învață să modeleze obiecte mai complicate, trăgând și modelând forme: un turn de castel, un robot, o cană, dealuri și un fluture. La final construiește o rachetă în stil low-poly.',
  m38: 'Copilul descoperă unelte care fac modelarea mai repede, pentru fructe rotunde, garduri, scări, cufere și brânză cu găuri. Învață și culori, texturi și lumini, apoi construiește o cameră 3D proprie.',
  m39: 'Copilul face proiecte 3D complete: un personaj cu corp, față și culori și o insulă plutitoare cu lumini și atmosferă. Își alege și un proiect final, pe care îl prezintă într-o expoziție.',

  // HTML, CSS, JavaScript
  m9: 'Copilul învață cum se face o pagină web: titluri, texte, liste, linkuri, imagini și culori. La final construiește mai multe pagini legate între ele, cu o pagină despre el.',
  m42: 'Copilul face pagini mai bogate, cu tabele, formulare cu verificare, sunet, video și hărți. La final construiește o fișă despre animalul lui preferat.',
  m10: 'Copilul învață să dea stil paginilor: culori, fonturi, așezare pe pagină, efecte la trecerea mouse-ului și animații. Învață și cum să arate bine paginile pe telefon.',
  m11: 'Copilul învață primele noțiuni de JavaScript: să facă calcule, să ia decizii, să repete acțiuni și să lucreze cu liste și obiecte. Apoi face pagina să reacționeze la clicuri și la ce scrie utilizatorul.',
  m43: 'Copilul construiește de la zero un site complet cu mai multe pagini: meniu, galerie cu poze mărite, pagină de contact cu verificare și mod întunecat. La final îl testează pe telefon și îl prezintă.',
  m44: 'Copilul construiește șapte jocuri care merg în browser: un joc cu monștri, un clicker, Simon spune, Cuvântul zilei, un dinozaur care sare și o păsărică zburătoare. La final le adună într-o colecție proprie, cu recorduri.',
  m45: 'Copilul află ce este inteligența artificială, cum învață din exemple, de ce mai greșește și cum o folosește în siguranță. Lucrează cu jocuri, discuții și foi de lucru. La final face propriul „Ghid despre AI”.',

  // Robotică LEGO WeDo 2.0
  m12: 'Copilul descoperă robotica cu LEGO WeDo 2.0: construiește modele și le dă viață cu motoare și senzori, folosind programare cu blocuri. Face un vehicul, un ventilator și o creatură care reacționează la ce vede și simte.',
  m13: 'Copilul construiește roboți mai avansați: un braț care ridică, o barieră automată, o alarmă și un robot care sortează. Lucrează și în echipă la o provocare cu pistă, apoi își prezintă proiectul final.',

  // micro:bit (blocuri)
  m21: 'Copilul învață să programeze placa micro:bit cu blocuri colorate: imagini pe LED-uri, butoane, mișcare și senzori de lumină și temperatură. Construiește un seif secret și o insignă inteligentă.',
  m22: 'Copilul face proiecte în care mai multe plăci micro:bit comunică prin radio: un panou de comandă, o vânătoare de comori „cald–rece” și o stație meteo la distanță. Modulul se încheie cu o expoziție.',

  // micro:bit (Python)
  m23: 'Copilul trece de la blocuri la Python pe placa micro:bit: scrie cod pentru imagini, butoane, mișcare și radio. Învață cum se traduce ce știa în cod scris.',
  m41: 'Copilul construiește proiecte mai mari în Python pe micro:bit: un pian de buzunar, o busolă digitală, un labirint pe care îl înclini și mesaje cu cod. Își salvează recordurile și își prezintă proiectul la final.',

  // Roblox Studio
  m24: 'Copilul învață să construiască în Roblox Studio: forme, materiale, culori, un punct de start și un final. Creează o lume de tip Obby, cu platforme și puncte de control, fără cod încă.',
  m25: 'Copilul scrie primele scripturi în Roblox: învață ce face fiecare tip de script și cum reacționează lumea la atingere și la clic. La final face o ușă sau o monedă care funcționează.',
  m26: 'Copilul adaugă logica unui joc: scor pentru fiecare jucător, scor pe ecran, puncte de control, cădere și revenire, cronometru sau vieți. Învață și de ce serverul decide ce e permis, pentru siguranța jocului.',
  m27: 'Copilul termină un joc Roblox complet: salvează date, adaugă inamici sau un magazin, lumini, sunete și interfață. Îl testează cu colegii, repară greșelile și îl pregătește de publicare, apoi îl prezintă.',
}
