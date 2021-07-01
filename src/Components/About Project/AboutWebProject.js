import { useEffect } from 'react'
import TechStackList from './TechStackList'

export default function AboutWebProject({ data: { setActivePage } }) {

    useEffect(() => {
        setActivePage("about_project")
    }, [])

    const techStackList = [
        { name: "React", img: "https://avatars.githubusercontent.com/u/6412038?s=200&v=4" },
        { name: "Swiper", img: "https://img.stackshare.io/service/21212/default_5a94ffae10b58d58b627f27e5c21cb4a919801c3.png" },
        { name: "Google Material Icons", img: "/assets/img/icons-google.jpg" },
        { name: "React Material-UI", img: "https://pngimage.net/wp-content/uploads/2019/05/logo-icon-facebook-png-.png" },
        { name: "React-Router", img: "https://salar.one/wp-content/uploads/2018/07/react-router-logo.png" }
    ]

    return (
        <div className="about-this-project-section">
            <div className="about-this-project-inner">
                <p>Proyekt yalnız nümayiş məqsədilə hazırlanmışdır</p>
                <div className="about-project-tech-stack">
                    <h3>Web layihənin yaradılması prosesində istifadə olunan framework və kitabxanalar</h3>
                    <TechStackList data={techStackList} />
                </div>
            </div>
            <div className="project-source-code">
                <a target="_blank" href="https://github.com/senan-sh/ReactForumAppFront.git">
                    <div className="project-source-code-inner">
                        <span>
                            Layihənin açıq qaynaq kodu:
                            <img src="https://camo.githubusercontent.com/d613a83642bb3f9223c92f54607676a4597473839b47ee9d9936135f123ea0a0/68747470733a2f2f696d672e737461636b73686172652e696f2f736572766963652f32372f7342737642626a592e706e67" />
                        </span>
                    </div>
                </a>
            </div>
        </div>
    )
}
