import React, { Fragment, useContext, useEffect } from 'react'
import { TestContext } from '../context/Test';

import Quiz from './Quiz';
const CarouselQuiz = () => {
  const {validating,isValid,listTest,confirmer,module,setModule}=useContext(TestContext)
  const validate=(index,value)=>{
    validating(index,value)
  }

 
 console.log(isValid)

  return (
    <div className='Quiz mt-0 '>
      
      {isValid.map(function(o, i) {
       return  <Fragment key={o+i}>
       <Quiz    index={i} quiz={listTest[i]} validated={o} validate={validate} length={isValid.length}/>


        </Fragment>
        
      })}
        <button className='btn my-5 btn-primary w-full' onClick={()=>{confirmer(module.id)}}>Confirmer</button>

      </div>
  )
}

export default CarouselQuiz