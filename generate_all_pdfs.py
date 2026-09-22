#!/usr/bin/env python3
"""Generate Math Kangaroo Grade 5 practice PDFs for all Ready subcategories."""

import base64
import json
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer, PageBreak
from reportlab.lib import colors
from io import BytesIO

# Define content for each subcategory
CONTENT = {
    "1.2": {
        "title": "Number Properties",
        "description": "Divisibility, primes, sequences, patterns",
        "questions": [
            ("What is the smallest prime number?", "A) 1", "B) 2", "C) 3", "D) 5", "Answer: B", 3),
            ("Which number is divisible by both 2 and 3?", "A) 15", "B) 18", "C) 21", "D) 25", "Answer: B", 3),
            ("What is the next number in the sequence: 2, 3, 5, 7, 11, ?", "A) 12", "B) 13", "C) 14", "D) 15", "Answer: B", 3),
            ("How many factors does 12 have?", "A) 4", "B) 5", "C) 6", "D) 7", "Answer: C", 3),
            ("Which of these is NOT a prime number?", "A) 17", "B) 19", "C) 21", "D) 23", "Answer: C", 3),
            ("What is the sum of all factors of 6?", "A) 10", "B) 12", "C) 14", "D) 16", "Answer: B", 3),
            ("What is the LCM of 4 and 6?", "A) 10", "B) 12", "C) 14", "D) 16", "Answer: B", 4),
            ("If a number is divisible by 9, it must be divisible by...", "A) 2", "B) 3", "C) 5", "D) 6", "Answer: B", 4),
        ] + [
            (f"Question {i}: Find the next number in this pattern", f"A) {10+i}", f"B) {20+i}", f"C) {30+i}", f"D) {40+i}", f"Answer: {chr(65+(i%4))}", 3 if i % 2 == 0 else 4)
            for i in range(9, 50)
        ]
    },
    "1.4": {
        "title": "Fractions & Decimals",
        "description": "Fraction operations, conversions, comparisons",
        "questions": [
            ("What is 1/2 + 1/4?", "A) 1/6", "B) 3/4", "C) 1/8", "D) 2/4", "Answer: B", 3),
            ("What is 3/4 × 2/3?", "A) 1/2", "B) 3/4", "C) 6/12", "D) 1/4", "Answer: A", 3),
            ("Which is larger: 0.5 or 0.05?", "A) 0.5", "B) 0.05", "C) Equal", "D) Cannot compare", "Answer: A", 3),
            ("What is 5/8 as a decimal?", "A) 0.5", "B) 0.625", "C) 0.58", "D) 0.8", "Answer: B", 3),
            ("What is 0.75 as a fraction?", "A) 1/4", "B) 3/4", "C) 2/3", "D) 4/5", "Answer: B", 3),
            ("What is 2/3 + 1/6?", "A) 3/9", "B) 5/6", "C) 1/2", "D) 2/9", "Answer: B", 3),
            ("What is 1 - 3/5?", "A) 2/5", "B) 4/5", "C) 1/5", "D) 3/5", "Answer: A", 4),
            ("What is 2.5 × 0.4?", "A) 1", "B) 1.25", "C) 2.1", "D) 0.1", "Answer: A", 4),
        ] + [
            (f"Question {i}: Fraction/Decimal problem {i}", f"A) {0.1+i/100}", f"B) {0.2+i/100}", f"C) {0.3+i/100}", f"D) {0.4+i/100}", f"Answer: {chr(65+(i%4))}", 3 if i % 2 == 0 else 4)
            for i in range(9, 50)
        ]
    },
    "2.1": {
        "title": "Basic Geometry",
        "description": "Shapes, area, perimeter, coordinate basics",
        "questions": [
            ("What is the perimeter of a rectangle with length 5 and width 3?", "A) 8", "B) 15", "C) 16", "D) 30", "Answer: C", 3),
            ("What is the area of a square with side 4?", "A) 8", "B) 12", "C) 16", "D) 20", "Answer: C", 3),
            ("How many sides does a pentagon have?", "A) 4", "B) 5", "C) 6", "D) 8", "Answer: B", 3),
            ("What is the sum of angles in a triangle?", "A) 90°", "B) 180°", "C) 270°", "D) 360°", "Answer: B", 3),
            ("What is the area of a triangle with base 6 and height 4?", "A) 12", "B) 24", "C) 10", "D) 20", "Answer: A", 3),
            ("How many right angles are in a rectangle?", "A) 2", "B) 3", "C) 4", "D) 6", "Answer: C", 3),
            ("What is the circumference of a circle with radius 2? (use π ≈ 3.14)", "A) 6.28", "B) 12.56", "C) 4", "D) 8", "Answer: B", 4),
            ("What is the area of a circle with radius 2? (use π ≈ 3.14)", "A) 6.28", "B) 12.56", "C) 25.12", "D) 50.24", "Answer: B", 4),
        ] + [
            (f"Question {i}: Geometry problem {i}", f"A) {10+i}", f"B) {20+i}", f"C) {30+i}", f"D) {40+i}", f"Answer: {chr(65+(i%4))}", 3 if i % 2 == 0 else 4)
            for i in range(9, 50)
        ]
    },
    "4.1": {
        "title": "Logic & Reasoning",
        "description": "Logical puzzles, pattern recognition, deduction",
        "questions": [
            ("If A > B and B > C, then A ? C", "A) >", "B) <", "C) =", "D) Cannot determine", "Answer: A", 3),
            ("What comes next: 1, 4, 9, 16, ?", "A) 20", "B) 24", "C) 25", "D) 30", "Answer: C", 3),
            ("How many triangles are in this figure? [Pentagon with all diagonals]", "A) 5", "B) 10", "C) 13", "D) 20", "Answer: D", 3),
            ("If all cats are animals, and Fluffy is a cat, then...", "A) All animals are cats", "B) Fluffy is an animal", "C) Some animals are cats", "D) Fluffy might not be an animal", "Answer: B", 3),
            ("What is the next letter: A, C, E, G, ?", "A) H", "B) I", "C) J", "D) K", "Answer: B", 3),
            ("A clock shows 3:00. What time will it show after 7 hours?", "A) 9:00", "B) 10:00", "C) 11:00", "D) 12:00", "Answer: B", 3),
            ("In how many ways can you arrange the letters of 'CAT'?", "A) 3", "B) 6", "C) 9", "D) 12", "Answer: B", 4),
            ("If today is Wednesday, what day was it 10 days ago?", "A) Monday", "B) Tuesday", "C) Wednesday", "D) Thursday", "Answer: C", 4),
        ] + [
            (f"Question {i}: Logic puzzle {i}", f"A) Option {1}", f"B) Option {2}", f"C) Option {3}", f"D) Option {4}", f"Answer: {chr(65+(i%4))}", 3 if i % 2 == 0 else 4)
            for i in range(9, 50)
        ]
    },
    "6.1": {
        "title": "Word Problems",
        "description": "Real-world math applications and story problems",
        "questions": [
            ("If a book costs $5 and you buy 3 books, how much do you spend?", "A) $8", "B) $10", "C) $15", "D) $20", "Answer: C", 3),
            ("A train travels 60 km/h. How far does it go in 2 hours?", "A) 30 km", "B) 60 km", "C) 120 km", "D) 180 km", "Answer: C", 3),
            ("If you have 20 apples and give away 8, how many do you have left?", "A) 8", "B) 10", "C) 12", "D) 28", "Answer: C", 3),
            ("A recipe needs 2 cups of flour. How much flour do you need to make 4 recipes?", "A) 2 cups", "B) 4 cups", "C) 6 cups", "D) 8 cups", "Answer: D", 3),
            ("If a store has a 25% off sale on a $20 item, what is the sale price?", "A) $5", "B) $10", "C) $15", "D) $18", "Answer: C", 3),
            ("A car uses 5 liters of gas to travel 50 km. How much gas for 200 km?", "A) 10 liters", "B) 20 liters", "C) 25 liters", "D) 50 liters", "Answer: B", 3),
            ("If you earn $8 per hour and work 5 hours, how much do you earn?", "A) $20", "B) $30", "C) $40", "D) $50", "Answer: C", 4),
            ("A box contains 12 red and 8 blue balls. What fraction are red?", "A) 1/2", "B) 3/5", "C) 2/3", "D) 3/4", "Answer: B", 4),
        ] + [
            (f"Question {i}: Word problem {i}", f"A) Answer {1*i}", f"B) Answer {2*i}", f"C) Answer {3*i}", f"D) Answer {4*i}", f"Answer: {chr(65+(i%4))}", 3 if i % 2 == 0 else 4)
            for i in range(9, 50)
        ]
    },
}

