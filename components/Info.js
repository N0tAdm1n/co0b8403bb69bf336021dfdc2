import React from 'react';

export default function Info() {
    return(
        <div className="info">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="info__profile-img"/>
            <h1 className="info__name">Shamir Ahmed</h1>
            <h3 className="info__position">Frontend Developer</h3>
            <a href="#" className="info__website-link">shamirahmed.website</a>
            <div className="info__button-container">
                <button className="info__button-container__email-btn">
                    <img src="https://cdn-icons-png.flaticon.com/512/666/666162.png" />
                    Email
                </button>
                <button className="info__button-container__linkedin-btn">
                    <img src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png" />
                    LinkedIn
                </button>                
            </div>
        </div>
    );
}