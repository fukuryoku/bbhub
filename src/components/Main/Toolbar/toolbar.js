import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout}  from '../../../store/actions/auth'

class Toolbar extends Component {
  logout=e=>{
    this.props.logout()
  }



  render(){

    return(
           
    <nav id="mainNavbar" className={`navbar navbar-expand-lg navbar-dark container-fluid  ${!this.props.scrolled?`scrolling`:null}`}> 

      
      <NavLink to='/' className="navbar-brand">
        <img alt="HUB logo" style={{width:'180', height:"65px"}} src={ require('./logo.png') }/>
      </NavLink>
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navToggle" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse justify-content-around" id="navToggle">
        <ul className="navbar-nav">
        
          <li className="nav-item active">
                <NavLink to='/'  className="nav-link"> ГЛАВНАЯ <span className="sr-only">(current)</span></NavLink>
          </li>
          
          <li className="nav-item dropdown">
           
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  КУРСЫ
              </a>
            
            <div className="dropdown-menu nav-item  active" aria-labelledby="navbarDropdown">
           { this.props.courses.map((course)=>{
              return(
                <Link to={`/${course.title}`} key ={course._id} className="dropdown-item" > {course.title} </Link>
              )
            })
           }
            </div>
          </li>

          <li className="nav-item active">
                <NavLink to='/ecourses'  className="nav-link"> ОНЛАЙН КУРСЫ <span className="sr-only">(current)</span></NavLink>
          </li>


          <li className="nav-item active">
                <NavLink to='/contact'  className="nav-link">КОНТАКТЫ <span className="sr-only">(current)</span></NavLink>
          </li>



          {this.props.currentUser.isAuthenticated ?(
            <React.Fragment>
            <li className="nav-item active">
            <NavLink className="nav-link" to='/profile' > 
                  {this.props.currentUser.user.username}
                  <span className="sr-only">(current)</span>
            </NavLink>
          </li>

          <li className="nav-item active">
                <NavLink 
                  to={`/users/${this.props.currentUser.user.id}/ecourses/new`}  
                  className="nav-link">СОЗДАТЬ ОНЛАЙН КУРС<span className="sr-only">(current)</span>
                </NavLink>
          </li>

          <li className="nav-item active">
                <NavLink to='/'  onClick={this.logout} 
                  className="nav-link">ВЫЙТИ<span className="sr-only">(current)</span>
                </NavLink>
          </li>
          </React.Fragment>

          ):(
            <React.Fragment>
              <li className="nav-item active">
                  <NavLink to='/signin'  
                    className="nav-link">ВОЙТИ<span className="sr-only">(current)</span>
                  </NavLink>
             </li>
            
              <li className="nav-item active">
                    <NavLink to='/signup' 
                      className="nav-link">РЕГИСТРАЦИЯ<span className="sr-only">(current)</span>
                    </NavLink>
              </li>
          </React.Fragment>
          )}

          {this.props.currentUser.isAuthenticated && this.props.currentUser.user.id==='5c419085cd9f320d44a756cd'?
            (<li className="nav-item active">
                <NavLink to={`/users/${this.props.currentUser.user.id}/products/new`} exact 
                  className="nav-link">СОЗДАТЬ КУРС<span className="sr-only">(current)</span>
                </NavLink>
          </li>):null}


         
        </ul>
        
      </div>
    </nav>

    )
  }

}

function mapStateToProps(state){
  return{
    currentUser: state.currentUser
  };
}




export default connect(mapStateToProps, {logout})(Toolbar)



    // Change nav backgr on scroll
// $(function () {
//   $(document).scroll(function () {
//       var $nav = $("#mainNavbar");
//       $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
//   });
// });
