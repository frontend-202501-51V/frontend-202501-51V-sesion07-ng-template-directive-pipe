# Caso de uso: Visualización avanzada de reportes con pipes personalizados

Este ejemplo muestra cómo aplicar pipes integrados y personalizados en un caso real de software: la visualización y transformación avanzada de datos en una tabla de reportes.

---

## 📝 Requerimiento de Ingeniería

> **El sistema debe mostrar una tabla de reportes donde los datos puedan ser transformados y presentados usando pipes integrados y personalizados, permitiendo formatos de fecha, moneda, capitalización y filtros avanzados.**

Este requerimiento es típico en sistemas de gestión financiera, dashboards administrativos o cualquier aplicación donde la presentación y el filtrado de datos sean críticos.

---

## ⚙️ Funcionalidades

- Visualizar una tabla de reportes con fecha, usuario, monto y estado.
- Filtrar reportes por estado.
- Formatear fechas y montos usando pipes integrados y personalizados.
- Capitalizar y resaltar el estado de cada reporte.
- Mostrar mensajes visuales cuando no hay datos para el filtro seleccionado.

---

## 💡 ¿Dónde se usa esto?

Este patrón es común en:

- Dashboards administrativos y financieros
- Sistemas de gestión de ventas o gastos
- Aplicaciones de monitoreo y reportes de actividad
- Cualquier software que requiera transformar y presentar datos tabulares

---

## 📂 Archivos

- `report-table.component.ts`: Cascarón para empezar la solución.
- `SOLUTION-report-table.component.ts`: Solución completa del caso de uso.
- `currency-format.pipe.ts`: Pipe personalizado para formato de moneda (cascarón).
- `SOLUTION-currency-format.pipe.ts`: Pipe personalizado para formato de moneda (solución).
- `status-filter.pipe.ts`: Pipe personalizado para filtrar por estado (cascarón).
- `SOLUTION-status-filter.pipe.ts`: Pipe personalizado para filtrar por estado (solución).
- `README.md`: Esta guía y descripción del caso de uso.

---

## 🛠️ Conceptos Angular aplicados

- Uso de pipes integrados (`date`, `uppercase`, etc.) en plantillas.
- Creación y uso de pipes personalizados para formato de moneda y filtrado.
- Uso de `[ngClass]` para resaltar visualmente el estado.
- Uso de componentes y alertas de ng-bootstrap para mejorar la experiencia de usuario.

---

## 🚀 ¿Cómo probarlo?

1. Declara el componente y los pipes en el módulo correspondiente.
2. Navega al componente en la aplicación Angular.
3. Filtra y visualiza los reportes usando la interfaz.

---

## 📚 Aprendizaje esperado

- Aplicar y combinar pipes integrados y personalizados en un caso real.
- Transformar y presentar datos tabulares de manera avanzada.
- Mejorar la experiencia de usuario con componentes y alertas de ng-bootstrap.
- Integrar múltiples conceptos de Angular en una solución práctica y realista.
