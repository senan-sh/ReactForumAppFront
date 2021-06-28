import React from 'react'

export default function Question({ question }) {


    const static_profile_image_url = "/assets/img/static_user.png";
    const static_username = "Anonim";

    const username = question.user.username || static_username,
        image = question.user.image || static_profile_image_url,
        text = question.text || null;


    if (text) {
        return (
            <div className="question-card">
                <div className="question-card-user">
                    <img src={image} alt="UserImage" title={username} />
                    <span>İstifadəçi:</span>
                    <p>{username}</p>
                </div>
                <div className="question-card-question">
                    <span>Sual:</span>
                    <p>{text}</p>
                </div>
            </div>
        )
    } else {
        return <div>Xəta</div>
    }
}
