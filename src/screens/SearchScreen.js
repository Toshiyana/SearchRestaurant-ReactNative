import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    console.log("DEBUG: SearchApi was called.");

    try {
      const response = await yelp.get("./search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      // console.log(err);
      setErrorMessage("Something went wrong");
    }
  };

  // only call searchApi when rendering for the first time
  useEffect(() => {
    searchApi("pasta");
  }, []);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm} // same as {(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)} // same as {() => searchApi()}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
