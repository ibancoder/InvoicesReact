import React from "react";
import "./Inicio.css";
import Logo from "./Logo";
import "./Logo.css";

// Componente funcional que representa la página de inicio
function Inicio() {
  // Renderiza un encabezado de bienvenida
  return (
    <div className="inicio-container">
      <header className="inicio-header">
        <Logo />
      </header>

      <main className="inicio-main">
        <p className="inicio-paragraph">
          Aquí puedes gestionar tus facturas de manera eficiente y sencilla.
        </p>

        <section className="inicio-section">
          <h2>Acerca de esta App</h2>
          <p>
            Hemos desarrollado esta aplicación para facilitar la gestión de
            facturas, permitiéndote crear, editar y visualizar tus facturas de
            manera rápida y segura.
          </p>
        </section>
      </main>
      <footer className="inicio-footer">
        <p>&copy; {new Date().getFullYear()} Mi Aplicación React</p>
      </footer>
    </div>
  );
}
//Exportar el componente para su uso en otras partes de la aplicación
export default Inicio;
