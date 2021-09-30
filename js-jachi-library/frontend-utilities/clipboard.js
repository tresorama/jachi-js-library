import { notifyUser } from "./notifyUser";

// UTILITIES => BROWSER API => INSERT TEXT INTO USER CLIPBOARD
export const setUserClipboardText = (text) => {
  const tempTextArea = document.createElement("textarea");
  document.body.appendChild(tempTextArea);
  tempTextArea.value = text;
  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 99999); /* For mobile devices */
  document.execCommand("copy");
  removeElFromDOM(tempTextArea);
  notifyUser("Copied to clipboard!!\nNot Always works first time.");
};

/*

Usage

setUserClipboardText('Testo di prova!');

*/
