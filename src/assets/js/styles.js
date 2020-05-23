/// [[CONTROL DE ESTILO HEADER MAIN BAR]]
let url = window.location.href;

/// Elementos de li
const tabs = ["identificar", "explorar", "pedidos", "empleos"];

tabs.forEach(e => {
    /// Agregar .php y ver si lo contiene en la url
    if (url.indexOf(e) !== -1) {
        /// Agregar tab- para hacer que coincida la Id
        setActive("tab-" + e);
    }

});

/// Funcion que asigna la clase active
function setActive(id) {
    document.getElementById(id).setAttribute("class", "nav-item active");
}

/// [[CONTROL DE ESTILO HEADER MAIN BAR]]