import { Connection } from 'mongoose';

import { PrefixSchema } from './prefix.schema';
import { PREFIX_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const prefixProviders = [
    {
        provide: PREFIX_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Prefix', PrefixSchema, 'prefix'),
        inject: [DB_PROVIDER],
    },
];