import * as jsPDF from 'jspdf';


import Papa from 'papaparse';
import fs from 'fs';






function generatePdf(data) {

  // Example JSON data
  //console.log('Data' , data);
  // const data = {



  //     "exercisePlan": {
  //       "Day 1": {
  //         "Warm-up": "5 minutes of brisk walking",
  //         "Exercises": [
  //           {
  //             "Exercise": "Bodyweight Squats",
  //             "VideoLink": "https://www.youtube.com/shorts/3fl7uYmiMVw",
  //             "Reps": "3 sets of 10 reps",
  //             "Rest": "30 seconds"
  //           },
  //           {
  //             "Exercise": "Deadlifts",
  //             "VideoLink": "https://youtube.com/shorts/McCDaAsSeRc?si=zqTqXzRQ30E95wgt",
  //             "Reps": "3 sets of 8 reps",
  //             "Rest": "1 minute"
  //           },
  //           {
  //             "Exercise": "Bent over rows",
  //             "VideoLink": "https://www.youtube.com/watch?v=9Gf-Ourup_k&pp=ygUgaG93IHRvIGRvIGJlbnQgb3ZlciBiYXJiZWxsIHJvd3M%3D",
  //             "Reps": "3 sets of 10 reps",
  //             "Rest": "1 minute"
  //           },
  //           {
  //             "Exercise": "Walking lunges",
  //             "VideoLink": "https://www.youtube.com/watch?v=mAgbXQdd4LM&pp=ygUXd2Fsa2luZyBsdW5nZXMgcHVyZSBneW0%3D",
  //             "Reps": "3 sets of 10 reps each leg",
  //             "Rest": "1 minute"
  //           },
  //           {
  //             "Exercise": "Leg Press",
  //             "VideoLink": "https://www.youtube.com/watch?v=2nNHhK_Dmcc",
  //             "Reps": "3 sets of 8 reps",
  //             "Rest": "1 minute"
  //           }
  //         ],
  //         "Cool-down": "5 minutes of stretching",
  //         "Message": "Today you’ll focus on Legs! A strong leg foundation helps improve overall strength."
  //       },
  //       "Day 2": {
  //         "Warm-up": "5 minutes of brisk walking",
  //         "Exercises": [
  //           {
  //             "Exercise": "Flat Dumbbell Bench Press",
  //             "VideoLink": "https://youtu.be/YQ2s_Y7g5Qk?si=RbsCWjtNndrpBl8B",
  //             "Reps": "3 sets of 8 reps",
  //             "Rest": "1 minute"
  //           },
  //           {
  //             "Exercise": "Incline Push Up",
  //             "VideoLink": "https://www.youtube.com/watch?v=yAbg3_pJKvw",
  //             "Reps": "3 sets of 10 reps",
  //             "Rest": "1 minute"
  //           },
  //           {
  //             "Exercise": "Chest Dips",
  //             "VideoLink": "https://youtu.be/4la6BkUBLgo?si=-4nXlpmqzMIwX52O",
  //             "Reps": "3 sets of 6-8 reps",
  //             "Rest": "2 minutes"
  //           },
  //           {
  //             "Exercise": "Cable Crossover Mid Chest",
  //             "VideoLink": "https://youtu.be/p0JsZxA5GxU?si=P2gzj_t0NWkdC74U",
  //             "Reps": "3 sets of 10 reps",
  //             "Rest": "1 minute"
  //           },
  //           {
  //             "Exercise": "Pec Deck Flies",
  //             "VideoLink": "https://youtu.be/eGjt4lk6g34?si=8AdkB1_BlO96Mat3",
  //             "Reps": "3 sets of 10 reps",
  //             "Rest": "1 minute"
  //           }
  //         ],
  //         "Cool-down": "5 minutes of stretching",
  //         "Message": "Today is focused on Chest! Building chest muscles enhances upper body strength."
  //       },
  //       "Day 3": {
  //         "Warm-up": "5 minutes of brisk walking",
  //         "Exercises": [
  //           {
  //             "Exercise": "Barbell Overhead Press Standing",
  //             "VideoLink": "https://youtu.be/ZXpdJOLNoWw?si=DHn1t3q2-2kpYEnk",
  //             "Reps": "3 sets of 8 reps",
  //             "Rest": "1 minute"
  //           },
  //           {
  //             "Exercise": "Dumbbell Overhead Press Sitting",
  //             "VideoLink": "https://youtu.be/TsduLWuhlFM?si=OiGbYUh_xiMcPrjz",
  //             "Reps": "3 sets of 10 reps",
  //             "Rest": "1 minute"
  //           },
  //           {
  //             "Exercise": "Dumbbell Side Lateral Raise",
  //             "VideoLink": "https://youtu.be/OuG1smZTsQQ?si=wHbHE3CMjlI9fP7a",
  //             "Reps": "3 sets of 10 reps",
  //             "Rest": "1 minute"
  //           },
  //           {
  //             "Exercise": "Dumbbell Shrugs",
  //             "VideoLink": "https://youtu.be/qIR5YmXbg6k?si=C8MH2PtkJw0PHTb-",
  //             "Reps": "3 sets of 10 reps",
  //             "Rest": "1 minute"
  //           },
  //           {
  //             "Exercise": "Face Pulls",
  //             "VideoLink": "https://youtu.be/0Po47vvj9g4?si=BiEu63-xcp2EBR5k",
  //             "Reps": "3 sets of 12 reps",
  //             "Rest": "1 minute"
  //           }
  //         ],
  //         "Cool-down": "5 minutes of stretching",
  //         "Message": "Today you’ll work on Shoulders! Strong shoulders are key to upper body mobility."
  //       },
  //       "Day 4": {
  //         "Warm-up": "5 minutes of brisk walking",
  //         "Exercises": [
  //           {
  //             "Exercise": "Lat Pull Downs (Overhand Grip)",
  //             "VideoLink": "https://youtu.be/JGeRYIZdojU?si=RyNUT_7TrgicjOog",
  //             "Reps": "3 sets of 10 reps",
  //             "Rest": "1 minute"
  //           },
  //           {
  //             "Exercise": "T-Bar Rows",
  //             "VideoLink": "https://youtu.be/hYo72r8Ivso?si=0lq_KaGabsL4crG8",
  //             "Reps": "3 sets of 10 reps",
  //             "Rest": "1 minute"
  //           },
  //           {
  //             "Exercise": "Seated Cable Rows",
  //             "VideoLink": "https://youtu.be/lJoozxC0Rns?si=-MKhqR2_aR4uE6Lu",
  //             "Reps": "3 sets of 10 reps",
  //             "Rest": "1 minute"
  //           },
  //           {
  //             "Exercise": "Single Arm Dumbbell Row",
  //             "VideoLink": "https://youtu.be/DMo3HJoawrU?si=TKrJrB6UhWc0KHvM",
  //             "Reps": "3 sets of 10 reps each arm",
  //             "Rest": "1 minute"
  //           },
  //           {
  //             "Exercise": "Back Hyperextensions",
  //             "VideoLink": "https://youtu.be/qtjJUWCnDyE?si=fJNRchl1s2DKcfsy",
  //             "Reps": "3 sets of 10 reps",
  //             "Rest": "1 minute"
  //           }
  //         ],
  //         "Cool-down": "5 minutes of stretching",
  //         "Message": "Today is all about Back! A strong back improves posture and overall strength."
  //       },
  //       "Day 5": {
  //         "Warm-up": "5 minutes of brisk walking",
  //         "Exercises": [
  //           {
  //             "Exercise": "Incline Dumbbell Curl (Bench)",
  //             "VideoLink": "https://www.youtube.com/watch?v=FM7725AeXPA",
  //             "Reps": "3 sets of 10 reps",
  //             "Rest": "1 minute"
  //           },
  //           {
  //             "Exercise": "Barbell Curl Straight Bar",
  //             "VideoLink": "https://www.youtube.com/watch?v=dDI8ClxRS04",
  //             "Reps": "3 sets of 10 reps",
  //             "Rest": "1 minute"
  //           },
  //           {
  //             "Exercise": "Hammer Curl",
  //             "VideoLink": "https://www.youtube.com/watch?v=0IAM2YtviQY",
  //             "Reps": "3 sets of 10 reps",
  //             "Rest": "1 minute"
  //           },
  //           {
  //             "Exercise": "Dumbbell Preacher Curl",
  //             "VideoLink": "https://www.youtube.com/watch?v=WK5yZMlgMb4",
  //             "Reps": "3 sets of 10 reps",
  //             "Rest": "1 minute"
  //           },
  //           {
  //             "Exercise": "Bicep Rope Curl",
  //             "VideoLink": "https://www.youtube.com/watch?v=V8AR3SGzboU",
  //             "Reps": "3 sets of 10 reps",
  //             "Rest": "1 minute"
  //           }
  //         ],
  //         "Cool-down": "5 minutes of stretching",
  //         "Message": "Today is focused on Biceps! Strong biceps enhance arm strength and aesthetics."
  //       },
  //       "Day 6": {
  //         "Rest Day": true,
  //         "Message": "Today is a rest day! Recovery is important for muscle growth."
  //       },
  //       "Day 7": {
  //         "Warm-up": "5 minutes of brisk walking",
  //         "Exercises": [
  //           {
  //             "Exercise": "Triceps Overhead Dumbbell Press",
  //             "VideoLink": "https://youtu.be/7h3lG2WnLXg?si=dtjtO4zcHf_3cfgf",
  //             "Reps": "3 sets of 10 reps",
  //             "Rest": "1 minute"
  //           },
  //           {
  //             "Exercise": "Close Grip Bench Press",
  //             "VideoLink": "https://www.youtube.com/watch?v=DzA2xZhDGeo",
  //             "Reps": "3 sets of 8-10 reps",
  //             "Rest": "1 minute"
  //           },
  //           {
  //             "Exercise": "Weighted Bench Dips",
  //             "VideoLink": "https://youtu.be/qrS6aa0aQ9I?si=PUqKdi3FxlNlC1ud",
  //             "Reps": "3 sets of 10 reps",
  //             "Rest": "1 minute"
  //           },
  //           {
  //             "Exercise": "Triceps Pushdown (Standard)",
  //             "VideoLink": "https://youtu.be/LXkCrxn3caQ?si=v1Gkdg8Wq7mdKjx1",
  //             "Reps": "3 sets of 10 reps",
  //             "Rest": "1 minute"
  //           },
  //           {
  //             "Exercise": "Diamond Push Ups",
  //             "VideoLink": "https://youtu.be/XtU2VQVuLYs?si=A0EmfFJ0mj1RTiAx",
  //             "Reps": "3 sets of 6-8 reps",
  //             "Rest": "1 minute"
  //           }
  //         ],
  //         "Cool-down": "5 minutes of stretching",
  //         "Message": "Today is focused on Triceps! Enhancing triceps strength boosts overall upper body strength."
  //       }
  //     },
  //     "dietPlan": [
  //       {
  //         "Day": 1,
  //         "Meals": {
  //           "Breakfast": {
  //             "Meal": "Scrambled eggs with spinach and toast",
  //             "Ingredients": {
  //               "Eggs": "2 large",
  //               "Spinach": "1 cup",
  //               "Whole grain toast": "1 slice"
  //             },
  //             "Nutritional Information": {
  //               "Calories": 300,
  //               "Protein": 20,
  //               "Carbohydrates": 25,
  //               "Fat": 15
  //             }
  //           },
  //           "Lunch": {
  //             "Meal": "Grilled chicken salad with mixed greens and vinaigrette",
  //             "Ingredients": {
  //               "Grilled chicken breast": "150 g",
  //               "Mixed greens": "2 cups",
  //               "Vinaigrette dressing": "2 tablespoons"
  //             },
  //             "Nutritional Information": {
  //               "Calories": 400,
  //               "Protein": 30,
  //               "Carbohydrates": 20,
  //               "Fat": 20
  //             }
  //           },
  //           "Dinner": {
  //             "Meal": "Baked salmon with quinoa and steamed broccoli",
  //             "Ingredients": {
  //               "Salmon": "150 g",
  //               "Quinoa": "1/2 cup cooked",
  //               "Broccoli": "1 cup steamed"
  //             },
  //             "Nutritional Information": {
  //               "Calories": 500,
  //               "Protein": 35,
  //               "Carbohydrates": 45,
  //               "Fat": 15
  //             }
  //           },
  //           "Snacks": {
  //             "Meal": "Greek yogurt with mixed berries",
  //             "Ingredients": {
  //               "Greek yogurt": "1 cup",
  //               "Mixed berries": "1/2 cup"
  //             },
  //             "Nutritional Information": {
  //               "Calories": 150,
  //               "Protein": 10,
  //               "Carbohydrates": 20,
  //               "Fat": 5
  //             }
  //           }
  //         }
  //       },
  //       {
  //         "Day": 2,
  //         "Meals": {
  //           "Breakfast": {
  //             "Meal": "Oatmeal with nuts and fruits",
  //             "Ingredients": {
  //               "Rolled oats": "1/2 cup",
  //               "Almonds": "1 oz",
  //               "Banana": "1 medium"
  //             },
  //             "Nutritional Information": {
  //               "Calories": 350,
  //               "Protein": 10,
  //               "Carbohydrates": 55,
  //               "Fat": 10
  //             }
  //           },
  //           "Lunch": {
  //             "Meal": "Spicy chicken wrap",
  //             "Ingredients": {
  //               "Whole grain wrap": "1",
  //               "Grilled chicken": "100 g",
  //               "Lettuce": "1 cup",
  //               "Spicy sauce": "1 tablespoon"
  //             },
  //             "Nutritional Information": {
  //               "Calories": 400,
  //               "Protein": 30,
  //               "Carbohydrates": 35,
  //               "Fat": 15
  //             }
  //           },
  //           "Dinner": {
  //             "Meal": "Stir-fried tofu with mixed vegetables",
  //             "Ingredients": {
  //               "Tofu": "150 g",
  //               "Mixed vegetables": "1 cup",
  //               "Soy sauce": "1 tablespoon"
  //             },
  //             "Nutritional Information": {
  //               "Calories": 400,
  //               "Protein": 20,
  //               "Carbohydrates": 40,
  //               "Fat": 15
  //             }
  //           },
  //           "Snacks": {
  //             "Meal": "Apple with peanut butter",
  //             "Ingredients": {
  //               "Apple": "1 medium",
  //               "Peanut butter": "2 tablespoons"
  //             },
  //             "Nutritional Information": {
  //               "Calories": 200,
  //               "Protein": 4,
  //               "Carbohydrates": 28,
  //               "Fat": 10
  //             }
  //           }
  //         }
  //       },
  //       {
  //         "Day": 3,
  //         "Meals": {
  //           "Breakfast": {
  //             "Meal": "Chia seed pudding",
  //             "Ingredients": {
  //               "Chia seeds": "2 tablespoons",
  //               "Almond milk": "1 cup",
  //               "Honey": "1 teaspoon"
  //             },
  //             "Nutritional Information": {
  //               "Calories": 250,
  //               "Protein": 7,
  //               "Carbohydrates": 30,
  //               "Fat": 12
  //             }
  //           },
  //           "Lunch": {
  //             "Meal": "Turkey sandwich on whole grain bread",
  //             "Ingredients": {
  //               "Turkey breast": "100 g",
  //               "Whole grain bread": "2 slices",
  //               "Lettuce": "1 cup",
  //               "Tomato": "1 slice"
  //             },
  //             "Nutritional Information": {
  //               "Calories": 400,
  //               "Protein": 30,
  //               "Carbohydrates": 40,
  //               "Fat": 10
  //             }
  //           },
  //           "Dinner": {
  //             "Meal": "Shrimp stir-fry with brown rice",
  //             "Ingredients": {
  //               "Shrimp": "150 g",
  //               "Brown rice": "1/2 cup cooked",
  //               "Bell peppers": "1 cup"
  //             },
  //             "Nutritional Information": {
  //               "Calories": 500,
  //               "Protein": 35,
  //               "Carbohydrates": 50,
  //               "Fat": 10
  //             }
  //           },
  //           "Snacks": {
  //             "Meal": "Cottage cheese with pineapple",
  //             "Ingredients": {
  //               "Cottage cheese": "1 cup",
  //               "Pineapple": "1/2 cup"
  //             },
  //             "Nutritional Information": {
  //               "Calories": 200,
  //               "Protein": 14,
  //               "Carbohydrates": 18,
  //               "Fat": 5
  //             }
  //           }
  //         }
  //       },
  //       {
  //         "Day": 4,
  //         "Meals": {
  //           "Breakfast": {
  //             "Meal": "Protein smoothie",
  //             "Ingredients": {
  //               "Protein powder": "1 scoop",
  //               "Banana": "1 medium",
  //               "Spinach": "1 cup",
  //               "Almond milk": "1 cup"
  //             },
  //             "Nutritional Information": {
  //               "Calories": 300,
  //               "Protein": 25,
  //               "Carbohydrates": 40,
  //               "Fat": 8
  //             }
  //           },
  //           "Lunch": {
  //             "Meal": "Tuna salad with chickpeas",
  //             "Ingredients": {
  //               "Canned tuna": "150 g",
  //               "Chickpeas": "1/2 cup",
  //               "Mixed greens": "1 cup",
  //               "Olive oil": "1 tablespoon"
  //             },
  //             "Nutritional Information": {
  //               "Calories": 400,
  //               "Protein": 35,
  //               "Carbohydrates": 30,
  //               "Fat": 18
  //             }
  //           },
  //           "Dinner": {
  //             "Meal": "Chicken stir-fry with vegetables",
  //             "Ingredients": {
  //               "Chicken breast": "150 g",
  //               "Mixed vegetables": "1 cup",
  //               "Soy sauce": "1 tablespoon"
  //             },
  //             "Nutritional Information": {
  //               "Calories": 500,
  //               "Protein": 40,
  //               "Carbohydrates": 30,
  //               "Fat": 15
  //             }
  //           },
  //           "Snacks": {
  //             "Meal": "Trail mix",
  //             "Ingredients": {
  //               "Mixed nuts": "1 oz",
  //               "Dried fruits": "1 oz"
  //             },
  //             "Nutritional Information": {
  //               "Calories": 200,
  //               "Protein": 6,
  //               "Carbohydrates": 20,
  //               "Fat": 10
  //             }
  //           }
  //         }
  //       },
  //       {
  //         "Day": 5,
  //         "Meals": {
  //           "Breakfast": {
  //             "Meal": "Avocado toast with poached egg",
  //             "Ingredients": {
  //               "Whole grain bread": "1 slice",
  //               "Avocado": "1/2 medium",
  //               "Egg": "1 large"
  //             },
  //             "Nutritional Information": {
  //               "Calories": 300,
  //               "Protein": 12,
  //               "Carbohydrates": 30,
  //               "Fat": 15
  //             }
  //           },
  //           "Lunch": {
  //             "Meal": "Beef stir-fry with peppers",
  //             "Ingredients": {
  //               "Beef strips": "150 g",
  //               "Bell pepper": "1 medium",
  //               "Rice": "1/2 cup cooked"
  //             },
  //             "Nutritional Information": {
  //               "Calories": 500,
  //               "Protein": 40,
  //               "Carbohydrates": 40,
  //               "Fat": 20
  //             }
  //           },
  //           "Dinner": {
  //             "Meal": "Fish tacos with cabbage slaw",
  //             "Ingredients": {
  //               "Fish fillet": "150 g",
  //               "Corn tortillas": "2",
  //               "Cabbage": "1 cup",
  //               "Sour cream": "2 tablespoons"
  //             },
  //             "Nutritional Information": {
  //               "Calories": 500,
  //               "Protein": 30,
  //               "Carbohydrates": 45,
  //               "Fat": 20
  //             }
  //           },
  //           "Snacks": {
  //             "Meal": "Dark chocolate and almonds",
  //             "Ingredients": {
  //               "Dark chocolate": "1 oz",
  //               "Almonds": "1 oz"
  //             },
  //             "Nutritional Information": {
  //               "Calories": 200,
  //               "Protein": 5,
  //               "Carbohydrates": 15,
  //               "Fat": 15
  //             }
  //           }
  //         }
  //       },
  //       {
  //         "Day": 6,
  //         "Meals": {
  //           "Breakfast": {
  //             "Meal": "Smoothie bowl with toppings",
  //             "Ingredients": {
  //               "Frozen berries": "1 cup",
  //               "Greek yogurt": "1/2 cup",
  //               "Granola": "1 oz"
  //             },
  //             "Nutritional Information": {
  //               "Calories": 300,
  //               "Protein": 10,
  //               "Carbohydrates": 50,
  //               "Fat": 7
  //             }
  //           },
  //           "Lunch": {
  //             "Meal": "Chicken Caesar salad",
  //             "Ingredients": {
  //               "Grilled chicken": "100 g",
  //               "Romaine lettuce": "2 cups",
  //               "Caesar dressing": "2 tablespoons"
  //             },
  //             "Nutritional Information": {
  //               "Calories": 400,
  //               "Protein": 30,
  //               "Carbohydrates": 20,
  //               "Fat": 25
  //             }
  //           },
  //           "Dinner": {
  //             "Meal": "Pasta with shrimp and spinach",
  //             "Ingredients": {
  //               "Pasta": "1 cup cooked",
  //               "Shrimp": "150 g",
  //               "Spinach": "1 cup"
  //             },
  //             "Nutritional Information": {
  //               "Calories": 500,
  //               "Protein": 35,
  //               "Carbohydrates": 60,
  //               "Fat": 10
  //             }
  //           },
  //           "Snacks": {
  //             "Meal": "Protein bar",
  //             "Ingredients": {
  //               "Protein bar": "1"
  //             },
  //             "Nutritional Information": {
  //               "Calories": 200,
  //               "Protein": 20,
  //               "Carbohydrates": 20,
  //               "Fat": 6
  //             }
  //           }
  //         }
  //       },
  //       {
  //         "Day": 7,
  //         "Meals": {
  //           "Breakfast": {
  //             "Meal": "Peanut butter banana toast",
  //             "Ingredients": {
  //               "Whole grain bread": "1 slice",
  //               "Peanut butter": "1 tablespoon",
  //               "Banana": "1/2 medium"
  //             },
  //             "Nutritional Information": {
  //               "Calories": 250,
  //               "Protein": 8,
  //               "Carbohydrates": 30,
  //               "Fat": 10
  //             }
  //           },
  //           "Lunch": {
  //             "Meal": "Chicken and avocado wrap",
  //             "Ingredients": {
  //               "Whole grain wrap": "1",
  //               "Grilled chicken": "100 g",
  //               "Avocado": "1/4 medium",
  //               "Lettuce": "1 cup"
  //             },
  //             "Nutritional Information": {
  //               "Calories": 400,
  //               "Protein": 30,
  //               "Carbohydrates": 30,
  //               "Fat": 20
  //             }
  //           },
  //           "Dinner": {
  //             "Meal": "Grilled steak with sweet potatoes",
  //             "Ingredients": {
  //               "Steak": "150 g",
  //               "Sweet potato": "1 medium (baked)",
  //               "Green beans": "1 cup"
  //             },
  //             "Nutritional Information": {
  //               "Calories": 600,
  //               "Protein": 50,
  //               "Carbohydrates": 40,
  //               "Fat": 25
  //             }
  //           },
  //           "Snacks": {
  //             "Meal": "Hummus with carrot sticks",
  //             "Ingredients": {
  //               "Hummus": "1/4 cup",
  //               "Carrots": "1 medium"
  //             },
  //             "Nutritional Information": {
  //               "Calories": 150,
  //               "Protein": 5,
  //               "Carbohydrates": 20,
  //               "Fat": 6
  //             }
  //           }
  //         }
  //       }
  //     ]


  // };
  // if (typeof data === 'string') {
  //   data = JSON.parse(data);
  // }
  var doc = new jsPDF.jsPDF();
  const pageHeight = doc.internal.pageSize.height;

  const lineHeight = 20;  // Adjust line height as needed
  let yPosition = 30;

  // Create a new jsPDF instance
  // Add a logo
  // const logoUrl = 'logo.png'; // Adjust the path to your logo
  //   const img = new Image();
  //   img.src = logoUrl; // Replace with your logo path
  //   doc.addImage(img, 'PNG', 10, 10, 50, 50);

  // Set colors and fonts
  doc.setTextColor(40, 40, 40);
  doc.setFontSize(16);
  doc.setFont('Helvetica', 'bold');


  // Exercise Plan
  doc.setFontSize(12);
  doc.text('Exercise Plan:', 20, yPosition);
  yPosition += lineHeight;


  for (let item in data) {

    doc.rect(18, yPosition - 5, 175, 10); // Draw rectangle around heading
    let itemNumber = parseInt(item); // Convert item to a number
    itemNumber++;
    doc.text(`Day ${itemNumber} ${data[item]['Focus']}`, 20, yPosition);
    if (yPosition > pageHeight - 20) {
      doc.addPage();
      yPosition = 20;  // Reset y position for the new page
    }
    yPosition += lineHeight;
    console.log('Day', item);
    let dayPlan = data[item];

    if (dayPlan['Warm-up']) {
      doc.text(`Warm-up: ${dayPlan['Warm-up']}`, 20, yPosition);
      yPosition += lineHeight;
    }
    if (yPosition > pageHeight - 20) {
      doc.addPage();
      yPosition = 20;  // Reset y position for the new page
    }

    if (yPosition > pageHeight - 20) {
      doc.addPage();
      yPosition = 20;  // Reset y position for the new page
    }

    if (dayPlan['Exercises']) {

      if (Array.isArray(dayPlan['Exercises'])) {
        doc.text('Exercises:', 20, yPosition);
        if (yPosition > pageHeight - 45) {
          doc.addPage();
          yPosition = 20;  // Reset y position for the new page
        }
        yPosition += lineHeight;
        dayPlan['Exercises'].forEach(exercise => {
          console.log('debug', 'in for each exercise' + exercise);

          doc.text(`- ${exercise.Exercise}: Reps 10-12 (Rest: 45-90 Sec)\n- Target & Category: ${exercise.Category} ${exercise.Target} \n- Video:${exercise["Link"]}\n\n`, 20, yPosition);
          yPosition += lineHeight;
          if (yPosition > pageHeight - 20) {
            doc.addPage();
            yPosition = 20;  // Reset y position for the new page
          }
        });
      }
      else {
        doc.text(`Rest day`, 20, yPosition);
        yPosition += lineHeight;
        if (yPosition > pageHeight - 20) {
          doc.addPage();
          yPosition = 20;  // Reset y position for the new page
        }
      }

    }

    if (dayPlan['Cool-down']) {
      doc.text(`Cool-down: ${dayPlan['Cool-down']}`, 20, yPosition);
      yPosition += lineHeight;
    }
    if (yPosition > pageHeight - 20) {
      doc.addPage();
      yPosition = 20;  // Reset y position for the new page
    }
    //   if (dayPlan['Message']) {
    //     doc.text(`Note: ${dayPlan['Message']}`, 20, yPosition);
    //     yPosition += lineHeight;
    // }
    if (dayPlan['Message']) {
      const pageWidth = doc.internal.pageSize.getWidth(); // Get the width of the page
      const pageHeight = doc.internal.pageSize.getHeight(); // Get the height of the page
      const margin = 20; // Set a margin
      const maxLineWidth = pageWidth - margin * 2; // Calculate maximum width for text
      const lines = doc.splitTextToSize(`Message: ${dayPlan['Message']}`, maxLineWidth); // Split the text into lines
      for (let i = 0; i < lines.length; i++) {
        // Check if the current position will exceed the page height
        if (yPosition > pageHeight - margin) {
          doc.addPage();  // Add a new page
          yPosition = 20;  // Reset yPosition for the new page
        }

        doc.text(lines[i], margin, yPosition);  // Print the text line
        yPosition += lineHeight;  // Move down to the next line
      }
    }
    if (yPosition > pageHeight - 20) {
      doc.addPage();
      yPosition = 20;  // Reset y position for the new page
    }

  }



  // Add spacing before Diet Plan
  yPosition += 20;



  // Diet Plan
  doc.setFontSize(12);
  doc.text('Diet Plan:', 20, yPosition);
  yPosition += 10;


  // for(let day in data.dietPlan){
  //   doc.rect(18, yPosition - 5, 175, 10); // Draw rectangle around heading
  //   doc.text(`${day}`, 20, yPosition);
  //   yPosition += 10;
  //   console.log('Day' , day);
  //   let dayPlan = data.dietPlan[day];

  // }

  if (data.dietPlan && Array.isArray(data.dietPlan)) {
    console.log('in if ', data.dietPlan);
    data.dietPlan.forEach(dayPlan => {
      console.log('in foreach diet plan', dayPlan);
      doc.rect(18, yPosition - 5, 175, 10); // Draw rectangle around heading
      doc.text(`Day ${dayPlan.Day}`, 20, yPosition);
      yPosition += 10;

      const meals = dayPlan.Meals;
      if (meals) {
        for (let meal in meals) {
          doc.text(`${meal}: ${meals[meal].Meal}`, 20, yPosition);
          yPosition += 10;
          if (yPosition > pageHeight - 20) {
            doc.addPage();
            yPosition = 20;  // Reset y position for the new page
          }

          const nutrition = meals[meal]['Nutritional Information'];
          if (nutrition) {
            doc.text(`Calories: ${nutrition.Calories}, Protein: ${nutrition.Protein}g, Carbs: ${nutrition.Carbohydrates}g, Fat: ${nutrition.Fat}g`, 20, yPosition);
            yPosition += 10;
          }
          if (yPosition > pageHeight - 20) {
            doc.addPage();
            yPosition = 20;  // Reset y position for the new page
          }
          const ingredients = meals[meal]['Ingredients'];
          if (ingredients) {
            doc.text(`Ingredients: ${ingredients}`, 20, yPosition);
            yPosition += 10;
          }
          if (yPosition > pageHeight - 20) {
            doc.addPage();
            yPosition = 20;  // Reset y position for the new page
          }
        }
      }

      yPosition += 10; // Add spacing between days
    });
  }

  // const dietPlan = data.dietPlan;
  // for (const dayData of dietPlan) {
  //   console.log(`Day ${dayData.Day}`);

  //   for (const mealType in dayData.Meals) {
  //     const meal = dayData.Meals[mealType];
  //     console.log(`  ${mealType}:`);
  //     console.log(`    Meal: ${meal.Meal}`);
  //     console.log(`    Nutritional Information:`);
  //     console.log(`      Calories: ${meal.NutritionalInformation.Calories}`);
  //     console.log(`      Protein: ${meal.NutritionalInformation.Protein}g`);
  //     console.log(`      Carbohydrates: ${meal.NutritionalInformation.Carbohydrates}g`);
  //     console.log(`      Fat: ${meal.NutritionalInformation.Fat}g`);
  //   }
  // }

  // Save or download the PDF
  doc.save('exercise_diet_plan.pdf');
}
function createLink(text, url) {
  doc.text(`${text}: `, 20, yPosition);
  const linkWidth = doc.getTextWidth(text);
  doc.link(linkWidth, yPosition, url, { underline: true }); // Add underline for visibility
}

