import React, { useContext, useEffect, useState } from 'react'
import { SideBarContext } from '../../context/SideBar'
import { TestContext } from '../../context/Test'
import CarouselQuiz from '../CarouselQuiz'

const ListCours = () => {
  const {listCours,listTest,level}=useContext(TestContext)
  const { currentUser}=useContext(SideBarContext)
  const [isTest,setisTest]=useState(false)
  const switchtoTest=()=>{
    setisTest(!isTest)
  }
  useEffect(()=>{
    setisTest(false)
  },[listCours])
  return (
      <div className='my-[20px]'>
    <div className="row accordiontables px-3">
    <div className="col-lg-12 mx-auto">
      {/* Accordion */}
      {!isTest?
      <>
      <div id="accordionExample" className="accordion shadow">
      {/* Accordion item 1 */}
      {listCours.map((o,i)=>{
       return  <div className="card">
          
        <div id={'heading'+i} className="card-header bg-white shadow-sm border-0">
          <h6 className="mb-0 font-weight-bold"><a href="#" data-toggle="collapse" data-target={'#collapse'+i} aria-expanded="false" aria-controls={'collapse'+i} className="d-block position-relative text-dark text-uppercase collapsible-link py-2">{o.titre}</a></h6>
       
        </div>
        <div id={'collapse'+i} aria-labelledby={'heading'+i} data-parent="#accordionExample" className="collapse ">
          <div className="card-body px-5  ">
      
         <iframe className='mx-auto' width="800" height="450"
          src={o.lien}>
          </iframe>
            
          </div>
        </div>
      </div>
      })}
   
      {/* Accordion item 2 */}
  
      
  </div>
  <button className='btn my-5 btn-primary w-full' onClick={()=>{switchtoTest()}}>Passer au Quiz</button>
</>

      :<CarouselQuiz/>}

   
</div>
</div>
</div>
  )
}

export default ListCours