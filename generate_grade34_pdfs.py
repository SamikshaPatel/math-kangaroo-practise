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
    "1.2": {
        "title": "Multi-step Calculations",
        "description": "Chained operations, balance problems, sequential reasoning and multi-step word problems",
        "grade": "3-4",
        "questions": [
            # Chained Arithmetic
            ("What is 3 x 4 + 2 x 5?", "A) 22", "B) 70", "C) 26", "D) 24", "Answer: A", 4),
            ("What is 48 / 6 + 5 x 3?", "A) 21", "B) 23", "C) 25", "D) 27", "Answer: B", 4),
            ("What is 100 - 4 x 9?", "A) 60", "B) 62", "C) 64", "D) 66", "Answer: C", 4),
            ("What is 7 x 8 - 6 x 5?", "A) 20", "B) 22", "C) 24", "D) 26", "Answer: D", 4),
            ("What is (12 + 8) x 3?", "A) 60", "B) 56", "C) 52", "D) 64", "Answer: A", 4),
            ("What is (15 - 7) x (3 + 5)?", "A) 60", "B) 64", "C) 68", "D) 72", "Answer: B", 4),
            ("What is 9 x 9 - 4 x 4?", "A) 55", "B) 60", "C) 65", "D) 70", "Answer: C", 4),
            ("What is 5 x (12 - 4) - 7?", "A) 27", "B) 29", "C) 31", "D) 33", "Answer: D", 4),
            ("What is 6 x 7 + 8 x 9 - 10?", "A) 104", "B) 106", "C) 108", "D) 110", "Answer: A", 5),
            ("What is (5 + 4) x (8 - 3)?", "A) 43", "B) 45", "C) 47", "D) 49", "Answer: B", 4),
            # Balance / Weight
            ("3 apples balance 6 plums on a scale. One apple weighs 60 g. How much does one plum weigh?", "A) 20 g", "B) 25 g", "C) 30 g", "D) 35 g", "Answer: C", 4),
            ("4 boxes weigh the same as 6 bags. Each bag weighs 8 kg. How much does one box weigh?", "A) 6 kg", "B) 8 kg", "C) 10 kg", "D) 12 kg", "Answer: D", 4),
            ("There are 4 red bricks (3 kg each) and 3 blue bricks (5 kg each). What is the total weight?", "A) 27 kg", "B) 29 kg", "C) 31 kg", "D) 33 kg", "Answer: A", 4),
            ("On a balance scale: 2 mangoes = 3 pears. Each pear weighs 80 g. How much does one mango weigh?", "A) 100 g", "B) 120 g", "C) 140 g", "D) 160 g", "Answer: B", 4),
            ("A box of 8 oranges weighs exactly 1 kg. Each orange weighs 100 g. What does the empty box weigh?", "A) 100 g", "B) 150 g", "C) 200 g", "D) 250 g", "Answer: C", 4),
            ("2 cats and 1 dog weigh 26 kg together. The dog weighs 2 kg more than each cat. How much does the dog weigh?", "A) 6 kg", "B) 8 kg", "C) 9 kg", "D) 10 kg", "Answer: D", 5),
            ("5 pencils cost the same as 2 pens. Each pencil costs 6 cents. How much does one pen cost?", "A) 15 cents", "B) 12 cents", "C) 18 cents", "D) 20 cents", "Answer: A", 4),
            ("A jug of juice is poured equally into 4 glasses of 250 ml each. How many litres of juice was in the jug?", "A) 0.5 L", "B) 1 L", "C) 1.5 L", "D) 2 L", "Answer: B", 4),
            # Sequential / Story
            ("A baker makes 5 batches of 12 cookies each. He sells 30. How many are left?", "A) 20", "B) 25", "C) 30", "D) 35", "Answer: C", 4),
            ("Sophie has 50 coins. She gives away half and then finds 8 more. How many coins does she have now?", "A) 27", "B) 29", "C) 31", "D) 33", "Answer: D", 4),
            ("A train has 8 coaches, each with 6 rows of 4 seats. How many seats does the train have in total?", "A) 192", "B) 182", "C) 172", "D) 162", "Answer: A", 4),
            ("Karl helps his dad 4 days (earning EUR 5 per day) and his mum 3 days (earning EUR 3 per day). How much does Karl earn in total?", "A) 27", "B) 29", "C) 31", "D) 33", "Answer: B", 4),
            ("Lily has 3 bags of 8 sweets and buys 2 more bags of 6 sweets. She then eats 7. How many sweets does Lily have left?", "A) 25", "B) 27", "C) 29", "D) 31", "Answer: C", 4),
            ("A number is multiplied by 6, then 15 is subtracted, giving 45. What is the number?", "A) 7", "B) 8", "C) 9", "D) 10", "Answer: D", 5),
            ("4 children each have 5 stickers. They pool them together and share equally into 2 groups. How many stickers does each group get?", "A) 10", "B) 8", "C) 12", "D) 14", "Answer: A", 4),
            ("A shop sells 7 shirts at EUR 8 each and 4 trousers at EUR 15 each. What is the total amount earned?", "A) 112", "B) 116", "C) 120", "D) 124", "Answer: B", 4),
            ("Two numbers add to 40. The larger is 3 times the smaller. What is the larger number?", "A) 25", "B) 28", "C) 30", "D) 32", "Answer: C", 4),
            ("A recipe needs 3 eggs per cake. Maya wants to bake 4 cakes but only has 7 eggs. How many more eggs does she need?", "A) 2", "B) 3", "C) 4", "D) 5", "Answer: D", 4),
            ("Adam is 8 years old. His father is 3 times Adam's age plus 2 extra years. How old is Adam's father?", "A) 26", "B) 24", "C) 28", "D) 30", "Answer: A", 4),
            ("A bus starts with 18 passengers. At stop 1: 7 get off and 11 get on. At stop 2: 9 get off and 5 get on. How many passengers are on the bus now?", "A) 16", "B) 18", "C) 20", "D) 22", "Answer: B", 4),
            ("Emma saves EUR 3 per week and started with EUR 12. After how many weeks will she have EUR 27?", "A) 3", "B) 4", "C) 5", "D) 6", "Answer: C", 4),
            ("A rectangular garden has a perimeter of 36 m. Its length is twice its width. What is the length?", "A) 6 m", "B) 8 m", "C) 10 m", "D) 12 m", "Answer: D", 4),
            ("Zara buys 3 books at EUR 7 each and pays with a EUR 30 note. How much change does she receive?", "A) EUR 9", "B) EUR 7", "C) EUR 6", "D) EUR 5", "Answer: A", 4),
            ("A factory makes 150 toys per day, 5 days a week. Toys are packed in boxes of 25. How many full boxes are packed per week?", "A) 25", "B) 30", "C) 35", "D) 40", "Answer: B", 4),
            ("Mark has 3 times as many marbles as his sister. Together they have 48. How many marbles does Mark have?", "A) 30", "B) 33", "C) 36", "D) 39", "Answer: C", 4),
            ("A school trip costs EUR 12 per child and EUR 24 per teacher. 25 children and 3 teachers go. What is the total cost?", "A) 360", "B) 364", "C) 368", "D) 372", "Answer: D", 4),
            ("Hannah bakes 48 biscuits. She gives away 1/4 of them and eats 6 herself. How many biscuits are left?", "A) 30", "B) 28", "C) 32", "D) 34", "Answer: A", 4),
            ("A car travels at 60 km/h. How far does it travel in 2 hours and 30 minutes?", "A) 120 km", "B) 150 km", "C) 180 km", "D) 200 km", "Answer: B", 4),
            ("Peter has EUR 40. He buys 3 sandwiches at EUR 4 each and 2 drinks at EUR 2.50 each. How much does he have left?", "A) 20", "B) 21", "C) 23", "D) 25", "Answer: C", 4),
            ("In a class, 3/4 of the 28 students passed a test. Of those who passed, 7 got full marks. How many passed but did NOT get full marks?", "A) 8", "B) 10", "C) 12", "D) 14", "Answer: D", 5),
            ("A number is doubled and 8 is added. The result is then halved to get 12. What was the original number?", "A) 8", "B) 6", "C) 10", "D) 12", "Answer: A", 4),
            ("Leo has 5 packs of 8 cards. He trades 2 cards from each pack and receives 3 new cards per pack in return. How many cards does Leo have now?", "A) 43", "B) 45", "C) 47", "D) 49", "Answer: B", 4),
            ("Three boxes hold 90 blocks in total. Box 2 has twice as many as Box 1, and Box 3 has three times as many as Box 1. How many blocks are in Box 2?", "A) 15", "B) 25", "C) 30", "D) 45", "Answer: C", 5),
            ("A pond starts with 20 fish. Each week 12 fish are added and 5 are taken by a heron. How many fish are in the pond after 4 weeks?", "A) 36", "B) 40", "C) 44", "D) 48", "Answer: D", 4),
            ("A cinema charges EUR 6 for adults and EUR 4 for children. A family of 2 adults and 3 children buys tickets. How much do they pay in total?", "A) EUR 24", "B) EUR 26", "C) EUR 28", "D) EUR 30", "Answer: A", 4),
            ("Nina reads 15 pages on weekdays and 25 pages each weekend day. How many pages does she read in 2 full weeks?", "A) 240", "B) 250", "C) 260", "D) 270", "Answer: B", 4),
            ("A staircase has 9 steps. The 1st step is 12 cm high and each step after is 2 cm higher than the one before. What is the total height of the staircase?", "A) 162 cm", "B) 170 cm", "C) 180 cm", "D) 190 cm", "Answer: C", 4),
            ("A square field has a perimeter of 48 m. A fence post is placed every 3 m. How many posts are needed?", "A) 12", "B) 13", "C) 15", "D) 16", "Answer: D", 4),
            ("Tom collects 3 stamps per day for 2 weeks, receives 14 more as a gift, then gives away 10. How many stamps does Tom have?", "A) 46", "B) 48", "C) 44", "D) 50", "Answer: A", 4),
            ("In a magic square, each row, column and diagonal adds to the same total. The centre cell contains 5 and the corners are 2, 8, 6 and 4. What is the magic sum?", "A) 12", "B) 15", "C) 18", "D) 20", "Answer: B", 4),
        ]
    },
    "1.3": {
        "title": "Number Patterns and Sequences",
        "description": "Arithmetic and geometric sequences, pattern rules, missing terms and extending patterns",
        "grade": "3-4",
        "questions": [
            ("2, 5, 8, 11, 14, ? What is the next number?", "A) 17", "B) 16", "C) 15", "D) 18", "Answer: A", 3),
            ("3, 6, 12, 24, ? What is the next number?", "A) 36", "B) 48", "C) 60", "D) 72", "Answer: B", 3),
            ("100, 95, 90, 85, ? What is the next number?", "A) 70", "B) 75", "C) 80", "D) 85", "Answer: C", 3),
            ("1, 4, 9, 16, 25, ? What is the next number?", "A) 28", "B) 30", "C) 32", "D) 36", "Answer: D", 3),
            ("1, 2, 4, 7, 11, 16, ? What is the next number? (The differences increase by 1 each time.)", "A) 22", "B) 21", "C) 23", "D) 20", "Answer: A", 4),
            ("?, 10, 15, 20, 25. What number comes before 10?", "A) 3", "B) 5", "C) 7", "D) 8", "Answer: B", 3),
            ("1, 3, 9, 27, ? What is the next number?", "A) 54", "B) 63", "C) 81", "D) 90", "Answer: C", 3),
            ("50, 43, 36, 29, ? What is the next number?", "A) 14", "B) 16", "C) 18", "D) 22", "Answer: D", 3),
            ("2, 6, 18, 54, ? What is the next number?", "A) 162", "B) 108", "C) 144", "D) 180", "Answer: A", 3),
            ("5, ?, 17, 23. The rule is to add the same number each time. What is the missing number?", "A) 9", "B) 11", "C) 12", "D) 13", "Answer: B", 3),
            ("4, 8, 12, 16, ? What is the next number?", "A) 18", "B) 19", "C) 20", "D) 21", "Answer: C", 3),
            ("128, 64, 32, 16, ? What is the next number?", "A) 2", "B) 4", "C) 6", "D) 8", "Answer: D", 3),
            ("1, 1, 2, 3, 5, 8, ? What is the next number? (Each number is the sum of the two before it.)", "A) 13", "B) 11", "C) 12", "D) 14", "Answer: A", 3),
            ("7, 14, 21, 28, ? What is the next number?", "A) 33", "B) 35", "C) 37", "D) 42", "Answer: B", 3),
            ("3, 7, 11, 15, 19. What is the rule for this sequence?", "A) Add 2 each time", "B) Add 3 each time", "C) Add 4 each time", "D) Add 5 each time", "Answer: C", 3),
            ("1000, 900, 800, 700, ? What is the next number?", "A) 500", "B) 550", "C) 575", "D) 600", "Answer: D", 3),
            ("2, 4, 8, 16, 32, ? What is the next number?", "A) 64", "B) 48", "C) 56", "D) 72", "Answer: A", 3),
            ("15, 12, 9, 6, ? What is the next number?", "A) 1", "B) 3", "C) 4", "D) 5", "Answer: B", 3),
            ("3, ?, 27, 81. The rule is to multiply by 3 each time. What is the missing number?", "A) 6", "B) 8", "C) 9", "D) 12", "Answer: C", 3),
            ("5, 10, 20, 40, ? What is the next number?", "A) 60", "B) 70", "C) 75", "D) 80", "Answer: D", 3),
            ("Which number does NOT belong in this group: 2, 4, 6, 9, 10?", "A) 9", "B) 2", "C) 4", "D) 6", "Answer: A", 3),
            ("The pattern is: add 5, subtract 2, add 5, subtract 2... Starting from 3: 3, 8, 6, 11, 9, ? What comes next?", "A) 12", "B) 14", "C) 16", "D) 18", "Answer: B", 3),
            ("1, 2, 4, 8, 16, 32, 64, ? What is the next number?", "A) 96", "B) 112", "C) 128", "D) 144", "Answer: C", 3),
            ("What is the 10th term of the sequence 6, 12, 18, 24, ...?", "A) 54", "B) 56", "C) 58", "D) 60", "Answer: D", 3),
            ("A snail climbs 3 m up a wall each day but slips 1 m back each night. Starting from the bottom of a 10 m wall, after how many days does it first reach the top?", "A) 5", "B) 6", "C) 7", "D) 8", "Answer: A", 4),
            ("1, 5, 13, 29, ? The differences between terms double each time. What is the next number?", "A) 57", "B) 61", "C) 65", "D) 69", "Answer: B", 4),
            ("36, 30, 24, 18, ? What is the next number?", "A) 8", "B) 10", "C) 12", "D) 14", "Answer: C", 3),
            ("What is the 5th term of the sequence that starts at 2 and multiplies by 3 each time?", "A) 108", "B) 126", "C) 144", "D) 162", "Answer: D", 3),
            ("1, 3, 6, 10, 15, ? (Triangular numbers: differences increase by 1.) What is the next number?", "A) 21", "B) 18", "C) 20", "D) 22", "Answer: A", 3),
            ("The first term of a sequence is 3 and each term is 7 more than the previous term. What is the 8th term?", "A) 49", "B) 52", "C) 56", "D) 59", "Answer: B", 4),
            ("5, 10, 20, ?, 80. What is the missing number?", "A) 30", "B) 35", "C) 40", "D) 45", "Answer: C", 3),
            ("A pattern goes: 1 triangle, circle, 2 triangles, circle, 3 triangles, circle, ... How many triangles are between the 4th and 5th circles?", "A) 1", "B) 2", "C) 3", "D) 4", "Answer: D", 4),
            ("2, 5, 11, 23, ?, 95. The rule is: multiply by 2 and add 1. What is the missing number?", "A) 47", "B) 44", "C) 46", "D) 48", "Answer: A", 4),
            ("48, 24, 12, 6, ? What is the next number?", "A) 2", "B) 3", "C) 4", "D) 6", "Answer: B", 3),
            ("11, 22, 33, 44, 55. What is the rule for this sequence?", "A) Add 9 each time", "B) Add 10 each time", "C) Add 11 each time", "D) Add 12 each time", "Answer: C", 3),
            ("What is the 7th term of the sequence 5, 8, 11, 14, ...?", "A) 19", "B) 21", "C) 22", "D) 23", "Answer: D", 3),
            ("The sequence 2, 6, 12, 20, 30, ... has differences 4, 6, 8, 10, ... What is the next term?", "A) 42", "B) 38", "C) 40", "D) 44", "Answer: A", 4),
            ("3, 7, 11, ?, 19. What is the missing number?", "A) 13", "B) 15", "C) 16", "D) 17", "Answer: B", 3),
            ("In the sequence 4, 8, 12, 16, 20, 24, what is the 6th term?", "A) 20", "B) 22", "C) 24", "D) 28", "Answer: C", 3),
            ("2, 3, 5, 8, 12, 17, ? The differences increase by 1 each time. What is the next term?", "A) 20", "B) 21", "C) 22", "D) 23", "Answer: D", 3),
            ("Anna saves the same amount each week. After 3 weeks she has EUR 21. After 7 weeks she has EUR 49. How much does she save per week?", "A) EUR 7", "B) EUR 6", "C) EUR 8", "D) EUR 9", "Answer: A", 4),
            ("1, 8, 27, 64, ? These are cubes of 1, 2, 3, 4, ... What is the next number?", "A) 100", "B) 125", "C) 150", "D) 216", "Answer: B", 3),
            ("3, 9, 27, 81. What is the rule for this sequence?", "A) Multiply by 2", "B) Add 6 each time", "C) Multiply by 3", "D) Add 18 each time", "Answer: C", 3),
            ("100, 81, 64, 49, ?, 25. These are square numbers. What is the missing number?", "A) 28", "B) 30", "C) 32", "D) 36", "Answer: D", 3),
            ("In the sequence 1, 4, 9, 16, 25, ... what is the 8th term?", "A) 64", "B) 49", "C) 56", "D) 72", "Answer: A", 4),
            ("40, 36, 32, 28, ? What is the next number?", "A) 22", "B) 24", "C) 26", "D) 28", "Answer: B", 3),
            ("A frog jumps 3 lily pads forward and then 1 lily pad back. Starting on pad 1, which pad is it on after 6 moves (3 forward, 1 back, 3 forward, 1 back, 3 forward, 1 back)?", "A) 6", "B) 8", "C) 7", "D) 9", "Answer: C", 4),
            ("The pattern 1, 2, 3, 1, 2, 3, 1, 2, 3, ... repeats. What is the 16th number in this pattern?", "A) 2", "B) 3", "C) 4", "D) 1", "Answer: D", 3),
            ("A sequence follows the rule: each number is 3 less than twice the previous number. The first term is 5. What is the 3rd term?", "A) 11", "B) 9", "C) 13", "D) 15", "Answer: A", 4),
            ("The sum of the first 5 terms of an arithmetic sequence is 35. The common difference is 3. What is the first term?", "A) 0", "B) 1", "C) 2", "D) 3", "Answer: B", 4),
        ]
    },
    "2.1": {
        "title": "2D Shape Analysis",
        "description": "Properties of flat shapes, area, perimeter, overlap and counting problems",
        "grade": "3-4",
        "questions": [
            ("A square has a side of 5 cm. What is its area?", "A) 25 cm2", "B) 20 cm2", "C) 15 cm2", "D) 10 cm2", "Answer: A", 3),
            ("A rectangle is 8 cm long and 3 cm wide. What is its area?", "A) 22 cm2", "B) 24 cm2", "C) 26 cm2", "D) 28 cm2", "Answer: B", 3),
            ("How many sides does a hexagon have?", "A) 4", "B) 5", "C) 6", "D) 8", "Answer: C", 3),
            ("Which shape has all sides equal AND all angles equal to 90 degrees?", "A) Rectangle", "B) Rhombus", "C) Parallelogram", "D) Square", "Answer: D", 3),
            ("A triangle has three angles of 60 degrees each. What type of triangle is it?", "A) Equilateral", "B) Isosceles", "C) Scalene", "D) Right-angled", "Answer: A", 3),
            ("A rectangle is 10 cm long and 6 cm wide. What is its area?", "A) 56 cm2", "B) 60 cm2", "C) 64 cm2", "D) 68 cm2", "Answer: B", 3),
            ("How many right angles does a square have?", "A) 1", "B) 2", "C) 4", "D) 8", "Answer: C", 3),
            ("A grid is 4 tiles wide and 7 tiles long. How many tiles are there in total?", "A) 22", "B) 24", "C) 26", "D) 28", "Answer: D", 3),
            ("A poster covers a 3x4 section of square floor tiles. How many tiles are completely covered?", "A) 12", "B) 10", "C) 14", "D) 16", "Answer: A", 3),
            ("A square has an area of 36 cm2. What is its side length?", "A) 4 cm", "B) 6 cm", "C) 8 cm", "D) 9 cm", "Answer: B", 3),
            ("Which shape has exactly one pair of parallel sides?", "A) Rectangle", "B) Rhombus", "C) Trapezoid", "D) Square", "Answer: C", 3),
            ("A rectangle has area 40 cm2 and length 8 cm. What is its width?", "A) 3 cm", "B) 4 cm", "C) 6 cm", "D) 5 cm", "Answer: D", 3),
            ("How many lines of symmetry does a rectangle (that is not a square) have?", "A) 2", "B) 1", "C) 4", "D) 0", "Answer: A", 3),
            ("A square has area 49 cm2. What is its perimeter?", "A) 24 cm", "B) 28 cm", "C) 32 cm", "D) 36 cm", "Answer: B", 3),
            ("A rectangular room is 5 m x 4 m. Square tiles of side 1 m cover the floor. How many tiles are needed?", "A) 18", "B) 19", "C) 20", "D) 22", "Answer: C", 4),
            ("How many degrees do the angles of a triangle add up to?", "A) 90 degrees", "B) 270 degrees", "C) 360 degrees", "D) 180 degrees", "Answer: D", 3),
            ("A circle is drawn inside a 6 cm square, touching all 4 sides. What is the diameter of the circle?", "A) 6 cm", "B) 3 cm", "C) 12 cm", "D) 4 cm", "Answer: A", 3),
            ("Two identical squares each with side 4 cm are placed side by side. What is the area of the combined shape?", "A) 24 cm2", "B) 32 cm2", "C) 16 cm2", "D) 40 cm2", "Answer: B", 3),
            ("A grid has 5 columns and 6 rows, each cell 1 cm x 1 cm. What is the area of the grid?", "A) 22 cm2", "B) 28 cm2", "C) 30 cm2", "D) 36 cm2", "Answer: C", 3),
            ("A large square of side 10 cm contains a small square of side 4 cm in its centre. What is the area of the region between them?", "A) 74 cm2", "B) 80 cm2", "C) 82 cm2", "D) 84 cm2", "Answer: D", 4),
            ("What is the area of a right-angled triangle with legs 6 cm and 8 cm?", "A) 24 cm2", "B) 48 cm2", "C) 28 cm2", "D) 32 cm2", "Answer: A", 3),
            ("A rectangle is divided into two equal squares. Each square has area 25 cm2. What is the area of the original rectangle?", "A) 40 cm2", "B) 50 cm2", "C) 60 cm2", "D) 75 cm2", "Answer: B", 3),
            ("A shape made of exactly 4 unit squares (tetromino) always has an area of:", "A) 3 cm2", "B) 6 cm2", "C) 4 cm2", "D) 8 cm2", "Answer: C", 3),
            ("How many squares of ALL sizes are there on a 2x2 grid? (Count 1x1 and 2x2 squares.)", "A) 3", "B) 4", "C) 6", "D) 5", "Answer: D", 3),
            ("A circle (area 25 cm2) and a square (area 36 cm2) overlap by 8 cm2. What is the total area covered?", "A) 53 cm2", "B) 61 cm2", "C) 44 cm2", "D) 69 cm2", "Answer: A", 3),
            ("How many vertices (corners) does a hexagon have?", "A) 4", "B) 6", "C) 8", "D) 5", "Answer: B", 3),
            ("A square piece of paper is folded in half once. The resulting shape is a:", "A) Square", "B) Triangle", "C) Rectangle", "D) Hexagon", "Answer: C", 3),
            ("A rectangle has perimeter 30 cm. Its length is twice its width. What is the area?", "A) 36 cm2", "B) 42 cm2", "C) 48 cm2", "D) 50 cm2", "Answer: D", 4),
            ("A shape has 4 equal sides and 4 right angles. It must be a:", "A) Square", "B) Rectangle", "C) Rhombus", "D) Parallelogram", "Answer: A", 3),
            ("A 3x3 grid is coloured in a checkerboard pattern, starting with black in the top-left. How many black squares are there?", "A) 4", "B) 5", "C) 6", "D) 3", "Answer: B", 3),
            ("A rectangle is 9 cm long and 4 cm wide. What is its perimeter?", "A) 36 cm", "B) 52 cm", "C) 26 cm", "D) 13 cm", "Answer: C", 3),
            ("How many diagonals does a rectangle have?", "A) 1", "B) 3", "C) 4", "D) 2", "Answer: D", 3),
            ("Two shapes overlap. Shape A has area 20 cm2, shape B has area 15 cm2, and the overlap is 5 cm2. What is the total area covered?", "A) 30 cm2", "B) 35 cm2", "C) 40 cm2", "D) 25 cm2", "Answer: A", 3),
            ("A square is cut along one diagonal. What two shapes are formed?", "A) Two squares", "B) Two right-angled triangles", "C) Two rectangles", "D) Two trapezoids", "Answer: B", 3),
            ("A square of side 8 cm has a square hole of side 4 cm removed from its centre. What is the remaining area?", "A) 56 cm2", "B) 52 cm2", "C) 48 cm2", "D) 44 cm2", "Answer: C", 4),
            ("An L-shape is made by removing a 2x2 square from the corner of a 4x4 square. What is the area of the L-shape?", "A) 8 cm2", "B) 10 cm2", "C) 14 cm2", "D) 12 cm2", "Answer: D", 3),
            ("A classroom floor is 6 m long and 5 m wide. What is its area?", "A) 30 m2", "B) 22 m2", "C) 28 m2", "D) 24 m2", "Answer: A", 3),
            ("Which of these shapes cannot tile a flat surface by itself?", "A) Square", "B) Regular pentagon", "C) Equilateral triangle", "D) Rectangle", "Answer: B", 3),
            ("A circle is divided into 4 equal sectors. What is the angle at the centre of each sector?", "A) 60 degrees", "B) 80 degrees", "C) 90 degrees", "D) 120 degrees", "Answer: C", 3),
            ("A rectangular garden 15 m x 8 m has a 1 m wide path running along the inside edges. What is the area of the path?", "A) 40 m2", "B) 38 m2", "C) 36 m2", "D) 42 m2", "Answer: D", 4),
            ("A rectangle's length is 5 more than its width and its area is 84 cm2. What is the width?", "A) 7 cm", "B) 8 cm", "C) 9 cm", "D) 12 cm", "Answer: A", 4),
            ("A right triangle has legs 3 cm and 4 cm. What is its area?", "A) 5 cm2", "B) 6 cm2", "C) 7 cm2", "D) 12 cm2", "Answer: B", 3),
            ("A regular hexagon is divided into 6 equilateral triangles. If the hexagon has area 24 cm2, what is the area of each triangle?", "A) 3 cm2", "B) 6 cm2", "C) 4 cm2", "D) 2 cm2", "Answer: C", 3),
            ("Two congruent rectangles (6 cm x 4 cm each) are joined along their longer sides. What is the perimeter of the new shape?", "A) 20 cm", "B) 24 cm", "C) 32 cm", "D) 28 cm", "Answer: D", 3),
            ("A square room has area 64 m2. What is the length of one wall?", "A) 8 m", "B) 6 m", "C) 10 m", "D) 16 m", "Answer: A", 3),
            ("A plus-sign shape is made from 5 unit squares (3 in a row, 1 above and 1 below the centre). What is the perimeter of this shape?", "A) 10", "B) 12", "C) 14", "D) 16", "Answer: B", 3),
            ("A rectangle has area 36 cm2 and width 4 cm. What is its length?", "A) 6 cm", "B) 8 cm", "C) 9 cm", "D) 12 cm", "Answer: C", 3),
            ("What is the area of a square with perimeter 20 cm?", "A) 16 cm2", "B) 20 cm2", "C) 24 cm2", "D) 25 cm2", "Answer: D", 3),
            ("A grid is 8 tiles wide and 5 tiles tall. A poster covers the middle 4x3 tiles. How many tiles are NOT covered?", "A) 28", "B) 24", "C) 32", "D) 20", "Answer: A", 3),
            ("Three squares of sizes 1x1, 2x2, and 3x3 are placed side by side in a row, aligned at the bottom. What is the perimeter of the combined shape?", "A) 16", "B) 18", "C) 20", "D) 22", "Answer: B", 4),
        ]
    },
    "2.2": {
        "title": "Perimeter and Measurement",
        "description": "Perimeter of shapes, unit conversions and measurement problems",
        "grade": "3-4",
        "questions": [
            ("What is the perimeter of a square with side 7 cm?", "A) 28 cm", "B) 21 cm", "C) 14 cm", "D) 49 cm", "Answer: A", 3),
            ("A rectangle is 10 cm long and 4 cm wide. What is its perimeter?", "A) 24 cm", "B) 28 cm", "C) 32 cm", "D) 40 cm", "Answer: B", 3),
            ("A regular pentagon has a perimeter of 35 cm. What is the length of one side?", "A) 5 cm", "B) 6 cm", "C) 7 cm", "D) 8 cm", "Answer: C", 3),
            ("A rectangle's length is 8 cm and its perimeter is 26 cm. What is its width?", "A) 3 cm", "B) 4 cm", "C) 6 cm", "D) 5 cm", "Answer: D", 3),
            ("An equilateral triangle has a perimeter of 24 cm. What is the side length?", "A) 8 cm", "B) 6 cm", "C) 12 cm", "D) 4 cm", "Answer: A", 3),
            ("A square has perimeter 32 cm. What is its area?", "A) 48 cm2", "B) 64 cm2", "C) 80 cm2", "D) 128 cm2", "Answer: B", 3),
            ("A rectangle is 12 cm long and 5 cm wide. What is its perimeter?", "A) 30 cm", "B) 32 cm", "C) 34 cm", "D) 60 cm", "Answer: C", 3),
            ("A room is 6 m long and 4 m wide. Skirting board runs along all 4 walls. What total length is needed?", "A) 10 m", "B) 12 m", "C) 18 m", "D) 20 m", "Answer: D", 3),
            ("What is the perimeter of a regular hexagon with side length 5 cm?", "A) 30 cm", "B) 25 cm", "C) 35 cm", "D) 60 cm", "Answer: A", 3),
            ("A rectangle has perimeter 40 cm and width 8 cm. What is its length?", "A) 10 cm", "B) 12 cm", "C) 14 cm", "D) 24 cm", "Answer: B", 3),
            ("A square field has perimeter 60 m. What is its area?", "A) 150 m2", "B) 200 m2", "C) 225 m2", "D) 240 m2", "Answer: C", 3),
            ("A rectangle has perimeter 50 cm and length 15 cm. What is its width?", "A) 5 cm", "B) 8 cm", "C) 12 cm", "D) 10 cm", "Answer: D", 3),
            ("A square tile has perimeter 24 cm. What is its side length?", "A) 6 cm", "B) 4 cm", "C) 8 cm", "D) 12 cm", "Answer: A", 3),
            ("A rectangular pool is 25 m long and 10 m wide. What is its perimeter?", "A) 50 m", "B) 70 m", "C) 250 m", "D) 35 m", "Answer: B", 3),
            ("A rectangle has length 8 cm and width half the length. What is its perimeter?", "A) 20 cm", "B) 22 cm", "C) 24 cm", "D) 32 cm", "Answer: C", 3),
            ("A fence runs around a 20 m x 12 m garden. Posts are placed every 4 m. How many posts are needed?", "A) 14", "B) 15", "C) 16", "D) 16", "Answer: D", 3),
            ("An isosceles triangle has two sides of 9 cm and a base of 6 cm. What is its perimeter?", "A) 24 cm", "B) 18 cm", "C) 21 cm", "D) 27 cm", "Answer: A", 3),
            ("A square with side 5 cm has each side doubled. What is the perimeter of the new square?", "A) 20 cm", "B) 40 cm", "C) 50 cm", "D) 100 cm", "Answer: B", 3),
            ("A rectangle has area 48 cm2 and length 8 cm. What is its perimeter?", "A) 22 cm", "B) 24 cm", "C) 28 cm", "D) 32 cm", "Answer: C", 3),
            ("What length of ribbon is needed to go around a 15 cm x 8 cm present?", "A) 23 cm", "B) 38 cm", "C) 44 cm", "D) 46 cm", "Answer: D", 3),
            ("A square garden has perimeter 120 m. How long is one side?", "A) 30 m", "B) 20 m", "C) 60 m", "D) 40 m", "Answer: A", 3),
            ("A rectangle's length is 3 times its width. Its perimeter is 48 cm. What is its width?", "A) 4 cm", "B) 6 cm", "C) 8 cm", "D) 12 cm", "Answer: B", 3),
            ("Two identical squares of side 4 cm are joined side by side. What is the perimeter of the combined shape?", "A) 16 cm", "B) 20 cm", "C) 24 cm", "D) 32 cm", "Answer: C", 3),
            ("A regular octagon has perimeter 64 cm. What is the length of one side?", "A) 6 cm", "B) 7 cm", "C) 9 cm", "D) 8 cm", "Answer: D", 3),
            ("A rectangle has outer dimensions 10 cm x 8 cm. What is the perimeter of the outer rectangle?", "A) 36 cm", "B) 28 cm", "C) 32 cm", "D) 40 cm", "Answer: A", 3),
            ("A rectangle has length (2x + 3) cm and width x cm. Its perimeter is 36 cm. What is x?", "A) 4", "B) 5", "C) 6", "D) 7", "Answer: B", 4),
            ("A runner goes 3 times around a 100 m x 60 m rectangular track. How far does she run?", "A) 640 m", "B) 840 m", "C) 960 m", "D) 1200 m", "Answer: C", 3),
            ("A rectangle has perimeter 38 cm and width 7 cm. What is its length?", "A) 10 cm", "B) 11 cm", "C) 13 cm", "D) 12 cm", "Answer: D", 3),
            ("The perimeter of an equilateral triangle is 27 cm. What is the side length?", "A) 9 cm", "B) 6 cm", "C) 7 cm", "D) 8 cm", "Answer: A", 3),
            ("A rectangle is 4 times as long as it is wide. Its perimeter is 50 cm. What is its width?", "A) 4 cm", "B) 5 cm", "C) 6 cm", "D) 8 cm", "Answer: B", 3),
            ("A right triangle has legs 6 cm and 8 cm (hypotenuse = 10 cm). What is its perimeter?", "A) 20 cm", "B) 22 cm", "C) 24 cm", "D) 26 cm", "Answer: C", 3),
            ("A square field has perimeter 80 m. What is its area?", "A) 160 m2", "B) 200 m2", "C) 320 m2", "D) 400 m2", "Answer: D", 3),
            ("A ruler is 30 cm long. How many millimetres is that?", "A) 300 mm", "B) 30 mm", "C) 3 mm", "D) 3000 mm", "Answer: A", 3),
            ("What is 2.5 m in centimetres?", "A) 25 cm", "B) 250 cm", "C) 2500 cm", "D) 0.25 cm", "Answer: B", 3),
            ("A rope 3 m long is cut into pieces of 25 cm each. How many pieces are cut?", "A) 10", "B) 11", "C) 12", "D) 15", "Answer: C", 3),
            ("What is 1500 m in kilometres?", "A) 15 km", "B) 0.15 km", "C) 150 km", "D) 1.5 km", "Answer: D", 3),
            ("A ribbon 4 m long is cut into pieces of 50 cm each. How many pieces are cut?", "A) 8", "B) 6", "C) 10", "D) 4", "Answer: A", 3),
            ("A rectangle has length 6 cm. Its perimeter equals the perimeter of a square with side 7 cm. What is the width?", "A) 6 cm", "B) 8 cm", "C) 10 cm", "D) 4 cm", "Answer: B", 3),
            ("How many metres are in 5 km?", "A) 500 m", "B) 50000 m", "C) 5000 m", "D) 500000 m", "Answer: C", 3),
            ("A rectangle has the same area as a 6 cm square. Its width is 4 cm. What is its perimeter?", "A) 20 cm", "B) 24 cm", "C) 28 cm", "D) 26 cm", "Answer: D", 3),
            ("The perimeter of an equilateral triangle equals the perimeter of a square with side 9 cm. What is the triangle's side?", "A) 12 cm", "B) 9 cm", "C) 6 cm", "D) 18 cm", "Answer: A", 3),
            ("A rectangular frame uses 52 cm of wood. Its length is 16 cm. What is its width?", "A) 8 cm", "B) 10 cm", "C) 12 cm", "D) 36 cm", "Answer: B", 3),
            ("A square has side 4 cm; a larger square has side 8 cm. How many times longer is the larger perimeter?", "A) 4", "B) 3", "C) 2", "D) 8", "Answer: C", 3),
            ("A rectangle has perimeter 36 cm. Its length is decreased by 2 cm and width increased by 2 cm. What happens to the perimeter?", "A) Increases by 4 cm", "B) Decreases by 4 cm", "C) Increases by 2 cm", "D) Stays the same", "Answer: D", 4),
            ("A park is 200 m x 150 m. How long is the path around the outside?", "A) 700 m", "B) 500 m", "C) 600 m", "D) 350 m", "Answer: A", 3),
            ("A piece of string 60 cm long is shaped into a rectangle. The length is 20 cm. What is the width?", "A) 5 cm", "B) 10 cm", "C) 15 cm", "D) 20 cm", "Answer: B", 3),
            ("A regular polygon with 6 sides each of length 7 cm. What is its perimeter?", "A) 36 cm", "B) 40 cm", "C) 42 cm", "D) 49 cm", "Answer: C", 3),
            ("A larger square has perimeter 4 times that of a square with side 3 cm. What is the side of the larger square?", "A) 6 cm", "B) 9 cm", "C) 36 cm", "D) 12 cm", "Answer: D", 3),
            ("How many centimetres in 3.2 m?", "A) 320 cm", "B) 32 cm", "C) 3200 cm", "D) 0.032 cm", "Answer: A", 3),
            ("Three identical 8 cm x 4 cm rectangles are laid end to end along their 4 cm width. What is the perimeter of the combined shape?", "A) 48 cm", "B) 56 cm", "C) 64 cm", "D) 72 cm", "Answer: B", 4),
        ]
    },
    "2.3": {
        "title": "3D Objects & Cubes",
        "description": "3D shapes, faces/edges/vertices, nets, unit cubes and volume",
        "questions": [
            # 3D Shape Properties (Q1-Q10)
            ("A cube has how many faces?", "A) 4", "B) 5", "C) 6", "D) 8", "Answer: C", 3),
            ("A cuboid (rectangular box) has how many edges?", "A) 12", "B) 8", "C) 6", "D) 4", "Answer: A", 3),
            ("A triangular pyramid has how many vertices (corners)?", "A) 3", "B) 5", "C) 4", "D) 6", "Answer: C", 3),
            ("Which 3D shape has only curved surfaces and no flat faces?", "A) Cube", "B) Cylinder", "C) Cone", "D) Sphere", "Answer: D", 3),
            ("How many vertices does a cube have?", "A) 8", "B) 6", "C) 12", "D) 4", "Answer: A", 3),
            ("A cylinder has how many flat circular faces?", "A) 1", "B) 2", "C) 3", "D) 0", "Answer: B", 3),
            ("A cone has how many vertices (sharp points)?", "A) 0", "B) 2", "C) 1", "D) 3", "Answer: C", 3),
            ("How many edges does a triangular prism have?", "A) 6", "B) 9", "C) 12", "D) 8", "Answer: B", 3),
            ("A square-based pyramid has how many faces (including the base)?", "A) 4", "B) 6", "C) 3", "D) 5", "Answer: D", 4),
            ("A triangular prism has how many faces in total?", "A) 4", "B) 5", "C) 6", "D) 3", "Answer: B", 3),
            # Edges, Vertices, Faces (Q11-Q20)
            ("How many edges does a cube have?", "A) 12", "B) 8", "C) 6", "D) 4", "Answer: A", 3),
            ("A cuboid has how many vertices (corners)?", "A) 6", "B) 8", "C) 12", "D) 4", "Answer: B", 3),
            ("How many edges does a square-based pyramid have?", "A) 6", "B) 5", "C) 8", "D) 10", "Answer: C", 4),
            ("Which 3D shape looks like a can of tennis balls stacked up?", "A) Cube", "B) Cone", "C) Sphere", "D) Cylinder", "Answer: D", 3),
            ("A shoe box is an example of which 3D shape?", "A) Cube", "B) Cuboid", "C) Prism", "D) Pyramid", "Answer: B", 3),
            ("A cone has how many faces in total (flat base plus curved surface)?", "A) 2", "B) 1", "C) 3", "D) 4", "Answer: A", 3),
            ("Which shape has 6 identical square faces?", "A) Cuboid", "B) Triangular prism", "C) Square pyramid", "D) Cube", "Answer: D", 3),
            ("How many vertices does a triangular prism have?", "A) 3", "B) 6", "C) 9", "D) 4", "Answer: B", 3),
            ("Which 3D shape has no vertices and no edges?", "A) Sphere", "B) Cone", "C) Cylinder", "D) Cube", "Answer: A", 3),
            ("A square-based pyramid has how many vertices?", "A) 4", "B) 6", "C) 5", "D) 8", "Answer: C", 4),
            # Unit Cubes and Volume (Q21-Q30)
            ("A 2x2x2 arrangement of unit cubes is built. How many unit cubes are there?", "A) 4", "B) 6", "C) 8", "D) 12", "Answer: C", 3),
            ("A row of 3 unit cubes is placed end to end. How many unit cubes are there?", "A) 3", "B) 6", "C) 9", "D) 12", "Answer: A", 3),
            ("A rectangular box is 4 units long, 2 units wide, 2 units tall. How many unit cubes fill it?", "A) 8", "B) 12", "C) 14", "D) 16", "Answer: D", 3),
            ("A staircase has 1 unit cube in the top row, 2 in the middle, and 3 in the bottom. How many unit cubes in total?", "A) 4", "B) 5", "C) 6", "D) 7", "Answer: C", 3),
            ("An L-shape is made with 3 unit cubes along the bottom and 2 more stacked on one end. How many unit cubes are used?", "A) 5", "B) 4", "C) 6", "D) 7", "Answer: A", 3),
            ("A 3x3x3 cube is built from unit cubes. How many unit cubes are used?", "A) 18", "B) 27", "C) 24", "D) 9", "Answer: B", 4),
            ("A rectangular box is 5 units long, 2 units wide, 3 units tall. How many unit cubes fill it?", "A) 25", "B) 20", "C) 15", "D) 30", "Answer: D", 3),
            ("A flat 3x4 grid of unit cubes is exactly one layer high. How many unit cubes are there?", "A) 12", "B) 7", "C) 9", "D) 16", "Answer: A", 3),
            ("A box that is 5 units long, 1 unit wide, and 3 units tall. How many unit cubes does it hold?", "A) 8", "B) 15", "C) 20", "D) 9", "Answer: B", 3),
            ("A square base of 3x3 unit cubes is stacked 2 layers high. How many unit cubes in total?", "A) 9", "B) 12", "C) 15", "D) 18", "Answer: D", 3),
            # Nets of 3D Shapes (Q31-Q40)
            ("A net of a cube has how many squares?", "A) 6", "B) 4", "C) 8", "D) 5", "Answer: A", 3),
            ("If you unroll the curved surface of a cylinder (without the circles), what flat shape do you get?", "A) Square", "B) Rectangle", "C) Triangle", "D) Circle", "Answer: B", 3),
            ("A triangular prism net has 2 triangles and how many rectangles?", "A) 2", "B) 4", "C) 3", "D) 1", "Answer: C", 3),
            ("A square-based pyramid net has 1 square base and how many triangles?", "A) 3", "B) 2", "C) 6", "D) 4", "Answer: D", 4),
            ("A net with 2 circles and 1 rectangle folds into which shape?", "A) Cylinder", "B) Cone", "C) Prism", "D) Cube", "Answer: A", 3),
            ("How many faces does the flat net of a cube show?", "A) 4", "B) 6", "C) 8", "D) 12", "Answer: B", 3),
            ("A cuboid net has 6 rectangles that come in identical pairs. How many pairs are there?", "A) 2", "B) 4", "C) 3", "D) 6", "Answer: C", 3),
            ("A triangular pyramid (tetrahedron) net is made entirely of triangles. How many triangles does it have?", "A) 3", "B) 6", "C) 2", "D) 4", "Answer: D", 4),
            ("A net consists of 6 identical squares arranged in a cross shape. What 3D shape does it fold into?", "A) Cube", "B) Cuboid", "C) Square pyramid", "D) Prism", "Answer: A", 3),
            ("Which 3D shape has a net with NO triangles at all?", "A) Tetrahedron", "B) Cuboid", "C) Square pyramid", "D) Triangular pyramid", "Answer: B", 3),
            # Mixed 3D Problems (Q41-Q50)
            ("A cube has how many pairs of parallel (opposite) faces?", "A) 2", "B) 4", "C) 3", "D) 6", "Answer: C", 3),
            ("Which 3D shape is most like a can of soup?", "A) Cylinder", "B) Cone", "C) Prism", "D) Cuboid", "Answer: A", 3),
            ("A 3x3x3 cube is built from unit cubes. How many unit cubes are on the outer surface (not hidden inside)?", "A) 20", "B) 26", "C) 27", "D) 24", "Answer: B", 4),
            ("A box is 10 cm long, 5 cm wide, and 4 cm tall. How many 1 cm cubed unit cubes fill it?", "A) 40", "B) 50", "C) 100", "D) 200", "Answer: D", 3),
            ("You have 12 unit cubes. Which box dimensions use all 12 cubes exactly?", "A) 2x2x3", "B) 2x2x4", "C) 3x3x3", "D) 2x3x3", "Answer: A", 3),
            ("A cube has an edge length of 3 cm. What is its volume in cm cubed?", "A) 9", "B) 27", "C) 12", "D) 18", "Answer: B", 3),
            ("A cube has an edge length of 5 cm. How many 1 cm cubed unit cubes fit inside?", "A) 25", "B) 50", "C) 125", "D) 15", "Answer: C", 4),
            ("A tower has 4 unit cubes in a column. Two more unit cubes are placed to the right of the bottom cube. How many unit cubes in total?", "A) 5", "B) 4", "C) 7", "D) 6", "Answer: D", 3),
            ("A rectangular prism is 4 cm long, 3 cm wide, and 2 cm tall. What is its volume in cm cubed?", "A) 24", "B) 9", "C) 12", "D) 18", "Answer: A", 4),
            ("Euler's formula states Vertices - Edges + Faces = 2. For a cube: 8 - 12 + 6 = ?", "A) 0", "B) 2", "C) 4", "D) 6", "Answer: B", 4),
        ]
    },
    "2.4": {
        "title": "Visual Patterns & Transformations",
        "description": "Line symmetry, reflections, rotations, and repeating patterns",
        "questions": [
            # Line Symmetry (Q1-Q10)
            ("How many lines of symmetry does a square have?", "A) 1", "B) 2", "C) 4", "D) 8", "Answer: C", 3),
            ("How many lines of symmetry does a non-square rectangle have?", "A) 2", "B) 4", "C) 1", "D) 0", "Answer: A", 3),
            ("How many lines of symmetry does an equilateral triangle have?", "A) 1", "B) 2", "C) 4", "D) 3", "Answer: D", 3),
            ("Which capital letter has exactly one vertical line of symmetry?", "A) H", "B) A", "C) X", "D) N", "Answer: B", 3),
            ("How many lines of symmetry does a regular hexagon have?", "A) 6", "B) 3", "C) 4", "D) 12", "Answer: A", 3),
            ("A shape with exactly 2 lines of symmetry could be a:", "A) Circle", "B) Square", "C) Equilateral triangle", "D) Rectangle", "Answer: D", 3),
            ("Which capital letter has NO lines of symmetry?", "A) M", "B) T", "C) Z", "D) H", "Answer: C", 3),
            ("When a shape is reflected, which property stays the same?", "A) Orientation", "B) Shape and size", "C) Position", "D) Distance from mirror", "Answer: B", 3),
            ("How many lines of symmetry does a circle have?", "A) Infinitely many", "B) 1", "C) 4", "D) 8", "Answer: A", 3),
            ("How many lines of symmetry does a regular pentagon have?", "A) 10", "B) 3", "C) 1", "D) 5", "Answer: D", 3),
            # Reflections (Q11-Q20)
            ("A point is 4 units above a horizontal mirror line. After reflection, where is it?", "A) 4 units above", "B) 4 units below", "C) 4 units to the left", "D) 4 units to the right", "Answer: B", 3),
            ("The letter b is reflected across a vertical mirror line. What does it look like?", "A) b", "B) p", "C) d", "D) q", "Answer: C", 3),
            ("Which transformation creates a mirror image of a shape?", "A) Reflection", "B) Translation", "C) Rotation", "D) Scaling", "Answer: A", 3),
            ("When a shape is translated (slid), it:", "A) Changes size", "B) Flips over", "C) Spins", "D) Slides without changing size or shape", "Answer: D", 3),
            ("The letter p reflected in a horizontal line looks like:", "A) p", "B) b", "C) q", "D) d", "Answer: B", 3),
            ("A square reflected across one of its diagonals gives:", "A) A rectangle", "B) A larger square", "C) A congruent square", "D) A triangle", "Answer: C", 3),
            ("A shape and its reflection are always:", "A) The same size", "B) The same orientation", "C) The same colour", "D) Less than 1 unit apart", "Answer: A", 3),
            ("Reflecting a shape across a vertical line: the left side becomes the:", "A) Left side", "B) Bottom", "C) Top", "D) Right side", "Answer: D", 3),
            ("The word MOM has:", "A) No symmetry", "B) Vertical line symmetry", "C) Rotational symmetry only", "D) Horizontal line symmetry only", "Answer: B", 3),
            ("A point at (5, 3) is reflected across the y-axis. Its new position is:", "A) (5, -3)", "B) (3, 5)", "C) (-5, 3)", "D) (-5, -3)", "Answer: C", 4),
            # Rotations (Q21-Q30)
            ("A shape is rotated 90 degrees clockwise. An arrow pointing UP now points:", "A) Right", "B) Left", "C) Down", "D) Up", "Answer: A", 3),
            ("A shape is rotated 180 degrees. An arrow pointing UP now points:", "A) Same direction", "B) Left", "C) Right", "D) Down", "Answer: D", 3),
            ("A square has rotational symmetry of order:", "A) 2", "B) 4", "C) 8", "D) 1", "Answer: B", 3),
            ("An equilateral triangle has rotational symmetry of order:", "A) 2", "B) 1", "C) 3", "D) 6", "Answer: C", 3),
            ("A scalene triangle (all sides different) has rotational symmetry of order:", "A) 1", "B) 2", "C) 3", "D) 4", "Answer: A", 3),
            ("A clock hand points to 12. After rotating 90 degrees clockwise, it points to:", "A) 6", "B) 9", "C) 12", "D) 3", "Answer: D", 3),
            ("The letter S has rotational symmetry of order:", "A) 1", "B) 2", "C) 4", "D) 3", "Answer: B", 3),
            ("What is the smallest rotation angle that maps a regular hexagon onto itself?", "A) 45 degrees", "B) 30 degrees", "C) 60 degrees", "D) 90 degrees", "Answer: C", 4),
            ("A shape is rotated 360 degrees. The result is:", "A) The same as the original", "B) Flipped over", "C) Reflected", "D) Upside down", "Answer: A", 3),
            ("Rotating 90 degrees counterclockwise is the same as rotating:", "A) 90 degrees clockwise", "B) 180 degrees clockwise", "C) 270 degrees counterclockwise", "D) 270 degrees clockwise", "Answer: D", 3),
            # Continuing Patterns (Q31-Q40)
            ("The pattern: 1, 4, 9, 16, 25, __. What comes next?", "A) 30", "B) 36", "C) 49", "D) 64", "Answer: B", 3),
            ("Pattern: A, B, C, A, B, C, A, B, __. What comes next?", "A) A", "B) B", "C) C", "D) D", "Answer: C", 3),
            ("Number pattern: 3, 7, 11, 15, 19, __. What comes next? (add 4 each time)", "A) 23", "B) 21", "C) 25", "D) 20", "Answer: A", 3),
            ("Pattern: 2 triangles, 3 circles, 2 triangles, 3 circles, 2 triangles, __. What comes next?", "A) 2 triangles", "B) 2 circles", "C) 1 triangle", "D) 3 circles", "Answer: D", 3),
            ("Pattern: 100, 50, 25, __. What comes next? (divide by 2 each time)", "A) 10", "B) 12.5", "C) 15", "D) 20", "Answer: B", 3),
            ("Number pattern: 2, 6, 18, 54, __. What comes next? (multiply by 3 each time)", "A) 100", "B) 108", "C) 162", "D) 216", "Answer: C", 4),
            ("Pattern: 1, 1, 2, 3, 5, 8, 13, __. What comes next? (each term = sum of two before it)", "A) 21", "B) 18", "C) 20", "D) 26", "Answer: A", 4),
            ("In a tile row: 2 black then 3 white tiles, repeating (B,B,W,W,W,...). What colour is the 11th tile?", "A) Black", "B) White", "C) Gray", "D) Blue", "Answer: A", 3),
            ("Pattern: 1 dot, 3 dots, 6 dots, 10 dots, __. How many dots come next? (triangular numbers)", "A) 12", "B) 13", "C) 14", "D) 15", "Answer: D", 4),
            ("Arithmetic pattern: 3, 7, 11, 15, ... What is the 10th term?", "A) 35", "B) 39", "C) 43", "D) 47", "Answer: B", 4),
            # Mixed Transformations (Q41-Q50)
            ("Reflecting a shape twice across the same mirror line gives:", "A) A rotation", "B) A translation", "C) The original shape back", "D) A larger shape", "Answer: C", 3),
            ("The letter H has symmetry across:", "A) Both horizontal and vertical lines", "B) Vertical line only", "C) Horizontal line only", "D) No lines", "Answer: A", 3),
            ("When a shape is translated (slid), its size:", "A) Increases", "B) Decreases", "C) Doubles", "D) Stays the same", "Answer: D", 3),
            ("Rotating 270 degrees clockwise equals rotating how many degrees counterclockwise?", "A) 270 degrees", "B) 90 degrees", "C) 180 degrees", "D) 360 degrees", "Answer: B", 4),
            ("A repeating pattern has a unit of 4 shapes. The 19th shape is at which position in the unit?", "A) 4th", "B) 2nd", "C) 3rd", "D) 1st", "Answer: C", 3),
            ("The number pattern: 5, 10, 20, 40, 80, __. What comes next?", "A) 160", "B) 100", "C) 120", "D) 200", "Answer: A", 3),
            ("A shape with rotational symmetry of order 4 maps onto itself at these angles:", "A) 45, 90, 135 degrees", "B) 90, 180, 360 degrees", "C) 60, 120, 180 degrees", "D) 90, 180, 270, 360 degrees", "Answer: D", 4),
            ("Which transformation flips a shape over a line?", "A) Translation", "B) Reflection", "C) Rotation", "D) Dilation", "Answer: B", 3),
            ("In the repeating pattern Red, Blue, Blue (then repeat), what colour is the 20th element?", "A) Red", "B) Green", "C) Blue", "D) Purple", "Answer: C", 4),
            ("A figure and its reflection are always the same ___ from the mirror line.", "A) Colour", "B) Rotation", "C) Scale", "D) Distance", "Answer: D", 4),
        ]
    },
    "2.5": {
        "title": "Tiling & Grid Problems",
        "description": "Area on grids, counting squares, tiling with tiles, and grid patterns",
        "questions": [
            # Area on Grids (Q1-Q10)
            ("A rectangle on a grid is 4 squares wide and 3 squares tall. How many unit squares does it cover?", "A) 12", "B) 14", "C) 10", "D) 7", "Answer: A", 3),
            ("A square on a grid has side 5 units. What is its area in square units?", "A) 20", "B) 25", "C) 15", "D) 10", "Answer: B", 3),
            ("A right triangle is half of a 6x4 rectangle. What is its area in square units?", "A) 24", "B) 10", "C) 12", "D) 8", "Answer: C", 3),
            ("An L-shaped figure covers a 3x2 rectangle with one 1x1 corner removed. How many unit squares?", "A) 4", "B) 3", "C) 6", "D) 5", "Answer: D", 3),
            ("A grid has 5 rows and 6 columns of unit squares. How many unit squares in total?", "A) 30", "B) 11", "C) 25", "D) 36", "Answer: A", 3),
            ("A staircase shape has 1 square in row 1, 2 in row 2, 3 in row 3. How many unit squares?", "A) 4", "B) 6", "C) 5", "D) 9", "Answer: B", 3),
            ("A T-shape has 3 squares in a top row and 1 square below the middle. How many unit squares?", "A) 5", "B) 3", "C) 4", "D) 6", "Answer: C", 3),
            ("An 8x8 chessboard has how many unit squares?", "A) 16", "B) 32", "C) 48", "D) 64", "Answer: D", 3),
            ("A grid is 7 units wide and 4 units tall. How many unit squares are there?", "A) 28", "B) 11", "C) 22", "D) 32", "Answer: A", 3),
            ("A plus-sign shape is made from 5 unit squares (one centre, one on each side). How many unit squares?", "A) 4", "B) 5", "C) 6", "D) 8", "Answer: B", 3),
            # Counting Squares of All Sizes (Q11-Q20)
            ("How many squares of ALL sizes are in a 2x2 grid? (count 1x1 and 2x2)", "A) 4", "B) 3", "C) 5", "D) 6", "Answer: C", 4),
            ("How many squares of ALL sizes are in a 3x3 grid? (1x1=9, 2x2=4, 3x3=1)", "A) 9", "B) 12", "C) 11", "D) 14", "Answer: D", 4),
            ("A domino covers exactly 2 unit squares. How many dominoes cover a 4x4 grid?", "A) 8", "B) 12", "C) 16", "D) 4", "Answer: A", 3),
            ("How many 1x2 dominoes cover a 2x6 grid completely?", "A) 10", "B) 6", "C) 12", "D) 8", "Answer: B", 3),
            ("A 4x6 grid is covered with 1x2 dominoes. How many dominoes are needed?", "A) 10", "B) 8", "C) 12", "D) 24", "Answer: C", 3),
            ("You tile a 3x4 rectangle with 1x1 tiles. How many tiles are needed?", "A) 7", "B) 10", "C) 11", "D) 12", "Answer: D", 3),
            ("How many ways can you cut a 2x2 square into 2 equal halves using a single straight cut? (horizontal, vertical, and 2 diagonals)", "A) 4", "B) 2", "C) 3", "D) 6", "Answer: A", 4),
            ("On a 4x4 grid, how many non-overlapping 2x2 squares can be found?", "A) 2", "B) 4", "C) 8", "D) 16", "Answer: B", 3),
            ("A 3x3 grid of unit squares has how many intersection points (dots at corners of squares)?", "A) 9", "B) 12", "C) 16", "D) 25", "Answer: C", 4),
            ("A 5x5 grid of unit squares. How many unit squares are on the outer border?", "A) 25", "B) 20", "C) 12", "D) 16", "Answer: D", 3),
            # Tiling Problems (Q21-Q30)
            ("How many 1x2 tiles are needed to cover a 2x5 grid completely?", "A) 5", "B) 10", "C) 4", "D) 8", "Answer: A", 3),
            ("How many 1x3 tiles cover a 3x4 grid completely?", "A) 6", "B) 4", "C) 12", "D) 8", "Answer: B", 3),
            ("A 2x6 grid is tiled with 1x2 dominoes. How many dominoes are needed?", "A) 4", "B) 5", "C) 6", "D) 12", "Answer: C", 3),
            ("A 4x4 square is divided into four 2x2 squares. Each is coloured red or blue. How many different colour combinations are possible?", "A) 4", "B) 8", "C) 12", "D) 16", "Answer: D", 4),
            ("How many different rectangles (including squares) can be found in a 1x4 strip?", "A) 10", "B) 8", "C) 6", "D) 4", "Answer: A", 4),
            ("In a 3x3 grid of unit squares, how many 1x1 squares are there?", "A) 6", "B) 9", "C) 12", "D) 16", "Answer: B", 3),
            ("On a 4x4 chessboard, what is the maximum number of non-overlapping 1x2 dominoes you can place?", "A) 6", "B) 4", "C) 8", "D) 16", "Answer: C", 3),
            ("A standard 8x8 checkerboard alternates black and white. How many black squares are there?", "A) 24", "B) 30", "C) 28", "D) 32", "Answer: D", 3),
            ("A 2x2 grid has 4 unit squares. How many ways can you colour exactly 2 of them black?", "A) 6", "B) 4", "C) 3", "D) 8", "Answer: A", 4),
            ("A 5x5 grid of dots (intersection points). How many horizontal and vertical lines are there in total?", "A) 20", "B) 10", "C) 25", "D) 12", "Answer: B", 3),
            # Grid Navigation and Counting (Q31-Q40)
            ("How many rectangles of ALL sizes are in a 2x2 grid of unit squares?", "A) 4", "B) 6", "C) 9", "D) 16", "Answer: C", 4),
            ("In a 3x3 grid, how many 2x2 squares can be found?", "A) 1", "B) 2", "C) 3", "D) 4", "Answer: D", 3),
            ("How many squares of any size are in a 3x1 strip of unit squares?", "A) 3", "B) 4", "C) 6", "D) 9", "Answer: A", 3),
            ("A 2x4 grid is tiled with 1x2 dominoes. How many dominoes are needed?", "A) 3", "B) 4", "C) 6", "D) 8", "Answer: B", 3),
            ("An L-shaped tetromino covers how many unit squares?", "A) 3", "B) 5", "C) 4", "D) 6", "Answer: C", 3),
            ("A 3x3 grid has its main diagonal (top-left to bottom-right) squares shaded. How many squares are shaded?", "A) 6", "B) 9", "C) 1", "D) 3", "Answer: D", 3),
            ("How many 1x3 tiles cover a 3x6 grid completely?", "A) 6", "B) 9", "C) 18", "D) 3", "Answer: A", 3),
            ("In a 4x4 grid, how many 1x4 horizontal tiles fit in a single row?", "A) 2", "B) 1", "C) 4", "D) 3", "Answer: B", 3),
            ("A 6x6 grid of unit squares. How many squares are on the outer border?", "A) 24", "B) 16", "C) 20", "D) 36", "Answer: C", 3),
            ("How many different straight lines can be drawn connecting 2 corners of a unit square?", "A) 4", "B) 5", "C) 8", "D) 6", "Answer: D", 4),
            # Mixed Grid Problems (Q41-Q50)
            ("In a 5x5 grid of unit squares, how many 3x3 squares can be found?", "A) 9", "B) 4", "C) 6", "D) 1", "Answer: A", 4),
            ("A 2x3 grid is covered by L-trominoes (each covers 3 unit squares). How many trominoes?", "A) 4", "B) 2", "C) 3", "D) 6", "Answer: B", 3),
            ("An 8x8 chessboard has 2 opposite corner squares removed. Can you tile it with 1x2 dominoes?", "A) Yes, using 31 dominoes", "B) Yes, using 32 dominoes", "C) No, it cannot be tiled", "D) Yes, using 30 dominoes", "Answer: C", 4),
            ("A path goes from point (0,0) to (3,0) to (3,2) moving along grid lines. How many grid points does it pass through (including start and end)?", "A) 4", "B) 5", "C) 8", "D) 6", "Answer: D", 3),
            ("In a 4x4 grid, how many 2x1 dominoes fit horizontally in the entire grid (4 rows total)?", "A) 8", "B) 4", "C) 16", "D) 2", "Answer: A", 3),
            ("A 3x3 square is cut into nine 1x1 unit squares and rearranged into a single row. How long is the row?", "A) 3", "B) 9", "C) 6", "D) 27", "Answer: B", 3),
            ("In a 5x5 grid, how many unit squares are NOT on the border (interior squares only)?", "A) 16", "B) 25", "C) 9", "D) 4", "Answer: C", 3),
            ("A rectangle is 12 units long and 3 units wide. How many 2x3 tiles exactly cover it?", "A) 3", "B) 4", "C) 5", "D) 6", "Answer: D", 3),
            ("A growing staircase has 1 square in step 1, 2 in step 2, 3 in step 3, 4 in step 4. How many total squares?", "A) 10", "B) 8", "C) 6", "D) 12", "Answer: A", 3),
            ("In a 4x6 grid, how many 2x2 squares can be found (overlapping allowed)?", "A) 6", "B) 15", "C) 12", "D) 24", "Answer: B", 4),
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
