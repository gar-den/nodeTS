import express, { Request, Response, NextFunction, Router } from "express";
import Books from "../schemas/book";

const bookRouter = express.Router();

// create one
bookRouter.post("/", async (req, res) => {
  // parameters are mapped as the type formations are
  const {
    title,
    author,
    price,
  }: { title: string; author: string; price: number } = req.body;

  try {
    await Books.create({ title, author, price });

    res.json({ message: "success" });
  } catch (err) {
    res.json({ message: "fail" });
  }
});

// read all
bookRouter.get("/", async (req, res) => {
  try {
    const books = await Books.find({}); // do not use "any" type!

    res.json({ message: "success", books: books });
  } catch (err) {
    res.json({ message: "fail" });
  }
});

// read one
bookRouter.get("/:bookId", async (req, res) => {
  const bookId = req.params.bookId;

  try {
    const book = await Books.find({ _id: bookId });

    res.json({ message: "success", book: book });
  } catch (err) {
    res.json({ message: "fail" });
  }
});

// modify one
bookRouter.put("/:bookId", async (req, res) => {
  const bookId = req.params.bookId;
  const {
    title,
    author,
    price,
  }: { title: string; author: string; price: number } = req.body;

  try {
    await Books.findOneAndUpdate({ _id: bookId }, { title, author, price });

    res.json({ message: "success" });
  } catch (err) {
    res.json({ message: "fail" });
  }
});

// delete one
bookRouter.delete("/:bookId", async (req, res) => {
  const bookId = req.params.bookId;

  try {
    await Books.findOneAndDelete({ _id: bookId });

    res.json({ message: "success" });
  } catch (err) {
    res.json({ message: "fail" });
  }
});

export { bookRouter };
