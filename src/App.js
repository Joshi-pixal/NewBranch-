import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import "./App.css";

import {Home} from "./components/pages/Home.page";
import Navbar from "./components/Navbar";
import {RQSuperHeroesPage} from "./components/pages/RQSuperHeroes.page"
import {SuperHeroes} from "./components/pages/SuperHeroes.Page";

const queryClient = new QueryClient()


function App(){
  return(
    <>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route exact path="/" element={<Home />}/>
    <Route exact path="/RQSuperHeroesPage" element={<RQSuperHeroesPage /> } />
      <Route  exact path="/SuperHeroes" element={<SuperHeroes />} />
      </Routes>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
      </>
  );
}

export default App
