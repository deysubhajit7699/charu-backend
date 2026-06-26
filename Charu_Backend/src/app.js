import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import { notFound } from './middleware/notFound.js';
import { errorHandler } from './middleware/errorHandler.js';

import homeRoutes from './features/home/home.routes.js';
import productRoutes from './features/products/product.routes.js';
import categoryRoutes from './features/categories/category.routes.js';
import aboutRoutes from './features/about/about.routes.js';

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// Routes map directly to frontend pages
app.use('/api/home', homeRoutes);           // HOME PAGE
app.use('/api/products', productRoutes);    // PRODUCTS PAGE
app.use('/api/categories', categoryRoutes); // used by Products page filters
app.use('/api/about', aboutRoutes);         // ABOUT PAGE

app.use(notFound);
app.use(errorHandler);

export default app;