import React, {useState} from "react";
import Button from "./common/button/button";

const Counter = () =>
{
    const [count, setCount]=useState(0);
    return
    (
        <div>
            <h2>{count} likes</h2>
            <Button onClick={()=>setCount(count+1)} label="+"></Button>
            <Button onClick={()=>setCount(count-1)} label="-"></Button>
            <h3>Like or Dislike to increase/decrease</h3>
        </div>
    );
};

export default Counter;