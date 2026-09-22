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
