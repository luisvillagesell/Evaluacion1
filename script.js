// Datos de los silos
let silos = {
    silo1: { estado: 'Buen Estado', stock: 0, ventilacion: 'Buena', limpieza: 'Buena' },
    silo2: { estado: 'Con Cuerpos Extraños', stock: 0, ventilacion: 'Regular', limpieza: 'Regular' },
    silo3: { estado: 'Con Humedad', stock: 0, ventilacion: 'Mala', limpieza: 'Mala' }
};

// Función para ingresar granos
// Función para ingresar granos
function ingresarGranos() {
    const tipoDeGrano = document.getElementById('tipoDeGrano').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);
    
    // Incrementar stock del silo correspondiente
    switch (tipoDeGrano) {
        case 'buen_estado':
            silos.silo1.stock += cantidad;
            break;
        case 'cuerpos_extraños':
            silos.silo2.stock += cantidad;
            break;
        case 'humedad':
            silos.silo3.stock += cantidad;
            break;
        default:
            break;
    }
    
    actualizarEstadoSilos();
}

    
    actualizarEstadoSilos();


// Función para actualizar el estado de los silos en la página
function actualizarEstadoSilos() {
    const siloStatusDiv = document.getElementById('estadoDeSilo');
    siloStatusDiv.innerHTML = '<h2>Estado de los Silos</h2>';
    
    for (const silo in silos) {
        if (silos.hasOwnProperty(silo)) {
            const status = silos[silo];
            siloStatusDiv.innerHTML += `
                <div>
                    <h3>Silo ${silo}</h3>
                    <p>Estado: ${status.estado}</p>
                    <p>Stock: ${status.stock}</p>
                    <p>Ventilación: ${status.ventilacion}</p>
                    <p>Limpieza: ${status.limpieza}</p>
                </div>
            `;
        }
    }
}

// Mostrar el estado inicial de los silos al cargar la página
actualizarEstadoSilos();
