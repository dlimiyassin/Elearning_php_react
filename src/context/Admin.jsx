import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { NotificationManager } from 'react-notifications';
import { SideBarContext } from './SideBar';

const item={
    cin:12566,
    nom:'testn',
    prenom:'testp',
    email:'test@gmail.com',
    filiere:'informatique',
    tele:'060254865',
  
  
  }


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


export const AdminContext=createContext(null)
function Admin({children}) {
//const [listProf,setlistProf]=useState([item])
const [isAddProfModal,setisAddProfModal]=useState(false)
const [isEditProfModal,setisEditProfModal]=useState(false)
const [EditedProfIndex,setEditedProfIndex]=useState()
const [editedProfItem,setEditedProfItem]=useState()


//const [listEtudiant,setlistEtudiant]=useState([item])
const [isAddEtudiantModal,setisAddEtudiantModal]=useState(false)
const [isEditEtudiantModal,setisEditEtudiantModal]=useState(false)
const [EditedEtudiantIndex,setEditedEtudiantIndex]=useState()
const [editedEtudiantItem,setEditedEtudiantItem]=useState()


//const [listModule,setlistModule]=useState([item])
const [isAddModuleModal,setisAddModuleModal]=useState(false)
const [isEditModuleModal,setisEditModuleModal]=useState(false)
const [EditedModuleIndex,setEditedModuleIndex]=useState()
const [editedModuleItem,setEditedModuleItem]=useState()
const [isShowModuleDetails,setisShowModuleDetails]=useState( Array(6).fill(false))

const [selectedModule,setselectedModule]=useState(false)
const [editedIndex,setEditedIndex]=useState(false)

const {listProf,setlistProf}=useContext(SideBarContext)
const {listEtudiant,setlistEtudiant}=useContext(SideBarContext)
const {listModule,setlistModule,isSwitchtab,currentUser}=useContext(SideBarContext)


useEffect(()=>{

  if(isSwitchtab[3]){
    setlistModule(currentUser.modules)
  }

  setisShowModuleDetails(Array(isShowModuleDetails.length).fill(false))


},[isSwitchtab])

const notifError=(error)=>{
    createNotification('error',error)
  }
  const notifSuccess=(success)=>{
   
    createNotification('success',success)

  }
const onEditProfModal = (index)=>{
    setEditedProfIndex(index)
    setEditedProfItem(listProf[index])
    setisEditProfModal(!isEditProfModal)
}






















const onEditProf=(item)=>{
  let list = [...listProf]


   
   axios.patch("http://127.0.0.1:8000/api/Prof/"+list[EditedProfIndex].id,{
      ...item
    }).then(response => {
      console.log(list[EditedProfIndex].id)
      
      console.log(response)
      
      list[EditedProfIndex]=response.data.prof
      setlistProf(list)
      setisEditProfModal(!isEditProfModal)
      notifSuccess('Le professeur est modifié avec succès')

    }).catch(error => {

     console.log(error.response) 
      if (error) notifError(error.response)
      return
    });

}
const onAddProfModal = ()=>{
    setisAddProfModal(!isAddProfModal)
}

const onAddProf=(item)=>{
  let list = [...listProf]
  item.badge='Prof'
  item.password='123456789'

  console.log(item)
   axios.post("http://127.0.0.1:8000/api/Prof",{
      ...item
    }).then(response => {
      
      console.log(response.data.prof)
      
    list.push(response.data.prof)
      console.log(list)
  
    setlistProf(list)
    setisAddProfModal(!isAddProfModal)
    notifSuccess('Le professeur est ajouté avec succès')

    }).catch(error => {

     console.log(error.response) 
      if (error) notifError(error.response)
      return
    });

  


}
const onDeleteProf=(index)=>{
   
    let list = [...listProf]

    

    axios.delete("http://127.0.0.1:8000/api/Prof/"+list[index].id).then(response => {
        
       
        
      list.splice(index, 1);
      setlistProf(list)
      //setActulize(!actulize)
      notifSuccess('Le professeur est supprimé avec succès')

      }).catch(error => {

       console.log(error.response) 
        if (error) notifError(error.response)
        return
      });
     
}



//Etudiant


const onEditEtudiantModal = (index)=>{
  setEditedEtudiantIndex(index)
  setEditedEtudiantItem(listEtudiant[index])
  setisEditEtudiantModal(!isEditEtudiantModal)
}


const onEditEtudiant=(item)=>{
let list = [...listEtudiant]

 
 


 axios.patch("http://127.0.0.1:8000/api/Etudiant/"+list[EditedEtudiantIndex].id,{
    ...item
  }).then(response => {
    
   
    
   
    list[EditedEtudiantIndex]=response.data.etudiant
    setlistEtudiant(list)
    setisEditEtudiantModal(!isEditEtudiantModal)
    notifSuccess('L\'étudiant est modifié avec succès')

  }).catch(error => {

   console.log(error.response) 
    if (error) notifError(error.response)
    return
  });

}
const onAddEtudiantModal = ()=>{
  setisAddEtudiantModal(!isAddEtudiantModal)
}

const onAddEtudiant=(item)=>{
let list = [...listEtudiant]

  item.badge='Etudiant'
  item.password='123456789'
 

  axios.post("http://127.0.0.1:8000/api/Etudiant",{
    ...item
  }).then(response => {
    
    console.log(response.data.Etudiant)
    
 
  list.push(response.data.etudiant)
  setlistEtudiant(list)
  setisAddEtudiantModal(!isAddEtudiantModal)
  notifSuccess('L\'étudiant est ajouté avec succès')

  }).catch(error => {

   console.log(error.response) 
    if (error) notifError(error.response)
    return
  });




}
const onDeleteEtudiant=(index)=>{
 
  let list = [...listEtudiant]

  

  axios.delete("http://127.0.0.1:8000/api/Etudiant/"+list[index].id).then(response => {
      
     
      
    list.splice(index, 1);
    setlistEtudiant(list)
    //setActulize(!actulize)
    notifSuccess('L\'étudiant est supprimé avec succès')

    }).catch(error => {

     console.log(error.response) 
      if (error) notifError(error.response)
      return
    });
   
}



//Modules 


const onEditModuleModal = (index)=>{
  setEditedModuleIndex(index)
  setEditedModuleItem(listModule[index])
  setisEditModuleModal(!isEditModuleModal)
}


const onEditModule=(item)=>{
let list = [...listModule]


 
  axios.patch("http://127.0.0.1:8000/api/Module/"+list[EditedModuleIndex].id,{
    ...item
  }).then(response => {
    
   
    
 
    list[EditedModuleIndex]=response.data.Module
    setlistModule(list)
    setisEditModuleModal(!isEditModuleModal)
    notifSuccess('Le module est modifié avec succès')

  }).catch(error => {

   console.log(error.response) 
    if (error) notifError(error.response)
    return
  });

}
const onAddModuleModal = ()=>{
  setisAddModuleModal(!isAddModuleModal)
}

const onAddModule=(item)=>{
let list = [...listModule]

  item.badge='Module'
  item.password='123456789'


 axios.post("http://127.0.0.1:8000/api/Module",{
    ...item
  }).then(response => {
    
    console.log(response.data.Module)
    
  list.push(response.data.Module)
  setlistModule(list)
  setisAddModuleModal(!isAddModuleModal)
  notifSuccess('Le module est ajouté avec succès')
  }).catch(error => {

   console.log(error.response) 
    if (error) notifError(error.response)
    return
  });




}
const onDeleteModule=(index)=>{
 
  let list = [...listModule]

  

  axios.delete("http://127.0.0.1:8000/api/Module/"+list[index].id).then(response => {
      
     
      
    list.splice(index, 1);
    setlistModule(list)
    //setActulize(!actulize)
    notifSuccess('Le module est supprimé avec succès')

    }).catch(error => {

     console.log(error.response) 
      if (error) notifError(error.response)
      return
    });
  
}
const onShowModuleDetails = (index)=>{
 
 // getListArtciles(listModule[index])
 axios.get("http://127.0.0.1:8000/api/Module/"+listModule[index].id).then(response => {
      
     console.log(listModule[index])
     console.log(response.data)

  
  setEditedIndex(index)
  setselectedModule(response.data)
  if(isShowModuleDetails[index]){
    setisShowModuleDetails(Array(isShowModuleDetails.length).fill(false))
  }else{
    let arr=Array(isShowModuleDetails.length).fill(false)
    arr[index]=true
    setisShowModuleDetails(arr)
  }



  }).catch(error => {

   console.log(error.response) 
    if (error) notifError(error.response)
    return
  });
  
}
const addProfToModule=(module_id,prof_id)=>{
  axios.post("http://127.0.0.1:8000/api/ModuleProf",{
    module_id,
    prof_id
  }).then(response => {
    
    console.log(response.data.succes)
    
  notifSuccess(response.data.succes)
  }).catch(error => {

   console.log(error.response) 
    if (error) notifError(error.response)
    return
  });
}


const deleteProfToModule=(module_id,prof_id)=>{
  axios.post("http://127.0.0.1:8000/api/ModuleProf/delete",{
    module_id,
    prof_id
  }).then(response => {
    
    console.log(response.data.succes)
    
  notifSuccess('Le professeur est retiré')
  }).catch(error => {

   console.log(error.response) 
    if (error) notifError(error.response)
    return
  });


}
const addEtudiantToModule=(module_id,etudiant_id)=>{
  axios.post("http://127.0.0.1:8000/api/ModuleEtudiant",{
    module_id,
    etudiant_id,
    niveau:0
  }).then(response => {
    
    console.log(response.data.succes)
    
  notifSuccess(response.data.succes)
  }).catch(error => {

   console.log(error.response) 
    if (error) notifError(error.response)
    return
  });
}


const deleteEtudiantToModule=(module_id,etudiant_id)=>{
  axios.post("http://127.0.0.1:8000/api/ModuleEtudiant/delete",{
    module_id,
    etudiant_id
  }).then(response => {
    
    console.log(response.data)
    
  notifSuccess('L\'étudiant est retiré')
  }).catch(error => {

   console.log(error.response) 
    if (error) notifError(error.response)
    return
  });


}

 
  return (
    <AdminContext.Provider value={{listProf,isAddProfModal,isEditProfModal,onEditProfModal,onEditProf,onDeleteProf,onAddProf,onAddProfModal,editedProfItem,
      listEtudiant,isAddEtudiantModal,isEditEtudiantModal,onEditEtudiantModal,onEditEtudiant,onDeleteEtudiant,onAddEtudiant,onAddEtudiantModal,editedEtudiantItem,
      listModule,isAddModuleModal,isEditModuleModal,onEditModuleModal,onEditModule,onDeleteModule,onAddModule,onAddModuleModal,editedModuleItem, selectedModule, 
      onShowModuleDetails,isShowModuleDetails,addProfToModule,deleteProfToModule,addEtudiantToModule,deleteEtudiantToModule}}>

    {children}
    </AdminContext.Provider>
  )
}

export default Admin