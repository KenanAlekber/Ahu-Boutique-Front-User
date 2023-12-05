import { HttpClient } from "../HttpClient ";

export class BasketService extends HttpClient {

    constructor() {
        super("https://localhost:7094")
    }

    async getAllBasketItems() {
        return await this.get(`api/BasketItems`);
    }

    async getBasketItemById(id) {
        return await this.get(`api/BasketItems/${id}`);
    }

    async updateBasketItemById(id, body) {
        return await this.put(`api/BasketItems/${id}`, body);
    }

    async deleteBasketItemById(id) {
        return await this.delete(`api/BasketItems/${id}`);
    }
}