import { Type } from './action.type';

export const InitialState = {
  basket: []
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_CART: {
      const existingItem = state.basket.find(item => item.id === action.item.id);

      if (existingItem) {
        return {
          ...state,
          basket: state.basket.map(item =>
            item.id === action.item.id
              ? { ...item, amount: item.amount + 1 }
              : item
          )
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }]
        };
      }
    }

    case Type.REMOVE_FROM_CART:
      return {
        ...state,
        basket: state.basket.filter(item => item.id !== action.item.id)
      };

    case Type.INCREMENT_ITEM:
      return {
        ...state,
        basket: state.basket.map(item =>
          item.id === action.item.id ? { ...item, amount: item.amount + 1 } : item
        )
      };

    case Type.DECREMENT_ITEM:
        return {
          ...state,
          basket: state.basket.map(item =>
            item.id === action.item.id
              ? { ...item, amount: item.amount > 1 ? item.amount - 1 : 1 }
              : item
          )
        };

    default:
      return state;
  }
};
