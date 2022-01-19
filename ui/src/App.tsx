import { Provider } from 'react-redux';
import { Layout } from './Layout';
import { LazyLoader } from './LazyLoader';
import { Listing } from './Listing';
import { SearchBox } from './SearchBox';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <SearchBox />
        <Listing />
        <LazyLoader />
      </Layout>
    </Provider>
  );
}

export default App;
