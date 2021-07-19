import React from 'react';
import { NavBar } from '../../components/nav-bar/nav-bar.component';
import { LayoutProps } from '../../types/layouts';
import './general.layout.sass'

export const GeneralLayout = (props: LayoutProps) => (<>
  <NavBar />
  { props.children }
</>)