import React from 'react';
import kids from '../images/kids-cover.jpg';
import './Cover.css';

function Cover () {
    return (
        <div className="cover">
            <div className="cover__content">
                <p className="cover__contentHeader">
                    Welcome to the B&R Camps!
                </p>
                <p className="cover__contentText">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.                </p>
            </div>
            <img src={kids} className="cover__img" alt="kidscover" />
        </div>
    )
}

export default Cover;