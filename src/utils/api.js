import axios from "axios";

// Base URL of your backend
const API = axios.create({
  baseURL: "http://localhost:5000/api", // Change if deployed
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to include auth token if exists
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // JWT token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Auth APIs
export const loginUser = (credentials) => API.post("/auth/login", credentials);
export const registerUser = (data) => API.post("/auth/register", data);

// Exam APIs
export const getExams = () => API.get("/exams");
export const getExamById = (id) => API.get(`/exams/${id}`);

// Application APIs
export const applyExam = (examId, userId) => API.post("/applications", { examId, userId });
export const getApplicationHistory = (userId) => API.get(`/applications/history/${userId}`);

// Notifications
export const getNotifications = (userId) => API.get(`/notifications/${userId}`);

// Notes & Videos (Optional)
export const getNotes = (userId) => API.get(`/notes/${userId}`);
export const getVideos = () => API.get("/videos");

export default API;
