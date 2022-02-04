const router = require("express").Router();

router.get("/add-product", (req, res) => {
  res.send(
    "<form action='/admin/add-product' method='POST'> <input type='text' name = 'title' /> <button>Add</button></form>"
  );
});

router.post("/add-product", (req, res) => {
  res.redirect("/admin/add-product");
});

module.exports = router;
