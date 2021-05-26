import React from "react";
import {Box} from "@material-ui/core";
import {Pie} from "react-chartjs-2";

const UserDashboard = ({userList}) => {
    const label = [];
    for (let i = 0; i < userList.length; i++) {
           label.push("Created on:" + userList[i].createdOn)
        }

    const data = {
        labels: [...new Set(label)],
        data: []
    }




    console.log(data.labels, userList)




    return (
        <Box>
            User Dashboard
        </Box>
    );
}

export default UserDashboard;
