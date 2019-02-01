import React, {Component} from 'react';
import {connect} from "react-redux"
import {fetchEcourses, removeEcourse, updateEcourse} from "../../../store/actions/ecourses"
import EcourseItem from './ecourseItem'

class EcoursesList extends Component {

    componentWillMount(){
        this.props.fetchEcourses();
    }

    render(){
        const {ecourses, removeEcourse, currentUser, updateEcourse } = this.props
        
        let ecoursesList = ecourses.map(ecourse=>(
            <EcourseItem 
            key={ecourse._id} 
            date={ecourse.createAt}
            title={ecourse.title}
            langfrom={ecourse.langfrom}
            langto={ecourse.langto}
            text={ecourse.text}
            level={ecourse.level}
            img={ecourse.img}
            currentUserId={currentUser}
            ecourseId={ecourse._id}
            username={ecourse.user.username}
            profileImageUrl={ecourse.user.profileImageUrl}
            removeEcourse={removeEcourse.bind(this, ecourse.user._id, ecourse._id)}
            updateEcourse={updateEcourse.bind(this, ecourse.user._id, ecourse._id, ecourse.title, ecourse.langfrom, ecourse.langto,  ecourse.text, ecourse.level, ecourse.img)}
            isCorrectUser={currentUser===ecourse.user._id}   
            />
        ))



    return(
        <>
        <h1>ВАШИ ОНЛАЙН КУРСЫ</h1>

        <div className='card-columns '>
            {ecoursesList}
        </div>
        </>

    )
    }
    
}

function mapStateToProps(state) {
    return{
        ecourses: state.ecourses,
        currentUser: state.currentUser.user.id
    }
}


export default connect(mapStateToProps,{fetchEcourses, removeEcourse, updateEcourse})(EcoursesList);