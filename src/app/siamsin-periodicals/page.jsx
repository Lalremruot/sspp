"use client";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import "react-tabs/style/react-tabs.css"; // removed default styles

const SiamsinPeriodicals = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <Tabs>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Tabs */}
          <TabList
            className="
              flex lg:flex-col gap-2
              lg:gap-4 
              border-b lg:border-b-0 lg:border-r border-gray-200 
              overflow-x-auto lg:overflow-visible 
              pb-2 lg:pb-0
              [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']
            "
          >
            <Tab
              className="whitespace-nowrap px-4 py-2  cursor-pointer text-sm text-gray-600 hover:bg-green-50 hover:text-green-600 focus:outline-none"
              selectedClassName="bg-green-600 text-white font-semibold"
            >
              Siamsin Journal
            </Tab>
            <Tab
              className="whitespace-nowrap px-4 py-2 cursor-pointer text-sm text-gray-600 hover:bg-green-50 hover:text-green-600 focus:outline-none"
              selectedClassName="bg-green-600 text-white font-semibold"
            >
              Siamsin Bulletin
            </Tab>
            <Tab
              className="whitespace-nowrap px-4 py-2 cursor-pointer text-sm text-gray-600 hover:bg-green-50 hover:text-green-600 focus:outline-none"
              selectedClassName="bg-green-600 text-white font-semibold"
            >
              Siamsin Aw
            </Tab>
            <Tab
              className="whitespace-nowrap px-4 py-2 cursor-pointer text-sm text-gray-600 hover:bg-green-50 hover:text-green-600 focus:outline-none"
              selectedClassName="bg-green-600 text-white font-semibold"
            >
              Siamsin News
            </Tab>
          </TabList>

          <div className="lg:flex-1 p-4 bg-white rounded-md shadow-lg border border-gray-200">
            <TabPanel>
              <h2 className="text-xl font-bold mb-2 text-green-600">Siamsin Journal</h2>
              <p>
                Siamsin Journal is a bi-lingual monthly newsletter of
                Siamsinpawlpi General Headquarters. To preserve and promote
                literature, motivate and encourage its readers, Siamsin Journal
                has been distributed in print and online. It also keeps its
                members and well-wishers aloop on the organisation’s activities
                and development in various fields.
              </p>
              <p className="pt-4 text-md font-normal">
                Contact: 9612523135 <br />
                Email: journal@sspp.org.in
              </p>
            </TabPanel>
            <TabPanel>
              <h2 className="text-xl font-bold mb-2 text-green-600">Siamsin Bulletin</h2>
              <p>
                Siamsin Bulletin is another publication by Siamsinpawlpi General
                Headquarters. It provides timely updates, highlights important
                activities, and strengthens communication among members.
              </p>
              <p className="pt-4 text-md font-normal">
                Contact: 9612523135 <br />
                Email: bulletin@sspp.org.in
              </p>
            </TabPanel>
            <TabPanel>
              <h2 className="text-xl font-bold mb-2 text-green-600">Siamsin Aw</h2>
              <p>Content for Siamsin Aw goes here...</p>
            </TabPanel>
            <TabPanel>
              <h2 className="text-xl font-bold mb-2 text-green-600">Siamsin News</h2>
              <p>Content for Siamsin News goes here...</p>
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default SiamsinPeriodicals;
