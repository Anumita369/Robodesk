import axios from "axios";

const API_URL = "https://your-backend.com/api";

export type RobotData = {
  temp: number;
  humidity: number;
  ldr: number;
  moisture: number;
  accel: { x: number; y: number; z: number };
  timestamp: string;
};

export type RobotState = {
  emotion: string;
  oled_text: string;
  last_seen: string;
};

export type User = {
  email: string;
  robotId: string;
};

export const fetchRobotData = async (robotId: string): Promise<RobotData[]> => {
  const response = await axios.get(`${API_URL}/robot/${robotId}/data`);
  return response.data;
};

export const sendEmotion = async (robotId: string, emotion: string) => {
  return axios.post(`${API_URL}/robot/${robotId}/emotion`, { emotion });
};

export const sendOLEDText = async (robotId: string, text: string) => {
  return axios.post(`${API_URL}/robot/${robotId}/oled`, { text });
};

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  return response.data; // { token, robotId }
};
