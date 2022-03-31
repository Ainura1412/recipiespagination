import { useState, useContext } from 'react'
import { RecipiesContext } from '../context/GeneralContext'
import { CardMedia, Grid, Tab } from '@mui/material'
import { TabPanel, TabList, TabContext } from '@mui/lab'
import { useParams } from 'react-router-dom'


function Recipe() {
    const [value, setValue] = useState("1")
    const { recipe } = useParams()
    const { allRecipes } = useContext(RecipiesContext)
    const data = allRecipes.filter((element) => element.recipe.label === recipe)
    console.log(data)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <h1>{recipe}</h1>
                <CardMedia component="img" image={data[0].recipe.image} alt={recipe} />
            </Grid>

            <Grid item xs={12} md={6}>
                <TabContext value={value}>
                    <TabList onChange={handleChange} aria-label="description">
                        <Tab label="Ingridients" value="1"></Tab>
                        <Tab label="Nutricional Value" value="2"></Tab>
                        <Tab label="Something" value="3"></Tab>
                    </TabList>
                    <TabPanel value='1'>here will be some information</TabPanel>
                    <TabPanel value='2'>Panel 2</TabPanel>
                    <TabPanel value='3'>Panel 3</TabPanel>
                </TabContext>
            </Grid>
        </Grid>
    )
}

export default Recipe