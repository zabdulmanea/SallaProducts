
// get all needed data from api then generate JSON variable for use later
function productsDetails(APIData, callback) {

    const products = []

    for (const product of APIData) {

        categories_names = []
        categories_ids = []
        for (const category of product.categories) {
            categories_names.push(category.name);
            categories_ids.push(category.id);
        }
        images_url = []
        for (const image of product.images) {
            images_url.push(image.url);
        }

        products.push({
            'Product ID': product.id,
            'Product SKU': product.sku,
            'Product Price (Before Discount)': product.regular_price.amount,
            'Product Price (After Discount)': product.sale_price.amount,
            'Quantity': product.quantity,
            'Promotion Title': product.promotion.title,
            'Product Name': product.name,
            'Metadata Title': product.metadata.title,
            'Metadata Description': product.metadata.description,
            'Description': product.description,
            'Categories Names': categories_names.join('\n'),
            'Categories IDs': categories_ids.join('\n'),
            'Product Image URLs': images_url.join('\n')
        })
    }

    callback(null, products);
}

module.exports = { productsDetails }