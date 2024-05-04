import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { NotificationManager } from 'react-notifications';
import Admin, { AdminContext } from './Admin';

const item={
    intitule:'fgfgfg0',
    filiere:'tttt',
    
  
  
  }
  const item1={
    intitule:'fgfgfg0=1',
    filiere:'tttt',
    
  
  
  }
  const item2={
    intitule:'fgfgfg0=2',
    filiere:'tttt',
    
  
  
  }
  const item3={
    intitule:'fgfgfg0=3',
    filiere:'tttt',
    
  
  
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


export const ProfesseurContext=createContext(null)


const listCourByLevel=(list,level)=>{
let arr=list.filter((element)=>{
   return element.niveau==level
})
console.log(list)
console.log(arr)
return arr

}
function Professeur({children}) {
  const {selectedModule}=useContext(AdminContext)


const [listTest,setlistTest]=useState([])
const [listTestNV1,setlistTestNV1]=useState([])

const [listTestNV2,setlistTestNV2]=useState([])
const [listTestNV3,setlistTestNV3]=useState([])

const [isAddTestModal,setisAddTestModal]=useState(false)
const [isEditTestModal,setisEditTestModal]=useState(false)
const [EditedTestIndex,setEditedTestIndex]=useState()
const [editedTestItem,setEditedTestItem]=useState()
const [isShowTestDetails,setisShowTestDetails]=useState( Array(6).fill(false))

const [selectedTest,setselectedTest]=useState(false)
const [editedIndex,setEditedIndex]=useState(false)


const [listCour,setlistCour]=useState([])
const [listCourNV1,setlistCourNV1]=useState([])

const [listCourNV2,setlistCourNV2]=useState([])
const [listCourNV3,setlistCourNV3]=useState([])

const [isAddCourModal,setisAddCourModal]=useState(false)
const [isEditCourModal,setisEditCourModal]=useState(false)
const [EditedCourIndex,setEditedCourIndex]=useState()
const [editedCourItem,setEditedCourItem]=useState()
const [isShowCourDetails,setisShowCourDetails]=useState( Array(6).fill(false))

const [selectedCour,setselectedCour]=useState(false)

useEffect(()=>{
if(selectedModule){
  console.log("selectedModule")
  console.log(selectedModule)

  setlistTest(listCourByLevel(selectedModule.tests,0))
  setlistTestNV1(listCourByLevel(selectedModule.tests,1))

  setlistTestNV2(listCourByLevel(selectedModule.tests,2))

  setlistTestNV3(listCourByLevel(selectedModule.tests,3))
  setlistCour(listCourByLevel(selectedModule.cours,0))
  setlistCourNV1(listCourByLevel(selectedModule.cours,1))
  setlistCourNV2(listCourByLevel(selectedModule.cours,2))
  setlistCourNV3(listCourByLevel(selectedModule.cours,3))
}

},[selectedModule])





const notifError=(error)=>{
    createNotification('error',error)
  }
  const notifSuccess=(success)=>{
   
    createNotification('success',success)

  }

//Tests 


const onEditTestModal = (index,nv)=>{
  setEditedTestIndex(index)
  switch (nv) {
    case 0:
      setEditedTestItem(listTest[index])
      break;
   case 1:
        setEditedTestItem(listTestNV1[index])
    break;
    case 2:
          setEditedTestItem(listTestNV2[index])
    break;
    case 3:
         setEditedTestItem(listTestNV3[index])
    break;
  
    default:
      break;
  }
  
  setisEditTestModal(!isEditTestModal)
}
const getList=(nv)=>{
  switch (nv) {
    case 0:
       return listTest
      break;
   case 1:
    return listTestNV1
    break;
    case 2:
      return listTestNV2
      break;
    case 3:
      return listTestNV3
      break;
  
    default:
      break;
  }
}

const onEditTest=(item,nv)=>{
  let list 
switch (nv) {
  case 0:
     list = [...listTest]
     editTestAxios(item,nv,list)
    break;
 case 1:
   list = [...listTestNV1]
   editTestAxios(item,nv,list)
  break;
  case 2:
     list = [...listTestNV2]
     editTestAxios(item,nv,list)
    break;
  case 3:
    list = [...listTestNV3]
    editTestAxios(item,nv,list)
    break;

  default:
    break;
}
   

 
/* */

}

const editTestAxios=(item,nv,list)=>{
  axios.patch("http://127.0.0.1:8000/api/Test/"+list[EditedTestIndex].id,{
    ...item
  }).then(response => {
    
   
    
    list[EditedTestIndex]=response.data.test

    switch (nv) {
      case 0:
        setlistTest(list)
        break;
     case 1:
        setlistTestNV1(list)
      break;
      case 2:
        setlistTestNV2(list)
        break;
      case 3:
        setlistTestNV3(list)
        break;
    
      default:
        break;
    }

    setisEditTestModal(!isEditTestModal)
    notifSuccess('Le quiz est modifié avec succès')

  }).catch(error => {

   console.log(error.response) 
    if (error) notifError(error.response)
    return
  });
}

const onAddTestModal = ()=>{
  setisAddTestModal(!isAddTestModal)
}

const onAddTest=(item,nv,module_id)=>{
  
switch (nv) {
  case 0:
    item.badge='Test'

    item.module_id=module_id
    item.niveau=nv
    addTestAxios(item,0)
    break;
 case 1:
  item.badge='Test'

  item.module_id=module_id
  item.niveau=nv

  addTestAxios(item,1)
  break;
  case 2:
    item.badge='Test'

    item.module_id=module_id
    item.niveau=nv

    addTestAxios(item,2)
    break;
  case 3:
 
    item.badge='Test'
    item.password='123456789'
    item.module_id=module_id
    item.niveau=nv

    addTestAxios(item,3)
    break;

  default:
    break;
}

}

const addTestAxios=(item,nv)=>{
  let list 
  axios.post("http://127.0.0.1:8000/api/Test",{
    ...item
  }).then(response => {
    
    
    

  switch (nv) {
    case 0:
       list = [...listTest]
       list.push(response.data.test)
       setlistTest(list)
      break;
   case 1:
     list = [...listTestNV1]
     list.push(response.data.test)
     setlistTestNV1(list)
    break;
    case 2:
       list = [...listTestNV2]
       list.push(response.data.test)
       setlistTestNV2(list)
      break;
    case 3:
      list = [...listTestNV3]
   
  
      list.push(response.data.test)
   
      setlistTestNV3(list)
      break;
  
    default:
      break;
  }
  setisAddTestModal(!isAddTestModal)
  notifSuccess('Le quiz est ajouté avec succès')

  }).catch(error => {

   console.log(error) 
    if (error) notifError(error.response)
    return
  });
}
const onDeleteTest=(index,nv)=>{
  let list 
  switch (nv) {
    case 0:
       list = [...listTest]
       deleteTestAxios(list,nv,index)
      break;
   case 1:
     list = [...listTestNV1]
     deleteTestAxios(list,nv,index)

    break;
    case 2:
       list = [...listTestNV2]
       deleteTestAxios(list,nv,index)

      break;
    case 3:
      list = [...listTestNV3]
      deleteTestAxios(list,nv,index)

      break;
  
    default:
      break;
  }
  
  //setActulize(!actulize)
  
/*
 
    */
}

const deleteTestAxios=(list,nv,index)=>{
  axios.delete("http://127.0.0.1:8000/api/Test/"+list[index].id).then(response => {
      
    switch (nv) {
      case 0:
         list.splice(index, 1);
          setlistTest(list)
        break;
     case 1:
       list.splice(index, 1);
       setlistTestNV1(list)
      break;
      case 2:
         list.splice(index, 1);
         setlistTestNV2(list)
        break;
      case 3:
        list.splice(index, 1);
        setlistTestNV3(list)
        break;
    
      default:
        break;
    }
      

    notifSuccess('Le quiz est supprimé avec succès')

  }).catch(error => {

   console.log(error.response) 
    if (error) notifError(error.response)
    return
  });
}
const onShowTestDetails = (index)=>{
  setEditedIndex(index)
  setselectedTest(listTest[index])
  let arr=[...isShowTestDetails]
  arr[index]=!isShowTestDetails[index]
  setisShowTestDetails(arr)
 // getListArtciles(listTest[index])
  
}














const onEditCourModal = (index,nv)=>{
  setEditedCourIndex(index)
  switch (nv) {
    case 0:
      setEditedCourItem(listCour[index])
      break;
   case 1:
        setEditedCourItem(listCourNV1[index])
    break;
    case 2:
          setEditedCourItem(listCourNV2[index])
    break;
    case 3:
         setEditedCourItem(listCourNV3[index])
    break;
  
    default:
      break;
  }
  
  setisEditCourModal(!isEditCourModal)
}
const getListCour=(nv)=>{
  switch (nv) {
    case 0:
       return listCour
      break;
   case 1:
    return listCourNV1
    break;
    case 2:
      return listCourNV2
      break;
    case 3:
      return listCourNV3
      break;
  
    default:
      break;
  }
}

const onEditCour=(item,nv)=>{
  let list 
switch (nv) {
  case 0:
     list = [...listCour]
     editCourAxios(item,nv,list)
    break;
 case 1:
   list = [...listCourNV1]
   editCourAxios(item,nv,list)

  break;
  case 2:
     list = [...listCourNV2]
     editCourAxios(item,nv,list)

    break;
  case 3:
    list = [...listCourNV3]
    editCourAxios(item,nv,list)

    break;

  default:
    break;
}
   
    setisEditCourModal(!isEditCourModal)

 


}

const editCourAxios=(item,nv,list)=>{
  axios.patch("http://127.0.0.1:8000/api/Cours/"+list[EditedCourIndex].id,{
    ...item
  }).then(response => {
    
   
    
    list[EditedCourIndex]=response.data.cours

    switch (nv) {
      case 0:
        setlistCour(list)
        break;
     case 1:
        setlistCourNV1(list)
      break;
      case 2:
        setlistCourNV2(list)
        break;
      case 3:
        setlistCourNV3(list)
        break;
    
      default:
        break;
    }

    setisEditCourModal(!isEditCourModal)
    notifSuccess('Le quiz est modifié avec succès')

  }).catch(error => {

   console.log(error.response) 
    if (error) notifError(error.response)
    return
  });
}
const onAddCourModal = ()=>{
  setisAddCourModal(!isAddCourModal)
}

const onAddCour=(item,nv,module_id)=>{
  let list 
switch (nv) {
  case 0:
    item.badge='Cours'

    item.module_id=module_id
    item.niveau=nv
  
    addCourAxios(item,0)
    break;
 case 1:
  item.badge='Cours'

  item.module_id=module_id
  item.niveau=nv

  addCourAxios(item,1)
  break;
  case 2:
    item.badge='Cours'

    item.module_id=module_id
    item.niveau=nv
  
    addCourAxios(item,2)
    break;
  case 3:
    item.badge='Cours'

    item.module_id=module_id
    item.niveau=nv
  
    addCourAxios(item,3)
    break;

  default:
    break;
}



/*  axios.post("http://127.0.0.1:8000/api/Cour",{
    ...item
  }).then(response => {
    
    console.log(response.data.Cour)
    
  list.push(response.data.Cour)
  setlistCour(list)
  setisisAddModal(!isAddModal)
  notifSuccess('L\'Cour est ajouté avec succès')

  }).catch(error => {

   console.log(error.response) 
    if (error) notifError(error.response)
    return
  });
*/



}

const addCourAxios=(item,nv)=>{
  let list 
  axios.post("http://127.0.0.1:8000/api/Cours",{
    ...item
  }).then(response => {
    
    
    
 
  switch (nv) {
    case 0:
       list = [...listCour]
       list.push(response.data.cours)
       setlistCour(list)
      break;
   case 1:
     list = [...listCourNV1]
     list.push(response.data.cours)
     setlistCourNV1(list)
    break;
    case 2:
       list = [...listCourNV2]
       list.push(response.data.cours)
       setlistCourNV2(list)
      break;
    case 3:
      list = [...listCourNV3]
   
  
      list.push(response.data.cours)
   
      setlistCourNV3(list)
      break;
  
    default:
      break;
  }
  setisAddCourModal(!isAddCourModal)
  notifSuccess('Le cours est ajouté avec succès')

  }).catch(error => {

   console.log(error.response) 
    if (error) notifError(error.response)
    return
  });
}
const onDeleteCour=(index,nv)=>{
  let list 
  switch (nv) {
    case 0:
       list = [...listCour]
       deleteCourAxios(list,nv,index)
      break;
   case 1:
     list = [...listCourNV1]
     deleteCourAxios(list,nv,index)

    break;
    case 2:
       list = [...listCourNV2]
       deleteCourAxios(list,nv,index)

      break;
    case 3:
      list = [...listCourNV3]
      deleteCourAxios(list,nv,index)

      break;
  
    default:
      break;
  }

}

const deleteCourAxios=(list,nv,index)=>{
  axios.delete("http://127.0.0.1:8000/api/Cours/"+list[index].id).then(response => {
      
    switch (nv) {
      case 0:
         list.splice(index, 1);
          setlistCour(list)
        break;
     case 1:
       list.splice(index, 1);
       setlistCourNV1(list)
      break;
      case 2:
         list.splice(index, 1);
         setlistCourNV2(list)
        break;
      case 3:
        list.splice(index, 1);
        setlistCourNV3(list)
        break;
    
      default:
        break;
    }
      

    notifSuccess('Le quiz est supprimé avec succès')

  }).catch(error => {

   console.log(error.response) 
    if (error) notifError(error.response)
    return
  });
}

 
  return (
    <ProfesseurContext.Provider value={{
      listTest,isAddTestModal,isEditTestModal,onEditTestModal,onEditTest,onDeleteTest,onAddTest,onAddTestModal,editedTestItem, selectedTest, onShowTestDetails,isShowTestDetails,getList,
      listCour,isAddCourModal,isEditCourModal,onEditCourModal,onEditCour,onDeleteCour,onAddCour,onAddCourModal,editedCourItem, selectedCour,getListCour}}>

    {children}
    </ProfesseurContext.Provider>
  )
}

export default Professeur