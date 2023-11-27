import "./App.scss";
import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
        <Route path={'/'} element={<Layout/>}>
            <Route index element={<div>index</div>}/>
            <Route path={':id'} element={<div></div>}/>
            {/*<Route path={'products'} element={<div>Products</div>}/>*/}
            {/*<Route path={'users'} element={<div>users</div>}/>*/}
            {/*<Route path={'categories'} element={<div>categories</div>}/>*/}
            {/*<Route path={'cities'} element={<div>cities</div>}/>*/}
            {/*<Route path={'brands'} element={<div>brands</div>}/>*/}
            {/*<Route path={'protocols'} element={<div>protocols</div>}/>*/}
            {/*<Route path={'orders'} element={<div>orders</div>}/>*/}
            {/*<Route path={'banners'} element={<div>banners</div>}/>*/}
            {/*<Route path={'seminars'} element={<div>seminars</div>}/>*/}
            {/*<Route path={'promocodes'} element={<div>promocodes</div>}/>*/}
        </Route>
    </Routes>
  );
}

export default App;
