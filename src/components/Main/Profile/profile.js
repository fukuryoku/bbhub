import React from 'react';
import { Link } from "react-router-dom";
import ProductsList  from "../ProductsList/productsList";
import UserAside from '../UserAside/userAside'
import EcoursesList from '../Ecourses/ecoursesList'
const profile = (props)=>{
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
            <h1>ВАШ ПРОФИЛЬ</h1>
            
            <UserAside 
                profileImageUrl={props.currentUser.user.profileImageUrl}
                username={props.currentUser.user.username}
            />

            {props.currentUser.user.id==='5c419085cd9f320d44a756cd'?
            (<ProductsList 
                // profileImageUrl={props.currentUser.user.profileImageUrl}
                // username={props.currentUser.user.username}
             />):null
            }
             <EcoursesList/>
        </div>

    )
}
    
    
}


export default profile;
