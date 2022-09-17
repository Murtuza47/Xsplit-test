export interface ITodo {
  _id: string;
  name: string,
  createdAt: string;
  description: string;
  status: 'complete' | 'incomplete';
}