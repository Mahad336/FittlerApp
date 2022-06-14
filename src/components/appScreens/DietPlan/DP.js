import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native'

const DP = () => {
    const [diets] = useState([
        [
          {id:1, day:"Monday", diets: [
            {breakFast:"Omelet with various vegetables, fried in butter or coconut oil."},
            {lunch:"Grass-fed yogurt with blueberries and a handful of almonds"},
            {dinner:"Cheeseburger (no bun), served with vegetables and salsa sauce."}
          ]},
          {
            id:2, day:"Tuesday", diets:[
              {breakFast:"Bacon and eggs."},
              {lunch:"Bacon and eggs."},
              {dinner:"Salmon with butter and vegetables."}
          ]},
          {
            id:3, day:"Wednesday", diets:[
              {breakFast:"Eggs and vegetables, fried in butter or coconut oil."},
              {lunch:"Shrimp salad with some olive oil."},
              {dinner:"Grilled chicken with vegetables."}
          ]},
          {
            id:4, day:"Thursday", diets:[
              {breakFast:"Omelet with various vegetables, fried in butter or coconut oil."},
              {lunch:"Smoothie with coconut milk, berries, almonds and protein powder."},
              {dinner:"Steak and veggies."}
          ]},
          {
            id:5, day:"Friday", diets:[
              {breakFast:"Bacon and Eggs."},
              {lunch:"Chicken salad with some olive oil."},
              {dinner:"Pork chops with vegetables."}
          ]},
          {
            id:6, day:"Saturday", diets:[
              {breakFast:"Omelet with various veggies."},
              {lunch:"Grass-fed yogurt with berries, coconut flakes and a handful of walnuts."},
              {dinner:"Meatballs with vegetables."}
          ]},
          {
            id:7, day:"Sunday", diets:[
              {breakFast:"Bacon and Eggs."},
              {lunch:"Smoothie with coconut milk, a bit of heavy cream, chocolate-flavored protein powder and berries."},
              {dinner:"Grilled chicken wings with some raw spinach on the side."}
          ]},
        ],
        [
          {id:1, day:"Monday", diets: [
            {breakFast:"3 eggs, 1 slice whole grain toast with 1 tablespoon almond butter and a pear."},
            {lunch:"Fresh Avocado and Cottage Cheese Salad and an orange."},
            {dinner:"6 ounces (170 g) steak, sweet potato and grilled zucchini."}
          ]},
          {
            id:2, day:"Tuesday", diets:[
              {breakFast:"Smoothie made with 1 scoop protein powder, 1 cup coconut milk and strawberries."},
              {lunch:"4 ounces (114 g) canned salmon, mixed greens, olive oil and vinegar and an apple."},
              {dinner:"4 ounces (114 g) grilled chicken with quinoa and Brussels sprouts."}
          ]},
          {
            id:3, day:"Wednesday", diets:[
              {breakFast:"Oatmeal and one cup plain Greek yogurt with 1/4 cup chopped pecans."},
              {lunch:"4 ounces (114 g) chicken mixed with avocado and red bell pepper and a peach."},
              {dinner:"All Meat Veggie Chili and brown rice."}
          ]},
          {
            id:4, day:"Thursday", diets:[
              {breakFast:"Spanish omelet made with 3 eggs, 1 ounce cheese, chili peppers, black olives and salsa and an orange."},
              {lunch:"Leftover All Meat Veggie Chili and brown rice."},
              {dinner:"4 ounces (114 g) halibut, lentils and broccoli."}
          ]},
          {
            id:5, day:"Friday", diets:[
              {breakFast:"One cup cottage cheese with 1/4 cup chopped walnuts, diced apples and cinnamon."},
              {lunch:"4 ounces (114 g) canned salmon mixed with healthy mayo on sprouted grain bread and carrot sticks."},
              {dinner:"Chicken Meatballs with Marinara Sauce, spaghetti squash and raspberries."}
          ]},
          {
            id:6, day:"Saturday", diets:[
              {breakFast:"Frittata made with 3 eggs, 1 ounce cheese and 1/2 cup diced potatoes."},
              {lunch:"Leftover Chicken Meatballs with Marinara Sauce and spaghetti squash with an apple."},
              {dinner:"3 ounces (85 g) shrimp fajitas with grilled onions and bell peppers, guacamole, 1 cup black beans on a corn tortilla."}
          ]},
          {
            id:7, day:"Sunday", diets:[
              {breakFast:"Protein Pumpkin Pancakes topped with 1/4 cup chopped pecans."},
              {lunch:"One cup plain Greek yogurt mixed with 1/4 cup chopped mixed nuts and pineapple."},
              {dinner:"6 ounces (170 g) grilled salmon, potatoes and sautéed spinach."}
          ]},
        ],
        [
          {id:1, day:"Monday", diets: [
            {breakFast:"two eggs fried in butter served with sauteed greens"},
            {lunch:"a bunless burger topped with cheese,mushrooms, and avocado atop a bed of greens"},
            {dinner:"pork chops with green beans sauteed in olive oil"}
          ]},
          {
            id:2, day:"Tuesday", diets:[
              {breakFast:"mushroom omelet"},
              {lunch:"tuna salad with celery and tomato atop a bed of greens"},
              {dinner:"roast chicken with cream sauce and sauteed broccoli"}
          ]},
          {
            id:3, day:"Wednesday", diets:[
              {breakFast:"bell pepper stuffed with cheese and eggs"},
              {lunch:"arugula salad with hard-boiled eggs, turkey, avocado, and blue cheese"},
              {dinner:"grilled salmon with spinach sauteed in sesame oil"}
          ]},
          {
            id:4, day:"Thursday", diets:[
              {breakFast:"full-fat yogurt topped with Keto granola"},
              {lunch:"steak bowl with cauliflower rice, cheese, herbs, avocado, and salsa"},
              {dinner:"bison steak with cheesy broccoli"}
          ]},
          {
            id:5, day:"Friday", diets:[
              {breakFast:"baked avocado egg boats."},
              {lunch:"Caesar salad with chicken"},
              {dinner:"pork chops with vegetables"}
          ]},
          {
            id:6, day:"Saturday", diets:[
              {breakFast:"cauliflower toast topped with cheese and avocado"},
              {lunch:"bunless salmon burgers topped with pesto"},
              {dinner:"meatballs served with zucchini noodles and Parmesan cheese"}
          ]},
          {
            id:7, day:"Sunday", diets:[
              {breakFast:"coconut milk chia pudding topped with coconut and walnuts"},
              {lunch:"Cobb salad made with greens, hard-boiled eggs, avocado, cheese, and turkey"},
              {dinner:"coconut chicken curry"}
          ]},
        ]
      ]);
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.heading}>Protein Diet Plan</Text>
      {diets[0].map(diet => <View>
          <Text style={{textAlign:'center'}}>{diet.day}</Text>
          <Text>BreakFast: {diet.diets[0].breakFast}</Text>
          <Text>Lunch: {diet.diets[1].lunch}</Text>
          <Text>Dinner: {diet.diets[2].dinner}</Text>
      </View>)}
      <Text style={styles.heading}>Keto Diet Plan</Text>
      {diets[1].map(diet => <View>
          <Text style={{textAlign:'center'}}>{diet.day}</Text>
          <Text>BreakFast: {diet.diets[0].breakFast}</Text>
          <Text>Lunch: {diet.diets[1].lunch}</Text>
          <Text>Dinner: {diet.diets[2].dinner}</Text>
      </View>)}
      <Text style={styles.heading}>Sheto Diet Plan</Text>
      {diets[2].map(diet => <View>
          <Text style={{textAlign:'center'}}>{diet.day}</Text>
          <Text>BreakFast: {diet.diets[0].breakFast}</Text>
          <Text>Lunch: {diet.diets[1].lunch}</Text>
          <Text>Dinner: {diet.diets[2].dinner}</Text>
      </View>)}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    heading: {
        fontSize: 20,
        textAlign:'center'
    }
})

export default DP
