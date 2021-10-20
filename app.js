const wid = innerWidth <= 720 ? 'block' : 'none';

const app = new Vue({
    el: '#app',
    data: {
        productImg: 'images/image-product-1.jpg',
        thumbnailImgs: [
            'images/image-product-1-thumbnail.jpg',
            'images/image-product-2-thumbnail.jpg',
            'images/image-product-3-thumbnail.jpg',
            'images/image-product-4-thumbnail.jpg',
        ],
        thumbnailBlend: 'thumbnail-blend',
        buttonBlend: 'button-blend',
        count: 0,
        emptyCart: 'flex',
        nonemptyCart: 'none',
        cart: 'none',
        checkNum: 'none',
        mobileMenu: '-100%',
        dulldiv: { right: '-100%', display: 'none' },
        cartMove: '0px',
        moveSigns: wid,
        p: 'non',
        mobileCount: 1
    },
    computed: {
        isZero: function () {
            return this.count === 0;
        },
        price: function () {
            return 125 * this.count;
        }
    },
    methods: {
        incr: function () {
            this.count++;
        },
        decr: function () {
            this.count--;
        },
        mobileIncr: function () {
            if (this.mobileCount !== 4) {
                this.mobileCount++;
                this.productImg = `images/image-product-${this.mobileCount}.jpg`;
            }
        },
        mobileDecr: function () {
            if (this.mobileCount > 1) {
                this.mobileCount--;
                this.productImg = `images/image-product-${this.mobileCount}.jpg`;
            }
        },
        addToCart: function () {
            this.emptyCart = 'none';
            this.nonemptyCart = 'block';
            this.checkNum = 'block';
            this.cartMove = '29px';
        },
        deleteCart: function () {
            this.emptyCart = 'flex';
            this.nonemptyCart = 'none';
            this.count = 0;
            this.checkNum = 'none';
            this.cartMove = '0px';
        },
        mobileMenuAppear: function () {
            this.mobileMenu = '0';
            this.dulldiv = { right: '0', display: 'block' };
        },
        mobileMenuDisappear: function () {
            this.mobileMenu = '-100%';
            this.dulldiv = { right: '-100%', display: 'none' };
        }
    },

})