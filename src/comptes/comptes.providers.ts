import { Connection } from 'mongoose';

import { CompteSchema } from './comptes.schema';
import { COMPTES_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const comptesProviders = [
    {
        provide: COMPTES_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Compte', CompteSchema),
        inject: [DB_PROVIDER]
    },
];