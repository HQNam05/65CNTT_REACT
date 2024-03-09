import React from "react";
export default function TodoCard({task, cancelData, finishData, updateData}) {
    return (
    <div className="card mb-3">
    <div className="card-body">
    <p className="card-text">{task.create_at}</p>
    <h5 className="card-title"> {task.content}</h5>
        <div className="d-flext gap-2">
            {task.status_id === 1 ?  <button className="btn btn-success"
            onClick={() => {
                finishData(task);
            }}>Hoàn thành</button> : null}


            {task.status_id !== 3 ?  <button className="btn btn-danger" 
            onClick={() => {
            cancelData(task);
            }} > Hủy</button>  : null}


            {task.status_id === 3 ?  <button className="btn btn-primary"
            onClick={() => {
            updateData(task)
            }}>Làm mới</button> : null}
          
        </div>
    </div>
    </div>
    );
}