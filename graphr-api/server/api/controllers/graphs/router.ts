import express from 'express';
import controller from './controller'
export default express.Router()
    .get('/:id', (req, res) => controller.getGraph(req, res));