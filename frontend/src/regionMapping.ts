interface RegionMapping {
  platform: string;
  regional: string;
}

export const REGION_MAPPING: { [key: string]: RegionMapping } = {
  Brazil: { platform: "br1", regional: "americas" },
  "Europe Nordic and East": { platform: "eun1", regional: "europe" },
  "Europe West": { platform: "euw1", regional: "europe" },
  Japan: { platform: "jp1", regional: "asia" },
  Korea: { platform: "kr", regional: "asia" },
  "Latin America North": { platform: "la1", regional: "americas" },
  "Latin America South": { platform: "la2", regional: "americas" },
  "Middle East": { platform: "me1", regional: "europe" },
  "North America": { platform: "na1", regional: "americas" },
  Oceania: { platform: "oc1", regional: "asia" },
  Philippines: { platform: "ph2", regional: "asia" },
  Russia: { platform: "ru", regional: "europe" },
  Singapore: { platform: "sg2", regional: "asia" },
  Taiwan: { platform: "tw2", regional: "asia" },
  Thailand: { platform: "th2", regional: "asia" },
  Turkey: { platform: "tr1", regional: "europe" },
  Vietnam: { platform: "vn2", regional: "asia" },
};
