import { Router } from 'express';
import { hello } from '../controllers/controllers.js';

const router = Router();

router.get('/', async (req, res) => {
  await hello(req, res);
});

export default router;
