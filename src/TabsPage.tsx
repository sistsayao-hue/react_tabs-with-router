import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@mate-academy/react_tabs-js';

import { Tab as TabType } from './types/Tab';

const tabs: TabType[] = [
  {
    id: 'tab-1',
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    id: 'tab-2',
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    id: 'tab-3',
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

export const TabsPage = () => (
  <>
    <h1 className="title">Tabs page</h1>

    <Tabs>
      <TabList>
        {tabs.map(tab => (
          <Tab key={tab.id}>
            {tab.title}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {tabs.map(tab => (
          <TabPanel key={tab.id}>
            {tab.content}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  </>
);
