import React, { useContext, useEffect, useState } from 'react'
function shuffle(originalArray) {
  var array = [].concat(originalArray);
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
let arr=shuffle([1,2,3,4])
const Quiz = ({index, validated, validate,length,quiz}) => {
const [value,setValue]=useState(validated=>1?validated:-1)
useEffect(()=>{
  console.log(value)
  if(validated) setValue(validated)
},[validated])

  return (
      
    <div className="quiz-container  " id="quiz">
        <div className='text-center'>
        <p  className='mt-[5px] text-sm  font-bold '>Question {index+1}/{length}</p>
        </div>
  <div className="quiz-header mt-0">
    <h2 id="question" className="mt-0">{quiz.question}</h2>
    <ul>
      {arr.map((o,i)=>{
        return <li key={'response'+index+''+i}>
        <input type="radio" name={"answer"+index} id="a" checked={value==o?true:false} onChange={(e)=>{if(e.target.checked)setValue(o)}} className="answer" />
        <label className='font-sm'  >{o==1?quiz['reponse']:quiz['reponse'+o]}</label>
      </li>

      })}
      
      
    </ul>
  </div>
  <button id="submit"  className={validated>0?'validated':''} onClick={()=>{validate(index,value)}}>{validated<1?'Valider':'Validé'}</button>
 

</div>



  )
}

export default Quiz