import { Router } from 'express';

const router = Router();
router.get('/', (req, res) => {
  res.send('show product list');
});

router.get('/:id', (req, res) => {
  res.send('show product ID '.concat(req.params.id));
});


export default router;

