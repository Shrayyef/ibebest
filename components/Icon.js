/** @format */

import * as AntDesignICon from "react-icons/ai";
import * as FontBoxIcon from "react-icons/bi";
import * as FontBsICon from "react-icons/bs";
import * as FontDevIcon from "react-icons/di";
import * as FontFaICon from "react-icons/fa";
import * as FontFcICon from "react-icons/fc";
import * as FontFiICon from "react-icons/fi";
import * as FontGiICon from "react-icons/gi";
import * as FontGithubICon from "react-icons/go";
import * as FontGrommetICon from "react-icons/gr";
import * as FontHeroICon from "react-icons/hi";
import * as FontIconMoonICon from "react-icons/im";
import * as FontIonIconsICon from "react-icons/io";
import * as FontIonIcons5ICon from "react-icons/io5";
import * as FontMaterialICon from "react-icons/md";
import * as FontRemixICon from "react-icons/ri";
import * as FontTypeICon from "react-icons/ti";

const AntICon = AntDesignICon;
const FaICon = FontFaICon;
const FCICon = FontFcICon;
const FIICon = FontFiICon;
const BSICon = FontBsICon;
const GIICon = FontGiICon;
const BoxIcon = FontBoxIcon;
const DevIcon = FontDevIcon;
const GithubIcon = FontGithubICon;
const GrommetIcon = FontGrommetICon;
const HeroIcons = FontHeroICon;
const IconMoonIcons = FontIconMoonICon;
const IonIcons = FontIonIconsICon;
const IonIcons5 = FontIonIcons5ICon;
const RemixICon = FontRemixICon;
const MaterialICon = FontMaterialICon;
const TypeICon = FontTypeICon;

const Icon = ({ type, name, secondary, ...props }) => {
  let IconComponent = AntICon[name];
  switch (type) {
    case "antdesign":
      IconComponent = AntICon[name];
      return (
        <IconComponent
          className={`${secondary ? `icon-secondary` : ""}`}
          {...props}
        />
      );
    case "fa":
      IconComponent = FaICon[name];
      return (
        <IconComponent
          className={`${secondary ? `icon-secondary` : ""}`}
          {...props}
        />
      );
    case "fc":
      IconComponent = FCICon[name];
      return (
        <IconComponent
          className={`${secondary ? `icon-secondary` : ""}`}
          {...props}
        />
      );
    case "feather":
      IconComponent = FIICon[name];
      return (
        <IconComponent
          className={`${secondary ? `icon-secondary` : ""}`}
          {...props}
        />
      );
    case "bootstrap":
      IconComponent = BSICon[name];
      return (
        <IconComponent
          className={`${secondary ? `icon-secondary` : ""}`}
          {...props}
        />
      );
    case "gameicon":
      IconComponent = GIICon[name];
      return (
        <IconComponent
          className={`${secondary ? `icon-secondary` : ""}`}
          {...props}
        />
      );
    case "boxicon":
      IconComponent = BoxIcon[name];
      return (
        <IconComponent
          className={`${secondary ? `icon-secondary` : ""}`}
          {...props}
        />
      );
    case "devicon":
      IconComponent = DevIcon[name];
      return (
        <IconComponent
          className={`${secondary ? `icon-secondary` : ""}`}
          {...props}
        />
      );
    case "github":
      IconComponent = GithubIcon[name];
      return (
        <IconComponent
          className={`${secondary ? `icon-secondary` : ""}`}
          {...props}
        />
      );
    case "grommet":
      IconComponent = GrommetIcon[name];
      return (
        <IconComponent
          className={`${secondary ? `icon-secondary` : ""}`}
          {...props}
        />
      );
    case "heroicons":
      IconComponent = HeroIcons[name];
      return (
        <IconComponent
          className={`${secondary ? `icon-secondary` : ""}`}
          {...props}
        />
      );
    case "iconmoon":
      IconComponent = IconMoonIcons[name];
      return (
        <IconComponent
          className={`${secondary ? `icon-secondary` : ""}`}
          {...props}
        />
      );
    case "ionicons":
      IconComponent = IonIcons[name];
      return (
        <IconComponent
          className={`${secondary ? `icon-secondary` : ""}`}
          {...props}
        />
      );
    case "ionicons5":
      IconComponent = IonIcons5[name];
      return (
        <IconComponent
          className={`${secondary ? `icon-secondary` : ""}`}
          {...props}
        />
      );
    case "remixicon":
      IconComponent = RemixICon[name];
      return (
        <IconComponent
          className={`${secondary ? `icon-secondary` : ""}`}
          {...props}
        />
      );
    case "material":
      IconComponent = MaterialICon[name];
      return (
        <IconComponent
          className={`${secondary ? `icon-secondary` : ""}`}
          {...props}
        />
      );
    case "typeicons":
      IconComponent = TypeICon[name];
      return (
        <IconComponent
          className={`${secondary ? `icon-secondary` : ""}`}
          {...props}
        />
      );

    default:
      return (
        <IconComponent
          className={`${secondary ? `icon-secondary` : ""}`}
          {...props}
        />
      );
  }
};

export default Icon;
