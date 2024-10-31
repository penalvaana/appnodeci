const app = require('./evaluacion/app');
const supertest = require('supertest');
const request = supertest(app);

describe("/test endpoint", () => {
  test("Debe devolver 'Books'", async () => {
    const response = await request.get("/books");
    const body = JSON.parse(response.text);
    expect(response.status).toBe(200);
    expect(body.message).toBe("Books");
  });

  test("Debe devolver 'Authors'", async () => {
    const response = await request.get("/authors");
    const body = JSON.parse(response.text);
    expect(response.status).toBe(200);
    expect(body.message).toBe("Authors");
  });

  test("Debe devolver error", async () => {
    const response = await request.get("/any-route");
    const body = JSON.parse(response.text);
    expect(response.status).toBe(404);
    expect(body.message).toBe("Incorrect route or params");
  });
});
