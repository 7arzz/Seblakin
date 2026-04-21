function InputMeja({ nomorMeja, setNomorMeja }) {
  return (
    <div className="card">
      <h3 className="section-title">📍 Nomor Meja</h3>
      <input
        className="input-field"
        type="number"
        placeholder="Masukkan nomor meja (e.g. 05)"
        value={nomorMeja}
        onChange={(e) => setNomorMeja(e.target.value)}
      />
    </div>
  );
}

export default InputMeja;
