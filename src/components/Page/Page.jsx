import { Typography, TextField, Grid, Button } from "@mui/material"

const Feelings = () => {

    return (
        <>
            <Typography variant="h3" align="center">How are you feeling today?</Typography>
            <Grid container justifyContent='center' margin={'dense'}>
                <TextField type="number" variant="outlined" size="medium" label="Feeling?" margin="dense" inputProps={{ 'data-testid': 'input' }} />
            </Grid>
            <Grid container justifyContent={'center'}>
                <Button variant="contained" size="large" data-testid="next" style={{marginTop: '5px'}}>Next</Button>
            </Grid>
        </>

    )
}

export default Feelings