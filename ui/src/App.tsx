import { Provider } from 'react-redux';
import { Layout } from './Layout';
import { LazyLoader } from './LazyLoader';
import { Listing } from './Listing';
import { NoResults } from './NoResults';
import { SearchBox } from './SearchBox';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <SearchBox />
        <Listing />
        <LazyLoader />
        <NoResults />
      </Layout>
    </Provider>
  );
}

export default App;
