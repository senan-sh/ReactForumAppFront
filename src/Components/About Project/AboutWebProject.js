import TechStackList from './TechStackList'

export default function AboutWebProject() {

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
                    <h3>Web layihənin yaradılması prosesində istifadə olunan framework və kitabxanalar:</h3>
                    <TechStackList data={techStackList}/>
                </div>
            </div>
        </div>
    )
}
