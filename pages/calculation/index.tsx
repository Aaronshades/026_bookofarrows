import React from "react";
import { Tabs } from "@mantine/core";
import { Markdown, Settings } from 'tabler-icons-react';

import { CalculateForm, Wrapper } from "../../components/";

const CalculatePage: React.FC = () => {
  return (
    <Wrapper>
      <Tabs variant="outline" tabPadding="md">
        <Tabs.Tab label="Siktemerker" icon={<Markdown size={14} />}>
          <CalculateForm/>
        </Tabs.Tab>
        <Tabs.Tab label="Beregn siktemerker" icon={<Settings size={14} />}>Settings tab content</Tabs.Tab>
      </Tabs>
    </Wrapper>
  );
};

export default CalculatePage;
