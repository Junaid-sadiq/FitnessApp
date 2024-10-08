import React, {useState} from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import MaskedView from "@react-native-masked-view/masked-view";
import {
  Svg,
  Path,
  Defs,
  Stop,
  LinearGradient as SlinearGradient,
} from "react-native-svg";

const Weightsliderscrollbg = () => {
    return (
      <Image
        source={require("./../assets/sliderg.png")}
        style={styles.weightsliderscrollbg}
      />
    );
  }

const Weight = ({ navigation }) => {
  const [weightSliderValue, setWeightSliderValue] = useState(0);
  const weightSliderItems = Array.from(Array(250).keys());

  const weightSliderOnScroll = (event) => {
    setWeightSliderValue(Math.round(event.nativeEvent.contentOffset.x / 32));
  };

  const renderWeightSlider = () => (
      <View style={styles.weightsliderbox}>
        <View style={styles.weightsliderheader}>
          <Text style={styles.weightsliderh1}>
            {weightSliderValue < 5
              ? "-"
              : weightSliderValue - 5}
          </Text>
          <Text style={styles.weightsliderh2}>
            {weightSliderValue}
          </Text>
          <Text style={styles.weightsliderh3}>
            {weightSliderValue <
            weightSliderItems.length
              ? weightSliderValue + 5
              : "-"}
          </Text>
        </View>
        <View style={styles.weightslider}>
          <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            colors={[
              "rgba(20, 18, 39, 0.5)",
              "rgba(60, 63, 105, 0.5)",
              "rgba(138, 140, 178, 0.7)",
              "rgba(60, 63, 105, 0.5)",
              "rgba(20, 18, 38, 0.5)",
            ]}
            locations={[0, 0.15587, 0.500517, 0.851209, 1]}
            style={styles.weightsliderbg}
          />
          <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            colors={["#141227", "rgba(20,18,39,0)"]}
            style={styles.weightsliderbgcoverright}
          />
          <LinearGradient
            start={{ x: 2, y: 1 }}
            end={{ x: 1, y: 1 }}
            colors={["#141227", "rgba(20,18,39,0)"]}
            style={styles.weightsliderbgcoverleft}
          />
          <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            colors={[
              "rgba(20, 18, 39, 0.5)",
              "rgba(60, 63, 105, 0.5)",
              "rgba(138, 140, 178, 1)",
              "rgba(60, 63, 105, 0.5)",
              "rgba(20, 18, 38, 0.5)",
            ]}
            locations={[0, 0.15587, 0.500517, 0.851209, 1]}
            style={styles.weightsliderbgbordertop}
          />
          <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            colors={[
              "rgba(20, 18, 39, 0.5)",
              "rgba(60, 63, 105, 0.5)",
              "rgba(138, 140, 178, 1)",
              "rgba(60, 63, 105, 0.5)",
              "rgba(20, 18, 38, 0.5)",
            ]}
            locations={[0, 0.15587, 0.500517, 0.851209, 1]}
            style={styles.weightsliderbgborderbottom}
          />
          <FlatList
            style={{ zIndex: 1 }}
            contentContainerStyle={styles.weightsliderscrollcontainer}
            data={weightSliderItems}
            horizontal={true}
            decelerationRate={"fast"}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            onScroll={(event) => {
              weightSliderOnScroll(event);
            }}
            initialNumToRender={12}
            renderItem={({ index }) => <Weightsliderscrollbg key={index} />}
          />
        </View>
      </View>
    );

    return (
      <ImageBackground
        source={require("./../assets/bg3.png")}
        style={styles.bg}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.container2}>
            <ScrollView
              contentContainerStyle={styles.scrollViewcontentcontainer}
            >
              {/*title start*/}
              <MaskedView
                style={styles.masklabel}
                maskElement={
                  <View style={styles.masklabelview}>
                    <Text style={styles.masklabeltextl}>Your</Text>
                    <Text style={styles.masklabeltext}>Weight</Text>
                  </View>
                }
              >
                <Image
                  source={require("./../assets/pagetitlemask2.png")}
                  style={styles.masklabelimg}
                />
              </MaskedView>
              {/*title end*/}
              {/*weightbox start*/}
              <View style={styles.weightbox}>
                {/*weightbox bg start*/}
                <Svg
                  width="212"
                  height="212"
                  viewBox="0 0 212 212"
                  fill="none"
                  style={styles.weightboxsvg}
                >
                  <Path
                    d="M3 106C3 49.1147 49.1147 3 106 3C162.885 3 209 49.1147 209 106C209 162.885 162.885 209 106 209C49.1147 209 3 162.885 3 106Z"
                    stroke="url(#paint0_linear)"
                    strokeWidth="6"
                  />
                  <Defs>
                    <SlinearGradient
                      id="paint0_linear"
                      x1="10.3415"
                      y1="-21.931"
                      x2="182.263"
                      y2="269.287"
                      gradientUnits="userSpaceOnUse"
                    >
                      <Stop stopColor="#5652E5" />
                      <Stop
                        offset="0.348069"
                        stopColor="#8A8CB3"
                        stopOpacity="0"
                      />
                      <Stop
                        offset="0.596479"
                        stopColor="#8A8CB3"
                        stopOpacity="0"
                      />
                      <Stop offset="1" stopColor="#7DA9F4" stopOpacity="0.5" />
                    </SlinearGradient>
                  </Defs>
                </Svg>
                {/*weightbox bg end*/}
                {/*weightbox label start*/}
                <View style={styles.weightboxlabel}>
                  <Text style={styles.weightboxtext}>
                    {weightSliderValue}
                  </Text>
                  <Text style={styles.weightboxunit}>kg</Text>
                </View>
                {/*weightbox label end*/}
              </View>
              {/*weight slider box start*/}
              {renderWeightSlider()}
              {/*weight slider box end*/}
              {/*weight actions start*/}
              <View style={styles.actions}>
                {/*weight actions save*/}
                <TouchableOpacity
                  style={[styles.btn, styles.btnsave]}
                  onPress={() => {
                    console.log("save");
                    navigation.navigate("Unboardingnav", { screen: "Height" }); // move to height page
                  }}
                >
                  <LinearGradient
                    start={{ x: 0.88, y: 1.21 }}
                    end={{ x: 0.56, y: 0.5 }}
                    colors={["rgba(255,255,255,0.13)", "rgba(255,255,255,0)"]}
                    style={[styles.btnborder, styles.btnsave]}
                  >
                    <LinearGradient
                      start={{ x: 0.24, y: -0.09 }}
                      end={{ x: 0.5, y: 1 }}
                      colors={["#7773FA", "#5652E5"]}
                      style={[styles.btnbg, styles.btnsave]}
                    >
                      <Text style={styles.btnsavetext}>Save</Text>
                    </LinearGradient>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
              {/*weight actions skip*/}
              <TouchableOpacity
                style={styles.skipbtn}
                onPress={() => {
                  console.log("skip");
                }}
              >
                <Text style={styles.skipbtntext}>Skip</Text>
              </TouchableOpacity>
              {/*weight actions end*/}
            </ScrollView>
          </View>
          <StatusBar style="light" />
        </SafeAreaView>
      </ImageBackground>
    );
  }

