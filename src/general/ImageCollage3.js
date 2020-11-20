import React from 'react';
import badminton from '../images/badminton.jpg';
import squash from '../images/squash.jpg';
import tennis from '../images/tennis.jpg';
import camp from '../images/camp.jpg';
import './ImageCollage3.css';

function ImageCollage () {
    return (
        <div className="imagecollage">
                <div className="imagebox box1">
                    Click here for Badminton Camps
                </div>
                <div className="imagebox box2">
                    Click here for Squash Camps
                </div>
                <div className="imagebox box3">
                    Click here for Tennis Camps
                </div>
                <div className="imagebox box4">
                    Click here for Junior Camps
                </div>
            <img src={badminton} className="imagecollage__image1 img" alt="badminton" />
            <img src={squash} className="imagecollage__image2 img" alt="squash" />
            <img src={tennis} className="imagecollage__image3 img" alt="tennis" />
            <img src={camp} className="imagecollage__image4 img" alt="camp" />
        </div>
    )
}

export default ImageCollage