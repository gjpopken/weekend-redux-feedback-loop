import { Typography, TextField, Grid, Button } from "@mui/material"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"

const Page = ({ question, inputType, inputLabel, btnText, path, actionType }) => {
    const history = useHistory()
    // const formInputs = useSelector(store => store.formInputs)
    const dispatch = useDispatch()

    const [inputVal, setInputVal] = useState('')

    const handleClick = () => {
        dispatch({ type: actionType, payload: inputVal })
        history.push(path)
    }

    return (
        <>
            <Typography variant="h3" align="center">{question}</Typography>
            <Grid container justifyContent='center' margin={'dense'}>
                <TextField
                    required
                    type={inputType}
                    variant="outlined"
                    size="medium"
                    label={inputLabel}
                    margin="dense"
                    inputProps={{ 'data-testid': 'input' }}
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                />
            </Grid>
            <Grid container justifyContent={'center'}>
                <Button variant="contained" size="large" data-testid="next" style={{ marginTop: '5px' }} onClick={handleClick}>{btnText || 'Next'}</Button>
            </Grid>
        </>

    )
}

export default Page