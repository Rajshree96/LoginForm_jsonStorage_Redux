const initialData = {
  login_postList: {},
  login_getList: [],
  login_newList: [],
  adduserList: {},
  getUserList: [],
  getbyidData: {},
  updateData: {},
  removeuserList: [],
};

// eslint-disable-next-line default-param-last
const loginReducer = (state = initialData, action) => {
  console.log('login reducer action', action);
  // console.log('login reducer userlogin getdata', action.usersData);
  switch (action?.type) {
    case 'User_login_Postdata':
      return {
        ...state,
        login_postList: action.payload,
      };
    case 'load':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'User_login_Getdata':
      return {
        ...state,
        login_getList: action.usersData,
        isLoading: false,
      };
    case 'User_Remove_Data':
      return {
        ...state,
        login_newList: action.payload,
      };
    case 'Add_User':
      return {
        ...state,
        adduserList: action.payload,
      };
    case 'Get_user_data':
      return {
        ...state,
        getUserList: action.usersData,
      };
    case 'Added_User_Data_Remove':
      return {
        ...state,
        removeuserList: action.payload,
      };
    case 'Get_By_ID':
      return {
        ...state,
        getbyidData: action?.payload,
      };
    case 'Update_By_ID':
      return {
        ...state,
        updateData: action?.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
