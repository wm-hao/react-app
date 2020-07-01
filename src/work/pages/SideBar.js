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
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import BarChartIcon from '@material-ui/icons/BarChartOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import {Link} from 'react-router-dom';
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

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

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
                text: '系统首页',
                icon: <HomeOutlinedIcon/>,
                hasSecondItems: false,
                handleClick: () => {
                },
                in: false,
                link: '/home1',
                children: []
            },
            {
                text: '交易记录',
                icon: <FormatListBulletedSharpIcon/>,
                hasSecondItems: true,
                handleClick: () => this.handleToggle('tradeRecordOpen'),
                in: this.state['tradeRecordOpen'],
                link: '/home/other',
                children: [
                    {
                        text: '历史查询',
                        icon: <QueryBuilderOutlinedIcon/>,
                        link: '#',
                    },
                    {
                        text: '新增记录',
                        icon: <AddCircleOutlineOutlinedIcon/>,
                        link: '#',
                    }
                ]
            },
            {
                text: '交易日志',
                icon: <EventNoteOutlinedIcon/>,
                hasSecondItems: false,
                handleClick: () => {
                },
                in: false,
                link: '#',
                children: []
            },
            {
                text: '用户信息',
                icon: <AccountBoxOutlinedIcon/>,
                hasSecondItems: false,
                handleClick: () => {
                },
                in: false,
                link: '#',
                children: []
            },
            {
                text: '账户信息',
                icon: <AccountBalanceWalletOutlinedIcon/>,
                hasSecondItems: false,
                handleClick: () => {
                },
                in: false,
                link: '#',
                children: []
            },
            {
                text: '图表分析',
                icon: <BarChartIcon/>,
                hasSecondItems: false,
                handleClick: () => {
                },
                in: false,
                link: '',
                children: []
            }
        ];
        return (
            <List>
                {listItems.map((item, idx) => (
                    <div key={idx}>
                        <ListItemLink button key={idx} onClick={item.handleClick} href={item.link}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}/>
                            {item.hasSecondItems ? item.in ? <ExpandLess/> : <ExpandMore/> : ''}
                        </ListItemLink>
                        {item.hasSecondItems ?
                            <Collapse in={item.in} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {item.children.map((secItem, secItemIdx) => (
                                        <ListItemLink button className={classes.nested} key={secItemIdx} href={item.link}>
                                            <ListItemIcon>
                                                {secItem.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={secItem.text}/>
                                        </ListItemLink>
                                    ))}
                                </List>
                            </Collapse> : ''
                        }
                    </div>
                ))}
            </List>
        )
    }
}

export default withStyles(styles)(SideBar);

