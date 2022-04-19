import {post_request, get_request} from './Requests';

const Login_api = async body => {
  const Test = await post_request({target: '/v1/login', body: body});
  return Test;
};

const Social_login = async body => {
  const Test = await post_request({target: '/v1/user/register', body: body});
  return Test;
};

const Signup_api = async body => {
  const Test = await post_request({target: '/auth/signup', body: body});
  return Test;
};
const Email_Verify = async body => {
  const Test = await post_request({target: '/auth/verify_user', body: body});
  return Test;
};
const List_Restaurant = async () => {
  const Test = await post_request({target: '/list_restaurants'});
  return Test;
};
const Search_Restaurant = async () => {
  const Test = await post_request({target: '/search_restaurant'});
  return Test;
};
const Add_Time = async body => {
  const Test = await post_request({target: '/book_restaurant', body: body});
  return Test;
};
const Forget_Password = async body => {
  const Test = await post_request({
    target: '/v2/forgot-password',
    body: body,
  });
  return Test;
};
const Social_Login = async body => {
  const Test = await post_request({target: '/auth/social_login', body: body});
  return Test;
};

const Side_menu = async link => {
  const Test = await get_request({target: '/api/menu/' + link});
  return Test;
};

const All_news = async link => {
  const Test = await get_request({target: 'api/news' + link});
  return Test;
};

const User_profile = async link => {
  const Test = await get_request({target: 'api/profile/' + link});
  return Test;
};

const Del_Account = async link => {
  const Test = await get_request({target: 'api/delete-account' + link});
  return Test;
};
const Update_Details = async body => {
  const Test = await post_request({target: '/auth/social_login', body: body});
  return Test;
};
const Update_Password = async body => {
  const Test = await post_request({
    target: '/v2/me/password-update',
    body: body,
  });
  return Test;
};
const Reset_Password = async body => {
  const Test = await post_request({
    target: 'v1/forgot-password',
    body: body,
  });
  return Test;
};

export {
  Login_api,
  Social_login,
  Signup_api,
  Email_Verify,
  Forget_Password,
  Social_Login,
  Side_menu,
  All_news,
  List_Restaurant,
  User_profile,
  Del_Account,
  Add_Time,
  Search_Restaurant,
  Update_Details,
  Update_Password,
  Reset_Password,
};
