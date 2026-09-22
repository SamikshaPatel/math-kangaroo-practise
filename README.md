# Math Kangaroo Grade 5 Practice System

A comprehensive, interactive practice system for Math Kangaroo competitions (Benjamin Level, Grades 5-6) featuring topic-organized PDFs and an interactive web interface.

## Features

✨ **Interactive Web Interface**
- Responsive HTML/CSS design with dark/light theme support
- 7 collapsible topic categories with 25+ subcategories
- One-click PDF downloads for questions and answer keys
- Mobile-friendly layout

📚 **Complete Practice Sets**
- **Six ready-to-use practice sets** with 50 questions each
- Category: 1.1 Basic Arithmetic
- Category: 1.2 Number Properties
- Category: 1.4 Fractions & Decimals
- Category: 2.1 Basic Geometry
- Category: 4.1 Logic Puzzles
- Category: 6.1 Real-World Problems

🎯 **Comprehensive Topic Coverage**
1. Arithmetic & Number Operations (4 subcategories)
2. Geometry (3 subcategories)
3. Patterns & Sequences (2 subcategories)
4. Logic & Reasoning (2 subcategories)
5. Combinatorics & Counting (2 subcategories)
6. Word Problems & Applications (2 subcategories)
7. Algebra & Equations (2 subcategories)

📖 **Derived from 15+ Years of Official Papers**
All topics and question types based on comprehensive analysis of Math Kangaroo Benjamin Level papers with difficulty-stratified content (3-point, 4-point, and 5-point problems).

## Quick Start

### View the Interactive Interface
Open `grade5_kangaroo_practice.html` in any modern web browser. All PDFs are embedded and ready to download.

### Generate PDFs
To generate PDF sets for additional categories:
```bash
python3 generate_all_pdfs.py
```

This creates both question and answer sets for each category with professional formatting.

## File Structure

```
math-kangaroo-practice/
├── README.md                              # This file
├── LICENSE                                # MIT License
├── .gitignore                             # Git ignore file
│
├── grade5_kangaroo_practice.html          # Main interactive interface
├── generate_all_pdfs.py                   # PDF generation script
├── all_pdfs_base64.json                   # Base64-encoded PDFs
│
├── Math_Kangaroo_Topic_Taxonomy.md        # Complete topic breakdown
│
├── docs/
│   ├── Grade5_MathKangaroo_Practice.md    # Practice guide
│   └── 2025_Benjamin_Practice_Test.md     # Sample practice test
│
└── pdfs/
    └── [Generated PDF files]
```

## Technical Details

### Technologies Used
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **PDF Generation**: Python with ReportLab
- **Data Format**: Base64 encoding for embedded PDFs
- **Hosting**: Claude Artifacts (or any static host)

### Browser Compatibility
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Features
- **Downloads Capability**: Secure file downloads within artifact viewer
- **Async/Await**: Proper async handling for file operations
- **Error Handling**: User-friendly error messages
- **Dark Mode**: Automatic theme detection with manual override
- **Responsive Design**: Works seamlessly at phone, tablet, and desktop sizes

## Content Breakdown

### Benjamin Level (Grades 5-6)
- **Total Questions**: 50 per set
- **Difficulty Levels**: 3-point (easy), 4-point (medium), 5-point (hard)
- **Time Limit**: 75 minutes per competition
- **Question Types**: Multiple choice, computation, logic, geometry, word problems

### Current Ready Sets
Each set includes:
- 50 carefully curated practice questions
- Complete answer key with scoring guide
- Points breakdown by difficulty level
- Professional PDF formatting

### Planned Categories
Additional subcategories in development with community contribution welcome.

## Usage

### For Students
1. Open `grade5_kangaroo_practice.html` in a browser
2. Expand each topic category to see subcategories
3. Download "Questions PDF" for practice
4. Work through problems independently
5. Download "Answers PDF" to check your work

### For Teachers
- Print PDFs for classroom use
- Use as homework assignments
- Organize by difficulty level for differentiated instruction
- Combine multiple subcategories for practice tests

## Development

### Adding New Categories
1. Extend the `CONTENT` dictionary in `generate_all_pdfs.py`
2. Add questions with answer keys and point values
3. Run `python3 generate_all_pdfs.py` to generate PDFs
4. Update HTML to include new category buttons

### Customization
- Modify CSS variables for branding
- Adjust grid layout in HTML for different organization
- Change PDF formatting in `generate_all_pdfs.py`

## Installation for Development

```bash
# Clone the repository
git clone https://github.com/yourusername/math-kangaroo-practice.git
cd math-kangaroo-practice

# Install dependencies (for PDF generation)
pip install reportlab

# Generate PDFs (optional)
python3 generate_all_pdfs.py

# Serve locally (Python 3.7+)
python3 -m http.server 8000
# Visit http://localhost:8000/grade5_kangaroo_practice.html
```

## Data & Analytics

### Coverage Summary
- **Total Subcategories**: 25
- **Ready**: 6 (1.1, 1.2, 1.4, 2.1, 4.1, 6.1)
- **In Development**: Multiple
- **Planned**: Additional categories

### Topics Covered
- Basic arithmetic operations
- Number theory (divisibility, primes)
- Fractions and decimals
- Geometry (2D shapes, area, perimeter)
- Logic and reasoning
- Word problems
- And more...

## Contributing

We welcome contributions! Areas for help:
- Additional practice questions for existing categories
- New category development
- Bug reports and UI improvements
- Documentation and translations
- PDF content review and refinement

## License

MIT License - See LICENSE file for details

This project is developed as an educational resource for Math Kangaroo preparation.

## Disclaimer

This is an independent practice resource. Math Kangaroo International is the official organizer of the Math Kangaroo competitions. This project is not affiliated with or endorsed by Math Kangaroo International.

## Support & Contact

For questions, suggestions, or contributions:
- Open an issue on GitHub
- Submit pull requests with improvements
- Reach out with feedback on practice content

## Roadmap

- [ ] Mobile app version (React Native)
- [ ] Interactive problem solver with hints
- [ ] Progress tracking dashboard
- [ ] Competition simulation mode
- [ ] Additional difficulty levels
- [ ] Video solutions for select problems
- [ ] Community question submissions
- [ ] Localization (French, Spanish, etc.)

---

**Last Updated**: September 2026
**Version**: 1.0.0
**Maintained By**: [Your Name/Organization]
