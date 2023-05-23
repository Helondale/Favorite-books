let favoriteBooks = [
	{
		title: "Harry Potter and the Goblet of Fire",
		author: "J.K. Rowling",
		year: 2000,
		characters: ["Harry", "Ron", "Hermione", "Fred"],
		isNewerThan2000: true,
	},
	{
		title: "Utas es holdvilag",
		author: "Szerb Antal",
		year: 1937,
		characters: ["Mihaly", "Erzsi", "Eva", "Ervin"],
		isNewerThan2000: false,
	}
];

for (let book of favoriteBooks) {
	console.log(book.title)
  };

for (let i = 0; i< favoriteBooks.length; i++) {
	console.log(favoriteBooks[i].author)
};
if (favoriteBooks[0].isNewerThan2000 === true) {
	let bookTitle = favoriteBooks[0].title
	console.log("This book is newer than 2000: ", bookTitle);
}else{
	let bookTitle = favoriteBooks[0].title
	console.log("This book is older than 2000: ", bookTitle);
};
if (favoriteBooks[0].isNewerThan2000 !== true) {
	let bookTitle = favoriteBooks[0].title
	console.log("This book is older than 2000: ", bookTitle);
}else{
	let bookTitle = favoriteBooks[0].title
	console.log("This book is newer than 2000: ", bookTitle);
};
if (favoriteBooks[1].isNewerThan2000 !== true) {
	let bookTitle = favoriteBooks[1].title
	console.log("This book is older than 2000: ", bookTitle);
}else{
	let bookTitle = favoriteBooks[1].title
	console.log("This book is newer than 2000: ", bookTitle);

};
if (favoriteBooks[0].year >= 2000) {
	let bookTitle = favoriteBooks[0].title
	console.log("This book is newer than 2000: ", bookTitle);
}else{ 
	let bookTitle = favoriteBooks[0].title
	console.log("This book is older than 2000: ", bookTitle);
}
if (favoriteBooks[1].year >= 2000) {
	let bookTitle = favoriteBooks[1].title
	console.log("This book is newer than 2000: ", bookTitle);
}else{ 
	let bookTitle = favoriteBooks[1].title
	console.log("This book is older than 2000: ", bookTitle);
};
for (let book of favoriteBooks) {
	let bookTitle = favoriteBooks[0].title;
	if (book.year >= 2000) {
		console.log("This book is newer than 2000: ", bookTitle);
	}else{ 
		console.log("This book is older than 2000: ", bookTitle);
	}
	};

for (let book of favoriteBooks) {
	let bookTitle = favoriteBooks[1].title;
	if (book.year >= 2000) {
		console.log("This book is newer than 2000: ", bookTitle);
	}else{ 
		console.log("This book is older than 2000: ", bookTitle);
	}
	};