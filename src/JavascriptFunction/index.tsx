import { useState } from "react";
import data from '../constants/data.json';

interface User {
    id: number;
    name: string;
    age: number;
    occupation: string;
}


const JavascriptFunction = () => {
    const [users, setUser] = useState<User[]>(data);
    const [minName, setMinName] = useState('');
    const [maxName, setMaxName] = useState('');
    const [userMax, setUserMax] = useState<User[]>([]);
    const [userMin, setUserMin] = useState<User[]>([])

    const maxUser = () => {

        let max = -Infinity;
        let name = '';

        for(let i=0; i < data.length; i++) {
            if(data[i].age > max) {
                max =  data[i].age;
                name = data[i].name;
            }
        }

        setMaxName(name);
    }

    const minUser = () => {
        let min = Infinity;
        let name = ""

        for(let i=0;  i < data.length; i++) {

            if(data[i].age < min) {
                min = data[i].age;
                name = data[i].name
            }
           
        }

        setMinName(name);

    };


    const sortByMin = () => {
        let newUsers = data.sort((a,b) => a.age - b.age);
        setUserMin(newUsers);
    };

    const sortByMax = () => {
        let newUsers = data.sort((a,b) => b.age - a.age);
        setUserMax(newUsers);
    };


    return (
        <div>
            <div>
                <button className="px-4 py-2 text-white bg-green-500" onClick={minUser}>Min</button>
                <button className="px-4 py-2 text-white bg-green-500" onClick={maxUser}>Max</button>
            </div>

            <div>
                <h4>result min : {minName}</h4>
                <h4>result max : {maxName}</h4>
            </div>

            <div>
                <button className="px-4 py-2 text-white bg-green-500" onClick={sortByMin}>Sort by Min Age</button>
                <button className="px-4 py-2 text-white bg-green-500" onClick={sortByMax}>Sort By Max Age</button>
            </div>

            <div>
                <h4>result min : {minName}</h4>
                {
                    userMin.map((item, i) => {
                        return (
                            <div key={i}>
                                <h1>{item.name}</h1>
                            </div>
                        )
                    })
                }
                
            </div>

            <div>
                <h4>result max : {}</h4>
                {
                    userMax.map((item, i) => {
                        return (
                            <div key={i}>
                                <h1>{item.name}</h1>
                            </div>
                        )
                    })
                }
            </div>


        </div>
    );
};

export default JavascriptFunction;