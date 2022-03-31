import { createContext, useState, useEffect } from "react";
import axios from 'axios'
export const RecipiesContext = createContext([])


export const GeneralProvider = ({ children }) => {

    const [allRecipes, setAllRecipies] = useState([])
    const [recipeToSearch, setRecipeToSearch] = useState("chicken")
    const [howManyPages, setHowManyPages] = useState(0)
    const [pageNow, setPageNow] = useState(0)
    const howManyElementsPerPage = 8;



    const CallToAPI = async () => {
        console.log("im calling the API")
        const req = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${recipeToSearch}&app_id=59869edb&app_key=f6a796bac8f4f6622eeab857baeb8cf8`)

        setAllRecipies(req.data.hits)


    }
    console.log(howManyPages)

    useEffect(() => {
        CallToAPI()

    }, [recipeToSearch])
    useEffect(() => {
        setHowManyPages(Math.ceil(allRecipes.length / howManyElementsPerPage))
    }, [allRecipes])

    const data = {
        allRecipes: allRecipes,
        recipeToSearch: recipeToSearch,
        setRecipeToSearch: setRecipeToSearch,
        howManyPages: howManyPages,
        pageNow: pageNow,
        setPageNow: setPageNow,
        howManyElementsPerPage: howManyElementsPerPage

    }

    return (
        <RecipiesContext.Provider value={data}>
            {children}
        </RecipiesContext.Provider>
    )

}