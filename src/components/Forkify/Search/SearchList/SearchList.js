import React from 'react';
import classes from './SearchList.module.css';

const LIST = [
    'carrot',
    'asparagus',
   ' cauliflower',
    'corn',
    'cucumber',
    'green pepper',
   ' lettuce',
   ' mushrooms',
   ' onion',
   ' broccoli',
   ' pumpkin',
    'red pepper',
    'tomato',
   ' beetroot',
    'brussel sprouts',
    'peas',
    'zucchini',
    'radish',
    'potato',
    'sweet potato',
   ' artichoke',
    'leek',
    'cabbage',
   ' celery',
   ' chili',
   ' garlic',
   ' basil',
    'coriander',
   ' parsley',
   ' dill',
   ' rosemary',
   ' oregano',
   ' cinnamon',
    'saffron',
    'green bean',
    'bean',
    'chickpea',
    'lentil',
    'apple',
    'apricot',
    'avocado',
    'banana',
    'blackberry',
    'blackcurrant',
    'blueberry',
    'boysenberry',
    'cherry',
    'coconut',
    'fig',
    'grape',
    'grapefruit',
    'kiwifruit',
    'lemon',
    'lime',
    'lychee',
    'mandarin',
    'mango',
    'melon',
    'nectarine',
    'orange',
    'papaya',
    'passion fruit',
    'peach',
    'pear',
    'pineapple',
    'plum',
    'pomegranate',
    'quince',
    'raspberry',
    'strawberry',
    'watermelon',
    'salad',
    'pizza',
    'pasta',
    'popcorn',
    'lobster',
    'steak',
    'bbq',
    'pudding',
    'hamburger',
    'pie',
    'cake',
    'sausage',
    'tacos',
    'kebab',
    'poutine',
    'seafood',
    'chips',
    'fries',
    'masala',
    'paella',
    'som tam',
    'chicken',
    'toast',
    'marzipan',
    'tofu',
    'ketchup',
    'hummus',
    'chili',
    'maple syrup',
    'parma ham',
    'fajitas',
    'champ',
    'lasagna',
    'poke',
    'chocolate',
    'croissant',
    'arepas',
    'bunny chow',
    'pierogi',
    'donuts',
    'rendang',
    'sushi',
    'ice cream',
    'duck',
    'curry',
    'beef',
    'goat',
    'lamb',
    'turkey',
    'pork',
    'fish',
    'crab',
    'bacon',
    'ham',
    'pepperoni',
    'salami',
    ]
const searchList = (props) => {

    const listOne = LIST.slice(0, 25);
    const listTwo = LIST.slice(25, 50);
    const listThre = LIST.slice(50,75);
    const listFour = LIST.slice(75, 100);
    const listFive = LIST.slice(100, LIST.length);

    const render = listOne.map((el, i) => {
    return <li onClick={props.click} key={i}>{el}</li>
    })
    const render1 = listTwo.map((el, i) => {
    return <li onClick={props.click} key={i}>{el}</li>
    })
    const render2 = listThre.map((el, i) => {
    return <li onClick={props.click} key={i}>{el}</li>
    })
    const render3 = listFour.map((el, i) => {
    return <li onClick={props.click} key={i}>{el}</li>
    })
    const render4 = listFive.map((el, i) => {
    return <li onClick={props.click} key={i}>{el}</li>
    })
     
 
    return ( 
    <div className={classes.SearchList}>
        <ul>
        {render}
        </ul>
        <ul>
        {render1}
        </ul>
        <ul>
        {render2}
        </ul>
        <ul>
        {render3}
        </ul>
        <ul>
        {render4}
        </ul>
        
    </div> 
    );
}
 
export default searchList;