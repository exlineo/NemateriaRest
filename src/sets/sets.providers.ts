import { Connection } from 'mongoose';

import { SetSchema } from './sets.schema';
import { SETS_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const setsProviders = [
    {
        provide: SETS_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Set', SetSchema),
        inject: [DB_PROVIDER],
    },
];