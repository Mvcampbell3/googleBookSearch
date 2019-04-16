const express = require("express");
const router = express.Router();

const Book = require("../../models/Book");

// Routes
router.get("/", (req, res) => {
  Book.find()
    .sort({ date: -1 })
    .then(books => res.json(books))
    .catch(err => res.status(500).json(err))
})

router.post("/", (req, res) => {
  const newBook = new Book({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    img_url: req.body.img_url,
    bookID: req.body.bookID,
    link: req.body.link
  });

  newBook.save()
    .then(book => res.json(book))
    .catch(err => res.status(500).json(err));
})

router.delete("/:id", (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(del => {
      if (del === null) {
        res.status(404).json({ msg: "Book Id was invalid" })
      } else {
        res.json(del)
      }
    })
    .catch(err => res.status(404).json({ error: err }))
})

router.put("/:id", (req, res) => {
  Book.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(result => {
      if (result === null) {
        res.status(404).json({ msg: "Book Id was invalid" })
      } else {
        res.json(result)
      }
    })
    .catch(err => res.status(404).json({ error: err }))
})

module.exports = router;