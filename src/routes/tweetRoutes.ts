import { Router } from 'express';

const router = Router();

router.post('/', (_req, res) => {
  res.status(501).json({ error: `Not posted` });
});

router.get('/', (_req, res) => {
  res.status(501).json({ error: `Not gotten` });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.status(501).json({ error: `Not gotten ${id}` });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not updated ${id}` });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not deleted ${id}` });
});

export default router;
