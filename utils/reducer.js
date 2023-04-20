export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      }
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        gistData: action.payload,
      }

    default:
      return {
        ...state,
      }
  }
  throw new Error('No matching type')
}
