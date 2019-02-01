import React, {Component} from 'react'
import { ValidationForm, TextInput, TextInputGroup, FileInput, SelectGroup, Checkbox } from "react-bootstrap4-form-validation";
import Iframe from 'react-iframe'
import { apiCall } from "../../../services/api";


class contact extends Component {
    state={
        name:'',
        number:'',
        email:'',
        question:'',
        success:false
    }

     handleContactForm=async (event)=>{
    event.preventDefault();
     apiCall('post', '/contactform', {name:this.state.name, number:this.state.number, email:this.state.email, question:this.state.question})
    .then (this.setState({
      
        success:true
    }))

}
    render(){

        return(
       
            <div className='container-fluid d-flex flex-column my-3'>
                         <div className=' row'>
                            <div className="divider m-3">
                                <h1 >CONTACT US</h1>
                                <svg height="3" width="200">
                                    <line x1="0" y1="0" x2="200" y2="0" style={{stroke:'#F07B2A', strokeWidth:'7'}}/>
                                </svg>     
                            </div>
                         </div>
    
                 <div className=' row'>
                    <div className='col-sm-12 col-lg-6'>
    
                        <div className="map-responsive">
                            <Iframe        
                                width="600" 
                                height="450" 
                                frameBorder="0" 
                                style={{border:'0'}} 
                                url={"https://www.google.com/maps/embed/v1/place?q=%D0%BE%D0%B4%D0%B5%D1%81%D1%81%D0%B0%20%D0%BF%D0%BE%D0%BA%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%204&key=AIzaSyAVgbztgd0YHAdBdPk0hrgSEoyx2HbDIK4"} 
                                allowFullScreen>
                            </Iframe>
                        </div>
                    </div>
    
                    <div className='col'>
                            
            <ValidationForm onSubmit={this.handleContactForm} className="needs-validation">
                <div className="form-row">
    
                    <div className="col-md-4 mb-3">
                        <label htmlFor="Name">Имя</label>
                        <TextInput 
                            type="text" 
                            className="form-control"
                            value={this.state.name}
                            onChange={e => this.setState({ name: e.target.value })}
                            id="Name"
                            placeholder="Йоши" 
                            minLength="3"
                            errorMessage={{
                                minLength:"",
                                  }}             
                            name="title"
                            required
                            />
                        <div className="valid-feedback">
                            Отлично
                        </div>
                        <div className="invalid-feedback">
                             Ваше имя пожалуйста
                         </div>
                    </div>
    
                    <div className="col-md-4 mb-3">
                        <label htmlFor="number">Телефон</label>
                        <TextInput 
                            type="text" 
                            className="form-control"
                            value={this.state.number}
                            onChange={e => this.setState({ number: e.target.value })}
                            id="Name"
                            placeholder="+380888888888" 
                            minLength="6"
                            errorMessage={{
                                minLength:"",
                                  }}             
                            name="number"
                            required
                            />
                        <div className="valid-feedback">
                            Отлично
                        </div>
                        <div className="invalid-feedback">
                             Ваш телефон
                         </div>
                    </div>
    
                    <div className="col-md-4 mb-3">
    
    
                    
                        <label htmlFor="email">Email</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                            <span className="input-group-text" id="emailPrepend">@</span>
                            </div>
                            <TextInput 
                            type="text" 
                            className="form-control"
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                            id="email"
                            placeholder="yoshi@test.com" 
                            minLength="6"
                            errorMessage={{
                                minLength:"",
                                  }}             
                            name="email"
                            required/>
                            <div className="invalid-feedback">
                            Email
                            </div>
                        </div>
                    </div>
    
                </div>
    
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="question">Вопрос</label>
                    <TextInput 
                            type="text" 
                            className="form-control" 
                            id="question"
                            placeholder="yoshi@test.com"
                            value={this.state.question}
                            onChange={e => this.setState({ question: e.target.value })}
 
                            minLength="6"
                            errorMessage={{
                                minLength:"",
                                  }}             
                            name="question"
                            required
                            />
                    <div className="invalid-feedback">
                        Ваш вопрос
                    </div>
                    </div>
                </div>
    
                <button className="btn btn-primary" type="submit">Отправить</button>
                { this.state.success?(
                <div className="alert alert-success">
                    Спасибо за обращение!
                </div>
                    ):null
                }

        </ValidationForm>


                       
    
                    </div>
                 </div>
    
                 <div className=' row'>
                            <div className="divider m-3">
                                <h1 >НА СВЯЗИ</h1>
                                <svg height="3" width="200">
                                    <line x1="0" y1="0" x2="200" y2="0" style={{stroke:'#F07B2A', strokeWidth:'7'}}/>
                                </svg>     
                            </div>
                         </div>
    
                 <div className='Bouncing row CallDiv '>
                    <div className="col-12 d-flex flex-column flex-sm-row flex-wrap justify-content-around">
                        <a href="tel:+380992380425" className="align-self-center m-2"><i className="fab fa-3x fa-viber"></i></a>
                        <a href="tel:+380992380425" className="align-self-center m-2">+380 99 238 04 25</a>
                        <a href="tel:+380992380425" className="align-self-center  m-2">+380 99 238 04 25</a>
                        <a href="tel:+380992380425" className="align-self-center m-2">+380 99 238 04 25</a>
                        <a href="tel:+380992380425" className="align-self-center m-2">  <i className="fab fa-3x fa-telegram"></i></a>
                    </div>
                 </div>
            </div>
        )
    
    }
}
export default contact
