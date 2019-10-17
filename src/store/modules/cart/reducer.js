/* immer */
import produce from 'immer';

export default function cart(state = [], action) {
  // console.log(state);
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      // return [...state, action.product];
      /* SEM O IMMER:
      return [
        ...state,
        {
          ...action.product,
          amount: 1,
        },
      ]; */
      /* COM O IMMER:
      return produce(state, draft =>{})
      */
      return produce(state, draft => {
        // todas as alterações feitas aqui refletirão no estado
        /* antes do Saga consultar o estoque:
        const productIndex = draft.findIndex(p => p.id === action.product.id);
        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
        } */
        // draft.push(action.product);

        // com o Saga:
        const { product } = action;
        draft.push(product);
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });

    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      /* essa verificacao passou a ser feita pelo SAGA
      if (action.amount <= 0) {
        return state;
      } */

      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
