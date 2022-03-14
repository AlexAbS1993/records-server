import { Application } from './lib/app';
import 'dotenv/config'
import sequilizeORM from './database';

async function start() {
    let app = new Application()
    let seqORM = await sequilizeORM
    await app.defineDataBase(seqORM)
    await app.db!.connect('test')
}

start()