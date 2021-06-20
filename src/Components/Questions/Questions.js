import QuestionList from "./QuestionList/QuestionList";
import QuestionSortFilter from "./QuestionList/QuestionSortFilter";

export default function Questions() {

    return (
        <div className="questions-section">
            <h1>Suallar</h1>
            <div className="questions-page">
                <QuestionSortFilter />
                <QuestionList />
                <div className="create-question"></div>
            </div>
        </div >
    );
}
