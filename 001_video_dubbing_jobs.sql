-- MelksTube: fila de pedidos manuais de dublagem
-- Execute no SQL Editor do Supabase depois de confirmar que public.videos.id é UUID.

create table if not exists public.video_dubbing_jobs (
  id uuid primary key default gen_random_uuid(),
  video_id uuid not null references public.videos(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  target_language text not null check (
    target_language in ('pt-BR','en','uk')
  ),
  status text not null default 'pending' check (
    status in ('pending','processing','ready','failed')
  ),
  error_message text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (video_id, target_language)
);

alter table public.video_dubbing_jobs enable row level security;

drop policy if exists "Users can view own dubbing jobs"
  on public.video_dubbing_jobs;
create policy "Users can view own dubbing jobs"
  on public.video_dubbing_jobs
  for select to authenticated
  using (auth.uid() = user_id);

drop policy if exists "Users can request own video dubbing"
  on public.video_dubbing_jobs;
create policy "Users can request own video dubbing"
  on public.video_dubbing_jobs
  for insert to authenticated
  with check (
    auth.uid() = user_id
    and exists (
      select 1
      from public.videos v
      where v.id = video_id
        and v.user_id = auth.uid()
    )
  );

create index if not exists video_dubbing_jobs_status_created_idx
  on public.video_dubbing_jobs(status, created_at);
create index if not exists video_dubbing_jobs_video_idx
  on public.video_dubbing_jobs(video_id);
