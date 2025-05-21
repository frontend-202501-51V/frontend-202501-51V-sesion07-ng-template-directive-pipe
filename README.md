# Workshop: Templates, Directivas y Pipes en Angular

Un taller práctico para dominar la creación de templates, el uso de directivas estructurales y de atributo, y la implementación de pipes personalizados en Angular. Ideal para quienes buscan construir interfaces dinámicas, reutilizables y eficientes.

## 🎯 Objetivos de aprendizaje

Al finalizar este workshop, podrás:

- **Comprender** la sintaxis y capacidades de los templates en Angular
- **Utilizar** directivas estructurales (`*ngIf`, `*ngFor`, etc.) y de atributo (`[ngClass]`, `[ngStyle]`, etc.)
- **Crear** directivas personalizadas para extender el comportamiento de los componentes
- **Aplicar** y **desarrollar** pipes para transformar datos en las vistas
- **Integrar** estos conceptos en componentes reutilizables y escalables

## 📚 Estructura del Repositorio (Learn-by-Doing)

### 📄 Archivos principales

- [README.md](README.md) - Información general e instrucciones
- [LEARNING_PATH.md](LEARNING_PATH.md) - Ruta de aprendizaje y objetivos
- [SETUP.md](SETUP.md) - Instrucciones detalladas de configuración del entorno

### 📚 Documentación y guías

| Archivo                                                        | Descripción                                |
| -------------------------------------------------------------- | ------------------------------------------ |
| [template-syntax-cheatsheet.md](template-syntax-cheatsheet.md) | Referencia rápida de sintaxis de templates |
| [directive-patterns.md](directive-patterns.md)                 | Patrones y ejemplos de directivas          |
| [pipe-examples.md](pipe-examples.md)                           | Ejemplos y casos de uso de pipes           |
| [knowledge-check.md](knowledge-check.md)                       | Preguntas de verificación de conocimientos |
| [resources.md](resources.md)                                   | Enlaces a recursos adicionales             |

## 🧪 Ejercicios de aprendizaje (3 horas)

### Bloque 1: Templates y Sintaxis Angular (50 min)

<details>
<summary><strong>1.1 Fundamentos de Templates</strong> (20 min)</summary>

- [README.md](exercises/1-templates/1.1-introduction/README.md) - Introducción y sintaxis básica
- [template-examples.component.ts](exercises/1-templates/1.1-introduction/template-examples.component.ts) - Ejemplos prácticos
- [QUIZ.md](exercises/1-templates/1.1-introduction/QUIZ.md) - Preguntas conceptuales

</details>

<details>
<summary><strong>1.2 Enlaces y Expresiones</strong> (30 min)</summary>

- [README.md](exercises/1-templates/1.2-bindings/README.md) - Data binding y expresiones
- [binding-examples.component.ts](exercises/1-templates/1.2-bindings/binding-examples.component.ts) - Ejercicios de binding
- [start.component.ts](exercises/1-templates/1.2-bindings/start.component.ts) - Ejercicio para completar
- [HINTS.md](exercises/1-templates/1.2-bindings/HINTS.md) - Guía para implementación

</details>

<details>
<summary><strong>Caso de uso: Gestión de Contactos de un Equipo de Proyecto</strong></summary>

- **Requerimiento:** El sistema debe permitir visualizar, agregar y filtrar miembros de un equipo de proyecto, mostrando su nombre, correo y rol, y resaltando al líder del proyecto.

- [team-contacts.component.ts](exercises/1-templates/use-case-team-contacts/team-contacts.component.ts)
- [role-pipe.ts](exercises/1-templates/use-case-team-contacts/role-pipe.ts)
- [README.md](exercises/1-templates/use-case-team-contacts/README.md) - Descripción y guía del caso de uso

</details>

### Bloque 2: Directivas Angular (70 min)

<details>
<summary><strong>2.1 Directivas Estructurales</strong> (25 min)</summary>

- [README.md](exercises/2-directives/2.1-structural/README.md) - Uso de *ngIf,*ngFor, *ngSwitch
- [structural-examples.component.ts](exercises/2-directives/2.1-structural/structural-examples.component.ts) - Ejemplos prácticos
- [start.component.ts](exercises/2-directives/2.1-structural/start.component.ts) - Ejercicio para completar
- [HINTS.md](exercises/2-directives/2.1-structural/HINTS.md) - Guía para implementación

</details>

<details>
<summary><strong>2.2 Directivas de Atributo</strong> (25 min)</summary>

