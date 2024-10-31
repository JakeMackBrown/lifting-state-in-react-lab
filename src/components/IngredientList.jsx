const availableIngredients = [
    {name: 'Lettuce', color: 'green'},
    {name: 'Tomato', color: 'red'},
    {name: 'Cheese', color: 'yellow'},
    {name: 'Patty', color: 'brown'}
];

const IngredientList = ({ addToBurger }) => {
    return (
        <ul>
            {availableIngredients.map((ingredient, index) => (
                <li key={index} style={{backgroundColor: ingredient.color}}>
                    {ingredient.name}
                    <button onClick={() => addToBurger(ingredient)}>+</button>
                </li>
            ))}
        </ul>
    )
  };
  
  export default IngredientList;