import { Connection } from 'mongoose';

import { MapSchema } from './maps.schema';
import { MAPS_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const mapsProviders = [
    {
        provide: MAPS_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Mappage', MapSchema),
        inject: [DB_PROVIDER],
    },
];