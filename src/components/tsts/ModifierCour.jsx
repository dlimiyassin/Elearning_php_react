import React, { useContext } from 'react'
import { ProfesseurContext } from '../../context/Professeur'
const STYLE_MODAL={
    position:'fixed',
    top:'50%',
    left:'53%',
    transform:'translate(-50%,-50%)',
    padding:'50px',
   
    zIndex: 1000

}
const STYLE={
  padding:'50px',
}

const STYLE_WARNING={
  color:'red',
  fontSize:'11px',    

}
const STYLE_WARNINGLABEL={
  color: "rgb(165, 42, 42)"  

}


const STYLE_OVERLAY={
  position:'fixed',
  top:0,
  left:0,
  right:0,
  bottom:0,
  
  backgroundColor:'rgba(0, 0, 0, .7)',
  zIndex: 1000

}
const ModiferCourModal = ({index}) => {
    const {onEditCourModal,editedCourItem,onEditCour}=useContext(ProfesseurContext)
    const handleInputChange=(e,p)=>{
  
        editedCourItem[p]=e.target.value
    }
  return (
    <div className="row" style={STYLE_OVERLAY} >
    <div className="form-bg col-6" style={STYLE_MODAL}>

<div className="col-12 row" style={STYLE}>
    <div className="col-md-offset-3  col-md-12">
        <form className="form-horizontal">
            <div className="header"> Modifer Un Cour</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            <div className="form-content">
             
                <br/>
             
                    <div className="row form-group">
             <div className="col-md-12">
                     <label className='control-label'  htmlFor="exampleInputName21"><i ><b>Titre</b></i></label>
                     <input defaultValue={editedCourItem.titre} className='form-control' id="exampleInputName21" placeholder="Question" type="text" onChange={(e)=>handleInputChange(e,'titre')} required />
                     
                 </div>
  
                 </div>
                 <div className="row form-group">
                 <div className="col-md-12">
                     <label  className='control-label' htmlFor="exampleInputName21"><i ><b>Lien</b></i></label>
                     <input defaultValue={editedCourItem.lien} className='form-control' id="exampleInputName21" placeholder="reponse" type="text" onChange={(e)=>handleInputChange(e,'lien')} required />
                     
                 </div>
               
                 
  
            
                 </div>
               
                    
                
              
         
                <div className="clearfix flex  " >
                    <button type='button'  className="btn btn-default ml-auto mr-0 " onClick={()=>{onEditCour(editedCourItem,index)}} > Modifier</button>
                    <button type='button'  className="btn btn-default" onClick={()=>onEditCourModal()}> Annuler</button>
                </div>
            
            </div>
        </form>
    </div>
</div>
</div>
</div>



  )
}

export default ModiferCourModal