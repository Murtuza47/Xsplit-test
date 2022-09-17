export interface ICard {
  id: string;
  status: 'complete' | 'incomplete';
  createdAt: string;
  name: string;
  description: string;
  handleUpdateTodoItem: (id: string, selector: object) => void;
  handleDeleteTodoItem: (id: string) => void;
  setOpenModal: (open: boolean) => void;
  setModalData: (data: { [x: string]: string }) => void
}