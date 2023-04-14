const fs = require('fs');
const path = require ('path');
const express = require ('express');
const router = express.Router();

const getPath = (name) => path.join(__dirname, '..', 'public', `${name}.html`);
