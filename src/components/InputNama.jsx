function InputNama({ namaPelanggan, setNamaPelanggan }) {
  return (
    <div className="card">
      <h3 className="section-title">👤 Atas Nama</h3>
      <input
        className="input-field"
        type="text"
        placeholder="Masukkan nama Anda (e.g. Budi)"
        value={namaPelanggan}
        onChange={(e) => setNamaPelanggan(e.target.value)}
      />
    </div>
  );
}

export default InputNama;
