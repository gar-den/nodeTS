"use strict";
// basic CRUD
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRouter = void 0;
const express_1 = __importDefault(require("express"));
const book_1 = __importDefault(require("../schemas/book"));
const bookRouter = express_1.default.Router();
exports.bookRouter = bookRouter;
// create one
bookRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // parameters are mapped as the type formations are
    const { title, author, price, } = req.body;
    try {
        yield book_1.default.create({ title, author, price });
        res.json({ message: "success" });
    }
    catch (err) {
        res.json({ message: "fail" });
    }
}));
// read all
bookRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield book_1.default.find({}); // do not use "any" type!
        res.json({ message: "success", books: books });
    }
    catch (err) {
        res.json({ message: "fail" });
    }
}));
// read one
bookRouter.get("/:bookId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.bookId;
    try {
        const book = yield book_1.default.find({ _id: bookId });
        res.json({ message: "success", book: book });
    }
    catch (err) {
        res.json({ message: "fail" });
    }
}));
// modify one
bookRouter.put("/:bookId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.bookId;
    const { title, author, price, } = req.body;
    try {
        yield book_1.default.findOneAndUpdate({ _id: bookId }, { title, author, price });
        res.json({ message: "success" });
    }
    catch (err) {
        res.json({ message: "fail" });
    }
}));
// delete one
bookRouter.delete("/:bookId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.bookId;
    try {
        yield book_1.default.findOneAndDelete({ _id: bookId });
        res.json({ message: "success" });
    }
    catch (err) {
        res.json({ message: "fail" });
    }
}));