const openaiApiKey = 'sk-proj-H18kKQdEEe4lhWokmLx7T3BlbkFJe4YIhnpalRTUpmEYwHr3';
const userInfo = {
  activityLevel: "Sedentary",
  age: "Adult (30-39)",
  alcoholConsumption: "occasionally",
  bodyWeightSquatsCapability: "10To25",
  bodyFatPercentage: "20-24%",
  bodyType: "bulky",
  challenges: "I struggle with consistency , Poor eating habits",
  desiredBodyFat: "15%",
  dietaryPreferences: "nonVeg",
  beginner: "No",
  focus: "Lose Fat",
  gender: "Female",
  gymAccess: 'Gym',
  heightcm: "130",
  heightunit: "cm",
  knownInjuries: "knee",
  medicalConditions: "diabetes",
  procrastinator: "Yes",
  pullUpsCapability: "None",
  pushUpsCapablity: "OneToTen",
  sleepQuality: "MoreThanEightHours",
  smoking: "No",
  stressLevel: "low",
  weightkg: "55",
  weightlbs: "121",
  weightunit: "kg",
  workoutDaysPerWeek: "3",
  workoutDurationPerDay: "30-60 mins"
};

const prompt = `
Generate a personalized exercise plan based on the following user information:


- **Body Fat Percentage**: ${userInfo.bodyFatPercentage}
- **Body Type**: ${userInfo.bodyType}
- **Desired Body Fat Percentage**: ${userInfo.desiredBodyFat}
- **User Exercise Experience Level**: ${userInfo.beginner}
- **Fitness Focus**: ${userInfo.focus}
- **Gender**: ${userInfo.gender}
- **Gym Access**: ${userInfo.gymAccess}
- **Weight**: ${userInfo.weightkg} ${userInfo.weightunit}
- **User availability (days per Week)**: ${userInfo.workoutDaysPerWeek}
- **Workout Duration per Day**: ${userInfo.workoutDurationPerDay}



{
  "exercisePlan": {
    "Day 1": {
      "Warm-up": "5 minutes of brisk walking",
      "Exercises": [
        {
          "Exercise": "Bodyweight Squats",
          "VideoLink": "www.youtube.com/watch/asdhiwuyeoqwey",
          "Reps": "3 sets of 10 reps",
          "Rest": "30 seconds"
        }
        
      ],
      "Cool-down": "5 minutes of stretching",
      "Message": "anything about the day exercise will come here"
    }
  },
  "Day 2": {
      
      
      
      "Message": "anything about the rest day will come here"
    }
  },
  "Analysis": {
          "Analysis": "Detailed analysis"
}
}

Ensure the JSON response adheres to the structure defined above, and populate it with appropriate values. 

Each day must have atleast 7 exercises.
And the youtube Video links must be added to the json format with each exercise.



Format the plans in JSON format. Just send back a json formatted text. 

The plan should take care of compound and isolation exercises theory.

Below are the five general structures for a week. 

Select the ${userInfo.workoutDaysPerWeek} - Day split and add appropriate exercises to it.
Ensure that Rest days are mentioned in the plan if they are in the selected split.

Three-Day Split

Day 1: Push (4 exercises for chest, 3 for shoulders, 2 for triceps)
Day 2: Pull (5 exercises for back, 1 for traps, 3 for biceps)
Day 3: Rest day
Day 4: Rest day
Day 5: Legs/Abs (3 exercises for quads, 1 for hamstring, 1 for glutes, 1 for calves, 3 for abs)
Day 6: Rest day
Day 7: Rest day



Four-Day Split

Day 1: Chest/Biceps (Five exercises for chest, Three for biceps)
Day 2: Back/Triceps (Five exercises for back, Three for triceps)
Day 3: Rest day
Day 4: Shoulders/Abs (Four exercises for shoulders, One for traps, Three for abs)
Day 5: Rest day
Day 6: Legs/Abs (Three exercises for quads, One for hamstring, One for glutes, One for calves, Three for abs)
Day 7: Rest day


Five-Day Split

Day 1: Chest/Abs (5 exercises for chest, 3 for abs)
Day 2: Back (5 exercises for back)
Day 3: Rest day
Day 4: Biceps/Triceps (3 exercises for biceps, 3 for triceps)
Day 5: Rest day
Day 6: Shoulders/Abs (3 exercises for shoulders, 1 for traps, 3 for abs)
Day 7: Legs/Abs (3 exercises for quads, 1 for hamstring, 1 for glutes, 1 for calves, 3 for abs)


Six-Day Split

Day 1: Pull (5 exercises for back, 1 for traps, 3 for biceps)
Day 2: Push (4 exercises for chest, 3 for shoulders, 2 for triceps)
Day 3: Legs/Abs (3 exercises for quads, 1 for hamstring, 1 for glutes, 1 for calves, 3 for abs)
Day 4: Rest day
Day 5: Biceps/Abs (4 exercises for biceps, 3 for abs)
Day 6: Pull (5 exercises for back, 1 for traps, 3 for biceps)
Day 7: Push (4 exercises for chest, 3 for shoulders, 2 for triceps)


Seven-Day Split

Day 1: Pull (5 exercises for back, 1 for traps, 3 for biceps)
Day 2: Push (4 exercises for chest, 3 for shoulders, 2 for triceps)
Day 3: Legs/Abs (3 exercises for quads, 1 for hamstring, 1 for glutes, 1 for calves, 3 for abs)
Day 4: Cardio or Weak Body Part Day (60 minutes of cardio or additional exercises for weak body parts)
Day 5: Pull (5 exercises for back, 1 for traps, 3 for biceps)
Day 6: Push (4 exercises for chest, 3 for shoulders, 2 for triceps)
Day 7: Legs/Abs (3 exercises for quads, 1 for hamstring, 1 for glutes, 1 for calves, 3 for abs)


Ensure that the plan adheres to the user's experience level 
If user doesnt have gym access, ensure that only home exercises are included in the plan.

For each day, include a message to inform the user which muscle group they will be working on.

also send a detailed analysis on how you created the exercise plan for this user and why did you choose a specific day split.



`;

