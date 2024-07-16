import DetailPage from './Components/DetailPage.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage.jsx';
import useStateContext from './Api/useStateContext.jsx';
import {
  Footer,
  Navigation,
} from './sections/Index.js';
import HomePage from './sections/HomePage.jsx';
import ProductsPage from './Pages/ProductsPage.jsx';
import SignUpPage from './Pages/SignUpPage.jsx';
const App = () => (
  <BrowserRouter>
    <Navigation />
    <main className="relative flex flex-col">
      <Routes>
        <Route path='/' element={<HomePage />}>
        </Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/productsPage' element={<ProductsPage />}>
        </Route>
        <Route path='/detailPage' element={<DetailPage />} />
      </Routes>
      <section className="bg-black padding-x padding-t pb-8" >
        <Footer />
      </section>


    </main>
  </BrowserRouter>

)

export default App;