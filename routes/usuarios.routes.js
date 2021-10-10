/**
 * Path:/api/usuarios
 * / */


    const {Router} = require('express');
    const { check } = require('express-validator');
    const {validarJWT} = require('../middlewares/validar-jwt');
    const {validarCampos} = require('../middlewares/validar-campos');
    const {getUsuarios,crearUsuario, actualizarUsuario, eliminarUsuario} = require('../controllers/usuarios.controllers');

    const router = Router();

    router.get('/', validarJWT, getUsuarios); 
    router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
     //   check('password', 'El password es obligatorio').not.isEmpty(),
        check('password', 'El password es obligatorio' ).not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        validarCampos,
    ],
    crearUsuario);

    router.put('/:id', 
    [
        validarJWT,
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        //check('role', 'El role es obligatorio').not().isEmpty(),
        validarCampos,
    ],
    actualizarUsuario);
    router.delete('/:id', validarJWT, eliminarUsuario);


module.exports=router;