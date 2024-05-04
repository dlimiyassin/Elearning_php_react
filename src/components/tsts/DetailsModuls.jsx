import React, { useState } from 'react'
import TableEtudiant from '../etudiants/TableEtudiants'
import TableProf from '../profs/TableProfs'
import TableCour from './TableCours'
import TableTest from './TableTests'


const DetailsModuls = ({module_id}) => {
  const [isCours,setisCours]=useState([false,false,false,false])
  const switchSlide=(index)=>{
    let arr=[...isCours]
    arr[index]=!isCours[index]
    setisCours(arr)
  }
  return (
    <div className="row accordiontables px-3">
    <div className="col-lg-12 mx-auto">
      {/* Accordion */}
      <div id="accordionExample" className="accordion shadow">
        {/* Accordion item 1 */}
        <div className="card">
          <div id="headingOne" className="card-header bg-white shadow-sm border-0">
            <h6 className="mb-0 font-weight-bold"><a href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="d-block position-relative text-dark text-uppercase collapsible-link py-2">Géneral</a></h6>
         
          </div>
          <div id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample" className="collapse show">
            <div className="card-body px-5 ">
            <div className="toggle-container  mx-auto">
            <input type="checkbox" onClick={()=>switchSlide(0)} />
            <div className="slider round"></div>
           </div>
           {isCours[0]?<TableCour module_id={module_id} index={0} />
            :<TableTest module_id={module_id} index={0}/>
           }
              
            </div>
          </div>
        </div>
        {/* Accordion item 2 */}
        <div className="card">
          <div id="headingTwo" className="card-header bg-white shadow-sm border-0">
            <h6 className="mb-0 font-weight-bold"><a href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" className="d-block position-relative collapsed text-dark text-uppercase collapsible-link py-2">Niveau 1</a></h6>
          </div>
          <div id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample" className="collapse">
            <div className="card-body px-5">
            <div className="toggle-container  mx-auto">
            <input type="checkbox" onClick={()=>switchSlide(1)} />
            <div className="slider round"></div>
           </div>
            {isCours[1]?<TableCour module_id={module_id} index={1} />
            :<TableTest module_id={module_id} index={1}/>
           }

            </div>
            
          </div>
        </div>
        <div className="card">
          <div id="headingThree" className="card-header bg-white shadow-sm border-0">
            <h6 className="mb-0 font-weight-bold"><a href="#" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" className="d-block position-relative text-dark text-uppercase collapsible-link py-2">Niveau 2</a></h6>
          </div>
          <div id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionExample" className="collapse ">
            <div className="card-body px-5">
            <div className="toggle-container  mx-auto">
            <input type="checkbox" onClick={()=>switchSlide(2)} />
            <div className="slider round"></div>
           </div>
            {isCours[2]?<TableCour module_id={module_id} index={2} />
            :<TableTest module_id={module_id} index={2}/>
           }

            </div>
          </div>
        </div>
        <div className="card">
          <div id="headingFour" className="card-header bg-white shadow-sm border-0">
            <h6 className="mb-0 font-weight-bold"><a href="#" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" className="d-block position-relative text-dark text-uppercase collapsible-link py-2">Niveau 3</a></h6>
          </div>
          <div id="collapseFour" aria-labelledby="headingFour" data-parent="#accordionExample" className="collapse">
            <div className="card-body px-5">
            <div className="toggle-container  mx-auto">
            <input type="checkbox" onClick={()=>switchSlide(3)} />
            <div className="slider round"></div>
           </div>
            {isCours[3]?<TableCour module_id={module_id} index={3} />
            :<TableTest module_id={module_id} index={3}/>
           }

            </div>
          </div>
        </div>
    
    </div>
  
</div>
</div>
  )
}

export default DetailsModuls