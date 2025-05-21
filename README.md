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

### Proyecto Integrador (20 min)

- [README.md](exercises/4-project/README.md) - Descripción del mini-proyecto y objetivos
- [app.component.ts](exercises/4-project/app.component.ts) - Componente principal (base)
- [task-list.component.ts](exercises/4-project/task-list.component.ts) - Componente de lista de tareas (base, para completar)
- [HINTS.md](exercises/4-project/HINTS.md) - Guía y pistas para implementación
- [SOLUTION-task-list.component.ts](exercises/4-project/SOLUTION-task-list.component.ts) - Solución completa (referencia)

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

Este proyecto sigue las convenciones de Angular para contribuciones:

1. Crea un issue describiendo la mejora o problema
2. Realiza cambios en una rama con prefijo según el tipo:
   - `feat/` para nuevas funcionalidades
   - `fix/` para correcciones
   - `docs/` para documentación
   - `refactor/` para refactorización
3. Usa mensajes de commit siguiendo el formato `type(scope): message`
4. Envía un PR vinculado al issue original

Todas las contribuciones incluirán los créditos correspondientes.

## 📜 Licencia

Este material está licenciado bajo [Creative Commons Attribution-NonCommercial 4.0 International](https://creativecommons.org/licenses/by-nc/4.0/). Puedes:

- Compartir y adaptar el material
- Dar crédito apropiado al autor original

No puedes:

- Usar el material con fines comerciales sin autorización
- Distribuir versiones modificadas bajo términos más restrictivos

Para usos comerciales o autorizaciones especiales, contacta a [info@skills4up.com](mailto:info@skills4up.com).
