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
const ModiferTestModal = ({index}) => {
    const {onEditTestModal,editedTestItem,onEditTest}=useContext(ProfesseurContext)
    const handleInputChange=(e,p)=>{
  
        editedTestItem[p]=e.target.value
    }
  return (
    <div className="row" style={STYLE_OVERLAY} >
    <div className="form-bg col-6" style={STYLE_MODAL}>

<div className="col-12 row" style={STYLE}>
    <div className="col-md-offset-3  col-md-12">
        <form className="form-horizontal">
            <div className="header"> Modifer Un Test</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            <div className="form-content">
             
                <br/>
             
                    <div className="row form-group">
             <div className="col-md-12">
                     <label className='control-label'  htmlFor="exampleInputName21"><i ><b>Question</b></i></label>
                     <input defaultValue={editedTestItem.question} className='form-control' id="exampleInputName21" placeholder="Question" type="text" onChange={(e)=>handleInputChange(e,'question')} required />
                     
                 </div>
  
                 </div>
                 <div className="row form-group">
                 <div className="col-md-12">
                     <label  className='control-label' htmlFor="exampleInputName21"><i ><b>Réponse</b></i></label>
                     <input defaultValue={editedTestItem.reponse} className='form-control' id="exampleInputName21" placeholder="reponse" type="text" onChange={(e)=>handleInputChange(e,'reponse')} required />
                     
                 </div>
                 <div className="col-md-12">
                     <label  className='control-label' htmlFor="exampleInputName21"><i ><b>Réponse 2</b></i></label>
                     <input defaultValue={editedTestItem.reponse2} className='form-control' id="exampleInputName21" placeholder="Réponse 2" type="text" onChange={(e)=>handleInputChange(e,'reponse2')} required />
                     
                 </div>
                 <div className="col-md-12">
                     <label  className='control-label' htmlFor="exampleInputName21"><i ><b>Réponse 3</b></i></label>
                     <input defaultValue={editedTestItem.reponse3}  className='form-control' id="exampleInputName21" placeholder="reponse 3" type="text" onChange={(e)=>handleInputChange(e,'reponse3')} required />
                     
                 </div>
                 <div className="col-md-12">
                     <label  className='control-label' htmlFor="exampleInputName21"><i ><b>Réponse 4</b></i></label>
                     <input defaultValue={editedTestItem.reponse4}  className='form-control' id="exampleInputName21" placeholder="reponse 4" type="text" onChange={(e)=>handleInputChange(e,'reponse4')} required />
                     
                 </div>
                 
  
            
                 </div>
               
                    
                 <div className="row form-group">
                 <div className="col-md-12">
                     <label  className='control-label' htmlFor="exampleInputName21"><i ><b>Rp. correcte</b></i></label>
                     <input defaultValue={editedTestItem.correct} className='form-control' id="exampleInputName21" placeholder="réponse correcte" type="text" onChange={(e)=>handleInputChange(e,'correct')} required />
                     
                 </div>
                 </div>
              
         
                <div className="clearfix flex  " >
                    <button type='button'  className="btn btn-default ml-auto mr-0 " onClick={()=>{onEditTest(editedTestItem,index)}} > Modifier</button>
                    <button type='button'  className="btn btn-default" onClick={()=>onEditTestModal()}> Annuler</button>
                </div>
            
            </div>
        </form>
    </div>
</div>
</div>
</div>



  )
}

export default ModiferTestModal