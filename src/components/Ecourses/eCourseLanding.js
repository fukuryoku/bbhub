import React from 'react';
import { Link } from "react-router-dom";
import EcoursesList  from "./ecoursesList";
import UserAside from '../UserAside/userAside'

const eCourseLanding = (props)=>{

if(!props.currentUser.isAuthenticated){
    return(
        <div className='container-fluid text-center my-5'>
        <h1>ВОЙДИТЕ В СВОЙ ПРОФИЛЬ ИЛИ СОЗДАЙТЕ ЕГО</h1>
        <Link to="/signin" className="btn btn-outline-info m-1">
            ВОЙТИ
        </Link>
        <Link to="/signup" className="btn btn-outline-success m-1">
            РЕГИСТРАЦИЯ
        </Link>

        </div>
    )

}else{

    return(
        <div className='container-fluid text-center my-5'>
            <EcoursesList 
                // profileImageUrl={props.currentUser.user.profileImageUrl}
                // username={props.currentUser.user.username}

             />
        </div>

    )
}
    
    
}


export default eCourseLanding;
