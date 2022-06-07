import { useSelector } from "react-redux";

export const Child_C = () => {
  const inputdata = useSelector((state) => state.inputdata); //// redux hook for getting the store data

  return (
    <div>
      <h1>Child_C</h1>

      <div style={{ height:"40px", fontSize:"30px"}}>
          {inputdata}</div>
    </div>
  );
};
