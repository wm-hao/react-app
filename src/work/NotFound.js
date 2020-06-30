import * as React from "react";
import Container from '@material-ui/core/Container';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";


class NotFound extends React.Component {

    render() {
        return (
            <Container component='main' maxWidth={'xs'} className={'center-both'}>
                <CssBaseLine/>
                <Typography component="div">
                    <Box m={2} boxShadow={0} textAlign={'center'} alignItems="center" style={{'height': '100%'}}>
                        Not Found
                    </Box>
                </Typography>
            </Container>
        )
    }

}

export default NotFound;
