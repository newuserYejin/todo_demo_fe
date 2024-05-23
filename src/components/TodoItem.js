import React from "react";
import { Col, Row } from "react-bootstrap";
import api from "../utils/api";

const TodoItem = ({ item, deleteTask, getTasks }) => {

  const updateComplete = async (id) => {
    try {
      const response = await api.put(`/tasks/${id}`, {
        isComplete: !item.isComplete
      })
      if (response.status === 200) {
        console.log('완료 여부 변경 성공')
        getTasks()
      } else {
        throw new Error('task can not be updated')
      }
    } catch (err) {
      console.log('changeError:', err)
    }
  }

  return (
    <Row>
      <Col xs={12}>
        <div className={`todo-item ${item.isComplete ? "done" : ""}`}>
          <div className="todo-content">{item.task}</div>

          <div>
            <button className="button-delete" onClick={() => deleteTask(item._id)}>삭제</button>
            <button className="button-delete" onClick={() => updateComplete(item._id)}>{item.isComplete ? "다시하기" : "끝남"}</button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;
