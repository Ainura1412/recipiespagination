import { useContext } from 'react'
import { RecipiesContext } from '../context/GeneralContext'
import { Card, CardHeader, CardContent, Divider, CardMedia, Grid, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
function Recipies() {
    const styleHeader = {
        height: 50
    }
    const { allRecipes, pageNow, howManyElementsPerPage } = useContext(RecipiesContext)
    const start = pageNow * howManyElementsPerPage;
    const end = start + howManyElementsPerPage;
    const recipiesToShow = allRecipes.slice(start, end)
    return (
        <>
            <h1>this are my recipies</h1>
            <Grid container spacing={2} style={styleHeader}>
                {
                    recipiesToShow.map((recipe) => (
                        <Grid item sx={6} md={3}>
                            <Card>
                                <CardHeader title={recipe.recipe.label} />
                                <Divider />
                                <CardContent>
                                    <CardMedia component="img" image={recipe.recipe.image} height="200" />
                                </CardContent>
                            </Card>
                            <Link to={`/Recipe/${recipe.recipe.label}`}>See More</Link>
                        </Grid>
                    ))
                }
                <Grid item xs={12}>
                    <Pagination />
                </Grid>
            </Grid>

        </>
    )
}
export default Recipies

