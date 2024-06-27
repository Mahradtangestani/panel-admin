import { createContext, useState } from "react";

export const CategoryContext = createContext({
    editId : null,
    SetEditId : ()=>{}
})


const CategoryContextContainer = ({children})=>{
        const [editId , SetEditId] = useState(null)
        return (
            <CategoryContext.Provider value={{
                editId,
                SetEditId
            }}>

                {children}
            </CategoryContext.Provider>
        )
}

export default CategoryContextContainer