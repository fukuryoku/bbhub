import React from 'react'
import classes from './course.module.css'

const course = (props)=>{

    // const title='English'
    // const price='500 UAH per month';


    return(
        <div className={`container-fluid d-flex flex-column my-5`}>
                    <div className=' row'>
                        <div className="divider m-3">
                            <h1 >{props.title}</h1>
                            <svg height="3" width="200">
                                <line x1="0" y1="0" x2="200" y2="0" style={{stroke:'#F07B2A', strokeWidth:'7'}}/>
                            </svg>     
                        </div>
                     </div>

                    <div className=' row'>

                        <div className='col-sm-12 col-lg-6'>
                            <div id="carouselExampleInterval" className="carousel slide carousel-fade" data-ride="carousel">
                                <div className="carousel-inner">
                                    {props.img.map((URL, index)=>{
                                       return(
                                        <div className={`carousel-item ${index==0? `active`:null}`} 
                                                data-interval='2000' 
                                                key={index}>
                                            <img src={URL} className="d-block w-100" alt={URL}/>
                                        </div>
                                       ) 
                                    })}

                                    {/* <div className="carousel-item" data-interval="2000">
                                    <img src={ require('./EN2.jpg') } className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                    <img src={ require('./EN3.jpg') } className="d-block w-100" alt="..."/>
                                    </div> */}

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

                        <div className='col-sm-12 col-lg-6'>
                            <p className={classes.CourseText}>{props.text}</p>
                            <h2 className={classes.CourseText}>{props.price}</h2>
                            <a href="/contact" className={`${classes.CourseBtn} btn btn-block btn-primary`}>Lets Rock</a>
                        </div>

                     </div>



        </div>
    )
}
export default course;