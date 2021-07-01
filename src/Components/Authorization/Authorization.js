import { useEffect } from 'react';
import LogInRegister from './SignIn/LogInRegister'
export default function Authorization({data:{setActivePage}}) {

  useEffect(() => {
    setActivePage("authorization")
  }, [])


  return (
    <div className="authorization">
      <LogInRegister />
    </div>
  );
}
