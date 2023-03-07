let id = 1;
class Product {
/**
 * @param {String} name Item Name.
 * @param {String} desc Item Description.
 * @param {String} imgLocation Filename of Item's Image .
 * @param {String} price Item Price (Without $ sign).
 */
    constructor(name, desc, imgLocation, price) {
        this.name = name;
        this.desc = desc;
        this.imgLocation = imgLocation;
        this.price = price;
        this.sku = id;
        id++;
    }
}

let products = new Array();

function addProduct(item) {
    products.push(item);
}

function allProduct() {
    return products;
}

function printItemsOnScreen() {
    for(let i = 0; i < allProduct().length; i++){
        
        //----------Set system currency---------------//
        let currency = '$';
        // -------------------------------------------//

        let item = document.createElement("div");
        let itemCover = document.createElement("div");
        let itemTitle = document.createElement("div");
        let itemDesc = document.createElement("div");
        let itemPrice = document.createElement("div");
        let addToCartButton = document.createElement("div");

        addToCartButton.onclick = function(){
            // delay(1);
            let bought = document.createElement("div");
            bought.classList.add('itemBought');
            let text = document.createTextNode('Item Bought. Thank you for your purchase.');
            bought.appendChild(text);
            let body = document.body.appendChild(bought);
            
            setTimeout(function() {
                bought.style.transition = '1s';
                bought.style.opacity = 0;
            }, 2000);

        }

        //add class names
        item.classList.add('item');
        itemCover.classList.add('itemCover');
        itemTitle.classList.add('itemTitle');
        itemDesc.classList.add('itemDesc');
        itemPrice.classList.add('itemPrice');
        addToCartButton.classList.add('addToCartButton');

        // set content links
        let itemArray = allProduct();
        let title = document.createTextNode(itemArray[i].name);
        let desc = document.createTextNode(itemArray[i].desc);
        let imagePath = itemArray[i].imgLocation;
        let price = document.createTextNode(currency+itemArray[i].price);
        
        //set contents to div
        itemTitle.appendChild(title);
        itemCover.style.backgroundImage = "url("+imagePath+")";
        itemDesc.appendChild(desc);
        itemPrice.appendChild(price);

        //make them subdiv 
        item.appendChild(itemCover);
        item.appendChild(itemTitle);
        item.appendChild(itemDesc);
        item.appendChild(itemPrice);
        item.appendChild(addToCartButton);

        let allItems = document.getElementById('allItems');
        allItems.appendChild(item);
    }
}

//----------------------------MAIN--------------------------------------//

const imageFolderLocation = '../assets/images/';

//addProduct(new Product("Coin", "Buy Items", imageFolderLocation + 'coin.png', "0.99"));
//addProduct(new Product("Diamond", "Buy Premium Items", imageFolderLocation + 'diamond.png', "2.35"));
//addProduct(new Product("Heart", "Life +1", imageFolderLocation + 'heart.png', "1.05"));
//addProduct(new Product("Bag Christmas.png", "Life +1", imageFolderLocation + 'Bag_Christmas.png', "0.35"));
addProduct(new Product("Bag Ditto", "Life +1", imageFolderLocation + 'Bag_Ditto.png', "0.35"));
addProduct(new Product("Bag Music", "Life +1", imageFolderLocation + 'Bag_Music.png', "3.50"));
//addProduct(new Product("Bag Original", "Life +1", imageFolderLocation + 'Bag_Original.png', "0.35"));
//addProduct(new Product("Bag Sleep", "Life +1", imageFolderLocation + 'Bag_Sleep.png', "0.35"));
addProduct(new Product("Bag Spooky", "Life +1", imageFolderLocation + 'Bag_Spooky.png', "50.00"));
//addProduct(new Product("Bag Sus", "Life +1", imageFolderLocation + 'Bag_Sus.png', "0.35"));

printItemsOnScreen();


//------------------------------------------------------------------------//
