import germanFlag from "../../Images/German-flag.svg";
import ukFlag from "../../Images/UK-flag.svg";

export default function LanguageGallery() {
  return [
    {
      id: "german",
      name: "German",
      logoTitle: "German",
      image: germanFlag,
    },
    {
      id: "english",
      name: "English",
      logoTitle: "UK",
      image: ukFlag,
    },
  ];
}
