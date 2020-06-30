import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FormatListBulletedSharpIcon from '@material-ui/icons/FormatListBulletedSharp';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import withStyles from "@material-ui/core/styles/withStyles";
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';

const styles = (theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
});


class SideBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tradeRecordOpen: false
        };
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle = (anchor) => {
        console.log('a');
        this.setState(state => {
            return {
                [anchor]: !state[anchor]
            }
        });
    };

    render() {
        const {classes} = this.props;
        const listItems = [
            {
                text: '交易记录',
                icon: <FormatListBulletedSharpIcon/>,
                hasSecondItems: true,
                handleClick: () => this.handleToggle('tradeRecordOpen'),
                in: this.state['tradeRecordOpen'],
                children: [
                    {
                        text: '交易日志',
                        icon: <QueryBuilderOutlinedIcon/>,
                    }
                ]
            }
        ];
        return (
            <List>
                {listItems.map((item, idx) => (
                    <div key={idx}>
                        <ListItem button key={idx} onClick={item.handleClick}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}/>
                            {item.hasSecondItems ? <ExpandLess/> : <ExpandMore/>}
                        </ListItem>
                        {item.hasSecondItems ?
                            <Collapse in={item.in} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {item.children.map((secItem, secItemIdx) => (
                                        <ListItem button className={classes.nested} key={secItemIdx}>
                                            <ListItemIcon>
                                                {secItem.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={secItem.text}/>
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse> : ''
                        }
                    </div>
                ))}
                {/*     <ListItem button>
                    <ListItemIcon>
                        <EventNoteOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary="交易日志"/>
                </ListItem>
                <ListItem button onClick={() => this.handleToggle('tradeRecordOpen', !this.state['tradeRecordOpen'])}>
                    <ListItemIcon>
                        <FormatListBulletedSharpIcon/>
                    </ListItemIcon>
                    <ListItemText primary="交易记录"/>
                    {this.state['tradeRecordOpen'] ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={this.state['tradeRecordOpen']} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <QueryBuilderOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText primary="历史查询"/>
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button>
                    <ListItemIcon>
                        <AccountBoxOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary="用户信息"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <AccountBalanceWalletOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary="账户信息"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <BarChartIcon/>
                    </ListItemIcon>
                    <ListItemText primary="数据图表"/>
                </ListItem>*/}
            </List>
        )
    }
}

export default withStyles(styles)(SideBar);

/*
export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon/>
            </ListItemIcon>
            <ListItemText primary="Dashboard"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <NotesOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary="交易日志"/>
        </ListItem>
        <ListItem button onc>
            <ListItemIcon>
                <FormatListBulletedSharpIcon/>
            </ListItemIcon>
            <ListItemText primary="交易记录"/>

        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AccountBoxOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary="用户信息"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AccountBalanceWalletOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary="账户信息"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <BarChartIcon/>
            </ListItemIcon>
            <ListItemText primary="数据图表"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ShoppingCartIcon/>
            </ListItemIcon>
            <ListItemText primary="Orders"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon/>
            </ListItemIcon>
            <ListItemText primary="Customers"/>
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <LayersIcon/>
            </ListItemIcon>
            <ListItemText primary="Integrations"/>
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Current month"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Last quarter"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Year-end sale"/>
        </ListItem>
    </div>
);
*/
