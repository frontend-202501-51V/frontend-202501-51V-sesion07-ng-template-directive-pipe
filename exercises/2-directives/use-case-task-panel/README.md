# Caso de uso: Panel interactivo de tareas con directivas personalizadas

Este ejemplo muestra cómo aplicar directivas estructurales, de atributo y personalizadas en un caso real de software: la gestión interactiva de una lista de tareas, mejorando la experiencia visual y la interacción del usuario.

---

## 📝 Requerimiento de Ingeniería

> **El sistema debe permitir gestionar una lista de tareas donde el usuario pueda marcar tareas como importantes, completadas o pendientes usando directivas estructurales, de atributo y personalizadas, mejorando la experiencia visual e interacción.**

Este requerimiento es típico en aplicaciones de productividad, gestión de proyectos o cualquier sistema donde la priorización y el seguimiento de tareas sean fundamentales.

---

## ⚙️ Funcionalidades

- Agregar tareas nuevas.
- Marcar tareas como completadas o pendientes.
- Marcar tareas como importantes (con una estrella).
- Resaltar visualmente las tareas importantes y completadas.
- Usar una directiva personalizada para resaltar el botón de importante.
- Mostrar mensajes visuales para el estado de las tareas.

---

## 💡 ¿Dónde se usa esto?

Este patrón es común en:

- Aplicaciones de gestión de tareas (ej. Todoist, Trello, Asana)
- Sistemas de seguimiento de incidencias o tickets
- Herramientas de productividad personal y colaborativa
- Cualquier software donde se requiera priorizar y gestionar actividades

---

## 📂 Archivos

- `task-panel.component.ts`: Cascarón para empezar la solución.
- `SOLUTION-task-panel.component.ts`: Solución completa del caso de uso.
- `important.directive.ts`: Directiva personalizada (cascarón).
- `SOLUTION-important.directive.ts`: Directiva personalizada (solución).
- `README.md`: Esta guía y descripción del caso de uso.

---

## 🛠️ Conceptos Angular aplicados

- `*ngFor`, `*ngIf` para renderizado condicional y listas.
- `[ngClass]` para estilos dinámicos según el estado de la tarea.
- `[(ngModel)]` para binding bidireccional en formularios.
- Event binding para agregar y actualizar tareas.
- Directiva personalizada `[appImportant]` para resaltar tareas importantes.
- Uso de componentes y tooltips de ng-bootstrap para mejorar la experiencia de usuario.

---

## 🚀 ¿Cómo probarlo?

1. Declara el componente y la directiva en el módulo correspondiente.
2. Navega al componente en la aplicación Angular.
3. Agrega, marca y prioriza tareas usando la interfaz.

---

## 📚 Aprendizaje esperado

- Aplicar directivas estructurales y de atributo en un caso real.
- Crear y utilizar directivas personalizadas para modificar el comportamiento visual.
- Mejorar la experiencia de usuario con componentes y tooltips de ng-bootstrap.
- Integrar múltiples conceptos de Angular en una solución práctica y realista.
