import { Connection } from 'mongoose';

import { JeuSchema } from './jeux.schema';
import { JEU_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const jeuxProviders = [
    {
        provide: JEU_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Jeu', JeuSchema),
        inject: [DB_PROVIDER],
    },
];