import { getPrizesByYear, getYears } from "@/apiClient/ignobleApi";
import React from "react";

export default function PrizesPerYear(props) {
  console.log("PROPS", props);
  return (
    <div>
      <h1>Prizes for {props.year}</h1>
      <div>
        {props.prizes.map((prize) => {
          return (
            <div key={prize.id}>
              <h2>{prize.category}</h2>
              <p>{prize.rationale}</p>
              {prize.countries.map((country) => (
                <p key={country.id}>{country.flagEmoji}</p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const years = await getYears();
  return {
    // paths: [{ params: { year: "1" } }, { params: { year: "2" } }],
    paths: years.map((year) => {
      return { params: { year: year.toString() } };
    }),
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const prizes = await getPrizesByYear(context.params.year);

  return {
    props: {
      prizes: prizes,
      year: context.params.year,
    },
  };
}
