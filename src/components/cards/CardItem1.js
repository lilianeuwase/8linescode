import React from 'react';
import { EnvelopeFill, Telephone } from "react-bootstrap-icons";

function CardItem1(props) {
  return (
    
      <li className='cards_item'>
        <div className='cards_item_link'>
          <figure className='cards_item_pic-wrap' data-category={props.name}>
            <img
              className='cards_item_img'
              alt='Travel'
              src={props.imgUrl}
            />
          </figure>
          <div className='cards_item_info'>
            <h5 className='cards_item_text'>{props.description}
            <Telephone />
            {props.number}
            <br />
            <EnvelopeFill />
            {"   "}
            {props.email}</h5>
          </div>
        </div>
      </li>
    
  );
}

export default CardItem1;