export default Weight;  


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
  },
  scrollViewcontentcontainer: {
    paddingTop: 108,
  },
  bg: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1A1735",
  },
  masklabel: {
    height: 49,
    marginBottom: 10,
  },
  masklabelview: {
    backgroundColor: "transparent",
    height: 49,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  masklabeltext: {
    fontSize: 40,
    color: "white",
    fontFamily: "Gilroy-ExtraBold",
  },
  masklabeltextl: {
    fontSize: 40,
    color: "white",
    fontFamily: "Gilroy-Light",
    marginRight: 11,
  },
  masklabelimg: {
    resizeMode: "cover",
    width: "100%",
    height: 200,
    marginTop: -60,
  },
  btn: {
    width: 64,
    height: 64,
    borderRadius: 18,
    marginHorizontal: 11,
  },
  btnborder: {
    padding: 1,
    width: 64,
    height: 64,
    borderRadius: 18,
  },
  btnbg: {
    width: 64,
    height: 64,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  btnimg: {
    width: 40,
    height: 40,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "center",
  },
  skipbtn: {
    marginTop: 30,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  skipbtntext: {
    fontFamily: "Gilroy-Bold",
    fontSize: 16,
    color: "#8A8CB2",
  },
  btnsave: {
    width: 300,
  },
  btnsavetext: {
    fontFamily: "Gilroy-Bold",
    fontSize: 18,
    color: "#ffffff",
  },
  weightbox: {
    alignItems: "center",
    width: 212,
    height: 212,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 52,
  },
  weightboxsvg: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  weightboxlabel: {
    flexDirection: "row",
  },
  weightboxtext: {
    fontSize: 50,
    fontFamily: "Gilroy-Bold",
    color: "#ffffff",
  },
  weightboxunit: {
    fontSize: 22,
    fontFamily: "Gilroy-Bold",
    color: "#ffffff",
    alignSelf: "flex-end",
    marginBottom: 8,
  },
  weightsliderbox: {
    marginTop: 30,
    marginBottom: 60,
  },
  weightslider: {
    width: "100%",
    height: 75,
  },
  weightsliderbg: {
    position: "absolute",
    width: "100%",
    height: 75,
    top: 0,
    right: 0,
    zIndex: 1,
  },
  weightsliderbgcoverright: {
    position: "absolute",
    width: 65,
    height: 75,
    right: 0,
    top: 0,
    zIndex: 3,
  },
  weightsliderbgcoverleft: {
    position: "absolute",
    width: 65,
    height: 75,
    left: 0,
    top: 0,
    zIndex: 3,
  },
  weightsliderbgbordertop: {
    position: "absolute",
    width: "100%",
    height: 1,
    top: 0,
    zIndex: 2,
  },
  weightsliderbgborderbottom: {
    position: "absolute",
    width: "100%",
    height: 1,
    bottom: 0,
    zIndex: 2,
  },
  weightsliderheader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
  },
  weightsliderh1: {
    fontSize: 15,
    fontFamily: "Gilroy-Bold",
    color: "rgba(138,140,178,0.5)",
  },
  weightsliderh2: {
    fontSize: 20,
    fontFamily: "Gilroy-Bold",
    color: "rgba(138,140,178,0.5)",
    flexBasis: "75%",
    textAlign: "center",
  },
  weightsliderh3: {
    fontSize: 15,
    fontFamily: "Gilroy-Bold",
    color: "rgba(138,140,178,0.5)",
  },
  weightsliderscrollcontainer: {
    paddingVertical: 20,
  },
  weightsliderscrollbg: {
    width: 34,
    height: 37,
    resizeMode: "contain",
  },
});
