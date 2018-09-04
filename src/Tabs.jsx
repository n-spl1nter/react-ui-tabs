import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from "./Tab";

class Tabs extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeTabIndex: this.props.defaultActiveTabIndex
        };
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.activeTabIndex !== this.state.activeTabIndex){
            this.props.onTabChange(this.state.activeTabIndex);
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        return this.state.activeTabIndex !== nextState.activeTabIndex;
    }

    renderTabs = () => {
        return React.Children.map(this.props.children, (child, index) => {
            return React.cloneElement(child, {
                clickHandler: this.handleTabClick,
                tabIndex: index,
                isActive: this.state.activeTabIndex === index
            });
        });
    };

    renderActiveTabContent = () => {
        if(this.props.children[this.state.activeTabIndex]){
            if(typeof this.props.children[this.state.activeTabIndex].props.children === "function"){
                return this.props.children[this.state.activeTabIndex].props.children();
            }
            return this.props.children[this.state.activeTabIndex].props.children;
        }
        return null;
    };

    handleTabClick = tabIndex => {
        this.setState({ activeTabIndex: tabIndex });
    };

    render(){
        return(
            <div className="tabs">
                <ul className="tabs__list">
                    {this.renderTabs()}
                </ul>
                <div className="tabs__content">
                    {this.renderActiveTabContent()}
                </div>
            </div>
        );
    }
}

Tabs.propTypes = {
    defaultActiveTabIndex: PropTypes.number,
    onTabChange: PropTypes.func
};

Tabs.defaultProps = {
    defaultActiveTabIndex: 0,
    onTabChange: tabNumber => {}
};

export default Tabs;
