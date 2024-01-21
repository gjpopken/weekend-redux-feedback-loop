import { Typography, TextField, Grid, Button } from "@mui/material"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const Page = ({question, inputType, inputLabel, btnText, path}) => {
const history = useHistory()

    return (
        <>
            <Typography variant="h3" align="center">{question}</Typography>
            <Grid container justifyContent='center' margin={'dense'}>
                <TextField type={inputType} variant="outlined" size="medium" label={inputLabel} margin="dense" inputProps={{ 'data-testid': 'input' }} />
            </Grid>
            <Grid container justifyContent={'center'}>
                <Button variant="contained" size="large" data-testid="next" style={{marginTop: '5px'}} onClick={() => history.push(path)}>{btnText || 'Next'}</Button>
            </Grid>
        </>

    )
}

export default Page