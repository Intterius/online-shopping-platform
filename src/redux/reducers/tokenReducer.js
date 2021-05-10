const tokenReducer = (state = false, action) => {
  switch (action.type) {
    case 'VALID':
      return { status: true, user: action.payload };
    case 'INVALID':
      return { status: false, user: '' };
    default:
      return state;
  }
};

export { tokenReducer };
