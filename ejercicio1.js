/*Escribe una función que primero verifique si un archivo existe (simulando con setTimeout) y luego lea el archivo.*/
function fileExists(fileName) {
    return new Promise((resolve) => {
        console.log(`Verificando si el archivo ${fileName} existe...`);
        setTimeout(() => {
            const fileFound = Math.random() > 0.5;  // Simulación, 50% de probabilidad de que exista
            resolve(fileFound);
        }, 1000);  // Simula un tiempo de espera para verificar
    });
}

function readFile(fileName) {
    return new Promise((resolve, reject) => {
        console.log(`Intentando leer el archivo ${fileName}...`);
        setTimeout(() => {
            resolve(`Contenido del archivo ${fileName}`);  // Simula el contenido del archivo
        }, 1000);  // Simula el tiempo de lectura del archivo
    });
}

async function readFileIfExists(fileName) {
    try {
        const exists = await fileExists(fileName);
        if (exists) {
            const content = await readFile(fileName);
            console.log(`Archivo leído con éxito: ${content}`);
        } else {
            console.log(`El archivo ${fileName} no existe.`);
        }
    } catch (error) {
        console.log(`Ocurrió un error: ${error}`);
    }
}

// Ejecutar la función simulando un archivo llamado 'archivo.txt'
readFileIfExists('archivo.txt');
