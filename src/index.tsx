import * as React from 'react';
import { DicoogleAccess } from 'dicoogle-client';
import { Webcore, SlotHTMLElement, PluginData } from './webcore';

// global Dicoogle access instance
declare const Dicoogle: DicoogleAccess & Webcore;

interface Props {
  // TODO define props here
}

interface State {
  // TODO define state shere
}

class PluginComponent extends React.Component<Props, State> {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Hello, Dicoogle!</div>;
  }
}

export default class MyPlugin {
  constructor() {
    // TODO initialize plugin here
  }

  render(parent: HTMLElement, slot: SlotHTMLElement): typeof PluginComponent {
    return PluginComponent;
  }

  onReceiveData(data: PluginData) {
    // retrieve data here
  }
}
