import React from 'react';
import icon from '../images/icon.jpg';
import './InfoTennis.css';

function InfoTennis () {
    return (
        <div className="tennisinfo">
            <p className="tennisinfo__title">Tennis</p>
            <div className="tennisinfo__docs">
                <div className="tennisinfo__docsSingle doc1">
                    <img src={icon} className="iconimg" alt="docicon" />
                    <span className="icontext">2020 Winter Camp Form</span>
                </div>
                <div className="tennisinfo__docsSingle doc2">
                    <img src={icon} className="iconimg" alt="docicon" />
                    <span className="icontext">2020 March Break Form</span>
                </div>
                <div className="tennisinfo__docsSingle doc3">
                    <img src={icon} className="iconimg" alt="docicon" />
                    <span className="icontext">2020 Summer Camp Form</span>
                </div>
                <div className="tennisinfo__docsSingle doc4">
                    <img src={icon} className="iconimg" alt="docicon" />
                    <span className="icontext">COVID Waiver Form</span>
                </div>
            </div>
            <div className="tennisinfo__contentText">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </div>
    )
}

export default InfoTennis;