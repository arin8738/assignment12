import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Toy Box | ${title}`;
    }, [title])
}

export default useTitle;