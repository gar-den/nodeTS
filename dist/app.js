"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_1 = require("./routers/book");
const schemas_1 = require("./schemas");
const port = 5000; // variable automatically inferred as number
const app = express_1.default(); // variable automatically inferred as Application
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
schemas_1.connect();
// APIs
app.use("/api/book", [book_1.bookRouter]);
app.listen(port, () => {
    console.log("listening at http://localhost:5000");
});
// 굳이 모든 타입을 명시해 줄 필요가 없다.
// 자동으로 사용되는 인자 값들, 바로 뒤에 값이 적용되는 경우는 바로 타입이 명시되기 때문이다.
