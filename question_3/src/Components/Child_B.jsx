
import { useDispatch } from "react-redux";
import { inputChange } from "../Redux/action";



export const Child_B = () => {

   
    const dispatch = useDispatch();       // redux hook for dispatch

    const handleChange = (e) => {
        dispatch(inputChange(e.target.value));  // dispatching the action
    }

  return (
    <div>
      <h1>Child_B</h1>
      <input 
      style={{padding:"10px",border:"3px solid", width:"50%"}}
      type="text" 
      placeholder="write somthing here and see on  the component child_C"
        onChange={(e) => {
            handleChange(e);           ////function call
        }}
      />
     
    </div>
  );
};
