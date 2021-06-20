import { useState, useEffect } from "react";
import Question from './Question'
import QuestionSkeleton from './QuestionSkeleton'

export default function QuestionList() {



    // ======================================== Create Skeletons ========================================
    const skeletonCreator = (count) => {
        const skeleton_array = new Array(count);
        for (let i = 0; i < count; i++) {
            skeleton_array.push(<QuestionSkeleton key={i} />)
        }
        return skeleton_array;
    }








    // ======================================== Fetch More Items with Intersection Observer ========================================
    const intersection_observer_callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {

            }
        })
    }


    // const readyFor5MoreQuestions = () => {
    //     const io = new IntersectionObserver(intersection_observer_callback, { rootMargin: "-40px" });
    //     io.observe(line);
    // };










    // ======================================== Fetch Questions ========================================
    const [question_list, setQuestionList] = useState(null);

    const fetchQuestion = async (amount) => {
        // const skeletons = [];
        const response = await fetch(`https://opentdb.com/api.php?amount=${amount}`, { method: "GET" });
        const { results } = await response.json();
        const question_array = results.map((e) => {
            return {
                text: e.question,
                user: {
                    username: e.correct_answer,
                    image: null
                }
            }
        });
        return question_array;
    };
    useEffect(async () => {
        const question_array = await fetchQuestion(10);
        setQuestionList(question_array);
    }, []);


    useEffect(() => {
    }, [input])











    if (question_list != null && question_list.length > 0) {


        const question_items = question_list.map((q, i) => {
            return <Question key={i} question={q} />
        })

        return (
            <div className="question-list">
                {question_items}
                <div>
                    {skeletonCreator(5)}
                </div>
            </div>
        )

    } else {
        return (
            <div className="skeleton-question-list">
                {skeletonCreator(10)}
            </div>)
    }


}
