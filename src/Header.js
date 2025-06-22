import { useState } from 'react';
import './Header.css';
function Header() {
    const [cn,cns] = useState('');
    function callh(e){
        cns(e.target.value);
    }
    function callh1(){
        alert("Hello" + `${cn}`);
        document.getElementById("aw").innerText = (`${cn}`);
    }
  return (
    <div>
        <div  className="Header">
            <h1 id='aw'>LOGIN FORM</h1>
            <input type='text' id='q' placeholder='  Enter Your Name' onChange={callh}></input>
            <button onClick={callh1} id='q1'>Click to change Text</button>
        </div>
    </div>
  );
}

export default Header;