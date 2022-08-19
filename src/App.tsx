import { memo, useState } from "react";
import Body from "./components/body";
import Header from "./components/header";
import GlobalStyles from "./globalStyles";



function App() {
  const [countdown, setCountdown] = useState(0);

  return (
    <>
      <GlobalStyles />
      <Header countdown={countdown}  />
      <Body countdown={countdown} setCountdown={setCountdown} />
    </>
  );
}

export default memo(App);
