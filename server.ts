import express from 'express';
import userRoutes from './src/routes/boxPlotRoutes'

const app = express();
app.use(express.json());
app.use('/api/boxplot', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running'))