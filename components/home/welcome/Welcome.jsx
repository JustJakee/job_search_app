import { useState } from "react";
import { useRouter } from "expo-router";
import { icons, SIZES, COLORS } from "../../../constants";
import styles from "./welcome.style";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");

  return (
    <View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            placeholder='What are you looking for?'
            placeholderTextColor={COLORS.darkBlue}
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;