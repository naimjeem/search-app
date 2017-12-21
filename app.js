const search = (url) => {
  const copyText = document.querySelector("#myInput");
  copyText.select();
  document.execCommand("Copy");
	window.open(url + copyText.value, '_blank');
  console.log("Copied the text: " + copyText.value);
}