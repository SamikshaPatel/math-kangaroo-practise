#!/usr/bin/env python3
"""Generate Math Kangaroo Grade 3-4 practice PDFs for category 1.1 Simple Arithmetic."""

import base64
import json
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer, PageBreak
from reportlab.lib import colors
from io import BytesIO

# Define content for Grade 3-4 categories
CONTENT = {
    "1.1": {
        "title": "Simple Arithmetic",
        "description": "Addition, subtraction, multiplication, division, word problems",
        "questions": [
            # Section: Addition & Subtraction (Q1-Q8)
            ("What is 63 + 29?", "A) 92", "B) 82", "C) 93", "D) 89", "Answer: A", 3),
            ("What is 47 + 38?", "A) 75", "B) 85", "C) 87", "D) 83", "Answer: B", 3),
            ("What is 256 + 148?", "A) 394", "B) 403", "C) 404", "D) 414", "Answer: C", 3),
            ("What is 384 + 219?", "A) 593", "B) 599", "C) 601", "D) 603", "Answer: D", 4),
            ("What is 999 - 437?", "A) 562", "B) 552", "C) 572", "D) 543", "Answer: A", 3),
            ("What is 500 - 247?", "A) 243", "B) 253", "C) 263", "D) 273", "Answer: B", 3),
            ("What is 1000 - 673?", "A) 317", "B) 337", "C) 327", "D) 347", "Answer: C", 3),
            ("Anna has 125 stickers. She gives 37 to a friend and then finds 48 more. How many stickers does Anna have now?", "A) 116", "B) 126", "C) 130", "D) 136", "Answer: D", 3),
            # Section: Multiplication (Q9-Q16)
            ("What is 7 x 8?", "A) 56", "B) 54", "C) 48", "D) 63", "Answer: A", 3),
            ("A hen lays 6 eggs every day. How many eggs does she lay in 9 days?", "A) 48", "B) 54", "C) 56", "D) 60", "Answer: B", 3),
            ("There are 12 tables in a classroom. Each table has 5 pencils on it. How many pencils are there in total?", "A) 55", "B) 58", "C) 60", "D) 65", "Answer: C", 3),
            ("A library has 8 shelves. Each shelf holds 7 books. How many books are in the library?", "A) 48", "B) 49", "C) 54", "D) 56", "Answer: D", 3),
            ("What is 4 x 4 x 4?", "A) 64", "B) 48", "C) 56", "D) 60", "Answer: A", 4),
            ("There are 8 rows of seats with 9 seats in each row. How many seats are there altogether?", "A) 64", "B) 72", "C) 68", "D) 81", "Answer: B", 3),
            ("A farmer plants 6 seeds in each pot. He uses 8 pots. How many seeds does he plant in total?", "A) 42", "B) 46", "C) 48", "D) 54", "Answer: C", 3),
            ("What is 3 x 4 x 5?", "A) 48", "B) 50", "C) 55", "D) 60", "Answer: D", 4),
            # Section: Division (Q17-Q20)
            ("56 stickers are shared equally among 7 children. How many stickers does each child receive?", "A) 8", "B) 6", "C) 7", "D) 9", "Answer: A", 3),
            ("72 cookies are packed equally into 8 boxes. How many cookies are in each box?", "A) 7", "B) 9", "C) 8", "D) 10", "Answer: B", 3),
            ("What is 84 / 7?", "A) 10", "B) 11", "C) 12", "D) 13", "Answer: C", 3),
            ("A baker packs 90 muffins equally into 6 trays. How many muffins are on each tray?", "A) 12", "B) 14", "C) 16", "D) 15", "Answer: D", 4),
            # Section: Symbol / Unknown Equations (Q21-Q24)
            ("N + N = 14. What is N?", "A) 7", "B) 6", "C) 8", "D) 14", "Answer: A", 3),
            ("N x 3 = 27. What is N?", "A) 7", "B) 9", "C) 8", "D) 6", "Answer: B", 3),
            ("N + N + N = 21. What is N?", "A) 5", "B) 6", "C) 7", "D) 8", "Answer: C", 3),
            ("N x N = 49. What is N?", "A) 5", "B) 6", "C) 8", "D) 7", "Answer: D", 4),
            # Section: Order of Operations (Q25-Q28)
            ("What is 2 x 9 + 200 + 9?", "A) 227", "B) 228", "C) 229", "D) 225", "Answer: A", 3),
            ("What is 6 x 7 + 8?", "A) 48", "B) 50", "C) 52", "D) 54", "Answer: B", 3),
            ("What is 5 x 5 - 5?", "A) 15", "B) 19", "C) 20", "D) 25", "Answer: C", 3),
            ("What is 3 x 8 + 4 x 2?", "A) 28", "B) 30", "C) 31", "D) 32", "Answer: D", 4),
            # Section: Missing Number / Working Backwards (Q29-Q32)
            ("A number plus 25 equals 61. What is the number?", "A) 36", "B) 35", "C) 37", "D) 38", "Answer: A", 3),
            ("A number multiplied by 7 gives 63. What is the number?", "A) 7", "B) 9", "C) 8", "D) 6", "Answer: B", 3),
            ("What number, when added to 48, gives exactly 100?", "A) 50", "B) 51", "C) 52", "D) 53", "Answer: C", 3),
            ("A box had some chocolates. After eating 15, there are 28 left. How many chocolates were in the box at the start?", "A) 40", "B) 41", "C) 42", "D) 43", "Answer: D", 4),
            # Section: Multi-step Word Problems (Q33-Q44)
            ("Tom has 5 packs of marbles with 8 in each pack. He gives 12 marbles to his friend. How many marbles does Tom have left?", "A) 28", "B) 32", "C) 36", "D) 40", "Answer: A", 3),
            ("A bookshelf has 6 shelves. Each shelf holds exactly 9 books. How many books can the bookshelf hold in total?", "A) 48", "B) 54", "C) 56", "D) 60", "Answer: B", 3),
            ("There are 4 boxes with 8 chocolates each and 3 boxes with 6 chocolates each. How many chocolates are there in total?", "A) 46", "B) 48", "C) 50", "D) 52", "Answer: C", 4),
            ("Maria has 72 stickers. She arranges them into equal rows of 8. How many complete rows does she make?", "A) 7", "B) 8", "C) 10", "D) 9", "Answer: D", 3),
            ("What is the missing number? 7 x ? = 42", "A) 6", "B) 7", "C) 8", "D) 5", "Answer: A", 3),
            ("What is 100 - 37 - 28?", "A) 33", "B) 35", "C) 37", "D) 39", "Answer: B", 3),
            ("What is 9 x 9 - 9?", "A) 64", "B) 70", "C) 72", "D) 81", "Answer: C", 3),
            ("A class of 28 students is divided equally into groups of 4. How many groups are there?", "A) 5", "B) 6", "C) 8", "D) 7", "Answer: D", 3),
            ("Jake thinks of a number. He doubles it and adds 6. The result is 20. What was Jake's number?", "A) 7", "B) 6", "C) 8", "D) 9", "Answer: A", 4),
            ("Sam doubles his candy collection, then eats 8 candies. He now has 24 candies. How many candies did Sam have at the start?", "A) 14", "B) 16", "C) 18", "D) 20", "Answer: B", 4),
            ("The product of two numbers is 36. One of the numbers is 4. What is the other number?", "A) 7", "B) 8", "C) 9", "D) 10", "Answer: C", 4),
            ("A train departs with 45 passengers. At the first stop, 18 get off and 27 get on. How many passengers are on the train now?", "A) 50", "B) 52", "C) 53", "D) 54", "Answer: D", 4),
            # Section: Symbol Patterns and Clever Problems (Q45-Q50)
            ("Each [S] equals 6. What is [S] + [S] + [S] + [S]?", "A) 24", "B) 18", "C) 20", "D) 30", "Answer: A", 3),
            ("N + N = 18. M x N = 63. What is M?", "A) 6", "B) 7", "C) 8", "D) 9", "Answer: B", 4),
            ("What is the sum of all whole numbers from 1 to 10?", "A) 50", "B) 52", "C) 55", "D) 60", "Answer: C", 3),
            ("What is 5 + 10 + 15 + 20 + 25?", "A) 70", "B) 72", "C) 73", "D) 75", "Answer: D", 3),
            ("A jar holds 48 sweets divided equally into 6 smaller bags. How many sweets are in each bag?", "A) 8", "B) 7", "C) 9", "D) 6", "Answer: A", 3),
            ("Three friends share 96 stickers equally. Each friend then gives 5 stickers to a younger sibling. How many stickers does each friend have left?", "A) 24", "B) 27", "C) 28", "D) 30", "Answer: B", 4),
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
    title_style = ParagraphStyle('CustomTitle', parent=styles['Heading1'], fontSize=16,
                                 textColor=colors.HexColor('#2563eb'), spaceAfter=6)
    story.append(Paragraph(f"Grade 3-4 (Ecolier) - {category_key}: {data['title']}", title_style))
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
        story.append(Paragraph(
            "3-point questions: correct = 3pts, wrong = -0.75pts | "
            "4-point questions: correct = 4pts, wrong = -1pt | "
            "Unanswered = 0",
            styles['Normal']
        ))
    else:
        # Questions
        story.append(Paragraph("Instructions", styles['Heading3']))
        story.append(Paragraph(
            "Answer each question. "
            "3-point questions: correct = 3pts, wrong = -0.75pts | "
            "4-point questions: correct = 4pts, wrong = -1pt | "
            "Unanswered = 0",
            styles['Normal']
        ))
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
    """Generate all Grade 3-4 PDFs and save base64 encoded versions."""
    output_dir = '/Users/samiksha/Downloads/math-kangaroo-practice'
    results = {}

    for category_key in CONTENT.keys():
        print(f"Generating PDFs for {category_key}...")

        # Generate questions PDF
        q_pdf = generate_pdf(category_key, is_answers=False)
        q_b64 = base64.b64encode(q_pdf).decode('utf-8')

        # Generate answers PDF
        a_pdf = generate_pdf(category_key, is_answers=True)
        a_b64 = base64.b64encode(a_pdf).decode('utf-8')

        results[f"{category_key}_questions"] = q_b64
        results[f"{category_key}_answers"] = a_b64

        print(f"  Questions PDF: {len(q_b64)} chars")
        print(f"  Answers PDF: {len(a_b64)} chars")

    # Save to JSON
    json_path = f"{output_dir}/all_pdfs_base64_grade34.json"
    with open(json_path, 'w') as f:
        json.dump(results, f)

    json_size = sum(len(v) for v in results.values())
    print(f"\nSaved {json_path} ({json_size} total base64 chars)")

    # Write grade34_data.js
    js_path = f"{output_dir}/grade34_data.js"
    js_entries = ', '.join(f'"{k}": "{v}"' for k, v in results.items())
    with open(js_path, 'w') as f:
        f.write(f'const pdfData = {{ {js_entries} }};\n')

    print(f"Saved {js_path}")
    print(f"\nDone. JSON file size: {len(json.dumps(results))} bytes")


if __name__ == '__main__':
    main()
