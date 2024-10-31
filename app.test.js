const app = require('./evaluacion/app');
const supertest = require('supertest');
const request = supertest(app);

describe("/test endpoint", () => {
  test("Debe devolver 'Books'", async () => {
    const response = await request.get("/books");
    expect(response.status).toBe(200);
    expect(response.text).toContain("Lista de Libros"); // Verifica el contenido del HTML
  });

  test("Debe devolver 'Authors'", async () => {
    const response = await request.get("/authors");
    expect(response.status).toBe(200);
    expect(response.text).toContain("Lista de Autores"); // Verifica el contenido del HTML
  });

  test("Debe devolver error", async () => {
    const response = await request.get("/any-route");
    const body = JSON.parse(response.text);
    expect(response.status).toBe(404);
    expect(body.message).toBe("Incorrect route or params");
  });
});
