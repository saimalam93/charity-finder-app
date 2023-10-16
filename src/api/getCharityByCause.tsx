const API_KEY = import.meta.env.VITE_API_KEY as string;
const API_URL = import.meta.env.VITE_API_URL_CAUSE as string;

const getCharityByCause = async (cause?: String) => {
  let URL = `${API_URL}animals?apiKey=${API_KEY}`;
  if (cause) {
    URL = `${API_URL}${cause}?apiKey=${API_KEY}`;
  }

  const response = await fetch(URL).then((res) => {
    if (!res.ok) {
      throw new Error(`API returned status code ${res.status}`);
    }

    return res.json();
  });
  return response.nonprofits;
};

export default getCharityByCause;
