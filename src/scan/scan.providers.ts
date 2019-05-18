import { Connection } from 'mongoose';

import { ScanSchema } from './scan.schema';
import { SCAN_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const scanProviders = [
    {
        provide: SCAN_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Scan', ScanSchema),
        inject: [DB_PROVIDER],
    },
];