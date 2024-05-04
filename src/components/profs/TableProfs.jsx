
import React, { Component } from 'react';

import { AdminContext } from '../../context/Admin';
import AjouterProfModal from './AjouterProf';
import ModiferProfModal from './ModifierProf';










class TableProf extends Component {
  static contextType=AdminContext

  constructor(props) {
    super(props);
    
    this.state = {
      message: "",
     //nombreMaxOfDeclares:this.props.nombreMaxOfDeclares,
      modalAdd: false,
      modalEdit: false,
      modalExcel: false,
      affichagevac:false,
      //B0:this.props.B0,
      editIndex:-1,
      filtredB0:[],
      sortedB0:[],
      currentKeyFilter:'',
      table:true,
      currentIndiceSort:-1,
      filter:false,
      excelSchedule:false,
      modalDsPrecedent:false,
      headers:[
        
        { value: 'Nom', text: "Nom" , sortable: false , typeSort:'down'},
        { value: 'Prenom', text: "Prénom" , sortable: false ,typeSort:'down'},
        { value: 'Filiere', text: "Filiére" , sortable: false ,typeSort:'down'},

        { value: 'Email', text: "Email" , sortable: false ,typeSort:'down'},
        { value: 'Telephone', text: "Téléphone", sortable: false ,typeSort:'down'},
        
      ],
      profs:props.profs

    }
  }

  updateScroll = (pos)=>{
    setTimeout(
      function() {
        window.focus();
        window.scroll(0,pos)
       
      }
      
      .bind(this),
      2
      );
    }
    getSnapshotBeforeUpdate(){
      return window.pageYOffset;

  }
  componentDidUpdate(prevProps, prevState, snapshot){

      this.updateScroll(snapshot)
  }
  componentDidMount() {
    const user = this.context

    console.log(user) // { name: 'Tania', loggedIn: true }
  }

  /*getVacataires(){
    let context=this
    axios.get("http://127.0.0.1:8000/api/vacataires").then(response => {
      context.setState({listVac:affectVacataires(response.data)}) 
      console.log(response.data)
  
    }).catch(error => {
      console.log(error.response)
      context.onModalConfirm("Désactiver AdBlock et réessayer", 'red');
  
    });
  }
  updateMessage(event) {
    this.setState({
      message: event.target.value
    });
  }
*/
containsObject(obj, list) {
  var i;
  if(list){
    for (i = 0; i < list.length; i++) {
      if (list[i].id === obj.id) {
          return true;
      }
  }
  }else{
    console.log('empty listt')
  }


  return false;
}

chekcProf=(prof)=>{


  if(this.props.profs) return this.containsObject(prof,this.state.profs)
  else return false
}
addProfToModule=(module_id,prof)=>{
  this.context.addProfToModule(module_id,prof.id)
  let profs=[...this.state.profs]
  profs.push(prof)
  this.setState({profs})
}
deleteProfToModule=(module_id,prof,index)=>{
  this.context.deleteProfToModule(module_id,prof.id)
  let profs=this.state.profs
  profs.splice(index, 1)
  this.setState(profs)
  
}
 
  renderRows() {
    var context = this;
    let rows=this.state.sortedB0.length?this.state.sortedB0:(this.state.filter?this.state.filtredB0:this.state.listProf);
      return  this.context.listProf 
    ? this.context.listProf.map(function(o, i) {
      let exist=false
    if(context.state.sortedB0.length || context.state.filter ){
      for(let item of rows) {
          if(item===o){
            exist=true;
            break;
          }
      }
     }else{
       exist=true;
     }
      if(exist){
        console.log(o)
              return (
               
                <tr key={"item-" + i}  > 
                
                <td>{ o.nom}</td>                       
                <td>{ o.prenom}</td>
                <td>{ o.filiere}</td>

                <td>{o.email}</td>
                <td>{o.tele}</td>
                
                
                <td>

                {context.props.module? context.chekcProf(o)?
                <button className='btn btn-danger text-[12px] p-2' onClick={()=>{context.deleteProfToModule(context.props.module_id,o,i)}}>Ajouté</button>
                :<button className='btn btn-info p-2 text-[12px]' onClick={()=>{context.addProfToModule(context.props.module_id,o)}}>Ajouter</button>
                :
                <>
                <a href="#" className="settings" title="Modifier" data-toggle="tooltip"> <i className="fas fa-edit"  onClick={()=>{context.context.onEditProfModal(i)}}></i></a>
                    <a href="#" className="delete" title="Supprimer" data-toggle="tooltip"  onClick={()=>{context.context.onDeleteProf(i)}}><i className="fa fa-trash "></i></a>
                
                </>
                }
                    </td>
              </tr>
            ); 
          }
        })
        :''
}
  

    onEdit(i) {
      this.setState({
        editIndex: i
      });
     if(i!==-1) {this.setState({
        itemEdited: this.state.listVac[i]
      })
    }
     
      this.setState({modalEdit:!this.state.modalEdit})
    }


    onAffiche(i){
     
      this.setState({
        editIndex: i
      });
      if(i!==-1) {this.setState({
        itemEdited: this.state.listVac[i]
      })
    }
  
      this.setState({affichagevac:!this.state.affichagevac});
      this.setState({table:!this.state.table});
  
    }
    
ontable(){
  this.setState({affichagevac:!this.state.affichagevac});
  this.setState({table:!this.state.table});

}



  render() {

    return (
      <React.Fragment>
     
    

{
  this.state.table && (

<div>
   

    
  

<div  id='scroll1' className="row page-titles  ml-[20px]">
    
    <div className="table-responsive ">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
                {/*<div className="col-sm-12">
                        <div className="search-box">
                            <i className="material-icons">&#xE8B6;</i>
                            <input type="text" className="form-control" placeholder="Filtrer&hellip;" onChange={(e)=>{}}/>
                        </div>
  </div>*/}
                    </div>
                <div className="row">
              
                    <div className="col-sm-12">
                    {!this.props.module &&
                        <a href="#" className="btn btn-secondary" onClick={()=>{this.context.onAddProfModal()}}><i className="fa fa-plus" aria-hidden="true"></i> <span>Ajouter un Prof</span></a>
                    }
                       									
                      
                </div>
                </div>
            </div>
        
            <table className="table table-striped table-hover ui sortable ">
                <thead>
                    <tr>
                        
                        <th >{this.state.headers[0].text}</th>						
                        <th>{this.state.headers[1].text}</th>
                        <th>{this.state.headers[2].text}</th>
                        <th>{this.state.headers[3].text}</th>
                        <th>{this.state.headers[4].text}</th>
                       
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {this.renderRows( )}
                 
                </tbody>
    </table>
            </div>
    </div>
</div>  

 
</div>
    )
}


{this.context.isAddProfModal && <AjouterProfModal/>}
{this.context.isEditProfModal && <ModiferProfModal/>}

</React.Fragment>

    );

  }
}

 
export default TableProf;
