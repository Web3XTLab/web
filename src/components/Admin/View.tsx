import { Main } from "./styledComponents/Main";
import { AppInfo } from "./components/AppInfo";
import { Buy } from "./components/Buy";
import { ComponentWrapper } from "./styledComponents/ComponentWrapper";
import { Sell } from "./components/Sell";
import { URIList } from "./components/URIList";
import { Verify } from "./components/Verify";
import { Title } from "./styledComponents/Title";
import { ViewWrapper } from "./styledComponents/ViewWrapper";

export function Admin() {
  return (
    <ViewWrapper>
      <Main>
        <Title>Admin Page</Title>
        <ComponentWrapper>
          <Buy />
        </ComponentWrapper>
        <ComponentWrapper>
          <Sell />
        </ComponentWrapper>
        <ComponentWrapper>
          <Verify />
        </ComponentWrapper>
        <ComponentWrapper>
          <AppInfo />
        </ComponentWrapper>
        <ComponentWrapper>
          <URIList />
        </ComponentWrapper>
      </Main>
    </ViewWrapper>
  );
}
