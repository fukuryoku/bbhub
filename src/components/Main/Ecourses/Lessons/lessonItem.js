import React from 'react';
import { Route, Link, NavLink, withRouter } from "react-router-dom";
import Moment from 'react-moment'
import { removeLesson } from '../../../../store/actions/lessons';
import Lesson from './lesson'

const LessonItem = (props)=>{
  
  
    return(
      

      <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link to ={`/lessons/${props.title}`}>{props.title}</Link>
          {props.isCorrectUser && 
            <div>
            <span className={`badge  badge-pill ${props.passed?` badge-success`:` badge-primary`}`}>№ {props.order}</span>

            <a className="badge badge-pill badge-danger" onClick={props.removeLesson}>
              УДАЛИТЬ
            </a>
            <Link className="badge badge-pill badge-warning" to={`/users/${props.currentUserId}/ecourses/${props.ecourseId}/lessons/${props.lessonId}/edit`} exact >ИЗМЕНИТЬ</Link>
            </div>
          }     
      </li>


    )
            }


export default  LessonItem;


