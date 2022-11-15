import { useState } from "react"

export default function useDropdown() {
    const [burger, setBurger] = useState(false)
    

    function dropdown() {
        setBurger(prev => !prev)
    }
   

    return {burger, dropdown}
}