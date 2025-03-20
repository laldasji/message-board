import { Router } from "express";

const newMessageRouter = (messages) => {
    const router = Router();

    router.get('/', (req, res) => {
        res.render('newMessageForm');
    })

    router.post('/', (req, res) => {
        console.log(req.body);
        if (req.body.text.length > 0 && req.body.text.length > 0) {
            messages.push({
                text: req.body.text,
                user: req.body.user,
                added: new Date()
            })
        }
        res.redirect('/');
    })

    return router;
}

export default newMessageRouter;