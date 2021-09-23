import { RouterContext } from 'https://deno.land/x/oak@v9.0.1/mod.ts';
import { createElement } from 'https://esm.sh/react';
import { renderToString } from 'https://esm.sh/react-dom/server';

import { Page } from '../types.ts';

const renderPage = async (
  page: Page,
  context: RouterContext
): Promise<void> => {

  let asyncParams: any = {};
  if (page.getInitialProps !== undefined) {
    asyncParams = await page.getInitialProps(context.params);
  }

  context.response.status = 200;
  context.response.type = 'text/html';
  context.response.body = renderToString(createElement(page, {
    ...context.params,
    ...asyncParams,
  }));
};

export default renderPage;