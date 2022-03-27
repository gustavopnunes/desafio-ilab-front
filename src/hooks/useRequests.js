import { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";

function useRequests() {

  const { token } = useContext(AuthContext) || "";

  async function get(route) {
    try {
      const response = await fetch(
        `https://desafio-ilab-back.herokuapp.com/${route}`,
        {
          method: 'GET',
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data);
      }
      return data;
    } catch (error) {
      console.log(error.message); //enquanto ainda nao temos tratamento de erro
    }
  }

  async function getOne(route, id) {
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
      }

      return data;
    } catch (error) {
      console.log(error.message);
    }
  }

  async function post(route, body, withToken) {
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
      }
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }

  async function put(route, body, id) {
    try {
      const response = await fetch(
        `https://thawing-brushlands-07564.herokuapp.com/https://desafio-ilab-back.herokuapp.com/${route}/${id}`,
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
      }

      return data;
    } catch (error) {
      console.log(error.message);
    }
  }

  return {
    get,
    getOne,
    post,
    put,
  };
}

export default useRequests;
