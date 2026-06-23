"use client"
import React from 'react';
import { ParticleField } from './components/background/ParticleField';
import { Header } from './components/Header';
import { About } from './components/About';
import { PreviousAchievements } from './components/PreviousAchievements';
import { Tracks } from './components/Tracks';
import { EventTimeline } from './components/EventTimeline';
import { Rules } from './components/Rules';
import { Footer } from './components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { Sponsors } from './components/Sponsor';
import { Gallery } from './components/Gallery';

export default function Vashishthackathon() {
  return (
    <div className="min-h-screen bg-gray-900">
      <ParticleField />
      <Header />
      <About />
      <PreviousAchievements />
      <Tracks />
      {/* <EventTimeline /> */}
      {/* <Rules /> */}
      <Sponsors />
      <Gallery />
      <Footer />
      <Analytics/>
    </div>
  );
} 