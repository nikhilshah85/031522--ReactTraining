import React, {useState} from 'react'


const DemoStateHook=()=>{

    const [myName,changeName] = useState('');
    const [myLastName,changeLastName] = useState('Shah');
    const [myTechList,modifyTechList] = useState(['React','Angular','.Net']);


    return(
        <div>
        <input type="text" value={myName} onChange={ e=> changeName(e.target.value)}/>  
        <input type="text" value={myLastName} onChange={ e => changeLastName(e.target.value)}/>
        {/* <button onClick={ e=> modifyTechList(()=>{ myTechList.push('Azure'); }) }> Add Tech </button> */}
        <h1> Hello : {myName} {myLastName}</h1>    


        {/* <ul>
            {myTechList.map((t)=><li> {t } </li>)}
        </ul> */}
        </div>
    )

}
export default DemoStateHook;