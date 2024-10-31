// const BurgerStack = ({ stack, removeFromBurger }) => {
//     return (
//         <ul>
//             {stack.map((ingredient, index) => (
//                 <li key={index} style={{ backgroundColor: ingredient.color }}>
//                     {ingredient.name}
//                     <button onClick={() => removeFromBurger(index)}>X</button>
//                 </li>
//             ))}
//         </ul>
//     )
//   };



const BurgerStack = ({ stack, removeFromBurger }) => {
    return (
      <ul>
        {Array.isArray(stack) ? stack.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => removeFromBurger(index)}>X</button>
          </li>
        )) : null}
      </ul>
    );
  };
  
  
export default BurgerStack;  