import React from 'react'
import classes from './ecourse.module.css'
import LessonsList from './Lessons/lessonsList'
import { Route, Link, NavLink, withRouter } from "react-router-dom";
import {connect} from 'react-redux';

const ecourse = (props)=>{
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
        }    

    return(
        <div className={`container-fluid d-flex flex-column my-5`}>
                    <div className=' row'>
                        <div className="divider m-3">
                            <h1 >{props.title}</h1>
                            <svg height="3" width="200">
                                <line x1="0" y1="0" x2="200" y2="0" style={{stroke:'#F07B2A', strokeWidth:'7'}}/>
                            </svg>     
                        </div>
                     </div>

                    <div className=' row'>

                        <div className='col-sm-12 col-lg-6'>
                            <div id="carouselExampleInterval" className="carousel slide carousel-fade" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-interval="10000">
                                    <img src={props.img} className="d-block w-100" alt="..."/>
                                    </div>
                                    {/* <div className="carousel-item" data-interval="2000">
                                    <img src={ require('./EN2.jpg') } className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                    <img src={ require('./EN3.jpg') } className="d-block w-100" alt="..."/>
                                    </div> */}
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>

                        <div className='col-sm-12 col-lg-6'>
                            <p className={classes.CourseText}>{props.text}</p>
                                
                                <LessonsList ecourseId={props.ecourseId} ecourseTitle={props.title}/>

                                <Link className="btn btn-success" 
                                to={`/users/${props.currentUser}/ecourses/${props.ecourseId}/lessons/new`} exact >СОЗДАТЬ УРОК</Link>
                        </div>

                     </div>



        </div>
    )
}


function mapStateToProps(state) {
    return{
        ecourses: state.ecourses,
        currentUserID: state.currentUser.user.id,
        currentUser: state.currentUser


    }
}

export default connect(mapStateToProps,null)(ecourse);