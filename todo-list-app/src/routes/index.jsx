import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import Home from "../pages";
import DetailPage from "../pages/detailPage";

import { ThemeContext } from "../utils/context";
import { reduxAction } from "../utils/redux/actions/action";
import "react-datepicker/dist/react-datepicker.css";

axios.defaults.baseURL = "https://api.todoist.com/rest/v1/";
axios.defaults.headers.common["Authorization"] = `Bearer ${
  import.meta.env.VITE_API_KEY
}`;

export default function AppRouter() {
  const dispatch = useDispatch();

  const [theme, setTheme] = useState("light");
  const themeMode = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={themeMode}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          {/* <Route path="*" element={} /> */}
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
}
