export const ModalReducer = (state:any, action:any) => {
  switch (action.type) {
    case 0:
      return [true, false, false];
    case 1:
      return [false, true, false];
    case 2:
      return [false, false, false];
    default:
      return state || [false, false, false];
  }
};





