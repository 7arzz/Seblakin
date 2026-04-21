import { items } from "../data/data";

function ItemSelector({ selectedItems, setSelectedItems }) {
  const increaseQty = (item) => {
    const existing = selectedItems.find((i) => i.id === item.id);
    if (existing) {
      setSelectedItems(
        selectedItems.map((i) =>
          i.id === item.id ? { ...i, qty: (i.qty || 1) + 1 } : i
        )
      );
    } else {
      setSelectedItems([...selectedItems, { ...item, qty: 1 }]);
    }
  };

  const decreaseQty = (item) => {
    const existing = selectedItems.find((i) => i.id === item.id);
    if (existing) {
      if (existing.qty > 1) {
        setSelectedItems(
          selectedItems.map((i) =>
            i.id === item.id ? { ...i, qty: i.qty - 1 } : i
          )
        );
      } else {
        setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
      }
    }
  };

  return (
    <div className="card">
      <h3 className="section-title">🥘 Pilih Topping</h3>
      <div className="selection-list">
        {items.map((item) => {
          const selectedItem = selectedItems.find((i) => i.id === item.id);
          const qty = selectedItem ? selectedItem.qty : 0;
          const isSelected = qty > 0;

          return (
            <div
              key={item.id}
              className={`checkbox-card ${isSelected ? "selected" : ""}`}
            >
              <div className="item-info">
                <span className="item-name">{item.nama}</span>
                <span className="item-price">Rp{item.harga.toLocaleString()}</span>
              </div>
              <div className="qty-controls">
                {isSelected && (
                  <>
                    <button
                      className="qty-btn"
                      onClick={() => decreaseQty(item)}
                    >
                      -
                    </button>
                    <span className="qty-value">{qty}</span>
                  </>
                )}
                <button
                  className="qty-btn add-btn"
                  onClick={() => increaseQty(item)}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ItemSelector;
