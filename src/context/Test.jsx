import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { NotificationManager } from 'react-notifications';
import { SideBarContext } from './SideBar';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
export const TestContext=createContext(null)
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
function Test({children}) {
const [isValid,setisValid]=useState(Array(6).fill(-1))
const [listTest,setListTest]=useState([])
const [listCours,setListCours]=useState([])
const [level,setLevel]=useState(-1)
const [module,setModule]=useState()
const [sscore,setScore]=useState()
const [isCertificate,setisCertificate]=useState(false)



const {currentUser}=useContext(SideBarContext)
const notifError=(error)=>{
  createNotification('error',error)
}
const notifSuccess=(success)=>{
 
  createNotification('success',success)

}
const notifWarning=(success)=>{
 
  createNotification('warning',success)

}

const validating=(index,value)=>{

    let arr=[...isValid]
    arr[index]=value
    setisValid(arr)
    //console.log(isValid)
}
const confirmer=(module_id)=>{
  let etudiant_id=currentUser.id
  console.log(isValid)
  if(isValid.includes(0)){
    notifError('Veuillez valider toutes les réponses');
  }else{
    let score=0
    isValid.forEach((element,index) => {
      if(element==listTest[index].correct) score+=1

    });
    let newLevel
    if (level==0) {
      switch (true) {
        case score>8:
          newLevel=3
          break;
        case score>4:
          newLevel=2
            break;
        default:
          newLevel=1
          break;
      }
      // setisCertificate(true)
      // setScore(score)
    }else if( level<3 && score>7){
      newLevel=level+1
    }else if( score>7){
      newLevel=level
      setisCertificate(true)
      setScore(score)
    }else{
      newLevel=0
      
    }
    if(newLevel==0){
      notifSuccess('Votre score est '+score)
      notifWarning('Vous n\'avez pas réussi')
    }else{
      axios.post("http://127.0.0.1:8000/api/ModuleEtudiant/update",{
        module_id,etudiant_id,level:newLevel
      }).then(response => {
          console.log(response.data.level)
          notifSuccess('Votre score est '+score)
 notifSuccess(response.data.succes+'. Niveau '+response.data.level)
          getLevel(module_id)
    
    
    
      }).catch(error => {
    
      console.log(error.response) 
        if (error) notifError(error.response)
        return
      });
  }

    }
      
}

const getLevel=(module_id)=>{
  let etudiant_id=currentUser.id
  axios.post("http://127.0.0.1:8000/api/ModuleEtudiant/level",{
    module_id,etudiant_id
  }).then(response => {
      console.log(response.data.level.niveau)
      setLevel(response.data.level.niveau)
      getListCoursNTest(module_id,response.data.level.niveau)

 

  }).catch(error => {

   console.log(error.response) 
    if (error) notifError(error.response)
    return
  });
}


const getListCoursNTest=(module_id,level)=>{

  axios.post("http://127.0.0.1:8000/api/Module/show",{
    id:module_id,
    level:level
  }).then(response => {
      console.log(response.data)
  setListCours(response.data.cours)
  setListTest(response.data.tests)
  let arr = Array(response.data.tests.length ).fill(0);
        
    setisValid(arr)
console.log('calledd')
 

  }).catch(error => {

   console.log(error.response) 
    if (error) notifError(error.response)
    return
  });
}


const downloadPdfDocument = (rootElementId , downloadFileName) => {
  const input = document.getElementById(rootElementId);
  html2canvas(input)
      .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
      
            let pdf=new jsPDF('l', 'mm', [297, 210]);
            const imgProps= pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, 'JPEG', 0, 0,pdfWidth,pdfHeight);
            pdf.save(`${downloadFileName}.pdf`);
            setisCertificate(false)
      })
}


  return (
    <TestContext.Provider value={{validating,isValid,getListCoursNTest,listCours,listTest,level,getLevel,confirmer,module,setModule,sscore,module,isCertificate,downloadPdfDocument}}>

    {children}
    </TestContext.Provider>
  )
}

export default Test