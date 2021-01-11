import Cookies from 'universal-cookie';
const cookies = new Cookies();
const headers = () => {
  // const Authorization = cookies.get('id_token');
  const Authorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmU3MDhlZmQ2OGM2ZmM1NGNhMTMwMTQiLCJpYXQiOjE2MDg5NzY2MjN9.g-qvaQ3OykKYmLE6qpjswZYznTEaunotiIWqYOvcwpc";
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
