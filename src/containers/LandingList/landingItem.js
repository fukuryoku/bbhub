import React from 'react';
import { Route, Link, NavLink } from "react-router-dom";


const LandingItem = (props)=>{

            {/* <Link to="/"><h3>курс  от &nbsp;</h3></Link>
            <Link to="/">@{props.username} &nbsp;</Link> */}

    return(

        <div className="card">
        <Link to ={`/${props.title}`}><img src={props.img} className="card-img-top" alt={props.img}/></Link>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text font-weight-normal">{props.text.slice(0, 240)}...</p>
                <p className="card-tex font-weight-bolder">{props.price}</p>
            </div>
        </div>


    
    )
    
    
}


export default LandingItem;
