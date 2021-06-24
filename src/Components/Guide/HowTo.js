import { useEffect, useRef } from 'react'

export default function HowTo() {


    const parentDiv = useRef(null)

    useEffect(() => {
        if (parentDiv !== null) {
            const { children } = parentDiv.current
            for (let i = 0; i < children.length; i++) {
                children[i].addEventListener("click", (e) => {
                    //Activate clicked div 
                    children[i].classList.add("active")
                    //Deactivate other divs 
                    for (let j = 0; j < children.length; j++) {
                        if (i !== j) {
                            if (children[j].classList.contains("active")) {
                                children[j].classList.remove("active")
                            }
                        }
                    }
                });
            }
        }
    }, [parentDiv])

    return (
        <div ref={parentDiv} className="guide-page">
            <div className="active guide-section">
                <div><h1>Section 1</h1></div>
            </div>
            {/* <div className="guide-section">
                <div><h1>Section 2</h1></div>
            </div>
            <div className="guide-section">
                <div><h1>Section 3</h1></div>
            </div>
            <div className="guide-section">
                <div><h1>Section 4</h1></div>
            </div> */}
        </div> 
    )
}
