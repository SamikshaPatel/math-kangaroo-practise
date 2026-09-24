-- ─────────────────────────────────────────────────────────────
-- Math Kangaroo Practice — Supabase Schema
-- Run this in Supabase SQL Editor
-- ─────────────────────────────────────────────────────────────

-- Kids profiles (linked to Supabase auth users)
create table public.kids (
  id          uuid primary key default gen_random_uuid(),
  auth_id     uuid references auth.users(id) on delete cascade,
  name        text not null unique,
  color       text not null default '#7c3aed',
  is_admin    boolean not null default false,
  created_at  timestamptz default now()
);

-- Completed quiz attempts
create table public.attempts (
  id               uuid primary key default gen_random_uuid(),
  kid_id           uuid not null references public.kids(id) on delete cascade,
  grade            text not null,
  sub              text not null,
  attempt_num      integer not null default 1,
  answers          jsonb not null,
  correct_count    integer not null default 0,
  total_questions  integer not null default 50,
  started_at       timestamptz,
  completed_at     timestamptz default now()
);

-- In-flight session progress (resume support)
create table public.progress (
  id            uuid primary key default gen_random_uuid(),
  kid_id        uuid not null references public.kids(id) on delete cascade,
  grade         text not null,
  sub           text not null,
  answers       jsonb not null,
  checked       jsonb not null,
  attempt_id    uuid references public.attempts(id),
  last_updated  timestamptz default now(),
  unique(kid_id, grade, sub)
);

-- ─────────────────────────────────────────────────────────────
-- Row Level Security
-- ─────────────────────────────────────────────────────────────
alter table public.kids     enable row level security;
alter table public.attempts enable row level security;
alter table public.progress enable row level security;

-- Helper: is the current user an admin?
create or replace function public.is_admin()
returns boolean language sql security definer as $$
  select exists (
    select 1 from public.kids
    where auth_id = auth.uid() and is_admin = true
  );
$$;

-- ── kids policies ──
create policy "kids: read own or admin reads all"
  on public.kids for select
  using (auth.uid() = auth_id or public.is_admin());

create policy "kids: admin can insert"
  on public.kids for insert
  with check (public.is_admin());

create policy "kids: admin can update"
  on public.kids for update
  using (public.is_admin());

create policy "kids: admin can delete"
  on public.kids for delete
  using (public.is_admin());

-- ── attempts policies ──
create policy "attempts: read own or admin reads all"
  on public.attempts for select
  using (
    kid_id = (select id from public.kids where auth_id = auth.uid())
    or public.is_admin()
  );

create policy "attempts: insert own"
  on public.attempts for insert
  with check (
    kid_id = (select id from public.kids where auth_id = auth.uid())
  );

create policy "attempts: update own"
  on public.attempts for update
  using (
    kid_id = (select id from public.kids where auth_id = auth.uid())
  );

-- ── progress policies ──
create policy "progress: read own or admin reads all"
  on public.progress for select
  using (
    kid_id = (select id from public.kids where auth_id = auth.uid())
    or public.is_admin()
  );

create policy "progress: insert own"
  on public.progress for insert
  with check (
    kid_id = (select id from public.kids where auth_id = auth.uid())
  );

create policy "progress: update own"
  on public.progress for update
  using (
    kid_id = (select id from public.kids where auth_id = auth.uid())
  );

create policy "progress: delete own"
  on public.progress for delete
  using (
    kid_id = (select id from public.kids where auth_id = auth.uid())
  );
