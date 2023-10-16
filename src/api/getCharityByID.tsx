const API_KEY = import.meta.env.VITE_API_KEY as string;
const API_URL = import.meta.env.VITE_API_URL_ID as string;

const getCharityByID = async (id: string) => {
  const URL = `${API_URL}${id}?apiKey=${API_KEY}`;

  const response = await fetch(URL).then((res) => {
    if (!res.ok) {
      throw new Error(`API returned status code ${res.status}`);
    }

    return res.json();
  });
  //   console.log(response.data);
  return response.data;
};

export default getCharityByID;
