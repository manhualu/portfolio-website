import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Blockquote, Theme } from "@radix-ui/themes";

const Vision = () => {
  return (
    <Theme>
      <div className="mx-40 my-20 flex items-center justify-center space-x-40">
        <Head>
          <title>My Vision</title>
        </Head>
        <div id="text" className="flex w-1/2 flex-col">
          <span className="font text-4xl font-semibold text-indigo-10">
            My Vision
          </span>
          <br></br>
          <p className="text-lg">
            Carrying on the 2023 Execs legacy, in 2024 I'd like{" "}
            <span className="font-bold">
              cohesion between the projects implemented.{" "}
            </span>
            I can especially see potential in having Circles, Notangles and
            Uni-lectives all in one application!
          </p>
          <br></br>
          <p className="text-lg">
            This way, UNSW students can easily organise their UNSW enrolments
            with
            <span className="font-bold"> one streamlined app. </span> They can
            first organise their degree with Circles and the help of
            Uni-lectives course reviews, then finally plan their term timetables
            with Notangles 🗓️.
          </p>
          <br></br>
          <p className="text-lg">
            For these course projects to work together effectively, I will
            ensure
            <span className="font-bold"> communication </span> between the
            teams. As a previous Notangles director, avid user of Circles +
            Unielectives and peoples person, I believe I can make this happen
            🚀.
          </p>
          <br></br>
          <p className="text-lg">
            As someone who also loves helping people and just genuinely wants to
            make the world a better place, I will
            <span className="font-bold"> support everyone</span> in Circles,
            Notangles and Uni-lectives and ensure we all have a
            <span className="font-bold"> good time</span>! 🙂
          </p>
          <br></br>
          <p className="text-lg">
            As a project director in 2023, I understand how stressful it gets.
            <Blockquote>
              It's always "How's my subcom doing?", never "How's the director
              doing?" frfr 😔
            </Blockquote>
          </p>
          <br></br>
          <p className="text-lg">
            Directors need just as much support as the directors support their
            subcomm, so I will do{" "}
            <span className="font-bold">bi-monthly checkups </span>(or even more
            at the start) on directors for both their wellbeing and team
            productivity.
          </p>
          <br></br>
          <p className="text-lg">
            I will also be the person these teams can{" "}
            <span className="font-bold">reach out </span> to should there be any
            logistical problems or concerns within their team!
          </p>
          <br></br>
        </div>

        <div className="relative">
          <Image
            src="/vision1.JPG"
            alt="vision1"
            width="400"
            height="400"
            className="relative h-auto shadow-lg"
          ></Image>
          <Image
            src="/vision2.JPG"
            alt="vision2"
            width="400"
            height="400"
            className="relative z-10 h-auto shadow-lg"
          ></Image>
          <Image
            src="/vision3.JPG"
            alt="vision3"
            width="400"
            height="400"
            className="relative z-10 h-auto shadow-lg"
          ></Image>
        </div>
      </div>
    </Theme>
  );
};

export default Vision;
