import { useState } from "react";

const Counter = () => {

    const [timesClick, setTimeClick] = useState(0);

    const countClick = () => {
        setTimeClick(timesClick + 1);
    }

    return (
        <button className="px-4 py-2 bg-green-500 rounded-md text-white" onClick={countClick}>Total Click : {timesClick}</button>
    );
};

export default Counter;