-- Add Grade 7-8 (Kadett), Grade 9-10 (Junior), Grade 11-12 (Student) to past_paper_attempts
-- Drops the old CHECK constraint and replaces it with one that includes the three new grade levels.

alter table past_paper_attempts
  drop constraint if exists past_paper_attempts_grade_check;

alter table past_paper_attempts
  add constraint past_paper_attempts_grade_check
  check (grade in ('ecolier','benjamin','kadett','junior','student'));
