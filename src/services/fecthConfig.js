const fetchConfig = async (url, options) => {
  let data = null;
  try {
    const response = await fetch(url, options);
    data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export default fetchConfig;
