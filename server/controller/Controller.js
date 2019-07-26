const getAll = (req, res, next) => {
  const dbInstance = req.app.get("db");

  dbInstance
    .get_items()
    .then(items => res.status(200).send(items))
    .catch(err => {
      res.status(500).send({ errorMessage: "Can't get items, bro." });
      console.log(err);
    });
};

const getOne = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { id } = req.params;

  dbInstance
    .get_item(id)
    .then(item => res.status(200).send(item))
    .catch(err => {
      res.status(500).send({ errorMessage: "Can't get the item, bro..." });
      console.log(err);
    });
};

const create = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { name, price, image_url } = req.body;

  dbInstance
    .create_item([name, price, image_url])
    .then(item => res.status(200).json(item))
    .catch(err => {
      res.status(500).send({ errorMessage: "Can't create item, bro." });
      console.log(err);
    });
};

const deleteItem = (req, res, next) => {
  dbInstance = req.app.get("db");
  const { id } = req.params;
  console.log(id);
  dbInstance
    .delete_item(id)
    .then(inventory => res.status(200).json(inventory))
    .catch(err => {
      res.status(500).send({ errorMessage: "Can't delete item, bro..." });
      console.log(err);
    });
};

const updateItem = (req, res, next) => {
  dbInstance = req.app.get("db");
  const { params, body } = req;

  dbInstance
    .update_item([params.id, body.name, body.price, body.image_url])
    .then(item => res.status(200).json(item))
    .catch(err => {
      res.status(500).send({ errorMessage: "Can't update this, bro..." });
      console.error(err);
    });
};

module.exports = {
  getAll,
  create,
  getOne,
  deleteItem,
  updateItem
};
