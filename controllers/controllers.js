const express = require('express');
const path = require("path");
const fs = require("fs");

const items = path.join(__dirname, "db", "items.json");

const createItem = (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.join(newItem);
};

const getAllItem = (req, res) => {
  res.join(items);
};

const getOneItem = (req, res) => {
  const id = req.params.id;
  const newItem = items.find(newItem => newItem.id == id);

  if (newItem == -1)
  {
    res.status(404);
    res.end("Item not found");
    return;
  }
  res.join(newItem);
};

const updateItem = (req, res) => {
  const id = req.params.id
  const body = req.body
  const newItem = items.findIndex(body => body.id == id)

  if (newItem == -1)
  {
    res.status(404);
    res.end("Item not found");
    return;
  }

    items[newItem] = body
    res.json(body)
}

const deleteItem = (req, res) => {
  const id = req.params.id
  const newItem = items.findIndex(item => item.id == id)
  if (newItem == -1)
  {
    res.status(404);
    res.end("Book not found");
    return;
  }

    items.splice(newItem, 1);
    res.json(items)
}

module.exports = {
  createItem,
  getAllItem,
  getOneItem,
  updateItem,
  deleteItem
};