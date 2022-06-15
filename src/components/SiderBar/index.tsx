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
        url: "http://example.com",
        expandAriaLabel: "Expand Home section",
        collapseAriaLabel: "Collapse Home section",
        links: [
          {
            name: "Activity",
            url: "http://msn.com",
            key: "key1",
            target: "_blank",
          },
          {
            name: "Free",
            url: "http://msn.com",
            key: "key2",
            target: "_blank",
          },
        ],
        isExpanded: true,
      },
      {
        name: "Games",
        url: "http://example.com",
        key: "key3",
        isExpanded: true,
        target: "_blank",
      },
      {
        name: "Work",
        url: "http://msn.com",
        key: "key4",
        target: "_blank",
      },
      {
        name: "Music",
        url: "http://msn.com",
        key: "key5",
      },
      {
        name: "Video",
        url: "http://msn.com",
        key: "key6",
        target: "_blank",
      },
      {
        name: "TopFree Apps",
        url: "http://cnn.com",
        icon: "News",
        key: "key7",
        target: "_blank",
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
