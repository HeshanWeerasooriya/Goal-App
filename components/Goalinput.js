import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

function Goalinput(props) {
  const [enterdGoalText, setEnterdGoalText] = useState("");

  function goalInputHandler(enterdText) {
    setEnterdGoalText(enterdText);
  }

  function addGoalHandler() {
    props.onAddGoal(enterdGoalText);
    setEnterdGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Course Goals!"
        onChangeText={goalInputHandler}
        value={enterdGoalText}
      />
      <Button title="Add Goals" onPress={addGoalHandler} />
    </View>
  );
}

export default Goalinput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