- [README.md](exercises/2-directives/2.2-attribute/README.md) - Uso de [ngClass], [ngStyle], directivas propias
- [attribute-examples.component.ts](exercises/2-directives/2.2-attribute/attribute-examples.component.ts) - Ejemplos prácticos
- [start.component.ts](exercises/2-directives/2.2-attribute/start.component.ts) - Ejercicio para completar
- [HINTS.md](exercises/2-directives/2.2-attribute/HINTS.md) - Guía para implementación

</details>

<details>
<summary><strong>2.3 Directivas Personalizadas</strong> (20 min)</summary>

- [README.md](exercises/2-directives/2.3-custom/README.md) - Creación de directivas propias
- [highlight.directive.ts](exercises/2-directives/2.3-custom/highlight.directive.ts) - Ejemplo de directiva personalizada
- [start.directive.ts](exercises/2-directives/2.3-custom/start.directive.ts) - Ejercicio para completar
- [HINTS.md](exercises/2-directives/2.3-custom/HINTS.md) - Guía para implementación

</details>

<details>
<summary><strong>Caso de uso: Panel interactivo de tareas con directivas personalizadas</strong></summary>

- **Requerimiento:** El sistema debe permitir gestionar una lista de tareas donde el usuario pueda marcar tareas como importantes, completadas o pendientes usando directivas estructurales, de atributo y personalizadas, mejorando la experiencia visual e interacción.

- [task-panel.component.ts](exercises/2-directives/use-case-task-panel/task-panel.component.ts) - Cascarón para empezar la solución
- [SOLUTION-task-panel.component.ts](exercises/2-directives/use-case-task-panel/SOLUTION-task-panel.component.ts) - Solución completa del caso de uso
- [important.directive.ts](exercises/2-directives/use-case-task-panel/important.directive.ts) - Directiva personalizada (cascarón)
- [SOLUTION-important.directive.ts](exercises/2-directives/use-case-task-panel/SOLUTION-important.directive.ts) - Directiva personalizada (solución)
- [README.md](exercises/2-directives/use-case-task-panel/README.md) - Descripción y guía del caso de uso

</details>

### Bloque 3: Pipes en Angular (40 min)

<details>
<summary><strong>3.1 Pipes Integrados y Personalizados</strong> (20 min)</summary>

- [README.md](exercises/3-pipes/3.1-built-in/README.md) - Uso de pipes integrados
- [pipes-examples.component.ts](exercises/3-pipes/3.1-built-in/pipes-examples.component.ts) - Ejemplos prácticos
- [start.component.ts](exercises/3-pipes/3.1-built-in/start.component.ts) - Ejercicio para completar

</details>

<details>
<summary><strong>3.2 Creación de Pipes Personalizados</strong> (20 min)</summary>

- [README.md](exercises/3-pipes/3.2-custom/README.md) - Cómo crear un pipe propio
- [capitalize.pipe.ts](exercises/3-pipes/3.2-custom/capitalize.pipe.ts) - Ejemplo de pipe personalizado
- [start.pipe.ts](exercises/3-pipes/3.2-custom/start.pipe.ts) - Ejercicio para completar
- [HINTS.md](exercises/3-pipes/3.2-custom/HINTS.md) - Guía para implementación

</details>

<details>
<summary><strong>Caso de uso: Visualización avanzada de reportes con pipes personalizados</strong></summary>

- **Requerimiento:** El sistema debe mostrar una tabla de reportes donde los datos puedan ser transformados y presentados usando pipes integrados y personalizados, permitiendo formatos de fecha, moneda, capitalización y filtros avanzados.

- [report-table.component.ts](exercises/3-pipes/use-case-report-table/report-table.component.ts) - Cascarón para empezar la solución
- [SOLUTION-report-table.component.ts](exercises/3-pipes/use-case-report-table/SOLUTION-report-table.component.ts) - Solución completa del caso de uso
- [currency-format.pipe.ts](exercises/3-pipes/use-case-report-table/currency-format.pipe.ts) - Pipe personalizado (cascarón)
- [capitalize.pipe.ts](exercises/3-pipes/use-case-report-table/capitalize.pipe.ts) - Pipe personalizado
- [SOLUTION-currency-format.pipe.ts](exercises/3-pipes/use-case-report-table/SOLUTION-currency-format.pipe.ts) - Pipe personalizado (solución)
- [status-filter.pipe.ts](exercises/3-pipes/use-case-report-table/status-filter.pipe.ts) - Pipe de filtro de estado (cascarón)
- [SOLUTION-status-filter.pipe.ts](exercises/3-pipes/use-case-report-table/SOLUTION-status-filter.pipe.ts) - Pipe de filtro de estado (solución)
- [README.md](exercises/3-pipes/use-case-report-table/README.md) - Descripción y guía del caso de uso

