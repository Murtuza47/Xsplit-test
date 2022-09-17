export interface IModal {
  onCloseModal: (open: boolean) => void;
  handleSubmit: (id: string) => void;
  modalData: { [x: string]: string }
}