async function generateDietPlan() {
  const apiKey = 'YOUR_OPENAI_API_KEY'; // Replace with your actual API key

  const data = {
    model: "gpt-4o-mini",
    max_tokens: 16384,



    response_format:
    {
      type: "json_object"
    },

    messages: [
      {
        role: "system",
        content: "You are an expert gym instructor and nutritional expert."
      },
      {
        role: "user",
        content: prompt
      },

    ]
  };

  fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${openaiApiKey}`
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(responseJson => {
      console.log(prompt);
      console.log(responseJson.choices[0].message.content);
      // const jsonString = JSON.stringify(responseJson.choices[0].message.content);
      const json = JSON.parse(responseJson.choices[0].message.content);
      generatePdf(json);
      // Process the response as needed
    })
    .catch(error => console.error('Error:', error));


}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function getExercisesByLevelAndGymAccess(exercises) {

  // Filter exercises based on gym access and user level
  if(userInfo.gymAccess==='Gym' && userInfo.beginner === 'Yes'){
    return exercises.filter(exercise => exercise.Beginners === userInfo.beginner && !exercise.Exercise.toLowerCase().includes('resistance band'));
  }
  else if(userInfo.gymAccess==='Home' && userInfo.beginner === 'Yes'){
    return exercises.filter(exercise => exercise.Type === userInfo.gymAccess && exercise.Beginners === userInfo.beginner);
  }
  else if(userInfo.gymAccess==='Home' && userInfo.beginner === 'No'){
    return exercises.filter(exercise => exercise.Type === userInfo.gymAccess);
  }
  else{
    return exercises.filter(exercise => !exercise.Exercise.toLowerCase().includes('resistance band'));

  }
}
function getExercisesForDay(dayPlan, exercises) {
  const selectedExercises = [];

  // Loop through each part (muscle group) for the day
  dayPlan.forEach(part => {
    const { Part, Count } = part;

    
    const filteredExercises = exercises.filter(exercise => {
      
      return exercise.Muscle.toLowerCase() === Part.toLowerCase();
    });

    if (userInfo.gymAccess === 'Gym') {//Gym exercises

      
        if (Part === 'Abs') {
          selectedExercises.push(...selectAbsExercisesForGym(filteredExercises, Count, userInfo.beginner));
        }
        else if (Part === 'Back') {
          selectedExercises.push(...selectBackExercisesForGym(filteredExercises, Count, userInfo.beginner));
        }
        else if (Part === 'Biceps') {
          selectedExercises.push(...selectBicepsExercisesForGym(filteredExercises, Count, userInfo.beginner));
        }
        else if (Part === 'Chest') {
          selectedExercises.push(...selectChestExercisesForGym(filteredExercises, Count, userInfo.beginner));
        }else if (Part === 'Calves') {
          selectedExercises.push(...selectCalvesExercisesForGym(filteredExercises, Count, userInfo.beginner));
        }else if (Part === 'Glutes') {
          selectedExercises.push(...selectGlutesExercisesForGym(filteredExercises, Count, userInfo.beginner));
        }else if (Part === 'Hamstrings') {
          selectedExercises.push(...selectHamstringsExercisesForGym(filteredExercises, Count, userInfo.beginner));
        }else if (Part === 'Quads') {
          selectedExercises.push(...selectQuadsExercisesForGym(filteredExercises, Count, userInfo.beginner));
        }
        else if (Part === 'Shoulder') {
          selectedExercises.push(...selectShoulderExercisesForGym(filteredExercises, Count, userInfo.beginner));
        }else if (Part === 'Traps') {
          selectedExercises.push(...selectTrapsExercisesForGym(filteredExercises, Count, userInfo.beginner));
        }
        else if (Part === 'Triceps') {
          selectedExercises.push(...selectTricepsExercisesForGym(filteredExercises, Count, userInfo.beginner));
        }
      
    }
    else {//Home Exercises
        if (Part === 'Abs') {
          selectedExercises.push(...selectAbsExercisesForHome(filteredExercises, Count, userInfo.beginner));
        }
        else if (Part === 'Back') {
          selectedExercises.push(...selectBackExercisesForHome(filteredExercises, Count, userInfo.beginner));
        }
        else if (Part === 'Biceps') {
          selectedExercises.push(...selectBicepsExercisesForHome(filteredExercises, Count, userInfo.beginner));
        }
        else if (Part === 'Chest') {
          selectedExercises.push(...selectChestExercisesForHome(filteredExercises, Count, userInfo.beginner));
        }else if (Part === 'Calves') {
          selectedExercises.push(...selectCalvesExercisesForHome(filteredExercises, Count, userInfo.beginner));
        }else if (Part === 'Glutes') {
          selectedExercises.push(...selectGlutesExercisesForGym(filteredExercises, Count, userInfo.beginner));
        }else if (Part === 'Hamstrings') {
          selectedExercises.push(...selectHamstringsExercisesForGym(filteredExercises, Count, userInfo.beginner));
        }else if (Part === 'Quads') {
          selectedExercises.push(...selectQuadsExercisesForGym(filteredExercises, Count, userInfo.beginner));
        }
        else if (Part === 'Shoulder') {
          selectedExercises.push(...selectShoulderExercisesForGym(filteredExercises, Count, userInfo.beginner));
        }else if (Part === 'Traps') {
          selectedExercises.push(...selectTrapsExercisesForGym(filteredExercises, Count, userInfo.beginner));
        }
        else if (Part === 'Triceps') {
          selectedExercises.push(...selectTricepsExercisesForGym(filteredExercises, Count, userInfo.beginner));
        }
      
      // // Select the required number of exercises for that muscle group
      // const exercisesForPart = filteredExercises.slice(0, Count);

      // // Add the selected exercises to the overall plan for the day
      // selectedExercises.push(...exercisesForPart);
    
  }

  });

  return selectedExercises;
}
function selectAbsExercisesForGym(exercises, Count, beginner){
  let selectedExercises = []
  if(beginner == 'Yes'){
    const lowerAbs =shuffleArray(exercises.filter(exercise => exercise.Target === 'Lower abs'));
    const thirdExercise =shuffleArray(exercises.filter(exercise => exercise.Target !== 'Lower abs'));
  
    
    // Select exercises according to the formula
    selectedExercises = [
      ...lowerAbs.slice(0, 1), 
      ...lowerAbs.slice(1, 2), 
      ...thirdExercise.slice(0, 1)
      
    ]; 
  }
  else{

  const lowerAbs =shuffleArray(exercises.filter(exercise => exercise.Target === 'Lower abs'));
  const thirdExercise =shuffleArray(exercises.filter(exercise => exercise.Target !== 'Lower abs'));

  
  // Select exercises according to the formula
  selectedExercises = [
    ...lowerAbs.slice(0, 1), 
    ...lowerAbs.slice(1, 2), 
    ...thirdExercise.slice(0, 1)
    
  ];
  }
  if(selectedExercises.length > Count){
    selectedExercises.splice(Count-1 , 1);
  }
  return selectedExercises;
}
function selectAbsExercisesForHome(exercises, Count, beginner){
  let selectedExercises =[];
  if(beginner == 'Yes'){
    const overallAbs =shuffleArray(exercises.filter(exercise => exercise.Target === 'Overall abs'));
  const thirdExercise =shuffleArray(exercises.filter(exercise => exercise.Target !== 'Overall abs'));

  
  // Select exercises according to the formula
  selectedExercises = [
    ...overallAbs.slice(0, 1), 
    ...overallAbs.slice(1, 2), 
    ...thirdExercise.slice(0, 1)
    
  ];
  }
  else{

  const overallAbs =shuffleArray(exercises.filter(exercise => exercise.Target === 'Overall abs'));
  const thirdExercise =shuffleArray(exercises.filter(exercise => exercise.Target !== 'Overall abs'));

  
  // Select exercises according to the formula
  selectedExercises = [
    ...overallAbs.slice(0, 1), 
    ...overallAbs.slice(1, 2), 
    ...thirdExercise.slice(0, 1)
    
  ];
  }
  if(selectedExercises.length > Count){
    selectedExercises.splice(Count-1 , 1);
  }
  return selectedExercises;
}
function selectBackExercisesForGym(exercises, Count,beginner){
  let selectedExercises = []
  let upperLatsCompound = []
  if(beginner === 'Yes'){

    const overallCompound = shuffleArray(exercises.filter(exercise => exercise.Category === 'Compound' && exercise.Target === 'Overall back'));
    if(userInfo.pullUpsCapability === 'None'){
      upperLatsCompound = shuffleArray(exercises.filter(exercise => exercise.Exercise === 'Inverted pull ups'));
    }
    else{
      upperLatsCompound = shuffleArray(exercises.filter(exercise => exercise.Category === 'Compound' && exercise.Target === 'Upper back/lats'));
    }
    const upperLatsIsolation = shuffleArray(exercises.filter(exercise => exercise.Category === 'Isolation' && exercise.Target === 'Upper back/lats'));
  
    const midBackIsolation = shuffleArray(exercises.filter(exercise => exercise.Category === 'Isolation' && exercise.Target === 'Mid back'));
    const lowerBackIsolation = shuffleArray(exercises.filter(exercise => exercise.Category === 'Isolation' && exercise.Target === 'Lower back'));
  
    // Select exercises according to the formula
    selectedExercises = [
      ...overallCompound.slice(0, 1), 
      ...upperLatsCompound.slice(0, 1),
      ...upperLatsIsolation.slice(0, 1), 
      ...midBackIsolation.slice(0, 1), 
      ...lowerBackIsolation.slice(0, 1)
    ];
    if(selectedExercises.length > Count){
      selectedExercises.splice(Count-1 , 1);
    }
  }
  else{

    const overallCompound = shuffleArray(exercises.filter(exercise => exercise.Category === 'Compound' && exercise.Target === 'Overall back'));
    if(userInfo.pullUpsCapability === 'None'){
      upperLatsCompound = shuffleArray(exercises.filter(exercise => exercise.Exercise === 'Inverted pull ups'));
    }
    else{
      upperLatsCompound = shuffleArray(exercises.filter(exercise => exercise.Category === 'Compound' && exercise.Target === 'Upper back/lats'));
    }
    const upperLatsIsolation = shuffleArray(exercises.filter(exercise => exercise.Category === 'Isolation' && exercise.Target === 'Upper back/lats'));
  
    const midBackIsolation = shuffleArray(exercises.filter(exercise => exercise.Category === 'Isolation' && exercise.Target === 'Mid back'));
    const lowerBackIsolation = shuffleArray(exercises.filter(exercise => exercise.Category === 'Isolation' && exercise.Target === 'Lower back'));
  
    // Select exercises according to the formula
    selectedExercises = [
      ...overallCompound.slice(0, 1), 
      ...upperLatsCompound.slice(0, 1),
      ...upperLatsIsolation.slice(0, 1), 
      ...midBackIsolation.slice(0, 1), 
      ...lowerBackIsolation.slice(0, 1)
    ];
    if(selectedExercises.length > Count){
      selectedExercises.splice(Count-1 , 1);
    }
  }
  return selectedExercises;
}
function selectBackExercisesForHome(exercises, Count,beginner){
  const shuffledExercises = shuffleArray(exercises);
  const selectedExercises = shuffledExercises.slice(0, Count);

  return selectedExercises;
}
function selectBicepsExercisesForGym(exercises, Count, beginner){
  let selectedExercises = []
  if(beginner === 'Yes'){
    const curlExercise = shuffleArray(exercises.filter(exercise => exercise.Exercise.toLowerCase().includes('curl')));
    const hammerExercise = shuffleArray(exercises.filter(exercise => exercise.Exercise.toLowerCase().includes('hammer')));
    const preacherExercise = shuffleArray(exercises.filter(exercise => exercise.Exercise.toLowerCase().includes('preacher')));
  // Select exercises according to the formula
  selectedExercises = [
    ...curlExercise.slice(0, 1), 
    ...hammerExercise.slice(0, 1), 
    ...preacherExercise.slice(0, 1)
    
  ];  

  }
  else{
    const exercisesForFirstNumber = shuffleArray(exercises.filter(exercise => exercise.Exercise.toLowerCase() === 'incline dumbbell curl (bench)' || exercise.Exercise.toLowerCase() === 'bicep standing alternate dumbbell curl' || exercise.Exercise.toLowerCase() === 'barbell curl ez (curl) bar'));
    const exercisesForSecondNumber = shuffleArray(exercises.filter(exercise => exercise.Exercise.toLowerCase().includes('hammer')));
    const exercisesForThirdNumber = shuffleArray(exercises.filter(exercise => exercise.Exercise.toLowerCase() === 'dumbbell preacher curl' || exercise.Exercise.toLowerCase() === 'barbell preacher curl' || exercise.Exercise.toLowerCase() === 'machine preacher curl'));
  // Select exercises according to the formula
  selectedExercises = [
    ...exercisesForFirstNumber.slice(0, 1), 
    ...exercisesForSecondNumber.slice(0, 1), 
    ...exercisesForThirdNumber.slice(0, 1)
    
  ];  
}
return selectedExercises;
 
  
}
function selectBicepsExercisesForHome(exercises, Count, beginner){
  const shuffledExercises = shuffleArray(exercises);
  const selectedExercises = shuffledExercises.slice(0, Count);

  return selectedExercises;
}
function selectCalvesExercisesForGym(exercises, Count, beginner){
  
  const calvesExercise =shuffleArray(exercises);
  // Select exercises according to the formula
  const selectedExercises = [
    ...calvesExercise.slice(0, 1),   
  ];
  
  return selectedExercises;
}
function selectCalvesExercisesForHome(exercises, Count, beginner){
 
  const calvesExercise =shuffleArray(exercises);
  // Select exercises according to the formula
  const selectedExercises = [
    ...calvesExercise.slice(0, 1),   
  ];
  
  return selectedExercises;
}
function selectChestExercisesForGym(chestExercises, Count , beginner) {
  
    const midChestCompound = shuffleArray(chestExercises.filter(exercise => exercise.Category === 'Compound' && exercise.Target === 'Mid chest'));

    const upperChestCompound = shuffleArray(chestExercises.filter(exercise => exercise.Category === 'Compound' && exercise.Target === 'Upper chest'));
    const lowerChestCompound = shuffleArray(chestExercises.filter(exercise => exercise.Category === 'Compound' && exercise.Target === 'Lower chest'));
  
    const overallChestIsolation = shuffleArray(chestExercises.filter(exercise => exercise.Category === 'Isolation' && exercise.Target === 'Overall chest'));
    const upperChestIsolation = shuffleArray(chestExercises.filter(exercise => exercise.Category === 'Isolation' && exercise.Target === 'Upper chest'));
  
    // Select exercises according to the formula
    const selectedExercises = [
      ...upperChestCompound.slice(0, 1), // 1 upper chest compound
      ...midChestCompound.slice(0, 1),  // 1 mid chest compound
      ...lowerChestCompound.slice(0, 1), // 1 lower chest compound
      ...overallChestIsolation.slice(0, 1), // 1 overall chest isolation
      ...upperChestIsolation.slice(0, 1)  // 1 upper chest isolation
    ];
  
  
    if(selectedExercises.length > Count){
      selectedExercises.splice(Count-1 , 1);
    }
    
    return selectedExercises;
  }

function selectChestExercisesForHome(chestExercises, Count , beginner) {
 
}
function selectGlutesExercisesForGym(exercises, Count, beginner){
  
  const lowerAbs =shuffleArray(exercises.filter(exercise => exercise.Target === 'Lower abs'));
  const thirdExercise =shuffleArray(exercises.filter(exercise => !exercise.Target === 'Lower abs'));

  
  // Select exercises according to the formula
  const selectedExercises = [
    ...lowerAbs.slice(0, 1), 
    ...lowerAbs.slice(1, 2), 
    ...thirdExercise.slice(0, 1)
    
  ];
  if(selectedExercises.length > Count){
    selectedExercises.splice(Count-1 , 1);
  }
  return selectedExercises;
}
function selectHamstringsExercisesForGym(exercises, Count, beginner){
  
  const lowerAbs =shuffleArray(exercises.filter(exercise => exercise.Target === 'Lower abs'));
  const thirdExercise =shuffleArray(exercises.filter(exercise => !exercise.Target === 'Lower abs'));

  
  // Select exercises according to the formula
  const selectedExercises = [
    ...lowerAbs.slice(0, 1), 
    ...lowerAbs.slice(1, 2), 
    ...thirdExercise.slice(0, 1)
    
  ];
  if(selectedExercises.length > Count){
    selectedExercises.splice(Count-1 , 1);
  }
  return selectedExercises;
}
function selectQuadsExercisesForGym(exercises, Count, beginner){
  
  const lowerAbs =shuffleArray(exercises.filter(exercise => exercise.Target === 'Lower abs'));
  const thirdExercise =shuffleArray(exercises.filter(exercise => !exercise.Target === 'Lower abs'));

  
  // Select exercises according to the formula
  const selectedExercises = [
    ...lowerAbs.slice(0, 1), 
    ...lowerAbs.slice(1, 2), 
    ...thirdExercise.slice(0, 1)
    
  ];
  if(selectedExercises.length > Count){
    selectedExercises.splice(Count-1 , 1);
  }
  return selectedExercises;
}


function selectShoulderExercisesForGym(exercises, Count){
  const overallCompound = exercises.filter(exercise => exercise.Category === 'Compound' && exercise.Target === 'Overall shoulders');

  const sideDelts = exercises.filter(exercise => exercise.Target === 'Side delts');
  const rearDelts = exercises.filter(exercise => exercise.Target === 'Rear delts');
  const rearDeltsSecond = exercises.filter(exercise => exercise.Target === 'Rear delts');
  


  // Select exercises according to the formula
  const selectedExercises = [
    ...overallCompound.slice(0, 1), 
    ...sideDelts.slice(0, 1),
    ...rearDelts.slice(0, 1), 
    ...rearDeltsSecond.slice(1, 2), 
    
  ];
  if(selectedExercises.length > Count){
    selectedExercises.splice(Count-1 , 1);
  }
  return selectedExercises;
}
function selectTrapsExercisesForGym(exercises, Count, beginner){
  
  const lowerAbs =shuffleArray(exercises.filter(exercise => exercise.Target === 'Lower abs'));
  const thirdExercise =shuffleArray(exercises.filter(exercise => !exercise.Target === 'Lower abs'));

  
  // Select exercises according to the formula
  const selectedExercises = [
    ...lowerAbs.slice(0, 1), 
    ...lowerAbs.slice(1, 2), 
    ...thirdExercise.slice(0, 1)
    
  ];
  if(selectedExercises.length > Count){
    selectedExercises.splice(Count-1 , 1);
  }
  return selectedExercises;
}
function selectTricepsExercisesForGym(exercises, Count, beginner){
  
  const lowerAbs =shuffleArray(exercises.filter(exercise => exercise.Target === 'Lower abs'));
  const thirdExercise =shuffleArray(exercises.filter(exercise => !exercise.Target === 'Lower abs'));

  
  // Select exercises according to the formula
  const selectedExercises = [
    ...lowerAbs.slice(0, 1), 
    ...lowerAbs.slice(1, 2), 
    ...thirdExercise.slice(0, 1)
    
  ];
  if(selectedExercises.length > Count){
    selectedExercises.splice(Count-1 , 1);
  }
  return selectedExercises;
}
async function createExercisePlan(exercises, splitData) {
  const exercisePlan = [];

  let processedDays = [];

  // Iterate through each day in the split data
  splitData.forEach(day => {
    const detailsSet = new Set();

    // For Rest days, skip exercise selection
    if (day.Part.toLowerCase() === 'rest') {
      exercisePlan.push({
        Day: day.Day,
        Exercises: 'Rest Day'
      });
    } else {
      // Filter the split data for the day
      const dayPlan = splitData.filter(d => d.Day === day.Day && !processedDays.includes(d.Day));
      dayPlan.forEach(item => {
        detailsSet.add(item.Details);
      })
      const uniqueDetails = [...detailsSet];
      if (dayPlan.length > 0) {
        processedDays.push(day.Day);
        // Get the exercises for the day based on muscle groups
        const exercisesForDay = getExercisesForDay(dayPlan, exercises);

        // Add the day's plan to the overall exercise plan
        exercisePlan.push({
          Day: day.Day,
          Exercises: exercisesForDay,
          Focus: uniqueDetails
        });
      }
    }
  });

  return exercisePlan;

}

async function readCsvs() {
  const exercises = readExercises();
  //  const split = readSplits();

  //  createExercisePlan(split , exercises);
}

async function readSplits(exercises) {
  const filePath = 'splits.csv'; // path to your CSV file

  // Use fs to read the CSV file contents
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Parse the CSV content using Papa.parse
  Papa.parse(fileContent, {
    header: true, // If the CSV file has a header row
    complete: function (results) {
      const splits = results.data; // Array of parsed objects from CSV

      const selectedSplit = filterBySplit(userInfo.workoutDaysPerWeek, splits);

      const plan = createExercisePlan(exercises, selectedSplit).then(plan => generatePdf(plan))
        .catch(err => console.error('Error:', err));
      console.log(JSON.stringify(plan, null, 2));
      // console.log(createExercisePlan(exercises, selectedSplit));

      // specificSplit.forEach(item => console.log(item.Split, item.Day , item.Part , item.Count, item.Details));


      // Perform your operations on the list of exercises here
    }
  });
}
async function readExercises() {
  const filePath = 'exercisesheet.csv'; // path to your CSV file

  // Use fs to read the CSV file contents
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Parse the CSV content using Papa.parse
  Papa.parse(fileContent, {
    header: true, // If the CSV file has a header row
    complete: function (results) {
      const exercises = results.data; // Array of parsed objects from CSV
      const selectedExercises = getExercisesByLevelAndGymAccess(exercises);
      readSplits(selectedExercises);
      // console.log(selectedExercises);   
      // console.log(exercises);
      // createExercisePlan(exercises);
      // Perform your operations on the list of exercises here
    }
  });

}
function processExercises(exercises) {
  exercises.forEach(exercise => {
    // Example: Log the exercise name
    console.log(`Exercise: ${exercise}`);
  });
}

function filterBySplit(splitNumber, splits) {
  return splits.filter(splits => splits.Split === splitNumber);
}
readCsvs();
// function processDietPlan(plan) {
// 	generatePdf(plan);
// }


// Call the function to generate the diet plan
// generateDietPlan();


// generatePdf();
