import React from "react";
import {Box, makeStyles, Typography} from "@material-ui/core";
import {Pie} from "react-chartjs-2";

const useStyles = makeStyles((theme) => ({
    title: {
        display: "flex",
        justifyContent: "center",
        fontSize: theme.spacing(3),
    }
}));

const UserDashboard = ({userList, title}) => {
    const classes = useStyles();
    const label = Object.keys(userList);
    const userCount = Object.values(userList);


    const data = {
        labels: [...label],
        datasets: [
            {
                label: "Created on:",
                data: [...userCount],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    '#89c74a'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    '#FF6600'
                ],
                borderWidth: 1,
            }
        ]
    }

    return (
        <Box>
            <Box className='header'>
                <Typography className={classes.title}>{title}</Typography>
            </Box>
            <Pie data={data}/>
        </Box>
    );
}

export default UserDashboard;
