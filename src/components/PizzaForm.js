// import React from "react";

// function PizzaForm() {
//   return (
//     <form onSubmit={null /*handle that submit*/}>
//       <div className="form-row">
//         <div className="col-5">
//           <input
//             className="form-control"
//             type="text"
//             name="topping"
//             placeholder="Pizza Topping"
//           />
//         </div>
//         <div className="col">
//           <select className="form-control" name="size">
//             <option value="Small">Small</option>
//             <option value="Medium">Medium</option>
//             <option value="Large">Large</option>
//           </select>
//         </div>
//         <div className="col">
//           <div className="form-check">
//             <input
//               className="form-check-input"
//               type="radio"
//               name="vegetarian"
//               value="Vegetarian"
//             />
//             <label className="form-check-label">Vegetarian</label>
//           </div>
//           <div className="form-check">
//             <input
//               className="form-check-input"
//               type="radio"
//               name="vegetarian"
//               value="Not Vegetarian"
//             />
//             <label className="form-check-label">Not Vegetarian</label>
//           </div>
//         </div>
//         <div className="col">
//           <button type="submit" className="btn btn-success">
//             Submit
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// }

// export default PizzaForm;
/////00000

import React from "react";

function PizzaForm({  handleInputField,  submiInput, p}) {
  return (
    <form onSubmit={ submiInput}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            onChange={handleInputField}
            value={ p.topping}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={p.size} onChange={handleInputField}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value={true}
              checked={p.vegetarian === true}
              onChange={handleInputField}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value={false}
              checked={p.vegetarian=== false}
             onChange={handleInputField}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