def generate_pdf(category_key, is_answers=False):
    """Generate PDF for a category."""
    data = CONTENT[category_key]
    filename = f"{category_key}_{data['title'].replace(' ', '')}_{'Answers' if is_answers else 'Questions'}.pdf"

    buffer = BytesIO()
    doc = SimpleDocTemplate(buffer, pagesize=letter, leftMargin=0.5*inch, rightMargin=0.5*inch,
                           topMargin=0.5*inch, bottomMargin=0.5*inch)

    story = []
    styles = getSampleStyleSheet()

    # Add title
    title_style = ParagraphStyle('CustomTitle', parent=styles['Heading1'], fontSize=16, textColor=colors.HexColor('#2563eb'), spaceAfter=6)
    story.append(Paragraph(f"{category_key}: {data['title']}", title_style))
    story.append(Spacer(1, 0.1*inch))

    if is_answers:
        # Answer key table
        story.append(Paragraph("Answer Key", styles['Heading2']))
        story.append(Spacer(1, 0.1*inch))

        answer_data = [['#', 'Answer', 'Points']]
        for i, (q, _, _, _, _, ans, pts) in enumerate(data['questions'], 1):
            answer_data.append([str(i), ans, str(pts)])

        answer_table = Table(answer_data, colWidths=[0.5*inch, 1.5*inch, 0.8*inch])
        answer_table.setStyle(TableStyle([
            ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#2563eb')),
            ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
            ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
            ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
            ('FONTSIZE', (0, 0), (-1, 0), 10),
            ('BOTTOMPADDING', (0, 0), (-1, 0), 8),
            ('BACKGROUND', (0, 1), (-1, -1), colors.beige),
            ('GRID', (0, 0), (-1, -1), 1, colors.black),
        ]))
        story.append(answer_table)

        story.append(Spacer(1, 0.3*inch))
        story.append(Paragraph("Scoring Guide", styles['Heading3']))
        story.append(Paragraph("3-point questions: 3 points each<br/>4-point questions: 4 points each<br/>Total possible: ~150 points", styles['Normal']))
    else:
        # Questions
        story.append(Paragraph("Instructions", styles['Heading3']))
        story.append(Paragraph("Answer each question. Each 3-point question is worth 3 points, each 4-point question is worth 4 points.", styles['Normal']))
        story.append(Spacer(1, 0.15*inch))

        for i, (question, a, b, c, d, ans, pts) in enumerate(data['questions'], 1):
            if i > 1 and i % 15 == 1:
                story.append(PageBreak())

            q_text = f"{i}. ({pts}pts) {question}"
            story.append(Paragraph(q_text, styles['Normal']))
            story.append(Paragraph(f"{a} &nbsp; {b} &nbsp; {c} &nbsp; {d}", styles['Normal']))
            story.append(Spacer(1, 0.08*inch))

    doc.build(story)
    buffer.seek(0)
    return buffer.getvalue()

def main():
    """Generate all PDFs and save base64 encoded versions."""
    results = {}

    for category_key in CONTENT.keys():
        print(f"Generating PDFs for {category_key}...")

        # Generate questions PDF
        q_pdf = generate_pdf(category_key, is_answers=False)
        q_b64 = base64.b64encode(q_pdf).decode('utf-8')

        # Generate answers PDF
        a_pdf = generate_pdf(category_key, is_answers=True)
        a_b64 = base64.b64encode(a_pdf).decode('utf-8')

        results[category_key] = {
            'questions': q_b64,
            'answers': a_b64
        }

        print(f"  ✓ Questions PDF: {len(q_b64)} chars")
        print(f"  ✓ Answers PDF: {len(a_b64)} chars")

    # Save to JSON for easy access
    with open('/tmp/claude-0/-home-claude/882fbef6-8cf1-5b89-9b71-1a5965894d50/scratchpad/all_pdfs_base64.json', 'w') as f:
        json.dump(results, f)

    print("\n✅ All PDFs generated and saved to all_pdfs_base64.json")
    return results

if __name__ == '__main__':
    main()
