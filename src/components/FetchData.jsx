const FetchData = async () => {
  const options = {
    method: "GET",
    url: "https://all-books-api.p.rapidapi.com/getBooks",
    headers: {
      "X-RapidAPI-Key": "2c38b35cbemshfad598e450dd123p138218jsna9ba721ab279",
      "X-RapidAPI-Host": "all-books-api.p.rapidapi.com",
    },
  };

  try {
    const res = await fetch(options.url, {
      method: options.method,
      headers: options.headers,
    });
    console.log(res);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export default FetchData;
