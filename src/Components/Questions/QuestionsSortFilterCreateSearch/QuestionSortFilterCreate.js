import React from 'react'
import CreateQuestion from "./CreateQuestion";

export default function QuestionSortFilterCreate() {
    return (
        <div className="question-sort-filter">
            <CreateQuestion />
            <div className="questions-sort">
                <span className="material-icons-outlined">sort</span>
                <span>Sırala</span>
            </div>
            <div className="questions-filter">
                <span className="material-icons-outlined">filter_alt</span>
                <span>Filtr</span>
            </div>
        </div>

    )
}
