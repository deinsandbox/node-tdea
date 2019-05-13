# INSTRUCCIONES

## Descarga

Para descargar el proyecto abra una consola y en la ruta deseada ejecute el siguiente comando para clonar el proyecto.
```bash
git clone https://github.com/equiman/node-tda ./TdeA/node
```

Entrar al directorio raíz del proyecto
```bash
cd TdeA/node/
```

Instalar los paquetes NPM del proyecto
```bash
npm i
```

## Commandos

Todos los comandos que se explican a continuación **se deben ejecutar en el directorio raíz del proyecto**.

### Entrega 1

La primera entrega se desarrollo dentro de la carpeta `sprint-one`

#### Cursos

Para observar los cursos disponibles, puede usar alguno de los siguientes comandos.

```bash
node sprint-one/index
node sprint-one/index courses
```

Parámetros:

Opcionalmente puede enviar como parámetro el tiempo de espera que desea esperar para ver cada curso.

```bash
Tiempo de espera: --time, -t
```

```bash
node sprint-one/index courses --time=numero
node sprint-one/index courses -t=numero
```

#### Inscripciones

Para inscribir un estudiante a alguno de los cursos, puede usar el comando `subscribe`

```bash
node sprint-one/index subscribe --id=texto --document=numero --name=texto
node sprint-one/index subscribe -i=texto -d=numero -n=texto
```

Parámetros:

Todos los parámetros son obligatorios.

```bash
ID del Curso : --id, -i
Documento del Estudiante : --document, -d
Nombre del Estudiante : --name, -n
```

Por ejemplo:

```bash
node sprint-one/index subscribe -i=node -d=12345 -n='Camilo Martinez'
```

Inscripción:

Para verificar el proceso de inscripción exitoso se muestra en la consola un mensaje como el siguiente:

> El estudiante "Camilo Martinez" ha sido matriculados en el curso "Node JS"

Adicionalmente se puede verificar la inscripción en el siguiente archivo.
```text
./sprint-one/files/enrollment.txt
```

Donde queda almacenada la información en el siguiente formato:
```text
Documento : 12345
Nombre    : Camilo Martinez
Curso     : node
Titulo    : Node JS
Duración  : 3 dias
Precio    : 0 U$
```

## Acerca

### Author

**Camilo Martinez** sígueme en:
[[Twitter](https://twitter.com/equiman)] - [[dev.to](https://dev.to/equiman)] - [[GitHub](https://github.com/equiman)]