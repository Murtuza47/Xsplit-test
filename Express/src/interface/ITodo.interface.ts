export interface ITodo {
  _id: string;
  name: string,
  description: string,
  createdAt: Date;
  status: 'complete' | 'incomplete';
}