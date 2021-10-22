import { Router } from 'express';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { AuthenticateUserController } from './useCases/authenticateUser/AuthenticateUserController';
import { CreateUserController } from './useCases/creationUser/CreateUserController';
import { RefreshTokenUserController } from './useCases/refreshTokenUser/RefreshTokenUserConstroller';

const router = Router();

const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();
const refreshTokenUserController = new RefreshTokenUserController();

router.post("/refresh-token", refreshTokenUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/users", createUserController.handle);

router.get("/courses", ensureAuthenticated, (request, response) => {
    return response.json([
        { id:1, name: "NodeJS"},
        { id:2, name: "NodeJS1"},
        { id:3, name: "NodeJS2"},
        { id:4, name: "NodeJS3"},
        { id:5, name: "NodeJS4"},
        { id:6, name: "NodeJS5"},
    ])
});

export { router };

