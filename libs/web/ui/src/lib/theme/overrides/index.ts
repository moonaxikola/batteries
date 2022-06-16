import { Theme } from '@mui/material/styles';

import fab from './fab';
import card from './card';
import chip from './chip';
import tabs from './tabs';
import menu from './menu';
import link from './link';
import lists from './list';
import table from './table';
import alert from './alert';
import badge from './badge';
import paper from './paper';
import input from './input';
import radio from './radio';
import drawer from './drawer';
import dialog from './dialog';
import avatar from './avatar';
import rating from './rating';
import slider from './slider';
import button from './button';
import switchStyles from './switch';
import selectStyles from './select';
import svgicon from './svg-icon';
import tooltip from './tooltip';
import popover from './popover';
import stepper from './stepper';
import datagrid from './data-grid';
import skeleton from './skeleton';
import backdrop from './backdrop';
import progress from './progress';
import timeline from './timeline';
import treeview from './tree-view';
import checkbox from './checkbox';
import accordion from './accordion';
import typography from './typography';
import pagination from './pagination';
import breadcrumbs from './breadcrumbs';
import buttongroup from './button-group';
import cssbaseline from './css-baseline';
import autocomplete from './autocomplete';
import togglebutton from './toggle-button';
import controllabel from './controlLabel';
import loadingbutton from './loading-button';

export default function componentsOverrides(theme: Theme) {
  return Object.assign(
    fab(theme),
    tabs(theme),
    chip(theme),
    card(theme),
    menu(theme),
    link(theme),
    input(theme),
    radio(theme),
    badge(theme),
    lists(theme),
    table(theme),
    paper(theme),
    alert(theme),
    switchStyles(theme),
    selectStyles(theme),
    button(theme),
    rating(theme),
    dialog(theme),
    avatar(theme),
    slider(theme),
    drawer(theme),
    stepper(theme),
    tooltip(theme),
    popover(theme),
    svgicon(theme),
    checkbox(theme),
    datagrid(theme),
    skeleton(theme),
    timeline(theme),
    treeview(theme),
    backdrop(theme),
    progress(theme),
    accordion(theme),
    typography(theme),
    pagination(theme),
    buttongroup(theme),
    breadcrumbs(theme),
    cssbaseline(theme),
    autocomplete(theme),
    controllabel(theme),
    togglebutton(theme),
    loadingbutton(theme),
  );
}
