# React UI Tabs Component

## [Demo](https://n-spl1nter.github.io/react-ui-tabs/)

## Install
```sh
npm install --save react-ui-tabs
```
## Usage
```javascript
import React from 'react';
import Tabs, { Tab } from 'react-ui-tabs';
const YourComponent = () => {
    return(
        <Tabs>
            <Tab tabName="Tab 1">
                Content 1
            </Tab>
            <Tab tabName="Tab 2">
                Content 2
            </Tab>
            <Tab tabName="Tab 2">
                Content 3
            </Tab>
        </Tabs>
    );
};
```
## Tab props

Option | Component | Type | Description | Required 
:---: | :---: | :---: | :---: | :---:
`defaultActiveTabIndex` | *Tabs* | *Number* | Initial active tab number | *No*
`tabName` | *Tab* | *String* | Text displayed at tab | *Yes*
`tabClassName` | *Tab* | *String* | Additional className for tab item. | *No*
