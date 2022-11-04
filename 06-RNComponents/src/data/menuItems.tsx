/* eslint-disable @typescript-eslint/no-unused-vars */
import { MenuItem } from '../interfaces/appInterfaces';


export const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    components: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    components: 'Animation102Screen',
  },
  {
    name: 'Switches',
    icon: 'toggle-outline',
    components: 'SwitchScreen',
  },
  {
    name: 'Alert',
    icon: 'alert-circle-outline',
    components: 'AlertScreen',
  },
  {
    name: 'Text Input',
    icon: 'document-text-outline',
    components: 'TextInputScreen',
  },
  {
    name: 'Pull Refresh',
    icon: 'refresh-circle-outline',
    components: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    components: 'CustomSectionList',
  },
  {
    name: 'Modal Screen',
    icon: 'copy-outline',
    components: 'ModalScreen',
  },
  {
    name: 'Infinite Scroll',
    icon: 'infinite-outline',
    components: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    components: 'SlidesScreen',
  },
  {
    name: 'Themes',
    icon: 'flask-outline',
    components: 'ChangeThemeScreen',
  },
];
