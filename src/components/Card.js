import React from 'react';
import './Card.css';

const Card = props => (
    <div className="gameCard" onClick={() => props.handleClick(props.id, props.gridID)}>
        <img className="img-thumbnail" src={props.image} alt={props.name}/>
    </div>
)

export default Card;