import { setupServer } from "msw/node";

const server = setupServer();
server.listen();
server.close();
server.close(); // second call
console.log("second close() returned without error");
