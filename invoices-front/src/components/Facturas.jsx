import React from "react";
import "./Facturas.css";

function Facturas() {
  const [isEditing, setIsEditing] = React.useState(false);
  const [cobrada, setCobrada] = React.useState(false);

  // ---- ESTADO DEL FORMULARIO ----
  const [formData, setFormData] = React.useState({
    price: "",
    t_iva: "21",
    iva: "",
    total: "",
  });

  // ---- CALCULO AUTOMÁTICO ----
  const calculateValues = (base, tipoIVA) => {
    const baseNum = parseFloat(base) || 0;
    const ivaNum = (baseNum * tipoIVA) / 100;
    const totalNum = baseNum + ivaNum;

    setFormData((prev) => ({
      ...prev,
      iva: ivaNum.toFixed(2),
      total: totalNum.toFixed(2),
    }));
  };

  // ---- CONTROL DE LOS INPUTS ----
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "price" || name === "t_iva") {
      const base = name === "price" ? value : formData.price;
      const tipo = name === "t_iva" ? value : formData.t_iva;
      calculateValues(base, parseFloat(tipo));
    }
  };

  // ---- VALIDACIÓN ----
  const validateForm = () => {
    let errors = [];

    if (!document.getElementById("id").value.trim())
      errors.push("El número de factura es obligatorio");

    if (!formData.price || parseFloat(formData.price) <= 0)
      errors.push("La base imponible debe ser mayor que 0");

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return false;
    }

    return true;
  };

  // ---- BOTONES ----
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log("Factura creada:", formData);
  };

  const handleEdit = () => {
    if (!validateForm()) return;
    console.log("Factura actualizada:", formData);
  };

  const handleDelete = () => {
    if (window.confirm("¿Seguro que quieres borrar la factura?")) {
      console.log("Factura borrada");
    }
  };

  const handleCobrada = () => {
    setCobrada(!cobrada);
  };

  return (
    <div className="facturas-container">
      <header className="facturas-header">
        <h1>CONTROL DE FACTURAS</h1>
      </header>

      <main className="facturas-main">
        <form id="facturaForm" className="factura-form" onSubmit={handleSubmit}>
          {/* ---- PRIMERA FILA ---- */}
          <div className="form-row">
            <div className="form-group form-group-small">
              <label className="form-label form-label-bold">Nº Factura</label>
              <input
                id="id"
                name="id"
                type="text"
                required
                className="form-input"
              />
            </div>

            <div className="form-group form-group-medium">
              <label className="form-label">Fecha</label>
              <input
                id="fecha"
                name="fecha"
                type="date"
                required
                className="form-input"
              />
            </div>

            <div className="form-group form-group-flex">
              <label className="form-label">Cliente</label>
              <input
                id="cliente"
                name="cliente"
                type="text"
                className="form-input"
              />
            </div>
          </div>

          {/* ---- SEGUNDA FILA ---- */}
          <div className="form-row">
            <div className="form-group form-group-flex">
              <label className="form-label">Base imponible</label>
              <input
                id="price"
                name="price"
                type="number"
                step="0.01"
                inputMode="decimal"
                className="form-input"
                value={formData.price}
                onChange={handleChange}
              />
            </div>

            <div className="form-group form-group-small">
              <label className="form-label">Tipo de IVA</label>
              <select
                id="t_iva"
                name="t_iva"
                className="form-input"
                value={formData.t_iva}
                onChange={handleChange}
              >
                <option value="21">21%</option>
                <option value="0">0%</option>
              </select>
            </div>

            <div className="form-group form-group-flex">
              <label className="form-label">IVA (€)</label>
              <input
                id="iva"
                name="iva"
                type="number"
                step="0.01"
                className="form-input"
                value={formData.iva}
                readOnly
              />
            </div>

            <div className="form-group form-group-flex">
              <label className="form-label">Total (€)</label>
              <input
                id="total"
                name="total"
                type="number"
                step="0.01"
                className="form-input"
                value={formData.total}
                readOnly
              />
            </div>
          </div>

          {/* ---- BOTONES ---- */}
          <div className="form-buttons">
            <button id="btnCreate" type="submit" className="btn btn-create">
              Crear Factura
            </button>

            <button
              id="btnEdit"
              type="button"
              onClick={handleEdit}
              className="btn btn-edit"
            >
              Actualizar Factura
            </button>

            <button
              id="btnDelete"
              type="button"
              onClick={handleDelete}
              className="btn btn-delete"
            >
              Borrar Factura
            </button>

            <button
              id="btnCobrada"
              type="button"
              onClick={handleCobrada}
              className="btn btn-cobrada"
            >
              <span id="btnCobradaText" className={cobrada ? "hidden" : ""}>
                Pendiente
              </span>
              <span
                id="btnCobradaIcon"
                className={`cobrada-icon ${!cobrada ? "hidden" : ""}`}
              >
                ✔
              </span>
            </button>
          </div>
        </form>
      </main>

      <footer className="facturas-footer">
        <p>{new Date().getFullYear()} Development: IbanC0d3R</p>
      </footer>
    </div>
  );
}

export default Facturas;
