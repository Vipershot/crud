import React from 'react';

const Card = ({name,img,location}) => {
    return (
        <div className='col-md-4'>
            <div className="card">
              <img src={img} className="card-img-top" alt="..."/>
              <div className="card-body">
              <h1 className="card-text">{name}</h1>
              <p>{location}</p>
            </div>
           </div>
        </div>
    );
}

export default Card;
