# Sistema de Reservas de Hoteles

## Descripción

Una aplicación para gestionar reservas de habitaciones en hoteles. Permite a los usuarios ver la disponibilidad de habitaciones, realizar y cancelar reservas, y gestionar tarifas. Además, incluye un sistema de reseñas y valoraciones y se integra con pasarelas de pago.

## Funcionalidades

- **Registro y autenticación de usuarios**: Los usuarios pueden registrarse, iniciar sesión y gestionar sus perfiles.
- **Búsqueda y visualización de hoteles y habitaciones**: Permite buscar hoteles y habitaciones disponibles y visualizar sus detalles.
- **Reserva y cancelación de habitaciones**: Facilita la reserva de habitaciones y su posterior cancelación si es necesario.
- **Gestión de tarifas y disponibilidad**: Administra las tarifas de las habitaciones y su disponibilidad en tiempo real.
- **Sistema de reseñas y valoraciones**: Los usuarios pueden dejar reseñas y valoraciones sobre los hoteles y habitaciones.
- **Integración con pasarelas de pago**: Utiliza la API de Mercado Pago para procesar los pagos de las reservas.

## Tecnologías

- **Backend**: Spring Boot + JWT + Spring Security + JPA + JAVA
- **Frontend**: React + Vite + TypeScript + Tailwind CSS
- **Base de Datos**: PostgreSQL
- **Pasarela de Pago**: Mercado Pago API + Stripe API

## Clonar el Repositorio

Para clonar este repositorio y comenzar a trabajar con el sistema de reservas de hoteles, sigue estos pasos:

1. Clona el repositorio usando el siguiente comando:

   ```bash
   git clone https://github.com/natanael-lima/hotel-reservation-system.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd hotel-reservation-system
   ```

3. **Configuración del Backend**:

   - Asegúrate de tener [Spring Boot](https://spring.io/projects/spring-boot) instalado.
   - Configura tu archivo `application.properties` con las credenciales de la base de datos y las credenciales de la API de Mercado Pago.

4. **Configuración del Frontend**:

   - Asegúrate de tener [Node.js](https://nodejs.org/) y [Yarn](https://classic.yarnpkg.com/) instalados.
   - Instala las dependencias del frontend:

     ```bash
     cd frontend
     yarn install
     ```

   - Inicia el servidor de desarrollo:

     ```bash
     yarn dev
     ```

5. **Base de Datos**:

   - Asegúrate de tener [PostgreSQL](https://www.postgresql.org/) instalado y en funcionamiento.
   - Configura la base de datos y aplica las migraciones necesarias.

6. **Iniciar el Backend**:

   - Navega al directorio del backend y ejecuta la aplicación:

     ```bash
     cd backend
     ./mvnw spring-boot:run
     ```
## Vista Previa Diagrama

Puedes ver una vista del Diagrama de Entidad-Relación (ER o MER). [![db-hotel.png](https://i.postimg.cc/CMbTmSvT/db-hotel.png)](https://postimg.cc/Lh4bsKKN)

## Vista Previa

Puedes ver una vista previa del proyecto. [![project-hotel-system.jpg](https://i.postimg.cc/yx8G1Czn/project-hotel-system.jpg)](https://postimg.cc/hzNsswv7)

Con estos pasos, deberías estar listo para empezar a trabajar con la aplicación de reservas de hoteles. Si tienes alguna pregunta o encuentras algún problema, consulta la documentación del proyecto o contacta con el equipo de soporte.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Realizado por

- [Natanael Lima](https://github.com/natanael-lima)
- [Maximiliano Gaitan](https://github.com/maxi1103)
