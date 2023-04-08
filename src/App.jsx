import { useEffect, useState } from "react";

function App() {
  const [searchVal, setSearchVal] = useState("");
  const [chars, setChars] = useState([]);

  const charsSet = new Set(chars); // to set
  const charsArr = [...charsSet]; // to arr
  console.log(charsArr.length);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${searchVal}` // fetch by name
        );
        const data = await res.json();
        setChars(data.results.map((char) => char.name)); //mapping through data and extracting name
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [searchVal]); // call everytime input value changes

  return (
    <div className="flex items-center justify-center flex-col m-y-10">
      <h1 className="text-3xl font-bold my-10">
        Search Bar for Rick and Morty API
      </h1>
      <input
        className="w-[400px] h-[70px] border pl-10"
        placeholder="type something"
        value={searchVal}
        onChange={(e) => {
          setSearchVal(e.target.value);
        }}
      />
      {searchVal !== "" && (
        <div className="flex flex-col space-y-4 mt-10 border w-1/2 items-center justify-center pt-4">
          {charsArr.map((char) => (
            // instead of displaying an h1, we can render a link and route them somerwhere
            <h1
              className="border-b w-full flex items-center justify-center"
              key={char}
            >
              {char}
            </h1>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
