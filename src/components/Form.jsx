import { useContext } from 'react'
import { debounce } from 'lodash'
import { RecipiesContext } from '../context/GeneralContext'
import { TextField, Grid, FormControl, Box } from '@mui/material'

function Form() {
    const { setRecipeToSearch, recipeToSearch } = useContext(RecipiesContext)

    const handlderWithDebounce = debounce((value) => {
        setRecipeToSearch(value)
    }, 500)
    return (
        <Grid container spacing={2}>
            <Grid item xs={1} md={3} ></Grid>
            <Grid item xs={10} md={6}>
                <Box sx={{ m: '2rem' }} >
                    <FormControl fullWidth>
                        <TextField type="text" onChange={(e) => handlderWithDebounce(e.target.value)} />
                    </FormControl>
                </Box>
            </Grid>
            <Grid item xs={1} md={3}></Grid>
        </Grid>
    )
}

export default Form