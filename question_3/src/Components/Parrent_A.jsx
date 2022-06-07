import { Child_B } from "./Child_B"
import { Child_C } from "./Child_C"


export const Parrent_A = () => {
    return (
        <div>
                <h1>Parrent_A</h1>
           
           <div style={{border:"2px solid green", width:"90%",margin:"auto",  padding:"20px"}}>
           <Child_B/>
           
            <hr />
           <Child_C/>
           </div>
        </div>
    )
}