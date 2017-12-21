const stack = (searchField) => {
  const copyText = document.querySelector("#myInput");
  copyText.select();
  document.execCommand("Copy");
	window.open('https://stackoverflow.com/search?q=' + copyText.value, '_blank');
  console.log("Copied the text: " + copyText.value);
}