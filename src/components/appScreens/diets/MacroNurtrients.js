import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
// import { ScrollView } from "react-native-gesture-handler";
import Header from "../Header";

const Macro = ({ navigation }) => {
    return (
        <View style={{flex:1}}>
            <Header nav={navigation.goBack} title="Macro Nutrients" />
            <ScrollView>


            <Text style={{textDecorationLine: 'underline', marginLeft: 10, fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>
                Macronutrients:
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
                <Text style={{fontSize:10, marginTop:3}}>{'\u2B24'}</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>There are three principal classes of macronutrients: carbohydrate, protein, and fat.</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
                <Text style={{fontSize:10, marginTop:3}}>{'\u2B24'}</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Macronutrients are defined as a class of chemical compounds which humans consume in relatively large quantities compared to vitamins and minerals, and which provide humans with energy.</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
                <Text style={{fontSize:10, marginTop:3}}>{'\u2B24'}</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Fat has a food energy content of 38 kilojoules per gram (9 kilocalories per gram) and proteins and carbohydrates 17 kJ/g (4 kcal/g).</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
                <Text style={{fontSize:10, marginTop:3}}>{'\u2B24'}</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Water makes up a large proportion of the total mass ingested as part of a normal diet, but it does not provide any nutritional value. Ethanol provides calories, but there is no requirement as an essential nutrient.</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
                <Text style={{fontSize:10, marginTop:3}}>{'\u2B24'}</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Macronutrients are the main nutrients that make up the foods we eat. There are three, and you’ve probably heard of them before:</Text>
            </View>


            {/* ============ Bullets ============ */}
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
                <Text style={{fontSize:15, fontWeight:'bold'}}>1)</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Carbohydrates</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
                <Text style={{fontSize:15, fontWeight:'bold'}}>2)</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Protein</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
                <Text style={{fontSize:15, fontWeight:'bold'}}>3)</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Fat</Text>
            </View>



            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
                <Text style={{fontSize:10, marginTop:3}}>{'\u2B24'}</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Most foods contain a mixture of more than one macronutrient but are generally classified as the one they contain most of.</Text>
            </View>
            



            <Text style={{textDecorationLine: 'underline', marginLeft: 10, fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>
            Carbohydrate:
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
                <Text style={{fontSize:10, marginTop:3}}>{'\u2B24'}</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Many people immediately think of bread, pasta, rice and potatoes when someone says carbohydrate, and they’re not wrong, but many other foods contain carbs too:</Text>
            </View>
            
            {/* ============ Bullets =========== */}
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
                <Text style={{fontSize:15, fontWeight:'bold'}}>1)</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Bread, rice, pasta, oats, quinoa</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
                <Text style={{fontSize:15, fontWeight:'bold'}}>2)</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Starchy vegetables (potatoes, corn and pumpkin)</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
                <Text style={{fontSize:15, fontWeight:'bold'}}>3)</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Beans and pulses (chickpeas, baked beans, lentils)</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
                <Text style={{fontSize:15, fontWeight:'bold'}}>4)</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Some dairy foods such as milk and yoghurt</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
                <Text style={{fontSize:15, fontWeight:'bold'}}>5)</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Fruit</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
                <Text style={{fontSize:15, fontWeight:'bold'}}>6)</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Sugar and honey</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
                <Text style={{fontSize:10, marginTop:3}}>{'\u2B24'}</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Carbohydrates are our bodies’ preferred source of energy, so this macronutrient should make up a lot of our diet.</Text>
            </View>
            





            <Text style={{textDecorationLine: 'underline', marginLeft: 10, fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>
            Protein:
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
                <Text style={{fontSize:10, marginTop:3}}>{'\u2B24'}</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Protein is mostly used in our body to build and repair muscle and tissue but has many other important functions as well.</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
                <Text style={{fontSize:10, marginTop:3}}>{'\u2B24'}</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Protein foods include:</Text>
            </View>
            {/* ============ Bullets =========== */}
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
                <Text style={{fontSize:15, fontWeight:'bold'}}>1)</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Dairy food such as milk and yoghurt (also carbohydrate)</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
                <Text style={{fontSize:15, fontWeight:'bold'}}>2)</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Beans and pulses (also carbohydrates)</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
                <Text style={{fontSize:15, fontWeight:'bold'}}>3)</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Nuts (also fats)</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
                <Text style={{fontSize:15, fontWeight:'bold'}}>4)</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Soy and tofu products</Text>
            </View>






            <Text style={{textDecorationLine: 'underline', marginLeft: 10, fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>
            Fat:
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
                <Text style={{fontSize:10, marginTop:3}}>{'\u2B24'}</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Fats have been given a bad name, but they too are an important part of our diet. They’re used by the body as energy, storage for vitamins, for production of hormones and as protection for our organs. There are different types of fats:</Text>
            </View>

            <Text style={{ marginLeft: 15, fontSize: 14, fontWeight: 'bold', fontStyle:'italic' }}>
            Saturated:
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
                <Text style={{fontSize:10, marginTop:3}}>{'\u2B24'}</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>These should be limited, but not necessarily avoided. If eaten in large amounts they can be bad for your heart health. They are found in:</Text>
            </View>
            
            {/* ================== Bullets =================== */}
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
                <Text style={{fontSize:15, fontWeight:'bold'}}>1)</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Butter</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
                <Text style={{fontSize:15, fontWeight:'bold'}}>2)</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Full-fat dairy products</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
                <Text style={{fontSize:15, fontWeight:'bold'}}>3)</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Coconut oil and products</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
                <Text style={{fontSize:15, fontWeight:'bold'}}>4)</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Peanut oil, palm oil and cottonseed oil</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
                <Text style={{fontSize:15, fontWeight:'bold'}}>5)</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Our occasional foods such as chips, biscuits and cake</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
                <Text style={{fontSize:10, marginTop:3}}>{'\u2B24'}</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Swapping to reduced-fat dairy, and trimming the fat off before cooking it are good ways to reduce your saturated fat intake.</Text>
            </View>


            <Text style={{ marginLeft: 15, fontSize: 14, fontWeight: 'bold', fontStyle:'italic'}}>
            Unsaturated:
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
                <Text style={{fontSize:10, marginTop:3}}>{'\u2B24'}</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>We should aim to include more of these fats in our diet, as they have the opposite effect to saturated fats, and can be beneficial for your heart health. They are found in:</Text>
            </View>
            {/* ================== Bullets =================== */}
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
                <Text style={{fontSize:15, fontWeight:'bold'}}>1)</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Nuts</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
                <Text style={{fontSize:15, fontWeight:'bold'}}>2)</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Avocados</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
                <Text style={{fontSize:15, fontWeight:'bold'}}>3)</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Vegetable oils (olive, canola, sunflower, rice bran)</Text>
            </View>




            </ScrollView>
        </View>
    )
}

export default Macro;