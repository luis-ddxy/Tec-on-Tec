import React from 'react'
import "../styles/topbar.css"
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

export default function Topbar(props) {
  let view
  let control = false

  function handleListaDeAlumnos(e){
    control = true
    props.setAlumnlist(true)
  }

  function handleRetorno(e){
    control = false
    props.setAlumnlist(false)
  }
  
  if(typeof(props.role) != "undefined"){
    if(props.role == "Docente"){
      view = <> <button type="button" className="btn btn-dark rounded float-end" onClick={e => handleListaDeAlumnos(e)}>Mis Cursos</button> <button type="button" className="btn btn-dark rounded float-end" onClick={e => handleRetorno(e)}>Calendario</button></>
      //view = <></>
    }else if(props.role == "Estudante"){

    }
  }

  return(
    <div className="container-fluid bg-dark text-center">
    <button type="button" className="btn btn-dark rounded float-end" onClick={e => signOut(props.auth)}>
      <i className="bi bi-box-arrow-right fs-4"></i>
    </button>
    <button type="button" className="btn btn-dark rounded float-end">
      <img src={props.url} alt={"P"} height="35rem" className="rounded-circle profile_picture"></img>
    </button>
    <div>
    {view}
    </div>
    <div></div>
  </div>
  )
    // <Box sx={{ flexGrow: 1 }} style={{width: "100vw"}}>
    //   <AppBar position='static'>
    //     <Toolbar>
    //       <IconButton onClick={e => signInWithPopup(props.auth, new GoogleAuthProvider())} sx={{ p: 0 }}>
    //         <Avatar alt="pfp" src={props.url} />
    //       </IconButton>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
  
}
