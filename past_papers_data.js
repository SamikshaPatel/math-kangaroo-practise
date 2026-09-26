// Past Math Kangaroo Papers — answer keys and metadata
// 24-question papers (Écolier/Benjamin): Q1-8 = 3pts, Q9-16 = 4pts, Q17-24 = 5pts
// 30-question papers (Kadett/Junior/Student): Q1-10 = 3pts, Q11-20 = 4pts, Q21-30 = 5pts

const PAST_PAPERS_DATA = {
  2009: {
    ecolier:  { pdf: 'papers/2009_Ecolier.pdf',  questions: 24, answers: ['E','E','B','B','B','C','D','D','A','D','B','E','B','D','B','E','B','A','D','B','D','A','E','A'] },
    benjamin: { pdf: 'papers/2009_Benjamin.pdf', questions: 24, answers: ['B','D','B','C','A','D','C','E','D','B','C','C','D','C','B','E','E','D','D','C','E','C','A','A'] },
    kadett:   { pdf: 'papers/2009_Kadett.pdf',   questions: 30, answers: ['D','C','C','B','D','D','B','C','C','B','B','C','A','A','C','C','A','D','E','D','C','C','A','D','C','B','D','D','D','C'] },
    junior:   { pdf: 'papers/2009_Junior.pdf',   questions: 30, answers: ['E','C','A','B','D','C','D','C','B','B','E','B','E','B','C','C','E','C','D','A','C','C','E','C','B','A','C','B','A','D'] },
    student:  { pdf: 'papers/2009_Student.pdf',  questions: 30, answers: ['E','A','B','C','C','D','D','E','D','B','B','B','C','E','A','A','D','D','B','A','B','A','B','B','A','B','A','B','A','B'] }
  },
  2010: {
    ecolier:  { pdf: 'papers/2010_Ecolier.pdf',  questions: 24, answers: ['E','C','D','A','B','C','B','C','B','C','B','A','C','E','C','C','A','D','C','C','A','D','D','B'] },
    benjamin: { pdf: 'papers/2010_Benjamin.pdf', questions: 24, answers: ['B','C','C','C','C','C','B','B','E','D','E','C','E','E','E','A','C','A','B','A','B','D','C','C'] },
    kadett:   { pdf: 'papers/2010_Kadett.pdf',   questions: 30, answers: ['C','C','C','D','E','C','E','C','B','C','E','D','B','D','B','B','C','A','B','E','B','B','C','D','B','C','C','B','A','D'] },
    junior:   { pdf: 'papers/2010_Junior.pdf',   questions: 30, answers: ['D','D','C','B','D','E','A','D','C','E','A','D','C','D','B','B','E','C','D','B','C','A','C','C','B','D','A','C','E','E'] },
    student:  { pdf: 'papers/2010_Student.pdf',  questions: 30, answers: ['A','C','D','D','D','B','D','E','A','A','E','C','C','A','A','A','B','E','A','C','B','D','D','E','B','B','C','E','A','C'] }
  },
  2011: {
    ecolier:  { pdf: 'papers/2011_Ecolier.pdf',  questions: 24, answers: ['C','C','B','E','B','A','D','C','B','A','B','E','D','D','C','B','C','C','C','E','D','A','E','D'] },
    benjamin: { pdf: 'papers/2011_Benjamin.pdf', questions: 24, answers: ['C','C','A','E','E','B','A','D','E','B','B','B','C','D','B','B','C','D','E','C','C','D','D','A'] },
    kadett:   { pdf: 'papers/2011_Kadett.pdf',   questions: 30, answers: ['D','A','B','A','C','A','E','A','B','C','C','C','B','E','A','D','B','C','B','A','E','D','B','D','D','B','A','B','B','B'] },
    junior:   { pdf: 'papers/2011_Junior.pdf',   questions: 30, answers: ['B','C','D','A','E','C','D','C','C','E','B','B','A','B','C','D','D','D','C','B','C','C','B','C','B','D','B','C','C','E'] },
    student:  { pdf: 'papers/2011_Student.pdf',  questions: 30, answers: ['A','B','A','C','D','E','C','C','C','B','D','E','D','D','B','A','E','D','B','B','B','C','A','A','D','A','C','D','C','C'] }
  },
  2012: {
    ecolier:  { pdf: 'papers/2012_Ecolier.pdf',  questions: 24, answers: ['D','A','C','C','A','E','C','D','E','B','E','B','D','C','E','C','C','D','D','B','E','D','E','E'] },
    benjamin: { pdf: 'papers/2012_Benjamin.pdf', questions: 24, answers: ['E','D','A','C','D','C','D','B','C','E','B','D','B','A','D','A','C','A','E','C','E','D','D','B'] },
    kadett:   { pdf: 'papers/2012_Kadett.pdf',   questions: 30, answers: ['B','D','A','E','A','C','C','D','D','D','C','C','B','C','C','A','E','D','C','E','D','B','E','D','B','D','D','E','C','C'] },
    junior:   { pdf: 'papers/2012_Junior.pdf',   questions: 30, answers: ['E','C','A','D','E','D','A','B','C','E','D','C','D','B','C','D','B','E','B','D','D','A','C','D','A','B','C','B','A','A'] },
    student:  { pdf: 'papers/2012_Student.pdf',  questions: 30, answers: ['A','E','B','C','B','C','C','A','D','A','C','E','D','D','C','C','C','D','B','C','E','A','B','C','A','A','C','B','A','B'] }
  },
  2013: {
    ecolier:  { pdf: 'papers/2013_Ecolier.pdf',  questions: 24, answers: ['B','D','D','A','E','A','C','B','B','D','D','D','B','C','C','E','B','A','D','D','C','C','B','B'] },
    benjamin: { pdf: 'papers/2013_Benjamin.pdf', questions: 24, answers: ['E','C','C','B','E','B','B','C','C','C','D','C','B','D','A','C','C','B','D','B','D','B','B','A'] },
    kadett:   { pdf: 'papers/2013_Kadett.pdf',   questions: 30, answers: ['D','D','A','C','B','E','C','C','A','C','E','E','B','C','B','A','A','E','B','C','E','A','B','C','C','B','B','D','B','A'] },
    junior:   { pdf: 'papers/2013_Junior.pdf',   questions: 30, answers: ['D','C','C','C','A','E','E','C','D','C','D','B','D','D','D','A','A','C','D','E','C','C','D','E','A','B','C','C','B','B'] },
    student:  { pdf: 'papers/2013_Student.pdf',  questions: 30, answers: ['C','C','E','D','C','D','E','B','E','D','C','A','E','D','A','D','A','E','C','E','A','D','A','E','D','C','B','D','E','B'] }
  },
  2014: {
    ecolier:  { pdf: 'papers/2014_Ecolier.pdf',  questions: 24, answers: ['D','D','A','D','A','E','E','B','E','C','E','D','C','B','B','B','B','C','B','C','A','D','D','D'] },
    benjamin: { pdf: 'papers/2014_Benjamin.pdf', questions: 24, answers: ['C','D','D','A','A','D','B','B','B','B','D','B','B','D','A','D','E','A','E','A','E','D','B','E'] },
    kadett:   { pdf: 'papers/2014_Kadett.pdf',   questions: 30, answers: ['D','D','A','B','E','E','B','E','B','D','E','B','C','E','E','C','B','E','D','A','E','D','B','D','C','A','B','C','A','B'] },
    junior:   { pdf: 'papers/2014_Junior.pdf',   questions: 30, answers: ['B','A','E','A','C','A','B','B','E','C','C','C','B','D','A','E','E','C','D','C','D','D','D','B','C','C','B','E','B','C'] },
    student:  { pdf: 'papers/2014_Student.pdf',  questions: 30, answers: ['C','C','B','C','E','E','E','D','D','C','A','B','B','C','D','A','B','C','E','D','D','A','E','A','D','A','C','B','D','D'] }
  },
  2015: {
    ecolier:  { pdf: 'papers/2015_Ecolier.pdf',  questions: 24, answers: ['E','A','B','E','E','A','E','B','B','E','C','C','B','D','C','E','D','D','E','A','B','D','E','C'] },
    benjamin: { pdf: 'papers/2015_Benjamin.pdf', questions: 24, answers: ['B','C','A','A','B','E','D','E','A','A','D','E','C','D','C','B','C','E','B','C','D','B','D','C'] },
    kadett:   { pdf: 'papers/2015_Kadett.pdf',   questions: 30, answers: ['E','B','E','A','D','A','C','C','C','D','D','B','C','B','D','E','C','A','B','B','A','C','D','C','D','D','D','E','C','D'] },
    junior:   { pdf: 'papers/2015_Junior.pdf',   questions: 30, answers: ['B','E','B','E','B','C','E','A','D','C','B','C','C','A','B','D','D','B','D','E','A','C','B','D','C','A','B','D','B','B'] },
    student:  { pdf: 'papers/2015_Student.pdf',  questions: 30, answers: ['E','A','A','A','D','D','B','E','C','B','C','D','E','C','B','A','C','C','C','A','D','A','D','C','E','D','C','B','D','D'] }
  },
  2016: {
    ecolier:  { pdf: 'papers/2016_Ecolier.pdf',  questions: 24, answers: ['E','E','A','A','D','B','A','C','B','B','C','B','D','B','C','D','A','B','D','C','B','C','E','B'] },
    benjamin: { pdf: 'papers/2016_Benjamin.pdf', questions: 24, answers: ['C','E','A','C','E','B','D','C','B','A','C','C','D','B','E','D','A','B','C','B','B','D','E','C'] },
    kadett:   { pdf: 'papers/2016_Kadett.pdf',   questions: 30, answers: ['C','A','C','D','B','C','A','C','B','C','E','E','C','B','A','B','D','B','D','B','D','D','E','D','E','C','A','E','C','A'] },
    junior:   { pdf: 'papers/2016_Junior.pdf',   questions: 30, answers: ['D','B','D','A','B','D','C','D','B','E','D','A','E','C','B','E','C','D','B','A','C','C','B','E','A','A','C','A','B','D'] },
    student:  { pdf: 'papers/2016_Student.pdf',  questions: 30, answers: ['D','C','B','A','A','B','C','E','E','E','D','D','C','E','B','B','A','A','C','C','E','D','E','B','C','B','A','A','C','A'] }
  },
  2017: {
    ecolier:  { pdf: 'papers/2017_Ecolier.pdf',  questions: 24, answers: ['D','D','E','C','B','A','A','E','E','E','B','C','D','A','C','B','C','A','C','D','E','D','B','B'] },
    benjamin: { pdf: 'papers/2017_Benjamin.pdf', questions: 24, answers: ['B','C','E','D','B','A','C','D','B','C','D','C','E','E','D','A','A','D','D','C','C','C','D','E'] },
    kadett:   { pdf: 'papers/2017_Kadett.pdf',   questions: 30, answers: ['A','B','C','B','E','D','D','B','A','C','D','A','D','A','E','A','B','B','B','D','C','C','B','A','D','A','D','E','D','D'] },
    junior:   { pdf: 'papers/2017_Junior.pdf',   questions: 30, answers: ['C','E','B','C','E','C','E','C','A','C','C','C','E','D','C','B','B','A','C','D','A','D','E','D','C','E','B','E','A','D'] },
    student:  { pdf: 'papers/2017_Student.pdf',  questions: 30, answers: ['B','A','C','A','C','B','A','C','B','B','A','B','E','D','B','D','E','C','D','D','C','E','E','D','E','D','D','A','E','A'] }
  },
  2018: {
    ecolier:  { pdf: 'papers/2018_Ecolier.pdf',  questions: 24, answers: ['E','D','E','B','D','D','A','D','D','A','B','E','E','C','D','C','C','B','D','A','B','B','E','C'] },
    benjamin: { pdf: 'papers/2018_Benjamin.pdf', questions: 24, answers: ['B','C','B','B','E','D','C','C','D','A','E','E','A','A','E','C','C','A','A','C','D','C','B','D'] },
    kadett:   { pdf: 'papers/2018_Kadett.pdf',   questions: 30, answers: ['B','E','B','D','C','D','C','C','D','D','B','C','D','C','A','D','D','B','A','B','E','C','B','B','D','B','E','C','C','C'] },
    junior:   { pdf: 'papers/2018_Junior.pdf',   questions: 30, answers: ['C','C','C','C','E','A','B','B','A','B','D','D','B','E','B','A','D','E','D','A','B','C','E','C','D','D','A','D','C','D'] },
    student:  { pdf: 'papers/2018_Student.pdf',  questions: 30, answers: ['A','D','B','D','C','E','A','B','B','A','B','D','A','D','D','B','C','B','C','A','B','C','B','E','A','D','B','B','A','C'] }
  },
  2019: {
    ecolier:  { pdf: 'papers/2019_Ecolier.pdf',  questions: 24, answers: ['E','C','D','D','A','B','D','B','B','C','D','E','B','A','D','D','E','C','B','C','B','B','B','E'] },
    benjamin: { pdf: 'papers/2019_Benjamin.pdf', questions: 24, answers: ['B','D','E','C','E','D','A','D','C','E','A','B','C','C','C','D','C','E','D','B','B','B','D','A'] },
    kadett:   { pdf: 'papers/2019_Kadett.pdf',   questions: 30, answers: ['E','E','C','D','D','A','D','B','A','A','B','B','C','C','D','B','B','C','A','C','C','B','B','E','A','C','E','E','D','D'] },
    junior:   { pdf: 'papers/2019_Junior.pdf',   questions: 30, answers: ['D','B','E','C','B','B','C','B','A','B','B','C','C','E','B','D','D','A','C','C','D','E','A','E','B','D','C','C','B','B'] },
    student:  { pdf: 'papers/2019_Student.pdf',  questions: 30, answers: ['A','E','E','D','C','B','B','D','C','E','D','B','C','A','E','A','B','C','D','D','A','B','C','A','C','C','D','E','C','D'] }
  },
  2020: {
    ecolier:  { pdf: 'papers/2020_Ecolier.pdf',  questions: 24, answers: ['A','D','C','C','E','D','C','B','B','E','E','B','A','A','B','E','D','A','D','E','C','D','C','E'] },
    benjamin: { pdf: 'papers/2020_Benjamin.pdf', questions: 24, answers: ['E','C','D','C','D','C','B','E','A','B','E','D','A','A','A','D','B','E','D','A','C','B','C','D'] },
    kadett:   { pdf: 'papers/2020_Kadett.pdf',   questions: 30, answers: ['E','B','C','B','E','D','B','B','C','E','D','C','C','A','C','E','D','D','E','A','E','D','D','A','D','B','B','C','B','A'] },
    junior:   { pdf: 'papers/2020_Junior.pdf',   questions: 30, answers: ['C','D','B','B','D','B','E','E','D','E','A','C','D','D','A','D','E','A','B','D','A','A','E','C','E','E','B','C','D','E'] },
    student:  { pdf: 'papers/2020_Student.pdf',  questions: 30, answers: ['C','A','E','B','D','D','E','C','E','D','B','C','C','C','E','B','B','D','C','A','A','A','B','B','C','D','A','B','D','E'] }
  },
  2021: {
    ecolier:  { pdf: 'papers/2021_Ecolier.pdf',  questions: 24, answers: ['C','C','B','B','E','C','D','C','A','E','E','C','C','E','D','B','D','E','D','A','D','E','D','A'] },
    benjamin: { pdf: 'papers/2021_Benjamin.pdf', questions: 24, answers: ['D','A','E','D','B','C','B','E','E','D','B','B','D','B','C','A','E','C','D','B','A','B','A','C'] },
    kadett:   { pdf: 'papers/2021_Kadett.pdf',   questions: 30, answers: ['A','E','D','B','A','A','B','E','B','E','D','E','C','B','D','C','B','C','E','C','E','C','D','B','B','B','C','D','A','C'] },
    junior:   { pdf: 'papers/2021_Junior.pdf',   questions: 30, answers: ['C','B','B','B','B','C','C','C','D','E','B','C','A','A','A','E','E','C','C','E','E','B','A','E','B','D','D','D','C','D'] },
    student:  { pdf: 'papers/2021_Student.pdf',  questions: 30, answers: ['E','A','D','E','A','B','E','C','C','D','D','D','D','A','C','C','B','B','E','C','E','B','E','D','B','A','A','C','B','B'] }
  },
  2022: {
    ecolier:  { pdf: 'papers/2022_Ecolier.pdf',  questions: 24, answers: ['E','C','C','A','B','E','D','C','B','C','B','A','E','C','D','A','B','A','E','C','C','E','B','D'] },
    benjamin: { pdf: 'papers/2022_Benjamin.pdf', questions: 24, answers: ['E','E','B','D','B','C','A','D','C','C','E','D','A','C','B','A','D','D','C','E','B','C','D','D'] },
    kadett:   { pdf: 'papers/2022_Kadett.pdf',   questions: 30, answers: ['B','E','B','E','E','C','B','C','A','C','D','B','D','D','A','E','C','B','D','D','D','B','B','D','B','C','A','B','C','B'] },
    junior:   { pdf: 'papers/2022_Junior.pdf',   questions: 30, answers: ['D','B','A','C','C','B','B','C','A','B','D','D','B','D','E','A','A','C','C','E','D','B','B','C','C','E','D','A','D','C'] },
    student:  { pdf: 'papers/2022_Student.pdf',  questions: 30, answers: ['E','B','B','E','A','D','D','B','A','E','D','E','D','D','E','B','E','C','B','C','B','A','D','B','A','E','C','C','D','C'] }
  },
  2023: {
    ecolier:  { pdf: 'papers/2023_Ecolier.pdf',  questions: 24, answers: ['D','C','C','E','C','A','C','E','E','A','D','A','D','C','B','D','D','B','B','D','B','B','D','E'] },
    benjamin: { pdf: 'papers/2023_Benjamin.pdf', questions: 24, answers: ['C','D','A','D','B','D','B','A','C','C','C','D','B','A','D','C','B','C','E','D','E','E','B','A'] },
    kadett:   { pdf: 'papers/2023_Kadett.pdf',   questions: 30, answers: ['E','A','A','B','C','D','B','B','D','E','E','C','B','C','E','B','D','D','B','A','D','C','D','C','C','B','E','A','A','C'] },
    junior:   { pdf: 'papers/2023_Junior.pdf',   questions: 30, answers: ['A','D','A','D','C','D','D','B','E','D','E','B','C','C','D','E','D','B','B','E','E','C','A','D','A','B','C','A','C','B'] },
    student:  { pdf: 'papers/2023_Student.pdf',  questions: 30, answers: ['C','C','E','D','D','B','E','D','D','B','E','D','B','C','B','A','D','A','E','C','B','C','B','E','D','A','C','B','C','A'] }
  },
  2024: {
    ecolier:  { pdf: 'papers/2024_Ecolier.pdf',  questions: 24, answers: ['E','C','C','C','E','B','D','D','C','A','B','D','A','B','E','D','D','A','E','D','D','C','E','E'] },
    benjamin: { pdf: 'papers/2024_Benjamin.pdf', questions: 24, answers: ['B','C','B','B','B','C','D','C','A','E','C','B','E','D','E','E','B','D','A','B','C','A','C','C'] },
    kadett:   { pdf: 'papers/2024_Kadett.pdf',   questions: 30, answers: ['C','D','B','D','B','B','C','E','D','E','B','C','C','B','C','A','A','B','A','D','D','E','C','D','D','E','E','B','C','A'] },
    junior:   { pdf: 'papers/2024_Junior.pdf',   questions: 30, answers: ['E','A','D','C','B','B','D','D','A','B','E','B','B','D','B','C','B','D','A','C','E','C','E','A','C','D','D','A','C','B'] },
    student:  { pdf: 'papers/2024_Student.pdf',  questions: 30, answers: ['C','C','C','E','D','D','A','B','B','B','E','A','C','A','C','E','D','C','C','A','C','D','D','B','A','D','A','E','B','A'] }
  },
  2025: {
    ecolier:  { pdf: 'papers/2025_Ecolier.pdf',  questions: 24, answers: ['E','A','A','E','C','B','D','A','B','C','D','B','B','C','D','E','C','D','B','C','B','D','A','C'] },
    benjamin: { pdf: 'papers/2025_Benjamin.pdf', questions: 24, answers: ['C','E','B','D','A','B','C','A','B','D','A','D','D','C','C','E','B','E','B','E','D','C','D','D'] },
    kadett:   { pdf: 'papers/2025_Kadett.pdf',   questions: 30, answers: ['C','A','E','B','A','E','C','B','B','A','C','E','D','A','D','B','B','B','E','B','A','D','B','E','D','D','D','A','B','C'] },
    junior:   { pdf: 'papers/2025_Junior.pdf',   questions: 30, answers: ['E','B','D','B','D','C','D','A','C','B','B','B','D','C','E','C','D','A','A','D','B','D','B','E','C','C','C','D','C','D'] },
    student:  { pdf: 'papers/2025_Student.pdf',  questions: 30, answers: ['B','B','D','D','C','A','A','C','C','E','D','E','A','C','E','B','A','D','D','B','C','A','D','A','E','B','C','C','D','C'] }
  }
};

// Points per question based on total question count
// 24q: Q1-8 = 3pts, Q9-16 = 4pts, Q17-24 = 5pts
// 30q: Q1-10 = 3pts, Q11-20 = 4pts, Q21-30 = 5pts
function getPastPaperPoints(qIndex, total) {
  const tier = (total || 24) / 3;
  if (qIndex < tier)      return 3;
  if (qIndex < tier * 2)  return 4;
  return 5;
}

const PAST_PAPER_YEARS = Object.keys(PAST_PAPERS_DATA).map(Number).sort((a,b) => b - a);
