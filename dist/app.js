"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config({ path: '../config.env' });
const databaseUrl = process.env.DATABASE_URL;
const databasePassword = process.env.DATABASE_PASSWORD;
if (!databaseUrl || !databasePassword) {
    throw new Error('Database URL or password is not defined in the environment variables');
}
const DB = databaseUrl.replace('<db_password>', databasePassword);
mongoose_1.default
    .connect(DB)
    .then(() => {
    console.log('DB connection successful');
})
    .catch((err) => console.error('DB connection error:', err));
exports.default = app;
//# sourceMappingURL=app.js.map