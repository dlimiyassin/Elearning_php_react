import React, { useContext } from 'react'
import { SideBarContext } from '../context/SideBar'
import { TestContext } from '../context/Test'
import Certificate from './Certificate'
import Login from './Login'
import Side from './side'

const Home = () => {
    const {islogin ,isSideBar,setisSideBar,setIslogin,currentUser}=useContext(SideBarContext)
    const {isCertificate,module,sscore}=useContext(TestContext)

    
  return (
    <div>
        {isCertificate ?
         <Certificate user={currentUser} score={sscore} cours={module.intitule}/>

      :<>{isSideBar? <Side/>:
      <div>
  <nav className="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
    <div className="container"><a className="navbar-brand" href="index.html" style={{textShadow: '2px 1px 7px var(--bs-white)', opacity: 1, filter: 'blur(0px)'}}>E-Learning&nbsp;</a><button data-bs-toggle="collapse" data-bs-target="#navbarResponsive" className="navbar-toggler" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" /></button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item"><a className="nav-link" href="#cours">Mes COURS</a></li>

          <li className="nav-item"><a className="nav-link" href="#footer">Contactez-nous</a></li>
          <li className="nav-item"><a className="nav-link active" onClick={()=>{setIslogin(!islogin)}}>Se connecter</a></li>
          <li className="nav-item" />
        </ul>
      </div>
    </div>
  </nav>
  <header className="masthead" style={{backgroundImage: 'url("assets/img/home-bg.jpg?h=ed6236475a1226b743bf65e6f1bebb34")'}}>
    <div className="overlay" />
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-lg-8 mx-auto position-relative">
          <div className="site-heading">
            <h1>E-Learning</h1><span className="subheading">Pour Une Meilleure Éducation&nbsp;<br />Et Aider Les Étudiants À Augmenter Leur Niveau</span>
          
            <button class="rounded-full btn btn-info my-3 text-gray-600" onClick={()=>{setIslogin(!islogin)}}>Se connecter</button>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div className="container">
    <div className="row" style={{margin: '1px'}}>
      <div className="col-md-10 col-lg-8 offset-1 offset-xxl-1" style={{width: '787px'}}>
        <div id='cours' className="post-preview"><a href="#">
            <h2 className="post-title">SEMESTRE 5</h2>
          </a></div>
        <hr style={{width: '960px'}} />
      </div>
    </div>
  </div>{/* Start: Articles Cards */}
<div className="container justify-center my-3 mx-auto row">
        <div class="card m-4 col-3 rounded-md drop-shadow-lg" style={{width: '18rem'}}>
        <img className="card-img-top w-full d-block fit-cover" style={{height: '200px'}} src="assets/img/web.jpg?h=368e4c98883d8880fa72cf901eddfc13" />
        <div class="card-body">
        <p className="text-primary card-text mb-0">Filière: LST-Info<br /></p>
                  <h4 className="card-title" style={{fontSize: '18px', height: '69.5952px'}}><strong>Programmation Web</strong></h4>
                  <div className="d-flex"><img className="rounded-circle flex-shrink-0 me-3 fit-cover" width={50} height={50} src="https://cdn2.iconfinder.com/data/icons/professional-avatar-12/140/man__avatar__male__professional__human-512.png" />
                    <div>
                      <p className="fw-bold mb-0" style={{margin: '8px 0px 0px'}}>Hicham Zougagh</p>
                    </div>
                  </div>
        </div>
      </div>
      <div class="card col-3 m-4 rounded-md drop-shadow-lg" style={{width: '18rem'}}>
      <img className="card-img-top w-100 d-block fit-cover" style={{height: '200px'}} src="assets/img/bd.jpg?h=d9e11d00643b51648f1e64d322e50b43" />
          <div className="card-body ">
            <p className="text-primary card-text mb-0">Filière: LST-Info<br /></p>
            <h4 className="card-title" style={{fontSize: '18px', height: '69.5952px'}}><strong>Base De Données</strong></h4>
            <div className="d-flex"><img className="rounded-circle flex-shrink-0 me-3 fit-cover" width={50} height={50} src="https://cdn2.iconfinder.com/data/icons/professional-avatar-12/140/man__avatar__male__professional__human-512.png" />
              <div>
                <p className="fw-bold mb-0" style={{margin: '8px 0px 0px'}}>Mourad Nachaoui</p>
              </div>
            </div>
          </div>
      </div>
      <div class="card col-3 m-4 rounded-md drop-shadow-lg" style={{width: '18rem'}}>
      <img className="card-img-top w-100 d-block fit-cover" style={{height: '200px'}} src="assets/img/java.jpeg?h=1bbe5f68894e92ea0cdbcc49318f66bc" />
          <div className="card-body p-4">
            <p className="text-primary card-text mb-0">Filière: LST-Info<br /></p>
            <h4 className="card-title" style={{fontSize: '18px', height: '69.5952px'}}><strong>Langage Java</strong></h4>
            <div className="d-flex"><img className="rounded-circle flex-shrink-0 me-3 fit-cover" width={50} height={50} src="https://cdn2.iconfinder.com/data/icons/professional-avatar-12/140/man__avatar__male__professional__human-512.png" />
              <div>
                <p className="fw-bold mb-0" style={{margin: '8px 0px 0px'}}>Rachid El Ayachi</p>
              </div>
            </div>
          </div>
      </div>

      <div class="card col-3 m-4 rounded-md drop-shadow-lg" style={{width: '18rem'}}>
      <img className="card-img-top w-100 d-block fit-cover" style={{height: '200px'}} src="assets/img/si.png?h=d59cf96cb7b6fc92f37855ac104911ed" />
          <div className="card-body p-4">
            <p className="text-primary card-text mb-0">Filière: LST-Info<br /></p>
            <h4 className="card-title" style={{fontSize: '18px', height: '69.5952px'}}><strong>Système Informatique</strong></h4>
            <div className="d-flex"><img className="rounded-circle flex-shrink-0 me-3 fit-cover" width={50} height={50} src="https://cdn2.iconfinder.com/data/icons/professional-avatar-12/140/man__avatar__male__professional__human-512.png" />
              <div>
                <p className="fw-bold mb-0" style={{margin: '8px 0px 0px'}}>Najlae Ldrissi</p>
              </div>
            </div>
          </div>
      </div>

      <div class="card col-3 m-4 rounded-md drop-shadow-lg" style={{width: '18rem'}}>
      <img className="card-img-top w-100 d-block fit-cover" style={{height: '200px'}} src="assets/img/reseau.jpg?h=7e66a8e24684f2ba92dcf6abe26fa51e" />
          <div className="card-body p-4">
            <p className="text-primary card-text mb-0">Filière: LST-Info<br /></p>
            <h4 className="card-title" style={{fontSize: '18px', height: '69.5952px'}}><strong>Réseau Informatique</strong> </h4>
            <div className="d-flex"><img className="rounded-circle flex-shrink-0 me-3 fit-cover" width={50} height={50} src="https://cdn2.iconfinder.com/data/icons/professional-avatar-12/140/man__avatar__male__professional__human-512.png" />
              <div>
                <p className="fw-bold mb-0" style={{margin: '8px 0px 0px'}}>Mohamed Baslam</p>
              </div>
            </div>
          </div>
      </div>

      <div class="card col-3 m-4 rounded-md drop-shadow-lg" style={{width: '18rem'}}>
      <img className="card-img-top w-100 d-block fit-cover" style={{height: '200px'}} src="assets/img/ms%20project.jpg?h=a145f2078eb540b0f99da4488bac0051" />
          <div className="card-body p-4">
            <p className="text-primary card-text mb-0">Filière: LST-Info<br /></p>
            <h4 className="card-title" style={{fontSize: '18px', height: '69.5952px'}}><strong>MS Projet</strong> </h4>
            <div className="d-flex"><img className="rounded-circle flex-shrink-0 me-3 fit-cover" width={50} height={50} src="https://cdn2.iconfinder.com/data/icons/professional-avatar-12/140/man__avatar__male__professional__human-512.png" />
              <div>
                <p className="fw-bold mb-0" style={{margin: '8px 0px 0px'}}>Abdelali Elmoufidi</p>
              </div>
            </div>
          </div>
      </div>
</div>
{/* End: Articles Cards */}
<div className="container">
    <div className="row" style={{margin: '1px'}}>
      <div className="col-md-10 col-lg-8 offset-1 offset-xxl-1" style={{width: '787px'}}>
        <div className="post-preview"><a href="#">
            <h2 className="post-title">SEMESTRE 6</h2>
          </a></div>
        <hr style={{width: '960px'}} />
      </div>
    </div>
  </div>{/* Start: Articles Cards */}
<div className="container justify-center my-3 mx-auto row">
        <div class="card m-4 col-3 rounded-md drop-shadow-lg" style={{width: '18rem'}}>
        <img className="card-img-top w-100 d-block fit-cover" style={{height: '200px'}} src="assets/img/uml.jpg?h=61ff10abf82141468477476ba5e63647" />
              <div className="card-body p-4">
                <p className="text-primary card-text mb-0">Filière: LST-Info<br /></p>
                <h4 className="card-title" style={{fontSize: '18px', height: '69.5952px'}}><strong>Unified Modeling Language</strong></h4>
                <div className="d-flex"><img className="rounded-circle flex-shrink-0 me-3 fit-cover" width={50} height={50} src="https://cdn2.iconfinder.com/data/icons/professional-avatar-12/140/man__avatar__male__professional__human-512.png" />
                  <div>
                    <p className="fw-bold mb-0" style={{margin: '9px 0px 0px'}}>Abdellatif Hair</p>
                  </div>
                </div>
              </div>
      </div>

      <div class="card col-3 m-4 rounded-md drop-shadow-lg" style={{width: '18rem'}}>
      <img className="card-img-top w-100 d-block fit-cover" style={{height: '200px'}} src="assets/img/JavaEE.png?h=3a77dc741f2de2c4205440d7aff094b5" />
              <div className="card-body p-4">
                <p className="text-primary card-text mb-0">Filière: LST-Info<br /></p>
                <h4 className="card-title" style={{fontSize: '18px', height: '69.5952px'}}><strong>La Technologie Java Entreprise Edition</strong></h4>
                <div className="d-flex"><img className="rounded-circle flex-shrink-0 me-3 fit-cover" width={50} height={50} src="https://cdn2.iconfinder.com/data/icons/professional-avatar-12/140/man__avatar__male__professional__human-512.png" />
                  <div>
                    <p className="fw-bold mb-0" style={{margin: '4px 0px 0px'}}>Youssef Elmourabit</p>
                  </div>
                </div>
              </div>
      </div>

      <div class="card col-3 m-4 rounded-md drop-shadow-lg" style={{width: '18rem'}}>
      <img className="card-img-top w-100 d-block fit-cover" style={{height: '200px'}} src="assets/img/oracle-logo.jpg?h=69ea71a3afb8e008fd1c52c378d9deea" />
              <div className="card-body p-4">
                <p className="text-primary card-text mb-0">Filière: LST-Info<br /></p>
                <h4 className="card-title" style={{fontSize: '18px', height: '69.5952px'}}><strong>Oracle</strong></h4>
                <div className="d-flex"><img className="rounded-circle flex-shrink-0 me-3 fit-cover" width={50} height={50} src="https://cdn2.iconfinder.com/data/icons/professional-avatar-12/140/man__avatar__male__professional__human-512.png" />
                  <div>
                    <p className="fw-bold mb-0" style={{margin: '4px 0px 0px'}}>Mohammed Erritali</p>
                  </div>
                </div>
              </div>
      </div>

 
</div>

  <footer style={{margin: '21px'}}>
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-lg-8 mx-auto">
          <ul className="list-inline text-center">
            <li className="list-inline-item"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x" /><i className="fa fa-twitter fa-stack-1x fa-inverse" /></span></li>
            <li className="list-inline-item"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x" /><i className="fa fa-facebook fa-stack-1x fa-inverse" /></span></li>
            <li className="list-inline-item"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x" /><i className="fa fa-github fa-stack-1x fa-inverse" /></span></li>
          </ul>
          <p className="text-muted copyright">Copyright&nbsp;© E--Learning 2022</p>
        </div>
      </div>
    </div>
  </footer>
  <footer className="probootstrap-footer probootstrap-bg bg-black text-white">
  <div className="container">
    <div className="row mx-2">
      <div className="col-md-4">
        <div className="probootstrap-footer-widget text-left font-bold text-xl">
          <h3>Faculté des sciences et techniques<br/>Béni Méllal</h3>
          <ul className="probootstrap-footer-social">
            <li><a href="#"><i className="icon-twitter" /></a></li>
            <li><a href="#"><i className="icon-facebook" /></a></li>
            <li><a href="#"><i className="icon-youtube" /></a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-3 col-md-push-1">
   
      </div>
      <div className="col-md-3 col-md-push-1 text-left">
        <div className="probootstrap-footer-widget">
          <h3 id='footer' className='pb-4 font-bold text-lg'>Contactez-nous</h3>
          <ul className="probootstrap-contact-info">
            <li><i className="fa fa-phone fa-lg text-center px-1 " /><span>+212 (0) 523 48 51 12</span></li>
            <li><i className="fa fa-comment fa-lg text-center px-1 " /><span>dlimiyassine13@gmail.com</span></li>
            <li><i className="fa fa-comment fa-lg text-center px-1 " /><span>Allali.mohamedamine89@gmail.com</span></li>
            <li><i className="fa fa-comment fa-lg text-center px-1 " /><span>rachid.elayachi@usms.ma</span></li>

            <li><i className="fa fa-map-marker fa-lg text-center px-1" /> <span>Campus Mghila, BP 523 , 23000 Béni Mellal</span></li>
          </ul>
        </div>
      </div>
    </div>
    {/* END row */}
  </div>
</footer>
</div>

}
</>}

        {islogin && <Login/>}
      


    </div>
  )
}

export default Home