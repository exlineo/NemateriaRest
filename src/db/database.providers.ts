import * as mongoose from 'mongoose';
import { DB_PROVIDER } from '../constants';
import { CONFIG_ADR } from '../config';

export const databaseProviders = [
    {
        provide: DB_PROVIDER,
        useFactory: async () => {
            (mongoose as any).Promise = global.Promise;
            // return await mongoose.connect('mongodb://localhost:27017/nemateria');
            return await mongoose.connect('mongodb://vps550598.ovh.net:2701/nemateria');
        },
    },
];