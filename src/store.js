import { writable } from "svelte/store";

export function setCookie(cname, cvalue) {
  var d = new Date();
  d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export const Case = {
   FitCon: "fitnessConnection",
   MoneyGram: "MoneyGram",
   Canvas: "Canvas"
};
export const darkMode = writable(false);
export const caseStudy = writable('');
export const caseStudyContentHover = writable(false);