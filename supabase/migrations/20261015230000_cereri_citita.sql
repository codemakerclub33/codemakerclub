-- Cererile de contact: marcaj „citită” (separat de status). Cele deja tratate sunt marcate citite.
ALTER TABLE public.cereri_contact
  ADD COLUMN IF NOT EXISTS citita BOOLEAN NOT NULL DEFAULT false;

UPDATE public.cereri_contact SET citita = true WHERE status <> 'noua';
