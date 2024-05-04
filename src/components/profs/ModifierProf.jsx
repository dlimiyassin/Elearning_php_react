import React, { useContext } from 'react'
import { AdminContext } from '../../context/Admin'
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
const ModiferProfModal = () => {
    const {onEditProfModal,editedProfItem,onEditProf}=useContext(AdminContext)
    const handleInputChange=(e,p)=>{
  
        editedProfItem[p]=e.target.value
    }
  return (
    <div className="row" style={STYLE_OVERLAY} >
    <div className="form-bg col-6" style={STYLE_MODAL}>

<div className="col-12 row" style={STYLE}>
    <div className="col-md-offset-3  col-md-12">
        <form className="form-horizontal">
            <div className="header"> Modifer Un Professeur</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            <div className="form-content">
             
                <br/>
                <div className="row form-group">
                <div className="col-md-12">
                        <label className='control-label'  htmlFor="exampleInputName21"><i ><b>Nom</b></i></label>
                        <input defaultValue={editedProfItem.nom} className='form-control' id="exampleInputName21" placeholder="Nom" type="text" onChange={(e)=>handleInputChange(e,'nom')} required />
                        
                    </div>
                    <div className="col-md-12">
                        <label  className='control-label' htmlFor="exampleInputName21"><i ><b>Prénom</b></i></label>
                        <input defaultValue={editedProfItem.prenom} className='form-control' id="exampleInputName21" placeholder="prenom" type="text" onChange={(e)=>handleInputChange(e,'prenom')} required />
                        
                    </div>
                 
                    </div>
                    <div className="row form-group">
                    <div className="col-md-12">
                     <label  className='control-label' htmlFor="exampleInputName21"><i ><b>Filiére</b></i></label>
                     <input defaultValue={editedProfItem.filiere} className='form-control' id="exampleInputName21" placeholder="Filiere" type="text" onChange={(e)=>handleInputChange(e,'filiere')} required />
                     
                 </div>
                    <div className="col-md-12">
                        <label  className='control-label' htmlFor="exampleInputName21"><i ><b>Email</b></i></label>
                        <input defaultValue={editedProfItem.email} className='form-control' id="exampleInputName21" placeholder="Email" type="text" onChange={(e)=>handleInputChange(e,'email')} required />
                        
                    </div>
                    <div className="col-md-12">
                        <label className='control-label'  htmlFor="exampleInputName21"><i ><b>Téléphone</b></i></label>
                        <input defaultValue={editedProfItem.tele} className='form-control' id="exampleInputName21" placeholder="Téléphone" type="text" onChange={(e)=>handleInputChange(e,'tele')} required />
                        
                    </div>
                    <div className="col-md-12">
                        <label className='control-label'  htmlFor="exampleInputName21"><i ><b>Password</b></i></label>
                        <input defaultValue={editedProfItem.password} className='form-control' id="exampleInputName21" placeholder="Niveau" type="text" onChange={(e)=>handleInputChange(e,'password')} required />
                        
                    </div>
               
                    </div>
               
                    
                
              
         
                <div className="clearfix flex  " >
                    <button type='button'  className="btn btn-default ml-auto mr-0 " onClick={()=>{onEditProf(editedProfItem)}} > Modifier</button>
                    <button type='button'  className="btn btn-default" onClick={()=>onEditProfModal()}> Annuler</button>
                </div>
            
            </div>
        </form>
    </div>
</div>
</div>
</div>



  )
}

export default ModiferProfModal