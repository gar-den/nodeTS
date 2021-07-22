import express, { Application, Request, Response, NextFunction } from "express";

import { bookRouter } from "./routers/book";
import { connect } from "./schemas";

const port = 5000; // variable automatically inferred as number

const app = express(); // variable automatically inferred as Application
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// DB
connect();

// APIs
app.use("/api/book", [bookRouter]);

app.listen(port, (): void => {
  console.log("listening at http://localhost:5000");
});

// 굳이 모든 타입을 명시해 줄 필요가 없다.
// 자동으로 사용되는 인자 값들, 바로 뒤에 값이 적용되는 경우는 바로 타입이 명시되기 때문이다.
