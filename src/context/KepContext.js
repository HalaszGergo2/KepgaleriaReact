import { createContext } from "react";

export const KepContext = createContext()

export const KepProvider = ({children})=>{
    const kepekLista = [
        {
            src:"../kepek/tajkep1.jpg", alt:"Szép tó"
        },
        {
            src:"../kepek/tajkep2.jpg", alt:"Szép tó hegyekkel"
        },
        {
            src:"../kepek/tajkep3.jpg", alt:"Naplemente a tónál"
        }
    ]

    function kattKep(kep) {
        

    }
    return <KepContext.Provider value={{kepekLista, kattKep}}>
    {children}
    </KepContext.Provider>;
}