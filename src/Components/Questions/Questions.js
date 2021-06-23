import QuestionList from "./QuestionList/QuestionList";
import QuestionSortFilterCreate from "./QuestionsSortFilterCreateSearch/QuestionSortFilterCreate";

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
