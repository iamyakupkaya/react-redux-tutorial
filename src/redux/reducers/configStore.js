import {createStore} from 'redux';
import reducers from './index';

const configStore = () => {
    return createStore (reducers);
}

export default configStore;