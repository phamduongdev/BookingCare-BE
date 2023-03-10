import express from "express";
import homeController from '../controllers/homeController';
import userController from '../controllers/userController';
import doctorController from '../controllers/doctorController';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/crud', homeController.getCRUD);

    router.post('/create-user', homeController.createUser);
    router.get('/get-all-users', homeController.getAllUsers);
    router.get('/edit-user', homeController.editUser);
    router.post('/edit-put-user', homeController.editPutUser);
    router.get('/delete-user', homeController.deleteUser);

    router.post('/api/login', userController.handleLogin);
    router.get('/api/get-all-users', userController.getAllUsers);
    router.post('/api/create-user', userController.createUser);
    router.put('/api/edit-user', userController.editUser);
    router.delete('/api/delete-user', userController.deleteUser);

    router.get('/api/allcode', userController.getAllCode);

    router.get('/api/top-doctor', doctorController.getTopDoctor);

    return app.use('/', router);
};

module.exports = initWebRoutes;