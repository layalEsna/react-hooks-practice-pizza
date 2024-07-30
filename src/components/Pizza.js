// import React from "react";

// function Pizza() {
//   return (
//     <tr>
//       <td>{"Replace Me With Pizza Topping"}</td>
//       <td>{"Replace Me With Pizza Size"}</td>
//       <td>{"Replace Me With Vegatarian"}</td>
//       <td>
//         <button type="button" className="btn btn-primary">
//           Edit Pizza
//         </button>
//       </td>
//     </tr>
//   );
// }

// export default Pizza;
////00000

import React from "react";

function Pizza({p, pizzaToSend}) {
  return (
    <tr>
      <td>{p.topping}</td>
      <td>{p.size}</td>
      <td>{p.vegetarian ? 'Yes' : 'No'}</td>
      <td>
        <button type="button"
          className="btn btn-primary"
        onClick={()=>pizzaToSend(p.id)}
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
