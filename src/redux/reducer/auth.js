const initialState = {
  isLoading: null,
  items: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'AUTH:LOGIN':
      return {
        ...state,
        items: payload
      }
    case 'AUTH:IS_LOADING':
      return {
        ...state,
        isLoading: payload
      }
    case 'AUTH:LOGOUT':
      return {
        ...state,
        items:[]
      }
  
    default:
      return state;
  }
}
