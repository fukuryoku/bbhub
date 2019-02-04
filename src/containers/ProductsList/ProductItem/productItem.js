import React from 'react';
import {Link } from "react-router-dom";
import Moment from 'react-moment'
import defaultProfileImg from '../../../img/defaultProfileImg.png'
import { removeProduct } from '../../../store/actions/products';


const ProductItem = (props)=>{



    return(
      
        <div>
        
        <li className="list-group-item">
          <img
            src={props.profileImageUrl || defaultProfileImg}
            alt={props.username}
            height="100"
            width="100"
            className="timeline-image"
          />
          <div className="message-area">
            <Link to={`/${props.title}`}><h3>курс {props.title} от &nbsp;</h3></Link>
            <Link to="/">@{props.username} &nbsp;</Link>

            <span className="text-muted">
              <Moment className="text-muted" format="Do MMM YYYY">
                {props.date}
              </Moment>
            </span>
            {props.isCorrectUser && 
            <>
              <a className="btn btn-danger" onClick={props.removeProduct}>
                Delete
              </a>

             <Link className="btn btn-primary" to={`/users/${props.currentUserId}/products/${props.productId}/edit`} exact >Edit</Link>
              </>

              }



            <p>{props.text}</p>
            <p>цена {props.price}</p>
            
            <img
            src={props.img}
            alt={props.img}
            height="100"
            width="100"
            className="timeline-image"
          />
          </div>
        </li>
      </div>
    
    )
    
    
}


export default ProductItem;
