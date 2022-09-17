import { useEffect, useState } from "react";
import { Card } from "../../components/Card/card";
import { ITodo } from "../../interface";
import "./TodoList.scss"
import { Loader } from "../../components/Loader/loader";
import { format } from "date-fns";
import { client } from "../../utils/client";
import { Modal } from "../../components/Modal/modal";
import { Header } from "../../components/Header/header";

export const TodoList = () => {
  const [data, setData] = useState<ITodo[]>([])
  const [modalData, setModalData] = useState<{ [x: string]: string }>({})
  const [open, setOpen] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  const fetchData = () => {
    client.get('/get-todo-items')
      .then(res => {
        setLoading(false)
        if (res) setData(res.data.data)
      })
      .catch(error => {
        setLoading(false)
      })
  }
  useEffect(() => {
    fetchData()
  }, [])

  const handleUpdateTodoItem = (id: string, selector: object) => {
    client.put(`/update-todo-item/${id}`, selector)
      .then(res => {
        if (res.status === 200) fetchData()
      })
      .catch(error => console.log(error))
  }

  const handleDeleteTodoItem = (id: string) => {
    client.delete(`/delete-todo-item/${id}`)
      .then(res => {
        if (res.status === 200) fetchData()
      })
      .catch(error => console.log(error))
  }

  const handleSubmit = (id: string) => {
    client.put(`/update-todo-item/${id}`, modalData)
      .then(res => {
        if (res.status === 200) {
          setOpen(false)
          fetchData()

        }
      })
  }

  return (
    <>
      {
        loading ?
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Loader />
          </div>
          :
          <>
            <Header label='Todo items' />
            <div className="todo-list">
              {data.map(({ _id, name, description, status, createdAt }) => (
                <Card
                  id={_id}
                  key={_id}
                  name={name}
                  description={description}
                  status={status}
                  createdAt={format(new Date(createdAt), 'yyyy-MM-dd')}
                  handleUpdateTodoItem={handleUpdateTodoItem}
                  handleDeleteTodoItem={handleDeleteTodoItem}
                  setOpenModal={setOpen}
                  setModalData={setModalData}
                />
              ))}
              {open && <Modal onCloseModal={setOpen} modalData={modalData} handleSubmit={handleSubmit} />}
            </div>
          </>

      }

    </>
  )
}