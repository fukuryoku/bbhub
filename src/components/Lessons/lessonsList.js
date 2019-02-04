import React, {Component} from 'react';
import {connect} from "react-redux"
import {fetchLessons, removeLesson, updateLesson} from "../../store/actions/lessons"
import LessonItem from './lessonItem'

class LessonList extends Component {

    componentWillMount(){
        this.props.fetchLessons(this.props.ecourseId)
    }

    render(){
        const {lessons, removeLesson, currentUser, updateLesson } = this.props
        
        
        let lessonsList = lessons.map(lesson=>{
            
            return(
            <LessonItem 
            key={lesson._id} 
            passed={currentUser.progress.indexOf(lesson._id)!=-1}
            order={lesson.order}
            date={lesson.createAt}
            title={lesson.title}
            langfrom={lesson.langfrom}
            langto={lesson.langto}
            text={lesson.text}
            level={lesson.level}
            img={lesson.img}
            quizz={lesson.quizz}
            video={lesson.video}
            currentUserId={currentUser.id}
            username={currentUser.username}
            // progress={currentUser.progress}
            lessonId={lesson._id}
            username={lesson.user.username}
            ecourseId={this.props.ecourseId}
            ecourseTitle={this.props.ecourseTitle}
            profileImageUrl={lesson.user.profileImageUrl}
            removeLesson={removeLesson.bind(this, lesson.user._id, lesson.ecourse, lesson._id)}
            updateLesson={updateLesson.bind(this, lesson.user._id, lesson._id, lesson.title, lesson.langfrom, lesson.langto,  lesson.text, lesson.level, lesson.img)}
            isCorrectUser={currentUser.id===lesson.user._id}   
            />
            
        )})

    return(
        <>
        <h1>УРОКИ</h1>

        <ul className="list-group">
            {lessonsList}
        </ul>
        </>

    )
    }
    
}

function mapStateToProps(state) {
    return{
        lessons: state.lessons,
        currentUser: state.currentUser.user,

    }
}


export default connect(mapStateToProps,{fetchLessons, removeLesson, updateLesson})(LessonList);