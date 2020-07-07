import React from "react";
import CharacterItem from "./characterItem";
import Spinner from "../ui/spinner";

const CharacterGrid = ({ isLoading, items }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item, index) => (
        <CharacterItem key={index} item={item} />
      ))}
    </section>
  );
};

export default CharacterGrid;
