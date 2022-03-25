function useRequests() {
  async function get(route, status, items) {
    try {
      const response = await fetch(
        `https://desafio-ilab-back.herokuapp.com/${route}?status=${status}&items=${items}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJEZWxpdmVyeUFwcCJ9.5vm6OAB8VZUWxTE6o3Dwi0Njmyi6kfMIGWpVJjLsZmo`,
          },
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
          Authorization: `Bearer ${withToken}`,
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

  async function put(route, body, id, withToken) {
    try {
      const response = await fetch(
        `https://desafio-ilab-back.herokuapp.com/${route}/${id}`,
        {
          method: 'PUT',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${withToken}`,
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
