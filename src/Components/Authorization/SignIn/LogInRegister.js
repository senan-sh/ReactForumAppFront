import { useRef, useState } from "react";
import AccountEntrance from "./AccountEntrance";
import Switch from "@material-ui/core/Switch";

export default function LogInRegister() {

  const [register, setRegister] = useState(true);
  const changeRegister = () => {
    setRegister(!register);
  };




  const authHiddenInfo = useRef(null);
  const onClickInfoIcon = () => {
    authHiddenInfo.current.style.transform = "translateY(0)";
    authHiddenInfo.current.style.visibility = "visible";
    authHiddenInfo.current.style.opacity = "1";
  };
  const onClickInfoCloseIcon = () => {
    authHiddenInfo.current.style.transform = "translateY(-100%)";
    authHiddenInfo.current.style.visibility = "hidden";
    authHiddenInfo.current.style.opacity = "0";
  };






  return (
    <div className="auth-login-register" style={backgroundImageStyle}>
      <div className="auth-overlay"></div>
      <div className="login-or-register-wrapper">
        <div className="account-existence-switch-wrapper">
          <div ref={authHiddenInfo} className="auth-hidden-info">
            <div className="auth-hidden-info-inner">
              <span onClick={onClickInfoCloseIcon} className="material-icons auth-info-close-icon">close</span>
              <p>Daha rahat istifadə üçün hesab yaradın və ya hesabınıza daxil olun.</p>
            </div>
          </div>
          <span onClick={onClickInfoIcon} className="material-icons-outlined auth-info-show-icon">
            info
          </span>
          <span>Hesabınız var?</span>
          <Switch color="primary" checked={register} onChange={changeRegister} />
        </div>
        <h2 hidden={!register}>Daxil ol</h2>
        <h2 hidden={register}>Qeydiyyatdan keç</h2>
        <AccountEntrance register={register} />
      </div>
    </div>
  );
}

const backgroundImageStyle = {
  backgroundImage: "url(/assets/img/privacy.jpg)",
  width: "100%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  // Keeping aspect-ratio
  // paddingTop: "56.25%",
  minHeight: "80vh",
};
