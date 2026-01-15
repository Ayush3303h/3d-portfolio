"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "QrFoodOdering",
    description: `QR Food Ordering System is a full-stack web application that enables customers to scan a QR code to instantly access a digital menu, add items to cart, and place orders seamlessly. The system features AI-powered menu extraction, real-time order handling, and an admin dashboard for managing menus and orders, improving both customer experience and restaurant operations.`,
    link: "https://streake.in/recruiterscafe?table=12",
    images: [
      "/assets/projects-screenshots/QrFoodOdering/1.png",
      "/assets/projects-screenshots/QrFoodOdering/2.png",
      "/assets/projects-screenshots/QrFoodOdering/3.png",
      "/assets/projects-screenshots/QrFoodOdering/4.png",
      "/assets/projects-screenshots/QrFoodOdering/5.png"
    ],
  },
  {
    id: 2,
    name: "UrbanHealthScope",
    description: `A responsive health-data visualization app built with React.js and Tailwind CSS, featuring interactive charts, clean component architecture, and optimized client-side rendering for fast performance.`,
    link: "https://urban-health-scope.vercel.app/",
    images: [
      "/assets/projects-screenshots/UrbanHealthScope/1.png",
      "/assets/projects-screenshots/UrbanHealthScope/2.png",
      "/assets/projects-screenshots/UrbanHealthScope/3.png",
      "/assets/projects-screenshots/UrbanHealthScope/4.png",
      "/assets/projects-screenshots/UrbanHealthScope/5.png",
      "/assets/projects-screenshots/UrbanHealthScope/6.png",
      "/assets/projects-screenshots/UrbanHealthScope/7.png",
      "/assets/projects-screenshots/UrbanHealthScope/8.png",
      "/assets/projects-screenshots/UrbanHealthScope/9.png",
      "/assets/projects-screenshots/UrbanHealthScope/10.png",
      "/assets/projects-screenshots/UrbanHealthScope/11.png",
      "/assets/projects-screenshots/UrbanHealthScope/12.png",
      "/assets/projects-screenshots/UrbanHealthScope/13.png",
      "/assets/projects-screenshots/UrbanHealthScope/14.png",
      "/assets/projects-screenshots/UrbanHealthScope/15.png"

    ],
  },
  {
    id: 3,
    name: "BMI Calculator",
    description: `A simple tool that calculates Body Mass Index (BMI) based on height and weight, helping users understand their health category.`,
    link: "https://bmi-green-zeta.vercel.app/",
    images: [
      "/assets/projects-screenshots/BMI/1.png",
      "/assets/projects-screenshots/BMI/2.png",
      "/assets/projects-screenshots/BMI/3.png",
    ],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
