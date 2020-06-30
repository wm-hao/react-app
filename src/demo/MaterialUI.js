import Button from '@material-ui/core/Button';
import * as React from "react";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ButtonBase from '@material-ui/core/ButtonBase';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SplitButton from "./Split";
import Checkboxes from "./CheckBox";
import CheckboxLabels from "./CheckBoxLabels";
import RedButton from "./RedButton";
import Box from "@material-ui/core/Box";
import StyleButton from "./StyleButton";
import MyButton from "./MyButton";
import CustomizedSwitches from "./Swtich";
import MaterialTableDemo from "./Table";

class MaterialUI extends React.Component {
    render() {
        return (
            <ButtonDemo/>
        )
    }
}



class ButtonDemo extends React.Component {

    render() {

        return (
            <div>
                <Button variant="contained">Default</Button>
                <Button variant="contained" color="primary">
                    Primary
                </Button>
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>
                <Button variant="contained" disabled>
                    Disabled
                </Button>
                <Button variant="contained" color="primary" href="#contained-buttons">
                    Link
                </Button>
                <Button onClick={() => {
                    alert('clicked')
                }}>请点击我</Button>
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera/>
                </IconButton>
                <div>
                    <IconButton aria-label="delete" size="small">
                        <ArrowDownwardIcon fontSize="inherit"/>
                    </IconButton>
                    <IconButton aria-label="delete">
                        <DeleteIcon fontSize="small"/>
                    </IconButton>
                    <IconButton aria-label="delete">
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton aria-label="delete">
                        <DeleteIcon fontSize="large"/>
                    </IconButton>
                </div>
                <IconButton aria-label="delete">
                    <DeleteIcon/>
                </IconButton>
                <IconButton aria-label="delete" disabled color="primary">
                    <DeleteIcon/>
                </IconButton>
                <IconButton color="secondary" aria-label="add an alarm">
                    <AlarmIcon/>
                </IconButton>
                <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon/>
                </IconButton>
                {/*<Button variant="contained" color={green}>*/}
                {/*    Green*/}
                {/*</Button>*/}
                {/*<Button variant="contained" color={purple}>*/}
                {/*    Purple*/}
                {/*</Button>*/}
                <span style={{cursor: 'not-allowed'}}>
 <Button disabled>
   disabled
 </Button>
                    <ButtonBase >百度</ButtonBase>
</span>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                    <Button shadows={3}>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <SplitButton/>
                <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button >One</Button>
                    <Button>Two</Button>
                </ButtonGroup>
                <Checkboxes/>
                <CheckboxLabels/>
                <RedButton/>
                <Box
                    boxShadow={3}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{ width: '8rem', height: '5rem' }}
                >
                    boxShadow={3}
                </Box>
                <Box width="100%">
                    <Box width={1 / 4} bgcolor="grey.300" p={1} my={0.5}>
                        Width 1/4
                    </Box>
                    <Box width={300} bgcolor="grey.300" p={1} my={0.5}>
                        Width 300
                    </Box>
                    <Box width="75%" bgcolor="grey.300" p={1} my={0.5}>
                        Width 75%
                    </Box>
                    <Box width={1} bgcolor="grey.300" p={1} my={0.5}>
                        Width 1
                    </Box>
                </Box>
                <StyleButton />
                <MyButton handleClick={() => alert('hi')}/>
                <CustomizedSwitches/>
                <MaterialTableDemo/>
            </div>
        )
    }
}

export default MaterialUI;
