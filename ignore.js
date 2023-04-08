useEffect(() => {
  const getData = async () => {
    try {
      const dummyDict = [];
      const promises = [];
      for (let page = 1; page < 42; page++) {
        // loop through pages and get the promise from each page
        const promise = fetch(
          `https://rickandmortyapi.com/api/character/?page=${page}`
        );
        promises.push(promise); // stores in promises array
      }
      const res = await Promise.all(promises);
      const data = await Promise.all(res.map((response) => response.json())); // map through each promise and turn into json

      // array of objects
      // iterate through array , tap into each individual object and getr names

      for (let i = 0; i < data.length; i++) {
        const arr = data[i].results;
        arr.map((obj) => dummyDict.push(obj.name.toLowerCase()));
      }
      setDict(dummyDict);
    } catch (error) {
      console.log(error);
    }
  };
  getData();
}, []);
