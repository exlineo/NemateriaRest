import { Connection } from 'mongoose';

import { CollectionSchema } from './collections.schema';
import { COLLECTIONS_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const collectionsProviders = [
    {
        provide: COLLECTIONS_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Collection', CollectionSchema),
        inject: [DB_PROVIDER],
    },
];