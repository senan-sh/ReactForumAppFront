import QuestionList from "./QuestionList/QuestionList";
import QuestionSortFilterCreate from "./QuestionList/QuestionSortFilterCreate";

export default function Questions() {

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
