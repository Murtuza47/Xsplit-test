export interface ITodo {
  _id: string;
  name: string,
  createdAt: Date;
  status: 'complete' | 'incomplete';
}