import { Routes, Route } from "react-router-dom";
import { Home } from "../Components/Home/Home";
import { Section } from "../Components/Section/Section";
import { BookDetailsPage } from "../Components/BookDetailsPage/BookDetailsPage";
import { NotFound } from "../Components/NotFound/NotFound";
import { Navbar } from "../Components/Navbar/Navbar";
import { BookCard } from "../Components/BookCard/BookCard";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/navbar" element={<Navbar />} />
        <Route exact path="/bookdet" element={<BookDetailsPage />} />
        <Route exact path="/navbar" element={<Navbar />} />
        <Route exact path="/bookcard" element={<BookCard />} />
        <Route exact path="/notfound" element={<NotFound />} />
        {/* Create other routes here: Section, bookdetailspage and 404 */}
        {/*  */}
      </Routes>
    </>
  );
};
