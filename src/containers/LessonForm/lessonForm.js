import React, { Component } from 'react'
import {connect} from 'react-redux'
import {postNewLesson} from '../../store/actions/lessons'
import { ValidationForm, TextInput} from "react-bootstrap4-form-validation";

class LessonForm extends Component {
  state = {
      order:'',
      title: '',
      text: '',
      video: '',
      img0:'',
      img1:'',
      img2:'',
      img: [],
      option0:'',
      option1:'',
      option2:'',
      option3:'',
      question: '',
      options:[],
      answer: '',
     };

  
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

    ConcatImgValues = () => {
      this.setState(state => {
        const img = state.img.concat(state.img0, state.img1, state.img2);
        return {
          img,
          img0:'',
          img1:'',
          img2:'',    
        };
      });
    };


  handleNewLesson = async (event) =>{
    event.preventDefault();

    await this.ConcatOptionValues()
    await this.ConcatImgValues()

    // event.target.className += " was-validated";
    this.props.postNewLesson (this.props.match.params.eid, this.state.title, this.state.order, this.state.text, this.state.video, this.state.img, this.state.question, this.state.options, this.state.answer);
    this.setState({
      order:'',
      title: '',
      text: '',
      video: '',
      img0:'',
      img1:'',
      img2:'',
      img: [],
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
<>

   <ValidationForm  onSubmit={this.handleNewLesson} className="container d-flex flex-column needs-validation text-center my-5" noValidate>

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

        <div className="col-12">
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

      </div>

      <div className="row">

        <div className="col-xs-12 col-md-4">

          <label htmlFor="image">Ссылка на картинку №1 для урока</label>
            <TextInput
              type="text"
              className="form-control"
              value={this.state.img0}
              onChange={e => this.setState({ img0: e.target.value })}
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




        <div className="col-xs-12 col-md-4">

          <label htmlFor="image">Ссылка на картинку №2 для урока</label>
            <TextInput
              type="text"
              className="form-control"
              value={this.state.img1}
              onChange={e => this.setState({ img1: e.target.value })}
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


        <div className="col-xs-12 col-md-4">

          <label htmlFor="image">Ссылка на картинку №3 для урока</label>
            <TextInput
              type="text"
              className="form-control"
              value={this.state.img2}
              onChange={e => this.setState({ img2: e.target.value })}
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
          СОЗДАТЬ НОВЫЙ УРОК
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
    </>
    )
  }
}

function mapSatetoProps (state) {
  return{
    errors: state.errors
  }
}

export default connect(mapSatetoProps, {postNewLesson}) (LessonForm)