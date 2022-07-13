const database = require('../db/config');

class Contenedor {

    async createTeable() {
        try {
            await database.schema.dropTableIfExists('products');
            await database.schema.createTable('products', productTable => {
                productTable.increments('id').primary();
                productTable.string('title').notNullable();
                productTable.integer('price').notNullable();
                productTable.string('thumbnail').notNullable();
            });

            console.log('Table product succesfully created');
            database.destroy();
        } catch (error) {
            console.log(error);
            database.destroy();
        }
    }

    async createProduct() {
        try {
            const products = [
                { title: "Tenis", price: 3151, thumbnail: 'https:fshopx.tk/ProductDetail.aspx?iid=239578453&pr=50.88' },
                { title: "Tenis", price: 3500, thumbnail: 'https://fshopx.tk/ProductDetail.aspx?iid=239578741&pr=51.88' }, { title: "Tenis", price: 2700, thumbnail: 'https://fshopx.tk/ProductDetail.aspx?iid=239578862&pr=53.88' }, { title: "Tenis", price: 4500, thumbnail: 'https://fshopx.tk/ProductDetail.aspx?iid=239578879&pr=53.88' },
                { title: "Tenis", price: 4500, thumbnail: 'https://fshopx.tk/ProductDetail.aspx?iid=239578879&pr=53.88' },
            ]
            await database('products').insert(products);
            console.log('Products created successfully');
            database.destroy();
        } catch (error) {
            console.log(error);
            database.destroy();
        }
    }

    async getProductById(id) {
        try {
            const productId = await database.from('products').select('*').where('id', '=', id);

            console.log(productId);
            database.destroy();
        }
        catch (error) {
            console.log(error);
            database.destroy();
        }
    }

    async getAll() {
        try {
            const products = await database.from('products').select('*');
            console.log(products);
            database.destroy();
        } catch (error) {
            console.log(error);
        }
    }

    async deleteById(id) {
        try {
            const products = await database.from('products').select('*').where('id', '=', id).del();
            console.log('Product deleted successfully');
            database.destroy();
        }
        catch (error) {
            console.log(error);
        }
    }

    async deleteAllProducts() {
        try {
            const products = await database.from('products').select('*').del();
            console.log('Products deleted successfully');
            database.destroy();
        } catch (error) {
            console.log(error);
        }
    }

    async updateProductById(id, title, price, thumbnail) {
        try {
            const product = await database.from('products').select('*').where('id', '=', id).update({ title, price, thumbnail });
            console.log('Product updated successfully');
            database.destroy();
        } catch (error) {
            console.log(error);
            database.destroy();
        }
    }
}

module.exports = Contenedor;