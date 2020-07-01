import * as React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import clsx from 'clsx';
import {withStyles} from '@material-ui/core/styles';


const styles = theme => ({

    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
});

class Index extends React.Component {

    render() {
        const {classes} = this.props;
        const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
        return (
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper className={fixedHeightPaper}>
                            Chart
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper className={fixedHeightPaper}>
                            Deps
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            Orders
                        </Paper>
                    </Grid>
                </Grid>

            </Container>
        /*<Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={9} style={{height:240}}>
                    <Paper >
                        Chart
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <Paper style={{height:240}}>
                        Deps
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper style={{height:240}}>
                        Orders
                    </Paper>
                </Grid>
            </Grid>

        </Container>*/
        )
    }

}
// export default Index;
export default withStyles(styles)(Index);
