import { useContext } from 'react'
import { RecipiesContext } from '../context/GeneralContext'
function Pagination() {
    const { howManyPages, setPageNow } = useContext(RecipiesContext)
    const pages = new Array(howManyPages).fill("page")
    return (
        <div>
            {
                pages.map((page, index) => {
                    return <button key={`${page} ${index}`} onClick={() => setPageNow(index)} >{index + 1}</button>
                })
            }
        </div>

    )
}
export default Pagination