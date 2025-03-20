import { Router } from "express";

const indexRouter = (messages) => {
    const router = Router();

    router.get('/', (req, res) => {
        res.render('index', {
            title: messages.length > 3 ? 'Message Board' : 'Mini Message Board',
            messages: messages
        });
    })

    router.get('/id/:index', (req, res) => {
        const { index } = req.params;
        if (index >= messages.length || index < 0) {
            res.render('index', {
                title: `Message id out of range!`,
                messages: []
            });
        } else {
            res.render('index', {
                title: `Message id \{${index}\}`,
                messages: [messages[index]]
            });
        }
    })

    return router;
}

export default indexRouter;