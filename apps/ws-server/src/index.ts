import { WebSocketServer, WebSocket } from "ws"
const ws = new WebSocketServer({ port: 8080 })
let allSockets: WebSocket[] = []
ws.on("connection", (socket) => {
    allSockets.push(socket)
    socket.on("message", (message) => {
        console.log(message.toString());
        allSockets.forEach(s => {
            s.send(message.toString())
        })

    })

    socket.on("close", () => {
        allSockets = allSockets.filter(s => s != socket)
    })
})