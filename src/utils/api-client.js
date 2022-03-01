import axios from 'axios';

const client = axios.create();

export async function authenticate() {
          return await client.get("/auth/login").then((res) => res.data.user);
}