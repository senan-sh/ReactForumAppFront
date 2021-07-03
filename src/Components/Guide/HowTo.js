import { useEffect, useRef } from 'react'

export default function HowTo({data:{setActivePage}}) {

    useEffect(() => {
        setActivePage("guide")
      }, [])

    const parentDiv = useRef(null)
    const buttonsDiv = useRef(null)


    const pathButtonTypingAnimation = () => {
        if (parentDiv.current !== null) {
            if (buttonsDiv.current !== null) {

                const btn_array = buttonsDiv.current.children
                const sections = parentDiv.current.children;

                for (let i = 0; i < btn_array.length; i++) {
                    const btn = btn_array[i];
                    btn.addEventListener("click", () => {
                        for (let j = 0; j < sections.length; j++) {
                            if (j !== i) {
                                sections[j].classList.remove("active");
                                btn_array[j].classList.remove("active");
                                sections[j].querySelector(".guide-section-inner>div").classList.remove("animating");
                            }
                        }
                        if (sections[i].classList.contains("active") === false) {
                            sections[i].classList.add("active");
                            sections[i].querySelector(".guide-section-inner>div").classList.add("animating");
                            btn.classList.add("active")
                        }
                    })
                }
            }
        }
    }

    useEffect(pathButtonTypingAnimation, [parentDiv])

    return (
        <div className="guide-page">
                <div ref={buttonsDiv} className="buttons4guide-section">
                    <button className="active guide-section-btn"  ></button>
                    <button className="guide-section-btn"></button>
                    <button className="guide-section-btn" ></button>
                    <button className="guide-section-btn"></button>
                </div>
            <div ref={parentDiv} className="guide-sections-wrapper">
                <div className="active guide-section">
                    <div className="guide-section-inner ">
                        <div className="animating">
                            <span>1.</span>
                            <span>Hesab yaradın</span>
                            <span className="material-icons-outlined">person</span>
                        </div>
                    </div>
                </div>
                <div className="guide-section">
                    <div className="guide-section-inner">
                        <div>
                            <span>2.</span>
                            <span>İstifadə qaydaları ilə tanış olun</span>
                            <span className="material-icons-outlined">library_books</span>
                        </div>
                    </div>
                </div>
                <div className="guide-section">
                    <div className="guide-section-inner">
                        <div>
                            <span>3.</span>
                            <span>İstədiyiniz mövzuda sorğu yaradın</span>
                            <span className="material-icons-outlined">help</span>
                        </div>
                    </div>
                </div>
                <div style={bgStyles.sectionFour} className="guide-section">
                    <div className="guide-section-inner">
                        <div>
                            <span>4.</span>
                            <span>Kəşf etməyə davam edin</span>
                            <span className="material-icons-outlined">lightbulb</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const bgStyles = {
    sectionFour : {
    }
}
