import React from 'react';

const footer = (props)=>{

    
    return(
        <footer id="footerContainer" className="container-fluid  py-3">

            <div className="row justify-content-between flex-row  text-center ">
                <div className="col">
                    <a className="align-self-center">
                        <span  className="fab fab fa-2x fa-telegram-plane"></span>
                    </a>     
                </div>
                <div className="col">
                    <a className="align-self-center  ">
                        <span  className="fab fab fa-2x fa-facebook"></span>
                    </a>     
                </div>
                <div className="col">
                    <a className="align-self-center  ">
                        <span  className="fab fab fa-2x fa-instagram"></span>
                    </a>     
                </div>


            </div>

            <div className="row justify-content-between flex-column flex-sm-row law">
                    <a href="" className="myA text-center">© 2019 All Rights Reserved HUB LTD Terms of Use and Privacy Policy.</a>
                    <a href="" className="myA text-center">Designed by FUKUROKU.APPS</a>
            </div>


        </footer> 
    

    )
}


export default footer;
