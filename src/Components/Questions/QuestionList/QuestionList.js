import { useState, useEffect, useRef } from "react";
import Question from './Question'
import QuestionSkeleton from './QuestionSkeleton'
import { TextField, Button } from "@material-ui/core";

export default function QuestionList() {

    // ======================================== Create Skeletons ========================================
    const skeletonCreator = (count) => {
        const skeleton_array = new Array(count);
        for (let i = 0; i < count; i++) {
            skeleton_array.push(<QuestionSkeleton key={i} />)
        }
        return skeleton_array;
    }
    const additional_skeleton_list = useRef(null);
    const loadingSkeletonVisibilityChanger = (cssDisplayType) => {
        if (additional_skeleton_list.current !== null) {
            additional_skeleton_list.current.style.display = cssDisplayType;
        }
    }
    // ======================================== Fetch More Items with Intersection Observer ========================================
    const readyFor5MoreQuestions = (last_question_element) => {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(async (entry) => {
                if (entry.isIntersecting) {
                    setTimeout(async () => {
                        setQuestionList(question_list.concat(await fetchQuestion(10)));
                    }, 500);
                    observer.disconnect();
                }
            })
        }, { rootMargin: "0px" });
        io.observe(last_question_element);
    };
    // ======================================== Fetch Questions ========================================
    const [question_list, setQuestionList] = useState(null);

    const fetchQuestion = async (amount) => {
        loadingSkeletonVisibilityChanger("block")
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
        const question_array = await fetchQuestion(20);
        setQuestionList(question_array);
        loadingSkeletonVisibilityChanger("none")
    }, []);
    //When question list changes, change observed element
    useEffect(() => {
        if (question_list != null && question_list.length > 0) {
            const question_elements = document.querySelectorAll(".question-card");
            const last_element = question_elements[question_elements.length - 1];
            if ((last_element !== undefined) && last_element instanceof HTMLDivElement) {
                readyFor5MoreQuestions(last_element);
            }
        }
    }, [question_list])
    if (question_list != null && question_list.length > 0) {
        const question_items = question_list.map((q, i) => {
            return <Question key={i} question={q} />
        })
        return (
            <div className="question-list">
                <div className="search_box">
                    <TextField size="small" label="Axtarış mətni" variant="outlined" datatype="string" />
                    <Button size="small" variant="contained">Axtar</Button>
                </div>
                {question_items}
                <div ref={additional_skeleton_list} className="additional-skeleton-list">
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
