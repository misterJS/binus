import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authAdmin from './admin/reducers/auth.reducer';
import authClient from './client/reducers/auth.reducer';
import chatClient from './client/reducers/chat.reducer';
import gardenClient from './client/reducers/garden.reducer';
import transactionClient from './client/reducers/transaction.reducer';

const clientReducer = combineReducers({
    auth: authClient,
    chat: chatClient,
    garden: gardenClient,
    transaction: transactionClient,
});

const adminReducer = combineReducers({
    auth: authAdmin,
});

const rootReducer = combineReducers({
    client: clientReducer,
    admin: adminReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({
            serializableCheck: false
        })
    }
})

export { store };

