import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, FlatList, Text, Image } from "react-native";

const List = () => {
  const [countries, setCountries] = useState([]);

  const URL = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    axios(URL).then((reponse) => {
      let data = reponse.data;
      setCountries(data);
      console.log(countries);
    });
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text> {item} </Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={countries}
        renderItem={({ item }) => (
          <View>
            <Text>
              {item.name.common}, {item.capital};
            </Text>
            <Image
              source={{ uri: item.flags.svg }}
              style={{ width: 250, height: 200 }}
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default List;

// data={countries.map((result) => {
//   return (
//     // result.name.common +
//     // "   " +
//     // result.capital +
//     // "  " +
//     (
//       // "   " +
//       // (
//       //   result.flags.svg

//       <Image
//         style={{ height: 10, width: 10 }}
//         source={require(result.flags.svg)}
//       />
//     )
//     // )
//   );
// })}
