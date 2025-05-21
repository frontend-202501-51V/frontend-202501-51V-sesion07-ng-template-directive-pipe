# Caso de uso: Gestión de Contactos de un Equipo de Proyecto

Este ejemplo muestra cómo aplicar templates, data binding, directivas estructurales y de atributo, y pipes integrados en un caso real de software: la gestión de miembros de un equipo de proyecto.

---

## 📝 Requerimiento de Ingeniería

> **El sistema debe permitir visualizar, agregar y filtrar miembros de un equipo de proyecto, mostrando su nombre, correo y rol, y resaltando al líder del proyecto.**

Este requerimiento es típico en sistemas de gestión de proyectos, recursos humanos o plataformas colaborativas, donde la administración de equipos y roles es fundamental.

---

## ⚙️ Funcionalidades

- Visualizar la lista de miembros del equipo.
- Agregar nuevos miembros con nombre, correo y rol.
- Filtrar miembros por rol.
- Resaltar al líder del proyecto.
- Mostrar nombres en mayúsculas.
- Mensaje de éxito al agregar un miembro.
- Mensaje de advertencia si no hay miembros en el equipo.

---

## 💡 ¿Dónde se usa esto?

Este patrón es común en:
- Sistemas de gestión de proyectos (ej. Jira, Trello, Asana)
- Plataformas de recursos humanos
- Aplicaciones colaborativas y educativas
- Cualquier software donde se gestionen equipos o usuarios con roles

---

## 📂 Archivos

- `team-contacts.component.ts`: Componente principal con integración de ng-bootstrap.
- `role-filter.pipe.ts`: Pipe personalizado para filtrar por rol.
- `README.md`: Esta guía y descripción del caso de uso.

---

## 🛠️ Conceptos Angular aplicados

- `*ngFor`, `*ngIf` para renderizado condicional y listas.
- `[ngClass]` para estilos dinámicos.
- `[(ngModel)]` para binding bidireccional en formularios.
- Event binding para agregar miembros.
- Pipes integrados (`uppercase`) y personalizados (`roleFilter`).
- Componentes y alertas de ng-bootstrap para mejor experiencia de usuario.

---

## 🚀 ¿Cómo probarlo?

1. Declara el componente y el pipe en el módulo correspondiente.
2. Navega al componente en la aplicación Angular.
3. Agrega, filtra y visualiza miembros del equipo usando la interfaz.

---

## 📚 Aprendizaje esperado

- Aplicar los fundamentos de templates y binding en Angular.
- Usar directivas estructurales y de atributo en un caso real.
- Implementar y utilizar pipes personalizados.
- Mejorar la experiencia de usuario con componentes de ng-bootstrap.
