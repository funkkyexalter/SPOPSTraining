/*
Create a program to manage a photobook using oops

 


To start, create a class called PhotoBook with a private attribute numPages of type int. It must also have a public method GetNumberPages that will return the number of photo book pages.

 

The default constructor will create an album with 16 pages. There will be an additional constructor, with which we can specify the number of pages we want in the album.

 

There is also a BigPhotoBook class whose constructor will create an album with 64 pages.

 

Finally create a PhotoBookTest class to perform the following actions:

 

Create a default photo book and show the number of pages
Create a photo book with 24 pages and show the number of pages
Create a large photo book and show the number of pages
*/

class Photobook{
    private numPages:number;
    constructor(num?: number) {
        if(num == null){
            this.numPages = 16
        } else {
            this.numPages = num
        }
    }
    public GetNumberPages():number{
        return this.numPages;
    }
}
class BigPhotoBook extends Photobook{
    constructor(num: number){
        super(num);
    }
}

class PhotoBookTest {

}