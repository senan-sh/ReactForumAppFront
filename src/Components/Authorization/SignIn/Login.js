import { TextField, Button } from "@material-ui/core";

export default function Login() {
  return (
    <div>
      <form onSubmit={(e)=>{e.preventDefault()}}>
        <div className="auth-form-inner">
          <TextField className="auth-form-element" variant="outlined" label="İstifadəçi adınız" />
          <TextField className="auth-form-element" variant="outlined" label="Hesabınız kodu" />
          <Button color="primary" className="auth-form-element" type="submit" variant="contained">
            Daxil ol
          </Button>
        </div>
      </form>
    </div>
  );
}
