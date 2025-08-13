"use client";
import { useMemo, useState } from "react";
import LeaderRing from "../../../components/LeaderRing";

const COLORS = {
  gold:  "#f5d44f",
  silver:"#bfc7d5",
  bronze:"#d09a6f",
  brand: "#7c5cff",
  green: "#34d399"
};

const ALL = [
  { id:"you",      name:"You",       city:"Kelowna", country:"Canada", relation:"team",     invites:42,  sales:18,  content:27,  activity:86, delta:+12 },
  { id:"naya",     name:"Naya",      city:"Vancouver", country:"Canada", relation:"friends", invites:38,  sales:22,  content:35,  activity:91, delta:+6  },
  { id:"olivia",   name:"Olivia",    city:"Toronto", country:"Canada", relation:"team",     invites:31,  sales:15,  content:42,  activity:84, delta:+9  },
  { id:"e
