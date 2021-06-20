import React from 'react'

export default function QuestionSkeleton() {
    return (
        <div className="skeleton-question-card">
            <div className="skeleton-question-card-user">
                {/* <img  alt="UserImage"  /> */}
                <span className="skeleton-question-card-image"></span>
                <p className="skeleton-question-card-username"></p>
            </div>
            <div className="skeleton-question-card-question">
                <span></span>
            </div>
        </div>
    )
}
