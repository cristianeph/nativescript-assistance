export class FirebaseData {
    client: number;
    assistance: number;
    state: string;

    constructor(client: number, assistance: number, state: string) {
        this.client = client;
        this.assistance = assistance;
        this.state = state;
    }
}