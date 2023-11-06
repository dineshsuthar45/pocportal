import Word from "../../assets/Image/word.png";
import Mail from "../../assets/Image/mail.png";
import Excel from "../../assets/Image/excel.png";
import Pdf from "../../assets/Image/pdf.png";

interface ITopbarLogo {
  id: number;
  image: string;
  alt: string;
}

const topBarlogo: ITopbarLogo[] = [
  {
    id: 1,
    image: Word,
    alt: "Word",
  },
  {
    id: 2,
    image: Mail,
    alt: "Mail",
  },
  {
    id: 3,
    image: Excel,
    alt: "Excel",
  },
  {
    id: 4,
    image: Pdf,
    alt: "Pdf",
  },
];

export { topBarlogo };
