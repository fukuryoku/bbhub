import React, { Component } from 'react'
import {connect} from 'react-redux'
import {postNewEcourse} from '../../../store/actions/ecourses'
import { ValidationForm, TextInput, TextInputGroup, FileInput, SelectGroup, Checkbox } from "react-bootstrap4-form-validation";


class EcourseForm extends Component {
  state = {
    title:"",
    langfrom:"",
    langto:"",
    text:"",
    level:"",
    img:""
  };

  handleNewEcourse = event =>{
    event.preventDefault();
    // event.target.className += " was-validated";
    this.props.postNewEcourse (this.state.title, this.state.langfrom, this.state.langto, this.state.text, this.state.level, this.state.img);
    this.setState({
    title:"",
    langfrom:"",
    langto:"",
    text:"",
    level:"",
    img:""
  })
    this.props.history.push('/profile')
  }

  render() {
    return (



   <ValidationForm onSubmit={this.handleNewEcourse} className="container d-flex flex-column needs-validation text-center my-5" noValidate>
    
    <div className="form-row align-items-center">
        {this.props.errors.message && (
          <div className="alert alert-danger">{this.props.errors.message}</div>
        )}
    </div>

     <div className="form-row align-items-center">
        <div className="col-12">
            <label htmlFor="title">НАЗВАНИЕ</label>
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
              placeholder="Английский начальный"
              required
            />

            <div className="valid-feedback">
              Отлично
            </div>

            <div className="invalid-feedback">
              НАЗВАНИЕ
            </div>
        </div>
       </div>


     <div className="form-row align-items-center">

        <div className="col-4">
            <label htmlFor="langfrom">ЯЗЫК УЧЕНИКА</label>
            <TextInput
              type="text"
              className="form-control"
              value={this.state.langfrom}
              onChange={e => this.setState({ langfrom: e.target.value })}
              id="langfrom"
              minLength="5"
              errorMessage={{
                  minLength:"",
                  }}             
              name="title"
              placeholder="Русский"
              required
            />
            <div className="valid-feedback">
              Отлично
            </div>
            <div className="invalid-feedback">
            ЯЗЫК УЧЕНИКА
            </div>
        </div>


        <div className="col-4">
            <label htmlFor="langto">ЯЗЫК В КУРСЕ</label>
            <TextInput
              type="text"
              className="form-control"
              value={this.state.langto}
              onChange={e => this.setState({ langto: e.target.value })}
              id="langto"
              placeholder="Английский"
              minLength="5"
              name="langto"
              errorMessage={{
                  minLength:"",
                  }}             
              required
            />
            <div className="valid-feedback">
              Отлично
            </div>
            <div className="invalid-feedback">
            ЯЗЫК В КУРСЕ
            </div>
        </div>


        <div className="col-4">
            <label htmlFor="level">УРОВЕНЬ КУРСА CEFR (A1-C2)</label>
            <SelectGroup 
              type="text"
              className="form-control"
              value={this.state.level}
              onChange={e => this.setState({ level: e.target.value })}
              id="level"
              required
            >
            <option value="">УРОВЕНЬ КУРСА</option>
            <option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
            <option value="C1">C1</option>
            <option value="C2">C2</option>

            </SelectGroup>
            <div className="valid-feedback">
              Отлично
            </div>
            <div className="invalid-feedback">
            УРОВЕНЬ КУРСА? (A1, A2...C2)
            </div>
        </div>
      </div>



      <div className="form-row align-items-center">
          <div className="col-12">
              <label htmlFor="text">ОПИСНИЕ КУРСА</label>
              <TextInput
                type="text"
                className="form-control"
                value={this.state.text}
                onChange={e => this.setState({ text: e.target.value })}
                id="text"
                placeholder="Базовая грамматика английского языка легко и понятно"
                minLength="10"
                name="text"
                errorMessage={{
                    minLength:"не менее 10 знаков",
                    }}             
                required
              />
              <div className="valid-feedback">
                Отлично
              </div>
              <div className="invalid-feedback">
                ОПИСНИЕ КУРСА?
              </div>
          </div>
      </div>



      <div className="form-row align-items-center">
          <div className="col-12">
            <label htmlFor="img">ССЫЛКА НА ОБЛОЖКУ</label>
            <TextInput
              type="text"
              className="form-control"
              value={this.state.img}
              onChange={e => this.setState({ img: e.target.value })}
              id="img"
              placeholder="Базовая грамматика английского языка легко и понятно"
              minLength="5"
              name="img"
              errorMessage={{
                    minLength:"не менее 5 знаков",
                    }}             
              required
            />
            <div className="valid-feedback">
              Отлично
            </div>
            <div className="invalid-feedback">
              ССЫЛКА НА ОБЛОЖКУ?
            </div>
        </div>
      </div>

        <button type="submit" className="btn btn-success my-3">
          СОЗДАТЬ НОВЫЙ ОНЛАЙН КУРС
        </button>

    </ValidationForm>
    )
  }
}

function mapSatetoProps (state) {
  return{
    errors: state.errors
  }
}

export default connect(mapSatetoProps, {postNewEcourse}) (EcourseForm)