import React, {View, Text, Image, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
		width: 240,
		height: 336,
		backgroundColor: "F0F0F0",
		borderWidth:  2,
		borderColor:  'DAA520'
  },
  factionIconContainer: {
    flex: -1,
    flexDirection: "row",
	marginBottom:  40,
	marginLeft:  5,
  },
  cardNameContainer:  {
	flex:  1,  
	marginBottom:  40,
	marginLeft:  50,
	flexDirection:  "row"
  },
  descContainer: {
	flex:  2,  
    flexDirection: "row",
    alignItems: "center"
  },
  cardText: {
	flex:  2,   
	flexDirection: "row",
	flexWrap:  "wrap",
  },
  cardEffect: {
	flex:  2,   
    marginLeft: 5,
    marginRight: 5,
  },
   hpLoc: {
	flex:  3,   
	flexDirection:  "row",
	alignItems: "center",
    marginRight: 5
  },
  atkLoc: {
	flex:  3,   
	flexDirection:  "row",
	alignItems: "center",
	flexWrap:  "wrap",
    marginRight: 5
  },
  defLoc: {
	flex:  3,   
	flexDirection:  "row",
	alignItems: "center",
    marginRight: 5
  },
  pictureContainer: {
    flexDirection: "column",
    alignSelf: "center",
  },
  valueContainer: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 5,
    marginRight: 5,
    alignItems: "flex-end",
    justifyContent: "space-between"
  },
  icon: {
	fontSize:  28,
	fontWeight:  "bold",
	color:  "FF0000",
  },
  name: {
    fontSize: 20
  },
  picture: {
    height: 150,
    width: 240,
	borderWidth:  2,
	borderColor:  'DAA520'
  },
  hp: {
    color: "55967e"
  },
  atk: {
    color: "AF4034"
  },
  def: {
    color: "6a60a9"
  },
  vpoint:  {
	  color: "FF6600"
  },
  sellback: {
	  color: "FF00FF"
  },
  info: {
    fontStyle: "italic"
  }
});

class card extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.descContainer}>
          <View style={styles.factionIconContainer}>
			<Text style={styles.icon}>S</Text>
		  </View>
		  <View style={styles.cardNameContainer}>
            <Text style={styles.name}>Sworker</Text>
          </View>
		  <View style={styles.cardText}>  //*************FIX VIEWSTYLE HERE************
			<Text style={styles.info}>Standard Swarm resource generator</Text>
		  </View>
			<View style={styles.hpLoc}>
				<Text style={styles.hp}>9/9</Text>
			</View>
			<View style={styles.atkLoc}>
				<Text style={styles.atk}>0</Text>
			</View>
			<View style={styles.defLoc}>
				<Text style={styles.def}>0</Text>
			</View>
        </View>
        <View style={styles.pictureContainer}>
          <Image
            style={styles.picture}
            source={{uri: "http://vignette4.wikia.nocookie.net/carbotanimations/images/3/36/Drone.jpg/revision/latest?cb=20151120211652"}}
          />
        </View>
        <View style={styles.cardEffect}>
			<Text>Generate 2 resource per turn</Text>
		</View>
        <View style={styles.valueContainer}>
          <Text style={styles.vpoint}>3</Text>
          <Text style={styles.sellback}>3</Text>
        </View>
      </View>
    );
  }
}

module.exports = card;
