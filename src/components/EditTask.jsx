import React from 'react';
import { useParams } from 'react-router-dom';

const EditTask = () => {
    const { taskID } = useParams();
    return (
    <div>
        <h2>Edit Task</h2>
        <P>Task ID: {taskID} </P>
        <p>Here, you'll view or edit the task details</p>
    </div>
    )
};

export default EditTask;