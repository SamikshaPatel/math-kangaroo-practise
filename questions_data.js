// Math Kangaroo Online Practice — Question Bank
// Structure: questionsData[grade][subcategory] = { title, questions: [{text, choices, answer}] }
// answer is 0-indexed (0=A, 1=B, 2=C, 3=D, 4=E)

const questionsData = {

  // ============================================================
  // GRADE 3-4 (Écolier)
  // ============================================================
  "34": {

    "1.1": {
      title: "1.1 Simple Arithmetic",
      questions: [
        {
          text: "What is 2 × 9 + 200 + 9?",
          choices: ["A. 214", "B. 218", "C. 227", "D. 237", "E. 240"],
          answer: 2
        },
        {
          text: "What is 56 ÷ 8 + 35 − 20?",
          choices: ["A. 12", "B. 20", "C. 22", "D. 25", "E. 28"],
          answer: 2
        },
        {
          text: "Ann has 3 packs of stickers, each with 12 stickers. She gives away 8. How many does she have left?",
          choices: ["A. 26", "B. 28", "C. 30", "D. 32", "E. 36"],
          answer: 1
        },
        {
          text: "What is 13 × 4 − 17 + 5?",
          choices: ["A. 30", "B. 34", "C. 40", "D. 42", "E. 44"],
          answer: 2
        },
        {
          text: "Which of the following equals 100?",
          choices: ["A. 9 × 11", "B. 25 × 4", "C. 8 × 13", "D. 6 × 18", "E. 7 × 14"],
          answer: 1
        },
        {
          text: "A farmer has 48 eggs. He packs them into boxes of 6. How many boxes does he fill?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "What is 7 × 8 − 6 ÷ 3?",
          choices: ["A. 52", "B. 54", "C. 56", "D. 58", "E. 60"],
          answer: 1
        },
        {
          text: "A baker makes 144 cookies and arranges them in rows of 12. How many rows are there?",
          choices: ["A. 10", "B. 11", "C. 12", "D. 13", "E. 14"],
          answer: 2
        },
        {
          text: "What is 345 − 178 + 63?",
          choices: ["A. 210", "B. 220", "C. 225", "D. 230", "E. 235"],
          answer: 3
        },
        {
          text: "Tom has 5 bags of marbles with 9 marbles each, and 3 extra marbles. How many marbles does he have in total?",
          choices: ["A. 45", "B. 48", "C. 50", "D. 52", "E. 55"],
          answer: 1
        },
        {
          text: "What is 6 × 7 + 8 × 3?",
          choices: ["A. 56", "B. 60", "C. 62", "D. 66", "E. 70"],
          answer: 3
        },
        {
          text: "A store has 240 oranges packed in bags of 8. How many bags are there?",
          choices: ["A. 25", "B. 28", "C. 30", "D. 32", "E. 35"],
          answer: 2
        },
        {
          text: "What is 999 − 654 + 321?",
          choices: ["A. 636", "B. 644", "C. 666", "D. 680", "E. 700"],
          answer: 2
        },
        {
          text: "What is 15 × 15?",
          choices: ["A. 175", "B. 200", "C. 210", "D. 225", "E. 250"],
          answer: 3
        },
        {
          text: "A book has 365 pages. Maria reads 45 pages each day. How many days does she need to finish the book?",
          choices: ["A. 7", "B. 8", "C. 9", "D. 10", "E. 11"],
          answer: 2
        },
        {
          text: "What is 4 × 4 × 4?",
          choices: ["A. 48", "B. 56", "C. 64", "D. 72", "E. 80"],
          answer: 2
        },
        {
          text: "What number must be added to 347 to get 500?",
          choices: ["A. 143", "B. 153", "C. 163", "D. 173", "E. 183"],
          answer: 1
        },
        {
          text: "What is 36 ÷ 4 × 5?",
          choices: ["A. 35", "B. 40", "C. 45", "D. 50", "E. 55"],
          answer: 2
        },
        {
          text: "A class of 28 students splits into equal groups of 4. How many groups are formed?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "What is 789 − 456 + 123?",
          choices: ["A. 446", "B. 451", "C. 456", "D. 461", "E. 466"],
          answer: 2
        },
        {
          text: "A train has 8 carriages, each with 45 seats. How many seats are there in total?",
          choices: ["A. 320", "B. 340", "C. 360", "D. 380", "E. 400"],
          answer: 2
        },
        {
          text: "What is 1000 ÷ 25?",
          choices: ["A. 25", "B. 30", "C. 35", "D. 40", "E. 45"],
          answer: 3
        },
        {
          text: "What is 9 × 9 − 9 + 9?",
          choices: ["A. 81", "B. 82", "C. 84", "D. 90", "E. 72"],
          answer: 0
        },
        {
          text: "Emma has 500 g of flour. She uses 175 g, then buys another 250 g. How much does she have now?",
          choices: ["A. 525 g", "B. 550 g", "C. 575 g", "D. 600 g", "E. 625 g"],
          answer: 2
        },
        {
          text: "What is 25 × 4 × 2?",
          choices: ["A. 150", "B. 175", "C. 200", "D. 225", "E. 250"],
          answer: 2
        },
        {
          text: "A bakery made 96 muffins and sold them in packs of 6 at €3 per pack. How much did they earn?",
          choices: ["A. €42", "B. €45", "C. €48", "D. €51", "E. €54"],
          answer: 2
        },
        {
          text: "What is 7 + 77 + 777?",
          choices: ["A. 821", "B. 841", "C. 861", "D. 881", "E. 901"],
          answer: 2
        },
        {
          text: "A bag of 75 sweets is shared equally among 5 friends. How many does each friend get?",
          choices: ["A. 13", "B. 14", "C. 15", "D. 16", "E. 17"],
          answer: 2
        },
        {
          text: "What is 17 × 6?",
          choices: ["A. 96", "B. 100", "C. 102", "D. 106", "E. 110"],
          answer: 2
        },
        {
          text: "What is (8 + 12) × (15 − 8)?",
          choices: ["A. 120", "B. 130", "C. 140", "D. 150", "E. 160"],
          answer: 2
        },
        {
          text: "A cyclist rides 12 km in one hour. How many km does he ride in 45 minutes?",
          choices: ["A. 8 km", "B. 9 km", "C. 10 km", "D. 11 km", "E. 12 km"],
          answer: 1
        },
        {
          text: "What is 888 ÷ 8?",
          choices: ["A. 101", "B. 108", "C. 111", "D. 114", "E. 121"],
          answer: 2
        },
        {
          text: "A jar contains 120 marbles. One-third are red, one-quarter are blue, and the rest are green. How many green marbles are there?",
          choices: ["A. 40", "B. 45", "C. 50", "D. 55", "E. 60"],
          answer: 2
        },
        {
          text: "What is 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10?",
          choices: ["A. 45", "B. 50", "C. 55", "D. 60", "E. 65"],
          answer: 2
        },
        {
          text: "A school has 24 classes with 30 students each. How many students are there in total?",
          choices: ["A. 650", "B. 680", "C. 700", "D. 720", "E. 750"],
          answer: 3
        },
        {
          text: "What is the product of the two largest single-digit numbers?",
          choices: ["A. 63", "B. 72", "C. 81", "D. 64", "E. 56"],
          answer: 1
        },
        {
          text: "What is 54 ÷ 6 + 42 ÷ 7?",
          choices: ["A. 13", "B. 14", "C. 15", "D. 16", "E. 17"],
          answer: 2
        },
        {
          text: "Sam has €20. He buys 4 pens at €1.50 each and 2 notebooks at €2.50 each. How much money does he have left?",
          choices: ["A. €6", "B. €7", "C. €9", "D. €11", "E. €13"],
          answer: 2
        },
        {
          text: "What is 3 × 3 + 3 × 3 + 3 × 3?",
          choices: ["A. 21", "B. 24", "C. 27", "D. 30", "E. 33"],
          answer: 2
        },
        {
          text: "What is 8 × 125?",
          choices: ["A. 800", "B. 900", "C. 1000", "D. 1100", "E. 1200"],
          answer: 2
        },
        {
          text: "A number multiplied by 7 gives 329. What is the number?",
          choices: ["A. 45", "B. 47", "C. 49", "D. 51", "E. 53"],
          answer: 1
        },
        {
          text: "What is 12 × 12 − 12?",
          choices: ["A. 120", "B. 128", "C. 132", "D. 140", "E. 144"],
          answer: 2
        },
        {
          text: "A shopkeeper has 350 items. He sells 80 on Monday and 120 on Tuesday, then receives a delivery of 200 items. How many does he have now?",
          choices: ["A. 330", "B. 340", "C. 350", "D. 360", "E. 370"],
          answer: 2
        },
        {
          text: "What is 500 ÷ 4?",
          choices: ["A. 100", "B. 115", "C. 120", "D. 125", "E. 130"],
          answer: 3
        },
        {
          text: "What is 9 × 8 + 7 × 6?",
          choices: ["A. 110", "B. 112", "C. 114", "D. 116", "E. 118"],
          answer: 2
        },
        {
          text: "A box holds 24 eggs. How many boxes are needed to pack 200 eggs?",
          choices: ["A. 7", "B. 8", "C. 9", "D. 10", "E. 11"],
          answer: 2
        },
        {
          text: "What is 67 × 3?",
          choices: ["A. 191", "B. 195", "C. 199", "D. 201", "E. 205"],
          answer: 3
        },
        {
          text: "What is 400 − 65 − 35?",
          choices: ["A. 280", "B. 290", "C. 300", "D. 310", "E. 320"],
          answer: 2
        },
        {
          text: "A number is doubled and then 15 is added, giving 63. What is the number?",
          choices: ["A. 22", "B. 24", "C. 26", "D. 28", "E. 30"],
          answer: 1
        },
        {
          text: "Which of these numbers is divisible by both 5 and 8?",
          choices: ["A. 20", "B. 25", "C. 30", "D. 40", "E. 45"],
          answer: 3
        }
      ]
    },

    "1.2": {
      title: "1.2 Multi-step Calculations",
      questions: [
        {
          text: "A box of apples weighs 6 kg. A box of oranges weighs 4 kg. What is the total weight of 5 boxes of apples and 3 boxes of oranges?",
          choices: ["A. 35 kg", "B. 40 kg", "C. 42 kg", "D. 45 kg", "E. 50 kg"],
          answer: 2
        },
        {
          text: "Maria has 100 stickers. She gives half to her sister, then her sister gives back 15. How many does Maria have now?",
          choices: ["A. 55", "B. 60", "C. 65", "D. 70", "E. 75"],
          answer: 2
        },
        {
          text: "Peter earns €5 for each chore. He does 6 chores a week for 3 weeks and spends €40. How much does he have left?",
          choices: ["A. €40", "B. €45", "C. €50", "D. €55", "E. €60"],
          answer: 2
        },
        {
          text: "A number is multiplied by 4, then 12 is subtracted, giving 36. What is the original number?",
          choices: ["A. 6", "B. 9", "C. 10", "D. 12", "E. 15"],
          answer: 3
        },
        {
          text: "Three friends share 87 marbles equally. How many are left over?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 4"],
          answer: 0
        },
        {
          text: "On a balance scale, 3 apples weigh the same as 2 oranges. One orange weighs 90 g. What does one apple weigh?",
          choices: ["A. 50 g", "B. 55 g", "C. 60 g", "D. 65 g", "E. 70 g"],
          answer: 2
        },
        {
          text: "A train travels 60 km in the first hour and 45 km in the second hour. How far does it travel in 4 hours at the average of these two speeds?",
          choices: ["A. 180 km", "B. 195 km", "C. 200 km", "D. 210 km", "E. 225 km"],
          answer: 3
        },
        {
          text: "A shopkeeper has 200 chocolates. He sells 60% and then gets a new delivery of 40 chocolates. How many does he have now?",
          choices: ["A. 100", "B. 110", "C. 120", "D. 130", "E. 140"],
          answer: 2
        },
        {
          text: "Lucy buys 4 toys at €7 each and pays with a €50 note. How much change does she receive?",
          choices: ["A. €16", "B. €18", "C. €20", "D. €22", "E. €24"],
          answer: 3
        },
        {
          text: "A water tank holds 500 litres. It fills at 25 litres per hour. How many hours does it take to fill completely?",
          choices: ["A. 15", "B. 18", "C. 20", "D. 22", "E. 25"],
          answer: 2
        },
        {
          text: "A rope of 84 cm is cut into 3 equal pieces. Then one piece is cut in half. How long is each of the two smaller pieces?",
          choices: ["A. 12 cm", "B. 14 cm", "C. 16 cm", "D. 18 cm", "E. 20 cm"],
          answer: 1
        },
        {
          text: "There are 36 students in a class. Two-thirds go on a trip and half of those remaining go home. How many students stay at school?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "A box has 5 rows of chocolates with 8 in each row. Emma eats 3 and her brother eats 7. How many are left?",
          choices: ["A. 26", "B. 28", "C. 30", "D. 32", "E. 34"],
          answer: 2
        },
        {
          text: "The sum of three consecutive numbers is 45. What is the largest of the three?",
          choices: ["A. 13", "B. 14", "C. 15", "D. 16", "E. 17"],
          answer: 3
        },
        {
          text: "A car uses 6 litres of petrol per 100 km. How many litres are needed for a 250 km journey?",
          choices: ["A. 12 L", "B. 13 L", "C. 14 L", "D. 15 L", "E. 16 L"],
          answer: 3
        },
        {
          text: "Julia saves €8 per week. After 6 weeks she spends €20 on a gift, then saves €8 more the following week. How much does she have?",
          choices: ["A. €34", "B. €35", "C. €36", "D. €37", "E. €38"],
          answer: 2
        },
        {
          text: "On a balance scale, 2 boxes balance with 5 bags. One bag weighs 200 g. What does one box weigh?",
          choices: ["A. 400 g", "B. 450 g", "C. 500 g", "D. 550 g", "E. 600 g"],
          answer: 2
        },
        {
          text: "A zoo has twice as many birds as mammals. There are 18 mammals. How many animals are there in total?",
          choices: ["A. 48", "B. 50", "C. 52", "D. 54", "E. 56"],
          answer: 3
        },
        {
          text: "Lena has 3 times as many cards as Max. Together they have 48 cards. How many cards does Lena have?",
          choices: ["A. 30", "B. 32", "C. 34", "D. 36", "E. 38"],
          answer: 3
        },
        {
          text: "A printer prints 8 pages per minute. How many pages does it print in 7 minutes and 30 seconds?",
          choices: ["A. 55", "B. 58", "C. 60", "D. 63", "E. 65"],
          answer: 2
        },
        {
          text: "The product of two numbers is 72 and their sum is 17. What is the larger number?",
          choices: ["A. 7", "B. 8", "C. 9", "D. 10", "E. 11"],
          answer: 2
        },
        {
          text: "A school trip costs €12 per student. There are 25 students. The school pays €100 and the rest is split equally among the students. How much does each student pay?",
          choices: ["A. €6", "B. €7", "C. €8", "D. €9", "E. €10"],
          answer: 2
        },
        {
          text: "Tom has saved €60. He earns €15 more doing odd jobs, then spends one-third of his total. How much does he have left?",
          choices: ["A. €45", "B. €50", "C. €55", "D. €60", "E. €65"],
          answer: 1
        },
        {
          text: "A rectangular field is 40 m long and 25 m wide. Fence posts are placed every 5 m around the perimeter. How many posts are needed?",
          choices: ["A. 24", "B. 25", "C. 26", "D. 27", "E. 28"],
          answer: 2
        },
        {
          text: "A number is halved, then 5 is added, then doubled. The result is 26. What was the original number?",
          choices: ["A. 12", "B. 14", "C. 16", "D. 18", "E. 20"],
          answer: 2
        },
        {
          text: "A bag of flour weighs 2 kg 400 g. What is the total weight of three such bags in grams?",
          choices: ["A. 6 800 g", "B. 7 000 g", "C. 7 200 g", "D. 7 400 g", "E. 7 600 g"],
          answer: 2
        },
        {
          text: "Jake has €25. He spends €6.50 on lunch and €8.75 on a book. How much does he have left?",
          choices: ["A. €8.75", "B. €9.25", "C. €9.75", "D. €10.25", "E. €10.75"],
          answer: 2
        },
        {
          text: "5 boxes each contain 12 red balls and 8 blue balls. How many balls are there altogether?",
          choices: ["A. 90", "B. 95", "C. 100", "D. 105", "E. 110"],
          answer: 2
        },
        {
          text: "A number is tripled, then 9 is subtracted, then the result is divided by 3. The answer is 7. What is the number?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 4
        },
        {
          text: "Muffins cost €0.75 each. Tom buys 8 muffins and pays with a €10 note. What change does he receive?",
          choices: ["A. €3.50", "B. €3.75", "C. €4.00", "D. €4.25", "E. €4.50"],
          answer: 2
        },
        {
          text: "On a farm there are chickens and cows. There are 12 animals in total and 34 legs. How many chickens are there?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "A builder lays 45 bricks per hour. He works 6 hours on Monday and 4 hours on Tuesday. How many bricks does he lay in total?",
          choices: ["A. 400", "B. 420", "C. 440", "D. 450", "E. 460"],
          answer: 3
        },
        {
          text: "There are 4 boxes. Each box has 3 bags. Each bag has 6 sweets. How many sweets are there in total?",
          choices: ["A. 52", "B. 60", "C. 68", "D. 72", "E. 80"],
          answer: 3
        },
        {
          text: "A rectangular tank is 60 cm long, 40 cm wide, and 30 cm deep. Water fills it to half. How many litres of water are in it? (1 L = 1000 cm³)",
          choices: ["A. 24 L", "B. 30 L", "C. 36 L", "D. 40 L", "E. 48 L"],
          answer: 2
        },
        {
          text: "Anna and Ben have 80 cards together. Anna has 20 more than Ben. How many cards does Ben have?",
          choices: ["A. 25", "B. 30", "C. 35", "D. 40", "E. 45"],
          answer: 1
        },
        {
          text: "A journey of 2 hours 30 minutes is split into 3 equal legs. How long is each leg?",
          choices: ["A. 45 min", "B. 50 min", "C. 55 min", "D. 60 min", "E. 65 min"],
          answer: 1
        },
        {
          text: "Nick earns €9 per hour and works 8 hours a day for 5 days. He then pays €60 in rent. How much does he have left?",
          choices: ["A. €290", "B. €295", "C. €300", "D. €305", "E. €310"],
          answer: 2
        },
        {
          text: "A 5 kg bag of rice is used at 200 g per day. How many days does the bag last?",
          choices: ["A. 20", "B. 22", "C. 24", "D. 25", "E. 28"],
          answer: 3
        },
        {
          text: "The difference of two numbers is 8 and their product is 33. What is the larger number?",
          choices: ["A. 9", "B. 10", "C. 11", "D. 12", "E. 13"],
          answer: 2
        },
        {
          text: "A bookshelf has 5 shelves, each holding 24 books. A library buys 80 more books. How many books are there in total?",
          choices: ["A. 180", "B. 190", "C. 200", "D. 210", "E. 220"],
          answer: 2
        },
        {
          text: "A box contains red and blue pens in ratio 2:3. There are 10 red pens. How many pens are there in total?",
          choices: ["A. 20", "B. 22", "C. 25", "D. 28", "E. 30"],
          answer: 2
        },
        {
          text: "Paul has 3 times as many stamps as Kate. Kate has 12 more than Lisa. Lisa has 5. How many stamps does Paul have?",
          choices: ["A. 45", "B. 48", "C. 51", "D. 54", "E. 57"],
          answer: 2
        },
        {
          text: "A machine produces 120 parts in 3 hours. How many parts does it produce in 5 hours?",
          choices: ["A. 180", "B. 190", "C. 200", "D. 210", "E. 220"],
          answer: 2
        },
        {
          text: "A shop sells oranges at 3 for €1. How much do 15 oranges cost?",
          choices: ["A. €4", "B. €5", "C. €6", "D. €7", "E. €8"],
          answer: 1
        },
        {
          text: "Two numbers multiply to give 45. One number is 4 more than the other. What is the smaller number?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 1
        },
        {
          text: "A sports hall has 8 rows of 15 seats. Three more rows of 15 seats are added for a show. How many people can be seated in total?",
          choices: ["A. 145", "B. 155", "C. 160", "D. 165", "E. 170"],
          answer: 3
        },
        {
          text: "The cost of 5 pens and 3 rulers is €9.50. Each ruler costs €1.50. What is the cost of one pen?",
          choices: ["A. €0.70", "B. €0.80", "C. €0.90", "D. €1.00", "E. €1.10"],
          answer: 3
        },
        {
          text: "Anna earns €6.50 per hour and works 40 hours. She spends half her earnings on rent and saves the rest. How much does she save?",
          choices: ["A. €115", "B. €120", "C. €125", "D. €130", "E. €135"],
          answer: 3
        },
        {
          text: "A number is increased by 50%, then decreased by 20%, then increased by 10%. The final result is 132. What was the original number?",
          choices: ["A. 90", "B. 95", "C. 100", "D. 105", "E. 110"],
          answer: 2
        },
        {
          text: "A recipe for 6 people uses 300 g of sugar. How much sugar is needed for 10 people?",
          choices: ["A. 450 g", "B. 475 g", "C. 500 g", "D. 525 g", "E. 550 g"],
          answer: 2
        },
      ]
    },

    "1.3": {
      title: "1.3 Number Patterns & Sequences",
      questions: [
        {
          text: "What is the next number in the sequence? 3, 6, 12, 24, ___",
          choices: ["A. 30", "B. 36", "C. 40", "D. 48", "E. 56"],
          answer: 3
        },
        {
          text: "What is the missing number? 2, 5, 11, 23, ___",
          choices: ["A. 44", "B. 45", "C. 46", "D. 47", "E. 48"],
          answer: 3
        },
        {
          text: "What comes next? 1, 4, 9, 16, 25, ___",
          choices: ["A. 30", "B. 34", "C. 36", "D. 38", "E. 40"],
          answer: 2
        },
        {
          text: "A repeating pattern goes: ★, ○, ○, ★, ○, ○, ★, ... What is the 25th symbol?",
          choices: ["A. ★", "B. ○", "C. ★", "D. ○", "E. ★"],
          answer: 0
        },
        {
          text: "What is the sum of all odd numbers from 1 to 9?",
          choices: ["A. 20", "B. 25", "C. 28", "D. 30", "E. 35"],
          answer: 1
        },
        {
          text: "In the sequence 5, 10, 20, 40, ..., what is the 6th term?",
          choices: ["A. 80", "B. 100", "C. 120", "D. 140", "E. 160"],
          answer: 3
        },
        {
          text: "What is the missing number in: 100, 91, 82, ___, 64, 55?",
          choices: ["A. 71", "B. 73", "C. 75", "D. 77", "E. 79"],
          answer: 1
        },
        {
          text: "The digits of a 3-digit number sum to 12, the number is divisible by 4, and the hundreds digit is 3. What is the number?",
          choices: ["A. 336", "B. 348", "C. 354", "D. 360", "E. 372"],
          answer: 0
        },
        {
          text: "What is the next number? 1, 3, 7, 15, 31, ___",
          choices: ["A. 55", "B. 59", "C. 61", "D. 63", "E. 65"],
          answer: 3
        },
        {
          text: "In the sequence 2, 4, 8, 16, ..., what is the 7th term?",
          choices: ["A. 64", "B. 96", "C. 112", "D. 128", "E. 256"],
          answer: 3
        },
        {
          text: "What comes next in the sequence? 100, 95, 85, 70, 50, ___",
          choices: ["A. 25", "B. 30", "C. 35", "D. 40", "E. 45"],
          answer: 0
        },
        {
          text: "The rule is: multiply by 3, then subtract 1. Starting from 2: 2, 5, 14, ___, ...",
          choices: ["A. 35", "B. 38", "C. 41", "D. 44", "E. 47"],
          answer: 2
        },
        {
          text: "In the sequence 5, 8, 11, 14, ..., what is the 10th term?",
          choices: ["A. 29", "B. 30", "C. 31", "D. 32", "E. 33"],
          answer: 3
        },
        {
          text: "What is the missing number? 1, 8, 27, ___, 125",
          choices: ["A. 36", "B. 48", "C. 56", "D. 64", "E. 72"],
          answer: 3
        },
        {
          text: "In which term of the sequence 50, 47, 44, 41, ... does the value equal 11?",
          choices: ["A. 12th", "B. 13th", "C. 14th", "D. 15th", "E. 16th"],
          answer: 2
        },
        {
          text: "The sequence 3, 5, 8, 13, 21, ... follows the rule: add the previous two terms. What comes next?",
          choices: ["A. 30", "B. 32", "C. 34", "D. 36", "E. 38"],
          answer: 2
        },
        {
          text: "What is 2 + 4 + 6 + 8 + 10 + 12 + 14 + 16 + 18 + 20?",
          choices: ["A. 90", "B. 100", "C. 110", "D. 120", "E. 130"],
          answer: 2
        },
        {
          text: "What comes next? 81, 27, 9, ___",
          choices: ["A. 1", "B. 3", "C. 6", "D. 9", "E. 18"],
          answer: 1
        },
        {
          text: "The pattern of dots: row 1 has 1 dot, row 2 has 3 dots, row 3 has 5 dots. How many dots are in row 8?",
          choices: ["A. 12", "B. 13", "C. 14", "D. 15", "E. 16"],
          answer: 3
        },
        {
          text: "What is the rule for the sequence 7, 11, 15, 19, 23, ...?",
          choices: ["A. Add 3", "B. Add 4", "C. Multiply by 2", "D. Add 5", "E. Subtract 3"],
          answer: 1
        },
        {
          text: "How many numbers between 1 and 100 are exactly divisible by 7?",
          choices: ["A. 12", "B. 13", "C. 14", "D. 15", "E. 16"],
          answer: 2
        },
        {
          text: "The sum of three consecutive even numbers is 54. What is the smallest of the three?",
          choices: ["A. 14", "B. 16", "C. 18", "D. 20", "E. 22"],
          answer: 1
        },
        {
          text: "What is the next term? 1, 2, 4, 7, 11, 16, ___",
          choices: ["A. 20", "B. 21", "C. 22", "D. 23", "E. 24"],
          answer: 2
        },
        {
          text: "What is the 15th term in the sequence 3, 6, 9, 12, ...?",
          choices: ["A. 40", "B. 42", "C. 44", "D. 45", "E. 48"],
          answer: 3
        },
        {
          text: "Which of these is NOT a perfect square?",
          choices: ["A. 9", "B. 25", "C. 36", "D. 45", "E. 64"],
          answer: 3
        },
        {
          text: "The pattern of shapes repeats every 5: ★ ♦ ○ □ △. What is the 23rd shape?",
          choices: ["A. ★", "B. ♦", "C. ○", "D. □", "E. △"],
          answer: 2
        },
        {
          text: "What is the sum of the first 6 terms of the sequence 1, 5, 9, 13, 17, 21?",
          choices: ["A. 56", "B. 60", "C. 64", "D. 66", "E. 70"],
          answer: 3
        },
        {
          text: "How many multiples of 9 are between 1 and 100 (inclusive)?",
          choices: ["A. 9", "B. 10", "C. 11", "D. 12", "E. 13"],
          answer: 2
        },
        {
          text: "The sequence 1, 3, 6, 10, 15, 21, ... What is the 7th term?",
          choices: ["A. 24", "B. 26", "C. 28", "D. 30", "E. 32"],
          answer: 2
        },
        {
          text: "What is the ratio between consecutive terms in the sequence 3, 9, 27, 81, ...?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 6", "E. 9"],
          answer: 1
        },
        {
          text: "What is the missing number? 5, 10, ___, 40, 80",
          choices: ["A. 15", "B. 20", "C. 25", "D. 30", "E. 35"],
          answer: 1
        },
        {
          text: "A 2-digit number has a tens digit 3 more than its units digit, and the sum of its digits is 11. What is the number?",
          choices: ["A. 29", "B. 47", "C. 65", "D. 74", "E. 83"],
          answer: 3
        },
        {
          text: "What is the next number? 512, 256, 128, 64, ___",
          choices: ["A. 16", "B. 32", "C. 48", "D. 64", "E. 128"],
          answer: 1
        },
        {
          text: "The sequence 3, 4, 7, 11, 18, 29, ... What comes next?",
          choices: ["A. 40", "B. 43", "C. 47", "D. 51", "E. 55"],
          answer: 2
        },
        {
          text: "Which term in the sequence 4, 8, 12, 16, ... equals 64?",
          choices: ["A. 14th", "B. 15th", "C. 16th", "D. 17th", "E. 18th"],
          answer: 2
        },
        {
          text: "In the sequence 100, 91, 82, ..., what is the first term that is less than 50?",
          choices: ["A. 43", "B. 44", "C. 45", "D. 46", "E. 47"],
          answer: 3
        },
        {
          text: "The sum of two consecutive numbers is 99. What is the larger number?",
          choices: ["A. 48", "B. 49", "C. 50", "D. 51", "E. 52"],
          answer: 2
        },
        {
          text: "How many terms are in the sequence 5, 10, 15, 20, ..., 75?",
          choices: ["A. 13", "B. 14", "C. 15", "D. 16", "E. 17"],
          answer: 2
        },
        {
          text: "The sum of the first n odd numbers equals n². What is the sum of the first 9 odd numbers?",
          choices: ["A. 72", "B. 77", "C. 81", "D. 85", "E. 90"],
          answer: 2
        },
        {
          text: "In the sequence 1, 1, 2, 3, 5, 8, 13, 21, 34, what is the 9th term?",
          choices: ["A. 21", "B. 28", "C. 31", "D. 34", "E. 37"],
          answer: 3
        },
        {
          text: "What is the sum of the 4th and 5th square numbers (i.e., 4² and 5²)?",
          choices: ["A. 35", "B. 37", "C. 39", "D. 41", "E. 43"],
          answer: 3
        },
        {
          text: "A sequence starts at 3 and each term is 5 more than the previous. Which of these numbers is in the sequence?",
          choices: ["A. 24", "B. 29", "C. 32", "D. 34", "E. 36"],
          answer: 1
        },
        {
          text: "What is the 100th term of the sequence 1, 2, 1, 2, 1, 2, ...?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 4"],
          answer: 2
        },
        {
          text: "A tile pattern repeats every 4 tiles: blue, red, green, yellow. What colour is the 30th tile?",
          choices: ["A. Blue", "B. Red", "C. Green", "D. Yellow", "E. White"],
          answer: 1
        },
        {
          text: "In the sequence 6, 11, 16, 21, ..., what is the first term greater than 100?",
          choices: ["A. 101", "B. 103", "C. 106", "D. 111", "E. 116"],
          answer: 0
        },
        {
          text: "Staircase blocks: step 1 has 1 block, step 2 has 3, step 3 has 6, step 4 has 10. How many blocks are on step 6?",
          choices: ["A. 15", "B. 18", "C. 21", "D. 24", "E. 27"],
          answer: 2
        },
        {
          text: "What is the missing number in the sequence? 2, 6, 12, 20, ___, 42",
          choices: ["A. 28", "B. 29", "C. 30", "D. 31", "E. 32"],
          answer: 2
        },
        {
          text: "A number pattern: 1×1, 11×11, 111×111. The results are 1, 121, 12321. What is 1111×1111?",
          choices: ["A. 1 234 321", "B. 1 233 321", "C. 1 232 321", "D. 1 231 321", "E. 1 230 321"],
          answer: 0
        },
        {
          text: "In the sequence of multiples of 3 starting from 3, which position does 99 occupy?",
          choices: ["A. 30th", "B. 32nd", "C. 33rd", "D. 35th", "E. 36th"],
          answer: 2
        },
        {
          text: "How many even numbers are there between 11 and 51 (not including 11 and 51)?",
          choices: ["A. 18", "B. 19", "C. 20", "D. 21", "E. 22"],
          answer: 2
        }
      ]
    },

    "2.1": {
      title: "2.1 2D Shape Analysis",
      questions: [
        {
          text: "A rectangle has length 8 cm and width 5 cm. What is its area?",
          choices: ["A. 26 cm²", "B. 30 cm²", "C. 36 cm²", "D. 40 cm²", "E. 45 cm²"],
          answer: 3
        },
        {
          text: "A square has a perimeter of 24 cm. What is its area?",
          choices: ["A. 24 cm²", "B. 30 cm²", "C. 36 cm²", "D. 48 cm²", "E. 64 cm²"],
          answer: 2
        },
        {
          text: "A large square of side 10 cm has a small square of side 4 cm removed from one corner. What is the remaining area?",
          choices: ["A. 80 cm²", "B. 84 cm²", "C. 86 cm²", "D. 90 cm²", "E. 96 cm²"],
          answer: 1
        },
        {
          text: "Two squares, each with side 6 cm, overlap with a shared area of 6 cm². What is the total area covered by both squares?",
          choices: ["A. 60 cm²", "B. 66 cm²", "C. 70 cm²", "D. 72 cm²", "E. 76 cm²"],
          answer: 1
        },
        {
          text: "A right triangle has legs of 6 cm and 8 cm. What is the area of the triangle?",
          choices: ["A. 20 cm²", "B. 22 cm²", "C. 24 cm²", "D. 28 cm²", "E. 30 cm²"],
          answer: 2
        },
        {
          text: "How many lines of symmetry does a regular hexagon have?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 6", "E. 8"],
          answer: 3
        },
        {
          text: "A rectangle has perimeter 28 cm and length 9 cm. What is its width?",
          choices: ["A. 4 cm", "B. 5 cm", "C. 6 cm", "D. 7 cm", "E. 8 cm"],
          answer: 1
        },
        {
          text: "A square has area 49 cm². What is its perimeter?",
          choices: ["A. 14 cm", "B. 21 cm", "C. 28 cm", "D. 35 cm", "E. 42 cm"],
          answer: 2
        },
        {
          text: "What is the sum of angles in a triangle?",
          choices: ["A. 90°", "B. 120°", "C. 160°", "D. 180°", "E. 360°"],
          answer: 3
        },
        {
          text: "A triangle has base 10 cm and height 6 cm. What is its area?",
          choices: ["A. 20 cm²", "B. 25 cm²", "C. 30 cm²", "D. 40 cm²", "E. 60 cm²"],
          answer: 2
        },
        {
          text: "A rectangle has width 7 cm and area 84 cm². What is its length?",
          choices: ["A. 10 cm", "B. 11 cm", "C. 12 cm", "D. 13 cm", "E. 14 cm"],
          answer: 2
        },
        {
          text: "What is the sum of interior angles of a quadrilateral?",
          choices: ["A. 180°", "B. 270°", "C. 360°", "D. 450°", "E. 540°"],
          answer: 2
        },
        {
          text: "How many diagonals does a square have?",
          choices: ["A. 0", "B. 2", "C. 4", "D. 6", "E. 8"],
          answer: 1
        },
        {
          text: "A square has diagonal 10 cm. What is its area?",
          choices: ["A. 25 cm²", "B. 40 cm²", "C. 50 cm²", "D. 100 cm²", "E. 200 cm²"],
          answer: 2
        },
        {
          text: "A regular pentagon has all sides 5 cm. What is its perimeter?",
          choices: ["A. 10 cm", "B. 20 cm", "C. 25 cm", "D. 30 cm", "E. 35 cm"],
          answer: 2
        },
        {
          text: "A rectangle 15 cm × 8 cm has a 5 cm × 4 cm corner removed. What is the remaining area?",
          choices: ["A. 80 cm²", "B. 90 cm²", "C. 100 cm²", "D. 110 cm²", "E. 120 cm²"],
          answer: 2
        },
        {
          text: "Which shape has 4 equal sides but no right angles?",
          choices: ["A. Square", "B. Rectangle", "C. Parallelogram", "D. Rhombus", "E. Trapezoid"],
          answer: 3
        },
        {
          text: "An equilateral triangle has side 6 cm. What is its perimeter?",
          choices: ["A. 6 cm", "B. 12 cm", "C. 18 cm", "D. 24 cm", "E. 36 cm"],
          answer: 2
        },
        {
          text: "A rectangle has length twice its width and area 72 cm². What is the width?",
          choices: ["A. 4 cm", "B. 5 cm", "C. 6 cm", "D. 8 cm", "E. 9 cm"],
          answer: 2
        },
        {
          text: "A quadrilateral has angles 70°, 90°, 110°, and x°. What is x?",
          choices: ["A. 70°", "B. 80°", "C. 90°", "D. 100°", "E. 110°"],
          answer: 2
        },
        {
          text: "A circle fits inside a square touching all four sides. The square has side 10 cm. What is the diameter of the circle?",
          choices: ["A. 5 cm", "B. 8 cm", "C. 10 cm", "D. 12 cm", "E. 20 cm"],
          answer: 2
        },
        {
          text: "How many lines of symmetry does a square have?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 8"],
          answer: 3
        },
        {
          text: "A square has the same area as a 4 cm × 9 cm rectangle. What is the side of the square?",
          choices: ["A. 4 cm", "B. 5 cm", "C. 6 cm", "D. 7 cm", "E. 9 cm"],
          answer: 2
        },
        {
          text: "A rectangle 8 cm × 6 cm is cut along one diagonal, forming two triangles. What is the area of each triangle?",
          choices: ["A. 20 cm²", "B. 24 cm²", "C. 30 cm²", "D. 48 cm²", "E. 96 cm²"],
          answer: 1
        },
        {
          text: "A square of side 6 cm is surrounded by a border 1 cm wide. What is the area of the border?",
          choices: ["A. 20 cm²", "B. 24 cm²", "C. 28 cm²", "D. 32 cm²", "E. 36 cm²"],
          answer: 2
        },
        {
          text: "How many sides does a nonagon have?",
          choices: ["A. 7", "B. 8", "C. 9", "D. 10", "E. 11"],
          answer: 2
        },
        {
          text: "A right-angled triangle has one angle of 45°. What are the other two angles?",
          choices: ["A. 45° and 80°", "B. 60° and 75°", "C. 90° and 45°", "D. 45° and 90°", "E. 30° and 105°"],
          answer: 2
        },
        {
          text: "A parallelogram has base 8 cm and height 5 cm. What is its area?",
          choices: ["A. 20 cm²", "B. 30 cm²", "C. 40 cm²", "D. 45 cm²", "E. 80 cm²"],
          answer: 2
        },
        {
          text: "How many lines of symmetry does an isosceles triangle have?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 4"],
          answer: 1
        },
        {
          text: "A rectangle has length 13 cm and width 4 cm. What is its area?",
          choices: ["A. 34 cm²", "B. 48 cm²", "C. 52 cm²", "D. 56 cm²", "E. 60 cm²"],
          answer: 2
        },
        {
          text: "How many right angles does a rectangle have?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 6"],
          answer: 3
        },
        {
          text: "A square field has area 64 m². What is the length of one side?",
          choices: ["A. 6 m", "B. 7 m", "C. 8 m", "D. 9 m", "E. 10 m"],
          answer: 2
        },
        {
          text: "A triangle has angles 40° and 70°. What is the third angle?",
          choices: ["A. 60°", "B. 65°", "C. 70°", "D. 80°", "E. 110°"],
          answer: 2
        },
        {
          text: "How many lines of symmetry does an equilateral triangle have?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 6"],
          answer: 3
        },
        {
          text: "A rectangle has area 56 cm² and one side 7 cm. What is the other side?",
          choices: ["A. 6 cm", "B. 7 cm", "C. 8 cm", "D. 9 cm", "E. 10 cm"],
          answer: 2
        },
        {
          text: "How many sides does a hexagon have?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "A square has perimeter 32 cm. What is its area?",
          choices: ["A. 32 cm²", "B. 48 cm²", "C. 56 cm²", "D. 64 cm²", "E. 128 cm²"],
          answer: 3
        },
        {
          text: "A right triangle has legs 5 cm and 12 cm. What is its area?",
          choices: ["A. 17 cm²", "B. 25 cm²", "C. 30 cm²", "D. 34 cm²", "E. 60 cm²"],
          answer: 2
        },
        {
          text: "How many lines of symmetry does a regular octagon have?",
          choices: ["A. 2", "B. 4", "C. 6", "D. 8", "E. 16"],
          answer: 3
        },
        {
          text: "Two rectangles each 5 cm × 3 cm are placed side by side along the 3 cm edge. What is the total area?",
          choices: ["A. 16 cm²", "B. 24 cm²", "C. 30 cm²", "D. 40 cm²", "E. 45 cm²"],
          answer: 2
        },
        {
          text: "A shape has 5 sides all equal and 5 equal angles. What is the shape?",
          choices: ["A. Square", "B. Hexagon", "C. Octagon", "D. Pentagon", "E. Heptagon"],
          answer: 3
        },
        {
          text: "A square has side 9 cm. What is its area?",
          choices: ["A. 36 cm²", "B. 63 cm²", "C. 72 cm²", "D. 81 cm²", "E. 90 cm²"],
          answer: 3
        },
        {
          text: "A triangle with base 14 cm and height 5 cm. What is its area?",
          choices: ["A. 19 cm²", "B. 28 cm²", "C. 35 cm²", "D. 40 cm²", "E. 70 cm²"],
          answer: 2
        },
        {
          text: "How many vertices does a triangle have?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 1
        },
        {
          text: "A rectangle has length 11 cm and width 6 cm. What is its area?",
          choices: ["A. 34 cm²", "B. 55 cm²", "C. 66 cm²", "D. 72 cm²", "E. 77 cm²"],
          answer: 2
        },
        {
          text: "What is the sum of interior angles of a regular pentagon?",
          choices: ["A. 360°", "B. 450°", "C. 540°", "D. 630°", "E. 720°"],
          answer: 2
        },
        {
          text: "A square tile has side 4 cm. What is its area?",
          choices: ["A. 8 cm²", "B. 12 cm²", "C. 14 cm²", "D. 16 cm²", "E. 20 cm²"],
          answer: 3
        },
        {
          text: "A rectangle has length 20 cm and width 3 cm. What is its area?",
          choices: ["A. 23 cm²", "B. 46 cm²", "C. 60 cm²", "D. 66 cm²", "E. 120 cm²"],
          answer: 2
        },
        {
          text: "A large square has side 12 cm. A smaller square of side 4 cm is cut from its centre. What is the remaining area?",
          choices: ["A. 112 cm²", "B. 128 cm²", "C. 130 cm²", "D. 140 cm²", "E. 144 cm²"],
          answer: 1
        },
        {
          text: "How many lines of symmetry does a circle have?",
          choices: ["A. 0", "B. 1", "C. 4", "D. 8", "E. Infinitely many"],
          answer: 4
        }
      ]
    },

    "2.2": {
      title: "2.2 Perimeter & Measurement",
      questions: [
        {
          text: "A rectangle has perimeter 30 cm and width 5 cm. What is its length?",
          choices: ["A. 8 cm", "B. 10 cm", "C. 12 cm", "D. 15 cm", "E. 20 cm"],
          answer: 1
        },
        {
          text: "A square garden has a side of 12 m. Fence posts are placed every 3 m. How many posts are needed?",
          choices: ["A. 12", "B. 14", "C. 16", "D. 18", "E. 20"],
          answer: 2
        },
        {
          text: "The length of a rectangle is twice its width. If the perimeter is 48 cm, what is the area?",
          choices: ["A. 96 cm²", "B. 128 cm²", "C. 144 cm²", "D. 168 cm²", "E. 192 cm²"],
          answer: 1
        },
        {
          text: "A room is 6 m long and 4 m wide. How many metres of baseboard are needed to go around all four walls?",
          choices: ["A. 18 m", "B. 20 m", "C. 22 m", "D. 24 m", "E. 26 m"],
          answer: 1
        },
        {
          text: "A path of width 1 m is built around a rectangular garden of 5 m × 3 m. What is the perimeter of the outer edge of the path?",
          choices: ["A. 18 m", "B. 20 m", "C. 22 m", "D. 24 m", "E. 26 m"],
          answer: 3
        },
        {
          text: "A wire of length 36 cm is bent into a rectangle. If the length is 11 cm, what is the width?",
          choices: ["A. 5 cm", "B. 6 cm", "C. 7 cm", "D. 8 cm", "E. 9 cm"],
          answer: 2
        },
        {
          text: "A square has perimeter 36 cm. What is its area?",
          choices: ["A. 36 cm²", "B. 64 cm²", "C. 81 cm²", "D. 100 cm²", "E. 121 cm²"],
          answer: 2
        },
        {
          text: "A rectangle has area 60 cm² and length 12 cm. What is its perimeter?",
          choices: ["A. 24 cm", "B. 28 cm", "C. 34 cm", "D. 36 cm", "E. 40 cm"],
          answer: 2
        },
        {
          text: "A triangle has sides 7 cm, 9 cm, and 11 cm. What is its perimeter?",
          choices: ["A. 18 cm", "B. 20 cm", "C. 25 cm", "D. 27 cm", "E. 30 cm"],
          answer: 3
        },
        {
          text: "A running track is a 100 m × 60 m rectangle. If you run 5 laps, how far do you run?",
          choices: ["A. 800 m", "B. 1200 m", "C. 1600 m", "D. 2000 m", "E. 2400 m"],
          answer: 2
        },
        {
          text: "A square flower bed has perimeter 32 m. What is its area?",
          choices: ["A. 32 m²", "B. 56 m²", "C. 64 m²", "D. 81 m²", "E. 128 m²"],
          answer: 2
        },
        {
          text: "A path 2 m wide is built inside a 20 m × 14 m garden (along all four inner sides). What is the area of the inner section (inside path)?",
          choices: ["A. 120 m²", "B. 140 m²", "C. 150 m²", "D. 160 m²", "E. 180 m²"],
          answer: 3
        },
        {
          text: "A regular hexagon has side 7 cm. What is its perimeter?",
          choices: ["A. 28 cm", "B. 35 cm", "C. 40 cm", "D. 42 cm", "E. 49 cm"],
          answer: 3
        },
        {
          text: "A string forms a 10 cm × 6 cm rectangle. If it is bent into a square, what is the side length of the square?",
          choices: ["A. 6 cm", "B. 7 cm", "C. 8 cm", "D. 10 cm", "E. 16 cm"],
          answer: 2
        },
        {
          text: "A regular octagon has perimeter 56 cm. What is the length of each side?",
          choices: ["A. 5 cm", "B. 6 cm", "C. 7 cm", "D. 8 cm", "E. 9 cm"],
          answer: 2
        },
        {
          text: "A field 50 m × 30 m needs fencing around its perimeter. Fencing costs €5 per metre. What is the total cost?",
          choices: ["A. €400", "B. €600", "C. €750", "D. €800", "E. €1000"],
          answer: 3
        },
        {
          text: "Two identical 4 cm × 4 cm squares are joined along one side. What is the perimeter of the new shape?",
          choices: ["A. 16 cm", "B. 20 cm", "C. 24 cm", "D. 28 cm", "E. 32 cm"],
          answer: 2
        },
        {
          text: "A triangle has sides in the ratio 3:4:5, and the perimeter is 48 cm. What is the length of the longest side?",
          choices: ["A. 12 cm", "B. 16 cm", "C. 18 cm", "D. 20 cm", "E. 24 cm"],
          answer: 3
        },
        {
          text: "A wire is bent into an equilateral triangle with side 12 cm. If the same wire is bent into a square, what is the side of the square?",
          choices: ["A. 8 cm", "B. 9 cm", "C. 10 cm", "D. 12 cm", "E. 15 cm"],
          answer: 1
        },
        {
          text: "A photo frame is 10 cm × 8 cm on the outside and the frame is 1 cm wide all around. What is the area of just the frame (not the photo)?",
          choices: ["A. 24 cm²", "B. 28 cm²", "C. 32 cm²", "D. 36 cm²", "E. 40 cm²"],
          answer: 2
        },
        {
          text: "A regular octagon has side 5 cm. What is its perimeter?",
          choices: ["A. 25 cm", "B. 35 cm", "C. 40 cm", "D. 45 cm", "E. 50 cm"],
          answer: 2
        },
        {
          text: "A rectangle has perimeter 48 cm and its length is 4 cm more than its width. What is its area?",
          choices: ["A. 120 cm²", "B. 128 cm²", "C. 135 cm²", "D. 140 cm²", "E. 150 cm²"],
          answer: 3
        },
        {
          text: "A room is 7 m × 5 m. Tiles are 50 cm × 50 cm. How many tiles are needed to cover the floor?",
          choices: ["A. 70", "B. 100", "C. 140", "D. 175", "E. 280"],
          answer: 2
        },
        {
          text: "A rectangle has area 72 cm² and width 8 cm. What is its perimeter?",
          choices: ["A. 26 cm", "B. 30 cm", "C. 34 cm", "D. 38 cm", "E. 42 cm"],
          answer: 2
        },
        {
          text: "A square has area 100 cm². A rectangle has the same perimeter as this square. If the rectangle is 16 cm long, what is its width?",
          choices: ["A. 4 cm", "B. 6 cm", "C. 8 cm", "D. 10 cm", "E. 12 cm"],
          answer: 0
        },
        {
          text: "A path 2 m wide surrounds a square lawn of side 10 m. What is the total area including the path?",
          choices: ["A. 144 m²", "B. 168 m²", "C. 196 m²", "D. 204 m²", "E. 256 m²"],
          answer: 2
        },
        {
          text: "A square and a rectangle have the same perimeter. The square has side 6 cm. The rectangle is 9 cm long. What is the rectangle's width?",
          choices: ["A. 3 cm", "B. 4 cm", "C. 5 cm", "D. 6 cm", "E. 9 cm"],
          answer: 0
        },
        {
          text: "A ribbon 120 cm long is cut into pieces of 8 cm each. How many pieces are there?",
          choices: ["A. 12", "B. 14", "C. 16", "D. 15", "E. 18"],
          answer: 3
        },
        {
          text: "A square garden has side 15 m. A path 1 m wide is built just outside it. What is the area of just the path?",
          choices: ["A. 56 m²", "B. 60 m²", "C. 64 m²", "D. 68 m²", "E. 72 m²"],
          answer: 2
        },
        {
          text: "A rectangle has perimeter 52 cm. If 3 cm is added to each side's length and width, what is the new perimeter?",
          choices: ["A. 56 cm", "B. 58 cm", "C. 60 cm", "D. 62 cm", "E. 64 cm"],
          answer: 3
        },
        {
          text: "A room 5 m × 4 m has carpet costing €12 per m². What is the total cost?",
          choices: ["A. €180", "B. €200", "C. €240", "D. €260", "E. €300"],
          answer: 2
        },
        {
          text: "A rectangle has width 9 cm and length 14 cm. What is its perimeter?",
          choices: ["A. 42 cm", "B. 44 cm", "C. 46 cm", "D. 48 cm", "E. 50 cm"],
          answer: 2
        },
        {
          text: "An equilateral triangle has perimeter 27 cm. What is the length of each side?",
          choices: ["A. 7 cm", "B. 8 cm", "C. 9 cm", "D. 10 cm", "E. 12 cm"],
          answer: 2
        },
        {
          text: "A square has side 7 cm. A rectangle has the same area. If the rectangle's length is 14 cm, what is its width?",
          choices: ["A. 2 cm", "B. 3 cm", "C. 3.5 cm", "D. 4 cm", "E. 7 cm"],
          answer: 2
        },
        {
          text: "A rectangle is 25 m × 16 m. How many 1 m × 1 m squares can fit in it?",
          choices: ["A. 200", "B. 300", "C. 400", "D. 450", "E. 500"],
          answer: 2
        },
        {
          text: "A hexagonal tile has each side 4 cm. What is the perimeter of one tile?",
          choices: ["A. 16 cm", "B. 20 cm", "C. 24 cm", "D. 28 cm", "E. 32 cm"],
          answer: 2
        },
        {
          text: "A rectangular field 80 m × 60 m. One lap around it is how many metres?",
          choices: ["A. 140 m", "B. 200 m", "C. 240 m", "D. 280 m", "E. 320 m"],
          answer: 2
        },
        {
          text: "A rectangle has length 18 cm. Its width is a third of its length. What is its perimeter?",
          choices: ["A. 36 cm", "B. 42 cm", "C. 48 cm", "D. 54 cm", "E. 60 cm"],
          answer: 2
        },
        {
          text: "A fence runs along three sides of a rectangular yard 20 m × 12 m (the fourth side is a wall). How many metres of fencing is needed?",
          choices: ["A. 44 m", "B. 52 m", "C. 64 m", "D. 48 m", "E. 56 m"],
          answer: 1
        },
        {
          text: "Two squares, each with side 5 cm, share one full side. What is the perimeter of the combined shape?",
          choices: ["A. 20 cm", "B. 30 cm", "C. 40 cm", "D. 45 cm", "E. 50 cm"],
          answer: 1
        },
        {
          text: "A square has perimeter 44 cm. What is the length of one side?",
          choices: ["A. 9 cm", "B. 10 cm", "C. 11 cm", "D. 12 cm", "E. 13 cm"],
          answer: 2
        },
        {
          text: "A rectangle has length 16 cm and area 80 cm². What is its width?",
          choices: ["A. 4 cm", "B. 5 cm", "C. 6 cm", "D. 8 cm", "E. 10 cm"],
          answer: 1
        },
        {
          text: "A rectangular path 1 m wide runs around the inside edge of a 10 m × 8 m room. What area does the path cover?",
          choices: ["A. 24 m²", "B. 28 m²", "C. 32 m²", "D. 36 m²", "E. 40 m²"],
          answer: 2
        },
        {
          text: "A square has area 144 cm². What is its perimeter?",
          choices: ["A. 36 cm", "B. 40 cm", "C. 48 cm", "D. 56 cm", "E. 72 cm"],
          answer: 2
        },
        {
          text: "A regular pentagon has perimeter 45 cm. What is the length of each side?",
          choices: ["A. 7 cm", "B. 8 cm", "C. 9 cm", "D. 10 cm", "E. 11 cm"],
          answer: 2
        },
        {
          text: "A rectangle has perimeter 40 cm and length 13 cm. What is its width?",
          choices: ["A. 5 cm", "B. 6 cm", "C. 7 cm", "D. 8 cm", "E. 9 cm"],
          answer: 2
        },
        {
          text: "A square has side 5 cm. A second square has side 3 cm. What is the difference in their perimeters?",
          choices: ["A. 2 cm", "B. 4 cm", "C. 6 cm", "D. 8 cm", "E. 10 cm"],
          answer: 3
        },
        {
          text: "A rectangle is 9 cm wide and 6 cm tall. What is its perimeter?",
          choices: ["A. 24 cm", "B. 28 cm", "C. 30 cm", "D. 32 cm", "E. 36 cm"],
          answer: 2
        },
        {
          text: "A triangle has two sides of 8 cm each and a base of 5 cm. What is its perimeter?",
          choices: ["A. 13 cm", "B. 16 cm", "C. 21 cm", "D. 26 cm", "E. 30 cm"],
          answer: 2
        },
        {
          text: "A square has side 11 cm. What is its perimeter?",
          choices: ["A. 33 cm", "B. 40 cm", "C. 44 cm", "D. 48 cm", "E. 121 cm"],
          answer: 2
        }
      ]
    },

    "2.3": {
      title: "2.3 3D Objects & Cubes",
      questions: [
        {
          text: "A cube has a side length of 3 cm. What is its volume?",
          choices: ["A. 9 cm³", "B. 18 cm³", "C. 24 cm³", "D. 27 cm³", "E. 30 cm³"],
          answer: 3
        },
        {
          text: "How many faces does a rectangular box (cuboid) have?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 8", "E. 12"],
          answer: 2
        },
        {
          text: "A stack of 4 cubes, each with a side of 2 cm, is placed in a single column. What is the total height?",
          choices: ["A. 4 cm", "B. 6 cm", "C. 8 cm", "D. 10 cm", "E. 12 cm"],
          answer: 2
        },
        {
          text: "27 small cubes are arranged into one large cube. How many small cubes are on each edge of the large cube?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 1
        },
        {
          text: "A rectangular box is 5 cm long, 4 cm wide, and 3 cm tall. What is the total surface area?",
          choices: ["A. 60 cm²", "B. 74 cm²", "C. 80 cm²", "D. 94 cm²", "E. 120 cm²"],
          answer: 3
        },
        {
          text: "A cube is painted red on all faces and then cut into 8 equal smaller cubes. How many smaller cubes have exactly 3 red faces?",
          choices: ["A. 0", "B. 4", "C. 6", "D. 8", "E. 12"],
          answer: 3
        },
        {
          text: "A cube has 12 edges. If each edge is 5 cm long, what is the sum of all edges?",
          choices: ["A. 48 cm", "B. 54 cm", "C. 60 cm", "D. 66 cm", "E. 72 cm"],
          answer: 2
        },
        {
          text: "What is the volume of a rectangular box 6 cm × 4 cm × 5 cm?",
          choices: ["A. 80 cm³", "B. 100 cm³", "C. 120 cm³", "D. 140 cm³", "E. 160 cm³"],
          answer: 2
        },
        {
          text: "How many vertices does a cube have?",
          choices: ["A. 4", "B. 6", "C. 8", "D. 10", "E. 12"],
          answer: 2
        },
        {
          text: "How many edges does a cuboid have?",
          choices: ["A. 6", "B. 8", "C. 10", "D. 12", "E. 16"],
          answer: 3
        },
        {
          text: "A cube has volume 125 cm³. What is the length of one side?",
          choices: ["A. 4 cm", "B. 4.5 cm", "C. 5 cm", "D. 6 cm", "E. 7 cm"],
          answer: 2
        },
        {
          text: "What is the surface area of a cube with side 4 cm?",
          choices: ["A. 48 cm²", "B. 64 cm²", "C. 96 cm²", "D. 112 cm²", "E. 144 cm²"],
          answer: 2
        },
        {
          text: "A box is 8 cm × 5 cm × 3 cm. How many 1 cm³ unit cubes fit inside?",
          choices: ["A. 80 cm³", "B. 100 cm³", "C. 120 cm³", "D. 140 cm³", "E. 160 cm³"],
          answer: 2
        },
        {
          text: "A cuboid has a square base of side 6 cm and a height of 4 cm. What is its volume?",
          choices: ["A. 96 cm³", "B. 120 cm³", "C. 144 cm³", "D. 168 cm³", "E. 192 cm³"],
          answer: 2
        },
        {
          text: "64 unit cubes are arranged to form a large cube. What is the length of each edge of the large cube?",
          choices: ["A. 3", "B. 4", "C. 6", "D. 8", "E. 16"],
          answer: 1
        },
        {
          text: "A 3×3×3 cube is painted on all faces and then cut into 27 small unit cubes. How many small cubes have NO painted faces?",
          choices: ["A. 0", "B. 1", "C. 4", "D. 6", "E. 8"],
          answer: 1
        },
        {
          text: "A 3×3×3 cube is painted on all faces and cut into 27 small cubes. How many small cubes have exactly 2 painted faces?",
          choices: ["A. 6", "B. 8", "C. 12", "D. 16", "E. 18"],
          answer: 2
        },
        {
          text: "A 3×3×3 cube is painted on all faces and cut into 27 small cubes. How many small cubes have exactly 1 painted face?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "A box has volume 180 cm³. Its length is 9 cm and width is 4 cm. What is its height?",
          choices: ["A. 4 cm", "B. 5 cm", "C. 6 cm", "D. 7 cm", "E. 8 cm"],
          answer: 1
        },
        {
          text: "A cube has surface area 150 cm². What is the length of one side?",
          choices: ["A. 4 cm", "B. 4.5 cm", "C. 5 cm", "D. 6 cm", "E. 7 cm"],
          answer: 2
        },
        {
          text: "A 4×4×4 cube is painted and cut into 64 small cubes. How many small cubes have no paint?",
          choices: ["A. 4", "B. 6", "C. 8", "D. 12", "E. 16"],
          answer: 2
        },
        {
          text: "How many faces does a triangular prism have?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "A box is 10 cm × 8 cm × 6 cm. What is its volume?",
          choices: ["A. 240 cm³", "B. 360 cm³", "C. 420 cm³", "D. 480 cm³", "E. 520 cm³"],
          answer: 3
        },
        {
          text: "A box is 3 cm × 4 cm × 5 cm. What is its surface area?",
          choices: ["A. 60 cm²", "B. 74 cm²", "C. 80 cm²", "D. 94 cm²", "E. 120 cm²"],
          answer: 3
        },
        {
          text: "A square pyramid has a square base. How many faces does it have in total?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 1
        },
        {
          text: "A swimming pool is 10 m × 5 m × 2 m. What is its volume?",
          choices: ["A. 50 m³", "B. 75 m³", "C. 100 m³", "D. 120 m³", "E. 150 m³"],
          answer: 2
        },
        {
          text: "3 cubes each with side 3 cm are glued together in a row. What is the total surface area?",
          choices: ["A. 108 cm²", "B. 114 cm²", "C. 126 cm²", "D. 162 cm²", "E. 180 cm²"],
          answer: 2
        },
        {
          text: "A cube has side 6 cm and is cut into 8 equal smaller cubes. What is the side of each small cube?",
          choices: ["A. 2 cm", "B. 3 cm", "C. 4 cm", "D. 6 cm", "E. 9 cm"],
          answer: 1
        },
        {
          text: "How many vertices does a cuboid have?",
          choices: ["A. 4", "B. 6", "C. 8", "D. 10", "E. 12"],
          answer: 2
        },
        {
          text: "A cube has volume 8 cm³. What is its total surface area?",
          choices: ["A. 12 cm²", "B. 16 cm²", "C. 24 cm²", "D. 32 cm²", "E. 48 cm²"],
          answer: 2
        },
        {
          text: "A 3×3×3 cube is painted and cut into 27 unit cubes. How many have exactly 3 painted faces?",
          choices: ["A. 0", "B. 4", "C. 6", "D. 8", "E. 12"],
          answer: 3
        },
        {
          text: "A cuboid has volume 120 cm³, length 6 cm, and width 5 cm. What is its height?",
          choices: ["A. 3 cm", "B. 4 cm", "C. 5 cm", "D. 6 cm", "E. 8 cm"],
          answer: 1
        },
        {
          text: "A box measures 20 cm × 15 cm × 10 cm. What is its surface area?",
          choices: ["A. 1000 cm²", "B. 1100 cm²", "C. 1300 cm²", "D. 1500 cm²", "E. 3000 cm²"],
          answer: 2
        },
        {
          text: "Two boxes each 4 cm × 3 cm × 2 cm are placed side by side along their 4 cm edge. What is the combined volume?",
          choices: ["A. 24 cm³", "B. 36 cm³", "C. 40 cm³", "D. 48 cm³", "E. 60 cm³"],
          answer: 3
        },
        {
          text: "A 2 cm × 3 cm × 4 cm solid. How many 1 cm³ unit cubes does it contain?",
          choices: ["A. 9", "B. 18", "C. 24", "D. 30", "E. 36"],
          answer: 2
        },
        {
          text: "A cube side is doubled. Its new volume is how many times the original?",
          choices: ["A. 2 times", "B. 4 times", "C. 6 times", "D. 8 times", "E. 12 times"],
          answer: 3
        },
        {
          text: "A fish tank is 40 cm × 30 cm and water is filled to a depth of 20 cm. How many litres of water are in the tank? (1 litre = 1000 cm³)",
          choices: ["A. 12 L", "B. 18 L", "C. 20 L", "D. 24 L", "E. 30 L"],
          answer: 3
        },
        {
          text: "A rectangular box has dimensions 15 cm × 10 cm × 8 cm. If all dimensions are halved, what is the new volume?",
          choices: ["A. 75 cm³", "B. 100 cm³", "C. 150 cm³", "D. 200 cm³", "E. 300 cm³"],
          answer: 2
        },
        {
          text: "A cube has surface area 54 cm². What is its volume?",
          choices: ["A. 9 cm³", "B. 18 cm³", "C. 27 cm³", "D. 36 cm³", "E. 54 cm³"],
          answer: 2
        },
        {
          text: "A 4×4×4 cube has how many unit cubes on its outer surface?",
          choices: ["A. 40", "B. 48", "C. 54", "D. 60", "E. 56"],
          answer: 4
        },
        {
          text: "A rectangular prism has length 7 cm, width 5 cm, height 3 cm. What is its volume?",
          choices: ["A. 75 cm³", "B. 95 cm³", "C. 105 cm³", "D. 115 cm³", "E. 120 cm³"],
          answer: 2
        },
        {
          text: "A cube with side 2 cm sits on top of a cube with side 4 cm. What is the total height?",
          choices: ["A. 4 cm", "B. 5 cm", "C. 6 cm", "D. 7 cm", "E. 8 cm"],
          answer: 2
        },
        {
          text: "A box is filled with sugar cubes each 1 cm × 1 cm × 1 cm. The box is 5 cm × 4 cm × 3 cm. How many sugar cubes fit in the box?",
          choices: ["A. 48", "B. 54", "C. 60", "D. 72", "E. 80"],
          answer: 2
        },
        {
          text: "How many faces does a cube have?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 8", "E. 12"],
          answer: 2
        },
        {
          text: "A cube has volume 64 cm³. What is the length of one side?",
          choices: ["A. 2 cm", "B. 4 cm", "C. 6 cm", "D. 8 cm", "E. 16 cm"],
          answer: 1
        },
        {
          text: "A rectangular box is 12 cm × 5 cm × 4 cm. What is its surface area?",
          choices: ["A. 176 cm²", "B. 196 cm²", "C. 216 cm²", "D. 240 cm²", "E. 256 cm²"],
          answer: 0
        },
        {
          text: "A cube has volume 216 cm³. What is the length of one side?",
          choices: ["A. 4 cm", "B. 5 cm", "C. 6 cm", "D. 7 cm", "E. 8 cm"],
          answer: 2
        },
        {
          text: "A cuboid is 10 cm long, 6 cm wide, and 4 cm tall. What is its volume?",
          choices: ["A. 120 cm³", "B. 180 cm³", "C. 240 cm³", "D. 300 cm³", "E. 360 cm³"],
          answer: 2
        },
        {
          text: "How many edges does a triangular prism have?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 12"],
          answer: 3
        },
        {
          text: "A cube has side 7 cm. What is its surface area?",
          choices: ["A. 196 cm²", "B. 245 cm²", "C. 294 cm²", "D. 343 cm²", "E. 392 cm²"],
          answer: 2
        }
      ]
    },

    "2.4": {
      title: "2.4 Visual Patterns & Transformations",
      questions: [
        {
          text: "A shape is reflected across a vertical line. Which property remains unchanged?",
          choices: ["A. Colour only", "B. Size and shape only", "C. Position only", "D. Size, shape and area", "E. Nothing changes"],
          answer: 3
        },
        {
          text: "A square is rotated 90° clockwise. Which statement is true?",
          choices: ["A. It looks the same", "B. It becomes a rectangle", "C. It looks like a diamond", "D. Its area changes", "E. Its perimeter changes"],
          answer: 0
        },
        {
          text: "How many lines of symmetry does the letter 'H' have?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 4"],
          answer: 2
        },
        {
          text: "A figure is rotated 180°. If the original figure has a dot in the top-left corner, where is the dot after rotation?",
          choices: ["A. Top-left", "B. Top-right", "C. Bottom-left", "D. Bottom-right", "E. Centre"],
          answer: 3
        },
        {
          text: "A tile pattern repeats every 4 tiles: blue, red, green, yellow. What colour is the 30th tile?",
          choices: ["A. Blue", "B. Red", "C. Green", "D. Yellow", "E. None"],
          answer: 1
        },
        {
          text: "A shape has rotational symmetry of order 4. If you rotate it by 90°, it looks the same. Which shape could it be?",
          choices: ["A. Equilateral triangle", "B. Regular pentagon", "C. Square", "D. Rectangle (non-square)", "E. Scalene triangle"],
          answer: 2
        },
        {
          text: "A point at (3, 4) is reflected across the y-axis. What are its new coordinates?",
          choices: ["A. (3, -4)", "B. (-3, 4)", "C. (-3, -4)", "D. (4, 3)", "E. (-4, -3)"],
          answer: 1
        },
        {
          text: "A non-square rectangle has how many lines of symmetry?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 4", "E. 8"],
          answer: 2
        },
        {
          text: "How many lines of symmetry does an equilateral triangle have?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 6"],
          answer: 3
        },
        {
          text: "A shape is rotated a full 360°. What happens?",
          choices: ["A. It changes size", "B. It looks the same", "C. It is flipped", "D. It moves position", "E. It disappears"],
          answer: 1
        },
        {
          text: "How many lines of symmetry does the letter 'O' have?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 4", "E. Infinitely many"],
          answer: 4
        },
        {
          text: "How many lines of symmetry does the letter 'B' have?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 4"],
          answer: 1
        },
        {
          text: "A shape is translated (slid). Which property changes?",
          choices: ["A. Size", "B. Shape", "C. Area", "D. Position", "E. Perimeter"],
          answer: 3
        },
        {
          text: "A shape has rotational symmetry of order 6. By how many degrees must you rotate it to look the same?",
          choices: ["A. 30°", "B. 45°", "C. 60°", "D. 90°", "E. 120°"],
          answer: 2
        },
        {
          text: "The letter 'S' has which type of symmetry?",
          choices: ["A. Line symmetry only", "B. Rotational symmetry only", "C. Both line and rotational", "D. Neither", "E. 4-fold rotational"],
          answer: 1
        },
        {
          text: "Tiles repeat in a pattern of 6: A, B, C, D, E, F. What is the 43rd tile?",
          choices: ["A. A", "B. B", "C. C", "D. D", "E. E"],
          answer: 0
        },
        {
          text: "How many lines of symmetry does a regular octagon have?",
          choices: ["A. 4", "B. 6", "C. 8", "D. 10", "E. 16"],
          answer: 2
        },
        {
          text: "How many lines of symmetry does the letter 'M' have?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 4"],
          answer: 1
        },
        {
          text: "A point at (2, 5) is reflected in the x-axis. What are its new coordinates?",
          choices: ["A. (-2, 5)", "B. (2, -5)", "C. (-2, -5)", "D. (5, 2)", "E. (-5, -2)"],
          answer: 1
        },
        {
          text: "The letter 'Z' has which type of symmetry?",
          choices: ["A. Vertical line symmetry only", "B. Rotational symmetry of order 2 only", "C. Horizontal line symmetry only", "D. Both line and rotational", "E. No symmetry"],
          answer: 1
        },
        {
          text: "A shape has area 9 cm². It is enlarged with scale factor 2. What is the new area?",
          choices: ["A. 18 cm²", "B. 27 cm²", "C. 36 cm²", "D. 45 cm²", "E. 81 cm²"],
          answer: 2
        },
        {
          text: "How many lines of symmetry does an isosceles triangle have?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 4"],
          answer: 1
        },
        {
          text: "A 270° clockwise rotation is the same as how many degrees anticlockwise?",
          choices: ["A. 270°", "B. 180°", "C. 90°", "D. 45°", "E. 360°"],
          answer: 2
        },
        {
          text: "A pattern repeats every 5: circle, triangle, square, star, diamond. What is the 38th shape?",
          choices: ["A. Circle", "B. Triangle", "C. Square", "D. Star", "E. Diamond"],
          answer: 2
        },
        {
          text: "How many lines of symmetry does the letter 'T' have?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 4"],
          answer: 1
        },
        {
          text: "An equilateral triangle has rotational symmetry. At what angle does it first look the same when rotated?",
          choices: ["A. 60°", "B. 90°", "C. 120°", "D. 180°", "E. 240°"],
          answer: 2
        },
        {
          text: "A pattern repeats: triangle, triangle, square. What is the 20th shape?",
          choices: ["A. Triangle", "B. Square", "C. Triangle", "D. Circle", "E. Diamond"],
          answer: 0
        },
        {
          text: "Which letter has rotational symmetry of order 2?",
          choices: ["A. A", "B. H", "C. T", "D. L", "E. F"],
          answer: 1
        },
        {
          text: "A letter 'd' is reflected across a vertical mirror. What does it look like?",
          choices: ["A. d", "B. b", "C. p", "D. q", "E. Same"],
          answer: 1
        },
        {
          text: "Which regular polygon does NOT tessellate by itself?",
          choices: ["A. Square", "B. Equilateral triangle", "C. Regular hexagon", "D. Regular pentagon", "E. Rectangle"],
          answer: 3
        },
        {
          text: "A clock shows 3:00. Seen in a left-right mirror, what time does it appear to show?",
          choices: ["A. 9:00", "B. 3:00", "C. 6:00", "D. 12:00", "E. 3:30"],
          answer: 0
        },
        {
          text: "How many lines of symmetry does the letter 'X' have?",
          choices: ["A. 0", "B. 2", "C. 4", "D. 6", "E. Infinite"],
          answer: 1
        },
        {
          text: "Shapes repeat in the pattern: circle, square, triangle. What is the 17th shape?",
          choices: ["A. Circle", "B. Square", "C. Triangle", "D. Diamond", "E. None"],
          answer: 1
        },
        {
          text: "Which transformation preserves distance AND direction?",
          choices: ["A. Rotation", "B. Reflection", "C. Translation", "D. Enlargement", "E. None of these"],
          answer: 2
        },
        {
          text: "The letter 'H' has rotational symmetry of what order?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 6"],
          answer: 1
        },
        {
          text: "A regular hexagon has rotational symmetry of what order?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 6", "E. 12"],
          answer: 3
        },
        {
          text: "A point at (2, 3) is translated by (+4, −2). What are the new coordinates?",
          choices: ["A. (4, 5)", "B. (6, 1)", "C. (6, 5)", "D. (4, 1)", "E. (2, 1)"],
          answer: 1
        },
        {
          text: "How many lines of symmetry does the number 8 have?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 4", "E. 8"],
          answer: 2
        },
        {
          text: "A 4×4 checkerboard has its top-left corner white. What colour is the diagonally opposite (bottom-right) corner?",
          choices: ["A. Black", "B. White", "C. Could be either", "D. Neither", "E. Depends on the board"],
          answer: 0
        },
        {
          text: "Beads repeat in a pattern: red, red, gold, blue, blue, blue, gold (period = 7). What colour is the 15th bead?",
          choices: ["A. Red", "B. Gold", "C. Blue", "D. White", "E. Green"],
          answer: 0
        },
        {
          text: "A pattern repeats: red, blue, green, yellow (period = 4). What colour is the 25th item?",
          choices: ["A. Red", "B. Blue", "C. Green", "D. Yellow", "E. White"],
          answer: 0
        },
        {
          text: "A figure is reflected in a horizontal mirror line. Which of the following changes?",
          choices: ["A. Size", "B. Shape", "C. Area", "D. Vertical orientation", "E. Perimeter"],
          answer: 3
        },
        {
          text: "A regular pentagon has how many lines of symmetry?",
          choices: ["A. 1", "B. 3", "C. 5", "D. 7", "E. 10"],
          answer: 2
        },
        {
          text: "A pattern repeats: star, circle, circle (period = 3). What is the 22nd shape?",
          choices: ["A. Star", "B. Circle", "C. Triangle", "D. Square", "E. Diamond"],
          answer: 0
        },
        {
          text: "How many lines of symmetry does the letter 'A' have?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 4"],
          answer: 1
        },
        {
          text: "A shape is rotated 90° clockwise four times. Where does it end up?",
          choices: ["A. 90° clockwise from start", "B. 180° from start", "C. 270° from start", "D. Back at the start", "E. Reflected"],
          answer: 3
        },
        {
          text: "Tiles repeat: orange, orange, purple (period = 3). What colour is the 31st tile?",
          choices: ["A. Orange", "B. Purple", "C. Blue", "D. Green", "E. Red"],
          answer: 0
        },
        {
          text: "A point at (5, 2) is reflected in the y-axis. What are the new coordinates?",
          choices: ["A. (5, -2)", "B. (-5, -2)", "C. (2, 5)", "D. (-5, 2)", "E. (-2, 5)"],
          answer: 3
        },
        {
          text: "A pattern repeats every 4: red, blue, green, yellow. What colour is the 19th item?",
          choices: ["A. Red", "B. Blue", "C. Green", "D. Yellow", "E. Orange"],
          answer: 2
        },
        {
          text: "The letter 'C' has how many lines of symmetry?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 4"],
          answer: 1
        }
      ]
    },

    "2.5": {
      title: "2.5 Tiling & Grid Problems",
      questions: [
        {
          text: "A floor is 12 m long and 8 m wide. Square tiles of side 2 m are used. How many tiles are needed?",
          choices: ["A. 20", "B. 22", "C. 24", "D. 26", "E. 28"],
          answer: 2
        },
        {
          text: "A rectangle of area 36 cm² is tiled with 1 cm × 2 cm tiles. How many tiles are needed?",
          choices: ["A. 12", "B. 16", "C. 18", "D. 20", "E. 24"],
          answer: 2
        },
        {
          text: "A 4×4 grid has how many squares of all sizes (1×1, 2×2, 3×3, 4×4)?",
          choices: ["A. 16", "B. 20", "C. 25", "D. 30", "E. 36"],
          answer: 3
        },
        {
          text: "A chessboard pattern has alternating black and white squares in a 6×6 grid. How many black squares are there?",
          choices: ["A. 16", "B. 18", "C. 20", "D. 22", "E. 24"],
          answer: 1
        },
        {
          text: "An L-shaped tromino (3 squares in an L) is used to tile a 2×3 rectangle. How many trominoes are needed?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. Cannot be done"],
          answer: 1
        },
        {
          text: "A room 6 m × 4 m is tiled with square tiles of side 50 cm. How many tiles are needed?",
          choices: ["A. 48", "B. 72", "C. 96", "D. 120", "E. 144"],
          answer: 2
        },
        {
          text: "How many 1×2 dominoes are needed to tile a 4×6 grid?",
          choices: ["A. 8", "B. 10", "C. 12", "D. 14", "E. 16"],
          answer: 2
        },
        {
          text: "How many 2×2 squares fit in a 5×5 grid (non-overlapping positions)?",
          choices: ["A. 4", "B. 9", "C. 16", "D. 25", "E. 36"],
          answer: 2
        },
        {
          text: "A 6×6 chessboard has the top-left square white. How many white squares are there?",
          choices: ["A. 16", "B. 17", "C. 18", "D. 20", "E. 22"],
          answer: 2
        },
        {
          text: "How many 1×3 tiles are needed to tile a 3×6 rectangle?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 9", "E. 18"],
          answer: 2
        },
        {
          text: "How many 3×3 squares can be found in a 10×10 grid (counting all positions)?",
          choices: ["A. 36", "B. 49", "C. 64", "D. 81", "E. 100"],
          answer: 2
        },
        {
          text: "How many rectangles (of any size) are in a 4×4 grid?",
          choices: ["A. 16", "B. 36", "C. 64", "D. 100", "E. 120"],
          answer: 3
        },
        {
          text: "A 5×5 chessboard has white corners. How many black squares are there?",
          choices: ["A. 10", "B. 11", "C. 12", "D. 13", "E. 14"],
          answer: 2
        },
        {
          text: "How many rectangles (of any size) are in a 2×3 grid?",
          choices: ["A. 6", "B. 12", "C. 18", "D. 24", "E. 36"],
          answer: 2
        },
        {
          text: "A floor is 5 m × 4 m and is tiled with 25 cm × 25 cm tiles. How many tiles are needed?",
          choices: ["A. 160", "B. 240", "C. 320", "D. 400", "E. 480"],
          answer: 2
        },
        {
          text: "An 8×8 chessboard has alternating black and white squares. How many black squares are there?",
          choices: ["A. 24", "B. 28", "C. 32", "D. 36", "E. 40"],
          answer: 2
        },
        {
          text: "A floor 3 m × 2 m is tiled with 30 cm × 20 cm tiles. How many tiles are needed?",
          choices: ["A. 50", "B. 75", "C. 100", "D. 120", "E. 150"],
          answer: 2
        },
        {
          text: "How many 1×4 tiles are needed to tile a 4×5 rectangle?",
          choices: ["A. 4", "B. 5", "C. 8", "D. 10", "E. 20"],
          answer: 1
        },
        {
          text: "How many squares of ALL sizes are in a 3×3 grid?",
          choices: ["A. 9", "B. 12", "C. 14", "D. 16", "E. 18"],
          answer: 2
        },
        {
          text: "How many cells are on the border of a 6×4 grid?",
          choices: ["A. 12", "B. 14", "C. 16", "D. 18", "E. 20"],
          answer: 3
        },
        {
          text: "Can a 3×3 grid be tiled perfectly with 1×2 dominoes?",
          choices: ["A. Yes, 4 dominoes", "B. No, because 9 is odd", "C. Yes, 5 dominoes", "D. Yes, 3 dominoes", "E. No, they are too big"],
          answer: 1
        },
        {
          text: "A room 8 m × 6 m is tiled with square tiles of side 2 m. How many tiles are needed?",
          choices: ["A. 8", "B. 10", "C. 12", "D. 14", "E. 16"],
          answer: 2
        },
        {
          text: "How many horizontal 1×4 rectangles are there in a 4×4 grid?",
          choices: ["A. 4", "B. 8", "C. 12", "D. 16", "E. 20"],
          answer: 0
        },
        {
          text: "How many squares of ALL sizes are in a 2×4 grid?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 11", "E. 12"],
          answer: 3
        },
        {
          text: "The main diagonal of a 5×5 grid passes through how many cells?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 9"],
          answer: 1
        },
        {
          text: "A 4×8 rectangle is divided into non-overlapping 2×2 squares. How many 2×2 squares are there?",
          choices: ["A. 4", "B. 6", "C. 8", "D. 10", "E. 16"],
          answer: 2
        },
        {
          text: "A 10×10 grid is coloured alternating black and white. How many black tiles are there?",
          choices: ["A. 25", "B. 40", "C. 50", "D. 60", "E. 100"],
          answer: 2
        },
        {
          text: "How many 1×3 tiles are needed to tile a 3×5 rectangle?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 15"],
          answer: 2
        },
        {
          text: "Both diagonals are drawn inside a rectangle. How many triangles are formed?",
          choices: ["A. 4", "B. 6", "C. 8", "D. 2", "E. 3"],
          answer: 0
        },
        {
          text: "How many non-overlapping 2×2 squares fit in a 4×6 grid?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 8", "E. 12"],
          answer: 2
        },
        {
          text: "A 5×5 grid has a 1-cell wide black border all around. How many black cells are in the border?",
          choices: ["A. 12", "B. 14", "C. 16", "D. 18", "E. 20"],
          answer: 2
        },
        {
          text: "How many non-square rectangles can be found in a 2×2 grid?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "A border path of 1 cm × 1 cm tiles surrounds a 4 cm × 3 cm area (one layer around the outside). How many border tiles are there?",
          choices: ["A. 14", "B. 16", "C. 18", "D. 20", "E. 22"],
          answer: 2
        },
        {
          text: "A 3×6 grid is tiled with 2×3 tiles. How many tiles are needed?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 6", "E. 9"],
          answer: 1
        },
        {
          text: "A wall 3 m × 4 m is tiled with tiles of 30 cm × 40 cm. How many tiles are needed?",
          choices: ["A. 50", "B. 75", "C. 100", "D. 120", "E. 150"],
          answer: 2
        },
        {
          text: "In how many ways can 1 blue tile and 3 red tiles be arranged in a row of 4 tiles?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 6", "E. 8"],
          answer: 2
        },
        {
          text: "A 7×7 grid has a border of cells all around. How many cells are NOT on the border (interior cells)?",
          choices: ["A. 16", "B. 20", "C. 25", "D. 30", "E. 36"],
          answer: 2
        },
        {
          text: "Square tiles 10 cm × 10 cm are arranged in a 5 row × 4 column pattern. What is the total area covered?",
          choices: ["A. 1000 cm²", "B. 1500 cm²", "C. 2000 cm²", "D. 2500 cm²", "E. 3000 cm²"],
          answer: 2
        },
        {
          text: "A rectangle 6 cm × 2 cm is divided into 12 equal small squares. What is the side length of each small square?",
          choices: ["A. 2 cm", "B. 1 cm", "C. 0.5 cm", "D. 3 cm", "E. 4 cm"],
          answer: 1
        },
        {
          text: "In a 5×5 grid of dots (25 dots in a 5×5 arrangement), how many horizontal line segments connect adjacent dots?",
          choices: ["A. 16", "B. 18", "C. 20", "D. 24", "E. 25"],
          answer: 2
        },
        {
          text: "What is the magic sum of a standard 3×3 magic square using numbers 1 to 9?",
          choices: ["A. 12", "B. 13", "C. 14", "D. 15", "E. 18"],
          answer: 3
        },
        {
          text: "How many L-trominoes (each covering 3 squares) are needed to tile a 4×3 rectangle?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. Cannot be done"],
          answer: 1
        },
        {
          text: "In a 10×10 grid, every 3rd cell along each row is coloured red, starting from the 3rd cell. How many red cells are in one row?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 1
        },
        {
          text: "A 6×6 grid has how many 2×2 squares (counting all positions, including overlapping)?",
          choices: ["A. 9", "B. 16", "C. 25", "D. 36", "E. 49"],
          answer: 2
        },
        {
          text: "A 3×3 grid has how many rectangles of any size in total?",
          choices: ["A. 18", "B. 24", "C. 36", "D. 48", "E. 54"],
          answer: 2
        },
        {
          text: "How many 1×2 dominoes are needed to cover a 6×4 grid?",
          choices: ["A. 8", "B. 10", "C. 12", "D. 16", "E. 24"],
          answer: 3
        },
        {
          text: "A 5×5 grid has squares of size 1×1, 2×2, 3×3, 4×4, 5×5. How many 1×1 squares are there?",
          choices: ["A. 4", "B. 9", "C. 16", "D. 25", "E. 36"],
          answer: 3
        },
        {
          text: "A rectangular floor 4 m × 3 m is tiled with 1 m × 1 m tiles. How many tiles touch the border (outer edge)?",
          choices: ["A. 10", "B. 12", "C. 14", "D. 16", "E. 18"],
          answer: 0
        },
        {
          text: "How many squares of all sizes are in a 2×2 grid?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 1
        },
        {
          text: "A floor 10 m × 8 m is tiled with 2 m × 2 m tiles. How many tiles are needed?",
          choices: ["A. 16", "B. 18", "C. 20", "D. 22", "E. 24"],
          answer: 2
        }
      ]
    },

    "3.1": {
      title: "3.1 Logical Deduction",
      questions: [
        {
          text: "Anna, Beth, and Cara are in a race. Anna finishes before Beth. Beth finishes before Cara. Who finishes last?",
          choices: ["A. Anna", "B. Beth", "C. Cara", "D. Tie between Beth and Cara", "E. Cannot be determined"],
          answer: 2
        },
        {
          text: "All bloops are razzles. All razzles are lazzles. Are all bloops lazzles?",
          choices: ["A. Yes, definitely", "B. No, definitely not", "C. Maybe", "D. Only if they are razzles", "E. Impossible to say"],
          answer: 0
        },
        {
          text: "In a class, every student who passed Maths also passed English. Tom passed English. Did Tom pass Maths?",
          choices: ["A. Yes", "B. No", "C. Cannot be determined", "D. Only if he studied", "E. Impossible to say"],
          answer: 2
        },
        {
          text: "Five friends sit in a row. Ali is next to Ben. Ben is next to Cara. Cara is at one end. Where can Ali sit?",
          choices: ["A. Only position 1", "B. Only position 2", "C. Only position 3", "D. Positions 2 or 4", "E. Any position"],
          answer: 2
        },
        {
          text: "A number is greater than 10 and less than 20. It is odd and divisible by 3. What is the number?",
          choices: ["A. 11", "B. 13", "C. 15", "D. 17", "E. 19"],
          answer: 2
        },
        {
          text: "Red box contains only apples. Blue box contains only oranges. Green box contains apples and oranges. All labels are wrong. Which box has only apples?",
          choices: ["A. The red box", "B. The blue box", "C. The green box", "D. Cannot be determined", "E. None of them"],
          answer: 1
        },
        {
          text: "Tom is taller than Sam. Sam is taller than Luis. Max is shorter than Luis. Who is the tallest?",
          choices: ["A. Sam", "B. Luis", "C. Max", "D. Tom", "E. Cannot be determined"],
          answer: 3
        },
        {
          text: "Only one of these statements is true: (1) All cats are black. (2) Some cats are black. (3) No cats are black. Which statement must be true if there are cats of different colours?",
          choices: ["A. Statement 1", "B. Statement 2", "C. Statement 3", "D. Statements 1 and 2", "E. None of them"],
          answer: 1
        },
        {
          text: "Alice, Bob, and Carol each have a pet: a dog, a cat, or a bird. Alice does not have a dog. Bob does not have a cat. Carol has a bird. What does Alice have?",
          choices: ["A. Dog", "B. Cat", "C. Bird", "D. Fish", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "There are 4 cards face down. Exactly one card is red. You flip the first card and it is blue. What is the chance the second card is red?",
          choices: ["A. 1 in 4", "B. 1 in 3", "C. 1 in 2", "D. 2 in 3", "E. 3 in 4"],
          answer: 1
        },
        {
          text: "Kim says 'I always lie.' Is Kim lying or telling the truth?",
          choices: ["A. Lying", "B. Telling the truth", "C. Both lying and telling the truth", "D. Neither", "E. It is impossible to decide"],
          answer: 4
        },
        {
          text: "Five students line up by height, shortest to tallest. Mia is 3rd. Jake is taller than Mia. Sara is shorter than Mia. Lena is shorter than Sara. Who is 2nd in line?",
          choices: ["A. Jake", "B. Mia", "C. Sara", "D. Lena", "E. Cannot be determined"],
          answer: 2
        },
        {
          text: "Every pupil in class 3A plays at least one sport. 12 play football, 9 play tennis, and 5 play both. How many pupils are in class 3A?",
          choices: ["A. 14", "B. 16", "C. 18", "D. 20", "E. 26"],
          answer: 1
        },
        {
          text: "Dan is older than Ella. Ella is older than Finn. Finn is older than Grace. Who is youngest?",
          choices: ["A. Dan", "B. Ella", "C. Finn", "D. Grace", "E. Cannot be determined"],
          answer: 3
        },
        {
          text: "Three boxes are labeled 'Pens', 'Pencils', and 'Pens & Pencils'. All labels are wrong. You pull a pen from the box labeled 'Pens & Pencils'. What does that box actually contain?",
          choices: ["A. Only pencils", "B. Only pens", "C. Pens and pencils", "D. Nothing", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "A bag has red and blue marbles. If you pick one without looking, you always get red. How many blue marbles are in the bag?",
          choices: ["A. 0", "B. 1", "C. 2", "D. At least 1", "E. Cannot be determined"],
          answer: 0
        },
        {
          text: "Lily scored higher than Mia on the test. Mia scored higher than Noah. Zoe scored lower than Noah. From highest to lowest, what is the order of Lily and Zoe?",
          choices: ["A. Zoe, then Lily", "B. Lily, then Zoe", "C. They are tied", "D. Lily is higher, but Zoe's position is unknown", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "There are 3 houses: yellow, blue, and red. The dog lives next to the blue house. The cat lives in the red house. The fish does not live in the yellow house. Where does the fish live?",
          choices: ["A. Yellow house", "B. Blue house", "C. Red house", "D. All three houses", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "Four children — Ann, Ben, Cal, and Dee — each like a different fruit: apple, banana, cherry, date. Ann likes banana. Ben does not like cherry. Cal likes apple. What does Ben like?",
          choices: ["A. Apple", "B. Banana", "C. Cherry", "D. Date", "E. Cannot be determined"],
          answer: 3
        },
        {
          text: "In a queue, Pia is in front of Quentin. Rita is behind Quentin. Sam is in front of Pia. Who is at the very front?",
          choices: ["A. Pia", "B. Quentin", "C. Rita", "D. Sam", "E. Cannot be determined"],
          answer: 3
        },
        {
          text: "All squares are rectangles. Shape X is a square. Is shape X a rectangle?",
          choices: ["A. Yes, definitely", "B. No", "C. Only if it has right angles", "D. Only if all sides are equal", "E. Cannot be determined"],
          answer: 0
        },
        {
          text: "A farmer has cows and chickens. He counts 20 heads and 56 legs. How many cows does he have?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "Three friends each choose a different number from 1, 2, 3. Alex chooses more than Ben. Ben chooses more than 1. What does Alex choose?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 1 or 2", "E. Cannot be determined"],
          answer: 2
        },
        {
          text: "In a small village, everyone who bakes also gardens. Tina gardens. Does Tina bake?",
          choices: ["A. Yes", "B. No", "C. Cannot be determined", "D. Only if she has an oven", "E. Impossible to say"],
          answer: 2
        },
        {
          text: "Five books are on a shelf in order. The red book is between the blue and green books. The yellow book is to the right of all others. The purple book is to the left of all others. What is the order from left to right?",
          choices: ["A. Purple, blue, red, green, yellow", "B. Purple, green, red, blue, yellow", "C. Purple, blue, red, green, yellow OR purple, green, red, blue, yellow", "D. Yellow, green, red, blue, purple", "E. Cannot be determined"],
          answer: 2
        },
        {
          text: "Max has more stickers than Leo. Leo has fewer stickers than Kim. Kim has fewer stickers than Max. Who has the most?",
          choices: ["A. Leo", "B. Kim", "C. Max", "D. Leo and Kim are tied", "E. Cannot be determined"],
          answer: 2
        },
        {
          text: "A mystery number is between 30 and 40. It is even and a multiple of 7. What is the number?",
          choices: ["A. 32", "B. 34", "C. 35", "D. 36", "E. None — no such number exists"],
          answer: 4
        },
        {
          text: "In a village, every person with a cat also has a dog. Rosa has a dog. Does Rosa have a cat?",
          choices: ["A. Yes", "B. No", "C. Cannot be determined", "D. Only if she lives alone", "E. Impossible to say"],
          answer: 2
        },
        {
          text: "Four cards show the letters A, B, C, D. Exactly one card is upside-down. The A card is not upside-down. The B card is not upside-down. The D card is upside-down. Which card is upside-down?",
          choices: ["A. A", "B. B", "C. C", "D. D", "E. Cannot be determined"],
          answer: 3
        },
        {
          text: "In a tournament, Team X beat Team Y. Team Z beat Team X. Team W beat Team Z. Which team lost the most games?",
          choices: ["A. Team X", "B. Team Y", "C. Team Z", "D. Team W", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "Ava, Ben, and Cole are wearing shirts that are red, blue, and green in some order. Ava is not wearing red. Ben is wearing blue. What colour is Cole wearing?",
          choices: ["A. Red", "B. Blue", "C. Green", "D. Red or Green", "E. Cannot be determined"],
          answer: 0
        },
        {
          text: "Exactly two of these statements are true: (1) 2 + 2 = 4. (2) 3 × 3 = 8. (3) 10 − 5 = 5. (4) 7 + 1 = 9. Which two are true?",
          choices: ["A. 1 and 2", "B. 1 and 3", "C. 2 and 3", "D. 3 and 4", "E. 1 and 4"],
          answer: 1
        },
        {
          text: "Three sisters — Amy, Bea, Cleo — each wear a different hat: tall, round, flat. Amy does not wear the tall hat. Bea wears the round hat. What does Amy wear?",
          choices: ["A. Tall", "B. Round", "C. Flat", "D. No hat", "E. Cannot be determined"],
          answer: 2
        },
        {
          text: "A secret message uses a code where A=1, B=2, C=3, ... The code for 'CAT' adds up to 3+1+20 = 24. What does the code for 'DOG' add up to?",
          choices: ["A. 24", "B. 26", "C. 28", "D. 30", "E. 32"],
          answer: 2
        },
        {
          text: "There are 5 lockers in a row numbered 1–5. Locker 3 is next to Locker 2 and Locker 4. Sam's locker is not at either end. Sam is not in locker 3. Which lockers could Sam be in?",
          choices: ["A. 1 or 5", "B. 2 or 4", "C. 3 only", "D. 2, 3, or 4", "E. Any locker"],
          answer: 1
        },
        {
          text: "Every even number is divisible by 2. 28 is even. Which conclusion is correct?",
          choices: ["A. 28 is divisible by 4", "B. 28 is divisible by 2", "C. 28 is odd", "D. 28 is prime", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "On a shelf, the dictionary is to the left of the atlas. The atlas is to the left of the novel. The cookbook is to the right of the novel. Which book is second from the right?",
          choices: ["A. Dictionary", "B. Atlas", "C. Novel", "D. Cookbook", "E. Cannot be determined"],
          answer: 2
        },
        {
          text: "In a race of 6 runners, Emma finishes 2nd. Fran finishes just ahead of Emma. Gary finishes last. In what position does Fran finish?",
          choices: ["A. 1st", "B. 2nd", "C. 3rd", "D. 4th", "E. 5th"],
          answer: 0
        },
        {
          text: "A teacher gives stickers for correct answers. Jade gets more stickers than Karl. Karl gets the same number as Lisa. Moe gets fewer stickers than Lisa. Who gets the fewest stickers?",
          choices: ["A. Jade", "B. Karl", "C. Lisa", "D. Moe", "E. Karl and Lisa tied for fewest"],
          answer: 3
        },
        {
          text: "All triangles have 3 sides. Shape P has 4 sides. Is Shape P a triangle?",
          choices: ["A. Yes", "B. No", "C. Maybe", "D. Only if all sides are equal", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "A mystery number is odd, greater than 20, less than 30, and the sum of its digits is 8. What is the number?",
          choices: ["A. 21", "B. 23", "C. 25", "D. 27", "E. 29"],
          answer: 1
        },
        {
          text: "At a party, each child shakes hands with every other child exactly once. There are 4 children. How many handshakes happen in total?",
          choices: ["A. 4", "B. 6", "C. 8", "D. 10", "E. 12"],
          answer: 1
        },
        {
          text: "Three switches control three lights. Switch 1 is for Light A or B. Switch 2 is for Light B or C. Switch 1 turns on Light A. Which light does Switch 2 control?",
          choices: ["A. Light A", "B. Light B", "C. Light C", "D. Light B or C", "E. Cannot be determined"],
          answer: 2
        },
        {
          text: "A box contains only red and blue pens. There are 3 times as many red pens as blue pens. If there are 12 pens in total, how many are blue?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 6", "E. 9"],
          answer: 1
        },
        {
          text: "There are 10 chairs. Every chair is either wooden or plastic. 6 are wooden. How many are plastic?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "Four people — W, X, Y, Z — sit at a round table. W sits next to X. Y sits opposite W. Who sits next to Y?",
          choices: ["A. W and X", "B. X and Z", "C. W and Z", "D. X and Y", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "A library has fiction and non-fiction books. Every science book is non-fiction. Jenny checked out a science book. Did Jenny check out a fiction book?",
          choices: ["A. Yes", "B. No", "C. Cannot be determined", "D. Only if there were no non-fiction books left", "E. Impossible to say"],
          answer: 1
        },
        {
          text: "Nick, Olga, and Pete each have a different score: 80, 85, 90. Nick's score is not the highest. Olga's score is higher than Pete's. What is Olga's score?",
          choices: ["A. 80", "B. 85", "C. 90", "D. 75", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "In a game, you win if you roll an even number on a die (1–6). You lose if you roll an odd number. You roll a 4. Do you win or lose?",
          choices: ["A. Win", "B. Lose", "C. Neither", "D. Roll again", "E. Cannot be determined"],
          answer: 0
        },
        {
          text: "Three children run around a track. After one full lap, Amy has run 400 m, Ben has run 200 m less than Amy, and Carol has run 50 m more than Ben. How far has Carol run?",
          choices: ["A. 200 m", "B. 250 m", "C. 300 m", "D. 350 m", "E. 400 m"],
          answer: 1
        }
      ]
    },

    "3.2": {
      title: "3.2 Set & Venn Diagram Problems",
      questions: [
        {
          text: "In a class of 30 students, 18 like football and 15 like basketball. 7 like both. How many like neither?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "Out of 25 students, 12 play piano, 10 play violin, and 4 play both. How many play neither?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "There are 40 animals: 25 are dogs, 20 are white, and 10 are white dogs. How many animals are neither dogs nor white?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "Every multiple of 6 is also a multiple of 2 and 3. Is 30 a multiple of 6?",
          choices: ["A. Yes, because 30 is even", "B. Yes, because 30 ÷ 6 = 5", "C. No", "D. Only if it is a multiple of 12", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "A survey of 50 people shows 30 like tea, 25 like coffee, and 10 like both. How many like tea but not coffee?",
          choices: ["A. 15", "B. 20", "C. 25", "D. 30", "E. 35"],
          answer: 1
        },
        {
          text: "In a group of 20 children, 12 have a dog and 9 have a cat. 4 have both. How many have neither a dog nor a cat?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "A class of 28 students: 15 like reading, 13 like drawing, and 6 like both. How many like reading but not drawing?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 3
        },
        {
          text: "In a box of 30 crayons, 18 are red or blue, and 10 are red. How many crayons are blue but not red?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "35 students: 20 play chess, 18 play checkers, 8 play both. How many play neither?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "In a class of 24, every student plays at least one sport. 14 play soccer and 16 play swimming. How many play both?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "A survey of 40 kids: 22 like vanilla ice cream, 18 like chocolate, and 7 like both. How many like neither?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "Out of 32 students: 20 have a pencil case, 25 have a ruler. Every student has at least one. How many have both?",
          choices: ["A. 11", "B. 12", "C. 13", "D. 14", "E. 15"],
          answer: 2
        },
        {
          text: "In a group of 45 people: 30 speak English, 20 speak French, and 10 speak both. How many speak English but not French?",
          choices: ["A. 15", "B. 20", "C. 25", "D. 30", "E. 35"],
          answer: 1
        },
        {
          text: "A class of 26 students: 14 like maths, 16 like science, 4 like neither. How many like both?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "50 people in a survey: 28 like apples, 35 like oranges. If everyone likes at least one fruit, how many like both?",
          choices: ["A. 11", "B. 12", "C. 13", "D. 14", "E. 15"],
          answer: 2
        },
        {
          text: "In a class of 20, 11 own a bike and 13 own a scooter. At least 1 student owns neither. What is the maximum number who own both?",
          choices: ["A. 9", "B. 10", "C. 11", "D. 12", "E. 13"],
          answer: 2
        },
        {
          text: "There are 18 fruits: some are apples (A), some are green (G). 10 are apples, 8 are green, 4 are green apples. How many fruits are neither apples nor green?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "In a class of 30 students, exactly 10 play only piano, 8 play only guitar, and 7 play both. How many play neither?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "A group has 15 boys and 12 girls. 6 boys and 4 girls wear glasses. How many children do NOT wear glasses?",
          choices: ["A. 15", "B. 16", "C. 17", "D. 18", "E. 19"],
          answer: 2
        },
        {
          text: "From 1 to 20, how many numbers are multiples of 2 OR multiples of 5?",
          choices: ["A. 12", "B. 13", "C. 14", "D. 15", "E. 16"],
          answer: 0
        },
        {
          text: "From 1 to 30, how many numbers are multiples of both 3 AND 5?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 1
        },
        {
          text: "In a class of 22, 15 like art and 13 like music. 3 like neither. How many like both?",
          choices: ["A. 7", "B. 8", "C. 9", "D. 10", "E. 11"],
          answer: 2
        },
        {
          text: "In a bag of 20 marbles: 8 are large, 9 are red, and 3 are large AND red. How many are neither large nor red?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "A class of 40 students: 25 take Spanish, 18 take French. 6 take both. How many take neither?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "In a club of 16 members: 9 like hiking, 10 like cycling, and every member likes at least one. How many like both?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "There are 50 questions in a test. Dan got 30 correct and 8 wrong. How many did he not attempt?",
          choices: ["A. 10", "B. 11", "C. 12", "D. 13", "E. 14"],
          answer: 2
        },
        {
          text: "In a group of 36 children: 20 like red, 18 like blue, 6 like both. How many like neither?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "A class of 25 students: 10 study French, 12 study German, 3 study both, and 6 study neither. Check: does 10+12−3+6 = 25?",
          choices: ["A. Yes, it equals 25", "B. No, it equals 24", "C. No, it equals 26", "D. No, it equals 27", "E. No, it equals 28"],
          answer: 0
        },
        {
          text: "From 1 to 10, how many numbers are odd AND greater than 5?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 1
        },
        {
          text: "A set of numbers from 1 to 20: Set A = multiples of 4, Set B = multiples of 6. How many numbers are in both Set A and Set B?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 0
        },
        {
          text: "In a class of 30 students, 20 have brown hair and 15 have blue eyes. If 5 students have neither, how many have both brown hair AND blue eyes?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 11", "E. 12"],
          answer: 2
        },
        {
          text: "From 1 to 30, how many numbers are multiples of 2 but NOT multiples of 4?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 1
        },
        {
          text: "In a group of 20 students: 8 play violin, 6 play piano, and 3 play both. How many play violin or piano (or both)?",
          choices: ["A. 9", "B. 10", "C. 11", "D. 12", "E. 14"],
          answer: 2
        },
        {
          text: "A library has 60 books. 35 are fiction, 30 are hardback, and 15 are both fiction and hardback. How many books are neither fiction nor hardback?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 11", "E. 12"],
          answer: 2
        },
        {
          text: "In a class of 20 students: 14 like dogs, 12 like cats, and 2 like neither. How many like both?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "From 1 to 15, how many numbers are multiples of 3 OR multiples of 5?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 1
        },
        {
          text: "A class of 27 students: 16 have a brother, 14 have a sister, 5 have neither. How many have both a brother and a sister?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "In a group of 50 people: 30 drink juice and 28 drink milk. 10 drink both. How many drink neither?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 4"],
          answer: 2
        },
        {
          text: "In a class of 35: 20 like swimming, 25 like cycling, and every student likes at least one. How many like both?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 11", "E. 12"],
          answer: 2
        },
        {
          text: "Set A = {1, 2, 3, 4, 5} and Set B = {3, 4, 5, 6, 7}. How many numbers are in both Set A and Set B?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "From numbers 1 to 20, how many are multiples of 3?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 1
        },
        {
          text: "A zoo has 50 animals. 30 are mammals, 20 can fly, and 5 are mammals that can fly. How many are neither mammals nor able to fly?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "In a class of 32 students: 18 study art, 20 study music, and every student studies at least one. How many study both?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "From 1 to 50, how many numbers are multiples of both 4 and 6?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 1
        },
        {
          text: "In a class of 24 students: 10 have a cat, 14 have a dog, and 4 have neither. How many have both?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "From 1 to 20, how many numbers are even AND less than 10?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 1
        },
        {
          text: "A class has 30 students. 13 like history, 17 like geography, and every student likes at least one. How many like both?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 4"],
          answer: 0
        },
        {
          text: "From 1 to 20, how many numbers are odd AND a multiple of 3?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 1
        },
        {
          text: "In a group of 28 students: 16 play video games, 18 read books, and 10 do both. How many do neither?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "A set contains the numbers 1–10. How many numbers in the set are divisible by 2 OR divisible by 3?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        }
      ]
    },

    "3.3": {
      title: "3.3 Pattern Recognition & Completion",
      questions: [
        {
          text: "What comes next in the pattern? AB, BC, CD, DE, ___",
          choices: ["A. EF", "B. FG", "C. EG", "D. DF", "E. DE"],
          answer: 0
        },
        {
          text: "A pattern of shapes repeats: circle, square, triangle, circle, square, triangle... What is the 14th shape?",
          choices: ["A. circle", "B. square", "C. triangle", "D. circle", "E. square"],
          answer: 1
        },
        {
          text: "A number grid: 1, 2, 4, 8, 16, ... What is the 8th term?",
          choices: ["A. 64", "B. 96", "C. 128", "D. 160", "E. 256"],
          answer: 2
        },
        {
          text: "In the pattern 1, 1, 2, 3, 5, 8, 13, ... what are the next two numbers?",
          choices: ["A. 18, 29", "B. 20, 33", "C. 21, 34", "D. 22, 35", "E. 23, 36"],
          answer: 2
        },
        {
          text: "Tiles are arranged so that each row has 2 more tiles than the one before. Row 1 has 3 tiles. How many tiles are in row 5?",
          choices: ["A. 9", "B. 10", "C. 11", "D. 12", "E. 13"],
          answer: 2
        },
        {
          text: "What is the next number in the sequence? 3, 6, 9, 12, 15, ___",
          choices: ["A. 16", "B. 17", "C. 18", "D. 19", "E. 20"],
          answer: 2
        },
        {
          text: "What comes next? 2, 5, 10, 17, 26, ___",
          choices: ["A. 35", "B. 37", "C. 38", "D. 40", "E. 37"],
          answer: 1
        },
        {
          text: "What is the next number? 100, 91, 82, 73, 64, ___",
          choices: ["A. 53", "B. 54", "C. 55", "D. 56", "E. 57"],
          answer: 2
        },
        {
          text: "What is the next number in the pattern? 1, 4, 9, 16, 25, ___",
          choices: ["A. 30", "B. 34", "C. 36", "D. 38", "E. 40"],
          answer: 2
        },
        {
          text: "A pattern goes: 2, 6, 18, 54, ... What is the next term?",
          choices: ["A. 108", "B. 144", "C. 162", "D. 180", "E. 216"],
          answer: 2
        },
        {
          text: "The sequence is: 1, 2, 4, 7, 11, 16, ... What is the next term?",
          choices: ["A. 20", "B. 21", "C. 22", "D. 23", "E. 24"],
          answer: 2
        },
        {
          text: "A calendar pattern: if January 1st is a Monday, what day is January 15th?",
          choices: ["A. Sunday", "B. Monday", "C. Tuesday", "D. Wednesday", "E. Thursday"],
          answer: 1
        },
        {
          text: "A clock shows 3:00. What time will it show after 100 minutes?",
          choices: ["A. 4:00", "B. 4:30", "C. 4:40", "D. 5:00", "E. 5:40"],
          answer: 2
        },
        {
          text: "Pattern: 5, 10, 20, 40, 80, ... What comes next?",
          choices: ["A. 100", "B. 120", "C. 140", "D. 160", "E. 180"],
          answer: 3
        },
        {
          text: "What is missing? 7, ___, 19, 25, 31",
          choices: ["A. 11", "B. 12", "C. 13", "D. 14", "E. 15"],
          answer: 2
        },
        {
          text: "The pattern increases by the next odd number each time: 0, 1, 4, 9, 16, ... What is the next term?",
          choices: ["A. 20", "B. 23", "C. 25", "D. 27", "E. 30"],
          answer: 2
        },
        {
          text: "A repeating colour pattern goes: red, red, blue, green, red, red, blue, green, ... What colour is the 19th in the pattern?",
          choices: ["A. red", "B. red", "C. blue", "D. green", "E. yellow"],
          answer: 0
        },
        {
          text: "Pattern: 81, 27, 9, 3, ... What is the next term?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 6"],
          answer: 1
        },
        {
          text: "What is missing in the sequence? 2, 3, 5, 8, 13, ___, 34",
          choices: ["A. 18", "B. 19", "C. 20", "D. 21", "E. 22"],
          answer: 3
        },
        {
          text: "A growing staircase: Step 1 uses 1 block, step 2 uses 3, step 3 uses 6, step 4 uses 10. How many blocks does step 5 use?",
          choices: ["A. 12", "B. 13", "C. 14", "D. 15", "E. 16"],
          answer: 3
        },
        {
          text: "Pattern: 10, 8, 11, 9, 12, 10, 13, ___, ___. What are the next two terms?",
          choices: ["A. 11, 14", "B. 12, 13", "C. 14, 11", "D. 13, 11", "E. 11, 15"],
          answer: 0
        },
        {
          text: "The number of seats in rows of a cinema: 10, 14, 18, 22, 26, ... How many seats are in the 8th row?",
          choices: ["A. 36", "B. 38", "C. 40", "D. 42", "E. 44"],
          answer: 1
        },
        {
          text: "Pattern: 1, 3, 6, 10, 15, 21, ... What is the next number?",
          choices: ["A. 25", "B. 27", "C. 28", "D. 30", "E. 32"],
          answer: 2
        },
        {
          text: "What is the 10th term if the pattern is: 4, 8, 12, 16, ... (multiples of 4)?",
          choices: ["A. 36", "B. 38", "C. 40", "D. 42", "E. 44"],
          answer: 2
        },
        {
          text: "The pattern is: 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, ... What is the 15th term?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 1
        },
        {
          text: "A clock starts at 12:00. It gains 5 minutes every hour. What time does it show after 6 real hours?",
          choices: ["A. 6:00", "B. 6:25", "C. 6:30", "D. 6:35", "E. 7:00"],
          answer: 2
        },
        {
          text: "What is the next term? 1000, 500, 250, 125, ___",
          choices: ["A. 50", "B. 60", "C. 62.5", "D. 63", "E. 65"],
          answer: 2
        },
        {
          text: "Pattern of letters: A, C, E, G, I, ... What is the 8th letter?",
          choices: ["A. M", "B. N", "C. O", "D. P", "E. Q"],
          answer: 2
        },
        {
          text: "A pattern: 2, 2, 4, 6, 10, 16, 26, ... (each term = sum of previous two). What is the next term?",
          choices: ["A. 40", "B. 42", "C. 44", "D. 46", "E. 48"],
          answer: 1
        },
        {
          text: "Dots arranged in an L-shape pattern: L1=2, L2=5, L3=8, L4=11. How many dots in L7?",
          choices: ["A. 18", "B. 19", "C. 20", "D. 21", "E. 22"],
          answer: 2
        },
        {
          text: "A number sequence: 3, 7, 15, 31, 63, ... What is the next term?",
          choices: ["A. 95", "B. 111", "C. 127", "D. 131", "E. 135"],
          answer: 2
        },
        {
          text: "Pattern: 1, 5, 25, 125, ... What is the 6th term?",
          choices: ["A. 500", "B. 625", "C. 750", "D. 3125", "E. 1250"],
          answer: 3
        },
        {
          text: "Days of the week pattern: Monday is Day 1. What day is Day 22?",
          choices: ["A. Monday", "B. Tuesday", "C. Wednesday", "D. Thursday", "E. Friday"],
          answer: 1
        },
        {
          text: "Pattern: 50, 48, 44, 38, 30, ... What is the next term?",
          choices: ["A. 18", "B. 19", "C. 20", "D. 22", "E. 24"],
          answer: 2
        },
        {
          text: "A sequence: 5, 15, 45, 135, ... What is the next term?",
          choices: ["A. 270", "B. 375", "C. 405", "D. 450", "E. 540"],
          answer: 2
        },
        {
          text: "What number is missing? 4, 9, ___, 25, 36",
          choices: ["A. 14", "B. 15", "C. 16", "D. 17", "E. 18"],
          answer: 2
        },
        {
          text: "A tiling pattern: row 1 has 1 tile, row 2 has 3, row 3 has 5. How many tiles are in row 9?",
          choices: ["A. 15", "B. 16", "C. 17", "D. 18", "E. 19"],
          answer: 2
        },
        {
          text: "Which letter is missing? B, D, F, ___, J, L",
          choices: ["A. G", "B. H", "C. I", "D. K", "E. M"],
          answer: 1
        },
        {
          text: "Pattern: 1, 2, 6, 24, 120, ... What is the next term?",
          choices: ["A. 480", "B. 600", "C. 720", "D. 840", "E. 960"],
          answer: 2
        },
        {
          text: "A sequence: 10, 7, 4, 1, ___, ___. What are the next two terms?",
          choices: ["A. −2, −5", "B. −1, −4", "C. 0, −3", "D. −2, −4", "E. −3, −6"],
          answer: 0
        },
        {
          text: "The pattern below shows the number of matchsticks needed for a row of squares: 1 square=4, 2 squares=7, 3 squares=10. How many matchsticks for 8 squares?",
          choices: ["A. 22", "B. 24", "C. 25", "D. 26", "E. 28"],
          answer: 2
        },
        {
          text: "Pattern: 2, 3, 5, 7, 11, 13, ... (prime numbers). What is the next prime number?",
          choices: ["A. 14", "B. 15", "C. 16", "D. 17", "E. 18"],
          answer: 3
        },
        {
          text: "A number pattern: each term is 3 more than twice the previous term. Starting with 1: 1, 5, 13, 29, ... What is the next term?",
          choices: ["A. 57", "B. 59", "C. 61", "D. 63", "E. 65"],
          answer: 2
        },
        {
          text: "In a pattern, stars are arranged: row 1 = 1 star, row 2 = 3 stars, row 3 = 6 stars, row 4 = 10 stars. How many stars total in the first 5 rows?",
          choices: ["A. 15", "B. 20", "C. 25", "D. 30", "E. 35"],
          answer: 3
        },
        {
          text: "Pattern: 1, 8, 27, 64, 125, ... (cubes). What is the next term?",
          choices: ["A. 196", "B. 210", "C. 216", "D. 225", "E. 243"],
          answer: 2
        },
        {
          text: "What is the 12th term of the sequence: 7, 14, 21, 28, ...?",
          choices: ["A. 77", "B. 82", "C. 84", "D. 88", "E. 91"],
          answer: 2
        },
        {
          text: "A sequence: 2, 4, 8, 16, 32, ... What is the sum of the first 5 terms?",
          choices: ["A. 56", "B. 60", "C. 62", "D. 64", "E. 66"],
          answer: 2
        },
        {
          text: "Pattern: 1, 2, 4, 8, 16, 32. Which is NOT in the sequence?",
          choices: ["A. 4", "B. 8", "C. 12", "D. 16", "E. 32"],
          answer: 2
        },
        {
          text: "The pattern 3, 6, 12, 24, 48 follows a rule. What is the rule?",
          choices: ["A. Add 3 each time", "B. Multiply by 3 each time", "C. Multiply by 2 each time", "D. Add 6 each time", "E. Add 12 each time"],
          answer: 2
        },
        {
          text: "A tiling staircase: step 1 = 1 tile, step 2 = 4 tiles, step 3 = 9 tiles. This follows n². How many tiles in step 7?",
          choices: ["A. 36", "B. 42", "C. 49", "D. 56", "E. 64"],
          answer: 2
        }
      ]
    },

    "3.4": {
      title: "3.4 Constraint Satisfaction",
      questions: [
        {
          text: "I am a 2-digit number. My digits add up to 9 and my tens digit is 3 more than my units digit. What am I?",
          choices: ["A. 36", "B. 45", "C. 54", "D. 63", "E. 72"],
          answer: 3
        },
        {
          text: "A 3-digit number uses the digits 1, 2, 3 exactly once. It is divisible by 3. Which of these is NOT a valid number?",
          choices: ["A. 123", "B. 132", "C. 213", "D. 231", "E. None — all are divisible by 3"],
          answer: 4
        },
        {
          text: "Four children each get a different coloured ball: red, blue, green, yellow. Ali does not want red. Beth does not want blue or green. Cara wants yellow. Which ball does Ali get?",
          choices: ["A. Red", "B. Blue", "C. Green", "D. Yellow", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "A box contains red, blue, and green cubes totalling 18. There are twice as many red as blue, and 2 fewer green than blue. How many green cubes are there?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "In a 3×3 magic square, each row, column, and diagonal sums to 15. If the centre is 5 and a corner is 2, what is the opposite corner?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "Alice, Bob, and Carol each choose a different colour from red, blue, and green. Alice does not like red. Bob likes blue. What colour does Carol choose?",
          choices: ["A. Red", "B. Blue", "C. Green", "D. Red or Green", "E. Cannot be determined"],
          answer: 0
        },
        {
          text: "Place the digits 1, 2, 3, 4, 5 in five boxes so each adjacent pair sums to an odd number. Which digit must go in the middle box?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "In a 4-square Latin square (1–4 in each row and column), the top row is 1, 2, 3, 4 and the left column is 1, 3, 2, 4. What number is in the 2nd row, 2nd column?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. Cannot be determined"],
          answer: 3
        },
        {
          text: "I am a 2-digit number. My tens digit is twice my units digit and I am greater than 50. What am I?",
          choices: ["A. 21", "B. 42", "C. 63", "D. 84", "E. 62"],
          answer: 3
        },
        {
          text: "Three friends — Dan, Eve, and Fay — each have a different number of marbles: 5, 10, 15. Eve has more than Fay. Dan has fewer than Fay. How many marbles does Eve have?",
          choices: ["A. 5", "B. 10", "C. 15", "D. 20", "E. Cannot be determined"],
          answer: 2
        },
        {
          text: "Four houses in a row are painted white, red, blue, and yellow. The red house is not at either end. The white house is next to the red house. The yellow house is at the right end. What colour is the leftmost house?",
          choices: ["A. White", "B. Red", "C. Blue", "D. Yellow", "E. Cannot be determined"],
          answer: 2
        },
        {
          text: "A schedule: Mia has classes on Monday, Wednesday, and Friday. Jake has classes on Tuesday and Thursday. Both have class on Saturday. On how many days does exactly one of them have class?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "Fill in the blank: ___ × 6 = 54",
          choices: ["A. 7", "B. 8", "C. 9", "D. 10", "E. 11"],
          answer: 2
        },
        {
          text: "A magic square has rows, columns, and diagonals summing to 12. The top row is 3, 5, 4. The middle of the left column is 7. What is the bottom-left number?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 1
        },
        {
          text: "Three numbers A, B, C satisfy: A + B = 10, B + C = 13, A + C = 9. What is A?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 1
        },
        {
          text: "Nia, Omar, and Pat each like a different sport: running, swimming, or cycling. Nia does not like running. Omar likes swimming. What does Nia like?",
          choices: ["A. Running", "B. Swimming", "C. Cycling", "D. Running or Cycling", "E. Cannot be determined"],
          answer: 2
        },
        {
          text: "A 2-digit number has a units digit that is 4 more than its tens digit. Which of the following is that number?",
          choices: ["A. 15", "B. 26", "C. 37", "D. 48", "E. 59"],
          answer: 0
        },
        {
          text: "Four children sit around a square table — one on each side. Ann sits across from Ben. Carol sits to Ann's right. Who sits across from Carol?",
          choices: ["A. Ann", "B. Ben", "C. Carol", "D. Dan", "E. Cannot be determined"],
          answer: 3
        },
        {
          text: "I am thinking of two numbers. Their sum is 20 and their difference is 6. What is the larger number?",
          choices: ["A. 11", "B. 12", "C. 13", "D. 14", "E. 15"],
          answer: 2
        },
        {
          text: "Five people stand in a circle. Each person shakes hands with their two neighbours. How many handshakes happen in total?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 8", "E. 10"],
          answer: 1
        },
        {
          text: "A dog is tied to the corner of a 4m × 4m square shed with a 5m rope. Which area can the dog reach?",
          choices: ["A. Only behind the shed", "B. In front and to both sides", "C. A full circle around the shed", "D. Three quarters of a circle", "E. Half a circle"],
          answer: 3
        },
        {
          text: "Fill in the grid: A 2×2 grid where each row and column uses 1 and 2 exactly once. If the top-left is 1, what is the bottom-right?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. Cannot be determined"],
          answer: 0
        },
        {
          text: "Three teams score points: Team A scores 3 times as many as Team C. Team B scores 5 more than Team C. Together they score 35. How many points does Team C score?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 1
        },
        {
          text: "A safe has a 3-digit code. All digits are different. The first digit is 3 more than the last. The middle digit is the sum of the other two. What is the code if the first digit is 7?",
          choices: ["A. 7, 11, 4", "B. 7, 4, 3", "C. 7, 11, 4 (invalid)", "D. 6, 10, 4 (invalid)", "E. Cannot be determined"],
          answer: 4
        },
        {
          text: "In a 3×3 magic square using digits 1–9, the magic sum is 15. The centre is always 5. What is the sum of all corner numbers?",
          choices: ["A. 16", "B. 18", "C. 20", "D. 22", "E. 24"],
          answer: 2
        },
        {
          text: "Max must visit cities A, B, C in one day. He visits A before B and B before C. He leaves from A. How many different orders are possible?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 6"],
          answer: 0
        },
        {
          text: "Two whole numbers multiply to 36 and add to 13. What are the two numbers?",
          choices: ["A. 4 and 9", "B. 3 and 12", "C. 6 and 6", "D. 2 and 18", "E. 1 and 36"],
          answer: 0
        },
        {
          text: "Three children have coins totalling 30 cents. Each child has a different amount and amounts are multiples of 5. No child has 0. What are the three amounts?",
          choices: ["A. 5, 10, 15", "B. 5, 10, 20", "C. 5, 10, 15 or 5, 10, 20", "D. 10, 10, 10", "E. Cannot be determined"],
          answer: 0
        },
        {
          text: "I am a number between 20 and 30. If you divide me by 4, the remainder is 1. If you divide me by 5, the remainder is 2. What number am I?",
          choices: ["A. 17", "B. 21", "C. 25", "D. 29", "E. No such number"],
          answer: 0
        },
        {
          text: "A fence is built with posts every 3 m. The fence is 24 m long and has posts at both ends. How many posts are there?",
          choices: ["A. 7", "B. 8", "C. 9", "D. 10", "E. 11"],
          answer: 2
        },
        {
          text: "Fill in: □ + □ = 10, □ × □ = 21. The two numbers are:",
          choices: ["A. 3 and 7", "B. 4 and 6", "C. 2 and 8", "D. 5 and 5", "E. 1 and 9"],
          answer: 0
        },
        {
          text: "A pizza is cut into 6 slices. Tom ate twice as many as Sara. Sara ate 1 more than Jack. Jack ate 1 slice. How many slices did Tom eat?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "Five students each pick a unique number from 1 to 5. Amy picks the smallest. Ben picks more than 3. Carl picks 3. What does Dan pick if he picks more than Amy but less than Carl?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 1
        },
        {
          text: "A number is divisible by 2, 3, and 5. It is between 50 and 100. What is the number?",
          choices: ["A. 60", "B. 70", "C. 80", "D. 90", "E. 60 and 90"],
          answer: 4
        },
        {
          text: "A 2-digit number is 4 times the sum of its digits. What is the number?",
          choices: ["A. 24", "B. 36", "C. 48", "D. 12", "E. 72"],
          answer: 0
        },
        {
          text: "Four friends sit in a row. Alex is not first or last. Ben sits immediately after Alex. Carol is last. Where does Dana sit?",
          choices: ["A. First", "B. Second", "C. Third", "D. Fourth", "E. Cannot be determined"],
          answer: 0
        },
        {
          text: "In a quiz, you gain 3 points for a correct answer and lose 1 point for a wrong answer. Sam scored 20 points after 10 questions. How many did he get right?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 1
        },
        {
          text: "A bag has red and blue balls. The ratio of red to blue is 2:3. There are 15 balls in total. How many are red?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "Two numbers sum to 50. One is 3 times the other. What is the smaller number?",
          choices: ["A. 10", "B. 12", "C. 12.5", "D. 13", "E. 15"],
          answer: 2
        },
        {
          text: "A pet shop has 3 types of pets: fish, birds, hamsters. Total = 24. Twice as many fish as birds. Same number of birds as hamsters. How many birds?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "A 3-digit number has all different digits. The hundreds digit is 3 times the units digit. The tens digit is 1 more than the units digit. The units digit is 2. What is the number?",
          choices: ["A. 632", "B. 623", "C. 362", "D. 263", "E. 326"],
          answer: 0
        },
        {
          text: "Arrange the numbers 1, 2, 3, 4 in a 2×2 grid so every row and column sums to the same value. What is that sum?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 1
        },
        {
          text: "Five students are assigned rooms numbered 1–5. No two adjacent rooms (differing by 1) can be given to students whose names start with the same letter. Alex(A) gets room 2. What room can Andy(A) NOT get?",
          choices: ["A. Room 1", "B. Room 2", "C. Room 3", "D. Room 4", "E. Room 5"],
          answer: 2
        },
        {
          text: "I am a 2-digit number. The product of my digits is 12, and my tens digit is larger than my units digit. What am I?",
          choices: ["A. 34", "B. 43", "C. 62", "D. 26", "E. 49"],
          answer: 1
        },
        {
          text: "Three children share 24 stickers. Ben gets twice as many as Amy. Carl gets half as many as Amy. How many stickers does Ben get?",
          choices: ["A. 12", "B. 14", "C. 16", "D. 18", "E. 20"],
          answer: 2
        },
        {
          text: "A 3-digit number uses digits 1, 2, 3 (each once). It is greater than 200 and its tens digit is the smallest. What is the number?",
          choices: ["A. 213", "B. 231", "C. 312", "D. 321", "E. 132"],
          answer: 0
        },
        {
          text: "A number is between 10 and 20. It is divisible by both 2 and 3. What is the number?",
          choices: ["A. 10", "B. 12", "C. 14", "D. 16", "E. 18"],
          answer: 1
        },
        {
          text: "Fill in: □ + □ = 15 and □ × □ = 54. What are the two numbers?",
          choices: ["A. 6 and 9", "B. 5 and 10", "C. 7 and 8", "D. 4 and 11", "E. 3 and 12"],
          answer: 0
        },
        {
          text: "Three dogs eat 3 bones in 3 minutes. How many bones do 9 dogs eat in 9 minutes?",
          choices: ["A. 9", "B. 18", "C. 27", "D. 36", "E. 81"],
          answer: 2
        },
        {
          text: "I am a 2-digit number. If you reverse my digits, you get a number 27 more than me. My tens digit is less than my units digit. What am I?",
          choices: ["A. 14", "B. 25", "C. 36", "D. 47", "E. 58"],
          answer: 2
        }
      ]
    },

    "4.1": {
      title: "4.1 Money & Shopping",
      questions: [
        {
          text: "A book costs 7 coins and a pen costs 3 coins. How much do 2 books and 2 pens cost?",
          choices: ["A. 16 coins", "B. 18 coins", "C. 20 coins", "D. 22 coins", "E. 24 coins"],
          answer: 2
        },
        {
          text: "Maria has 25 coins. She buys a ball for 9 coins and a hat for 7 coins. How much change does she get?",
          choices: ["A. 7 coins", "B. 8 coins", "C. 9 coins", "D. 10 coins", "E. 11 coins"],
          answer: 2
        },
        {
          text: "Apples cost 4 coins each. Tom has 30 coins. How many apples can he buy?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "3 pencils cost 12 coins. How much do 5 pencils cost?",
          choices: ["A. 16 coins", "B. 18 coins", "C. 20 coins", "D. 22 coins", "E. 24 coins"],
          answer: 2
        },
        {
          text: "A toy costs 15 coins. If you have two 10-coin pieces, how much change do you get?",
          choices: ["A. 3 coins", "B. 4 coins", "C. 5 coins", "D. 6 coins", "E. 7 coins"],
          answer: 2
        },
        {
          text: "Stickers cost 2 coins each. How many stickers can you buy with 18 coins?",
          choices: ["A. 7", "B. 8", "C. 9", "D. 10", "E. 11"],
          answer: 2
        },
        {
          text: "A bag of sweets costs 6 coins and a juice costs 4 coins. How much do 3 bags of sweets and 2 juices cost?",
          choices: ["A. 24 coins", "B. 25 coins", "C. 26 coins", "D. 27 coins", "E. 28 coins"],
          answer: 2
        },
        {
          text: "Two children share the cost of a 20-coin gift equally. How much does each child pay?",
          choices: ["A. 8 coins", "B. 9 coins", "C. 10 coins", "D. 11 coins", "E. 12 coins"],
          answer: 2
        },
        {
          text: "A shop sells oranges for 3 coins each. Ana buys 4 oranges and pays with a 20-coin note. How much change does she get?",
          choices: ["A. 6 coins", "B. 7 coins", "C. 8 coins", "D. 9 coins", "E. 10 coins"],
          answer: 2
        },
        {
          text: "4 chocolates cost 20 coins. How much does 1 chocolate cost?",
          choices: ["A. 3 coins", "B. 4 coins", "C. 5 coins", "D. 6 coins", "E. 7 coins"],
          answer: 2
        },
        {
          text: "A sandwich costs 8 coins and a drink costs 5 coins. How much do 2 sandwiches and 1 drink cost?",
          choices: ["A. 19 coins", "B. 20 coins", "C. 21 coins", "D. 22 coins", "E. 23 coins"],
          answer: 2
        },
        {
          text: "Zara has 50 coins. She spends 17 coins on a book and 13 coins on a pen. How many coins does she have left?",
          choices: ["A. 18 coins", "B. 19 coins", "C. 20 coins", "D. 21 coins", "E. 22 coins"],
          answer: 2
        },
        {
          text: "A toy car costs 9 coins. Ben has 5-coin pieces. What is the fewest 5-coin pieces he needs to buy the toy car?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 1
        },
        {
          text: "3 friends each buy a snack for 6 coins. How much do they spend altogether?",
          choices: ["A. 12 coins", "B. 15 coins", "C. 18 coins", "D. 21 coins", "E. 24 coins"],
          answer: 2
        },
        {
          text: "A notebook costs 12 coins. It goes on sale for 3 coins off. What is the sale price?",
          choices: ["A. 7 coins", "B. 8 coins", "C. 9 coins", "D. 10 coins", "E. 11 coins"],
          answer: 2
        },
        {
          text: "Bananas are sold in bunches of 5 for 10 coins. How many coins does 1 banana cost?",
          choices: ["A. 1 coin", "B. 2 coins", "C. 3 coins", "D. 4 coins", "E. 5 coins"],
          answer: 1
        },
        {
          text: "A shirt costs 25 coins and a cap costs 15 coins. Lucy has 35 coins. How much more money does she need to buy both?",
          choices: ["A. 3 coins", "B. 4 coins", "C. 5 coins", "D. 6 coins", "E. 7 coins"],
          answer: 2
        },
        {
          text: "Leo buys 6 erasers at 3 coins each. He pays with a 25-coin note. How much change does he get?",
          choices: ["A. 5 coins", "B. 6 coins", "C. 7 coins", "D. 8 coins", "E. 9 coins"],
          answer: 2
        },
        {
          text: "One apple costs 5 coins. How many apples can you buy with 40 coins?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "A pencil case costs 14 coins. Two friends split the cost equally. How much does each pay?",
          choices: ["A. 5 coins", "B. 6 coins", "C. 7 coins", "D. 8 coins", "E. 9 coins"],
          answer: 2
        },
        {
          text: "A shop sells 2 cookies for 6 coins. How many cookies can you get for 18 coins?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "Jack has 10-coin pieces and 5-coin pieces. He has 3 of each. How many coins does he have in total?",
          choices: ["A. 40 coins", "B. 42 coins", "C. 44 coins", "D. 45 coins", "E. 50 coins"],
          answer: 3
        },
        {
          text: "A magazine costs 7 coins. Mia buys 4 magazines. She pays with a 30-coin note. How much change does she get?",
          choices: ["A. 1 coin", "B. 2 coins", "C. 3 coins", "D. 4 coins", "E. 5 coins"],
          answer: 1
        },
        {
          text: "Three toy cars cost 21 coins. How much does one toy car cost?",
          choices: ["A. 5 coins", "B. 6 coins", "C. 7 coins", "D. 8 coins", "E. 9 coins"],
          answer: 2
        },
        {
          text: "A box of crayons costs 16 coins. If you have 2 coins more than the price, you would have 18 coins. How many coins do you have?",
          choices: ["A. 16 coins", "B. 17 coins", "C. 18 coins", "D. 19 coins", "E. 20 coins"],
          answer: 2
        },
        {
          text: "A juice costs 4 coins and a sandwich costs 9 coins. What is the total cost of 3 juices and 2 sandwiches?",
          choices: ["A. 28 coins", "B. 29 coins", "C. 30 coins", "D. 31 coins", "E. 32 coins"],
          answer: 2
        },
        {
          text: "A school shop sells rulers for 5 coins and compasses for 8 coins. How much do 3 rulers and 2 compasses cost?",
          choices: ["A. 29 coins", "B. 30 coins", "C. 31 coins", "D. 32 coins", "E. 33 coins"],
          answer: 2
        },
        {
          text: "Sam wants to buy a 20-coin toy. He has saved 13 coins. How many more coins does he need?",
          choices: ["A. 5 coins", "B. 6 coins", "C. 7 coins", "D. 8 coins", "E. 9 coins"],
          answer: 2
        },
        {
          text: "Grapes cost 12 coins per bag. Emma buys 2 bags. She pays with two 15-coin notes. How much change does she get?",
          choices: ["A. 4 coins", "B. 5 coins", "C. 6 coins", "D. 7 coins", "E. 8 coins"],
          answer: 2
        },
        {
          text: "Four children each contribute 5 coins to buy a present. How much do they collect in total?",
          choices: ["A. 15 coins", "B. 18 coins", "C. 20 coins", "D. 22 coins", "E. 25 coins"],
          answer: 2
        },
        {
          text: "A lollipop costs 3 coins. How many lollipops can you buy with 22 coins?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "Milk costs 5 coins per carton. If you buy 4 cartons, you get 1 free. How many cartons do you get for 20 coins?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 1
        },
        {
          text: "A hat is marked at 18 coins but is reduced by 6 coins. What is the reduced price?",
          choices: ["A. 10 coins", "B. 11 coins", "C. 12 coins", "D. 13 coins", "E. 14 coins"],
          answer: 2
        },
        {
          text: "Paul has 45 coins. He spends 12 coins on cards and 18 coins on a game. How many coins does he have left?",
          choices: ["A. 13 coins", "B. 14 coins", "C. 15 coins", "D. 16 coins", "E. 17 coins"],
          answer: 2
        },
        {
          text: "A bag of seeds costs 7 coins. A packet of soil costs 11 coins. What is the total cost of 2 bags of seeds and 1 packet of soil?",
          choices: ["A. 23 coins", "B. 24 coins", "C. 25 coins", "D. 26 coins", "E. 27 coins"],
          answer: 2
        },
        {
          text: "A shop sells oranges in packs of 4 for 12 coins. What is the price per orange?",
          choices: ["A. 2 coins", "B. 3 coins", "C. 4 coins", "D. 5 coins", "E. 6 coins"],
          answer: 1
        },
        {
          text: "Nina has two 10-coin pieces, three 5-coin pieces, and four 1-coin pieces. How many coins does she have in total?",
          choices: ["A. 37 coins", "B. 38 coins", "C. 39 coins", "D. 40 coins", "E. 41 coins"],
          answer: 2
        },
        {
          text: "A water bottle costs 9 coins. A snack costs 6 coins. How much do 2 water bottles and 3 snacks cost?",
          choices: ["A. 34 coins", "B. 35 coins", "C. 36 coins", "D. 37 coins", "E. 38 coins"],
          answer: 2
        },
        {
          text: "Five cakes cost 35 coins. How much do 3 cakes cost?",
          choices: ["A. 19 coins", "B. 20 coins", "C. 21 coins", "D. 22 coins", "E. 23 coins"],
          answer: 2
        },
        {
          text: "A packet of biscuits costs 8 coins. If you buy 3 packets, you save 4 coins compared to buying them one at a time. What is the total saving?",
          choices: ["A. 2 coins", "B. 3 coins", "C. 4 coins", "D. 5 coins", "E. 6 coins"],
          answer: 2
        },
        {
          text: "James has 60 coins. He spends half on a book. Then he spends 10 coins on a snack. How many coins does he have left?",
          choices: ["A. 18 coins", "B. 19 coins", "C. 20 coins", "D. 21 coins", "E. 22 coins"],
          answer: 2
        },
        {
          text: "A comic book costs 10 coins. Chris buys one and gives the shopkeeper a 50-coin note. How much change does Chris get?",
          choices: ["A. 35 coins", "B. 38 coins", "C. 40 coins", "D. 42 coins", "E. 45 coins"],
          answer: 2
        },
        {
          text: "A school fair sells 2 balloons for 5 coins. How many coins do 6 balloons cost?",
          choices: ["A. 12 coins", "B. 13 coins", "C. 14 coins", "D. 15 coins", "E. 16 coins"],
          answer: 3
        },
        {
          text: "Lily saves 6 coins every day. How many coins does she save in 2 weeks?",
          choices: ["A. 72 coins", "B. 78 coins", "C. 80 coins", "D. 84 coins", "E. 90 coins"],
          answer: 3
        },
        {
          text: "A cinema ticket costs 12 coins for children and 20 coins for adults. How much do 2 children and 1 adult pay in total?",
          choices: ["A. 40 coins", "B. 42 coins", "C. 44 coins", "D. 46 coins", "E. 48 coins"],
          answer: 2
        },
        {
          text: "Oranges cost 3 coins each. Marta has 25 coins. After buying as many oranges as possible, how many coins does she have left?",
          choices: ["A. 1 coin", "B. 2 coins", "C. 3 coins", "D. 4 coins", "E. 5 coins"],
          answer: 0
        },
        {
          text: "A bookshop sells pens for 4 coins each. Eva buys 8 pens and gets a discount of 5 coins off the total. How much does she pay?",
          choices: ["A. 25 coins", "B. 26 coins", "C. 27 coins", "D. 28 coins", "E. 29 coins"],
          answer: 2
        },
        {
          text: "Three friends split a restaurant bill of 36 coins equally. How much does each friend pay?",
          choices: ["A. 10 coins", "B. 11 coins", "C. 12 coins", "D. 13 coins", "E. 14 coins"],
          answer: 2
        },
        {
          text: "Pens are sold in a box of 10 for 30 coins. If sold individually they cost 4 coins each. How many coins do you save by buying the box?",
          choices: ["A. 8 coins", "B. 9 coins", "C. 10 coins", "D. 11 coins", "E. 12 coins"],
          answer: 2
        },
        {
          text: "A market sells 5 tomatoes for 10 coins. How many tomatoes can you buy for 24 coins?",
          choices: ["A. 10", "B. 11", "C. 12", "D. 13", "E. 14"],
          answer: 2
        }
      ]
    },

    "4.2": {
      title: "4.2 Distribution & Division",
      questions: [
        {
          text: "24 apples are shared equally among 6 children. How many apples does each child get?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "30 stickers are shared equally among 5 friends. How many stickers does each friend get?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "17 sweets are shared equally among 4 children. How many sweets are left over?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 4"],
          answer: 1
        },
        {
          text: "36 eggs are packed into boxes of 6. How many boxes are needed?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "48 pencils are put into bags of 8. How many bags are there?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "A pizza has 12 slices. It is shared equally among 4 children. How many slices does each child get?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 1
        },
        {
          text: "20 chocolates are shared among 3 children as equally as possible. How many chocolates are left over?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 4"],
          answer: 2
        },
        {
          text: "45 pupils are placed in equal groups of 9. How many groups are there?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "A bag has 50 marbles. If 7 marbles are given to each child, how many children can each get 7 marbles?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "32 cookies are placed on trays of 8. How many trays are used?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "A farmer has 63 eggs to pack into boxes of 9. How many full boxes can he fill?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "28 flowers are arranged in equal groups of 7. How many groups are there?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "There are 25 sweets. Each child gets 4 sweets. How many children get their sweets and how many are left?",
          choices: ["A. 5 children, 5 left", "B. 6 children, 1 left", "C. 6 children, 0 left", "D. 7 children, 3 left", "E. 5 children, 0 left"],
          answer: 1
        },
        {
          text: "54 books are shared equally among 9 shelves. How many books go on each shelf?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "A teacher has 40 stickers and gives 5 to each student. How many students get stickers?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "60 chairs are arranged in rows of 6. How many rows are there?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 11", "E. 12"],
          answer: 2
        },
        {
          text: "A box has 35 crayons. 5 children each take an equal share. How many crayons does each child get?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "21 sandwiches are divided equally into 3 lunchboxes. How many sandwiches go in each box?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "19 grapes are shared equally among 4 children. How many grapes does each child get?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 1
        },
        {
          text: "A bus can carry 8 passengers. How many buses are needed to carry 38 passengers?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "56 toy cars are packed into boxes of 7. How many boxes are used?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "A pack of 42 trading cards is shared equally among 6 friends. How many cards does each friend get?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "27 oranges are packed in bags of 3. How many bags are filled?",
          choices: ["A. 7", "B. 8", "C. 9", "D. 10", "E. 11"],
          answer: 2
        },
        {
          text: "A class of 30 children forms equal teams of 5. How many teams are there?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "33 stickers are shared among 4 children as equally as possible. How many stickers are left over?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 4"],
          answer: 1
        },
        {
          text: "50 beads are put into jars of 8. How many full jars are there?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "A garden has 72 plants arranged in 8 equal rows. How many plants are in each row?",
          choices: ["A. 7", "B. 8", "C. 9", "D. 10", "E. 11"],
          answer: 2
        },
        {
          text: "13 cookies are shared equally among 5 friends. How many are left over?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 0"],
          answer: 2
        },
        {
          text: "A roll of tape is 40 cm long. It is cut into equal pieces of 5 cm. How many pieces are there?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "Mum bakes 24 muffins and puts them equally into 6 bags. How many muffins go in each bag?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "35 children sit in equal rows of 7. How many rows are there?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "A library has 80 books equally on 8 shelves. How many books are on each shelf?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 11", "E. 12"],
          answer: 2
        },
        {
          text: "44 jelly beans are shared among 8 children. How many jelly beans does each child get and how many are left over?",
          choices: ["A. 5 each, 3 left", "B. 4 each, 4 left", "C. 5 each, 4 left", "D. 6 each, 2 left", "E. 4 each, 5 left"],
          answer: 0
        },
        {
          text: "A box holds 10 cans. How many boxes can be filled with 76 cans?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "18 toy animals are divided equally into 3 boxes. How many go in each box?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "A farmer collects 64 eggs. He puts them in trays of 8. How many trays does he use?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "55 grapes are shared among 9 children. How many grapes are left over?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 0
        },
        {
          text: "A pond has 42 fish split equally into 7 tanks. How many fish are in each tank?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "40 balloons are tied in bunches of 8. How many bunches are there?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "81 stickers are placed equally in 9 albums. How many stickers go in each album?",
          choices: ["A. 7", "B. 8", "C. 9", "D. 10", "E. 11"],
          answer: 2
        },
        {
          text: "A pack of 48 biscuits is shared among 6 children. How many biscuits does each child get?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "If 5 children share 43 grapes equally, how many grapes are left over?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "A ribbon is 60 cm long. It is cut into 10-cm pieces. How many pieces can be cut?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "72 flowers are arranged in equal vases of 9 flowers each. How many vases are used?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "A bag of 29 sweets is shared among 4 children. How many sweets does each child get?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "Mrs. Brown bakes 90 cookies. She puts them in boxes of 6. How many boxes does she fill?",
          choices: ["A. 13", "B. 14", "C. 15", "D. 16", "E. 17"],
          answer: 2
        },
        {
          text: "A bookcase has 7 shelves with 8 books each. How many books are there in total?",
          choices: ["A. 48", "B. 52", "C. 56", "D. 60", "E. 64"],
          answer: 2
        },
        {
          text: "26 children are split into groups of 4. How many full groups are there?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "A baker puts 8 rolls in each bag. How many bags are needed for 56 rolls?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "100 cups are stacked in groups of 10. How many stacks are there?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 11", "E. 12"],
          answer: 2
        },
      ]
    },

    "4.3": {
      title: "4.3 Counting & Combination",
      questions: [
        {
          text: "Anna has 3 different shirts and 2 different pairs of trousers. How many different outfits can she make?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "There are 4 children in a class. Each child shakes hands with every other child exactly once. How many handshakes are there?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "A ice-cream shop offers 3 flavours and 2 types of cones. How many different ice-creams can you order?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "Tom has 2 caps and 4 pairs of shoes. How many different cap-and-shoes combinations can he wear?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "Using the digits 1, 2, and 3 (each used once), how many different 3-digit numbers can be made?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 9"],
          answer: 3
        },
        {
          text: "5 friends each want to greet every other friend with a wave. How many waves happen in total?",
          choices: ["A. 5", "B. 8", "C. 10", "D. 12", "E. 15"],
          answer: 2
        },
        {
          text: "A coin is tossed and then a die (numbered 1–6) is rolled. How many different outcomes are possible?",
          choices: ["A. 6", "B. 8", "C. 10", "D. 12", "E. 14"],
          answer: 3
        },
        {
          text: "A menu has 2 soups, 3 main dishes, and 2 drinks. How many different meals (one of each) are possible?",
          choices: ["A. 7", "B. 10", "C. 12", "D. 14", "E. 16"],
          answer: 2
        },
        {
          text: "How many ways can you arrange the letters A, B, C in a row (each used once)?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 9"],
          answer: 3
        },
        {
          text: "In a group of 5 children, each writes a letter to every other child. How many letters are written in total?",
          choices: ["A. 10", "B. 15", "C. 20", "D. 25", "E. 30"],
          answer: 2
        },
        {
          text: "Mia has 4 colours of paint and 3 types of brushes. How many different colour-and-brush choices does she have?",
          choices: ["A. 7", "B. 8", "C. 10", "D. 12", "E. 14"],
          answer: 3
        },
        {
          text: "How many 2-digit numbers can be made using the digits 2, 4, and 6 if each digit may be used only once?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "There are 3 doors to a house and 2 windows. In how many ways can you enter through a door and exit through a window?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "A flag can have one of 4 background colours and one of 3 symbol colours. How many different flags are possible?",
          choices: ["A. 7", "B. 8", "C. 10", "D. 12", "E. 14"],
          answer: 3
        },
        {
          text: "3 children each want to sit in one of 3 seats in a row. How many ways can they be seated?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 9"],
          answer: 3
        },
        {
          text: "A bag has 1 red ball, 1 blue ball, and 1 green ball. How many ways can you choose 2 balls?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 1
        },
        {
          text: "A sandwich can be made with 1 of 4 breads and 1 of 3 fillings. How many different sandwiches are possible?",
          choices: ["A. 7", "B. 9", "C. 10", "D. 12", "E. 14"],
          answer: 3
        },
        {
          text: "How many ways can 2 children be chosen from a group of 5 to clean the board?",
          choices: ["A. 5", "B. 8", "C. 10", "D. 12", "E. 15"],
          answer: 2
        },
        {
          text: "A PIN code uses 2 different digits from {1, 2, 3, 4} in order. How many different PINs are possible?",
          choices: ["A. 8", "B. 10", "C. 12", "D. 14", "E. 16"],
          answer: 2
        },
        {
          text: "There are 3 roads from town A to town B, and 2 roads from town B to town C. How many different routes from A to C are there through B?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "A child picks 1 sticker from a set of 5 and 1 card from a set of 4. How many different sticker-card pairs can they pick?",
          choices: ["A. 9", "B. 16", "C. 20", "D. 24", "E. 25"],
          answer: 2
        },
        {
          text: "A pair of friends is chosen from 6 children. How many different pairs can be formed?",
          choices: ["A. 10", "B. 12", "C. 14", "D. 15", "E. 18"],
          answer: 3
        },
        {
          text: "Ben has 2 jackets and 3 hats. How many jacket-and-hat combinations can he wear?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "A shop sells T-shirts in 4 sizes and 5 colours. How many different T-shirts are available?",
          choices: ["A. 9", "B. 16", "C. 18", "D. 20", "E. 24"],
          answer: 3
        },
        {
          text: "How many pairs can be made from the numbers 1, 2, 3, 4 (order does not matter)?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "Each of 4 teams plays every other team once. How many games are played in total?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "Using the digits 0, 1, 2, how many different 2-digit numbers can be formed? (No leading zeros.)",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "A baker makes sandwiches with 3 types of bread and 4 types of spread. How many different sandwiches can be made?",
          choices: ["A. 7", "B. 9", "C. 10", "D. 12", "E. 14"],
          answer: 3
        },
        {
          text: "How many different 2-letter codes can be made from the letters {A, B, C, D} if the two letters must be different?",
          choices: ["A. 8", "B. 10", "C. 12", "D. 14", "E. 16"],
          answer: 2
        },
        {
          text: "A game spinner has the colours Red, Blue, and Green. If you spin it twice, how many different outcomes are possible?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 3
        },
        {
          text: "There are 3 paths from home to the park and 2 paths from the park to the shop. How many different routes go from home to the shop via the park?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "How many different 2-digit numbers can be made using the digits 3, 5, and 7, each used at most once?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "Each of 3 boys shakes hands with each of 4 girls. How many handshakes are there?",
          choices: ["A. 7", "B. 8", "C. 10", "D. 12", "E. 14"],
          answer: 3
        },
        {
          text: "In how many ways can you pick a first and second prize winner from 5 contestants (different people)?",
          choices: ["A. 10", "B. 15", "C. 20", "D. 25", "E. 30"],
          answer: 2
        },
        {
          text: "Zoe has 5 different books. She wants to pick 2 to take on a trip. How many different pairs can she pick?",
          choices: ["A. 5", "B. 8", "C. 10", "D. 12", "E. 15"],
          answer: 2
        },
        {
          text: "A lunch box has 1 main dish (from 4 options), 1 snack (from 3 options), and 1 drink (from 2 options). How many different lunch boxes are possible?",
          choices: ["A. 9", "B. 12", "C. 18", "D. 24", "E. 36"],
          answer: 3
        },
        {
          text: "How many 3-letter sequences can be made from A, B, C if each letter is used exactly once?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 9"],
          answer: 3
        },
        {
          text: "A child picks one red card from a set of 3 and one blue card from a set of 4. How many different pairs can they pick?",
          choices: ["A. 7", "B. 9", "C. 10", "D. 12", "E. 14"],
          answer: 3
        },
        {
          text: "6 children compete in a race. How many different ways can first, second, and third place be awarded?",
          choices: ["A. 60", "B. 90", "C. 120", "D. 180", "E. 216"],
          answer: 2
        },
        {
          text: "How many different outfits can be made from 4 tops, 3 bottoms, and 2 pairs of shoes?",
          choices: ["A. 9", "B. 14", "C. 18", "D. 24", "E. 36"],
          answer: 3
        },
        {
          text: "There are 5 children and 3 seats on a bench. How many ways can exactly 3 children sit on the bench in order?",
          choices: ["A. 15", "B. 30", "C. 45", "D. 60", "E. 120"],
          answer: 3
        },
        {
          text: "A code is made from a letter (A, B, C) followed by a digit (1–5). How many different codes are there?",
          choices: ["A. 8", "B. 12", "C. 15", "D. 18", "E. 20"],
          answer: 2
        },
        {
          text: "How many different ways can you arrange 4 books in a row on a shelf?",
          choices: ["A. 4", "B. 8", "C. 16", "D. 24", "E. 32"],
          answer: 3
        },
        {
          text: "A class of 10 students wants to elect a president and a secretary (different students). How many ways can this be done?",
          choices: ["A. 45", "B. 72", "C. 90", "D. 100", "E. 110"],
          answer: 2
        },
        {
          text: "There are 4 flavours of yoghurt and 3 types of toppings. If you choose one flavour and one topping, how many combinations are there?",
          choices: ["A. 7", "B. 9", "C. 10", "D. 12", "E. 14"],
          answer: 3
        },
        {
          text: "A dice is rolled twice. How many outcomes have different numbers on each roll?",
          choices: ["A. 24", "B. 28", "C. 30", "D. 32", "E. 36"],
          answer: 2
        },
        {
          text: "3 different toys are placed in a row. How many orders are possible?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 9"],
          answer: 3
        },
        {
          text: "A bicycle comes in 3 frame colours and 4 seat colours. How many different colour combinations are there?",
          choices: ["A. 7", "B. 9", "C. 10", "D. 12", "E. 14"],
          answer: 3
        },
        {
          text: "In how many ways can you choose 1 boy and 1 girl from a group of 3 boys and 4 girls?",
          choices: ["A. 7", "B. 10", "C. 12", "D. 14", "E. 16"],
          answer: 2
        },
        {
          text: "A box has 4 different chocolates. You eat 2 of them (order does not matter). How many different pairs might you eat?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
      ]
    },

    "4.4": {
      title: "4.4 Rate & Sequence Problems",
      questions: [
        {
          text: "A snail moves 3 cm every minute. How far does it travel in 7 minutes?",
          choices: ["A. 18 cm", "B. 19 cm", "C. 20 cm", "D. 21 cm", "E. 22 cm"],
          answer: 3
        },
        {
          text: "A machine makes 5 toy cars every hour. How many toy cars does it make in 6 hours?",
          choices: ["A. 25", "B. 28", "C. 30", "D. 32", "E. 35"],
          answer: 2
        },
        {
          text: "A baker makes 8 bread rolls every 10 minutes. How many rolls does she make in 30 minutes?",
          choices: ["A. 16", "B. 20", "C. 24", "D. 28", "E. 32"],
          answer: 2
        },
        {
          text: "A frog jumps 2 metres every 3 seconds. How far does it jump in 15 seconds?",
          choices: ["A. 8 m", "B. 9 m", "C. 10 m", "D. 11 m", "E. 12 m"],
          answer: 2
        },
        {
          text: "A tap fills 4 litres of water per minute. How many minutes does it take to fill a 28-litre tank?",
          choices: ["A. 5 min", "B. 6 min", "C. 7 min", "D. 8 min", "E. 9 min"],
          answer: 2
        },
        {
          text: "Tom earns 6 coins for every hour he works. How many hours does he need to work to earn 42 coins?",
          choices: ["A. 5 hours", "B. 6 hours", "C. 7 hours", "D. 8 hours", "E. 9 hours"],
          answer: 2
        },
        {
          text: "A caterpillar crawls 5 cm per minute. How far does it crawl in 9 minutes?",
          choices: ["A. 40 cm", "B. 42 cm", "C. 44 cm", "D. 45 cm", "E. 50 cm"],
          answer: 3
        },
        {
          text: "A printer can print 12 pages per minute. How many pages does it print in 5 minutes?",
          choices: ["A. 50", "B. 55", "C. 60", "D. 65", "E. 70"],
          answer: 2
        },
        {
          text: "A bicycle travels 10 km every 30 minutes. How far does it travel in 2 hours?",
          choices: ["A. 30 km", "B. 35 km", "C. 40 km", "D. 45 km", "E. 50 km"],
          answer: 2
        },
        {
          text: "A candle burns 2 cm every hour. It is 16 cm tall. How many hours until it is completely burned?",
          choices: ["A. 6 hours", "B. 7 hours", "C. 8 hours", "D. 9 hours", "E. 10 hours"],
          answer: 2
        },
        {
          text: "A garden hose fills a pool at 9 litres per minute. How many litres does it fill in 4 minutes?",
          choices: ["A. 32", "B. 34", "C. 36", "D. 38", "E. 40"],
          answer: 2
        },
        {
          text: "A worker packs 6 boxes every 2 minutes. How many boxes does she pack in 10 minutes?",
          choices: ["A. 24", "B. 28", "C. 30", "D. 32", "E. 36"],
          answer: 2
        },
        {
          text: "A worm crawls 4 cm per minute. How many minutes does it take the worm to crawl 36 cm?",
          choices: ["A. 7 min", "B. 8 min", "C. 9 min", "D. 10 min", "E. 11 min"],
          answer: 2
        },
        {
          text: "A train moves at 60 km/h. How far does it travel in 2 hours?",
          choices: ["A. 100 km", "B. 110 km", "C. 115 km", "D. 120 km", "E. 130 km"],
          answer: 3
        },
        {
          text: "A factory produces 15 balls per hour. How long does it take to produce 90 balls?",
          choices: ["A. 4 hours", "B. 5 hours", "C. 6 hours", "D. 7 hours", "E. 8 hours"],
          answer: 2
        },
        {
          text: "Emma saves 7 coins every week. How many weeks does it take her to save 49 coins?",
          choices: ["A. 5 weeks", "B. 6 weeks", "C. 7 weeks", "D. 8 weeks", "E. 9 weeks"],
          answer: 2
        },
        {
          text: "A car uses 5 litres of fuel every 100 km. How many litres does it use on a 300 km trip?",
          choices: ["A. 10 litres", "B. 12 litres", "C. 15 litres", "D. 18 litres", "E. 20 litres"],
          answer: 2
        },
        {
          text: "A conveyor belt moves 3 boxes per second. How many boxes does it move in 1 minute?",
          choices: ["A. 150", "B. 160", "C. 170", "D. 180", "E. 190"],
          answer: 3
        },
        {
          text: "A cow produces 8 litres of milk per day. How many days does it take to produce 56 litres?",
          choices: ["A. 5 days", "B. 6 days", "C. 7 days", "D. 8 days", "E. 9 days"],
          answer: 2
        },
        {
          text: "A beekeeper collects honey from 4 hives. Each hive produces 3 kg of honey per week. How much honey is collected in 4 weeks?",
          choices: ["A. 40 kg", "B. 44 kg", "C. 48 kg", "D. 52 kg", "E. 56 kg"],
          answer: 2
        },
        {
          text: "A child reads 8 pages every day. How many days does it take to read a 56-page book?",
          choices: ["A. 5 days", "B. 6 days", "C. 7 days", "D. 8 days", "E. 9 days"],
          answer: 2
        },
        {
          text: "A snail travels 10 cm per minute. How long does it take to travel 1 metre (100 cm)?",
          choices: ["A. 5 min", "B. 8 min", "C. 10 min", "D. 12 min", "E. 15 min"],
          answer: 2
        },
        {
          text: "A painter can paint 2 doors per hour. How many doors can she paint in 8 hours?",
          choices: ["A. 12", "B. 14", "C. 16", "D. 18", "E. 20"],
          answer: 2
        },
        {
          text: "A bucket fills up at 3 litres per minute. How many minutes does it take to fill 24 litres?",
          choices: ["A. 6 min", "B. 7 min", "C. 8 min", "D. 9 min", "E. 10 min"],
          answer: 2
        },
        {
          text: "A caterpillar eats 6 leaves every day. How many leaves does it eat in 9 days?",
          choices: ["A. 48", "B. 50", "C. 52", "D. 54", "E. 56"],
          answer: 3
        },
        {
          text: "A hamster runs 5 metres every minute in its wheel. How far does it run in 11 minutes?",
          choices: ["A. 50 m", "B. 52 m", "C. 54 m", "D. 55 m", "E. 60 m"],
          answer: 3
        },
        {
          text: "A factory worker makes 12 buttons per hour. How many buttons does she make in 4 hours?",
          choices: ["A. 40", "B. 44", "C. 46", "D. 48", "E. 50"],
          answer: 3
        },
        {
          text: "A dripping tap loses 2 litres of water every hour. How many litres are lost in 7 hours?",
          choices: ["A. 12", "B. 13", "C. 14", "D. 15", "E. 16"],
          answer: 2
        },
        {
          text: "A boat moves at 4 km per hour. How far does it travel in 5 hours?",
          choices: ["A. 16 km", "B. 18 km", "C. 20 km", "D. 22 km", "E. 24 km"],
          answer: 2
        },
        {
          text: "A gardener plants 9 seeds per row. How many seeds does she plant in 6 rows?",
          choices: ["A. 48", "B. 50", "C. 52", "D. 54", "E. 56"],
          answer: 3
        },
        {
          text: "A robot builds 7 blocks every minute. How many blocks does it build in 8 minutes?",
          choices: ["A. 48", "B. 52", "C. 54", "D. 56", "E. 60"],
          answer: 3
        },
        {
          text: "A typing student types 30 words per minute. How many words does she type in 4 minutes?",
          choices: ["A. 100", "B. 110", "C. 115", "D. 120", "E. 130"],
          answer: 3
        },
        {
          text: "A machine fills 10 bottles per minute. How many minutes does it take to fill 80 bottles?",
          choices: ["A. 6 min", "B. 7 min", "C. 8 min", "D. 9 min", "E. 10 min"],
          answer: 2
        },
        {
          text: "A chicken lays 1 egg per day. How many eggs does it lay in 3 weeks?",
          choices: ["A. 18", "B. 19", "C. 20", "D. 21", "E. 22"],
          answer: 3
        },
        {
          text: "A pupil copies 4 sentences per minute. How long does it take to copy 28 sentences?",
          choices: ["A. 5 min", "B. 6 min", "C. 7 min", "D. 8 min", "E. 9 min"],
          answer: 2
        },
        {
          text: "A well pumps out 6 litres of water per minute. How many litres does it pump out in 12 minutes?",
          choices: ["A. 60", "B. 66", "C. 70", "D. 72", "E. 78"],
          answer: 3
        },
        {
          text: "A hamster drinks 5 ml of water per hour. How many ml does it drink in 8 hours?",
          choices: ["A. 35 ml", "B. 38 ml", "C. 40 ml", "D. 42 ml", "E. 45 ml"],
          answer: 2
        },
        {
          text: "A swimmer swims 50 m every 2 minutes. How far does she swim in 10 minutes?",
          choices: ["A. 200 m", "B. 225 m", "C. 250 m", "D. 275 m", "E. 300 m"],
          answer: 2
        },
        {
          text: "A solar panel generates 3 units of electricity every hour on a sunny day. How many units does it generate in 9 hours?",
          choices: ["A. 24", "B. 25", "C. 26", "D. 27", "E. 28"],
          answer: 3
        },
        {
          text: "An ice cube melts at 2 g per minute. How many grams are left from a 30 g ice cube after 8 minutes?",
          choices: ["A. 12 g", "B. 13 g", "C. 14 g", "D. 15 g", "E. 16 g"],
          answer: 2
        },
        {
          text: "A racing car completes 3 laps every 5 minutes. How many laps does it complete in 20 minutes?",
          choices: ["A. 9", "B. 10", "C. 11", "D. 12", "E. 13"],
          answer: 3
        },
        {
          text: "A spider spins 4 cm of web every minute. How long will it take to spin 32 cm?",
          choices: ["A. 6 min", "B. 7 min", "C. 8 min", "D. 9 min", "E. 10 min"],
          answer: 2
        },
        {
          text: "A fountain pumps 5 litres of water every 2 minutes. How many litres does it pump in 14 minutes?",
          choices: ["A. 30 litres", "B. 32 litres", "C. 35 litres", "D. 40 litres", "E. 42 litres"],
          answer: 2
        },
        {
          text: "A gardener picks 7 tomatoes every day. How many tomatoes are picked in 2 weeks?",
          choices: ["A. 88", "B. 90", "C. 92", "D. 94", "E. 98"],
          answer: 3
        },
        {
          text: "A snail climbs 8 cm up a wall in an hour but slides back 3 cm each night. After 3 nights, what height has the snail reached if it started at the bottom?",
          choices: ["A. 13 cm", "B. 14 cm", "C. 15 cm", "D. 16 cm", "E. 17 cm"],
          answer: 2
        },
        {
          text: "A runner covers 9 metres every 3 seconds. How far does he run in 15 seconds?",
          choices: ["A. 40 m", "B. 42 m", "C. 44 m", "D. 45 m", "E. 50 m"],
          answer: 3
        },
        {
          text: "A water tank is drained at a rate of 4 litres per minute. If the tank has 40 litres, how many minutes until it is empty?",
          choices: ["A. 8 min", "B. 9 min", "C. 10 min", "D. 11 min", "E. 12 min"],
          answer: 2
        },
        {
          text: "A pupil paints 2 tiles per minute. How many tiles does she paint in 25 minutes?",
          choices: ["A. 45", "B. 48", "C. 50", "D. 52", "E. 55"],
          answer: 2
        },
        {
          text: "A factory makes 11 jars of jam every hour. How many jars are made in 7 hours?",
          choices: ["A. 66", "B. 70", "C. 72", "D. 74", "E. 77"],
          answer: 4
        },
        {
          text: "A faucet drips at 3 drops per second. How many drops fall in 1 minute?",
          choices: ["A. 150", "B. 160", "C. 170", "D. 180", "E. 190"],
          answer: 3
        },
      ]
    },

    "4.5": {
      title: "4.5 Weight & Measurement",
      questions: [
        {
          text: "A bag of potatoes weighs 5 kg. After removing 1 kg 500 g, how much does it weigh?",
          choices: ["A. 3 kg", "B. 3 kg 200 g", "C. 3 kg 500 g", "D. 4 kg", "E. 4 kg 500 g"],
          answer: 2
        },
        {
          text: "3 identical boxes weigh 12 kg in total. How much does one box weigh?",
          choices: ["A. 3 kg", "B. 4 kg", "C. 5 kg", "D. 6 kg", "E. 7 kg"],
          answer: 1
        },
        {
          text: "A pencil is 18 cm long. A crayon is 12 cm long. How much longer is the pencil than the crayon?",
          choices: ["A. 4 cm", "B. 5 cm", "C. 6 cm", "D. 7 cm", "E. 8 cm"],
          answer: 2
        },
        {
          text: "A jar holds 500 ml. How many jars can be filled from a 3-litre bottle?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "A ribbon is 2 m long. It is cut into pieces of 25 cm each. How many pieces are cut?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "On a balance scale, 3 apples balance 1 melon. The melon weighs 600 g. How much does one apple weigh?",
          choices: ["A. 150 g", "B. 180 g", "C. 200 g", "D. 210 g", "E. 250 g"],
          answer: 2
        },
        {
          text: "A full bucket of water weighs 8 kg. The empty bucket weighs 2 kg. How much does the water weigh?",
          choices: ["A. 4 kg", "B. 5 kg", "C. 6 kg", "D. 7 kg", "E. 8 kg"],
          answer: 2
        },
        {
          text: "A piece of string is 120 cm long. It is cut into 4 equal parts. How long is each part?",
          choices: ["A. 25 cm", "B. 28 cm", "C. 30 cm", "D. 32 cm", "E. 35 cm"],
          answer: 2
        },
        {
          text: "A bottle of juice is 1.5 litres. How many 250 ml cups can it fill?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "A parcel weighs 2 kg 300 g. Another parcel weighs 1 kg 700 g. What is their combined weight?",
          choices: ["A. 3 kg 800 g", "B. 3 kg 900 g", "C. 4 kg", "D. 4 kg 100 g", "E. 4 kg 200 g"],
          answer: 2
        },
        {
          text: "A rope is 3 metres long. How many 50 cm pieces can be cut from it?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "500 grams of flour and 300 grams of sugar are combined. What is the total weight in kg?",
          choices: ["A. 0.6 kg", "B. 0.7 kg", "C. 0.8 kg", "D. 0.9 kg", "E. 1.0 kg"],
          answer: 2
        },
        {
          text: "A box weighs 1 kg 200 g. Three identical boxes are stacked. What is their total weight?",
          choices: ["A. 3 kg 200 g", "B. 3 kg 400 g", "C. 3 kg 600 g", "D. 4 kg", "E. 4 kg 200 g"],
          answer: 2
        },
        {
          text: "A fish weighs 400 g. Which of these objects could balance with 5 fish?",
          choices: ["A. 1.5 kg", "B. 1.8 kg", "C. 2.0 kg", "D. 2.4 kg", "E. 2.5 kg"],
          answer: 2
        },
        {
          text: "A room is 4 m wide. A carpet is 250 cm wide. How many centimetres wider is the room than the carpet?",
          choices: ["A. 100 cm", "B. 125 cm", "C. 150 cm", "D. 175 cm", "E. 200 cm"],
          answer: 2
        },
        {
          text: "A bag of rice weighs 2 kg. How many grams is that?",
          choices: ["A. 200 g", "B. 500 g", "C. 1000 g", "D. 2000 g", "E. 2500 g"],
          answer: 3
        },
        {
          text: "A suitcase can hold up to 20 kg. It currently has 14 kg 500 g. How much more weight can be added?",
          choices: ["A. 4 kg 500 g", "B. 5 kg", "C. 5 kg 500 g", "D. 6 kg", "E. 6 kg 500 g"],
          answer: 2
        },
        {
          text: "On a balance scale, 2 cups of flour weigh 500 g in total. How much does 1 cup weigh?",
          choices: ["A. 200 g", "B. 225 g", "C. 250 g", "D. 275 g", "E. 300 g"],
          answer: 2
        },
        {
          text: "A swimming pool holds 1200 litres. It is filled at 300 litres per hour. How many hours to fill it?",
          choices: ["A. 2 hours", "B. 3 hours", "C. 4 hours", "D. 5 hours", "E. 6 hours"],
          answer: 2
        },
        {
          text: "4 identical bricks weigh 8 kg. How much do 7 bricks weigh?",
          choices: ["A. 12 kg", "B. 13 kg", "C. 14 kg", "D. 15 kg", "E. 16 kg"],
          answer: 2
        },
        {
          text: "A desk is 140 cm long. A shelf is 95 cm long. How much longer is the desk?",
          choices: ["A. 40 cm", "B. 42 cm", "C. 44 cm", "D. 45 cm", "E. 50 cm"],
          answer: 3
        },
        {
          text: "Which is heavier: 1.5 kg or 1400 g?",
          choices: ["A. 1.5 kg", "B. 1400 g", "C. They are equal", "D. Cannot tell", "E. Neither"],
          answer: 0
        },
        {
          text: "A bucket holds 6 litres. A large barrel holds 4 times as much. How many litres does the barrel hold?",
          choices: ["A. 18 litres", "B. 20 litres", "C. 22 litres", "D. 24 litres", "E. 26 litres"],
          answer: 3
        },
        {
          text: "A brick weighs 2 kg 500 g. How much do 4 bricks weigh?",
          choices: ["A. 8 kg", "B. 9 kg", "C. 10 kg", "D. 11 kg", "E. 12 kg"],
          answer: 2
        },
        {
          text: "A measuring tape is 5 m long. How many centimetres is that?",
          choices: ["A. 50 cm", "B. 500 cm", "C. 5000 cm", "D. 0.5 cm", "E. 0.05 cm"],
          answer: 1
        },
        {
          text: "A jug holds 750 ml. How many jugs fill a 3-litre container?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "A load of sand weighs 900 kg. It is split equally into 9 sacks. How much does each sack weigh?",
          choices: ["A. 80 kg", "B. 90 kg", "C. 100 kg", "D. 110 kg", "E. 120 kg"],
          answer: 2
        },
        {
          text: "A scale shows 3 kg 800 g. Half of this weight is removed. How much remains on the scale?",
          choices: ["A. 1 kg 700 g", "B. 1 kg 800 g", "C. 1 kg 900 g", "D. 2 kg", "E. 2 kg 100 g"],
          answer: 2
        },
        {
          text: "A trail is 2 km 400 m long. How many metres is that?",
          choices: ["A. 2040 m", "B. 2400 m", "C. 2420 m", "D. 2440 m", "E. 2460 m"],
          answer: 1
        },
        {
          text: "Two packages weigh 750 g each. What is their total weight in kg?",
          choices: ["A. 1.25 kg", "B. 1.50 kg", "C. 1.75 kg", "D. 2.00 kg", "E. 2.25 kg"],
          answer: 1
        },
        {
          text: "A bottle is 30 cm tall. A crate is 4 times taller. How tall is the crate?",
          choices: ["A. 100 cm", "B. 110 cm", "C. 115 cm", "D. 120 cm", "E. 125 cm"],
          answer: 3
        },
        {
          text: "On a balance scale, 5 plums balance 1 apple and a 50 g weight. The apple weighs 150 g. How much does each plum weigh?",
          choices: ["A. 30 g", "B. 35 g", "C. 40 g", "D. 45 g", "E. 50 g"],
          answer: 2
        },
        {
          text: "A shelf is 80 cm long. Books each 4 cm wide are placed on it. How many books fit on the shelf?",
          choices: ["A. 16", "B. 18", "C. 20", "D. 22", "E. 24"],
          answer: 2
        },
        {
          text: "A glass holds 200 ml. How many glasses can be filled from a 1.4-litre bottle?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "Three cats weigh 3 kg, 4 kg, and 5 kg. What is their average weight?",
          choices: ["A. 3 kg", "B. 3.5 kg", "C. 4 kg", "D. 4.5 kg", "E. 5 kg"],
          answer: 2
        },
        {
          text: "A bar of chocolate is 240 g. It is broken into 6 equal pieces. How heavy is each piece?",
          choices: ["A. 30 g", "B. 35 g", "C. 40 g", "D. 45 g", "E. 50 g"],
          answer: 2
        },
        {
          text: "A piece of wood is 1 m 20 cm long. It is cut into 6 equal pieces. How long is each piece?",
          choices: ["A. 15 cm", "B. 18 cm", "C. 20 cm", "D. 22 cm", "E. 25 cm"],
          answer: 2
        },
        {
          text: "A bowl of water weighs 1 kg 200 g. The empty bowl weighs 400 g. How much does the water weigh?",
          choices: ["A. 600 g", "B. 700 g", "C. 800 g", "D. 900 g", "E. 1000 g"],
          answer: 2
        },
        {
          text: "A fence needs planks that are each 50 cm long. The fence is 4 m long. How many planks are needed?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "A water tank holds 10 litres when full. It currently has 3 litres 500 ml. How much more water is needed to fill it?",
          choices: ["A. 5 litres 500 ml", "B. 6 litres", "C. 6 litres 500 ml", "D. 7 litres", "E. 7 litres 500 ml"],
          answer: 2
        },
        {
          text: "A table is 90 cm high and a stool is 45 cm high. How much higher is the table?",
          choices: ["A. 40 cm", "B. 42 cm", "C. 44 cm", "D. 45 cm", "E. 50 cm"],
          answer: 3
        },
        {
          text: "A sack of flour weighs 25 kg. How many 500 g bags can be filled from it?",
          choices: ["A. 40", "B. 45", "C. 50", "D. 55", "E. 60"],
          answer: 2
        },
        {
          text: "Two ropes together are 7 m long. One rope is 4 m 20 cm. How long is the other rope?",
          choices: ["A. 2 m 60 cm", "B. 2 m 70 cm", "C. 2 m 80 cm", "D. 3 m", "E. 3 m 20 cm"],
          answer: 2
        },
        {
          text: "An empty box weighs 300 g. When filled with apples it weighs 2 kg 100 g. How much do the apples weigh?",
          choices: ["A. 1 kg 600 g", "B. 1 kg 700 g", "C. 1 kg 800 g", "D. 1 kg 900 g", "E. 2 kg"],
          answer: 2
        },
        {
          text: "A fish tank is 60 cm long, 30 cm wide, and 40 cm tall. What is the length of the longest fish that can fit lengthwise?",
          choices: ["A. 30 cm", "B. 40 cm", "C. 50 cm", "D. 55 cm", "E. 60 cm"],
          answer: 4
        },
        {
          text: "A baby elephant weighs 120 kg. Its mother weighs 10 times as much. How much does the mother weigh?",
          choices: ["A. 1000 kg", "B. 1100 kg", "C. 1200 kg", "D. 1300 kg", "E. 1400 kg"],
          answer: 2
        },
        {
          text: "A 2-litre bottle of juice is poured equally into 8 glasses. How many ml is in each glass?",
          choices: ["A. 200 ml", "B. 225 ml", "C. 250 ml", "D. 275 ml", "E. 300 ml"],
          answer: 2
        },
        {
          text: "A newborn cat weighs 250 g. After 2 months, it weighs 4 times more. How much does it weigh now?",
          choices: ["A. 750 g", "B. 800 g", "C. 900 g", "D. 1000 g", "E. 1100 g"],
          answer: 3
        },
        {
          text: "A measuring jug holds 1 litre. Water is poured in until it reaches the 650 ml mark. How much more water is needed to fill it?",
          choices: ["A. 300 ml", "B. 325 ml", "C. 350 ml", "D. 375 ml", "E. 400 ml"],
          answer: 2
        },
        {
          text: "A plank is 2 m 40 cm long. Another plank is 1 m 80 cm long. What is the total length of both planks?",
          choices: ["A. 3 m 80 cm", "B. 3 m 90 cm", "C. 4 m", "D. 4 m 10 cm", "E. 4 m 20 cm"],
          answer: 4
        },
      ]
    },

    "5.1": {
      title: "5.1 Time Duration & Calculation",
      questions: [
        {
          text: "A film starts at 14:35 and lasts 1 hour 45 minutes. At what time does it end?",
          choices: ["A. 15:80", "B. 16:10", "C. 16:20", "D. 16:25", "E. 16:30"],
          answer: 2
        },
        {
          text: "How many minutes are there in 2 hours and 35 minutes?",
          choices: ["A. 135", "B. 145", "C. 155", "D. 160", "E. 165"],
          answer: 2
        },
        {
          text: "A train leaves at 09:25 and arrives at 11:10. How long is the journey?",
          choices: ["A. 1 h 35 min", "B. 1 h 40 min", "C. 1 h 45 min", "D. 2 h 05 min", "E. 2 h 15 min"],
          answer: 2
        },
        {
          text: "Anna sleeps for 8 hours and 30 minutes. If she wakes up at 07:00, what time did she go to sleep?",
          choices: ["A. 21:30", "B. 22:00", "C. 22:30", "D. 23:00", "E. 23:30"],
          answer: 2
        },
        {
          text: "How many seconds are in 1 hour?",
          choices: ["A. 360", "B. 600", "C. 1800", "D. 3600", "E. 7200"],
          answer: 3
        },
        {
          text: "A movie starts at 2:15 PM and ends at 4:05 PM. How long is the movie?",
          choices: ["A. 1 h 40 min", "B. 1 h 45 min", "C. 1 h 50 min", "D. 2 h 00 min", "E. 2 h 10 min"],
          answer: 2
        },
        {
          text: "Tom starts his homework at 3:45 PM and works for 55 minutes. At what time does he finish?",
          choices: ["A. 4:30 PM", "B. 4:35 PM", "C. 4:40 PM", "D. 4:45 PM", "E. 5:00 PM"],
          answer: 2
        },
        {
          text: "How many minutes are there in 3 hours?",
          choices: ["A. 150", "B. 160", "C. 170", "D. 180", "E. 190"],
          answer: 3
        },
        {
          text: "A lesson starts at 8:50 and ends at 9:35. How long is the lesson?",
          choices: ["A. 40 min", "B. 42 min", "C. 44 min", "D. 45 min", "E. 50 min"],
          answer: 3
        },
        {
          text: "How many hours are there in 3 days?",
          choices: ["A. 36", "B. 48", "C. 60", "D. 72", "E. 84"],
          answer: 3
        },
        {
          text: "A concert starts at 7:30 PM and lasts 2 hours 25 minutes. At what time does it end?",
          choices: ["A. 9:45 PM", "B. 9:50 PM", "C. 9:55 PM", "D. 10:00 PM", "E. 10:05 PM"],
          answer: 2
        },
        {
          text: "Nina starts reading at 4:20 PM and reads until 5:05 PM. How many minutes did she read?",
          choices: ["A. 40", "B. 42", "C. 44", "D. 45", "E. 50"],
          answer: 3
        },
        {
          text: "A school day begins at 8:00 AM and ends at 2:30 PM. How long is the school day?",
          choices: ["A. 5 h 30 min", "B. 6 h 00 min", "C. 6 h 30 min", "D. 7 h 00 min", "E. 7 h 30 min"],
          answer: 2
        },
        {
          text: "How many days are there in 5 weeks?",
          choices: ["A. 30", "B. 32", "C. 35", "D. 40", "E. 42"],
          answer: 2
        },
        {
          text: "A race starts at 10:15 AM and the winner finishes at 10:52 AM. How long did the winner take?",
          choices: ["A. 33 min", "B. 35 min", "C. 37 min", "D. 40 min", "E. 42 min"],
          answer: 2
        },
        {
          text: "Maria's piano practice starts at 5:00 PM. She practices for 1 hour 15 minutes. When does she finish?",
          choices: ["A. 6:00 PM", "B. 6:10 PM", "C. 6:15 PM", "D. 6:20 PM", "E. 6:30 PM"],
          answer: 2
        },
        {
          text: "A bus journey takes 2 hours 40 minutes. The bus arrives at 3:20 PM. When did it depart?",
          choices: ["A. 12:20 PM", "B. 12:30 PM", "C. 12:40 PM", "D. 1:00 PM", "E. 1:20 PM"],
          answer: 2
        },
        {
          text: "How many minutes are in half a day?",
          choices: ["A. 360", "B. 480", "C. 600", "D. 720", "E. 1440"],
          answer: 3
        },
        {
          text: "Peter wakes up at 6:45 AM and his school starts at 8:10 AM. How much time does he have?",
          choices: ["A. 1 h 10 min", "B. 1 h 15 min", "C. 1 h 20 min", "D. 1 h 25 min", "E. 1 h 30 min"],
          answer: 3
        },
        {
          text: "A clock shows 3:48. How many minutes until it shows 4:15?",
          choices: ["A. 22", "B. 25", "C. 27", "D. 30", "E. 33"],
          answer: 2
        },
        {
          text: "A swimming lesson lasts 45 minutes and starts at 9:30 AM. What time does it end?",
          choices: ["A. 10:00 AM", "B. 10:05 AM", "C. 10:10 AM", "D. 10:15 AM", "E. 10:20 AM"],
          answer: 3
        },
        {
          text: "How many hours are in one week?",
          choices: ["A. 120", "B. 144", "C. 168", "D. 182", "E. 196"],
          answer: 2
        },
        {
          text: "A train departs at 7:55 AM and the journey takes 3 hours 20 minutes. When does it arrive?",
          choices: ["A. 10:55 AM", "B. 11:05 AM", "C. 11:10 AM", "D. 11:15 AM", "E. 11:20 AM"],
          answer: 3
        },
        {
          text: "Lisa spent 35 minutes cooking and 20 minutes eating. How much time did she spend altogether?",
          choices: ["A. 45 min", "B. 50 min", "C. 55 min", "D. 60 min", "E. 65 min"],
          answer: 2
        },
        {
          text: "A library opens at 9:00 AM and closes at 6:30 PM. How long is it open?",
          choices: ["A. 8 h 30 min", "B. 9 h 00 min", "C. 9 h 30 min", "D. 10 h 00 min", "E. 10 h 30 min"],
          answer: 2
        },
        {
          text: "Ben starts painting at 10:10 AM and finishes at 12:05 PM. How long did he paint?",
          choices: ["A. 1 h 45 min", "B. 1 h 50 min", "C. 1 h 55 min", "D. 2 h 00 min", "E. 2 h 05 min"],
          answer: 2
        },
        {
          text: "How many minutes are there in 1 hour and 48 minutes?",
          choices: ["A. 98", "B. 100", "C. 105", "D. 108", "E. 112"],
          answer: 3
        },
        {
          text: "A class starts at 11:00 and the break begins 40 minutes later. After a 15-minute break, when does the next class begin?",
          choices: ["A. 11:50", "B. 11:55", "C. 12:00", "D. 12:05", "E. 12:10"],
          answer: 1
        },
        {
          text: "Sophie finishes school at 3:15 PM. She takes 25 minutes to walk home. At what time does she arrive?",
          choices: ["A. 3:30 PM", "B. 3:35 PM", "C. 3:40 PM", "D. 3:45 PM", "E. 3:50 PM"],
          answer: 2
        },
        {
          text: "A birthday party starts at 4:00 PM and lasts 3 hours 30 minutes. At what time does it end?",
          choices: ["A. 7:00 PM", "B. 7:15 PM", "C. 7:30 PM", "D. 7:45 PM", "E. 8:00 PM"],
          answer: 2
        },
        {
          text: "How many hours are there in 2 days and 6 hours?",
          choices: ["A. 50", "B. 52", "C. 54", "D. 56", "E. 58"],
          answer: 2
        },
        {
          text: "A car trip starts at 8:40 AM and takes 1 hour 50 minutes. At what time does the trip end?",
          choices: ["A. 10:20 AM", "B. 10:25 AM", "C. 10:30 AM", "D. 10:35 AM", "E. 10:40 AM"],
          answer: 2
        },
        {
          text: "Emma practiced violin from 4:10 PM to 5:00 PM. How long did she practice?",
          choices: ["A. 40 min", "B. 45 min", "C. 48 min", "D. 50 min", "E. 55 min"],
          answer: 3
        },
        {
          text: "February has 28 days. How many weeks and extra days is that?",
          choices: ["A. 3 weeks 7 days", "B. 4 weeks 0 days", "C. 4 weeks 1 day", "D. 4 weeks 2 days", "E. 5 weeks 0 days"],
          answer: 1
        },
        {
          text: "A clock shows 11:45. What time will it show in 30 minutes?",
          choices: ["A. 11:75", "B. 12:00", "C. 12:05", "D. 12:10", "E. 12:15"],
          answer: 3
        },
        {
          text: "A game starts at 1:00 PM. The first half lasts 45 minutes and the break lasts 15 minutes. When does the second half start?",
          choices: ["A. 1:55 PM", "B. 2:00 PM", "C. 2:05 PM", "D. 2:10 PM", "E. 2:15 PM"],
          answer: 1
        },
        {
          text: "How many days are there from March 5 to March 20 (not including March 5, including March 20)?",
          choices: ["A. 14", "B. 15", "C. 16", "D. 17", "E. 18"],
          answer: 1
        },
        {
          text: "A baker puts a cake in the oven at 2:35 PM and bakes it for 50 minutes. When should he take it out?",
          choices: ["A. 3:15 PM", "B. 3:20 PM", "C. 3:25 PM", "D. 3:30 PM", "E. 3:35 PM"],
          answer: 2
        },
        {
          text: "How many minutes are in 2 days?",
          choices: ["A. 1440", "B. 2160", "C. 2880", "D. 3600", "E. 4320"],
          answer: 2
        },
        {
          text: "A plane flies from city A at 6:50 AM and arrives in city B at 9:15 AM. How long is the flight?",
          choices: ["A. 2 h 10 min", "B. 2 h 15 min", "C. 2 h 20 min", "D. 2 h 25 min", "E. 2 h 30 min"],
          answer: 3
        },
        {
          text: "School holidays start on June 25 and school resumes on September 1. How many days is the summer holiday? (June has 30 days, July has 31 days, August has 31 days)",
          choices: ["A. 65", "B. 67", "C. 68", "D. 69", "E. 70"],
          answer: 3
        },
        {
          text: "Carlos goes to bed at 9:30 PM and wakes up at 6:45 AM. How many hours and minutes did he sleep?",
          choices: ["A. 8 h 45 min", "B. 9 h 00 min", "C. 9 h 15 min", "D. 9 h 30 min", "E. 9 h 45 min"],
          answer: 2
        },
        {
          text: "A clock shows 7:20. How many minutes have passed since 6:00?",
          choices: ["A. 60", "B. 70", "C. 75", "D. 80", "E. 85"],
          answer: 3
        },
        {
          text: "A TV show runs for 1 hour 10 minutes. It started at 8:50 PM. When did it end?",
          choices: ["A. 9:50 PM", "B. 9:55 PM", "C. 10:00 PM", "D. 10:05 PM", "E. 10:10 PM"],
          answer: 2
        },
        {
          text: "How many weeks are in a year? (1 year = 365 days)",
          choices: ["A. 50 weeks 5 days", "B. 51 weeks 2 days", "C. 52 weeks 1 day", "D. 52 weeks 2 days", "E. 53 weeks 0 days"],
          answer: 2
        },
        {
          text: "Alex's football practice starts at 5:30 PM and lasts 1 hour 30 minutes. What time does it end?",
          choices: ["A. 6:30 PM", "B. 6:45 PM", "C. 7:00 PM", "D. 7:15 PM", "E. 7:30 PM"],
          answer: 2
        },
        {
          text: "A stopwatch shows 3 minutes 45 seconds. How many seconds is that?",
          choices: ["A. 200", "B. 210", "C. 215", "D. 225", "E. 240"],
          answer: 3
        },
        {
          text: "Julia gets to school at 8:05 AM. The school day ends 6 hours 45 minutes later. When does school end?",
          choices: ["A. 2:40 PM", "B. 2:45 PM", "C. 2:50 PM", "D. 3:00 PM", "E. 3:05 PM"],
          answer: 2
        },
        {
          text: "How many minutes are in 4 hours and 20 minutes?",
          choices: ["A. 240", "B. 250", "C. 255", "D. 260", "E. 270"],
          answer: 3
        },
        {
          text: "A project was started on Monday and completed on the following Friday. How many days did it take (including start and end day)?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 1
        }
      ]
    },

    "5.2": {
      title: "5.2 Repeating Events",
      questions: [
        {
          text: "A bus departs every 15 minutes. The first bus leaves at 08:00. When does the 7th bus leave?",
          choices: ["A. 09:20", "B. 09:30", "C. 09:40", "D. 09:45", "E. 09:50"],
          answer: 1
        },
        {
          text: "A light flashes every 8 seconds. Another flashes every 12 seconds. They flash together at time 0. When do they next flash together?",
          choices: ["A. 16 sec", "B. 20 sec", "C. 24 sec", "D. 32 sec", "E. 48 sec"],
          answer: 2
        },
        {
          text: "A fence post is placed every 4 m along a 100 m straight fence. Including both end posts, how many posts are there?",
          choices: ["A. 24", "B. 25", "C. 26", "D. 27", "E. 28"],
          answer: 2
        },
        {
          text: "Today is Tuesday. What day of the week will it be in 20 days?",
          choices: ["A. Sunday", "B. Monday", "C. Tuesday", "D. Wednesday", "E. Thursday"],
          answer: 0
        },
        {
          text: "A heartbeat occurs every 0.8 seconds. How many beats occur in 1 minute?",
          choices: ["A. 70", "B. 72", "C. 75", "D. 80", "E. 90"],
          answer: 2
        },
        {
          text: "A bus comes every 12 minutes. One arrived at 9:00 AM. When is the next bus?",
          choices: ["A. 9:10 AM", "B. 9:12 AM", "C. 9:15 AM", "D. 9:20 AM", "E. 9:24 AM"],
          answer: 1
        },
        {
          text: "Bells ring every 6 seconds and lights flash every 8 seconds. They happen together at time 0. After how many seconds do they next happen together?",
          choices: ["A. 14", "B. 18", "C. 24", "D. 30", "E. 48"],
          answer: 2
        },
        {
          text: "Every 3rd day Anna swims, and every 4th day she runs. Today she does both. After how many days will she again do both on the same day?",
          choices: ["A. 7", "B. 10", "C. 12", "D. 14", "E. 16"],
          answer: 2
        },
        {
          text: "A pattern repeats every 5 tiles: red, blue, green, yellow, white. What color is the 23rd tile?",
          choices: ["A. red", "B. blue", "C. green", "D. yellow", "E. white"],
          answer: 2
        },
        {
          text: "Today is Monday. What day will it be in 15 days?",
          choices: ["A. Monday", "B. Tuesday", "C. Wednesday", "D. Thursday", "E. Friday"],
          answer: 0
        },
        {
          text: "A traffic light turns green every 45 seconds. It just turned green. When will it turn green again for the 4th time?",
          choices: ["A. 135 sec", "B. 150 sec", "C. 165 sec", "D. 180 sec", "E. 200 sec"],
          answer: 3
        },
        {
          text: "A pattern of shapes repeats: circle, square, triangle, circle, square, triangle, ... What is the 17th shape?",
          choices: ["A. circle", "B. square", "C. triangle", "D. rectangle", "E. star"],
          answer: 1
        },
        {
          text: "Maria takes a vitamin pill every 2 days and a calcium pill every 3 days. She takes both today. In how many days will she next take both on the same day?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 8", "E. 10"],
          answer: 2
        },
        {
          text: "A train stops at a station every 20 minutes starting at 7:00 AM. How many stops are made by 10:00 AM (including the 7:00 stop)?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 11", "E. 12"],
          answer: 1
        },
        {
          text: "The color pattern on a bracelet is: red, red, blue, green, red, red, blue, green, ... What is the 30th bead?",
          choices: ["A. red", "B. red", "C. blue", "D. green", "E. yellow"],
          answer: 2
        },
        {
          text: "Two bells ring together at noon. One bell rings every 4 hours and the other every 6 hours. When will they next ring together?",
          choices: ["A. 4:00 PM", "B. 6:00 PM", "C. 8:00 PM", "D. 10:00 PM", "E. 12:00 AM"],
          answer: 3
        },
        {
          text: "Today is Wednesday. What day of the week will it be in 100 days?",
          choices: ["A. Monday", "B. Tuesday", "C. Wednesday", "D. Thursday", "E. Friday"],
          answer: 3
        },
        {
          text: "A streetlight blinks every 5 seconds and a car alarm beeps every 7 seconds. Both happen at time 0. After how many seconds do they next happen at the same time?",
          choices: ["A. 12", "B. 25", "C. 30", "D. 35", "E. 70"],
          answer: 3
        },
        {
          text: "A number pattern is: 2, 5, 8, 11, 14, ... The pattern adds 3 each time. What is the 10th number?",
          choices: ["A. 26", "B. 27", "C. 28", "D. 29", "E. 30"],
          answer: 3
        },
        {
          text: "A baker makes bread every 3 days and cookies every 5 days. He makes both today. After how many days will he next make both on the same day?",
          choices: ["A. 8", "B. 10", "C. 12", "D. 15", "E. 20"],
          answer: 3
        },
        {
          text: "A tile pattern repeats: star, moon, sun, moon, star, moon, sun, moon, ... What is the 20th tile?",
          choices: ["A. star", "B. moon", "C. sun", "D. cloud", "E. heart"],
          answer: 1
        },
        {
          text: "A bus leaves every 10 minutes. If a bus left at 2:30 PM, at what time does the 5th bus after that depart?",
          choices: ["A. 3:00 PM", "B. 3:10 PM", "C. 3:20 PM", "D. 3:30 PM", "E. 3:40 PM"],
          answer: 2
        },
        {
          text: "Today is Friday. What day will it be in 30 days?",
          choices: ["A. Sunday", "B. Monday", "C. Tuesday", "D. Wednesday", "E. Thursday"],
          answer: 0
        },
        {
          text: "A number sequence starts at 1 and multiplies by 2 each time: 1, 2, 4, 8, 16, ... What is the 8th number?",
          choices: ["A. 64", "B. 96", "C. 128", "D. 192", "E. 256"],
          answer: 2
        },
        {
          text: "Red and green lights flash at the same time. Red flashes every 9 seconds and green flashes every 6 seconds. After how many seconds do they next flash together?",
          choices: ["A. 12", "B. 15", "C. 18", "D. 24", "E. 54"],
          answer: 2
        },
        {
          text: "A child water-colors every 4 days and draws every 6 days. She does both today. In how many days will she next do both activities on the same day?",
          choices: ["A. 8", "B. 10", "C. 12", "D. 16", "E. 24"],
          answer: 2
        },
        {
          text: "A tile floor has a repeating pattern of 7 tiles: A, B, C, D, E, F, G. What letter is the 50th tile?",
          choices: ["A. A", "B. B", "C. C", "D. D", "E. E"],
          answer: 3
        },
        {
          text: "A grandfather clock chimes every hour, and a cuckoo clock chimes every 30 minutes. Both chime together at 12:00. When is the next time they chime together?",
          choices: ["A. 12:30", "B. 1:00", "C. 1:30", "D. 2:00", "E. 6:00"],
          answer: 0
        },
        {
          text: "In a repeating color pattern of 6: red, orange, yellow, green, blue, purple, what color is the 40th item?",
          choices: ["A. red", "B. orange", "C. yellow", "D. green", "E. blue"],
          answer: 3
        },
        {
          text: "A sprinkler runs every 8 minutes and a fountain runs every 12 minutes. Both start at 10:00 AM. When do they next run at the same time?",
          choices: ["A. 10:16 AM", "B. 10:20 AM", "C. 10:24 AM", "D. 10:30 AM", "E. 10:36 AM"],
          answer: 2
        },
        {
          text: "Today is Thursday. What day was it 18 days ago?",
          choices: ["A. Sunday", "B. Monday", "C. Tuesday", "D. Wednesday", "E. Thursday"],
          answer: 0
        },
        {
          text: "A sequence is: 3, 6, 9, 12, 15, ... What is the 12th term?",
          choices: ["A. 30", "B. 33", "C. 36", "D. 39", "E. 42"],
          answer: 2
        },
        {
          text: "A pattern of letters is: A, B, A, B, B, A, B, A, B, B, ... (the group 'A, B, A, B, B' repeats). What is the 14th letter?",
          choices: ["A. A", "B. B", "C. A or B", "D. C", "E. D"],
          answer: 0
        },
        {
          text: "A radio station plays a song every 18 minutes. The first song played at 7:00 AM. When does it play for the 5th time?",
          choices: ["A. 8:00 AM", "B. 8:06 AM", "C. 8:12 AM", "D. 8:18 AM", "E. 8:24 AM"],
          answer: 2
        },
        {
          text: "Eve practices guitar every 5 days and piano every 8 days. She practices both today. After how many days will she practice both on the same day again?",
          choices: ["A. 13", "B. 20", "C. 30", "D. 40", "E. 45"],
          answer: 3
        },
        {
          text: "A number pattern is: 100, 93, 86, 79, ... (subtract 7 each time). What is the 6th number?",
          choices: ["A. 58", "B. 60", "C. 62", "D. 65", "E. 72"],
          answer: 3
        },
        {
          text: "A beeping device sounds every 4 seconds, and a flashing device flashes every 10 seconds. Both start at the same time. After how many seconds do they next happen together?",
          choices: ["A. 14", "B. 16", "C. 20", "D. 24", "E. 40"],
          answer: 2
        },
        {
          text: "The sequence of months has 12 months. If January is month 1, what month number is month 27?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "A lamp blinks every 3 seconds and a buzzer sounds every 5 seconds. They happen together at 0 seconds. How many times in the first 60 seconds do they happen together (including time 0)?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 1
        },
        {
          text: "Today is Saturday. What day of the week was it 10 days ago?",
          choices: ["A. Wednesday", "B. Thursday", "C. Friday", "D. Saturday", "E. Sunday"],
          answer: 0
        },
        {
          text: "A sequence is 1, 4, 9, 16, 25, ... (square numbers). What is the 9th term?",
          choices: ["A. 64", "B. 72", "C. 81", "D. 90", "E. 100"],
          answer: 2
        },
        {
          text: "A class has a quiz every Monday and a test every 3 weeks. Both happen today (a Monday). In how many weeks will both happen on the same Monday again?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 6"],
          answer: 2
        },
        {
          text: "A color strip repeats: blue, blue, red, yellow, blue, blue, red, yellow, ... What is the 19th color?",
          choices: ["A. blue", "B. blue", "C. red", "D. yellow", "E. green"],
          answer: 2
        },
        {
          text: "Trains A and B both leave the station at 8:00 AM. Train A leaves every 20 minutes and Train B every 30 minutes. At what time do they next leave together?",
          choices: ["A. 8:50 AM", "B. 9:00 AM", "C. 9:10 AM", "D. 9:20 AM", "E. 10:00 AM"],
          answer: 1
        },
        {
          text: "A pattern goes: 1, 1, 2, 1, 1, 2, 1, 1, 2, ... What is the sum of the first 12 terms?",
          choices: ["A. 14", "B. 15", "C. 16", "D. 18", "E. 20"],
          answer: 2
        },
        {
          text: "Today is Sunday. In how many days is the next Saturday?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 1
        },
        {
          text: "A machine stamps 1 red sticker and then 2 blue stickers repeatedly. What color is the 25th sticker?",
          choices: ["A. red", "B. blue", "C. green", "D. yellow", "E. white"],
          answer: 0
        },
        {
          text: "Two frogs jump at the same time from the same spot. Frog A jumps every 4 seconds and Frog B every 6 seconds. How many seconds after the start do they first jump at exactly the same time again?",
          choices: ["A. 8", "B. 10", "C. 12", "D. 16", "E. 24"],
          answer: 2
        },
        {
          text: "A light sequence repeats every 4 flashes: dim, bright, bright, off. What type of flash is the 30th?",
          choices: ["A. dim", "B. bright", "C. bright", "D. off", "E. medium"],
          answer: 1
        },
        {
          text: "Starting from 1, every 7th number is circled: 1, 8, 15, 22, ... Is 64 circled?",
          choices: ["A. Yes, 64 is the 10th circled number", "B. No, 64 is not in the sequence", "C. Yes, 64 is the 9th circled number", "D. No, 63 is circled instead", "E. Yes, 64 is the 8th circled number"],
          answer: 3
        }
      ]
    },

    "6.1": {
      title: "6.1 Counting with Constraints",
      questions: [
        {
          text: "How many even numbers are there between 1 and 20 (inclusive)?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 11", "E. 12"],
          answer: 2
        },
        {
          text: "How many odd numbers are there between 10 and 30 (inclusive)?",
          choices: ["A. 9", "B. 10", "C. 11", "D. 12", "E. 13"],
          answer: 1
        },
        {
          text: "How many multiples of 3 are there from 1 to 30?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 11", "E. 12"],
          answer: 2
        },
        {
          text: "How many multiples of 5 are there from 1 to 50?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 11", "E. 12"],
          answer: 2
        },
        {
          text: "How many 2-digit numbers have a digit sum equal to 9?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "How many 2-digit numbers are divisible by both 2 and 3?",
          choices: ["A. 12", "B. 13", "C. 14", "D. 15", "E. 16"],
          answer: 3
        },
        {
          text: "A fence is 20 meters long. Posts are placed every 4 meters, including at both ends. How many posts are there?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "Trees are planted along a 30-meter path, one every 5 meters, including at both ends. How many trees are there?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "How many numbers from 1 to 100 contain the digit 7?",
          choices: ["A. 10", "B. 15", "C. 19", "D. 20", "E. 21"],
          answer: 2
        },
        {
          text: "How many whole numbers from 1 to 50 are divisible by 4?",
          choices: ["A. 10", "B. 11", "C. 12", "D. 13", "E. 14"],
          answer: 2
        },
        {
          text: "How many 2-digit numbers have their tens digit greater than their units digit?",
          choices: ["A. 36", "B. 40", "C. 42", "D. 45", "E. 48"],
          answer: 0
        },
        {
          text: "How many integers from 1 to 40 are NOT divisible by 5?",
          choices: ["A. 28", "B. 30", "C. 32", "D. 34", "E. 36"],
          answer: 2
        },
        {
          text: "How many 2-digit numbers have a digit sum equal to 5?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 1
        },
        {
          text: "How many multiples of 7 are less than 60?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "Lamp posts are placed every 3 meters along a 24-meter street, including both ends. How many lamp posts are there?",
          choices: ["A. 7", "B. 8", "C. 9", "D. 10", "E. 11"],
          answer: 2
        },
        {
          text: "How many even numbers between 1 and 100 are also multiples of 3?",
          choices: ["A. 14", "B. 15", "C. 16", "D. 17", "E. 18"],
          answer: 2
        },
        {
          text: "How many whole numbers from 1 to 30 are divisible by either 2 or 3?",
          choices: ["A. 18", "B. 19", "C. 20", "D. 21", "E. 22"],
          answer: 2
        },
        {
          text: "How many 2-digit numbers use only the digits 1 and 2 (repetition allowed)?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "How many numbers from 10 to 99 have both digits the same (like 11, 22, ...)?",
          choices: ["A. 7", "B. 8", "C. 9", "D. 10", "E. 11"],
          answer: 2
        },
        {
          text: "How many 3-digit numbers from 100 to 200 are even?",
          choices: ["A. 48", "B. 49", "C. 50", "D. 51", "E. 52"],
          answer: 2
        },
        {
          text: "How many times does the digit 1 appear in all numbers from 1 to 20?",
          choices: ["A. 10", "B. 11", "C. 12", "D. 13", "E. 14"],
          answer: 1
        },
        {
          text: "A ruler has marks at every 2 cm from 0 cm to 20 cm. How many marks are there in total?",
          choices: ["A. 9", "B. 10", "C. 11", "D. 12", "E. 13"],
          answer: 2
        },
        {
          text: "How many integers from 1 to 100 are divisible by 10?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 11", "E. 12"],
          answer: 2
        },
        {
          text: "How many 2-digit numbers are greater than 50 and odd?",
          choices: ["A. 20", "B. 22", "C. 24", "D. 25", "E. 26"],
          answer: 3
        },
        {
          text: "Seats are numbered 1, 2, 3, ... in a row. How many seat numbers from 1 to 50 contain the digit 4?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 3
        },
        {
          text: "How many multiples of 6 are there from 1 to 60?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 11", "E. 12"],
          answer: 2
        },
        {
          text: "How many 2-digit numbers are divisible by 9?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 11", "E. 12"],
          answer: 2
        },
        {
          text: "Steps are placed every 20 cm going up a 2-meter (200 cm) staircase, including bottom and top. How many steps (including landings at both ends) are there?",
          choices: ["A. 9", "B. 10", "C. 11", "D. 12", "E. 13"],
          answer: 2
        },
        {
          text: "How many whole numbers from 1 to 50 have a remainder of 2 when divided by 5?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 11", "E. 12"],
          answer: 2
        },
        {
          text: "How many 2-digit numbers have tens digit equal to 7?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 11", "E. 12"],
          answer: 2
        },
        {
          text: "Numbers from 1 to 30 are written. How many times does the digit 2 appear?",
          choices: ["A. 10", "B. 11", "C. 12", "D. 13", "E. 14"],
          answer: 2
        },
        {
          text: "How many integers from 1 to 50 are NOT multiples of 2?",
          choices: ["A. 23", "B. 24", "C. 25", "D. 26", "E. 27"],
          answer: 2
        },
        {
          text: "How many 3-digit numbers from 300 to 400 are odd?",
          choices: ["A. 48", "B. 49", "C. 50", "D. 51", "E. 52"],
          answer: 2
        },
        {
          text: "Flags are hung every 4 meters along a 32-meter wall, one at each end. How many flags are there?",
          choices: ["A. 7", "B. 8", "C. 9", "D. 10", "E. 11"],
          answer: 2
        },
        {
          text: "How many 2-digit numbers are divisible by 4?",
          choices: ["A. 20", "B. 21", "C. 22", "D. 23", "E. 24"],
          answer: 2
        },
        {
          text: "How many whole numbers from 1 to 100 are multiples of both 4 and 6?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "How many numbers from 1 to 20 are divisible by 3 but NOT by 6?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 1
        },
        {
          text: "How many 2-digit numbers have digit sum equal to 10?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 1
        },
        {
          text: "How many whole numbers less than 50 are divisible by 7?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "How many 2-digit numbers have units digit equal to 5?",
          choices: ["A. 7", "B. 8", "C. 9", "D. 10", "E. 11"],
          answer: 2
        },
        {
          text: "Poles are placed every 6 meters along a 48-meter road, including at both ends. How many poles are there?",
          choices: ["A. 7", "B. 8", "C. 9", "D. 10", "E. 11"],
          answer: 2
        },
        {
          text: "How many numbers from 1 to 100 are divisible by 5 but not by 10?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 11", "E. 12"],
          answer: 2
        },
        {
          text: "How many 2-digit numbers are perfect squares?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "From 1 to 40, how many numbers are divisible by 2 but not by 4?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 11", "E. 12"],
          answer: 2
        },
        {
          text: "How many integers from 1 to 50 have a digit sum greater than 10?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 1
        },
        {
          text: "How many 2-digit numbers are there in total (from 10 to 99)?",
          choices: ["A. 88", "B. 89", "C. 90", "D. 91", "E. 92"],
          answer: 2
        },
        {
          text: "How many numbers from 1 to 60 are divisible by both 3 and 5?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "Chairs are arranged in a row. There are 7 chairs between the 1st and 9th chair. How many chairs are between the 1st and 5th chair?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 1
        },
        {
          text: "How many 3-digit numbers between 100 and 200 have digit sum equal to 5?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 1
        },
        {
          text: "How many whole numbers from 1 to 100 are NOT divisible by either 2 or 5?",
          choices: ["A. 38", "B. 39", "C. 40", "D. 41", "E. 42"],
          answer: 2
        }
      ]
    },

    "6.2": {
      title: "6.2 Combinations & Arrangements",
      questions: [
        {
          text: "In how many ways can 3 different books be arranged on a shelf?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 9"],
          answer: 3
        },
        {
          text: "In how many ways can you pick 1 boy and 1 girl from a group of 4 boys and 3 girls?",
          choices: ["A. 7", "B. 10", "C. 12", "D. 14", "E. 18"],
          answer: 2
        },
        {
          text: "How many different 2-digit numbers can be formed from the digits 1, 2, 3, 4 (each digit used at most once)?",
          choices: ["A. 8", "B. 10", "C. 12", "D. 14", "E. 16"],
          answer: 2
        },
        {
          text: "In how many ways can a president and a vice-president be chosen from 5 candidates (different people)?",
          choices: ["A. 5", "B. 10", "C. 20", "D. 25", "E. 30"],
          answer: 2
        },
        {
          text: "How many different outfits can be made from 3 shirts and 4 pairs of pants?",
          choices: ["A. 7", "B. 10", "C. 12", "D. 14", "E. 16"],
          answer: 2
        },
        {
          text: "In how many different orders can 4 runners finish a race (assuming no ties)?",
          choices: ["A. 4", "B. 8", "C. 16", "D. 24", "E. 32"],
          answer: 3
        },
        {
          text: "How many 3-letter codes can be made from the letters A, B, C if each letter is used exactly once?",
          choices: ["A. 3", "B. 4", "C. 6", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "A menu has 3 starters and 4 main courses. How many different meals of 1 starter and 1 main course are possible?",
          choices: ["A. 7", "B. 10", "C. 12", "D. 14", "E. 16"],
          answer: 2
        },
        {
          text: "How many different pairs of socks can be chosen from 6 different socks?",
          choices: ["A. 10", "B. 12", "C. 14", "D. 15", "E. 18"],
          answer: 3
        },
        {
          text: "In how many ways can 2 people be chosen from a group of 5 to form a team?",
          choices: ["A. 5", "B. 8", "C. 10", "D. 12", "E. 15"],
          answer: 2
        },
        {
          text: "How many different 3-digit numbers can be formed using digits 1, 2, 3 (each used exactly once)?",
          choices: ["A. 3", "B. 4", "C. 6", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "Alice, Bob, and Carol are seated in a row. How many different seating arrangements are possible?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 9"],
          answer: 3
        },
        {
          text: "A traffic light uses red, yellow, and green lights. If the order matters, how many different 2-light signals can be made using different colours?",
          choices: ["A. 3", "B. 4", "C. 6", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "How many ways can you choose 2 flavours of ice cream from vanilla, chocolate, strawberry, and mint?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 8", "E. 10"],
          answer: 2
        },
        {
          text: "A coin is flipped and a die is rolled. How many different outcomes are possible?",
          choices: ["A. 6", "B. 8", "C. 10", "D. 12", "E. 16"],
          answer: 3
        },
        {
          text: "How many ways can you place a red and a blue ball into 3 different boxes (one ball per box)?",
          choices: ["A. 3", "B. 4", "C. 6", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "5 students shake hands with each other once. How many handshakes take place in total?",
          choices: ["A. 5", "B. 8", "C. 10", "D. 12", "E. 15"],
          answer: 2
        },
        {
          text: "How many 2-letter codes can be formed from the letters P, Q, R, S (each letter used at most once)?",
          choices: ["A. 8", "B. 10", "C. 12", "D. 14", "E. 16"],
          answer: 2
        },
        {
          text: "In how many ways can 3 students be chosen for 1st, 2nd, and 3rd prize from 5 students (all different students win different prizes)?",
          choices: ["A. 10", "B. 30", "C. 60", "D. 90", "E. 120"],
          answer: 2
        },
        {
          text: "How many different sums can you get by rolling two different dice (where order does not matter)?",
          choices: ["A. 9", "B. 10", "C. 11", "D. 12", "E. 13"],
          answer: 2
        },
        {
          text: "How many ways can you arrange the letters in the word CAT?",
          choices: ["A. 3", "B. 4", "C. 6", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "A shop has 4 types of sandwiches and 3 types of drinks. How many different lunch combinations (1 sandwich + 1 drink) are there?",
          choices: ["A. 7", "B. 10", "C. 12", "D. 14", "E. 16"],
          answer: 2
        },
        {
          text: "How many different routes are there from A to C passing through B if there are 3 roads from A to B and 2 roads from B to C?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 8"],
          answer: 3
        },
        {
          text: "How many ways can you arrange 2 red and 1 blue flag in a row of 3 flagpoles?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 1
        },
        {
          text: "In how many ways can you line up 4 different coloured beads on a string (the string has a fixed start and end)?",
          choices: ["A. 4", "B. 8", "C. 16", "D. 24", "E. 32"],
          answer: 3
        },
        {
          text: "Two dice are thrown. How many ways can you get a sum of 7?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "How many 3-digit numbers can be made from digits 1, 2, 3, 4 if no digit repeats and the number must be even?",
          choices: ["A. 6", "B. 8", "C. 10", "D. 12", "E. 14"],
          answer: 3
        },
        {
          text: "4 friends each send 1 postcard to every other friend. How many postcards are sent in total?",
          choices: ["A. 4", "B. 6", "C. 8", "D. 10", "E. 12"],
          answer: 3
        },
        {
          text: "In how many ways can you choose a leader and a helper from 6 students?",
          choices: ["A. 12", "B. 18", "C. 24", "D. 30", "E. 36"],
          answer: 3
        },
        {
          text: "How many ways can you sit 5 people in 5 chairs in a row?",
          choices: ["A. 24", "B. 60", "C. 100", "D. 120", "E. 125"],
          answer: 3
        },
        {
          text: "From 4 different flowers, how many different pairs of flowers can you choose to make a bouquet?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "How many different 2-digit numbers can be formed using digits 2, 4, 6 (repetition is allowed)?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 3
        },
        {
          text: "If you spin a spinner with 4 sections and flip a coin, how many equally likely outcomes are there?",
          choices: ["A. 4", "B. 6", "C. 8", "D. 10", "E. 12"],
          answer: 2
        },
        {
          text: "How many different 4-letter words (including nonsense words) can be made using A, B, C, D each exactly once?",
          choices: ["A. 4", "B. 12", "C. 16", "D. 24", "E. 32"],
          answer: 3
        },
        {
          text: "In a race with 5 runners, how many different ways can the top 3 finishers be arranged in 1st, 2nd, and 3rd place?",
          choices: ["A. 10", "B. 20", "C. 60", "D. 120", "E. 125"],
          answer: 2
        },
        {
          text: "How many ways can you divide 4 different prizes among 4 different people (one prize each)?",
          choices: ["A. 4", "B. 8", "C. 16", "D. 24", "E. 32"],
          answer: 3
        },
        {
          text: "A password is 2 digits long and each digit is from 1 to 5 (repetition allowed). How many passwords are possible?",
          choices: ["A. 10", "B. 15", "C. 20", "D. 25", "E. 30"],
          answer: 3
        },
        {
          text: "How many ways can you choose 3 books from a set of 5 different books (the order of selection does not matter)?",
          choices: ["A. 5", "B. 8", "C. 10", "D. 15", "E. 20"],
          answer: 2
        },
        {
          text: "In how many different ways can you arrange 3 different pictures on a wall in a row?",
          choices: ["A. 3", "B. 4", "C. 6", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "How many ways can 6 teams each play against every other team exactly once?",
          choices: ["A. 12", "B. 15", "C. 18", "D. 20", "E. 30"],
          answer: 1
        },
        {
          text: "A box has 3 red balls and 2 blue balls. How many ways can you choose 1 red and 1 blue ball?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 8"],
          answer: 3
        },
        {
          text: "In how many ways can a boy and a girl be chosen from a group of 5 boys and 4 girls?",
          choices: ["A. 9", "B. 15", "C. 18", "D. 20", "E. 25"],
          answer: 3
        },
        {
          text: "How many ways can you arrange the letters M, A, T, H in a row?",
          choices: ["A. 4", "B. 8", "C. 16", "D. 24", "E. 32"],
          answer: 3
        },
        {
          text: "If there are 4 roads from town X to town Y and 3 roads from town Y to town Z, how many different X-to-Z trips pass through Y?",
          choices: ["A. 7", "B. 10", "C. 12", "D. 14", "E. 16"],
          answer: 2
        },
        {
          text: "How many different 3-letter codes can be made from the letters {A, B, C, D} if each letter is used at most once?",
          choices: ["A. 12", "B. 18", "C. 24", "D. 30", "E. 36"],
          answer: 2
        },
        {
          text: "How many different ways can you choose 2 students from a class of 6 to represent the class?",
          choices: ["A. 12", "B. 15", "C. 18", "D. 20", "E. 30"],
          answer: 1
        },
        {
          text: "How many 2-digit numbers can be made using the digits 3, 5, 7 (repetition not allowed)?",
          choices: ["A. 3", "B. 4", "C. 6", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "A spinner has sections numbered 1, 2, 3. If you spin it twice, how many different outcomes (ordered pairs) are there?",
          choices: ["A. 3", "B. 6", "C. 9", "D. 12", "E. 15"],
          answer: 2
        },
        {
          text: "How many ways can you choose 1 captain and 1 co-captain from 4 team members (they must be different people)?",
          choices: ["A. 4", "B. 6", "C. 8", "D. 10", "E. 12"],
          answer: 3
        },
        {
          text: "How many different 4-digit numbers can be made from the digits 1, 2, 3, 4 using each digit exactly once?",
          choices: ["A. 12", "B. 16", "C. 20", "D. 24", "E. 32"],
          answer: 3
        }
      ]
    },

    "6.3": {
      title: "6.3 Digit / Number Covering",
      questions: [
        {
          text: "A 3-digit number has hundreds digit twice the tens digit, and tens digit twice the units digit. What is the number?",
          choices: ["A. 421", "B. 421", "C. 842", "D. 421", "E. 211"],
          answer: 2
        },
        {
          text: "The sum of a 2-digit number's digits is 11. The tens digit is 5. What is the number?",
          choices: ["A. 52", "B. 54", "C. 56", "D. 57", "E. 58"],
          answer: 2
        },
        {
          text: "A 2-digit number reversed is 9 more than the original. The units digit is 5. What is the original number?",
          choices: ["A. 45", "B. 54", "C. 35", "D. 53", "E. 65"],
          answer: 0
        },
        {
          text: "The number □□ is a perfect square between 60 and 90. What is it?",
          choices: ["A. 64", "B. 72", "C. 76", "D. 84", "E. 89"],
          answer: 0
        },
        {
          text: "A 2-digit number has digit sum 7 and is divisible by 7. What is the number?",
          choices: ["A. 16", "B. 25", "C. 34", "D. 43", "E. 70"],
          answer: 0
        },
        {
          text: "The tens digit of a 2-digit number is 3 more than its units digit. The digit sum is 9. What is the number?",
          choices: ["A. 36", "B. 63", "C. 72", "D. 54", "E. 81"],
          answer: 1
        },
        {
          text: "A 3-digit number is between 400 and 500. The sum of its digits is 15 and its units digit is 4. What is the number?",
          choices: ["A. 474", "B. 465", "C. 456", "D. 447", "E. 484"],
          answer: 0
        },
        {
          text: "The number 2□4 is divisible by 3. Which digit could □ be?",
          choices: ["A. 1", "B. 3", "C. 4", "D. 7", "E. 9"],
          answer: 0
        },
        {
          text: "A 2-digit number is 4 times the sum of its digits. Which number is it?",
          choices: ["A. 12", "B. 18", "C. 24", "D. 36", "E. 48"],
          answer: 2
        },
        {
          text: "The hundreds digit of a 3-digit number equals the sum of its tens and units digits. The number is 5□2 where the tens digit is missing. What is the number if the sum rule holds?",
          choices: ["A. 532", "B. 542", "C. 572", "D. 562", "E. 592"],
          answer: 0
        },
        {
          text: "When a 2-digit number is reversed, the new number is 27 more than the original. The tens digit is 3. What is the original number?",
          choices: ["A. 36", "B. 30", "C. 63", "D. 39", "E. 93"],
          answer: 0
        },
        {
          text: "A number between 20 and 30 is divisible by 7. What is the number?",
          choices: ["A. 21", "B. 22", "C. 24", "D. 28", "E. 29"],
          answer: 3
        },
        {
          text: "The product of the digits of a 2-digit number is 12. The tens digit is greater than the units digit. What is the number?",
          choices: ["A. 34", "B. 43", "C. 26", "D. 62", "E. 38"],
          answer: 1
        },
        {
          text: "A 2-digit number is 5 times its units digit. What is the number?",
          choices: ["A. 10", "B. 15", "C. 25", "D. 45", "E. 55"],
          answer: 1
        },
        {
          text: "The sum of digits of a 3-digit number is 12. The number is between 300 and 400. The units digit is 5. What is the tens digit?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 3
        },
        {
          text: "A 2-digit number has digit sum 8 and is even. The tens digit is larger than 4. What is the number?",
          choices: ["A. 26", "B. 44", "C. 62", "D. 80", "E. 53"],
          answer: 2
        },
        {
          text: "The number □35 is divisible by 5. What digit could □ be if the number is less than 400?",
          choices: ["A. 1", "B. 3", "C. 5", "D. 7", "E. 9"],
          answer: 0
        },
        {
          text: "A 2-digit number's tens digit is twice its units digit. The digit sum is 9. What is the number?",
          choices: ["A. 36", "B. 63", "C. 18", "D. 81", "E. 27"],
          answer: 0
        },
        {
          text: "A number between 70 and 80 is divisible by 9. What is it?",
          choices: ["A. 70", "B. 72", "C. 75", "D. 78", "E. 79"],
          answer: 1
        },
        {
          text: "When a 2-digit number is reversed, it becomes 18 less than the original. The sum of its digits is 10. What is the original number?",
          choices: ["A. 28", "B. 37", "C. 46", "D. 64", "E. 73"],
          answer: 3
        },
        {
          text: "The units digit of a 2-digit number is 3 times its tens digit. The tens digit is 2. What is the number?",
          choices: ["A. 23", "B. 26", "C. 32", "D. 62", "E. 36"],
          answer: 1
        },
        {
          text: "A 3-digit number has all three identical digits. The digit sum is 15. What is the number?",
          choices: ["A. 333", "B. 444", "C. 555", "D. 666", "E. 777"],
          answer: 2
        },
        {
          text: "The number □□2 is divisible by 4. Which pair could fill the blanks to make the smallest such 3-digit number?",
          choices: ["A. 102", "B. 112", "C. 122", "D. 132", "E. 142"],
          answer: 0
        },
        {
          text: "A 2-digit number is a perfect square and also has a digit sum that is a perfect square. Which number fits?",
          choices: ["A. 16", "B. 25", "C. 36", "D. 49", "E. 81"],
          answer: 2
        },
        {
          text: "A mystery number is between 50 and 60. When you add its digits, you get 8. What is the number?",
          choices: ["A. 53", "B. 54", "C. 56", "D. 57", "E. 58"],
          answer: 0
        },
        {
          text: "The hundreds digit of a 3-digit number is 4. Its tens digit is one more than its units digit. The sum of all digits is 10. What is the number?",
          choices: ["A. 412", "B. 421", "C. 432", "D. 443", "E. 454"],
          answer: 1
        },
        {
          text: "A 2-digit number reversed gives a number 45 less. The units digit of the original is 8. What is the original number?",
          choices: ["A. 38", "B. 48", "C. 58", "D. 68", "E. 78"],
          answer: 0
        },
        {
          text: "A 3-digit number's hundreds digit is the same as its units digit. Its tens digit is 0. The sum of all digits is 8. What is the number?",
          choices: ["A. 404", "B. 505", "C. 606", "D. 707", "E. 808"],
          answer: 0
        },
        {
          text: "The number □9□ has digits that sum to 18. Both hidden digits are the same. What is the number?",
          choices: ["A. 494", "B. 595", "C. 191", "D. 393", "E. 292"],
          answer: 0
        },
        {
          text: "A 2-digit number is 3 more than 4 times its units digit. The units digit is 4. What is the number?",
          choices: ["A. 17", "B. 19", "C. 26", "D. 28", "E. 34"],
          answer: 1
        },
        {
          text: "The number 1□8 is divisible by 9. What is □?",
          choices: ["A. 0", "B. 1", "C. 3", "D. 7", "E. 8"],
          answer: 0
        },
        {
          text: "A 2-digit number's digits differ by 2. The number is a multiple of 6 and less than 50. What is it?",
          choices: ["A. 24", "B. 36", "C. 42", "D. 48", "E. 12"],
          answer: 0
        },
        {
          text: "A mystery 2-digit number is greater than 40. When you multiply its digits, you get 8. What is the number?",
          choices: ["A. 41", "B. 42", "C. 44", "D. 48", "E. 81"],
          answer: 3
        },
        {
          text: "The number 3□6 is divisible by 6. What digit could □ be?",
          choices: ["A. 0", "B. 1", "C. 4", "D. 7", "E. 8"],
          answer: 0
        },
        {
          text: "A 2-digit number has digit sum 12 and is odd. The tens digit is smaller than the units digit. What is the number?",
          choices: ["A. 39", "B. 48", "C. 57", "D. 75", "E. 93"],
          answer: 0
        },
        {
          text: "A 3-digit number between 200 and 300 has its tens and units digits swapped to get 243. What is the original number?",
          choices: ["A. 234", "B. 243", "C. 324", "D. 342", "E. 432"],
          answer: 0
        },
        {
          text: "The number □□5 is divisible by 5. Its digit sum is 11. What is the hundreds digit if the tens digit is 3?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "A 2-digit number is 7 times its units digit. The units digit is not 0. What is the number?",
          choices: ["A. 14", "B. 21", "C. 35", "D. 42", "E. 49"],
          answer: 2
        },
        {
          text: "A mystery number between 30 and 40 is divisible by 8. What is it?",
          choices: ["A. 30", "B. 32", "C. 35", "D. 38", "E. 40"],
          answer: 1
        },
        {
          text: "The sum of a 2-digit number and its reverse is 110. What could the number be?",
          choices: ["A. 14", "B. 32", "C. 41", "D. 55", "E. 46"],
          answer: 3
        },
        {
          text: "The number 5□0 is divisible by 4. What digit could □ be?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 6"],
          answer: 2
        },
        {
          text: "A 3-digit number's middle digit is 5. The first digit is one less than the last digit. The digit sum is 13. What is the number?",
          choices: ["A. 354", "B. 453", "C. 456", "D. 357", "E. 258"],
          answer: 0
        },
        {
          text: "A 2-digit number has digit sum 6 and is divisible by 6. What is it?",
          choices: ["A. 15", "B. 24", "C. 33", "D. 42", "E. 60"],
          answer: 1
        },
        {
          text: "A 2-digit number reversed adds 27 to it. The tens digit of the reversed number is 6. What is the original number?",
          choices: ["A. 36", "B. 63", "C. 39", "D. 93", "E. 69"],
          answer: 0
        },
        {
          text: "The number □□ is between 40 and 50, is odd, and its digits sum to 11. What is it?",
          choices: ["A. 41", "B. 43", "C. 45", "D. 47", "E. 49"],
          answer: 3
        },
        {
          text: "A 3-digit number has the same hundreds and units digit. The tens digit is 0. The number is divisible by 9. What could the number be?",
          choices: ["A. 909", "B. 808", "C. 707", "D. 606", "E. 505"],
          answer: 0
        },
        {
          text: "The product of digits of a 2-digit number is 18 and the tens digit is less than the units digit. What is the number?",
          choices: ["A. 29", "B. 36", "C. 63", "D. 92", "E. 39"],
          answer: 1
        },
        {
          text: "A mystery number is a 3-digit even number, between 500 and 600, with digit sum 14 and units digit 6. What is the tens digit?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "The number □7□ has digit sum 16. Both missing digits are equal. What is the number?",
          choices: ["A. 474", "B. 373", "C. 575", "D. 272", "E. 979"],
          answer: 0
        },
        {
          text: "A 2-digit number is increased by 9 when its digits are reversed. The sum of the digits is 7 and the original tens digit is 3. What is the number?",
          choices: ["A. 34", "B. 43", "C. 25", "D. 52", "E. 16"],
          answer: 0
        }
      ]
    },

    "7.1": {
      title: "7.1 Maze Navigation",
      questions: [
        {
          text: "In a 3×3 grid maze, you start at the top-left corner. You can move right or down only. How many different paths lead to the bottom-right corner?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 8"],
          answer: 3
        },
        {
          text: "A robot moves 3 steps right, 2 steps up, 1 step left, and 4 steps down. Where does it end up relative to its start?",
          choices: ["A. 2 right, 2 down", "B. 2 right, 1 down", "C. 2 right, 2 up", "D. 1 right, 2 down", "E. 4 right, 2 down"],
          answer: 0
        },
        {
          text: "In a maze, you can only go North, South, East, or West. Starting at (0,0), after N, E, E, S, W, where are you?",
          choices: ["A. (1, 0)", "B. (0, 1)", "C. (1, 1)", "D. (0, 0)", "E. (2, 0)"],
          answer: 0
        },
        {
          text: "A path enters a 4×4 grid at the top-left and must exit at the bottom-right. Moving only right or down, what is the minimum number of steps?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "In a 2×2 grid, how many paths go from the top-left to the bottom-right using only right and down moves, without revisiting any cell?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 6"],
          answer: 1
        },
        {
          text: "A robot starts at point A and walks 4 steps East, then 3 steps North. How many steps is it from its starting point (straight-line distance in steps along the grid)?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 4", "E. 3"],
          answer: 2
        },
        {
          text: "On a 4×4 grid, how many different routes are there from the top-left corner to the bottom-right corner moving only right or down?",
          choices: ["A. 14", "B. 16", "C. 20", "D. 24", "E. 35"],
          answer: 2
        },
        {
          text: "A mouse in a maze starts at (0,0) and can only move right (+1,0) or up (0,+1). How many paths reach (2,3)?",
          choices: ["A. 6", "B. 8", "C. 10", "D. 12", "E. 15"],
          answer: 2
        },
        {
          text: "Starting at position (0,0), a robot follows: E, E, N, N, W, S. What is the robot's final position?",
          choices: ["A. (1, 1)", "B. (2, 1)", "C. (0, 0)", "D. (1, 0)", "E. (2, 0)"],
          answer: 0
        },
        {
          text: "A maze has 3 rows and 4 columns. Moving only right or down, how many different paths go from the top-left to the bottom-right?",
          choices: ["A. 8", "B. 10", "C. 12", "D. 15", "E. 20"],
          answer: 1
        },
        {
          text: "Anna walks 5 blocks North, 3 blocks East, 2 blocks South, and 1 block West. How many blocks North of her start is she?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 7"],
          answer: 1
        },
        {
          text: "A grid is 3 wide and 2 tall. Moving only right or down, how many paths go from the top-left corner to the bottom-right corner?",
          choices: ["A. 3", "B. 4", "C. 6", "D. 8", "E. 10"],
          answer: 2
        },
        {
          text: "A robot starts at (0,0). It moves: 2 right, 3 up, 1 left, 1 down. What is its final position?",
          choices: ["A. (1, 2)", "B. (2, 2)", "C. (1, 3)", "D. (3, 2)", "E. (0, 2)"],
          answer: 0
        },
        {
          text: "On a city map, streets run only North-South or East-West. Tom walks from corner A to corner B, which is 3 blocks East and 2 blocks North. What is the shortest walking distance in blocks?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "How many different shortest paths are there from A to B on a grid where B is 3 blocks East and 2 blocks North of A?",
          choices: ["A. 6", "B. 8", "C. 10", "D. 12", "E. 15"],
          answer: 2
        },
        {
          text: "A robot at (0,0) follows these instructions: N, N, E, S, E, E, S. What is its final position?",
          choices: ["A. (3, 0)", "B. (3, -1)", "C. (2, 0)", "D. (3, 1)", "E. (2, -1)"],
          answer: 0
        },
        {
          text: "In a 3×3 grid, a bug travels from the top-left to the bottom-right by moving only right or down. If one square in the middle row is blocked, how many paths remain?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "Maria walks 6 steps East, then turns and walks 4 steps West. How many steps East of her start is she?",
          choices: ["A. 10", "B. 4", "C. 2", "D. 6", "E. 8"],
          answer: 2
        },
        {
          text: "A path from (0,0) to (4,0) on a number line takes steps of +1 or -1. What is the minimum number of steps to reach (4,0) without going below 0?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 0
        },
        {
          text: "In a 2×4 grid (2 rows, 4 columns), how many paths go from the top-left to the bottom-right corner moving only right or down?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 8"],
          answer: 2
        },
        {
          text: "A child walks through a park on a grid. Starting at corner A, she walks 4 blocks East and 1 block North to reach corner B. How many shortest routes are possible?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 8", "E. 10"],
          answer: 1
        },
        {
          text: "A robot at the centre of a 5×5 grid (position (2,2)) moves: 1 right, 2 up, 1 left. What is its new position?",
          choices: ["A. (2, 4)", "B. (3, 4)", "C. (2, 3)", "D. (1, 4)", "E. (3, 3)"],
          answer: 0
        },
        {
          text: "On a grid, point A is at (1,1) and point B is at (3,4). Moving only right or up, how many steps is the shortest path from A to B?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "A maze has a 3×3 grid where the centre cell is blocked. Moving only right or down from top-left to bottom-right, how many paths are there?",
          choices: ["A. 0", "B. 2", "C. 4", "D. 6", "E. 8"],
          answer: 1
        },
        {
          text: "Sam enters a maze at the North side and exits at the South side. He turns left (W), then right (S), then left (E), then right (S). Which direction is he now heading?",
          choices: ["A. North", "B. South", "C. East", "D. West", "E. He is lost"],
          answer: 1
        },
        {
          text: "How many different paths of length exactly 6 steps (right or down only) go from (0,0) to (3,3)?",
          choices: ["A. 10", "B. 15", "C. 20", "D. 24", "E. 30"],
          answer: 2
        },
        {
          text: "A treasure map says: start at the oak tree, go 3 steps East, 4 steps North, 1 step West, 2 steps South. How far North of the oak tree is the treasure?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 6"],
          answer: 1
        },
        {
          text: "A grid is 5 columns wide and 3 rows tall. What is the minimum number of steps (right or down) to cross from the top-left to the bottom-right?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 10"],
          answer: 1
        },
        {
          text: "Tim walks a route: 2 North, 3 East, 2 South, 1 West. How far East of his starting point does he end up?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 0"],
          answer: 1
        },
        {
          text: "On a 3×3 grid, a path must pass through the centre square. Moving only right or down, how many paths from top-left to bottom-right pass through the centre?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "A robot is at position (2,3) on a grid. After moving 3 steps right and 2 steps down, what is its new position?",
          choices: ["A. (5, 1)", "B. (5, 5)", "C. (4, 5)", "D. (5, 4)", "E. (4, 4)"],
          answer: 0
        },
        {
          text: "How many paths of length 4 steps (right or down only) exist from (0,0) to (2,2)?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 8", "E. 10"],
          answer: 2
        },
        {
          text: "A mouse must travel from one corner of a 4×4 grid to the opposite corner, moving only right or down. One cell in the path is blocked. How many cells does the shortest unblocked path pass through?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "Maya starts at (0,0) and reaches (4,3) by moving only right or up. She always takes the same number of steps. How many steps does she take in total?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 3
        },
        {
          text: "A robot follows the directions: E, E, S, S, W, W, N. Where does it end up relative to its start?",
          choices: ["A. 0 right, 1 down", "B. 1 right, 1 down", "C. 0 right, 0 down", "D. 2 right, 2 down", "E. 1 left, 1 down"],
          answer: 0
        },
        {
          text: "On a 4×5 grid (4 columns, 5 rows), how many steps are needed to travel from the top-left to the bottom-right using only right or down moves?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "Jake walks from home to school: 3 blocks East, 5 blocks North, 1 block West, 2 blocks South. How far North of home is the school?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "In a 3×4 grid (3 rows, 4 columns), how many shortest paths exist from the top-left to the bottom-right corner (moving only right or down)?",
          choices: ["A. 10", "B. 12", "C. 15", "D. 18", "E. 20"],
          answer: 0
        },
        {
          text: "A grid has rows A, B, C (top to bottom) and columns 1, 2, 3 (left to right). Starting at A1 and moving only right or down, how many paths reach C3?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 8"],
          answer: 3
        },
        {
          text: "Leo walks 4 blocks West, 3 blocks North, 2 blocks East. What is his total displacement from the start (how far and which direction)?",
          choices: ["A. 2 West, 3 North", "B. 4 West, 3 North", "C. 2 East, 3 North", "D. 3 West, 3 North", "E. 1 West, 3 North"],
          answer: 0
        },
        {
          text: "A maze map shows a 2×3 grid. Starting at the top-left and ending at the bottom-right (moving only right or down), which of the following is the total number of different routes?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 6", "E. 8"],
          answer: 1
        },
        {
          text: "A robot starts at (0,0) and moves to (3,2) using only right and up steps. How many different paths can it take?",
          choices: ["A. 5", "B. 8", "C. 10", "D. 12", "E. 15"],
          answer: 2
        },
        {
          text: "A boy walks 6 steps forward, turns right, walks 4 steps, turns right again, walks 6 steps. How far from his starting position is he?",
          choices: ["A. 0", "B. 2", "C. 4", "D. 6", "E. 8"],
          answer: 2
        },
        {
          text: "On a grid, start at (0,0). Move right 2, up 3, left 1, down 1. What are the final coordinates?",
          choices: ["A. (1, 2)", "B. (2, 2)", "C. (1, 3)", "D. (3, 2)", "E. (2, 3)"],
          answer: 0
        },
        {
          text: "A 3×3 grid maze allows movement only right or down. A wall blocks the move from (1,0) to (1,1). How many paths remain from (0,0) to (2,2)?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "Anna is at position 5 on a number line. She moves 3 steps right and then 7 steps left. Where is she now?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 0
        },
        {
          text: "From town P to town Q, you can go through one of 3 different roads. Then from Q to R, there are 4 different roads. How many different routes from P to R via Q are there?",
          choices: ["A. 7", "B. 9", "C. 10", "D. 12", "E. 16"],
          answer: 3
        },
        {
          text: "A robot walks on a grid. Starting at (0,0), it goes East 5, North 3, West 2, South 1. How far East of the start is it?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 7"],
          answer: 1
        },
        {
          text: "In a 5×5 grid, how many paths of minimum length (only right or down moves) go from the top-left to the bottom-right?",
          choices: ["A. 40", "B. 56", "C. 70", "D. 90", "E. 120"],
          answer: 2
        },
        {
          text: "A maze has 4 decision points. At each point you can go left or right. How many different routes through the maze are possible?",
          choices: ["A. 4", "B. 8", "C. 12", "D. 16", "E. 24"],
          answer: 3
        },
      ]
    },

    "7.2": {
      title: "7.2 Ladder / Path Problems",
      questions: [
        {
          text: "A frog can jump 1 or 2 steps at a time up a 5-step ladder. How many different ways can it reach the top?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 3
        },
        {
          text: "On a number line from 1 to 10, a grasshopper jumps in steps of 3. Starting at 1, which numbers can it reach?",
          choices: ["A. 1, 4, 7, 10", "B. 1, 3, 6, 9", "C. 1, 2, 5, 8", "D. 3, 6, 9", "E. 1, 4, 7"],
          answer: 0
        },
        {
          text: "A ladder has 10 rungs. A cat climbs up 3 and down 1 each cycle. Starting at the ground (rung 0), after 4 cycles, which rung is the cat on?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "From town A to B there are 3 roads. From B to C there are 2 roads. How many different routes lead from A to C via B?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 8", "E. 12"],
          answer: 2
        },
        {
          text: "A snail climbs 5 m during the day but slides 2 m back at night. A well is 17 m deep. On which day does the snail first reach the top?",
          choices: ["A. Day 4", "B. Day 5", "C. Day 6", "D. Day 7", "E. Day 8"],
          answer: 1
        },
        {
          text: "A snail climbs 3 rungs up and slides 1 rung down each minute. Starting at rung 0, how many minutes does it take to reach rung 10?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 1
        },
        {
          text: "A frog sits on lily pad 1. Each jump it moves 2 lily pads forward, then 1 lily pad back. After 4 complete jumps (each jump = forward then back), which lily pad is it on?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "How many ways can you climb 4 stairs if you can take 1 or 2 steps at a time?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "Starting at 0 on a number line, a kangaroo hops +5 then -2 repeatedly. Where is it after 6 hops (3 cycles of +5, -2)?",
          choices: ["A. 7", "B. 8", "C. 9", "D. 10", "E. 11"],
          answer: 2
        },
        {
          text: "A frog starts at step 0. It jumps 3 steps forward and 1 step back each round. After 5 rounds, which step is it on?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 11", "E. 12"],
          answer: 2
        },
        {
          text: "A child climbs 6 stairs. She can take 1 or 2 steps at a time. How many different ways can she reach the top?",
          choices: ["A. 8", "B. 10", "C. 12", "D. 13", "E. 15"],
          answer: 3
        },
        {
          text: "A ball bounces on stepping stones numbered 0 to 12. It starts at 0 and jumps +4 each time. Which stones does it land on?",
          choices: ["A. 4, 8, 12", "B. 0, 4, 8, 12", "C. 4, 8", "D. 0, 4, 8", "E. 2, 6, 10"],
          answer: 1
        },
        {
          text: "A snail climbs 4 cm up a pole each day and slides 1 cm down each night. The pole is 13 cm tall. On which day does it first reach the top?",
          choices: ["A. Day 3", "B. Day 4", "C. Day 5", "D. Day 6", "E. Day 7"],
          answer: 1
        },
        {
          text: "A frog is on lily pad 2. It can jump forward 3 pads or backward 1 pad. If it makes 3 forward jumps and 1 backward jump (in any order), where does it end up?",
          choices: ["A. 9", "B. 10", "C. 10", "D. 11", "E. 12"],
          answer: 3
        },
        {
          text: "On a number line, a rabbit starts at 1 and hops to positions 1, 3, 6, 10, 15, … What is the next number in this sequence?",
          choices: ["A. 18", "B. 20", "C. 21", "D. 22", "E. 25"],
          answer: 2
        },
        {
          text: "A staircase has 7 steps. A puppy can jump 1 or 2 steps. How many ways can it reach step 7?",
          choices: ["A. 13", "B. 17", "C. 19", "D. 21", "E. 25"],
          answer: 3
        },
        {
          text: "Starting at 0, a bug hops +3 each time. After how many hops will it first reach 15?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "A snail is at the bottom of a 12-rung ladder. Each hour it climbs 4 rungs and slips back 2. How many hours to reach the top?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 1
        },
        {
          text: "A frog can jump exactly 2 or 3 lily pads forward. Starting at pad 0, which pad can it reach in the fewest jumps to get to pad 7?",
          choices: ["A. 2 jumps", "B. 3 jumps", "C. 4 jumps", "D. 5 jumps", "E. It cannot reach pad 7"],
          answer: 1
        },
        {
          text: "A number line goes from 0 to 20. A grasshopper starts at 2 and jumps +4 each time. Which of the following does it land on?",
          choices: ["A. 14", "B. 15", "C. 16", "D. 17", "E. 19"],
          answer: 0
        },
        {
          text: "A snail climbs 2 rungs up and 1 rung down each cycle. Starting at rung 0, after how many full cycles is it first at or above rung 7?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "A cat is on rung 5 of a 15-rung ladder. Each minute it jumps up 3 rungs. After 3 minutes, which rung is it on?",
          choices: ["A. 11", "B. 13", "C. 14", "D. 15", "E. 17"],
          answer: 2
        },
        {
          text: "How many ways can you climb 3 stairs taking 1 or 2 steps at a time?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 1
        },
        {
          text: "A frog starts at stone 1. It jumps to stone 3, then to stone 6, then to stone 10. What is the pattern, and which stone comes next?",
          choices: ["A. 13", "B. 14", "C. 15", "D. 16", "E. 17"],
          answer: 2
        },
        {
          text: "Starting at 20 on a number line, a cricket hops -3 each time. After 5 hops, where is it?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "A monkey climbs a 20-rung ladder. Each minute it goes up 5 rungs, but slips back 2 rungs. Starting at rung 0, after 4 minutes, which rung is it on?",
          choices: ["A. 10", "B. 11", "C. 12", "D. 13", "E. 15"],
          answer: 2
        },
        {
          text: "A frog must reach lily pad 9 starting from lily pad 0. It can jump +2 or +3. What is the minimum number of jumps needed?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 0
        },
        {
          text: "On stepping stones 1–12, a child skips every second stone starting from stone 1. Which stones does she step on?",
          choices: ["A. 1, 3, 5, 7, 9, 11", "B. 2, 4, 6, 8, 10, 12", "C. 1, 2, 4, 8", "D. 1, 4, 7, 10", "E. 3, 6, 9, 12"],
          answer: 0
        },
        {
          text: "A slug climbs 3 cm up a stick each morning and slides 1 cm down each night. The stick is 10 cm tall. On which morning does the slug first reach the top?",
          choices: ["A. Morning 4", "B. Morning 5", "C. Morning 6", "D. Morning 7", "E. Morning 8"],
          answer: 1
        },
        {
          text: "A frog at position 0 jumps +3 forward then -1 backward alternately. What is its position after 6 jumps (3 forward, 3 backward)?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "Lily pads are numbered 1 to 15. A frog starts at pad 3 and jumps +4 each time. Which pad does it land on after 3 jumps?",
          choices: ["A. 13", "B. 14", "C. 15", "D. 16", "E. 17"],
          answer: 2
        },
        {
          text: "A staircase has 8 steps. In how many ways can you climb it taking 1 or 2 steps at a time?",
          choices: ["A. 21", "B. 28", "C. 34", "D. 42", "E. 55"],
          answer: 2
        },
        {
          text: "Stones are placed at positions 0, 4, 8, 12, 16 along a path. A frog starts at 0 and can jump exactly 4 steps. How many stones can it reach between 0 and 16 (inclusive)?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "Starting at 0, Zara hops +6 on odd hops and -2 on even hops. Where is she after 4 hops?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "A worm is climbing a 9-rung ladder. Each hour it climbs 2 rungs up and slips 1 rung down. Starting at rung 0, after 8 hours, which rung is it on?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "A kangaroo on a number line starts at 5. It hops +3 twice, then -2 once. Where does it end up?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 11", "E. 12"],
          answer: 3
        },
        {
          text: "How many ways can you climb 5 stairs if each step you can go up 1 or 2 stairs?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 3
        },
        {
          text: "Milo is at rung 0 on a ladder with 12 rungs. He climbs 3 rungs each minute but rests every 3 minutes and slips back 1 rung. How many rungs does he reach after 3 minutes of climbing (before the slip)?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 3
        },
        {
          text: "A sequence of hops on a number line: 0, 2, 5, 9, 14, … What is the next number?",
          choices: ["A. 18", "B. 19", "C. 20", "D. 21", "E. 22"],
          answer: 2
        },
        {
          text: "A beetle starts at leaf 0. It crawls +5 to reach leaf 5, then -2 to reach leaf 3, then +5 to reach leaf 8, then -2 to reach leaf 6. Continuing this pattern, which leaf does it reach on the 5th forward jump?",
          choices: ["A. 11", "B. 12", "C. 13", "D. 14", "E. 15"],
          answer: 2
        },
        {
          text: "A snail is climbing a pole 8 cm tall. It climbs 3 cm up each morning but slides 2 cm down at night. On which morning does it first reach the top (8 cm)?",
          choices: ["A. Morning 5", "B. Morning 6", "C. Morning 7", "D. Morning 8", "E. Morning 9"],
          answer: 1
        },
        {
          text: "Jake starts at position 10 on a number line. He hops -4 each time. After 3 hops, where is he?",
          choices: ["A. -1", "B. -2", "C. 0", "D. 1", "E. 2"],
          answer: 3
        },
        {
          text: "A rabbit jumps along a path. It starts at stone 0 and can jump +3 or +5 per jump. What is the smallest stone number it can reach using exactly 3 jumps?",
          choices: ["A. 9", "B. 10", "C. 11", "D. 12", "E. 13"],
          answer: 0
        },
        {
          text: "Stepping stones are placed at 0, 3, 6, 9, 12, 15, 18. A frog lands on every stone that is a multiple of 6. Which stones does it land on?",
          choices: ["A. 0, 6, 12, 18", "B. 3, 9, 15", "C. 6, 12, 18", "D. 6, 12", "E. 0, 6, 12"],
          answer: 0
        },
        {
          text: "A child climbing stairs reaches step 6 in 4 jumps. She jumped 2 steps three times and 1 step once. In how many different orders could she have made those jumps?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "Starting at 0, a frog hops +4 every time. A second frog starts at 0 and hops +6 every time. After how many hops of each does the first frog land on the same number as the second frog for the first time (other than 0)?",
          choices: ["A. 2 and 2", "B. 3 and 2", "C. 4 and 3", "D. 5 and 3", "E. 6 and 4"],
          answer: 1
        },
        {
          text: "A monkey climbs a 15-rung ladder. It climbs 4 rungs up and rests (slides back 1 rung) after every 4 rungs. How many rungs has it climbed after 2 complete cycles of (climb 4, slide 1)?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "Rania hops on a number line. She starts at 2 and hops forward 5 each time. After 4 hops, where is she?",
          choices: ["A. 20", "B. 21", "C. 22", "D. 23", "E. 24"],
          answer: 2
        },
        {
          text: "A frog on lily pad 0 jumps to pads 2, 4, 6, 8, … How many jumps to reach pad 16?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "A ball is dropped from step 10 of a staircase. It bounces up 3 steps then falls back 1 step each bounce. After 3 bounces (each = up 3, fall 1), how many steps has it risen in total from step 10?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        }
      ]
    },

    "8.1": {
      title: "8.1 Picture Completion",
      questions: [
        {
          text: "A 3x3 grid has the pattern: row 1 is circle/square/circle, row 2 is square/circle/square, row 3 is circle/square/?. What goes in the missing spot?",
          choices: ["A. Circle", "B. Square", "C. Triangle", "D. Star", "E. Diamond"],
          answer: 0
        },
        {
          text: "In a pattern where each row sums to 9, row 1 has 1, 5, 3 and row 2 has 4, 2, 3. What must be the missing number in row 3: ___, 6, 2?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 0
        },
        {
          text: "A 3x3 grid is filled with shapes so each row and column contains exactly one star, one circle, and one triangle. Row 1: star, circle, triangle. Row 2: triangle, star, circle. Row 3: circle, ?, star. What is the missing shape?",
          choices: ["A. Star", "B. Circle", "C. Triangle", "D. Square", "E. Diamond"],
          answer: 2
        },
        {
          text: "In a 4x4 grid, each number 1 to 4 appears exactly once per row and column. Row 1: 2, 3, 4, 1. Row 2: 3, ?, 1, 4. Row 3: 4, 1, 3, 2. Row 4: 1, 4, 2, 3. What is the missing number?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 1
        },
        {
          text: "A 3x3 magic square has every row, column, and diagonal summing to 15. The centre is 5, top-middle is 1, bottom-middle is 9, middle-left is 3, middle-right is 7. What is the top-left corner?",
          choices: ["A. 2", "B. 4", "C. 6", "D. 8", "E. 10"],
          answer: 3
        },
        {
          text: "A 2x4 tile pattern repeats: triangle, circle, triangle, circle in row 1. Row 2 starts: circle, triangle, circle, ?. What is the missing shape?",
          choices: ["A. Circle", "B. Triangle", "C. Square", "D. Star", "E. Diamond"],
          answer: 1
        },
        {
          text: "A sequence of tiles follows the rule that each tile has one more dot than the previous. Tile 1 has 2 dots, tile 2 has 3 dots, tile 3 has 4 dots. How many dots does tile 6 have?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "A 3x3 grid has numbers arranged so each row and each column adds to 12. Row 1: 3, 5, 4. Row 2: 6, 2, 4. Row 3: 3, ?, 4. What is the missing number?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "In a pattern grid, shaded squares form a diagonal. In a 4x4 grid, cells at row 1 col 1, row 2 col 2, row 3 col 3 are shaded. Which cell completes the diagonal?",
          choices: ["A. Row 4, col 1", "B. Row 4, col 3", "C. Row 4, col 4", "D. Row 3, col 4", "E. Row 1, col 4"],
          answer: 2
        },
        {
          text: "A repeating pattern of beads goes: red, red, blue, red, red, blue, ... What colour is the 13th bead?",
          choices: ["A. Red", "B. Blue", "C. Green", "D. Yellow", "E. Purple"],
          answer: 0
        },
        {
          text: "A 3x3 grid uses colours white and grey in a checkerboard pattern. If the top-left is white, how many grey squares are there in total?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 9"],
          answer: 1
        },
        {
          text: "A tile pattern repeats every 4 tiles: square, triangle, circle, star. What is the 19th tile?",
          choices: ["A. Square", "B. Triangle", "C. Circle", "D. Star", "E. Pentagon"],
          answer: 2
        },
        {
          text: "Each row of a grid doubles the previous row's number. Row 1: 1. Row 2: 2. Row 3: 4. What number is in row 5?",
          choices: ["A. 8", "B. 12", "C. 16", "D. 20", "E. 24"],
          answer: 2
        },
        {
          text: "A 3x3 grid has the letters A, B, C each appearing exactly once in each row and column. Row 1: A, B, C. Row 2: B, C, ?. What is the missing letter?",
          choices: ["A. A", "B. B", "C. C", "D. D", "E. E"],
          answer: 0
        },
        {
          text: "In a number grid, each column adds to 10. Column 1: 3, 4, 3. Column 2: 2, 5, 3. Column 3: 1, ?, 4. What is the missing number?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "A grid pattern has rows where row 1 has 1 square shaded, row 2 has 2 squares shaded, row 3 has 3 squares shaded. How many squares are shaded in row 5?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 1
        },
        {
          text: "In a repeating colour pattern: yellow, green, green, yellow, green, green, ... what colour is the 11th item?",
          choices: ["A. Yellow", "B. Green", "C. Blue", "D. Red", "E. Orange"],
          answer: 1
        },
        {
          text: "A 3x3 grid has each row and column containing the numbers 1, 2, 3 exactly once. Top row: 2, 1, 3. Middle row: 1, 3, 2. Bottom row: ?, 2, 1. What is the missing number?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "A grid shows a staircase pattern where row 1 has 1 filled cell, row 2 has 2, row 3 has 3. The missing piece is in row 4. How many cells should be filled?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 1
        },
        {
          text: "A 4x4 grid alternates between shaded and unshaded in a checkerboard pattern. Row 1, column 1 is shaded. What is row 3, column 2?",
          choices: ["A. Shaded", "B. Unshaded", "C. Striped", "D. Empty", "E. Cannot tell"],
          answer: 0
        },
        {
          text: "A number pattern grid has rows: 1, 2, 4 (row 1); 2, 4, 8 (row 2); 3, ?, 12 (row 3). Each row multiplies by a constant. What is the missing number?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "A 3x3 grid uses shapes where no shape repeats in any row or column: circle, square, triangle. Row 1: triangle, circle, square. Row 2: square, triangle, circle. Row 3: circle, ?, triangle. What shape is missing?",
          choices: ["A. Circle", "B. Triangle", "C. Square", "D. Star", "E. Pentagon"],
          answer: 2
        },
        {
          text: "A 2x3 grid follows the pattern: top row is 1, 3, 5 (odd numbers); bottom row is 2, 4, ?. What is the missing number?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 1
        },
        {
          text: "A sequence of figures has 1 dot in figure 1, 3 dots in figure 2, and 6 dots in figure 3 (triangular numbers). How many dots does figure 4 have?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 11", "E. 12"],
          answer: 2
        },
        {
          text: "A tile has a pattern: top-left dark, top-right light, bottom-left light, bottom-right dark. This tile is reflected horizontally. What is the new top-left?",
          choices: ["A. Dark", "B. Light", "C. Striped", "D. Empty", "E. Same as before"],
          answer: 1
        },
        {
          text: "In a 3x3 grid, each cell holds a number equal to the product of its row number and column number. What is the value in row 3, column 3?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 3
        },
        {
          text: "A grid pattern for a fence repeats: post, rail, rail, post, rail, rail, post, ... How many rails come before the 4th post?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "A 3x3 grid has each number from 1 to 9 placed once. The sum of each row is 15. Row 1: 2, 7, 6. Row 2: 9, 5, 1. Row 3: 4, ?, 2. What is the missing number?",
          choices: ["A. 7", "B. 8", "C. 9", "D. 3", "E. 6"],
          answer: 2
        },
        {
          text: "A pattern sequence alternates: small circle, large circle, small circle, large circle, ... Starting at position 1 with small, what is at position 10?",
          choices: ["A. Small", "B. Large", "C. Medium", "D. Square", "E. Triangle"],
          answer: 1
        },
        {
          text: "A colour grid has the rule that every cell is the opposite colour of the cell directly above it. Row 1 is all white. What colour is row 3?",
          choices: ["A. White", "B. Black", "C. Grey", "D. Red", "E. Blue"],
          answer: 0
        },
        {
          text: "A 4x4 grid uses the symbols *, #, @, and & exactly once per row and column. Row 1: *, #, @, &. Row 2: #, *, &, @. Row 3: @, &, *, ?. What is the missing symbol?",
          choices: ["A. *", "B. #", "C. @", "D. &", "E. !"],
          answer: 1
        },
        {
          text: "The left half of a symmetric figure has 3 squares in the top row and 2 squares in the bottom row. If the right half is a mirror image, how many squares are there in total?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 11", "E. 12"],
          answer: 2
        },
        {
          text: "A row of figures: each figure has one more side than the previous. Figure 1 is a triangle (3 sides). What shape is Figure 4?",
          choices: ["A. Triangle", "B. Square", "C. Pentagon", "D. Hexagon", "E. Heptagon"],
          answer: 3
        },
        {
          text: "A repeating pattern has 1 shaded square, then 2 unshaded, then 1 shaded, then 2 unshaded, and so on. How many shaded squares are in the first 12 squares?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "A 3x3 grid has cells numbered 1 to 9 left to right, top to bottom. The middle column has cells 2, 5, 8. If those are removed, which numbers remain?",
          choices: ["A. 1, 3, 4, 6, 7, 9", "B. 1, 2, 3, 4, 5, 6", "C. 4, 5, 6, 7, 8, 9", "D. 1, 3, 7, 9 only", "E. 2, 4, 6, 8 only"],
          answer: 0
        },
        {
          text: "A grid pattern repeats a 2x2 block: top-left dark, top-right light, bottom-left light, bottom-right dark. In a 4x4 grid using this tile, how many dark cells are there?",
          choices: ["A. 4", "B. 6", "C. 8", "D. 10", "E. 12"],
          answer: 2
        },
        {
          text: "A sequence of triangle figures: the 1st has 1 triangle, the 2nd has 3, the 3rd has 5 (each adds 2). How many triangles are in the 7th figure?",
          choices: ["A. 11", "B. 12", "C. 13", "D. 14", "E. 15"],
          answer: 2
        },
        {
          text: "A 3x3 grid has each row multiplied by a constant factor: row 1 is 1, 2, 3; row 2 is 2, 4, 6; row 3 is ?, 6, 9. What is the missing number?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 1
        },
        {
          text: "A pattern alternates between pointing-up and pointing-down triangles: up, down, up, down, ... What direction is the 15th triangle pointing?",
          choices: ["A. Up", "B. Down", "C. Sideways", "D. Cannot tell", "E. Neither"],
          answer: 0
        },
        {
          text: "A 2x5 grid has numbers where each column adds to 7. Top row: 3, 1, 4, 2, 5. What is the sum of all numbers in the bottom row?",
          choices: ["A. 15", "B. 20", "C. 25", "D. 30", "E. 35"],
          answer: 2
        },
        {
          text: "A figure series shows: row 1 has 1 dot, row 2 has 3 dots, row 3 has 5 dots (odd numbers growing). How many dots are in row 8?",
          choices: ["A. 13", "B. 14", "C. 15", "D. 16", "E. 17"],
          answer: 2
        },
        {
          text: "A colouring pattern has every 3rd cell coloured red and all others blue. In 15 cells, how many are red?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "A 3x3 grid uses only the numbers 1 and 2. Each row and column must have a sum of 4. Row 1: 2, 1, 1. Row 2: 1, 1, 2. Row 3: ?, 2, 1. What is the missing number?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 4"],
          answer: 1
        },
        {
          text: "A staircase of squares: step 1 has 1 square, step 2 has 3 squares (1+2), step 3 has 6 squares (1+2+3). How many squares total in step 5?",
          choices: ["A. 10", "B. 12", "C. 14", "D. 15", "E. 16"],
          answer: 3
        },
        {
          text: "A pattern grid has each cell equal to the sum of the cell above and the cell to its left. Top row: 1, 2, 3. Left column at rows 1, 2, 3 is 1, 2, 3. What is the value in row 2, column 2?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 1
        },
        {
          text: "In a 3x3 grid, circles appear only along both diagonals. How many circles are there in total? (The centre square is on both diagonals.)",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 1
        },
        {
          text: "A grid sequence shows: row 1 has 2 shaded cells, row 2 has 4, row 3 has 6. Following this pattern, how many shaded cells are in row 6?",
          choices: ["A. 8", "B. 10", "C. 12", "D. 14", "E. 16"],
          answer: 2
        },
        {
          text: "A 3x3 grid has each cell equal to the product of its row number and column number. What is the sum of the entire grid?",
          choices: ["A. 24", "B. 30", "C. 36", "D. 40", "E. 45"],
          answer: 2
        },
        {
          text: "A tile pattern repeats in groups of 5: diamond, heart, diamond, heart, star. What is the 23rd tile?",
          choices: ["A. Diamond", "B. Heart", "C. Star", "D. Circle", "E. Square"],
          answer: 0
        },
        {
          text: "A sequence starts: 1, 1, 2, 3, 5, 8, ... where each number is the sum of the two before it. What is the next number after 8?",
          choices: ["A. 10", "B. 11", "C. 12", "D. 13", "E. 14"],
          answer: 3
        }
      ]
    },

    "8.2": {
      title: "8.2 Image Selection",
      questions: [
        {
          text: "A square piece of paper is folded in half diagonally and then a hole is punched through the folded corner. When unfolded, how many holes are there?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 1
        },
        {
          text: "A square paper is folded in half vertically, then folded in half horizontally, and one corner is cut off. When unfolded, how many cut corners are visible?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 3
        },
        {
          text: "From these 5 arrangements of 6 squares, which one CANNOT fold into a cube? A: T-shape (4 in a row, one square on each side of the 2nd). B: Cross-shape (4 in a column, one on each side of the 2nd). C: Straight line of 6. D: L-shape with 4 in a row and 2 more on one end. E: Z-shape of 6.",
          choices: ["A. T-shape", "B. Cross-shape", "C. Straight line of 6", "D. L-shape", "E. Z-shape"],
          answer: 2
        },
        {
          text: "A picture of an arrow pointing to the right is reflected (flipped) horizontally. Which direction does the arrow point after the flip?",
          choices: ["A. Right", "B. Left", "C. Up", "D. Down", "E. Diagonally"],
          answer: 1
        },
        {
          text: "Among a circle, equilateral triangle, square, and regular pentagon, which shape has the MOST lines of symmetry?",
          choices: ["A. Triangle (3)", "B. Square (4)", "C. Pentagon (5)", "D. Circle (infinite)", "E. All are equal"],
          answer: 3
        },
        {
          text: "Which of these shapes has exactly 4 lines of symmetry?",
          choices: ["A. Rectangle", "B. Square", "C. Equilateral triangle", "D. Regular hexagon", "E. Circle"],
          answer: 1
        },
        {
          text: "A rectangle is folded in half lengthwise and then cut diagonally from one corner to the opposite corner. When unfolded, what shape do you get?",
          choices: ["A. Rectangle", "B. Triangle", "C. Diamond (rhombus)", "D. Two triangles", "E. Trapezoid"],
          answer: 2
        },
        {
          text: "Which shape is the odd one out: equilateral triangle, isosceles triangle, right triangle, square, scalene triangle?",
          choices: ["A. Equilateral triangle", "B. Isosceles triangle", "C. Right triangle", "D. Square", "E. Scalene triangle"],
          answer: 3
        },
        {
          text: "Which of these has the most sides: triangle, square, pentagon, hexagon, or octagon?",
          choices: ["A. Triangle", "B. Square", "C. Pentagon", "D. Hexagon", "E. Octagon"],
          answer: 4
        },
        {
          text: "A square is rotated 90 degrees clockwise. Which corner is now at the position where the top-left corner was?",
          choices: ["A. Top-left", "B. Top-right", "C. Bottom-right", "D. Bottom-left", "E. The centre"],
          answer: 3
        },
        {
          text: "A shape has 3 sides, all equal length, and 3 equal angles. What is it called?",
          choices: ["A. Right triangle", "B. Isosceles triangle", "C. Equilateral triangle", "D. Scalene triangle", "E. Obtuse triangle"],
          answer: 2
        },
        {
          text: "Which figure is the odd one out: a shape with 4 sides and 4 right angles and all sides equal; a shape with 4 sides and 4 right angles but sides of different lengths; a shape with 4 sides and 2 pairs of parallel sides but no right angles; a shape with 3 sides; a shape with 5 sides?",
          choices: ["A. Square", "B. Rectangle", "C. Parallelogram", "D. Triangle", "E. Pentagon"],
          answer: 3
        },
        {
          text: "A triangular piece of paper is folded so that one vertex touches the midpoint of the opposite side. What is the shape of the lower part?",
          choices: ["A. Triangle", "B. Square", "C. Trapezoid", "D. Rectangle", "E. Pentagon"],
          answer: 2
        },
        {
          text: "How many lines of symmetry does a regular hexagon have?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 6", "E. 8"],
          answer: 3
        },
        {
          text: "A shape has 4 sides. Two sides are parallel and of equal length, but the other two sides are not parallel. What shape is this?",
          choices: ["A. Square", "B. Rectangle", "C. Parallelogram", "D. Trapezoid", "E. Rhombus"],
          answer: 3
        },
        {
          text: "A circular piece of paper is folded in half three times. After unfolding, how many equal sections are there?",
          choices: ["A. 3", "B. 4", "C. 6", "D. 8", "E. 16"],
          answer: 3
        },
        {
          text: "Which of these shapes is NOT a polygon (a shape with straight sides only)?",
          choices: ["A. Triangle", "B. Rectangle", "C. Circle", "D. Pentagon", "E. Hexagon"],
          answer: 2
        },
        {
          text: "A regular octagon has 8 equal sides. How many lines of symmetry does it have?",
          choices: ["A. 4", "B. 6", "C. 8", "D. 10", "E. 16"],
          answer: 2
        },
        {
          text: "A square piece of paper is folded along its diagonal. The resulting shape is:",
          choices: ["A. A smaller square", "B. A rectangle", "C. A right triangle", "D. A trapezoid", "E. A pentagon"],
          answer: 2
        },
        {
          text: "Which description makes the shape the odd one out? A: 4 right angles. B: 2 pairs of parallel sides. C: All sides equal. D: 3 sides. E: 4 sides.",
          choices: ["A. Four right angles", "B. Two pairs of parallel sides", "C. All sides equal", "D. Three sides", "E. Four sides"],
          answer: 3
        },
        {
          text: "A square is divided into 4 smaller squares by drawing lines through the midpoints of each side. How many squares are there in total (counting the original and all smaller ones)?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 8", "E. 9"],
          answer: 1
        },
        {
          text: "An equilateral triangle is folded so the top vertex meets the midpoint of the base. The visible top part (above the fold) forms what shape?",
          choices: ["A. Triangle", "B. Rectangle", "C. Trapezoid", "D. Square", "E. Pentagon"],
          answer: 2
        },
        {
          text: "How many lines of symmetry does a rectangle (not a square) have?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 4", "E. Infinite"],
          answer: 2
        },
        {
          text: "Which shape below has exactly 0 lines of symmetry? A: Equilateral triangle. B: Square. C: Scalene triangle. D: Regular hexagon. E: Circle.",
          choices: ["A. Equilateral triangle", "B. Square", "C. Scalene triangle", "D. Regular hexagon", "E. Circle"],
          answer: 2
        },
        {
          text: "A star shape is formed by drawing two overlapping equilateral triangles (Star of David). How many points (tips) does the star have?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "A piece of paper shaped like a cross (plus sign, made of 5 squares in a + arrangement) is folded in half vertically. What shape results?",
          choices: ["A. Cross", "B. Rectangle", "C. T-shape", "D. L-shape", "E. Triangle"],
          answer: 2
        },
        {
          text: "Which shape has the property that all points on its boundary are the same distance from its centre?",
          choices: ["A. Square", "B. Rectangle", "C. Equilateral triangle", "D. Circle", "E. Regular hexagon"],
          answer: 3
        },
        {
          text: "A large square is divided into 4 equal smaller squares. Each smaller square is then divided into 2 triangles by a diagonal. How many triangles are there in total?",
          choices: ["A. 4", "B. 6", "C. 8", "D. 10", "E. 12"],
          answer: 2
        },
        {
          text: "A picture of the letter A is reflected vertically (flipped upside down). What does it most resemble?",
          choices: ["A. A", "B. V", "C. An upside-down A", "D. W", "E. H"],
          answer: 2
        },
        {
          text: "A hexagon can be divided into triangles by drawing lines from the centre to each vertex. How many triangles are formed?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "Which of these correctly describes a rhombus?",
          choices: ["A. All angles are right angles", "B. All sides are equal but angles may differ", "C. Only 2 sides are equal", "D. Only 1 pair of parallel sides", "E. No sides are equal"],
          answer: 1
        },
        {
          text: "A square piece of paper is folded in half horizontally (top half down onto bottom half), then folded in half vertically. A hole is punched in the exact centre. When fully unfolded, how many holes are there?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 8"],
          answer: 3
        },
        {
          text: "If a regular pentagon is rotated by 72 degrees, it looks exactly the same. How many times can it be rotated by 72 degrees before returning to the original position?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "A shape has 4 sides, all sides are equal, and all angles are right angles. Which shape is it?",
          choices: ["A. Rectangle", "B. Rhombus", "C. Parallelogram", "D. Square", "E. Trapezoid"],
          answer: 3
        },
        {
          text: "Which shape below has rotational symmetry of order 4 (looks the same after rotating 90 degrees)?",
          choices: ["A. Equilateral triangle", "B. Regular pentagon", "C. Square", "D. Scalene triangle", "E. Trapezoid"],
          answer: 2
        },
        {
          text: "A kite shape has 2 pairs of adjacent sides that are equal. How many lines of symmetry does a kite have?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 4", "E. Infinite"],
          answer: 1
        },
        {
          text: "A right isosceles triangle has two legs of equal length. When cut along its line of symmetry, two identical shapes are produced. What is each resulting shape?",
          choices: ["A. Square", "B. Rectangle", "C. Equilateral triangle", "D. Right triangle", "E. Rhombus"],
          answer: 3
        },
        {
          text: "A regular polygon has interior angles of 120 degrees. How many sides does it have?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "Two congruent rectangles, each 2 cm by 4 cm, are placed end-to-end along the short side. What are the dimensions of the resulting shape?",
          choices: ["A. 4 by 4", "B. 2 by 8", "C. 4 by 8", "D. 2 by 2", "E. 2 by 6"],
          answer: 1
        },
        {
          text: "A shape has 5 sides, all sides equal, all angles equal, and it has exactly 5 lines of symmetry. What is it called?",
          choices: ["A. Regular hexagon", "B. Regular pentagon", "C. Regular octagon", "D. Equilateral triangle", "E. Square"],
          answer: 1
        },
        {
          text: "A square is rotated 45 degrees and placed inside the original square aligned with its centre. How many triangular regions are created between the two squares?",
          choices: ["A. 2", "B. 4", "C. 6", "D. 8", "E. 12"],
          answer: 3
        },
        {
          text: "Which letter of the alphabet has exactly 1 vertical line of symmetry and 0 horizontal lines of symmetry? A: H. B: A. C: X. D: O. E: B.",
          choices: ["A. H", "B. A", "C. X", "D. O", "E. B"],
          answer: 1
        },
        {
          text: "A shape has exactly 1 line of symmetry and 4 sides. Which of the following could it be?",
          choices: ["A. Square", "B. Rectangle", "C. Kite", "D. Parallelogram", "E. Rhombus"],
          answer: 2
        },
        {
          text: "When a square piece of paper is folded twice (once horizontally and once vertically), the resulting shape is:",
          choices: ["A. A smaller square with 1/4 the area", "B. A rectangle with 1/2 the area", "C. A triangle", "D. The same size square", "E. A hexagon"],
          answer: 0
        },
        {
          text: "How many diagonals does a pentagon (5-sided polygon) have?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "A triangle has all three sides of different lengths and all three angles different. What type of triangle is it?",
          choices: ["A. Right triangle", "B. Equilateral triangle", "C. Isosceles triangle", "D. Scalene triangle", "E. Obtuse triangle"],
          answer: 3
        },
        {
          text: "Which of these transformations changes the SIZE of a shape?",
          choices: ["A. Rotation", "B. Reflection", "C. Translation (sliding)", "D. Enlargement", "E. All of the above"],
          answer: 3
        },
        {
          text: "An isosceles triangle has two equal sides of 5 cm and a base of 6 cm. How many lines of symmetry does it have?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. Infinite"],
          answer: 1
        },
        {
          text: "A shape is the same as its mirror image. We say the shape has:",
          choices: ["A. Rotational symmetry", "B. Line symmetry", "C. Translational symmetry", "D. No symmetry", "E. Point symmetry only"],
          answer: 1
        },
        {
          text: "Two squares share one side (are placed side by side). What is the name of the resulting shape?",
          choices: ["A. Square", "B. Rectangle", "C. Trapezoid", "D. Rhombus", "E. Pentagon"],
          answer: 1
        }
      ]
    },

    "8.3": {
      title: "8.3 3D Visualization & Rotation",
      questions: [
        {
          text: "A cube has 6 faces. How many edges does a cube have?",
          choices: ["A. 6", "B. 8", "C. 10", "D. 12", "E. 16"],
          answer: 3
        },
        {
          text: "How many vertices (corners) does a cube have?",
          choices: ["A. 4", "B. 6", "C. 8", "D. 10", "E. 12"],
          answer: 2
        },
        {
          text: "8 small unit cubes are glued together to form one 2x2x2 large cube. The outside is painted red. How many small cubes have no paint on them at all?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 4", "E. 6"],
          answer: 0
        },
        {
          text: "A cube has faces labelled 1 to 6 where opposite faces always sum to 7. If face 1 is on top and face 2 faces toward you, which number is on the bottom?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 3
        },
        {
          text: "27 small cubes form a 3x3x3 large cube. It is painted on all 6 faces, then broken apart. How many small cubes have exactly 2 painted faces?",
          choices: ["A. 8", "B. 10", "C. 12", "D. 16", "E. 18"],
          answer: 2
        },
        {
          text: "A rectangular box has dimensions 3 cm by 4 cm by 5 cm. What is its volume?",
          choices: ["A. 12 cm3", "B. 20 cm3", "C. 47 cm3", "D. 60 cm3", "E. 94 cm3"],
          answer: 3
        },
        {
          text: "How many unit cubes are needed to build a 3x3x3 large cube?",
          choices: ["A. 9", "B. 18", "C. 24", "D. 27", "E. 36"],
          answer: 3
        },
        {
          text: "A cube is painted red on all 6 faces and then cut into 27 equal small cubes. How many small cubes have exactly 3 red faces?",
          choices: ["A. 0", "B. 4", "C. 6", "D. 8", "E. 12"],
          answer: 3
        },
        {
          text: "A cube is painted red on all 6 faces and then cut into 27 equal small cubes. How many small cubes have exactly 1 red face?",
          choices: ["A. 0", "B. 4", "C. 6", "D. 8", "E. 12"],
          answer: 2
        },
        {
          text: "A cube is painted red on all 6 faces and then cut into 27 equal small cubes. How many small cubes have NO red faces?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 4"],
          answer: 1
        },
        {
          text: "A rectangular prism (box) has a square base of side 4 cm and a height of 3 cm. What is its volume?",
          choices: ["A. 24 cm3", "B. 36 cm3", "C. 48 cm3", "D. 64 cm3", "E. 72 cm3"],
          answer: 2
        },
        {
          text: "A shape made of 4 unit cubes arranged in an L-shape (3 in a row and 1 on top of the first) is viewed from the front. How many square faces are visible from the front view?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "If you rotate a square 90 degrees clockwise, which corner is now in the position where the top-left corner was?",
          choices: ["A. Top-left", "B. Top-right", "C. Bottom-right", "D. Bottom-left", "E. The centre"],
          answer: 3
        },
        {
          text: "A cube is balanced on one corner so it points straight up. How many faces are visible if you look from directly above?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "A pyramid has a square base and 4 triangular faces. How many faces does it have in total?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 1
        },
        {
          text: "A square-based pyramid has a square base and 4 triangular sides. How many edges does it have?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "A square-based pyramid has a square base and 4 triangular sides. How many vertices does it have?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 1
        },
        {
          text: "A cube with side length 2 cm is placed inside a cube with side length 4 cm. What is the volume of the space between the two cubes?",
          choices: ["A. 48 cm3", "B. 56 cm3", "C. 60 cm3", "D. 64 cm3", "E. 72 cm3"],
          answer: 1
        },
        {
          text: "A net of a cube shows 6 squares in a cross shape: one centre square, one square above, below, left, and right of it, and one more square below the bottom one. When folded, which square is opposite the top one?",
          choices: ["A. The left square", "B. The right square", "C. The extra square below", "D. The centre square", "E. Cannot be determined"],
          answer: 2
        },
        {
          text: "Stacking layers of unit cubes: layer 1 has 4 cubes in a 2x2 arrangement, layer 2 has 4 cubes, layer 3 has 4 cubes. How many unit cubes are there in total?",
          choices: ["A. 8", "B. 12", "C. 16", "D. 18", "E. 24"],
          answer: 1
        },
        {
          text: "A triangular prism has 2 triangular faces and 3 rectangular faces. How many faces does it have in total?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "A triangular prism has 2 triangular faces and 3 rectangular faces. How many edges does it have?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 3
        },
        {
          text: "A triangular prism has 2 triangular faces and 3 rectangular faces. How many vertices does it have?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "A cube has edges of length 3 cm each. What is the total surface area of the cube?",
          choices: ["A. 27 cm2", "B. 36 cm2", "C. 48 cm2", "D. 54 cm2", "E. 72 cm2"],
          answer: 3
        },
        {
          text: "A rectangular block of dimensions 2 by 3 by 4 is painted on all surfaces and then cut into unit cubes. How many unit cubes have exactly 0 painted faces?",
          choices: ["A. 0", "B. 2", "C. 4", "D. 6", "E. 8"],
          answer: 1
        },
        {
          text: "An L-shaped solid is formed by taking a 3x3x3 cube and removing a 1x1x1 cube from one corner. How many unit cubes remain?",
          choices: ["A. 25", "B. 26", "C. 27", "D. 28", "E. 29"],
          answer: 1
        },
        {
          text: "A solid shape is built by stacking: 1 cube on the bottom, 2 cubes side by side in the middle, 3 cubes side by side on top. How many unit cubes are used?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "A 2x2x2 cube is painted red on all faces. It is then cut into 8 unit cubes. How many unit cubes have paint on exactly 3 faces?",
          choices: ["A. 0", "B. 4", "C. 6", "D. 8", "E. 12"],
          answer: 3
        },
        {
          text: "A 2x2x2 cube is painted red on all faces. It is then cut into 8 unit cubes. How many unit cubes have paint on exactly 2 faces?",
          choices: ["A. 0", "B. 4", "C. 6", "D. 8", "E. 12"],
          answer: 0
        },
        {
          text: "A view of a 3D shape from the front looks like a circle, from the side looks like a rectangle, and from the top looks like a circle. What 3D shape is it?",
          choices: ["A. Sphere", "B. Cylinder", "C. Cone", "D. Cube", "E. Pyramid"],
          answer: 1
        },
        {
          text: "A view of a 3D shape from the front, side, and top all look like squares. What 3D shape is it?",
          choices: ["A. Rectangular prism", "B. Sphere", "C. Cylinder", "D. Cube", "E. Pyramid"],
          answer: 3
        },
        {
          text: "A tower of cubes is built: the base layer is a 3x3 square (9 cubes), the middle layer is a 2x2 square (4 cubes), the top is 1 cube. How many cubes in total?",
          choices: ["A. 12", "B. 13", "C. 14", "D. 15", "E. 16"],
          answer: 2
        },
        {
          text: "A solid rectangular prism has dimensions 4 cm by 3 cm by 2 cm. How many unit cubes does it contain?",
          choices: ["A. 9", "B. 18", "C. 24", "D. 36", "E. 48"],
          answer: 2
        },
        {
          text: "A cube has a sticker on each face numbered 1 to 6. Opposite faces sum to 7. If you see face 4 on the left and face 1 on top, what number is on the right?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 1
        },
        {
          text: "A 3D staircase is built from unit cubes: step 1 is 1 cube tall, step 2 is 2 cubes tall, step 3 is 3 cubes tall. Each step is 1 cube wide and 1 cube deep. How many unit cubes in total?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 9"],
          answer: 3
        },
        {
          text: "A cube is cut in half by a horizontal plane through the middle. What shape is the cross-section?",
          choices: ["A. Triangle", "B. Circle", "C. Square", "D. Rectangle", "E. Hexagon"],
          answer: 2
        },
        {
          text: "A cube is cut diagonally from one top edge to the opposite bottom edge. What shape is the cross-section?",
          choices: ["A. Square", "B. Triangle", "C. Rectangle", "D. Hexagon", "E. Pentagon"],
          answer: 2
        },
        {
          text: "How many unit cubes are needed to build a solid 4x4x4 cube?",
          choices: ["A. 16", "B. 32", "C. 48", "D. 64", "E. 128"],
          answer: 3
        },
        {
          text: "A rectangular prism has a volume of 24 cm3 and a base area of 8 cm2. What is its height?",
          choices: ["A. 2 cm", "B. 3 cm", "C. 4 cm", "D. 6 cm", "E. 8 cm"],
          answer: 1
        },
        {
          text: "A hollow cube has a side length of 5 cm. It is filled with unit cubes that are 1 cm3 each. How many unit cubes fit inside?",
          choices: ["A. 25", "B. 75", "C. 100", "D. 125", "E. 150"],
          answer: 3
        },
        {
          text: "Looking at a 3x3x3 cube from directly above, how many unit cube tops are visible?",
          choices: ["A. 3", "B. 6", "C. 9", "D. 12", "E. 27"],
          answer: 2
        },
        {
          text: "A shape is made from 5 unit cubes: 4 in a row on the ground and 1 cube placed on top of the second cube from the left. How many cubes are visible from the left side?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 1
        },
        {
          text: "A cube has a total surface area of 96 cm2. What is the length of one edge?",
          choices: ["A. 2 cm", "B. 3 cm", "C. 4 cm", "D. 6 cm", "E. 8 cm"],
          answer: 2
        },
        {
          text: "A triangular prism lies with a rectangular face on the table. How many faces are touching the table?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 0
        },
        {
          text: "A cube net shows 6 squares. If one square becomes the top face and the square directly below it becomes the front face, where does the square to the left of the top square end up when folded?",
          choices: ["A. Bottom", "B. Back", "C. Right side", "D. Left side", "E. Front"],
          answer: 3
        },
        {
          text: "How many unit cubes are in a rectangular prism that is 5 units long, 2 units wide, and 3 units tall?",
          choices: ["A. 10", "B. 15", "C. 20", "D. 30", "E. 36"],
          answer: 3
        },
        {
          text: "A 4x4x4 cube is built from unit cubes. Only the outside layer is painted. How many unit cubes on the interior have no paint?",
          choices: ["A. 4", "B. 8", "C. 12", "D. 16", "E. 27"],
          answer: 1
        },
        {
          text: "A flat net has 4 squares in a horizontal row, plus 1 square below the 2nd square from the left, and 1 square above the 3rd square from the left. Can this be folded into a cube?",
          choices: ["A. Yes", "B. No", "C. Only with extra cuts", "D. Depends on orientation", "E. Only for rectangular prisms"],
          answer: 0
        },
        {
          text: "A shape has a circular base and a single curved surface that meets at a point at the top. What is this shape called?",
          choices: ["A. Cylinder", "B. Sphere", "C. Cone", "D. Pyramid", "E. Prism"],
          answer: 2
        },
        {
          text: "A cube is rolled one face forward (rotated 90 degrees forward). If the top face was labelled North before rolling, what label is now on top?",
          choices: ["A. North", "B. South", "C. East", "D. West", "E. The original bottom face"],
          answer: 4
        }
      ]
    },

    "9.1": {
      title: "9.1 Grid Placement",
      questions: [
        {
          text: "In a 3×3 grid, the numbers 1, 2, and 3 must appear exactly once in each row and each column (like Sudoku). The top row is 1, 2, 3. The middle row starts with 2. What number goes in the middle cell of the middle row?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "A 3×3 magic square uses the numbers 1–9 once each so every row, column, and diagonal sums to 15. The centre cell of any such magic square always contains which number?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "In a 3×3 grid, you place the letters A, B, C so that no letter repeats in any row or column. The top-left is A and the top-right is C. What letter must go in the top-middle cell?",
          choices: ["A. A", "B. B", "C. C", "D. Either A or C", "E. Any letter"],
          answer: 1
        },
        {
          text: "You want to place 4 non-attacking rooks on a 4×4 chessboard (one rook per row, one per column). How many different ways can you do this?",
          choices: ["A. 4", "B. 8", "C. 16", "D. 24", "E. 32"],
          answer: 3
        },
        {
          text: "A 2×2 grid must be filled with the digits 1 and 2, each appearing exactly once in each row and each column. How many different ways can you fill this grid?",
          choices: ["A. 1", "B. 2", "C. 4", "D. 8", "E. 16"],
          answer: 1
        },
        {
          text: "On a 3×3 grid, Anna places stars in some cells so that every row has exactly one star and every column has exactly one star. How many stars does she place in total?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 6", "E. 9"],
          answer: 2
        },
        {
          text: "A 4×4 grid is filled with the digits 1, 2, 3, 4 — each appearing exactly once in each row and each column. The first row is 1, 2, 3, 4 and the second row starts 2, 1, 4, ___. What is the missing digit?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "You tile a 2×4 grid with 1×2 dominoes (each domino covers exactly 2 adjacent cells). How many dominoes do you need?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 6", "E. 8"],
          answer: 2
        },
        {
          text: "In a 3×3 grid, each row and column must contain each of the symbols ★, ●, and ▲ exactly once. The top row has ★ in column 1 and ● in column 2. What symbol is in column 3 of the top row?",
          choices: ["A. ★", "B. ●", "C. ▲", "D. Any of the three", "E. None"],
          answer: 2
        },
        {
          text: "A 3×3 grid has the number 5 in its centre. The remaining 8 cells use the digits 1–4 twice each. What must all 8 surrounding cells sum to?",
          choices: ["A. 15", "B. 20", "C. 25", "D. 30", "E. 40"],
          answer: 1
        },
        {
          text: "How many non-attacking rooks can fit on a 3×3 chessboard so that no two rooks share a row or column?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 9"],
          answer: 2
        },
        {
          text: "A 3×3 grid must be filled with the colours Red, Blue, Green so each colour appears once in every row and once in every column. Top row: Red, Blue, Green. Second row starts with Blue. What colour is in the middle of the second row?",
          choices: ["A. Red", "B. Blue", "C. Green", "D. Yellow", "E. Purple"],
          answer: 2
        },
        {
          text: "You want to tile a 3×2 grid with 1×2 dominoes. How many dominoes do you need?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 1
        },
        {
          text: "A magic square uses digits 1–9. The top row sums to 15 and is 2, 7, 6. The left column contains 2, 9, and ___. What is the missing value?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "In a 4×4 grid, you colour cells so that no two coloured cells share the same row or column. What is the maximum number of cells you can colour?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 8", "E. 16"],
          answer: 2
        },
        {
          text: "Anna places numbers 1, 2, 3 in a 3×3 grid so each row and column has each number once. She fills the first row as 3, 1, 2. She fills the second row starting with 1. What completes the second row?",
          choices: ["A. 1, 3, 2", "B. 1, 2, 3", "C. 2, 3, 1", "D. 3, 2, 1", "E. 2, 1, 3"],
          answer: 1
        },
        {
          text: "A 2×3 grid must be filled with the digits 1, 2, 3 — each appearing exactly once in each row. How many different ways can you fill the first row?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 6", "E. 9"],
          answer: 3
        },
        {
          text: "You tile a 4×2 grid with 1×2 dominoes. In how many ways can you tile it (dominoes can be placed horizontally or vertically)?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 8"],
          answer: 2
        },
        {
          text: "In a 3×3 grid filled with digits 1–9 (one per cell), what is the sum of all 9 digits?",
          choices: ["A. 36", "B. 40", "C. 42", "D. 45", "E. 50"],
          answer: 3
        },
        {
          text: "A chessboard pattern colours a 4×4 grid black and white alternately, with the top-left cell black. How many black cells are there?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "A 3×3 grid must have the digit 1 in every corner. The remaining 5 cells use digits 2–6 once each. What must the 4 corner cells sum to?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 3
        },
        {
          text: "In a 3×3 Latin square using symbols ♠, ♥, ♦, each row and column has each symbol once. The top row is ♠, ♥, ♦. The middle row starts ♥. What is in the middle cell of the middle row?",
          choices: ["A. ♠", "B. ♥", "C. ♦", "D. Any symbol", "E. No symbol fits"],
          answer: 2
        },
        {
          text: "How many ways can you place 2 non-attacking rooks on a 3×3 board (no shared row or column)?",
          choices: ["A. 3", "B. 6", "C. 9", "D. 12", "E. 18"],
          answer: 3
        },
        {
          text: "A 3×3 grid has the numbers 1–9. The sum of the three numbers in the middle row is 15. The middle row is 1, __, 9. What is the missing number?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "You must fill a 3×3 grid with 0s and 1s so no two 1s are in the same row or column. What is the maximum number of 1s you can place?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 9"],
          answer: 2
        },
        {
          text: "A 4×4 grid uses the numbers 1, 2, 3, 4 once in each row. The first row is 4, 3, 2, 1. What is the sum of the first row?",
          choices: ["A. 6", "B. 8", "C. 10", "D. 12", "E. 16"],
          answer: 2
        },
        {
          text: "In a 2×2 grid, each cell contains a different digit from 1 to 4. What is the sum of all four cells?",
          choices: ["A. 6", "B. 8", "C. 10", "D. 12", "E. 16"],
          answer: 2
        },
        {
          text: "A 3×3 grid uses digits 1–9. Each row sums to 15. What is the total sum of all digits in the grid?",
          choices: ["A. 15", "B. 30", "C. 40", "D. 45", "E. 60"],
          answer: 3
        },
        {
          text: "You have a 4×4 grid. You must place exactly one X in each row and each column (like placing 4 non-attacking rooks). How many cells remain without an X?",
          choices: ["A. 4", "B. 8", "C. 12", "D. 16", "E. 0"],
          answer: 2
        },
        {
          text: "In a 3×3 grid, the top-left cell is labelled (1,1) and the bottom-right is (3,3). A rook placed at (2,2) attacks cells in row 2 and column 2. How many cells does it attack (not counting its own)?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 8"],
          answer: 2
        },
        {
          text: "A 3×3 grid must use each of the numbers 1, 2, 3 exactly once in each row and column. The top-left is 2 and the top-right is 1. What is in the top-middle?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "A magic square has rows, columns, and diagonals all summing to the same number. In a 3×3 magic square with numbers 1–9, what is this magic sum?",
          choices: ["A. 12", "B. 13", "C. 14", "D. 15", "E. 16"],
          answer: 3
        },
        {
          text: "You want to place red, blue, and green counters in a 3×3 grid so no two counters of the same colour share a row or column. What is the minimum number of counters needed to have one of each colour in each row?",
          choices: ["A. 3", "B. 6", "C. 9", "D. 12", "E. 18"],
          answer: 2
        },
        {
          text: "A 4×4 grid is to be filled with letters A, B, C, D — one per cell — so each letter appears exactly once in each row and column. How many cells are in the grid total?",
          choices: ["A. 4", "B. 8", "C. 12", "D. 16", "E. 20"],
          answer: 3
        },
        {
          text: "In a 3×3 grid, each row and column must sum to 12. If the top row is 3, 4, 5, what must the sum of the middle row be?",
          choices: ["A. 9", "B. 10", "C. 11", "D. 12", "E. 15"],
          answer: 3
        },
        {
          text: "On a 5×5 grid, how many non-attacking rooks can you place so that no two rooks are in the same row or column?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 10", "E. 25"],
          answer: 2
        },
        {
          text: "A 2×2 grid has a different letter (A, B, C, D) in each cell. How many arrangements are possible if A must be in the top-left corner?",
          choices: ["A. 2", "B. 3", "C. 6", "D. 12", "E. 24"],
          answer: 2
        },
        {
          text: "A 3×3 grid is filled with the numbers 1–9. The sum of all numbers in the top row is 6 (i.e. 1+2+3). The sum of all numbers in the bottom row is 24 (i.e. 7+8+9). What is the sum of the middle row?",
          choices: ["A. 12", "B. 14", "C. 15", "D. 18", "E. 20"],
          answer: 2
        },
        {
          text: "You tile a 3×3 grid with 1×1 tiles. One tile is removed from the corner. Can the remaining 8 cells be tiled with 1×2 dominoes?",
          choices: ["A. Yes, always", "B. No, never", "C. Only with special dominoes", "D. Only if the corner was white", "E. Yes, but only one way"],
          answer: 1
        },
        {
          text: "In a 3×3 Latin square using 1, 2, 3, each row and column contains each number once. How many different ways can the top row be arranged?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 6", "E. 9"],
          answer: 3
        },
        {
          text: "A 4×4 grid must be coloured using 4 colours so that no colour repeats in any row or column. How many colours are used in each row?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 8"],
          answer: 3
        },
        {
          text: "In a 3×3 grid, you place the number 7 in the centre. The 8 surrounding cells use distinct numbers. The 4 cells directly adjacent (up, down, left, right) sum to 20. The 4 corner cells sum to ___. If all 9 cells use 1–9, what must the corner cells sum to?",
          choices: ["A. 20", "B. 24", "C. 25", "D. 30", "E. 35"],
          answer: 2
        },
        {
          text: "How many ways can you place the digits 1, 2, 3 in a row so that 1 comes before 2?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 6"],
          answer: 2
        },
        {
          text: "A 3×3 grid must be filled with A, B, C (each appearing once per row and column). How many completed grids are possible?",
          choices: ["A. 6", "B. 9", "C. 12", "D. 18", "E. 24"],
          answer: 2
        },
        {
          text: "In a 4×4 grid, the main diagonal goes from top-left to bottom-right. How many cells are on the main diagonal?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 8"],
          answer: 2
        },
        {
          text: "A 3×3 grid has 4 corner cells, 4 edge cells (not corners), and 1 centre cell. If you place a star in the centre, how many cells remain empty?",
          choices: ["A. 4", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 3
        },
        {
          text: "A 3×3 grid uses 1, 2, 3 in every row. The first row is 1, 2, 3 and the second row is 2, 3, 1. What must the third row be?",
          choices: ["A. 1, 2, 3", "B. 2, 1, 3", "C. 3, 1, 2", "D. 3, 2, 1", "E. 1, 3, 2"],
          answer: 2
        },
        {
          text: "You fill a 2×5 grid with the numbers 1–10 (one per cell, each used once). What is the sum of all numbers?",
          choices: ["A. 45", "B. 50", "C. 55", "D. 60", "E. 65"],
          answer: 2
        },
        {
          text: "A 3×3 grid uses symbols ▲, ■, ● with each appearing once per row and column. The top row is ▲, ■, ●. What symbol is in the bottom-right cell if the middle row starts with ●?",
          choices: ["A. ▲", "B. ■", "C. ●", "D. Any symbol", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "In a 3×3 number grid, the middle column contains 2, 5, 8. What is the sum of the middle column?",
          choices: ["A. 12", "B. 13", "C. 14", "D. 15", "E. 16"],
          answer: 3
        },
      ]
    },

    "9.2": {
      title: "9.2 Grid Counting",
      questions: [
        {
          text: "How many unit squares are in a 3×3 grid of unit squares? (Count only the 1×1 squares.)",
          choices: ["A. 3", "B. 6", "C. 9", "D. 12", "E. 16"],
          answer: 2
        },
        {
          text: "In a 2×2 grid of unit squares, how many squares of ALL sizes can you count (including the 2×2 square itself)?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 1
        },
        {
          text: "In a 3×3 grid, how many 2×2 squares can you find?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 6", "E. 9"],
          answer: 2
        },
        {
          text: "A 4×4 grid of unit squares: how many 1×1 squares, 2×2 squares, 3×3 squares, and 4×4 squares are there altogether?",
          choices: ["A. 16", "B. 20", "C. 25", "D. 30", "E. 36"],
          answer: 3
        },
        {
          text: "How many rectangles (of any size, including squares) can be found in a 2×2 grid?",
          choices: ["A. 4", "B. 6", "C. 8", "D. 9", "E. 12"],
          answer: 3
        },
        {
          text: "A large equilateral triangle is divided into 4 equal smaller triangles. How many triangles of any size can you count in the figure?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 1
        },
        {
          text: "A 4×4 chessboard is coloured in a standard checkerboard pattern (top-left is black). How many black squares are there?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "A 3×3 grid has some cells shaded. The top row has 2 shaded, the middle row has 1 shaded, and the bottom row has 3 shaded. How many cells are shaded in total?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 9"],
          answer: 2
        },
        {
          text: "How many paths are there from the top-left corner to the bottom-right corner of a 2×2 grid, moving only right or down?",
          choices: ["A. 2", "B. 4", "C. 6", "D. 8", "E. 12"],
          answer: 2
        },
        {
          text: "In a 3×4 grid, how many 1×1 cells are there?",
          choices: ["A. 7", "B. 10", "C. 12", "D. 14", "E. 16"],
          answer: 2
        },
        {
          text: "Two horizontal lines and two vertical lines cross each other. How many regions do they divide the plane into?",
          choices: ["A. 4", "B. 6", "C. 8", "D. 9", "E. 12"],
          answer: 3
        },
        {
          text: "A 3×3 grid has a diagonal drawn from the top-left corner to the bottom-right corner. How many cells does this diagonal pass through?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 1
        },
        {
          text: "In a 1×5 row of squares, how many rectangles (including squares) are there in total?",
          choices: ["A. 5", "B. 10", "C. 12", "D. 15", "E. 20"],
          answer: 3
        },
        {
          text: "A 5×5 grid is divided by horizontal and vertical lines into unit squares. How many unit squares are there?",
          choices: ["A. 10", "B. 16", "C. 20", "D. 25", "E. 36"],
          answer: 3
        },
        {
          text: "In a 4×4 grid, how many 2×2 squares can you find?",
          choices: ["A. 4", "B. 6", "C. 8", "D. 9", "E. 12"],
          answer: 3
        },
        {
          text: "How many paths go from point A (top-left) to point B (bottom-right) in a 3×3 grid (moving only right or down)?",
          choices: ["A. 6", "B. 10", "C. 15", "D. 20", "E. 24"],
          answer: 3
        },
        {
          text: "A large triangle is divided into 9 small equal triangles. How many triangles of any size can you count?",
          choices: ["A. 9", "B. 10", "C. 12", "D. 13", "E. 16"],
          answer: 3
        },
        {
          text: "In a 2×3 grid of unit squares, how many rectangles (of any size, including squares) can be found?",
          choices: ["A. 6", "B. 9", "C. 12", "D. 18", "E. 24"],
          answer: 3
        },
        {
          text: "A 3×3 grid has the cells in the top-left 2×2 region shaded. How many cells are NOT shaded?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 1
        },
        {
          text: "Three lines are drawn across a sheet of paper. What is the maximum number of regions they can create?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 3
        },
        {
          text: "In a 3×3 grid, how many squares of ALL sizes (1×1, 2×2, and 3×3) can you count?",
          choices: ["A. 9", "B. 12", "C. 13", "D. 14", "E. 16"],
          answer: 3
        },
        {
          text: "A 4×4 grid of dots (16 dots total) is drawn. How many rows of dots are there?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 8", "E. 16"],
          answer: 2
        },
        {
          text: "In a 3×3 grid, the border cells (edges and corners) are shaded. How many border cells are there?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 3
        },
        {
          text: "How many rectangles can be found in a 1×4 strip of unit squares?",
          choices: ["A. 4", "B. 6", "C. 8", "D. 10", "E. 12"],
          answer: 3
        },
        {
          text: "A 2×2 grid is formed by 2 horizontal and 2 vertical lines (so 3 horizontal lines and 3 vertical lines in total, including borders). How many intersection points are there?",
          choices: ["A. 4", "B. 6", "C. 8", "D. 9", "E. 12"],
          answer: 3
        },
        {
          text: "In a 4×4 grid, how many 3×3 squares can you find?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 9"],
          answer: 3
        },
        {
          text: "A path in a grid moves only right or down. Starting at (0,0) and ending at (2,2), how many different paths are there?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 8", "E. 10"],
          answer: 2
        },
        {
          text: "In a 4×4 grid, how many cells are on the border (edges and corners)?",
          choices: ["A. 8", "B. 10", "C. 12", "D. 14", "E. 16"],
          answer: 2
        },
        {
          text: "A 5×5 grid: how many 2×2 squares can be found in it?",
          choices: ["A. 4", "B. 8", "C. 12", "D. 16", "E. 25"],
          answer: 3
        },
        {
          text: "In a 3×3 grid, 3 cells on the main diagonal are shaded. How many cells are NOT shaded?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 3
        },
        {
          text: "Four lines are drawn on paper, no two parallel and no three meeting at the same point. How many crossing points are there?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 8"],
          answer: 3
        },
        {
          text: "In a 2×4 grid of unit squares, how many 2×2 squares can be found?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 1
        },
        {
          text: "A 3×3 grid has every alternate cell shaded starting from the top-left (like a checkerboard). How many cells are shaded?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 1
        },
        {
          text: "In a 4×3 grid (4 columns, 3 rows), how many rectangles of size 1×2 or 2×1 can you find?",
          choices: ["A. 12", "B. 14", "C. 16", "D. 17", "E. 20"],
          answer: 3
        },
        {
          text: "How many squares of ANY size are in a 4×4 grid?",
          choices: ["A. 16", "B. 20", "C. 24", "D. 30", "E. 36"],
          answer: 3
        },
        {
          text: "Two squares overlap partially. The overlap region is a 1×1 square. Each original square is 2×2. How many unit squares are visible in total (counting the overlap once)?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 1
        },
        {
          text: "In a 3×3 grid, how many rectangles (including squares) can you count?",
          choices: ["A. 18", "B. 24", "C. 30", "D. 36", "E. 42"],
          answer: 3
        },
        {
          text: "A figure is made of a 3×1 strip of squares with a 1×1 square added on top of the middle square. How many squares of all sizes are in this figure?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 0
        },
        {
          text: "In a 3×3 grid, how many pairs of adjacent cells (sharing an edge) are there?",
          choices: ["A. 8", "B. 10", "C. 12", "D. 14", "E. 16"],
          answer: 2
        },
        {
          text: "A 4×4 grid has 16 cells. How many cells are NOT on the border?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 6", "E. 8"],
          answer: 2
        },
        {
          text: "In a 3×2 grid, how many paths from the top-left to the bottom-right are there (moving only right or down)?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 1
        },
        {
          text: "A 2×2 square is made of 4 unit squares. How many triangles can be made by drawing a diagonal in one of the unit squares?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 1
        },
        {
          text: "In a 5×5 grid, how many 3×3 squares can you find?",
          choices: ["A. 4", "B. 6", "C. 8", "D. 9", "E. 16"],
          answer: 0
        },
        {
          text: "A line divides a rectangle into 2 parts. Another line crosses the first and also crosses the rectangle, creating more parts. How many parts are created by 2 lines crossing inside the rectangle?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "In a 3×3 grid, how many cells share at least one corner or edge with the centre cell?",
          choices: ["A. 3", "B. 4", "C. 6", "D. 8", "E. 9"],
          answer: 3
        },
        {
          text: "How many unit squares are in the border of a 4×4 grid (the outermost ring of cells)?",
          choices: ["A. 8", "B. 10", "C. 12", "D. 14", "E. 16"],
          answer: 2
        },
        {
          text: "A 4×4 grid has 4 rows and 4 columns. How many horizontal line segments form the tops/bottoms of cells (including grid borders)?",
          choices: ["A. 4", "B. 5", "C. 16", "D. 20", "E. 25"],
          answer: 3
        },
        {
          text: "In a 3×3 grid with all cells numbered 1–9, how many pairs of adjacent cells (sharing an edge) have consecutive numbers?",
          choices: ["A. 4", "B. 6", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "A rectangle is divided into a 5×3 grid of unit squares. How many unit squares are there in total?",
          choices: ["A. 8", "B. 12", "C. 15", "D. 18", "E. 25"],
          answer: 2
        },
        {
          text: "In a 3×3 grid, how many squares of ALL sizes (1×1, 2×2, and 3×3) are there?",
          choices: ["A. 9", "B. 12", "C. 13", "D. 14", "E. 16"],
          answer: 3
        },
      ]
    },

    "9.3": {
      title: "9.3 Honeycomb & Network Problems",
      questions: [
        {
          text: "A honeycomb ring has 1 hexagon in the centre and 6 hexagons around it. How many hexagons are there in total?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 12"],
          answer: 2
        },
        {
          text: "Each hexagon in a honeycomb has 6 sides. The centre hexagon shares one side with each of its 6 neighbours. How many sides does the centre hexagon share with neighbours in total?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 3
        },
        {
          text: "In a network with 4 towns (A, B, C, D), each town is directly connected to every other town. How many roads are there?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 8", "E. 12"],
          answer: 2
        },
        {
          text: "In a network with 5 towns, each directly connected to every other. How many connections (edges) are there?",
          choices: ["A. 5", "B. 8", "C. 10", "D. 12", "E. 15"],
          answer: 2
        },
        {
          text: "Towns A, B, C are connected: A–B, B–C, and A–C. How many different routes go from A to C (you may pass through B)?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 1
        },
        {
          text: "A small network has 3 nodes. Each node is connected to exactly 2 others. How many edges does this network have?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 1
        },
        {
          text: "Six friends each shake hands with every other friend exactly once. How many handshakes occur in total?",
          choices: ["A. 6", "B. 10", "C. 12", "D. 15", "E. 18"],
          answer: 3
        },
        {
          text: "In a network of 4 nodes arranged in a square (each node connected to its two neighbours), how many edges are there?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 8"],
          answer: 2
        },
        {
          text: "A network has nodes A, B, C, D, E arranged in a line: A–B–C–D–E. How many edges are there?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 10"],
          answer: 1
        },
        {
          text: "Can you trace the letter H without lifting your pen and without going over any part twice?",
          choices: ["A. Yes, starting from a corner", "B. Yes, starting from the crossbar", "C. No, because the crossbar has odd degree", "D. Yes, but only one way", "E. No, because it has too many lines"],
          answer: 0
        },
        {
          text: "A spider web has 5 rings and 6 spokes. How many intersection points (where a ring meets a spoke) are there?",
          choices: ["A. 11", "B. 20", "C. 25", "D. 30", "E. 36"],
          answer: 3
        },
        {
          text: "In a complete network of 6 towns, how many roads connect them?",
          choices: ["A. 6", "B. 10", "C. 12", "D. 15", "E. 18"],
          answer: 3
        },
        {
          text: "A network has 4 nodes and 4 edges forming a square. One more edge is added connecting opposite corners. How many edges are there now?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 1
        },
        {
          text: "In a hexagonal grid, how many hexagons share a side with a central hexagon?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 8"],
          answer: 3
        },
        {
          text: "Anna travels from town A to town D. The route must go through B then C (A→B→C→D). There are 2 roads from A to B, 3 roads from B to C, and 2 roads from C to D. How many different routes are there from A to D?",
          choices: ["A. 6", "B. 7", "C. 10", "D. 12", "E. 14"],
          answer: 3
        },
        {
          text: "Three friends live in towns A, B, and C. Each town is connected to each other town by a road. Tom must travel from A to B. How many direct and indirect routes (going through C) does he have?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 1
        },
        {
          text: "A network has nodes P, Q, R, S. The edges are P–Q, Q–R, R–S, S–P, and P–R. How many edges are there?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 1
        },
        {
          text: "In a network with 3 nodes, the maximum number of edges (if every node connects to every other) is:",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 1
        },
        {
          text: "A honeycomb pattern shows 3 hexagons in a row. Each hexagon has 6 sides. How many sides are on the outer boundary of the 3-hexagon row?",
          choices: ["A. 10", "B. 12", "C. 14", "D. 16", "E. 18"],
          answer: 2
        },
        {
          text: "Towns A and B are connected by 3 different roads. How many different ways can you travel from A to B and back (each trip on a different road)?",
          choices: ["A. 3", "B. 4", "C. 6", "D. 9", "E. 12"],
          answer: 2
        },
        {
          text: "A network has 5 nodes arranged in a pentagon (each node connected to the two adjacent ones). How many edges are there?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 10"],
          answer: 2
        },
        {
          text: "Four children each want to pass a message to every other child. Each message passes along a direct connection between two children. How many connections (messages) are needed?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 8", "E. 12"],
          answer: 2
        },
        {
          text: "A train route connects cities: A to B (2 trains/day) and B to C (3 trains/day). How many different ways can you travel from A to C in one day?",
          choices: ["A. 2", "B. 3", "C. 5", "D. 6", "E. 9"],
          answer: 3
        },
        {
          text: "A network map shows 4 islands connected by bridges: Island 1 connects to Islands 2 and 3. Island 2 connects to Islands 3 and 4. Island 3 connects to Island 4. How many bridges are there?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 1
        },
        {
          text: "In a complete network with 3 nodes (a triangle), each node is connected to 2 others. What is the total degree (sum of all connections at all nodes)?",
          choices: ["A. 3", "B. 4", "C. 6", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "A spider web has 4 rings and 8 spokes. How many small cells (spaces between rings and spokes) are there?",
          choices: ["A. 12", "B. 16", "C. 24", "D. 32", "E. 40"],
          answer: 2
        },
        {
          text: "In a network, Town A has 3 roads leading out, Town B has 2, Town C has 2, and Town D has 1. How many roads are there in total?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 0
        },
        {
          text: "5 teams each play against every other team once in a round-robin tournament. How many matches are played in total?",
          choices: ["A. 5", "B. 8", "C. 10", "D. 12", "E. 20"],
          answer: 2
        },
        {
          text: "In a hexagonal grid, two hexagons that share a side are called neighbours. How many neighbours does a hexagon in the interior of a large honeycomb have?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 8"],
          answer: 3
        },
        {
          text: "A network has nodes A, B, C forming a triangle. A new node D is added and connected to all three existing nodes. How many edges does the new network have?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "Seven friends all shake hands with every other friend. How many handshakes in total?",
          choices: ["A. 14", "B. 18", "C. 21", "D. 28", "E. 42"],
          answer: 2
        },
        {
          text: "In a road network, there are exactly 2 routes from A to B and exactly 3 routes from B to C. If you must go through B, how many routes are there from A to C?",
          choices: ["A. 2", "B. 3", "C. 5", "D. 6", "E. 9"],
          answer: 3
        },
        {
          text: "A network has 6 nodes, each connected to exactly 2 others, forming a ring. How many edges are there?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 8", "E. 12"],
          answer: 2
        },
        {
          text: "In a network of 4 nodes where every node is connected to every other, how many edges are there?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 8", "E. 12"],
          answer: 2
        },
        {
          text: "A honeycomb strip has 4 hexagons in a row. How many hexagons share a side with the leftmost hexagon in the strip?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 6"],
          answer: 0
        },
        {
          text: "In a network, Anna can go from home to school by 2 different bus routes or 1 walking route. How many ways can she travel from home to school?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 6"],
          answer: 2
        },
        {
          text: "A triangular network has vertices A, B, C with edges A–B, B–C, A–C. A path from A to C can go directly or through B. How many routes are there from A to C?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 1
        },
        {
          text: "In a complete network of 7 nodes, how many edges are there?",
          choices: ["A. 14", "B. 18", "C. 21", "D. 28", "E. 42"],
          answer: 2
        },
        {
          text: "A star-shaped network has 1 centre node connected to 5 outer nodes. The outer nodes are not connected to each other. How many edges does this network have?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 8", "E. 10"],
          answer: 1
        },
        {
          text: "In a 2×3 honeycomb-like grid of hexagons (2 rows, 3 columns), how many hexagons are there?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 8"],
          answer: 3
        },
        {
          text: "A network path from X to Y must cross exactly 3 bridges. There are 2 choices for each bridge. How many different routes from X to Y are there?",
          choices: ["A. 3", "B. 4", "C. 6", "D. 8", "E. 16"],
          answer: 3
        },
        {
          text: "4 teams play in a round-robin (each pair plays once). Team scores are: A beats everyone, B beats C and D, C beats D. How many games were played in total?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "A network of towns is connected so every town has exactly 3 roads. There are 4 towns. How many roads are there in total?",
          choices: ["A. 3", "B. 4", "C. 6", "D. 8", "E. 12"],
          answer: 2
        },
        {
          text: "In a honeycomb, each hexagon has 6 sides. Two adjacent hexagons share 1 side. If you have 2 adjacent hexagons, how many total outer sides do they have?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 12", "E. 14"],
          answer: 2
        },
        {
          text: "A graph has 5 nodes and 4 edges, forming a tree (no loops). How many edges need to be added to connect every node to every other node?",
          choices: ["A. 2", "B. 4", "C. 6", "D. 8", "E. 10"],
          answer: 2
        },
        {
          text: "In a network, there are 3 routes from A to B and 2 routes from A to C. How many ways can Anna go from A to either B or C (one trip only)?",
          choices: ["A. 1", "B. 3", "C. 5", "D. 6", "E. 9"],
          answer: 2
        },
        {
          text: "Five children stand in a circle, each holding hands with their two neighbours. How many pairs of hands are being held?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 8", "E. 10"],
          answer: 1
        },
        {
          text: "A network has nodes A, B, C, D arranged in a square with edges A–B, B–C, C–D, D–A. A diagonal A–C is also added. How many different paths go from A to C without revisiting a node?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "In a complete graph with 5 vertices, each vertex has how many edges connected to it?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 10"],
          answer: 2
        },
        {
          text: "A network shows 5 bus stops. The number of bus lines between each pair of stops is shown: A–B has 2, A–C has 1, B–C has 2, B–D has 1, C–D has 2. How many total bus lines are there?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 10"],
          answer: 3
        },
      ]
    },

    "10.1": {
      title: "10.1 Multi-attribute Selection",
      questions: [
        {
          text: "Which number is even, greater than 30, and a multiple of 3?",
          choices: ["A. 32", "B. 33", "C. 36", "D. 37", "E. 39"],
          answer: 2
        },
        {
          text: "Which number is less than 50, divisible by 6, and has a digit sum greater than 7?",
          choices: ["A. 12", "B. 18", "C. 24", "D. 30", "E. 48"],
          answer: 4
        },
        {
          text: "Which number is odd, between 20 and 40, and a multiple of 7?",
          choices: ["A. 21", "B. 28", "C. 35", "D. 42", "E. 49"],
          answer: 2
        },
        {
          text: "Which number is a two-digit number, a multiple of 4, and has both digits the same?",
          choices: ["A. 22", "B. 33", "C. 44", "D. 55", "E. 66"],
          answer: 2
        },
        {
          text: "Which number is less than 100, greater than 80, and divisible by both 3 and 4?",
          choices: ["A. 84", "B. 87", "C. 90", "D. 96", "E. 99"],
          answer: 3
        },
        {
          text: "A student needs a number that is prime, greater than 10, and less than 20. How many such numbers are there?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "Which number from {15, 18, 20, 24, 25} is divisible by both 4 and 6?",
          choices: ["A. 15", "B. 18", "C. 20", "D. 24", "E. 25"],
          answer: 3
        },
        {
          text: "Find a number that is a square number, even, and less than 50.",
          choices: ["A. 9", "B. 16", "C. 25", "D. 49", "E. 64"],
          answer: 1
        },
        {
          text: "Which number is between 40 and 60, divisible by 5, and has digit sum equal to 10?",
          choices: ["A. 40", "B. 45", "C. 50", "D. 55", "E. 60"],
          answer: 2
        },
        {
          text: "Which number is a multiple of 9, less than 50, and greater than 30?",
          choices: ["A. 27", "B. 36", "C. 45", "D. 54", "E. 63"],
          answer: 2
        },
        {
          text: "In a class, some students play chess, some play football. 8 play chess, 10 play football, and 4 play both. How many play only football?",
          choices: ["A. 4", "B. 6", "C. 8", "D. 10", "E. 14"],
          answer: 1
        },
        {
          text: "From the list {11, 12, 13, 14, 15, 16}, which numbers are both even and greater than 12?",
          choices: ["A. 12, 14", "B. 14, 16", "C. 12, 14, 16", "D. 13, 15", "E. 14 only"],
          answer: 1
        },
        {
          text: "Which shape has exactly 4 sides, all sides equal, and all angles equal to 90°?",
          choices: ["A. Rectangle", "B. Rhombus", "C. Square", "D. Trapezoid", "E. Parallelogram"],
          answer: 2
        },
        {
          text: "In a bag of marbles: 5 are blue, 4 are large, and 2 are both blue and large. How many marbles are either blue or large?",
          choices: ["A. 5", "B. 7", "C. 9", "D. 11", "E. 13"],
          answer: 1
        },
        {
          text: "Which number from {21, 22, 23, 24, 25} is divisible by 3 and greater than 22?",
          choices: ["A. 21", "B. 22", "C. 23", "D. 24", "E. 25"],
          answer: 3
        },
        {
          text: "A number is a multiple of 2 and a multiple of 5. What must it also be a multiple of?",
          choices: ["A. 3", "B. 4", "C. 7", "D. 10", "E. 20"],
          answer: 3
        },
        {
          text: "From {30, 32, 35, 36, 40}, which is divisible by both 4 and 5?",
          choices: ["A. 30", "B. 32", "C. 35", "D. 36", "E. 40"],
          answer: 4
        },
        {
          text: "Which number is a two-digit multiple of 7, with digit sum equal to 8?",
          choices: ["A. 14", "B. 35", "C. 42", "D. 56", "E. 77"],
          answer: 1
        },
        {
          text: "20 children each like either cats or dogs (or both). 12 like cats, 14 like dogs. How many like both?",
          choices: ["A. 2", "B. 4", "C. 6", "D. 8", "E. 10"],
          answer: 2
        },
        {
          text: "Which number is odd, a multiple of 3, and between 50 and 70?",
          choices: ["A. 51", "B. 55", "C. 60", "D. 63", "E. 66"],
          answer: 3
        },
        {
          text: "A toy must be red and cost less than €5. From the list: red toy €4, blue toy €3, red toy €6, green toy €4, red toy €5 — which toys qualify?",
          choices: ["A. 1 toy", "B. 2 toys", "C. 3 toys", "D. 4 toys", "E. 5 toys"],
          answer: 0
        },
        {
          text: "Which number is a perfect square, a multiple of 4, and less than 30?",
          choices: ["A. 4", "B. 8", "C. 16", "D. 20", "E. 25"],
          answer: 2
        },
        {
          text: "From {8, 12, 15, 18, 20}, which is divisible by 3 but NOT by 4?",
          choices: ["A. 8", "B. 12", "C. 15", "D. 18", "E. 20"],
          answer: 3
        },
        {
          text: "Which number has exactly 3 factors, is less than 30, and is a perfect square?",
          choices: ["A. 4", "B. 9", "C. 16", "D. 25", "E. All of these"],
          answer: 1
        },
        {
          text: "In a group of 30 students, 18 like maths, 15 like art, and 7 like both. How many like neither?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "Which number from {40, 42, 45, 48, 50} is divisible by both 3 and 8?",
          choices: ["A. 40", "B. 42", "C. 45", "D. 48", "E. 50"],
          answer: 3
        },
        {
          text: "A sticker must be round AND yellow. There are 3 round stickers, 4 yellow stickers, and 1 that is both. How many satisfy the condition?",
          choices: ["A. 1", "B. 3", "C. 4", "D. 6", "E. 7"],
          answer: 0
        },
        {
          text: "Which number is between 25 and 45, is a multiple of 6, and has a tens digit of 3?",
          choices: ["A. 30", "B. 36", "C. 42", "D. 48", "E. 30 and 36"],
          answer: 1
        },
        {
          text: "From {17, 19, 21, 23, 25}, which numbers are prime AND greater than 20?",
          choices: ["A. 21, 25", "B. 23 only", "C. 21, 23", "D. 23, 25", "E. None"],
          answer: 1
        },
        {
          text: "Which number is a 2-digit number, a multiple of 11, and less than 50?",
          choices: ["A. 11", "B. 22", "C. 33", "D. 44", "E. All of A, B, C, D"],
          answer: 4
        },
        {
          text: "I need a number less than 20 that is divisible by both 2 and 3. Which is the largest such number?",
          choices: ["A. 6", "B. 12", "C. 18", "D. 16", "E. 14"],
          answer: 2
        },
        {
          text: "In a set of cards numbered 1–20, how many cards show a number that is both a multiple of 3 and a multiple of 4?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 0
        },
        {
          text: "From {10, 14, 15, 16, 21}, which is divisible by 7 AND greater than 12?",
          choices: ["A. 10", "B. 14", "C. 15", "D. 16", "E. 21"],
          answer: 4
        },
        {
          text: "Which number is odd, a perfect square, and between 30 and 80?",
          choices: ["A. 36", "B. 49", "C. 64", "D. 81", "E. 25"],
          answer: 1
        },
        {
          text: "A number is divisible by 4, has digit sum = 6, and is between 10 and 30. What is it?",
          choices: ["A. 12", "B. 20", "C. 24", "D. 28", "E. 16"],
          answer: 2
        },
        {
          text: "From {3, 6, 9, 12, 15, 18}, how many numbers are both multiples of 3 and greater than 10?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "Which number is a 2-digit number with repeated digits AND is a multiple of 9?",
          choices: ["A. 11", "B. 22", "C. 33", "D. 44", "E. 99"],
          answer: 4
        },
        {
          text: "I need a number between 50 and 100 that is a multiple of both 5 and 6. Which is smallest?",
          choices: ["A. 55", "B. 60", "C. 65", "D. 70", "E. 90"],
          answer: 1
        },
        {
          text: "How many numbers from 1 to 30 are multiples of 2 but NOT multiples of 6?",
          choices: ["A. 5", "B. 7", "C. 10", "D. 12", "E. 15"],
          answer: 2
        },
        {
          text: "From {24, 27, 28, 30, 32}, which is divisible by 3 AND by 4?",
          choices: ["A. 24", "B. 27", "C. 28", "D. 30", "E. 32"],
          answer: 0
        },
        {
          text: "A snack must be fruit AND cost less than 50 cents. There are 6 fruits and 4 snacks under 50 cents. 2 are both. How many snacks qualify?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 8"],
          answer: 1
        },
        {
          text: "Which number from {45, 48, 50, 54, 60} is a multiple of both 6 and 9?",
          choices: ["A. 45", "B. 48", "C. 50", "D. 54", "E. 60"],
          answer: 3
        },
        {
          text: "Numbers less than 50 and divisible by both 4 and 6 — how many are there?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "Which two-digit number is both a triangle number and even? (Triangle numbers: 1,3,6,10,15,21,28,36,45,55...)",
          choices: ["A. 10", "B. 15", "C. 28", "D. 36", "E. Both C and D"],
          answer: 4
        },
        {
          text: "From {11, 13, 17, 19, 21, 23}, which are prime AND greater than 15?",
          choices: ["A. 17, 19", "B. 17, 19, 23", "C. 19, 21, 23", "D. 17, 19, 21, 23", "E. 21, 23"],
          answer: 1
        },
        {
          text: "How many numbers from 1 to 50 are perfect squares AND odd?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 1
        },
        {
          text: "Which number has 3 as a factor, 5 as a factor, and is between 40 and 80?",
          choices: ["A. 30", "B. 45", "C. 60", "D. 75", "E. Both C and D"],
          answer: 4
        },
        {
          text: "From {16, 20, 24, 25, 30}, which is a perfect square AND divisible by 4?",
          choices: ["A. 16", "B. 20", "C. 24", "D. 25", "E. 30"],
          answer: 0
        },
        {
          text: "How many numbers from 1 to 100 are multiples of both 3 and 7?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 1
        },
        {
          text: "Which number is odd, greater than 40, a multiple of 5, and a multiple of 3?",
          choices: ["A. 40", "B. 45", "C. 50", "D. 55", "E. 60"],
          answer: 1
        }
      ]
    },

    "10.2": {
      title: "10.2 Preference / Matching",
      questions: [
        {
          text: "4 children each prefer a different colour: red, blue, green, yellow. Sam doesn't like red or blue. Pat likes green. Lee doesn't like yellow. What does Sam like?",
          choices: ["A. Red", "B. Blue", "C. Green", "D. Yellow", "E. Cannot be determined"],
          answer: 3
        },
        {
          text: "5 friends each choose a different sport: football, tennis, swimming, cycling, running. Ana likes water sports. Ben chose football. Carl doesn't cycle. Dana runs. What does Carl do?",
          choices: ["A. Football", "B. Tennis", "C. Swimming", "D. Cycling", "E. Running"],
          answer: 1
        },
        {
          text: "4 students sit in a row: Alice, Ben, Carol, Dan. Alice is not next to Carol. Ben sits on the right end. Dan is next to Ben. What position is Alice in (from left)?",
          choices: ["A. 1st", "B. 2nd", "C. 3rd", "D. 4th", "E. Cannot be determined"],
          answer: 0
        },
        {
          text: "3 animals live in 3 houses: red, blue, green. The cat doesn't live in the red house. The dog lives in the blue house. Where does the cat live?",
          choices: ["A. Red house", "B. Blue house", "C. Green house", "D. Any house", "E. Cannot be determined"],
          answer: 2
        },
        {
          text: "Anna, Beth, and Cara each have a different number of stickers: 5, 8, and 12. Anna has more than Beth. Beth has more than Cara. How many stickers does Cara have?",
          choices: ["A. 5", "B. 8", "C. 12", "D. 3", "E. Cannot be determined"],
          answer: 0
        },
        {
          text: "5 children each like a different ice-cream flavour: vanilla, chocolate, strawberry, mint, lemon. Tom likes vanilla. Sue doesn't like chocolate or mint. Rose likes strawberry. Mike likes mint. What does Sue like?",
          choices: ["A. Vanilla", "B. Chocolate", "C. Strawberry", "D. Mint", "E. Lemon"],
          answer: 4
        },
        {
          text: "4 friends are placed 1st, 2nd, 3rd, 4th in a race. Emma finished before Jack. Jack finished before Lisa. Tom finished last. What position did Emma finish?",
          choices: ["A. 1st", "B. 2nd", "C. 3rd", "D. 4th", "E. Cannot be determined"],
          answer: 0
        },
        {
          text: "Three children — Kim, Lee, May — each drew a different shape: circle, square, triangle. Kim didn't draw the circle. May drew the square. What did Lee draw?",
          choices: ["A. Circle", "B. Square", "C. Triangle", "D. Rectangle", "E. Cannot be determined"],
          answer: 0
        },
        {
          text: "Four siblings — Adam, Bob, Cate, Deb — each got a different gift: book, bike, ball, kite. Adam got the book. Cate didn't get the bike. Bob got the ball. What did Deb get?",
          choices: ["A. Book", "B. Bike", "C. Ball", "D. Kite", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "In a line of 5 people, Amy is 2nd. Bo is directly behind Amy. Chan is in front of Amy. Who is 1st?",
          choices: ["A. Amy", "B. Bo", "C. Chan", "D. Cannot be determined", "E. None of them"],
          answer: 2
        },
        {
          text: "Pets: dog, cat, bird. Owners: Rosa, Sam, Tim. Rosa has a furry pet that is not a bird. Tim has a pet that can fly. What does Sam own?",
          choices: ["A. Dog", "B. Cat", "C. Bird", "D. Fish", "E. Cannot be determined"],
          answer: 0
        },
        {
          text: "Four children stand in order of height. Jake is taller than Mia. Mia is taller than Ned. Olga is shorter than Ned. Who is shortest?",
          choices: ["A. Jake", "B. Mia", "C. Ned", "D. Olga", "E. Cannot be determined"],
          answer: 3
        },
        {
          text: "Three friends each own a different number of books: 10, 15, 20. Ella owns fewer books than Finn. Finn owns fewer books than Gina. How many books does Finn own?",
          choices: ["A. 10", "B. 15", "C. 20", "D. 25", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "Five animals are ranked by speed: rabbit, tortoise, dog, cat, snail. Dog is faster than cat. Cat is faster than rabbit. Tortoise is faster than snail but slower than rabbit. Which animal is 3rd fastest?",
          choices: ["A. Rabbit", "B. Tortoise", "C. Dog", "D. Cat", "E. Snail"],
          answer: 3
        },
        {
          text: "3 friends each carry a bag of a different colour: red, blue, green. Lucy's bag is not red. Mark's bag is not blue or green. What colour is Lucy's bag?",
          choices: ["A. Red", "B. Blue", "C. Green", "D. Yellow", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "Five children line up: Pete is 3rd. Quinn is directly behind Pete. Rita is 1st. Sam is between Rita and Pete. Who is 5th?",
          choices: ["A. Pete", "B. Quinn", "C. Rita", "D. Sam", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "4 students each study a different subject: Math, Science, Art, History. Beth studies Art. Andy doesn't study Math. Carl studies History. What does Andy study?",
          choices: ["A. Math", "B. Science", "C. Art", "D. History", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "Lily, Max, Nina are each assigned one chore: sweep, mop, dishes. Lily won't sweep. Nina does dishes. What does Max do?",
          choices: ["A. Sweep", "B. Mop", "C. Dishes", "D. Cook", "E. Cannot be determined"],
          answer: 0
        },
        {
          text: "4 boxes are red, blue, green, yellow. Each contains one toy: car, doll, ball, puzzle. The red box has the car. The blue box doesn't have the ball. The green box has the doll. What is in the blue box?",
          choices: ["A. Car", "B. Doll", "C. Ball", "D. Puzzle", "E. Cannot be determined"],
          answer: 3
        },
        {
          text: "Adam is older than Beth. Beth is older than Carl. Carl is older than Dana. Who is the youngest?",
          choices: ["A. Adam", "B. Beth", "C. Carl", "D. Dana", "E. Cannot be determined"],
          answer: 3
        },
        {
          text: "5 children prefer different seasons: spring, summer, autumn, winter, no preference. Tom picks summer. Sara picks autumn. Leo doesn't pick spring or winter. Kim picks winter. What does Leo pick?",
          choices: ["A. Spring", "B. Summer", "C. Autumn", "D. Winter", "E. No preference"],
          answer: 4
        },
        {
          text: "4 friends each order a different drink: juice, milk, water, tea. Eve orders water. Frank doesn't order juice or milk. Grace orders juice. What does Frank order?",
          choices: ["A. Juice", "B. Milk", "C. Water", "D. Tea", "E. Cannot be determined"],
          answer: 3
        },
        {
          text: "Three siblings get different pocket money: 2, 3, or 5 coins per week. The eldest gets the most. The youngest gets the least. The middle child gets 3 coins. Who is the eldest?",
          choices: ["A. The one with 2 coins", "B. The one with 3 coins", "C. The one with 5 coins", "D. Cannot be determined", "E. The youngest"],
          answer: 2
        },
        {
          text: "3 children draw cards numbered 1, 2, 3. Alex draws an odd number. Blake draws a higher number than Alex. What does Casey draw?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. Cannot be determined"],
          answer: 0
        },
        {
          text: "Three friends paint different parts of a room. Iris paints the ceiling. Jake doesn't paint the floor. What does Leo paint?",
          choices: ["A. Ceiling", "B. Walls", "C. Floor", "D. Door", "E. Cannot be determined"],
          answer: 2
        },
        {
          text: "Each of 4 children brings a different snack: apple, orange, banana, grapes. Owen brings an apple. Pat doesn't bring orange. Quinn brings grapes. What does Pat bring?",
          choices: ["A. Apple", "B. Orange", "C. Banana", "D. Grapes", "E. Cannot be determined"],
          answer: 2
        },
        {
          text: "4 children have birthday months: Jan, Mar, Jul, Nov. Ana's birthday is in summer (Jul). Ben's is in winter (Jan). Carl's is in spring (Mar). What month is Dora's birthday?",
          choices: ["A. January", "B. March", "C. July", "D. November", "E. Cannot be determined"],
          answer: 3
        },
        {
          text: "Penny, Quinn, and Reed stand in a line. Quinn is not first. Reed is not last. Penny is not in the middle. Who is in the middle?",
          choices: ["A. Penny", "B. Quinn", "C. Reed", "D. Cannot be determined", "E. None of them"],
          answer: 1
        },
        {
          text: "4 children each scored differently: 6, 7, 8, 9 points. Val scored more than Uma. Uma scored more than Todd. Sam scored 9. What did Todd score?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. Cannot be determined"],
          answer: 0
        },
        {
          text: "Three bags: pink, white, black. Three items: a book, a ball, a brush. Pink bag contains something round. Black bag contains something you read. What is in the white bag?",
          choices: ["A. Book", "B. Ball", "C. Brush", "D. Bag", "E. Cannot be determined"],
          answer: 2
        },
        {
          text: "4 children each have a different number of coins: 5, 10, 15, 20. Eve has more than Fred. Fred has more than Greg. Harry has the fewest. How many coins does Fred have?",
          choices: ["A. 5", "B. 10", "C. 15", "D. 20", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "Ana, Beth, Carlos choose different hobbies: painting, music, sports. Ana and Beth don't play sports. Beth doesn't like painting. What is Beth's hobby?",
          choices: ["A. Painting", "B. Music", "C. Sports", "D. Reading", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "5 houses are in a row: 1 to 5. The yellow house is house 3. The red house is next to the yellow house on the right. The blue house is house 2. Which house is red?",
          choices: ["A. House 1", "B. House 2", "C. House 3", "D. House 4", "E. House 5"],
          answer: 3
        },
        {
          text: "Three sisters — Dot, Ella, Fay — each have a different age: 8, 9, 10. Ella is not the youngest. Dot is not the oldest. How old is Fay?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 11", "E. Cannot be determined"],
          answer: 2
        },
        {
          text: "4 runners finish a race in different places. Kim is ahead of Lee. Lee is ahead of Moe. Noa finishes first. What place does Lee finish?",
          choices: ["A. 1st", "B. 2nd", "C. 3rd", "D. 4th", "E. Cannot be determined"],
          answer: 2
        },
        {
          text: "5 children each choose a different number from 1 to 5. Ann picks 3. Ben picks an even number greater than 2. Carl picks 1. What does Ben pick?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 3
        },
        {
          text: "3 lockers are assigned to Amy, Bob, Cal. Amy's locker is not locker 1. Bob's locker is not locker 2 or 3. What locker does Amy have?",
          choices: ["A. Locker 1", "B. Locker 2", "C. Locker 3", "D. Cannot be determined", "E. Locker 4"],
          answer: 1
        },
        {
          text: "4 friends each order a different pizza topping: cheese, pepperoni, mushroom, olive. Tom orders cheese. Ula doesn't order mushroom or pepperoni. Vera orders mushroom. What does Ula order?",
          choices: ["A. Cheese", "B. Pepperoni", "C. Mushroom", "D. Olive", "E. Cannot be determined"],
          answer: 3
        },
        {
          text: "4 teams are ranked 1st to 4th. Team A is above Team B. Team C is below Team D. Team D is above Team A. What rank is Team B?",
          choices: ["A. 1st", "B. 2nd", "C. 3rd", "D. 4th", "E. Cannot be determined"],
          answer: 3
        },
        {
          text: "5 children each have a different favourite animal: lion, tiger, bear, wolf, fox. Sam likes the animal with the shortest name (3 letters). Kim likes the tiger. Pat doesn't like lion or wolf. Lee likes the bear. What does Pat like?",
          choices: ["A. Lion", "B. Tiger", "C. Bear", "D. Wolf", "E. Fox"],
          answer: 4
        },
        {
          text: "Three friends have different heights: 120cm, 130cm, 140cm. Gus is not the tallest. Hana is shorter than Gus. What is Gus's height?",
          choices: ["A. 120cm", "B. 130cm", "C. 140cm", "D. 125cm", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "4 students each completed a different number of problems: 10, 12, 15, 18. Ari did more than Bo. Bo did more than Cal. Dan did the least. How many did Bo do?",
          choices: ["A. 10", "B. 12", "C. 15", "D. 18", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "In a photo lineup, Finn is 3rd from the left. Gina is 1st. Hiro is to the right of Finn. Ian is 2nd. Who is 4th from the left?",
          choices: ["A. Finn", "B. Gina", "C. Hiro", "D. Ian", "E. Cannot be determined"],
          answer: 2
        },
        {
          text: "5 children each collect a different number of shells: 3, 5, 7, 9, 11. Pam collects the most. Quin collects more than Ron. Ron collects more than Sue. Sue collects the fewest. How many does Quin collect?",
          choices: ["A. 3", "B. 5", "C. 7", "D. 9", "E. 11"],
          answer: 3
        },
        {
          text: "4 friends sit at a square table, one on each side. Al sits opposite to Beth. Carl sits to the left of Al. Who sits opposite to Carl?",
          choices: ["A. Al", "B. Beth", "C. Dana", "D. Carl himself", "E. Cannot be determined"],
          answer: 2
        },
        {
          text: "3 children are each assigned a different day: Monday, Wednesday, Friday. Kate is not assigned Friday. Lou is not assigned Monday or Wednesday. What day is Kate assigned?",
          choices: ["A. Monday", "B. Wednesday", "C. Friday", "D. Tuesday", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "5 children each earn a different number of star stickers: 1, 2, 3, 4, 5. Uma earned the most. Vera earned more than Will. Will earned more than Xia. Yara earned the fewest. How many did Will earn?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "4 friends choose different sandwiches: ham, tuna, egg, cheese. Abi chooses ham. Ben doesn't choose egg. Cody chooses tuna. What does Ben choose?",
          choices: ["A. Ham", "B. Tuna", "C. Egg", "D. Cheese", "E. Cannot be determined"],
          answer: 3
        },
        {
          text: "5 children each have a different sticker colour: red, blue, green, yellow, purple. Joe has red. Maya has blue. Nia doesn't have green or yellow. Omar has purple. What does Nia have?",
          choices: ["A. Red", "B. Blue", "C. Green", "D. Yellow", "E. Purple"],
          answer: 2
        },
        {
          text: "Three children — Ali, Bex, Cam — each chose a different number: 4, 7, 9. Ali chose the largest. Bex chose an even number. What did Cam choose?",
          choices: ["A. 4", "B. 7", "C. 9", "D. 6", "E. Cannot be determined"],
          answer: 1
        }
      ]
    },

    "11.1": {
      title: "11.1 Hidden Digit Problems",
      questions: [
        {
          text: "Find the missing digit: 3□ + □7 = 94. What is the missing digit?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 1
        },
        {
          text: "In □5 + 4□ = 99, both boxes hold the same digit. What is that digit?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 0
        },
        {
          text: "In the addition A B + B A = 121, where A and B are single digits, what is A + B?",
          choices: ["A. 9", "B. 10", "C. 11", "D. 12", "E. 13"],
          answer: 2
        },
        {
          text: "A 2-digit number multiplied by 3 gives a 3-digit number that starts with 1. The 2-digit number ends in 5. What is it?",
          choices: ["A. 35", "B. 45", "C. 55", "D. 65", "E. 75"],
          answer: 1
        },
        {
          text: "Find □: □□ − 24 = 39. What is the 2-digit number □□?",
          choices: ["A. 53", "B. 63", "C. 73", "D. 83", "E. 93"],
          answer: 1
        },
        {
          text: "The 3-digit number 4□8 is divisible by 3. Which digit can □ be?",
          choices: ["A. 0", "B. 1", "C. 4", "D. 5", "E. 7"],
          answer: 3
        },
        {
          text: "In the multiplication □ × 8 = □6, the same digit □ appears in both places. What is □?",
          choices: ["A. 2", "B. 3", "C. 5", "D. 7", "E. 8"],
          answer: 3
        },
        {
          text: "What digit replaces ★ in 5★ + ★5 = 110?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "In 1A + A1 = 77, what is the digit A?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 6", "E. 7"],
          answer: 1
        },
        {
          text: "In the subtraction 8□ − □1 = 54, what is □?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 5", "E. 7"],
          answer: 2
        },
        {
          text: "A × B = 24 and A + B = 10. Both are single digits. What is the larger one?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "In the addition □ + □ + □ = 27, where all three boxes contain the same digit, what is that digit?",
          choices: ["A. 7", "B. 8", "C. 9", "D. 10", "E. 11"],
          answer: 2
        },
        {
          text: "What is the missing digit in 7□ ÷ 9 = 8 remainder 4?",
          choices: ["A. 2", "B. 3", "C. 6", "D. 7", "E. 8"],
          answer: 3
        },
        {
          text: "A 2-digit number AB has A + B = 7 and A × B = 12. What is the number AB (with A as the tens digit)?",
          choices: ["A. 34", "B. 43", "C. 25", "D. 52", "E. 16"],
          answer: 0
        },
        {
          text: "In the long division □6 ÷ 7 = □ remainder 2, what is the 2-digit dividend?",
          choices: ["A. 16", "B. 26", "C. 36", "D. 46", "E. 56"],
          answer: 1
        },
        {
          text: "What digit D satisfies: D + D + D + D = 36?",
          choices: ["A. 7", "B. 8", "C. 9", "D. 10", "E. 6"],
          answer: 2
        },
        {
          text: "Find A: A × A = 49.",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "What digit X makes 3X − X3 = 9? (3X and X3 are 2-digit numbers.)",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "In the multiplication A B × 2 = B A, where A and B are different digits, what is A?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 6"],
          answer: 2
        },
        {
          text: "Fill in □: □ × (□ + 1) = 20. What is □?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 1
        },
        {
          text: "The 3-digit number 2□5 is divisible by 5 and the sum of its digits is 12. What is □?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "The 4-digit number 19□9 is divisible by 9. What is □?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 8", "E. 9"],
          answer: 3
        },
        {
          text: "What digit P makes PP + P = 33? (PP is a 2-digit repdigit.)",
          choices: ["A. 9", "B. 8", "C. 7", "D. 6", "E. 5"],
          answer: 0
        },
        {
          text: "Find digit T: T × (T + 2) = 35.",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "The 2-digit number AB satisfies A + B = 11 and A − B = 3. What is AB?",
          choices: ["A. 47", "B. 56", "C. 65", "D. 74", "E. 83"],
          answer: 3
        },
        {
          text: "In □ + □□ = 55, the single-digit □ equals the tens digit of □□. What is □?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "What missing digit makes □4 × 3 = □□2? If the result ends in 2, which 2-digit number □4 works? (Hint: 44 × 3 = 132.)",
          choices: ["A. 34", "B. 44", "C. 54", "D. 64", "E. 74"],
          answer: 1
        },
        {
          text: "In the addition □□□ − 456 = 123, what is the 3-digit minuend?",
          choices: ["A. 579", "B. 589", "C. 599", "D. 609", "E. 619"],
          answer: 0
        },
        {
          text: "The sum 1□ + 2□ + 3□ = 9□ for some digit □. What is □?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 5", "E. 7"],
          answer: 0
        },
        {
          text: "In A B C + C B A = 1000, where A, B, C are different nonzero digits, what is A + C?",
          choices: ["A. 7", "B. 8", "C. 9", "D. 10", "E. 11"],
          answer: 3
        },
        {
          text: "Find digit N such that N × 6 ends in digit N. What is N?",
          choices: ["A. 2", "B. 4", "C. 6", "D. 8", "E. 0"],
          answer: 1
        },
        {
          text: "What digit D makes 6D − D6 = 27? (6D and D6 are 2-digit numbers.)",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 9"],
          answer: 2
        },
        {
          text: "In □ × □ = 81, both boxes hold the same digit. What is it?",
          choices: ["A. 7", "B. 8", "C. 9", "D. 6", "E. 5"],
          answer: 2
        },
        {
          text: "A number has two digits. Their sum is 10 and their product is 25. What is the number?",
          choices: ["A. 55", "B. 46", "C. 64", "D. 37", "E. 73"],
          answer: 0
        },
        {
          text: "In □ × □ = □ + □, all four boxes hold the same digit. Which nonzero digit works?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 1
        },
        {
          text: "What digit fills both boxes in □8 + 8□ = 121?",
          choices: ["A. 3", "B. 4", "C. 2", "D. 1", "E. 6"],
          answer: 0
        },
        {
          text: "In the pattern □, □+3, □+6, □+9 = 25 (last term), what is □?",
          choices: ["A. 13", "B. 14", "C. 15", "D. 16", "E. 17"],
          answer: 3
        },
        {
          text: "A □-digit repdigit □□ satisfies □□ + □□ = 66. What is □?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "In the multiplication 3□ × 3 = □□1, what is □?",
          choices: ["A. 3", "B. 4", "C. 7", "D. 9", "E. 5"],
          answer: 2
        },
        {
          text: "What digit K satisfies K + K + K = K × K − 3?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 1
        },
        {
          text: "Find the missing digit: 9□ − 4□ = 54, where both boxes hold the same digit.",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 3
        },
        {
          text: "In □□ × 5 = □50, the product ends in 50. What is the 2-digit number? (Hint: 30 × 5 = 150.)",
          choices: ["A. 30", "B. 50", "C. 70", "D. 90", "E. 25"],
          answer: 0
        },
        {
          text: "What digit Q makes QQ (a 2-digit repdigit) equal to 11 × Q?",
          choices: ["A. any digit 1 to 9", "B. only odd digits", "C. only even digits", "D. only prime digits", "E. no digit"],
          answer: 0
        },
        {
          text: "In □□ + □□ = 77, using digits 2, 3, 4, 5 (each once), which arrangement works?",
          choices: ["A. 25 + 52", "B. 32 + 45", "C. 23 + 54", "D. 34 + 52", "E. 24 + 53"],
          answer: 2
        },
        {
          text: "The 3-digit number □8□ uses the same digit in both boxes. The digit sum is 17. What is the repeated digit?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 8", "E. 9"],
          answer: 3
        },
        {
          text: "In the division □□ ÷ 6 = 8 remainder 2, what is the 2-digit dividend?",
          choices: ["A. 48", "B. 50", "C. 52", "D. 54", "E. 56"],
          answer: 1
        },
        {
          text: "What digit B makes AB a 2-digit number where A = B + 3 and A + B = 11? What is AB?",
          choices: ["A. 74", "B. 63", "C. 85", "D. 52", "E. 41"],
          answer: 0
        },
        {
          text: "In the addition □0□ + □0□ = 606, where both addends are identical, what is the repeated 3-digit number?",
          choices: ["A. 202", "B. 303", "C. 404", "D. 101", "E. 505"],
          answer: 1
        },
        {
          text: "Find □ so that □□ (a 2-digit repdigit) is a multiple of 9. What is □?",
          choices: ["A. 3", "B. 6", "C. 9", "D. 4", "E. 2"],
          answer: 0
        },
        {
          text: "The number □24 is divisible by 4. Which digit □ from {1, 3, 5, 7, 9} is possible? (A number is divisible by 4 if its last two digits form a multiple of 4.)",
          choices: ["A. 1", "B. 3", "C. 5", "D. 7", "E. 9"],
          answer: 0
        }
      ]
    },

    "11.2": {
      title: "11.2 Card / Symbol Digit Mapping",
      questions: [
        {
          text: "If ★ = 5 and ■ × ★ = 15, what is ■?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "If ▲ = 3 and ▲ + ● = 8, what is ●?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "Each letter represents a different digit: A = 1, B = 2, C = 3. What is the number CAB?",
          choices: ["A. 123", "B. 213", "C. 312", "D. 321", "E. 132"],
          answer: 2
        },
        {
          text: "★ + ★ = 10. What is ★?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "If ♦ = 4 and ♠ = 7, what is ♠ − ♦?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "○ × ○ = 36. What is ○?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "If △ + △ + △ = 24, what is △?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "A card code: ♣ = 5, ♥ = 3. What is ♣ × ♥?",
          choices: ["A. 8", "B. 12", "C. 15", "D. 18", "E. 20"],
          answer: 2
        },
        {
          text: "If ● + ■ = 11 and ● = 6, what is ■?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "Each shape has a value: ★ = 2, ▲ = 3, ● = 5. What is ★ + ▲ + ●?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 11", "E. 12"],
          answer: 2
        },
        {
          text: "If ♠ + ♠ + ♠ = 18 and ♥ = ♠ − 2, what is ♥?",
          choices: ["A. 3", "B. 4", "C. 6", "D. 7", "E. 8"],
          answer: 1
        },
        {
          text: "If ○ = 7 and △ = 4, what is ○ × △ − ○?",
          choices: ["A. 18", "B. 20", "C. 21", "D. 22", "E. 24"],
          answer: 2
        },
        {
          text: "A code uses ■ and ●. If ■ + ● = 9 and ■ − ● = 3, what is ■?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "Cards show that ★ × 4 = 28. What is ★?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "If ▲ represents an odd number and ▲ + ▲ = 14, what is ▲?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "A symbol code: ♣ + ♦ = 12, ♣ = ♦ + 2. What is ♦?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 1
        },
        {
          text: "If ● = 9 and ■ = ● ÷ 3, what is ■ + ●?",
          choices: ["A. 10", "B. 11", "C. 12", "D. 13", "E. 14"],
          answer: 2
        },
        {
          text: "Each animal stands for a digit: CAT = 3 digits where C = 1, A = 2, T = 4. What is CAT as a 3-digit number?",
          choices: ["A. 124", "B. 142", "C. 214", "D. 241", "E. 412"],
          answer: 0
        },
        {
          text: "★ + ■ = 13. ★ = 2 × ■. What is ■?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 1
        },
        {
          text: "If ♦ + ♠ + ♣ = 18, ♦ = 5, ♠ = 7, what is ♣?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "A code: △ = 4, ○ = 6, □ = 3. What is (△ + ○) × □?",
          choices: ["A. 24", "B. 28", "C. 30", "D. 32", "E. 36"],
          answer: 2
        },
        {
          text: "If ● × ■ = 20 and ● + ■ = 9, what is ● (the larger value)?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "Cards show that ★ + ★ + ★ + ★ = 20 and ■ = ★ − 1. What is ■?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 1
        },
        {
          text: "If ♠ represents a digit and ♠ × (♠ + 1) = 42, what is ♠?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "A symbol puzzle: ○ = 3, △ = 5, □ = 2. What is ○ × △ + □?",
          choices: ["A. 15", "B. 16", "C. 17", "D. 18", "E. 19"],
          answer: 2
        },
        {
          text: "If A = 5, B = 3, C = 7, what is the value of A × B + C?",
          choices: ["A. 20", "B. 21", "C. 22", "D. 23", "E. 24"],
          answer: 2
        },
        {
          text: "Each card has a value: ♥ = 6, ♠ = 4, ♦ = 2. What is ♥ + ♠ − ♦?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "If ▲ + ▲ = ● and ● + ▲ = 15, what is ▲?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "A code where each symbol equals a digit: ★ = 8, ■ = 3. What is ★ − ■ − ■?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 1
        },
        {
          text: "If ♣ × ♣ = ♦ and ♦ − ♣ = 6, what is ♣?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 1
        },
        {
          text: "A symbol code: △ + □ = 10, △ × □ = 21. What is △ (the larger value)?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "In a card game: ♥ = ♠ + 4 and ♥ + ♠ = 12. What is ♥?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "If ○ = 2 and ★ = ○ × ○ × ○, what is ★?",
          choices: ["A. 4", "B. 6", "C. 8", "D. 10", "E. 12"],
          answer: 2
        },
        {
          text: "Each letter is a digit: D = 3, O = 0, G = 9. What is DOG as a 3-digit number?",
          choices: ["A. 309", "B. 390", "C. 903", "D. 930", "E. 039"],
          answer: 0
        },
        {
          text: "If ■ + ■ + ■ = 21 and ● = ■ + 2, what is ●?",
          choices: ["A. 7", "B. 8", "C. 9", "D. 10", "E. 11"],
          answer: 2
        },
        {
          text: "A symbol puzzle: ♦ = 6, ♣ = ♦ ÷ 2. What is ♣ + ♦?",
          choices: ["A. 7", "B. 8", "C. 9", "D. 10", "E. 11"],
          answer: 2
        },
        {
          text: "If ★ × 3 = 27 and ■ = ★ − 4, what is ■?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "Cards: ♠ = 9, ♥ = 4. What is ♠ × ♥ − ♠?",
          choices: ["A. 24", "B. 26", "C. 27", "D. 28", "E. 30"],
          answer: 2
        },
        {
          text: "If each animal represents a number: CAT = 3, DOG = 7, what is CAT + DOG?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 11", "E. 12"],
          answer: 2
        },
        {
          text: "A code: ○ + △ = 11, ○ − △ = 3. What is ○?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "If ♥ represents a digit and ♥ + ♥ + ♥ = ♥ × ♥ − 6, what is ♥?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 3
        },
        {
          text: "Symbol code: ★ = 7, ▲ = ★ − 3, ● = ▲ + ★. What is ●?",
          choices: ["A. 9", "B. 10", "C. 11", "D. 12", "E. 13"],
          answer: 2
        },
        {
          text: "If ■ = 5 and ▲ = 8, what is (▲ − ■) × ■?",
          choices: ["A. 10", "B. 12", "C. 15", "D. 18", "E. 20"],
          answer: 2
        },
        {
          text: "Cards show: ♣ + ♦ = 14, ♣ = ♦ × 2. What is ♦?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 1
        },
        {
          text: "If ○ = 10 and △ = ○ ÷ 2, what is ○ + △ + △?",
          choices: ["A. 15", "B. 18", "C. 20", "D. 22", "E. 25"],
          answer: 2
        },
        {
          text: "In a symbol code: ♠ × ♥ = 24, ♠ + ♥ = 10. What is ♠ (the smaller value)?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 1
        },
        {
          text: "If A = 2, B = 5, C = 8, what is C − B + A?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "A code: ★ = 6, ■ = 4, ● = 2. What is ★ × ■ ÷ ●?",
          choices: ["A. 8", "B. 10", "C. 12", "D. 14", "E. 16"],
          answer: 2
        },
        {
          text: "Each card suit has a value: ♣ = 1, ♦ = 2, ♥ = 3, ♠ = 4. What is ♣ + ♦ + ♥ + ♠?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 11", "E. 12"],
          answer: 2
        },
        {
          text: "If ▲ + ● = 9 and ▲ × ● = 20, what is ▲ (the larger value)?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        }
      ]
    },

    "12.1": {
      title: "12.1 Frequency & Rolling",
      questions: [
        {
          text: "A fair die is rolled once. How many outcomes show an even number?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "A fair die is rolled once. How many outcomes show a number less than 3?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 1
        },
        {
          text: "A fair die is rolled once. How many outcomes show a multiple of 3?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 1
        },
        {
          text: "A fair die is rolled once. What fraction of outcomes show an odd number?",
          choices: ["A. 1/6", "B. 2/6", "C. 3/6", "D. 4/6", "E. 5/6"],
          answer: 2
        },
        {
          text: "A fair die is rolled once. What fraction of outcomes show a number greater than 4?",
          choices: ["A. 1/6", "B. 2/6", "C. 3/6", "D. 4/6", "E. 5/6"],
          answer: 1
        },
        {
          text: "A bag has 4 red marbles and 6 blue marbles. How many ways are there to pick a red marble?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "Cards numbered 1 to 10 are placed face down. One card is picked at random. How many cards show a number greater than 7?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "Cards numbered 1 to 10 are placed face down. One card is picked at random. How many cards show an even number less than 7?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "A coin is flipped 20 times. How many heads would you expect?",
          choices: ["A. 5", "B. 8", "C. 10", "D. 12", "E. 15"],
          answer: 2
        },
        {
          text: "A fair die is rolled 12 times. How many times would you expect to get a multiple of 3?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "A fair die is rolled 30 times. How many times would you expect to get a 5?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "A fair die is rolled 24 times. How many times would you expect to get an even number?",
          choices: ["A. 6", "B. 8", "C. 10", "D. 12", "E. 14"],
          answer: 3
        },
        {
          text: "In 30 rolls of a die, the number 4 appeared 8 times. How many times did numbers other than 4 appear?",
          choices: ["A. 18", "B. 20", "C. 22", "D. 24", "E. 26"],
          answer: 2
        },
        {
          text: "A student rolled a die 20 times. The tally shows: 1 appeared 3 times, 2 appeared 4 times, 3 appeared 2 times, 4 appeared 5 times, 5 appeared 3 times, 6 appeared 3 times. Which number appeared most often?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 3
        },
        {
          text: "A student rolled a die 20 times. The tally shows: 1 appeared 3 times, 2 appeared 4 times, 3 appeared 2 times, 4 appeared 5 times, 5 appeared 3 times, 6 appeared 3 times. Which number appeared least often?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "A die is rolled 18 times. The results are: 1 appeared 4 times, 2 appeared 2 times, 3 appeared 3 times, 4 appeared 1 time, 5 appeared 5 times, 6 appeared 3 times. How many times did even numbers appear?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "Two dice are rolled. How many outcomes have the first die showing a larger number than the second die?",
          choices: ["A. 10", "B. 12", "C. 15", "D. 18", "E. 20"],
          answer: 2
        },
        {
          text: "Two dice are rolled. How many ways can you get a sum of 7?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "Two dice are rolled. How many ways can you get a sum of 2?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 0
        },
        {
          text: "Two dice are rolled. How many ways can you get a sum of 12?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 0
        },
        {
          text: "Two dice are rolled. How many ways can you get a sum of 5?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "Two dice are rolled. How many outcomes show both dice landing on the same number?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "Two dice are rolled. What is the total number of possible outcomes?",
          choices: ["A. 12", "B. 24", "C. 36", "D. 48", "E. 64"],
          answer: 2
        },
        {
          text: "A bag has 2 red, 3 blue, and 5 yellow marbles. A marble is picked at random. What fraction of the marbles are blue?",
          choices: ["A. 1/10", "B. 2/10", "C. 3/10", "D. 4/10", "E. 5/10"],
          answer: 2
        },
        {
          text: "A bag has 2 red, 3 blue, and 5 yellow marbles. How many marbles are NOT red?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 3
        },
        {
          text: "A box has 5 green and 5 white balls. A ball is picked at random. What fraction shows green?",
          choices: ["A. 1/5", "B. 1/4", "C. 1/3", "D. 1/2", "E. 2/3"],
          answer: 3
        },
        {
          text: "A fair die is rolled once. What fraction of outcomes show a number less than 5?",
          choices: ["A. 1/6", "B. 2/6", "C. 3/6", "D. 4/6", "E. 5/6"],
          answer: 3
        },
        {
          text: "A spinner has 4 equal sections coloured red, blue, green, and yellow. If you spin it 40 times, how many times would you expect it to land on blue?",
          choices: ["A. 5", "B. 8", "C. 10", "D. 12", "E. 15"],
          answer: 2
        },
        {
          text: "A spinner has 3 equal sections coloured red, blue, and green. If you spin it 30 times, how many times would you expect it to land on red?",
          choices: ["A. 5", "B. 8", "C. 10", "D. 12", "E. 15"],
          answer: 2
        },
        {
          text: "A coin is flipped 100 times. How many tails would you expect?",
          choices: ["A. 25", "B. 33", "C. 40", "D. 50", "E. 60"],
          answer: 3
        },
        {
          text: "A fair die is rolled 6 times. How many times would you expect to get a 6?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 4"],
          answer: 1
        },
        {
          text: "Cards numbered 1 to 20 are shuffled. One card is drawn. How many cards show a multiple of 4?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "Cards numbered 1 to 20 are shuffled. One card is drawn. How many cards show a prime number less than 10?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "In a game, you roll a die and win if you get a 1 or a 6. How many outcomes are winning outcomes?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 1
        },
        {
          text: "A fair die is rolled 60 times. How many times would you expect to get an odd number?",
          choices: ["A. 10", "B. 20", "C. 30", "D. 40", "E. 50"],
          answer: 2
        },
        {
          text: "A bag contains 1 red, 1 blue, 1 green, and 1 yellow marble. You pick one without looking. How many choices give you a colour that is NOT red?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "Two dice are rolled. How many outcomes show a sum greater than 10?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 1
        },
        {
          text: "Two dice are rolled. How many outcomes show a sum less than 4?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 1
        },
        {
          text: "A class recorded the colours of 20 cars passing their school: red appeared 6 times, blue 5 times, white 4 times, black 3 times, other 2 times. Which colour appeared most?",
          choices: ["A. Blue", "B. White", "C. Red", "D. Black", "E. Other"],
          answer: 2
        },
        {
          text: "A class recorded the colours of 20 cars: red 6, blue 5, white 4, black 3, other 2. How many more red cars were seen than black cars?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "A fair die is rolled. How many outcomes show a number that is a perfect square?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 1
        },
        {
          text: "A fair die is rolled 36 times. How many times would you expect to get a 1?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 3
        },
        {
          text: "A spinner is divided into 6 equal parts numbered 1 to 6. You spin it 60 times. How many times would you expect a number greater than 4?",
          choices: ["A. 10", "B. 15", "C. 20", "D. 25", "E. 30"],
          answer: 2
        },
        {
          text: "Two dice are rolled. How many outcomes have at least one die showing a 6?",
          choices: ["A. 9", "B. 10", "C. 11", "D. 12", "E. 13"],
          answer: 2
        },
        {
          text: "A bag holds 6 balls: 2 are striped and 4 are plain. One ball is drawn. What fraction of the balls are striped?",
          choices: ["A. 1/6", "B. 1/4", "C. 1/3", "D. 1/2", "E. 2/3"],
          answer: 2
        },
        {
          text: "A die is rolled 48 times. How many times would you expect to get a number less than 3?",
          choices: ["A. 8", "B. 12", "C. 16", "D. 20", "E. 24"],
          answer: 2
        },
        {
          text: "A game uses a spinner with 4 equal sections numbered 1, 2, 3, 4. The spinner is spun 40 times. How many times would you expect to get an even number?",
          choices: ["A. 10", "B. 15", "C. 20", "D. 25", "E. 30"],
          answer: 2
        },
        {
          text: "In 50 rolls of a die, odd numbers appeared 28 times. How many times did even numbers appear?",
          choices: ["A. 18", "B. 20", "C. 22", "D. 24", "E. 26"],
          answer: 2
        },
        {
          text: "A bag has 10 marbles: 3 red, 4 blue, 3 green. A marble is drawn. How many outcomes give a colour that is NOT blue?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 3
        },
        {
          text: "A fair die is rolled once. How many outcomes show a number between 2 and 5 (inclusive)?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        }
      ]
    }

  }, // end grade 34


  // ============================================================
  // GRADE 5-6 (Benjamin)
  // ============================================================
  "56": {

    "1.1": {
      title: "1.1 Basic Arithmetic",
      questions: [
        {
          text: "What is 2³ × 5 + 144 ÷ 12?",
          choices: ["A. 48", "B. 50", "C. 52", "D. 54", "E. 56"],
          answer: 2
        },
        {
          text: "Calculate: (17 + 8) × 4 − 50 ÷ 5",
          choices: ["A. 88", "B. 90", "C. 92", "D. 94", "E. 96"],
          answer: 1
        },
        {
          text: "What is the value of 5² + 4² − 3²?",
          choices: ["A. 30", "B. 32", "C. 34", "D. 36", "E. 38"],
          answer: 1
        },
        {
          text: "Solve: 3x + 7 = 28. What is x?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "What is √169 + √121?",
          choices: ["A. 22", "B. 23", "C. 24", "D. 25", "E. 26"],
          answer: 2
        },
        {
          text: "Calculate: 1000 − 256 × 3 + 100",
          choices: ["A. 232", "B. 256", "C. 312", "D. 342", "E. 366"],
          answer: 0
        },
        {
          text: "What is (3 + 7)² − (3² + 7²)?",
          choices: ["A. 38", "B. 40", "C. 42", "D. 44", "E. 46"],
          answer: 2
        },
        {
          text: "Solve: 5(x − 3) = 35. What is x?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 11", "E. 12"],
          answer: 2
        },
        {
          text: "What is 48 × 25 using a mental math shortcut?",
          choices: ["A. 1050", "B. 1100", "C. 1150", "D. 1200", "E. 1250"],
          answer: 3
        },
        {
          text: "Calculate: −5 × (−3) + (−8) × 2",
          choices: ["A. −1", "B. 0", "C. 1", "D. −2", "E. 2"],
          answer: 0
        },
        {
          text: "What is 2⁴ × 3² ÷ 12?",
          choices: ["A. 10", "B. 11", "C. 12", "D. 13", "E. 14"],
          answer: 2
        },
        {
          text: "A train departs at 07:45 and arrives at 11:20. How long is the journey?",
          choices: ["A. 3 h 25 min", "B. 3 h 30 min", "C. 3 h 35 min", "D. 3 h 45 min", "E. 4 h"],
          answer: 2
        },
        {
          text: "What is 999 × 13?",
          choices: ["A. 12,877", "B. 12,987", "C. 13,000", "D. 12,867", "E. 13,013"],
          answer: 1
        },
        {
          text: "Which value of x satisfies 4x − 9 = 2x + 11?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 11", "E. 12"],
          answer: 2
        },
        {
          text: "What is the remainder when 347 is divided by 8?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "Calculate: (2 + 3)³ − 5² × 2",
          choices: ["A. 65", "B. 70", "C. 75", "D. 80", "E. 85"],
          answer: 2
        },
        {
          text: "Four consecutive even integers sum to 100. What is the largest?",
          choices: ["A. 26", "B. 27", "C. 28", "D. 29", "E. 30"],
          answer: 2
        },
        {
          text: "What is 12 × 13 × 14 ÷ (12 + 14)?",
          choices: ["A. 84", "B. 90", "C. 96", "D. 78", "E. 72"],
          answer: 0
        },
        {
          text: "Solve: 7 − 2(3x − 1) = −3. What is x?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 1
        },
        {
          text: "What is 125 × 8 + 250 × 4?",
          choices: ["A. 1800", "B. 1900", "C. 2000", "D. 2100", "E. 2200"],
          answer: 2
        },
        {
          text: "Calculate: 3⁴ − 4³ + 5²",
          choices: ["A. 40", "B. 42", "C. 44", "D. 46", "E. 48"],
          answer: 0
        },
        {
          text: "A number n satisfies 2n + 5 = n + 23. What is n?",
          choices: ["A. 16", "B. 17", "C. 18", "D. 19", "E. 20"],
          answer: 2
        },
        {
          text: "What is (−4)² + (−3)³?",
          choices: ["A. −11", "B. −7", "C. 7", "D. 11", "E. 25"],
          answer: 0
        },
        {
          text: "Calculate: 50 ÷ 2 + 50 × 2 − 50",
          choices: ["A. 25", "B. 50", "C. 75", "D. 100", "E. 125"],
          answer: 2
        },
        {
          text: "What is 101 × 99?",
          choices: ["A. 9,799", "B. 9,900", "C. 9,999", "D. 10,100", "E. 10,001"],
          answer: 2
        },
        {
          text: "Solve: x/4 + x/6 = 5. What is x?",
          choices: ["A. 10", "B. 12", "C. 14", "D. 15", "E. 16"],
          answer: 1
        },
        {
          text: "What is the sum of all integers from −5 to 5?",
          choices: ["A. −5", "B. 0", "C. 5", "D. 10", "E. 15"],
          answer: 1
        },
        {
          text: "A cyclist covers 3 km in 12 minutes. At this rate, how far does she travel in 1 hour?",
          choices: ["A. 12 km", "B. 15 km", "C. 18 km", "D. 20 km", "E. 24 km"],
          answer: 1
        },
        {
          text: "What is 18 × 18 − 17 × 17?",
          choices: ["A. 33", "B. 34", "C. 35", "D. 36", "E. 37"],
          answer: 2
        },
        {
          text: "Calculate: 6! ÷ (4! × 2!). (where n! = 1×2×...×n)",
          choices: ["A. 10", "B. 12", "C. 15", "D. 18", "E. 20"],
          answer: 2
        },
        {
          text: "If x = −3, what is 2x² − 3x + 1?",
          choices: ["A. 24", "B. 26", "C. 28", "D. 30", "E. 32"],
          answer: 2
        },
        {
          text: "What is the largest prime less than 50 squared?",
          choices: ["A. 47² = 2,209", "B. 43² = 1,849", "C. 41² = 1,681", "D. 53² = 2,809", "E. 37² = 1,369"],
          answer: 0
        },
        {
          text: "Solve: (x + 3)/2 = (x − 1)/1. What is x?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "What is 2 × (3 + 4 × (5 − 2))?",
          choices: ["A. 26", "B. 28", "C. 30", "D. 32", "E. 34"],
          answer: 2
        },
        {
          text: "Five friends each give €3.60 for a gift. The gift costs €16.50. How much change remains to be shared equally?",
          choices: ["A. €1.50", "B. €1.45", "C. €1.40", "D. €1.20", "E. €1.00"],
          answer: 0
        },
        {
          text: "What is the value of (100 − 1)(100 + 1)?",
          choices: ["A. 9,900", "B. 9,990", "C. 9,999", "D. 10,000", "E. 10,001"],
          answer: 2
        },
        {
          text: "Calculate: √(4 × 9 × 25)",
          choices: ["A. 25", "B. 28", "C. 30", "D. 32", "E. 36"],
          answer: 2
        },
        {
          text: "Solve: 3(2x − 5) + 4 = 2x + 11. What is x?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "What is 37 × 3 + 37 × 7?",
          choices: ["A. 340", "B. 350", "C. 360", "D. 370", "E. 380"],
          answer: 3
        },
        {
          text: "A box has 144 chocolates. After eating 1/4 of them, then 1/3 of the remainder, how many are left?",
          choices: ["A. 60", "B. 66", "C. 72", "D. 78", "E. 80"],
          answer: 2
        },
        {
          text: "What is 7² × 4 − √196?",
          choices: ["A. 176", "B. 178", "C. 180", "D. 182", "E. 184"],
          answer: 3
        },
        {
          text: "Calculate: 1 + 2 + 3 + ... + 20 (sum of first 20 positive integers)",
          choices: ["A. 190", "B. 200", "C. 210", "D. 220", "E. 230"],
          answer: 2
        },
        {
          text: "Solve: 2(x + 5) = 3(x − 2). What is x?",
          choices: ["A. 14", "B. 15", "C. 16", "D. 17", "E. 18"],
          answer: 2
        },
        {
          text: "What is the value of 10³ − 9³?",
          choices: ["A. 259", "B. 269", "C. 271", "D. 281", "E. 291"],
          answer: 2
        },
        {
          text: "A school has 840 students. 3/8 are in Grade 5, 1/4 are in Grade 6. How many are in neither grade?",
          choices: ["A. 315", "B. 350", "C. 378", "D. 400", "E. 420"],
          answer: 1
        },
        {
          text: "What is 25² − 24²?",
          choices: ["A. 47", "B. 48", "C. 49", "D. 50", "E. 51"],
          answer: 2
        },
        {
          text: "If 2^n = 64, what is n?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "Calculate: (15 − 3 × 4)² + √81",
          choices: ["A. 16", "B. 17", "C. 18", "D. 19", "E. 20"],
          answer: 2
        },
        {
          text: "Solve: x² = 5x. What positive value of x satisfies this? (x ≠ 0)",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "What is 999 + 99 + 9?",
          choices: ["A. 1,097", "B. 1,107", "C. 1,117", "D. 1,097", "E. 1,127"],
          answer: 1
        }
      ]
    },

    "1.2": {
      title: "1.2 Number Properties",
      questions: [
        {
          text: "How many factors does 60 have?",
          choices: ["A. 8", "B. 10", "C. 12", "D. 14", "E. 16"],
          answer: 2
        },
        {
          text: "What is the LCM of 12 and 18?",
          choices: ["A. 24", "B. 30", "C. 36", "D. 48", "E. 72"],
          answer: 2
        },
        {
          text: "Express 360 as a product of prime factors.",
          choices: ["A. 2³ × 3² × 5", "B. 2² × 3³ × 5", "C. 2³ × 3 × 5²", "D. 2⁴ × 3 × 5", "E. 2² × 3² × 5²"],
          answer: 0
        },
        {
          text: "Which of the following is a perfect cube?",
          choices: ["A. 27", "B. 36", "C. 48", "D. 50", "E. 72"],
          answer: 0
        },
        {
          text: "How many prime numbers are there between 50 and 70?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 1
        },
        {
          text: "What is the GCD of 84 and 126?",
          choices: ["A. 14", "B. 21", "C. 28", "D. 42", "E. 63"],
          answer: 3
        },
        {
          text: "A number is divisible by 11 if the alternating sum of its digits is divisible by 11. Which of these is divisible by 11?",
          choices: ["A. 121", "B. 132", "C. 143", "D. 154", "E. All of the above"],
          answer: 4
        },
        {
          text: "How many perfect squares lie between 100 and 300?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 1
        },
        {
          text: "What is the sum of all prime numbers less than 20?",
          choices: ["A. 56", "B. 57", "C. 58", "D. 60", "E. 62"],
          answer: 2
        },
        {
          text: "The number 2024 is divisible by which of these?",
          choices: ["A. 3", "B. 7", "C. 8", "D. 9", "E. 11"],
          answer: 2
        },
        {
          text: "What is the LCM of 8, 12, and 15?",
          choices: ["A. 60", "B. 90", "C. 120", "D. 180", "E. 240"],
          answer: 2
        },
        {
          text: "Which of the following is NOT a factor of 72?",
          choices: ["A. 8", "B. 9", "C. 12", "D. 16", "E. 18"],
          answer: 3
        },
        {
          text: "What is the smallest number divisible by all of 2, 3, 4, 5, and 6?",
          choices: ["A. 30", "B. 45", "C. 60", "D. 90", "E. 120"],
          answer: 2
        },
        {
          text: "A palindrome number reads the same forwards and backwards (e.g., 121). How many 3-digit palindromes are there?",
          choices: ["A. 81", "B. 90", "C. 99", "D. 100", "E. 108"],
          answer: 1
        },
        {
          text: "The digital root of a number is found by repeatedly summing its digits until a single digit remains. What is the digital root of 9,876?",
          choices: ["A. 3", "B. 6", "C. 7", "D. 9", "E. 1"],
          answer: 1
        },
        {
          text: "An abundant number has the sum of its proper factors greater than itself. Which of these is abundant?",
          choices: ["A. 6", "B. 10", "C. 12", "D. 15", "E. 22"],
          answer: 2
        },
        {
          text: "What is the largest prime factor of 252?",
          choices: ["A. 3", "B. 5", "C. 7", "D. 11", "E. 13"],
          answer: 2
        },
        {
          text: "How many two-digit numbers are divisible by both 6 and 9?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 1
        },
        {
          text: "Which of the following has exactly 3 factors?",
          choices: ["A. 4", "B. 9", "C. 16", "D. 25", "E. All of the above"],
          answer: 4
        },
        {
          text: "The product of two consecutive integers is 272. What are the integers?",
          choices: ["A. 15 and 16", "B. 16 and 17", "C. 17 and 18", "D. 14 and 15", "E. 18 and 19"],
          answer: 1
        },
        {
          text: "A number n leaves remainder 3 when divided by 7, and remainder 2 when divided by 5. What is the smallest such positive n?",
          choices: ["A. 17", "B. 22", "C. 27", "D. 32", "E. 37"],
          answer: 0
        },
        {
          text: "What is the GCD of 2³ × 3² × 7 and 2² × 3 × 7²?",
          choices: ["A. 2 × 3 × 7 = 42", "B. 2² × 3 × 7 = 84", "C. 2³ × 3² × 7² = 3528", "D. 2 × 7 = 14", "E. 3 × 7 = 21"],
          answer: 1
        },
        {
          text: "How many integers from 1 to 100 have exactly 2 factors?",
          choices: ["A. 23", "B. 24", "C. 25", "D. 26", "E. 27"],
          answer: 2
        },
        {
          text: "The sum of three consecutive odd numbers is 51. What is the largest?",
          choices: ["A. 15", "B. 17", "C. 19", "D. 21", "E. 23"],
          answer: 2
        },
        {
          text: "Which of the following is divisible by 7?",
          choices: ["A. 84", "B. 90", "C. 95", "D. 100", "E. 102"],
          answer: 0
        },
        {
          text: "What is the product of the GCD and LCM of 20 and 30?",
          choices: ["A. 300", "B. 400", "C. 500", "D. 600", "E. 700"],
          answer: 3
        },
        {
          text: "How many four-digit numbers are perfect squares?",
          choices: ["A. 56", "B. 57", "C. 68", "D. 69", "E. 72"],
          answer: 3
        },
        {
          text: "A number leaves remainder 1 when divided by 2, 3, 4, 5, and 6. What is the smallest such number?",
          choices: ["A. 31", "B. 41", "C. 51", "D. 61", "E. 71"],
          answer: 3
        },
        {
          text: "Which of the following is a perfect number (sum of proper factors equals itself)?",
          choices: ["A. 6", "B. 8", "C. 10", "D. 12", "E. 16"],
          answer: 0
        },
        {
          text: "What is the prime factorisation of 900?",
          choices: ["A. 2² × 3² × 5²", "B. 2³ × 3 × 5²", "C. 2² × 3 × 5³", "D. 2 × 3² × 5²", "E. 2² × 3³ × 5"],
          answer: 0
        },
        {
          text: "How many factors does 2⁵ × 3³ have?",
          choices: ["A. 18", "B. 20", "C. 22", "D. 24", "E. 26"],
          answer: 3
        },
        {
          text: "The number 143 can be written as a product of two primes. What are they?",
          choices: ["A. 11 and 13", "B. 7 and 17", "C. 11 and 11", "D. 13 and 13", "E. 7 and 19"],
          answer: 0
        },
        {
          text: "What is the GCD of 100 and 75?",
          choices: ["A. 5", "B. 15", "C. 25", "D. 50", "E. 75"],
          answer: 2
        },
        {
          text: "If the LCM of two numbers is 120 and their GCD is 4, and one number is 24, what is the other?",
          choices: ["A. 16", "B. 18", "C. 20", "D. 22", "E. 24"],
          answer: 2
        },
        {
          text: "How many numbers from 1 to 50 are divisible by 4 but not by 8?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 1
        },
        {
          text: "Which of the following is divisible by 11?",
          choices: ["A. 1,342", "B. 2,365", "C. 3,476", "D. 4,587", "E. 5,698"],
          answer: 1
        },
        {
          text: "What is the smallest number that, when divided by 3, 4, and 5, always leaves a remainder of 1?",
          choices: ["A. 31", "B. 41", "C. 51", "D. 61", "E. 71"],
          answer: 3
        },
        {
          text: "A perfect square has exactly how many factors of an odd quantity?",
          choices: ["A. Always an even number of factors", "B. Always an odd number of factors", "C. Always exactly 4 factors", "D. It depends on the number", "E. Always a prime number of factors"],
          answer: 1
        },
        {
          text: "Which two-digit prime number, when its digits are reversed, is also prime?",
          choices: ["A. 13", "B. 14", "C. 15", "D. 16", "E. 18"],
          answer: 0
        },
        {
          text: "What is the sum of all factors of 28?",
          choices: ["A. 48", "B. 54", "C. 56", "D. 60", "E. 64"],
          answer: 2
        },
        {
          text: "How many composite numbers are between 10 and 20 (exclusive)?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 1
        },
        {
          text: "What is the smallest prime number greater than 90?",
          choices: ["A. 91", "B. 93", "C. 95", "D. 97", "E. 99"],
          answer: 3
        },
        {
          text: "The sum of the digits of a number is 27. Which of the following must be true?",
          choices: ["A. The number is divisible by 7", "B. The number is divisible by 9", "C. The number is divisible by 11", "D. The number is prime", "E. The number is a perfect square"],
          answer: 1
        },
        {
          text: "What is the number of trailing zeros in 25! (25 factorial)?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "Which number between 70 and 80 has the most factors?",
          choices: ["A. 72", "B. 74", "C. 75", "D. 76", "E. 78"],
          answer: 0
        },
        {
          text: "If p and q are distinct primes, how many factors does p² × q have?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "What is the GCD of 2 × 3 × 5 × 7 and 2 × 3 × 5 × 11?",
          choices: ["A. 2 × 3 = 6", "B. 2 × 5 = 10", "C. 3 × 5 = 15", "D. 2 × 3 × 5 = 30", "E. 2 × 3 × 5 × 7 × 11"],
          answer: 3
        },
        {
          text: "A number n has exactly 4 factors. Which form could n take?",
          choices: ["A. p (prime)", "B. p² (prime squared)", "C. p³ (prime cubed)", "D. p × q (product of two distinct primes)", "E. Both B and D"],
          answer: 4
        },
        {
          text: "How many integers from 1 to 200 are divisible by neither 2 nor 5?",
          choices: ["A. 70", "B. 75", "C. 80", "D. 85", "E. 90"],
          answer: 2
        },
        {
          text: "Which of the following pairs of numbers are co-prime (GCD = 1)?",
          choices: ["A. 14 and 21", "B. 15 and 25", "C. 16 and 35", "D. 18 and 27", "E. 20 and 30"],
          answer: 2
        }
      ]
    },

    "1.3": {
      title: "1.3 Percentages & Ratios",
      questions: [
        {
          text: "A price rises by 20% then falls by 20%. What is the net percentage change?",
          choices: ["A. 0%", "B. −2%", "C. −4%", "D. +4%", "E. −1%"],
          answer: 2
        },
        {
          text: "What percentage is 35 of 140?",
          choices: ["A. 20%", "B. 22%", "C. 25%", "D. 28%", "E. 30%"],
          answer: 2
        },
        {
          text: "If A:B = 3:5 and B:C = 2:7, what is A:C?",
          choices: ["A. 6:35", "B. 3:14", "C. 5:21", "D. 6:35", "E. 1:7"],
          answer: 0
        },
        {
          text: "A jacket is discounted by 30% to €84. What was its original price?",
          choices: ["A. €110", "B. €115", "C. €118", "D. €120", "E. €125"],
          answer: 3
        },
        {
          text: "Three friends share a profit in the ratio 2:3:5. The total profit is €800. How much does the person with the largest share receive?",
          choices: ["A. €300", "B. €350", "C. €380", "D. €400", "E. €420"],
          answer: 3
        },
        {
          text: "A class of 40 students: 45% are boys. How many are girls?",
          choices: ["A. 18", "B. 20", "C. 22", "D. 24", "E. 26"],
          answer: 2
        },
        {
          text: "What is 15% of 20% of 500?",
          choices: ["A. 10", "B. 12", "C. 14", "D. 15", "E. 18"],
          answer: 3
        },
        {
          text: "A car's value depreciates by 15% each year. After 2 years, what percentage of its original value remains?",
          choices: ["A. 70%", "B. 70.25%", "C. 72.25%", "D. 75%", "E. 72%"],
          answer: 2
        },
        {
          text: "The ratio of cats to dogs is 4:7. There are 48 cats. How many animals are there in total?",
          choices: ["A. 120", "B. 124", "C. 128", "D. 132", "E. 136"],
          answer: 3
        },
        {
          text: "A solution is 40% salt. How many grams of salt are in 250 g of the solution?",
          choices: ["A. 80 g", "B. 90 g", "C. 100 g", "D. 110 g", "E. 120 g"],
          answer: 2
        },
        {
          text: "Dividing 180 in the ratio 2:3:4 gives three parts. What is the largest part?",
          choices: ["A. 60", "B. 70", "C. 80", "D. 90", "E. 100"],
          answer: 2
        },
        {
          text: "A price increased by 25% to reach €75. What was the original price?",
          choices: ["A. €55", "B. €58", "C. €60", "D. €62", "E. €65"],
          answer: 2
        },
        {
          text: "If A:B = 5:3 and A + B = 64, what is A − B?",
          choices: ["A. 14", "B. 15", "C. 16", "D. 17", "E. 18"],
          answer: 2
        },
        {
          text: "A school increased its student count by 12% to 448. How many students were there before?",
          choices: ["A. 380", "B. 390", "C. 395", "D. 400", "E. 410"],
          answer: 3
        },
        {
          text: "What percentage of 2.5 hours is 30 minutes?",
          choices: ["A. 15%", "B. 18%", "C. 20%", "D. 22%", "E. 25%"],
          answer: 2
        },
        {
          text: "In a mixture, water to juice is 3:1. If there are 900 ml of mixture, how much juice is there?",
          choices: ["A. 200 ml", "B. 225 ml", "C. 250 ml", "D. 275 ml", "E. 300 ml"],
          answer: 1
        },
        {
          text: "A price rises by 10%, then rises again by 10%. What is the total percentage increase?",
          choices: ["A. 20%", "B. 20.5%", "C. 21%", "D. 21.5%", "E. 22%"],
          answer: 2
        },
        {
          text: "If A:B = 2:3 and B:C = 4:5, what is A:B:C?",
          choices: ["A. 8:12:15", "B. 2:3:5", "C. 4:6:10", "D. 6:9:15", "E. 2:4:5"],
          answer: 0
        },
        {
          text: "45 students sat an exam. 60% passed. How many failed?",
          choices: ["A. 15", "B. 16", "C. 17", "D. 18", "E. 19"],
          answer: 3
        },
        {
          text: "On a map, 1 cm represents 5 km. Two towns are 8.5 cm apart on the map. What is the real distance?",
          choices: ["A. 40 km", "B. 42.5 km", "C. 45 km", "D. 47.5 km", "E. 50 km"],
          answer: 1
        },
        {
          text: "A recipe needs flour and sugar in ratio 5:2. If 350 g of flour is used, how much sugar is needed?",
          choices: ["A. 120 g", "B. 130 g", "C. 140 g", "D. 150 g", "E. 160 g"],
          answer: 2
        },
        {
          text: "After a 40% discount and then a further 10% discount, what is the final percentage discount overall?",
          choices: ["A. 44%", "B. 46%", "C. 48%", "D. 50%", "E. 45%"],
          answer: 1
        },
        {
          text: "The ratio of red to blue marbles is 3:7. There are 70 blue marbles. How many marbles are there in total?",
          choices: ["A. 90", "B. 95", "C. 100", "D. 105", "E. 110"],
          answer: 2
        },
        {
          text: "A coat costs €90 after a 25% price increase. What did it cost before?",
          choices: ["A. €64", "B. €68", "C. €72", "D. €76", "E. €80"],
          answer: 2
        },
        {
          text: "What is 8% of 350?",
          choices: ["A. 24", "B. 26", "C. 28", "D. 30", "E. 32"],
          answer: 2
        },
        {
          text: "Three quantities are in ratio 1:2:4. Their sum is 140. What is twice the smallest quantity?",
          choices: ["A. 20", "B. 30", "C. 35", "D. 40", "E. 50"],
          answer: 0
        },
        {
          text: "A school has 600 pupils. 45% are boys. After 30 more boys join, what percentage are now boys?",
          choices: ["A. 47%", "B. 48%", "C. 49%", "D. 50%", "E. 51%"],
          answer: 3
        },
        {
          text: "A tank is 60% full with 480 litres. What is the total capacity of the tank?",
          choices: ["A. 700 L", "B. 750 L", "C. 800 L", "D. 850 L", "E. 900 L"],
          answer: 2
        },
        {
          text: "If a quantity decreases from 80 to 60, what is the percentage decrease?",
          choices: ["A. 20%", "B. 22%", "C. 25%", "D. 28%", "E. 30%"],
          answer: 2
        },
        {
          text: "A:B = 3:4 and B:C = 5:6. What is the ratio A:C?",
          choices: ["A. 5:8", "B. 15:24", "C. 3:6", "D. 5:6", "E. 1:2"],
          answer: 1
        },
        {
          text: "An item sells for €52 after a VAT of 30% is added. What was the price before VAT?",
          choices: ["A. €36", "B. €38", "C. €40", "D. €42", "E. €44"],
          answer: 2
        },
        {
          text: "A town's population grew by 5% per year for 2 years. Starting from 8,000, what is the population after 2 years?",
          choices: ["A. 8,700", "B. 8,750", "C. 8,800", "D. 8,820", "E. 9,000"],
          answer: 3
        },
        {
          text: "Concrete uses cement, sand, and gravel in ratio 1:2:4. To make 700 kg of concrete, how many kg of sand is needed?",
          choices: ["A. 180 kg", "B. 190 kg", "C. 200 kg", "D. 210 kg", "E. 220 kg"],
          answer: 2
        },
        {
          text: "What number is 35% more than 60?",
          choices: ["A. 79", "B. 80", "C. 81", "D. 82", "E. 83"],
          answer: 2
        },
        {
          text: "In a survey, 72 people preferred tea. This was 36% of those surveyed. How many people were surveyed?",
          choices: ["A. 180", "B. 190", "C. 200", "D. 210", "E. 220"],
          answer: 2
        },
        {
          text: "If x% of 150 equals 45, what is x?",
          choices: ["A. 25", "B. 28", "C. 30", "D. 32", "E. 35"],
          answer: 2
        },
        {
          text: "A medal is 80% gold and 20% silver by mass. If it contains 32 g of gold, what is its total mass?",
          choices: ["A. 36 g", "B. 38 g", "C. 40 g", "D. 42 g", "E. 44 g"],
          answer: 2
        },
        {
          text: "The ratio of apples to pears in a basket is 5:3. When 6 apples are removed, the ratio becomes 1:1. How many pears are in the basket?",
          choices: ["A. 6", "B. 8", "C. 9", "D. 12", "E. 15"],
          answer: 2
        },
        {
          text: "If 30% of a number is 24, what is 45% of the same number?",
          choices: ["A. 30", "B. 32", "C. 34", "D. 36", "E. 38"],
          answer: 3
        },
        {
          text: "A runner ran 5 km on Monday and 8 km on Tuesday. By what percentage did the distance increase?",
          choices: ["A. 50%", "B. 55%", "C. 60%", "D. 65%", "E. 70%"],
          answer: 2
        },
        {
          text: "In a class, boys to girls ratio is 4:5. There are 36 students in all. How many more girls than boys are there?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 2
        },
        {
          text: "If 20% of x equals 15% of 80, what is x?",
          choices: ["A. 54", "B. 58", "C. 60", "D. 62", "E. 64"],
          answer: 2
        },
        {
          text: "Three numbers are in ratio 2:5:8. Their average is 60. What is the largest number?",
          choices: ["A. 96", "B. 100", "C. 108", "D. 112", "E. 120"],
          answer: 0
        },
        {
          text: "A salesperson earns 8% commission on each sale. She needs to earn €400 commission. What is the minimum sales value she needs?",
          choices: ["A. €4,500", "B. €4,750", "C. €5,000", "D. €5,250", "E. €5,500"],
          answer: 2
        },
        {
          text: "A price is reduced by 20%, then reduced by a further 15%. What single percentage discount is equivalent?",
          choices: ["A. 30%", "B. 32%", "C. 33%", "D. 34%", "E. 35%"],
          answer: 1
        },
        {
          text: "In a ratio problem, A:B = 7:4. If B = 24, what is A + B?",
          choices: ["A. 62", "B. 64", "C. 66", "D. 68", "E. 70"],
          answer: 3
        },
        {
          text: "Water expands by approximately 9% when it freezes. If 500 ml of water freezes, what volume of ice is formed?",
          choices: ["A. 535 ml", "B. 540 ml", "C. 545 ml", "D. 550 ml", "E. 555 ml"],
          answer: 2
        },
        {
          text: "In what ratio should two teas costing €3/kg and €5/kg be mixed to produce a mixture worth €4.20/kg?",
          choices: ["A. 3:4", "B. 4:5", "C. 4:6", "D. 2:3", "E. 2:5"],
          answer: 0
        },
        {
          text: "A school's test scores improved from an average of 64 to 80. What is the percentage improvement?",
          choices: ["A. 20%", "B. 22%", "C. 24%", "D. 25%", "E. 28%"],
          answer: 3
        },
        {
          text: "If 12.5% of a number is 25, what is the number?",
          choices: ["A. 180", "B. 190", "C. 200", "D. 210", "E. 220"],
          answer: 2
        }
      ]
    },

    "1.4": {
      title: "1.4 Fractions & Decimals",
      questions: [
        {
          text: "What is 3/4 of 5/6 of 120?",
          choices: ["A. 70", "B. 72", "C. 75", "D. 78", "E. 80"],
          answer: 2
        },
        {
          text: "Simplify 144/180 to its lowest terms.",
          choices: ["A. 3/4", "B. 4/5", "C. 7/9", "D. 8/10", "E. 12/15"],
          answer: 1
        },
        {
          text: "Which is larger: 7/11 or 5/8?",
          choices: ["A. 7/11", "B. 5/8", "C. They are equal", "D. Cannot be determined", "E. Neither, they are both less than 1/2"],
          answer: 1
        },
        {
          text: "What is 2 3/4 + 1 5/6?",
          choices: ["A. 4 7/12", "B. 4 8/12", "C. 4 9/12", "D. 4 10/12", "E. 5"],
          answer: 0
        },
        {
          text: "What is 5/6 ÷ 5/9?",
          choices: ["A. 1/2", "B. 3/2", "C. 25/54", "D. 2", "E. 3/5"],
          answer: 1
        },
        {
          text: "Convert 0.36 recurring (0.363636...) to a fraction.",
          choices: ["A. 36/99 = 4/11", "B. 36/100 = 9/25", "C. 1/3", "D. 4/10", "E. 7/20"],
          answer: 0
        },
        {
          text: "What is 4/5 − 3/7?",
          choices: ["A. 11/35", "B. 13/35", "C. 1/2", "D. 16/35", "E. 17/35"],
          answer: 1
        },
        {
          text: "A container holds 7/8 of a litre. After pouring out 1/3 of the litre, how much remains?",
          choices: ["A. 13/24 L", "B. 1/2 L", "C. 7/12 L", "D. 5/8 L", "E. 11/24 L"],
          answer: 0
        },
        {
          text: "What is 2.4 × 0.35?",
          choices: ["A. 0.74", "B. 0.80", "C. 0.84", "D. 0.90", "E. 0.96"],
          answer: 2
        },
        {
          text: "What fraction of 2.5 is 0.75?",
          choices: ["A. 3/10", "B. 3/8", "C. 3/5", "D. 3/7", "E. 2/5"],
          answer: 0
        },
        {
          text: "Which of the following equals 5/8 as a decimal?",
          choices: ["A. 0.58", "B. 0.625", "C. 0.65", "D. 0.6", "E. 0.56"],
          answer: 1
        },
        {
          text: "What is (2/3)² × (3/4)?",
          choices: ["A. 1/3", "B. 2/3", "C. 4/9", "D. 1/4", "E. 3/8"],
          answer: 0
        },
        {
          text: "Calculate: 3 1/2 × 2 2/3",
          choices: ["A. 8 1/3", "B. 9", "C. 9 1/3", "D. 9 2/3", "E. 10"],
          answer: 2
        },
        {
          text: "What is 0.125 as a fraction in lowest terms?",
          choices: ["A. 1/8", "B. 1/6", "C. 12/100", "D. 5/40", "E. 1/9"],
          answer: 0
        },
        {
          text: "A piece of rope 7/8 m long is cut into pieces of 1/4 m each. How many pieces can be cut, and what length of rope remains?",
          choices: ["A. 3 pieces, 1/8 m", "B. 3 pieces, 3/8 m", "C. 4 pieces, 0 m", "D. 3 pieces, 1/4 m", "E. 2 pieces, 3/8 m"],
          answer: 0
        },
        {
          text: "Which of the following fractions is between 2/3 and 3/4?",
          choices: ["A. 5/7", "B. 7/10", "C. 4/6", "D. 5/6", "E. 9/13"],
          answer: 1
        },
        {
          text: "What is 1 − 1/2 − 1/4 − 1/8 − 1/16?",
          choices: ["A. 1/16", "B. 1/8", "C. 3/16", "D. 1/4", "E. 5/16"],
          answer: 0
        },
        {
          text: "Arrange these in ascending order: 5/9, 4/7, 7/12.",
          choices: ["A. 5/9, 4/7, 7/12", "B. 4/7, 5/9, 7/12", "C. 7/12, 4/7, 5/9", "D. 4/7, 7/12, 5/9", "E. 7/12, 5/9, 4/7"],
          answer: 3
        },
        {
          text: "What is (3/5 + 2/3) × 15?",
          choices: ["A. 14", "B. 15", "C. 17", "D. 19", "E. 21"],
          answer: 3
        },
        {
          text: "A recipe calls for 2/3 cup of sugar. If you are making 1.5 times the recipe, how much sugar do you need?",
          choices: ["A. 3/4 cup", "B. 1 cup", "C. 1 1/4 cups", "D. 1 1/3 cups", "E. 1 1/2 cups"],
          answer: 1
        },
        {
          text: "Express the recurring decimal 0.1666... as a fraction.",
          choices: ["A. 1/5", "B. 1/6", "C. 1/7", "D. 2/11", "E. 5/30"],
          answer: 1
        },
        {
          text: "What is 7/8 − 3/5 + 1/4?",
          choices: ["A. 21/40", "B. 23/40", "C. 1/2", "D. 27/40", "E. 29/40"],
          answer: 1
        },
        {
          text: "A jug holds 3/4 of a litre. It is 2/3 full. How many millilitres of water does it contain?",
          choices: ["A. 400 ml", "B. 450 ml", "C. 500 ml", "D. 550 ml", "E. 600 ml"],
          answer: 2
        },
        {
          text: "Which of these equals 17/4?",
          choices: ["A. 4.17", "B. 4.25", "C. 4.5", "D. 4.75", "E. 5.17"],
          answer: 1
        },
        {
          text: "What is 4/9 × 27/8?",
          choices: ["A. 3/2", "B. 4/3", "C. 2", "D. 5/3", "E. 12/8"],
          answer: 0
        },
        {
          text: "If 2/5 of a number is 30, what is 3/4 of the same number?",
          choices: ["A. 50", "B. 52.5", "C. 55", "D. 56.25", "E. 60"],
          answer: 3
        },
        {
          text: "A tank is 3/8 full. After adding 30 litres, it becomes 5/8 full. What is the capacity of the tank?",
          choices: ["A. 100 L", "B. 110 L", "C. 120 L", "D. 130 L", "E. 140 L"],
          answer: 2
        },
        {
          text: "What is 0.6 + 0.06 + 0.006 + 0.0006?",
          choices: ["A. 0.6666", "B. 0.6600", "C. 0.6006", "D. 0.6660", "E. 0.606"],
          answer: 0
        },
        {
          text: "Simplify: (1/2 + 1/3) ÷ (1/4 + 1/6)",
          choices: ["A. 2", "B. 5/3", "C. 3/2", "D. 2/3", "E. 4/5"],
          answer: 0
        },
        {
          text: "A rope is divided into 5 pieces. The pieces are in ratio 1:2:3:4:5. If the total length is 90 m, how long is the second-longest piece?",
          choices: ["A. 18 m", "B. 24 m", "C. 27 m", "D. 30 m", "E. 36 m"],
          answer: 1
        },
        {
          text: "What is 1/7 as a decimal? (Write the first 4 decimal places.)",
          choices: ["A. 0.1428...", "B. 0.1414...", "C. 0.1666...", "D. 0.1250", "E. 0.1111..."],
          answer: 0
        },
        {
          text: "Calculate: (5/6 − 1/3) × (1/2 + 1/4)",
          choices: ["A. 3/8", "B. 5/12", "C. 1/2", "D. 7/16", "E. 5/16"],
          answer: 0
        },
        {
          text: "A number, when divided by 3/5, gives 25. What is the number?",
          choices: ["A. 12", "B. 13", "C. 14", "D. 15", "E. 16"],
          answer: 3
        },
        {
          text: "What is 5 − 2 3/7?",
          choices: ["A. 2 3/7", "B. 2 4/7", "C. 3 3/7", "D. 3 4/7", "E. 2 5/7"],
          answer: 1
        },
        {
          text: "Which fraction is equivalent to 0.875?",
          choices: ["A. 7/8", "B. 5/6", "C. 8/9", "D. 6/7", "E. 9/10"],
          answer: 0
        },
        {
          text: "What is the sum of 1/2 + 1/4 + 1/8 + 1/16 + 1/32?",
          choices: ["A. 29/32", "B. 30/32", "C. 31/32", "D. 15/16", "E. 63/64"],
          answer: 2
        },
        {
          text: "A fraction has numerator 5. When 3 is added to both numerator and denominator, the fraction equals 2/3. What is the denominator?",
          choices: ["A. 10", "B. 11", "C. 12", "D. 13", "E. 14"],
          answer: 2
        },
        {
          text: "What is the value of (1 + 1/2)(1 + 1/3)(1 + 1/4)?",
          choices: ["A. 2.25", "B. 2.5", "C. 2.75", "D. 3", "E. 3.25"],
          answer: 1
        },
        {
          text: "Convert 2 5/6 to an improper fraction.",
          choices: ["A. 15/6", "B. 16/6", "C. 17/6", "D. 18/6", "E. 19/6"],
          answer: 2
        },
        {
          text: "If 3/4 of a class are present, and there are 27 students present, how many students are absent?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 3
        },
        {
          text: "What is (2/3)³?",
          choices: ["A. 4/9", "B. 6/9", "C. 8/27", "D. 8/9", "E. 2/9"],
          answer: 2
        },
        {
          text: "A jar is 4/5 full. After removing 0.2 of the jar's capacity, what fraction of the jar is full?",
          choices: ["A. 3/5", "B. 2/3", "C. 3/4", "D. 7/10", "E. 4/7"],
          answer: 0
        },
        {
          text: "What decimal value is halfway between 0.3 and 0.4?",
          choices: ["A. 0.34", "B. 0.35", "C. 0.36", "D. 0.37", "E. 0.38"],
          answer: 1
        },
        {
          text: "What is 1/3 + 1/6 + 1/12 + 1/24?",
          choices: ["A. 5/8", "B. 7/8", "C. 5/6", "D. 5/12", "E. 3/4"],
          answer: 0
        },
        {
          text: "A belt uses 0.8 m of leather per belt. A full roll has 20 m. What fraction of the roll remains after making 15 belts?",
          choices: ["A. 1/5", "B. 1/4", "C. 1/10", "D. 1/8", "E. 1/6"],
          answer: 0
        },
        {
          text: "Calculate: 1.2 × 0.5 + 0.6 × 0.25",
          choices: ["A. 0.70", "B. 0.72", "C. 0.74", "D. 0.75", "E. 0.80"],
          answer: 3
        },
        {
          text: "What is the largest of these fractions: 2/3, 3/5, 5/8, 7/12?",
          choices: ["A. 2/3", "B. 3/5", "C. 5/8", "D. 7/12", "E. They are all equal"],
          answer: 0
        },
        {
          text: "A machine produces 1/6 of a product per hour. How many hours to produce 5 products?",
          choices: ["A. 25", "B. 28", "C. 30", "D. 32", "E. 35"],
          answer: 2
        },
        {
          text: "What is 0.1 + 0.01 + 0.001 + ... (infinite sum of the geometric series with first term 0.1 and ratio 0.1)?",
          choices: ["A. 1/9", "B. 1/10", "C. 2/9", "D. 1/11", "E. 1/8"],
          answer: 0
        },
        {
          text: "Simplify the complex fraction: (3/4) / (9/16)",
          choices: ["A. 3/4", "B. 4/3", "C. 27/64", "D. 4/5", "E. 2/3"],
          answer: 1
        }
      ]
    },

    "2.1": {
      title: "2.1 Basic Geometry (2D Shapes)",
      questions: [
        {
          text: "A trapezium has parallel sides of 8 cm and 12 cm, and a height of 5 cm. What is its area?",
          choices: ["A. 40 cm²", "B. 45 cm²", "C. 50 cm²", "D. 55 cm²", "E. 60 cm²"],
          answer: 2
        },
        {
          text: "A regular hexagon has side 6 cm. What is its perimeter?",
          choices: ["A. 30 cm", "B. 32 cm", "C. 36 cm", "D. 40 cm", "E. 42 cm"],
          answer: 2
        },
        {
          text: "A circle has a circumference of 31.4 cm. Approximately what is its radius? (π ≈ 3.14)",
          choices: ["A. 3 cm", "B. 4 cm", "C. 5 cm", "D. 6 cm", "E. 7 cm"],
          answer: 2
        },
        {
          text: "Two rectangles, each 6 cm × 4 cm, overlap with a 2 cm × 2 cm square. What is the combined area?",
          choices: ["A. 40 cm²", "B. 44 cm²", "C. 48 cm²", "D. 50 cm²", "E. 52 cm²"],
          answer: 1
        },
        {
          text: "The interior angles of a polygon sum to 540°. How many sides does it have?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 1
        },
        {
          text: "A square has perimeter 36 cm. What is its area?",
          choices: ["A. 36 cm²", "B. 64 cm²", "C. 72 cm²", "D. 81 cm²", "E. 100 cm²"],
          answer: 3
        },
        {
          text: "A rectangle has length 12 cm and width 7 cm. What is its perimeter?",
          choices: ["A. 19 cm", "B. 38 cm", "C. 84 cm", "D. 42 cm", "E. 24 cm"],
          answer: 1
        },
        {
          text: "A triangle has a base of 10 cm and a height of 6 cm. What is its area?",
          choices: ["A. 20 cm²", "B. 25 cm²", "C. 30 cm²", "D. 40 cm²", "E. 60 cm²"],
          answer: 2
        },
        {
          text: "A parallelogram has a base of 9 cm and a height of 4 cm. What is its area?",
          choices: ["A. 13 cm²", "B. 26 cm²", "C. 32 cm²", "D. 36 cm²", "E. 40 cm²"],
          answer: 3
        },
        {
          text: "A circle has radius 7 cm. What is its area? (π ≈ 3.14)",
          choices: ["A. 43.96 cm²", "B. 78.5 cm²", "C. 113.04 cm²", "D. 153.86 cm²", "E. 196 cm²"],
          answer: 3
        },
        {
          text: "How many diagonals does a hexagon have?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 12"],
          answer: 3
        },
        {
          text: "A square has area 144 cm². What is its perimeter?",
          choices: ["A. 36 cm", "B. 40 cm", "C. 48 cm", "D. 52 cm", "E. 56 cm"],
          answer: 2
        },
        {
          text: "What is the sum of interior angles of an octagon?",
          choices: ["A. 720°", "B. 900°", "C. 1080°", "D. 1260°", "E. 1440°"],
          answer: 2
        },
        {
          text: "A rectangle has area 60 cm² and width 5 cm. What is its length?",
          choices: ["A. 8 cm", "B. 10 cm", "C. 12 cm", "D. 15 cm", "E. 20 cm"],
          answer: 2
        },
        {
          text: "A circle has diameter 10 cm. What is its circumference? (π ≈ 3.14)",
          choices: ["A. 15.7 cm", "B. 31.4 cm", "C. 47.1 cm", "D. 62.8 cm", "E. 78.5 cm"],
          answer: 1
        },
        {
          text: "A right triangle has legs 6 cm and 8 cm. What is its area?",
          choices: ["A. 14 cm²", "B. 20 cm²", "C. 24 cm²", "D. 28 cm²", "E. 48 cm²"],
          answer: 2
        },
        {
          text: "A trapezoid has parallel sides 5 cm and 11 cm and height 4 cm. What is its area?",
          choices: ["A. 28 cm²", "B. 32 cm²", "C. 36 cm²", "D. 40 cm²", "E. 44 cm²"],
          answer: 1
        },
        {
          text: "Each interior angle of a regular polygon is 120°. How many sides does it have?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "A large rectangle is 10 cm × 8 cm. A square of side 2 cm is cut from one corner. What is the remaining area?",
          choices: ["A. 72 cm²", "B. 74 cm²", "C. 76 cm²", "D. 78 cm²", "E. 80 cm²"],
          answer: 2
        },
        {
          text: "A circle has area 78.5 cm². What is its radius? (π ≈ 3.14)",
          choices: ["A. 3 cm", "B. 4 cm", "C. 5 cm", "D. 6 cm", "E. 7 cm"],
          answer: 2
        },
        {
          text: "How many sides does a polygon have if its interior angles sum to 1080°?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "A rectangular garden is 15 m × 8 m. What length of fencing is needed to enclose it?",
          choices: ["A. 23 m", "B. 36 m", "C. 46 m", "D. 56 m", "E. 120 m"],
          answer: 2
        },
        {
          text: "A square and a rectangle have the same perimeter of 28 cm. The rectangle is 8 cm × 6 cm. What is the area of the square?",
          choices: ["A. 36 cm²", "B. 42 cm²", "C. 48 cm²", "D. 49 cm²", "E. 56 cm²"],
          answer: 3
        },
        {
          text: "A regular pentagon has side 8 cm. What is its perimeter?",
          choices: ["A. 32 cm", "B. 36 cm", "C. 40 cm", "D. 44 cm", "E. 48 cm"],
          answer: 2
        },
        {
          text: "A circle has radius 3 cm. What is its circumference? (π ≈ 3.14)",
          choices: ["A. 9.42 cm", "B. 12.56 cm", "C. 18.84 cm", "D. 21.98 cm", "E. 28.26 cm"],
          answer: 2
        },
        {
          text: "A L-shaped figure is made from two rectangles: 6×4 and 3×2. What is its total area?",
          choices: ["A. 24 cm²", "B. 28 cm²", "C. 30 cm²", "D. 32 cm²", "E. 36 cm²"],
          answer: 2
        },
        {
          text: "A triangle has base 14 cm and area 49 cm². What is its height?",
          choices: ["A. 5 cm", "B. 6 cm", "C. 7 cm", "D. 8 cm", "E. 9 cm"],
          answer: 2
        },
        {
          text: "What is the area of the shaded region if a circle of radius 5 cm is inside a square of side 10 cm? (π ≈ 3.14)",
          choices: ["A. 21.5 cm²", "B. 22.5 cm²", "C. 21.4 cm²", "D. 20.5 cm²", "E. 21.0 cm²"],
          answer: 0
        },
        {
          text: "A parallelogram has area 72 cm² and base 12 cm. What is its height?",
          choices: ["A. 4 cm", "B. 5 cm", "C. 6 cm", "D. 7 cm", "E. 8 cm"],
          answer: 2
        },
        {
          text: "Each interior angle of a regular hexagon measures:",
          choices: ["A. 90°", "B. 100°", "C. 108°", "D. 120°", "E. 135°"],
          answer: 3
        },
        {
          text: "Two squares have sides 3 cm and 5 cm. What is the difference in their areas?",
          choices: ["A. 4 cm²", "B. 8 cm²", "C. 12 cm²", "D. 16 cm²", "E. 20 cm²"],
          answer: 3
        },
        {
          text: "A rectangle has perimeter 50 cm and length 15 cm. What is its width?",
          choices: ["A. 8 cm", "B. 9 cm", "C. 10 cm", "D. 11 cm", "E. 12 cm"],
          answer: 2
        },
        {
          text: "A regular octagon has each interior angle of:",
          choices: ["A. 108°", "B. 120°", "C. 135°", "D. 144°", "E. 150°"],
          answer: 2
        },
        {
          text: "A circle has circumference 62.8 cm. What is its area? (π ≈ 3.14)",
          choices: ["A. 100 cm²", "B. 200 cm²", "C. 314 cm²", "D. 400 cm²", "E. 628 cm²"],
          answer: 2
        },
        {
          text: "A composite shape is formed by a rectangle 8×5 cm with a triangle of base 8 cm and height 3 cm on top. What is the total area?",
          choices: ["A. 48 cm²", "B. 50 cm²", "C. 52 cm²", "D. 54 cm²", "E. 56 cm²"],
          answer: 2
        },
        {
          text: "How many diagonals does a pentagon have?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "A square tile has side 20 cm. How many tiles are needed to cover a floor 2 m × 1.6 m?",
          choices: ["A. 60", "B. 70", "C. 80", "D. 90", "E. 100"],
          answer: 2
        },
        {
          text: "A rectangle and a square have equal areas. The rectangle is 16 cm × 4 cm. What is the side of the square?",
          choices: ["A. 6 cm", "B. 7 cm", "C. 8 cm", "D. 9 cm", "E. 10 cm"],
          answer: 2
        },
        {
          text: "A circle is cut into 6 equal sectors. What is the angle at the centre of each sector?",
          choices: ["A. 45°", "B. 54°", "C. 60°", "D. 72°", "E. 90°"],
          answer: 2
        },
        {
          text: "A trapezoid has area 40 cm², parallel sides 6 cm and 10 cm. What is its height?",
          choices: ["A. 4 cm", "B. 5 cm", "C. 6 cm", "D. 7 cm", "E. 8 cm"],
          answer: 1
        },
        {
          text: "Which of the following shapes has exactly 4 lines of symmetry?",
          choices: ["A. Rectangle", "B. Rhombus", "C. Square", "D. Parallelogram", "E. Trapezoid"],
          answer: 2
        },
        {
          text: "A circle has area 28.26 cm². What is its diameter? (π ≈ 3.14)",
          choices: ["A. 3 cm", "B. 4 cm", "C. 5 cm", "D. 6 cm", "E. 7 cm"],
          answer: 3
        },
        {
          text: "A rectangle has length twice its width. If the perimeter is 48 cm, what is the area?",
          choices: ["A. 96 cm²", "B. 108 cm²", "C. 120 cm²", "D. 128 cm²", "E. 144 cm²"],
          answer: 3
        },
        {
          text: "What is the sum of exterior angles of any convex polygon?",
          choices: ["A. 180°", "B. 270°", "C. 360°", "D. 540°", "E. It depends on the number of sides"],
          answer: 2
        },
        {
          text: "A square has diagonal 10 cm. What is its area?",
          choices: ["A. 25 cm²", "B. 40 cm²", "C. 50 cm²", "D. 60 cm²", "E. 100 cm²"],
          answer: 2
        },
        {
          text: "A regular polygon has interior angles summing to 900°. How many sides does it have?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "A rectangle is 9 cm × 5 cm. A square of side 3 cm is removed from its centre. What is the remaining area?",
          choices: ["A. 30 cm²", "B. 33 cm²", "C. 36 cm²", "D. 39 cm²", "E. 42 cm²"],
          answer: 2
        },
        {
          text: "A circle and a square have the same perimeter of 40 cm. Which has the larger area?",
          choices: ["A. Square", "B. Circle", "C. They are equal", "D. Cannot be determined", "E. Depends on units"],
          answer: 1
        },
        {
          text: "Three identical squares each of side 4 cm are placed side by side to form a rectangle. What is the perimeter of that rectangle?",
          choices: ["A. 32 cm", "B. 36 cm", "C. 40 cm", "D. 44 cm", "E. 48 cm"],
          answer: 0
        },
        {
          text: "A triangle has sides 5 cm, 12 cm, and 13 cm. What is its area?",
          choices: ["A. 20 cm²", "B. 25 cm²", "C. 30 cm²", "D. 35 cm²", "E. 40 cm²"],
          answer: 2
        }
      ]
    },

    "2.2": {
      title: "2.2 3D Shapes — Volume & Surface Area",
      questions: [
        {
          text: "A cube has surface area 54 cm². What is its volume?",
          choices: ["A. 18 cm³", "B. 24 cm³", "C. 27 cm³", "D. 36 cm³", "E. 64 cm³"],
          answer: 2
        },
        {
          text: "A cylinder has radius 5 cm and height 10 cm. What is its volume? (π ≈ 3.14)",
          choices: ["A. 500 cm³", "B. 628 cm³", "C. 750 cm³", "D. 785 cm³", "E. 1000 cm³"],
          answer: 3
        },
        {
          text: "A rectangular box is 8 cm × 5 cm × 3 cm. What is its surface area?",
          choices: ["A. 120 cm²", "B. 142 cm²", "C. 158 cm²", "D. 174 cm²", "E. 190 cm²"],
          answer: 3
        },
        {
          text: "A cube is cut in half diagonally. Each piece has how many faces?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 3
        },
        {
          text: "A fish tank (cuboid) is 50 cm × 30 cm × 40 cm. How many litres of water does it hold when full? (1 L = 1000 cm³)",
          choices: ["A. 40 L", "B. 50 L", "C. 60 L", "D. 70 L", "E. 80 L"],
          answer: 2
        },
        {
          text: "A cube has volume 125 cm³. What is its surface area?",
          choices: ["A. 100 cm²", "B. 120 cm²", "C. 150 cm²", "D. 175 cm²", "E. 200 cm²"],
          answer: 2
        },
        {
          text: "A cuboid has dimensions 4 cm × 3 cm × 6 cm. What is its volume?",
          choices: ["A. 48 cm³", "B. 60 cm³", "C. 72 cm³", "D. 80 cm³", "E. 96 cm³"],
          answer: 2
        },
        {
          text: "A cube has side length 4 cm. What is its surface area?",
          choices: ["A. 64 cm²", "B. 80 cm²", "C. 96 cm²", "D. 112 cm²", "E. 128 cm²"],
          answer: 2
        },
        {
          text: "How many unit cubes fit inside a box that is 3 cm × 4 cm × 5 cm?",
          choices: ["A. 30", "B. 40", "C. 60", "D. 80", "E. 120"],
          answer: 2
        },
        {
          text: "A cylinder has radius 3 cm and height 7 cm. What is its volume? (π ≈ 3.14)",
          choices: ["A. 158.3 cm³", "B. 176.6 cm³", "C. 197.8 cm³", "D. 207.2 cm³", "E. 215.0 cm³"],
          answer: 2
        },
        {
          text: "A rectangular prism has length 10 cm, width 4 cm, and height 2 cm. What is its surface area?",
          choices: ["A. 96 cm²", "B. 106 cm²", "C. 116 cm²", "D. 126 cm²", "E. 136 cm²"],
          answer: 2
        },
        {
          text: "A cube has surface area 96 cm². What is its side length?",
          choices: ["A. 2 cm", "B. 3 cm", "C. 4 cm", "D. 5 cm", "E. 6 cm"],
          answer: 2
        },
        {
          text: "Which net cannot be folded into a cube?",
          choices: ["A. A cross shape with 6 squares", "B. A row of 4 squares with 1 on each side", "C. A T-shape with 6 squares", "D. An L-shape with 4 squares in a row", "E. A staircase of 6 squares"],
          answer: 3
        },
        {
          text: "A triangular prism has a triangular cross-section with base 6 cm and height 4 cm. The prism is 10 cm long. What is its volume?",
          choices: ["A. 80 cm³", "B. 100 cm³", "C. 120 cm³", "D. 140 cm³", "E. 160 cm³"],
          answer: 2
        },
        {
          text: "A cuboid swimming pool is 8 m × 4 m × 2 m. What is the volume of water needed to fill it?",
          choices: ["A. 32 m³", "B. 48 m³", "C. 64 m³", "D. 80 m³", "E. 96 m³"],
          answer: 2
        },
        {
          text: "A cube has volume 216 cm³. What is its side length?",
          choices: ["A. 4 cm", "B. 5 cm", "C. 6 cm", "D. 7 cm", "E. 8 cm"],
          answer: 2
        },
        {
          text: "A box is 6 cm × 6 cm × 6 cm. How many small cubes of side 2 cm fit inside it?",
          choices: ["A. 9", "B. 18", "C. 27", "D. 36", "E. 54"],
          answer: 2
        },
        {
          text: "When a cube is sliced through its middle parallel to one face, what shape is the cross-section?",
          choices: ["A. Triangle", "B. Circle", "C. Square", "D. Rectangle", "E. Hexagon"],
          answer: 2
        },
        {
          text: "A cylinder has diameter 6 cm and height 5 cm. What is its volume? (π ≈ 3.14)",
          choices: ["A. 100.4 cm³", "B. 120.3 cm³", "C. 141.3 cm³", "D. 160.2 cm³", "E. 180.1 cm³"],
          answer: 2
        },
        {
          text: "A rectangular box has volume 120 cm³. Its length is 10 cm and width is 4 cm. What is its height?",
          choices: ["A. 2 cm", "B. 3 cm", "C. 4 cm", "D. 5 cm", "E. 6 cm"],
          answer: 1
        },
        {
          text: "A cube has edge length 5 cm. What is its volume?",
          choices: ["A. 15 cm³", "B. 25 cm³", "C. 75 cm³", "D. 100 cm³", "E. 125 cm³"],
          answer: 4
        },
        {
          text: "A cuboid has surface area. Its dimensions are 2 cm × 3 cm × 4 cm. What is its surface area?",
          choices: ["A. 48 cm²", "B. 52 cm²", "C. 56 cm²", "D. 60 cm²", "E. 64 cm²"],
          answer: 2
        },
        {
          text: "A tin can is a cylinder with radius 4 cm and height 12 cm. Approximately how much liquid does it hold? (π ≈ 3.14)",
          choices: ["A. 451 cm³", "B. 502 cm³", "C. 553 cm³", "D. 604 cm³", "E. 655 cm³"],
          answer: 3
        },
        {
          text: "A box without a lid is a cuboid 10 cm × 8 cm × 6 cm. How much cardboard is needed to make it?",
          choices: ["A. 256 cm²", "B. 296 cm²", "C. 336 cm²", "D. 376 cm²", "E. 416 cm²"],
          answer: 1
        },
        {
          text: "Cubes of side 1 cm are stacked to make a solid 3×3×3 cube. How many small cubes are on the surface (not inside)?",
          choices: ["A. 18", "B. 20", "C. 24", "D. 26", "E. 27"],
          answer: 3
        },
        {
          text: "A triangular prism has two triangular faces (right triangles: legs 3 cm and 4 cm) and rectangular length 8 cm. What is its volume?",
          choices: ["A. 32 cm³", "B. 40 cm³", "C. 48 cm³", "D. 56 cm³", "E. 64 cm³"],
          answer: 2
        },
        {
          text: "A cube has volume 8 cm³. How many such cubes stack to form a cube with volume 64 cm³?",
          choices: ["A. 4", "B. 6", "C. 8", "D. 10", "E. 12"],
          answer: 2
        },
        {
          text: "A sphere has the same radius as a cylinder of radius 3 cm and height 3 cm. Which has the larger volume?",
          choices: ["A. Sphere", "B. Cylinder", "C. They are equal", "D. Depends on the material", "E. Cannot determine"],
          answer: 0
        },
        {
          text: "A cuboid has the same volume as a cube of side 6 cm. The cuboid is 12 cm × 9 cm × ? cm. What is the missing height?",
          choices: ["A. 1 cm", "B. 2 cm", "C. 3 cm", "D. 4 cm", "E. 5 cm"],
          answer: 1
        },
        {
          text: "What shape is the cross-section when a cylinder is cut parallel to its base?",
          choices: ["A. Square", "B. Rectangle", "C. Oval", "D. Circle", "E. Triangle"],
          answer: 3
        },
        {
          text: "A prism has volume 90 cm³. Its cross-sectional area is 18 cm². What is its length?",
          choices: ["A. 3 cm", "B. 4 cm", "C. 5 cm", "D. 6 cm", "E. 7 cm"],
          answer: 2
        },
        {
          text: "A cuboid measures 5 cm × 4 cm × 3 cm. How many faces does it have?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 8", "E. 12"],
          answer: 2
        },
        {
          text: "A box 4 cm × 4 cm × 4 cm is filled with 1 cm cubes. A second box 8 cm × 8 cm × 8 cm is also filled. How many more cubes does the second box hold?",
          choices: ["A. 256", "B. 384", "C. 448", "D. 512", "E. 576"],
          answer: 2
        },
        {
          text: "The surface area of a rectangular box is 94 cm². Its length is 5 cm and width is 4 cm. What is its height?",
          choices: ["A. 2 cm", "B. 3 cm", "C. 4 cm", "D. 5 cm", "E. 6 cm"],
          answer: 1
        },
        {
          text: "Two identical cubes each of side 3 cm are glued together face-to-face. What is the surface area of the resulting shape?",
          choices: ["A. 90 cm²", "B. 96 cm²", "C. 100 cm²", "D. 108 cm²", "E. 120 cm²"],
          answer: 0
        },
        {
          text: "A cube of side 10 cm is painted red on all faces, then cut into 1 cm cubes. How many small cubes have exactly 3 red faces?",
          choices: ["A. 4", "B. 6", "C. 8", "D. 12", "E. 24"],
          answer: 2
        },
        {
          text: "A can of soup is a cylinder with radius 3 cm and height 10 cm. What is the total surface area? (π ≈ 3.14)",
          choices: ["A. 188.4 cm²", "B. 226.1 cm²", "C. 244.9 cm²", "D. 263.8 cm²", "E. 282.6 cm²"],
          answer: 3
        },
        {
          text: "A hollow cube with outer side 6 cm and inner side 4 cm is made of wood. What is the volume of the wood?",
          choices: ["A. 72 cm³", "B. 80 cm³", "C. 152 cm³", "D. 216 cm³", "E. 280 cm³"],
          answer: 2
        },
        {
          text: "A rectangular prism has square base of side 4 cm and height 9 cm. What is its volume?",
          choices: ["A. 80 cm³", "B. 112 cm³", "C. 144 cm³", "D. 176 cm³", "E. 208 cm³"],
          answer: 2
        },
        {
          text: "How many edges does a triangular prism have?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 12"],
          answer: 3
        },
        {
          text: "A cuboid has volume 240 cm³, height 4 cm, and length 10 cm. What is the width?",
          choices: ["A. 4 cm", "B. 5 cm", "C. 6 cm", "D. 7 cm", "E. 8 cm"],
          answer: 2
        },
        {
          text: "A cube has all edges doubled. By what factor does its volume increase?",
          choices: ["A. 2", "B. 4", "C. 6", "D. 8", "E. 12"],
          answer: 3
        },
        {
          text: "A cylinder has radius 2 cm and height 8 cm. What is its curved surface area? (π ≈ 3.14)",
          choices: ["A. 50.24 cm²", "B. 75.36 cm²", "C. 100.48 cm²", "D. 125.60 cm²", "E. 150.72 cm²"],
          answer: 2
        },
        {
          text: "How many vertices does a square-based pyramid have?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 8"],
          answer: 2
        },
        {
          text: "A cube of side 6 cm is painted on all outer faces, then cut into 27 equal cubes. How many small cubes have no paint on them?",
          choices: ["A. 0", "B. 1", "C. 4", "D. 6", "E. 8"],
          answer: 1
        },
        {
          text: "A rectangular swimming pool 10 m × 4 m is filled to a depth of 1.5 m. How many litres does it contain? (1 m³ = 1000 L)",
          choices: ["A. 40,000 L", "B. 50,000 L", "C. 60,000 L", "D. 70,000 L", "E. 80,000 L"],
          answer: 2
        },
        {
          text: "A cube has all edges tripled. By what factor does its surface area increase?",
          choices: ["A. 3", "B. 6", "C. 9", "D. 18", "E. 27"],
          answer: 2
        },
        {
          text: "A solid shape has 6 faces, 12 edges, and 8 vertices. What is it?",
          choices: ["A. Triangular prism", "B. Square pyramid", "C. Tetrahedron", "D. Cuboid", "E. Cylinder"],
          answer: 3
        },
        {
          text: "A rectangular prism has length 6 cm, width 4 cm, and surface area 148 cm². What is its height?",
          choices: ["A. 3 cm", "B. 4 cm", "C. 5 cm", "D. 6 cm", "E. 7 cm"],
          answer: 2
        },
        {
          text: "A cylinder has the same radius and height, both 4 cm. What is its volume? (π ≈ 3.14)",
          choices: ["A. 150.7 cm³", "B. 175.8 cm³", "C. 200.96 cm³", "D. 226.1 cm³", "E. 251.2 cm³"],
          answer: 2
        }
      ]
    },

    "2.3": {
      title: "2.3 Angles & Triangles",
      questions: [
        {
          text: "The angles of a triangle are in ratio 1:2:3. What are the angles?",
          choices: ["A. 20°, 40°, 120°", "B. 30°, 60°, 90°", "C. 40°, 60°, 80°", "D. 45°, 60°, 75°", "E. 50°, 60°, 70°"],
          answer: 1
        },
        {
          text: "Two angles of a triangle are 65° and 75°. What is the third angle?",
          choices: ["A. 30°", "B. 35°", "C. 40°", "D. 45°", "E. 50°"],
          answer: 2
        },
        {
          text: "An exterior angle of a triangle is 110°. One interior angle is 40°. What is the other interior angle?",
          choices: ["A. 30°", "B. 40°", "C. 60°", "D. 70°", "E. 80°"],
          answer: 3
        },
        {
          text: "In an isosceles triangle, the apex angle is 40°. What are the base angles?",
          choices: ["A. 60° each", "B. 65° each", "C. 70° each", "D. 75° each", "E. 80° each"],
          answer: 2
        },
        {
          text: "A right triangle has legs of 5 cm and 12 cm. What is the hypotenuse?",
          choices: ["A. 11 cm", "B. 12 cm", "C. 13 cm", "D. 14 cm", "E. 15 cm"],
          answer: 2
        },
        {
          text: "In triangle ABC, angle A = 70° and angle B = 55°. What is angle C?",
          choices: ["A. 45°", "B. 50°", "C. 55°", "D. 60°", "E. 65°"],
          answer: 2
        },
        {
          text: "An equilateral triangle has one angle measuring:",
          choices: ["A. 45°", "B. 50°", "C. 60°", "D. 70°", "E. 90°"],
          answer: 2
        },
        {
          text: "Two angles on a straight line are x° and 2x°. What is the value of x?",
          choices: ["A. 40°", "B. 50°", "C. 60°", "D. 70°", "E. 80°"],
          answer: 2
        },
        {
          text: "Three angles at a point are x°, 2x°, and 3x°. What is x?",
          choices: ["A. 30°", "B. 45°", "C. 60°", "D. 72°", "E. 90°"],
          answer: 2
        },
        {
          text: "A right triangle has one angle of 35°. What is the third angle?",
          choices: ["A. 45°", "B. 50°", "C. 55°", "D. 60°", "E. 65°"],
          answer: 2
        },
        {
          text: "Two parallel lines are cut by a transversal. One alternate interior angle is 65°. What is the other?",
          choices: ["A. 25°", "B. 35°", "C. 55°", "D. 65°", "E. 115°"],
          answer: 3
        },
        {
          text: "A right triangle has a hypotenuse of 17 cm and one leg of 8 cm. What is the other leg?",
          choices: ["A. 9 cm", "B. 13 cm", "C. 15 cm", "D. 16 cm", "E. 18 cm"],
          answer: 2
        },
        {
          text: "Corresponding angles formed when parallel lines are cut by a transversal are:",
          choices: ["A. Supplementary", "B. Complementary", "C. Equal", "D. Vertically opposite", "E. Adjacent"],
          answer: 2
        },
        {
          text: "An isosceles triangle has a base angle of 50°. What is the apex angle?",
          choices: ["A. 60°", "B. 70°", "C. 75°", "D. 80°", "E. 90°"],
          answer: 3
        },
        {
          text: "The exterior angle of a triangle equals:",
          choices: ["A. The adjacent interior angle", "B. The sum of the two non-adjacent interior angles", "C. 180° minus the apex angle", "D. 90°", "E. The largest interior angle"],
          answer: 1
        },
        {
          text: "A right triangle has legs 3 cm and 4 cm. What is the hypotenuse?",
          choices: ["A. 4 cm", "B. 5 cm", "C. 6 cm", "D. 7 cm", "E. 8 cm"],
          answer: 1
        },
        {
          text: "Two angles of a triangle are both 45°. What type of triangle is it?",
          choices: ["A. Equilateral", "B. Scalene", "C. Right isosceles", "D. Obtuse", "E. Acute scalene"],
          answer: 2
        },
        {
          text: "Angles on a straight line sum to:",
          choices: ["A. 90°", "B. 180°", "C. 270°", "D. 360°", "E. 540°"],
          answer: 1
        },
        {
          text: "A triangle has angles in ratio 2:3:5. What is the largest angle?",
          choices: ["A. 60°", "B. 72°", "C. 80°", "D. 90°", "E. 100°"],
          answer: 3
        },
        {
          text: "A right triangle has hypotenuse 10 cm and one leg 6 cm. What is the other leg?",
          choices: ["A. 4 cm", "B. 6 cm", "C. 7 cm", "D. 8 cm", "E. 9 cm"],
          answer: 3
        },
        {
          text: "Two lines intersect. One of the four angles formed is 70°. What are the other three angles?",
          choices: ["A. 70°, 70°, 70°", "B. 70°, 110°, 110°", "C. 110°, 70°, 70°", "D. 70°, 110°, 70°", "E. 110°, 110°, 110°"],
          answer: 1
        },
        {
          text: "In a triangle, one angle is double another, and the third angle is 60°. What are the three angles?",
          choices: ["A. 30°, 60°, 90°", "B. 40°, 60°, 80°", "C. 45°, 60°, 75°", "D. 50°, 60°, 70°", "E. 60°, 60°, 60°"],
          answer: 3
        },
        {
          text: "Which set of angles can form a valid triangle?",
          choices: ["A. 90°, 90°, 10°", "B. 60°, 60°, 70°", "C. 45°, 65°, 70°", "D. 100°, 100°, 20°", "E. 50°, 50°, 90°"],
          answer: 2
        },
        {
          text: "A right triangle has legs 8 cm and 15 cm. What is the hypotenuse?",
          choices: ["A. 14 cm", "B. 16 cm", "C. 17 cm", "D. 18 cm", "E. 20 cm"],
          answer: 2
        },
        {
          text: "Co-interior angles (same-side interior angles) between parallel lines sum to:",
          choices: ["A. 90°", "B. 120°", "C. 180°", "D. 270°", "E. 360°"],
          answer: 2
        },
        {
          text: "In triangle PQR, angle P = 2x°, angle Q = 3x°, angle R = 4x°. What is x?",
          choices: ["A. 15", "B. 18", "C. 20", "D. 22", "E. 25"],
          answer: 2
        },
        {
          text: "An isosceles triangle has perimeter 32 cm and base 8 cm. What is each equal side?",
          choices: ["A. 10 cm", "B. 11 cm", "C. 12 cm", "D. 13 cm", "E. 14 cm"],
          answer: 2
        },
        {
          text: "A transversal cuts two parallel lines. One co-interior angle is 70°. What is the other co-interior angle?",
          choices: ["A. 70°", "B. 90°", "C. 100°", "D. 110°", "E. 120°"],
          answer: 3
        },
        {
          text: "What is the sum of the exterior angles of any triangle?",
          choices: ["A. 180°", "B. 270°", "C. 360°", "D. 540°", "E. Depends on triangle type"],
          answer: 2
        },
        {
          text: "A ladder 13 m long leans against a wall. The foot of the ladder is 5 m from the wall. How high up the wall does the ladder reach?",
          choices: ["A. 8 m", "B. 10 m", "C. 12 m", "D. 13 m", "E. 14 m"],
          answer: 2
        },
        {
          text: "Two angles of a triangle are supplementary to 130° and 150° respectively. What is the third angle?",
          choices: ["A. 20°", "B. 30°", "C. 40°", "D. 50°", "E. 60°"],
          answer: 3
        },
        {
          text: "An angle bisector divides a 70° angle into two equal parts. What is each part?",
          choices: ["A. 25°", "B. 30°", "C. 35°", "D. 40°", "E. 45°"],
          answer: 2
        },
        {
          text: "A triangle has angles 55°, 55°, and 70°. What type of triangle is it?",
          choices: ["A. Equilateral", "B. Scalene", "C. Right-angled", "D. Isosceles", "E. Obtuse"],
          answer: 3
        },
        {
          text: "If one angle in a right triangle is 30°, the other two angles are:",
          choices: ["A. 60° and 90°", "B. 45° and 105°", "C. 50° and 100°", "D. 55° and 95°", "E. 70° and 80°"],
          answer: 0
        },
        {
          text: "The base of an isosceles triangle is 6 cm, and the equal sides are 5 cm. The height from apex to base is 4 cm. What is the area?",
          choices: ["A. 6 cm²", "B. 8 cm²", "C. 10 cm²", "D. 12 cm²", "E. 15 cm²"],
          answer: 3
        },
        {
          text: "A right triangle with legs 9 cm and 40 cm has hypotenuse:",
          choices: ["A. 38 cm", "B. 39 cm", "C. 40 cm", "D. 41 cm", "E. 42 cm"],
          answer: 3
        },
        {
          text: "In a triangle, the exterior angle is 120°. If one non-adjacent interior angle is 70°, what is the other non-adjacent interior angle?",
          choices: ["A. 40°", "B. 45°", "C. 50°", "D. 55°", "E. 60°"],
          answer: 2
        },
        {
          text: "Vertically opposite angles are:",
          choices: ["A. Always supplementary", "B. Always complementary", "C. Always equal", "D. Always adjacent", "E. Always perpendicular"],
          answer: 2
        },
        {
          text: "Two angles in a triangle are equal and their sum equals the third angle. What are the three angles?",
          choices: ["A. 30°, 30°, 120°", "B. 40°, 40°, 100°", "C. 45°, 45°, 90°", "D. 50°, 50°, 80°", "E. 60°, 60°, 60°"],
          answer: 2
        },
        {
          text: "A right triangle has hypotenuse 26 cm and one leg 10 cm. What is the area of the triangle?",
          choices: ["A. 100 cm²", "B. 110 cm²", "C. 120 cm²", "D. 130 cm²", "E. 140 cm²"],
          answer: 2
        },
        {
          text: "Three angles around a point. Two of them are 130° and 95°. What is the third?",
          choices: ["A. 125°", "B. 130°", "C. 135°", "D. 140°", "E. 145°"],
          answer: 2
        },
        {
          text: "A triangle has sides 7 cm, 24 cm, and 25 cm. Is it a right triangle?",
          choices: ["A. Yes, because 7+24=25", "B. Yes, because 7²+24²=25²", "C. No, because the sides don't add up", "D. No, because it's not isosceles", "E. Cannot tell without angles"],
          answer: 1
        },
        {
          text: "In a triangle, the sum of any two sides must be greater than the third side. Which set of lengths forms a valid triangle?",
          choices: ["A. 1, 2, 5", "B. 3, 4, 8", "C. 5, 6, 10", "D. 2, 7, 10", "E. 4, 4, 10"],
          answer: 2
        },
        {
          text: "An equilateral triangle has perimeter 21 cm. What is each side?",
          choices: ["A. 5 cm", "B. 6 cm", "C. 7 cm", "D. 8 cm", "E. 9 cm"],
          answer: 2
        },
        {
          text: "In a right-angled isosceles triangle, each acute angle is:",
          choices: ["A. 30°", "B. 35°", "C. 40°", "D. 45°", "E. 60°"],
          answer: 3
        },
        {
          text: "A triangle has angles (3x − 10)°, (2x + 5)°, and (x + 15)°. What is x?",
          choices: ["A. 25", "B. 28", "C. 30", "D. 32", "E. 35"],
          answer: 2
        },
        {
          text: "A right triangle has an angle of 53°. If the hypotenuse is 10 cm, approximately how long is the side adjacent to the 53° angle? (sin 53° ≈ 0.8, cos 53° ≈ 0.6)",
          choices: ["A. 4 cm", "B. 5 cm", "C. 6 cm", "D. 7 cm", "E. 8 cm"],
          answer: 2
        },
        {
          text: "In a quadrilateral ABCD, angles A = 80°, B = 95°, C = 110°. What is angle D?",
          choices: ["A. 65°", "B. 70°", "C. 75°", "D. 80°", "E. 85°"],
          answer: 2
        },
        {
          text: "Two angles are supplementary. One is 3 times the other. What are the angles?",
          choices: ["A. 30°, 90°", "B. 40°, 120°", "C. 45°, 135°", "D. 50°, 130°", "E. 60°, 120°"],
          answer: 2
        },
        {
          text: "In a triangle, the largest angle is 3 times the smallest, and the middle angle is twice the smallest. What is the largest angle?",
          choices: ["A. 60°", "B. 75°", "C. 80°", "D. 90°", "E. 100°"],
          answer: 3
        }
      ]
    },

    "2.4": {
      title: "2.4 Symmetry & Transformations",
      questions: [
        {
          text: "Which letter has exactly one line of symmetry?",
          choices: ["A. X", "B. H", "C. O", "D. A", "E. N"],
          answer: 3
        },
        {
          text: "A point at (3, 2) is reflected in the x-axis. What are its new coordinates?",
          choices: ["A. (−3, 2)", "B. (3, −2)", "C. (−3, −2)", "D. (2, 3)", "E. (−2, −3)"],
          answer: 1
        },
        {
          text: "A shape is rotated 270° clockwise. This is equivalent to rotating:",
          choices: ["A. 90° clockwise", "B. 90° anticlockwise", "C. 180° clockwise", "D. 270° anticlockwise", "E. 360° clockwise"],
          answer: 1
        },
        {
          text: "A square is translated 4 units right and 3 units up. Which property changes?",
          choices: ["A. Area", "B. Perimeter", "C. Angles", "D. Position", "E. Side lengths"],
          answer: 3
        },
        {
          text: "How many axes of rotational symmetry does a regular pentagon have?",
          choices: ["A. 1", "B. 3", "C. 5", "D. 7", "E. 10"],
          answer: 2
        },
        {
          text: "A shape has rotational symmetry of order 4. What angle of rotation maps it to itself?",
          choices: ["A. 45°", "B. 60°", "C. 72°", "D. 90°", "E. 120°"],
          answer: 3
        },
        {
          text: "After reflecting the point (3, 2) in the y-axis, what are the new coordinates?",
          choices: ["A. (3, −2)", "B. (−3, 2)", "C. (−3, −2)", "D. (2, 3)", "E. (−2, 3)"],
          answer: 1
        },
        {
          text: "How many lines of symmetry does a regular hexagon have?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 6", "E. 8"],
          answer: 3
        },
        {
          text: "A point (4, −3) is rotated 180° about the origin. What are the new coordinates?",
          choices: ["A. (−4, 3)", "B. (4, 3)", "C. (3, −4)", "D. (−3, 4)", "E. (−4, −3)"],
          answer: 0
        },
        {
          text: "A triangle is translated by the vector (3, −2). If a vertex was at (1, 4), where is it now?",
          choices: ["A. (4, 2)", "B. (4, 6)", "C. (−2, 6)", "D. (3, 4)", "E. (2, 4)"],
          answer: 0
        },
        {
          text: "How many lines of symmetry does a rectangle (not a square) have?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 4", "E. Infinitely many"],
          answer: 2
        },
        {
          text: "A shape has rotational symmetry of order 6. What is the angle of rotation?",
          choices: ["A. 30°", "B. 45°", "C. 60°", "D. 72°", "E. 90°"],
          answer: 2
        },
        {
          text: "A point (5, 3) is reflected in the line y = x. What are the new coordinates?",
          choices: ["A. (5, −3)", "B. (−5, 3)", "C. (3, 5)", "D. (−3, −5)", "E. (5, 3)"],
          answer: 2
        },
        {
          text: "After reflecting (−2, 4) in the x-axis, what are the coordinates?",
          choices: ["A. (2, 4)", "B. (−2, −4)", "C. (2, −4)", "D. (4, −2)", "E. (−4, 2)"],
          answer: 1
        },
        {
          text: "A square is rotated 90° clockwise about its centre. Which of the following is true?",
          choices: ["A. It looks different", "B. It maps onto itself", "C. Its perimeter changes", "D. Its vertices don't move", "E. It becomes a rectangle"],
          answer: 1
        },
        {
          text: "How many lines of symmetry does an equilateral triangle have?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 6"],
          answer: 2
        },
        {
          text: "A shape is enlarged by scale factor 2. Its area becomes:",
          choices: ["A. 2 times larger", "B. 3 times larger", "C. 4 times larger", "D. 8 times larger", "E. Stays the same"],
          answer: 2
        },
        {
          text: "A point (6, 2) is rotated 90° clockwise about the origin. What are the new coordinates?",
          choices: ["A. (2, −6)", "B. (−2, 6)", "C. (−6, −2)", "D. (2, 6)", "E. (6, −2)"],
          answer: 0
        },
        {
          text: "Which of the following has no line of symmetry?",
          choices: ["A. Equilateral triangle", "B. Regular hexagon", "C. Parallelogram (non-rectangular)", "D. Isosceles triangle", "E. Rectangle"],
          answer: 2
        },
        {
          text: "A shape at (0,0), (2,0), (2,3), (0,3) is reflected in the y-axis. Where does the vertex (2, 3) map to?",
          choices: ["A. (2, −3)", "B. (−2, 3)", "C. (3, 2)", "D. (−3, −2)", "E. (2, 3)"],
          answer: 1
        },
        {
          text: "A regular octagon has rotational symmetry of order:",
          choices: ["A. 4", "B. 6", "C. 8", "D. 10", "E. 12"],
          answer: 2
        },
        {
          text: "A point P at (4, 1) is translated to P' at (7, 5). What is the translation vector?",
          choices: ["A. (3, 4)", "B. (4, 3)", "C. (−3, −4)", "D. (7, 5)", "E. (3, −4)"],
          answer: 0
        },
        {
          text: "After reflecting the point (−3, −5) in the y-axis, the new coordinates are:",
          choices: ["A. (3, −5)", "B. (−3, 5)", "C. (3, 5)", "D. (5, 3)", "E. (−5, −3)"],
          answer: 0
        },
        {
          text: "A letter 'S' has rotational symmetry of order:",
          choices: ["A. 0", "B. 1", "C. 2", "D. 4", "E. Infinitely many"],
          answer: 2
        },
        {
          text: "A shape is rotated 180° about the origin. The point (3, −4) maps to:",
          choices: ["A. (−3, 4)", "B. (3, 4)", "C. (4, −3)", "D. (−4, 3)", "E. (−3, −4)"],
          answer: 0
        },
        {
          text: "How many lines of symmetry does a regular pentagon have?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "Two reflections in perpendicular lines through the origin is equivalent to a rotation of:",
          choices: ["A. 45°", "B. 90°", "C. 135°", "D. 180°", "E. 270°"],
          answer: 3
        },
        {
          text: "A rectangle (not a square) has rotational symmetry of order:",
          choices: ["A. 0", "B. 1", "C. 2", "D. 4", "E. 8"],
          answer: 2
        },
        {
          text: "After rotating point (0, 5) by 90° anticlockwise about the origin, the new point is:",
          choices: ["A. (5, 0)", "B. (−5, 0)", "C. (0, −5)", "D. (5, 5)", "E. (−5, 5)"],
          answer: 1
        },
        {
          text: "A triangle is reflected in the line x = 3. A vertex at (1, 4) maps to:",
          choices: ["A. (3, 4)", "B. (4, 4)", "C. (5, 4)", "D. (6, 4)", "E. (7, 4)"],
          answer: 2
        },
        {
          text: "A flag shape has rotational symmetry of order 1 only. This means:",
          choices: ["A. It has 1 line of symmetry", "B. It looks the same after 90°", "C. It only maps to itself after a full 360° rotation", "D. It has 4-fold symmetry", "E. It is a square"],
          answer: 2
        },
        {
          text: "After two reflections across the x-axis, where does the point (2, −3) end up?",
          choices: ["A. (2, 3)", "B. (−2, 3)", "C. (2, −3)", "D. (−2, −3)", "E. (3, 2)"],
          answer: 2
        },
        {
          text: "A shape is enlarged by scale factor 3. If the original had perimeter 12 cm, the new perimeter is:",
          choices: ["A. 15 cm", "B. 24 cm", "C. 27 cm", "D. 36 cm", "E. 108 cm"],
          answer: 3
        },
        {
          text: "A point (−4, 2) is reflected in the x-axis. Where does it land?",
          choices: ["A. (4, 2)", "B. (−4, −2)", "C. (4, −2)", "D. (2, −4)", "E. (−2, 4)"],
          answer: 1
        },
        {
          text: "A rhombus has how many lines of symmetry?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 4", "E. Infinitely many"],
          answer: 2
        },
        {
          text: "A triangle with vertices (1,1), (3,1), (2,3) is translated by (−1, 2). Where is the vertex (3,1) after translation?",
          choices: ["A. (2, 3)", "B. (3, 2)", "C. (4, 3)", "D. (2, 2)", "E. (1, 4)"],
          answer: 0
        },
        {
          text: "The letter 'Z' has rotational symmetry of order:",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 4"],
          answer: 2
        },
        {
          text: "When a square is reflected in one of its diagonals, what happens?",
          choices: ["A. It becomes a rectangle", "B. It maps onto itself", "C. It rotates 90°", "D. Its size doubles", "E. It becomes a rhombus"],
          answer: 1
        },
        {
          text: "A triangle is rotated 90° clockwise about the origin. The vertex (2, 5) maps to:",
          choices: ["A. (5, −2)", "B. (−5, 2)", "C. (5, 2)", "D. (2, −5)", "E. (−2, 5)"],
          answer: 0
        },
        {
          text: "How many lines of symmetry does a circle have?",
          choices: ["A. 0", "B. 2", "C. 4", "D. 8", "E. Infinitely many"],
          answer: 4
        },
        {
          text: "A shape is reflected in the y-axis, then reflected again in the x-axis. This is equivalent to a rotation of:",
          choices: ["A. 90° about origin", "B. 180° about origin", "C. 270° about origin", "D. 360° about origin", "E. No rotation"],
          answer: 1
        },
        {
          text: "A point (7, 0) is rotated 90° anticlockwise about the origin. New coordinates are:",
          choices: ["A. (0, 7)", "B. (0, −7)", "C. (−7, 0)", "D. (7, 7)", "E. (−7, 7)"],
          answer: 0
        },
        {
          text: "After a translation of (5, −3), the point (−2, 4) moves to:",
          choices: ["A. (3, 1)", "B. (3, 7)", "C. (7, 1)", "D. (−7, 7)", "E. (7, 7)"],
          answer: 0
        },
        {
          text: "A regular polygon has 10 lines of symmetry. How many sides does it have?",
          choices: ["A. 5", "B. 8", "C. 10", "D. 12", "E. 20"],
          answer: 2
        },
        {
          text: "Which transformation preserves distances and angles but changes orientation?",
          choices: ["A. Rotation", "B. Translation", "C. Reflection", "D. Enlargement", "E. Stretching"],
          answer: 2
        },
        {
          text: "A shape has vertices at (2,1), (2,4), (5,4), (5,1). After reflecting in the line y = 0 (x-axis), the vertex (2,4) maps to:",
          choices: ["A. (2, −4)", "B. (−2, 4)", "C. (4, 2)", "D. (−4, 2)", "E. (2, 4)"],
          answer: 0
        },
        {
          text: "A shape is enlarged by scale factor 2 about the origin. A vertex at (3, 4) maps to:",
          choices: ["A. (3, 8)", "B. (5, 6)", "C. (6, 4)", "D. (6, 8)", "E. (9, 12)"],
          answer: 3
        },
        {
          text: "A regular polygon maps onto itself when rotated by 40°. What is its order of rotational symmetry?",
          choices: ["A. 4", "B. 6", "C. 8", "D. 9", "E. 12"],
          answer: 3
        },
        {
          text: "After reflecting the point (−1, 6) in the line y = x, the new coordinates are:",
          choices: ["A. (1, −6)", "B. (6, −1)", "C. (−6, 1)", "D. (6, 1)", "E. (1, 6)"],
          answer: 1
        },
        {
          text: "A point P is translated by vector (a, b) to reach Q(5, 2). If P is at (−1, 6), what are the values of a and b?",
          choices: ["A. a = 6, b = −4", "B. a = −6, b = 4", "C. a = 4, b = −6", "D. a = −4, b = 6", "E. a = 4, b = 6"],
          answer: 0
        }
      ]
    },

    "2.5": {
      title: "2.5 Coordinate Geometry & Grids",
      questions: [
        {
          text: "What is the distance between points (1, 2) and (4, 6)?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "What is the midpoint of the segment joining (2, 4) and (8, 10)?",
          choices: ["A. (4, 6)", "B. (5, 7)", "C. (6, 8)", "D. (3, 5)", "E. (10, 14)"],
          answer: 1
        },
        {
          text: "A rectangle has vertices at (0,0), (4,0), (4,3), (0,3). What is its area?",
          choices: ["A. 7", "B. 10", "C. 12", "D. 14", "E. 16"],
          answer: 2
        },
        {
          text: "The line y = 2x + 1 passes through which point?",
          choices: ["A. (0, 0)", "B. (1, 2)", "C. (2, 5)", "D. (3, 8)", "E. (4, 9)"],
          answer: 2
        },
        {
          text: "On a grid, A is at (1,1) and B is at (5,4). What direction do you travel from A to B?",
          choices: ["A. Up and left", "B. Down and right", "C. Up and right", "D. Down and left", "E. Straight right"],
          answer: 2
        },
        {
          text: "What is the midpoint of A(2, 5) and B(8, 1)?",
          choices: ["A. (4, 3)", "B. (5, 3)", "C. (6, 3)", "D. (5, 4)", "E. (4, 2)"],
          answer: 1
        },
        {
          text: "Which quadrant contains the point (−3, 4)?",
          choices: ["A. Quadrant I", "B. Quadrant II", "C. Quadrant III", "D. Quadrant IV", "E. On an axis"],
          answer: 1
        },
        {
          text: "What is the distance between (0, 0) and (6, 8)?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 12", "E. 14"],
          answer: 2
        },
        {
          text: "A line passes through (0, 3) and has slope 2. What is its equation?",
          choices: ["A. y = 3x + 2", "B. y = 2x", "C. y = 2x + 3", "D. y = x + 3", "E. y = 3x"],
          answer: 2
        },
        {
          text: "What is the gradient of the line passing through (1, 3) and (3, 7)?",
          choices: ["A. 1", "B. 1.5", "C. 2", "D. 3", "E. 4"],
          answer: 2
        },
        {
          text: "A square has vertices at (0,0), (4,0), (4,4), (0,4). What is the distance from (0,0) to (4,4)?",
          choices: ["A. 4", "B. 4√2", "C. 6", "D. 8", "E. 16"],
          answer: 1
        },
        {
          text: "Which point lies on the line y = −x + 5?",
          choices: ["A. (2, 4)", "B. (3, 2)", "C. (4, 1)", "D. (5, 0)", "E. (1, 3)"],
          answer: 2
        },
        {
          text: "The midpoint of segment AB is (4, 3). If A = (2, 1), what are the coordinates of B?",
          choices: ["A. (5, 4)", "B. (6, 4)", "C. (6, 5)", "D. (7, 6)", "E. (3, 2)"],
          answer: 2
        },
        {
          text: "A triangle has vertices at (0,0), (6,0), and (3,4). What is its area?",
          choices: ["A. 8", "B. 10", "C. 12", "D. 14", "E. 16"],
          answer: 2
        },
        {
          text: "Which point is in Quadrant III?",
          choices: ["A. (3, 4)", "B. (−2, 5)", "C. (1, −3)", "D. (−4, −2)", "E. (0, −3)"],
          answer: 3
        },
        {
          text: "What is the equation of a horizontal line passing through (0, 5)?",
          choices: ["A. x = 5", "B. y = x + 5", "C. y = 5", "D. x = 0", "E. y = 0"],
          answer: 2
        },
        {
          text: "The distance between (3, 4) and (3, −2) is:",
          choices: ["A. 2", "B. 4", "C. 6", "D. 8", "E. 10"],
          answer: 2
        },
        {
          text: "A point is plotted at (−2, −3). In which quadrant does it lie?",
          choices: ["A. I", "B. II", "C. III", "D. IV", "E. On an axis"],
          answer: 2
        },
        {
          text: "What is the equation of a vertical line passing through (4, 0)?",
          choices: ["A. y = 4", "B. x = 0", "C. y = x + 4", "D. x = 4", "E. y = 0"],
          answer: 3
        },
        {
          text: "The gradient of the line y = 3x − 5 is:",
          choices: ["A. −5", "B. 0", "C. 3", "D. 5", "E. 8"],
          answer: 2
        },
        {
          text: "What is the distance between (−3, 1) and (1, 4)?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "A rectangle has vertices at (−2, 1), (3, 1), (3, 4), (−2, 4). What is its perimeter?",
          choices: ["A. 14", "B. 16", "C. 18", "D. 20", "E. 22"],
          answer: 1
        },
        {
          text: "If two points are (a, 0) and (0, b), what is the midpoint?",
          choices: ["A. (a, b)", "B. (a/2, b/2)", "C. (a+b, 0)", "D. (0, a+b)", "E. (2a, 2b)"],
          answer: 1
        },
        {
          text: "A coordinate sequence follows the rule (n, 2n+1). What is the 4th term?",
          choices: ["A. (4, 7)", "B. (4, 8)", "C. (4, 9)", "D. (4, 10)", "E. (4, 11)"],
          answer: 2
        },
        {
          text: "The point (5, y) lies on the line y = −2x + 7. What is y?",
          choices: ["A. −5", "B. −4", "C. −3", "D. −2", "E. −1"],
          answer: 2
        },
        {
          text: "A line segment has endpoints (1, 2) and (7, 10). What is its length?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 11", "E. 12"],
          answer: 2
        },
        {
          text: "A right triangle on a grid has legs along the x and y axes. One vertex is at the origin, one at (5, 0), and one at (0, 12). What is the length of the hypotenuse?",
          choices: ["A. 11", "B. 12", "C. 13", "D. 14", "E. 17"],
          answer: 2
        },
        {
          text: "What is the gradient of a horizontal line?",
          choices: ["A. Undefined", "B. −1", "C. 0", "D. 1", "E. Infinity"],
          answer: 2
        },
        {
          text: "The points (0, 0), (4, 0), and (4, 3) form a triangle. What is the area?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 2
        },
        {
          text: "A sequence of coordinates is (1,1), (2,3), (3,5), (4,7). What is the rule relating x and y?",
          choices: ["A. y = x", "B. y = x + 1", "C. y = 2x − 1", "D. y = 3x − 2", "E. y = 2x + 1"],
          answer: 2
        },
        {
          text: "What is the y-intercept of the line y = 4x − 3?",
          choices: ["A. 4", "B. −3", "C. 3", "D. −4", "E. 0"],
          answer: 1
        },
        {
          text: "A point A is at (2, −1) and B is at (−4, 5). What is the midpoint of AB?",
          choices: ["A. (−1, 2)", "B. (0, 2)", "C. (−1, 3)", "D. (1, 2)", "E. (3, −3)"],
          answer: 0
        },
        {
          text: "A parallelogram on a grid has vertices (0,0), (4,0), (5,3), (1,3). What is its area?",
          choices: ["A. 8", "B. 10", "C. 12", "D. 14", "E. 16"],
          answer: 2
        },
        {
          text: "Two points have the same y-coordinate. The line through them is:",
          choices: ["A. Vertical", "B. Diagonal", "C. Horizontal", "D. Curved", "E. Perpendicular to the x-axis"],
          answer: 2
        },
        {
          text: "A point moves from (2, 5) to (6, 8). How far has it moved horizontally?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 3
        },
        {
          text: "The line y = x passes through which points?",
          choices: ["A. (1, 0) and (0, 1)", "B. (0, 0) and (3, 3)", "C. (1, 2) and (2, 4)", "D. (0, 1) and (1, 2)", "E. (2, 1) and (1, 2)"],
          answer: 1
        },
        {
          text: "A rectangle on a grid has vertices (−3, −2), (3, −2), (3, 2), (−3, 2). What is its area?",
          choices: ["A. 20", "B. 24", "C. 28", "D. 32", "E. 36"],
          answer: 1
        },
        {
          text: "Which of these points is closest to the origin?",
          choices: ["A. (4, 3)", "B. (5, 0)", "C. (3, 4)", "D. (0, 5)", "E. (2, 4)"],
          answer: 4
        },
        {
          text: "A straight line has gradient 3 and passes through (2, 7). What is its y-intercept?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 4"],
          answer: 1
        },
        {
          text: "A square has one vertex at (1, 1) and the opposite vertex at (5, 5). What is the side length?",
          choices: ["A. 4", "B. 4√2", "C. 6", "D. 2√2", "E. 5"],
          answer: 0
        },
        {
          text: "The midpoint of (a, b) and (c, d) is (3, 5). If a = 1 and b = 3, what are c and d?",
          choices: ["A. c = 4, d = 6", "B. c = 5, d = 7", "C. c = 6, d = 8", "D. c = 7, d = 9", "E. c = 2, d = 4"],
          answer: 1
        },
        {
          text: "On a number grid, what is the distance between (−5, 0) and (3, 0)?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 3
        },
        {
          text: "The line x = −3 is:",
          choices: ["A. Horizontal", "B. Vertical", "C. Diagonal with slope −3", "D. The same as y = −3", "E. Not a straight line"],
          answer: 1
        },
        {
          text: "A triangle has vertices at (1, 1), (5, 1), and (3, 5). What is the area?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "Which is the correct midpoint of (−6, 2) and (2, −4)?",
          choices: ["A. (−4, −2)", "B. (−2, −1)", "C. (−3, −1)", "D. (4, 2)", "E. (−2, 1)"],
          answer: 1
        },
        {
          text: "A coordinate grid shows points following the rule (n, n² − 1). What is the point when n = 4?",
          choices: ["A. (4, 15)", "B. (4, 16)", "C. (4, 13)", "D. (4, 17)", "E. (4, 12)"],
          answer: 0
        },
        {
          text: "A line passes through (−2, 1) and (4, 4). What is the gradient?",
          choices: ["A. 1/2", "B. 2/3", "C. 3/4", "D. 1", "E. 3/2"],
          answer: 0
        },
        {
          text: "The point (x, 7) lies on the line y = 3x − 2. What is x?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 1
        },
        {
          text: "Two vertices of a square are at (1, 2) and (5, 2). The square lies above the line y = 2. What are the coordinates of the top-left vertex?",
          choices: ["A. (1, 5)", "B. (1, 6)", "C. (5, 6)", "D. (1, 4)", "E. (0, 4)"],
          answer: 1
        },
        {
          text: "A straight line has equation y = −3x + 6. At what point does it cross the x-axis?",
          choices: ["A. (0, 6)", "B. (2, 0)", "C. (3, 0)", "D. (6, 0)", "E. (−2, 0)"],
          answer: 1
        }
      ]
    },

    "3.1": {
      title: "3.1 Logic Puzzles & Deduction",
      questions: [
        {
          text: "Five friends — Ann, Ben, Cal, Dan, Eve — each live on a different floor (1–5) of an apartment building. Ann lives above Ben. Cal lives on floor 3. Dan lives below Eve. Ben lives on floor 1. Who lives on floor 5?",
          choices: ["A. Ann", "B. Cal", "C. Dan", "D. Eve", "E. Cannot be determined"],
          answer: 3
        },
        {
          text: "A says: 'B is a liar.' B says: 'C is a truth-teller.' C says: 'A is a liar.' Each person is either always a truth-teller or always a liar. How many truth-tellers are there?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "All squares are rectangles. Some rectangles are rhombuses. Which must be true?",
          choices: ["A. All rhombuses are squares", "B. Some squares are rhombuses", "C. No squares are rhombuses", "D. All rectangles are squares", "E. None of the above must be true"],
          answer: 4
        },
        {
          text: "Three friends — Jake, Kim, Leo — each play exactly one sport: soccer, tennis, or hockey. Jake does not play tennis. Kim plays soccer. Who plays tennis?",
          choices: ["A. Jake", "B. Kim", "C. Leo", "D. Jake or Leo", "E. Cannot be determined"],
          answer: 2
        },
        {
          text: "In a group of 5 students, every student shakes hands with every other student exactly once. How many handshakes occur?",
          choices: ["A. 5", "B. 8", "C. 10", "D. 15", "E. 20"],
          answer: 2
        },
        {
          text: "A says: 'Exactly one of us three is telling the truth.' B says: 'Exactly two of us are telling the truth.' C says: 'All three of us are telling the truth.' How many are actually telling the truth?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "All mammals breathe air. Dolphins breathe air. Therefore, dolphins are mammals. Is this conclusion valid?",
          choices: ["A. Yes, definitely valid", "B. No, the conclusion does not follow logically", "C. Only if dolphins are fish", "D. Only if dolphins live in water", "E. Yes, because breathing air is unique to mammals"],
          answer: 1
        },
        {
          text: "There are 4 boxes labeled W, X, Y, Z. W is heavier than X. Y is lighter than Z. Z is lighter than X. Which box is heaviest?",
          choices: ["A. W", "B. X", "C. Y", "D. Z", "E. Cannot be determined"],
          answer: 0
        },
        {
          text: "Five people sit in a row. Alice sits immediately to the right of Bob. Carol sits immediately to the left of Dan. Eve sits at one end. Bob is not at an end. Which position does Alice occupy (1 = leftmost)?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "If no wizards are boring, and all professors are boring, which statement must be true?",
          choices: ["A. All wizards are professors", "B. No wizards are professors", "C. Some professors are wizards", "D. All boring people are professors", "E. Some wizards are boring"],
          answer: 1
        },
        {
          text: "Two knights always tell the truth. Two knaves always lie. One person is unknown. Knight1 says 'The unknown is a knave.' Knave1 says 'The unknown is a knight.' Knight2 says 'Knave1 is lying.' What is the unknown?",
          choices: ["A. Knight", "B. Knave", "C. Could be either", "D. There is a contradiction", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "Clue 1: The red house is directly left of the blue house. Clue 2: The green house is the rightmost. Clue 3: The yellow house is not next to the red house. There are 4 houses in a row. What is the order left to right?",
          choices: ["A. Yellow, Red, Blue, Green", "B. Red, Blue, Yellow, Green", "C. Yellow, Blue, Red, Green", "D. Blue, Red, Yellow, Green", "E. Red, Yellow, Blue, Green"],
          answer: 0
        },
        {
          text: "Six children line up. Petra is 3rd. Max is directly behind Petra. Nina is directly in front of Petra. How many children are behind Max?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 1
        },
        {
          text: "Statement: 'If Tom studies, he passes.' Tom did NOT pass. What can we conclude?",
          choices: ["A. Tom studied", "B. Tom did not study", "C. Tom might have studied", "D. The statement is false", "E. Nothing can be concluded"],
          answer: 1
        },
        {
          text: "A mystery number is: a two-digit number, the tens digit is twice the units digit, and the number is greater than 50. What is the number?",
          choices: ["A. 21", "B. 42", "C. 63", "D. 84", "E. 51"],
          answer: 3
        },
        {
          text: "In a logic grid: Person A is not in seat 1 or 2. Person B is in seat 3. Person C is not in seat 4. There are 4 seats. Person D is in seat 1. What seat is Person A in?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. Cannot be determined"],
          answer: 3
        },
        {
          text: "Three truth-tellers always tell the truth; three liars always lie. You ask each of six people 'Are you a truth-teller?' All six say 'Yes.' How many liars said yes?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 6"],
          answer: 3
        },
        {
          text: "All prime numbers greater than 2 are odd. 15 is odd. Therefore 15 is prime. Is this valid?",
          choices: ["A. Yes", "B. No, 15 is not prime", "C. No, the logic form is invalid", "D. Both B and C are correct", "E. Yes, because 15 is odd"],
          answer: 3
        },
        {
          text: "4 suspects: Alan, Beth, Cara, Dave. Exactly one is guilty. Alan says 'Beth is guilty.' Beth says 'Cara is guilty.' Cara says 'I am innocent.' Dave says 'Alan is guilty.' Exactly one statement is true. Who is guilty?",
          choices: ["A. Alan", "B. Beth", "C. Cara", "D. Dave", "E. Cannot be determined"],
          answer: 3
        },
        {
          text: "A grid has rows A–E (top to bottom) and columns 1–5 (left to right). The treasure is not in row A or E. It is not in column 1 or 5. It is not in B3. It is not in C2 or C4. It is in row C or D. Where is it?",
          choices: ["A. C3", "B. C2", "C. D3", "D. D2", "E. D4"],
          answer: 2
        },
        {
          text: "If some birds can swim, and all penguins are birds, which must be true?",
          choices: ["A. All penguins can swim", "B. No penguins can swim", "C. Some birds are penguins", "D. Some penguins might be able to swim", "E. All birds that swim are penguins"],
          answer: 3
        },
        {
          text: "Five athletes finish a race with no ties. Lee beats Kim. Kim beats Pam. Raj beats Lee. Sam beats Raj. Who finishes last?",
          choices: ["A. Lee", "B. Kim", "C. Pam", "D. Raj", "E. Sam"],
          answer: 2
        },
        {
          text: "A says 'B and I are both truth-tellers.' B says 'A is a liar.' Exactly one is telling the truth. Who is the truth-teller?",
          choices: ["A. A", "B. B", "C. Both", "D. Neither", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "A club has members who each speak French, German, or both. 10 speak French, 8 speak German, 5 speak both. How many members are there?",
          choices: ["A. 11", "B. 13", "C. 15", "D. 18", "E. 23"],
          answer: 1
        },
        {
          text: "No fish are mammals. All whales are mammals. Which must be true?",
          choices: ["A. Some fish are whales", "B. No whales are fish", "C. All mammals are whales", "D. Some mammals are fish", "E. Whales are fish"],
          answer: 1
        },
        {
          text: "Tom, Uma, Vera, Walt each have one pet: cat, dog, fish, bird. Tom has the dog. Uma does not have the cat. Vera has the bird. What does Walt have?",
          choices: ["A. Cat", "B. Dog", "C. Fish", "D. Bird", "E. Cannot be determined"],
          answer: 0
        },
        {
          text: "A mystery two-digit number: its digits sum to 11, and it is divisible by 7. What is the number?",
          choices: ["A. 29", "B. 56", "C. 65", "D. 74", "E. 83"],
          answer: 1
        },
        {
          text: "Clue 1: Exactly 2 of the 3 statements are true. Statement P: 'It is sunny.' Statement Q: 'It is warm.' Statement R: 'P and Q are both false.' Which pair (P, Q) is possible?",
          choices: ["A. Both true", "B. P true, Q false", "C. P false, Q true", "D. Both false", "E. Both B and C are possible"],
          answer: 4
        },
        {
          text: "In a 3×3 grid, each row and column must contain the digits 1, 2, 3 exactly once. Top row: 1, 2, 3. Middle row: 3, ?, 1. What goes in the middle of the middle row?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "Lily is older than Mia. Nora is younger than Lily. Opal is older than Lily. Lily is younger than Paul. Who is youngest?",
          choices: ["A. Lily", "B. Mia", "C. Nora", "D. Opal", "E. Cannot be determined"],
          answer: 4
        },
        {
          text: "Four cards each show a number on one side and a color on the other. Cards show: 3, 8, red, blue. Rule: 'Every even number has red on the other side.' Which cards must you flip to test the rule?",
          choices: ["A. 3 and red", "B. 8 and blue", "C. 3 and 8", "D. 8 and red", "E. All four cards"],
          answer: 1
        },
        {
          text: "On planet Logica, all Blorks are Snorfs, and no Snorfs are Wimps. Which must be true?",
          choices: ["A. Some Blorks are Wimps", "B. All Wimps are Blorks", "C. No Blorks are Wimps", "D. All Snorfs are Blorks", "E. Some Wimps are Snorfs"],
          answer: 2
        },
        {
          text: "A said: 'I am a liar.' Is A a truth-teller or a liar?",
          choices: ["A. Truth-teller", "B. Liar", "C. Could be either", "D. Neither can exist", "E. The statement is meaningless"],
          answer: 4
        },
        {
          text: "5 cards are numbered 1–5. You draw a card: it is odd. Then from remaining cards you draw another: it is also odd. How many odd cards were there to start?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "Among 100 students: 70 like math, 60 like science, 40 like both. How many like neither?",
          choices: ["A. 5", "B. 10", "C. 15", "D. 20", "E. 30"],
          answer: 1
        },
        {
          text: "A box contains red, blue, and green marbles. There are more red than blue, and more blue than green. There are 5 green marbles. If total marbles are 25, and red = blue + green, how many red marbles are there?",
          choices: ["A. 10", "B. 12", "C. 13", "D. 15", "E. Cannot be determined"],
          answer: 3
        },
        {
          text: "A knight always tells truth, a knave always lies, a spy can do either. A says 'I am a knight.' B says 'A is a spy.' C says 'B is a knave.' If exactly one is a spy, and A is telling the truth, who is the spy?",
          choices: ["A. A", "B. B", "C. C", "D. Cannot be determined", "E. No valid assignment"],
          answer: 1
        },
        {
          text: "Eva scored higher than Fred. Greg scored lower than Fred. Hannah scored between Eva and Greg (not equal). Who scored third highest?",
          choices: ["A. Eva", "B. Fred", "C. Greg", "D. Hannah", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "Which conclusion follows from: 'If it is a holiday, stores are closed. Stores are closed.'?",
          choices: ["A. It is a holiday", "B. It is not a holiday", "C. We cannot conclude it is a holiday", "D. Some stores are open", "E. The statement is false"],
          answer: 2
        },
        {
          text: "Crossing a river: a farmer has a fox, a chicken, and a bag of grain. The boat holds only one extra item. Which must be transported first to avoid anything being eaten?",
          choices: ["A. Fox", "B. Chicken", "C. Grain", "D. Fox or Grain", "E. The order does not matter"],
          answer: 1
        },
        {
          text: "P implies Q. Q implies R. R is false. What can we conclude about P?",
          choices: ["A. P is true", "B. P is false", "C. P might be true", "D. Q is true", "E. Nothing about P"],
          answer: 1
        },
        {
          text: "In a family, there are 2 parents and 3 children. Each child must share a room only with a sibling. There are 2 bedrooms for children. How many room-sharing pairs are possible?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 6", "E. 9"],
          answer: 2
        },
        {
          text: "From these statements, which is definitely true? 'Some cats are black. All black things absorb light.'",
          choices: ["A. All cats absorb light", "B. Some cats absorb light", "C. No cats absorb light", "D. All light-absorbers are cats", "E. Black cats do not exist"],
          answer: 1
        },
        {
          text: "Alice, Bob, and Carol stand in a line. Alice is not last. Bob is not first. Carol is not second. What order are they in?",
          choices: ["A. Alice, Bob, Carol", "B. Bob, Alice, Carol", "C. Carol, Alice, Bob", "D. Alice, Carol, Bob", "E. Carol, Bob, Alice"],
          answer: 2
        },
        {
          text: "A bag has 3 red and 5 blue chips. You pick chips one at a time without replacing them. After drawing 2 blue chips, how many chips are left?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 3
        },
        {
          text: "In a 4×4 Latin square, each row and column contains 1, 2, 3, 4 exactly once. Row 1: 1, 2, 3, 4. Row 2: 2, 1, 4, ?. What is the missing number?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. Cannot be determined"],
          answer: 2
        },
        {
          text: "John has more stamps than Mary. Mary has more stamps than Kim. If Kim has 15 stamps and John has 28, how many could Mary have?",
          choices: ["A. 10", "B. 14", "C. 15", "D. 20", "E. 30"],
          answer: 3
        },
        {
          text: "Exactly one of the following statements is true: (1) 2+2=5, (2) Paris is in France, (3) All birds fly. Which one is true?",
          choices: ["A. Statement 1", "B. Statement 2", "C. Statement 3", "D. Statements 2 and 3", "E. None of them"],
          answer: 1
        },
        {
          text: "A 5×5 grid has a path from top-left to bottom-right moving only right or down. How many steps total does any such path take?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 10"],
          answer: 3
        },
        {
          text: "4 people each make one statement. Al: 'Bo did it.' Bo: 'Al did it.' Co: 'I did not do it.' Do: 'Bo did it.' Exactly one person did it, and that person lied. Who did it?",
          choices: ["A. Al", "B. Bo", "C. Co", "D. Do", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "From: 'No reptiles are warm-blooded. All birds are warm-blooded.' What must follow?",
          choices: ["A. Some birds are reptiles", "B. No birds are reptiles", "C. All warm-blooded animals are birds", "D. Some reptiles are birds", "E. Reptiles and birds are the same"],
          answer: 1
        }
      ]
    },

    "3.2": {
      title: "3.2 Logical Reasoning & Deduction",
      questions: [
        {
          text: "In a tournament, each win gives 3 points, a draw gives 1, a loss gives 0. After 5 games, a team has 11 points. How many games did they win?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "A library has fiction and non-fiction books. 60% are fiction. There are 180 fiction books. How many books are there in total?",
          choices: ["A. 240", "B. 270", "C. 300", "D. 330", "E. 360"],
          answer: 2
        },
        {
          text: "Three switches control three lights in another room. You can only go once. How many times must you toggle switches to identify which controls which?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. More information needed"],
          answer: 1
        },
        {
          text: "4 cards: A♠, A♥, 2♠, 2♥. You draw one and see it is red. What is the probability it is an Ace?",
          choices: ["A. 1/4", "B. 1/3", "C. 1/2", "D. 2/3", "E. 3/4"],
          answer: 2
        },
        {
          text: "I have 10 black socks and 10 white socks in a dark drawer. How many must I pull out to guarantee a matching pair?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 11"],
          answer: 1
        },
        // --- 45 additional 3.2 questions ---
        {
          text: "Alice always tells the truth. Bob always lies. Alice says 'Bob said he is a truth-teller.' What can we conclude?",
          choices: ["A. Bob is a truth-teller", "B. Bob is a liar", "C. Alice is lying", "D. Cannot be determined", "E. Both are liars"],
          answer: 1
        },
        {
          text: "In a class of 30, every student studies French or Spanish. 18 study French and 12 study Spanish. How many study both?",
          choices: ["A. 0", "B. 6", "C. 8", "D. 10", "E. 12"],
          answer: 0
        },
        {
          text: "Five runners finish a race in different places. Anna beats Ben. Ben beats Carol. Dan finishes after Emily but before Anna. Who finishes last?",
          choices: ["A. Anna", "B. Ben", "C. Carol", "D. Dan", "E. Emily"],
          answer: 2
        },
        {
          text: "A truth-teller always tells the truth; a liar always lies. Person A says 'I am a liar.' What is A?",
          choices: ["A. A truth-teller", "B. A liar", "C. Could be either", "D. Neither", "E. The statement is impossible"],
          answer: 4
        },
        {
          text: "In a group of 50 people, 30 like tea and 25 like coffee. 10 like neither. How many like both?",
          choices: ["A. 10", "B. 12", "C. 15", "D. 20", "E. 25"],
          answer: 2
        },
        {
          text: "Four friends — Ana, Bea, Cam, Dan — stand in a row. Ana is not at either end. Bea is next to Ana. Cam is at the left end. Who is at the right end?",
          choices: ["A. Ana", "B. Bea", "C. Cam", "D. Dan", "E. Cannot be determined"],
          answer: 3
        },
        {
          text: "On an island, knights tell the truth and knaves lie. Person X says: 'I am a knave.' What is X?",
          choices: ["A. A knight", "B. A knave", "C. Could be either", "D. The statement is impossible", "E. Neither"],
          answer: 3
        },
        {
          text: "A number has three digits. The tens digit is twice the units digit. The hundreds digit is twice the tens digit. The sum of all digits is 14. What is the number?",
          choices: ["A. 421", "B. 842", "C. 481", "D. 248", "E. 124"],
          answer: 1
        },
        {
          text: "All squares are rectangles. No circle is a rectangle. Therefore:",
          choices: ["A. All circles are squares", "B. No circle is a square", "C. Some squares are circles", "D. All rectangles are squares", "E. Some circles are rectangles"],
          answer: 1
        },
        {
          text: "If it rains, the match is cancelled. The match is not cancelled. What can we conclude?",
          choices: ["A. It rained", "B. It did not rain", "C. The match was played", "D. Both B and C", "E. Nothing"],
          answer: 3
        },
        {
          text: "A, B, C, D, E are consecutive integers (not necessarily in order). A + B = 9, C + D = 13, E = 6. What is A?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 7", "E. 8"],
          answer: 1
        },
        {
          text: "Six people sit at a round table. How many seats away (at most) is any person from the person opposite them?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 5"],
          answer: 2
        },
        {
          text: "In a survey of 100 students: 60 play chess, 50 play checkers, 20 play neither. How many play both?",
          choices: ["A. 20", "B. 25", "C. 30", "D. 35", "E. 40"],
          answer: 2
        },
        {
          text: "Every odd number is prime. 9 is odd. Therefore, 9 is prime. This argument is:",
          choices: ["A. Valid and sound", "B. Valid but unsound", "C. Invalid and unsound", "D. Sound but invalid", "E. A tautology"],
          answer: 1
        },
        {
          text: "A digital clock shows 2:56. What is the next time all three digits (ignoring the colon) are different AND sum to 10? (Hours:Minutes)",
          choices: ["A. 3:07", "B. 1:45", "C. 3:25", "D. 2:71 (invalid)", "E. 3:43"],
          answer: 2
        },
        {
          text: "Three boxes are labelled 'Apples', 'Oranges', and 'Mixed'. All labels are WRONG. You may draw one fruit from one box. From which box should you draw to identify all contents?",
          choices: ["A. Apples", "B. Oranges", "C. Mixed", "D. Any box works", "E. You need to draw from two boxes"],
          answer: 2
        },
        {
          text: "Seven houses in a row are painted one of three colours: red, blue, or green. No two adjacent houses have the same colour. The first house is red. How many valid colourings exist for all 7 houses?",
          choices: ["A. 8", "B. 16", "C. 32", "D. 64", "E. 128"],
          answer: 2
        },
        {
          text: "If all blorks are flurps, and no flurps are grumps, then:",
          choices: ["A. All blorks are grumps", "B. Some blorks may be grumps", "C. No blork is a grump", "D. All grumps are blorks", "E. Some flurps are blorks"],
          answer: 2
        },
        {
          text: "A 3×3 grid is filled with the numbers 1–9, each used once. The middle row sums to 15 and the middle column sums to 15. If the centre cell is 5, what must the sum of all four corners equal?",
          choices: ["A. 16", "B. 18", "C. 20", "D. 22", "E. 24"],
          answer: 2
        },
        {
          text: "Tom is older than Sam. Sam is older than Pat. Pat is older than Alex. If Ann is younger than Sam but older than Pat, who is the second oldest?",
          choices: ["A. Tom", "B. Sam", "C. Pat", "D. Alex", "E. Ann"],
          answer: 1
        },
        {
          text: "A, B, C, D are four consecutive even numbers and A < B < C < D. Their average is 17. What is D?",
          choices: ["A. 18", "B. 19", "C. 20", "D. 22", "E. 21"],
          answer: 2
        },
        {
          text: "Two knights and two knaves are in a room. Each person makes one statement. Knight 1: 'We are all knights.' Knave 1: 'Exactly one of us is a knight.' Which statement is consistent?",
          choices: ["A. Knight 1 only", "B. Knave 1 only", "C. Both", "D. Neither", "E. Cannot be determined"],
          answer: 3
        },
        {
          text: "In a box, there are red, blue, and green balls. There are twice as many blue balls as red balls, and three times as many green balls as blue balls. There are 60 balls in total. How many are red?",
          choices: ["A. 5", "B. 6", "C. 10", "D. 12", "E. 15"],
          answer: 1
        },
        {
          text: "A student scored 72, 85, 90, and 78 on four tests. What score is needed on the fifth test for an average of 82?",
          choices: ["A. 82", "B. 83", "C. 84", "D. 85", "E. 86"],
          answer: 3
        },
        {
          text: "If today is Wednesday, what day of the week is it 100 days from now?",
          choices: ["A. Monday", "B. Tuesday", "C. Wednesday", "D. Thursday", "E. Friday"],
          answer: 4
        },
        {
          text: "A farmer has cows and chickens. He counts 20 heads and 56 legs. How many cows does he have?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 10", "E. 12"],
          answer: 2
        },
        {
          text: "A hidden two-digit number: its tens digit is 3 more than its units digit, and the number is divisible by 7. What is the number?",
          choices: ["A. 41", "B. 52", "C. 63", "D. 74", "E. 85"],
          answer: 2
        },
        {
          text: "Five cards face-down, marked 1–5. You flip cards one by one and stop when you find '3'. In the worst case, how many cards do you need to flip?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 2", "E. 1"],
          answer: 1
        },
        {
          text: "Person A says: 'B is lying.' Person B says: 'C is lying.' Person C says: 'A and B are both lying.' How many are truth-tellers?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. Cannot be determined"],
          answer: 1
        },
        {
          text: "A magic square has rows, columns, and diagonals all summing to the same value. In a 3×3 magic square using integers 1–9, what is the magic sum?",
          choices: ["A. 12", "B. 14", "C. 15", "D. 18", "E. 21"],
          answer: 2
        },
        {
          text: "All mammals breathe air. Dolphins breathe air. Therefore dolphins are mammals. Is this argument valid?",
          choices: ["A. Yes, valid and sound", "B. No, the conclusion is true but the argument form is invalid", "C. Yes, valid but unsound", "D. No, dolphins do not breathe air", "E. Yes, because the conclusion is correct"],
          answer: 1
        },
        {
          text: "A code uses letters where A=1, B=2, …, Z=26. Each word's value is the sum of its letter values. The word CAT has value 3+1+20=24. Which word has value 36?",
          choices: ["A. HAT", "B. MAP", "C. LAW", "D. DOG", "E. EAT"],
          answer: 2
        },
        {
          text: "In a class, 40% of students are boys and 60% are girls. 50% of boys and 25% of girls wear glasses. What percentage of the class wears glasses?",
          choices: ["A. 30%", "B. 32%", "C. 35%", "D. 37%", "E. 40%"],
          answer: 2
        },
        {
          text: "I have 5 red and 3 blue gloves mixed in a box (left and right exist, so 10 total). How many must I take out to guarantee a matching pair (same colour, same hand)?",
          choices: ["A. 3", "B. 4", "C. 7", "D. 9", "E. 11"],
          answer: 3
        },
        {
          text: "A number leaves remainder 2 when divided by 5 and remainder 3 when divided by 7. Which of the following could be that number?",
          choices: ["A. 17", "B. 22", "C. 31", "D. 37", "E. 52"],
          answer: 0
        },
        {
          text: "There are 4 prizes and 4 students. Each student wins exactly one prize and each prize goes to exactly one student. Alex wins 1st or 2nd. Beth wins 2nd or 3rd. Charlie wins 3rd. What does Dave win?",
          choices: ["A. 1st", "B. 2nd", "C. 3rd", "D. 4th", "E. Cannot be determined"],
          answer: 0
        },
        {
          text: "A sequence of statements: P implies Q, Q implies R, R is false. What can we conclude about P?",
          choices: ["A. P is true", "B. P is false", "C. P may be true or false", "D. Q is true", "E. R is true"],
          answer: 1
        },
        {
          text: "A two-digit number N: reversing its digits gives a number 27 less than N. The digits differ by 3. What is N?",
          choices: ["A. 52", "B. 63", "C. 74", "D. 85", "E. 96"],
          answer: 3
        },
        {
          text: "In a 4×4 grid, every row and every column must contain exactly the numbers 1, 2, 3, 4. The first row is 1, 2, 3, 4. The second row starts with 2. What must the second element of the second row be?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. Cannot be determined uniquely"],
          answer: 4
        },
        {
          text: "Anna, Bella, and Cara each roll a die. The winner is the one with the highest number. Anna rolls 5. What is the minimum number Bella must roll to guarantee she is NOT last regardless of Cara's roll?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 3", "E. 2"],
          answer: 0
        },
        {
          text: "A bag has red and white balls. The ratio of red to white is 3:5. If 4 more red balls are added, the ratio becomes 1:1. How many white balls are in the bag?",
          choices: ["A. 8", "B. 10", "C. 12", "D. 15", "E. 20"],
          answer: 1
        },
        {
          text: "A bat and a ball together cost $1.10. The bat costs $1 more than the ball. How much does the ball cost?",
          choices: ["A. $0.10", "B. $0.05", "C. $0.15", "D. $0.50", "E. $0.20"],
          answer: 1
        },
        {
          text: "Six teams play a round-robin tournament (each pair plays once). How many total games are played?",
          choices: ["A. 12", "B. 15", "C. 18", "D. 21", "E. 30"],
          answer: 1
        },
        {
          text: "A two-digit number is 4 times the sum of its digits. If the tens digit is increased by 2 and the units digit is decreased by 1, the new number is prime. What is the original number?",
          choices: ["A. 12", "B. 24", "C. 36", "D. 48", "E. 72"],
          answer: 2
        },
        {
          text: "A clock shows 3:15. What is the angle between the hour and minute hands?",
          choices: ["A. 0°", "B. 7.5°", "C. 15°", "D. 22.5°", "E. 30°"],
          answer: 1
        }
      ]
    },

    "3.3": {
      title: "3.3 Combinatorics & Systematic Counting",
      questions: [
        {
          text: "In how many ways can 5 books be arranged on a shelf?",
          choices: ["A. 25", "B. 60", "C. 100", "D. 120", "E. 240"],
          answer: 3
        },
        {
          text: "How many different 4-digit PINs can be made using digits 1–9 (no repetition)?",
          choices: ["A. 3024", "B. 3650", "C. 4536", "D. 6561", "E. 9000"],
          answer: 2
        },
        {
          text: "From 6 students, how many ways can a class president and vice-president be chosen (different roles)?",
          choices: ["A. 15", "B. 20", "C. 25", "D. 30", "E. 36"],
          answer: 3
        },
        {
          text: "How many ways can you choose 3 books from a shelf of 7 (order does not matter)?",
          choices: ["A. 21", "B. 35", "C. 42", "D. 56", "E. 70"],
          answer: 1
        },
        {
          text: "A pizza place offers 8 toppings. How many different 2-topping pizzas can you order?",
          choices: ["A. 16", "B. 24", "C. 28", "D. 32", "E. 56"],
          answer: 2
        },
        // --- 45 additional 3.3 questions ---
        {
          text: "How many ways can the letters of the word STOP be arranged?",
          choices: ["A. 4", "B. 12", "C. 24", "D. 48", "E. 16"],
          answer: 2
        },
        {
          text: "A combination lock uses 3 digits, each from 0–9 (repetition allowed). How many possible combinations exist?",
          choices: ["A. 100", "B. 720", "C. 900", "D. 1000", "E. 729"],
          answer: 3
        },
        {
          text: "In how many ways can 4 different coloured flags be arranged in a row on a flagpole?",
          choices: ["A. 4", "B. 12", "C. 16", "D. 24", "E. 48"],
          answer: 3
        },
        {
          text: "A restaurant offers 4 starters, 5 main courses, and 3 desserts. How many different 3-course meals can be ordered?",
          choices: ["A. 12", "B. 20", "C. 60", "D. 120", "E. 48"],
          answer: 2
        },
        {
          text: "How many different 3-letter arrangements (order matters) can be made from the letters A, B, C, D, E (no repetition)?",
          choices: ["A. 10", "B. 20", "C. 60", "D. 100", "E. 120"],
          answer: 2
        },
        {
          text: "How many ways can 6 people be seated in a row of 6 chairs?",
          choices: ["A. 36", "B. 120", "C. 360", "D. 720", "E. 1440"],
          answer: 3
        },
        {
          text: "A team of 4 is chosen from 9 players. How many different teams are possible?",
          choices: ["A. 84", "B. 126", "C. 210", "D. 3024", "E. 36"],
          answer: 1
        },
        {
          text: "How many 3-digit numbers can be formed using digits 1, 2, 3, 4, 5 if repetition is NOT allowed?",
          choices: ["A. 15", "B. 30", "C. 60", "D. 100", "E. 125"],
          answer: 2
        },
        {
          text: "In a race of 8 runners, in how many ways can the gold, silver, and bronze medals be awarded?",
          choices: ["A. 56", "B. 168", "C. 336", "D. 512", "E. 720"],
          answer: 2
        },
        {
          text: "How many paths are there from the bottom-left to the top-right corner of a 3×3 grid, moving only right or up?",
          choices: ["A. 6", "B. 9", "C. 12", "D. 15", "E. 20"],
          answer: 4
        },
        {
          text: "How many subsets does a set of 4 elements have?",
          choices: ["A. 4", "B. 8", "C. 12", "D. 16", "E. 24"],
          answer: 3
        },
        {
          text: "In how many ways can 3 students be chosen from 10 to represent the school (order doesn't matter)?",
          choices: ["A. 30", "B. 60", "C. 120", "D. 720", "E. 1000"],
          answer: 2
        },
        {
          text: "How many 4-digit even numbers can be formed using digits 1, 2, 3, 4 (no repetition)?",
          choices: ["A. 6", "B. 12", "C. 18", "D. 24", "E. 48"],
          answer: 1
        },
        {
          text: "A committee of 2 men and 2 women is chosen from 5 men and 4 women. How many ways is this possible?",
          choices: ["A. 20", "B. 40", "C. 60", "D. 80", "E. 120"],
          answer: 2
        },
        {
          text: "How many ways can 5 people sit in a circle (rotations are considered the same)?",
          choices: ["A. 5", "B. 12", "C. 24", "D. 60", "E. 120"],
          answer: 2
        },
        {
          text: "How many different 5-card hands can be dealt from a standard 52-card deck?",
          choices: ["A. 2,598,960", "B. 1,960,000", "C. 3,120,000", "D. 311,875,200", "E. 52,000"],
          answer: 0
        },
        {
          text: "A 4-digit PIN uses digits 0–9 and may start with 0. Repetition is allowed. How many PINs are possible?",
          choices: ["A. 9000", "B. 5040", "C. 10000", "D. 6561", "E. 40"],
          answer: 2
        },
        {
          text: "How many ways can the word LEVEL be arranged (distinct arrangements)?",
          choices: ["A. 120", "B. 60", "C. 30", "D. 20", "E. 10"],
          answer: 2
        },
        {
          text: "From 7 students, how many ways can first, second, and third place be awarded?",
          choices: ["A. 35", "B. 105", "C. 210", "D. 840", "E. 343"],
          answer: 2
        },
        {
          text: "How many paths go from A to B on a 2×4 grid (2 rows, 4 columns), moving only right or down?",
          choices: ["A. 6", "B. 10", "C. 15", "D. 20", "E. 35"],
          answer: 1
        },
        {
          text: "In how many ways can the digits 1, 1, 2, 2, 3 be arranged in a row?",
          choices: ["A. 20", "B. 30", "C. 60", "D. 120", "E. 10"],
          answer: 1
        },
        {
          text: "A shirt comes in 3 sizes and 5 colours. Pants come in 3 sizes and 4 colours. How many different shirt–pants outfits are possible (sizes need not match)?",
          choices: ["A. 60", "B. 120", "C. 180", "D. 60", "E. 240"],
          answer: 2
        },
        {
          text: "From a group of 6 friends, how many ways can a 3-person team be chosen if one specific person (Alex) MUST be on the team?",
          choices: ["A. 5", "B. 10", "C. 15", "D. 20", "E. 30"],
          answer: 1
        },
        {
          text: "How many different 2-digit numbers can be formed using odd digits (1, 3, 5, 7, 9) with repetition allowed?",
          choices: ["A. 10", "B. 20", "C. 25", "D. 30", "E. 45"],
          answer: 2
        },
        {
          text: "In how many ways can 8 books be arranged on a shelf if 2 specific books must always be next to each other?",
          choices: ["A. 720", "B. 1440", "C. 5040", "D. 10080", "E. 40320"],
          answer: 3
        },
        {
          text: "How many distinct diagonals does a hexagon have?",
          choices: ["A. 6", "B. 9", "C. 12", "D. 15", "E. 18"],
          answer: 1
        },
        {
          text: "A number between 100 and 999 uses three different non-zero digits. The digits are in strictly increasing order from left to right. How many such numbers exist?",
          choices: ["A. 56", "B. 84", "C. 126", "D. 168", "E. 252"],
          answer: 1
        },
        {
          text: "8 athletes compete. In how many ways can the top 2 finishers be ordered (1st, 2nd)?",
          choices: ["A. 28", "B. 56", "C. 64", "D. 16", "E. 112"],
          answer: 1
        },
        {
          text: "A grid is 4 units wide and 3 units tall. How many paths go from bottom-left to top-right corner moving only right or up?",
          choices: ["A. 20", "B. 35", "C. 56", "D. 70", "E. 84"],
          answer: 1
        },
        {
          text: "From 5 red and 4 blue balls, how many ways can 2 red and 2 blue be chosen?",
          choices: ["A. 40", "B. 60", "C. 90", "D. 36", "E. 120"],
          answer: 1
        },
        {
          text: "How many 3-digit numbers have all digits the same (e.g., 111, 222, …)?",
          choices: ["A. 3", "B. 9", "C. 10", "D. 27", "E. 8"],
          answer: 1
        },
        {
          text: "In a tournament, 10 teams each play every other team exactly once. How many games are played in total?",
          choices: ["A. 20", "B. 30", "C. 45", "D. 90", "E. 100"],
          answer: 2
        },
        {
          text: "How many ways can you select a president, vice-president, and secretary from a club of 10 members (all different roles, different people)?",
          choices: ["A. 120", "B. 360", "C. 720", "D. 1000", "E. 504"],
          answer: 2
        },
        {
          text: "How many ways can 3 boys and 2 girls sit in a row if boys and girls must alternate? (Start can be boy or girl.)",
          choices: ["A. 6", "B. 12", "C. 24", "D. 48", "E. 72"],
          answer: 1
        },
        {
          text: "How many ways can 4 different gifts be given to 4 children so each child gets exactly one gift?",
          choices: ["A. 4", "B. 16", "C. 24", "D. 64", "E. 256"],
          answer: 2
        },
        {
          text: "A number is formed by choosing 3 digits from {1, 2, 3, 4, 5, 6} without repetition. How many of these 3-digit numbers are greater than 300?",
          choices: ["A. 48", "B. 60", "C. 80", "D. 100", "E. 120"],
          answer: 2
        },
        {
          text: "Five people shake hands with each other exactly once. How many handshakes take place?",
          choices: ["A. 5", "B. 8", "C. 10", "D. 15", "E. 20"],
          answer: 2
        },
        {
          text: "How many arrangements of the letters in BANANA are there?",
          choices: ["A. 60", "B. 120", "C. 180", "D. 360", "E. 720"],
          answer: 0
        },
        {
          text: "A bag has 3 red, 3 green, and 3 blue marbles. In how many ways can you choose one marble of each colour?",
          choices: ["A. 3", "B. 9", "C. 18", "D. 27", "E. 6"],
          answer: 3
        },
        {
          text: "How many 4-digit numbers use the digits 1, 2, 3, 4 exactly once and are divisible by 4?",
          choices: ["A. 4", "B. 6", "C. 8", "D. 10", "E. 12"],
          answer: 1
        },
        {
          text: "A coin is tossed 5 times. How many distinct sequences of results (H/T) are possible?",
          choices: ["A. 10", "B. 16", "C. 25", "D. 32", "E. 64"],
          answer: 3
        },
        {
          text: "From 8 players, a captain and a co-captain are chosen (different players, roles matter). How many ways?",
          choices: ["A. 28", "B. 56", "C. 64", "D. 8", "E. 16"],
          answer: 1
        },
        {
          text: "A child builds a tower using exactly 4 blocks chosen from blocks coloured red, blue, and green (repetition allowed, order matters). How many towers are possible?",
          choices: ["A. 12", "B. 27", "C. 64", "D. 81", "E. 256"],
          answer: 3
        },
        {
          text: "How many different sums can be made by choosing exactly 2 coins from a set of coins worth 1¢, 5¢, 10¢, 25¢, and 50¢?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 12", "E. 25"],
          answer: 2
        },
        {
          text: "In how many ways can 2 boys and 2 girls be chosen from 4 boys and 5 girls?",
          choices: ["A. 40", "B. 50", "C. 60", "D. 80", "E. 100"],
          answer: 2
        }
      ]
    },

    "3.4": {
      title: "3.4 Probability & Chance",
      questions: [
        {
          text: "A bag has 4 red and 6 blue balls. What is the probability of picking a red ball?",
          choices: ["A. 1/5", "B. 2/5", "C. 3/5", "D. 4/5", "E. 1/2"],
          answer: 1
        },
        {
          text: "Two coins are tossed. What is the probability of getting exactly one head?",
          choices: ["A. 1/4", "B. 1/3", "C. 1/2", "D. 2/3", "E. 3/4"],
          answer: 2
        },
        {
          text: "A die is rolled. What is the probability of rolling a factor of 12?",
          choices: ["A. 2/6", "B. 3/6", "C. 4/6", "D. 5/6", "E. 6/6"],
          answer: 2
        },
        {
          text: "If P(A) = 0.3 and P(B) = 0.5, and A and B are mutually exclusive, what is P(A or B)?",
          choices: ["A. 0.15", "B. 0.2", "C. 0.6", "D. 0.7", "E. 0.8"],
          answer: 3
        },
        {
          text: "A number is chosen from 1–20. What is the probability it is a multiple of 3 or 5?",
          choices: ["A. 6/20", "B. 8/20", "C. 9/20", "D. 10/20", "E. 12/20"],
          answer: 2
        },
        // --- 45 additional 3.4 questions ---
        {
          text: "A bag contains 3 red, 4 green, and 5 blue marbles. One marble is drawn at random. What is the probability it is green?",
          choices: ["A. 1/4", "B. 1/3", "C. 5/12", "D. 7/12", "E. 3/4"],
          answer: 1
        },
        {
          text: "A standard die is rolled. What is the probability of rolling a number greater than 4?",
          choices: ["A. 1/6", "B. 1/3", "C. 1/2", "D. 2/3", "E. 5/6"],
          answer: 1
        },
        {
          text: "A spinner is divided into 8 equal sections numbered 1–8. What is the probability of landing on an even number?",
          choices: ["A. 1/4", "B. 3/8", "C. 1/2", "D. 5/8", "E. 3/4"],
          answer: 2
        },
        {
          text: "From a standard deck of 52 cards, one card is drawn. What is the probability it is a King?",
          choices: ["A. 1/52", "B. 1/26", "C. 1/13", "D. 4/26", "E. 1/4"],
          answer: 2
        },
        {
          text: "A jar has 5 yellow and 7 purple candies. One is chosen at random. What is the probability it is NOT yellow?",
          choices: ["A. 5/12", "B. 7/17", "C. 7/12", "D. 5/7", "E. 1/2"],
          answer: 2
        },
        {
          text: "Two dice are rolled. What is the probability both show the same number?",
          choices: ["A. 1/36", "B. 1/12", "C. 1/6", "D. 1/4", "E. 5/36"],
          answer: 2
        },
        {
          text: "A box holds 10 cards numbered 1–10. What is the probability of drawing a prime number?",
          choices: ["A. 2/10", "B. 3/10", "C. 4/10", "D. 5/10", "E. 6/10"],
          answer: 2
        },
        {
          text: "A letter is chosen at random from the word MATHEMATICS. What is the probability of choosing the letter M?",
          choices: ["A. 1/11", "B. 2/11", "C. 3/11", "D. 1/5", "E. 4/11"],
          answer: 1
        },
        {
          text: "A bag has 2 red, 3 blue, and 5 white balls. What is the probability of NOT drawing white?",
          choices: ["A. 1/5", "B. 1/4", "C. 1/2", "D. 3/5", "E. 2/5"],
          answer: 2
        },
        {
          text: "A spinner has 3 equal sections: red, blue, green. What is the probability of NOT landing on red in two consecutive spins?",
          choices: ["A. 1/9", "B. 2/9", "C. 4/9", "D. 2/3", "E. 1/3"],
          answer: 2
        },
        {
          text: "A bag contains 6 red and 4 blue marbles. Two marbles are drawn one after another WITHOUT replacement. What is the probability both are red?",
          choices: ["A. 1/3", "B. 2/9", "C. 1/4", "D. 3/10", "E. 9/25"],
          answer: 0
        },
        {
          text: "A number from 1 to 50 is chosen at random. What is the probability it is a perfect square?",
          choices: ["A. 3/50", "B. 7/50", "C. 1/7", "D. 7/25", "E. 1/5"],
          answer: 1
        },
        {
          text: "Three coins are tossed. What is the probability of getting exactly 2 heads?",
          choices: ["A. 1/8", "B. 1/4", "C. 3/8", "D. 1/2", "E. 5/8"],
          answer: 2
        },
        {
          text: "A standard die is rolled twice. What is the probability that the sum equals 7?",
          choices: ["A. 1/12", "B. 5/36", "C. 1/6", "D. 7/36", "E. 1/5"],
          answer: 2
        },
        {
          text: "A rectangle is 10 cm by 6 cm. A point is chosen randomly inside it. A circle of radius 2 cm is drawn at its centre. What is the probability the point falls inside the circle? (Use π ≈ 3.14)",
          choices: ["A. 4π/60", "B. 4π/60 ≈ 0.21", "C. π/15 ≈ 0.21", "D. π/15", "E. Both B and C are correct"],
          answer: 4
        },
        {
          text: "A bag holds 8 marbles: 3 red, 3 blue, 2 green. What is the probability of drawing red or green?",
          choices: ["A. 1/4", "B. 5/8", "C. 3/8", "D. 1/2", "E. 3/4"],
          answer: 1
        },
        {
          text: "A card is drawn from 52-card deck. What is the probability it is a red face card (Jack, Queen, or King)?",
          choices: ["A. 3/52", "B. 6/52", "C. 3/26", "D. 6/26", "E. Both B and C"],
          answer: 4
        },
        {
          text: "Two dice are rolled. What is the probability of getting a sum of at least 10?",
          choices: ["A. 1/12", "B. 1/6", "C. 5/36", "D. 7/36", "E. 6/36"],
          answer: 1
        },
        {
          text: "A number is chosen at random from 1 to 30. What is the probability it is divisible by both 2 and 3?",
          choices: ["A. 1/10", "B. 1/6", "C. 1/5", "D. 1/4", "E. 7/30"],
          answer: 1
        },
        {
          text: "If P(A) = 3/5 and events A and B are complementary, what is P(B)?",
          choices: ["A. 3/5", "B. 2/5", "C. 1/5", "D. 3/10", "E. 1/2"],
          answer: 1
        },
        {
          text: "A spinner has sections worth 1, 2, 3, and 4 points, each equally likely. What is the expected value of one spin?",
          choices: ["A. 2", "B. 2.5", "C. 3", "D. 2.25", "E. 1.5"],
          answer: 1
        },
        {
          text: "A fair coin is flipped 3 times. What is the probability of getting all tails?",
          choices: ["A. 1/2", "B. 1/4", "C. 1/6", "D. 1/8", "E. 1/3"],
          answer: 3
        },
        {
          text: "A bag holds cards numbered 1–12. What is the probability of drawing a multiple of 4?",
          choices: ["A. 1/6", "B. 1/4", "C. 1/3", "D. 5/12", "E. 1/2"],
          answer: 1
        },
        {
          text: "A number is randomly chosen from 1 to 100. What is the probability it ends in 5 or 0?",
          choices: ["A. 1/20", "B. 1/10", "C. 1/5", "D. 1/4", "E. 3/10"],
          answer: 2
        },
        {
          text: "A letter is chosen randomly from the alphabet (26 letters). What is the probability it is a vowel (A, E, I, O, U)?",
          choices: ["A. 1/26", "B. 3/26", "C. 5/26", "D. 5/13", "E. 1/5"],
          answer: 2
        },
        {
          text: "Two cards are drawn from a deck of 10 cards numbered 1–10, without replacement. What is the probability both are odd?",
          choices: ["A. 1/9", "B. 2/9", "C. 1/4", "D. 5/18", "E. 1/2"],
          answer: 1
        },
        {
          text: "A bag has 4 red, 3 blue, and 5 green balls. A ball is drawn and not replaced, then another is drawn. What is the probability the first is red and the second is green?",
          choices: ["A. 5/33", "B. 20/132", "C. 1/6", "D. 20/144", "E. 4/33"],
          answer: 0
        },
        {
          text: "A spinner has 5 equal sections coloured red, blue, green, yellow, purple. What is the probability of NOT landing on red or blue in a single spin?",
          choices: ["A. 2/5", "B. 3/5", "C. 1/5", "D. 4/5", "E. 1/2"],
          answer: 1
        },
        {
          text: "A standard die is rolled. What is the probability of rolling a number that is both even and greater than 3?",
          choices: ["A. 1/6", "B. 1/3", "C. 1/2", "D. 2/3", "E. 5/6"],
          answer: 1
        },
        {
          text: "In a class of 30 students, 18 play football and 12 play basketball. If 6 play both, what is the probability a randomly chosen student plays at least one sport?",
          choices: ["A. 4/5", "B. 5/6", "C. 2/3", "D. 3/5", "E. 1"],
          answer: 0
        },
        {
          text: "A quiz has 4 true/false questions. A student guesses all answers randomly. What is the probability of getting all 4 correct?",
          choices: ["A. 1/4", "B. 1/8", "C. 1/16", "D. 1/32", "E. 1/2"],
          answer: 2
        },
        {
          text: "A number from 1–25 is chosen. What is the probability it is a prime number?",
          choices: ["A. 7/25", "B. 8/25", "C. 9/25", "D. 2/5", "E. 11/25"],
          answer: 2
        },
        {
          text: "A die is rolled and a coin is flipped. What is the probability of getting a 6 and heads?",
          choices: ["A. 1/12", "B. 1/6", "C. 1/4", "D. 7/12", "E. 1/3"],
          answer: 0
        },
        {
          text: "A bag has 9 balls: 4 are marked with X and 5 are marked with O. Two balls are drawn with replacement. What is the probability both show X?",
          choices: ["A. 4/9", "B. 16/81", "C. 2/9", "D. 8/81", "E. 1/3"],
          answer: 1
        },
        {
          text: "A target board is a square of side 10 cm with a circle of radius 3 cm at its centre. What is the probability that a randomly thrown dart hits the circle? (Use π ≈ 3.14)",
          choices: ["A. 3/10", "B. 9π/100", "C. 0.2826", "D. Both B and C", "E. π/9"],
          answer: 3
        },
        {
          text: "P(A) = 0.4, P(B) = 0.5, and A and B are independent. What is P(A and B)?",
          choices: ["A. 0.1", "B. 0.2", "C. 0.45", "D. 0.9", "E. 0.45"],
          answer: 1
        },
        {
          text: "A number is chosen from 1–40. What is the probability it is divisible by 4 but not by 8?",
          choices: ["A. 1/8", "B. 1/4", "C. 3/20", "D. 1/5", "E. 1/10"],
          answer: 0
        },
        {
          text: "A bag has 5 red and 5 blue balls. Three balls are drawn with replacement. What is the probability all three are red?",
          choices: ["A. 1/4", "B. 1/8", "C. 3/8", "D. 1/2", "E. 1/6"],
          answer: 1
        },
        {
          text: "A bag has 3 red and 7 blue balls. One ball is drawn and found to be red. It is replaced. A second draw is made. What is the probability the second is also red?",
          choices: ["A. 2/10", "B. 3/10", "C. 9/100", "D. 3/9", "E. 1/10"],
          answer: 1
        },
        {
          text: "A number between 1 and 50 (inclusive) is chosen at random. What is the probability it is a multiple of 7?",
          choices: ["A. 6/50", "B. 7/50", "C. 1/7", "D. 8/50", "E. 7/49"],
          answer: 1
        },
        {
          text: "A box contains 5 defective and 15 good items. One is drawn at random. What is the probability it is good?",
          choices: ["A. 1/4", "B. 1/3", "C. 3/4", "D. 4/5", "E. 2/3"],
          answer: 2
        },
        {
          text: "A bag has balls numbered 1–15. What is the probability of drawing a number that is a multiple of 3 AND greater than 9?",
          choices: ["A. 1/5", "B. 1/3", "C. 1/4", "D. 2/15", "E. 1/15"],
          answer: 0
        },
        {
          text: "If a fair die is rolled, what is the probability of getting a number that is NOT a multiple of 2 and NOT a multiple of 3?",
          choices: ["A. 1/6", "B. 1/3", "C. 1/2", "D. 2/3", "E. 5/6"],
          answer: 1
        },
        {
          text: "Three people each independently pick a random day of the week. What is the probability all three pick Monday?",
          choices: ["A. 1/7", "B. 1/14", "C. 1/49", "D. 1/343", "E. 3/7"],
          answer: 3
        },
        {
          text: "A bag has 10 balls: 1 gold, 4 silver, and 5 bronze. What is the probability of NOT drawing gold?",
          choices: ["A. 1/10", "B. 9/10", "C. 1/2", "D. 4/5", "E. 3/5"],
          answer: 1
        }
      ]
    },

    "4.1": {
      title: "4.1 Number Sequences",
      questions: [
        {
          text: "What is the 10th term of the sequence 3, 7, 11, 15, ...?",
          choices: ["A. 35", "B. 38", "C. 39", "D. 40", "E. 43"],
          answer: 2
        },
        {
          text: "In the sequence 1, 1, 2, 3, 5, 8, 13, ..., what is the 9th term?",
          choices: ["A. 21", "B. 29", "C. 34", "D. 40", "E. 55"],
          answer: 2
        },
        {
          text: "What is the sum of the first 10 terms of the sequence 2, 4, 6, 8, ...?",
          choices: ["A. 90", "B. 100", "C. 110", "D. 120", "E. 130"],
          answer: 2
        },
        {
          text: "A geometric sequence has first term 2 and ratio 3. What is the 5th term?",
          choices: ["A. 54", "B. 108", "C. 162", "D. 243", "E. 486"],
          answer: 2
        },
        {
          text: "The 4th and 7th terms of an arithmetic sequence are 15 and 27. What is the 1st term?",
          choices: ["A. 3", "B. 5", "C. 7", "D. 9", "E. 11"],
          answer: 0
        },
        {
          text: "What is the 8th term of the arithmetic sequence 5, 8, 11, 14, ...?",
          choices: ["A. 23", "B. 25", "C. 26", "D. 28", "E. 30"],
          answer: 2
        },
        {
          text: "A geometric sequence has first term 3 and common ratio 2. What is the 6th term?",
          choices: ["A. 48", "B. 64", "C. 80", "D. 96", "E. 128"],
          answer: 3
        },
        {
          text: "What is the sum of the first 20 odd numbers? (1 + 3 + 5 + ... + 39)",
          choices: ["A. 200", "B. 300", "C. 380", "D. 400", "E. 420"],
          answer: 3
        },
        {
          text: "In the Fibonacci-like sequence 2, 5, 7, 12, 19, 31, ..., what is the 7th term?",
          choices: ["A. 43", "B. 48", "C. 50", "D. 52", "E. 55"],
          answer: 2
        },
        {
          text: "The sequence of perfect squares goes 1, 4, 9, 16, 25, 36, 49, 64, ... What is the difference between the 8th term and the 6th term?",
          choices: ["A. 20", "B. 24", "C. 26", "D. 28", "E. 32"],
          answer: 3
        },
        {
          text: "The rule for a sequence is: multiply the previous term by 3 then subtract 1. If the 1st term is 2, what is the 4th term?",
          choices: ["A. 35", "B. 38", "C. 41", "D. 44", "E. 47"],
          answer: 2
        },
        {
          text: "An arithmetic sequence has 1st term 100 and common difference −7. What is the 10th term?",
          choices: ["A. 28", "B. 30", "C. 37", "D. 42", "E. 63"],
          answer: 2
        },
        {
          text: "What is the sum of the first 15 terms of the sequence 1, 2, 3, 4, ...?",
          choices: ["A. 100", "B. 105", "C. 110", "D. 115", "E. 120"],
          answer: 4
        },
        {
          text: "In the sequence 1, 8, 27, 64, 125, ... (cubes of integers), what is the 6th term?",
          choices: ["A. 196", "B. 210", "C. 216", "D. 225", "E. 243"],
          answer: 2
        },
        {
          text: "A sequence alternates between adding 3 and adding 5: 1, 4, 9, 12, 17, 20, ... What is the 10th term?",
          choices: ["A. 33", "B. 36", "C. 37", "D. 40", "E. 41"],
          answer: 2
        },
        {
          text: "The nth term of a sequence is given by 3n² − 2. What is the 5th term?",
          choices: ["A. 63", "B. 70", "C. 73", "D. 75", "E. 78"],
          answer: 2
        },
        {
          text: "The differences between consecutive terms of a sequence are 1, 2, 3, 4, 5, ... The first term is 1. What is the 7th term?",
          choices: ["A. 20", "B. 21", "C. 22", "D. 25", "E. 28"],
          answer: 2
        },
        {
          text: "A geometric sequence has terms 4, 12, 36, 108, ... What is the common ratio?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 6", "E. 8"],
          answer: 1
        },
        {
          text: "The nth term formula for a sequence is 4n + 3. What is the sum of the first 5 terms?",
          choices: ["A. 65", "B. 70", "C. 75", "D. 80", "E. 85"],
          answer: 2
        },
        {
          text: "In a sequence where each term is the sum of the three terms before it, starting 1, 1, 2, ..., what is the 6th term?",
          choices: ["A. 7", "B. 10", "C. 11", "D. 12", "E. 13"],
          answer: 4
        },
        {
          text: "The sequence 2, 6, 12, 20, 30, ... follows the pattern n(n+1). What is the 8th term?",
          choices: ["A. 56", "B. 64", "C. 70", "D. 72", "E. 80"],
          answer: 3
        },
        {
          text: "An arithmetic sequence has a 3rd term of 11 and an 8th term of 31. What is the common difference?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 1
        },
        {
          text: "What is the 12th term of the sequence 100, 93, 86, 79, ...?",
          choices: ["A. 20", "B. 23", "C. 25", "D. 28", "E. 30"],
          answer: 1
        },
        {
          text: "The sequence 1, 3, 6, 10, 15, 21, ... represents triangular numbers. What is the 9th triangular number?",
          choices: ["A. 36", "B. 40", "C. 42", "D. 45", "E. 55"],
          answer: 3
        },
        {
          text: "A geometric sequence starts 1, −2, 4, −8, ... What is the 7th term?",
          choices: ["A. −64", "B. 64", "C. −128", "D. 128", "E. 32"],
          answer: 1
        },
        {
          text: "How many terms of the arithmetic sequence 5, 9, 13, 17, ... are less than 100?",
          choices: ["A. 23", "B. 24", "C. 25", "D. 26", "E. 27"],
          answer: 1
        },
        {
          text: "The sequence 1, 2, 4, 8, 16, ... doubles each time. What is the sum of the first 8 terms?",
          choices: ["A. 128", "B. 255", "C. 256", "D. 512", "E. 1024"],
          answer: 1
        },
        {
          text: "A sequence is defined as: a₁ = 5, and each term is 2 more than twice the previous term. What is a₃?",
          choices: ["A. 20", "B. 22", "C. 24", "D. 26", "E. 28"],
          answer: 3
        },
        {
          text: "The digits of n² for n = 1, 2, 3, ... give units digits: 1, 4, 9, 6, 5, 6, 9, 4, 1, 0, 1, 4, ... What is the units digit of 37²?",
          choices: ["A. 3", "B. 6", "C. 7", "D. 9", "E. 1"],
          answer: 3
        },
        {
          text: "The nth term of a sequence is 2ⁿ − n. What is the 5th term?",
          choices: ["A. 24", "B. 26", "C. 27", "D. 28", "E. 30"],
          answer: 2
        },
        {
          text: "The first term of an arithmetic sequence is 7 and the sum of the first 5 terms is 55. What is the common difference?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
          answer: 0
        },
        {
          text: "The sequence 3, 5, 9, 15, 23, 33, ... has differences that increase by 2 each time. What is the 8th term?",
          choices: ["A. 53", "B. 56", "C. 59", "D. 62", "E. 65"],
          answer: 2
        },
        {
          text: "A geometric sequence has 2nd term = 6 and 4th term = 54. What is the common ratio?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 6", "E. 9"],
          answer: 1
        },
        {
          text: "What is the 20th term of the sequence 1, 4, 9, 16, 25, ... (squares)?",
          choices: ["A. 361", "B. 380", "C. 400", "D. 420", "E. 441"],
          answer: 2
        },
        {
          text: "The sequence 5, 10, 20, 40, ... is geometric. What is the 8th term?",
          choices: ["A. 320", "B. 480", "C. 640", "D. 1280", "E. 2560"],
          answer: 2
        },
        {
          text: "In an arithmetic sequence, the 5th term is 23 and the common difference is 4. What is the 1st term?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "The sum of the first n terms of a sequence is given by Sₙ = n² + 2n. What is the 5th term alone?",
          choices: ["A. 10", "B. 11", "C. 12", "D. 13", "E. 14"],
          answer: 1
        },
        {
          text: "A sequence starts 2, 3, 5, 8, 12, 17, 23, ... (differences increase by 1 each time). What is the 9th term?",
          choices: ["A. 36", "B. 38", "C. 40", "D. 42", "E. 44"],
          answer: 1
        },
        {
          text: "What is the sum of all even numbers from 2 to 50?",
          choices: ["A. 600", "B. 625", "C. 650", "D. 675", "E. 700"],
          answer: 2
        },
        {
          text: "A Fibonacci-like sequence starts with 3 and 4: 3, 4, 7, 11, 18, 29, ... What is the 8th term?",
          choices: ["A. 47", "B. 65", "C. 76", "D. 87", "E. 110"],
          answer: 2
        },
        {
          text: "The nth term of a sequence is (−1)ⁿ × n. What is the sum of the first 6 terms?",
          choices: ["A. −3", "B. −2", "C. −1", "D. 0", "E. 3"],
          answer: 4
        },
        {
          text: "An arithmetic sequence has first term 50 and last term 2, with 17 terms in total. What is the common difference?",
          choices: ["A. −3", "B. −4", "C. −5", "D. −6", "E. −7"],
          answer: 0
        },
        {
          text: "The sequence 1, 1, 2, 3, 5, 8, 13, ... What is the 11th term?",
          choices: ["A. 55", "B. 72", "C. 89", "D. 100", "E. 144"],
          answer: 2
        },
        {
          text: "Given the sequence 7, 11, 15, 19, ..., which term equals 75?",
          choices: ["A. 15th", "B. 16th", "C. 17th", "D. 18th", "E. 19th"],
          answer: 3
        },
        {
          text: "A sequence has nth term = n³ − n². What is the 4th term?",
          choices: ["A. 40", "B. 42", "C. 44", "D. 48", "E. 52"],
          answer: 3
        },
        {
          text: "The first three terms of a geometric sequence are 5, 15, 45. What is the sum of the first 4 terms?",
          choices: ["A. 155", "B. 165", "C. 175", "D. 185", "E. 200"],
          answer: 4
        },
        {
          text: "In the sequence 2, 5, 10, 17, 26, 37, ... each term equals n² + 1. What is the 8th term?",
          choices: ["A. 60", "B. 63", "C. 65", "D. 70", "E. 75"],
          answer: 2
        },
        {
          text: "A sequence starts: 81, 27, 9, 3, 1, ... What is the next term?",
          choices: ["A. 1/9", "B. 1/6", "C. 1/4", "D. 1/3", "E. 0"],
          answer: 3
        },
        {
          text: "The 5th term of an arithmetic sequence is 20 and the 9th term is 36. What is the 13th term?",
          choices: ["A. 48", "B. 50", "C. 52", "D. 54", "E. 56"],
          answer: 2
        },
        {
          text: "The sequence 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ... What is the ratio of the 12th term to the 11th term? Choose the closest answer.",
          choices: ["A. 1.5", "B. 1.6", "C. 1.7", "D. 1.8", "E. 2.0"],
          answer: 1
        }
      ]
    },

    "4.2": {
      title: "4.2 Visual & Geometric Patterns",
      questions: [
        {
          text: "How many toothpicks are needed to make a row of 5 squares (each sharing one side with the next)?",
          choices: ["A. 14", "B. 15", "C. 16", "D. 17", "E. 20"],
          answer: 2
        },
        {
          text: "Triangles are built from matchsticks: 1 triangle = 3 sticks, 2 triangles = 5 sticks, 3 = 7 sticks. How many sticks for 10 triangles?",
          choices: ["A. 19", "B. 21", "C. 23", "D. 25", "E. 27"],
          answer: 1
        },
        {
          text: "The number of dots in pattern n is n². Pattern 1: 1 dot, Pattern 2: 4 dots, Pattern 3: 9 dots. How many dots in pattern 7?",
          choices: ["A. 36", "B. 42", "C. 49", "D. 56", "E. 64"],
          answer: 2
        },
        {
          text: "A pattern alternates: big circle, small circle, big square, small square, big circle, ... What is the 13th shape?",
          choices: ["A. big circle", "B. small circle", "C. big square", "D. small square", "E. big triangle"],
          answer: 0
        },
        {
          text: "Staircase pattern: step 1 has 1 block, step 2 has 3 blocks, step 3 has 6 blocks. How many blocks in step 5?",
          choices: ["A. 10", "B. 12", "C. 15", "D. 18", "E. 21"],
          answer: 2
        },
        {
          text: "Squares are built from matchsticks: 1 square = 4 sticks, 2 squares = 7 sticks, 3 squares = 10 sticks. How many sticks are needed for 8 squares in a row?",
          choices: ["A. 22", "B. 23", "C. 24", "D. 25", "E. 26"],
          answer: 3
        },
        {
          text: "A pattern of hexagons grows: pattern 1 has 1 hexagon, pattern 2 has 7, pattern 3 has 19. How many hexagons are in pattern 4?",
          choices: ["A. 31", "B. 33", "C. 35", "D. 37", "E. 39"],
          answer: 3
        },
        {
          text: "Equilateral triangles are arranged in a row (point-up and point-down alternating). Pattern 1: 1 triangle (3 sticks). Pattern 2: 2 triangles (5 sticks). Pattern 3: 3 triangles (7 sticks). How many sticks for pattern 15?",
          choices: ["A. 29", "B. 31", "C. 33", "D. 35", "E. 37"],
          answer: 1
        },
        {
          text: "A cross-shaped pattern grows: pattern 1 has 1 square, pattern 2 has 5, pattern 3 has 9. How many squares in pattern 10?",
          choices: ["A. 37", "B. 38", "C. 39", "D. 40", "E. 41"],
          answer: 0
        },
        {
          text: "The perimeter of a pattern of squares in a row: 1 square has perimeter 4, 2 squares have perimeter 6, 3 squares have perimeter 8. What is the perimeter of 12 squares in a row?",
          choices: ["A. 24", "B. 26", "C. 28", "D. 30", "E. 32"],
          answer: 1
        },
        {
          text: "A dot pattern forms L-shapes: L₁ has 2 dots, L₂ has 5 dots, L₃ has 9 dots, L₄ has 14 dots. How many dots in L₆?",
          choices: ["A. 22", "B. 25", "C. 26", "D. 27", "E. 30"],
          answer: 3
        },
        {
          text: "A repeating color pattern goes: red, blue, green, yellow, red, blue, green, yellow, ... What color is the 38th item?",
          choices: ["A. red", "B. blue", "C. green", "D. yellow", "E. white"],
          answer: 1
        },
        {
          text: "In a growing triangle pattern, row 1 has 1 dot, row 2 has 2 dots, ..., row n has n dots. How many dots are in the first 8 rows total?",
          choices: ["A. 28", "B. 32", "C. 36", "D. 40", "E. 45"],
          answer: 2
        },
        {
          text: "A pattern of squares in an L-shape: step 1 has 2 squares, step 2 has 5 squares, step 3 has 10 squares. How many squares in step 5?",
          choices: ["A. 17", "B. 19", "C. 20", "D. 22", "E. 26"],
          answer: 4
        },
        {
          text: "Hexagons are built from matchsticks: 1 hexagon uses 6 sticks. Two hexagons sharing one side use 11 sticks. Three sharing sides use 16 sticks. How many sticks for 7 hexagons in a row?",
          choices: ["A. 36", "B. 38", "C. 40", "D. 41", "E. 42"],
          answer: 0
        },
        {
          text: "A pattern alternates: triangle, circle, triangle, triangle, circle, triangle, triangle, triangle, circle, ... (after each circle, one more triangle is added). What is the 20th shape?",
          choices: ["A. triangle", "B. circle", "C. square", "D. triangle", "E. pentagon"],
          answer: 1
        },
        {
          text: "How many unit squares are in an n-step staircase where each step is 1 unit wide and 1 unit tall? For step 6, the total is:",
          choices: ["A. 18", "B. 19", "C. 20", "D. 21", "E. 22"],
          answer: 3
        },
        {
          text: "A growing square pattern: pattern 1 is a 1×1 square (1 small square), pattern 2 is a 3×3 square with a 1×1 hole (8 small squares), pattern 3 is a 5×5 with a 3×3 hole (16 small squares). How many small squares in pattern 5?",
          choices: ["A. 24", "B. 28", "C. 30", "D. 32", "E. 36"],
          answer: 3
        },
        {
          text: "The number of line segments added at each step in a pattern goes: 4, 3, 3, 3, ... starting from step 1 (a single square). How many total segments after 10 squares in a row?",
          choices: ["A. 30", "B. 31", "C. 32", "D. 33", "E. 34"],
          answer: 1
        },
        {
          text: "In a growing diamond dot pattern: pattern 1 has 1 dot, pattern 2 has 5 dots, pattern 3 has 13 dots, pattern 4 has 25 dots. How many dots in pattern 5?",
          choices: ["A. 35", "B. 37", "C. 39", "D. 41", "E. 43"],
          answer: 3
        },
        {
          text: "Pentagons are built from matchsticks in a row sharing sides: 1 pentagon = 5 sticks, 2 pentagons = 9 sticks, 3 pentagons = 13 sticks. How many sticks for 6 pentagons in a row?",
          choices: ["A. 25", "B. 27", "C. 29", "D. 31", "E. 33"],
          answer: 0
        },
        {
          text: "A pattern of dots forms a plus sign (+). Pattern 1: 1 dot. Pattern 2: 5 dots. Pattern 3: 9 dots. Pattern 4: 13 dots. How many dots in pattern 7?",
          choices: ["A. 21", "B. 23", "C. 25", "D. 27", "E. 29"],
          answer: 2
        },
        {
          text: "A 4-color rotating pattern (red, green, blue, yellow) is applied to squares in order. Which color is the 57th square?",
          choices: ["A. red", "B. green", "C. blue", "D. yellow", "E. white"],
          answer: 0
        },
        {
          text: "A growing grid pattern: a 1×1 grid has 4 dots at corners, a 2×2 grid has 9 dots, a 3×3 grid has 16 dots. How many dots in a 7×7 grid?",
          choices: ["A. 49", "B. 56", "C. 64", "D. 72", "E. 81"],
          answer: 2
        },
        {
          text: "A zigzag pattern of triangles: pointing up, pointing down, pointing up, ... Each uses 2 new sticks (they share one side). Starting with 3 sticks for the first triangle, how many sticks for 12 triangles?",
          choices: ["A. 25", "B. 24", "C. 26", "D. 23", "E. 27"],
          answer: 0
        },
        {
          text: "In the pattern 1, 3, 6, 10, 15, 21, ... (triangular numbers), how many dots are added going from pattern 7 to pattern 8?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 2
        },
        {
          text: "A shape sequence: square (4 sides), pentagon (5 sides), hexagon (6 sides), heptagon (7 sides), ... What is the total number of sides of the first 6 shapes in this sequence?",
          choices: ["A. 36", "B. 39", "C. 42", "D. 45", "E. 48"],
          answer: 1
        },
        {
          text: "A pattern builds rectangles: step 1 is 1×2 (2 squares), step 2 is 2×3 (6 squares), step 3 is 3×4 (12 squares). How many unit squares in step 6?",
          choices: ["A. 36", "B. 40", "C. 42", "D. 48", "E. 56"],
          answer: 2
        },
        {
          text: "The perimeter of the nth step in a staircase pattern (made of unit squares, step n is n units wide and n units tall) is: P₁=4, P₂=8, P₃=12. What is P₈?",
          choices: ["A. 28", "B. 30", "C. 32", "D. 34", "E. 36"],
          answer: 2
        },
        {
          text: "A pattern of circles: row 1 has 1 circle, row 2 has 2 circles, ..., row n has n circles. Each circle is 1 cm in diameter. What is the total number of circles in rows 1 through 10?",
          choices: ["A. 45", "B. 50", "C. 55", "D. 60", "E. 65"],
          answer: 2
        },
        {
          text: "A matchstick pattern forms H-shapes in a row: 1 H-shape uses 7 sticks, 2 in a row use 13 sticks, 3 in a row use 19 sticks. How many sticks for 5 H-shapes in a row?",
          choices: ["A. 28", "B. 30", "C. 31", "D. 32", "E. 37"],
          answer: 2
        },
        {
          text: "Pattern n consists of n rows where row k has 2k − 1 dots. How many dots total in pattern 5?",
          choices: ["A. 20", "B. 22", "C. 25", "D. 30", "E. 35"],
          answer: 2
        },
        {
          text: "A growing pattern of squares: first ring = 1 square, second ring = 8 squares around it, third ring = 16 squares. How many squares in the 4th ring?",
          choices: ["A. 20", "B. 22", "C. 24", "D. 26", "E. 28"],
          answer: 2
        },
        {
          text: "An alternating pattern of shapes repeats every 5: star, moon, sun, cloud, heart, star, moon, ... What is the 43rd shape?",
          choices: ["A. star", "B. moon", "C. sun", "D. cloud", "E. heart"],
          answer: 2
        },
        {
          text: "Toothpick pattern: row of n pentagons sharing sides. Formula: sticks = 4n + 1. How many sticks for 9 pentagons?",
          choices: ["A. 36", "B. 37", "C. 38", "D. 39", "E. 40"],
          answer: 1
        },
        {
          text: "Pattern of dots arranged in a growing diamond shape (rotated square): pattern 1 = 1, pattern 2 = 5, pattern 3 = 13, pattern 4 = 25. The formula is 2n² − 2n + 1. What is pattern 6?",
          choices: ["A. 57", "B. 61", "C. 65", "D. 69", "E. 73"],
          answer: 1
        },
        {
          text: "In a grid pattern, the number of unit squares in an n × (n+1) rectangle grows as: 2, 6, 12, 20, 30, ... What is the 7th term?",
          choices: ["A. 42", "B. 48", "C. 54", "D. 56", "E. 64"],
          answer: 3
        },
        {
          text: "A growing symmetrical cross: pattern 1 = 5 squares, pattern 2 = 13 squares, pattern 3 = 25 squares. What is the pattern formula? How many squares in pattern 4?",
          choices: ["A. 35", "B. 37", "C. 39", "D. 41", "E. 45"],
          answer: 3
        },
        {
          text: "The number of edges in a growing line of n cubes placed edge-to-edge (sharing faces) follows a pattern. For 1 cube = 12 edges visible, 2 cubes = 20 edges, 3 cubes = 28. How many edges for 6 cubes in a line?",
          choices: ["A. 50", "B. 52", "C. 54", "D. 56", "E. 60"],
          answer: 1
        },
        {
          text: "In a pattern, the number of squares added at each step is: 1, 3, 5, 7, 9, ... (odd numbers). Starting with 0, after 7 steps the total number of squares is:",
          choices: ["A. 36", "B. 42", "C. 49", "D. 56", "E. 64"],
          answer: 2
        },
        {
          text: "A tiling pattern uses L-trominos (L-shaped pieces made of 3 squares). A 2×2 board with one corner removed needs 1 tromino. A 4×4 board with one corner removed needs how many trominos?",
          choices: ["A. 4", "B. 5", "C. 7", "D. 9", "E. 16"],
          answer: 1
        },
        {
          text: "A growing spiral of squares: 1, 1, 2, 3, 5, 8, 13, 21 (Fibonacci side lengths). The area of the spiral after 6 squares is the sum of 1² + 1² + 2² + 3² + 5² + 8². What is that sum?",
          choices: ["A. 96", "B. 100", "C. 104", "D. 108", "E. 116"],
          answer: 2
        },
        {
          text: "A pattern of dots: every step, one more row and one more column of dots is added. Step 1: 1 dot. Step 2: 4 dots. Step 3: 9 dots. Step 4: 16 dots. How many NEW dots are added at step 6 compared to step 5?",
          choices: ["A. 9", "B. 10", "C. 11", "D. 12", "E. 13"],
          answer: 2
        },
        {
          text: "A pattern of isoceles triangles: for each step n, the base is n units and height is n units. The triangle is divided into n² small triangles. How many small triangles in step 5?",
          choices: ["A. 16", "B. 20", "C. 24", "D. 25", "E. 36"],
          answer: 3
        },
        {
          text: "A sequence of shapes: each step adds one square to the top-right of the previous shape. Step 1: 1 square. Step 2: 2 squares (one above). Step 3: 3 squares (stairstep). The perimeter of step n is 2n + 2. What is the perimeter at step 9?",
          choices: ["A. 18", "B. 20", "C. 22", "D. 24", "E. 26"],
          answer: 1
        },
        {
          text: "A growing hexagon ring pattern: ring 1 (center only) = 1 hexagon, ring 2 = 7 hexagons total, ring 3 = 19 hexagons total, ring 4 = 37 hexagons total. How many hexagons are in ring 5 (the 5th ring added)?",
          choices: ["A. 24", "B. 28", "C. 30", "D. 36", "E. 40"],
          answer: 0
        },
        {
          text: "In a checkerboard pattern on an 8×8 board, there are 32 black and 32 white squares. If you remove two opposite-color corner squares, the remaining 62 squares can be covered by dominoes (1×2 pieces). How many dominoes are needed?",
          choices: ["A. 28", "B. 29", "C. 30", "D. 31", "E. 32"],
          answer: 3
        },
        {
          text: "A triangle is divided into rows of small triangles: row 1 has 1, row 2 has 3, row 3 has 5, row 4 has 7. If a large triangle has 6 rows, how many small triangles are there in total?",
          choices: ["A. 30", "B. 33", "C. 35", "D. 36", "E. 42"],
          answer: 3
        },
        {
          text: "A pattern of squares grows as a frame: pattern 1 = 1 square, pattern 2 = 8 squares (3×3 minus 1×1 center), pattern 3 = 16 squares (5×5 minus 3×3 center). How many squares in pattern 4?",
          choices: ["A. 20", "B. 22", "C. 24", "D. 26", "E. 28"],
          answer: 2
        },
        {
          text: "Each step of a growing pattern adds squares on all four sides of the previous step: step 1 = 1 square, step 2 = 5 squares, step 3 = 13 squares, step 4 = 25 squares. How many squares are added from step 4 to step 5?",
          choices: ["A. 12", "B. 14", "C. 16", "D. 18", "E. 20"],
          answer: 2
        }
      ]
    },

    "4.3": {
      title: "4.3 Transformation & Folding Patterns",
      questions: [
        {
          text: "A square sheet is folded in half twice, then a hole is punched. When unfolded, how many holes appear?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 8"],
          answer: 3
        },
        {
          text: "A net of a cube has 6 squares. Which of these cannot be a net of a cube? (A: T-shape, B: cross, C: zigzag with 6 squares in an S, D: L-shape with extra square, E: all can be nets)",
          choices: ["A. T-shape", "B. Cross", "C. S-zigzag of 6", "D. L-shape", "E. All can be nets"],
          answer: 4
        },
        {
          text: "A 4×4 grid is folded in half vertically. A 2×2 square is cut from the top-right. When unfolded, what do you see?",
          choices: ["A. One 2×2 cut on right side", "B. Two 2×2 cuts at top", "C. A 2×4 cut at right", "D. Two 2×2 cuts on both sides", "E. No visible cut"],
          answer: 3
        },
        {
          text: "When a shape is reflected across the y-axis and the x-axis (in that order), the result is equivalent to a rotation of:",
          choices: ["A. 45°", "B. 90°", "C. 135°", "D. 180°", "E. 270°"],
          answer: 3
        },
        {
          text: "A strip of paper is folded 3 times. How many layers does it have?",
          choices: ["A. 3", "B. 6", "C. 8", "D. 9", "E. 12"],
          answer: 2
        },
        {
          text: "A rectangular sheet of paper is folded once along its vertical midline. A hole is punched through the middle of the left half. When unfolded, how many holes are there and where are they?",
          choices: ["A. 1 hole on the left", "B. 2 holes, one on each side, symmetric", "C. 2 holes, both on the left", "D. 4 holes in the center", "E. 1 hole in the center"],
          answer: 1
        },
        {
          text: "A square is rotated 90° clockwise. Which transformation produces the same result as rotating 90° clockwise three more times?",
          choices: ["A. A rotation of 270° counterclockwise", "B. No transformation (identity)", "C. A reflection across the horizontal axis", "D. A rotation of 180°", "E. A reflection across the diagonal"],
          answer: 1
        },
        {
          text: "How many lines of symmetry does a regular hexagon have?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 8"],
          answer: 3
        },
        {
          text: "A point at coordinates (3, −2) is reflected across the x-axis. What are the new coordinates?",
          choices: ["A. (−3, −2)", "B. (−3, 2)", "C. (3, 2)", "D. (2, 3)", "E. (−2, 3)"],
          answer: 2
        },
        {
          text: "A shape is translated 4 units right and 3 units down. A vertex was at (1, 5). Where is it now?",
          choices: ["A. (5, 8)", "B. (5, 2)", "C. (−3, 2)", "D. (4, 3)", "E. (−3, 8)"],
          answer: 1
        },
        {
          text: "A square sheet is folded once diagonally. A corner is cut off at the fold. When unfolded, what shape is the hole?",
          choices: ["A. Triangle", "B. Square", "C. Diamond (rhombus)", "D. Pentagon", "E. Hexagon"],
          answer: 1
        },
        {
          text: "A figure is reflected across the y-axis. If a vertex was at (−4, 3), where does it go?",
          choices: ["A. (4, −3)", "B. (4, 3)", "C. (−4, −3)", "D. (3, −4)", "E. (−3, 4)"],
          answer: 1
        },
        {
          text: "A cube net consists of 6 squares. Which arrangement of 6 squares CANNOT fold into a cube?",
          choices: ["A. A 1×4 strip with one square on each of the 2nd square's sides", "B. A 2×3 rectangle", "C. A 1×6 straight strip", "D. An L-shape of 4 with 2 extra", "E. A cross (plus sign)"],
          answer: 2
        },
        {
          text: "A strip of paper is folded in half 4 times. How many layers does it have?",
          choices: ["A. 8", "B. 12", "C. 14", "D. 16", "E. 32"],
          answer: 3
        },
        {
          text: "A point P is at (2, 3). It is rotated 90° clockwise about the origin. What are the new coordinates?",
          choices: ["A. (−3, 2)", "B. (3, −2)", "C. (−2, −3)", "D. (3, 2)", "E. (2, −3)"],
          answer: 1
        },
        {
          text: "A square has 4 lines of symmetry. A rectangle (non-square) has how many?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 4"],
          answer: 2
        },
        {
          text: "A shape is reflected across the line y = x. A vertex at (3, 7) moves to:",
          choices: ["A. (−3, −7)", "B. (7, 3)", "C. (3, −7)", "D. (−7, −3)", "E. (−3, 7)"],
          answer: 1
        },
        {
          text: "How many lines of symmetry does an equilateral triangle have?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 6"],
          answer: 2
        },
        {
          text: "A figure is first rotated 90° counterclockwise, then reflected across the x-axis. The combined transformation is equivalent to:",
          choices: ["A. Rotation of 90° clockwise", "B. Rotation of 180°", "C. Reflection across the y-axis", "D. Reflection across y = x", "E. Rotation of 270° counterclockwise"],
          answer: 0
        },
        {
          text: "A rectangular piece of paper is folded in half horizontally, then in half vertically. A hole is punched in the center of the folded piece. When fully unfolded, how many holes are there?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 8"],
          answer: 3
        },
        {
          text: "Which of the following shapes can tile the plane (tessellate) by itself without gaps or overlaps?",
          choices: ["A. Regular pentagon", "B. Regular octagon", "C. Equilateral triangle", "D. Regular heptagon", "E. Circle"],
          answer: 2
        },
        {
          text: "A shape is translated 3 units left and 5 units up. Which single vector describes this translation?",
          choices: ["A. (3, 5)", "B. (−3, 5)", "C. (3, −5)", "D. (−3, −5)", "E. (5, −3)"],
          answer: 1
        },
        {
          text: "A cube is viewed from directly above. What shape do you see?",
          choices: ["A. Triangle", "B. Rectangle", "C. Hexagon", "D. Square", "E. Circle"],
          answer: 3
        },
        {
          text: "A square sheet of paper is folded along one diagonal. A semicircle is cut from the fold edge. When unfolded, what is the shape of the cut-out?",
          choices: ["A. Semicircle", "B. Circle", "C. Oval", "D. Two semicircles", "E. Heart shape"],
          answer: 1
        },
        {
          text: "Point A is at (5, 2). It is rotated 180° about the origin. Where does it end up?",
          choices: ["A. (−5, 2)", "B. (5, −2)", "C. (−2, −5)", "D. (−5, −2)", "E. (2, −5)"],
          answer: 3
        },
        {
          text: "A regular square has a vertex at (1, 0), (0, 1), (−1, 0), (0, −1). How many lines of symmetry does it have?",
          choices: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 8"],
          answer: 2
        },
        {
          text: "A paper is folded in half, then folded in half again in the same direction. A triangular notch is cut from the middle of the folded edge. When fully unfolded, how many triangular notches appear?",
          choices: ["A. 1", "B. 2", "C. 4", "D. 8", "E. 3"],
          answer: 2
        },
        {
          text: "Which of the following is NOT a valid net of a tetrahedron (4 equilateral triangles)?",
          choices: ["A. Four triangles in a row", "B. One triangle with three triangles attached to each side", "C. Two triangles side by side with two more attached to their outer sides", "D. A 2×2 square arrangement of triangles", "E. A strip of 3 with one off the side of the 2nd"],
          answer: 3
        },
        {
          text: "A figure at position (x, y) is reflected across the line x = 3. The image is at:",
          choices: ["A. (6 − x, y)", "B. (x − 3, y)", "C. (x, 6 − y)", "D. (3 − x, y)", "E. (x + 3, y)"],
          answer: 0
        },
        {
          text: "A square piece of paper is folded once to the right (right half over left half). A rectangular strip is cut from the right side. When unfolded, what do you see?",
          choices: ["A. One rectangular notch on the right", "B. Two rectangular notches, one on each side", "C. A rectangular hole in the center", "D. Two notches on the left side", "E. One notch on the left"],
          answer: 1
        },
        {
          text: "How many lines of symmetry does a regular pentagon have?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 10"],
          answer: 2
        },
        {
          text: "A shape is reflected across the x-axis and then across the y-axis. This is equivalent to a rotation of how many degrees about the origin?",
          choices: ["A. 90°", "B. 120°", "C. 180°", "D. 270°", "E. 360°"],
          answer: 2
        },
        {
          text: "What does a cylinder look like when viewed from the side (from exactly the side, not top or bottom)?",
          choices: ["A. Circle", "B. Triangle", "C. Rectangle", "D. Ellipse", "E. Square"],
          answer: 2
        },
        {
          text: "A triangular prism is viewed from the front (rectangular face facing you). What shape do you see?",
          choices: ["A. Triangle", "B. Square", "C. Rectangle", "D. Pentagon", "E. Hexagon"],
          answer: 2
        },
        {
          text: "A shape at (2, 4) is rotated 270° clockwise about the origin. What are the new coordinates?",
          choices: ["A. (−4, 2)", "B. (4, −2)", "C. (−2, −4)", "D. (4, 2)", "E. (−4, −2)"],
          answer: 0
        },
        {
          text: "A square is rotated 45° and then scaled up. Which property is preserved?",
          choices: ["A. Position", "B. Size (area)", "C. Shape (angles)", "D. Orientation", "E. Both B and C"],
          answer: 2
        },
        {
          text: "Which shapes can tessellate the plane? I. Squares II. Regular hexagons III. Regular pentagons",
          choices: ["A. I only", "B. II only", "C. I and II only", "D. I and III only", "E. I, II, and III"],
          answer: 2
        },
        {
          text: "A rectangular sheet is folded in thirds (into 3 equal layers). A hole is punched through all layers in the center. When unfolded, how many holes are there?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. 6"],
          answer: 2
        },
        {
          text: "A figure consists of two overlapping reflections of the letter 'L'. The combined figure has how many lines of symmetry?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 4"],
          answer: 1
        },
        {
          text: "A shape is reflected across the y-axis and then translated 3 units to the right. If a vertex starts at (−2, 5), where does it end up?",
          choices: ["A. (−1, 5)", "B. (1, 5)", "C. (5, 5)", "D. (−5, 5)", "E. (2, 5)"],
          answer: 2
        },
        {
          text: "How many lines of symmetry does the letter 'H' have?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 4"],
          answer: 2
        },
        {
          text: "A cone is viewed from directly above (from the tip looking down). What shape do you see?",
          choices: ["A. Triangle", "B. Circle inside a circle", "C. Circle", "D. Oval", "E. Square"],
          answer: 2
        },
        {
          text: "A sheet of paper is folded in half, and then a corner is snipped off at the fold corner. When unfolded, how many corners are removed from the original sheet?",
          choices: ["A. 1", "B. 2", "C. 3", "D. 4", "E. Depends on which corner"],
          answer: 1
        },
        {
          text: "Two reflections across parallel lines that are 5 cm apart result in a translation of:",
          choices: ["A. 5 cm", "B. 10 cm", "C. 15 cm", "D. 2.5 cm", "E. 20 cm"],
          answer: 1
        },
        {
          text: "A square has vertices at (0,0), (2,0), (2,2), (0,2). After a 90° counterclockwise rotation about its center (1,1), the vertex (2,0) moves to:",
          choices: ["A. (2, 2)", "B. (0, 2)", "C. (0, 0)", "D. (2, 0)", "E. (1, 1)"],
          answer: 0
        },
        {
          text: "How many lines of symmetry does a rhombus (non-square) have?",
          choices: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 4"],
          answer: 2
        },
        {
          text: "A square piece of paper is folded along the vertical midline (right over left), then along the horizontal midline (bottom over top). A hole is punched in the top-left corner of the folded piece. When fully unfolded, where are the holes?",
          choices: ["A. One hole in the top-left", "B. Two holes at top corners", "C. Four holes, one in each corner", "D. Two holes at left corners", "E. One hole in the center"],
          answer: 2
        },
        {
          text: "A point is rotated 90° clockwise about the point (1, 1) instead of the origin. If the original point is at (3, 1), where does it move?",
          choices: ["A. (1, −1)", "B. (1, 3)", "C. (3, −1)", "D. (−1, 1)", "E. (3, 3)"],
          answer: 0
        },
        {
          text: "Which of the following regular polygons can tessellate the plane on their own?",
          choices: ["A. Regular pentagon only", "B. Regular octagon only", "C. Square and equilateral triangle only", "D. Square, equilateral triangle, and regular hexagon", "E. All regular polygons"],
          answer: 3
        },
        {
          text: "A figure is translated 2 right, then reflected across the y-axis, then translated 2 left. The net effect on a point at (x, y) is:",
          choices: ["A. (x, y) — no change", "B. (−x, y)", "C. (−x − 4, y)", "D. (x − 4, y)", "E. (x + 4, y)"],
          answer: 2
        }
      ]
    },

    "5.1": {
      title: "5.1 Systematic Counting & Arrangements",
      questions: [
        {
          text: "How many paths go from A to B in a 4×3 grid (moving only right or down)?",
          choices: ["A. 10", "B. 20", "C. 30", "D. 35", "E. 56"],
          answer: 3
        },
        {
          text: "In how many ways can the letters of 'MATH' be arranged?",
          choices: ["A. 12", "B. 16", "C. 24", "D. 32", "E. 48"],
          answer: 2
        },
        {
          text: "How many integers from 1 to 200 are divisible by 3 but not by 6?",
          choices: ["A. 30", "B. 33", "C. 34", "D. 36", "E. 40"],
          answer: 2
        },
        {
          text: "In a 5-team round-robin tournament (each team plays every other team once), how many total games are played?",
          choices: ["A. 8", "B. 10", "C. 12", "D. 15", "E. 20"],
          answer: 1
        },
        {
          text: "Using the digits 1, 2, 3, 4, 5 each exactly once, how many 5-digit numbers are greater than 30000?",
          choices: ["A. 48", "B. 60", "C. 72", "D. 84", "E. 96"],
          answer: 2
        },
        {
          text: "A student can choose a shirt (3 colors), pants (4 styles), and shoes (2 types). How many different outfits are possible?",
          choices: ["A. 9", "B. 12", "C. 18", "D. 24", "E. 36"],
          answer: 3
        },
        {
          text: "In how many ways can the letters of the word LEVEL be arranged?",
          choices: ["A. 20", "B. 30", "C. 40", "D. 60", "E. 120"],
          answer: 1
        },
        {
          text: "How many paths go from corner A to corner B in a 5×4 grid, moving only right or down?",
          choices: ["A. 20", "B. 28", "C. 35", "D. 56", "E. 70"],
          answer: 2
        },
        {
          text: "How many ways can you choose 3 people from a group of 8 to form a committee?",
          choices: ["A. 24", "B. 36", "C. 42", "D. 56", "E. 84"],
          answer: 3
        },
        {
          text: "In a 6-team round-robin tournament (each team plays every other once), how many games are played?",
          choices: ["A. 12", "B. 15", "C. 18", "D. 21", "E. 30"],
          answer: 1
        },
        {
          text: "How many paths go from corner A to corner B in a 4×4 grid (moving only right or down)?",
          choices: ["A. 6", "B. 16", "C. 24", "D. 56", "E. 70"],
          answer: 3
        },
        {
          text: "In how many ways can 5 people be seated around a circular table?",
          choices: ["A. 12", "B. 20", "C. 24", "D. 48", "E. 120"],
          answer: 2
        },
        {
          text: "How many integers from 1 to 100 are divisible by 4 but NOT by 8?",
          choices: ["A. 10", "B. 12", "C. 13", "D. 15", "E. 25"],
          answer: 2
        },
        {
          text: "Using the digits 1, 2, 3, 4, 5 each at most once, how many 3-digit even numbers can be formed?",
          choices: ["A. 12", "B. 18", "C. 24", "D. 30", "E. 48"],
          answer: 2
        },
        {
          text: "In how many ways can the letters of the word RIVER be arranged?",
          choices: ["A. 30", "B. 48", "C. 60", "D. 90", "E. 120"],
          answer: 2
        },
        {
          text: "How many 4-digit numbers can be formed from the digits {1,2,3,4,5,6} without repetition if the number must be greater than 3000?",
          choices: ["A. 120", "B. 180", "C. 200", "D. 240", "E. 360"],
          answer: 3
        },
        {
          text: "A class of 10 students must choose a president, vice-president, and secretary (all different). How many ways?",
          choices: ["A. 30", "B. 120", "C. 360", "D. 720", "E. 1000"],
          answer: 3
        },
        {
          text: "How many integers from 1 to 300 are divisible by 5 but NOT by 10?",
          choices: ["A. 20", "B. 25", "C. 30", "D. 35", "E. 60"],
          answer: 2
        },
        {
          text: "How many 2-digit numbers can be formed from the digits {1, 3, 5, 7} without repetition?",
          choices: ["A. 8", "B. 10", "C. 12", "D. 14", "E. 16"],
          answer: 2
        },
        {
          text: "In how many ways can 3 boys and 3 girls be arranged in a row so that all 3 boys are together?",
          choices: ["A. 72", "B. 120", "C. 144", "D. 180", "E. 360"],
          answer: 2
        },
        {
          text: "How many 4-digit even numbers can be formed from the digits {1, 2, 3, 4, 5} without repetition?",
          choices: ["A. 24", "B. 36", "C. 42", "D. 48", "E. 72"],
          answer: 3
        },
        {
          text: "In how many ways can 6 people be arranged in a circle?",
          choices: ["A. 24", "B. 60", "C. 120", "D. 240", "E. 720"],
          answer: 2
        },
        {
          text: "How many handshakes occur if 7 people each shake hands with every other person exactly once?",
          choices: ["A. 14", "B. 18", "C. 21", "D. 28", "E. 42"],
          answer: 2
        },
        {
          text: "How many ways can you choose 2 books from a shelf of 10 different books?",
          choices: ["A. 20", "B. 30", "C. 45", "D. 90", "E. 100"],
          answer: 2
        },
        {
          text: "In how many ways can the letters of BANANA be arranged?",
          choices: ["A. 30", "B. 60", "C. 90", "D. 120", "E. 720"],
          answer: 1
        },
        {
          text: "How many 4-digit numbers can be made from {0,1,2,3,4} without repetition (the first digit cannot be 0)?",
          choices: ["A. 48", "B. 72", "C. 96", "D. 120", "E. 144"],
          answer: 2
        },
        {
          text: "In how many ways can the letters of APPLE be arranged?",
          choices: ["A. 30", "B. 48", "C. 60", "D. 90", "E. 120"],
          answer: 2
        },
        {
          text: "How many integers from 1 to 500 are divisible by both 3 and 5?",
          choices: ["A. 25", "B. 30", "C. 33", "D. 40", "E. 50"],
          answer: 2
        },
        {
          text: "How many 3-digit numbers can be formed from the digits {1,2,3,4} if repetition is allowed?",
          choices: ["A. 24", "B. 36", "C. 48", "D. 64", "E. 81"],
          answer: 3
        },
        {
          text: "How many ways can you select a team of 4 from 9 people?",
          choices: ["A. 36", "B. 84", "C. 105", "D. 126", "E. 252"],
          answer: 3
        },
        {
          text: "How many paths go from A to B in a 3×4 grid (moving only right or down, 2 steps right and 3 steps down)?",
          choices: ["A. 6", "B. 8", "C. 10", "D. 12", "E. 15"],
          answer: 2
        },
        {
          text: "How many two-digit multiples of 7 are there?",
          choices: ["A. 11", "B. 12", "C. 13", "D. 14", "E. 15"],
          answer: 2
        },
        {
          text: "In how many ways can 4 different books be arranged on a shelf?",
          choices: ["A. 8", "B. 12", "C. 16", "D. 24", "E. 48"],
          answer: 3
        },
        {
          text: "In how many ways can you choose a president and vice-president from 7 candidates (same person cannot hold both)?",
          choices: ["A. 21", "B. 28", "C. 35", "D. 42", "E. 49"],
          answer: 3
        },
        {
          text: "How many 3-digit numbers can be formed from the digits {2,3,5,7} without repetition?",
          choices: ["A. 12", "B. 18", "C. 24", "D. 36", "E. 64"],
          answer: 2
        },
        {
          text: "How many subsets of size 3 can be chosen from a set of 7 elements?",
          choices: ["A. 21", "B. 28", "C. 35", "D. 42", "E. 56"],
          answer: 2
        },
        {
          text: "A coin is flipped 3 times. In how many outcomes does at least one head appear?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 3
        },
        {
          text: "How many ways can you arrange the letters in the word MATH so that M is always first?",
          choices: ["A. 4", "B. 6", "C. 8", "D. 12", "E. 24"],
          answer: 1
        },
        {
          text: "In a 8-team round-robin tournament, how many games are played in total?",
          choices: ["A. 16", "B. 24", "C. 28", "D. 32", "E. 56"],
          answer: 2
        },
        {
          text: "How many 3-digit numbers have all three digits different and all digits odd?",
          choices: ["A. 24", "B. 36", "C. 48", "D. 60", "E. 120"],
          answer: 3
        },
        {
          text: "How many ways can you choose 2 students from a class of 10 to represent the class?",
          choices: ["A. 20", "B. 36", "C. 45", "D. 55", "E. 90"],
          answer: 2
        },
        {
          text: "How many integers from 100 to 999 have all three digits the same (e.g., 111, 222)?",
          choices: ["A. 7", "B. 8", "C. 9", "D. 10", "E. 11"],
          answer: 2
        },
        {
          text: "How many paths go from corner A to corner B in a 6×4 grid (moving only right or down, 5 right and 3 down)?",
          choices: ["A. 35", "B. 42", "C. 56", "D. 70", "E. 84"],
          answer: 2
        },
        {
          text: "In how many ways can 5 different flags be arranged in a row on a flagpole?",
          choices: ["A. 60", "B. 80", "C. 100", "D. 120", "E. 150"],
          answer: 3
        },
        {
          text: "How many subsets of size 2 can be chosen from a set of 7 elements?",
          choices: ["A. 14", "B. 18", "C. 21", "D. 28", "E. 42"],
          answer: 2
        },
        {
          text: "A number lock has 3 dials, each with digits 0–9. How many combinations are possible?",
          choices: ["A. 30", "B. 100", "C. 729", "D. 1000", "E. 10000"],
          answer: 3
        },
        {
          text: "In how many ways can a student answer a 5-question true/false quiz?",
          choices: ["A. 10", "B. 16", "C. 25", "D. 32", "E. 64"],
          answer: 3
        },
        {
          text: "How many integers from 1 to 200 are divisible by 7?",
          choices: ["A. 26", "B. 27", "C. 28", "D. 29", "E. 30"],
          answer: 2
        },
        {
          text: "How many ways can you pick 1 boy and 1 girl from a group of 4 boys and 5 girls?",
          choices: ["A. 9", "B. 12", "C. 16", "D. 20", "E. 36"],
          answer: 3
        },
        {
          text: "A menu offers 3 starters, 5 mains, and 4 desserts. How many different 3-course meals are possible?",
          choices: ["A. 12", "B. 36", "C. 48", "D. 60", "E. 120"],
          answer: 3
        }
      ]
    },

    "5.2": {
      title: "5.2 Geometric Counting",
      questions: [
        {
          text: "How many triangles are in a figure of a large triangle subdivided into 9 equal smaller triangles (3 per row)?",
          choices: ["A. 9", "B. 10", "C. 12", "D. 13", "E. 18"],
          answer: 3
        },
        {
          text: "How many diagonals does a hexagon have?",
          choices: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"],
          answer: 3
        },
        {
          text: "In a 5×5 grid of unit squares, how many rectangles (including squares) are there in total?",
          choices: ["A. 200", "B. 225", "C. 225", "D. 225", "E. 225"],
          answer: 1
        },
        {
          text: "How many different squares can be found in a 4×4 grid of unit squares?",
          choices: ["A. 16", "B. 20", "C. 24", "D. 30", "E. 36"],
          answer: 3
        },
        {
          text: "Lines are drawn from each vertex of a regular pentagon to every other non-adjacent vertex. How many intersection points are inside the pentagon?",
          choices: ["A. 1", "B. 3", "C. 5", "D. 7", "E. 10"],
          answer: 2
        },
        {
          text: "How many diagonals does an octagon have?",
          choices: ["A. 14", "B. 16", "C. 18", "D. 20", "E. 24"],
          answer: 3
        },
        {
          text: "How many diagonals does a heptagon (7-sided polygon) have?",
          choices: ["A. 10", "B. 12", "C. 14", "D. 16", "E. 18"],
          answer: 2
        },
        {
          text: "How many diagonals does a pentagon have?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 1
        },
        {
          text: "How many diagonals does a decagon (10-sided polygon) have?",
          choices: ["A. 25", "B. 30", "C. 35", "D. 40", "E. 45"],
          answer: 2
        },
        {
          text: "How many different squares (of any size) can be found in a 5×5 grid of unit squares?",
          choices: ["A. 25", "B. 40", "C. 50", "D. 55", "E. 65"],
          answer: 3
        },
        {
          text: "How many different squares (of any size) can be found in a 6×6 grid of unit squares?",
          choices: ["A. 36", "B. 64", "C. 81", "D. 91", "E. 100"],
          answer: 3
        },
        {
          text: "How many different squares (of any size) can be found in a 3×3 grid of unit squares?",
          choices: ["A. 9", "B. 12", "C. 14", "D. 16", "E. 18"],
          answer: 2
        },
        {
          text: "How many different squares (of any size) can be found in a 2×2 grid of unit squares?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 1
        },
        {
          text: "How many rectangles (including squares) are in a 3×3 grid of unit squares?",
          choices: ["A. 25", "B. 30", "C. 36", "D. 42", "E. 48"],
          answer: 2
        },
        {
          text: "How many rectangles (including squares) are in a 4×3 grid of unit squares?",
          choices: ["A. 48", "B. 60", "C. 72", "D. 80", "E. 90"],
          answer: 1
        },
        {
          text: "How many rectangles (including squares) are in a 6×4 grid of unit squares?",
          choices: ["A. 150", "B. 180", "C. 200", "D. 210", "E. 240"],
          answer: 3
        },
        {
          text: "How many triangles (of all sizes) are in a large equilateral triangle subdivided into 9 small equilateral triangles (3 per row)?",
          choices: ["A. 9", "B. 10", "C. 12", "D. 13", "E. 16"],
          answer: 3
        },
        {
          text: "How many triangles (of all sizes) are in a large equilateral triangle subdivided into 16 small equilateral triangles (4 per row)?",
          choices: ["A. 16", "B. 20", "C. 24", "D. 27", "E. 32"],
          answer: 3
        },
        {
          text: "How many triangles (of all sizes) are in a large equilateral triangle subdivided into 25 small equilateral triangles (5 per row)?",
          choices: ["A. 35", "B. 42", "C. 48", "D. 52", "E. 60"],
          answer: 2
        },
        {
          text: "How many line segments can be drawn connecting 6 points on a circle (no three collinear)?",
          choices: ["A. 10", "B. 12", "C. 15", "D. 18", "E. 21"],
          answer: 2
        },
        {
          text: "How many line segments can be drawn connecting 8 points on a circle (no three collinear)?",
          choices: ["A. 16", "B. 21", "C. 24", "D. 28", "E. 36"],
          answer: 3
        },
        {
          text: "What is the maximum number of regions into which 4 straight lines divide a plane (no two parallel, no three concurrent)?",
          choices: ["A. 8", "B. 9", "C. 10", "D. 11", "E. 12"],
          answer: 3
        },
        {
          text: "What is the maximum number of regions into which 5 straight lines divide a plane (no two parallel, no three concurrent)?",
          choices: ["A. 14", "B. 15", "C. 16", "D. 17", "E. 18"],
          answer: 2
        },
        {
          text: "What is the maximum number of regions into which 3 straight lines divide a plane (no two parallel, no three concurrent)?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "How many intersection points can the diagonals of a convex hexagon have inside the hexagon (assuming no three diagonals are concurrent)?",
          choices: ["A. 9", "B. 12", "C. 15", "D. 18", "E. 20"],
          answer: 2
        },
        {
          text: "A 3×2×2 stack of unit cubes is formed. How many unit cubes does it contain?",
          choices: ["A. 7", "B. 10", "C. 12", "D. 14", "E. 16"],
          answer: 2
        },
        {
          text: "A 4×3×2 stack of unit cubes is formed. How many unit cubes does it contain?",
          choices: ["A. 18", "B. 20", "C. 24", "D. 28", "E. 36"],
          answer: 2
        },
        {
          text: "A 2×2×2 cube is built from unit cubes. How many unit cube faces are visible from outside?",
          choices: ["A. 16", "B. 20", "C. 24", "D. 28", "E. 32"],
          answer: 2
        },
        {
          text: "In a 4×4×4 cube built from unit cubes, how many unit cubes are on the surface (not hidden inside)?",
          choices: ["A. 48", "B. 52", "C. 56", "D. 60", "E. 64"],
          answer: 2
        },
        {
          text: "How many squares (of any size) fit in a 3×4 grid of unit squares (including non-unit squares)?",
          choices: ["A. 12", "B. 16", "C. 18", "D. 20", "E. 24"],
          answer: 3
        },
        {
          text: "A regular nonagon (9-sided polygon) has how many diagonals?",
          choices: ["A. 18", "B. 24", "C. 27", "D. 30", "E. 36"],
          answer: 2
        },
        {
          text: "How many triangles are formed by connecting any 3 of 7 points on a circle (no three collinear)?",
          choices: ["A. 21", "B. 28", "C. 35", "D. 42", "E. 56"],
          answer: 2
        },
        {
          text: "In how many ways can you choose 4 vertices of a regular hexagon to form a quadrilateral?",
          choices: ["A. 10", "B. 12", "C. 15", "D. 18", "E. 24"],
          answer: 2
        },
        {
          text: "How many rectangles can be found in a 5×3 grid of unit squares (including squares)?",
          choices: ["A. 60", "B. 75", "C. 90", "D. 105", "E. 120"],
          answer: 2
        },
        {
          text: "In a 4×4 grid of dots (4 rows and 4 columns), how many line segments of length 1 are there (horizontal and vertical)?",
          choices: ["A. 16", "B. 20", "C. 24", "D. 28", "E. 36"],
          answer: 2
        },
        {
          text: "How many triangles can be found in a figure showing a 5-pointed star (pentagram)?",
          choices: ["A. 5", "B. 8", "C. 10", "D. 12", "E. 15"],
          answer: 2
        },
        {
          text: "A 1×1×1 unit cube is painted red on all faces and then cut into 27 unit cubes (3×3×3). How many small cubes have exactly 2 faces painted?",
          choices: ["A. 6", "B. 8", "C. 12", "D. 16", "E. 20"],
          answer: 2
        },
        {
          text: "A 3×3×3 cube is painted on all faces and cut into 27 unit cubes. How many small cubes have NO faces painted?",
          choices: ["A. 0", "B. 1", "C. 3", "D. 6", "E. 8"],
          answer: 1
        },
        {
          text: "A 3×3×3 cube is painted on all faces and cut into 27 unit cubes. How many small cubes have exactly 3 faces painted?",
          choices: ["A. 4", "B. 6", "C. 8", "D. 12", "E. 16"],
          answer: 2
        },
        {
          text: "How many line segments connect any 2 of 10 points (no three collinear)?",
          choices: ["A. 20", "B. 36", "C. 45", "D. 55", "E. 90"],
          answer: 2
        },
        {
          text: "How many triangles can be chosen from 6 points on a circle (no three collinear)?",
          choices: ["A. 10", "B. 15", "C. 20", "D. 25", "E. 30"],
          answer: 2
        },
        {
          text: "What is the maximum number of intersection points when 6 lines are drawn in a plane (no two parallel, no three concurrent)?",
          choices: ["A. 10", "B. 12", "C. 15", "D. 18", "E. 21"],
          answer: 2
        },
        {
          text: "How many unit squares are in a 4×5 grid of unit squares?",
          choices: ["A. 18", "B. 20", "C. 22", "D. 24", "E. 40"],
          answer: 1
        },
        {
          text: "In a 4×4 grid of unit squares, how many rectangles are there that are NOT squares?",
          choices: ["A. 64", "B. 70", "C. 80", "D. 86", "E. 100"],
          answer: 1
        },
        {
          text: "How many different triangles can be formed by choosing 3 vertices of a regular octagon?",
          choices: ["A. 28", "B. 42", "C. 56", "D. 70", "E. 84"],
          answer: 2
        },
        {
          text: "How many parallelograms are in a 4×4 grid of unit squares (axis-aligned, including rectangles and squares)?",
          choices: ["A. 36", "B. 64", "C. 100", "D. 120", "E. 144"],
          answer: 2
        },
        {
          text: "A large triangle is divided into 4 rows of small equilateral triangles (16 small triangles total). How many upward-pointing triangles are there of ALL sizes?",
          choices: ["A. 10", "B. 14", "C. 16", "D. 20", "E. 24"],
          answer: 3
        },
        {
          text: "How many rectangles (including squares) are in a 3×5 grid of unit squares?",
          choices: ["A. 45", "B. 60", "C. 72", "D. 90", "E. 120"],
          answer: 3
        },
        {
          text: "How many line segments of length 1 are there in a 3×3 grid of unit squares (horizontal and vertical segments)?",
          choices: ["A. 18", "B. 20", "C. 24", "D. 28", "E. 36"],
          answer: 2
        },
        {
          text: "How many diagonals does a 12-sided polygon (dodecagon) have?",
          choices: ["A. 36", "B. 48", "C. 54", "D. 60", "E. 72"],
          answer: 2
        }
      ]
    },

    "5.3": {
      title: "5.3 Probability & Chance",
      questions: [
        {
          text: "A bag has 3 red, 4 blue, and 5 green marbles. You pick 2 without replacement. What is the probability both are red?",
          choices: ["A. 1/22", "B. 1/11", "C. 3/22", "D. 1/4", "E. 9/144"],
          answer: 0
        },
        {
          text: "Two dice are rolled. What is the probability the sum is 7?",
          choices: ["A. 1/9", "B. 1/8", "C. 1/7", "D. 1/6", "E. 1/5"],
          answer: 3
        },
        {
          text: "A card is drawn from a standard 52-card deck. What is the probability it is a heart or a king?",
          choices: ["A. 4/13", "B. 16/52", "C. 17/52", "D. 18/52", "E. 1/2"],
          answer: 1
        },
        {
          text: "The probability of rain on any day is 0.3. What is the probability it does NOT rain on two consecutive days?",
          choices: ["A. 0.09", "B. 0.21", "C. 0.49", "D. 0.60", "E. 0.70"],
          answer: 2
        },
        {
          text: "In a class of 30, 18 study French and 12 study Spanish. 6 study both. What is the probability a randomly chosen student studies neither?",
          choices: ["A. 1/5", "B. 1/4", "C. 1/6", "D. 2/15", "E. 1/10"],
          answer: 2
        },
        {
          text: "A spinner has 8 equal sections numbered 1–8. What is the probability of spinning a number greater than 5?",
          choices: ["A. 1/4", "B. 3/8", "C. 1/2", "D. 5/8", "E. 3/4"],
          answer: 1
        },
        {
          text: "Two fair coins are tossed. What is the probability of getting at least one head?",
          choices: ["A. 1/4", "B. 1/2", "C. 3/4", "D. 1", "E. 2/3"],
          answer: 2
        },
        {
          text: "A bag contains 5 blue and 3 red marbles. You pick 2 without replacement. What is the probability both are blue?",
          choices: ["A. 5/14", "B. 25/64", "C. 5/16", "D. 15/56", "E. 10/28"],
          answer: 0
        },
        {
          text: "A fair die is rolled. What is the probability of getting a number greater than 4?",
          choices: ["A. 1/6", "B. 1/4", "C. 1/3", "D. 1/2", "E. 2/3"],
          answer: 2
        },
        {
          text: "Two dice are rolled. What is the probability the sum is less than 4?",
          choices: ["A. 1/18", "B. 1/12", "C. 1/9", "D. 1/6", "E. 1/4"],
          answer: 1
        },
        {
          text: "A bag contains 4 red and 6 blue marbles. Two are drawn without replacement. What is the probability both are the same color?",
          choices: ["A. 1/3", "B. 7/15", "C. 8/15", "D. 2/5", "E. 1/2"],
          answer: 1
        },
        {
          text: "Two dice are rolled. What is the probability of getting at least one 6?",
          choices: ["A. 1/6", "B. 1/3", "C. 5/18", "D. 11/36", "E. 1/4"],
          answer: 3
        },
        {
          text: "A card is drawn from a standard 52-card deck. What is the probability it is an ace?",
          choices: ["A. 1/13", "B. 1/12", "C. 1/10", "D. 4/13", "E. 1/4"],
          answer: 0
        },
        {
          text: "The probability of rain on any given day is 0.4. What is the probability it rains on exactly one of two consecutive days?",
          choices: ["A. 0.16", "B. 0.24", "C. 0.40", "D. 0.48", "E. 0.64"],
          answer: 3
        },
        {
          text: "A bag has 3 red, 2 blue, and 5 green marbles. One marble is chosen. What is the probability it is red given that it is NOT blue?",
          choices: ["A. 3/10", "B. 1/4", "C. 3/8", "D. 1/3", "E. 2/5"],
          answer: 2
        },
        {
          text: "A fair die is rolled. What is the expected value (average) of the outcome?",
          choices: ["A. 2.5", "B. 3", "C. 3.5", "D. 4", "E. 4.5"],
          answer: 2
        },
        {
          text: "A card is drawn at random from a 52-card deck. What is the probability it is a black card or a queen?",
          choices: ["A. 1/2", "B. 4/13", "C. 7/13", "D. 15/26", "E. 8/13"],
          answer: 2
        },
        {
          text: "A fair coin is flipped 3 times. What is the probability of getting exactly 2 heads?",
          choices: ["A. 1/8", "B. 1/4", "C. 3/8", "D. 1/2", "E. 5/8"],
          answer: 2
        },
        {
          text: "A committee of 2 is chosen from 5 boys and 4 girls. What is the probability both are boys?",
          choices: ["A. 5/18", "B. 5/9", "C. 4/9", "D. 10/36", "E. 1/2"],
          answer: 0
        },
        {
          text: "A letter is chosen at random from the word KANGAROO. What is the probability it is a vowel?",
          choices: ["A. 3/8", "B. 1/2", "C. 5/8", "D. 1/4", "E. 3/4"],
          answer: 1
        },
        {
          text: "Two fair dice are rolled. What is the probability the product of the two numbers is even?",
          choices: ["A. 1/4", "B. 1/2", "C. 2/3", "D. 3/4", "E. 5/6"],
          answer: 3
        },
        {
          text: "A bag has 3 red, 4 blue, and 5 green marbles. Two marbles are drawn without replacement. What is the probability both are green?",
          choices: ["A. 5/22", "B. 25/144", "C. 5/12", "D. 2/11", "E. 5/33"],
          answer: 4
        },
        {
          text: "Three fair coins are tossed. What is the probability all three show the same face?",
          choices: ["A. 1/8", "B. 1/4", "C. 3/8", "D. 1/2", "E. 3/4"],
          answer: 1
        },
        {
          text: "A spinner is divided into 4 equal sections labeled 1, 2, 3, 4. What is the expected value of a single spin?",
          choices: ["A. 2", "B. 2.5", "C. 3", "D. 3.5", "E. 4"],
          answer: 1
        },
        {
          text: "A committee of 2 is chosen from 5 boys and 4 girls. What is the probability both are girls?",
          choices: ["A. 1/6", "B. 2/9", "C. 4/18", "D. 1/4", "E. 1/3"],
          answer: 0
        },
        {
          text: "Two dice are rolled. What is the probability the sum equals 8?",
          choices: ["A. 1/9", "B. 5/36", "C. 7/36", "D. 1/6", "E. 2/9"],
          answer: 1
        },
        {
          text: "A fair die is rolled twice. What is the probability of rolling the same number both times?",
          choices: ["A. 1/12", "B. 1/9", "C. 1/6", "D. 1/4", "E. 1/3"],
          answer: 2
        },
        {
          text: "In a class of 40 students, 25 play soccer and 15 swim. 8 do both. What is the probability a student chosen at random does NEITHER?",
          choices: ["A. 1/10", "B. 1/5", "C. 1/4", "D. 2/5", "E. 1/2"],
          answer: 1
        },
        {
          text: "A die is rolled. What is the probability of NOT getting a 2 or 3?",
          choices: ["A. 1/3", "B. 1/2", "C. 2/3", "D. 3/4", "E. 5/6"],
          answer: 2
        },
        {
          text: "A bag has 3 red, 2 blue, and 5 green marbles. One marble is chosen at random. What is the probability it is NOT green?",
          choices: ["A. 1/4", "B. 1/2", "C. 3/10", "D. 1/5", "E. 7/10"],
          answer: 1
        },
        {
          text: "A point is chosen at random inside a 6×6 square. A circle of radius 3 is centered in the square. What is the probability the point is inside the circle?",
          choices: ["A. π/6", "B. π/5", "C. π/4", "D. π/3", "E. π/2"],
          answer: 2
        },
        {
          text: "Two marbles are drawn without replacement from a bag of 3 green and 5 blue marbles. What is the probability of getting NO green marbles?",
          choices: ["A. 5/14", "B. 9/64", "C. 5/16", "D. 5/8", "E. 2/7"],
          answer: 0
        },
        {
          text: "A bag has 4 red and 6 blue marbles. One marble is drawn, its color noted, it is replaced, and a second is drawn. What is the probability both are red?",
          choices: ["A. 4/25", "B. 2/15", "C. 4/10", "D. 1/5", "E. 1/6"],
          answer: 0
        },
        {
          text: "A fair coin is flipped 4 times. What is the probability of getting at least one tail?",
          choices: ["A. 1/16", "B. 3/8", "C. 1/2", "D. 15/16", "E. 7/8"],
          answer: 3
        },
        {
          text: "A card is drawn from a standard 52-card deck. What is the probability it is a red card or an ace?",
          choices: ["A. 14/52", "B. 7/13", "C. 30/52", "D. 15/26", "E. 1/2"],
          answer: 1
        },
        {
          text: "Two fair dice are rolled. What is the probability the sum is greater than 9?",
          choices: ["A. 1/9", "B. 1/8", "C. 5/18", "D. 1/6", "E. 7/36"],
          answer: 3
        },
        {
          text: "The probability of winning a game is 1/5. If you play 3 independent games, what is the probability of losing all three?",
          choices: ["A. 8/125", "B. 27/125", "C. 48/125", "D. 64/125", "E. 12/25"],
          answer: 3
        },
        {
          text: "A bag has 6 red and 4 white marbles. Two are drawn without replacement. What is the probability the first is red and the second is white?",
          choices: ["A. 6/25", "B. 4/15", "C. 3/25", "D. 3/10", "E. 2/9"],
          answer: 1
        },
        {
          text: "A die is rolled. What is the probability of getting a 3 or a 5?",
          choices: ["A. 1/6", "B. 1/4", "C. 1/3", "D. 1/2", "E. 2/3"],
          answer: 2
        },
        {
          text: "In a class of 25, 14 like math and 10 like art. 5 like both. What is the probability a student chosen at random likes math but NOT art?",
          choices: ["A. 9/25", "B. 14/25", "C. 1/5", "D. 3/5", "E. 2/5"],
          answer: 0
        },
        {
          text: "A bag contains 2 red, 3 blue, and 5 yellow marbles. What is the probability of drawing a blue marble?",
          choices: ["A. 1/5", "B. 3/10", "C. 2/5", "D. 1/2", "E. 3/5"],
          answer: 1
        },
        {
          text: "A spinner with sections labeled 1, 2, 3, 4, 5 (equal size) is spun. What is the probability of landing on a prime number?",
          choices: ["A. 1/5", "B. 2/5", "C. 3/5", "D. 4/5", "E. 1/2"],
          answer: 2
        },
        {
          text: "Two dice are rolled. What is the probability the difference between the two numbers is exactly 2?",
          choices: ["A. 1/6", "B. 2/9", "C. 5/18", "D. 7/36", "E. 1/4"],
          answer: 1
        },
        {
          text: "A card is chosen at random from a standard deck. Given that the card is a heart, what is the probability it is also a face card (Jack, Queen, King)?",
          choices: ["A. 1/13", "B. 3/52", "C. 3/13", "D. 1/4", "E. 1/5"],
          answer: 2
        },
        {
          text: "A bag has 5 red and 3 white marbles. Two are drawn without replacement. What is the probability of getting NO red marbles?",
          choices: ["A. 3/28", "B. 9/64", "C. 3/8", "D. 3/56", "E. 6/64"],
          answer: 0
        },
        {
          text: "A fair coin is flipped twice. Given that the first flip is heads, what is the probability the second flip is also heads?",
          choices: ["A. 1/4", "B. 1/3", "C. 1/2", "D. 2/3", "E. 3/4"],
          answer: 2
        },
        {
          text: "A class has 15 boys and 10 girls. One student is chosen at random. What is the probability the student is a girl?",
          choices: ["A. 1/5", "B. 2/5", "C. 1/3", "D. 3/5", "E. 1/2"],
          answer: 1
        },
        {
          text: "Two dice are rolled. What is the probability the sum is an odd number?",
          choices: ["A. 1/4", "B. 5/12", "C. 1/2", "D. 7/12", "E. 3/4"],
          answer: 2
        },
        {
          text: "A bag has 4 red, 3 blue, and 3 green marbles. One is chosen at random. What is the probability it is NOT red?",
          choices: ["A. 2/5", "B. 1/2", "C. 3/5", "D. 7/10", "E. 4/5"],
          answer: 2
        },
        {
          text: "The probability of winning a prize in a game is 0.2. What is the probability of winning at least once in 2 independent games?",
          choices: ["A. 0.04", "B. 0.20", "C. 0.36", "D. 0.40", "E. 0.44"],
          answer: 2
        }
      ]
    },

    "6.1": {
      title: "6.1 Time & Speed Calculations",
      questions: [
        {
          text: "A car travels 240 km in 3 hours. What is its average speed?",
          choices: ["A. 60 km/h", "B. 70 km/h", "C. 75 km/h", "D. 80 km/h", "E. 90 km/h"],
          answer: 3
        },
        {
          text: "A train travels at 90 km/h. How long does it take to travel 315 km?",
          choices: ["A. 2.5 h", "B. 3 h", "C. 3.5 h", "D. 4 h", "E. 4.5 h"],
          answer: 2
        },
        {
          text: "Alice walks at 5 km/h and Bob at 7 km/h. They start at the same point walking in the same direction. How far apart are they after 3 hours?",
          choices: ["A. 4 km", "B. 5 km", "C. 6 km", "D. 7 km", "E. 8 km"],
          answer: 2
        },
        {
          text: "A plane covers 1500 km in 2.5 hours. What is its speed in km per minute?",
          choices: ["A. 8 km/min", "B. 9 km/min", "C. 10 km/min", "D. 11 km/min", "E. 12 km/min"],
          answer: 2
        },
        {
          text: "Two towns are 180 km apart. Car A leaves Town 1 at 60 km/h. Car B leaves Town 2 at 80 km/h towards each other. How many km does Car A travel before they meet?",
          choices: ["A. 75 km", "B. 80 km", "C. 90 km", "D. 100 km", "E. 105 km"],
          answer: 0
        },
        {
          text: "A cyclist rides the first 30 km at 15 km/h and the next 30 km at 10 km/h. What is the average speed for the whole journey?",
          choices: ["A. 10 km/h", "B. 11 km/h", "C. 12 km/h", "D. 12.5 km/h", "E. 13 km/h"],
          answer: 2
        },
        {
          text: "A train 200 m long passes a pole in 10 seconds. What is the speed of the train in km/h?",
          choices: ["A. 60 km/h", "B. 68 km/h", "C. 72 km/h", "D. 75 km/h", "E. 80 km/h"],
          answer: 2
        },
        {
          text: "A train 150 m long travelling at 54 km/h passes a platform. It takes 20 seconds to pass completely. How long is the platform?",
          choices: ["A. 100 m", "B. 120 m", "C. 140 m", "D. 150 m", "E. 160 m"],
          answer: 3
        },
        {
          text: "Two trains start from opposite ends of a 600 km track at the same time. One travels at 80 km/h and the other at 70 km/h. After how many hours do they meet?",
          choices: ["A. 3 h", "B. 4 h", "C. 5 h", "D. 6 h", "E. 7 h"],
          answer: 1
        },
        {
          text: "A pipe can fill a tank in 6 hours. Another pipe can fill the same tank in 4 hours. How long will both pipes together take to fill the tank?",
          choices: ["A. 2 h", "B. 2 h 24 min", "C. 2 h 30 min", "D. 3 h", "E. 5 h"],
          answer: 1
        },
        {
          text: "Pipe A fills a tank in 8 hours, Pipe B drains it in 12 hours. If both are open together, how long to fill the tank from empty?",
          choices: ["A. 16 h", "B. 20 h", "C. 24 h", "D. 28 h", "E. 32 h"],
          answer: 2
        },
        {
          text: "Worker A completes a job in 10 days. Worker B completes the same job in 15 days. Working together, how many days to finish?",
          choices: ["A. 4 days", "B. 5 days", "C. 6 days", "D. 7 days", "E. 8 days"],
          answer: 2
        },
        {
          text: "Two runners run toward each other on a 1 km track. Runner A runs at 4 m/s and Runner B at 6 m/s. How many seconds until they meet?",
          choices: ["A. 80 s", "B. 90 s", "C. 100 s", "D. 110 s", "E. 120 s"],
          answer: 2
        },
        {
          text: "A clock shows 3:00. How many minutes until the minute hand and hour hand are exactly together again?",
          choices: ["A. 15 min", "B. 16 min", "C. 16 min 21.8 s", "D. 17 min", "E. 18 min"],
          answer: 2
        },
        {
          text: "Maria leaves home at 8:15 AM and arrives at school at 8:48 AM. How long is her commute?",
          choices: ["A. 28 min", "B. 30 min", "C. 33 min", "D. 35 min", "E. 37 min"],
          answer: 2
        },
        {
          text: "A bus departs at 07:45 and arrives at 11:20. How long is the journey?",
          choices: ["A. 3 h 25 min", "B. 3 h 30 min", "C. 3 h 35 min", "D. 3 h 40 min", "E. 3 h 45 min"],
          answer: 2
        },
        {
          text: "A car travels at 60 km/h for 2 hours, then at 90 km/h for 1 hour. What is the average speed for the entire trip?",
          choices: ["A. 68 km/h", "B. 70 km/h", "C. 72 km/h", "D. 75 km/h", "E. 80 km/h"],
          answer: 1
        },
        {
          text: "Two cyclists start from the same place and ride in opposite directions. One rides at 18 km/h and the other at 22 km/h. How far apart are they after 2.5 hours?",
          choices: ["A. 90 km", "B. 95 km", "C. 100 km", "D. 105 km", "E. 110 km"],
          answer: 2
        },
        {
          text: "A swimmer swims 400 m in 8 minutes. At this rate, how long does it take to swim 1 km?",
          choices: ["A. 18 min", "B. 20 min", "C. 22 min", "D. 24 min", "E. 25 min"],
          answer: 1
        },
        {
          text: "A train 300 m long passes another train 200 m long coming from the opposite direction. The trains travel at 60 km/h and 40 km/h respectively. How many seconds does it take for them to pass each other completely?",
          choices: ["A. 15 s", "B. 18 s", "C. 20 s", "D. 22 s", "E. 25 s"],
          answer: 1
        },
        {
          text: "Peter can paint a fence in 3 hours, and Paul can paint the same fence in 6 hours. Working together, how many minutes does it take them?",
          choices: ["A. 90 min", "B. 100 min", "C. 110 min", "D. 120 min", "E. 180 min"],
          answer: 3
        },
        {
          text: "A car travels from A to B at 60 km/h and returns at 40 km/h. What is the average speed for the round trip?",
          choices: ["A. 46 km/h", "B. 48 km/h", "C. 50 km/h", "D. 52 km/h", "E. 54 km/h"],
          answer: 1
        },
        {
          text: "A tap fills a bath in 12 minutes. The drain empties it in 20 minutes. If both are open at once, how long to fill the bath from empty?",
          choices: ["A. 24 min", "B. 28 min", "C. 30 min", "D. 32 min", "E. 36 min"],
          answer: 2
        },
        {
          text: "A train travels 420 km. For the first 3 hours it averages 80 km/h, then slows to 60 km/h. How long does the rest of the journey take?",
          choices: ["A. 2 h", "B. 2 h 30 min", "C. 3 h", "D. 3 h 30 min", "E. 4 h"],
          answer: 2
        },
        {
          text: "Anna and Ben start from opposite ends of a 240 m corridor and walk toward each other. Anna walks at 1.5 m/s and Ben at 2.5 m/s. How many seconds until they meet?",
          choices: ["A. 48 s", "B. 56 s", "C. 60 s", "D. 64 s", "E. 72 s"],
          answer: 2
        },
        {
          text: "A clock gains 3 minutes every hour. If it shows the correct time at noon, what time does it show when the correct time is 6:00 PM?",
          choices: ["A. 6:15 PM", "B. 6:18 PM", "C. 6:20 PM", "D. 6:21 PM", "E. 6:24 PM"],
          answer: 1
        },
        {
          text: "A lorry leaves Town A at 9:00 AM at 50 km/h. A car leaves Town A at 10:00 AM at 75 km/h in the same direction. At what time does the car overtake the lorry?",
          choices: ["A. 11:00 AM", "B. 11:30 AM", "C. 12:00 PM", "D. 12:30 PM", "E. 1:00 PM"],
          answer: 2
        },
        {
          text: "Three workers A, B, C can finish a task in 4, 6, and 12 days respectively. How many days to finish working together?",
          choices: ["A. 1 day", "B. 2 days", "C. 3 days", "D. 4 days", "E. 5 days"],
          answer: 1
        },
        {
          text: "A runner completes a 10 km race. The first 4 km takes 20 minutes and the remaining 6 km takes 30 minutes. What is the runner's average speed in km/h?",
          choices: ["A. 10 km/h", "B. 11 km/h", "C. 12 km/h", "D. 13 km/h", "E. 14 km/h"],
          answer: 2
        },
        {
          text: "Two trains 180 m and 120 m long travel in the same direction at 72 km/h and 54 km/h. How long does it take the faster train to completely overtake the slower one?",
          choices: ["A. 30 s", "B. 45 s", "C. 54 s", "D. 60 s", "E. 72 s"],
          answer: 3
        },
        {
          text: "A cistern has 3 pipes. Pipe A fills in 4 h, Pipe B fills in 6 h, Pipe C empties in 8 h. All three open together — how long to fill the cistern?",
          choices: ["A. 3 h", "B. 3 h 12 min", "C. 3 h 26 min", "D. 4 h", "E. 4 h 48 min"],
          answer: 2
        },
        {
          text: "A car is driven at 80 km/h for the first half of the journey time and at 120 km/h for the second half of the journey time. What is the average speed?",
          choices: ["A. 95 km/h", "B. 96 km/h", "C. 98 km/h", "D. 100 km/h", "E. 104 km/h"],
          answer: 3
        },
        {
          text: "Two friends, 15 km apart, walk toward each other. One walks at 4 km/h, the other at 6 km/h. They start at the same time. Where does the slower walker meet the faster one (measured from the slower walker's start)?",
          choices: ["A. 5 km", "B. 6 km", "C. 7 km", "D. 8 km", "E. 9 km"],
          answer: 1
        },
        {
          text: "A stopwatch starts at 0. It is read every 90 seconds. How many readings (including the first at 0 seconds) occur in the first 9 minutes?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "Maria cycled 12 km to school in 45 minutes. On the way back she took 1 hour. What was her average speed for the whole trip?",
          choices: ["A. 13.1 km/h", "B. 13.7 km/h", "C. 14.0 km/h", "D. 14.4 km/h", "E. 15.0 km/h"],
          answer: 1
        },
        {
          text: "A train passes a stationary observer in 12 seconds, and passes a 240 m platform in 24 seconds. What is the length of the train?",
          choices: ["A. 120 m", "B. 180 m", "C. 240 m", "D. 300 m", "E. 360 m"],
          answer: 2
        },
        {
          text: "Jan needs 5 days to dig a ditch alone. It would take Karol 4 days alone. They work together for 2 days, then Karol leaves. How many more days does Jan need to finish?",
          choices: ["A. 0.5 days", "B. 1 day", "C. 1.1 days", "D. 1.5 days", "E. 2 days"],
          answer: 0
        },
        {
          text: "A plane flies from City X to City Y (a distance of 2400 km) at 800 km/h with a tailwind of 100 km/h. It returns against the same wind. How much longer is the return trip?",
          choices: ["A. 30 min", "B. 35 min", "C. 40 min", "D. 46 min", "E. 50 min"],
          answer: 3
        },
        {
          text: "How many minutes are there from 11:40 PM to 1:10 AM?",
          choices: ["A. 80 min", "B. 85 min", "C. 90 min", "D. 95 min", "E. 100 min"],
          answer: 2
        },
        {
          text: "A car and a motorcycle travel the same 300 km. The car takes 4 hours; the motorcycle takes 5 hours. How much faster is the car than the motorcycle in km/h?",
          choices: ["A. 10 km/h", "B. 12 km/h", "C. 15 km/h", "D. 18 km/h", "E. 20 km/h"],
          answer: 2
        },
        {
          text: "Worker A does a job in 8 days. After A works 2 days alone, B joins and they finish in 3 more days. How long would B take to do the job alone?",
          choices: ["A. 6 days", "B. 7 days", "C. 8 days", "D. 10 days", "E. 12 days"],
          answer: 2
        },
        {
          text: "An express train covers a distance in 2 hours. A slow train covers the same distance in 3 hours. If the slow train starts 30 minutes before the express, how long after the express departs will it overtake the slow train?",
          choices: ["A. 45 min", "B. 60 min", "C. 75 min", "D. 90 min", "E. 120 min"],
          answer: 1
        },
        {
          text: "At 7:00 AM, how many degrees has the minute hand turned since midnight?",
          choices: ["A. 2100°", "B. 2340°", "C. 2400°", "D. 2520°", "E. 2880°"],
          answer: 3
        },
        {
          text: "A tank has two inlet pipes: Pipe P fills it in 3 hours, Pipe Q fills it in 6 hours. A third outlet Pipe R empties it in 4 hours. All three pipes are open. How long to fill the tank?",
          choices: ["A. 3 h", "B. 4 h", "C. 5 h", "D. 6 h", "E. 12 h"],
          answer: 1
        },
        {
          text: "Lucas travels 60 km by train at 120 km/h, then 15 km by taxi at 30 km/h. What is his average speed for the whole journey?",
          choices: ["A. 60 km/h", "B. 65 km/h", "C. 70 km/h", "D. 75 km/h", "E. 80 km/h"],
          answer: 3
        },
        {
          text: "A team of 6 workers can build a wall in 8 days. How many days would 4 workers take?",
          choices: ["A. 10 days", "B. 11 days", "C. 12 days", "D. 14 days", "E. 16 days"],
          answer: 2
        },
        {
          text: "A bus makes a 180 km trip. It travels the first 90 km in 1.5 h and the second 90 km at 45 km/h. How long is the total journey?",
          choices: ["A. 3 h", "B. 3 h 15 min", "C. 3 h 30 min", "D. 3 h 45 min", "E. 4 h"],
          answer: 2
        },
        {
          text: "Alex runs a 400 m lap. In a race he completes 5 laps in 8 minutes. At the same pace, how long will it take him to run 3 km?",
          choices: ["A. 24 min", "B. 26 min", "C. 28 min", "D. 30 min", "E. 32 min"],
          answer: 0
        },
        {
          text: "A car left the city at 10:00 AM. Another car left the same city at 11:00 AM in the same direction at 1.5 times the first car's speed. At what time will the second car catch the first car?",
          choices: ["A. 12:00 PM", "B. 12:30 PM", "C. 1:00 PM", "D. 1:30 PM", "E. 2:00 PM"],
          answer: 2
        },
        {
          text: "A ship sails from Port A to Port B in 4 days. Another ship sails from Port B to Port A in 6 days. If both sail toward each other simultaneously, after how many days do they meet?",
          choices: ["A. 1.8 days", "B. 2 days", "C. 2.2 days", "D. 2.4 days", "E. 3 days"],
          answer: 3
        }
      ]
    },

    "6.2": {
      title: "6.2 Money & Purchase Problems",
      questions: [
        {
          text: "A jacket costs €120 after a 25% discount. What was the original price?",
          choices: ["A. €140", "B. €150", "C. €160", "D. €170", "E. €180"],
          answer: 2
        },
        {
          text: "Sarah earns €12 per hour. After tax of 20%, what is her take-home pay for 8 hours?",
          choices: ["A. €67.20", "B. €72.00", "C. €76.80", "D. €80.00", "E. €82.40"],
          answer: 2
        },
        {
          text: "A shop offers 'Buy 2, get 1 free' on pencils at €0.50 each. How much do 9 pencils cost?",
          choices: ["A. €3.00", "B. €3.25", "C. €3.50", "D. €3.75", "E. €4.00"],
          answer: 0
        },
        {
          text: "Tom has €50. He wants to buy as many books as possible at €7.99 each. How many can he buy and how much change does he get?",
          choices: ["A. 5 books, €10.05", "B. 6 books, €2.06", "C. 6 books, €0.06", "D. 7 books, none", "E. 5 books, €2.05"],
          answer: 1
        },
        {
          text: "The price of petrol rises 15% and then falls 10%. What is the net change?",
          choices: ["A. +3.5%", "B. +4.0%", "C. +4.5%", "D. +5.0%", "E. +6.0%"],
          answer: 0
        },
        {
          text: "A shopkeeper buys a watch for €80 and sells it for €100. What is the profit percentage?",
          choices: ["A. 15%", "B. 20%", "C. 25%", "D. 30%", "E. 35%"],
          answer: 2
        },
        {
          text: "A book is marked at €45. After a 20% discount, what is the sale price?",
          choices: ["A. €34", "B. €36", "C. €38", "D. €40", "E. €42"],
          answer: 1
        },
        {
          text: "A store sells shirts at €25 each or 3 for €60. What is the saving per shirt when buying 3?",
          choices: ["A. €3", "B. €4", "C. €5", "D. €6", "E. €7"],
          answer: 2
        },
        {
          text: "An item costs €200 plus 15% VAT. What is the total price?",
          choices: ["A. €215", "B. €220", "C. €225", "D. €230", "E. €235"],
          answer: 3
        },
        {
          text: "A phone is sold for €360, which gives the seller a 20% profit. What did the seller pay for it?",
          choices: ["A. €280", "B. €290", "C. €300", "D. €310", "E. €320"],
          answer: 2
        },
        {
          text: "Lucy buys 5 apples at €0.30 each and 3 oranges at €0.50 each. She pays with a €5 note. How much change does she get?",
          choices: ["A. €1.50", "B. €2.00", "C. €2.50", "D. €3.00", "E. €3.50"],
          answer: 1
        },
        {
          text: "A laptop costs €800. It is on sale for 12.5% off. What is the sale price?",
          choices: ["A. €680", "B. €690", "C. €695", "D. €700", "E. €710"],
          answer: 3
        },
        {
          text: "Oliver exchanges €500 to US dollars at a rate of €1 = $1.10. How many dollars does he get?",
          choices: ["A. $520", "B. $540", "C. $550", "D. $560", "E. $580"],
          answer: 2
        },
        {
          text: "A box of 24 chocolates costs €6. A smaller box of 10 costs €2.80. Which is the better value per chocolate, and by how much per chocolate?",
          choices: ["A. Box of 24, by €0.03", "B. Box of 24, by €0.025", "C. Box of 10, by €0.025", "D. They are equal", "E. Box of 10, by €0.03"],
          answer: 0
        },
        {
          text: "A trader marks up goods by 40% and then gives a 20% discount. What is the overall percentage profit or loss?",
          choices: ["A. 8% loss", "B. 4% loss", "C. 12% profit", "D. 12% loss", "E. 8% profit"],
          answer: 2
        },
        {
          text: "Emma buys a bicycle on an installment plan: €50 deposit plus 12 monthly payments of €18. What is the total amount paid?",
          choices: ["A. €256", "B. €266", "C. €276", "D. €286", "E. €296"],
          answer: 1
        },
        {
          text: "A jar of jam costs €2.40 for 400 g or €3.90 for 650 g. Which is cheaper per 100 g?",
          choices: ["A. The 400 g jar, by €0.10", "B. They cost the same per 100 g", "C. The 650 g jar, by €0.06", "D. The 650 g jar, by €0.10", "E. The 400 g jar, by €0.06"],
          answer: 1
        },
        {
          text: "A coat costs €150. The price is reduced by 30% in a sale. A week later the sale price is increased by 20%. What is the final price?",
          choices: ["A. €105", "B. €108", "C. €114", "D. €120", "E. €126"],
          answer: 4
        },
        {
          text: "A market stall sells apples at 4 for €1.00 and pears at 3 for €1.20. How much do 8 apples and 6 pears cost altogether?",
          choices: ["A. €4.20", "B. €4.40", "C. €4.60", "D. €4.80", "E. €5.00"],
          answer: 1
        },
        {
          text: "A shopkeeper bought 200 eggs at €0.08 each and sold them at €0.12 each. What is the total profit?",
          choices: ["A. €6", "B. €7", "C. €8", "D. €9", "E. €10"],
          answer: 2
        },
        {
          text: "A school buys pencils in packs of 12 for €1.80 or individually for €0.18. Which is cheaper and by how much per pencil?",
          choices: ["A. Individual, by €0.03", "B. Pack, by €0.03", "C. They cost the same", "D. Pack, by €0.05", "E. Individual, by €0.05"],
          answer: 1
        },
        {
          text: "A restaurant adds a 10% service charge to the bill. If the service charge is €4.50, what was the original bill?",
          choices: ["A. €40", "B. €42", "C. €44", "D. €45", "E. €48"],
          answer: 3
        },
        {
          text: "A supermarket offers 'Buy 3, get 1 free' on yoghurt costing €0.80 each. How much would 8 yoghurts cost?",
          choices: ["A. €4.40", "B. €4.80", "C. €5.20", "D. €5.60", "E. €6.40"],
          answer: 1
        },
        {
          text: "Pedro earns €1,200 per month. He saves 15% and spends the rest. How much does he spend in 6 months?",
          choices: ["A. €5,940", "B. €6,000", "C. €6,060", "D. €6,120", "E. €6,480"],
          answer: 3
        },
        {
          text: "A jacket originally costs €90. The price is increased by 10%, then decreased by 10%. What is the final price?",
          choices: ["A. €88.90", "B. €89.10", "C. €89.90", "D. €90.00", "E. €90.10"],
          answer: 1
        },
        {
          text: "Flour costs €1.20 per kg. Bread requires 0.75 kg of flour per loaf. If a baker makes 40 loaves, how much does the flour cost?",
          choices: ["A. €34", "B. €35", "C. €36", "D. €37", "E. €38"],
          answer: 2
        },
        {
          text: "A dress is marked up 50% above cost price and then sold at a 25% discount. What is the percentage profit on the cost price?",
          choices: ["A. 10.5%", "B. 11%", "C. 12%", "D. 12.5%", "E. 15%"],
          answer: 3
        },
        {
          text: "One euro is worth 4.5 Polish zloty. How many euros is 360 zloty worth?",
          choices: ["A. €70", "B. €75", "C. €80", "D. €85", "E. €90"],
          answer: 2
        },
        {
          text: "3 kg of coffee beans costs €24. How much will 4.5 kg cost?",
          choices: ["A. €32", "B. €34", "C. €36", "D. €38", "E. €40"],
          answer: 2
        },
        {
          text: "A student buys a scientific calculator for €28 and a ruler for €1.50. The VAT is 20%. What is the total cost including VAT?",
          choices: ["A. €34.60", "B. €35.40", "C. €36.00", "D. €36.60", "E. €37.20"],
          answer: 1
        },
        {
          text: "A sports shop marks up all goods by 60% above cost. During a sale everything is reduced by 25%. What percentage profit does the shop still make?",
          choices: ["A. 15%", "B. 18%", "C. 20%", "D. 22%", "E. 25%"],
          answer: 2
        },
        {
          text: "Two shops sell the same cereal. Shop A: 500 g for €2.50. Shop B: 750 g for €3.60. Which is cheaper per 100 g, and by how much?",
          choices: ["A. Shop A, by €0.02", "B. Shop B, by €0.02", "C. They are the same price", "D. Shop A, by €0.04", "E. Shop B, by €0.04"],
          answer: 1
        },
        {
          text: "A mobile phone is bought for €420 and sold at a loss of 15%. What is the selling price?",
          choices: ["A. €345", "B. €350", "C. €357", "D. €360", "E. €369"],
          answer: 2
        },
        {
          text: "Sophie mixes 2 kg of tea worth €6/kg with 3 kg of tea worth €4/kg. What is the average price per kg of the mixture?",
          choices: ["A. €4.60", "B. €4.80", "C. €5.00", "D. €5.20", "E. €5.40"],
          answer: 1
        },
        {
          text: "A parent buys school supplies: 4 notebooks at €1.50 each, 2 pens at €0.75 each, and 1 folder at €3.20. What is the total cost?",
          choices: ["A. €9.20", "B. €9.70", "C. €10.20", "D. €10.70", "E. €11.20"],
          answer: 3
        },
        {
          text: "A cinema offers child tickets for €6 and adult tickets for €10. A family of 2 adults and 3 children pays how much?",
          choices: ["A. €34", "B. €36", "C. €38", "D. €40", "E. €42"],
          answer: 2
        },
        {
          text: "A trader sells apples at €2 per kg and makes a 25% profit. What did the apples cost the trader per kg?",
          choices: ["A. €1.40", "B. €1.50", "C. €1.60", "D. €1.70", "E. €1.80"],
          answer: 2
        },
        {
          text: "A student has a budget of €30. Sandwiches cost €2.50 each. How many sandwiches can he buy, and how much money will be left over?",
          choices: ["A. 11 sandwiches, €2.00", "B. 12 sandwiches, €0.00", "C. 12 sandwiches, €0.50", "D. 11 sandwiches, €2.50", "E. 10 sandwiches, €5.00"],
          answer: 1
        },
        {
          text: "A clothes shop has a 'second item half price' deal. If one shirt costs €24, how much do 3 shirts cost under this deal?",
          choices: ["A. €54", "B. €57", "C. €60", "D. €63", "E. €66"],
          answer: 2
        },
        {
          text: "Carlos buys €500 of goods and gets a 10% trade discount and then a further 5% cash discount. How much does he pay?",
          choices: ["A. €422.50", "B. €425.00", "C. €427.50", "D. €430.00", "E. €432.50"],
          answer: 2
        },
        {
          text: "A pack of 6 juice boxes costs €3.54. A pack of 4 costs €2.40. Which pack gives better value per box?",
          choices: ["A. Pack of 6, by €0.01", "B. Pack of 4, by €0.01", "C. They are the same", "D. Pack of 6, by €0.02", "E. Pack of 4, by €0.02"],
          answer: 0
        },
        {
          text: "A shopkeeper loses 8% by selling an item for €184. What was the cost price?",
          choices: ["A. €195", "B. €198", "C. €200", "D. €204", "E. €210"],
          answer: 2
        },
        {
          text: "A sale reduces prices by 30%. After the sale, the shop wants to return to the original price. By what percentage must it increase the sale price?",
          choices: ["A. 30%", "B. 37.5%", "C. 40%", "D. 42.9%", "E. 45%"],
          answer: 3
        },
        {
          text: "A supermarket sells milk at €0.90 per litre. If you buy 5 litres or more you get 10% off the total. Eve buys 6 litres. How much does she pay?",
          choices: ["A. €4.68", "B. €4.80", "C. €4.86", "D. €5.04", "E. €5.40"],
          answer: 2
        },
        {
          text: "A fruit seller bought mangoes at 4 for €1 and sold them at 3 for €1. What is the percentage profit?",
          choices: ["A. 25%", "B. 30%", "C. 33%", "D. 33.3%", "E. 40%"],
          answer: 3
        },
        {
          text: "A shop sells juice at €1.20 per bottle. During a promotion, you pay for 4 bottles but get 5. If Lily wants 20 bottles, how much does she pay?",
          choices: ["A. €16.80", "B. €19.20", "C. €20.00", "D. €22.40", "E. €24.00"],
          answer: 1
        },
        {
          text: "A merchant bought 100 articles at €8 each and sold 75 of them at €10 each. The remaining 25 were sold at €6 each. What is the total profit or loss?",
          choices: ["A. €60 profit", "B. €80 profit", "C. €100 profit", "D. €60 loss", "E. No profit or loss"],
          answer: 2
        },
        {
          text: "Emma buys a pair of shoes for €72 after receiving a 10% loyalty discount on top of a 20% sale discount. What was the original price?",
          choices: ["A. €90", "B. €95", "C. €100", "D. €105", "E. €108"],
          answer: 2
        },
        {
          text: "A trader mixes 20 kg of sugar at €0.90/kg with 30 kg of sugar at €1.20/kg. He sells the mixture at €1.15/kg. What is his profit or loss on 50 kg?",
          choices: ["A. €4 profit", "B. €5 profit", "C. €6 profit", "D. €4 loss", "E. €5 loss"],
          answer: 1
        },
        {
          text: "A watch is sold for €270. The profit percentage is 35%. What was the cost price?",
          choices: ["A. €180", "B. €190", "C. €200", "D. €210", "E. €220"],
          answer: 2
        }
      ]
    },

    "6.3": {
      title: "6.3 Sports & Competition Scenarios",
      questions: [
        {
          text: "In a league, teams get 3 points for a win, 1 for a draw, 0 for a loss. After 8 games, a team has 18 points. If they drew 2, how many did they win?",
          choices: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
          answer: 1
        },
        {
          text: "In a swimming relay, 4 swimmers each swim 50 m. Their times are 32 s, 34 s, 30 s, and 36 s. What is the total time?",
          choices: ["A. 128 s", "B. 130 s", "C. 132 s", "D. 134 s", "E. 136 s"],
          answer: 2
        },
        {
          text: "A team scores an average of 3.5 goals per game over 10 games. In the 11th game, they score 5 goals. What is the new average?",
          choices: ["A. 3.5", "B. 3.6", "C. 3.7", "D. 3.8", "E. 4.0"],
          answer: 1
        },
        {
          text: "12 teams play in a knockout tournament (each round eliminates half). How many games are played in total?",
          choices: ["A. 6", "B. 8", "C. 10", "D. 11", "E. 12"],
          answer: 3
        },
        {
          text: "Anna jumps 2.40 m, Beth jumps 2.35 m, and Cara jumps 2.42 m. What is the average jump?",
          choices: ["A. 2.38 m", "B. 2.39 m", "C. 2.40 m", "D. 2.41 m", "E. 2.42 m"],
          answer: 1
        }
      ]
    },

    "6.4": {
      title: "6.4 Food & Cooking (Baker/Garden Problems)",
      questions: [
        {
          text: "A recipe for 6 people uses 450 g of flour. How much flour is needed for 10 people?",
          choices: ["A. 650 g", "B. 700 g", "C. 750 g", "D. 800 g", "E. 850 g"],
          answer: 2
        },
        {
          text: "A baker makes 8 loaves per hour. He works for 6 hours. Loaves are sold in packs of 4. How many packs can he make?",
          choices: ["A. 10", "B. 11", "C. 12", "D. 13", "E. 14"],
          answer: 2
        },
        {
          text: "A garden is 25 m × 16 m. A path 1 m wide runs around the inside edge. What is the area of the path?",
          choices: ["A. 72 m²", "B. 78 m²", "C. 82 m²", "D. 88 m²", "E. 90 m²"],
          answer: 3
        },
        {
          text: "A cake recipe calls for a 3:2:1 ratio of flour:sugar:butter. If 240 g of flour is used, how much butter is needed?",
          choices: ["A. 60 g", "B. 70 g", "C. 75 g", "D. 80 g", "E. 90 g"],
          answer: 3
        },
        {
          text: "Apples cost €1.20 per kg and oranges cost €1.80 per kg. How much does a mixture of 3 kg apples and 2 kg oranges cost?",
          choices: ["A. €5.60", "B. €6.00", "C. €6.40", "D. €7.20", "E. €7.80"],
          answer: 1
        }
      ]
    },

    "7.1": {
      title: "7.1 Simple Linear Equations",
      questions: [
        {
          text: "Solve for x: 3x + 7 = 22",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
          answer: 2
        },
        {
          text: "If 2(x − 3) = 14, what is x?",
          choices: ["A. 7", "B. 8", "C. 9", "D. 10", "E. 11"],
          answer: 3
        },
        {
          text: "The sum of two numbers is 48 and their difference is 12. What is the larger number?",
          choices: ["A. 25", "B. 28", "C. 30", "D. 32", "E. 35"],
          answer: 2
        },
        {
          text: "If 4n − 5 = 2n + 9, what is n?",
          choices: ["A. 5", "B. 6", "C. 7", "D. 8", "E. 9"],
          answer: 2
        },
        {
          text: "A number is tripled and then 8 is subtracted. The result is 37. What is the number?",
          choices: ["A. 12", "B. 13", "C. 14", "D. 15", "E. 16"],
          answer: 3
        }
      ]
    },

    "7.2": {
      title: "7.2 Expression Manipulation",
      questions: [
        {
          text: "Simplify: 3(x + 2) − 2(x − 1)",
          choices: ["A. x + 4", "B. x + 6", "C. x + 8", "D. x + 10", "E. x + 12"],
          answer: 2
        },
        {
          text: "If a + b = 10 and a − b = 4, what is a²  − b²?",
          choices: ["A. 30", "B. 36", "C. 40", "D. 42", "E. 44"],
          answer: 2
        },
        {
          text: "What is the value of x² + 2x + 1 when x = 3?",
          choices: ["A. 12", "B. 14", "C. 16", "D. 18", "E. 20"],
          answer: 2
        },
        {
          text: "Simplify: (x + 3)(x − 3)",
          choices: ["A. x² − 6", "B. x² − 9", "C. x² + 9", "D. x² − 3x + 9", "E. x² + 3x − 9"],
          answer: 1
        },
        {
          text: "If p = 3 and q = −2, what is p² − q²?",
          choices: ["A. 1", "B. 3", "C. 5", "D. 7", "E. 9"],
          answer: 2
        }
      ]
    },

    "7.3": {
      title: "7.3 Inequality & Constraint Problems",
      questions: [
        {
          text: "Solve: 2x + 3 > 11. Which is a valid value of x?",
          choices: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 2"],
          answer: 2
        },
        {
          text: "Which integer satisfies both 3x < 18 and x > 3?",
          choices: ["A. 3", "B. 4", "C. 7", "D. 8", "E. 9"],
          answer: 1
        },
        {
          text: "The average of 5 numbers is 12. Four of the numbers are 10, 11, 13, 14. What is the fifth number?",
          choices: ["A. 10", "B. 11", "C. 12", "D. 13", "E. 14"],
          answer: 2
        },
        {
          text: "A positive integer x satisfies x² < 50 and x² > 30. What are the possible values of x?",
          choices: ["A. 5 only", "B. 6 only", "C. 5 and 6", "D. 4, 5, and 6", "E. 4 and 5"],
          answer: 2
        },
        {
          text: "If 5 < 2x − 1 ≤ 13, what are the integer values of x?",
          choices: ["A. 3, 4, 5, 6, 7", "B. 3, 4, 5, 6", "C. 4, 5, 6, 7", "D. 4, 5, 6", "E. 3, 4, 5"],
          answer: 2
        }
      ]
    }

  } // end grade 56

}; // end questionsData
