import fetchConfig from "./fecthConfig";

const fetchLogin = async (url, payload) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    body: JSON.stringify(payload),
  };
  return fetchConfig(url, options);
};

const fetchAPIServices = {
  fetchLogin: fetchLogin 
};

export default fetchAPIServices;
