import React from 'react'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ImagePanning from './components/imagePanning/ImagePanning';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Menu from './components/menu/Menu';

const App = () => {

  return (
    <div>
      <Navbar />
      <Menu />

      <TransformWrapper
        initialScale={1.5}
        wheel={{ disabled: true }}
        doubleClick={{ disabled: true }}
        limitToBounds={true}
        alignmentAnimation={{
          sizeX: 0,
          sizeY: 0
        }}
      >
        <TransformComponent>
          <ImagePanning />
        </TransformComponent>
      </TransformWrapper>

      <Footer />
    </div>
  )
}

export default App;