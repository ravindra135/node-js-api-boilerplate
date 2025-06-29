import { createApp } from '@core/app';
import dotenv from 'dotenv';

dotenv.config()

const app: any = createApp();
const port: number = process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 5000
const host: string = process.env.APP_HOST ?? '127.0.0.1';
const _env: string = process.env.APP_ENV ?? 'local';

if(_env === 'local') {
    app.listen(port, host, () => {
        console.log(`Server running on port ${host}:${port}`)
    });
} else {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`)
    });
}
