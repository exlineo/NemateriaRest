import { Connection } from 'mongoose';
export declare const setsProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<import("mongoose").Document<any>>;
    inject: string[];
}[];
