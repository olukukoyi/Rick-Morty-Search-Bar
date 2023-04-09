import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { Link } from "react-router-dom";

function App() {
  const [searchVal, setSearchVal] = useState("");
  const [chars, setChars] = useState([]);

  const charsSet = new Set(chars); // to set
  const charsArr = [...charsSet]; // to arr

  const getData = async () => {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${searchVal}` // fetch by name
      );
      const data = await res.json();
      setChars(data.results.map((char) => char.name)); //mapping through data and extracting name
      // data.results is the array of object that var the passed in char in the name
    } catch (error) {
      console.log(error);
    }
  };

  const q = useQuery(["characters", searchVal], getData); // everytime searchVal changes, we call getData

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
            <Link
              to={`characters/${char}`}
              className="border-b w-full flex items-center justify-center"
            >
              {char}
            </Link>
          ))}
          {/* <h1
              className="border-b w-full flex items-center justify-center"
              key={char}
            >
              {char}
            </h1> */}
        </div>
      )}
    </div>
  );
}

export default App;
