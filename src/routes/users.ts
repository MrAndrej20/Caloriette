import { json as parseJSON } from "body-parser";
import express from "express";
import * as errorHandler from "../lib/async-response-handler";
import { validation } from "../lib/validation-schema";

const app = express();

/**
 * Creates a user - SIGNUP
 */
app.post(
    "/",
    parseJSON(),
    errorHandler.wrap(req => {
        return { done: true };
    })
);

/**
 * Logs in a user - LOGIN
 */
app.post(
    "/login",
    parseJSON(),
    errorHandler.wrap(req => {
        return { done: true };
    })
);

/**
 * Fetch User data
 */
app.get(
    "/:id",
    errorHandler.wrap(req => {
        const { id } = req.params;
        return { done: true };
    })
);

/**
 * Update User data
 */
app.put(
    "/:id",
    errorHandler.wrap(req => {
        const { id } = req.params;
        return { done: true };
    })
);

/**
 * Update User data
 */
app.delete(
    "/:id",
    errorHandler.wrap(req => {
        const { id } = req.params;
        return { done: true };
    })
);

export const route = app;
