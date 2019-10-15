/* immer */
import produce from 'immer';

export default function cart(state = [], action) {
  // console.log(state);
  switch (action.type) {
    case 'ADD_TO_CART':
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
        const productIndex = draft.findIndex(p => p.id === action.product.id);
        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
        // draft.push(action.product);
      });

    default:
      return state;
  }
}
