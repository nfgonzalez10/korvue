import React from "react";
import "./Tabs.scss";

interface ITab {
  label: string | undefined;
  activeTab: boolean;
  selectTab: (arg: string | undefined) => void;
}
const Tab: React.FC<ITab> = ({ label, activeTab, selectTab }) => {
  return (
    <li
      key={label}
      value={label?.toString()}
      className={`tabs__tab ${activeTab ? "tabs__tab--active" : ""}`}
      onClick={() => selectTab(label)}>
      {label}
    </li>
  );
};

interface ITabs {
  activeTab: string;
  tabs: Array<string>;
  setActiveTab: (arg: string) => void;
}

const Tabs: React.FC<ITabs> = ({ activeTab, tabs, setActiveTab }) => {
  return (
    <>
      <ol className="tabs">
        {tabs?.map((key) => {
          const label = key?.toString()?.replace("_", " ");
          return (
            <Tab
              key={key}
              label={label}
              activeTab={activeTab === key}
              selectTab={() => setActiveTab(key)}
            />
          );
        })}
      </ol>
    </>
  );
};

export default Tabs;
