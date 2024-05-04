import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { NotificationManager } from 'react-notifications';
export const SideBarContext=createContext(null)


const createNotification = (type,message) => {
  
  
  switch (type) {
    case 'info':
      NotificationManager.info(message,'Info message');
      break;
    case 'success':
      NotificationManager.success(message,'Success message');
      break;
    case 'warning':
      NotificationManager.warning(message,'Warning message');
      break;
    case 'error':
     /* NotificationManager.error('Error message', message, 5000, () => {
        alert('callback');
      });*/
      NotificationManager.error(message,'Error message')
      break;
  }

}
function SideBar({children}) {
    const [isSwitchtab,setisSwitchtab]=useState([false])
    const [isAdmin,setisAdmin]=useState(false)
    const [isProf,setisProf]=useState(false)
    const [isEtudiant,setisEtudiant]=useState(false)


    const [islogin,setIslogin]=useState(false)
    const [isSideBar,setisSideBar]=useState(false)
    const [currentUser,setcurrentUser]=useState({})
    const [listProf,setlistProf]=useState()
    const [listEtudiant,setlistEtudiant]=useState()
    const [listModule,setlistModule]=useState()

    
const notifError=(error)=>{
  createNotification('error',error)
}
const notifSuccess=(success)=>{
 
  createNotification('success',success)

}
const notifWarning=(success)=>{
 
  createNotification('warning',success)

}
    const switchtab = (index)=>{
        let arr = Array(8).fill(false);
        arr[index]=true;
        setisSwitchtab(arr)
    }

    const [isValid,setisValid]=useState(Array(1).fill(false))

    const validating=(index)=>{
        let arr=[...isValid]
        arr[index]=!isValid[index]
        setisValid(arr)
        console.log(isValid)
    }
    const initilizequiz=(number)=>{
        let arr = Array(number).fill(false);
            
        setisValid(arr)
    }




    const connect=(e,email,password)=>{
  
      e.preventDefault()



        axios.post("http://127.0.0.1:8000/api/Admin/connect", {
          email: email,
          password: password,
         
         
        }).then(response => {
          
        console.log(response.data)
          if(response.data.admin) {
            setcurrentUser(response.data.admin)
            setIslogin(false)
            setisAdmin(true)

            setisSideBar(true)
            notifSuccess(response.data.message)
            }else if(response.data.prof){
              setcurrentUser(response.data.prof)
              setisProf(true)
              setIslogin(false)
              setisSideBar(true)
              notifSuccess(response.data.message)
            }else if(response.data.etudiant){
              setcurrentUser(response.data.etudiant)
              setIslogin(false)
              setisEtudiant(true)

              setisSideBar(true)
              notifSuccess(response.data.message)
            }else{
              notifWarning(response.data.message)
            }
  
        }).catch(error => {
          setIslogin(false)
         console.log(error.response) 
          if (error) notifError(error.response)
          return
        });
    }
    const disconnect=()=>{
      setisAdmin(false)
      setisProf(false)
      setisEtudiant(false)

        
        setisSideBar(false)
    }


    const getListProfs=()=>{
        
      axios.get("http://127.0.0.1:8000/api/Prof").then(response => {
        console.log('response.data.profs')
        
        console.log(response.data)
        setlistProf(response.data)
      
  
      }).catch(error => {
  
       console.log(error.response) 
        if (error) notifError(error.response)
        return
      });
    }

    const getListEtudiants=()=>{
        
      axios.get("http://127.0.0.1:8000/api/Etudiant").then(response => {
        
        
        console.log(response.data)
        setlistEtudiant(response.data)
      
  
      }).catch(error => {
  
       console.log(error.response) 
        if (error) notifError(error.response)
        return
      });
    }
    const getListModules=()=>{
        
      axios.get("http://127.0.0.1:8000/api/Module").then(response => {
        
        
        console.log(response.data)
        setlistModule(response.data)
      
  
      }).catch(error => {
  
       console.log(error.response) 
        if (error) notifError(error.response)
        return
      });
    }


    useEffect(()=>{
      if(isSwitchtab[5]) getListProfs()
      if(isSwitchtab[2]) getListEtudiants()
      if(isSwitchtab[1]){
        getListModules()
        getListProfs()
        getListEtudiants()
      }

    },[isSwitchtab])
    useEffect(()=>{
      switchtab(-1)

    },[currentUser])


  return (
    <SideBarContext.Provider value={{switchtab,isSwitchtab,validating,isValid,isAdmin,isEtudiant,isProf,islogin ,
    connect,disconnect,isSideBar,setisSideBar,setIslogin,
    listProf,setlistProf,currentUser,listEtudiant,setlistEtudiant,listModule,setlistModule}}>

    {children}
    </SideBarContext.Provider>
  )
}

export default SideBar