import {
  Nav,
  INavLink,
  INavStyles,
  INavLinkGroup,
} from "@fluentui/react/lib/Nav";
import { SearchBox } from "@fluentui/react/lib/SearchBox";

const navStyles: Partial<INavStyles> = {
  root: {
    width: 296,
    boxSizing: "border-box",
    borderRight: "1px solid #eee",
    overflowY: "auto",
    marginTop: 12,
  },
};

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: "Popular Apps",
        url: "#",
        expandAriaLabel: "Expand Home section",
        collapseAriaLabel: "Collapse Home section",
        links: [
          {
            name: "Activity",
            url: "#",
            key: "key1",
          },
          {
            name: "Free",
            url: "#",
            key: "key2",
          },
        ],
        isExpanded: true,
      },
      {
        name: "Games",
        url: "#",
        key: "key3",
        isExpanded: true,
      },
      {
        name: "Work",
        url: "#",
        key: "key4",
      },
      {
        name: "Music",
        url: "#",
        key: "key5",
      },
      {
        name: "Video",
        url: "#",
        key: "key6",
      },
      {
        name: "TopFree Apps",
        url: "#",
        icon: "News",
        key: "key7",
      },
    ],
  },
];

export const NavBasicExample: React.FunctionComponent = () => {
  return (
    <>
      <SearchBox placeholder="Search" />
      <Nav
        onLinkClick={_onLinkClick}
        selectedKey=""
        ariaLabel="Nav basic example"
        styles={navStyles}
        groups={navLinkGroups}
      />
    </>
  );
};

function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
  if (item && item.name === "News") {
    alert("News link clicked");
  }
}

export default NavBasicExample;
