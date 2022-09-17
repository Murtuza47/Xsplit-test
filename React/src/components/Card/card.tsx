import { ICard } from "../../interface"
import { Button } from "../Button/button"
import "./card.scss"

export const Card = ({ id, status, createdAt, name, description, handleUpdateTodoItem, handleDeleteTodoItem, setOpenModal, setModalData }: ICard) => (
  <div className="card" onClick={() => {
    setOpenModal(true)
    setModalData({
      _id: id,
      name,
      description,
    })
  }}>
    <div className="card-flex">
      <div style={{ display: 'flex' }}>
        <div className="card-signal" style={{ background: status === 'complete' ? 'green' : 'red' }} />
        <p className="card-text">{status.toUpperCase()}</p>
      </div>
      <Button label="Delete" color="red" onClick={() => handleDeleteTodoItem(id)} />
    </div>

    <h2 className="card-header">{name}</h2>
    <p className="card-description">{description}</p>
    <br />
    <div className="card-flex">
      {status !== 'complete' && <Button label="Complete" color="#0a1172" onClick={() => handleUpdateTodoItem(id, { status: "complete" })} />}
      {status === 'complete' && <div />}
      <p className="card-text">Created at: {createdAt}</p>
    </div>
  </div>
)
