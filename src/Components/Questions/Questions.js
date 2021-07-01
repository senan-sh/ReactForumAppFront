import { useEffect } from "react";
import QuestionList from "./QuestionList/QuestionList";
import QuestionSortFilterCreate from "./QuestionsSortFilterCreateSearch/QuestionSortFilterCreate";

export default function Questions({ data: { setActivePage } }) {

    useEffect(() => {
        setActivePage("questions")
    }, [])

    return (
        <div className="questions-section">
            <h1>Suallar</h1>
            <div className="questions-page">
                <QuestionSortFilterCreate />
                <QuestionList />
            </div>
        </div >
    );
}
