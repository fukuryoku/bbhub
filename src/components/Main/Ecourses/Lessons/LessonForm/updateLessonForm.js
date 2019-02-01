import React, { Component } from 'react'
import {connect} from 'react-redux'
import {updateLesson} from '../../../../../store/actions/lessons'
import { ValidationForm, TextInput, TextInputGroup, FileInput, SelectGroup, Checkbox } from "react-bootstrap4-form-validation";


class updateLessonForm extends Component {
  
  state = {
    order:'',
    title: '',
    text: '',
    video: '',
    img: '',
    option0:'',
    option1:'',
    option2:'',
    option3:'',
    question: '',
    options:[],
    answer: '',
 };

async componentDidMount(){
    let findLessonArr = await this.props.lessons.filter(lesson=>lesson._id === this.props.match.params.lid)
    let findLesson=findLessonArr[0]
    this.setState({
      order: findLesson.order,
      title: findLesson.title,
      text: findLesson.text,
      video: findLesson.video,
      img: findLesson.img,
      question: findLesson.quizz.question,
      option0:findLesson.quizz.options[0],
      option1:findLesson.quizz.options[1],
      option2:findLesson.quizz.options[2],
      option3:findLesson.quizz.options[3],  
      options:[], 
      answer: findLesson.quizz.answer
     })
    }

    ConcatOptionValues = () => {
      this.setState(state => {
        const options = state.options.concat(state.option0, state.option1, state.option2, state.option3);
        return {
          options,
          option0: '',
          option1: '',
          option2: '',
          option3: '',

        };
      });
    };

 
  handleUpdateLesson= async (event) =>{
    event.preventDefault();
    await this.ConcatOptionValues()
    this.props.updateLesson (this.props.currentUser.user.id, this.props.match.params.eid, this.props.match.params.lid, this.state.title, this.state.order, this.state.text, this.state.video, this.state.img, this.state.question, this.state.options, this.state.answer);
    this.setState({
      order:'',
      title: '',
      text: '',
      video: '',
      img: '',
      option0:'',
      option1:'',
      option2:'',
      option3:'',
      question: '',
      options:[],
      answer: '',
     })
    this.props.history.push('/ecourses')
  }


  

