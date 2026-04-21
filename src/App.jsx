import { useState } from "react";
import InputMeja from "./components/InputMeja";
import LevelSelector from "./components/LevelSelector";
import ItemSelector from "./components/ItemSelector";
import CatatanPelanggan from "./components/CatatanPelanggan";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingDecorations from "./components/FloatingDecorations";
import InputNama from "./components/InputNama";

function App() {
  const [namaPelanggan, setNamaPelanggan] = useState("");
  const [nomorMeja, setNomorMeja] = useState("");
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [catatan, setCatatan] = useState("");

  const total = selectedItems.reduce((sum, item) => sum + (item.harga * (item.qty || 1)), 0);

  return (
    <div className="app-container">
      <div className="blob blob-tl"></div>
      <div className="blob blob-br"></div>
      <FloatingDecorations />
      
      <Header />

      <div className="content-wrapper">
        <InputNama namaPelanggan={namaPelanggan} setNamaPelanggan={setNamaPelanggan} />
        <InputMeja nomorMeja={nomorMeja} setNomorMeja={setNomorMeja} />

        <LevelSelector
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel}
        />

        <ItemSelector
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />

        <CatatanPelanggan catatan={catatan} setCatatan={setCatatan} />
      </div>

      <Cart
        namaPelanggan={namaPelanggan}
        nomorMeja={nomorMeja}
        selectedLevel={selectedLevel}
        selectedItems={selectedItems}
        catatan={catatan}
        total={total}
      />

      <Footer />
    </div>
  );
}

export default App;
