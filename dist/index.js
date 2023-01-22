"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const hbs_1 = __importDefault(require("hbs"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.set('view engine', 'hbs');
hbs_1.default.registerPartials(__dirname + '/views/partials');
app.use(express_1.default.static('./dist/public'));
app.get('/', (req, res) => {
    res.render(__dirname + '/views/home', {
        name: 'FrankkC',
        title: 'Test',
    });
});
app.get('/generics', (req, res) => {
    res.render(__dirname + '/views/generics', {
        name: 'FrankkC',
        title: 'Test',
    });
});
app.get('/elements', (req, res) => {
    res.render(__dirname + '/views/elements', {
        name: 'FrankkC',
        title: 'Test',
    });
});
app.get('*', (req, res) => {
    res.send('404 | Page not found');
});
app.listen(port, () => {
    console.log(`Page: localhost:${port}/`);
});
//# sourceMappingURL=index.js.map