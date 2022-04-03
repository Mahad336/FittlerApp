var data = {
    FatLoss: {
        instruction: [
            "This is a fat loss meal plan, you have to eat 5-6 meals a day in every 2-3 hours. This meal contains High protein, high fibers, Low carbs with health fats.",
            "First thing’s first, you need to determine your basal metabolic rate (BMR). BMR is essentially an estimation of the minimum energy required to keep basic bodily functions online (heart rate, respiration, etc.) if you spent an entire 24 hour period at rest.",
            "After you establish your BMR, you'll need to use the active factor multiplier to calculate your Total Daily Energy Expenditure (TDEE). This is a combination of the calories need to maintain your basal metabolic rate coupled with your daily actives.",
            "STEP 1: CALCULATE THE BMR Use Online BMR calculator or BMR Mobile App. Enter Height/Weight/Age including High Active (5-6 days a week)",
            "Lets take an EXAMPLE: Age: 25 Height: 5’10” Weight: 70kg (154lb) So BMR would be: 1744",
            "STEP 2: CALCULATE THE MAINTENANCE CALORIES - TDEE [FORMULA: BMR x 1.3] 1744 x 1.5 = 2267 calories So TDEE is 2267",
            "STEP 3: REDUCE EXTRA CALORIES FOR FAT LOSS Use the following formula to determine your daily calorie needs for a fat loss: • TDEE - 300 calories.",
            "FOR CUTTING- We will reduce 300 calories for fat loss: 2267 - 300 = 1967",
            "Keep in mind, all of these calculations are based upon algorithms for most individuals. However, they cannot factor in every individual variable such as NEAT (non-exercise activity thermogenesis), genotypes, hormones, lifestyle factors, hobbies, or nervous system dominance. Therefore, some individuals may need to reduce more calories in order to lose weight while others will need less to get the scale moving in the right direction. Start with a set number, eat accordingly for a month, check the scale, and then adjust.",
            "MACRO BREAKDOWN ",
            "TOTAL CALORIES-  Approx. 1900 ",
            "PROTEIN (40%) (190g), CARBS (32%) (150g), FAT (28%) (60g)"
        ],
        note: [
            "Eat fruits on daily basis",
            "Drink ¾ litres water daily",
            "Drink Green Tea",
            "Drink Lemon Water (Especially in summers)"
        ],
        veg: [{
            title: 'Meal 1',
            ingredients: ['Oats', 'Flax Seed', 'Almonds', 'Apple', 'Skim Milk'],
            quantity: ['Cup 0.5', '1 Spoon', '10 Pieces', 'Half', '200 ml',],
            alternateFood: ['Quinoa', 'Chia Seeds', 'Peanuts/Walnuts', 'Berries', 'Whey protein',]
        },

        {
            title: 'Meal 2',
            ingredients: ['Whole Wheat Bread', 'Peanut Butter', 'Coffee',],
            quantity: ['2 Pieces', '2 Spoon', '1 Cup',],
            alternateFood: ['--', 'Almond Butter', 'Skim Milk',]
        },

        {
            title: 'Meal 3',
            ingredients: ['Brown Rice', 'Paneer', 'Tomato', 'Lemon', 'Carrots',],
            quantity: ['Cup 0.5', '50-100 g', '½', 'Half', '1 Cup',],
            alternateFood: ['2 Whole Wheat Roti', 'Tofu/Soya Chunks', '--', '--', 'Any Vegetables',]
        },

        {
            title: 'Meal 4',
            ingredients: ['Boiled Chickpeas', 'Cucumber', 'Tomato', 'Lemon'],
            quantity: ['Cup 0.5', '1/2', '½', 'Half',],
            alternateFood: ['Boiled lentils / legumes', '--', '--', '--']
        },

        {
            title: 'Meal 5',
            ingredients: ['Lentils ', 'Whole Wheat Roti', 'Soya Chunks',],
            quantity: ['Cup 1', '2', '30g',],
            alternateFood: ['Legumes/Chickpeas', '--', 'Tofu',]
        },
        ],

        nonVeg: '',

        vegan: [
            {
                title: 'Meal 1',
                ingredients: ['Oats', 'Plant Protein', 'Almonds'],
                quantity: ['50g', '1 Scoop', '5'],
                alternateFood: ['--', '--', '--',]
            },

            {
                title: 'Meal 2',
                ingredients: ['Whole wheat bread', 'Mixed Vegetables'],
                quantity: ['2', '50g'],
                alternateFood: ['--', '--']
            },

            {
                title: 'Meal 3',
                ingredients: ['2', '50g', 'Brown Rice', 'Lentils', 'Salad'],
                quantity: ['1 Cup', '1 Cup', '1'],
                alternateFood: ['2 Whole Wheat Roti', 'Legumes', '--']
            },

            {
                title: 'Meal 4',
                ingredients: ['Whole Wheat Bread', 'Peanut Butter', 'Apple'],
                quantity: ['2', '2 Spoon', '1'],
                alternateFood: ['--', 'Almond Butter', '--']
            },

            {
                title: 'Meal 5',
                ingredients: ['Tofu', 'Whole wheat Roti', 'Mixed Vegetables'],
                quantity: ['40g', '2', '1 cup'],
                alternateFood: ['Soya chunks', 'Whole wheat bread', 'Lentils/legumes/chickpeas']
            },
        ],
    },




    MuscleGain: {
        instruction: [
            "This is a muscle building diet plan and you have to eat 5-6 meals a day in every 2-3 hrs.",
            "This Meal Contains High Carbs, High Proteins with moderate healthy fats."
        ],
        note: [
            "Eat fruits on daily basis",
            "Drink ¾ litres water daily",
            "Drink Green Tea",
            "Drink Lemon Water ( Especially in summers )"
        ],
        veg: [
            {
                title: 'Oatmeal',
                ingredients: ['Oats', 'Whole Wheat Bread', 'Apple', 'Semi-Skim Milk', 'Peanut Butter'],
                quantity: ['80g', '2', '1/2', '300 ml', '1'],
                alternateFood: ['--', '--', '--', '--', 'Almond Butter']
            },

            {
                title: 'Protein Smoothie',
                ingredients: ['Skim Milk', 'Whey Protein', 'Banana', 'Oats', 'Peanut Butter'],
                quantity: ['150 ml', '1 scoop', '1', '40g', '1 spoon'],
                alternateFood: ['--', '--', 'Apple', '--', 'Almond Butter']
            },

            {
                title: 'Lunch',
                ingredients: ['Brown Rice + White Rice', 'Lentils', 'Green Veggies', 'Salad + Lemon'],
                quantity: ['1 cup', '1 cup', '1 cup', '--'],
                alternateFood: ['--', 'Legumes/chickpeas', '--', '--']
            },

            {
                title: 'Sandwich',
                ingredients: ['Whole Wheat Bread', 'Tofu', 'Green Veggies'],
                quantity: ['2', '30g', '1 cup'],
                alternateFood: ['--', 'Paneer/soya chunks', '--']
            },

            {
                title: 'Meal 5',
                ingredients: ['Whole Wheat Roti', 'Lentils', 'Green Veggies'],
                quantity: ['3', '1 cup', '1 cup'],
                alternateFood: ['Brown rice', 'Legumes/ chickpeas', '--']
            },
        ],

        nonVeg: '',

        vegan: [
            {
                title: 'Oatmeal',
                ingredients: ['Oats', 'Peanut butter', 'Plant Protein', 'Almonds', 'Apple'],
                quantity: ['80g', '1 spoon', '1 spoon ', '5', '1/2'],
                alternateFood: ['--', 'Almond Butter', '--', '--', 'Banana']
            },

            {
                title: 'Quick Sandwich',
                ingredients: ['Whole Wheat Bread', 'Peanut butter', 'Apple', 'Cashews'],
                quantity: ['2', '1 spoon', '1 ', '5'],
                alternateFood: ['--', 'Almond Butter', 'Banana', '--']
            },

            {
                title: 'Lunch',
                ingredients: ['Brown Rice', 'Legumes', 'Spinach + Tofu', 'Salad'],
                quantity: ['1 cup', '1 cup', '1 cup', '1'],
                alternateFood: ['White Rice', 'Lentils/chickpeas', 'Veggies + Soya chunks', '--']
            },

            {
                title: 'Protein Smoothie',
                ingredients: ['Oats', 'Water', 'Peanut butter', 'Plant Protein'],
                quantity: ['60g', '1 cup', '1 spoon ', '1 scoop'],
                alternateFood: ['--', '--', 'Almond Butter', '--']
            },

            {
                title: 'Dinner',
                ingredients: ['Whole Wheat Roti', 'Chick Peas', 'Green Veggies'],
                quantity: ['2', '1 cup', '1 cup'],
                alternateFood: ['Brown Rice', 'Legumes', 'Soya Chunks']
            },
        ],
    },


    Bulking: {
        instruction: [
            "This is a bulking meal plan, you have to eat 5-6 meals a day in every 2-3 hours.",
            "This meal contains High protein, high fibers, high carbs with health fats."
        ],
        note: [
            "Eat fruits on daily basis",
            "Drink ¾ litres water daily",
            "Drink Green Tea ",
            "Drink Lemon Water (Especially in summers)"

        ],
        veg: [
            {
                title: 'Oatmeal',
                ingredients: ['Oats', 'Whole Wheat Bread', 'Banana', 'Semi-Skim Milk', 'Peanut Butter'],
                quantity: ['100g', '2 ', '1 ', '300 ml', '1'],
                alternateFood: ['--', '--', '--', '--', 'Almond Butter']
            },

            {
                title: 'Protein Smoothie',
                ingredients: ['Skim Milk', 'Whey Protein', 'Banana', 'Oats', 'Peanut Butter'],
                quantity: ['250 ml', '1 scoop', '1 ', '40g', '2 spoon'],
                alternateFood: ['--', '--', 'Apple', '--', 'Almond Butter']
            },

            {
                title: 'Lunch',
                ingredients: ['Brown Rice + White Rice', 'Lentils', 'Green Veggies', 'Salad + Lemon', 'Potatoes'],
                quantity: ['1.5 Cup', '1 cup', '1 cup ', '--', '1 cup'],
                alternateFood: ['3 Whole Wheat Roti', 'Legumes/chickpeas', '--', '--', 'Sweet potatoes']
            },

            {
                title: 'Veggie Sandwich',
                ingredients: ['Whole Wheat Bread', 'Tofu', 'Green Veggies', 'Mashed Potato'],
                quantity: ['4', '40g', '1 cup ', '1 cup'],
                alternateFood: ['--', 'Paneer/soya chunks', '--', 'Mashed Sweet Potato']
            },

            {
                title: 'Dinner',
                ingredients: ['Whole Wheat Roti', 'Lentils', 'Green Veggies'],
                quantity: ['3', '1 cup', '1 cup'],
                alternateFood: ['Brown rice', 'Legumes/ chickpeas', '--']
            },

            {
                title: 'Before Bed',
                ingredients: ['Semi-Skim Milk', 'Almonds', 'Whole Wheat Bread'],
                quantity: ['200 ml', '10', '1'],
                alternateFood: ['Skim Milk', 'Walnuts', 'Fiber Biscuits (4)']
            },
        ],
        nonVeg: '',
        vegan: [
            {
                title: 'Oatmeal',
                ingredients: ['Oats', 'Peanut butter', 'Plant Protein', 'Almonds', 'Apple'],
                quantity: ['100g', '1 spoon', '1 scoop ', '5', '1'],
                alternateFood: ['--', 'Almond Butter', '--', '--', 'Banana']
            },

            {
                title: 'Quick Sandwich ',
                ingredients: ['Whole Wheat Bread', 'Peanut butter', 'Apple', 'Cashews'],
                quantity: ['3', '2 spoon', '1', '5'],
                alternateFood: ['--', 'Almond Butter', 'Banana', 'Walnuts']
            },

            {
                title: 'Lunch',
                ingredients: ['White Rice', 'Chick peas', 'Tofu', 'Potato'],
                quantity: ['1.5 cup', '1 cup', '1 cup  ', '1'],
                alternateFood: ['Brown Rice', 'Lentils/chickpeas', 'Veggies + Soya chunks', '--']
            },

            {
                title: 'Bulky Burger',
                ingredients: ['Whole wheat Buns', 'Mashed Chick peas', 'Roasted Tomato', 'Mashed Potato ', 'Cucumber', 'Tomato Ketchup'],
                quantity: ['1', '1 cup', '1', '2', '1/2', '1 Spoon'],
                alternateFood: ['--', '--', 'Veggies', '--', 'Spinach', '--']
            },

            {
                title: 'Protein Smoothie',
                ingredients: ['Oats', 'Water', 'Peanut butter', 'Plant Protein', 'Banana',],
                quantity: ['80g', '1 cup', '1 spoon', '1 scoop', '2'],
                alternateFood: ['--', '--', 'Almond Butter', '--', '--']
            },

            {
                title: 'Dinner',
                ingredients: ['Whole Wheat Roti', 'Chick Peas', 'Green Veggies',],
                quantity: ['3', '1 cup', '1 cup'],
                alternateFood: ['Brown Rice', 'Legumes', 'Soya Chunks']
            },
        ],
    },


    PureHealth: {
        instruction: [
            "This is a Pure Health diet plan and you have to eat 4-5 meals a day in every 2-3 hrs.",
            "This Meal Contains Moderate Carbs, Moderate Proteins with moderate healthy fats."
        ],
        note: [
            "Eat fruits on daily basis",
            "Drink ¾ litres water daily",
            "Drink Green Tea",
            "Drink Lemon Water (Especially in summers)"
        ],
        veg: [
            {
                title: 'Oatmeal',
                ingredients: ['Oats', 'Whole Wheat Bread', 'Apple', 'Semi-Skim Milk', 'Peanut Butter'],
                quantity: ['60g', '1', '1', '200 ml', '1'],
                alternateFood: ['--', '--', '--', '--', 'Almond Butter']
            },

            {
                title: 'Protein Smoothie',
                ingredients: ['Skim Milk', 'Honey', 'Banana', 'Oats', 'Peanut Butter'],
                quantity: ['150 ml', '1 spoon', '1', '40g', '1 spoon'],
                alternateFood: ['--', '--', 'Apple', '--', 'Almond Butter']
            },

            {
                title: 'Lunch',
                ingredients: ['Brown Rice', 'Lentils', 'Green Veggies', 'Salad + Lemon',],
                quantity: ['1 Cup', '1 cup', '1 cup', '--'],
                alternateFood: ['--', 'Legumes/chickpeas', 'Spinach', '--']
            },

            {
                title: 'Natural Fruit Juice',
                ingredients: '',
                quantity: [],
                alternateFood: []
            },

            {
                title: 'Dinner',
                ingredients: ['Whole Wheat Roti', 'Lentils', 'Green Veggies'],
                quantity: ['2', '1 cup', '1 cup '],
                alternateFood: ['--', 'Legumes/ chickpeas', '--']
            },

            {
                title: 'Green Tea/Herbal Tea',
                ingredients: '',
                quantity: [],
                alternateFood: []
            },
        ],
        nonVeg: '',
        vegan: [
            {
                title: 'Oatmeal',
                ingredients: ['Oats', 'Peanut butter', 'Almonds', 'Apple'],
                quantity: ['60g', '2 spoon', '10', '½'],
                alternateFood: ['--', 'Almond Butter', '--', 'Banana']
            },

            {
                title: 'Quick Sandwich',
                ingredients: ['Whole Wheat Bread', 'Peanut butter', 'Apple', 'Cashews'],
                quantity: ['2', '1 spoon', '1', '5'],
                alternateFood: ['--', 'Almond Butter', 'Banana', '--']
            },

            {
                title: 'Lunch',
                ingredients: ['Brown Rice', 'Legumes', 'Spinach + Tofu', 'Salad'],
                quantity: ['1 cup', '1 cup', '1 cup', '1'],
                alternateFood: ['Whole wheat Roti (2)', 'Lentils/chickpeas', 'Veggies + Soya', '--']
            },

            {
                title: 'Detox Juice',
                ingredients: ['Carrot', 'Lemon', 'Ginger', 'Apple'],
                quantity: ['3', '1/3 ', '1/2 Inch', '½'],
                alternateFood: ['--', '--', '--', '--']
            },

            {
                title: 'Dinner',
                ingredients: ['Whole Wheat Roti', 'Chick Peas', 'Green Veggies'],
                quantity: ['2', '1 cup', '1 cup'],
                alternateFood: ['--', 'Legumes', 'Soya Chunks']
            },

            {
                title: 'Green Tea/Herbal Tea',
                ingredients: '',
                quantity: [],
                alternateFood: []
            },

        ],
    },
}

