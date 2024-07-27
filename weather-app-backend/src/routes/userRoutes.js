const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Route pour créer un utilisateur
router.post('/register', async (req, res) => {
    const { username, password, email } = req.body;
    try {
        const newUser = await prisma.user.create({
            data: {
                username,
                password,
                email,
            },
        });
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route pour obtenir tous les utilisateurs
router.get('/', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;