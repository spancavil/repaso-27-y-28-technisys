import {Provider} from 'react-redux';
import { MainNavigator } from './navigation/MainNavigator';
import store from './store';
import { getCategories } from './store/actions/categories.actions';
import { getProducts } from './store/actions/products.actions';

export default function App() {

  store.dispatch(getCategories);
  store.dispatch(getProducts);

  return (
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
  );
}

