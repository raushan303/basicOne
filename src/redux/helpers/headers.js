import Cookies from 'universal-cookie';
const cookies = new Cookies();
const headers = () => {
  const Authorization = cookies.get('token_id');
  return Authorization
    ? {
        headers: {
          Authorization,
        },
      }
    : {
        headers: {},
      };
};
export default headers;
