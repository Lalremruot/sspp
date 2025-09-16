
"use client";

import React from 'react'
import HomePages from './HomePage'
import Features from './Features'
import Welcome from './Welcome';
import WhatWeDo from './WhatWeDo';
import Motto from './Motto';
import Footer from './Footer';
import ETutorial from './ETutorial';

export default function MainLayout() {
  return (
    <>
    <HomePages />
    <Features />
    <Welcome />
    <WhatWeDo />
    <Motto />
    <ETutorial />
    <Footer />
    </>
  )
}
