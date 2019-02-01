import React from 'react'
import LandingList from '../LandingList/landingList'
import {Link} from 'react-router-dom';

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
                    <h1 className="display-3 text-center my-5"  >{`HELLO ${props.currentUser.user.username ||`friend`}`}</h1>
                    <p className="lead font-weight-normal my-5">Увлекательные уроки в просторных классах!</p>
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
                    <p className="lead font-weight-normal my-5">Коллекция авторских курсов от лучших учителей</p>
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
        <h1>OUR SERVISE</h1>
        <h2>Best quality</h2>
        <svg height="3" width="200">
            <line x1="0" y1="0" x2="200" y2="0" style={{stroke:'#F07B2A', strokeWidth:'7'}}/>
        </svg>     
</div>
{/* -------------------------------CARD DECK--------------------------------------------------------------- */}


    <div className="d-flex flex-row justify-content-around flex-wrap  m-3">

        <div className="card m-3" style={{width: '18rem'}}>
            <img src={ require('./learn1.jpg') } className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Онлайн уроки</h5>
                <p className="card-text">Создавай уроки и делись знаниями со всем миром, пользуйся коллекцией созданых другими уроков</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

        <div className="card m-3" style={{width: '18rem'}}>
            <img src={ require('./learn1.jpg') } className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">className learning</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

        <div className="card m-3" style={{width: '18rem'}}>
            <img src={ require('./learn1.jpg') } className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Translation</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

        <div className="card m-3" style={{width: '20rem'}}>
            <img src={ require('./learn1.jpg') } className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Testing</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>


 
    </div>


 {/* ---------------------------------------------DIVIDER---------------------------------------------------------- */}
    <div className="divider m-5">
        <h1>Lets be  Friends</h1>
        <h2>Learn`g is fun</h2>
        <svg height="3" width="200">
            <line x1="0" y1="0" x2="200" y2="0" style={{stroke:'#F07B2A', strokeWidth:'7'}}/>
        </svg>     
</div>

{/* ---------------------------------------FB-------------------------------------------------- */}
        <div className="container-fluid FB">
            <div className="row ">

            <div className="col my-3  mx-5">
                <h1 className="display-3 ">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <a className="btn  btn-lg btn-primary" href="#" role="button">Learn more</a>
            </div>

            <div className="col my-3  text-center">
            SOME FB
            </div>
               
            </div>

        </div>
        {/* ---------------------------------------------DIVIDER---------------------------------------------------------- */}
    <div className="divider m-5">
        <h1>Languages</h1>
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