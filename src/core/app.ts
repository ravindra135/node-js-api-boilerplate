import express from "express"
import helmet from "helmet";

export function createApp() {
    const app = express();

    app.use(helmet({
        crossOriginResourcePolicy: { policy: "cross-origin" }
    }));

    /*app.use(cors({
        origin: "*",
        methods: "GET,POST,PUT,DELETE,OPTIONS",
        allowedHeaders: 'Content-Type,Authorization',
        credentials: true
    }))*/

    app.use(express.json())

    return app;
}