import { IModal } from "../../interface/IModal";
import "./modal.scss"

export const Modal = ({ modalData, onCloseModal, handleSubmit }: IModal) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    modalData[e.target.name] = e.target.value
  }

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-close-btn">
          <button onClick={() => onCloseModal(false)}>X</button>
        </div>
        <div className="modal-title">Todo item</div>
        <div className="modal-body">
          <form >
            <input type="text" name='name' defaultValue={modalData.name || ''} placeholder="Name" onChange={(e) => handleChange(e)} style={{ width: '100%', marginBottom: "5px" }} />
            <textarea name="description" id="" defaultValue={modalData.description || ''} onChange={(e) => handleChange(e)} cols={30} rows={10} placeholder="Description" style={{ width: '100%', marginBottom: "5px" }} />
          </form>
        </div>
        <div className="modal-submit-btn">
          <button onClick={() => handleSubmit(modalData._id)}>Submit</button>
        </div>
      </div>
    </div>
  )
}