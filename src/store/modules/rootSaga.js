/* Esse arquivo junta todos os Sagas */

import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

export default function* rootSaga() {
  return yield all([
    cart,
    // Novos sagas devem ser inseridos aqui,
  ]);
}
