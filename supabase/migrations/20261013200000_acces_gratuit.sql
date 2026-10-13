-- Acces gratuit (invitații, ex. clasă de liceu): modul deschis 30 de zile, fără plată.
-- Se prelungește în multipli de 30 de zile. Nu intră în lanțul de reduceri Autodidact.

ALTER TABLE public.acces_autodidact
  DROP CONSTRAINT IF EXISTS acces_autodidact_pret_check;

ALTER TABLE public.acces_autodidact
  ADD CONSTRAINT acces_autodidact_pret_check CHECK (pret >= 0);

ALTER TABLE public.acces_autodidact
  ADD COLUMN IF NOT EXISTS gratuit BOOLEAN NOT NULL DEFAULT false;

ALTER TABLE public.acces_autodidact
  ADD COLUMN IF NOT EXISTS motiv TEXT;
