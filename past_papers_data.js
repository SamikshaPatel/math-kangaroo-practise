// Past Math Kangaroo Papers — answer keys and metadata
// Q1-8: 3pts each | Q9-16: 4pts each | Q17-24: 5pts each

const PAST_PAPERS_DATA = {
  2009: {
    ecolier:  { pdf: 'papers/2009_Ecolier.pdf',  questions: 24, answers: ['E','E','B','B','B','C','D','D','A','D','B','E','B','D','B','E','B','A','D','B','D','A','E','A'] },
    benjamin: { pdf: 'papers/2009_Benjamin.pdf', questions: 24, answers: ['B','D','B','C','A','D','C','E','D','B','C','C','D','C','B','E','E','D','D','C','E','C','A','A'] }
  },
  2010: {
    ecolier:  { pdf: 'papers/2010_Ecolier.pdf',  questions: 24, answers: ['E','C','D','A','B','C','B','C','B','C','B','A','C','E','C','C','A','D','C','C','A','D','D','B'] },
    benjamin: { pdf: 'papers/2010_Benjamin.pdf', questions: 24, answers: ['B','C','C','C','C','C','B','B','E','D','E','C','E','E','E','A','C','A','B','A','B','D','C','C'] }
  },
  2011: {
    ecolier:  { pdf: 'papers/2011_Ecolier.pdf',  questions: 24, answers: ['C','C','B','E','B','A','D','C','B','A','B','E','D','D','C','B','C','C','C','E','D','A','E','D'] },
    benjamin: { pdf: 'papers/2011_Benjamin.pdf', questions: 24, answers: ['C','C','A','E','E','B','A','D','E','B','B','B','C','D','B','B','C','D','E','C','C','D','D','A'] }
  },
  2012: {
    ecolier:  { pdf: 'papers/2012_Ecolier.pdf',  questions: 24, answers: ['D','A','C','C','A','E','C','D','E','B','E','B','D','C','E','C','C','D','D','B','E','D','E','E'] },
    benjamin: { pdf: 'papers/2012_Benjamin.pdf', questions: 24, answers: ['E','D','A','C','D','C','D','B','C','E','B','D','B','A','D','A','C','A','E','C','E','D','D','B'] }
  },
  2013: {
    ecolier:  { pdf: 'papers/2013_Ecolier.pdf',  questions: 24, answers: ['B','D','D','A','E','A','C','B','B','D','D','D','B','C','C','E','B','A','D','D','C','C','B','B'] },
    benjamin: { pdf: 'papers/2013_Benjamin.pdf', questions: 24, answers: ['E','C','C','B','E','B','B','C','C','C','D','C','B','D','A','C','C','B','D','B','D','B','B','A'] }
  },
  2014: {
    ecolier:  { pdf: 'papers/2014_Ecolier.pdf',  questions: 24, answers: ['D','D','A','D','A','E','E','B','E','C','E','D','C','B','B','B','B','C','B','C','A','D','D','D'] },
    benjamin: { pdf: 'papers/2014_Benjamin.pdf', questions: 24, answers: ['C','D','D','A','A','D','B','B','B','B','D','B','B','D','A','D','E','A','E','A','E','D','B','E'] }
  },
  2015: {
    ecolier:  { pdf: 'papers/2015_Ecolier.pdf',  questions: 24, answers: ['E','A','B','E','E','A','E','B','B','E','C','C','B','D','C','E','D','D','E','A','B','D','E','C'] },
    benjamin: { pdf: 'papers/2015_Benjamin.pdf', questions: 24, answers: ['B','C','A','A','B','E','D','E','A','A','D','E','C','D','C','B','C','E','B','C','D','B','D','C'] }
  },
  2016: {
    ecolier:  { pdf: 'papers/2016_Ecolier.pdf',  questions: 24, answers: ['E','E','A','A','D','B','A','C','B','B','C','B','D','B','C','D','A','B','D','C','B','C','E','B'] },
    benjamin: { pdf: 'papers/2016_Benjamin.pdf', questions: 24, answers: ['C','E','A','C','E','B','D','C','B','A','C','C','D','B','E','D','A','B','C','B','B','D','E','C'] }
  },
  2017: {
    ecolier:  { pdf: 'papers/2017_Ecolier.pdf',  questions: 24, answers: ['D','D','E','C','B','A','A','E','E','E','B','C','D','A','C','B','C','A','C','D','E','D','B','B'] },
    benjamin: { pdf: 'papers/2017_Benjamin.pdf', questions: 24, answers: ['B','C','E','D','B','A','C','D','B','C','D','C','E','E','D','A','A','D','D','C','C','C','D','E'] }
  },
  2018: {
    ecolier:  { pdf: 'papers/2018_Ecolier.pdf',  questions: 24, answers: ['E','D','E','B','D','D','A','D','D','A','B','E','E','C','D','C','C','B','D','A','B','B','E','C'] },
    benjamin: { pdf: 'papers/2018_Benjamin.pdf', questions: 24, answers: ['B','C','B','B','E','D','C','C','D','A','E','E','A','A','E','C','C','A','A','C','D','C','B','D'] }
  },
  2019: {
    ecolier:  { pdf: 'papers/2019_Ecolier.pdf',  questions: 24, answers: ['E','C','D','D','A','B','D','B','B','C','D','E','B','A','D','D','E','C','B','C','B','B','B','E'] },
    benjamin: { pdf: 'papers/2019_Benjamin.pdf', questions: 24, answers: ['B','D','E','C','E','D','A','D','C','E','A','B','C','C','C','D','C','E','D','B','B','B','D','A'] }
  },
  2020: {
    ecolier:  { pdf: 'papers/2020_Ecolier.pdf',  questions: 24, answers: ['A','D','C','C','E','D','C','B','B','E','E','B','A','A','B','E','D','A','D','E','C','D','C','E'] },
    benjamin: { pdf: 'papers/2020_Benjamin.pdf', questions: 24, answers: ['E','C','D','C','D','C','B','E','A','B','E','D','A','A','A','D','B','E','D','A','C','B','C','D'] }
  },
  2021: {
    ecolier:  { pdf: 'papers/2021_Ecolier.pdf',  questions: 24, answers: ['C','C','B','B','E','C','D','C','A','E','E','C','C','E','D','B','D','E','D','A','D','E','D','A'] },
    benjamin: { pdf: 'papers/2021_Benjamin.pdf', questions: 24, answers: ['D','A','E','D','B','C','B','E','E','D','B','B','D','B','C','A','E','C','D','B','A','B','A','C'] }
  },
  2022: {
    ecolier:  { pdf: 'papers/2022_Ecolier.pdf',  questions: 24, answers: ['E','C','C','A','B','E','D','C','B','C','B','A','E','C','D','A','B','A','E','C','C','E','B','D'] },
    benjamin: { pdf: 'papers/2022_Benjamin.pdf', questions: 24, answers: ['E','E','B','D','B','C','A','D','C','C','E','D','A','C','B','A','D','D','C','E','B','C','D','D'] }
  },
  2023: {
    ecolier:  { pdf: 'papers/2023_Ecolier.pdf',  questions: 24, answers: ['D','C','C','E','C','A','C','E','E','A','D','A','D','C','B','D','D','B','B','D','B','B','D','E'] },
    benjamin: { pdf: 'papers/2023_Benjamin.pdf', questions: 24, answers: ['C','D','A','D','B','D','B','A','C','C','C','D','B','A','D','C','B','C','E','D','E','E','B','A'] }
  },
  2024: {
    ecolier:  { pdf: 'papers/2024_Ecolier.pdf',  questions: 24, answers: ['E','C','C','C','E','B','D','D','C','A','B','D','A','B','E','D','D','A','E','D','D','C','E','E'] },
    benjamin: { pdf: 'papers/2024_Benjamin.pdf', questions: 24, answers: ['B','C','B','B','B','C','D','C','A','E','C','B','E','D','E','E','B','D','A','B','C','A','C','C'] }
  },
  2025: {
    ecolier:  { pdf: 'papers/2025_Ecolier.pdf',  questions: 24, answers: ['E','A','A','E','C','B','D','A','B','C','D','B','B','C','D','E','C','D','B','C','B','D','A','C'] },
    benjamin: { pdf: 'papers/2025_Benjamin.pdf', questions: 24, answers: ['C','E','B','D','A','B','C','A','B','D','A','D','D','C','C','E','B','E','B','E','D','C','D','D'] }
  }
};

// Points per question: Q1-8 = 3pts, Q9-16 = 4pts, Q17-24 = 5pts
function getPastPaperPoints(qIndex) {
  if (qIndex < 8)  return 3;
  if (qIndex < 16) return 4;
  return 5;
}

const PAST_PAPER_YEARS = Object.keys(PAST_PAPERS_DATA).map(Number).sort((a,b) => b - a);
