import { Connection } from 'mongoose';

import { NoticeSchema } from './notices.schema';
import { NOTICES_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const noticesProviders = [
    {
        provide: NOTICES_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Notice', NoticeSchema),
        inject: [DB_PROVIDER],
    },
];