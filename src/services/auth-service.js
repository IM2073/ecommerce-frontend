import FetchClient from "@/services/service-client";

class AuthService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    async register(userData) {
        try {
            const { data } = await this.httpClient.post("/register", userData, false);
            return data;
        } catch (err) {
            throw err;
        }
    }

    async login(userData) {
        try {
            const { data } = await this.httpClient.post("/login", userData, false);
            localStorage.setItem("access_token", data?.token);
            localStorage.setItem("email", data?.email);
            localStorage.setItem("username", data?.name);
            return data;
        } catch (err) {
            throw err;
        }
    }
}

const authService = new AuthService(FetchClient);
export default authService;