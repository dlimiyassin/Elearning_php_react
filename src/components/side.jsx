import React, { useContext, useState } from 'react'
import { SideBarContext } from '../context/SideBar'
import ImageUploading from "react-images-uploading";
import CarouselQuiz from './CarouselQuiz';
import TableProf from './profs/TableProfs';
import TableEtudiant from './etudiants/TableEtudiants';
import TableModules from './tsts/TableModules';
import TableModule from './modules/TableModules';
import ListCours from './Cours/ListCours';
import { TestContext } from '../context/Test';
import admin from './assets/admin.png'
import student from './assets/student.png'
import prof from './assets/prof.png'

    
const Side = () => {
    const {switchtab, isSwitchtab,isAdmin,isEtudiant,isProf,disconnect,currentUser}=useContext(SideBarContext)
  const {getLevel,setModule,level}=useContext(TestContext)
  const [index,setindex]=useState(-1)
  const getImg=()=>{
    if(isAdmin) {return admin}
    else if(isProf){return prof}
    else {return student}
  }
    const onChange = (imageList) => {
        // data for submit
        
        // Create an object of formData 
        const formData = new FormData(); 
         
        // Update the formData object 
        formData.append( 
          "myFile", 
          imageList[0].file, 
          imageList[0].file.name
        ); 
       
        // Details of the uploaded file 
        console.log(imageList[0].file);
        console.log(imageList[0].dataURL.length);
        /*setImage(imageList[0].dataURL)
        setSelectedFile(imageList[0].dataURL);*/
      //axios.post("http://localhost/reactimageupload.php", formData);  
      
      
       
        // Request made to the backend api 
        // Send formData object to my php file for save in folder
        
      } 

      const switchTitle=(isSwitchtab)=>{
        switch (true) {
          case isSwitchtab[0]:
            return 'Test'
            break;
            case isSwitchtab[5]:
              return 'Gestion des Professeurs'
            break;
            case isSwitchtab[2]:
                return 'Gestion des Étudiants'
              break;
              case isSwitchtab[1]:
                return 'Gestion des Modules'
              break;
              case isSwitchtab[3]:
                return 'Gestion des Modules'  // better then tsts
              break;
              case isSwitchtab[6]:
              if(level ==0 ){
                return 'Test Général'
              }else {
                return 'Test de Niveau '+level
              }
                
              break;
              case isSwitchtab[7]:
                return 'Test de Niveau 1'
              break;
              case isSwitchtab[8]:
                return 'Cours de Niveau 1'
              break;
        
        
        }
      }

      const onCours=(module,index)=>{
        getLevel(module.id)
        setModule(module)
        switchtab(6)
        setindex(index)
      }


  return (
    <section className=" STYLE_OVERLAY_white">
    <div className="container-account bg-black">
      
      <div className="bg-white h-screen shadow rounded-lg d-block d-sm-flex">
      <div className="profile-tab-nav border-right">
          <div className="p-4">
            <div className="img-circle text-center   mb-3">
              <img src={getImg()} alt="Image" className="shadow mx-auto" />
              <ImageUploading
                  onChange={(e)=>onChange(e)}
                >
                  {({ imageList, onImageUpload,setSelectedFile }) => (
                    // write your building UI
                    <div className="imageuploader">
                      <div className="mainBtns">
                    
                      
                      </div>
                      
                    </div>
                  )}
        </ImageUploading>
            </div>
            <h4 className="text-center text-white font-bold text-xl">{currentUser.nom} {currentUser.prenom}</h4>
            <div className='text-center text-gray-300'>
           {currentUser.badge}
  
            </div>
  
            
            
          </div>
          <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          {isProf &&
            <a className={isSwitchtab[3]?"nav-link-active nav-link":"nav-link"} onClick={()=>switchtab(3)}>
              <i className="fa fa-list text-center mr-1" /> 
            
              
            Gestion des Modules {/* better then tsts  */}
            </a>
} 
            {isAdmin &&
            <>
              <a className={isSwitchtab[5]?"nav-link-active  nav-link":"nav-link"} onClick={()=>switchtab(5)}>
            <i className="fa fa-list text-center mr-1" /> 
              Gestion des Professeurs
            </a>
            <a className={isSwitchtab[2]?"nav-link-active nav-link":"nav-link"} onClick={()=>switchtab(2)}>
            <i className="fa fa-list text-center mr-1" /> 
              Gestion des Étudiants
            </a>
            
            
            <a className={isSwitchtab[1]?"nav-link-active nav-link":"nav-link"} onClick={()=>switchtab(1)}>
              <i className="fa fa-list text-center mr-1" /> 
              Gestion des Modules
            </a>
         
        
          
            
            </>
            }
            {isEtudiant &&
            <>
{ console.log(currentUser)}
            {
             
              currentUser.modules.map((o,i,courswitch)=>{
                return <a key={o.intitule+i} className={index==i?"nav-link-active  nav-link":"nav-link"} onClick={()=>onCours(o,i)}>
                <i className="fa fa-book text-center mr-1" /> 
                  {o.intitule}
                </a>

              })

            }
             
          
            
            </>
            }
            <a className={isSwitchtab[4]?"nav-link-active nav-link":"nav-link"} onClick={()=>disconnect()} >
              <i className="fa fa-bell text-center mr-1" /> 
              Se déconnecter
            </a>
          </div>
        </div>
        <div className="tab-content scroll-area p-0 " id="v-pills-tabContent">
        <div className=''>
    <h3 className="mb p-2 flex text-xl text-[#054468] shadow font-bold bg-[#ebebeb] ">{switchTitle(isSwitchtab)}</h3>
 
    
        { (isSwitchtab[8] && <CarouselQuiz/>)}
        { (isSwitchtab[6] && <ListCours/>)}
{ (isSwitchtab[5] && <TableProf/>)}
{ (isSwitchtab[2] && <TableEtudiant/>)}
{ (isSwitchtab[1] && <TableModule/>)}
{ (isSwitchtab[3] && <TableModules/>)}



  
  </div>
     
        </div>
      </div>
    </div>
  </section>
  )
}

export default Side