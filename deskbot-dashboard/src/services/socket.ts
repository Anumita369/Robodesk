import { io, Socket } from "socket.io-client";
import type { RobotData } from "./api";

const SOCKET_URL = "https://your-backend.com";
export const socket: Socket = io(SOCKET_URL, {
  transports: ["websocket"],
});

export const subscribeRobotData = (robotId: string, callback: (data: RobotData) => void) => {
  socket.on(`robot/${robotId}/data`, callback);
};
