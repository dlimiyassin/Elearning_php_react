import React, { useContext } from 'react'
import { SideBarContext } from '../context/SideBar'
import './assets/StyleAd.css'
import CarouselQuiz from './CarouselQuiz'
import TableProf from './profs/TableProfs'
import Quiz from './Quiz'

const SideBarMenu = () => {
    const {switchtab, isSwitchtab,isAdmin,isEtudiant,isProf}=useContext(SideBarContext)
    
  return (
      <div className='SideBarMenu min-h-full  row'>

      
    <div className="wrapper  mx-0 col-2">
  {/*Top menu */}
  <div className="sidebar ">
        <div className="profile">
        <img src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg" alt="profile_picture" />
        <h3 className='bg-black'>Anamika Roy</h3>
        <p>Designer</p>
        </div>
    <div>
        <ul>
   
        {
            isAdmin && <>
            
            <li>
            <a href="#"  className={isSwitchtab[1]?"active":""} onClick={()=>switchtab(1)}>
            <span className="icon"><i className="fas fa-desktop" /></span>
            <span className="item">Gestion des Professeurs</span>
            </a>
        </li>
        <li>
            <a href="#"  className={isSwitchtab[2]?"active":""} onClick={()=>switchtab(2)}>
            <span className="icon"><i className="fas fa-user-friends" /></span>
            <span className="item">Gestion des Etudiants</span>
            </a>
        </li>
        <li>
            <a href="#"  className={isSwitchtab[3]?"active":""} onClick={()=>switchtab(3)}>
            <span className="icon"><i className="fas fa-tachometer-alt" /></span>
            <span className="item">Gestion des Modules</span>
            </a>
        </li>
            
            </>
        }
       {isEtudiant && <>
        <li>
            <a href="#"  className={isSwitchtab[0]?"active":""} onClick={()=>switchtab(0)} >
            <span className="icon"><i className="fas fa-home" /></span>
            <span className="item">Home</span>
            </a>
        </li>
       </> }
       {isProf && <>
       
        <li>
            <a href="#"  className={isSwitchtab[4]?"active":""} onClick={()=>switchtab(4)}>
            <span className="icon"><i className="fas fa-database" /></span>
            <span className="item">Development</span>
            </a>
        </li>
        <li>
            <a href="#" className={isSwitchtab[5]?"active":""} onClick={()=>switchtab(5)}>
            <span className="icon"><i className="fas fa-chart-line" /></span>
            <span className="item">Reports</span>
            </a>
        </li>
        <li>
            <a href="#"  className={isSwitchtab[6]?"active":""} onClick={()=>switchtab(6)}>
            <span className="icon"><i className="fas fa-user-shield" /></span>
            <span className="item">Admin</span>
            </a>
        </li>
        <li>
            <a href="#"  className={isSwitchtab[7]?"active":""} onClick={()=>switchtab(7)}>
            <span className="icon"><i className="fas fa-cog" /></span>
            <span className="item">Settings</span>
            </a>
        </li></>}
       
        </ul>
        </div>
  </div>
</div>
<div className='col-10 px-10px '>
{ (isSwitchtab[0] && <CarouselQuiz/>)}
{ (isSwitchtab[1] && <TableProf/>)}
</div>


</div>
  )
}

export default SideBarMenu