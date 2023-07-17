/**
POST => Inserir um dado
GET => Buscar um/mais dados
PUT => Alterar um dado
DELETE => Remover um dado
 */

/**
 * Body => Sempre que eu quiser enviar dados para minha aplicação
 * Params => /products/23238236474
 * Query => /products?id=187364531715
 */
const express = require("express");
const { randomUUID } = require("crypto");

const app = express();

app.use(express.json());

const products = [];

app.post("/products", (req, res) => {
  // Nome e Preço

  const { name, price } = req.body;

  const product = {
    name,
    price,
    id: randomUUID(),
  };

  products.push(product);

  return res.json(product);
});

app.get("/products", (req, res) => {
  return res.json(products);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => product.id === id);
  return res.json(product);
});

app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const productIndex = products.findIndex((product) => product.id === id);
  products[productIndex] = {
    ...products[productIndex],
    name,
    price,
  };
  return res.json({ message: "Produto alterado com sucesso" });
});

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  const productIndex = products.findIndex((product) => product.id === id);

  products.splice(productIndex, 1);

  return res.json({message: "Produto removido com sucesso!"})
});

app.listen(4002, () => console.log("Servidor do express 4002"));
