import React, {Component} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Toolbar from './Toolbar/toolbar';
import Footer from './Footer/footer';
import Landing from './Landing/landing';
import Contact from './Contact/contact';
import Auth from '../Auth/Auth';
import Profile from './Profile/profile';

import Ecourse from './Ecourses/ecourse';
import EcourseLanding from './Ecourses/eCourseLanding';
import EcourseForm from './EcourseForm/ecourseForm'
import UpdateEcourseForm from './EcourseForm/updateEcourseForm'

import LessonForm from './Ecourses/Lessons/LessonForm/lessonForm'
import updateLessonForm from './Ecourses/Lessons/LessonForm/updateLessonForm'


import Course from './Course/course';
import ProductForm from './ProductForm/productForm'
import UpdateProductForm from './ProductForm/updateProductForm'

import Lesson from './Ecourses/Lessons/lesson'

import {authUser} from "../../store/actions/auth";
import {removeError} from '../../store/actions/errors';
import withAuth from '../../hoc/withAuth'
import {fetchProducts} from "../../store/actions/products"
import {fetchEcourses} from "../../store/actions/ecourses"



class Main extends Component {
    // state={
    //     isTop:true
    // }
componentWillMount(){
   
}
    // componentDidMount() {
    //     document.addEventListener('scroll', () => {
    //       const isTop = window.scrollY < 100;
    //       if (isTop !== this.state.isTop) {
    //         this.onScroll(isTop);
    //       }
    //     });
    //   }
    
    //   onScroll(isTop) {
    //     this.setState({ isTop });
    //   }


    render(){
        // const {authUser, errors, removeError, currentUser} = props;

        let courseListRoutes = this.props.products.map((product, index)=>{
            
            return(


            <Route exact path={`/${product.title}`} key={index} render={props=>{ 
                return(
                <Course
                key={product._id} 
                date={product.createAt}
                title={product.title}
                text={product.text}
                price={product.price}
                img={product.img}
                productId={product._id}
            {...props}/> )
            }} />
              )})


              
        
        let EcourseListRoutes = this.props.ecourses.map((ecourse, index)=>{
            
            return(
            <Route exact path={`/ecourses/${ecourse.title}`} key={index} render={props=>{ 
                return(
                <Ecourse
                key={ecourse._id} 
                date={ecourse.createAt}
                title={ecourse.title}
                langfrom={ecourse.langfrom}
                langto={ecourse.langto}
                text={ecourse.text}
                level={ecourse.level}
                img={ecourse.img}
                ecourseId={ecourse._id}
            {...props}/> )
            }} />
              )})
        
        
        
        let LessonListRoutes = this.props.lessons.map((lesson)=>{
            
            return(
            <Route exact path={`/lessons/${lesson.title}`}  render={props=>{ 
                return(
                <Lesson
                
                key={lesson._id} 
                title={lesson.title}
                text={lesson.text}
                img={lesson.img}
                quizz={lesson.quizz}
                video={lesson.video}
                lessonId={lesson._id}
                ecourseId={this.props.ecourseId}
                ecourseTitle={this.props.ecourseTitle}
                order={lesson.order}
                
                {...props}/> )
            }} />
              )})

              
        
      

    return(
        
        <React.Fragment>
             <Toolbar   courses={this.props.products}/> {/*scrolled={this.state.isTop} */}
            
            <Switch>


                <Route exact path='/signin' render={props=> {
                        return(
                        <Auth 
                        errors={this.props.errors}
                        removeError={removeError}
                        onAuth={this.props.authUser}
                        buttonText="ВОЙТИ"
                        heading="РАДЫ ВАМ СНОВА"
                        {...props}/>
                        
                        )
                    }} 
                    />
                
                <Route exact path='/signup' render={props=> {
                        return(
                        <Auth 
                        removeError={removeError}
                        errors={this.props.errors}
                        onAuth={this.props.authUser}
                        signUp
                        buttonText="РЕГИСТРАЦИЯ"
                        heading="ПРИСОЕДИНЯЙТЕСЬ"
                        {...props}/>
                        
                        )
                    }} 
                    />

                
                
                {courseListRoutes}
                {EcourseListRoutes}
                {LessonListRoutes}

                <Route exact path='/ecourses'  render={props=> 
                <EcourseLanding
                currentUser={this.props.currentUser}
                {...props}/>} 
                />

                
                <Route exact path='/profile'  render={props=> 
                <Profile
                currentUser={this.props.currentUser}
                {...props}/>} 
                />

                <Route exact path='/contact'  component={Contact} />

                
                <Route exact path='/users/:id/products/new' 
                 component={withAuth(ProductForm)} />
                <Route exact path='/users/:id/products/:pid/edit' 
                 component={withAuth(UpdateProductForm)} />

                 <Route exact path='/users/:id/ecourses/new' 
                 component={withAuth(EcourseForm)} />
                <Route  exact path='/users/:id/ecourses/:eid/edit' 
                 component={withAuth(UpdateEcourseForm)} />

                 <Route exact path='/users/:id/ecourses/:eid/lessons/new' 
                 component={withAuth(LessonForm)} />
                <Route exact path='/users/:id/ecourses/:eid/lessons/:lid/edit' 
                 component={withAuth(updateLessonForm)} />

                <Route  render={props=> 
                <Landing
                currentUser={this.props.currentUser}
                {...props}/>} />
                
                {/* <Route component={NoMatch} /> */}

            </Switch>
            
            <Footer/>
        </React.Fragment>

    )
      }

    
}

function mapStateToProps(state){
  return{
    currentUser: state.currentUser,
    errors: state.errors,
    products: state.products,
    ecourses: state.ecourses,
    lessons: state.lessons
  };
}


// function mapDispatchToProps (state){
//     return{
//         authUser: (type, userData) => dispatch(actions.authUser(type, userData))
//     }
    
// }


export default withRouter(connect(mapStateToProps, {authUser, removeError, fetchProducts, fetchEcourses})(Main));
