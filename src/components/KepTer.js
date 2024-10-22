import KisKep from "./KisKep"

export default function KepTer(props){
    console.log(props)
    return(
        <>
            {
                props.kepekLista.map((kep, index)=>{
                    return(<KisKep kep={kep} key={index} index={index}/>)
                })  
            }  
        </>
    )

}