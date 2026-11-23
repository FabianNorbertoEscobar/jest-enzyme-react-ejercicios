# Práctica de Jest y testing en React

Este repositorio reúne ejercicios de práctica de un curso de testing con JavaScript y React. El foco del código versionado está en aprender a escribir pruebas unitarias con Jest para funciones y estructuras de datos, además de probar operaciones asíncronas. También incluye el punto de partida de una aplicación React.

## Stack y herramientas

- **JavaScript (ES modules):** implementación de las funciones y módulos de práctica.
- **React 18 y React DOM:** base de la pequeña aplicación web.
- **Create React App (`react-scripts` 5):** configuración de desarrollo, build y ejecución de Jest sin configuración manual.
- **Jest:** framework de pruebas, integrado con el comando `react-scripts test`; se usan `describe`, `test` y distintos matchers de `expect`.
- **Enzyme 3 y `enzyme-adapter-react-16`:** aparecen como dependencias de desarrollo para el trabajo con componentes. Los ejercicios actuales no importan ni configuran Enzyme, y el adaptador declarado es para React 16, mientras que el proyecto usa React 18.
- **React Testing Library y `user-event`:** también están declaradas como dependencias, aunque los tests actuales no las utilizan.

El manifiesto incluye otras bibliotecas (por ejemplo, Axios, React Router, Styled Components, Chart.js y PubSubJS) que no forman parte de la aplicación de ejemplo ni de los ejercicios de testing presentes. Por eso se listan como dependencias disponibles, no como funcionalidades implementadas en este repositorio.

## ¿Qué se practica?

- **Estructura de pruebas:** agrupar casos con `describe` y definirlos con `test`.
- **Aserciones y matchers de Jest:** igualdad estricta y estructural (`toBe`, `toEqual`, `toStrictEqual`), negación, coincidencia de texto y expresiones regulares, contenido y longitud de arrays, propiedades de objetos, y valores definidos, nulos, booleanos y `NaN`.
- **Pruebas de funciones sincrónicas:** operaciones aritméticas y generación de números aleatorios; funciones de saludo, despedida e identificadores; y ejemplos de manejo de arrays y objetos.
- **Estado encapsulado y estructuras de datos:** pequeños almacenes creados mediante closures para agregar y recuperar frutas o elementos, incluida la búsqueda de un elemento por identificador.
- **Pruebas asíncronas:** esperar callbacks con `done`, encadenar promesas, comprobar promesas con `.resolves` y `.rejects`, y usar `async`/`await`.
- **Solicitud HTTP asíncrona:** consultar un usuario de JSONPlaceholder y comprobar que la respuesta contenga propiedades esperadas.
- **React:** la aplicación de muestra renderiza un encabezado introductorio. El repositorio no presenta una interfaz funcional extensa; los ejercicios se concentran en los fundamentos de testing.

## Estructura del repositorio

```text
src/
├── App.js                    # Componente React de ejemplo
├── index.js                  # Punto de entrada de la aplicación
├── __test__/
│   └── App.test.js           # Pruebas de ejemplo con Jest
└── utils/
    ├── arrays.js             # Almacén de frutas
    ├── async.js              # Callbacks, promesas y consulta HTTP
    ├── numbers.js            # Operaciones numéricas
    ├── objects.js            # Almacén de objetos y búsqueda por ID
    ├── strings.js            # Funciones de texto
    └── __test__/             # Pruebas de los módulos de utilidades
```

Los tests de utilidades están junto a `src/utils/__test__`, organizados en archivos por tema: arrays, asincronía, números, objetos, valores primitivos y strings.

## Requisitos

- Node.js y npm.

## Instalación y uso

Desde la raíz del proyecto:

```bash
npm install
npm start
```

La aplicación de desarrollo queda disponible en [http://localhost:3000](http://localhost:3000).

Para ejecutar los tests:

```bash
npm test
```

Create React App inicia Jest en modo interactivo (watch). Para generar una compilación optimizada:

```bash
npm run build
```

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm start` | Inicia el servidor de desarrollo. |
| `npm test` | Ejecuta Jest mediante Create React App, en modo watch. |
| `npm run build` | Genera la compilación de producción en `build/`. |
| `npm run eject` | Expone la configuración interna de Create React App; es una operación irreversible y no es necesaria para ejecutar estos ejercicios. |
