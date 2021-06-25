import { useEffect, useRef } from 'react'

export default function HowTo() {


    const parentDiv = useRef(null)
    const buttonsDiv = useRef(null)

    useEffect(() => {
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
                            }
                        }

                        if (sections[i].classList.contains("active") === false) {
                            sections[i].classList.add("active");
                            btn.classList.add("active")
                        }

                    })



                }
            }
        }
    }, [parentDiv])

    return (
        <div className="guide-page">
            <div ref={buttonsDiv} className="buttons4guide-section">
                <button className="guide-section-btn"  ></button>
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
                            <span>İstifadəçi qaydaları ilə tanış olun</span>
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
                <div className="guide-section">
                    <div className="guide-section-inner">
                        <div>
                            <span>4.</span>
                            <span></span>
                            <span className="material-icons-outlined">help</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
