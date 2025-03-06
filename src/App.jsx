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
import EditPage from "./pages/EditPage.";

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
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
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
          element={<JobPageMore deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route
          path="/edit-jobs/:id"
          index
          element={<EditPage updateSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route path="*" index element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
