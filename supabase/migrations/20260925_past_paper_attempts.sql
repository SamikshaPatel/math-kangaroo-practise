-- Past paper attempts table
-- Stores scored attempts for the official Math Kangaroo past papers (2009-2025)

create table if not exists past_paper_attempts (
  id           uuid        default gen_random_uuid() primary key,
  kid_id       uuid        references kids(id) on delete cascade not null,
  year         integer     not null,
  grade        text        not null check (grade in ('ecolier','benjamin')),
  correct      integer     not null default 0,
  wrong        integer     not null default 0,
  skipped      integer     not null default 0,
  points       integer     not null default 0,
  total        integer     not null default 24,
  answers      jsonb,
  attempt_num  integer     not null default 1,
  created_at   timestamptz default now() not null
);

-- Row Level Security
alter table past_paper_attempts enable row level security;

-- Kids can read/insert their own attempts (kid_id = their auth uid)
create policy "past_paper_attempts_kid_select" on past_paper_attempts
  for select using (kid_id = auth.uid());

create policy "past_paper_attempts_kid_insert" on past_paper_attempts
  for insert with check (kid_id = auth.uid());

-- Index for fast per-kid lookups
create index if not exists past_paper_attempts_kid_idx on past_paper_attempts(kid_id);
create index if not exists past_paper_attempts_year_grade_idx on past_paper_attempts(year, grade);
