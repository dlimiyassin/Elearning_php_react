import React from 'react'
import img from './assets/fstvm.png'
import GenericPdfDownloader from './PdfDownloader'
function Certificate({user,cours,score}) {
  return (
      <>
        <GenericPdfDownloader 
          downloadFileName="Certificate" 
          rootElementId="testId" 
        />
    <div id='testId' className='w-full h-screen certificate' style={{ padding: '20px', textAlign: 'center' , backgroundImage:img}}>
  <div className='w-full h-full' style={{ padding: '20px', textAlign: 'center', border: '5px solid #787878'}}>
    
      <div className=" logo flex">
              <img src={img} className='max-w-[100px] mt-3'/>
           <h1 className='text-[20px] font-bold  mt-4'>FACULTÉ DES SCIENCES ET TECHNIQUES<br></br><span className='m-5'>Béni Mellal</span></h1> 
            </div>
    <span style={{fontSize: '50px', fontWeight: 'bold'}}>Certificat de réussite</span>
    <br /><br />
    <span style={{fontSize: '25px'}}><i>Ceci pour certifier que</i></span>
    <br /><br />
    <span style={{fontSize: '30px'}}><b>{user.nom} {user.prenom}</b></span><br /><br />
    <span style={{fontSize: '25px'}}><i>a terminé les trois niveaux du cours</i></span> <br /><br />
    <span style={{fontSize: '30px'}}>{cours}</span> <br /><br />
    <span style={{fontSize: '20px'}}>avec un score de <b>{score}</b></span> <br /><br /><br /><br />
   
  </div>
</div>
</>
  )
}

export default Certificate