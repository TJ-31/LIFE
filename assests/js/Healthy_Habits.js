function checkPlanner () {
    // (A) Get elements
    var planner = document.getElementById('planner').value;
    var calories = document.getElementById('calories').value;
    var meals = document.getElementById('meals').value;
  
    // Show Results
    //if user chooses Anything - <= 500 calories or > 500 < 999 calories
    if (planner == "anything" && calories <= 500 && meals == "1") {
      document.getElementById('results').innerHTML = "Breakfast -- Egg and cheese breakfat sandwich. (261 calories)";
    } 
    else if (planner == "anything" && calories > 500 || calories <= 999 && meals == "1"){
      document.getElementById('results').innerHTML = "Breakfast -- Oatmeal banana peanut butter chocolate shake. (670 calories)";
    }
    else if (planner == "anything" && calories > 500 || calories <= 999 && meals == "2") {
      document.getElementById('results').innerHTML = "Breakfast -- Southwestern eggs. Oranges. (573 calories). \n Snack -- Turkey lettuce roolups. Banana. (224 calories)";
    } 
    else if (planner == "anything" && calories <= 500 && meals == "2") {
      document.getElementById('results').innerHTML = "Breakfast -- Spinach and mushroom breakfast scramble. (192 calories) \n Snack -- Banana. (105 calories)";
    }
    else if (planner == "anything" && calories <= 500 && meals == "3") {
      document.getElementById('results').innerHTML = "Breakfast -- Spinach and mushroom scramble (192 calories) \n Snack -- Apple (95 calories) \n Snack -- Cheese slices (115 calories)";
    } 
    else if (planner == "anything" && calories > 500 || calories <= 999 && meals == "3"){
      document.getElementById('results').innerHTML = "Breakfast -- Southwestern eggs (360 calories) \n Lunch -- Peanut butter celery (209 calories) \n Dinner -- Plain tuna salad with banana (284 calories)";
    }
    else if (planner == "anything" && calories > 500 || calories <= 999 && meals == "4") {
      document.getElementById('results').innerHTML = "Breakfast -- Southwestern eggs. Oranges (573 calories) \n Lunch -- Turkey lettuce roolups and Banana (224 calories) \n Snack -- Almond -- (40 calories) \n Dinner -- Plain tuna salad (180 calories)";
    } 
    else if (planner == "anything" && calories <= 500 && meals == "4") {
      document.getElementById('results').innerHTML = "Breakfast -- Spinach and mushroom breakfast scramble (192 calories) \n Snack -- Banana (105 calories) or Oranges (62 calories) or cheese slices (115 calories)";
    }

    //if user chooses Anything - >= 1000 calories or <= 1999 calories
    else if (planner == "anything" && calories >= 1000 || calories <= 1999 && meals == "1") {
      document.getElementById('results').innerHTML = "Breakfast -- Peanut butter and honey oatmeal (1417 calories)";
    }  
    else if (planner == "anything" && calories >= 1000 || calories <= 1999 && meals == "2") {
      document.getElementById('results').innerHTML = "Breakfast -- Vegetabel 3 egg scramble (1023 calories). \n Snack -- Grapes. Yoghurt & strawberries (469 calories)";
    } 
    else if (planner == "anything" && calories >= 1000 || calories <= 1999 && meals == "3") {
      document.getElementById('results').innerHTML = "Breakfast -- Gordan Ramsay's Scrambled Eggs (890 calories). \n Snack -- Corn flakes strawberries (490 calories) \n Dinner -- Chocolate peanut protein shake (1615 calories)";
    } 
    else if (planner == "anything" && calories >= 1000 || calories <= 1999 && meals == "4") {
      document.getElementById('results').innerHTML = "Breakfast -- Egg toastie with milk or juice. \nLunch -- Lamb and grilled vegetable salad. \nEvening snack -- Apple and peanut butter. \nDinner -- Sumac chicken, & burghul salad";
    }

    //if user chooses Anything - >= 2000 calories or <= 2500 calories
    else if (planner == "anything" && calories >= 2000 || calories <= 2500 && meals == "1") {
      document.getElementById('results').innerHTML = "Chocolate peanut protein shake. (2153 Calories)";
    }
    else if (planner == "anything" && calories >= 2000 || calories <= 2500  && meals == "2") {
      document.getElementById('results').innerHTML = "Breakfast -- Turkey and cheese omlet. Whole Wheat toast (1361 calories) \n Snack -- Apples and almond butter. Oranges (644 calories)";
    }
    else if (planner == "anything" && calories >= 2000 || calories <= 2500 && meals == "3") {
      document.getElementById('results').innerHTML = "Breakfast -- Sumac chicken, & burghul salad. \nLunch -- Salmon with noodles & sugar snap peas. \nDinner -- Lamb and grilled vegetable salad";
    }
    else if (planner == "anything" && calories >= 2000 || calories <= 2500 && meals == "4") {
      document.getElementById('results').innerHTML = "Breakfast -- Sumac chicken, & burghul salad. \nLunch -- Salmon with noodles & sugar snap peas. \nEvening snack -- Lamb kofta and spicy green hummus. \nDinner -- Chicken and grilled vegetable salad";
    }

    //if user chooses Paleo - <= 500 calories or > 500 or <= 999 calories
    else if (planner == "paleo" && calories <= 500 && meals == "1") {
      document.getElementById('results').innerHTML = "Breakfast -- Banana Bread.";
    }
    else if (planner == "paleo" && calories > 500 || calories <= 999 && meals == "1") {
      document.getElementById('results').innerHTML = "Breakfast -- Crispy sweet potato paleo nachos.";
    }
    else if (planner == "paleo" && calories <= 500 && meals == "2") {
      document.getElementById('results').innerHTML = "Breakfast -- Pice de gallo egg white cups (252 calories). \n Snack -- Arugula salad with an apple (155 calories)";
    }
    else if (planner == "paleo" && calories > 500 || calories <= 999 && meals == "2") {
      document.getElementById('results').innerHTML = "Breakfast -- Protein southwest scramble (671 calories) \n Snack -- Tuna avacado salad (248 calories)";
    }
    else if (planner == "paleo" && calories <= 500 && meals == "3") {
      document.getElementById('results').innerHTML = "Ham aand egg mushroom cups (188 calories) \n Lunch -- Tuna Avacado Salad (124 claories) \n Snacks -- Apple (95 calories)";
    }
    else if (planner == "paleo" && calories > 500 || calories <= 999 && meals == "3") {
      document.getElementById('results').innerHTML = "Egg baked in avacado (476 calories) \n Lunch -- Tuna stuffed pepper (250 claories) \n Dinner -- Turkey lettuce rollups (214 calories)";
    }
    else if (planner == "paleo" && calories <= 500 && meals == "4") {
      document.getElementById('results').innerHTML = "Breakfast -- Ham aand egg mushroom cups (277 calories) \n Snack -- Apple (95 calories) \n Lunch -- Turkey lettuce rollups (70 calories) \n Snacks -- Strawberries (46 calories)";
    }
    else if (planner == "paleo" && calories > 500 || calories <= 999 && meals == "4") {
      document.getElementById('results').innerHTML = "Breakfast -- Ham aand egg mushroom cups (377 calories). \n Snack -- Fruit salad (133 calories) or Tuna avacado salad (130 calories) or Apple (95 calories)";
    }

    //if user chooses Paleo - >= 1000 calories or <= 1999 calories
    else if (planner == "paleo" && calories >= 1000 || calories <= 1999 && meals == "1") {
      document.getElementById('results').innerHTML = "Breakfast -- Hummus eggs. Apple. (1390 calories)";
    }
    else if (planner == "paleo" && calories >= 1000 || calories <= 1999 && meals == "2") {
      document.getElementById('results').innerHTML = "Breakfast -- Paleo multi-seed bread. \nLunch -- Asparagus quiche with kale pesto.";
    }
    else if (planner == "paleo" && calories >= 1000 || calories <= 1999 && meals == "3") {
      document.getElementById('results').innerHTML = "Breakfast -- Paleo multi-seed bread. \nLunch -- Asparagus quiche with kale pesto. \nDinner -- Creamy Potato Chowder with Shrimp and Bacon.";
    }
    else if (planner == "paleo" && calories >= 1000 || calories <= 1999 && meals == "4") {
      document.getElementById('results').innerHTML = "Breakfast -- Paleo multi-seed bread. \nLunch -- Asparagus quiche with kale pesto. \nEvening snack -- Waffle Iron Sweet Potato Hash Browns. \nDinner -- Creamy Potato Chowder with Shrimp and Bacon.";
    }

    //if user chooses Paleo - >= 2000 calories or <= 2500 calories
    else if (planner == "paleo" && calories >= 2000 || calories <= 2500 && meals == "1") {
      document.getElementById('results').innerHTML = "Breakfast -- Powerball smoothie. (2111 calories)";
    }
    else if (planner == "paleo" && calories >= 2000 || calories <= 2500 && meals == "2") {
      document.getElementById('results').innerHTML = "Breakfast -- Hummus eggs with an apple (1570 calories) \n Lunch -- Tuna stuffed pepper with alomonds (752 calories)";
    }
    else if (planner == "paleo" && calories >= 2000 || calories <= 2500 && meals == "3") {
      document.getElementById('results').innerHTML = "Breakfast -- Strawberry, banana protein smoothie, sunflower seed. \nLunch -- Pan-fried salmon, bacon zucchini noodles, olive oil drizzled sugar snap peas. \nDinner -- Honey and herb chicken wings, olive oil drizzled brocoli.";
    }
    else if (planner == "paleo" && calories >= 2000 || calories <= 2500 && meals == "4") {
      document.getElementById('results').innerHTML = "Breakfast -- Strawberry, banana protein smoothie, sunflower seed. \nLunch -- Pan-fried salmon, bacon zucchini noodles, olive oil drizzled sugar snap peas. \nEvening snack -- Tuna pickle boats, roasted almonds. \nDinner -- Honey and herb chicken wings, olive oil drizzled brocoli.";
    }

    //if user chooses Ketogenic - <= 500 calories or > 500 or <= 999 calories
    else if (planner == "ketogenic" && calories <= 500 && meals == "1") {
      document.getElementById('results').innerHTML = "Breakfast -- Pesto Scrambled Eggs with bacon (376 calories)";
    }
    else if (planner == "ketogenic" && calories > 500 || calories <= 999 && meals == "1") {
      document.getElementById('results').innerHTML = "Breakfast -- Gordan Ramsay's Scrambled Eggs (890 calories)";
    }
    else if (planner == "ketogenic" && calories <= 500 && meals == "2") {
      document.getElementById('results').innerHTML = "Breakfast -- Spinach, ham and egg muffin (241 calories). \n Turkey lettucee rollups (59 calories)";
    }
    else if (planner == "ketogenic" && calories > 500 || calories <= 999 && meals == "2") {
      document.getElementById('results').innerHTML = "Breakfast -- Southwestern eggs with bacon (612 calories) \n Caprese salad -- (303 calories).";
    }
    else if (planner == "ketogenic" && calories <= 500 && meals == "3") {
      document.getElementById('results').innerHTML = "Breakfast - Boiled eggs (144 calories). \n Snacks -- Turkey lettucee rollups with cheese slices (174 calories) \n Dinner -- Banana (105 calories)";
    }
    else if (planner == "ketogenic" && calories > 500 || calories <= 999 && meals == "3") {
      document.getElementById('results').innerHTML = "Breakfast -- Turkey lettucee rollups with cheese slices (174 calories) \n Snacks -- Almonds (164 calories) or Cheese slices (70 calories)";
    }
    else if (planner == "ketogenic" && calories <= 500 && meals == "4") {
      document.getElementById('results').innerHTML = "Breakfast -- Bacon (200 calories).\n Lunch -- Turkey Lettuce rollups with strawberries (59 calories) \n Evening Snacks -- Cheese slices (115 calories) \n Dinner -- Strawberries (46 calories)";
    }
    else if (planner == "ketogenic" && calories > 500 || calories <= 999 && meals == "4") {
      document.getElementById('results').innerHTML = "Breakfast -- Pesto scrambled eggs with bacon (275 calories) \n Lunch -- Turkey Lettuce rollups with strawberries (165 calories) \n Evening snacks -- Keto Pancakes with Keto Hot Chocolate \n Dinner -- Almonds (150 calories)";
    }

    //if user chooses Ketogenic - >= 1000 calories or <= 1999 calories
    else if (planner == "ketogenic" && calories >= 1000 || calories <= 1999 && meals == "1") {
      document.getElementById('results').innerHTML = "Breakfast -- Gordan Ramsay's Scrambled Eggs (890 calories). \n Snack -- Corn flakes strawberries. (490 calories)";
    }
    else if (planner == "ketogenic" && calories >= 1000 || calories <= 1999 && meals == "2") {
      document.getElementById('results').innerHTML = "Breakfast -- Keto breakfast with fried eggs, tomato and cheese. You can also have a glass of juice with this. \nLunch -- Italian keto meatballs with mozzarella cheese.";
    }
    else if (planner == "ketogenic" && calories >= 1000 || calories <= 1999 && meals == "3") {
      document.getElementById('results').innerHTML = "Breakfast -- Keto breakfast with fried eggs, tomato and cheese. You can also have a glass of juice with this..\n Lunch -- Italian keto meatballs with mozzarella cheese. \nDinner -- Pork shoulder chops with cauliflower au gratin.";
    }
    else if (planner == "ketogenic" && calories >= 1000 || calories <= 1999 && meals == "4") {
      document.getElementById('results').innerHTML = "Breakfast -- Keto breakfast with fried eggs, tomato and cheese. You can also have a glass of juice with this.. \nLunch -- Italian keto meatballs with mozzarella cheese. \nEvening snack -- Capicola egg cups. Dinner -- Pork shoulder chops with cauliflower au gratin.";
    }

    //if user chooses Ketogenic - >= 2000 calories or <= 2500 calories
    else if (planner == "ketogenic" && calories >= 2000 || calories <= 2500&& meals == "1") {
      document.getElementById('results').innerHTML = "Breakfast -- Gordan Ramsay's Scrambled Eggs witth bacon (2080 calories)";
    }
    else if (planner == "ketogenic" && calories >= 2000 || calories <= 2500&& meals == "2") {
      document.getElementById('results').innerHTML = "Breakfast -- Gordan Ramsay's Scrambled Eggs witth bacon (2080 calories). \nLunch -- Grapes (104 calories).";
    }
    else if (planner == "ketogenic" && calories >= 2000 || calories <= 2500&& meals == "3") {
      document.getElementById('results').innerHTML = "Breakfast -- Cheese crusted keto omlet. \nLunch -- Keto zucchini lasagna. \nDinner -- Keto pesto chicken casserole with feta cheese and olives.";
    }
    else if (planner == "ketogenic" && calories >= 2000 || calories <= 2500&& meals == "4") {
      document.getElementById('results').innerHTML = "Breakfast -- Cheese crusted keto omlet. \nLunch -- Keto zucchini lasagna. \nEvening snacks -- Capicola egg cups. \nDinner -- Keto pesto chicken casserole with feta cheese and olives.";
    }

    //if user chooses Vegetarian - <= 500 calories or >500 or <= 999 calories
    else if (planner == "vegetarian" && calories <= 500 && meals == "1") {
      document.getElementById('results').innerHTML = "Breakfast - -Kale, tomato & poached egg on toast.";
    }
    else if (planner == "vegetarian" && calories > 500 || calories <= 999 && meals == "1") {
      document.getElementById('results').innerHTML = "Breakfast -- Smoky beans & baked eggs with raspberries, almond and oat cookies.";
    }
    else if (planner == "vegetarian" && calories <= 500 && meals == "2") {
      document.getElementById('results').innerHTML = "Breakfast -- Spinach and mushroom breakfast scramble (192 calories). \n Snack -- Arugula salad with strawberries (107 calories)";
    }
    else if (planner == "vegetarian" && calories > 500 || calories <= 999 && meals == "2") {
      document.getElementById('results').innerHTML = "Breakfast -- Smoky beans & baked eggs with raspberries, almond and oat cookies. \n Snack -- Peppered cottage cheese (285 calories)";
    }
    else if (planner == "vegetarian" && calories <= 500 && meals == "3") {
      document.getElementById('results').innerHTML = "Breakfast -- Carrot and hummus (175 calories) \n Snack -- Apple (95 calories). \n Snack -- Arugula salad with strawberries (107 calories)";
    }
    else if (planner == "vegetarian" && calories > 500 || calories <= 999 && meals == "3") {
      document.getElementById('results').innerHTML = "Breakfast -- Egg white avacado and tomatoe scramble (454 calories) \n Snack -- Carrot and hummus (175 calories) \n Snack -- Apple (95 calories).";
    }
    else if (planner == "vegetarian" && calories <= 500 && meals == "4") {
      document.getElementById('results').innerHTML = "Breakfast -- Spinach, swiss and egg omelet (126 calories). \n Snack -- Grapes (104 calories). \n Snack -- Oranges (62 calories) \n Dinner -- Arugula salad with strawberries (107 calories).";
    }
    else if (planner == "vegetarian" && calories > 500 || calories <= 999 && meals == "4") {
      document.getElementById('results').innerHTML = "Breakfast -- Strawberry oatmeal (314 calories) \n Lunch -- Carrot and hummus (175 calories) \n Snack -- Apple (95 calories). \n Dinner -- Arugula salad with strawberries (107 calories)";
    }

    //if user chooses Vegetarian - >= 1000 calories or <= 1999 calories
    else if (planner == "vegetarian" && calories >= 1000 && meals == "1") {
      document.getElementById('results').innerHTML = "Breakfast -- Vegetable 3 scrambled eggs. (1534 Calories)";
    }
    else if (planner == "vegetarian" && calories >= 1000 || calories <= 1999 && meals == "2") {
      document.getElementById('results').innerHTML = "Breakfast -- Smoky beans & baked eggs with raspberries, almond and oat cookies. \nLunch -- Sweet potato hash, eggs & smashed avo.";
    }
    else if (planner == "vegetarian" && calories >= 1000 || calories <= 1999 && meals == "3") {
      document.getElementById('results').innerHTML = "Breakfast -- Smoky beans & baked eggs with raspberries, almond and oat cookies. \nLunch -- Sweet potato hash, eggs & smashed avo. \nDinner -- Halloumi & quinoa fattoush.";
    }
    else if (planner == "vegetarian" && calories >= 1000 || calories <= 1999 && meals == "4") {
      document.getElementById('results').innerHTML = "Breakfast -- Smoky beans & baked eggs with raspberries, almond and oat cookies. \nLunch -- Sweet potato hash, eggs & smashed avo. \nEvening snack -- raspberries, almond and oat cookies. \nDinner -- Halloumi & quinoa fattoush.";
    }

    //if user chooses Vegetarian - >= 1000 calories or <= 1999 calories
    else if (planner == "vegetarian" && calories >= 2000 || calories <= 2500&& meals == "1") {
      document.getElementById('results').innerHTML = "Breakfast -- Oatmeal banana protein shake (2185).";
    }
    else if (planner == "vegetarian" && calories >= 2000 || calories <= 2500&& meals == "2") {
      document.getElementById('results').innerHTML = "Breakfast -- Akoori (Indian scrambled eggs). \nLunch -- Peanut butter and jelly (736 calories).";
    }
    else if (planner == "vegetarian" && calories >= 2000 || calories <= 2500&& meals == "3") {
      document.getElementById('results').innerHTML = "Breakfast -- Akoori (Indian scrambled eggs). \nLunch -- Bean & halloumi stew. \nDinner -- Halloumi & quinoa fattoush.";
    }
    else if (planner == "vegetarian" && calories >= 2000 || calories <= 2500&& meals == "4") {
      document.getElementById('results').innerHTML = "Breakfast -- Akoori (Indian scrambled eggs). \nLunch -- Bean & halloumi stew. \nEvening snack -- raspberries, almond and oat cookies. \nDinner -- Halloumi & quinoa fattoush.";
    }

    //if user chooses Vegan - <= 500 calories or >500 or <= 999 calories
    else if (planner == "vegan" && calories <= 500 && meals == "1") {
      document.getElementById('results').innerHTML = "Breakfast -- Vegan breakfast muffins.";
    }
    else if (planner == "vegan" && calories > 500 || calories <= 999 && meals == "1") {
      document.getElementById('results').innerHTML = "Breakfast -- Vegan fry-up.";
    }
    else if (planner == "vegan" && calories <= 500 && meals == "2") {
      document.getElementById('results').innerHTML = "Breakfast -- Vegan breakfast muffins. \n Snack -- Fruit smoothie and whole wheat toast (206 caalories)";
    }
    else if (planner == "vegan" && calories > 500 || calories <= 999 && meals == "2") {
      document.getElementById('results').innerHTML = "Breakfast -- Vegan fry-up. \n Snack -- Toast with refried beans avacado (551 calories)";
    }
    else if (planner == "vegan" && calories <= 500 && meals == "3") {
      document.getElementById('results').innerHTML = "Breakfast -- Vegan breakfast muffins. \n Lunch -- Tofu spinach and tomatoes scrambled (156 calories). \n Dinner -- Fruit salad (133 calories)";
    }
    else if (planner == "vegan" && calories > 500 || calories <= 999 && meals == "3") {
      document.getElementById('results').innerHTML = "Breakfast -- Banana, grape, berry smoothie (422 calories). \n Lunch -- carrots with hummus (175 calories). \n Dinner -- Peanut butter and celery (209 calories)" ;
    }
    else if (planner == "vegan" && calories <= 500 && meals == "4") {
      document.getElementById('results').innerHTML = "Breakfast -- Vegan breakfast muffins. \n Lunch -- Tofu spinach and tomatoes scrambled (156 calories). \nEvening snack -- Apple (95 calories). \n Dinner -- Banana (105 calories";
    }
    else if (planner == "vegan" && calories > 500 || calories <= 999 && meals == "4") {
      document.getElementById('results').innerHTML = "Breakfast -- Oatmeal and peaches (352 calories). \n Lunch -- Vegan fry-up. \n Evening snack -- Cauliflower and hummus (157 calories). \n Dinner -- Peanut butter and celery (200 calories)";
    }

    //if user chooses Vegan - >= 1000 calories or <= 1999 calories
    else if (planner == "vegan" && calories >= 1000 || calories <= 1999 && meals == "1") {
      document.getElementById('results').innerHTML = "Breakfast -- Peanut butter and banana oatmeal. Pecans. (1511 Calories)";
    }
    else if (planner == "vegan" && calories >= 1000 || calories <= 1999 && meals == "2") {
      document.getElementById('results').innerHTML = "Breakfast -- Vegan fry-up. \nLunch -- Vegan mushroom cacciatore pasta.";
    }
    else if (planner == "vegan" && calories >= 1000 || calories <= 1999 && meals == "3") {
      document.getElementById('results').innerHTML = "Breakfast -- Vegan fry-up. \nLunch -- Easy vegetarian paella. \nDinner -- Vegan sweet potato noodles with crispy kale.";
    }
    else if (planner == "vegan" && calories >= 1000 || calories <= 1999 && meals == "4") {
      document.getElementById('results').innerHTML = "Breakfast -- Vegan fry-up. \nLunch -- Easy vegetarian paella. \nEvening snack -- Chia pudding. \nDinner -- Vegan sweet potato noodles with crispy kale.";
    }

    //if user chooses vegan - >= 2000 calories or <= 2500 calories
    else if (planner == "vegan" && calories >= 2000 || calories <= 2500&& meals == "1") {
      document.getElementById('results').innerHTML = "Breakfast -- Poweerball smoothie (2111 calories).";
    }
    else if (planner == "vegan" && calories >= 2000 || calories <= 2500&& meals == "2") {
      document.getElementById('results').innerHTML = "Breakfast -- Poweerball smoothie (2111 calories). \n Snack -- Almonds. (328 calories).";
    }
    else if (planner == "vegan" && calories >= 2000 || calories <= 2500&& meals == "3") {
      document.getElementById('results').innerHTML = "Breakfast -- Protein pancakes. \nLunch -- Whole Wheat veggie wrap with banana. \n Dinner -- Mushroom-Quinoa Veggie Burgers with Special Sauce and Basic Green Salad with Vinaigrette.";
    }
    else if (planner == "vegan" && calories >= 2000 || calories <= 2500&& meals == "4") {
      document.getElementById('results').innerHTML = "Breakfast -- Protein pancakes with fruit juice. \nLunch -- Whole Wheat veggie wrap with banana. \nEvening snack -- Chia pudding. \nDinner -- Mushroom-Quinoa Veggie Burgers with Special Sauce and Basic Green Salad with Vinaigrette";
    }

    //if user chooses Mediterranean - <= 500 calories or >500 or <= 999 calories
    else if (planner == "mediterranean" && calories <= 500 && meals == "1") {
      document.getElementById('results').innerHTML = "Breakfast -- Pesto scambled eggs (276 calories)";
    }
    else if (planner == "mediterranean" && calories > 500 || calories <= 999 && meals == "1") {
      document.getElementById('results').innerHTML = "Breakfast -- Egg, cheese and mushroom omelet";
    }
    else if (planner == "mediterranean" && calories <= 500 && meals == "2") {
      document.getElementById('results').innerHTML = "Breakfast -- Spinach, swiss, and egg white omelet (189 calories). \n Snack -- Apple (94 calories)";
    }
    else if (planner == "mediterranean" && calories > 500 || calories <= 999 && meals == "2") {
      document.getElementById('results').innerHTML = "Breakfast -- Southwestern Egg (512 calories). \n Snack -- Red bell pepper and hummus (278 calories)";
    }
    else if (planner == "mediterranean" && calories <= 500 && meals == "3") {
      document.getElementById('results').innerHTML = "Breakfast -- Spinach, swiss, and egg white omelet (189 calories). \n Snack -- Cheese slices (115 calories). \n Snack -- Cinnamon Apple bites (81 calories)";
    }
    else if (planner == "mediterranean" && calories > 500 || calories <= 999 && meals == "3") {
      document.getElementById('results').innerHTML = "Breakfast -- Southwestern Egg (512 calories). \n Snack -- Red bell pepper and hummus (278 calories) \n Snack -- Peanut butter & celery (209 calories)";
    }
    else if (planner == "mediterranean" && calories <= 500 && meals == "4") {
      document.getElementById('results').innerHTML = "Breakfast -- Spinach, swiss, and egg white omelet (189 calories). \n Snack -- Cheese slices (115 calories). \n Snack -- Cinnamon Apple bites (81 calories)";
    }
    else if (planner == "mediterranean" && calories > 500 || calories <= 999 && meals == "4") {
      document.getElementById('results').innerHTML = "Breakfast -- Spinach, swiss, and egg white omelet (126 calories). \n Snack -- Cinnamon apple bites (81 calories) \n Snack -- Apple (95 calories) \n Snack -- Cheese slices (115 calories)";
    }

    //if user chooses Mediterranean - >= 1000 calories or <= 1999 calories
    else if (planner == "mediterranean" && calories >= 1000 || calories <= 1999 && meals == "1") {
      document.getElementById('results').innerHTML = "Breakfast -- Gordan Ramsay's Scambled eggs (1335 calories)";
    }
    else if (planner == "mediterranean" && calories >= 1000 || calories <= 1999 && meals == "2") {
      document.getElementById('results').innerHTML = "Breakfast -- Southwestern Eggs with an apple (600 calories). Lunch -- Turkey sandwich (831 calories).";
    }
    else if (planner == "mediterranean" && calories >= 1000 || calories <= 1999 && meals == "3") {
      document.getElementById('results').innerHTML = "Breakfast -- Southwestern Eggs and whole wheat toast (653 calories). \nLunch -- Carrots with hummus (349 calories). \nDinner -- Apples, almond butter and cucumber slices (307 calories).";
    }
    else if (planner == "mediterranean" && calories >= 1000 || calories <= 1999 && meals == "4") {
      document.getElementById('results').innerHTML = "Breakfast -- Southwestern Eggs with an apple (600 calories). Lunch -- Apples, almond butter and cucumber slices (307 calories). \nEvening snack -- Plain tuna salad and almonds (343 calories). \nDinner -- Carrots with hummus (349 calories).";
    }

    //if user chooses Mediterranean - >= 2000 calories or <= 2500 calories
    else if (planner == "mediterranean" && calories >= 2000 || calories <= 2500 && meals == "1") {
      document.getElementById('results').innerHTML = "Breakfast -- Gordan Ramsay's Scambled eggs (1335 calories).";
    }
    else if (planner == "mediterranean" && calories >= 2000 || calories <= 2500 && meals == "2") {
      document.getElementById('results').innerHTML = "Breakfast -- Gordan Ramsay's Scambled eggs (1335 calories). \nLunch -- Turkey sandwich (831 calories). ";
    }
    else if (planner == "mediterranean" && calories >= 2000 || calories <= 2500 && meals == "3") {
      document.getElementById('results').innerHTML = "Breakfast -- Gordan Ramsay's Scambled eggs (1335 calories). \nLunch -- Turkey sandwich (831 calories) \nDinner -- Peanut butter & celery (209 calories).";
    }
    else if (planner == "mediterranean" && calories >= 2000 || calories <= 2500 && meals == "4") {
      document.getElementById('results').innerHTML = "Breakfast -- Gordan Ramsay's Scambled eggs (1335 calories) \nLunch -- Turkey sandwich (831 calories) \nEvening snack -- Cinnamon apple bites (81 calories) \nDinner -- Peanut butter & celery (209 calories).";
    }

    // if user input if empty, returns false
    else {
      document.getElementById('results').innerHTML = "";
    }
    return false;
  }