</details>

### Proyecto Integrador (20 min)

<details>
<summary><strong>Caso de uso: Dashboard Personal de Hábitos y Progreso</strong></summary>

- **Requerimiento:** El sistema debe permitir a un usuario gestionar y visualizar sus hábitos diarios o semanales, registrar avances, marcar hábitos como cumplidos, filtrar por estado (todos, cumplidos, pendientes) y por categoría, resaltar hábitos cumplidos, mostrar estadísticas de progreso y transformar la presentación de los datos usando templates, directivas estructurales y de atributo, directivas personalizadas y pipes tanto integrados como personalizados.

#### Archivos del caso de uso

- [README.md](exercises/4-project/README.md) – Descripción, caso de uso y objetivos del proyecto integrador
- [app.module.ts](exercises/4-project/app.module.ts) – Módulo principal de Angular
- [app.component.ts](exercises/4-project/app.component.ts) – Componente principal (base)
- [habit-list.component.ts](exercises/4-project/habit-list.component.ts) – Componente para mostrar y gestionar la lista de hábitos
- [habit.component.ts](exercises/4-project/habit.component.ts) – Componente para representar un hábito individual
- [habitFilter.pipe.ts](exercises/4-project/habitFilter.pipe.ts) – Pipe personalizado para filtrar hábitos por estado y/o categoría
- [capitalize.pipe.ts](exercises/4-project/capitalize.pipe.ts) – Pipe personalizado para capitalizar textos
- [length.pipe.ts](exercises/4-project/length.pipe.ts) – Pipe personalizado para contar hábitos
- [HINTS.md](exercises/4-project/HINTS.md) – Guía y pistas para implementación
- [highlight.directive.ts](exercises/4-project/highlight.directive.ts) – Directiva personalizada para resaltar hábitos cumplidos


#### Soluciones de referencia

- [SOLUTION-habit-list.component.ts](exercises/4-project/SOLUTION-habit-list.component.ts)
- [SOLUTION-habitFilter.pipe.ts](exercises/4-project/SOLUTION-habitFilter.pipe.ts)
- [SOLUTION-capitalize.pipe.ts](exercises/4-project/SOLUTION-capitalize.pipe.ts)
- [SOLUTION-length.pipe.ts](exercises/4-project/SOLUTION-length.pipe.ts)

</details>

> **Nota:** Durante el workshop, trabaja sobre los archivos base. Si necesitas ayuda, consulta `HINTS.md`. Al finalizar, puedes comparar tu solución con los archivos `SOLUTION-*` para autoevaluarte.

## 🔄 Metodología de aprendizaje

Este workshop implementa un enfoque práctico y progresivo, combinando **conceptos teóricos** con **implementación inmediata**. Cada ejercicio sigue esta estructura:

1. **Explicación conceptual** - Fundamentos del tema tratado
2. **Demostración** - Ejemplos funcionales que ilustran el concepto
3. **Ejercicio guiado** - Implementación paso a paso con instrucciones claras
4. **Reto** - Problema a resolver aplicando lo aprendido
5. **Proyecto integrador** - Aplicación práctica de múltiples conceptos

## 📋 Requisitos previos

- Conocimientos básicos de Angular (componentes, módulos)
- Fundamentos de TypeScript (clases, interfaces)
- Node.js y Angular CLI instalados
- Editor de código (Visual Studio Code recomendado)

## 🤝 Contribuciones

Este repositorio es de uso exclusivo interno de Skills4Up. No se aceptan contribuciones externas.

Si eres parte del equipo de Skills4Up y deseas proponer una mejora o corrección:

1. Crea un issue describiendo la mejora o problema.
2. Realiza cambios en una rama con prefijo según el tipo:
   - `feat/` para nuevas funcionalidades
   - `fix/` para correcciones
   - `docs/` para documentación
   - `refactor/` para refactorización
3. Usa mensajes de commit siguiendo el formato `type(scope): message`
4. Envía un Pull Request vinculado al issue original.

Todas las contribuciones internas incluirán los créditos correspondientes.

## 📜 Licencia

Copyright (c) 2024 Skills4Up

Todos los derechos reservados.

Este material es propiedad exclusiva de Skills4Up. Queda prohibida su reproducción, distribución, comunicación pública o transformación, total o parcial, sin la autorización expresa y por escrito de Skills4Up. El uso de este material está restringido únicamente a fines internos de Skills4Up.

Para autorizaciones especiales, contacta a [info@skills4up.com](mailto:info@skills4up.com).
