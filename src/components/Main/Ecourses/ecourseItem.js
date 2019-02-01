import React from 'react';
import { Route, Link, NavLink } from "react-router-dom";
import Moment from 'react-moment'
import defaultProfileImg from '../../../img/defaultProfileImg.png'
import { removeEcourse } from '../../../store/actions/ecourses';


const EcourseItem = (props)=>{



    return(
      

      <div className="card">
      <Link to ={`/ecourses/${props.title}`}><img src={props.img} className="card-img-top" alt={props.title}/></Link>
          <div className="card-body">
              <h5 className="card-title">КУРС {props.title}</h5>
              <p className="card-text">ОПИСАНИЕ {props.text}</p>
              <p className="card-text">УРОВЕНЬ {props.level}</p>
              <p className="card-text">ЯЗЫК СТУДЕНТА {props.langfrom}</p>
              <p className="card-text">ЯЗЫК ИЗУЧЕНИЯ {props.langto}</p>

              {props.isCorrectUser && 
            <>
              <a className="btn btn-danger" onClick={props.removeEcourse}>
                УДАЛИТЬ
              </a>

             <Link className="btn btn-primary" 
             to={`/users/${props.currentUserId}/ecourses/${props.ecourseId}/edit`} exact >ИЗМЕНИТЬ</Link>
              </>

              }

          </div>

      </div>



    )
            }


export default EcourseItem;
