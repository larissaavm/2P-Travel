// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logos/2P-travel-blue.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "2P Travel",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/creativetim",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/creativetimofficial",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "Quem somos?",
      items: [
        { name: "Sobre", href: "https://www.creative-tim.com/presentation" },
        { name: "blog", href: "https://www.creative-tim.com/blog" },
      ],
    },
    {
      name: "Ajuda & Suporte",
      items: [
        { name: "Contato", href: "https://www.creative-tim.com/contact-us" },
        { name: "Central de Conhecimento", href: "https://www.creative-tim.com/knowledge-center" },
      ],
    },
    {
      name: "Legal",
      items: [
        { name: "Termos & Condições", href: "https://www.creative-tim.com/terms" },
        { name: "Politíca de Privacidade", href: "https://www.creative-tim.com/privacy" },
        { name: "LGPD", href: "https://www.creative-tim.com/license" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Todos os direitos reservados &copy; {date} 2P Travel{" "}
      <MKTypography
        component="a"
        href="https://www.2ptravel.com.br"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        .
      </MKTypography>
      .
    </MKTypography>
  ),
};
