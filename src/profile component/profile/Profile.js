 import React from 'react';
 import PropTypes from 'prop-types';
  
 

function Profile(props) {
  props.handleName(`I m  ${props.fullName} `);
  
  return (
    <>
    <h1>{props.fullName}</h1>
    <h1>{props.bio}</h1>
    <h1>{props.profession} </h1>
    <img src={props.src} />

    <button onClick={() => props.handleName(`I m ${props.fullName} `)}>
         Me
      </button>
      

  </>
) ;
}

Profile.defaultProps = {
  fullName: "houcine",
  profession: "pilot",
  bio: "production",
} ;

Profile.propTypes  =  {
    fullName: PropTypes.string,
    bio:PropTypes.string ,
    profession: PropTypes.string ,
};



export  default Profile  ; 