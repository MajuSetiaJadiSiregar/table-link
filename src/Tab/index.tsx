import { useState } from "react";

const Tabs = () => {

    const [tab, setTab] = useState(1);

    const clickTab = (params:number) => {

        setTab(params);
    }

    return (
        <div>
            <div className="flex">
                <div onClick={() => clickTab(1)} className={`border-red-500 bg-pink-500 w-full text-center ${tab == 1 ? 'text-white' : 'text-black'}`}>
                    <h4>Tab 1</h4>
                </div>

                <div onClick={() => clickTab(2)} className={`border-red-500 bg-pink-500 w-full text-center ${tab == 2 ? 'text-white' : 'text-black'}`}>
                    <h4>Tab 2</h4>
                </div>

                <div onClick={() => clickTab(3)} className={`border-red-500 bg-pink-500 w-full text-center ${tab == 3 ? 'text-white' : 'text-black'}`}>
                    <h4>Tab 3</h4>
                </div>

                <div onClick={() => clickTab(4)} className={`border-red-500 bg-pink-500 w-full text-center ${tab == 4 ? 'text-white' : 'text-black'}`}>
                    <h4>Tab 4</h4>
                </div>
    

            </div>


            {
                tab == 1 && (<><h4> ini kontent dari tab 1</h4></>)
            }

            {
                tab == 2 && (<><h4> ini kontent dari tab 2</h4></>)
            }

            {
                tab == 3 && (<><h4> ini kontent dari tab 3</h4></>)
            }

            {
                tab == 4 && (<><h4> ini kontent dari tab 4</h4></>)
            }
        </div>
    );
};

export default Tabs;