import React from 'react'
import LandingList from '../../containers/LandingList/landingList'
import {Link} from 'react-router-dom';

const learnSD = require('./learnSD.jpg')

const landing = (props)=>{


    return(
    <main>
    {/* ----------------------------JUMBO--------------------------------------------- */}
        <div id="MyCarousel" className="carousel slide carousel-fade" data-ride="carousel">

            <ol className="carousel-indicators">
            <li data-target="#MyCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#MyCarousel" data-slide-to="1"></li>
            <li data-target="#MyCarousel" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner">
            <div className="carousel-item active " data-interval="1000000">
                <div className="jumbotron jumbo1 text-center">
                    <h1 className="display-3 text-center my-5"  >{`Привет ${props.currentUser.user.username ||`друг`}`}</h1>
                    <p className="lead font-weight-normal my-5">
                    Мы заинтересованы в успехе каждого студента и для этого мы рады 
                    предоставить Вам доступ к
                    нашим возможностям, знаниям и приятной атмосфере: кофе, чай, закуски 
                    
                    </p>
                    <Link className="btn  btn-lg btn-primary" to="/contact" role="button">ПОЛЕТЕЛИ</Link>
                </div>
            </div>

            <div className="carousel-item  " data-interval="">
                <div className="jumbotron jumbo2 text-center">
                    <h1 className="display-3 text-center my-5">Учись онлайн бесплатно!</h1>
                    <p className="lead font-weight-normal my-5">Создавай и изучай бесплатные онлайн уроки</p>
                    <Link className="btn  btn-lg btn-primary" to="/ecourse" role="button">ПОЛЕТЕЛИ</Link>
                </div>
            </div>

            <div className="carousel-item  " data-interval="">
                <div className="jumbotron jumbo3 text-center">
                    <h1 className="display-3 text-center my-5">С нами учиться легко!</h1>
                    <p className="lead font-weight-normal my-5">
                    новое свежее место для развития и досуга.
                     Создавая его для Вас, мы задались целью обеспечить максимально благоприятные 
                     условия для роста, общения и достижения реальных результатов. 
                    
                    </p>
                    <a className="btn btn-primary btn-lg" href="#courses" role="button">ПОЛЕТЕЛИ</a>
                </div>
            </div>

            </div>

            <a className="carousel-control-prev" href="#MyCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#MyCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a>

      </div>
{/* ---------------------------------------------DIVIDER---------------------------------------------------------- */}
    <div className="divider m-5">
        <h1>НАШИ УСЛУГИ</h1>
        <h2>Рады приложить все усилия для Вашего успеха</h2>
        <svg height="3" width="200">
            <line x1="0" y1="0" x2="200" y2="0" style={{stroke:'#F07B2A', strokeWidth:'7'}}/>
        </svg>     
</div>
{/* -------------------------------CARD DECK--------------------------------------------------------------- */}


    <div className="d-flex flex-row justify-content-around flex-wrap  m-3">

        <div className="card m-3" style={{width: '20rem'}}>
            <img src={ require('./onlineSD.jpg') } className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Онлайн уроки</h5>
                <p className="card-text">Создавай уроки и делись знаниями со всем миром, 
                пользуйся коллекцией созданых другими уроков и освой любимый язык бесплатно!
                Заказывай индивидуальные занятия для еще более быстрого результата!</p>
                <a href="/ecourses" className="btn btn-primary">Полетели!</a>
            </div>
        </div>

        <div className="card m-3" style={{width: '20rem'}}>
            <img src={ require('./groupSD.jpg') } className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Занятия в группах</h5>
                <p className="card-text">
                Это новое свежее место для развития и досуга.
                 Создавая его для Вас, мы задались целью обеспечить максимально благоприятные условия для роста, 
                общения и достижения реальных результатов. Мы заинтересованы в успехе каждого студента
                </p>
                <a href="/contact" className="btn btn-primary">Полетели!</a>
            </div>
        </div>

        <div className="card m-3" style={{width: '20rem'}}>
            <img src={learnSD} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Детям</h5>
                <p className="card-text">
                Для маленьких и солнечных созданий авторские курсы,
                 разработанные нашими талантливыми педагогами. Коммуникативная методика, основанная на общении 
                 с ребёнком на иностранном языке, весело и эффективно!
                
                </p>
                <a href="/contact" className="btn btn-primary">Полетели!</a>
            </div>
        </div>
s
        <div className="card m-3" style={{width: '20rem'}}>
            <img src={ require('./itSD.jpg') } className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Для IT специалистов</h5>
                <p className="card-text">
                Мы все думаем, что знаем английский и умеем говорить на английском,
                но, оказавшись на переговорах с вашими партнерами или на 
                презентациях ваших проектов очень 
                важно точно выражать свои идеи, намерения и чувства. У нас вы
                научитесь быть максимально точным.

                </p>
                <a href="#courses" className="btn btn-primary">Полетели</a>
            </div>
        </div>


 
    </div>


 {/* ---------------------------------------------DIVIDER---------------------------------------------------------- */}
    <div className="divider m-5">
        <h1>Начни развития уже сейчас!</h1>
        <h2>У нас легко найти единомышлеников и учиться станет еще увлкательнее!</h2>
        <svg height="3" width="200">
            <line x1="0" y1="0" x2="200" y2="0" style={{stroke:'#F07B2A', strokeWidth:'7'}}/>
        </svg>     
</div>

{/* ---------------------------------------FB-------------------------------------------------- */}
        <div className="container-fluid FB">
            <div className="row ">

            <div className="col m-4 text-center text-sm-left">
                <h1 className="display-3 ">Открывай мир!</h1>
                <p className="lead font-weight-bolder">
                Наш центр – это уникальное место, 
                где ты достигнешь мечты свободного общения. 
                Знание иностранного языка открывает дверь в новый мир, полный удивительных возможностей. 
                Мы пройдем с тобой этот путь, обеспечив лучшие условия твоего роста. Ты можешь – ВЕРЬ!
                </p>
                <a className="btn  btn-lg btn-primary" href="/contacts" role="button">Полетели</a>
            </div>

            <div className="col my-3  text-center">
            </div>
               
            </div>

        </div>
        {/* ---------------------------------------------DIVIDER---------------------------------------------------------- */}
    <div className="divider m-5">
        <h1>Языки</h1>
        <h2>Learn `em all!</h2>
        <svg height="3" width="200">
            <line x1="0" y1="0" x2="200" y2="0" style={{stroke:'#F07B2A', strokeWidth:'7'}}/>
        </svg>     
</div>
{/* ----------------------------------------------Languages------------------------------------------------------------- */}
    <div id='courses'>
        <LandingList/>
    </div>



        {/* <div className="card">
            <div className="card-body">
                <h5 className="card-title">5CHINESE</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            
            <a href="#"><img src={ require('./jap.jpg') } className="card-img-top" alt="..."/></a>
        </div> */}
        

{/* ------------------------------------------------------------------------------------------------------------------ */}
</main>
    )
}

export default landing