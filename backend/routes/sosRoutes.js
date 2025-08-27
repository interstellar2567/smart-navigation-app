import express from 'express';
import { sendSOS } from '../controllers/sosController.js';
const router = express.Router();

// POST /api/sos - Send SOS to nearby locations
router.post('/', sendSOS);

export default router;
