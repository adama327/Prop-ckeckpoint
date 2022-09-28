
import Img from './handleName.js';
import PropTypes from "prop-types";

const Profil = ({FullName,Bio,Profession}) =>{
    const Img=(props)=>{
        return(
           <div>
               {props.children}
           </div>
        )
       }
      
    return(
        <>
        <div style={{textAlign:"center", backgroundColor:"grey"}}>
        <div>
            <Img><img src="imgp.webp" alt="img-profil" srcset="" style={{height:"160px"}}/></Img>
        </div>
        <div style={{display:"flex", justifyContent:"center"}}>
            <h2 style={{textDecoration:"underline"}}>Full Name:</h2> <h2 style={{color:"white"}}>{FullName}</h2>
        </div>
        <div style={{display:"flex", justifyContent:"center"}}>
            <h2  style={{textDecoration:"underline"}}>Bio:</h2> <h2 style={{color:"white"}}>{Bio}</h2>
        </div>
        <div style={{display:"flex", justifyContent:"center"}}>
            <h2  style={{textDecoration:"underline"}}>Profession:</h2> <h2 style={{color:"white"}}>{Profession}</h2>
        </div>
        </div>
       
        </>
    )}

    Profil.defaultProps = {
        FullName: "Mr , Ms",
        Bio: ".......",
        Profession: ".......",
    }

    Profil.propTypes={
        FullName: PropTypes.string,
        Bio: PropTypes.string,
        Profession: PropTypes.string
    }
 export default Profil