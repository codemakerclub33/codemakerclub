-- PIN-ul elevului, vizibil doar pentru admin/profesor (prin server actions cu service role).
-- Tabel separat, cu RLS activ și fără politici: nici elevul, nici părintele nu pot citi direct.
CREATE TABLE IF NOT EXISTS public.cursanti_pin (
  cursant_id UUID PRIMARY KEY REFERENCES public.cursanti (id) ON DELETE CASCADE,
  pin TEXT NOT NULL CHECK (pin ~ '^[0-9]{4,6}$'),
  actualizat_la TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.cursanti_pin ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.cursanti_pin FROM anon, authenticated;