var covid = {
    diets: [
        'Garlic',
        'Ginger',
        'Coconut Oil',
        'Peanuts',
        'Grapes',
        'Berries',
        'Dark Chocolate',
        'Red Bell Pepper',
        'Indian Gooseberry (Awla or Amla)',
        'Lemon',
        'Orange',
        'Herbs'
    ],

    note: [
        'Most Important- Vaccination',
        'Social Distancing',
        'Face Masks',
        'Regular Hand Wash',
        'Proper Sanitizing'
    ]
}

var nutrients = {

    description: [
        "The term micronutrients is used to describe vitamins and minerals in general.",
        "Macronutrients, on the other hand, include proteins, fats and carbohydrates.",
        "Your body needs smaller amounts of micronutrients relative to macronutrients. That’s why they’re labeled “micro.”",
        "Humans must obtain micronutrients from food since your body cannot produce vitamins and minerals — for the most part. That’s why they’re also referred to as essential nutrients.",
        "Vitamins are organic compounds made by plants and animals which can be broken down by heat, acid or air. On the other hand, minerals are inorganic, exist in soil or water and cannot be broken down.",
        "When you eat, you consume the vitamins that plants and animals created or the minerals they absorbed. ",
        "The micronutrient content of each food is different, so it’s best to eat a variety of foods to get enough vitamins and minerals.",
        "An adequate intake of all micronutrients is necessary for optimal health, as each vitamin and mineral has a specific role in your body. ",
        "Vitamins and minerals are vital for growth, immune function, brain development and many other important functions.",
    ],
    NutData: [
        {
            nutrient: [
                'Vitamin B1 (thiamine)',
                'Vitamin B2 (riboflavin)',
                'Vitamin B3 (niacin)',
                'Vitamin B5 (pantothenic acid)',
                'Vitamin B6 (pyridoxine)',
                'Vitamin B7 (biotin)',
                'Vitamin B9 (folate)',
                'Vitamin B12 (cobalamin)',
                'Vitamin C (ascorbic acid)'
            ],
            sources: [
                'Whole grains, meat, fish',
                'Organ meats, eggs, milk',
                'Meat, salmon, leafy greens, beans',
                'Organ meats, mushrooms, tuna, avocado',
                'Fish, milk, carrots, potatoes',
                'Eggs, almonds, spinach, sweet potatoes',
                'Beef, liver, black-eyed peas, spinach, asparagus',
                'Clams, fish, meat',
                'Citrus fruits, bell peppers, Brussels sprouts'
            ],
            RDA: [
                '1.1–1.2 mg',
                '1.1–1.3 mg',
                '14–16 mg',
                '5 mg',
                '1.3 mg',
                '30 mcg',
                '400 mg',
                '2.4 mcg',
                '75–90 mg'
            ]
        },


        {
            nutrient: [
                'Vitamin A',
                'Vitamin D',
                'Vitamin E',
                'Vitamin K',
            ],
            sources: [
                '(sweet potatoes, carrots, spinach)',
                'Sunlight,  milk',
                'Sunflower seeds,  almonds',
                'Leafy greens, soybeans, pumpkin',
            ],
            RDA: [
                '700–900 mcg',
                '600–800 IU',
                '15 mg',
                '90–120 mcg',
            ]
        },

        {
            nutrient: [
                'Calcium',
                'Phosphorus',
                'Magnesium',
                'Sodium',
                'Chloride',
                'Potassium',
                'Sulfur'
            ],
            sources: [
                'Milk products, leafy greens, broccoli',
                'yogurt, turkey',
                'Almonds, cashews, black beans',
                'Salt, processed foods, canned soup',
                'salt, celery',
                'Lentils, acorn squash, bananas',
                'Garlic, onions, Brussels sprouts, mineral water',
            ],
            RDA: [
                '2,000–2,500 mg',
                '700 mg',
                '310–420 mg',
                '2,300 mg',
                '1,800–2,300 mg',
                '4,700 mg',
                'None established',
            ]
        },

        {
            nutrient: [
                'Iron',
                'Manganese',
                'Copper',
                'Zinc',
                'Iodine',
                'Fluoride',
                'Selenium'
            ],
            sources: [
                'white beans, spinach',
                'Pineapple,  peanuts',
                'cashews',
                'chickpeas',
                ' yogurt',
                'Fruit juice, water, c',
                'Brazil nuts'
            ],
            RDA: [
                '8–18 mg',
                '1.8–2.3 mg',
                '900 mcg',
                '8–11 mg',
                '150 mcg',
                '3–4 mg',
                '55 mcg',
            ]
        }
    ],




}


export default data;
export { covid, nutrients };
