/*
 * File: /app/constants/closed-source.ts
 * Project: portfolio
 * Created: Saturday, 10th December 2022
 * Author: Break Zero
 * -----
 * Copyright 2022, Break Zero
 * -----
 */

import { Project } from "~/typings/projects";

const projectList: Project[] = [
  {
    name: "Rep Rise",
    href: "https://apps.apple.com/us/app/rep-rise-home-workout-buddy/id1246695736",
    tags: ["iOS", "App", "ARKit", "Fitness"],
  },
  {
    name: "Flowplayer iOS Framework",
    href: "https://github.com/flowplayer/flowplayer-ios",
    tags: ["iOS", "Livestream", "AVPlayer", "VOD"],
  },
  {
    name: "Flowplayer tvOS Framework",
    href: "https://github.com/flowplayer/flowplayer-tvos",
    tags: ["tvOS", "Livestream", "AVPlayer", "VOD"],
  },
  {
    name: "Flowplayer OVP UI",
    href: "https://app.flowplayer.com",
    tags: ["Web", "React", "VOD", "Livestream"],
  },
  {
    name: "Wowza Flowplayer Apple SDK",
    href: "https://github.com/flowplayer/apple-sdk-releases",
    tags: ["Swift", "Apple", "AVPlayer", "SDK"],
  },
  {
    name: "Open Sesame - Network Port Surveillance",
    href: "https://github.com/br3akzero/open-sesame",
    tags: ["macOS", "Security", "Network"],
  },
  {
    name: "Professional Portfolio Website",
    href: "https://github.com/br3akzero/portfolio",
    tags: ["Web", "Portfolio", "Remix.run", "CSS"],
  },
  {
    name: "Themeit - Web Theme Switcher",
    href: "https://github.com/br3akzero/themeit",
    tags: ["Web", "CSS", "UX", "Framework"],
  },
  {
    name: "Google IMA SDK for iOS & tvOS",
    href: "https://github.com/br3akzero/google-ima-sdk-xc",
    tags: ["iOS", "tvOS", "SDK", "Ad"],
  },
  {
    name: "LocoPlugin - Localization Tool for Xcode",
    href: "https://github.com/br3akzero/LocoPlugin",
    tags: ["Xcode", "Localization", "Plugin", "Loco"],
  },
  {
    name: "XcodeProjectSecurity",
    href: "https://gitlab.com/SwiftDevCollective/XcodeProjectSecurity.git",
    tags: ["Xcode", "Security", "CI", "Swift"],
  },
];

export default projectList;
