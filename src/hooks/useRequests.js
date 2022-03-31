import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function useRequests() {
  const { token } = useContext(AuthContext) || '';

  const get = async (route, status, items) => {
    try {
      console.log(token);
      const response = await fetch(
        `https://desafio-ilab-back.herokuapp.com/${route}?status=${status}&items=${items}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data);
      };
      return data;
    } catch (error) {
      console.log(error.message); 
    };
  };

  const getOne = async (route, id) => {
    try {
      const response = await fetch(
        `https://desafio-ilab-back.herokuapp.com/${route}/${id}`,
        {
          method: 'GET',
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data);
      };

      return data;
    } catch (error) {
      console.log(error.message);
    };
  };

  const post = async (route, body, withToken) => {
    const config = withToken
      ? {
        Authorization: `Bearer ${token}`,
      }
      : {};
    try {
      const response = await fetch(
        `https://desafio-ilab-back.herokuapp.com/${route}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...config,
          },
          body: JSON.stringify(body),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data);
      };
      return data;
    } catch (error) {
      console.log(error.message);
    };
  };

  const put = async (route, body, id) => {
    try {
      const response = await fetch(
        `https://desafio-ilab-back.herokuapp.com/${route}/${id}`,
        {
          method: 'PUT',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data);
      };

      return data;
    } catch (error) {
      console.log(error.message);
    };
  };

  return {
    get,
    getOne,
    post,
    put,
  };
}

export default useRequests;
