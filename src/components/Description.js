import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

function Description(props) {
  const {title,description,Image,trailer}=props.location.state.movie
 return (<>
    <div>
    <div
      
      style={{
        backgroundImage: `url(${Image})`,
        backgroundPosition: "100% 60%",
        backgroundSize: "cover"
      }}
    >
      <div >
        <div >
          <div >
            <div style={{backgroundColor:"black"}}>
              <h1  style={{color: "white"}}>{title}</h1>
              <p  style={{color: "white"}}>{description}</p>
            </div>
          </div>
          <div >
            <div >
              <iframe
                title="trailer"
                width="500"
                height="350"
                src={trailer}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
          <Link to="/" ><button >Go Back</button> </Link>
   </div>
      </>
  );
}

export default Description;

