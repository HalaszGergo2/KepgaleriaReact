import { useContext } from "react"
import { KepContext } from "../context/KepContext"

export default function NagyKep(props){
    
    const {kattKep}=useContext(KepContext)

    function kattintas(){
        kattKep(props.index)
    }

    return (
        <div className="nagyKep">
            <img src={props.kep.src} onClick={()=>kattintas()}/>
        </div>
    )
}