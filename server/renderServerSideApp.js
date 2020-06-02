import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import Helmet from 'react-helmet';
import Loadable from 'react-loadable';
import {getBundles} from 'react-loadable/webpack';

import App from '../src/App';
import {fetchDataForRender} from './fetchDataForRender';
import {indexHtml} from './indexHtml';
import stats from '../build/react-loadable.json';
import {ServerDataProvider} from '../src/state/serverDataContext';
import configureStore from '../src/redux/configureStore';

const store = configureStore();

type Props = {
  context: Object,
  data: Object,
  location: Object,
};

const ServerApp = ({context, data, location}: Props) => {
  return (
    <ServerDataProvider value={data}>
      <StaticRouter location={location} context={context}>
        <App />
      </StaticRouter>
    </ServerDataProvider>
  );
};

export const renderServerSideApp = (req, res) => {
  Loadable.preloadAll()
    .then(() => fetchDataForRender(ServerApp, req))
    .then(data => renderApp(ServerApp, data, req, res));
};

function renderApp(ServerApp, data, req, res) {
  const context = {};
  const modules = [];

  const reduxState = store.getState();

  const markup = ReactDOMServer.renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <ServerApp location={req.url} data={data} context={context} />
    </Loadable.Capture>,
  );

  console.log('what is the context', context);
  if (context.url) {
    res.redirect(context.url);
  } else {
    const fullMarkup = indexHtml({
      helmet: Helmet.renderStatic(),
      serverData: data,
      reduxState: reduxState,
      bundles: getBundles(stats, modules),
      markup,
    });
    res.status(200).send(fullMarkup);
  }
}
