class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
    }

    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000, img:'images/notebook.png' },
            { id: 2, title: 'Mouse', price: 20, img:'images/mouse.png' },
            { id: 3, title: 'Keyboard', price: 200, img:'images/keyboard.png' },
            { id: 4, title: 'Gamepad', price: 50, img:'images/gamepad.png'}
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render())
        }
    }
    getSum() {
        let s = 0;
        this.goods.forEach(item => {
            s += item.price;
            console.log(s);     

        })


    }
}


class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;

    }

    render() {
        return `<div class="product-item" data-id="${this.id}", data-name="${this.title}", data-price="${this.price}" >
                <img src="${this.img}" alt="Some img">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}



let list = new ProductsList();
list.render();
list.getSum();

class Basket {
    addstuff() {

    }
    removestuff() {

    }
    changestuff() {

    }

    render() {

    }
}

class ElemBasket {
    render() { }
}