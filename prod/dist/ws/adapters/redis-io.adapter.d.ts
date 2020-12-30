import { IoAdapter } from '@nestjs/websockets';
export declare class RedisIoAdapter extends IoAdapter {
    createIOServer(port: number, options?: any): any;
}
