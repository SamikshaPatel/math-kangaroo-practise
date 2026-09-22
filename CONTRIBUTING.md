# Contributing to Math Kangaroo Practice System

We welcome contributions from educators, students, developers, and Math Kangaroo enthusiasts! This document provides guidelines and instructions for contributing.

## Ways to Contribute

### 1. Add Practice Questions
- Create question sets for new subcategories
- Review existing questions for accuracy
- Suggest improvements to question phrasing
- Add alternate versions of problems

### 2. Improve Documentation
- Enhance README with more examples
- Translate documentation to other languages
- Create video tutorials
- Write blog posts about using the resource

### 3. Develop Features
- Add interactive problem solver with hints
- Create progress tracking system
- Build mobile app wrapper
- Implement community features

### 4. Bug Reports & Testing
- Test on different browsers and devices
- Report issues on GitHub
- Suggest UI/UX improvements
- Help with accessibility testing

### 5. Localization
- Translate interface to other languages
- Adapt problems for other countries
- Create regional problem collections

## Getting Started

### 1. Fork the Repository
```bash
# Click "Fork" on GitHub
git clone https://github.com/YOUR-USERNAME/math-kangaroo-practice.git
cd math-kangaroo-practice
```

### 2. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

### 3. Make Your Changes
- Follow existing code style
- Add comments for complex logic
- Test thoroughly

### 4. Commit & Push
```bash
git add .
git commit -m "Brief description of changes"
git push origin feature/your-feature-name
```

### 5. Create a Pull Request
- Go to GitHub and click "New Pull Request"
- Write a clear description of your changes
- Reference any related issues

## Code Style Guide

### Python
- Follow PEP 8
- Use meaningful variable names
- Add docstrings to functions
- Keep functions focused and small

```python
def generate_pdf(category_key, is_answers=False):
    """Generate PDF for a specific Math Kangaroo category.
    
    Args:
        category_key (str): Category identifier (e.g., '1.1', '2.3')
        is_answers (bool): If True, generate answer key; else generate questions
    
    Returns:
        bytes: PDF file content
    """
    # Implementation...
```

### JavaScript
- Use const/let instead of var
- Use arrow functions where appropriate
- Add JSDoc comments for functions
- Keep lines under 100 characters

```javascript
/**
 * Download PDF for a category
 * @param {string} category - Category ID (e.g., '1.1')
 * @param {string} type - 'questions' or 'answers'
 */
async function downloadPDF(category, type) {
  // Implementation...
}
```

### HTML/CSS
- Use semantic HTML5 elements
- Follow BEM naming convention for CSS classes
- Ensure responsive design
- Test for accessibility

## Adding New Categories

### Step 1: Define Questions
Edit `generate_all_pdfs.py` and add to the `CONTENT` dictionary:

```python
"1.5": {
    "title": "Your Category Title",
    "description": "Brief description",
    "questions": [
        ("Question text?", "A) Option", "B) Option", "C) Option", "D) Option", "Answer: X", points),
        # Add 50 total questions
    ]
}
```

### Step 2: Generate PDFs
```bash
python3 generate_all_pdfs.py
```

### Step 3: Update HTML
Add buttons to the HTML for downloading the new category's PDFs.

### Step 4: Test
- Verify PDFs generate correctly
- Test download functionality
- Check formatting and readability
- Validate all 50 questions are present

## Questions & Discussion

- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: Q&A and general discussion
- **Email**: For private communications

## Code of Conduct

- Be respectful and inclusive
- Assume good intent
- Provide constructive feedback
- Follow the project's vision and scope

## Reporting Issues

When reporting a bug, please include:
1. **Description**: What is the problem?
2. **Steps to Reproduce**: How can we recreate it?
3. **Expected Behavior**: What should happen?
4. **Actual Behavior**: What actually happens?
5. **Screenshots**: If applicable
6. **Environment**: Browser, OS, version

Example:
```
**Bug**: PDF download button not working on Safari
**Steps**: 
1. Open grade5_kangaroo_practice.html in Safari
2. Click "Questions PDF" button
**Expected**: PDF should download
**Actual**: Nothing happens
**Environment**: Safari 15.1 on macOS 12.1
```

## Pull Request Process

1. Update documentation for any new features
2. Add/update tests if applicable
3. Ensure all links and references work
4. Follow the existing code style
5. Include a clear commit message
6. Reference related issues

Pull requests should:
- Address a single issue or feature
- Have clear, descriptive titles
- Include explanation of changes
- Reference any related PRs or issues

## Recognition

Contributors will be recognized in:
- README.md Contributors section
- GitHub contributors page
- Release notes for major contributions

## Questions?

Don't hesitate to ask! Open an issue or discussion with your questions.

Thank you for making Math Kangaroo Practice System better! 🙏

---

**Last Updated**: September 2026
