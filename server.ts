import { Application, Router } from 'https://deno.land/x/oak@v9.0.1/mod.ts';

import Homepage from './templates/homepage.tsx';
import Single from './templates/single.tsx';
import renderPage from './utils/renderPage.ts';

const app = new Application();
const router = new Router();

router.get('/', (context) => renderPage(Homepage, context)); 
router.get('/starships/:name', (context) => renderPage(Single, context)); 

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });

console.log('Server listening on http://localhost:8000');