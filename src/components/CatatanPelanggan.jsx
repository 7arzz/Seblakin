function CatatanPelanggan({ catatan, setCatatan }) {
  return (
    <div className="card">
      <h3 className="section-title">📝 Catatan Pesanan</h3>
      <textarea
        className="textarea-field"
        placeholder="Ada pesan untuk penjual? (Contoh: Sawi dikit aja, Mie mateng banget, dll)"
        value={catatan}
        onChange={(e) => setCatatan(e.target.value)}
      ></textarea>
    </div>
  );
}

export default CatatanPelanggan;