  render() {

    return (
      
      <ValidationForm onSubmit={this.handleUpdateLesson} className="container d-flex flex-column needs-validation text-center my-5" noValidate>
    
    <div className="form-row align-items-center">
          {this.props.errors.message && (
            <div className="alert alert-danger">{this.props.errors.message}</div>
          )}
      </div>

     <div className="form-row align-items-center">
        <div className="col-6">
            <label htmlFor="title">НАЗВАНИЕ УРОКА</label>
            <TextInput 
              type="text"
              className="form-control"
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
              id="title"
              minLength="5"
              errorMessage={{
                  minLength:"",
                  }}             
              name="title"
              placeholder="Неправильные глаголы"
              required
            />

            <div className="valid-feedback">
              Отлично
            </div>

            <div className="invalid-feedback">
              Не менее 5 символов
            </div>
        </div>


        <div className="col-6">
            <label htmlFor="order">Порядковый номер урока</label>
            <TextInput
              type="text"
              className="form-control"
              value={this.state.order}
              onChange={e => this.setState({ order: e.target.value })}
              id="order"
              pattern="[0-9]{1,2}"
              minLength="1"
              errorMessage={{
                  minLength:"",
                  pattern:"Введите целое число до 99"
                }}              
              placeholder="1"
              required
            />

            <div className="valid-feedback">
              Отлично
            </div>

            <div className="invalid-feedback">
              Номер урока пожалуйста
            </div>
        </div>



       </div>


     <div className="form-row align-items-center">

        <div className="col-6">
            <label htmlFor="video">Ссылка на встроеное видео</label>
            <TextInput
              type="text"
              className="form-control"
              value={this.state.video}
              onChange={e => this.setState({ video: e.target.value })}
              id="video"
              placeholder="https://www.youtube.com/embed/stcfDZWOlug"
              minLength="10"
              errorMessage={{
                  minLength:"",
                }}              
            />
            <div className="valid-feedback">
              Отлично
            </div>
            <div className="invalid-feedback">
              Ссылка на видео
            </div>
        </div>
  

          <div className="col-6">

          <label htmlFor="image">Ссылка на картинку для урока</label>
            <TextInput
              type="text"
              className="form-control"
              value={this.state.img}
              onChange={e => this.setState({ img: e.target.value })}
              id="image"
              placeholder="https://cdn.stocksnap.io/img-thumbs/960w/XHBLQZQP6J.jpg"
              minLength="10"
              errorMessage={{
                  minLength:"",
                }}             
            />
              <div className="valid-feedback">
                Отлично
              </div>
              <div className="invalid-feedback">
                ССЫЛКА НА КАРТИНКУ?
              </div>

          </div>
      </div>

       

      <div className="form-row align-items-center">
          <div className="col-12">
          <label htmlFor="text">Ссылка на текст урока в google docs</label>
              <TextInput
                type="text"
                className="form-control"
                value={this.state.text}
                onChange={e => this.setState({ text: e.target.value })}
                id="text"
                placeholder="https://docs.google.com/document/d/e/2PACX-1vSUWTXlLJPbjorrzpGwergdkdm5oFfPWur4WAd2O-Il8-Fvf0TP2kerrpT508Md8ACEy0F4YK0YsKpF/pub"
                minLength="10"
                errorMessage={{
                  minLength:"",
                }}             
                required
              />
                <div className="valid-feedback">
                  Отлично
                </div>
                
                <div className="invalid-feedback">
                  ТЕКСТ УРОКА?
                </div>

            </div>
        </div>

    <div className="form-row align-items-center">
      <div className="col-12">
      <label htmlFor="question">Контрольное задание</label>
            <TextInput
              type="text"
              className="form-control"
              value={this.state.question}
              onChange={e => this.setState({ question: e.target.value })}
              id="question"
              placeholder="i`m _____ to swimming pool tomorow"
                minLength="10"
                errorMessage={{
                  minLength:"",
                }}             
            />
              <div className="valid-feedback">
                Отлично
              </div>
              <div className="invalid-feedback">
                Контрольное задание
              </div>
      </div>
    </div>



    <div className="form-row align-items-center">

        <div className="col-xs-6 col-sm-4 col-md-2">
            <label htmlFor="option1">ВАРИАНТ 1</label>
            <TextInput
              type="text"
              className="form-control"
              value={this.state.option0}
              onChange={e => this.setState({ option0: e.target.value })}
              id="option1"
              placeholder="will go"
              minLength="1"
              errorMessage={{
                  minLength:"",
                }}             
              
            />
              <div className="valid-feedback">
                Отлично
              </div>
              <div className="invalid-feedback">
                  ВАРИАНТ 1
              </div>
         </div>


         <div className="col-xs-6 col-sm-4 col-md-2">
            <label htmlFor="option2">ВАРИАНТ 2</label>
            <TextInput
              type="text"
              className="form-control"
              value={this.state.option1}
              onChange={e => this.setState({ option1: e.target.value })}
              id="option2"
              placeholder="going"
              minLength="1"
              errorMessage={{
                  minLength:"",
                }}             
              
            />
              <div className="valid-feedback">
                Отлично
              </div>
              <div className="invalid-feedback">
                  ВАРИАНТ 2
              </div>
           </div>

        <div className="col-xs-6 col-sm-4 col-md-2">
            <label htmlFor="option3">ВАРИАНТ 3</label>
            <TextInput
              type="text"
              className="form-control"
              value={this.state.option2}
              onChange={e => this.setState({ option2: e.target.value })}
              id="option3"
              placeholder="must"
              minLength="1"
              errorMessage={{
                  minLength:"",
                }}             
            />
              <div className="valid-feedback">
                Отлично
              </div>
              <div className="invalid-feedback">
                  ВАРИАНТ 3
              </div>
          </div>

        <div className="col-xs-6 col-sm-4 col-md-2">
            <label htmlFor="option4">ВАРИАНТ 4</label>
            <TextInput
              type="text"
              className="form-control"
              value={this.state.option3}
              onChange={e => this.setState({ option3: e.target.value })}
              id="option4"
              placeholder="happy"
              minLength="1"
              errorMessage={{
                  minLength:"",
                }}             
            />
              <div className="valid-feedback">
                Отлично
              </div>
              <div className="invalid-feedback">
                  ВАРИАНТ  4
              </div>
         </div>


          <div className="col-xs-6 col-sm-4">
            <label htmlFor="answer">ОТВЕТ</label>
            <TextInput
              type="text"
              className="form-control"
              value={this.state.answer}
              onChange={e => this.setState({ answer: e.target.value })}
              id="answer"
              placeholder="going"
              minLength="1"

              errorMessage={{
                  minLength:"",
                }}             

              
            />
              <div className="valid-feedback">
                Отлично
              </div>
              <div className="invalid-feedback">
                Напишите правильный ответ
              </div>
            </div>

    </div>
    
        <button type="submit" className="btn btn-success my-3"  >
          РЕДАКТИРОВАТЬ УРОК
        </button>

        <div className="m-3" >
        <h2>Добро пожаловатьь в форму создания урока, несколько советов:</h2>
        <p>Текст создайте в google docs, выберете в меню опубликовать в интернете, :</p>
        <p>из всего текста выберете <strong>только</strong> адрес,пример:</p>
        <p> iframe src="<strong>https://docs.google.com/document/d/e/2PACX-1vSUWTXlLJPbjorrzpGwergdkdm5oFfPWur4WAd2O-Il8-Fvf0TP2kerrpT508Md8ACEy0F4YK0YsKpF/pub?embedded=true</strong>" iframe</p>
          <hr/>
        <p>Видео:  youtube под видео кнопка поделиться, есть опция - вставка:</p>
        <p>из всего текста выберете <strong>только</strong> адрес,пример:</p>
        <p> iframe width="560" height="315" src=<strong>https://www.youtube.com/embed/66bUASe3Nm4</strong> .........</p>
         <hr/>
    </div> 

      
    </ValidationForm >
        )
  }
}

function mapSatetoProps (state) {
  return{
    errors: state.errors,
    currentUser: state.currentUser,
    ecourses: state.ecourses,
    lessons: state.lessons,

  }
}
export default connect(mapSatetoProps, {updateLesson}) (updateLessonForm)