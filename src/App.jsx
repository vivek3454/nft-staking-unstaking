import { ThirdwebProvider } from "@thirdweb-dev/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <ThirdwebProvider activeChain="mumbai" clientId={import.meta.env.VITE_REACT_APP_TEMPLATE_CLIENT_ID}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThirdwebProvider>
  );
};

export default App;