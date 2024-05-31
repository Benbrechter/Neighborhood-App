const Item = require('../models/Item');

module.exports = {
    // create new item
    async createItem({ body }, res) {
        try {
            const newItem = await Item.create(body);
            res.status(201).json(newItem);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    // delete an existing item by ID
    async deleteItem({ params }, res) {
        try {
            const deletedItem = await Item.findByIdAndDelete(params.itemId);
            if (!deletedItem) {
                return res.status(404).json({ message: 'Item not found' });
            }
            res.json({ message: 'Item deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    // update an existing item by ID
    async editItem({ params, body }, res) {
        try {
            const updatedItem = await Item.findByIdAndUpdate(params.itemId, body, { new: true });
            if (!updatedItem) {
                return res.status(404).json({ message: 'Item not found' });
            }
            res.json(updatedItem);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
};