export interface ITodoModel<I> {
  customCreate: (name: string, description?: string) => Promise<I>;
  customUpdate: (id: string, selector: object) => Promise<I>;
  customDelete: (id: string) => Promise<string>;
  customGet: () => Promise<I>;
}