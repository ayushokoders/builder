import { useEffect } from "react";

function Main({content} : {content : string}){

    useEffect(()=>{
        console.log(content)
    },[content])
    return(
        <>

        </>
    )
}

export default Main;