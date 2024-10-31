const BurgerStack = ({ stack, removeFromBurger }) => {
    return (
        <ul>
            {stack.map((ingredient, index) => (
                <li key={index} style={{ backgroundColor: ingredient.color }}>
                    {ingredient.name}
                    <button onClick={() => removeFromBurger(index)}>X</button>
                </li>
            ))}
        </ul>
    )
  };

// The above code is what I wrote initially.  I thought it was right, but I kept running into an error along the lines of 'stack is not being used properly.'  Couldn't figure it out.  Asked ChatGPT and was given the below code.  Got a different error that time.  I then realized my problem was I had curly brackets instead of brackets in the () of useState on line 25 of App.jsx.  Changing that fixed it all.  I'm leaving the below code there for reference because it also works, but sticking with what I initially had.

// const BurgerStack = ({ stack, removeFromBurger }) => {
//     return (
//       <ul>
//         {Array.isArray(stack) ? stack.map((ingredient, index) => (
//           <li key={index} style={{ backgroundColor: ingredient.color }}>
//             {ingredient.name}
//             <button onClick={() => removeFromBurger(index)}>X</button>
//           </li>
//         )) : null}
//       </ul>
//     );
//   };
  
  
export default BurgerStack;