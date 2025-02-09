import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./ui/AppLayout";
import Board from "./pages/Board";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="board" element={<Board />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
