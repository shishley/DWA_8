class BookPreview {
  constructor(book) {
    this.book = book;
  }

  render() {
    const fragment = document.createDocumentFragment();

    const element = document.createElement("div");

    element.classList.add("book-preview");

    const image = document.createElement("img");

    image.src = book.image;

    element.appendChild(image);

    const title = document.createElement("h3");

    title.innerText = book.title;

    element.appendChild(title);

    const author = document.createElement("div");

    author.innerText = `${book.author} (${new Date(
      book.published
    ).getFullYear()})`;

    element.appendChild(author);

    fragment.appendChild(element);

    return fragment;
  }
}

customElements.define("book-preview", BookPreview);

<book-preview book="." />;

/*
a web component that is easy to use and maintain. The BookPreview class has been encapsulated, 
so that its internal state and methods are not accessible to the outside world.
 This makes the component more secure and easier to test. used the customElements.define()
  method to register BookPreview class as a web component, means that the component can be
   used in any web page that supports custom elements.
*/

/*
1. The easy parts of encapsulating my logic were:
Defining the public interface because already knew of what the component needed to do.
Implementing public interface. Moved component code into class.
Protecting internal state, only needed to add a constructor to the class and make all of the other properties private.

2. The hard parts of encapsulating :
Refactoring the code, because I had to change a lot of the code to make it work with the new class structure.

3. Abstracting the book preview is a good idea because it makes the code more reusable and easier to maintain. 
By abstracting, u then able to move code out of the main application code and into a separate component.
 This makes it easier to reuse the code in other applications.  
*/
