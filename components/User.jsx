import React from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";

function User() {
  const params = useParams();
  const getCharacter = async () => {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${params.rickId}` // pass in name not object
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const { data, status } = useQuery("getChar", getCharacter);
  console.log(data);

  return (
    <div className="w-[100%] h-[100%] flex flex-col items-center justify-center mt-10 bg-black">
      <h1 className="font-bold text-3xl my-10">
        {" "}
        {params.rickId} information...
      </h1>
      {status === "loading" && (
        <>
          <h1 className="font-bold text-3xl">loading</h1>
        </>
      )}
      {status === "success" && (
        <div>
          <h1>Name: {data.results[0].name}</h1>
          <h1>Status: {data.results[0].status}</h1>
          <h1>Species: {data.results[0].species}</h1>
          <h1>Type: {data.results[0].type}</h1>
        </div>
      )}
      <Link to="/" className="border p-2 ">
        BACK
      </Link>
    </div>
  );
}

export default User;
