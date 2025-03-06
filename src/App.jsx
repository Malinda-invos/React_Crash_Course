import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import JobPage from "./pages/JobPage";
import NotFound from "./pages/NotFound";
import JobPageMore, { jobLoader } from "./pages/JobPageMore";
import AddJobPage from "./pages/AddJobPage";

const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" index element={<JobPage />} />
        <Route
          path="/add-job"
          index
          element={<AddJobPage addJobSubmit={addJob} />}
        />
        <Route
          path="/jobs/:id"
          index
          element={<JobPageMore />}
          loader={jobLoader}
        />
        <Route path="*" index element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
