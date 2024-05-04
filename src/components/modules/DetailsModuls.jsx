import React from 'react'
import TableEtudiant from '../etudiants/TableEtudiants'
import TableProf from '../profs/TableProfs'

const DetailsModuls = ({profs,etudiants,module_id}) => {
  return (
    <div className="row accordiontables px-3">
    <div className="col-lg-12 mx-auto">
      {/* Accordion */}
      <div id="accordionExample" className="accordion shadow">
        {/* Accordion item 1 */}
        <div className="card">
          <div id="headingOne" className="card-header bg-white shadow-sm border-0">
            <h6 className="mb-0 font-weight-bold"><a href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="d-block position-relative text-dark text-uppercase collapsible-link py-2">Prefesseurs</a></h6>
          </div>
          <div id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample" className="collapse show">
            <div className="card-body px-5">
              <TableProf profs={profs} module_id={module_id} module={true}/>
            </div>
          </div>
        </div>
        {/* Accordion item 2 */}
        <div className="card">
          <div id="headingTwo" className="card-header bg-white shadow-sm border-0">
            <h6 className="mb-0 font-weight-bold"><a href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" className="d-block position-relative collapsed text-dark text-uppercase collapsible-link py-2">Étudiants</a></h6>
          </div>
          <div id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample" className="collapse">
            <div className="card-body px-5">
            <TableEtudiant etudiants={etudiants} module_id={module_id} module={true}/>
            </div>
            
          </div>
        </div>
        
    
    </div>
  
</div>
</div>
  )
}

export default DetailsModuls