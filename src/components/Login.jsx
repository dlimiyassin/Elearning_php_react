import React, { useContext, useState } from 'react'
import {GeneralContext} from '../context/General'
import SideBar, { SideBarContext } from '../context/SideBar'
const Login = ({thesard}) => {
    const {islogin ,setIslogin,connect}=useContext(SideBarContext)
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')

    const handleChanges=(index,value)=>{
      if(index==0){
        setemail(value)
      }else{
        setpassword(value)
      }
    }

    const login=(e)=>{
    
        connect(e,email,password)
     
    }
  return (
      <div className="STYLE_OVERLAY">
    <div className="center-login">
  <h1 className='text-[25px] font-semibold'>Connexion</h1>
  <form method="post">
    <div className="txt_field">
      <input type="text" onChange={(e)=>handleChanges(0,e.target.value)} required />
      <span />
      <label>Email</label>
    </div>
    <div className="txt_field">
      <input type="password" onChange={(e)=>handleChanges(1,e.target.value)} required />
      <span />
      {thesard?<label>CIN</label>:<label>Mot de passe</label>}
    </div>
    
    <input type='submit' value='Se connecter' defaultValue="Login" onClick={(e)=>{login(e)}} />
    <div className="signup_link">
       <a onClick={()=>setIslogin(!islogin)} href="#">Annuler</a>
    </div>
  </form>
</div>
</div>

  )
}

export default Login