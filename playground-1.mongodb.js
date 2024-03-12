/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'test';
const collection = 'NEW_COLLECTION_NAME';

// The current database to use.
use(database);

// Create a new collection.
db.createCollection(collection);

// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/

db.usuariosclase8.insertMany ([
  {
    nombre: "Manuel",
    apellido: "Arango",
    correo: "manuel.@gmail.com",
    ciudad:"guadalajala",
    pais: "mexico",
    salario : 5000,
    edad:25,
    altura: 160,
    peso: 116
    },
    {
      nombre: "orlando",
      apellido: "meneses",
      correo: "mene.@gmail.com",
      ciudad:"medellin",
      pais: "colombia",
      salario : 1000,
      edad:40,
      altura: 170,
      peso: 135 
    },
    {
      nombre: "gabriela",
      apellido: "perez",
      correo: "gperez.@gmail.com",
      ciudad:"bogota",
      pais: "colombia",
      salario : 3500,
      edad:19,
      altura: 160,
      peso: 130 
    },
    {
      nombre: "daniela",
      apellido: "rodriguez",
      correo: "r12.@gmail.com",
      ciudad:"barcelona",
      pais: "españa",
      salario : 3000,
      edad:26,
      altura: 165,
      peso: 135 
    },
    {
      nombre: "robinson",
      apellido: "parker",
      correo: "parker.@gmail.com",
      ciudad:"miami",
      pais: "estados unidados",
      salario : 1500,
      edad:40,
      altura: 170,
      peso: 135 
    },
    {
      nombre: "megan",
      apellido: "huisbant",
      correo: "megan.@gmail.com",
      ciudad:"toronto",
      pais: "canada",
      salario : 3000,
      edad:70,
      altura: 161,
      peso: 140 
    },
    {
      nombre: "raul",
      apellido: "huisbant",
      correo: "megan.@gmail.com",
      ciudad:"toronto",
      pais: "canada",
      salario : 5000,
      edad:50,
      altura: 181,
      peso: 140 
    },
    
    {
      nombre: "coco",
      apellido: "sanchez",
      correo: "coco.@gmail.com",
      ciudad:"ciudad de mexico",
      pais: "mexico",
      salario : 2500,
      edad:32,
      altura: 165,
      peso: 120 
    },
    {
      nombre: "isabel",
      apellido: "coquette",
      correo: "isa.@gmail.com",
      ciudad:"inglaterra",
      pais: "londres",
      salario : 3500,
      edad:32,
      altura: 165,
      peso: 120 
    },
    {
      nombre: "dianita",
      apellido: "coquette",
      correo: "dianita3000.@gmail.com",
      ciudad:"inglaterra",
      pais: "londres",
      salario : 4500,
      edad:45,
      altura: 170,
      peso: 148 
    },
    {
      nombre: "franchesca",
      apellido: "voltaire",
      correo: "fanchesca.@gmail.com",
      ciudad:"venecia",
      pais: "italia",
      salario : 900,
      edad:15,
      altura: 160,
      peso: 118 
    },
    {
      nombre: "valerio",
      apellido: "bennedeti",
      correo: "elvale.@gmail.com",
      ciudad:"venecia",
      pais: "italia",
      salario : 4000,
      edad:41,
      altura: 170,
      peso: 150 
    },
    {
      nombre: "valentino",
      apellido: "voltaire",
      correo: "vavol.@gmail.com",
      ciudad:"roma",
      pais: "italia",
      salario : 2900,
      edad:25,
      altura: 180,
      peso: 120 
    },
    {
      nombre: "valentina",
      apellido: "voltaire",
      correo: "vavol01.@gmail.com",
      ciudad:"roma",
      pais: "italia",
      salario : 2900,
      edad:29,
      altura: 180,
      peso: 140 
    },
    {
      nombre: "dante",
      apellido: "dan",
      correo: null,
      ciudad:"roma",
      pais: "italia",
      salario : 8900,
      edad:55,
      altura: 180,
      peso: 120 
    },
    {
      nombre: "marta",
      apellido: "park",
      correo: "martica.@gmail.com",
      ciudad:"perth",
      pais: "australia",
      salario : 1200,
      edad:35,
      altura: 180,
      peso: 158 
    },
    
      
        {
          nombre: "Juan",
          edad: 25,
          ciudad: "Londres",
          pais: "Reino Unido",
          salario: 3000,
          peso: 160,
          altura: 175,
          correo: "juan@example.com"
        },
        {
          nombre: "María",
          edad: 28,
          ciudad: "París",
          pais: "Francia",
          salario: 2500,
          peso: 150,
          altura: 180,
          correo: "maria@example.com"
        },
        {
          nombre: "Carlos",
          edad: 22,
          ciudad: "Madrid",
          pais: "España",
          salario: 3500,
          peso: 170,
          altura: 185,
          correo: "carlos@example.com"
        },
        {
          nombre: "Ana",
          edad: 30,
          ciudad: "Nueva York",
          pais: "Estados Unidos",
          salario: 2000,
          peso: 140,
          altura: 170,
          correo: "ana@example.com"
        },
        {
          nombre: "Luis",
          edad: 28,
          ciudad: "Melbourne",
          pais: "Australia",
          salario: 2800,
          peso: 150,
          altura: 160,
          correo: "luis@example.com"
        },
        {
          nombre: "Elena",
          edad: 35,
          ciudad: "Londres",
          pais: "Reino Unido",
          salario: 2600,
          peso: 180,
          altura: 175,
          correo: "elena@example.com"
        },
        {
          nombre: "Pedro",
          edad: 29,
          ciudad: "París",
          pais: "Francia",
          salario: 3200,
          peso: 160,
          altura: 170,
          correo: "pedro@example.com"
        },
        {
          nombre: "Marta",
          edad: 26,
          ciudad: "Barcelona",
          pais: "España",
          salario: 4000,
          peso: 150,
          altura: 160,
          correo: "marta@example.com"
        },
        {
          nombre: "Javier",
          edad: 31,
          ciudad: "Sídney",
          pais: "Australia",
          salario: 2200,
          peso: 160,
          altura: 175,
          correo: "javier@example.com"
        },
        {
          nombre: "Laura",
          edad: 27,
          ciudad: "Londres",
          pais: "Reino Unido",
          salario: 2700,
          peso: 140,
          altura: 165,
          correo: "laura@example.com"
        },
        {
          nombre: "Gabriel",
          edad: 40,
          ciudad: "Berlín",
          pais: "Alemania",
          salario: 3800,
          peso: 175,
          altura: 185,
          correo: "gabriel@example.com"
        },
        {
          nombre: "Silvia",
          edad: 23,
          ciudad: "Roma",
          pais: "Italia",
          salario: 3000,
          peso: 130,
          altura: 160,
          correo: "silvia@example.com"
        },
        {
          nombre: "Andrés",
          edad: 32,
          ciudad: "Toronto",
          pais: "Canadá",
          salario: 4500,
          peso: 180,
          altura: 190,
          correo: "andres@example.com"
        },
        {
          nombre: "Isabel",
          edad: 29,
          ciudad: "Sídney",
          pais: "Australia",
          salario: 2100,
          peso: 145,
          altura: 175,
          correo: "isabel@example.com"
        },
        {
          nombre: "Diego",
          edad: 28,
          ciudad: "Buenos Aires",
          pais: "Argentina",
          salario: 2800,
          peso: 160,
          altura: 170,
          correo: "diego@example.com"
        },
        {
          nombre: "Camila",
          edad: 24,
          ciudad: "Santiago",
          pais: "Chile",
          salario: 2300,
          peso: 135,
          altura: 165,
          correo: "camila@example.com"
        },
        {
          nombre: "Roberto",
          edad: 33,
          ciudad: "Mumbai",
          pais: "India",
          salario: null,
          peso: 170,
          altura: 175,
          correo: null
        },
        {
          nombre: "Sara",
          edad: 26,
          ciudad: "Berlín",
          pais: "Alemania",
          salario: 3500,
          peso: 155,
          altura: 170,
          correo: "sara@example.com"
        },
        {
          nombre: "Ricardo",
          edad: 28,
          ciudad: "Moscú",
          pais: "Rusia",
          salario: 3200,
          peso: 165,
          altura: 175,
          correo: "ricardo@example.com"
        },
        {
          nombre: "Eva",
          edad: 21,
          ciudad: "Ciudad de México",
          pais: "México",
          salario: 2600,
          peso: 140,
          altura: 160,
          correo: "eva@example.com"
        },
        {
          nombre: "Alejandro",
          edad: 36,
          ciudad: "Bogotá",
          pais: "Colombia",
          salario: 3900,
          peso: 175,
          altura: 165,
          correo: "alejandro@example.com"
        }  
      ]
  )

db.usuariosclase8.find();

