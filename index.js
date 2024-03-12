const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://manuelagiraldo1999:manu12345678@cluster0.dnlbckj.mongodb.net/');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'conection error:'));
db.once('open', () => {
    console.log('conectado to MongoDB');

    const userSchema = mongoose.Schema({
      nombres : String,
      apellidos : String,
      correo: String,
      ciudad: String,
      pais: String,
      salario: Number,
      edad: Number,
      altura: Number,
      peso: Number
    });

    const User = mongoose.model('usuariosclase8',userSchema);


    //1. endipoint para buscar los que tengan 30 años

  app.get("/api/usuariosclase8/uno", async (req, res) => {
    const uno = await User.find({ edad: { $eq: 30 } });
    res.json(uno);
  });

  //2. endpoint para buscar los mayores de 20 años

  app.get("/api/usuariosclase8/dos", async (req, res) => {
    const dos = await User.find({ edad: { $gt: 20 } });
    res.json(dos);
  });


  //3. endpoint para buscar los menores de 20 años
  app.get("/api/usuariosclase8/tres", async (req, res) => {
    const tres= await User.find({ edad: { $lt: 20 } });
    res.json(tres);
  });

  //4. endpoint para buscar los que tengan 30 años o mayores

  app.get("/api/usuariosclase8/cuatro", async (req, res) => {
    const cuatro = await User.find({ edad: { $gte: 30 } });
    res.json(cuatro);
  });

  // 5. endpoint para buscar los que tengan 20 años o menores

  app.get("/api/usuariosclase8/cinco", async (req, res) => {
    const cinco = await User.find({ edad: { $lte: 20 } });
    res.json(cinco);
  });

  //6. endpoint para buscar los que tengan 5,10,15

  app.get("/api/usuariosclase8/seis", async (req, res) => {
    const seis = await User.find({ edad: { $in: [5, 10, 15] } });
    res.json(seis);
  });


  //7. endpoint para buscar los que no tengan 5,10,15

  app.get("/api/usuariosclase8/siete", async (req, res) => {
    const siete = await User.find({ edad: { $nin: [5, 10, 15] } });
    res.json(siete);
  });

  
  //8. endpoint para verificar si existe un campo

  app.get("/api/usuariosclase8/ocho", async (req, res) => {
    const ocho = await User.find({ edad: { $exists: true } });
    res.json(ocho);
  });

  //9. Obtener a todos los usuarios que no sean de Londres ni de París.
  app.get("/api/usuariosclase8/nueve", async (req, res) => {
    const nueve = await User.find({ciudad:{$nin:["Londres","Paris"]}})
    res.json(nueve);
  });

  //10.Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años.

  app.get("/api/usuariosclase8/diez", async (req,res)=>{
    const diez = await User.find({$or: [{salario: {$lt:2000}},{edad:{$gt:40}}]})
    res.json(diez);
  });
  //11.Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.

  app.get("/api/usuariosclase8/once", async (req,res)=>{
    const once = await User.find({pais: "Canada",$or:[{salario:{$gte: 4000}},{altura:{$gte: 180}}]})
    res.json(once);
  });

  //12. Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.


  app.get("/api/usuariosclase8/doce",async(req,res)=>{
    const doce = await User.find({pais: "Italia", edad: {$gte:20 , $lte:30}})
    res.json (doce);
  });

  //13.Obtener todos los usuarios que no tengan un correo electrónico registrado.

    app.get("/api/usuariosclase8/trece", async(req, res) => {
        const trece = await User.find({ correo: { $exists: false } })
        res.json(trece);
    });


    //14.Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.
    app.get("/api/usuariosclase8/catorce", async(req, res) => {
        const catorce = await User.find({ ciudad: "Francia", $and: [{ salario: { $gte: 3000, $lte: 5000 } }] })
        res.json(catorce);
    });

    
    //15.Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras.
    app.get("/api/usuariosclase8/quince", async(req, res) => {
        const quince= await User.find({ ciudad: "Brasil", $or: [{ peso: { $lt: 120 } }, { peso: { $gte: 140 } }] })
        res.json(quince);
    });


    //16.Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.
    app.get("/api/usuariosclase8/dieciseis", async(req, res) => {
        const dieciseis = await User.find({ $or: [{ ciudad: "Argentina" }, { ciudad: "Chile" }], edad: {$lt: 25}  })
        res.json(diecisei);
    });


    //17.Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.*/
    app.get("/api/usuariosclase8/diecisiete", async(req, res) => {
        const diecisiete = await User.find({ $and: [{ ciudad: { $nin: ["España", "Mexico"] } }, { salario: { $lt: 3000 } }] })
        res.json(diecisiete);
    });


    //18.Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.
    app.get("/api/usuariosclase8/dieciocho", async(req, res) => {
        const dieciocho = await User.find({ ciudad: "Alemania", $or: [{ salario: { $lt: 4000 } }, { edad: { $gte: 35 } }] })
        res.json(dieciocho);
    });


    //19.Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.
    app.get("/api/usuariosclase8/diecinueve", async(req, res) => {
        const diecinueve = await User.find({ ciudad: {$nin: "Colombia"}, altura: { $lt: 170 } })
        res.json(diecinueve);
    });


    //20.Obtener todos los usuarios que sean de India y que no tengan un salario registrado.*/
    app.get("/api/usuariosclase8/veinte", async(req, res) => {
        const veinte = await User.find({ ciudad: "India", salario: { $exists: false } });
        res.json(veinte)
    });
    

    app.listen(3000, function () {
        console.log('arribita 3000');
    });

}); 