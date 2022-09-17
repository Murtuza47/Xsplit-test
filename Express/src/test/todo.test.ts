import supertest from "supertest";
import { app } from "..";


describe("Get Todo", () => {
  describe("Given Todo item doenot exists", () => {
    it("should return 404", async () => {
      const id = "123";
      await supertest(app).get(`/api/update-todo-item/${id}`).expect(404)
    });
  })

  describe("Id is empty", () => {
    it("should return 400", async () => {
      const id = "";
      await supertest(app).get(`/api/update-todo-item/${id}`).expect(404)
    })
  })


})