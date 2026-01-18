import { Suspense, lazy } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";

const Experience = lazy(() =>
  import("./components/sections/Experience").then((m) => ({
    default: m.Experience,
  })),
);
const Projects = lazy(() =>
  import("./components/sections/Projects").then((m) => ({
    default: m.Projects,
  })),
);
const Skills = lazy(() =>
  import("./components/sections/Skills").then((m) => ({ default: m.Skills })),
);
const Contact = lazy(() =>
  import("./components/sections/Contact").then((m) => ({ default: m.Contact })),
);

const LoadingFallback = () => (
  <div className="h-screen flex items-center justify-center bg-white" />
);

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Contact />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
