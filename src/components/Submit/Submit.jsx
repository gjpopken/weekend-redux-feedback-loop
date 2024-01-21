import axios from "axios"
import { Typography, Button, Grid } from "@mui/material"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const Submit = () => {
    const formInputs = useSelector(store => store)
    const history = useHistory()
    const { feeling, understanding, support, comments } = formInputs

    const handleSubmit = () => {
        console.log('posting to axios');
        history.push('/success')
    }

    return (
        <>
            <Typography variant="h3" align="center">Review Your Feedback!</Typography>
            <Typography variant="h4" align="center">Thank you for answering!</Typography>
            <Grid container justifyContent={'center'}>
                <Grid item>
                    <Typography variant="body1">Feelings: {feeling}</Typography>
                    <Typography variant="body1">Understanding: {understanding}</Typography>
                    <Typography variant="body1">Support: {support}</Typography>
                    <Typography variant="body1">Comments: {comments}</Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent={'center'}>
                <Button variant="contained" size="large" data-testid="next" style={{ marginTop: '5px' }} onClick={handleSubmit}>Submit</Button>
            </Grid>

        </>
    )
}

export default Submit