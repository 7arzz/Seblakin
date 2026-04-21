function Cart({ namaPelanggan, nomorMeja, selectedLevel, selectedItems, catatan, total }) {
  const generateMessage = () => {
    const list = selectedItems.map((i) => `- ${i.nama} x${i.qty || 1}`).join("\n");
    const notesStr = catatan ? `\nCatatan: ${catatan}` : "";

    const text = `Halo kak, saya ${namaPelanggan} di meja ${nomorMeja}\n\nPesan:\nLevel: ${selectedLevel?.nama || "-"}\nIsi:\n${list || "-"}\n${notesStr}\n\nTotal: Rp${total.toLocaleString()}`;
    
    return encodeURIComponent(text);
  };

  const isValid = namaPelanggan && nomorMeja && selectedLevel;

  return (
    <div className="cart-summary">
      <div className="cart-summary-inner">
        <div className="cart-total-layout">
          <span className="cart-total-label">Total Pembayaran</span>
          <span className="cart-total-value">Rp{total.toLocaleString()}</span>
        </div>
        <a
          href={`https://wa.me/628xxxxxxxxxx?text=${generateMessage()}`}
          target="_blank"
          className={isValid ? "btn" : "btn disabled"}
        >
          Pesan Sekarang 🔥
        </a>
      </div>
    </div>
  );
}

export default Cart;
