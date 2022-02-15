import logo from './logo.svg';
import './App.css';
import Profile from './profile component/profile/Profile';
import photo from './profile component/profile/photox.jpg';

 
 const App = (  ) => {
  const handleName = (name) => alert(name);
  return (
   
   <div    style={{border:"solid 1px black",maxWidth:"100vw", textAlign: "center" }}>
    < Profile 
    fullName ="houcine"
    bio= " production"     
    profession= "pilot"
    handleName={handleName}
    
  
    
    />
 <img src= {photo} />




    </div>
  );
 };
 export default App;
