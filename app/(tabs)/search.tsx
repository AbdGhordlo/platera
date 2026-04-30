import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
  return (
    <SafeAreaView>
      <Text>Search</Text>

      {/* <Button
        title="Seed"
        onPress={() =>
          seed().catch((e) => console.log("Failed to seed the database.", e))
        }
      /> */}
    </SafeAreaView>
  );
};

export default Search;
