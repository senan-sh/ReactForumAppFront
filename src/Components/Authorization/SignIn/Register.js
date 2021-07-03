import { TextField, Button } from "@material-ui/core";

export default function Register() {
    return (
        <div>
      <form onSubmit={(e)=>{e.preventDefault()}}>
        <div className="auth-form-inner">
          <TextField className="auth-form-element" variant="outlined" label="İstifadəçi adınız" />
          <TextField className="auth-form-element" variant="outlined" label="Email adresiniz" />
          <TextField className="auth-form-element" variant="outlined" label="Hesabınızın kodu" />
          <TextField className="auth-form-element" variant="outlined" label="Kodun təkrarı" />
          <Button color="primary" className="auth-form-element" type="submit" variant="contained">
            Daxil ol
          </Button>
        </div>
      </form>
    </div>
    )
}
