# AngularEmployees

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.
Este proyecto es un frontend desarrollado con Angular, que consume la API REST del backend desarrollado en Spring Boot.

## Requisitos Previos
Node.js (versión recomendada 18 o superior)

Angular CLI instalado globalmente:

```bash
npm install -g @angular/cli
```

##### El backend Spring Boot debe estar corriendo previamente para que el frontend pueda comunicarse correctamente con la API.

## Clonar el Repositorio
```bash
git clone https://github.com/tu-usuario/tu-repositorio-frontend.git
cd tu-repositorio-frontend
```

## Configuración
Configura la URL base del backend
Edita el archivo src/environments/environment.ts (y environment.prod.ts si haces build de producción) para establecer la URL donde está corriendo el backend.

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080'  // Dirección donde corre el backend
};
```

## Instalar dependencias
```bash
npm install
```

## Ejecutar la aplicación
Asegúrate primero que el backend esté corriendo en la dirección y puerto configurados (por defecto http://localhost:8080).

Luego, ejecuta:

```bash
ng serve
```
Por defecto, la app estará disponible en:

```arduino
http://localhost:4200
```

## Construir para producción
```bash
ng build --prod
```

Los archivos resultantes estarán en la carpeta dist/.

## Probar la aplicación
Al abrir el frontend en el navegador (http://localhost:4200), la app consumirá el backend en la URL configurada.

Si el backend no está activo, la app no podrá obtener datos ni funcionar correctamente.

## Estructura del proyecto
```bash
src/
 ├── app/               # Código fuente Angular
 ├── environments/      # Configuración de entornos
angular.json
package.json
tsconfig.json
```

## Tecnologías usadas
Angular 15+
TypeScript
HTML5, CSS3
Tailwind 
Daisy UI
