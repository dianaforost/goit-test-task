import './App.css';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home/Home.js'))
const Tweets = lazy(() => import('./pages/Tweets/Tweets'))
const UserMenu = lazy(() => import('./components/UserMenu/UserMenu'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
          <Route path="/" element={<UserMenu />}>
            <Route index element={<Home />} />
            <Route path="tweets" element={<Tweets />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
