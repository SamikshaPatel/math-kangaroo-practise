-- Grant SELECT and INSERT to authenticated role (was missing from initial migration)
grant select, insert on past_paper_attempts to authenticated;
