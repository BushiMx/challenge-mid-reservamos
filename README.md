# challenge-mid-reservamos

## Descripción

Tenemos que hacer una app donde los usuarios puedan consultar
la previsión meteorológica de los destinos disponibles en Reservamos.
La funcionalidad de la web app es poder comparar la previsión meteorológica para los próximos 5
días, por días, de los diferentes destinos que ofrece Reservamos. El usuario debe poder
introducir el nombre de las ciudades y ver la temperatura máxima y mínima para estos
lugares.

Para este reto se utilizará la API de OpenWeather para buscar la temperatura
utilizando coordenadas geográficas, y mostrar los resultados en unidades métricas.

● Docs: https://openweathermap.org/forecast5

Para encontrar las coordenadas de una ciudad determinada, utilizaremos un endpoint de la Reservamos
API donde podemos obtener datos de diferentes lugares por su nombre.

## Scope

● La app se puede construir usando el framework con el que te sientas más cómodo.
● Esperamos que trabajes en este desafío durante no más de 3 horas, estamos
● No es necesario persistir los datos en una base de datos, sólo estamos interesados en
mostrarlos mientras se utiliza la aplicación web.
● No es necesario que el usuario inicie sesión, cualquiera puede consultar las previsiones meteorológicas.

## Uso

Al abrir la app se despliega el encabezado y un input dónde se escribe la ciudad a consultar

````md
    ![Página de inicio](src\assets\images\reservamos-01-inicio.png)
    ```

Al empezar a escribir se despliega la lista de ciudades

````md
    ![Listado de ciudades a consultar](src\assets\images\reservamos-02-datos.png)
    ```

Cuando seleccionas la ciudad, se despliegan los datos del clima y
si pasas el cursor por encima de un día, se cambia el enfoque

````md
    ![Clima de los siguientes 5 días](src\assets\images\reservamos-03-resultado.png)
    ```
````
````
````
