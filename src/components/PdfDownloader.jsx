import React, { useContext } from 'react';

import { TestContext } from '../context/Test';

const GenericPdfDownloader = ({rootElementId , downloadFileName}) => {
const {downloadPdfDocument}=useContext(TestContext)
    
    return <button className='btn btn-primary w-full' onClick={()=>downloadPdfDocument(rootElementId , downloadFileName)}>Télécharger La certification</button>

}

export default GenericPdfDownloader;