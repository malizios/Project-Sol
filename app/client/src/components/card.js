import React, {View, Text, Image, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 240,
    height: 336,
    backgroundColor: "E0E3DA"
  },
  descContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  iconNameContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  statsContainer: {
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
  desc: {
    marginLeft: 5,
    marginRight: 5,
  },
  icon: {
    marginLeft: 5,
    marginRight: 5,
    height: 24,
    width: 24
  },
  name: {
    fontSize: 24
  },
  picture: {
    height: 175,
    width: 175
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
  info: {
    fontStyle: "italic"
  }
});

class card extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.descContainer}>
          <View style={styles.iconNameContainer}>
            <Image
              style={styles.icon}
              source={{uri: "https://upload.wikimedia.org/wikipedia/commons/3/35/UncialB-01.png"}}
            />
            <Text style={styles.name}>Raging Troll</Text>
          </View>
          <View style={styles.statsContainer}>
            <Text style={styles.hp}>6/6</Text>
            <Text style={styles.atk}>4</Text>
            <Text style={styles.def}>1</Text>
          </View>
        </View>
        <View style={styles.pictureContainer}>
          <Image
            style={styles.picture}
            source={{uri: "http://archive.wizards.com/magic/images/mtgcom/arcana1000/1278_BruteForce.jpg"}}
          />
        </View>
        <View style={styles.desc}>
          <Text>Focus Rage – Wait one turn to temporarily get +2 ATK</Text>
          <Text style={styles.info}>The trolls of Brine have long been a bane of friend and foe.</Text>
        </View>
        <View style={styles.valueContainer}>
          <Text>4</Text>
          <Text>7</Text>
        </View>
      </View>
    );
  }
}

module.exports = card;
