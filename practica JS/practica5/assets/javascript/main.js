document.addEventListener("DOMContentLoaded", () => {
    const contenedorTablas = document.getElementById("contenedor-tablas")
  
    // Generar tablas del 1 al 10
    for (let i = 1; i <= 10; i++) {
      // Crear tabla
      const tabla = document.createElement("div")
      tabla.className = "tabla"
  
      // Crear encabezado de la tabla
      const tablaHeader = document.createElement("div")
      tablaHeader.className = "tabla-header"
      tablaHeader.textContent = `Tabla del ${i}`
  
      // Crear cuerpo de la tabla
      const tablaBody = document.createElement("div")
      tablaBody.className = "tabla-body"
  
      // Generar filas de multiplicación
      for (let j = 1; j <= 10; j++) {
        const fila = document.createElement("div")
        fila.className = "fila"
  
        // Calcular el resultado
        const resultado = i * j
  
        // Establecer el contenido de la fila
        fila.innerHTML = `${i} × ${j} = <span class="resultado">${resultado}</span>`
  
        // Añadir fila al cuerpo de la tabla
        tablaBody.appendChild(fila)
      }
  
      // Añadir encabezado y cuerpo a la tabla
      tabla.appendChild(tablaHeader)
      tabla.appendChild(tablaBody)
  
      // Añadir tabla al contenedor
      contenedorTablas.appendChild(tabla)
    }
  })
  
  