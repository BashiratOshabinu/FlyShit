import { useContext } from "react";
import { ActivityIndicator, Modal ,View} from "react-native";
import { AppContext } from "../Compnents/globalVariable";

export function Preloader() {
  const { preloader } = useContext(AppContext)
  return (
    <>
      <Modal
        visible={preloader}
        transparent={true}
      >
        <View style={{ justifyContent: "center", flex: 1, alignItems: "center", backgroundColor: "black" }}>
          <ActivityIndicator size="large" color="white" />
        </View>
      </Modal>
    </>
  )
}