/*
Create a program to manage a photobook using oops
To start, create a class called PhotoBook with a private attribute numPages of type int.
It must also have a public method GetNumberPages that will return the number of photo book pages.

The default constructor will create an album with 16 pages. There will be an additional constructor,
with which we can specify the number of pages we want in the album.

There is also a BigPhotoBook class whose constructor will create an album with 64 pages.

Finally create a PhotoBookTest class to perform the following actions:

Create a default photo book and show the number of pages
Create a photo book with 24 pages and show the number of pages
Create a large photo book and show the number of pages
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Photobook = /** @class */ (function () {
    function Photobook(num) {
        if (num == null) {
            this.numPages = 16;
        }
        else {
            this.numPages = num;
        }
    }
    Photobook.prototype.GetNumberPages = function () {
        return "The number of pages = " + this.numPages + "\n";
    };
    return Photobook;
}());
var BigPhotoBook = /** @class */ (function (_super) {
    __extends(BigPhotoBook, _super);
    function BigPhotoBook(num) {
        return _super.call(this, num) || this;
    }
    return BigPhotoBook;
}(Photobook));
var PhotoBookTest = /** @class */ (function () {
    function PhotoBookTest() {
        this.defaultPhotoBook = new Photobook();
        this.bitBiggerPhotoBook = new Photobook(24);
        this.largePhotoBook = new BigPhotoBook(200);
    }
    PhotoBookTest.prototype.showPages = function () {
        console.log(this.defaultPhotoBook.GetNumberPages());
        console.log(this.bitBiggerPhotoBook.GetNumberPages());
        console.log(this.largePhotoBook.GetNumberPages());
    };
    return PhotoBookTest;
}());
var phoneBookTest = new PhotoBookTest();
phoneBookTest.showPages();
