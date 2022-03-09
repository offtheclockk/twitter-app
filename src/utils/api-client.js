import axios from 'axios';

const client = axios.create();

export async function authenticate() {
          return await client.get("/auth/login").then((res) => res.data.user);
}

export async function login(payload) {
          await client.post("/auth/login", payload);
          window.location.pathname = "/";
}

export async function signup(payload) {
          await client.post("/auth/signup", payload);
          window.location.assign("/settings/profile?redirected=true");
}

export async function logout() {
          await client.get("/auth/logout");
          window.location.pathname = "/";
}

export async function getNotifications() {
          return await client
                    .get(`/api/notifications`)
                    .then((res) => res.data.notifications);
}

export async function updateUserDetails(user) {
          await client.post("/api/updateuser", user);
}