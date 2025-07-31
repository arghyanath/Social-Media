import { WebSocketServer, WebSocket } from "ws"
const ws = new WebSocketServer({ port: 8080 })

const clients = new Map<string, WebSocket>()


ws.on("connection", (socket) => {
    socket.on("message", (message) => {
        try {
            const parsedMessage = JSON.parse(message as unknown as string)
            if (parsedMessage.type === "connect") {
                clients.set(parsedMessage.senderId, socket)
            }
            if (parsedMessage.type === "chat") {
                const receiverSocker = clients.get(parsedMessage.receiverId)

                if (receiverSocker) {
                    receiverSocker.send(JSON.stringify({
                        "senderId": parsedMessage.senderId,
                        "text": parsedMessage.text
                    }))
                }
            }
        }
        catch (e) {
            console.log(e);

        }
    })

    socket.on("close", () => {
        for (const [id, client] of clients.entries()) {
            if (client === socket) {
                clients.delete(id)
            }
        }
    })
})