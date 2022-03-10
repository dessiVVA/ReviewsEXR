import React, {useState} from "react";
import Card from "./Card";
import data from '../data'


const Dashboard = () =>{
    const [reviews] = useState(data);
    return(
        <div className="dashboard">
            <h1>our reviews</h1>
            <div className="underline"></div>
            <Card {...reviews}/>
        </div>
    );
}

export default Dashboard