"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_1 = require("./routers/book");
const schemas_1 = require("./schemas");
const port = 5000;
const app = express_1.default();
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
schemas_1.connect();
// APIs
app.use("/api/book", [book_1.bookRouter]);
app.listen(port, () => {
    console.log("listening at http://localhost:5000");
});
