-- Notificare email către părinte înainte să expire un acces Autodidact (trimisă o singură dată per acces).

ALTER TABLE public.notificari_email
  DROP CONSTRAINT IF EXISTS notificari_email_tip_check;

ALTER TABLE public.notificari_email
  ADD CONSTRAINT notificari_email_tip_check
  CHECK (tip IN ('sedinte_epuizate', 'autodidact_expira'));

ALTER TABLE public.notificari_email
  ADD COLUMN IF NOT EXISTS acces_id UUID REFERENCES public.acces_autodidact (id) ON DELETE CASCADE;

-- Un singur email de expirare per acces (protecție împotriva trimiterii repetate)
CREATE UNIQUE INDEX IF NOT EXISTS notificari_autodidact_un_acces
  ON public.notificari_email (acces_id)
  WHERE tip = 'autodidact_expira' AND acces_id IS NOT NULL;
