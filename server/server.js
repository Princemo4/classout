import express, {Application} from "express";
import socketIO, {Server as SocketIoServer} from "socket.io";
import {createServer, Server as HTTPServer} from "http";

export class Server {
    // httpServer: HTTPServer;
    // app: Application;
    // io: SocketIoServer;

    DEFAULT_PORT = 5000;

    constructor() {
        this.initialize();

        this.handleRoutes();
        this.handleSocketConnection();
    }

    initialize() {
        this.Application = express();
        this.HTTPServer = createServer(this.Application);
        this.SocketIoServer = socketIO(this.HTTPServer);
    }

    handleRoutes() {
        this.Application.get("/", (req, res)=> {
            res.send('hello world!')
        }) 
    }

    handleSocketConnection() {
        this.SocketIoServer.on("connection", socket => {
            console.log("Socket connected.");
        });
    }
}