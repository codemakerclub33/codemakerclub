/** Template + canale notificare părinte — Code Maker Club Focșani */

/** Folosit în email + WhatsApp (înscriere, oferte, ședințe epuizate) */
export function textPrezentaObligatorie(): string {
  return `Prezența la curs este obligatorie pe durata anului școlar.
În caz de absență, cursantul recuperează lecția pe platforma Code Maker Club Focșani.`
}

export function mesajSedinteEpuizate(prenumeCopil: string): string {
  return `Bună ziua!

Pentru ${prenumeCopil} a fost ultima ședință. Vă așteptăm în continuare cu următoarea ofertă:

Abonamente Code Maker Club Focșani (o ședință = 2 ore):
✅ 4 ședințe (8 ore) - 300 lei / 37,5 lei pe oră
✅ 9 ședințe (18 ore) - 600 lei / 33,3 lei pe oră
✅ 14 ședințe (28 ore) - 900 lei / 32,1 lei pe oră
✅ 19 ședințe (38 ore) - 1200 lei / 31,5 lei pe oră

🚀 Autodidact (acasă, pe platformă): 1 modul, 10 lecții, 20 de ore, acces 30 de zile - 200 lei / 10 lei pe oră
🏆 Bursa de continuitate: dacă reînnoiți în maxim 5 zile de la expirare, modulul 2 costă 150 lei, iar modulul 3 și următoarele 100 lei.

🎁 Bonus: +1 ședință gratuită (2 ore) pentru fiecare prieten recomandat care se înscrie la curs.
🎁 Bonus: un cadou surpriză la terminarea anumitor module, pentru cursanții de la atelier.

${textPrezentaObligatorie()}

Mulțumim!
Code Maker Club Focșani`
}

/** Mesaj scurt politică / înscriere — email + WhatsApp */
export function mesajPoliticaPrezenta(): string {
  return `Bună ziua!

${textPrezentaObligatorie()}

Mulțumim!
Code Maker Club Focșani`
}

export function subiectEmailSedinteEpuizate(prenumeCopil: string): string {
  return `Code Maker Club Focșani — ședințe epuizate pentru ${prenumeCopil}`
}

export function subiectEmailPoliticaPrezenta(): string {
  return `Code Maker Club Focșani — prezența la curs`
}

export function subiectAutodidactExpira(prenumeCopil: string): string {
  return `Code Maker Club Focșani — accesul lui ${prenumeCopil} expiră curând (bursă de continuitate)`
}

/** Email către părinte cu puțin timp înainte ca accesul Autodidact să expire. */
export function mesajAutodidactExpira(opts: {
  prenume: string
  modul: string
  dataSfarsit: string
  zileRamase: number
  pret: number
  limitaReducere: string
}): string {
  const zile = opts.zileRamase === 1 ? 'a mai rămas 1 zi' : `au mai rămas ${opts.zileRamase} zile`
  const bursa = 200 - opts.pret
  const oferta =
    bursa > 0
      ? `🏆 Bursa de continuitate
Dacă ${opts.prenume} continuă fără pauză, următorul modul costă ${opts.pret} lei în loc de 200 lei (bursă de ${bursa} lei), cu acces 30 de zile.
Bursa se păstrează dacă reînnoiți până pe ${opts.limitaReducere}; după această dată, prețul revine la 200 lei.`
      : `Următorul modul costă ${opts.pret} lei, cu acces 30 de zile.`
  return `Bună ziua!

Accesul Autodidact al lui ${opts.prenume} la modulul „${opts.modul}” expiră pe ${opts.dataSfarsit} (${zile}).

${oferta}

Pentru reînnoire, răspundeți la acest email sau scrieți-ne la contact@codemakerclub.ro.

Mulțumim!
Code Maker Club Focșani`
}

/** Stub: în producție → Resend / Supabase Edge Function */
export async function trimiteEmailSedinteEpuizate(opts: {
  emailParinte: string
  prenumeCopil: string
  sedinteRamase: number
}): Promise<{ ok: true; canal: 'email-stub'; preview: string }> {
  const body = mesajSedinteEpuizate(opts.prenumeCopil)
  console.info('[email-stub]', {
    to: opts.emailParinte,
    subject: subiectEmailSedinteEpuizate(opts.prenumeCopil),
    sedinteRamase: opts.sedinteRamase,
    body,
  })
  return { ok: true, canal: 'email-stub', preview: body }
}
