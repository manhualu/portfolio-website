import React from "react";
import { Blockquote, Theme } from "@radix-ui/themes";
import Image from "next/image";

const VisionSection = () => {
  return (
    <Theme>
      <section id="about">
        <div className="m-16 space-y-6 pb-12 md:pt-0 md:pb-48">
          <span className="text-center text-4xl font-bold text-indigo-500">
            My Vision
          </span>
          <div className="flex flex-col space-x-12 space-y-12 md:flex-row">
            <div className="flex flex-col items-stretch justify-center space-y-4">
              <p className="text-lg">
                Carrying on the 2023 Execs legacy, in 2024 I&apos;d like{" "}
                <span className="font-bold">
                  cohesion between the projects implemented.{" "}
                </span>
                I can especially see potential in having Circles, Notangles and
                Uni-lectives all in one application!
              </p>
              <br></br>
              <p className="text-lg">
                This way, UNSW students can easily organise their UNSW
                enrolments with
                <span className="font-bold"> one streamlined app. </span> They
                can first organise their degree with Circles and the help of
                Uni-lectives course reviews, then finally plan their term
                timetables with Notangles 🗓️.
              </p>
              <br></br>
              <p className="text-lg">
                For these course projects to work together effectively, I will
                ensure
                <span className="font-bold"> communication </span> between the
                teams. As a previous Notangles director, avid user of Circles +
                Unielectives and peoples person, I believe I can make this
                happen 🚀.
              </p>
              <br></br>
              <p className="text-lg">
                As someone who also loves helping people and just genuinely
                wants to make the world a better place, I will
                <span className="font-bold"> support everyone</span> in Circles,
                Notangles and Uni-lectives and ensure we all have a
                <span className="font-bold"> good time</span>! 🙂
              </p>
              <br></br>
              <p className="text-lg">
                As a project director in 2023, I understand how stressful it
                gets.
                <Blockquote>
                  It&apos;s always &quot;How&apos;s my subcom doing?&quot;,
                  never &quot;How&apos;s the director doing?&quot; frfr 😔
                </Blockquote>
              </p>
              <br></br>
              <p className="text-lg">
                Directors need just as much support as the directors support
                their subcomm, so I will do{" "}
                <span className="font-bold">bi-monthly checkups </span>(or even
                more at the start) on directors for both their wellbeing and
                team productivity.
              </p>
              <br></br>
              <p className="text-lg">
                I will also be the person these teams can{" "}
                <span className="font-bold">reach out </span> to should there be
                any logistical problems or concerns within their team!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Theme>
  );
};

export default VisionSection;
