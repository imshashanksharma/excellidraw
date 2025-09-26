import express from "express";
import jwt from "jsonwebtoken";
import { middleware } from "./middleware";
import { CreateUserSchema, SigninSchema, CreateRoomSchema } from "@repo/common/types";
import { JWT_SECRET } from "@repo/backend-common/config";
const app = express();

app.post("/signup", (req, res) => {
    const parsedData = CreateUserSchema.safeParse(req.body);
    if (!parsedData.success) {
        
    }
})

app.post("/signin", (req, res) => {
    const data = CreateUserSchema.safeParse(req.body);
    if (!data.success) {
        return res.json({
            message : "Incorrect outputs"
        })
    }
    const userId = 1;
    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        token
    })
})

app.post("/room", middleware, (req, res) => {

})




app.listen(3001);
