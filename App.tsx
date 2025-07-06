import {HomeScreen} from "./src/HomeScreen";
import {AudioProvider} from "./src/context/AudioContext";

export default function App() {
  return (
      <AudioProvider>
        <HomeScreen />
      </AudioProvider>
  );

}
