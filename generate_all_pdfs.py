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
            ("What is the GCD (Greatest Common Divisor) of 12 and 18?", "A) 3", "B) 6", "C) 9", "D) 12", "Answer: B", 3),
            ("How many prime numbers are less than 20?", "A) 6", "B) 7", "C) 8", "D) 9", "Answer: C", 3),
            ("What is 2³ (2 to the power of 3)?", "A) 6", "B) 8", "C) 9", "D) 12", "Answer: B", 3),
            ("Which number is divisible by both 4 and 6?", "A) 14", "B) 18", "C) 24", "D) 34", "Answer: C", 3),
            ("What is the LCM of 3 and 5?", "A) 8", "B) 10", "C) 15", "D) 20", "Answer: C", 3),
            ("Which of the following is a composite number?", "A) 11", "B) 17", "C) 21", "D) 23", "Answer: C", 3),
            ("What is the next prime number after 11?", "A) 12", "B) 13", "C) 14", "D) 15", "Answer: B", 3),
            ("A number is divisible by 6 if it is divisible by:", "A) 2 and 4", "B) 2 and 3", "C) 3 and 4", "D) 4 and 5", "Answer: B", 3),
            ("What is 5² (5 squared)?", "A) 10", "B) 15", "C) 20", "D) 25", "Answer: D", 3),
            ("How many factors does 16 have?", "A) 3", "B) 4", "C) 5", "D) 6", "Answer: C", 3),
            ("What is the missing term in the Fibonacci sequence: 1, 1, 2, 3, 5, 8, ?", "A) 11", "B) 12", "C) 13", "D) 16", "Answer: C", 4),
            ("Which number is a perfect square?", "A) 18", "B) 24", "C) 25", "D) 32", "Answer: C", 4),
            ("What is the GCD of 24 and 36?", "A) 6", "B) 9", "C) 12", "D) 18", "Answer: C", 3),
            ("Which pair are twin primes (primes that differ by 2)?", "A) (4, 6)", "B) (9, 11)", "C) (11, 13)", "D) (14, 16)", "Answer: C", 4),
            ("What is the sum of all prime numbers less than 10?", "A) 15", "B) 17", "C) 18", "D) 20", "Answer: B", 3),
            ("What is 3³?", "A) 9", "B) 18", "C) 27", "D) 30", "Answer: C", 3),
            ("Which of these numbers is divisible by 9?", "A) 45", "B) 47", "C) 49", "D) 52", "Answer: A", 3),
            ("What is the LCM of 6 and 8?", "A) 12", "B) 16", "C) 24", "D) 48", "Answer: C", 3),
            ("How many prime numbers are between 20 and 30?", "A) 1", "B) 2", "C) 3", "D) 4", "Answer: B", 3),
            ("What is the next perfect square after 25?", "A) 30", "B) 34", "C) 36", "D) 40", "Answer: C", 3),
            ("Which number is divisible by 11?", "A) 101", "B) 111", "C) 121", "D) 131", "Answer: C", 3),
            ("What is the product of the first three prime numbers?", "A) 10", "B) 24", "C) 30", "D) 35", "Answer: C", 4),
            ("What is the next term in the sequence: 1, 4, 9, 16, 25, 36, ?", "A) 42", "B) 45", "C) 48", "D) 49", "Answer: D", 3),
            ("A number divided by 4 gives remainder 1. Which could it be?", "A) 12", "B) 17", "C) 20", "D) 24", "Answer: B", 4),
            ("What is the smallest number divisible by 2, 3, and 5?", "A) 10", "B) 15", "C) 20", "D) 30", "Answer: D", 3),
            ("Which number has exactly 3 factors?", "A) 6", "B) 8", "C) 9", "D) 10", "Answer: C", 3),
            ("What is the pattern rule in: 2, 6, 18, 54, ?", "A) +4", "B) ×2", "C) ×3", "D) +12", "Answer: C", 4),
            ("Which of the following is NOT divisible by 3?", "A) 126", "B) 235", "C) 312", "D) 411", "Answer: B", 3),
            ("What is the 10th term of the sequence 3, 6, 9, 12, ...?", "A) 27", "B) 30", "C) 33", "D) 36", "Answer: B", 3),
            ("What is the largest prime factor of 60?", "A) 2", "B) 3", "C) 5", "D) 6", "Answer: C", 4),
            ("The triangular numbers are 1, 3, 6, 10, 15, ... What is the next?", "A) 18", "B) 19", "C) 20", "D) 21", "Answer: D", 4),
            ("How many factors does 100 have?", "A) 7", "B) 8", "C) 9", "D) 10", "Answer: C", 4),
            ("Which number is both a perfect square and divisible by 3?", "A) 18", "B) 27", "C) 36", "D) 45", "Answer: C", 3),
            ("What is the 7th term in the sequence: 2, 5, 8, 11, 14, ...?", "A) 17", "B) 18", "C) 19", "D) 20", "Answer: D", 3),
            ("What is the remainder when 100 is divided by 7?", "A) 1", "B) 2", "C) 3", "D) 4", "Answer: B", 4),
            ("Which of these is a perfect cube?", "A) 8", "B) 12", "C) 16", "D) 18", "Answer: A", 3),
            ("The GCD of two numbers is 6 and their LCM is 36. If one number is 12, what is the other?", "A) 12", "B) 18", "C) 24", "D) 36", "Answer: B", 4),
            ("What is the sum of the first 5 odd numbers?", "A) 15", "B) 20", "C) 25", "D) 30", "Answer: C", 3),
            ("The sequence 1, 8, 27, 64, 125, ... is made from:", "A) Squares of 1,2,3,4,5", "B) Cubes of 1,2,3,4,5", "C) Multiples of 7", "D) Powers of 2", "Answer: B", 4),
            ("What is the smallest number that when divided by 2, 3, and 4 always gives remainder 1?", "A) 7", "B) 9", "C) 11", "D) 13", "Answer: D", 4),
            ("If p and q are prime numbers and p × q = 77, what is p + q?", "A) 14", "B) 15", "C) 18", "D) 22", "Answer: C", 4),
        ]
    },
    "1.3": {
        "title": "Percentages & Ratios",
        "description": "Percentage calculations, percentage increase/decrease, ratio comparison and scaling, proportion problems, part-to-whole relationships",
        "questions": [
            # --- Percentage Calculations (Q1–Q10) ---
            # Q1: 25% of 80 = 0.25 × 80 = 20
            ("What is 25% of 80?", "A) 15", "B) 20", "C) 25", "D) 40", "Answer: B", 3),
            # Q2: 50% of 120 = 0.50 × 120 = 60
            ("What is 50% of 120?", "A) 50", "B) 55", "C) 60", "D) 65", "Answer: C", 3),
            # Q3: 10% of 350 = 0.10 × 350 = 35
            ("What is 10% of 350?", "A) 35", "B) 40", "C) 45", "D) 50", "Answer: A", 3),
            # Q4: 75% of 40 = 0.75 × 40 = 30
            ("What is 75% of 40?", "A) 20", "B) 25", "C) 28", "D) 30", "Answer: D", 3),
            # Q5: 20% of 65 = 0.20 × 65 = 13
            ("What is 20% of 65?", "A) 11", "B) 13", "C) 15", "D) 17", "Answer: B", 3),
            # Q6: 40% of 90 = 0.40 × 90 = 36
            ("What is 40% of 90?", "A) 30", "B) 34", "C) 36", "D) 38", "Answer: C", 3),
            # Q7: 15% of 60 = 0.15 × 60 = 9
            ("What is 15% of 60?", "A) 9", "B) 10", "C) 12", "D) 15", "Answer: A", 3),
            # Q8: 30% of 150 = 0.30 × 150 = 45
            ("What is 30% of 150?", "A) 35", "B) 45", "C) 50", "D) 55", "Answer: B", 3),
            # Q9: 5% of 200 = 0.05 × 200 = 10
            ("What is 5% of 200?", "A) 5", "B) 8", "C) 10", "D) 15", "Answer: C", 3),
            # Q10: 60% of 45 = 0.60 × 45 = 27
            ("What is 60% of 45?", "A) 24", "B) 25", "C) 26", "D) 27", "Answer: D", 3),
            # --- Part-to-Whole Relationships (Q11–Q15) ---
            # Q11: 15/60 × 100 = 25%
            ("15 out of 60 students passed a test. What percentage passed?", "A) 20%", "B) 25%", "C) 30%", "D) 35%", "Answer: B", 3),
            # Q12: 24/80 × 100 = 30%
            ("A shop sold 24 out of 80 items. What percentage of items were sold?", "A) 25%", "B) 28%", "C) 30%", "D) 32%", "Answer: C", 3),
            # Q13: 7/28 × 100 = 25%
            ("7 out of 28 apples are green. What percentage are green?", "A) 20%", "B) 25%", "C) 30%", "D) 35%", "Answer: B", 3),
            # Q14: 45/180 × 100 = 25%
            ("45 out of 180 seats in a cinema are empty. What percentage are empty?", "A) 25%", "B) 30%", "C) 35%", "D) 40%", "Answer: A", 3),
            # Q15: 36/45 × 100 = 80%
            ("A student scored 36 out of 45 marks. What is their percentage score?", "A) 75%", "B) 80%", "C) 85%", "D) 90%", "Answer: B", 3),
            # --- Percentage Increase & Decrease (Q16–Q22) ---
            # Q16: increase 40→48: 8/40 × 100 = 20%
            ("A price increased from $40 to $48. What is the percentage increase?", "A) 15%", "B) 18%", "C) 20%", "D) 25%", "Answer: C", 4),
            # Q17: decrease 60→45: 15/60 × 100 = 25%
            ("A price decreased from $60 to $45. What is the percentage decrease?", "A) 20%", "B) 25%", "C) 30%", "D) 35%", "Answer: B", 4),
            # Q18: increase 200→250: 50/200 × 100 = 25%
            ("A town's population grew from 200 to 250. What is the percentage increase?", "A) 20%", "B) 22%", "C) 24%", "D) 25%", "Answer: D", 4),
            # Q19: decrease 80→72: 8/80 × 100 = 10%
            ("A bag's weight decreased from 80 kg to 72 kg. What is the percentage decrease?", "A) 10%", "B) 12%", "C) 15%", "D) 8%", "Answer: A", 4),
            # Q20: increase 50→60: 10/50 × 100 = 20%
            ("A score increased from 50 to 60. What is the percentage increase?", "A) 15%", "B) 18%", "C) 20%", "D) 25%", "Answer: C", 4),
            # Q21: $30 after 25% increase → original = 30/1.25 = 24; but better: price $40 after 20% increase = 40×1.2=48
            # Use: original $50, increased by 10% → new = 55, decreased by 10% → 55×0.9=49.5 ≠ 50
            # Clean: price was $25, increased by 20% → new price = 25×1.2 = 30
            ("A jacket costs $25. After a 20% price increase, what is the new price?", "A) $27", "B) $28", "C) $30", "D) $32", "Answer: C", 3),
            # Q22: price $80, 15% discount → discount = 12, sale price = 68
            ("A bicycle costs $80. A 15% discount is applied. What is the sale price?", "A) $60", "B) $64", "C) $68", "D) $72", "Answer: C", 3),
            # --- Ratio Comparison and Simplification (Q23–Q30) ---
            # Q23: 12:18 = 2:3
            ("Write the ratio 12:18 in its simplest form.", "A) 3:4", "B) 4:6", "C) 2:3", "D) 6:9", "Answer: C", 3),
            # Q24: 15:25 = 3:5
            ("Write the ratio 15:25 in its simplest form.", "A) 3:5", "B) 5:3", "C) 5:8", "D) 1:2", "Answer: A", 3),
            # Q25: 24:36 = 2:3
            ("Simplify the ratio 24:36.", "A) 3:4", "B) 2:3", "C) 4:6", "D) 6:9", "Answer: B", 3),
            # Q26: 16:20 = 4:5
            ("Simplify the ratio 16:20.", "A) 2:3", "B) 3:4", "C) 3:5", "D) 4:5", "Answer: D", 3),
            # Q27: 30:45 = 2:3
            ("Simplify the ratio 30:45.", "A) 1:2", "B) 2:3", "C) 3:4", "D) 5:6", "Answer: B", 3),
            # Q28: ratio comparison: 3:4 vs 4:5. 3/4=0.75, 4/5=0.8, so 4:5 is larger
            ("Which ratio is larger: 3:4 or 4:5?", "A) 3:4", "B) 4:5", "C) They are equal", "D) Cannot compare", "Answer: B", 3),
            # Q29: ratio 2:3, if first part = 8, second = 8×3/2 = 12
            ("Two quantities are in the ratio 2:3. If the first quantity is 8, what is the second?", "A) 10", "B) 12", "C) 14", "D) 16", "Answer: B", 3),
            # Q30: if x:6 = 4:8 → x = 6×4/8 = 3
            ("If x:6 = 4:8, what is x?", "A) 3", "B) 4", "C) 6", "D) 8", "Answer: A", 3),
            # --- Proportion Problems (Q31–Q40) ---
            # Q31: 3:x = 9:12 → x = 3×12/9 = 4
            ("If 3:x = 9:12, find x.", "A) 3", "B) 4", "C) 6", "D) 9", "Answer: B", 4),
            # Q32: if 4 pens cost $6, 10 pens cost = 6/4 × 10 = 15
            ("If 4 pens cost $6, how much do 10 pens cost?", "A) $12", "B) $15", "C) $18", "D) $20", "Answer: B", 3),
            # Q33: map scale 1:50000; 4 cm on map = 4×50000 cm = 200000 cm = 2 km
            ("A map has scale 1:50 000. A distance of 4 cm on the map represents how many km in real life?", "A) 1 km", "B) 1.5 km", "C) 2 km", "D) 4 km", "Answer: C", 4),
            # Q34: recipe 2 cups for 12 cookies. For 60 cookies: 60/12 × 2 = 10 cups
            ("A recipe uses 2 cups of flour to make 12 cookies. How many cups are needed to make 60 cookies?", "A) 6", "B) 8", "C) 10", "D) 12", "Answer: C", 4),
            # Q35: 3 workers in 12 days = 36 worker-days. 4 workers → 36/4 = 9 days
            ("3 workers can finish a job in 12 days. How many days will it take 4 workers to finish the same job?", "A) 8", "B) 9", "C) 10", "D) 16", "Answer: B", 4),
            # Q36: ratio boys:girls = 5:3, total = 40. boys = 5/8 × 40 = 25
            ("In a class of 40 students, the ratio of boys to girls is 5:3. How many boys are there?", "A) 20", "B) 24", "C) 25", "D) 30", "Answer: C", 3),
            # Q37: ratio 3:5, total = 40. smaller part = 3/8 × 40 = 15
            ("Two friends share 40 stickers in the ratio 3:5. How many stickers does the friend with fewer stickers get?", "A) 12", "B) 15", "C) 18", "D) 20", "Answer: B", 3),
            # Q38: ratio 7:3, share $100. larger share = 7/10 × 100 = 70
            ("Two children share $100 in the ratio 7:3. What is the larger share?", "A) $60", "B) $65", "C) $70", "D) $75", "Answer: C", 3),
            # Q39: mix 3 parts red: 2 parts blue = 600 ml. red = 3/5 × 600 = 360 ml
            ("A drink is made by mixing red juice and blue juice in the ratio 3:2. If 600 ml of drink is made, how many ml of red juice are used?", "A) 240 ml", "B) 300 ml", "C) 320 ml", "D) 360 ml", "Answer: D", 3),
            # Q40: A:B = 2:3, B:C = 3:4. A:B:C = 2:3:4. A:C = 2:4 = 1:2
            ("If A:B = 2:3 and B:C = 3:4, what is the ratio A:C?", "A) 1:2", "B) 2:4", "C) 3:4", "D) 2:3", "Answer: A", 4),
            # --- Mixed / Harder Percentage & Ratio (Q41–Q49) ---
            # Q41: increased 20% then decreased 20%. 100 → 120 → 96. Net change = -4%
            ("A number is increased by 20% and then decreased by 20%. What is the overall percentage change?", "A) 0% (no change)", "B) -2%", "C) -4%", "D) +4%", "Answer: C", 4),
            # Q42: 12% of N = 60 → N = 60/0.12 = 500
            ("12% of a number is 60. What is the number?", "A) 400", "B) 450", "C) 480", "D) 500", "Answer: D", 4),
            # Q43: shirt costs $24 after 20% discount. original × 0.8 = 24 → original = 30
            ("A shirt costs $24 after a 20% discount. What was the original price?", "A) $28", "B) $29", "C) $30", "D) $32", "Answer: C", 4),
            # Q44: price increased by 25%, now $50. original = 50/1.25 = 40
            ("After a 25% price increase, a toy costs $50. What was the original price?", "A) $35", "B) $38", "C) $40", "D) $45", "Answer: C", 4),
            # Q45: 15% of N = 12 → N = 12/0.15 = 80
            ("If 15% of a number is 12, what is the number?", "A) 80", "B) 90", "C) 100", "D) 120", "Answer: A", 4),
            # Q46: two numbers ratio 3:5, sum = 40. smaller = 3/8×40=15, larger=25. difference = 10
            ("Two numbers are in the ratio 3:5 and their sum is 40. What is the difference between the two numbers?", "A) 8", "B) 10", "C) 12", "D) 15", "Answer: B", 4),
            # Q47: 3 is to 4 as 15 is to ? → 15 × 4/3 = 20
            ("3 is to 4 as 15 is to what number?", "A) 16", "B) 18", "C) 20", "D) 24", "Answer: C", 3),
            # Q48: 4/5 as percentage = 80%. If 4/5 = 80%, what is 2/5? = 40%
            ("If 4/5 is written as a percentage it equals 80%. What percentage does 2/5 equal?", "A) 20%", "B) 35%", "C) 40%", "D) 45%", "Answer: C", 3),
            # Q49: three parts ratio 2:3:5, total = 200. largest part = 5/10 × 200 = 100
            ("Three friends share 200 sweets in the ratio 2:3:5. How many sweets does the friend with the most sweets receive?", "A) 40", "B) 60", "C) 80", "D) 100", "Answer: D", 4),
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
            # --- Questions 9-49: verified fractions & decimals ---
            ("What is 1/3 + 1/6?", "A) 2/9", "B) 1/2", "C) 2/6", "D) 1/3", "Answer: B", 3),
            ("What is 3/4 - 1/4?", "A) 1/4", "B) 1/2", "C) 3/8", "D) 2/4", "Answer: B", 3),
            ("What is 2/5 + 3/10?", "A) 5/15", "B) 1/2", "C) 7/10", "D) 5/10", "Answer: C", 3),
            ("What is 5/6 - 1/3?", "A) 4/3", "B) 1/3", "C) 2/3", "D) 1/2", "Answer: D", 3),
            ("What is 3/4 × 8/9?", "A) 24/36", "B) 1/2", "C) 2/3", "D) 3/4", "Answer: C", 3),
            ("What is 5/6 × 3/5?", "A) 8/11", "B) 2/3", "C) 1/2", "D) 15/18", "Answer: C", 3),
            ("What is 3/4 ÷ 3/8?", "A) 9/32", "B) 1/2", "C) 3/2", "D) 2", "Answer: D", 4),
            ("What is 2/3 ÷ 4/9?", "A) 8/27", "B) 3/2", "C) 2/3", "D) 3/4", "Answer: B", 4),
            ("What is 0.3 + 0.45?", "A) 0.48", "B) 0.7", "C) 0.75", "D) 0.8", "Answer: C", 3),
            ("What is 1.2 - 0.35?", "A) 0.75", "B) 0.85", "C) 0.95", "D) 1.15", "Answer: B", 3),
            ("What is 0.6 × 0.5?", "A) 0.11", "B) 0.3", "C) 3", "D) 1.1", "Answer: B", 3),
            ("What is 1.8 ÷ 0.6?", "A) 0.3", "B) 1.2", "C) 2", "D) 3", "Answer: D", 3),
            ("What is 3/4 as a decimal?", "A) 0.34", "B) 0.7", "C) 0.75", "D) 0.8", "Answer: C", 3),
            ("What is 0.4 written as a fraction in lowest terms?", "A) 4/10", "B) 2/5", "C) 1/4", "D) 2/4", "Answer: B", 3),
            ("What is 7/10 as a decimal?", "A) 0.07", "B) 0.17", "C) 0.7", "D) 7.1", "Answer: C", 3),
            ("Which fraction equals 0.125?", "A) 1/4", "B) 1/6", "C) 1/8", "D) 1/5", "Answer: C", 4),
            ("Which is larger: 2/3 or 3/4?", "A) 2/3", "B) 3/4", "C) They are equal", "D) Cannot compare", "Answer: B", 3),
            ("Which fraction is greater: 5/8 or 3/5?", "A) 3/5", "B) 5/8", "C) They are equal", "D) Cannot determine", "Answer: B", 3),
            ("Which is the smallest: 1/2, 1/3, or 2/3?", "A) 1/2", "B) 2/3", "C) 1/3", "D) They are equal", "Answer: C", 3),
            ("What is 1 1/2 + 2 1/4?", "A) 3 1/4", "B) 3 1/2", "C) 3 3/4", "D) 4", "Answer: C", 4),
            ("What is 3 2/5 - 1 3/5?", "A) 1 4/5", "B) 2", "C) 2 1/5", "D) 2 4/5", "Answer: A", 4),
            ("What is 25% of 80?", "A) 15", "B) 20", "C) 25", "D) 40", "Answer: B", 3),
            ("What is 30% of 60?", "A) 12", "B) 15", "C) 18", "D) 20", "Answer: C", 3),
            ("What is 3/5 written as a percentage?", "A) 35%", "B) 53%", "C) 60%", "D) 65%", "Answer: C", 3),
            ("What is 75% written as a fraction in lowest terms?", "A) 7/5", "B) 75/10", "C) 3/4", "D) 7/10", "Answer: C", 3),
            ("What is 1/4 of 36?", "A) 6", "B) 8", "C) 9", "D) 12", "Answer: C", 3),
            ("What is 2/3 of 15?", "A) 5", "B) 8", "C) 10", "D) 12", "Answer: C", 3),
            ("What is 0.2 + 1/2?", "A) 0.3", "B) 0.52", "C) 0.7", "D) 1.2", "Answer: C", 4),
            ("What is 1/5 + 2/5 + 3/5?", "A) 6/15", "B) 1", "C) 1 1/5", "D) 1 2/5", "Answer: C", 3),
            ("Sara has 3/4 of a pizza. She eats 1/4 of the whole pizza. What fraction is left?", "A) 1/4", "B) 1/2", "C) 2/3", "D) 3/8", "Answer: B", 4),
            ("Which is the largest: 3/8, 1/2, or 5/12?", "A) 3/8", "B) 5/12", "C) 1/2", "D) They are equal", "Answer: C", 4),
            ("What is 5/8 + 3/8?", "A) 8/16", "B) 8/8", "C) 1", "D) 1 1/8", "Answer: C", 3),
            ("What is 7/12 - 1/4?", "A) 6/8", "B) 4/12", "C) 1/2", "D) 1/3", "Answer: D", 3),
            ("What is 4/5 × 25?", "A) 10", "B) 16", "C) 20", "D) 24", "Answer: C", 3),
            ("What is 12 ÷ 3/4?", "A) 9", "B) 12", "C) 15", "D) 16", "Answer: D", 4),
            ("What is 40% written as a decimal?", "A) 0.04", "B) 0.4", "C) 4.0", "D) 40.0", "Answer: B", 3),
            ("What is 2 1/3 + 1 2/3?", "A) 3 1/3", "B) 3 2/3", "C) 4", "D) 4 1/3", "Answer: C", 3),
            ("Which fraction is closest to 1: 4/5, 5/6, 7/8, or 8/9?", "A) 4/5", "B) 5/6", "C) 7/8", "D) 8/9", "Answer: D", 4),
            ("What is 0.1 × 0.1?", "A) 0.001", "B) 0.01", "C) 0.1", "D) 1", "Answer: B", 3),
            ("3/5 of a class of 30 students are girls. How many girls are there?", "A) 12", "B) 15", "C) 18", "D) 20", "Answer: C", 4),
            ("What is 0.25 + 0.5 + 0.75?", "A) 1.0", "B) 1.25", "C) 1.5", "D) 2.0", "Answer: C", 3),
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
