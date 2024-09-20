/*Simula una función que descargue datos de tres API diferentes y utilice async/await 
para manejarlas de forma secuencial.*/
// Simulando una llamada a una API
function fetchFromAPI(apiName, delay) {
    return new Promise((resolve) => {
        console.log(`Consultando ${apiName}...`);
        setTimeout(() => {
            resolve(`Datos recibidos de ${apiName}`);
        }, delay); // Retraso simulado para la llamada a la API
    });
}

// Función para manejar las llamadas a las APIs de forma secuencial
async function fetchSequentially() {
    try {
        // Llamada a la primera API
        const data1 = await fetchFromAPI('API 1', 2000); // 2 segundos de retraso
        console.log(data1);
        
        // Llamada a la segunda API
        const data2 = await fetchFromAPI('API 2', 1000); // 1 segundo de retraso
        console.log(data2);
        
        // Llamada a la tercera API
        const data3 = await fetchFromAPI('API 3', 1500); // 1.5 segundos de retraso
        console.log(data3);
        
        console.log('Descarga de todas las APIs completada.');
    } catch (error) {
        console.log(`Ocurrió un error al descargar datos: ${error}`);
    }
}

// Ejecutar la función
fetchSequentially();
