import React from "react";
import "../../../public/MicrosoftTeams.png";
import Image from "next/image";
import MicrosoftTeams from "../../../public/MicrosoftTeams.png";
import nubi from "../../../public/nubi.png";
import tibi from "../../../public/tibi.png";
import bonum from "../../../public/bonum.png";
import magnum from "../../../public/magnum.png";
import { useMediaQuery } from "react-responsive";

const ScoreBoard = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  return (
    <div className="w-full h-screen">
      <div
        className="object-cover "
        style={{
          zIndex: -1,
          position: "absolute",
          width: "100%",
          height: "1150px",
        }}
      >
        <Image
          src={MicrosoftTeams}
          alt="illustration"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex-col items-center justify-center py-10">
        <h1 className="text-lg text-[#FCD900] font-medium pb-40 text-center">
          THE SEASON TWO TEAM
        </h1>
        <h1 className="text-lg text-[#DFE0FF] font-medium pb-5 pt-10 text-center">
          ЭНЭ ЖИЛИЙН ХАМГИЙН
        </h1>
        <h1 className="text-7xl text-[#ffffff] font-medium text-center pb-20">
          СПОРТЛОГ <br /> УЛИРАЛ
        </h1>
        <div className="grid grid-rows-1 grid-flow-col gap-6 flex justify-center items-center">
          <div
            style={{
              width: "60px",
            }}
          >
            <Image
              src={nubi}
              alt="illustration"
              // layout="fill"
              className="opacity-70"
            />
          </div>
          <div
            style={{
              width: "60px",
            }}
          >
            <Image
              src={bonum}
              alt="illustration"
              // layout="fill"
              className="opacity-70"
            />
          </div>
          <div
            style={{
              width: "60px",
            }}
          >
            <Image
              src={tibi}
              alt="illustration"
              // layout="fill"
              className="opacity-70 h-12 w-12"
            />
          </div>
          <div
            style={{
              width: "60px",
            }}
          >
            <Image
              src={magnum}
              alt="illustration"
              // layout="fill"
              className="opacity-70 h-12 w-12"
            />
          </div>
        </div>
        <div class="flex-col items-center justify-center py-10 mt-5 md:w-sm lg:px-8">
          <div class="flex flex-col mt-6">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle   sm:px-6 ">
                <div class="shadow overflow-hidden sm:rounded-lg">
                  <table class="min-w-full text-sm text-[#DFE0FF]">
                    <thead class="bg-[#262784] text-24 uppercase font-medium">
                      <tr>
                        <th></th>
                        <th
                          scope="col"
                          class="px-6 py-6 text-left tracking-wider"
                        >
                          Teams
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          Шатар
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          Волейбол
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          Теннис
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          Сагсан бөмбөг
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          Багын уралдаант
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          Pts
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-[#161467] text-xl">
                      <tr class="bg-black bg-opacity-20">
                        <td class="pl-4">1</td>
                        <td class="flex px-6 py-6 whitespace-nowrap">
                          <img
                            class="w-5"
                            src="https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png"
                            alt=""
                          />
                          <span class="ml-2 font-medium">Avengers</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">3</td>
                        <td class="px-6 py-4 whitespace-nowrap">2</td>
                        <td class="px-6 py-4 whitespace-nowrap">3</td>
                        <td class="px-6 py-4 whitespace-nowrap">-</td>
                        <td class="px-6 py-4 whitespace-nowrap">-</td>
                        <td class="px-6 py-4 whitespace-nowrap">8</td>
                      </tr>
                      <tr>
                        <td class="pl-4">2</td>
                        <td class="flex px-6 py-6 whitespace-nowrap">
                          <img
                            class="w-5"
                            src="https://ssl.gstatic.com/onebox/media/sports/logos/0iShHhASp5q1SL4JhtwJiw_48x48.png"
                            alt=""
                          />
                          <span class="ml-2 font-medium">Champ</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">2</td>
                        <td class="px-6 py-4 whitespace-nowrap">6</td>
                        <td class="px-6 py-4 whitespace-nowrap">1</td>
                        <td class="px-6 py-4 whitespace-nowrap">-</td>
                        <td class="px-6 py-4 whitespace-nowrap">-</td>
                        <td class="px-6 py-4 whitespace-nowrap">9</td>
                      </tr>
                      <tr class="bg-black bg-opacity-20">
                        <td class="pl-4">3</td>
                        <td class="flex px-6 py-6 whitespace-nowrap">
                          <img
                            class="w-5"
                            src="https://ssl.gstatic.com/onebox/media/sports/logos/UDYY4FSlty6fXFBzvFfcyw_48x48.png"
                            alt=""
                          />
                          <span class="ml-2 font-medium">Doping</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">1</td>
                        <td class="px-6 py-4 whitespace-nowrap">0</td>
                        <td class="px-6 py-4 whitespace-nowrap">o</td>
                        <td class="px-6 py-4 whitespace-nowrap">-</td>
                        <td class="px-6 py-4 whitespace-nowrap">-</td>
                        <td class="px-6 py-4 whitespace-nowrap">1</td>
                      </tr>
                      <tr>
                        <td class="pl-4">4</td>
                        <td class="flex px-6 py-6 whitespace-nowrap">
                          <img
                            class="w-5"
                            src="https://ssl.gstatic.com/onebox/media/sports/logos/C3J47ea36cMBc4XPbp9aaA_48x48.png"
                            alt=""
                          />
                          <span class="ml-2 font-medium">Everest</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">0</td>
                        <td class="px-6 py-4 whitespace-nowrap">4</td>
                        <td class="px-6 py-4 whitespace-nowrap">2</td>
                        <td class="px-6 py-4 whitespace-nowrap">-</td>
                        <td class="px-6 py-4 whitespace-nowrap">-</td>
                        <td class="px-6 py-4 whitespace-nowrap">6</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
