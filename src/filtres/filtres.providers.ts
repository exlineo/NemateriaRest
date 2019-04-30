import { Connection } from 'mongoose';

import { FiltresSchema } from './filtres.schema';
import { FILTRES_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const filtresProviders = [
    {
        provide: FILTRES_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Filtre', FiltresSchema),
        inject: [DB_PROVIDER],
    },
];