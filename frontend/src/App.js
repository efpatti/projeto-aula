import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/Dashboard";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <Router>
      <ChakraProvider>
        <Routes>
          <Route index element={<DashBoard />} />
        </Routes>
      </ChakraProvider>
    </Router>
  );
}

export default App;
