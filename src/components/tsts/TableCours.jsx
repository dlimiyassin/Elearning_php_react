
import React, { Component } from 'react';

import { ProfesseurContext } from '../../context/Professeur';
import AjouterCourModal from './AjouterCour';
import DetailsModuls from './DetailsModuls';
import ModiferCourModal from './ModifierCour';










class TableCour extends Component {
  static contextType=ProfesseurContext

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
        
        { value: 'Titre', text: "Titre" , sortable: false , typeSort:'down'},
        { value: 'Lien', text: "Lien" , sortable: false ,typeSort:'down'},

      ],
      

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
 


 
  renderRows() {
    var context = this;
    let rows=this.state.sortedB0.length?this.state.sortedB0:(this.state.filter?this.state.filtredB0:this.context.getListCour(this.props.index));
      return  this.context.getListCour(this.props.index) 
    ? this.context.getListCour(this.props.index).map(function(o, i) {
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
               <>
                <tr key={"item-" + i}  > 
                
                <td>{ o.titre}</td>                       
                <td>{ o.lien}</td>
               
                
                
                <td>


                    <a href="#" className="settings" title="Modifier" data-toggle="tooltip"> <i className="fas fa-edit"  onClick={()=>{context.context.onEditCourModal(i,context.props.index)}}></i></a>
                    <a href="#" className="delete" title="Supprimer" data-toggle="tooltip"  onClick={()=>{context.context.onDeleteCour(i,context.props.index)}}><i className="fa fa-trash "></i></a>

                </td>
              </tr>
          
             
              </>

              
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
console.log(this.props.index)
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
                      
                        <a href="#" className="btn btn-secondary" onClick={()=>{this.context.onAddCourModal()}}><i className="fa fa-plus" aria-hidden="true"></i> <span>Ajouter un Cour</span></a>
                       		
                       									
                      
                </div>
                </div>
            </div>
        
            <table className="table table-striped table-hover ui sortable ">
                <thead>
                    <tr>
                        
                        <th >{this.state.headers[0].text}</th>						
                        <th>{this.state.headers[1].text}</th>
                    
                       
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


{this.context.isAddCourModal && <AjouterCourModal module_id={this.props.module_id} index={this.props.index}/>}
{this.context.isEditCourModal && <ModiferCourModal module_id={this.props.module_id} index={this.props.index}/>}

</React.Fragment>

    );

  }
}

 
export default TableCour;
