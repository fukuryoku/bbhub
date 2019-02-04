import React, {Component} from 'react'
import classes from './lessons.module.css'
import Iframe from 'react-iframe'
import {connect} from "react-redux"
import {updateProgress} from "../../store/actions/auth"
import {withRouter} from 'react-router-dom';

class Lesson extends Component {

        state={
            myAnswer:'',
            try:false,
            rightAnswer:Boolean
            // fetchedText:''
        }         

// componentWillMount(){
//     this.fetchText(this.props.text)
// }

//          fetchText = (text)=>{
//             return(
//                 apiCall("get", text)
//                 .then(res=>this.setState({fetchedText:res}))
//                 .catch(err=>err.message)
//             )
//         }

     

        checkAnswerHandler=()=>{
            this.setState({try:true})
            if(this.state.myAnswer==this.props.quizz.answer){
                this.setState({rightAnswer:true})
                 // dispatch progress action put to user/ profile
                 this.props.updateProgress(this.props.lessonId, this.props.currentUser.id)

            }else{
                this.setState({rightAnswer:false})
            }
        }

render(){
    // console.log(this.props.text.length)

    const alertSuccess=
    (<div className="alert alert-success">
        Правильный ответ!
        <a className="btn  btn-warning mx-3" onClick={ this.props.history.goBack}>Еще уроков</a>
    </div>)

    const alertDanger=
    (<div className="alert alert-danger">
    Неправильный ответ! ответ: {this.props.quizz.answer}
    </div>)




    return(
        <div className={`container-fluid d-flex flex-column my-5`}>
                    <div className=' row'>
                        <div className="divider m-3">
                            <h1 >Урок {this.props.title}</h1>
                            <svg height="3" width="200">
                                <line x1="0" y1="0" x2="200" y2="0" style={{stroke:'#F07B2A', strokeWidth:'7'}}/>
                            </svg>     
                        </div>
                     </div>

                    <div className=' row'>
{/* =============================IMG SLIDER===================================== */}
                        <div className='col-sm-12'>
                            <div id="carouselExampleInterval" className="carousel slide carousel-fade" data-ride="carousel">
                                <div className="carousel-inner">

                                {this.props.img.map((URL, index)=>{
                                       return(
                                        <div className={`carousel-item ${index==0? `active`:null}`} 
                                                data-interval='2000' 
                                                key={index}>
                                            <img src={URL} className="d-block w-100" alt={URL}/>
                                        </div>
                                       ) 
                                    })}
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

                     </div>
{/* =============================TEXT IFRAME========================================== */}
                     <div className=' row'>
                        <div className="divider m-3">
                        {this.props.text?<h2 >Текст</h2>:null}
                            <svg height="3" width="200">
                                <line x1="0" y1="0" x2="200" y2="0" style={{stroke:'#F07B2A', strokeWidth:'7'}}/>
                            </svg>     
                        </div>
                     </div>


                    <div className=' row'>
                        <div className='col-12'>
                            <div className="embed-responsive">
                            
                            <Iframe 
                                    className="embed-responsive-item"
                                    url={this.props.text}
                                    width="90vw"
                                    height="70vh"
                                    id=""
                                    className=""
                                    display={this.props.text.length>6?'initial':'none'}
                                    position="relative"
                                    allowFullScreen/>
                            </div>
                            {/* <h1>TEXT IS</h1>
                            {this.state.fetchedText} */}
                        </div>  
                    </div>        

{/* ============================VIDEO IFRAME==================== */}
                    
                    <div className=' row'>
                        <div className="divider m-3">
                        {this.props.video?<h2 >Видео</h2>:null}
                            <svg height="3" width="200">
                                <line x1="0" y1="0" x2="200" y2="0" style={{stroke:'#F07B2A', strokeWidth:'7'}}/>
                            </svg>     
                        </div>
                     </div>
 

                {this.props.video.length>10?
                (
                    <div className=' row'>
                    <div className='col-12'>
                        <div className="embed-responsive">
                        <Iframe 
                                className="embed-responsive-item"
                                url={this.props.video}
                                width=""
                                height="80vh"
                                id=""
                                className=""
                                
                                position="relative"
                                allowFullScreen/>
                        </div>
                    </div>           
                 </div>):null}

                 <div className=' row'>
                    <div className='col-12'>
                        <p className={classes.CourseText}>{this.props.quizz.question}</p>
                    </div>           
                 </div>




                 <div className=' row'>
                        <div className="divider m-3">
                        {this.props.quizz?<h2 >Задание</h2>:null}
                            <svg height="3" width="200">
                                <line x1="0" y1="0" x2="200" y2="0" style={{stroke:'#F07B2A', strokeWidth:'7'}}/>
                            </svg>     
                        </div>
                     </div>

{/* --------------------------quizz---------------------------------------- */}
                 <div className=' row'>
                    <div className='col-12'>

                        <label htmlFor="validationCustom01"></label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.myAnswer}
                            onChange={e => this.setState({ myAnswer: e.target.value })}
                            id="validationCustom01"
                            placeholder=""
                        />
                    </div>
                 </div>

                 <div className=' row my-2'>

                    {this.props.quizz.options.map((option,index)=>{

                        return(
                        <div key ={index} className='col-3'>
                            <button className='btn btn-primary'
                                onClick={e => this.setState({ myAnswer: option})}>
                                {option}
                            </button>
                        </div>           

                        )
                    })}
                
                </div>

                 <div className=' row'>
                    <div className='col-12'>
                        
                        { this.state.try===true?
                            (this.state.rightAnswer===true?alertSuccess:alertDanger)
                            :null   
                        }
                    </div>
                 </div>
                 <div className=' row'>
`                 <div className='col-12'>
                             <a className='btn  btn-warning mx-3'
                                onClick={this.checkAnswerHandler}>
                                ПРОВЕРИТЬ ОТВЕТ
                            </a>
                    </div>
                 </div>

                 

        </div>
    )
}
}

function mapStateToProps(state) {
    return{
        currentUser: state.currentUser.user

    }
}

export default withRouter( connect(mapStateToProps ,{updateProgress})(Lesson));







